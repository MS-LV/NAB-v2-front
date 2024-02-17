import{a as q}from"./chunk-IAAJW5KY.js";import{$a as _,Bb as ce,Db as b,Qa as L,Sa as $,Sb as y,W as w,X as g,Y as ue,Ya as a,Z as R,a as c,aa as m,b as p,bb as d,ea as v,ga as H,ha as u,ib as de,ja as I,lb as W,m as oe,oa as S,r as ae,w as le}from"./chunk-DT44F3I4.js";var Ce=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a($),a(L))},e.\u0275dir=u({type:e});let i=e;return i})(),Ve=(()=>{let e=class e extends Ce{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=S(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[d]});let i=e;return i})(),K=new m("");var Ue={provide:K,useExisting:g(()=>De),multi:!0};function Re(){let i=q()?q().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var He=new m(""),De=(()=>{let e=class e extends Ce{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Re())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a($),a(L),a(He,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&b("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[y([Ue]),d]});let i=e;return i})();function h(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function be(i){return i!=null&&typeof i.length=="number"}var B=new m(""),J=new m(""),Le=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,he=class{static min(e){return $e(e)}static max(e){return We(e)}static required(e){return qe(e)}static requiredTrue(e){return ze(e)}static email(e){return Ze(e)}static minLength(e){return Xe(e)}static maxLength(e){return Ae(e)}static pattern(e){return Ye(e)}static nullValidator(e){return P(e)}static compose(e){return Se(e)}static composeAsync(e){return Oe(e)}};function $e(i){return e=>{if(h(e.value)||h(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function We(i){return e=>{if(h(e.value)||h(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function qe(i){return h(i.value)?{required:!0}:null}function ze(i){return i.value===!0?null:{required:!0}}function Ze(i){return h(i.value)||Le.test(i.value)?null:{email:!0}}function Xe(i){return e=>h(e.value)||!be(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ae(i){return e=>be(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ye(i){if(!i)return P;let e,n;return typeof i=="string"?(n="",i.charAt(0)!=="^"&&(n+="^"),n+=i,i.charAt(i.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=i.toString(),e=i),t=>{if(h(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function P(i){return null}function Me(i){return i!=null}function Ee(i){return ce(i)?oe(i):i}function Fe(i){let e={};return i.forEach(n=>{e=n!=null?c(c({},e),n):e}),Object.keys(e).length===0?null:e}function we(i,e){return e.map(n=>n(i))}function Ke(i){return!i.validate}function Ie(i){return i.map(e=>Ke(e)?e:n=>e.validate(n))}function Se(i){if(!i)return null;let e=i.filter(Me);return e.length==0?null:function(n){return Fe(we(n,e))}}function Q(i){return i!=null?Se(Ie(i)):null}function Oe(i){if(!i)return null;let e=i.filter(Me);return e.length==0?null:function(n){let t=we(n,e).map(Ee);return le(t).pipe(ae(Fe))}}function ee(i){return i!=null?Oe(Ie(i)):null}function fe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Ne(i){return i._rawValidators}function Pe(i){return i._rawAsyncValidators}function z(i){return i?Array.isArray(i)?i:[i]:[]}function x(i,e){return Array.isArray(i)?i.includes(e):i===e}function pe(i,e){let n=z(e);return z(i).forEach(r=>{x(n,r)||n.push(r)}),n}function ge(i,e){return z(e).filter(n=>!x(i,n))}var k=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Q(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ee(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},f=class extends k{get formDirective(){return null}get path(){return null}},F=class extends k{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},G=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Je={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qt=p(c({},Je),{"[class.ng-submitted]":"isSubmitted"}),zt=(()=>{let e=class e extends G{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(F,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&W("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[d]});let i=e;return i})(),Zt=(()=>{let e=class e extends G{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(f,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&W("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[d]});let i=e;return i})();var A="VALID",O="INVALID",C="PENDING",M="DISABLED";function te(i){return(U(i)?i.validators:i)||null}function Qe(i){return Array.isArray(i)?Q(i):i||null}function ie(i,e){return(U(e)?e.asyncValidators:i)||null}function et(i){return Array.isArray(i)?ee(i):i||null}function U(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function xe(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new w(1e3,"");if(!t[n])throw new w(1001,"")}function ke(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new w(1002,"")})}var V=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===O}get pending(){return this.status==C}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ge(e,this._rawAsyncValidators))}hasValidator(e){return x(this._rawValidators,e)}hasAsyncValidator(e){return x(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(t=>{t.disable(p(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(t=>{t.enable(p(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let n=Ee(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(O)?O:A}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){U(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Qe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=et(this._rawAsyncValidators)}},D=class extends V{constructor(e,n,t){super(te(n),ie(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){ke(this,!0,e),Object.keys(e).forEach(t=>{xe(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Z=class extends D{};var ne=new m("CallSetDisabledState",{providedIn:"root",factory:()=>re}),re="always";function tt(i,e){return[...e.path,i]}function X(i,e,n=re){se(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),nt(i,e),st(i,e),rt(i,e),it(i,e)}function me(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),j(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function T(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function it(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function se(i,e){let n=Ne(i);e.validator!==null?i.setValidators(fe(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=Pe(i);e.asyncValidator!==null?i.setAsyncValidators(fe(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();T(e._rawValidators,r),T(e._rawAsyncValidators,r)}function j(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=Ne(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Pe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return T(e._rawValidators,t),T(e._rawAsyncValidators,t),n}function nt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ge(i,e)})}function rt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ge(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ge(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function st(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function Te(i,e){i==null,se(i,e)}function ot(i,e){return j(i,e)}function at(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function lt(i){return Object.getPrototypeOf(i.constructor)===Ve}function je(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function ut(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===De?n=s:lt(s)?t=s:r=s}),r||t||n||null}function dt(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}var ct={provide:f,useExisting:g(()=>ht)},E=Promise.resolve(),ht=(()=>{let e=class e extends f{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new _,this.form=new D({},Q(t),ee(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){E.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),X(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){E.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){E.then(()=>{let r=this._findContainer(t.path),s=new D({});Te(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){E.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){E.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,je(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(a(B,10),a(J,10),a(ne,8))},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&b("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{options:[v.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[y([ct]),d]});let i=e;return i})();function ye(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function ve(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var N=class extends V{constructor(e=null,n,t){super(te(n),ie(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ve(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ye(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ye(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ve(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ft=i=>i instanceof N;var Yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})(),pt={provide:K,useExisting:g(()=>gt),multi:!0},gt=(()=>{let e=class e extends Ve{writeValue(t){let r=t??"";this.setProperty("value",r)}registerOnChange(t){this.onChange=r=>{t(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=S(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&b("input",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},features:[y([pt]),d]});let i=e;return i})();var Be=new m("");var mt={provide:f,useExisting:g(()=>yt)},yt=(()=>{let e=class e extends f{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(j(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return X(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){me(t.control||null,t,!1),dt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,je(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(me(r||null,t),ft(s)&&(X(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Te(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&ot(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){se(this.form,this),this._oldForm&&j(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(B,10),a(J,10),a(ne,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&b("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:[v.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[y([mt]),d,I]});let i=e;return i})();var vt={provide:F,useExisting:g(()=>_t)},_t=(()=>{let e=class e extends F{set isDisabled(t){}constructor(t,r,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new _,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=ut(this,o)}ngOnChanges(t){this._added||this._setUpControl(),at(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return tt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(f,13),a(B,10),a(J,10),a(K,10),a(Be,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:[v.None,"formControlName","name"],isDisabled:[v.None,"disabled","isDisabled"],model:[v.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[y([vt]),d,I]});let i=e;return i})();function Ct(i){return typeof i=="number"?i:parseInt(i,10)}var Vt=(()=>{let e=class e{constructor(){this._validator=P}ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):P,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,features:[I]});let i=e;return i})();var Dt={provide:B,useExisting:g(()=>bt),multi:!0},bt=(()=>{let e=class e extends Vt{constructor(){super(...arguments),this.inputName="maxlength",this.normalizeInput=t=>Ct(t),this.createValidator=t=>Ae(t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=S(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(r,s){r&2&&de("maxlength",s._enabled?s.maxlength:null)},inputs:{maxlength:"maxlength"},features:[y([Dt]),d]});let i=e;return i})();var At=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=H({type:e}),e.\u0275inj=R({});let i=e;return i})(),Y=class extends V{constructor(e,n,t){super(te(n),ie(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){ke(this,!1,e),e.forEach((t,r)=>{xe(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function _e(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Kt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let s=this._reduceControls(t),o={};return _e(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new D(s,o)}record(t,r=null){let s=this._reduceControls(t);return new Z(s,r)}control(t,r,s){let o={};return this.useNonNullable?(_e(r)?o=r:(o.validators=r,o.asyncValidators=s),new N(t,p(c({},o),{nonNullable:!0}))):new N(t,r,s)}array(t,r,s){let o=t.map(l=>this._createControl(l));return new Y(o,r,s)}_reduceControls(t){let r={};return Object.keys(t).forEach(s=>{r[s]=this._createControl(t[s])}),r}_createControl(t){if(t instanceof N)return t;if(t instanceof V)return t;if(Array.isArray(t)){let r=t[0],s=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,s,o)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ue({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Jt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Be,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ne,useValue:t.callSetDisabledState??re}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=H({type:e}),e.\u0275inj=R({imports:[At]});let i=e;return i})();export{K as a,De as b,he as c,F as d,zt as e,Zt as f,ht as g,Yt as h,gt as i,yt as j,_t as k,bt as l,Kt as m,Jt as n};
