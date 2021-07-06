"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),r=e(t),n=require("react-router"),a=require("react-admin"),o=require("@material-ui/core"),i=require("react-final-form"),l=require("react-router-dom"),c=require("react-redux"),s=e(require("@material-ui/core/Typography")),u=e(require("@material-ui/icons/ViewList")),m=e(require("@material-ui/icons/ExpandMore")),p=require("@semapps/archipelago-layout"),d=require("@material-ui/core/styles"),f=e(require("@material-ui/core/Tabs")),h=e(require("@material-ui/core/Tab")),b=e(require("react-markdown")),y=e(require("@material-ui/icons/Add")),g=e(require("@material-ui/icons/Cancel"));function v(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=function(e){var t=e.input,n=k(e,["input"]);return r.createElement(o.TextField,w({},t,n))},N=function(e){var t=e.input,n=k(e,["input"]),i=c.useSelector(a.getResources,c.shallowEqual);return r.createElement(o.Select,w({},t,n),i.filter((function(e){return e.hasList||e.name===t.value})).map((function(e){return r.createElement(o.MenuItem,{value:e.name,key:e.name},e.options.label)})))},B=function(){var e=l.useHistory(),t=l.useLocation().pathname.match(/^\/([^/]+)/),n=t?t[1]:"Organization";return r.createElement(i.Form,{onSubmit:function(t){var r=t.filter,n=t.type;r?e.push("/".concat(n,"?filter=").concat(encodeURIComponent('{"q": "'.concat(r,'"}')))):e.push("/".concat(n))},initialValues:{type:n},render:function(e){var t=e.handleSubmit;return r.createElement("form",{onSubmit:t},r.createElement(o.Grid,{container:!0,spacing:2},r.createElement(o.Grid,{item:!0,xs:5},r.createElement(i.Field,{name:"filter",component:O,placeholder:"Rechercher...",fullWidth:!0})),r.createElement(o.Grid,{item:!0,xs:5},r.createElement(i.Field,{name:"type",component:N,fullWidth:!0})),r.createElement(o.Grid,{item:!0,xs:2},r.createElement(o.Button,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},I=o.makeStyles((function(e){var t;return{menuButton:E({},e.breakpoints.up("sm"),{display:"none"}),toolbar:E({height:56},e.breakpoints.up("sm"),{paddingLeft:"24px"}),spacer:{flex:1},searchFormContainer:E({minWidth:240,flex:2,margin:"0 5%"},e.breakpoints.up("md"),{minWidth:360}),searchFormWrapper:{maxWidth:880,margin:"auto"},presContainer:E({flex:1,overflow:"hidden"},e.breakpoints.up("sm"),{flex:"unset",display:"flex",justifyContent:"flex-start",alignItems:"center"}),logoContainer:E({display:"none"},e.breakpoints.up("sm"),{height:48,marginLeft:"0.2em",marginRight:"0.2em",display:"block"}),logo:{height:"100%"},title:(t={display:"block",color:e.palette.common.white},E(t,e.breakpoints.up("sm"),{display:"none"}),E(t,e.breakpoints.up("md"),{display:"block"}),t)}})),R=function(e){var t=I();return r.createElement(a.AppBar,w({},e,{classes:x({toolbar:t.toolbar,menuButton:t.menuButton},e.classes),color:"primary"}),r.createElement(a.Link,{to:"/"},r.createElement("div",{className:t.presContainer},r.createElement("div",{className:t.logoContainer},r.createElement(o.Zoom,{in:!0,timeout:2e3},r.createElement("img",{className:t.logo,src:process.env.PUBLIC_URL+"/logo192.png",alt:"logo"}))),r.createElement(s,{className:t.title,variant:"h6",noWrap:!0},e.title))),r.createElement(o.Hidden,{only:"xs"},r.createElement("div",{className:t.searchFormContainer},r.createElement("div",{className:t.searchFormWrapper},r.createElement(B,null)))))},A=o.makeStyles((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),j=function(e){var t=e.handleToggle,n=e.sidebarIsOpen,a=e.isOpen,i=e.name,l=e.icon,c=e.children,s=e.dense,u=A(),p=r.createElement(o.MenuItem,{dense:s,button:!0,onClick:t},r.createElement(o.ListItemIcon,{className:u.icon},a?r.createElement(m,null):l),r.createElement(o.Typography,{variant:"inherit",color:"textSecondary"},i));return r.createElement(r.Fragment,null,n||a?p:r.createElement(o.Tooltip,{title:i,placement:"right"},p),r.createElement(o.Collapse,{in:a,timeout:"auto",unmountOnExit:!0},r.createElement(o.List,{dense:s,component:"div",disablePadding:!0,className:n?u.sidebarIsOpen:u.sidebarIsClosed},c)))},F=function(e){var t=e.resource,n=e.onClick,o=e.open;return r.createElement(a.MenuItemLink,{to:"/".concat(t.name),primaryText:t.options&&t.options.label||t.name,leftIcon:t.icon?r.createElement(t.icon,null):r.createElement(DefaultIcon,null),onClick:n,sidebarIsOpen:o})},M=o.makeStyles({appFrame:{marginTop:56},title:{position:"absolute",top:80,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),W=function(e){var t=e.appBar,n=e.menu,o=(e.userMenu,e.children),i=k(e,["appBar","menu","userMenu","children"]),l=M();return r.createElement(a.Layout,w({},i,{classes:{appFrame:l.appFrame},appBar:t,menu:n}),o)};W.defaultProps={appBar:R,menu:function(e){var i=e.onMenuClick,l=e.logout,s=e.dense,m=void 0!==s&&s,p=e.openAll,d=void 0!==p&&p,f=o.useMediaQuery((function(e){return e.breakpoints.down("xs")})),h=c.useSelector(a.getResources),b=n.useLocation().pathname.match(/^\/([^/]+)/),y=b?b[1]:null,g=L(t.useState({}),2),v=g[0],w=g[1],C=t.useMemo((function(){var e=h.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return h.filter((function(t){return e.includes(t.name)}))}),[h]);return t.useEffect((function(){var e=h.find((function(e){return e.name===y})),t=e&&C.find((function(t){return t.name===e.options.parent})),r=C.reduce((function(e,r){return e[r.name]=d||t&&r.name===t.name,e}),{});w((function(e){return x(x({},r),e)}))}),[C,h,y,d]),r.createElement(o.Box,{mt:2},C.map((function(e){return r.createElement(j,{key:e.name,handleToggle:function(){return t=e.name,void w((function(e){return x(x({},e),{},E({},t,!e[t]))}));var t},isOpen:v[e.name],sidebarIsOpen:!0,name:e.options&&e.options.label||e.name,icon:e.icon?r.createElement(e.icon,null):r.createElement(u,null),dense:m},h.filter((function(t){return t.hasList&&t.options.parent===e.name})).map((function(e){return r.createElement(F,{key:e.name,resource:e,onClick:i,open:!0})})))})),h.filter((function(e){return e.hasList&&(!e.options||!e.options.parent)})).map((function(e){return r.createElement(F,{key:e.name,resource:e,onClick:i,open:!0})})),f&&l)}};var _=o.makeStyles((function(e){return{topToolBar:E({boxSizing:"border-box",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},e.breakpoints.down("xs"),{marginTop:8,marginBottom:8}),titleContainer:function(t){return E({maxWidth:t.sidebarOpen?"calc(100vw - 300px)":"calc(100vw - 100px)",position:"relative",top:-8,marginRight:8},e.breakpoints.down("xs"),{top:0,marginRight:0,maxWidth:"90vw"})},title:E({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.breakpoints.down("xs"),{fontSize:"1.8rem"}),actionsContainer:function(t){return E({whiteSpace:"nowrap",marginLeft:"auto",overflow:"hidden"},e.breakpoints.down("xs"),{height:"list"===t.currentView?0:"auto"})}}})),D=o.makeStyles((function(e){return{header:{position:"relative",height:65},logo:E({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),q=function(e){var t=e.userMenu,n=e.logout,i=D(),c=a.useGetIdentity().identity;return r.createElement(o.Box,{bgcolor:"primary.main"},r.createElement(o.Container,{maxWidth:"lg",className:i.header},r.createElement(o.Grid,{container:!0},r.createElement(o.Grid,{item:!0,xs:12,sm:t?3:6},r.createElement(l.Link,{to:"/"},r.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:i.logo}))),r.createElement(o.Hidden,{xsDown:!0},r.createElement(o.Grid,{item:!0,sm:6},r.createElement(o.Box,{pt:2},r.createElement(B,null)))),t&&r.createElement(o.Grid,{item:!0,sm:3,align:"right"},r.createElement(o.Box,{pt:c&&""!==c.id?2:1},r.cloneElement(t,{logout:n}))))))},V=function(){var e=l.useLocation().pathname;return t.useEffect((function(){window.scrollTo(0,0)}),[e]),null},G=function(e){var t=e.appBar,n=e.title,i=e.open,l=e.logout,c=e.theme,s=e.children,u=o.useMediaQuery(c.breakpoints.down("xs"));return r.createElement(o.ThemeProvider,{theme:c},r.createElement(V,null),r.createElement(t,{title:n,open:i,logout:l}),r.createElement(o.Container,{maxWidth:"lg",disableGutters:u},r.createElement(o.Box,{mb:{xs:0,sm:5}},s)),r.createElement(a.Notification,null))};G.defaultProps={appBar:q};var U=o.createMuiTheme(),z=o.createMuiTheme({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:E({padding:25},U.breakpoints.down("xs"),{padding:15})},RaList:{content:E({padding:25},U.breakpoints.down("xs"),{padding:15,paddingTop:0,marginTop:-8})},RaListToolbar:{toolbar:{paddingLeft:"0 !important"}},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},MuiTab:{labelIcon:{paddingTop:0}}}}),H=function(e){var t=e.basePath,n=e.className,o=e.data,i=e.hasList,l=k(e,["basePath","className","data","hasList"]);return r.createElement(p.TopToolbar,w({className:n},l),i&&r.createElement(a.ListButton,{basePath:t,record:o}))},Q=function(e){var t=e.basePath,n=e.className,o=e.data,i=e.hasList,l=e.hasShow,c=k(e,["basePath","className","data","hasList","hasShow"]);return r.createElement(p.TopToolbar,w({className:n},c),i&&r.createElement(a.ListButton,{basePath:t,record:o}),l&&r.createElement(a.ShowButton,{basePath:t,record:o}))},Y=o.makeStyles((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{backgroundColor:e.palette.common.white,display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),Z=function(e){var t=e.bulkActions,i=e.basePath,l=e.currentSort,c=e.displayedFilters,s=e.exporter,u=e.filters,m=e.filterValues,d=e.onUnselectItems,f=e.resource,h=e.selectedIds,b=e.showFilter,y=e.total,g=e.views,v=e.currentView,E=e.setView,w=k(e,["bulkActions","basePath","currentSort","displayedFilters","exporter","filters","filterValues","onUnselectItems","resource","selectedIds","showFilter","total","views","currentView","setView"]),C=o.useMediaQuery((function(e){return e.breakpoints.down("xs")})),x=a.useResourceDefinition(w),P=new URLSearchParams(n.useLocation().search);return r.createElement(p.TopToolbar,{currentView:v},g&&Object.entries(g).filter((function(e){return L(e,1)[0]!==v})).map((function(e){var t=L(e,2),n=t[0],o=t[1];return P.set("view",n),P.set("page",1),P.set("perPage",o.perPage),o.sort&&(P.set("sort",o.sort.field),P.set("order",o.sort.order)),r.createElement(a.Link,{key:n,to:"?"+P.toString()},r.createElement(a.Button,{onClick:function(){return E(n)},label:o.label},r.createElement(o.icon)))})),u&&r.cloneElement(u,{resource:f,showFilter:b,displayedFilters:c,filterValues:m,context:"button"}),x.hasCreate&&r.createElement(a.CreateButton,{basePath:i}),!C&&!1!==s&&r.createElement(a.ExportButton,{disabled:0===y,resource:f,sort:l,filter:m,exporter:s}),t&&r.cloneElement(t,{basePath:i,filterValues:m,resource:f,selectedIds:h,onUnselectItems:d}))},$=function(e){return r.createElement(a.Pagination,w({rowsPerPageOptions:[25,50,100]},e))},J=function(e){var t=e.actions,n=k(e,["actions"]);return r.createElement(a.List,w({actions:r.cloneElement(t,n),sort:{field:"pair:label",order:"ASC"},pagination:r.createElement($,null),perPage:50},n))};J.defaultProps={actions:r.createElement(Z,null)};var K=function(e){e.children;var a=e.actions,o=e.views,i=e.ListComponent,l=k(e,["children","actions","views","ListComponent"]),c=new URLSearchParams(n.useLocation().search),s=c.has("view")?c.get("view"):Object.keys(o)[0],u=L(t.useState(s),2),m=u[0],p=u[1];return r.createElement(i,w({actions:r.cloneElement(a,x({views:o,currentView:m,setView:p},l)),pagination:o[m].pagination,perPage:o[s].perPage,sort:o[s].sort},l),o[m].list)};K.defaultProps={actions:r.createElement(Z,null),ListComponent:a.List};var X=o.makeStyles((function(e){return{tab:{minWidth:55}}})),ee=d.createMuiTheme({overrides:{MuiListItem:{root:{padding:15,paddingBottom:15,paddingTop:15,marginBottom:10,borderStyle:"solid",borderColor:"#e0e0e0",borderWidth:1}}}});function te(e,t){return e(t={exports:{}},t.exports),t.exports}var re,ne=te((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=(n=r)&&n.__esModule?n:{default:n};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.reCalculateColumnCount=r.reCalculateColumnCount.bind(r),r.reCalculateColumnCountDebounce=r.reCalculateColumnCountDebounce.bind(r);var n=void 0;return n=r.props.breakpointCols&&r.props.breakpointCols.default?r.props.breakpointCols.default:parseInt(r.props.breakpointCols)||2,r.state={columnCount:n},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":o(t))&&(t={default:parseInt(t)||2});var r=1/0,n=t.default||2;for(var a in t){var i=parseInt(a);i>0&&e<=i&&i<r&&(r=i,n=t[a])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),r=[].concat(this.props.children||[]),n=0;n<r.length;n++){var a=n%e;t[a]||(t[a]=[]),t[a].push(r[n])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,r=e.columnAttrs,n=void 0===r?{}:r,o=e.columnClassName,i=this.itemsInColumns(),c=100/i.length+"%",s=o;"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var u=a({},t,n,{style:a({},n.style,{width:c}),className:s});return i.map((function(e,t){return l.default.createElement("div",a({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),n=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(n="my-masonry-grid")),l.default.createElement("div",a({},r,{className:n}),this.renderColumns())}}]),t}(l.default.Component);s.defaultProps=c,t.default=s})),ae=(re=ne)&&re.__esModule&&Object.prototype.hasOwnProperty.call(re,"default")?re.default:re,oe=o.makeStyles((function(){return{grid:{display:"flex",marginLeft:-20,marginBottom:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),ie=function(e){var t=e.image,n=e.content,i=e.actions,l=e.breakpointCols,c=e.linkType,s=oe(),u=a.useListContext(),m=u.ids,p=u.data,d=u.basePath;return r.createElement(ae,{breakpointCols:l,className:s.grid,columnClassName:s.column},m.map((function(e){var l="function"==typeof t?t(p[e]):t;return r.createElement(o.Card,{key:e,className:s.card},r.createElement(a.Link,{to:a.linkToRecord(d,e)+"/"+c},r.createElement(o.CardActionArea,null,l&&r.createElement(o.CardMedia,{className:s.media,image:l}),n&&r.createElement(o.CardContent,null,n(p[e])))),i&&r.createElement(o.CardActions,null,i.map((function(t){return r.createElement(t,{record:p[e],basePath:d})}))))})))};ie.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var le=function(e){var t=e.reference,n=e.source,o=e.inverseSource,i=e.limit,l=e.sort,s=e.filter,u=e.label,m=e.icon,p=a.useGetList(t,{page:1,perPage:i},l,s),d=p.data,f=p.ids,h=c.useSelector(a.getResources,c.shallowEqual).filter((function(e){return(null==e?void 0:e.name)===t}))[0];return r.createElement(a.FilterList,{label:u||h.options.label,icon:m||r.createElement(h.icon)},f.filter((function(e){return!o||d[e][o]})).map((function(e){return r.createElement(a.FilterListItem,{key:e,label:d[e]["pair:label"],value:E({},n,e)})})))};le.defaultProps={limit:25};var ce=o.makeStyles((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),se=function(e){var t=e.label,n=e.children,i=e.record,l=e.resource,c=e.source,s=e.basePath,u=e.mb,m=ce(),p=a.useTranslate();return(null==i?void 0:i[c])?r.createElement(o.Box,{mb:u},r.createElement(o.Box,{className:m.rightLabel},p.apply(void 0,P(a.getFieldLabelTranslationArgs({label:t,resource:l,source:c})))),n&&r.createElement(o.Box,{m:0},r.cloneElement(n,{record:i,resource:l,basePath:s}))):null};se.defaultProps={mb:4};var ue=o.makeStyles((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),me=function(e){var t=e.basePath,n=e.children,i=e.record,l=e.resource,c=ue(),s=a.useTranslate();return r.createElement(o.Box,null,r.Children.map(n,(function(e){return e&&i[e.props.source]&&r.isValidElement(e)?r.createElement("div",{key:e.props.source},e.props.addLabel?r.createElement(o.Grid,{container:!0,spacing:3,className:c.line},r.createElement(o.Grid,{item:!0,xs:3},r.createElement(o.Typography,{color:"textSecondary",align:"right",variant:"body2"},s.apply(void 0,P(a.getFieldLabelTranslationArgs({label:e.props.label,resource:l,source:e.props.source}))))),r.createElement(o.Grid,{item:!0,xs:9},r.createElement(o.Typography,{variant:"body2"},r.cloneElement(e,{record:i,resource:l,basePath:t})))):"string"==typeof e.type?e:r.cloneElement(e,{record:i,resource:l,basePath:t})):null})))};function pe(){}function de(){}de.resetWarningCache=pe;var fe=te((function(e){e.exports=function(){function e(e,t,r,n,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:de,resetWarningCache:pe};return r.PropTypes=r,r}()})),he=function(e){var r=e.children,n=e.syncWithLocation,o=e.value,i=e.record,c=e.showResourcesIcons,s=k(e,["children","syncWithLocation","value","record","showResourcesIcons"]),u=l.useLocation(),m=l.useRouteMatch(),p=u.pathname;return t.createElement(f,w({indicatorColor:"primary",value:n?p:o},s),t.Children.map(r,(function(e,r){if(!e||!t.isValidElement(e))return null;var o=a.getTabFullPath(e,r,m.url);return t.cloneElement(e,{context:"header",value:n?o:r,syncWithLocation:n,record:i,showResourcesIcons:c})})))};he.propTypes={children:fe.node};var be=o.makeStyles((function(e){return{content:{padding:e.spacing(2)}}})),ye=function(e){var n=e.children,i=e.syncWithLocation,c=void 0===i||i,s=e.tabs,u=e.record,m=e.showResourcesIcons,p=void 0!==m&&m,d=l.useRouteMatch(),f=be(),h=t.Children.toArray(n).filter((function(e){return null!==e})),b=L(t.useState(0),2),y=b[0],g=b[1];return r.createElement("div",null,t.cloneElement(s,{syncWithLocation:c,onChange:function(e,t){c||g(t)},value:y,record:u,showResourcesIcons:p},h),r.createElement(o.Divider,null),r.createElement("div",{className:f.content},t.Children.map(h,(function(e,n){return e&&t.isValidElement(e)?c?r.createElement(l.Route,{exact:!0,path:a.escapePath(a.getTabFullPath(e,n,d.url)),render:function(){return t.cloneElement(e,{context:"content",record:u})}}):y===n?t.cloneElement(e,{context:"content",record:u}):null:null}))))};ye.defaultProps={tabs:r.createElement(he,null)};var ge=o.makeStyles((function(e){return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:E({width:"100%",maxHeight:"none"},e.breakpoints.down("sm"),{margin:0})}})),ve=function(e){var t=e.record,n=e.source,i=e.defaultImage,l=k(e,["record","source","defaultImage"]),c=ge();if(t[n]){if(t[n].rawFile instanceof File)return r.createElement(o.Box,{align:"center",className:c.loader},r.createElement(o.CircularProgress,null))}else t[n]=i;return r.createElement(a.ImageField,w({record:t,source:n,classes:{image:c.image}},l))},Ee=o.makeStyles((function(){return{root:{flexGrow:1}}})),we=function(e){return e.stopPropagation()},Ce=function(){},xe=function(e){var r=e.children,n=e.linkType,i=e.spacing,l=k(e,["children","linkType","spacing"]),c=a.useListContext(),s=c.ids,u=c.data,m=c.basePath;return t.createElement(o.Grid,{container:!0,spacing:i},s.map((function(e){return t.createElement(o.Grid,w({item:!0,key:e},l),n?t.createElement(a.Link,{to:a.linkToRecord(m,e,n),onClick:we,t:!0},t.cloneElement(t.Children.only(r),{record:u[e],basePath:m,onClick:Ce})):t.cloneElement(t.Children.only(r),{record:u[e],basePath:m}))})))};xe.defaultProps={xs:6,spacing:3,linkType:"edit"};var ke=o.makeStyles((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),Le=function(e){var t=e.children,n=e.image,i=e.defaultImage,l=ke(),c=a.useShowContext(),s=c.basePath,u=c.loaded,m=c.record,p=c.resource;return u?r.createElement("div",{className:l.root},r.createElement(o.Typography,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),r.createElement(o.Grid,{container:!0,spacing:5},r.createElement(o.Grid,{item:!0,xs:12,sm:4},r.createElement(ve,{record:m,source:n,defaultImage:i})),r.createElement(o.Grid,{item:!0,xs:12,sm:8},r.createElement(me,{record:m,resource:p,basePath:s},t)))):null};Le.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var Pe=o.makeStyles((function(e){return{subTitle:{marginTop:e.spacing(5),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),Se=function(e){var t=e.children,n=Pe();return r.createElement(o.Typography,{variant:"h5",className:n.subTitle},r.createElement("span",{className:n.subTitleSpan},t))},Te=te((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),Oe=o.makeStyles((function(e){return{divider:{paddingTop:5,paddingBottom:20,borderBottom:"1px lightgrey solid","&:last-child":{borderBottom:"none"}}}})),Ne=function(e){var t=e.children,n=e.divider,i=e.Label,l=a.useTranslate(),c=Oe(),s=a.useShowContext(),u=s.basePath,m=s.loaded,p=s.record,d=s.resource;return m?r.createElement(o.Box,null,r.Children.map(t,(function(e){return e&&p[e.props.source]&&r.isValidElement(e)?r.createElement("div",{key:e.props.source,className:n?c.divider:null},e.props.addLabel?r.createElement(r.Fragment,null,r.createElement(i,null,l.apply(void 0,P(a.getFieldLabelTranslationArgs({label:e.props.label,resource:d,source:e.props.source})))),r.cloneElement(e,{record:p,resource:d,basePath:u})):"string"==typeof e.type?e:r.cloneElement(e,{record:p,resource:d,basePath:u})):null}))):null};Ne.defaultProps={Label:Se};var Be=function(e){var t=e.basePath,n=e.className,o=e.data,i=e.hasList,l=e.hasEdit,c=k(e,["basePath","className","data","hasList","hasEdit"]);return r.createElement(p.TopToolbar,w({className:n},c),i&&r.createElement(a.ListButton,{basePath:t,record:o}),l&&r.createElement(a.EditButton,{basePath:t,record:o}))},Ie=o.makeStyles((function(e){return{parent:function(e){return x({position:"relative"},e.parent)},image:function(e){return x({width:"100%",borderRadius:"50%"},e.image)},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),Re=function(e){var t=e.source,n=e.record;return n&&n[t]?r.createElement(b,{source:n[t]}):null};Re.defaultProps={addLabel:!0};var Ae=d.makeStyles((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{}}})),je=function(e){return e.stopPropagation()},Fe=function(){},Me=o.makeStyles((function(e){return{parent:function(e){return x({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),We=function(e){var t=e.record,n=e.label,a=e.image,i=e.fallback,l=e.variant,c=e.labelColor,s=e.classes,u=e.children;if(s=Me(s),!t)return null;var m="function"==typeof n?n(t):t[n],p="function"==typeof a?a(t):t[a],d="function"==typeof i?i(t):i;return r.createElement(o.Box,{className:s.parent},r.createElement("div",{className:s.square},r.createElement(o.Avatar,{src:p||d,alt:m,fallback:d,className:s.avatar,variant:l},u)),r.createElement(o.Box,{bgcolor:c,className:s.child,borderRadius:5},r.createElement(o.Typography,{align:"center",className:s.caption,noWrap:!0},m)))};We.defaultProps={labelColor:"secondary.main"};var _e=o.makeStyles({root:{display:"flex",alignItems:"center"}});exports.AccordionList=function(e){var t=e.date,n=e.title,i=e.content,l=Y(),c=a.useListContext(),s=c.ids,u=c.data,p=c.resource,d=c.basePath;return r.createElement("div",{className:l.root},s.map((function(e,a){var c=t&&new Date(t(u[e])),s=n&&n(u[e]);return r.createElement(o.Accordion,{className:l.accordion,key:a},r.createElement(o.AccordionSummary,{expandIcon:r.createElement(m,null),"aria-controls":"panel".concat(a,"-content"),id:"panel".concat(a,"-header"),className:l.accordionSummary},c&&r.createElement(o.Typography,{className:l.date},c.toLocaleDateString()),r.createElement(o.Typography,{className:l.title},s)),r.createElement(o.AccordionDetails,{className:l.accordionDetails},r.createElement(i,{record:u[e],resource:p,basePath:d})))})))},exports.AppBar=R,exports.AvatarField=We,exports.Column=function(e){var t=e.basePath,n=e.children,a=e.record,i=e.resource,l=e.showLabel,c=k(e,["basePath","children","record","resource","showLabel"]);return r.createElement(o.Grid,w({item:!0},c),r.Children.map(n,(function(e){return e&&r.isValidElement(e)?r.createElement("div",{key:e.props.source},e.props.addLabel&&l?r.createElement(se,{record:a,resource:i,basePath:t,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:r.cloneElement(e,{record:a,resource:i,basePath:t})):null})))},exports.ColumnShowLayout=function(e){var t=e.basePath,n=e.children,a=e.record,i=e.resource,l=Ee();return r.createElement("div",{className:l.root},r.createElement(o.Grid,{container:!0,spacing:5},r.Children.map(n,(function(e){return e&&r.isValidElement(e)?r.cloneElement(e,{resource:i,record:a,basePath:t}):null}))))},exports.Create=function(e){return r.createElement(a.Create,w({actions:r.createElement(H,null),redirect:"show"},e))},exports.CreateActions=H,exports.DetailsList=me,exports.Edit=function(e){return r.createElement(a.Edit,w({actions:r.createElement(Q,null)},e))},exports.EditActions=Q,exports.GridList=xe,exports.Hero=Le,exports.InverseReferenceShowLayout=ye,exports.LargeLabel=Se,exports.Layout=W,exports.List=J,exports.ListActions=Z,exports.ListTab=function(e){var n,o,i=e.basePath,s=e.children,u=e.context,m=e.className,p=e.icon,d=e.label,f=e.record,b=e.resource,y=e.syncWithLocation,g=void 0===y||y,v=e.value,C=e.inversePredicate,L=e.filter,P=void 0===L?{}:L,S=e.showResourcesIcons,T=void 0!==S&&S,O=k(e,["basePath","children","context","className","icon","label","record","resource","syncWithLocation","value","inversePredicate","filter","showResourcesIcons"]),N=l.useLocation(),B={component:l.Link,to:x(x({},N),{},{pathname:v})},I=c.useSelector(a.getResources),R=t.useMemo((function(){return I.find((function(e){return(null==e?void 0:e.name)===b}))}),[I,b]),A=a.useListController({resource:b,basePath:i,filter:x(E({},C,null==f?void 0:f.id),P),perPage:500});return"header"===u?r.createElement(h,w({key:d,label:A.ids?"".concat(d||(null===(n=R.options)||void 0===n?void 0:n.label)," (").concat(A.ids.length,")"):d||(null===(o=R.options)||void 0===o?void 0:o.label),value:v,icon:p||T&&r.createElement(R.icon),className:Te("show-tab",m)},g?B:{},O)):r.createElement(a.ListContextProvider,{value:A},s)},exports.MainImage=ve,exports.MainList=Ne,exports.MarkdownField=Re,exports.MasonryList=ie,exports.MultiViewsList=K,exports.RedirectByType=function(e){var t=e.record,a=e.typesMap;if(t){Array.isArray(t.type)||(t.type=[t.type]);var o=Object.keys(a).find((function(e){return t.type.includes(a[e])}));if(o)return r.createElement(n.Redirect,{to:"/".concat(o,"/").concat(encodeURIComponent(t.id),"/show")})}return null},exports.ReferenceFilter=le,exports.ReferenceQuickCreateInput=function(e){var n=e.label,l=e.reference,c=e.source,s=e.children,u=_e(),m=L(t.useState(!1),2),p=m[0],d=m[1],f=L(a.useCreate(l),2),h=f[0],b=f[1].loading,E=a.useTranslate(),w=a.useNotify(),C=i.useForm(),x=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h({payload:{data:t}},{onSuccess:function(e){var t=e.data;d(!1),C.change(c,t["@id"])},onFailure:function(e){var t=e.error;w(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){v(o,n,a,i,l,"next",e)}function l(e){v(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return r.createElement("div",{className:u.root},r.createElement(a.ReferenceInput,{label:n,reference:l,source:c},s),r.createElement(a.Button,{onClick:function(){return d(!0)},label:"ra.action.create"},r.createElement(y,null)),r.createElement(o.Dialog,{fullWidth:!0,open:p,onClose:function(){return d(!1)}},r.createElement(o.DialogTitle,null,E("ra.action.create")),r.createElement(a.FormWithRedirect,{resource:l,save:x,render:function(e){var t=e.handleSubmitWithRedirect,n=e.pristine,i=e.saving;return r.createElement(r.Fragment,null,r.createElement(o.DialogContent,null,r.createElement(a.TextInput,{label:"Titre",source:"pair:label",validate:a.required(),fullWidth:!0})),r.createElement(o.DialogActions,null,r.createElement(a.Button,{label:"ra.action.cancel",onClick:function(){return d(!1)},disabled:b},r.createElement(g,null)),r.createElement(a.SaveButton,{handleSubmitWithRedirect:t,pristine:n,saving:i,disabled:b})))}})))},exports.RightLabel=se,exports.SeparatedListField=function(e){e.classes;var r=e.className,n=e.children,i=e.linkType,l=void 0===i?"edit":i,c=e.separator,s=void 0===c?",":c,u=k(e,["classes","className","children","linkType","separator"]),m=a.useListContext(e),p=m.ids,d=m.data,f=m.loaded,h=m.resource,b=m.basePath,y=Ae(e);return!1===f?t.createElement(o.LinearProgress,null):t.createElement("span",w({className:Te(y.root,r)},a.sanitizeListRestProps(u)),p.map((function(e,r){var o=!!l&&a.linkToRecord(b,e,l);return o?t.createElement("span",{key:e},t.createElement(a.Link,{classes:y.link,to:o,onClick:je},t.cloneElement(t.Children.only(n),{record:d[e],resource:h,basePath:b,onClick:Fe})),r<p.length-1&&s+" "):t.createElement("span",{key:e},t.cloneElement(t.Children.only(n),{record:d[e],resource:h,basePath:b}),r<p.length-1&&s+" ")})))},exports.Show=function(e){return r.createElement(a.Show,w({actions:r.createElement(Be,null)},e))},exports.ShowActions=Be,exports.SideList=function(e){var t=e.children,n=a.useShowContext(),o=n.basePath,i=n.loaded,l=n.record,c=n.resource;return i?r.Children.map(t,(function(e){return e&&r.isValidElement(e)?r.createElement("div",{key:e.props.source},e.props.addLabel?r.createElement(se,{record:l,resource:c,basePath:o,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:r.cloneElement(e,{record:l,resource:c,basePath:o})):null})):null},exports.SimpleAppBar=q,exports.SimpleLayout=G,exports.SimpleList=function(e){return r.createElement(d.ThemeProvider,{theme:ee},r.createElement(a.SimpleList,e))},exports.TabsMenu=function(){var e=n.useHistory(),t=X(),i=n.useLocation().pathname.match(/^\/([^/]+)/),l=i?i[1]:null,s=c.useSelector(a.getResources,c.shallowEqual),u=o.useMediaQuery((function(e){return e.breakpoints.down("xs")}));return r.createElement(o.Tabs,{value:l,onChange:function(t,r){return e.push("/"+r)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},s.filter((function(e){return e.hasList})).map((function(e){return r.createElement(o.Tab,{key:e.name,icon:r.createElement(e.icon),label:u?void 0:e.options.label,value:e.name,className:t.tab})})))},exports.TopToolbar=function(e){var t=e.children,n=e.currentView,i=(k(e,["children","currentView"]),c.useSelector((function(e){return e.admin.ui.sidebarOpen}))),l=_({currentView:n,sidebarOpen:i});return r.createElement(a.TopToolbar,{classes:{root:l.topToolBar}},r.createElement("div",{className:l.titleContainer},r.createElement(o.Typography,{className:l.title,variant:"h4",color:"primary",id:"react-admin-title",component:"h1"})),r.createElement("div",{className:l.actionsContainer},t))},exports.UserIcon=function(e){var t=e.record,n=e.styles;k(e,["record","styles"]);console.log();var a=Ie(n),i=t?t["pair:firstName"]+" "+t["pair:lastName"]:"";return r.createElement(o.Box,{className:a.parent},r.createElement("img",{src:t&&t.image||process.env.PUBLIC_URL+"/unknown-user.png",className:a.image,alt:i}),r.createElement(o.Box,{bgcolor:"secondary.main",className:a.child,borderRadius:7},r.createElement(o.Typography,{align:"center",className:a.caption,noWrap:!0},i)))},exports.theme=z;
//# sourceMappingURL=index.cjs.js.map
