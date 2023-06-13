import{d as r,w as u}from"./index.255b7490.js";import{p as m}from"./stores.fa250c9b.js";import{e as S}from"./event-view.73e1a728.js";import{k as v}from"./route-for.e8dec03f.js";import{r as y}from"./workflow-run.2461dc7d.js";import{a as F}from"./auth-user.ead5c000.js";import{D as q}from"./is-event-type.0064ca29.js";import{p as h}from"./paginated.04e9c8cc.js";import{r as l,a as w}from"./route-for-api.b5500aaf.js";import{t as f}from"./index.faf1e6e0.js";import{b as A}from"./has.8da86d13.js";const H=r([m],([t])=>t.params.namespace?v(t.params.namespace):""),P=r([m],([t])=>t.params.workflow?v(t.params.workflow):""),T=r([m],([t])=>t.params.run?v(t.params.run):""),b=r([m],([t])=>{var e;return(e=t.data)==null?void 0:e.settings}),x=r([F],([t])=>t==null?void 0:t.accessToken),z=r([H,P,T,S],([t,e,s,n])=>({namespace:t,workflowId:e,runId:s,sort:n}));r([z,b,x,y],([t,e,s,n])=>({...t,settings:e,accessToken:s,refresh:y,$refresh:n}));const D={start:[],end:[]},X=u(D),Y=u(null),j=u([]),Z=r(j,t=>t.filter(q)),k=t=>!A(t)||t==="descending"?"events.descending":t==="ascending"?"events.ascending":"events.descending",_=async({namespace:t,workflowId:e,runId:s,sort:n,onStart:o,onUpdate:a,onComplete:c})=>{const i=k(n),p=l(i,{namespace:t,workflowId:e,runId:s});return(await h(async d=>w(p,{token:d,request:fetch}),{onStart:o,onUpdate:a,onComplete:c})).history.events},U=async({namespace:t,workflowId:e,runId:s,sort:n,settings:o,accessToken:a,onStart:c,onUpdate:i,onComplete:p})=>{const E=k(n),d=l(E,{namespace:t,workflowId:e,runId:s}),I=await h(async R=>w(d,{token:R,request:fetch}),{onStart:c,onUpdate:i,onComplete:p});return await f({response:I.history.events,namespace:t,settings:o,accessToken:a})},g=async({namespace:t,workflowId:e,runId:s,sort:n})=>{const o=l(`events.${n}`,{namespace:t,workflowId:e,runId:s});try{return(await w(o,{request:fetch,params:{maximumPageSize:"20"}})).history.events}catch{return[]}},$=async t=>{const{settings:e,namespace:s,accessToken:n}=t,o=await g({...t,sort:"ascending"}),a=await g({...t,sort:"descending"}),[c,i]=await Promise.all([f({response:o,namespace:s,settings:e,accessToken:n}),f({response:a,namespace:s,settings:e,accessToken:n})]);return{start:c,end:i}};export{U as a,_ as b,j as c,X as e,$ as f,D as i,Z as r,Y as t};