import{s as Te,a as ie,z as X,h as P,b as Y,t as Z,j as S,k as F,d as y,f as E,l as p,m as D,H as I,E as oe,i as w,n as T,p as W,Y as ke,a1 as Me,u as se,g as ne,e as fe,q as x,G as De,D as re,r as Ee,A as de,O as Ce}from"./scheduler.D6mQsyhd.js";import{S as Ne,i as Ie,c as $,a as ee,m as te,t as k,g as ce,b as C,e as me,d as le}from"./index.CDeUyeTp.js";import{g as ze}from"./spread.CgU5AtxT.js";import{B as ve}from"./button.BCRYUxsc.js";import{f as Oe}from"./menu.BsV3sId1.js";import{I as Ve}from"./icon-button.OiasrPYH.js";import{t as ue}from"./tw-merge.Ds6tgvmq.js";const je=t=>({}),ge=t=>({}),qe=t=>({}),_e=t=>({});function he(t){let e,a;return e=new Ve({props:{label:t[3],icon:"close",class:"float-right m-4"}}),e.$on("click",t[14]),{c(){$(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,r){te(e,i,r),a=!0},p(i,r){const m={};r&8&&(m.label=i[3]),e.$set(m)},i(i){a||(k(e.$$.fragment,i),a=!0)},o(i){C(e.$$.fragment,i),a=!1},d(i){le(e,i)}}}function Ae(t){let e;return{c(){e=Z(t[3])},l(a){e=p(a,t[3])},m(a,i){w(a,e,i)},p(a,i){i&8&&x(e,a[3])},d(a){a&&E(e)}}}function be(t){let e,a;return e=new ve({props:{variant:t[4],loading:t[7],disabled:t[5]||t[7],"data-testid":"confirm-modal-button",type:"submit",$$slots:{default:[Be]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,r){te(e,i,r),a=!0},p(i,r){const m={};r&16&&(m.variant=i[4]),r&128&&(m.loading=i[7]),r&160&&(m.disabled=i[5]||i[7]),r&4194308&&(m.$$scope={dirty:r,ctx:i}),e.$set(m)},i(i){a||(k(e.$$.fragment,i),a=!0)},o(i){C(e.$$.fragment,i),a=!1},d(i){le(e,i)}}}function Be(t){let e;return{c(){e=Z(t[2])},l(a){e=p(a,t[2])},m(a,i){w(a,e,i)},p(a,i){i&4&&x(e,a[2])},d(a){a&&E(e)}}}function Ge(t){let e,a,i,r,m,g,u,j,_,z,O,q,h,b,A,v,N,V,n,B,H,f=!t[7]&&he(t);const L=t[20].title,d=ie(L,t,t[22],_e),R=t[20].content,c=ie(R,t,t[22],ge);b=new ve({props:{variant:"ghost",disabled:t[7],$$slots:{default:[Ae]},$$scope:{ctx:t}}}),b.$on("click",t[14]);let l=!t[1]&&be(t),M=[{id:t[9]},{class:v=ue("body",t[10])},{"aria-modal":"true"},{"aria-labelledby":N="modal-title-"+t[9]},{"data-testid":V=t[16]["data-testid"]},t[17]],J={};for(let o=0;o<M.length;o+=1)J=X(J,M[o]);return{c(){e=P("dialog"),f&&f.c(),a=Y(),i=P("div"),d&&d.c(),m=Y(),g=P("form"),u=P("div"),c&&c.c(),j=Y(),_=P("p"),z=Z(t[0]),q=Y(),h=P("div"),$(b.$$.fragment),A=Y(),l&&l.c(),this.h()},l(o){e=S(o,"DIALOG",{id:!0,class:!0,"aria-modal":!0,"aria-labelledby":!0,"data-testid":!0});var s=F(e);f&&f.l(s),a=y(s),i=S(s,"DIV",{id:!0,class:!0});var G=F(i);d&&d.l(G),G.forEach(E),m=y(s),g=S(s,"FORM",{method:!0});var K=F(g);u=S(K,"DIV",{id:!0,class:!0});var Q=F(u);c&&c.l(Q),j=y(Q),_=S(Q,"P",{class:!0,role:!0});var ae=F(_);z=p(ae,t[0]),ae.forEach(E),Q.forEach(E),q=y(K),h=S(K,"DIV",{class:!0});var U=F(h);ee(b.$$.fragment,U),A=y(U),l&&l.l(U),U.forEach(E),K.forEach(E),s.forEach(E),this.h()},h(){D(i,"id",r="modal-title-"+t[9]),D(i,"class","title svelte-1f6vpkz"),D(_,"class","mt-2 text-sm font-normal text-danger"),D(_,"role","alert"),I(_,"hidden",!t[0]),D(u,"id",O="modal-content-"+t[9]),D(u,"class","content svelte-1f6vpkz"),D(h,"class","flex items-center justify-end space-x-2 p-6"),D(g,"method","dialog"),oe(e,J),I(e,"large",t[6]),I(e,"hightlightNav",t[8]),I(e,"svelte-1f6vpkz",!0)},m(o,s){w(o,e,s),f&&f.m(e,null),T(e,a),T(e,i),d&&d.m(i,null),T(e,m),T(e,g),T(g,u),c&&c.m(u,null),T(u,j),T(u,_),T(_,z),T(g,q),T(g,h),te(b,h,null),T(h,A),l&&l.m(h,null),t[21](e),n=!0,B||(H=[W(window,"click",t[15]),W(g,"submit",ke(t[13])),W(e,"close",t[12]),Me(Oe.call(null,e,!0))],B=!0)},p(o,[s]){o[7]?f&&(ce(),C(f,1,1,()=>{f=null}),me()):f?(f.p(o,s),s&128&&k(f,1)):(f=he(o),f.c(),k(f,1),f.m(e,a)),d&&d.p&&(!n||s&4194304)&&se(d,L,o,o[22],n?fe(L,o[22],s,qe):ne(o[22]),_e),(!n||s&512&&r!==(r="modal-title-"+o[9]))&&D(i,"id",r),c&&c.p&&(!n||s&4194304)&&se(c,R,o,o[22],n?fe(R,o[22],s,je):ne(o[22]),ge),(!n||s&1)&&x(z,o[0]),(!n||s&1)&&I(_,"hidden",!o[0]),(!n||s&512&&O!==(O="modal-content-"+o[9]))&&D(u,"id",O);const G={};s&128&&(G.disabled=o[7]),s&4194312&&(G.$$scope={dirty:s,ctx:o}),b.$set(G),o[1]?l&&(ce(),C(l,1,1,()=>{l=null}),me()):l?(l.p(o,s),s&2&&k(l,1)):(l=be(o),l.c(),k(l,1),l.m(h,null)),oe(e,J=ze(M,[(!n||s&512)&&{id:o[9]},(!n||s&1024&&v!==(v=ue("body",o[10])))&&{class:v},{"aria-modal":"true"},(!n||s&512&&N!==(N="modal-title-"+o[9]))&&{"aria-labelledby":N},(!n||s&65536&&V!==(V=o[16]["data-testid"]))&&{"data-testid":V},s&131072&&o[17]])),I(e,"large",o[6]),I(e,"hightlightNav",o[8]),I(e,"svelte-1f6vpkz",!0)},i(o){n||(k(f),k(d,o),k(c,o),k(b.$$.fragment,o),k(l),n=!0)},o(o){C(f),C(d,o),C(c,o),C(b.$$.fragment,o),C(l),n=!1},d(o){o&&E(e),f&&f.d(),d&&d.d(o),c&&c.d(o),le(b),l&&l.d(),t[21](null),B=!1,De(H)}}}function Pe(t,e,a){const i=["hideConfirm","confirmText","cancelText","confirmType","confirmDisabled","large","loading","hightlightNav","id","open","error","class","toggleModal"];let r=re(e,i),{$$slots:m={},$$scope:g}=e,{hideConfirm:u=!1}=e,{confirmText:j}=e,{cancelText:_}=e,{confirmType:z="primary"}=e,{confirmDisabled:O=!1}=e,{large:q=!1}=e,{loading:h=!1}=e,{hightlightNav:b=!1}=e,{id:A}=e,{open:v}=e,{error:N=""}=e,{class:V=""}=e,n;const B=(l,M)=>{l?M==null||M.showModal():M==null||M.close()},H=Ee(),f=()=>{H("cancelModal"),a(18,v=!1),a(0,N="")},L=()=>{H("confirmModal")},d=()=>{a(18,v=!1)},R=l=>{l.target===n&&d()};function c(l){Ce[l?"unshift":"push"](()=>{n=l,a(11,n)})}return t.$$set=l=>{a(16,e=X(X({},e),de(l))),a(17,r=re(e,i)),"hideConfirm"in l&&a(1,u=l.hideConfirm),"confirmText"in l&&a(2,j=l.confirmText),"cancelText"in l&&a(3,_=l.cancelText),"confirmType"in l&&a(4,z=l.confirmType),"confirmDisabled"in l&&a(5,O=l.confirmDisabled),"large"in l&&a(6,q=l.large),"loading"in l&&a(7,h=l.loading),"hightlightNav"in l&&a(8,b=l.hightlightNav),"id"in l&&a(9,A=l.id),"open"in l&&a(18,v=l.open),"error"in l&&a(0,N=l.error),"class"in l&&a(10,V=l.class),"$$scope"in l&&a(22,g=l.$$scope)},t.$$.update=()=>{t.$$.dirty&264192&&B(v,n),t.$$.dirty&264192&&v&&n&&n.focus()},e=de(e),[N,u,j,_,z,O,q,h,b,A,V,n,f,L,d,R,e,r,v,B,m,c,g]}class Je extends Ne{constructor(e){super(),Ie(this,e,Pe,Ge,Te,{hideConfirm:1,confirmText:2,cancelText:3,confirmType:4,confirmDisabled:5,large:6,loading:7,hightlightNav:8,id:9,open:18,error:0,class:10,toggleModal:19})}get toggleModal(){return this.$$.ctx[19]}}export{Je as M};