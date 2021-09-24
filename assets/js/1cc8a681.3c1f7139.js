"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[8709],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,k=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(k,c(c({ref:t},p),{},{components:r})):n.createElement(k,c({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6873:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),c=["components"],o={title:"Manage TLS Certificates",description:"Manage TLS Certificates"},s=void 0,l={unversionedId:"Manage-TLS-Certificates",id:"Manage-TLS-Certificates",isDocsHomePage:!1,title:"Manage TLS Certificates",description:"Manage TLS Certificates",source:"@site/docs/Manage-TLS-Certificates.md",sourceDirName:".",slug:"/Manage-TLS-Certificates",permalink:"/Manage-TLS-Certificates",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Manage-TLS-Certificates.md",tags:[],version:"current",frontMatter:{title:"Manage TLS Certificates",description:"Manage TLS Certificates"},sidebar:"docsSidebar",previous:{title:"Delete Aerospike Cluster",permalink:"/Delete-Aerospike-cluster"},next:{title:"Storage Provisioning",permalink:"/Storage-provisioning"}},p=[{value:"Create a secret containing TLS certificates and key.",id:"create-a-secret-containing-tls-certificates-and-key",children:[]},{value:"Create the TLS specific Aerospike configuration.",id:"create-the-tls-specific-aerospike-configuration",children:[]},{value:"Deploy the cluster",id:"deploy-the-cluster",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here we describe setting up a TLS enabled Aerospike cluster."),(0,a.kt)("p",null,"For more details, visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/configure/network/tls/"},"TLS configuration"),"."),(0,a.kt)("h2",{id:"create-a-secret-containing-tls-certificates-and-key"},"Create a secret containing TLS certificates and key."),(0,a.kt)("p",null,"Assuming your TLS secrets are in deploy/secrets folder, create a Kubernetes secret like so"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl create secret generic aerospike-secret --from-file=deploy/secrets -n aerospike\n")),(0,a.kt)("h2",{id:"create-the-tls-specific-aerospike-configuration"},"Create the TLS specific Aerospike configuration."),(0,a.kt)("p",null,"TLS specific config for the Aerospike cluster CR file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  aerospikeConfigSecret:\n    secretName: aerospike-secret\n    mountPath:  /etc/aerospike/secret\n  aerospikeConfig:\n    network:\n      service:\n        tls-name: bob-cluster-a\n        tls-authenticate-client: any\n      heartbeat:\n        tls-name: bob-cluster-b\n      fabric:\n        tls-name: bob-cluster-c\n      tls:\n        - name: bob-cluster-a\n          cert-file: /etc/aerospike/secret/svc_cluster_chain.pem\n          key-file: /etc/aerospike/secret/svc_key.pem\n          ca-file: /etc/aerospike/secret/cacert.pem\n        - name: bob-cluster-b\n          cert-file: /etc/aerospike/secret/hb_cluster_chain.pem\n          key-file: /etc/aerospike/secret/hb_key.pem\n          ca-file: /etc/aerospike/secret/cacert.pem\n        - name: bob-cluster-c\n          cert-file: /etc/aerospike/secret/fb_cluster_chain.pem\n          key-file: /etc/aerospike/secret/fb_key.pem\n          ca-file: /etc/aerospike/secret/cacert.pem\n")),(0,a.kt)("p",null,"Get full CR file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/deploy/samples/tls_cluster_cr.yaml"},"here"),"."),(0,a.kt)("h2",{id:"deploy-the-cluster"},"Deploy the cluster"),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/Create-Aerospike-cluster#deploy-aerospike-cluster"},"here")," to deploy this configuration."))}f.isMDXComponent=!0}}]);