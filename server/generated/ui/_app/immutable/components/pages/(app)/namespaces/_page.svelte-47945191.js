import{S as j,i as G,s as L,w as g,a as x,k as N,q as A,e as T,x as d,c as q,l as y,m as E,r as B,h as m,n as v,y as b,b as h,K as P,t as _,d as J,f as u,z as w,J as H,g as K,B as Y,_ as M,u as O}from"../../../../chunks/index-3630b6f8.js";import{o as S}from"../../../../chunks/route-for-9e2a964e.js";import{p as Q}from"../../../../chunks/stores-4e1b824b.js";import{n as R}from"../../../../chunks/namespaces-c21a8365.js";import{E as U}from"../../../../chunks/empty-state-088a7e43.js";import{P as V}from"../../../../chunks/page-title-e9267ce5.js";import{P as W}from"../../../../chunks/pagination-61b59743.js";import{T as X,a as Z}from"../../../../chunks/table-header-row-df8ad022.js";import{T as ee}from"../../../../chunks/table-row-95c37051.js";function z(f,t,r){const e=f.slice();return e[3]=t[r],e}function te(f){let t,r;return t=new U({props:{title:"No Namespaces Found",content:"You do not have access to a Namespace. Contact your Administrator for assistance."}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p:Y,i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ae(f){let t,r;return t=new W({props:{items:f[1],"aria-label":"namespaces",$$slots:{default:[le,({visibleItems:e})=>({2:e}),({visibleItems:e})=>e?4:0]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&2&&(c.items=e[1]),a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function re(f){let t,r,e=f[3].namespaceInfo.name+"",a,c,s;return{c(){t=N("td"),r=N("a"),a=A(e),s=x(),this.h()},l(n){t=y(n,"TD",{});var o=E(t);r=y(o,"A",{href:!0,class:!0});var p=E(r);a=B(p,e),p.forEach(m),o.forEach(m),s=q(n),this.h()},h(){v(r,"href",c=S({namespace:f[3].namespaceInfo.name})),v(r,"class","hover:text-blue-700 hover:underline hover:decoration-blue-700")},m(n,o){h(n,t,o),P(t,r),P(r,a),h(n,s,o)},p(n,o){o&4&&e!==(e=n[3].namespaceInfo.name+"")&&O(a,e),o&4&&c!==(c=S({namespace:n[3].namespaceInfo.name}))&&v(r,"href",c)},d(n){n&&m(t),n&&m(s)}}}function D(f){let t,r;return t=new ee({props:{$$slots:{default:[re]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function se(f){let t,r,e=f[2],a=[];for(let s=0;s<e.length;s+=1)a[s]=D(z(f,e,s));const c=s=>_(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=T()},l(s){for(let n=0;n<a.length;n+=1)a[n].l(s);t=T()},m(s,n){for(let o=0;o<a.length;o+=1)a[o].m(s,n);h(s,t,n),r=!0},p(s,n){if(n&4){e=s[2];let o;for(o=0;o<e.length;o+=1){const p=z(s,e,o);a[o]?(a[o].p(p,n),u(a[o],1)):(a[o]=D(p),a[o].c(),u(a[o],1),a[o].m(t.parentNode,t))}for(K(),o=e.length;o<a.length;o+=1)c(o);J()}},i(s){if(!r){for(let n=0;n<e.length;n+=1)u(a[n]);r=!0}},o(s){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)_(a[n]);r=!1},d(s){M(a,s),s&&m(t)}}}function ne(f){let t,r;return{c(){t=N("th"),r=A("Name")},l(e){t=y(e,"TH",{});var a=E(t);r=B(a,"Name"),a.forEach(m)},m(e,a){h(e,t,a),P(t,r)},p:Y,d(e){e&&m(t)}}}function oe(f){let t,r;return t=new Z({props:{slot:"headers",$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&64&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function le(f){let t,r;return t=new X({props:{variant:"fancy",class:"w-full",$$slots:{headers:[oe],default:[se]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ce(f){let t,r,e,a,c,s,n,o,p;t=new V({props:{title:"Namespaces",url:f[0].url.href}});const C=[ae,te],$=[];function F(l,i){var k;return((k=l[1])==null?void 0:k.length)>0?0:1}return s=F(f),n=$[s]=C[s](f),{c(){g(t.$$.fragment),r=x(),e=N("h1"),a=A("Namespaces"),c=x(),n.c(),o=T(),this.h()},l(l){d(t.$$.fragment,l),r=q(l),e=y(l,"H1",{"data-cy":!0,class:!0});var i=E(e);a=B(i,"Namespaces"),i.forEach(m),c=q(l),n.l(l),o=T(),this.h()},h(){v(e,"data-cy","namespace-selector-title"),v(e,"class","mb-8 text-2xl")},m(l,i){b(t,l,i),h(l,r,i),h(l,e,i),P(e,a),h(l,c,i),$[s].m(l,i),h(l,o,i),p=!0},p(l,[i]){const k={};i&1&&(k.url=l[0].url.href),t.$set(k);let I=s;s=F(l),s===I?$[s].p(l,i):(K(),_($[I],1,1,()=>{$[I]=null}),J(),n=$[s],n?n.p(l,i):(n=$[s]=C[s](l),n.c()),u(n,1),n.m(o.parentNode,o))},i(l){p||(u(t.$$.fragment,l),u(n),p=!0)},o(l){_(t.$$.fragment,l),_(n),p=!1},d(l){w(t,l),l&&m(r),l&&m(e),l&&m(c),$[s].d(l),l&&m(o)}}}function fe(f,t,r){let e,a;return H(f,Q,c=>r(0,e=c)),H(f,R,c=>r(1,a=c)),[e,a]}class be extends j{constructor(t){super(),G(this,t,fe,ce,L,{})}}export{be as default};