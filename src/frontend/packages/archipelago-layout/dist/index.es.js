import e,{useState as t,useMemo as n,useEffect as r,createElement as a,Children as o,isValidElement as i,cloneElement as l}from"react";import{Redirect as c,useLocation as s,useHistory as u}from"react-router";import{getResources as m,AppBar as p,MenuItemLink as d,Layout as f,useGetIdentity as h,Notification as b,TopToolbar as g,ListButton as v,Create as y,ShowButton as E,Edit as w,useListContext as C,useResourceDefinition as P,Link as k,Button as x,CreateButton as O,ExportButton as N,RefreshButton as L,List as S,Pagination as T,SimpleList as I,linkToRecord as j,useGetList as R,FilterList as B,FilterListItem as A,useTranslate as _,getFieldLabelTranslationArgs as W,getTabFullPath as F,escapePath as D,ImageField as U,useShowContext as M,useListController as V,ListContextProvider as z,EditButton as q,Show as H,sanitizeListRestProps as G,useCreate as Y,useNotify as $,ReferenceInput as J,FormWithRedirect as K,TextInput as Q,required as X,SaveButton as Z}from"react-admin";import{Grid as ee,Button as te,TextField as ne,Select as re,MenuItem as ae,makeStyles as oe,Zoom as ie,Hidden as le,ListItemIcon as ce,Typography as se,Tooltip as ue,Collapse as me,List as pe,useMediaQuery as de,Box as fe,Container as he,ThemeProvider as be,createMuiTheme as ge,Accordion as ve,AccordionSummary as ye,AccordionDetails as Ee,Tabs as we,Tab as Ce,Card as Pe,CardActionArea as ke,CardMedia as xe,CardContent as Oe,CardActions as Ne,Divider as Le,CircularProgress as Se,LinearProgress as Te,Avatar as Ie,Dialog as je,DialogTitle as Re,DialogContent as Be,DialogActions as Ae}from"@material-ui/core";import{Form as _e,Field as We,useForm as Fe}from"react-final-form";import{useHistory as De,useLocation as Ue,Link as Me,useRouteMatch as Ve,Route as ze}from"react-router-dom";import{useSelector as qe,shallowEqual as He}from"react-redux";import Ge from"@material-ui/core/Typography";import Ye from"@material-ui/icons/ViewList";import $e from"@material-ui/icons/ExpandMore";import{createMuiTheme as Je,ThemeProvider as Ke,makeStyles as Qe}from"@material-ui/core/styles";import Xe from"@material-ui/core/Tabs";import Ze from"@material-ui/core/Tab";import et from"react-markdown";import tt from"@material-ui/icons/Add";import nt from"@material-ui/icons/Cancel";var rt=function(t){var n=t.record,r=t.typesMap;if(n){Array.isArray(n.type)||(n.type=[n.type]);var a=Object.keys(r).find((function(e){return n.type.includes(r[e])}));if(a)return e.createElement(c,{to:"/".concat(a,"/").concat(encodeURIComponent(n.id),"/show")})}return null};function at(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function it(){return(it=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function lt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ct(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?lt(Object(n),!0).forEach((function(t){ot(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function st(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ut(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||pt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mt(e){return function(e){if(Array.isArray(e))return dt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||pt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pt(e,t){if(e){if("string"==typeof e)return dt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dt(e,t):void 0}}function dt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ft=function(t){var n=t.input,r=st(t,["input"]);return e.createElement(ne,it({},n,r))},ht=function(t){var n=t.input,r=st(t,["input"]),a=qe(m,He);return e.createElement(re,it({},n,r),a.filter((function(e){return e.hasList})).map((function(t){return e.createElement(ae,{value:t.name,key:t.name},t.options.label)})))},bt=function(){var t=De(),n=Ue().pathname.match(/^\/([^/]+)/),r=n?n[1]:"Organization";return e.createElement(_e,{onSubmit:function(e){var n=e.filter,r=e.type;n?t.push("/".concat(r,"?filter=").concat(encodeURIComponent('{"q": "'.concat(n,'"}')))):t.push("/".concat(r))},initialValues:{type:r},render:function(t){var n=t.handleSubmit;return e.createElement("form",{onSubmit:n},e.createElement(ee,{container:!0,spacing:2},e.createElement(ee,{item:!0,xs:5},e.createElement(We,{name:"filter",component:ft,placeholder:"Rechercher...",fullWidth:!0})),e.createElement(ee,{item:!0,xs:5},e.createElement(We,{name:"type",component:ht,fullWidth:!0})),e.createElement(ee,{item:!0,xs:2},e.createElement(te,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},gt=oe((function(e){return{toolbar:{height:56},spacer:{flex:1},searchForm:{flex:2},presContainer:{display:"flex",justifyContent:"flex-start",alignItems:"center"},logoContainer:{minWidth:56,height:56,marginRight:8},logo:{height:"100%"},title:ot({display:"none"},e.breakpoints.up("md"),{display:"block"})}})),vt=function(t){var n=gt();return e.createElement(p,it({},t,{classes:ct({toolbar:n.toolbar},t.classes),color:"primary"}),e.createElement("span",{className:n.spacer},e.createElement("div",{className:n.presContainer},e.createElement("div",{className:n.logoContainer},e.createElement(ie,{in:!0,timeout:2e3},e.createElement("img",{className:n.logo,src:process.env.PUBLIC_URL+"/logo192.png",alt:"logo"}))),e.createElement(Ge,{className:n.title,variant:"h6",noWrap:!0},t.title))),e.createElement(le,{only:"xs"},e.createElement("span",{className:n.searchForm},e.createElement(bt,null))),e.createElement("span",{className:n.spacer}))},yt=oe((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),Et=function(t){var n=t.handleToggle,r=t.sidebarIsOpen,a=t.isOpen,o=t.name,i=t.icon,l=t.children,c=t.dense,s=yt(),u=e.createElement(ae,{dense:c,button:!0,onClick:n},e.createElement(ce,{className:s.icon},a?e.createElement($e,null):i),e.createElement(se,{variant:"inherit",color:"textSecondary"},o));return e.createElement(e.Fragment,null,r||a?u:e.createElement(ue,{title:o,placement:"right"},u),e.createElement(me,{in:a,timeout:"auto",unmountOnExit:!0},e.createElement(pe,{dense:c,component:"div",disablePadding:!0,className:r?s.sidebarIsOpen:s.sidebarIsClosed},l)))},wt=function(t){var n=t.resource,r=t.onClick,a=t.open;return e.createElement(d,{to:"/".concat(n.name),primaryText:n.options&&n.options.label||n.name,leftIcon:n.icon?e.createElement(n.icon,null):e.createElement(DefaultIcon,null),onClick:r,sidebarIsOpen:a})},Ct=oe({appFrame:{marginTop:56},title:{position:"absolute",top:80,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),Pt=function(t){var n=t.appBar,r=t.menu,a=(t.userMenu,t.children),o=st(t,["appBar","menu","userMenu","children"]),i=Ct();return e.createElement(f,it({},o,{classes:{appFrame:i.appFrame},appBar:n,menu:r}),e.createElement(se,{variant:"h4",color:"primary",className:i.title,id:"react-admin-title",component:"h1"}),a)};Pt.defaultProps={appBar:vt,menu:function(a){var o=a.onMenuClick,i=a.logout,l=a.dense,c=void 0!==l&&l,u=a.openAll,p=void 0!==u&&u,d=de((function(e){return e.breakpoints.down("xs")})),f=qe((function(e){return e.admin.ui.sidebarOpen})),h=qe(m),b=s().pathname.match(/^\/([^/]+)/),g=b?b[1]:null,v=ut(t({}),2),y=v[0],E=v[1],w=n((function(){var e=h.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return h.filter((function(t){return e.includes(t.name)}))}),[h]);return r((function(){var e=h.find((function(e){return e.name===g})),t=w.find((function(t){return t.name===e.options.parent})),n=w.reduce((function(e,n){return e[n.name]=p||t&&n.name===t.name,e}),{});E((function(e){return ct(ct({},n),e)}))}),[w,h,g,p]),e.createElement(fe,{mt:2},w.map((function(t){return e.createElement(Et,{key:t.name,handleToggle:function(){return e=t.name,void E((function(t){return ct(ct({},t),{},ot({},e,!t[e]))}));var e},isOpen:y[t.name],sidebarIsOpen:f,name:t.options&&t.options.label||t.name,icon:t.icon?e.createElement(t.icon,null):e.createElement(Ye,null),dense:c},h.filter((function(e){return e.hasList&&e.options.parent===t.name})).map((function(t){return e.createElement(wt,{key:t.name,resource:t,onClick:o,open:f})})))})),h.filter((function(e){return e.hasList&&(!e.options||!e.options.parent)})).map((function(t){return e.createElement(wt,{key:t.name,resource:t,onClick:o,open:f})})),d&&i)}};var kt=oe((function(e){return{header:{position:"relative",height:65},logo:ot({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),xt=function(t){var n=t.userMenu,r=t.logout,a=kt(),o=h().identity;return e.createElement(fe,{bgcolor:"primary.main"},e.createElement(he,{maxWidth:"lg",className:a.header},e.createElement(ee,{container:!0},e.createElement(ee,{item:!0,xs:12,sm:n?3:6},e.createElement(Me,{to:"/"},e.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:a.logo}))),e.createElement(le,{xsDown:!0},e.createElement(ee,{item:!0,sm:6},e.createElement(fe,{pt:2},e.createElement(bt,null)))),n&&e.createElement(ee,{item:!0,sm:3,align:"right"},e.createElement(fe,{pt:o&&""!==o.id?2:1},e.cloneElement(n,{logout:r}))))))},Ot=function(){var e=Ue().pathname;return r((function(){window.scrollTo(0,0)}),[e]),null},Nt=function(t){var n=t.appBar,r=t.title,a=t.open,o=t.logout,i=t.theme,l=t.children,c=de(i.breakpoints.down("xs"));return e.createElement(be,{theme:i},e.createElement(Ot,null),e.createElement(n,{title:r,open:a,logout:o}),e.createElement(he,{maxWidth:"lg",disableGutters:c},e.createElement(fe,{mb:{xs:0,sm:5}},l)),e.createElement(b,null))};Nt.defaultProps={appBar:xt};var Lt=ge(),St=ge({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:ot({padding:25},Lt.breakpoints.down("xs"),{padding:15})},RaList:{content:ot({padding:25},Lt.breakpoints.down("xs"),{padding:15})},RaListToolbar:{toolbar:ot({},Lt.breakpoints.down("xs"),{height:0,minHeight:0})},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},MuiTab:{labelIcon:{paddingTop:0}}}}),Tt=function(t){var n=t.basePath,r=t.className,a=t.data,o=t.hasList,i=st(t,["basePath","className","data","hasList"]);return e.createElement(g,it({className:r},i),o&&e.createElement(v,{basePath:n,record:a}))},It=function(t){return e.createElement(y,it({actions:e.createElement(Tt,null),redirect:"show"},t))},jt=function(t){var n=t.basePath,r=t.className,a=t.data,o=t.hasList,i=t.hasShow,l=st(t,["basePath","className","data","hasList","hasShow"]);return e.createElement(g,it({className:r},l),o&&e.createElement(v,{basePath:n,record:a}),i&&e.createElement(E,{basePath:n,record:a}))},Rt=function(t){return e.createElement(w,it({actions:e.createElement(jt,null)},t))},Bt=oe((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{backgroundColor:e.palette.common.white,display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),At=function(t){var n=t.date,r=t.title,a=t.content,o=Bt(),i=C(),l=i.ids,c=i.data,s=i.resource,u=i.basePath;return e.createElement("div",{className:o.root},l.map((function(t,i){var l=n&&new Date(n(c[t])),m=r&&r(c[t]);return e.createElement(ve,{className:o.accordion,key:i},e.createElement(ye,{expandIcon:e.createElement($e,null),"aria-controls":"panel".concat(i,"-content"),id:"panel".concat(i,"-header"),className:o.accordionSummary},l&&e.createElement(se,{className:o.date},l.toLocaleDateString()),e.createElement(se,{className:o.title},m)),e.createElement(Ee,{className:o.accordionDetails},e.createElement(a,{record:c[t],resource:s,basePath:u})))})))},_t=function(t){var n=t.bulkActions,r=t.basePath,a=t.currentSort,o=t.displayedFilters,i=t.exporter,l=t.filters,c=t.filterValues,u=t.onUnselectItems,m=t.resource,p=t.selectedIds,d=t.showFilter,f=t.total,h=t.views,b=t.currentView,v=t.setView,y=de((function(e){return e.breakpoints.down("xs")})),E=P({}),w=new URLSearchParams(s().search);return e.createElement(g,null,h&&Object.entries(h).filter((function(e){return ut(e,1)[0]!==b})).map((function(t){var n=ut(t,2),r=n[0],a=n[1];return w.set("view",r),w.set("page",1),w.set("perPage",a.perPage),a.sort&&(w.set("sort",a.sort.field),w.set("order",a.sort.order)),e.createElement(k,{key:r,to:"?"+w.toString()},e.createElement(x,{onClick:function(){return v(r)},label:a.label},e.createElement(a.icon)))})),n&&e.cloneElement(n,{basePath:r,filterValues:c,resource:m,selectedIds:p,onUnselectItems:u}),l&&e.cloneElement(l,{resource:m,showFilter:d,displayedFilters:o,filterValues:c,context:"button"}),E.hasCreate&&e.createElement(O,{basePath:r}),!y&&e.createElement(N,{disabled:0===f,resource:m,sort:a,filter:c,exporter:i}),!y&&e.createElement(L,null))},Wt=function(t){return e.createElement(T,it({rowsPerPageOptions:[25,50,100]},t))},Ft=function(t){var n=t.children,r=st(t,["children"]);return e.createElement(S,it({actions:e.createElement(_t,null),sort:{field:"pair:label",order:"DESC"},pagination:e.createElement(Wt,null),perPage:50},r),n)},Dt=function(n){n.children;var r=n.views,a=st(n,["children","views"]),o=new URLSearchParams(s().search),i=o.has("view")?o.get("view"):Object.keys(r)[0],l=ut(t(i),2),c=l[0],u=l[1];return e.createElement(S,it({actions:e.createElement(_t,{views:r,currentView:c,setView:u}),pagination:r[c].pagination,perPage:r[i].perPage,sort:r[i].sort},a),r[c].list)},Ut=oe((function(e){return{tab:{minWidth:55}}})),Mt=function(){var t=u(),n=Ut(),r=s().pathname.match(/^\/([^/]+)/),a=r?r[1]:null,o=qe(m,He),i=de((function(e){return e.breakpoints.down("xs")}));return e.createElement(we,{value:a,onChange:function(e,n){return t.push("/"+n)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},o.filter((function(e){return e.hasList})).map((function(t){return e.createElement(Ce,{key:t.name,icon:e.createElement(t.icon),label:i?void 0:t.options.label,value:t.name,className:n.tab})})))},Vt=Je({overrides:{MuiListItem:{root:{padding:15,paddingBottom:15,paddingTop:15,marginBottom:10,borderStyle:"solid",borderColor:"#e0e0e0",borderWidth:1}}}}),zt=function(t){return e.createElement(Ke,{theme:Vt},e.createElement(I,t))};function qt(e,t){return e(t={exports:{}},t.exports),t.exports}var Ht,Gt=qt((function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=(r=e)&&r.__esModule?r:{default:r};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var r=void 0;return r=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":o(t))&&(t={default:parseInt(t)||2});var n=1/0,r=t.default||2;for(var a in t){var i=parseInt(a);i>0&&e<=i&&i<n&&(n=i,r=t[a])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),r=0;r<n.length;r++){var a=r%e;t[a]||(t[a]=[]),t[a].push(n[r])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,r=void 0===n?{}:n,o=e.columnClassName,i=this.itemsInColumns(),c=100/i.length+"%",s=o;"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var u=a({},t,r,{style:a({},r.style,{width:c}),className:s});return i.map((function(e,t){return l.default.createElement("div",a({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),r=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(r="my-masonry-grid")),l.default.createElement("div",a({},n,{className:r}),this.renderColumns())}}]),t}(l.default.Component);s.defaultProps=c,n.default=s})),Yt=(Ht=Gt)&&Ht.__esModule&&Object.prototype.hasOwnProperty.call(Ht,"default")?Ht.default:Ht,$t=oe((function(){return{grid:{display:"flex",marginLeft:-20,marginBottom:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),Jt=function(t){var n=t.image,r=t.content,a=t.actions,o=t.breakpointCols,i=t.linkType,l=$t(),c=C(),s=c.ids,u=c.data,m=c.basePath;return e.createElement(Yt,{breakpointCols:o,className:l.grid,columnClassName:l.column},s.map((function(t){var o="function"==typeof n?n(u[t]):n;return e.createElement(Pe,{key:t,className:l.card},e.createElement(k,{to:j(m,t)+"/"+i},e.createElement(ke,null,o&&e.createElement(xe,{className:l.media,image:o}),r&&e.createElement(Oe,null,r(u[t])))),a&&e.createElement(Ne,null,a.map((function(n){return e.createElement(n,{record:u[t],basePath:m})}))))})))};Jt.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var Kt=function(t){var n=t.reference,r=t.source,a=t.inverseSource,o=t.limit,i=t.sort,l=t.filter,c=t.label,s=t.icon,u=R(n,{page:1,perPage:o},i,l),p=u.data,d=u.ids,f=qe(m,He).filter((function(e){return(null==e?void 0:e.name)===n}))[0];return e.createElement(B,{label:c||f.options.label,icon:s||e.createElement(f.icon)},d.filter((function(e){return!a||p[e][a]})).map((function(t){return e.createElement(A,{key:t,label:p[t]["pair:label"],value:ot({},r,t)})})))};Kt.defaultProps={limit:25};var Qt=oe((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),Xt=function(t){var n=t.label,r=t.children,a=t.record,o=t.resource,i=t.source,l=t.basePath,c=t.mb,s=Qt(),u=_();return(null==a?void 0:a[i])?e.createElement(fe,{mb:c},e.createElement(fe,{className:s.rightLabel},u.apply(void 0,mt(W({label:n,resource:o,source:i})))),r&&e.createElement(fe,{m:0},e.cloneElement(r,{record:a,resource:o,basePath:l}))):null};Xt.defaultProps={mb:4};var Zt=function(t){var n=t.basePath,r=t.children,a=t.record,o=t.resource,i=t.showLabel,l=st(t,["basePath","children","record","resource","showLabel"]);return e.createElement(ee,it({item:!0},l),e.Children.map(r,(function(t){return t&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel&&i?e.createElement(Xt,{record:a,resource:o,basePath:n,label:t.props.label,source:t.props.source,disabled:!1},t):"string"==typeof t.type?t:e.cloneElement(t,{record:a,resource:o,basePath:n})):null})))},en=oe((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),tn=function(t){var n=t.basePath,r=t.children,a=t.record,o=t.resource,i=en(),l=_();return e.createElement(fe,null,e.Children.map(r,(function(t){return t&&a[t.props.source]&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(ee,{container:!0,spacing:3,className:i.line},e.createElement(ee,{item:!0,xs:3},e.createElement(se,{color:"textSecondary",align:"right",variant:"body2"},l.apply(void 0,mt(W({label:t.props.label,resource:o,source:t.props.source}))))),e.createElement(ee,{item:!0,xs:9},e.createElement(se,{variant:"body2"},e.cloneElement(t,{record:a,resource:o,basePath:n})))):"string"==typeof t.type?t:e.cloneElement(t,{record:a,resource:o,basePath:n})):null})))};function nn(){}function rn(){}rn.resetWarningCache=nn;var an=qt((function(e){e.exports=function(){function e(e,t,n,r,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:rn,resetWarningCache:nn};return n.PropTypes=n,n}()})),on=function(e){var t=e.children,n=e.syncWithLocation,r=e.value,c=e.record,s=e.showResourcesIcons,u=st(e,["children","syncWithLocation","value","record","showResourcesIcons"]),m=Ue(),p=Ve(),d=m.pathname;return a(Xe,it({indicatorColor:"primary",value:n?d:r},u),o.map(t,(function(e,t){if(!e||!i(e))return null;var r=F(e,t,p.url);return l(e,{context:"header",value:n?r:t,syncWithLocation:n,record:c,showResourcesIcons:s})})))};on.propTypes={children:an.node};var ln=oe((function(e){return{content:{padding:e.spacing(2)}}})),cn=function(n){var r=n.children,a=n.syncWithLocation,c=void 0===a||a,s=n.tabs,u=n.record,m=n.showResourcesIcons,p=void 0!==m&&m,d=Ve(),f=ln(),h=o.toArray(r).filter((function(e){return null!==e})),b=ut(t(0),2),g=b[0],v=b[1];return e.createElement("div",null,l(s,{syncWithLocation:c,onChange:function(e,t){c||v(t)},value:g,record:u,showResourcesIcons:p},h),e.createElement(Le,null),e.createElement("div",{className:f.content},o.map(h,(function(t,n){return t&&i(t)?c?e.createElement(ze,{exact:!0,path:D(F(t,n,d.url)),render:function(){return l(t,{context:"content",record:u})}}):g===n?l(t,{context:"content",record:u}):null:null}))))};cn.defaultProps={tabs:e.createElement(on,null)};var sn=oe((function(e){return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:ot({width:"100%",maxHeight:"none"},e.breakpoints.down("sm"),{margin:0})}})),un=function(t){var n=t.record,r=t.source,a=t.defaultImage,o=st(t,["record","source","defaultImage"]),i=sn();if(n[r]){if(n[r].rawFile instanceof File)return e.createElement(fe,{align:"center",className:i.loader},e.createElement(Se,null))}else n[r]=a;return e.createElement(U,it({record:n,source:r,classes:{image:i.image}},o))},mn=oe((function(){return{root:{flexGrow:1}}})),pn=function(t){var n=t.basePath,r=t.children,a=t.record,o=t.resource,i=mn();return e.createElement("div",{className:i.root},e.createElement(ee,{container:!0,spacing:5},e.Children.map(r,(function(t){return t&&e.isValidElement(t)?e.cloneElement(t,{resource:o,record:a,basePath:n}):null}))))},dn=function(e){return e.stopPropagation()},fn=function(){},hn=function(e){var t=e.children,n=e.linkType,r=e.spacing,i=st(e,["children","linkType","spacing"]),c=C(),s=c.ids,u=c.data,m=c.basePath;return a(ee,{container:!0,spacing:r},s.map((function(e){return a(ee,it({item:!0,key:e},i),n?a(k,{to:j(m,e,n),onClick:dn,t:!0},l(o.only(t),{record:u[e],basePath:m,onClick:fn})):l(o.only(t),{record:u[e],basePath:m}))})))};hn.defaultProps={xs:6,spacing:3,linkType:"edit"};var bn=oe((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),gn=function(t){var n=t.children,r=t.image,a=t.defaultImage,o=bn(),i=M(),l=i.basePath,c=i.loaded,s=i.record,u=i.resource;return c?e.createElement("div",{className:o.root},e.createElement(se,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),e.createElement(ee,{container:!0,spacing:5},e.createElement(ee,{item:!0,xs:12,sm:4},e.createElement(un,{record:s,source:r,defaultImage:a})),e.createElement(ee,{item:!0,xs:12,sm:8},e.createElement(tn,{record:s,resource:u,basePath:l},n)))):null};gn.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var vn=oe((function(e){return{subTitle:{marginTop:e.spacing(5),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),yn=function(t){var n=t.children,r=vn();return e.createElement(se,{variant:"h5",className:r.subTitle},e.createElement("span",{className:r.subTitleSpan},n))},En=qt((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),wn=function(t){var r,a,o=t.basePath,i=t.children,l=t.context,c=t.className,s=t.icon,u=t.label,p=t.record,d=t.resource,f=t.syncWithLocation,h=void 0===f||f,b=t.value,g=t.inversePredicate,v=t.filter,y=void 0===v?{}:v,E=t.showResourcesIcons,w=void 0!==E&&E,C=st(t,["basePath","children","context","className","icon","label","record","resource","syncWithLocation","value","inversePredicate","filter","showResourcesIcons"]),P=Ue(),k={component:Me,to:ct(ct({},P),{},{pathname:b})},x=qe(m),O=n((function(){return x.find((function(e){return(null==e?void 0:e.name)===d}))}),[x,d]),N=V({resource:d,basePath:o,filter:ct(ot({},g,null==p?void 0:p.id),y),perPage:500});return"header"===l?e.createElement(Ze,it({key:u,label:N.ids?"".concat(u||(null===(r=O.options)||void 0===r?void 0:r.label)," (").concat(N.ids.length,")"):u||(null===(a=O.options)||void 0===a?void 0:a.label),value:b,icon:s||w&&e.createElement(O.icon),className:En("show-tab",c)},h?k:{},C)):e.createElement(z,{value:N},i)},Cn=function(t){var n=t.children,r=_(),a=M(),o=a.basePath,i=a.loaded,l=a.record,c=a.resource;return i?e.createElement(fe,null,e.Children.map(n,(function(t){return t&&l[t.props.source]&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(e.Fragment,null,e.createElement(yn,null,r.apply(void 0,mt(W({label:t.props.label,resource:c,source:t.props.source})))),e.cloneElement(t,{record:l,resource:c,basePath:o})):"string"==typeof t.type?t:e.cloneElement(t,{record:l,resource:c,basePath:o})):null}))):null},Pn=function(t){var n=t.children,r=M(),a=r.basePath,o=r.loaded,i=r.record,l=r.resource;return o?e.Children.map(n,(function(t){return t&&e.isValidElement(t)?e.createElement("div",{key:t.props.source},t.props.addLabel?e.createElement(Xt,{record:i,resource:l,basePath:a,label:t.props.label,source:t.props.source,disabled:!1},t):"string"==typeof t.type?t:e.cloneElement(t,{record:i,resource:l,basePath:a})):null})):null},kn=function(t){var n=t.basePath,r=t.className,a=t.data,o=t.hasList,i=t.hasEdit,l=st(t,["basePath","className","data","hasList","hasEdit"]);return e.createElement(g,it({className:r},l),o&&e.createElement(v,{basePath:n,record:a}),i&&e.createElement(q,{basePath:n,record:a}))},xn=function(t){return e.createElement(H,it({actions:e.createElement(kn,null)},t))},On=oe((function(e){return{parent:function(e){return ct({position:"relative"},e.parent)},image:function(e){return ct({width:"100%",borderRadius:"50%"},e.image)},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),Nn=function(t){var n=t.record,r=t.styles;st(t,["record","styles"]);console.log();var a=On(r),o=n?n["pair:firstName"]+" "+n["pair:lastName"]:"";return e.createElement(fe,{className:a.parent},e.createElement("img",{src:n&&n.image||process.env.PUBLIC_URL+"/unknown-user.png",className:a.image,alt:o}),e.createElement(fe,{bgcolor:"secondary.main",className:a.child,borderRadius:7},e.createElement(se,{align:"center",className:a.caption,noWrap:!0},o)))},Ln=function(t){var n=t.source,r=t.record;return r&&r[n]?e.createElement(et,{source:r[n]}):null};Ln.defaultProps={addLabel:!0};var Sn=Qe((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{}}})),Tn=function(e){return e.stopPropagation()},In=function(){},jn=function(e){e.classes;var t=e.className,n=e.children,r=e.linkType,i=void 0===r?"edit":r,c=e.separator,s=void 0===c?",":c,u=st(e,["classes","className","children","linkType","separator"]),m=C(e),p=m.ids,d=m.data,f=m.loaded,h=m.resource,b=m.basePath,g=Sn(e);return!1===f?a(Te,null):a("span",it({className:En(g.root,t)},G(u)),p.map((function(e,t){var r=!!i&&j(b,e,i);return a("span",{key:e},r?a(k,{classes:g.link,to:r,onClick:Tn},l(o.only(n),{record:d[e],resource:h,basePath:b,onClick:In})):l(o.only(n),{record:d[e],resource:h,basePath:b}),t<p.length-1&&s+" ")})))},Rn=oe((function(e){return{parent:function(e){return ct({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),Bn=function(t){var n=t.record,r=t.label,a=t.image,o=t.fallback,i=t.variant,l=t.labelColor,c=t.classes,s=t.children;if(c=Rn(c),!n)return null;var u="function"==typeof r?r(n):n[r],m="function"==typeof a?a(n):n[a],p="function"==typeof o?o(n):o;return e.createElement(fe,{className:c.parent},e.createElement("div",{className:c.square},e.createElement(Ie,{src:m||p,alt:u,fallback:p,className:c.avatar,variant:i},s)),e.createElement(fe,{bgcolor:l,className:c.child,borderRadius:5},e.createElement(se,{align:"center",className:c.caption,noWrap:!0},u)))};Bn.defaultProps={labelColor:"secondary.main"};var An=oe({root:{display:"flex",alignItems:"center"}}),_n=function(n){var r=n.label,a=n.reference,o=n.source,i=n.children,l=An(),c=ut(t(!1),2),s=c[0],u=c[1],m=ut(Y(a),2),p=m[0],d=m[1].loading,f=_(),h=$(),b=Fe(),g=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p({payload:{data:t}},{onSuccess:function(e){var t=e.data;u(!1),b.change(o,t["@id"])},onFailure:function(e){var t=e.error;h(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){at(o,r,a,i,l,"next",e)}function l(e){at(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return e.createElement("div",{className:l.root},e.createElement(J,{label:r,reference:a,source:o},i),e.createElement(x,{onClick:function(){return u(!0)},label:"ra.action.create"},e.createElement(tt,null)),e.createElement(je,{fullWidth:!0,open:s,onClose:function(){return u(!1)}},e.createElement(Re,null,f("ra.action.create")),e.createElement(K,{resource:a,save:g,render:function(t){var n=t.handleSubmitWithRedirect,r=t.pristine,a=t.saving;return e.createElement(e.Fragment,null,e.createElement(Be,null,e.createElement(Q,{label:"Titre",source:"pair:label",validate:X(),fullWidth:!0})),e.createElement(Ae,null,e.createElement(x,{label:"ra.action.cancel",onClick:function(){return u(!1)},disabled:d},e.createElement(nt,null)),e.createElement(Z,{handleSubmitWithRedirect:n,pristine:r,saving:a,disabled:d})))}})))};export{At as AccordionList,vt as AppBar,Bn as AvatarField,Zt as Column,pn as ColumnShowLayout,It as Create,Tt as CreateActions,tn as DetailsList,Rt as Edit,jt as EditActions,hn as GridList,gn as Hero,cn as InverseReferenceShowLayout,yn as LargeLabel,Pt as Layout,Ft as List,_t as ListActions,wn as ListTab,un as MainImage,Cn as MainList,Ln as MarkdownField,Jt as MasonryList,Dt as MultiViewsList,rt as RedirectByType,Kt as ReferenceFilter,_n as ReferenceQuickCreateInput,Xt as RightLabel,jn as SeparatedListField,xn as Show,kn as ShowActions,Pn as SideList,xt as SimpleAppBar,Nt as SimpleLayout,zt as SimpleList,Mt as TabsMenu,Nn as UserIcon,St as theme};
