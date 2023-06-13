import{S as me,b as he,a as ge,O as Z,m as P,w as F,c as R,p as I,q as y,x as G,k as E,d as W,u as i,v as oe,T as S,R as ue,f as M,M as m,a8 as J,U as C,y as Y,V as ke,aq as Q,n as x,r as be,a5 as ie,P as fe,A as ve,e as _e,z as we,g as B,h as Ee,j as K,Y as Ne,G as Pe,C as $,D as ee,E as te,Z as Ie,H as Te,I as Ae,J as De,F as se}from"./index.d29c66be.js";import{C as ye}from"./code-block.fc92cd67.js";import{o as de}from"./omit.6cf41932.js";import{L as Ve}from"./loading.9b5a6a67.js";function ce(t){let s,e;return{c(){s=P("label"),e=F(t[1]),this.h()},l(l){s=I(l,"LABEL",{class:!0,for:!0});var u=y(s);e=G(u,t[1]),u.forEach(E),this.h()},h(){i(s,"class","flex shrink text-sm"),i(s,"for",t[4])},m(l,u){M(l,s,u),m(s,e)},p(l,u){u&2&&Y(e,l[1]),u&16&&i(s,"for",l[4])},d(l){l&&E(s)}}}function Oe(t){let s,e,l,u,N,c,p,r,v=(t[0]??"")+"",_,a,d,A,j,V,T,D,L,h,X,f,O,k,n,w=[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},{min:t[2]},{max:t[3]},{step:A=t[11].step},de(t[12],"class")],U={};for(let o=0;o<w.length;o+=1)U=Z(U,w[o]);let b=t[1]&&ce(t);return{c(){s=P("div"),e=P("div"),l=P("div"),u=P("span"),N=F(t[2]),c=R(),p=P("div"),r=P("output"),_=F(v),a=R(),d=P("input"),j=R(),V=P("span"),T=F(t[3]),D=R(),L=P("div"),h=P("input"),f=R(),b&&b.c(),this.h()},l(o){s=I(o,"DIV",{class:!0});var g=y(s);e=I(g,"DIV",{class:!0});var q=y(e);l=I(q,"DIV",{class:!0});var z=y(l);u=I(z,"SPAN",{class:!0});var le=y(u);N=G(le,t[2]),le.forEach(E),c=W(z),p=I(z,"DIV",{class:!0});var H=y(p);r=I(H,"OUTPUT",{class:!0,style:!0,for:!0});var ae=y(r);_=G(ae,v),ae.forEach(E),a=W(H),d=I(H,"INPUT",{name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),H.forEach(E),j=W(z),V=I(z,"SPAN",{class:!0});var ne=y(V);T=G(ne,t[3]),ne.forEach(E),z.forEach(E),D=W(q),L=I(q,"DIV",{class:!0});var re=y(L);h=I(re,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),re.forEach(E),f=W(q),b&&b.l(q),q.forEach(E),g.forEach(E),this.h()},h(){i(u,"class","absolute -bottom-6 left-0 text-xs font-normal"),i(r,"class","absolute -top-6 text-center text-xs font-normal"),oe(r,"left","calc("+t[6]+"% - ("+t[8]+"px))"),i(r,"for","range"),S(r,"hidden",!t[7]),ue(d,U),S(d,"svelte-1n71pu8",!0),i(p,"class","relative flex items-center"),i(V,"class","absolute -bottom-6 right-0 text-xs font-normal"),i(l,"class","relative w-auto grow"),i(h,"id",t[4]),i(h,"class","numeric-input svelte-1n71pu8"),i(h,"type","number"),i(h,"inputmode","numeric"),i(h,"min",t[2]),i(h,"max",t[3]),i(h,"step",X=t[11].step),S(h,"invalid",!t[7]),i(L,"class","flex shrink"),i(e,"class","range-input-container svelte-1n71pu8"),i(s,"class",O="w-full px-1 py-4 "+t[11].class+" svelte-1n71pu8")},m(o,g){M(o,s,g),m(s,e),m(e,l),m(l,u),m(u,N),m(l,c),m(l,p),m(p,r),m(r,_),t[13](r),m(p,a),m(p,d),d.autofocus&&d.focus(),J(d,t[0]),m(l,j),m(l,V),m(V,T),m(e,D),m(e,L),m(L,h),J(h,t[0]),m(e,f),b&&b.m(e,null),k||(n=[C(window,"resize",t[10]),C(d,"change",t[14]),C(d,"input",t[14]),C(d,"input",t[9]),C(h,"input",t[15]),C(h,"input",t[9])],k=!0)},p(o,[g]){g&4&&Y(N,o[2]),g&1&&v!==(v=(o[0]??"")+"")&&Y(_,v),g&320&&oe(r,"left","calc("+o[6]+"% - ("+o[8]+"px))"),g&128&&S(r,"hidden",!o[7]),ue(d,U=ke(w,[{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y-2 border-primary"},g&4&&{min:o[2]},g&8&&{max:o[3]},g&2048&&A!==(A=o[11].step)&&{step:A},g&4096&&de(o[12],"class")])),g&1&&J(d,o[0]),S(d,"svelte-1n71pu8",!0),g&8&&Y(T,o[3]),g&16&&i(h,"id",o[4]),g&4&&i(h,"min",o[2]),g&8&&i(h,"max",o[3]),g&2048&&X!==(X=o[11].step)&&i(h,"step",X),g&1&&Q(h.value)!==o[0]&&J(h,o[0]),g&128&&S(h,"invalid",!o[7]),o[1]?b?b.p(o,g):(b=ce(o),b.c(),b.m(e,null)):b&&(b.d(1),b=null),g&2048&&O!==(O="w-full px-1 py-4 "+o[11].class+" svelte-1n71pu8")&&i(s,"class",O)},i:x,o:x,d(o){o&&E(s),t[13](null),b&&b.d(),k=!1,be(n)}}}function Ue(t,s,e){let l,u;const N=["label","min","max","id","value"];let c=ie(s,N),{label:p=void 0}=s,{min:r=void 0}=s,{max:v=void 0}=s,{id:_=void 0}=s,{value:a=Math.round((r+v)/2)}=s,d=!0,A;const j=f=>{if(Number.isNaN(f.currentTarget.valueAsNumber)){e(0,a=r);return}e(7,d=f.currentTarget.valueAsNumber>=r&&f.currentTarget.valueAsNumber<=v)},V=({value:f,min:O,max:k})=>(f-O)*100/(k-O),T=({outputElement:f,outputXPos:O})=>{var k;const n=(k=f==null?void 0:f.clientWidth)!==null&&k!==void 0?k:15;return Math.floor(O*n/100)},D=()=>{e(6,l=V({value:a,min:r,max:v})),e(8,u=T({outputElement:A,outputXPos:l}))};function L(f){ve[f?"unshift":"push"](()=>{A=f,e(5,A)})}function h(){a=Q(this.value),e(0,a)}function X(){a=Q(this.value),e(0,a)}return t.$$set=f=>{e(11,s=Z(Z({},s),fe(f))),e(12,c=ie(s,N)),"label"in f&&e(1,p=f.label),"min"in f&&e(2,r=f.min),"max"in f&&e(3,v=f.max),"id"in f&&e(4,_=f.id),"value"in f&&e(0,a=f.value)},t.$$.update=()=>{t.$$.dirty&13&&e(6,l=V({value:a,min:r,max:v})),t.$$.dirty&109&&(a?(e(6,l=V({value:a,min:r,max:v})),e(8,u=T({outputElement:A,outputXPos:l}))):(e(6,l=0),e(8,u=0))),t.$$.dirty&96&&e(8,u=T({outputElement:A,outputXPos:l}))},s=fe(s),[a,p,r,v,_,A,l,d,u,j,D,s,c,L,h,X]}class Le extends me{constructor(s){super(),he(this,s,Ue,Oe,ge,{label:1,min:2,max:3,id:4,value:0})}}const Se=t=>({}),pe=t=>({});function je(t){let s,e,l,u,N,c,p,r,v,_,a,d,A,j,V,T,D,L,h;function X(n){t[5](n)}let f={id:"range-input-event-history",min:1,max:t[0].length};t[1]!==void 0&&(f.value=t[1]),l=new Le({props:f}),ve.push(()=>Ne(l,"value",X));const O=t[4].decode,k=Pe(O,t,t[3],pe);return T=new ye({props:{content:t[0][t[1]-1],"data-testid":"event-history-json"}}),{c(){s=P("div"),e=P("div"),$(l.$$.fragment),N=R(),c=P("div"),p=P("button"),r=P("span"),_=R(),a=P("button"),d=P("span"),j=R(),k&&k.c(),V=R(),$(T.$$.fragment),this.h()},l(n){s=I(n,"DIV",{class:!0});var w=y(s);e=I(w,"DIV",{class:!0});var U=y(e);ee(l.$$.fragment,U),N=W(U),c=I(U,"DIV",{class:!0});var b=y(c);p=I(b,"BUTTON",{class:!0,"aria-label":!0});var o=y(p);r=I(o,"SPAN",{class:!0}),y(r).forEach(E),o.forEach(E),_=W(b),a=I(b,"BUTTON",{class:!0,"aria-label":!0});var g=y(a);d=I(g,"SPAN",{class:!0}),y(d).forEach(E),g.forEach(E),b.forEach(E),U.forEach(E),j=W(w),k&&k.l(w),w.forEach(E),V=W(n),ee(T.$$.fragment,n),this.h()},h(){i(r,"class","arrow arrow-left svelte-1780ds3"),S(r,"arrow-left-disabled",t[1]===1),i(p,"class","caret svelte-1780ds3"),p.disabled=v=t[1]===1,i(p,"aria-label","previous"),i(d,"class","arrow arrow-right svelte-1780ds3"),S(d,"arrow-right-disabled",t[1]===t[0].length),i(a,"class","caret svelte-1780ds3"),a.disabled=A=t[1]===t[0].length,i(a,"aria-label","next"),i(c,"class","flex items-center justify-center gap-3"),i(e,"class","flex w-full gap-4"),i(s,"class","flex gap-4 max-sm:flex-col")},m(n,w){M(n,s,w),m(s,e),te(l,e,null),m(e,N),m(e,c),m(c,p),m(p,r),m(c,_),m(c,a),m(a,d),m(s,j),k&&k.m(s,null),M(n,V,w),te(T,n,w),D=!0,L||(h=[C(p,"click",t[6]),C(a,"click",t[7])],L=!0)},p(n,w){const U={};w&1&&(U.max=n[0].length),!u&&w&2&&(u=!0,U.value=n[1],Ie(()=>u=!1)),l.$set(U),(!D||w&2)&&S(r,"arrow-left-disabled",n[1]===1),(!D||w&2&&v!==(v=n[1]===1))&&(p.disabled=v),(!D||w&3)&&S(d,"arrow-right-disabled",n[1]===n[0].length),(!D||w&3&&A!==(A=n[1]===n[0].length))&&(a.disabled=A),k&&k.p&&(!D||w&8)&&Te(k,O,n,n[3],D?De(O,n[3],w,Se):Ae(n[3]),pe);const b={};w&3&&(b.content=n[0][n[1]-1]),T.$set(b)},i(n){D||(K(l.$$.fragment,n),K(k,n),K(T.$$.fragment,n),D=!0)},o(n){B(l.$$.fragment,n),B(k,n),B(T.$$.fragment,n),D=!1},d(n){n&&E(s),se(l),k&&k.d(n),n&&E(V),se(T,n),L=!1,be(h)}}}function Ce(t){let s,e;return s=new Ve({}),{c(){$(s.$$.fragment)},l(l){ee(s.$$.fragment,l)},m(l,u){te(s,l,u),e=!0},p:x,i(l){e||(K(s.$$.fragment,l),e=!0)},o(l){B(s.$$.fragment,l),e=!1},d(l){se(s,l)}}}function Re(t){let s,e,l,u,N,c;const p=[Ce,je],r=[];function v(_,a){return _[0].length?1:0}return s=v(t),e=r[s]=p[s](t),{c(){e.c(),l=_e()},l(_){e.l(_),l=_e()},m(_,a){r[s].m(_,a),M(_,l,a),u=!0,N||(c=C(window,"keydown",t[2]),N=!0)},p(_,[a]){let d=s;s=v(_),s===d?r[s].p(_,a):(we(),B(r[d],1,1,()=>{r[d]=null}),Ee(),e=r[s],e?e.p(_,a):(e=r[s]=p[s](_),e.c()),K(e,1),e.m(l.parentNode,l))},i(_){u||(K(e),u=!0)},o(_){B(e),u=!1},d(_){r[s].d(_),_&&E(l),N=!1,c()}}}function We(t,s,e){let{$$slots:l={},$$scope:u}=s,{events:N=[]}=s,c=1;function p(a){switch(a.code){case"ArrowRight":case"KeyL":a.preventDefault(),a.stopPropagation(),c<N.length&&e(1,c+=1);break;case"ArrowLeft":case"KeyH":a.preventDefault(),a.stopPropagation(),c>1&&e(1,c-=1);break}}function r(a){c=a,e(1,c)}const v=()=>{e(1,c-=1)},_=()=>{e(1,c+=1)};return t.$$set=a=>{"events"in a&&e(0,N=a.events),"$$scope"in a&&e(3,u=a.$$scope)},[N,c,p,u,l,r,v,_]}class Ke extends me{constructor(s){super(),he(this,s,We,Re,ge,{events:0})}}export{Ke as W};