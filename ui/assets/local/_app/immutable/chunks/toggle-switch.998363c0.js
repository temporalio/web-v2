import{S as U,b as z,a as D,m as E,c as A,p as S,q as j,d as H,k as _,u,R as c,f as L,L as r,T as v,n as T,r as G,N as q,O as B,w as F,x as I,y as O,P as J}from"./index.e1c99c2b.js";function M(s){let e,a;return{c(){e=E("span"),a=F(s[3]),this.h()},l(l){e=S(l,"SPAN",{class:!0});var n=j(e);a=I(n,s[3]),n.forEach(_),this.h()},h(){u(e,"class","label left svelte-ajb1o6"),c(e,"sr-only",s[5])},m(l,n){L(l,e,n),r(e,a)},p(l,n){n&8&&O(a,l[3]),n&32&&c(e,"sr-only",l[5])},d(l){l&&_(e)}}}function C(s){let e,a;return{c(){e=E("span"),a=F(s[3]),this.h()},l(l){e=S(l,"SPAN",{class:!0});var n=j(e);a=I(n,s[3]),n.forEach(_),this.h()},h(){u(e,"class","label right svelte-ajb1o6"),c(e,"sr-only",s[5])},m(l,n){L(l,e,n),r(e,a)},p(l,n){n&8&&O(a,l[3]),n&32&&c(e,"sr-only",l[5])},d(l){l&&_(e)}}}function K(s){let e,a,l,n,k,f,b,g,m,P,d=s[4]==="left"&&M(s),h=s[4]==="right"&&C(s);return{c(){e=E("label"),d&&d.c(),a=A(),l=E("input"),k=A(),f=E("span"),b=E("span"),g=A(),h&&h.c(),this.h()},l(t){e=S(t,"LABEL",{class:!0});var i=j(e);d&&d.l(i),a=H(i),l=S(i,"INPUT",{id:!0,type:!0,class:!0,role:!0,"data-testid":!0}),k=H(i),f=S(i,"SPAN",{class:!0});var N=j(f);b=S(N,"SPAN",{class:!0}),j(b).forEach(_),N.forEach(_),g=H(i),h&&h.l(i),i.forEach(_),this.h()},h(){u(l,"id",s[1]),l.disabled=s[2],u(l,"type","checkbox"),u(l,"class","checkbox svelte-ajb1o6"),u(l,"role","switch"),u(l,"data-testid",n=s[12]["data-testid"]),u(b,"class","thumb svelte-ajb1o6"),c(b,"checked",s[0]),u(f,"class","slider svelte-ajb1o6"),c(f,"disabled",s[2]),c(f,"checked",s[0]),c(f,"focused",s[6]),c(f,"hovered",s[7]),u(e,"class","switch svelte-ajb1o6"),c(e,"disabled",s[2])},m(t,i){L(t,e,i),d&&d.m(e,null),r(e,a),r(e,l),l.checked=s[0],r(e,k),r(e,f),r(f,b),r(e,g),h&&h.m(e,null),m||(P=[v(l,"change",s[13]),v(l,"change",s[14]),v(l,"focus",s[8]),v(l,"blur",s[9]),v(f,"mouseenter",s[10]),v(f,"mouseleave",s[11])],m=!0)},p(t,[i]){t[4]==="left"?d?d.p(t,i):(d=M(t),d.c(),d.m(e,a)):d&&(d.d(1),d=null),i&2&&u(l,"id",t[1]),i&4&&(l.disabled=t[2]),i&4096&&n!==(n=t[12]["data-testid"])&&u(l,"data-testid",n),i&1&&(l.checked=t[0]),i&1&&c(b,"checked",t[0]),i&4&&c(f,"disabled",t[2]),i&1&&c(f,"checked",t[0]),i&64&&c(f,"focused",t[6]),i&128&&c(f,"hovered",t[7]),t[4]==="right"?h?h.p(t,i):(h=C(t),h.c(),h.m(e,null)):h&&(h.d(1),h=null),i&4&&c(e,"disabled",t[2])},i:T,o:T,d(t){t&&_(e),d&&d.d(),h&&h.d(),m=!1,G(P)}}}function Q(s,e,a){let{checked:l=!1}=e,{id:n}=e,{disabled:k=!1}=e,{label:f}=e,{labelPosition:b="right"}=e,{labelHidden:g=!1}=e,m=!1,P=!1;const d=()=>{a(6,m=!0)},h=()=>{a(6,m=!1)},t=()=>{a(7,P=!0)},i=()=>{a(7,P=!1)};function N(o){J.call(this,s,o)}function R(){l=this.checked,a(0,l)}return s.$$set=o=>{a(12,e=q(q({},e),B(o))),"checked"in o&&a(0,l=o.checked),"id"in o&&a(1,n=o.id),"disabled"in o&&a(2,k=o.disabled),"label"in o&&a(3,f=o.label),"labelPosition"in o&&a(4,b=o.labelPosition),"labelHidden"in o&&a(5,g=o.labelHidden)},e=B(e),[l,n,k,f,b,g,m,P,d,h,t,i,e,N,R]}class W extends U{constructor(e){super(),z(this,e,Q,K,D,{checked:0,id:1,disabled:2,label:3,labelPosition:4,labelHidden:5})}}export{W as T};