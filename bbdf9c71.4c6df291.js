(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),o=(t(0),t(74));const a={id:"engine",title:"Engine"},s={unversionedId:"engine",id:"engine",isDocsHomePage:!1,title:"Engine",description:"This class allows you to process data based on streams in nodes and transfer them from the output data of one node to the input of another.",source:"@site/docs\\03_engine.md",slug:"/engine",permalink:"/documentation/docs/engine",editUrl:"https://github.com/naetverkjs/documentation/blob/master/docs/03_engine.md",version:"current",sidebar:"someSidebar",previous:{title:"Editor",permalink:"/documentation/docs/editor"},next:{title:"Plugins",permalink:"/documentation/docs/plugins/"}},c=[{value:"Events",id:"events",children:[{value:"Process",id:"process",children:[]}]}],i={rightToc:c};function p({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This class allows you to process data based on streams in nodes and transfer them from the output data of one node to the input of another.\nThe engine does not depend on other components of the editor. All it needs is an identifier, component workers and JSON data."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"var engine = new Rete.Engine('demo@0.1.0');\n\nengine.register(myComponent);\nawait engine.process(data);\n")),Object(o.b)("p",null,"You can also pass additional arguments inside the workers"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"engine.process(data, null, arg1, arg2);\n")),Object(o.b)("p",null,"Arguments will be passed to each worker processed by this process"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"worker(node, inputs, outputs, arg1, arg2) {\n  outputs['num'] = node.data.num;\n}\n")),Object(o.b)("p",null,"If an error occurs during processing (recursion detected, wrong startId, incorrect data), you can get its message and data"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"engine.on('error', ({ message, data }) => {});\n")),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)("h3",{id:"process"},"Process"),Object(o.b)("p",null,"If you need to immediately receive the results of changes you can subscribe to the process event"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"editor.on('process', async () => {\n  await engine.abort();\n  await engine.process(editor.toJSON());\n});\n")),Object(o.b)("p",null,"In general, for each change in the schema (nodes, connections, node data), it is necessary to perform processing.\nDue to the fact that workers can be asynchronous, the 'process' method is also asynchronous.\nSince the actions provoking the processing can be performed without waiting for the completion of the previous processing,\nwe need the ",Object(o.b)("inlineCode",{parentName:"p"},"abort")," method, which waits for the completion of the previous processing and guarantees data integrity."),Object(o.b)("p",null,"Usually there is some kind of primary node from which processing should start."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"engine.process(data, node.id);\n")),Object(o.b)("p",null,"This can be important in situations where a node requests data simultaneously from multiple nodes."),Object(o.b)("p",null,"You can also pass additional arguments inside the workers"))}p.isMDXComponent=!0},74:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,m=l["".concat(s,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(m,c(c({ref:n},p),{},{components:t})):o.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);