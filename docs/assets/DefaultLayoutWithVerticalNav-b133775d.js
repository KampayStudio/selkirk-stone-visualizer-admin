import{d as b,y as g,t as x,i as y,k,z as C,A as V,B as w,r as l,o as i,b as s,w as o,m as N,q as t,p as e,C as B,D as T,T as A,e as D,E as I}from"./index-4ab622e1.js";import{_ as P}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-0cc35f87.js";import{_ as R}from"./UserProfile.vue_vue_type_script_setup_true_lang-8141041f.js";import{V as W}from"./VSpacer-1c544612.js";import"./VTooltip-2f90d06a.js";import"./VOverlay-b30dd5d5.js";import"./forwardRefs-9d31fcaa.js";import"./transition-7882385f.js";import"./VAvatar-ae175db8.js";import"./VImg-07984aca.js";import"./VMenu-01ffa976.js";import"./VDivider-b0e2abeb.js";import"./VList-92d859c2.js";import"./VListItemAction-58bae33a.js";const $=[{title:"Dashboard",icon:{icon:"bx-home-alt"},children:[{title:"Summary",to:"index"},{title:"Product Analytics",to:"dashboard-product-analytics"},{title:"User Analytics",to:"dashboard-user-analytics"}]},{heading:"Pages"},{title:"Product",to:{name:"pages-product"},icon:{icon:"bx-box"}},{title:"Content",to:{name:"pages-content"},icon:{icon:"bx-file-blank"}},{title:"Permission",to:{name:"pages-permission"},icon:{icon:"bx-lock"}},{title:"Quotation",to:{name:"pages-quotation"},icon:{icon:"bx-data"}}],L={class:"d-flex h-100 align-center"},tt=b({__name:"DefaultLayoutWithVerticalNav",setup(S){g(a=>({"2462f0d0":t(f),"7d38ac3a":t(r),"5e47cd53":t(p)}));const{appRouteTransition:m,isLessThanOverlayNavBreakpoint:u,isVerticalNavCollapsed:c}=x(),{width:d}=y(),r=k(null);C(c,a=>{r.value=a?"rotate-180":"rotate-back-180"});const p=c.value?"180deg":"0deg",{global:_}=V(),f=w(()=>_.current.value.colors.background);return(a,q)=>{const v=l("IconBtn"),h=l("RouterView");return i(),s(t(I),{"nav-items":t($)},{navbar:o(({toggleVerticalOverlayNavActive:n})=>[N("div",L,[t(u)(t(d))?(i(),s(v,{key:0,class:"ms-n3",onClick:z=>n(!0)},{default:o(()=>[e(B,{icon:"bx-menu"})]),_:2},1032,["onClick"])):T("",!0),e(P),e(W),e(R)])]),default:o(()=>[e(h,null,{default:o(({Component:n})=>[e(A,{name:t(m),mode:"out-in"},{default:o(()=>[(i(),s(D(n)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}});export{tt as default};
