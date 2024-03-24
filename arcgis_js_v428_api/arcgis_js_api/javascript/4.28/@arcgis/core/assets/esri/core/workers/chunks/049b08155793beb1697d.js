"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2311,3754],{75025:(e,t,r)=>{r.d(t,{A:()=>l});var s=r(29768),o=r(92143),a=r(34250),i=(r(91306),r(48578),r(17533)),n=r(21132);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,n.p)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,n.s)(e,o.L.getLogger(this)))}};return(0,s._)([(0,a.Cb)()],t.prototype,"title",null),(0,s._)([(0,a.Cb)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,i.j)("esri.layers.mixins.ArcGISService")],t),t}},83805:(e,t,r)=>{r.d(t,{f:()=>a});var s=r(82058),o=r(60991);async function a(e,t,r,a,i,n){let l=null;if(null!=r){const t=`${e}/nodepages/`,o=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,s.Z)(o,{query:{f:"json",token:a},responseType:"json",signal:n})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(e){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",o,e),l=e}}if(!t)return null;const p=t?.split("/").pop(),u=`${e}/nodes/`,c=u+p;try{return{type:"node",rootNode:(await(0,s.Z)(c,{query:{f:"json",token:a},responseType:"json",signal:n})).data,urlPrefix:u}}catch(e){throw new o.Z("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:e,url:c})}}},25368:(e,t,r)=>{function s(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{i:()=>s})},87217:(e,t,r)=>{r.d(t,{u:()=>o});var s=r(25368);function o(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,s.i)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},3754:(e,t,r)=>{r.d(t,{FO:()=>c,W7:()=>d,addOrUpdateResource:()=>n,fetchResources:()=>i,removeAllResources:()=>p,removeResource:()=>l});var s=r(82058),o=r(60991),a=r(32101);async function i(e,t={},r){await e.load(r);const s=(0,a.v_)(e.itemUrl,"resources"),{start:o=1,num:i=10,sortOrder:n="asc",sortField:l="created"}=t,p={query:{start:o,num:i,sortOrder:n,sortField:l,token:e.apiKey},signal:r?.signal},u=await e.portal.request(s,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function n(e,t,r,s){if(!e.hasPath())throw new o.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const i=e.portalItem;await i.load(s);const n=(0,a.v_)(i.userItemUrl,"add"===t?"addResources":"updateResources"),[l,p]=u(e.path),c=new FormData;return l&&"."!==l&&c.append("resourcesPrefix",l),null!=s&&s.compress&&c.append("compress","true"),c.append("fileName",p),c.append("file",r,p),c.append("f","json"),s?.access&&c.append("access",s.access),await i.portal.request(n,{method:"post",body:c,signal:s?.signal}),e}async function l(e,t,r){if(!t.hasPath())throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const s=(0,a.v_)(e.userItemUrl,"removeResources");await e.portal.request(s,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function p(e,t){await e.load(t);const r=(0,a.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}async function c(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,s.Z)(e.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[r,,s]=function(e){const[t,r]=function(e){const t=(0,a.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,o]=u(t);return[s,o,r]}(e.path);return e.portalItem.resourceFromPath((0,a.v_)(r,t+s))}r(31450),r(48578),r(76506),r(88762),r(92143),r(12047),r(29768),r(21972),r(17533),r(86656),r(66396),r(22723),r(6540),r(91306),r(34250),r(379),r(62062),r(6906),r(79456),r(50406)},31208:(e,t,r)=>{r.d(t,{v:()=>i});var s=r(31450),o=r(60991),a=r(82058);function i(e){if(s.default.apiKey&&(0,a.s)(e.portal.url))throw new o.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},46857:(e,t,r)=>{r.d(t,{b:()=>y,s:()=>l,u:()=>p});var s=r(41864),o=r(60991),a=r(50406),i=r(10279),n=r(3754);async function l(e,t,r=null){const s=await u(e,t,r);await c(s,t,r)}async function p(e,t,r,s,o=null){const a=await u(r,s,o);await e.update({data:t}),await c(a,s,o)}async function u(e,t,r=null){if(!t?.resources)return;const s=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),p=new Set,u=[];l.forEach((t=>{s.delete(t),e.paths.push(t)}));for(const o of t.resources.toUpdate)if(s.delete(o.resource.path),l.has(o.resource.path)||p.has(o.resource.path)){const{resource:t,content:s,finish:a,error:l}=o,p=(0,n.W7)(t,(0,i.g)());e.paths.push(p.path),u.push(d({resource:p,content:s,compress:o.compress,finish:a,error:l},r))}else e.paths.push(o.resource.path),u.push(h(o,r)),p.add(o.resource.path);for(const o of t.resources.toAdd)e.paths.push(o.resource.path),s.has(o.resource.path)?s.delete(o.resource.path):u.push(d(o,r));if(0===u.length)return s;const c=await(0,a.UO)(u);if((0,a.k_)(r),c.length>0)throw new o.Z("save:resources","Failed to save one or more resources",{errors:c});return s}async function c(e,t,r=null){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r))}await(0,a.as)(s)}async function d(e,t){const r={...null!=t?t:{},compress:e.compress},o=await(0,s.r)(e.resource.portalItem.addResource(e.resource,await(0,n.FO)(e.content),r));if(!0!==o.ok)throw e.error?.(o.error),o.error;e.finish?.(e.resource)}async function h(e,t){const r=await(0,s.r)(e.resource.update(await(0,n.FO)(e.content),t));if(!0!==r.ok)throw e.error?.(r.error),r.error;e.finish?.(e.resource)}async function y(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}},96994:(e,t,r)=>{r.d(t,{V:()=>i});var s=r(29768),o=r(34250),a=(r(91306),r(48578),r(17533));r(92143),r(31450),r(76506),r(66396),r(22723),r(86656),r(60991),r(6540);const i=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,o.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,a.j)("esri.layers.mixins.APIKeyMixin")],t),t}},5437:(e,t,r)=>{r.d(t,{Vt:()=>O,xp:()=>P});var s=r(29768),o=r(82058),a=r(60991),i=r(92143),n=r(50406),l=r(32101),p=r(34250),u=(r(91306),r(48578),r(97714)),c=r(17533),d=r(2906),h=r(87217),y=r(21801),f=r(29027),m=r(60947),g=r(21132),v=r(43022),w=r(83805),S=r(49900),I=r(56420),_=r(31208),x=r(46857);r(31450),r(76506),r(88762),r(12047),r(21972),r(86656),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(73796),r(53785),r(57251),r(89623),r(73173),r(91597),r(86787),r(35132),r(38742),r(93314),r(35197),r(8925),r(3482),r(76131),r(36097),r(1557),r(47842),r(14249),r(66284),r(87239),r(82426),r(72836),r(66106),r(29794),r(60217),r(74569),r(84069),r(44567),r(89034),r(98380),r(92482),r(92896),r(22781),r(32422),r(17298),r(85557),r(34394),r(81184),r(33101),r(58943),r(67477),r(78533),r(74653),r(91091),r(74742),r(28239),r(41864),r(10279),r(3754);const b="esri.layers.mixins.SceneService",R=i.L.getLogger(b),O=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,n.Ds)((async(e,t,r)=>{switch(e){case P.SAVE:return this._save(t);case P.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return m.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,s=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=s?new m.Z(s):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const s=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return y.Z.fromJSON(s,r)}const s=t.store,o=this._readSpatialReference(t);return null==o||null==s?.extent||!Array.isArray(s.extent)||s.extent.some((e=>e<A))?null:new y.Z({xmin:s.extent[0],ymin:s.extent[1],xmax:s.extent[2],ymax:s.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,s=null!=r.version?r.version.toString():"";return this.parseVersionString(s)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return(0,g.t)(this.url,t.name);let s=t.name;if(!s&&this.url){const e=(0,g.p)(this.url);null!=e&&(s=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(s=r+" - "+s),(0,g.c)(s)}set url(e){const t=(0,g.a)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:R});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,s){(0,g.w)(this,e,"layers",t,s)}get parsedUrl(){const e=this._get("url"),t=(0,l.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,w.f)(this.parsedUrl.path,this.rootNode,e,this.apiKey,R,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r?.obb?.center||null==r.obb.halfSize)throw new a.Z("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<A||null==this.fullExtent||this.fullExtent.hasZ)return;const s=r.obb.halfSize,o=r.obb.center[2],i=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=o-i,this.fullExtent.zmax=o+i}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<A)return;const r=t[2],s=t[3],{fullExtent:o}=this;o&&(o.zmin=r-s,o.zmax=r+s)}}async _fetchService(e){if(null==this.url)throw new a.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,o.Z)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,o.Z)(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const s=t.data;this.read(s,this._getServiceContext()),this.validateLayer(s)}async _fetchVoxelServiceLayer(e){const t=(await(0,o.Z)(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const s=t.getTypeKeywords();for(const t of s)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===K.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...Z,...t};let s=I.default.from(e);if(!s)throw new a.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,_.v)(s),s.id&&(s=s.clone(),s.id=null);const o=s.portal||S.Z.getDefault();await this._ensureLoadBeforeSave(),s.type=N,s.portal=o;const i={origin:"portal-item",url:null,messages:[],portal:o,portalItem:s,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,i,r),s.url=this.url,s.title||(s.title=this.title),this._updateTypeKeywords(s,r,K.newItem),await o.signIn(),await(o.user?.addItem({item:s,folder:r?.folder,data:n})),await(0,x.s)(this.resourceReferences,i,null),this.portalItem=s,(0,h.u)(i),i.portalItem=s,s}async _save(e){const t={...Z,...e};if(!this.portalItem)throw new a.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,_.v)(this.portalItem),this.portalItem.type!==N)throw new a.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${N}"`);await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,l.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||S.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},s={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(s,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,K.existingItem),await(0,x.u)(this.portalItem,s,this.resourceReferences,r,null),(0,h.u)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){let s=t.messages?.filter((e=>"error"===e.type)).map((e=>new a.Z(e.name,e.message,e.details)))??[];if(r?.validationOptions?.ignoreUnsupported&&(s=s.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),s.length>0)throw new a.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}};return(0,s._)([(0,p.Cb)(v.i)],t.prototype,"id",void 0),(0,s._)([(0,p.Cb)({type:m.Z})],t.prototype,"spatialReference",void 0),(0,s._)([(0,u.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,s._)([(0,p.Cb)({type:y.Z})],t.prototype,"fullExtent",void 0),(0,s._)([(0,u.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,s._)([(0,p.Cb)({readOnly:!0,type:f.Z})],t.prototype,"heightModelInfo",void 0),(0,s._)([(0,p.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,s._)([(0,p.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,s._)([(0,u.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,s._)([(0,p.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,s._)([(0,p.Cb)({type:String})],t.prototype,"title",void 0),(0,s._)([(0,u.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,s._)([(0,u.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,s._)([(0,p.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,s._)([(0,p.Cb)(v.u)],t.prototype,"url",null),(0,s._)([(0,d.w)("url")],t.prototype,"writeUrl",null),(0,s._)([(0,p.Cb)()],t.prototype,"parsedUrl",null),(0,s._)([(0,p.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,s._)([(0,p.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,s._)([(0,c.j)(b)],t),t},A=-1e38;var K,C;(C=K||(K={}))[C.existingItem=0]="existingItem",C[C.newItem=1]="newItem";const N="Scene Service",Z={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var P;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(P||(P={}))}}]);