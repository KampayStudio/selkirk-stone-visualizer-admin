import{X as y,a2 as b,au as J,a0 as f,p as n,a1 as u,as as I,af as k,aE as N,aQ as O,aR as Q,aS as U,bm as W,a3 as Y,bv as Z,a4 as $,aT as j,a5 as q,a6 as z,aU as G,ax as K,aW as ee,aX as ae,at as te,aY as ne,aZ as de,bn as ie,ac as se,bw as le,a9 as ce,aV as re,B as A,J as ue,ay as ve,bo as oe,a_ as me}from"./index-9510cab1.js";import{c as C,V as h}from"./VAvatar-afd8700b.js";import{V as ge}from"./VImg-ca4c240b.js";const ke=y()({name:"VCardActions",props:b(),setup(e,i){let{slots:t}=i;return J({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ye=C("v-card-subtitle"),be=C("v-card-title"),fe=y()({name:"VCardItem",props:{appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...b(),...I()},setup(e,i){let{slots:t}=i;return f(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(h,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),g&&n(ye,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(h,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ce=C("v-card-text"),he=y()({name:"VCard",directives:{Ripple:N},props:{appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...O(),...b(),...I(),...Q(),...U(),...W(),...Y(),...Z(),...$(),...j(),...q(),...z(),...G({variant:"elevated"})},setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=K(e),{borderClasses:s}=ee(e),{colorClasses:o,colorStyles:m,variantClasses:g}=ae(e),{densityClasses:l}=te(e),{dimensionStyles:d}=ne(e),{elevationClasses:P}=de(e),{loaderClasses:S}=ie(e),{locationStyles:x}=se(e),{positionClasses:T}=le(e),{roundedClasses:B}=ce(e),c=re(e,t),_=A(()=>e.link!==!1&&c.isLink.value),r=A(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const D=_.value?"a":e.tag,L=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=L||R,w=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),X=!!(a.image||e.image),F=E||M||w,H=!!(a.text||e.text);return ue(n(D,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,P.value,S.value,T.value,B.value,g.value,e.class],style:[m.value,d.value,x.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var V;return[X&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(oe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),F&&n(fe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(Ce,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(V=a.default)==null?void 0:V.call(a),a.actions&&n(ke,null,{default:a.actions}),me(r.value,"v-card")]}}),[[ve("ripple"),r.value&&e.ripple]])}),{}}});export{he as V,fe as a,be as b,ke as c,Ce as d};