import{S as j,i as G,s as L,w as g,a as q,k as N,q as A,e as T,x as d,c as x,l as E,m as P,r as B,h as m,n as v,y as b,b as h,K as y,t as $,d as J,f as u,z as w,J as H,g as K,B as Y,a3 as M,u as O}from"../../../../chunks/index-b87195f7.js";import{q as S}from"../../../../chunks/route-for-0206cbc8.js";import{p as Q}from"../../../../chunks/stores-450871c1.js";import{n as R}from"../../../../chunks/namespaces-f9986fb4.js";import{E as U}from"../../../../chunks/empty-state-a0845a3d.js";import{P as V}from"../../../../chunks/page-title-9a349cc9.js";import{P as W}from"../../../../chunks/pagination-b084e85a.js";import{T as X,a as Z}from"../../../../chunks/table-header-row-93dcc691.js";import{T as ee}from"../../../../chunks/table-row-f99ebc78.js";function z(f,t,r){const e=f.slice();return e[3]=t[r],e}function te(f){let t,r;return t=new U({props:{title:"No Namespaces Found",content:"You do not have access to a Namespace. Contact your Administrator for assistance."}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p:Y,i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ae(f){let t,r;return t=new W({props:{items:f[1],"aria-label":"namespaces",$$slots:{default:[oe,({visibleItems:e})=>({2:e}),({visibleItems:e})=>e?4:0]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&2&&(c.items=e[1]),a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function re(f){let t,r,e=f[3].namespaceInfo.name+"",a,c,s;return{c(){t=N("td"),r=N("a"),a=A(e),s=q(),this.h()},l(n){t=E(n,"TD",{});var l=P(t);r=E(l,"A",{href:!0,class:!0});var p=P(r);a=B(p,e),p.forEach(m),l.forEach(m),s=x(n),this.h()},h(){v(r,"href",c=S({namespace:f[3].namespaceInfo.name})),v(r,"class","hover:text-blue-700 hover:underline hover:decoration-blue-700")},m(n,l){h(n,t,l),y(t,r),y(r,a),h(n,s,l)},p(n,l){l&4&&e!==(e=n[3].namespaceInfo.name+"")&&O(a,e),l&4&&c!==(c=S({namespace:n[3].namespaceInfo.name}))&&v(r,"href",c)},d(n){n&&m(t),n&&m(s)}}}function D(f){let t,r;return t=new ee({props:{$$slots:{default:[re]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function se(f){let t,r,e=f[2],a=[];for(let s=0;s<e.length;s+=1)a[s]=D(z(f,e,s));const c=s=>$(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=T()},l(s){for(let n=0;n<a.length;n+=1)a[n].l(s);t=T()},m(s,n){for(let l=0;l<a.length;l+=1)a[l].m(s,n);h(s,t,n),r=!0},p(s,n){if(n&4){e=s[2];let l;for(l=0;l<e.length;l+=1){const p=z(s,e,l);a[l]?(a[l].p(p,n),u(a[l],1)):(a[l]=D(p),a[l].c(),u(a[l],1),a[l].m(t.parentNode,t))}for(K(),l=e.length;l<a.length;l+=1)c(l);J()}},i(s){if(!r){for(let n=0;n<e.length;n+=1)u(a[n]);r=!0}},o(s){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)$(a[n]);r=!1},d(s){M(a,s),s&&m(t)}}}function ne(f){let t,r;return{c(){t=N("th"),r=A("Name")},l(e){t=E(e,"TH",{});var a=P(t);r=B(a,"Name"),a.forEach(m)},m(e,a){h(e,t,a),y(t,r)},p:Y,d(e){e&&m(t)}}}function le(f){let t,r;return t=new Z({props:{slot:"headers",$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&64&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function oe(f){let t,r;return t=new X({props:{variant:"fancy",class:"w-full",$$slots:{headers:[le],default:[se]},$$scope:{ctx:f}}}),{c(){g(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,a){b(t,e,a),r=!0},p(e,a){const c={};a&68&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){$(t.$$.fragment,e),r=!1},d(e){w(t,e)}}}function ce(f){let t,r,e,a,c,s,n,l,p;t=new V({props:{title:"Namespaces",url:f[0].url.href}});const C=[ae,te],_=[];function F(o,i){var k;return((k=o[1])==null?void 0:k.length)>0?0:1}return s=F(f),n=_[s]=C[s](f),{c(){g(t.$$.fragment),r=q(),e=N("h1"),a=A("Namespaces"),c=q(),n.c(),l=T(),this.h()},l(o){d(t.$$.fragment,o),r=x(o),e=E(o,"H1",{"data-testid":!0,class:!0});var i=P(e);a=B(i,"Namespaces"),i.forEach(m),c=x(o),n.l(o),l=T(),this.h()},h(){v(e,"data-testid","namespace-selector-title"),v(e,"class","mb-8 text-2xl")},m(o,i){b(t,o,i),h(o,r,i),h(o,e,i),y(e,a),h(o,c,i),_[s].m(o,i),h(o,l,i),p=!0},p(o,[i]){const k={};i&1&&(k.url=o[0].url.href),t.$set(k);let I=s;s=F(o),s===I?_[s].p(o,i):(K(),$(_[I],1,1,()=>{_[I]=null}),J(),n=_[s],n?n.p(o,i):(n=_[s]=C[s](o),n.c()),u(n,1),n.m(l.parentNode,l))},i(o){p||(u(t.$$.fragment,o),u(n),p=!0)},o(o){$(t.$$.fragment,o),$(n),p=!1},d(o){w(t,o),o&&m(r),o&&m(e),o&&m(c),_[s].d(o),o&&m(l)}}}function fe(f,t,r){let e,a;return H(f,Q,c=>r(0,e=c)),H(f,R,c=>r(1,a=c)),[e,a]}class be extends j{constructor(t){super(),G(this,t,fe,ce,L,{})}}export{be as default};