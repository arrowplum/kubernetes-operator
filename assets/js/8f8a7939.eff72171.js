"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[9607],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1192:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"XDR",description:"XDR"},c=void 0,l={unversionedId:"XDR",id:"version-1.x.x/XDR",isDocsHomePage:!1,title:"XDR",description:"XDR",source:"@site/versioned_docs/version-1.x.x/XDR.md",sourceDirName:".",slug:"/XDR",permalink:"/kubernetes-operator/1.x.x/XDR",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/XDR.md",tags:[],version:"1.x.x",frontMatter:{title:"XDR",description:"XDR"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Monitoring",permalink:"/kubernetes-operator/1.x.x/Monitoring"},next:{title:"Aerospike Access Control",permalink:"/kubernetes-operator/1.x.x/Aerospike-access-control"}},p=[{value:"Enable XDR and create a remote DC",id:"enable-xdr-and-create-a-remote-dc",children:[]},{value:"Remote DC Credentials",id:"remote-dc-credentials",children:[]},{value:"Deploy the cluster",id:"deploy-the-cluster",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To deploy a cluster as XDR source, you should configure ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-security-config-file")," config in CR file in ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospikeConfig.xdr.datacenter")," section. Also configure ",(0,i.kt)("inlineCode",{parentName:"p"},"dc-node-address-port")," in same section for destination DC. After configuring these values in the CR file  apply CR file to deploy the cluster."),(0,i.kt)("p",null,"For more details, visit ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/configure/cross-datacenter/"},"configure cross-datacenter")),(0,i.kt)("h2",{id:"enable-xdr-and-create-a-remote-dc"},"Enable XDR and create a remote DC"),(0,i.kt)("p",null,"Following is the XDR specific config for the Aerospike cluster CR file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  fileStorage:\n    - storageClass: ssd\n      volumeMounts:\n        - mountPath: /opt/aerospike/data\n          sizeInGB: 3\n        - mountPath: /opt/aerospike/xdr\n          sizeInGB: 5\n  aerospikeConfigSecret:\n    secretName: aerospike-secret\n    mountPath:  /etc/aerospike/secret\n  aerospikeConfig:\n    xdr:\n      enable-xdr: true\n      xdr-digestlog-path: /opt/aerospike/xdr/digestlog 5G\n      xdr-compression-threshold: 1000\n      datacenters:\n        - name: REMOTE_DC_1\n          dc-node-address-port: "IP PORT"\n          dc-security-config-file: /etc/aerospike/secret/security_credentials_DC1.txt\n    namespaces:\n      - name: test\n        enable-xdr: true\n        xdr-remote-datacenter: REMOTE_DC_1\n        memory-size: 3000000000\n        storage-engine:\n          type: device\n          files:\n            - /opt/aerospike/data/test.dat\n          filesize: 2000000000\n          data-in-memory: true\n')),(0,i.kt)("p",null,"Get full CR file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/deploy/samples/xdr_src_cluster_cr.yaml"},"here"),"."),(0,i.kt)("h2",{id:"remote-dc-credentials"},"Remote DC Credentials"),(0,i.kt)("p",null,"If destination cluster is security enabled then ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike-secret")," created in this section should also have ",(0,i.kt)("inlineCode",{parentName:"p"},"security_credentials_DC1.txt")," file for destination DC."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat security_credentials_DC1.txt\ncredentials\n{\n   username xdr_user\n   password xdr_pass\n}\n")),(0,i.kt)("h2",{id:"deploy-the-cluster"},"Deploy the cluster"),(0,i.kt)("p",null,"Follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"/kubernetes-operator/1.x.x/Create-Aerospike-cluster#deploy-aerospike-cluster"},"here")," to deploy this configuration."))}d.isMDXComponent=!0}}]);