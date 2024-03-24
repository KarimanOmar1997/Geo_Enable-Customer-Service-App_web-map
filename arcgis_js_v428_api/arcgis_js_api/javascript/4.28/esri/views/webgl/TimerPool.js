// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./capabilities/DisjointTimerQuery"],function(d,e){class f{constructor(a,b){this._timer=a;this._queryPool=[];this._queryResults=new Map;this._currentQuery=null;b.forEach(c=>{const g=this._timer.createQuery(),h=this._timer.createQuery();this._queryPool.push(g,h);this._queryResults.set(c,null)})}start(){e.hasRunningElapsedTimer||(this._currentQuery=this._queryPool.pop(),null!=this._currentQuery&&(this._timer.disjoint(),this._timer.beginTimeElapsed(this._currentQuery)))}stop(a){if(this._timer.disjoint()||
null==this._currentQuery||!this._queryResults.has(a))return this.abort(),null;this._timer.endTimeElapsed();const b=this._queryResults.get(a);if(null==b)return this._queryResults.set(a,this._currentQuery),this._currentQuery=null;if(!this._timer.resultAvailable(b))return this._queryPool.unshift(this._currentQuery),this._currentQuery=null;const c=this._timer.getResult(b)/1E6;this._queryPool.unshift(b);this._queryResults.set(a,this._currentQuery);this._currentQuery=null;return c}abort(){null!=this._currentQuery&&
(this._timer.deleteQuery(this._currentQuery),this._queryPool.unshift(this._timer.createQuery()),this._currentQuery=null)}dispose(){null!=this._currentQuery&&this._timer.deleteQuery(this._currentQuery);this._queryPool.forEach(a=>{this._timer.deleteQuery(a)});this._queryResults.forEach(a=>{null!=a&&this._timer.deleteQuery(a)})}}d.createElapsedTimerPool=function(a,b){a=a.capabilities.disjointTimerQuery;return null==a?null:new f(a,b)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});