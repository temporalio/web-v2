import{r as o,a}from"../chunks/route-for-api.eae2b897.js";import{a as c}from"../chunks/search-attributes.c823732b.js";import{L as A}from"../chunks/layout.00d22cc5.js";const u=async(e,s=fetch)=>{try{const t=o("search-attributes",{namespace:e}),r=await a(t,{request:s});return{customAttributes:r.customAttributes,systemAttributes:r.systemAttributes}}catch(t){return console.error("Error fetching search attributes for namespace",e,t),{customAttributes:{},systemAttributes:{}}}},i=async({params:e,parent:s,fetch:t})=>{await s();const r=await u(e.namespace,t);c.set(r)},b=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{A as component,b as universal};