import{a as $,b as Q,c as ee,d as te,e as ae,f as ie}from"./chunk-4MMQ7NMZ.js";import{a as X,b as Z}from"./chunk-XCZBFGWS.js";import{a as J,b as j,c as z}from"./chunk-KGADN7Y7.js";import"./chunk-FLMERCWH.js";import"./chunk-AHG63ODL.js";import{a as B,b as Y}from"./chunk-S6JEOI43.js";import{b as H,c as U,f as K}from"./chunk-CADHQ57D.js";import"./chunk-VL7HPT3S.js";import{b as O,c as r,e as q,f as V,j as D,k as P,l as k,n as L,o as R,q as G,r as W}from"./chunk-U3P7IDEJ.js";import"./chunk-JGYM447R.js";import{V as F,_ as T,aa as w}from"./chunk-MLEJXZCF.js";import"./chunk-GZ2XQQWG.js";import{Ab as _,Fb as c,Hb as I,Qb as x,Rb as i,Sb as y,Tb as E,Wb as A,Za as o,da as f,ga as C,jb as d,la as S,lb as u,ma as g,qb as s,rb as M,sb as h,tb as N,ub as e,vb as t,wb as l}from"./chunk-T2GDAYGO.js";function ne(a,m){a&1&&(e(0,"mat-error"),i(1,"First name is "),e(2,"strong"),i(3,"required"),t()())}function re(a,m){a&1&&(e(0,"mat-error"),i(1,"Last name is "),e(2,"strong"),i(3,"required"),t()())}function oe(a,m){a&1&&(e(0,"mat-error"),i(1,"Address is "),e(2,"strong"),i(3,"required"),t()())}function me(a,m){a&1&&(e(0,"mat-form-field",4),l(1,"textarea",20),t())}function le(a,m){if(a&1){let b=_();e(0,"button",21),c("click",function(){S(b);let n=I();return g(n.hasUnitNumber=!n.hasUnitNumber)}),i(1," + Add C/O, Apt, Suite, Unit "),t()}}function de(a,m){a&1&&(e(0,"mat-error"),i(1,"City is "),e(2,"strong"),i(3,"required"),t()())}function se(a,m){if(a&1&&(e(0,"mat-option",22),i(1),t()),a&2){let b=m.$implicit;u("value",b.abbreviation),o(),y(b.name)}}function be(a,m){a&1&&(e(0,"mat-error"),i(1,"State is "),e(2,"strong"),i(3,"required"),t()())}var Fe=(()=>{class a{fb=f(G);addressForm=this.fb.group({company:null,firstName:[null,r.required],lastName:[null,r.required],address:[null,r.required],address2:null,city:[null,r.required],state:[null,r.required],postalCode:[null,r.compose([r.required,r.minLength(5),r.maxLength(5)])],shipping:["free",r.required]});hasUnitNumber=!1;states=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}];onSubmit(){alert("Thanks!")}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=C({type:a,selectors:[["app-sign-in"]],standalone:!0,features:[A],decls:58,vars:8,consts:[["novalidate","",3,"formGroup","ngSubmit"],[1,"shipping-card"],[1,"row"],[1,"col"],[1,"full-width"],["matInput","","placeholder","Company","formControlName","company"],["matInput","","placeholder","First name","formControlName","firstName"],["matInput","","placeholder","Last name","formControlName","lastName"],["matInput","","placeholder","Address","formControlName","address"],["class","full-width"],["matInput","","placeholder","City","formControlName","city"],["placeholder","State","formControlName","state"],["matInput","","maxlength","5","placeholder","Postal Code","type","number","formControlName","postalCode"],["postalCode",""],["align","end"],["formControlName","shipping"],["value","free"],["value","priority"],["value","nextday"],["mat-raised-button","","color","primary","type","submit"],["matInput","","placeholder","Address 2","formControlName","address2"],["mat-button","","type","button",3,"click"],[3,"value"]],template:function(p,n){if(p&1&&(e(0,"form",0),c("ngSubmit",function(){return n.onSubmit()}),e(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),i(4,"Shipping Information"),t()(),e(5,"mat-card-content")(6,"div",2)(7,"div",3)(8,"mat-form-field",4),l(9,"input",5),t()()(),e(10,"div",2)(11,"div",3)(12,"mat-form-field",4),l(13,"input",6),d(14,ne,4,0,"mat-error"),t()(),e(15,"div",3)(16,"mat-form-field",4),l(17,"input",7),d(18,re,4,0,"mat-error"),t()()(),e(19,"div",2)(20,"div",3)(21,"mat-form-field",4),l(22,"textarea",8),d(23,oe,4,0,"mat-error"),t()()(),e(24,"div",2)(25,"div",3),d(26,me,2,0,"mat-form-field",9)(27,le,2,0),t()(),e(28,"div",2)(29,"div",3)(30,"mat-form-field",4),l(31,"input",10),d(32,de,4,0,"mat-error"),t()(),e(33,"div",3)(34,"mat-form-field",4)(35,"mat-select",11),h(36,se,2,2,"mat-option",22,M),t(),d(38,be,4,0,"mat-error"),t()()(),e(39,"div",2)(40,"div",3)(41,"mat-form-field",4),l(42,"input",12,13),e(44,"mat-hint",14),i(45),t()()()(),e(46,"div",2)(47,"div",3)(48,"mat-radio-group",15)(49,"mat-radio-button",16),i(50,"Free Shipping"),t(),e(51,"mat-radio-button",17),i(52,"Priority Shipping"),t(),e(53,"mat-radio-button",18),i(54,"Next Day Shipping"),t()()()()(),e(55,"mat-card-actions")(56,"button",19),i(57,"Submit"),t()()()()),p&2){let v=x(43);u("formGroup",n.addressForm),o(14),s(14,n.addressForm.controls.firstName.hasError("required")?14:-1),o(4),s(18,n.addressForm.controls.lastName.hasError("required")?18:-1),o(5),s(23,n.addressForm.controls.address.hasError("required")?23:-1),o(3),s(26,n.hasUnitNumber?26:27),o(6),s(32,n.addressForm.controls.city.hasError("required")?32:-1),o(4),N(n.states),o(2),s(38,n.addressForm.controls.state.hasError("required")?38:-1),o(7),E("",v.value.length," / 5")}},dependencies:[Y,B,K,U,H,w,T,Z,X,F,z,J,j,ie,$,te,ee,ae,Q,W,D,O,P,q,V,R,k,L],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.col[_ngcontent-%COMP%]{flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}"]})}return a})();export{Fe as SignInComponent};
