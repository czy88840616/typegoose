"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7022],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7337:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"indexes",title:"@index"},l=void 0,p={unversionedId:"api/decorators/indexes",id:"api/decorators/indexes",title:"@index",description:"@index(fields object) is used to set indexes",source:"@site/../docs/api/decorators/indexes.md",sourceDirName:"api/decorators",slug:"/api/decorators/indexes",permalink:"/typegoose/docs/api/decorators/indexes",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/indexes.md",tags:[],version:"current",frontMatter:{id:"indexes",title:"@index"},sidebar:"docs",previous:{title:"@pre & @post",permalink:"/typegoose/docs/api/decorators/hooks"},next:{title:"@plugins",permalink:"/typegoose/docs/api/decorators/plugins"}},c=[],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@index(fields: object, options: object)")," is used to set indexes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields"),": set of key-number pairs like ",(0,i.kt)("inlineCode",{parentName:"li"},"{ field1: 1 }")," (",(0,i.kt)("inlineCode",{parentName:"li"},"1")," for ascending and ",(0,i.kt)("inlineCode",{parentName:"li"},"-1")," for descending), or for text indexes, ",(0,i.kt)("inlineCode",{parentName:"li"},"{ field1: 'text' }"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,i.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#createIndex"},"please see the MongoDB driver docs"),". Note that if you want to add ",(0,i.kt)("inlineCode",{parentName:"li"},"weights")," to the ",(0,i.kt)("inlineCode",{parentName:"li"},"options")," (for ",(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/control-results-of-text-search/"},"full-text search"),"), you must define the same set of fields in ",(0,i.kt)("inlineCode",{parentName:"li"},"fields")," as in the ",(0,i.kt)("inlineCode",{parentName:"li"},"weights"),".")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@index({ article: 1, user: 1 }, { unique: true }) // compound index\n@index({ location: '2dsphere' }) // single index with no options\n@index({ article: 1 }, { partialFilterExpression: { stars: { $gte: 4.5 } } }) // single index with options\nclass Location {\n  @prop()\n  public article?: number;\n\n  @prop()\n  public user?: number;\n\n  @prop()\n  public stars?: number;\n\n  @prop({ type: Number, dim: 2 })\n  public location?: number[][];\n}\n")))}u.isMDXComponent=!0}}]);