(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(2),r=t(6),i=(t(0),t(74)),c={id:"connections",title:"connection-plugin",sidebar_label:"connection-plugin",slug:"/plugins/connections"},a={unversionedId:"plugins/connections",id:"plugins/connections",isDocsHomePage:!1,title:"connection-plugin",description:"Plugin to render the connections between nodes",source:"@site/docs\\plugins\\02-connection-plugin.md",slug:"/plugins/connections",permalink:"/documentation/docs/plugins/connections",editUrl:"https://github.com/naetverkjs/documentation/blob/master/docs/plugins/02-connection-plugin.md",version:"current",sidebar_label:"connection-plugin",sidebar:"someSidebar",previous:{title:"Plugins",permalink:"/documentation/docs/plugins/"},next:{title:"area-plugin",permalink:"/documentation/docs/plugins/area"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Events",id:"events",children:[]}],s={rightToc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Plugin to render the connections between nodes  "),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { ConnectionPlugin } from '@naetverkjs/connections';\n\neditor.use(ConnectionPlugin);\n")),Object(i.b)("h3",{id:"styling"},"Styling"),Object(i.b)("p",null,"To display the connections, add the following scss to your component. You can also overwrite this if you want. "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-scss"}),".connection {\n  overflow: visible !important;\n  position: absolute;\n  z-index: -1;\n  pointer-events: none;\n  > * {\n    pointer-events: all;\n  }\n\n  .main-path {\n    fill: none;\n    stroke-width: 5px;\n    stroke: steelblue;\n  }\n}\n")),Object(i.b)("h3",{id:"events"},"Events"),Object(i.b)("p",null,"The connections plugin adds events to the editor to render the connecting lines between the node sockets. "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"editor.on('connectionpath', (data) => {\n  const {\n    points, // array of numbers, e.g. [x1, y1, x2, y2]\n    connection, // Naetverk.Connection instance\n    d, // string, d attribute of <path>\n  } = data;\n\n  data.d = `M ${x1} ${y1} ${x2} ${y2}`; // Override of the the path curve\n});\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"editor.on('connectiondrop', (io) /* Input or Output */ => {\n  // triggered when the user drops picked connection\n});\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"editor.on('connectionpick', (io) /* Input or Output */ => {\n  // triggered when the user tries to pick a connection\n  // you can prevent it\n  return false;\n});\n\neditor.trigger('resetconnection'); // reset pseudo connection\n")))}u.isMDXComponent=!0},74:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=o,g=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return t?r.a.createElement(g,a(a({ref:n},s),{},{components:t})):r.a.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=b;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);