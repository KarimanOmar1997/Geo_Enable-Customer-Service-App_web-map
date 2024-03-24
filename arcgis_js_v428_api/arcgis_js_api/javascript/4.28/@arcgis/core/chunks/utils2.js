/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{c as t,f as e,d as r,b as s,a as i}from"./date.js";import{isDateField as n,isDateOnlyField as a,isTimestampOffsetField as o}from"../layers/support/fieldUtils.js";import{l as c}from"./arcadeOnDemand.js";import{g as l}from"./basemapUtils.js";import{g,u as m}from"./timeZoneUtils.js";const d=",",u={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","arcgis-light-gray","arcgis-navigation","arcgis-streets","arcgis-streets-relief","arcgis-topographic","arcgis-oceans","osm-standard","osm-standard-relief","osm-streets","osm-streets-relief","osm-light-gray","arcgis-terrain","arcgis-charted-territory","arcgis-community","arcgis-colored-pencil","arcgis-modern-antique","arcgis-midcentury","arcgis-newspaper","arcgis-hillshade-light"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","arcgis-imagery","arcgis-imagery-standard","arcgis-dark-gray","arcgis-navigation-night","arcgis-streets-night","osm-dark-gray","arcgis-nova","arcgis-hillshade-dark"]},f={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},p=new Set(["integer","small-integer"]);let y=null;const h=["date","date-only","timestamp-offset"];function v(t){return n(t)||a(t)||o(t)}async function T(t){const{field:e,field2:r,field3:s,normalizationField:i,valueExpression:n}=t;let a=[];if(n){if(!y){const{arcadeUtils:t}=await c();y=t}a=y.extractFieldNames(n)}return e&&a.push(e),r&&a.push(r),s&&a.push(s),i&&a.push(i),a}function Z(t){let e=t.normalizationType;return e||(t.normalizationField?e="field":null!=t.normalizationTotal&&(e="percent-of-total")),e??void 0}function $(t){return String(t).padStart(2,"0")}function w(t,e,r){let s;return"date"===e||"number"===e?("number"===e&&(t=new Date(t)),s=`TIMESTAMP'${r?t.getFullYear():t.getUTCFullYear()}-${$((r?t.getMonth():t.getUTCMonth())+1)}-${$(r?t.getDate():t.getUTCDate())} ${$(r?t.getHours():t.getUTCHours())}:${$(r?t.getMinutes():t.getUTCMinutes())}:${$(r?t.getSeconds():t.getUTCSeconds())}'`):s=t,s}function U(t,e,r,s){const{hasQueryEngine:i}=t,n=`(${w(r,k(t,r),i)} - ${w(e,k(t,e),i)})`;let a=f[s],o="/";return a<1&&(a=1/a,o="*"),{sqlExpression:1===a?n:`(${n} ${o} ${a})`,sqlWhere:null}}function k(t,e){if(e instanceof Date)return"date";if("number"==typeof e)return"number";if("string"==typeof e){const r=t.getField(e);if("<now>"===e.toLowerCase())return;if(n(r))return"field"}}function b(t,e=u){for(const r in e)if(e[r].includes(t))return r}function D(t,e,r=!0){let s=null;return t&&("string"==typeof t?e.includes(t)&&(s=t):s=l(t)),r?s||"gray":s}function S(t,e){const r=e&&t.getField(e);return!!r&&p.has(r.type)}function C(t){return`cast(${t} as float)`}function F(n,a){const{format:o,timeZoneOptions:c,fieldType:l}=a??{};let d,u;if(c&&({timeZone:d,timeZoneName:u}=g(c.layerTimeZone,c.datesInUnknownTimezone,c.viewTimeZone,t(o||"short-date-short-time"),l)),"string"==typeof n&&isNaN(Date.parse("time-only"===l?`1970-01-01T${n}Z`:n)))return n;switch(l){case"date-only":{const r=t(o||"short-date");return"string"==typeof n?i(n,{...r}):e(n,{...r,timeZone:m})}case"time-only":{const r=t(o||"short-time");return"string"==typeof n?s(n,r):e(n,{...r,timeZone:m})}case"timestamp-offset":{if(!d&&"string"==typeof n&&new Date(n).toISOString()!==n)return n;const s=o||c?t(o||"short-date-short-time"):void 0,i=s?{...s,timeZone:d,timeZoneName:u}:void 0;return"string"==typeof n?r(n,i):e(n,i)}default:{const r=o||c?t(o||"short-date-short-time"):void 0;return e("string"==typeof n?new Date(n):n,r?{...r,timeZone:d,timeZoneName:u}:void 0)}}}export{d as a,S as b,C as c,U as d,Z as e,F as f,T as g,u as h,v as i,D as j,b as k,h as l,k as m,f as u};