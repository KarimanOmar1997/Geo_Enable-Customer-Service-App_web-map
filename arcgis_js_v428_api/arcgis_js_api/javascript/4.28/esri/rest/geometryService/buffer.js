// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry","../../request","../utils","../../geometry/Polygon"],function(c,n,e,d,f){c.buffer=async function(b,a,g){b=d.parseUrl(b);const h={...b.query,f:"json",...a.toJSON()},k=a.outSpatialReference||a.geometries[0].spatialReference;a=d.asValidOptions(h,g);return e(b.path+"/buffer",a).then(l=>(l.data.geometries||[]).map(({rings:m})=>new f({spatialReference:k,rings:m})))};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});