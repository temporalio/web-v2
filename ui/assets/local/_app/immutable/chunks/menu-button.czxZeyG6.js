import{s as ae,z as T,D as U,K as le,r as ne,L as oe,c as V,A as ie,w as z,a as C,b as M,h as Z,x as H,d as N,j as w,k as y,f as h,m as $,H as P,i as k,u as S,g as q,e as B,t as fe,l as re,q as ue}from"./scheduler.DugrFyli.js";import{S as ce,i as me,c as j,a as F,m as K,t as g,b as p,d as L,g as R,e as X}from"./index.CckufFjv.js";import{g as _e,a as de}from"./spread.CgU5AtxT.js";import{B as be}from"./badge.DOqlZP4M.js";import{B as ge}from"./button.wCKzCNVX.js";import{I as he}from"./icon.CgfdLX9U.js";import{b as pe,c as ke}from"./menu.C4zci_5r.js";import{t as G}from"./tw-merge.Ds6tgvmq.js";const Ee=a=>({}),J=a=>({}),ve=a=>({}),Q=a=>({});function W(a){let t,s,n;return s=new he({props:{name:a[8]?"chevron-up":"chevron-down"}}),{c(){t=Z("div"),j(s.$$.fragment),this.h()},l(f){t=w(f,"DIV",{class:!0});var l=y(t);F(s.$$.fragment,l),l.forEach(h),this.h()},h(){$(t,"class","flex")},m(f,l){k(f,t,l),K(s,t,null),n=!0},p(f,l){const i={};l&256&&(i.name=f[8]?"chevron-up":"chevron-down"),s.$set(i)},i(f){n||(g(s.$$.fragment,f),n=!0)},o(f){p(s.$$.fragment,f),n=!1},d(f){f&&h(t),L(s)}}}function Y(a){let t,s;return t=new be({props:{class:"absolute right-0 top-0 origin-bottom-left translate-x-[10px] translate-y-[-10px]",type:"count",$$slots:{default:[Ie]},$$scope:{ctx:a}}}),{c(){j(t.$$.fragment)},l(n){F(t.$$.fragment,n)},m(n,f){K(t,n,f),s=!0},p(n,f){const l={};f&65540&&(l.$$scope={dirty:f,ctx:n}),t.$set(l)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){p(t.$$.fragment,n),s=!1},d(n){L(t,n)}}}function Ie(a){let t;return{c(){t=fe(a[2])},l(s){t=re(s,a[2])},m(s,n){k(s,t,n)},p(s,n){n&4&&ue(t,s[2])},d(s){s&&h(t)}}}function De(a){let t,s,n,f,l,i,m;const v=a[15].leading,b=C(v,a,a[16],Q),I=a[15].default,_=C(I,a,a[16],null);let u=a[4]&&W(a);const E=a[15].trailing,d=C(E,a,a[16],J);let c=a[2]>0&&Y(a);return{c(){b&&b.c(),t=M(),s=Z("div"),_&&_.c(),n=M(),u&&u.c(),f=M(),d&&d.c(),l=M(),c&&c.c(),i=H(),this.h()},l(e){b&&b.l(e),t=N(e),s=w(e,"DIV",{class:!0});var r=y(s);_&&_.l(r),r.forEach(h),n=N(e),u&&u.l(e),f=N(e),d&&d.l(e),l=N(e),c&&c.l(e),i=H(),this.h()},h(){$(s,"class","flex grow items-center"),P(s,"hidden",!a[14].default)},m(e,r){b&&b.m(e,r),k(e,t,r),k(e,s,r),_&&_.m(s,null),k(e,n,r),u&&u.m(e,r),k(e,f,r),d&&d.m(e,r),k(e,l,r),c&&c.m(e,r),k(e,i,r),m=!0},p(e,r){b&&b.p&&(!m||r&65536)&&S(b,v,e,e[16],m?B(v,e[16],r,ve):q(e[16]),Q),_&&_.p&&(!m||r&65536)&&S(_,I,e,e[16],m?B(I,e[16],r,null):q(e[16]),null),(!m||r&16384)&&P(s,"hidden",!e[14].default),e[4]?u?(u.p(e,r),r&16&&g(u,1)):(u=W(e),u.c(),g(u,1),u.m(f.parentNode,f)):u&&(R(),p(u,1,1,()=>{u=null}),X()),d&&d.p&&(!m||r&65536)&&S(d,E,e,e[16],m?B(E,e[16],r,Ee):q(e[16]),J),e[2]>0?c?(c.p(e,r),r&4&&g(c,1)):(c=Y(e),c.c(),g(c,1),c.m(i.parentNode,i)):c&&(R(),p(c,1,1,()=>{c=null}),X())},i(e){m||(g(b,e),g(_,e),g(u),g(d,e),g(c),m=!0)},o(e){p(b,e),p(_,e),p(u),p(d,e),p(c),m=!1},d(e){e&&(h(t),h(s),h(n),h(f),h(l),h(i)),b&&b.d(e),_&&_.d(e),u&&u.d(e),d&&d.d(e),c&&c.d(e)}}}function Me(a){let t,s;const n=[{id:a[5]},{disabled:a[3]},{type:"button"},{"aria-haspopup":!a[3]},{"aria-controls":a[1]},{"aria-expanded":a[8]},{"aria-label":a[6]},{variant:a[7]},{class:G(a[0])},a[13]];let f={$$slots:{default:[De]},$$scope:{ctx:a}};for(let l=0;l<n.length;l+=1)f=T(f,n[l]);return t=new ge({props:f}),t.$on("click",a[11]),t.$on("keydown",a[12]),{c(){j(t.$$.fragment)},l(l){F(t.$$.fragment,l)},m(l,i){K(t,l,i),s=!0},p(l,[i]){const m=i&8683?_e(n,[i&32&&{id:l[5]},i&8&&{disabled:l[3]},n[2],i&8&&{"aria-haspopup":!l[3]},i&2&&{"aria-controls":l[1]},i&256&&{"aria-expanded":l[8]},i&64&&{"aria-label":l[6]},i&128&&{variant:l[7]},i&1&&{class:G(l[0])},i&8192&&de(l[13])]):{};i&82196&&(m.$$scope={dirty:i,ctx:l}),t.$set(m)},i(l){s||(g(t.$$.fragment,l),s=!0)},o(l){p(t.$$.fragment,l),s=!1},d(l){L(t,l)}}}function Ne(a,t,s){const n=["class","controls","count","disabled","hasIndicator","id","label","variant"];let f=U(t,n),l,i,{$$slots:m={},$$scope:v}=t;const b=le(m);let{class:I=""}=t,{controls:_}=t,{count:u=0}=t,{disabled:E=!1}=t,{hasIndicator:d=!1}=t,{id:c=null}=t,{label:e=null}=t,{variant:r="secondary"}=t;const x=ne(),{open:D,menuElement:O}=oe(pe);V(a,D,o=>s(8,i=o)),V(a,O,o=>s(17,l=o));const ee=()=>{D.update(o=>{let A=o;return E||(A=!o),x("click",{open:A}),A})},te=o=>{switch(o.key){case"Escape":z(D,i=!1,i);break;case"ArrowDown":o.preventDefault(),i?se():z(D,i=!0,i);break}},se=()=>{const o=Array.from(l.querySelectorAll(ke));o&&o[0]&&requestAnimationFrame(()=>o[0].focus())};return a.$$set=o=>{t=T(T({},t),ie(o)),s(13,f=U(t,n)),"class"in o&&s(0,I=o.class),"controls"in o&&s(1,_=o.controls),"count"in o&&s(2,u=o.count),"disabled"in o&&s(3,E=o.disabled),"hasIndicator"in o&&s(4,d=o.hasIndicator),"id"in o&&s(5,c=o.id),"label"in o&&s(6,e=o.label),"variant"in o&&s(7,r=o.variant),"$$scope"in o&&s(16,v=o.$$scope)},[I,_,u,E,d,c,e,r,i,D,O,ee,te,f,b,m,v]}class Ke extends ce{constructor(t){super(),me(this,t,Ne,Me,ae,{class:0,controls:1,count:2,disabled:3,hasIndicator:4,id:5,label:6,variant:7})}}export{Ke as M};