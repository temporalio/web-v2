import{S as C,i as D,s as F,M as y,k as B,l as E,m as N,h as p,P as k,Q as v,b as O,R as G,g as H,t as m,d as K,f as d,T as M,a1 as I,N as T,O as Q,F as P,G as S,H as q,I as z,w as R,a as U,x as V,c as A,n as j,y as J,K as L,z as W}from"./index-3630b6f8.js";import{I as X}from"./icon-a76a7fcc.js";function Y(u){let e;const s=u[5].default,t=P(s,u,u[4],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&16)&&S(t,s,l,l[4],e?z(s,l[4],o,null):q(l[4]),null)},i(l){e||(d(t,l),e=!0)},o(l){m(t,l),e=!1},d(l){t&&t.d(l)}}}function Z(u){let e,s,t,l,o;s=new X({props:{name:u[0]}});const _=u[5].default,i=P(_,u,u[4],null);return{c(){e=B("div"),R(s.$$.fragment),t=U(),i&&i.c(),this.h()},l(n){e=E(n,"DIV",{class:!0});var a=N(e);V(s.$$.fragment,a),t=A(a),i&&i.l(a),a.forEach(p),this.h()},h(){j(e,"class",l="flex items-center justify-center gap-2 "+u[1]+" svelte-1krpgyd")},m(n,a){O(n,e,a),J(s,e,null),L(e,t),i&&i.m(e,null),o=!0},p(n,a){const r={};a&1&&(r.name=n[0]),s.$set(r),i&&i.p&&(!o||a&16)&&S(i,_,n,n[4],o?z(_,n[4],a,null):q(n[4]),null),(!o||a&2&&l!==(l="flex items-center justify-center gap-2 "+n[1]+" svelte-1krpgyd"))&&j(e,"class",l)},i(n){o||(d(s.$$.fragment,n),d(i,n),o=!0)},o(n){m(s.$$.fragment,n),m(i,n),o=!1},d(n){n&&p(e),W(s),i&&i.d(n)}}}function w(u){let e,s,t,l,o,_,i;const n=[Z,Y],a=[];function r(c,f){return c[0]?0:1}s=r(u),t=a[s]=n[s](u);let h=[{type:"button"},{class:"icon-button"},{"data-cy":l=u[2]["data-cy"]},u[3]],b={};for(let c=0;c<h.length;c+=1)b=y(b,h[c]);return{c(){e=B("button"),t.c(),this.h()},l(c){e=E(c,"BUTTON",{type:!0,class:!0,"data-cy":!0});var f=N(e);t.l(f),f.forEach(p),this.h()},h(){k(e,b),v(e,"svelte-1krpgyd",!0)},m(c,f){O(c,e,f),a[s].m(e,null),e.autofocus&&e.focus(),o=!0,_||(i=G(e,"click",u[6]),_=!0)},p(c,[f]){let g=s;s=r(c),s===g?a[s].p(c,f):(H(),m(a[g],1,1,()=>{a[g]=null}),K(),t=a[s],t?t.p(c,f):(t=a[s]=n[s](c),t.c()),d(t,1),t.m(e,null)),k(e,b=M(h,[{type:"button"},{class:"icon-button"},(!o||f&4&&l!==(l=c[2]["data-cy"]))&&{"data-cy":l},f&8&&c[3]])),v(e,"svelte-1krpgyd",!0)},i(c){o||(d(t),o=!0)},o(c){m(t),o=!1},d(c){c&&p(e),a[s].d(),_=!1,i()}}}function x(u,e,s){const t=["icon","classes"];let l=I(e,t),{$$slots:o={},$$scope:_}=e,{icon:i=null}=e,{classes:n=""}=e;function a(r){Q.call(this,u,r)}return u.$$set=r=>{s(2,e=y(y({},e),T(r))),s(3,l=I(e,t)),"icon"in r&&s(0,i=r.icon),"classes"in r&&s(1,n=r.classes),"$$scope"in r&&s(4,_=r.$$scope)},e=T(e),[i,n,e,l,_,o,a]}class te extends C{constructor(e){super(),D(this,e,x,w,F,{icon:0,classes:1})}}export{te as I};