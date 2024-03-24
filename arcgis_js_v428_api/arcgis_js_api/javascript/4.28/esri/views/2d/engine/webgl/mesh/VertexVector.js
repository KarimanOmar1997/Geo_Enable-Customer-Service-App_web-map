// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../Utils","./VertexBuffer","../util/Writer"],function(f,k,l,g){class h{get vertexCount(){const a=this.data.length/(this.stride/4);a!==(a|0)&&console.debug("Corrupted stride");return a}constructor(a,c){this.data=a;this.stride=c}transfer(a,c){const b=this.data.buffer();a.vertexCount=this.vertexCount;a.data=b;a.stride=this.stride;c.push(b)}}class m{constructor(a,c,b){this.geometryType=a;this.indexVector=new g(Uint32Array,6*c);this.namedVectors={};a=k.getStrides(a,b);for(const e in a){b=
a[e];let d;switch(b%4){case 0:case 2:d=new g(Uint32Array,b*c);break;case 1:case 3:d=new g(Uint8Array,b*c)}this.namedVectors[e]=new h(d,b)}}get(a){return this.namedVectors[a].data}getVector(a){return this.namedVectors[a]}transfer(a,c){const b=this.indexVector.buffer(),e={};c.push(b);let d;for(d in this.namedVectors){const n=this.namedVectors[d];e[d]={};n.transfer(e[d],c)}a.geometryType=this.geometryType;a.indexBuffer=b;a.namedBuffers=e;this.destroy()}intoBuffers(){const a=l.VertexBuffers.fromVertexVectors(this);
this.destroy();return a}destroy(){this.namedVectors=this.indexVector=null}}f.VertexVector=h;f.VertexVectors=m;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});