import{i as B,a as T}from"./is-419a79e8.js";function c(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function f(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function E(t,e){u(2,arguments);var r=f(t),a=c(e);return isNaN(a)?new Date(NaN):(a&&r.setDate(r.getDate()+a),r)}function H(t,e){u(2,arguments);var r=f(t),a=c(e);if(isNaN(a))return new Date(NaN);if(!a)return r;var n=r.getDate(),s=new Date(r.getTime());s.setMonth(r.getMonth()+a+1,0);var i=s.getDate();return n>=i?s:(r.setFullYear(s.getFullYear(),s.getMonth(),n),r)}function G(t,e){if(u(2,arguments),!e||typeof e!="object")return new Date(NaN);var r=e.years?c(e.years):0,a=e.months?c(e.months):0,n=e.weeks?c(e.weeks):0,s=e.days?c(e.days):0,i=e.hours?c(e.hours):0,o=e.minutes?c(e.minutes):0,l=e.seconds?c(e.seconds):0,g=f(t),v=a||r?H(g,a+r*12):g,m=s||n?E(v,s+n*7):v,h=o+i*60,D=l+h*60,y=D*1e3,b=new Date(m.getTime()+y);return b}function j(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function C(t){u(1,arguments);var e=f(t);return e.setHours(0,0,0,0),e}var Q=864e5;function X(t,e){u(2,arguments);var r=C(t),a=C(e),n=r.getTime()-j(r),s=a.getTime()-j(a);return Math.round((n-s)/Q)}function N(t,e){u(2,arguments);var r=f(t),a=f(e),n=r.getTime()-a.getTime();return n<0?-1:n>0?1:n}var I=6e4,Y=36e5;function ee(t){return u(1,arguments),t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function U(t){if(u(1,arguments),!ee(t)&&typeof t!="number")return!1;var e=f(t);return!isNaN(Number(e))}function te(t,e){u(2,arguments);var r=f(t),a=f(e),n=r.getFullYear()-a.getFullYear(),s=r.getMonth()-a.getMonth();return n*12+s}function re(t,e){u(2,arguments);var r=f(t),a=f(e);return r.getFullYear()-a.getFullYear()}function x(t,e){var r=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return r<0?-1:r>0?1:r}function ae(t,e){u(2,arguments);var r=f(t),a=f(e),n=x(r,a),s=Math.abs(X(r,a));r.setDate(r.getDate()-n*s);var i=Number(x(r,a)===-n),o=n*(s-i);return o===0?0:o}function O(t,e){return u(2,arguments),f(t).getTime()-f(e).getTime()}var k={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},ne="trunc";function F(t){return t?k[t]:k[ne]}function se(t,e,r){u(2,arguments);var a=O(t,e)/Y;return F(r==null?void 0:r.roundingMethod)(a)}function ie(t,e,r){u(2,arguments);var a=O(t,e)/I;return F(r==null?void 0:r.roundingMethod)(a)}function oe(t){u(1,arguments);var e=f(t);return e.setHours(23,59,59,999),e}function ue(t){u(1,arguments);var e=f(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function fe(t){u(1,arguments);var e=f(t);return oe(e).getTime()===ue(e).getTime()}function ce(t,e){u(2,arguments);var r=f(t),a=f(e),n=N(r,a),s=Math.abs(te(r,a)),i;if(s<1)i=0;else{r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-n*s);var o=N(r,a)===-n;fe(f(t))&&s===1&&N(t,a)===1&&(o=!1),i=n*(s-Number(o))}return i===0?0:i}function ve(t,e,r){u(2,arguments);var a=O(t,e)/1e3;return F(r==null?void 0:r.roundingMethod)(a)}function le(t,e){u(2,arguments);var r=f(t),a=f(e),n=N(r,a),s=Math.abs(re(r,a));r.setFullYear(1584),a.setFullYear(1584);var i=N(r,a)===-n,o=n*(s-Number(i));return o===0?0:o}function d(t,e){for(var r=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return r+a}function W(t,e){u(1,arguments);var r=f(t);if(isNaN(r.getTime()))throw new RangeError("Invalid time value");var a=e!=null&&e.format?String(e.format):"extended",n=e!=null&&e.representation?String(e.representation):"complete";if(a!=="extended"&&a!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(n!=="date"&&n!=="time"&&n!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var s="",i="",o=a==="extended"?"-":"",l=a==="extended"?":":"";if(n!=="time"){var g=d(r.getDate(),2),v=d(r.getMonth()+1,2),m=d(r.getFullYear(),4);s="".concat(m).concat(o).concat(v).concat(o).concat(g)}if(n!=="date"){var h=r.getTimezoneOffset();if(h!==0){var D=Math.abs(h),y=d(Math.floor(D/60),2),b=d(D%60,2),K=h<0?"+":"-";i="".concat(K).concat(y,":").concat(b)}else i="Z";var _=d(r.getHours(),2),P=d(r.getMinutes(),2),J=d(r.getSeconds(),2),V=s===""?"":"T",q=[_,P,J].join(l);s="".concat(s).concat(V).concat(q).concat(i)}return s}function ge(t,e){u(2,arguments);var r=c(e);return E(t,-r)}function me(t,e){u(2,arguments);var r=c(e);return H(t,-r)}function M(t,e){if(u(2,arguments),!e||typeof e!="object")return new Date(NaN);var r=e.years?c(e.years):0,a=e.months?c(e.months):0,n=e.weeks?c(e.weeks):0,s=e.days?c(e.days):0,i=e.hours?c(e.hours):0,o=e.minutes?c(e.minutes):0,l=e.seconds?c(e.seconds):0,g=me(t,a+r*12),v=ge(g,s+n*7),m=o+i*60,h=l+m*60,D=h*1e3,y=new Date(v.getTime()-D);return y}function z(t){var e=t.start,r=t.end;u(1,arguments);var a=f(e),n=f(r);if(!U(a))throw new RangeError("Start Date is invalid");if(!U(n))throw new RangeError("End Date is invalid");var s={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},i=N(a,n);s.years=Math.abs(le(a,n));var o=M(a,{years:i*s.years});s.months=Math.abs(ce(o,n));var l=M(o,{months:i*s.months});s.days=Math.abs(ae(l,n));var g=M(l,{days:i*s.days});s.hours=Math.abs(se(g,n));var v=M(g,{hours:i*s.hours});s.minutes=Math.abs(ie(v,n));var m=M(v,{minutes:i*s.minutes});return s.seconds=Math.abs(ve(m,n)),s}function R(t,e){u(1,arguments);var r=e||{},a=r.additionalDigits==null?2:c(r.additionalDigits);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var n=Me(t),s;if(n.date){var i=Ne(n.date,a);s=ye(i.restDateString,i.year)}if(!s||isNaN(s.getTime()))return new Date(NaN);var o=s.getTime(),l=0,g;if(n.time&&(l=we(n.time),isNaN(l)))return new Date(NaN);if(n.timezone){if(g=pe(n.timezone),isNaN(g))return new Date(NaN)}else{var v=new Date(o+l),m=new Date(0);return m.setFullYear(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate()),m.setHours(v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds()),m}return new Date(o+l+g)}var p={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},de=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,he=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,De=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Me(t){var e={},r=t.split(p.dateTimeDelimiter),a;if(r.length>2)return e;if(/:/.test(r[0])?a=r[0]:(e.date=r[0],a=r[1],p.timeZoneDelimiter.test(e.date)&&(e.date=t.split(p.timeZoneDelimiter)[0],a=t.substr(e.date.length,t.length))),a){var n=p.timezone.exec(a);n?(e.time=a.replace(n[1],""),e.timezone=n[1]):e.time=a}return e}function Ne(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(r);if(!a)return{year:NaN,restDateString:""};var n=a[1]?parseInt(a[1]):null,s=a[2]?parseInt(a[2]):null;return{year:s===null?n:s*100,restDateString:t.slice((a[1]||a[2]).length)}}function ye(t,e){if(e===null)return new Date(NaN);var r=t.match(de);if(!r)return new Date(NaN);var a=!!r[4],n=w(r[1]),s=w(r[2])-1,i=w(r[3]),o=w(r[4]),l=w(r[5])-1;if(a)return Ye(e,o,l)?Te(e,o,l):new Date(NaN);var g=new Date(0);return!Se(e,s,i)||!Ie(e,n)?new Date(NaN):(g.setUTCFullYear(e,s,Math.max(n,i)),g)}function w(t){return t?parseInt(t):1}function we(t){var e=t.match(he);if(!e)return NaN;var r=S(e[1]),a=S(e[2]),n=S(e[3]);return Oe(r,a,n)?r*Y+a*I+n*1e3:NaN}function S(t){return t&&parseFloat(t.replace(",","."))||0}function pe(t){if(t==="Z")return 0;var e=t.match(De);if(!e)return 0;var r=e[1]==="+"?-1:1,a=parseInt(e[2]),n=e[3]&&parseInt(e[3])||0;return Fe(a,n)?r*(a*Y+n*I):NaN}function Te(t,e,r){var a=new Date(0);a.setUTCFullYear(t,0,4);var n=a.getUTCDay()||7,s=(e-1)*7+r+1-n;return a.setUTCDate(a.getUTCDate()+s),a}var be=[31,null,31,30,31,30,31,31,30,31,30,31];function L(t){return t%400===0||t%4===0&&t%100!==0}function Se(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(be[e]||(L(t)?29:28))}function Ie(t,e){return e>=1&&e<=(L(t)?366:365)}function Ye(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}function Oe(t,e,r){return t===24?e===0&&r===0:r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}function Fe(t,e){return e>=0&&e<=59}const Z=["years","months","weeks","days","hours","minutes","seconds"],Ue=["10 minutes","1 hour","3 hours","1 day","3 days","7 days","30 days","90 days"],A=new RegExp(`(\\d+)\\s(${Z.map(t=>t+"?").join("|")})`,"g"),$=t=>{if(!T(t))return!1;for(const e of Z)if(e===t)return!0;return!1},xe=t=>{if(!B(t))return!1;for(const e of Object.keys(t))if(!$(e))return!1;return!0},ke=t=>T(t)?!!t.match(A):!1,Re=(t=new Date)=>W(G(t,{hours:24})),je=t=>{const e={},r=t.match(A);for(const a of r){const[n,s]=a.split(" "),i=parseInt(n,10);let o=s;s.endsWith("s")||(o=s+"s"),$(o)&&(e[o]=i)}return e},Ee=t=>{const e=typeof t=="string"?je(t):t;return W(M(new Date,e))},He=(t,e=new Date)=>(T(t)&&(t=R(t)),T(e)&&(e=R(e)),z({start:t,end:e})),We=t=>{const e=parseInt(t)*1e3;if(!!t.endsWith("s")&&!isNaN(e))return z({start:0,end:e})};export{ce as a,xe as b,N as c,ve as d,ke as e,We as f,j as g,Ee as h,z as i,Re as j,Ue as k,He as l,Z as m,u as r,f as t};