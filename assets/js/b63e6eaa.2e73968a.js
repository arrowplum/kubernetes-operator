"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[5313],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2574:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"System Requirements",description:"System Requirements"},u=void 0,l={unversionedId:"System-Requirements",id:"version-2.0.0-rc1/System-Requirements",isDocsHomePage:!1,title:"System Requirements",description:"System Requirements",source:"@site/versioned_docs/version-2.0.0-rc1/System-Requirements.md",sourceDirName:".",slug:"/System-Requirements",permalink:"/kubernetes-operator/System-Requirements",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-2.0.0-rc1/System-Requirements.md",tags:[],version:"2.0.0-rc1",frontMatter:{title:"System Requirements",description:"System Requirements"}},p=[{value:"What does it support?",id:"what-does-it-support",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Get started",id:"get-started",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-does-it-support"},"What does it support?"),(0,i.kt)("p",null,"The Aerospike Operator deploys and manages Aerospike Database Enterprise Edition, versions 4.9.0 to 5.6.0.13.  "),(0,i.kt)("p",null,"The Operator is supported on the following platforms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes 1.16, 1.17, 1.18, 1.19, 1.20, 1.21 and 1.22"),(0,i.kt)("li",{parentName:"ul"},"Openshift 4.6, 4.7 and 4.8"),(0,i.kt)("li",{parentName:"ul"},"Amazon Elastic Kubernetes Service "),(0,i.kt)("li",{parentName:"ul"},"Google Kubernetes Engine"),(0,i.kt)("li",{parentName:"ul"},"Microsoft Azure Kubernetes Service")),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"The Aerospike Operator extends Kubernetes by defining types that represent Aerospike clusters. These types are declarative; they define what the cluster should look like. The Operator monitors Kubernetes for Aerospike resources, creating or updating Aerospike Clusters to match the defined specification. "),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/kubernetes-operator/Install-the-Operator-on-Kubernetes"},"Install the Operator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/kubernetes-operator/Create-Aerospike-cluster"},"Create the Aerospike cluster"))),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io"},"Kubernetes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/kubernetes-operator/Limitations"},"Limitations"))))}m.isMDXComponent=!0}}]);