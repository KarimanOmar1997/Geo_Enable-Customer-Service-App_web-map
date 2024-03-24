// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Error ../../core/handleUtils ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../layers/support/layerUtils ../../support/featureFlags ../../views/draw/support/HighlightHelper ./UpdateRecordWorkflowData ./Workflow ./workflowUtils".split(" "),function(f,g,r,m,t,u,k,A,B,C,v,p,q,w,x,
y,z){var n;const l={exit:Symbol()};f.UpdateRecordWorkflow=n=class extends y{constructor(a){super(a);this.fullFeature=this._highlightHelper=null;this.type="update-table-record"}initialize(){const {data:a}=this;var {edits:b}=a;const {view:c}=a.viewModel;b=b.feature;const e=new AbortController;this.addHandles(m.abortHandle(e));this._updatingHandles.addPromise(z.fetchFullFeature(b,a.viewModel.view.spatialReference,e.signal).then(d=>{t.isAborted(e)||this._onFullFeatureLoaded(d)},d=>this.cancel({force:!0,
error:new r("editor:failed-to-fetch-full-feature","Failed to retrieve all information for this feature. The update cannot proceed.",{detail:{error:d}})})));c&&(this._highlightHelper=new w({view:c}),this.addHandles(m.makeHandle(()=>this._highlightHelper?.removeAll())))}get editableItem(){return this.data.editableItem}get hasPendingEdits(){return this.data.edits.modified}get parent(){return this.data.parent}get shouldShowAttachments(){return this.editableItem.attachmentsOnUpdateEnabled}get shouldAllowAttachmentEditing(){return this.editableItem.supports.includes("update")}get reliesOnOwnerAdminPrivileges(){const {layer:a}=
this.editableItem,b=a.capabilities?.operations.supportsUpdate,c=p.getEffectiveLayerCapabilities(a)?.operations.supportsUpdate;return p.getEffectiveEditingEnabled(a)&&!a.editingEnabled||!!c&&!b}async deleteAndCommit(){this.data.edits.stageDelete();return this.commit()}async enter(){this._configureAttachmentsViewModel();this._configureFeatureFormViewModel()}exit(a){this.removeHandles(l.exit)}async start(){await super.start();return null}_configureAttachmentsViewModel(){const {data:a,fullFeature:b}=
this,{attachmentsCapabilities:c,viewModel:e}=a,{attachmentsViewModel:d}=e;d.set({capabilities:c,graphic:b,filesEnabled:!1,mode:"view"});this.addHandles([m.makeHandle(()=>d.fileInfos.removeAll()),u.watch(()=>d.mode,h=>{switch(h){case "add":this.go("adding-attachment");break;case "edit":this.go("editing-attachment")}})],l.exit)}_configureFeatureFormViewModel(){const {edits:a,formTemplate:b,viewModel:{featureFormViewModel:c,view:e}}=this.data;c.set({arcadeEditType:"UPDATE",feature:this.fullFeature,formTemplate:b,
highlightHelper:this._highlightHelper,map:e?.map,spatialReference:e.spatialReference});const {initialFeature:d}=a;d&&c.overrideInitialFeature(d);this.addHandles(c.on("value-change",()=>{a.updateAttributes(c.getValues());this.fullFeature.attributes=a.feature.attributes}),l.exit)}_onFullFeatureLoaded(a){this.fullFeature=a;const {edits:b}=this.data;b.updateAttributes(a.attributes);b.trackChanges()}static async create(a){a=new n({data:await x.create(a),onCommit:this._onCommitFactory(a.applyEdits)});a._set("steps",
this._createWorkflowSteps(a));return a}static _createWorkflowSteps(a){const {attachmentsViewModel:b}=a.data.viewModel;return[{id:"editing-attributes",async setUp(){},async tearDown(){}},{id:"adding-attachment",async setUp(){},async tearDown(){b.mode="view"}},{id:"editing-attachment",async setUp(){},async tearDown(){b.mode="view"}}]}};f.UpdateRecordWorkflow._onCommitFactory=a=>async b=>{({edits:b}=b);const {feature:c}=b;if(c){var e=c.sourceLayer,d=c.clone();if(!b.attributesModified||b.stagedForDelete){var h=
e.objectIdField;d.attributes={[h]:c.getAttribute(h)};q.sceneLayerEditingEnabled()&&q.i3sPatchingEnabled()&&"scene"===e.type&&null!=e.infoFor3D&&(h=e.associatedLayer?.globalIdField,null!=h&&d.setAttribute(h,c.getAttribute(h)))}if(!b.geometryModified||b.stagedForDelete)d.geometry=null;await a(e,{[b.stagedForDelete?"deleteFeatures":"updateFeatures"]:[d]})}};g.__decorate([k.property()],f.UpdateRecordWorkflow.prototype,"editableItem",null);g.__decorate([k.property()],f.UpdateRecordWorkflow.prototype,"fullFeature",
void 0);g.__decorate([k.property()],f.UpdateRecordWorkflow.prototype,"hasPendingEdits",null);g.__decorate([k.property()],f.UpdateRecordWorkflow.prototype,"parent",null);g.__decorate([k.property()],f.UpdateRecordWorkflow.prototype,"shouldShowAttachments",null);g.__decorate([k.property()],f.UpdateRecordWorkflow.prototype,"shouldAllowAttachmentEditing",null);g.__decorate([k.property()],f.UpdateRecordWorkflow.prototype,"reliesOnOwnerAdminPrivileges",null);f.UpdateRecordWorkflow=n=g.__decorate([v.subclass("esri.widgets.Editor.UpdateRecordWorkflow")],
f.UpdateRecordWorkflow);f.handleKeys=l;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});