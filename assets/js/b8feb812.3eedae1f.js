"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[2101],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3710:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Data On SSD",description:"Data On SSD"},c=void 0,p={unversionedId:"Data-on-SSD",id:"version-1.x.x/Data-on-SSD",isDocsHomePage:!1,title:"Data On SSD",description:"Data On SSD",source:"@site/versioned_docs/version-1.x.x/Data-on-SSD.md",sourceDirName:".",slug:"/Data-on-SSD",permalink:"/kubernetes-operator/Data-on-SSD",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/Data-on-SSD.md",tags:[],version:"1.x.x",frontMatter:{title:"Data On SSD",description:"Data On SSD"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Data In Memory",permalink:"/kubernetes-operator/Data-in-memory"},next:{title:"HDD Storage With Data In Index",permalink:"/kubernetes-operator/HDD-storage-with-data-in-index"}},l=[{value:"Create the namespace configuration",id:"create-the-namespace-configuration",children:[]},{value:"Deploy the cluster",id:"deploy-the-cluster",children:[]}],u={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here we provide namespace storage configuration for storing namespace data on a provisioned SSD storage device."),(0,a.kt)("p",null,"For more details, visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/configure/namespace/storage/#recipe-for-an-ssd-storage-engine"},"configuration of SSD Storage Engine"),"."),(0,a.kt)("h2",{id:"create-the-namespace-configuration"},"Create the namespace configuration"),(0,a.kt)("p",null,"Following is the Storage specific config for aerospike cluster CR file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  storage:\n    volumes:\n      - storageClass: ssd\n        path: /opt/aerospike\n        volumeMode: filesystem\n        sizeInGB: 1\n      - path: /test/dev/xvdf\n        storageClass: ssd\n        volumeMode: block\n        sizeInGB: 5\n .\n .\n .\n  aerospikeConfig:\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security:\n      enable-security: true\n    namespaces:\n      - name: test\n        memory-size: 3000000000\n        replication-factor: 2\n        storage-engine:\n          type: device\n          devices:\n            - /test/dev/xvdf\n")),(0,a.kt)("p",null,"Get full CR file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/deploy/samples/ssd_storage_cluster_cr.yaml"},"here"),"."),(0,a.kt)("h2",{id:"deploy-the-cluster"},"Deploy the cluster"),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/kubernetes-operator/Create-Aerospike-cluster#deploy-aerospike-cluster"},"here")," to deploy this configuration."))}f.isMDXComponent=!0}}]);