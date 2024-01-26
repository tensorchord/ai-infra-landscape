(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ze=(e,t)=>e===t,Y=Symbol("solid-proxy"),Fe=Symbol("solid-track"),Z={equals:ze};let Ce=Te;const M=1,Q=2,Ee={owned:null,cleanups:null,context:null,owner:null};var h=null;let ie=null,Re=null,m=null,x=null,T=null,te=0;function K(e,t){const n=m,r=h,i=e.length===0,s=t===void 0?r:t,l=i?Ee:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=i?e:()=>e(()=>S(()=>ne(l)));h=l,m=null;try{return F(o,!0)}finally{m=n,h=r}}function P(e,t){t=t?Object.assign({},Z,t):Z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),Oe(n,i));return[$e.bind(n),r]}function j(e,t,n){const r=me(e,t,!1,M);G(r)}function Le(e,t,n){Ce=Ye;const r=me(e,t,!1,M);(!n||!n.render)&&(r.user=!0),T?T.push(r):G(r)}function k(e,t,n){n=n?Object.assign({},Z,n):Z;const r=me(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,G(r),$e.bind(r)}function Ue(e){return F(e,!1)}function S(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function Ge(e,t,n){const r=Array.isArray(e);let i,s=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let f=0;f<e.length;f++)o[f]=e[f]()}else o=e();if(s){s=!1;return}const a=S(()=>t(o,i,l));return i=o,a}}function Ve(e){Le(()=>S(e))}function He(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function We(e,t){const n=Symbol("context");return{id:n,Provider:Qe(n),defaultValue:e}}function Ke(e){return h&&h.context&&h.context[e.id]!==void 0?h.context[e.id]:e.defaultValue}function Pe(e){const t=k(e),n=k(()=>ue(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function $e(){if(this.sources&&this.state)if(this.state===M)G(this);else{const e=x;x=null,F(()=>ee(this),!1),x=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Oe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],l=ie&&ie.running;l&&ie.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?x.push(s):T.push(s),s.observers&&je(s)),l||(s.state=M)}if(x.length>1e6)throw x=[],new Error},!1)),t}function G(e){if(!e.fn)return;ne(e);const t=te;Xe(e,e.value,t)}function Xe(e,t,n){let r;const i=h,s=m;m=h=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=M,e.owned&&e.owned.forEach(ne),e.owned=null),e.updatedAt=n+1,Ne(l)}finally{m=s,h=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,r):e.value=r,e.updatedAt=n)}function me(e,t,n,r=M,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==Ee&&(h.owned?h.owned.push(s):h.owned=[s]),s}function J(e){if(e.state===0)return;if(e.state===Q)return ee(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<te);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===M)G(e);else if(e.state===Q){const r=x;x=null,F(()=>ee(e,t[0]),!1),x=r}}function F(e,t){if(x)return e();let n=!1;t||(x=[]),T?n=!0:T=[],te++;try{const r=e();return qe(n),r}catch(r){n||(T=null),x=null,Ne(r)}}function qe(e){if(x&&(Te(x),x=null),e)return;const t=T;T=null,t.length&&F(()=>Ce(t),!1)}function Te(e){for(let t=0;t<e.length;t++)J(e[t])}function Ye(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:J(r)}for(t=0;t<n;t++)J(e[t])}function ee(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const i=r.state;i===M?r!==t&&(!r.updatedAt||r.updatedAt<te)&&J(r):i===Q&&ee(r,t)}}}function je(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Q,n.pure?x.push(n):T.push(n),n.observers&&je(n))}}function ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),l=n.observerSlots.pop();r<i.length&&(s.sourceSlots[l]=r,i[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ze(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ne(e,t=h){throw Ze(e)}function ue(e){if(typeof e=="function"&&!e.length)return ue(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ue(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Qe(e,t){return function(r){let i;return j(()=>i=S(()=>(h.context={...h.context,[e]:r.value},Pe(()=>r.children))),void 0),i}}const Je=Symbol("fallback");function be(e){for(let t=0;t<e.length;t++)e[t]()}function et(e,t,n={}){let r=[],i=[],s=[],l=0,o=t.length>1?[]:null;return He(()=>be(s)),()=>{let a=e()||[],f,c;return a[Fe],S(()=>{let d=a.length,b,C,$,y,p,w,A,v,L;if(d===0)l!==0&&(be(s),s=[],r=[],i=[],l=0,o&&(o=[])),n.fallback&&(r=[Je],i[0]=K(H=>(s[0]=H,n.fallback())),l=1);else if(l===0){for(i=new Array(d),c=0;c<d;c++)r[c]=a[c],i[c]=K(u);l=d}else{for($=new Array(d),y=new Array(d),o&&(p=new Array(d)),w=0,A=Math.min(l,d);w<A&&r[w]===a[w];w++);for(A=l-1,v=d-1;A>=w&&v>=w&&r[A]===a[v];A--,v--)$[v]=i[A],y[v]=s[A],o&&(p[v]=o[A]);for(b=new Map,C=new Array(v+1),c=v;c>=w;c--)L=a[c],f=b.get(L),C[c]=f===void 0?-1:f,b.set(L,c);for(f=w;f<=A;f++)L=r[f],c=b.get(L),c!==void 0&&c!==-1?($[c]=i[f],y[c]=s[f],o&&(p[c]=o[f]),c=C[c],b.set(L,c)):s[f]();for(c=w;c<d;c++)c in $?(i[c]=$[c],s[c]=y[c],o&&(o[c]=p[c],o[c](c))):i[c]=K(u);i=i.slice(0,l=d),r=a.slice(0)}return i});function u(d){if(s[c]=d,o){const[b,C]=P(c);return o[c]=C,t(a[c],b)}return t(a[c])}}}function g(e,t){return S(()=>e(t||{}))}function W(){return!0}const de={get(e,t,n){return t===Y?n:e.get(t)},has(e,t){return t===Y?!0:e.has(t)},set:W,deleteProperty:W,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:W,deleteProperty:W}},ownKeys(e){return e.keys()}};function se(e){return(e=typeof e=="function"?e():e)?e:{}}function tt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function le(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&Y in o,e[l]=typeof o=="function"?(t=!0,k(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const a=se(e[o])[l];if(a!==void 0)return a}},has(l){for(let o=e.length-1;o>=0;o--)if(l in se(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(se(e[o])));return[...new Set(l)]}},de);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const a=Object.getOwnPropertyNames(o);for(let f=a.length-1;f>=0;f--){const c=a[f];if(c==="__proto__"||c==="constructor")continue;const u=Object.getOwnPropertyDescriptor(o,c);if(!r[c])r[c]=u.get?{enumerable:!0,configurable:!0,get:tt.bind(n[c]=[u.get.bind(o)])}:u.value!==void 0?u:void 0;else{const d=n[c];d&&(u.get?d.push(u.get.bind(o)):u.value!==void 0&&d.push(()=>u.value))}}}const i={},s=Object.keys(r);for(let l=s.length-1;l>=0;l--){const o=s[l],a=r[o];a&&a.get?Object.defineProperty(i,o,a):i[o]=a?a.value:void 0}return i}function _e(e,...t){if(Y in e){const i=new Set(t.length>1?t.flat():t[0]),s=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},de));return s.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},de)),s}const n={},r=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,i),l=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let o=!1,a=0;for(const f of t)f.includes(i)&&(o=!0,l?r[a][i]=s.value:Object.defineProperty(r[a],i,s)),++a;o||(l?n[i]=s.value:Object.defineProperty(n,i,s))}return[...r,n]}const Me=e=>`Stale read from <${e}>.`;function X(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(et(()=>e.each,e.children,t||void 0))}function q(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return k(()=>{const r=n();if(r){const i=e.children;return typeof i=="function"&&i.length>0?S(()=>i(t?r:()=>{if(!S(n))throw Me("Show");return e.when})):i}return e.fallback},void 0,void 0)}function nt(e){let t=!1;const n=(s,l)=>(t?s[1]===l[1]:!s[1]==!l[1])&&s[2]===l[2],r=Pe(()=>e.children),i=k(()=>{let s=r();Array.isArray(s)||(s=[s]);for(let l=0;l<s.length;l++){const o=s[l].when;if(o)return t=!!s[l].keyed,[l,o,s[l]]}return[-1]},void 0,{equals:n});return k(()=>{const[s,l,o]=i();if(s<0)return e.fallback;const a=o.children;return typeof a=="function"&&a.length>0?S(()=>a(t?l:()=>{if(S(i)[0]!==s)throw Me("Match");return o.when})):a},void 0,void 0)}function oe(e){return e}const rt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],it=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...rt]),st=new Set(["innerHTML","textContent","innerText","children"]),lt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ot=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ct(e,t){const n=ot[e];return typeof n=="object"?n[t]?n.$:void 0:n}const at=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ft=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ut={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function dt(e,t,n){let r=n.length,i=t.length,s=r,l=0,o=0,a=t[i-1].nextSibling,f=null;for(;l<i||o<s;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===l){const c=s<r?o?n[o-1].nextSibling:n[s-o]:a;for(;o<s;)e.insertBefore(n[o++],c)}else if(s===o)for(;l<i;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[o]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--s],c),t[i]=n[s]}else{if(!f){f=new Map;let u=o;for(;u<s;)f.set(n[u],u++)}const c=f.get(t[l]);if(c!=null)if(o<c&&c<s){let u=l,d=1,b;for(;++u<i&&u<s&&!((b=f.get(t[u]))==null||b!==c+d);)d++;if(d>c-o){const C=t[l];for(;o<c;)e.insertBefore(n[o++],C)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const pe="_$DX_DELEGATE";function gt(e,t,n,r={}){let i;return K(s=>{i=s,t===document?e():V(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function R(e,t,n){let r;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},s=t?()=>S(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return s.cloneNode=s,s}function ht(e,t=window.document){const n=t[pe]||(t[pe]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,At))}}function _(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function mt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function re(e,t){t==null?e.removeAttribute("class"):e.className=t}function yt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=s=>i.call(e,n[1],s))}else e.addEventListener(t,n)}function wt(e,t,n={}){const r=Object.keys(t||{}),i=Object.keys(n);let s,l;for(s=0,l=i.length;s<l;s++){const o=i[s];!o||o==="undefined"||t[o]||(xe(e,o,!1),delete n[o])}for(s=0,l=r.length;s<l;s++){const o=r[s],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(xe(e,o,!0),n[o]=a)}return n}function bt(e,t,n){if(!t)return n?_(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let i,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)i=t[s],i!==n[s]&&(r.setProperty(s,i),n[s]=i);return n}function Be(e,t={},n,r){const i={};return r||j(()=>i.children=z(e,t.children,i.children)),j(()=>t.ref&&t.ref(e)),j(()=>pt(e,t,n,!0,i,!0)),i}function V(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return z(e,t,r,n);j(i=>z(e,t(),i,n),r)}function pt(e,t,n,r,i={},s=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;i[l]=Ae(e,l,null,i[l],n,s)}for(const l in t){if(l==="children"){r||z(e,t.children);continue}const o=t[l];i[l]=Ae(e,l,o,i[l],n,s)}}function xt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function xe(e,t,n){const r=t.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)e.classList.toggle(r[i],n)}function Ae(e,t,n,r,i,s){let l,o,a,f,c;if(t==="style")return bt(e,n,r);if(t==="classList")return wt(e,n,r);if(n===r&&(t!=="value"||t!=="checked"))return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),d=at.has(u);if(!d&&r){const b=Array.isArray(r)?r[0]:r;e.removeEventListener(u,b)}(d||n)&&(yt(e,u,n,d),d&&ht([u]))}else if(t.slice(0,5)==="attr:")_(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=st.has(t))||!i&&((f=ct(t,e.tagName))||(o=it.has(t)))||(l=e.nodeName.includes("-")))c&&(t=t.slice(5),o=!0),t==="class"||t==="className"?re(e,n):l&&!o&&!a?e[xt(t)]=n:e[f||t]=n;else{const u=i&&t.indexOf(":")>-1&&ut[t.split(":")[0]];u?mt(e,u,t,n):_(e,lt[t]||t,n)}return n}function At(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function z(e,t,n,r,i){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=D(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=D(e,n,r);else{if(s==="function")return j(()=>{let o=t();for(;typeof o=="function";)o=o();n=z(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(ge(o,t,n,i))return j(()=>n=z(e,o,n,r,!0)),()=>n;if(o.length===0){if(n=D(e,n,r),l)return n}else a?n.length===0?Se(e,o,r):dt(e,n,o):(n&&D(e),Se(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=D(e,n,r,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ge(e,t,n,r){let i=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],a=n&&n[s],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=ge(e,o,a)||i;else if(f==="function")if(r){for(;typeof o=="function";)o=o();i=ge(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||i}else e.push(o),i=!0;else{const c=String(o);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return i}function Se(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function D(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const a=o.parentNode===e;!s&&!l?a?e.replaceChild(i,o):e.insertBefore(i,n):a&&o.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const St="http://www.w3.org/2000/svg";function vt(e,t=!1){return t?document.createElementNS(St,e):document.createElement(e)}function kt(e){const[t,n]=_e(e,["component"]),r=k(()=>t.component);return k(()=>{const i=r();switch(typeof i){case"function":return S(()=>i(n));case"string":const s=ft.has(i),l=vt(i,s);return Be(l,n,s),l}})}let Ct={data:""},Et=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ct,Lt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Pt=/\/\*[^]*?\*\/|  +/g,ve=/\n+/g,I=(e,t)=>{let n="",r="",i="";for(let s in e){let l=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+l+";":r+=s[1]=="f"?I(l,s):s+"{"+I(l,s[1]=="k"?"":t)+"}":typeof l=="object"?r+=I(l,t?t.replace(/([^,])+/g,o=>s.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,o):o?o+" "+a:a)):s):l!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=I.p?I.p(s,l):s+":"+l+";")}return n+(t&&i?t+"{"+i+"}":i)+r},O={},Ie=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Ie(e[n]);return t}return e},$t=(e,t,n,r,i)=>{let s=Ie(e),l=O[s]||(O[s]=(a=>{let f=0,c=11;for(;f<a.length;)c=101*c+a.charCodeAt(f++)>>>0;return"go"+c})(s));if(!O[l]){let a=s!==e?e:(f=>{let c,u,d=[{}];for(;c=Lt.exec(f.replace(Pt,""));)c[4]?d.shift():c[3]?(u=c[3].replace(ve," ").trim(),d.unshift(d[0][u]=d[0][u]||{})):d[0][c[1]]=c[2].replace(ve," ").trim();return d[0]})(e);O[l]=I(i?{["@keyframes "+l]:a}:a,n?"":"."+l)}let o=n&&O.g?O.g:null;return n&&(O.g=O[l]),((a,f,c,u)=>{u?f.data=f.data.replace(u,a):f.data.indexOf(a)===-1&&(f.data=c?a+f.data:f.data+a)})(O[l],t,r,o),l},Ot=(e,t,n)=>e.reduce((r,i,s)=>{let l=t[s];if(l&&l.call){let o=l(n),a=o&&o.props&&o.props.className||/^go/.test(o)&&o;l=a?"."+a:o&&typeof o=="object"?o.props?"":I(o,""):o===!1?"":o}return r+i+(l??"")},"");function N(e){let t=this||{},n=e.call?e(t.p):e;return $t(n.unshift?n.raw?Ot(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Et(t.target),t.g,t.o,t.k)}N.bind({g:1});N.bind({k:1});const Tt=We();function jt(e){let t=this||{};return(...n)=>{const r=i=>{const s=Ke(Tt),l=le(i,{theme:s}),o=le(l,{get class(){const b=l.class,C="class"in l&&/^go[0-9]+/.test(b);let $=N.apply({target:t.target,o:C,p:l,g:t.g},n);return[b,$].filter(Boolean).join(" ")}}),[a,f]=_e(o,["as","theme"]),c=f,u=a.as||e;let d;return typeof u=="function"?d=u(c):t.g==1?(d=document.createElement(u),Be(d,c)):d=kt(le({component:u},c)),d};return r.class=i=>S(()=>N.apply({target:t.target,p:i,g:t.g},n)),r}}const B=new Proxy(jt,{get(e,t){return e(t)}});var Nt=R('<a target=_blank rel="noopener noreferrer"tabindex=-1>');const _t=N`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: inherit;
  }
`,De=e=>(()=>{var t=Nt();return V(t,()=>e.children),j(n=>{var r=e.title,i=`${_t} ${e.class}`,s=e.href,l=e.label||"Open external link";return r!==n.e&&_(t,"title",n.e=r),i!==n.t&&re(t,n.t=i),s!==n.a&&_(t,"href",n.a=s),l!==n.o&&_(t,"aria-label",n.o=l),n},{e:void 0,t:void 0,a:void 0,o:void 0}),t})();var Mt=R('<div class="d-flex justify-content-center">');const Bt=B("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background-color: transparent;
  z-index: 100;
`,It=B("div")`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Dt=B("div")`
  height: 50px;
  width: 50px;
  margin-left: -25px;
  margin-top: -25px;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: '';
    border: 2px solid var(--color2);
    border: ${e=>e.bgColor==="transparent"?"2px solid rgba(0,0,0,0.25)":`2px solid ${e.bgColor}`};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
    right: 0px;
  }

  &::before {
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
    -webkit-animation: spWaveBe 0.6s infinite linear;
    animation: spWaveBe 0.6s infinite linear;
  }

  &::after {
    -webkit-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0;
    -webkit-animation: spWaveAf 0.6s infinite linear;
    animation: spWaveAf 0.6s infinite linear;
  }

  @-webkit-keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @-webkit-keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
  @keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
`,zt=e=>g(Bt,{get children(){return g(It,{get children(){var t=Mt();return V(t,g(Dt,{get bgColor(){return e.bgColor}})),t}})}});var Ft=R("<div role=alert><div>");const Rt=N`
  padding: 1.5rem;
  text-align: center;
  margin: 3rem auto;
  border: 1px solid #dee2e6;

  @media only screen and (min-width: 768px) {
    width: 75%;
    padding: 3rem;
  }
`,Ut=e=>(()=>{var t=Ft(),n=t.firstChild;return re(t,Rt),V(n,()=>e.children),t})(),Gt="key",Vt="headers",Ht="style",Wt="size",Kt="bg-color",Xt="fg-color";var U=(e=>(e.Basic="clean",e.BorderedBasic="bordered",e.ShadowedBasic="shadowed",e))(U||{}),E=(e=>(e.XSmall="xs",e.Small="sm",e.Medium="md",e.Large="lg",e.XLarge="xl",e))(E||{});const qt=!0,Yt="shadowed",Zt="md",Qt="#6995d8",Jt="#ffffff",he=()=>new URL(document.location.href).origin;var en=R("<img>"),tn=R('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M21.9 21.9l-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z">');const nn=e=>{const[t,n]=P(!1);return g(q,{get when(){return!t()},get fallback(){return tn()},get children(){var r=en();return r.addEventListener("error",()=>n(!0)),j(i=>{var s=`${e.name} logo`,l=e.class,o=`../${e.logo}`;return s!==i.e&&_(r,"alt",i.e=s),l!==i.t&&re(r,i.t=l),o!==i.a&&_(r,"src",i.a=o),i},{e:void 0,t:void 0,a:void 0}),r}})},rn={[E.XSmall]:"0.25rem",[E.Small]:"0.35rem",[E.Medium]:"0.5rem",[E.Large]:"0.75rem",[E.XLarge]:"1rem"},sn=B("div")`
  border: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
  box-shadow: ${e=>e.withShadow?"0 .125rem .25rem rgba(0,0,0,.075)":"none"};
  padding: ${e=>rn[e.size]};
`,ln=N`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,on=N`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,cn=N`
  margin: auto;
  font-size: calc(var(--card-size-height) / 1.5);
  width: 100%;
  max-height: 100%;
  height: auto;
`,ce=e=>g(sn,{get class(){return`${ln} ${e.class}`},get borderless(){return e.borderless},get withShadow(){return typeof e.withShadow<"u"&&e.withShadow},get size(){return e.size},get children(){return g(De,{get href(){return`${he()}?item=${e.item.id}`},class:on,get children(){return g(nn,{get name(){return e.item.name},class:cn,get logo(){return e.item.logo}})}})}}),ae={[E.XSmall]:{width:"55px",height:"50px",gap:"5px"},[E.Small]:{width:"77px",height:"70px",gap:"8px"},[E.Medium]:{width:"110px",height:"100px",gap:"10px"},[E.Large]:{width:"143px",height:"130px",gap:"12px"},[E.XLarge]:{width:"220px",height:"200px",gap:"15px"}},fe=B("div")`
  --card-size-width: ${e=>ae[e.size].width};
  --card-size-height: ${e=>ae[e.size].height};

  display: grid;
  grid-template-columns: repeat(auto-fit, var(--card-size-width));
  grid-auto-rows: var(--card-size-height);
  gap: ${e=>ae[e.size].gap};
`,ke=e=>g(nt,{get children(){return[g(oe,{get when(){return e.style===U.Basic},get children(){return g(fe,{get size(){return e.size},get children(){return g(X,{get each(){return e.items},children:t=>g(ce,{item:t,get size(){return e.size},borderless:!0})})}})}}),g(oe,{get when(){return e.style===U.BorderedBasic},get children(){return g(fe,{get size(){return e.size},get children(){return g(X,{get each(){return e.items},children:t=>g(ce,{item:t,get size(){return e.size},borderless:!1})})}})}}),g(oe,{get when(){return e.style===U.ShadowedBasic},get children(){return g(fe,{get size(){return e.size},get children(){return g(X,{get each(){return e.items},children:t=>g(ce,{item:t,get size(){return e.size},borderless:!1,withShadow:!0})})}})}})]}});var an=R("<div><h4>Invalid embed url</h4><p>Please visit: ");const fn=B("div")`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

  *,
  *::before,
  *::after {
    font-family: Clarity City, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Roboto, Ubuntu,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    box-sizing: border-box;
  }
`,un=B("div")`
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: ${e=>e.isBgTransparent?"0.5rem 0":"0.5rem 0.75rem"};
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dn=B("div")`
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: ${e=>e.isBgTransparent?"0.5rem 0":"0.5rem 0.75rem"};
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 1rem 0;
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,gn=()=>{const[e,t]=P(),[n,r]=P(),[i,s]=P(qt),[l,o]=P(Yt),[a,f]=P(!1),[c,u]=P(Qt),[d,b]=P(Jt),[C,$]=P(Zt);return Ve(()=>{const y=new URLSearchParams(window.location.search),p=y.get(Gt),w=y.get(Vt),A=y.get(Ht),v=y.get(Wt),L=y.get(Kt),H=y.get(Xt);Ue(()=>{if(p!==null){let ye=!0,we=!0;s(w==="true"),A!==null&&(Object.values(U).includes(A)?o(A):we=!1),v!==null&&(Object.values(E).includes(v)?$(v):ye=!1),L!==null&&(u(L),f(L==="transparent")),H!==null&&b(H),ye&&we?t(p):r(null)}else r(null)})}),Le(Ge(e,()=>{async function y(){try{fetch(`../data/embed_${e()}.json`).then(p=>{if(p.ok)return p.json();throw new Error("Something went wrong")}).then(p=>{r(p)}).catch(()=>{r(null)})}catch{r(null)}}typeof e()<"u"&&y()})),g(fn,{get style(){return{all:"initial",isolation:"isolate",overflow:"hidden","--bg-color":c(),"--fg-color":d()}},get children(){return g(q,{get when(){return n()!==null},get fallback(){return g(Ut,{get children(){var y=an(),p=y.firstChild,w=p.nextSibling;return w.firstChild,V(w,g(De,{get href(){return`${he()}/embed-setup`},get children(){return[k(()=>he()),"/embed-setup"]}}),null),y}})},get children(){return g(q,{get when(){return typeof n()<"u"},get fallback(){return g(zt,{get bgColor(){return c()}})},get children(){return g(q,{get when(){return i()},get fallback(){return g(ke,{get items(){return n().items},get style(){return l()},get size(){return C()}})},get children(){return[g(un,{get isBgTransparent(){return a()},get children(){return n().category.name}}),g(X,{get each(){return n().category.subcategories},children:y=>{const p=n().items.filter(w=>w.category===n().category.name&&w.subcategory===y.name);return[g(dn,{get isBgTransparent(){return a()},get children(){return[k(()=>y.name)," (",k(()=>p.length),")"]}}),g(ke,{items:p,get style(){return l()},get size(){return C()}})]}})]}})}})}})}})},hn=document.getElementById("landscape-embeddable-view");gt(()=>g(gn,{}),hn);
