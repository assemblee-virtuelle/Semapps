"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-router"),r=require("react-admin"),a=require("@material-ui/core"),n=require("react-final-form"),o=require("react-router-dom"),l=require("react-redux"),i=require("@material-ui/icons/ViewList"),u=require("@material-ui/icons/ExpandMore"),c=require("@material-ui/core/styles"),s=require("react-markdown"),d=require("@material-ui/icons/Add"),m=require("@material-ui/icons/Cancel");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=p(e),h=p(i),b=p(u),y=p(s),g=p(d),E=p(m);function v(e,t,r,a,n,o,l){try{var i=e[o](l),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return r}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var N=function(e){var t=e.input,r=P(e,["input"]);return f.default.createElement(a.TextField,x({},t,r))},B=function(e){var t=e.input,n=P(e,["input"]),o=l.useSelector(r.getResources,l.shallowEqual);return f.default.createElement(a.Select,x({},t,n),o.filter((function(e){return e.hasList})).map((function(e){return f.default.createElement(a.MenuItem,{value:e.name,key:e.name},e.options.label)})))},I=function(){var e=o.useHistory(),t=o.useLocation().pathname.match(/^\/([^/]+)/),r=t?t[1]:"Organization";return f.default.createElement(n.Form,{onSubmit:function(t){var r=t.filter,a=t.type;r?e.push("/".concat(a,"?filter=").concat(encodeURIComponent('{"q": "'.concat(r,'"}')))):e.push("/".concat(a))},initialValues:{type:r},render:function(e){var t=e.handleSubmit;return f.default.createElement("form",{onSubmit:t},f.default.createElement(a.Grid,{container:!0,spacing:2},f.default.createElement(a.Grid,{item:!0,xs:5},f.default.createElement(n.Field,{name:"filter",component:N,placeholder:"Rechercher...",fullWidth:!0})),f.default.createElement(a.Grid,{item:!0,xs:5},f.default.createElement(n.Field,{name:"type",component:B,fullWidth:!0})),f.default.createElement(a.Grid,{item:!0,xs:2},f.default.createElement(a.Button,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},A=a.makeStyles({toolbar:{height:56},spacer:{flex:1},searchForm:{flex:2}}),R=function(e){var t=A();return f.default.createElement(r.AppBar,x({},e,{classes:k({toolbar:t.toolbar},e.classes),color:"primary"}),f.default.createElement("span",{className:t.spacer}),f.default.createElement(a.Hidden,{only:"xs"},f.default.createElement("span",{className:t.searchForm},f.default.createElement(I,null))),f.default.createElement("span",{className:t.spacer}))},j=a.makeStyles((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),F=function(e){var t=e.handleToggle,r=e.sidebarIsOpen,n=e.isOpen,o=e.name,l=e.icon,i=e.children,u=e.dense,c=j(),s=f.default.createElement(a.MenuItem,{dense:u,button:!0,onClick:t},f.default.createElement(a.ListItemIcon,{className:c.icon},n?f.default.createElement(b.default,null):l),f.default.createElement(a.Typography,{variant:"inherit",color:"textSecondary"},o));return f.default.createElement(f.default.Fragment,null,r||n?s:f.default.createElement(a.Tooltip,{title:o,placement:"right"},s),f.default.createElement(a.Collapse,{in:n,timeout:"auto",unmountOnExit:!0},f.default.createElement(a.List,{dense:u,component:"div",disablePadding:!0,className:r?c.sidebarIsOpen:c.sidebarIsClosed},i)))},M=function(e){var t=e.resource,a=e.onClick,n=e.open;return f.default.createElement(r.MenuItemLink,{to:"/".concat(t.name),primaryText:t.options&&t.options.label||t.name,leftIcon:t.icon?f.default.createElement(t.icon,null):f.default.createElement(DefaultIcon,null),onClick:a,sidebarIsOpen:n})},D=a.makeStyles({appFrame:{marginTop:56},title:{position:"absolute",top:80,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),q=function(e){var t=e.appBar,n=e.menu;e.userMenu;var o=e.children,l=P(e,["appBar","menu","userMenu","children"]),i=D();return f.default.createElement(r.Layout,x({},l,{classes:{appFrame:i.appFrame},appBar:t,menu:n}),f.default.createElement(a.Typography,{variant:"h4",color:"primary",className:i.title,id:"react-admin-title",component:"h1"}),o)};q.defaultProps={appBar:R,menu:function(n){var o=n.onMenuClick,i=n.logout,u=n.dense,c=void 0!==u&&u,s=n.openAll,d=void 0!==s&&s,m=a.useMediaQuery((function(e){return e.breakpoints.down("xs")})),p=l.useSelector((function(e){return e.admin.ui.sidebarOpen})),b=l.useSelector(r.getResources),y=t.useLocation().pathname.match(/^\/([^/]+)/),g=y?y[1]:null,E=L(e.useState({}),2),v=E[0],x=E[1],w=e.useMemo((function(){var e=b.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return b.filter((function(t){return e.includes(t.name)}))}),[b]);return e.useEffect((function(){var e=b.find((function(e){return e.name===g})),t=w.find((function(t){return t.name===e.options.parent})),r=w.reduce((function(e,r){return e[r.name]=d||t&&r.name===t.name,e}),{});x((function(e){return k(k({},r),e)}))}),[w,b,g,d]),f.default.createElement(a.Box,{mt:2},w.map((function(e){return f.default.createElement(F,{key:e.name,handleToggle:function(){return t=e.name,void x((function(e){return k(k({},e),{},C({},t,!e[t]))}));var t},isOpen:v[e.name],sidebarIsOpen:p,name:e.options&&e.options.label||e.name,icon:e.icon?f.default.createElement(e.icon,null):f.default.createElement(h.default,null),dense:c},b.filter((function(t){return t.hasList&&t.options.parent===e.name})).map((function(e){return f.default.createElement(M,{key:e.name,resource:e,onClick:o,open:p})})))})),b.filter((function(e){return e.hasList&&(!e.options||!e.options.parent)})).map((function(e){return f.default.createElement(M,{key:e.name,resource:e,onClick:o,open:p})})),m&&i)}};var G=a.makeStyles((function(e){return{header:{position:"relative",height:65},logo:C({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),_=function(e){var t=e.userMenu,n=e.logout,l=G(),i=r.useGetIdentity().identity;return f.default.createElement(a.Box,{bgcolor:"primary.main"},f.default.createElement(a.Container,{maxWidth:"lg",className:l.header},f.default.createElement(a.Grid,{container:!0},f.default.createElement(a.Grid,{item:!0,xs:12,sm:t?3:6},f.default.createElement(o.Link,{to:"/"},f.default.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:l.logo}))),f.default.createElement(a.Hidden,{xsDown:!0},f.default.createElement(a.Grid,{item:!0,sm:6},f.default.createElement(a.Box,{pt:2},f.default.createElement(I,null)))),t&&f.default.createElement(a.Grid,{item:!0,sm:3,align:"right"},f.default.createElement(a.Box,{pt:i&&""!==i.id?2:1},f.default.cloneElement(t,{logout:n}))))))},W=function(){var t=o.useLocation().pathname;return e.useEffect((function(){window.scrollTo(0,0)}),[t]),null},U=function(e){var t=e.appBar,n=e.title,o=e.open,l=e.logout,i=e.theme,u=e.children,c=a.useMediaQuery(i.breakpoints.down("xs"));return f.default.createElement(a.ThemeProvider,{theme:i},f.default.createElement(W,null),f.default.createElement(t,{title:n,open:o,logout:l}),f.default.createElement(a.Container,{maxWidth:"lg",disableGutters:c},f.default.createElement(a.Box,{mb:{xs:0,sm:5}},u)),f.default.createElement(r.Notification,null))};U.defaultProps={appBar:_};var V=a.createMuiTheme(),z=a.createMuiTheme({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:C({padding:25},V.breakpoints.down("xs"),{padding:15})},RaList:{content:C({padding:25},V.breakpoints.down("xs"),{padding:15})},RaListToolbar:{toolbar:C({},V.breakpoints.down("xs"),{height:0,minHeight:0})},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},MuiTab:{labelIcon:{paddingTop:0}}}}),H=function(e){var t=e.basePath,a=e.className,n=e.data,o=e.hasList,l=P(e,["basePath","className","data","hasList"]);return f.default.createElement(r.TopToolbar,x({className:a},l),o&&f.default.createElement(r.ListButton,{basePath:t,record:n}))},Q=function(e){var t=e.basePath,a=e.className,n=e.data,o=e.hasList,l=e.hasShow,i=P(e,["basePath","className","data","hasList","hasShow"]);return f.default.createElement(r.TopToolbar,x({className:a},i),o&&f.default.createElement(r.ListButton,{basePath:t,record:n}),l&&f.default.createElement(r.ShowButton,{basePath:t,record:n}))},$=a.makeStyles((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{backgroundColor:e.palette.common.white,display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),J=function(e){var n=e.bulkActions,o=e.basePath,l=e.currentSort,i=e.displayedFilters,u=e.exporter,c=e.filters,s=e.filterValues,d=e.onUnselectItems,m=e.resource,p=e.selectedIds,h=e.showFilter,b=e.total,y=e.views,g=e.currentView,E=e.setView,v=a.useMediaQuery((function(e){return e.breakpoints.down("xs")})),C=r.useResourceDefinition({}),x=new URLSearchParams(t.useLocation().search);return f.default.createElement(r.TopToolbar,null,y&&Object.entries(y).filter((function(e){return L(e,1)[0]!==g})).map((function(e){var t=L(e,2),a=t[0],n=t[1];return x.set("view",a),x.set("page",1),x.set("perPage",n.perPage),n.sort&&(x.set("sort",n.sort.field),x.set("order",n.sort.order)),f.default.createElement(r.Link,{key:a,to:"?"+x.toString()},f.default.createElement(r.Button,{onClick:function(){return E(a)},label:n.label},f.default.createElement(n.icon)))})),n&&f.default.cloneElement(n,{basePath:o,filterValues:s,resource:m,selectedIds:p,onUnselectItems:d}),c&&f.default.cloneElement(c,{resource:m,showFilter:h,displayedFilters:i,filterValues:s,context:"button"}),C.hasCreate&&f.default.createElement(r.CreateButton,{basePath:o}),!v&&f.default.createElement(r.ExportButton,{disabled:0===b,resource:m,sort:l,filter:s,exporter:u}),!v&&f.default.createElement(r.RefreshButton,null))},K=function(e){return f.default.createElement(r.Pagination,x({rowsPerPageOptions:[25,50,100]},e))},X=a.makeStyles((function(e){return{tab:{minWidth:55}}})),Y=c.createMuiTheme({overrides:{MuiListItem:{root:{padding:15,paddingBottom:15,paddingTop:15,marginBottom:10,borderStyle:"solid",borderColor:"#e0e0e0",borderWidth:1}}}});function Z(e,t){return e(t={exports:{}},t.exports),t.exports}var ee,te=Z((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=(r=f.default)&&r.__esModule?r:{default:r};var i={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.reCalculateColumnCount=r.reCalculateColumnCount.bind(r),r.reCalculateColumnCountDebounce=r.reCalculateColumnCountDebounce.bind(r);var a=void 0;return a=r.props.breakpointCols&&r.props.breakpointCols.default?r.props.breakpointCols.default:parseInt(r.props.breakpointCols)||2,r.state={columnCount:a},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":n(t))&&(t={default:parseInt(t)||2});var r=1/0,a=t.default||2;for(var o in t){var l=parseInt(o);l>0&&e<=l&&l<r&&(r=l,a=t[o])}a=Math.max(1,parseInt(a)||1),this.state.columnCount!==a&&this.setState({columnCount:a})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),r=[].concat(this.props.children||[]),a=0;a<r.length;a++){var n=a%e;t[n]||(t[n]=[]),t[n].push(r[a])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,r=e.columnAttrs,n=void 0===r?{}:r,o=e.columnClassName,i=this.itemsInColumns(),u=100/i.length+"%",c=o;"string"!=typeof c&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===c&&(c="my-masonry-grid_column"));var s=a({},t,n,{style:a({},n.style,{width:u}),className:c});return i.map((function(e,t){return l.default.createElement("div",a({},s,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props;e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column;var t=e.className,r=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),n=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(n="my-masonry-grid")),l.default.createElement("div",a({},r,{className:n}),this.renderColumns())}}]),t}(l.default.Component);u.defaultProps=i,t.default=u})),re=(ee=te)&&ee.__esModule&&Object.prototype.hasOwnProperty.call(ee,"default")?ee.default:ee,ae=a.makeStyles((function(){return{grid:{display:"flex",marginLeft:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),ne=function(e){var t=e.image,n=e.content,o=e.actions,l=e.breakpointCols,i=e.linkType,u=ae(),c=r.useListContext(),s=c.ids,d=c.data,m=c.basePath;return f.default.createElement(re,{breakpointCols:l,className:u.grid,columnClassName:u.column},s.map((function(e){var l="function"==typeof t?t(d[e]):t;return f.default.createElement(a.Card,{key:e,className:u.card},f.default.createElement(r.Link,{to:r.linkToRecord(m,e)+"/"+i},f.default.createElement(a.CardActionArea,null,l&&f.default.createElement(a.CardMedia,{className:u.media,image:l}),n&&f.default.createElement(a.CardContent,null,n(d[e])))),o&&f.default.createElement(a.CardActions,null,o.map((function(t){return f.default.createElement(t,{record:d[e],basePath:m})}))))})))};ne.defaultProps={breakpointCols:{default:3,900:2,450:1},linkType:"edit"};var oe=function(e){var t=e.reference,a=e.source,n=e.limit,o=e.sort,i=e.filter,u=e.label,c=e.icon,s=r.useGetList(t,{page:1,perPage:n},o,i),d=s.data,m=s.ids,p=l.useSelector(r.getResources,l.shallowEqual).filter((function(e){return(null==e?void 0:e.name)===t}))[0];return f.default.createElement(r.FilterList,{label:u||p.options.label,icon:c||f.default.createElement(p.icon)},m.map((function(e){return f.default.createElement(r.FilterListItem,{key:e,label:d[e]["pair:label"],value:C({},a,e)})})))};oe.defaultProps={limit:20};var le=a.makeStyles((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),ie=function(e){var t=e.label,n=e.children,o=e.record,l=e.resource,i=e.source,u=e.basePath,c=le(),s=r.useTranslate();return o[i]?f.default.createElement(a.Box,{mb:4},f.default.createElement(a.Box,{className:c.rightLabel},s.apply(void 0,S(r.getFieldLabelTranslationArgs({label:t,resource:l,source:i})))),f.default.createElement(a.Box,{m:0},f.default.cloneElement(n,{record:o,resource:l,basePath:u}))):null},ue=a.makeStyles((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),ce=function(e){var t=e.basePath,n=e.children,o=e.record,l=e.resource,i=ue(),u=r.useTranslate();return f.default.createElement(a.Box,null,f.default.Children.map(n,(function(e){return e&&o[e.props.source]&&f.default.isValidElement(e)?f.default.createElement("div",{key:e.props.source},e.props.addLabel?f.default.createElement(a.Grid,{container:!0,spacing:3,className:i.line},f.default.createElement(a.Grid,{item:!0,xs:3},f.default.createElement(a.Typography,{color:"textSecondary",align:"right",variant:"body2"},u.apply(void 0,S(r.getFieldLabelTranslationArgs({label:e.props.label,resource:l,source:e.props.source}))))),f.default.createElement(a.Grid,{item:!0,xs:9},f.default.createElement(a.Typography,{variant:"body2"},f.default.cloneElement(e,{record:o,resource:l,basePath:t})))):"string"==typeof e.type?e:f.default.cloneElement(e,{record:o,resource:l,basePath:t})):null})))},se=a.makeStyles((function(){return{root:{flexGrow:1}}})),de=function(e){return e.stopPropagation()},me=function(){},pe=function(t){var n=t.children,l=t.xs,i=t.linkType,u=r.useListContext(),c=u.ids,s=u.data,d=u.basePath;return e.createElement(a.Grid,{container:!0,spacing:3},c.map((function(t){return e.createElement(a.Grid,{item:!0,xs:l,key:t},e.createElement(o.Link,{to:r.linkToRecord(d,t,i),onClick:de},e.cloneElement(e.Children.only(n),{record:s[t],basePath:d,onClick:me})))})))};pe.defaultProps={xs:6,linkType:"edit"};var fe=a.makeStyles((function(){return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:{width:"100%",maxHeight:"none"}}})),he=function(e){var t=e.record,n=e.source,o=e.defaultImage,l=P(e,["record","source","defaultImage"]),i=fe();if(t[n]){if(t[n].rawFile instanceof File)return f.default.createElement(a.Box,{align:"center",className:i.loader},f.default.createElement(a.CircularProgress,null))}else t[n]=o;return f.default.createElement(r.ImageField,x({record:t,source:n,classes:{image:i.image}},l))},be=a.makeStyles((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),ye=function(e){var t=e.children,n=e.image,o=e.defaultImage,l=be(),i=r.useShowContext(),u=i.basePath,c=i.loaded,s=i.record,d=i.resource;return c?f.default.createElement("div",{className:l.root},f.default.createElement(a.Typography,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),f.default.createElement(a.Grid,{container:!0,spacing:5},f.default.createElement(a.Grid,{item:!0,xs:12,sm:4},f.default.createElement(he,{record:s,source:n,defaultImage:o})),f.default.createElement(a.Grid,{item:!0,xs:12,sm:8},f.default.createElement(ce,{record:s,resource:d,basePath:u},t)))):null};ye.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var ge=a.makeStyles((function(e){return{subTitle:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),Ee=function(e){var t=e.children,r=ge();return f.default.createElement(a.Typography,{variant:"h5",className:r.subTitle},f.default.createElement("span",{className:r.subTitleSpan},t))},ve=function(e){var t=e.basePath,a=e.className,n=e.data,o=e.hasList,l=e.hasEdit,i=P(e,["basePath","className","data","hasList","hasEdit"]);return f.default.createElement(r.TopToolbar,x({className:a},i),o&&f.default.createElement(r.ListButton,{basePath:t,record:n}),l&&f.default.createElement(r.EditButton,{basePath:t,record:n}))},Ce=a.makeStyles((function(){return{parent:{position:"relative"},image:{width:"100%",borderRadius:"50%"},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),xe=function(e){var t=e.source,r=e.record;return r&&r[t]?f.default.createElement(y.default,{source:r[t]}):null};xe.defaultProps={addLabel:!0};var we=Z((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),ke=c.makeStyles((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{}}})),Pe=function(e){return e.stopPropagation()},Le=function(){},Se=a.makeStyles((function(e){return{parent:{position:"relative"},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),Te=function(e){var t=e.record,r=e.label,n=e.image,o=e.fallback,l=e.variant,i=e.labelColor,u=e.children,c=Se();if(!t)return null;var s="function"==typeof r?r(t):t[r],d="function"==typeof n?n(t):t[n],m="function"==typeof o?o(t):o;return f.default.createElement(a.Box,{className:c.parent},f.default.createElement("div",{className:c.square},f.default.createElement(a.Avatar,{src:d||m,alt:s,fallback:m,className:c.avatar,variant:l},u)),f.default.createElement(a.Box,{bgcolor:i,className:c.child,borderRadius:5},f.default.createElement(a.Typography,{align:"center",className:c.caption,noWrap:!0},s)))};Te.defaultProps={labelColor:"secondary.main"};var Oe=a.makeStyles({root:{display:"flex",alignItems:"center"}});exports.AccordionList=function(e){var t=e.date,n=e.title,o=e.content,l=$(),i=r.useListContext(),u=i.ids,c=i.data,s=i.resource,d=i.basePath;return f.default.createElement("div",{className:l.root},u.map((function(e,r){var i=t&&new Date(t(c[e])),u=n&&n(c[e]);return f.default.createElement(a.Accordion,{className:l.accordion},f.default.createElement(a.AccordionSummary,{expandIcon:f.default.createElement(b.default,null),"aria-controls":"panel".concat(r,"-content"),id:"panel".concat(r,"-header"),className:l.accordionSummary},i&&f.default.createElement(a.Typography,{className:l.date},i.toLocaleDateString()),f.default.createElement(a.Typography,{className:l.title},u)),f.default.createElement(a.AccordionDetails,{className:l.accordionDetails},f.default.createElement(o,{record:c[e],resource:s,basePath:d})))})))},exports.AppBar=R,exports.AvatarField=Te,exports.Column=function(e){var t=e.basePath,r=e.children,n=e.record,o=e.resource,l=e.showLabel,i=P(e,["basePath","children","record","resource","showLabel"]);return f.default.createElement(a.Grid,x({item:!0},i),f.default.Children.map(r,(function(e){return e&&f.default.isValidElement(e)?f.default.createElement("div",{key:e.props.source},e.props.addLabel&&l?f.default.createElement(ie,{record:n,resource:o,basePath:t,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:f.default.cloneElement(e,{record:n,resource:o,basePath:t})):null})))},exports.ColumnShowLayout=function(e){var t=e.basePath,r=e.children,n=e.record,o=e.resource,l=se();return f.default.createElement("div",{className:l.root},f.default.createElement(a.Grid,{container:!0,spacing:5},f.default.Children.map(r,(function(e){return e&&f.default.isValidElement(e)?f.default.cloneElement(e,{resource:o,record:n,basePath:t}):null}))))},exports.Create=function(e){return f.default.createElement(r.Create,x({actions:f.default.createElement(H,null),redirect:"show"},e))},exports.CreateActions=H,exports.DetailsList=ce,exports.Edit=function(e){return f.default.createElement(r.Edit,x({actions:f.default.createElement(Q,null)},e))},exports.EditActions=Q,exports.GridList=pe,exports.Hero=ye,exports.LargeLabel=Ee,exports.Layout=q,exports.List=function(e){var t=e.children,a=P(e,["children"]);return f.default.createElement(r.List,x({actions:f.default.createElement(J,null),sort:{field:"pair:label",order:"DESC"},pagination:f.default.createElement(K,null),perPage:50},a),t)},exports.ListActions=J,exports.MainList=function(e){var t=e.children,n=r.useTranslate(),o=r.useShowContext(),l=o.basePath,i=o.loaded,u=o.record,c=o.resource;return i?f.default.createElement(a.Box,null,f.default.Children.map(t,(function(e){return e&&u[e.props.source]&&f.default.isValidElement(e)?f.default.createElement("div",{key:e.props.source},e.props.addLabel?f.default.createElement(f.default.Fragment,null,f.default.createElement(Ee,null,n.apply(void 0,S(r.getFieldLabelTranslationArgs({label:e.props.label,resource:c,source:e.props.source})))),f.default.cloneElement(e,{record:u,resource:c,basePath:l})):"string"==typeof e.type?e:f.default.cloneElement(e,{record:u,resource:c,basePath:l})):null}))):null},exports.MarkdownField=xe,exports.MasonryList=ne,exports.MultiViewsList=function(a){a.children;var n=a.views,o=P(a,["children","views"]),l=new URLSearchParams(t.useLocation().search),i=l.has("view")?l.get("view"):Object.keys(n)[0],u=L(e.useState(i),2),c=u[0],s=u[1];return f.default.createElement(r.List,x({actions:f.default.createElement(J,{views:n,currentView:c,setView:s}),pagination:n[c].pagination,perPage:n[i].perPage,sort:n[i].sort},o),n[c].list)},exports.RedirectByType=function(e){var r=e.record,a=e.typesMap;if(r){Array.isArray(r.type)||(r.type=[r.type]);var n=Object.keys(a).find((function(e){return r.type.includes(a[e])}));if(n)return f.default.createElement(t.Redirect,{to:"/".concat(n,"/").concat(encodeURIComponent(r.id),"/show")})}return null},exports.ReferenceFilter=oe,exports.ReferenceQuickCreateInput=function(t){var o=t.label,l=t.reference,i=t.source,u=t.children,c=Oe(),s=L(e.useState(!1),2),d=s[0],m=s[1],p=L(r.useCreate(l),2),h=p[0],b=p[1].loading,y=r.useTranslate(),C=r.useNotify(),x=n.useForm(),w=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h({payload:{data:t}},{onSuccess:function(e){var t=e.data;m(!1),x.change(i,t["@id"])},onFailure:function(e){var t=e.error;C(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function l(e){v(o,a,n,l,i,"next",e)}function i(e){v(o,a,n,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return f.default.createElement("div",{className:c.root},f.default.createElement(r.ReferenceInput,{label:o,reference:l,source:i},u),f.default.createElement(r.Button,{onClick:function(){return m(!0)},label:"ra.action.create"},f.default.createElement(g.default,null)),f.default.createElement(a.Dialog,{fullWidth:!0,open:d,onClose:function(){return m(!1)}},f.default.createElement(a.DialogTitle,null,y("ra.action.create")),f.default.createElement(r.FormWithRedirect,{resource:l,save:w,render:function(e){var t=e.handleSubmitWithRedirect,n=e.pristine,o=e.saving;return f.default.createElement(f.default.Fragment,null,f.default.createElement(a.DialogContent,null,f.default.createElement(r.TextInput,{label:"Titre",source:"pair:label",validate:r.required(),fullWidth:!0})),f.default.createElement(a.DialogActions,null,f.default.createElement(r.Button,{label:"ra.action.cancel",onClick:function(){return m(!1)},disabled:b},f.default.createElement(E.default,null)),f.default.createElement(r.SaveButton,{handleSubmitWithRedirect:t,pristine:n,saving:o,disabled:b})))}})))},exports.RightLabel=ie,exports.SeparatedListField=function(t){t.classes;var n=t.className,o=t.children,l=t.linkType,i=void 0===l?"edit":l,u=t.separator,c=void 0===u?",":u,s=P(t,["classes","className","children","linkType","separator"]),d=r.useListContext(t),m=d.ids,p=d.data,f=d.loaded,h=d.resource,b=d.basePath,y=ke(t);return!1===f?e.createElement(a.LinearProgress,null):e.createElement("span",x({className:we(y.root,n)},r.sanitizeListRestProps(s)),m.map((function(t,a){var n=!!i&&r.linkToRecord(b,t,i);return n?e.createElement("span",{key:t},e.createElement(r.Link,{classes:y.link,to:n,onClick:Pe},e.cloneElement(e.Children.only(o),{record:p[t],resource:h,basePath:b,onClick:Le})),a<m.length-1&&c+" "):e.createElement("span",{key:t},e.cloneElement(e.Children.only(o),{record:p[t],resource:h,basePath:b}),a<m.length-1&&c+" ")})))},exports.Show=function(e){return f.default.createElement(r.Show,x({actions:f.default.createElement(ve,null)},e))},exports.ShowActions=ve,exports.SideList=function(e){var t=e.children,a=r.useShowContext(),n=a.basePath,o=a.loaded,l=a.record,i=a.resource;return o?f.default.Children.map(t,(function(e){return e&&f.default.isValidElement(e)?f.default.createElement("div",{key:e.props.source},e.props.addLabel?f.default.createElement(ie,{record:l,resource:i,basePath:n,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:f.default.cloneElement(e,{record:l,resource:i,basePath:n})):null})):null},exports.SimpleAppBar=_,exports.SimpleLayout=U,exports.SimpleList=function(e){return f.default.createElement(c.ThemeProvider,{theme:Y},f.default.createElement(r.SimpleList,e))},exports.TabsMenu=function(){var e=t.useHistory(),n=X(),o=t.useLocation().pathname.match(/^\/([^/]+)/),i=o?o[1]:null,u=l.useSelector(r.getResources,l.shallowEqual),c=a.useMediaQuery((function(e){return e.breakpoints.down("xs")}));return f.default.createElement(a.Tabs,{value:i,onChange:function(t,r){return e.push("/"+r)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},u.filter((function(e){return e.hasList})).map((function(e){return f.default.createElement(a.Tab,{key:e.name,icon:f.default.createElement(e.icon),label:c?void 0:e.options.label,value:e.name,className:n.tab})})))},exports.UserIcon=function(e){var t=e.record,r=Ce(),n=t?t["pair:firstName"]+" "+t["pair:lastName"]:"";return f.default.createElement(a.Box,{className:r.parent},f.default.createElement("img",{src:t&&t.image||process.env.PUBLIC_URL+"/unknown-user.png",className:r.image,alt:n}),f.default.createElement(a.Box,{bgcolor:"secondary.main",className:r.child,borderRadius:7},f.default.createElement(a.Typography,{align:"center",className:r.caption,noWrap:!0},n)))},exports.theme=z;
