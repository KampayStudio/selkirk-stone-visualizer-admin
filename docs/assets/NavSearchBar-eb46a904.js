import{d as b,t as I,k as c,j as k,a1 as C,a2 as A,r as B,o as p,c as d,m as l,p as i,w as P,C as V,q as t,D,a0 as N,K as m,F as q,a3 as R,a4 as T,a5 as L,G as w}from"./index-0d4070de.js";import{a as E}from"./axios-5c1a43ed.js";const g=o=>(R("data-v-69678328"),o=o(),T(),o),U={key:0,class:"d-none d-md-flex align-center text-disabled"},z=g(()=>l("span",{class:"me-3"},"Search",-1)),F=g(()=>l("span",{class:"meta-key"},"⌘K",-1)),G=[z,F],K=b({inheritAttrs:!1}),O=b({...K,__name:"NavSearchBar",setup(o){const{appContentLayoutNav:_}=I(),e=c(!1),h=[{title:"Popular Searches",content:[{icon:"bx-bar-chart",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"bx-doughnut-chart",title:"CRM",url:{name:"dashboards-crm"}},{icon:"bx-file-blank",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"bx-group",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"bx-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"bx-file-blank",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"bx-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"bx-cog",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"bx-text",title:"Typography",url:{name:"pages-typography"}},{icon:"bx-square-rounded",title:"Tabs",url:{name:"components-tabs"}},{icon:"bxs-hand-up",title:"Buttons",url:{name:"components-button"}},{icon:"bxs-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"bx-list-ul",title:"Select",url:{name:"forms-select"}},{icon:"bx-check-square",title:"Combobox",url:{name:"forms-combobox"}},{icon:"bx-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"bx-star",title:"Rating",url:{name:"forms-rating"}}]}],x=[{title:"Analytics Dashboard",icon:"bx-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"bx-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"bx-dollar",url:{name:"pages-pricing"}}],s=c(""),u=c([]),f=k();C(()=>{E.get("/app-bar/search",{params:{q:s.value}}).then(n=>{u.value=n.data})});const v=n=>{f.push(n.url),e.value=!1,s.value=""},y=A(()=>L(()=>import("./AppBarSearch-f7495d95.js"),["assets/AppBarSearch-f7495d95.js","assets/index-0d4070de.js","assets/index-541960df.css","assets/VDialog-bcfbdd42.js","assets/VDialog-dfb0b2b2.css","assets/AppBarSearch-63a2647d.css"]));return(n,a)=>{const S=B("IconBtn");return p(),d(q,null,[l("div",N({class:"d-flex align-center cursor-pointer"},n.$attrs,{style:{"user-select":"none"},onClick:a[0]||(a[0]=r=>e.value=!t(e))}),[i(S,{class:"me-1"},{default:P(()=>[i(V,{size:"22",icon:"bx-search"})]),_:1}),t(_)==="vertical"?(p(),d("span",U,G)):D("",!0)],16),i(t(y),{isDialogVisible:t(e),"onUpdate:isDialogVisible":a[1]||(a[1]=r=>m(e)?e.value=r:null),"search-query":t(s),"onUpdate:searchQuery":a[2]||(a[2]=r=>m(s)?s.value=r:null),"search-results":t(u),suggestions:h,"no-data-suggestion":x,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64)}}});const j=w(O,[["__scopeId","data-v-69678328"]]);export{j as default};