import{S as F,b as G,a as H,G as J,O as C,m as M,c as P,p as N,q as O,d as q,k as I,P as D,Q as v,f as A,L as E,M as Q,j as d,z as R,g as T,h as U,H as B,I as K,J as V,R as W,T as S,U as X,C as Y,D as Z,E as p,F as y,w,x,y as $}from"./index.0942deb7.js";import{g as ee}from"./navigation.f021cc7f.js";import{I as le}from"./icon.33308831.js";function j(s){let e,a;return e=new le({props:{width:20,height:20,class:"mt-0.5",name:s[4]}}),{c(){Y(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,u){p(e,n,u),a=!0},p(n,u){const c={};u&16&&(c.name=n[4]),e.$set(c)},i(n){a||(d(e.$$.fragment,n),a=!0)},o(n){T(e.$$.fragment,n),a=!1},d(n){y(e,n)}}}function z(s){let e;return{c(){e=w(s[5])},l(a){e=x(a,s[5])},m(a,n){A(a,e,n)},p(a,n){n&32&&$(e,a[5])},d(a){a&&I(e)}}}function te(s){let e,a,n,u,c,_,m,o,h,g,i=s[4]&&j(s),r=s[5]&&z(s);const b=s[9].default,l=J(b,s,s[8],null);let L=[{href:s[1]},{target:u=s[3]?"_blank":null},{rel:c=s[3]?"noreferrer":null},{class:_="link "+(s[4]?"inline-flex":"inline")+" "+s[0]},{tabindex:m=s[1]?null:0},s[7]],k={};for(let t=0;t<L.length;t+=1)k=C(k,L[t]);return{c(){e=M("a"),i&&i.c(),a=P(),r&&r.c(),n=P(),l&&l.c(),this.h()},l(t){e=N(t,"A",{href:!0,target:!0,rel:!0,class:!0,tabindex:!0});var f=O(e);i&&i.l(f),a=q(f),r&&r.l(f),n=q(f),l&&l.l(f),f.forEach(I),this.h()},h(){D(e,k),v(e,"active",s[2]),v(e,"svelte-10xxh5w",!0)},m(t,f){A(t,e,f),i&&i.m(e,null),E(e,a),r&&r.m(e,null),E(e,n),l&&l.m(e,null),o=!0,h||(g=Q(e,"click",s[6]),h=!0)},p(t,[f]){t[4]?i?(i.p(t,f),f&16&&d(i,1)):(i=j(t),i.c(),d(i,1),i.m(e,a)):i&&(R(),T(i,1,1,()=>{i=null}),U()),t[5]?r?r.p(t,f):(r=z(t),r.c(),r.m(e,n)):r&&(r.d(1),r=null),l&&l.p&&(!o||f&256)&&B(l,b,t,t[8],o?V(b,t[8],f,null):K(t[8]),null),D(e,k=W(L,[(!o||f&2)&&{href:t[1]},(!o||f&8&&u!==(u=t[3]?"_blank":null))&&{target:u},(!o||f&8&&c!==(c=t[3]?"noreferrer":null))&&{rel:c},(!o||f&17&&_!==(_="link "+(t[4]?"inline-flex":"inline")+" "+t[0]))&&{class:_},(!o||f&2&&m!==(m=t[1]?null:0))&&{tabindex:m},f&128&&t[7]])),v(e,"active",t[2]),v(e,"svelte-10xxh5w",!0)},i(t){o||(d(i),d(l,t),o=!0)},o(t){T(i),T(l,t),o=!1},d(t){t&&I(e),i&&i.d(),r&&r.d(),l&&l.d(t),h=!1,g()}}}function ae(s,e,a){const n=["class","href","active","newTab","icon","text"];let u=S(e,n),{$$slots:c={},$$scope:_}=e,{class:m=""}=e,{href:o=null}=e,{active:h=!1}=e,{newTab:g=!1}=e,{icon:i=null}=e,{text:r=""}=e;const b=l=>{l.button===1||g||(l.preventDefault(),l.stopPropagation(),ee(o))};return s.$$set=l=>{e=C(C({},e),X(l)),a(7,u=S(e,n)),"class"in l&&a(0,m=l.class),"href"in l&&a(1,o=l.href),"active"in l&&a(2,h=l.active),"newTab"in l&&a(3,g=l.newTab),"icon"in l&&a(4,i=l.icon),"text"in l&&a(5,r=l.text),"$$scope"in l&&a(8,_=l.$$scope)},[m,o,h,g,i,r,b,u,_,c]}class fe extends F{constructor(e){super(),G(this,e,ae,te,H,{class:0,href:1,active:2,newTab:3,icon:4,text:5})}}export{fe as L};