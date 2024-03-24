// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ./Error ./maybe ./Promise ./promiseUtils ./Warning ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(c,k,p,b,q,r,d,l){const n=a=>{a=class extends a{constructor(...e){super(...e);this.loadError=this._loadController=null;this.loadStatus="not-loaded";this._set("loadWarnings",[]);this.addResolvingPromise(new Promise(f=>{const t=this.load.bind(this);this.load=u=>{const v=new Promise((g,h)=>{const m=q.onAbortOrThrow(u,h);this.destroyed&&
h(new k("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this}));this.when(g,h).finally(()=>{m&&m.remove()})});if("not-loaded"===this.loadStatus){this._set("loadStatus","loading");const g=this._loadController=new AbortController;t({signal:g.signal})}f();return v}}));this.when(()=>{this._set("loadStatus","loaded");this._loadController=null},f=>{this._set("loadStatus","failed");this._set("loadError",f);this._loadController=null})}destroy(){this._loadController&&
(this._loadController=p.abortMaybe(this._loadController),this._promiseProps.abort());this._set("loadError",null);this._set("loadWarnings",[])}get loaded(){return"loaded"===this.loadStatus}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){if(this.isFulfilled())return this;this._set("loadError",new k("load:cancelled","Cancelled"));this._loadController?.abort();this._promiseProps.abort();return this}};c.__decorate([d.property({readOnly:!0})],a.prototype,"loaded",null);
c.__decorate([d.property({readOnly:!0})],a.prototype,"loadError",void 0);c.__decorate([d.property({clonable:!1})],a.prototype,"loadStatus",void 0);c.__decorate([d.property({type:[r],readOnly:!0})],a.prototype,"loadWarnings",null);return a=c.__decorate([l.subclass("esri.core.Loadable")],a)};b=class extends n(b.EsriPromise){};b=c.__decorate([l.subclass("esri.core.Loadable")],b);(function(a){a.LoadableMixin=n;a.isLoadable=function(e){return!(!e||!e.load)}})(b||(b={}));return b});