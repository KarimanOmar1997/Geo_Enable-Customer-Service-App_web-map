// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../analysis/DirectLineMeasurementAnalysis ../../core/reactiveUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../properties/defaultUnit ../../views/3d/interactive/measurementTools/directLineMeasurement3D/DirectLineMeasurement3DTool ../support/InteractiveAnalysisViewModel".split(" "),function(d,h,k,g,e,c,q,r,l,m,n,p){c=
class extends p.InteractiveAnalysisViewModel{constructor(a){super(a);this.analysis=null;this.supportedViewType="3d";this.unsupportedErrorMessage="DirectLineMeasurement3DViewModel is only supported in 3D views.";this._userUnitOptions=this._userUnit=null}initialize(){this.addHandles(k.watch(()=>({analysis:this.analysis,unit:this.unit}),({analysis:a,unit:b})=>{null!=a&&(a.unit=b)},k.syncAndInitial))}get state(){return this.disabled||!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get measurement(){if(null==
this.tool)return null;const a={mode:"euclidean",directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:null,state:"unavailable"},verticalDistance:{text:null,state:"unavailable"}},{analysisViewData:b}=this.tool;if(null==b)return a;const f=null!=b.result?"available":"unavailable";switch(b.actualVisualizedMeasurement){case "euclidean":return{mode:"euclidean",directDistance:{text:b.directLabelText,state:f},horizontalDistance:{text:b.horizontalLabelText,state:f},verticalDistance:{text:b.verticalLabelText,
state:f}};case "geodesic":return{mode:"geodesic",directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:b.horizontalLabelText,state:f},verticalDistance:{text:b.verticalLabelText,state:f}};default:return a}}set unitOptions(a){this._userUnitOptions=a;this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(a){this._userUnit=a?this._findSelectableUnit(a,this._userUnit):null}get unit(){return this._userUnit?
this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new h}constructTool(){return new n({view:this.view,analysis:this.analysis,analysisViewData:this.analysisView,visible:this.visible})}_findSelectableUnit(a,b){const f=this.unitOptions;return f.includes(a)?a:b?this._findSelectableUnit(b):f[0]}_filteredOrAllUnits(a){if(!a)return g.measurementLengthUnits.slice();a=a.filter(b=>g.measurementLengthUnits.includes(b));
return 0===a.length?g.measurementLengthUnits.slice():a}};d.__decorate([e.property({type:h})],c.prototype,"analysis",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"measurement",null);d.__decorate([e.property()],c.prototype,"unitOptions",null);d.__decorate([e.property()],c.prototype,"unit",null);d.__decorate([e.property(m.defaultUnitPropertyMetadata)],c.prototype,"defaultUnit",void 0);d.__decorate([e.property()],c.prototype,
"_userUnit",void 0);d.__decorate([e.property()],c.prototype,"_userUnitOptions",void 0);return c=d.__decorate([l.subclass("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],c)});