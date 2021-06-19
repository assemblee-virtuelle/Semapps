---
title: Contribuer au noyau de SemApps
---

En tant que développeur, vous pouvez choisir d'utiliser SemApps comme une bibliothèque pour votre propre projet, dans ce cas les [guides](../guides/ldp-server.md) seront votre meilleur ami.

D'autre part, si vous voulez contribuer au noyau de SemApps, cette page est pour vous.

## Lancer SemApps localement

Les outils suivants vous permettent, en quelques commandes, de lancer entièrement votre SemApps:

- Middleware
- Frontend ([DMS](../guides/dms.md))
- Une instance Jena Fuseki

### La première fois

Vous devez installer :

- [docker](https://docs.docker.com/install/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [make](https://www.gnu.org/software/make/)

Une fois que cela est fait, vous pouvez lancer les commandes suivantes :

```
git clone https://github.com/assemblee-virtuelle/semapps.git
cd semapps
make init
make build
make start
```
### Logs

```
make log
```

### Stop

```
make stop
```

## Récupérer des données

Si vous souhaitez disposer de quelques données sémantiques pour commencer à tester votre SemApps, veuillez nous contacter.


## Obtenir de l'aide

Notre [salle de chat Riot/Matrix](https://riot.im/app/#/room/#semapps:matrix.virtual-assembly.org) est le principal point d'entrée pour toutes les personnes qui souhaitent apporter leur contribution.
