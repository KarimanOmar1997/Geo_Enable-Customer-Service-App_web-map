// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Error ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./Edits ./workflowUtils".split(" "),function(c,b,k,d,u,v,w,l,m,n){var f;b=f=class extends b{constructor(a){super(a);this.viewModel=this.parent=this.formTemplate=this.edits=this.editableItem=this.attachmentsCapabilities=null}static async create(a){a=f._makeConstructorProps(a);
return new f(a)}static _makeConstructorProps(a){const {feature:g,parent:p,viewModel:h}=a;a=h.editableItems.find(q=>q.layer===g.layer);if(!a)throw new k("no-editableItem-found","The EditorViewModel provided did not have an EditableItem associated with the specified Graphic's layer");const r=n.findLayerInfo(h.layerInfos,g.sourceLayer);var e=a.supports;const t=e.includes("create");e=e.includes("update");return{attachmentsCapabilities:{editing:!0,operations:{add:t||e,update:e,delete:e}},editableItem:a,
edits:new m.Edits({feature:g}),formTemplate:r?.formTemplate,parent:p,viewModel:h}}};c.__decorate([d.property()],b.prototype,"attachmentsCapabilities",void 0);c.__decorate([d.property()],b.prototype,"editableItem",void 0);c.__decorate([d.property()],b.prototype,"edits",void 0);c.__decorate([d.property()],b.prototype,"formTemplate",void 0);c.__decorate([d.property()],b.prototype,"parent",void 0);c.__decorate([d.property()],b.prototype,"viewModel",void 0);return b=f=c.__decorate([l.subclass("esri.widgets.Editor.UpdateRecordWorkflowData")],
b)});