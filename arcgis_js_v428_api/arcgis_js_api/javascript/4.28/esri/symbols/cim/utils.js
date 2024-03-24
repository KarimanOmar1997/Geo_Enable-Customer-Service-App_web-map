// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(L,d){function A(a){return"function"===typeof a}function B(a){let b=a.length;for(;b--;)if(!" /-,\n".includes(a.charAt(b)))return!1;return!0}function C(a,b){const f=[];var c=0;let e=-1;do e=a.indexOf("[",c),e>=c&&(e>c&&(c=a.substr(c,e-c),f.push([c,null,B(c)])),c=e+1,e=a.indexOf("]",c),e>=c&&(e>c&&(c=a.substr(c,e-c),(c=b[c])&&f.push([null,c,!1])),c=e+1));while(-1!==e);c<a.length-1&&(a=a.substr(c),f.push([a,null,B(a)]));return f}function D(a,b,f){let c="",e=null;
for(const n of b){const [p,l,v]=n;if(p)v?e=p:(e&&(c+=e,e=null),c+=p);else if(b=a.attributes[l])e&&(c+=e,e=null),c+=b}return E(c,f)}function E(a,b){"string"!==typeof a&&(a=String(a));switch(b){case "LowerCase":return a.toLowerCase();case "Allcaps":return a.toUpperCase();default:return a}}function F(a){return a?{r:a[0],g:a[1],b:a[2],a:a[3]/255}:{r:0,g:0,b:0,a:0}}function w(a){if(!a)return null;switch(a.type){case "CIMPolygonSymbol":if(a.symbolLayers)for(const b of a.symbolLayers)if(a=w(b),null!=a)return a;
break;case "CIMTextSymbol":return w(a.symbol);case "CIMSolidFill":return a.color}}function x(a){if(a)switch(a.type){case "CIMPolygonSymbol":case "CIMLineSymbol":if(a=a.symbolLayers)for(const b of a)if(a=x(b),null!=a)return a;break;case "CIMTextSymbol":return x(a.symbol);case "CIMSolidStroke":return a.color}}function y(a){if(a)switch(a.type){case "CIMPolygonSymbol":case "CIMLineSymbol":if(a.symbolLayers)for(const b of a.symbolLayers)if(a=y(b),void 0!==a)return a;break;case "CIMTextSymbol":return y(a.symbol);
case "CIMSolidStroke":case "CIMGradientStroke":case "CIMPictureStroke":return a.width}}d.adjustTextCase=E;d.analyzeTextParts=C;d.assignTextValuesFromFeature=D;d.attributesToFields=function(a){return(a?Object.keys(a):[]).map(b=>({name:b,alias:b,type:"string"===typeof a[b]?"esriFieldTypeString":"esriFieldTypeDouble"}))};d.colorToArray=function(a){return[a.r,a.g,a.b,a.a]};d.createLabelOverrideFunction=function(a,b,f){const c=C(b,a);return e=>D(e,c,f)};d.evaluateValueOrFunction=function(a,b,f,c){return A(a)?
a(b,f,c):a};d.fromCIMColor=F;d.fromCIMFontDecoration=function(a){return a.underline?"underline":a.strikethrough?"line-through":"none"};d.fromCIMFontStyle=function(a){let b="normal",f="normal";a&&(a=a.toLowerCase(),a.includes("italic")?b="italic":a.includes("oblique")&&(b="oblique"),a.includes("bold")?f="bold":a.includes("light")&&(f="lighter"));return{style:b,weight:f}};d.fromCIMHorizontalAlignment=function(a){switch(a){default:return"left";case "Right":return"right";case "Center":return"center";
case "Justify":return"center"}};d.fromCIMVerticalAlignment=function(a){switch(a){default:return"top";case "Center":return"middle";case "Baseline":return"baseline";case "Bottom":return"bottom"}};d.getFillColor=w;d.getFontStyle=function(a){if(!a)return"normal";switch(a.toLowerCase()){case "italic":return"italic";case "oblique":return"oblique";default:return"normal"}};d.getFontWeight=function(a){if(!a)return"normal";switch(a.toLowerCase()){case "bold":return"bold";case "bolder":return"bolder";case "lighter":return"lighter";
default:return"normal"}};d.getStrokeColor=x;d.getStrokeWidth=y;d.getTintColor=a=>a.tintColor?F(a.tintColor):{r:255,g:255,b:255,a:1};d.getValue=(a,b=0)=>null==a||isNaN(a)?b:a;d.importGeometryEngine=function(){return new Promise((a,b)=>L(["../../geometry/geometryEngineJSON"],a,b))};d.isCIMFill=function(a){return null!=a&&("CIMGradientFill"===a.type||"CIMHatchFill"===a.type||"CIMPictureFill"===a.type||"CIMSolidFill"===a.type||"CIMWaterFill"===a.type)};d.isCIMMarker=function(a){return"CIMVectorMarker"===
a.type||"CIMPictureMarker"===a.type||"CIMBarChartMarker"===a.type||"CIMCharacterMarker"===a.type||"CIMPieChartMarker"===a.type||"CIMStackedBarChartMarker"===a.type};d.isCIMMarkerStrokePlacement=function(a){return null!=a&&("CIMMarkerPlacementAlongLineRandomSize"===a.type||"CIMMarkerPlacementAlongLineSameSize"===a.type||"CIMMarkerPlacementAlongLineVariableSize"===a.type||"CIMMarkerPlacementAtExtremities"===a.type||"CIMMarkerPlacementAtMeasuredUnits"===a.type||"CIMMarkerPlacementAtRatioPositions"===
a.type||"CIMMarkerPlacementOnLine"===a.type||"CIMMarkerPlacementOnVertices"===a.type)};d.isCIMStroke=function(a){return"CIMGradientStroke"===a.type||"CIMPictureStroke"===a.type||"CIMSolidStroke"===a.type};d.isFeatureValueFn=A;d.isGeometryEngineRequired=a=>{if(!a)return!1;for(const b of a)switch(b.type){case "CIMGeometricEffectBuffer":case "CIMGeometricEffectOffset":case "CIMGeometricEffectDonut":return!0}return!1};d.isSVGImage=a=>a.includes("data:image/svg+xml");d.mapCIMSymbolToGeometryType=function(a){if(!a)return null;
switch(a.type){case "CIMPointSymbol":case "CIMTextSymbol":return"esriGeometryPoint";case "CIMLineSymbol":return"esriGeometryPolyline";case "CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}};d.resampleHermite=function(a,b,f,c,e,n,p=!0){const l=b/e;f/=n;const v=Math.ceil(l/2),M=Math.ceil(f/2);for(let k=0;k<n;k++)for(let m=0;m<e;m++){const q=4*(m+(p?n-k-1:k)*e);var g=0;let r=0,G=0,H=0,I=0,J=0,K=0;const N=(k+.5)*f;for(let t=Math.floor(k*f);t<(k+1)*f;t++){var z=Math.abs(N-(t+.5))/M;const O=
(m+.5)*l;z*=z;for(let u=Math.floor(m*l);u<(m+1)*l;u++){let h=Math.abs(O-(u+.5))/v;g=Math.sqrt(z+h*h);-1<=g&&1>=g&&(g=2*g*g*g-3*g*g+1,0<g&&(h=4*(u+t*b),K+=g*a[h+3],G+=g,255>a[h+3]&&(g=g*a[h+3]/250),H+=g*a[h],I+=g*a[h+1],J+=g*a[h+2],r+=g))}}c[q]=H/r;c[q+1]=I/r;c[q+2]=J/r;c[q+3]=K/G}};d.toCIMSymbolJSON=function(a){return a.data?.symbol??null};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});