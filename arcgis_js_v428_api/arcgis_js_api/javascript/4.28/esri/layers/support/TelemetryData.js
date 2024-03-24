// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline".split(" "),function(b,a,f,g,c,m,n,p,h,d,k,e){a=class extends f.ClonableMixin(g.JSONSupport){constructor(l){super(l);this.sensorTrail=this.sensorLocation=this.lineOfSight=this.frameOutline=
this.frameCenter=null}};b.__decorate([c.property({type:d})],a.prototype,"frameCenter",void 0);b.__decorate([c.property({type:k})],a.prototype,"frameOutline",void 0);b.__decorate([c.property({type:e})],a.prototype,"lineOfSight",void 0);b.__decorate([c.property({type:d})],a.prototype,"sensorLocation",void 0);b.__decorate([c.property({type:e})],a.prototype,"sensorTrail",void 0);return a=b.__decorate([h.subclass("esri.layers.support.TelemetryData")],a)});