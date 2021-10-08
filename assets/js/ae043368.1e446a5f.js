"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[650],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(v,s(s({ref:t},p),{},{components:o})):r.createElement(v,s({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6235:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),s=["components"],i={title:"Storage Provisioning",description:"Storage Provisioning"},l=void 0,c={unversionedId:"Storage-provisioning",id:"version-2.0.0-rc1/Storage-provisioning",isDocsHomePage:!1,title:"Storage Provisioning",description:"Storage Provisioning",source:"@site/versioned_docs/version-2.0.0-rc1/Storage-provisioning.md",sourceDirName:".",slug:"/Storage-provisioning",permalink:"/kubernetes-operator/Storage-provisioning",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-2.0.0-rc1/Storage-provisioning.md",tags:[],version:"2.0.0-rc1",frontMatter:{title:"Storage Provisioning",description:"Storage Provisioning"}},p=[{value:"Google cloud storage classes",id:"google-cloud-storage-classes",children:[]},{value:"Local volume",id:"local-volume",children:[{value:"Create discovery directory and link the devices",id:"create-discovery-directory-and-link-the-devices",children:[]},{value:"Configure and deploy local volume provisioner",id:"configure-and-deploy-local-volume-provisioner",children:[]}]}],d={toc:p};function u(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You need to set up ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"storage classes")," to use persistent storage external to the containers. These storage classes are used for dynamically provisioning the persistent storage demanded by users in aerospike CR configuration. Persistent storage on the pods will use these storage class provisioners to provision storage."),(0,a.kt)("p",null,"The storage configuration depends on the environment the Kubernetes cluster is deployed. For e.g. different cloud providers supply their own implementations of storage provisioners that dynamically create and attach storage devices to the containers."),(0,a.kt)("p",null,"Before deploying an Aerospike cluster that uses persistent storage, you need to create a ",(0,a.kt)("strong",{parentName:"p"},"storage-class.yaml"),"  file, that defines the storage classes and then apply them onto the Kubernetes cluster."),(0,a.kt)("h2",{id:"google-cloud-storage-classes"},"Google cloud storage classes"),(0,a.kt)("p",null,"The following ",(0,a.kt)("strong",{parentName:"p"},"storage-class.yaml")," file uses the Google Cloud GCE provisioner to create a storage class called ",(0,a.kt)("strong",{parentName:"p"},"ssd"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: ssd\nprovisioner: kubernetes.io/gce-pd\nparameters:\n  type: pd-ssd\n")),(0,a.kt)("h2",{id:"local-volume"},"Local volume"),(0,a.kt)("p",null,"In this example, there is a local SSD (identified as ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/nvme0n1"),"). This should be attached to each Kubernetes worker node which will be used for getting the primary storage device for Aerospike Cluster deployment."),(0,a.kt)("h3",{id:"create-discovery-directory-and-link-the-devices"},"Create discovery directory and link the devices"),(0,a.kt)("p",null,"Before deploying local volume provisioner, create a discovery directory on each worker node and link the block devices to be used in the discovery directory. The provisioner will discover local block volumes from this directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ lsblk\nNAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nnvme0n1       8:16   0  375G  0 disk\nnvme0n2       8:32   0  375G  0 disk\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir /mnt/disks\n$ sudo ln -s /dev/nvme0n1 /mnt/disks/\n$ sudo ln -s /dev/nvme0n2 /mnt/disks/\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can use also your own discovery directory, but make sure that the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/2.0.0-rc1/config/samples/storage/aerospike_local_volume_provisioner.yaml"},"provisioner")," is also configured to point to the same directory."))),(0,a.kt)("h3",{id:"configure-and-deploy-local-volume-provisioner"},"Configure and deploy local volume provisioner"),(0,a.kt)("p",null,"To automate the local volume provisioning, we will create and run a provisioner based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/sig-storage-local-static-provisioner"},"kubernetes-sigs/sig-storage-local-static-provisioner"),"."),(0,a.kt)("p",null,"The provisioner will run as a ",(0,a.kt)("inlineCode",{parentName:"p"},"DaemonSet")," which will manage the local SSDs on each node based on a discovery directory, create/delete the PersistentVolumes and clean up the storage when it is released."),(0,a.kt)("p",null,"The local volume static provisioner for this example is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/2.0.0-rc1/config/samples/storage/aerospike_local_volume_provisioner.yaml"},"aerospike_local_volume_provisioner.yaml"),"."),(0,a.kt)("p",null,"The storage class yaml is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/2.0.0-rc1/config/samples/storage/local_storage_class.yaml"},"local_storage_class.yaml"),"."),(0,a.kt)("p",null,"Create local storage class and then deploy the provisioner."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl create -f config/samples/storage/local_storage_class.yaml\n\n$ kubectl create -f config/samples/storage/aerospike_local_volume_provisioner.yaml\n")),(0,a.kt)("p",null,"Verify the discovered and created PV objects,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ kubectl get pv\n\nNAME                CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS     REASON   AGE\nlocal-pv-342b45ed   375Gi      RWO            Delete           Available           "local-ssd"            3s\nlocal-pv-3587dbec   375Gi      RWO            Delete           Available           "local-ssd"            3s\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"storageclass")," configured here is ",(0,a.kt)("inlineCode",{parentName:"p"},'"local-ssd"'),". We will provide this in the Aerospike cluster CR config. This storageclass will be used to talk to the provisioner and request PV resources for the cluster."))))}u.isMDXComponent=!0}}]);