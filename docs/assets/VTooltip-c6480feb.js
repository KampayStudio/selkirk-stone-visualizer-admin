import{X as S,Y as h,Z as O,$ as x,B as e,k as T,N as u,a0 as $,p as k}from"./index-9510cab1.js";import{m as p,u as w,V as d}from"./VOverlay-c50331c2.js";import{f as A}from"./forwardRefs-a29b5f65.js";const N=S()({name:"VTooltip",props:{id:String,text:String,...h(p({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:o}=v;const n=O(t,"modelValue"),{scopeId:m}=w(),f=x(),r=e(()=>t.id||`v-tooltip-${f}`),l=T(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>u({"aria-describedby":r.value},t.activatorProps));return $(()=>{const[b]=d.filterProps(t);return k(d,u({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},b,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},m),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),A({},l)}});export{N as V};