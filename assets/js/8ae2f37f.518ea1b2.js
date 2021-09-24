"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[681],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8953:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={title:"Scaling",description:"Scaling"},l=void 0,p={unversionedId:"Scaling",id:"Scaling",isDocsHomePage:!1,title:"Scaling",description:"Scaling",source:"@site/docs/Scaling.md",sourceDirName:".",slug:"/Scaling",permalink:"/Scaling",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Scaling.md",tags:[],version:"current",frontMatter:{title:"Scaling",description:"Scaling"},sidebar:"docsSidebar",previous:{title:"Version Upgrade",permalink:"/Version-upgrade"},next:{title:"Kubernetes Secrets",permalink:"/Kubernetes-Secrets"}},s=[{value:"Change the size",id:"change-the-size",children:[]},{value:"Apply the change",id:"apply-the-change",children:[]},{value:"Check the pods",id:"check-the-pods",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For this example assume that cluster is deployed using a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike-cluster.yaml"),"."),(0,i.kt)("h2",{id:"change-the-size"},"Change the size"),(0,i.kt)("p",null,"Change the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.size")," field in the yaml file to scale up/down the cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: aerospike.com/v1alpha1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\nspec:\n  size: 2\n  image: aerospike/aerospike-server-enterprise:4.7.0.10\n  .\n  .\n")),(0,i.kt)("h2",{id:"apply-the-change"},"Apply the change"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f aerospike-cluster.yaml\n")),(0,i.kt)("h2",{id:"check-the-pods"},"Check the pods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get pods -n aerospike\nNAME          READY   STATUS      RESTARTS   AGE\naerocluster-0-0     1/1     Running     0          3m6s\naerocluster-0-1     1/1     Running     0          3m6s\naerocluster-0-2     1/1     Running     0          30s\naerocluster-0-3     1/1     Running     0          30s\n")))}d.isMDXComponent=!0}}]);