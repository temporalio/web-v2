const n=["Running","TimedOut","Completed","Failed","Completed","ContinuedAsNew","Canceled","Terminated"],o=["===","!==",">=","<=","==","!=","=",">","<","!","and","or","between","order by","in","(",")"],a=["===","!==",">=","<=","==","!=","=",">","<","!"],i=["and","or"],u=["(",")"],t=e=>typeof e=="string",f=e=>e===null,c=e=>f(e)||Array.isArray(e)?!1:typeof e=="object",d=e=>{if(!t(e))return!1;for(const r of n)if(e===r)return!0;return!1},w=e=>e===" ",y=e=>e==="'"||e==='"',C=e=>e==="`",L=e=>{if(!t(e))return!1;e=e.toLocaleLowerCase();for(const r of o)if(e===r)return!0;return!1},g=e=>{if(!t(e))return!1;e=e.toLocaleLowerCase();for(const r of a)if(e===r)return!0;return!1},m=e=>{if(!t(e))return!1;e=e.toLocaleLowerCase();for(const r of u)if(e===r)return!0;return!1},b=e=>{if(!t(e))return!1;e=e.toLocaleLowerCase();for(const r of i)if(e===r)return!0;return!1},h=e=>t(e)?(e=e.toLocaleLowerCase(),e==="between"):!1,O=e=>e==="ascending"||e==="descending",j=e=>l(e,"name","message"),l=(e,...r)=>{if(!p(e))return!1;for(const s of r)if(!Object.prototype.hasOwnProperty.call(e,s))return!1;return!0},p=e=>c(e)?!!Object.getOwnPropertyNames(e).length:!1;export{c as a,C as b,m as c,g as d,w as e,y as f,L as g,l as h,O as i,f as j,d as k,j as l,t as m,h as n,b as o};