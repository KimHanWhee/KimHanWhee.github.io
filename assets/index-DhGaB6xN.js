var v0=Object.defineProperty;var x0=(u,r,s)=>r in u?v0(u,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[r]=s;var Te=(u,r,s)=>x0(u,typeof r!="symbol"?r+"":r,s);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function s(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=s(f);fetch(f.href,h)}})();function gp(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var ec={exports:{}},Yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function S0(){if(Ud)return Yl;Ud=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(c,f,h){var m=null;if(h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),"key"in f){h={};for(var g in f)g!=="key"&&(h[g]=f[g])}else h=f;return f=h.ref,{$$typeof:u,type:c,key:m,ref:f!==void 0?f:null,props:h}}return Yl.Fragment=r,Yl.jsx=s,Yl.jsxs=s,Yl}var Hd;function E0(){return Hd||(Hd=1,ec.exports=S0()),ec.exports}var y=E0(),tc={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function T0(){if(Bd)return W;Bd=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.iterator;function O(E){return E===null||typeof E!="object"?null:(E=D&&E[D]||E["@@iterator"],typeof E=="function"?E:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,H={};function V(E,G,Q){this.props=E,this.context=G,this.refs=H,this.updater=Q||B}V.prototype.isReactComponent={},V.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},V.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function K(){}K.prototype=V.prototype;function L(E,G,Q){this.props=E,this.context=G,this.refs=H,this.updater=Q||B}var F=L.prototype=new K;F.constructor=L,U(F,V.prototype),F.isPureReactComponent=!0;var ee=Array.isArray;function re(){}var I={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function Ve(E,G,Q){var X=Q.ref;return{$$typeof:u,type:E,key:G,ref:X!==void 0?X:null,props:Q}}function vt(E,G){return Ve(E.type,G,E.props)}function Ht(E){return typeof E=="object"&&E!==null&&E.$$typeof===u}function et(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Q){return G[Q]})}var Bn=/\/+/g;function Vt(E,G){return typeof E=="object"&&E!==null&&E.key!=null?et(""+E.key):G.toString(36)}function Dt(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(re,re):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function k(E,G,Q,X,te){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var me=!1;if(E===null)me=!0;else switch(le){case"bigint":case"string":case"number":me=!0;break;case"object":switch(E.$$typeof){case u:case r:me=!0;break;case S:return me=E._init,k(me(E._payload),G,Q,X,te)}}if(me)return te=te(E),me=X===""?"."+Vt(E,0):X,ee(te)?(Q="",me!=null&&(Q=me.replace(Bn,"$&/")+"/"),k(te,G,Q,"",function(Ia){return Ia})):te!=null&&(Ht(te)&&(te=vt(te,Q+(te.key==null||E&&E.key===te.key?"":(""+te.key).replace(Bn,"$&/")+"/")+me)),G.push(te)),1;me=0;var Pe=X===""?".":X+":";if(ee(E))for(var ze=0;ze<E.length;ze++)X=E[ze],le=Pe+Vt(X,ze),me+=k(X,G,Q,le,te);else if(ze=O(E),typeof ze=="function")for(E=ze.call(E),ze=0;!(X=E.next()).done;)X=X.value,le=Pe+Vt(X,ze++),me+=k(X,G,Q,le,te);else if(le==="object"){if(typeof E.then=="function")return k(Dt(E),G,Q,X,te);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return me}function q(E,G,Q){if(E==null)return E;var X=[],te=0;return k(E,X,"","",function(le){return G.call(Q,le,te++)}),X}function P(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(Q){(E._status===0||E._status===-1)&&(E._status=1,E._result=Q)},function(Q){(E._status===0||E._status===-1)&&(E._status=2,E._result=Q)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var ve=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Ce={map:q,forEach:function(E,G,Q){q(E,function(){G.apply(this,arguments)},Q)},count:function(E){var G=0;return q(E,function(){G++}),G},toArray:function(E){return q(E,function(G){return G})||[]},only:function(E){if(!Ht(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return W.Activity=T,W.Children=Ce,W.Component=V,W.Fragment=s,W.Profiler=f,W.PureComponent=L,W.StrictMode=c,W.Suspense=b,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,W.__COMPILER_RUNTIME={__proto__:null,c:function(E){return I.H.useMemoCache(E)}},W.cache=function(E){return function(){return E.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(E,G,Q){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var X=U({},E.props),te=E.key;if(G!=null)for(le in G.key!==void 0&&(te=""+G.key),G)!ke.call(G,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&G.ref===void 0||(X[le]=G[le]);var le=arguments.length-2;if(le===1)X.children=Q;else if(1<le){for(var me=Array(le),Pe=0;Pe<le;Pe++)me[Pe]=arguments[Pe+2];X.children=me}return Ve(E.type,te,X)},W.createContext=function(E){return E={$$typeof:m,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},W.createElement=function(E,G,Q){var X,te={},le=null;if(G!=null)for(X in G.key!==void 0&&(le=""+G.key),G)ke.call(G,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(te[X]=G[X]);var me=arguments.length-2;if(me===1)te.children=Q;else if(1<me){for(var Pe=Array(me),ze=0;ze<me;ze++)Pe[ze]=arguments[ze+2];te.children=Pe}if(E&&E.defaultProps)for(X in me=E.defaultProps,me)te[X]===void 0&&(te[X]=me[X]);return Ve(E,le,te)},W.createRef=function(){return{current:null}},W.forwardRef=function(E){return{$$typeof:g,render:E}},W.isValidElement=Ht,W.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:P}},W.memo=function(E,G){return{$$typeof:p,type:E,compare:G===void 0?null:G}},W.startTransition=function(E){var G=I.T,Q={};I.T=Q;try{var X=E(),te=I.S;te!==null&&te(Q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(re,ve)}catch(le){ve(le)}finally{G!==null&&Q.types!==null&&(G.types=Q.types),I.T=G}},W.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},W.use=function(E){return I.H.use(E)},W.useActionState=function(E,G,Q){return I.H.useActionState(E,G,Q)},W.useCallback=function(E,G){return I.H.useCallback(E,G)},W.useContext=function(E){return I.H.useContext(E)},W.useDebugValue=function(){},W.useDeferredValue=function(E,G){return I.H.useDeferredValue(E,G)},W.useEffect=function(E,G){return I.H.useEffect(E,G)},W.useEffectEvent=function(E){return I.H.useEffectEvent(E)},W.useId=function(){return I.H.useId()},W.useImperativeHandle=function(E,G,Q){return I.H.useImperativeHandle(E,G,Q)},W.useInsertionEffect=function(E,G){return I.H.useInsertionEffect(E,G)},W.useLayoutEffect=function(E,G){return I.H.useLayoutEffect(E,G)},W.useMemo=function(E,G){return I.H.useMemo(E,G)},W.useOptimistic=function(E,G){return I.H.useOptimistic(E,G)},W.useReducer=function(E,G,Q){return I.H.useReducer(E,G,Q)},W.useRef=function(E){return I.H.useRef(E)},W.useState=function(E){return I.H.useState(E)},W.useSyncExternalStore=function(E,G,Q){return I.H.useSyncExternalStore(E,G,Q)},W.useTransition=function(){return I.H.useTransition()},W.version="19.2.3",W}var qd;function bc(){return qd||(qd=1,tc.exports=T0()),tc.exports}var M=bc();const C0=gp(M);var nc={exports:{}},Vl={},ac={exports:{}},lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function A0(){return Qd||(Qd=1,(function(u){function r(k,q){var P=k.length;k.push(q);e:for(;0<P;){var ve=P-1>>>1,Ce=k[ve];if(0<f(Ce,q))k[ve]=q,k[P]=Ce,P=ve;else break e}}function s(k){return k.length===0?null:k[0]}function c(k){if(k.length===0)return null;var q=k[0],P=k.pop();if(P!==q){k[0]=P;e:for(var ve=0,Ce=k.length,E=Ce>>>1;ve<E;){var G=2*(ve+1)-1,Q=k[G],X=G+1,te=k[X];if(0>f(Q,P))X<Ce&&0>f(te,Q)?(k[ve]=te,k[X]=P,ve=X):(k[ve]=Q,k[G]=P,ve=G);else if(X<Ce&&0>f(te,P))k[ve]=te,k[X]=P,ve=X;else break e}}return q}function f(k,q){var P=k.sortIndex-q.sortIndex;return P!==0?P:k.id-q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var m=Date,g=m.now();u.unstable_now=function(){return m.now()-g}}var b=[],p=[],S=1,T=null,D=3,O=!1,B=!1,U=!1,H=!1,V=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function F(k){for(var q=s(p);q!==null;){if(q.callback===null)c(p);else if(q.startTime<=k)c(p),q.sortIndex=q.expirationTime,r(b,q);else break;q=s(p)}}function ee(k){if(U=!1,F(k),!B)if(s(b)!==null)B=!0,re||(re=!0,et());else{var q=s(p);q!==null&&Dt(ee,q.startTime-k)}}var re=!1,I=-1,ke=5,Ve=-1;function vt(){return H?!0:!(u.unstable_now()-Ve<ke)}function Ht(){if(H=!1,re){var k=u.unstable_now();Ve=k;var q=!0;try{e:{B=!1,U&&(U=!1,K(I),I=-1),O=!0;var P=D;try{t:{for(F(k),T=s(b);T!==null&&!(T.expirationTime>k&&vt());){var ve=T.callback;if(typeof ve=="function"){T.callback=null,D=T.priorityLevel;var Ce=ve(T.expirationTime<=k);if(k=u.unstable_now(),typeof Ce=="function"){T.callback=Ce,F(k),q=!0;break t}T===s(b)&&c(b),F(k)}else c(b);T=s(b)}if(T!==null)q=!0;else{var E=s(p);E!==null&&Dt(ee,E.startTime-k),q=!1}}break e}finally{T=null,D=P,O=!1}q=void 0}}finally{q?et():re=!1}}}var et;if(typeof L=="function")et=function(){L(Ht)};else if(typeof MessageChannel<"u"){var Bn=new MessageChannel,Vt=Bn.port2;Bn.port1.onmessage=Ht,et=function(){Vt.postMessage(null)}}else et=function(){V(Ht,0)};function Dt(k,q){I=V(function(){k(u.unstable_now())},q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(k){k.callback=null},u.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<k?Math.floor(1e3/k):5},u.unstable_getCurrentPriorityLevel=function(){return D},u.unstable_next=function(k){switch(D){case 1:case 2:case 3:var q=3;break;default:q=D}var P=D;D=q;try{return k()}finally{D=P}},u.unstable_requestPaint=function(){H=!0},u.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=D;D=k;try{return q()}finally{D=P}},u.unstable_scheduleCallback=function(k,q,P){var ve=u.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ve+P:ve):P=ve,k){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=P+Ce,k={id:S++,callback:q,priorityLevel:k,startTime:P,expirationTime:Ce,sortIndex:-1},P>ve?(k.sortIndex=P,r(p,k),s(b)===null&&k===s(p)&&(U?(K(I),I=-1):U=!0,Dt(ee,P-ve))):(k.sortIndex=Ce,r(b,k),B||O||(B=!0,re||(re=!0,et()))),k},u.unstable_shouldYield=vt,u.unstable_wrapCallback=function(k){var q=D;return function(){var P=D;D=q;try{return k.apply(this,arguments)}finally{D=P}}}})(lc)),lc}var Yd;function _0(){return Yd||(Yd=1,ac.exports=A0()),ac.exports}var ic={exports:{}},Ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function R0(){if(Vd)return Ie;Vd=1;var u=bc();function r(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(b,p,S){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:T==null?null:""+T,children:b,containerInfo:p,implementation:S}}var m=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ie.createPortal=function(b,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return h(b,p,null,S)},Ie.flushSync=function(b){var p=m.T,S=c.p;try{if(m.T=null,c.p=2,b)return b()}finally{m.T=p,c.p=S,c.d.f()}},Ie.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(b,p))},Ie.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},Ie.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var S=p.as,T=g(S,p.crossOrigin),D=typeof p.integrity=="string"?p.integrity:void 0,O=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?c.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:T,integrity:D,fetchPriority:O}):S==="script"&&c.d.X(b,{crossOrigin:T,integrity:D,fetchPriority:O,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ie.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=g(p.as,p.crossOrigin);c.d.M(b,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(b)},Ie.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,T=g(S,p.crossOrigin);c.d.L(b,S,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ie.preloadModule=function(b,p){if(typeof b=="string")if(p){var S=g(p.as,p.crossOrigin);c.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(b)},Ie.requestFormReset=function(b){c.d.r(b)},Ie.unstable_batchedUpdates=function(b,p){return b(p)},Ie.useFormState=function(b,p,S){return m.H.useFormState(b,p,S)},Ie.useFormStatus=function(){return m.H.useHostTransitionStatus()},Ie.version="19.2.3",Ie}var Xd;function M0(){if(Xd)return ic.exports;Xd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),ic.exports=R0(),ic.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function N0(){if(Zd)return Vl;Zd=1;var u=_0(),r=bc(),s=M0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(h(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return b(l),e;if(i===a)return b(l),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,d=l.child;d;){if(d===n){o=!0,n=l,a=i;break}if(d===a){o=!0,a=l,n=i;break}d=d.sibling}if(!o){for(d=i.child;d;){if(d===n){o=!0,n=i,a=l;break}if(d===a){o=!0,a=i,n=l;break}d=d.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,D=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),Ht=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=Ht&&e[Ht]||e["@@iterator"],typeof e=="function"?e:null)}var Bn=Symbol.for("react.client.reference");function Vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Bn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case V:return"Profiler";case H:return"StrictMode";case ee:return"Suspense";case re:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case L:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:Vt(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return Vt(e(t))}catch{}}return null}var Dt=Array.isArray,k=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ve=[],Ce=-1;function E(e){return{current:e}}function G(e){0>Ce||(e.current=ve[Ce],ve[Ce]=null,Ce--)}function Q(e,t){Ce++,ve[Ce]=e.current,e.current=t}var X=E(null),te=E(null),le=E(null),me=E(null);function Pe(e,t){switch(Q(le,t),Q(te,e),Q(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rd(t),e=sd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(X),Q(X,e)}function ze(){G(X),G(te),G(le)}function Ia(e){e.memoizedState!==null&&Q(me,e);var t=X.current,n=sd(t,e.type);t!==n&&(Q(te,e),Q(X,n))}function ni(e){te.current===e&&(G(X),G(te)),me.current===e&&(G(me),Hl._currentValue=P)}var Lu,jc;function qn(e){if(Lu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lu=t&&t[1]||"",jc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lu+e+jc}var Gu=!1;function Uu(e,t){if(!e||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(N){var R=N}Reflect.construct(e,[],j)}else{try{j.call()}catch(N){R=N}e.call(j.prototype)}}else{try{throw Error()}catch(N){R=N}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],d=i[1];if(o&&d){var v=o.split(`
`),_=d.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===_.length)for(a=v.length-1,l=_.length-1;1<=a&&0<=l&&v[a]!==_[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==_[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==_[l]){var w=`
`+v[a].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=a&&0<=l);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qn(n):""}function Ip(e,t){switch(e.tag){case 26:case 27:case 5:return qn(e.type);case 16:return qn("Lazy");case 13:return e.child!==t&&t!==null?qn("Suspense Fallback"):qn("Suspense");case 19:return qn("SuspenseList");case 0:case 15:return Uu(e.type,!1);case 11:return Uu(e.type.render,!1);case 1:return Uu(e.type,!0);case 31:return qn("Activity");default:return""}}function Lc(e){try{var t="",n=null;do t+=Ip(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Hu=Object.prototype.hasOwnProperty,Bu=u.unstable_scheduleCallback,qu=u.unstable_cancelCallback,Pp=u.unstable_shouldYield,Fp=u.unstable_requestPaint,st=u.unstable_now,Wp=u.unstable_getCurrentPriorityLevel,Gc=u.unstable_ImmediatePriority,Uc=u.unstable_UserBlockingPriority,ai=u.unstable_NormalPriority,em=u.unstable_LowPriority,Hc=u.unstable_IdlePriority,tm=u.log,nm=u.unstable_setDisableYieldValue,Pa=null,ct=null;function mn(e){if(typeof tm=="function"&&nm(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Pa,e)}catch{}}var ot=Math.clz32?Math.clz32:im,am=Math.log,lm=Math.LN2;function im(e){return e>>>=0,e===0?32:31-(am(e)/lm|0)|0}var li=256,ii=262144,ui=4194304;function Qn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ri(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=a&134217727;return d!==0?(a=d&~i,a!==0?l=Qn(a):(o&=d,o!==0?l=Qn(o):n||(n=d&~e,n!==0&&(l=Qn(n))))):(d=a&~i,d!==0?l=Qn(d):o!==0?l=Qn(o):n||(n=a&~e,n!==0&&(l=Qn(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Fa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function um(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function Qu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rm(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,_=e.hiddenUpdates;for(n=o&~n;0<n;){var w=31-ot(n),j=1<<w;d[w]=0,v[w]=-1;var R=_[w];if(R!==null)for(_[w]=null,w=0;w<R.length;w++){var N=R[w];N!==null&&(N.lane&=-536870913)}n&=~j}a!==0&&qc(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function qc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ot(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Qc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ot(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function Yc(e,t){var n=t&-t;return n=(n&42)!==0?1:Yu(n),(n&(e.suspendedLanes|t))!==0?0:n}function Yu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Dd(e.type))}function Xc(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var gn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+gn,tt="__reactProps$"+gn,ca="__reactContainer$"+gn,Xu="__reactEvents$"+gn,sm="__reactListeners$"+gn,cm="__reactHandles$"+gn,Zc="__reactResources$"+gn,el="__reactMarker$"+gn;function Zu(e){delete e[Xe],delete e[tt],delete e[Xu],delete e[sm],delete e[cm]}function oa(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ca]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=md(e);e!==null;){if(n=e[Xe])return n;e=md(e)}return t}e=n,n=e.parentNode}return null}function fa(e){if(e=e[Xe]||e[ca]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ha(e){var t=e[Zc];return t||(t=e[Zc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[el]=!0}var Jc=new Set,Kc={};function Yn(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Kc[e]=t,e=0;e<t.length;e++)Jc.add(t[e])}var om=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$c={},Ic={};function fm(e){return Hu.call(Ic,e)?!0:Hu.call($c,e)?!1:om.test(e)?Ic[e]=!0:($c[e]=!0,!1)}function si(e,t,n){if(fm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ju(e){if(!e._valueTracker){var t=Pc(e)?"checked":"value";e._valueTracker=hm(e,t,""+e[t])}}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Pc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dm=/[\n"\\]/g;function St(e){return e.replace(dm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ku(e,t,n,a,l,i,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?$u(e,o,xt(t)):n!=null?$u(e,o,xt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+xt(d):e.removeAttribute("name")}function Wc(e,t,n,a,l,i,o,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ju(e);return}n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ju(e)}function $u(e,t,n){t==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function pa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function eo(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function to(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(Dt(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Ju(e)}function ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function no(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||pm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ao(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&no(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&no(e,i,t[i])}function Iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fi(e){return gm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Pu=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,ya=null;function lo(e){var t=fa(e);if(t&&(e=t.stateNode)){var n=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ku(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[tt]||null;if(!l)throw Error(c(90));Ku(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Fc(a)}break e;case"textarea":eo(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&pa(e,!!n.multiple,t,!1)}}}var Wu=!1;function io(e,t,n){if(Wu)return e(t,n);Wu=!0;try{var a=e(t);return a}finally{if(Wu=!1,(ga!==null||ya!==null)&&(Fi(),ga&&(t=ga,e=ya,ya=ga=null,lo(t),e)))for(t=0;t<e.length;t++)lo(e[t])}}function nl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[tt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(Jt)try{var al={};Object.defineProperty(al,"passive",{get:function(){er=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{er=!1}var yn=null,tr=null,hi=null;function uo(){if(hi)return hi;var e,t=tr,n=t.length,a,l="value"in yn?yn.value:yn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return hi=l.slice(e,1<a?1-a:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function ro(){return!1}function nt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pi:ro,this.isPropagationStopped=ro,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=nt(Vn),ll=T({},Vn,{view:0,detail:0}),ym=nt(ll),nr,ar,il,gi=T({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(nr=e.screenX-il.screenX,ar=e.screenY-il.screenY):ar=nr=0,il=e),nr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),so=nt(gi),bm=T({},gi,{dataTransfer:0}),vm=nt(bm),xm=T({},ll,{relatedTarget:0}),lr=nt(xm),Sm=T({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=nt(Sm),Tm=T({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cm=nt(Tm),Am=T({},Vn,{data:0}),co=nt(Am),_m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mm[e])?!!t[e]:!1}function ir(){return Nm}var Om=T({},ll,{key:function(e){if(e.key){var t=_m[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dm=nt(Om),wm=T({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oo=nt(wm),km=T({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),zm=nt(km),jm=T({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lm=nt(jm),Gm=T({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Um=nt(Gm),Hm=T({},Vn,{newState:0,oldState:0}),Bm=nt(Hm),qm=[9,13,27,32],ur=Jt&&"CompositionEvent"in window,ul=null;Jt&&"documentMode"in document&&(ul=document.documentMode);var Qm=Jt&&"TextEvent"in window&&!ul,fo=Jt&&(!ur||ul&&8<ul&&11>=ul),ho=" ",po=!1;function mo(e,t){switch(e){case"keyup":return qm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function go(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function Ym(e,t){switch(e){case"compositionend":return go(t);case"keypress":return t.which!==32?null:(po=!0,ho);case"textInput":return e=t.data,e===ho&&po?null:e;default:return null}}function Vm(e,t){if(ba)return e==="compositionend"||!ur&&mo(e,t)?(e=uo(),hi=tr=yn=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fo&&t.locale!=="ko"?null:t.data;default:return null}}var Xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xm[e.type]:t==="textarea"}function bo(e,t,n,a){ga?ya?ya.push(a):ya=[a]:ga=a,t=iu(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var rl=null,sl=null;function Zm(e){td(e,0)}function yi(e){var t=tl(e);if(Fc(t))return e}function vo(e,t){if(e==="change")return t}var xo=!1;if(Jt){var rr;if(Jt){var sr="oninput"in document;if(!sr){var So=document.createElement("div");So.setAttribute("oninput","return;"),sr=typeof So.oninput=="function"}rr=sr}else rr=!1;xo=rr&&(!document.documentMode||9<document.documentMode)}function Eo(){rl&&(rl.detachEvent("onpropertychange",To),sl=rl=null)}function To(e){if(e.propertyName==="value"&&yi(sl)){var t=[];bo(t,sl,e,Fu(e)),io(Zm,t)}}function Jm(e,t,n){e==="focusin"?(Eo(),rl=t,sl=n,rl.attachEvent("onpropertychange",To)):e==="focusout"&&Eo()}function Km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(sl)}function $m(e,t){if(e==="click")return yi(t)}function Im(e,t){if(e==="input"||e==="change")return yi(t)}function Pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Pm;function cl(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Hu.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function Co(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,t){var n=Co(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Co(n)}}function _o(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_o(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ro(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fm=Jt&&"documentMode"in document&&11>=document.documentMode,va=null,or=null,ol=null,fr=!1;function Mo(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fr||va==null||va!==oi(a)||(a=va,"selectionStart"in a&&cr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ol&&cl(ol,a)||(ol=a,a=iu(or,"onSelect"),0<a.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xa={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},hr={},No={};Jt&&(No=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Zn(e){if(hr[e])return hr[e];if(!xa[e])return e;var t=xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in No)return hr[e]=t[n];return e}var Oo=Zn("animationend"),Do=Zn("animationiteration"),wo=Zn("animationstart"),Wm=Zn("transitionrun"),eg=Zn("transitionstart"),tg=Zn("transitioncancel"),ko=Zn("transitionend"),zo=new Map,dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dr.push("scrollEnd");function wt(e,t){zo.set(e,t),Yn(t,[e])}var bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],Sa=0,pr=0;function vi(){for(var e=Sa,t=pr=Sa=0;t<e;){var n=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&jo(n,l,i)}}function xi(e,t,n,a){Et[Sa++]=e,Et[Sa++]=t,Et[Sa++]=n,Et[Sa++]=a,pr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function mr(e,t,n,a){return xi(e,t,n,a),Si(e)}function Jn(e,t){return xi(e,null,null,t),Si(e)}function jo(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-ot(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function Si(e){if(50<wl)throw wl=0,Cs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ea={};function ng(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,a){return new ng(e,t,n,a)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Lo(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ei(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")gr(e)&&(o=1);else if(typeof e=="string")o=r0(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=ht(31,n,t,l),e.elementType=Ve,e.lanes=i,e;case U:return Kn(n.children,l,i,t);case H:o=8,l|=24;break;case V:return e=ht(12,n,t,l|2),e.elementType=V,e.lanes=i,e;case ee:return e=ht(13,n,t,l),e.elementType=ee,e.lanes=i,e;case re:return e=ht(19,n,t,l),e.elementType=re,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:o=10;break e;case K:o=9;break e;case F:o=11;break e;case I:o=14;break e;case ke:o=16,a=null;break e}o=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=ht(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Kn(e,t,n,a){return e=ht(7,e,a,t),e.lanes=n,e}function yr(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function Go(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function br(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Uo=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var n=Uo.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Lc(t)},Uo.set(e,t),t)}return{value:e,source:t,stack:Lc(t)}}var Ta=[],Ca=0,Ti=null,fl=0,Ct=[],At=0,bn=null,Bt=1,qt="";function $t(e,t){Ta[Ca++]=fl,Ta[Ca++]=Ti,Ti=e,fl=t}function Ho(e,t,n){Ct[At++]=Bt,Ct[At++]=qt,Ct[At++]=bn,bn=e;var a=Bt;e=qt;var l=32-ot(a)-1;a&=~(1<<l),n+=1;var i=32-ot(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Bt=1<<32-ot(t)+l|n<<l|a,qt=i+e}else Bt=1<<i|n<<l|a,qt=e}function vr(e){e.return!==null&&($t(e,1),Ho(e,1,0))}function xr(e){for(;e===Ti;)Ti=Ta[--Ca],Ta[Ca]=null,fl=Ta[--Ca],Ta[Ca]=null;for(;e===bn;)bn=Ct[--At],Ct[At]=null,qt=Ct[--At],Ct[At]=null,Bt=Ct[--At],Ct[At]=null}function Bo(e,t){Ct[At++]=Bt,Ct[At++]=qt,Ct[At++]=bn,Bt=t.id,qt=t.overflow,bn=e}var Ze=null,_e=null,oe=!1,vn=null,_t=!1,Sr=Error(c(519));function xn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hl(Tt(t,e)),Sr}function qo(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Xe]=e,t[tt]=a,n){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(n=0;n<zl.length;n++)ue(zl[n],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),Wc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),to(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||id(t.textContent,n)?(a.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),a.onScroll!=null&&ue("scroll",t),a.onScrollEnd!=null&&ue("scrollend",t),a.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||xn(e,!0)}function Qo(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:Ze=Ze.return}}function Aa(e){if(e!==Ze)return!1;if(!oe)return Qo(e),oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hs(e.type,e.memoizedProps)),n=!n),n&&_e&&xn(e),Qo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=pd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=pd(e)}else t===27?(t=_e,zn(e.type)?(e=Vs,Vs=null,_e=e):_e=t):_e=Ze?Mt(e.stateNode.nextSibling):null;return!0}function $n(){_e=Ze=null,oe=!1}function Er(){var e=vn;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),vn=null),e}function hl(e){vn===null?vn=[e]:vn.push(e)}var Tr=E(null),In=null,It=null;function Sn(e,t,n){Q(Tr,t._currentValue),t._currentValue=n}function Pt(e){e._currentValue=Tr.current,G(Tr)}function Cr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=l;for(var v=0;v<t.length;v++)if(d.context===t[v]){i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Cr(i.return,n,e),a||(o=null);break e}i=d.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Cr(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function _a(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var d=l.type;ft(l.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(l===me.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}l=l.return}e!==null&&Ar(t,e,n,a),t.flags|=262144}function Ci(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){In=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Yo(In,e)}function Ai(e,t){return In===null&&Pn(e),Yo(e,t)}function Yo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},It===null){if(e===null)throw Error(c(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return n}var ag=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},lg=u.unstable_scheduleCallback,ig=u.unstable_NormalPriority,Ge={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _r(){return{controller:new ag,data:new Map,refCount:0}}function dl(e){e.refCount--,e.refCount===0&&lg(ig,function(){e.controller.abort()})}var pl=null,Rr=0,Ra=0,Ma=null;function ug(e,t){if(pl===null){var n=pl=[];Rr=0,Ra=Os(),Ma={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Rr++,t.then(Vo,Vo),t}function Vo(){if(--Rr===0&&pl!==null){Ma!==null&&(Ma.status="fulfilled");var e=pl;pl=null,Ra=0,Ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Xo=k.S;k.S=function(e,t){Nh=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ug(e,t),Xo!==null&&Xo(e,t)};var Fn=E(null);function Mr(){var e=Fn.current;return e!==null?e:Ae.pooledCache}function _i(e,t){t===null?Q(Fn,Fn.current):Q(Fn,t.pool)}function Zo(){var e=Mr();return e===null?null:{parent:Ge._currentValue,pool:e}}var Na=Error(c(460)),Nr=Error(c(474)),Ri=Error(c(542)),Mi={then:function(){}};function Jo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ko(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Io(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Io(e),e}throw ea=t,Na}}function Wn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ea=n,Na):n}}var ea=null;function $o(){if(ea===null)throw Error(c(459));var e=ea;return ea=null,e}function Io(e){if(e===Na||e===Ri)throw Error(c(483))}var Oa=null,ml=0;function Ni(e){var t=ml;return ml+=1,Oa===null&&(Oa=[]),Ko(Oa,e,t)}function gl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oi(e,t){throw t.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Po(e){function t(C,x){if(e){var A=C.deletions;A===null?(C.deletions=[x],C.flags|=16):A.push(x)}}function n(C,x){if(!e)return null;for(;x!==null;)t(C,x),x=x.sibling;return null}function a(C){for(var x=new Map;C!==null;)C.key!==null?x.set(C.key,C):x.set(C.index,C),C=C.sibling;return x}function l(C,x){return C=Kt(C,x),C.index=0,C.sibling=null,C}function i(C,x,A){return C.index=A,e?(A=C.alternate,A!==null?(A=A.index,A<x?(C.flags|=67108866,x):A):(C.flags|=67108866,x)):(C.flags|=1048576,x)}function o(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function d(C,x,A,z){return x===null||x.tag!==6?(x=yr(A,C.mode,z),x.return=C,x):(x=l(x,A),x.return=C,x)}function v(C,x,A,z){var J=A.type;return J===U?w(C,x,A.props.children,z,A.key):x!==null&&(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ke&&Wn(J)===x.type)?(x=l(x,A.props),gl(x,A),x.return=C,x):(x=Ei(A.type,A.key,A.props,null,C.mode,z),gl(x,A),x.return=C,x)}function _(C,x,A,z){return x===null||x.tag!==4||x.stateNode.containerInfo!==A.containerInfo||x.stateNode.implementation!==A.implementation?(x=br(A,C.mode,z),x.return=C,x):(x=l(x,A.children||[]),x.return=C,x)}function w(C,x,A,z,J){return x===null||x.tag!==7?(x=Kn(A,C.mode,z,J),x.return=C,x):(x=l(x,A),x.return=C,x)}function j(C,x,A){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=yr(""+x,C.mode,A),x.return=C,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case O:return A=Ei(x.type,x.key,x.props,null,C.mode,A),gl(A,x),A.return=C,A;case B:return x=br(x,C.mode,A),x.return=C,x;case ke:return x=Wn(x),j(C,x,A)}if(Dt(x)||et(x))return x=Kn(x,C.mode,A,null),x.return=C,x;if(typeof x.then=="function")return j(C,Ni(x),A);if(x.$$typeof===L)return j(C,Ai(C,x),A);Oi(C,x)}return null}function R(C,x,A,z){var J=x!==null?x.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return J!==null?null:d(C,x,""+A,z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case O:return A.key===J?v(C,x,A,z):null;case B:return A.key===J?_(C,x,A,z):null;case ke:return A=Wn(A),R(C,x,A,z)}if(Dt(A)||et(A))return J!==null?null:w(C,x,A,z,null);if(typeof A.then=="function")return R(C,x,Ni(A),z);if(A.$$typeof===L)return R(C,x,Ai(C,A),z);Oi(C,A)}return null}function N(C,x,A,z,J){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return C=C.get(A)||null,d(x,C,""+z,J);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case O:return C=C.get(z.key===null?A:z.key)||null,v(x,C,z,J);case B:return C=C.get(z.key===null?A:z.key)||null,_(x,C,z,J);case ke:return z=Wn(z),N(C,x,A,z,J)}if(Dt(z)||et(z))return C=C.get(A)||null,w(x,C,z,J,null);if(typeof z.then=="function")return N(C,x,A,Ni(z),J);if(z.$$typeof===L)return N(C,x,A,Ai(x,z),J);Oi(x,z)}return null}function Y(C,x,A,z){for(var J=null,fe=null,Z=x,ae=x=0,ce=null;Z!==null&&ae<A.length;ae++){Z.index>ae?(ce=Z,Z=null):ce=Z.sibling;var he=R(C,Z,A[ae],z);if(he===null){Z===null&&(Z=ce);break}e&&Z&&he.alternate===null&&t(C,Z),x=i(he,x,ae),fe===null?J=he:fe.sibling=he,fe=he,Z=ce}if(ae===A.length)return n(C,Z),oe&&$t(C,ae),J;if(Z===null){for(;ae<A.length;ae++)Z=j(C,A[ae],z),Z!==null&&(x=i(Z,x,ae),fe===null?J=Z:fe.sibling=Z,fe=Z);return oe&&$t(C,ae),J}for(Z=a(Z);ae<A.length;ae++)ce=N(Z,C,ae,A[ae],z),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?ae:ce.key),x=i(ce,x,ae),fe===null?J=ce:fe.sibling=ce,fe=ce);return e&&Z.forEach(function(Hn){return t(C,Hn)}),oe&&$t(C,ae),J}function $(C,x,A,z){if(A==null)throw Error(c(151));for(var J=null,fe=null,Z=x,ae=x=0,ce=null,he=A.next();Z!==null&&!he.done;ae++,he=A.next()){Z.index>ae?(ce=Z,Z=null):ce=Z.sibling;var Hn=R(C,Z,he.value,z);if(Hn===null){Z===null&&(Z=ce);break}e&&Z&&Hn.alternate===null&&t(C,Z),x=i(Hn,x,ae),fe===null?J=Hn:fe.sibling=Hn,fe=Hn,Z=ce}if(he.done)return n(C,Z),oe&&$t(C,ae),J;if(Z===null){for(;!he.done;ae++,he=A.next())he=j(C,he.value,z),he!==null&&(x=i(he,x,ae),fe===null?J=he:fe.sibling=he,fe=he);return oe&&$t(C,ae),J}for(Z=a(Z);!he.done;ae++,he=A.next())he=N(Z,C,ae,he.value,z),he!==null&&(e&&he.alternate!==null&&Z.delete(he.key===null?ae:he.key),x=i(he,x,ae),fe===null?J=he:fe.sibling=he,fe=he);return e&&Z.forEach(function(b0){return t(C,b0)}),oe&&$t(C,ae),J}function Ee(C,x,A,z){if(typeof A=="object"&&A!==null&&A.type===U&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case O:e:{for(var J=A.key;x!==null;){if(x.key===J){if(J=A.type,J===U){if(x.tag===7){n(C,x.sibling),z=l(x,A.props.children),z.return=C,C=z;break e}}else if(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ke&&Wn(J)===x.type){n(C,x.sibling),z=l(x,A.props),gl(z,A),z.return=C,C=z;break e}n(C,x);break}else t(C,x);x=x.sibling}A.type===U?(z=Kn(A.props.children,C.mode,z,A.key),z.return=C,C=z):(z=Ei(A.type,A.key,A.props,null,C.mode,z),gl(z,A),z.return=C,C=z)}return o(C);case B:e:{for(J=A.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===A.containerInfo&&x.stateNode.implementation===A.implementation){n(C,x.sibling),z=l(x,A.children||[]),z.return=C,C=z;break e}else{n(C,x);break}else t(C,x);x=x.sibling}z=br(A,C.mode,z),z.return=C,C=z}return o(C);case ke:return A=Wn(A),Ee(C,x,A,z)}if(Dt(A))return Y(C,x,A,z);if(et(A)){if(J=et(A),typeof J!="function")throw Error(c(150));return A=J.call(A),$(C,x,A,z)}if(typeof A.then=="function")return Ee(C,x,Ni(A),z);if(A.$$typeof===L)return Ee(C,x,Ai(C,A),z);Oi(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,x!==null&&x.tag===6?(n(C,x.sibling),z=l(x,A),z.return=C,C=z):(n(C,x),z=yr(A,C.mode,z),z.return=C,C=z),o(C)):n(C,x)}return function(C,x,A,z){try{ml=0;var J=Ee(C,x,A,z);return Oa=null,J}catch(Z){if(Z===Na||Z===Ri)throw Z;var fe=ht(29,Z,null,C.mode);return fe.lanes=z,fe.return=C,fe}finally{}}}var ta=Po(!0),Fo=Po(!1),En=!1;function Or(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Tn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Si(e),jo(e,null,n),t}return xi(e,a,t,n),Si(e)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Qc(e,n)}}function wr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var kr=!1;function bl(){if(kr){var e=Ma;if(e!==null)throw e}}function vl(e,t,n,a){kr=!1;var l=e.updateQueue;En=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var v=d,_=v.next;v.next=null,o===null?i=_:o.next=_,o=v;var w=e.alternate;w!==null&&(w=w.updateQueue,d=w.lastBaseUpdate,d!==o&&(d===null?w.firstBaseUpdate=_:d.next=_,w.lastBaseUpdate=v))}if(i!==null){var j=l.baseState;o=0,w=_=v=null,d=i;do{var R=d.lane&-536870913,N=R!==d.lane;if(N?(se&R)===R:(a&R)===R){R!==0&&R===Ra&&(kr=!0),w!==null&&(w=w.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var Y=e,$=d;R=t;var Ee=n;switch($.tag){case 1:if(Y=$.payload,typeof Y=="function"){j=Y.call(Ee,j,R);break e}j=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=$.payload,R=typeof Y=="function"?Y.call(Ee,j,R):Y,R==null)break e;j=T({},j,R);break e;case 2:En=!0}}R=d.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[R]:N.push(R))}else N={lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},w===null?(_=w=N,v=j):w=w.next=N,o|=R;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;N=d,d=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);w===null&&(v=j),l.baseState=v,l.firstBaseUpdate=_,l.lastBaseUpdate=w,i===null&&(l.shared.lanes=0),Nn|=o,e.lanes=o,e.memoizedState=j}}function Wo(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ef(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wo(n[e],t)}var Da=E(null),Di=E(0);function tf(e,t){e=rn,Q(Di,e),Q(Da,t),rn=e|t.baseLanes}function zr(){Q(Di,rn),Q(Da,Da.current)}function jr(){rn=Di.current,G(Da),G(Di)}var dt=E(null),Rt=null;function An(e){var t=e.alternate;Q(je,je.current&1),Q(dt,e),Rt===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(Rt=e)}function Lr(e){Q(je,je.current),Q(dt,e),Rt===null&&(Rt=e)}function nf(e){e.tag===22?(Q(je,je.current),Q(dt,e),Rt===null&&(Rt=e)):_n()}function _n(){Q(je,je.current),Q(dt,dt.current)}function pt(e){G(dt),Rt===e&&(Rt=null),G(je)}var je=E(0);function wi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Qs(n)||Ys(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,ne=null,xe=null,Ue=null,ki=!1,wa=!1,na=!1,zi=0,xl=0,ka=null,sg=0;function Oe(){throw Error(c(321))}function Gr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Ur(e,t,n,a,l,i){return Ft=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Bf:Wr,na=!1,i=n(a,l),na=!1,wa&&(i=lf(t,n,a,l)),af(e),i}function af(e){k.H=Tl;var t=xe!==null&&xe.next!==null;if(Ft=0,Ue=xe=ne=null,ki=!1,xl=0,ka=null,t)throw Error(c(300));e===null||He||(e=e.dependencies,e!==null&&Ci(e)&&(He=!0))}function lf(e,t,n,a){ne=e;var l=0;do{if(wa&&(ka=null),xl=0,wa=!1,25<=l)throw Error(c(301));if(l+=1,Ue=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}k.H=qf,i=t(n,a)}while(wa);return i}function cg(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Sl(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ne.flags|=1024),t}function Hr(){var e=zi!==0;return zi=0,e}function Br(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function qr(e){if(ki){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ki=!1}Ft=0,Ue=xe=ne=null,wa=!1,xl=zi=0,ka=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ne.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Le(){if(xe===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?ne.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw ne.alternate===null?Error(c(467)):Error(c(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ne.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var t=xl;return xl+=1,ka===null&&(ka=[]),e=Ko(ka,e,t),t=ne,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Bf:Wr),e}function Li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===L)return Je(e)}throw Error(c(438,String(e)))}function Qr(e){var t=null,n=ne.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ne.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ji(),ne.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=vt;return t.index++,n}function Wt(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=Le();return Yr(t,xe,e)}function Yr(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var d=o=null,v=null,_=t,w=!1;do{var j=_.lane&-536870913;if(j!==_.lane?(se&j)===j:(Ft&j)===j){var R=_.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),j===Ra&&(w=!0);else if((Ft&R)===R){_=_.next,R===Ra&&(w=!0);continue}else j={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(d=v=j,o=i):v=v.next=j,ne.lanes|=R,Nn|=R;j=_.action,na&&n(i,j),i=_.hasEagerState?_.eagerState:n(i,j)}else R={lane:j,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(d=v=R,o=i):v=v.next=R,ne.lanes|=j,Nn|=j;_=_.next}while(_!==null&&_!==t);if(v===null?o=i:v.next=d,!ft(i,e.memoizedState)&&(He=!0,w&&(n=Ma,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=v,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Vr(e){var t=Le(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);ft(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function uf(e,t,n){var a=ne,l=Le(),i=oe;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var o=!ft((xe||l).memoizedState,n);if(o&&(l.memoizedState=n,He=!0),l=l.queue,Jr(cf.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,za(9,{destroy:void 0},sf.bind(null,a,l,n,t),null),Ae===null)throw Error(c(349));i||(Ft&127)!==0||rf(a,t,n)}return n}function rf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t=ji(),ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sf(e,t,n,a){t.value=n,t.getSnapshot=a,of(t)&&ff(e)}function cf(e,t,n){return n(function(){of(t)&&ff(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function ff(e){var t=Jn(e,2);t!==null&&rt(t,e,2)}function Xr(e){var t=Fe();if(typeof e=="function"){var n=e;if(e=n(),na){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function hf(e,t,n,a){return e.baseState=n,Yr(e,xe,typeof a=="function"?a:Wt)}function og(e,t,n,a,l){if(Bi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};k.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,df(t,i)):(i.next=n.next,t.pending=n.next=i)}}function df(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=k.T,o={};k.T=o;try{var d=n(l,a),v=k.S;v!==null&&v(o,d),pf(e,t,d)}catch(_){Zr(e,t,_)}finally{i!==null&&o.types!==null&&(i.types=o.types),k.T=i}}else try{i=n(l,a),pf(e,t,i)}catch(_){Zr(e,t,_)}}function pf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){mf(e,t,a)},function(a){return Zr(e,t,a)}):mf(e,t,n)}function mf(e,t,n){t.status="fulfilled",t.value=n,gf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,df(e,n)))}function Zr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,gf(t),t=t.next;while(t!==a)}e.action=null}function gf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yf(e,t){return t}function bf(e,t){if(oe){var n=Ae.formState;if(n!==null){e:{var a=ne;if(oe){if(_e){t:{for(var l=_e,i=_t;l.nodeType!==8;){if(!i){l=null;break t}if(l=Mt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){_e=Mt(l.nextSibling),a=l.data==="F!";break e}}xn(a)}a=!1}a&&(t=n[0])}}return n=Fe(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yf,lastRenderedState:t},n.queue=a,n=Gf.bind(null,ne,a),a.dispatch=n,a=Xr(!1),i=Fr.bind(null,ne,!1,a.queue),a=Fe(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=og.bind(null,ne,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function vf(e){var t=Le();return xf(t,xe,e)}function xf(e,t,n){if(t=Yr(e,t,yf)[0],e=Gi(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Sl(t)}catch(o){throw o===Na?Ri:o}else a=t;t=Le();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(ne.flags|=2048,za(9,{destroy:void 0},fg.bind(null,l,n),null)),[a,i,e]}function fg(e,t){e.action=t}function Sf(e){var t=Le(),n=xe;if(n!==null)return xf(t,n,e);Le(),t=t.memoizedState,n=Le();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function za(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ne.updateQueue,t===null&&(t=ji(),ne.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Ef(){return Le().memoizedState}function Ui(e,t,n,a){var l=Fe();ne.flags|=e,l.memoizedState=za(1|t,{destroy:void 0},n,a===void 0?null:a)}function Hi(e,t,n,a){var l=Le();a=a===void 0?null:a;var i=l.memoizedState.inst;xe!==null&&a!==null&&Gr(a,xe.memoizedState.deps)?l.memoizedState=za(t,i,n,a):(ne.flags|=e,l.memoizedState=za(1|t,i,n,a))}function Tf(e,t){Ui(8390656,8,e,t)}function Jr(e,t){Hi(2048,8,e,t)}function hg(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=ji(),ne.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Cf(e){var t=Le().memoizedState;return hg({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Af(e,t){return Hi(4,2,e,t)}function _f(e,t){return Hi(4,4,e,t)}function Rf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mf(e,t,n){n=n!=null?n.concat([e]):null,Hi(4,4,Rf.bind(null,t,e),n)}function Kr(){}function Nf(e,t){var n=Le();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Gr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Of(e,t){var n=Le();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Gr(t,a[1]))return a[0];if(a=e(),na){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function $r(e,t,n){return n===void 0||(Ft&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Dh(),ne.lanes|=e,Nn|=e,n)}function Df(e,t,n,a){return ft(n,t)?n:Da.current!==null?(e=$r(e,n,a),ft(e,t)||(He=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(se&261930)===0?(He=!0,e.memoizedState=n):(e=Dh(),ne.lanes|=e,Nn|=e,t)}function wf(e,t,n,a,l){var i=q.p;q.p=i!==0&&8>i?i:8;var o=k.T,d={};k.T=d,Fr(e,!1,t,n);try{var v=l(),_=k.S;if(_!==null&&_(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var w=rg(v,a);El(e,t,w,yt(e))}else El(e,t,a,yt(e))}catch(j){El(e,t,{then:function(){},status:"rejected",reason:j},yt())}finally{q.p=i,o!==null&&d.types!==null&&(o.types=d.types),k.T=o}}function dg(){}function Ir(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=kf(e).queue;wf(e,l,t,P,n===null?dg:function(){return zf(e),n(a)})}function kf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zf(e){var t=kf(e);t.next===null&&(t=e.alternate.memoizedState),El(e,t.next.queue,{},yt())}function Pr(){return Je(Hl)}function jf(){return Le().memoizedState}function Lf(){return Le().memoizedState}function pg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=Tn(n);var a=Cn(t,e,n);a!==null&&(rt(a,t,n),yl(a,t,n)),t={cache:_r()},e.payload=t;return}t=t.return}}function mg(e,t,n){var a=yt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Uf(t,n):(n=mr(e,t,n,a),n!==null&&(rt(n,e,a),Hf(n,t,a)))}function Gf(e,t,n){var a=yt();El(e,t,n,a)}function El(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Uf(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,d=i(o,n);if(l.hasEagerState=!0,l.eagerState=d,ft(d,o))return xi(e,t,l,0),Ae===null&&vi(),!1}catch{}finally{}if(n=mr(e,t,l,a),n!==null)return rt(n,e,a),Hf(n,t,a),!0}return!1}function Fr(e,t,n,a){if(a={lane:2,revertLane:Os(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(c(479))}else t=mr(e,n,a,2),t!==null&&rt(t,e,2)}function Bi(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Uf(e,t){wa=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Qc(e,n)}}var Tl={readContext:Je,use:Li,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};Tl.useEffectEvent=Oe;var Bf={readContext:Je,use:Li,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Tf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ui(4194308,4,Rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var n=Fe();t=t===void 0?null:t;var a=e();if(na){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Fe();if(n!==void 0){var l=n(t);if(na){mn(!0);try{n(t)}finally{mn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=mg.bind(null,ne,e),[a.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=Xr(e);var t=e.queue,n=Gf.bind(null,ne,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Kr,useDeferredValue:function(e,t){var n=Fe();return $r(n,e,t)},useTransition:function(){var e=Xr(!1);return e=wf.bind(null,ne,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ne,l=Fe();if(oe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ae===null)throw Error(c(349));(se&127)!==0||rf(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Tf(cf.bind(null,a,i,e),[e]),a.flags|=2048,za(9,{destroy:void 0},sf.bind(null,a,i,n,t),null),n},useId:function(){var e=Fe(),t=Ae.identifierPrefix;if(oe){var n=qt,a=Bt;n=(a&~(1<<32-ot(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=sg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Pr,useFormState:bf,useActionState:bf,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fr.bind(null,ne,!0,n),n.dispatch=t,[e,t]},useMemoCache:Qr,useCacheRefresh:function(){return Fe().memoizedState=pg.bind(null,ne)},useEffectEvent:function(e){var t=Fe(),n={impl:e};return t.memoizedState=n,function(){if((pe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Wr={readContext:Je,use:Li,useCallback:Nf,useContext:Je,useEffect:Jr,useImperativeHandle:Mf,useInsertionEffect:Af,useLayoutEffect:_f,useMemo:Of,useReducer:Gi,useRef:Ef,useState:function(){return Gi(Wt)},useDebugValue:Kr,useDeferredValue:function(e,t){var n=Le();return Df(n,xe.memoizedState,e,t)},useTransition:function(){var e=Gi(Wt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:uf,useId:jf,useHostTransitionStatus:Pr,useFormState:vf,useActionState:vf,useOptimistic:function(e,t){var n=Le();return hf(n,xe,e,t)},useMemoCache:Qr,useCacheRefresh:Lf};Wr.useEffectEvent=Cf;var qf={readContext:Je,use:Li,useCallback:Nf,useContext:Je,useEffect:Jr,useImperativeHandle:Mf,useInsertionEffect:Af,useLayoutEffect:_f,useMemo:Of,useReducer:Vr,useRef:Ef,useState:function(){return Vr(Wt)},useDebugValue:Kr,useDeferredValue:function(e,t){var n=Le();return xe===null?$r(n,e,t):Df(n,xe.memoizedState,e,t)},useTransition:function(){var e=Vr(Wt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:uf,useId:jf,useHostTransitionStatus:Pr,useFormState:Sf,useActionState:Sf,useOptimistic:function(e,t){var n=Le();return xe!==null?hf(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Qr,useCacheRefresh:Lf};qf.useEffectEvent=Cf;function es(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ts={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),l=Tn(a);l.payload=t,n!=null&&(l.callback=n),t=Cn(e,l,a),t!==null&&(rt(t,e,a),yl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),l=Tn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Cn(e,l,a),t!==null&&(rt(t,e,a),yl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=Tn(n);a.tag=2,t!=null&&(a.callback=t),t=Cn(e,a,n),t!==null&&(rt(t,e,n),yl(t,e,n))}};function Qf(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!cl(n,a)||!cl(l,i):!0}function Yf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function aa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=T({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Vf(e){bi(e)}function Xf(e){console.error(e)}function Zf(e){bi(e)}function qi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Jf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ns(e,t,n){return n=Tn(n),n.tag=3,n.payload={element:null},n.callback=function(){qi(e,t)},n}function Kf(e){return e=Tn(e),e.tag=3,e}function $f(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Jf(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Jf(t,n,a),typeof l!="function"&&(On===null?On=new Set([this]):On.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function gg(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&_a(t,n,l,!0),n=dt.current,n!==null){switch(n.tag){case 31:case 13:return Rt===null?Wi():n.alternate===null&&De===0&&(De=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Mi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Rs(e,a,l)),!1;case 22:return n.flags|=65536,a===Mi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Rs(e,a,l)),!1}throw Error(c(435,n.tag))}return Rs(e,a,l),Wi(),!1}if(oe)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Sr&&(e=Error(c(422),{cause:a}),hl(Tt(e,n)))):(a!==Sr&&(t=Error(c(423),{cause:a}),hl(Tt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Tt(a,n),l=ns(e.stateNode,a,l),wr(e,l),De!==4&&(De=2)),!1;var i=Error(c(520),{cause:a});if(i=Tt(i,n),Dl===null?Dl=[i]:Dl.push(i),De!==4&&(De=2),t===null)return!0;a=Tt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=ns(n.stateNode,a,e),wr(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(On===null||!On.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Kf(l),$f(l,e,n,a),wr(n,l),!1}n=n.return}while(n!==null);return!1}var as=Error(c(461)),He=!1;function Ke(e,t,n,a){t.child=e===null?Fo(t,null,n,a):ta(t,e.child,n,a)}function If(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var d in a)d!=="ref"&&(o[d]=a[d])}else o=a;return Pn(t),a=Ur(e,t,n,o,i,l),d=Hr(),e!==null&&!He?(Br(e,t,l),en(e,t,l)):(oe&&d&&vr(t),t.flags|=1,Ke(e,t,a,l),t.child)}function Pf(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!gr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Ff(e,t,i,a,l)):(e=Ei(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!fs(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(o,a)&&e.ref===t.ref)return en(e,t,l)}return t.flags|=1,e=Kt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(cl(i,a)&&e.ref===t.ref)if(He=!1,t.pendingProps=a=i,fs(e,l))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,en(e,t,l)}return ls(e,t,n,a,l)}function Wf(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return eh(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_i(t,i!==null?i.cachePool:null),i!==null?tf(t,i):zr(),nf(t);else return a=t.lanes=536870912,eh(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(_i(t,i.cachePool),tf(t,i),_n(),t.memoizedState=null):(e!==null&&_i(t,null),zr(),_n());return Ke(e,t,l,n),t.child}function Cl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function eh(e,t,n,a,l){var i=Mr();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&_i(t,null),zr(),nf(t),e!==null&&_a(e,t,a,!0),t.childLanes=l,null}function Qi(e,t){return t=Vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function th(e,t,n){return ta(t,e.child,null,n),e=Qi(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function yg(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(a.mode==="hidden")return e=Qi(t,a),t.lanes=536870912,Cl(null,e);if(Lr(t),(e=_e)?(e=dd(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bn!==null?{id:Bt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},n=Go(e),n.return=t,t.child=n,Ze=t,_e=null)):e=null,e===null)throw xn(t);return t.lanes=536870912,null}return Qi(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Lr(t),l)if(t.flags&256)t.flags&=-257,t=th(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(He||_a(e,t,n,!1),l=(n&e.childLanes)!==0,He||l){if(a=Ae,a!==null&&(o=Yc(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Jn(e,o),rt(a,e,o),as;Wi(),t=th(e,t,n)}else e=i.treeContext,_e=Mt(o.nextSibling),Ze=t,oe=!0,vn=null,_t=!1,e!==null&&Bo(t,e),t=Qi(t,a),t.flags|=4096;return t}return e=Kt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ls(e,t,n,a,l){return Pn(t),n=Ur(e,t,n,a,void 0,l),a=Hr(),e!==null&&!He?(Br(e,t,l),en(e,t,l)):(oe&&a&&vr(t),t.flags|=1,Ke(e,t,n,l),t.child)}function nh(e,t,n,a,l,i){return Pn(t),t.updateQueue=null,n=lf(t,a,n,l),af(e),a=Hr(),e!==null&&!He?(Br(e,t,i),en(e,t,i)):(oe&&a&&vr(t),t.flags|=1,Ke(e,t,n,i),t.child)}function ah(e,t,n,a,l){if(Pn(t),t.stateNode===null){var i=Ea,o=n.contextType;typeof o=="object"&&o!==null&&(i=Je(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ts,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Or(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Je(o):Ea,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(es(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&ts.enqueueReplaceState(i,i.state,null),vl(t,a,i,l),bl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,v=aa(n,d);i.props=v;var _=i.context,w=n.contextType;o=Ea,typeof w=="object"&&w!==null&&(o=Je(w));var j=n.getDerivedStateFromProps;w=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||_!==o)&&Yf(t,i,a,o),En=!1;var R=t.memoizedState;i.state=R,vl(t,a,i,l),bl(),_=t.memoizedState,d||R!==_||En?(typeof j=="function"&&(es(t,n,j,a),_=t.memoizedState),(v=En||Qf(t,n,v,a,R,_,o))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=_),i.props=a,i.state=_,i.context=o,a=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Dr(e,t),o=t.memoizedProps,w=aa(n,o),i.props=w,j=t.pendingProps,R=i.context,_=n.contextType,v=Ea,typeof _=="object"&&_!==null&&(v=Je(_)),d=n.getDerivedStateFromProps,(_=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==j||R!==v)&&Yf(t,i,a,v),En=!1,R=t.memoizedState,i.state=R,vl(t,a,i,l),bl();var N=t.memoizedState;o!==j||R!==N||En||e!==null&&e.dependencies!==null&&Ci(e.dependencies)?(typeof d=="function"&&(es(t,n,d,a),N=t.memoizedState),(w=En||Qf(t,n,w,a,R,N,v)||e!==null&&e.dependencies!==null&&Ci(e.dependencies))?(_||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,N,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,N,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=N),i.props=a,i.state=N,i.context=v,a=w):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Yi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ta(t,e.child,null,l),t.child=ta(t,null,n,l)):Ke(e,t,n,l),t.memoizedState=i.state,e=t.child):e=en(e,t,l),e}function lh(e,t,n,a){return $n(),t.flags|=256,Ke(e,t,n,a),t.child}var is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function us(e){return{baseLanes:e,cachePool:Zo()}}function rs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gt),e}function ih(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(l?An(t):_n(),(e=_e)?(e=dd(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bn!==null?{id:Bt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},n=Go(e),n.return=t,t.child=n,Ze=t,_e=null)):e=null,e===null)throw xn(t);return Ys(e)?t.lanes=32:t.lanes=536870912,null}var d=a.children;return a=a.fallback,l?(_n(),l=t.mode,d=Vi({mode:"hidden",children:d},l),a=Kn(a,l,n,null),d.return=t,a.return=t,d.sibling=a,t.child=d,a=t.child,a.memoizedState=us(n),a.childLanes=rs(e,o,n),t.memoizedState=is,Cl(null,a)):(An(t),ss(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(i)t.flags&256?(An(t),t.flags&=-257,t=cs(e,t,n)):t.memoizedState!==null?(_n(),t.child=e.child,t.flags|=128,t=null):(_n(),d=a.fallback,l=t.mode,a=Vi({mode:"visible",children:a.children},l),d=Kn(d,l,n,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,ta(t,e.child,null,n),a=t.child,a.memoizedState=us(n),a.childLanes=rs(e,o,n),t.memoizedState=is,t=Cl(null,a));else if(An(t),Ys(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var _=o.dgst;o=_,a=Error(c(419)),a.stack="",a.digest=o,hl({value:a,source:null,stack:null}),t=cs(e,t,n)}else if(He||_a(e,t,n,!1),o=(n&e.childLanes)!==0,He||o){if(o=Ae,o!==null&&(a=Yc(o,n),a!==0&&a!==v.retryLane))throw v.retryLane=a,Jn(e,a),rt(o,e,a),as;Qs(d)||Wi(),t=cs(e,t,n)}else Qs(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,_e=Mt(d.nextSibling),Ze=t,oe=!0,vn=null,_t=!1,e!==null&&Bo(t,e),t=ss(t,a.children),t.flags|=4096);return t}return l?(_n(),d=a.fallback,l=t.mode,v=e.child,_=v.sibling,a=Kt(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,_!==null?d=Kt(_,d):(d=Kn(d,l,n,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,Cl(null,a),a=t.child,d=e.child.memoizedState,d===null?d=us(n):(l=d.cachePool,l!==null?(v=Ge._currentValue,l=l.parent!==v?{parent:v,pool:v}:l):l=Zo(),d={baseLanes:d.baseLanes|n,cachePool:l}),a.memoizedState=d,a.childLanes=rs(e,o,n),t.memoizedState=is,Cl(e.child,a)):(An(t),n=e.child,e=n.sibling,n=Kt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function ss(e,t){return t=Vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vi(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function cs(e,t,n){return ta(t,e.child,null,n),e=ss(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Cr(e.return,t,n)}function os(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function rh(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=je.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,Q(je,o),Ke(e,t,a,n),a=oe?fl:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uh(e,n,t);else if(e.tag===19)uh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&wi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),os(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}os(t,!0,n,null,i,a);break;case"together":os(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(_a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ci(e)))}function bg(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),Sn(t,Ge,e.memoizedState.cache),$n();break;case 27:case 5:Ia(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:Sn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(An(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ih(e,t,n):(An(t),e=en(e,t,n),e!==null?e.sibling:null);An(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(_a(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return rh(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Q(je,je.current),a)break;return null;case 22:return t.lanes=0,Wf(e,t,n,t.pendingProps);case 24:Sn(t,Ge,e.memoizedState.cache)}return en(e,t,n)}function sh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!fs(e,n)&&(t.flags&128)===0)return He=!1,bg(e,t,n);He=(e.flags&131072)!==0}else He=!1,oe&&(t.flags&1048576)!==0&&Ho(t,fl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Wn(t.elementType),t.type=e,typeof e=="function")gr(e)?(a=aa(e,a),t.tag=1,t=ah(null,t,e,a,n)):(t.tag=0,t=ls(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===F){t.tag=11,t=If(null,t,e,a,n);break e}else if(l===I){t.tag=14,t=Pf(null,t,e,a,n);break e}}throw t=Vt(e)||e,Error(c(306,t,""))}}return t;case 0:return ls(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=aa(a,t.pendingProps),ah(e,t,a,l,n);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Dr(e,t),vl(t,a,null,n);var o=t.memoizedState;if(a=o.cache,Sn(t,Ge,a),a!==i.cache&&Ar(t,[Ge],n,!0),bl(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=lh(e,t,a,n);break e}else if(a!==l){l=Tt(Error(c(424)),t),hl(l),t=lh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Mt(e.firstChild),Ze=t,oe=!0,vn=null,_t=!0,n=Fo(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if($n(),a===l){t=en(e,t,n);break e}Ke(e,t,a,n)}t=t.child}return t;case 26:return Yi(e,t),e===null?(n=vd(t.type,null,t.pendingProps,null))?t.memoizedState=n:oe||(n=t.type,e=t.pendingProps,a=uu(le.current).createElement(n),a[Xe]=t,a[tt]=e,$e(a,n,e),Qe(a),t.stateNode=a):t.memoizedState=vd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ia(t),e===null&&oe&&(a=t.stateNode=gd(t.type,t.pendingProps,le.current),Ze=t,_t=!0,l=_e,zn(t.type)?(Vs=l,_e=Mt(a.firstChild)):_e=l),Ke(e,t,t.pendingProps.children,n),Yi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((l=a=_e)&&(a=Kg(a,t.type,t.pendingProps,_t),a!==null?(t.stateNode=a,Ze=t,_e=Mt(a.firstChild),_t=!1,l=!0):l=!1),l||xn(t)),Ia(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Hs(l,i)?a=null:o!==null&&Hs(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=Ur(e,t,cg,null,null,n),Hl._currentValue=l),Yi(e,t),Ke(e,t,a,n),t.child;case 6:return e===null&&oe&&((e=n=_e)&&(n=$g(n,t.pendingProps,_t),n!==null?(t.stateNode=n,Ze=t,_e=null,e=!0):e=!1),e||xn(t)),null;case 13:return ih(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ta(t,null,a,n):Ke(e,t,a,n),t.child;case 11:return If(e,t,t.type,t.pendingProps,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Sn(t,t.type,a.value),Ke(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Pn(t),l=Je(l),a=a(l),t.flags|=1,Ke(e,t,a,n),t.child;case 14:return Pf(e,t,t.type,t.pendingProps,n);case 15:return Ff(e,t,t.type,t.pendingProps,n);case 19:return rh(e,t,n);case 31:return yg(e,t,n);case 22:return Wf(e,t,n,t.pendingProps);case 24:return Pn(t),a=Je(Ge),e===null?(l=Mr(),l===null&&(l=Ae,i=_r(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Or(t),Sn(t,Ge,l)):((e.lanes&n)!==0&&(Dr(e,t),vl(t,null,null,n),bl()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Sn(t,Ge,a)):(a=i.cache,Sn(t,Ge,a),a!==l.cache&&Ar(t,[Ge],n,!0))),Ke(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function tn(e){e.flags|=4}function hs(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(jh())e.flags|=8192;else throw ea=Mi,Nr}else e.flags&=-16777217}function ch(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cd(t))if(jh())e.flags|=8192;else throw ea=Mi,Nr}function Xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bc():536870912,e.lanes|=t,Ua|=t)}function Al(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function vg(e,t,n){var a=t.pendingProps;switch(xr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pt(Ge),ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Aa(t)?tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Er())),Re(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(tn(t),i!==null?(Re(t),ch(t,i)):(Re(t),hs(t,l,null,a,n))):i?i!==e.memoizedState?(tn(t),Re(t),ch(t,i)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&tn(t),Re(t),hs(t,l,e,a,n)),null;case 27:if(ni(t),n=le.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Re(t),null}e=X.current,Aa(t)?qo(t):(e=gd(l,a,n),t.stateNode=e,tn(t))}return Re(t),null;case 5:if(ni(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Re(t),null}if(i=X.current,Aa(t))qo(t);else{var o=uu(le.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[Xe]=t,i[tt]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch($e(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&tn(t)}}return Re(t),hs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&tn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,Aa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Ze,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||id(e.nodeValue,n)),e||xn(t,!0)}else e=uu(e).createTextNode(a),e[Xe]=t,t.stateNode=e}return Re(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Aa(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Xe]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else n=Er(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Re(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Aa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Xe]=t}else $n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),l=!1}else l=Er(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Xi(t,t.updateQueue),Re(t),null);case 4:return ze(),e===null&&zs(t.stateNode.containerInfo),Re(t),null;case 10:return Pt(t.type),Re(t),null;case 19:if(G(je),a=t.memoizedState,a===null)return Re(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Al(a,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=wi(e),i!==null){for(t.flags|=128,Al(a,!1),e=i.updateQueue,t.updateQueue=e,Xi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Lo(n,e),n=n.sibling;return Q(je,je.current&1|2),oe&&$t(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&st()>Ii&&(t.flags|=128,l=!0,Al(a,!1),t.lanes=4194304)}else{if(!l)if(e=wi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Xi(t,e),Al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!oe)return Re(t),null}else 2*st()-a.renderingStartTime>Ii&&n!==536870912&&(t.flags|=128,l=!0,Al(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=st(),e.sibling=null,n=je.current,Q(je,l?n&1|2:n&1),oe&&$t(t,a.treeForkCount),e):(Re(t),null);case 22:case 23:return pt(t),jr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),n=t.updateQueue,n!==null&&Xi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&G(Fn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pt(Ge),Re(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function xg(e,t){switch(xr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pt(Ge),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ni(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(c(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(je),null;case 4:return ze(),null;case 10:return Pt(t.type),null;case 22:case 23:return pt(t),jr(),e!==null&&G(Fn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pt(Ge),null;case 25:return null;default:return null}}function oh(e,t){switch(xr(t),t.tag){case 3:Pt(Ge),ze();break;case 26:case 27:case 5:ni(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:G(je);break;case 10:Pt(t.type);break;case 22:case 23:pt(t),jr(),e!==null&&G(Fn);break;case 24:Pt(Ge)}}function _l(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(d){ye(t,t.return,d)}}function Rn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,l=t;var v=n,_=d;try{_()}catch(w){ye(l,v,w)}}}a=a.next}while(a!==i)}}catch(w){ye(t,t.return,w)}}function fh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ef(t,n)}catch(a){ye(e,e.return,a)}}}function hh(e,t,n){n.props=aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ye(e,t,a)}}function Rl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){ye(e,t,l)}}function Qt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ye(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ye(e,t,l)}else n.current=null}function dh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ye(e,e.return,l)}}function ds(e,t,n){try{var a=e.stateNode;Qg(a,e.type,n,t),a[tt]=t}catch(l){ye(e,e.return,l)}}function ph(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zn(e.type)||e.tag===4}function ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ph(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(a!==4&&(a===27&&zn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}function Zi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&zn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}function mh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);$e(t,a,n),t[Xe]=e,t[tt]=n}catch(i){ye(e,e.return,i)}}var nn=!1,Be=!1,gs=!1,gh=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Sg(e,t){if(e=e.containerInfo,Gs=du,e=Ro(e),cr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,d=-1,v=-1,_=0,w=0,j=e,R=null;t:for(;;){for(var N;j!==n||l!==0&&j.nodeType!==3||(d=o+l),j!==i||a!==0&&j.nodeType!==3||(v=o+a),j.nodeType===3&&(o+=j.nodeValue.length),(N=j.firstChild)!==null;)R=j,j=N;for(;;){if(j===e)break t;if(R===n&&++_===l&&(d=o),R===i&&++w===a&&(v=o),(N=j.nextSibling)!==null)break;j=R,R=j.parentNode}j=N}n=d===-1||v===-1?null:{start:d,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Us={focusedElem:e,selectionRange:n},du=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var Y=aa(n.type,l);e=a.getSnapshotBeforeUpdate(Y,i),a.__reactInternalSnapshotBeforeUpdate=e}catch($){ye(n,n.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function yh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:ln(e,n),a&4&&_l(5,n);break;case 1:if(ln(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ye(n,n.return,o)}else{var l=aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ye(n,n.return,o)}}a&64&&fh(n),a&512&&Rl(n,n.return);break;case 3:if(ln(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ef(e,t)}catch(o){ye(n,n.return,o)}}break;case 27:t===null&&a&4&&mh(n);case 26:case 5:ln(e,n),t===null&&a&4&&dh(n),a&512&&Rl(n,n.return);break;case 12:ln(e,n);break;case 31:ln(e,n),a&4&&xh(e,n);break;case 13:ln(e,n),a&4&&Sh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Og.bind(null,n),Ig(e,n))));break;case 22:if(a=n.memoizedState!==null||nn,!a){t=t!==null&&t.memoizedState!==null||Be,l=nn;var i=Be;nn=a,(Be=t)&&!i?un(e,n,(n.subtreeFlags&8772)!==0):ln(e,n),nn=l,Be=i}break;case 30:break;default:ln(e,n)}}function bh(e){var t=e.alternate;t!==null&&(e.alternate=null,bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,at=!1;function an(e,t,n){for(n=n.child;n!==null;)vh(e,t,n),n=n.sibling}function vh(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 26:Be||Qt(n,t),an(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Be||Qt(n,t);var a=Me,l=at;zn(n.type)&&(Me=n.stateNode,at=!1),an(e,t,n),Ll(n.stateNode),Me=a,at=l;break;case 5:Be||Qt(n,t);case 6:if(a=Me,l=at,Me=null,an(e,t,n),Me=a,at=l,Me!==null)if(at)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(i){ye(n,t,i)}else try{Me.removeChild(n.stateNode)}catch(i){ye(n,t,i)}break;case 18:Me!==null&&(at?(e=Me,fd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Za(e)):fd(Me,n.stateNode));break;case 4:a=Me,l=at,Me=n.stateNode.containerInfo,at=!0,an(e,t,n),Me=a,at=l;break;case 0:case 11:case 14:case 15:Rn(2,n,t),Be||Rn(4,n,t),an(e,t,n);break;case 1:Be||(Qt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&hh(n,t,a)),an(e,t,n);break;case 21:an(e,t,n);break;case 22:Be=(a=Be)||n.memoizedState!==null,an(e,t,n),Be=a;break;default:an(e,t,n)}}function xh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Za(e)}catch(n){ye(t,t.return,n)}}}function Sh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Za(e)}catch(n){ye(t,t.return,n)}}function Eg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gh),t;default:throw Error(c(435,e.tag))}}function Ji(e,t){var n=Eg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Dg.bind(null,e,a);a.then(l,l)}})}function lt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(zn(d.type)){Me=d.stateNode,at=!1;break e}break;case 5:Me=d.stateNode,at=!1;break e;case 3:case 4:Me=d.stateNode.containerInfo,at=!0;break e}d=d.return}if(Me===null)throw Error(c(160));vh(i,o,l),Me=null,at=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Eh(t,e),t=t.sibling}var kt=null;function Eh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),it(e),a&4&&(Rn(3,e,e.return),_l(3,e),Rn(5,e,e.return));break;case 1:lt(t,e),it(e),a&512&&(Be||n===null||Qt(n,n.return)),a&64&&nn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=kt;if(lt(t,e),it(e),a&512&&(Be||n===null||Qt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[el]||i[Xe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),$e(i,a,n),i[Xe]=e,Qe(i),a=i;break e;case"link":var o=Ed("link","href",l).get(a+(n.href||""));if(o){for(var d=0;d<o.length;d++)if(i=o[d],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(d,1);break t}}i=l.createElement(a),$e(i,a,n),l.head.appendChild(i);break;case"meta":if(o=Ed("meta","content",l).get(a+(n.content||""))){for(d=0;d<o.length;d++)if(i=o[d],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(d,1);break t}}i=l.createElement(a),$e(i,a,n),l.head.appendChild(i);break;default:throw Error(c(468,a))}i[Xe]=e,Qe(i),a=i}e.stateNode=a}else Td(l,e.type,e.stateNode);else e.stateNode=Sd(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Td(l,e.type,e.stateNode):Sd(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ds(e,e.memoizedProps,n.memoizedProps)}break;case 27:lt(t,e),it(e),a&512&&(Be||n===null||Qt(n,n.return)),n!==null&&a&4&&ds(e,e.memoizedProps,n.memoizedProps);break;case 5:if(lt(t,e),it(e),a&512&&(Be||n===null||Qt(n,n.return)),e.flags&32){l=e.stateNode;try{ma(l,"")}catch(Y){ye(e,e.return,Y)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,ds(e,l,n!==null?n.memoizedProps:l)),a&1024&&(gs=!0);break;case 6:if(lt(t,e),it(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Y){ye(e,e.return,Y)}}break;case 3:if(cu=null,l=kt,kt=ru(t.containerInfo),lt(t,e),kt=l,it(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(t.containerInfo)}catch(Y){ye(e,e.return,Y)}gs&&(gs=!1,Th(e));break;case 4:a=kt,kt=ru(e.stateNode.containerInfo),lt(t,e),it(e),kt=a;break;case 12:lt(t,e),it(e);break;case 31:lt(t,e),it(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 13:lt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($i=st()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,_=nn,w=Be;if(nn=_||l,Be=w||v,lt(t,e),Be=w,nn=_,it(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||nn||Be||la(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(i=v.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=v.stateNode;var j=v.memoizedProps.style,R=j!=null&&j.hasOwnProperty("display")?j.display:null;d.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(Y){ye(v,v.return,Y)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(Y){ye(v,v.return,Y)}}}else if(t.tag===18){if(n===null){v=t;try{var N=v.stateNode;l?hd(N,!0):hd(v.stateNode,!1)}catch(Y){ye(v,v.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ji(e,n))));break;case 19:lt(t,e),it(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 30:break;case 21:break;default:lt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ph(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,i=ps(e);Zi(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(ma(o,""),n.flags&=-33);var d=ps(e);Zi(e,d,o);break;case 3:case 4:var v=n.stateNode.containerInfo,_=ps(e);ms(e,_,v);break;default:throw Error(c(161))}}catch(w){ye(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Th(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Th(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ln(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yh(e,t.alternate,t),t=t.sibling}function la(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rn(4,t,t.return),la(t);break;case 1:Qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&hh(t,t.return,n),la(t);break;case 27:Ll(t.stateNode);case 26:case 5:Qt(t,t.return),la(t);break;case 22:t.memoizedState===null&&la(t);break;case 30:la(t);break;default:la(t)}e=e.sibling}}function un(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:un(l,i,n),_l(4,i);break;case 1:if(un(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){ye(a,a.return,_)}if(a=i,l=a.updateQueue,l!==null){var d=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Wo(v[l],d)}catch(_){ye(a,a.return,_)}}n&&o&64&&fh(i),Rl(i,i.return);break;case 27:mh(i);case 26:case 5:un(l,i,n),n&&a===null&&o&4&&dh(i),Rl(i,i.return);break;case 12:un(l,i,n);break;case 31:un(l,i,n),n&&o&4&&xh(l,i);break;case 13:un(l,i,n),n&&o&4&&Sh(l,i);break;case 22:i.memoizedState===null&&un(l,i,n),Rl(i,i.return);break;case 30:break;default:un(l,i,n)}t=t.sibling}}function ys(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&dl(n))}function bs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dl(e))}function zt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ch(e,t,n,a),t=t.sibling}function Ch(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,n,a),l&2048&&_l(9,t);break;case 1:zt(e,t,n,a);break;case 3:zt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dl(e)));break;case 12:if(l&2048){zt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,d=i.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ye(t,t.return,v)}}else zt(e,t,n,a);break;case 31:zt(e,t,n,a);break;case 13:zt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?zt(e,t,n,a):Ml(e,t):i._visibility&2?zt(e,t,n,a):(i._visibility|=2,ja(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&ys(o,t);break;case 24:zt(e,t,n,a),l&2048&&bs(t.alternate,t);break;default:zt(e,t,n,a)}}function ja(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,d=n,v=a,_=o.flags;switch(o.tag){case 0:case 11:case 15:ja(i,o,d,v,l),_l(8,o);break;case 23:break;case 22:var w=o.stateNode;o.memoizedState!==null?w._visibility&2?ja(i,o,d,v,l):Ml(i,o):(w._visibility|=2,ja(i,o,d,v,l)),l&&_&2048&&ys(o.alternate,o);break;case 24:ja(i,o,d,v,l),l&&_&2048&&bs(o.alternate,o);break;default:ja(i,o,d,v,l)}t=t.sibling}}function Ml(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Ml(n,a),l&2048&&ys(a.alternate,a);break;case 24:Ml(n,a),l&2048&&bs(a.alternate,a);break;default:Ml(n,a)}t=t.sibling}}var Nl=8192;function La(e,t,n){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)Ah(e,t,n),e=e.sibling}function Ah(e,t,n){switch(e.tag){case 26:La(e,t,n),e.flags&Nl&&e.memoizedState!==null&&s0(n,kt,e.memoizedState,e.memoizedProps);break;case 5:La(e,t,n);break;case 3:case 4:var a=kt;kt=ru(e.stateNode.containerInfo),La(e,t,n),kt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Nl,Nl=16777216,La(e,t,n),Nl=a):La(e,t,n));break;default:La(e,t,n)}}function _h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ye=a,Mh(a,e)}_h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rh(e),e=e.sibling}function Rh(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&Rn(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ki(e)):Ol(e);break;default:Ol(e)}}function Ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ye=a,Mh(a,e)}_h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rn(8,t,t.return),Ki(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ki(t));break;default:Ki(t)}e=e.sibling}}function Mh(e,t){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:Rn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:dl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ye=a;else e:for(n=e;Ye!==null;){a=Ye;var l=a.sibling,i=a.return;if(bh(a),a===n){Ye=null;break e}if(l!==null){l.return=i,Ye=l;break e}Ye=i}}}var Tg={getCacheForType:function(e){var t=Je(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Je(Ge).controller.signal}},Cg=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ae=null,ie=null,se=0,ge=0,mt=null,Mn=!1,Ga=!1,vs=!1,rn=0,De=0,Nn=0,ia=0,xs=0,gt=0,Ua=0,Dl=null,ut=null,Ss=!1,$i=0,Nh=0,Ii=1/0,Pi=null,On=null,qe=0,Dn=null,Ha=null,sn=0,Es=0,Ts=null,Oh=null,wl=0,Cs=null;function yt(){return(pe&2)!==0&&se!==0?se&-se:k.T!==null?Os():Vc()}function Dh(){if(gt===0)if((se&536870912)===0||oe){var e=ii;ii<<=1,(ii&3932160)===0&&(ii=262144),gt=e}else gt=536870912;return e=dt.current,e!==null&&(e.flags|=32),gt}function rt(e,t,n){(e===Ae&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Ba(e,0),wn(e,se,gt,!1)),Wa(e,n),((pe&2)===0||e!==Ae)&&(e===Ae&&((pe&2)===0&&(ia|=n),De===4&&wn(e,se,gt,!1)),Yt(e))}function wh(e,t,n){if((pe&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Fa(e,t),l=a?Rg(e,t):_s(e,t,!0),i=a;do{if(l===0){Ga&&!a&&wn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Ag(n)){l=_s(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;l=Dl;var v=d.current.memoizedState.isDehydrated;if(v&&(Ba(d,o).flags|=256),o=_s(d,o,!1),o!==2){if(vs&&!v){d.errorRecoveryDisabledLanes|=i,ia|=i,l=4;break e}i=ut,ut=l,i!==null&&(ut===null?ut=i:ut.push.apply(ut,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Ba(e,0),wn(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:wn(a,t,gt,!Mn);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=$i+300-st(),10<l)){if(wn(a,t,gt,!Mn),ri(a,0,!0)!==0)break e;sn=t,a.timeoutHandle=cd(kh.bind(null,a,n,ut,Pi,Ss,t,gt,ia,Ua,Mn,i,"Throttled",-0,0),l);break e}kh(a,n,ut,Pi,Ss,t,gt,ia,Ua,Mn,i,null,-0,0)}}break}while(!0);Yt(e)}function kh(e,t,n,a,l,i,o,d,v,_,w,j,R,N){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Ah(t,i,j);var Y=(i&62914560)===i?$i-st():(i&4194048)===i?Nh-st():0;if(Y=c0(j,Y),Y!==null){sn=i,e.cancelPendingCommit=Y(qh.bind(null,e,t,i,n,a,l,o,d,v,w,j,null,R,N)),wn(e,i,o,!_);return}}qh(e,t,i,n,a,l,o,d,v)}function Ag(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!ft(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t,n,a){t&=~xs,t&=~ia,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-ot(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&qc(e,n,t)}function Fi(){return(pe&6)===0?(kl(0),!1):!0}function As(){if(ie!==null){if(ge===0)var e=ie.return;else e=ie,It=In=null,qr(e),Oa=null,ml=0,e=ie;for(;e!==null;)oh(e.alternate,e),e=e.return;ie=null}}function Ba(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Xg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),sn=0,As(),Ae=e,ie=n=Kt(e.current,null),se=t,ge=0,mt=null,Mn=!1,Ga=Fa(e,t),vs=!1,Ua=gt=xs=ia=Nn=De=0,ut=Dl=null,Ss=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-ot(a),i=1<<l;t|=e[l],a&=~i}return rn=t,vi(),n}function zh(e,t){ne=null,k.H=Tl,t===Na||t===Ri?(t=$o(),ge=3):t===Nr?(t=$o(),ge=4):ge=t===as?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,ie===null&&(De=1,qi(e,Tt(t,e.current)))}function jh(){var e=dt.current;return e===null?!0:(se&4194048)===se?Rt===null:(se&62914560)===se||(se&536870912)!==0?e===Rt:!1}function Lh(){var e=k.H;return k.H=Tl,e===null?Tl:e}function Gh(){var e=k.A;return k.A=Tg,e}function Wi(){De=4,Mn||(se&4194048)!==se&&dt.current!==null||(Ga=!0),(Nn&134217727)===0&&(ia&134217727)===0||Ae===null||wn(Ae,se,gt,!1)}function _s(e,t,n){var a=pe;pe|=2;var l=Lh(),i=Gh();(Ae!==e||se!==t)&&(Pi=null,Ba(e,t)),t=!1;var o=De;e:do try{if(ge!==0&&ie!==null){var d=ie,v=mt;switch(ge){case 8:As(),o=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var _=ge;if(ge=0,mt=null,qa(e,d,v,_),n&&Ga){o=0;break e}break;default:_=ge,ge=0,mt=null,qa(e,d,v,_)}}_g(),o=De;break}catch(w){zh(e,w)}while(!0);return t&&e.shellSuspendCounter++,It=In=null,pe=a,k.H=l,k.A=i,ie===null&&(Ae=null,se=0,vi()),o}function _g(){for(;ie!==null;)Uh(ie)}function Rg(e,t){var n=pe;pe|=2;var a=Lh(),l=Gh();Ae!==e||se!==t?(Pi=null,Ii=st()+500,Ba(e,t)):Ga=Fa(e,t);e:do try{if(ge!==0&&ie!==null){t=ie;var i=mt;t:switch(ge){case 1:ge=0,mt=null,qa(e,t,i,1);break;case 2:case 9:if(Jo(i)){ge=0,mt=null,Hh(t);break}t=function(){ge!==2&&ge!==9||Ae!==e||(ge=7),Yt(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Jo(i)?(ge=0,mt=null,Hh(t)):(ge=0,mt=null,qa(e,t,i,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var d=ie;if(o?Cd(o):d.stateNode.complete){ge=0,mt=null;var v=d.sibling;if(v!==null)ie=v;else{var _=d.return;_!==null?(ie=_,eu(_)):ie=null}break t}}ge=0,mt=null,qa(e,t,i,5);break;case 6:ge=0,mt=null,qa(e,t,i,6);break;case 8:As(),De=6;break e;default:throw Error(c(462))}}Mg();break}catch(w){zh(e,w)}while(!0);return It=In=null,k.H=a,k.A=l,pe=n,ie!==null?0:(Ae=null,se=0,vi(),De)}function Mg(){for(;ie!==null&&!Pp();)Uh(ie)}function Uh(e){var t=sh(e.alternate,e,rn);e.memoizedProps=e.pendingProps,t===null?eu(e):ie=t}function Hh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=nh(n,t,t.pendingProps,t.type,void 0,se);break;case 11:t=nh(n,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:qr(t);default:oh(n,t),t=ie=Lo(t,rn),t=sh(n,t,rn)}e.memoizedProps=e.pendingProps,t===null?eu(e):ie=t}function qa(e,t,n,a){It=In=null,qr(t),Oa=null,ml=0;var l=t.return;try{if(gg(e,l,t,n,se)){De=1,qi(e,Tt(n,e.current)),ie=null;return}}catch(i){if(l!==null)throw ie=l,i;De=1,qi(e,Tt(n,e.current)),ie=null;return}t.flags&32768?(oe||a===1?e=!0:Ga||(se&536870912)!==0?e=!1:(Mn=e=!0,(a===2||a===9||a===3||a===6)&&(a=dt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Bh(t,e)):eu(t)}function eu(e){var t=e;do{if((t.flags&32768)!==0){Bh(t,Mn);return}e=t.return;var n=vg(t.alternate,t,rn);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);De===0&&(De=5)}function Bh(e,t){do{var n=xg(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);De=6,ie=null}function qh(e,t,n,a,l,i,o,d,v){e.cancelPendingCommit=null;do tu();while(qe!==0);if((pe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=pr,rm(e,n,i,o,d,v),e===Ae&&(ie=Ae=null,se=0),Ha=t,Dn=e,sn=n,Es=i,Ts=l,Oh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wg(ai,function(){return Zh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,l=q.p,q.p=2,o=pe,pe|=4;try{Sg(e,t,n)}finally{pe=o,q.p=l,k.T=a}}qe=1,Qh(),Yh(),Vh()}}function Qh(){if(qe===1){qe=0;var e=Dn,t=Ha,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var a=q.p;q.p=2;var l=pe;pe|=4;try{Eh(t,e);var i=Us,o=Ro(e.containerInfo),d=i.focusedElem,v=i.selectionRange;if(o!==d&&d&&d.ownerDocument&&_o(d.ownerDocument.documentElement,d)){if(v!==null&&cr(d)){var _=v.start,w=v.end;if(w===void 0&&(w=_),"selectionStart"in d)d.selectionStart=_,d.selectionEnd=Math.min(w,d.value.length);else{var j=d.ownerDocument||document,R=j&&j.defaultView||window;if(R.getSelection){var N=R.getSelection(),Y=d.textContent.length,$=Math.min(v.start,Y),Ee=v.end===void 0?$:Math.min(v.end,Y);!N.extend&&$>Ee&&(o=Ee,Ee=$,$=o);var C=Ao(d,$),x=Ao(d,Ee);if(C&&x&&(N.rangeCount!==1||N.anchorNode!==C.node||N.anchorOffset!==C.offset||N.focusNode!==x.node||N.focusOffset!==x.offset)){var A=j.createRange();A.setStart(C.node,C.offset),N.removeAllRanges(),$>Ee?(N.addRange(A),N.extend(x.node,x.offset)):(A.setEnd(x.node,x.offset),N.addRange(A))}}}}for(j=[],N=d;N=N.parentNode;)N.nodeType===1&&j.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<j.length;d++){var z=j[d];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}du=!!Gs,Us=Gs=null}finally{pe=l,q.p=a,k.T=n}}e.current=t,qe=2}}function Yh(){if(qe===2){qe=0;var e=Dn,t=Ha,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var a=q.p;q.p=2;var l=pe;pe|=4;try{yh(e,t.alternate,t)}finally{pe=l,q.p=a,k.T=n}}qe=3}}function Vh(){if(qe===4||qe===3){qe=0,Fp();var e=Dn,t=Ha,n=sn,a=Oh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ha=Dn=null,Xh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(On=null),Vu(n),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Pa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=k.T,l=q.p,q.p=2,k.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var d=a[o];i(d.value,{componentStack:d.stack})}}finally{k.T=t,q.p=l}}(sn&3)!==0&&tu(),Yt(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Cs?wl++:(wl=0,Cs=e):wl=0,kl(0)}}function Xh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,dl(t)))}function tu(){return Qh(),Yh(),Vh(),Zh()}function Zh(){if(qe!==5)return!1;var e=Dn,t=Es;Es=0;var n=Vu(sn),a=k.T,l=q.p;try{q.p=32>n?32:n,k.T=null,n=Ts,Ts=null;var i=Dn,o=sn;if(qe=0,Ha=Dn=null,sn=0,(pe&6)!==0)throw Error(c(331));var d=pe;if(pe|=4,Rh(i.current),Ch(i,i.current,o,n),pe=d,kl(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Pa,i)}catch{}return!0}finally{q.p=l,k.T=a,Xh(e,t)}}function Jh(e,t,n){t=Tt(n,t),t=ns(e.stateNode,t,2),e=Cn(e,t,2),e!==null&&(Wa(e,2),Yt(e))}function ye(e,t,n){if(e.tag===3)Jh(e,e,n);else for(;t!==null;){if(t.tag===3){Jh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(On===null||!On.has(a))){e=Tt(n,e),n=Kf(2),a=Cn(t,n,2),a!==null&&($f(n,a,t,e),Wa(a,2),Yt(a));break}}t=t.return}}function Rs(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Cg;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(vs=!0,l.add(n),e=Ng.bind(null,e,t,n),t.then(e,e))}function Ng(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(se&n)===n&&(De===4||De===3&&(se&62914560)===se&&300>st()-$i?(pe&2)===0&&Ba(e,0):xs|=n,Ua===se&&(Ua=0)),Yt(e)}function Kh(e,t){t===0&&(t=Bc()),e=Jn(e,t),e!==null&&(Wa(e,t),Yt(e))}function Og(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kh(e,n)}function Dg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Kh(e,n)}function wg(e,t){return Bu(e,t)}var nu=null,Qa=null,Ms=!1,au=!1,Ns=!1,kn=0;function Yt(e){e!==Qa&&e.next===null&&(Qa===null?nu=Qa=e:Qa=Qa.next=e),au=!0,Ms||(Ms=!0,zg())}function kl(e,t){if(!Ns&&au){Ns=!0;do for(var n=!1,a=nu;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,d=a.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=l&~(o&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Fh(a,i))}else i=se,i=ri(a,a===Ae?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Fa(a,i)||(n=!0,Fh(a,i));a=a.next}while(n);Ns=!1}}function kg(){$h()}function $h(){au=Ms=!1;var e=0;kn!==0&&Vg()&&(e=kn);for(var t=st(),n=null,a=nu;a!==null;){var l=a.next,i=Ih(a,t);i===0?(a.next=null,n===null?nu=l:n.next=l,l===null&&(Qa=n)):(n=a,(e!==0||(i&3)!==0)&&(au=!0)),a=l}qe!==0&&qe!==5||kl(e),kn!==0&&(kn=0)}function Ih(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ot(i),d=1<<o,v=l[o];v===-1?((d&n)===0||(d&a)!==0)&&(l[o]=um(d,t)):v<=t&&(e.expiredLanes|=d),i&=~d}if(t=Ae,n=se,n=ri(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&qu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&qu(a),Vu(n)){case 2:case 8:n=Uc;break;case 32:n=ai;break;case 268435456:n=Hc;break;default:n=ai}return a=Ph.bind(null,e),n=Bu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&qu(a),e.callbackPriority=2,e.callbackNode=null,2}function Ph(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(tu()&&e.callbackNode!==n)return null;var a=se;return a=ri(e,e===Ae?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(wh(e,a,t),Ih(e,st()),e.callbackNode!=null&&e.callbackNode===n?Ph.bind(null,e):null)}function Fh(e,t){if(tu())return null;wh(e,t,!0)}function zg(){Zg(function(){(pe&6)!==0?Bu(Gc,kg):$h()})}function Os(){if(kn===0){var e=Ra;e===0&&(e=li,li<<=1,(li&261888)===0&&(li=256)),kn=e}return kn}function Wh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fi(""+e)}function ed(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function jg(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Wh((l[tt]||null).action),o=a.submitter;o&&(t=(t=o[tt]||null)?Wh(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var d=new mi("action","action",null,a,l);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(kn!==0){var v=o?ed(l,o):new FormData(l);Ir(n,{pending:!0,data:v,method:l.method,action:i},null,v)}}else typeof i=="function"&&(d.preventDefault(),v=o?ed(l,o):new FormData(l),Ir(n,{pending:!0,data:v,method:l.method,action:i},i,v))},currentTarget:l}]})}}for(var Ds=0;Ds<dr.length;Ds++){var ws=dr[Ds],Lg=ws.toLowerCase(),Gg=ws[0].toUpperCase()+ws.slice(1);wt(Lg,"on"+Gg)}wt(Oo,"onAnimationEnd"),wt(Do,"onAnimationIteration"),wt(wo,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(Wm,"onTransitionRun"),wt(eg,"onTransitionStart"),wt(tg,"onTransitionCancel"),wt(ko,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var d=a[o],v=d.instance,_=d.currentTarget;if(d=d.listener,v!==i&&l.isPropagationStopped())break e;i=d,l.currentTarget=_;try{i(l)}catch(w){bi(w)}l.currentTarget=null,i=v}else for(o=0;o<a.length;o++){if(d=a[o],v=d.instance,_=d.currentTarget,d=d.listener,v!==i&&l.isPropagationStopped())break e;i=d,l.currentTarget=_;try{i(l)}catch(w){bi(w)}l.currentTarget=null,i=v}}}}function ue(e,t){var n=t[Xu];n===void 0&&(n=t[Xu]=new Set);var a=e+"__bubble";n.has(a)||(nd(t,e,2,!1),n.add(a))}function ks(e,t,n){var a=0;t&&(a|=4),nd(n,e,a,t)}var lu="_reactListening"+Math.random().toString(36).slice(2);function zs(e){if(!e[lu]){e[lu]=!0,Jc.forEach(function(n){n!=="selectionchange"&&(Ug.has(n)||ks(n,!1,e),ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lu]||(t[lu]=!0,ks("selectionchange",!1,t))}}function nd(e,t,n,a){switch(Dd(t)){case 2:var l=h0;break;case 8:l=d0;break;default:l=$s}n=l.bind(null,t,n,e),l=void 0,!er||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function js(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var d=a.stateNode.containerInfo;if(d===l)break;if(o===4)for(o=a.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;d!==null;){if(o=oa(d),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){a=i=o;continue e}d=d.parentNode}}a=a.return}io(function(){var _=i,w=Fu(n),j=[];e:{var R=zo.get(e);if(R!==void 0){var N=mi,Y=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":N=Dm;break;case"focusin":Y="focus",N=lr;break;case"focusout":Y="blur",N=lr;break;case"beforeblur":case"afterblur":N=lr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=zm;break;case Oo:case Do:case wo:N=Em;break;case ko:N=Lm;break;case"scroll":case"scrollend":N=ym;break;case"wheel":N=Um;break;case"copy":case"cut":case"paste":N=Cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=oo;break;case"toggle":case"beforetoggle":N=Bm}var $=(t&4)!==0,Ee=!$&&(e==="scroll"||e==="scrollend"),C=$?R!==null?R+"Capture":null:R;$=[];for(var x=_,A;x!==null;){var z=x;if(A=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||A===null||C===null||(z=nl(x,C),z!=null&&$.push(jl(x,z,A))),Ee)break;x=x.return}0<$.length&&(R=new N(R,Y,null,n,w),j.push({event:R,listeners:$}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&n!==Pu&&(Y=n.relatedTarget||n.fromElement)&&(oa(Y)||Y[ca]))break e;if((N||R)&&(R=w.window===w?w:(R=w.ownerDocument)?R.defaultView||R.parentWindow:window,N?(Y=n.relatedTarget||n.toElement,N=_,Y=Y?oa(Y):null,Y!==null&&(Ee=h(Y),$=Y.tag,Y!==Ee||$!==5&&$!==27&&$!==6)&&(Y=null)):(N=null,Y=_),N!==Y)){if($=so,z="onMouseLeave",C="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&($=oo,z="onPointerLeave",C="onPointerEnter",x="pointer"),Ee=N==null?R:tl(N),A=Y==null?R:tl(Y),R=new $(z,x+"leave",N,n,w),R.target=Ee,R.relatedTarget=A,z=null,oa(w)===_&&($=new $(C,x+"enter",Y,n,w),$.target=A,$.relatedTarget=Ee,z=$),Ee=z,N&&Y)t:{for($=Hg,C=N,x=Y,A=0,z=C;z;z=$(z))A++;z=0;for(var J=x;J;J=$(J))z++;for(;0<A-z;)C=$(C),A--;for(;0<z-A;)x=$(x),z--;for(;A--;){if(C===x||x!==null&&C===x.alternate){$=C;break t}C=$(C),x=$(x)}$=null}else $=null;N!==null&&ad(j,R,N,$,!1),Y!==null&&Ee!==null&&ad(j,Ee,Y,$,!0)}}e:{if(R=_?tl(_):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var fe=vo;else if(yo(R))if(xo)fe=Im;else{fe=Km;var Z=Jm}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?_&&Iu(_.elementType)&&(fe=vo):fe=$m;if(fe&&(fe=fe(e,_))){bo(j,fe,n,w);break e}Z&&Z(e,R,_),e==="focusout"&&_&&R.type==="number"&&_.memoizedProps.value!=null&&$u(R,"number",R.value)}switch(Z=_?tl(_):window,e){case"focusin":(yo(Z)||Z.contentEditable==="true")&&(va=Z,or=_,ol=null);break;case"focusout":ol=or=va=null;break;case"mousedown":fr=!0;break;case"contextmenu":case"mouseup":case"dragend":fr=!1,Mo(j,n,w);break;case"selectionchange":if(Fm)break;case"keydown":case"keyup":Mo(j,n,w)}var ae;if(ur)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else ba?mo(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(fo&&n.locale!=="ko"&&(ba||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ba&&(ae=uo()):(yn=w,tr="value"in yn?yn.value:yn.textContent,ba=!0)),Z=iu(_,ce),0<Z.length&&(ce=new co(ce,e,null,n,w),j.push({event:ce,listeners:Z}),ae?ce.data=ae:(ae=go(n),ae!==null&&(ce.data=ae)))),(ae=Qm?Ym(e,n):Vm(e,n))&&(ce=iu(_,"onBeforeInput"),0<ce.length&&(Z=new co("onBeforeInput","beforeinput",null,n,w),j.push({event:Z,listeners:ce}),Z.data=ae)),jg(j,e,_,n,w)}td(j,t)})}function jl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function iu(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=nl(e,n),l!=null&&a.unshift(jl(e,l,i)),l=nl(e,t),l!=null&&a.push(jl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Hg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ad(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var d=n,v=d.alternate,_=d.stateNode;if(d=d.tag,v!==null&&v===a)break;d!==5&&d!==26&&d!==27||_===null||(v=_,l?(_=nl(n,i),_!=null&&o.unshift(jl(n,_,v))):l||(_=nl(n,i),_!=null&&o.push(jl(n,_,v)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Bg=/\r\n?/g,qg=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(Bg,`
`).replace(qg,"")}function id(e,t){return t=ld(t),ld(e)===t}function Se(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ma(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ma(e,""+a);break;case"className":ci(e,"class",a);break;case"tabIndex":ci(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ci(e,n,a);break;case"style":ao(e,a,i);break;case"data":if(t!=="object"){ci(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=fi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=fi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Zt);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=fi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ue("beforetoggle",e),ue("toggle",e),si(e,"popover",a);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":si(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=mm.get(n)||n,si(e,n,a))}}function Ls(e,t,n,a,l,i){switch(n){case"style":ao(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ma(e,a):(typeof a=="number"||typeof a=="bigint")&&ma(e,""+a);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[tt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):si(e,n,a)}}}function $e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,i,o,n,null)}}l&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":ue("invalid",e);var d=i=o=l=null,v=null,_=null;for(a in n)if(n.hasOwnProperty(a)){var w=n[a];if(w!=null)switch(a){case"name":l=w;break;case"type":o=w;break;case"checked":v=w;break;case"defaultChecked":_=w;break;case"value":i=w;break;case"defaultValue":d=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:Se(e,t,a,w,n,null)}}Wc(e,i,d,v,_,o,l,!1);return;case"select":ue("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(d=n[l],d!=null))switch(l){case"value":i=d;break;case"defaultValue":o=d;break;case"multiple":a=d;default:Se(e,t,l,d,n,null)}t=i,n=o,e.multiple=!!a,t!=null?pa(e,!!a,t,!1):n!=null&&pa(e,!!a,n,!0);return;case"textarea":ue("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(d=n[o],d!=null))switch(o){case"value":a=d;break;case"defaultValue":l=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Se(e,t,o,d,n,null)}to(e,a,l,i);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,v,a,n,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(a=0;a<zl.length;a++)ue(zl[a],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(a=n[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,_,a,n,null)}return;default:if(Iu(t)){for(w in n)n.hasOwnProperty(w)&&(a=n[w],a!==void 0&&Ls(e,t,w,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&Se(e,t,d,a,n,null))}function Qg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,d=null,v=null,_=null,w=null;for(N in n){var j=n[N];if(n.hasOwnProperty(N)&&j!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=j;default:a.hasOwnProperty(N)||Se(e,t,N,null,a,j)}}for(var R in a){var N=a[R];if(j=n[R],a.hasOwnProperty(R)&&(N!=null||j!=null))switch(R){case"type":i=N;break;case"name":l=N;break;case"checked":_=N;break;case"defaultChecked":w=N;break;case"value":o=N;break;case"defaultValue":d=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==j&&Se(e,t,R,N,a,j)}}Ku(e,o,d,v,_,w,i,l);return;case"select":N=o=d=R=null;for(i in n)if(v=n[i],n.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":N=v;default:a.hasOwnProperty(i)||Se(e,t,i,null,a,v)}for(l in a)if(i=a[l],v=n[l],a.hasOwnProperty(l)&&(i!=null||v!=null))switch(l){case"value":R=i;break;case"defaultValue":d=i;break;case"multiple":o=i;default:i!==v&&Se(e,t,l,i,a,v)}t=d,n=o,a=N,R!=null?pa(e,!!n,R,!1):!!a!=!!n&&(t!=null?pa(e,!!n,t,!0):pa(e,!!n,n?[]:"",!1));return;case"textarea":N=R=null;for(d in n)if(l=n[d],n.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Se(e,t,d,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":R=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&Se(e,t,o,l,a,i)}eo(e,R,N);return;case"option":for(var Y in n)if(R=n[Y],n.hasOwnProperty(Y)&&R!=null&&!a.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:Se(e,t,Y,null,a,R)}for(v in a)if(R=a[v],N=n[v],a.hasOwnProperty(v)&&R!==N&&(R!=null||N!=null))switch(v){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Se(e,t,v,R,a,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in n)R=n[$],n.hasOwnProperty($)&&R!=null&&!a.hasOwnProperty($)&&Se(e,t,$,null,a,R);for(_ in a)if(R=a[_],N=n[_],a.hasOwnProperty(_)&&R!==N&&(R!=null||N!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Se(e,t,_,R,a,N)}return;default:if(Iu(t)){for(var Ee in n)R=n[Ee],n.hasOwnProperty(Ee)&&R!==void 0&&!a.hasOwnProperty(Ee)&&Ls(e,t,Ee,void 0,a,R);for(w in a)R=a[w],N=n[w],!a.hasOwnProperty(w)||R===N||R===void 0&&N===void 0||Ls(e,t,w,R,a,N);return}}for(var C in n)R=n[C],n.hasOwnProperty(C)&&R!=null&&!a.hasOwnProperty(C)&&Se(e,t,C,null,a,R);for(j in a)R=a[j],N=n[j],!a.hasOwnProperty(j)||R===N||R==null&&N==null||Se(e,t,j,R,a,N)}function ud(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,d=l.duration;if(i&&d&&ud(o)){for(o=0,d=l.responseEnd,a+=1;a<n.length;a++){var v=n[a],_=v.startTime;if(_>d)break;var w=v.transferSize,j=v.initiatorType;w&&ud(j)&&(v=v.responseEnd,o+=w*(v<d?1:(d-_)/(v-_)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gs=null,Us=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function rd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bs=null;function Vg(){var e=window.event;return e&&e.type==="popstate"?e===Bs?!1:(Bs=e,!0):(Bs=null,!1)}var cd=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(Jg)}:cd;function Jg(e){setTimeout(function(){throw e})}function zn(e){return e==="head"}function fd(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Za(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ll(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ll(n);for(var i=n.firstChild;i;){var o=i.nextSibling,d=i.nodeName;i[el]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Ll(e.ownerDocument.body);n=l}while(n);Za(t)}function hd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function qs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qs(n),Zu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Kg(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[el])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function $g(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mt(e.nextSibling),e===null))return null;return e}function dd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Qs(e){return e.data==="$?"||e.data==="$~"}function Ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ig(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Vs=null;function pd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Mt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function md(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function gd(e,t,n){switch(t=uu(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zu(e)}var Nt=new Map,yd=new Set;function ru(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cn=q.d;q.d={f:Pg,r:Fg,D:Wg,C:e0,L:t0,m:n0,X:l0,S:a0,M:i0};function Pg(){var e=cn.f(),t=Fi();return e||t}function Fg(e){var t=fa(e);t!==null&&t.tag===5&&t.type==="form"?zf(t):cn.r(e)}var Ya=typeof document>"u"?null:document;function bd(e,t,n){var a=Ya;if(a&&typeof t=="string"&&t){var l=St(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),yd.has(l)||(yd.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),$e(t,"link",e),Qe(t),a.head.appendChild(t)))}}function Wg(e){cn.D(e),bd("dns-prefetch",e,null)}function e0(e,t){cn.C(e,t),bd("preconnect",e,t)}function t0(e,t,n){cn.L(e,t,n);var a=Ya;if(a&&e&&t){var l='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+St(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+St(n.imageSizes)+'"]')):l+='[href="'+St(e)+'"]';var i=l;switch(t){case"style":i=Va(e);break;case"script":i=Xa(e)}Nt.has(i)||(e=T({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Nt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Gl(i))||t==="script"&&a.querySelector(Ul(i))||(t=a.createElement("link"),$e(t,"link",e),Qe(t),a.head.appendChild(t)))}}function n0(e,t){cn.m(e,t);var n=Ya;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+St(a)+'"][href="'+St(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Xa(e)}if(!Nt.has(i)&&(e=T({rel:"modulepreload",href:e},t),Nt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ul(i)))return}a=n.createElement("link"),$e(a,"link",e),Qe(a),n.head.appendChild(a)}}}function a0(e,t,n){cn.S(e,t,n);var a=Ya;if(a&&e){var l=ha(a).hoistableStyles,i=Va(e);t=t||"default";var o=l.get(i);if(!o){var d={loading:0,preload:null};if(o=a.querySelector(Gl(i)))d.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nt.get(i))&&Xs(e,n);var v=o=a.createElement("link");Qe(v),$e(v,"link",e),v._p=new Promise(function(_,w){v.onload=_,v.onerror=w}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,su(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:d},l.set(i,o)}}}function l0(e,t){cn.X(e,t);var n=Ya;if(n&&e){var a=ha(n).hoistableScripts,l=Xa(e),i=a.get(l);i||(i=n.querySelector(Ul(l)),i||(e=T({src:e,async:!0},t),(t=Nt.get(l))&&Zs(e,t),i=n.createElement("script"),Qe(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function i0(e,t){cn.M(e,t);var n=Ya;if(n&&e){var a=ha(n).hoistableScripts,l=Xa(e),i=a.get(l);i||(i=n.querySelector(Ul(l)),i||(e=T({src:e,async:!0,type:"module"},t),(t=Nt.get(l))&&Zs(e,t),i=n.createElement("script"),Qe(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function vd(e,t,n,a){var l=(l=le.current)?ru(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Va(n.href),n=ha(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Va(n.href);var i=ha(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Gl(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nt.set(e,n),i||u0(l,e,n,o.state))),t&&a===null)throw Error(c(528,""));return o}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xa(n),n=ha(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Va(e){return'href="'+St(e)+'"'}function Gl(e){return'link[rel="stylesheet"]['+e+"]"}function xd(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function u0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),$e(t,"link",n),Qe(t),e.head.appendChild(t))}function Xa(e){return'[src="'+St(e)+'"]'}function Ul(e){return"script[async]"+e}function Sd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+St(n.href)+'"]');if(a)return t.instance=a,Qe(a),a;var l=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Qe(a),$e(a,"style",l),su(a,n.precedence,e),t.instance=a;case"stylesheet":l=Va(n.href);var i=e.querySelector(Gl(l));if(i)return t.state.loading|=4,t.instance=i,Qe(i),i;a=xd(n),(l=Nt.get(l))&&Xs(a,l),i=(e.ownerDocument||e).createElement("link"),Qe(i);var o=i;return o._p=new Promise(function(d,v){o.onload=d,o.onerror=v}),$e(i,"link",a),t.state.loading|=4,su(i,n.precedence,e),t.instance=i;case"script":return i=Xa(n.src),(l=e.querySelector(Ul(i)))?(t.instance=l,Qe(l),l):(a=n,(l=Nt.get(i))&&(a=T({},n),Zs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Qe(l),$e(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,su(a,n.precedence,e));return t.instance}function su(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var d=a[o];if(d.dataset.precedence===t)i=d;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cu=null;function Ed(e,t,n){if(cu===null){var a=new Map,l=cu=new Map;l.set(n,a)}else l=cu,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[el]||i[Xe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var d=a.get(o);d?d.push(i):a.set(o,[i])}}return a}function Td(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function r0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function s0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Va(a.href),i=t.querySelector(Gl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ou.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Qe(i);return}i=t.ownerDocument||t,a=xd(a),(l=Nt.get(l))&&Xs(a,l),i=i.createElement("link"),Qe(i);var o=i;o._p=new Promise(function(d,v){o.onload=d,o.onerror=v}),$e(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ou.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Js=0;function c0(e,t){return e.stylesheets&&e.count===0&&hu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Js===0&&(Js=62500*Yg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Js?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function ou(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fu=null;function hu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fu=new Map,t.forEach(o0,e),fu=null,ou.call(e))}function o0(e,t){if(!(t.state.loading&4)){var n=fu.get(e);if(n)var a=n.get(null);else{n=new Map,fu.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=ou.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Hl={$$typeof:L,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function f0(e,t,n,a,l,i,o,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.hiddenUpdates=Qu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Ad(e,t,n,a,l,i,o,d,v,_,w,j){return e=new f0(e,t,n,o,v,_,w,j,d),t=1,i===!0&&(t|=24),i=ht(3,null,null,t),e.current=i,i.stateNode=e,t=_r(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Or(i),e}function _d(e){return e?(e=Ea,e):Ea}function Rd(e,t,n,a,l,i){l=_d(l),a.context===null?a.context=l:a.pendingContext=l,a=Tn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Cn(e,a,t),n!==null&&(rt(n,e,t),yl(n,e,t))}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ks(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function Nd(e){if(e.tag===13||e.tag===31){var t=Jn(e,67108864);t!==null&&rt(t,e,67108864),Ks(e,67108864)}}function Od(e){if(e.tag===13||e.tag===31){var t=yt();t=Yu(t);var n=Jn(e,t);n!==null&&rt(n,e,t),Ks(e,t)}}var du=!0;function h0(e,t,n,a){var l=k.T;k.T=null;var i=q.p;try{q.p=2,$s(e,t,n,a)}finally{q.p=i,k.T=l}}function d0(e,t,n,a){var l=k.T;k.T=null;var i=q.p;try{q.p=8,$s(e,t,n,a)}finally{q.p=i,k.T=l}}function $s(e,t,n,a){if(du){var l=Is(a);if(l===null)js(e,t,a,pu,n),wd(e,a);else if(m0(l,e,t,n,a))a.stopPropagation();else if(wd(e,a),t&4&&-1<p0.indexOf(e)){for(;l!==null;){var i=fa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Qn(i.pendingLanes);if(o!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var v=1<<31-ot(o);d.entanglements[1]|=v,o&=~v}Yt(i),(pe&6)===0&&(Ii=st()+500,kl(0))}}break;case 31:case 13:d=Jn(i,2),d!==null&&rt(d,i,2),Fi(),Ks(i,2)}if(i=Is(a),i===null&&js(e,t,a,pu,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else js(e,t,a,null,n)}}function Is(e){return e=Fu(e),Ps(e)}var pu=null;function Ps(e){if(pu=null,e=oa(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pu=e,null}function Dd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wp()){case Gc:return 2;case Uc:return 8;case ai:case em:return 32;case Hc:return 268435456;default:return 32}default:return 32}}var Fs=!1,jn=null,Ln=null,Gn=null,Bl=new Map,ql=new Map,Un=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wd(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Bl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(t.pointerId)}}function Ql(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=fa(t),t!==null&&Nd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function m0(e,t,n,a,l){switch(t){case"focusin":return jn=Ql(jn,e,t,n,a,l),!0;case"dragenter":return Ln=Ql(Ln,e,t,n,a,l),!0;case"mouseover":return Gn=Ql(Gn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return Bl.set(i,Ql(Bl.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,ql.set(i,Ql(ql.get(i)||null,e,t,n,a,l)),!0}return!1}function kd(e){var t=oa(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Xc(e.priority,function(){Od(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Xc(e.priority,function(){Od(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Is(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Pu=a,n.target.dispatchEvent(a),Pu=null}else return t=fa(n),t!==null&&Nd(t),e.blockedOn=n,!1;t.shift()}return!0}function zd(e,t,n){mu(e)&&n.delete(t)}function g0(){Fs=!1,jn!==null&&mu(jn)&&(jn=null),Ln!==null&&mu(Ln)&&(Ln=null),Gn!==null&&mu(Gn)&&(Gn=null),Bl.forEach(zd),ql.forEach(zd)}function gu(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,g0)))}var yu=null;function jd(e){yu!==e&&(yu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){yu===e&&(yu=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Ps(a||n)===null)continue;break}var i=fa(n);i!==null&&(e.splice(t,3),t-=3,Ir(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Za(e){function t(v){return gu(v,e)}jn!==null&&gu(jn,e),Ln!==null&&gu(Ln,e),Gn!==null&&gu(Gn,e),Bl.forEach(t),ql.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)kd(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[tt]||null;if(typeof i=="function")o||jd(n);else if(o){var d=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[tt]||null)d=o.formAction;else if(Ps(l)!==null)continue}else d=o.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),jd(n)}}}function Ld(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Ws(e){this._internalRoot=e}bu.prototype.render=Ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=yt();Rd(n,a,e,t,null,null)},bu.prototype.unmount=Ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rd(e.current,2,null,e,null,null),Fi(),t[ca]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&kd(e)}};var Gd=r.version;if(Gd!=="19.2.3")throw Error(c(527,Gd,"19.2.3"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var y0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{Pa=vu.inject(y0),ct=vu}catch{}}return Vl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,a="",l=Vf,i=Xf,o=Zf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ad(e,1,!1,null,null,n,a,null,l,i,o,Ld),e[ca]=t.current,zs(e),new Ws(t)},Vl.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var a=!1,l="",i=Vf,o=Xf,d=Zf,v=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=Ad(e,1,!0,t,n??null,a,l,v,i,o,d,Ld),t.context=_d(null),n=t.current,a=yt(),a=Yu(a),l=Tn(a),l.callback=null,Cn(n,l,a),n=a,t.current.lanes=n,Wa(t,n),Yt(t),e[ca]=t.current,zs(e),new bu(t)},Vl.version="19.2.3",Vl}var Jd;function O0(){if(Jd)return nc.exports;Jd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),nc.exports=N0(),nc.exports}var D0=O0();const w0=gp(D0);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Kd="popstate";function k0(u={}){function r(c,f){let{pathname:h,search:m,hash:g}=c.location;return hc("",{pathname:h,search:m,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(c,f){return typeof f=="string"?f:Fl(f)}return j0(r,s,null,u)}function Ne(u,r){if(u===!1||u===null||typeof u>"u")throw new Error(r)}function Ut(u,r){if(!u){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function z0(){return Math.random().toString(36).substring(2,10)}function $d(u,r){return{usr:u.state,key:u.key,idx:r}}function hc(u,r,s=null,c){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof r=="string"?Ja(r):r,state:s,key:r&&r.key||c||z0()}}function Fl({pathname:u="/",search:r="",hash:s=""}){return r&&r!=="?"&&(u+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(u+=s.charAt(0)==="#"?s:"#"+s),u}function Ja(u){let r={};if(u){let s=u.indexOf("#");s>=0&&(r.hash=u.substring(s),u=u.substring(0,s));let c=u.indexOf("?");c>=0&&(r.search=u.substring(c),u=u.substring(0,c)),u&&(r.pathname=u)}return r}function j0(u,r,s,c={}){let{window:f=document.defaultView,v5Compat:h=!1}=c,m=f.history,g="POP",b=null,p=S();p==null&&(p=0,m.replaceState({...m.state,idx:p},""));function S(){return(m.state||{idx:null}).idx}function T(){g="POP";let H=S(),V=H==null?null:H-p;p=H,b&&b({action:g,location:U.location,delta:V})}function D(H,V){g="PUSH";let K=hc(U.location,H,V);p=S()+1;let L=$d(K,p),F=U.createHref(K);try{m.pushState(L,"",F)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;f.location.assign(F)}h&&b&&b({action:g,location:U.location,delta:1})}function O(H,V){g="REPLACE";let K=hc(U.location,H,V);p=S();let L=$d(K,p),F=U.createHref(K);m.replaceState(L,"",F),h&&b&&b({action:g,location:U.location,delta:0})}function B(H){return L0(H)}let U={get action(){return g},get location(){return u(f,m)},listen(H){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(Kd,T),b=H,()=>{f.removeEventListener(Kd,T),b=null}},createHref(H){return r(f,H)},createURL:B,encodeLocation(H){let V=B(H);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:D,replace:O,go(H){return m.go(H)}};return U}function L0(u,r=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(s,"No window.location.(origin|href) available to create URL");let c=typeof u=="string"?u:Fl(u);return c=c.replace(/ $/,"%20"),!r&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function yp(u,r,s="/"){return G0(u,r,s,!1)}function G0(u,r,s,c){let f=typeof r=="string"?Ja(r):r,h=dn(f.pathname||"/",s);if(h==null)return null;let m=bp(u);U0(m);let g=null;for(let b=0;g==null&&b<m.length;++b){let p=$0(h);g=J0(m[b],p,c)}return g}function bp(u,r=[],s=[],c="",f=!1){let h=(m,g,b=f,p)=>{let S={relativePath:p===void 0?m.path||"":p,caseSensitive:m.caseSensitive===!0,childrenIndex:g,route:m};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(c)&&b)return;Ne(S.relativePath.startsWith(c),`Absolute route path "${S.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(c.length)}let T=hn([c,S.relativePath]),D=s.concat(S);m.children&&m.children.length>0&&(Ne(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),bp(m.children,r,D,T,b)),!(m.path==null&&!m.index)&&r.push({path:T,score:X0(T,m.index),routesMeta:D})};return u.forEach((m,g)=>{var b;if(m.path===""||!((b=m.path)!=null&&b.includes("?")))h(m,g);else for(let p of vp(m.path))h(m,g,!0,p)}),r}function vp(u){let r=u.split("/");if(r.length===0)return[];let[s,...c]=r,f=s.endsWith("?"),h=s.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let m=vp(c.join("/")),g=[];return g.push(...m.map(b=>b===""?h:[h,b].join("/"))),f&&g.push(...m),g.map(b=>u.startsWith("/")&&b===""?"/":b)}function U0(u){u.sort((r,s)=>r.score!==s.score?s.score-r.score:Z0(r.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var H0=/^:[\w-]+$/,B0=3,q0=2,Q0=1,Y0=10,V0=-2,Id=u=>u==="*";function X0(u,r){let s=u.split("/"),c=s.length;return s.some(Id)&&(c+=V0),r&&(c+=q0),s.filter(f=>!Id(f)).reduce((f,h)=>f+(H0.test(h)?B0:h===""?Q0:Y0),c)}function Z0(u,r){return u.length===r.length&&u.slice(0,-1).every((c,f)=>c===r[f])?u[u.length-1]-r[r.length-1]:0}function J0(u,r,s=!1){let{routesMeta:c}=u,f={},h="/",m=[];for(let g=0;g<c.length;++g){let b=c[g],p=g===c.length-1,S=h==="/"?r:r.slice(h.length)||"/",T=_u({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},S),D=b.route;if(!T&&p&&s&&!c[c.length-1].route.index&&(T=_u({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},S)),!T)return null;Object.assign(f,T.params),m.push({params:f,pathname:hn([h,T.pathname]),pathnameBase:W0(hn([h,T.pathnameBase])),route:D}),T.pathnameBase!=="/"&&(h=hn([h,T.pathnameBase]))}return m}function _u(u,r){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[s,c]=K0(u.path,u.caseSensitive,u.end),f=r.match(s);if(!f)return null;let h=f[0],m=h.replace(/(.)\/+$/,"$1"),g=f.slice(1);return{params:c.reduce((p,{paramName:S,isOptional:T},D)=>{if(S==="*"){let B=g[D]||"";m=h.slice(0,h.length-B.length).replace(/(.)\/+$/,"$1")}const O=g[D];return T&&!O?p[S]=void 0:p[S]=(O||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:m,pattern:u}}function K0(u,r=!1,s=!0){Ut(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],f="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,g,b)=>(c.push({paramName:g,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(c.push({paramName:"*"}),f+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":u!==""&&u!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,r?void 0:"i"),c]}function $0(u){try{return u.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ut(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),u}}function dn(u,r){if(r==="/")return u;if(!u.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,c=u.charAt(s);return c&&c!=="/"?null:u.slice(s)||"/"}var I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function P0(u,r="/"){let{pathname:s,search:c="",hash:f=""}=typeof u=="string"?Ja(u):u,h;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?h=Pd(s.substring(1),"/"):h=Pd(s,r)):h=r,{pathname:h,search:ey(c),hash:ty(f)}}function Pd(u,r){let s=r.replace(/\/+$/,"").split("/");return u.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function uc(u,r,s,c){return`Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function F0(u){return u.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function vc(u){let r=F0(u);return r.map((s,c)=>c===r.length-1?s.pathname:s.pathnameBase)}function xc(u,r,s,c=!1){let f;typeof u=="string"?f=Ja(u):(f={...u},Ne(!f.pathname||!f.pathname.includes("?"),uc("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),uc("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),uc("#","search","hash",f)));let h=u===""||f.pathname==="",m=h?"/":f.pathname,g;if(m==null)g=s;else{let T=r.length-1;if(!c&&m.startsWith("..")){let D=m.split("/");for(;D[0]==="..";)D.shift(),T-=1;f.pathname=D.join("/")}g=T>=0?r[T]:"/"}let b=P0(f,g),p=m&&m!=="/"&&m.endsWith("/"),S=(h||m===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(p||S)&&(b.pathname+="/"),b}var hn=u=>u.join("/").replace(/\/\/+/g,"/"),W0=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),ey=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,ty=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,ny=class{constructor(u,r,s,c=!1){this.status=u,this.statusText=r||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function ay(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function ly(u){return u.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var xp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sp(u,r){let s=u;if(typeof s!="string"||!I0.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let c=s,f=!1;if(xp)try{let h=new URL(window.location.href),m=s.startsWith("//")?new URL(h.protocol+s):new URL(s),g=dn(m.pathname,r);m.origin===h.origin&&g!=null?s=g+m.search+m.hash:f=!0}catch{Ut(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ep=["POST","PUT","PATCH","DELETE"];new Set(Ep);var iy=["GET",...Ep];new Set(iy);var Ka=M.createContext(null);Ka.displayName="DataRouter";var Du=M.createContext(null);Du.displayName="DataRouterState";var uy=M.createContext(!1),Tp=M.createContext({isTransitioning:!1});Tp.displayName="ViewTransition";var ry=M.createContext(new Map);ry.displayName="Fetchers";var sy=M.createContext(null);sy.displayName="Await";var bt=M.createContext(null);bt.displayName="Navigation";var Wl=M.createContext(null);Wl.displayName="Location";var Ot=M.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var Sc=M.createContext(null);Sc.displayName="RouteError";var Cp="REACT_ROUTER_ERROR",cy="REDIRECT",oy="ROUTE_ERROR_RESPONSE";function fy(u){if(u.startsWith(`${Cp}:${cy}:{`))try{let r=JSON.parse(u.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function hy(u){if(u.startsWith(`${Cp}:${oy}:{`))try{let r=JSON.parse(u.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new ny(r.status,r.statusText,r.data)}catch{}}function dy(u,{relative:r}={}){Ne($a(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=M.useContext(bt),{hash:f,pathname:h,search:m}=ei(u,{relative:r}),g=h;return s!=="/"&&(g=h==="/"?s:hn([s,h])),c.createHref({pathname:g,search:m,hash:f})}function $a(){return M.useContext(Wl)!=null}function pn(){return Ne($a(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Wl).location}var Ap="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _p(u){M.useContext(bt).static||M.useLayoutEffect(u)}function Rp(){let{isDataRoute:u}=M.useContext(Ot);return u?Ny():py()}function py(){Ne($a(),"useNavigate() may be used only in the context of a <Router> component.");let u=M.useContext(Ka),{basename:r,navigator:s}=M.useContext(bt),{matches:c}=M.useContext(Ot),{pathname:f}=pn(),h=JSON.stringify(vc(c)),m=M.useRef(!1);return _p(()=>{m.current=!0}),M.useCallback((b,p={})=>{if(Ut(m.current,Ap),!m.current)return;if(typeof b=="number"){s.go(b);return}let S=xc(b,JSON.parse(h),f,p.relative==="path");u==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:hn([r,S.pathname])),(p.replace?s.replace:s.push)(S,p.state,p)},[r,s,h,f,u])}var my=M.createContext(null);function gy(u){let r=M.useContext(Ot).outlet;return M.useMemo(()=>r&&M.createElement(my.Provider,{value:u},r),[r,u])}function yy(){let{matches:u}=M.useContext(Ot),r=u[u.length-1];return r?r.params:{}}function ei(u,{relative:r}={}){let{matches:s}=M.useContext(Ot),{pathname:c}=pn(),f=JSON.stringify(vc(s));return M.useMemo(()=>xc(u,JSON.parse(f),c,r==="path"),[u,f,c,r])}function by(u,r){return Mp(u,r)}function Mp(u,r,s,c,f){var K;Ne($a(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=M.useContext(bt),{matches:m}=M.useContext(Ot),g=m[m.length-1],b=g?g.params:{},p=g?g.pathname:"/",S=g?g.pathnameBase:"/",T=g&&g.route;{let L=T&&T.path||"";Op(p,!T||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let D=pn(),O;if(r){let L=typeof r=="string"?Ja(r):r;Ne(S==="/"||((K=L.pathname)==null?void 0:K.startsWith(S)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${L.pathname}" was given in the \`location\` prop.`),O=L}else O=D;let B=O.pathname||"/",U=B;if(S!=="/"){let L=S.replace(/^\//,"").split("/");U="/"+B.replace(/^\//,"").split("/").slice(L.length).join("/")}let H=yp(u,{pathname:U});Ut(T||H!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),Ut(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Ty(H&&H.map(L=>Object.assign({},L,{params:Object.assign({},b,L.params),pathname:hn([S,h.encodeLocation?h.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?S:hn([S,h.encodeLocation?h.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),m,s,c,f);return r&&V?M.createElement(Wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},V):V}function vy(){let u=My(),r=ay(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),s=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},m=null;return console.error("Error handled by React Router default ErrorBoundary:",u),m=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:h},"ErrorBoundary")," or"," ",M.createElement("code",{style:h},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},r),s?M.createElement("pre",{style:f},s):null,m)}var xy=M.createElement(vy,null),Np=class extends M.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,r){return r.location!==u.location||r.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:r.error,location:r.location,revalidation:u.revalidation||r.revalidation}}componentDidCatch(u,r){this.props.onError?this.props.onError(u,r):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const s=hy(u.digest);s&&(u=s)}let r=u!==void 0?M.createElement(Ot.Provider,{value:this.props.routeContext},M.createElement(Sc.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?M.createElement(Sy,{error:u},r):r}};Np.contextType=uy;var rc=new WeakMap;function Sy({children:u,error:r}){let{basename:s}=M.useContext(bt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let c=fy(r.digest);if(c){let f=rc.get(r);if(f)throw f;let h=Sp(c.location,s);if(xp&&!rc.get(r))if(h.isExternal||c.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:c.replace}));throw rc.set(r,m),m}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function Ey({routeContext:u,match:r,children:s}){let c=M.useContext(Ka);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),M.createElement(Ot.Provider,{value:u},s)}function Ty(u,r=[],s=null,c=null,f=null){if(u==null){if(!s)return null;if(s.errors)u=s.matches;else if(r.length===0&&!s.initialized&&s.matches.length>0)u=s.matches;else return null}let h=u,m=s==null?void 0:s.errors;if(m!=null){let S=h.findIndex(T=>T.route.id&&(m==null?void 0:m[T.route.id])!==void 0);Ne(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),h=h.slice(0,Math.min(h.length,S+1))}let g=!1,b=-1;if(s)for(let S=0;S<h.length;S++){let T=h[S];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(b=S),T.route.id){let{loaderData:D,errors:O}=s,B=T.route.loader&&!D.hasOwnProperty(T.route.id)&&(!O||O[T.route.id]===void 0);if(T.route.lazy||B){g=!0,b>=0?h=h.slice(0,b+1):h=[h[0]];break}}}let p=s&&c?(S,T)=>{var D,O;c(S,{location:s.location,params:((O=(D=s.matches)==null?void 0:D[0])==null?void 0:O.params)??{},unstable_pattern:ly(s.matches),errorInfo:T})}:void 0;return h.reduceRight((S,T,D)=>{let O,B=!1,U=null,H=null;s&&(O=m&&T.route.id?m[T.route.id]:void 0,U=T.route.errorElement||xy,g&&(b<0&&D===0?(Op("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,H=null):b===D&&(B=!0,H=T.route.hydrateFallbackElement||null)));let V=r.concat(h.slice(0,D+1)),K=()=>{let L;return O?L=U:B?L=H:T.route.Component?L=M.createElement(T.route.Component,null):T.route.element?L=T.route.element:L=S,M.createElement(Ey,{match:T,routeContext:{outlet:S,matches:V,isDataRoute:s!=null},children:L})};return s&&(T.route.ErrorBoundary||T.route.errorElement||D===0)?M.createElement(Np,{location:s.location,revalidation:s.revalidation,component:U,error:O,children:K(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:p}):K()},null)}function Ec(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cy(u){let r=M.useContext(Ka);return Ne(r,Ec(u)),r}function Ay(u){let r=M.useContext(Du);return Ne(r,Ec(u)),r}function _y(u){let r=M.useContext(Ot);return Ne(r,Ec(u)),r}function Tc(u){let r=_y(u),s=r.matches[r.matches.length-1];return Ne(s.route.id,`${u} can only be used on routes that contain a unique "id"`),s.route.id}function Ry(){return Tc("useRouteId")}function My(){var c;let u=M.useContext(Sc),r=Ay("useRouteError"),s=Tc("useRouteError");return u!==void 0?u:(c=r.errors)==null?void 0:c[s]}function Ny(){let{router:u}=Cy("useNavigate"),r=Tc("useNavigate"),s=M.useRef(!1);return _p(()=>{s.current=!0}),M.useCallback(async(f,h={})=>{Ut(s.current,Ap),s.current&&(typeof f=="number"?await u.navigate(f):await u.navigate(f,{fromRouteId:r,...h}))},[u,r])}var Fd={};function Op(u,r,s){!r&&!Fd[u]&&(Fd[u]=!0,Ut(!1,s))}M.memo(Oy);function Oy({routes:u,future:r,state:s,onError:c}){return Mp(u,void 0,s,c,r)}function Dy({to:u,replace:r,state:s,relative:c}){Ne($a(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=M.useContext(bt);Ut(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=M.useContext(Ot),{pathname:m}=pn(),g=Rp(),b=xc(u,vc(h),m,c==="path"),p=JSON.stringify(b);return M.useEffect(()=>{g(JSON.parse(p),{replace:r,state:s,relative:c})},[g,p,c,r,s]),null}function wy(u){return gy(u.context)}function on(u){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ky({basename:u="/",children:r=null,location:s,navigationType:c="POP",navigator:f,static:h=!1,unstable_useTransitions:m}){Ne(!$a(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=u.replace(/^\/*/,"/"),b=M.useMemo(()=>({basename:g,navigator:f,static:h,unstable_useTransitions:m,future:{}}),[g,f,h,m]);typeof s=="string"&&(s=Ja(s));let{pathname:p="/",search:S="",hash:T="",state:D=null,key:O="default"}=s,B=M.useMemo(()=>{let U=dn(p,g);return U==null?null:{location:{pathname:U,search:S,hash:T,state:D,key:O},navigationType:c}},[g,p,S,T,D,O,c]);return Ut(B!=null,`<Router basename="${g}"> is not able to match the URL "${p}${S}${T}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:M.createElement(bt.Provider,{value:b},M.createElement(Wl.Provider,{children:r,value:B}))}function zy({children:u,location:r}){return by(dc(u),r)}function dc(u,r=[]){let s=[];return M.Children.forEach(u,(c,f)=>{if(!M.isValidElement(c))return;let h=[...r,f];if(c.type===M.Fragment){s.push.apply(s,dc(c.props.children,h));return}Ne(c.type===on,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!c.props.index||!c.props.children,"An index route cannot have child routes.");let m={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=dc(c.props.children,h)),s.push(m)}),s}var Tu="get",Cu="application/x-www-form-urlencoded";function wu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function jy(u){return wu(u)&&u.tagName.toLowerCase()==="button"}function Ly(u){return wu(u)&&u.tagName.toLowerCase()==="form"}function Gy(u){return wu(u)&&u.tagName.toLowerCase()==="input"}function Uy(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Hy(u,r){return u.button===0&&(!r||r==="_self")&&!Uy(u)}var xu=null;function By(){if(xu===null)try{new FormData(document.createElement("form"),0),xu=!1}catch{xu=!0}return xu}var qy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sc(u){return u!=null&&!qy.has(u)?(Ut(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cu}"`),null):u}function Qy(u,r){let s,c,f,h,m;if(Ly(u)){let g=u.getAttribute("action");c=g?dn(g,r):null,s=u.getAttribute("method")||Tu,f=sc(u.getAttribute("enctype"))||Cu,h=new FormData(u)}else if(jy(u)||Gy(u)&&(u.type==="submit"||u.type==="image")){let g=u.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=u.getAttribute("formaction")||g.getAttribute("action");if(c=b?dn(b,r):null,s=u.getAttribute("formmethod")||g.getAttribute("method")||Tu,f=sc(u.getAttribute("formenctype"))||sc(g.getAttribute("enctype"))||Cu,h=new FormData(g,u),!By()){let{name:p,type:S,value:T}=u;if(S==="image"){let D=p?`${p}.`:"";h.append(`${D}x`,"0"),h.append(`${D}y`,"0")}else p&&h.append(p,T)}}else{if(wu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Tu,c=null,f=Cu,m=u}return h&&f==="text/plain"&&(m=h,h=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:h,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cc(u,r){if(u===!1||u===null||typeof u>"u")throw new Error(r)}function Yy(u,r,s,c){let f=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:r&&dn(f.pathname,r)==="/"?f.pathname=`${r.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function Vy(u,r){if(u.id in r)return r[u.id];try{let s=await import(u.module);return r[u.id]=s,s}catch(s){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xy(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Zy(u,r,s){let c=await Promise.all(u.map(async f=>{let h=r.routes[f.route.id];if(h){let m=await Vy(h,s);return m.links?m.links():[]}return[]}));return Iy(c.flat(1).filter(Xy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Wd(u,r,s,c,f,h){let m=(b,p)=>s[p]?b.route.id!==s[p].route.id:!0,g=(b,p)=>{var S;return s[p].pathname!==b.pathname||((S=s[p].route.path)==null?void 0:S.endsWith("*"))&&s[p].params["*"]!==b.params["*"]};return h==="assets"?r.filter((b,p)=>m(b,p)||g(b,p)):h==="data"?r.filter((b,p)=>{var T;let S=c.routes[b.route.id];if(!S||!S.hasLoader)return!1;if(m(b,p)||g(b,p))return!0;if(b.route.shouldRevalidate){let D=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((T=s[0])==null?void 0:T.params)||{},nextUrl:new URL(u,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Jy(u,r,{includeHydrateFallback:s}={}){return Ky(u.map(c=>{let f=r.routes[c.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Ky(u){return[...new Set(u)]}function $y(u){let r={},s=Object.keys(u).sort();for(let c of s)r[c]=u[c];return r}function Iy(u,r){let s=new Set;return new Set(r),u.reduce((c,f)=>{let h=JSON.stringify($y(f));return s.has(h)||(s.add(h),c.push({key:h,link:f})),c},[])}function Dp(){let u=M.useContext(Ka);return Cc(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Py(){let u=M.useContext(Du);return Cc(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Ac=M.createContext(void 0);Ac.displayName="FrameworkContext";function wp(){let u=M.useContext(Ac);return Cc(u,"You must render this element inside a <HydratedRouter> element"),u}function Fy(u,r){let s=M.useContext(Ac),[c,f]=M.useState(!1),[h,m]=M.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:p,onMouseLeave:S,onTouchStart:T}=r,D=M.useRef(null);M.useEffect(()=>{if(u==="render"&&m(!0),u==="viewport"){let U=V=>{V.forEach(K=>{m(K.isIntersecting)})},H=new IntersectionObserver(U,{threshold:.5});return D.current&&H.observe(D.current),()=>{H.disconnect()}}},[u]),M.useEffect(()=>{if(c){let U=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(U)}}},[c]);let O=()=>{f(!0)},B=()=>{f(!1),m(!1)};return s?u!=="intent"?[h,D,{}]:[h,D,{onFocus:Xl(g,O),onBlur:Xl(b,B),onMouseEnter:Xl(p,O),onMouseLeave:Xl(S,B),onTouchStart:Xl(T,O)}]:[!1,D,{}]}function Xl(u,r){return s=>{u&&u(s),s.defaultPrevented||r(s)}}function Wy({page:u,...r}){let{router:s}=Dp(),c=M.useMemo(()=>yp(s.routes,u,s.basename),[s.routes,u,s.basename]);return c?M.createElement(tb,{page:u,matches:c,...r}):null}function eb(u){let{manifest:r,routeModules:s}=wp(),[c,f]=M.useState([]);return M.useEffect(()=>{let h=!1;return Zy(u,r,s).then(m=>{h||f(m)}),()=>{h=!0}},[u,r,s]),c}function tb({page:u,matches:r,...s}){let c=pn(),{future:f,manifest:h,routeModules:m}=wp(),{basename:g}=Dp(),{loaderData:b,matches:p}=Py(),S=M.useMemo(()=>Wd(u,r,p,h,c,"data"),[u,r,p,h,c]),T=M.useMemo(()=>Wd(u,r,p,h,c,"assets"),[u,r,p,h,c]),D=M.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let U=new Set,H=!1;if(r.forEach(K=>{var F;let L=h.routes[K.route.id];!L||!L.hasLoader||(!S.some(ee=>ee.route.id===K.route.id)&&K.route.id in b&&((F=m[K.route.id])!=null&&F.shouldRevalidate)||L.hasClientLoader?H=!0:U.add(K.route.id))}),U.size===0)return[];let V=Yy(u,g,f.unstable_trailingSlashAwareDataRequests,"data");return H&&U.size>0&&V.searchParams.set("_routes",r.filter(K=>U.has(K.route.id)).map(K=>K.route.id).join(",")),[V.pathname+V.search]},[g,f.unstable_trailingSlashAwareDataRequests,b,c,h,S,r,u,m]),O=M.useMemo(()=>Jy(T,h),[T,h]),B=eb(T);return M.createElement(M.Fragment,null,D.map(U=>M.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...s})),O.map(U=>M.createElement("link",{key:U,rel:"modulepreload",href:U,...s})),B.map(({key:U,link:H})=>M.createElement("link",{key:U,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function nb(...u){return r=>{u.forEach(s=>{typeof s=="function"?s(r):s!=null&&(s.current=r)})}}var ab=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ab&&(window.__reactRouterVersion="7.13.0")}catch{}function lb({basename:u,children:r,unstable_useTransitions:s,window:c}){let f=M.useRef();f.current==null&&(f.current=k0({window:c,v5Compat:!0}));let h=f.current,[m,g]=M.useState({action:h.action,location:h.location}),b=M.useCallback(p=>{s===!1?g(p):M.startTransition(()=>g(p))},[s]);return M.useLayoutEffect(()=>h.listen(b),[h,b]),M.createElement(ky,{basename:u,children:r,location:m.location,navigationType:m.action,navigator:h,unstable_useTransitions:s})}var kp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gt=M.forwardRef(function({onClick:r,discover:s="render",prefetch:c="none",relative:f,reloadDocument:h,replace:m,state:g,target:b,to:p,preventScrollReset:S,viewTransition:T,unstable_defaultShouldRevalidate:D,...O},B){let{basename:U,unstable_useTransitions:H}=M.useContext(bt),V=typeof p=="string"&&kp.test(p),K=Sp(p,U);p=K.to;let L=dy(p,{relative:f}),[F,ee,re]=Fy(c,O),I=rb(p,{replace:m,state:g,target:b,preventScrollReset:S,relative:f,viewTransition:T,unstable_defaultShouldRevalidate:D,unstable_useTransitions:H});function ke(vt){r&&r(vt),vt.defaultPrevented||I(vt)}let Ve=M.createElement("a",{...O,...re,href:K.absoluteURL||L,onClick:K.isExternal||h?r:ke,ref:nb(B,ee),target:b,"data-discover":!V&&s==="render"?"true":void 0});return F&&!V?M.createElement(M.Fragment,null,Ve,M.createElement(Wy,{page:L})):Ve});Gt.displayName="Link";var Au=M.forwardRef(function({"aria-current":r="page",caseSensitive:s=!1,className:c="",end:f=!1,style:h,to:m,viewTransition:g,children:b,...p},S){let T=ei(m,{relative:p.relative}),D=pn(),O=M.useContext(Du),{navigator:B,basename:U}=M.useContext(bt),H=O!=null&&hb(T)&&g===!0,V=B.encodeLocation?B.encodeLocation(T).pathname:T.pathname,K=D.pathname,L=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;s||(K=K.toLowerCase(),L=L?L.toLowerCase():null,V=V.toLowerCase()),L&&U&&(L=dn(L,U)||L);const F=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let ee=K===V||!f&&K.startsWith(V)&&K.charAt(F)==="/",re=L!=null&&(L===V||!f&&L.startsWith(V)&&L.charAt(V.length)==="/"),I={isActive:ee,isPending:re,isTransitioning:H},ke=ee?r:void 0,Ve;typeof c=="function"?Ve=c(I):Ve=[c,ee?"active":null,re?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let vt=typeof h=="function"?h(I):h;return M.createElement(Gt,{...p,"aria-current":ke,className:Ve,ref:S,style:vt,to:m,viewTransition:g},typeof b=="function"?b(I):b)});Au.displayName="NavLink";var ib=M.forwardRef(({discover:u="render",fetcherKey:r,navigate:s,reloadDocument:c,replace:f,state:h,method:m=Tu,action:g,onSubmit:b,relative:p,preventScrollReset:S,viewTransition:T,unstable_defaultShouldRevalidate:D,...O},B)=>{let{unstable_useTransitions:U}=M.useContext(bt),H=ob(),V=fb(g,{relative:p}),K=m.toLowerCase()==="get"?"get":"post",L=typeof g=="string"&&kp.test(g),F=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let re=ee.nativeEvent.submitter,I=(re==null?void 0:re.getAttribute("formmethod"))||m,ke=()=>H(re||ee.currentTarget,{fetcherKey:r,method:I,navigate:s,replace:f,state:h,relative:p,preventScrollReset:S,viewTransition:T,unstable_defaultShouldRevalidate:D});U&&s!==!1?M.startTransition(()=>ke()):ke()};return M.createElement("form",{ref:B,method:K,action:V,onSubmit:c?b:F,...O,"data-discover":!L&&u==="render"?"true":void 0})});ib.displayName="Form";function ub(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zp(u){let r=M.useContext(Ka);return Ne(r,ub(u)),r}function rb(u,{target:r,replace:s,state:c,preventScrollReset:f,relative:h,viewTransition:m,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b}={}){let p=Rp(),S=pn(),T=ei(u,{relative:h});return M.useCallback(D=>{if(Hy(D,r)){D.preventDefault();let O=s!==void 0?s:Fl(S)===Fl(T),B=()=>p(u,{replace:O,state:c,preventScrollReset:f,relative:h,viewTransition:m,unstable_defaultShouldRevalidate:g});b?M.startTransition(()=>B()):B()}},[S,p,T,s,c,r,u,f,h,m,g,b])}var sb=0,cb=()=>`__${String(++sb)}__`;function ob(){let{router:u}=zp("useSubmit"),{basename:r}=M.useContext(bt),s=Ry(),c=u.fetch,f=u.navigate;return M.useCallback(async(h,m={})=>{let{action:g,method:b,encType:p,formData:S,body:T}=Qy(h,r);if(m.navigate===!1){let D=m.fetcherKey||cb();await c(D,s,m.action||g,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:S,body:T,formMethod:m.method||b,formEncType:m.encType||p,flushSync:m.flushSync})}else await f(m.action||g,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:S,body:T,formMethod:m.method||b,formEncType:m.encType||p,replace:m.replace,state:m.state,fromRouteId:s,flushSync:m.flushSync,viewTransition:m.viewTransition})},[c,f,r,s])}function fb(u,{relative:r}={}){let{basename:s}=M.useContext(bt),c=M.useContext(Ot);Ne(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),h={...ei(u||".",{relative:r})},m=pn();if(u==null){h.search=m.search;let g=new URLSearchParams(h.search),b=g.getAll("index");if(b.some(S=>S==="")){g.delete("index"),b.filter(T=>T).forEach(T=>g.append("index",T));let S=g.toString();h.search=S?`?${S}`:""}}return(!u||u===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:hn([s,h.pathname])),Fl(h)}function hb(u,{relative:r}={}){let s=M.useContext(Tp);Ne(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=zp("useViewTransitionState"),f=ei(u,{relative:r});if(!s.isTransitioning)return!1;let h=dn(s.currentLocation.pathname,c)||s.currentLocation.pathname,m=dn(s.nextLocation.pathname,c)||s.nextLocation.pathname;return _u(f.pathname,m)!=null||_u(f.pathname,h)!=null}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pb=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,c)=>c?c.toUpperCase():s.toLowerCase()),ep=u=>{const r=pb(u);return r.charAt(0).toUpperCase()+r.slice(1)},jp=(...u)=>u.filter((r,s,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===s).join(" ").trim(),mb=u=>{for(const r in u)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=M.forwardRef(({color:u="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:f="",children:h,iconNode:m,...g},b)=>M.createElement("svg",{ref:b,...gb,width:r,height:r,stroke:u,strokeWidth:c?Number(s)*24/Number(r):s,className:jp("lucide",f),...!h&&!mb(g)&&{"aria-hidden":"true"},...g},[...m.map(([p,S])=>M.createElement(p,S)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(u,r)=>{const s=M.forwardRef(({className:c,...f},h)=>M.createElement(yb,{ref:h,iconNode:r,className:jp(`lucide-${db(ep(u))}`,`lucide-${u}`,c),...f}));return s.displayName=ep(u),s};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vb=we("arrow-left",bb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],cc=we("arrow-right",xb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Eb=we("calendar",Sb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Cb=we("check",Tb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Lp=we("chevron-left",Ab);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Gp=we("chevron-right",_b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Mb=we("chevron-up",Rb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],ua=we("code",Nb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Db=we("copy",Ob);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],kb=we("cpu",wb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],jb=we("database",zb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Gb=we("external-link",Lb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],tp=we("github",Ub);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Zl=we("globe",Hb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],qb=we("layers",Bb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Yb=we("menu",Qb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],np=we("search",Vb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Zb=we("server",Xb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ap=we("shield-check",Jb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],$b=we("tag",Kb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],lp=we("terminal",Ib);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ru=we("x",Pb),ip=[{label:"Home",path:"/"},{label:"Experience",path:"/experience"},{label:"Skills",path:"/skills"},{label:"Education",path:"/education"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],pc=[{id:"standard-networks",title:"스탠다드네트웍스",role:"전송 개발팀",period:"2023.07 - 2025.12",description:"대용량 메시지 발송 플랫폼 기획/개발 및 운영",techStack:["Java","Spring Boot","Spring Cloud","Redis","RabbitMQ","R2DBC","Netflix Eureka","WebFlux"],keyAchievements:["월 평균 7천만 건에서 최대 3억 건에 이르는 메시지 데이터 처리","MSA(Microservices Architecture) 설계를 통한 시스템 결합도 최소화 및 확장성있는 인프라 구축","약 50개 고객사에 직접 배포되어 안정적으로 운영 중인 Agent 프로그램 개발 및 운영","메시지 검칙 프로세스 개발. KISA(한국인터넷진흥원) 및 내부 정책 준수로 스팸 신고율 50% 이상 감소 및 발송 신뢰도 향상"]}],Fb=[{category:"Languages",items:[{name:"Java",icon:Wb},{name:"HTML/CSS",icon:qb},{name:"JS(ES6)",icon:Zb}]},{category:"Frameworks & Libraries",items:[{name:"Spring boot",icon:jb},{name:"WebFlux",icon:kb},{name:"Netty",icon:Zl},{name:"JPA",icon:Zl},{name:"mybatis",icon:Zl},{name:"R2DBC",icon:Zl},{name:"React",icon:Zl},{name:"Tailwind CSS"}]},{category:"Infrastructure & Databases",items:[{name:"RabbitMQ",icon:ap},{name:"Redis",icon:lp},{name:"mySQL",icon:ua},{name:"Oracle",icon:ua},{name:"maria",icon:ua},{name:"Linux",icon:ua}]},{category:"Tools & Collaboration",items:[{name:"VSCode",icon:ap},{name:"IntelliJ",icon:lp},{name:"Git/GithubDesktop",icon:ua},{name:"Notion",icon:ua},{name:"Slack",icon:ua}]}],up=[{institution:"서울사이버대학교",link:"https://www.iscu.ac.kr",degree:"인공지능학과",period:"2026.03 ~ 재학 중",details:[],category:"Education"},{institution:"Docker 클라우드 컨데이너 기반 아키텍처 이해와 실습",link:"https://edu.ktdsuniversity.com",degree:"kt University에서 진행한 Docker 클라우드 컨테이너 기반 아키텍처 교육 과정",period:"2024.10 ~ 2024.10",details:["Docker와 Docker 컴포넌트 이해","Docker 이미지와 컨테이너 설정","Dockerfile 로 서버 구축하기","Docker 이미지 공유","Container 통합 관리"],category:"Education"},{institution:"빅데이터 기반 지능형SW 및 MLOps 개발자 양성과정",link:"https://playdata.io/",degree:"엔코아 아카데미(Encore Academy)에서 진행한 빅데이터 기반 개발자 양성 과정",period:"2022.11 ~ 2023.5",details:["마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","마이크로 서비스 개발을 위한 DB설계 능력"],category:"Education"},{institution:"La Piscine",link:"https://42seoul.kr/seoul42/main/view",degree:"이노베이션 아카데미(Innovation Academy)에서 진행한 자기주도학습 기반의 알고리즘 문제 풀이 과정",period:"2022.8 ~ 2022.9",details:["알고리즘 문제 해결 능력","서로간의 코드 설명 및 코드 리뷰로 의사소통 능력 향상"],category:"Education"},{institution:"클라우드 기반의 MSA 스페셜리스트 주니어 개발자 양성 과정",link:"https://sesac.seoul.kr/course/active/detail.do",degree:"디지털 전환(Digital Transformation)시대의 핵심 클라우드 전문 인재 양성 교육 과정",period:"2021.11 ~ 2022.5",details:["클라우드 인프라 구축 능력","마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","클라우드 네이티브에 대한 이해와 마이크로 서비스 개발 및 관리할 수 있는 능력"],category:"Education"},{institution:"정보처리기능사",degree:"한국산업인력공단",period:"2022.07.01",details:["국가기술자격증 취득"],category:"Certification"}];function Wb(u){return y.jsxs("svg",{...u,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}),y.jsx("path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}),y.jsx("line",{x1:"6",x2:"6",y1:"2",y2:"4"}),y.jsx("line",{x1:"10",x2:"10",y1:"2",y2:"4"}),y.jsx("line",{x1:"14",x2:"14",y1:"2",y2:"4"})]})}const ev=()=>{const[u,r]=M.useState(!1),s=pn();return M.useEffect(()=>{r(!1),window.scrollTo(0,0)},[s]),y.jsxs("div",{className:"min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-mint selection:text-slate-900",children:[y.jsxs("header",{className:"w-full max-w-3xl mx-auto px-6 py-8 md:py-12 flex justify-between items-center",children:[y.jsxs(Au,{to:"/",className:"text-2xl font-extrabold tracking-tight hover:opacity-70 transition-opacity",children:["Whee",y.jsx("span",{className:"text-sky-500",children:"'s"})," Log",y.jsx("span",{className:"text-sky-500",children:"."})]}),y.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[ip.filter(c=>c.label!=="Home").map(c=>y.jsx(Au,{to:c.path,className:({isActive:f})=>`text-[15px] font-medium transition-colors ${f?"text-slate-900 font-bold bg-gradient-to-r from-sky-200 to-sky-100 px-3 py-1 rounded-sm -skew-x-3":"text-slate-500 hover:text-sky-500 hover:scale-110 transition-all duration-200"}`,children:c.label},c.path)),y.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"relative group text-slate-400 hover:text-sky-500 hover:scale-125 transition-all duration-200",children:[y.jsx(tp,{size:20}),y.jsx("span",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-slate-700 bg-sky-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg",children:"Hanwhee's GitHub"})]})]}),y.jsx("button",{className:"md:hidden text-slate-800 focus:outline-none",onClick:()=>r(!u),children:u?y.jsx(Ru,{size:24}):y.jsx(Yb,{size:24})})]}),u&&y.jsxs("div",{className:"md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6 flex flex-col",children:[y.jsx("div",{className:"flex justify-end mb-8",children:y.jsx("button",{onClick:()=>r(!1),children:y.jsx(Ru,{size:28})})}),y.jsx("nav",{className:"flex flex-col space-y-6 text-center",children:ip.map(c=>y.jsx(Au,{to:c.path,className:({isActive:f})=>`text-2xl font-bold ${f?"text-sky-600":"text-slate-800"}`,children:c.label},c.path))})]}),y.jsx("main",{className:"flex-grow w-full max-w-3xl mx-auto px-6 pb-20",children:y.jsx(wy,{})}),y.jsxs("footer",{className:"w-full max-w-3xl mx-auto px-6 py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400",children:[y.jsxs("div",{children:["© ",new Date().getFullYear()," Hanwhee Kim."]}),y.jsx("div",{className:"flex gap-4",children:y.jsx("a",{href:"https://github.com/KimHanWhee",className:"hover:text-slate-600",children:y.jsx(tp,{size:16})})})]})]})},tv=`---
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
`,nv=`---
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

JVM이 관리하는 프로그램에서 데이터를 저장하기 위해 런타임 시 동적으로 할당되는 공간이다. 객체, 배열 등이 저장되는 공간으로 어떤 참조 변수도 힙 영역에 있는 인스턴스를 참조하지 않는다면 가비지 컬렉터(GC, Garbage Collector)에 의해 메모리에서 제거된다.`,av=`---
title: "객체 지향 프로그래밍(Object-Oriented Programming)이란 무엇일까?"
date: "2025-11-19"
description: "JAVA 객체 지향 프로그래밍에 대한 내용을 간단하게 정리한 글입니다."
tags: ["JAVA"]
---

> **객체 지향 프로그래밍**은 컴퓨터 프로그래밍의 패러다임 중 하나로 필요한 데이터를 **추상화**하여 여러개의 **객체**를 만든 뒤 **객체** 간 상호작용을 통해 서비스를 구현하는 프로그래밍이다.

## 클래스? 객체?

### 클래스(class)

- java에서 객체를 생성하기 위한 설계도이다. 대표적인 예시로 객체(붕어빵)를 만들기 위한 클래스(붕어빵틀)이라고 많이 비유를 하는 것 같다.
- 객체가 가지는 속성(필드)와 동작(메서드)로 이루어져 있다.
  > 예시로 '사람' 이란 클래스를 만든다고 쳐보자.
  > 이름, 나이, 성별 등의 속성들로 구성할 수 있다.

### 객체(object)

- 클래스를 기반으로 만들어지는 물리적/추상적으로 존재, 생각할 수 있는 것 중 자신만의 속성/행동을 가진, 다른 것과 식별 가능 한 것이다.
  > 예를 들면 "홍길동", 29세, 남 등의 정보를 묶은 데이터를 "사람"이라는 틀(클래스)의 객체로 볼 수 있다.

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

이렇게 객체 지향 프로그래밍에 관하여 간단하게 정리해보았다.
`,lv=`---
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
`,iv=`---
title: "제어의 역전(IoC), 의존성 주입(DI)"
date: "2025-12-10"
description: "제어의 역전과 의존성 주입에 대하여 간단하게 작성한 글입니다."
tags: ["JAVA"]
---

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
    \`\`\`
`,uv=`---
title: "...알림 설정까지.. 옵저버 패턴(Observer Pattern)"
date: "2025-12-13"
description: "옵저버 패턴에 대하여 간단하게 정리한 글입니다."
tags: ["JAVA"]
---

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

위 처럼 구독을 취소한 옵저버(bottom)는 알림 대상에서 제외되어, 이벤트가 발생하여도 아무런 행동을 취하지 않는 것을 확인할 수 있다.
`,rv=`---
title: "리액티브 프로그래밍(Reactive Programming)"
date: "2025-12-20"
description: "리액티브 프로그래밍에 대하여 간단하게 정리한 글입니다."
tags: ["JAVA"]
---

> _본 포스팅에 사용된 모든 이미지는 GEMINI를 통해 생성된 이미지 입니다._

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

| 구분                 | Cold Publisher                                                                                               | Hot Publisher                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **데이터 생성 시점** | 구독 시점에 데이터 생성                                                                                      | 구독과 관계없이 데이터 생성                                                                                                       |
| **데이터 공유**      | 각 구독자가 독립적인 데이터 스트림 수신                                                                      | 모든 구독자가 동일한 데이터 스트림 공유                                                                                           |
| **구독 시점**        | 구독 시점과 무관하게 모든 데이터 수신 가능                                                                   | 구독 시점 이후의 데이터만 수신 가능                                                                                               |
| **리소스 사용**      | 구독자마다 독립적인 리소스 사용                                                                              | 하나의 리소스를 여러 구독자가 공유                                                                                                |
| **장점**             | - 각 구독자가 처음부터 끝까지 모든 데이터를 받을 수 있음<br>- 구독자별 독립적인 처리 가능<br>- 재실행이 쉬움 | - 리소스 효율적 (하나의 스트림을 여러 구독자가 공유)<br>- 실시간 데이터 브로드캐스팅에 적합<br>- 구독자 수에 관계없이 일정한 성능 |
| **단점**             | - 구독자가 많을수록 리소스 소비 증가<br>- 동일한 작업을 구독자마다 반복 수행                                 | - 늦게 구독한 경우 이전 데이터를 놓칠 수 있음<br>- 구독자 간 데이터 동기화 고려 필요                                              |
| **사용 예시**        | - HTTP 요청<br>- 파일 읽기<br>- 데이터베이스 쿼리<br>- 독립적인 작업 처리                                    | - 실시간 주식 시세<br>- 센서 데이터 스트림<br>- 채팅 메시지<br>- 이벤트 브로드캐스팅                                              |
| **대표적인 예**      | \`Flux.fromIterable()\`, \`Mono.just()\`, \`Flux.range()\`                                                         | \`Sinks\`, \`ConnectableFlux\`, \`share()\`                                                                                             |
`,sv=`---
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

결국 시스템의 요구사항과 운영 환경을 고려하여 적절한 구성을 선택하는 것이 중요하다.`,cv=`---
title: "Mirrored Queue VS Quorum Queue"
date: "2026-01-14"
description: "RabbitMQ Mirrored Queue와 Quorum Queue에 대하여 정리한 글입니다."
tags: ["Programming"]
---

RabbitMQ 클러스터 환경에서 메시지 유실을 방지하기 위한 두 가지 주요 메시지 복제 방식인 Mirrored Queue와 Quorum Queue에 대해 알아보자.

과거 RabbitMQ 클러스터를 구성할 일이 생겼다. 우리 시스템은 IDC 이중화 환경으로 운영되고 있었는데, 두 개의 IDC 중 하나가 통째로 다운되더라도 서비스는 계속 운영되어야 했다. RabbitMQ 서버는 IDC1에 2대, IDC2에 1대, 총 3개의 노드로 구성하였고, 처음에는 공식적으로 권장하는 Quorum Queue 도입을 시도했다. 하지만 우리 환경에서는 예상치 못한 문제가 있었고, 결국 다른 선택을 해야 했다. 그 과정에서 알아낸 Mirrored Queue와 Quorum Queue의 차이를 정리해보려고 한다.

## 왜 메시지 복제가 필요할까?

RabbitMQ 클러스터를 **메타데이터**는 자동으로 모든 노드에 공유된다. 하지만 **실제 메시지**는 기본적으로 큐가 생성된 노드에만 저장된다.

> 💡**메타데이터 (metadata)?**
>
> RabbitMQ에서의 메타데이터는 메시징 서비스를 구성하는 설정 정보이다.
> 예) 큐 이름, 큐 설정값 (durable, auto-delete 등), 익스체인지, 바인딩 규칙, 계정 정보 등

즉, 특정 노드에 장애가 발생하면 해당 노드에 저장된 메시지에 접근할 수 없게 된다. 이러한 문제를 해결하기 위해 메시지를 여러 노드에 복제하는 방식이 필요하다.

## Mirrored Queue (HA Queue)

Mirror Queue는 RabbitMQ 3.0부터 도입된 고가용성 큐이다. **RabbitMQ 3.8 이후로는 Deprecated**되어 더 이상 권장되지 않는다.

> 💡**HA란?**
>
> **HA(High Availability, 고가용성)** 는 시스템이나 서비스가 **장애 없이 지속적으로 운영**되는 능력을 의미한다.

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

> 💡**Raft 합의 알고리즘?**
>
> 분산 시스템에서 노드 간 합의를 달성하기 위한 알고리즘이다. 과반수의 노드가 동의해야만 데이터가 커밋되므로, 강력한 데이터 일관성을 보장한다.

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

| 구분                 | Mirror Queue                   | Quorum Queue       |
| -------------------- | ------------------------------ | ------------------ |
| **도입 시기**        | RabbitMQ 3.0                   | RabbitMQ 3.8       |
| **알고리즘**         | Primary-Mirror 복제            | Raft 합의 알고리즘 |
| **최소 노드 수**     | 2개                            | 3개 (홀수 권장)    |
| **구조**             | Primary 1개 + Mirror N개       | 모든 노드가 동등   |
| **읽기/쓰기**        | Primary만 처리                 | Leader가 처리      |
| **메시지 손실**      | Primary 장애 시 일부 손실 가능 | 거의 없음          |
| **데이터 일관성**    | 약함                           | 강함               |
| **Split-brain 처리** | 취약                           | 안전 (과반수 원칙) |
| **성능**             | 보통                           | 좋음               |
| **설정 방법**        | Policy 기반                    | 큐 타입 지정       |
| **장애 복구**        | 수동 개입 필요할 수 있음       | 자동 Leader 선출   |

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

일반적으로는 Quorum Queue 사용을 권장한다. Mirrored Queue는 RabbitMQ 팀에서도 더 이상 권장하지 않으며, 향후 버전에서는 제거될 가능성이 높다고 한다.

하지만 우리 환경에서는 Quorum Queue를 선택할 수 없었다. Quorum Queue는 과반수 정책을 기반으로 동작하기 때문에, IDC1(2노드)이 다운되면 전체 3노드 중 과반수를 잃게 되어 RabbitMQ 자체가 동작을 멈춰버렸다. IDC 이중화의 핵심 목적인 "하나의 IDC가 다운돼도 서비스가 동작해야 한다"를 달성할 수 없었던 것이다.

결국 Deprecated임에도 불구하고 Mirror Queue를 선택했다. Mirror Queue는 Primary 노드만 살아있으면 동작하기 때문에, IDC1이 통째로 다운되더라도 IDC2의 노드가 새로운 Primary로 승격되어 서비스를 이어갈 수 있었다.
Quorum Queue 사용을 권장하긴 하지만, 상황에 따라 Mirrored Queue를 선택해야하는 상황이 올 수 있으니, 환경에 따라 적절한 선택이 필요한 것 같다.
`,ov=`---
title: "React로 개발된 GitHub Blog 배포 방법"
date: "2026-02-05"
description: "React 기반 프로젝트 GitHub Pages 블로그 배포 방법을 정리한 글입니다."
tags: ["GitHub", "배포", "React"]
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
  "homepage": "https://kimhanwhee.github.io/"
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
import { HashRouter, Routes, Route } from "react-router-dom";

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
    branches: ["main"]

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

이로써 매번 명령어를 쳐주지 않아도 main에 나의 블로그 코드를 푸시하면 자동으로 GitHub Pages에 배포를 해주는 환경이 구축되었다!
`,fv=`---
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
`,hv=`---
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
`,pv=`---
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
`,gv=`---
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
`,yv=`---
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
`,bv=`---
title: "ChronicleMap - GC 메모리 해제 실패 사건"
date: "2026-03-26"
description: "트러블슈팅 - 크로니클맵 - gc 메모리 해제 실패 cpu 폭증에 관한 회고"
tags: ["트러블슈팅", "JAVA", "Spring Boot"]
---

> "이 글은 2024년에 실제로 겪었던 트러블슈팅을 정리한 글이다."

내가 개발을 담당했던 프로그램은 대용량 데이터를 처리함과 동시에, 프로그램 종료 시 처리 중이던 데이터를 파일로 백업해서 재기동 시 종료됐던 그대로 다시 실행되게끔 개발하는 것이 목표였다.

여러 자료구조를 찾다가 해당 조건을 모두 충족하는 **Chronicle Map**이라는 자료구조를 사용하게 되었다.

---

## Chronicle Map이란?

크로니클 맵(Chronicle Map)은 빠른 속도 및 다중 프로세스 지원을 위해 설계된 키-값 형태의 자료구조이다.

\`ConcurrentHashMap\`과 동일하게 \`ConcurrentMap\` 인터페이스를 구현하지만, 데이터가 저장되는 위치가 **JVM 외부(Off-heap)** 라는 점이 다르다.

### 특징

- **빠른 속도** - 초당 수백만 건의 작업을 수행하며, 메모리에 직접 데이터를 저장하고 디스크 I/O를 최소화한다.
- **영속성** - 저장된 데이터를 디스크에 지속적으로 저장하여 프로그램이 다운되어도 데이터 유실이 없다.
- **동시성 지원** - 멀티 스레드 환경에서 여러 스레드가 접근하더라도 데이터의 일관성을 유지할 수 있다.

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
2024-04-01 19:00:10.803 ERROR [dispatcherServlet] Handler dispatch failed; nested exception is java.lang.OutOfMemoryError: Java heap space
java.lang.OutOfMemoryError: Java heap space
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

> 💡 **off-heap이란?**
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

**❌** 문제는 GC 처리 속도가 아니었다. GC가 해당 데이터를 수집 대상(unreachable)으로 아예 인식하지 못하고 있다는 것이다. 즉 어딘가에서 계속 참조하고 있다는 뜻이었다.

---

### 추측 #2 - ChronicleMap 내부에서 데이터를 참조하고 있다

ChronicleMap의 내부 동작을 다시 찾아보았다.

#### GC Root란?

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

#### ChronicleMap은 내부적으로 ThreadLocal을 사용한다

ChronicleMap의 소스코드(\`VanillaChronicleMap.java\`)를 보면 내부에 다음 필드가 존재한다.

\`\`\`java
transient ThreadLocal<ContextHolder> cxt;
\`\`\`

\`values()\`로 이터레이션을 수행할 때 ChronicleMap은 내부적으로 이 ThreadLocal에 **MapEntry context를 저장**한다. 즉, 개발자가 명시적으로 ThreadLocal을 사용하지 않아도 라이브러리 내부에서 알아서 ThreadLocal에 context를 집어넣는 구조다.

\`\`\`java
final ChainingInterface i() {
    ThreadLocal<ContextHolder> cxt = this.cxt;
    ...
    ContextHolder contextHolder = (ContextHolder)cxt.get();
    if (contextHolder == null) {
        iterationContext = this.newIterationContext();
        contextHolder = new ContextHolder(iterationContext);
        this.addContext(contextHolder);
        cxt.set(contextHolder);  // ← 여기서 ThreadLocal에 context 저장
        return iterationContext;
    }
    ...
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

**✅ 추측 #2 유력** - ChronicleMap이 내부적으로 ThreadLocal에 context를 저장하고 있었다. 그러면 \`remove()\`를 해도 왜 해제가 안 됐는지도 설명이 됐다.

---

### 추측 #3 - remove()를 해도 왜 해제가 안 됐을까

\`remove()\`는 off-heap(ChronicleMap 저장소)에서 해당 엔트리를 삭제한다. 하지만 **이미 heap에 올라온 객체는 건드리지 않는다.**

\`\`\`
values() 호출 순간
    → 전체 엔트리 역직렬화
    → SmsMessage 객체 N만 개가 heap에 생성
    → ThreadLocal context에 참조 저장  ← 이미 끝남
          ↓
remove() 호출
    → off-heap 엔트리 삭제? → ㅇㅇ 삭제
    → heap에 이미 올라온 객체 삭제? → ㄴㄴ 그대로
    → ThreadLocal이 여전히 참조 중? → ㅇㅇ 그대로 참조함
          ↓
GC → "아직 살아있는 객체" 판정 → 수집 불가
\`\`\`

창고(off-heap)에서 물건을 꺼내 방(heap)에 쭉 늘어놓은 뒤 창고 목록만 지운 셈이다. 방에 늘어놓은 물건은 그대로인데 창고 정리만 된 것이다.

그렇다면 context가 ThreadLocal에 쌓이는 게 문제라면, **\`close()\`를 호출해주면 해결되지 않을까?**

---

### 추측 #4 - context.close()를 호출하면 해결되지 않을까

\`values()\`의 Iterator를 살펴보니 문제가 있었다. \`AbstractChronicleMap\`의 \`values()\` 구현을 보면:

\`\`\`java
default Collection<V> values() {
    return new AbstractCollection<V>() {
        public Iterator<V> iterator() {
            return new Iterator<V>() {
                // entrySet().iterator() → iterationContext() → ThreadLocal에 context 저장
                private Iterator<Map.Entry<K, V>> i = AbstractChronicleMap.this.entrySet().iterator();

                public boolean hasNext() { return this.i.hasNext(); }
                public V next() { return ((Map.Entry)this.i.next()).getValue(); }
                public void remove() { this.i.remove(); }
                // ← AutoCloseable 미구현, close() 호출 방법 없음
            };
        }
    };
}
\`\`\`

\`Iterator\`가 \`AutoCloseable\`을 구현하지 않아 루프가 끝나도 \`close()\`가 호출될 방법이 없었다.

그렇다면 \`close()\`를 호출할 수 있는 \`forEach()\`를 사용했다면 어땠을까? \`forEachEntryWhile()\`을 보면 \`finally\`에서 \`close()\`를 무조건 호출하는 구조다.

\`\`\`java
} finally {
    if (c != null) {
        c.close();  // ← 예외 여부와 관계없이 항상 close() 호출
    }
}
\`\`\`

**하지만 여기서 또 막혔다.** \`CompiledMapIterationContext\`의 \`close()\`를 직접 확인해보니:

\`\`\`java
public void close() {
    this.doCloseDelayedUpdateChecksum();
    this.doCloseKeySearch();
    ...
    this.doCloseUsed();  // ← used = false, 락 해제
    ...
}

public void doCloseUsed() {
    if (this.usedInit()) {
        this.used = false;
        if (this.firstContextLockedInThisThread) {
            this.rootContextInThisThread.unlockContextLocally();
        }
    }
}
\`\`\`

\`context.close()\`는 내부 리소스와 락을 해제할 뿐, **ThreadLocal에서 context 참조를 제거하지 않는다.**

ThreadLocal의 \`cxt\` 필드가 실제로 null이 되는 건 \`VanillaChronicleMap\`의 \`cleanupOnClose()\`에서다.

\`\`\`java
protected void cleanupOnClose() {
    super.cleanupOnClose();
    ...
    this.cxt = null;  // ← map.close() 호출 시에만 null
}
\`\`\`

즉 \`cxt\`가 null이 되는 건 **맵 자체가 완전히 닫힐 때**뿐이었다.

\`\`\`
VanillaChronicleMap
  └── cxt (null이 아닌 이상 계속 살아있음)
        └── ThreadLocalMap의 key로 사용됨
              └── value (ContextHolder → SmsMessage 참조들)
                                                ↑
                                         GC 수집 불가
\`\`\`

**❌** \`forEach()\`로 \`close()\`를 호출해도 ThreadLocal 참조는 계속되는 것이었다. 결국 \`map.close()\`가 호출되기 전까지는 어떤 방식으로 이터레이션하든 메모리 누수는 피할 수 없는 구조였다.

거기에 더해 해당 스레드는 \`while(true)\` 루프로 동작하는 구조였다. 프로그램 종료 전까지는 **스레드가 절대 종료되지 않고, 맵도 닫히지 않기 때문에** ThreadLocal도 영원히 살아남고, 거기에 매달린 SmsMessage 객체들도 GC가 끝내 수집하지 못했던 것이다.

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

이것이 데이터 유입을 멈추고 수십 분이 지나도 메모리가 줄어들지 않았던 실제 이유라고 생각한다. (파도파도 끝이 없다..)

---

## 결론

| 의심 원인                             | 실제 여부         | 설명                                                                           |
| ------------------------------------- | ----------------- | ------------------------------------------------------------------------------ |
| off-heap 방식 자체의 문제             | ❌ 직접 원인 아님 | off-heap이 역직렬화의 소스였지만 직접 원인은 아님                              |
| GC 처리 속도 부족                     | ❌ 직접 원인 아님 | 속도가 아니라 수집 대상 인식 자체가 안 됨                                      |
| ChronicleMap의 remove()               | ❌ 직접 원인 아님 | off-heap만 삭제, heap에 올라온 객체는 건드리지 않음                            |
| context.close() 미호출                | ⚠️ 부분 원인      | for-each로는 close() 호출 불가, 하지만 호출해도 ThreadLocal 참조는 남음        |
| **map.close() 전까지 cxt null 안 됨** | ✅ 핵심 원인      | 맵이 닫히지 않는 한 ThreadLocal 참조가 끊어지지 않아 GC가 영구적으로 수집 불가 |

정리하면 \`values()\`는 context의 \`close()\`를 호출하지 않아 GC 대상이 되지 않아서 메모리가 해제되지 않았던 것도 맞고, 만약 \`close()\`를 호출했더라도 ChronicleMap의 cxt(ThreadLocal) 필드가 null이 되지 않는 한 계속 참조되어 GC 대상이 되지 않았을 것이다. 이중벽에 막혀버린 것이다.

ChronicleMap은 **대용량 데이터를 오래 보관**하는 시나리오에 적합한 구조였던 것 같다. 이 프로그램처럼 빠르게 put/remove하면서 \`values()\`로 전체를 반복 스캔하는 패턴과는 처음부터 맞지 않았던 것이다.

이렇게 ChronicleMap 내부 동작을 확인해보니 \`BlockingQueue\`와 \`ConcurrentHashMap\`으로 교체한 이후 문제가 사라진 이유도 명확해졌다. 데이터가 처음부터 heap에 있어 off-heap/heap 왕복 자체가 없고, ThreadLocal을 사용할 필요도 없이 heap에 할당된 참조만 반환하면 된다. GC가 모든 객체의 생명주기를 온전히 관리할 수 있는 구조였기 때문에 문제가 사라졌다고 생각한다.

> **오늘의 교훈**
>
> 새로운 라이브러리를 쓸 때에는 충분한 공부와 충분한 테스트를 거치도록 하자.

---

## 참고 자료

- [Oracle OpenGrok Issue #2586 — ChronicleMap ThreadLocal memory leak](https://github.com/oracle/opengrok/issues/2586)
- [클래스로더 메모리 누수 원인과 해결법 (ThreadLocal 사용시 주의점)](https://woojoovove.tistory.com/94)
- [VanillaChronicleMap.java 소스코드](https://github.com/OpenHFT/Chronicle-Map/blob/master/src/main/java/net/openhft/chronicle/map/VanillaChronicleMap.java)
`,vv=`---
title: "Graceful Shutdown 구현 - 데이터 유실 방지"
date: "2026-03-29"
description: "트러블슈팅 - Graceful Shutdown으로 안전한 프로그램 종료 구현"
tags: ["트러블슈팅", "Java", "Spring Boot"]
---

> "이 글은 2025년에 겪었던 트러블슈팅을 정리한 글이다."

## 문제 상황

특정 고객사의 TCP 메시지를 수신하여 처리하는 메시지 수/송신 프로그램 개발을 담당했었다. 고객사 측에서는 우리 서버가 종료 상태일 경우 메시지를 재처리하는 환경이었기 때문에, 핵심은 **일단 인입된 메시지는 반드시 유실 없이 처리되어야 한다**는 것이었다.

그런데 개발 중 테스트를 진행하다가 데이터가 처리되는 도중 프로그램을 재기동하면 처리 중이던 데이터가 유실되는 현상을 발견했다. 해당 문제를 해결했던 내용을 정리해보려 한다.

메시지 처리 흐름은 아래와 같다.

\`\`\`
메시지 인입 (Netty) → Redis 저장 → RabbitMQ 퍼블리시
\`\`\`

Netty로 메시지를 수신하고, Redis에 처리중인 메시지 RabbitMQ로 발행하는 구조였다.

---

## 문제 발생

메시지가 활발하게 인입되는 도중 프로그램을 종료하자 **메시지 유실**이 발생했다.

원인은 Spring의 종료 순서에 있었다. Spring이 종료될 때 Redis와 RabbitMQ Bean이 먼저 종료되는데, Netty는 그 이후에도 계속 메시지를 받아들이고 있었다. 이미 Redis와 RabbitMQ가 내려간 상태에서 Netty가 메시지를 인입시키니 처리할 수 없는 메시지가 그대로 유실되는 것이었다.

\`\`\`
[종료 시작]
Redis 종료      ← Bean 종료 완료
RabbitMQ 종료   ← Bean 종료 완료
Netty           ← 아직 메시지 인입 중 (종료 안 됨)
                        ↓
               처리할 Redis/RabbitMQ 없음
                        ↓
               메시지 유실 발생
\`\`\`

---

## 원인 분석

문제의 핵심은 두 가지였다.

**1. 종료 순서 미제어**
Spring이 기동/종료될 때 Bean들의 순서를 별도로 제어하지 않으면 등록 순서나 의존관계에 따라 제멋대로 종료된다. Netty가 Redis/RabbitMQ보다 먼저 종료되어서 메시지 인입을 막아야 하는데 그 순서가 보장되지 않았던 것이다.

**2. Netty 종료 로직 부재**
Netty의 \`bossGroup\`과 \`workerGroup\`을 명시적으로 종료하는 로직이 없어서 프로그램 종료 신호가 와도 Netty가 계속 메시지를 받아들이고 있었다.

---

## 해결 - SmartLifecycle 기반 Graceful Shutdown 구현

Spring이 제공하는 \`SmartLifecycle\` 인터페이스를 구현하여 **Netty의 기동/종료 순서를 직접 제어**하도록 했다.

### SmartLifecycle이란?

Spring이 제공하는 생명주기 관리 인터페이스로, Bean의 시작/종료 시점과 순서를 세밀하게 제어할 수 있다.

| 메서드            | 역할                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| \`start()\`         | Bean 시작 시 호출. 컴포넌트를 활성화한다.                                                        |
| \`stop()\`          | Bean 종료 시 호출. 실제 종료 로직을 여기에 구현한다.                                             |
| \`isRunning()\`     | 현재 실행 중인지 여부를 반환한다. Spring이 이 값으로 start/stop 호출 여부를 판단한다.            |
| \`getPhase()\`      | 시작/종료 순서를 결정하는 우선순위. **숫자가 클수록 늦게 시작하고 먼저 종료된다.**               |
| \`isAutoStartup()\` | \`true\`면 Spring 기동 시 자동으로 \`start()\`를 호출한다.                                           |
| \`stop(Runnable)\`  | 비동기 종료 시 사용. 종료 완료 후 \`callback.run()\`을 호출해야 Spring에 종료 완료를 알릴 수 있다. |

### 구현 방식

- **기동 시** : Netty를 Redis/RabbitMQ보다 **늦게 시작**시켜 모든 프로세스가 준비된 후에 메시지를 인입받도록 한다.
- **종료 시** : Netty를 Redis/RabbitMQ보다 **먼저 종료**시켜 메시지 인입을 차단한 뒤 나머지가 종료되도록 한다.

\`getPhase()\`를 \`Integer.MAX_VALUE\`로 설정하면 가장 마지막에 시작하고 가장 먼저 종료된다.

\`\`\`
[기동 순서]
Redis 기동 → RabbitMQ 기동 → Netty 기동 (phase 가장 높음 = 마지막 시작)

[종료 순서]
Netty 종료 (phase 가장 높음 = 가장 먼저 종료) → RabbitMQ 종료 → Redis 종료
\`\`\`

### 구현

**GracefulShutdown.java**

\`\`\`java
@Slf4j
@Component
@RequiredArgsConstructor
public class GracefulShutdown implements SmartLifecycle {
    private final NioEventLoopGroup bossGroup;
    private final NioEventLoopGroup workerGroup;

    private volatile boolean running = false;

    @Override
    public void start() {
        running = true;
        log.info("GracefulShutdown component started");
    }

    @Override
    public void stop() {
        if (!running) {
            return;
        }

        log.info("=== Graceful Shutdown Started ===");

        try {
            // 1. bossGroup 종료 — 새로운 연결 차단
            log.info("Shutting down bossGroup...");
            if (!bossGroup.isShuttingDown()) {
                bossGroup.shutdownGracefully().sync();
            }

            // 2. workerGroup 종료 — 처리 중인 작업 완료까지 대기
            log.info("Waiting for workerGroup to complete all operations...");
            if (!workerGroup.isShuttingDown()) {
                workerGroup.shutdownGracefully(0, Long.MAX_VALUE, TimeUnit.MILLISECONDS).sync();
            }

            log.info("=== Netty Graceful Shutdown Completed ===");

        } catch (Exception e) {
            log.error("Error during graceful shutdown", e);
        } finally {
            running = false;
        }
    }

    @Override
    public boolean isRunning() {
        return running;
    }

    @Override
    public int getPhase() {
        return Integer.MAX_VALUE; // 가장 마지막에 시작, 가장 먼저 종료
    }

    @Override
    public boolean isAutoStartup() {
        return true;
    }

    @Override
    public void stop(Runnable callback) {
        stop();
        callback.run();
    }
}
\`\`\`

\`bossGroup\`은 새로운 연결을 받아들이는 역할, \`workerGroup\`은 실제 데이터를 처리하는 역할이다. 종료 시 bossGroup을 먼저 내려 새 연결을 차단하고, workerGroup은 처리 중인 작업이 모두 끝날 때까지 기다린 뒤 종료한다.

---

## 결과

Graceful Shutdown 적용 후 종료 흐름은 아래와 같이 바뀌었다.

\`\`\`
[종료 시작]
1. Netty bossGroup 종료  → 새 메시지 인입 차단
2. Netty workerGroup 종료 → 처리 중인 메시지 완료까지 대기
3. RabbitMQ 종료
4. Redis 종료
\`\`\`

이와 같이 종료 순서를 지정하니 메시지가 활발하게 인입되는 상황에서 종료해도 더 이상 메시지 유실이 발생하지 않았다.

---

## 정리

| 문제                                 | 원인                                             | 해결                                          |
| ------------------------------------ | ------------------------------------------------ | --------------------------------------------- |
| 종료 시 메시지 유실                  | Redis/RabbitMQ 종료 후에도 Netty가 메시지를 인입 | SmartLifecycle로 Netty를 가장 먼저 종료       |
| 기동 시 처리 불가 메시지 발생 가능성 | Netty가 Redis/RabbitMQ보다 먼저 뜰 수 있음       | getPhase() MAX_VALUE로 Netty를 가장 늦게 기동 |
`,xv=`---
title: "API Gateway 설정 변경 무중단 적용 - Spring Cloud Bus + RefreshScope"
date: "2026-03-30"
description: "트러블슈팅 - Spring Cloud API Gateway API 추가 시 재기동으로 인한 순단"
tags: ["트러블슈팅", "Spring Boot", "Spring Cloud", "MSA"]
---

> "이 글은 2025년에 겪었던 트러블슈팅을 정리한 글이다."

## 문제 상황

과거 운영하던 시스템은 **Spring Cloud Gateway** 기반의 API Gateway를 사용하고 있었다. Gateway의 라우팅 설정과 권한 설정은 아래와 같이 설정 파일로 관리되고 있었다.

**application.yml (라우팅 설정 예시)**

\`\`\`yaml
cloud:
  gateway:
    routes:
      - id: example-service/resource
        uri: lb://EXAMPLE-SERVICE
        predicates:
          - Path=/v1/example/**
          - Method=POST
        filters:
          - RemoveRequestHeader=Cookie
\`\`\`

**SecurityConfig.java (권한 설정 예시)**

\`\`\`java
authorizeExchangeSpec
    .pathMatchers("/v1/service-a").hasAnyAuthority("ROLE_A", "CLIENT")
    .pathMatchers("/v1/service-b").hasAnyAuthority("ROLE_B", "CLIENT")
    // ...
\`\`\`

> \`authorizeExchange\`는 Spring Security WebFlux에서 **어떤 경로**에 **어떤 권한이 필요한지**를 정의하는 설정이다. 예를 들어 \`/v1/service-a\`는 \`ROLE_A\` 혹은 \`CLIENT\` 권한을 가진 사용자만 접근 가능하도록 제한하거나, \`/v1/public/**\`는 누구나 접근 가능하도록 열어두는 식으로 경로별 접근 제어를 설정한다.

문제는 이 설정을 수정할 때마다 **재배포 → 재기동**이 필요했다는 것이다. Gateway가 재기동되는 동안 시스템 순단이 발생했고, 그 사이에 고객사에서 요청이 들어오면 전부 실패 처리가 됐다.

당시에는 해당 플랫폼이 지속적으로 업데이트가 되어 API가 추가되는 상황이 많았는데, API가 하나 추가될 때마다 고객사 요청 실패가 발생하는 상황이었다. 이를 방지하기 위해 야근을 하며 발송량이 적을 때 재기동 하곤 했었다.

해당 이슈 해결을 담당하게되어 이런 불편함과 위험함을 해결하기 위해 방안을 생각해봤다.

---

## 해결 방안

문제를 두 가지로 나눠서 접근했다.

1. **설정 파일을 재기동 없이 다시 읽어오기** → Spring Cloud Bus + \`@RefreshScope\`
2. **권한 설정(authorizeExchange)도 실시간으로 반영하기** → 별도 모듈 구현

---

## 1. Spring Cloud Bus + @RefreshScope

Spring Cloud Bus는 설정 변경 이벤트를 메시지 브로커(RabbitMQ, Kafka 등)를 통해 전파하여, **재기동 없이 설정을 실시간으로 반영**할 수 있게 해주는 기능이다. 우리는 **RabbitMQ**를 이미 운영 중이었기 때문에 별도 인프라 추가 없이 적용할 수 있었다.

\`/actuator/busrefresh\` 엔드포인트를 호출하면 연결된 모든 서비스에 설정 변경 이벤트가 전파되고, \`@RefreshScope\`가 붙은 Bean은 다음 호출 시 새로운 설정으로 재생성된다.

\`\`\`java
@Bean
@RefreshScope
public SecurityWebFilterChain filterChain(ServerHttpSecurity http) throws Exception {
    // ...
}
\`\`\`

이를 통해 두 가지가 해결됐다.

- **라우팅 설정 반영** : \`application.yml\`에 새로 추가한 \`routes\` 설정이 \`busrefresh\` 호출만으로 즉시 적용된다.
- **Security 설정 Reload** : \`@RefreshScope\`에 의해 \`SecurityWebFilterChain\` Bean이 재생성되면서 화이트리스트 등 변경된 Security 설정이 반영된다.

> **SecurityWebFilterChain**은 Spring Security WebFlux에서 HTTP 요청이 들어올 때 자동으로 실행되는 보안 필터 체인으로, 인증/인가 처리를 담당한다.

---

## 2. PathMatchersFetcher 모듈 구현

근데 문제가 하나 더 있었다. \`@RefreshScope\`만으로는 \`authorizeExchange\` 설정이 제대로 반영이 안 됐다.

\`authorizeExchange\`는 Bean 초기화 시점에 설정이 고정되는 구조라서, \`@RefreshScope\`로 Bean이 재생성되더라도 코드상에 권한 설정이 새로 로드되지 않아 새로 추가한 경로들이 전부 401로 실패를 내렸다.

그래서 권한 설정을 코드에서 분리해 **외부 JSON 파일로 관리**하고, 이 파일을 주기적으로 읽어 \`authorizeExchange\`에 동적으로 적용하는 \`PathMatchersFetcher\` 모듈을 만들었다. (기존에는 모두 하드코딩이었음.)

### 권한 설정 파일 형식

\`\`\`json
[
  {
    "method": "POST",
    "path": "/actuator/busrefresh/**",
    "authority": ["ADMIN"]
  },
  {
    "method": "POST",
    "path": "/v1/service-a",
    "authority": ["ROLE_A", "CLIENT"]
  },
  {
    "method": "GET",
    "path": "/v1/public/resource",
    "authority": []
  }
]
\`\`\`

\`authority\`가 빈 배열이면 \`permitAll()\`, 값이 있으면 해당 권한만 허용하는 방식이다.

### PathMatchersFetcher.java

\`\`\`java
public class PathMatchersFetcher {

    @Value("\${gateway.auth-file-path}")
    private String passMatcherFilePath;
    private Gson gson = new Gson();
    private List<PathMatcherInfo> pathMatcherInfoList = new ArrayList<>();

    @PostConstruct
    public void init() {
        log.info("First Fetch Pass Matcher File...");
        try {
            List<PathMatcherInfo> newPathMatcherInfoList = getPathMatcherFile();
            log.info("Success First Pass Matcher File : {}", pathMatcherInfoList);
            this.pathMatcherInfoList = !newPathMatcherInfoList.isEmpty() ? newPathMatcherInfoList : this.pathMatcherInfoList;
        } catch (Exception e) {
            log.error("Error Occurred while first fetch pass matcher file...", e);
        }
    }

    // 30초마다 파일 다시 읽기
    @Scheduled(fixedDelay = 30000)
    public void setNewPassMatcher() {
        log.info("PassMatcher Fetch Start...");
        try {
            List<PathMatcherInfo> newPathMatcherInfoList = getPathMatcherFile();
            log.info("PassMatcher Fetch Success...");
            this.pathMatcherInfoList = !newPathMatcherInfoList.isEmpty() ? newPathMatcherInfoList : this.pathMatcherInfoList;
        } catch (Exception e) {
            log.error("Error Occurred while fetch pass matcher file...", e);
        }
    }

    public List<PathMatcherInfo> getPathMatcherFile() throws Exception {
        try {
            File file = new File(passMatcherFilePath);
            FileReader reader = new FileReader(file.getAbsolutePath());
            return gson.fromJson(reader, new TypeToken<List<PathMatcherInfo>>(){}.getType());
        } catch (Exception e) {
            log.error("PathMatcher File Format is Wrong!!!!", e);
            return new ArrayList<>();
        }
    }
}
\`\`\`

- **\`@PostConstruct\`** : 애플리케이션 기동 시 파일을 최초 1회 로드한다.
- **\`@Scheduled(fixedDelay = 30000)\`** : 30초마다 파일을 다시 읽어 최신 상태를 유지한다.
- 파일 읽기에 실패하면 기존 설정을 그대로 유지해 서비스 중단을 방지한다.

### SecurityConfig.java - 동적 권한 설정 적용

\`\`\`java
public ServerHttpSecurity.AuthorizeExchangeSpec addMatcher(
        ServerHttpSecurity.AuthorizeExchangeSpec authorizeExchangeSpec) {

    if (pathMatchersFetcher.getPathMatcherInfoList() != null
            && !pathMatchersFetcher.getPathMatcherInfoList().isEmpty()) {

        for (PathMatcherInfo pathMatcherInfo : pathMatchersFetcher.getPathMatcherInfoList()) {
            if (pathMatcherInfo != null) {
                String method = pathMatcherInfo.getMethod();
                String endPoint = pathMatcherInfo.getPath();
                String[] authority = pathMatcherInfo.getAuthority();

                if (authority == null || authority.length == 0) { // 권한이 없을 경우 모두 통과
                    authorizeExchangeSpec.pathMatchers(method, endPoint).permitAll();
                } else if (authority.length > 1) {
                    authorizeExchangeSpec.pathMatchers(method, endPoint).hasAnyAuthority(authority);
                } else {
                    authorizeExchangeSpec.pathMatchers(method, endPoint).hasAuthority(authority[0]);
                }
            }
        }
    }
    return authorizeExchangeSpec;
}
\`\`\`

\`busrefresh\` 이벤트가 발생하면 \`@RefreshScope\`에 의해 \`SecurityWebFilterChain\` Bean이 재생성되고, 이때 \`addMatcher()\`가 다시 호출되면서 \`PathMatchersFetcher\`가 보관 중인 **최신 파일 내용**으로 권한 설정이 적용된다.

---

## 전체 흐름

\`\`\`
[설정 변경 전]
JSON 파일 수정 (권한 설정)
또는
application.yml 수정 (라우팅 설정)
        ↓
/actuator/busrefresh 호출
        ↓
Spring Cloud Bus → RabbitMQ를 통해 이벤트 전파
        ↓
┌─────────────────────────────────────┐
│  @RefreshScope Bean 재생성                                     │
│   ├── 라우팅 설정 (routes) 반영                               │
│   └── 화이트리스트 설정 반영                                   │
│                                                               │
│  addMatcher() 재호출                                           │
│   └── PathMatchersFetcher가 보관 중인                         │
│       최신 JSON 파일 기반으로                                    │
│       authorizeExchange 설정 적용                               │
└─────────────────────────────────────┘
        ↓
재기동 없이 모든 설정 반영 완료
\`\`\`

---

## 결과

|                     | 개선 전                     | 개선 후                          |
| ------------------- | --------------------------- | -------------------------------- |
| 설정 변경 방법      | 코드 수정 → 재배포 → 재기동 | JSON 파일 수정 → busrefresh 호출 |
| 시스템 순단         | 발생                        | 없음                             |
| 고객사 전송 실패    | 발생                        | 없음                             |
| 권한 설정 반영 시간 | 재기동 완료 후              | busrefresh 호출 즉시             |

설정 변경이 잦은 운영 환경에서 재기동 없이 실시간으로 반영할 수 있게 되어 **고객사 요청 실패** 문제 및 이를 위한 **야근**이 없어졌다.
`,Sv=`---
title: "재기동 시 요청 실패 방지 - Eureka OUT_OF_SERVICE 활용"
date: "2026-04-08"
description: "트러블슈팅 - 마이크로서비스 재기동 시 Gateway 요청 실패 문제를 해결"
tags: ["트러블슈팅", "Spring Boot", "Eureka", "MSA", "Spring Cloud"]
---

과거 Spring Cloud Gateway와 Eureka를 사용하는 마이크로서비스 환경을 운영했었다. 특정 서비스를 재기동할 때마다 요청 실패가 발생하는 문제가 있었고, 이를 Eureka의 \`OUT_OF_SERVICE\` 상태를 활용해 해결했던 경험을 정리해보려 한다.

---

## 문제 상황

특정 서비스를 재기동할 때 아래와 같은 상황이 반복됐다. 참고로 해당 서비스는 스케일 아웃을 통해 2개 인스턴스 이상 구동되고 있는 애플리케이션 이었다.

1. 서비스 종료
2. Spring Cloud Gateway가 해당 서비스의 해당 인스턴스로 요청을 계속 라우팅
3. 이미 종료된 인스턴스로 요청이 들어와 실패 발생
4. 서비스 재기동 완료 후에야 정상화

서비스는 이미 종료됐는데 Gateway는 여전히 해당 인스턴스로 요청을 보내고 있었던 것이다.

---

## 원인

원인은 Eureka의 상태 감지 방식에 있었다.

Eureka는 각 서비스 인스턴스가 주기적으로 **Heartbeat**를 전송하는 방식으로 상태를 확인한다. 즉, 서비스가 종료되더라도 Eureka가 이를 즉시 감지하지 못하고 Heartbeat가 끊길 때까지 해당 인스턴스를 \`UP\` 상태로 유지한다.

\`\`\`
서비스 종료
    ↓
Eureka는 아직 UP으로 인식 (Heartbeat 끊기기 전까지)
    ↓
Gateway는 Eureka에서 UP인 인스턴스로 라우팅
    ↓
이미 종료된 서비스로 요청 → 실패
\`\`\`

Spring Cloud Gateway는 Eureka에 등록된 인스턴스 상태를 보고 라우팅 여부를 결정하기 때문에, Eureka가 종료를 감지하지 못하면 Gateway도 계속 라우팅을 시도하는 것이다.

---

## Eureka 인스턴스 상태

Eureka는 인스턴스 상태를 아래와 같이 관리한다.

| 상태             | 설명                 | 라우팅 |
| ---------------- | -------------------- | ------ |
| \`UP\`             | 정상 동작 중         | ✅     |
| \`DOWN\`           | 장애 상태            | ❌     |
| \`OUT_OF_SERVICE\` | 수동으로 트래픽 차단 | ❌     |
| \`STARTING\`       | 기동 중              | ❌     |

\`OUT_OF_SERVICE\`는 인스턴스가 살아있지만 의도적으로 트래픽을 차단하고 싶을 때 사용하는 상태다. 이 상태로 변경하면 Gateway가 해당 인스턴스로 라우팅하지 않는다.

---

## 해결 - OUT_OF_SERVICE 활용

재기동 전에 해당 서비스의 Eureka 상태를 \`OUT_OF_SERVICE\`로 변경하여 Gateway가 해당 인스턴스로 라우팅하지 않도록 막는 방식으로 해결했다.

### 재기동 절차

\`\`\`
1. Eureka 상태를 OUT_OF_SERVICE로 변경
        ↓
2. Gateway가 해당 인스턴스로 라우팅 중단
        ↓
3. 실시간 로그로 요청이 더 이상 들어오지 않는 것 확인
        ↓
4. 서비스 재기동
        ↓
5. 재기동 완료 후 자동으로 UP 상태로 복귀
\`\`\`

### 상태 변경 방법

상태 변경 방법
Eureka Server REST API를 통해 특정 인스턴스의 상태를 직접 변경할 수 있다.

\`\`\`
PUT http://{eureka-server-ip}:{eureka-server-port}/eureka/apps/{service-id}/{instance-id}/status?value=OUT_OF_SERVICE
\`\`\`

상태 변경 후 로그를 확인하여 해당 인스턴스로 요청이 더 이상 들어오지 않는 것을 확인한 뒤 재기동을 진행했다.

---

## 개선 방향 - 자동화

위 방식은 재기동할 때마다 수동으로 엔드포인트를 호출해야 한다는 단점이 있다. 실수할 여지도 있고 번거롭기도 하다.

\`@PreDestroy\`를 활용하면 애플리케이션 종료 시 자동으로 \`OUT_OF_SERVICE\`로 변경하도록 구현하는 방법도 있다.

\`\`\`java
@Component
@RequiredArgsConstructor
public class GracefulShutdownHandler {

    private final EurekaClient eurekaClient;

    @PreDestroy
    public void onShutdown() throws InterruptedException {
        log.info("서비스 종료 전 OUT_OF_SERVICE로 상태 변경...");
        eurekaClient.getApplicationInfoManager()
                .setInstanceStatus(InstanceStatus.OUT_OF_SERVICE);

        // Gateway가 상태 변경을 감지할 시간 확보
        Thread.sleep(30000);
        log.info("트래픽 차단 완료, 서비스 종료 진행");
    }
}
\`\`\`

이렇게 구현하면 재기동 시 별도로 엔드포인트를 호출하지 않아도 자동으로 트래픽이 차단된 뒤 종료된다. 하지만 확실히 인입이 차단이되어야 종료하는것이 안전한 경우 Eureka 서버에 API를 호출하는 것이 더 안전할 수 있다. 상황에 맞게 사용하는게 좋아보인다.

---

## 정리

|             | 개선 전     | 개선 후                       |
| ----------- | ----------- | ----------------------------- |
| 재기동 방식 | 그냥 재기동 | OUT_OF_SERVICE 변경 후 재기동 |
| 요청 실패   | 발생        | 없음                          |
| 트래픽 차단 | 없음        | Gateway가 라우팅 제외         |

서비스 디스커버리 환경에서 재기동은 단순히 프로세스를 껐다 켜는 게 아니라, **Gateway와 Eureka 상태까지 고려한 절차**가 필요하다는 것을 이 경험을 통해 배웠다.
`,Ev=`---
title: "Redis - KEYS vs SCAN"
date: "2026-04-17"
description: "트러블슈팅 - Redis KEYS 명령어로 인한 타임아웃 발생 및 SCAN 명령어"
tags: ["트러블슈팅", "Redis", "Spring Boot", "WebFlux"]
---

테스트 서버에서 새로 추가한 요청에 대한 처리 테스트를 진행하던 중 Redis 전체 동작이 타임아웃 나는 현상이 발생했다. 특정 요청만 느린 게 아니라 새로 추가한 요청을 수행할 때 **Redis에 대한 모든 요청이 응답을 받지 못하는 상황**이었다.

원인은 문제가 발생한 코드에서 Redis 데이터를 조회할 때 \`KEYS\` 명령어를 사용하고 있었던 것이다.

---

## 원인 - KEYS 명령어의 동작 방식

Redis는 **싱글 스레드**로 동작한다. 즉, 한 번에 하나의 명령어만 처리할 수 있다.

\`KEYS\` 명령어는 패턴에 매칭되는 모든 키를 **한 번에 전부 조회**하는 방식이다. 키가 많을수록 조회 시간이 길어지고, 그 시간 동안 Redis는 다른 명령어를 처리하지 못한다.

실시간으로 수백~수천개의 데이터를 처리하던 시스템에서 Redis 요청 블로킹은 치명적인 문제였다.

\`\`\`
KEYS 실행 중
    ↓
Redis 싱글 스레드가 KEYS 처리에 묶임
    ↓
다른 모든 요청 대기
    ↓
타임아웃 발생
\`\`\`

시간복잡도도 **O(N)** 이라 키가 많을수록 선형적으로 느려진다. 테스트 서버에서는 데이터가 적어서 평소에 문제가 없었지만, 특정 시점에 키가 많아지면서 타임아웃이 발생했던 것이다.

---

## SCAN 명령어

\`SCAN\`은 \`KEYS\`의 이런 문제를 해결하기 위해 나온 명령어다. **커서(cursor) 기반으로 조금씩 나눠서 조회**하는 방식이라 Redis를 블로킹하지 않는다.

\`\`\`
SCAN 0 MATCH prefix:* COUNT 100
→ cursor 번호 + 결과 반환
→ cursor가 0으로 돌아올 때까지 반복
→ 전체 순회 완료
\`\`\`

---

## KEYS vs SCAN 비교

|                   | KEYS                 | SCAN                     |
| ----------------- | -------------------- | ------------------------ |
| **방식**          | 전체 키 한 번에 조회 | cursor 기반 페이지네이션 |
| **시간복잡도**    | O(N)                 | O(1) per call            |
| **블로킹**        | ✅ 블로킹            | ❌ 논블로킹              |
| **반환**          | 한 번에 전체 반환    | 조금씩 나눠서 반환       |
| **일관성**        | 완전 보장            | 중복/누락 가능성 있음    |
| **프로덕션 사용** | ❌ 위험              | ✅ 권장                  |

---

## 코드 변경

프로젝트는 **Spring WebFlux + ReactiveRedisTemplate** 환경이었다.

**변경 전 - KEYS 사용**

\`\`\`java
public Mono<Map<String, GroupInfo>> findGroup() {
    return reactiveRedisTemplate.keys(PrefixConfig.GROUP_PREFIX.getValue() + "*")
            .flatMap(key -> {
                // ... 데이터 처리 로직

                return reactiveRedisTemplate.opsForHash().entries(key)
                        .flatMap(entry -> {
                            // ... 데이터 처리 로직
                        });
            })
            .collectMap(...);
}
\`\`\`

**변경 후 - SCAN 사용**

\`\`\`java
public Mono<Map<String, GroupInfo>> findGroup()) {
    ScanOptions scanOptions = ScanOptions.scanOptions()
            .match(PrefixConfig.GROUP_PREFIX.getValue() + "*")
            .count(100)
            .build();

    return reactiveRedisTemplate.scan(scanOptions)
            .flatMap(key -> {
                 // ... 데이터 처리 로직
                        .flatMap(entry -> {
                            // ... 데이터 처리 로직
                        });
            })
            .collectMap(...);
}
\`\`\`

변경 포인트는 단순하다. \`reactiveRedisTemplate.keys()\` → \`reactiveRedisTemplate.scan()\`으로 바꾸고, \`ScanOptions\`로 패턴과 한 번에 가져올 키 개수(\`count\`)를 지정해주면 된다.

---

## 결과

\`SCAN\`으로 교체한 후 Redis 타임아웃 현상이 완전히 해소됐다.

만일 테스트를 꼼꼼히하지 않고 운영 서버에 배포했다면 해당 요청이 수행될 때마다 초당 수백 수천개의 데이터가 지연되거나 실패하는 큰 장애가 될 수 있었다.

\`KEYS\`는 Redis 공식 문서에서도 **프로덕션 환경에서 사용하지 말 것**을 권고하고 있다고 한다. 키가 적은 개발/테스트 환경에서는 문제가 없어 보여도, 실시간 데이터 조회가 일어나는 운영 환경에서 Redis I/O 블로킹은 장애로 이어질 수 있기 때문에. Redis를 사용한다면 \`SCAN\`을 쓰는 습관을 들이는 게 좋을 것 같다.
`,Tv=`---
title: "Jasypt로 application.yml 민감 정보 자동 암호화하기"
date: "2026-04-24"
description: "프로그램 설정 파일에 평문으로 노출되던 DB 정보를 Jasypt를 사용해 앱 실행 시 자동으로 암호화한 경험을 정리한 글"
tags: ["Java", "Spring Boot", "암호화"]
---

과거 프로그램을 개발하면서 설정 파일(yml)의 민감한 정보들을 암호화했던 경험이 있었다. 오늘은 그에 대한 글을 정리해 보려한다.

배포 구조 특성상 \`application.yml\` 설정 파일이 설치 디렉토리에 그대로 노출되는데, 그 안에 **DB 접속 정보(URL, 계정, 비밀번호)** 등 민감한 값들이 평문으로 작성되어 있는 상태였다.

\`\`\`yaml
spring:
  datasource:
    jdbc-url: jdbc:mysql://192.168.0.1:3306/agentdb
    username: admin
    password: supersecret123
\`\`\`

담당자가 서버에 접근할 수 있는 환경이라면, 설정 파일만 열어봐도 DB 접속 정보를 그대로 확인할 수 있는 상황이었다.

---

## 원인 분석

**설정 파일 평문 유지 관행**

Spring Boot 기본 구성에서는 \`application.yml\`에 값을 평문으로 적는 게 일반적이다. 별도의 암호화 처리를 하지 않으면 민감 정보가 그대로 노출된다.

> 완벽한 보안 솔루션은 아니지만, **"읽히면 안 되는 값이 평문으로 보이는 것"** 자체를 막는 게 목표였다.

---

## 해결

### 접근 방향

Jasypt(Java Simplified Encryption) 라이브러리를 활용해, **앱이 최초 실행될 때 설정 파일의 민감 값을 자동으로 암호화**하도록 구현했다.

암호화된 값은 Spring Boot + Jasypt 통합을 통해 앱 실행 중에 자동으로 복호화되어 사용된다.

| 항목            | 내용                                                 |
| --------------- | ---------------------------------------------------- |
| 라이브러리      | \`jasypt-spring-boot-starter\`                         |
| 암호화 알고리즘 | PBEWithMD5AndDES (StandardPBEStringEncryptor 기본값) |
| 실행 시점       | \`ContextRefreshedEvent\` (앱 컨텍스트 초기화 완료 후) |
| 암호화 대상     | DB URL, 계정, 비밀번호 등 민감 필드                  |

### 의존성 추가

\`\`\`xml
<!-- pom.xml -->
<dependency>
    <groupId>com.github.ulisesbocchio</groupId>
    <artifactId>jasypt-spring-boot-starter</artifactId>
    <version>3.0.3</version>
</dependency>
\`\`\`

### PropertyEncryptor 구현

앱 컨텍스트가 완전히 초기화된 후 \`ContextRefreshedEvent\`를 수신해 설정 파일을 읽고, 평문 상태인 민감 필드를 찾아 암호화한 뒤 파일에 다시 쓴다.

\`\`\`java
@Slf4j
@Component
public class PropertyEncryptor implements ApplicationListener<ContextRefreshedEvent> {

    // 암호화 대상 필드 목록 - 암호화 할 설정 들의 Key를 적는다
    private final String[] encryptFields = {
        "jdbc-url:", "username:", "password:",
        "schemaName:"
    };

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        String encryptKey = "enter your encryptKey";
        try {
            if (encryptKey != null && !encryptKey.isEmpty()) {
                String propertyFilePath = "../config/application.yml";
                Path path = Paths.get(propertyFilePath);
                List<String> lines = Files.readAllLines(path);

                StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
                encryptor.setPassword(encryptKey.trim()); // 암호화 키 설정

                List<String> encryptedLines = lines.stream().map(line -> {
                    // 주석 라인은 건너뜀
                    if (line.trim().startsWith("#")) {
                        return line;
                    }
                    // 암호화 대상 필드 탐색
                    for (String encryptField : encryptFields) {
                        if (line.contains(encryptField) && !line.contains("ENC(")) {
                            String[] parts = line.split(":", 2);
                            String key = parts[0];
                            String value = parts[1].trim().replace("\\"", "");
                            // ENC(...) 형식으로 암호화 값 대체
                            return key + ": ENC(" + encryptor.encrypt(value) + ")";
                        }
                    }
                    return line;
                }).collect(Collectors.toList());

                Files.write(path, encryptedLines); // 암호화된 내용으로 파일 덮어쓰기
            }
        } catch (Exception e) {
            log.error("Error occurred while Encrypt YML file... : ", e);
        }
    }
}
\`\`\`

### 실행 흐름

\`\`\`
앱 시작
  └── Spring Context 초기화
        └── ContextRefreshedEvent 발생
              └── PropertyEncryptor.onApplicationEvent()
                    ├── application.yml 읽기
                    ├── 암호화 대상 필드 탐색 (ENC() 없는 평문만)
                    ├── Jasypt로 암호화 → ENC(...) 형식으로 치환
                    └── application.yml 덮어쓰기
\`\`\`

### 암호화 전후 비교

\`\`\`yaml
# 암호화 전
spring:
  datasource:
    jdbc-url: jdbc:mysql://192.168.0.1:3306/agentdb
    username: admin
    password: supersecret123
\`\`\`

\`\`\`yaml
# 암호화 후
spring:
  datasource:
    jdbc-url: ENC(Xk92mNpQr7vLsT1oWcYeAb3dFgHjKlMn...)
    username: ENC(Tz8yVwBqDmEiJuNo...)
    password: ENC(Rc5aLpFkGhIsXvYz...)
\`\`\`

> **\`ENC(...)\` 형식**은 Jasypt Spring Boot Starter가 자동으로 인식해 복호화한다. 앱 실행 중에는 평문처럼 사용할 수 있다.

### 중복 암호화 방지

이미 암호화된 값은 \`ENC(\`가 포함되어 있으므로, 조건 체크로 재암호화를 방지했다.

\`\`\`java
if (line.contains(encryptField) && !line.contains("ENC(")) {
    // 평문인 경우에만 암호화 수행
}
\`\`\`

앱을 재시작해도 이미 암호화된 값은 그대로 유지된다.

---

## 복호화

암호화된 상태로 파일이 남아있으면 **운영자가 직접 설정을 수정해야 할 때 불편함**이 생긴다. 이를 위해 앱 종료 전 설정 파일을 다시 평문으로 되돌리는 유틸리티를 별도로 만들었다.

나 같은 경우는 쉘 스크립트 혹은 배치 파일을 실행하면 해당 클래스가 실행되어 복호화 하도록 개발하였다.

### SecurityDecryptFile 구현

\`\`\`java
public class SecurityDecryptFile {
    private final String[] encryptFields = {
        "jdbc-url:", "username:", "password:",
        "schemaName:"
    };
    private final String PROPERTY_FILE_PATH = "../config/application.yml";

    public SecurityDecryptFile() {
        System.out.println("decrypt configuration file start!!!");

        try (InputStream inputStream = new FileInputStream(PROPERTY_FILE_PATH)) {
            String decryptKey = "enter your encryptKey";

            if (decryptKey != null && !decryptKey.isEmpty()) {
                Path path = Paths.get(PROPERTY_FILE_PATH);
                List<String> lines = Files.readAllLines(path);

                StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
                encryptor.setPassword(decryptKey.trim());

                List<String> decryptedLines = lines.stream().map(line -> {
                    if (line.trim().startsWith("#")) {
                        return line;
                    }
                    for (String encryptField : encryptFields) {
                        // ENC(...)가 있는 경우에만 복호화
                        if (line.contains(encryptField) && line.contains("ENC(")) {
                            String[] parts = line.split(":", 2);
                            String key = parts[0];
                            // "ENC(" 4글자와 마지막 ")" 1글자 제거
                            String value = parts[1].trim().substring(4, parts[1].trim().length() - 1);
                            return key + ": \\"" + encryptor.decrypt(value) + "\\"";
                        }
                    }
                    return line;
                }).collect(Collectors.toList());

                Files.write(path, decryptedLines);
            }
            System.out.println("finished file decrypt!!!");
        } catch (IOException e) {
            System.out.println("Error occurred while decrypt Configuration file... : " + e);
        } catch (Exception e) {
            System.out.println("Error occurred while Encrypt YML file... : " + e);
        }
    }

    public static void main(String[] args) {
        new SecurityDecryptFile();
    }
}
\`\`\`

### PropertyEncryptor와의 차이점

| 항목      | PropertyEncryptor                  | SecurityDecryptFile      |
| --------- | ---------------------------------- | ------------------------ |
| 역할      | 평문 → 암호화                      | 암호화 → 평문            |
| 실행 시점 | 앱 기동 시 (ContextRefreshedEvent) | 해당 클래스 호출 시 실행 |
| 대상 조건 | \`ENC(\` 없는 라인                   | \`ENC(\` 있는 라인         |
| 실행 방법 | 자동 (Spring 이벤트)               | 수동 (\`main\` 직접 실행)  |

### 호출 방법

\`main\` 메서드가 있으므로 독립 실행이 가능하다. 앱 종료 스크립트에 아래처럼 추가하면 된다.

\`\`\`bash

java -Dfile.encoding=UTF-8 -Dmain.class.name=kr.standard.ums.util.SecurityDecryptFile -jar application.jar
\`\`\`

### 전체 흐름 정리

\`\`\`
[앱 기동]
  └── ContextRefreshedEvent
        └── PropertyEncryptor: 평문 → ENC(...) 암호화

[앱 운영 중]
  └── Jasypt가 ENC(...) 자동 복호화하여 정상 동작

[앱 종료 전]
  └── SecurityDecryptFile.main(): ENC(...) → 평문 복호화
        └── 운영자가 설정 파일 직접 수정 가능한 상태로 원복
\`\`\`

---

## 결론

이 방식의 핵심 목적은 **평문 노출 차단**이다. 암호화 키 보관 방식에 따라 보안 수준이 달라지는 완벽한 보안 솔루션은 아니지만, 파일을 열었을 때 DB 접속 정보가 바로 보이는 상황은 확실히 개선된다.

### 이 방식의 한계

- 별도로 암호화에 사용되는 Key가 추가로 필요하다. (규정에 따라 관리 방식이 나뉨)
- 앱 실행 권한이 있는 사람은 런타임에서 복호화된 값에 접근 가능

### 그럼에도 유효한 이유

- 설정 파일을 열어봤을 때 민감 정보가 즉시 노출되지 않음
- 비기술 인력의 단순 열람에 의한 정보 유출 방지
- 파일 복사/유출 시 단독으로는 값을 해석하기 어려움

일단 민감 정보 평문 노출을 방지하기 위한 목적은 이로서 달성하였다.

만약 내부적으로 설정 파일을 암호화 하여 관리하는 것이었다면 암호화 키 관리 방식 등을 강화하여 더욱 높은 보안 수준을 유지할 수 있었겠지만, 나의 경우 고객사 배포 프로그램이란 한계가 있었다.
`;function _c(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var sa=_c();function Up(u){sa=u}var Pl={exec:()=>null};function de(u,r=""){let s=typeof u=="string"?u:u.source,c={replace:(f,h)=>{let m=typeof h=="string"?h:h.source;return m=m.replace(We.caret,"$1"),s=s.replace(f,m),c},getRegex:()=>new RegExp(s,r)};return c}var Cv=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),We={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i")},Av=/^(?:[ \t]*(?:\n|$))+/,_v=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Rv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ti=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Mv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Rc=/(?:[*+-]|\d{1,9}[.)])/,Hp=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Bp=de(Hp).replace(/bull/g,Rc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Nv=de(Hp).replace(/bull/g,Rc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Mc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ov=/^[^\n]+/,Nc=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Dv=de(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Nc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wv=de(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Rc).getRegex(),ku="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Oc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,kv=de("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Oc).replace("tag",ku).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),qp=de(Mc).replace("hr",ti).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex(),zv=de(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",qp).getRegex(),Dc={blockquote:zv,code:_v,def:Dv,fences:Rv,heading:Mv,hr:ti,html:kv,lheading:Bp,list:wv,newline:Av,paragraph:qp,table:Pl,text:Ov},rp=de("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ti).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex(),jv={...Dc,lheading:Nv,table:rp,paragraph:de(Mc).replace("hr",ti).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",rp).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex()},Lv={...Dc,html:de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Oc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pl,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:de(Mc).replace("hr",ti).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Bp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Gv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Uv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Qp=/^( {2,}|\\)\n(?!\s*$)/,Hv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,zu=/[\p{P}\p{S}]/u,wc=/[\s\p{P}\p{S}]/u,Yp=/[^\s\p{P}\p{S}]/u,Bv=de(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,wc).getRegex(),Vp=/(?!~)[\p{P}\p{S}]/u,qv=/(?!~)[\s\p{P}\p{S}]/u,Qv=/(?:[^\s\p{P}\p{S}]|~)/u,Yv=de(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Cv?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Xp=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Vv=de(Xp,"u").replace(/punct/g,zu).getRegex(),Xv=de(Xp,"u").replace(/punct/g,Vp).getRegex(),Zp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Zv=de(Zp,"gu").replace(/notPunctSpace/g,Yp).replace(/punctSpace/g,wc).replace(/punct/g,zu).getRegex(),Jv=de(Zp,"gu").replace(/notPunctSpace/g,Qv).replace(/punctSpace/g,qv).replace(/punct/g,Vp).getRegex(),Kv=de("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Yp).replace(/punctSpace/g,wc).replace(/punct/g,zu).getRegex(),$v=de(/\\(punct)/,"gu").replace(/punct/g,zu).getRegex(),Iv=de(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Pv=de(Oc).replace("(?:-->|$)","-->").getRegex(),Fv=de("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Pv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Mu=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Wv=de(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Mu).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Jp=de(/^!?\[(label)\]\[(ref)\]/).replace("label",Mu).replace("ref",Nc).getRegex(),Kp=de(/^!?\[(ref)\](?:\[\])?/).replace("ref",Nc).getRegex(),e1=de("reflink|nolink(?!\\()","g").replace("reflink",Jp).replace("nolink",Kp).getRegex(),sp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,kc={_backpedal:Pl,anyPunctuation:$v,autolink:Iv,blockSkip:Yv,br:Qp,code:Uv,del:Pl,emStrongLDelim:Vv,emStrongRDelimAst:Zv,emStrongRDelimUnd:Kv,escape:Gv,link:Wv,nolink:Kp,punctuation:Bv,reflink:Jp,reflinkSearch:e1,tag:Fv,text:Hv,url:Pl},t1={...kc,link:de(/^!?\[(label)\]\((.*?)\)/).replace("label",Mu).getRegex(),reflink:de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mu).getRegex()},mc={...kc,emStrongRDelimAst:Jv,emStrongLDelim:Xv,url:de(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",sp).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:de(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",sp).getRegex()},n1={...mc,br:de(Qp).replace("{2,}","*").getRegex(),text:de(mc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Su={normal:Dc,gfm:jv,pedantic:Lv},Jl={normal:kc,gfm:mc,breaks:n1,pedantic:t1},a1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cp=u=>a1[u];function fn(u,r){if(r){if(We.escapeTest.test(u))return u.replace(We.escapeReplace,cp)}else if(We.escapeTestNoEncode.test(u))return u.replace(We.escapeReplaceNoEncode,cp);return u}function op(u){try{u=encodeURI(u).replace(We.percentDecode,"%")}catch{return null}return u}function fp(u,r){var h;let s=u.replace(We.findPipe,(m,g,b)=>{let p=!1,S=g;for(;--S>=0&&b[S]==="\\";)p=!p;return p?"|":" |"}),c=s.split(We.splitPipe),f=0;if(c[0].trim()||c.shift(),c.length>0&&!((h=c.at(-1))!=null&&h.trim())&&c.pop(),r)if(c.length>r)c.splice(r);else for(;c.length<r;)c.push("");for(;f<c.length;f++)c[f]=c[f].trim().replace(We.slashPipe,"|");return c}function Kl(u,r,s){let c=u.length;if(c===0)return"";let f=0;for(;f<c&&u.charAt(c-f-1)===r;)f++;return u.slice(0,c-f)}function l1(u,r){if(u.indexOf(r[1])===-1)return-1;let s=0;for(let c=0;c<u.length;c++)if(u[c]==="\\")c++;else if(u[c]===r[0])s++;else if(u[c]===r[1]&&(s--,s<0))return c;return s>0?-2:-1}function hp(u,r,s,c,f){let h=r.href,m=r.title||null,g=u[1].replace(f.other.outputLinkReplace,"$1");c.state.inLink=!0;let b={type:u[0].charAt(0)==="!"?"image":"link",raw:s,href:h,title:m,text:g,tokens:c.inlineTokens(g)};return c.state.inLink=!1,b}function i1(u,r,s){let c=u.match(s.other.indentCodeCompensation);if(c===null)return r;let f=c[1];return r.split(`
`).map(h=>{let m=h.match(s.other.beginningSpace);if(m===null)return h;let[g]=m;return g.length>=f.length?h.slice(f.length):h}).join(`
`)}var Nu=class{constructor(u){Te(this,"options");Te(this,"rules");Te(this,"lexer");this.options=u||sa}space(u){let r=this.rules.block.newline.exec(u);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(u){let r=this.rules.block.code.exec(u);if(r){let s=r[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Kl(s,`
`)}}}fences(u){let r=this.rules.block.fences.exec(u);if(r){let s=r[0],c=i1(s,r[3]||"",this.rules);return{type:"code",raw:s,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:c}}}heading(u){let r=this.rules.block.heading.exec(u);if(r){let s=r[2].trim();if(this.rules.other.endingHash.test(s)){let c=Kl(s,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(s=c.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(u){let r=this.rules.block.hr.exec(u);if(r)return{type:"hr",raw:Kl(r[0],`
`)}}blockquote(u){let r=this.rules.block.blockquote.exec(u);if(r){let s=Kl(r[0],`
`).split(`
`),c="",f="",h=[];for(;s.length>0;){let m=!1,g=[],b;for(b=0;b<s.length;b++)if(this.rules.other.blockquoteStart.test(s[b]))g.push(s[b]),m=!0;else if(!m)g.push(s[b]);else break;s=s.slice(b);let p=g.join(`
`),S=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${p}`:p,f=f?`${f}
${S}`:S;let T=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,h,!0),this.lexer.state.top=T,s.length===0)break;let D=h.at(-1);if((D==null?void 0:D.type)==="code")break;if((D==null?void 0:D.type)==="blockquote"){let O=D,B=O.raw+`
`+s.join(`
`),U=this.blockquote(B);h[h.length-1]=U,c=c.substring(0,c.length-O.raw.length)+U.raw,f=f.substring(0,f.length-O.text.length)+U.text;break}else if((D==null?void 0:D.type)==="list"){let O=D,B=O.raw+`
`+s.join(`
`),U=this.list(B);h[h.length-1]=U,c=c.substring(0,c.length-D.raw.length)+U.raw,f=f.substring(0,f.length-O.raw.length)+U.raw,s=B.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:h,text:f}}}list(u){var s,c;let r=this.rules.block.list.exec(u);if(r){let f=r[1].trim(),h=f.length>1,m={type:"list",raw:"",ordered:h,start:h?+f.slice(0,-1):"",loose:!1,items:[]};f=h?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=h?f:"[*+-]");let g=this.rules.other.listItemRegex(f),b=!1;for(;u;){let S=!1,T="",D="";if(!(r=g.exec(u))||this.rules.block.hr.test(u))break;T=r[0],u=u.substring(T.length);let O=r[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,V=>" ".repeat(3*V.length)),B=u.split(`
`,1)[0],U=!O.trim(),H=0;if(this.options.pedantic?(H=2,D=O.trimStart()):U?H=r[1].length+1:(H=r[2].search(this.rules.other.nonSpaceChar),H=H>4?1:H,D=O.slice(H),H+=r[1].length),U&&this.rules.other.blankLine.test(B)&&(T+=B+`
`,u=u.substring(B.length+1),S=!0),!S){let V=this.rules.other.nextBulletRegex(H),K=this.rules.other.hrRegex(H),L=this.rules.other.fencesBeginRegex(H),F=this.rules.other.headingBeginRegex(H),ee=this.rules.other.htmlBeginRegex(H);for(;u;){let re=u.split(`
`,1)[0],I;if(B=re,this.options.pedantic?(B=B.replace(this.rules.other.listReplaceNesting,"  "),I=B):I=B.replace(this.rules.other.tabCharGlobal,"    "),L.test(B)||F.test(B)||ee.test(B)||V.test(B)||K.test(B))break;if(I.search(this.rules.other.nonSpaceChar)>=H||!B.trim())D+=`
`+I.slice(H);else{if(U||O.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(O)||F.test(O)||K.test(O))break;D+=`
`+B}!U&&!B.trim()&&(U=!0),T+=re+`
`,u=u.substring(re.length+1),O=I.slice(H)}}m.loose||(b?m.loose=!0:this.rules.other.doubleBlankLine.test(T)&&(b=!0)),m.items.push({type:"list_item",raw:T,task:!!this.options.gfm&&this.rules.other.listIsTask.test(D),loose:!1,text:D,tokens:[]}),m.raw+=T}let p=m.items.at(-1);if(p)p.raw=p.raw.trimEnd(),p.text=p.text.trimEnd();else return;m.raw=m.raw.trimEnd();for(let S of m.items){if(this.lexer.state.top=!1,S.tokens=this.lexer.blockTokens(S.text,[]),S.task){if(S.text=S.text.replace(this.rules.other.listReplaceTask,""),((s=S.tokens[0])==null?void 0:s.type)==="text"||((c=S.tokens[0])==null?void 0:c.type)==="paragraph"){S.tokens[0].raw=S.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),S.tokens[0].text=S.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let D=this.lexer.inlineQueue.length-1;D>=0;D--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[D].src)){this.lexer.inlineQueue[D].src=this.lexer.inlineQueue[D].src.replace(this.rules.other.listReplaceTask,"");break}}let T=this.rules.other.listTaskCheckbox.exec(S.raw);if(T){let D={type:"checkbox",raw:T[0]+" ",checked:T[0]!=="[ ]"};S.checked=D.checked,m.loose?S.tokens[0]&&["paragraph","text"].includes(S.tokens[0].type)&&"tokens"in S.tokens[0]&&S.tokens[0].tokens?(S.tokens[0].raw=D.raw+S.tokens[0].raw,S.tokens[0].text=D.raw+S.tokens[0].text,S.tokens[0].tokens.unshift(D)):S.tokens.unshift({type:"paragraph",raw:D.raw,text:D.raw,tokens:[D]}):S.tokens.unshift(D)}}if(!m.loose){let T=S.tokens.filter(O=>O.type==="space"),D=T.length>0&&T.some(O=>this.rules.other.anyLine.test(O.raw));m.loose=D}}if(m.loose)for(let S of m.items){S.loose=!0;for(let T of S.tokens)T.type==="text"&&(T.type="paragraph")}return m}}html(u){let r=this.rules.block.html.exec(u);if(r)return{type:"html",block:!0,raw:r[0],pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:r[0]}}def(u){let r=this.rules.block.def.exec(u);if(r){let s=r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",f=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:s,raw:r[0],href:c,title:f}}}table(u){var m;let r=this.rules.block.table.exec(u);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;let s=fp(r[1]),c=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),f=(m=r[3])!=null&&m.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:r[0],header:[],align:[],rows:[]};if(s.length===c.length){for(let g of c)this.rules.other.tableAlignRight.test(g)?h.align.push("right"):this.rules.other.tableAlignCenter.test(g)?h.align.push("center"):this.rules.other.tableAlignLeft.test(g)?h.align.push("left"):h.align.push(null);for(let g=0;g<s.length;g++)h.header.push({text:s[g],tokens:this.lexer.inline(s[g]),header:!0,align:h.align[g]});for(let g of f)h.rows.push(fp(g,h.header.length).map((b,p)=>({text:b,tokens:this.lexer.inline(b),header:!1,align:h.align[p]})));return h}}lheading(u){let r=this.rules.block.lheading.exec(u);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(u){let r=this.rules.block.paragraph.exec(u);if(r){let s=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:s,tokens:this.lexer.inline(s)}}}text(u){let r=this.rules.block.text.exec(u);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(u){let r=this.rules.inline.escape.exec(u);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(u){let r=this.rules.inline.tag.exec(u);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(u){let r=this.rules.inline.link.exec(u);if(r){let s=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let h=Kl(s.slice(0,-1),"\\");if((s.length-h.length)%2===0)return}else{let h=l1(r[2],"()");if(h===-2)return;if(h>-1){let m=(r[0].indexOf("!")===0?5:4)+r[1].length+h;r[2]=r[2].substring(0,h),r[0]=r[0].substring(0,m).trim(),r[3]=""}}let c=r[2],f="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(c);h&&(c=h[1],f=h[3])}else f=r[3]?r[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?c=c.slice(1):c=c.slice(1,-1)),hp(r,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:f&&f.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(u,r){let s;if((s=this.rules.inline.reflink.exec(u))||(s=this.rules.inline.nolink.exec(u))){let c=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),f=r[c.toLowerCase()];if(!f){let h=s[0].charAt(0);return{type:"text",raw:h,text:h}}return hp(s,f,s[0],this.lexer,this.rules)}}emStrong(u,r,s=""){let c=this.rules.inline.emStrongLDelim.exec(u);if(!(!c||c[3]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(c[1]||c[2])||!s||this.rules.inline.punctuation.exec(s))){let f=[...c[0]].length-1,h,m,g=f,b=0,p=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,r=r.slice(-1*u.length+f);(c=p.exec(r))!=null;){if(h=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!h)continue;if(m=[...h].length,c[3]||c[4]){g+=m;continue}else if((c[5]||c[6])&&f%3&&!((f+m)%3)){b+=m;continue}if(g-=m,g>0)continue;m=Math.min(m,m+g+b);let S=[...c[0]][0].length,T=u.slice(0,f+c.index+S+m);if(Math.min(f,m)%2){let O=T.slice(1,-1);return{type:"em",raw:T,text:O,tokens:this.lexer.inlineTokens(O)}}let D=T.slice(2,-2);return{type:"strong",raw:T,text:D,tokens:this.lexer.inlineTokens(D)}}}}codespan(u){let r=this.rules.inline.code.exec(u);if(r){let s=r[2].replace(this.rules.other.newLineCharGlobal," "),c=this.rules.other.nonSpaceChar.test(s),f=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return c&&f&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:r[0],text:s}}}br(u){let r=this.rules.inline.br.exec(u);if(r)return{type:"br",raw:r[0]}}del(u){let r=this.rules.inline.del.exec(u);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(u){let r=this.rules.inline.autolink.exec(u);if(r){let s,c;return r[2]==="@"?(s=r[1],c="mailto:"+s):(s=r[1],c=s),{type:"link",raw:r[0],text:s,href:c,tokens:[{type:"text",raw:s,text:s}]}}}url(u){var s;let r;if(r=this.rules.inline.url.exec(u)){let c,f;if(r[2]==="@")c=r[0],f="mailto:"+c;else{let h;do h=r[0],r[0]=((s=this.rules.inline._backpedal.exec(r[0]))==null?void 0:s[0])??"";while(h!==r[0]);c=r[0],r[1]==="www."?f="http://"+r[0]:f=r[0]}return{type:"link",raw:r[0],text:c,href:f,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(u){let r=this.rules.inline.text.exec(u);if(r){let s=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:s}}}},jt=class gc{constructor(r){Te(this,"tokens");Te(this,"options");Te(this,"state");Te(this,"inlineQueue");Te(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=r||sa,this.options.tokenizer=this.options.tokenizer||new Nu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:We,block:Su.normal,inline:Jl.normal};this.options.pedantic?(s.block=Su.pedantic,s.inline=Jl.pedantic):this.options.gfm&&(s.block=Su.gfm,this.options.breaks?s.inline=Jl.breaks:s.inline=Jl.gfm),this.tokenizer.rules=s}static get rules(){return{block:Su,inline:Jl}}static lex(r,s){return new gc(s).lex(r)}static lexInline(r,s){return new gc(s).inlineTokens(r)}lex(r){r=r.replace(We.carriageReturn,`
`),this.blockTokens(r,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let c=this.inlineQueue[s];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(r,s=[],c=!1){var f,h,m;for(this.options.pedantic&&(r=r.replace(We.tabCharGlobal,"    ").replace(We.spaceLine,""));r;){let g;if((h=(f=this.options.extensions)==null?void 0:f.block)!=null&&h.some(p=>(g=p.call({lexer:this},r,s))?(r=r.substring(g.raw.length),s.push(g),!0):!1))continue;if(g=this.tokenizer.space(r)){r=r.substring(g.raw.length);let p=s.at(-1);g.raw.length===1&&p!==void 0?p.raw+=`
`:s.push(g);continue}if(g=this.tokenizer.code(r)){r=r.substring(g.raw.length);let p=s.at(-1);(p==null?void 0:p.type)==="paragraph"||(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+g.raw,p.text+=`
`+g.text,this.inlineQueue.at(-1).src=p.text):s.push(g);continue}if(g=this.tokenizer.fences(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.heading(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.hr(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.blockquote(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.list(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.html(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.def(r)){r=r.substring(g.raw.length);let p=s.at(-1);(p==null?void 0:p.type)==="paragraph"||(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+g.raw,p.text+=`
`+g.raw,this.inlineQueue.at(-1).src=p.text):this.tokens.links[g.tag]||(this.tokens.links[g.tag]={href:g.href,title:g.title},s.push(g));continue}if(g=this.tokenizer.table(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.lheading(r)){r=r.substring(g.raw.length),s.push(g);continue}let b=r;if((m=this.options.extensions)!=null&&m.startBlock){let p=1/0,S=r.slice(1),T;this.options.extensions.startBlock.forEach(D=>{T=D.call({lexer:this},S),typeof T=="number"&&T>=0&&(p=Math.min(p,T))}),p<1/0&&p>=0&&(b=r.substring(0,p+1))}if(this.state.top&&(g=this.tokenizer.paragraph(b))){let p=s.at(-1);c&&(p==null?void 0:p.type)==="paragraph"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+g.raw,p.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):s.push(g),c=b.length!==r.length,r=r.substring(g.raw.length);continue}if(g=this.tokenizer.text(r)){r=r.substring(g.raw.length);let p=s.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+g.raw,p.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):s.push(g);continue}if(r){let p="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,s}inline(r,s=[]){return this.inlineQueue.push({src:r,tokens:s}),s}inlineTokens(r,s=[]){var b,p,S,T,D;let c=r,f=null;if(this.tokens.links){let O=Object.keys(this.tokens.links);if(O.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)O.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,f.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let h;for(;(f=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)h=f[2]?f[2].length:0,c=c.slice(0,f.index+h)+"["+"a".repeat(f[0].length-h-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);c=((p=(b=this.options.hooks)==null?void 0:b.emStrongMask)==null?void 0:p.call({lexer:this},c))??c;let m=!1,g="";for(;r;){m||(g=""),m=!1;let O;if((T=(S=this.options.extensions)==null?void 0:S.inline)!=null&&T.some(U=>(O=U.call({lexer:this},r,s))?(r=r.substring(O.raw.length),s.push(O),!0):!1))continue;if(O=this.tokenizer.escape(r)){r=r.substring(O.raw.length),s.push(O);continue}if(O=this.tokenizer.tag(r)){r=r.substring(O.raw.length),s.push(O);continue}if(O=this.tokenizer.link(r)){r=r.substring(O.raw.length),s.push(O);continue}if(O=this.tokenizer.reflink(r,this.tokens.links)){r=r.substring(O.raw.length);let U=s.at(-1);O.type==="text"&&(U==null?void 0:U.type)==="text"?(U.raw+=O.raw,U.text+=O.text):s.push(O);continue}if(O=this.tokenizer.emStrong(r,c,g)){r=r.substring(O.raw.length),s.push(O);continue}if(O=this.tokenizer.codespan(r)){r=r.substring(O.raw.length),s.push(O);continue}if(O=this.tokenizer.br(r)){r=r.substring(O.raw.length),s.push(O);continue}if(O=this.tokenizer.del(r)){r=r.substring(O.raw.length),s.push(O);continue}if(O=this.tokenizer.autolink(r)){r=r.substring(O.raw.length),s.push(O);continue}if(!this.state.inLink&&(O=this.tokenizer.url(r))){r=r.substring(O.raw.length),s.push(O);continue}let B=r;if((D=this.options.extensions)!=null&&D.startInline){let U=1/0,H=r.slice(1),V;this.options.extensions.startInline.forEach(K=>{V=K.call({lexer:this},H),typeof V=="number"&&V>=0&&(U=Math.min(U,V))}),U<1/0&&U>=0&&(B=r.substring(0,U+1))}if(O=this.tokenizer.inlineText(B)){r=r.substring(O.raw.length),O.raw.slice(-1)!=="_"&&(g=O.raw.slice(-1)),m=!0;let U=s.at(-1);(U==null?void 0:U.type)==="text"?(U.raw+=O.raw,U.text+=O.text):s.push(O);continue}if(r){let U="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(U);break}else throw new Error(U)}}return s}},Ou=class{constructor(u){Te(this,"options");Te(this,"parser");this.options=u||sa}space(u){return""}code({text:u,lang:r,escaped:s}){var h;let c=(h=(r||"").match(We.notSpaceStart))==null?void 0:h[0],f=u.replace(We.endingNewline,"")+`
`;return c?'<pre><code class="language-'+fn(c)+'">'+(s?f:fn(f,!0))+`</code></pre>
`:"<pre><code>"+(s?f:fn(f,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}def(u){return""}heading({tokens:u,depth:r}){return`<h${r}>${this.parser.parseInline(u)}</h${r}>
`}hr(u){return`<hr>
`}list(u){let r=u.ordered,s=u.start,c="";for(let m=0;m<u.items.length;m++){let g=u.items[m];c+=this.listitem(g)}let f=r?"ol":"ul",h=r&&s!==1?' start="'+s+'"':"";return"<"+f+h+`>
`+c+"</"+f+`>
`}listitem(u){return`<li>${this.parser.parse(u.tokens)}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let r="",s="";for(let f=0;f<u.header.length;f++)s+=this.tablecell(u.header[f]);r+=this.tablerow({text:s});let c="";for(let f=0;f<u.rows.length;f++){let h=u.rows[f];s="";for(let m=0;m<h.length;m++)s+=this.tablecell(h[m]);c+=this.tablerow({text:s})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+c+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){let r=this.parser.parseInline(u.tokens),s=u.header?"th":"td";return(u.align?`<${s} align="${u.align}">`:`<${s}>`)+r+`</${s}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${fn(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:r,tokens:s}){let c=this.parser.parseInline(s),f=op(u);if(f===null)return c;u=f;let h='<a href="'+u+'"';return r&&(h+=' title="'+fn(r)+'"'),h+=">"+c+"</a>",h}image({href:u,title:r,text:s,tokens:c}){c&&(s=this.parser.parseInline(c,this.parser.textRenderer));let f=op(u);if(f===null)return fn(s);u=f;let h=`<img src="${u}" alt="${s}"`;return r&&(h+=` title="${fn(r)}"`),h+=">",h}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:fn(u.text)}},zc=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}checkbox({raw:u}){return u}},Lt=class yc{constructor(r){Te(this,"options");Te(this,"renderer");Te(this,"textRenderer");this.options=r||sa,this.options.renderer=this.options.renderer||new Ou,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new zc}static parse(r,s){return new yc(s).parse(r)}static parseInline(r,s){return new yc(s).parseInline(r)}parse(r){var c,f;let s="";for(let h=0;h<r.length;h++){let m=r[h];if((f=(c=this.options.extensions)==null?void 0:c.renderers)!=null&&f[m.type]){let b=m,p=this.options.extensions.renderers[b.type].call({parser:this},b);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(b.type)){s+=p||"";continue}}let g=m;switch(g.type){case"space":{s+=this.renderer.space(g);break}case"hr":{s+=this.renderer.hr(g);break}case"heading":{s+=this.renderer.heading(g);break}case"code":{s+=this.renderer.code(g);break}case"table":{s+=this.renderer.table(g);break}case"blockquote":{s+=this.renderer.blockquote(g);break}case"list":{s+=this.renderer.list(g);break}case"checkbox":{s+=this.renderer.checkbox(g);break}case"html":{s+=this.renderer.html(g);break}case"def":{s+=this.renderer.def(g);break}case"paragraph":{s+=this.renderer.paragraph(g);break}case"text":{s+=this.renderer.text(g);break}default:{let b='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(b),"";throw new Error(b)}}}return s}parseInline(r,s=this.renderer){var f,h;let c="";for(let m=0;m<r.length;m++){let g=r[m];if((h=(f=this.options.extensions)==null?void 0:f.renderers)!=null&&h[g.type]){let p=this.options.extensions.renderers[g.type].call({parser:this},g);if(p!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(g.type)){c+=p||"";continue}}let b=g;switch(b.type){case"escape":{c+=s.text(b);break}case"html":{c+=s.html(b);break}case"link":{c+=s.link(b);break}case"image":{c+=s.image(b);break}case"checkbox":{c+=s.checkbox(b);break}case"strong":{c+=s.strong(b);break}case"em":{c+=s.em(b);break}case"codespan":{c+=s.codespan(b);break}case"br":{c+=s.br(b);break}case"del":{c+=s.del(b);break}case"text":{c+=s.text(b);break}default:{let p='Token with "'+b.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return c}},Eu,Il=(Eu=class{constructor(u){Te(this,"options");Te(this,"block");this.options=u||sa}preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}emStrongMask(u){return u}provideLexer(){return this.block?jt.lex:jt.lexInline}provideParser(){return this.block?Lt.parse:Lt.parseInline}},Te(Eu,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Te(Eu,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Eu),u1=class{constructor(...u){Te(this,"defaults",_c());Te(this,"options",this.setOptions);Te(this,"parse",this.parseMarkdown(!0));Te(this,"parseInline",this.parseMarkdown(!1));Te(this,"Parser",Lt);Te(this,"Renderer",Ou);Te(this,"TextRenderer",zc);Te(this,"Lexer",jt);Te(this,"Tokenizer",Nu);Te(this,"Hooks",Il);this.use(...u)}walkTokens(u,r){var c,f;let s=[];for(let h of u)switch(s=s.concat(r.call(this,h)),h.type){case"table":{let m=h;for(let g of m.header)s=s.concat(this.walkTokens(g.tokens,r));for(let g of m.rows)for(let b of g)s=s.concat(this.walkTokens(b.tokens,r));break}case"list":{let m=h;s=s.concat(this.walkTokens(m.items,r));break}default:{let m=h;(f=(c=this.defaults.extensions)==null?void 0:c.childTokens)!=null&&f[m.type]?this.defaults.extensions.childTokens[m.type].forEach(g=>{let b=m[g].flat(1/0);s=s.concat(this.walkTokens(b,r))}):m.tokens&&(s=s.concat(this.walkTokens(m.tokens,r)))}}return s}use(...u){let r=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(s=>{let c={...s};if(c.async=this.defaults.async||c.async||!1,s.extensions&&(s.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){let h=r.renderers[f.name];h?r.renderers[f.name]=function(...m){let g=f.renderer.apply(this,m);return g===!1&&(g=h.apply(this,m)),g}:r.renderers[f.name]=f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=r[f.level];h?h.unshift(f.tokenizer):r[f.level]=[f.tokenizer],f.start&&(f.level==="block"?r.startBlock?r.startBlock.push(f.start):r.startBlock=[f.start]:f.level==="inline"&&(r.startInline?r.startInline.push(f.start):r.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(r.childTokens[f.name]=f.childTokens)}),c.extensions=r),s.renderer){let f=this.defaults.renderer||new Ou(this.defaults);for(let h in s.renderer){if(!(h in f))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let m=h,g=s.renderer[m],b=f[m];f[m]=(...p)=>{let S=g.apply(f,p);return S===!1&&(S=b.apply(f,p)),S||""}}c.renderer=f}if(s.tokenizer){let f=this.defaults.tokenizer||new Nu(this.defaults);for(let h in s.tokenizer){if(!(h in f))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let m=h,g=s.tokenizer[m],b=f[m];f[m]=(...p)=>{let S=g.apply(f,p);return S===!1&&(S=b.apply(f,p)),S}}c.tokenizer=f}if(s.hooks){let f=this.defaults.hooks||new Il;for(let h in s.hooks){if(!(h in f))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let m=h,g=s.hooks[m],b=f[m];Il.passThroughHooks.has(h)?f[m]=p=>{if(this.defaults.async&&Il.passThroughHooksRespectAsync.has(h))return(async()=>{let T=await g.call(f,p);return b.call(f,T)})();let S=g.call(f,p);return b.call(f,S)}:f[m]=(...p)=>{if(this.defaults.async)return(async()=>{let T=await g.apply(f,p);return T===!1&&(T=await b.apply(f,p)),T})();let S=g.apply(f,p);return S===!1&&(S=b.apply(f,p)),S}}c.hooks=f}if(s.walkTokens){let f=this.defaults.walkTokens,h=s.walkTokens;c.walkTokens=function(m){let g=[];return g.push(h.call(this,m)),f&&(g=g.concat(f.call(this,m))),g}}this.defaults={...this.defaults,...c}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,r){return jt.lex(u,r??this.defaults)}parser(u,r){return Lt.parse(u,r??this.defaults)}parseMarkdown(u){return(r,s)=>{let c={...s},f={...this.defaults,...c},h=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&c.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(f.hooks&&(f.hooks.options=f,f.hooks.block=u),f.async)return(async()=>{let m=f.hooks?await f.hooks.preprocess(r):r,g=await(f.hooks?await f.hooks.provideLexer():u?jt.lex:jt.lexInline)(m,f),b=f.hooks?await f.hooks.processAllTokens(g):g;f.walkTokens&&await Promise.all(this.walkTokens(b,f.walkTokens));let p=await(f.hooks?await f.hooks.provideParser():u?Lt.parse:Lt.parseInline)(b,f);return f.hooks?await f.hooks.postprocess(p):p})().catch(h);try{f.hooks&&(r=f.hooks.preprocess(r));let m=(f.hooks?f.hooks.provideLexer():u?jt.lex:jt.lexInline)(r,f);f.hooks&&(m=f.hooks.processAllTokens(m)),f.walkTokens&&this.walkTokens(m,f.walkTokens);let g=(f.hooks?f.hooks.provideParser():u?Lt.parse:Lt.parseInline)(m,f);return f.hooks&&(g=f.hooks.postprocess(g)),g}catch(m){return h(m)}}}onError(u,r){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,u){let c="<p>An error occurred:</p><pre>"+fn(s.message+"",!0)+"</pre>";return r?Promise.resolve(c):c}if(r)return Promise.reject(s);throw s}}},ra=new u1;function be(u,r){return ra.parse(u,r)}be.options=be.setOptions=function(u){return ra.setOptions(u),be.defaults=ra.defaults,Up(be.defaults),be};be.getDefaults=_c;be.defaults=sa;be.use=function(...u){return ra.use(...u),be.defaults=ra.defaults,Up(be.defaults),be};be.walkTokens=function(u,r){return ra.walkTokens(u,r)};be.parseInline=ra.parseInline;be.Parser=Lt;be.parser=Lt.parse;be.Renderer=Ou;be.TextRenderer=zc;be.Lexer=jt;be.lexer=jt.lex;be.Tokenizer=Nu;be.Hooks=Il;be.parse=be;be.options;be.setOptions;be.use;be.walkTokens;be.parseInline;Lt.parse;jt.lex;const r1=Object.assign({"/post/2025-10-27-Base64.md":tv,"/post/2025-11-12-JAVA_프로그램이_실행되는_과정.md":nv,"/post/2025-11-19-OOP.md":av,"/post/2025-11-23-Garbage_Collection.md":lv,"/post/2025-12-10-IoC_DI.md":iv,"/post/2025-12-13-observer_pattern.md":uv,"/post/2025-12-20-reactive-programming.md":rv,"/post/2026-01-10-RabbitMq_Clustering.md":sv,"/post/2026-01-14-mirror_queue_vs_quorum_queue.md":cv,"/post/2026-02-05-React로_개발된_Github_Blog_배포_방법.md":ov,"/post/2026-03-04-CHARYEOT_게임_패배_범인찾기_프로젝트.md":fv,"/post/2026-03-05-CHARYEOT_앞으로의_계획.md":hv,"/post/2026-03-06-CHARYEOT_리그_오브_레전드_1_API_Key_발급받기.md":dv,"/post/2026-03-07-CHARYEOT_리그_오브_레전드_2_유저_프로필_불러오기.md":pv,"/post/2026-03-10-charyeot_리그_오브_레전드_3_이미지_불러오기.md":mv,"/post/2026-03-14-CHARYEOT_리그_오브_레전드_4_전적_불러오기.md":gv,"/post/2026-03-19-CHARYEOT_차렷봇_판결_기능_GEMINI_연동.md":yv,"/post/2026-03-26-ChronicleMap_GC_메모리_해제_실패_사건.md":bv,"/post/2026-03-29-Graceful_Shutdown_구현_데이터_유실_방지.md":vv,"/post/2026-03-30-API_Gateway_설정_변경_무중단_적용_Spring_Cloud_Bus_Refresh_Scope.md":xv,"/post/2026-04-08-Eureka_OUT_OF_SERVICE_무중단_재기동.md":Sv,"/post/2026-04-17-Redis_KEYS_VS_SCAN.md":Ev,"/post/2026-04-24-Jasypt로_설정파일_암호화하기.md":Tv});function dp(u){var c;const r=((c=u.split("/").pop())==null?void 0:c.replace(".md",""))||"",s=r.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);return s?{date:s[1],slug:s[2]}:{date:"",slug:r}}function pp(u){return u.replace(/-/g,".")}function s1(u){const r=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,s=u.match(r);if(!s)return{data:{title:"",description:"",date:"",tags:[]},content:u};const[,c,f]=s,h={title:"",description:"",date:"",tags:[]},m=c.split(/\r?\n/);for(const g of m){const b=g.indexOf(":");if(b===-1)continue;const p=g.slice(0,b).trim();let S=g.slice(b+1).trim();if((S.startsWith('"')&&S.endsWith('"')||S.startsWith("'")&&S.endsWith("'"))&&(S=S.slice(1,-1)),p==="title")h.title=S;else if(p==="description")h.description=S;else if(p==="date")h.date=S;else if(p==="tags"){const T=S.match(/\[(.*)\]/);T&&(h.tags=T[1].split(",").map(D=>D.trim().replace(/^["']|["']$/g,"")))}}return{data:h,content:f}}function c1(u,r){const{data:s,content:c}=s1(r),{slug:f}=dp(u),h=be(c),m=s.date?pp(s.date.replace(/"/g,"")):pp(dp(u).date);return{id:f,title:s.title||f,description:s.description||"",date:m,tags:s.tags||[],content:h}}let oc=null;function ju(){if(oc)return oc;const u=[];for(const[r,s]of Object.entries(r1))try{const c=c1(r,s);u.push(c)}catch(c){console.error(`Failed to parse post: ${r}`,c)}return u.sort((r,s)=>{const c=r.date.replace(/\./g,"-");return s.date.replace(/\./g,"-").localeCompare(c)}),oc=u,u}function o1(u){return ju().find(s=>s.id===u)}const f1=()=>{const u=ju().slice(0,4);return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("section",{className:"mb-16",children:[y.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight",children:["BackEnd Developer Hanwhee",y.jsxs("span",{className:"inline-flex flex-col items-center align-bottom",children:[y.jsx("style",{children:`
              @keyframes emoji-shadow {
                0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
                50%       { transform: scaleX(1);   opacity: 0.35; }
              }
            `}),y.jsx("span",{className:"inline-block animate-[bounce_2s_infinite]",children:"😎"}),y.jsx("span",{className:"w-10 h-2 bg-slate-900 rounded-full blur-sm mt-1",style:{animation:"emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite"}})]})]}),y.jsxs("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed",children:[y.jsxs("p",{children:["안녕하세요!"," ",y.jsx("span",{className:"font-bold text-slate-900 bg-mint px-1",children:"백엔드 개발자 김한휘"}),"입니다!"]}),y.jsx("p",{children:"스탠다드네트웍스에서 2년 6개월간 근무하며 대용량 트래픽 환경에서 자라며 MSA 설계부터 개발, 운영까지 경험하며 성장해왔어요."}),y.jsx("p",{children:"서비스 불편한 거 하나씩 고칠 때마다 희열을 느끼는 타입입니다🔥🔥🔥"})]})]}),y.jsxs("section",{className:"mb-20",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[y.jsx("span",{className:"text-2xl",children:"🌱"}),y.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"My Career"})]}),y.jsxs("div",{className:"flex flex-col",children:[pc.map((r,s)=>y.jsxs(Gt,{to:"/Experience",className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${s!==pc.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[y.jsx("div",{className:"mb-2 md:mb-0",children:y.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:r.title.split("(")[0]})}),y.jsxs("div",{className:"flex flex-col md:items-end text-slate-500 text-sm md:text-base",children:[y.jsx("span",{className:"font-medium text-slate-700",children:r.role}),y.jsx("span",{className:"text-xs md:text-sm font-mono mt-1 text-slate-400",children:r.period})]})]},r.id)),y.jsx("div",{className:"flex flex-col md:flex-row md:justify-between md:items-baseline py-5 border-t border-slate-100 px-2 -mx-2 text-slate-400",children:y.jsx("div",{children:y.jsx("h3",{className:"text-lg font-bold",children:"... To Be Continued..."})})})]})]}),u.length>0&&y.jsxs("section",{className:"mb-20",children:[y.jsxs("div",{className:"flex items-center justify-between mb-8",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-2xl",children:"📝"}),y.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"Recent Posts"})]}),y.jsxs(Gt,{to:"/blog",className:"text-sm text-slate-500 hover:text-sky-600 flex items-center gap-1 transition-colors",children:["전체보기 ",y.jsx(cc,{size:14})]})]}),y.jsx("div",{className:"flex flex-col",children:u.map((r,s)=>y.jsxs(Gt,{to:`/blog/${r.id}`,className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${s!==u.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[y.jsxs("div",{className:"mb-2 md:mb-0 flex-1",children:[y.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:r.title}),y.jsx("p",{className:"text-sm text-slate-500 mt-1 line-clamp-1",children:r.description})]}),y.jsx("div",{className:"text-xs font-mono text-slate-400 md:ml-4",children:r.date})]},r.id))})]}),y.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[y.jsxs(Gt,{to:"/skills",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[y.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Skills"," ",y.jsx(cc,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),y.jsx("p",{className:"text-sm text-slate-500",children:"지금까지 써본 기술들과 개발 환경 정리해봤어요 🛠️"})]}),y.jsxs(Gt,{to:"/education",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[y.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Education"," ",y.jsx(cc,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),y.jsx("p",{className:"text-sm text-slate-500",children:"개발자로 성장하기 위해 공부하고 수료한 교육 과정들이에요 📚"})]})]})]})},h1=()=>y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12",children:["Work Experience ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("div",{className:"space-y-16",children:pc.map(u=>y.jsxs("div",{className:"relative border-l-2 border-slate-100 pl-6 md:pl-8 ml-2",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2",children:[y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900",children:u.title}),y.jsx("span",{className:"font-mono text-sm text-slate-400 mt-1 sm:mt-0 whitespace-nowrap",children:u.period})]}),y.jsx("div",{className:"text-lg font-medium text-slate-700 mb-4",children:u.role}),y.jsx("p",{className:"text-slate-600 leading-relaxed mb-6 max-w-2xl",children:u.description}),y.jsx("div",{className:"mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm font-mono text-slate-500",children:u.techStack.map((r,s)=>y.jsxs("span",{className:"bg-slate-50 px-1.5 rounded text-slate-600",children:["#",r]},r))}),y.jsx("ul",{className:"space-y-2 text-slate-600 list-disc list-outside pl-4",children:u.keyAchievements.map((r,s)=>y.jsx("li",{className:"pl-1 marker:text-sky-300",children:r},s))})]},u.id))})]}),d1=()=>y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Skills ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-12",children:"지금까지 사용해본 기술들입니다."}),y.jsx("div",{className:"space-y-12",children:Fb.map(u=>y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-6 bg-sky-50 inline-block px-2 py-0.5 rounded-md",children:u.category}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6",children:u.items.map(r=>y.jsx("div",{className:"flex flex-col",children:y.jsx("div",{className:"flex items-center justify-between mb-1",children:y.jsx("span",{className:"font-bold text-slate-800 text-lg",children:r.name})})},r.name))}),y.jsx("hr",{className:"mt-10 border-slate-100"})]},u.category))})]}),p1=()=>{const u=up.filter(s=>s.category==="Education"),r=up.filter(s=>s.category==="Certification");return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-12",children:["Education & Certs ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-12",children:"제가 해낸 교육과정/자격증 입니다."}),y.jsxs("section",{className:"mb-16",children:[y.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Education"}),y.jsx("div",{className:"space-y-10",children:u.map((s,c)=>y.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8",children:[y.jsx("div",{className:"md:w-32 flex-shrink-0 mb-1 md:mb-0",children:y.jsx("span",{className:"font-mono text-sm text-slate-400",children:s.period})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-slate-900",children:y.jsx("a",{href:s.link,className:"hover:underline",children:s.institution})}),y.jsx("div",{className:"text-slate-700 font-medium mb-3",children:s.degree}),y.jsx("ul",{className:"text-slate-600 text-sm space-y-1 list-disc list-outside pl-4",children:s.details.map((f,h)=>y.jsx("li",{children:f},h))})]})]},c))})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Certifications"}),y.jsx("div",{className:"space-y-6",children:r.map((s,c)=>y.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8 items-start",children:[y.jsx("div",{className:"md:w-32 flex-shrink-0",children:y.jsx("span",{className:"font-mono text-sm text-slate-400",children:s.period})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-bold text-slate-900",children:s.institution}),y.jsx("p",{className:"text-slate-600",children:s.details[0]})]})]},c))})]})]})},fc=5,m1=()=>{const u=ju(),[r,s]=M.useState(1),[c,f]=M.useState(""),[h,m]=M.useState(null),g=M.useMemo(()=>{const L={};return u.forEach(F=>{var ee;(ee=F.tags)==null||ee.forEach(re=>{L[re]=(L[re]||0)+1})}),Object.entries(L).sort((F,ee)=>ee[1]-F[1])},[u]),b=M.useMemo(()=>u.filter(L=>{var re;const F=c.trim()===""||L.title.toLowerCase().includes(c.toLowerCase()),ee=h===null||((re=L.tags)==null?void 0:re.includes(h));return F&&ee}),[u,c,h]),p=Math.ceil(b.length/fc),S=(r-1)*fc,T=b.slice(S,S+fc),D=()=>{s(L=>Math.max(L-1,1)),window.scrollTo({top:0,behavior:"smooth"})},O=()=>{s(L=>Math.min(L+1,p)),window.scrollTo({top:0,behavior:"smooth"})},B=L=>{s(L),window.scrollTo({top:0,behavior:"smooth"})},U=L=>{f(L),s(1)},H=L=>{m(F=>F===L?null:L),s(1)},V=()=>{f(""),m(null),s(1)},K=c.trim()!==""||h!==null;return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Blog ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-8",children:"생각을 정리하고 배운 것을 공유합니다."}),y.jsxs("div",{className:"relative mb-4",children:[y.jsx(np,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),y.jsx("input",{type:"text",placeholder:"제목으로 검색...",value:c,onChange:L=>U(L.target.value),className:"w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"}),c&&y.jsx("button",{onClick:()=>U(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",children:y.jsx(Ru,{size:14})})]}),g.length>0&&y.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[g.map(([L,F])=>y.jsxs("button",{onClick:()=>H(L),className:`text-xs px-3 py-1 rounded-full border transition-colors ${h===L?"bg-sky-500 text-white border-sky-500":"bg-white text-slate-500 border-slate-200 hover:border-sky-400 hover:text-sky-500"}`,children:["#",L,y.jsx("span",{className:`ml-1 ${h===L?"text-sky-100":"text-slate-400"}`,children:F})]},L)),K&&y.jsxs("button",{onClick:V,className:"text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-colors flex items-center gap-1",children:[y.jsx(Ru,{size:11}),"초기화"]})]}),K&&y.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:[b.length,"개의 글",h&&y.jsxs("span",{children:[" · ",y.jsxs("span",{className:"text-sky-500",children:["#",h]})]}),c&&y.jsxs("span",{children:[' · "',y.jsx("span",{className:"text-slate-600",children:c}),'"']})]}),T.length>0?y.jsx("div",{className:"flex flex-col space-y-10",children:T.map(L=>{var F;return y.jsx("article",{className:"group",children:y.jsxs(Gt,{to:`/blog/${L.id}`,className:"block",children:[y.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-400 mb-2 font-mono",children:L.date}),y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors",children:L.title}),y.jsx("p",{className:"text-slate-600 leading-relaxed mb-3",children:L.description}),y.jsx("div",{className:"flex flex-wrap gap-2",children:(F=L.tags)==null?void 0:F.map(ee=>y.jsxs("span",{onClick:re=>{re.preventDefault(),H(ee)},className:`text-xs px-2 py-0.5 rounded cursor-pointer transition-colors ${h===ee?"bg-sky-100 text-sky-600":"text-slate-400 bg-slate-50 hover:bg-sky-50 hover:text-sky-500"}`,children:["#",ee]},ee))})]})},L.id)})}):y.jsxs("div",{className:"text-center py-20 text-slate-400",children:[y.jsx(np,{size:32,className:"mx-auto mb-3 opacity-30"}),y.jsx("p",{className:"text-sm",children:"검색 결과가 없습니다."})]}),p>1&&y.jsxs("div",{className:"flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-100",children:[y.jsx("button",{onClick:D,disabled:r===1,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"이전 페이지",children:y.jsx(Lp,{size:20})}),y.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:p},(L,F)=>F+1).map(L=>y.jsx("button",{onClick:()=>B(L),className:`w-10 h-10 rounded-lg font-medium transition-colors ${r===L?"bg-sky-500 text-white":"hover:bg-slate-100 text-slate-600"}`,children:L},L))}),y.jsx("button",{onClick:O,disabled:r===p,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"다음 페이지",children:y.jsx(Gp,{size:20})})]})]})};function g1({term:u}){const r=M.useRef(null);return M.useEffect(()=>{if(!r.current)return;r.current.innerHTML="";const s=document.createElement("script");s.src="https://giscus.app/client.js",s.async=!0,s.crossOrigin="anonymous",s.setAttribute("data-repo","KimHanWhee/KimHanWhee.github.io"),s.setAttribute("data-repo-id","R_kgDORCSvGA"),s.setAttribute("data-category","General"),s.setAttribute("data-category-id","DIC_kwDORCSvGM4C3O7R"),s.setAttribute("data-mapping","specific"),s.setAttribute("data-term",u),s.setAttribute("data-strict","0"),s.setAttribute("data-reactions-enabled","1"),s.setAttribute("data-emit-metadata","0"),s.setAttribute("data-input-position","bottom"),s.setAttribute("data-theme","preferred_color_scheme"),s.setAttribute("data-lang","ko"),r.current.appendChild(s)},[u]),y.jsx("section",{ref:r})}function y1(u){const r=[],s=/<h([23])[^>]*>(.*?)<\/h[23]>/gi;let c;for(;(c=s.exec(u))!==null;){const f=parseInt(c[1]),h=c[2].replace(/<[^>]+>/g,"").trim(),m=h.toLowerCase().replace(/\s+/g,"-").replace(/[^\w가-힣-]/g,"");r.push({id:m,text:h,level:f})}return r}function b1(u){return u.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi,(r,s,c,f)=>{const m=f.replace(/<[^>]+>/g,"").trim().toLowerCase().replace(/\s+/g,"-").replace(/[^\w가-힣-]/g,"");return`<h${s}${c} id="${m}">${f}</h${s}>`})}const v1=({headings:u})=>{const[r,s]=M.useState("");return M.useEffect(()=>{if(u.length===0)return;const c=new IntersectionObserver(f=>{const h=f.filter(m=>m.isIntersecting);h.length>0&&s(h[0].target.id)},{rootMargin:"-80px 0px -60% 0px",threshold:0});return u.forEach(({id:f})=>{const h=document.getElementById(f);h&&c.observe(h)}),()=>c.disconnect()},[u]),u.length===0?null:y.jsxs("nav",{className:"sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto",children:[y.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest mb-3",children:"목차"}),y.jsx("ul",{className:"space-y-1",children:u.map(({id:c,text:f,level:h})=>y.jsx("li",{children:y.jsx("a",{href:`#${c}`,onClick:m=>{var g;m.preventDefault(),(g=document.getElementById(c))==null||g.scrollIntoView({behavior:"smooth"})},className:["block text-sm leading-snug transition-colors py-0.5 break-words",h===3?"pl-3":"",r===c?"text-secondary font-semibold":"text-slate-400 hover:text-slate-700"].join(" "),children:f})},c))})]})},$l=3,x1=({currentId:u})=>{const r=ju(),s=r.filter(p=>p.id!==u),c=r.findIndex(p=>p.id===u),f=r.filter(p=>p.id!==u).findIndex((p,S)=>S>=Math.max(0,c-1)),[h,m]=M.useState(Math.max(0,Math.floor(Math.max(0,f)/$l))),g=Math.ceil(s.length/$l),b=s.slice(h*$l,h*$l+$l);return s.length===0?null:y.jsxs("div",{className:"mt-16 pt-10 border-t border-slate-100",children:[y.jsx("h2",{className:"text-lg font-bold text-primary mb-6",children:"다른 글 보기"}),y.jsx("ul",{className:"space-y-3",children:b.map(p=>{var S;return y.jsx("li",{children:y.jsxs(Gt,{to:`/blog/${p.id}`,className:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4 rounded-xl border border-slate-100 hover:border-secondary/30 hover:bg-slate-50 transition-colors group",children:[y.jsx("span",{className:"font-mono text-xs text-slate-400 shrink-0",children:p.date}),y.jsx("span",{className:"font-semibold text-slate-700 group-hover:text-secondary transition-colors line-clamp-1 flex-1",children:p.title}),y.jsx("div",{className:"flex gap-1.5 flex-wrap",children:(S=p.tags)==null?void 0:S.slice(0,2).map(T=>y.jsx("span",{className:"px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-500",children:T},T))})]})},p.id)})}),g>1&&y.jsxs("div",{className:"flex items-center justify-center gap-3 mt-6",children:[y.jsx("button",{onClick:()=>m(p=>Math.max(0,p-1)),disabled:h===0,className:"p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-secondary/40 hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:y.jsx(Lp,{size:16})}),y.jsxs("span",{className:"text-sm text-slate-500 font-mono",children:[h+1," / ",g]}),y.jsx("button",{onClick:()=>m(p=>Math.min(g-1,p+1)),disabled:h===g-1,className:"p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-secondary/40 hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:y.jsx(Gp,{size:16})})]}),y.jsx("div",{className:"flex justify-center mt-6",children:y.jsx(Gt,{to:"/blog",className:"px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-sky-500 transition-colors shadow-lg shadow-slate-900/20",children:"목록으로 돌아가기"})})]})},S1=()=>{var h;const{id:u}=yy(),r=u?o1(u):void 0,s=()=>{window.scrollTo({top:0,behavior:"smooth"})};if(!r)return y.jsx(Dy,{to:"/blog",replace:!0});const c=y1(r.content),f=b1(r.content);return y.jsxs("div",{className:"min-h-screen bg-white font-sans selection:bg-secondary/20 selection:text-primary",children:[y.jsx("div",{className:"bg-slate-50 border-b border-slate-200",children:y.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative",children:[y.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-5 pointer-events-none",children:y.jsx("div",{className:"text-9xl font-bold font-mono text-slate-900 tracking-tighter"})}),y.jsxs(Gt,{to:"/blog",className:"inline-flex items-center text-slate-500 hover:text-secondary mb-8 transition-colors font-medium",children:[y.jsx(vb,{size:18,className:"mr-2"}),"Back to Tech Notes"]}),y.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight tracking-tight",children:r.title}),y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-6 text-slate-600 border-t border-slate-200/60 pt-6",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Eb,{size:18,className:"text-secondary"}),y.jsx("span",{className:"font-medium font-mono text-sm",children:r.date})]}),y.jsx("div",{className:"hidden sm:block w-px h-4 bg-slate-300"}),y.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:(h=r.tags)==null?void 0:h.map(m=>y.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm",children:[y.jsx($b,{size:12,className:"mr-1.5 text-slate-400"}),m]},m))})]})]})}),y.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[y.jsx("aside",{className:"hidden xl:block absolute top-0 left-full pl-8 w-52 h-full",children:y.jsx(v1,{headings:c})}),y.jsx("div",{className:"overflow-x-hidden",children:y.jsxs("article",{className:"prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl",children:[y.jsx("style",{children:`
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
            `}),y.jsx("div",{dangerouslySetInnerHTML:{__html:f}})]})}),u&&y.jsx(x1,{currentId:u}),y.jsx("div",{className:"mt-10 flex flex-col items-center",children:y.jsx("button",{onClick:s,className:"p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-secondary transition-colors","aria-label":"Scroll to top",children:y.jsx(Mb,{size:24})})})]}),y.jsx(g1,{term:u})]})},E1=()=>{const[u,r]=M.useState(!1),s="hanwhee2@gmail.com",c=()=>{navigator.clipboard.writeText(s),r(!0),setTimeout(()=>r(!1),2e3)};return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8",children:["Contact ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed mb-12",children:y.jsxs("p",{children:[y.jsx("br",{}),"궁금한 점이 있으시다면 편하게 연락주세요💬"]})}),y.jsxs("div",{className:"mb-12",children:[y.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"Email"}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-2xl md:text-3xl font-mono font-bold text-slate-900 hover:bg-sky-100 transition-colors px-1 -ml-1 rounded",children:s}),y.jsx("button",{onClick:c,className:"p-2 text-slate-400 hover:text-sky-600 transition-colors","aria-label":"Copy email address",children:u?y.jsx(Cb,{size:20,className:"text-sky-500"}):y.jsx(Db,{size:20})})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-4",children:"Social"}),y.jsx("div",{className:"flex flex-col space-y-3 items-start",children:y.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-sky-400 underline-offset-4 decoration-2",children:["Github ",y.jsx(Gb,{size:14,className:"opacity-50"})]})})]})]})},mp=3e3,T1=400,C1=({visible:u})=>{const[r,s]=M.useState(0);return M.useEffect(()=>{const c=setInterval(()=>{s(f=>(f+1)%4)},T1);return()=>clearInterval(c)},[]),y.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500",style:{opacity:u?1:0,pointerEvents:u?"auto":"none"},children:[y.jsxs("div",{className:"flex flex-col items-center mb-6",children:[y.jsx("style",{children:`
          @keyframes emoji-shadow {
            0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
            50%       { transform: scaleX(1);   opacity: 0.35; }
          }
        `}),y.jsx("span",{className:"text-5xl inline-block animate-[bounce_2s_infinite] select-none",children:"😎"}),y.jsx("div",{className:"w-10 h-2 bg-slate-900 rounded-full blur-sm mt-1",style:{animation:"emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite"}})]}),y.jsxs("span",{className:"text-xl md:text-2xl font-mono font-bold text-sky-400 select-none tracking-wide",children:["Now Coding",y.jsx("span",{style:{opacity:r>=1?1:0},children:"."}),y.jsx("span",{style:{opacity:r>=2?1:0},children:"."}),y.jsx("span",{style:{opacity:r>=3?1:0},children:"."})]})]})},A1=()=>{const[u,r]=M.useState(!0),[s,c]=M.useState(!0);return M.useEffect(()=>{const f=setTimeout(()=>c(!1),mp),h=setTimeout(()=>r(!1),mp+500);return()=>{clearTimeout(f),clearTimeout(h)}},[]),y.jsxs(y.Fragment,{children:[u&&y.jsx(C1,{visible:s}),y.jsx(lb,{children:y.jsx(zy,{children:y.jsxs(on,{path:"/",element:y.jsx(ev,{}),children:[y.jsx(on,{index:!0,element:y.jsx(f1,{})}),y.jsx(on,{path:"experience",element:y.jsx(h1,{})}),y.jsx(on,{path:"skills",element:y.jsx(d1,{})}),y.jsx(on,{path:"education",element:y.jsx(p1,{})}),y.jsx(on,{path:"blog",element:y.jsx(m1,{})}),y.jsx(on,{path:"blog/:id",element:y.jsx(S1,{})}),y.jsx(on,{path:"contact",element:y.jsx(E1,{})})]})})})]})},$p=document.getElementById("root");if(!$p)throw new Error("Could not find root element to mount to");const _1=w0.createRoot($p);_1.render(y.jsx(C0.StrictMode,{children:y.jsx(A1,{})}));
