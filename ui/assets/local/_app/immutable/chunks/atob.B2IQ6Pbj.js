import{B as e}from"./prod-browser.CoG0geaG.js";import{s as o,p as r}from"./parse-with-big-int.Dyr6jPtv.js";function i(t){return window.atob(t).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join("")}function c(t){return decodeURIComponent(i(t))}function a(t){try{return o(r(window.atob(t)))}catch{return t}}const f=(t,n=e)=>{if(!n)return t;try{return c(t)}catch{return a(t)}};export{f as a};