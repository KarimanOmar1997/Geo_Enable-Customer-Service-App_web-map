// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../intl ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./Histogram/HistogramViewModel ./support/globalCss ./support/legacyIcon ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ../intl/substitute".split(" "),function(h,f,l,G,H,I,w,x,y,u,J,z,A,k,B){var t;f=t=class extends x{constructor(a,b){super(a,b);this._bgFillId=`${this.id}-bg-fill`;
this._containerNode=null;this._containerDimensions={width:0,height:0};this._defaultBarColor="#d8d8d8";this.messages=this.dataLineUpdatedFunction=this.dataLineCreatedFunction=this.dataLines=this.barCreatedFunction=null;this.viewModel=new y}get average(){return this.viewModel.average}set average(a){this.viewModel.average=a}get bins(){return this.viewModel.bins}set bins(a){this.viewModel.bins=a}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get labelFormatFunction(){return this.viewModel.labelFormatFunction}set labelFormatFunction(a){this.viewModel.labelFormatFunction=
a}set layout(a){"vertical"!==a&&(a="horizontal");this._set("layout",a)}get max(){return this.viewModel.max}set max(a){this.viewModel.max=a}get min(){return this.viewModel.min}set min(a){this.viewModel.min=a}get state(){return this.viewModel.state}static fromHistogramResult(a){const {bins:b,maxValue:c,minValue:e}=a;return new t({bins:b,max:c,min:e})}render(){const {label:a,layout:b,state:c}=this,e=this.classes("esri-histogram",u.globalCss.widget,"horizontal"===b?"esri-histogram--horizontal":"esri-histogram--vertical",
"disabled"===c?u.globalCss.disabled:null);return k.tsx("div",{afterCreate:this._afterContainerNodeCreate,"aria-label":a,bind:this,class:e},"ready"===c?this._renderContent():null)}_renderContent(){if(this._containerNode){var a=this._bgFillId,b=`clip-path: url(#${a})`;return k.tsx("div",{class:"esri-histogram__content"},k.tsx("svg",{class:"esri-histogram__svg",xmlns:"http://www.w3.org/2000/svg"},k.tsx("defs",null,this._renderFillDefinition(a)),k.tsx("g",{style:b},this._renderBarsGroup()),this._renderLinesGroup()))}}_renderBarsGroup(){return k.tsx("g",
{class:this.classes("esri-histogram__bars")},this._renderBars())}_renderBars(){const {layout:a,viewModel:{binRange:b,range:c}}=this;if(b&&c){var e=b/c,{width:g,height:d}=this._containerDimensions;if(0!==d||0!==g)if(0===d&&0!==g)this.scheduleRender();else{var [m,p]="vertical"===a?[d*e,g]:[d,g*e];return this._getBarDimensions(m,p).map(([q,r],n)=>this._renderBar(n,q,r))}}}_renderBar(a,b,c){const {bins:e,layout:g,max:d,messages:m,viewModel:{range:p}}=this;if(e&&null!=d){var {width:q,height:r}=this._containerDimensions,
n=e.slice()[a],{count:C,maxValue:v,minValue:D}=n;n=d-v;var [E,F]="vertical"===g?[0,r/p*n]:[q-c-q/p*n,r-b];n=B.substitute(m.barLabel,{count:C,maxValue:v,minValue:D});return k.tsx("rect",{afterCreate:this._afterBarCreate,"aria-label":n,bind:this,class:"esri-histogram__bar","data-index":a,fill:this._defaultBarColor,height:b,role:"img","shape-rendering":"crispEdges","stroke-width":"0",width:c,x:E,y:F})}}_renderLinesGroup(){return k.tsx("g",{class:this.classes("esri-histogram__data-lines")},this._renderAverageLine(),
this._renderCustomLines())}_renderAverageLine(){const {average:a}=this;if(null!=a){var b=[k.tsx("tspan",{class:this.classes("esri-histogram__average-symbol")},"x\u0304 "),k.tsx("tspan",{class:this.classes("esri-histogram__average-label")},this.labelFormatFunction?this.labelFormatFunction(a,"average"):a)];return k.tsx("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes("esri-histogram__data-lines-subgroup")},k.tsx("title",{key:"title"},
a),this._renderLine(a,this.classes("esri-histogram__average-data-line")),this._renderLabel({label:b,value:a}))}}_renderCustomLines(){if(this.dataLines?.length)return this.dataLines.map((a,b)=>this._renderLineSubgroup(a,b))}_renderLineSubgroup(a,b){const {value:c}=a;return k.tsx("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes("esri-histogram__data-lines-subgroup"),"data-index":b},k.tsx("title",{key:"title"},c),this._renderLine(c),
this._renderLabel(a))}_renderLine(a,b){const [c,e,g,d]=this._getLinePosition(a);return k.tsx("line",{class:this.classes("esri-histogram__data-line",b),"shape-rendering":"crispEdges",x1:c,x2:e,y1:g,y2:d})}_renderLabel(a,b){const {label:c,value:e}=a,[g,d]=this._getLabelPosition(e);return k.tsx("text",{class:this.classes("esri-histogram__label",b),"text-anchor":"end",transform:"horizontal"===this.layout?"rotate(270)":null,x:g,y:d-2},c??"")}_renderFillDefinition(a){const {width:b,height:c}=this._containerDimensions;
return k.tsx("clipPath",{id:a},k.tsx("rect",{height:c,width:b,x:"0",y:"0"}))}_afterContainerNodeCreate(a){this._containerNode=a;this.addHandles(z.onResize(a,b=>{const {width:c,height:e}=b.contentRect;this._containerDimensions={width:c,height:e}}))}_getIndexFromElement(a){const b=a.dataset?.index;a=a.getAttribute("data-index");return null!=b?parseInt(b,10):null!=a?parseInt(a,10):null}_afterBarCreate(a){if(this.barCreatedFunction){const b=this._getIndexFromElement(a)??-1;this.barCreatedFunction(b,a)}}_afterLinesSubgroupCreate(a){if(this.dataLineCreatedFunction){const b=
this._getIndexFromElement(a);this.dataLineCreatedFunction(a.childNodes[1],a.childNodes[2]?a.childNodes[2]:null,b)}}_afterLinesSubgroupUpdate(a){if(this.dataLineUpdatedFunction){const b=this._getIndexFromElement(a);this.dataLineUpdatedFunction(a.childNodes[1],a.childNodes[2]?a.childNodes[2]:null,b)}}_getBarDimensions(a,b){const {bins:c,layout:e}=this,g=c?c.map(m=>m.count):[],d=Math.max.apply(Math,g);return g.map(m=>"vertical"===e?[a/g.length,0!==d?m/d*b:0]:[0!==d?m/d*a:0,b/g.length])}_getLinePosition(a){const {layout:b,
min:c,viewModel:{range:e}}=this;if(null==c)return[0,0,0,0];a=Math.round((a-c)/e*100)/100;const {width:g,height:d}=this._containerDimensions,[m,p]=[a*g||1,d-a*d||1];return"vertical"===b?[0,"100%",p,p]:[m,m,"100%",0]}_getLabelPosition(a){const {layout:b,min:c,viewModel:{range:e}}=this;if(null==c)return[0,0];a=Math.round((a-c)/e*100)/100;const {width:g,height:d}=this._containerDimensions;return"vertical"===b?[g,d-a*d]:[0,a*g]}};h.__decorate([l.property()],f.prototype,"_bgFillId",void 0);h.__decorate([l.property()],
f.prototype,"_containerNode",void 0);h.__decorate([l.property()],f.prototype,"_containerDimensions",void 0);h.__decorate([l.property()],f.prototype,"_defaultBarColor",void 0);h.__decorate([l.property()],f.prototype,"average",null);h.__decorate([l.property()],f.prototype,"barCreatedFunction",void 0);h.__decorate([l.property()],f.prototype,"dataLines",void 0);h.__decorate([l.property()],f.prototype,"dataLineCreatedFunction",void 0);h.__decorate([l.property()],f.prototype,"dataLineUpdatedFunction",void 0);
h.__decorate([l.property()],f.prototype,"label",null);h.__decorate([l.property()],f.prototype,"labelFormatFunction",null);h.__decorate([l.property({value:"horizontal"})],f.prototype,"layout",null);h.__decorate([l.property()],f.prototype,"max",null);h.__decorate([l.property(),A.messageBundle("esri/widgets/Histogram/t9n/Histogram")],f.prototype,"messages",void 0);h.__decorate([l.property()],f.prototype,"min",null);h.__decorate([l.property({readOnly:!0})],f.prototype,"state",null);h.__decorate([l.property()],
f.prototype,"viewModel",void 0);return f=t=h.__decorate([w.subclass("esri.widgets.Histogram")],f)});