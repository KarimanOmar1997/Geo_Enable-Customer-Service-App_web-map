"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9651],{30439:(e,t,r)=>{r.d(t,{a:()=>c,b:()=>p,c:()=>a,d:()=>u}),r(48578);var n=r(5909),i=r(78548),s=r(60669),o=r(48208),l=r(6941);const a=s.Z.fromJSON(l.d),p=i.Z.fromJSON(l.a),c=n.Z.fromJSON(l.b),u=o.Z.fromJSON(l.c);s.Z.fromJSON(l.e),i.Z.fromJSON(l.f),n.Z.fromJSON(l.g)},50203:(e,t,r)=>{r.d(t,{a:()=>w,b:()=>h,c:()=>f,d:()=>m,g:()=>S,t:()=>d});var n=r(92143);const i="__begin__",s="__end__",o=new RegExp(i,"ig"),l=new RegExp(s,"ig"),a=new RegExp("^"+i,"i"),p=new RegExp(s+"$","i"),c='"',u=c+" + ",b=" + "+c;function d(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function w(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=e.labelExpression.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}"),t.type="conventional"),t}function h(e){const t=w(e);if(!t)return null;switch(t.type){case"conventional":return f(t.expression);case"arcade":return t.expression}return null}function m(e){const t=w(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e?.match(v);return t?.[1].trim()||null}(t.expression);case"arcade":return S(t.expression)}return null}function f(e){let t;return e?(t=(0,n.r)(e,(e=>i+'$feature["'+e+'"]'+s)),t=a.test(t)?t.replace(a,""):c+t,t=p.test(t)?t.replace(p,""):t+c,t=t.replaceAll(o,u).replaceAll(l,b)):t='""',t}const v=/^\s*\{([^}]+)\}\s*$/i,y=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,x=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,g=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function S(e){if(!e)return null;let t=y.exec(e)||x.exec(e);return t?t[1]||t[3]:(t=g.exec(e),t?t[2]:null)}},52991:(e,t,r)=>{async function n(e,t){const{WhereClause:n}=await Promise.all([r.e(2274),r.e(8675)]).then(r.bind(r,72274)).then((e=>e.W));return n.create(e,t)}function i(e,t){return null!=e?null!=t?`(${e}) AND (${t})`:e:t}r.d(t,{E:()=>n,_:()=>i})},77807:(e,t,r)=>{r.d(t,{Z:()=>P});var n,i=r(29768),s=r(96467),o=r(57251),l=r(12047),a=r(76506),p=r(99403),c=r(34250),u=(r(91306),r(97714)),b=r(17533),d=r(2906),w=(r(48578),r(50203)),h=r(39855),m=r(30439),f=r(16218);r(63571),r(92143),r(31450),r(59465),r(14249),r(60991),r(21972),r(86656),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(66284),r(8925),r(3482),r(76131),r(36097),r(87239),r(82058),r(88762),r(32101),r(73173),r(82426),r(72836),r(66106),r(29794),r(60217),r(74569),r(21801),r(73796),r(60947),r(53785),r(89623),r(91597),r(86787),r(35132),r(84069),r(44567),r(89034),r(98380),r(92482),r(92896),r(22781),r(32422),r(30776),r(48027),r(54174),r(63130),r(25696),r(94216),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(81731),r(9960),r(30823),r(53326),r(5853),r(39141),r(38742),r(52461),r(48243),r(15324),r(75067),r(89914),r(34635),r(10401),r(49900),r(81184),r(33101),r(58943),r(67477),r(78533),r(74653),r(91091),r(70737),r(36834),r(66122),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(58085),r(41864),r(5909),r(60669),r(48208),r(51589),r(6941);let v=n=class extends l.wq{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?(0,w.c)(t.value):e}writeExpression(e,t,r){null!=this.value&&(e=(0,w.c)(this.value)),null!=e&&(t[r]=e)}clone(){return new n({expression:this.expression,title:this.title,value:this.value})}};(0,i._)([(0,c.Cb)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],v.prototype,"expression",void 0),(0,i._)([(0,u.r)("expression",["expression","value"])],v.prototype,"readExpression",null),(0,i._)([(0,d.w)("expression")],v.prototype,"writeExpression",null),(0,i._)([(0,c.Cb)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],v.prototype,"title",void 0),(0,i._)([(0,c.Cb)({json:{read:!1,write:!1}})],v.prototype,"value",void 0),v=n=(0,i._)([(0,b.j)("esri.layers.support.LabelExpressionInfo")],v);const y=v;var x;const g=new o.J({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function S(e,t,r){return{enabled:!(0,h.h)(r?.layer)}}function E(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function C(e){return!!function(e){return"map-image"===e?.type}(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}let L=x=class extends l.wq{static evaluateWhere(e,t){const r=(e,t,r)=>{switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;const n=e.split(" ");if(3===n.length)return r(t[n[0]],n[1],n[2]);if(7===n.length){const e=r(t[n[0]],n[1],n[2]),i=n[3],s=r(t[n[4]],n[5],n[6]);switch(i){case"AND":return e&&s;case"OR":return e||s}}return!1}catch(t){console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=m.d,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,t){const r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e}writeLabelExpression(e,t,r){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,w.t)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const t=(0,w.g)(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}null!=e&&(t[r]=e)}writeLabelExpressionInfo(e,t,r,n){if(null==e&&null!=this.labelExpression&&E(n))e=new y({expression:this.getLabelExpressionArcade()});else if(!e)return;const i=e.toJSON(n);i.expression&&(t[r]=i)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return(0,w.a)(this)}getLabelExpressionArcade(){return(0,w.b)(this)}getLabelExpressionSingleField(){return(0,w.d)(this)}hash(){return JSON.stringify(this)}clone(){return new x({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,a.d9)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,a.d9)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],L.prototype,"name",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:S}}}}})],L.prototype,"allowOverrun",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:S}}}}})],L.prototype,"deconflictionStrategy",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:{overridePolicy(e,t,r){return this.labelExpressionInfo&&"service"===r?.origin&&C(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],L.prototype,"labelExpression",void 0),(0,i._)([(0,u.r)("labelExpression")],L.prototype,"readLabelExpression",null),(0,i._)([(0,d.w)("labelExpression")],L.prototype,"writeLabelExpression",null),(0,i._)([(0,c.Cb)({type:y,json:{write:{overridePolicy:(e,t,r)=>function(e){return E(e)||C(e?.layer)}(r)?{allowNull:!0}:{enabled:!1}}}})],L.prototype,"labelExpressionInfo",void 0),(0,i._)([(0,d.w)("labelExpressionInfo")],L.prototype,"writeLabelExpressionInfo",null),(0,i._)([(0,c.Cb)({type:g.apiValues,json:{type:g.jsonValues,read:g.read,write:g.write}})],L.prototype,"labelPlacement",void 0),(0,i._)([(0,c.Cb)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],L.prototype,"labelPosition",void 0),(0,i._)([(0,c.Cb)({type:Number})],L.prototype,"maxScale",void 0),(0,i._)([(0,d.w)("maxScale")],L.prototype,"writeMaxScale",null),(0,i._)([(0,c.Cb)({type:Number})],L.prototype,"minScale",void 0),(0,i._)([(0,d.w)("minScale")],L.prototype,"writeMinScale",null),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:S}}}}})],L.prototype,"repeatLabel",void 0),(0,i._)([(0,c.Cb)({type:Number,cast:p.t,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:S}}}}})],L.prototype,"repeatLabelDistance",void 0),(0,i._)([(0,c.Cb)({types:s.yK,json:{origins:{"web-scene":{types:s.S6,write:f.vX,default:null}},write:f.vX,default:null}})],L.prototype,"symbol",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"useCodedValues",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],L.prototype,"where",void 0),L=x=(0,i._)([(0,b.j)("esri.layers.support.LabelClass")],L);const P=L},34446:(e,t,r)=>{r.d(t,{Z:()=>b});var n,i=r(29768),s=r(12047),o=r(76506),l=r(34250),a=r(91306),p=r(17533),c=r(2906);r(21972),r(48578),r(92143),r(31450),r(86656),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(60991);let u=n=class extends s.wq{constructor(e){super(e),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new n((0,o.d9)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,i._)([(0,l.Cb)({type:[String],json:{write:!0}})],u.prototype,"attachmentTypes",void 0),(0,i._)([(0,l.Cb)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],u.prototype,"attachmentsWhere",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],u.prototype,"cacheHint",void 0),(0,i._)([(0,l.Cb)({type:[String],json:{write:!0}})],u.prototype,"keywords",void 0),(0,i._)([(0,l.Cb)({type:[Number],json:{write:!0}})],u.prototype,"globalIds",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,i._)([(0,l.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],u.prototype,"num",void 0),(0,i._)([(0,l.Cb)({type:[Number],json:{write:!0}})],u.prototype,"objectIds",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{default:!1,write:!0}})],u.prototype,"returnMetadata",void 0),(0,i._)([(0,l.Cb)({type:[Number],json:{write:!0}})],u.prototype,"size",void 0),(0,i._)([(0,l.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],u.prototype,"start",void 0),(0,i._)([(0,c.w)("start"),(0,c.w)("num")],u.prototype,"writeStart",null),(0,i._)([(0,l.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],u.prototype,"where",void 0),u=n=(0,i._)([(0,p.j)("esri.rest.support.AttachmentQuery")],u),u.from=(0,a.j)(u);const b=u},78893:(e,t,r)=>{r.d(t,{eZ:()=>p});var n=r(86748),i=r(14249),s=r(30574),o=(r(2157),r(25977),r(58076),r(7471)),l=(r(45154),r(56890),r(4292),r(54414)),a=r(1648);function p({displayField:e,editFieldsInfo:t,fields:r,objectIdField:l,title:a},p){if(!r)return null;const c=b({editFieldsInfo:t,fields:r,objectIdField:l},p);if(!c.length)return null;const u=function(e){const t=(0,i.O5)(e),{titleBase:r}=e;return t?`${r}: {${t.trim()}}`:r??""}({titleBase:a,fields:r,displayField:e}),d=[new o.Z,new s.Z];return new n.Z({title:u,content:d,fieldInfos:c})}r(29768),r(66122),r(21972),r(48578),r(92143),r(31450),r(76506),r(17533),r(86656),r(66396),r(22723),r(6540),r(91306),r(60991),r(34250),r(379),r(62062),r(6906),r(79456),r(50406),r(15324),r(75067),r(89914),r(12047),r(86787),r(97714),r(2906),r(29107),r(98242),r(57251),r(59465),r(8925),r(3482),r(76131),r(36097),r(16769),r(93603),r(15438),r(593),r(48027),r(54174),r(82426),r(72836),r(66106),r(29794),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(30493),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(66284),r(87239),r(82058),r(88762),r(32101),r(73173),r(60217),r(74569),r(21801),r(73796),r(60947),r(53785),r(89623),r(91597),r(35132),r(84069),r(44567),r(89034),r(98380),r(92482),r(92896),r(22781),r(32422);const c=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):(0,i.Fv)(e,t);function u(e,t){return"oid"===e.type?-1:"oid"===t.type?1:w(e)?-1:w(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function b(e,t){const r=t?.visibleFieldNames;return function(e,t){const r=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===r&&(e=e.slice()),e.sort(u),e}(e.fields??[],t?.ignoreFieldTypes||h).map((t=>new l.Z({fieldName:t.name,isEditable:(0,i.Hp)(t,e),label:t.alias,format:d(t),visible:c(t,{...e,visibleFieldNames:r})})))}function d(e){switch(e.type){case"small-integer":case"integer":case"single":return new a.Z({digitSeparator:!0,places:0});case"double":return new a.Z({digitSeparator:!0,places:2});case"string":return(0,i.Ec)(e.name)?new a.Z({digitSeparator:!0,places:0}):null;default:return null}}function w(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())}const h=["geometry","blob","raster","guid","xml"]}}]);