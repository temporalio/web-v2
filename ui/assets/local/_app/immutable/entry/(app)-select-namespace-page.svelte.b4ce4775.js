import{S as pe,b as ge,a as de,m as S,p as V,q as U,k,v as q,av as le,$ as ke,f as B,M as b,am as we,U as $,z as se,a1 as ye,a2 as Ee,h as ae,j as z,g as A,o as Te,G as Le,c as O,d as F,H as Ne,I as Ie,J as Se,t as ee,A as oe,w as G,x as J,C as Q,D as Y,u as E,E as K,a8 as ie,W as Ve,F as X,r as He,L as te,_ as Ue,Q as We,n as ve,e as ce,T as x,y as ze}from"../chunks/index.d29c66be.js";import{g as Ae}from"../chunks/navigation.1f863c55.js";import{p as Ce}from"../chunks/stores.4cf83f0e.js";import{l as ue,n as Me}from"../chunks/namespaces.52575875.js";import{r as Pe}from"../chunks/route-for.621078db.js";import{E as be}from"../chunks/empty-state.bf113865.js";import{I as Re}from"../chunks/icon.5aa23970.js";import{P as Oe}from"../chunks/page-title.ba38eecf.js";import{d as Fe}from"../chunks/workflow-service.e1321802.js";import{t as Be}from"../chunks/toaster.fda31b2d.js";function _e(s,e,t){const l=s.slice();return l[23]=e[t],l}const De=s=>({item:s&16}),fe=s=>({item:s[23].data});function qe(s){let e;return{c(){e=G("Missing template")},l(t){e=J(t,"Missing template")},m(t,l){B(t,e,l)},d(t){t&&k(e)}}}function he(s,e){let t,l,n;const h=e[14].default,_=Le(h,e,e[13],fe),u=_||qe();return{key:s,first:null,c(){t=S("svelte-virtual-list-row"),u&&u.c(),l=O(),this.h()},l(a){t=V(a,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var r=U(t);u&&u.l(r),l=F(r),r.forEach(k),this.h()},h(){le(t,"class","svelte-1kdxoed"),this.first=t},m(a,r){B(a,t,r),u&&u.m(t,null),b(t,l),n=!0},p(a,r){e=a,_&&_.p&&(!n||r&8208)&&Ne(_,h,e,e[13],n?Se(h,e[13],r,De):Ie(e[13]),fe)},i(a){n||(z(u,a),n=!0)},o(a){A(u,a),n=!1},d(a){a&&k(t),u&&u.d(a)}}}function je(s){let e,t,l=[],n=new Map,h,_,u,a,r=s[4];const m=i=>i[23].index;for(let i=0;i<r.length;i+=1){let o=_e(s,r,i),c=m(o);n.set(c,l[i]=he(c,o))}return{c(){e=S("svelte-virtual-list-viewport"),t=S("svelte-virtual-list-contents");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=V(i,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var o=U(e);t=V(o,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var c=U(t);for(let g=0;g<l.length;g+=1)l[g].l(c);c.forEach(k),o.forEach(k),this.h()},h(){q(t,"padding-top",s[5]+"px"),q(t,"padding-bottom",s[6]+"px"),le(t,"class","svelte-1kdxoed"),q(e,"height",s[0]),le(e,"class","svelte-1kdxoed"),ke(()=>s[17].call(e))},m(i,o){B(i,e,o),b(e,t);for(let c=0;c<l.length;c+=1)l[c].m(t,null);s[15](t),s[16](e),h=we(e,s[17].bind(e)),_=!0,u||(a=$(e,"scroll",s[7]),u=!0)},p(i,[o]){o&8208&&(r=i[4],se(),l=ye(l,o,m,1,i,r,n,t,Ee,he,null,_e),ae()),(!_||o&32)&&q(t,"padding-top",i[5]+"px"),(!_||o&64)&&q(t,"padding-bottom",i[6]+"px"),(!_||o&1)&&q(e,"height",i[0])},i(i){if(!_){for(let o=0;o<r.length;o+=1)z(l[o]);_=!0}},o(i){for(let o=0;o<l.length;o+=1)A(l[o]);_=!1},d(i){i&&k(e);for(let o=0;o<l.length;o+=1)l[o].d();s[15](null),s[16](null),h(),u=!1,a()}}}function Ge(s,e,t){let{$$slots:l={},$$scope:n}=e,{items:h}=e,{height:_="100%"}=e,{itemHeight:u=void 0}=e,{start:a=0}=e,{end:r=0}=e,m=[],i,o,c,g=0,M,P,w=0,R=0,y;async function N(p,T,L){const{scrollTop:f}=o;await ee();let d=w-f,v=a;for(;d<T&&v<p.length;){let H=i[v-a];H||(t(9,r=v+1),await ee(),H=i[v-a]);const C=m[v]=L||H.offsetHeight;d+=C,v+=1}t(9,r=v);const W=p.length-r;y=(w+d)/r,t(6,R=W*y),m.length=p.length}async function I(){const{scrollTop:p}=o,T=a;for(let v=0;v<i.length;v+=1)m[a+v]=u||i[v].offsetHeight;let L=0,f=0;for(;L<h.length;){const v=m[L]||y;if(f+v>p){t(8,a=L),t(5,w=f);break}f+=v,L+=1}for(;L<h.length&&(f+=m[L]||y,L+=1,!(f>p+g)););t(9,r=L);const d=h.length-r;for(y=f/r;L<h.length;)m[L++]=y;if(t(6,R=d*y),a<T){await ee();let v=0,W=0;for(let C=a;C<T;C+=1)i[C-a]&&(v+=m[C],W+=u||i[C-a].offsetHeight);const H=W-v;o.scrollTo(0,p+H)}}Te(()=>{i=c.getElementsByTagName("svelte-virtual-list-row"),t(12,P=!0)});function D(p){oe[p?"unshift":"push"](()=>{c=p,t(3,c)})}function j(p){oe[p?"unshift":"push"](()=>{o=p,t(2,o)})}function Z(){g=this.offsetHeight,t(1,g)}return s.$$set=p=>{"items"in p&&t(10,h=p.items),"height"in p&&t(0,_=p.height),"itemHeight"in p&&t(11,u=p.itemHeight),"start"in p&&t(8,a=p.start),"end"in p&&t(9,r=p.end),"$$scope"in p&&t(13,n=p.$$scope)},s.$$.update=()=>{s.$$.dirty&1792&&t(4,M=h.slice(a,r).map((p,T)=>({index:T+a,data:p}))),s.$$.dirty&7170&&P&&N(h,g,u)},[_,g,o,c,M,w,R,I,a,r,h,u,P,n,l,D,j,Z]}class Je extends pe{constructor(e){super(),ge(this,e,Ge,je,de,{items:10,height:0,itemHeight:11,start:8,end:9})}}function me(s){const e=s[10]===s[2][0];s[11]=e;const t=s[10]===s[2][s[2].length-1];s[12]=t}function Qe(s){let e,t;return e=new be({props:{title:"No Namespaces. Contact your admin to create one."}}),{c(){Q(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,n){K(e,l,n),t=!0},p:ve,i(l){t||(z(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){X(e,l)}}}function Ye(s){let e,t,l,n;const h=[Xe,Ke],_=[];function u(a,r){return a[2].length?0:1}return e=u(s),t=_[e]=h[e](s),{c(){t.c(),l=ce()},l(a){t.l(a),l=ce()},m(a,r){_[e].m(a,r),B(a,l,r),n=!0},p(a,r){let m=e;e=u(a),e===m?_[e].p(a,r):(se(),A(_[m],1,1,()=>{_[m]=null}),ae(),t=_[e],t?t.p(a,r):(t=_[e]=h[e](a),t.c()),z(t,1),t.m(l.parentNode,l))},i(a){n||(z(t),n=!0)},o(a){A(t),n=!1},d(a){_[e].d(a),a&&k(l)}}}function Ke(s){let e,t;return e=new be({props:{title:"No results."}}),{c(){Q(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,n){K(e,l,n),t=!0},p:ve,i(l){t||(z(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){X(e,l)}}}function Xe(s){let e,t;return e=new Je({props:{items:s[2],itemHeight:50,$$slots:{default:[Ze,({item:l})=>({10:l}),({item:l})=>l?1024:0]},$$scope:{ctx:s}}}),{c(){Q(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,n){K(e,l,n),t=!0},p(l,n){const h={};n&4&&(h.items=l[2]),n&9220&&(h.$$scope={dirty:n,ctx:l}),e.$set(h)},i(l){t||(z(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){X(e,l)}}}function Ze(s){me(s);let e,t,l=s[10].namespace+"",n,h,_;function u(){return s[8](s[10])}return{c(){e=S("li"),t=S("button"),n=G(l),this.h()},l(a){e=V(a,"LI",{class:!0});var r=U(e);t=V(r,"BUTTON",{class:!0});var m=U(t);n=J(m,l),m.forEach(k),r.forEach(k),this.h()},h(){E(t,"class","w-full p-3 text-left"),E(e,"class","link-item svelte-8ihh0f"),x(e,"first",s[11]),x(e,"last",s[12])},m(a,r){B(a,e,r),b(e,t),b(t,n),h||(_=$(t,"click",u),h=!0)},p(a,r){s=a,me(s),r&1024&&l!==(l=s[10].namespace+"")&&ze(n,l),r&1028&&x(e,"first",s[11]),r&1028&&x(e,"last",s[12])},d(a){a&&k(e),h=!1,_()}}}function xe(s){let e,t,l,n,h,_,u,a,r,m,i,o,c,g,M,P,w,R,y,N,I,D,j,Z;e=new Oe({props:{title:"Select Namespace",url:s[3].url.href}}),o=new Re({props:{name:"search"}});const p=[Ye,Qe],T=[];function L(f,d){return f[1].length?0:1}return N=L(s),I=T[N]=p[N](s),{c(){Q(e.$$.fragment),t=O(),l=S("div"),n=S("h1"),h=G("Welcome to Temporal"),_=O(),u=S("p"),a=G("Select a Namespace to get started."),r=O(),m=S("form"),i=S("div"),Q(o.$$.fragment),c=O(),g=S("label"),M=G("Search Namespaces"),P=O(),w=S("input"),R=O(),y=S("ul"),I.c(),this.h()},l(f){Y(e.$$.fragment,f),t=F(f),l=V(f,"DIV",{class:!0});var d=U(l);n=V(d,"H1",{class:!0});var v=U(n);h=J(v,"Welcome to Temporal"),v.forEach(k),_=F(d),u=V(d,"P",{class:!0});var W=U(u);a=J(W,"Select a Namespace to get started."),W.forEach(k),r=F(d),m=V(d,"FORM",{class:!0,role:!0});var H=U(m);i=V(H,"DIV",{class:!0});var C=U(i);Y(o.$$.fragment,C),C.forEach(k),c=F(H),g=V(H,"LABEL",{class:!0,for:!0});var re=U(g);M=J(re,"Search Namespaces"),re.forEach(k),P=F(H),w=V(H,"INPUT",{class:!0,placeholder:!0,type:!0,id:!0}),H.forEach(k),R=F(d),y=V(d,"UL",{class:!0,"aria-label":!0});var ne=U(y);I.l(ne),ne.forEach(k),d.forEach(k),this.h()},h(){E(n,"class","my-4 text-3xl"),E(u,"class","mb-8"),E(i,"class","ml-4 mr-2"),E(g,"class","sr-only"),E(g,"for","search-namespaces"),E(w,"class","w-full"),E(w,"placeholder","Search"),E(w,"type","search"),E(w,"id","search-namespaces"),E(m,"class","search svelte-8ihh0f"),E(m,"role","search"),E(y,"class","h-screen w-full"),E(y,"aria-label","namespaces"),E(l,"class","w-full p-8 xl:w-1/2")},m(f,d){K(e,f,d),B(f,t,d),B(f,l,d),b(l,n),b(n,h),b(l,_),b(l,u),b(u,a),b(l,r),b(l,m),b(m,i),K(o,i,null),b(m,c),b(m,g),b(g,M),b(m,P),b(m,w),ie(w,s[0]),b(l,R),b(l,y),T[N].m(y,null),D=!0,j||(Z=[$(w,"keydown",Ve(s[6])),$(w,"input",s[7])],j=!0)},p(f,[d]){const v={};d&8&&(v.url=f[3].url.href),e.$set(v),d&1&&ie(w,f[0]);let W=N;N=L(f),N===W?T[N].p(f,d):(se(),A(T[W],1,1,()=>{T[W]=null}),ae(),I=T[N],I?I.p(f,d):(I=T[N]=p[N](f),I.c()),z(I,1),I.m(y,null))},i(f){D||(z(e.$$.fragment,f),z(o.$$.fragment,f),z(I),D=!0)},o(f){A(e.$$.fragment,f),A(o.$$.fragment,f),A(I),D=!1},d(f){X(e,f),f&&k(t),f&&k(l),X(o),T[N].d(),j=!1,He(Z)}}}function $e(s,e,t){let l,n,h,_,u,a;te(s,ue,c=>t(9,_=c)),te(s,Me,c=>t(5,u=c)),te(s,Ce,c=>t(3,a=c));let r="";function m(c){We.call(this,s,c)}function i(){r=this.value,t(0,r)}const o=c=>c==null?void 0:c.onClick(c.namespace);return s.$$.update=()=>{s.$$.dirty&32&&t(4,l=u.map(c=>{var g;return(g=c==null?void 0:c.namespaceInfo)===null||g===void 0?void 0:g.name})),s.$$.dirty&16&&t(1,n=l.map(c=>({namespace:c,onClick:async g=>{const{authorized:M}=await Fe(g);M?(Ue(ue,_=g,_),Ae(Pe({namespace:g}))):Be.push({variant:"error",message:"You do not have access to this namespace."})}}))),s.$$.dirty&3&&t(2,h=n.filter(({namespace:c})=>c.includes(r)))},[r,n,h,a,l,u,m,i,o]}class ut extends pe{constructor(e){super(),ge(this,e,$e,xe,de,{})}}export{ut as default};