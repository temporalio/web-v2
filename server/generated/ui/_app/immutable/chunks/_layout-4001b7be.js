import{r as f}from"./index-dc735eee.js";import"./prism-7118f115.js";/* empty css            */import{f as d}from"./settings-service-4d1fd73e.js";import{s as p,g as h}from"./auth-user-46bafa9a.js";import{c as k}from"./cluster-409c34d3.js";import{r as c,a as m}from"./route-for-api-b7e90108.js";import{f as g}from"./namespaces-service-2b1277f4.js";import{s as w}from"./search-attributes-d7bf22c9.js";import{e as l,d as y}from"./route-for-9e2a964e.js";import{p as v}from"./parse-with-big-int-02e81897.js";import{a as _}from"./atob-a8099e45.js";const T=async(n,t=fetch)=>{if(n.runtimeEnvironment.isCloud)return;const o=await c("cluster");return await m(o,{request:t}).then(e=>(k.set(e),e))},b=async(n=fetch)=>{try{const t=await n("https://api.github.com/repos/temporalio/ui-server/releases"),o=await t.json();if(!t.ok)return;let e;if(o.length>0){const{tag_name:i}=o[0];e=i.replace("v","")}return e}catch{return""}},C=async(n,t=fetch)=>{if(n.runtimeEnvironment.isCloud)return;const o=await c("search-attributes");return await m(o,{request:t}).then(e=>(e!=null&&e.keys&&w.set(e.keys),e))},S=(n,t)=>!n.auth.enabled||Boolean(t==null?void 0:t.accessToken),a="user",x=(n=l)=>{if(!n)return{};const t=document.cookie.split(";");let o=0,e=t.find(s=>s.includes(a+o)),i="";for(;e;){const[s,r]=e.split("=");i+=r,o++,e=t.find(u=>u.includes(a+o))}if(i)try{const s=_(i),r=v(s);return{accessToken:r==null?void 0:r.AccessToken,idToken:r==null?void 0:r.IDToken,name:r==null?void 0:r.Name,picture:r==null?void 0:r.Picture,email:r==null?void 0:r.Email}}catch(s){console.error(s)}return{}},A=(n=l)=>{if(!n)return;const t=document.cookie.split(";");let o=0,e=t.find(i=>i.includes(a+o));for(;e;){const[i]=e.split("=");document.cookie=`${i}=; max-age=-1; path=/`,o++,e=t.find(s=>s.includes(a+o))}},N=async function({fetch:n}){const t=await d(n),o=x();o!=null&&o.accessToken&&(p(o),A());const e=h();if(!S(t,e))throw f(302,y());g(t,n),C(t,n);const i=await T(t,n),s={current:t.version,recommended:t.notifyOnNewVersion?await b(n):void 0};return{user:e,uiVersionInfo:s,settings:t,cluster:i}},D=Object.freeze(Object.defineProperty({__proto__:null,load:N},Symbol.toStringTag,{value:"Module"}));export{D as _,N as l};