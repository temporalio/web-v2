import{s as g,z as f,e as y,b as I,d as T,g as _,E as h,H as p,k,m as S,D as b,A as B,B as v}from"./scheduler.hgcnTi65.js";import{S as E,i as N,c as q,a as z,m as A,t as C,b as D,d as H}from"./index.BfLSuu77.js";import{g as M}from"./spread.rEx3vLA9.js";import{I as O}from"./icon.hxMRil4e.js";import{t as d}from"./tw-merge.NbP7EmZe.js";function P(o){let t,c,a,n,i,r;c=new O({props:{title:o[2]?o[1]:o[0],name:o[2]?"checkmark":"copy"}});let u=[{class:a=d("copy-button",o[3])},o[4]],l={};for(let e=0;e<u.length;e+=1)l=f(l,u[e]);return{c(){t=y("button"),q(c.$$.fragment),this.h()},l(e){t=I(e,"BUTTON",{class:!0});var s=T(t);z(c.$$.fragment,s),s.forEach(_),this.h()},h(){h(t,l),p(t,"svelte-7swmku",!0)},m(e,s){k(e,t,s),A(c,t,null),t.autofocus&&t.focus(),n=!0,i||(r=S(t,"click",o[5]),i=!0)},p(e,[s]){const m={};s&7&&(m.title=e[2]?e[1]:e[0]),s&4&&(m.name=e[2]?"checkmark":"copy"),c.$set(m),h(t,l=M(u,[(!n||s&8&&a!==(a=d("copy-button",e[3])))&&{class:a},s&16&&e[4]])),p(t,"svelte-7swmku",!0)},i(e){n||(C(c.$$.fragment,e),n=!0)},o(e){D(c.$$.fragment,e),n=!1},d(e){e&&_(t),H(c),i=!1,r()}}}function U(o,t,c){const a=["copyIconTitle","copySuccessIconTitle","copied","class"];let n=b(t,a),{copyIconTitle:i}=t,{copySuccessIconTitle:r}=t,{copied:u}=t,{class:l=""}=t;function e(s){v.call(this,o,s)}return o.$$set=s=>{t=f(f({},t),B(s)),c(4,n=b(t,a)),"copyIconTitle"in s&&c(0,i=s.copyIconTitle),"copySuccessIconTitle"in s&&c(1,r=s.copySuccessIconTitle),"copied"in s&&c(2,u=s.copied),"class"in s&&c(3,l=s.class)},[i,r,u,l,n,e]}class L extends E{constructor(t){super(),N(this,t,U,P,g,{copyIconTitle:0,copySuccessIconTitle:1,copied:2,class:3})}}export{L as B};