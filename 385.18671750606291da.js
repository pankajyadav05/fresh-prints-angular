"use strict";(self.webpackChunkfresh_prints_angular=self.webpackChunkfresh_prints_angular||[]).push([[385],{385:(gr,se,a)=>{a.r(se),a.d(se,{HomeModule:()=>pr});var F=a(6895),ae=a(6850),xt=a(655),le=a(7579),St=a(727),ue=a(2076),o=(a(515),a(8256)),Bt=(a(5577),a(4482)),de=a(5403),he=a(8421),It=a(5032);const Tt=o.GuJ,kt=Symbol("__destroy"),fe=Symbol("__decoratorApplied");function pe(n){return"string"==typeof n?Symbol(`__destroy__${n}`):kt}function me(n,t){n[t]||(n[t]=new le.x)}function ge(n,t){n[t]&&(n[t].next(),n[t].complete(),n[t]=null)}function _e(n){n instanceof St.w0&&n.unsubscribe()}function ye(n,t){return function(){if(n&&n.call(this),ge(this,pe()),t.arrayName&&function Ut(n){Array.isArray(n)&&n.forEach(_e)}(this[t.arrayName]),t.checkProperties)for(const e in this)t.blackList?.includes(e)||_e(this[e])}}Symbol("CheckerHasBeenSet");var Qt=a(8746),Xt=a(4202),Kt=a(9751),en=a(4742),tn=a(7669),nn=a(3268),rn=a(1810),sn=a(4004);let Ae=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),g=(()=>{class n extends Ae{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),ln={provide:h,useExisting:(0,o.Gpc)(()=>O),multi:!0},cn=new o.OlP("CompositionEventMode");let O=(()=>{class n extends Ae{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function un(){const n=(0,F.q)()?(0,F.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(cn,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([ln]),o.qOj]}),n})();const u=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators");function Oe(n){return function f(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}(n.value)?{required:!0}:null}function E(n){return null}function Ge(n){return null!=n}function Be(n){return(0,o.QGY)(n)?(0,ue.D)(n):n}function Ie(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function He(n,t){return t.map(e=>e(n))}function Te(n){return n.map(t=>function fn(n){return!n.validate}(t)?t:e=>t.validate(e))}function U(n){return null!=n?function Pe(n){if(!n)return null;const t=n.filter(Ge);return 0==t.length?null:function(e){return Ie(He(e,t))}}(Te(n)):null}function j(n){return null!=n?function ke(n){if(!n)return null;const t=n.filter(Ge);return 0==t.length?null:function(e){return function on(...n){const t=(0,tn.jO)(n),{args:e,keys:r}=(0,en.D)(n),i=new Kt.y(s=>{const{length:l}=e;if(!l)return void s.complete();const d=new Array(l);let v=l,V=l;for(let k=0;k<l;k++){let ie=!1;(0,he.Xf)(e[k]).subscribe((0,de.x)(s,mr=>{ie||(ie=!0,V--),d[k]=mr},()=>v--,void 0,()=>{(!v||!ie)&&(V||s.next(r?(0,rn.n)(r,d):d),s.complete())}))}});return t?i.pipe((0,nn.Z)(t)):i}(He(e,t).map(Be)).pipe((0,sn.U)(Ie))}}(Te(n)):null}function Re(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function L(n){return n?Array.isArray(n)?n:[n]:[]}function w(n,t){return Array.isArray(n)?n.includes(t):n===t}function Le(n,t){const e=L(t);return L(n).forEach(i=>{w(e,i)||e.push(i)}),e}function qe(n,t){return L(t).filter(e=>!w(n,e))}class Ye{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=U(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class c extends Ye{get formDirective(){return null}get path(){return null}}class m extends Ye{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class $e{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let We=(()=>{class n extends $e{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),Ze=(()=>{class n extends $e{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const A="VALID",x="INVALID",C="PENDING",b="DISABLED";function W(n){return(S(n)?n.validators:n)||null}function Je(n){return Array.isArray(n)?U(n):n||null}function Z(n,t){return(S(t)?t.asyncValidators:n)||null}function Qe(n){return Array.isArray(n)?j(n):n||null}function S(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class et{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Je(this._rawValidators),this._composedAsyncValidatorFn=Qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===x}get pending(){return this.status==C}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Je(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Qe(t)}addValidators(t){this.setValidators(Le(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Le(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(qe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(qe(t,this._rawAsyncValidators))}hasValidator(t){return w(this._rawValidators,t)}hasAsyncValidator(t){return w(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=Be(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(x)?x:A}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){S(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}class z extends et{constructor(t,e,r){super(W(e),Z(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){(function Ke(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(r=>{(function Xe(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}function D(n,t){J(n,t),t.valueAccessor.writeValue(n.value),n.disabled&&t.valueAccessor.setDisabledState?.(!0),function An(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&tt(n,t)})}(n,t),function Dn(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function bn(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&tt(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Vn(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function I(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function J(n,t){const e=function Ue(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(Re(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function je(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(Re(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();I(t._rawValidators,i),I(t._rawAsyncValidators,i)}function tt(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}const wn={provide:c,useExisting:(0,o.Gpc)(()=>T)},M=(()=>Promise.resolve())();let T=(()=>{class n extends c{constructor(e,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new z({},U(e),j(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){M.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),D(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){M.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){M.then(()=>{const r=this._findContainer(e.path),i=new z({});(function nt(n,t){J(n,t)})(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){M.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){M.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,function ot(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([wn]),o.qOj]}),n})();function it(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function st(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const at=class extends et{constructor(t=null,e,r){super(W(e),Z(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),S(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=st(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){it(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){it(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){st(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},Sn={provide:m,useExisting:(0,o.Gpc)(()=>K)},ct=(()=>Promise.resolve())();let K=(()=>{class n extends m{constructor(e,r,i,s,l){super(),this._changeDetectorRef=l,this.control=new at,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function X(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function On(n){return Object.getPrototypeOf(n.constructor)===g}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function Q(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){D(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ct.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);ct.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function G(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,9),o.Y36(u,10),o.Y36(p,10),o.Y36(h,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Sn]),o.qOj,o.TTD]}),n})(),dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),_=(()=>{class n{constructor(){this._validator=E}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):E,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const Jn={provide:u,useExisting:(0,o.Gpc)(()=>P),multi:!0};let P=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.D6c,this.createValidator=e=>Oe}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([Jn]),o.qOj]}),n})(),nr=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ft]}),n})(),rr=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[nr]}),n})();function ir(n,t){1&n&&o._UZ(0,"i",10)}function sr(n,t){if(1&n&&(o.TgZ(0,"p",17),o._uU(1),o.qZA()),2&n){const e=o.oxw(2);o.xp6(1),o.AsE(" Showing ",e.currentIndex+1," of ",e.total," ")}}function ar(n,t){if(1&n&&(o.TgZ(0,"div",18)(1,"div",19)(2,"div")(3,"p",20),o._uU(4,"User Image"),o.qZA(),o._UZ(5,"img",21),o.qZA(),o.TgZ(6,"div")(7,"p",20),o._uU(8,"GitHub User Name"),o.qZA(),o.TgZ(9,"a",22),o._uU(10),o.qZA()()()()),2&n){const e=o.oxw(2);o.xp6(5),o.Q6J("src",e.users[e.currentIndex].avatar_url||"https://cdn.landesa.org/wp-content/uploads/default-user-image.png",o.LSH),o.xp6(4),o.Q6J("href",e.users[e.currentIndex].html_url,o.LSH),o.xp6(1),o.hij(" ",e.users[e.currentIndex].login," ")}}function lr(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"div",23)(1,"i",24),o.NdJ("click",function(){o.CHM(e);const i=o.oxw(2);return o.KtG(i.showPrevUser())}),o.qZA(),o.TgZ(2,"i",25),o.NdJ("click",function(){o.CHM(e);const i=o.oxw(2);return o.KtG(i.showNextUser())}),o.qZA()()}}function ur(n,t){if(1&n&&(o.TgZ(0,"div",11)(1,"div",12)(2,"p",13),o._uU(3,"Search Results"),o.qZA(),o.YNc(4,sr,2,2,"p",14),o.qZA(),o.YNc(5,ar,11,3,"div",15),o.YNc(6,lr,3,0,"div",16),o.qZA()),2&n){const e=o.oxw(),r=o.MAs(13);o.xp6(4),o.Q6J("ngIf",e.total>0),o.xp6(1),o.Q6J("ngIf",e.total>0)("ngIfElse",r),o.xp6(1),o.Q6J("ngIf",e.total>1)}}function cr(n,t){1&n&&(o.TgZ(0,"p",26),o._uU(1,"No result found"),o.qZA())}const dr=function(){return{standalone:!0}};let y=class{constructor(t){this.homeService=t,this.loading=!1,this.submitted=!1,this.currentIndex=0,this.searchHistory=[]}ngOnInit(){this.searchHistory=this.homeService.getHistory()}searchByName(){this.submitted=!0,this.loading=!0,this.homeService.searchByName(this.name).pipe((0,Qt.x)(()=>{this.loading=!1,this.currentIndex=0}),function zt(n,t){return e=>{const r=pe(t);return"string"==typeof t?function Zt(n,t,e){const r=n[t];me(n,e),n[t]=function(){r.apply(this,arguments),ge(this,e),n[t]=r}}(n,t,r):me(n,r),e.pipe(function Ht(n){return(0,Bt.e)((t,e)=>{(0,he.Xf)(n).subscribe((0,de.x)(e,()=>e.complete(),It.Z)),!e.closed&&t.subscribe(e)})}(n[r]))}}(this)).subscribe(({total_count:t,items:e})=>{this.total=t,this.users=e,this.saveHistory()})}showPrevUser(){0!==this.currentIndex&&this.currentIndex--}showNextUser(){this.currentIndex!==this.total-1&&(0!==this.currentIndex&&this.saveHistory(),this.currentIndex++)}saveHistory(){this.searchHistory.push({searchTerm:this.name,searchResult:this.users[this.currentIndex]}),this.homeService.saveHistory(this.searchHistory)}};y.\u0275fac=function(t){return new(t||y)(o.Y36(Xt.Y))},y.\u0275cmp=o.Xpm({type:y,selectors:[["app-home"]],decls:14,vars:6,consts:[[1,"component"],[1,"w-full",3,"ngSubmit"],["searchForm",""],[1,"flex","align-middle","border-2","rounded-lg","gap-2","p-3","border-gray-300","focus-within:border-blue-600","w-full","mb-6"],[1,"mt-1","pi","pi-search","cursor-pointer",3,"click"],["type","search","required","","placeholder","Search by user name",1,"bg-transparent","border-0","outline-none","w-full",3,"ngModel","ngModelOptions","ngModelChange"],["type","submit",1,"action-btn",3,"disabled","click"],["class","pi pi-spin pi-spinner mr-2 mt-1",4,"ngIf"],["class","mr-auto mt-8 w-full",4,"ngIf"],["noResultTemplate",""],[1,"pi","pi-spin","pi-spinner","mr-2","mt-1"],[1,"mr-auto","mt-8","w-full"],[1,"flex","justify-between","align-middle"],[1,"text-left"],["class","text-left text-xs",4,"ngIf"],["class","border border-gray-300 bg-white rounded-lg p-5",4,"ngIf","ngIfElse"],["class","flex justify-end mt-3",4,"ngIf"],[1,"text-left","text-xs"],[1,"border","border-gray-300","bg-white","rounded-lg","p-5"],[1,"grid","grid-cols-2"],[1,""],[1,"rounded-lg","w-24",3,"src"],["target","_blank","rel","noopener noreferrer",1,"text-lg","text-gray-500","hover:underline",3,"href"],[1,"flex","justify-end","mt-3"],[1,"pi","pi-angle-left","icon","mr-3",3,"click"],[1,"pi","pi-angle-right","icon",3,"click"],[1,"text-lg","text-gray-500","text-bold"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0)(1,"h3"),o._uU(2,"Search GitHub User"),o.qZA(),o.TgZ(3,"form",1,2),o.NdJ("ngSubmit",function(){return e.searchByName()}),o.TgZ(5,"div",3)(6,"i",4),o.NdJ("click",function(){return e.searchByName()}),o.qZA(),o.TgZ(7,"input",5),o.NdJ("ngModelChange",function(i){return e.name=i}),o.qZA()(),o.TgZ(8,"button",6),o.NdJ("click",function(){return e.searchByName()}),o.YNc(9,ir,1,0,"i",7),o._uU(10," Search "),o.qZA()(),o.YNc(11,ur,7,4,"div",8),o.qZA(),o.YNc(12,cr,2,0,"ng-template",null,9,o.W1O)),2&t&&(o.xp6(7),o.Q6J("ngModel",e.name)("ngModelOptions",o.DdM(5,dr)),o.xp6(1),o.Q6J("disabled",!e.name||e.loading),o.xp6(1),o.Q6J("ngIf",e.loading),o.xp6(2),o.Q6J("ngIf",e.submitted&&!e.loading))},dependencies:[F.O5,dt,O,We,Ze,P,K,T],styles:[".icon[_ngcontent-%COMP%]{cursor:pointer;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.5rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.1s}.icon[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(37 99 235 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}"]}),y=(0,xt.gn)([function qt(n={}){return t=>{!function Pt(n){return!!n[Tt]}(t)?function jt(n,t){n.prototype.ngOnDestroy=ye(n.prototype.ngOnDestroy,t)}(t,n):function Lt(n,t){const e=n.\u0275pipe;e.onDestroy=ye(e.onDestroy,t)}(t,n),function Rt(n){n.prototype[fe]=!0}(t)}}()],y);const hr=[{path:"",component:y}];let fr=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ae.Bz.forChild(hr),ae.Bz]}),n})(),pr=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[F.ez,fr,rr]}),n})()}}]);