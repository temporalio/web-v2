import{p as t}from"./persist-store.qR1xcIH4.js";import{d as r,w as o}from"./entry.wVVJrQqV.js";import{p as a}from"./stores.9_jifC6J.js";import{a as c}from"./get-event-categorization.if3aIlTT.js";import{C as n}from"./scheduler.tl3rb73C.js";t("autoRefreshWorkflow","off");const k=t("eventView","feed",!0),C=t("expandAllEvents","false"),S=t("eventFilterSort","descending"),q=t("eventShowElapsed","false"),p=r([a],([e])=>e.url.searchParams.get("query")),V=t("showChildWorkflows",!0,!0),f=r([a],([e])=>e.url.searchParams.get("category")),u=r([a],([e])=>e.url.searchParams.get("classification")),i=r([p,f,u],([e,s,l])=>({query:e,category:s,classification:l})),d=e=>i.subscribe(({query:s})=>{!s&&n(w).length&&e([])}),W=t("searchInputView",!1,!0),w=o([],d),m=e=>i.subscribe(({category:s})=>{!s&&n(v)&&e(null)}),v=o(void 0,m),g=c.map(({value:e})=>e),x=o(g);export{v as a,S as b,x as c,q as d,C as e,k as f,W as g,V as s,w};