import{s as L,h as y,b,j as E,k as N,d as w,f as g,m as d,i as C,n as _,p as U,c as j,t as G,l as H,v as T}from"./scheduler.1T9hOnFr.js";import{S as q,i as D,c as x,a as I,m as S,t as F,b as k,d as A}from"./index.cVovwi_s.js";import{g as P}from"./entry.BARTHPXF.js";import{B as R}from"./button.5Y2A2fOX.js";import{L as V}from"./label.lHeqfppI.js";import{t as u}from"./translate.HrioCK44.js";import{g as W}from"./index.L6ncEInH.js";import{t as z}from"./index.doMJGgZJ.js";import{i as J,a as K}from"./import-events.ZIN1va7z.js";import{l as M}from"./namespaces.H9un0sFh.js";import{t as B}from"./toaster.h37cVzpN.js";import{p as O}from"./parse-with-big-int.e3oI4SEy.js";import{r as Q}from"./route-for.O9k37ubP.js";function X(m){let e=u("common.import")+"",o;return{c(){o=G(e)},l(a){o=H(a,e)},m(a,r){C(a,o,r)},p:T,d(a){a&&g(o)}}}function Y(m){let e,o,a,r,p,i,f,n,c;return o=new V({props:{hidden:!0,for:"import-event-history-file-upload",label:u("events.import-event-history-file-upload")}}),i=new R({props:{leadingIcon:"file-upload",disabled:!m[0],$$slots:{default:[X]},$$scope:{ctx:m}}}),i.$on("click",m[2]),{c(){e=y("div"),x(o.$$.fragment),a=b(),r=y("input"),p=b(),x(i.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var s=N(e);I(o.$$.fragment,s),a=w(s),r=E(s,"INPUT",{id:!0,class:!0,type:!0,accept:!0}),p=w(s),I(i.$$.fragment,s),s.forEach(g),this.h()},h(){d(r,"id","import-event-history-file-upload"),d(r,"class","import-input block rounded-md border border-slate-200 p-2"),d(r,"type","file"),d(r,"accept",".json"),d(e,"class","flex flex-col items-start gap-2 md:flex-row md:items-center")},m(t,s){C(t,e,s),S(o,e,null),_(e,a),_(e,r),_(e,p),S(i,e,null),f=!0,n||(c=U(r,"change",m[1]),n=!0)},p(t,[s]){const l={};s&1&&(l.disabled=!t[0]),s&32&&(l.$$scope={dirty:s,ctx:t}),i.$set(l)},i(t){f||(F(o.$$.fragment,t),F(i.$$.fragment,t),f=!0)},o(t){k(o.$$.fragment,t),k(i.$$.fragment,t),f=!1},d(t){t&&g(e),A(o),A(i),n=!1,c()}}}function Z(m,e,o){let a;j(m,M,n=>o(4,a=n));let r,p=!1;return[p,async n=>{var c;const t=n.target,s=(c=t==null?void 0:t.files)===null||c===void 0?void 0:c[0],l=new FileReader;s&&(l.readAsText(s),l.onload=()=>{var v,h;try{const $=(h=(v=l==null?void 0:l.result)===null||v===void 0?void 0:v.toString())!==null&&h!==void 0?h:"";r=O($),o(0,p=!0)}catch{B.push({variant:"error",message:u("events.event-history-load-error")}),o(0,p=!1)}})},async()=>{try{const n=await z(Array.isArray(r)?r:r==null?void 0:r.events),c=W(n);J.set(n),K.set(c),o(0,p=!1);const t=Q(a,"feed");P(t)}catch(n){console.error(n),B.push({variant:"error",message:u("events.event-history-import-error")})}}]}class dt extends q{constructor(e){super(),D(this,e,Z,Y,L,{})}}export{dt as E};