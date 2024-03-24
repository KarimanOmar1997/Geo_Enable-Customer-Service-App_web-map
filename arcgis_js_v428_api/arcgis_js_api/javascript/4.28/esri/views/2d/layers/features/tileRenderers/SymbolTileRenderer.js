// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/Error ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/support/aaBoundingRect ../../../engine/webgl/FeatureTile ../support/rendererUtils ./BaseTileRenderer ./support/visualVariablesUtils ./support/WGLFeatureView".split(" "),
function(e,f,g,h,k,u,v,w,x,l,m,n,p,q,r,t){e.SymbolTileRenderer=class extends q{constructor(){super(...arguments);this.type="symbol"}install(a){const b=new t.WGLFeatureView(this.tileInfoView,this.layerView,this.layer,()=>this.notifyChange("updating"));this.featuresView=b;a.addChild(b)}uninstall(a){a.removeChild(this.featuresView);this.featuresView=h.destroyMaybe(this.featuresView)}fetchResource(a,b){({url:a}=a);const c=this.featuresView.stage;try{return c.resourceManager.fetchResource(a,{signal:b.signal})}catch(d){return k.isAbortError(d)?
Promise.resolve({width:0,height:0}):Promise.reject(d)}}isUpdating(){const a=super.isUpdating(),b=!this.featuresView||this.featuresView.isUpdating();var c=this.featuresView?.hasEmptyAttributeView();c=a||b||a&&c;g("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${c}\n  -> updatingTiles ${a}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${b}`);return c}hitTest(a){return this.featuresView.hitTest(a)}supportsRenderer(a){return null!=a&&"simple class-breaks unique-value dot-density dictionary heatmap pie-chart".split(" ").includes(a.type)}onConfigUpdate(a){var b=
null;a&&"visualVariables"in a&&(b=(p.simplifyVVRenderer(a).visualVariables||[]).map(c=>{const d=c.clone();"normalizationField"in c&&(d.normalizationField=null);c.valueExpression&&"$view.scale"!==c.valueExpression&&(d.valueExpression=null,d.field="nop");return d}),b=r.convertVisualVariables(b));this.featuresView.setRendererInfo(a,b,this.layerView.featureEffect)}onTileData(a){const b=this.tiles.get(a.tileKey);if(b&&a.data)this.featuresView.onTileData(b,a.data);this.layerView.view.labelManager.requestUpdate()}onTileError(a){if(a=
this.tiles.get(a.tileKey))this.featuresView.onTileError(a)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload();this.tiles.forEach(a=>a.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload();this.tiles.forEach(a=>a.unlock())}async getMaterialItems(a){return this.featuresView.getMaterialItems(a)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(a){const b=
this.tileInfoView.getTileBounds(m.create(),a),c=this.tileInfoView.getTileResolution(a.level);return new n.FeatureTile(a,c,b[0],b[3],this.featuresView.attributeView,()=>this.layerView.view.labelManager.requestUpdate())}disposeTile(a){this.featuresView.removeChild(a);a.destroy();this.layerView.view.labelManager.requestUpdate()}};e.SymbolTileRenderer=f.__decorate([l.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],e.SymbolTileRenderer);Object.defineProperty(e,Symbol.toStringTag,
{value:"Module"})});