import{s as le,a1 as ae,M as ie,h as w,b as q,t as J,j as k,k as I,f as g,d as B,l as z,m as D,i as F,n as _,q as re,T as fe,c as x,v as Q}from"../chunks/scheduler.1T9hOnFr.js";import{S as me,i as ue,f as ce,c as C,a as M,m as V,t as U,b as P,d as S}from"../chunks/index.cVovwi_s.js";import{g as se}from"../chunks/entry.BARTHPXF.js";import{p as de}from"../chunks/stores.mHetyShC.js";import{P as ge}from"../chunks/page-title.YnYjoVKm.js";import{t as v}from"../chunks/translate.HrioCK44.js";import{B as y}from"../chunks/button.5Y2A2fOX.js";import{I as _e}from"../chunks/input.fGjqbkqf.js";import{L as he}from"../chunks/link.Mw5K6g6Y.js";import{M as $e}from"../chunks/modal.mYnTyx7x.js";import{N as ve,e as be}from"../chunks/nexus-form.tpJqfCVn.js";import{j as ee,h as Ne}from"../chunks/route-for.O9k37ubP.js";import{u as De,d as Ee}from"../chunks/nexus-service.nidGqU10.js";import{n as Le}from"../chunks/namespaces.H9un0sFh.js";import{e as we}from"../chunks/encode-payload.GXNVrQI4.js";function ke(e){let n=v("nexus.back-to-endpoint")+"",t;return{c(){t=J(n)},l(a){t=z(a,n)},m(a,i){F(a,t,i)},p:Q,d(a){a&&g(t)}}}function Ie(e){let n=v("nexus.delete-endpoint")+"",t;return{c(){t=J(n)},l(a){t=z(a,n)},m(a,i){F(a,t,i)},p:Q,d(a){a&&g(t)}}}function Ce(e){let n=v("common.save")+"",t;return{c(){t=J(n)},l(a){t=z(a,n)},m(a,i){F(a,t,i)},p:Q,d(a){a&&g(t)}}}function Me(e){let n=v("common.save")+"",t;return{c(){t=J(n)},l(a){t=z(a,n)},m(a,i){F(a,t,i)},p:Q,d(a){a&&g(t)}}}function Ve(e){let n=v("common.cancel")+"",t;return{c(){t=J(n)},l(a){t=z(a,n)},m(a,i){F(a,t,i)},p:Q,d(a){a&&g(t)}}}function Ue(e){let n,t=v("nexus.delete-modal-title")+"",a;return{c(){n=w("h3"),a=J(t),this.h()},l(i){n=k(i,"H3",{slot:!0});var s=I(n);a=z(s,t),s.forEach(g),this.h()},h(){D(n,"slot","title")},m(i,s){F(i,n,s),_(n,a)},p:Q,d(i){i&&g(n)}}}function Pe(e){let n,t,a=v("nexus.delete-modal-confirmation",{endpoint:e[0].spec.name})+"",i,s,r,p,d;function h(u){e[13](u)}let $={id:"delete-endpoint",required:!0,label:v("nexus.delete-modal-confirmation-label",{endpoint:e[0].spec.name})};return e[9]!==void 0&&($.value=e[9]),r=new _e({props:$}),ie.push(()=>ce(r,"value",h)),{c(){n=w("div"),t=w("p"),i=J(a),s=q(),C(r.$$.fragment),this.h()},l(u){n=k(u,"DIV",{slot:!0,class:!0});var c=I(n);t=k(c,"P",{});var o=I(t);i=z(o,a),o.forEach(g),s=B(c),M(r.$$.fragment,c),c.forEach(g),this.h()},h(){D(n,"slot","content"),D(n,"class","flex flex-col gap-4")},m(u,c){F(u,n,c),_(n,t),_(t,i),_(n,s),V(r,n,null),d=!0},p(u,c){(!d||c&1)&&a!==(a=v("nexus.delete-modal-confirmation",{endpoint:u[0].spec.name})+"")&&re(i,a);const o={};c&1&&(o.label=v("nexus.delete-modal-confirmation-label",{endpoint:u[0].spec.name})),!p&&c&512&&(p=!0,o.value=u[9],fe(()=>p=!1)),r.$set(o)},i(u){d||(U(r.$$.fragment,u),d=!0)},o(u){P(r.$$.fragment,u),d=!1},d(u){u&&g(n),S(r)}}}function Se(e){let n,t,a,i,s,r,p,d=e[0].spec.name+"",h,$,u,c,o,b,H,E,R,L,f,te,T,Y,N,ne,W;a=new he({props:{href:ee(e[10].params.id),icon:"chevron-left",$$slots:{default:[ke]},$$scope:{ctx:e}}}),c=new y({props:{variant:"destructive",$$slots:{default:[Ie]},$$scope:{ctx:e}}}),c.$on("click",e[11]),b=new y({props:{loading:e[6],$$slots:{default:[Ce]},$$scope:{ctx:e}}}),b.$on("click",function(){ae(e[3])&&e[3].apply(this,arguments)}),E=new ve({props:{endpoint:e[0],targetNamespaceList:e[1],callerNamespaceList:e[2],error:e[5],isCloud:e[7],nameDisabled:!0}}),f=new y({props:{loading:e[6],$$slots:{default:[Me]},$$scope:{ctx:e}}}),f.$on("click",function(){ae(e[3])&&e[3].apply(this,arguments)}),T=new y({props:{variant:"ghost",$$slots:{default:[Ve]},$$scope:{ctx:e}}}),T.$on("click",e[12]);function pe(m){e[14](m)}let oe={id:"delete-endpoint-modal",confirmType:"destructive",confirmText:v("common.delete"),cancelText:v("common.cancel"),confirmDisabled:e[9]!==e[0].spec.name,$$slots:{content:[Pe],title:[Ue]},$$scope:{ctx:e}};return e[8]!==void 0&&(oe.open=e[8]),N=new $e({props:oe}),ie.push(()=>ce(N,"open",pe)),N.$on("confirmModal",function(){ae(e[4])&&e[4].apply(this,arguments)}),N.$on("cancelModal",e[15]),{c(){n=w("div"),t=w("div"),C(a.$$.fragment),i=q(),s=w("div"),r=w("div"),p=w("h1"),h=J(d),$=q(),u=w("div"),C(c.$$.fragment),o=q(),C(b.$$.fragment),H=q(),C(E.$$.fragment),R=q(),L=w("div"),C(f.$$.fragment),te=q(),C(T.$$.fragment),Y=q(),C(N.$$.fragment),this.h()},l(m){n=k(m,"DIV",{class:!0});var l=I(n);t=k(l,"DIV",{class:!0});var K=I(t);M(a.$$.fragment,K),K.forEach(g),i=B(l),s=k(l,"DIV",{class:!0});var X=I(s);r=k(X,"DIV",{class:!0});var O=I(r);p=k(O,"H1",{"data-testid":!0,class:!0});var j=I(p);h=z(j,d),j.forEach(g),$=B(O),u=k(O,"DIV",{class:!0});var A=I(u);M(c.$$.fragment,A),o=B(A),M(b.$$.fragment,A),A.forEach(g),O.forEach(g),X.forEach(g),H=B(l),M(E.$$.fragment,l),R=B(l),L=k(l,"DIV",{class:!0});var G=I(L);M(f.$$.fragment,G),te=B(G),M(T.$$.fragment,G),G.forEach(g),l.forEach(g),Y=B(m),M(N.$$.fragment,m),this.h()},h(){D(t,"class","relative flex flex-col gap-4 text-sm"),D(p,"data-testid","namespace-selector-title"),D(p,"class","text-2xl"),D(u,"class","flex items-center gap-2"),D(r,"class","flex items-center justify-between"),D(s,"class","flex flex-col gap-1"),D(L,"class","flex items-center gap-4"),D(n,"class","flex flex-col gap-8")},m(m,l){F(m,n,l),_(n,t),V(a,t,null),_(n,i),_(n,s),_(s,r),_(r,p),_(p,h),_(r,$),_(r,u),V(c,u,null),_(u,o),V(b,u,null),_(n,H),V(E,n,null),_(n,R),_(n,L),V(f,L,null),_(L,te),V(T,L,null),F(m,Y,l),V(N,m,l),W=!0},p(m,[l]){e=m;const K={};l&1024&&(K.href=ee(e[10].params.id)),l&65536&&(K.$$scope={dirty:l,ctx:e}),a.$set(K),(!W||l&1)&&d!==(d=e[0].spec.name+"")&&re(h,d);const X={};l&65536&&(X.$$scope={dirty:l,ctx:e}),c.$set(X);const O={};l&64&&(O.loading=e[6]),l&65536&&(O.$$scope={dirty:l,ctx:e}),b.$set(O);const j={};l&1&&(j.endpoint=e[0]),l&2&&(j.targetNamespaceList=e[1]),l&4&&(j.callerNamespaceList=e[2]),l&32&&(j.error=e[5]),l&128&&(j.isCloud=e[7]),E.$set(j);const A={};l&64&&(A.loading=e[6]),l&65536&&(A.$$scope={dirty:l,ctx:e}),f.$set(A);const G={};l&65536&&(G.$$scope={dirty:l,ctx:e}),T.$set(G);const Z={};l&513&&(Z.confirmDisabled=e[9]!==e[0].spec.name),l&66049&&(Z.$$scope={dirty:l,ctx:e}),!ne&&l&256&&(ne=!0,Z.open=e[8],fe(()=>ne=!1)),N.$set(Z)},i(m){W||(U(a.$$.fragment,m),U(c.$$.fragment,m),U(b.$$.fragment,m),U(E.$$.fragment,m),U(f.$$.fragment,m),U(T.$$.fragment,m),U(N.$$.fragment,m),W=!0)},o(m){P(a.$$.fragment,m),P(c.$$.fragment,m),P(b.$$.fragment,m),P(E.$$.fragment,m),P(f.$$.fragment,m),P(T.$$.fragment,m),P(N.$$.fragment,m),W=!1},d(m){m&&(g(n),g(Y)),S(a),S(c),S(b),S(E),S(f),S(T),S(N,m)}}}function Fe(e,n,t){let a;x(e,de,f=>t(10,a=f));let{endpoint:i}=n,{targetNamespaceList:s=[]}=n,{callerNamespaceList:r=[]}=n,{onUpdate:p}=n,{onDelete:d}=n,{error:h=void 0}=n,{loading:$=!1}=n,{isCloud:u=!1}=n,c=!1,o="";const b=()=>t(8,c=!0),H=()=>se(ee(a.params.id));function E(f){o=f,t(9,o)}function R(f){c=f,t(8,c)}const L=()=>t(8,c=!1);return e.$$set=f=>{"endpoint"in f&&t(0,i=f.endpoint),"targetNamespaceList"in f&&t(1,s=f.targetNamespaceList),"callerNamespaceList"in f&&t(2,r=f.callerNamespaceList),"onUpdate"in f&&t(3,p=f.onUpdate),"onDelete"in f&&t(4,d=f.onDelete),"error"in f&&t(5,h=f.error),"loading"in f&&t(6,$=f.loading),"isCloud"in f&&t(7,u=f.isCloud)},[i,s,r,p,d,h,$,u,c,o,a,b,H,E,R,L]}class Te extends me{constructor(n){super(),ue(this,n,Fe,Se,le,{endpoint:0,targetNamespaceList:1,callerNamespaceList:2,onUpdate:3,onDelete:4,error:5,loading:6,isCloud:7})}}function je(e){let n,t,a,i;return n=new ge({props:{title:`Edit ${v("nexus.nexus-endpoint",{id:e[4].params.id})}`,url:e[4].url.href}}),a=new Te({props:{endpoint:e[3],loading:e[1],targetNamespaceList:e[2],onUpdate:e[5],onDelete:e[6],error:e[0]}}),{c(){C(n.$$.fragment),t=q(),C(a.$$.fragment)},l(s){M(n.$$.fragment,s),t=B(s),M(a.$$.fragment,s)},m(s,r){V(n,s,r),F(s,t,r),V(a,s,r),i=!0},p(s,[r]){const p={};r&16&&(p.title=`Edit ${v("nexus.nexus-endpoint",{id:s[4].params.id})}`),r&16&&(p.url=s[4].url.href),n.$set(p);const d={};r&8&&(d.endpoint=s[3]),r&2&&(d.loading=s[1]),r&4&&(d.targetNamespaceList=s[2]),r&1&&(d.error=s[0]),a.$set(d)},i(s){i||(U(n.$$.fragment,s),U(a.$$.fragment,s),i=!0)},o(s){P(n.$$.fragment,s),P(a.$$.fragment,s),i=!1},d(s){s&&g(t),S(n,s),S(a,s)}}}function qe(e,n,t){let a,i,s,r,p;x(e,Le,o=>t(8,s=o)),x(e,be,o=>t(9,r=o)),x(e,de,o=>t(4,p=o));let{data:d}=n,h,$=!1;const u=async()=>{t(0,h=void 0),t(1,$=!0);const o={...r};o.id=a.id,o.version=a.version;const b=await we(JSON.stringify(o.spec.descriptionString));o.spec.description=b[0],delete o.spec.allowedCallerNamespaces,delete o.spec.descriptionString;try{await De(a.id,o),se(ee(a.id),{invalidateAll:!0})}catch(H){t(0,h=H),console.error("Error updating endpoint",H)}finally{t(1,$=!1)}},c=async()=>{t(0,h=void 0),t(1,$=!0);try{await Ee(a.id,a.version),se(Ne())}catch(o){t(0,h=o),console.error("Error deleting endpoint",o)}finally{t(1,$=!1)}};return e.$$set=o=>{"data"in o&&t(7,d=o.data)},e.$$.update=()=>{e.$$.dirty&128&&t(3,{endpoint:a}=d,a),e.$$.dirty&256&&t(2,i=s.map(o=>({namespace:o.namespaceInfo.name})))},[h,$,i,a,p,u,c,d,s]}class xe extends me{constructor(n){super(),ue(this,n,qe,je,le,{data:7})}}export{xe as component};