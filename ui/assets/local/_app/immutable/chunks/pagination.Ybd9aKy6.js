import{d as B,w as l}from"./entry.BgyOXCKr.js";import{C as o}from"./scheduler.Cp5f2qB_.js";const d=100,M=["100","250","500"],k="per-page",q="page",z=M[M.length-1],h=(t,n)=>Math.floor(t/n)+1,C=(t,n)=>n<=9?new Array(n).fill(0).map((f,u)=>u+1):t<5?[1,2,3,4,5,NaN,n-2,n-1,n]:t>=5&&t<=n-5?[1,2,NaN,t-1,t,t+1,NaN,n-1,n]:t>=n-5?[1,2,NaN,n-5,n-4,n-3,n-2,n-1,n]:[],S=(t,n,f)=>{if(isNaN(t)||t<=1)return 0;if(t>m(n,f)){const u=f.length-n;return u>0?u:0}return Math.floor(n*(t-1))},G=(t,n,f)=>{const u=h(t,n);return S(u,n,f)},R=(t,n)=>Math.min(t-1,n-1),m=(t,n)=>Math.ceil(n.length/t),p=(t,n)=>isNaN(t)||t<0?0:t<n.length?t:n.length-1,g=(t,n)=>t>=n.length||t<0,D=(t=[],n=d,f=0)=>{n=O(n);const u=G(x(f),n,t),c=l(n),i=l(u),s=l(void 0),_=r=>{c.set(x(r))},A=()=>{I(),i.update(r=>{const e=r+o(c);return g(e,t)?r:p(e,t)})},j=()=>{I(),i.update(r=>{const e=r-o(c);return p(e,t)})},v=r=>{const e=o(c),a=S(Number(r),e,t),N=t.slice(a,a+e).length;return o(s)>N-1&&s.set(N-1),i.set(a)},y=r=>{const e=h(Number(r),o(c));v(e)},b=r=>{for(let e=0;e<t.length;e++)if(r(t[e]))return e},F=r=>{const e=b(r);return h(e,o(c))},I=(r=void 0)=>{r===void 0&&s.set(r);const e=t.slice(o(i),o(i)+o(c)).length,a=R(e,o(c));r<=a&&s.set(r)},T=()=>{const r=t.slice(o(i),o(i)+o(c)).length,e=R(r,o(c));o(s)===void 0?s.set(0):o(s)<e&&s.set(o(s)+1)},E=()=>{const r=o(s)>=1?o(s)-1:0;s.set(r)},{subscribe:K}=B([i,c,s],([r,e,a])=>{const N=m(e,t),w=h(r,e);return{items:t.slice(r,r+e),initialItem:t[0],hasPrevious:!g(r-e,t),hasNext:!g(r+e,t),startingIndex:r,endingIndex:p(r+e-1,t),length:t.length,pageSize:e,currentPage:w,totalPages:N,activeRowIndex:a,pageShortcuts:C(w,N)}});return{subscribe:K,adjustPageSize:_,next:A,previous:j,jumpToPage:v,jumpToIndex:y,findIndex:b,findPage:F,nextRow:T,previousRow:E,setActiveRowIndex:I}},O=(t=d)=>{const n=x(t);return isNaN(n)||!n?d:n},x=(t=0)=>{const n=Number(t);return isNaN(n)||!n?0:Math.abs(n)};export{z as M,D as a,O as b,q as c,d,M as o,k as p};