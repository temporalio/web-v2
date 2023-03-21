import{a9 as v,n as d}from"./index.2267fcd4.js";import{s as C}from"./settings.f748c225.js";import{s as S}from"./simplify-attributes.ba9e7501.js";import{r as u,a as f,b as O,i as F,c as z}from"./route-for-api.aa061048.js";import{t as U}from"./list-workflow-query.d51cd7c0.js";import{s as h}from"./parse-with-big-int.0036a80a.js";import{f as Q}from"./route-for.a90177bc.js";import{v as $}from"./toaster.dc374825.js";const R=(o=C)=>!v(o).disableWriteActions,_=(o=[])=>o.map(t=>{const n=S(t,!0),r=t.activityId;return{...n,id:r}}),g=o=>{var x,I,T,b,W;const t=o.workflowExecutionInfo.type.name,n=o.workflowExecutionInfo.execution.workflowId,r=o.workflowExecutionInfo.execution.runId,e=String(o.workflowExecutionInfo.startTime),i=String(o.workflowExecutionInfo.closeTime),c=o.workflowExecutionInfo.status,s=o.workflowExecutionInfo.status==="Running",l=o.workflowExecutionInfo.historyLength,w=`/workflows/${n}/${r}`,E=(I=(x=o==null?void 0:o.executionConfig)==null?void 0:x.taskQueue)==null?void 0:I.name,y=(T=o==null?void 0:o.workflowExecutionInfo)==null?void 0:T.parentNamespaceId,a=(b=o==null?void 0:o.workflowExecutionInfo)==null?void 0:b.parentExecution,k=o.workflowExecutionInfo.stateTransitionCount,m=(W=o.executionConfig)==null?void 0:W.defaultWorkflowTaskTimeout,p=_(o.pendingActivities),P=(o==null?void 0:o.pendingChildren)??[];return{name:t,id:n,runId:r,startTime:e,endTime:i,status:c,historyEvents:l,url:w,taskQueue:E,pendingActivities:p,pendingChildren:P,parentNamespaceId:y,parent:a,stateTransitionCount:k,isRunning:s,defaultWorkflowTaskTimeout:m,get canBeTerminated(){return s&&R()}}},q=o=>(o.executions||[]).map(t=>g({workflowExecutionInfo:t})),B=o=>window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(parseInt(n,16)))),A=(o,t=Q)=>t?B(o):o,V=async(o,t,n=fetch)=>{let r=0,e=0;try{const i=u("workflows.count",{namespace:o});if(t){const c=f(i,{params:{query:t},onError:d,handleError:d,request:n}),s=f(i,{params:{query:""},onError:d,handleError:d,request:n}),[l,w]=await Promise.all([c,s]);e=l==null?void 0:l.count,r=w==null?void 0:w.count}else{const c=await f(i,{params:{},onError:d,handleError:d,request:n});r=c==null?void 0:c.count}}catch{}return{count:e,totalCount:r}},D=async(o,t,n=fetch,r=!1)=>{const e=t.query||U(t,r);let i;try{i=decodeURIComponent(e)}catch{i=e}const c=r?"workflows.archived":"workflows";let s="";const l=a=>{var k,m;O(a),(k=a==null?void 0:a.body)!=null&&k.message||a!=null&&a.status?s=((m=a==null?void 0:a.body)==null?void 0:m.message)??`Error fetching workflows: ${a.status}: ${a.statusText}`:s="Error fetching workflows: Server failed to respond"},w=u(c,{namespace:o}),{executions:E,nextPageToken:y}=await f(w,{params:{query:i},onError:l,handleError:l,request:n})??{executions:[],nextPageToken:""};return{workflows:q({executions:E}),nextPageToken:String(y),error:s}},X=async(o,t=fetch,n=!1)=>{const r=n?"workflows.archived":"workflows";let e=!0;const i=s=>{(F(s)||z(s))&&(e=!1)},c=u(r,{namespace:o});return await f(c,{params:{pageSize:"1"},onError:i,handleError:i,request:t}),{authorized:e}},Y=async(o,t,n=fetch)=>D(o,t,n,!0);async function Z(o,t=fetch){const n=u("workflow",o);return f(n,{request:t}).then(g)}async function oo({workflow:o,namespace:t,reason:n}){const r=u("workflow.terminate",{namespace:t,workflowId:o.id,runId:o.runId});return await f(r,{options:{method:"POST",body:h({reason:n})},shouldRetry:!1,notifyOnError:!1})}async function to({namespace:o,workflowId:t,runId:n},r=fetch){const e=u("workflow.cancel",{namespace:o,workflowId:t,runId:n});return f(e,{request:r,notifyOnError:!1,options:{method:"POST"}})}async function no({namespace:o,workflowId:t,runId:n,signalName:r,signalInput:e}){const i=u("workflow.signal",{namespace:o,workflowId:t,runId:n});return f(i,{notifyOnError:!1,options:{method:"POST",body:h({signalName:r,input:{payloads:e?[{metadata:{encoding:A("json/plain")},data:A(h(e))}]:null}})}})}async function ro({namespace:o,workflowId:t,runId:n,eventId:r,reason:e}){const i=u("workflow.reset",{namespace:o,workflowId:t,runId:n}),c={workflowExecution:{workflowId:t,runId:n},workflowTaskFinishEventId:r,requestId:$(),reason:e};return f(i,{notifyOnError:!1,options:{method:"POST",body:h(c)}})}async function eo(o,t=fetch){const n=e=>{console.error(e)},r=u("workflow",o);return f(r,{request:t,onError:n,handleError:n}).then(g)}export{D as a,V as b,to as c,X as d,Y as e,Z as f,eo as g,ro as r,no as s,oo as t,R as w};