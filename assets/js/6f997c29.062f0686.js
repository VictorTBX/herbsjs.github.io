(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,s(s({ref:t},c),{},{components:r})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},635:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/glues-45dbd0825eb5692619cbfef39ed1998c.png"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(107)),i={id:"whatis",title:"Glues",sidebar_label:"What's glues",slug:"/glues"},s={unversionedId:"glues/whatis",id:"glues/whatis",isDocsHomePage:!1,title:"Glues",description:"Glues",source:"@site/docs/glues/whatis.md",slug:"/glues",permalink:"/docs/glues",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/glues/whatis.md",version:"current",sidebar_label:"What's glues",sidebar:"sidebar",previous:{title:"Suma",permalink:"/docs/libs/suma"},next:{title:"Herbs2gql",permalink:"/docs/glues/herbs2gql"}},l=[],c={toc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Glues",src:r(635).default}),"\nWe write a lot of code that is not related to the business, and for this reason we understand that herbsjs is a great library for you to have little to worry about."),Object(o.b)("p",null,'Through the issuance of metadata (we already talked a little about this in the architecture guidelines section), we created auxiliary libraries that we call here "glues", are libraries that will see the metadata emitted by the core libraries of herbsJS and externalize it in a that you can connect HerbsJS with tools already consolidated in the market, such as a GraphQL API, an integration with Knex ORM, a self-documenting solution or a rest API for example.'))}u.isMDXComponent=!0}}]);