// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/geometryEngine ../../../../geometry/Polygon ../../../../geometry/SpatialReference ../../../../geometry/projection/projectPointToVector ../../../../geometry/projection/projectPointToWGS84ComparableLonLat ../../../../geometry/projection/projectVectorToWGS84ComparableLonLat ../../../../geometry/support/geodesicUtils ../../support/mathUtils".split(" "),function(h,e,m,y,z,A,v,w,r,n,B){const k=m.create(),l=m.create(),
t=m.create(),p=new z({rings:[[k,l,t]],spatialReference:A.WGS84}),f=m.create();h.bestFitPlane=function(a,b){if(3>a.length)throw Error("need at least 3 points to fit a plane");B.planeFromPoints(a[0],a[1],a[2],b)};h.boundingSphere=function(a,b){const c=b.center;e.set(c,0,0,0);for(var d=0;d<a.length;++d)e.add(c,c,a[d]);e.scale(c,c,1/a.length);d=0;for(let g=0;g<a.length;++g)d=Math.max(d,e.squaredDistance(c,a[g]));b.radius=Math.sqrt(d)};h.fitHemisphere=function(a,b=null,c=!0){const d=(x,q)=>{if(0===q[0]&&
0===q[1]&&0===q[2])return!1;for(let u=0;u<x.length;++u)if(-1E-6>e.dot(q,x[u]))return!1;return!0};if(0===a.length)return!1;if(1===a.length)return b&&e.copy(b,a[0]),!0;e.set(f,0,0,0);for(var g=0;g<a.length;++g)e.add(f,f,a[g]);e.normalize(f,f);if(d(a,f))return b&&e.copy(b,f),!0;if(!c)return!1;for(c=0;c<a.length;++c)for(g=0;g<a.length;++g)if(c!==g&&(e.cross(f,a[c],a[g]),e.normalize(f,f),d(a,f)))return b&&e.copy(b,f),!0;return!1};h.isPrimaryPointerAction=function(a){return"mouse"!==a.pointerType||0===
a.button};h.planePointDistance=function(a,b){return e.dot(a,b)+a[3]};h.segmentLengthEuclidean=function(a,b,c){return v.projectPointToVector(a,k,c)&&v.projectPointToVector(b,l,c)?e.distance(k,l):0};h.segmentLengthGeodesic=function(a,b){if(!w.projectPointToWGS84ComparableLonLat(a,k)||!w.projectPointToWGS84ComparableLonLat(b,l))return 0;a=new n.InverseGeodeticSolverResult;n.inverseGeodeticSolver(a,[k[0],k[1]],[l[0],l[1]]);return a.distance};h.segmentLengthGeodesicVector=function(a,b,c){const d=new n.InverseGeodeticSolverResult;
n.inverseGeodeticSolver(d,[a[0],a[1]],[b[0],b[1]],c);return d.distance};h.triangleAreaGeodesic=function(a,b,c,d){if(!r.projectVectorToWGS84ComparableLonLat(a,d,k)||!r.projectVectorToWGS84ComparableLonLat(b,d,l)||!r.projectVectorToWGS84ComparableLonLat(c,d,t))return 0;p.setPoint(0,0,k);p.setPoint(0,1,l);p.setPoint(0,2,t);return Math.abs(y.geodesicArea(p,"square-meters"))};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});