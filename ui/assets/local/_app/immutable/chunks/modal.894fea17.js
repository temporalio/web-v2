import{S as he,b as pe,a as ke,G as te,N as X,m as D,c as G,C as Z,p as M,q,d as K,k as _,D as w,u as F,Q as le,R as Y,f as j,L as v,E as x,T as W,V as ve,ag as Te,j as T,z as ae,g as y,h as ne,H as se,I as oe,J as ie,U as Ee,F as $,r as ye,Y as re,M as Ce,O as fe,w as R,x as z,y as ee,A as De,n as ge}from"./index.2267fcd4.js";import{B as be}from"./button.63f1a09f.js";import{I as Me}from"./index.6cf8f560.js";const qe=a=>({}),ce=a=>({}),Ie=a=>({}),ue=a=>({});function de(a){let e,l;return e=new Me({props:{"aria-label":a[2],icon:"close",class:"float-right m-4"}}),e.$on("click",a[10]),{c(){Z(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){x(e,t,s),l=!0},p(t,s){const c={};s&4&&(c["aria-label"]=t[2]),e.$set(c)},i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function Ae(a){let e,l;return{c(){e=D("h3"),l=R("Title")},l(t){e=M(t,"H3",{});var s=q(e);l=z(s,"Title"),s.forEach(_)},m(t,s){j(t,e,s),v(e,l)},p:ge,d(t){t&&_(e)}}}function Se(a){let e,l;return{c(){e=D("span"),l=R("Content")},l(t){e=M(t,"SPAN",{});var s=q(e);l=z(s,"Content"),s.forEach(_)},m(t,s){j(t,e,s),v(e,l)},p:ge,d(t){t&&_(e)}}}function me(a){let e,l;return{c(){e=D("p"),l=R(a[9]),this.h()},l(t){e=M(t,"P",{class:!0});var s=q(e);l=z(s,a[9]),s.forEach(_),this.h()},h(){F(e,"class","mt-2 text-sm font-normal text-danger")},m(t,s){j(t,e,s),v(e,l)},p(t,s){s&512&&ee(l,t[9])},d(t){t&&_(e)}}}function Fe(a){let e;return{c(){e=R(a[2])},l(l){e=z(l,a[2])},m(l,t){j(l,e,t)},p(l,t){t&4&&ee(e,l[2])},d(l){l&&_(e)}}}function _e(a){let e,l;return e=new be({props:{thin:!0,variant:a[3],loading:a[6],disabled:a[4]||a[6],testId:"confirm-modal-button",type:"submit",$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){Z(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){x(e,t,s),l=!0},p(t,s){const c={};s&8&&(c.variant=t[3]),s&64&&(c.loading=t[6]),s&80&&(c.disabled=t[4]||t[6]),s&2097154&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function Ne(a){let e;return{c(){e=R(a[1])},l(l){e=z(l,a[1])},m(l,t){j(l,e,t)},p(l,t){t&2&&ee(e,l[1])},d(l){l&&_(e)}}}function Ve(a){let e,l,t,s,c,g,N,V,h,p,H,I,A,m,S,B,r=!a[6]&&de(a);const L=a[19].title,d=te(L,a,a[21],ue),b=d||Ae(),O=a[19].content,P=te(O,a,a[21],ce),k=P||Se();let u=a[9]&&me(a);p=new be({props:{thin:!0,variant:"secondary",disabled:a[6],$$slots:{default:[Fe]},$$scope:{ctx:a}}}),p.$on("click",a[10]);let f=!a[0]&&_e(a),o=[{class:I="body "+a[7]},{"aria-modal":"true"},{"aria-labelledby":"modal-title"},{"data-testid":A=a[14]["data-testid"]},a[15]],C={};for(let n=0;n<o.length;n+=1)C=X(C,o[n]);return{c(){e=D("dialog"),r&&r.c(),l=G(),t=D("div"),b&&b.c(),s=G(),c=D("form"),g=D("div"),k&&k.c(),N=G(),u&&u.c(),V=G(),h=D("div"),Z(p.$$.fragment),H=G(),f&&f.c(),this.h()},l(n){e=M(n,"DIALOG",{class:!0,"aria-modal":!0,"aria-labelledby":!0,"data-testid":!0});var i=q(e);r&&r.l(i),l=K(i),t=M(i,"DIV",{id:!0,class:!0});var E=q(t);b&&b.l(E),E.forEach(_),s=K(i),c=M(i,"FORM",{method:!0});var J=q(c);g=M(J,"DIV",{id:!0,class:!0});var Q=q(g);k&&k.l(Q),N=K(Q),u&&u.l(Q),Q.forEach(_),V=K(J),h=M(J,"DIV",{class:!0});var U=q(h);w(p.$$.fragment,U),H=K(U),f&&f.l(U),U.forEach(_),J.forEach(_),i.forEach(_),this.h()},h(){F(t,"id","modal-title"),F(t,"class","title svelte-1f1oixq"),F(g,"id","modal-content"),F(g,"class","content svelte-1f1oixq"),F(h,"class","flex items-center justify-end space-x-2 p-6"),F(c,"method","dialog"),le(e,C),Y(e,"large",a[5]),Y(e,"svelte-1f1oixq",!0)},m(n,i){j(n,e,i),r&&r.m(e,null),v(e,l),v(e,t),b&&b.m(t,null),v(e,s),v(e,c),v(c,g),k&&k.m(g,null),v(g,N),u&&u.m(g,null),v(c,V),v(c,h),x(p,h,null),v(h,H),f&&f.m(h,null),a[20](e),m=!0,S||(B=[W(window,"click",a[13]),W(window,"keydown",ve(a[12])),W(c,"submit",Te(a[11]))],S=!0)},p(n,[i]){n[6]?r&&(ae(),y(r,1,1,()=>{r=null}),ne()):r?(r.p(n,i),i&64&&T(r,1)):(r=de(n),r.c(),T(r,1),r.m(e,l)),d&&d.p&&(!m||i&2097152)&&se(d,L,n,n[21],m?ie(L,n[21],i,Ie):oe(n[21]),ue),P&&P.p&&(!m||i&2097152)&&se(P,O,n,n[21],m?ie(O,n[21],i,qe):oe(n[21]),ce),n[9]?u?u.p(n,i):(u=me(n),u.c(),u.m(g,null)):u&&(u.d(1),u=null);const E={};i&64&&(E.disabled=n[6]),i&2097156&&(E.$$scope={dirty:i,ctx:n}),p.$set(E),n[0]?f&&(ae(),y(f,1,1,()=>{f=null}),ne()):f?(f.p(n,i),i&1&&T(f,1)):(f=_e(n),f.c(),T(f,1),f.m(h,null)),le(e,C=Ee(o,[(!m||i&128&&I!==(I="body "+n[7]))&&{class:I},{"aria-modal":"true"},{"aria-labelledby":"modal-title"},(!m||i&16384&&A!==(A=n[14]["data-testid"]))&&{"data-testid":A},i&32768&&n[15]])),Y(e,"large",n[5]),Y(e,"svelte-1f1oixq",!0)},i(n){m||(T(r),T(b,n),T(k,n),T(p.$$.fragment,n),T(f),m=!0)},o(n){y(r),y(b,n),y(k,n),y(p.$$.fragment,n),y(f),m=!1},d(n){n&&_(e),r&&r.d(),b&&b.d(n),k&&k.d(n),u&&u.d(),$(p),f&&f.d(),a[20](null),S=!1,ye(B)}}}function He(a,e,l){const t=["hideConfirm","confirmText","cancelText","confirmType","confirmDisabled","large","loading","open","close","setError","class"];let s=re(e,t),{$$slots:c={},$$scope:g}=e,{hideConfirm:N=!1}=e,{confirmText:V="Confirm"}=e,{cancelText:h="Cancel"}=e,{confirmType:p="primary"}=e,{confirmDisabled:H=!1}=e,{large:I=!1}=e,{loading:A=!1}=e,m;const S=()=>d.showModal(),B=()=>{l(9,m=""),d.close()},r=o=>{l(9,m=o)};let{class:L=""}=e,d;const b=Ce(),O=()=>{B(),b("cancelModal")},P=()=>{l(9,m=""),b("confirmModal")},k=o=>{if(!S)return;const C=Array.from(d.querySelectorAll('button, input, div[contenteditable="true"]')).filter(E=>E instanceof HTMLDivElement?E.isContentEditable:!E.disabled),n=C[0],i=C[C.length-1];o.key==="Tab"&&(o.shiftKey?document.activeElement===n&&(i.focus(),o.preventDefault()):document.activeElement===i&&(n.focus(),o.preventDefault()))},u=o=>{o.target===d&&O()};function f(o){De[o?"unshift":"push"](()=>{d=o,l(8,d)})}return a.$$set=o=>{l(14,e=X(X({},e),fe(o))),l(15,s=re(e,t)),"hideConfirm"in o&&l(0,N=o.hideConfirm),"confirmText"in o&&l(1,V=o.confirmText),"cancelText"in o&&l(2,h=o.cancelText),"confirmType"in o&&l(3,p=o.confirmType),"confirmDisabled"in o&&l(4,H=o.confirmDisabled),"large"in o&&l(5,I=o.large),"loading"in o&&l(6,A=o.loading),"class"in o&&l(7,L=o.class),"$$scope"in o&&l(21,g=o.$$scope)},a.$$.update=()=>{a.$$.dirty&256&&d&&d.querySelector("input"),a.$$.dirty&256&&S&&d&&d.focus()},e=fe(e),[N,V,h,p,H,I,A,L,d,m,O,P,k,u,e,s,S,B,r,c,f,g]}class je extends he{constructor(e){super(),pe(this,e,He,Ve,ke,{hideConfirm:0,confirmText:1,cancelText:2,confirmType:3,confirmDisabled:4,large:5,loading:6,open:16,close:17,setError:18,class:7})}get open(){return this.$$.ctx[16]}get close(){return this.$$.ctx[17]}get setError(){return this.$$.ctx[18]}}export{je as M};