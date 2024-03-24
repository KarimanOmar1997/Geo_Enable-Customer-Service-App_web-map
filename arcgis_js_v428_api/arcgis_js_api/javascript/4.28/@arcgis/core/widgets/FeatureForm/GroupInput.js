/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{d as s}from"../../core/Accessor.js";import{L as e}from"../../chunks/Logger.js";import{watch as r}from"../../core/reactiveUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{a as p}from"../../chunks/featureFormUtils.js";import n from"./InputBase.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../core/lang.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/time.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/compilerUtils.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/utils3.js";import"../../chunks/colorUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";let l=class extends n{constructor(t){super(t),this._expressionTrackingHandles=new Map,this.type="group"}initialize(){this.addHandles([r((()=>[this.visible,this.inputs]),(([t])=>{const{inputs:s}=this,e=!!t&&void 0;for(const t of s)p(t)&&(t.required=e)}),{initial:!0,equals:(t,s)=>s[0]===t[0]&&s[1]===t[1]})])}destroy(){for(const t of this._expressionTrackingHandles.values())t.remove()}get initialState(){return this.element.initialState||"expanded"}set inputFields(t){s(e.getLogger(this),"inputFields",{replacement:"inputs",version:"4.27",warnOnce:!0}),this.inputs=t}get inputFields(){return s(e.getLogger(this),"inputFields",{replacement:"inputs",version:"4.27",warnOnce:!0}),this.inputs}get inputs(){return this._get("inputs")}set inputs(t){this.removeAllHandles(),t&&this.addHandles(t.map((t=>r((()=>t.visible),(()=>this._dirtyEvaluatedVisibilityExpression()))))),this._set("inputs",t)}get label(){return this.element.label}set label(t){const{element:s}=this;s&&(s.label=t)}get open(){return"expanded"===this.initialState}set open(t){this._override("open",t)}get state(){return s(e.getLogger(this),"state",{replacement:"open",version:"4.28",warnOnce:!0}),this.open?"expanded":"collapsed"}set state(t){s(e.getLogger(this),"state",{replacement:"open",version:"4.28",warnOnce:!0}),this.open="expanded"===t}get visible(){return!1!==this.evaluatedVisibilityExpression&&this.inputs&&this.inputs.some((t=>t.visible))}_dirtyEvaluatedVisibilityExpression(){const{element:t}=this;t.visibilityExpression&&this.notifyChange("evaluatedVisibilityExpression")}};t([i()],l.prototype,"initialState",null),t([i()],l.prototype,"inputs",null),t([i()],l.prototype,"label",null),t([i()],l.prototype,"open",null),t([i()],l.prototype,"type",void 0),t([i()],l.prototype,"visible",null),l=t([o("esri.widgets.FeatureForm.GroupInput")],l);const m=l;export{m as default};