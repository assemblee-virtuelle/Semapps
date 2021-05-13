import e,{useState as t,useMemo as n,useEffect as r,useRef as o,createContext as a,useContext as i,forwardRef as l,useImperativeHandle as u}from"react";import{useResourceDefinition as s,ShowButton as c,EditButton as f,useLocale as p,useTranslate as b,useInput as d,FieldTitle as m,useListContext as h}from"react-admin";import{Typography as g,makeStyles as y,TextField as v,Grid as O,Box as j}from"@material-ui/core";import x from"@material-ui/lab/Autocomplete";import w from"@material-ui/icons/LocationOn";import{useHistory as E,useLocation as C}from"react-router";import{createPortal as P}from"react-dom";import S,{DomUtil as L,LatLngBounds as I,Map as A,Marker as z,Polyline as T,Popup as k,TileLayer as M}from"leaflet";import"leaflet.markercluster";var N=function(t){var n=t.record,r=t.basePath,o=s({});return e.createElement(e.Fragment,null,n.label&&e.createElement(g,{variant:"h5"},n.label),n.description&&e.createElement(g,null,n.description.length>150?n.description.substring(0,150)+"...":n.description),o.hasShow&&e.createElement(c,{basePath:r,record:n}),o.hasEdit&&e.createElement(f,{basePath:r,record:n}))},_=function(e,t){var n=e.find((function(e){return e.id.startsWith(t+".")}));if(n)return n.text};function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function q(e,t){return e(t={exports:{}},t.exports),t.exports}var G=q((function(e){
// @license MIT
!function(t,n){e.exports?e.exports=n():this.Diacritics=n()}(0,(function(){for(var e={map:{}},t=[{base:" ",letters:" "},{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",letters:"Þ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"ff",letters:"ﬀ"},{base:"fi",letters:"ﬁ"},{base:"fl",letters:"ﬂ"},{base:"ffi",letters:"ﬃ"},{base:"ffl",letters:"ﬄ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nñnⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"߀oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oe",letters:"Œœ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"ss",letters:"ß"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",letters:"þ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],n=0,r=t.length;n<r;n++)for(var o=t[n].letters.split(""),a=0,i=o.length;a<i;a++)e.map[o[a]]=t[n].base;return e.clean=function(t){if(!t||!t.length||t.length<1)return"";for(var n,r="",o=t.split(""),a=0,i=o.length;a<i;a++)r+=(n=o[a])in e.map?e.map[n]:n;return r},e}))})).clean,J=/[.*+?^${}()|[\]\\]/g,Y=/[a-z0-9_]/i,X=/\s+/;var K=function(e,t){return e=G(e),(t=G(t)).trim().split(X).filter((function(e){return e.length>0})).reduce((function(t,n){var r=n.length,o=Y.test(n[0])?"\\b":"",a=new RegExp(o+n.replace(J,"\\$&"),"i"),i=e.search(a);return i>-1&&(t.push([i,i+r]),e=e.slice(0,i)+new Array(r+1).join(" ")+e.slice(i+r)),t}),[]).sort((function(e,t){return e[0]-t[0]}))},Q=/^\s+|\s+$/g,ee=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,re=parseInt,oe="object"==typeof F&&F&&F.Object===Object&&F,ae="object"==typeof self&&self&&self.Object===Object&&self,ie=oe||ae||Function("return this")(),le=Object.prototype.toString,ue=Math.max,se=Math.min,ce=function(){return ie.Date.now()};function fe(e,t,n){var r,o,a,i,l,u,s=0,c=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function d(e){return s=e,l=setTimeout(h,t),c?b(e):i}function m(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-s>=a}function h(){var e=ce();if(m(e))return g(e);l=setTimeout(h,function(e){var n=t-(e-u);return f?se(n,a-(e-s)):n}(e))}function g(e){return l=void 0,p&&r?b(e):(r=o=void 0,i)}function y(){var e=ce(),n=m(e);if(r=arguments,o=this,u=e,n){if(void 0===l)return d(u);if(f)return l=setTimeout(h,t),b(u)}return void 0===l&&(l=setTimeout(h,t)),i}return t=be(t)||0,pe(n)&&(c=!!n.leading,a=(f="maxWait"in n)?ue(be(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=u=o=l=void 0},y.flush=function(){return void 0===l?i:g(ce())},y}function pe(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function be(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==le.call(e)}(e))return NaN;if(pe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=pe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Q,"");var n=te.test(e);return n||ne.test(e)?re(e.slice(2),n?2:8):ee.test(e)?NaN:+e}var de=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return pe(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),fe(e,t,{leading:r,maxWait:t,trailing:o})},me=y((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),he=function(e,t){return e.place_name?e.place_name:"string"==typeof t?e[t]:"function"==typeof t?t(e):void 0},ge=function(o){var a=o.mapboxConfig,i=(o.record,o.resource),l=o.source,u=o.label,s=(o.basePath,o.parse),c=o.optionText,f=W(o,["mapboxConfig","record","resource","source","label","basePath","parse","optionText"]),h=me(),y=p(),j=b(),E=Z(t(""),2),C=E[0],P=E[1],S=Z(t([]),2),L=S[0],I=S[1],A=d({resource:i,source:l}),z=A.input,T=z.value,k=z.onChange,M=A.isRequired,N=n((function(){return de((function(e,t){var n=new URL("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,".json"));a.language||(a.language=y),Object.entries(a).forEach((function(e){var t=Z(e,2),r=t[0],o=t[1];Array.isArray(o)?o=o.join(","):"boolean"==typeof o&&(o=o?"true":"false"),n.searchParams.set(r,o)})),fetch(n.toString()).then((function(e){return e.json()})).then((function(e){return t(e)}))}),200)}),[a,y]);return r((function(){C&&C!==he(T,c)&&N(C,(function(e){return I(e.features)}))}),[T,C,N]),e.createElement(x,{autoComplete:!0,value:T||null,options:T?[T].concat($(L)):L,filterSelectedOptions:!0,filterOptions:function(e){return e},getOptionLabel:function(e){return he(e,c)},getOptionSelected:function(e,t){return he(e,c)===he(t,c)},onChange:function(e,t){t&&s&&(t=s(t)),k(t),I([])},onInputChange:function(e,t){return P(t)},noOptionsText:j("ra.navigation.no_results"),renderInput:function(t){return t.inputProps.autoComplete="new-password",e.createElement(v,R({},t,{label:""!==u&&!1!==u&&e.createElement(m,{label:u,source:l,resource:i,isRequired:M})},f))},renderOption:function(t){var n=K(t.text,C),r=function(e,t){var n=[];return 0===t.length?n.push({text:e,highlight:!1}):t[0][0]>0&&n.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((function(r,o){var a=r[0],i=r[1];n.push({text:e.slice(a,i),highlight:!0}),o===t.length-1?i<e.length&&n.push({text:e.slice(i,e.length),highlight:!1}):i<t[o+1][0]&&n.push({text:e.slice(i,t[o+1][0]),highlight:!1})})),n}(t.text,n);return e.createElement(O,{container:!0,alignItems:"center"},e.createElement(O,{item:!0},e.createElement(w,{className:h.icon})),e.createElement(O,{item:!0,xs:!0},"string"==typeof r?r:r.map((function(t,n){return e.createElement("span",{key:n,style:{fontWeight:t.highlight?700:400}},t.text)})),e.createElement(g,{variant:"body2",color:"textSecondary"},t.place_name)))}})};function ye(e,t){const n=o(t);r((function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t}),[e,t])}ge.defaultProps={variant:"filled",margin:"dense"};const ve=a(null),Oe=ve.Provider;function je(){const e=i(ve);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function xe(t){function n(n,r){const{instance:o,context:a}=t(n).current;return u(r,()=>o),null==n.children?null:e.createElement(Oe,{value:a},n.children)}return l(n)}function we(e){function n(n,o){const[a,i]=t(!1),{instance:l}=e(n,i).current;u(o,()=>l),r((function(){a&&l.update()}),[l,a,n.children]);const s=l._contentNode;return s?P(n.children,s):null}return l(n)}function Ee(e){function t(t,n){const{instance:r}=e(t).current;return u(n,()=>r),null}return l(t)}function Ce(e){return function(t){const n=je(),a=e(t,n),{instance:i}=a.current,l=o(t.position),{position:u}=t;return r((function(){return i.addTo(n.map),function(){i.remove()}}),[n.map,i]),r((function(){null!=u&&u!==l.current&&(i.setPosition(u),l.current=u)}),[i,u]),a}}function Pe(e,t){const n=o();r((function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}}),[e,t])}function Se(e,t){var n;const r=null!=(n=e.pane)?n:t.pane;return r?{...e,pane:r}:e}function Le(e,t){return function(n,r){const o=je(),a=e(Se(n,o),o);return ye(o.map,n.attribution),Pe(a.current,n.eventHandlers),t(a.current,o,n,r),a}}function Ie(e){return e.split(" ").filter(Boolean)}function Ae(e,t){Ie(t).forEach(t=>{L.addClass(e,t)})}function ze(e,t){Ie(t).forEach(t=>{L.removeClass(e,t)})}function Te(e,t){return null==t?function(t,n){return o(e(t,n))}:function(n,a){const i=o(e(n,a)),l=o(n),{instance:u}=i.current;return r((function(){l.current!==n&&(t(u,n,l.current),l.current=n)}),[u,n,a]),i}}function ke(e,t){r((function(){var n;const r=null!=(n=t.layerContainer)?n:t.map;return r.addLayer(e.instance),function(){r.removeLayer(e.instance)}}),[t,e])}function Me(e){return function(t){const n=je(),r=e(Se(t,n),n);return ye(n.map,t.attribution),Pe(r.current,t.eventHandlers),ke(r.current,n),r}}function Ne(e,t){const n=o();r((function(){if(t.pathOptions!==n.current){var r;const o=null!=(r=t.pathOptions)?r:{};e.instance.setStyle(o),n.current=o}}),[e,t])}function _e(e){return function(t){const n=je(),r=e(Se(t,n),n);return Pe(r.current,t.eventHandlers),ke(r.current,n),Ne(r.current,t),r}}function De(e,t){return xe(Me(Te(e,t)))}function Re(e,t){return we(Le(Te(e),t))}function He(e,t){return xe(_e(Te(e,t)))}function Ue(e,t){return Ee(Me(Te(e,t)))}function We(e,t,n){const{opacity:r,zIndex:o}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=o&&o!==n.zIndex&&e.setZIndex(o)}var Ze=Object.freeze({__proto__:null,useAttribution:ye,updateCircle:function(e,t,n){t.center!==n.center&&e.setLatLng(t.center),null!=t.radius&&t.radius!==n.radius&&e.setRadius(t.radius)},createContainerComponent:xe,createDivOverlayComponent:we,createLeafComponent:Ee,CONTEXT_VERSION:1,LeafletContext:ve,LeafletProvider:Oe,useLeafletContext:je,createControlHook:Ce,createDivOverlayHook:Le,addClassName:Ae,removeClassName:ze,updateClassName:function(e,t,n){null!=e&&n!==t&&(null!=t&&t.length>0&&ze(e,t),null!=n&&n.length>0&&Ae(e,n))},createElementHook:Te,useEventHandlers:Pe,createControlComponent:function(e){return Ee(Ce(Te((function(t,n){return{instance:e(t),context:n}}))))},createLayerComponent:De,createOverlayComponent:Re,createPathComponent:He,createTileLayerComponent:Ue,updateGridLayer:We,createLayerHook:Me,useLayerLifecycle:ke,updateMediaOverlay:function(e,t,n){t.bounds instanceof I&&t.bounds!==n.bounds&&e.setBounds(t.bounds),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=t.zIndex&&t.zIndex!==n.zIndex&&e.setZIndex(t.zIndex)},withPane:Se,createPathHook:_e,usePathOptions:Ne});function $e(e){const t=je().map;return r((function(){return t.on(e),function(){t.off(e)}}),[t,e]),t}function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ve({children:a,className:i,id:l,placeholder:u,style:s,whenCreated:c,...f}){const p=o(null),b=function(e,n){const[o,a]=t(null);return r(()=>{if(null!==e.current&&null===o){const t=new A(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),a(t)}},[e,o,n]),o}(p,f),d=o(!1);r(()=>{null!=b&&!1===d.current&&null!=c&&(d.current=!0,c(b))},[b,c]);const[m]=t({className:i,id:l,style:s}),h=n(()=>b?{__version:1,map:b}:null,[b]),g=h?e.createElement(Oe,{value:h},a):null!=u?u:null;return e.createElement("div",Be({},m,{ref:p}),g)}const Fe=De((function({position:e,...t},n){const r=new z(e,t);return{instance:r,context:{...n,overlayContainer:r}}}),(function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())})),qe=He((function({positions:e,...t},n){const r=new T(e,t);return{instance:r,context:{...n,overlayContainer:r}}}),(function(e,t,n){t.positions!==n.positions&&e.setLatLngs(t.positions)})),Ge=Re((function(e,t){return{instance:new k(e,t.overlayContainer),context:t}}),(function(e,t,n,o){const{onClose:a,onOpen:i,position:l}=n;r((function(){const{instance:n}=e;function r(e){e.popup===n&&(n.update(),o(!0),null==i||i())}function u(e){e.popup===n&&(o(!1),null==a||a())}return t.map.on({popupopen:r,popupclose:u}),null==t.overlayContainer?(null!=l&&n.setLatLng(l),n.openOn(t.map)):t.overlayContainer.bindPopup(n),function(){t.map.off({popupopen:r,popupclose:u}),null==t.overlayContainer?t.map.removeLayer(n):t.overlayContainer.unbindPopup()}}),[e,t,o,a,i,l])})),Je=Ue((function({url:e,...t},n){return{instance:new M(e,Se(t,n)),context:n}}),We);var Ye,Xe=q((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=S)&&n.__esModule?n:{default:n};function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,Ze.createPathComponent)((function(e,t){e.children;var n=s(e,["children"]),o={},i={};Object.entries(n).forEach((function(e){var t=l(e,2),n=t[0],r=t[1];return n.startsWith("on")?i[n]=r:o[n]=r}));var u=new r.default.markerClusterGroup(o);return Object.entries(i).forEach((function(e){var t=l(e,2),n=t[0],r=t[1],o="cluster".concat(n.substring(2).toLowerCase());u.on(o,r)})),{instance:u,context:a(a({},t),{},{layerContainer:u})}}));t.default=c})),Ke=(Ye=Xe)&&Ye.__esModule&&Object.prototype.hasOwnProperty.call(Ye,"default")?Ye.default:Ye,Qe=function(){var e=E(),t=new URLSearchParams(e.location.search);return $e({moveend:function(n){t.set("lat",n.target.getCenter().lat),t.set("lng",n.target.getCenter().lng),e.replace({pathname:e.location.pathname,search:"?"+t.toString()})},zoomend:function(n){t.set("zoom",n.target.getZoom()),e.replace({pathname:e.location.pathname,search:"?"+t.toString()})}}),null},et=function(t){var n,r=t.latitude,o=t.longitude,a=t.label,i=t.description,l=t.popupContent,u=t.height,s=t.center,c=t.zoom,f=t.boundToMarkers,p=t.connectMarkers,b=W(t,["latitude","longitude","label","description","popupContent","height","center","zoom","boundToMarkers","connectMarkers"]),d=h(),m=d.ids,g=d.data,y=d.basePath,v=new URLSearchParams(C().search);s=v.has("lat")&&v.has("lng")?[v.get("lat"),v.get("lng")]:s,c=v.has("zoom")?v.get("zoom"):c;var O=m.map((function(e){return U(U({},g[e]),{},{latitude:r&&r(g[e]),longitude:o&&o(g[e]),label:a&&a(g[e]),description:i&&i(g[e])})})).filter((function(e){return e.latitude&&e.longitude})),j=f&&O.length>0?O.map((function(e){return[e.latitude,e.longitude]})):void 0;return f&&!j?null:e.createElement(Ve,R({style:{height:u},center:f?void 0:s,zoom:f?void 0:c,bounds:j},b),e.createElement(Je,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.createElement(Ke,{showCoverageOnHover:!1},O.map((function(t,r){var o=e.createElement(e.Fragment,{key:r},e.createElement(Fe,{position:[t.latitude,t.longitude]},e.createElement(Ge,null,e.createElement(l,{record:t,basePath:y}))),p&&n&&e.createElement(qe,{positions:[[n.latitude,n.longitude],[t.latitude,t.longitude]]}));return n=t,o}))),e.createElement(Qe,null))};et.defaultProps={height:700,center:[47,2.213749],zoom:6,connectMarkers:!1,scrollWheelZoom:!1,popupContent:N};var tt=y((function(e){return{address:{marginTop:e.spacing(2),marginBottom:e.spacing(1)}}})),nt=function(t){var n=t.record,r=t.latitude,o=t.longitude,a=t.address,i=t.height,l=t.addLabel,u=W(t,["record","latitude","longitude","address","height","addLabel"]),s=tt(),c=[r(n),o(n)];return c[0]&&c[1]?e.createElement(j,{addLabel:l},a&&e.createElement(g,{className:s.address},a(n)),e.createElement(Ve,R({style:{height:i},center:c},u),e.createElement(Je,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.createElement(Fe,{position:c}))):null};nt.defaultProps={height:400,zoom:11,addLabel:!0};export{N as DefaultPopupContent,ge as LocationInput,nt as MapField,et as MapList,Qe as QueryStringUpdater,_ as extractContext};
//# sourceMappingURL=index.es.js.map
