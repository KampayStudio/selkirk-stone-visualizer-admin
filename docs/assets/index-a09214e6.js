import{_ as Ve}from"./admin-user.vue_vue_type_style_index_0_lang-b20cf8c2.js";import{a as we,V as ze}from"./VCard-b6045d41.js";import{ah as ve,a1 as ee,a2 as N,a5 as K,ai as Be,X as O,aj as de,ak as Ee,al as fe,k as x,B as b,am as te,an as Ie,z as he,a0 as X,p as v,ao as ne,C as j,ap as Re,aq as $e,Y as Pe,ar as Me,ab as He,M as F,N as q,as as Ae,Z as Oe,at as Xe,a7 as Ye,a8 as $,au as Fe,av as U,aw as me,a6 as Le,ax as We,aa as Ge,J as ge,ay as De,ag as je,az as qe,ae as Ue,aA as Ne,K as Ke,aB as Je,d as Ze,o as ae,c as oe,w as P,q as le,I as se,F as Qe,a as pe,m as et,x as tt,H as nt}from"./index-9510cab1.js";import{a as at,s as ot}from"./easing-9f15041e.js";import{m as lt,u as st}from"./lazy-968f07e2.js";import{M as it}from"./transition-82bf665e.js";import{u as ut}from"./ssrBoot-7be233b5.js";import"./VAvatar-afd8700b.js";import"./VImg-ca4c240b.js";function ie(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function ue(e){let{selectedElement:n,containerSize:t,contentSize:a,isRtl:c,currentScrollOffset:l,isHorizontal:o}=e;const s=o?n.clientWidth:n.clientHeight,u=o?n.offsetLeft:n.offsetTop,r=c&&o?a-u-s:u,f=t+l,C=s+r,S=s*.4;return r<=l?l=Math.max(r-S,0):f<=C&&(l=Math.min(l-(f-C-S),a-t)),l}function ct(e){let{selectedElement:n,containerSize:t,contentSize:a,isRtl:c,isHorizontal:l}=e;const o=l?n.clientWidth:n.clientHeight,s=l?n.offsetLeft:n.offsetTop,u=c&&l?a-s-o/2-t/2:s+o/2-t/2;return Math.min(a-t,Math.max(0,u))}const rt=Symbol.for("vuetify:v-slide-group"),ye=ve({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:rt},nextIcon:{type:ee,default:"$next"},prevIcon:{type:ee,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...N(),...K(),...Be({selectedClass:"v-slide-group-item--active"})},"v-slide-group"),ce=O()({name:"VSlideGroup",props:ye(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isRtl:a}=de(),{mobile:c}=Ee(),l=fe(e,e.symbol),o=x(!1),s=x(0),u=x(0),r=x(0),f=b(()=>e.direction==="horizontal"),{resizeRef:C,contentRect:S}=te(),{resizeRef:m,contentRect:g}=te(),B=b(()=>l.selected.value.length?l.items.value.findIndex(i=>i.id===l.selected.value[0]):-1),I=b(()=>l.selected.value.length?l.items.value.findIndex(i=>i.id===l.selected.value[l.selected.value.length-1]):-1);if(Ie){let i=-1;he(()=>[l.selected.value,S.value,g.value,f.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(S.value&&g.value){const d=f.value?"width":"height";u.value=S.value[d],r.value=g.value[d],o.value=u.value+1<r.value}if(B.value>=0&&m.value){const d=m.value.children[I.value];B.value===0||!o.value?s.value=0:e.centerActive?s.value=ct({selectedElement:d,containerSize:u.value,contentSize:r.value,isRtl:a.value,isHorizontal:f.value}):o.value&&(s.value=ue({selectedElement:d,containerSize:u.value,contentSize:r.value,isRtl:a.value,currentScrollOffset:s.value,isHorizontal:f.value}))}})})}const E=x(!1);let _=0,V=0;function h(i){const d=f.value?"clientX":"clientY";V=(a.value&&f.value?-1:1)*s.value,_=i.touches[0][d],E.value=!0}function y(i){if(!o.value)return;const d=f.value?"clientX":"clientY",z=a.value&&f.value?-1:1;s.value=z*(V+_-i.touches[0][d])}function T(i){const d=r.value-u.value;s.value<0||!o.value?s.value=0:s.value>=d&&(s.value=d),E.value=!1}function w(){C.value&&(C.value[f.value?"scrollLeft":"scrollTop"]=0)}const M=x(!1);function L(i){if(M.value=!0,!(!o.value||!m.value)){for(const d of i.composedPath())for(const z of m.value.children)if(z===d){s.value=ue({selectedElement:z,containerSize:u.value,contentSize:r.value,isRtl:a.value,currentScrollOffset:s.value,isHorizontal:f.value});return}}}function R(i){M.value=!1}function W(i){var d;!M.value&&!(i.relatedTarget&&((d=m.value)!=null&&d.contains(i.relatedTarget)))&&k()}function J(i){m.value&&(f.value?i.key==="ArrowRight"?k(a.value?"prev":"next"):i.key==="ArrowLeft"&&k(a.value?"next":"prev"):i.key==="ArrowDown"?k("next"):i.key==="ArrowUp"&&k("prev"),i.key==="Home"?k("first"):i.key==="End"&&k("last"))}function k(i){var d,z,Z,Q,p;if(m.value)if(!i)(d=Re(m.value)[0])==null||d.focus();else if(i==="next"){const H=(z=m.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;H?H.focus():k("first")}else if(i==="prev"){const H=(Z=m.value.querySelector(":focus"))==null?void 0:Z.previousElementSibling;H?H.focus():k("last")}else i==="first"?(Q=m.value.firstElementChild)==null||Q.focus():i==="last"&&((p=m.value.lastElementChild)==null||p.focus())}function A(i){const d=s.value+(i==="prev"?-1:1)*u.value;s.value=$e(d,0,r.value-u.value)}const Y=b(()=>{let i=s.value>r.value-u.value?-(r.value-u.value)+ie(r.value-u.value-s.value):-s.value;s.value<=0&&(i=ie(-s.value));const d=a.value&&f.value?-1:1;return{transform:`translate${f.value?"X":"Y"}(${d*i}px)`,transition:E.value?"none":"",willChange:E.value?"transform":""}}),G=b(()=>({next:l.next,prev:l.prev,select:l.select,isSelected:l.isSelected})),D=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!c.value;case!0:return o.value||Math.abs(s.value)>0;case"mobile":return c.value||o.value||Math.abs(s.value)>0;default:return!c.value&&(o.value||Math.abs(s.value)>0)}}),ke=b(()=>Math.abs(s.value)>0),_e=b(()=>r.value>Math.abs(s.value)+u.value);return X(()=>v(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":D.value,"v-slide-group--is-overflowing":o.value},e.class],style:e.style,tabindex:M.value||l.selected.value.length?-1:0,onFocus:W},{default:()=>{var i,d,z;return[D.value&&v("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ke.value}],onClick:()=>A("prev")},[((i=t.prev)==null?void 0:i.call(t,G.value))??v(ne,null,{default:()=>[v(j,{icon:a.value?e.nextIcon:e.prevIcon},null)]})]),v("div",{key:"container",ref:C,class:"v-slide-group__container",onScroll:w},[v("div",{ref:m,class:"v-slide-group__content",style:Y.value,onTouchstartPassive:h,onTouchmovePassive:y,onTouchendPassive:T,onFocusin:L,onFocusout:R,onKeydown:J},[(d=t.default)==null?void 0:d.call(t,G.value)])]),D.value&&v("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!_e.value}],onClick:()=>A("next")},[((z=t.next)==null?void 0:z.call(t,G.value))??v(ne,null,{default:()=>[v(j,{icon:a.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:l.selected,scrollTo:A,scrollOffset:s,focus:k}}});const be=Symbol.for("vuetify:v-tabs"),Se=O()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Pe(Me({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,n){let{slots:t,attrs:a}=n;const{textColorClasses:c,textColorStyles:l}=He(e,"sliderColor"),o=b(()=>e.direction==="horizontal"),s=x(!1),u=x(),r=x();function f(C){var m,g;let{value:S}=C;if(s.value=S,S){const B=(g=(m=u.value)==null?void 0:m.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),I=r.value;if(!B||!I)return;const E=getComputedStyle(B).color,_=B.getBoundingClientRect(),V=I.getBoundingClientRect(),h=o.value?"x":"y",y=o.value?"X":"Y",T=o.value?"right":"bottom",w=o.value?"width":"height",M=_[h],L=V[h],R=M>L?_[T]-V[T]:_[h]-V[h],W=Math.sign(R)>0?o.value?"right":"bottom":Math.sign(R)<0?o.value?"left":"top":"center",k=(Math.abs(R)+(Math.sign(R)<0?_[w]:V[w]))/Math.max(_[w],V[w]),A=_[w]/V[w],Y=1.5;at(I,{backgroundColor:[E,""],transform:[`translate${y}(${R}px) scale${y}(${A})`,`translate${y}(${R/Y}px) scale${y}(${(k-1)/Y+1})`,""],transformOrigin:Array(3).fill(W)},{duration:225,easing:ot})}}return X(()=>{const[C]=F.filterProps(e);return v(F,q({symbol:be,ref:u,class:["v-tab",e.class],style:e.style,tabindex:s.value?0:-1,role:"tab","aria-selected":String(s.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},C,a,{"onGroup:selected":f}),{default:()=>{var S;return[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&v("div",{ref:r,class:["v-tab__slider",c.value],style:l.value},null)]}})}),{}}});function vt(e){return e?e.map(n=>typeof n=="string"?{title:n,value:n}:n):[]}const dt=O()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ye({mandatory:"force"}),...Ae(),...K()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=Oe(e,"modelValue"),c=b(()=>vt(e.items)),{densityClasses:l}=Xe(e),{backgroundColorClasses:o,backgroundColorStyles:s}=Ye($(e,"bgColor"));return Fe({VTab:{color:$(e,"color"),direction:$(e,"direction"),stacked:$(e,"stacked"),fixed:$(e,"fixedTabs"),sliderColor:$(e,"sliderColor"),hideSlider:$(e,"hideSlider")}}),X(()=>{const[u]=ce.filterProps(e);return v(ce,q(u,{modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,o.value,e.class],style:[{"--v-tabs-height":U(e.height)},s.value,e.style],role:"tablist",symbol:be}),{default:()=>[t.default?t.default():c.value.map(r=>v(Se,q(r,{key:r.title}),null))]})}),{}}});const ft=e=>{const{touchstartX:n,touchendX:t,touchstartY:a,touchendY:c}=e,l=.5,o=16;e.offsetX=t-n,e.offsetY=c-a,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&t<n-o&&e.left(e),e.right&&t>n+o&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&c<a-o&&e.up(e),e.down&&c>a+o&&e.down(e))};function ht(e,n){var a;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(a=n.start)==null||a.call(n,{originalEvent:e,...n})}function mt(e,n){var a;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(a=n.end)==null||a.call(n,{originalEvent:e,...n}),ft(n)}function gt(e,n){var a;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(a=n.move)==null||a.call(n,{originalEvent:e,...n})}function yt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>ht(t,n),touchend:t=>mt(t,n),touchmove:t=>gt(t,n)}}function bt(e,n){var s;const t=n.value,a=t!=null&&t.parent?e.parentElement:e,c=(t==null?void 0:t.options)??{passive:!0},l=(s=n.instance)==null?void 0:s.$.uid;if(!a||!l)return;const o=yt(n.value);a._touchHandlers=a._touchHandlers??Object.create(null),a._touchHandlers[l]=o,me(o).forEach(u=>{a.addEventListener(u,o[u],c)})}function St(e,n){var l,o;const t=(l=n.value)!=null&&l.parent?e.parentElement:e,a=(o=n.instance)==null?void 0:o.$.uid;if(!(t!=null&&t._touchHandlers)||!a)return;const c=t._touchHandlers[a];me(c).forEach(s=>{t.removeEventListener(s,c[s])}),delete t._touchHandlers[a]}const xe={mounted:bt,unmounted:St},xt=xe,Ce=Symbol.for("vuetify:v-window"),Te=Symbol.for("vuetify:v-window-group"),Ct=ve({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...N(),...K(),...Le()},"v-window"),Tt=O()({name:"VWindow",directives:{Touch:xe},props:Ct(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:a}=We(e),{isRtl:c}=de(),{t:l}=Ge(),o=fe(e,Te),s=x(),u=b(()=>c.value?!e.reverse:e.reverse),r=x(!1),f=b(()=>{const h=e.direction==="vertical"?"y":"x",T=(u.value?!r.value:r.value)?"-reverse":"";return`v-window-${h}${T}-transition`}),C=x(0),S=x(void 0),m=b(()=>o.items.value.findIndex(h=>o.selected.value.includes(h.id)));he(m,(h,y)=>{const T=o.items.value.length,w=T-1;T<=2?r.value=h<y:h===w&&y===0?r.value=!0:h===0&&y===w?r.value=!1:r.value=h<y}),je(Ce,{transition:f,isReversed:r,transitionCount:C,transitionHeight:S,rootRef:s});const g=b(()=>e.continuous||m.value!==0),B=b(()=>e.continuous||m.value!==o.items.value.length-1);function I(){g.value&&o.prev()}function E(){B.value&&o.next()}const _=b(()=>{const h=[],y={icon:c.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:o.prev,ariaLabel:l("$vuetify.carousel.prev")};h.push(g.value?t.prev?t.prev({props:y}):v(F,y,null):v("div",null,null));const T={icon:c.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:o.next,ariaLabel:l("$vuetify.carousel.next")};return h.push(B.value?t.next?t.next({props:T}):v(F,T,null):v("div",null,null)),h}),V=b(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?I():E()},right:()=>{u.value?E():I()},start:y=>{let{originalEvent:T}=y;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>ge(v(e.tag,{ref:s,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},a.value,e.class],style:e.style},{default:()=>{var h,y;return[v("div",{class:"v-window__container",style:{height:S.value}},[(h=t.default)==null?void 0:h.call(t,{group:o}),e.showArrows!==!1&&v("div",{class:"v-window__controls"},[_.value])]),(y=t.additional)==null?void 0:y.call(t,{group:o})]}}),[[De("touch"),V.value]])),{group:o}}}),re=O()({name:"VWindowItem",directives:{Touch:xt},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...N(),...qe(),...lt()},emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const a=Ue(Ce),c=Ne(e,Te),{isBooted:l}=ut();if(!a||!c)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=x(!1),s=b(()=>a.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function u(){!o.value||!a||(o.value=!1,a.transitionCount.value>0&&(a.transitionCount.value-=1,a.transitionCount.value===0&&(a.transitionHeight.value=void 0)))}function r(){var g;o.value||!a||(o.value=!0,a.transitionCount.value===0&&(a.transitionHeight.value=U((g=a.rootRef.value)==null?void 0:g.clientHeight)),a.transitionCount.value+=1)}function f(){u()}function C(g){o.value&&Je(()=>{!s.value||!o.value||!a||(a.transitionHeight.value=U(g.clientHeight))})}const S=b(()=>{const g=a.isReversed.value?e.reverseTransition:e.transition;return s.value?{name:typeof g!="string"?a.transition.value:g,onBeforeEnter:r,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:r,onAfterLeave:u,onLeaveCancelled:f,onEnter:C}:!1}),{hasContent:m}=st(e,c.isSelected);return X(()=>v(it,{transition:S.value,disabled:!l.value},{default:()=>{var g;return[ge(v("div",{class:["v-window-item",c.selectedClass.value,e.class],style:e.style},[m.value&&((g=t.default)==null?void 0:g.call(t))]),[[Ke,c.isSelected.value]])]}})),{}}}),$t=Ze({__name:"index",setup(e){const n=x(),t=[{icon:"bx-lock-alt",title:"admin user permission"},{icon:"bx-user",title:"client management"}];return(a,c)=>(ae(),oe("section",null,[v(ze,null,{default:P(()=>[v(we,null,{default:P(()=>[v(dt,{modelValue:le(n),"onUpdate:modelValue":c[0]||(c[0]=l=>se(n)?n.value=l:null),class:"v-tabs-pill"},{default:P(()=>[(ae(),oe(Qe,null,pe(t,l=>v(Se,{key:l.icon},{default:P(()=>[v(j,{start:"",size:20,icon:l.icon},null,8,["icon"]),et("span",null,tt(l.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),v(Tt,{modelValue:le(n),"onUpdate:modelValue":c[1]||(c[1]=l=>se(n)?n.value=l:null),class:"mt-6"},{default:P(()=>[v(re,null,{default:P(()=>[v(Ve)]),_:1}),v(re,null,{default:P(()=>[nt(" ClientTable ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}});export{$t as default};