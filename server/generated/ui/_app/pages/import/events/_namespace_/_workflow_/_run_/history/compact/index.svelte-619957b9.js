import{S as a,i as u,s as c,w as f,x as g,y as _,q as l,o as y,B as E,N as s}from"../../../../../../../../chunks/index-4d40a842.js";import{p as $}from"../../../../../../../../chunks/stores-9cf180cc.js";import{a as d}from"../../../../../../../../chunks/import-events-0bdb13c0.js";import{E as h}from"../../../../../../../../chunks/event-summary-986fe0ae.js";import"../../../../../../../../chunks/index-af0e9636.js";import"../../../../../../../../chunks/event-view-a82e2c63.js";import"../../../../../../../../chunks/persist-store-2422fd33.js";import"../../../../../../../../chunks/pagination-7a14bb67.js";import"../../../../../../../../chunks/index-12dad8b6.js";import"../../../../../../../../chunks/filter-select-2cb5c61c.js";import"../../../../../../../../chunks/navigation-6709cf39.js";import"../../../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../../../chunks/update-query-parameters-08bf783c.js";import"../../../../../../../../chunks/select-c764adad.js";import"../../../../../../../../chunks/index-02115789.js";import"../../../../../../../../chunks/get-event-categorization-ea7d4f93.js";import"../../../../../../../../chunks/time-format-92058a89.js";import"../../../../../../../../chunks/format-date-919f4714.js";import"../../../../../../../../chunks/to-duration-271d3946.js";import"../../../../../../../../chunks/format-camel-case-abb2903d.js";import"../../../../../../../../chunks/route-for-e4b4dbdd.js";import"../../../../../../../../chunks/code-block-cb6c5813.js";import"../../../../../../../../chunks/link-c1629635.js";import"../../../../../../../../chunks/copyable-87e396c6.js";import"../../../../../../../../chunks/empty-state-49b705c8.js";function v(o){let r,e;return r=new h({props:{items:o[1],groups:o[0],compact:!0}}),{c(){f(r.$$.fragment)},l(t){g(r.$$.fragment,t)},m(t,m){_(r,t,m),e=!0},p(t,[m]){const p={};m&2&&(p.items=t[1]),m&1&&(p.groups=t[0]),r.$set(p)},i(t){e||(l(r.$$.fragment,t),e=!0)},o(t){y(r.$$.fragment,t),e=!1},d(t){E(r,t)}}}function G(o,r,e){let t,m,p,n;return s(o,d,i=>e(0,p=i)),s(o,$,i=>e(3,n=i)),o.$$.update=()=>{o.$$.dirty&8&&e(2,t=n.url.searchParams.get("category")),o.$$.dirty&5&&e(1,m=p.filter(i=>t?i.category===t:i))},[p,m,t,n]}class U extends a{constructor(r){super(),u(this,r,G,v,c,{})}}export{U as default};