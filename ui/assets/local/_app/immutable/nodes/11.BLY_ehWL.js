import{r as l}from"../chunks/index.g5YcAAdQ.js";import{e as u,f as m}from"../chunks/route-for.CLbJLhLU.js";import{s as f,v as p,c as d,T as g}from"../chunks/scheduler.Cp5f2qB_.js";import{S as _,i as b,c as y,a as N,m as h,t as w,b as S,d as $}from"../chunks/index.CZRxi6Or.js";import{g as c}from"../chunks/entry.BgyOXCKr.js";import{L as v}from"../chunks/loading.BBrAMK7F.js";import{a as C}from"../chunks/workflows.CVjYtRTV.js";import{l as x}from"../chunks/namespaces.BFdW3zPL.js";const z=async({parent:s})=>{var o,r;const t=await s(),a=(o=t==null?void 0:t.settings)==null?void 0:o.defaultNamespace;return((r=t.settings.runtimeEnvironment)==null?void 0:r.isCloud)&&l(302,u({namespace:a})),{defaultNamespace:a}},q=Object.freeze(Object.defineProperty({__proto__:null,load:z},Symbol.toStringTag,{value:"Module"}));function F(s){let t,a;return t=new v({}),{c(){y(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,o){h(t,e,o),a=!0},p,i(e){a||(w(t.$$.fragment,e),a=!0)},o(e){S(t.$$.fragment,e),a=!1},d(e){$(t,e)}}}function T(s,t,a){let e;d(s,x,n=>a(1,e=n));let{data:o}=t,{defaultNamespace:r}=o;const i=e&&e!=="default"?e:r;return g(async()=>{try{const{authorized:n}=await C(i);n?c(u({namespace:i})):c(m())}catch{c(m())}}),s.$$set=n=>{"data"in n&&a(0,o=n.data)},[o]}class A extends _{constructor(t){super(),b(this,t,T,F,f,{data:0})}}export{A as component,q as universal};