import{X as j,Z as J,k,an as X,z as $,aB as q,B as G,N as F,a0 as H,p as t,af as W,ap as Z,d as Y,aI as ee,aJ as S,O as te,r as se,o as p,b as C,w as a,q as o,I as ae,aK as K,m as f,C as _,P as le,J as R,c as b,F as D,a as B,H as z,x as w,n as A,K as L,D as Q,R as oe,S as re,G as ne}from"./index-9510cab1.js";import{V as ie,d as T}from"./VCard-b6045d41.js";import{d as ce}from"./VTextField-e056b3b2.js";import{a as ue,V as de}from"./VDivider-9e04f256.js";import{V as N,d as pe,a as U,b as fe}from"./VList-45fa49be.js";import{V as he,a as me}from"./VRow-03043ba9.js";import{m as ve,u as ge,V as M}from"./VOverlay-c50331c2.js";import{f as ye}from"./forwardRefs-a29b5f65.js";import"./VAvatar-afd8700b.js";import"./VImg-ca4c240b.js";import"./transition-82bf665e.js";import"./easing-9f15041e.js";import"./ssrBoot-7be233b5.js";import"./lazy-968f07e2.js";const _e=j()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ve({origin:"center center",scrollStrategy:"block",transition:{component:ue},zIndex:2400})},emits:{"update:modelValue":n=>!0},setup(n,v){let{slots:r}=v;const g=J(n,"modelValue"),{scopeId:E}=ge(),c=k();function u(d){var h,y;const l=d.relatedTarget,i=d.target;if(l!==i&&((h=c.value)!=null&&h.contentEl)&&((y=c.value)!=null&&y.globalTop)&&![document,c.value.contentEl].includes(i)&&!c.value.contentEl.contains(i)){const V=Z(c.value.contentEl);if(!V.length)return;const e=V[0],m=V[V.length-1];l===e?m.focus():e.focus()}}X&&$(()=>g.value&&n.retainFocus,d=>{d?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0}),$(g,async d=>{var l,i;await q(),d?(l=c.value.contentEl)==null||l.focus({preventScroll:!0}):(i=c.value.activatorEl)==null||i.focus({preventScroll:!0})});const P=G(()=>F({"aria-haspopup":"dialog","aria-expanded":String(g.value)},n.activatorProps));return H(()=>{const[d]=M.filterProps(n);return t(M,F({ref:c,class:["v-dialog",{"v-dialog--fullscreen":n.fullscreen,"v-dialog--scrollable":n.scrollable},n.class],style:n.style},d,{modelValue:g.value,"onUpdate:modelValue":l=>g.value=l,"aria-modal":"true",activatorProps:P.value,role:"dialog"},E),{activator:r.activator,default:function(){for(var l=arguments.length,i=new Array(l),h=0;h<l;h++)i[h]=arguments[h];return t(W,{root:!0},{default:()=>{var y;return[(y=r.default)==null?void 0:y.call(r,...i)]}})}})}),ye({},c)}}),O=n=>(oe("data-v-8ed26764"),n=n(),re(),n),be={class:"d-flex align-center text-high-emphasis h-100 me-1"},Ve={class:"d-flex align-center"},xe={class:"h-100"},Se={class:"text-xs text-disabled text-uppercase"},ke={class:"h-100"},Ce={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},De={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},we=O(()=>f("span",null,"No Result For ",-1)),Ie={key:0,class:"mt-8"},Be=O(()=>f("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),$e=["onClick"],Ee={class:"text-sm"},Pe=Y({__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean},searchQuery:null,searchResults:null,suggestions:null,noDataSuggestion:null},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(n,{emit:v}){const r=n,{ctrl_k:g,meta_k:E}=ee({passive:!1,onEventFired(e){e.ctrlKey&&e.key==="k"&&e.type==="keydown"&&e.preventDefault()}}),c=k(),u=k(structuredClone(S(r.searchQuery))),P=k(),d=k(structuredClone(S(r.isDialogVisible))),l=k(structuredClone(S(r.searchResults)));$(r,()=>{d.value=structuredClone(S(r.isDialogVisible)),l.value=structuredClone(S(r.searchResults)),u.value=structuredClone(S(r.searchQuery))}),$([g,E],()=>{d.value=!0,v("update:isDialogVisible",!0)});const i=()=>{v("update:isDialogVisible",!1),v("update:searchQuery","")};te(()=>{u.value.length||(l.value=[])});const h=e=>{var m,I;e.key==="ArrowDown"?(e.preventDefault(),(m=c.value)==null||m.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(I=c.value)==null||I.focus("prev"))},y=e=>{v("update:isDialogVisible",e),v("update:searchQuery","")},V=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,m)=>{const I=se("IconBtn");return p(),C(_e,{"max-width":"600","model-value":o(d),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":y,onKeyup:K(i,["esc"])},{default:a(()=>[t(ie,{height:"100%",width:"100%",class:"position-relative"},{default:a(()=>[t(T,{class:"pt-0",style:{"max-block-size":"65px"}},{default:a(()=>[t(ce,{ref_key:"refSearchInput",ref:P,modelValue:o(u),"onUpdate:modelValue":[m[0]||(m[0]=s=>ae(u)?u.value=s:null),m[1]||(m[1]=s=>e.$emit("update:searchQuery",o(u)))],autofocus:"",density:"comfortable",variant:"plain",class:"app-bar-autocomplete-box",onKeyup:K(i,["esc"]),onKeydown:h},{"prepend-inner":a(()=>[f("div",be,[t(_,{size:"22",icon:"bx-search",style:{opacity:"1"}})])]),"append-inner":a(()=>[f("div",Ve,[f("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:i}," [esc] "),t(I,{onClick:i},{default:a(()=>[t(_,{icon:"bx-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),t(de),t(o(le),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:a(()=>[R(t(o(N),{ref_key:"refSearchList",ref:c,density:"compact",class:"app-bar-search-list"},{default:a(()=>[(p(!0),b(D,null,B(o(l),s=>(p(),b(D,{key:s.title},["header"in s?(p(),C(o(pe),{key:0,class:"text-disabled"},{default:a(()=>[z(w(V(s.title)),1)]),_:2},1024)):A(e.$slots,"searchResult",{key:1,item:s},()=>[t(o(U),{link:"",onClick:x=>e.$emit("itemSelected",s)},{prepend:a(()=>[t(_,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:a(()=>[t(_,{size:"20",icon:"bx-subdirectory-left",class:"enter-icon text-disabled"})]),default:a(()=>[t(fe,null,{default:a(()=>[z(w(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[L,o(u).length&&!!o(l).length]]),R(f("div",xe,[A(e.$slots,"suggestions",{},()=>[t(T,{class:"app-bar-search-suggestions h-100 pa-10"},{default:a(()=>[r.suggestions?(p(),C(he,{key:0,class:"gap-y-4"},{default:a(()=>[(p(!0),b(D,null,B(r.suggestions,s=>(p(),C(me,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:a(()=>[f("p",Se,w(s.title),1),t(o(N),{class:"card-list"},{default:a(()=>[(p(!0),b(D,null,B(s.content,x=>(p(),C(o(U),{key:x.title,link:"",title:x.title,class:"app-bar-search-suggestion",onClick:Re=>e.$emit("itemSelected",x)},{prepend:a(()=>[t(_,{icon:x.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):Q("",!0)]),_:1})],!0)],512),[[L,!!o(l)&&!o(u)]]),R(f("div",ke,[A(e.$slots,"noData",{},()=>[t(T,{class:"h-100"},{default:a(()=>[f("div",Ce,[t(_,{size:"75",icon:"bx-file"}),f("div",De,[we,f("span",null,'"'+w(o(u))+'"',1)]),r.noDataSuggestion?(p(),b("div",Ie,[Be,(p(!0),b(D,null,B(r.noDataSuggestion,s=>(p(),b("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:x=>e.$emit("itemSelected",s)},[t(_,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),f("span",Ee,w(s.title),1)],8,$e))),128))])):Q("",!0)])]),_:1})],!0)],512),[[L,!o(l).length&&o(u).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"])}}});const qe=ne(Pe,[["__scopeId","data-v-8ed26764"]]);export{qe as default};