import{d as p,j as _,o as V,b as g,w as o,p as t,q as l,a1 as n,H as e,C as r}from"./index-728fbb06.js";import{V as i}from"./VAvatar-956df882.js";import{V as c}from"./VImg-6b55083f.js";import{V as b}from"./VMenu-43f6cb57.js";import{V as x,a,b as s}from"./VList-f74d2a39.js";import{a as h,V as u}from"./VListItemAction-1fb9e08a.js";import{V as f}from"./VDivider-652de948.js";const N=p({__name:"UserProfile",setup(I){const m=_(),d=()=>{localStorage.setItem("loggedIn","0"),m.push("/login")};return(v,y)=>(V(),g(u,{dot:"",bordered:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:o(()=>[t(i,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:o(()=>[t(c,{src:l(n)},null,8,["src"]),t(b,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:o(()=>[t(x,null,{default:o(()=>[t(a,null,{prepend:o(()=>[t(h,{start:""},{default:o(()=>[t(u,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:o(()=>[t(i,{color:"primary",variant:"tonal"},{default:o(()=>[t(c,{src:l(n)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),default:o(()=>[t(s,{class:"font-weight-semibold"},{default:o(()=>[e(" Admin User ")]),_:1})]),_:1}),t(f,{class:"my-2"}),t(a,{link:""},{prepend:o(()=>[t(r,{class:"me-2",icon:"bx-user",size:"22"})]),default:o(()=>[t(s,null,{default:o(()=>[e("Profile")]),_:1})]),_:1}),t(a,{link:""},{prepend:o(()=>[t(r,{class:"me-2",icon:"bx-cog",size:"22"})]),default:o(()=>[t(s,null,{default:o(()=>[e("Settings")]),_:1})]),_:1}),t(f,{class:"my-2"}),t(a,null,{prepend:o(()=>[t(r,{class:"me-2",icon:"bx-log-out",size:"22",onClick:d}),t(s,null,{default:o(()=>[e("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{N as _};