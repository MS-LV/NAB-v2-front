import{a as ct,b as dt,c as mt,e as ht,f as ut}from"./chunk-MZEUF2V6.js";import{d as pt,e as gt}from"./chunk-4HYGJ6HT.js";import{b as rt,c as at,d as $,g as lt}from"./chunk-G5HDWCXG.js";import{d as st}from"./chunk-3LL73KBO.js";import{c as be,d as oe,f as D,g as ye,h as se}from"./chunk-IX6G3U3V.js";import{$ as ot,A as et,C as _e,E as ne,I as T,M as ve,P as tt,Q as it,_ as nt,b as ie,h as We,n as Xe,q as Ze,r as qe,w as Ke,z as Je}from"./chunk-5375FMKK.js";import{d as Ge,i as Ye,k as Qe,l as Ue}from"./chunk-IAAJW5KY.js";import{$a as J,Db as ee,F as W,Fb as C,Gb as S,H as ce,Hb as b,Ib as je,Jb as fe,Kb as k,Lb as Le,Mb as y,Nb as M,Ob as Be,Pb as w,Qa as _,R as X,Rb as Ne,S as de,Sb as te,T as Z,Tb as g,Vb as $e,Wb as Ve,Xa as v,Ya as l,Z as q,_a as B,aa as f,ab as he,bc as N,ca as H,cb as ue,d as Y,db as Ee,ea as m,fa as u,ga as K,ha as me,hb as pe,i as Q,ib as p,jb as I,k as ae,ka as j,la as L,lb as Pe,ma as Re,n as le,ob as Ae,pb as Fe,qb as Oe,r as De,rb as ze,sb as c,tb as d,ub as ge,y as U,yb as He,z}from"./chunk-DT44F3I4.js";var _t=["*"];var Dt=".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}",Me=class{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){let i=Math.max(...this.tracker);return i>1?this.rowCount+i-1:this.rowCount}update(i,o){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(i),this.tracker.fill(0,0,this.tracker.length),this.positions=o.map(e=>this._trackTile(e))}_trackTile(i){let o=this._findMatchingGap(i.colspan);return this._markTilePosition(o,i),this.columnIndex=o+i.colspan,new we(this.rowIndex,o)}_findMatchingGap(i){i>this.tracker.length;let o=-1,e=-1;do{if(this.columnIndex+i>this.tracker.length){this._nextRow(),o=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(o);continue}if(o=this.tracker.indexOf(0,this.columnIndex),o==-1){this._nextRow(),o=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(o);continue}e=this._findGapEndIndex(o),this.columnIndex=o+1}while(e-o<i||e==0);return Math.max(o,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let i=0;i<this.tracker.length;i++)this.tracker[i]=Math.max(0,this.tracker[i]-1)}_findGapEndIndex(i){for(let o=i+1;o<this.tracker.length;o++)if(this.tracker[o]!=0)return o;return this.tracker.length}_markTilePosition(i,o){for(let e=0;e<o.colspan;e++)this.tracker[i+e]=o.rowspan}},we=class{constructor(i,o){this.row=i,this.col=o}},vt=new f("MAT_GRID_LIST"),Se=(()=>{let i=class i{constructor(e,t){this._element=e,this._gridList=t,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(ie(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(ie(e))}_setStyle(e,t){this._element.nativeElement.style[e]=t}};i.\u0275fac=function(t){return new(t||i)(l(_),l(vt,8))},i.\u0275cmp=u({type:i,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,n){t&2&&p("rowspan",n.rowspan)("colspan",n.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],standalone:!0,features:[g],ngContentSelectors:_t,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,n){t&1&&(S(),c(0,"div",0),b(1),d())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0});let s=i;return s})();var Rt=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,V=class{constructor(){this._rows=0,this._rowspan=0}init(i,o,e,t){this._gutterSize=bt(i),this._rows=o.rowCount,this._rowspan=o.rowspan,this._cols=e,this._direction=t}getBaseTileSize(i,o){return`(${i}% - (${this._gutterSize} * ${o}))`}getTilePosition(i,o){return o===0?"0":x(`(${i} + ${this._gutterSize}) * ${o}`)}getTileSize(i,o){return`(${i} * ${o}) + (${o-1} * ${this._gutterSize})`}setStyle(i,o,e){let t=100/this._cols,n=(this._cols-1)/this._cols;this.setColStyles(i,e,t,n),this.setRowStyles(i,o,t,n)}setColStyles(i,o,e,t){let n=this.getBaseTileSize(e,t),r=this._direction==="rtl"?"right":"left";i._setStyle(r,this.getTilePosition(n,o)),i._setStyle("width",x(this.getTileSize(n,i.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(i){return`${this._rowspan} * ${this.getTileSize(i,1)}`}getComputedHeight(){return null}},xe=class extends V{constructor(i){super(),this.fixedRowHeight=i}init(i,o,e,t){super.init(i,o,e,t),this.fixedRowHeight=bt(this.fixedRowHeight),Rt.test(this.fixedRowHeight)}setRowStyles(i,o){i._setStyle("top",this.getTilePosition(this.fixedRowHeight,o)),i._setStyle("height",x(this.getTileSize(this.fixedRowHeight,i.rowspan)))}getComputedHeight(){return["height",x(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["height",null]),i._tiles&&i._tiles.forEach(o=>{o._setStyle("top",null),o._setStyle("height",null)})}},Ie=class extends V{constructor(i){super(),this._parseRatio(i)}setRowStyles(i,o,e,t){let n=e/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(n,t),i._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,o)),i._setStyle("paddingTop",x(this.getTileSize(this.baseTileHeight,i.rowspan)))}getComputedHeight(){return["paddingBottom",x(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["paddingBottom",null]),i._tiles.forEach(o=>{o._setStyle("marginTop",null),o._setStyle("paddingTop",null)})}_parseRatio(i){let o=i.split(":");o.length,this.rowHeightRatio=parseFloat(o[0])/parseFloat(o[1])}},Ce=class extends V{setRowStyles(i,o){let e=100/this._rowspan,t=(this._rows-1)/this._rows,n=this.getBaseTileSize(e,t);i._setStyle("top",this.getTilePosition(n,o)),i._setStyle("height",x(this.getTileSize(n,i.rowspan)))}reset(i){i._tiles&&i._tiles.forEach(o=>{o._setStyle("top",null),o._setStyle("height",null)})}};function x(s){return`calc(${s})`}function bt(s){return s.match(/([A-Za-z%]+)$/)?s:`${s}px`}var Et="fit",yt=(()=>{let i=class i{constructor(e,t){this._element=e,this._dir=t,this._gutter="1px"}get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(ie(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let t=`${e??""}`;t!==this._rowHeight&&(this._rowHeight=t,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===Et?this._tileStyler=new Ce:e&&e.indexOf(":")>-1?this._tileStyler=new Ie(e):this._tileStyler=new xe(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new Me);let e=this._tileCoordinator,t=this._tiles.filter(r=>!r._gridList||r._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,t),this._tileStyler.init(this.gutterSize,e,this.cols,n),t.forEach((r,a)=>{let h=e.positions[a];this._tileStyler.setStyle(r,h.row,h.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}};i.\u0275fac=function(t){return new(t||i)(l(_),l(ne,8))},i.\u0275cmp=u({type:i,selectors:[["mat-grid-list"]],contentQueries:function(t,n,r){if(t&1&&k(r,Se,5),t&2){let a;y(a=M())&&(n._tiles=a)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,n){t&2&&p("cols",n.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],standalone:!0,features:[te([{provide:vt,useExisting:i}]),g],ngContentSelectors:_t,decls:2,vars:0,template:function(t,n){t&1&&(S(),c(0,"div"),b(1),d())},styles:[Dt],encapsulation:2,changeDetection:0});let s=i;return s})(),Mt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=K({type:i}),i.\u0275inj=q({imports:[ve,T,ve,T]});let s=i;return s})();var jt=["mat-menu-item",""];function Lt(s,i){s&1&&(Re(),c(0,"svg",3),ge(1,"polygon",4),d())}var Bt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Nt=["mat-icon, [matMenuItemIcon]","*"];function $t(s,i){if(s&1){let o=He();c(0,"div",0),ee("keydown",function(t){j(o);let n=C();return L(n._handleKeydown(t))})("click",function(){j(o);let t=C();return L(t.closed.emit("click"))})("@transformMenu.start",function(t){j(o);let n=C();return L(n._onAnimationStart(t))})("@transformMenu.done",function(t){j(o);let n=C();return L(n._onAnimationDone(t))}),c(1,"div",1),b(2),d()()}if(s&2){let o=C();I("id",o.panelId)("ngClass",o._classList)("@transformMenu",o._panelAnimationState),p("aria-label",o.ariaLabel||null)("aria-labelledby",o.ariaLabelledby||null)("aria-describedby",o.ariaDescribedby||null)}}var Vt=["*"],ke=new f("MAT_MENU_PANEL"),G=(()=>{let i=class i{constructor(e,t,n,r,a){this._elementRef=e,this._document=t,this._focusMonitor=n,this._parentMenu=r,this._changeDetectorRef=a,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new Q,this._focused=new Q,this._highlighted=!1,this._triggersSubmenu=!1,r?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};i.\u0275fac=function(t){return new(t||i)(l(_),l(Ge),l(_e),l(ke,8),l(B))},i.\u0275cmp=u({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&ee("click",function(a){return n._checkDisabled(a)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(p("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),Pe("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[m.HasDecoratorInputTransform,"disabled","disabled",N],disableRipple:[m.HasDecoratorInputTransform,"disableRipple","disableRipple",N]},exportAs:["matMenuItem"],standalone:!0,features:[ue,g],attrs:jt,ngContentSelectors:Nt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(S(Bt),b(0),c(1,"span",0),b(2,1),d(),ge(3,"div",1),pe(4,Lt,2,0,":svg:svg",2)),t&2&&(v(3),I("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),v(),Ae(4,n._triggersSubmenu?4:-1))},dependencies:[tt],encapsulation:2,changeDetection:0});let s=i;return s})();var Gt=new f("MatMenuContent");var re={transformMenu:be("transformMenu",[ye("void",D({opacity:0,transform:"scale(0.8)"})),se("void => enter",oe("120ms cubic-bezier(0, 0, 0.2, 1)",D({opacity:1,transform:"scale(1)"}))),se("* => void",oe("100ms 25ms linear",D({opacity:0})))]),fadeInItems:be("fadeInItems",[ye("showing",D({opacity:1})),se("void => *",[D({opacity:0}),oe("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},Vi=re.fadeInItems,Gi=re.transformMenu,Yt=0,Qt=new f("mat-menu-default-options",{providedIn:"root",factory:Ut});function Ut(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var R=(()=>{let i=class i{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){let t=this._previousPanelClass;t&&t.length&&t.split(" ").forEach(n=>{this._classList[n]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(n=>{this._classList[n]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,t,n,r){this._elementRef=e,this._ngZone=t,this._changeDetectorRef=r,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new je,this._classList={},this._panelAnimationState="void",this._animationDone=new Q,this.closed=new J,this.close=this.closed,this.panelId=`mat-menu-panel-${Yt++}`,this.overlayPanelClass=n.overlayPanelClass||"",this._xPosition=n.xPosition,this._yPosition=n.yPosition,this.backdropClass=n.backdropClass,this.overlapTrigger=n.overlapTrigger,this.hasBackdrop=n.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ke(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(X(this._directDescendantItems),de(e=>U(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe(X(this._directDescendantItems),de(t=>U(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Xe(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe(W(1)).subscribe(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){let t=Math.min(this._baseElevation+e,24),n=`${this._elevationPrefix}${t}`,r=Object.keys(this._classList).find(a=>a.startsWith(this._elevationPrefix));(!r||r===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[n]=!0,this._previousElevation=n)}setPositionClasses(e=this.xPosition,t=this.yPosition){let n=this._classList;n["mat-menu-before"]=e==="before",n["mat-menu-after"]=e==="after",n["mat-menu-above"]=t==="above",n["mat-menu-below"]=t==="below",this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(X(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};i.\u0275fac=function(t){return new(t||i)(l(_),l(he),l(Qt),l(B))},i.\u0275cmp=u({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,r){if(t&1&&(k(r,Gt,5),k(r,G,5),k(r,G,4)),t&2){let a;y(a=M())&&(n.lazyContent=a.first),y(a=M())&&(n._allItems=a),y(a=M())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&Le(fe,5),t&2){let r;y(r=M())&&(n.templateRef=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&p("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[m.None,"aria-label","ariaLabel"],ariaLabelledby:[m.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[m.None,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[m.HasDecoratorInputTransform,"overlapTrigger","overlapTrigger",N],hasBackdrop:[m.HasDecoratorInputTransform,"hasBackdrop","hasBackdrop",e=>e==null?null:N(e)],panelClass:[m.None,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[te([{provide:ke,useExisting:i}]),ue,g],ngContentSelectors:Vt,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(S(),pe(0,$t,3,6,"ng-template"))},dependencies:[Ye],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;padding-right:var(--mat-menu-item-spacing);padding-left:0}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[re.transformMenu,re.fadeInItems]},changeDetection:0});let s=i;return s})(),Ct=new f("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let s=H($);return()=>s.scrollStrategies.reposition()}});function Wt(s){return()=>s.scrollStrategies.reposition()}var Xt={provide:Ct,deps:[$],useFactory:Wt},wt=We({passive:!0});var St=(()=>{let i=class i{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,t,n,r,a,h,E,P,A){this._overlay=e,this._element=t,this._viewContainerRef=n,this._menuItemInstance=h,this._dir=E,this._focusMonitor=P,this._ngZone=A,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=Y.EMPTY,this._hoverSubscription=Y.EMPTY,this._menuCloseSubscription=Y.EMPTY,this._changeDetectorRef=H(B),this._handleTouchStart=F=>{et(F)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new J,this.onMenuOpen=this.menuOpened,this.menuClosed=new J,this.onMenuClose=this.menuClosed,this._scrollStrategy=r,this._parentMaterialMenu=a instanceof R?a:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,wt)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,wt),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),n=t.getConfig(),r=n.positionStrategy;this._setPosition(e,r),n.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof R&&(e._startAnimation(),e._directDescendantItems.changes.pipe(Z(e.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof R?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(z(n=>n.toState==="void"),W(1),Z(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let t=0,n=e.parentMenu;for(;n;)t++,n=n.parentMenu;e.setElevation(t)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new at({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{let r=n.connectionPair.overlayX==="start"?"after":"before",a=n.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(r,a)):e.setPositionClasses(r,a)})}_setPosition(e,t){let[n,r]=e.xPosition==="before"?["end","start"]:["start","end"],[a,h]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[E,P]=[a,h],[A,F]=[n,r],O=0;if(this.triggersSubmenu()){if(F=n=e.xPosition==="before"?"start":"end",r=A=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Te=this._parentMaterialMenu.items.first;this._parentInnerPadding=Te?Te._getHostElement().offsetTop:0}O=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(E=a==="top"?"bottom":"top",P=h==="top"?"bottom":"top");t.withPositions([{originX:n,originY:E,overlayX:A,overlayY:a,offsetY:O},{originX:r,originY:E,overlayX:F,overlayY:a,offsetY:O},{originX:n,originY:P,overlayX:A,overlayY:h,offsetY:-O},{originX:r,originY:P,overlayX:F,overlayY:h,offsetY:-O}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:le(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(z(a=>a!==this._menuItemInstance),z(()=>this._menuOpen)):le();return U(e,n,r,t)}_handleMousedown(e){Je(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(z(e=>e===this._menuItemInstance&&!e.disabled),ce(0,ae)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof R&&this.menu._isAnimating?this.menu._animationDone.pipe(W(1),ce(0,ae),Z(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new rt(e.templateRef,this._viewContainerRef)),this._portal}};i.\u0275fac=function(t){return new(t||i)(l($),l(_),l(Ee),l(Ct),l(ke,8),l(G,10),l(ne,8),l(_e),l(he))},i.\u0275dir=me({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&ee("click",function(a){return n._handleClick(a)})("mousedown",function(a){return n._handleMousedown(a)})("keydown",function(a){return n._handleKeydown(a)}),t&2&&p("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[m.None,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[m.None,"matMenuTriggerFor","menu"],menuData:[m.None,"matMenuTriggerData","menuData"],restoreFocus:[m.None,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let s=i;return s})(),kt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=K({type:i}),i.\u0275inj=q({providers:[Xt],imports:[Ue,it,T,lt,st,T]});let s=i;return s})();function qt(s,i){if(s&1&&(c(0,"mat-grid-tile",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),w(4),c(5,"button",5)(6,"mat-icon"),w(7,"more_vert"),d()(),c(8,"mat-menu",6,7)(10,"button",8),w(11,"Expand"),d(),c(12,"button",8),w(13,"Remove"),d()()()(),c(14,"mat-card-content",9)(15,"div"),w(16,"Card Content Here"),d()()()()),s&2){let o=i.$implicit,e=Be(9);I("colspan",o.cols)("rowspan",o.rows),v(4),Ne(" ",o.title," "),v(),I("matMenuTriggerFor",e)}}var sn=(()=>{class s{breakpointObserver=H(Ze);cards=this.breakpointObserver.observe(qe.Handset).pipe(De(({matches:o})=>o?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]));static \u0275fac=function(e){return new(e||s)};static \u0275cmp=u({type:s,selectors:[["app-user-dashboard"]],standalone:!0,features:[g],decls:7,vars:2,consts:[[1,"grid-container"],[1,"mat-h1"],["cols","2","rowHeight","350px"],[3,"colspan","rowspan"],[1,"dashboard-card"],["mat-icon-button","","aria-label","Toggle menu",1,"more-button",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item",""],[1,"dashboard-card-content"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"h1",1),w(2,"Dashboard"),d(),c(3,"mat-grid-list",2),Oe(4,qt,17,4,"mat-grid-tile",3,Fe),$e(6,"async"),d()()),e&2&&(v(4),ze(Ve(6,0,t.cards)))},dependencies:[Qe,Mt,yt,Se,kt,R,G,St,gt,pt,ot,nt,ut,ct,mt,ht,dt],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;inset:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}"]})}return s})();export{sn as UserDashboardComponent};
