import{a as L,b as D,c as F}from"./chunk-YJQD3TDD.js";import{a as A,b as N,c as q,d as G,e as J,i as K,j as Q,k as U,m as W}from"./chunk-JGHHHAIN.js";import"./chunk-QKKWBEOD.js";import"./chunk-BDAXTMBS.js";import"./chunk-IX6G3U3V.js";import{a as H,b as V}from"./chunk-BQSAQE75.js";import"./chunk-OXHSPE26.js";import{$ as z,_ as j,q as R,r as $}from"./chunk-FKT3LZ2Q.js";import{k as B}from"./chunk-WZK2W6NX.js";import{Eb as P,K as x,P as M,Pb as E,Qb as o,Rb as u,Ua as v,Ub as O,V as b,Wb as k,Xb as I,Ya as m,Yb as T,ca as c,fa as g,ka as _,kb as p,la as C,r as h,rb as w,sb as y,tb as e,ub as i,vb as d,zb as S}from"./chunk-S637TPFO.js";var Y=(t,l)=>l.path,Z=t=>[t];function tt(t,l){if(t&1&&(e(0,"mat-list-item",9)(1,"div",10)(2,"mat-icon",11),o(3),i(),e(4,"span"),o(5),i()()()),t&2){let n=l.$implicit;m(),p("routerLink",k(3,Z,n.path)),m(2),u(n.data.icon),m(2),u(n.title)}}function et(t,l){t&1&&o(0," Empty list of links ")}var gt=(()=>{class t{routerPaths=v([]);breakpointObserver=c(R);router=c(D);isHandset$=this.breakpointObserver.observe($.Handset).pipe(h(n=>n.matches),M(),x(),b(n=>{console.log(n)}));constructor(){}ngOnInit(){let r=this.router.config.find(a=>a.path==="student").children.map(({title:a,path:s,data:f})=>({title:a,path:s,data:f}));this.routerPaths.set(r),console.log(this.router.config)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=g({type:t,selectors:[["app-student"]],standalone:!0,features:[O],decls:23,vars:4,consts:[["color","primary"],["mat-icon-button","","aria-label","Example icon-button with menu icon",3,"click"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["autosize",""],["color","primary","mode","side",1,"sidenav",3,"opened"],["drawer",""],["role","list"],["role","listitem"],[1,"menu-item",2,"color","#fff",3,"routerLink"],["aria-hidden","false","aria-label","Example home icon"]],template:function(r,a){if(r&1){let s=S();e(0,"mat-toolbar",0)(1,"button",1),P("click",function(){_(s);let X=E(15);return C(X.toggle())}),e(2,"mat-icon"),o(3,"menu"),i()(),e(4,"span"),o(5,"NAB English Center"),i(),d(6,"span",2),e(7,"button",3)(8,"mat-icon"),o(9,"favorite"),i()(),e(10,"button",4)(11,"mat-icon"),o(12,"share"),i()()(),e(13,"mat-drawer-container",5)(14,"mat-drawer",6,7),I(16,"async"),e(17,"mat-list",8),w(18,tt,6,5,"mat-list-item",9,Y,!1,et,1,0),i()(),e(21,"mat-drawer-content"),d(22,"router-outlet"),i()()}r&2&&(m(14),p("opened",!T(16,2,a.isHandset$)),m(4),y(a.routerPaths()))},dependencies:[L,F,B,V,H,z,j,N,A,K,G,J,q,W,Q,U],styles:["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.app[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-drawer-container[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav[_ngcontent-%COMP%]{background:var(--prime-color)}.mat-list-item[_ngcontent-%COMP%]{color:#fff}mat-drawer[_ngcontent-%COMP%]{max-width:50%;width:200px}mat-drawer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;display:block}.menu-item[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:18px;color:#fff;column-gap:10px}"]})}return t})();export{gt as StudentComponent};
