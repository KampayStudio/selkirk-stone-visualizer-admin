import{d as c,r as p,o as a,b as o,w as s,p as n,C as d,D as _,k as h,q as m}from"./index-63d6df99.js";import{V as u}from"./VMenu-870d1333.js";import{V as f}from"./VList-a6724849.js";import{V as y}from"./VDataTable-82bad538.js";const C=c({__name:"MoreBtn",props:{menuList:null,itemProps:{type:Boolean}},setup(t){const e=t;return(i,l)=>{const r=p("IconBtn");return a(),o(r,{size:"32"},{default:s(()=>[n(d,{icon:"bx-dots-vertical-rounded"}),e.menuList?(a(),o(u,{key:0,activator:"parent"},{default:s(()=>[n(f,{items:e.menuList,"item-props":e.itemProps},null,8,["items","item-props"])]),_:1})):_("",!0)]),_:1})}}}),b=c({__name:"client-use",props:{search:String},setup(t){const e=h([{id:1,first_name:"Alex",last_name:"Grimaldo",contact:"+639121231234",email:"alex@mailservice.com",address:"Ontario, Canada",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png"},{id:2,first_name:"Sam",last_name:"Johnson",contact:"+639121231235",email:"sam@site.com",address:"Vancouver, Canada",photo:"https://example.com/photo2.png"},{id:3,first_name:"Lily",last_name:"Evans",contact:"+639121231236",email:"lily@domain.com",address:"Montreal, Canada",photo:"https://example.com/photo3.png"},{id:4,first_name:"Robert",last_name:"Smith",contact:"+639121231237",email:"robert@provider.com",address:"Quebec City, Canada",photo:"https://example.com/photo4.png"},{id:5,first_name:"Emily",last_name:"Davis",contact:"+639121231238",email:"emily@service.net",address:"Calgary, Canada",photo:"https://example.com/photo5.png"}]),i=[{title:"EMAIL",key:"email"},{title:"FIRSTNAME",key:"first_name"},{title:"LASTNAME",key:"last_name"},{title:"CONTACT",key:"contact"},{title:"ADDRESS",key:"address"},{title:"ACTION",key:"action"}];return(l,r)=>(a(),o(m(y),{headers:i,items:m(e),"items-per-page":12,search:t.search,"show-select":""},{"item.action":s(({item:v})=>[n(C,{"menu-list":["Send a Reset Password Email","Delete"]})]),_:1},8,["items","search"]))}});export{b as _};