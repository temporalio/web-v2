import{S as V,i as j,s as A,e as k,k as D,w as I,c as p,a as v,d,m as U,x as z,b as _,R as q,g as O,M as C,y as G,T as K,q as E,o as S,B as L,l as N,n as Q,p as W,v as X,C as B,V as F,an as Y,ao as Z,t as x,h as $,j as ee}from"./index-ebdc94c9.js";import{f as H,a as M,F as ae}from"./index.es-ac68ae6c.js";function P(n){let a,t,e,l,c,m,u,f,h,s,r,b,T;function R(o,i){return o[4]?te:le}let g=R(n)(n);return f=new ae({props:{icon:n[0]?H:M,color:"white"}}),{c(){a=k("div"),t=k("pre"),e=k("code"),g.c(),m=D(),u=k("button"),I(f.$$.fragment),this.h()},l(o){a=p(o,"DIV",{class:!0,"data-cy":!0});var i=v(a);t=p(i,"PRE",{class:!0});var y=v(t);e=p(y,"CODE",{class:!0,"data-cy":!0});var J=v(e);g.l(J),J.forEach(d),y.forEach(d),m=U(i),u=p(i,"BUTTON",{class:!0});var w=v(u);z(f.$$.fragment,w),w.forEach(d),i.forEach(d),this.h()},h(){_(e,"class",l="language-"+n[3]),_(e,"data-cy",c=n[7]["data-cy"]),_(t,"class","w-full overflow-x-scroll rounded-lg p-4"),q(t,"h-full",!n[2]),_(u,"class","absolute top-4 right-4"),_(a,"class",h="relative h-auto w-full rounded-lg "+n[7].class+" "+(n[2]?"":"lg:h-full")),_(a,"data-cy",s=n[7].dataCy)},m(o,i){O(o,a,i),C(a,t),C(t,e),g.m(e,null),C(a,m),C(a,u),G(f,u,null),r=!0,b||(T=K(u,"click",n[5]),b=!0)},p(o,i){g.p(o,i),(!r||i&8&&l!==(l="language-"+o[3]))&&_(e,"class",l),(!r||i&128&&c!==(c=o[7]["data-cy"]))&&_(e,"data-cy",c),i&4&&q(t,"h-full",!o[2]);const y={};i&1&&(y.icon=o[0]?H:M),f.$set(y),(!r||i&132&&h!==(h="relative h-auto w-full rounded-lg "+o[7].class+" "+(o[2]?"":"lg:h-full")))&&_(a,"class",h),(!r||i&128&&s!==(s=o[7].dataCy))&&_(a,"data-cy",s)},i(o){r||(E(f.$$.fragment,o),r=!0)},o(o){S(f.$$.fragment,o),r=!1},d(o){o&&d(a),g.d(),L(f),b=!1,T()}}}function le(n){let a,t;return{c(){a=new Y(!1),t=N(),this.h()},l(e){a=Z(e,!1),t=N(),this.h()},h(){a.a=t},m(e,l){a.m(n[1],e,l),O(e,t,l)},p(e,l){l&2&&a.p(e[1])},d(e){e&&d(t),e&&a.d()}}}function te(n){let a=n[6](n[1])+"",t;return{c(){t=x(a)},l(e){t=$(e,a)},m(e,l){O(e,t,l)},p(e,l){l&2&&a!==(a=e[6](e[1])+"")&&ee(t,a)},d(e){e&&d(t)}}}function ne(n){let a,t,e=(n[1]||n[1]===null)&&P(n);return{c(){e&&e.c(),a=N()},l(l){e&&e.l(l),a=N()},m(l,c){e&&e.m(l,c),O(l,a,c),t=!0},p(l,[c]){l[1]||l[1]===null?e?(e.p(l,c),c&2&&E(e,1)):(e=P(l),e.c(),E(e,1),e.m(a.parentNode,a)):e&&(Q(),S(e,1,1,()=>{e=null}),W())},i(l){t||(E(e),t=!0)},o(l){S(e),t=!1},d(l){e&&e.d(l),l&&d(a)}}}function se(n,a,t){let{content:e}=a,{copied:l=!1}=a,{inline:c=!1}=a,{language:m="json"}=a;const u=m==="json",f=()=>navigator.clipboard.writeText(u?h(e):e).then(()=>{t(0,l=!l),setTimeout(()=>t(0,l=!1),2e3)}).catch(s=>console.error(s)),h=s=>{if(!s)return;let r;try{r=JSON.parse(s)}catch{r=s}return JSON.stringify(r,void 0,c?0:2)};return X(()=>{window.Prism.highlightAll()}),n.$$set=s=>{t(7,a=B(B({},a),F(s))),"content"in s&&t(1,e=s.content),"copied"in s&&t(0,l=s.copied),"inline"in s&&t(2,c=s.inline),"language"in s&&t(3,m=s.language)},a=F(a),[l,e,c,m,u,f,h,a]}class re extends V{constructor(a){super(),j(this,a,se,ne,A,{content:1,copied:0,inline:2,language:3})}}export{re as C};