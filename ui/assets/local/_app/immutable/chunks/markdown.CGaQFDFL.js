import{s as k,h as g,j as w,k as b,f as m,m as c,i as I,M as H,v as R,c as h,N as d,p as S,O as T}from"./scheduler.D6mQsyhd.js";import{S as q,i as D,f as N}from"./index.CDeUyeTp.js";import{f as O}from"./index.2cpoF_sa.js";import{p as U}from"./stores.BmKzqtMg.js";import{u as j}from"./dark-mode.BmrJbB3_.js";function _(s){let e,n,i,o;return{c(){e=g("iframe"),this.h()},l(t){e=w(t,"IFRAME",{title:!0,src:!0,class:!0}),b(e).forEach(m),this.h()},h(){c(e,"title","output"),d(e.src,n="/render?content="+encodeURIComponent(s[3])+"&theme="+s[1])||c(e,"src",n),c(e,"class","w-full")},m(t,a){I(t,e,a),s[6](e),i||(o=S(e,"load",s[2]),i=!0)},p(t,a){a&2&&!d(e.src,n="/render?content="+encodeURIComponent(t[3])+"&theme="+t[1])&&c(e,"src",n)},d(t){t&&m(e),s[6](null),i=!1,o()}}}function z(s){let e,n=s[1],i,o=_(s);return{c(){e=g("section"),o.c(),this.h()},l(t){e=w(t,"SECTION",{class:!0});var a=b(e);o.l(a),a.forEach(m),this.h()},h(){c(e,"class","h-full w-full")},m(t,a){I(t,e,a),o.m(e,null)},p(t,[a]){a&2&&k(n,n=t[1])?(o.d(1),o=_(t),o.c(),o.m(e,null)):o.p(t,a)},i(t){t&&(i||H(()=>{i=N(e,O,{duration:1e3}),i.start()}))},o:R,d(t){t&&m(e),o.d(t)}}}function A(s,e,n){let i,o,t;h(s,U,r=>n(7,o=r)),h(s,j,r=>n(5,t=r));let{content:a}=e,l;const M=()=>{if(!l)return;const E=Math.max(l.contentWindow.document.body.scrollHeight+2,100);n(0,l.height="",l),n(0,l.height=E+"px",l)},{workflow:f,run:u,namespace:p}=o.params,y=(r=>(p&&(r=r.replace(/\{namespace\}/g,p)),f&&(r=r.replace(/\{workflowId\}/g,f)),u&&(r=r.replace(/\{runId\}/g,u)),r))(a);function C(r){T[r?"unshift":"push"](()=>{l=r,n(0,l)})}return s.$$set=r=>{"content"in r&&n(4,a=r.content)},s.$$.update=()=>{s.$$.dirty&32&&n(1,i=t?"dark":"light")},[l,i,M,y,a,t,C]}class L extends q{constructor(e){super(),D(this,e,A,z,k,{content:4})}}export{L as M};