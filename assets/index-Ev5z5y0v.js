var g0=Object.defineProperty;var y0=(u,s,r)=>s in u?g0(u,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[s]=r;var Te=(u,s,r)=>y0(u,typeof s!="symbol"?s+"":s,r);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function r(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=r(f);fetch(f.href,h)}})();function pm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Fr={exports:{}},Ya={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function b0(){if(Ud)return Ya;Ud=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function r(c,f,h){var p=null;if(h!==void 0&&(p=""+h),f.key!==void 0&&(p=""+f.key),"key"in f){h={};for(var g in f)g!=="key"&&(h[g]=f[g])}else h=f;return f=h.ref,{$$typeof:u,type:c,key:p,ref:f!==void 0?f:null,props:h}}return Ya.Fragment=s,Ya.jsx=r,Ya.jsxs=r,Ya}var Ld;function v0(){return Ld||(Ld=1,Fr.exports=b0()),Fr.exports}var y=v0(),Pr={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function x0(){if(Gd)return P;Gd=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),z=Symbol.iterator;function D(S){return S===null||typeof S!="object"?null:(S=z&&S[z]||S["@@iterator"],typeof S=="function"?S:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,G={};function V(S,U,Q){this.props=S,this.context=U,this.refs=G,this.updater=Q||B}V.prototype.isReactComponent={},V.prototype.setState=function(S,U){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,U,"setState")},V.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function K(){}K.prototype=V.prototype;function H(S,U,Q){this.props=S,this.context=U,this.refs=G,this.updater=Q||B}var F=H.prototype=new K;F.constructor=H,L(F,V.prototype),F.isPureReactComponent=!0;var ee=Array.isArray;function se(){}var I={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function Ve(S,U,Q){var X=Q.ref;return{$$typeof:u,type:S,key:U,ref:X!==void 0?X:null,props:Q}}function vt(S,U){return Ve(S.type,U,S.props)}function Lt(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function et(S){var U={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Q){return U[Q]})}var qn=/\/+/g;function Vt(S,U){return typeof S=="object"&&S!==null&&S.key!=null?et(""+S.key):U.toString(36)}function zt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(se,se):(S.status="pending",S.then(function(U){S.status==="pending"&&(S.status="fulfilled",S.value=U)},function(U){S.status==="pending"&&(S.status="rejected",S.reason=U)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function k(S,U,Q,X,te){var ae=typeof S;(ae==="undefined"||ae==="boolean")&&(S=null);var pe=!1;if(S===null)pe=!0;else switch(ae){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(S.$$typeof){case u:case s:pe=!0;break;case E:return pe=S._init,k(pe(S._payload),U,Q,X,te)}}if(pe)return te=te(S),pe=X===""?"."+Vt(S,0):X,ee(te)?(Q="",pe!=null&&(Q=pe.replace(qn,"$&/")+"/"),k(te,U,Q,"",function(Il){return Il})):te!=null&&(Lt(te)&&(te=vt(te,Q+(te.key==null||S&&S.key===te.key?"":(""+te.key).replace(qn,"$&/")+"/")+pe)),U.push(te)),1;pe=0;var We=X===""?".":X+":";if(ee(S))for(var we=0;we<S.length;we++)X=S[we],ae=We+Vt(X,we),pe+=k(X,U,Q,ae,te);else if(we=D(S),typeof we=="function")for(S=we.call(S),we=0;!(X=S.next()).done;)X=X.value,ae=We+Vt(X,we++),pe+=k(X,U,Q,ae,te);else if(ae==="object"){if(typeof S.then=="function")return k(zt(S),U,Q,X,te);throw U=String(S),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return pe}function q(S,U,Q){if(S==null)return S;var X=[],te=0;return k(S,X,"","",function(ae){return U.call(Q,ae,te++)}),X}function W(S){if(S._status===-1){var U=S._result;U=U(),U.then(function(Q){(S._status===0||S._status===-1)&&(S._status=1,S._result=Q)},function(Q){(S._status===0||S._status===-1)&&(S._status=2,S._result=Q)}),S._status===-1&&(S._status=0,S._result=U)}if(S._status===1)return S._result.default;throw S._result}var ve=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Ae={map:q,forEach:function(S,U,Q){q(S,function(){U.apply(this,arguments)},Q)},count:function(S){var U=0;return q(S,function(){U++}),U},toArray:function(S){return q(S,function(U){return U})||[]},only:function(S){if(!Lt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return P.Activity=T,P.Children=Ae,P.Component=V,P.Fragment=r,P.Profiler=f,P.PureComponent=H,P.StrictMode=c,P.Suspense=b,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,P.__COMPILER_RUNTIME={__proto__:null,c:function(S){return I.H.useMemoCache(S)}},P.cache=function(S){return function(){return S.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(S,U,Q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var X=L({},S.props),te=S.key;if(U!=null)for(ae in U.key!==void 0&&(te=""+U.key),U)!ke.call(U,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&U.ref===void 0||(X[ae]=U[ae]);var ae=arguments.length-2;if(ae===1)X.children=Q;else if(1<ae){for(var pe=Array(ae),We=0;We<ae;We++)pe[We]=arguments[We+2];X.children=pe}return Ve(S.type,te,X)},P.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},P.createElement=function(S,U,Q){var X,te={},ae=null;if(U!=null)for(X in U.key!==void 0&&(ae=""+U.key),U)ke.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(te[X]=U[X]);var pe=arguments.length-2;if(pe===1)te.children=Q;else if(1<pe){for(var We=Array(pe),we=0;we<pe;we++)We[we]=arguments[we+2];te.children=We}if(S&&S.defaultProps)for(X in pe=S.defaultProps,pe)te[X]===void 0&&(te[X]=pe[X]);return Ve(S,ae,te)},P.createRef=function(){return{current:null}},P.forwardRef=function(S){return{$$typeof:g,render:S}},P.isValidElement=Lt,P.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:W}},P.memo=function(S,U){return{$$typeof:m,type:S,compare:U===void 0?null:U}},P.startTransition=function(S){var U=I.T,Q={};I.T=Q;try{var X=S(),te=I.S;te!==null&&te(Q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(se,ve)}catch(ae){ve(ae)}finally{U!==null&&Q.types!==null&&(U.types=Q.types),I.T=U}},P.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},P.use=function(S){return I.H.use(S)},P.useActionState=function(S,U,Q){return I.H.useActionState(S,U,Q)},P.useCallback=function(S,U){return I.H.useCallback(S,U)},P.useContext=function(S){return I.H.useContext(S)},P.useDebugValue=function(){},P.useDeferredValue=function(S,U){return I.H.useDeferredValue(S,U)},P.useEffect=function(S,U){return I.H.useEffect(S,U)},P.useEffectEvent=function(S){return I.H.useEffectEvent(S)},P.useId=function(){return I.H.useId()},P.useImperativeHandle=function(S,U,Q){return I.H.useImperativeHandle(S,U,Q)},P.useInsertionEffect=function(S,U){return I.H.useInsertionEffect(S,U)},P.useLayoutEffect=function(S,U){return I.H.useLayoutEffect(S,U)},P.useMemo=function(S,U){return I.H.useMemo(S,U)},P.useOptimistic=function(S,U){return I.H.useOptimistic(S,U)},P.useReducer=function(S,U,Q){return I.H.useReducer(S,U,Q)},P.useRef=function(S){return I.H.useRef(S)},P.useState=function(S){return I.H.useState(S)},P.useSyncExternalStore=function(S,U,Q){return I.H.useSyncExternalStore(S,U,Q)},P.useTransition=function(){return I.H.useTransition()},P.version="19.2.3",P}var Bd;function gc(){return Bd||(Bd=1,Pr.exports=x0()),Pr.exports}var M=gc();const S0=pm(M);var ec={exports:{}},Va={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function E0(){return qd||(qd=1,(function(u){function s(k,q){var W=k.length;k.push(q);e:for(;0<W;){var ve=W-1>>>1,Ae=k[ve];if(0<f(Ae,q))k[ve]=q,k[W]=Ae,W=ve;else break e}}function r(k){return k.length===0?null:k[0]}function c(k){if(k.length===0)return null;var q=k[0],W=k.pop();if(W!==q){k[0]=W;e:for(var ve=0,Ae=k.length,S=Ae>>>1;ve<S;){var U=2*(ve+1)-1,Q=k[U],X=U+1,te=k[X];if(0>f(Q,W))X<Ae&&0>f(te,Q)?(k[ve]=te,k[X]=W,ve=X):(k[ve]=Q,k[U]=W,ve=U);else if(X<Ae&&0>f(te,W))k[ve]=te,k[X]=W,ve=X;else break e}}return q}function f(k,q){var W=k.sortIndex-q.sortIndex;return W!==0?W:k.id-q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var p=Date,g=p.now();u.unstable_now=function(){return p.now()-g}}var b=[],m=[],E=1,T=null,z=3,D=!1,B=!1,L=!1,G=!1,V=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function F(k){for(var q=r(m);q!==null;){if(q.callback===null)c(m);else if(q.startTime<=k)c(m),q.sortIndex=q.expirationTime,s(b,q);else break;q=r(m)}}function ee(k){if(L=!1,F(k),!B)if(r(b)!==null)B=!0,se||(se=!0,et());else{var q=r(m);q!==null&&zt(ee,q.startTime-k)}}var se=!1,I=-1,ke=5,Ve=-1;function vt(){return G?!0:!(u.unstable_now()-Ve<ke)}function Lt(){if(G=!1,se){var k=u.unstable_now();Ve=k;var q=!0;try{e:{B=!1,L&&(L=!1,K(I),I=-1),D=!0;var W=z;try{t:{for(F(k),T=r(b);T!==null&&!(T.expirationTime>k&&vt());){var ve=T.callback;if(typeof ve=="function"){T.callback=null,z=T.priorityLevel;var Ae=ve(T.expirationTime<=k);if(k=u.unstable_now(),typeof Ae=="function"){T.callback=Ae,F(k),q=!0;break t}T===r(b)&&c(b),F(k)}else c(b);T=r(b)}if(T!==null)q=!0;else{var S=r(m);S!==null&&zt(ee,S.startTime-k),q=!1}}break e}finally{T=null,z=W,D=!1}q=void 0}}finally{q?et():se=!1}}}var et;if(typeof H=="function")et=function(){H(Lt)};else if(typeof MessageChannel<"u"){var qn=new MessageChannel,Vt=qn.port2;qn.port1.onmessage=Lt,et=function(){Vt.postMessage(null)}}else et=function(){V(Lt,0)};function zt(k,q){I=V(function(){k(u.unstable_now())},q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(k){k.callback=null},u.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<k?Math.floor(1e3/k):5},u.unstable_getCurrentPriorityLevel=function(){return z},u.unstable_next=function(k){switch(z){case 1:case 2:case 3:var q=3;break;default:q=z}var W=z;z=q;try{return k()}finally{z=W}},u.unstable_requestPaint=function(){G=!0},u.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var W=z;z=k;try{return q()}finally{z=W}},u.unstable_scheduleCallback=function(k,q,W){var ve=u.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ve+W:ve):W=ve,k){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=W+Ae,k={id:E++,callback:q,priorityLevel:k,startTime:W,expirationTime:Ae,sortIndex:-1},W>ve?(k.sortIndex=W,s(m,k),r(b)===null&&k===r(m)&&(L?(K(I),I=-1):L=!0,zt(ee,W-ve))):(k.sortIndex=Ae,s(b,k),B||D||(B=!0,se||(se=!0,et()))),k},u.unstable_shouldYield=vt,u.unstable_wrapCallback=function(k){var q=z;return function(){var W=z;z=q;try{return k.apply(this,arguments)}finally{z=W}}}})(nc)),nc}var Qd;function T0(){return Qd||(Qd=1,tc.exports=E0()),tc.exports}var lc={exports:{}},Ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function A0(){if(Yd)return Ie;Yd=1;var u=gc();function s(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var c={d:{f:r,r:function(){throw Error(s(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(b,m,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:T==null?null:""+T,children:b,containerInfo:m,implementation:E}}var p=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ie.createPortal=function(b,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return h(b,m,null,E)},Ie.flushSync=function(b){var m=p.T,E=c.p;try{if(p.T=null,c.p=2,b)return b()}finally{p.T=m,c.p=E,c.d.f()}},Ie.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(b,m))},Ie.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},Ie.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var E=m.as,T=g(E,m.crossOrigin),z=typeof m.integrity=="string"?m.integrity:void 0,D=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?c.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:T,integrity:z,fetchPriority:D}):E==="script"&&c.d.X(b,{crossOrigin:T,integrity:z,fetchPriority:D,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ie.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=g(m.as,m.crossOrigin);c.d.M(b,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(b)},Ie.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,T=g(E,m.crossOrigin);c.d.L(b,E,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ie.preloadModule=function(b,m){if(typeof b=="string")if(m){var E=g(m.as,m.crossOrigin);c.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(b)},Ie.requestFormReset=function(b){c.d.r(b)},Ie.unstable_batchedUpdates=function(b,m){return b(m)},Ie.useFormState=function(b,m,E){return p.H.useFormState(b,m,E)},Ie.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ie.version="19.2.3",Ie}var Vd;function _0(){if(Vd)return lc.exports;Vd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),lc.exports=A0(),lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function C0(){if(Xd)return Va;Xd=1;var u=T0(),s=gc(),r=_0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(h(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return b(a),e;if(i===l)return b(a),t;i=i.sibling}throw Error(c(188))}if(n.return!==l.return)n=a,l=i;else{for(var o=!1,d=a.child;d;){if(d===n){o=!0,n=a,l=i;break}if(d===l){o=!0,l=a,n=i;break}d=d.sibling}if(!o){for(d=i.child;d;){if(d===n){o=!0,n=i,l=a;break}if(d===l){o=!0,l=i,n=a;break}d=d.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==l)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,z=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),H=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),Lt=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=Lt&&e[Lt]||e["@@iterator"],typeof e=="function"?e:null)}var qn=Symbol.for("react.client.reference");function Vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case V:return"Profiler";case G:return"StrictMode";case ee:return"Suspense";case se:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case H:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:Vt(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return Vt(e(t))}catch{}}return null}var zt=Array.isArray,k=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ve=[],Ae=-1;function S(e){return{current:e}}function U(e){0>Ae||(e.current=ve[Ae],ve[Ae]=null,Ae--)}function Q(e,t){Ae++,ve[Ae]=e.current,e.current=t}var X=S(null),te=S(null),ae=S(null),pe=S(null);function We(e,t){switch(Q(ae,t),Q(te,e),Q(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ud(t),e=sd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(X),Q(X,e)}function we(){U(X),U(te),U(ae)}function Il(e){e.memoizedState!==null&&Q(pe,e);var t=X.current,n=sd(t,e.type);t!==n&&(Q(te,e),Q(X,n))}function ti(e){te.current===e&&(U(X),U(te)),pe.current===e&&(U(pe),Ga._currentValue=W)}var wu,wc;function Qn(e){if(wu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wu=t&&t[1]||"",wc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+e+wc}var ju=!1;function Hu(e,t){if(!e||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(N){var R=N}Reflect.construct(e,[],j)}else{try{j.call()}catch(N){R=N}e.call(j.prototype)}}else{try{throw Error()}catch(N){R=N}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],d=i[1];if(o&&d){var v=o.split(`
`),C=d.split(`
`);for(a=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;if(l===v.length||a===C.length)for(l=v.length-1,a=C.length-1;1<=l&&0<=a&&v[l]!==C[a];)a--;for(;1<=l&&0<=a;l--,a--)if(v[l]!==C[a]){if(l!==1||a!==1)do if(l--,a--,0>a||v[l]!==C[a]){var O=`
`+v[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qn(n):""}function Jm(e,t){switch(e.tag){case 26:case 27:case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return e.child!==t&&t!==null?Qn("Suspense Fallback"):Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 15:return Hu(e.type,!1);case 11:return Hu(e.type.render,!1);case 1:return Hu(e.type,!0);case 31:return Qn("Activity");default:return""}}function jc(e){try{var t="",n=null;do t+=Jm(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Uu=Object.prototype.hasOwnProperty,Lu=u.unstable_scheduleCallback,Gu=u.unstable_cancelCallback,Km=u.unstable_shouldYield,$m=u.unstable_requestPaint,rt=u.unstable_now,Im=u.unstable_getCurrentPriorityLevel,Hc=u.unstable_ImmediatePriority,Uc=u.unstable_UserBlockingPriority,ni=u.unstable_NormalPriority,Wm=u.unstable_LowPriority,Lc=u.unstable_IdlePriority,Fm=u.log,Pm=u.unstable_setDisableYieldValue,Wl=null,ct=null;function gn(e){if(typeof Fm=="function"&&Pm(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Wl,e)}catch{}}var ot=Math.clz32?Math.clz32:np,ep=Math.log,tp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ep(e)/tp|0)|0}var li=256,ai=262144,ii=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?a=Yn(l):(o&=d,o!==0?a=Yn(o):n||(n=d&~e,n!==0&&(a=Yn(n))))):(d=l&~i,d!==0?a=Yn(d):o!==0?a=Yn(o):n||(n=l&~e,n!==0&&(a=Yn(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Fl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(){var e=ii;return ii<<=1,(ii&62914560)===0&&(ii=4194304),e}function Bu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ap(e,t,n,l,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,C=e.hiddenUpdates;for(n=o&~n;0<n;){var O=31-ot(n),j=1<<O;d[O]=0,v[O]=-1;var R=C[O];if(R!==null)for(C[O]=null,O=0;O<R.length;O++){var N=R[O];N!==null&&(N.lane&=-536870913)}n&=~j}l!==0&&Bc(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Bc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function qc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-ot(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Qc(e,t){var n=t&-t;return n=(n&42)!==0?1:qu(n),(n&(e.suspendedLanes|t))!==0?0:n}function qu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Dd(e.type))}function Vc(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var yn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+yn,tt="__reactProps$"+yn,cl="__reactContainer$"+yn,Yu="__reactEvents$"+yn,ip="__reactListeners$"+yn,up="__reactHandles$"+yn,Xc="__reactResources$"+yn,ea="__reactMarker$"+yn;function Vu(e){delete e[Xe],delete e[tt],delete e[Yu],delete e[ip],delete e[up]}function ol(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cl]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=md(e);e!==null;){if(n=e[Xe])return n;e=md(e)}return t}e=n,n=e.parentNode}return null}function fl(e){if(e=e[Xe]||e[cl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ta(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function hl(e){var t=e[Xc];return t||(t=e[Xc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[ea]=!0}var Zc=new Set,Jc={};function Vn(e,t){dl(e,t),dl(e+"Capture",t)}function dl(e,t){for(Jc[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var sp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kc={},$c={};function rp(e){return Uu.call($c,e)?!0:Uu.call(Kc,e)?!1:sp.test(e)?$c[e]=!0:(Kc[e]=!0,!1)}function si(e,t,n){if(rp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ri(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cp(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xu(e){if(!e._valueTracker){var t=Ic(e)?"checked":"value";e._valueTracker=cp(e,t,""+e[t])}}function Wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ic(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var op=/[\n"\\]/g;function St(e){return e.replace(op,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zu(e,t,n,l,a,i,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Ju(e,o,xt(t)):n!=null?Ju(e,o,xt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+xt(d):e.removeAttribute("name")}function Fc(e,t,n,l,a,i,o,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Xu(e);return}n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Xu(e)}function Ju(e,t,n){t==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ml(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Pc(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function eo(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(c(92));if(zt(l)){if(1<l.length)throw Error(c(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Xu(e)}function pl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function to(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||fp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function no(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&to(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&to(e,i,t[i])}function Ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return dp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var $u=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,yl=null;function lo(e){var t=fl(e);if(t&&(e=t.stateNode)){var n=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[tt]||null;if(!a)throw Error(c(90));Zu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Wc(l)}break e;case"textarea":Pc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ml(e,!!n.multiple,t,!1)}}}var Wu=!1;function ao(e,t,n){if(Wu)return e(t,n);Wu=!0;try{var l=e(t);return l}finally{if(Wu=!1,(gl!==null||yl!==null)&&(Wi(),gl&&(t=gl,e=yl,yl=gl=null,lo(t),e)))for(t=0;t<e.length;t++)lo(e[t])}}function na(e,t){var n=e.stateNode;if(n===null)return null;var l=n[tt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if(Jt)try{var la={};Object.defineProperty(la,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Fu=!1}var bn=null,Pu=null,fi=null;function io(){if(fi)return fi;var e,t=Pu,n=t.length,l,a="value"in bn?bn.value:bn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[i-l];l++);return fi=a.slice(e,1<l?1-l:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function uo(){return!1}function nt(e){function t(n,l,a,i,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?di:uo,this.isPropagationStopped=uo,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=nt(Xn),aa=T({},Xn,{view:0,detail:0}),mp=nt(aa),es,ts,ia,pi=T({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(es=e.screenX-ia.screenX,ts=e.screenY-ia.screenY):ts=es=0,ia=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),so=nt(pi),pp=T({},pi,{dataTransfer:0}),gp=nt(pp),yp=T({},aa,{relatedTarget:0}),ns=nt(yp),bp=T({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=nt(bp),xp=T({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sp=nt(xp),Ep=T({},Xn,{data:0}),ro=nt(Ep),Tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_p[e])?!!t[e]:!1}function ls(){return Cp}var Rp=T({},aa,{key:function(e){if(e.key){var t=Tp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mp=nt(Rp),Np=T({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),co=nt(Np),Dp=T({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),zp=nt(Dp),Op=T({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=nt(Op),wp=T({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=nt(wp),Hp=T({},Xn,{newState:0,oldState:0}),Up=nt(Hp),Lp=[9,13,27,32],as=Jt&&"CompositionEvent"in window,ua=null;Jt&&"documentMode"in document&&(ua=document.documentMode);var Gp=Jt&&"TextEvent"in window&&!ua,oo=Jt&&(!as||ua&&8<ua&&11>=ua),fo=" ",ho=!1;function mo(e,t){switch(e){case"keyup":return Lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function po(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bl=!1;function Bp(e,t){switch(e){case"compositionend":return po(t);case"keypress":return t.which!==32?null:(ho=!0,fo);case"textInput":return e=t.data,e===fo&&ho?null:e;default:return null}}function qp(e,t){if(bl)return e==="compositionend"||!as&&mo(e,t)?(e=io(),fi=Pu=bn=null,bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oo&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function yo(e,t,n,l){gl?yl?yl.push(l):yl=[l]:gl=l,t=au(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var sa=null,ra=null;function Yp(e){ed(e,0)}function gi(e){var t=ta(e);if(Wc(t))return e}function bo(e,t){if(e==="change")return t}var vo=!1;if(Jt){var is;if(Jt){var us="oninput"in document;if(!us){var xo=document.createElement("div");xo.setAttribute("oninput","return;"),us=typeof xo.oninput=="function"}is=us}else is=!1;vo=is&&(!document.documentMode||9<document.documentMode)}function So(){sa&&(sa.detachEvent("onpropertychange",Eo),ra=sa=null)}function Eo(e){if(e.propertyName==="value"&&gi(ra)){var t=[];yo(t,ra,e,Iu(e)),ao(Yp,t)}}function Vp(e,t,n){e==="focusin"?(So(),sa=t,ra=n,sa.attachEvent("onpropertychange",Eo)):e==="focusout"&&So()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(ra)}function Zp(e,t){if(e==="click")return gi(t)}function Jp(e,t){if(e==="input"||e==="change")return gi(t)}function Kp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Kp;function ca(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Uu.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function To(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,t){var n=To(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=To(n)}}function _o(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_o(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Co(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ci(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $p=Jt&&"documentMode"in document&&11>=document.documentMode,vl=null,rs=null,oa=null,cs=!1;function Ro(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cs||vl==null||vl!==ci(l)||(l=vl,"selectionStart"in l&&ss(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oa&&ca(oa,l)||(oa=l,l=au(rs,"onSelect"),0<l.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=vl)))}function Zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xl={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},os={},Mo={};Jt&&(Mo=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function Jn(e){if(os[e])return os[e];if(!xl[e])return e;var t=xl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mo)return os[e]=t[n];return e}var No=Jn("animationend"),Do=Jn("animationiteration"),zo=Jn("animationstart"),Ip=Jn("transitionrun"),Wp=Jn("transitionstart"),Fp=Jn("transitioncancel"),Oo=Jn("transitionend"),ko=new Map,fs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fs.push("scrollEnd");function Ot(e,t){ko.set(e,t),Vn(t,[e])}var yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],Sl=0,hs=0;function bi(){for(var e=Sl,t=hs=Sl=0;t<e;){var n=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}i!==0&&wo(n,a,i)}}function vi(e,t,n,l){Et[Sl++]=e,Et[Sl++]=t,Et[Sl++]=n,Et[Sl++]=l,hs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ds(e,t,n,l){return vi(e,t,n,l),xi(e)}function Kn(e,t){return vi(e,null,null,t),xi(e)}function wo(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-ot(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function xi(e){if(50<Oa)throw Oa=0,Er=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var El={};function Pp(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,l){return new Pp(e,t,n,l)}function ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function jo(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,l,a,i){var o=0;if(l=e,typeof e=="function")ms(e)&&(o=1);else if(typeof e=="string")o=a0(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=ht(31,n,t,a),e.elementType=Ve,e.lanes=i,e;case L:return $n(n.children,a,i,t);case G:o=8,a|=24;break;case V:return e=ht(12,n,t,a|2),e.elementType=V,e.lanes=i,e;case ee:return e=ht(13,n,t,a),e.elementType=ee,e.lanes=i,e;case se:return e=ht(19,n,t,a),e.elementType=se,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:o=10;break e;case K:o=9;break e;case F:o=11;break e;case I:o=14;break e;case ke:o=16,l=null;break e}o=29,n=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=ht(o,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function $n(e,t,n,l){return e=ht(7,e,l,t),e.lanes=n,e}function ps(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function Ho(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function gs(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Uo=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var n=Uo.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jc(t)},Uo.set(e,t),t)}return{value:e,source:t,stack:jc(t)}}var Tl=[],Al=0,Ei=null,fa=0,At=[],_t=0,vn=null,Gt=1,Bt="";function $t(e,t){Tl[Al++]=fa,Tl[Al++]=Ei,Ei=e,fa=t}function Lo(e,t,n){At[_t++]=Gt,At[_t++]=Bt,At[_t++]=vn,vn=e;var l=Gt;e=Bt;var a=32-ot(l)-1;l&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(l&(1<<o)-1).toString(32),l>>=o,a-=o,Gt=1<<32-ot(t)+a|n<<a|l,Bt=i+e}else Gt=1<<i|n<<a|l,Bt=e}function ys(e){e.return!==null&&($t(e,1),Lo(e,1,0))}function bs(e){for(;e===Ei;)Ei=Tl[--Al],Tl[Al]=null,fa=Tl[--Al],Tl[Al]=null;for(;e===vn;)vn=At[--_t],At[_t]=null,Bt=At[--_t],At[_t]=null,Gt=At[--_t],At[_t]=null}function Go(e,t){At[_t++]=Gt,At[_t++]=Bt,At[_t++]=vn,Gt=t.id,Bt=t.overflow,vn=e}var Ze=null,Ce=null,oe=!1,xn=null,Ct=!1,vs=Error(c(519));function Sn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ha(Tt(t,e)),vs}function Bo(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Xe]=e,t[tt]=l,n){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(n=0;n<wa.length;n++)ue(wa[n],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),Fc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),eo(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||ad(t.textContent,n)?(l.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),l.onScroll!=null&&ue("scroll",t),l.onScrollEnd!=null&&ue("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||Sn(e,!0)}function qo(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Ze=Ze.return}}function _l(e){if(e!==Ze)return!1;if(!oe)return qo(e),oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ur(e.type,e.memoizedProps)),n=!n),n&&Ce&&Sn(e),qo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ce=dd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ce=dd(e)}else t===27?(t=Ce,jn(e.type)?(e=Qr,Qr=null,Ce=e):Ce=t):Ce=Ze?Mt(e.stateNode.nextSibling):null;return!0}function In(){Ce=Ze=null,oe=!1}function xs(){var e=xn;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),xn=null),e}function ha(e){xn===null?xn=[e]:xn.push(e)}var Ss=S(null),Wn=null,It=null;function En(e,t,n){Q(Ss,t._currentValue),t._currentValue=n}function Wt(e){e._currentValue=Ss.current,U(Ss)}function Es(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ts(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var o=a.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=a;for(var v=0;v<t.length;v++)if(d.context===t[v]){i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Es(i.return,n,e),l||(o=null);break e}i=d.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(c(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Es(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Cl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var d=a.type;ft(a.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(a===pe.current){if(o=a.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ga):e=[Ga])}a=a.return}e!==null&&Ts(t,e,n,l),t.flags|=262144}function Ti(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fn(e){Wn=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Qo(Wn,e)}function Ai(e,t){return Wn===null&&Fn(e),Qo(e,t)}function Qo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},It===null){if(e===null)throw Error(c(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return n}var eg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},tg=u.unstable_scheduleCallback,ng=u.unstable_NormalPriority,Ue={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function As(){return{controller:new eg,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&tg(ng,function(){e.controller.abort()})}var ma=null,_s=0,Rl=0,Ml=null;function lg(e,t){if(ma===null){var n=ma=[];_s=0,Rl=Mr(),Ml={status:"pending",value:void 0,then:function(l){n.push(l)}}}return _s++,t.then(Yo,Yo),t}function Yo(){if(--_s===0&&ma!==null){Ml!==null&&(Ml.status="fulfilled");var e=ma;ma=null,Rl=0,Ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ag(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Vo=k.S;k.S=function(e,t){Mh=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&lg(e,t),Vo!==null&&Vo(e,t)};var Pn=S(null);function Cs(){var e=Pn.current;return e!==null?e:_e.pooledCache}function _i(e,t){t===null?Q(Pn,Pn.current):Q(Pn,t.pool)}function Xo(){var e=Cs();return e===null?null:{parent:Ue._currentValue,pool:e}}var Nl=Error(c(460)),Rs=Error(c(474)),Ci=Error(c(542)),Ri={then:function(){}};function Zo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$o(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$o(e),e}throw tl=t,Nl}}function el(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(tl=n,Nl):n}}var tl=null;function Ko(){if(tl===null)throw Error(c(459));var e=tl;return tl=null,e}function $o(e){if(e===Nl||e===Ci)throw Error(c(483))}var Dl=null,pa=0;function Mi(e){var t=pa;return pa+=1,Dl===null&&(Dl=[]),Jo(Dl,e,t)}function ga(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ni(e,t){throw t.$$typeof===z?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Io(e){function t(A,x){if(e){var _=A.deletions;_===null?(A.deletions=[x],A.flags|=16):_.push(x)}}function n(A,x){if(!e)return null;for(;x!==null;)t(A,x),x=x.sibling;return null}function l(A){for(var x=new Map;A!==null;)A.key!==null?x.set(A.key,A):x.set(A.index,A),A=A.sibling;return x}function a(A,x){return A=Kt(A,x),A.index=0,A.sibling=null,A}function i(A,x,_){return A.index=_,e?(_=A.alternate,_!==null?(_=_.index,_<x?(A.flags|=67108866,x):_):(A.flags|=67108866,x)):(A.flags|=1048576,x)}function o(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function d(A,x,_,w){return x===null||x.tag!==6?(x=ps(_,A.mode,w),x.return=A,x):(x=a(x,_),x.return=A,x)}function v(A,x,_,w){var J=_.type;return J===L?O(A,x,_.props.children,w,_.key):x!==null&&(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ke&&el(J)===x.type)?(x=a(x,_.props),ga(x,_),x.return=A,x):(x=Si(_.type,_.key,_.props,null,A.mode,w),ga(x,_),x.return=A,x)}function C(A,x,_,w){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=gs(_,A.mode,w),x.return=A,x):(x=a(x,_.children||[]),x.return=A,x)}function O(A,x,_,w,J){return x===null||x.tag!==7?(x=$n(_,A.mode,w,J),x.return=A,x):(x=a(x,_),x.return=A,x)}function j(A,x,_){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=ps(""+x,A.mode,_),x.return=A,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case D:return _=Si(x.type,x.key,x.props,null,A.mode,_),ga(_,x),_.return=A,_;case B:return x=gs(x,A.mode,_),x.return=A,x;case ke:return x=el(x),j(A,x,_)}if(zt(x)||et(x))return x=$n(x,A.mode,_,null),x.return=A,x;if(typeof x.then=="function")return j(A,Mi(x),_);if(x.$$typeof===H)return j(A,Ai(A,x),_);Ni(A,x)}return null}function R(A,x,_,w){var J=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return J!==null?null:d(A,x,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case D:return _.key===J?v(A,x,_,w):null;case B:return _.key===J?C(A,x,_,w):null;case ke:return _=el(_),R(A,x,_,w)}if(zt(_)||et(_))return J!==null?null:O(A,x,_,w,null);if(typeof _.then=="function")return R(A,x,Mi(_),w);if(_.$$typeof===H)return R(A,x,Ai(A,_),w);Ni(A,_)}return null}function N(A,x,_,w,J){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return A=A.get(_)||null,d(x,A,""+w,J);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case D:return A=A.get(w.key===null?_:w.key)||null,v(x,A,w,J);case B:return A=A.get(w.key===null?_:w.key)||null,C(x,A,w,J);case ke:return w=el(w),N(A,x,_,w,J)}if(zt(w)||et(w))return A=A.get(_)||null,O(x,A,w,J,null);if(typeof w.then=="function")return N(A,x,_,Mi(w),J);if(w.$$typeof===H)return N(A,x,_,Ai(x,w),J);Ni(x,w)}return null}function Y(A,x,_,w){for(var J=null,fe=null,Z=x,le=x=0,ce=null;Z!==null&&le<_.length;le++){Z.index>le?(ce=Z,Z=null):ce=Z.sibling;var he=R(A,Z,_[le],w);if(he===null){Z===null&&(Z=ce);break}e&&Z&&he.alternate===null&&t(A,Z),x=i(he,x,le),fe===null?J=he:fe.sibling=he,fe=he,Z=ce}if(le===_.length)return n(A,Z),oe&&$t(A,le),J;if(Z===null){for(;le<_.length;le++)Z=j(A,_[le],w),Z!==null&&(x=i(Z,x,le),fe===null?J=Z:fe.sibling=Z,fe=Z);return oe&&$t(A,le),J}for(Z=l(Z);le<_.length;le++)ce=N(Z,A,le,_[le],w),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?le:ce.key),x=i(ce,x,le),fe===null?J=ce:fe.sibling=ce,fe=ce);return e&&Z.forEach(function(Bn){return t(A,Bn)}),oe&&$t(A,le),J}function $(A,x,_,w){if(_==null)throw Error(c(151));for(var J=null,fe=null,Z=x,le=x=0,ce=null,he=_.next();Z!==null&&!he.done;le++,he=_.next()){Z.index>le?(ce=Z,Z=null):ce=Z.sibling;var Bn=R(A,Z,he.value,w);if(Bn===null){Z===null&&(Z=ce);break}e&&Z&&Bn.alternate===null&&t(A,Z),x=i(Bn,x,le),fe===null?J=Bn:fe.sibling=Bn,fe=Bn,Z=ce}if(he.done)return n(A,Z),oe&&$t(A,le),J;if(Z===null){for(;!he.done;le++,he=_.next())he=j(A,he.value,w),he!==null&&(x=i(he,x,le),fe===null?J=he:fe.sibling=he,fe=he);return oe&&$t(A,le),J}for(Z=l(Z);!he.done;le++,he=_.next())he=N(Z,A,le,he.value,w),he!==null&&(e&&he.alternate!==null&&Z.delete(he.key===null?le:he.key),x=i(he,x,le),fe===null?J=he:fe.sibling=he,fe=he);return e&&Z.forEach(function(p0){return t(A,p0)}),oe&&$t(A,le),J}function Ee(A,x,_,w){if(typeof _=="object"&&_!==null&&_.type===L&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case D:e:{for(var J=_.key;x!==null;){if(x.key===J){if(J=_.type,J===L){if(x.tag===7){n(A,x.sibling),w=a(x,_.props.children),w.return=A,A=w;break e}}else if(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ke&&el(J)===x.type){n(A,x.sibling),w=a(x,_.props),ga(w,_),w.return=A,A=w;break e}n(A,x);break}else t(A,x);x=x.sibling}_.type===L?(w=$n(_.props.children,A.mode,w,_.key),w.return=A,A=w):(w=Si(_.type,_.key,_.props,null,A.mode,w),ga(w,_),w.return=A,A=w)}return o(A);case B:e:{for(J=_.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(A,x.sibling),w=a(x,_.children||[]),w.return=A,A=w;break e}else{n(A,x);break}else t(A,x);x=x.sibling}w=gs(_,A.mode,w),w.return=A,A=w}return o(A);case ke:return _=el(_),Ee(A,x,_,w)}if(zt(_))return Y(A,x,_,w);if(et(_)){if(J=et(_),typeof J!="function")throw Error(c(150));return _=J.call(_),$(A,x,_,w)}if(typeof _.then=="function")return Ee(A,x,Mi(_),w);if(_.$$typeof===H)return Ee(A,x,Ai(A,_),w);Ni(A,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,x!==null&&x.tag===6?(n(A,x.sibling),w=a(x,_),w.return=A,A=w):(n(A,x),w=ps(_,A.mode,w),w.return=A,A=w),o(A)):n(A,x)}return function(A,x,_,w){try{pa=0;var J=Ee(A,x,_,w);return Dl=null,J}catch(Z){if(Z===Nl||Z===Ci)throw Z;var fe=ht(29,Z,null,A.mode);return fe.lanes=w,fe.return=A,fe}finally{}}}var nl=Io(!0),Wo=Io(!1),Tn=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ns(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function An(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=xi(e),wo(e,null,n),t}return vi(e,l,t,n),xi(e)}function ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,qc(e,n)}}function Ds(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var zs=!1;function ba(){if(zs){var e=Ml;if(e!==null)throw e}}function va(e,t,n,l){zs=!1;var a=e.updateQueue;Tn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var v=d,C=v.next;v.next=null,o===null?i=C:o.next=C,o=v;var O=e.alternate;O!==null&&(O=O.updateQueue,d=O.lastBaseUpdate,d!==o&&(d===null?O.firstBaseUpdate=C:d.next=C,O.lastBaseUpdate=v))}if(i!==null){var j=a.baseState;o=0,O=C=v=null,d=i;do{var R=d.lane&-536870913,N=R!==d.lane;if(N?(re&R)===R:(l&R)===R){R!==0&&R===Rl&&(zs=!0),O!==null&&(O=O.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var Y=e,$=d;R=t;var Ee=n;switch($.tag){case 1:if(Y=$.payload,typeof Y=="function"){j=Y.call(Ee,j,R);break e}j=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=$.payload,R=typeof Y=="function"?Y.call(Ee,j,R):Y,R==null)break e;j=T({},j,R);break e;case 2:Tn=!0}}R=d.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=a.callbacks,N===null?a.callbacks=[R]:N.push(R))}else N={lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},O===null?(C=O=N,v=j):O=O.next=N,o|=R;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;N=d,d=N.next,N.next=null,a.lastBaseUpdate=N,a.shared.pending=null}}while(!0);O===null&&(v=j),a.baseState=v,a.firstBaseUpdate=C,a.lastBaseUpdate=O,i===null&&(a.shared.lanes=0),Dn|=o,e.lanes=o,e.memoizedState=j}}function Fo(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Po(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Fo(n[e],t)}var zl=S(null),Di=S(0);function ef(e,t){e=sn,Q(Di,e),Q(zl,t),sn=e|t.baseLanes}function Os(){Q(Di,sn),Q(zl,zl.current)}function ks(){sn=Di.current,U(zl),U(Di)}var dt=S(null),Rt=null;function Cn(e){var t=e.alternate;Q(je,je.current&1),Q(dt,e),Rt===null&&(t===null||zl.current!==null||t.memoizedState!==null)&&(Rt=e)}function ws(e){Q(je,je.current),Q(dt,e),Rt===null&&(Rt=e)}function tf(e){e.tag===22?(Q(je,je.current),Q(dt,e),Rt===null&&(Rt=e)):Rn()}function Rn(){Q(je,je.current),Q(dt,dt.current)}function mt(e){U(dt),Rt===e&&(Rt=null),U(je)}var je=S(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Br(n)||qr(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,ne=null,xe=null,Le=null,Oi=!1,Ol=!1,ll=!1,ki=0,xa=0,kl=null,ig=0;function De(){throw Error(c(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Hs(e,t,n,l,a,i){return Ft=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Gf:Ws,ll=!1,i=n(l,a),ll=!1,Ol&&(i=lf(t,n,l,a)),nf(e),i}function nf(e){k.H=Ta;var t=xe!==null&&xe.next!==null;if(Ft=0,Le=xe=ne=null,Oi=!1,xa=0,kl=null,t)throw Error(c(300));e===null||Ge||(e=e.dependencies,e!==null&&Ti(e)&&(Ge=!0))}function lf(e,t,n,l){ne=e;var a=0;do{if(Ol&&(kl=null),xa=0,Ol=!1,25<=a)throw Error(c(301));if(a+=1,Le=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}k.H=Bf,i=t(n,l)}while(Ol);return i}function ug(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Sa(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ne.flags|=1024),t}function Us(){var e=ki!==0;return ki=0,e}function Ls(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Gs(e){if(Oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Oi=!1}Ft=0,Le=xe=ne=null,Ol=!1,xa=ki=0,kl=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ne.memoizedState=Le=e:Le=Le.next=e,Le}function He(){if(xe===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Le===null?ne.memoizedState:Le.next;if(t!==null)Le=t,xe=e;else{if(e===null)throw ne.alternate===null?Error(c(467)):Error(c(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?ne.memoizedState=Le=e:Le=Le.next=e}return Le}function wi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sa(e){var t=xa;return xa+=1,kl===null&&(kl=[]),e=Jo(kl,e,t),t=ne,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Gf:Ws),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sa(e);if(e.$$typeof===H)return Je(e)}throw Error(c(438,String(e)))}function Bs(e){var t=null,n=ne.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=wi(),ne.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=vt;return t.index++,n}function Pt(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=He();return qs(t,xe,e)}function qs(e,t,n){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var d=o=null,v=null,C=t,O=!1;do{var j=C.lane&-536870913;if(j!==C.lane?(re&j)===j:(Ft&j)===j){var R=C.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),j===Rl&&(O=!0);else if((Ft&R)===R){C=C.next,R===Rl&&(O=!0);continue}else j={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(d=v=j,o=i):v=v.next=j,ne.lanes|=R,Dn|=R;j=C.action,ll&&n(i,j),i=C.hasEagerState?C.eagerState:n(i,j)}else R={lane:j,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(d=v=R,o=i):v=v.next=R,ne.lanes|=j,Dn|=j;C=C.next}while(C!==null&&C!==t);if(v===null?o=i:v.next=d,!ft(i,e.memoizedState)&&(Ge=!0,O&&(n=Ml,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=v,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Qs(e){var t=He(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);ft(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function af(e,t,n){var l=ne,a=He(),i=oe;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var o=!ft((xe||a).memoizedState,n);if(o&&(a.memoizedState=n,Ge=!0),a=a.queue,Xs(rf.bind(null,l,a,e),[e]),a.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,wl(9,{destroy:void 0},sf.bind(null,l,a,n,t),null),_e===null)throw Error(c(349));i||(Ft&127)!==0||uf(l,t,n)}return n}function uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t=wi(),ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sf(e,t,n,l){t.value=n,t.getSnapshot=l,cf(t)&&of(e)}function rf(e,t,n){return n(function(){cf(t)&&of(e)})}function cf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function of(e){var t=Kn(e,2);t!==null&&st(t,e,2)}function Ys(e){var t=Fe();if(typeof e=="function"){var n=e;if(e=n(),ll){gn(!0);try{n()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function ff(e,t,n,l){return e.baseState=n,qs(e,xe,typeof l=="function"?l:Pt)}function sg(e,t,n,l,a){if(Gi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};k.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,hf(t,i)):(i.next=n.next,t.pending=n.next=i)}}function hf(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=k.T,o={};k.T=o;try{var d=n(a,l),v=k.S;v!==null&&v(o,d),df(e,t,d)}catch(C){Vs(e,t,C)}finally{i!==null&&o.types!==null&&(i.types=o.types),k.T=i}}else try{i=n(a,l),df(e,t,i)}catch(C){Vs(e,t,C)}}function df(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){mf(e,t,l)},function(l){return Vs(e,t,l)}):mf(e,t,n)}function mf(e,t,n){t.status="fulfilled",t.value=n,pf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,hf(e,n)))}function Vs(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,pf(t),t=t.next;while(t!==l)}e.action=null}function pf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gf(e,t){return t}function yf(e,t){if(oe){var n=_e.formState;if(n!==null){e:{var l=ne;if(oe){if(Ce){t:{for(var a=Ce,i=Ct;a.nodeType!==8;){if(!i){a=null;break t}if(a=Mt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Ce=Mt(a.nextSibling),l=a.data==="F!";break e}}Sn(l)}l=!1}l&&(t=n[0])}}return n=Fe(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gf,lastRenderedState:t},n.queue=l,n=Hf.bind(null,ne,l),l.dispatch=n,l=Ys(!1),i=Is.bind(null,ne,!1,l.queue),l=Fe(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=sg.bind(null,ne,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function bf(e){var t=He();return vf(t,xe,e)}function vf(e,t,n){if(t=qs(e,t,gf)[0],e=Hi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Sa(t)}catch(o){throw o===Nl?Ci:o}else l=t;t=He();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ne.flags|=2048,wl(9,{destroy:void 0},rg.bind(null,a,n),null)),[l,i,e]}function rg(e,t){e.action=t}function xf(e){var t=He(),n=xe;if(n!==null)return vf(t,n,e);He(),t=t.memoizedState,n=He();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function wl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ne.updateQueue,t===null&&(t=wi(),ne.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Sf(){return He().memoizedState}function Ui(e,t,n,l){var a=Fe();ne.flags|=e,a.memoizedState=wl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Li(e,t,n,l){var a=He();l=l===void 0?null:l;var i=a.memoizedState.inst;xe!==null&&l!==null&&js(l,xe.memoizedState.deps)?a.memoizedState=wl(t,i,n,l):(ne.flags|=e,a.memoizedState=wl(1|t,i,n,l))}function Ef(e,t){Ui(8390656,8,e,t)}function Xs(e,t){Li(2048,8,e,t)}function cg(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=wi(),ne.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Tf(e){var t=He().memoizedState;return cg({ref:t,nextImpl:e}),function(){if((me&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Af(e,t){return Li(4,2,e,t)}function _f(e,t){return Li(4,4,e,t)}function Cf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rf(e,t,n){n=n!=null?n.concat([e]):null,Li(4,4,Cf.bind(null,t,e),n)}function Zs(){}function Mf(e,t){var n=He();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&js(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Nf(e,t){var n=He();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&js(t,l[1]))return l[0];if(l=e(),ll){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l}function Js(e,t,n){return n===void 0||(Ft&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Dh(),ne.lanes|=e,Dn|=e,n)}function Df(e,t,n,l){return ft(n,t)?n:zl.current!==null?(e=Js(e,n,l),ft(e,t)||(Ge=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(re&261930)===0?(Ge=!0,e.memoizedState=n):(e=Dh(),ne.lanes|=e,Dn|=e,t)}function zf(e,t,n,l,a){var i=q.p;q.p=i!==0&&8>i?i:8;var o=k.T,d={};k.T=d,Is(e,!1,t,n);try{var v=a(),C=k.S;if(C!==null&&C(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=ag(v,l);Ea(e,t,O,yt(e))}else Ea(e,t,l,yt(e))}catch(j){Ea(e,t,{then:function(){},status:"rejected",reason:j},yt())}finally{q.p=i,o!==null&&d.types!==null&&(o.types=d.types),k.T=o}}function og(){}function Ks(e,t,n,l){if(e.tag!==5)throw Error(c(476));var a=Of(e).queue;zf(e,a,t,W,n===null?og:function(){return kf(e),n(l)})}function Of(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:W},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kf(e){var t=Of(e);t.next===null&&(t=e.alternate.memoizedState),Ea(e,t.next.queue,{},yt())}function $s(){return Je(Ga)}function wf(){return He().memoizedState}function jf(){return He().memoizedState}function fg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=An(n);var l=_n(t,e,n);l!==null&&(st(l,t,n),ya(l,t,n)),t={cache:As()},e.payload=t;return}t=t.return}}function hg(e,t,n){var l=yt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gi(e)?Uf(t,n):(n=ds(e,t,n,l),n!==null&&(st(n,e,l),Lf(n,t,l)))}function Hf(e,t,n){var l=yt();Ea(e,t,n,l)}function Ea(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))Uf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,d=i(o,n);if(a.hasEagerState=!0,a.eagerState=d,ft(d,o))return vi(e,t,a,0),_e===null&&bi(),!1}catch{}finally{}if(n=ds(e,t,a,l),n!==null)return st(n,e,l),Lf(n,t,l),!0}return!1}function Is(e,t,n,l){if(l={lane:2,revertLane:Mr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gi(e)){if(t)throw Error(c(479))}else t=ds(e,n,l,2),t!==null&&st(t,e,2)}function Gi(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Uf(e,t){Ol=Oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lf(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,qc(e,n)}}var Ta={readContext:Je,use:ji,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};Ta.useEffectEvent=De;var Gf={readContext:Je,use:ji,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Ef,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ui(4194308,4,Cf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var n=Fe();t=t===void 0?null:t;var l=e();if(ll){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Fe();if(n!==void 0){var a=n(t);if(ll){gn(!0);try{n(t)}finally{gn(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=hg.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=Ys(e);var t=e.queue,n=Hf.bind(null,ne,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zs,useDeferredValue:function(e,t){var n=Fe();return Js(n,e,t)},useTransition:function(){var e=Ys(!1);return e=zf.bind(null,ne,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ne,a=Fe();if(oe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),_e===null)throw Error(c(349));(re&127)!==0||uf(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ef(rf.bind(null,l,i,e),[e]),l.flags|=2048,wl(9,{destroy:void 0},sf.bind(null,l,i,n,t),null),n},useId:function(){var e=Fe(),t=_e.identifierPrefix;if(oe){var n=Bt,l=Gt;n=(l&~(1<<32-ot(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ki++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ig++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:yf,useActionState:yf,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,ne,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bs,useCacheRefresh:function(){return Fe().memoizedState=fg.bind(null,ne)},useEffectEvent:function(e){var t=Fe(),n={impl:e};return t.memoizedState=n,function(){if((me&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:Je,use:ji,useCallback:Mf,useContext:Je,useEffect:Xs,useImperativeHandle:Rf,useInsertionEffect:Af,useLayoutEffect:_f,useMemo:Nf,useReducer:Hi,useRef:Sf,useState:function(){return Hi(Pt)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=He();return Df(n,xe.memoizedState,e,t)},useTransition:function(){var e=Hi(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Sa(e),t]},useSyncExternalStore:af,useId:wf,useHostTransitionStatus:$s,useFormState:bf,useActionState:bf,useOptimistic:function(e,t){var n=He();return ff(n,xe,e,t)},useMemoCache:Bs,useCacheRefresh:jf};Ws.useEffectEvent=Tf;var Bf={readContext:Je,use:ji,useCallback:Mf,useContext:Je,useEffect:Xs,useImperativeHandle:Rf,useInsertionEffect:Af,useLayoutEffect:_f,useMemo:Nf,useReducer:Qs,useRef:Sf,useState:function(){return Qs(Pt)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=He();return xe===null?Js(n,e,t):Df(n,xe.memoizedState,e,t)},useTransition:function(){var e=Qs(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Sa(e),t]},useSyncExternalStore:af,useId:wf,useHostTransitionStatus:$s,useFormState:xf,useActionState:xf,useOptimistic:function(e,t){var n=He();return xe!==null?ff(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bs,useCacheRefresh:jf};Bf.useEffectEvent=Tf;function Fs(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ps={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=yt(),a=An(l);a.payload=t,n!=null&&(a.callback=n),t=_n(e,a,l),t!==null&&(st(t,e,l),ya(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=yt(),a=An(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=_n(e,a,l),t!==null&&(st(t,e,l),ya(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),l=An(n);l.tag=2,t!=null&&(l.callback=t),t=_n(e,l,n),t!==null&&(st(t,e,n),ya(t,e,n))}};function qf(e,t,n,l,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!ca(n,l)||!ca(a,i):!0}function Qf(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Ps.enqueueReplaceState(t,t.state,null)}function al(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=T({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Yf(e){yi(e)}function Vf(e){console.error(e)}function Xf(e){yi(e)}function Bi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zf(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function er(e,t,n){return n=An(n),n.tag=3,n.payload={element:null},n.callback=function(){Bi(e,t)},n}function Jf(e){return e=An(e),e.tag=3,e}function Kf(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Zf(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Zf(t,n,l),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function dg(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Cl(t,n,a,!0),n=dt.current,n!==null){switch(n.tag){case 31:case 13:return Rt===null?Fi():n.alternate===null&&ze===0&&(ze=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Ri?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),_r(e,l,a)),!1;case 22:return n.flags|=65536,l===Ri?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),_r(e,l,a)),!1}throw Error(c(435,n.tag))}return _r(e,l,a),Fi(),!1}if(oe)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==vs&&(e=Error(c(422),{cause:l}),ha(Tt(e,n)))):(l!==vs&&(t=Error(c(423),{cause:l}),ha(Tt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Tt(l,n),a=er(e.stateNode,l,a),Ds(e,a),ze!==4&&(ze=2)),!1;var i=Error(c(520),{cause:l});if(i=Tt(i,n),za===null?za=[i]:za.push(i),ze!==4&&(ze=2),t===null)return!0;l=Tt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=er(n.stateNode,l,e),Ds(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(zn===null||!zn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Jf(a),Kf(a,e,n,l),Ds(n,a),!1}n=n.return}while(n!==null);return!1}var tr=Error(c(461)),Ge=!1;function Ke(e,t,n,l){t.child=e===null?Wo(t,null,n,l):nl(t,e.child,n,l)}function $f(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return Fn(t),l=Hs(e,t,n,o,i,a),d=Us(),e!==null&&!Ge?(Ls(e,t,a),en(e,t,a)):(oe&&d&&ys(t),t.flags|=1,Ke(e,t,l,a),t.child)}function If(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!ms(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Wf(e,t,i,l,a)):(e=Si(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!cr(e,a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(o,l)&&e.ref===t.ref)return en(e,t,a)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Wf(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(ca(i,l)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=l=i,cr(e,a))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,en(e,t,a)}return nr(e,t,n,l,a)}function Ff(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Pf(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_i(t,i!==null?i.cachePool:null),i!==null?ef(t,i):Os(),tf(t);else return l=t.lanes=536870912,Pf(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(_i(t,i.cachePool),ef(t,i),Rn(),t.memoizedState=null):(e!==null&&_i(t,null),Os(),Rn());return Ke(e,t,a,n),t.child}function Aa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Pf(e,t,n,l,a){var i=Cs();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&_i(t,null),Os(),tf(t),e!==null&&Cl(e,t,l,!0),t.childLanes=a,null}function qi(e,t){return t=Yi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function eh(e,t,n){return nl(t,e.child,null,n),e=qi(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function mg(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=qi(t,l),t.lanes=536870912,Aa(null,e);if(ws(t),(e=Ce)?(e=hd(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Gt,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},n=Ho(e),n.return=t,t.child=n,Ze=t,Ce=null)):e=null,e===null)throw Sn(t);return t.lanes=536870912,null}return qi(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(ws(t),a)if(t.flags&256)t.flags&=-257,t=eh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ge||Cl(e,t,n,!1),a=(n&e.childLanes)!==0,Ge||a){if(l=_e,l!==null&&(o=Qc(l,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Kn(e,o),st(l,e,o),tr;Fi(),t=eh(e,t,n)}else e=i.treeContext,Ce=Mt(o.nextSibling),Ze=t,oe=!0,xn=null,Ct=!1,e!==null&&Go(t,e),t=qi(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function nr(e,t,n,l,a){return Fn(t),n=Hs(e,t,n,l,void 0,a),l=Us(),e!==null&&!Ge?(Ls(e,t,a),en(e,t,a)):(oe&&l&&ys(t),t.flags|=1,Ke(e,t,n,a),t.child)}function th(e,t,n,l,a,i){return Fn(t),t.updateQueue=null,n=lf(t,l,n,a),nf(e),l=Us(),e!==null&&!Ge?(Ls(e,t,i),en(e,t,i)):(oe&&l&&ys(t),t.flags|=1,Ke(e,t,n,i),t.child)}function nh(e,t,n,l,a){if(Fn(t),t.stateNode===null){var i=El,o=n.contextType;typeof o=="object"&&o!==null&&(i=Je(o)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ps,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ms(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Je(o):El,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Fs(t,n,o,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Ps.enqueueReplaceState(i,i.state,null),va(t,l,i,a),ba(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,v=al(n,d);i.props=v;var C=i.context,O=n.contextType;o=El,typeof O=="object"&&O!==null&&(o=Je(O));var j=n.getDerivedStateFromProps;O=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||C!==o)&&Qf(t,i,l,o),Tn=!1;var R=t.memoizedState;i.state=R,va(t,l,i,a),ba(),C=t.memoizedState,d||R!==C||Tn?(typeof j=="function"&&(Fs(t,n,j,l),C=t.memoizedState),(v=Tn||qf(t,n,v,l,R,C,o))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=o,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Ns(e,t),o=t.memoizedProps,O=al(n,o),i.props=O,j=t.pendingProps,R=i.context,C=n.contextType,v=El,typeof C=="object"&&C!==null&&(v=Je(C)),d=n.getDerivedStateFromProps,(C=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==j||R!==v)&&Qf(t,i,l,v),Tn=!1,R=t.memoizedState,i.state=R,va(t,l,i,a),ba();var N=t.memoizedState;o!==j||R!==N||Tn||e!==null&&e.dependencies!==null&&Ti(e.dependencies)?(typeof d=="function"&&(Fs(t,n,d,l),N=t.memoizedState),(O=Tn||qf(t,n,O,l,R,N,v)||e!==null&&e.dependencies!==null&&Ti(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,N,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,N,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),i.props=l,i.state=N,i.context=v,l=O):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Qi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=nl(t,e.child,null,a),t.child=nl(t,null,n,a)):Ke(e,t,n,a),t.memoizedState=i.state,e=t.child):e=en(e,t,a),e}function lh(e,t,n,l){return In(),t.flags|=256,Ke(e,t,n,l),t.child}var lr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ar(e){return{baseLanes:e,cachePool:Xo()}}function ir(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gt),e}function ah(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(a?Cn(t):Rn(),(e=Ce)?(e=hd(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Gt,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},n=Ho(e),n.return=t,t.child=n,Ze=t,Ce=null)):e=null,e===null)throw Sn(t);return qr(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,a?(Rn(),a=t.mode,d=Yi({mode:"hidden",children:d},a),l=$n(l,a,n,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=ar(n),l.childLanes=ir(e,o,n),t.memoizedState=lr,Aa(null,l)):(Cn(t),ur(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(i)t.flags&256?(Cn(t),t.flags&=-257,t=sr(e,t,n)):t.memoizedState!==null?(Rn(),t.child=e.child,t.flags|=128,t=null):(Rn(),d=l.fallback,a=t.mode,l=Yi({mode:"visible",children:l.children},a),d=$n(d,a,n,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,nl(t,e.child,null,n),l=t.child,l.memoizedState=ar(n),l.childLanes=ir(e,o,n),t.memoizedState=lr,t=Aa(null,l));else if(Cn(t),qr(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var C=o.dgst;o=C,l=Error(c(419)),l.stack="",l.digest=o,ha({value:l,source:null,stack:null}),t=sr(e,t,n)}else if(Ge||Cl(e,t,n,!1),o=(n&e.childLanes)!==0,Ge||o){if(o=_e,o!==null&&(l=Qc(o,n),l!==0&&l!==v.retryLane))throw v.retryLane=l,Kn(e,l),st(o,e,l),tr;Br(d)||Fi(),t=sr(e,t,n)}else Br(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ce=Mt(d.nextSibling),Ze=t,oe=!0,xn=null,Ct=!1,e!==null&&Go(t,e),t=ur(t,l.children),t.flags|=4096);return t}return a?(Rn(),d=l.fallback,a=t.mode,v=e.child,C=v.sibling,l=Kt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,C!==null?d=Kt(C,d):(d=$n(d,a,n,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,Aa(null,l),l=t.child,d=e.child.memoizedState,d===null?d=ar(n):(a=d.cachePool,a!==null?(v=Ue._currentValue,a=a.parent!==v?{parent:v,pool:v}:a):a=Xo(),d={baseLanes:d.baseLanes|n,cachePool:a}),l.memoizedState=d,l.childLanes=ir(e,o,n),t.memoizedState=lr,Aa(e.child,l)):(Cn(t),n=e.child,e=n.sibling,n=Kt(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function ur(e,t){return t=Yi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yi(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function sr(e,t,n){return nl(t,e.child,null,n),e=ur(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ih(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Es(e.return,t,n)}function rr(e,t,n,l,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=a,o.treeForkCount=i)}function uh(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var o=je.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,Q(je,o),Ke(e,t,l,n),l=oe?fa:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ih(e,n,t);else if(e.tag===19)ih(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&zi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),rr(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&zi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}rr(t,!0,n,null,i,l);break;case"together":rr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Cl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ti(e)))}function pg(e,t,n){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),En(t,Ue,e.memoizedState.cache),In();break;case 27:case 5:Il(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:En(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ws(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Cn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ah(e,t,n):(Cn(t),e=en(e,t,n),e!==null?e.sibling:null);Cn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Cl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return uh(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Q(je,je.current),l)break;return null;case 22:return t.lanes=0,Ff(e,t,n,t.pendingProps);case 24:En(t,Ue,e.memoizedState.cache)}return en(e,t,n)}function sh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!cr(e,n)&&(t.flags&128)===0)return Ge=!1,pg(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,oe&&(t.flags&1048576)!==0&&Lo(t,fa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=el(t.elementType),t.type=e,typeof e=="function")ms(e)?(l=al(e,l),t.tag=1,t=nh(null,t,e,l,n)):(t.tag=0,t=nr(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===F){t.tag=11,t=$f(null,t,e,l,n);break e}else if(a===I){t.tag=14,t=If(null,t,e,l,n);break e}}throw t=Vt(e)||e,Error(c(306,t,""))}}return t;case 0:return nr(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=al(l,t.pendingProps),nh(e,t,l,a,n);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Ns(e,t),va(t,l,null,n);var o=t.memoizedState;if(l=o.cache,En(t,Ue,l),l!==i.cache&&Ts(t,[Ue],n,!0),ba(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=lh(e,t,l,n);break e}else if(l!==a){a=Tt(Error(c(424)),t),ha(a),t=lh(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=Mt(e.firstChild),Ze=t,oe=!0,xn=null,Ct=!0,n=Wo(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(In(),l===a){t=en(e,t,n);break e}Ke(e,t,l,n)}t=t.child}return t;case 26:return Qi(e,t),e===null?(n=bd(t.type,null,t.pendingProps,null))?t.memoizedState=n:oe||(n=t.type,e=t.pendingProps,l=iu(ae.current).createElement(n),l[Xe]=t,l[tt]=e,$e(l,n,e),Qe(l),t.stateNode=l):t.memoizedState=bd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Il(t),e===null&&oe&&(l=t.stateNode=pd(t.type,t.pendingProps,ae.current),Ze=t,Ct=!0,a=Ce,jn(t.type)?(Qr=a,Ce=Mt(l.firstChild)):Ce=a),Ke(e,t,t.pendingProps.children,n),Qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((a=l=Ce)&&(l=Xg(l,t.type,t.pendingProps,Ct),l!==null?(t.stateNode=l,Ze=t,Ce=Mt(l.firstChild),Ct=!1,a=!0):a=!1),a||Sn(t)),Il(t),a=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ur(a,i)?l=null:o!==null&&Ur(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=Hs(e,t,ug,null,null,n),Ga._currentValue=a),Qi(e,t),Ke(e,t,l,n),t.child;case 6:return e===null&&oe&&((e=n=Ce)&&(n=Zg(n,t.pendingProps,Ct),n!==null?(t.stateNode=n,Ze=t,Ce=null,e=!0):e=!1),e||Sn(t)),null;case 13:return ah(e,t,n);case 4:return We(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=nl(t,null,l,n):Ke(e,t,l,n),t.child;case 11:return $f(e,t,t.type,t.pendingProps,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,En(t,t.type,l.value),Ke(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Fn(t),a=Je(a),l=l(a),t.flags|=1,Ke(e,t,l,n),t.child;case 14:return If(e,t,t.type,t.pendingProps,n);case 15:return Wf(e,t,t.type,t.pendingProps,n);case 19:return uh(e,t,n);case 31:return mg(e,t,n);case 22:return Ff(e,t,n,t.pendingProps);case 24:return Fn(t),l=Je(Ue),e===null?(a=Cs(),a===null&&(a=_e,i=As(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},Ms(t),En(t,Ue,a)):((e.lanes&n)!==0&&(Ns(e,t),va(t,null,null,n),ba()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),En(t,Ue,l)):(l=i.cache,En(t,Ue,l),l!==a.cache&&Ts(t,[Ue],n,!0))),Ke(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function tn(e){e.flags|=4}function or(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(wh())e.flags|=8192;else throw tl=Ri,Rs}else e.flags&=-16777217}function rh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Td(t))if(wh())e.flags|=8192;else throw tl=Ri,Rs}function Vi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gc():536870912,e.lanes|=t,Ll|=t)}function _a(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function gg(e,t,n){var l=t.pendingProps;switch(bs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Wt(Ue),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_l(t)?tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xs())),Re(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(tn(t),i!==null?(Re(t),rh(t,i)):(Re(t),or(t,a,null,l,n))):i?i!==e.memoizedState?(tn(t),Re(t),rh(t,i)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&tn(t),Re(t),or(t,a,e,l,n)),null;case 27:if(ti(t),n=ae.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&tn(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Re(t),null}e=X.current,_l(t)?Bo(t):(e=pd(a,l,n),t.stateNode=e,tn(t))}return Re(t),null;case 5:if(ti(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&tn(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Re(t),null}if(i=X.current,_l(t))Bo(t);else{var o=iu(ae.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(a,{is:l.is}):o.createElement(a)}}i[Xe]=t,i[tt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch($e(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&tn(t)}}return Re(t),or(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&tn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,_l(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Ze,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ad(e.nodeValue,n)),e||Sn(t,!0)}else e=iu(e).createTextNode(l),e[Xe]=t,t.stateNode=e}return Re(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=_l(t),n!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Xe]=t}else In(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else n=xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Re(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=_l(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Xe]=t}else In(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),a=!1}else a=xs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vi(t,t.updateQueue),Re(t),null);case 4:return we(),e===null&&Or(t.stateNode.containerInfo),Re(t),null;case 10:return Wt(t.type),Re(t),null;case 19:if(U(je),l=t.memoizedState,l===null)return Re(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)_a(l,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=zi(e),i!==null){for(t.flags|=128,_a(l,!1),e=i.updateQueue,t.updateQueue=e,Vi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)jo(n,e),n=n.sibling;return Q(je,je.current&1|2),oe&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&rt()>$i&&(t.flags|=128,a=!0,_a(l,!1),t.lanes=4194304)}else{if(!a)if(e=zi(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Vi(t,e),_a(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!oe)return Re(t),null}else 2*rt()-l.renderingStartTime>$i&&n!==536870912&&(t.flags|=128,a=!0,_a(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=rt(),e.sibling=null,n=je.current,Q(je,a?n&1|2:n&1),oe&&$t(t,l.treeForkCount),e):(Re(t),null);case 22:case 23:return mt(t),ks(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),n=t.updateQueue,n!==null&&Vi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&U(Pn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Ue),Re(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function yg(e,t){switch(bs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ue),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ti(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(c(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(je),null;case 4:return we(),null;case 10:return Wt(t.type),null;case 22:case 23:return mt(t),ks(),e!==null&&U(Pn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ue),null;case 25:return null;default:return null}}function ch(e,t){switch(bs(t),t.tag){case 3:Wt(Ue),we();break;case 26:case 27:case 5:ti(t);break;case 4:we();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:U(je);break;case 10:Wt(t.type);break;case 22:case 23:mt(t),ks(),e!==null&&U(Pn);break;case 24:Wt(Ue)}}function Ca(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,o=n.inst;l=i(),o.destroy=l}n=n.next}while(n!==a)}}catch(d){ye(t,t.return,d)}}function Mn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,a=t;var v=n,C=d;try{C()}catch(O){ye(a,v,O)}}}l=l.next}while(l!==i)}}catch(O){ye(t,t.return,O)}}function oh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Po(t,n)}catch(l){ye(e,e.return,l)}}}function fh(e,t,n){n.props=al(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ye(e,t,l)}}function Ra(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){ye(e,t,a)}}function qt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){ye(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ye(e,t,a)}else n.current=null}function hh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){ye(e,e.return,a)}}function fr(e,t,n){try{var l=e.stateNode;Gg(l,e.type,n,t),l[tt]=t}catch(a){ye(e,e.return,a)}}function dh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jn(e.type)||e.tag===4}function hr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(dr(e,t,n),e=e.sibling;e!==null;)dr(e,t,n),e=e.sibling}function Xi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}function mh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$e(t,l,n),t[Xe]=e,t[tt]=n}catch(i){ye(e,e.return,i)}}var nn=!1,Be=!1,mr=!1,ph=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function bg(e,t){if(e=e.containerInfo,jr=hu,e=Co(e),ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,d=-1,v=-1,C=0,O=0,j=e,R=null;t:for(;;){for(var N;j!==n||a!==0&&j.nodeType!==3||(d=o+a),j!==i||l!==0&&j.nodeType!==3||(v=o+l),j.nodeType===3&&(o+=j.nodeValue.length),(N=j.firstChild)!==null;)R=j,j=N;for(;;){if(j===e)break t;if(R===n&&++C===a&&(d=o),R===i&&++O===l&&(v=o),(N=j.nextSibling)!==null)break;j=R,R=j.parentNode}j=N}n=d===-1||v===-1?null:{start:d,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hr={focusedElem:e,selectionRange:n},hu=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var Y=al(n.type,a);e=l.getSnapshotBeforeUpdate(Y,i),l.__reactInternalSnapshotBeforeUpdate=e}catch($){ye(n,n.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Gr(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function gh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:an(e,n),l&4&&Ca(5,n);break;case 1:if(an(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ye(n,n.return,o)}else{var a=al(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ye(n,n.return,o)}}l&64&&oh(n),l&512&&Ra(n,n.return);break;case 3:if(an(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Po(e,t)}catch(o){ye(n,n.return,o)}}break;case 27:t===null&&l&4&&mh(n);case 26:case 5:an(e,n),t===null&&l&4&&hh(n),l&512&&Ra(n,n.return);break;case 12:an(e,n);break;case 31:an(e,n),l&4&&vh(e,n);break;case 13:an(e,n),l&4&&xh(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Rg.bind(null,n),Jg(e,n))));break;case 22:if(l=n.memoizedState!==null||nn,!l){t=t!==null&&t.memoizedState!==null||Be,a=nn;var i=Be;nn=l,(Be=t)&&!i?un(e,n,(n.subtreeFlags&8772)!==0):an(e,n),nn=a,Be=i}break;case 30:break;default:an(e,n)}}function yh(e){var t=e.alternate;t!==null&&(e.alternate=null,yh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,lt=!1;function ln(e,t,n){for(n=n.child;n!==null;)bh(e,t,n),n=n.sibling}function bh(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 26:Be||qt(n,t),ln(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Be||qt(n,t);var l=Me,a=lt;jn(n.type)&&(Me=n.stateNode,lt=!1),ln(e,t,n),Ha(n.stateNode),Me=l,lt=a;break;case 5:Be||qt(n,t);case 6:if(l=Me,a=lt,Me=null,ln(e,t,n),Me=l,lt=a,Me!==null)if(lt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(i){ye(n,t,i)}else try{Me.removeChild(n.stateNode)}catch(i){ye(n,t,i)}break;case 18:Me!==null&&(lt?(e=Me,od(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Zl(e)):od(Me,n.stateNode));break;case 4:l=Me,a=lt,Me=n.stateNode.containerInfo,lt=!0,ln(e,t,n),Me=l,lt=a;break;case 0:case 11:case 14:case 15:Mn(2,n,t),Be||Mn(4,n,t),ln(e,t,n);break;case 1:Be||(qt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&fh(n,t,l)),ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:Be=(l=Be)||n.memoizedState!==null,ln(e,t,n),Be=l;break;default:ln(e,t,n)}}function vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zl(e)}catch(n){ye(t,t.return,n)}}}function xh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zl(e)}catch(n){ye(t,t.return,n)}}function vg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ph),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ph),t;default:throw Error(c(435,e.tag))}}function Zi(e,t){var n=vg(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=Mg.bind(null,e,l);l.then(a,a)}})}function at(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(jn(d.type)){Me=d.stateNode,lt=!1;break e}break;case 5:Me=d.stateNode,lt=!1;break e;case 3:case 4:Me=d.stateNode.containerInfo,lt=!0;break e}d=d.return}if(Me===null)throw Error(c(160));bh(i,o,a),Me=null,lt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sh(t,e),t=t.sibling}var kt=null;function Sh(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),it(e),l&4&&(Mn(3,e,e.return),Ca(3,e),Mn(5,e,e.return));break;case 1:at(t,e),it(e),l&512&&(Be||n===null||qt(n,n.return)),l&64&&nn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=kt;if(at(t,e),it(e),l&512&&(Be||n===null||qt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[ea]||i[Xe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),$e(i,l,n),i[Xe]=e,Qe(i),l=i;break e;case"link":var o=Sd("link","href",a).get(l+(n.href||""));if(o){for(var d=0;d<o.length;d++)if(i=o[d],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(d,1);break t}}i=a.createElement(l),$e(i,l,n),a.head.appendChild(i);break;case"meta":if(o=Sd("meta","content",a).get(l+(n.content||""))){for(d=0;d<o.length;d++)if(i=o[d],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(d,1);break t}}i=a.createElement(l),$e(i,l,n),a.head.appendChild(i);break;default:throw Error(c(468,l))}i[Xe]=e,Qe(i),l=i}e.stateNode=l}else Ed(a,e.type,e.stateNode);else e.stateNode=xd(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?Ed(a,e.type,e.stateNode):xd(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&fr(e,e.memoizedProps,n.memoizedProps)}break;case 27:at(t,e),it(e),l&512&&(Be||n===null||qt(n,n.return)),n!==null&&l&4&&fr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(at(t,e),it(e),l&512&&(Be||n===null||qt(n,n.return)),e.flags&32){a=e.stateNode;try{pl(a,"")}catch(Y){ye(e,e.return,Y)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,fr(e,a,n!==null?n.memoizedProps:a)),l&1024&&(mr=!0);break;case 6:if(at(t,e),it(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(Y){ye(e,e.return,Y)}}break;case 3:if(ru=null,a=kt,kt=uu(t.containerInfo),at(t,e),kt=a,it(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Zl(t.containerInfo)}catch(Y){ye(e,e.return,Y)}mr&&(mr=!1,Eh(e));break;case 4:l=kt,kt=uu(e.stateNode.containerInfo),at(t,e),it(e),kt=l;break;case 12:at(t,e),it(e);break;case 31:at(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 13:at(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ki=rt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 22:a=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,C=nn,O=Be;if(nn=C||a,Be=O||v,at(t,e),Be=O,nn=C,it(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||v||nn||Be||il(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(i=v.stateNode,a)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=v.stateNode;var j=v.memoizedProps.style,R=j!=null&&j.hasOwnProperty("display")?j.display:null;d.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(Y){ye(v,v.return,Y)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(Y){ye(v,v.return,Y)}}}else if(t.tag===18){if(n===null){v=t;try{var N=v.stateNode;a?fd(N,!0):fd(v.stateNode,!1)}catch(Y){ye(v,v.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Zi(e,n))));break;case 19:at(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 30:break;case 21:break;default:at(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(dh(l)){n=l;break}l=l.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var a=n.stateNode,i=hr(e);Xi(e,i,a);break;case 5:var o=n.stateNode;n.flags&32&&(pl(o,""),n.flags&=-33);var d=hr(e);Xi(e,d,o);break;case 3:case 4:var v=n.stateNode.containerInfo,C=hr(e);dr(e,C,v);break;default:throw Error(c(161))}}catch(O){ye(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Eh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function an(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gh(e,t.alternate,t),t=t.sibling}function il(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Mn(4,t,t.return),il(t);break;case 1:qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fh(t,t.return,n),il(t);break;case 27:Ha(t.stateNode);case 26:case 5:qt(t,t.return),il(t);break;case 22:t.memoizedState===null&&il(t);break;case 30:il(t);break;default:il(t)}e=e.sibling}}function un(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:un(a,i,n),Ca(4,i);break;case 1:if(un(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(C){ye(l,l.return,C)}if(l=i,a=l.updateQueue,a!==null){var d=l.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)Fo(v[a],d)}catch(C){ye(l,l.return,C)}}n&&o&64&&oh(i),Ra(i,i.return);break;case 27:mh(i);case 26:case 5:un(a,i,n),n&&l===null&&o&4&&hh(i),Ra(i,i.return);break;case 12:un(a,i,n);break;case 31:un(a,i,n),n&&o&4&&vh(a,i);break;case 13:un(a,i,n),n&&o&4&&xh(a,i);break;case 22:i.memoizedState===null&&un(a,i,n),Ra(i,i.return);break;case 30:break;default:un(a,i,n)}t=t.sibling}}function pr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function gr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function wt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Th(e,t,n,l),t=t.sibling}function Th(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:wt(e,t,n,l),a&2048&&Ca(9,t);break;case 1:wt(e,t,n,l);break;case 3:wt(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(a&2048){wt(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,d=i.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ye(t,t.return,v)}}else wt(e,t,n,l);break;case 31:wt(e,t,n,l);break;case 13:wt(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?wt(e,t,n,l):Ma(e,t):i._visibility&2?wt(e,t,n,l):(i._visibility|=2,jl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&pr(o,t);break;case 24:wt(e,t,n,l),a&2048&&gr(t.alternate,t);break;default:wt(e,t,n,l)}}function jl(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,d=n,v=l,C=o.flags;switch(o.tag){case 0:case 11:case 15:jl(i,o,d,v,a),Ca(8,o);break;case 23:break;case 22:var O=o.stateNode;o.memoizedState!==null?O._visibility&2?jl(i,o,d,v,a):Ma(i,o):(O._visibility|=2,jl(i,o,d,v,a)),a&&C&2048&&pr(o.alternate,o);break;case 24:jl(i,o,d,v,a),a&&C&2048&&gr(o.alternate,o);break;default:jl(i,o,d,v,a)}t=t.sibling}}function Ma(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:Ma(n,l),a&2048&&pr(l.alternate,l);break;case 24:Ma(n,l),a&2048&&gr(l.alternate,l);break;default:Ma(n,l)}t=t.sibling}}var Na=8192;function Hl(e,t,n){if(e.subtreeFlags&Na)for(e=e.child;e!==null;)Ah(e,t,n),e=e.sibling}function Ah(e,t,n){switch(e.tag){case 26:Hl(e,t,n),e.flags&Na&&e.memoizedState!==null&&i0(n,kt,e.memoizedState,e.memoizedProps);break;case 5:Hl(e,t,n);break;case 3:case 4:var l=kt;kt=uu(e.stateNode.containerInfo),Hl(e,t,n),kt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Na,Na=16777216,Hl(e,t,n),Na=l):Hl(e,t,n));break;default:Hl(e,t,n)}}function _h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Da(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Ye=l,Rh(l,e)}_h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ch(e),e=e.sibling}function Ch(e){switch(e.tag){case 0:case 11:case 15:Da(e),e.flags&2048&&Mn(9,e,e.return);break;case 3:Da(e);break;case 12:Da(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Da(e);break;default:Da(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Ye=l,Rh(l,e)}_h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Mn(8,t,t.return),Ji(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function Rh(e,t){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:Mn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:da(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Ye=l;else e:for(n=e;Ye!==null;){l=Ye;var a=l.sibling,i=l.return;if(yh(l),l===n){Ye=null;break e}if(a!==null){a.return=i,Ye=a;break e}Ye=i}}}var xg={getCacheForType:function(e){var t=Je(Ue),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Je(Ue).controller.signal}},Sg=typeof WeakMap=="function"?WeakMap:Map,me=0,_e=null,ie=null,re=0,ge=0,pt=null,Nn=!1,Ul=!1,yr=!1,sn=0,ze=0,Dn=0,ul=0,br=0,gt=0,Ll=0,za=null,ut=null,vr=!1,Ki=0,Mh=0,$i=1/0,Ii=null,zn=null,qe=0,On=null,Gl=null,rn=0,xr=0,Sr=null,Nh=null,Oa=0,Er=null;function yt(){return(me&2)!==0&&re!==0?re&-re:k.T!==null?Mr():Yc()}function Dh(){if(gt===0)if((re&536870912)===0||oe){var e=ai;ai<<=1,(ai&3932160)===0&&(ai=262144),gt=e}else gt=536870912;return e=dt.current,e!==null&&(e.flags|=32),gt}function st(e,t,n){(e===_e&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Bl(e,0),kn(e,re,gt,!1)),Pl(e,n),((me&2)===0||e!==_e)&&(e===_e&&((me&2)===0&&(ul|=n),ze===4&&kn(e,re,gt,!1)),Qt(e))}function zh(e,t,n){if((me&6)!==0)throw Error(c(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Fl(e,t),a=l?Ag(e,t):Ar(e,t,!0),i=l;do{if(a===0){Ul&&!l&&kn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Eg(n)){a=Ar(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;a=za;var v=d.current.memoizedState.isDehydrated;if(v&&(Bl(d,o).flags|=256),o=Ar(d,o,!1),o!==2){if(yr&&!v){d.errorRecoveryDisabledLanes|=i,ul|=i,a=4;break e}i=ut,ut=a,i!==null&&(ut===null?ut=i:ut.push.apply(ut,i))}a=o}if(i=!1,a!==2)continue}}if(a===1){Bl(e,0),kn(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:kn(l,t,gt,!Nn);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(a=Ki+300-rt(),10<a)){if(kn(l,t,gt,!Nn),ui(l,0,!0)!==0)break e;rn=t,l.timeoutHandle=rd(Oh.bind(null,l,n,ut,Ii,vr,t,gt,ul,Ll,Nn,i,"Throttled",-0,0),a);break e}Oh(l,n,ut,Ii,vr,t,gt,ul,Ll,Nn,i,null,-0,0)}}break}while(!0);Qt(e)}function Oh(e,t,n,l,a,i,o,d,v,C,O,j,R,N){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Ah(t,i,j);var Y=(i&62914560)===i?Ki-rt():(i&4194048)===i?Mh-rt():0;if(Y=u0(j,Y),Y!==null){rn=i,e.cancelPendingCommit=Y(Bh.bind(null,e,t,i,n,l,a,o,d,v,O,j,null,R,N)),kn(e,i,o,!C);return}}Bh(e,t,i,n,l,a,o,d,v)}function Eg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!ft(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,l){t&=~br,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-ot(a),o=1<<i;l[i]=-1,a&=~o}n!==0&&Bc(e,n,t)}function Wi(){return(me&6)===0?(ka(0),!1):!0}function Tr(){if(ie!==null){if(ge===0)var e=ie.return;else e=ie,It=Wn=null,Gs(e),Dl=null,pa=0,e=ie;for(;e!==null;)ch(e.alternate,e),e=e.return;ie=null}}function Bl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Qg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),rn=0,Tr(),_e=e,ie=n=Kt(e.current,null),re=t,ge=0,pt=null,Nn=!1,Ul=Fl(e,t),yr=!1,Ll=gt=br=ul=Dn=ze=0,ut=za=null,vr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-ot(l),i=1<<a;t|=e[a],l&=~i}return sn=t,bi(),n}function kh(e,t){ne=null,k.H=Ta,t===Nl||t===Ci?(t=Ko(),ge=3):t===Rs?(t=Ko(),ge=4):ge=t===tr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ie===null&&(ze=1,Bi(e,Tt(t,e.current)))}function wh(){var e=dt.current;return e===null?!0:(re&4194048)===re?Rt===null:(re&62914560)===re||(re&536870912)!==0?e===Rt:!1}function jh(){var e=k.H;return k.H=Ta,e===null?Ta:e}function Hh(){var e=k.A;return k.A=xg,e}function Fi(){ze=4,Nn||(re&4194048)!==re&&dt.current!==null||(Ul=!0),(Dn&134217727)===0&&(ul&134217727)===0||_e===null||kn(_e,re,gt,!1)}function Ar(e,t,n){var l=me;me|=2;var a=jh(),i=Hh();(_e!==e||re!==t)&&(Ii=null,Bl(e,t)),t=!1;var o=ze;e:do try{if(ge!==0&&ie!==null){var d=ie,v=pt;switch(ge){case 8:Tr(),o=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var C=ge;if(ge=0,pt=null,ql(e,d,v,C),n&&Ul){o=0;break e}break;default:C=ge,ge=0,pt=null,ql(e,d,v,C)}}Tg(),o=ze;break}catch(O){kh(e,O)}while(!0);return t&&e.shellSuspendCounter++,It=Wn=null,me=l,k.H=a,k.A=i,ie===null&&(_e=null,re=0,bi()),o}function Tg(){for(;ie!==null;)Uh(ie)}function Ag(e,t){var n=me;me|=2;var l=jh(),a=Hh();_e!==e||re!==t?(Ii=null,$i=rt()+500,Bl(e,t)):Ul=Fl(e,t);e:do try{if(ge!==0&&ie!==null){t=ie;var i=pt;t:switch(ge){case 1:ge=0,pt=null,ql(e,t,i,1);break;case 2:case 9:if(Zo(i)){ge=0,pt=null,Lh(t);break}t=function(){ge!==2&&ge!==9||_e!==e||(ge=7),Qt(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Zo(i)?(ge=0,pt=null,Lh(t)):(ge=0,pt=null,ql(e,t,i,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var d=ie;if(o?Td(o):d.stateNode.complete){ge=0,pt=null;var v=d.sibling;if(v!==null)ie=v;else{var C=d.return;C!==null?(ie=C,Pi(C)):ie=null}break t}}ge=0,pt=null,ql(e,t,i,5);break;case 6:ge=0,pt=null,ql(e,t,i,6);break;case 8:Tr(),ze=6;break e;default:throw Error(c(462))}}_g();break}catch(O){kh(e,O)}while(!0);return It=Wn=null,k.H=l,k.A=a,me=n,ie!==null?0:(_e=null,re=0,bi(),ze)}function _g(){for(;ie!==null&&!Km();)Uh(ie)}function Uh(e){var t=sh(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?Pi(e):ie=t}function Lh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=th(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=th(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Gs(t);default:ch(n,t),t=ie=jo(t,sn),t=sh(n,t,sn)}e.memoizedProps=e.pendingProps,t===null?Pi(e):ie=t}function ql(e,t,n,l){It=Wn=null,Gs(t),Dl=null,pa=0;var a=t.return;try{if(dg(e,a,t,n,re)){ze=1,Bi(e,Tt(n,e.current)),ie=null;return}}catch(i){if(a!==null)throw ie=a,i;ze=1,Bi(e,Tt(n,e.current)),ie=null;return}t.flags&32768?(oe||l===1?e=!0:Ul||(re&536870912)!==0?e=!1:(Nn=e=!0,(l===2||l===9||l===3||l===6)&&(l=dt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Gh(t,e)):Pi(t)}function Pi(e){var t=e;do{if((t.flags&32768)!==0){Gh(t,Nn);return}e=t.return;var n=gg(t.alternate,t,sn);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ze===0&&(ze=5)}function Gh(e,t){do{var n=yg(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);ze=6,ie=null}function Bh(e,t,n,l,a,i,o,d,v){e.cancelPendingCommit=null;do eu();while(qe!==0);if((me&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=hs,ap(e,n,i,o,d,v),e===_e&&(ie=_e=null,re=0),Gl=t,On=e,rn=n,xr=i,Sr=a,Nh=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ng(ni,function(){return Xh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=k.T,k.T=null,a=q.p,q.p=2,o=me,me|=4;try{bg(e,t,n)}finally{me=o,q.p=a,k.T=l}}qe=1,qh(),Qh(),Yh()}}function qh(){if(qe===1){qe=0;var e=On,t=Gl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var l=q.p;q.p=2;var a=me;me|=4;try{Sh(t,e);var i=Hr,o=Co(e.containerInfo),d=i.focusedElem,v=i.selectionRange;if(o!==d&&d&&d.ownerDocument&&_o(d.ownerDocument.documentElement,d)){if(v!==null&&ss(d)){var C=v.start,O=v.end;if(O===void 0&&(O=C),"selectionStart"in d)d.selectionStart=C,d.selectionEnd=Math.min(O,d.value.length);else{var j=d.ownerDocument||document,R=j&&j.defaultView||window;if(R.getSelection){var N=R.getSelection(),Y=d.textContent.length,$=Math.min(v.start,Y),Ee=v.end===void 0?$:Math.min(v.end,Y);!N.extend&&$>Ee&&(o=Ee,Ee=$,$=o);var A=Ao(d,$),x=Ao(d,Ee);if(A&&x&&(N.rangeCount!==1||N.anchorNode!==A.node||N.anchorOffset!==A.offset||N.focusNode!==x.node||N.focusOffset!==x.offset)){var _=j.createRange();_.setStart(A.node,A.offset),N.removeAllRanges(),$>Ee?(N.addRange(_),N.extend(x.node,x.offset)):(_.setEnd(x.node,x.offset),N.addRange(_))}}}}for(j=[],N=d;N=N.parentNode;)N.nodeType===1&&j.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<j.length;d++){var w=j[d];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}hu=!!jr,Hr=jr=null}finally{me=a,q.p=l,k.T=n}}e.current=t,qe=2}}function Qh(){if(qe===2){qe=0;var e=On,t=Gl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var l=q.p;q.p=2;var a=me;me|=4;try{gh(e,t.alternate,t)}finally{me=a,q.p=l,k.T=n}}qe=3}}function Yh(){if(qe===4||qe===3){qe=0,$m();var e=On,t=Gl,n=rn,l=Nh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Gl=On=null,Vh(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(zn=null),Qu(n),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=k.T,a=q.p,q.p=2,k.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var d=l[o];i(d.value,{componentStack:d.stack})}}finally{k.T=t,q.p=a}}(rn&3)!==0&&eu(),Qt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Er?Oa++:(Oa=0,Er=e):Oa=0,ka(0)}}function Vh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function eu(){return qh(),Qh(),Yh(),Xh()}function Xh(){if(qe!==5)return!1;var e=On,t=xr;xr=0;var n=Qu(rn),l=k.T,a=q.p;try{q.p=32>n?32:n,k.T=null,n=Sr,Sr=null;var i=On,o=rn;if(qe=0,Gl=On=null,rn=0,(me&6)!==0)throw Error(c(331));var d=me;if(me|=4,Ch(i.current),Th(i,i.current,o,n),me=d,ka(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Wl,i)}catch{}return!0}finally{q.p=a,k.T=l,Vh(e,t)}}function Zh(e,t,n){t=Tt(n,t),t=er(e.stateNode,t,2),e=_n(e,t,2),e!==null&&(Pl(e,2),Qt(e))}function ye(e,t,n){if(e.tag===3)Zh(e,e,n);else for(;t!==null;){if(t.tag===3){Zh(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(zn===null||!zn.has(l))){e=Tt(n,e),n=Jf(2),l=_n(t,n,2),l!==null&&(Kf(n,l,t,e),Pl(l,2),Qt(l));break}}t=t.return}}function _r(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Sg;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(yr=!0,a.add(n),e=Cg.bind(null,e,t,n),t.then(e,e))}function Cg(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(re&n)===n&&(ze===4||ze===3&&(re&62914560)===re&&300>rt()-Ki?(me&2)===0&&Bl(e,0):br|=n,Ll===re&&(Ll=0)),Qt(e)}function Jh(e,t){t===0&&(t=Gc()),e=Kn(e,t),e!==null&&(Pl(e,t),Qt(e))}function Rg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jh(e,n)}function Mg(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Jh(e,n)}function Ng(e,t){return Lu(e,t)}var tu=null,Ql=null,Cr=!1,nu=!1,Rr=!1,wn=0;function Qt(e){e!==Ql&&e.next===null&&(Ql===null?tu=Ql=e:Ql=Ql.next=e),nu=!0,Cr||(Cr=!0,zg())}function ka(e,t){if(!Rr&&nu){Rr=!0;do for(var n=!1,l=tu;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var o=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=a&~(o&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Wh(l,i))}else i=re,i=ui(l,l===_e?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Fl(l,i)||(n=!0,Wh(l,i));l=l.next}while(n);Rr=!1}}function Dg(){Kh()}function Kh(){nu=Cr=!1;var e=0;wn!==0&&qg()&&(e=wn);for(var t=rt(),n=null,l=tu;l!==null;){var a=l.next,i=$h(l,t);i===0?(l.next=null,n===null?tu=a:n.next=a,a===null&&(Ql=n)):(n=l,(e!==0||(i&3)!==0)&&(nu=!0)),l=a}qe!==0&&qe!==5||ka(e),wn!==0&&(wn=0)}function $h(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ot(i),d=1<<o,v=a[o];v===-1?((d&n)===0||(d&l)!==0)&&(a[o]=lp(d,t)):v<=t&&(e.expiredLanes|=d),i&=~d}if(t=_e,n=re,n=ui(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Gu(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Gu(l),Qu(n)){case 2:case 8:n=Uc;break;case 32:n=ni;break;case 268435456:n=Lc;break;default:n=ni}return l=Ih.bind(null,e),n=Lu(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Gu(l),e.callbackPriority=2,e.callbackNode=null,2}function Ih(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(eu()&&e.callbackNode!==n)return null;var l=re;return l=ui(e,e===_e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(zh(e,l,t),$h(e,rt()),e.callbackNode!=null&&e.callbackNode===n?Ih.bind(null,e):null)}function Wh(e,t){if(eu())return null;zh(e,t,!0)}function zg(){Yg(function(){(me&6)!==0?Lu(Hc,Dg):Kh()})}function Mr(){if(wn===0){var e=Rl;e===0&&(e=li,li<<=1,(li&261888)===0&&(li=256)),wn=e}return wn}function Fh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function Ph(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Og(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Fh((a[tt]||null).action),o=l.submitter;o&&(t=(t=o[tt]||null)?Fh(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var d=new mi("action","action",null,l,a);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wn!==0){var v=o?Ph(a,o):new FormData(a);Ks(n,{pending:!0,data:v,method:a.method,action:i},null,v)}}else typeof i=="function"&&(d.preventDefault(),v=o?Ph(a,o):new FormData(a),Ks(n,{pending:!0,data:v,method:a.method,action:i},i,v))},currentTarget:a}]})}}for(var Nr=0;Nr<fs.length;Nr++){var Dr=fs[Nr],kg=Dr.toLowerCase(),wg=Dr[0].toUpperCase()+Dr.slice(1);Ot(kg,"on"+wg)}Ot(No,"onAnimationEnd"),Ot(Do,"onAnimationIteration"),Ot(zo,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Ip,"onTransitionRun"),Ot(Wp,"onTransitionStart"),Ot(Fp,"onTransitionCancel"),Ot(Oo,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wa));function ed(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var d=l[o],v=d.instance,C=d.currentTarget;if(d=d.listener,v!==i&&a.isPropagationStopped())break e;i=d,a.currentTarget=C;try{i(a)}catch(O){yi(O)}a.currentTarget=null,i=v}else for(o=0;o<l.length;o++){if(d=l[o],v=d.instance,C=d.currentTarget,d=d.listener,v!==i&&a.isPropagationStopped())break e;i=d,a.currentTarget=C;try{i(a)}catch(O){yi(O)}a.currentTarget=null,i=v}}}}function ue(e,t){var n=t[Yu];n===void 0&&(n=t[Yu]=new Set);var l=e+"__bubble";n.has(l)||(td(t,e,2,!1),n.add(l))}function zr(e,t,n){var l=0;t&&(l|=4),td(n,e,l,t)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[lu]){e[lu]=!0,Zc.forEach(function(n){n!=="selectionchange"&&(jg.has(n)||zr(n,!1,e),zr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lu]||(t[lu]=!0,zr("selectionchange",!1,t))}}function td(e,t,n,l){switch(Dd(t)){case 2:var a=c0;break;case 8:a=o0;break;default:a=Jr}n=a.bind(null,t,n,e),a=void 0,!Fu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function kr(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===a)break;if(o===4)for(o=l.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;d!==null;){if(o=ol(d),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){l=i=o;continue e}d=d.parentNode}}l=l.return}ao(function(){var C=i,O=Iu(n),j=[];e:{var R=ko.get(e);if(R!==void 0){var N=mi,Y=e;switch(e){case"keypress":if(hi(n)===0)break e;case"keydown":case"keyup":N=Mp;break;case"focusin":Y="focus",N=ns;break;case"focusout":Y="blur",N=ns;break;case"beforeblur":case"afterblur":N=ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=zp;break;case No:case Do:case zo:N=vp;break;case Oo:N=kp;break;case"scroll":case"scrollend":N=mp;break;case"wheel":N=jp;break;case"copy":case"cut":case"paste":N=Sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=co;break;case"toggle":case"beforetoggle":N=Up}var $=(t&4)!==0,Ee=!$&&(e==="scroll"||e==="scrollend"),A=$?R!==null?R+"Capture":null:R;$=[];for(var x=C,_;x!==null;){var w=x;if(_=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||_===null||A===null||(w=na(x,A),w!=null&&$.push(ja(x,w,_))),Ee)break;x=x.return}0<$.length&&(R=new N(R,Y,null,n,O),j.push({event:R,listeners:$}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&n!==$u&&(Y=n.relatedTarget||n.fromElement)&&(ol(Y)||Y[cl]))break e;if((N||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,N?(Y=n.relatedTarget||n.toElement,N=C,Y=Y?ol(Y):null,Y!==null&&(Ee=h(Y),$=Y.tag,Y!==Ee||$!==5&&$!==27&&$!==6)&&(Y=null)):(N=null,Y=C),N!==Y)){if($=so,w="onMouseLeave",A="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&($=co,w="onPointerLeave",A="onPointerEnter",x="pointer"),Ee=N==null?R:ta(N),_=Y==null?R:ta(Y),R=new $(w,x+"leave",N,n,O),R.target=Ee,R.relatedTarget=_,w=null,ol(O)===C&&($=new $(A,x+"enter",Y,n,O),$.target=_,$.relatedTarget=Ee,w=$),Ee=w,N&&Y)t:{for($=Hg,A=N,x=Y,_=0,w=A;w;w=$(w))_++;w=0;for(var J=x;J;J=$(J))w++;for(;0<_-w;)A=$(A),_--;for(;0<w-_;)x=$(x),w--;for(;_--;){if(A===x||x!==null&&A===x.alternate){$=A;break t}A=$(A),x=$(x)}$=null}else $=null;N!==null&&nd(j,R,N,$,!1),Y!==null&&Ee!==null&&nd(j,Ee,Y,$,!0)}}e:{if(R=C?ta(C):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var fe=bo;else if(go(R))if(vo)fe=Jp;else{fe=Xp;var Z=Vp}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?C&&Ku(C.elementType)&&(fe=bo):fe=Zp;if(fe&&(fe=fe(e,C))){yo(j,fe,n,O);break e}Z&&Z(e,R,C),e==="focusout"&&C&&R.type==="number"&&C.memoizedProps.value!=null&&Ju(R,"number",R.value)}switch(Z=C?ta(C):window,e){case"focusin":(go(Z)||Z.contentEditable==="true")&&(vl=Z,rs=C,oa=null);break;case"focusout":oa=rs=vl=null;break;case"mousedown":cs=!0;break;case"contextmenu":case"mouseup":case"dragend":cs=!1,Ro(j,n,O);break;case"selectionchange":if($p)break;case"keydown":case"keyup":Ro(j,n,O)}var le;if(as)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else bl?mo(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(oo&&n.locale!=="ko"&&(bl||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&bl&&(le=io()):(bn=O,Pu="value"in bn?bn.value:bn.textContent,bl=!0)),Z=au(C,ce),0<Z.length&&(ce=new ro(ce,e,null,n,O),j.push({event:ce,listeners:Z}),le?ce.data=le:(le=po(n),le!==null&&(ce.data=le)))),(le=Gp?Bp(e,n):qp(e,n))&&(ce=au(C,"onBeforeInput"),0<ce.length&&(Z=new ro("onBeforeInput","beforeinput",null,n,O),j.push({event:Z,listeners:ce}),Z.data=le)),Og(j,e,C,n,O)}ed(j,t)})}function ja(e,t,n){return{instance:e,listener:t,currentTarget:n}}function au(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=na(e,n),a!=null&&l.unshift(ja(e,a,i)),a=na(e,t),a!=null&&l.push(ja(e,a,i))),e.tag===3)return l;e=e.return}return[]}function Hg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nd(e,t,n,l,a){for(var i=t._reactName,o=[];n!==null&&n!==l;){var d=n,v=d.alternate,C=d.stateNode;if(d=d.tag,v!==null&&v===l)break;d!==5&&d!==26&&d!==27||C===null||(v=C,a?(C=na(n,i),C!=null&&o.unshift(ja(n,C,v))):a||(C=na(n,i),C!=null&&o.push(ja(n,C,v)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ug=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(Ug,`
`).replace(Lg,"")}function ad(e,t){return t=ld(t),ld(e)===t}function Se(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||pl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&pl(e,""+l);break;case"className":ri(e,"class",l);break;case"tabIndex":ri(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,n,l);break;case"style":no(e,l,i);break;case"data":if(t!=="object"){ri(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=oi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",a.name,a,null),Se(e,t,"formEncType",a.formEncType,a,null),Se(e,t,"formMethod",a.formMethod,a,null),Se(e,t,"formTarget",a.formTarget,a,null)):(Se(e,t,"encType",a.encType,a,null),Se(e,t,"method",a.method,a,null),Se(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=oi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=oi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ue("beforetoggle",e),ue("toggle",e),si(e,"popover",l);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":si(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hp.get(n)||n,si(e,n,l))}}function wr(e,t,n,l,a,i){switch(n){case"style":no(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof l=="string"?pl(e,l):(typeof l=="number"||typeof l=="bigint")&&pl(e,""+l);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[tt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):si(e,n,l)}}}function $e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,i,o,n,null)}}a&&Se(e,t,"srcSet",n.srcSet,n,null),l&&Se(e,t,"src",n.src,n,null);return;case"input":ue("invalid",e);var d=i=o=a=null,v=null,C=null;for(l in n)if(n.hasOwnProperty(l)){var O=n[l];if(O!=null)switch(l){case"name":a=O;break;case"type":o=O;break;case"checked":v=O;break;case"defaultChecked":C=O;break;case"value":i=O;break;case"defaultValue":d=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:Se(e,t,l,O,n,null)}}Fc(e,i,d,v,C,o,a,!1);return;case"select":ue("invalid",e),l=o=i=null;for(a in n)if(n.hasOwnProperty(a)&&(d=n[a],d!=null))switch(a){case"value":i=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:Se(e,t,a,d,n,null)}t=i,n=o,e.multiple=!!l,t!=null?ml(e,!!l,t,!1):n!=null&&ml(e,!!l,n,!0);return;case"textarea":ue("invalid",e),i=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(d=n[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":a=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Se(e,t,o,d,n,null)}eo(e,l,a,i);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(l=n[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Se(e,t,v,l,n,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(l=0;l<wa.length;l++)ue(wa[l],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(l=n[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,C,l,n,null)}return;default:if(Ku(t)){for(O in n)n.hasOwnProperty(O)&&(l=n[O],l!==void 0&&wr(e,t,O,l,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(l=n[d],l!=null&&Se(e,t,d,l,n,null))}function Gg(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,o=null,d=null,v=null,C=null,O=null;for(N in n){var j=n[N];if(n.hasOwnProperty(N)&&j!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=j;default:l.hasOwnProperty(N)||Se(e,t,N,null,l,j)}}for(var R in l){var N=l[R];if(j=n[R],l.hasOwnProperty(R)&&(N!=null||j!=null))switch(R){case"type":i=N;break;case"name":a=N;break;case"checked":C=N;break;case"defaultChecked":O=N;break;case"value":o=N;break;case"defaultValue":d=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==j&&Se(e,t,R,N,l,j)}}Zu(e,o,d,v,C,O,i,a);return;case"select":N=o=d=R=null;for(i in n)if(v=n[i],n.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":N=v;default:l.hasOwnProperty(i)||Se(e,t,i,null,l,v)}for(a in l)if(i=l[a],v=n[a],l.hasOwnProperty(a)&&(i!=null||v!=null))switch(a){case"value":R=i;break;case"defaultValue":d=i;break;case"multiple":o=i;default:i!==v&&Se(e,t,a,i,l,v)}t=d,n=o,l=N,R!=null?ml(e,!!n,R,!1):!!l!=!!n&&(t!=null?ml(e,!!n,t,!0):ml(e,!!n,n?[]:"",!1));return;case"textarea":N=R=null;for(d in n)if(a=n[d],n.hasOwnProperty(d)&&a!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Se(e,t,d,null,l,a)}for(o in l)if(a=l[o],i=n[o],l.hasOwnProperty(o)&&(a!=null||i!=null))switch(o){case"value":R=a;break;case"defaultValue":N=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==i&&Se(e,t,o,a,l,i)}Pc(e,R,N);return;case"option":for(var Y in n)if(R=n[Y],n.hasOwnProperty(Y)&&R!=null&&!l.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:Se(e,t,Y,null,l,R)}for(v in l)if(R=l[v],N=n[v],l.hasOwnProperty(v)&&R!==N&&(R!=null||N!=null))switch(v){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Se(e,t,v,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in n)R=n[$],n.hasOwnProperty($)&&R!=null&&!l.hasOwnProperty($)&&Se(e,t,$,null,l,R);for(C in l)if(R=l[C],N=n[C],l.hasOwnProperty(C)&&R!==N&&(R!=null||N!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Se(e,t,C,R,l,N)}return;default:if(Ku(t)){for(var Ee in n)R=n[Ee],n.hasOwnProperty(Ee)&&R!==void 0&&!l.hasOwnProperty(Ee)&&wr(e,t,Ee,void 0,l,R);for(O in l)R=l[O],N=n[O],!l.hasOwnProperty(O)||R===N||R===void 0&&N===void 0||wr(e,t,O,R,l,N);return}}for(var A in n)R=n[A],n.hasOwnProperty(A)&&R!=null&&!l.hasOwnProperty(A)&&Se(e,t,A,null,l,R);for(j in l)R=l[j],N=n[j],!l.hasOwnProperty(j)||R===N||R==null&&N==null||Se(e,t,j,R,l,N)}function id(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,o=a.initiatorType,d=a.duration;if(i&&d&&id(o)){for(o=0,d=a.responseEnd,l+=1;l<n.length;l++){var v=n[l],C=v.startTime;if(C>d)break;var O=v.transferSize,j=v.initiatorType;O&&id(j)&&(v=v.responseEnd,o+=O*(v<d?1:(d-C)/(v-C)))}if(--l,t+=8*(i+o)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jr=null,Hr=null;function iu(e){return e.nodeType===9?e:e.ownerDocument}function ud(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ur(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lr=null;function qg(){var e=window.event;return e&&e.type==="popstate"?e===Lr?!1:(Lr=e,!0):(Lr=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,Yg=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(Vg)}:rd;function Vg(e){setTimeout(function(){throw e})}function jn(e){return e==="head"}function od(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),Zl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ha(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ha(n);for(var i=n.firstChild;i;){var o=i.nextSibling,d=i.nodeName;i[ea]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Ha(e.ownerDocument.body);n=a}while(n);Zl(t)}function fd(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Gr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Gr(n),Vu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Xg(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ea])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function Zg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mt(e.nextSibling),e===null))return null;return e}function hd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Br(e){return e.data==="$?"||e.data==="$~"}function qr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qr=null;function dd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Mt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function md(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function pd(e,t,n){switch(t=iu(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ha(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vu(e)}var Nt=new Map,gd=new Set;function uu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cn=q.d;q.d={f:Kg,r:$g,D:Ig,C:Wg,L:Fg,m:Pg,X:t0,S:e0,M:n0};function Kg(){var e=cn.f(),t=Wi();return e||t}function $g(e){var t=fl(e);t!==null&&t.tag===5&&t.type==="form"?kf(t):cn.r(e)}var Yl=typeof document>"u"?null:document;function yd(e,t,n){var l=Yl;if(l&&typeof t=="string"&&t){var a=St(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),gd.has(a)||(gd.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),$e(t,"link",e),Qe(t),l.head.appendChild(t)))}}function Ig(e){cn.D(e),yd("dns-prefetch",e,null)}function Wg(e,t){cn.C(e,t),yd("preconnect",e,t)}function Fg(e,t,n){cn.L(e,t,n);var l=Yl;if(l&&e&&t){var a='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+St(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+St(n.imageSizes)+'"]')):a+='[href="'+St(e)+'"]';var i=a;switch(t){case"style":i=Vl(e);break;case"script":i=Xl(e)}Nt.has(i)||(e=T({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Nt.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ua(i))||t==="script"&&l.querySelector(La(i))||(t=l.createElement("link"),$e(t,"link",e),Qe(t),l.head.appendChild(t)))}}function Pg(e,t){cn.m(e,t);var n=Yl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Xl(e)}if(!Nt.has(i)&&(e=T({rel:"modulepreload",href:e},t),Nt.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(La(i)))return}l=n.createElement("link"),$e(l,"link",e),Qe(l),n.head.appendChild(l)}}}function e0(e,t,n){cn.S(e,t,n);var l=Yl;if(l&&e){var a=hl(l).hoistableStyles,i=Vl(e);t=t||"default";var o=a.get(i);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(Ua(i)))d.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nt.get(i))&&Yr(e,n);var v=o=l.createElement("link");Qe(v),$e(v,"link",e),v._p=new Promise(function(C,O){v.onload=C,v.onerror=O}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,su(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:d},a.set(i,o)}}}function t0(e,t){cn.X(e,t);var n=Yl;if(n&&e){var l=hl(n).hoistableScripts,a=Xl(e),i=l.get(a);i||(i=n.querySelector(La(a)),i||(e=T({src:e,async:!0},t),(t=Nt.get(a))&&Vr(e,t),i=n.createElement("script"),Qe(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function n0(e,t){cn.M(e,t);var n=Yl;if(n&&e){var l=hl(n).hoistableScripts,a=Xl(e),i=l.get(a);i||(i=n.querySelector(La(a)),i||(e=T({src:e,async:!0,type:"module"},t),(t=Nt.get(a))&&Vr(e,t),i=n.createElement("script"),Qe(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function bd(e,t,n,l){var a=(a=ae.current)?uu(a):null;if(!a)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Vl(n.href),n=hl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Vl(n.href);var i=hl(a).hoistableStyles,o=i.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=a.querySelector(Ua(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nt.set(e,n),i||l0(a,e,n,o.state))),t&&l===null)throw Error(c(528,""));return o}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xl(n),n=hl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Vl(e){return'href="'+St(e)+'"'}function Ua(e){return'link[rel="stylesheet"]['+e+"]"}function vd(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function l0(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",n),Qe(t),e.head.appendChild(t))}function Xl(e){return'[src="'+St(e)+'"]'}function La(e){return"script[async]"+e}function xd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+St(n.href)+'"]');if(l)return t.instance=l,Qe(l),l;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qe(l),$e(l,"style",a),su(l,n.precedence,e),t.instance=l;case"stylesheet":a=Vl(n.href);var i=e.querySelector(Ua(a));if(i)return t.state.loading|=4,t.instance=i,Qe(i),i;l=vd(n),(a=Nt.get(a))&&Yr(l,a),i=(e.ownerDocument||e).createElement("link"),Qe(i);var o=i;return o._p=new Promise(function(d,v){o.onload=d,o.onerror=v}),$e(i,"link",l),t.state.loading|=4,su(i,n.precedence,e),t.instance=i;case"script":return i=Xl(n.src),(a=e.querySelector(La(i)))?(t.instance=a,Qe(a),a):(l=n,(a=Nt.get(i))&&(l=T({},n),Vr(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Qe(a),$e(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,su(l,n.precedence,e));return t.instance}function su(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===t)i=d;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ru=null;function Sd(e,t,n){if(ru===null){var l=new Map,a=ru=new Map;a.set(n,l)}else a=ru,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[ea]||i[Xe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var d=l.get(o);d?d.push(i):l.set(o,[i])}}return l}function Ed(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function a0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function i0(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Vl(l.href),i=t.querySelector(Ua(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=cu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Qe(i);return}i=t.ownerDocument||t,l=vd(l),(a=Nt.get(a))&&Yr(l,a),i=i.createElement("link"),Qe(i);var o=i;o._p=new Promise(function(d,v){o.onload=d,o.onerror=v}),$e(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=cu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Xr=0;function u0(e,t){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Xr===0&&(Xr=62500*Bg());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Xr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,t.forEach(s0,e),ou=null,cu.call(e))}function s0(e,t){if(!(t.state.loading&4)){var n=ou.get(e);if(n)var l=n.get(null);else{n=new Map,ou.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),i=n.get(o)||l,i===l&&n.set(null,a),n.set(o,a),this.count++,l=cu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ga={$$typeof:H,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function r0(e,t,n,l,a,i,o,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.hiddenUpdates=Bu(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Ad(e,t,n,l,a,i,o,d,v,C,O,j){return e=new r0(e,t,n,o,v,C,O,j,d),t=1,i===!0&&(t|=24),i=ht(3,null,null,t),e.current=i,i.stateNode=e,t=As(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},Ms(i),e}function _d(e){return e?(e=El,e):El}function Cd(e,t,n,l,a,i){a=_d(a),l.context===null?l.context=a:l.pendingContext=a,l=An(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=_n(e,l,t),n!==null&&(st(n,e,t),ya(n,e,t))}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zr(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function Md(e){if(e.tag===13||e.tag===31){var t=Kn(e,67108864);t!==null&&st(t,e,67108864),Zr(e,67108864)}}function Nd(e){if(e.tag===13||e.tag===31){var t=yt();t=qu(t);var n=Kn(e,t);n!==null&&st(n,e,t),Zr(e,t)}}var hu=!0;function c0(e,t,n,l){var a=k.T;k.T=null;var i=q.p;try{q.p=2,Jr(e,t,n,l)}finally{q.p=i,k.T=a}}function o0(e,t,n,l){var a=k.T;k.T=null;var i=q.p;try{q.p=8,Jr(e,t,n,l)}finally{q.p=i,k.T=a}}function Jr(e,t,n,l){if(hu){var a=Kr(l);if(a===null)kr(e,t,l,du,n),zd(e,l);else if(h0(a,e,t,n,l))l.stopPropagation();else if(zd(e,l),t&4&&-1<f0.indexOf(e)){for(;a!==null;){var i=fl(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Yn(i.pendingLanes);if(o!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var v=1<<31-ot(o);d.entanglements[1]|=v,o&=~v}Qt(i),(me&6)===0&&($i=rt()+500,ka(0))}}break;case 31:case 13:d=Kn(i,2),d!==null&&st(d,i,2),Wi(),Zr(i,2)}if(i=Kr(l),i===null&&kr(e,t,l,du,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else kr(e,t,l,null,n)}}function Kr(e){return e=Iu(e),$r(e)}var du=null;function $r(e){if(du=null,e=ol(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return du=e,null}function Dd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Im()){case Hc:return 2;case Uc:return 8;case ni:case Wm:return 32;case Lc:return 268435456;default:return 32}default:return 32}}var Ir=!1,Hn=null,Un=null,Ln=null,Ba=new Map,qa=new Map,Gn=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(t.pointerId)}}function Qa(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=fl(t),t!==null&&Md(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function h0(e,t,n,l,a){switch(t){case"focusin":return Hn=Qa(Hn,e,t,n,l,a),!0;case"dragenter":return Un=Qa(Un,e,t,n,l,a),!0;case"mouseover":return Ln=Qa(Ln,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Ba.set(i,Qa(Ba.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,qa.set(i,Qa(qa.get(i)||null,e,t,n,l,a)),!0}return!1}function Od(e){var t=ol(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Vc(e.priority,function(){Nd(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Vc(e.priority,function(){Nd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kr(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);$u=l,n.target.dispatchEvent(l),$u=null}else return t=fl(n),t!==null&&Md(t),e.blockedOn=n,!1;t.shift()}return!0}function kd(e,t,n){mu(e)&&n.delete(t)}function d0(){Ir=!1,Hn!==null&&mu(Hn)&&(Hn=null),Un!==null&&mu(Un)&&(Un=null),Ln!==null&&mu(Ln)&&(Ln=null),Ba.forEach(kd),qa.forEach(kd)}function pu(e,t){e.blockedOn===t&&(e.blockedOn=null,Ir||(Ir=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,d0)))}var gu=null;function wd(e){gu!==e&&(gu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if($r(l||n)===null)continue;break}var i=fl(n);i!==null&&(e.splice(t,3),t-=3,Ks(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Zl(e){function t(v){return pu(v,e)}Hn!==null&&pu(Hn,e),Un!==null&&pu(Un,e),Ln!==null&&pu(Ln,e),Ba.forEach(t),qa.forEach(t);for(var n=0;n<Gn.length;n++){var l=Gn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Od(n),n.blockedOn===null&&Gn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],o=a[tt]||null;if(typeof i=="function")o||wd(n);else if(o){var d=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[tt]||null)d=o.formAction;else if($r(a)!==null)continue}else d=o.action;typeof d=="function"?n[l+1]=d:(n.splice(l,3),l-=3),wd(n)}}}function jd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Wr(e){this._internalRoot=e}yu.prototype.render=Wr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,l=yt();Cd(n,l,e,t,null,null)},yu.prototype.unmount=Wr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cd(e.current,2,null,e,null,null),Wi(),t[cl]=null}};function yu(e){this._internalRoot=e}yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gn.length&&t!==0&&t<Gn[n].priority;n++);Gn.splice(n,0,e),n===0&&Od(e)}};var Hd=s.version;if(Hd!=="19.2.3")throw Error(c(527,Hd,"19.2.3"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var m0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{Wl=bu.inject(m0),ct=bu}catch{}}return Va.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,l="",a=Yf,i=Vf,o=Xf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ad(e,1,!1,null,null,n,l,null,a,i,o,jd),e[cl]=t.current,Or(e),new Wr(t)},Va.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var l=!1,a="",i=Yf,o=Vf,d=Xf,v=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=Ad(e,1,!0,t,n??null,l,a,v,i,o,d,jd),t.context=_d(null),n=t.current,l=yt(),l=qu(l),a=An(l),a.callback=null,_n(n,a,l),n=l,t.current.lanes=n,Pl(t,n),Qt(t),e[cl]=t.current,Or(e),new yu(t)},Va.version="19.2.3",Va}var Zd;function R0(){if(Zd)return ec.exports;Zd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),ec.exports=C0(),ec.exports}var M0=R0();const N0=pm(M0);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jd="popstate";function D0(u={}){function s(c,f){let{pathname:h,search:p,hash:g}=c.location;return oc("",{pathname:h,search:p,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function r(c,f){return typeof f=="string"?f:Wa(f)}return O0(s,r,null,u)}function Ne(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function Ut(u,s){if(!u){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function z0(){return Math.random().toString(36).substring(2,10)}function Kd(u,s){return{usr:u.state,key:u.key,idx:s}}function oc(u,s,r=null,c){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof s=="string"?Jl(s):s,state:r,key:s&&s.key||c||z0()}}function Wa({pathname:u="/",search:s="",hash:r=""}){return s&&s!=="?"&&(u+=s.charAt(0)==="?"?s:"?"+s),r&&r!=="#"&&(u+=r.charAt(0)==="#"?r:"#"+r),u}function Jl(u){let s={};if(u){let r=u.indexOf("#");r>=0&&(s.hash=u.substring(r),u=u.substring(0,r));let c=u.indexOf("?");c>=0&&(s.search=u.substring(c),u=u.substring(0,c)),u&&(s.pathname=u)}return s}function O0(u,s,r,c={}){let{window:f=document.defaultView,v5Compat:h=!1}=c,p=f.history,g="POP",b=null,m=E();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function E(){return(p.state||{idx:null}).idx}function T(){g="POP";let G=E(),V=G==null?null:G-m;m=G,b&&b({action:g,location:L.location,delta:V})}function z(G,V){g="PUSH";let K=oc(L.location,G,V);m=E()+1;let H=Kd(K,m),F=L.createHref(K);try{p.pushState(H,"",F)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;f.location.assign(F)}h&&b&&b({action:g,location:L.location,delta:1})}function D(G,V){g="REPLACE";let K=oc(L.location,G,V);m=E();let H=Kd(K,m),F=L.createHref(K);p.replaceState(H,"",F),h&&b&&b({action:g,location:L.location,delta:0})}function B(G){return k0(G)}let L={get action(){return g},get location(){return u(f,p)},listen(G){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(Jd,T),b=G,()=>{f.removeEventListener(Jd,T),b=null}},createHref(G){return s(f,G)},createURL:B,encodeLocation(G){let V=B(G);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:z,replace:D,go(G){return p.go(G)}};return L}function k0(u,s=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(r,"No window.location.(origin|href) available to create URL");let c=typeof u=="string"?u:Wa(u);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=r+c),new URL(c,r)}function gm(u,s,r="/"){return w0(u,s,r,!1)}function w0(u,s,r,c){let f=typeof s=="string"?Jl(s):s,h=mn(f.pathname||"/",r);if(h==null)return null;let p=ym(u);j0(p);let g=null;for(let b=0;g==null&&b<p.length;++b){let m=Z0(h);g=V0(p[b],m,c)}return g}function ym(u,s=[],r=[],c="",f=!1){let h=(p,g,b=f,m)=>{let E={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(c)&&b)return;Ne(E.relativePath.startsWith(c),`Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(c.length)}let T=dn([c,E.relativePath]),z=r.concat(E);p.children&&p.children.length>0&&(Ne(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),ym(p.children,s,z,T,b)),!(p.path==null&&!p.index)&&s.push({path:T,score:Q0(T,p.index),routesMeta:z})};return u.forEach((p,g)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))h(p,g);else for(let m of bm(p.path))h(p,g,!0,m)}),s}function bm(u){let s=u.split("/");if(s.length===0)return[];let[r,...c]=s,f=r.endsWith("?"),h=r.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let p=bm(c.join("/")),g=[];return g.push(...p.map(b=>b===""?h:[h,b].join("/"))),f&&g.push(...p),g.map(b=>u.startsWith("/")&&b===""?"/":b)}function j0(u){u.sort((s,r)=>s.score!==r.score?r.score-s.score:Y0(s.routesMeta.map(c=>c.childrenIndex),r.routesMeta.map(c=>c.childrenIndex)))}var H0=/^:[\w-]+$/,U0=3,L0=2,G0=1,B0=10,q0=-2,$d=u=>u==="*";function Q0(u,s){let r=u.split("/"),c=r.length;return r.some($d)&&(c+=q0),s&&(c+=L0),r.filter(f=>!$d(f)).reduce((f,h)=>f+(H0.test(h)?U0:h===""?G0:B0),c)}function Y0(u,s){return u.length===s.length&&u.slice(0,-1).every((c,f)=>c===s[f])?u[u.length-1]-s[s.length-1]:0}function V0(u,s,r=!1){let{routesMeta:c}=u,f={},h="/",p=[];for(let g=0;g<c.length;++g){let b=c[g],m=g===c.length-1,E=h==="/"?s:s.slice(h.length)||"/",T=_u({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},E),z=b.route;if(!T&&m&&r&&!c[c.length-1].route.index&&(T=_u({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},E)),!T)return null;Object.assign(f,T.params),p.push({params:f,pathname:dn([h,T.pathname]),pathnameBase:I0(dn([h,T.pathnameBase])),route:z}),T.pathnameBase!=="/"&&(h=dn([h,T.pathnameBase]))}return p}function _u(u,s){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[r,c]=X0(u.path,u.caseSensitive,u.end),f=s.match(r);if(!f)return null;let h=f[0],p=h.replace(/(.)\/+$/,"$1"),g=f.slice(1);return{params:c.reduce((m,{paramName:E,isOptional:T},z)=>{if(E==="*"){let B=g[z]||"";p=h.slice(0,h.length-B.length).replace(/(.)\/+$/,"$1")}const D=g[z];return T&&!D?m[E]=void 0:m[E]=(D||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:p,pattern:u}}function X0(u,s=!1,r=!0){Ut(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],f="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,b)=>(c.push({paramName:g,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(c.push({paramName:"*"}),f+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?f+="\\/*$":u!==""&&u!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),c]}function Z0(u){try{return u.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Ut(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),u}}function mn(u,s){if(s==="/")return u;if(!u.toLowerCase().startsWith(s.toLowerCase()))return null;let r=s.endsWith("/")?s.length-1:s.length,c=u.charAt(r);return c&&c!=="/"?null:u.slice(r)||"/"}var J0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function K0(u,s="/"){let{pathname:r,search:c="",hash:f=""}=typeof u=="string"?Jl(u):u,h;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?h=Id(r.substring(1),"/"):h=Id(r,s)):h=s,{pathname:h,search:W0(c),hash:F0(f)}}function Id(u,s){let r=s.replace(/\/+$/,"").split("/");return u.split("/").forEach(f=>{f===".."?r.length>1&&r.pop():f!=="."&&r.push(f)}),r.length>1?r.join("/"):"/"}function ac(u,s,r,c){return`Cannot include a '${u}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $0(u){return u.filter((s,r)=>r===0||s.route.path&&s.route.path.length>0)}function yc(u){let s=$0(u);return s.map((r,c)=>c===s.length-1?r.pathname:r.pathnameBase)}function bc(u,s,r,c=!1){let f;typeof u=="string"?f=Jl(u):(f={...u},Ne(!f.pathname||!f.pathname.includes("?"),ac("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),ac("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),ac("#","search","hash",f)));let h=u===""||f.pathname==="",p=h?"/":f.pathname,g;if(p==null)g=r;else{let T=s.length-1;if(!c&&p.startsWith("..")){let z=p.split("/");for(;z[0]==="..";)z.shift(),T-=1;f.pathname=z.join("/")}g=T>=0?s[T]:"/"}let b=K0(f,g),m=p&&p!=="/"&&p.endsWith("/"),E=(h||p===".")&&r.endsWith("/");return!b.pathname.endsWith("/")&&(m||E)&&(b.pathname+="/"),b}var dn=u=>u.join("/").replace(/\/\/+/g,"/"),I0=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),W0=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,F0=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,P0=class{constructor(u,s,r,c=!1){this.status=u,this.statusText=s||"",this.internal=c,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function ey(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function ty(u){return u.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xm(u,s){let r=u;if(typeof r!="string"||!J0.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let c=r,f=!1;if(vm)try{let h=new URL(window.location.href),p=r.startsWith("//")?new URL(h.protocol+r):new URL(r),g=mn(p.pathname,s);p.origin===h.origin&&g!=null?r=g+p.search+p.hash:f=!0}catch{Ut(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sm=["POST","PUT","PATCH","DELETE"];new Set(Sm);var ny=["GET",...Sm];new Set(ny);var Kl=M.createContext(null);Kl.displayName="DataRouter";var Du=M.createContext(null);Du.displayName="DataRouterState";var ly=M.createContext(!1),Em=M.createContext({isTransitioning:!1});Em.displayName="ViewTransition";var ay=M.createContext(new Map);ay.displayName="Fetchers";var iy=M.createContext(null);iy.displayName="Await";var bt=M.createContext(null);bt.displayName="Navigation";var Fa=M.createContext(null);Fa.displayName="Location";var Dt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Dt.displayName="Route";var vc=M.createContext(null);vc.displayName="RouteError";var Tm="REACT_ROUTER_ERROR",uy="REDIRECT",sy="ROUTE_ERROR_RESPONSE";function ry(u){if(u.startsWith(`${Tm}:${uy}:{`))try{let s=JSON.parse(u.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function cy(u){if(u.startsWith(`${Tm}:${sy}:{`))try{let s=JSON.parse(u.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new P0(s.status,s.statusText,s.data)}catch{}}function oy(u,{relative:s}={}){Ne($l(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:c}=M.useContext(bt),{hash:f,pathname:h,search:p}=Pa(u,{relative:s}),g=h;return r!=="/"&&(g=h==="/"?r:dn([r,h])),c.createHref({pathname:g,search:p,hash:f})}function $l(){return M.useContext(Fa)!=null}function pn(){return Ne($l(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Fa).location}var Am="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _m(u){M.useContext(bt).static||M.useLayoutEffect(u)}function Cm(){let{isDataRoute:u}=M.useContext(Dt);return u?Cy():fy()}function fy(){Ne($l(),"useNavigate() may be used only in the context of a <Router> component.");let u=M.useContext(Kl),{basename:s,navigator:r}=M.useContext(bt),{matches:c}=M.useContext(Dt),{pathname:f}=pn(),h=JSON.stringify(yc(c)),p=M.useRef(!1);return _m(()=>{p.current=!0}),M.useCallback((b,m={})=>{if(Ut(p.current,Am),!p.current)return;if(typeof b=="number"){r.go(b);return}let E=bc(b,JSON.parse(h),f,m.relative==="path");u==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:dn([s,E.pathname])),(m.replace?r.replace:r.push)(E,m.state,m)},[s,r,h,f,u])}var hy=M.createContext(null);function dy(u){let s=M.useContext(Dt).outlet;return M.useMemo(()=>s&&M.createElement(hy.Provider,{value:u},s),[s,u])}function my(){let{matches:u}=M.useContext(Dt),s=u[u.length-1];return s?s.params:{}}function Pa(u,{relative:s}={}){let{matches:r}=M.useContext(Dt),{pathname:c}=pn(),f=JSON.stringify(yc(r));return M.useMemo(()=>bc(u,JSON.parse(f),c,s==="path"),[u,f,c,s])}function py(u,s){return Rm(u,s)}function Rm(u,s,r,c,f){var K;Ne($l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=M.useContext(bt),{matches:p}=M.useContext(Dt),g=p[p.length-1],b=g?g.params:{},m=g?g.pathname:"/",E=g?g.pathnameBase:"/",T=g&&g.route;{let H=T&&T.path||"";Nm(m,!T||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let z=pn(),D;if(s){let H=typeof s=="string"?Jl(s):s;Ne(E==="/"||((K=H.pathname)==null?void 0:K.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${H.pathname}" was given in the \`location\` prop.`),D=H}else D=z;let B=D.pathname||"/",L=B;if(E!=="/"){let H=E.replace(/^\//,"").split("/");L="/"+B.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=gm(u,{pathname:L});Ut(T||G!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Ut(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=xy(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},b,H.params),pathname:dn([E,h.encodeLocation?h.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?E:dn([E,h.encodeLocation?h.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),p,r,c,f);return s&&V?M.createElement(Fa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},V):V}function gy(){let u=_y(),s=ey(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),r=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",u),p=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:h},"ErrorBoundary")," or"," ",M.createElement("code",{style:h},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},s),r?M.createElement("pre",{style:f},r):null,p)}var yy=M.createElement(gy,null),Mm=class extends M.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,s){return s.location!==u.location||s.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:s.error,location:s.location,revalidation:u.revalidation||s.revalidation}}componentDidCatch(u,s){this.props.onError?this.props.onError(u,s):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const r=cy(u.digest);r&&(u=r)}let s=u!==void 0?M.createElement(Dt.Provider,{value:this.props.routeContext},M.createElement(vc.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?M.createElement(by,{error:u},s):s}};Mm.contextType=ly;var ic=new WeakMap;function by({children:u,error:s}){let{basename:r}=M.useContext(bt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let c=ry(s.digest);if(c){let f=ic.get(s);if(f)throw f;let h=xm(c.location,r);if(vm&&!ic.get(s))if(h.isExternal||c.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:c.replace}));throw ic.set(s,p),p}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function vy({routeContext:u,match:s,children:r}){let c=M.useContext(Kl);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),M.createElement(Dt.Provider,{value:u},r)}function xy(u,s=[],r=null,c=null,f=null){if(u==null){if(!r)return null;if(r.errors)u=r.matches;else if(s.length===0&&!r.initialized&&r.matches.length>0)u=r.matches;else return null}let h=u,p=r==null?void 0:r.errors;if(p!=null){let E=h.findIndex(T=>T.route.id&&(p==null?void 0:p[T.route.id])!==void 0);Ne(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,b=-1;if(r)for(let E=0;E<h.length;E++){let T=h[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(b=E),T.route.id){let{loaderData:z,errors:D}=r,B=T.route.loader&&!z.hasOwnProperty(T.route.id)&&(!D||D[T.route.id]===void 0);if(T.route.lazy||B){g=!0,b>=0?h=h.slice(0,b+1):h=[h[0]];break}}}let m=r&&c?(E,T)=>{var z,D;c(E,{location:r.location,params:((D=(z=r.matches)==null?void 0:z[0])==null?void 0:D.params)??{},unstable_pattern:ty(r.matches),errorInfo:T})}:void 0;return h.reduceRight((E,T,z)=>{let D,B=!1,L=null,G=null;r&&(D=p&&T.route.id?p[T.route.id]:void 0,L=T.route.errorElement||yy,g&&(b<0&&z===0?(Nm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,G=null):b===z&&(B=!0,G=T.route.hydrateFallbackElement||null)));let V=s.concat(h.slice(0,z+1)),K=()=>{let H;return D?H=L:B?H=G:T.route.Component?H=M.createElement(T.route.Component,null):T.route.element?H=T.route.element:H=E,M.createElement(vy,{match:T,routeContext:{outlet:E,matches:V,isDataRoute:r!=null},children:H})};return r&&(T.route.ErrorBoundary||T.route.errorElement||z===0)?M.createElement(Mm,{location:r.location,revalidation:r.revalidation,component:L,error:D,children:K(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:m}):K()},null)}function xc(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sy(u){let s=M.useContext(Kl);return Ne(s,xc(u)),s}function Ey(u){let s=M.useContext(Du);return Ne(s,xc(u)),s}function Ty(u){let s=M.useContext(Dt);return Ne(s,xc(u)),s}function Sc(u){let s=Ty(u),r=s.matches[s.matches.length-1];return Ne(r.route.id,`${u} can only be used on routes that contain a unique "id"`),r.route.id}function Ay(){return Sc("useRouteId")}function _y(){var c;let u=M.useContext(vc),s=Ey("useRouteError"),r=Sc("useRouteError");return u!==void 0?u:(c=s.errors)==null?void 0:c[r]}function Cy(){let{router:u}=Sy("useNavigate"),s=Sc("useNavigate"),r=M.useRef(!1);return _m(()=>{r.current=!0}),M.useCallback(async(f,h={})=>{Ut(r.current,Am),r.current&&(typeof f=="number"?await u.navigate(f):await u.navigate(f,{fromRouteId:s,...h}))},[u,s])}var Wd={};function Nm(u,s,r){!s&&!Wd[u]&&(Wd[u]=!0,Ut(!1,r))}M.memo(Ry);function Ry({routes:u,future:s,state:r,onError:c}){return Rm(u,void 0,r,c,s)}function My({to:u,replace:s,state:r,relative:c}){Ne($l(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=M.useContext(bt);Ut(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=M.useContext(Dt),{pathname:p}=pn(),g=Cm(),b=bc(u,yc(h),p,c==="path"),m=JSON.stringify(b);return M.useEffect(()=>{g(JSON.parse(m),{replace:s,state:r,relative:c})},[g,m,c,s,r]),null}function Ny(u){return dy(u.context)}function fn(u){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dy({basename:u="/",children:s=null,location:r,navigationType:c="POP",navigator:f,static:h=!1,unstable_useTransitions:p}){Ne(!$l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=u.replace(/^\/*/,"/"),b=M.useMemo(()=>({basename:g,navigator:f,static:h,unstable_useTransitions:p,future:{}}),[g,f,h,p]);typeof r=="string"&&(r=Jl(r));let{pathname:m="/",search:E="",hash:T="",state:z=null,key:D="default"}=r,B=M.useMemo(()=>{let L=mn(m,g);return L==null?null:{location:{pathname:L,search:E,hash:T,state:z,key:D},navigationType:c}},[g,m,E,T,z,D,c]);return Ut(B!=null,`<Router basename="${g}"> is not able to match the URL "${m}${E}${T}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:M.createElement(bt.Provider,{value:b},M.createElement(Fa.Provider,{children:s,value:B}))}function zy({children:u,location:s}){return py(fc(u),s)}function fc(u,s=[]){let r=[];return M.Children.forEach(u,(c,f)=>{if(!M.isValidElement(c))return;let h=[...s,f];if(c.type===M.Fragment){r.push.apply(r,fc(c.props.children,h));return}Ne(c.type===fn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=fc(c.props.children,h)),r.push(p)}),r}var Eu="get",Tu="application/x-www-form-urlencoded";function zu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Oy(u){return zu(u)&&u.tagName.toLowerCase()==="button"}function ky(u){return zu(u)&&u.tagName.toLowerCase()==="form"}function wy(u){return zu(u)&&u.tagName.toLowerCase()==="input"}function jy(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Hy(u,s){return u.button===0&&(!s||s==="_self")&&!jy(u)}var vu=null;function Uy(){if(vu===null)try{new FormData(document.createElement("form"),0),vu=!1}catch{vu=!0}return vu}var Ly=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uc(u){return u!=null&&!Ly.has(u)?(Ut(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tu}"`),null):u}function Gy(u,s){let r,c,f,h,p;if(ky(u)){let g=u.getAttribute("action");c=g?mn(g,s):null,r=u.getAttribute("method")||Eu,f=uc(u.getAttribute("enctype"))||Tu,h=new FormData(u)}else if(Oy(u)||wy(u)&&(u.type==="submit"||u.type==="image")){let g=u.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=u.getAttribute("formaction")||g.getAttribute("action");if(c=b?mn(b,s):null,r=u.getAttribute("formmethod")||g.getAttribute("method")||Eu,f=uc(u.getAttribute("formenctype"))||uc(g.getAttribute("enctype"))||Tu,h=new FormData(g,u),!Uy()){let{name:m,type:E,value:T}=u;if(E==="image"){let z=m?`${m}.`:"";h.append(`${z}x`,"0"),h.append(`${z}y`,"0")}else m&&h.append(m,T)}}else{if(zu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Eu,c=null,f=Tu,p=u}return h&&f==="text/plain"&&(p=h,h=void 0),{action:c,method:r.toLowerCase(),encType:f,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ec(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function By(u,s,r,c){let f=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return r?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:s&&mn(f.pathname,s)==="/"?f.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function qy(u,s){if(u.id in s)return s[u.id];try{let r=await import(u.module);return s[u.id]=r,r}catch(r){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qy(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Yy(u,s,r){let c=await Promise.all(u.map(async f=>{let h=s.routes[f.route.id];if(h){let p=await qy(h,r);return p.links?p.links():[]}return[]}));return Jy(c.flat(1).filter(Qy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Fd(u,s,r,c,f,h){let p=(b,m)=>r[m]?b.route.id!==r[m].route.id:!0,g=(b,m)=>{var E;return r[m].pathname!==b.pathname||((E=r[m].route.path)==null?void 0:E.endsWith("*"))&&r[m].params["*"]!==b.params["*"]};return h==="assets"?s.filter((b,m)=>p(b,m)||g(b,m)):h==="data"?s.filter((b,m)=>{var T;let E=c.routes[b.route.id];if(!E||!E.hasLoader)return!1;if(p(b,m)||g(b,m))return!0;if(b.route.shouldRevalidate){let z=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((T=r[0])==null?void 0:T.params)||{},nextUrl:new URL(u,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function Vy(u,s,{includeHydrateFallback:r}={}){return Xy(u.map(c=>{let f=s.routes[c.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),r&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Xy(u){return[...new Set(u)]}function Zy(u){let s={},r=Object.keys(u).sort();for(let c of r)s[c]=u[c];return s}function Jy(u,s){let r=new Set;return new Set(s),u.reduce((c,f)=>{let h=JSON.stringify(Zy(f));return r.has(h)||(r.add(h),c.push({key:h,link:f})),c},[])}function Dm(){let u=M.useContext(Kl);return Ec(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Ky(){let u=M.useContext(Du);return Ec(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Tc=M.createContext(void 0);Tc.displayName="FrameworkContext";function zm(){let u=M.useContext(Tc);return Ec(u,"You must render this element inside a <HydratedRouter> element"),u}function $y(u,s){let r=M.useContext(Tc),[c,f]=M.useState(!1),[h,p]=M.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:m,onMouseLeave:E,onTouchStart:T}=s,z=M.useRef(null);M.useEffect(()=>{if(u==="render"&&p(!0),u==="viewport"){let L=V=>{V.forEach(K=>{p(K.isIntersecting)})},G=new IntersectionObserver(L,{threshold:.5});return z.current&&G.observe(z.current),()=>{G.disconnect()}}},[u]),M.useEffect(()=>{if(c){let L=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(L)}}},[c]);let D=()=>{f(!0)},B=()=>{f(!1),p(!1)};return r?u!=="intent"?[h,z,{}]:[h,z,{onFocus:Xa(g,D),onBlur:Xa(b,B),onMouseEnter:Xa(m,D),onMouseLeave:Xa(E,B),onTouchStart:Xa(T,D)}]:[!1,z,{}]}function Xa(u,s){return r=>{u&&u(r),r.defaultPrevented||s(r)}}function Iy({page:u,...s}){let{router:r}=Dm(),c=M.useMemo(()=>gm(r.routes,u,r.basename),[r.routes,u,r.basename]);return c?M.createElement(Fy,{page:u,matches:c,...s}):null}function Wy(u){let{manifest:s,routeModules:r}=zm(),[c,f]=M.useState([]);return M.useEffect(()=>{let h=!1;return Yy(u,s,r).then(p=>{h||f(p)}),()=>{h=!0}},[u,s,r]),c}function Fy({page:u,matches:s,...r}){let c=pn(),{future:f,manifest:h,routeModules:p}=zm(),{basename:g}=Dm(),{loaderData:b,matches:m}=Ky(),E=M.useMemo(()=>Fd(u,s,m,h,c,"data"),[u,s,m,h,c]),T=M.useMemo(()=>Fd(u,s,m,h,c,"assets"),[u,s,m,h,c]),z=M.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let L=new Set,G=!1;if(s.forEach(K=>{var F;let H=h.routes[K.route.id];!H||!H.hasLoader||(!E.some(ee=>ee.route.id===K.route.id)&&K.route.id in b&&((F=p[K.route.id])!=null&&F.shouldRevalidate)||H.hasClientLoader?G=!0:L.add(K.route.id))}),L.size===0)return[];let V=By(u,g,f.unstable_trailingSlashAwareDataRequests,"data");return G&&L.size>0&&V.searchParams.set("_routes",s.filter(K=>L.has(K.route.id)).map(K=>K.route.id).join(",")),[V.pathname+V.search]},[g,f.unstable_trailingSlashAwareDataRequests,b,c,h,E,s,u,p]),D=M.useMemo(()=>Vy(T,h),[T,h]),B=Wy(T);return M.createElement(M.Fragment,null,z.map(L=>M.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...r})),D.map(L=>M.createElement("link",{key:L,rel:"modulepreload",href:L,...r})),B.map(({key:L,link:G})=>M.createElement("link",{key:L,nonce:r.nonce,...G,crossOrigin:G.crossOrigin??r.crossOrigin})))}function Py(...u){return s=>{u.forEach(r=>{typeof r=="function"?r(s):r!=null&&(r.current=s)})}}var eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eb&&(window.__reactRouterVersion="7.13.0")}catch{}function tb({basename:u,children:s,unstable_useTransitions:r,window:c}){let f=M.useRef();f.current==null&&(f.current=D0({window:c,v5Compat:!0}));let h=f.current,[p,g]=M.useState({action:h.action,location:h.location}),b=M.useCallback(m=>{r===!1?g(m):M.startTransition(()=>g(m))},[r]);return M.useLayoutEffect(()=>h.listen(b),[h,b]),M.createElement(Dy,{basename:u,children:s,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:r})}var Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yt=M.forwardRef(function({onClick:s,discover:r="render",prefetch:c="none",relative:f,reloadDocument:h,replace:p,state:g,target:b,to:m,preventScrollReset:E,viewTransition:T,unstable_defaultShouldRevalidate:z,...D},B){let{basename:L,unstable_useTransitions:G}=M.useContext(bt),V=typeof m=="string"&&Om.test(m),K=xm(m,L);m=K.to;let H=oy(m,{relative:f}),[F,ee,se]=$y(c,D),I=ab(m,{replace:p,state:g,target:b,preventScrollReset:E,relative:f,viewTransition:T,unstable_defaultShouldRevalidate:z,unstable_useTransitions:G});function ke(vt){s&&s(vt),vt.defaultPrevented||I(vt)}let Ve=M.createElement("a",{...D,...se,href:K.absoluteURL||H,onClick:K.isExternal||h?s:ke,ref:Py(B,ee),target:b,"data-discover":!V&&r==="render"?"true":void 0});return F&&!V?M.createElement(M.Fragment,null,Ve,M.createElement(Iy,{page:H})):Ve});Yt.displayName="Link";var Au=M.forwardRef(function({"aria-current":s="page",caseSensitive:r=!1,className:c="",end:f=!1,style:h,to:p,viewTransition:g,children:b,...m},E){let T=Pa(p,{relative:m.relative}),z=pn(),D=M.useContext(Du),{navigator:B,basename:L}=M.useContext(bt),G=D!=null&&cb(T)&&g===!0,V=B.encodeLocation?B.encodeLocation(T).pathname:T.pathname,K=z.pathname,H=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;r||(K=K.toLowerCase(),H=H?H.toLowerCase():null,V=V.toLowerCase()),H&&L&&(H=mn(H,L)||H);const F=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let ee=K===V||!f&&K.startsWith(V)&&K.charAt(F)==="/",se=H!=null&&(H===V||!f&&H.startsWith(V)&&H.charAt(V.length)==="/"),I={isActive:ee,isPending:se,isTransitioning:G},ke=ee?s:void 0,Ve;typeof c=="function"?Ve=c(I):Ve=[c,ee?"active":null,se?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let vt=typeof h=="function"?h(I):h;return M.createElement(Yt,{...m,"aria-current":ke,className:Ve,ref:E,style:vt,to:p,viewTransition:g},typeof b=="function"?b(I):b)});Au.displayName="NavLink";var nb=M.forwardRef(({discover:u="render",fetcherKey:s,navigate:r,reloadDocument:c,replace:f,state:h,method:p=Eu,action:g,onSubmit:b,relative:m,preventScrollReset:E,viewTransition:T,unstable_defaultShouldRevalidate:z,...D},B)=>{let{unstable_useTransitions:L}=M.useContext(bt),G=sb(),V=rb(g,{relative:m}),K=p.toLowerCase()==="get"?"get":"post",H=typeof g=="string"&&Om.test(g),F=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let se=ee.nativeEvent.submitter,I=(se==null?void 0:se.getAttribute("formmethod"))||p,ke=()=>G(se||ee.currentTarget,{fetcherKey:s,method:I,navigate:r,replace:f,state:h,relative:m,preventScrollReset:E,viewTransition:T,unstable_defaultShouldRevalidate:z});L&&r!==!1?M.startTransition(()=>ke()):ke()};return M.createElement("form",{ref:B,method:K,action:V,onSubmit:c?b:F,...D,"data-discover":!H&&u==="render"?"true":void 0})});nb.displayName="Form";function lb(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function km(u){let s=M.useContext(Kl);return Ne(s,lb(u)),s}function ab(u,{target:s,replace:r,state:c,preventScrollReset:f,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b}={}){let m=Cm(),E=pn(),T=Pa(u,{relative:h});return M.useCallback(z=>{if(Hy(z,s)){z.preventDefault();let D=r!==void 0?r:Wa(E)===Wa(T),B=()=>m(u,{replace:D,state:c,preventScrollReset:f,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:g});b?M.startTransition(()=>B()):B()}},[E,m,T,r,c,s,u,f,h,p,g,b])}var ib=0,ub=()=>`__${String(++ib)}__`;function sb(){let{router:u}=km("useSubmit"),{basename:s}=M.useContext(bt),r=Ay(),c=u.fetch,f=u.navigate;return M.useCallback(async(h,p={})=>{let{action:g,method:b,encType:m,formData:E,body:T}=Gy(h,s);if(p.navigate===!1){let z=p.fetcherKey||ub();await c(z,r,p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:T,formMethod:p.method||b,formEncType:p.encType||m,flushSync:p.flushSync})}else await f(p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:T,formMethod:p.method||b,formEncType:p.encType||m,replace:p.replace,state:p.state,fromRouteId:r,flushSync:p.flushSync,viewTransition:p.viewTransition})},[c,f,s,r])}function rb(u,{relative:s}={}){let{basename:r}=M.useContext(bt),c=M.useContext(Dt);Ne(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),h={...Pa(u||".",{relative:s})},p=pn();if(u==null){h.search=p.search;let g=new URLSearchParams(h.search),b=g.getAll("index");if(b.some(E=>E==="")){g.delete("index"),b.filter(T=>T).forEach(T=>g.append("index",T));let E=g.toString();h.search=E?`?${E}`:""}}return(!u||u===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(h.pathname=h.pathname==="/"?r:dn([r,h.pathname])),Wa(h)}function cb(u,{relative:s}={}){let r=M.useContext(Em);Ne(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=km("useViewTransitionState"),f=Pa(u,{relative:s});if(!r.isTransitioning)return!1;let h=mn(r.currentLocation.pathname,c)||r.currentLocation.pathname,p=mn(r.nextLocation.pathname,c)||r.nextLocation.pathname;return _u(f.pathname,p)!=null||_u(f.pathname,h)!=null}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fb=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,r,c)=>c?c.toUpperCase():r.toLowerCase()),Pd=u=>{const s=fb(u);return s.charAt(0).toUpperCase()+s.slice(1)},wm=(...u)=>u.filter((s,r,c)=>!!s&&s.trim()!==""&&c.indexOf(s)===r).join(" ").trim(),hb=u=>{for(const s in u)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var db={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=M.forwardRef(({color:u="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:c,className:f="",children:h,iconNode:p,...g},b)=>M.createElement("svg",{ref:b,...db,width:s,height:s,stroke:u,strokeWidth:c?Number(r)*24/Number(s):r,className:wm("lucide",f),...!h&&!hb(g)&&{"aria-hidden":"true"},...g},[...p.map(([m,E])=>M.createElement(m,E)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(u,s)=>{const r=M.forwardRef(({className:c,...f},h)=>M.createElement(mb,{ref:h,iconNode:s,className:wm(`lucide-${ob(Pd(u))}`,`lucide-${u}`,c),...f}));return r.displayName=Pd(u),r};/**
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
 */const Eb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Tb=Oe("chevron-left",Eb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_b=Oe("chevron-right",Ab);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Rb=Oe("chevron-up",Cb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],on=Oe("code",Mb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Db=Oe("copy",Nb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ob=Oe("cpu",zb);/**
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
 */const Lb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Za=Oe("globe",Lb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Bb=Oe("layers",Gb);/**
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
 */const Vb=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Xb=Oe("server",Vb);/**
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
 */const Ib=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cu=Oe("x",Ib),am=[{label:"Home",path:"/"},{label:"Experience",path:"/experience"},{label:"Skills",path:"/skills"},{label:"Education",path:"/education"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],hc=[{id:"standard-networks",title:"스탠다드네트웍스",role:"전송 개발팀",period:"2023.07 - 2025.12",description:"대용량 메시지 발송 플랫폼 기획/개발 및 운영",techStack:["Java","Spring Boot","Spring Cloud","Redis","RabbitMQ","R2DBC","Netflix Eureka","WebFlux"],keyAchievements:["월 평균 7천만 건에서 최대 3억 건에 이르는 메시지 데이터 처리","MSA(Microservices Architecture) 설계를 통한 시스템 결합도 최소화 및 확장성있는 인프라 구축","약 50개 고객사에 직접 배포되어 안정적으로 운영 중인 Agent 프로그램 개발 및 운영","메시지 검칙 프로세스 개발. KISA(한국인터넷진흥원) 및 내부 정책 준수로 스팸 신고율 50% 이상 감소 및 발송 신뢰도 향상"]}],Wb=[{category:"Languages",items:[{name:"Java",icon:Fb},{name:"HTML/CSS",icon:Bb},{name:"JS(ES6)",icon:Xb}]},{category:"Frameworks & Libraries",items:[{name:"Spring boot",icon:wb},{name:"WebFlux",icon:Ob},{name:"Netty",icon:Za},{name:"JPA",icon:Za},{name:"mybatis",icon:Za},{name:"R2DBC",icon:Za},{name:"React & Redux",icon:Za},{name:"Tailwind CSS"}]},{category:"Infrastructure & Databases",items:[{name:"RabbitMQ",icon:nm},{name:"Redis",icon:lm},{name:"mySQL",icon:on},{name:"Oracle",icon:on},{name:"maria",icon:on},{name:"Linux",icon:on}]},{category:"Tools & Collaboration",items:[{name:"VSCode",icon:nm},{name:"IntelliJ",icon:lm},{name:"eclipse",icon:on},{name:"Git/GithubDesktop",icon:on},{name:"Notion",icon:on},{name:"Slack",icon:on},{name:"Jira",icon:on}]}],im=[{institution:"서울사이버대학교",link:"https://www.iscu.ac.kr",degree:"인공지능학과",period:"2026.03 ~ 재학 중",details:[],category:"Education"},{institution:"Docker 클라우드 컨데이너 기반 아키텍처 이해와 실습",link:"https://edu.ktdsuniversity.com",degree:"kt University에서 진행한 Docker 클라우드 컨테이너 기반 아키텍처 교육 과정",period:"2024.10 ~ 2024.10",details:["Docker와 Docker 컴포넌트 이해","Docker 이미지와 컨테이너 설정","Dockerfile 로 서버 구축하기","Docker 이미지 공유","Container 통합 관리"],category:"Education"},{institution:"빅데이터 기반 지능형SW 및 MLOps 개발자 양성과정",link:"https://playdata.io/",degree:"엔코아 아카데미(Encore Academy)에서 진행한 빅데이터 기반 개발자 양성 과정",period:"2022.11 ~ 2023.5",details:["마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","마이크로 서비스 개발을 위한 DB설계 능력"],category:"Education"},{institution:"La Piscine",link:"https://42seoul.kr/seoul42/main/view",degree:"이노베이션 아카데미(Innovation Academy)에서 진행한 자기주도학습 기반의 알고리즘 문제 풀이 과정",period:"2022.8 ~ 2022.9",details:["알고리즘 문제 해결 능력","서로간의 코드 설명 및 코드 리뷰로 의사소통 능력 향상"],category:"Education"},{institution:"클라우드 기반의 MSA 스페셜리스트 주니어 개발자 양성 과정",link:"https://sesac.seoul.kr/course/active/detail.do",degree:"디지털 전환(Digital Transformation)시대의 핵심 클라우드 전문 인재 양성 교육 과정",period:"2021.11 ~ 2022.5",details:["클라우드 인프라 구축 능력","마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","클라우드 네이티브에 대한 이해와 마이크로 서비스 개발 및 관리할 수 있는 능력"],category:"Education"},{institution:"정보처리기능사",degree:"한국산업인력공단",period:"2022.07.01",details:["국가기술자격증 취득"],category:"Certification"}];function Fb(u){return y.jsxs("svg",{...u,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}),y.jsx("path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}),y.jsx("line",{x1:"6",x2:"6",y1:"2",y2:"4"}),y.jsx("line",{x1:"10",x2:"10",y1:"2",y2:"4"}),y.jsx("line",{x1:"14",x2:"14",y1:"2",y2:"4"})]})}const Pb=()=>{const[u,s]=M.useState(!1),r=pn();return M.useEffect(()=>{s(!1),window.scrollTo(0,0)},[r]),y.jsxs("div",{className:"min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-mint selection:text-slate-900",children:[y.jsxs("header",{className:"w-full max-w-3xl mx-auto px-6 py-8 md:py-12 flex justify-between items-center",children:[y.jsxs(Au,{to:"/",className:"text-2xl font-extrabold tracking-tight hover:opacity-70 transition-opacity",children:["Whee",y.jsx("span",{className:"text-sky-500",children:"'s"})," Log",y.jsx("span",{className:"text-sky-500",children:"."})]}),y.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[am.filter(c=>c.label!=="Home").map(c=>y.jsx(Au,{to:c.path,className:({isActive:f})=>`text-[15px] font-medium transition-colors ${f?"text-slate-900 font-bold bg-gradient-to-r from-sky-200 to-sky-100 px-3 py-1 rounded-sm -skew-x-3":"text-slate-500 hover:text-slate-900"}`,children:c.label},c.path)),y.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"relative group text-slate-400 hover:text-sky-500 hover:scale-125 transition-all duration-200",children:[y.jsx(em,{size:20}),y.jsx("span",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-slate-700 bg-sky-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg",children:"Hanwhee's GitHub"})]})]}),y.jsx("button",{className:"md:hidden text-slate-800 focus:outline-none",onClick:()=>s(!u),children:u?y.jsx(Cu,{size:24}):y.jsx(Qb,{size:24})})]}),u&&y.jsxs("div",{className:"md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6 flex flex-col",children:[y.jsx("div",{className:"flex justify-end mb-8",children:y.jsx("button",{onClick:()=>s(!1),children:y.jsx(Cu,{size:28})})}),y.jsx("nav",{className:"flex flex-col space-y-6 text-center",children:am.map(c=>y.jsx(Au,{to:c.path,className:({isActive:f})=>`text-2xl font-bold ${f?"text-sky-600":"text-slate-800"}`,children:c.label},c.path))})]}),y.jsx("main",{className:"flex-grow w-full max-w-3xl mx-auto px-6 pb-20",children:y.jsx(Ny,{})}),y.jsxs("footer",{className:"w-full max-w-3xl mx-auto px-6 py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400",children:[y.jsx("div",{children:"© 2026 Hanwhee Kim."}),y.jsx("div",{className:"flex gap-4",children:y.jsx("a",{href:"https://github.com/KimHanWhee",className:"hover:text-slate-600",children:y.jsx(em,{size:16})})})]})]})},ev=`---
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

> _본 포스팅에 사용된 이미지는 [**jellili.tistory.com**](https://jellili.tistory.com/60)을 출처로 하고 있습니다._

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

GC가 될 대상 객체를 **식별(Mark)** 하고 **제거(Sweep)** 하며 객체가 제거되어 파편화된 메모리 영역을 앞에서부터 채워나가는 **작업(Compaction)** 을 수행한다.

- **Mark**: 불필요한 메모리를 선별하는 작업으로, Root Space로부터 그래프 순회를 통해 연결된 객체들을 찾아내어 각각 어떤 객체를 참조하고 있는지 찾아서 마킹한다.
- **Sweep**: 참조하고 있지 않은 객체(Unreachable) 객체들을 Heap에서 제거한다.
- **Compact**: 제거 후 분산된 객체들을 Heap의 시작 주소로 모아 메모리가 할당된 부분과 그렇지 않은 부분으로 압축한다. (GC 종류에 따라 하지 않는 경우도 있다.)

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
`,hv=`---
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
`,dv=`---
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

### 1. PUUID 조회

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

### 2. 프로필 정보 조회

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

### 3. 데이터 통합

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

다음 구현할 기능은 **전적 리스트 불러오기**다.
`,pv=`---
title: "6. CHARYEOT(차렷). - 리그 오브 레전드 (4) - 전적 불러오기"
date: "2026-03-14"
description: "CHARYEOT - 리그 오브 레전드 전적 데이터 가져오기"
tags: ["Project", "CHARYEOT"]
---

이번에는 해당 소환사의 게임 기록, **전적**을 불러올 차례이다.

Riot API 구조를 살펴보면 먼저 유저 ID로 **게임 ID 리스트**를 불러온 후, 해당 게임 ID로 **게임 상세 정보**를 불러오는 방식이다. 게임 상세 정보 데이터는 양이 방대하기 때문에 필요한 데이터만 추려서 가져올 예정이다.

---

## 1. 게임 ID 리스트 불러오기

이전에 받아온 PUUID로 해당 유저의 최근 게임 ID 리스트를 가져온다. 기본값인 20게임으로 진행했다.

\`\`\`
GET /lol/match/v5/matches/by-puuid/{puuid}/ids
\`\`\`

이 API는 \`List<String>\` 형태로 최근 20게임의 게임 ID를 반환한다. 게임 수를 직접 지정하고 싶다면 쿼리 파라미터로 \`count(int)\`를 넘겨주면 된다.

(API에 대한 자세한 내용은 [https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID](https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID) 참고)

---

## 2. 게임 상세 정보 불러오기

\`\`\`
GET /lol/match/v5/matches/{matchId}
\`\`\`

Riot API는 특정 유저 데이터만 골라서 받아오는 기능이 없어서, 해당 게임에 참여한 **모든 유저의 데이터**를 통째로 가져와야 한다. API 문서를 보면 알겠지만 데이터 양이 정말 어마어마하다. 그래서 필요한 필드만 추려서 별도 객체로 만들어 프론트에 넘겨주기로 했다.

(API에 대한 자세한 내용은 [https://developer.riotgames.com/apis#match-v5/GET_getMatch](https://developer.riotgames.com/apis#match-v5/GET_getMatch) 참고)

**MatchListDTO.java**

\`\`\`java
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MatchListDTO {
    private String matchId;
    private long duration;
    private String gameMode;
    private long gameEndTimestamp;
    private List<ParticipantsDTO> participantsDTO;

    public MatchListDTO(MatchDTO matchDTO) { // MatchDTO : 라이엇 API 응답 원본
        this.matchId = matchDTO.getMetadata().getMatchId();
        this.duration = matchDTO.getInfo().getGameDuration();
        this.gameMode = GameMode.getKorNameById(matchDTO.getInfo().getQueueId());
        this.gameEndTimestamp = matchDTO.getInfo().getGameEndTimestamp();
        this.participantsDTO = matchDTO.getInfo().getParticipants();
    }
}
\`\`\`

받아온 게임 ID 리스트를 순회하며 20게임의 상세 정보를 모두 가져온다.

**LolService.java**

\`\`\`java
public List<MatchListDTO> getMatchListByPuuid(String puuid) throws Exception {
    try {
        List<MatchListDTO> result = new ArrayList<>();
        log.info("Searching MatchList PUUID : {}", puuid);

        List<String> matchIdList = getRecentMatchIdsByPuuid(puuid);

        for (String matchId : matchIdList) {
            MatchDTO matchDTO = getMatchByMatchId(matchId);
            result.add(new MatchListDTO(matchDTO));
        }
        return result;
    } catch (Exception e) {
        log.error("Error Occurred while get matchList : ", e);
        throw new Exception(e);
    }
}
\`\`\`

---

## 3. 전적 데이터 화면에 추가하기

이제 프론트에서 받아온 데이터를 화면에 추가하면 된다. 챔피언, 아이템, 소환사 주문, 룬 등 일부 데이터는 이미지로 표현해야 했기 때문에 프로필 아이콘 때와 마찬가지로 Data Dragon URL을 활용했다.

- 챔피언 이미지

\`\`\`
https://ddragon.leagueoflegends.com/cdn/\${version}/img/champion/\${searchUser.championName}.png
\`\`\`

- 소환사 주문 이미지

\`\`\`
const spell1Name = SPELL_MAP[searchUser.summoner1Id];

https://ddragon.leagueoflegends.com/cdn/\${version}/img/spell/\${spell1Name}.png
\`\`\`

- 룬 이미지

\`\`\`
https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/\${RUNE_MAP[searchUser.perks.styles[0].selections[0].perk]}.png // 주 룬

https://ddragon.canisback.com/img/perk-images/Styles/\${RUNE_MAP[searchUser.perks.styles[1].style]}.png  // 보조 룬
\`\`\`

- 아이템 이미지

\`\`\`
https://ddragon.leagueoflegends.com/cdn/\${version}/img/item/\${itemId}.png
\`\`\`

소환사 주문과 룬 데이터는 API에서 내려주는 값이 ID 형태라 정식 명칭으로 변환한 뒤 URL에 넣어줘야 한다. 그래서 직접 매핑 데이터를 만들어 관리했다.

**lolUtils.ts**

\`\`\`tsx
export const SPELL_MAP: Record<number, string> = {
  1: "SummonerBoost",
  3: "SummonerExhaust",
  4: "SummonerFlash",
  6: "SummonerHaste",
  7: "SummonerHeal",
  11: "SummonerSmite",
  12: "SummonerTeleport",
  14: "SummonerDot",
  21: "SummonerBarrier",
  32: "SummonerSnowball",
};

export const RUNE_MAP: Record<number, string> = {
  // 보조 룬 스타일
  8000: "7201_Precision", // 정밀
  8100: "7200_Domination", // 지배
  8200: "7202_Sorcery", // 마법
  8300: "7203_Whimsy", // 영감
  8400: "7204_Resolve", // 결의

  // 핵심 룬 (Keystone)
  // 지배
  8112: "Domination/Electrocute/Electrocute",
  8128: "Domination/DarkHarvest/DarkHarvest",
  9923: "Domination/HailOfBlades/HailOfBlades",
  // 영감
  8351: "Inspiration/GlacialAugment/GlacialAugment",
  8360: "Inspiration/UnsealedSpellbook/UnsealedSpellbook",
  8369: "Inspiration/FirstStrike/FirstStrike",
  // 정밀
  8005: "Precision/PressTheAttack/PressTheAttack",
  8008: "Precision/LethalTempo/LethalTempoTemp",
  8021: "Precision/FleetFootwork/FleetFootwork",
  8010: "Precision/Conqueror/Conqueror",
  // 결의
  8437: "Resolve/GraspOfTheUndying/GraspOfTheUndying",
  8439: "Resolve/VeteranAftershock/VeteranAftershock",
  8465: "Resolve/Guardian/Guardian",
  // 마법
  8214: "Sorcery/SummonAery/SummonAery",
  8229: "Sorcery/ArcaneComet/ArcaneComet",
  8230: "Sorcery/PhaseRush/PhaseRush",
};
\`\`\`

매핑 데이터 원본은 아래에서 확인할 수 있다.

- 소환사 주문 : https://ddragon.leagueoflegends.com/cdn/16.5.1/data/ko_KR/summoner.json
- 룬 : https://ddragon.leagueoflegends.com/cdn/16.5.1/data/ko_KR/runesReforged.json

---

## 결과

전적 데이터를 추가한 사이트의 모습은 아래와 같다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_4_1.png)

데이터를 불러올 때 검색된 소환사뿐만 아니라 같이 게임한 모든 소환사의 정보도 가져오기 때문에 게임 상세 정보도 아래와 같이 보여줄 수 있다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_4_2.png)

이제 AI 판결 버튼에 기능을 붙여서 범인 색출만 하면 주요 기능이 완성된다.
`,gv=`---
title: "7. CHARYEOT(차렷). - 차렷봇 판결 기능 구현 - GEMINI 연동"
date: "2026-03-19"
description: "CHARYEOT - Gemini 연동하여 AI 판결 기능 구현"
tags: ["Project", "CHARYEOT", "GEMINI", "AI", "Google Cloud", "JAVA"]
---

이제 Charyeot(차렷)에서 가장 핵심 기능인 **차렷봇 판결**을 만들 차례다. 계획했던 대로 Gemini와 연동하여 구현하려고 한다.

---

## 1. Gemini API KEY 발급

Gemini와 연동하려면 먼저 [Google Cloud Console](https://console.cloud.google.com/)에서 API 키를 발급받아야 한다.

### 새 프로젝트 생성

Google Cloud에 접속하여 **새 프로젝트**를 클릭한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_1.png)

프로젝트 명을 입력한 뒤 생성한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_2.png)

### API 라이브러리 추가

생성한 프로젝트 선택 후 **API 및 서비스 → 사용 설정된 API 및 서비스** 탭에서 **'API 및 서비스 사용 설정'** 을 클릭한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_3.png)

검색창에 **'Gemini API'** 를 검색한 후 선택하여 사용 버튼을 누른다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_4.png)

### API 키 생성

**사용자 인증정보 → 사용자 인증 정보 만들기 → API 키** 를 선택해서 키를 생성한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_5.png)

키 이름만 지정하고 만들기를 클릭하면 발급이 완료된다. 발급된 키는 **'키 표시'** 버튼으로 확인할 수 있다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_6.png)

---

## 2. Charyeot과 연동

### 설정 파일에 API 키 등록

발급받은 키를 \`application.yml\`에 입력한다.

**application.yml**

\`\`\`yaml
server:
  port: 7890

spring:
  application-name: charyeot

external:
  riot:
    url: "https://%s.api.riotgames.com"
    api-key: ""
  nimble:
    url: "https://open-api.bser.io"
    api-key: ""

gemini:
  api-key: { 발급한 Gemini API 키 입력 }
\`\`\`

> ※ API 키는 외부에 절대 공개되면 안 된다. Github에 올라가는 것을 방지하기 위해 \`.gitignore\`에 반드시 설정 파일을 추가해야 한다.

**.gitignore**

\`\`\`
**/application.yml
\`\`\`

### 프롬프트 설정

이 프로젝트는 게임마다 판결 기준이 다르기 때문에 게임별로 AI에게 역할과 규칙을 지정해줘야 한다. 프롬프트는 별도 텍스트 파일로 관리하고 애플리케이션 실행 시 로딩하도록 구현했다.

이를 위하여 먼저 판결의 기준이 되는 프롬프트를 작성하였다.

**leagueOfLegendsPrompt.txt**

\`\`\`\`jsx
당신은 리그 오브 레전드 게임 분석 전문가이자 엄격한 독설 재판관입니다.
팀의 패배 원인을 데이터 기반으로 분석하고, 패배에 가장 결정적 원인을 제공한 '범인' 한 명을 선정합니다.

[분석 기준 - 우선순위 순]
1. KDA (Kill/Death/Assist): 데스가 많을수록 팀에 직접적 불이익을 준 것으로 간주. 하지만 딜러 캐릭터이면서 딜량이 높을 경우 본인의 의무를 다했다고 판단함.
2. 획득 골드 대비 딜량: 파밍(자원) 대비 효율성 측정. 포지션(탱/딜/서포터) 특성을 반드시 고려할 것.
3. 받은 피해량 대비 데스: 무의미한 죽음인지, 탱킹을 하다가 죽은 것인지 판단.
4. 아이템 빌드: 상황에 맞지 않는 아이템 선택 여부.
5. 서포트/정글의 경우 시야 점수도 일정 부분 참조하여야 한다.

[판단에 참고해야할 사항]
- 탱커 캐릭터(아이템 빌드 참조)의 기준으로는 딜량보다 받은 피해량을 중점으로 보아야한다. 탱커가 딜량까지 높을 경우에는 매우 높은 점수를 주어야한다.
- 서포터(유틸) 캐릭터는 킬 수/딜량 보다는 어시스트 수, 아군 힐량, 받은 피해를 중점으로 보아야한다.

[응답 규칙]
- 반드시 아래 JSON 형식으로만 응답하세요.
- 마크다운 코드블록(\`\`\`) 없이 순수 JSON 객체만 반환하세요. (매우 중요)
- reason은 구체적인 수치를 반드시 포함하여 논리적으로 작성하세요.
- description은 유머러스하면서도 뼈가 있는 농담으로 작성하세요.
- score는 0(무죄)에서 100(너 임마 차렷.) 사이의 '범죄 점수'를 부여하세요.

[입력 형식]
입력 형식은 Json 데이터 규격으로 전달 되며, 아래는 필드별 데이터 설명입니다.
- kills : 적을 처치한 수
- deaths : 적에게 죽은 수
- assists : 적 처치에 준 도움 수
- totalDamageDealtToChampions : 적에게 입힌 피해량
- totalHealsOnTeammates : 아군에게 준 치유량
- totalDamageTaken : 적에게 받은 피해수
- role : 역할군
- championName : 선택한 챔피언
- visionScore : 시야 점수
- riotIdGameName : 소환사명
- riotIdTagline: 소환사 태그
- item0~6 : 해당 게임에서 구매한 아이템

[응답 형식]
{
  "most_responsible_player": {
    "summonerName": "소환사명",
    "summonerTag" : "소환사 태그",
    "champion": "챔피언명",
    "reason": "선정 이유 (구체적 수치 포함, 2~3줄)",
    "description": "재치 있는 한줄평",
    "score": 0
  }
}

[분석할 매치 데이터]
\`\`\`\`

**PromptLoader.java**

\`\`\`java
@Slf4j
@Getter
@Component
public class PromptLoader {
    private String leagueOfLegendsPrompt;

    @PostConstruct
    public void init() {
        log.info("리그오브레전드 프롬프트 로딩 시작...");
        this.leagueOfLegendsPrompt = load("leagueOfLegends");
        log.info("리그오브레전드 프롬프트 로딩 성공");
    }

    public String load(String gameName) {
        try {
            // resources/prompts/leagueOfLegends.txt 경로에서 읽어옴
            Resource resource = new ClassPathResource("prompts/" + gameName + ".txt");
            byte[] bdata = FileCopyUtils.copyToByteArray(resource.getInputStream());
            return new String(bdata, StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException("프롬프트 파일을 찾을 수 없습니다: " + gameName, e);
        }
    }
}
\`\`\`

### Gemini Bean 설정

**GeminiConfig.java**

\`\`\`java
@Configuration
public class GeminiConfig {

    @Value("\${gemini.api-key}")
    private String apiKey;

    @Bean
    public Client geminiClient() {
        return Client.builder()
                .apiKey(apiKey)
                .build();
    }

    @Bean
    public GenerateContentConfig lolConfig(PromptLoader promptLoader) {
        Content instructionContent = Content.builder()
                .role("system")
                .parts(List.of(Part.fromText(promptLoader.getLeagueOfLegendsPrompt())))
                .build();

        return GenerateContentConfig.builder()
                .systemInstruction(instructionContent)
                .responseMimeType("application/json") // 응답을 JSON으로 강제
                .build();
    }
}
\`\`\`

Gemini API에서 \`role\`은 아래 세 가지로 구분된다.

| role     | 역할        | 설명                                                                               |
| -------- | ----------- | ---------------------------------------------------------------------------------- |
| \`system\` | 감독/헌법   | 모델이 대화 내내 지켜야 할 절대적인 규칙과 정체성을 부여한다                       |
| \`user\`   | 사용자/입력 | 실제 질문이나 데이터를 전달할 때 사용한다                                          |
| \`model\`  | AI/출력     | Gemini의 이전 답변. 멀티턴(대화 기록) 구현 시 과거 답변을 학습시키기 위해 사용한다 |

---

## 3. 판결 로직 구현

클라이언트로부터 \`matchId\`를 받아 게임 데이터를 조회한 뒤, Gemini에게 보낼 형태로 파싱해서 전달하는 방식으로 구현했다.

**GeminiController.java**

\`\`\`java
@PostMapping("/v1/charyeot/lol/{matchId}")
private ResponseEntity<LolCharyeotResponse> getLolJudgement(@PathVariable("matchId") String matchId) {
    try {
        log.info("리그오브레전드 게임 아이디 : {} 판결 시작...", matchId);
        MatchDTO matchDTO = lolService.getMatchByMatchId(matchId);
        return ResponseEntity.ok(geminiService.getLolJudgement(matchDTO));
    } catch (Exception e) {
        log.error("리그오브레전드 판결 도중 에러 발생 : ", e);
        return ResponseEntity.internalServerError().build();
    }
}
\`\`\`

**GeminiService.java**

\`\`\`java
public LolCharyeotResponse getLolJudgement(MatchDTO matchDTO) {
    List<LolCharyeotRequest> request = generateLolRequest(matchDTO.getInfo().getParticipants());
    Gson gson = new Gson();
    String matchData = gson.toJson(request);
    String aiResponseJson = getJudgment(GameType.LEAGUE_OF_LEGENDS, matchData);
    return gson.fromJson(aiResponseJson, LolCharyeotResponse.class);
}

// 패배 팀 데이터만 추려서 파싱
private List<LolCharyeotRequest> generateLolRequest(List<ParticipantsDTO> participantsList) {
    return participantsList.stream()
            .filter(p -> !p.isWin())
            .map(p -> LolCharyeotRequest.builder()
                    .kills(p.getKills())
                    .deaths(p.getDeaths())
                    .assist(p.getAssists())
                    .championName(p.getChampionName())
                    .riotGameName(p.getRiotIdGameName())
                    .riotTagline(p.getRiotIdTagline())
                    .role(p.getRole())
                    .totalDamageDealtToChampions(p.getTotalDamageDealtToChampions())
                    .totalDamageTaken(p.getTotalDamageTaken())
                    .totalHealsOnTeammates(p.getTotalHealsOnTeammates())
                    .visionScore(p.getVisionScore())
                    .item0(lolItemInfoFetcher.getItemName(p.getItem0()))
                    .item1(lolItemInfoFetcher.getItemName(p.getItem1()))
                    .item2(lolItemInfoFetcher.getItemName(p.getItem2()))
                    .item3(lolItemInfoFetcher.getItemName(p.getItem3()))
                    .item4(lolItemInfoFetcher.getItemName(p.getItem4()))
                    .item5(lolItemInfoFetcher.getItemName(p.getItem5()))
                    .item6(lolItemInfoFetcher.getItemName(p.getItem6()))
                    .build())
            .toList();
}

public String getJudgment(GameType game, String matchDataJson) {
    GenerateContentConfig selectedConfig = switch (game) {
        case LEAGUE_OF_LEGENDS -> lolConfig;
        case ETERNAL_RETURN -> erConfig;
    };

    GenerateContentResponse response = client.models.generateContent(
            "gemini-3-flash-preview",
            "분석할 데이터:\\n" + matchDataJson,
            selectedConfig
    );

    response.usageMetadata().ifPresent(usage -> {
        int input = usage.promptTokenCount().orElse(0);
        int output = usage.candidatesTokenCount().orElse(0);
        int total = usage.totalTokenCount().orElse(0);
        log.info("비용 분석 - 입력: {}, 출력: {}, 총합: {}", input, output, total);
    });

    return response.text();
}
\`\`\`

### Gemini에 전달되는 요청 구조

파싱한 데이터와 \`GenerateContentConfig\`를 함께 보내면 아래와 같은 형태로 요청이 전달된다.

\`\`\`json
{
  "system_instruction": {
    "role": "system",
    "parts": [
      {
        "text": "너는 리그 오브 레전드 전문 독설 재판관이다. 유저의 전적을 분석해... (생략)"
      }
    ]
  },
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "분석할 데이터:\\n{ \\"kills\\": 0, \\"deaths\\": 10, ... }"
        }
      ]
    }
  ],
  "generation_config": {
    "response_mime_type": "application/json"
  }
}
\`\`\`

프롬프트는 \`system\` role로, 파싱한 게임 데이터는 \`user\` role로 전달되는 구조다.

---

## 결과

판결 버튼을 클릭하면 아래와 같이 판결 결과를 확인할 수 있다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_7.png)

> ※ 위에서 범인으로 지목된 플레이어는 본인이다.

생각보다 말을 좀 세게 하는 것 같긴 한데, 그게 또 재밌어서 만족스럽다.

이렇게 게임 범인을 찾는 사이트 기능을 완성했다. 앞으로는 여기서 게임 종류를 추가해 나가며 추가하면 재밌을 것 같은 기능들을 추가해 나갈 예정이다.

배포의 경우는 현재 게임사에서 발급 받은 Key가 개인용 키라 후에 배포를 하기로 결심했을 때 키를 새로 발급받고 진행할 예정이다.
`,yv=`---
title: "ChronicleMap - GC 메모리 해제 실패 사건"
date: "2026-03-26"
description: "트러블슈팅 - 크로니클맵 - gc 메모리 해제 실패 cpu 폭증에 관한 회고"
tags: ["트러블슈팅", "JAVA", "Spring Boot"]
---

전 직장에서 개발을 담당했던 프로그램은 대용량 데이터를 처리함과 동시에, 프로그램 종료 시 처리 중이던 데이터를 파일로 백업해서 재기동 시 종료됐던 그대로 다시 실행되게끔 개발하는 것이 목표였다.

여러 자료구조를 찾다가 해당 조건을 모두 충족하는 **Chronicle Map**이라는 자료구조를 사용하게 되었다.

---

## Chronicle Map이란?

크로니클 맵(Chronicle Map)은 빠른 속도 및 다중 프로세스 지원을 위해 설계된 키-값 형태의 자료구조이다.

\`ConcurrentHashMap\`과 동일하게 \`ConcurrentMap\` 인터페이스를 구현하지만, 데이터가 저장되는 위치가 **JVM 외부(Off-heap)** 라는 점이 다르다.

### 특징

- **빠른 속도** — 초당 수백만 건의 작업을 수행하며, 메모리에 직접 데이터를 저장하고 디스크 I/O를 최소화한다.
- **영속성** — 저장된 데이터를 디스크에 지속적으로 저장하여 프로그램이 다운되어도 데이터 유실이 없다.
- **동시성 지원** — 멀티 스레드 환경에서 여러 스레드가 접근하더라도 데이터의 일관성을 유지할 수 있다.

이 Chronicle Map을 도입하면서 빠른 처리 속도, 간편한 파일 저장 기능 등으로 프로그램 개발을 완성하여 고객사에 배포되었다. 하지만 배포 후 며칠 만에 고객사 측에서 문의가 들어왔다.

---

## 문제 발생

> "지금 해당 프로그램이 설치된 서버의 CPU가 폭증하는데 이유가 있나요?"

CPU 폭증 현상이 발생한 것이다. 해당 현상은 프로그램 재기동 시 일시적으로 해소되었으며, 불규칙적으로 발생했다.

문제를 해결하기 위해 내부적으로 테스트를 진행했다. 프로그램 하나에 지속적으로 데이터를 처리시키며 약 40분가량 구동시키면서 VisualVM으로 CPU 증가량을 확인했다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/chroniclemap_gc_1.png)

당시 \`top\` 명령어도 함께 걸어두고 확인하고 있었는데, GC(Garbage Collector)가 CPU를 굉장히 많이 잡아먹는 것을 확인할 수 있었다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/chroniclemap_gc_2.png)

급기야 메모리가 꽉 차 **OOM(Out Of Memory)** 까지 발생했다.

\`\`\`bash
2024-04-01 19:00:10.803 ERROR(1859646)[http-nio-8196-exec-2658] [o.a.c.c.C.[.[.[.[dispatcherServlet]:175] Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Handler dispatch failed; nested exception is java.lang.OutOfMemoryError: Java heap space] with root cause
java.lang.**OutOfMemoryError**: Java heap space
	at java.base/java.lang.Class.getDeclaredMethods0(Native Method)
	at java.base/java.lang.Class.privateGetDeclaredMethods(Class.java:3166)
	at java.base/java.lang.Class.getDeclaredMethods(Class.java:2309)
\`\`\`

특정 스레드에서 메모리 해제에 실패하여 메모리가 점점 쌓이고, GC가 최대로 기동되면서 CPU를 잡아먹는 현상이라고 판단하여 기능별 테스트를 진행했다. 그 결과 문제가 발생한 스레드들의 공통점은 **ChronicleMap을 사용하는 스레드**라는 것을 확인할 수 있었다.

이후 ChronicleMap을 제거하고 비동기 처리에 안전한 \`BlockingQueue\`와 \`ConcurrentHashMap\`으로 대체하여 테스트를 진행했다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/chroniclemap_gc_3.png)

지속적으로 데이터를 흘려보내며 테스트를 진행했지만, ChronicleMap을 제거한 후에는 해당 현상이 더 이상 발생하지 않는 것을 확인했다.

---

## GC는 왜 메모리를 해제하지 못했을까

### 추측 #1 - Off-heap 방식의 동작으로 인한 문제

첫 번째로 의심한 것은 ChronicleMap의 동작 방식(off-heap)이었다.

> 💡**off-heap이란?**
>
> JVM의 heap 메모리가 아닌 JVM 외부의 메모리에 데이터를 저장하는 방식이다.

ChronicleMap은 off-heap 방식으로 데이터를 저장하지만, \`values()\` 혹은 \`get()\`으로 데이터를 처리할 때는 JVM 내부 heap 메모리에 할당된다.

프로그램 특성상 빠르게 대량 데이터를 처리해야 했기 때문에, DB에서 수만 개의 데이터를 계속 가져오면서 \`values()\`로 ChronicleMap에서 데이터를 반복 조회하는 구조였다. 이때 수만 개의 데이터가 heap 메모리에 지속적으로 할당되면서 GC 처리 속도보다 할당 속도가 더 빨라 OOM이 발생한다는 것이 첫 번째 가설이었다.

테스트를 진행했다. 데이터를 흘려보내다가 어느 정도 메모리가 찼을 때 데이터 전달을 중단했다. 그런데 GC가 몇십 분이 지나도 메모리를 해제하지 못하는 것을 확인했다. ChronicleMap에서 데이터를 처리하고 \`remove()\`까지 했는데도 불구하고 GC가 메모리를 해제하지 못하고 있었다.

\`\`\`java
for (SmsMessage smsMessage : smsFetcherQueue.values()) {
    tpsLimiter.acquire();
    smsFetcherQueue.remove(smsMessage.getMsgId()); // 처리 후 제거까지 했는데...
    // ... 처리 로직
}
\`\`\`

즉 문제는 GC 처리 속도가 아니었다. **GC가 해당 데이터를 수집 대상(unreachable)으로 아예 인식하지 못하고 있다는 것이다.**

---

### 추측 #2 - ChronicleMap 내부에서 데이터를 참조하고 있다

GC가 수집 대상으로 인식하지 못했다는 건 **어딘가에서 참조하고 있다**는 뜻이었다. ChronicleMap의 내부 동작을 다시 찾아보았다.

### GC Root란?

GC가 어떻게 **살아있는 객체**를 판단하는지 이해할 필요가 있었다.

GC는 객체를 직접 하나씩 확인하는 게 아니라, **GC Root에서 출발해서 참조를 타고 이동**하며 도달 가능한 객체를 살아있는 것으로 판단한다.

\`\`\`
GC Root
  └── 참조 → 객체 A
                └── 참조 → 객체 B  ← GC 수집 불가 (살아있음 판정)

어디서도 참조되지 않는 객체 C ← GC 수집 대상
\`\`\`

GC Root의 종류:

- 현재 실행 중인 메서드의 **스택 변수**
- **Static 변수** (클래스가 로드된 한 영원히 살아있음)
- 활성화된 **Thread** **(이번 케이스의 핵심!)**
- JNI 참조

### ChronicleMap은 내부적으로 ThreadLocal을 사용한다

ChronicleMap의 소스코드(\`VanillaChronicleMap.java\`)를 보면 내부에 다음 필드가 존재한다.

\`\`\`java
transient ThreadLocal<ContextHolder> cxt;
\`\`\`

\`values()\`로 역직렬화를 수행할 때 ChronicleMap은 내부적으로 이 ThreadLocal에 **MapEntry context를 저장**한다. 즉, 개발자가 명시적으로 ThreadLocal을 사용하지 않아도 라이브러리 내부에서 알아서 ThreadLocal에 context를 집어넣는 구조다.

\`\`\`
public IterationContext<K, V, R> iterationContext() {
    return (IterationContext)this.i() ← 여기서 i() 호출
        .getContext(CompiledMapIterationContext.class, ...);
}
\`\`\`

\`\`\`
    final ChainingInterface i() {
        ThreadLocal<ContextHolder> cxt = this.cxt;
        if (cxt == null) {
            throw new ChronicleHashClosedException(this);
        } else {
            ContextHolder contextHolder = (ContextHolder)cxt.get();
            ChainingInterface iterationContext;
            if (contextHolder == null) {
                iterationContext = this.newIterationContext();

                try {
                    contextHolder = new ContextHolder(iterationContext);
                    this.addContext(contextHolder);
                    cxt.set(contextHolder); <- 여기서 ThreadLocal.set() ← context 저장
                    return iterationContext;
                } ...
            }
        }
    }
\`\`\`

\`\`\`
Sender Thread가 values() 호출
        ↓
ChronicleMap 내부에서
ThreadLocal<ContextHolder>에 context 저장
        ↓
역직렬화된 SmsMessage 참조가 거기에 묶임
        ↓
스레드가 살아있는 한 GC Root로 유지됨
        ↓
GC가 아직 살아있는 객체로 판정 → 수집 불가
\`\`\`

### ChronicleMap에서 remove()를 해도 왜 해제가 안 됐을까

\`remove()\`는 off-heap(ChronicleMap 저장소)에서 해당 엔트리를 삭제한다. 하지만 **이미 heap에 올라온 객체는 건드리지 않는다.**

\`\`\`
values() 호출 순간
    → 전체 엔트리 역직렬화
    → SmsMessage 객체 N만 개가 heap에 생성
    → ThreadLocal context에 참조 저장  ← 이미 끝남
          ↓
remove() 호출
    → off-heap 엔트리 삭제? -> ㅇㅇ 삭제
    → heap에 이미 올라온 객체 삭제?  → ㄴㄴ 그대로
    → ThreadLocal이 여전히 참조 중?  → ㅇㅇ 그대로 참조함
          ↓
GC → "아직 살아있는 객체" 판정 → 수집 불가
\`\`\`

창고(off-heap)에서 물건을 꺼내 방(heap)에 쭉 늘어놓은 뒤 창고 목록만 지운 셈이다. 방에 늘어놓은 물건은 그대로인데 창고 정리만 된 것이다.

### ThreadLocal cleanup은 lazy하게 동작한다

검색해보니 ChronicleMap의 ThreadLocal 처리 방식에는 알려진 문제가 있다.

> 💡 **ThreadLocal Cleanup?**
>
> ThreadLocalMap에서 key(ThreadLocal)가 GC됐지만 value는 강한 참조로 남아있는 엔트리를 청소하는 작업.
> (value 데이터는 개발자가 직접 넣은 데이터라 GC가 함부로 수거할 수 없다고 함.)

ThreadLocalMap은 cleanup을 \`set()\`, \`initialValue()\`, \`remove() (<- ChronicleMap의 remove가 아닌 ThreadLocal의 remove이다.)\` 호출 시에만 수행하고, **\`get()\`의 hot path(가장 빈번하게 호출되는 코드 경로)에서는 수행하지 않는다.** \`values()\` 이터레이션은 내부적으로 \`get()\`을 반복 호출하는 구조이기 때문에 clean up을 하지 않고 \`remove()(<- ChronicleMap 의 remove)\` 또한 off-heap 엔트리만 삭제하기 때문에 clean up이 되지 않았던 것 같다.

거기에 더해 해당 프로그램에서 해당 스레드는 \`while(true)\` 루프로 동작하는 구조였다. 프로그램 종료 전 까지는 **스레드가 절대 종료되지 않기 때문에 ThreadLocal도 영원히 살아남고**, 거기에 매달린 SmsMessage 객체들도 GC가 끝내 수집하지 못했던 것이다.

\`\`\`
Sender Thread-1 (while(true), 종료 없음)
└── Thread-1의 ThreadLocal
    └── ChronicleMap이 넣어둔 MapEntry context
        └── 역직렬화된 SmsMessage 참조들 ← GC 수집 불가

Sender Thread-2 (while(true), 종료 없음)
└── Thread-2의 ThreadLocal
    └── 동일한 구조

... × N 스레드
\`\`\`

이것이 데이터 유입을 멈추고 수십 분이 지나도 메모리가 줄어들지 않았던 실제 이유라고 생각한다.

---

## 결론

| 의심 원인                         | 실제 여부         | 설명                                                                                                             |
| --------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| off-heap 방식 자체의 문제         | ❌ 직접 원인 아님 | off-heap이 역직렬화의 소스였지만 직접 원인은 아님                                                                |
| GC 처리 속도 부족                 | ❌ 직접 원인 아님 | 속도가 아니라 수집 대상 인식 자체가 안 됨                                                                        |
| **ChronicleMap 내부 ThreadLocal** | ✅ 원인(추측)     | values() 호출 시 내부 ThreadLocal에 참조가 묶이고, lazy cleanup + 스레드 미종료로 인해 GC가 영구적으로 수집 불가 |

ChronicleMap은 **대용량 데이터를 오래 보관**하는 시나리오에 적합한 구조였던 것 같다. 이 프로그램처럼 빠르게 put/remove하면서 \`values()\`로 전체를 반복 스캔하는 패턴과는 처음부터 맞지 않았던 것이다.

이렇게 ChronicleMap 내부 동작을 확인해보니\`BlockingQueue\`와 \`ConcurrentHashMap\`으로 교체한 이후 문제가 사라진 이유도 명확해졌다. 데이터가 처음부터 heap에 있어 off-heap/heap 왕복 자체가 없고, ThreadLocal을 사용할 필요도 없이 Heap에 할당된 참조만 반환하면 된다. GC가 모든 객체의 생명주기를 온전히 관리할 수 있는 구조였기 때문에 문제가 사라졌다고 생각한다.

> **오늘의 교훈**
>
> 새로운 라이브러리를 쓸 때에는 충분한 공부와 충분한 테스트를 거치도록 하자.

---

## 참고 자료

- [Oracle OpenGrok Issue #2586 — ChronicleMap ThreadLocal memory leak](https://github.com/oracle/opengrok/issues/2586)
- [클래스로더 메모리 누수 원인과 해결법 (ThreadLocal 사용시 주의점)](https://woojoovove.tistory.com/94)
- [VanillaChronicleMap.java 소스코드](https://github.com/OpenHFT/Chronicle-Map/blob/master/src/main/java/net/openhft/chronicle/map/VanillaChronicleMap.java)
`;function Ac(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rl=Ac();function jm(u){rl=u}var Ia={exec:()=>null};function de(u,s=""){let r=typeof u=="string"?u:u.source,c={replace:(f,h)=>{let p=typeof h=="string"?h:h.source;return p=p.replace(Pe.caret,"$1"),r=r.replace(f,p),c},getRegex:()=>new RegExp(r,s)};return c}var bv=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Pe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i")},vv=/^(?:[ \t]*(?:\n|$))+/,xv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Sv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ei=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ev=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_c=/(?:[*+-]|\d{1,9}[.)])/,Hm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Um=de(Hm).replace(/bull/g,_c).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Tv=de(Hm).replace(/bull/g,_c).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Cc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Av=/^[^\n]+/,Rc=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,_v=de(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Rc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Cv=de(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_c).getRegex(),Ou="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Mc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Rv=de("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Mc).replace("tag",Ou).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Lm=de(Cc).replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex(),Mv=de(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Lm).getRegex(),Nc={blockquote:Mv,code:xv,def:_v,fences:Sv,heading:Ev,hr:ei,html:Rv,lheading:Um,list:Cv,newline:vv,paragraph:Lm,table:Ia,text:Av},um=de("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex(),Nv={...Nc,lheading:Tv,table:um,paragraph:de(Cc).replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",um).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex()},Dv={...Nc,html:de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Mc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ia,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:de(Cc).replace("hr",ei).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Um).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ov=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Gm=/^( {2,}|\\)\n(?!\s*$)/,kv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ku=/[\p{P}\p{S}]/u,Dc=/[\s\p{P}\p{S}]/u,Bm=/[^\s\p{P}\p{S}]/u,wv=de(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Dc).getRegex(),qm=/(?!~)[\p{P}\p{S}]/u,jv=/(?!~)[\s\p{P}\p{S}]/u,Hv=/(?:[^\s\p{P}\p{S}]|~)/u,Uv=de(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",bv?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Qm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Lv=de(Qm,"u").replace(/punct/g,ku).getRegex(),Gv=de(Qm,"u").replace(/punct/g,qm).getRegex(),Ym="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Bv=de(Ym,"gu").replace(/notPunctSpace/g,Bm).replace(/punctSpace/g,Dc).replace(/punct/g,ku).getRegex(),qv=de(Ym,"gu").replace(/notPunctSpace/g,Hv).replace(/punctSpace/g,jv).replace(/punct/g,qm).getRegex(),Qv=de("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Bm).replace(/punctSpace/g,Dc).replace(/punct/g,ku).getRegex(),Yv=de(/\\(punct)/,"gu").replace(/punct/g,ku).getRegex(),Vv=de(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Xv=de(Mc).replace("(?:-->|$)","-->").getRegex(),Zv=de("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Xv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ru=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Jv=de(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ru).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Vm=de(/^!?\[(label)\]\[(ref)\]/).replace("label",Ru).replace("ref",Rc).getRegex(),Xm=de(/^!?\[(ref)\](?:\[\])?/).replace("ref",Rc).getRegex(),Kv=de("reflink|nolink(?!\\()","g").replace("reflink",Vm).replace("nolink",Xm).getRegex(),sm=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,zc={_backpedal:Ia,anyPunctuation:Yv,autolink:Vv,blockSkip:Uv,br:Gm,code:Ov,del:Ia,emStrongLDelim:Lv,emStrongRDelimAst:Bv,emStrongRDelimUnd:Qv,escape:zv,link:Jv,nolink:Xm,punctuation:wv,reflink:Vm,reflinkSearch:Kv,tag:Zv,text:kv,url:Ia},$v={...zc,link:de(/^!?\[(label)\]\((.*?)\)/).replace("label",Ru).getRegex(),reflink:de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ru).getRegex()},dc={...zc,emStrongRDelimAst:qv,emStrongLDelim:Gv,url:de(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",sm).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:de(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",sm).getRegex()},Iv={...dc,br:de(Gm).replace("{2,}","*").getRegex(),text:de(dc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xu={normal:Nc,gfm:Nv,pedantic:Dv},Ja={normal:zc,gfm:dc,breaks:Iv,pedantic:$v},Wv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rm=u=>Wv[u];function hn(u,s){if(s){if(Pe.escapeTest.test(u))return u.replace(Pe.escapeReplace,rm)}else if(Pe.escapeTestNoEncode.test(u))return u.replace(Pe.escapeReplaceNoEncode,rm);return u}function cm(u){try{u=encodeURI(u).replace(Pe.percentDecode,"%")}catch{return null}return u}function om(u,s){var h;let r=u.replace(Pe.findPipe,(p,g,b)=>{let m=!1,E=g;for(;--E>=0&&b[E]==="\\";)m=!m;return m?"|":" |"}),c=r.split(Pe.splitPipe),f=0;if(c[0].trim()||c.shift(),c.length>0&&!((h=c.at(-1))!=null&&h.trim())&&c.pop(),s)if(c.length>s)c.splice(s);else for(;c.length<s;)c.push("");for(;f<c.length;f++)c[f]=c[f].trim().replace(Pe.slashPipe,"|");return c}function Ka(u,s,r){let c=u.length;if(c===0)return"";let f=0;for(;f<c&&u.charAt(c-f-1)===s;)f++;return u.slice(0,c-f)}function Fv(u,s){if(u.indexOf(s[1])===-1)return-1;let r=0;for(let c=0;c<u.length;c++)if(u[c]==="\\")c++;else if(u[c]===s[0])r++;else if(u[c]===s[1]&&(r--,r<0))return c;return r>0?-2:-1}function fm(u,s,r,c,f){let h=s.href,p=s.title||null,g=u[1].replace(f.other.outputLinkReplace,"$1");c.state.inLink=!0;let b={type:u[0].charAt(0)==="!"?"image":"link",raw:r,href:h,title:p,text:g,tokens:c.inlineTokens(g)};return c.state.inLink=!1,b}function Pv(u,s,r){let c=u.match(r.other.indentCodeCompensation);if(c===null)return s;let f=c[1];return s.split(`
`).map(h=>{let p=h.match(r.other.beginningSpace);if(p===null)return h;let[g]=p;return g.length>=f.length?h.slice(f.length):h}).join(`
`)}var Mu=class{constructor(u){Te(this,"options");Te(this,"rules");Te(this,"lexer");this.options=u||rl}space(u){let s=this.rules.block.newline.exec(u);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(u){let s=this.rules.block.code.exec(u);if(s){let r=s[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ka(r,`
`)}}}fences(u){let s=this.rules.block.fences.exec(u);if(s){let r=s[0],c=Pv(r,s[3]||"",this.rules);return{type:"code",raw:r,lang:s[2]?s[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):s[2],text:c}}}heading(u){let s=this.rules.block.heading.exec(u);if(s){let r=s[2].trim();if(this.rules.other.endingHash.test(r)){let c=Ka(r,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(r=c.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(u){let s=this.rules.block.hr.exec(u);if(s)return{type:"hr",raw:Ka(s[0],`
`)}}blockquote(u){let s=this.rules.block.blockquote.exec(u);if(s){let r=Ka(s[0],`
`).split(`
`),c="",f="",h=[];for(;r.length>0;){let p=!1,g=[],b;for(b=0;b<r.length;b++)if(this.rules.other.blockquoteStart.test(r[b]))g.push(r[b]),p=!0;else if(!p)g.push(r[b]);else break;r=r.slice(b);let m=g.join(`
`),E=m.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${m}`:m,f=f?`${f}
${E}`:E;let T=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,h,!0),this.lexer.state.top=T,r.length===0)break;let z=h.at(-1);if((z==null?void 0:z.type)==="code")break;if((z==null?void 0:z.type)==="blockquote"){let D=z,B=D.raw+`
`+r.join(`
`),L=this.blockquote(B);h[h.length-1]=L,c=c.substring(0,c.length-D.raw.length)+L.raw,f=f.substring(0,f.length-D.text.length)+L.text;break}else if((z==null?void 0:z.type)==="list"){let D=z,B=D.raw+`
`+r.join(`
`),L=this.list(B);h[h.length-1]=L,c=c.substring(0,c.length-z.raw.length)+L.raw,f=f.substring(0,f.length-D.raw.length)+L.raw,r=B.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:h,text:f}}}list(u){var r,c;let s=this.rules.block.list.exec(u);if(s){let f=s[1].trim(),h=f.length>1,p={type:"list",raw:"",ordered:h,start:h?+f.slice(0,-1):"",loose:!1,items:[]};f=h?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=h?f:"[*+-]");let g=this.rules.other.listItemRegex(f),b=!1;for(;u;){let E=!1,T="",z="";if(!(s=g.exec(u))||this.rules.block.hr.test(u))break;T=s[0],u=u.substring(T.length);let D=s[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,V=>" ".repeat(3*V.length)),B=u.split(`
`,1)[0],L=!D.trim(),G=0;if(this.options.pedantic?(G=2,z=D.trimStart()):L?G=s[1].length+1:(G=s[2].search(this.rules.other.nonSpaceChar),G=G>4?1:G,z=D.slice(G),G+=s[1].length),L&&this.rules.other.blankLine.test(B)&&(T+=B+`
`,u=u.substring(B.length+1),E=!0),!E){let V=this.rules.other.nextBulletRegex(G),K=this.rules.other.hrRegex(G),H=this.rules.other.fencesBeginRegex(G),F=this.rules.other.headingBeginRegex(G),ee=this.rules.other.htmlBeginRegex(G);for(;u;){let se=u.split(`
`,1)[0],I;if(B=se,this.options.pedantic?(B=B.replace(this.rules.other.listReplaceNesting,"  "),I=B):I=B.replace(this.rules.other.tabCharGlobal,"    "),H.test(B)||F.test(B)||ee.test(B)||V.test(B)||K.test(B))break;if(I.search(this.rules.other.nonSpaceChar)>=G||!B.trim())z+=`
`+I.slice(G);else{if(L||D.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||H.test(D)||F.test(D)||K.test(D))break;z+=`
`+B}!L&&!B.trim()&&(L=!0),T+=se+`
`,u=u.substring(se.length+1),D=I.slice(G)}}p.loose||(b?p.loose=!0:this.rules.other.doubleBlankLine.test(T)&&(b=!0)),p.items.push({type:"list_item",raw:T,task:!!this.options.gfm&&this.rules.other.listIsTask.test(z),loose:!1,text:z,tokens:[]}),p.raw+=T}let m=p.items.at(-1);if(m)m.raw=m.raw.trimEnd(),m.text=m.text.trimEnd();else return;p.raw=p.raw.trimEnd();for(let E of p.items){if(this.lexer.state.top=!1,E.tokens=this.lexer.blockTokens(E.text,[]),E.task){if(E.text=E.text.replace(this.rules.other.listReplaceTask,""),((r=E.tokens[0])==null?void 0:r.type)==="text"||((c=E.tokens[0])==null?void 0:c.type)==="paragraph"){E.tokens[0].raw=E.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),E.tokens[0].text=E.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let z=this.lexer.inlineQueue.length-1;z>=0;z--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[z].src)){this.lexer.inlineQueue[z].src=this.lexer.inlineQueue[z].src.replace(this.rules.other.listReplaceTask,"");break}}let T=this.rules.other.listTaskCheckbox.exec(E.raw);if(T){let z={type:"checkbox",raw:T[0]+" ",checked:T[0]!=="[ ]"};E.checked=z.checked,p.loose?E.tokens[0]&&["paragraph","text"].includes(E.tokens[0].type)&&"tokens"in E.tokens[0]&&E.tokens[0].tokens?(E.tokens[0].raw=z.raw+E.tokens[0].raw,E.tokens[0].text=z.raw+E.tokens[0].text,E.tokens[0].tokens.unshift(z)):E.tokens.unshift({type:"paragraph",raw:z.raw,text:z.raw,tokens:[z]}):E.tokens.unshift(z)}}if(!p.loose){let T=E.tokens.filter(D=>D.type==="space"),z=T.length>0&&T.some(D=>this.rules.other.anyLine.test(D.raw));p.loose=z}}if(p.loose)for(let E of p.items){E.loose=!0;for(let T of E.tokens)T.type==="text"&&(T.type="paragraph")}return p}}html(u){let s=this.rules.block.html.exec(u);if(s)return{type:"html",block:!0,raw:s[0],pre:s[1]==="pre"||s[1]==="script"||s[1]==="style",text:s[0]}}def(u){let s=this.rules.block.def.exec(u);if(s){let r=s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=s[2]?s[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",f=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):s[3];return{type:"def",tag:r,raw:s[0],href:c,title:f}}}table(u){var p;let s=this.rules.block.table.exec(u);if(!s||!this.rules.other.tableDelimiter.test(s[2]))return;let r=om(s[1]),c=s[2].replace(this.rules.other.tableAlignChars,"").split("|"),f=(p=s[3])!=null&&p.trim()?s[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:s[0],header:[],align:[],rows:[]};if(r.length===c.length){for(let g of c)this.rules.other.tableAlignRight.test(g)?h.align.push("right"):this.rules.other.tableAlignCenter.test(g)?h.align.push("center"):this.rules.other.tableAlignLeft.test(g)?h.align.push("left"):h.align.push(null);for(let g=0;g<r.length;g++)h.header.push({text:r[g],tokens:this.lexer.inline(r[g]),header:!0,align:h.align[g]});for(let g of f)h.rows.push(om(g,h.header.length).map((b,m)=>({text:b,tokens:this.lexer.inline(b),header:!1,align:h.align[m]})));return h}}lheading(u){let s=this.rules.block.lheading.exec(u);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(u){let s=this.rules.block.paragraph.exec(u);if(s){let r=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:r,tokens:this.lexer.inline(r)}}}text(u){let s=this.rules.block.text.exec(u);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(u){let s=this.rules.inline.escape.exec(u);if(s)return{type:"escape",raw:s[0],text:s[1]}}tag(u){let s=this.rules.inline.tag.exec(u);if(s)return!this.lexer.state.inLink&&this.rules.other.startATag.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:s[0]}}link(u){let s=this.rules.inline.link.exec(u);if(s){let r=s[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let h=Ka(r.slice(0,-1),"\\");if((r.length-h.length)%2===0)return}else{let h=Fv(s[2],"()");if(h===-2)return;if(h>-1){let p=(s[0].indexOf("!")===0?5:4)+s[1].length+h;s[2]=s[2].substring(0,h),s[0]=s[0].substring(0,p).trim(),s[3]=""}}let c=s[2],f="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(c);h&&(c=h[1],f=h[3])}else f=s[3]?s[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?c=c.slice(1):c=c.slice(1,-1)),fm(s,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:f&&f.replace(this.rules.inline.anyPunctuation,"$1")},s[0],this.lexer,this.rules)}}reflink(u,s){let r;if((r=this.rules.inline.reflink.exec(u))||(r=this.rules.inline.nolink.exec(u))){let c=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),f=s[c.toLowerCase()];if(!f){let h=r[0].charAt(0);return{type:"text",raw:h,text:h}}return fm(r,f,r[0],this.lexer,this.rules)}}emStrong(u,s,r=""){let c=this.rules.inline.emStrongLDelim.exec(u);if(!(!c||c[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(c[1]||c[2])||!r||this.rules.inline.punctuation.exec(r))){let f=[...c[0]].length-1,h,p,g=f,b=0,m=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,s=s.slice(-1*u.length+f);(c=m.exec(s))!=null;){if(h=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!h)continue;if(p=[...h].length,c[3]||c[4]){g+=p;continue}else if((c[5]||c[6])&&f%3&&!((f+p)%3)){b+=p;continue}if(g-=p,g>0)continue;p=Math.min(p,p+g+b);let E=[...c[0]][0].length,T=u.slice(0,f+c.index+E+p);if(Math.min(f,p)%2){let D=T.slice(1,-1);return{type:"em",raw:T,text:D,tokens:this.lexer.inlineTokens(D)}}let z=T.slice(2,-2);return{type:"strong",raw:T,text:z,tokens:this.lexer.inlineTokens(z)}}}}codespan(u){let s=this.rules.inline.code.exec(u);if(s){let r=s[2].replace(this.rules.other.newLineCharGlobal," "),c=this.rules.other.nonSpaceChar.test(r),f=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return c&&f&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:s[0],text:r}}}br(u){let s=this.rules.inline.br.exec(u);if(s)return{type:"br",raw:s[0]}}del(u){let s=this.rules.inline.del.exec(u);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(u){let s=this.rules.inline.autolink.exec(u);if(s){let r,c;return s[2]==="@"?(r=s[1],c="mailto:"+r):(r=s[1],c=r),{type:"link",raw:s[0],text:r,href:c,tokens:[{type:"text",raw:r,text:r}]}}}url(u){var r;let s;if(s=this.rules.inline.url.exec(u)){let c,f;if(s[2]==="@")c=s[0],f="mailto:"+c;else{let h;do h=s[0],s[0]=((r=this.rules.inline._backpedal.exec(s[0]))==null?void 0:r[0])??"";while(h!==s[0]);c=s[0],s[1]==="www."?f="http://"+s[0]:f=s[0]}return{type:"link",raw:s[0],text:c,href:f,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(u){let s=this.rules.inline.text.exec(u);if(s){let r=this.lexer.state.inRawBlock;return{type:"text",raw:s[0],text:s[0],escaped:r}}}},jt=class mc{constructor(s){Te(this,"tokens");Te(this,"options");Te(this,"state");Te(this,"inlineQueue");Te(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=s||rl,this.options.tokenizer=this.options.tokenizer||new Mu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Pe,block:xu.normal,inline:Ja.normal};this.options.pedantic?(r.block=xu.pedantic,r.inline=Ja.pedantic):this.options.gfm&&(r.block=xu.gfm,this.options.breaks?r.inline=Ja.breaks:r.inline=Ja.gfm),this.tokenizer.rules=r}static get rules(){return{block:xu,inline:Ja}}static lex(s,r){return new mc(r).lex(s)}static lexInline(s,r){return new mc(r).inlineTokens(s)}lex(s){s=s.replace(Pe.carriageReturn,`
`),this.blockTokens(s,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let c=this.inlineQueue[r];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(s,r=[],c=!1){var f,h,p;for(this.options.pedantic&&(s=s.replace(Pe.tabCharGlobal,"    ").replace(Pe.spaceLine,""));s;){let g;if((h=(f=this.options.extensions)==null?void 0:f.block)!=null&&h.some(m=>(g=m.call({lexer:this},s,r))?(s=s.substring(g.raw.length),r.push(g),!0):!1))continue;if(g=this.tokenizer.space(s)){s=s.substring(g.raw.length);let m=r.at(-1);g.raw.length===1&&m!==void 0?m.raw+=`
`:r.push(g);continue}if(g=this.tokenizer.code(s)){s=s.substring(g.raw.length);let m=r.at(-1);(m==null?void 0:m.type)==="paragraph"||(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.at(-1).src=m.text):r.push(g);continue}if(g=this.tokenizer.fences(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.heading(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.hr(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.blockquote(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.list(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.html(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.def(s)){s=s.substring(g.raw.length);let m=r.at(-1);(m==null?void 0:m.type)==="paragraph"||(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.raw,this.inlineQueue.at(-1).src=m.text):this.tokens.links[g.tag]||(this.tokens.links[g.tag]={href:g.href,title:g.title},r.push(g));continue}if(g=this.tokenizer.table(s)){s=s.substring(g.raw.length),r.push(g);continue}if(g=this.tokenizer.lheading(s)){s=s.substring(g.raw.length),r.push(g);continue}let b=s;if((p=this.options.extensions)!=null&&p.startBlock){let m=1/0,E=s.slice(1),T;this.options.extensions.startBlock.forEach(z=>{T=z.call({lexer:this},E),typeof T=="number"&&T>=0&&(m=Math.min(m,T))}),m<1/0&&m>=0&&(b=s.substring(0,m+1))}if(this.state.top&&(g=this.tokenizer.paragraph(b))){let m=r.at(-1);c&&(m==null?void 0:m.type)==="paragraph"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):r.push(g),c=b.length!==s.length,s=s.substring(g.raw.length);continue}if(g=this.tokenizer.text(s)){s=s.substring(g.raw.length);let m=r.at(-1);(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):r.push(g);continue}if(s){let m="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,r}inline(s,r=[]){return this.inlineQueue.push({src:s,tokens:r}),r}inlineTokens(s,r=[]){var b,m,E,T,z;let c=s,f=null;if(this.tokens.links){let D=Object.keys(this.tokens.links);if(D.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)D.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,f.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let h;for(;(f=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)h=f[2]?f[2].length:0,c=c.slice(0,f.index+h)+"["+"a".repeat(f[0].length-h-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);c=((m=(b=this.options.hooks)==null?void 0:b.emStrongMask)==null?void 0:m.call({lexer:this},c))??c;let p=!1,g="";for(;s;){p||(g=""),p=!1;let D;if((T=(E=this.options.extensions)==null?void 0:E.inline)!=null&&T.some(L=>(D=L.call({lexer:this},s,r))?(s=s.substring(D.raw.length),r.push(D),!0):!1))continue;if(D=this.tokenizer.escape(s)){s=s.substring(D.raw.length),r.push(D);continue}if(D=this.tokenizer.tag(s)){s=s.substring(D.raw.length),r.push(D);continue}if(D=this.tokenizer.link(s)){s=s.substring(D.raw.length),r.push(D);continue}if(D=this.tokenizer.reflink(s,this.tokens.links)){s=s.substring(D.raw.length);let L=r.at(-1);D.type==="text"&&(L==null?void 0:L.type)==="text"?(L.raw+=D.raw,L.text+=D.text):r.push(D);continue}if(D=this.tokenizer.emStrong(s,c,g)){s=s.substring(D.raw.length),r.push(D);continue}if(D=this.tokenizer.codespan(s)){s=s.substring(D.raw.length),r.push(D);continue}if(D=this.tokenizer.br(s)){s=s.substring(D.raw.length),r.push(D);continue}if(D=this.tokenizer.del(s)){s=s.substring(D.raw.length),r.push(D);continue}if(D=this.tokenizer.autolink(s)){s=s.substring(D.raw.length),r.push(D);continue}if(!this.state.inLink&&(D=this.tokenizer.url(s))){s=s.substring(D.raw.length),r.push(D);continue}let B=s;if((z=this.options.extensions)!=null&&z.startInline){let L=1/0,G=s.slice(1),V;this.options.extensions.startInline.forEach(K=>{V=K.call({lexer:this},G),typeof V=="number"&&V>=0&&(L=Math.min(L,V))}),L<1/0&&L>=0&&(B=s.substring(0,L+1))}if(D=this.tokenizer.inlineText(B)){s=s.substring(D.raw.length),D.raw.slice(-1)!=="_"&&(g=D.raw.slice(-1)),p=!0;let L=r.at(-1);(L==null?void 0:L.type)==="text"?(L.raw+=D.raw,L.text+=D.text):r.push(D);continue}if(s){let L="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(L);break}else throw new Error(L)}}return r}},Nu=class{constructor(u){Te(this,"options");Te(this,"parser");this.options=u||rl}space(u){return""}code({text:u,lang:s,escaped:r}){var h;let c=(h=(s||"").match(Pe.notSpaceStart))==null?void 0:h[0],f=u.replace(Pe.endingNewline,"")+`
`;return c?'<pre><code class="language-'+hn(c)+'">'+(r?f:hn(f,!0))+`</code></pre>
`:"<pre><code>"+(r?f:hn(f,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}def(u){return""}heading({tokens:u,depth:s}){return`<h${s}>${this.parser.parseInline(u)}</h${s}>
`}hr(u){return`<hr>
`}list(u){let s=u.ordered,r=u.start,c="";for(let p=0;p<u.items.length;p++){let g=u.items[p];c+=this.listitem(g)}let f=s?"ol":"ul",h=s&&r!==1?' start="'+r+'"':"";return"<"+f+h+`>
`+c+"</"+f+`>
`}listitem(u){return`<li>${this.parser.parse(u.tokens)}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let s="",r="";for(let f=0;f<u.header.length;f++)r+=this.tablecell(u.header[f]);s+=this.tablerow({text:r});let c="";for(let f=0;f<u.rows.length;f++){let h=u.rows[f];r="";for(let p=0;p<h.length;p++)r+=this.tablecell(h[p]);c+=this.tablerow({text:r})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+s+`</thead>
`+c+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){let s=this.parser.parseInline(u.tokens),r=u.header?"th":"td";return(u.align?`<${r} align="${u.align}">`:`<${r}>`)+s+`</${r}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${hn(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:s,tokens:r}){let c=this.parser.parseInline(r),f=cm(u);if(f===null)return c;u=f;let h='<a href="'+u+'"';return s&&(h+=' title="'+hn(s)+'"'),h+=">"+c+"</a>",h}image({href:u,title:s,text:r,tokens:c}){c&&(r=this.parser.parseInline(c,this.parser.textRenderer));let f=cm(u);if(f===null)return hn(r);u=f;let h=`<img src="${u}" alt="${r}"`;return s&&(h+=` title="${hn(s)}"`),h+=">",h}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:hn(u.text)}},Oc=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}checkbox({raw:u}){return u}},Ht=class pc{constructor(s){Te(this,"options");Te(this,"renderer");Te(this,"textRenderer");this.options=s||rl,this.options.renderer=this.options.renderer||new Nu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Oc}static parse(s,r){return new pc(r).parse(s)}static parseInline(s,r){return new pc(r).parseInline(s)}parse(s){var c,f;let r="";for(let h=0;h<s.length;h++){let p=s[h];if((f=(c=this.options.extensions)==null?void 0:c.renderers)!=null&&f[p.type]){let b=p,m=this.options.extensions.renderers[b.type].call({parser:this},b);if(m!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(b.type)){r+=m||"";continue}}let g=p;switch(g.type){case"space":{r+=this.renderer.space(g);break}case"hr":{r+=this.renderer.hr(g);break}case"heading":{r+=this.renderer.heading(g);break}case"code":{r+=this.renderer.code(g);break}case"table":{r+=this.renderer.table(g);break}case"blockquote":{r+=this.renderer.blockquote(g);break}case"list":{r+=this.renderer.list(g);break}case"checkbox":{r+=this.renderer.checkbox(g);break}case"html":{r+=this.renderer.html(g);break}case"def":{r+=this.renderer.def(g);break}case"paragraph":{r+=this.renderer.paragraph(g);break}case"text":{r+=this.renderer.text(g);break}default:{let b='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(b),"";throw new Error(b)}}}return r}parseInline(s,r=this.renderer){var f,h;let c="";for(let p=0;p<s.length;p++){let g=s[p];if((h=(f=this.options.extensions)==null?void 0:f.renderers)!=null&&h[g.type]){let m=this.options.extensions.renderers[g.type].call({parser:this},g);if(m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(g.type)){c+=m||"";continue}}let b=g;switch(b.type){case"escape":{c+=r.text(b);break}case"html":{c+=r.html(b);break}case"link":{c+=r.link(b);break}case"image":{c+=r.image(b);break}case"checkbox":{c+=r.checkbox(b);break}case"strong":{c+=r.strong(b);break}case"em":{c+=r.em(b);break}case"codespan":{c+=r.codespan(b);break}case"br":{c+=r.br(b);break}case"del":{c+=r.del(b);break}case"text":{c+=r.text(b);break}default:{let m='Token with "'+b.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return c}},Su,$a=(Su=class{constructor(u){Te(this,"options");Te(this,"block");this.options=u||rl}preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}emStrongMask(u){return u}provideLexer(){return this.block?jt.lex:jt.lexInline}provideParser(){return this.block?Ht.parse:Ht.parseInline}},Te(Su,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Te(Su,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Su),e1=class{constructor(...u){Te(this,"defaults",Ac());Te(this,"options",this.setOptions);Te(this,"parse",this.parseMarkdown(!0));Te(this,"parseInline",this.parseMarkdown(!1));Te(this,"Parser",Ht);Te(this,"Renderer",Nu);Te(this,"TextRenderer",Oc);Te(this,"Lexer",jt);Te(this,"Tokenizer",Mu);Te(this,"Hooks",$a);this.use(...u)}walkTokens(u,s){var c,f;let r=[];for(let h of u)switch(r=r.concat(s.call(this,h)),h.type){case"table":{let p=h;for(let g of p.header)r=r.concat(this.walkTokens(g.tokens,s));for(let g of p.rows)for(let b of g)r=r.concat(this.walkTokens(b.tokens,s));break}case"list":{let p=h;r=r.concat(this.walkTokens(p.items,s));break}default:{let p=h;(f=(c=this.defaults.extensions)==null?void 0:c.childTokens)!=null&&f[p.type]?this.defaults.extensions.childTokens[p.type].forEach(g=>{let b=p[g].flat(1/0);r=r.concat(this.walkTokens(b,s))}):p.tokens&&(r=r.concat(this.walkTokens(p.tokens,s)))}}return r}use(...u){let s=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(r=>{let c={...r};if(c.async=this.defaults.async||c.async||!1,r.extensions&&(r.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){let h=s.renderers[f.name];h?s.renderers[f.name]=function(...p){let g=f.renderer.apply(this,p);return g===!1&&(g=h.apply(this,p)),g}:s.renderers[f.name]=f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=s[f.level];h?h.unshift(f.tokenizer):s[f.level]=[f.tokenizer],f.start&&(f.level==="block"?s.startBlock?s.startBlock.push(f.start):s.startBlock=[f.start]:f.level==="inline"&&(s.startInline?s.startInline.push(f.start):s.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(s.childTokens[f.name]=f.childTokens)}),c.extensions=s),r.renderer){let f=this.defaults.renderer||new Nu(this.defaults);for(let h in r.renderer){if(!(h in f))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let p=h,g=r.renderer[p],b=f[p];f[p]=(...m)=>{let E=g.apply(f,m);return E===!1&&(E=b.apply(f,m)),E||""}}c.renderer=f}if(r.tokenizer){let f=this.defaults.tokenizer||new Mu(this.defaults);for(let h in r.tokenizer){if(!(h in f))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let p=h,g=r.tokenizer[p],b=f[p];f[p]=(...m)=>{let E=g.apply(f,m);return E===!1&&(E=b.apply(f,m)),E}}c.tokenizer=f}if(r.hooks){let f=this.defaults.hooks||new $a;for(let h in r.hooks){if(!(h in f))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let p=h,g=r.hooks[p],b=f[p];$a.passThroughHooks.has(h)?f[p]=m=>{if(this.defaults.async&&$a.passThroughHooksRespectAsync.has(h))return(async()=>{let T=await g.call(f,m);return b.call(f,T)})();let E=g.call(f,m);return b.call(f,E)}:f[p]=(...m)=>{if(this.defaults.async)return(async()=>{let T=await g.apply(f,m);return T===!1&&(T=await b.apply(f,m)),T})();let E=g.apply(f,m);return E===!1&&(E=b.apply(f,m)),E}}c.hooks=f}if(r.walkTokens){let f=this.defaults.walkTokens,h=r.walkTokens;c.walkTokens=function(p){let g=[];return g.push(h.call(this,p)),f&&(g=g.concat(f.call(this,p))),g}}this.defaults={...this.defaults,...c}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,s){return jt.lex(u,s??this.defaults)}parser(u,s){return Ht.parse(u,s??this.defaults)}parseMarkdown(u){return(s,r)=>{let c={...r},f={...this.defaults,...c},h=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&c.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof s>"u"||s===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(f.hooks&&(f.hooks.options=f,f.hooks.block=u),f.async)return(async()=>{let p=f.hooks?await f.hooks.preprocess(s):s,g=await(f.hooks?await f.hooks.provideLexer():u?jt.lex:jt.lexInline)(p,f),b=f.hooks?await f.hooks.processAllTokens(g):g;f.walkTokens&&await Promise.all(this.walkTokens(b,f.walkTokens));let m=await(f.hooks?await f.hooks.provideParser():u?Ht.parse:Ht.parseInline)(b,f);return f.hooks?await f.hooks.postprocess(m):m})().catch(h);try{f.hooks&&(s=f.hooks.preprocess(s));let p=(f.hooks?f.hooks.provideLexer():u?jt.lex:jt.lexInline)(s,f);f.hooks&&(p=f.hooks.processAllTokens(p)),f.walkTokens&&this.walkTokens(p,f.walkTokens);let g=(f.hooks?f.hooks.provideParser():u?Ht.parse:Ht.parseInline)(p,f);return f.hooks&&(g=f.hooks.postprocess(g)),g}catch(p){return h(p)}}}onError(u,s){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,u){let c="<p>An error occurred:</p><pre>"+hn(r.message+"",!0)+"</pre>";return s?Promise.resolve(c):c}if(s)return Promise.reject(r);throw r}}},sl=new e1;function be(u,s){return sl.parse(u,s)}be.options=be.setOptions=function(u){return sl.setOptions(u),be.defaults=sl.defaults,jm(be.defaults),be};be.getDefaults=Ac;be.defaults=rl;be.use=function(...u){return sl.use(...u),be.defaults=sl.defaults,jm(be.defaults),be};be.walkTokens=function(u,s){return sl.walkTokens(u,s)};be.parseInline=sl.parseInline;be.Parser=Ht;be.parser=Ht.parse;be.Renderer=Nu;be.TextRenderer=Oc;be.Lexer=jt;be.lexer=jt.lex;be.Tokenizer=Mu;be.Hooks=$a;be.parse=be;be.options;be.setOptions;be.use;be.walkTokens;be.parseInline;Ht.parse;jt.lex;const t1=Object.assign({"/post/2025-10-27-Base64.md":ev,"/post/2025-11-12-JAVA_프로그램이_실행되는_과정.md":tv,"/post/2025-11-19-OOP.md":nv,"/post/2025-11-23-Garbage_Collection.md":lv,"/post/2025-12-10-IoC_DI.md":av,"/post/2025-12-13-observer_pattern.md":iv,"/post/2025-12-20-reactive-programming.md":uv,"/post/2026-01-10-RabbitMq_Clustering.md":sv,"/post/2026-01-14-mirror_queue_vs_quorum_queue.md":rv,"/post/2026-02-05-React로_개발된_Github_Blog_배포_방법.md":cv,"/post/2026-03-04-CHARYEOT_게임_패배_범인찾기_프로젝트.md":ov,"/post/2026-03-05-CHARYEOT_앞으로의_계획.md":fv,"/post/2026-03-06-CHARYEOT_리그_오브_레전드_1_API_Key_발급받기.md":hv,"/post/2026-03-07-CHARYEOT_리그_오브_레전드_2_유저_프로필_불러오기.md":dv,"/post/2026-03-10-charyeot_리그_오브_레전드_3_이미지_불러오기.md":mv,"/post/2026-03-14-CHARYEOT_리그_오브_레전드_4_전적_불러오기.md":pv,"/post/2026-03-19-CHARYEOT_차렷봇_판결_기능_GEMINI_연동.md":gv,"/post/2026-03-26-ChronicleMap_GC_메모리_해제_실패_사건.md":yv});function hm(u){var c;const s=((c=u.split("/").pop())==null?void 0:c.replace(".md",""))||"",r=s.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);return r?{date:r[1],slug:r[2]}:{date:"",slug:s}}function dm(u){return u.replace(/-/g,".")}function n1(u){const s=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,r=u.match(s);if(!r)return{data:{title:"",description:"",date:"",tags:[]},content:u};const[,c,f]=r,h={title:"",description:"",date:"",tags:[]},p=c.split(/\r?\n/);for(const g of p){const b=g.indexOf(":");if(b===-1)continue;const m=g.slice(0,b).trim();let E=g.slice(b+1).trim();if((E.startsWith('"')&&E.endsWith('"')||E.startsWith("'")&&E.endsWith("'"))&&(E=E.slice(1,-1)),m==="title")h.title=E;else if(m==="description")h.description=E;else if(m==="date")h.date=E;else if(m==="tags"){const T=E.match(/\[(.*)\]/);T&&(h.tags=T[1].split(",").map(z=>z.trim().replace(/^["']|["']$/g,"")))}}return{data:h,content:f}}function l1(u,s){const{data:r,content:c}=n1(s),{slug:f}=hm(u),h=be(c),p=r.date?dm(r.date.replace(/"/g,"")):dm(hm(u).date);return{id:f,title:r.title||f,description:r.description||"",date:p,tags:r.tags||[],content:h}}let rc=null;function kc(){if(rc)return rc;const u=[];for(const[s,r]of Object.entries(t1))try{const c=l1(s,r);u.push(c)}catch(c){console.error(`Failed to parse post: ${s}`,c)}return u.sort((s,r)=>{const c=s.date.replace(/\./g,"-");return r.date.replace(/\./g,"-").localeCompare(c)}),rc=u,u}function a1(u){return kc().find(r=>r.id===u)}const i1=()=>{const u=kc().slice(0,4);return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("section",{className:"mb-16",children:[y.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight",children:["BackEnd Developer Hanwhee",y.jsxs("span",{className:"inline-flex flex-col items-center align-bottom",children:[y.jsx("style",{children:`
              @keyframes emoji-shadow {
                0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
                50%       { transform: scaleX(1);   opacity: 0.35; }
              }
            `}),y.jsx("span",{className:"inline-block animate-[bounce_2s_infinite]",children:"😎"}),y.jsx("span",{className:"w-8 h-1.5 bg-slate-900 rounded-full blur-sm",style:{animation:"emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite"}})]})]}),y.jsxs("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed",children:[y.jsxs("p",{children:["안녕하세요!"," ",y.jsx("span",{className:"font-bold text-slate-900 bg-mint px-1",children:"백엔드 개발자 김한휘"}),"입니다!"]}),y.jsx("p",{children:"스탠다드네트웍스에서 2년 6개월간 근무하며 대용량 트래픽 환경에서 자라며 MSA 설계부터 개발, 운영까지 경험하며 성장해왔어요."}),y.jsx("p",{children:"서비스 불편한 거 하나씩 고칠 때마다 희열을 느끼는 타입입니다🔥🔥🔥"})]})]}),y.jsxs("section",{className:"mb-20",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[y.jsx("span",{className:"text-2xl",children:"🌱"}),y.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"My Career"})]}),y.jsxs("div",{className:"flex flex-col",children:[hc.map((s,r)=>y.jsxs(Yt,{to:"/Experience",className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${r!==hc.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[y.jsx("div",{className:"mb-2 md:mb-0",children:y.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:s.title.split("(")[0]})}),y.jsxs("div",{className:"flex flex-col md:items-end text-slate-500 text-sm md:text-base",children:[y.jsx("span",{className:"font-medium text-slate-700",children:s.role}),y.jsx("span",{className:"text-xs md:text-sm font-mono mt-1 text-slate-400",children:s.period})]})]},s.id)),y.jsx("div",{className:"flex flex-col md:flex-row md:justify-between md:items-baseline py-5 border-t border-slate-100 px-2 -mx-2 text-slate-400",children:y.jsx("div",{children:y.jsx("h3",{className:"text-lg font-bold",children:"... To Be Continued..."})})})]})]}),u.length>0&&y.jsxs("section",{className:"mb-20",children:[y.jsxs("div",{className:"flex items-center justify-between mb-8",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-2xl",children:"📝"}),y.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"Recent Posts"})]}),y.jsxs(Yt,{to:"/blog",className:"text-sm text-slate-500 hover:text-sky-600 flex items-center gap-1 transition-colors",children:["전체보기 ",y.jsx(sc,{size:14})]})]}),y.jsx("div",{className:"flex flex-col",children:u.map((s,r)=>y.jsxs(Yt,{to:`/blog/${s.id}`,className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${r!==u.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[y.jsxs("div",{className:"mb-2 md:mb-0 flex-1",children:[y.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:s.title}),y.jsx("p",{className:"text-sm text-slate-500 mt-1 line-clamp-1",children:s.description})]}),y.jsx("div",{className:"text-xs font-mono text-slate-400 md:ml-4",children:s.date})]},s.id))})]}),y.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[y.jsxs(Yt,{to:"/skills",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[y.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Skills"," ",y.jsx(sc,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),y.jsx("p",{className:"text-sm text-slate-500",children:"지금까지 써본 기술들과 개발 환경 정리해봤어요 🛠️"})]}),y.jsxs(Yt,{to:"/education",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[y.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Education"," ",y.jsx(sc,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),y.jsx("p",{className:"text-sm text-slate-500",children:"개발자로 성장하기 위해 공부하고 수료한 교육 과정들이에요 📚"})]})]})]})},u1=()=>y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12",children:["Work Experience ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("div",{className:"space-y-16",children:hc.map(u=>y.jsxs("div",{className:"relative border-l-2 border-slate-100 pl-6 md:pl-8 ml-2",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2",children:[y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900",children:u.title}),y.jsx("span",{className:"font-mono text-sm text-slate-400 mt-1 sm:mt-0 whitespace-nowrap",children:u.period})]}),y.jsx("div",{className:"text-lg font-medium text-slate-700 mb-4",children:u.role}),y.jsx("p",{className:"text-slate-600 leading-relaxed mb-6 max-w-2xl",children:u.description}),y.jsx("div",{className:"mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm font-mono text-slate-500",children:u.techStack.map((s,r)=>y.jsxs("span",{className:"bg-slate-50 px-1.5 rounded text-slate-600",children:["#",s]},s))}),y.jsx("ul",{className:"space-y-2 text-slate-600 list-disc list-outside pl-4",children:u.keyAchievements.map((s,r)=>y.jsx("li",{className:"pl-1 marker:text-sky-300",children:s},r))})]},u.id))})]}),s1=()=>y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Skills ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-12",children:"지금까지 사용해본 기술들입니다."}),y.jsx("div",{className:"space-y-12",children:Wb.map(u=>y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-6 bg-sky-50 inline-block px-2 py-0.5 rounded-md",children:u.category}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6",children:u.items.map(s=>y.jsx("div",{className:"flex flex-col",children:y.jsx("div",{className:"flex items-center justify-between mb-1",children:y.jsx("span",{className:"font-bold text-slate-800 text-lg",children:s.name})})},s.name))}),y.jsx("hr",{className:"mt-10 border-slate-100"})]},u.category))})]}),r1=()=>{const u=im.filter(r=>r.category==="Education"),s=im.filter(r=>r.category==="Certification");return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-12",children:"Education & Certs"}),y.jsx("p",{className:"text-slate-500 mb-12",children:"제가 해낸 교육과정/자격증 입니다."}),y.jsxs("section",{className:"mb-16",children:[y.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Education"}),y.jsx("div",{className:"space-y-10",children:u.map((r,c)=>y.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8",children:[y.jsx("div",{className:"md:w-32 flex-shrink-0 mb-1 md:mb-0",children:y.jsx("span",{className:"font-mono text-sm text-slate-400",children:r.period})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-slate-900",children:y.jsx("a",{href:r.link,className:"hover:underline",children:r.institution})}),y.jsx("div",{className:"text-slate-700 font-medium mb-3",children:r.degree}),y.jsx("ul",{className:"text-slate-600 text-sm space-y-1 list-disc list-outside pl-4",children:r.details.map((f,h)=>y.jsx("li",{children:f},h))})]})]},c))})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Certifications"}),y.jsx("div",{className:"space-y-6",children:s.map((r,c)=>y.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8 items-start",children:[y.jsx("div",{className:"md:w-32 flex-shrink-0",children:y.jsx("span",{className:"font-mono text-sm text-slate-400",children:r.period})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-bold text-slate-900",children:r.institution}),y.jsx("p",{className:"text-slate-600",children:r.details[0]})]})]},c))})]})]})},cc=5,c1=()=>{const u=kc(),[s,r]=M.useState(1),[c,f]=M.useState(""),[h,p]=M.useState(null),g=M.useMemo(()=>{const H={};return u.forEach(F=>{var ee;(ee=F.tags)==null||ee.forEach(se=>{H[se]=(H[se]||0)+1})}),Object.entries(H).sort((F,ee)=>ee[1]-F[1])},[u]),b=M.useMemo(()=>u.filter(H=>{var se;const F=c.trim()===""||H.title.toLowerCase().includes(c.toLowerCase()),ee=h===null||((se=H.tags)==null?void 0:se.includes(h));return F&&ee}),[u,c,h]),m=Math.ceil(b.length/cc),E=(s-1)*cc,T=b.slice(E,E+cc),z=()=>{r(H=>Math.max(H-1,1)),window.scrollTo({top:0,behavior:"smooth"})},D=()=>{r(H=>Math.min(H+1,m)),window.scrollTo({top:0,behavior:"smooth"})},B=H=>{r(H),window.scrollTo({top:0,behavior:"smooth"})},L=H=>{f(H),r(1)},G=H=>{p(F=>F===H?null:H),r(1)},V=()=>{f(""),p(null),r(1)},K=c.trim()!==""||h!==null;return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Blog ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-8",children:"생각을 정리하고 배운 것을 공유합니다."}),y.jsxs("div",{className:"relative mb-4",children:[y.jsx(tm,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),y.jsx("input",{type:"text",placeholder:"제목으로 검색...",value:c,onChange:H=>L(H.target.value),className:"w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"}),c&&y.jsx("button",{onClick:()=>L(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",children:y.jsx(Cu,{size:14})})]}),g.length>0&&y.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[g.map(([H,F])=>y.jsxs("button",{onClick:()=>G(H),className:`text-xs px-3 py-1 rounded-full border transition-colors ${h===H?"bg-sky-500 text-white border-sky-500":"bg-white text-slate-500 border-slate-200 hover:border-sky-400 hover:text-sky-500"}`,children:["#",H,y.jsx("span",{className:`ml-1 ${h===H?"text-sky-100":"text-slate-400"}`,children:F})]},H)),K&&y.jsxs("button",{onClick:V,className:"text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-colors flex items-center gap-1",children:[y.jsx(Cu,{size:11}),"초기화"]})]}),K&&y.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:[b.length,"개의 글",h&&y.jsxs("span",{children:[" · ",y.jsxs("span",{className:"text-sky-500",children:["#",h]})]}),c&&y.jsxs("span",{children:[' · "',y.jsx("span",{className:"text-slate-600",children:c}),'"']})]}),T.length>0?y.jsx("div",{className:"flex flex-col space-y-10",children:T.map(H=>{var F;return y.jsx("article",{className:"group",children:y.jsxs(Yt,{to:`/blog/${H.id}`,className:"block",children:[y.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-400 mb-2 font-mono",children:H.date}),y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors",children:H.title}),y.jsx("p",{className:"text-slate-600 leading-relaxed mb-3",children:H.description}),y.jsx("div",{className:"flex flex-wrap gap-2",children:(F=H.tags)==null?void 0:F.map(ee=>y.jsxs("span",{onClick:se=>{se.preventDefault(),G(ee)},className:`text-xs px-2 py-0.5 rounded cursor-pointer transition-colors ${h===ee?"bg-sky-100 text-sky-600":"text-slate-400 bg-slate-50 hover:bg-sky-50 hover:text-sky-500"}`,children:["#",ee]},ee))})]})},H.id)})}):y.jsxs("div",{className:"text-center py-20 text-slate-400",children:[y.jsx(tm,{size:32,className:"mx-auto mb-3 opacity-30"}),y.jsx("p",{className:"text-sm",children:"검색 결과가 없습니다."})]}),m>1&&y.jsxs("div",{className:"flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-100",children:[y.jsx("button",{onClick:z,disabled:s===1,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"이전 페이지",children:y.jsx(Tb,{size:20})}),y.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:m},(H,F)=>F+1).map(H=>y.jsx("button",{onClick:()=>B(H),className:`w-10 h-10 rounded-lg font-medium transition-colors ${s===H?"bg-sky-500 text-white":"hover:bg-slate-100 text-slate-600"}`,children:H},H))}),y.jsx("button",{onClick:D,disabled:s===m,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"다음 페이지",children:y.jsx(_b,{size:20})})]})]})};function o1({term:u}){const s=M.useRef(null);return M.useEffect(()=>{if(!s.current)return;s.current.innerHTML="";const r=document.createElement("script");r.src="https://giscus.app/client.js",r.async=!0,r.crossOrigin="anonymous",r.setAttribute("data-repo","KimHanWhee/KimHanWhee.github.io"),r.setAttribute("data-repo-id","R_kgDORCSvGA"),r.setAttribute("data-category","General"),r.setAttribute("data-category-id","DIC_kwDORCSvGM4C3O7R"),r.setAttribute("data-mapping","specific"),r.setAttribute("data-term",u),r.setAttribute("data-strict","0"),r.setAttribute("data-reactions-enabled","1"),r.setAttribute("data-emit-metadata","0"),r.setAttribute("data-input-position","bottom"),r.setAttribute("data-theme","preferred_color_scheme"),r.setAttribute("data-lang","ko"),s.current.appendChild(r)},[u]),y.jsx("section",{ref:s})}function f1(u){const s=[],r=/<h([23])[^>]*>(.*?)<\/h[23]>/gi;let c;for(;(c=r.exec(u))!==null;){const f=parseInt(c[1]),h=c[2].replace(/<[^>]+>/g,"").trim(),p=h.toLowerCase().replace(/\s+/g,"-").replace(/[^\w가-힣-]/g,"");s.push({id:p,text:h,level:f})}return s}function h1(u){return u.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi,(s,r,c,f)=>{const p=f.replace(/<[^>]+>/g,"").trim().toLowerCase().replace(/\s+/g,"-").replace(/[^\w가-힣-]/g,"");return`<h${r}${c} id="${p}">${f}</h${r}>`})}const d1=({headings:u})=>{const[s,r]=M.useState("");return M.useEffect(()=>{if(u.length===0)return;const c=new IntersectionObserver(f=>{const h=f.filter(p=>p.isIntersecting);h.length>0&&r(h[0].target.id)},{rootMargin:"-80px 0px -60% 0px",threshold:0});return u.forEach(({id:f})=>{const h=document.getElementById(f);h&&c.observe(h)}),()=>c.disconnect()},[u]),u.length===0?null:y.jsxs("nav",{className:"sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto",children:[y.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest mb-3",children:"목차"}),y.jsx("ul",{className:"space-y-1",children:u.map(({id:c,text:f,level:h})=>y.jsx("li",{children:y.jsx("a",{href:`#${c}`,onClick:p=>{var g;p.preventDefault(),(g=document.getElementById(c))==null||g.scrollIntoView({behavior:"smooth"})},className:["block text-sm leading-snug transition-colors py-0.5 break-words",h===3?"pl-3":"",s===c?"text-secondary font-semibold":"text-slate-400 hover:text-slate-700"].join(" "),children:f})},c))})]})},m1=()=>{const{id:u}=my(),s=u?a1(u):void 0,r=()=>{window.scrollTo({top:0,behavior:"smooth"})};if(!s)return y.jsx(My,{to:"/blog",replace:!0});const c=f1(s.content),f=h1(s.content);return y.jsxs("div",{className:"min-h-screen bg-white font-sans selection:bg-secondary/20 selection:text-primary",children:[y.jsx("div",{className:"bg-slate-50 border-b border-slate-200",children:y.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative",children:[y.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-5 pointer-events-none",children:y.jsx("div",{className:"text-9xl font-bold font-mono text-slate-900 tracking-tighter"})}),y.jsxs(Yt,{to:"/blog",className:"inline-flex items-center text-slate-500 hover:text-secondary mb-8 transition-colors font-medium",children:[y.jsx(gb,{size:18,className:"mr-2"}),"Back to Tech Notes"]}),y.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight tracking-tight",children:s.title}),y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-6 text-slate-600 border-t border-slate-200/60 pt-6",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(vb,{size:18,className:"text-secondary"}),y.jsx("span",{className:"font-medium font-mono text-sm",children:s.date})]}),y.jsx("div",{className:"hidden sm:block w-px h-4 bg-slate-300"}),y.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:s.tags.map(h=>y.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm",children:[y.jsx(Kb,{size:12,className:"mr-1.5 text-slate-400"}),h]},h))})]})]})}),y.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[y.jsx("aside",{className:"hidden xl:block absolute top-0 left-full pl-8 w-52 h-full",children:y.jsx(d1,{headings:c})}),y.jsx("div",{className:"overflow-x-hidden",children:y.jsxs("article",{className:"prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl",children:[y.jsx("style",{children:`
              pre {
                position: relative;
                padding-top: 2.5rem !important;
                border-radius: 0.75rem !important;
                background-color: #1e293b !important;
                font-family: 'JetBrains Mono', monospace !important;
                overflow-x: auto;
                max-width: 100%;
              }
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
                border-left-color: #3b82f6;
                background-color: #f8fafc;
                padding: 1rem 1.5rem;
                border-radius: 0 0.5rem 0.5rem 0;
              }
              blockquote p:first-of-type::before { content: ''; }
              blockquote p:last-of-type::after  { content: ''; }
            `}),y.jsx("div",{dangerouslySetInnerHTML:{__html:f}})]})}),y.jsxs("div",{className:"mt-20 pt-10 border-t border-slate-100 flex flex-col items-center",children:[y.jsx("button",{onClick:r,className:"mb-8 p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-secondary transition-colors","aria-label":"Scroll to top",children:y.jsx(Rb,{size:24})}),y.jsx(Yt,{to:"/blog",className:"px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20",children:"다른 글 보러가기"})]})]}),y.jsx(o1,{term:u})]})},p1=()=>{const[u,s]=M.useState(!1),r="hanwhee2@gmail.com",c=()=>{navigator.clipboard.writeText(r),s(!0),setTimeout(()=>s(!1),2e3)};return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8",children:["Contact ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed mb-12",children:y.jsxs("p",{children:[y.jsx("br",{}),"궁금한 점이 있으시다면 편하게 연락주세요💬"]})}),y.jsxs("div",{className:"mb-12",children:[y.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"Email"}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-2xl md:text-3xl font-mono font-bold text-slate-900 hover:bg-sky-100 transition-colors px-1 -ml-1 rounded",children:r}),y.jsx("button",{onClick:c,className:"p-2 text-slate-400 hover:text-sky-600 transition-colors","aria-label":"Copy email address",children:u?y.jsx(Sb,{size:20,className:"text-sky-500"}):y.jsx(Db,{size:20})})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-4",children:"Social"}),y.jsx("div",{className:"flex flex-col space-y-3 items-start",children:y.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-sky-400 underline-offset-4 decoration-2",children:["Github ",y.jsx(Hb,{size:14,className:"opacity-50"})]})})]})]})},mm=3e3,g1=400,y1=({visible:u})=>{const[s,r]=M.useState(0);return M.useEffect(()=>{const c=setInterval(()=>{r(f=>(f+1)%4)},g1);return()=>clearInterval(c)},[]),y.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500",style:{opacity:u?1:0,pointerEvents:u?"auto":"none"},children:[y.jsxs("div",{className:"flex flex-col items-center mb-6",children:[y.jsx("style",{children:`
          @keyframes emoji-shadow {
            0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
            50%       { transform: scaleX(1);   opacity: 0.35; }
          }
        `}),y.jsx("span",{className:"text-5xl inline-block animate-[bounce_2s_infinite] select-none",children:"😎"}),y.jsx("div",{className:"w-10 h-2 bg-slate-400 rounded-full blur-sm mt-1",style:{animation:"emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite"}})]}),y.jsxs("span",{className:"text-xl md:text-2xl font-mono font-bold text-sky-400 select-none tracking-wide",children:["Now Coding",y.jsx("span",{style:{opacity:s>=1?1:0},children:"."}),y.jsx("span",{style:{opacity:s>=2?1:0},children:"."}),y.jsx("span",{style:{opacity:s>=3?1:0},children:"."})]})]})},b1=()=>{const[u,s]=M.useState(!0),[r,c]=M.useState(!0);return M.useEffect(()=>{const f=setTimeout(()=>c(!1),mm),h=setTimeout(()=>s(!1),mm+500);return()=>{clearTimeout(f),clearTimeout(h)}},[]),y.jsxs(y.Fragment,{children:[u&&y.jsx(y1,{visible:r}),y.jsx(tb,{children:y.jsx(zy,{children:y.jsxs(fn,{path:"/",element:y.jsx(Pb,{}),children:[y.jsx(fn,{index:!0,element:y.jsx(i1,{})}),y.jsx(fn,{path:"experience",element:y.jsx(u1,{})}),y.jsx(fn,{path:"skills",element:y.jsx(s1,{})}),y.jsx(fn,{path:"education",element:y.jsx(r1,{})}),y.jsx(fn,{path:"blog",element:y.jsx(c1,{})}),y.jsx(fn,{path:"blog/:id",element:y.jsx(m1,{})}),y.jsx(fn,{path:"contact",element:y.jsx(p1,{})})]})})})]})},Zm=document.getElementById("root");if(!Zm)throw new Error("Could not find root element to mount to");const v1=N0.createRoot(Zm);v1.render(y.jsx(S0.StrictMode,{children:y.jsx(b1,{})}));
