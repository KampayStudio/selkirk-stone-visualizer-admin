import{_ as h}from"./SnackBar.vue_vue_type_script_setup_true_lang-12957a92.js";import v from"./SkeletonSection-170f169a.js";import{a as _}from"./axios-5c1a43ed.js";import{d as g,k as c,aH as x,o as m,c as b,p as e,w as o,q as s,b as V,aK as k,a6 as w,a7 as f,aL as C,K as S,m as i,$ as B,C as T,H as D,N as F}from"./index-0d4070de.js";import{V as H}from"./VForm-1f016451.js";import{V as N}from"./VTextarea-b644ab7a.js";import{V as P}from"./VFileInput-d0feb3ff.js";import{V as R}from"./VSpacer-e5b4c91c.js";const I=i("div",{class:"d-flex justify-space-between"},[i("h6",{class:"text-h6 text-primary mb-3"}," Landing Page (Section 4) ")],-1),U={class:"d-flex mt-3"},K={class:"custom-loader"},J=g({__name:"Section4",setup(L){const t=c({id:"",body:"",heading_1:""}),n=c(),d=c(null),u=c(!1),p=async()=>{const l=await _.get("/contents/section4/1/");t.value=l.data},y=async()=>{u.value=!0;const l=new FormData;l.append("heading_1",t.value.heading_1),l.append("body",t.value.body),n.value&&l.append("photo_1",n.value[0]);try{const a=await _.patch("/contents/section4/1/",l,{headers:{"Content-Type":"multipart/form-data"}});d.value&&a.status===200&&d.value.show("success","Success"),p(),u.value=!1}catch{d.value&&d.value.show("error","Please contact your administrator.")}};return x(()=>{p()}),(l,a)=>(m(),b("section",null,[e(F,null,{default:o(()=>[e(h,{ref_key:"snackbarRef",ref:d},null,512),s(t).id?(m(),V(k,{key:0,class:"d-flex flex-column"},{default:o(()=>[I,e(H,null,{default:o(()=>[e(w,null,{default:o(()=>[e(f,{cols:"12"},{default:o(()=>[e(C,{modelValue:s(t).heading_1,"onUpdate:modelValue":a[0]||(a[0]=r=>s(t).heading_1=r),label:"Heading 1"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:o(()=>[e(N,{modelValue:s(t).body,"onUpdate:modelValue":a[1]||(a[1]=r=>s(t).body=r),label:"Heading 2"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:o(()=>[e(P,{modelValue:s(n),"onUpdate:modelValue":a[2]||(a[2]=r=>S(n)?n.value=r:null),label:"Photo 1",accept:"image/*"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),i("div",U,[e(R),e(B,{loading:s(u),color:"primary",onClick:y},{loader:o(()=>[i("span",K,[e(T,{icon:"bx-refresh"})])]),default:o(()=>[D(" Apply Changes ")]),_:1},8,["loading"])])]),_:1})):(m(),V(v,{key:1}))]),_:1})]))}});export{J as _};
