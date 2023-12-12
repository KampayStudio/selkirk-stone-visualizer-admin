import{X as v,a2 as x,as as z,a5 as f,a6 as C,ax as T,at as V,a0 as B,p,av as j,d as J,k,o as n,b as s,w,m as a,c as l,F as h,a as b,q as N,x as _,C as c,s as u,D as m,M as P,H as S}from"./index-9510cab1.js";const A=v()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...x(),...z(),...f(),...C()},setup(i,g){let{slots:t}=g;const{themeClasses:y}=T(i),{densityClasses:o}=V(i);return B(()=>p(i.tag,{class:["v-table",{"v-table--fixed-height":!!i.height,"v-table--fixed-header":i.fixedHeader,"v-table--fixed-footer":i.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":i.hover},y.value,o.value,i.class],style:i.style},{default:()=>{var r,e,d;return[(r=t.top)==null?void 0:r.call(t),t.default?p("div",{class:"v-table__wrapper",style:{height:j(i.height)}},[p("table",null,[t.default()])]):(e=t.wrapper)==null?void 0:e.call(t),(d=t.bottom)==null?void 0:d.call(t)]}})),{}}}),D=a("thead",null,[a("tr",null,[a("th",{scope:"col"}," User "),a("th",{scope:"col"}," Email "),a("th",{scope:"col"}," Permission "),a("th",{scope:"col",class:"text-center"}," Action ")])],-1),F={class:"d-flex",style:{"align-items":"center"}},M={style:{display:"flex","align-items":"center","justify-content":"center"}},E=J({__name:"admin-user",setup(i){const g=k([{id:1,name:"Alex",email:"alex@mailservice.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:2,name:"Sam",email:"sam@site.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:3,name:"Chris",email:"chris@netmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:4,name:"Jordan",email:"jordan@site.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:5,name:"Taylor",email:"taylor@post.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:6,name:"Morgan",email:"morgan@webmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:7,name:"Casey",email:"casey@mail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:8,name:"Jamie",email:"jamie@inbox.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:9,name:"Riley",email:"riley@email.net",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:10,name:"Cameron",email:"cameron@netmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:11,name:"Alex",email:"alex@mailservice.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:12,name:"Sam",email:"sam@site.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:13,name:"Chris",email:"chris@netmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:14,name:"Jordan",email:"jordan@site.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:15,name:"Taylor",email:"taylor@post.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:16,name:"Morgan",email:"morgan@webmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:17,name:"Casey",email:"casey@mail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:18,name:"Jamie",email:"jamie@inbox.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:19,name:"Riley",email:"riley@email.net",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:20,name:"Cameron",email:"cameron@netmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:21,name:"Alex",email:"alex@mailservice.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:22,name:"Sam",email:"sam@site.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:23,name:"Chris",email:"chris@netmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:24,name:"Jordan",email:"jordan@site.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:25,name:"Taylor",email:"taylor@post.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:26,name:"Morgan",email:"morgan@webmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:27,name:"Casey",email:"casey@mail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:28,name:"Jamie",email:"jamie@inbox.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:29,name:"Riley",email:"riley@email.net",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}},{id:30,name:"Cameron",email:"cameron@netmail.com",photo:"https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png",permission:{administrator:!0,content_managing:!0,support:!0,analytics:!0,product_managing:!0}}]);return(t,y)=>(n(),s(A,{class:"text-no-wrap",style:{"max-block-size":"86vh"}},{default:w(()=>[D,a("tbody",null,[(n(!0),l(h,null,b(N(g),o=>(n(),l("tr",{key:o.name},[a("td",null,_(o.name),1),a("td",null,_(o.email),1),a("td",F,[(n(!0),l(h,null,b(o.permission,(r,e)=>(n(),l("span",{key:e},[e==="administrator"&&r===!0?(n(),s(c,{key:0,icon:"bx-user",class:u(e)},null,8,["class"])):m("",!0),e==="analytics"&&r===!0?(n(),s(c,{key:1,icon:"bx-stats",class:u(e)},null,8,["class"])):m("",!0),e==="support"&&r===!0?(n(),s(c,{key:2,icon:"bx-headphone",class:u(e)},null,8,["class"])):m("",!0),e==="product_managing"&&r===!0?(n(),s(c,{key:3,icon:"bx-box",class:u(e)},null,8,["class"])):m("",!0),e==="content_managing"&&r===!0?(n(),s(c,{key:4,icon:"bx-edit",class:u(e)},null,8,["class"])):m("",!0)]))),128))]),a("td",null,[a("div",M,[p(P,{variant:"text",size:"small"},{default:w(()=>[S(" Edit ")]),_:1})])])]))),128))])]),_:1}))}});export{E as _};