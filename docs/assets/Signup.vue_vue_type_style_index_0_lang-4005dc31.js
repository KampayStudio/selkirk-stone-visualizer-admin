import{_ as x}from"./SnackBar.vue_vue_type_script_setup_true_lang-12957a92.js";import k from"./SkeletonSection-170f169a.js";import{a as V}from"./axios-5c1a43ed.js";import{d as w,k as i,aH as C,o as f,c as B,p as e,w as o,q as n,b as g,aK as F,a6 as S,a7 as p,aL as v,K as y,m,$ as T,C as U,H as D,N as H}from"./index-0d4070de.js";import{V as N}from"./VForm-1f016451.js";import{V as P}from"./VTextarea-b644ab7a.js";import{V as b}from"./VFileInput-d0feb3ff.js";import{V as R}from"./VSpacer-e5b4c91c.js";const I=m("div",{class:"d-flex justify-space-between"},[m("h6",{class:"text-h6 text-primary mb-3"}," Signup Page ")],-1),K={class:"d-flex mt-3"},L={class:"custom-loader"},O=w({__name:"Signup",setup($){const l=i({id:"",body:"",heading_1:"",heading_2:""}),d=i(),u=i(),r=i(null),c=i(!1),_=async()=>{const t=await V.get("/contents/signup_page/8/");l.value=t.data},h=async()=>{c.value=!0;const t=new FormData;t.append("heading_1",l.value.heading_1),t.append("heading_2",l.value.heading_2),t.append("body",l.value.body),d.value&&t.append("logo",d.value[0]),u.value&&t.append("banner",u.value[0]);try{const a=await V.patch("/contents/signup_page/8/",t,{headers:{"Content-Type":"multipart/form-data"}});r.value&&a.status===200&&r.value.show("success","Success"),_(),c.value=!1}catch{r.value&&r.value.show("error","Please contact your administrator.")}};return C(()=>{_()}),(t,a)=>(f(),B("section",null,[e(H,null,{default:o(()=>[e(x,{ref_key:"snackbarRef",ref:r},null,512),n(l).id?(f(),g(F,{key:0,class:"d-flex flex-column"},{default:o(()=>[I,e(N,null,{default:o(()=>[e(S,null,{default:o(()=>[e(p,{cols:"6"},{default:o(()=>[e(v,{modelValue:n(l).heading_1,"onUpdate:modelValue":a[0]||(a[0]=s=>n(l).heading_1=s),label:"Heading 1"},null,8,["modelValue"])]),_:1}),e(p,{cols:"6"},{default:o(()=>[e(v,{modelValue:n(l).heading_2,"onUpdate:modelValue":a[1]||(a[1]=s=>n(l).heading_2=s),label:"Heading 2"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12"},{default:o(()=>[e(P,{modelValue:n(l).body,"onUpdate:modelValue":a[2]||(a[2]=s=>n(l).body=s),label:"Body"},null,8,["modelValue"])]),_:1}),e(p,{cols:"6"},{default:o(()=>[e(b,{modelValue:n(d),"onUpdate:modelValue":a[3]||(a[3]=s=>y(d)?d.value=s:null),label:"Logo",accept:"image/*"},null,8,["modelValue"])]),_:1}),e(p,{cols:"6"},{default:o(()=>[e(b,{modelValue:n(u),"onUpdate:modelValue":a[4]||(a[4]=s=>y(u)?u.value=s:null),label:"Banner Photo 1",accept:"image/*"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),m("div",K,[e(R),e(T,{loading:n(c),color:"primary",onClick:h},{loader:o(()=>[m("span",L,[e(U,{icon:"bx-refresh"})])]),default:o(()=>[D(" Apply Changes ")]),_:1},8,["loading"])])]),_:1})):(f(),g(k,{key:1}))]),_:1})]))}});export{O as _};
