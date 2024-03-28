import{a as _e,b as ve}from"./chunk-E35UKWKH.js";import{a as ge,b as Ce}from"./chunk-L7KWFQ63.js";import{c as ye}from"./chunk-PDZQRTKO.js";import{a as fe,b as he}from"./chunk-63RDIWL2.js";import{a as A,b as H,c as L,d as $,e as V,f as Z,g as K,i as W,j as Y}from"./chunk-5T3TB65H.js";import{a as j,b as B}from"./chunk-HUTK6EHL.js";import{a as de,b as ce,g as pe,h as ue}from"./chunk-EQAJC5UM.js";import{b as Q,c as h,e as X,f as ee,g as te,i as y,j as ie,k as oe,m as ne,n as re,o as ae,p as le,s as me,t as se}from"./chunk-MMIMV4VM.js";import"./chunk-JGYM447R.js";import{ba as z,ca as U,da as J}from"./chunk-T64YYN4T.js";import"./chunk-IA3BZISK.js";import{$ as O,$a as g,Fb as f,Hb as R,Rb as a,Sb as G,Wb as k,Xa as p,_ as x,_a as l,ca as E,cb as I,da as S,db as P,ga as v,ha as T,ia as w,ja as F,kb as C,kc as q,mb as s,rb as u,tb as D,ub as N,vb as n,wb as r,xb as c}from"./chunk-74OYWV7B.js";var M=class{constructor(e,d){this._document=d;let i=this._textarea=this._document.createElement("textarea"),t=i.style;t.position="fixed",t.top=t.opacity="0",t.left="-999em",i.setAttribute("aria-hidden","true"),i.value=e,i.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(i)}copy(){let e=this._textarea,d=!1;try{if(e){let i=this._document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),d=this._document.execCommand("copy"),i&&i.focus()}}catch{}return d}destroy(){let e=this._textarea;e&&(e.remove(),this._textarea=void 0)}},Oe=(()=>{let e=class e{constructor(i){this._document=i}copy(i){let t=this.beginCopy(i),m=t.copy();return t.destroy(),m}beginCopy(i){return new M(i,this._document)}};e.\u0275fac=function(t){return new(t||e)(S(q))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})(),Ee=new E("CDK_COPY_TO_CLIPBOARD_CONFIG"),Me=(()=>{let e=class e{constructor(i,t,m){this._clipboard=i,this._ngZone=t,this.text="",this.attempts=1,this.copied=new I,this._pending=new Set,m&&m.attempts!=null&&(this.attempts=m.attempts)}copy(i=this.attempts){if(i>1){let t=i,m=this._clipboard.beginCopy(this.text);this._pending.add(m);let _=()=>{let b=m.copy();!b&&--t&&!this._destroyed?this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(_,1)):(this._currentTimeout=null,this._pending.delete(m),m.destroy(),this.copied.emit(b))};_()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(i=>i.destroy()),this._pending.clear(),this._destroyed=!0}};e.\u0275fac=function(t){return new(t||e)(g(Oe),g(P),g(Ee,8))},e.\u0275dir=F({type:e,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(t,m){t&1&&f("click",function(){return m.copy()})},inputs:{text:[v.None,"cdkCopyToClipboard","text"],attempts:[v.None,"cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"},standalone:!0});let o=e;return o})(),be=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=w({type:e}),e.\u0275inj=O({});let o=e;return o})();var Te=(o,e)=>e.name;function we(o,e){o&1&&(n(0,"mat-error"),a(1,"first name is "),n(2,"strong"),a(3,"required"),r()())}function Fe(o,e){o&1&&(n(0,"mat-error"),a(1,"last name is "),n(2,"strong"),a(3,"required"),r()())}function Ie(o,e){o&1&&(n(0,"mat-error"),a(1,"email name is "),n(2,"strong"),a(3,"required"),r()())}function Pe(o,e){o&1&&(n(0,"mat-error"),a(1,"incorrect syntax "),n(2,"strong"),a(3,"email"),r()())}function De(o,e){if(o&1&&(n(0,"option",19),a(1),r()),o&2){let d=e.$implicit,i=R();s("value",i.emailField()[0]+d.value),l(),G(d.name)}}var mt=(()=>{class o{tiles=[{text:"One",cols:3,rows:1,color:"lightblue"},{text:"Two",cols:1,rows:2,color:"lightgreen"},{text:"Three",cols:1,rows:1,color:"lightpink"},{text:"Four",cols:2,rows:1,color:"#DDBDF1"}];formGroup=new te({firstName:new y("Mumina",[h.required]),lastName:new y("Soliev",[h.required]),email:new y("msolieva@gmail.com",[h.required,h.email]),description:new y("Description about student")});emailTypes=p([{name:"Gmail",value:"@gmail.com"},{name:"Email",value:"@email.ru"}]);formChanges$;emailField=p([""]);isReadOnly=p(!0);isFormChanges=p(!1);ngOnInit(){this.formChanges$=this.formGroup.valueChanges.subscribe(()=>{this.isFormChanges.set(!0)})}onEmailInput(){if(!this.formGroup.get("email").value){this.emailField.set([""]);return}let i=this.formGroup.get("email").value.match(new RegExp(/^\w+/));this.emailField.set(i)}ngOnDestroy(){this.formChanges$.unsubscribe()}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=T({type:o,selectors:[["app-profile"]],standalone:!0,features:[k],decls:57,vars:16,consts:[[1,"example-form",3,"formGroup"],[1,"example-card"],["id","user_photo","type","file","hidden",""],["mat-card-avatar","","for","user_photo"],["src","assets/favicon.png"],[1,"hover-icon"],[1,"card-right"],["mat-mini-fab","",3,"color","disableRipple","click"],["mat-icon-button","",1,"copy-button",3,"disableRipple","cdkCopyToClipboard"],[1,"example-full-width"],["matInput","","formControlName","firstName","required","",3,"readonly"],["matInput","","formControlName","lastName","required","",3,"readonly"],[1,"email-field"],["matInput","","type","email","formControlName","email","list","emailTypes","required","","placeholder","example@gmail.com",3,"readonly","input"],["matInput","","formControlName","description","placeholder","Write about youself",3,"readonly"],["mat-icon-button","","type","submit","color","primary",3,"disabled","disableRipple"],["mat-icon-button","","color","warn",3,"disableRipple"],["mode","indeterminate"],["id","emailTypes"],[3,"value"]],template:function(i,t){i&1&&(n(0,"form",0)(1,"mat-card",1)(2,"mat-card-header"),c(3,"input",2),n(4,"label",3),c(5,"img",4),n(6,"div",5)(7,"mat-icon"),a(8,"edit"),r()()(),n(9,"mat-card-title"),a(10,"Mumina Solieva"),r(),n(11,"mat-card-title",6)(12,"button",7),f("click",function(){return t.isReadOnly.set(!t.isReadOnly())}),n(13,"mat-icon"),a(14,"edit"),r()()(),n(15,"mat-card-subtitle"),a(16," ID: a562swd2ql109 "),n(17,"button",8)(18,"mat-icon"),a(19,"content_copy"),r()()()(),n(20,"mat-card-content")(21,"div")(22,"mat-form-field",9)(23,"mat-label"),a(24,"First name"),r(),c(25,"input",10),C(26,we,4,0,"mat-error"),r(),n(27,"mat-form-field",9)(28,"mat-label"),a(29,"Last Name"),r(),c(30,"input",11),C(31,Fe,4,0,"mat-error"),r()(),n(32,"div")(33,"mat-form-field",12)(34,"mat-label"),a(35,"Email"),r(),n(36,"input",13),f("input",function(){return t.onEmailInput()}),r(),C(37,Ie,4,0,"mat-error")(38,Pe,4,0,"mat-error"),r()(),n(39,"p")(40,"mat-form-field",9)(41,"mat-label"),a(42,"Description"),r(),c(43,"textarea",14),r()(),c(44,"mat-divider"),r(),n(45,"mat-card-actions")(46,"button",15)(47,"mat-icon"),a(48,"save"),r()(),n(49,"button",16)(50,"mat-icon"),a(51,"delete"),r()()(),n(52,"mat-card-footer"),c(53,"mat-progress-bar",17),r()()(),n(54,"datalist",18),D(55,De,2,2,"option",19,Te),r()),i&2&&(s("formGroup",t.formGroup),l(12),s("color",t.isReadOnly()?"":"primary")("disableRipple",!0),l(5),s("disableRipple",!0)("cdkCopyToClipboard","Hello World !"),l(8),s("readonly",t.isReadOnly()),l(),u(26,t.formGroup.controls.firstName.hasError("required")?26:-1),l(4),s("readonly",t.isReadOnly()),l(),u(31,t.formGroup.controls.lastName.hasError("required")?31:-1),l(5),s("readonly",t.isReadOnly()),l(),u(37,t.formGroup.controls.email.hasError("required")?37:-1),l(),u(38,t.formGroup.controls.email.hasError("email")?38:-1),l(5),s("readonly",t.isReadOnly()),l(3),s("disabled",!t.isFormChanges()||t.formGroup.invalid)("disableRipple",!0),l(3),s("disableRipple",!0),l(6),N(t.emailTypes()))},dependencies:[ye,Y,A,V,W,L,K,Z,$,H,B,j,be,Me,J,U,z,Ce,ge,ve,_e,me,ie,re,ae,Q,X,ee,le,ue,pe,de,ce,he,fe,se,oe,ne],styles:["[_nghost-%COMP%]{flex:0 0 100vw;overflow-x:hidden}@media screen and (min-width: 960px){[_nghost-%COMP%]{flex:1 1 auto}}form[_ngcontent-%COMP%]{max-width:700px;margin:0 auto}.copy-icon[_ngcontent-%COMP%]{font-size:15px;height:15px;width:15px}mat-form-field[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]{width:100%}mat-card-title[_ngcontent-%COMP%]{display:inline}mat-card-header[_ngcontent-%COMP%]     .mat-mdc-card-header-text{width:100%}.card-right[_ngcontent-%COMP%]{position:absolute;top:15px;right:15px}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;column-gap:8px}label[for=user_photo][_ngcontent-%COMP%]{position:relative}label[for=user_photo][_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}label[for=user_photo][_ngcontent-%COMP%]:hover   .hover-icon[_ngcontent-%COMP%]{opacity:1}.hover-icon[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;border-radius:50%;background:#00000080;color:#fff;opacity:0;transition:.3s}"]})}return o})();export{mt as ProfileComponent};