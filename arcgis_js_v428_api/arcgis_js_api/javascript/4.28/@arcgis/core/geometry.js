/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{a as s}from"./chunks/ensureType.js";import o from"./geometry/Extent.js";import r from"./geometry/Geometry.js";import e from"./geometry/Multipoint.js";import i from"./geometry/Point.js";import p from"./geometry/Polygon.js";import m from"./geometry/Polyline.js";export{default as SpatialReference}from"./geometry/SpatialReference.js";export{f as featureGeometryTypeKebabDictionary,t as typeKebabDictionary}from"./chunks/typeUtils.js";export{fromJSON}from"./geometry/support/jsonUtils.js";import"./chunks/typedArrayUtil.js";import"./chunks/Logger.js";import"./config.js";import"./core/lang.js";import"./chunks/tslib.es6.js";import"./core/accessorSupport/decorators/property.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./chunks/metadata.js";import"./core/Error.js";import"./core/accessorSupport/decorators/subclass.js";import"./chunks/tracking.js";import"./chunks/unitUtils.js";import"./chunks/jsonMap.js";import"./chunks/Ellipsoid.js";import"./chunks/assets.js";import"./request.js";import"./kernel.js";import"./core/urlUtils.js";import"./core/JSONSupport.js";import"./core/Accessor.js";import"./core/Handles.js";import"./chunks/maybe.js";import"./chunks/ObjectPool.js";import"./chunks/ObservableBase.js";import"./core/scheduling.js";import"./chunks/nextTick.js";import"./chunks/PooledArray.js";import"./core/promiseUtils.js";import"./chunks/time.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/reader.js";import"./chunks/writer.js";import"./chunks/zmUtils.js";import"./core/accessorSupport/decorators/cast.js";import"./chunks/Axis.js";import"./chunks/extentUtils.js";import"./chunks/aaBoundingRect.js";import"./chunks/mathUtils.js";import"./chunks/vec3.js";import"./chunks/vec3f64.js";import"./chunks/common.js";function c(s){return s instanceof r}const n={base:r,key:"type",typeMap:{extent:o,multipoint:e,point:i,polyline:m,polygon:p}},j=s(n);export{r as BaseGeometry,o as Extent,e as Multipoint,i as Point,p as Polygon,m as Polyline,j as ensureType,n as geometryTypes,c as isGeometry};