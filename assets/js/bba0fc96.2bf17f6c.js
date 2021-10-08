"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[3972],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,k=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?t.createElement(k,a(a({ref:n},l),{},{components:r})):t.createElement(k,a({ref:n},l))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},474:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"Modify Aerospike cluster",description:"Modify Aerospike cluster"},c=void 0,p={unversionedId:"Aerospike-configuration-change",id:"version-1.x.x/Aerospike-configuration-change",isDocsHomePage:!1,title:"Modify Aerospike cluster",description:"Modify Aerospike cluster",source:"@site/versioned_docs/version-1.x.x/Aerospike-configuration-change.md",sourceDirName:".",slug:"/Aerospike-configuration-change",permalink:"/kubernetes-operator/1.x.x/Aerospike-configuration-change",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/Aerospike-configuration-change.md",tags:[],version:"1.x.x",frontMatter:{title:"Modify Aerospike cluster",description:"Modify Aerospike cluster"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Aerospike Access Control",permalink:"/kubernetes-operator/1.x.x/Aerospike-access-control"},next:{title:"Version Upgrade",permalink:"/kubernetes-operator/1.x.x/Version-upgrade"}},l=[{value:"Change a config in the aerospikeConfig section",id:"change-a-config-in-the-aerospikeconfig-section",children:[]},{value:"Apply the change",id:"apply-the-change",children:[]},{value:"Check the pods",id:"check-the-pods",children:[]}],u={toc:l};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For this example assume that cluster is deployed using a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike-cluster.yaml"),"."),(0,i.kt)("h2",{id:"change-a-config-in-the-aerospikeconfig-section"},"Change a config in the aerospikeConfig section"),(0,i.kt)("p",null,"Change the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.aerospikeConfig.service.proto-fd-max")," field in the aerocluster CR to ",(0,i.kt)("inlineCode",{parentName:"p"},"20000")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: aerospike.com/v1alpha1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\nspec:\n  size: 2\n  image: aerospike/aerospike-server-enterprise:4.7.0.10\n  aerospikeConfig:\n    service:\n      proto-fd-max: 15000\n  .\n  .\n")),(0,i.kt)("h2",{id:"apply-the-change"},"Apply the change"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f aerospike-cluster.yaml\n")),(0,i.kt)("h2",{id:"check-the-pods"},"Check the pods"),(0,i.kt)("p",null,"Pods will undergo a rolling restart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get pods -n aerospike\nNAME          READY   STATUS              RESTARTS   AGE\naerocluster-0-0     1/1     Running         0          3m6s\naerocluster-0-1     1/1     Running         0          3m6s\naerocluster-0-2     1/1     Running         0          30s\naerocluster-0-3     1/1     Terminating     0          30s\n")),(0,i.kt)("p",null,"After all the pods have restarted, use kubectl describe to get status of the cluster."),(0,i.kt)("p",null,"Check ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.aerospikeConfig.service.proto-fd-max")," in status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl -n aerospike describe aerospikecluster aerocluster\nName:         aerocluster\nNamespace:    aerospike\nKind:         AerospikeCluster\n.\n.\nStatus:\n  Aerospike Config:\n    Service:\n      Proto - Fd - Max:   20000\n  .\n  .\n")))}f.isMDXComponent=!0}}]);