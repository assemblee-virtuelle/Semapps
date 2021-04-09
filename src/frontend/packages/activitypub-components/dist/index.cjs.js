"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("react-admin"),t=require("@material-ui/core");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=t.makeStyles((function(e){return{progress:{marginTop:e.spacing(2)}}})),l=function(e){var t=e.children,n=e.source,a=e.record,l=void 0===a?{}:a;if(1!==o.default.Children.count(t))throw new Error("<ActivitiesList> only accepts a single child");var s=u(),d=r.useQueryWithStore({type:"getList",resource:"Activity",payload:{id:l[n]}}),f=d.data,p=d.loaded,b=d.loading,y=d.total;if(!p)return o.default.createElement(r.LinearProgress,{className:s.progress});if(0===f.length)return"Aucune activité pour le moment.";var g=f.filter((function(e){return"Create"===e.type})).reduce((function(e,r){return c(c({},e),{},i({},r.object.id,r.object))}),{});return o.default.createElement(r.ListContextProvider,{value:{basePath:"/Note",currentSort:{field:"id",order:"ASC"},data:g,ids:Object.keys(g),loaded:p,loading:b,page:1,perPage:10,resource:"Note",total:y}},t)};l.defaultProps={addLabel:!0},exports.ActivitiesList=l;
