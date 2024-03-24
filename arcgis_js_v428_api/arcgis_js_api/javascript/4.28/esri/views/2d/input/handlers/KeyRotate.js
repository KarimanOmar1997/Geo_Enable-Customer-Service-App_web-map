// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../input/InputHandler","../../../input/VisibilityChange"],function(e,f,g){class h extends f.InputHandler{constructor(a,b,c){super(!0);this.view=a;this.keys=b;this._pressed=!1;this._keyToDirection={[b.clockwiseOption1]:"clockwise",[b.clockwiseOption2]:"clockwise",[b.counterClockwiseOption1]:"counterClockwise",[b.counterClockwiseOption2]:"counterClockwise",[b.resetOption1]:"reset",[b.resetOption2]:"reset"};this.registerIncoming("key-down",c,d=>this._handleKeyDown(d));this.registerIncoming("key-up",
c,d=>this._handleKeyUp(d));this.registerIncoming("blur",c,()=>this._handleStop());this._visibilityHandle=g.onVisibilityChange(d=>d?null:this._handleStop())}onUninstall(){this._visibilityHandle?.remove();this._handleStop()}_handleKeyDown(a){a.data.repeat||this._handleKey(a,!0)}_handleKeyUp(a){this._handleKey(a,!1)}_handleStop(){this._pressed&&(this._pressed=!1,this.view.mapViewNavigation.stop())}_handleKey(a,b){var c=a.modifiers;if(!(0<c.size&&!c.has("Shift")||!this.view.constraints.rotationEnabled)&&
(c=this._keyToDirection[a.data.key],this._pressed=null!=c)){a.preventDefault();if(b)switch(this.view.mapViewNavigation.begin(),c){case "clockwise":this.view.mapViewNavigation.continousRotateClockwise();break;case "counterClockwise":this.view.mapViewNavigation.continousRotateCounterclockwise();break;case "reset":this.view.mapViewNavigation.resetRotation()}else this._pressed=!1,this.view.mapViewNavigation.stop();a.stopPropagation()}}}e.KeyRotate=h;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});