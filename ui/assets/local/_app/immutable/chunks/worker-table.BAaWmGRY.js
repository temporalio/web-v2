import{s as ue,h as w,t as x,b as P,j as k,k as T,l as F,d as D,f as c,m as $,i as _,n as g,c as ee,q as J,x as te,y as pe,v as M}from"./scheduler.D6mQsyhd.js";import{S as fe,i as me,c as K,a as L,m as S,t as H,b as V,d as Y,g as le,e as se}from"./index.CDeUyeTp.js";import{e as ae}from"./each.5YhwczXz.js";import{B as de}from"./badge.BRSKsVh1.js";import{E as _e}from"./empty-state.B38A5At1.js";import{T as $e,a as he,b as we}from"./table.CM3bGwx2.js";import{t as C}from"./translate.BBe5dcco.js";import"./auth-user.Cid3NYY5.js";import"./toaster.DP6gANQw.js";import"./paths.CK4FmALp.js";import"./entry.CeMiYCRc.js";import{t as ke,r as Te,f as re}from"./time-format.47WJUmnX.js";import{I as ge}from"./icon.BRzabkM-.js";function ve(u){let e,s;return e=new ge({props:{name:u[0]?"checkmark":"close",class:"m-auto "+(u[0]?"text-blue-700":"text-primary"),title:u[0]?C("common.yes"):C("common.no")}}),{c(){K(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){S(e,t,l),s=!0},p(t,[l]){const r={};l&1&&(r.name=t[0]?"checkmark":"close"),l&1&&(r.class="m-auto "+(t[0]?"text-blue-700":"text-primary")),l&1&&(r.title=t[0]?C("common.yes"):C("common.no")),e.$set(r)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){Y(e,t)}}}function be(u,e,s){let{includesTaskQueueType:t}=e;return u.$$set=l=>{"includesTaskQueueType"in l&&s(0,t=l.includesTaskQueueType)},[t]}class oe extends fe{constructor(e){super(),me(this,e,be,ve,ue,{includesTaskQueueType:0})}}function ne(u,e,s){const t=u.slice();return t[3]=e[s],t}function Ee(u){var t,l;let e=(((l=(t=u[0])==null?void 0:t.pollers)==null?void 0:l.length)||0)+"",s;return{c(){s=x(e)},l(r){s=F(r,e)},m(r,a){_(r,s,a)},p(r,a){var f,n;a&1&&e!==(e=(((n=(f=r[0])==null?void 0:f.pollers)==null?void 0:n.length)||0)+"")&&J(s,e)},d(r){r&&c(s)}}}function ce(u){let e,s,t,l,r;return t=new _e({props:{title:C("workflows.workers-empty-state")}}),{c(){e=w("tr"),s=w("td"),K(t.$$.fragment),l=P(),this.h()},l(a){e=k(a,"TR",{class:!0});var f=T(e);s=k(f,"TD",{colspan:!0});var n=T(s);L(t.$$.fragment,n),n.forEach(c),l=D(f),f.forEach(c),this.h()},h(){$(s,"colspan",6),$(e,"class","w-full")},m(a,f){_(a,e,f),g(e,s),S(t,s,null),g(e,l),r=!0},p:M,i(a){r||(H(t.$$.fragment,a),r=!0)},o(a){V(t.$$.fragment,a),r=!1},d(a){a&&c(e),Y(t)}}}function ye(u){var b,z;let e,s,t=u[3].identity+"",l,r,a,f,n=(((z=(b=u[3])==null?void 0:b.workerVersionCapabilities)==null?void 0:z.buildId)??"")+"",o,p,m,v,y=re(u[3].lastAccessTime,u[1],{relative:u[2]})+"",W,j,A,Q,I,E,O,B,d;return Q=new oe({props:{includesTaskQueueType:u[3].taskQueueTypes.includes("WORKFLOW")}}),O=new oe({props:{includesTaskQueueType:u[3].taskQueueTypes.includes("ACTIVITY")}}),{c(){e=w("td"),s=w("p"),l=x(t),r=P(),a=w("td"),f=w("p"),o=x(n),p=P(),m=w("td"),v=w("p"),W=x(y),j=P(),A=w("td"),K(Q.$$.fragment),I=P(),E=w("td"),K(O.$$.fragment),B=P(),this.h()},l(i){e=k(i,"TD",{class:!0,"data-testid":!0});var h=T(e);s=k(h,"P",{class:!0});var N=T(s);l=F(N,t),N.forEach(c),h.forEach(c),r=D(i),a=k(i,"TD",{class:!0,"data-testid":!0});var R=T(a);f=k(R,"P",{class:!0});var q=T(f);o=F(q,n),q.forEach(c),R.forEach(c),p=D(i),m=k(i,"TD",{class:!0,"data-testid":!0});var G=T(m);v=k(G,"P",{class:!0});var U=T(v);W=F(U,y),U.forEach(c),G.forEach(c),j=D(i),A=k(i,"TD",{"data-testid":!0});var X=T(A);L(Q.$$.fragment,X),X.forEach(c),I=D(i),E=k(i,"TD",{"data-testid":!0});var Z=T(E);L(O.$$.fragment,Z),Z.forEach(c),B=D(i),this.h()},h(){$(s,"class","select-all"),$(e,"class","text-left"),$(e,"data-testid","worker-identity"),$(f,"class","select-all break-all"),$(a,"class","text-left"),$(a,"data-testid","worker-build-id"),$(v,"class","select-all"),$(m,"class","text-left"),$(m,"data-testid","worker-last-access-time"),$(A,"data-testid","workflow-poller"),$(E,"data-testid","activity-poller")},m(i,h){_(i,e,h),g(e,s),g(s,l),_(i,r,h),_(i,a,h),g(a,f),g(f,o),_(i,p,h),_(i,m,h),g(m,v),g(v,W),_(i,j,h),_(i,A,h),S(Q,A,null),_(i,I,h),_(i,E,h),S(O,E,null),_(i,B,h),d=!0},p(i,h){var q,G;(!d||h&1)&&t!==(t=i[3].identity+"")&&J(l,t),(!d||h&1)&&n!==(n=(((G=(q=i[3])==null?void 0:q.workerVersionCapabilities)==null?void 0:G.buildId)??"")+"")&&J(o,n),(!d||h&7)&&y!==(y=re(i[3].lastAccessTime,i[1],{relative:i[2]})+"")&&J(W,y);const N={};h&1&&(N.includesTaskQueueType=i[3].taskQueueTypes.includes("WORKFLOW")),Q.$set(N);const R={};h&1&&(R.includesTaskQueueType=i[3].taskQueueTypes.includes("ACTIVITY")),O.$set(R)},i(i){d||(H(Q.$$.fragment,i),H(O.$$.fragment,i),d=!0)},o(i){V(Q.$$.fragment,i),V(O.$$.fragment,i),d=!1},d(i){i&&(c(e),c(r),c(a),c(p),c(m),c(j),c(A),c(I),c(E),c(B)),Y(Q),Y(O)}}}function ie(u){let e,s;return e=new we({props:{"data-testid":"worker-row",$$slots:{default:[ye]},$$scope:{ctx:u}}}),{c(){K(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){S(e,t,l),s=!0},p(t,l){const r={};l&71&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){Y(e,t)}}}function Qe(u){var f;let e,s,t=ae((f=u[0])==null?void 0:f.pollers),l=[];for(let n=0;n<t.length;n+=1)l[n]=ie(ne(u,t,n));const r=n=>V(l[n],1,1,()=>{l[n]=null});let a=null;return t.length||(a=ce()),{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=te(),a&&a.c()},l(n){for(let o=0;o<l.length;o+=1)l[o].l(n);e=te(),a&&a.l(n)},m(n,o){for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(n,o);_(n,e,o),a&&a.m(n,o),s=!0},p(n,o){var p;if(o&7){t=ae((p=n[0])==null?void 0:p.pollers);let m;for(m=0;m<t.length;m+=1){const v=ne(n,t,m);l[m]?(l[m].p(v,o),H(l[m],1)):(l[m]=ie(v),l[m].c(),H(l[m],1),l[m].m(e.parentNode,e))}for(le(),m=t.length;m<l.length;m+=1)r(m);se(),!t.length&&a?a.p(n,o):t.length?a&&(le(),V(a,1,1,()=>{a=null}),se()):(a=ce(),a.c(),H(a,1),a.m(e.parentNode,e))}},i(n){if(!s){for(let o=0;o<t.length;o+=1)H(l[o]);s=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)V(l[o]);s=!1},d(n){n&&c(e),pe(l,n),a&&a.d(n)}}}function Ie(u){let e,s=C("workflows.workers-tab")+"",t;return{c(){e=w("caption"),t=x(s),this.h()},l(l){e=k(l,"CAPTION",{class:!0,slot:!0});var r=T(e);t=F(r,s),r.forEach(c),this.h()},h(){$(e,"class","sr-only"),$(e,"slot","caption")},m(l,r){_(l,e,r),g(e,t)},p:M,d(l){l&&c(e)}}}function Pe(u){let e,s=C("common.id")+"",t,l,r,a=C("workers.buildId")+"",f,n,o,p=C("workflows.last-accessed")+"",m,v,y,W,j=C("workflows.workflow-task-handler")+"",A,Q,I,E,O=C("workflows.activity-handler")+"",B;return{c(){e=w("th"),t=x(s),l=P(),r=w("th"),f=x(a),n=P(),o=w("th"),m=x(p),v=P(),y=w("th"),W=w("p"),A=x(j),Q=P(),I=w("th"),E=w("p"),B=x(O),this.h()},l(d){e=k(d,"TH",{class:!0});var b=T(e);t=F(b,s),b.forEach(c),l=D(d),r=k(d,"TH",{class:!0});var z=T(r);f=F(z,a),z.forEach(c),n=D(d),o=k(d,"TH",{class:!0});var i=T(o);m=F(i,p),i.forEach(c),v=D(d),y=k(d,"TH",{class:!0});var h=T(y);W=k(h,"P",{class:!0});var N=T(W);A=F(N,j),N.forEach(c),h.forEach(c),Q=D(d),I=k(d,"TH",{class:!0});var R=T(I);E=k(R,"P",{class:!0});var q=T(E);B=F(q,O),q.forEach(c),R.forEach(c),this.h()},h(){$(e,"class","w-4/12"),$(r,"class","w-3/12"),$(o,"class","w-2/12"),$(W,"class","text-center"),$(y,"class","w-2/12"),$(E,"class","text-center"),$(I,"class","w-2/12 text-center")},m(d,b){_(d,e,b),g(e,t),_(d,l,b),_(d,r,b),g(r,f),_(d,n,b),_(d,o,b),g(o,m),_(d,v,b),_(d,y,b),g(y,W),g(W,A),_(d,Q,b),_(d,I,b),g(I,E),g(E,B)},p:M,d(d){d&&(c(e),c(l),c(r),c(n),c(o),c(v),c(y),c(Q),c(I))}}}function De(u){let e,s;return e=new he({props:{slot:"headers",$$slots:{default:[Pe]},$$scope:{ctx:u}}}),{c(){K(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){S(e,t,l),s=!0},p(t,l){const r={};l&64&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){Y(e,t)}}}function Ce(u){let e,s=C("workers.workers")+"",t,l,r,a,f,n;return r=new de({props:{type:"count",class:"rounded-sm",$$slots:{default:[Ee]},$$scope:{ctx:u}}}),f=new $e({props:{class:"mb-6 w-full min-w-[600px] table-fixed",$$slots:{headers:[De],caption:[Ie],default:[Qe]},$$scope:{ctx:u}}}),{c(){e=w("h2"),t=x(s),l=P(),K(r.$$.fragment),a=P(),K(f.$$.fragment),this.h()},l(o){e=k(o,"H2",{class:!0,"data-testid":!0});var p=T(e);t=F(p,s),l=D(p),L(r.$$.fragment,p),p.forEach(c),a=D(o),L(f.$$.fragment,o),this.h()},h(){$(e,"class","flex items-center gap-2"),$(e,"data-testid","workers")},m(o,p){_(o,e,p),g(e,t),g(e,l),S(r,e,null),_(o,a,p),S(f,o,p),n=!0},p(o,[p]){const m={};p&65&&(m.$$scope={dirty:p,ctx:o}),r.$set(m);const v={};p&71&&(v.$$scope={dirty:p,ctx:o}),f.$set(v)},i(o){n||(H(r.$$.fragment,o),H(f.$$.fragment,o),n=!0)},o(o){V(r.$$.fragment,o),V(f.$$.fragment,o),n=!1},d(o){o&&(c(e),c(a)),Y(r),Y(f,o)}}}function He(u,e,s){let t,l;ee(u,ke,a=>s(1,t=a)),ee(u,Te,a=>s(2,l=a));let{workers:r}=e;return u.$$set=a=>{"workers"in a&&s(0,r=a.workers)},[r,t,l]}class Ye extends fe{constructor(e){super(),me(this,e,He,Ce,ue,{workers:0})}}export{oe as P,Ye as W};