import{a as Be}from"../chunks/nexus-service.DP-_6UqP.js";import{s as ve,a as Re,h as y,t as N,b as S,j as x,k as P,l as E,f as p,d as A,o as Fe,m as I,N as Qe,H as ye,i as D,n as m,u as je,g as Le,e as Me,c as ue,v as we,x as xe,O as Ue,Q as Ge,y as ze,q as oe}from"../chunks/scheduler.D6mQsyhd.js";import{S as ke,i as Ne,c as j,a as L,m as M,t as v,b as w,d as H,g as ce,e as pe,h as Je}from"../chunks/index.CDeUyeTp.js";import{P as Ke}from"../chunks/page-title.h9prjCqF.js";import{t as U}from"../chunks/translate.BBe5dcco.js";import{e as Te}from"../chunks/each.5YhwczXz.js";import{d as Xe}from"../chunks/index.XTc-EU-b.js";import{p as Ye}from"../chunks/stores.BmKzqtMg.js";import{B as He}from"../chunks/badge.R7mYic6p.js";import{B as Oe}from"../chunks/button.CLTznveR.js";import{E as Ze}from"../chunks/empty-state.CdXD21ju.js";import{I as et}from"../chunks/input.CdBZ8ZVu.js";import{L as re}from"../chunks/link.5TyCNMrl.js";import{u as tt}from"../chunks/dark-mode.BmrJbB3_.js";import{p as We,j as Pe}from"../chunks/route-for.CMlWofRz.js";import{t as st,f as fe}from"../chunks/time-format.BcqjYxpE.js";import{p as Ie}from"../chunks/format-time.Dn4a2B__.js";import{u as at}from"../chunks/update-query-parameters.M7keXCBm.js";import{r as lt}from"../chunks/entry.YpKWaSZQ.js";const rt=async({fetch:r,url:e})=>{const t=e.searchParams.get("search")||"";return{endpoints:await Be(t,r)}},Yt=Object.freeze(Object.defineProperty({__proto__:null,load:rt},Symbol.toStringTag,{value:"Module"})),nt=""+new URL("../assets/andromeda.DWHCRWfo.png",import.meta.url).href;function ot(r){let e;return{c(){e=N("Public Preview")},l(t){e=E(t,"Public Preview")},m(t,s){D(t,e,s)},d(t){t&&p(e)}}}function it(r){let e;return{c(){e=N("Temporal Nexus")},l(t){e=E(t,"Temporal Nexus")},m(t,s){D(t,e,s)},d(t){t&&p(e)}}}function ut(r){let e;return{c(){e=N("Nexus Services")},l(t){e=E(t,"Nexus Services")},m(t,s){D(t,e,s)},d(t){t&&p(e)}}}function ft(r){let e;return{c(){e=N("Nexus Endpoint")},l(t){e=E(t,"Nexus Endpoint")},m(t,s){D(t,e,s)},d(t){t&&p(e)}}}function ct(r){let e;return{c(){e=N("Nexus Registry")},l(t){e=E(t,"Nexus Registry")},m(t,s){D(t,e,s)},d(t){t&&p(e)}}}function pt(r){let e;return{c(){e=N("Nexus Operations")},l(t){e=E(t,"Nexus Operations")},m(t,s){D(t,e,s)},d(t){t&&p(e)}}}function dt(r){let e=U("nexus.create-endpoint")+"",t;return{c(){t=N(e)},l(s){t=E(s,e)},m(s,a){D(s,t,a)},p:we,d(s){s&&p(t)}}}function mt(r){let e,t,s,a,l,n=U("nexus.endpoints")+"",u,o,d,c,f,h,T="Get Started",i,g,q,te,se,C,W,$,b,F,V,Q,de,K,me,G,_e,he,$e,z,ge,J,ae,Ee,X;d=new He({props:{type:"primary",$$slots:{default:[ot]},$$scope:{ctx:r}}}),q=new re({props:{href:"https://docs.temporal.io/evaluate/nexus",newTab:!0,$$slots:{default:[it]},$$scope:{ctx:r}}}),W=new re({props:{href:"https://docs.temporal.io/nexus/services",newTab:!0,$$slots:{default:[ut]},$$scope:{ctx:r}}}),b=new re({props:{href:"https://docs.temporal.io/nexus/endpoints",newTab:!0,$$slots:{default:[ft]},$$scope:{ctx:r}}}),V=new re({props:{href:"https://docs.temporal.io/nexus/registry",newTab:!0,$$slots:{default:[ct]},$$scope:{ctx:r}}}),G=new re({props:{href:"https://docs.temporal.io/nexus/operations",newTab:!0,$$slots:{default:[pt]},$$scope:{ctx:r}}});const be=r[2].default,O=Re(be,r,r[3],null);return z=new Oe({props:{disabled:r[0],variant:"primary",href:We(),$$slots:{default:[dt]},$$scope:{ctx:r}}}),{c(){e=y("div"),t=y("div"),s=y("div"),a=y("div"),l=y("h1"),u=N(n),o=S(),j(d.$$.fragment),c=S(),f=y("div"),h=y("h2"),h.textContent=T,i=S(),g=y("p"),j(q.$$.fragment),te=N(` allows you to reliably connect Temporal Applications. It promotes a more
          modular architecture for sharing a subset of your team's capabilities with
          well-defined microservice contracts for other teams to use. Nexus was designed
          with Durable Execution in mind and enables each team to have their own
          Namespace for improved modularity, security, debugging, and fault isolation.`),se=S(),C=y("p"),j(W.$$.fragment),$=N(" are exposed from a "),j(b.$$.fragment),F=N(" created in the "),j(V.$$.fragment),Q=N(`. Adding a Nexus Endpoint to the Nexus Registry deploys the Endpoint,
          so it is available at runtime to serve Nexus requests.`),de=S(),K=y("p"),me=N(`A Nexus Endpoint is a reverse proxy that decouples the caller from the
          handler and routes requests to upstream targets. It currently supports
          routing to a single target Namespace and Task Queue. Nexus Services
          and `),j(G.$$.fragment),_e=N(` are often registered in the same Worker as the underlying Temporal primitives
          they abstract.`),he=S(),O&&O.c(),$e=S(),j(z.$$.fragment),ge=S(),J=y("div"),ae=y("img"),this.h()},l(_){e=x(_,"DIV",{class:!0});var k=P(e);t=x(k,"DIV",{class:!0});var Y=P(t);s=x(Y,"DIV",{});var Z=P(s);a=x(Z,"DIV",{class:!0});var ee=P(a);l=x(ee,"H1",{"data-testid":!0,class:!0});var ne=P(l);u=E(ne,n),ne.forEach(p),o=A(ee),L(d.$$.fragment,ee),ee.forEach(p),c=A(Z),f=x(Z,"DIV",{class:!0});var R=P(f);h=x(R,"H2",{class:!0,"data-svelte-h":!0}),Fe(h)!=="svelte-1s4mq96"&&(h.textContent=T),i=A(R),g=x(R,"P",{});var le=P(g);L(q.$$.fragment,le),te=E(le,` allows you to reliably connect Temporal Applications. It promotes a more
          modular architecture for sharing a subset of your team's capabilities with
          well-defined microservice contracts for other teams to use. Nexus was designed
          with Durable Execution in mind and enables each team to have their own
          Namespace for improved modularity, security, debugging, and fault isolation.`),le.forEach(p),se=A(R),C=x(R,"P",{});var B=P(C);L(W.$$.fragment,B),$=E(B," are exposed from a "),L(b.$$.fragment,B),F=E(B," created in the "),L(V.$$.fragment,B),Q=E(B,`. Adding a Nexus Endpoint to the Nexus Registry deploys the Endpoint,
          so it is available at runtime to serve Nexus requests.`),B.forEach(p),de=A(R),K=x(R,"P",{});var ie=P(K);me=E(ie,`A Nexus Endpoint is a reverse proxy that decouples the caller from the
          handler and routes requests to upstream targets. It currently supports
          routing to a single target Namespace and Task Queue. Nexus Services
          and `),L(G.$$.fragment,ie),_e=E(ie,` are often registered in the same Worker as the underlying Temporal primitives
          they abstract.`),ie.forEach(p),he=A(R),O&&O.l(R),$e=A(R),L(z.$$.fragment,R),R.forEach(p),Z.forEach(p),ge=A(Y),J=x(Y,"DIV",{class:!0});var De=P(J);ae=x(De,"IMG",{src:!0,alt:!0}),De.forEach(p),Y.forEach(p),k.forEach(p),this.h()},h(){I(l,"data-testid","namespace-selector-title"),I(l,"class","text-marketingGreen font-mono uppercase"),I(a,"class","mb-8 flex items-center gap-4"),I(h,"class","text-4xl"),I(f,"class","flex w-full flex-col gap-4 pr-8 md:pr-24"),Qe(ae.src,Ee=nt)||I(ae,"src",Ee),I(ae,"alt","Andromeda"),I(J,"class","bg-dark mx-auto mt-8 w-full svelte-1vj073b"),ye(J,"invert",!r[1]),I(t,"class","flex flex-col gap-4 lg:flex-row"),I(e,"class","flex min-h-screen flex-col gap-8 p-10")},m(_,k){D(_,e,k),m(e,t),m(t,s),m(s,a),m(a,l),m(l,u),m(a,o),M(d,a,null),m(s,c),m(s,f),m(f,h),m(f,i),m(f,g),M(q,g,null),m(g,te),m(f,se),m(f,C),M(W,C,null),m(C,$),M(b,C,null),m(C,F),M(V,C,null),m(C,Q),m(f,de),m(f,K),m(K,me),M(G,K,null),m(K,_e),m(f,he),O&&O.m(f,null),m(f,$e),M(z,f,null),m(t,ge),m(t,J),m(J,ae),X=!0},p(_,[k]){const Y={};k&8&&(Y.$$scope={dirty:k,ctx:_}),d.$set(Y);const Z={};k&8&&(Z.$$scope={dirty:k,ctx:_}),q.$set(Z);const ee={};k&8&&(ee.$$scope={dirty:k,ctx:_}),W.$set(ee);const ne={};k&8&&(ne.$$scope={dirty:k,ctx:_}),b.$set(ne);const R={};k&8&&(R.$$scope={dirty:k,ctx:_}),V.$set(R);const le={};k&8&&(le.$$scope={dirty:k,ctx:_}),G.$set(le),O&&O.p&&(!X||k&8)&&je(O,be,_,_[3],X?Me(be,_[3],k,null):Le(_[3]),null);const B={};k&1&&(B.disabled=_[0]),k&8&&(B.$$scope={dirty:k,ctx:_}),z.$set(B),(!X||k&2)&&ye(J,"invert",!_[1])},i(_){X||(v(d.$$.fragment,_),v(q.$$.fragment,_),v(W.$$.fragment,_),v(b.$$.fragment,_),v(V.$$.fragment,_),v(G.$$.fragment,_),v(O,_),v(z.$$.fragment,_),X=!0)},o(_){w(d.$$.fragment,_),w(q.$$.fragment,_),w(W.$$.fragment,_),w(b.$$.fragment,_),w(V.$$.fragment,_),w(G.$$.fragment,_),w(O,_),w(z.$$.fragment,_),X=!1},d(_){_&&p(e),H(d),H(q),H(W),H(b),H(V),H(G),O&&O.d(_),H(z)}}}function _t(r,e,t){let s;ue(r,tt,u=>t(1,s=u));let{$$slots:a={},$$scope:l}=e,{createDisabled:n=!1}=e;return r.$$set=u=>{"createDisabled"in u&&t(0,n=u.createDisabled),"$$scope"in u&&t(3,l=u.$$scope)},[n,s,a,l]}class ht extends ke{constructor(e){super(),Ne(this,e,_t,mt,ve,{createDisabled:0})}}function Ce(r,e,t){const s=r.slice();return s[11]=e[t],s}function $t(r){let e,t,s=U("nexus.endpoints")+"",a,l,n,u,o,d,c,f,h,T,i,g;n=new Oe({props:{disabled:r[2],variant:"primary",href:We(),$$slots:{default:[bt]},$$scope:{ctx:r}}});function q($){r[8]($)}let te={id:"endpoint-search",icon:"search",label:r[1],labelHidden:!0,autoFocus:!0,type:"search",placeholder:r[1],class:"w-full lg:w-1/2"};r[3]!==void 0&&(te.value=r[3]),c=new et({props:te}),Ue.push(()=>Je(c,"value",q));const se=[wt,vt],C=[];function W($,b){return $[0].length?0:1}return T=W(r),i=C[T]=se[T](r),{c(){e=y("div"),t=y("h1"),a=N(s),l=S(),j(n.$$.fragment),u=S(),o=y("div"),d=y("div"),j(c.$$.fragment),h=S(),i.c(),this.h()},l($){e=x($,"DIV",{class:!0});var b=P(e);t=x(b,"H1",{"data-testid":!0});var F=P(t);a=E(F,s),F.forEach(p),l=A(b),L(n.$$.fragment,b),b.forEach(p),u=A($),o=x($,"DIV",{class:!0});var V=P(o);d=x(V,"DIV",{class:!0});var Q=P(d);L(c.$$.fragment,Q),Q.forEach(p),h=A(V),i.l(V),V.forEach(p),this.h()},h(){I(t,"data-testid","namespace-selector-title"),I(e,"class","mb-8 flex items-center justify-between"),I(d,"class","flex flex-col justify-between lg:flex-row"),I(o,"class","flex flex-col gap-4")},m($,b){D($,e,b),m(e,t),m(t,a),m(e,l),M(n,e,null),D($,u,b),D($,o,b),m(o,d),M(c,d,null),m(o,h),C[T].m(o,null),g=!0},p($,b){const F={};b&4&&(F.disabled=$[2]),b&512&&(F.$$scope={dirty:b,ctx:$}),n.$set(F);const V={};b&2&&(V.label=$[1]),b&2&&(V.placeholder=$[1]),!f&&b&8&&(f=!0,V.value=$[3],Ge(()=>f=!1)),c.$set(V);let Q=T;T=W($),T===Q?C[T].p($,b):(ce(),w(C[Q],1,1,()=>{C[Q]=null}),pe(),i=C[T],i?i.p($,b):(i=C[T]=se[T]($),i.c()),v(i,1),i.m(o,null))},i($){g||(v(n.$$.fragment,$),v(c.$$.fragment,$),v(i),g=!0)},o($){w(n.$$.fragment,$),w(c.$$.fragment,$),w(i),g=!1},d($){$&&(p(e),p(u),p(o)),H(n),H(c),C[T].d()}}}function gt(r){let e,t;return e=new ht({props:{createDisabled:r[2],$$slots:{default:[Et]},$$scope:{ctx:r}}}),{c(){j(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,a){M(e,s,a),t=!0},p(s,a){const l={};a&4&&(l.createDisabled=s[2]),a&512&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){H(e,s)}}}function bt(r){let e=U("nexus.create-endpoint")+"",t;return{c(){t=N(e)},l(s){t=E(s,e)},m(s,a){D(s,t,a)},p:we,d(s){s&&p(t)}}}function vt(r){let e,t,s;return t=new Ze({props:{title:U("nexus.empty-state")}}),{c(){e=y("div"),j(t.$$.fragment),this.h()},l(a){e=x(a,"DIV",{class:!0});var l=P(e);L(t.$$.fragment,l),l.forEach(p),this.h()},h(){I(e,"class","flex w-full justify-center")},m(a,l){D(a,e,l),M(t,e,null),s=!0},p:we,i(a){s||(v(t.$$.fragment,a),s=!0)},o(a){w(t.$$.fragment,a),s=!1},d(a){a&&p(e),H(t)}}}function wt(r){let e,t,s=Te(r[0]),a=[];for(let n=0;n<s.length;n+=1)a[n]=qe(Ce(r,s,n));const l=n=>w(a[n],1,1,()=>{a[n]=null});return{c(){e=y("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=x(n,"DIV",{class:!0});var u=P(e);for(let o=0;o<a.length;o+=1)a[o].l(u);u.forEach(p),this.h()},h(){I(e,"class","grid grid-cols-1 gap-4 pr-8 md:grid-cols-2 md:pr-24 lg:grid-cols-3 xl:grid-cols-4 xl:pr-48")},m(n,u){D(n,e,u);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(e,null);t=!0},p(n,u){if(u&33){s=Te(n[0]);let o;for(o=0;o<s.length;o+=1){const d=Ce(n,s,o);a[o]?(a[o].p(d,u),v(a[o],1)):(a[o]=qe(d),a[o].c(),v(a[o],1),a[o].m(e,null))}for(ce(),o=s.length;o<a.length;o+=1)l(o);pe()}},i(n){if(!t){for(let u=0;u<s.length;u+=1)v(a[u]);t=!0}},o(n){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)w(a[u]);t=!1},d(n){n&&p(e),ze(a,n)}}}function Ve(r){let e,t,s=fe(r[11].lastModifiedTime,r[5])+"",a;return{c(){e=y("p"),t=N("Last update "),a=N(s),this.h()},l(l){e=x(l,"P",{class:!0});var n=P(e);t=E(n,"Last update "),a=E(n,s),n.forEach(p),this.h()},h(){I(e,"class","text-xs text-secondary")},m(l,n){D(l,e,n),m(e,t),m(e,a)},p(l,n){n&33&&s!==(s=fe(l[11].lastModifiedTime,l[5])+"")&&oe(a,s)},d(l){l&&p(e)}}}function Se(r){let e,t,s=fe(r[11].createdTime,r[5])+"",a;return{c(){e=y("p"),t=N("Created on "),a=N(s),this.h()},l(l){e=x(l,"P",{class:!0});var n=P(e);t=E(n,"Created on "),a=E(n,s),n.forEach(p),this.h()},h(){I(e,"class","text-xs text-secondary")},m(l,n){D(l,e,n),m(e,t),m(e,a)},p(l,n){n&33&&s!==(s=fe(l[11].createdTime,l[5])+"")&&oe(a,s)},d(l){l&&p(e)}}}function Ae(r){let e,t;return e=new He({props:{type:"primary",class:"px-2 py-1",$$slots:{default:[kt]},$$scope:{ctx:r}}}),{c(){j(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,a){M(e,s,a),t=!0},p(s,a){const l={};a&513&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){H(e,s)}}}function kt(r){var n,u;let e=((n=r[11].spec)==null?void 0:n.allowedCallerNamespaces.length)+"",t,s,a=Ie(U("namespaces.namespace"),(u=r[11].spec)==null?void 0:u.allowedCallerNamespaces.length)+"",l;return{c(){t=N(e),s=S(),l=N(a)},l(o){t=E(o,e),s=A(o),l=E(o,a)},m(o,d){D(o,t,d),D(o,s,d),D(o,l,d)},p(o,d){var c,f;d&1&&e!==(e=((c=o[11].spec)==null?void 0:c.allowedCallerNamespaces.length)+"")&&oe(t,e),d&1&&a!==(a=Ie(U("namespaces.namespace"),(f=o[11].spec)==null?void 0:f.allowedCallerNamespaces.length)+"")&&oe(l,a)},d(o){o&&(p(t),p(s),p(l))}}}function Nt(r){var T;let e,t,s=r[11].spec.name+"",a,l,n,u,o,d,c=r[11].lastModifiedTime&&Ve(r),f=r[11].createdTime&&Se(r),h=((T=r[11].spec)==null?void 0:T.allowedCallerNamespaces)&&Ae(r);return{c(){e=y("div"),t=y("h3"),a=N(s),l=S(),c&&c.c(),n=S(),f&&f.c(),u=S(),h&&h.c(),o=S(),this.h()},l(i){e=x(i,"DIV",{class:!0});var g=P(e);t=x(g,"H3",{class:!0});var q=P(t);a=E(q,s),q.forEach(p),l=A(g),c&&c.l(g),n=A(g),f&&f.l(g),u=A(g),h&&h.l(g),g.forEach(p),o=A(i),this.h()},h(){I(t,"class","break-all"),I(e,"class","transition:colors flex cursor-pointer flex-col gap-1 p-4 duration-200 ease-in-out")},m(i,g){D(i,e,g),m(e,t),m(t,a),m(e,l),c&&c.m(e,null),m(e,n),f&&f.m(e,null),m(e,u),h&&h.m(e,null),D(i,o,g),d=!0},p(i,g){var q;(!d||g&1)&&s!==(s=i[11].spec.name+"")&&oe(a,s),i[11].lastModifiedTime?c?c.p(i,g):(c=Ve(i),c.c(),c.m(e,n)):c&&(c.d(1),c=null),i[11].createdTime?f?f.p(i,g):(f=Se(i),f.c(),f.m(e,u)):f&&(f.d(1),f=null),(q=i[11].spec)!=null&&q.allowedCallerNamespaces?h?(h.p(i,g),g&1&&v(h,1)):(h=Ae(i),h.c(),v(h,1),h.m(e,null)):h&&(ce(),w(h,1,1,()=>{h=null}),pe())},i(i){d||(v(h),d=!0)},o(i){w(h),d=!1},d(i){i&&(p(e),p(o)),c&&c.d(),f&&f.d(),h&&h.d()}}}function qe(r){let e,t;return e=new re({props:{href:Pe(r[11].id),role:"button",$$slots:{default:[Nt]},$$scope:{ctx:r}}}),{c(){j(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,a){M(e,s,a),t=!0},p(s,a){const l={};a&1&&(l.href=Pe(s[11].id)),a&545&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){H(e,s)}}}function Et(r){let e;const t=r[7].default,s=Re(t,r,r[9],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),e=!0},p(a,l){s&&s.p&&(!e||l&512)&&je(s,t,a,a[9],e?Me(t,a[9],l,null):Le(a[9]),null)},i(a){e||(v(s,a),e=!0)},o(a){w(s,a),e=!1},d(a){s&&s.d(a)}}}function Dt(r){let e,t,s,a;const l=[gt,$t],n=[];function u(o,d){var c;return!((c=o[0])!=null&&c.length)&&!o[4]?0:1}return e=u(r),t=n[e]=l[e](r),{c(){t.c(),s=xe()},l(o){t.l(o),s=xe()},m(o,d){n[e].m(o,d),D(o,s,d),a=!0},p(o,[d]){let c=e;e=u(o),e===c?n[e].p(o,d):(ce(),w(n[c],1,1,()=>{n[c]=null}),pe(),t=n[e],t?t.p(o,d):(t=n[e]=l[e](o),t.c()),v(t,1),t.m(s.parentNode,s))},i(o){a||(v(t),a=!0)},o(o){w(t),a=!1},d(o){o&&p(s),n[e].d(o)}}}function yt(r,e,t){let s,a,l;ue(r,Ye,i=>t(6,a=i)),ue(r,st,i=>t(5,l=i));let{$$slots:n={},$$scope:u}=e,{endpoints:o=[]}=e,{searchPlaceholder:d=U("common.search")}=e,{createDisabled:c=!1}=e,f="";const h=Xe(i=>{at({parameter:"search",value:i,url:a.url})},350);function T(i){f=i,t(3,f)}return r.$$set=i=>{"endpoints"in i&&t(0,o=i.endpoints),"searchPlaceholder"in i&&t(1,d=i.searchPlaceholder),"createDisabled"in i&&t(2,c=i.createDisabled),"$$scope"in i&&t(9,u=i.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(4,s=a.url.searchParams.get("search")||""),r.$$.dirty&8&&h(f)},[o,d,c,f,s,l,a,n,T,u]}class xt extends ke{constructor(e){super(),Ne(this,e,yt,Dt,ve,{endpoints:0,searchPlaceholder:1,createDisabled:2})}}const Tt={auth:{enabled:!1,options:null},baseUrl:"http://localhost:3000",bannerText:"",codec:{endpoint:"",passAccessToken:!1,includeCredentials:!1},defaultNamespace:"default",disableWriteActions:!1,showTemporalSystemNamespace:!1,batchActionsDisabled:!1,workflowResetDisabled:!1,workflowCancelDisabled:!1,workflowSignalDisabled:!1,workflowTerminateDisabled:!1,hideWorkflowQueryErrors:!1,notifyOnNewVersion:!0,feedbackURL:"",runtimeEnvironment:{isCloud:!1,isLocal:!0,envOverride:!0},version:"2.28.0"},Pt={settings:Tt},It=lt({error:null,params:{namespace:"default"},routeId:"namespaces/[namespace]/workflows@root",status:200,data:Pt,url:new URL("http://localhost:3000/namespaces/default/workflows?search=basic&query=WorkflowType%3D%22testing%22")});function Ct(r){let e,t,s,a;return e=new Ke({props:{title:U("nexus.endpoints"),url:r[1].url.href}}),s=new xt({props:{endpoints:r[0]}}),{c(){j(e.$$.fragment),t=S(),j(s.$$.fragment)},l(l){L(e.$$.fragment,l),t=A(l),L(s.$$.fragment,l)},m(l,n){M(e,l,n),D(l,t,n),M(s,l,n),a=!0},p(l,[n]){const u={};n&2&&(u.url=l[1].url.href),e.$set(u);const o={};n&1&&(o.endpoints=l[0]),s.$set(o)},i(l){a||(v(e.$$.fragment,l),v(s.$$.fragment,l),a=!0)},o(l){w(e.$$.fragment,l),w(s.$$.fragment,l),a=!1},d(l){l&&p(t),H(e,l),H(s,l)}}}function Vt(r,e,t){let s,a;ue(r,It,n=>t(1,a=n));let{data:l}=e;return r.$$set=n=>{"data"in n&&t(2,l=n.data)},r.$$.update=()=>{r.$$.dirty&4&&t(0,{endpoints:s}=l,s)},[s,a,l]}class Zt extends ke{constructor(e){super(),Ne(this,e,Vt,Ct,ve,{data:2})}}export{Zt as component,Yt as universal};