import{r as m,a as b,g as D}from"./route-for-api.Cus-VFSW.js";var k={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API:"",VITE_MODE:"development",VITE_TEMPORAL_PORT:"7233"};function E(){return k.VITE_TEMPORAL_UI_BUILD_TARGET??null}const i=/(tmprl\.cloud|tmprl-test\.cloud)$/,A=async(u=fetch)=>{var l,o,d,c,f;const w=m("settings"),r=await b(w,{request:u}),a=E();return{auth:{enabled:!!((l=r==null?void 0:r.Auth)!=null&&l.Enabled),options:(o=r==null?void 0:r.Auth)==null?void 0:o.Options},bannerText:r==null?void 0:r.BannerText,baseUrl:D(),codec:{endpoint:(d=r==null?void 0:r.Codec)==null?void 0:d.Endpoint,passAccessToken:(c=r==null?void 0:r.Codec)==null?void 0:c.PassAccessToken,includeCredentials:(f=r==null?void 0:r.Codec)==null?void 0:f.IncludeCredentials},defaultNamespace:(r==null?void 0:r.DefaultNamespace)||"default",disableWriteActions:!!(r!=null&&r.DisableWriteActions)||!1,workflowTerminateDisabled:!!(r!=null&&r.WorkflowTerminateDisabled),workflowCancelDisabled:!!(r!=null&&r.WorkflowCancelDisabled),workflowSignalDisabled:!!(r!=null&&r.WorkflowSignalDisabled),workflowResetDisabled:!!(r!=null&&r.WorkflowResetDisabled),batchActionsDisabled:!!(r!=null&&r.BatchActionsDisabled),startWorkflowDisabled:!!(r!=null&&r.StartWorkflowDisabled),hideWorkflowQueryErrors:!!(r!=null&&r.HideWorkflowQueryErrors),refreshWorkflowCountsDisabled:!!(r!=null&&r.RefreshWorkflowCountsDisabled),showTemporalSystemNamespace:r==null?void 0:r.ShowTemporalSystemNamespace,notifyOnNewVersion:r==null?void 0:r.NotifyOnNewVersion,feedbackURL:r==null?void 0:r.FeedbackURL,runtimeEnvironment:{get isCloud(){return a?a==="cloud":i.test(window.location.hostname)},get isLocal(){return a?a==="local":i.test(window.location.hostname)},envOverride:!!a},version:r==null?void 0:r.Version}};export{A as f};