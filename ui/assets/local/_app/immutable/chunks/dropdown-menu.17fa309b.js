import{S as Z,b as y,a as w,C as M,D as S,E as A,j as m,g,F as N,o as x,M as $,N as z,O as F,i as ee,n as q,m as v,c as L,p,q as k,d as V,k as h,u as b,f as T,L as I,z as te,h as se,A as le,G as P,R as O,H as R,I as B,J as K,$ as Q,aa as U,an as ne}from"./index.bbf544d0.js";import{T as ae,s as C}from"./tooltip.f8cf8a13.js";import{I as ie}from"./icon-button.35c438aa.js";import{I as oe}from"./icon.660be073.js";const fe=s=>({}),G=s=>({});function re(s){let e,l,n,o;const f=s[11].label,r=P(f,s,s[13],G);return n=new oe({props:{name:s[1]?s[1]:s[6]?"chevron-up":"chevron-down",class:"pointer-events-none",width:20,height:20}}),{c(){e=v("div"),r&&r.c(),l=L(),M(n.$$.fragment),this.h()},l(a){e=p(a,"DIV",{class:!0});var t=k(e);r&&r.l(t),l=V(t),S(n.$$.fragment,t),t.forEach(h),this.h()},h(){b(e,"class","flex items-center gap-1 truncate svelte-1o0pqx5"),O(e,"disabled",s[3])},m(a,t){T(a,e,t),r&&r.m(e,null),I(e,l),A(n,e,null),o=!0},p(a,t){r&&r.p&&(!o||t&8192)&&R(r,f,a,a[13],o?K(f,a[13],t,fe):B(a[13]),G);const i={};t&66&&(i.name=a[1]?a[1]:a[6]?"chevron-up":"chevron-down"),n.$set(i),(!o||t&8)&&O(e,"disabled",a[3])},i(a){o||(m(r,a),m(n.$$.fragment,a),o=!0)},o(a){g(r,a),g(n.$$.fragment,a),o=!1},d(a){a&&h(e),r&&r.d(a),N(n)}}}function H(s){let e,l;return{c(){e=v("span"),this.h()},l(n){e=p(n,"SPAN",{class:!0}),k(e).forEach(h),this.h()},h(){b(e,"class","dot svelte-1o0pqx5")},m(n,o){T(n,e,o)},i(n){l||Q(()=>{l=U(e,C,{duration:200,start:.65}),l.start()})},o:q,d(n){n&&h(e)}}}function J(s){let e,l,n,o,f;const r=s[11].default,a=P(r,s,s[13],null);return{c(){e=v("div"),l=v("div"),a&&a.c(),this.h()},l(t){e=p(t,"DIV",{class:!0});var i=k(e);l=p(i,"DIV",{class:!0});var _=k(l);a&&a.l(_),_.forEach(h),i.forEach(h),this.h()},h(){b(l,"class","block gap-4"),b(e,"class","dropdown-menu svelte-1o0pqx5"),O(e,"right",s[2])},m(t,i){T(t,e,i),I(e,l),a&&a.m(l,null),f=!0},p(t,i){a&&a.p&&(!f||i&8192)&&R(a,r,t,t[13],f?K(r,t[13],i,null):B(t[13]),null),(!f||i&4)&&O(e,"right",t[2])},i(t){f||(m(a,t),Q(()=>{o&&o.end(1),n=U(e,C,{duration:200,start:.65}),n.start()}),f=!0)},o(t){g(a,t),n&&n.invalidate(),o=ne(e,C,{duration:100,start:.65}),f=!1},d(t){t&&h(e),a&&a.d(t),t&&o&&o.end()}}}function ue(s){let e,l,n,o,f,r,a;n=new ie({props:{"data-testid":s[9].testId+"-button",label:s[5],$$slots:{default:[re]},$$scope:{ctx:s}}}),n.$on("click",function(){ee(s[3]?q:s[8])&&(s[3]?q:s[8]).apply(this,arguments)});let t=s[0]&&H(),i=s[6]&&J(s);return{c(){e=v("div"),l=v("div"),M(n.$$.fragment),o=L(),t&&t.c(),r=L(),i&&i.c(),this.h()},l(_){e=p(_,"DIV",{});var c=k(e);l=p(c,"DIV",{class:!0,"data-testid":!0});var d=k(l);S(n.$$.fragment,d),o=V(d),t&&t.l(d),d.forEach(h),r=V(c),i&&i.l(c),c.forEach(h),this.h()},h(){b(l,"class","relative inline"),b(l,"data-testid",f=s[9].testId)},m(_,c){T(_,e,c),I(e,l),A(n,l,null),I(l,o),t&&t.m(l,null),I(e,r),i&&i.m(e,null),s[12](e),a=!0},p(_,c){s=_;const d={};c&512&&(d["data-testid"]=s[9].testId+"-button"),c&32&&(d.label=s[5]),c&8266&&(d.$$scope={dirty:c,ctx:s}),n.$set(d),s[0]?t?c&1&&m(t,1):(t=H(),t.c(),m(t,1),t.m(l,null)):t&&(t.d(1),t=null),(!a||c&512&&f!==(f=s[9].testId))&&b(l,"data-testid",f),s[6]?i?(i.p(s,c),c&64&&m(i,1)):(i=J(s),i.c(),m(i,1),i.m(e,null)):i&&(te(),g(i,1,1,()=>{i=null}),se())},i(_){a||(m(n.$$.fragment,_),m(t),m(i),a=!0)},o(_){g(n.$$.fragment,_),g(i),a=!1},d(_){_&&h(e),N(n),t&&t.d(),i&&i.d(),s[12](null)}}}function de(s){let e,l;return e=new ae({props:{text:s[4],top:!0,hide:!s[3],$$slots:{default:[ue]},$$scope:{ctx:s}}}),{c(){M(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,o){A(e,n,o),l=!0},p(n,[o]){const f={};o&16&&(f.text=n[4]),o&8&&(f.hide=!n[3]),o&8943&&(f.$$scope={dirty:o,ctx:n}),e.$set(f)},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){N(e,n)}}}function ce(s,e,l){let{$$slots:n={},$$scope:o}=e,{value:f}=e,{icon:r=void 0}=e,{right:a=!1}=e,{keepOpen:t=!1}=e,{disabled:i=!1}=e,{disabledText:_=""}=e,{label:c}=e,d=!1,D=null;x(()=>{const u=E=>{d&&!D.contains(E.target)&&l(6,d=!1)},j=E=>{d&&(E==null?void 0:E.key)==="Escape"&&l(6,d=!1)};return document.addEventListener("click",u,!1),document.addEventListener("keyup",j,!1),()=>{document.removeEventListener("click",u,!1),document.removeEventListener("keyup",j,!1)}});const W=$(),X=()=>{l(6,d=!d),W("showmenu",{show:d})};function Y(u){le[u?"unshift":"push"](()=>{D=u,l(7,D)})}return s.$$set=u=>{l(9,e=z(z({},e),F(u))),"value"in u&&l(0,f=u.value),"icon"in u&&l(1,r=u.icon),"right"in u&&l(2,a=u.right),"keepOpen"in u&&l(10,t=u.keepOpen),"disabled"in u&&l(3,i=u.disabled),"disabledText"in u&&l(4,_=u.disabledText),"label"in u&&l(5,c=u.label),"$$scope"in u&&l(13,o=u.$$scope)},s.$$.update=()=>{s.$$.dirty&1025&&(f||!f)&&!t&&l(6,d=!1)},e=F(e),[f,r,a,i,_,c,d,D,X,e,t,n,Y,o]}class be extends Z{constructor(e){super(),y(this,e,ce,de,w,{value:0,icon:1,right:2,keepOpen:10,disabled:3,disabledText:4,label:5})}}export{be as D};