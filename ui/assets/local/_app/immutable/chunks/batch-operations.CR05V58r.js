import{w as l}from"./entry.BiJjS9_9.js";import{C as y}from"./scheduler.D6mQsyhd.js";import{A as n}from"./workflow-actions.TBME1SPK.js";import{g as I}from"./auth-user.Cf3ACh-a.js";import{p as w}from"./persist-store.hC9s0-Yt.js";import{t as T}from"./versions.eOOsb5Ad.js";import{s as f}from"./parse-with-big-int.Dyr6jPtv.js";import{r as c,a as m,i as p}from"./route-for-api.IT-rCxIH.js";import{c as h,d as i}from"./screaming-enums.w0zEi9dM.js";const k=e=>e.map(o=>o.runId).reduce((o,r,s,u)=>(o+=`RunId="${r}"`,s!==u.length-1&&(o+=" OR "),o),""),j=(e,t)=>{const o=I().email;switch(e){case n.Cancel:return{cancellationOperation:{identity:o}};case n.Terminate:return{terminationOperation:{identity:o}};case n.Reset:return{resetOperation:{identity:o,options:t==="first"?{firstWorkflowTask:{}}:{lastWorkflowTask:{}},resetType:t==="first"?1:2}}}},C=({id:e,runId:t})=>({workflowId:e,runId:t}),b=(e,t)=>{const o={jobId:t.jobId,namespace:t.namespace,reason:t.reason,...j(e,t.resetType)};if(t.workflows)return p(y(T),"1.19")?{...o,executions:t.workflows.map(C)}:{...o,visibilityQuery:k(t.workflows)};if(t.query)return{...o,visibilityQuery:t.query}};async function S(e){const t=c("batch-operations",{namespace:e.namespace,batchJobId:e.jobId}),o=b(n.Cancel,e);await m(t,{options:{method:"POST",body:f(o)},notifyOnError:!1}),a.set({jobId:o.jobId,namespace:o.namespace})}async function Q(e){const t=c("batch-operations",{namespace:e.namespace,batchJobId:e.jobId}),o=b(n.Terminate,e);await m(t,{options:{method:"POST",body:f(o)},notifyOnError:!1}),a.set({jobId:o.jobId,namespace:o.namespace})}const V=async e=>{const t=c("batch-operations",{namespace:e.namespace,batchJobId:e.jobId}),o=b(n.Reset,e);await m(t,{options:{method:"POST",body:f(o)},notifyOnError:!1}),a.set({jobId:o.jobId,namespace:o.namespace})};async function d({namespace:e,jobId:t}){return new Promise((o,r)=>{R({namespace:e,jobId:t}).then(({state:s,completeOperationCount:u})=>{s==="Failed"?r():s!=="Running"?o(u):setTimeout(()=>{try{o(d({namespace:e,jobId:t}))}catch{r()}},5e3)})})}async function R({jobId:e,namespace:t},o=fetch){const r=c("batch-operations",{namespace:t,batchJobId:e}),s=await m(r,{request:o});return g(s)}const g=e=>({...e,operationType:h(e.operationType),state:i(e.state),startTime:e.startTime,closeTime:e.closeTime,totalOperationCount:parseInt((e==null?void 0:e.totalOperationCount)??"0",10),completeOperationCount:parseInt((e==null?void 0:e.completeOperationCount)??"0",10),failureOperationCount:parseInt((e==null?void 0:e.failureOperationCount)??"0",10)});async function _(e,t=fetch){const o=c("batch-operations.list",{namespace:e,batchJobId:""}),r=await m(o,{request:t});return{nextPageToken:r.nextPageToken,operations:r.operationInfo?r.operationInfo.map(P):[]}}const P=e=>({startTime:e.startTime,closeTime:e.closeTime,jobId:e.jobId,state:i(e.state)}),a=l();a.subscribe(async e=>{e&&await d(e).then(()=>a.set(void 0))});const N=w("auto-refresh-batch-operation",!1);export{N as a,S as b,V as c,R as d,Q as e,a as i,_ as l};