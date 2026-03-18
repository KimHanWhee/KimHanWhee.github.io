var gg=Object.defineProperty;var yg=(u,s,r)=>s in u?gg(u,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[s]=r;var Ae=(u,s,r)=>yg(u,typeof s!="symbol"?s+"":s,r);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function r(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(f){if(f.ep)return;f.ep=!0;const d=r(f);fetch(f.href,d)}})();function pm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Pr={exports:{}},Ya={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function bg(){if(Uh)return Ya;Uh=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function r(c,f,d){var p=null;if(d!==void 0&&(p=""+d),f.key!==void 0&&(p=""+f.key),"key"in f){d={};for(var g in f)g!=="key"&&(d[g]=f[g])}else d=f;return f=d.ref,{$$typeof:u,type:c,key:p,ref:f!==void 0?f:null,props:d}}return Ya.Fragment=s,Ya.jsx=r,Ya.jsxs=r,Ya}var Bh;function vg(){return Bh||(Bh=1,Pr.exports=bg()),Pr.exports}var y=vg(),Ir={exports:{}},I={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function xg(){if(Lh)return I;Lh=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.iterator;function M(S){return S===null||typeof S!="object"?null:(S=D&&S[D]||S["@@iterator"],typeof S=="function"?S:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,L={};function X(S,U,Q){this.props=S,this.context=U,this.refs=L,this.updater=Q||G}X.prototype.isReactComponent={},X.prototype.setState=function(S,U){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,U,"setState")},X.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function K(){}K.prototype=X.prototype;function H(S,U,Q){this.props=S,this.context=U,this.refs=L,this.updater=Q||G}var P=H.prototype=new K;P.constructor=H,B(P,X.prototype),P.isPureReactComponent=!0;var ee=Array.isArray;function se(){}var W={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function Xe(S,U,Q){var V=Q.ref;return{$$typeof:u,type:S,key:U,ref:V!==void 0?V:null,props:Q}}function vt(S,U){return Xe(S.type,U,S.props)}function Bt(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function et(S){var U={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Q){return U[Q]})}var qn=/\/+/g;function Yt(S,U){return typeof S=="object"&&S!==null&&S.key!=null?et(""+S.key):U.toString(36)}function Dt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(se,se):(S.status="pending",S.then(function(U){S.status==="pending"&&(S.status="fulfilled",S.value=U)},function(U){S.status==="pending"&&(S.status="rejected",S.reason=U)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function k(S,U,Q,V,te){var ae=typeof S;(ae==="undefined"||ae==="boolean")&&(S=null);var pe=!1;if(S===null)pe=!0;else switch(ae){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(S.$$typeof){case u:case s:pe=!0;break;case E:return pe=S._init,k(pe(S._payload),U,Q,V,te)}}if(pe)return te=te(S),pe=V===""?"."+Yt(S,0):V,ee(te)?(Q="",pe!=null&&(Q=pe.replace(qn,"$&/")+"/"),k(te,U,Q,"",function(Wl){return Wl})):te!=null&&(Bt(te)&&(te=vt(te,Q+(te.key==null||S&&S.key===te.key?"":(""+te.key).replace(qn,"$&/")+"/")+pe)),U.push(te)),1;pe=0;var Fe=V===""?".":V+":";if(ee(S))for(var we=0;we<S.length;we++)V=S[we],ae=Fe+Yt(V,we),pe+=k(V,U,Q,ae,te);else if(we=M(S),typeof we=="function")for(S=we.call(S),we=0;!(V=S.next()).done;)V=V.value,ae=Fe+Yt(V,we++),pe+=k(V,U,Q,ae,te);else if(ae==="object"){if(typeof S.then=="function")return k(Dt(S),U,Q,V,te);throw U=String(S),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return pe}function q(S,U,Q){if(S==null)return S;var V=[],te=0;return k(S,V,"","",function(ae){return U.call(Q,ae,te++)}),V}function F(S){if(S._status===-1){var U=S._result;U=U(),U.then(function(Q){(S._status===0||S._status===-1)&&(S._status=1,S._result=Q)},function(Q){(S._status===0||S._status===-1)&&(S._status=2,S._result=Q)}),S._status===-1&&(S._status=0,S._result=U)}if(S._status===1)return S._result.default;throw S._result}var ve=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Te={map:q,forEach:function(S,U,Q){q(S,function(){U.apply(this,arguments)},Q)},count:function(S){var U=0;return q(S,function(){U++}),U},toArray:function(S){return q(S,function(U){return U})||[]},only:function(S){if(!Bt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return I.Activity=A,I.Children=Te,I.Component=X,I.Fragment=r,I.Profiler=f,I.PureComponent=H,I.StrictMode=c,I.Suspense=b,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,I.__COMPILER_RUNTIME={__proto__:null,c:function(S){return W.H.useMemoCache(S)}},I.cache=function(S){return function(){return S.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(S,U,Q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var V=B({},S.props),te=S.key;if(U!=null)for(ae in U.key!==void 0&&(te=""+U.key),U)!ke.call(U,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&U.ref===void 0||(V[ae]=U[ae]);var ae=arguments.length-2;if(ae===1)V.children=Q;else if(1<ae){for(var pe=Array(ae),Fe=0;Fe<ae;Fe++)pe[Fe]=arguments[Fe+2];V.children=pe}return Xe(S.type,te,V)},I.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},I.createElement=function(S,U,Q){var V,te={},ae=null;if(U!=null)for(V in U.key!==void 0&&(ae=""+U.key),U)ke.call(U,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(te[V]=U[V]);var pe=arguments.length-2;if(pe===1)te.children=Q;else if(1<pe){for(var Fe=Array(pe),we=0;we<pe;we++)Fe[we]=arguments[we+2];te.children=Fe}if(S&&S.defaultProps)for(V in pe=S.defaultProps,pe)te[V]===void 0&&(te[V]=pe[V]);return Xe(S,ae,te)},I.createRef=function(){return{current:null}},I.forwardRef=function(S){return{$$typeof:g,render:S}},I.isValidElement=Bt,I.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:F}},I.memo=function(S,U){return{$$typeof:m,type:S,compare:U===void 0?null:U}},I.startTransition=function(S){var U=W.T,Q={};W.T=Q;try{var V=S(),te=W.S;te!==null&&te(Q,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(se,ve)}catch(ae){ve(ae)}finally{U!==null&&Q.types!==null&&(U.types=Q.types),W.T=U}},I.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},I.use=function(S){return W.H.use(S)},I.useActionState=function(S,U,Q){return W.H.useActionState(S,U,Q)},I.useCallback=function(S,U){return W.H.useCallback(S,U)},I.useContext=function(S){return W.H.useContext(S)},I.useDebugValue=function(){},I.useDeferredValue=function(S,U){return W.H.useDeferredValue(S,U)},I.useEffect=function(S,U){return W.H.useEffect(S,U)},I.useEffectEvent=function(S){return W.H.useEffectEvent(S)},I.useId=function(){return W.H.useId()},I.useImperativeHandle=function(S,U,Q){return W.H.useImperativeHandle(S,U,Q)},I.useInsertionEffect=function(S,U){return W.H.useInsertionEffect(S,U)},I.useLayoutEffect=function(S,U){return W.H.useLayoutEffect(S,U)},I.useMemo=function(S,U){return W.H.useMemo(S,U)},I.useOptimistic=function(S,U){return W.H.useOptimistic(S,U)},I.useReducer=function(S,U,Q){return W.H.useReducer(S,U,Q)},I.useRef=function(S){return W.H.useRef(S)},I.useState=function(S){return W.H.useState(S)},I.useSyncExternalStore=function(S,U,Q){return W.H.useSyncExternalStore(S,U,Q)},I.useTransition=function(){return W.H.useTransition()},I.version="19.2.3",I}var Gh;function gc(){return Gh||(Gh=1,Ir.exports=xg()),Ir.exports}var z=gc();const Sg=pm(z);var ec={exports:{}},Xa={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function Eg(){return qh||(qh=1,(function(u){function s(k,q){var F=k.length;k.push(q);e:for(;0<F;){var ve=F-1>>>1,Te=k[ve];if(0<f(Te,q))k[ve]=q,k[F]=Te,F=ve;else break e}}function r(k){return k.length===0?null:k[0]}function c(k){if(k.length===0)return null;var q=k[0],F=k.pop();if(F!==q){k[0]=F;e:for(var ve=0,Te=k.length,S=Te>>>1;ve<S;){var U=2*(ve+1)-1,Q=k[U],V=U+1,te=k[V];if(0>f(Q,F))V<Te&&0>f(te,Q)?(k[ve]=te,k[V]=F,ve=V):(k[ve]=Q,k[U]=F,ve=U);else if(V<Te&&0>f(te,F))k[ve]=te,k[V]=F,ve=V;else break e}}return q}function f(k,q){var F=k.sortIndex-q.sortIndex;return F!==0?F:k.id-q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;u.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();u.unstable_now=function(){return p.now()-g}}var b=[],m=[],E=1,A=null,D=3,M=!1,G=!1,B=!1,L=!1,X=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function P(k){for(var q=r(m);q!==null;){if(q.callback===null)c(m);else if(q.startTime<=k)c(m),q.sortIndex=q.expirationTime,s(b,q);else break;q=r(m)}}function ee(k){if(B=!1,P(k),!G)if(r(b)!==null)G=!0,se||(se=!0,et());else{var q=r(m);q!==null&&Dt(ee,q.startTime-k)}}var se=!1,W=-1,ke=5,Xe=-1;function vt(){return L?!0:!(u.unstable_now()-Xe<ke)}function Bt(){if(L=!1,se){var k=u.unstable_now();Xe=k;var q=!0;try{e:{G=!1,B&&(B=!1,K(W),W=-1),M=!0;var F=D;try{t:{for(P(k),A=r(b);A!==null&&!(A.expirationTime>k&&vt());){var ve=A.callback;if(typeof ve=="function"){A.callback=null,D=A.priorityLevel;var Te=ve(A.expirationTime<=k);if(k=u.unstable_now(),typeof Te=="function"){A.callback=Te,P(k),q=!0;break t}A===r(b)&&c(b),P(k)}else c(b);A=r(b)}if(A!==null)q=!0;else{var S=r(m);S!==null&&Dt(ee,S.startTime-k),q=!1}}break e}finally{A=null,D=F,M=!1}q=void 0}}finally{q?et():se=!1}}}var et;if(typeof H=="function")et=function(){H(Bt)};else if(typeof MessageChannel<"u"){var qn=new MessageChannel,Yt=qn.port2;qn.port1.onmessage=Bt,et=function(){Yt.postMessage(null)}}else et=function(){X(Bt,0)};function Dt(k,q){W=X(function(){k(u.unstable_now())},q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(k){k.callback=null},u.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<k?Math.floor(1e3/k):5},u.unstable_getCurrentPriorityLevel=function(){return D},u.unstable_next=function(k){switch(D){case 1:case 2:case 3:var q=3;break;default:q=D}var F=D;D=q;try{return k()}finally{D=F}},u.unstable_requestPaint=function(){L=!0},u.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var F=D;D=k;try{return q()}finally{D=F}},u.unstable_scheduleCallback=function(k,q,F){var ve=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ve+F:ve):F=ve,k){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=F+Te,k={id:E++,callback:q,priorityLevel:k,startTime:F,expirationTime:Te,sortIndex:-1},F>ve?(k.sortIndex=F,s(m,k),r(b)===null&&k===r(m)&&(B?(K(W),W=-1):B=!0,Dt(ee,F-ve))):(k.sortIndex=Te,s(b,k),G||M||(G=!0,se||(se=!0,et()))),k},u.unstable_shouldYield=vt,u.unstable_wrapCallback=function(k){var q=D;return function(){var F=D;D=q;try{return k.apply(this,arguments)}finally{D=F}}}})(nc)),nc}var Qh;function Ag(){return Qh||(Qh=1,tc.exports=Eg()),tc.exports}var lc={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function Tg(){if(Yh)return We;Yh=1;var u=gc();function s(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var c={d:{f:r,r:function(){throw Error(s(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(b,m,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:A==null?null:""+A,children:b,containerInfo:m,implementation:E}}var p=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,We.createPortal=function(b,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return d(b,m,null,E)},We.flushSync=function(b){var m=p.T,E=c.p;try{if(p.T=null,c.p=2,b)return b()}finally{p.T=m,c.p=E,c.d.f()}},We.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(b,m))},We.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},We.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var E=m.as,A=g(E,m.crossOrigin),D=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?c.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:A,integrity:D,fetchPriority:M}):E==="script"&&c.d.X(b,{crossOrigin:A,integrity:D,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},We.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=g(m.as,m.crossOrigin);c.d.M(b,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(b)},We.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,A=g(E,m.crossOrigin);c.d.L(b,E,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},We.preloadModule=function(b,m){if(typeof b=="string")if(m){var E=g(m.as,m.crossOrigin);c.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(b)},We.requestFormReset=function(b){c.d.r(b)},We.unstable_batchedUpdates=function(b,m){return b(m)},We.useFormState=function(b,m,E){return p.H.useFormState(b,m,E)},We.useFormStatus=function(){return p.H.useHostTransitionStatus()},We.version="19.2.3",We}var Xh;function _g(){if(Xh)return lc.exports;Xh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),lc.exports=Tg(),lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function Rg(){if(Vh)return Xa;Vh=1;var u=Ag(),s=gc(),r=_g();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return b(a),e;if(i===l)return b(a),t;i=i.sibling}throw Error(c(188))}if(n.return!==l.return)n=a,l=i;else{for(var o=!1,h=a.child;h;){if(h===n){o=!0,n=a,l=i;break}if(h===l){o=!0,l=a,n=i;break}h=h.sibling}if(!o){for(h=i.child;h;){if(h===n){o=!0,n=i,l=a;break}if(h===l){o=!0,l=i,n=a;break}h=h.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==l)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,D=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),H=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),Bt=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=Bt&&e[Bt]||e["@@iterator"],typeof e=="function"?e:null)}var qn=Symbol.for("react.client.reference");function Yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case X:return"Profiler";case L:return"StrictMode";case ee:return"Suspense";case se:return"SuspenseList";case Xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case H:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Yt(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return Yt(e(t))}catch{}}return null}var Dt=Array.isArray,k=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],Te=-1;function S(e){return{current:e}}function U(e){0>Te||(e.current=ve[Te],ve[Te]=null,Te--)}function Q(e,t){Te++,ve[Te]=e.current,e.current=t}var V=S(null),te=S(null),ae=S(null),pe=S(null);function Fe(e,t){switch(Q(ae,t),Q(te,e),Q(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?uh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=uh(t),e=sh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(V),Q(V,e)}function we(){U(V),U(te),U(ae)}function Wl(e){e.memoizedState!==null&&Q(pe,e);var t=V.current,n=sh(t,e.type);t!==n&&(Q(te,e),Q(V,n))}function ti(e){te.current===e&&(U(V),U(te)),pe.current===e&&(U(pe),La._currentValue=F)}var wu,wc;function Qn(e){if(wu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wu=t&&t[1]||"",wc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+e+wc}var ju=!1;function Hu(e,t){if(!e||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(N){var C=N}Reflect.construct(e,[],j)}else{try{j.call()}catch(N){C=N}e.call(j.prototype)}}else{try{throw Error()}catch(N){C=N}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(N){if(N&&C&&typeof N.stack=="string")return[N.stack,C.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],h=i[1];if(o&&h){var v=o.split(`
`),R=h.split(`
`);for(a=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;if(l===v.length||a===R.length)for(l=v.length-1,a=R.length-1;1<=l&&0<=a&&v[l]!==R[a];)a--;for(;1<=l&&0<=a;l--,a--)if(v[l]!==R[a]){if(l!==1||a!==1)do if(l--,a--,0>a||v[l]!==R[a]){var O=`
`+v[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qn(n):""}function Jm(e,t){switch(e.tag){case 26:case 27:case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return e.child!==t&&t!==null?Qn("Suspense Fallback"):Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 15:return Hu(e.type,!1);case 11:return Hu(e.type.render,!1);case 1:return Hu(e.type,!0);case 31:return Qn("Activity");default:return""}}function jc(e){try{var t="",n=null;do t+=Jm(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Uu=Object.prototype.hasOwnProperty,Bu=u.unstable_scheduleCallback,Lu=u.unstable_cancelCallback,Km=u.unstable_shouldYield,$m=u.unstable_requestPaint,rt=u.unstable_now,Wm=u.unstable_getCurrentPriorityLevel,Hc=u.unstable_ImmediatePriority,Uc=u.unstable_UserBlockingPriority,ni=u.unstable_NormalPriority,Fm=u.unstable_LowPriority,Bc=u.unstable_IdlePriority,Pm=u.log,Im=u.unstable_setDisableYieldValue,Fl=null,ct=null;function gn(e){if(typeof Pm=="function"&&Im(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Fl,e)}catch{}}var ot=Math.clz32?Math.clz32:np,ep=Math.log,tp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ep(e)/tp|0)|0}var li=256,ai=262144,ii=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~i,l!==0?a=Yn(l):(o&=h,o!==0?a=Yn(o):n||(n=h&~e,n!==0&&(a=Yn(n))))):(h=l&~i,h!==0?a=Yn(h):o!==0?a=Yn(o):n||(n=l&~e,n!==0&&(a=Yn(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lc(){var e=ii;return ii<<=1,(ii&62914560)===0&&(ii=4194304),e}function Gu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ap(e,t,n,l,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,v=e.expirationTimes,R=e.hiddenUpdates;for(n=o&~n;0<n;){var O=31-ot(n),j=1<<O;h[O]=0,v[O]=-1;var C=R[O];if(C!==null)for(R[O]=null,O=0;O<C.length;O++){var N=C[O];N!==null&&(N.lane&=-536870913)}n&=~j}l!==0&&Gc(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Gc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function qc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-ot(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Qc(e,t){var n=t&-t;return n=(n&42)!==0?1:qu(n),(n&(e.suspendedLanes|t))!==0?0:n}function qu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Mh(e.type))}function Xc(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var yn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+yn,tt="__reactProps$"+yn,cl="__reactContainer$"+yn,Yu="__reactEvents$"+yn,ip="__reactListeners$"+yn,up="__reactHandles$"+yn,Vc="__reactResources$"+yn,ea="__reactMarker$"+yn;function Xu(e){delete e[Ve],delete e[tt],delete e[Yu],delete e[ip],delete e[up]}function ol(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cl]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mh(e);e!==null;){if(n=e[Ve])return n;e=mh(e)}return t}e=n,n=e.parentNode}return null}function fl(e){if(e=e[Ve]||e[cl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ta(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function dl(e){var t=e[Vc];return t||(t=e[Vc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[ea]=!0}var Zc=new Set,Jc={};function Xn(e,t){hl(e,t),hl(e+"Capture",t)}function hl(e,t){for(Jc[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var sp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kc={},$c={};function rp(e){return Uu.call($c,e)?!0:Uu.call(Kc,e)?!1:sp.test(e)?$c[e]=!0:(Kc[e]=!0,!1)}function si(e,t,n){if(rp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ri(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cp(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vu(e){if(!e._valueTracker){var t=Wc(e)?"checked":"value";e._valueTracker=cp(e,t,""+e[t])}}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Wc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var op=/[\n"\\]/g;function St(e){return e.replace(op,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zu(e,t,n,l,a,i,o,h){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Ju(e,o,xt(t)):n!=null?Ju(e,o,xt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+xt(h):e.removeAttribute("name")}function Pc(e,t,n,l,a,i,o,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Vu(e);return}n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Vu(e)}function Ju(e,t,n){t==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ml(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ic(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function eo(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(c(92));if(Dt(l)){if(1<l.length)throw Error(c(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Vu(e)}function pl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function to(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||fp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function no(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&to(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&to(e,i,t[i])}function Ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return hp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vt(){}var $u=null;function Wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,yl=null;function lo(e){var t=fl(e);if(t&&(e=t.stateNode)){var n=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[tt]||null;if(!a)throw Error(c(90));Zu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Fc(l)}break e;case"textarea":Ic(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ml(e,!!n.multiple,t,!1)}}}var Fu=!1;function ao(e,t,n){if(Fu)return e(t,n);Fu=!0;try{var l=e(t);return l}finally{if(Fu=!1,(gl!==null||yl!==null)&&(Fi(),gl&&(t=gl,e=yl,yl=gl=null,lo(t),e)))for(t=0;t<e.length;t++)lo(e[t])}}function na(e,t){var n=e.stateNode;if(n===null)return null;var l=n[tt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(Zt)try{var la={};Object.defineProperty(la,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Pu=!1}var bn=null,Iu=null,fi=null;function io(){if(fi)return fi;var e,t=Iu,n=t.length,l,a="value"in bn?bn.value:bn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[i-l];l++);return fi=a.slice(e,1<l?1-l:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function uo(){return!1}function nt(e){function t(n,l,a,i,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hi:uo,this.isPropagationStopped=uo,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=nt(Vn),aa=A({},Vn,{view:0,detail:0}),mp=nt(aa),es,ts,ia,pi=A({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(es=e.screenX-ia.screenX,ts=e.screenY-ia.screenY):ts=es=0,ia=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),so=nt(pi),pp=A({},pi,{dataTransfer:0}),gp=nt(pp),yp=A({},aa,{relatedTarget:0}),ns=nt(yp),bp=A({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=nt(bp),xp=A({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sp=nt(xp),Ep=A({},Vn,{data:0}),ro=nt(Ep),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_p[e])?!!t[e]:!1}function ls(){return Rp}var Cp=A({},aa,{key:function(e){if(e.key){var t=Ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=nt(Cp),Np=A({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),co=nt(Np),Mp=A({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),Dp=nt(Mp),Op=A({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=nt(Op),wp=A({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=nt(wp),Hp=A({},Vn,{newState:0,oldState:0}),Up=nt(Hp),Bp=[9,13,27,32],as=Zt&&"CompositionEvent"in window,ua=null;Zt&&"documentMode"in document&&(ua=document.documentMode);var Lp=Zt&&"TextEvent"in window&&!ua,oo=Zt&&(!as||ua&&8<ua&&11>=ua),fo=" ",ho=!1;function mo(e,t){switch(e){case"keyup":return Bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function po(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bl=!1;function Gp(e,t){switch(e){case"compositionend":return po(t);case"keypress":return t.which!==32?null:(ho=!0,fo);case"textInput":return e=t.data,e===fo&&ho?null:e;default:return null}}function qp(e,t){if(bl)return e==="compositionend"||!as&&mo(e,t)?(e=io(),fi=Iu=bn=null,bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oo&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function yo(e,t,n,l){gl?yl?yl.push(l):yl=[l]:gl=l,t=au(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var sa=null,ra=null;function Yp(e){eh(e,0)}function gi(e){var t=ta(e);if(Fc(t))return e}function bo(e,t){if(e==="change")return t}var vo=!1;if(Zt){var is;if(Zt){var us="oninput"in document;if(!us){var xo=document.createElement("div");xo.setAttribute("oninput","return;"),us=typeof xo.oninput=="function"}is=us}else is=!1;vo=is&&(!document.documentMode||9<document.documentMode)}function So(){sa&&(sa.detachEvent("onpropertychange",Eo),ra=sa=null)}function Eo(e){if(e.propertyName==="value"&&gi(ra)){var t=[];yo(t,ra,e,Wu(e)),ao(Yp,t)}}function Xp(e,t,n){e==="focusin"?(So(),sa=t,ra=n,sa.attachEvent("onpropertychange",Eo)):e==="focusout"&&So()}function Vp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(ra)}function Zp(e,t){if(e==="click")return gi(t)}function Jp(e,t){if(e==="input"||e==="change")return gi(t)}function Kp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Kp;function ca(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Uu.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function Ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function To(e,t){var n=Ao(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ao(n)}}function _o(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_o(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ro(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ci(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $p=Zt&&"documentMode"in document&&11>=document.documentMode,vl=null,rs=null,oa=null,cs=!1;function Co(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cs||vl==null||vl!==ci(l)||(l=vl,"selectionStart"in l&&ss(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oa&&ca(oa,l)||(oa=l,l=au(rs,"onSelect"),0<l.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=vl)))}function Zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xl={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},os={},zo={};Zt&&(zo=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function Jn(e){if(os[e])return os[e];if(!xl[e])return e;var t=xl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zo)return os[e]=t[n];return e}var No=Jn("animationend"),Mo=Jn("animationiteration"),Do=Jn("animationstart"),Wp=Jn("transitionrun"),Fp=Jn("transitionstart"),Pp=Jn("transitioncancel"),Oo=Jn("transitionend"),ko=new Map,fs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fs.push("scrollEnd");function Ot(e,t){ko.set(e,t),Xn(t,[e])}var yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],Sl=0,ds=0;function bi(){for(var e=Sl,t=ds=Sl=0;t<e;){var n=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}i!==0&&wo(n,a,i)}}function vi(e,t,n,l){Et[Sl++]=e,Et[Sl++]=t,Et[Sl++]=n,Et[Sl++]=l,ds|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function hs(e,t,n,l){return vi(e,t,n,l),xi(e)}function Kn(e,t){return vi(e,null,null,t),xi(e)}function wo(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-ot(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function xi(e){if(50<Oa)throw Oa=0,Er=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var El={};function Ip(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,l){return new Ip(e,t,n,l)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function jo(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,l,a,i){var o=0;if(l=e,typeof e=="function")ms(e)&&(o=1);else if(typeof e=="string")o=ag(e,n,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Xe:return e=dt(31,n,t,a),e.elementType=Xe,e.lanes=i,e;case B:return $n(n.children,a,i,t);case L:o=8,a|=24;break;case X:return e=dt(12,n,t,a|2),e.elementType=X,e.lanes=i,e;case ee:return e=dt(13,n,t,a),e.elementType=ee,e.lanes=i,e;case se:return e=dt(19,n,t,a),e.elementType=se,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:o=10;break e;case K:o=9;break e;case P:o=11;break e;case W:o=14;break e;case ke:o=16,l=null;break e}o=29,n=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=dt(o,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function $n(e,t,n,l){return e=dt(7,e,l,t),e.lanes=n,e}function ps(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function Ho(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function gs(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Uo=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var n=Uo.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jc(t)},Uo.set(e,t),t)}return{value:e,source:t,stack:jc(t)}}var Al=[],Tl=0,Ei=null,fa=0,Tt=[],_t=0,vn=null,Lt=1,Gt="";function Kt(e,t){Al[Tl++]=fa,Al[Tl++]=Ei,Ei=e,fa=t}function Bo(e,t,n){Tt[_t++]=Lt,Tt[_t++]=Gt,Tt[_t++]=vn,vn=e;var l=Lt;e=Gt;var a=32-ot(l)-1;l&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(l&(1<<o)-1).toString(32),l>>=o,a-=o,Lt=1<<32-ot(t)+a|n<<a|l,Gt=i+e}else Lt=1<<i|n<<a|l,Gt=e}function ys(e){e.return!==null&&(Kt(e,1),Bo(e,1,0))}function bs(e){for(;e===Ei;)Ei=Al[--Tl],Al[Tl]=null,fa=Al[--Tl],Al[Tl]=null;for(;e===vn;)vn=Tt[--_t],Tt[_t]=null,Gt=Tt[--_t],Tt[_t]=null,Lt=Tt[--_t],Tt[_t]=null}function Lo(e,t){Tt[_t++]=Lt,Tt[_t++]=Gt,Tt[_t++]=vn,Lt=t.id,Gt=t.overflow,vn=e}var Ze=null,Re=null,oe=!1,xn=null,Rt=!1,vs=Error(c(519));function Sn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw da(At(t,e)),vs}function Go(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Ve]=e,t[tt]=l,n){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(n=0;n<wa.length;n++)ue(wa[n],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),Pc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),eo(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||ah(t.textContent,n)?(l.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),l.onScroll!=null&&ue("scroll",t),l.onScrollEnd!=null&&ue("scrollend",t),l.onClick!=null&&(t.onclick=Vt),t=!0):t=!1,t||Sn(e,!0)}function qo(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Ze=Ze.return}}function _l(e){if(e!==Ze)return!1;if(!oe)return qo(e),oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ur(e.type,e.memoizedProps)),n=!n),n&&Re&&Sn(e),qo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=hh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=hh(e)}else t===27?(t=Re,jn(e.type)?(e=Qr,Qr=null,Re=e):Re=t):Re=Ze?zt(e.stateNode.nextSibling):null;return!0}function Wn(){Re=Ze=null,oe=!1}function xs(){var e=xn;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),xn=null),e}function da(e){xn===null?xn=[e]:xn.push(e)}var Ss=S(null),Fn=null,$t=null;function En(e,t,n){Q(Ss,t._currentValue),t._currentValue=n}function Wt(e){e._currentValue=Ss.current,U(Ss)}function Es(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function As(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var o=a.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=a;for(var v=0;v<t.length;v++)if(h.context===t[v]){i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),Es(i.return,n,e),l||(o=null);break e}i=h.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(c(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Es(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Rl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var h=a.type;ft(a.pendingProps.value,o.value)||(e!==null?e.push(h):e=[h])}}else if(a===pe.current){if(o=a.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(La):e=[La])}a=a.return}e!==null&&As(t,e,n,l),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,$t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Qo(Fn,e)}function Ti(e,t){return Fn===null&&Pn(e),Qo(e,t)}function Qo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$t===null){if(e===null)throw Error(c(308));$t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $t=$t.next=t;return n}var e0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},t0=u.unstable_scheduleCallback,n0=u.unstable_NormalPriority,Ue={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ts(){return{controller:new e0,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&t0(n0,function(){e.controller.abort()})}var ma=null,_s=0,Cl=0,zl=null;function l0(e,t){if(ma===null){var n=ma=[];_s=0,Cl=zr(),zl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return _s++,t.then(Yo,Yo),t}function Yo(){if(--_s===0&&ma!==null){zl!==null&&(zl.status="fulfilled");var e=ma;ma=null,Cl=0,zl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function a0(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Xo=k.S;k.S=function(e,t){zd=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&l0(e,t),Xo!==null&&Xo(e,t)};var In=S(null);function Rs(){var e=In.current;return e!==null?e:_e.pooledCache}function _i(e,t){t===null?Q(In,In.current):Q(In,t.pool)}function Vo(){var e=Rs();return e===null?null:{parent:Ue._currentValue,pool:e}}var Nl=Error(c(460)),Cs=Error(c(474)),Ri=Error(c(542)),Ci={then:function(){}};function Zo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vt,Vt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$o(e),e;default:if(typeof t.status=="string")t.then(Vt,Vt);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$o(e),e}throw tl=t,Nl}}function el(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(tl=n,Nl):n}}var tl=null;function Ko(){if(tl===null)throw Error(c(459));var e=tl;return tl=null,e}function $o(e){if(e===Nl||e===Ri)throw Error(c(483))}var Ml=null,pa=0;function zi(e){var t=pa;return pa+=1,Ml===null&&(Ml=[]),Jo(Ml,e,t)}function ga(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ni(e,t){throw t.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wo(e){function t(T,x){if(e){var _=T.deletions;_===null?(T.deletions=[x],T.flags|=16):_.push(x)}}function n(T,x){if(!e)return null;for(;x!==null;)t(T,x),x=x.sibling;return null}function l(T){for(var x=new Map;T!==null;)T.key!==null?x.set(T.key,T):x.set(T.index,T),T=T.sibling;return x}function a(T,x){return T=Jt(T,x),T.index=0,T.sibling=null,T}function i(T,x,_){return T.index=_,e?(_=T.alternate,_!==null?(_=_.index,_<x?(T.flags|=67108866,x):_):(T.flags|=67108866,x)):(T.flags|=1048576,x)}function o(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function h(T,x,_,w){return x===null||x.tag!==6?(x=ps(_,T.mode,w),x.return=T,x):(x=a(x,_),x.return=T,x)}function v(T,x,_,w){var J=_.type;return J===B?O(T,x,_.props.children,w,_.key):x!==null&&(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ke&&el(J)===x.type)?(x=a(x,_.props),ga(x,_),x.return=T,x):(x=Si(_.type,_.key,_.props,null,T.mode,w),ga(x,_),x.return=T,x)}function R(T,x,_,w){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=gs(_,T.mode,w),x.return=T,x):(x=a(x,_.children||[]),x.return=T,x)}function O(T,x,_,w,J){return x===null||x.tag!==7?(x=$n(_,T.mode,w,J),x.return=T,x):(x=a(x,_),x.return=T,x)}function j(T,x,_){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=ps(""+x,T.mode,_),x.return=T,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case M:return _=Si(x.type,x.key,x.props,null,T.mode,_),ga(_,x),_.return=T,_;case G:return x=gs(x,T.mode,_),x.return=T,x;case ke:return x=el(x),j(T,x,_)}if(Dt(x)||et(x))return x=$n(x,T.mode,_,null),x.return=T,x;if(typeof x.then=="function")return j(T,zi(x),_);if(x.$$typeof===H)return j(T,Ti(T,x),_);Ni(T,x)}return null}function C(T,x,_,w){var J=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return J!==null?null:h(T,x,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case M:return _.key===J?v(T,x,_,w):null;case G:return _.key===J?R(T,x,_,w):null;case ke:return _=el(_),C(T,x,_,w)}if(Dt(_)||et(_))return J!==null?null:O(T,x,_,w,null);if(typeof _.then=="function")return C(T,x,zi(_),w);if(_.$$typeof===H)return C(T,x,Ti(T,_),w);Ni(T,_)}return null}function N(T,x,_,w,J){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return T=T.get(_)||null,h(x,T,""+w,J);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case M:return T=T.get(w.key===null?_:w.key)||null,v(x,T,w,J);case G:return T=T.get(w.key===null?_:w.key)||null,R(x,T,w,J);case ke:return w=el(w),N(T,x,_,w,J)}if(Dt(w)||et(w))return T=T.get(_)||null,O(x,T,w,J,null);if(typeof w.then=="function")return N(T,x,_,zi(w),J);if(w.$$typeof===H)return N(T,x,_,Ti(x,w),J);Ni(x,w)}return null}function Y(T,x,_,w){for(var J=null,fe=null,Z=x,le=x=0,ce=null;Z!==null&&le<_.length;le++){Z.index>le?(ce=Z,Z=null):ce=Z.sibling;var de=C(T,Z,_[le],w);if(de===null){Z===null&&(Z=ce);break}e&&Z&&de.alternate===null&&t(T,Z),x=i(de,x,le),fe===null?J=de:fe.sibling=de,fe=de,Z=ce}if(le===_.length)return n(T,Z),oe&&Kt(T,le),J;if(Z===null){for(;le<_.length;le++)Z=j(T,_[le],w),Z!==null&&(x=i(Z,x,le),fe===null?J=Z:fe.sibling=Z,fe=Z);return oe&&Kt(T,le),J}for(Z=l(Z);le<_.length;le++)ce=N(Z,T,le,_[le],w),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?le:ce.key),x=i(ce,x,le),fe===null?J=ce:fe.sibling=ce,fe=ce);return e&&Z.forEach(function(Gn){return t(T,Gn)}),oe&&Kt(T,le),J}function $(T,x,_,w){if(_==null)throw Error(c(151));for(var J=null,fe=null,Z=x,le=x=0,ce=null,de=_.next();Z!==null&&!de.done;le++,de=_.next()){Z.index>le?(ce=Z,Z=null):ce=Z.sibling;var Gn=C(T,Z,de.value,w);if(Gn===null){Z===null&&(Z=ce);break}e&&Z&&Gn.alternate===null&&t(T,Z),x=i(Gn,x,le),fe===null?J=Gn:fe.sibling=Gn,fe=Gn,Z=ce}if(de.done)return n(T,Z),oe&&Kt(T,le),J;if(Z===null){for(;!de.done;le++,de=_.next())de=j(T,de.value,w),de!==null&&(x=i(de,x,le),fe===null?J=de:fe.sibling=de,fe=de);return oe&&Kt(T,le),J}for(Z=l(Z);!de.done;le++,de=_.next())de=N(Z,T,le,de.value,w),de!==null&&(e&&de.alternate!==null&&Z.delete(de.key===null?le:de.key),x=i(de,x,le),fe===null?J=de:fe.sibling=de,fe=de);return e&&Z.forEach(function(pg){return t(T,pg)}),oe&&Kt(T,le),J}function Ee(T,x,_,w){if(typeof _=="object"&&_!==null&&_.type===B&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case M:e:{for(var J=_.key;x!==null;){if(x.key===J){if(J=_.type,J===B){if(x.tag===7){n(T,x.sibling),w=a(x,_.props.children),w.return=T,T=w;break e}}else if(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ke&&el(J)===x.type){n(T,x.sibling),w=a(x,_.props),ga(w,_),w.return=T,T=w;break e}n(T,x);break}else t(T,x);x=x.sibling}_.type===B?(w=$n(_.props.children,T.mode,w,_.key),w.return=T,T=w):(w=Si(_.type,_.key,_.props,null,T.mode,w),ga(w,_),w.return=T,T=w)}return o(T);case G:e:{for(J=_.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(T,x.sibling),w=a(x,_.children||[]),w.return=T,T=w;break e}else{n(T,x);break}else t(T,x);x=x.sibling}w=gs(_,T.mode,w),w.return=T,T=w}return o(T);case ke:return _=el(_),Ee(T,x,_,w)}if(Dt(_))return Y(T,x,_,w);if(et(_)){if(J=et(_),typeof J!="function")throw Error(c(150));return _=J.call(_),$(T,x,_,w)}if(typeof _.then=="function")return Ee(T,x,zi(_),w);if(_.$$typeof===H)return Ee(T,x,Ti(T,_),w);Ni(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,x!==null&&x.tag===6?(n(T,x.sibling),w=a(x,_),w.return=T,T=w):(n(T,x),w=ps(_,T.mode,w),w.return=T,T=w),o(T)):n(T,x)}return function(T,x,_,w){try{pa=0;var J=Ee(T,x,_,w);return Ml=null,J}catch(Z){if(Z===Nl||Z===Ri)throw Z;var fe=dt(29,Z,null,T.mode);return fe.lanes=w,fe.return=T,fe}finally{}}}var nl=Wo(!0),Fo=Wo(!1),An=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ns(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Tn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=xi(e),wo(e,null,n),t}return vi(e,l,t,n),xi(e)}function ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,qc(e,n)}}function Ms(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ds=!1;function ba(){if(Ds){var e=zl;if(e!==null)throw e}}function va(e,t,n,l){Ds=!1;var a=e.updateQueue;An=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var v=h,R=v.next;v.next=null,o===null?i=R:o.next=R,o=v;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==o&&(h===null?O.firstBaseUpdate=R:h.next=R,O.lastBaseUpdate=v))}if(i!==null){var j=a.baseState;o=0,O=R=v=null,h=i;do{var C=h.lane&-536870913,N=C!==h.lane;if(N?(re&C)===C:(l&C)===C){C!==0&&C===Cl&&(Ds=!0),O!==null&&(O=O.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var Y=e,$=h;C=t;var Ee=n;switch($.tag){case 1:if(Y=$.payload,typeof Y=="function"){j=Y.call(Ee,j,C);break e}j=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=$.payload,C=typeof Y=="function"?Y.call(Ee,j,C):Y,C==null)break e;j=A({},j,C);break e;case 2:An=!0}}C=h.callback,C!==null&&(e.flags|=64,N&&(e.flags|=8192),N=a.callbacks,N===null?a.callbacks=[C]:N.push(C))}else N={lane:C,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(R=O=N,v=j):O=O.next=N,o|=C;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;N=h,h=N.next,N.next=null,a.lastBaseUpdate=N,a.shared.pending=null}}while(!0);O===null&&(v=j),a.baseState=v,a.firstBaseUpdate=R,a.lastBaseUpdate=O,i===null&&(a.shared.lanes=0),Mn|=o,e.lanes=o,e.memoizedState=j}}function Po(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Po(n[e],t)}var Dl=S(null),Mi=S(0);function ef(e,t){e=un,Q(Mi,e),Q(Dl,t),un=e|t.baseLanes}function Os(){Q(Mi,un),Q(Dl,Dl.current)}function ks(){un=Mi.current,U(Dl),U(Mi)}var ht=S(null),Ct=null;function Rn(e){var t=e.alternate;Q(je,je.current&1),Q(ht,e),Ct===null&&(t===null||Dl.current!==null||t.memoizedState!==null)&&(Ct=e)}function ws(e){Q(je,je.current),Q(ht,e),Ct===null&&(Ct=e)}function tf(e){e.tag===22?(Q(je,je.current),Q(ht,e),Ct===null&&(Ct=e)):Cn()}function Cn(){Q(je,je.current),Q(ht,ht.current)}function mt(e){U(ht),Ct===e&&(Ct=null),U(je)}var je=S(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gr(n)||qr(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,ne=null,xe=null,Be=null,Oi=!1,Ol=!1,ll=!1,ki=0,xa=0,kl=null,i0=0;function Me(){throw Error(c(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Hs(e,t,n,l,a,i){return Ft=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Lf:Fs,ll=!1,i=n(l,a),ll=!1,Ol&&(i=lf(t,n,l,a)),nf(e),i}function nf(e){k.H=Aa;var t=xe!==null&&xe.next!==null;if(Ft=0,Be=xe=ne=null,Oi=!1,xa=0,kl=null,t)throw Error(c(300));e===null||Le||(e=e.dependencies,e!==null&&Ai(e)&&(Le=!0))}function lf(e,t,n,l){ne=e;var a=0;do{if(Ol&&(kl=null),xa=0,Ol=!1,25<=a)throw Error(c(301));if(a+=1,Be=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}k.H=Gf,i=t(n,l)}while(Ol);return i}function u0(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Sa(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ne.flags|=1024),t}function Us(){var e=ki!==0;return ki=0,e}function Bs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ls(e){if(Oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Oi=!1}Ft=0,Be=xe=ne=null,Ol=!1,xa=ki=0,kl=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ne.memoizedState=Be=e:Be=Be.next=e,Be}function He(){if(xe===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Be===null?ne.memoizedState:Be.next;if(t!==null)Be=t,xe=e;else{if(e===null)throw ne.alternate===null?Error(c(467)):Error(c(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Be===null?ne.memoizedState=Be=e:Be=Be.next=e}return Be}function wi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sa(e){var t=xa;return xa+=1,kl===null&&(kl=[]),e=Jo(kl,e,t),t=ne,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Lf:Fs),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sa(e);if(e.$$typeof===H)return Je(e)}throw Error(c(438,String(e)))}function Gs(e){var t=null,n=ne.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=wi(),ne.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=vt;return t.index++,n}function Pt(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=He();return qs(t,xe,e)}function qs(e,t,n){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var h=o=null,v=null,R=t,O=!1;do{var j=R.lane&-536870913;if(j!==R.lane?(re&j)===j:(Ft&j)===j){var C=R.revertLane;if(C===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),j===Cl&&(O=!0);else if((Ft&C)===C){R=R.next,C===Cl&&(O=!0);continue}else j={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(h=v=j,o=i):v=v.next=j,ne.lanes|=C,Mn|=C;j=R.action,ll&&n(i,j),i=R.hasEagerState?R.eagerState:n(i,j)}else C={lane:j,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(h=v=C,o=i):v=v.next=C,ne.lanes|=j,Mn|=j;R=R.next}while(R!==null&&R!==t);if(v===null?o=i:v.next=h,!ft(i,e.memoizedState)&&(Le=!0,O&&(n=zl,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=v,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Qs(e){var t=He(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);ft(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function af(e,t,n){var l=ne,a=He(),i=oe;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var o=!ft((xe||a).memoizedState,n);if(o&&(a.memoizedState=n,Le=!0),a=a.queue,Vs(rf.bind(null,l,a,e),[e]),a.getSnapshot!==t||o||Be!==null&&Be.memoizedState.tag&1){if(l.flags|=2048,wl(9,{destroy:void 0},sf.bind(null,l,a,n,t),null),_e===null)throw Error(c(349));i||(Ft&127)!==0||uf(l,t,n)}return n}function uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t=wi(),ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sf(e,t,n,l){t.value=n,t.getSnapshot=l,cf(t)&&of(e)}function rf(e,t,n){return n(function(){cf(t)&&of(e)})}function cf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function of(e){var t=Kn(e,2);t!==null&&st(t,e,2)}function Ys(e){var t=Pe();if(typeof e=="function"){var n=e;if(e=n(),ll){gn(!0);try{n()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function ff(e,t,n,l){return e.baseState=n,qs(e,xe,typeof l=="function"?l:Pt)}function s0(e,t,n,l,a){if(Li(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};k.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,df(t,i)):(i.next=n.next,t.pending=n.next=i)}}function df(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=k.T,o={};k.T=o;try{var h=n(a,l),v=k.S;v!==null&&v(o,h),hf(e,t,h)}catch(R){Xs(e,t,R)}finally{i!==null&&o.types!==null&&(i.types=o.types),k.T=i}}else try{i=n(a,l),hf(e,t,i)}catch(R){Xs(e,t,R)}}function hf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){mf(e,t,l)},function(l){return Xs(e,t,l)}):mf(e,t,n)}function mf(e,t,n){t.status="fulfilled",t.value=n,pf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,df(e,n)))}function Xs(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,pf(t),t=t.next;while(t!==l)}e.action=null}function pf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gf(e,t){return t}function yf(e,t){if(oe){var n=_e.formState;if(n!==null){e:{var l=ne;if(oe){if(Re){t:{for(var a=Re,i=Rt;a.nodeType!==8;){if(!i){a=null;break t}if(a=zt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Re=zt(a.nextSibling),l=a.data==="F!";break e}}Sn(l)}l=!1}l&&(t=n[0])}}return n=Pe(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gf,lastRenderedState:t},n.queue=l,n=Hf.bind(null,ne,l),l.dispatch=n,l=Ys(!1),i=Ws.bind(null,ne,!1,l.queue),l=Pe(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=s0.bind(null,ne,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function bf(e){var t=He();return vf(t,xe,e)}function vf(e,t,n){if(t=qs(e,t,gf)[0],e=Hi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Sa(t)}catch(o){throw o===Nl?Ri:o}else l=t;t=He();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ne.flags|=2048,wl(9,{destroy:void 0},r0.bind(null,a,n),null)),[l,i,e]}function r0(e,t){e.action=t}function xf(e){var t=He(),n=xe;if(n!==null)return vf(t,n,e);He(),t=t.memoizedState,n=He();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function wl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ne.updateQueue,t===null&&(t=wi(),ne.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Sf(){return He().memoizedState}function Ui(e,t,n,l){var a=Pe();ne.flags|=e,a.memoizedState=wl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Bi(e,t,n,l){var a=He();l=l===void 0?null:l;var i=a.memoizedState.inst;xe!==null&&l!==null&&js(l,xe.memoizedState.deps)?a.memoizedState=wl(t,i,n,l):(ne.flags|=e,a.memoizedState=wl(1|t,i,n,l))}function Ef(e,t){Ui(8390656,8,e,t)}function Vs(e,t){Bi(2048,8,e,t)}function c0(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=wi(),ne.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Af(e){var t=He().memoizedState;return c0({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Tf(e,t){return Bi(4,2,e,t)}function _f(e,t){return Bi(4,4,e,t)}function Rf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,n){n=n!=null?n.concat([e]):null,Bi(4,4,Rf.bind(null,t,e),n)}function Zs(){}function zf(e,t){var n=He();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&js(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Nf(e,t){var n=He();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&js(t,l[1]))return l[0];if(l=e(),ll){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l}function Js(e,t,n){return n===void 0||(Ft&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Md(),ne.lanes|=e,Mn|=e,n)}function Mf(e,t,n,l){return ft(n,t)?n:Dl.current!==null?(e=Js(e,n,l),ft(e,t)||(Le=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(re&261930)===0?(Le=!0,e.memoizedState=n):(e=Md(),ne.lanes|=e,Mn|=e,t)}function Df(e,t,n,l,a){var i=q.p;q.p=i!==0&&8>i?i:8;var o=k.T,h={};k.T=h,Ws(e,!1,t,n);try{var v=a(),R=k.S;if(R!==null&&R(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=a0(v,l);Ea(e,t,O,yt(e))}else Ea(e,t,l,yt(e))}catch(j){Ea(e,t,{then:function(){},status:"rejected",reason:j},yt())}finally{q.p=i,o!==null&&h.types!==null&&(o.types=h.types),k.T=o}}function o0(){}function Ks(e,t,n,l){if(e.tag!==5)throw Error(c(476));var a=Of(e).queue;Df(e,a,t,F,n===null?o0:function(){return kf(e),n(l)})}function Of(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kf(e){var t=Of(e);t.next===null&&(t=e.alternate.memoizedState),Ea(e,t.next.queue,{},yt())}function $s(){return Je(La)}function wf(){return He().memoizedState}function jf(){return He().memoizedState}function f0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=Tn(n);var l=_n(t,e,n);l!==null&&(st(l,t,n),ya(l,t,n)),t={cache:Ts()},e.payload=t;return}t=t.return}}function d0(e,t,n){var l=yt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Li(e)?Uf(t,n):(n=hs(e,t,n,l),n!==null&&(st(n,e,l),Bf(n,t,l)))}function Hf(e,t,n){var l=yt();Ea(e,t,n,l)}function Ea(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Li(e))Uf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,h=i(o,n);if(a.hasEagerState=!0,a.eagerState=h,ft(h,o))return vi(e,t,a,0),_e===null&&bi(),!1}catch{}finally{}if(n=hs(e,t,a,l),n!==null)return st(n,e,l),Bf(n,t,l),!0}return!1}function Ws(e,t,n,l){if(l={lane:2,revertLane:zr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Li(e)){if(t)throw Error(c(479))}else t=hs(e,n,l,2),t!==null&&st(t,e,2)}function Li(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Uf(e,t){Ol=Oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bf(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,qc(e,n)}}var Aa={readContext:Je,use:ji,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};Aa.useEffectEvent=Me;var Lf={readContext:Je,use:ji,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Ef,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ui(4194308,4,Rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var n=Pe();t=t===void 0?null:t;var l=e();if(ll){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Pe();if(n!==void 0){var a=n(t);if(ll){gn(!0);try{n(t)}finally{gn(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=d0.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=Ys(e);var t=e.queue,n=Hf.bind(null,ne,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zs,useDeferredValue:function(e,t){var n=Pe();return Js(n,e,t)},useTransition:function(){var e=Ys(!1);return e=Df.bind(null,ne,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ne,a=Pe();if(oe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),_e===null)throw Error(c(349));(re&127)!==0||uf(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ef(rf.bind(null,l,i,e),[e]),l.flags|=2048,wl(9,{destroy:void 0},sf.bind(null,l,i,n,t),null),n},useId:function(){var e=Pe(),t=_e.identifierPrefix;if(oe){var n=Gt,l=Lt;n=(l&~(1<<32-ot(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ki++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=i0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:yf,useActionState:yf,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ws.bind(null,ne,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gs,useCacheRefresh:function(){return Pe().memoizedState=f0.bind(null,ne)},useEffectEvent:function(e){var t=Pe(),n={impl:e};return t.memoizedState=n,function(){if((me&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Fs={readContext:Je,use:ji,useCallback:zf,useContext:Je,useEffect:Vs,useImperativeHandle:Cf,useInsertionEffect:Tf,useLayoutEffect:_f,useMemo:Nf,useReducer:Hi,useRef:Sf,useState:function(){return Hi(Pt)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=He();return Mf(n,xe.memoizedState,e,t)},useTransition:function(){var e=Hi(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Sa(e),t]},useSyncExternalStore:af,useId:wf,useHostTransitionStatus:$s,useFormState:bf,useActionState:bf,useOptimistic:function(e,t){var n=He();return ff(n,xe,e,t)},useMemoCache:Gs,useCacheRefresh:jf};Fs.useEffectEvent=Af;var Gf={readContext:Je,use:ji,useCallback:zf,useContext:Je,useEffect:Vs,useImperativeHandle:Cf,useInsertionEffect:Tf,useLayoutEffect:_f,useMemo:Nf,useReducer:Qs,useRef:Sf,useState:function(){return Qs(Pt)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=He();return xe===null?Js(n,e,t):Mf(n,xe.memoizedState,e,t)},useTransition:function(){var e=Qs(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Sa(e),t]},useSyncExternalStore:af,useId:wf,useHostTransitionStatus:$s,useFormState:xf,useActionState:xf,useOptimistic:function(e,t){var n=He();return xe!==null?ff(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gs,useCacheRefresh:jf};Gf.useEffectEvent=Af;function Ps(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Is={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=yt(),a=Tn(l);a.payload=t,n!=null&&(a.callback=n),t=_n(e,a,l),t!==null&&(st(t,e,l),ya(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=yt(),a=Tn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=_n(e,a,l),t!==null&&(st(t,e,l),ya(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),l=Tn(n);l.tag=2,t!=null&&(l.callback=t),t=_n(e,l,n),t!==null&&(st(t,e,n),ya(t,e,n))}};function qf(e,t,n,l,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!ca(n,l)||!ca(a,i):!0}function Qf(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Is.enqueueReplaceState(t,t.state,null)}function al(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=A({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Yf(e){yi(e)}function Xf(e){console.error(e)}function Vf(e){yi(e)}function Gi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zf(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function er(e,t,n){return n=Tn(n),n.tag=3,n.payload={element:null},n.callback=function(){Gi(e,t)},n}function Jf(e){return e=Tn(e),e.tag=3,e}function Kf(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Zf(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Zf(t,n,l),typeof a!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function h0(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Rl(t,n,a,!0),n=ht.current,n!==null){switch(n.tag){case 31:case 13:return Ct===null?Pi():n.alternate===null&&De===0&&(De=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Ci?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),_r(e,l,a)),!1;case 22:return n.flags|=65536,l===Ci?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),_r(e,l,a)),!1}throw Error(c(435,n.tag))}return _r(e,l,a),Pi(),!1}if(oe)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==vs&&(e=Error(c(422),{cause:l}),da(At(e,n)))):(l!==vs&&(t=Error(c(423),{cause:l}),da(At(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=At(l,n),a=er(e.stateNode,l,a),Ms(e,a),De!==4&&(De=2)),!1;var i=Error(c(520),{cause:l});if(i=At(i,n),Da===null?Da=[i]:Da.push(i),De!==4&&(De=2),t===null)return!0;l=At(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=er(n.stateNode,l,e),Ms(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Dn===null||!Dn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Jf(a),Kf(a,e,n,l),Ms(n,a),!1}n=n.return}while(n!==null);return!1}var tr=Error(c(461)),Le=!1;function Ke(e,t,n,l){t.child=e===null?Fo(t,null,n,l):nl(t,e.child,n,l)}function $f(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var o={};for(var h in l)h!=="ref"&&(o[h]=l[h])}else o=l;return Pn(t),l=Hs(e,t,n,o,i,a),h=Us(),e!==null&&!Le?(Bs(e,t,a),It(e,t,a)):(oe&&h&&ys(t),t.flags|=1,Ke(e,t,l,a),t.child)}function Wf(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!ms(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Ff(e,t,i,l,a)):(e=Si(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!cr(e,a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(o,l)&&e.ref===t.ref)return It(e,t,a)}return t.flags|=1,e=Jt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(ca(i,l)&&e.ref===t.ref)if(Le=!1,t.pendingProps=l=i,cr(e,a))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,It(e,t,a)}return nr(e,t,n,l,a)}function Pf(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return If(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_i(t,i!==null?i.cachePool:null),i!==null?ef(t,i):Os(),tf(t);else return l=t.lanes=536870912,If(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(_i(t,i.cachePool),ef(t,i),Cn(),t.memoizedState=null):(e!==null&&_i(t,null),Os(),Cn());return Ke(e,t,a,n),t.child}function Ta(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function If(e,t,n,l,a){var i=Rs();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&_i(t,null),Os(),tf(t),e!==null&&Rl(e,t,l,!0),t.childLanes=a,null}function qi(e,t){return t=Yi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ed(e,t,n){return nl(t,e.child,null,n),e=qi(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function m0(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=qi(t,l),t.lanes=536870912,Ta(null,e);if(ws(t),(e=Re)?(e=dh(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Lt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},n=Ho(e),n.return=t,t.child=n,Ze=t,Re=null)):e=null,e===null)throw Sn(t);return t.lanes=536870912,null}return qi(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(ws(t),a)if(t.flags&256)t.flags&=-257,t=ed(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Le||Rl(e,t,n,!1),a=(n&e.childLanes)!==0,Le||a){if(l=_e,l!==null&&(o=Qc(l,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Kn(e,o),st(l,e,o),tr;Pi(),t=ed(e,t,n)}else e=i.treeContext,Re=zt(o.nextSibling),Ze=t,oe=!0,xn=null,Rt=!1,e!==null&&Lo(t,e),t=qi(t,l),t.flags|=4096;return t}return e=Jt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function nr(e,t,n,l,a){return Pn(t),n=Hs(e,t,n,l,void 0,a),l=Us(),e!==null&&!Le?(Bs(e,t,a),It(e,t,a)):(oe&&l&&ys(t),t.flags|=1,Ke(e,t,n,a),t.child)}function td(e,t,n,l,a,i){return Pn(t),t.updateQueue=null,n=lf(t,l,n,a),nf(e),l=Us(),e!==null&&!Le?(Bs(e,t,i),It(e,t,i)):(oe&&l&&ys(t),t.flags|=1,Ke(e,t,n,i),t.child)}function nd(e,t,n,l,a){if(Pn(t),t.stateNode===null){var i=El,o=n.contextType;typeof o=="object"&&o!==null&&(i=Je(o)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Is,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},zs(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Je(o):El,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ps(t,n,o,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Is.enqueueReplaceState(i,i.state,null),va(t,l,i,a),ba(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,v=al(n,h);i.props=v;var R=i.context,O=n.contextType;o=El,typeof O=="object"&&O!==null&&(o=Je(O));var j=n.getDerivedStateFromProps;O=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||R!==o)&&Qf(t,i,l,o),An=!1;var C=t.memoizedState;i.state=C,va(t,l,i,a),ba(),R=t.memoizedState,h||C!==R||An?(typeof j=="function"&&(Ps(t,n,j,l),R=t.memoizedState),(v=An||qf(t,n,v,l,C,R,o))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=R),i.props=l,i.state=R,i.context=o,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Ns(e,t),o=t.memoizedProps,O=al(n,o),i.props=O,j=t.pendingProps,C=i.context,R=n.contextType,v=El,typeof R=="object"&&R!==null&&(v=Je(R)),h=n.getDerivedStateFromProps,(R=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==j||C!==v)&&Qf(t,i,l,v),An=!1,C=t.memoizedState,i.state=C,va(t,l,i,a),ba();var N=t.memoizedState;o!==j||C!==N||An||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof h=="function"&&(Ps(t,n,h,l),N=t.memoizedState),(O=An||qf(t,n,O,l,C,N,v)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(R||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,N,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,N,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=v,l=O):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Qi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=nl(t,e.child,null,a),t.child=nl(t,null,n,a)):Ke(e,t,n,a),t.memoizedState=i.state,e=t.child):e=It(e,t,a),e}function ld(e,t,n,l){return Wn(),t.flags|=256,Ke(e,t,n,l),t.child}var lr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ar(e){return{baseLanes:e,cachePool:Vo()}}function ir(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gt),e}function ad(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(a?Rn(t):Cn(),(e=Re)?(e=dh(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Lt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},n=Ho(e),n.return=t,t.child=n,Ze=t,Re=null)):e=null,e===null)throw Sn(t);return qr(e)?t.lanes=32:t.lanes=536870912,null}var h=l.children;return l=l.fallback,a?(Cn(),a=t.mode,h=Yi({mode:"hidden",children:h},a),l=$n(l,a,n,null),h.return=t,l.return=t,h.sibling=l,t.child=h,l=t.child,l.memoizedState=ar(n),l.childLanes=ir(e,o,n),t.memoizedState=lr,Ta(null,l)):(Rn(t),ur(t,h))}var v=e.memoizedState;if(v!==null&&(h=v.dehydrated,h!==null)){if(i)t.flags&256?(Rn(t),t.flags&=-257,t=sr(e,t,n)):t.memoizedState!==null?(Cn(),t.child=e.child,t.flags|=128,t=null):(Cn(),h=l.fallback,a=t.mode,l=Yi({mode:"visible",children:l.children},a),h=$n(h,a,n,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,nl(t,e.child,null,n),l=t.child,l.memoizedState=ar(n),l.childLanes=ir(e,o,n),t.memoizedState=lr,t=Ta(null,l));else if(Rn(t),qr(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var R=o.dgst;o=R,l=Error(c(419)),l.stack="",l.digest=o,da({value:l,source:null,stack:null}),t=sr(e,t,n)}else if(Le||Rl(e,t,n,!1),o=(n&e.childLanes)!==0,Le||o){if(o=_e,o!==null&&(l=Qc(o,n),l!==0&&l!==v.retryLane))throw v.retryLane=l,Kn(e,l),st(o,e,l),tr;Gr(h)||Pi(),t=sr(e,t,n)}else Gr(h)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Re=zt(h.nextSibling),Ze=t,oe=!0,xn=null,Rt=!1,e!==null&&Lo(t,e),t=ur(t,l.children),t.flags|=4096);return t}return a?(Cn(),h=l.fallback,a=t.mode,v=e.child,R=v.sibling,l=Jt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,R!==null?h=Jt(R,h):(h=$n(h,a,n,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,Ta(null,l),l=t.child,h=e.child.memoizedState,h===null?h=ar(n):(a=h.cachePool,a!==null?(v=Ue._currentValue,a=a.parent!==v?{parent:v,pool:v}:a):a=Vo(),h={baseLanes:h.baseLanes|n,cachePool:a}),l.memoizedState=h,l.childLanes=ir(e,o,n),t.memoizedState=lr,Ta(e.child,l)):(Rn(t),n=e.child,e=n.sibling,n=Jt(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function ur(e,t){return t=Yi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yi(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function sr(e,t,n){return nl(t,e.child,null,n),e=ur(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function id(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Es(e.return,t,n)}function rr(e,t,n,l,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=a,o.treeForkCount=i)}function ud(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var o=je.current,h=(o&2)!==0;if(h?(o=o&1|2,t.flags|=128):o&=1,Q(je,o),Ke(e,t,l,n),l=oe?fa:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,n,t);else if(e.tag===19)id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),rr(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Di(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}rr(t,!0,n,null,i,l);break;case"together":rr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Rl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function p0(e,t,n){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),En(t,Ue,e.memoizedState.cache),Wn();break;case 27:case 5:Wl(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:En(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ws(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Rn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ad(e,t,n):(Rn(t),e=It(e,t,n),e!==null?e.sibling:null);Rn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Rl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return ud(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Q(je,je.current),l)break;return null;case 22:return t.lanes=0,Pf(e,t,n,t.pendingProps);case 24:En(t,Ue,e.memoizedState.cache)}return It(e,t,n)}function sd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!cr(e,n)&&(t.flags&128)===0)return Le=!1,p0(e,t,n);Le=(e.flags&131072)!==0}else Le=!1,oe&&(t.flags&1048576)!==0&&Bo(t,fa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=el(t.elementType),t.type=e,typeof e=="function")ms(e)?(l=al(e,l),t.tag=1,t=nd(null,t,e,l,n)):(t.tag=0,t=nr(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===P){t.tag=11,t=$f(null,t,e,l,n);break e}else if(a===W){t.tag=14,t=Wf(null,t,e,l,n);break e}}throw t=Yt(e)||e,Error(c(306,t,""))}}return t;case 0:return nr(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=al(l,t.pendingProps),nd(e,t,l,a,n);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Ns(e,t),va(t,l,null,n);var o=t.memoizedState;if(l=o.cache,En(t,Ue,l),l!==i.cache&&As(t,[Ue],n,!0),ba(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ld(e,t,l,n);break e}else if(l!==a){a=At(Error(c(424)),t),da(a),t=ld(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=zt(e.firstChild),Ze=t,oe=!0,xn=null,Rt=!0,n=Fo(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wn(),l===a){t=It(e,t,n);break e}Ke(e,t,l,n)}t=t.child}return t;case 26:return Qi(e,t),e===null?(n=bh(t.type,null,t.pendingProps,null))?t.memoizedState=n:oe||(n=t.type,e=t.pendingProps,l=iu(ae.current).createElement(n),l[Ve]=t,l[tt]=e,$e(l,n,e),Qe(l),t.stateNode=l):t.memoizedState=bh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wl(t),e===null&&oe&&(l=t.stateNode=ph(t.type,t.pendingProps,ae.current),Ze=t,Rt=!0,a=Re,jn(t.type)?(Qr=a,Re=zt(l.firstChild)):Re=a),Ke(e,t,t.pendingProps.children,n),Qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((a=l=Re)&&(l=V0(l,t.type,t.pendingProps,Rt),l!==null?(t.stateNode=l,Ze=t,Re=zt(l.firstChild),Rt=!1,a=!0):a=!1),a||Sn(t)),Wl(t),a=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ur(a,i)?l=null:o!==null&&Ur(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=Hs(e,t,u0,null,null,n),La._currentValue=a),Qi(e,t),Ke(e,t,l,n),t.child;case 6:return e===null&&oe&&((e=n=Re)&&(n=Z0(n,t.pendingProps,Rt),n!==null?(t.stateNode=n,Ze=t,Re=null,e=!0):e=!1),e||Sn(t)),null;case 13:return ad(e,t,n);case 4:return Fe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=nl(t,null,l,n):Ke(e,t,l,n),t.child;case 11:return $f(e,t,t.type,t.pendingProps,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,En(t,t.type,l.value),Ke(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Pn(t),a=Je(a),l=l(a),t.flags|=1,Ke(e,t,l,n),t.child;case 14:return Wf(e,t,t.type,t.pendingProps,n);case 15:return Ff(e,t,t.type,t.pendingProps,n);case 19:return ud(e,t,n);case 31:return m0(e,t,n);case 22:return Pf(e,t,n,t.pendingProps);case 24:return Pn(t),l=Je(Ue),e===null?(a=Rs(),a===null&&(a=_e,i=Ts(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},zs(t),En(t,Ue,a)):((e.lanes&n)!==0&&(Ns(e,t),va(t,null,null,n),ba()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),En(t,Ue,l)):(l=i.cache,En(t,Ue,l),l!==a.cache&&As(t,[Ue],n,!0))),Ke(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function en(e){e.flags|=4}function or(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(wd())e.flags|=8192;else throw tl=Ci,Cs}else e.flags&=-16777217}function rd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ah(t))if(wd())e.flags|=8192;else throw tl=Ci,Cs}function Xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Lc():536870912,e.lanes|=t,Bl|=t)}function _a(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function g0(e,t,n){var l=t.pendingProps;switch(bs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Wt(Ue),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_l(t)?en(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xs())),Ce(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(en(t),i!==null?(Ce(t),rd(t,i)):(Ce(t),or(t,a,null,l,n))):i?i!==e.memoizedState?(en(t),Ce(t),rd(t,i)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&en(t),Ce(t),or(t,a,e,l,n)),null;case 27:if(ti(t),n=ae.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&en(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ce(t),null}e=V.current,_l(t)?Go(t):(e=ph(a,l,n),t.stateNode=e,en(t))}return Ce(t),null;case 5:if(ti(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&en(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ce(t),null}if(i=V.current,_l(t))Go(t);else{var o=iu(ae.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(a,{is:l.is}):o.createElement(a)}}i[Ve]=t,i[tt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch($e(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&en(t)}}return Ce(t),or(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&en(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,_l(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Ze,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ah(e.nodeValue,n)),e||Sn(t,!0)}else e=iu(e).createTextNode(l),e[Ve]=t,t.stateNode=e}return Ce(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=_l(t),n!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Ve]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else n=xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ce(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=_l(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Ve]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),a=!1}else a=xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Xi(t,t.updateQueue),Ce(t),null);case 4:return we(),e===null&&Or(t.stateNode.containerInfo),Ce(t),null;case 10:return Wt(t.type),Ce(t),null;case 19:if(U(je),l=t.memoizedState,l===null)return Ce(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)_a(l,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Di(e),i!==null){for(t.flags|=128,_a(l,!1),e=i.updateQueue,t.updateQueue=e,Xi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)jo(n,e),n=n.sibling;return Q(je,je.current&1|2),oe&&Kt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&rt()>$i&&(t.flags|=128,a=!0,_a(l,!1),t.lanes=4194304)}else{if(!a)if(e=Di(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Xi(t,e),_a(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!oe)return Ce(t),null}else 2*rt()-l.renderingStartTime>$i&&n!==536870912&&(t.flags|=128,a=!0,_a(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=rt(),e.sibling=null,n=je.current,Q(je,a?n&1|2:n&1),oe&&Kt(t,l.treeForkCount),e):(Ce(t),null);case 22:case 23:return mt(t),ks(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),n=t.updateQueue,n!==null&&Xi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&U(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Ue),Ce(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function y0(e,t){switch(bs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ue),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ti(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(c(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(je),null;case 4:return we(),null;case 10:return Wt(t.type),null;case 22:case 23:return mt(t),ks(),e!==null&&U(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ue),null;case 25:return null;default:return null}}function cd(e,t){switch(bs(t),t.tag){case 3:Wt(Ue),we();break;case 26:case 27:case 5:ti(t);break;case 4:we();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:U(je);break;case 10:Wt(t.type);break;case 22:case 23:mt(t),ks(),e!==null&&U(In);break;case 24:Wt(Ue)}}function Ra(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,o=n.inst;l=i(),o.destroy=l}n=n.next}while(n!==a)}}catch(h){ye(t,t.return,h)}}function zn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var o=l.inst,h=o.destroy;if(h!==void 0){o.destroy=void 0,a=t;var v=n,R=h;try{R()}catch(O){ye(a,v,O)}}}l=l.next}while(l!==i)}}catch(O){ye(t,t.return,O)}}function od(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Io(t,n)}catch(l){ye(e,e.return,l)}}}function fd(e,t,n){n.props=al(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ye(e,t,l)}}function Ca(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){ye(e,t,a)}}function qt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){ye(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ye(e,t,a)}else n.current=null}function dd(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){ye(e,e.return,a)}}function fr(e,t,n){try{var l=e.stateNode;L0(l,e.type,n,t),l[tt]=t}catch(a){ye(e,e.return,a)}}function hd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jn(e.type)||e.tag===4}function dr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vt));else if(l!==4&&(l===27&&jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(hr(e,t,n),e=e.sibling;e!==null;)hr(e,t,n),e=e.sibling}function Vi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function md(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$e(t,l,n),t[Ve]=e,t[tt]=n}catch(i){ye(e,e.return,i)}}var tn=!1,Ge=!1,mr=!1,pd=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function b0(e,t){if(e=e.containerInfo,jr=du,e=Ro(e),ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,h=-1,v=-1,R=0,O=0,j=e,C=null;t:for(;;){for(var N;j!==n||a!==0&&j.nodeType!==3||(h=o+a),j!==i||l!==0&&j.nodeType!==3||(v=o+l),j.nodeType===3&&(o+=j.nodeValue.length),(N=j.firstChild)!==null;)C=j,j=N;for(;;){if(j===e)break t;if(C===n&&++R===a&&(h=o),C===i&&++O===l&&(v=o),(N=j.nextSibling)!==null)break;j=C,C=j.parentNode}j=N}n=h===-1||v===-1?null:{start:h,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hr={focusedElem:e,selectionRange:n},du=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var Y=al(n.type,a);e=l.getSnapshotBeforeUpdate(Y,i),l.__reactInternalSnapshotBeforeUpdate=e}catch($){ye(n,n.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Lr(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function gd(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:ln(e,n),l&4&&Ra(5,n);break;case 1:if(ln(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ye(n,n.return,o)}else{var a=al(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ye(n,n.return,o)}}l&64&&od(n),l&512&&Ca(n,n.return);break;case 3:if(ln(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Io(e,t)}catch(o){ye(n,n.return,o)}}break;case 27:t===null&&l&4&&md(n);case 26:case 5:ln(e,n),t===null&&l&4&&dd(n),l&512&&Ca(n,n.return);break;case 12:ln(e,n);break;case 31:ln(e,n),l&4&&vd(e,n);break;case 13:ln(e,n),l&4&&xd(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=C0.bind(null,n),J0(e,n))));break;case 22:if(l=n.memoizedState!==null||tn,!l){t=t!==null&&t.memoizedState!==null||Ge,a=tn;var i=Ge;tn=l,(Ge=t)&&!i?an(e,n,(n.subtreeFlags&8772)!==0):ln(e,n),tn=a,Ge=i}break;case 30:break;default:ln(e,n)}}function yd(e){var t=e.alternate;t!==null&&(e.alternate=null,yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,lt=!1;function nn(e,t,n){for(n=n.child;n!==null;)bd(e,t,n),n=n.sibling}function bd(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 26:Ge||qt(n,t),nn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ge||qt(n,t);var l=ze,a=lt;jn(n.type)&&(ze=n.stateNode,lt=!1),nn(e,t,n),Ha(n.stateNode),ze=l,lt=a;break;case 5:Ge||qt(n,t);case 6:if(l=ze,a=lt,ze=null,nn(e,t,n),ze=l,lt=a,ze!==null)if(lt)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(n.stateNode)}catch(i){ye(n,t,i)}else try{ze.removeChild(n.stateNode)}catch(i){ye(n,t,i)}break;case 18:ze!==null&&(lt?(e=ze,oh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Zl(e)):oh(ze,n.stateNode));break;case 4:l=ze,a=lt,ze=n.stateNode.containerInfo,lt=!0,nn(e,t,n),ze=l,lt=a;break;case 0:case 11:case 14:case 15:zn(2,n,t),Ge||zn(4,n,t),nn(e,t,n);break;case 1:Ge||(qt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&fd(n,t,l)),nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:Ge=(l=Ge)||n.memoizedState!==null,nn(e,t,n),Ge=l;break;default:nn(e,t,n)}}function vd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zl(e)}catch(n){ye(t,t.return,n)}}}function xd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zl(e)}catch(n){ye(t,t.return,n)}}function v0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pd),t;default:throw Error(c(435,e.tag))}}function Zi(e,t){var n=v0(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=z0.bind(null,e,l);l.then(a,a)}})}function at(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,o=t,h=o;e:for(;h!==null;){switch(h.tag){case 27:if(jn(h.type)){ze=h.stateNode,lt=!1;break e}break;case 5:ze=h.stateNode,lt=!1;break e;case 3:case 4:ze=h.stateNode.containerInfo,lt=!0;break e}h=h.return}if(ze===null)throw Error(c(160));bd(i,o,a),ze=null,lt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sd(t,e),t=t.sibling}var kt=null;function Sd(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),it(e),l&4&&(zn(3,e,e.return),Ra(3,e),zn(5,e,e.return));break;case 1:at(t,e),it(e),l&512&&(Ge||n===null||qt(n,n.return)),l&64&&tn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=kt;if(at(t,e),it(e),l&512&&(Ge||n===null||qt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[ea]||i[Ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),$e(i,l,n),i[Ve]=e,Qe(i),l=i;break e;case"link":var o=Sh("link","href",a).get(l+(n.href||""));if(o){for(var h=0;h<o.length;h++)if(i=o[h],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(h,1);break t}}i=a.createElement(l),$e(i,l,n),a.head.appendChild(i);break;case"meta":if(o=Sh("meta","content",a).get(l+(n.content||""))){for(h=0;h<o.length;h++)if(i=o[h],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(h,1);break t}}i=a.createElement(l),$e(i,l,n),a.head.appendChild(i);break;default:throw Error(c(468,l))}i[Ve]=e,Qe(i),l=i}e.stateNode=l}else Eh(a,e.type,e.stateNode);else e.stateNode=xh(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?Eh(a,e.type,e.stateNode):xh(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&fr(e,e.memoizedProps,n.memoizedProps)}break;case 27:at(t,e),it(e),l&512&&(Ge||n===null||qt(n,n.return)),n!==null&&l&4&&fr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(at(t,e),it(e),l&512&&(Ge||n===null||qt(n,n.return)),e.flags&32){a=e.stateNode;try{pl(a,"")}catch(Y){ye(e,e.return,Y)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,fr(e,a,n!==null?n.memoizedProps:a)),l&1024&&(mr=!0);break;case 6:if(at(t,e),it(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(Y){ye(e,e.return,Y)}}break;case 3:if(ru=null,a=kt,kt=uu(t.containerInfo),at(t,e),kt=a,it(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Zl(t.containerInfo)}catch(Y){ye(e,e.return,Y)}mr&&(mr=!1,Ed(e));break;case 4:l=kt,kt=uu(e.stateNode.containerInfo),at(t,e),it(e),kt=l;break;case 12:at(t,e),it(e);break;case 31:at(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 13:at(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ki=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 22:a=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,R=tn,O=Ge;if(tn=R||a,Ge=O||v,at(t,e),Ge=O,tn=R,it(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||v||tn||Ge||il(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(i=v.stateNode,a)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{h=v.stateNode;var j=v.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null;h.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(Y){ye(v,v.return,Y)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(Y){ye(v,v.return,Y)}}}else if(t.tag===18){if(n===null){v=t;try{var N=v.stateNode;a?fh(N,!0):fh(v.stateNode,!1)}catch(Y){ye(v,v.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Zi(e,n))));break;case 19:at(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 30:break;case 21:break;default:at(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(hd(l)){n=l;break}l=l.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var a=n.stateNode,i=dr(e);Vi(e,i,a);break;case 5:var o=n.stateNode;n.flags&32&&(pl(o,""),n.flags&=-33);var h=dr(e);Vi(e,h,o);break;case 3:case 4:var v=n.stateNode.containerInfo,R=dr(e);hr(e,R,v);break;default:throw Error(c(161))}}catch(O){ye(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ed(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ln(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gd(e,t.alternate,t),t=t.sibling}function il(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zn(4,t,t.return),il(t);break;case 1:qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fd(t,t.return,n),il(t);break;case 27:Ha(t.stateNode);case 26:case 5:qt(t,t.return),il(t);break;case 22:t.memoizedState===null&&il(t);break;case 30:il(t);break;default:il(t)}e=e.sibling}}function an(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:an(a,i,n),Ra(4,i);break;case 1:if(an(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(R){ye(l,l.return,R)}if(l=i,a=l.updateQueue,a!==null){var h=l.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)Po(v[a],h)}catch(R){ye(l,l.return,R)}}n&&o&64&&od(i),Ca(i,i.return);break;case 27:md(i);case 26:case 5:an(a,i,n),n&&l===null&&o&4&&dd(i),Ca(i,i.return);break;case 12:an(a,i,n);break;case 31:an(a,i,n),n&&o&4&&vd(a,i);break;case 13:an(a,i,n),n&&o&4&&xd(a,i);break;case 22:i.memoizedState===null&&an(a,i,n),Ca(i,i.return);break;case 30:break;default:an(a,i,n)}t=t.sibling}}function pr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function gr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function wt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ad(e,t,n,l),t=t.sibling}function Ad(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:wt(e,t,n,l),a&2048&&Ra(9,t);break;case 1:wt(e,t,n,l);break;case 3:wt(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(a&2048){wt(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,h=i.onPostCommit;typeof h=="function"&&h(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ye(t,t.return,v)}}else wt(e,t,n,l);break;case 31:wt(e,t,n,l);break;case 13:wt(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?wt(e,t,n,l):za(e,t):i._visibility&2?wt(e,t,n,l):(i._visibility|=2,jl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&pr(o,t);break;case 24:wt(e,t,n,l),a&2048&&gr(t.alternate,t);break;default:wt(e,t,n,l)}}function jl(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,h=n,v=l,R=o.flags;switch(o.tag){case 0:case 11:case 15:jl(i,o,h,v,a),Ra(8,o);break;case 23:break;case 22:var O=o.stateNode;o.memoizedState!==null?O._visibility&2?jl(i,o,h,v,a):za(i,o):(O._visibility|=2,jl(i,o,h,v,a)),a&&R&2048&&pr(o.alternate,o);break;case 24:jl(i,o,h,v,a),a&&R&2048&&gr(o.alternate,o);break;default:jl(i,o,h,v,a)}t=t.sibling}}function za(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:za(n,l),a&2048&&pr(l.alternate,l);break;case 24:za(n,l),a&2048&&gr(l.alternate,l);break;default:za(n,l)}t=t.sibling}}var Na=8192;function Hl(e,t,n){if(e.subtreeFlags&Na)for(e=e.child;e!==null;)Td(e,t,n),e=e.sibling}function Td(e,t,n){switch(e.tag){case 26:Hl(e,t,n),e.flags&Na&&e.memoizedState!==null&&ig(n,kt,e.memoizedState,e.memoizedProps);break;case 5:Hl(e,t,n);break;case 3:case 4:var l=kt;kt=uu(e.stateNode.containerInfo),Hl(e,t,n),kt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Na,Na=16777216,Hl(e,t,n),Na=l):Hl(e,t,n));break;default:Hl(e,t,n)}}function _d(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ma(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Ye=l,Cd(l,e)}_d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rd(e),e=e.sibling}function Rd(e){switch(e.tag){case 0:case 11:case 15:Ma(e),e.flags&2048&&zn(9,e,e.return);break;case 3:Ma(e);break;case 12:Ma(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Ma(e);break;default:Ma(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Ye=l,Cd(l,e)}_d(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zn(8,t,t.return),Ji(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function Cd(e,t){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ha(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Ye=l;else e:for(n=e;Ye!==null;){l=Ye;var a=l.sibling,i=l.return;if(yd(l),l===n){Ye=null;break e}if(a!==null){a.return=i,Ye=a;break e}Ye=i}}}var x0={getCacheForType:function(e){var t=Je(Ue),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Je(Ue).controller.signal}},S0=typeof WeakMap=="function"?WeakMap:Map,me=0,_e=null,ie=null,re=0,ge=0,pt=null,Nn=!1,Ul=!1,yr=!1,un=0,De=0,Mn=0,ul=0,br=0,gt=0,Bl=0,Da=null,ut=null,vr=!1,Ki=0,zd=0,$i=1/0,Wi=null,Dn=null,qe=0,On=null,Ll=null,sn=0,xr=0,Sr=null,Nd=null,Oa=0,Er=null;function yt(){return(me&2)!==0&&re!==0?re&-re:k.T!==null?zr():Yc()}function Md(){if(gt===0)if((re&536870912)===0||oe){var e=ai;ai<<=1,(ai&3932160)===0&&(ai=262144),gt=e}else gt=536870912;return e=ht.current,e!==null&&(e.flags|=32),gt}function st(e,t,n){(e===_e&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Gl(e,0),kn(e,re,gt,!1)),Il(e,n),((me&2)===0||e!==_e)&&(e===_e&&((me&2)===0&&(ul|=n),De===4&&kn(e,re,gt,!1)),Qt(e))}function Dd(e,t,n){if((me&6)!==0)throw Error(c(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Pl(e,t),a=l?T0(e,t):Tr(e,t,!0),i=l;do{if(a===0){Ul&&!l&&kn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!E0(n)){a=Tr(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var h=e;a=Da;var v=h.current.memoizedState.isDehydrated;if(v&&(Gl(h,o).flags|=256),o=Tr(h,o,!1),o!==2){if(yr&&!v){h.errorRecoveryDisabledLanes|=i,ul|=i,a=4;break e}i=ut,ut=a,i!==null&&(ut===null?ut=i:ut.push.apply(ut,i))}a=o}if(i=!1,a!==2)continue}}if(a===1){Gl(e,0),kn(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:kn(l,t,gt,!Nn);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(a=Ki+300-rt(),10<a)){if(kn(l,t,gt,!Nn),ui(l,0,!0)!==0)break e;sn=t,l.timeoutHandle=rh(Od.bind(null,l,n,ut,Wi,vr,t,gt,ul,Bl,Nn,i,"Throttled",-0,0),a);break e}Od(l,n,ut,Wi,vr,t,gt,ul,Bl,Nn,i,null,-0,0)}}break}while(!0);Qt(e)}function Od(e,t,n,l,a,i,o,h,v,R,O,j,C,N){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vt},Td(t,i,j);var Y=(i&62914560)===i?Ki-rt():(i&4194048)===i?zd-rt():0;if(Y=ug(j,Y),Y!==null){sn=i,e.cancelPendingCommit=Y(Gd.bind(null,e,t,i,n,l,a,o,h,v,O,j,null,C,N)),kn(e,i,o,!R);return}}Gd(e,t,i,n,l,a,o,h,v)}function E0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!ft(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,l){t&=~br,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-ot(a),o=1<<i;l[i]=-1,a&=~o}n!==0&&Gc(e,n,t)}function Fi(){return(me&6)===0?(ka(0),!1):!0}function Ar(){if(ie!==null){if(ge===0)var e=ie.return;else e=ie,$t=Fn=null,Ls(e),Ml=null,pa=0,e=ie;for(;e!==null;)cd(e.alternate,e),e=e.return;ie=null}}function Gl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Q0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),sn=0,Ar(),_e=e,ie=n=Jt(e.current,null),re=t,ge=0,pt=null,Nn=!1,Ul=Pl(e,t),yr=!1,Bl=gt=br=ul=Mn=De=0,ut=Da=null,vr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-ot(l),i=1<<a;t|=e[a],l&=~i}return un=t,bi(),n}function kd(e,t){ne=null,k.H=Aa,t===Nl||t===Ri?(t=Ko(),ge=3):t===Cs?(t=Ko(),ge=4):ge=t===tr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ie===null&&(De=1,Gi(e,At(t,e.current)))}function wd(){var e=ht.current;return e===null?!0:(re&4194048)===re?Ct===null:(re&62914560)===re||(re&536870912)!==0?e===Ct:!1}function jd(){var e=k.H;return k.H=Aa,e===null?Aa:e}function Hd(){var e=k.A;return k.A=x0,e}function Pi(){De=4,Nn||(re&4194048)!==re&&ht.current!==null||(Ul=!0),(Mn&134217727)===0&&(ul&134217727)===0||_e===null||kn(_e,re,gt,!1)}function Tr(e,t,n){var l=me;me|=2;var a=jd(),i=Hd();(_e!==e||re!==t)&&(Wi=null,Gl(e,t)),t=!1;var o=De;e:do try{if(ge!==0&&ie!==null){var h=ie,v=pt;switch(ge){case 8:Ar(),o=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var R=ge;if(ge=0,pt=null,ql(e,h,v,R),n&&Ul){o=0;break e}break;default:R=ge,ge=0,pt=null,ql(e,h,v,R)}}A0(),o=De;break}catch(O){kd(e,O)}while(!0);return t&&e.shellSuspendCounter++,$t=Fn=null,me=l,k.H=a,k.A=i,ie===null&&(_e=null,re=0,bi()),o}function A0(){for(;ie!==null;)Ud(ie)}function T0(e,t){var n=me;me|=2;var l=jd(),a=Hd();_e!==e||re!==t?(Wi=null,$i=rt()+500,Gl(e,t)):Ul=Pl(e,t);e:do try{if(ge!==0&&ie!==null){t=ie;var i=pt;t:switch(ge){case 1:ge=0,pt=null,ql(e,t,i,1);break;case 2:case 9:if(Zo(i)){ge=0,pt=null,Bd(t);break}t=function(){ge!==2&&ge!==9||_e!==e||(ge=7),Qt(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Zo(i)?(ge=0,pt=null,Bd(t)):(ge=0,pt=null,ql(e,t,i,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var h=ie;if(o?Ah(o):h.stateNode.complete){ge=0,pt=null;var v=h.sibling;if(v!==null)ie=v;else{var R=h.return;R!==null?(ie=R,Ii(R)):ie=null}break t}}ge=0,pt=null,ql(e,t,i,5);break;case 6:ge=0,pt=null,ql(e,t,i,6);break;case 8:Ar(),De=6;break e;default:throw Error(c(462))}}_0();break}catch(O){kd(e,O)}while(!0);return $t=Fn=null,k.H=l,k.A=a,me=n,ie!==null?0:(_e=null,re=0,bi(),De)}function _0(){for(;ie!==null&&!Km();)Ud(ie)}function Ud(e){var t=sd(e.alternate,e,un);e.memoizedProps=e.pendingProps,t===null?Ii(e):ie=t}function Bd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=td(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=td(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Ls(t);default:cd(n,t),t=ie=jo(t,un),t=sd(n,t,un)}e.memoizedProps=e.pendingProps,t===null?Ii(e):ie=t}function ql(e,t,n,l){$t=Fn=null,Ls(t),Ml=null,pa=0;var a=t.return;try{if(h0(e,a,t,n,re)){De=1,Gi(e,At(n,e.current)),ie=null;return}}catch(i){if(a!==null)throw ie=a,i;De=1,Gi(e,At(n,e.current)),ie=null;return}t.flags&32768?(oe||l===1?e=!0:Ul||(re&536870912)!==0?e=!1:(Nn=e=!0,(l===2||l===9||l===3||l===6)&&(l=ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ld(t,e)):Ii(t)}function Ii(e){var t=e;do{if((t.flags&32768)!==0){Ld(t,Nn);return}e=t.return;var n=g0(t.alternate,t,un);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);De===0&&(De=5)}function Ld(e,t){do{var n=y0(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);De=6,ie=null}function Gd(e,t,n,l,a,i,o,h,v){e.cancelPendingCommit=null;do eu();while(qe!==0);if((me&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=ds,ap(e,n,i,o,h,v),e===_e&&(ie=_e=null,re=0),Ll=t,On=e,sn=n,xr=i,Sr=a,Nd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,N0(ni,function(){return Vd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=k.T,k.T=null,a=q.p,q.p=2,o=me,me|=4;try{b0(e,t,n)}finally{me=o,q.p=a,k.T=l}}qe=1,qd(),Qd(),Yd()}}function qd(){if(qe===1){qe=0;var e=On,t=Ll,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var l=q.p;q.p=2;var a=me;me|=4;try{Sd(t,e);var i=Hr,o=Ro(e.containerInfo),h=i.focusedElem,v=i.selectionRange;if(o!==h&&h&&h.ownerDocument&&_o(h.ownerDocument.documentElement,h)){if(v!==null&&ss(h)){var R=v.start,O=v.end;if(O===void 0&&(O=R),"selectionStart"in h)h.selectionStart=R,h.selectionEnd=Math.min(O,h.value.length);else{var j=h.ownerDocument||document,C=j&&j.defaultView||window;if(C.getSelection){var N=C.getSelection(),Y=h.textContent.length,$=Math.min(v.start,Y),Ee=v.end===void 0?$:Math.min(v.end,Y);!N.extend&&$>Ee&&(o=Ee,Ee=$,$=o);var T=To(h,$),x=To(h,Ee);if(T&&x&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==x.node||N.focusOffset!==x.offset)){var _=j.createRange();_.setStart(T.node,T.offset),N.removeAllRanges(),$>Ee?(N.addRange(_),N.extend(x.node,x.offset)):(_.setEnd(x.node,x.offset),N.addRange(_))}}}}for(j=[],N=h;N=N.parentNode;)N.nodeType===1&&j.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<j.length;h++){var w=j[h];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}du=!!jr,Hr=jr=null}finally{me=a,q.p=l,k.T=n}}e.current=t,qe=2}}function Qd(){if(qe===2){qe=0;var e=On,t=Ll,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var l=q.p;q.p=2;var a=me;me|=4;try{gd(e,t.alternate,t)}finally{me=a,q.p=l,k.T=n}}qe=3}}function Yd(){if(qe===4||qe===3){qe=0,$m();var e=On,t=Ll,n=sn,l=Nd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ll=On=null,Xd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Dn=null),Qu(n),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=k.T,a=q.p,q.p=2,k.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var h=l[o];i(h.value,{componentStack:h.stack})}}finally{k.T=t,q.p=a}}(sn&3)!==0&&eu(),Qt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Er?Oa++:(Oa=0,Er=e):Oa=0,ka(0)}}function Xd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function eu(){return qd(),Qd(),Yd(),Vd()}function Vd(){if(qe!==5)return!1;var e=On,t=xr;xr=0;var n=Qu(sn),l=k.T,a=q.p;try{q.p=32>n?32:n,k.T=null,n=Sr,Sr=null;var i=On,o=sn;if(qe=0,Ll=On=null,sn=0,(me&6)!==0)throw Error(c(331));var h=me;if(me|=4,Rd(i.current),Ad(i,i.current,o,n),me=h,ka(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Fl,i)}catch{}return!0}finally{q.p=a,k.T=l,Xd(e,t)}}function Zd(e,t,n){t=At(n,t),t=er(e.stateNode,t,2),e=_n(e,t,2),e!==null&&(Il(e,2),Qt(e))}function ye(e,t,n){if(e.tag===3)Zd(e,e,n);else for(;t!==null;){if(t.tag===3){Zd(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dn===null||!Dn.has(l))){e=At(n,e),n=Jf(2),l=_n(t,n,2),l!==null&&(Kf(n,l,t,e),Il(l,2),Qt(l));break}}t=t.return}}function _r(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new S0;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(yr=!0,a.add(n),e=R0.bind(null,e,t,n),t.then(e,e))}function R0(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(re&n)===n&&(De===4||De===3&&(re&62914560)===re&&300>rt()-Ki?(me&2)===0&&Gl(e,0):br|=n,Bl===re&&(Bl=0)),Qt(e)}function Jd(e,t){t===0&&(t=Lc()),e=Kn(e,t),e!==null&&(Il(e,t),Qt(e))}function C0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jd(e,n)}function z0(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Jd(e,n)}function N0(e,t){return Bu(e,t)}var tu=null,Ql=null,Rr=!1,nu=!1,Cr=!1,wn=0;function Qt(e){e!==Ql&&e.next===null&&(Ql===null?tu=Ql=e:Ql=Ql.next=e),nu=!0,Rr||(Rr=!0,D0())}function ka(e,t){if(!Cr&&nu){Cr=!0;do for(var n=!1,l=tu;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var o=l.suspendedLanes,h=l.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=a&~(o&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Fd(l,i))}else i=re,i=ui(l,l===_e?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Pl(l,i)||(n=!0,Fd(l,i));l=l.next}while(n);Cr=!1}}function M0(){Kd()}function Kd(){nu=Rr=!1;var e=0;wn!==0&&q0()&&(e=wn);for(var t=rt(),n=null,l=tu;l!==null;){var a=l.next,i=$d(l,t);i===0?(l.next=null,n===null?tu=a:n.next=a,a===null&&(Ql=n)):(n=l,(e!==0||(i&3)!==0)&&(nu=!0)),l=a}qe!==0&&qe!==5||ka(e),wn!==0&&(wn=0)}function $d(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ot(i),h=1<<o,v=a[o];v===-1?((h&n)===0||(h&l)!==0)&&(a[o]=lp(h,t)):v<=t&&(e.expiredLanes|=h),i&=~h}if(t=_e,n=re,n=ui(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Lu(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Pl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Lu(l),Qu(n)){case 2:case 8:n=Uc;break;case 32:n=ni;break;case 268435456:n=Bc;break;default:n=ni}return l=Wd.bind(null,e),n=Bu(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Lu(l),e.callbackPriority=2,e.callbackNode=null,2}function Wd(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(eu()&&e.callbackNode!==n)return null;var l=re;return l=ui(e,e===_e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Dd(e,l,t),$d(e,rt()),e.callbackNode!=null&&e.callbackNode===n?Wd.bind(null,e):null)}function Fd(e,t){if(eu())return null;Dd(e,t,!0)}function D0(){Y0(function(){(me&6)!==0?Bu(Hc,M0):Kd()})}function zr(){if(wn===0){var e=Cl;e===0&&(e=li,li<<=1,(li&261888)===0&&(li=256)),wn=e}return wn}function Pd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function Id(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function O0(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Pd((a[tt]||null).action),o=l.submitter;o&&(t=(t=o[tt]||null)?Pd(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var h=new mi("action","action",null,l,a);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wn!==0){var v=o?Id(a,o):new FormData(a);Ks(n,{pending:!0,data:v,method:a.method,action:i},null,v)}}else typeof i=="function"&&(h.preventDefault(),v=o?Id(a,o):new FormData(a),Ks(n,{pending:!0,data:v,method:a.method,action:i},i,v))},currentTarget:a}]})}}for(var Nr=0;Nr<fs.length;Nr++){var Mr=fs[Nr],k0=Mr.toLowerCase(),w0=Mr[0].toUpperCase()+Mr.slice(1);Ot(k0,"on"+w0)}Ot(No,"onAnimationEnd"),Ot(Mo,"onAnimationIteration"),Ot(Do,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Wp,"onTransitionRun"),Ot(Fp,"onTransitionStart"),Ot(Pp,"onTransitionCancel"),Ot(Oo,"onTransitionEnd"),hl("onMouseEnter",["mouseout","mouseover"]),hl("onMouseLeave",["mouseout","mouseover"]),hl("onPointerEnter",["pointerout","pointerover"]),hl("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wa));function eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var h=l[o],v=h.instance,R=h.currentTarget;if(h=h.listener,v!==i&&a.isPropagationStopped())break e;i=h,a.currentTarget=R;try{i(a)}catch(O){yi(O)}a.currentTarget=null,i=v}else for(o=0;o<l.length;o++){if(h=l[o],v=h.instance,R=h.currentTarget,h=h.listener,v!==i&&a.isPropagationStopped())break e;i=h,a.currentTarget=R;try{i(a)}catch(O){yi(O)}a.currentTarget=null,i=v}}}}function ue(e,t){var n=t[Yu];n===void 0&&(n=t[Yu]=new Set);var l=e+"__bubble";n.has(l)||(th(t,e,2,!1),n.add(l))}function Dr(e,t,n){var l=0;t&&(l|=4),th(n,e,l,t)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[lu]){e[lu]=!0,Zc.forEach(function(n){n!=="selectionchange"&&(j0.has(n)||Dr(n,!1,e),Dr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lu]||(t[lu]=!0,Dr("selectionchange",!1,t))}}function th(e,t,n,l){switch(Mh(t)){case 2:var a=cg;break;case 8:a=og;break;default:a=Jr}n=a.bind(null,t,n,e),a=void 0,!Pu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function kr(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var h=l.stateNode.containerInfo;if(h===a)break;if(o===4)for(o=l.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;h!==null;){if(o=ol(h),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){l=i=o;continue e}h=h.parentNode}}l=l.return}ao(function(){var R=i,O=Wu(n),j=[];e:{var C=ko.get(e);if(C!==void 0){var N=mi,Y=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":N=zp;break;case"focusin":Y="focus",N=ns;break;case"focusout":Y="blur",N=ns;break;case"beforeblur":case"afterblur":N=ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Dp;break;case No:case Mo:case Do:N=vp;break;case Oo:N=kp;break;case"scroll":case"scrollend":N=mp;break;case"wheel":N=jp;break;case"copy":case"cut":case"paste":N=Sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=co;break;case"toggle":case"beforetoggle":N=Up}var $=(t&4)!==0,Ee=!$&&(e==="scroll"||e==="scrollend"),T=$?C!==null?C+"Capture":null:C;$=[];for(var x=R,_;x!==null;){var w=x;if(_=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||_===null||T===null||(w=na(x,T),w!=null&&$.push(ja(x,w,_))),Ee)break;x=x.return}0<$.length&&(C=new N(C,Y,null,n,O),j.push({event:C,listeners:$}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",C&&n!==$u&&(Y=n.relatedTarget||n.fromElement)&&(ol(Y)||Y[cl]))break e;if((N||C)&&(C=O.window===O?O:(C=O.ownerDocument)?C.defaultView||C.parentWindow:window,N?(Y=n.relatedTarget||n.toElement,N=R,Y=Y?ol(Y):null,Y!==null&&(Ee=d(Y),$=Y.tag,Y!==Ee||$!==5&&$!==27&&$!==6)&&(Y=null)):(N=null,Y=R),N!==Y)){if($=so,w="onMouseLeave",T="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&($=co,w="onPointerLeave",T="onPointerEnter",x="pointer"),Ee=N==null?C:ta(N),_=Y==null?C:ta(Y),C=new $(w,x+"leave",N,n,O),C.target=Ee,C.relatedTarget=_,w=null,ol(O)===R&&($=new $(T,x+"enter",Y,n,O),$.target=_,$.relatedTarget=Ee,w=$),Ee=w,N&&Y)t:{for($=H0,T=N,x=Y,_=0,w=T;w;w=$(w))_++;w=0;for(var J=x;J;J=$(J))w++;for(;0<_-w;)T=$(T),_--;for(;0<w-_;)x=$(x),w--;for(;_--;){if(T===x||x!==null&&T===x.alternate){$=T;break t}T=$(T),x=$(x)}$=null}else $=null;N!==null&&nh(j,C,N,$,!1),Y!==null&&Ee!==null&&nh(j,Ee,Y,$,!0)}}e:{if(C=R?ta(R):window,N=C.nodeName&&C.nodeName.toLowerCase(),N==="select"||N==="input"&&C.type==="file")var fe=bo;else if(go(C))if(vo)fe=Jp;else{fe=Vp;var Z=Xp}else N=C.nodeName,!N||N.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?R&&Ku(R.elementType)&&(fe=bo):fe=Zp;if(fe&&(fe=fe(e,R))){yo(j,fe,n,O);break e}Z&&Z(e,C,R),e==="focusout"&&R&&C.type==="number"&&R.memoizedProps.value!=null&&Ju(C,"number",C.value)}switch(Z=R?ta(R):window,e){case"focusin":(go(Z)||Z.contentEditable==="true")&&(vl=Z,rs=R,oa=null);break;case"focusout":oa=rs=vl=null;break;case"mousedown":cs=!0;break;case"contextmenu":case"mouseup":case"dragend":cs=!1,Co(j,n,O);break;case"selectionchange":if($p)break;case"keydown":case"keyup":Co(j,n,O)}var le;if(as)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else bl?mo(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(oo&&n.locale!=="ko"&&(bl||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&bl&&(le=io()):(bn=O,Iu="value"in bn?bn.value:bn.textContent,bl=!0)),Z=au(R,ce),0<Z.length&&(ce=new ro(ce,e,null,n,O),j.push({event:ce,listeners:Z}),le?ce.data=le:(le=po(n),le!==null&&(ce.data=le)))),(le=Lp?Gp(e,n):qp(e,n))&&(ce=au(R,"onBeforeInput"),0<ce.length&&(Z=new ro("onBeforeInput","beforeinput",null,n,O),j.push({event:Z,listeners:ce}),Z.data=le)),O0(j,e,R,n,O)}eh(j,t)})}function ja(e,t,n){return{instance:e,listener:t,currentTarget:n}}function au(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=na(e,n),a!=null&&l.unshift(ja(e,a,i)),a=na(e,t),a!=null&&l.push(ja(e,a,i))),e.tag===3)return l;e=e.return}return[]}function H0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nh(e,t,n,l,a){for(var i=t._reactName,o=[];n!==null&&n!==l;){var h=n,v=h.alternate,R=h.stateNode;if(h=h.tag,v!==null&&v===l)break;h!==5&&h!==26&&h!==27||R===null||(v=R,a?(R=na(n,i),R!=null&&o.unshift(ja(n,R,v))):a||(R=na(n,i),R!=null&&o.push(ja(n,R,v)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var U0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function lh(e){return(typeof e=="string"?e:""+e).replace(U0,`
`).replace(B0,"")}function ah(e,t){return t=lh(t),lh(e)===t}function Se(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||pl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&pl(e,""+l);break;case"className":ri(e,"class",l);break;case"tabIndex":ri(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,n,l);break;case"style":no(e,l,i);break;case"data":if(t!=="object"){ri(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=oi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",a.name,a,null),Se(e,t,"formEncType",a.formEncType,a,null),Se(e,t,"formMethod",a.formMethod,a,null),Se(e,t,"formTarget",a.formTarget,a,null)):(Se(e,t,"encType",a.encType,a,null),Se(e,t,"method",a.method,a,null),Se(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=oi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Vt);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=oi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ue("beforetoggle",e),ue("toggle",e),si(e,"popover",l);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":si(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dp.get(n)||n,si(e,n,l))}}function wr(e,t,n,l,a,i){switch(n){case"style":no(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof l=="string"?pl(e,l):(typeof l=="number"||typeof l=="bigint")&&pl(e,""+l);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Vt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[tt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):si(e,n,l)}}}function $e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,i,o,n,null)}}a&&Se(e,t,"srcSet",n.srcSet,n,null),l&&Se(e,t,"src",n.src,n,null);return;case"input":ue("invalid",e);var h=i=o=a=null,v=null,R=null;for(l in n)if(n.hasOwnProperty(l)){var O=n[l];if(O!=null)switch(l){case"name":a=O;break;case"type":o=O;break;case"checked":v=O;break;case"defaultChecked":R=O;break;case"value":i=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:Se(e,t,l,O,n,null)}}Pc(e,i,h,v,R,o,a,!1);return;case"select":ue("invalid",e),l=o=i=null;for(a in n)if(n.hasOwnProperty(a)&&(h=n[a],h!=null))switch(a){case"value":i=h;break;case"defaultValue":o=h;break;case"multiple":l=h;default:Se(e,t,a,h,n,null)}t=i,n=o,e.multiple=!!l,t!=null?ml(e,!!l,t,!1):n!=null&&ml(e,!!l,n,!0);return;case"textarea":ue("invalid",e),i=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(h=n[o],h!=null))switch(o){case"value":l=h;break;case"defaultValue":a=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:Se(e,t,o,h,n,null)}eo(e,l,a,i);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(l=n[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Se(e,t,v,l,n,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(l=0;l<wa.length;l++)ue(wa[l],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(l=n[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,R,l,n,null)}return;default:if(Ku(t)){for(O in n)n.hasOwnProperty(O)&&(l=n[O],l!==void 0&&wr(e,t,O,l,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(l=n[h],l!=null&&Se(e,t,h,l,n,null))}function L0(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,o=null,h=null,v=null,R=null,O=null;for(N in n){var j=n[N];if(n.hasOwnProperty(N)&&j!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=j;default:l.hasOwnProperty(N)||Se(e,t,N,null,l,j)}}for(var C in l){var N=l[C];if(j=n[C],l.hasOwnProperty(C)&&(N!=null||j!=null))switch(C){case"type":i=N;break;case"name":a=N;break;case"checked":R=N;break;case"defaultChecked":O=N;break;case"value":o=N;break;case"defaultValue":h=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==j&&Se(e,t,C,N,l,j)}}Zu(e,o,h,v,R,O,i,a);return;case"select":N=o=h=C=null;for(i in n)if(v=n[i],n.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":N=v;default:l.hasOwnProperty(i)||Se(e,t,i,null,l,v)}for(a in l)if(i=l[a],v=n[a],l.hasOwnProperty(a)&&(i!=null||v!=null))switch(a){case"value":C=i;break;case"defaultValue":h=i;break;case"multiple":o=i;default:i!==v&&Se(e,t,a,i,l,v)}t=h,n=o,l=N,C!=null?ml(e,!!n,C,!1):!!l!=!!n&&(t!=null?ml(e,!!n,t,!0):ml(e,!!n,n?[]:"",!1));return;case"textarea":N=C=null;for(h in n)if(a=n[h],n.hasOwnProperty(h)&&a!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,l,a)}for(o in l)if(a=l[o],i=n[o],l.hasOwnProperty(o)&&(a!=null||i!=null))switch(o){case"value":C=a;break;case"defaultValue":N=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==i&&Se(e,t,o,a,l,i)}Ic(e,C,N);return;case"option":for(var Y in n)if(C=n[Y],n.hasOwnProperty(Y)&&C!=null&&!l.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:Se(e,t,Y,null,l,C)}for(v in l)if(C=l[v],N=n[v],l.hasOwnProperty(v)&&C!==N&&(C!=null||N!=null))switch(v){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Se(e,t,v,C,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in n)C=n[$],n.hasOwnProperty($)&&C!=null&&!l.hasOwnProperty($)&&Se(e,t,$,null,l,C);for(R in l)if(C=l[R],N=n[R],l.hasOwnProperty(R)&&C!==N&&(C!=null||N!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:Se(e,t,R,C,l,N)}return;default:if(Ku(t)){for(var Ee in n)C=n[Ee],n.hasOwnProperty(Ee)&&C!==void 0&&!l.hasOwnProperty(Ee)&&wr(e,t,Ee,void 0,l,C);for(O in l)C=l[O],N=n[O],!l.hasOwnProperty(O)||C===N||C===void 0&&N===void 0||wr(e,t,O,C,l,N);return}}for(var T in n)C=n[T],n.hasOwnProperty(T)&&C!=null&&!l.hasOwnProperty(T)&&Se(e,t,T,null,l,C);for(j in l)C=l[j],N=n[j],!l.hasOwnProperty(j)||C===N||C==null&&N==null||Se(e,t,j,C,l,N)}function ih(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function G0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,o=a.initiatorType,h=a.duration;if(i&&h&&ih(o)){for(o=0,h=a.responseEnd,l+=1;l<n.length;l++){var v=n[l],R=v.startTime;if(R>h)break;var O=v.transferSize,j=v.initiatorType;O&&ih(j)&&(v=v.responseEnd,o+=O*(v<h?1:(h-R)/(v-R)))}if(--l,t+=8*(i+o)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jr=null,Hr=null;function iu(e){return e.nodeType===9?e:e.ownerDocument}function uh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ur(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Br=null;function q0(){var e=window.event;return e&&e.type==="popstate"?e===Br?!1:(Br=e,!0):(Br=null,!1)}var rh=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(e){return ch.resolve(null).then(e).catch(X0)}:rh;function X0(e){setTimeout(function(){throw e})}function jn(e){return e==="head"}function oh(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),Zl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ha(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ha(n);for(var i=n.firstChild;i;){var o=i.nextSibling,h=i.nodeName;i[ea]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Ha(e.ownerDocument.body);n=a}while(n);Zl(t)}function fh(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Lr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Lr(n),Xu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function V0(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ea])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Z0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zt(e.nextSibling),e===null))return null;return e}function dh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Gr(e){return e.data==="$?"||e.data==="$~"}function qr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function J0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qr=null;function hh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function mh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ph(e,t,n){switch(t=iu(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ha(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xu(e)}var Nt=new Map,gh=new Set;function uu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rn=q.d;q.d={f:K0,r:$0,D:W0,C:F0,L:P0,m:I0,X:tg,S:eg,M:ng};function K0(){var e=rn.f(),t=Fi();return e||t}function $0(e){var t=fl(e);t!==null&&t.tag===5&&t.type==="form"?kf(t):rn.r(e)}var Yl=typeof document>"u"?null:document;function yh(e,t,n){var l=Yl;if(l&&typeof t=="string"&&t){var a=St(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),gh.has(a)||(gh.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),$e(t,"link",e),Qe(t),l.head.appendChild(t)))}}function W0(e){rn.D(e),yh("dns-prefetch",e,null)}function F0(e,t){rn.C(e,t),yh("preconnect",e,t)}function P0(e,t,n){rn.L(e,t,n);var l=Yl;if(l&&e&&t){var a='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+St(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+St(n.imageSizes)+'"]')):a+='[href="'+St(e)+'"]';var i=a;switch(t){case"style":i=Xl(e);break;case"script":i=Vl(e)}Nt.has(i)||(e=A({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Nt.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ua(i))||t==="script"&&l.querySelector(Ba(i))||(t=l.createElement("link"),$e(t,"link",e),Qe(t),l.head.appendChild(t)))}}function I0(e,t){rn.m(e,t);var n=Yl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Vl(e)}if(!Nt.has(i)&&(e=A({rel:"modulepreload",href:e},t),Nt.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ba(i)))return}l=n.createElement("link"),$e(l,"link",e),Qe(l),n.head.appendChild(l)}}}function eg(e,t,n){rn.S(e,t,n);var l=Yl;if(l&&e){var a=dl(l).hoistableStyles,i=Xl(e);t=t||"default";var o=a.get(i);if(!o){var h={loading:0,preload:null};if(o=l.querySelector(Ua(i)))h.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nt.get(i))&&Yr(e,n);var v=o=l.createElement("link");Qe(v),$e(v,"link",e),v._p=new Promise(function(R,O){v.onload=R,v.onerror=O}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,su(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:h},a.set(i,o)}}}function tg(e,t){rn.X(e,t);var n=Yl;if(n&&e){var l=dl(n).hoistableScripts,a=Vl(e),i=l.get(a);i||(i=n.querySelector(Ba(a)),i||(e=A({src:e,async:!0},t),(t=Nt.get(a))&&Xr(e,t),i=n.createElement("script"),Qe(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function ng(e,t){rn.M(e,t);var n=Yl;if(n&&e){var l=dl(n).hoistableScripts,a=Vl(e),i=l.get(a);i||(i=n.querySelector(Ba(a)),i||(e=A({src:e,async:!0,type:"module"},t),(t=Nt.get(a))&&Xr(e,t),i=n.createElement("script"),Qe(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function bh(e,t,n,l){var a=(a=ae.current)?uu(a):null;if(!a)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Xl(n.href),n=dl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Xl(n.href);var i=dl(a).hoistableStyles,o=i.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=a.querySelector(Ua(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nt.set(e,n),i||lg(a,e,n,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vl(n),n=dl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Xl(e){return'href="'+St(e)+'"'}function Ua(e){return'link[rel="stylesheet"]['+e+"]"}function vh(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function lg(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",n),Qe(t),e.head.appendChild(t))}function Vl(e){return'[src="'+St(e)+'"]'}function Ba(e){return"script[async]"+e}function xh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+St(n.href)+'"]');if(l)return t.instance=l,Qe(l),l;var a=A({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qe(l),$e(l,"style",a),su(l,n.precedence,e),t.instance=l;case"stylesheet":a=Xl(n.href);var i=e.querySelector(Ua(a));if(i)return t.state.loading|=4,t.instance=i,Qe(i),i;l=vh(n),(a=Nt.get(a))&&Yr(l,a),i=(e.ownerDocument||e).createElement("link"),Qe(i);var o=i;return o._p=new Promise(function(h,v){o.onload=h,o.onerror=v}),$e(i,"link",l),t.state.loading|=4,su(i,n.precedence,e),t.instance=i;case"script":return i=Vl(n.src),(a=e.querySelector(Ba(i)))?(t.instance=a,Qe(a),a):(l=n,(a=Nt.get(i))&&(l=A({},n),Xr(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Qe(a),$e(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,su(l,n.precedence,e));return t.instance}function su(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,o=0;o<l.length;o++){var h=l[o];if(h.dataset.precedence===t)i=h;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ru=null;function Sh(e,t,n){if(ru===null){var l=new Map,a=ru=new Map;a.set(n,l)}else a=ru,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[ea]||i[Ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var h=l.get(o);h?h.push(i):l.set(o,[i])}}return l}function Eh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ag(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ah(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ig(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Xl(l.href),i=t.querySelector(Ua(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=cu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Qe(i);return}i=t.ownerDocument||t,l=vh(l),(a=Nt.get(a))&&Yr(l,a),i=i.createElement("link"),Qe(i);var o=i;o._p=new Promise(function(h,v){o.onload=h,o.onerror=v}),$e(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=cu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Vr=0;function ug(e,t){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Vr===0&&(Vr=62500*G0());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Vr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,t.forEach(sg,e),ou=null,cu.call(e))}function sg(e,t){if(!(t.state.loading&4)){var n=ou.get(e);if(n)var l=n.get(null);else{n=new Map,ou.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),i=n.get(o)||l,i===l&&n.set(null,a),n.set(o,a),this.count++,l=cu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var La={$$typeof:H,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function rg(e,t,n,l,a,i,o,h,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.hiddenUpdates=Gu(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Th(e,t,n,l,a,i,o,h,v,R,O,j){return e=new rg(e,t,n,o,v,R,O,j,h),t=1,i===!0&&(t|=24),i=dt(3,null,null,t),e.current=i,i.stateNode=e,t=Ts(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},zs(i),e}function _h(e){return e?(e=El,e):El}function Rh(e,t,n,l,a,i){a=_h(a),l.context===null?l.context=a:l.pendingContext=a,l=Tn(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=_n(e,l,t),n!==null&&(st(n,e,t),ya(n,e,t))}function Ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zr(e,t){Ch(e,t),(e=e.alternate)&&Ch(e,t)}function zh(e){if(e.tag===13||e.tag===31){var t=Kn(e,67108864);t!==null&&st(t,e,67108864),Zr(e,67108864)}}function Nh(e){if(e.tag===13||e.tag===31){var t=yt();t=qu(t);var n=Kn(e,t);n!==null&&st(n,e,t),Zr(e,t)}}var du=!0;function cg(e,t,n,l){var a=k.T;k.T=null;var i=q.p;try{q.p=2,Jr(e,t,n,l)}finally{q.p=i,k.T=a}}function og(e,t,n,l){var a=k.T;k.T=null;var i=q.p;try{q.p=8,Jr(e,t,n,l)}finally{q.p=i,k.T=a}}function Jr(e,t,n,l){if(du){var a=Kr(l);if(a===null)kr(e,t,l,hu,n),Dh(e,l);else if(dg(a,e,t,n,l))l.stopPropagation();else if(Dh(e,l),t&4&&-1<fg.indexOf(e)){for(;a!==null;){var i=fl(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Yn(i.pendingLanes);if(o!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;o;){var v=1<<31-ot(o);h.entanglements[1]|=v,o&=~v}Qt(i),(me&6)===0&&($i=rt()+500,ka(0))}}break;case 31:case 13:h=Kn(i,2),h!==null&&st(h,i,2),Fi(),Zr(i,2)}if(i=Kr(l),i===null&&kr(e,t,l,hu,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else kr(e,t,l,null,n)}}function Kr(e){return e=Wu(e),$r(e)}var hu=null;function $r(e){if(hu=null,e=ol(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hu=e,null}function Mh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wm()){case Hc:return 2;case Uc:return 8;case ni:case Fm:return 32;case Bc:return 268435456;default:return 32}default:return 32}}var Wr=!1,Hn=null,Un=null,Bn=null,Ga=new Map,qa=new Map,Ln=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dh(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Ga.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(t.pointerId)}}function Qa(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=fl(t),t!==null&&zh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function dg(e,t,n,l,a){switch(t){case"focusin":return Hn=Qa(Hn,e,t,n,l,a),!0;case"dragenter":return Un=Qa(Un,e,t,n,l,a),!0;case"mouseover":return Bn=Qa(Bn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Ga.set(i,Qa(Ga.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,qa.set(i,Qa(qa.get(i)||null,e,t,n,l,a)),!0}return!1}function Oh(e){var t=ol(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Xc(e.priority,function(){Nh(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Xc(e.priority,function(){Nh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kr(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);$u=l,n.target.dispatchEvent(l),$u=null}else return t=fl(n),t!==null&&zh(t),e.blockedOn=n,!1;t.shift()}return!0}function kh(e,t,n){mu(e)&&n.delete(t)}function hg(){Wr=!1,Hn!==null&&mu(Hn)&&(Hn=null),Un!==null&&mu(Un)&&(Un=null),Bn!==null&&mu(Bn)&&(Bn=null),Ga.forEach(kh),qa.forEach(kh)}function pu(e,t){e.blockedOn===t&&(e.blockedOn=null,Wr||(Wr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,hg)))}var gu=null;function wh(e){gu!==e&&(gu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if($r(l||n)===null)continue;break}var i=fl(n);i!==null&&(e.splice(t,3),t-=3,Ks(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Zl(e){function t(v){return pu(v,e)}Hn!==null&&pu(Hn,e),Un!==null&&pu(Un,e),Bn!==null&&pu(Bn,e),Ga.forEach(t),qa.forEach(t);for(var n=0;n<Ln.length;n++){var l=Ln[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)Oh(n),n.blockedOn===null&&Ln.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],o=a[tt]||null;if(typeof i=="function")o||wh(n);else if(o){var h=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[tt]||null)h=o.formAction;else if($r(a)!==null)continue}else h=o.action;typeof h=="function"?n[l+1]=h:(n.splice(l,3),l-=3),wh(n)}}}function jh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Fr(e){this._internalRoot=e}yu.prototype.render=Fr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,l=yt();Rh(n,l,e,t,null,null)},yu.prototype.unmount=Fr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rh(e.current,2,null,e,null,null),Fi(),t[cl]=null}};function yu(e){this._internalRoot=e}yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&Oh(e)}};var Hh=s.version;if(Hh!=="19.2.3")throw Error(c(527,Hh,"19.2.3"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var mg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{Fl=bu.inject(mg),ct=bu}catch{}}return Xa.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,l="",a=Yf,i=Xf,o=Vf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Th(e,1,!1,null,null,n,l,null,a,i,o,jh),e[cl]=t.current,Or(e),new Fr(t)},Xa.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var l=!1,a="",i=Yf,o=Xf,h=Vf,v=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=Th(e,1,!0,t,n??null,l,a,v,i,o,h,jh),t.context=_h(null),n=t.current,l=yt(),l=qu(l),a=Tn(l),a.callback=null,_n(n,a,l),n=l,t.current.lanes=n,Il(t,n),Qt(t),e[cl]=t.current,Or(e),new yu(t)},Xa.version="19.2.3",Xa}var Zh;function Cg(){if(Zh)return ec.exports;Zh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),ec.exports=Rg(),ec.exports}var zg=Cg();const Ng=pm(zg);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jh="popstate";function Mg(u={}){function s(c,f){let{pathname:d,search:p,hash:g}=c.location;return oc("",{pathname:d,search:p,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function r(c,f){return typeof f=="string"?f:Fa(f)}return Og(s,r,null,u)}function Ne(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function Ut(u,s){if(!u){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Dg(){return Math.random().toString(36).substring(2,10)}function Kh(u,s){return{usr:u.state,key:u.key,idx:s}}function oc(u,s,r=null,c){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof s=="string"?Jl(s):s,state:r,key:s&&s.key||c||Dg()}}function Fa({pathname:u="/",search:s="",hash:r=""}){return s&&s!=="?"&&(u+=s.charAt(0)==="?"?s:"?"+s),r&&r!=="#"&&(u+=r.charAt(0)==="#"?r:"#"+r),u}function Jl(u){let s={};if(u){let r=u.indexOf("#");r>=0&&(s.hash=u.substring(r),u=u.substring(0,r));let c=u.indexOf("?");c>=0&&(s.search=u.substring(c),u=u.substring(0,c)),u&&(s.pathname=u)}return s}function Og(u,s,r,c={}){let{window:f=document.defaultView,v5Compat:d=!1}=c,p=f.history,g="POP",b=null,m=E();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function E(){return(p.state||{idx:null}).idx}function A(){g="POP";let L=E(),X=L==null?null:L-m;m=L,b&&b({action:g,location:B.location,delta:X})}function D(L,X){g="PUSH";let K=oc(B.location,L,X);m=E()+1;let H=Kh(K,m),P=B.createHref(K);try{p.pushState(H,"",P)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;f.location.assign(P)}d&&b&&b({action:g,location:B.location,delta:1})}function M(L,X){g="REPLACE";let K=oc(B.location,L,X);m=E();let H=Kh(K,m),P=B.createHref(K);p.replaceState(H,"",P),d&&b&&b({action:g,location:B.location,delta:0})}function G(L){return kg(L)}let B={get action(){return g},get location(){return u(f,p)},listen(L){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(Jh,A),b=L,()=>{f.removeEventListener(Jh,A),b=null}},createHref(L){return s(f,L)},createURL:G,encodeLocation(L){let X=G(L);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:D,replace:M,go(L){return p.go(L)}};return B}function kg(u,s=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(r,"No window.location.(origin|href) available to create URL");let c=typeof u=="string"?u:Fa(u);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=r+c),new URL(c,r)}function gm(u,s,r="/"){return wg(u,s,r,!1)}function wg(u,s,r,c){let f=typeof s=="string"?Jl(s):s,d=mn(f.pathname||"/",r);if(d==null)return null;let p=ym(u);jg(p);let g=null;for(let b=0;g==null&&b<p.length;++b){let m=Zg(d);g=Xg(p[b],m,c)}return g}function ym(u,s=[],r=[],c="",f=!1){let d=(p,g,b=f,m)=>{let E={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(c)&&b)return;Ne(E.relativePath.startsWith(c),`Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(c.length)}let A=hn([c,E.relativePath]),D=r.concat(E);p.children&&p.children.length>0&&(Ne(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),ym(p.children,s,D,A,b)),!(p.path==null&&!p.index)&&s.push({path:A,score:Qg(A,p.index),routesMeta:D})};return u.forEach((p,g)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))d(p,g);else for(let m of bm(p.path))d(p,g,!0,m)}),s}function bm(u){let s=u.split("/");if(s.length===0)return[];let[r,...c]=s,f=r.endsWith("?"),d=r.replace(/\?$/,"");if(c.length===0)return f?[d,""]:[d];let p=bm(c.join("/")),g=[];return g.push(...p.map(b=>b===""?d:[d,b].join("/"))),f&&g.push(...p),g.map(b=>u.startsWith("/")&&b===""?"/":b)}function jg(u){u.sort((s,r)=>s.score!==r.score?r.score-s.score:Yg(s.routesMeta.map(c=>c.childrenIndex),r.routesMeta.map(c=>c.childrenIndex)))}var Hg=/^:[\w-]+$/,Ug=3,Bg=2,Lg=1,Gg=10,qg=-2,$h=u=>u==="*";function Qg(u,s){let r=u.split("/"),c=r.length;return r.some($h)&&(c+=qg),s&&(c+=Bg),r.filter(f=>!$h(f)).reduce((f,d)=>f+(Hg.test(d)?Ug:d===""?Lg:Gg),c)}function Yg(u,s){return u.length===s.length&&u.slice(0,-1).every((c,f)=>c===s[f])?u[u.length-1]-s[s.length-1]:0}function Xg(u,s,r=!1){let{routesMeta:c}=u,f={},d="/",p=[];for(let g=0;g<c.length;++g){let b=c[g],m=g===c.length-1,E=d==="/"?s:s.slice(d.length)||"/",A=_u({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},E),D=b.route;if(!A&&m&&r&&!c[c.length-1].route.index&&(A=_u({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},E)),!A)return null;Object.assign(f,A.params),p.push({params:f,pathname:hn([d,A.pathname]),pathnameBase:Wg(hn([d,A.pathnameBase])),route:D}),A.pathnameBase!=="/"&&(d=hn([d,A.pathnameBase]))}return p}function _u(u,s){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[r,c]=Vg(u.path,u.caseSensitive,u.end),f=s.match(r);if(!f)return null;let d=f[0],p=d.replace(/(.)\/+$/,"$1"),g=f.slice(1);return{params:c.reduce((m,{paramName:E,isOptional:A},D)=>{if(E==="*"){let G=g[D]||"";p=d.slice(0,d.length-G.length).replace(/(.)\/+$/,"$1")}const M=g[D];return A&&!M?m[E]=void 0:m[E]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:p,pattern:u}}function Vg(u,s=!1,r=!0){Ut(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],f="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,b)=>(c.push({paramName:g,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(c.push({paramName:"*"}),f+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?f+="\\/*$":u!==""&&u!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),c]}function Zg(u){try{return u.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Ut(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),u}}function mn(u,s){if(s==="/")return u;if(!u.toLowerCase().startsWith(s.toLowerCase()))return null;let r=s.endsWith("/")?s.length-1:s.length,c=u.charAt(r);return c&&c!=="/"?null:u.slice(r)||"/"}var Jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Kg(u,s="/"){let{pathname:r,search:c="",hash:f=""}=typeof u=="string"?Jl(u):u,d;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?d=Wh(r.substring(1),"/"):d=Wh(r,s)):d=s,{pathname:d,search:Fg(c),hash:Pg(f)}}function Wh(u,s){let r=s.replace(/\/+$/,"").split("/");return u.split("/").forEach(f=>{f===".."?r.length>1&&r.pop():f!=="."&&r.push(f)}),r.length>1?r.join("/"):"/"}function ac(u,s,r,c){return`Cannot include a '${u}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $g(u){return u.filter((s,r)=>r===0||s.route.path&&s.route.path.length>0)}function yc(u){let s=$g(u);return s.map((r,c)=>c===s.length-1?r.pathname:r.pathnameBase)}function bc(u,s,r,c=!1){let f;typeof u=="string"?f=Jl(u):(f={...u},Ne(!f.pathname||!f.pathname.includes("?"),ac("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),ac("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),ac("#","search","hash",f)));let d=u===""||f.pathname==="",p=d?"/":f.pathname,g;if(p==null)g=r;else{let A=s.length-1;if(!c&&p.startsWith("..")){let D=p.split("/");for(;D[0]==="..";)D.shift(),A-=1;f.pathname=D.join("/")}g=A>=0?s[A]:"/"}let b=Kg(f,g),m=p&&p!=="/"&&p.endsWith("/"),E=(d||p===".")&&r.endsWith("/");return!b.pathname.endsWith("/")&&(m||E)&&(b.pathname+="/"),b}var hn=u=>u.join("/").replace(/\/\/+/g,"/"),Wg=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),Fg=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Pg=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Ig=class{constructor(u,s,r,c=!1){this.status=u,this.statusText=s||"",this.internal=c,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function ey(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function ty(u){return u.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xm(u,s){let r=u;if(typeof r!="string"||!Jg.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let c=r,f=!1;if(vm)try{let d=new URL(window.location.href),p=r.startsWith("//")?new URL(d.protocol+r):new URL(r),g=mn(p.pathname,s);p.origin===d.origin&&g!=null?r=g+p.search+p.hash:f=!0}catch{Ut(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sm=["POST","PUT","PATCH","DELETE"];new Set(Sm);var ny=["GET",...Sm];new Set(ny);var Kl=z.createContext(null);Kl.displayName="DataRouter";var Mu=z.createContext(null);Mu.displayName="DataRouterState";var ly=z.createContext(!1),Em=z.createContext({isTransitioning:!1});Em.displayName="ViewTransition";var ay=z.createContext(new Map);ay.displayName="Fetchers";var iy=z.createContext(null);iy.displayName="Await";var bt=z.createContext(null);bt.displayName="Navigation";var Pa=z.createContext(null);Pa.displayName="Location";var Mt=z.createContext({outlet:null,matches:[],isDataRoute:!1});Mt.displayName="Route";var vc=z.createContext(null);vc.displayName="RouteError";var Am="REACT_ROUTER_ERROR",uy="REDIRECT",sy="ROUTE_ERROR_RESPONSE";function ry(u){if(u.startsWith(`${Am}:${uy}:{`))try{let s=JSON.parse(u.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function cy(u){if(u.startsWith(`${Am}:${sy}:{`))try{let s=JSON.parse(u.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Ig(s.status,s.statusText,s.data)}catch{}}function oy(u,{relative:s}={}){Ne($l(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:c}=z.useContext(bt),{hash:f,pathname:d,search:p}=Ia(u,{relative:s}),g=d;return r!=="/"&&(g=d==="/"?r:hn([r,d])),c.createHref({pathname:g,search:p,hash:f})}function $l(){return z.useContext(Pa)!=null}function pn(){return Ne($l(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Pa).location}var Tm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _m(u){z.useContext(bt).static||z.useLayoutEffect(u)}function Rm(){let{isDataRoute:u}=z.useContext(Mt);return u?Ry():fy()}function fy(){Ne($l(),"useNavigate() may be used only in the context of a <Router> component.");let u=z.useContext(Kl),{basename:s,navigator:r}=z.useContext(bt),{matches:c}=z.useContext(Mt),{pathname:f}=pn(),d=JSON.stringify(yc(c)),p=z.useRef(!1);return _m(()=>{p.current=!0}),z.useCallback((b,m={})=>{if(Ut(p.current,Tm),!p.current)return;if(typeof b=="number"){r.go(b);return}let E=bc(b,JSON.parse(d),f,m.relative==="path");u==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:hn([s,E.pathname])),(m.replace?r.replace:r.push)(E,m.state,m)},[s,r,d,f,u])}var dy=z.createContext(null);function hy(u){let s=z.useContext(Mt).outlet;return z.useMemo(()=>s&&z.createElement(dy.Provider,{value:u},s),[s,u])}function my(){let{matches:u}=z.useContext(Mt),s=u[u.length-1];return s?s.params:{}}function Ia(u,{relative:s}={}){let{matches:r}=z.useContext(Mt),{pathname:c}=pn(),f=JSON.stringify(yc(r));return z.useMemo(()=>bc(u,JSON.parse(f),c,s==="path"),[u,f,c,s])}function py(u,s){return Cm(u,s)}function Cm(u,s,r,c,f){var K;Ne($l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=z.useContext(bt),{matches:p}=z.useContext(Mt),g=p[p.length-1],b=g?g.params:{},m=g?g.pathname:"/",E=g?g.pathnameBase:"/",A=g&&g.route;{let H=A&&A.path||"";Nm(m,!A||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let D=pn(),M;if(s){let H=typeof s=="string"?Jl(s):s;Ne(E==="/"||((K=H.pathname)==null?void 0:K.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${H.pathname}" was given in the \`location\` prop.`),M=H}else M=D;let G=M.pathname||"/",B=G;if(E!=="/"){let H=E.replace(/^\//,"").split("/");B="/"+G.replace(/^\//,"").split("/").slice(H.length).join("/")}let L=gm(u,{pathname:B});Ut(A||L!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ut(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=xy(L&&L.map(H=>Object.assign({},H,{params:Object.assign({},b,H.params),pathname:hn([E,d.encodeLocation?d.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?E:hn([E,d.encodeLocation?d.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),p,r,c,f);return s&&X?z.createElement(Pa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},X):X}function gy(){let u=_y(),s=ey(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),r=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",u),p=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:d},"ErrorBoundary")," or"," ",z.createElement("code",{style:d},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},s),r?z.createElement("pre",{style:f},r):null,p)}var yy=z.createElement(gy,null),zm=class extends z.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,s){return s.location!==u.location||s.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:s.error,location:s.location,revalidation:u.revalidation||s.revalidation}}componentDidCatch(u,s){this.props.onError?this.props.onError(u,s):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const r=cy(u.digest);r&&(u=r)}let s=u!==void 0?z.createElement(Mt.Provider,{value:this.props.routeContext},z.createElement(vc.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?z.createElement(by,{error:u},s):s}};zm.contextType=ly;var ic=new WeakMap;function by({children:u,error:s}){let{basename:r}=z.useContext(bt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let c=ry(s.digest);if(c){let f=ic.get(s);if(f)throw f;let d=xm(c.location,r);if(vm&&!ic.get(s))if(d.isExternal||c.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:c.replace}));throw ic.set(s,p),p}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return u}function vy({routeContext:u,match:s,children:r}){let c=z.useContext(Kl);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),z.createElement(Mt.Provider,{value:u},r)}function xy(u,s=[],r=null,c=null,f=null){if(u==null){if(!r)return null;if(r.errors)u=r.matches;else if(s.length===0&&!r.initialized&&r.matches.length>0)u=r.matches;else return null}let d=u,p=r==null?void 0:r.errors;if(p!=null){let E=d.findIndex(A=>A.route.id&&(p==null?void 0:p[A.route.id])!==void 0);Ne(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,E+1))}let g=!1,b=-1;if(r)for(let E=0;E<d.length;E++){let A=d[E];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(b=E),A.route.id){let{loaderData:D,errors:M}=r,G=A.route.loader&&!D.hasOwnProperty(A.route.id)&&(!M||M[A.route.id]===void 0);if(A.route.lazy||G){g=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}let m=r&&c?(E,A)=>{var D,M;c(E,{location:r.location,params:((M=(D=r.matches)==null?void 0:D[0])==null?void 0:M.params)??{},unstable_pattern:ty(r.matches),errorInfo:A})}:void 0;return d.reduceRight((E,A,D)=>{let M,G=!1,B=null,L=null;r&&(M=p&&A.route.id?p[A.route.id]:void 0,B=A.route.errorElement||yy,g&&(b<0&&D===0?(Nm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,L=null):b===D&&(G=!0,L=A.route.hydrateFallbackElement||null)));let X=s.concat(d.slice(0,D+1)),K=()=>{let H;return M?H=B:G?H=L:A.route.Component?H=z.createElement(A.route.Component,null):A.route.element?H=A.route.element:H=E,z.createElement(vy,{match:A,routeContext:{outlet:E,matches:X,isDataRoute:r!=null},children:H})};return r&&(A.route.ErrorBoundary||A.route.errorElement||D===0)?z.createElement(zm,{location:r.location,revalidation:r.revalidation,component:B,error:M,children:K(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:m}):K()},null)}function xc(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sy(u){let s=z.useContext(Kl);return Ne(s,xc(u)),s}function Ey(u){let s=z.useContext(Mu);return Ne(s,xc(u)),s}function Ay(u){let s=z.useContext(Mt);return Ne(s,xc(u)),s}function Sc(u){let s=Ay(u),r=s.matches[s.matches.length-1];return Ne(r.route.id,`${u} can only be used on routes that contain a unique "id"`),r.route.id}function Ty(){return Sc("useRouteId")}function _y(){var c;let u=z.useContext(vc),s=Ey("useRouteError"),r=Sc("useRouteError");return u!==void 0?u:(c=s.errors)==null?void 0:c[r]}function Ry(){let{router:u}=Sy("useNavigate"),s=Sc("useNavigate"),r=z.useRef(!1);return _m(()=>{r.current=!0}),z.useCallback(async(f,d={})=>{Ut(r.current,Tm),r.current&&(typeof f=="number"?await u.navigate(f):await u.navigate(f,{fromRouteId:s,...d}))},[u,s])}var Fh={};function Nm(u,s,r){!s&&!Fh[u]&&(Fh[u]=!0,Ut(!1,r))}z.memo(Cy);function Cy({routes:u,future:s,state:r,onError:c}){return Cm(u,void 0,r,c,s)}function zy({to:u,replace:s,state:r,relative:c}){Ne($l(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=z.useContext(bt);Ut(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=z.useContext(Mt),{pathname:p}=pn(),g=Rm(),b=bc(u,yc(d),p,c==="path"),m=JSON.stringify(b);return z.useEffect(()=>{g(JSON.parse(m),{replace:s,state:r,relative:c})},[g,m,c,s,r]),null}function Ny(u){return hy(u.context)}function on(u){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function My({basename:u="/",children:s=null,location:r,navigationType:c="POP",navigator:f,static:d=!1,unstable_useTransitions:p}){Ne(!$l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=u.replace(/^\/*/,"/"),b=z.useMemo(()=>({basename:g,navigator:f,static:d,unstable_useTransitions:p,future:{}}),[g,f,d,p]);typeof r=="string"&&(r=Jl(r));let{pathname:m="/",search:E="",hash:A="",state:D=null,key:M="default"}=r,G=z.useMemo(()=>{let B=mn(m,g);return B==null?null:{location:{pathname:B,search:E,hash:A,state:D,key:M},navigationType:c}},[g,m,E,A,D,M,c]);return Ut(G!=null,`<Router basename="${g}"> is not able to match the URL "${m}${E}${A}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:z.createElement(bt.Provider,{value:b},z.createElement(Pa.Provider,{children:s,value:G}))}function Dy({children:u,location:s}){return py(fc(u),s)}function fc(u,s=[]){let r=[];return z.Children.forEach(u,(c,f)=>{if(!z.isValidElement(c))return;let d=[...s,f];if(c.type===z.Fragment){r.push.apply(r,fc(c.props.children,d));return}Ne(c.type===on,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=fc(c.props.children,d)),r.push(p)}),r}var Eu="get",Au="application/x-www-form-urlencoded";function Du(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Oy(u){return Du(u)&&u.tagName.toLowerCase()==="button"}function ky(u){return Du(u)&&u.tagName.toLowerCase()==="form"}function wy(u){return Du(u)&&u.tagName.toLowerCase()==="input"}function jy(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Hy(u,s){return u.button===0&&(!s||s==="_self")&&!jy(u)}var vu=null;function Uy(){if(vu===null)try{new FormData(document.createElement("form"),0),vu=!1}catch{vu=!0}return vu}var By=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uc(u){return u!=null&&!By.has(u)?(Ut(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Au}"`),null):u}function Ly(u,s){let r,c,f,d,p;if(ky(u)){let g=u.getAttribute("action");c=g?mn(g,s):null,r=u.getAttribute("method")||Eu,f=uc(u.getAttribute("enctype"))||Au,d=new FormData(u)}else if(Oy(u)||wy(u)&&(u.type==="submit"||u.type==="image")){let g=u.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=u.getAttribute("formaction")||g.getAttribute("action");if(c=b?mn(b,s):null,r=u.getAttribute("formmethod")||g.getAttribute("method")||Eu,f=uc(u.getAttribute("formenctype"))||uc(g.getAttribute("enctype"))||Au,d=new FormData(g,u),!Uy()){let{name:m,type:E,value:A}=u;if(E==="image"){let D=m?`${m}.`:"";d.append(`${D}x`,"0"),d.append(`${D}y`,"0")}else m&&d.append(m,A)}}else{if(Du(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Eu,c=null,f=Au,p=u}return d&&f==="text/plain"&&(p=d,d=void 0),{action:c,method:r.toLowerCase(),encType:f,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ec(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function Gy(u,s,r,c){let f=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return r?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:s&&mn(f.pathname,s)==="/"?f.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function qy(u,s){if(u.id in s)return s[u.id];try{let r=await import(u.module);return s[u.id]=r,r}catch(r){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qy(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Yy(u,s,r){let c=await Promise.all(u.map(async f=>{let d=s.routes[f.route.id];if(d){let p=await qy(d,r);return p.links?p.links():[]}return[]}));return Jy(c.flat(1).filter(Qy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Ph(u,s,r,c,f,d){let p=(b,m)=>r[m]?b.route.id!==r[m].route.id:!0,g=(b,m)=>{var E;return r[m].pathname!==b.pathname||((E=r[m].route.path)==null?void 0:E.endsWith("*"))&&r[m].params["*"]!==b.params["*"]};return d==="assets"?s.filter((b,m)=>p(b,m)||g(b,m)):d==="data"?s.filter((b,m)=>{var A;let E=c.routes[b.route.id];if(!E||!E.hasLoader)return!1;if(p(b,m)||g(b,m))return!0;if(b.route.shouldRevalidate){let D=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((A=r[0])==null?void 0:A.params)||{},nextUrl:new URL(u,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Xy(u,s,{includeHydrateFallback:r}={}){return Vy(u.map(c=>{let f=s.routes[c.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),r&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function Vy(u){return[...new Set(u)]}function Zy(u){let s={},r=Object.keys(u).sort();for(let c of r)s[c]=u[c];return s}function Jy(u,s){let r=new Set;return new Set(s),u.reduce((c,f)=>{let d=JSON.stringify(Zy(f));return r.has(d)||(r.add(d),c.push({key:d,link:f})),c},[])}function Mm(){let u=z.useContext(Kl);return Ec(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Ky(){let u=z.useContext(Mu);return Ec(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Ac=z.createContext(void 0);Ac.displayName="FrameworkContext";function Dm(){let u=z.useContext(Ac);return Ec(u,"You must render this element inside a <HydratedRouter> element"),u}function $y(u,s){let r=z.useContext(Ac),[c,f]=z.useState(!1),[d,p]=z.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:m,onMouseLeave:E,onTouchStart:A}=s,D=z.useRef(null);z.useEffect(()=>{if(u==="render"&&p(!0),u==="viewport"){let B=X=>{X.forEach(K=>{p(K.isIntersecting)})},L=new IntersectionObserver(B,{threshold:.5});return D.current&&L.observe(D.current),()=>{L.disconnect()}}},[u]),z.useEffect(()=>{if(c){let B=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(B)}}},[c]);let M=()=>{f(!0)},G=()=>{f(!1),p(!1)};return r?u!=="intent"?[d,D,{}]:[d,D,{onFocus:Va(g,M),onBlur:Va(b,G),onMouseEnter:Va(m,M),onMouseLeave:Va(E,G),onTouchStart:Va(A,M)}]:[!1,D,{}]}function Va(u,s){return r=>{u&&u(r),r.defaultPrevented||s(r)}}function Wy({page:u,...s}){let{router:r}=Mm(),c=z.useMemo(()=>gm(r.routes,u,r.basename),[r.routes,u,r.basename]);return c?z.createElement(Py,{page:u,matches:c,...s}):null}function Fy(u){let{manifest:s,routeModules:r}=Dm(),[c,f]=z.useState([]);return z.useEffect(()=>{let d=!1;return Yy(u,s,r).then(p=>{d||f(p)}),()=>{d=!0}},[u,s,r]),c}function Py({page:u,matches:s,...r}){let c=pn(),{future:f,manifest:d,routeModules:p}=Dm(),{basename:g}=Mm(),{loaderData:b,matches:m}=Ky(),E=z.useMemo(()=>Ph(u,s,m,d,c,"data"),[u,s,m,d,c]),A=z.useMemo(()=>Ph(u,s,m,d,c,"assets"),[u,s,m,d,c]),D=z.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let B=new Set,L=!1;if(s.forEach(K=>{var P;let H=d.routes[K.route.id];!H||!H.hasLoader||(!E.some(ee=>ee.route.id===K.route.id)&&K.route.id in b&&((P=p[K.route.id])!=null&&P.shouldRevalidate)||H.hasClientLoader?L=!0:B.add(K.route.id))}),B.size===0)return[];let X=Gy(u,g,f.unstable_trailingSlashAwareDataRequests,"data");return L&&B.size>0&&X.searchParams.set("_routes",s.filter(K=>B.has(K.route.id)).map(K=>K.route.id).join(",")),[X.pathname+X.search]},[g,f.unstable_trailingSlashAwareDataRequests,b,c,d,E,s,u,p]),M=z.useMemo(()=>Xy(A,d),[A,d]),G=Fy(A);return z.createElement(z.Fragment,null,D.map(B=>z.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...r})),M.map(B=>z.createElement("link",{key:B,rel:"modulepreload",href:B,...r})),G.map(({key:B,link:L})=>z.createElement("link",{key:B,nonce:r.nonce,...L,crossOrigin:L.crossOrigin??r.crossOrigin})))}function Iy(...u){return s=>{u.forEach(r=>{typeof r=="function"?r(s):r!=null&&(r.current=s)})}}var eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eb&&(window.__reactRouterVersion="7.13.0")}catch{}function tb({basename:u,children:s,unstable_useTransitions:r,window:c}){let f=z.useRef();f.current==null&&(f.current=Mg({window:c,v5Compat:!0}));let d=f.current,[p,g]=z.useState({action:d.action,location:d.location}),b=z.useCallback(m=>{r===!1?g(m):z.startTransition(()=>g(m))},[r]);return z.useLayoutEffect(()=>d.listen(b),[d,b]),z.createElement(My,{basename:u,children:s,location:p.location,navigationType:p.action,navigator:d,unstable_useTransitions:r})}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dn=z.forwardRef(function({onClick:s,discover:r="render",prefetch:c="none",relative:f,reloadDocument:d,replace:p,state:g,target:b,to:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:D,...M},G){let{basename:B,unstable_useTransitions:L}=z.useContext(bt),X=typeof m=="string"&&Om.test(m),K=xm(m,B);m=K.to;let H=oy(m,{relative:f}),[P,ee,se]=$y(c,M),W=ab(m,{replace:p,state:g,target:b,preventScrollReset:E,relative:f,viewTransition:A,unstable_defaultShouldRevalidate:D,unstable_useTransitions:L});function ke(vt){s&&s(vt),vt.defaultPrevented||W(vt)}let Xe=z.createElement("a",{...M,...se,href:K.absoluteURL||H,onClick:K.isExternal||d?s:ke,ref:Iy(G,ee),target:b,"data-discover":!X&&r==="render"?"true":void 0});return P&&!X?z.createElement(z.Fragment,null,Xe,z.createElement(Wy,{page:H})):Xe});dn.displayName="Link";var Tu=z.forwardRef(function({"aria-current":s="page",caseSensitive:r=!1,className:c="",end:f=!1,style:d,to:p,viewTransition:g,children:b,...m},E){let A=Ia(p,{relative:m.relative}),D=pn(),M=z.useContext(Mu),{navigator:G,basename:B}=z.useContext(bt),L=M!=null&&cb(A)&&g===!0,X=G.encodeLocation?G.encodeLocation(A).pathname:A.pathname,K=D.pathname,H=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;r||(K=K.toLowerCase(),H=H?H.toLowerCase():null,X=X.toLowerCase()),H&&B&&(H=mn(H,B)||H);const P=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let ee=K===X||!f&&K.startsWith(X)&&K.charAt(P)==="/",se=H!=null&&(H===X||!f&&H.startsWith(X)&&H.charAt(X.length)==="/"),W={isActive:ee,isPending:se,isTransitioning:L},ke=ee?s:void 0,Xe;typeof c=="function"?Xe=c(W):Xe=[c,ee?"active":null,se?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let vt=typeof d=="function"?d(W):d;return z.createElement(dn,{...m,"aria-current":ke,className:Xe,ref:E,style:vt,to:p,viewTransition:g},typeof b=="function"?b(W):b)});Tu.displayName="NavLink";var nb=z.forwardRef(({discover:u="render",fetcherKey:s,navigate:r,reloadDocument:c,replace:f,state:d,method:p=Eu,action:g,onSubmit:b,relative:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:D,...M},G)=>{let{unstable_useTransitions:B}=z.useContext(bt),L=sb(),X=rb(g,{relative:m}),K=p.toLowerCase()==="get"?"get":"post",H=typeof g=="string"&&Om.test(g),P=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let se=ee.nativeEvent.submitter,W=(se==null?void 0:se.getAttribute("formmethod"))||p,ke=()=>L(se||ee.currentTarget,{fetcherKey:s,method:W,navigate:r,replace:f,state:d,relative:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:D});B&&r!==!1?z.startTransition(()=>ke()):ke()};return z.createElement("form",{ref:G,method:K,action:X,onSubmit:c?b:P,...M,"data-discover":!H&&u==="render"?"true":void 0})});nb.displayName="Form";function lb(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function km(u){let s=z.useContext(Kl);return Ne(s,lb(u)),s}function ab(u,{target:s,replace:r,state:c,preventScrollReset:f,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b}={}){let m=Rm(),E=pn(),A=Ia(u,{relative:d});return z.useCallback(D=>{if(Hy(D,s)){D.preventDefault();let M=r!==void 0?r:Fa(E)===Fa(A),G=()=>m(u,{replace:M,state:c,preventScrollReset:f,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:g});b?z.startTransition(()=>G()):G()}},[E,m,A,r,c,s,u,f,d,p,g,b])}var ib=0,ub=()=>`__${String(++ib)}__`;function sb(){let{router:u}=km("useSubmit"),{basename:s}=z.useContext(bt),r=Ty(),c=u.fetch,f=u.navigate;return z.useCallback(async(d,p={})=>{let{action:g,method:b,encType:m,formData:E,body:A}=Ly(d,s);if(p.navigate===!1){let D=p.fetcherKey||ub();await c(D,r,p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:A,formMethod:p.method||b,formEncType:p.encType||m,flushSync:p.flushSync})}else await f(p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:A,formMethod:p.method||b,formEncType:p.encType||m,replace:p.replace,state:p.state,fromRouteId:r,flushSync:p.flushSync,viewTransition:p.viewTransition})},[c,f,s,r])}function rb(u,{relative:s}={}){let{basename:r}=z.useContext(bt),c=z.useContext(Mt);Ne(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),d={...Ia(u||".",{relative:s})},p=pn();if(u==null){d.search=p.search;let g=new URLSearchParams(d.search),b=g.getAll("index");if(b.some(E=>E==="")){g.delete("index"),b.filter(A=>A).forEach(A=>g.append("index",A));let E=g.toString();d.search=E?`?${E}`:""}}return(!u||u===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(d.pathname=d.pathname==="/"?r:hn([r,d.pathname])),Fa(d)}function cb(u,{relative:s}={}){let r=z.useContext(Em);Ne(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=km("useViewTransitionState"),f=Ia(u,{relative:s});if(!r.isTransitioning)return!1;let d=mn(r.currentLocation.pathname,c)||r.currentLocation.pathname,p=mn(r.nextLocation.pathname,c)||r.nextLocation.pathname;return _u(f.pathname,p)!=null||_u(f.pathname,d)!=null}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fb=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,r,c)=>c?c.toUpperCase():r.toLowerCase()),Ih=u=>{const s=fb(u);return s.charAt(0).toUpperCase()+s.slice(1)},wm=(...u)=>u.filter((s,r,c)=>!!s&&s.trim()!==""&&c.indexOf(s)===r).join(" ").trim(),db=u=>{for(const s in u)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=z.forwardRef(({color:u="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:c,className:f="",children:d,iconNode:p,...g},b)=>z.createElement("svg",{ref:b,...hb,width:s,height:s,stroke:u,strokeWidth:c?Number(r)*24/Number(s):r,className:wm("lucide",f),...!d&&!db(g)&&{"aria-hidden":"true"},...g},[...p.map(([m,E])=>z.createElement(m,E)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(u,s)=>{const r=z.forwardRef(({className:c,...f},d)=>z.createElement(mb,{ref:d,iconNode:s,className:wm(`lucide-${ob(Ih(u))}`,`lucide-${u}`,c),...f}));return r.displayName=Ih(u),r};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],gb=Oe("arrow-left",pb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],sc=Oe("arrow-right",yb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],vb=Oe("calendar",bb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Sb=Oe("check",xb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ab=Oe("chevron-left",Eb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_b=Oe("chevron-right",Tb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Cb=Oe("chevron-up",Rb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],cn=Oe("code",zb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Mb=Oe("copy",Nb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ob=Oe("cpu",Db);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],wb=Oe("database",kb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Hb=Oe("external-link",jb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],em=Oe("github",Ub);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Za=Oe("globe",Bb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Gb=Oe("layers",Lb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Qb=Oe("menu",qb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],tm=Oe("search",Yb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Vb=Oe("server",Xb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nm=Oe("shield-check",Zb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Kb=Oe("tag",Jb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],lm=Oe("terminal",$b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ru=Oe("x",Wb),am=[{label:"Home",path:"/"},{label:"Experience",path:"/experience"},{label:"Skills",path:"/skills"},{label:"Education",path:"/education"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],dc=[{id:"standard-networks",title:"스탠다드네트웍스",role:"전송 개발팀",period:"2023.07 - 2025.12",description:"대용량 메시지 발송 플랫폼 기획/개발 및 운영",techStack:["Java","Spring Boot","Spring Cloud","Redis","RabbitMQ","R2DBC","Netflix Eureka","WebFlux"],keyAchievements:["월 평균 7천만 건에서 최대 3억 건에 이르는 메시지 데이터 처리","MSA(Microservices Architecture) 설계를 통한 시스템 결합도 최소화 및 확장성있는 인프라 구축","약 50개 고객사에 직접 배포되어 안정적으로 운영 중인 Agent 프로그램 개발 및 운영","메시지 검칙 프로세스 개발. KISA(한국인터넷진흥원) 및 내부 정책 준수로 스팸 신고율 50% 이상 감소 및 발송 신뢰도 향상"]}],Fb=[{category:"Languages",items:[{name:"Java",icon:Pb},{name:"HTML/CSS",icon:Gb},{name:"JS(ES6)",icon:Vb}]},{category:"Frameworks & Libraries",items:[{name:"Spring boot",icon:wb},{name:"WebFlux",icon:Ob},{name:"Netty",icon:Za},{name:"JPA",icon:Za},{name:"mybatis",icon:Za},{name:"R2DBC",icon:Za},{name:"React & Redux",icon:Za},{name:"Tailwind CSS"}]},{category:"Infrastructure & Databases",items:[{name:"RabbitMQ",icon:nm},{name:"Redis",icon:lm},{name:"mySQL",icon:cn},{name:"Oracle",icon:cn},{name:"maria",icon:cn},{name:"Linux",icon:cn}]},{category:"Tools & Collaboration",items:[{name:"VSCode",icon:nm},{name:"IntelliJ",icon:lm},{name:"eclipse",icon:cn},{name:"Git/GithubDesktop",icon:cn},{name:"Notion",icon:cn},{name:"Slack",icon:cn},{name:"Jira",icon:cn}]}],im=[{institution:"서울사이버대학교",link:"https://www.iscu.ac.kr",degree:"인공지능학과",period:"2026.03 ~ 재학 중",details:[],category:"Education"},{institution:"Docker 클라우드 컨데이너 기반 아키텍처 이해와 실습",link:"https://edu.ktdsuniversity.com",degree:"kt University에서 진행한 Docker 클라우드 컨테이너 기반 아키텍처 교육 과정",period:"2024.10 ~ 2024.10",details:["Docker와 Docker 컴포넌트 이해","Docker 이미지와 컨테이너 설정","Dockerfile 로 서버 구축하기","Docker 이미지 공유","Container 통합 관리"],category:"Education"},{institution:"빅데이터 기반 지능형SW 및 MLOps 개발자 양성과정",link:"https://playdata.io/",degree:"엔코아 아카데미(Encore Academy)에서 진행한 빅데이터 기반 개발자 양성 과정",period:"2022.11 ~ 2023.5",details:["마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","마이크로 서비스 개발을 위한 DB설계 능력"],category:"Education"},{institution:"La Piscine",link:"https://42seoul.kr/seoul42/main/view",degree:"이노베이션 아카데미(Innovation Academy)에서 진행한 자기주도학습 기반의 알고리즘 문제 풀이 과정",period:"2022.8 ~ 2022.9",details:["알고리즘 문제 해결 능력","서로간의 코드 설명 및 코드 리뷰로 의사소통 능력 향상"],category:"Education"},{institution:"클라우드 기반의 MSA 스페셜리스트 주니어 개발자 양성 과정",link:"https://sesac.seoul.kr/course/active/detail.do",degree:"디지털 전환(Digital Transformation)시대의 핵심 클라우드 전문 인재 양성 교육 과정",period:"2021.11 ~ 2022.5",details:["클라우드 인프라 구축 능력","마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","클라우드 네이티브에 대한 이해와 마이크로 서비스 개발 및 관리할 수 있는 능력"],category:"Education"},{institution:"정보처리기능사",degree:"한국산업인력공단",period:"2022.07.01",details:["국가기술자격증 취득"],category:"Certification"}];function Pb(u){return y.jsxs("svg",{...u,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}),y.jsx("path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}),y.jsx("line",{x1:"6",x2:"6",y1:"2",y2:"4"}),y.jsx("line",{x1:"10",x2:"10",y1:"2",y2:"4"}),y.jsx("line",{x1:"14",x2:"14",y1:"2",y2:"4"})]})}const Ib=()=>{const[u,s]=z.useState(!1),r=pn();return z.useEffect(()=>{s(!1),window.scrollTo(0,0)},[r]),y.jsxs("div",{className:"min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-mint selection:text-slate-900",children:[y.jsxs("header",{className:"w-full max-w-3xl mx-auto px-6 py-8 md:py-12 flex justify-between items-center",children:[y.jsxs(Tu,{to:"/",className:"text-2xl font-extrabold tracking-tight hover:opacity-70 transition-opacity",children:["Whee",y.jsx("span",{className:"text-sky-500",children:"'s"})," Log",y.jsx("span",{className:"text-sky-500",children:"."})]}),y.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[am.filter(c=>c.label!=="Home").map(c=>y.jsx(Tu,{to:c.path,className:({isActive:f})=>`text-[15px] font-medium transition-colors ${f?"text-slate-900 font-bold bg-gradient-to-r from-sky-200 to-sky-100 px-3 py-1 rounded-sm -skew-x-3":"text-slate-500 hover:text-slate-900"}`,children:c.label},c.path)),y.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"relative group text-slate-400 hover:text-sky-500 hover:scale-125 transition-all duration-200",children:[y.jsx(em,{size:20}),y.jsx("span",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-slate-700 bg-sky-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg",children:"Hanwhee's GitHub"})]})]}),y.jsx("button",{className:"md:hidden text-slate-800 focus:outline-none",onClick:()=>s(!u),children:u?y.jsx(Ru,{size:24}):y.jsx(Qb,{size:24})})]}),u&&y.jsxs("div",{className:"md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6 flex flex-col",children:[y.jsx("div",{className:"flex justify-end mb-8",children:y.jsx("button",{onClick:()=>s(!1),children:y.jsx(Ru,{size:28})})}),y.jsx("nav",{className:"flex flex-col space-y-6 text-center",children:am.map(c=>y.jsx(Tu,{to:c.path,className:({isActive:f})=>`text-2xl font-bold ${f?"text-sky-600":"text-slate-800"}`,children:c.label},c.path))})]}),y.jsx("main",{className:"flex-grow w-full max-w-3xl mx-auto px-6 pb-20",children:y.jsx(Ny,{})}),y.jsxs("footer",{className:"w-full max-w-3xl mx-auto px-6 py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400",children:[y.jsx("div",{children:"© 2026 Hanwhee Kim."}),y.jsx("div",{className:"flex gap-4",children:y.jsx("a",{href:"https://github.com/KimHanWhee",className:"hover:text-slate-600",children:y.jsx(em,{size:16})})})]})]})},ev=`---
title: "Base64 인코딩 이해하기"
date: "2025-10-27"
description: "Base64 인코딩의 개념과 변환 과정을 정리한 글입니다"
tags: ["Encoding", "Computer Science"]
---

# Base64란?

Base64는 **64진법**의 의미를 가지며, Binary Data(8비트 이진 데이터)를 텍스트로 변경하는 인코딩 방식 중 하나이다. 바이너리 데이터를 문자 코드에 영향을 받지 않는 공통 64개의 ASCII 영역의 문자들로 이루어진 문자열로 변경한다.

![ascii_img](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image.png)

## 왜 Base64를 사용할까?

- **64가 2의 제곱수**(64 = 2⁶)이며, 2의 제곱수들에 기반한 진법들 중에서 ASCII 문자들(대/소문자 알파벳, 숫자, +, /)을 써서 표현할 수 있는 가장 큰 진법이다.
- **보안이 아닌 호환성**을 위해 사용 - 바이너리 데이터를 텍스트로 다루고 싶을 때 사용
- 신뢰할 수 없는 통신 채널을 통해 바이너리 데이터를 **안전하게 전송**할 수 있도록 사용
- 통신 과정에서 바이너리 데이터의 **손실을 방지**하기 위해 사용

---

## Base64 변환 과정

### 1단계: ASCII 변환
문자열을 ASCII 코드로 치환한다.
\`\`\`
예: 'H' → 72
\`\`\`

### 2단계: 이진수 변환
ASCII 값을 8비트 이진수로 변환한다.
\`\`\`
72 → 01001000
\`\`\`

### 3단계: 6비트 그룹 생성
Base64는 3바이트(24비트)를 4개의 6비트 그룹으로 나눈다.
\`\`\`
01001000 (8비트)
↓ 24비트를 만들기 위해 0을 16개 추가
01001000 00000000 00000000 (24비트)
↓ 6비트씩 분할
010010 | 000000 | 000000 | 000000
\`\`\`

**6비트를 10진수로 변환:**
\`\`\`
010010 → 18
000000 → 0
000000 → 0
000000 → 0
\`\`\`

### 4단계: Base64 색인표 매핑
10진수 값을 Base64 색인표의 문자로 치환한다.
\`\`\`
18 → 'S'
0  → 'A'
0  → 'A'
0  → 'A'
\`\`\`

### 5단계: Padding 처리

> **💡 Padding이란?**
> 
> 패딩은 불필요한 데이터를 채우는 것입니다. 만약 3개씩 정확히 끊어지지 않고 공백이 생긴다면, 인코딩 후 패딩 문자 \`=\`가 공백만큼 추가된다.

24비트(8 X 3 = 24) 이므로 6비트씩 쪼개는 Base64로 치환할 경우 4글자가 나와야한다. 따라서 두글자(12bit)인 ‘SA’에서 24bit를 채우기 위해 패딩문자(‘=’)가 두개 더 붙게된다.
\`\`\`
'SA' (2글자, 12비트)
↓ 24비트를 채우기 위해 패딩 2개 추가
'SA=='
\`\`\`

### 최종 결과
\`\`\`
'H' → Base64 인코딩 → "SA=="
\`\`\`

---

## 마무리

Base64 인코딩은 **6비트를 기준**으로 한다. 하지만 문자열 1글자는 1바이트(8비트)이기 때문에, 6과 8의 최소공배수인 **24비트씩 끊어서 인코딩** 하는 것으로 보인다.

---

## 참고 자료
- [JAVA Base64란 무엇인가](https://velog.io/@may_yun/JAVA-Base64%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)
`,tv=`---
title: "Java 프로그램은 어떻게 실행될까?"
date: "2025-11-12"
description: "Java 프로그램이 실행되는 과정에 관하여 정리한 글입니다."
tags: ["JAVA"]
---

**Java**는 객체 지향 프로그래밍 언어이다. 이 글에서는 Java 프로그램이 실행되는 과정을 정리했다.

## 1. 소스 코드 작성

개발자가 \`.java\` 파일을 작성한다.
\`\`\`java
public class TestClass {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

## 2. 컴파일(Compile)

작성된 \`.java\` 파일은 JDK에 포함된 \`javac\`(Java Compiler)를 통해 컴파일된다.
\`\`\`bash
javac TestClass.java
\`\`\`

컴파일이 완료되면 JVM이 이해할 수 있는 바이트 코드로 변환되어 \`TestClass.class\` 파일이 생성된다.

## 3. 클래스 로딩(Class Loading)

Java 프로그램을 실행하면 **JVM(Java Virtual Machine)** 에 의해 \`.class\` 파일(바이트 코드)이 **클래스 로더(Class Loader)** 를 통해 JVM 메모리에 동적으로 로드된다.

## 4. 링킹(Linking)

로드된 클래스나 인터페이스를 **검증(Verify)**, **준비(Prepare)**, **분석(Resolve)** 하는 과정이다.

1. **검증(Verify)** - 생성된 Java 바이트 코드가 적절한지 검증한다.
2. **준비(Prepare)** - 모든 static 변수의 메모리가 할당되고 기본값이 할당된다.
3. **분석(Resolve)** - 런타임 상수 풀(Constant Pool)에 있는 모든 심볼릭 레퍼런스(Symbolic Reference)를 실제 메모리 레퍼런스로 교체한다.

## 5. 초기화(Initialization)

초기화는 객체를 사용할 준비를 하는 단계로, 기본적으로 필드를 초기화하거나 리소스를 준비하여 오류를 방지하는 역할을 한다.

### 초기화 과정

1. **객체 생성** - \`new\` 키워드로 힙(Heap) 메모리에 객체를 생성한다.
2. **기본 초기화** - 모든 필드가 Java에서 지정한 기본값으로 초기화된다.
3. **명시적 초기화** - 생성자, 초기화 블록에서 필드에 직접 값을 설정한다.
4. **준비 완료** - 초기화가 끝나면 객체는 프로그램에서 사용할 준비가 완료된다.

> **초기화의 종류**
>
> - **기본 초기화**: 모든 필드에 대한 기본값(Default Value)을 자동으로 설정한다.
> - **명시적 초기화**: 기본값 대신 직접 값을 설정하여 초기화한다. (생성자, setter)
> - **동적 초기화**: 프로그램 실행 중 동적으로 값을 설정하는 방식이다.

## 6. 실행(Execution)

초기화 단계까지 완료된 후, **실행 엔진(Execution Engine)** 이 로드된 바이트 코드를 실행한다. 하지만 바이트 코드는 컴퓨터가 직접 읽지 못하기 때문에 **인터프리터(Interpreter)** 와 **JIT 컴파일러(Just-In-Time Compiler)** 를 함께 사용하여 기계어로 변환한다.

> **인터프리터(Interpreter)** 는 바이트 코드를 한 줄씩 읽어서 실행하는 방식이다.
>
> **JIT 컴파일러(Just-In-Time Compiler)** 는 자주 실행되는 메서드(Hotspot)를 감지하면 해당 메서드 전체를 네이티브 코드로 변환하여 캐싱한다.

## 7. 메모리 배치

Java 프로그램이 실행되면 JVM은 OS로부터 메모리를 할당받고, 그 메모리를 용도에 따라 영역을 나누어 관리한다.

JVM 메모리 공간(Runtime Data Area)은 메서드(Method) 영역, 스택(Stack) 영역, 힙(Heap) 영역으로 구분되고 데이터 타입(자료형)에 따라 각 영역에 나누어 할당된다.

### 메서드 영역 (Method Area)

JVM이 동작해서 클래스가 로딩될 때 생성되며, 클래스와 인터페이스에 대한 런타임 상수 풀, 필드(Field), 클래스 변수(Static Variable), 상수(final), 생성자(Constructor), 메서드(Method) 등을 저장하는 공간이다.

### 스택 영역 (Stack Area)

메서드 내에서 정의하는 기본 자료형에 해당하는 지역 변수의 데이터 값이 저장되는 공간이다. \`int\`, \`double\`, \`byte\`, \`long\`, \`boolean\` 등에 해당하는 지역 변수, 매개 변수 데이터 값이 저장된다.

Stack은 후입선출(LIFO, Last-In-First-Out)의 특성을 가진다.

### 힙 영역 (Heap Area)

JVM이 관리하는 프로그램에서 데이터를 저장하기 위해 런타임 시 동적으로 할당되는 공간이다. 객체, 배열 등이 저장되는 공간으로 어떤 참조 변수도 힙 영역에 있는 인스턴스를 참조하지 않는다면 가비지 컬렉터(GC, Garbage Collector)에 의해 메모리에서 제거된다.`,nv=`---
title: "객체 지향 프로그래밍(Object-Oriented Programming)이란 무엇일까?"
date: "2025-11-19"
description: "JAVA 객체 지향 프로그래밍에 대한 내용을 간단하게 정리한 글입니다."
tags: ["JAVA"]
---

# 객체지향 프로그래밍(Object-Oriented Programming)이란?
>**객체 지향 프로그래밍**은 컴퓨터 프로그래밍의 패러다임 중 하나로 필요한 데이터를 **추상화**하여 여러개의 **객체**를 만든 뒤 **객체** 간 상호작용을 통해 서비스를 구현하는 프로그래밍이다.

## 클래스? 객체?
### 클래스(class)
- java에서 객체를 생성하기 위한 설계도이다. 대표적인 예시로 객체(붕어빵)를 만들기 위한 클래스(붕어빵틀)이라고 많이 비유를 하는 것 같다.
- 객체가 가지는 속성(필드)와 동작(메서드)로 이루어져 있다.
>예시로 '사람' 이란 클래스를 만든다고 쳐보자.
이름, 나이, 성별 등의 속성들로 구성할 수 있다.
### 객체(object)
- 클래스를 기반으로 만들어지는 물리적/추상적으로 존재, 생각할 수 있는 것 중 자신만의 속성/행동을 가진, 다른 것과 식별 가능 한 것이다. 
>예를 들면 "홍길동", 29세, 남 등의 정보를 묶은 데이터를 "사람"이라는 틀(클래스)의 객체로 볼 수 있다.


## 객체 지향 프로그래밍을 많이 사용하는 이유?
- 업무 분담이 편하다.
  - 클래스 단위로 모듈화 시키기 때문에 분업하기 편하다. 대규모 프로젝트에 적합.
- 코드 재사용이 쉽다.
  - 다른 팀원이 만든 클래스를 가져와서 사용하는 것도 가능하다.
- 유지보수가 쉽다.
  - 변경사항이 있어도 클래스에서 해당 부분만 수정하면 되므로 변경사항 수정이 간단하다.
  
## 객체 지향 프로그래밍의 특성
### 추상화(Abstration)
객체 지향 프로그래밍에서의 추상화란 객체의 공통적인 속성과 기능을 추출하여 정의하는 것 즉, 클래스를 정의하는 것을 추상화라고 볼 수 있다.
> 예를 들면 승용차, 버스, 오토바이, 트럭이라는 객체들이 있고 이 객체들을 하나로 묶으려 할 때 우리는 이 객체들을 '**자동차**'라고 묶을 수 있다. 이때 자동차로 묶는 것을 **추상화**라고 한다.

### 캡슐화(Encapsulation)
캡슐화란 데이터와 해당 데이터를 조작하는 코드를 하나로 묶는 것이다. 캡슐화를 통해 객체는 내부의 속성과 기능을 캡슐로 만들어 **데이터를 외부로부터 보호**할 수 있다.
#### 캡슐화의 주요 특징
- **정보은닉** : 캡슐화는 객체의 내부 동작을 감추고 외부에는 필요한 부분만 노출시킨다.
- **데이터 유효성 보장** : 캡슐화는 객체의 내부데이터를 외부에서 직접 조작하지 못하도록 제한하여 데이터의 유효성을 보장한다.

### 상속(Inheritance)
상속이란 **기존의 클래스를 재사용하여 새로운 클래스를 내에서 사용**하는 것이다. 
> 예를 들어 **물건**이라는 클래스가 있고 그 안에 종류와 가격 이라는 속성이 있다고 해보자. 이 클래스로는 **책**이나 **공** 과 같은 물건을 나타낼 수 있다. 그런데 **책**은 **물건** 속성을 그대로 받아서 사용가능하고, 추가적으로 **제목**과 **저자**라는 속성을 가질 수 있다.

이런식으로 상속을 통하여 기존의 속성과 동작을 재사용하고, 새로운 속성과 동작을 추가할 수 있어 **반복적인 코드를 최소화**하고 **서로 공유할 수 있는 속성과 기능에 쉽게 접근**할 수 있다.

### 다형성(Polymorphism)
다형성은 어떤 **객체 혹은 메소드가 여러가지 타입을 가질 수 있는 것**이다.
> **동물**이라는 클래스가 있다고 생각해보자. 이 클래스의 객체로는 개, 고양이, 쥐가 있다. 동물 클래스에는 **소리를 내는 기능**을 하는 메소드가 있고 각 객체들은 **같은 소리를 내는 메소드**를 실행하지만 "멍멍", "야옹", "찍찍"과 같은 **서로 다른 소리**를 내는것이 다형성이다.

다형성에 대해 공부하다보면 오버라이딩(Overriding)이라는 개념을 볼 수 있다. 간단하게 알아보자.

#### 오버라이딩(Overriding)
부모클래스에게 상속받은 메소드를 자식 클래스에서 재정의 해서 사용하는 것.


\`\`\`
class Parent {
    void printRole() {
        System.out.println("부모");
    }
}

class Child extends Parent {
    @Override
    void printRole() {
        System.out.println("자식");
    }
}
\`\`\`

위의 예제처럼 Child 클래스에서 Parent 클래스의 pringRole이라는 매소드를 **같은 리턴 타입, 같은 이름, 같은 접근제어자**로 구현만 재정의하여 사용하는것을 볼 수 있다.

이런식으로 부모 클래스에서 물려받은 메소드를 자식 클래스 내에서 오버라이딩 되어 사용할 수 있다.

이렇게 객체 지향 프로그래밍에 관하여 간단하게 정리해보았다. `,lv=`---
title: "Garbage Collection(GC)"
date: "2025-11-23"
description: "Garbage Collection(GC)에 관하여 정리한 글입니다."
tags: ["JAVA"]
---

> *본 포스팅에 사용된 모든 이미지는 [**jellili.tistory.com**](https://jellili.tistory.com/60)을 출처로 하고 있습니다.*

# 가비지 컬렉션(Garbage Collection)

자바 가상 머신(JVM)에서 구동되는 자바 프로그램은 메모리 관리를 개발자가 직접 수행하지 않아도 자동으로 메모리 관리 기능을 지원한다. **가비지 컬렉션(GC)** 이란, 프로그램 개발 중 생기는 유효하지 않은 메모리인 **가비지(Garbage)** 를 알아서 정리해주는 역할을 한다.

## 가비지(Garbage)

그렇다면 가비지란 무엇일까?

**가비지(Garbage)** 는 참조되지 않는 불필요한 메모리를 말한다. 상세하게 설명하자면 JVM의 Heap 영역에서 동적으로 할당되었던 메모리 중 더 이상 사용되지 않는 불필요한 메모리 객체를 뜻한다.

> **JVM의 Heap 영역**
>
> 프로그램 상에서 데이터를 저장하기 위하여 런타임 중 동적으로 할당되는 메모리 영역이다. 흔히 우리가 \`new\` 연산자로 생성하는 객체, 인스턴스 등이 저장된다.

아래는 가비지에 대한 간단한 예제이다.
\`\`\`java
Message message = new Message();
message.setContent("안녕하세요");

// 가비지 발생
message = new Message();
message.setContent("반가워요");
\`\`\`

기존에 생성한 message 객체는 더 이상 참조하지 않으므로 가비지(Garbage)가 된다. 이러한 메모리 누수를 방지하기 위하여 가비지 컬렉터(GC)가 주기적으로 불필요한 메모리가 있는지 검사하여 메모리를 해제해준다.

## 가비지(Garbage) 판단 기준

가비지 컬렉션은 어떻게 특정 객체가 가비지인지 아니면 필요한 메모리인지 판단할까?

가비지 컬렉션은 가비지 판단을 위하여 도달성, 즉 도달 능력(Reachability)이라는 개념을 적용한다. 객체의 레퍼런스가 있다면 Reachable, 객체의 유효한 레퍼런스가 없다면 Unreachable로 구분한다.

- **Reachable**: 객체가 참조되고 있는 상태
- **Unreachable**: 객체가 참조되고 있지 않은 상태 (GC의 대상)

JVM 메모리에서 객체들은 실질적으로 Heap 영역에서 생성되며, Method 영역이나 Stack 영역에서는 Heap 영역에 생성된 객체의 주소만 참조하는 형식으로 구성되어 있다.

생성된 Heap 영역의 객체들이 메서드가 끝나는 등의 특정 이벤트로 인해 Heap 영역 객체의 메모리 주소를 가지고 있는 참조 변수가 삭제된다면 Heap 영역에서 어디서든 참조하고 있지 않은 객체(Unreachable)가 발생하게 된다.

## 가비지 컬렉션(GC)의 청소 방식

### Mark And Sweep

**Mark And Sweep** 이란 다양한 GC에서 사용되는 객체를 걸러내는 내부 알고리즘이다.

#### 원리

![Untitled](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdUc8Ee%2Fbtr33y7vtPE%2FAAAAAAAAAAAAAAAAAAAAAOOJtoAS4m1sbrAGdOesrot8R9IQu7FKZGuLBknFF9Ra%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DyWB9MWR9DL8I3kHryO6Swzg8SJQ%253D)

GC가 될 대상 객체를 **식별(Mark)** 하고 **제거(Sweep)** 하며 객체가 제거되어 파편화된 메모리 영역을 앞에서부터 채워나가는 **작업(Compaction)** 을 수행한다.

- **Mark**: 불필요한 메모리를 선별하는 작업으로, Root Space로부터 그래프 순회를 통해 연결된 객체들을 찾아내어 각각 어떤 객체를 참조하고 있는지 찾아서 마킹한다.
- **Sweep**: 참조하고 있지 않은 객체(Unreachable) 객체들을 Heap에서 제거한다.
- **Compact**: 제거 후 분산된 객체들을 Heap의 시작 주소로 모아 메모리가 할당된 부분과 그렇지 않은 부분으로 압축한다. (GC 종류에 따라 하지 않는 경우도 있다.)

![img.gif](https://blog.kakaocdn.net/dna/djcZkh/btr36QMPbF6/AAAAAAAAAAAAAAAAAAAAAFWo549vGdosL_bx466DoQl8Yj43QbGhJq4CnV-ZpnpL/img.gif?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1769871599&allow_ip=&allow_referer=&signature=LHAyt0GWv2OM2iInSoDAEMLbdHM%3D)

#### GC의 Root Space

![img1.daumcdn.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FmFVqG%2Fbtr34a6HzIa%2FAAAAAAAAAAAAAAAAAAAAAHDsSjFPKPubAhZjZzPipHLm0aAFey_DAbbOWJBORGwY%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DduOqztbEHFGsJaEjgB69LP1e1yA%253D)

## Heap 메모리 구조

JVM의 힙(Heap) 영역은 동적으로 메모리가 할당되는 공간이며, 가비지 컬렉션의 대상이 되는 공간이다.

Heap 영역은 효율적인 GC를 위해 2가지 전제를 가지고 설계되었다.

1. 대부분의 객체는 금방 접근 불가능한 상태(Unreachable)가 된다.
2. 오래된 객체에서 새로운 객체로의 참조는 아주 적게 존재한다.

즉, 객체는 대부분 일회성이며, 메모리에 오랫동안 남아있는 경우는 드물다는 것이다.

이러한 특성을 이용하여 개발자들은 메모리 관리를 위해, 객체 생존 기간에 따라 물리적인 Heap 영역을 **Young 영역과 Old 영역** 으로 나누게 되었다.

### Young 영역

- 새롭게 생성된 객체가 할당(Allocation)되는 영역
- 대부분의 객체가 금방 Unreachable 상태가 되기 때문에 대부분의 객체가 Young 영역에 생성되었다가 사라진다.
- Young 영역에 대한 GC를 Minor GC라고 부른다.

### Old 영역

- Young 영역에서 Reachable 상태를 유지하여 살아남은 객체가 복사되는 영역
- Young 영역보다 크게 할당되며, 영역의 크기가 큰 만큼 가비지는 적게 발생한다.
- Old 영역에 대한 GC를 Major GC 또는 Full GC라고 부른다.

힙 영역은 효율적인 메모리 관리를 위해 Young 영역을 3가지로 나눈다.

#### Eden

- \`new\`를 통해 새로 생성된 객체가 할당된다.
- 정기적인 가비지 수집 후 살아남은 객체는 Survivor 영역으로 보낸다.

#### Survivor 0 / Survivor 1

- 최소 1번 이상의 GC에서 살아남은 객체가 존재하는 영역이다.
- Survivor 영역에는 규칙이 있는데, Survivor 0/1 둘 중 하나는 꼭 비어있어야 한다.
`,av=`---
title: "제어의 역전(IoC), 의존성 주입(DI)"
date: "2025-12-10"
description: "제어의 역전과 의존성 주입에 대하여 간단하게 작성한 글입니다."
tags: ["JAVA"]
---

# IoC & DI

## Ioc**(Inversion of Control)**

**IoC(Inversion of Control)**는 **제어의 역전**이라는 의미로 객체에 대한 관리를 개발자에서 스프링 컨테이너로 넘기는 것(객체 생성, 호출, 삭제 등)을 의미한다.

- 일반적인 경우 어플리케이션의 소스 코드가 모든 객체의 생명주기 및 의존성(new 연산자)에 대한 관리를 한다.
- 객체의 생명 주기, 의존성 관리를 스프링 컨테이너로 넘기며 코드를 단순화하여 유지보수에 편리하다.

## DI(Dependency Injection)

**DI(Dependency Injection)**는 **의존성 주입**이라는 의미로 **IoC**의 구현 방식 중 하나이다.

- 객체간의 의존성을 외부에서 주입하는 방식이다.
- 객체 간 결합을 느슨하게 만들어 객체를 재사용하기 쉽게 해준다.
    
    ### 의존성 주입의 방법
    
    - **생성자 주입 방식**
        
        \`\`\`jsx
        public class UserController {
            private final UserService userService;
        
        		@Autowired
        		public UserServiceClass(UserService userService){
        				this.userService = userService;
        		}
        } 
        \`\`\`
        
        - @RequiredArgsConstructor 어노테이션을 사용하여 구현 할 수 있다.
            
            \`\`\`jsx
            @RequiredArgsConstructor 
            public class UserController {
            		private final UserService userService;
            }
            \`\`\`
            
            <aside>
            💡 **@RequiredArgsConstructor** 은 **final**이나 **@NotNull**이 붙어있는 필드의 생성자를 자동으로 생성해주는 역할을 한다.
            
            </aside>
            
    - **필드 주입 방식**
        
        \`\`\`jsx
        public class UserController {
        		@Autowired
            private UserService userService;
        } 
        \`\`\`
        
    - **수정자 주입 방식**
        
        \`\`\`jsx
        public class UserController {
            private UserService userService;
        
        		@Autowired
        		public setUserServiceClass(UserService userService){
        				this.userService = userService;
        		}
        } 
        \`\`\``,iv=`---
title: "...알림 설정까지.. 옵저버 패턴(Observer Pattern)"
date: "2025-12-13"
description: "옵저버 패턴에 대하여 간단하게 정리한 글입니다."
tags: ["JAVA"]
---

# 옵저버 패턴(Observer Pattern)

옵저버 패턴(Observer Pattern)이란, 옵저버(관찰자)들이 관찰하는 대상의 상태에 변화가 있을 때마다 대상자는 직접 옵저버들에게 변화가 있었음을 알리고, 옵저버들은 알림을 받아 특정 조치를 취하는 행동을 하는 패턴이다.

- 일대다(One-To-Many) 의존성을 가진다.
- Pub/Sub의 모델로 알려져있다.

## 언제 사용할까?

- 대상자 객체의 상태가 변할때마다 특정 동작을 수행하여야 할 때
- 대상자 객체의 상태가 변경되면 다른 객체도 변경되어야 할 때

## 장점

- 대상자의 상태 변경을 주기적으로 조회하지 않아도 자동으로 감지하여 특정 동작 수행이 가능하다.
- 대상자 객체와 옵저버 객체의 결합도를 느슨하게 유지할 수 있다.
- 새로운 옵저버 클래스를 추가할 수 있다. (OCP-개방 폐쇄 원칙)

> 💡 **OCP(개방-폐쇄 원칙)?**
> 
> 객체 지향 원리인 SOLID 방식 중 하나로, 확장에는 개방적이고 수정에는 폐쇄적인 원칙을 의미한다.

## 단점

- 옵저버는 알림 순서를 제어할 수 없다.
- 구조가 어려워져 코드 복잡도가 증가한다.
- 많은 옵저버 객체를 등록하고 해지하지 않으면 메모리 누수가 발생할 수 있다.

## 실습

더 쉽게 이해할 수 있도록 간단하게 게임을 예제로 실습을 진행하여 보았다.

### 이벤트 정의

먼저, 대상자가 발생시킬 이벤트를 Enum 타입으로 먼저 지정을 한 후, 이벤트 마다 옵저버가 취할 행동을 하도록 하였다.

\`\`\`jsx
public enum GameEvent {
    TEAM_FIGHT, // 한타
    READY_TO_GET_DRAGON, // 용 싸움 준비
    READY_TO_GET_BARON, // 바론 싸움 준비
    GET_DRAGON, // 용 먹기
    GET_BARON, // 바론 먹기
    ACE, // 우리팀 마무리
    ENEMY_ACE, // 적팀 마무리
    GG // 게임 종료
}
\`\`\`

### 대상자(Subject)

대상자는 게임 그 자체. 즉 게임 시스템을 예시로 구현하였다. 

- 대상자 인터페이스

\`\`\`jsx
public interface Game {
    void subscribe(Laner laner);
    void unSubscribe(Laner laner);
    void notifying(GameEvent gameEvent);
}
\`\`\`

- 대상자 구현체(System)

\`\`\`jsx
public class System implements Game {

    private List<Laner> laners = new ArrayList<>();
    @Override
    public void subscribe(Laner laner) {
        laners.add(laner);
    }

    @Override
    public void unSubscribe(Laner laner) {
        laners.remove(laner);
    }

    @Override
    public void notifying(GameEvent gameEvent) {
        switch (gameEvent) {
            case TEAM_FIGHT -> java.lang.System.out.println("---------한타---------");
            case READY_TO_GET_DRAGON -> java.lang.System.out.println("----------용 출현 30초 전...---------");
            case READY_TO_GET_BARON -> java.lang.System.out.println("---------내셔남작 출현 30초 전...---------");
            case GET_DRAGON -> java.lang.System.out.println("---------용 출현!---------");
            case GET_BARON -> java.lang.System.out.println("---------내셔남작 출현!---------");
            case ACE -> java.lang.System.out.println("---------마무리!---------");
            case ENEMY_ACE -> java.lang.System.out.println("---------적팀 마무리!---------");
            case GG -> java.lang.System.out.println("---------GG---------");
        }
        laners.forEach(laner -> laner.newEvent(gameEvent));
    }
}
\`\`\`

위 대상자의 메서드를 통해, 옵저버들은 해당 대상자를 구독(subscribe), 구독 해제(unSubscribe)를 할 수 있다.

또한, 대상자는 notifying 메서드를 통하여 구독중인 옵저버들에게 특정 이벤트를 발생시키고 전달할 수 있다.

### 옵저버(Observer)

옵저버는 대상자(Subject)인 Game을 플레이하는 유저들을 예시로 구현하였다.

- 옵저버 인터페이스

\`\`\`jsx
public interface Laner {
    void newEvent(GameEvent gameEvent);
}
\`\`\`

- 옵저버 구현체

\`\`\`jsx
public class Mid implements Laner {
    @Override
    public void newEvent(GameEvent gameEvent) {
        switch (gameEvent) {
            case TEAM_FIGHT -> System.out.println("MID : 궁각을 본다");
            case READY_TO_GET_DRAGON, READY_TO_GET_BARON -> System.out.println("MID : 미드 라인을 민다.");
            case GET_DRAGON, GET_BARON -> System.out.println("MID : 팀원과 합류한다.");
            case ACE -> System.out.println("MID : 포탑을 민다.");
            case ENEMY_ACE -> System.out.println("MID : 아이템을 산다.");
            case GG -> System.out.println("MID : GG");
        }
    }
}
\`\`\`

옵저버는 대상자로부터 전달 받은 이벤트를 확인하여, 이벤트마다 특정한 행동을 취할 수 있다.

### 메인 클래스

이제 메인클래스를 만들어 특정 이벤트를 발생시켜 보자.

- Main.class

\`\`\`jsx
public class Main {
    public static void main(String[] args) {
        boolean isTimeToStop = false;
        
        // 대상자와 옵저버 인스턴스를 생성한다.
        Game order = new System();
        Laner top = new Top();
        Laner jungle = new Jungle();
        Laner mid = new Mid();
        Laner bottom = new Bottom();
        Laner support = new Support();

        // 옵저버들이 대상자를 구독한다.
        order.subscribe(top);
        order.subscribe(jungle);
        order.subscribe(mid);
        order.subscribe(bottom);
        order.subscribe(support);
        
        // 실행(이벤트 발생)
        while(!isTimeToStop) {
            java.lang.System.out.println("===============Select Game Event===============");
            java.lang.System.out.println("1.한타 2.용 싸움 준비 3.바론 싸움 준비 4.용 출현 5.바론 출현 6.적군 전멸 7.아군 전멸 0.포기");
            Scanner sc = new Scanner(java.lang.System.in);
            String input = sc.next();
            switch (input){
                case "1" -> order.notifying(GameEvent.TEAM_FIGHT);
                case "2" -> order.notifying(GameEvent.READY_TO_GET_DRAGON);
                case "3" -> order.notifying(GameEvent.READY_TO_GET_BARON);
                case "4" -> order.notifying(GameEvent.GET_DRAGON);
                case "5" -> order.notifying(GameEvent.GET_BARON);
                case "6" -> order.notifying(GameEvent.ACE);
                case "7" -> order.notifying(GameEvent.ENEMY_ACE);
                case "0" -> {
                    order.notifying(GameEvent.GG);
                    isTimeToStop = true;
                }
            }
        }

    }
}
\`\`\`

**실행** 

\`\`\`bash
===============Select Game Event===============
1.한타 2.용 싸움 준비 3.바론 싸움 준비 4.용 출현 5.바론 출현 6.적군 전멸 7.아군 전멸 0.포기
3
---------바론 출현 30초 전...---------
TOP : 탑라인을 민다.
JUNGLE : 윗 동선을 탄다.
MID : 미드 라인을 민다.
ADCarry : 팀원과 합류한다.
SUPPORTER : 바론 근처 시야를 체크한다.
===============Select Game Event===============
1.한타 2.용 싸움 준비 3.바론 싸움 준비 4.용 출현 5.바론 출현 6.적군 전멸 7.아군 전멸 0.포기
2
----------용 출현 30초 전...---------
TOP : 탑라인을 민다.
JUNGLE : 아랫 동선을 탄다.
MID : 미드 라인을 민다.
ADCarry : 봇 라인을 민다.
SUPPORTER : 용 근처 시야를 체크한다.
\`\`\`

위의 예시처럼 특정 이벤트에 따라 옵저버들이 각 다른 행동을 취하는 것을 확인할 수 있다.

이때, 특정 옵저버가 구독 취소를 한다면…

\`\`\`bash
        // 구독 취소
        order.unSubscribe(bottom);
\`\`\`

**결과**

\`\`\`bash
===============Select Game Event===============
1.한타 2.용 싸움 준비 3.바론 싸움 준비 4.용 출현 5.바론 출현 6.적군 전멸 7.아군 전멸 0.포기
4
---------용 출현!---------
TOP : 탑라인을 민다.
JUNGLE : 용을 친다.
MID : 팀원과 합류한다.
SUPPORTER : 용을 친다.
===============Select Game Event===============
\`\`\`

위 처럼 구독을 취소한 옵저버(bottom)는 알림 대상에서 제외되어, 이벤트가 발생하여도 아무런 행동을 취하지 않는 것을 확인할 수 있다.`,uv=`---
title: "리액티브 프로그래밍(Reactive Programming)"
date: "2025-12-20"
description: "리액티브 프로그래밍에 대하여 간단하게 정리한 글입니다."
tags: ["JAVA"]
---

> *본 포스팅에 사용된 모든 이미지는 GEMINI를 통해 생성된 이미지 입니다.*

# 리액티브 프로그래밍(Reactive Programming)

## 리액티브 프로그래밍이란?

프로그래밍 패러다임 중 하나로 데이터의 **흐름**과 **변화**에 중점을 두는 프로그래밍 방식이다. 이는 비동기 데이터 스트림을 통해 더 효율적인 데이터 처리를 위해 사용된다.

선언형 프로그래밍 방식을 사용하며, 이벤트 기반 아키텍처를 통하여 데이터의 변화를 감지하고 데이터 변화에 따라 반응하는 프로그래밍이다.

### 선언형 프로그래밍(Declarative Programming)

선언형 프로그래밍은 실행할 동작을 구체적으로 명시하는 것이 아닌 "~~한 상황에서는 ~~하게 실행해라"와 같이 상황에 따라 무엇을 실행할지만 지정하는 형식의 프로그래밍이다.

### 이벤트 기반(Event-Driven)

데이터 상태의 변화는 이벤트로 취급되며, 이벤트에 반응하여 특정 동작을 수행한다.

> 예를 들면, Flux를 사용할 때 data A을 가지고 flatMap 내부에서 어떤 작업을 통하여 data B를 리턴한다고 하자. B가 정상적인 데이터, 비어있는 데이터, 또는 작업 중 오류가 발생했다고 가정해보자. 이러한 상황들을 데이터 변화로 간주하여 doOnSuccess, switchIfEmpty, doOnError 등으로 변화를 감지하고 상황에 따라 동작을 수행한다.

### 비동기성(Asynchrony)

비동기적인 작업을 쉽게 다룰 수 있도록 한다.

### 백프레셔(Backpressure)

Backpressure는 받는 쪽의 입장을 고려한 프로세스라고 생각할 수 있다.

만약 Publisher가 데이터를 발행하는 속도에 비해 Subscriber의 처리 속도가 느릴 경우, Publisher가 Subscriber가 처리할 수 있는 만큼의 데이터만 요청에 의해 발행하는 것이다. 이는 Pull 방식의 데이터 요청을 통해 이루어진다.

**1. Publisher (생산자)**

- 데이터를 생성하고 통지하는 역할. Subscriber에게 데이터 스트림을 제공한다.
- 데이터 생산 및 발행을 담당한다.

**2. Subscriber (소비자)**

- Publisher가 발행하는 데이터 스트림을 수신하는 역할.
- Publisher에게 데이터를 요청하고(Pull), 받은 데이터를 처리한다.

**3. Subscription (구독)**

- Subscriber가 Publisher에게 데이터를 요청하는 과정.
- Subscriber는 Publisher에게 데이터를 요청하고, Publisher는 Subscriber에게 데이터를 전달한다.

**4. Operator (연산자)**

- Publisher와 Subscriber 사이에서 데이터 스트림을 변환하는 작업을 수행한다.
- 데이터 스트림을 조작하여 새로운 데이터 스트림을 생성한다.
- 데이터 처리 로직을 캡슐화하여 재사용성을 높인다.

## Publisher

Publisher는 데이터를 생성하고 발행하는 역할을 한다. 발행되는 데이터는 구독자(Subscriber)가 구독하는 형식으로 처리된다.

대표적인 Publisher 인터페이스 구현체로 **Flux**와 **Mono**가 있다.

### Flux

리액티브 프로그래밍에서 Publisher 역할을 맡는다. Flux는 0개부터 N개까지 T 타입의 데이터를 방출하지만, Subscriber가 Subscribe를 하기 전까지는 아무런 반응이 없다.

onComplete 이벤트가 발생하면 완료하고, onError 이벤트가 발생하면 에러를 발생시킨다. 두 이벤트는 터미널 이벤트로 흐름을 종료시키며, 이러한 터미널 이벤트가 발생하지 않으면 무한히 유지된다.

> Flux를 사용할 때는 Flux 데이터에서 flatMap을 이용해서 Flux 내부의 데이터를 Mono로 변환하여 데이터를 처리했다. forEach 느낌이다.

### Mono

마찬가지로 리액티브 프로그래밍에서 Publisher 역할을 맡는다. Mono는 0개 혹은 1개의 T 타입의 데이터를 방출한다. Subscriber가 Subscribe를 하기 전까지는 아무런 반응을 하지 않는다.

## Cold Publisher VS Hot Publisher

### Cold Publisher

![cold.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/cold_publisher.png)

**Cold Publisher**는 구독자(Subscriber)가 구독(Subscribe)을 하는 순간 데이터를 생성해서 방출한다. Cold Publisher는 파일 읽기, 웹 API 요청 등 Subscriber에 따라 독립적인 데이터 스트림을 제공한다.

**즉, 구독자는 각 구독 시점이 달라도 Publisher가 방출하는 데이터를 모두 받을 수 있다.**

**예제**
\`\`\`java
public class ColdPublisher {
    public static void main(String[] args) {
        Flux<Integer> source = Flux.fromIterable(Arrays.asList(1, 2, 3, 4));

        source.subscribe(i -> System.out.println("구독자 1: " + i));
        source.subscribe(i -> System.out.println("구독자 2: " + i));
    }
}
\`\`\`
\`\`\`bash
구독자 1: 1
구독자 1: 2
구독자 1: 3
구독자 1: 4
구독자 2: 1
구독자 2: 2
구독자 2: 3
구독자 2: 4

Process finished with exit code 0
\`\`\`

위 예제와 같이 구독 시점에 상관없이 데이터를 처음부터 전달받을 수 있다.

### Hot Publisher

![hot.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/hot_publisher.png)

**Hot Publisher**는 구독자(Subscriber)가 없더라도 데이터를 먼저 생성하고 스트림에 push하는 Publisher이다. 여러 Subscriber에게 동일한 데이터를 전달하며, 구독 시점에 따라 구독자(Subscriber)는 받지 못하는 데이터가 존재할 수 있다.

**구독자는 각 구독 시점에 따라, 당시에 Publisher가 방출하는 데이터만을 받을 수 있다.**

**예제**
\`\`\`java
public class HotPublisher {
    public static void main(String[] args) {
        Sinks.Many<Integer> source = Sinks.many().multicast().onBackpressureBuffer();
        Flux<Integer> hotFlux = source.asFlux();

        // 1번 구독자 구독 시작
        hotFlux.subscribe(i -> System.out.println("구독자 1: " + i));

        source.tryEmitNext(1);
        source.tryEmitNext(2);

        // 2번 구독자 구독 시작
        hotFlux.subscribe(i -> System.out.println("구독자 2: " + i));

        source.tryEmitNext(3);
        source.tryEmitNext(4);
        source.tryEmitComplete();
    }
}
\`\`\`
\`\`\`bash
구독자 1: 1
구독자 1: 2
구독자 1: 3
구독자 2: 3
구독자 1: 4
구독자 2: 4

Process finished with exit code 0
\`\`\`

위 예제와 같이 구독자는 구독 시점에 따라 해당 시점에 발행되는 데이터만 전달받아, 구독자 2는 구독 후 발행된 3, 4만 전달받게 된다.


### Cold Publisher vs Hot Publisher

| 구분 | Cold Publisher | Hot Publisher |
|------|----------------|---------------|
| **데이터 생성 시점** | 구독 시점에 데이터 생성 | 구독과 관계없이 데이터 생성 |
| **데이터 공유** | 각 구독자가 독립적인 데이터 스트림 수신 | 모든 구독자가 동일한 데이터 스트림 공유 |
| **구독 시점** | 구독 시점과 무관하게 모든 데이터 수신 가능 | 구독 시점 이후의 데이터만 수신 가능 |
| **리소스 사용** | 구독자마다 독립적인 리소스 사용 | 하나의 리소스를 여러 구독자가 공유 |
| **장점** | - 각 구독자가 처음부터 끝까지 모든 데이터를 받을 수 있음<br>- 구독자별 독립적인 처리 가능<br>- 재실행이 쉬움 | - 리소스 효율적 (하나의 스트림을 여러 구독자가 공유)<br>- 실시간 데이터 브로드캐스팅에 적합<br>- 구독자 수에 관계없이 일정한 성능 |
| **단점** | - 구독자가 많을수록 리소스 소비 증가<br>- 동일한 작업을 구독자마다 반복 수행 | - 늦게 구독한 경우 이전 데이터를 놓칠 수 있음<br>- 구독자 간 데이터 동기화 고려 필요 |
| **사용 예시** | - HTTP 요청<br>- 파일 읽기<br>- 데이터베이스 쿼리<br>- 독립적인 작업 처리 | - 실시간 주식 시세<br>- 센서 데이터 스트림<br>- 채팅 메시지<br>- 이벤트 브로드캐스팅 |
| **대표적인 예** | \`Flux.fromIterable()\`, \`Mono.just()\`, \`Flux.range()\` | \`Sinks\`, \`ConnectableFlux\`, \`share()\` |`,sv=`---
title: "데이터 유실을 막는 방법 RabbitMQ 클러스터링(Clustering)"
date: "2026-01-10"
description: "RabbitMQ 클러스터링(Clustering)에 관하여 정리한 글입니다."
tags: ["Programming"]
---

# RabbitMQ 클러스터링(Clustering)

## RabbitMQ 클러스터링이란?

RabbitMQ 클러스터링은 여러 개의 RabbitMQ 노드를 하나의 RabbitMQ를 사용하는 것처럼 사용하는 기술이다. 이를 통해 데이터 유실을 방지하고, 노드 장애 시에도 서비스 지속성을 유지할 수 있다.

## 어떻게 장애 시에도 서비스를 유지할 수 있을까?

클러스터를 구성하면 RabbitMQ는 내부적으로 **Mnesia**라는 Erlang 분산 데이터베이스를 사용하여 클러스터 전체의 상태를 관리한다. 모든 노드는 서로 아래의 정보를 동일하게 공유하고 있다.

- **큐 정의(Queue Definitions)** - 큐 이름, 설정값(durable, auto-delete 등)
- **익스체인지(Exchanges)** - 익스체인지 타입(Direct, Topic, Fanout, Headers 등)
- **바인딩(Bindings)** - 익스체인지와 큐 사이의 연결 고리 및 라우팅 키 정보
- **가상 호스트(Virtual Hosts)** - 논리적으로 분리된 메시징 환경
- **사용자 및 권한(Users & Permissions)** - 계정 및 계정의 접근 권한

하지만 중요한 점은 위의 **메타데이터만 공유**된다는 것이다. 실제 메시지 데이터는 기본적으로 큐가 생성된 노드에만 존재한다. 메시지까지 복제하려면 추가적인 설정이 필요하다.

## 클러스터 노드 타입

RabbitMQ 클러스터는 두 가지 타입의 노드로 구성된다.

### Disc Node (디스크 노드)

- 메타데이터를 디스크에 저장하는 노드
- 재시작 후에도 메타데이터 유지
- 클러스터에 최소 1개 이상 필요
- 안정성이 중요한 프로덕션 환경에서 사용

### RAM Node (램 노드)

- 메타데이터를 메모리에만 저장하는 노드
- 빠른 성능이 필요한 경우 사용
- 재시작 시 메타데이터 손실 가능
- 최소 1개의 Disc Node와 함께 사용해야 함

> 일반적으로 모든 노드를 Disc Node로 구성하는 것을 권장한다. RAM Node는 특수한 경우에만 사용한다.
> 

## 메시지 복제 방식

클러스터를 구성했다고 해서 자동으로 메시지가 복제되는 것은 아니다. 메시지 복제를 위해서는 추가 설정이 필요하다.

### 일반 큐 (Classic Queue)

- 기본 설정의 큐
- 메타데이터만 모든 노드에 공유
- 실제 메시지는 큐가 생성된 노드에만 존재
- 해당 노드가 다운되면 메시지 접근 불가

### Mirrored Queue (HA Queue)

- 메시지를 여러 노드에 복제하는 방식
- Policy를 통해 복제 노드 수 지정 가능
- Master 노드와 Mirror 노드로 구성
- RabbitMQ 3.8 이후로는 Deprecated 되어 Quorum Queue 사용 권장

**설정 예시**

\`\`\`bash
rabbitmqctl set_policy ha-all "^" '{"ha-mode":"all"}'
\`\`\`

### Quorum Queue

- RabbitMQ 3.8 이후 권장되는 복제 방식
- Raft 합의 알고리즘 기반
- 높은 가용성과 데이터 안정성 제공
- 최소 3개 이상의 노드 권장

**생성 예시**

\`\`\`java
Map<String, Object> args = new HashMap<>();
args.put("x-queue-type", "quorum");
channel.queueDeclare("quorum-queue", true, false, false, args);

\`\`\`

## 클러스터 구성 방법

### 사전 준비사항

1. 모든 노드가 동일한 **Erlang Cookie** 사용
2. 노드 간 네트워크 연결 가능
3. 동일한 RabbitMQ 버전 사용

### Erlang Cookie 설정

\`\`\`bash
# 모든 노드에서 동일한 쿠키 설정
echo "SAME_SECRET_COOKIE" > /var/lib/rabbitmq/.erlang.cookie
chmod 400 /var/lib/rabbitmq/.erlang.cookie
chown rabbitmq:rabbitmq /var/lib/rabbitmq/.erlang.cookie

\`\`\`

### 클러스터 구성

**Node1 (첫 번째 노드)**

\`\`\`bash
# RabbitMQ 시작
systemctl start rabbitmq-server

\`\`\`

**Node2, Node3 (추가 노드)**

\`\`\`bash
# RabbitMQ 애플리케이션 중지
rabbitmqctl stop_app

# Node1에 조인
rabbitmqctl join_cluster rabbit@node1

# RabbitMQ 애플리케이션 시작
rabbitmqctl start_app

\`\`\`

### 클러스터 상태 확인

\`\`\`bash
# 클러스터 상태 확인
rabbitmqctl cluster_status

# 결과 예시
Cluster status of node rabbit@node1 ...
[{nodes,[{disc,[rabbit@node1,rabbit@node3]},
         {ram,[rabbit@node2]}]},
 {running_nodes,[rabbit@node3,rabbit@node2,rabbit@node1]}]

\`\`\`

## 클러스터링의 장단점

| 구분 | 장점 | 단점 |
| --- | --- | --- |
| **가용성** | 노드 장애 시에도 서비스 지속 | 설정 복잡도 증가 |
| **확장성** | 수평적 확장 가능 | 네트워크 오버헤드 발생 |
| **성능** | 부하 분산 가능 | Split-brain 문제 발생 가능 |
| **안정성** | 데이터 복제를 통한 안정성 확보 | 메시지 복제 시 성능 저하 가능 |

## 네트워크 파티션 처리

클러스터 환경에서 네트워크 분할(Network Partition)이 발생하면 Split-brain 문제가 발생할 수 있다. RabbitMQ는 이를 처리하기 위한 여러 전략을 제공한다.

> 💡 **Split-brain이란?**
>
> 클러스터링된 네트워크 환경에서 통신 단절로 인하여 노드가 서로 죽은 것으로 오인하고, 각각 스스로를 Primary라고 인식하는 상황을 말한다.

### pause_minority

- 소수의 노드가 있는 파티션을 일시 중지
- 과반수가 있는 파티션만 동작
- 홀수 개의 노드 권장

### pause_if_all_down

- 지정된 노드가 모두 다운되면 일시 중지
- 특정 노드에 대한 의존성 설정 가능

### autoheal

- 자동으로 파티션을 감지하고 복구
- 승자를 선택하여 나머지 노드를 재시작

**설정 예시**

\`\`\`bash
# rabbitmq.conf
cluster_partition_handling = pause_minority
\`\`\`

## 결론

RabbitMQ 클러스터링은 고가용성과 확장성을 제공하는 강력한 기능이다. 하지만 구성과 관리가 복잡하므로 실제 요구사항을 분석한 후 도입해야 한다.

### 클러스터링이 필요한 경우

- 메시지 손실이 치명적인 서비스
- 높은 가용성이 요구되는 시스템
- 대용량 트래픽 처리가 필요한 경우

### 단일 노드로 충분한 경우

- 개발/테스트 환경
- 트래픽이 적은 서비스
- 메시지 손실이 허용되는 경우

결국 시스템의 요구사항과 운영 환경을 고려하여 적절한 구성을 선택하는 것이 중요하다.`,rv=`---
title: "Mirrored Queue VS Quorum Queue"
date: "2026-01-14"
description: "RabbitMQ Mirrored Queue와 Quorum Queue에 대하여 정리한 글입니다."
tags: ["Programming"]
---

# RabbitMQ Mirrored Queue vs Quorum Queue

RabbitMQ 클러스터 환경에서 메시지 유실을 방지하기 위한 두 가지 주요 메시지 복제 방식인 Mirrored Queue와 Quorum Queue에 대해 알아보자.

## 왜 메시지 복제가 필요할까?

RabbitMQ 클러스터를 **메타데이터**는 자동으로 모든 노드에 공유된다. 하지만 **실제 메시지**는 기본적으로 큐가 생성된 노드에만 저장된다.

>💡**메타데이터 (metadata)?**
>
>RabbitMQ에서의 메타데이터는 메시징 서비스를 구성하는 설정 정보이다.
>예) 큐 이름, 큐 설정값 (durable, auto-delete 등), 익스체인지, 바인딩 규칙, 계정 정보 등


즉, 특정 노드에 장애가 발생하면 해당 노드에 저장된 메시지에 접근할 수 없게 된다. 이러한 문제를 해결하기 위해 메시지를 여러 노드에 복제하는 방식이 필요하다.

## Mirrored Queue (HA Queue)

Mirror Queue는 RabbitMQ 3.0부터 도입된 고가용성 큐이다. **RabbitMQ 3.8 이후로는 Deprecated**되어 더 이상 권장되지 않는다.

>💡**HA란?**
>
>**HA(High Availability, 고가용성)** 는 시스템이나 서비스가 **장애 없이 지속적으로 운영**되는 능력을 의미한다.


### 동작 방식

\`\`\`
Primary Node (원본)
    ↓ 복제
Mirror Node 1 (복사본)
    ↓ 복제
Mirror Node 2 (복사본)

\`\`\`

- 하나의 Primary 노드가 모든 읽기/쓰기 처리를 담당한다.
- Mirror 노드들은 Primary의 메시지를 복제만 한다.
- Primary가 다운되면 Mirror 중 하나가 새로운 Primary로 승격된다.

### 설정 방법

Mirror Queue는 Policy를 통해 설정한다.

\`\`\`bash
# 모든 큐를 모든 노드에 복제
rabbitmqctl set_policy ha-all "^" '{"ha-mode":"all"}'

# 특정 큐만 2개 노드에 복제
rabbitmqctl set_policy ha-two "^my-queue$" '{"ha-mode":"exactly","ha-params":2}'

# 정규식으로 특정 패턴의 큐만 복제
rabbitmqctl set_policy ha-order "^order-" '{"ha-mode":"all"}'

\`\`\`

### 장점

- 설정이 비교적 간단하다.
- 기존 Classic Queue와 호환성이 좋다.
- Policy를 통해 유연하게 관리 가능하다.

### 단점

- Primary에 모든 부하가 집중된다.
- Primary 장애 시 일부 메시지 손실이 발생할 수 있다.
- Split-brain 상황에서 데이터 불일치가 발생할 수 있다.
- 네트워크 파티션 처리가 약하다.
- 성능이 Quorum Queue보다 떨어진다.

## Quorum Queue

Quorum Queue는 RabbitMQ 3.8부터 도입된 복제 큐이다. **Raft 합의 알고리즘** 을 기반으로 하며, 현재 **RabbitMQ에서 공식적으로 권장** 하는 방식이다.

>💡**Raft 합의 알고리즘?**
>
>분산 시스템에서 노드 간 합의를 달성하기 위한 알고리즘이다. 과반수의 노드가 동의해야만 데이터가 커밋되므로, 강력한 데이터 일관성을 보장한다.

### 동작 방식

\`\`\`
Node 1 (Leader/Follower)
    ↕ Raft 합의
Node 2 (Leader/Follower)
    ↕ Raft 합의
Node 3 (Leader/Follower)

\`\`\`

- 모든 노드가 동등한 관계를 가진다. (Leader는 선출됨)
- 과반수(Quorum) 합의를 통해 메시지를 저장한다.
- 최소 3개 노드를 권장한다. (홀수 개 권장)

### 설정 방법

Quorum Queue는 큐 생성 시 타입을 지정하여 설정한다.

**Java 코드**

\`\`\`java
// 기본 방식
Map<String, Object> args = new HashMap<>();
args.put("x-queue-type", "quorum");
channel.queueDeclare("my-quorum-queue", true, false, false, args);

// Spring AMQP
@Bean
public Queue quorumQueue() {
    return QueueBuilder.durable("my-quorum-queue")
            .quorum()
            .build();
}

\`\`\`

**CLI**

\`\`\`bash
rabbitmqadmin declare queue name=my-quorum-queue durable=true \\\\
  arguments='{"x-queue-type":"quorum"}'

\`\`\`

### 장점

- **강력한 데이터 일관성**을 보장한다.
- 메시지 손실이 거의 없다.
- Split-brain 상황에서도 안전하다.
- Leader 자동 선출 및 장애 복구가 가능하다.
- Mirror Queue보다 성능이 좋다.

<aside>
💡

**Split-brain** 이란?

클러스터링된 네트워크 환경에서 통신 단절로 인하여 노드가 서로 죽은 것으로 오인하고, 각각 스스로를 Primary라고 인식하는 상황을 말한다.

</aside>

### 단점

- 최소 3개 노드가 필요하다.
- 설정이 Mirror Queue보다 약간 더 복잡하다.
- 일부 Classic Queue 기능을 지원하지 않는다. (Priority Queue 등)

## Mirrored Queue vs Quorum Queue 비교

| 구분 | Mirror Queue | Quorum Queue |
| --- | --- | --- |
| **도입 시기** | RabbitMQ 3.0 | RabbitMQ 3.8 |
| **알고리즘** | Primary-Mirror 복제 | Raft 합의 알고리즘 |
| **최소 노드 수** | 2개 | 3개 (홀수 권장) |
| **구조** | Primary 1개 + Mirror N개 | 모든 노드가 동등 |
| **읽기/쓰기** | Primary만 처리 | Leader가 처리 |
| **메시지 손실** | Primary 장애 시 일부 손실 가능 | 거의 없음 |
| **데이터 일관성** | 약함 | 강함 |
| **Split-brain 처리** | 취약 | 안전 (과반수 원칙) |
| **성능** | 보통 | 좋음 |
| **설정 방법** | Policy 기반 | 큐 타입 지정 |
| **장애 복구** | 수동 개입 필요할 수 있음 | 자동 Leader 선출 |

## 동작 과정 비교

### Mirrored Queue 동작 과정

1. Producer가 Primary 노드로 메시지 전송
2. Primary가 메시지를 자신의 큐에 저장
3. Primary가 Mirror 노드들에게 메시지 복제
4. Consumer가 Primary 노드에서 메시지 소비

### Quorum Queue 동작 과정

1. Producer가 Leader 노드로 메시지 전송
2. Leader가 Follower들에게 메시지 복제 요청
3. 과반수 노드가 메시지 저장 확인
4. Leader가 메시지 커밋 완료
5. Producer에게 ACK 전송
6. Consumer가 Leader 노드에서 메시지 소비

## 결론

**현재는 무조건 Quorum Queue 사용을 권장**한다고 한다. Mirrored Queue는 RabbitMQ 팀에서도 더 이상 권장하지 않는다고 하며, 향후 버전에서는 제거될 가능성이 높아 보인다.`,cv=`---
title: "React로 개발된 GitHub Blog 배포 방법"
date: "2026-02-05"
description: "React 기반 프로젝트 GitHub Pages 블로그 배포 방법을 정리한 글입니다."
tags: ["GitHub", "배포"]
---

## GitHub Blog(깃허브 블로그)란?

**GitHub Blog**는 GitHub Pages 기능을 활용해 무료로 호스팅할 수 있는 정적 웹사이트다. 주로 개발자들이 기술 블로그나 포트폴리오 사이트로 운영하는데 사용되며 \`{username}.github.io\` 형태의 도메인을 제공받는다.

주로 Jekyll을 기반으로 많이 사용하는 것으로 보이지만, 나는 React 기반의 프로젝트를 사용하여 GitHub Blog를 배포한 내용을 정리할 예정이다.

## Repository 생성

먼저 GitHub에서 Repository를 생성해야 한다.

이름은 \`username.github.io\`로 지정하고 생성하면 된다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/make_repository.png)

## gh-pages

gh-pages 라이브러리는 빌드된 React 프로젝트에서 빌드 결과물(\`index.html\`과 JS 파일)만 GitHub의 특정 브랜치(gh-pages)에 자동으로 푸시해주는 역할을 한다.

### 1. gh-pages 다운로드

라이브러리 사용을 위하여 콘솔창에서 아래와 같이 명령어를 입력하여 다운받아야 한다.
\`\`\`bash
npm install gh-pages --save-dev
\`\`\`

### 2. package.json 파일 수정

React 프로젝트는 빌드 시 모든 리소스(JS, CSS 등)의 경로를 도메인의 루트(\`/\`)를 기준으로 생성한다. 하지만 GitHub Pages는 보통 \`https://username.github.io/repo-name/\`과 같이 **서브 디렉토리(Sub-directory)** 경로를 사용한다.

때문에 기본 설정 그대로 배포하면 브라우저가 리소스 파일을 찾지 못하는 경로 오류가 발생하게 된다. 이를 해결하기 위해 \`package.json\`에 \`homepage\` 설정을 추가하여 프로젝트가 실제로 배포될 정확한 경로를 명시해주어야 한다.
\`\`\`json
{
  // ...중략...
  "homepage": "https://kimhanwhee.github.io/",
  // ...중략...
}
\`\`\`

추가적으로 배포 과정을 수동으로 진행하려면 매번 프로젝트를 빌드하고, 생성된 \`build\` 폴더의 내용을 특정 브랜치에 복사하여 푸시하는 번거로운 과정을 거쳐야 한다. 때문에 \`scripts\` 설정 부분에도 추가 설정을 해주어야 한다.
\`\`\`json
{
  "scripts": {
    // ...중략...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
\`\`\`

위와 같이 설정하면 deploy를 수행할 때 predeploy가 먼저 실행되어 빌드와 gh-pages를 통한 배포가 가능하게 된다.

### 3. HashRouter 적용

\`HashRouter\`란 **URL의 해시(\`#\`)를 사용하여 페이지 이동을 관리하는 라우터**다. 도메인에 \`#\`가 붙을 경우, 브라우저는 \`#\` 뒷부분의 경로를 서버에 전달하지 않고 오직 루트(\`/\`) 경로에 있는 \`index.html\` 파일만 요청하도록 동작한다. 일단 \`index.html\`이 로드되면, 그 안에 포함된 React가 해시 뒤의 경로를 읽어와 해당하는 컴포넌트를 화면에 띄워준다.

\`HashRouter\`를 사용하지 않을 경우에는 **브라우저가 URL 전체를 실제 서버상의 파일 경로로 인식하여 요청**하게 되며, GitHub Pages와 같은 정적 호스팅 환경에는 해당 경로의 파일이나 폴더가 존재하지 않기 때문에 요청에 실패하여 404 에러가 발생하게 된다.

따라서 아래 코드와 같이 적용하면 된다.
\`\`\`tsx
import { HashRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
\`\`\`

## GitHub Pages 배포

gh-pages 라이브러리 설치 및 설정 준비가 완료되었다면, 내가 작성한 React 코드를 배포할 수 있는 준비가 끝난 것이다.

### 1. 작업 내용 Push

먼저 내가 완성한 작업물을 Repository와 연동 후 push한다.
\`\`\`bash
git add .
git commit -m "github blog 첫 배포 버전"
git push origin main
\`\`\`

### 2. gh-pages 배포

이후에 gh-pages를 이용해 GitHub Pages 배포를 위한 파일을 생성하여 GitHub에 올려놓아야 한다. (이 과정은 작성한 코드를 GitHub에 push하지 않아도 가능하다.)

아까 \`package.json\` 파일에서 scripts에 설정한 deploy 명령어를 입력하면 된다.
\`\`\`bash
npm run deploy
\`\`\`

해당 작업이 완료되면 gh-pages라는 이름으로 브랜치가 추가된 것을 확인할 수 있다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+1.png)

### 3. GitHub Pages 기능 설정

이제 해당 Repository에서 Settings - Pages 탭에 접속한다.

아래 그림과 같이 Branch 설정에서 gh-pages 브랜치를 지정해주면 gh-pages 라이브러리를 통해 빌드되어 푸시된 결과물 파일이 배포되게 된다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+2.png)

### 4. 결과물

이제 배포된 사이트 URL에 접속하면 내가 만든 나만의 블로그가 배포된 것을 확인할 수 있다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+3.png)

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+4.png)

## GitHub Actions를 사용한 자동 배포

위 배포까지 모두 완성되었을 경우 앞으로 main 브랜치에 나의 코드를 푸시한 후 추가적으로 \`npm run deploy\` 명령어만 수행하면 GitHub Pages에도 자동으로 배포되게 될 것이다.

하지만 나는 main에 소스 코드를 push 했을 때 자동으로 gh-pages에 빌드 결과물 파일이 자동으로 push 된다면 좋겠다고 생각했다.

그래서 나는 GitHub Actions 기능을 통해 main에 소스 코드를 푸시했을 때 자동으로 GitHub Pages에도 배포가 되게 구성하려고 한다.

### 1. Personal Access Token 생성

먼저 Settings - Developer Settings 탭으로 들어간다. (Repository settings가 아닌 user의 settings다.)

이후 Personal access tokens - Tokens (classic) 탭을 클릭 후 Generate new token (classic)을 클릭한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+5.png)

이후 Note와 Select scopes를 아래와 같이 지정한 뒤 토큰을 생성한다. Note는 원하는 대로 작성해도 무방하다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+6.png)

생성된 토큰을 잘 보관해둔다.

### 2. Repository Secret 등록

다시 Repository로 돌아가 Settings - Secrets and variables의 Actions 탭을 클릭 후 New repository secret을 선택한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+7.png)

Secret Name을 지정하고 아까 보관해둔 토큰을 Secret 값으로 지정하여 secret을 생성한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+8.png)

### 3. GitHub Actions Workflow 작성

마지막으로 Repository에서 Actions - New workflow를 클릭하여 set up a workflow yourself를 클릭한 뒤 아래와 같이 yml 파일을 작성한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+9.png)

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/image+10.png)

**deploy.yml**
\`\`\`yaml
name: Deploy Docs

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install Dependencies
        run: npm install

      - name: Build Docs
        run: npm run build

      - name: Deploy Docs
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.YOUR_ACTIONS_TOKEN }}
          publish_dir: ./dist
\`\`\`

이렇게 yml 파일을 작성하면 main 브랜치에 푸시가 되었을 때를 감지하여 빌드된 파일을 \`peaceiris/actions-gh-pages@v4\`라는 액션을 사용하여 gh-pages 브랜치에 자동 푸시까지 수행해준다.

### 4. Workflow 동작 확인

이제 main 브랜치에 코드를 푸시하면 자동으로 다음 과정이 진행된다:

1. GitHub Actions가 push 감지
2. Node.js 환경 설정
3. 의존성 설치 (\`npm install\`)
4. 프로젝트 빌드 (\`npm run build\`)
5. 빌드 결과물을 gh-pages 브랜치에 자동 푸시
6. GitHub Pages에 자동 배포

Actions 탭에서 워크플로우 실행 상태를 확인할 수 있다.


이로써 매번 명령어를 쳐주지 않아도 main에 나의 블로그 코드를 푸시하면 자동으로 GitHub Pages에 배포를 해주는 환경이 구축되었다!`,ov=`---
title: "1. CHARYEOT(차렷). - 게임 패배 범인 찾기 프로젝트"
date: "2026-03-04"
description: "개인용 프로젝트인 게임 패배의 주범 찾기 사이트"
tags: ["Project", "CHARYEOT"]
---

## CHARYEOT(차렷) 프로젝트를 기획한 이유

25년을 마지막으로 퇴사 후 이직 준비와 휴식을 취하면서, 그동안 야근에 치여 못 했던 게임을 친구들과 실컷 하고 있었다. 리그오브레전드, 발로란트, 이터널 리턴 같은 팀게임을 주로 같이 했는데, 패배하면 장난 삼아 서로를 탓하며 **"○○○ 차렷.", "○○○ 엎드려 뻗쳐."** 같은 소리를 주고받는 게 은근히 재밌었다.

그러다 문득 이런 생각이 들었다. “이걸 자동으로 판결해주는 사이트가 있으면 더 재밌지 않을까?_”_

그게 **CHARYEOT(차렷)** 프로젝트의 시작이었다.

### 외부 API부터 AI 활용까지, 다 경험해보자

개발 경력을 돌아보면, 학원도 여러 군데 다녀보고 회사에서 실무도 해봤지만, 주로 고객사 연동 규격서나 사내 API를 통한 HTTP/TCP 통신 개발이 전부였다. **외부 오픈 API를 직접 붙여서 사이트를 만들어본 경험이 전혀 없었다.**

그래서 이 프로젝트가 좋은 기회라고 생각했다. 게임 API를 활용해 전적 데이터를 가져오고, 거기서 패배 원인을 분석해 판결을 내리는 흐름이면 외부 API 연동 경험을 쌓기에 충분했다.

프로젝트를 시작하려 마음은 먹었지만 2년 7개월이라는 기간 동안 메시지 전송 플랫폼 백엔드 개발만 진행했어서 그런지 원래 없었던 디자인 감각은 소멸 직전이었고, 사이트 디자인을 어떻게 할지조차 감이 잡히지 않아 막막하였다.

그래서 나는 **Google AI Studio**의 도움을 받아 사이트의 기초 디자인을 잡아보기로 하였다.

> "게임 전적 사이트를 개인 프로젝트용으로 개발하려고 해. 누가 해당 게임의 패배 원인이었는지 재미로 판별해주는 사이트를 만들 거야."

※ 아래는 구글 AI Studio에서 생성해준 사이트 디자인이다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot-ai-studio.png)

나는 이 디자인을 바탕으로 나의 개인 프로젝트 “CHARYEOT(차렷).” 사이트 개발을 시작하며 처음 해본 내용, 고민 했던 내용들을 정리 해보려고 한다.
`,fv=`---
title: "2. CHARYEOT(차렷). - 앞으로의 계획"
date: "2026-03-05"
description: "개인용 프로젝트인 게임 패배의 주범 찾기 사이트 기획"
tags: ["Project", "CHARYEOT"]
---

"Charyeot" 프로젝트를 본격적으로 시작하기 전에 프론트엔드/백엔드 기술 스택, 구현할 게임 종류, 판단에 사용할 AI를 먼저 정해야 했다.

### 프론트엔드 — React, TypeScript, TailwindCSS

앞서 기본 디자인을 Google AI Studio에서 생성했는데, AI가 뽑아준 코드가 **React + TypeScript + TailwindCSS** 기반이었다. TypeScript는 거의 써본 적이 없었고, React와 Tailwind는 오랫동안 손을 놓아서 복습이 필요한 상황이었다. 그냥 이 스택 그대로 진행하기로 하였다.

### 백엔드 — Java, Spring Boot

백엔드는 익숙한 **Java + Spring Boot**로 정했다. 새로운 기술 스택을 써볼까 잠깐 고민했지만, 백엔드에서 AI를 연동해본 경험이 전혀 없어서 낯선 환경보다는 Spring Boot로 AI 연동 경험을 쌓아 보고 싶다고 생각하였다. 현재는 전적 검색과 판결 기능만 구현할 예정이라 DB는 사용하지 않고 진행하기로 하였다.

### AI — Gemini

연동할 AI 후보는 **ChatGPT, Gemini, Claude** 세 가지였다. 인지도, 성능, 앞으로의 발전 가능성을 봤을 때 이 셋에 대한 경험을 쌓는게 좋다고 생각했기 때문이었다. 성능이나 가격도 고려했지만, 재미를 위한 사이트인 만큼 내가 직접 예시를 던져서 답변을 받아봤을 때 답변이 재치있어 가장 마음에 들었던 **Gemini**로 결정했다.

### 구현 게임

게임 선정은 이 사이트의 목적답게 일단 친구들과 모두 같이하는/할 수 있는 게임을 우선순위로 정하였다.

1. 리그오브레전드
2. 이터널 리턴
3. 발로란트

### 구현 기능

일단 구현할 기능은 아래와 같다.

1. \`{플레이어명}#{태그명}\` 검색 시 해당 플레이어 프로필 정보
2. 최근 20게임 전적 정보
3. 게임 상세 정보 (참여 플레이어, 레벨, 스펠, 특성, 아이템 등)
4. AI 판별 기능

일단 주요 기능부터 먼저 구현하고, 개발하면서 생각나는 기능은 그때그때 추가해나갈 예정이다.
`,dv=`---
title: "3. CHARYEOT(차렷). - 리그 오브 레전드 (1) - API Key 발급받기"
date: "2026-03-06"
description: "CHARYEOT - 리그 오브 레전드 API Key를 발급 받는 방법"
tags: ["Project", "CHARYEOT"]
---

이전에 우선 순위를 정했던 것처럼 먼저 ‘리그 오브 레전드’ 라는 게임의 기능 구현을 우선적으로 하기로 하였다.

## API 키를 발급 받아보자

먼저 사용할 API 키를 발급 받기로 하였다. API 키를 발급받는 과정은 아래와 같았다.

**사용한 API 및 사이트**

API: [https://developer.riotgames.com/docs/lol](https://developer.riotgames.com/docs/lol)

이미지 데이터: [https://ddragon.leagueoflegends.com](https://ddragon.leagueoflegends.com/realms/na.json)

### 1. 라이엇 게임즈 개발자 포탈 ([https://developer.riotgames.com/docs/lol](https://developer.riotgames.com/docs/lol)) 접속

### 2. 사이트 정보 등록

기본적으로 라이엇에서 제공해주는 API 키가 있지만 RateLimit도 낮고 Key 유효 기간이 1일 밖에 되지 않아 정식으로 등록한 후 키를 받는 것이 좋다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_1_4.png)

나는 개인용 프로젝트를 진행할 거기 때문에 PERSONAL API KEY를 클릭한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_1_1.png)

이용약관에 동의를 하면 아래와 같이 진행할 프로젝트(애플리케이션) 정보를 입력하는 폼이 나온다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_1_2.png)

내용 작성 후 SUBMIT을 클릭하면 아래와 같이 나의 프로젝트 정보 및 API Key가 주어진다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_1_3.png)

이제 해당 API Key를 가지고 리그 오브 레전드의 게임 데이터를 받아 올 수 있게 되었다.
`,hv=`---
title: "4. CHARYEOT(차렷). - 리그 오브 레전드 (2) - 유저 프로필 불러오기"
date: "2026-03-07"
description: "CHARYEOT - 리그 오브 레전드 API를 사용하여 유저 정보 불러오기"
tags: ["Project", "CHARYEOT"]
---

기능 구현의 첫 번째, 검색한 유저의 프로필 정보를 불러오는 것이다.

## Riot API 구조 파악

API를 살펴보다가 특이한 점을 발견했다. 전 세계 서버가 나뉘어져 있는 게임답게 요청 URL도 서버별로 나뉘어져 있었는데, **대륙 단위**와 **나라 단위** 두 가지로 구분되어 있었다.

\`\`\`
https://asia.api.riotgames.com   // 대륙 단위
https://kr.api.riotgames.com     // 나라 단위
\`\`\`

그래서 WebClient 설정을 할 때 두 개의 Bean으로 분리해서 필요한 API를 호출할 때 맞는 URL로 요청할 수 있도록 구현했다.

**application.yml**

\`\`\`yaml
external:
  riot:
    url: "https://%s.api.riotgames.com"
    api-key: "RGAPI-94dd5cc2-a72f-4fdd-a73d-b4f12b42fcc8"
\`\`\`

**RiotWebClientConfig.java**

\`\`\`java
@Setter
@Configuration
public class RiotWebClientConfig {
    @Value("\${external.riot.api-key}")
    private String apiKey;
    @Value("\${external.riot.url}")
    private String url;

    @Bean("riotKrWebClient")
    public WebClient riotKrWebClient() {
        return createRiotWebClient("kr");
    }

    @Bean("riotAsiaWebClient")
    public WebClient riotAsiaWebClient() {
        return createRiotWebClient("asia");
    }

    private WebClient createRiotWebClient(String region) {
        return WebClient.builder()
                .baseUrl(String.format(url, region))
                .defaultHeader("X-Riot-Token", apiKey)
                .defaultHeader(HttpHeaders.USER_AGENT, "Mozilla/5.0 ...")
                .defaultHeader(HttpHeaders.ACCEPT_LANGUAGE, "ko-KR,ko;q=0.9")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }
}
\`\`\`

이제 Riot API를 호출할 준비는 끝났다.

## 프로필 불러오기

리그 오브 레전드는 소환사명뿐만 아니라 태그까지 함께 조회에 사용해야 한다. 즉 **"졸린 소환사#태그1"** 과 **"졸린 소환사#태그2"** 는 다른 사람이다.

API 구조를 확인해보니 프로필 정보를 바로 가져오는 게 아니라, **소환사명 + 태그 → 고유 ID(PUUID) 조회 → 그 ID로 프로필 조회** 순서로 두 번 호출해야 했다.

### 1단계 — PUUID 조회

\`ACCOUNT-V1\` API로 소환사명과 태그를 **url**에 **Path Variable**로 넘기면 해당 유저의 고유 ID(PUUID)를 반환해준다.

\`\`\`
GET /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}
\`\`\`

| Request  | 타입   | 설명     |
| -------- | ------ | -------- |
| gameName | string | 소환사명 |
| tagLine  | string | 태그명   |

| Response | 타입   | 설명                |
| -------- | ------ | ------------------- |
| puuid    | string | 유저 고유 ID (78자) |
| gameName | string | 소환사명            |
| tagLine  | string | 태그명              |

\`\`\`java
public AccountDTO getSummonerAccount(String gameName, String tagLine) throws Exception {
    try {
        return riotAsiaWebClient.get()
                .uri("/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}", gameName, tagLine)
                .retrieve()
                .bodyToMono(AccountDTO.class)
                .block();
    } catch (Exception e) {
        log.error("error occurred while get summoner account :", e);
        throw new Exception(e);
    }
}
\`\`\`

---

### 2단계 — 프로필 정보 조회

받아온 PUUID로 \`SUMMONER-V4\` API를 호출해 실제 프로필 데이터를 가져온다. 마찬가지로 **Path Variable**로 데이터를 넘긴다.

\`\`\`
GET /lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}
\`\`\`

| Response      | 타입   | 설명             |
| ------------- | ------ | ---------------- |
| profileIconId | int    | 프로필 아이콘 ID |
| summonerLevel | long   | 소환사 레벨      |
| puuid         | string | 유저 고유 ID     |
| revisionDate  | long   | 마지막 수정 일시 |

\`\`\`java
public SummonerDTO getSummoner(String puuid) {
    return riotKrWebClient.get()
            .uri("/lol/summoner/v4/summoners/by-puuid/{puuid}", puuid)
            .retrieve()
            .bodyToMono(SummonerDTO.class)
            .block();
}
\`\`\`

---

### 3단계 — 데이터 통합

두 API에서 받아온 데이터를 하나의 \`ProfileDTO\`로 합쳐서 프론트에 전달하도록 구현했다.

**LolController.java**

\`\`\`java
@GetMapping("/summoner/profile/{summonerName}/{summonerTag}")
private ResponseEntity<ProfileDTO> getSummonerProfile(
        @PathVariable("summonerName") String summonerName,
        @PathVariable("summonerTag") String summonerTag) {
    try {
        return ResponseEntity.ok(lolService.getProfile(summonerName, summonerTag));
    } catch (Exception e) {
        return ResponseEntity.internalServerError().build();
    }
}
\`\`\`

**LolService.java**

\`\`\`java
public ProfileDTO getProfile(String gameName, String tagLine) throws Exception {
    AccountDTO accountDTO = getSummonerAccount(gameName, tagLine);
    SummonerDTO summonerDTO = getSummoner(accountDTO.getPuuid());
    return new ProfileDTO(accountDTO, summonerDTO);
}
\`\`\`

**ProfileDTO.java**

\`\`\`java
@Getter @Setter @NoArgsConstructor
public class ProfileDTO {
    private String puuid;
    private String gameName;
    private String tagLine;
    private int profileIconId;
    private long revisionDate;
    private long summonerLevel;

    public ProfileDTO(AccountDTO accountDTO, SummonerDTO summonerDTO) {
        this.puuid = accountDTO.getPuuid();
        this.gameName = accountDTO.getGameName();
        this.tagLine = accountDTO.getTagLine();
        this.profileIconId = summonerDTO.getProfileIconId();
        this.revisionDate = summonerDTO.getRevisionDate();
        this.summonerLevel = summonerDTO.getSummonerLevel();
    }
}
\`\`\`

---

## 조회 결과

\`\`\`
GET /v1/lol/summoner/profile/우핫ha/KR1
\`\`\`

\`\`\`json
{
  "gameName": "우핫ha",
  "tagLine": "KR1",
  "puuid": "6qhAX5HSIKs8F7DJC4_HqkheoXtl-mgMQZjQhYN8T5_...",
  "profileIconId": 1053,
  "summonerLevel": 297,
  "revisionDate": 1772812720000
}
\`\`\`

유저 프로필 데이터가 정상적으로 넘어오는 걸 확인했다.

이제 프론트에서 데이터를 화면에 뿌려주기만 하면 되는데, 한 가지 문제가 생겼다. 프로필 아이콘 데이터가 이미지 URL이나 파일이 아니라 **이미지 ID만 제공**되는 상황이었다.

해당 ID에 맞는 이미지를 가져오는 방법은 다음 글에서 이어서 다루도록 하겠다.
`,mv=`---
title: "5. CHARYEOT(차렷). - 리그 오브 레전드 (3) - 이미지 불러오기"
date: "2026-03-10"
description: "CHARYEOT - 리그 오브 레전드 이미지 데이터 가져오기"
tags: ["Project", "CHARYEOT"]
---

이번에는 리그 오브 레전드의 이미지 데이터를 불러와보려고 한다.

---

## 문제 파악

이전에 불러온 프로필 데이터에서 봤듯이 Riot API는 유저 아이콘의 **ID만** 반환하고 이미지 자체는 제공하지 않는다. 그래서 이미지를 어떻게 가져올지 API 규격을 살펴보던 중 라이엇 게임즈에서 제공하는 **CDN**을 발견했다.

> **Riot Developer Portal - Data Dragon** : https://developer.riotgames.com/docs/lol#data-dragon

이곳에서 라이엇 게임즈의 게임 데이터를 직접 다운받거나 URL을 통해 그때그때 가져올 수 있었다.

---

## Data Dragon으로 이미지 불러오기

프로필 아이콘 이미지는 아래 URL 형식으로 가져올 수 있었다.

\`\`\`
https://ddragon.leagueoflegends.com/cdn/{version}/img/profileicon/{iconId}.png
\`\`\`

이 URL을 완성시키려면 **Data Dragon 최신 버전**과 **iconId** 두 가지가 필요했다. iconId는 이미 가지고 있으니 버전 정보만 가져오면 됐다.

버전 정보는 아래 JSON 파일에서 확인할 수 있었다.

\`\`\`
https://ddragon.leagueoflegends.com/realms/kr.json
\`\`\`

버전 정보는 아이콘 이미지뿐만 아니라 다른 Data Dragon 데이터를 불러올 때도 공통으로 사용되기 때문에, 사이트 진입 시 우선적으로 버전을 불러오도록 구현했다.

---

## 구현

**types/lol.ts**

\`\`\`tsx
// DataDragon 버전 데이터
export interface DataDragon {
  v: string;
  l: string;
  cdn: string;
  dd: string;
  lg: string;
  css: string;
}
\`\`\`

**LolApi.ts**

\`\`\`tsx
/**
 * DataDragon 버전 조회
 */
export async function fetchDataDragonVersion(): Promise<string> {
  const res = await apiClient.get<DataDragon>(
    "https://ddragon.leagueoflegends.com/realms/kr.json",
  );
  return res.data.v; // 버전만 사용하므로 버전 데이터만 리턴
}
\`\`\`

버전 데이터는 여러 곳에서 공통으로 사용되기 때문에 **React Context**로 관리했다.

**DataDragonContext.ts**

\`\`\`tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchDataDragonVersion } from "../api/lol/LolApi";

interface DataDragonContextValue {
  version: string;
}

const DataDragonContext = createContext<DataDragonContextValue | null>(null);

export function DataDragonProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const v = await fetchDataDragonVersion();
        setVersion(v);
      } catch (error) {
        console.error("DataDragon 버전 조회 실패:", error);
      }
    };
    load();
  }, []);

  return (
    <DataDragonContext.Provider value={{ version }}>
      {children}
    </DataDragonContext.Provider>
  );
}

export function useDataDragon(): DataDragonContextValue {
  const ctx = useContext(DataDragonContext);
  if (!ctx)
    throw new Error("useDataDragon must be used within DataDragonProvider");
  return ctx;
}
\`\`\`

버전 데이터까지 확보했으니 이제 프론트엔드에서 직접 URL에 버전과 iconId를 삽입해 이미지를 불러오는 형식으로 구현했다.

**LolSearchResultsPage.tsx**

\`\`\`tsx
  const { version } = useDataDragon();
  const [profile, setProfile] = useState<Profile | null>(null);

... {중략} ...

{profile && (
  <PlayerProfile
    name={profile.gameName}
    tag={profile.tagLine}
    level={profile.summonerLevel}
    iconUrl={\`https://ddragon.leagueoflegends.com/cdn/\${version}/img/profileicon/\${profile.profileIconId}.png\`} // 이미지 url에 받아온 데이터 삽입
    onRefresh={() => loadMatches(profile.puuid, profile.gameName, profile.tagLine)}
  />
)}
\`\`\`

**PlayerProfile.tsx**

\`\`\`tsx
{
  /* 아이콘 + 레벨 */
}
<div className="relative flex-shrink-0">
  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
    {iconUrl ? (
      <img
        src={iconUrl}
        alt={\`\${name} 아이콘\`}
        className="w-full h-full object-cover"
      />
    ) : (
      <User size={36} className="text-slate-400 dark:text-slate-500" />
    )}
  </div>
  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-slate-600 text-white text-xs font-bold px-2 py-0.5 rounded-full border border-slate-700 dark:border-slate-500 whitespace-nowrap">
    Lv.{level}
  </span>
</div>;
\`\`\`

---

## 결과

페이지를 확인해보니 프로필 아이콘 이미지가 정상적으로 불러와지는 걸 확인할 수 있었다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_3_1.png)

다음 구현할 기능은 **소환사 티어 정보 및 전적 리스트**다.
`;function Tc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rl=Tc();function jm(u){rl=u}var Wa={exec:()=>null};function he(u,s=""){let r=typeof u=="string"?u:u.source,c={replace:(f,d)=>{let p=typeof d=="string"?d:d.source;return p=p.replace(Ie.caret,"$1"),r=r.replace(f,p),c},getRegex:()=>new RegExp(r,s)};return c}var pv=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ie={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i")},gv=/^(?:[ \t]*(?:\n|$))+/,yv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ei=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_c=/(?:[*+-]|\d{1,9}[.)])/,Hm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Um=he(Hm).replace(/bull/g,_c).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),xv=he(Hm).replace(/bull/g,_c).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Rc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Sv=/^[^\n]+/,Cc=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ev=he(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Cc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Av=he(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_c).getRegex(),Ou="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Tv=he("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zc).replace("tag",Ou).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bm=he(Rc).replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex(),_v=he(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bm).getRegex(),Nc={blockquote:_v,code:yv,def:Ev,fences:bv,heading:vv,hr:ei,html:Tv,lheading:Um,list:Av,newline:gv,paragraph:Bm,table:Wa,text:Sv},um=he("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex(),Rv={...Nc,lheading:xv,table:um,paragraph:he(Rc).replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",um).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex()},Cv={...Nc,html:he(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Wa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:he(Rc).replace("hr",ei).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Um).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Nv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Lm=/^( {2,}|\\)\n(?!\s*$)/,Mv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ku=/[\p{P}\p{S}]/u,Mc=/[\s\p{P}\p{S}]/u,Gm=/[^\s\p{P}\p{S}]/u,Dv=he(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Mc).getRegex(),qm=/(?!~)[\p{P}\p{S}]/u,Ov=/(?!~)[\s\p{P}\p{S}]/u,kv=/(?:[^\s\p{P}\p{S}]|~)/u,wv=he(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",pv?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Qm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,jv=he(Qm,"u").replace(/punct/g,ku).getRegex(),Hv=he(Qm,"u").replace(/punct/g,qm).getRegex(),Ym="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Uv=he(Ym,"gu").replace(/notPunctSpace/g,Gm).replace(/punctSpace/g,Mc).replace(/punct/g,ku).getRegex(),Bv=he(Ym,"gu").replace(/notPunctSpace/g,kv).replace(/punctSpace/g,Ov).replace(/punct/g,qm).getRegex(),Lv=he("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Gm).replace(/punctSpace/g,Mc).replace(/punct/g,ku).getRegex(),Gv=he(/\\(punct)/,"gu").replace(/punct/g,ku).getRegex(),qv=he(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Qv=he(zc).replace("(?:-->|$)","-->").getRegex(),Yv=he("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Qv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cu=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Xv=he(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Cu).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Xm=he(/^!?\[(label)\]\[(ref)\]/).replace("label",Cu).replace("ref",Cc).getRegex(),Vm=he(/^!?\[(ref)\](?:\[\])?/).replace("ref",Cc).getRegex(),Vv=he("reflink|nolink(?!\\()","g").replace("reflink",Xm).replace("nolink",Vm).getRegex(),sm=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Dc={_backpedal:Wa,anyPunctuation:Gv,autolink:qv,blockSkip:wv,br:Lm,code:Nv,del:Wa,emStrongLDelim:jv,emStrongRDelimAst:Uv,emStrongRDelimUnd:Lv,escape:zv,link:Xv,nolink:Vm,punctuation:Dv,reflink:Xm,reflinkSearch:Vv,tag:Yv,text:Mv,url:Wa},Zv={...Dc,link:he(/^!?\[(label)\]\((.*?)\)/).replace("label",Cu).getRegex(),reflink:he(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cu).getRegex()},hc={...Dc,emStrongRDelimAst:Bv,emStrongLDelim:Hv,url:he(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",sm).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:he(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",sm).getRegex()},Jv={...hc,br:he(Lm).replace("{2,}","*").getRegex(),text:he(hc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xu={normal:Nc,gfm:Rv,pedantic:Cv},Ja={normal:Dc,gfm:hc,breaks:Jv,pedantic:Zv},Kv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rm=u=>Kv[u];function fn(u,s){if(s){if(Ie.escapeTest.test(u))return u.replace(Ie.escapeReplace,rm)}else if(Ie.escapeTestNoEncode.test(u))return u.replace(Ie.escapeReplaceNoEncode,rm);return u}function cm(u){try{u=encodeURI(u).replace(Ie.percentDecode,"%")}catch{return null}return u}function om(u,s){var d;let r=u.replace(Ie.findPipe,(p,g,b)=>{let m=!1,E=g;for(;--E>=0&&b[E]==="\\";)m=!m;return m?"|":" |"}),c=r.split(Ie.splitPipe),f=0;if(c[0].trim()||c.shift(),c.length>0&&!((d=c.at(-1))!=null&&d.trim())&&c.pop(),s)if(c.length>s)c.splice(s);else for(;c.length<s;)c.push("");for(;f<c.length;f++)c[f]=c[f].trim().replace(Ie.slashPipe,"|");return c}function Ka(u,s,r){let c=u.length;if(c===0)return"";let f=0;for(;f<c&&u.charAt(c-f-1)===s;)f++;return u.slice(0,c-f)}function $v(u,s){if(u.indexOf(s[1])===-1)return-1;let r=0;for(let c=0;c<u.length;c++)if(u[c]==="\\")c++;else if(u[c]===s[0])r++;else if(u[c]===s[1]&&(r--,r<0))return c;return r>0?-2:-1}function fm(u,s,r,c,f){let d=s.href,p=s.title||null,g=u[1].replace(f.other.outputLinkReplace,"$1");c.state.inLink=!0;let b={type:u[0].charAt(0)==="!"?"image":"link",raw:r,href:d,title:p,text:g,tokens:c.inlineTokens(g)};return c.state.inLink=!1,b}function Wv(u,s,r){let c=u.match(r.other.indentCodeCompensation);if(c===null)return s;let f=c[1];return s.split(`
`).map(d=>{let p=d.match(r.other.beginningSpace);if(p===null)return d;let[g]=p;return g.length>=f.length?d.slice(f.length):d}).join(`
`)}var zu=class{constructor(u){Ae(this,"options");Ae(this,"rules");Ae(this,"lexer");this.options=u||rl}space(u){let s=this.rules.block.newline.exec(u);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(u){let s=this.rules.block.code.exec(u);if(s){let r=s[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ka(r,`
`)}}}fences(u){let s=this.rules.block.fences.exec(u);if(s){let r=s[0],c=Wv(r,s[3]||"",this.rules);return{type:"code",raw:r,lang:s[2]?s[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):s[2],text:c}}}heading(u){let s=this.rules.block.heading.exec(u);if(s){let r=s[2].trim();if(this.rules.other.endingHash.test(r)){let c=Ka(r,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(r=c.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(u){let s=this.rules.block.hr.exec(u);if(s)return{type:"hr",raw:Ka(s[0],`
`)}}blockquote(u){let s=this.rules.block.blockquote.exec(u);if(s){let r=Ka(s[0],`
`).split(`
`),c="",f="",d=[];for(;r.length>0;){let p=!1,g=[],b;for(b=0;b<r.length;b++)if(this.rules.other.blockquoteStart.test(r[b]))g.push(r[b]),p=!0;else if(!p)g.push(r[b]);else break;r=r.slice(b);let m=g.join(`
`),E=m.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${m}`:m,f=f?`${f}
${E}`:E;let A=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,d,!0),this.lexer.state.top=A,r.length===0)break;let D=d.at(-1);if((D==null?void 0:D.type)==="code")break;if((D==null?void 0:D.type)==="blockquote"){let M=D,G=M.raw+`
`+r.join(`
`),B=this.blockquote(G);d[d.length-1]=B,c=c.substring(0,c.length-M.raw.length)+B.raw,f=f.substring(0,f.length-M.text.length)+B.text;break}else if((D==null?void 0:D.type)==="list"){let M=D,G=M.raw+`
`+r.join(`
`),B=this.list(G);d[d.length-1]=B,c=c.substring(0,c.length-D.raw.length)+B.raw,f=f.substring(0,f.length-M.raw.length)+B.raw,r=G.substring(d.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:d,text:f}}}list(u){var r,c;let s=this.rules.block.list.exec(u);if(s){let f=s[1].trim(),d=f.length>1,p={type:"list",raw:"",ordered:d,start:d?+f.slice(0,-1):"",loose:!1,items:[]};f=d?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=d?f:"[*+-]");let g=this.rules.other.listItemRegex(f),b=!1;for(;u;){let E=!1,A="",D="";if(!(s=g.exec(u))||this.rules.block.hr.test(u))break;A=s[0],u=u.substring(A.length);let M=s[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,X=>" ".repeat(3*X.length)),G=u.split(`
`,1)[0],B=!M.trim(),L=0;if(this.options.pedantic?(L=2,D=M.trimStart()):B?L=s[1].length+1:(L=s[2].search(this.rules.other.nonSpaceChar),L=L>4?1:L,D=M.slice(L),L+=s[1].length),B&&this.rules.other.blankLine.test(G)&&(A+=G+`
`,u=u.substring(G.length+1),E=!0),!E){let X=this.rules.other.nextBulletRegex(L),K=this.rules.other.hrRegex(L),H=this.rules.other.fencesBeginRegex(L),P=this.rules.other.headingBeginRegex(L),ee=this.rules.other.htmlBeginRegex(L);for(;u;){let se=u.split(`
`,1)[0],W;if(G=se,this.options.pedantic?(G=G.replace(this.rules.other.listReplaceNesting,"  "),W=G):W=G.replace(this.rules.other.tabCharGlobal,"    "),H.test(G)||P.test(G)||ee.test(G)||X.test(G)||K.test(G))break;if(W.search(this.rules.other.nonSpaceChar)>=L||!G.trim())D+=`
`+W.slice(L);else{if(B||M.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||H.test(M)||P.test(M)||K.test(M))break;D+=`
`+G}!B&&!G.trim()&&(B=!0),A+=se+`
`,u=u.substring(se.length+1),M=W.slice(L)}}p.loose||(b?p.loose=!0:this.rules.other.doubleBlankLine.test(A)&&(b=!0)),p.items.push({type:"list_item",raw:A,task:!!this.options.gfm&&this.rules.other.listIsTask.test(D),loose:!1,text:D,tokens:[]}),p.raw+=A}let m=p.items.at(-1);if(m)m.raw=m.raw.trimEnd(),m.text=m.text.trimEnd();else return;p.raw=p.raw.trimEnd();for(let E of p.items){if(this.lexer.state.top=!1,E.tokens=this.lexer.blockTokens(E.text,[]),E.task){if(E.text=E.text.replace(this.rules.other.listReplaceTask,""),((r=E.tokens[0])==null?void 0:r.type)==="text"||((c=E.tokens[0])==null?void 0:c.type)==="paragraph"){E.tokens[0].raw=E.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),E.tokens[0].text=E.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let D=this.lexer.inlineQueue.length-1;D>=0;D--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[D].src)){this.lexer.inlineQueue[D].src=this.lexer.inlineQueue[D].src.replace(this.rules.other.listReplaceTask,"");break}}let A=this.rules.other.listTaskCheckbox.exec(E.raw);if(A){let D={type:"checkbox",raw:A[0]+" ",checked:A[0]!=="[ ]"};E.checked=D.checked,p.loose?E.tokens[0]&&["paragraph","text"].includes(E.tokens[0].type)&&"tokens"in E.tokens[0]&&E.tokens[0].tokens?(E.tokens[0].raw=D.raw+E.tokens[0].raw,E.tokens[0].text=D.raw+E.tokens[0].text,E.tokens[0].tokens.unshift(D)):E.tokens.unshift({type:"paragraph",raw:D.raw,text:D.raw,tokens:[D]}):E.tokens.unshift(D)}}if(!p.loose){let A=E.tokens.filter(M=>M.type==="space"),D=A.length>0&&A.some(M=>this.rules.other.anyLine.test(M.raw));p.loose=D}}if(p.loose)for(let E of p.items){E.loose=!0;for(let A of E.tokens)A.type==="text"&&(A.type="paragraph")}return p}}html(u){let s=this.rules.block.html.exec(u);if(s)return{type:"html",block:!0,raw:s[0],pre:s[1]==="pre"||s[1]==="script"||s[1]==="style",text:s[0]}}def(u){let s=this.rules.block.def.exec(u);if(s){let r=s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=s[2]?s[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",f=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):s[3];return{type:"def",tag:r,raw:s[0],href:c,title:f}}}table(u){var p;let s=this.rules.block.table.exec(u);if(!s||!this.rules.other.tableDelimiter.test(s[2]))return;let r=om(s[1]),c=s[2].replace(this.rules.other.tableAlignChars,"").split("|"),f=(p=s[3])!=null&&p.trim()?s[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],d={type:"table",raw:s[0],header:[],align:[],rows:[]};if(r.length===c.length){for(let g of c)this.rules.other.tableAlignRight.test(g)?d.align.push("right"):this.rules.other.tableAlignCenter.test(g)?d.align.push("center"):this.rules.other.tableAlignLeft.test(g)?d.align.push("left"):d.align.push(null);for(let g=0;g<r.length;g++)d.header.push({text:r[g],tokens:this.lexer.inline(r[g]),header:!0,align:d.align[g]});for(let g of f)d.rows.push(om(g,d.header.length).map((b,m)=>({text:b,tokens:this.lexer.inline(b),header:!1,align:d.align[m]})));return d}}lheading(u){let s=this.rules.block.lheading.exec(u);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(u){let s=this.rules.block.paragraph.exec(u);if(s){let r=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:r,tokens:this.lexer.inline(r)}}}text(u){let s=this.rules.block.text.exec(u);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(u){let s=this.rules.inline.escape.exec(u);if(s)return{type:"escape",raw:s[0],text:s[1]}}tag(u){let s=this.rules.inline.tag.exec(u);if(s)return!this.lexer.state.inLink&&this.rules.other.startATag.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:s[0]}}link(u){let s=this.rules.inline.link.exec(u);if(s){let r=s[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let d=Ka(r.slice(0,-1),"\\");if((r.length-d.length)%2===0)return}else{let d=$v(s[2],"()");if(d===-2)return;if(d>-1){let p=(s[0].indexOf("!")===0?5:4)+s[1].length+d;s[2]=s[2].substring(0,d),s[0]=s[0].substring(0,p).trim(),s[3]=""}}let c=s[2],f="";if(this.options.pedantic){let d=this.rules.other.pedanticHrefTitle.exec(c);d&&(c=d[1],f=d[3])}else f=s[3]?s[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?c=c.slice(1):c=c.slice(1,-1)),fm(s,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:f&&f.replace(this.rules.inline.anyPunctuation,"$1")},s[0],this.lexer,this.rules)}}reflink(u,s){let r;if((r=this.rules.inline.reflink.exec(u))||(r=this.rules.inline.nolink.exec(u))){let c=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),f=s[c.toLowerCase()];if(!f){let d=r[0].charAt(0);return{type:"text",raw:d,text:d}}return fm(r,f,r[0],this.lexer,this.rules)}}emStrong(u,s,r=""){let c=this.rules.inline.emStrongLDelim.exec(u);if(!(!c||c[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(c[1]||c[2])||!r||this.rules.inline.punctuation.exec(r))){let f=[...c[0]].length-1,d,p,g=f,b=0,m=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,s=s.slice(-1*u.length+f);(c=m.exec(s))!=null;){if(d=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!d)continue;if(p=[...d].length,c[3]||c[4]){g+=p;continue}else if((c[5]||c[6])&&f%3&&!((f+p)%3)){b+=p;continue}if(g-=p,g>0)continue;p=Math.min(p,p+g+b);let E=[...c[0]][0].length,A=u.slice(0,f+c.index+E+p);if(Math.min(f,p)%2){let M=A.slice(1,-1);return{type:"em",raw:A,text:M,tokens:this.lexer.inlineTokens(M)}}let D=A.slice(2,-2);return{type:"strong",raw:A,text:D,tokens:this.lexer.inlineTokens(D)}}}}codespan(u){let s=this.rules.inline.code.exec(u);if(s){let r=s[2].replace(this.rules.other.newLineCharGlobal," "),c=this.rules.other.nonSpaceChar.test(r),f=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return c&&f&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:s[0],text:r}}}br(u){let s=this.rules.inline.br.exec(u);if(s)return{type:"br",raw:s[0]}}del(u){let s=this.rules.inline.del.exec(u);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(u){let s=this.rules.inline.autolink.exec(u);if(s){let r,c;return s[2]==="@"?(r=s[1],c="mailto:"+r):(r=s[1],c=r),{type:"link",raw:s[0],text:r,href:c,tokens:[{type:"text",raw:r,text:r}]}}}url(u){var r;let s;if(s=this.rules.inline.url.exec(u)){let c,f;if(s[2]==="@")c=s[0],f="mailto:"+c;else{let d;do d=s[0],s[0]=((r=this.rules.inline._backpedal.exec(s[0]))==null?void 0:r[0])??"";while(d!==s[0]);c=s[0],s[1]==="www."?f="http://"+s[0]:f=s[0]}return{type:"link",raw:s[0],text:c,href:f,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(u){let s=this.rules.inline.text.exec(u);if(s){let r=this.lexer.state.inRawBlock;return{type:"text",raw:s[0],text:s[0],escaped:r}}}},jt=class mc{constructor(s){Ae(this,"tokens");Ae(this,"options");Ae(this,"state");Ae(this,"inlineQueue");Ae(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=s||rl,this.options.tokenizer=this.options.tokenizer||new zu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Ie,block:xu.normal,inline:Ja.normal};this.options.pedantic?(r.block=xu.pedantic,r.inline=Ja.pedantic):this.options.gfm&&(r.block=xu.gfm,this.options.breaks?r.inline=Ja.breaks:r.inline=Ja.gfm),this.tokenizer.rules=r}static get rules(){return{block:xu,inline:Ja}}static lex(s,r){return new mc(r).lex(s)}static lexInline(s,r){return new mc(r).inlineTokens(s)}lex(s){s=s.replace(Ie.carriageReturn,`
`),this.blockTokens(s,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let c=this.inlineQueue[r];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(s,r=[],c=!1){var f,d,p;for(this.options.pedantic&&(s=s.replace(Ie.tabCharGlobal,"    ").replace(Ie.spaceLine,""));s;){let g;if((d=(f=this.options.extensions)==null?void 0:f.block)!=null&&d.some(m=>(g=m.call({lexer:this},s,r))?(s=s.substring(g.raw.length),r.push(g),!0):!1))continue;if(g=this.tokenizer.space(s)){s=s.substring(g.raw.length);let m=r.at(-1);g.raw.length===1&&m!==void 0?m.raw+=`
`:r.push(g);continue}if(g=this.tokenizer.code(s)){s=s.substring(g.raw.length);let m=r.at(-1);(m==null?void 0:m.type)==="paragraph"||(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.at(-1).src=m.text):r.push(g);continue}if(g=this.tokenizer.fences(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.heading(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.hr(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.blockquote(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.list(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.html(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.def(s)){s=s.substring(g.raw.length);let m=r.at(-1);(m==null?void 0:m.type)==="paragraph"||(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.raw,this.inlineQueue.at(-1).src=m.text):this.tokens.links[g.tag]||(this.tokens.links[g.tag]={href:g.href,title:g.title},r.push(g));continue}if(g=this.tokenizer.table(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.lheading(s)){s=s.substring(g.raw.length),r.push(g);continue}let b=s;if((p=this.options.extensions)!=null&&p.startBlock){let m=1/0,E=s.slice(1),A;this.options.extensions.startBlock.forEach(D=>{A=D.call({lexer:this},E),typeof A=="number"&&A>=0&&(m=Math.min(m,A))}),m<1/0&&m>=0&&(b=s.substring(0,m+1))}if(this.state.top&&(g=this.tokenizer.paragraph(b))){let m=r.at(-1);c&&(m==null?void 0:m.type)==="paragraph"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):r.push(g),c=b.length!==s.length,s=s.substring(g.raw.length);continue}if(g=this.tokenizer.text(s)){s=s.substring(g.raw.length);let m=r.at(-1);(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):r.push(g);continue}if(s){let m="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,r}inline(s,r=[]){return this.inlineQueue.push({src:s,tokens:r}),r}inlineTokens(s,r=[]){var b,m,E,A,D;let c=s,f=null;if(this.tokens.links){let M=Object.keys(this.tokens.links);if(M.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)M.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,f.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let d;for(;(f=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)d=f[2]?f[2].length:0,c=c.slice(0,f.index+d)+"["+"a".repeat(f[0].length-d-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);c=((m=(b=this.options.hooks)==null?void 0:b.emStrongMask)==null?void 0:m.call({lexer:this},c))??c;let p=!1,g="";for(;s;){p||(g=""),p=!1;let M;if((A=(E=this.options.extensions)==null?void 0:E.inline)!=null&&A.some(B=>(M=B.call({lexer:this},s,r))?(s=s.substring(M.raw.length),r.push(M),!0):!1))continue;if(M=this.tokenizer.escape(s)){s=s.substring(M.raw.length),r.push(M);continue}if(M=this.tokenizer.tag(s)){s=s.substring(M.raw.length),r.push(M);continue}if(M=this.tokenizer.link(s)){s=s.substring(M.raw.length),r.push(M);continue}if(M=this.tokenizer.reflink(s,this.tokens.links)){s=s.substring(M.raw.length);let B=r.at(-1);M.type==="text"&&(B==null?void 0:B.type)==="text"?(B.raw+=M.raw,B.text+=M.text):r.push(M);continue}if(M=this.tokenizer.emStrong(s,c,g)){s=s.substring(M.raw.length),r.push(M);continue}if(M=this.tokenizer.codespan(s)){s=s.substring(M.raw.length),r.push(M);continue}if(M=this.tokenizer.br(s)){s=s.substring(M.raw.length),r.push(M);continue}if(M=this.tokenizer.del(s)){s=s.substring(M.raw.length),r.push(M);continue}if(M=this.tokenizer.autolink(s)){s=s.substring(M.raw.length),r.push(M);continue}if(!this.state.inLink&&(M=this.tokenizer.url(s))){s=s.substring(M.raw.length),r.push(M);continue}let G=s;if((D=this.options.extensions)!=null&&D.startInline){let B=1/0,L=s.slice(1),X;this.options.extensions.startInline.forEach(K=>{X=K.call({lexer:this},L),typeof X=="number"&&X>=0&&(B=Math.min(B,X))}),B<1/0&&B>=0&&(G=s.substring(0,B+1))}if(M=this.tokenizer.inlineText(G)){s=s.substring(M.raw.length),M.raw.slice(-1)!=="_"&&(g=M.raw.slice(-1)),p=!0;let B=r.at(-1);(B==null?void 0:B.type)==="text"?(B.raw+=M.raw,B.text+=M.text):r.push(M);continue}if(s){let B="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(B);break}else throw new Error(B)}}return r}},Nu=class{constructor(u){Ae(this,"options");Ae(this,"parser");this.options=u||rl}space(u){return""}code({text:u,lang:s,escaped:r}){var d;let c=(d=(s||"").match(Ie.notSpaceStart))==null?void 0:d[0],f=u.replace(Ie.endingNewline,"")+`
`;return c?'<pre><code class="language-'+fn(c)+'">'+(r?f:fn(f,!0))+`</code></pre>
`:"<pre><code>"+(r?f:fn(f,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}def(u){return""}heading({tokens:u,depth:s}){return`<h${s}>${this.parser.parseInline(u)}</h${s}>
`}hr(u){return`<hr>
`}list(u){let s=u.ordered,r=u.start,c="";for(let p=0;p<u.items.length;p++){let g=u.items[p];c+=this.listitem(g)}let f=s?"ol":"ul",d=s&&r!==1?' start="'+r+'"':"";return"<"+f+d+`>
`+c+"</"+f+`>
`}listitem(u){return`<li>${this.parser.parse(u.tokens)}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let s="",r="";for(let f=0;f<u.header.length;f++)r+=this.tablecell(u.header[f]);s+=this.tablerow({text:r});let c="";for(let f=0;f<u.rows.length;f++){let d=u.rows[f];r="";for(let p=0;p<d.length;p++)r+=this.tablecell(d[p]);c+=this.tablerow({text:r})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+s+`</thead>
`+c+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){let s=this.parser.parseInline(u.tokens),r=u.header?"th":"td";return(u.align?`<${r} align="${u.align}">`:`<${r}>`)+s+`</${r}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${fn(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:s,tokens:r}){let c=this.parser.parseInline(r),f=cm(u);if(f===null)return c;u=f;let d='<a href="'+u+'"';return s&&(d+=' title="'+fn(s)+'"'),d+=">"+c+"</a>",d}image({href:u,title:s,text:r,tokens:c}){c&&(r=this.parser.parseInline(c,this.parser.textRenderer));let f=cm(u);if(f===null)return fn(r);u=f;let d=`<img src="${u}" alt="${r}"`;return s&&(d+=` title="${fn(s)}"`),d+=">",d}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:fn(u.text)}},Oc=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}checkbox({raw:u}){return u}},Ht=class pc{constructor(s){Ae(this,"options");Ae(this,"renderer");Ae(this,"textRenderer");this.options=s||rl,this.options.renderer=this.options.renderer||new Nu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Oc}static parse(s,r){return new pc(r).parse(s)}static parseInline(s,r){return new pc(r).parseInline(s)}parse(s){var c,f;let r="";for(let d=0;d<s.length;d++){let p=s[d];if((f=(c=this.options.extensions)==null?void 0:c.renderers)!=null&&f[p.type]){let b=p,m=this.options.extensions.renderers[b.type].call({parser:this},b);if(m!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(b.type)){r+=m||"";continue}}let g=p;switch(g.type){case"space":{r+=this.renderer.space(g);break}case"hr":{r+=this.renderer.hr(g);break}case"heading":{r+=this.renderer.heading(g);break}case"code":{r+=this.renderer.code(g);break}case"table":{r+=this.renderer.table(g);break}case"blockquote":{r+=this.renderer.blockquote(g);break}case"list":{r+=this.renderer.list(g);break}case"checkbox":{r+=this.renderer.checkbox(g);break}case"html":{r+=this.renderer.html(g);break}case"def":{r+=this.renderer.def(g);break}case"paragraph":{r+=this.renderer.paragraph(g);break}case"text":{r+=this.renderer.text(g);break}default:{let b='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(b),"";throw new Error(b)}}}return r}parseInline(s,r=this.renderer){var f,d;let c="";for(let p=0;p<s.length;p++){let g=s[p];if((d=(f=this.options.extensions)==null?void 0:f.renderers)!=null&&d[g.type]){let m=this.options.extensions.renderers[g.type].call({parser:this},g);if(m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(g.type)){c+=m||"";continue}}let b=g;switch(b.type){case"escape":{c+=r.text(b);break}case"html":{c+=r.html(b);break}case"link":{c+=r.link(b);break}case"image":{c+=r.image(b);break}case"checkbox":{c+=r.checkbox(b);break}case"strong":{c+=r.strong(b);break}case"em":{c+=r.em(b);break}case"codespan":{c+=r.codespan(b);break}case"br":{c+=r.br(b);break}case"del":{c+=r.del(b);break}case"text":{c+=r.text(b);break}default:{let m='Token with "'+b.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return c}},Su,$a=(Su=class{constructor(u){Ae(this,"options");Ae(this,"block");this.options=u||rl}preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}emStrongMask(u){return u}provideLexer(){return this.block?jt.lex:jt.lexInline}provideParser(){return this.block?Ht.parse:Ht.parseInline}},Ae(Su,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Ae(Su,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Su),Fv=class{constructor(...u){Ae(this,"defaults",Tc());Ae(this,"options",this.setOptions);Ae(this,"parse",this.parseMarkdown(!0));Ae(this,"parseInline",this.parseMarkdown(!1));Ae(this,"Parser",Ht);Ae(this,"Renderer",Nu);Ae(this,"TextRenderer",Oc);Ae(this,"Lexer",jt);Ae(this,"Tokenizer",zu);Ae(this,"Hooks",$a);this.use(...u)}walkTokens(u,s){var c,f;let r=[];for(let d of u)switch(r=r.concat(s.call(this,d)),d.type){case"table":{let p=d;for(let g of p.header)r=r.concat(this.walkTokens(g.tokens,s));for(let g of p.rows)for(let b of g)r=r.concat(this.walkTokens(b.tokens,s));break}case"list":{let p=d;r=r.concat(this.walkTokens(p.items,s));break}default:{let p=d;(f=(c=this.defaults.extensions)==null?void 0:c.childTokens)!=null&&f[p.type]?this.defaults.extensions.childTokens[p.type].forEach(g=>{let b=p[g].flat(1/0);r=r.concat(this.walkTokens(b,s))}):p.tokens&&(r=r.concat(this.walkTokens(p.tokens,s)))}}return r}use(...u){let s=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(r=>{let c={...r};if(c.async=this.defaults.async||c.async||!1,r.extensions&&(r.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){let d=s.renderers[f.name];d?s.renderers[f.name]=function(...p){let g=f.renderer.apply(this,p);return g===!1&&(g=d.apply(this,p)),g}:s.renderers[f.name]=f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let d=s[f.level];d?d.unshift(f.tokenizer):s[f.level]=[f.tokenizer],f.start&&(f.level==="block"?s.startBlock?s.startBlock.push(f.start):s.startBlock=[f.start]:f.level==="inline"&&(s.startInline?s.startInline.push(f.start):s.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(s.childTokens[f.name]=f.childTokens)}),c.extensions=s),r.renderer){let f=this.defaults.renderer||new Nu(this.defaults);for(let d in r.renderer){if(!(d in f))throw new Error(`renderer '${d}' does not exist`);if(["options","parser"].includes(d))continue;let p=d,g=r.renderer[p],b=f[p];f[p]=(...m)=>{let E=g.apply(f,m);return E===!1&&(E=b.apply(f,m)),E||""}}c.renderer=f}if(r.tokenizer){let f=this.defaults.tokenizer||new zu(this.defaults);for(let d in r.tokenizer){if(!(d in f))throw new Error(`tokenizer '${d}' does not exist`);if(["options","rules","lexer"].includes(d))continue;let p=d,g=r.tokenizer[p],b=f[p];f[p]=(...m)=>{let E=g.apply(f,m);return E===!1&&(E=b.apply(f,m)),E}}c.tokenizer=f}if(r.hooks){let f=this.defaults.hooks||new $a;for(let d in r.hooks){if(!(d in f))throw new Error(`hook '${d}' does not exist`);if(["options","block"].includes(d))continue;let p=d,g=r.hooks[p],b=f[p];$a.passThroughHooks.has(d)?f[p]=m=>{if(this.defaults.async&&$a.passThroughHooksRespectAsync.has(d))return(async()=>{let A=await g.call(f,m);return b.call(f,A)})();let E=g.call(f,m);return b.call(f,E)}:f[p]=(...m)=>{if(this.defaults.async)return(async()=>{let A=await g.apply(f,m);return A===!1&&(A=await b.apply(f,m)),A})();let E=g.apply(f,m);return E===!1&&(E=b.apply(f,m)),E}}c.hooks=f}if(r.walkTokens){let f=this.defaults.walkTokens,d=r.walkTokens;c.walkTokens=function(p){let g=[];return g.push(d.call(this,p)),f&&(g=g.concat(f.call(this,p))),g}}this.defaults={...this.defaults,...c}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,s){return jt.lex(u,s??this.defaults)}parser(u,s){return Ht.parse(u,s??this.defaults)}parseMarkdown(u){return(s,r)=>{let c={...r},f={...this.defaults,...c},d=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&c.async===!1)return d(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof s>"u"||s===null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(f.hooks&&(f.hooks.options=f,f.hooks.block=u),f.async)return(async()=>{let p=f.hooks?await f.hooks.preprocess(s):s,g=await(f.hooks?await f.hooks.provideLexer():u?jt.lex:jt.lexInline)(p,f),b=f.hooks?await f.hooks.processAllTokens(g):g;f.walkTokens&&await Promise.all(this.walkTokens(b,f.walkTokens));let m=await(f.hooks?await f.hooks.provideParser():u?Ht.parse:Ht.parseInline)(b,f);return f.hooks?await f.hooks.postprocess(m):m})().catch(d);try{f.hooks&&(s=f.hooks.preprocess(s));let p=(f.hooks?f.hooks.provideLexer():u?jt.lex:jt.lexInline)(s,f);f.hooks&&(p=f.hooks.processAllTokens(p)),f.walkTokens&&this.walkTokens(p,f.walkTokens);let g=(f.hooks?f.hooks.provideParser():u?Ht.parse:Ht.parseInline)(p,f);return f.hooks&&(g=f.hooks.postprocess(g)),g}catch(p){return d(p)}}}onError(u,s){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,u){let c="<p>An error occurred:</p><pre>"+fn(r.message+"",!0)+"</pre>";return s?Promise.resolve(c):c}if(s)return Promise.reject(r);throw r}}},sl=new Fv;function be(u,s){return sl.parse(u,s)}be.options=be.setOptions=function(u){return sl.setOptions(u),be.defaults=sl.defaults,jm(be.defaults),be};be.getDefaults=Tc;be.defaults=rl;be.use=function(...u){return sl.use(...u),be.defaults=sl.defaults,jm(be.defaults),be};be.walkTokens=function(u,s){return sl.walkTokens(u,s)};be.parseInline=sl.parseInline;be.Parser=Ht;be.parser=Ht.parse;be.Renderer=Nu;be.TextRenderer=Oc;be.Lexer=jt;be.lexer=jt.lex;be.Tokenizer=zu;be.Hooks=$a;be.parse=be;be.options;be.setOptions;be.use;be.walkTokens;be.parseInline;Ht.parse;jt.lex;const Pv=Object.assign({"/post/2025-10-27-Base64.md":ev,"/post/2025-11-12-JAVA_프로그램이_실행되는_과정.md":tv,"/post/2025-11-19-OOP.md":nv,"/post/2025-11-23-Garbage_Collection.md":lv,"/post/2025-12-10-IoC_DI.md":av,"/post/2025-12-13-observer_pattern.md":iv,"/post/2025-12-20-reactive-programming.md":uv,"/post/2026-01-10-RabbitMq_Clustering.md":sv,"/post/2026-01-14-mirror_queue_vs_quorum_queue.md":rv,"/post/2026-02-05-React로_개발된_Github_Blog_배포_방법.md":cv,"/post/2026-03-04-CHARYEOT_게임_패배_범인찾기_프로젝트.md":ov,"/post/2026-03-05-CHARYEOT_앞으로의_계획.md":fv,"/post/2026-03-06-CHARYEOT_리그_오브_레전드_1_API_Key_발급받기.md":dv,"/post/2026-03-07-CHARYEOT_리그_오브_레전드_2_유저_프로필_불러오기.md":hv,"/post/2026-03-10-charyeot_리그_오브_레전드_3_이미지_불러오기.md":mv});function dm(u){var c;const s=((c=u.split("/").pop())==null?void 0:c.replace(".md",""))||"",r=s.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);return r?{date:r[1],slug:r[2]}:{date:"",slug:s}}function hm(u){return u.replace(/-/g,".")}function Iv(u){const s=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,r=u.match(s);if(!r)return{data:{title:"",description:"",date:"",tags:[]},content:u};const[,c,f]=r,d={title:"",description:"",date:"",tags:[]},p=c.split(/\r?\n/);for(const g of p){const b=g.indexOf(":");if(b===-1)continue;const m=g.slice(0,b).trim();let E=g.slice(b+1).trim();if((E.startsWith('"')&&E.endsWith('"')||E.startsWith("'")&&E.endsWith("'"))&&(E=E.slice(1,-1)),m==="title")d.title=E;else if(m==="description")d.description=E;else if(m==="date")d.date=E;else if(m==="tags"){const A=E.match(/\[(.*)\]/);A&&(d.tags=A[1].split(",").map(D=>D.trim().replace(/^["']|["']$/g,"")))}}return{data:d,content:f}}function e1(u,s){const{data:r,content:c}=Iv(s),{slug:f}=dm(u),d=be(c),p=r.date?hm(r.date.replace(/"/g,"")):hm(dm(u).date);return{id:f,title:r.title||f,description:r.description||"",date:p,tags:r.tags||[],content:d}}let rc=null;function kc(){if(rc)return rc;const u=[];for(const[s,r]of Object.entries(Pv))try{const c=e1(s,r);u.push(c)}catch(c){console.error(`Failed to parse post: ${s}`,c)}return u.sort((s,r)=>{const c=s.date.replace(/\./g,"-");return r.date.replace(/\./g,"-").localeCompare(c)}),rc=u,u}function t1(u){return kc().find(r=>r.id===u)}const n1=()=>{const u=kc().slice(0,4);return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("section",{className:"mb-16",children:[y.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight",children:["BackEnd Developer Hanwhee",y.jsxs("span",{className:"inline-flex flex-col items-center align-bottom",children:[y.jsx("style",{children:`
              @keyframes emoji-shadow {
                0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
                50%       { transform: scaleX(1);   opacity: 0.35; }
              }
            `}),y.jsx("span",{className:"inline-block animate-[bounce_2s_infinite]",children:"😎"}),y.jsx("span",{className:"w-8 h-1.5 bg-slate-900 rounded-full blur-sm",style:{animation:"emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite"}})]})]}),y.jsxs("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed",children:[y.jsxs("p",{children:["안녕하세요!"," ",y.jsx("span",{className:"font-bold text-slate-900 bg-mint px-1",children:"백엔드 개발자 김한휘"}),"입니다!"]}),y.jsx("p",{children:"스탠다드네트웍스에서 2년 7개월간 근무하며 대용량 트래픽 환경에서 자라며 MSA 설계부터 개발, 운영까지 경험하며 성장해왔어요."}),y.jsx("p",{children:"서비스 불편한 거 하나씩 고칠 때마다 희열을 느끼는 타입입니다🔥🔥🔥"})]})]}),y.jsxs("section",{className:"mb-20",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[y.jsx("span",{className:"text-2xl",children:"🌱"}),y.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"My Career"})]}),y.jsxs("div",{className:"flex flex-col",children:[dc.map((s,r)=>y.jsxs("div",{className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${r!==dc.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[y.jsx("div",{className:"mb-2 md:mb-0",children:y.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:s.title.split("(")[0]})}),y.jsxs("div",{className:"flex flex-col md:items-end text-slate-500 text-sm md:text-base",children:[y.jsx("span",{className:"font-medium text-slate-700",children:s.role}),y.jsx("span",{className:"text-xs md:text-sm font-mono mt-1 text-slate-400",children:s.period})]})]},s.id)),y.jsx("div",{className:"flex flex-col md:flex-row md:justify-between md:items-baseline py-5 border-t border-slate-100 px-2 -mx-2 text-slate-400",children:y.jsx("div",{children:y.jsx("h3",{className:"text-lg font-bold",children:"... To Be Continued..."})})})]})]}),u.length>0&&y.jsxs("section",{className:"mb-20",children:[y.jsxs("div",{className:"flex items-center justify-between mb-8",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-2xl",children:"📝"}),y.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"Recent Posts"})]}),y.jsxs(dn,{to:"/blog",className:"text-sm text-slate-500 hover:text-sky-600 flex items-center gap-1 transition-colors",children:["전체보기 ",y.jsx(sc,{size:14})]})]}),y.jsx("div",{className:"flex flex-col",children:u.map((s,r)=>y.jsxs(dn,{to:`/blog/${s.id}`,className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${r!==u.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[y.jsxs("div",{className:"mb-2 md:mb-0 flex-1",children:[y.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:s.title}),y.jsx("p",{className:"text-sm text-slate-500 mt-1 line-clamp-1",children:s.description})]}),y.jsx("div",{className:"text-xs font-mono text-slate-400 md:ml-4",children:s.date})]},s.id))})]}),y.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[y.jsxs(dn,{to:"/skills",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[y.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Skills"," ",y.jsx(sc,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),y.jsx("p",{className:"text-sm text-slate-500",children:"지금까지 써본 기술들과 개발 환경 정리해봤어요 🛠️"})]}),y.jsxs(dn,{to:"/education",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[y.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Education"," ",y.jsx(sc,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),y.jsx("p",{className:"text-sm text-slate-500",children:"개발자로 성장하기 위해 공부하고 수료한 교육 과정들이에요 📚"})]})]})]})},l1=()=>y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12",children:["Work Experience ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("div",{className:"space-y-16",children:dc.map(u=>y.jsxs("div",{className:"relative border-l-2 border-slate-100 pl-6 md:pl-8 ml-2",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2",children:[y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900",children:u.title}),y.jsx("span",{className:"font-mono text-sm text-slate-400 mt-1 sm:mt-0 whitespace-nowrap",children:u.period})]}),y.jsx("div",{className:"text-lg font-medium text-slate-700 mb-4",children:u.role}),y.jsx("p",{className:"text-slate-600 leading-relaxed mb-6 max-w-2xl",children:u.description}),y.jsx("div",{className:"mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm font-mono text-slate-500",children:u.techStack.map((s,r)=>y.jsxs("span",{className:"bg-slate-50 px-1.5 rounded text-slate-600",children:["#",s]},s))}),y.jsx("ul",{className:"space-y-2 text-slate-600 list-disc list-outside pl-4",children:u.keyAchievements.map((s,r)=>y.jsx("li",{className:"pl-1 marker:text-sky-300",children:s},r))})]},u.id))})]}),a1=()=>y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Skills ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-12",children:"지금까지 사용해본 기술들입니다."}),y.jsx("div",{className:"space-y-12",children:Fb.map(u=>y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-6 bg-sky-50 inline-block px-2 py-0.5 rounded-md",children:u.category}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6",children:u.items.map(s=>y.jsx("div",{className:"flex flex-col",children:y.jsx("div",{className:"flex items-center justify-between mb-1",children:y.jsx("span",{className:"font-bold text-slate-800 text-lg",children:s.name})})},s.name))}),y.jsx("hr",{className:"mt-10 border-slate-100"})]},u.category))})]}),i1=()=>{const u=im.filter(r=>r.category==="Education"),s=im.filter(r=>r.category==="Certification");return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-12",children:"Education & Certs"}),y.jsx("p",{className:"text-slate-500 mb-12",children:"제가 해낸 교육과정/자격증 입니다."}),y.jsxs("section",{className:"mb-16",children:[y.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Education"}),y.jsx("div",{className:"space-y-10",children:u.map((r,c)=>y.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8",children:[y.jsx("div",{className:"md:w-32 flex-shrink-0 mb-1 md:mb-0",children:y.jsx("span",{className:"font-mono text-sm text-slate-400",children:r.period})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-slate-900",children:y.jsx("a",{href:r.link,className:"hover:underline",children:r.institution})}),y.jsx("div",{className:"text-slate-700 font-medium mb-3",children:r.degree}),y.jsx("ul",{className:"text-slate-600 text-sm space-y-1 list-disc list-outside pl-4",children:r.details.map((f,d)=>y.jsx("li",{children:f},d))})]})]},c))})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Certifications"}),y.jsx("div",{className:"space-y-6",children:s.map((r,c)=>y.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8 items-start",children:[y.jsx("div",{className:"md:w-32 flex-shrink-0",children:y.jsx("span",{className:"font-mono text-sm text-slate-400",children:r.period})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-bold text-slate-900",children:r.institution}),y.jsx("p",{className:"text-slate-600",children:r.details[0]})]})]},c))})]})]})},cc=5,u1=()=>{const u=kc(),[s,r]=z.useState(1),[c,f]=z.useState(""),[d,p]=z.useState(null),g=z.useMemo(()=>{const H={};return u.forEach(P=>{var ee;(ee=P.tags)==null||ee.forEach(se=>{H[se]=(H[se]||0)+1})}),Object.entries(H).sort((P,ee)=>ee[1]-P[1])},[u]),b=z.useMemo(()=>u.filter(H=>{var se;const P=c.trim()===""||H.title.toLowerCase().includes(c.toLowerCase()),ee=d===null||((se=H.tags)==null?void 0:se.includes(d));return P&&ee}),[u,c,d]),m=Math.ceil(b.length/cc),E=(s-1)*cc,A=b.slice(E,E+cc),D=()=>{r(H=>Math.max(H-1,1)),window.scrollTo({top:0,behavior:"smooth"})},M=()=>{r(H=>Math.min(H+1,m)),window.scrollTo({top:0,behavior:"smooth"})},G=H=>{r(H),window.scrollTo({top:0,behavior:"smooth"})},B=H=>{f(H),r(1)},L=H=>{p(P=>P===H?null:H),r(1)},X=()=>{f(""),p(null),r(1)},K=c.trim()!==""||d!==null;return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Blog ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-8",children:"생각을 정리하고 배운 것을 공유합니다."}),y.jsxs("div",{className:"relative mb-4",children:[y.jsx(tm,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),y.jsx("input",{type:"text",placeholder:"제목으로 검색...",value:c,onChange:H=>B(H.target.value),className:"w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"}),c&&y.jsx("button",{onClick:()=>B(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",children:y.jsx(Ru,{size:14})})]}),g.length>0&&y.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[g.map(([H,P])=>y.jsxs("button",{onClick:()=>L(H),className:`text-xs px-3 py-1 rounded-full border transition-colors ${d===H?"bg-sky-500 text-white border-sky-500":"bg-white text-slate-500 border-slate-200 hover:border-sky-400 hover:text-sky-500"}`,children:["#",H,y.jsx("span",{className:`ml-1 ${d===H?"text-sky-100":"text-slate-400"}`,children:P})]},H)),K&&y.jsxs("button",{onClick:X,className:"text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-colors flex items-center gap-1",children:[y.jsx(Ru,{size:11}),"초기화"]})]}),K&&y.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:[b.length,"개의 글",d&&y.jsxs("span",{children:[" · ",y.jsxs("span",{className:"text-sky-500",children:["#",d]})]}),c&&y.jsxs("span",{children:[' · "',y.jsx("span",{className:"text-slate-600",children:c}),'"']})]}),A.length>0?y.jsx("div",{className:"flex flex-col space-y-10",children:A.map(H=>{var P;return y.jsx("article",{className:"group",children:y.jsxs(dn,{to:`/blog/${H.id}`,className:"block",children:[y.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-400 mb-2 font-mono",children:H.date}),y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors",children:H.title}),y.jsx("p",{className:"text-slate-600 leading-relaxed mb-3",children:H.description}),y.jsx("div",{className:"flex flex-wrap gap-2",children:(P=H.tags)==null?void 0:P.map(ee=>y.jsxs("span",{onClick:se=>{se.preventDefault(),L(ee)},className:`text-xs px-2 py-0.5 rounded cursor-pointer transition-colors ${d===ee?"bg-sky-100 text-sky-600":"text-slate-400 bg-slate-50 hover:bg-sky-50 hover:text-sky-500"}`,children:["#",ee]},ee))})]})},H.id)})}):y.jsxs("div",{className:"text-center py-20 text-slate-400",children:[y.jsx(tm,{size:32,className:"mx-auto mb-3 opacity-30"}),y.jsx("p",{className:"text-sm",children:"검색 결과가 없습니다."})]}),m>1&&y.jsxs("div",{className:"flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-100",children:[y.jsx("button",{onClick:D,disabled:s===1,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"이전 페이지",children:y.jsx(Ab,{size:20})}),y.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:m},(H,P)=>P+1).map(H=>y.jsx("button",{onClick:()=>G(H),className:`w-10 h-10 rounded-lg font-medium transition-colors ${s===H?"bg-sky-500 text-white":"hover:bg-slate-100 text-slate-600"}`,children:H},H))}),y.jsx("button",{onClick:M,disabled:s===m,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"다음 페이지",children:y.jsx(_b,{size:20})})]})]})};function s1({term:u}){const s=z.useRef(null);return z.useEffect(()=>{if(!s.current)return;s.current.innerHTML="";const r=document.createElement("script");r.src="https://giscus.app/client.js",r.async=!0,r.crossOrigin="anonymous",r.setAttribute("data-repo","KimHanWhee/KimHanWhee.github.io"),r.setAttribute("data-repo-id","R_kgDORCSvGA"),r.setAttribute("data-category","General"),r.setAttribute("data-category-id","DIC_kwDORCSvGM4C3O7R"),r.setAttribute("data-mapping","specific"),r.setAttribute("data-term",u),r.setAttribute("data-strict","0"),r.setAttribute("data-reactions-enabled","1"),r.setAttribute("data-emit-metadata","0"),r.setAttribute("data-input-position","bottom"),r.setAttribute("data-theme","preferred_color_scheme"),r.setAttribute("data-lang","ko"),s.current.appendChild(r)},[u]),y.jsx("section",{ref:s})}const r1=()=>{const{id:u}=my(),s=u?t1(u):void 0,r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s?y.jsxs("div",{className:"min-h-screen bg-white font-sans selection:bg-secondary/20 selection:text-primary",children:[y.jsx("div",{className:"bg-slate-50 border-b border-slate-200",children:y.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative",children:[y.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-5 pointer-events-none",children:y.jsx("div",{className:"text-9xl font-bold font-mono text-slate-900 tracking-tighter"})}),y.jsxs(dn,{to:"/blog",className:"inline-flex items-center text-slate-500 hover:text-secondary mb-8 transition-colors font-medium",children:[y.jsx(gb,{size:18,className:"mr-2"}),"Back to Tech Notes"]}),y.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-primary mb-8 leading-tight tracking-tight",children:s.title}),y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-6 text-slate-600 border-t border-slate-200/60 pt-6",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(vb,{size:18,className:"text-secondary"}),y.jsx("span",{className:"font-medium font-mono text-sm",children:s.date})]}),y.jsx("div",{className:"hidden sm:block w-px h-4 bg-slate-300"}),y.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:s.tags.map(c=>y.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm",children:[y.jsx(Kb,{size:12,className:"mr-1.5 text-slate-400"}),c]},c))})]})]})}),y.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[y.jsxs("article",{className:"prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl",children:[y.jsx("style",{children:`
            /* Custom syntax highlighting look for code blocks */
            pre {
              position: relative;
              padding-top: 2.5rem !important;
              border-radius: 0.75rem !important;
              background-color: #1e293b !important; /* slate-800 */
              font-family: 'JetBrains Mono', monospace !important;
              overflow-x: auto;
            }
            /* MacOS like window dots */
            pre::before {
              content: '';
              position: absolute;
              top: 1rem;
              left: 1rem;
              width: 0.75rem;
              height: 0.75rem;
              border-radius: 50%;
              background-color: #ff5f56;
              box-shadow: 1.25rem 0 0 #ffbd2e, 2.5rem 0 0 #27c93f;
            }
            code {
               font-family: 'JetBrains Mono', monospace;
            }
            blockquote {
              font-style: normal;
              font-weight: 500;
              border-left-width: 4px;
              border-left-color: #3b82f6; /* secondary */
              background-color: #f8fafc;
              padding: 1rem 1.5rem;
              border-radius: 0 0.5rem 0.5rem 0;
            }
            blockquote p:first-of-type::before {
              content: '';
            }
            blockquote p:last-of-type::after {
              content: '';
            }
          `}),y.jsx("div",{dangerouslySetInnerHTML:{__html:s.content}})]}),y.jsxs("div",{className:"mt-20 pt-10 border-t border-slate-100 flex flex-col items-center",children:[y.jsx("button",{onClick:r,className:"mb-8 p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-secondary transition-colors","aria-label":"Scroll to top",children:y.jsx(Cb,{size:24})}),y.jsx(dn,{to:"/blog",className:"px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20",children:"다른 글 보러가기"})]})]}),y.jsx(s1,{term:u})]}):y.jsx(zy,{to:"/blog",replace:!0})},c1=()=>{const[u,s]=z.useState(!1),r="hanwhee2@gmail.com",c=()=>{navigator.clipboard.writeText(r),s(!0),setTimeout(()=>s(!1),2e3)};return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8",children:["Contact ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed mb-12",children:y.jsxs("p",{children:[y.jsx("br",{}),"궁금한 점이 있으시다면 편하게 연락주세요💬"]})}),y.jsxs("div",{className:"mb-12",children:[y.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"Email"}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-2xl md:text-3xl font-mono font-bold text-slate-900 hover:bg-sky-100 transition-colors px-1 -ml-1 rounded",children:r}),y.jsx("button",{onClick:c,className:"p-2 text-slate-400 hover:text-sky-600 transition-colors","aria-label":"Copy email address",children:u?y.jsx(Sb,{size:20,className:"text-sky-500"}):y.jsx(Mb,{size:20})})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-4",children:"Social"}),y.jsx("div",{className:"flex flex-col space-y-3 items-start",children:y.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-sky-400 underline-offset-4 decoration-2",children:["Github ",y.jsx(Hb,{size:14,className:"opacity-50"})]})})]})]})},mm=3e3,o1=400,f1=({visible:u})=>{const[s,r]=z.useState(0);return z.useEffect(()=>{const c=setInterval(()=>{r(f=>(f+1)%4)},o1);return()=>clearInterval(c)},[]),y.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500",style:{opacity:u?1:0,pointerEvents:u?"auto":"none"},children:[y.jsxs("div",{className:"flex flex-col items-center mb-6",children:[y.jsx("style",{children:`
          @keyframes emoji-shadow {
            0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
            50%       { transform: scaleX(1);   opacity: 0.35; }
          }
        `}),y.jsx("span",{className:"text-5xl inline-block animate-[bounce_2s_infinite] select-none",children:"😎"}),y.jsx("div",{className:"w-10 h-2 bg-slate-400 rounded-full blur-sm mt-1",style:{animation:"emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite"}})]}),y.jsxs("span",{className:"text-xl md:text-2xl font-mono font-bold text-sky-400 select-none tracking-wide",children:["Now Coding",y.jsx("span",{style:{opacity:s>=1?1:0},children:"."}),y.jsx("span",{style:{opacity:s>=2?1:0},children:"."}),y.jsx("span",{style:{opacity:s>=3?1:0},children:"."})]})]})},d1=()=>{const[u,s]=z.useState(!0),[r,c]=z.useState(!0);return z.useEffect(()=>{const f=setTimeout(()=>c(!1),mm),d=setTimeout(()=>s(!1),mm+500);return()=>{clearTimeout(f),clearTimeout(d)}},[]),y.jsxs(y.Fragment,{children:[u&&y.jsx(f1,{visible:r}),y.jsx(tb,{children:y.jsx(Dy,{children:y.jsxs(on,{path:"/",element:y.jsx(Ib,{}),children:[y.jsx(on,{index:!0,element:y.jsx(n1,{})}),y.jsx(on,{path:"experience",element:y.jsx(l1,{})}),y.jsx(on,{path:"skills",element:y.jsx(a1,{})}),y.jsx(on,{path:"education",element:y.jsx(i1,{})}),y.jsx(on,{path:"blog",element:y.jsx(u1,{})}),y.jsx(on,{path:"blog/:id",element:y.jsx(r1,{})}),y.jsx(on,{path:"contact",element:y.jsx(c1,{})})]})})})]})},Zm=document.getElementById("root");if(!Zm)throw new Error("Could not find root element to mount to");const h1=Ng.createRoot(Zm);h1.render(y.jsx(Sg.StrictMode,{children:y.jsx(d1,{})}));
