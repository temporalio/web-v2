import{S as A,i as T,s as U,x,a as _,l as v,r as L,y as C,c as b,m as y,n as P,u as B,h as m,p as g,z as I,b as S,N as f,f as N,t as O,C as H,O as G,F as J}from"../../chunks/index-7e739eea.js";import{f as K}from"../../chunks/settings-service-7d5f2d67.js";import{p as z,s as M}from"../../chunks/route-for-06e4a074.js";import{B as Q}from"../../chunks/button-b1c22f57.js";import{p as R}from"../../chunks/stores-7f07ccfb.js";import{N as X,H as Y}from"../../chunks/hamburger-header-f8974285.js";import{P as Z}from"../../chunks/page-title-5b02a0f2.js";import"../../chunks/settings-c94c37e6.js";import"../../chunks/index-d8ed1bec.js";import"../../chunks/route-for-api-652ea8c7.js";import"../../chunks/auth-user-bc1ad23a.js";import"../../chunks/persist-store-c25f6403.js";import"../../chunks/parse-with-big-int-561ccb8b.js";import"../../chunks/notifications-7e703e91.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/icon-e2f06bf3.js";import"../../chunks/badge-16b5ec74.js";import"../../chunks/has-c7a26a56.js";import"../../chunks/is-44021919.js";import"../../chunks/data-encoder-status-41d2e8dd.js";import"../../chunks/data-converter-config-7caccf53.js";import"../../chunks/is-http-0bfd0b41.js";import"../../chunks/tooltip-8a52658c.js";import"../../chunks/copy-to-clipboard-1ace7192.js";import"../../chunks/modal-3bab1332.js";import"../../chunks/index-126fba9a.js";function tt(i){let e;return{c(){e=L("Continue to SSO")},l(s){e=B(s,"Continue to SSO")},m(s,a){S(s,e,a)},d(s){s&&m(e)}}}function et(i){let e,s,a;return{c(){e=v("div"),s=v("p"),a=L(i[2]),this.h()},l(l){e=y(l,"DIV",{class:!0});var o=P(e);s=y(o,"P",{class:!0});var p=P(s);a=B(p,i[2]),p.forEach(m),o.forEach(m),this.h()},h(){g(s,"class","rounded-md border-2 border-orange-500 bg-orange-100 p-5 text-center"),g(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(l,o){S(l,e,o),f(e,s),f(s,a)},p:J,d(l){l&&m(e)}}}function rt(i){let e,s,a,l,o,p,n,$,D,F,d,V,W,h,c,j,E;e=new Z({props:{title:"Login",url:i[1].url.href}}),a=new X({props:{href:z+"/",user:void 0}}),o=new Y({props:{href:z+"/",user:void 0}}),c=new Q({props:{dataCy:"login-button",variant:"login",icon:"lock",$$slots:{default:[tt]},$$scope:{ctx:i}}}),c.$on("click",i[3]);let u=i[2]&&et(i);return{c(){x(e.$$.fragment),s=_(),x(a.$$.fragment),l=_(),x(o.$$.fragment),p=_(),n=v("section"),$=v("h1"),D=L("Welcome back."),F=_(),d=v("p"),V=L("Let's get you signed in."),W=_(),h=v("div"),x(c.$$.fragment),j=_(),u&&u.c(),this.h()},l(t){C(e.$$.fragment,t),s=b(t),C(a.$$.fragment,t),l=b(t),C(o.$$.fragment,t),p=b(t),n=y(t,"SECTION",{class:!0});var r=P(n);$=y(r,"H1",{class:!0,"data-cy":!0});var k=P($);D=B(k,"Welcome back."),k.forEach(m),F=b(r),d=y(r,"P",{class:!0,"data-cy":!0});var w=P(d);V=B(w,"Let's get you signed in."),w.forEach(m),W=b(r),h=y(r,"DIV",{class:!0});var q=P(h);C(c.$$.fragment,q),q.forEach(m),j=b(r),u&&u.l(r),r.forEach(m),this.h()},h(){g($,"class","text-8xl font-semibold"),g($,"data-cy","login-title"),g(d,"class","my-7"),g(d,"data-cy","login-info"),g(h,"class","mx-auto"),g(n,"class","my-[20vh] text-center")},m(t,r){I(e,t,r),S(t,s,r),I(a,t,r),S(t,l,r),I(o,t,r),S(t,p,r),S(t,n,r),f(n,$),f($,D),f(n,F),f(n,d),f(d,V),f(n,W),f(n,h),I(c,h,null),f(n,j),u&&u.m(n,null),E=!0},p(t,[r]){const k={};r&2&&(k.url=t[1].url.href),e.$set(k);const w={};r&16&&(w.$$scope={dirty:r,ctx:t}),c.$set(w),t[2]&&u.p(t,r)},i(t){E||(N(e.$$.fragment,t),N(a.$$.fragment,t),N(o.$$.fragment,t),N(c.$$.fragment,t),E=!0)},o(t){O(e.$$.fragment,t),O(a.$$.fragment,t),O(o.$$.fragment,t),O(c.$$.fragment,t),E=!1},d(t){H(e,t),t&&m(s),H(a,t),t&&m(l),H(o,t),t&&m(p),t&&m(n),H(c),u&&u.d()}}}const Nt=async function({fetch:i}){const e=await K(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function st(i,e,s){let a;G(i,R,n=>s(1,a=n));const l=a.url.searchParams.get("error");let{settings:o}=e;const p=()=>{window.location.assign(M({settings:o,searchParams:a.url.searchParams,originUrl:a.url.origin}))};return i.$$set=n=>{"settings"in n&&s(0,o=n.settings)},[o,a,l,p]}class Ot extends A{constructor(e){super(),T(this,e,st,rt,U,{settings:0})}}export{Ot as default,Nt as load};