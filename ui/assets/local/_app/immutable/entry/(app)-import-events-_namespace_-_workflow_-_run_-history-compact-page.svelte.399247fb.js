import{S as G,b as I,a as L,C as h,D as d,E as v,j as c,g as p,F as y,K as _,_ as P,e as $,f as C,z as b,a1 as z,h as w,k as F,a2 as B}from"../chunks/index.bbf544d0.js";import{a as N}from"../chunks/import-events.78571dce.js";import{E as j,a as q,b as D}from"../chunks/event-empty-row.df138f20.js";import{P as K}from"../chunks/pagination.2ac10831.js";import{b as k,e as M}from"../chunks/event-view.4b5ebef3.js";import{e as H}from"../chunks/filters.0fa41155.js";import{t as g}from"../chunks/translate.9b6a78fd.js";function E(i,t,r){const e=i.slice();return e[10]=t[r],e}function S(i){let t,r;return t=new q({}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,o){v(t,e,o),r=!0},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function A(i,t){let r,e,o;return e=new D({props:{event:t[10],compact:x,expandAll:t[1]==="true",initialItem:t[9]}}),{key:i,first:null,c(){r=$(),h(e.$$.fragment),this.h()},l(n){r=$(),d(e.$$.fragment,n),this.h()},h(){this.first=r},m(n,f){C(n,r,f),v(e,n,f),o=!0},p(n,f){t=n;const s={};f&256&&(s.event=t[10]),f&2&&(s.expandAll=t[1]==="true"),f&512&&(s.initialItem=t[9]),e.$set(s)},i(n){o||(c(e.$$.fragment,n),o=!0)},o(n){p(e.$$.fragment,n),o=!1},d(n){n&&F(r),y(e,n)}}}function J(i){let t=[],r=new Map,e,o,n=i[8];const f=a=>`${a[10].id}-${a[10].timestamp}`;for(let a=0;a<n.length;a+=1){let l=E(i,n,a),m=f(l);r.set(m,t[a]=A(m,l))}let s=null;return n.length||(s=S()),{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=$(),s&&s.c()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=$(),s&&s.l(a)},m(a,l){for(let m=0;m<t.length;m+=1)t[m].m(a,l);C(a,e,l),s&&s.m(a,l),o=!0},p(a,l){l&770&&(n=a[8],b(),t=z(t,l,f,1,a,n,r,e.parentNode,B,A,e,E),w(),n.length?s&&(b(),p(s,1,1,()=>{s=null}),w()):s||(s=S(),s.c(),c(s,1),s.m(e.parentNode,e)))},i(a){if(!o){for(let l=0;l<n.length;l+=1)c(t[l]);o=!0}},o(a){for(let l=0;l<t.length;l+=1)p(t[l]);o=!1},d(a){for(let l=0;l<t.length;l+=1)t[l].d(a);a&&F(e),s&&s.d(a)}}}function O(i){let t,r;return t=new j({props:{compact:x,$$slots:{default:[J]},$$scope:{ctx:i}}}),t.$on("expandAll",i[2]),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,o){v(t,e,o),r=!0},p(e,o){const n={};o&8962&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Q(i){let t,r;return t=new K({props:{items:i[0],floatId:"event-view-toggle","aria-label":g("workflows","recent-events"),pageSizeSelectLabel:g("per-page"),previousButtonLabel:g("previous"),nextButtonLabel:g("next"),$$slots:{default:[O,({visibleItems:e,initialItem:o})=>({8:e,9:o}),({visibleItems:e,initialItem:o})=>(e?256:0)|(o?512:0)]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,o){v(t,e,o),r=!0},p(e,[o]){const n={};o&1&&(n.items=e[0]),o&8962&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(c(t.$$.fragment,e),r=!0)},o(e){p(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}let x=!0;function R(i,t,r){let e,o,n,f,s,a,l;_(i,k,u=>r(1,f=u)),_(i,N,u=>r(5,s=u)),_(i,M,u=>r(6,a=u)),_(i,H,u=>r(7,l=u));function m(u){P(k,f=u.detail.expanded,f)}return i.$$.update=()=>{i.$$.dirty&128&&r(3,e=l),i.$$.dirty&96&&r(4,o=a==="descending"?[...s].reverse():s),i.$$.dirty&24&&r(0,n=o.filter(u=>e?u.category===e:u))},[n,f,m,e,o,s,a,l]}class ee extends G{constructor(t){super(),I(this,t,R,Q,L,{})}}export{ee as default};