import{B as F}from"./prod-browser.6V4A_NcJ.js";import{b as o}from"./paths.bhSCx3lM.js";import{e as c}from"./encode-uri.Mzeiosm2.js";const $=(r,t)=>{const e=t instanceof URLSearchParams;return t&&!e&&(t=new URLSearchParams(t)),t?`${r}?${t}`:r},d=()=>`${o}/namespaces`,a=({namespace:r})=>`${o}/namespaces/${r}`,g=()=>`${o}/select-namespace`,w=r=>`${a(r)}/workflows`,v=({namespace:r,workflowId:t,taskQueue:e,workflowType:n})=>$(`${a({namespace:r})}/workflows/start-workflow`,{workflowId:t||"",taskQueue:e||"",workflowType:n||""}),S=({namespace:r,query:t,page:e})=>$(w({namespace:r}),{query:t,...e&&{page:e}}),P=r=>`${a(r)}/archival`,s=({workflow:r,run:t,...e})=>{const n=c(r);return`${w(e)}/${n}/${t}`},l=r=>`${a(r)}/schedules`,y=({namespace:r})=>`${l({namespace:r})}/create`,U=({scheduleId:r,namespace:t})=>{const e=c(r);return`${l({namespace:t})}/${e}`},R=({scheduleId:r,namespace:t})=>{const e=c(r);return`${l({namespace:t})}/${e}/edit`},W=({queryParams:r,...t})=>{const e=`${s(t)}/history`;return $(`${e}`,r)},E=({eventId:r,...t})=>`${s(t)}/history/events/${r}`,L=({eventId:r,...t})=>`${s(t)}/history/event-groups/${r}`,b=r=>`${s(r)}/workers`,q=r=>`${s(r)}/relationships`,A=r=>{const t=c(r.queue);return`${a({namespace:r.namespace})}/task-queues/${t}`},B=r=>`${s(r)}/call-stack`,H=r=>`${s(r)}/query`,Q=r=>`${s(r)}/metadata`,I=r=>`${s(r)}/pending-activities`,N=r=>{const{settings:t,searchParams:e,originUrl:n}=r,u=new URL(`${o}/auth/sso`,t.baseUrl);let i=t.auth.options??[];return i=[...i,"returnUrl"],i.forEach(h=>{if(!e)return;const f=e.get(h);f&&u.searchParams.set(h,f)}),!u.searchParams.get("returnUrl")&&n&&u.searchParams.set("returnUrl",n),u.toString()},O=(r="",t=F)=>{if(t){const e=new URL(`${o}/login`,window.location.origin);return e.searchParams.set("returnUrl",window.location.href),r&&e.searchParams.set("error",r),e.toString()}return`${o}/login`},x=(r,t)=>r&&t?`${o}/import/events/${r}/workflow/run/history/${t}`:`${o}/import/events`,C=({namespace:r})=>`${o}/namespaces/${r}/batch-operations`,T=({namespace:r,jobId:t})=>`${o}/namespaces/${r}/batch-operations/${t}`;export{L as A,a,W as b,B as c,N as d,w as e,g as f,A as g,T as h,l as i,U as j,O as k,C as l,y as m,v as n,b as o,q as p,H as q,x as r,Q as s,$ as t,I as u,S as v,R as w,E as x,P as y,d as z};