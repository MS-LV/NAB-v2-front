import{a as Ze,b as Je}from"./chunk-LEKRTD6I.js";import{b as Xe,e as et,f as tt}from"./chunk-2NRCOCGE.js";import{c as ue,d as fe,e as _e,g as O,h as R,i as ge,j as ve,k as be}from"./chunk-JGYM447R.js";import{D as Ge,F as ae,G as Ke,J as ye,M as W,Q as We,R as Ye,a as Be,g as $e,j as Ue,x as qe}from"./chunk-CD6SL3UV.js";import{$b as Ne,Ab as ne,Bb as P,Eb as E,Gb as p,Hb as U,Ib as q,J as Ee,Jb as G,Kb as k,Lb as y,Mb as re,Nb as g,Ob as v,Pb as ce,Qb as S,Rb as D,S as z,T as ke,Ta as I,U as M,Ub as de,Vb as L,Xb as he,Y,Yb as K,Z as Oe,Za as l,_ as Z,_a as s,ab as B,ba as Re,bb as A,d as Me,da as ze,db as T,eb as le,fa as f,fb as Le,fc as H,ga as F,gc as Ve,ha as J,i as N,ia as m,ja as Fe,jb as _,ka as V,kb as $,la as Q,lb as u,n as Te,nb as C,oa as X,ob as He,pb as je,qa as Ae,qb as b,qc as me,r as we,ra as Pe,rb as ee,sb as te,tb as ie,tc as Qe,ub as c,vb as h,wb as pe,zb as w}from"./chunk-6H2AS4DM.js";function gt(n,t){n&1&&q(0)}var vt=["*"],xe=(()=>{let t=class t{constructor(e){this._elementRef=e}focus(){this._elementRef.nativeElement.focus()}};t.\u0275fac=function(i){return new(i||t)(s(I))},t.\u0275dir=m({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"],standalone:!0});let n=t;return n})(),Ie=(()=>{let t=class t{constructor(e){this.template=e}};t.\u0275fac=function(i){return new(i||t)(s(k))},t.\u0275dir=m({type:t,selectors:[["","cdkStepLabel",""]],standalone:!0});let n=t;return n})(),bt=0;var x={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},Ce=new Re("STEPPER_GLOBAL_OPTIONS"),oe=(()=>{let t=class t{get completed(){return this._completedOverride==null?this._getDefaultCompleted():this._completedOverride}set completed(e){this._completedOverride=e}_getDefaultCompleted(){return this.stepControl?this.stepControl.valid&&this.interacted:this.interacted}get hasError(){return this._customError==null?this._getDefaultError():this._customError}set hasError(e){this._customError=e}_getDefaultError(){return this.stepControl&&this.stepControl.invalid&&this.interacted}constructor(e,i){this._stepper=e,this.interacted=!1,this.interactedStream=new A,this.editable=!0,this.optional=!1,this._completedOverride=null,this._customError=null,this._stepperOptions=i||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this.interacted=!1,this._completedOverride!=null&&(this._completedOverride=!1),this._customError!=null&&(this._customError=!1),this.stepControl&&this.stepControl.reset()}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this.interacted||(this.interacted=!0,this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError!=null}};t.\u0275fac=function(i){return new(i||t)(s(Y(()=>j)),s(Ce,8))},t.\u0275cmp=F({type:t,selectors:[["cdk-step"]],contentQueries:function(i,r,o){if(i&1&&y(o,Ie,5),i&2){let d;g(d=v())&&(r.stepLabel=d.first)}},viewQuery:function(i,r){if(i&1&&re(k,7),i&2){let o;g(o=v())&&(r.content=o.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[f.None,"aria-label","ariaLabel"],ariaLabelledby:[f.None,"aria-labelledby","ariaLabelledby"],state:"state",editable:[f.HasDecoratorInputTransform,"editable","editable",H],optional:[f.HasDecoratorInputTransform,"optional","optional",H],completed:[f.HasDecoratorInputTransform,"completed","completed",H],hasError:[f.HasDecoratorInputTransform,"hasError","hasError",H]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],standalone:!0,features:[le,Fe,L],ngContentSelectors:vt,decls:1,vars:0,template:function(i,r){i&1&&(U(),_(0,gt,1,0,"ng-template"))},encapsulation:2,changeDetection:0});let n=t;return n})(),j=(()=>{let t=class t{get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this.steps&&this._steps?(this._isValidIndex(e),this.selected?._markAsInteracted(),this._selectedIndex!==e&&!this._anyControlsInvalidOrPending(e)&&(e>=this._selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e)):this._selectedIndex=e}get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}constructor(e,i,r){this._dir=e,this._changeDetectorRef=i,this._elementRef=r,this._destroyed=new N,this.steps=new G,this._sortedHeaders=new G,this.linear=!1,this._selectedIndex=0,this.selectionChange=new A,this.selectedIndexChange=new A,this._orientation="horizontal",this._groupId=bt++}ngAfterContentInit(){this._steps.changes.pipe(z(this._steps),M(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(i=>i._stepper===this)),this.steps.notifyOnChanges()})}ngAfterViewInit(){this._stepHeader.changes.pipe(z(this._stepHeader),M(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((i,r)=>i._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new qe(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),(this._dir?this._dir.change:Te()).pipe(z(this._layoutDirection()),M(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this._selectedIndex),this.steps.changes.subscribe(()=>{this.selected||(this._selectedIndex=Math.max(this._selectedIndex-1,0))}),this._isValidIndex(this._selectedIndex)||(this._selectedIndex=0)}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`cdk-step-label-${this._groupId}-${e}`}_getStepContentId(e){return`cdk-step-content-${this._groupId}-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let i=e-this._selectedIndex;return i<0?this._layoutDirection()==="rtl"?"next":"previous":i>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getIndicatorType(e,i=x.NUMBER){let r=this.steps.toArray()[e],o=this._isCurrentStep(e);return r._displayDefaultIndicatorType?this._getDefaultIndicatorLogic(r,o):this._getGuidelineLogic(r,o,i)}_getDefaultIndicatorLogic(e,i){return e._showError()&&e.hasError&&!i?x.ERROR:!e.completed||i?x.NUMBER:e.editable?x.EDIT:x.DONE}_getGuidelineLogic(e,i,r=x.NUMBER){return e._showError()&&e.hasError&&!i?x.ERROR:e.completed&&!i?x.DONE:e.completed&&i?r:e.editable&&i?x.EDIT:r}_isCurrentStep(e){return this._selectedIndex===e}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex}_updateSelectedItemIndex(e){let i=this.steps.toArray();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:this._selectedIndex,selectedStep:i[e],previouslySelectedStep:i[this._selectedIndex]}),this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e),this._selectedIndex=e,this.selectedIndexChange.emit(this._selectedIndex),this._stateChanged()}_onKeydown(e){let i=Ue(e),r=e.keyCode,o=this._keyManager;o.activeItemIndex!=null&&!i&&(r===32||r===13)?(this.selectedIndex=o.activeItemIndex,e.preventDefault()):o.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(i=>{let r=i.stepControl;return(r?r.invalid||r.pending||!i.interacted:!i.completed)&&!i.optional&&!i._completedOverride}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,i=$e();return e===i||e.contains(i)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}};t.\u0275fac=function(i){return new(i||t)(s(ae,8),s(B),s(I))},t.\u0275dir=m({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(i,r,o){if(i&1&&(y(o,oe,5),y(o,xe,5)),i&2){let d;g(d=v())&&(r._steps=d),g(d=v())&&(r._stepHeader=d)}},inputs:{linear:[f.HasDecoratorInputTransform,"linear","linear",H],selectedIndex:[f.HasDecoratorInputTransform,"selectedIndex","selectedIndex",Ve],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"],standalone:!0,features:[le]});let n=t;return n})(),nt=(()=>{let t=class t{constructor(e){this._stepper=e,this.type="submit"}};t.\u0275fac=function(i){return new(i||t)(s(j))},t.\u0275dir=m({type:t,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(i,r){i&1&&E("click",function(){return r._stepper.next()}),i&2&&P("type",r.type)},inputs:{type:"type"},standalone:!0});let n=t;return n})(),rt=(()=>{let t=class t{constructor(e){this._stepper=e,this.type="button"}};t.\u0275fac=function(i){return new(i||t)(s(j))},t.\u0275dir=m({type:t,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(i,r){i&1&&E("click",function(){return r._stepper.previous()}),i&2&&P("type",r.type)},inputs:{type:"type"},standalone:!0});let n=t;return n})(),at=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=J({type:t}),t.\u0275inj=Z({imports:[Ke]});let n=t;return n})();function yt(n,t){if(n&1&&w(0,2),n&2){let a=p();u("ngTemplateOutlet",a.iconOverrides[a.state])("ngTemplateOutletContext",a._getIconContext())}}function xt(n,t){if(n&1&&(c(0,"span",7),S(1),h()),n&2){let a=p(2);l(),D(a._getDefaultTextForState(a.state))}}function It(n,t){if(n&1&&(c(0,"span",9),S(1),h()),n&2){let a=p(3);l(),D(a._intl.completedLabel)}}function Ct(n,t){if(n&1&&(c(0,"span",9),S(1),h()),n&2){let a=p(3);l(),D(a._intl.editableLabel)}}function St(n,t){if(n&1&&(_(0,It,2,1,"span",8)(1,Ct,2,1),c(2,"mat-icon",7),S(3),h()),n&2){let a=p(2);b(0,a.state==="done"?0:a.state==="edit"?1:-1),l(3),D(a._getDefaultTextForState(a.state))}}function Dt(n,t){if(n&1&&_(0,xt,2,1)(1,St,4,2),n&2){let a=p(),e;b(0,(e=a.state)==="number"?0:1)}}function Mt(n,t){n&1&&(c(0,"div",10),w(1,11),h()),n&2&&(l(),u("ngTemplateOutlet",t.template))}function Tt(n,t){if(n&1&&(c(0,"div",10),S(1),h()),n&2){let a=p();l(),D(a.label)}}function wt(n,t){if(n&1&&(c(0,"div",12),S(1),h()),n&2){let a=p();l(),D(a._intl.optionalLabel)}}function Et(n,t){if(n&1&&(c(0,"div",13),S(1),h()),n&2){let a=p();l(),D(a.errorMessage)}}function kt(n,t){}function Ot(n,t){if(n&1&&(q(0),_(1,kt,0,0,"ng-template",0)),n&2){let a=p();l(),u("cdkPortalOutlet",a._portal)}}var st=["*"];function Rt(n,t){n&1&&q(0)}function zt(n,t){n&1&&pe(0,"div",6)}var lt=(n,t)=>({step:n,i:t});function Ft(n,t){if(n&1&&(w(0,4),_(1,zt,1,0,"div",5)),n&2){let a=t.$implicit,e=t.$index,i=t.$count;p(2);let r=ce(4);u("ngTemplateOutlet",r)("ngTemplateOutletContext",K(3,lt,a,e)),l(),b(1,e!==i-1?1:-1)}}var pt=n=>({animationDuration:n}),ct=(n,t)=>({value:n,params:t});function At(n,t){if(n&1){let a=ne();c(0,"div",7),E("@horizontalStepTransition.done",function(i){V(a);let r=p(2);return Q(r._animationDone.next(i))}),w(1,8),h()}if(n&2){let a=t.$implicit,e=t.$index,i=p(2);C("mat-horizontal-stepper-content-inactive",i.selectedIndex!==e),u("@horizontalStepTransition",K(8,ct,i._getAnimationDirection(e),he(6,pt,i._getAnimationDuration())))("id",i._getStepContentId(e)),$("aria-labelledby",i._getStepLabelId(e)),l(),u("ngTemplateOutlet",a.content)}}function Pt(n,t){if(n&1&&(c(0,"div",1)(1,"div",2),te(2,Ft,2,6,null,null,ee),h(),c(4,"div",3),te(5,At,2,11,"div",9,ee),h()()),n&2){let a=p();l(2),ie(a.steps),l(3),ie(a.steps)}}function Lt(n,t){if(n&1){let a=ne();c(0,"div",10),w(1,4),c(2,"div",11)(3,"div",12),E("@verticalStepTransition.done",function(i){V(a);let r=p(2);return Q(r._animationDone.next(i))}),c(4,"div",13),w(5,8),h()()()()}if(n&2){let a=t.$implicit,e=t.$index,i=t.$count,r=p(2),o=ce(4);l(),u("ngTemplateOutlet",o)("ngTemplateOutletContext",K(10,lt,a,e)),l(),C("mat-stepper-vertical-line",e!==i-1),l(),C("mat-vertical-stepper-content-inactive",r.selectedIndex!==e),u("@verticalStepTransition",K(15,ct,r._getAnimationDirection(e),he(13,pt,r._getAnimationDuration())))("id",r._getStepContentId(e)),$("aria-labelledby",r._getStepLabelId(e)),l(2),u("ngTemplateOutlet",a.content)}}function Ht(n,t){if(n&1&&te(0,Lt,6,18,"div",14,ee),n&2){let a=p();ie(a.steps)}}function jt(n,t){if(n&1){let a=ne();c(0,"mat-step-header",15),E("click",function(){let r=V(a).step;return Q(r.select())})("keydown",function(i){V(a);let r=p();return Q(r._onKeydown(i))}),h()}if(n&2){let a=t.step,e=t.i,i=p();C("mat-horizontal-stepper-header",i.orientation==="horizontal")("mat-vertical-stepper-header",i.orientation==="vertical"),u("tabIndex",i._getFocusIndex()===e?0:-1)("id",i._getStepLabelId(e))("index",e)("state",i._getIndicatorType(e,a.state))("label",a.stepLabel||a.label)("selected",i.selectedIndex===e)("active",i._stepIsNavigable(e,a))("optional",a.optional)("errorMessage",a.errorMessage)("iconOverrides",i._iconOverrides)("disableRipple",i.disableRipple||!i._stepIsNavigable(e,a))("color",a.color||i.color),$("aria-posinset",e+1)("aria-setsize",i.steps.length)("aria-controls",i._getStepContentId(e))("aria-selected",i.selectedIndex==e)("aria-label",a.ariaLabel||null)("aria-labelledby",!a.ariaLabel&&a.ariaLabelledby?a.ariaLabelledby:null)("aria-disabled",i._stepIsNavigable(e,a)?null:!0)}}var Se=(()=>{let t=class t extends Ie{};t.\u0275fac=(()=>{let e;return function(r){return(e||(e=X(t)))(r||t)}})(),t.\u0275dir=m({type:t,selectors:[["","matStepLabel",""]],standalone:!0,features:[T]});let n=t;return n})(),se=(()=>{let t=class t{constructor(){this.changes=new N,this.optionalLabel="Optional",this.completedLabel="Completed",this.editableLabel="Editable"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=Oe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function Nt(n){return n||new se}var Vt={provide:se,deps:[[new Ae,new Pe,se]],useFactory:Nt},De=(()=>{let t=class t extends xe{constructor(e,i,r,o){super(r),this._intl=e,this._focusMonitor=i,this._intlSubscription=e.changes.subscribe(()=>o.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,i){e?this._focusMonitor.focusVia(this._elementRef,e,i):this._elementRef.nativeElement.focus(i)}_stringLabel(){return this.label instanceof Se?null:this.label}_templateLabel(){return this.label instanceof Se?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getIconContext(){return{index:this.index,active:this.active,optional:this.optional}}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}};t.\u0275fac=function(i){return new(i||t)(s(se),s(Ge),s(I),s(B))},t.\u0275cmp=F({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","tab",1,"mat-step-header"],hostVars:2,hostBindings:function(i,r){i&2&&He("mat-"+(r.color||"primary"))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},standalone:!0,features:[T,L],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],["class","mat-step-text-label"],["class","mat-step-optional"],["class","mat-step-sub-label-error"],["aria-hidden","true"],["class","cdk-visually-hidden"],[1,"cdk-visually-hidden"],[1,"mat-step-text-label"],[3,"ngTemplateOutlet"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"]],template:function(i,r){if(i&1&&(pe(0,"div",0),c(1,"div")(2,"div",1),_(3,yt,1,2,"ng-container",2)(4,Dt,2,1),h()(),c(5,"div",3),_(6,Mt,2,1,"div",4)(7,Tt,2,1)(8,wt,2,1,"div",5)(9,Et,2,1,"div",6),h()),i&2){let o;u("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disableRipple),l(),je("mat-step-icon-state-",r.state," mat-step-icon"),C("mat-step-icon-selected",r.selected),l(2),b(3,r.iconOverrides&&r.iconOverrides[r.state]?3:4),l(2),C("mat-step-label-active",r.active)("mat-step-label-selected",r.selected)("mat-step-label-error",r.state=="error"),l(),b(6,(o=r._templateLabel())?6:r._stringLabel()?7:-1,o),l(2),b(8,r.optional&&r.state!="error"?8:-1),l(),b(9,r.state==="error"?9:-1)}},dependencies:[We,me,Ze],styles:['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}'],encapsulation:2,changeDetection:0});let n=t;return n})(),dt="500ms",ht="225ms",ot={horizontalStepTransition:ue("horizontalStepTransition",[R("previous",O({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"})),R("current",O({transform:"none",visibility:"inherit"})),R("next",O({transform:"translate3d(100%, 0, 0)",visibility:"hidden"})),ge("* => *",_e([fe("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"),be("@*",ve(),{optional:!0})]),{params:{animationDuration:dt}})]),verticalStepTransition:ue("verticalStepTransition",[R("previous",O({height:"0px",visibility:"hidden"})),R("next",O({height:"0px",visibility:"hidden"})),R("current",O({height:"*",visibility:"inherit"})),ge("* <=> current",_e([fe("{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)"),be("@*",ve(),{optional:!0})]),{params:{animationDuration:ht}})])},Qt=(()=>{let t=class t{constructor(e){this.templateRef=e}};t.\u0275fac=function(i){return new(i||t)(s(k))},t.\u0275dir=m({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[f.None,"matStepperIcon","name"]},standalone:!0});let n=t;return n})(),Bt=(()=>{let t=class t{constructor(e){this._template=e}};t.\u0275fac=function(i){return new(i||t)(s(k))},t.\u0275dir=m({type:t,selectors:[["ng-template","matStepContent",""]],standalone:!0});let n=t;return n})(),$t=(()=>{let t=class t extends oe{constructor(e,i,r,o){super(e,o),this._errorStateMatcher=i,this._viewContainerRef=r,this._isSelected=Me.EMPTY,this.stepLabel=void 0}ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(ke(()=>this._stepper.selectionChange.pipe(we(e=>e.selectedStep===this),z(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new Xe(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,i){let r=this._errorStateMatcher.isErrorState(e,i),o=!!(e&&e.invalid&&this.interacted);return r||o}};t.\u0275fac=function(i){return new(i||t)(s(Y(()=>mt)),s(W,4),s(Le),s(Ce,8))},t.\u0275cmp=F({type:t,selectors:[["mat-step"]],contentQueries:function(i,r,o){if(i&1&&(y(o,Se,5),y(o,Bt,5)),i&2){let d;g(d=v())&&(r.stepLabel=d.first),g(d=v())&&(r._lazyContent=d.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],standalone:!0,features:[de([{provide:W,useExisting:t},{provide:oe,useExisting:t}]),T,L],ngContentSelectors:st,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(i,r){i&1&&(U(),_(0,Ot,2,1,"ng-template"))},dependencies:[et],encapsulation:2,changeDetection:0});let n=t;return n})(),mt=(()=>{let t=class t extends j{get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}constructor(e,i,r){super(e,i,r),this._stepHeader=void 0,this._steps=void 0,this.steps=new G,this.animationDone=new A,this.labelPosition="end",this.headerPosition="top",this._iconOverrides={},this._animationDone=new N,this._animationDuration="",this._isServer=!ze(Be).isBrowser;let o=r.nativeElement.nodeName.toLowerCase();this.orientation=o==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:i})=>this._iconOverrides[e]=i),this.steps.changes.pipe(M(this._destroyed)).subscribe(()=>{this._stateChanged()}),this._animationDone.pipe(Ee((e,i)=>e.fromState===i.fromState&&e.toState===i.toState),M(this._destroyed)).subscribe(e=>{e.toState==="current"&&this.animationDone.emit()})}_stepIsNavigable(e,i){return i.completed||this.selectedIndex===e||!this.linear}_getAnimationDuration(){return this.animationDuration?this.animationDuration:this.orientation==="horizontal"?dt:ht}};t.\u0275fac=function(i){return new(i||t)(s(ae,8),s(B),s(I))},t.\u0275cmp=F({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(i,r,o){if(i&1&&(y(o,$t,5),y(o,Qt,5)),i&2){let d;g(d=v())&&(r._steps=d),g(d=v())&&(r._icons=d)}},viewQuery:function(i,r){if(i&1&&re(De,5),i&2){let o;g(o=v())&&(r._stepHeader=o)}},hostAttrs:["role","tablist"],hostVars:11,hostBindings:function(i,r){i&2&&($("aria-orientation",r.orientation),C("mat-stepper-horizontal",r.orientation==="horizontal")("mat-stepper-vertical",r.orientation==="vertical")("mat-stepper-label-position-end",r.orientation==="horizontal"&&r.labelPosition=="end")("mat-stepper-label-position-bottom",r.orientation==="horizontal"&&r.labelPosition=="bottom")("mat-stepper-header-position-bottom",r.headerPosition==="bottom"))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],standalone:!0,features:[de([{provide:j,useExisting:t}]),T,L],ngContentSelectors:st,decls:5,vars:2,consts:[["stepTemplate",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-horizontal-stepper-header-container"],[1,"mat-horizontal-content-container"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","mat-stepper-horizontal-line"],[1,"mat-stepper-horizontal-line"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[3,"ngTemplateOutlet"],["class","mat-horizontal-stepper-content","role","tabpanel",3,"id","mat-horizontal-stepper-content-inactive"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","tabpanel",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],["class","mat-step"],[3,"tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color","click","keydown"]],template:function(i,r){if(i&1&&(U(),_(0,Rt,1,0)(1,Pt,7,0)(2,Ht,2,0)(3,jt,1,23,"ng-template",null,0,Ne)),i&2){let o;b(0,r._isServer?0:-1),l(),b(1,(o=r.orientation)==="horizontal"?1:o==="vertical"?2:-1)}},dependencies:[me,De],styles:['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}'],encapsulation:2,data:{animation:[ot.horizontalStepTransition,ot.verticalStepTransition]},changeDetection:0});let n=t;return n})(),Ai=(()=>{let t=class t extends nt{};t.\u0275fac=(()=>{let e;return function(r){return(e||(e=X(t)))(r||t)}})(),t.\u0275dir=m({type:t,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(i,r){i&2&&P("type",r.type)},standalone:!0,features:[T]});let n=t;return n})(),Pi=(()=>{let t=class t extends rt{};t.\u0275fac=(()=>{let e;return function(r){return(e||(e=X(t)))(r||t)}})(),t.\u0275dir=m({type:t,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(i,r){i&2&&P("type",r.type)},standalone:!0,features:[T]});let n=t;return n})(),Li=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=J({type:t}),t.\u0275inj=Z({providers:[Vt,W],imports:[ye,Qe,tt,at,Je,Ye,mt,De,ye]});let n=t;return n})();var ji=(()=>{class n{el;focus=!0;constructor(a){this.el=a}ngOnInit(){this.focus&&window.setTimeout(()=>{this.el.nativeElement.focus()})}set autofocus(a){this.focus=a}static \u0275fac=function(e){return new(e||n)(s(I))};static \u0275dir=m({type:n,selectors:[["","autofocus",""]],inputs:{autofocus:"autofocus"},standalone:!0})}return n})();var Vi=[{id:1,answer:"",english:"Beautiful",russian:"\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F",tajik:"\u0437\u0435\u0431\u043E"},{id:2,answer:"",english:"Lower",russian:"\u041D\u0438\u0437\u043A\u0438\u0439",tajik:"\u041F\u0430\u0441\u0442"},{id:3,answer:"",english:"Go Up",russian:"\u043F\u043E\u0434\u043D\u044B\u043C\u0430\u0446\u0438\u044F",tajik:"\u0411\u043E\u043B\u043E \u0411\u0430\u0440\u043E\u043C\u0430\u0434\u0430\u043D"},{id:4,answer:"",english:"go down",russian:"\u0412\u043F\u0443\u0441\u0442\u043A\u0430\u0446\u0438\u044F",tajik:"\u0424\u0430\u0440\u043E\u043C\u0430\u0434\u0430\u043D"}];function Bi(n,t){return!n||!t?!1:(n=n.toLocaleLowerCase(),t=t.toLowerCase(),n===t)}export{Ce as a,Se as b,Qt as c,Bt as d,$t as e,mt as f,Ai as g,Pi as h,Li as i,ji as j,Vi as k,Bi as l};
