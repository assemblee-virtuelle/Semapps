const jwt = require('jsonwebtoken');
const passport = require('passport');
const session = require('express-session');
const E = require('moleculer-web').Errors;
const fs = require('fs');

class Connector {
  constructor(passportId, settings) {
    this.passport = passport;
    this.passportId = passportId;

    if (!fs.existsSync(settings.privateKeyPath) || !fs.existsSync(settings.publicKeyPath)) {
      throw new Error('Public or private JWT key not found. Did you generate them ?');
    }

    this.settings = {
      privateKey: fs.readFileSync(settings.privateKeyPath),
      publicKey: fs.readFileSync(settings.publicKeyPath),
      sessionSecret: settings.sessionSecret || 's€m@pps',
      selectProfileData: settings.selectProfileData,
      findOrCreateProfile: settings.findOrCreateProfile,
      redirectUri: settings.redirectUri,
      ...settings
    };
  }
  async verifyToken(token) {
    try {
      return jwt.verify(token, this.settings.publicKey, { algorithms: ['RS256'] });
    } catch (err) {
      return false;
    }
  }
  saveRedirectUrl(req, res, next) {
    // Persist referer on the session to get it back after redirection
    // If the redirectUrl is already in the session, use it as default value
    req.session.redirectUrl = req.query.redirectUrl || req.session.redirectUrl || req.headers.referer;
    next();
  }
  findOrCreateProfile(req, res, next) {
    // Select profile data amongst all the data returned by the connector
    // req.user provide by Passport strategy
    const profileData = this.settings.selectProfileData(req.user);
    this.settings.findOrCreateProfile(profileData).then(webId => {
      // Keep the webId as we will need it for the token generation
      req.user.webId = webId;
      next();
    });
  }
  generateToken(req, res, next) {
    // If token is already provided by the connector, skip this step. OIDC and CAS not provide Token
    if (!req.user.token) {
      const profileData = this.settings.selectProfileData(req.user);
      const payload = { webId: req.user.webId, ...profileData };
      req.user.token = jwt.sign(payload, this.settings.privateKey, { algorithm: 'RS256' });
    }
    next();
  }
  localLogout(req, res, next) {
    req.logout(); // Passport logout
    next();
  }
  globalLogout(req, res, next) {
    //have to be implemented in extended class
    next();
  }
  redirectToFront(req, res) {
    // Redirect browser to the redirect URL pushed in session
    let redirectUrl = req.session.redirectUrl;
    // If a token was stored, add it to the URL so that the client may use it
    if (req.user && req.user.token) redirectUrl += '?token=' + req.user.token;
    // Redirect using NodeJS HTTP
    res.writeHead(302, { Location: redirectUrl });
    res.end();
  }
  login() {
    return (req, res) => {
      const middlewares = [
        this.saveRedirectUrl.bind(this),
        this.passport.authenticate(this.passportId, {
          session: false
        }),
        this.findOrCreateProfile.bind(this),
        this.generateToken.bind(this),
        this.redirectToFront.bind(this)
      ];

      this.runMiddlewares(middlewares, req, res);
    };
  }
  logout() {
    return (req, res) => {
      let middlewares = [
        this.saveRedirectUrl.bind(this),
        this.localLogout.bind(this),
        req.query.global === 'true' ? this.globalLogout.bind(this) : this.redirectToFront.bind(this)
      ];

      this.runMiddlewares(middlewares, req, res);
    };
  }
  async runMiddlewares(middlewares, req, res) {
    for (const middleware of middlewares) {
      await new Promise(resolve => middleware(req, res, resolve));
    }
  }
  async getWebId(ctx) {
    return ctx.meta.tokenPayload.webId;
  }
  getRoute() {
    return {
      use: [
        session({
          secret: this.settings.sessionSecret,
          maxAge: null
        }),
        this.passport.initialize(),
        this.passport.session()
      ],
      aliases: {
        'GET auth/logout'(req, res) {
          this.connector.logout()(req, res);
        },
        'GET auth'(req, res) {
          this.connector.login()(req, res);
        }
      }
    };
  }
  // See https://moleculer.services/docs/0.13/moleculer-web.html#Authentication
  async authenticate(ctx, route, req, res) {
    try {
      const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
      if (token) {
        const payload = await this.verifyToken(token);
        ctx.meta.tokenPayload = payload;
        ctx.meta.webId = await this.getWebId(ctx);
        return Promise.resolve(payload);
      } else {
        return Promise.resolve(null);
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }
  // See https://moleculer.services/docs/0.13/moleculer-web.html#Authorization
  async authorize(ctx, route, req, res) {
    try {
      const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
      if (token) {
        ctx.meta.tokenPayload = await this.verifyToken(token);
        ctx.meta.webId = await this.getWebId(ctx);
        return Promise.resolve(ctx);
      } else {
        return Promise.reject(new E.UnAuthorizedError(E.ERR_NO_TOKEN));
      }
    } catch (err) {
      return Promise.reject(new E.UnAuthorizedError(E.ERR_INVALID_TOKEN));
    }
  }
}

module.exports = Connector;
