"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[3215],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),m=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||p[u]||s;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<s;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var o=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],l={id:"models-with-same-name",title:"Models with same name"},r=void 0,m={unversionedId:"guides/advanced/models-with-same-name",id:"guides/advanced/models-with-same-name",title:"Models with same name",description:"This Guide shows all the possibilities for a model to use different names.",source:"@site/../docs/guides/advanced/models-with-same-name.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/models-with-same-name",permalink:"/typegoose/docs/guides/advanced/models-with-same-name",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/models-with-same-name.md",tags:[],version:"current",frontMatter:{id:"models-with-same-name",title:"Models with same name"},sidebar:"guides",previous:{title:"Array Types & Fields",permalink:"/typegoose/docs/guides/advanced/array-types"},next:{title:"Reference other Classes",permalink:"/typegoose/docs/guides/advanced/reference-other-classes"}},c=[{value:"SchemaOptions collection",id:"schemaoptions-collection",children:[],level:2},{value:"Typegoose Custom Options &quot;customName&quot;",id:"typegoose-custom-options-customname",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This Guide shows all the possibilities for a model to use different names."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If Classes with the same name are wanted, these methods need to be used so that Typegooes can differentiate between them"))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Since ",(0,s.kt)("inlineCode",{parentName:"p"},"7.6.0")," the name can also be changed in ",(0,s.kt)("inlineCode",{parentName:"p"},"getModelForClass")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"buildSchema")," calls."))),(0,s.kt)("h2",{id:"schemaoptions-collection"},"SchemaOptions collection"),(0,s.kt)("p",null,"For this to work, ",(0,s.kt)("inlineCode",{parentName:"p"},"{ options: { automaticName } }")," must be true."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"{ schemaOptions: { collection } }")," can be used to set a custom collection a model should use.\nUsing ",(0,s.kt)("inlineCode",{parentName:"p"},"{ schemaOptions: { collection } }")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"automaticName")," automatically adds a suffix of the collection to the model's name."),(0,s.kt)("p",null,"Example without ",(0,s.kt)("inlineCode",{parentName:"p"},"automaticName"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { collection: 'Something' } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel');\n")),(0,s.kt)("p",null,"Example with ",(0,s.kt)("inlineCode",{parentName:"p"},"automaticName"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { collection: 'Something' }, options: { automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),(0,s.kt)("h2",{id:"typegoose-custom-options-customname"},'Typegoose Custom Options "customName"'),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"{ options: { customName } }")," can be used to set a custom model name."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ options: { customName: 'CustomName' } })\nclass CustomNameOption {}\n\nconst model = getModelForClass(CustomNameOption);\nexpect(model.modelName).to.be.equal('CustomName');\n")),(0,s.kt)("p",null,"If ",(0,s.kt)("inlineCode",{parentName:"p"},"{ options: { customName } }")," is used with ",(0,s.kt)("inlineCode",{parentName:"p"},"{ options: { automaticName: true } }"),", then it will be used as a ",(0,s.kt)("em",{parentName:"p"},"suffix")," of the normal name."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ options: { customName: 'CustomName', automaticName: true } })\nclass CustomNameOption {}\n\nconst model = getModelForClass(CustomNameOption);\nexpect(model.modelName).to.be.equal('CustomNameOption_CustomName');\n")),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("p",null,"For more details on the usage of these naming features, please look into ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/r6/master/test/tests/customName.test.ts"},"the tests that are written for them.")),(0,s.kt)("p",null,"See also ",(0,s.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/name-generation"},"Typegoose's Name Generation")," for a complete (and hopefully simple) way to understand name generation."))}d.isMDXComponent=!0}}]);