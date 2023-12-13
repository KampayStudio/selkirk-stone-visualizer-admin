import{X as N,Y as U,$ as j,B as q,a0 as $,aE as D,p as a,N as V,a4 as M,b3 as O,a5 as z,aP as Z,a7 as X,Z as G,ad as H,b4 as W,av as Y,aX as J,aa as K,k as b,z as w,b5 as Q,a$ as ee,b1 as ae,d as te,j as se,o as oe,c as le,m as c,w as n,q as o,V as re,v as ne,L as ie,M as ue,H as P,I as de}from"./index-63d6df99.js";import{a as ce,d as C,V as me}from"./VCard-5225f1a2.js";import{V as fe}from"./VForm-514dd6d0.js";import{V as pe,a as S}from"./VRow-4566c810.js";import{m as ve,u as be,b as A,V as T}from"./VTextField-fad1e8e7.js";import{m as Ve,V as I}from"./VCheckboxBtn-30bbb06b.js";import{V as ye}from"./VSpacer-66bd5db2.js";import{m as _e,u as ke,V as B,f as he}from"./forwardRefs-ef4a9d66.js";import{b as R}from"./route-block-83d24a4e.js";import"./VAvatar-2ab46239.js";import"./VImg-5c14e2fd.js";import"./transition-5feec356.js";const xe=e=>e==null||e===""?!0:!!(Array.isArray(e)&&e.length===0),ge=e=>e==null,we=e=>Array.isArray(e)&&e.length===0;const Pe=N()({name:"VCheckbox",inheritAttrs:!1,props:{...ve(),...U(Ve(),["inline"])},emits:{"update:focused":e=>!0},setup(e,i){let{attrs:t,slots:s}=i;const{isFocused:m,focus:u,blur:v}=be(e),l=j(),r=q(()=>e.id||`checkbox-${l}`);return $(()=>{const[y,_]=D(t),[k,h]=A.filterProps(e),[f,p]=I.filterProps(e);return a(A,V({class:["v-checkbox",e.class]},y,k,{id:r.value,focused:m.value,style:e.style}),{...s,default:x=>{let{id:d,messagesId:g,isDisabled:F,isReadonly:L}=x;return a(I,V(f,{id:d.value,"aria-describedby":g.value,disabled:F.value,readonly:L.value},_,{onFocus:u,onBlur:v}),s)}})}),{}}}),E=e=>ge(e)||we(e)||e===!1?"This field is required":!!String(e).trim().length||"This field is required",Ce=e=>{if(xe(e))return!0;const i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(e)?e.every(t=>i.test(String(t)))||"The Email field must be a valid email":i.test(String(e))||"The Email field must be a valid email"};const Se=N()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...M({location:"bottom"}),...O(),...z(),...Z(),...X(),...U(_e({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const s=G(e,"modelValue"),{locationStyles:m}=H(e),{positionClasses:u}=W(e),{scopeId:v}=ke(),{themeClasses:l}=Y(e),{colorClasses:r,colorStyles:y,variantClasses:_}=J(e),{roundedClasses:k}=K(e),h=b();w(s,p),w(()=>e.timeout,p),Q(()=>{s.value&&p()});let f=-1;function p(){window.clearTimeout(f);const d=Number(e.timeout);!s.value||d===-1||(f=window.setTimeout(()=>{s.value=!1},d))}function x(){window.clearTimeout(f)}return $(()=>{const[d]=B.filterProps(e);return a(B,V({ref:h,class:["v-snackbar",{"v-snackbar--active":s.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},u.value,e.class],style:e.style},d,{modelValue:s.value,"onUpdate:modelValue":g=>s.value=g,contentProps:V({class:["v-snackbar__wrapper",l.value,r.value,k.value,_.value],style:[m.value,y.value],onPointerenter:x,onPointerleave:p},d.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},v),{default:()=>[ee(!1,"v-snackbar"),t.default&&a("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[t.default()]),t.actions&&a(ae,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[t.actions()])]})],activator:t.activator})}),he({},h)}}),Ae={class:"auth-wrapper d-flex align-center justify-center pa-4"},Te={class:"position-relative"},Ie={class:"d-flex"},Be=c("h6",{class:"text-h4 text-primary mb-1"}," Welcome, Admin! ",-1),Re=c("p",{class:"mb-0"}," Sign in your account ",-1),Ee={class:"d-flex align-center justify-space-between flex-wrap mt-2 mb-4"},Ne={class:"d-flex"},Ue=te({__name:"login",setup(e){const i=se(),t=b({email:"",password:"",remember:!1}),s=b(!1),m=()=>{t.value.email==="admin@admin.com"&&t.value.password==="@Dm1n@Dm1n"?(localStorage.setItem("loggedIn","1"),i.push("/")):(s.value=!0,console.log(t.value.email+t.value.password))},u=b(!1);return(v,l)=>(oe(),le("div",Ae,[c("div",Te,[a(me,{class:"auth-card px-2","max-width":"450","min-width":"450"},{default:n(()=>[a(ce,{class:"justify-center"},{prepend:n(()=>[c("div",Ie,[a(o(re),{nodes:o(ne).app.logo},null,8,["nodes"])])]),_:1}),a(C,{class:"text-center"},{default:n(()=>[Be,Re]),_:1}),a(C,null,{default:n(()=>[a(fe,{onSubmit:ie(m,["prevent"])},{default:n(()=>[a(pe,null,{default:n(()=>[a(S,{cols:"12"},{default:n(()=>[a(T,{modelValue:o(t).email,"onUpdate:modelValue":l[0]||(l[0]=r=>o(t).email=r),autofocus:"",label:"Email",type:"email",rules:[o(E),o(Ce)]},null,8,["modelValue","rules"])]),_:1}),a(S,{cols:"12"},{default:n(()=>[a(T,{modelValue:o(t).password,"onUpdate:modelValue":l[1]||(l[1]=r=>o(t).password=r),label:"Password",type:o(u)?"text":"password","append-inner-icon":o(u)?"bx-hide":"bx-show",rules:[o(E)],"onClick:appendInner":l[2]||(l[2]=r=>u.value=!o(u))},null,8,["modelValue","type","append-inner-icon","rules"]),c("div",Ee,[a(Pe,{modelValue:o(t).remember,"onUpdate:modelValue":l[3]||(l[3]=r=>o(t).remember=r),label:"Remember me"},null,8,["modelValue"])]),c("div",Ne,[a(ye),a(ue,{type:"submit"},{default:n(()=>[P(" Login ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),a(Se,{modelValue:o(s),"onUpdate:modelValue":l[4]||(l[4]=r=>de(s)?s.value=r:null),location:"top end",variant:"flat",color:"error"},{default:n(()=>[P(" Invalid Credentials ")]),_:1},8,["modelValue"])]))}});typeof R=="function"&&R(Ue);export{Ue as default};
