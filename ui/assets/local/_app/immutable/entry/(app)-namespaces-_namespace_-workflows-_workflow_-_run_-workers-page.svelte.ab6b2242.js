import{S as w,b as $,a as k,C as m,D as u,E as i,j as p,g as l,F as c,K as g,c as _,d as b,f as h,k as y}from"../chunks/index.c37b9eda.js";import{p as Q}from"../chunks/stores.f8ff6bb7.js";import{t as P}from"../chunks/translate.a8a7b002.js";import{P as W}from"../chunks/page-title.f0713954.js";import{w as C}from"../chunks/workflow-run.5ddf6263.js";import{W as R}from"../chunks/workers-list.aaa21b0b.js";function S(a){var s;let r,o;return r=new R({props:{taskQueue:(s=a[1])==null?void 0:s.taskQueue,workers:a[2],compatibility:a[0]}}),{c(){m(r.$$.fragment)},l(t){u(r.$$.fragment,t)},m(t,e){i(r,t,e),o=!0},p(t,[e]){var f;const n={};e&2&&(n.taskQueue=(f=t[1])==null?void 0:f.taskQueue),e&4&&(n.workers=t[2]),e&1&&(n.compatibility=t[0]),r.$set(n)},i(t){o||(p(r.$$.fragment,t),o=!0)},o(t){l(r.$$.fragment,t),o=!1},d(t){c(r,t)}}}function j(a,r,o){let s,t,e,n;return g(a,C,f=>o(3,n=f)),a.$$.update=()=>{a.$$.dirty&8&&o(2,{workers:s,workflow:t,compatibility:e}=n,s,(o(1,t),o(3,n)),(o(0,e),o(3,n)))},[e,t,s,n]}class q extends w{constructor(r){super(),$(this,r,j,S,k,{})}}function D(a){let r,o,s,t;return r=new W({props:{title:`${P("workflows","workers-tab")} | ${a[1]}`,url:a[0].url.href}}),s=new q({}),{c(){m(r.$$.fragment),o=_(),m(s.$$.fragment)},l(e){u(r.$$.fragment,e),o=b(e),u(s.$$.fragment,e)},m(e,n){i(r,e,n),h(e,o,n),i(s,e,n),t=!0},p(e,[n]){const f={};n&1&&(f.url=e[0].url.href),r.$set(f)},i(e){t||(p(r.$$.fragment,e),p(s.$$.fragment,e),t=!0)},o(e){l(r.$$.fragment,e),l(s.$$.fragment,e),t=!1},d(e){c(r,e),e&&y(o),c(s,e)}}}function E(a,r,o){let s;g(a,Q,e=>o(0,s=e));const t=s.params.workflow;return[s,t]}class G extends w{constructor(r){super(),$(this,r,E,D,k,{})}}export{G as default};