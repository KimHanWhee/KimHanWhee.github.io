var x0=Object.defineProperty;var S0=(u,r,s)=>r in u?x0(u,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[r]=s;var Ee=(u,r,s)=>S0(u,typeof r!="symbol"?r+"":r,s);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function yp(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var eo={exports:{}},Yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function C0(){if(Gh)return Yl;Gh=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,f,d){var m=null;if(d!==void 0&&(m=""+d),f.key!==void 0&&(m=""+f.key),"key"in f){d={};for(var g in f)g!=="key"&&(d[g]=f[g])}else d=f;return f=d.ref,{$$typeof:u,type:o,key:m,ref:f!==void 0?f:null,props:d}}return Yl.Fragment=r,Yl.jsx=s,Yl.jsxs=s,Yl}var Hh;function E0(){return Hh||(Hh=1,eo.exports=C0()),eo.exports}var y=E0(),no={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function _0(){if(Bh)return W;Bh=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),D=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=D&&C[D]||C["@@iterator"],typeof C=="function"?C:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,H={};function V(C,U,Q){this.props=C,this.context=U,this.refs=H,this.updater=Q||B}V.prototype.isReactComponent={},V.prototype.setState=function(C,U){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,U,"setState")},V.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function I(){}I.prototype=V.prototype;function L(C,U,Q){this.props=C,this.context=U,this.refs=H,this.updater=Q||B}var F=L.prototype=new I;F.constructor=L,G(F,V.prototype),F.isPureReactComponent=!0;var ee=Array.isArray;function re(){}var P={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function Ve(C,U,Q){var X=Q.ref;return{$$typeof:u,type:C,key:U,ref:X!==void 0?X:null,props:Q}}function xn(C,U){return Ve(C.type,U,C.props)}function Bn(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function en(C){var U={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Q){return U[Q]})}var Bt=/\/+/g;function Xn(C,U){return typeof C=="object"&&C!==null&&C.key!=null?en(""+C.key):U.toString(36)}function On(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(re,re):(C.status="pending",C.then(function(U){C.status==="pending"&&(C.status="fulfilled",C.value=U)},function(U){C.status==="pending"&&(C.status="rejected",C.reason=U)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function k(C,U,Q,X,ne){var le=typeof C;(le==="undefined"||le==="boolean")&&(C=null);var me=!1;if(C===null)me=!0;else switch(le){case"bigint":case"string":case"number":me=!0;break;case"object":switch(C.$$typeof){case u:case r:me=!0;break;case S:return me=C._init,k(me(C._payload),U,Q,X,ne)}}if(me)return ne=ne(C),me=X===""?"."+Xn(C,0):X,ee(ne)?(Q="",me!=null&&(Q=me.replace(Bt,"$&/")+"/"),k(ne,U,Q,"",function(Pa){return Pa})):ne!=null&&(Bn(ne)&&(ne=xn(ne,Q+(ne.key==null||C&&C.key===ne.key?"":(""+ne.key).replace(Bt,"$&/")+"/")+me)),U.push(ne)),1;me=0;var $e=X===""?".":X+":";if(ee(C))for(var je=0;je<C.length;je++)X=C[je],le=$e+Xn(X,je),me+=k(X,U,Q,le,ne);else if(je=w(C),typeof je=="function")for(C=je.call(C),je=0;!(X=C.next()).done;)X=X.value,le=$e+Xn(X,je++),me+=k(X,U,Q,le,ne);else if(le==="object"){if(typeof C.then=="function")return k(On(C),U,Q,X,ne);throw U=String(C),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return me}function q(C,U,Q){if(C==null)return C;var X=[],ne=0;return k(C,X,"","",function(le){return U.call(Q,le,ne++)}),X}function $(C){if(C._status===-1){var U=C._result;U=U(),U.then(function(Q){(C._status===0||C._status===-1)&&(C._status=1,C._result=Q)},function(Q){(C._status===0||C._status===-1)&&(C._status=2,C._result=Q)}),C._status===-1&&(C._status=0,C._result=U)}if(C._status===1)return C._result.default;throw C._result}var ve=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},_e={map:q,forEach:function(C,U,Q){q(C,function(){U.apply(this,arguments)},Q)},count:function(C){var U=0;return q(C,function(){U++}),U},toArray:function(C){return q(C,function(U){return U})||[]},only:function(C){if(!Bn(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return W.Activity=E,W.Children=_e,W.Component=V,W.Fragment=s,W.Profiler=f,W.PureComponent=L,W.StrictMode=o,W.Suspense=b,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,W.__COMPILER_RUNTIME={__proto__:null,c:function(C){return P.H.useMemoCache(C)}},W.cache=function(C){return function(){return C.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(C,U,Q){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var X=G({},C.props),ne=C.key;if(U!=null)for(le in U.key!==void 0&&(ne=""+U.key),U)!ke.call(U,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&U.ref===void 0||(X[le]=U[le]);var le=arguments.length-2;if(le===1)X.children=Q;else if(1<le){for(var me=Array(le),$e=0;$e<le;$e++)me[$e]=arguments[$e+2];X.children=me}return Ve(C.type,ne,X)},W.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:d,_context:C},C},W.createElement=function(C,U,Q){var X,ne={},le=null;if(U!=null)for(X in U.key!==void 0&&(le=""+U.key),U)ke.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ne[X]=U[X]);var me=arguments.length-2;if(me===1)ne.children=Q;else if(1<me){for(var $e=Array(me),je=0;je<me;je++)$e[je]=arguments[je+2];ne.children=$e}if(C&&C.defaultProps)for(X in me=C.defaultProps,me)ne[X]===void 0&&(ne[X]=me[X]);return Ve(C,le,ne)},W.createRef=function(){return{current:null}},W.forwardRef=function(C){return{$$typeof:g,render:C}},W.isValidElement=Bn,W.lazy=function(C){return{$$typeof:S,_payload:{_status:-1,_result:C},_init:$}},W.memo=function(C,U){return{$$typeof:p,type:C,compare:U===void 0?null:U}},W.startTransition=function(C){var U=P.T,Q={};P.T=Q;try{var X=C(),ne=P.S;ne!==null&&ne(Q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(re,ve)}catch(le){ve(le)}finally{U!==null&&Q.types!==null&&(U.types=Q.types),P.T=U}},W.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},W.use=function(C){return P.H.use(C)},W.useActionState=function(C,U,Q){return P.H.useActionState(C,U,Q)},W.useCallback=function(C,U){return P.H.useCallback(C,U)},W.useContext=function(C){return P.H.useContext(C)},W.useDebugValue=function(){},W.useDeferredValue=function(C,U){return P.H.useDeferredValue(C,U)},W.useEffect=function(C,U){return P.H.useEffect(C,U)},W.useEffectEvent=function(C){return P.H.useEffectEvent(C)},W.useId=function(){return P.H.useId()},W.useImperativeHandle=function(C,U,Q){return P.H.useImperativeHandle(C,U,Q)},W.useInsertionEffect=function(C,U){return P.H.useInsertionEffect(C,U)},W.useLayoutEffect=function(C,U){return P.H.useLayoutEffect(C,U)},W.useMemo=function(C,U){return P.H.useMemo(C,U)},W.useOptimistic=function(C,U){return P.H.useOptimistic(C,U)},W.useReducer=function(C,U,Q){return P.H.useReducer(C,U,Q)},W.useRef=function(C){return P.H.useRef(C)},W.useState=function(C){return P.H.useState(C)},W.useSyncExternalStore=function(C,U,Q){return P.H.useSyncExternalStore(C,U,Q)},W.useTransition=function(){return P.H.useTransition()},W.version="19.2.3",W}var qh;function vo(){return qh||(qh=1,no.exports=_0()),no.exports}var M=vo();const A0=yp(M);var to={exports:{}},Vl={},ao={exports:{}},lo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function R0(){return Qh||(Qh=1,(function(u){function r(k,q){var $=k.length;k.push(q);e:for(;0<$;){var ve=$-1>>>1,_e=k[ve];if(0<f(_e,q))k[ve]=q,k[$]=_e,$=ve;else break e}}function s(k){return k.length===0?null:k[0]}function o(k){if(k.length===0)return null;var q=k[0],$=k.pop();if($!==q){k[0]=$;e:for(var ve=0,_e=k.length,C=_e>>>1;ve<C;){var U=2*(ve+1)-1,Q=k[U],X=U+1,ne=k[X];if(0>f(Q,$))X<_e&&0>f(ne,Q)?(k[ve]=ne,k[X]=$,ve=X):(k[ve]=Q,k[U]=$,ve=U);else if(X<_e&&0>f(ne,$))k[ve]=ne,k[X]=$,ve=X;else break e}}return q}function f(k,q){var $=k.sortIndex-q.sortIndex;return $!==0?$:k.id-q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;u.unstable_now=function(){return d.now()}}else{var m=Date,g=m.now();u.unstable_now=function(){return m.now()-g}}var b=[],p=[],S=1,E=null,D=3,w=!1,B=!1,G=!1,H=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function F(k){for(var q=s(p);q!==null;){if(q.callback===null)o(p);else if(q.startTime<=k)o(p),q.sortIndex=q.expirationTime,r(b,q);else break;q=s(p)}}function ee(k){if(G=!1,F(k),!B)if(s(b)!==null)B=!0,re||(re=!0,en());else{var q=s(p);q!==null&&On(ee,q.startTime-k)}}var re=!1,P=-1,ke=5,Ve=-1;function xn(){return H?!0:!(u.unstable_now()-Ve<ke)}function Bn(){if(H=!1,re){var k=u.unstable_now();Ve=k;var q=!0;try{e:{B=!1,G&&(G=!1,I(P),P=-1),w=!0;var $=D;try{n:{for(F(k),E=s(b);E!==null&&!(E.expirationTime>k&&xn());){var ve=E.callback;if(typeof ve=="function"){E.callback=null,D=E.priorityLevel;var _e=ve(E.expirationTime<=k);if(k=u.unstable_now(),typeof _e=="function"){E.callback=_e,F(k),q=!0;break n}E===s(b)&&o(b),F(k)}else o(b);E=s(b)}if(E!==null)q=!0;else{var C=s(p);C!==null&&On(ee,C.startTime-k),q=!1}}break e}finally{E=null,D=$,w=!1}q=void 0}}finally{q?en():re=!1}}}var en;if(typeof L=="function")en=function(){L(Bn)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,Xn=Bt.port2;Bt.port1.onmessage=Bn,en=function(){Xn.postMessage(null)}}else en=function(){V(Bn,0)};function On(k,q){P=V(function(){k(u.unstable_now())},q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(k){k.callback=null},u.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<k?Math.floor(1e3/k):5},u.unstable_getCurrentPriorityLevel=function(){return D},u.unstable_next=function(k){switch(D){case 1:case 2:case 3:var q=3;break;default:q=D}var $=D;D=q;try{return k()}finally{D=$}},u.unstable_requestPaint=function(){H=!0},u.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var $=D;D=k;try{return q()}finally{D=$}},u.unstable_scheduleCallback=function(k,q,$){var ve=u.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ve+$:ve):$=ve,k){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=$+_e,k={id:S++,callback:q,priorityLevel:k,startTime:$,expirationTime:_e,sortIndex:-1},$>ve?(k.sortIndex=$,r(p,k),s(b)===null&&k===s(p)&&(G?(I(P),P=-1):G=!0,On(ee,$-ve))):(k.sortIndex=_e,r(b,k),B||w||(B=!0,re||(re=!0,en()))),k},u.unstable_shouldYield=xn,u.unstable_wrapCallback=function(k){var q=D;return function(){var $=D;D=q;try{return k.apply(this,arguments)}finally{D=$}}}})(lo)),lo}var Yh;function T0(){return Yh||(Yh=1,ao.exports=R0()),ao.exports}var io={exports:{}},Pe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function M0(){if(Vh)return Pe;Vh=1;var u=vo();function r(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(b,p,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:E==null?null:""+E,children:b,containerInfo:p,implementation:S}}var m=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Pe.createPortal=function(b,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return d(b,p,null,S)},Pe.flushSync=function(b){var p=m.T,S=o.p;try{if(m.T=null,o.p=2,b)return b()}finally{m.T=p,o.p=S,o.d.f()}},Pe.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(b,p))},Pe.prefetchDNS=function(b){typeof b=="string"&&o.d.D(b)},Pe.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var S=p.as,E=g(S,p.crossOrigin),D=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?o.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:D,fetchPriority:w}):S==="script"&&o.d.X(b,{crossOrigin:E,integrity:D,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pe.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=g(p.as,p.crossOrigin);o.d.M(b,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(b)},Pe.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,E=g(S,p.crossOrigin);o.d.L(b,S,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pe.preloadModule=function(b,p){if(typeof b=="string")if(p){var S=g(p.as,p.crossOrigin);o.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(b)},Pe.requestFormReset=function(b){o.d.r(b)},Pe.unstable_batchedUpdates=function(b,p){return b(p)},Pe.useFormState=function(b,p,S){return m.H.useFormState(b,p,S)},Pe.useFormStatus=function(){return m.H.useHostTransitionStatus()},Pe.version="19.2.3",Pe}var Xh;function N0(){if(Xh)return io.exports;Xh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),io.exports=M0(),io.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function w0(){if(Jh)return Vl;Jh=1;var u=T0(),r=vo(),s=N0();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(o(188))}function p(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(o(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return b(l),e;if(i===a)return b(l),n;i=i.sibling}throw Error(o(188))}if(t.return!==a.return)t=l,a=i;else{for(var c=!1,h=l.child;h;){if(h===t){c=!0,t=l,a=i;break}if(h===a){c=!0,a=l,t=i;break}h=h.sibling}if(!c){for(h=i.child;h;){if(h===t){c=!0,t=i,a=l;break}if(h===a){c=!0,a=i,t=l;break}h=h.sibling}if(!c)throw Error(o(189))}}if(t.alternate!==a)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,D=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),xn=Symbol.for("react.memo_cache_sentinel"),Bn=Symbol.iterator;function en(e){return e===null||typeof e!="object"?null:(e=Bn&&e[Bn]||e["@@iterator"],typeof e=="function"?e:null)}var Bt=Symbol.for("react.client.reference");function Xn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case V:return"Profiler";case H:return"StrictMode";case ee:return"Suspense";case re:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case L:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:Xn(e.type)||"Memo";case ke:n=e._payload,e=e._init;try{return Xn(e(n))}catch{}}return null}var On=Array.isArray,k=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ve=[],_e=-1;function C(e){return{current:e}}function U(e){0>_e||(e.current=ve[_e],ve[_e]=null,_e--)}function Q(e,n){_e++,ve[_e]=e.current,e.current=n}var X=C(null),ne=C(null),le=C(null),me=C(null);function $e(e,n){switch(Q(le,n),Q(ne,e),Q(X,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?rh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=rh(n),e=sh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(X),Q(X,e)}function je(){U(X),U(ne),U(le)}function Pa(e){e.memoizedState!==null&&Q(me,e);var n=X.current,t=sh(n,e.type);n!==t&&(Q(ne,e),Q(X,t))}function ti(e){ne.current===e&&(U(X),U(ne)),me.current===e&&(U(me),Hl._currentValue=$)}var Lu,Lo;function qt(e){if(Lu===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Lu=n&&n[1]||"",Lo=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lu+e+Lo}var Uu=!1;function Gu(e,n){if(!e||Uu)return"";Uu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(N){var T=N}Reflect.construct(e,[],z)}else{try{z.call()}catch(N){T=N}e.call(z.prototype)}}else{try{throw Error()}catch(N){T=N}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(N){if(N&&T&&typeof N.stack=="string")return[N.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],h=i[1];if(c&&h){var v=c.split(`
`),R=h.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===R.length)for(a=v.length-1,l=R.length-1;1<=a&&0<=l&&v[a]!==R[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==R[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==R[l]){var O=`
`+v[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=l);break}}}finally{Uu=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?qt(t):""}function $p(e,n){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Gu(e.type,!1);case 11:return Gu(e.type.render,!1);case 1:return Gu(e.type,!0);case 31:return qt("Activity");default:return""}}function Uo(e){try{var n="",t=null;do n+=$p(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Hu=Object.prototype.hasOwnProperty,Bu=u.unstable_scheduleCallback,qu=u.unstable_cancelCallback,Fp=u.unstable_shouldYield,Wp=u.unstable_requestPaint,on=u.unstable_now,em=u.unstable_getCurrentPriorityLevel,Go=u.unstable_ImmediatePriority,Ho=u.unstable_UserBlockingPriority,ai=u.unstable_NormalPriority,nm=u.unstable_LowPriority,Bo=u.unstable_IdlePriority,tm=u.log,am=u.unstable_setDisableYieldValue,$a=null,cn=null;function mt(e){if(typeof tm=="function"&&am(e),cn&&typeof cn.setStrictMode=="function")try{cn.setStrictMode($a,e)}catch{}}var fn=Math.clz32?Math.clz32:um,lm=Math.log,im=Math.LN2;function um(e){return e>>>=0,e===0?32:31-(lm(e)/im|0)|0}var li=256,ii=262144,ui=4194304;function Qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ri(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~i,a!==0?l=Qt(a):(c&=h,c!==0?l=Qt(c):t||(t=h&~e,t!==0&&(l=Qt(t))))):(h=a&~i,h!==0?l=Qt(h):c!==0?l=Qt(c):t||(t=a&~e,t!==0&&(l=Qt(t)))),l===0?0:n!==0&&n!==l&&(n&i)===0&&(i=l&-l,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:l}function Fa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function rm(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qo(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function Qu(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Wa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sm(e,n,t,a,l,i){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var h=e.entanglements,v=e.expirationTimes,R=e.hiddenUpdates;for(t=c&~t;0<t;){var O=31-fn(t),z=1<<O;h[O]=0,v[O]=-1;var T=R[O];if(T!==null)for(R[O]=null,O=0;O<T.length;O++){var N=T[O];N!==null&&(N.lane&=-536870913)}t&=~z}a!==0&&Qo(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~n))}function Qo(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-fn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Yo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-fn(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function Vo(e,n){var t=n&-n;return t=(t&42)!==0?1:Yu(t),(t&(e.suspendedLanes|n))!==0?0:t}function Yu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xo(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Dh(e.type))}function Jo(e,n){var t=q.p;try{return q.p=e,n()}finally{q.p=t}}var gt=Math.random().toString(36).slice(2),Xe="__reactFiber$"+gt,nn="__reactProps$"+gt,oa="__reactContainer$"+gt,Xu="__reactEvents$"+gt,om="__reactListeners$"+gt,cm="__reactHandles$"+gt,Zo="__reactResources$"+gt,el="__reactMarker$"+gt;function Ju(e){delete e[Xe],delete e[nn],delete e[Xu],delete e[om],delete e[cm]}function ca(e){var n=e[Xe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[oa]||t[Xe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=mh(e);e!==null;){if(t=e[Xe])return t;e=mh(e)}return n}e=t,t=e.parentNode}return null}function fa(e){if(e=e[Xe]||e[oa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function nl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function da(e){var n=e[Zo];return n||(n=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(e){e[el]=!0}var Io=new Set,Ko={};function Yt(e,n){ha(e,n),ha(e+"Capture",n)}function ha(e,n){for(Ko[e]=n,e=0;e<n.length;e++)Io.add(n[e])}var fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Po={},$o={};function dm(e){return Hu.call($o,e)?!0:Hu.call(Po,e)?!1:fm.test(e)?$o[e]=!0:(Po[e]=!0,!1)}function si(e,n,t){if(dm(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function oi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Jn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function Sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hm(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(c){t=""+c,i.call(this,c)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zu(e){if(!e._valueTracker){var n=Fo(e)?"checked":"value";e._valueTracker=hm(e,n,""+e[n])}}function Wo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Fo(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pm=/[\n"\\]/g;function Cn(e){return e.replace(pm,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Iu(e,n,t,a,l,i,c,h){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),n!=null?c==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Sn(n)):e.value!==""+Sn(n)&&(e.value=""+Sn(n)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),n!=null?Ku(e,c,Sn(n)):t!=null?Ku(e,c,Sn(t)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Sn(h):e.removeAttribute("name")}function ec(e,n,t,a,l,i,c,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){Zu(e);return}t=t!=null?""+Sn(t):"",n=n!=null?""+Sn(n):t,h||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Zu(e)}function Ku(e,n,t){n==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function pa(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function nc(e,n,t){if(n!=null&&(n=""+Sn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Sn(t):""}function tc(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(o(92));if(On(a)){if(1<a.length)throw Error(o(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Sn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),Zu(e)}function ma(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var mm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ac(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||mm.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function lc(e,n,t){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&ac(e,l,a)}else for(var i in n)n.hasOwnProperty(i)&&ac(e,i,n[i])}function Pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ym=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fi(e){return ym.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zn(){}var $u=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,ya=null;function ic(e){var n=fa(e);if(n&&(e=n.stateNode)){var t=e[nn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Iu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Cn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[nn]||null;if(!l)throw Error(o(90));Iu(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Wo(a)}break e;case"textarea":nc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&pa(e,!!t.multiple,n,!1)}}}var Wu=!1;function uc(e,n,t){if(Wu)return e(n,t);Wu=!0;try{var a=e(n);return a}finally{if(Wu=!1,(ga!==null||ya!==null)&&(Fi(),ga&&(n=ga,e=ya,ya=ga=null,ic(n),e)))for(n=0;n<e.length;n++)ic(e[n])}}function tl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[nn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(In)try{var al={};Object.defineProperty(al,"passive",{get:function(){er=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{er=!1}var yt=null,nr=null,di=null;function rc(){if(di)return di;var e,n=nr,t=n.length,a,l="value"in yt?yt.value:yt.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var c=t-e;for(a=1;a<=c&&n[t-a]===l[i-a];a++);return di=l.slice(e,1<a?1-a:void 0)}function hi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function sc(){return!1}function tn(e){function n(t,a,l,i,c){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pi:sc,this.isPropagationStopped=sc,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),n}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=tn(Vt),ll=E({},Vt,{view:0,detail:0}),bm=tn(ll),tr,ar,il,gi=E({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(tr=e.screenX-il.screenX,ar=e.screenY-il.screenY):ar=tr=0,il=e),tr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),oc=tn(gi),vm=E({},gi,{dataTransfer:0}),xm=tn(vm),Sm=E({},ll,{relatedTarget:0}),lr=tn(Sm),Cm=E({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=tn(Cm),_m=E({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Am=tn(_m),Rm=E({},Vt,{data:0}),cc=tn(Rm),Tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nm[e])?!!n[e]:!1}function ir(){return wm}var Dm=E({},ll,{key:function(e){if(e.key){var n=Tm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Om=tn(Dm),km=E({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=tn(km),jm=E({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),zm=tn(jm),Lm=E({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=tn(Lm),Gm=E({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hm=tn(Gm),Bm=E({},Vt,{newState:0,oldState:0}),qm=tn(Bm),Qm=[9,13,27,32],ur=In&&"CompositionEvent"in window,ul=null;In&&"documentMode"in document&&(ul=document.documentMode);var Ym=In&&"TextEvent"in window&&!ul,dc=In&&(!ur||ul&&8<ul&&11>=ul),hc=" ",pc=!1;function mc(e,n){switch(e){case"keyup":return Qm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function Vm(e,n){switch(e){case"compositionend":return gc(n);case"keypress":return n.which!==32?null:(pc=!0,hc);case"textInput":return e=n.data,e===hc&&pc?null:e;default:return null}}function Xm(e,n){if(ba)return e==="compositionend"||!ur&&mc(e,n)?(e=rc(),di=nr=yt=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dc&&n.locale!=="ko"?null:n.data;default:return null}}var Jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jm[e.type]:n==="textarea"}function bc(e,n,t,a){ga?ya?ya.push(a):ya=[a]:ga=a,n=iu(n,"onChange"),0<n.length&&(t=new mi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var rl=null,sl=null;function Zm(e){nh(e,0)}function yi(e){var n=nl(e);if(Wo(n))return e}function vc(e,n){if(e==="change")return n}var xc=!1;if(In){var rr;if(In){var sr="oninput"in document;if(!sr){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),sr=typeof Sc.oninput=="function"}rr=sr}else rr=!1;xc=rr&&(!document.documentMode||9<document.documentMode)}function Cc(){rl&&(rl.detachEvent("onpropertychange",Ec),sl=rl=null)}function Ec(e){if(e.propertyName==="value"&&yi(sl)){var n=[];bc(n,sl,e,Fu(e)),uc(Zm,n)}}function Im(e,n,t){e==="focusin"?(Cc(),rl=n,sl=t,rl.attachEvent("onpropertychange",Ec)):e==="focusout"&&Cc()}function Km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(sl)}function Pm(e,n){if(e==="click")return yi(n)}function $m(e,n){if(e==="input"||e==="change")return yi(n)}function Fm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var dn=typeof Object.is=="function"?Object.is:Fm;function ol(e,n){if(dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Hu.call(n,l)||!dn(e[l],n[l]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ac(e,n){var t=_c(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_c(t)}}function Rc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ci(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ci(e.document)}return n}function or(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wm=In&&"documentMode"in document&&11>=document.documentMode,va=null,cr=null,cl=null,fr=!1;function Mc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fr||va==null||va!==ci(a)||(a=va,"selectionStart"in a&&or(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),cl&&ol(cl,a)||(cl=a,a=iu(cr,"onSelect"),0<a.length&&(n=new mi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=va)))}function Xt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xa={animationend:Xt("Animation","AnimationEnd"),animationiteration:Xt("Animation","AnimationIteration"),animationstart:Xt("Animation","AnimationStart"),transitionrun:Xt("Transition","TransitionRun"),transitionstart:Xt("Transition","TransitionStart"),transitioncancel:Xt("Transition","TransitionCancel"),transitionend:Xt("Transition","TransitionEnd")},dr={},Nc={};In&&(Nc=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Jt(e){if(dr[e])return dr[e];if(!xa[e])return e;var n=xa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Nc)return dr[e]=n[t];return e}var wc=Jt("animationend"),Dc=Jt("animationiteration"),Oc=Jt("animationstart"),eg=Jt("transitionrun"),ng=Jt("transitionstart"),tg=Jt("transitioncancel"),kc=Jt("transitionend"),jc=new Map,hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hr.push("scrollEnd");function kn(e,n){jc.set(e,n),Yt(n,[e])}var bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},En=[],Sa=0,pr=0;function vi(){for(var e=Sa,n=pr=Sa=0;n<e;){var t=En[n];En[n++]=null;var a=En[n];En[n++]=null;var l=En[n];En[n++]=null;var i=En[n];if(En[n++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}i!==0&&zc(t,l,i)}}function xi(e,n,t,a){En[Sa++]=e,En[Sa++]=n,En[Sa++]=t,En[Sa++]=a,pr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function mr(e,n,t,a){return xi(e,n,t,a),Si(e)}function Zt(e,n){return xi(e,null,null,n),Si(e)}function zc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,i=e.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&n!==null&&(l=31-fn(t),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),i):null}function Si(e){if(50<Ol)throw Ol=0,_s=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ca={};function ag(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,a){return new ag(e,n,t,a)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kn(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Lc(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ci(e,n,t,a,l,i){var c=0;if(a=e,typeof e=="function")gr(e)&&(c=1);else if(typeof e=="string")c=s0(e,t,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=hn(31,t,n,l),e.elementType=Ve,e.lanes=i,e;case G:return It(t.children,l,i,n);case H:c=8,l|=24;break;case V:return e=hn(12,t,n,l|2),e.elementType=V,e.lanes=i,e;case ee:return e=hn(13,t,n,l),e.elementType=ee,e.lanes=i,e;case re:return e=hn(19,t,n,l),e.elementType=re,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:c=10;break e;case I:c=9;break e;case F:c=11;break e;case P:c=14;break e;case ke:c=16,a=null;break e}c=29,t=Error(o(130,e===null?"null":typeof e,"")),a=null}return n=hn(c,t,n,l),n.elementType=e,n.type=a,n.lanes=i,n}function It(e,n,t,a){return e=hn(7,e,a,n),e.lanes=t,e}function yr(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function Uc(e){var n=hn(18,null,null,0);return n.stateNode=e,n}function br(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Gc=new WeakMap;function _n(e,n){if(typeof e=="object"&&e!==null){var t=Gc.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Uo(n)},Gc.set(e,n),n)}return{value:e,source:n,stack:Uo(n)}}var Ea=[],_a=0,Ei=null,fl=0,An=[],Rn=0,bt=null,qn=1,Qn="";function Pn(e,n){Ea[_a++]=fl,Ea[_a++]=Ei,Ei=e,fl=n}function Hc(e,n,t){An[Rn++]=qn,An[Rn++]=Qn,An[Rn++]=bt,bt=e;var a=qn;e=Qn;var l=32-fn(a)-1;a&=~(1<<l),t+=1;var i=32-fn(n)+l;if(30<i){var c=l-l%5;i=(a&(1<<c)-1).toString(32),a>>=c,l-=c,qn=1<<32-fn(n)+l|t<<l|a,Qn=i+e}else qn=1<<i|t<<l|a,Qn=e}function vr(e){e.return!==null&&(Pn(e,1),Hc(e,1,0))}function xr(e){for(;e===Ei;)Ei=Ea[--_a],Ea[_a]=null,fl=Ea[--_a],Ea[_a]=null;for(;e===bt;)bt=An[--Rn],An[Rn]=null,Qn=An[--Rn],An[Rn]=null,qn=An[--Rn],An[Rn]=null}function Bc(e,n){An[Rn++]=qn,An[Rn++]=Qn,An[Rn++]=bt,qn=n.id,Qn=n.overflow,bt=e}var Je=null,Re=null,ce=!1,vt=null,Tn=!1,Sr=Error(o(519));function xt(e){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dl(_n(n,e)),Sr}function qc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[Xe]=e,n[nn]=a,t){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(t=0;t<jl.length;t++)ue(jl[t],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":ue("invalid",n),ec(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ue("invalid",n);break;case"textarea":ue("invalid",n),tc(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||ih(n.textContent,t)?(a.popover!=null&&(ue("beforetoggle",n),ue("toggle",n)),a.onScroll!=null&&ue("scroll",n),a.onScrollEnd!=null&&ue("scrollend",n),a.onClick!=null&&(n.onclick=Zn),n=!0):n=!1,n||xt(e,!0)}function Qc(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:Je=Je.return}}function Aa(e){if(e!==Je)return!1;if(!ce)return Qc(e),ce=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Hs(e.type,e.memoizedProps)),t=!t),t&&Re&&xt(e),Qc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=ph(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=ph(e)}else n===27?(n=Re,jt(e.type)?(e=Vs,Vs=null,Re=e):Re=n):Re=Je?Nn(e.stateNode.nextSibling):null;return!0}function Kt(){Re=Je=null,ce=!1}function Cr(){var e=vt;return e!==null&&(rn===null?rn=e:rn.push.apply(rn,e),vt=null),e}function dl(e){vt===null?vt=[e]:vt.push(e)}var Er=C(null),Pt=null,$n=null;function St(e,n,t){Q(Er,n._currentValue),n._currentValue=t}function Fn(e){e._currentValue=Er.current,U(Er)}function _r(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Ar(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=l;for(var v=0;v<n.length;v++)if(h.context===n[v]){i.lanes|=t,h=i.alternate,h!==null&&(h.lanes|=t),_r(i.return,t,e),a||(c=null);break e}i=h.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(o(341));c.lanes|=t,i=c.alternate,i!==null&&(i.lanes|=t),_r(c,t,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function Ra(e,n,t,a){e=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var h=l.type;dn(l.pendingProps.value,c.value)||(e!==null?e.push(h):e=[h])}}else if(l===me.current){if(c=l.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}l=l.return}e!==null&&Ar(n,e,t,a),n.flags|=262144}function _i(e){for(e=e.firstContext;e!==null;){if(!dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $t(e){Pt=e,$n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Yc(Pt,e)}function Ai(e,n){return Pt===null&&$t(e),Yc(e,n)}function Yc(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},$n===null){if(e===null)throw Error(o(308));$n=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $n=$n.next=n;return t}var lg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},ig=u.unstable_scheduleCallback,ug=u.unstable_NormalPriority,Ue={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rr(){return{controller:new lg,data:new Map,refCount:0}}function hl(e){e.refCount--,e.refCount===0&&ig(ug,function(){e.controller.abort()})}var pl=null,Tr=0,Ta=0,Ma=null;function rg(e,n){if(pl===null){var t=pl=[];Tr=0,Ta=ws(),Ma={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Tr++,n.then(Vc,Vc),n}function Vc(){if(--Tr===0&&pl!==null){Ma!==null&&(Ma.status="fulfilled");var e=pl;pl=null,Ta=0,Ma=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sg(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var Xc=k.S;k.S=function(e,n){Nd=on(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rg(e,n),Xc!==null&&Xc(e,n)};var Ft=C(null);function Mr(){var e=Ft.current;return e!==null?e:Ae.pooledCache}function Ri(e,n){n===null?Q(Ft,Ft.current):Q(Ft,n.pool)}function Jc(){var e=Mr();return e===null?null:{parent:Ue._currentValue,pool:e}}var Na=Error(o(460)),Nr=Error(o(474)),Ti=Error(o(542)),Mi={then:function(){}};function Zc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ic(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Zn,Zn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pc(e),e;default:if(typeof n.status=="string")n.then(Zn,Zn);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pc(e),e}throw ea=n,Na}}function Wt(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ea=t,Na):t}}var ea=null;function Kc(){if(ea===null)throw Error(o(459));var e=ea;return ea=null,e}function Pc(e){if(e===Na||e===Ti)throw Error(o(483))}var wa=null,ml=0;function Ni(e){var n=ml;return ml+=1,wa===null&&(wa=[]),Ic(wa,e,n)}function gl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wi(e,n){throw n.$$typeof===D?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $c(e){function n(_,x){if(e){var A=_.deletions;A===null?(_.deletions=[x],_.flags|=16):A.push(x)}}function t(_,x){if(!e)return null;for(;x!==null;)n(_,x),x=x.sibling;return null}function a(_){for(var x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function l(_,x){return _=Kn(_,x),_.index=0,_.sibling=null,_}function i(_,x,A){return _.index=A,e?(A=_.alternate,A!==null?(A=A.index,A<x?(_.flags|=67108866,x):A):(_.flags|=67108866,x)):(_.flags|=1048576,x)}function c(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function h(_,x,A,j){return x===null||x.tag!==6?(x=yr(A,_.mode,j),x.return=_,x):(x=l(x,A),x.return=_,x)}function v(_,x,A,j){var Z=A.type;return Z===G?O(_,x,A.props.children,j,A.key):x!==null&&(x.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===ke&&Wt(Z)===x.type)?(x=l(x,A.props),gl(x,A),x.return=_,x):(x=Ci(A.type,A.key,A.props,null,_.mode,j),gl(x,A),x.return=_,x)}function R(_,x,A,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==A.containerInfo||x.stateNode.implementation!==A.implementation?(x=br(A,_.mode,j),x.return=_,x):(x=l(x,A.children||[]),x.return=_,x)}function O(_,x,A,j,Z){return x===null||x.tag!==7?(x=It(A,_.mode,j,Z),x.return=_,x):(x=l(x,A),x.return=_,x)}function z(_,x,A){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=yr(""+x,_.mode,A),x.return=_,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case w:return A=Ci(x.type,x.key,x.props,null,_.mode,A),gl(A,x),A.return=_,A;case B:return x=br(x,_.mode,A),x.return=_,x;case ke:return x=Wt(x),z(_,x,A)}if(On(x)||en(x))return x=It(x,_.mode,A,null),x.return=_,x;if(typeof x.then=="function")return z(_,Ni(x),A);if(x.$$typeof===L)return z(_,Ai(_,x),A);wi(_,x)}return null}function T(_,x,A,j){var Z=x!==null?x.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return Z!==null?null:h(_,x,""+A,j);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case w:return A.key===Z?v(_,x,A,j):null;case B:return A.key===Z?R(_,x,A,j):null;case ke:return A=Wt(A),T(_,x,A,j)}if(On(A)||en(A))return Z!==null?null:O(_,x,A,j,null);if(typeof A.then=="function")return T(_,x,Ni(A),j);if(A.$$typeof===L)return T(_,x,Ai(_,A),j);wi(_,A)}return null}function N(_,x,A,j,Z){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return _=_.get(A)||null,h(x,_,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return _=_.get(j.key===null?A:j.key)||null,v(x,_,j,Z);case B:return _=_.get(j.key===null?A:j.key)||null,R(x,_,j,Z);case ke:return j=Wt(j),N(_,x,A,j,Z)}if(On(j)||en(j))return _=_.get(A)||null,O(x,_,j,Z,null);if(typeof j.then=="function")return N(_,x,A,Ni(j),Z);if(j.$$typeof===L)return N(_,x,A,Ai(x,j),Z);wi(x,j)}return null}function Y(_,x,A,j){for(var Z=null,fe=null,J=x,ae=x=0,oe=null;J!==null&&ae<A.length;ae++){J.index>ae?(oe=J,J=null):oe=J.sibling;var de=T(_,J,A[ae],j);if(de===null){J===null&&(J=oe);break}e&&J&&de.alternate===null&&n(_,J),x=i(de,x,ae),fe===null?Z=de:fe.sibling=de,fe=de,J=oe}if(ae===A.length)return t(_,J),ce&&Pn(_,ae),Z;if(J===null){for(;ae<A.length;ae++)J=z(_,A[ae],j),J!==null&&(x=i(J,x,ae),fe===null?Z=J:fe.sibling=J,fe=J);return ce&&Pn(_,ae),Z}for(J=a(J);ae<A.length;ae++)oe=N(J,_,ae,A[ae],j),oe!==null&&(e&&oe.alternate!==null&&J.delete(oe.key===null?ae:oe.key),x=i(oe,x,ae),fe===null?Z=oe:fe.sibling=oe,fe=oe);return e&&J.forEach(function(Ht){return n(_,Ht)}),ce&&Pn(_,ae),Z}function K(_,x,A,j){if(A==null)throw Error(o(151));for(var Z=null,fe=null,J=x,ae=x=0,oe=null,de=A.next();J!==null&&!de.done;ae++,de=A.next()){J.index>ae?(oe=J,J=null):oe=J.sibling;var Ht=T(_,J,de.value,j);if(Ht===null){J===null&&(J=oe);break}e&&J&&Ht.alternate===null&&n(_,J),x=i(Ht,x,ae),fe===null?Z=Ht:fe.sibling=Ht,fe=Ht,J=oe}if(de.done)return t(_,J),ce&&Pn(_,ae),Z;if(J===null){for(;!de.done;ae++,de=A.next())de=z(_,de.value,j),de!==null&&(x=i(de,x,ae),fe===null?Z=de:fe.sibling=de,fe=de);return ce&&Pn(_,ae),Z}for(J=a(J);!de.done;ae++,de=A.next())de=N(J,_,ae,de.value,j),de!==null&&(e&&de.alternate!==null&&J.delete(de.key===null?ae:de.key),x=i(de,x,ae),fe===null?Z=de:fe.sibling=de,fe=de);return e&&J.forEach(function(v0){return n(_,v0)}),ce&&Pn(_,ae),Z}function Ce(_,x,A,j){if(typeof A=="object"&&A!==null&&A.type===G&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case w:e:{for(var Z=A.key;x!==null;){if(x.key===Z){if(Z=A.type,Z===G){if(x.tag===7){t(_,x.sibling),j=l(x,A.props.children),j.return=_,_=j;break e}}else if(x.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===ke&&Wt(Z)===x.type){t(_,x.sibling),j=l(x,A.props),gl(j,A),j.return=_,_=j;break e}t(_,x);break}else n(_,x);x=x.sibling}A.type===G?(j=It(A.props.children,_.mode,j,A.key),j.return=_,_=j):(j=Ci(A.type,A.key,A.props,null,_.mode,j),gl(j,A),j.return=_,_=j)}return c(_);case B:e:{for(Z=A.key;x!==null;){if(x.key===Z)if(x.tag===4&&x.stateNode.containerInfo===A.containerInfo&&x.stateNode.implementation===A.implementation){t(_,x.sibling),j=l(x,A.children||[]),j.return=_,_=j;break e}else{t(_,x);break}else n(_,x);x=x.sibling}j=br(A,_.mode,j),j.return=_,_=j}return c(_);case ke:return A=Wt(A),Ce(_,x,A,j)}if(On(A))return Y(_,x,A,j);if(en(A)){if(Z=en(A),typeof Z!="function")throw Error(o(150));return A=Z.call(A),K(_,x,A,j)}if(typeof A.then=="function")return Ce(_,x,Ni(A),j);if(A.$$typeof===L)return Ce(_,x,Ai(_,A),j);wi(_,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,x!==null&&x.tag===6?(t(_,x.sibling),j=l(x,A),j.return=_,_=j):(t(_,x),j=yr(A,_.mode,j),j.return=_,_=j),c(_)):t(_,x)}return function(_,x,A,j){try{ml=0;var Z=Ce(_,x,A,j);return wa=null,Z}catch(J){if(J===Na||J===Ti)throw J;var fe=hn(29,J,null,_.mode);return fe.lanes=j,fe.return=_,fe}finally{}}}var na=$c(!0),Fc=$c(!1),Ct=!1;function wr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Et(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _t(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Si(e),zc(e,null,t),n}return xi(e,a,n,t),Si(e)}function yl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Yo(e,t)}}function Or(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var kr=!1;function bl(){if(kr){var e=Ma;if(e!==null)throw e}}function vl(e,n,t,a){kr=!1;var l=e.updateQueue;Ct=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var v=h,R=v.next;v.next=null,c===null?i=R:c.next=R,c=v;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==c&&(h===null?O.firstBaseUpdate=R:h.next=R,O.lastBaseUpdate=v))}if(i!==null){var z=l.baseState;c=0,O=R=v=null,h=i;do{var T=h.lane&-536870913,N=T!==h.lane;if(N?(se&T)===T:(a&T)===T){T!==0&&T===Ta&&(kr=!0),O!==null&&(O=O.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var Y=e,K=h;T=n;var Ce=t;switch(K.tag){case 1:if(Y=K.payload,typeof Y=="function"){z=Y.call(Ce,z,T);break e}z=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=K.payload,T=typeof Y=="function"?Y.call(Ce,z,T):Y,T==null)break e;z=E({},z,T);break e;case 2:Ct=!0}}T=h.callback,T!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[T]:N.push(T))}else N={lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(R=O=N,v=z):O=O.next=N,c|=T;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;N=h,h=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);O===null&&(v=z),l.baseState=v,l.firstBaseUpdate=R,l.lastBaseUpdate=O,i===null&&(l.shared.lanes=0),Nt|=c,e.lanes=c,e.memoizedState=z}}function Wc(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function ef(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Wc(t[e],n)}var Da=C(null),Di=C(0);function nf(e,n){e=rt,Q(Di,e),Q(Da,n),rt=e|n.baseLanes}function jr(){Q(Di,rt),Q(Da,Da.current)}function zr(){rt=Di.current,U(Da),U(Di)}var pn=C(null),Mn=null;function At(e){var n=e.alternate;Q(ze,ze.current&1),Q(pn,e),Mn===null&&(n===null||Da.current!==null||n.memoizedState!==null)&&(Mn=e)}function Lr(e){Q(ze,ze.current),Q(pn,e),Mn===null&&(Mn=e)}function tf(e){e.tag===22?(Q(ze,ze.current),Q(pn,e),Mn===null&&(Mn=e)):Rt()}function Rt(){Q(ze,ze.current),Q(pn,pn.current)}function mn(e){U(pn),Mn===e&&(Mn=null),U(ze)}var ze=C(0);function Oi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Qs(t)||Ys(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wn=0,te=null,xe=null,Ge=null,ki=!1,Oa=!1,ta=!1,ji=0,xl=0,ka=null,og=0;function we(){throw Error(o(321))}function Ur(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!dn(e[t],n[t]))return!1;return!0}function Gr(e,n,t,a,l,i){return Wn=i,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,k.H=e===null||e.memoizedState===null?Bf:Wr,ta=!1,i=t(a,l),ta=!1,Oa&&(i=lf(n,t,a,l)),af(e),i}function af(e){k.H=El;var n=xe!==null&&xe.next!==null;if(Wn=0,Ge=xe=te=null,ki=!1,xl=0,ka=null,n)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&_i(e)&&(He=!0))}function lf(e,n,t,a){te=e;var l=0;do{if(Oa&&(ka=null),xl=0,Oa=!1,25<=l)throw Error(o(301));if(l+=1,Ge=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}k.H=qf,i=n(t,a)}while(Oa);return i}function cg(){var e=k.H,n=e.useState()[0];return n=typeof n.then=="function"?Sl(n):n,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(te.flags|=1024),n}function Hr(){var e=ji!==0;return ji=0,e}function Br(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function qr(e){if(ki){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ki=!1}Wn=0,Ge=xe=te=null,Oa=!1,xl=ji=0,ka=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?te.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Le(){if(xe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=Ge===null?te.memoizedState:Ge.next;if(n!==null)Ge=n,xe=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ge===null?te.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var n=xl;return xl+=1,ka===null&&(ka=[]),e=Ic(ka,e,n),n=te,(Ge===null?n.memoizedState:Ge.next)===null&&(n=n.alternate,k.H=n===null||n.memoizedState===null?Bf:Wr),e}function Li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===L)return Ze(e)}throw Error(o(438,String(e)))}function Qr(e){var n=null,t=te.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=zi(),te.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=xn;return n.index++,t}function et(e,n){return typeof n=="function"?n(e):n}function Ui(e){var n=Le();return Yr(n,xe,e)}function Yr(e,n,t){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}n.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{n=l.next;var h=c=null,v=null,R=n,O=!1;do{var z=R.lane&-536870913;if(z!==R.lane?(se&z)===z:(Wn&z)===z){var T=R.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),z===Ta&&(O=!0);else if((Wn&T)===T){R=R.next,T===Ta&&(O=!0);continue}else z={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(h=v=z,c=i):v=v.next=z,te.lanes|=T,Nt|=T;z=R.action,ta&&t(i,z),i=R.hasEagerState?R.eagerState:t(i,z)}else T={lane:z,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(h=v=T,c=i):v=v.next=T,te.lanes|=z,Nt|=z;R=R.next}while(R!==null&&R!==n);if(v===null?c=i:v.next=h,!dn(i,e.memoizedState)&&(He=!0,O&&(t=Ma,t!==null)))throw t;e.memoizedState=i,e.baseState=c,e.baseQueue=v,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Vr(e){var n=Le(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var c=l=l.next;do i=e(i,c.action),c=c.next;while(c!==l);dn(i,n.memoizedState)||(He=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function uf(e,n,t){var a=te,l=Le(),i=ce;if(i){if(t===void 0)throw Error(o(407));t=t()}else t=n();var c=!dn((xe||l).memoizedState,t);if(c&&(l.memoizedState=t,He=!0),l=l.queue,Zr(of.bind(null,a,l,e),[e]),l.getSnapshot!==n||c||Ge!==null&&Ge.memoizedState.tag&1){if(a.flags|=2048,ja(9,{destroy:void 0},sf.bind(null,a,l,t,n),null),Ae===null)throw Error(o(349));i||(Wn&127)!==0||rf(a,n,t)}return t}function rf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=te.updateQueue,n===null?(n=zi(),te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function sf(e,n,t,a){n.value=t,n.getSnapshot=a,cf(n)&&ff(e)}function of(e,n,t){return t(function(){cf(n)&&ff(e)})}function cf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!dn(e,t)}catch{return!0}}function ff(e){var n=Zt(e,2);n!==null&&sn(n,e,2)}function Xr(e){var n=Fe();if(typeof e=="function"){var t=e;if(e=t(),ta){mt(!0);try{t()}finally{mt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:e},n}function df(e,n,t,a){return e.baseState=t,Yr(e,xe,typeof a=="function"?a:et)}function fg(e,n,t,a,l){if(Bi(e))throw Error(o(485));if(e=n.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};k.T!==null?t(!0):i.isTransition=!1,a(i),t=n.pending,t===null?(i.next=n.pending=i,hf(n,i)):(i.next=t.next,n.pending=t.next=i)}}function hf(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var i=k.T,c={};k.T=c;try{var h=t(l,a),v=k.S;v!==null&&v(c,h),pf(e,n,h)}catch(R){Jr(e,n,R)}finally{i!==null&&c.types!==null&&(i.types=c.types),k.T=i}}else try{i=t(l,a),pf(e,n,i)}catch(R){Jr(e,n,R)}}function pf(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){mf(e,n,a)},function(a){return Jr(e,n,a)}):mf(e,n,t)}function mf(e,n,t){n.status="fulfilled",n.value=t,gf(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,hf(e,t)))}function Jr(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,gf(n),n=n.next;while(n!==a)}e.action=null}function gf(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function yf(e,n){return n}function bf(e,n){if(ce){var t=Ae.formState;if(t!==null){e:{var a=te;if(ce){if(Re){n:{for(var l=Re,i=Tn;l.nodeType!==8;){if(!i){l=null;break n}if(l=Nn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Re=Nn(l.nextSibling),a=l.data==="F!";break e}}xt(a)}a=!1}a&&(n=t[0])}}return t=Fe(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yf,lastRenderedState:n},t.queue=a,t=Uf.bind(null,te,a),a.dispatch=t,a=Xr(!1),i=Fr.bind(null,te,!1,a.queue),a=Fe(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=fg.bind(null,te,l,i,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function vf(e){var n=Le();return xf(n,xe,e)}function xf(e,n,t){if(n=Yr(e,n,yf)[0],e=Ui(et)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Sl(n)}catch(c){throw c===Na?Ti:c}else a=n;n=Le();var l=n.queue,i=l.dispatch;return t!==n.memoizedState&&(te.flags|=2048,ja(9,{destroy:void 0},dg.bind(null,l,t),null)),[a,i,e]}function dg(e,n){e.action=n}function Sf(e){var n=Le(),t=xe;if(t!==null)return xf(n,t,e);Le(),n=n.memoizedState,t=Le();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function ja(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=te.updateQueue,n===null&&(n=zi(),te.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Cf(){return Le().memoizedState}function Gi(e,n,t,a){var l=Fe();te.flags|=e,l.memoizedState=ja(1|n,{destroy:void 0},t,a===void 0?null:a)}function Hi(e,n,t,a){var l=Le();a=a===void 0?null:a;var i=l.memoizedState.inst;xe!==null&&a!==null&&Ur(a,xe.memoizedState.deps)?l.memoizedState=ja(n,i,t,a):(te.flags|=e,l.memoizedState=ja(1|n,i,t,a))}function Ef(e,n){Gi(8390656,8,e,n)}function Zr(e,n){Hi(2048,8,e,n)}function hg(e){te.flags|=4;var n=te.updateQueue;if(n===null)n=zi(),te.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function _f(e){var n=Le().memoizedState;return hg({ref:n,nextImpl:e}),function(){if((pe&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function Af(e,n){return Hi(4,2,e,n)}function Rf(e,n){return Hi(4,4,e,n)}function Tf(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mf(e,n,t){t=t!=null?t.concat([e]):null,Hi(4,4,Tf.bind(null,n,e),t)}function Ir(){}function Nf(e,n){var t=Le();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&Ur(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function wf(e,n){var t=Le();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&Ur(n,a[1]))return a[0];if(a=e(),ta){mt(!0);try{e()}finally{mt(!1)}}return t.memoizedState=[a,n],a}function Kr(e,n,t){return t===void 0||(Wn&1073741824)!==0&&(se&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Dd(),te.lanes|=e,Nt|=e,t)}function Df(e,n,t,a){return dn(t,n)?t:Da.current!==null?(e=Kr(e,t,a),dn(e,n)||(He=!0),e):(Wn&42)===0||(Wn&1073741824)!==0&&(se&261930)===0?(He=!0,e.memoizedState=t):(e=Dd(),te.lanes|=e,Nt|=e,n)}function Of(e,n,t,a,l){var i=q.p;q.p=i!==0&&8>i?i:8;var c=k.T,h={};k.T=h,Fr(e,!1,n,t);try{var v=l(),R=k.S;if(R!==null&&R(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=sg(v,a);Cl(e,n,O,bn(e))}else Cl(e,n,a,bn(e))}catch(z){Cl(e,n,{then:function(){},status:"rejected",reason:z},bn())}finally{q.p=i,c!==null&&h.types!==null&&(c.types=h.types),k.T=c}}function pg(){}function Pr(e,n,t,a){if(e.tag!==5)throw Error(o(476));var l=kf(e).queue;Of(e,l,n,$,t===null?pg:function(){return jf(e),t(a)})}function kf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:$},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jf(e){var n=kf(e);n.next===null&&(n=e.alternate.memoizedState),Cl(e,n.next.queue,{},bn())}function $r(){return Ze(Hl)}function zf(){return Le().memoizedState}function Lf(){return Le().memoizedState}function mg(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=bn();e=Et(t);var a=_t(n,e,t);a!==null&&(sn(a,n,t),yl(a,n,t)),n={cache:Rr()},e.payload=n;return}n=n.return}}function gg(e,n,t){var a=bn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Gf(n,t):(t=mr(e,n,t,a),t!==null&&(sn(t,e,a),Hf(t,n,a)))}function Uf(e,n,t){var a=bn();Cl(e,n,t,a)}function Cl(e,n,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Gf(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var c=n.lastRenderedState,h=i(c,t);if(l.hasEagerState=!0,l.eagerState=h,dn(h,c))return xi(e,n,l,0),Ae===null&&vi(),!1}catch{}finally{}if(t=mr(e,n,l,a),t!==null)return sn(t,e,a),Hf(t,n,a),!0}return!1}function Fr(e,n,t,a){if(a={lane:2,revertLane:ws(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(n)throw Error(o(479))}else n=mr(e,t,a,2),n!==null&&sn(n,e,2)}function Bi(e){var n=e.alternate;return e===te||n!==null&&n===te}function Gf(e,n){Oa=ki=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hf(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Yo(e,t)}}var El={readContext:Ze,use:Li,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};El.useEffectEvent=we;var Bf={readContext:Ze,use:Li,useCallback:function(e,n){return Fe().memoizedState=[e,n===void 0?null:n],e},useContext:Ze,useEffect:Ef,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Gi(4194308,4,Tf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Gi(4194308,4,e,n)},useInsertionEffect:function(e,n){Gi(4,2,e,n)},useMemo:function(e,n){var t=Fe();n=n===void 0?null:n;var a=e();if(ta){mt(!0);try{e()}finally{mt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Fe();if(t!==void 0){var l=t(n);if(ta){mt(!0);try{t(n)}finally{mt(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=gg.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var n=Fe();return e={current:e},n.memoizedState=e},useState:function(e){e=Xr(e);var n=e.queue,t=Uf.bind(null,te,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Ir,useDeferredValue:function(e,n){var t=Fe();return Kr(t,e,n)},useTransition:function(){var e=Xr(!1);return e=Of.bind(null,te,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=te,l=Fe();if(ce){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),Ae===null)throw Error(o(349));(se&127)!==0||rf(a,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Ef(of.bind(null,a,i,e),[e]),a.flags|=2048,ja(9,{destroy:void 0},sf.bind(null,a,i,t,n),null),t},useId:function(){var e=Fe(),n=Ae.identifierPrefix;if(ce){var t=Qn,a=qn;t=(a&~(1<<32-fn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=ji++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=og++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$r,useFormState:bf,useActionState:bf,useOptimistic:function(e){var n=Fe();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Fr.bind(null,te,!0,t),t.dispatch=n,[e,n]},useMemoCache:Qr,useCacheRefresh:function(){return Fe().memoizedState=mg.bind(null,te)},useEffectEvent:function(e){var n=Fe(),t={impl:e};return n.memoizedState=t,function(){if((pe&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}},Wr={readContext:Ze,use:Li,useCallback:Nf,useContext:Ze,useEffect:Zr,useImperativeHandle:Mf,useInsertionEffect:Af,useLayoutEffect:Rf,useMemo:wf,useReducer:Ui,useRef:Cf,useState:function(){return Ui(et)},useDebugValue:Ir,useDeferredValue:function(e,n){var t=Le();return Df(t,xe.memoizedState,e,n)},useTransition:function(){var e=Ui(et)[0],n=Le().memoizedState;return[typeof e=="boolean"?e:Sl(e),n]},useSyncExternalStore:uf,useId:zf,useHostTransitionStatus:$r,useFormState:vf,useActionState:vf,useOptimistic:function(e,n){var t=Le();return df(t,xe,e,n)},useMemoCache:Qr,useCacheRefresh:Lf};Wr.useEffectEvent=_f;var qf={readContext:Ze,use:Li,useCallback:Nf,useContext:Ze,useEffect:Zr,useImperativeHandle:Mf,useInsertionEffect:Af,useLayoutEffect:Rf,useMemo:wf,useReducer:Vr,useRef:Cf,useState:function(){return Vr(et)},useDebugValue:Ir,useDeferredValue:function(e,n){var t=Le();return xe===null?Kr(t,e,n):Df(t,xe.memoizedState,e,n)},useTransition:function(){var e=Vr(et)[0],n=Le().memoizedState;return[typeof e=="boolean"?e:Sl(e),n]},useSyncExternalStore:uf,useId:zf,useHostTransitionStatus:$r,useFormState:Sf,useActionState:Sf,useOptimistic:function(e,n){var t=Le();return xe!==null?df(t,xe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Qr,useCacheRefresh:Lf};qf.useEffectEvent=_f;function es(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ns={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=bn(),l=Et(a);l.payload=n,t!=null&&(l.callback=t),n=_t(e,l,a),n!==null&&(sn(n,e,a),yl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=bn(),l=Et(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=_t(e,l,a),n!==null&&(sn(n,e,a),yl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=bn(),a=Et(t);a.tag=2,n!=null&&(a.callback=n),n=_t(e,a,t),n!==null&&(sn(n,e,t),yl(n,e,t))}};function Qf(e,n,t,a,l,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):n.prototype&&n.prototype.isPureReactComponent?!ol(t,a)||!ol(l,i):!0}function Yf(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ns.enqueueReplaceState(n,n.state,null)}function aa(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function Vf(e){bi(e)}function Xf(e){console.error(e)}function Jf(e){bi(e)}function qi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Zf(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ts(e,n,t){return t=Et(t),t.tag=3,t.payload={element:null},t.callback=function(){qi(e,n)},t}function If(e){return e=Et(e),e.tag=3,e}function Kf(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Zf(n,t,a)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Zf(n,t,a),typeof l!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function yg(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Ra(n,t,l,!0),t=pn.current,t!==null){switch(t.tag){case 31:case 13:return Mn===null?Wi():t.alternate===null&&De===0&&(De=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Mi?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Ts(e,a,l)),!1;case 22:return t.flags|=65536,a===Mi?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Ts(e,a,l)),!1}throw Error(o(435,t.tag))}return Ts(e,a,l),Wi(),!1}if(ce)return n=pn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==Sr&&(e=Error(o(422),{cause:a}),dl(_n(e,t)))):(a!==Sr&&(n=Error(o(423),{cause:a}),dl(_n(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=_n(a,t),l=ts(e.stateNode,a,l),Or(e,l),De!==4&&(De=2)),!1;var i=Error(o(520),{cause:a});if(i=_n(i,t),Dl===null?Dl=[i]:Dl.push(i),De!==4&&(De=2),n===null)return!0;a=_n(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=ts(t.stateNode,a,e),Or(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wt===null||!wt.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=If(l),Kf(l,e,t,a),Or(t,l),!1}t=t.return}while(t!==null);return!1}var as=Error(o(461)),He=!1;function Ie(e,n,t,a){n.child=e===null?Fc(n,null,t,a):na(n,e.child,t,a)}function Pf(e,n,t,a,l){t=t.render;var i=n.ref;if("ref"in a){var c={};for(var h in a)h!=="ref"&&(c[h]=a[h])}else c=a;return $t(n),a=Gr(e,n,t,c,i,l),h=Hr(),e!==null&&!He?(Br(e,n,l),nt(e,n,l)):(ce&&h&&vr(n),n.flags|=1,Ie(e,n,a,l),n.child)}function $f(e,n,t,a,l){if(e===null){var i=t.type;return typeof i=="function"&&!gr(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,Ff(e,n,i,a,l)):(e=Ci(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!fs(e,l)){var c=i.memoizedProps;if(t=t.compare,t=t!==null?t:ol,t(c,a)&&e.ref===n.ref)return nt(e,n,l)}return n.flags|=1,e=Kn(i,a),e.ref=n.ref,e.return=n,n.child=e}function Ff(e,n,t,a,l){if(e!==null){var i=e.memoizedProps;if(ol(i,a)&&e.ref===n.ref)if(He=!1,n.pendingProps=a=i,fs(e,l))(e.flags&131072)!==0&&(He=!0);else return n.lanes=e.lanes,nt(e,n,l)}return ls(e,n,t,a,l)}function Wf(e,n,t,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,n.child=null;return ed(e,n,i,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(n,i!==null?i.cachePool:null),i!==null?nf(n,i):jr(),tf(n);else return a=n.lanes=536870912,ed(e,n,i!==null?i.baseLanes|t:t,t,a)}else i!==null?(Ri(n,i.cachePool),nf(n,i),Rt(),n.memoizedState=null):(e!==null&&Ri(n,null),jr(),Rt());return Ie(e,n,l,t),n.child}function _l(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ed(e,n,t,a,l){var i=Mr();return i=i===null?null:{parent:Ue._currentValue,pool:i},n.memoizedState={baseLanes:t,cachePool:i},e!==null&&Ri(n,null),jr(),tf(n),e!==null&&Ra(e,n,a,!0),n.childLanes=l,null}function Qi(e,n){return n=Vi({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function nd(e,n,t){return na(n,e.child,null,t),e=Qi(n,n.pendingProps),e.flags|=2,mn(n),n.memoizedState=null,e}function bg(e,n,t){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ce){if(a.mode==="hidden")return e=Qi(n,a),n.lanes=536870912,_l(null,e);if(Lr(n),(e=Re)?(e=hh(e,Tn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:bt!==null?{id:qn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},t=Uc(e),t.return=n,n.child=t,Je=n,Re=null)):e=null,e===null)throw xt(n);return n.lanes=536870912,null}return Qi(n,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Lr(n),l)if(n.flags&256)n.flags&=-257,n=nd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(o(558));else if(He||Ra(e,n,t,!1),l=(t&e.childLanes)!==0,He||l){if(a=Ae,a!==null&&(c=Vo(a,t),c!==0&&c!==i.retryLane))throw i.retryLane=c,Zt(e,c),sn(a,e,c),as;Wi(),n=nd(e,n,t)}else e=i.treeContext,Re=Nn(c.nextSibling),Je=n,ce=!0,vt=null,Tn=!1,e!==null&&Bc(n,e),n=Qi(n,a),n.flags|=4096;return n}return e=Kn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Yi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function ls(e,n,t,a,l){return $t(n),t=Gr(e,n,t,a,void 0,l),a=Hr(),e!==null&&!He?(Br(e,n,l),nt(e,n,l)):(ce&&a&&vr(n),n.flags|=1,Ie(e,n,t,l),n.child)}function td(e,n,t,a,l,i){return $t(n),n.updateQueue=null,t=lf(n,a,t,l),af(e),a=Hr(),e!==null&&!He?(Br(e,n,i),nt(e,n,i)):(ce&&a&&vr(n),n.flags|=1,Ie(e,n,t,i),n.child)}function ad(e,n,t,a,l){if($t(n),n.stateNode===null){var i=Ca,c=t.contextType;typeof c=="object"&&c!==null&&(i=Ze(c)),i=new t(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ns,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},wr(n),c=t.contextType,i.context=typeof c=="object"&&c!==null?Ze(c):Ca,i.state=n.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(es(n,t,c,a),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&ns.enqueueReplaceState(i,i.state,null),vl(n,a,i,l),bl(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){i=n.stateNode;var h=n.memoizedProps,v=aa(t,h);i.props=v;var R=i.context,O=t.contextType;c=Ca,typeof O=="object"&&O!==null&&(c=Ze(O));var z=t.getDerivedStateFromProps;O=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=n.pendingProps!==h,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||R!==c)&&Yf(n,i,a,c),Ct=!1;var T=n.memoizedState;i.state=T,vl(n,a,i,l),bl(),R=n.memoizedState,h||T!==R||Ct?(typeof z=="function"&&(es(n,t,z,a),R=n.memoizedState),(v=Ct||Qf(n,t,v,a,T,R,c))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=R),i.props=a,i.state=R,i.context=c,a=v):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Dr(e,n),c=n.memoizedProps,O=aa(t,c),i.props=O,z=n.pendingProps,T=i.context,R=t.contextType,v=Ca,typeof R=="object"&&R!==null&&(v=Ze(R)),h=t.getDerivedStateFromProps,(R=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==z||T!==v)&&Yf(n,i,a,v),Ct=!1,T=n.memoizedState,i.state=T,vl(n,a,i,l),bl();var N=n.memoizedState;c!==z||T!==N||Ct||e!==null&&e.dependencies!==null&&_i(e.dependencies)?(typeof h=="function"&&(es(n,t,h,a),N=n.memoizedState),(O=Ct||Qf(n,t,O,a,T,N,v)||e!==null&&e.dependencies!==null&&_i(e.dependencies))?(R||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,N,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,N,v)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=N),i.props=a,i.state=N,i.context=v,a=O):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(n.flags|=1024),a=!1)}return i=a,Yi(e,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&a?(n.child=na(n,e.child,null,l),n.child=na(n,null,t,l)):Ie(e,n,t,l),n.memoizedState=i.state,e=n.child):e=nt(e,n,l),e}function ld(e,n,t,a){return Kt(),n.flags|=256,Ie(e,n,t,a),n.child}var is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function us(e){return{baseLanes:e,cachePool:Jc()}}function rs(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=yn),e}function id(e,n,t){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),c&&(l=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,e===null){if(ce){if(l?At(n):Rt(),(e=Re)?(e=hh(e,Tn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:bt!==null?{id:qn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},t=Uc(e),t.return=n,n.child=t,Je=n,Re=null)):e=null,e===null)throw xt(n);return Ys(e)?n.lanes=32:n.lanes=536870912,null}var h=a.children;return a=a.fallback,l?(Rt(),l=n.mode,h=Vi({mode:"hidden",children:h},l),a=It(a,l,t,null),h.return=n,a.return=n,h.sibling=a,n.child=h,a=n.child,a.memoizedState=us(t),a.childLanes=rs(e,c,t),n.memoizedState=is,_l(null,a)):(At(n),ss(n,h))}var v=e.memoizedState;if(v!==null&&(h=v.dehydrated,h!==null)){if(i)n.flags&256?(At(n),n.flags&=-257,n=os(e,n,t)):n.memoizedState!==null?(Rt(),n.child=e.child,n.flags|=128,n=null):(Rt(),h=a.fallback,l=n.mode,a=Vi({mode:"visible",children:a.children},l),h=It(h,l,t,null),h.flags|=2,a.return=n,h.return=n,a.sibling=h,n.child=a,na(n,e.child,null,t),a=n.child,a.memoizedState=us(t),a.childLanes=rs(e,c,t),n.memoizedState=is,n=_l(null,a));else if(At(n),Ys(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var R=c.dgst;c=R,a=Error(o(419)),a.stack="",a.digest=c,dl({value:a,source:null,stack:null}),n=os(e,n,t)}else if(He||Ra(e,n,t,!1),c=(t&e.childLanes)!==0,He||c){if(c=Ae,c!==null&&(a=Vo(c,t),a!==0&&a!==v.retryLane))throw v.retryLane=a,Zt(e,a),sn(c,e,a),as;Qs(h)||Wi(),n=os(e,n,t)}else Qs(h)?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,Re=Nn(h.nextSibling),Je=n,ce=!0,vt=null,Tn=!1,e!==null&&Bc(n,e),n=ss(n,a.children),n.flags|=4096);return n}return l?(Rt(),h=a.fallback,l=n.mode,v=e.child,R=v.sibling,a=Kn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,R!==null?h=Kn(R,h):(h=It(h,l,t,null),h.flags|=2),h.return=n,a.return=n,a.sibling=h,n.child=a,_l(null,a),a=n.child,h=e.child.memoizedState,h===null?h=us(t):(l=h.cachePool,l!==null?(v=Ue._currentValue,l=l.parent!==v?{parent:v,pool:v}:l):l=Jc(),h={baseLanes:h.baseLanes|t,cachePool:l}),a.memoizedState=h,a.childLanes=rs(e,c,t),n.memoizedState=is,_l(e.child,a)):(At(n),t=e.child,e=t.sibling,t=Kn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(c=n.deletions,c===null?(n.deletions=[e],n.flags|=16):c.push(e)),n.child=t,n.memoizedState=null,t)}function ss(e,n){return n=Vi({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Vi(e,n){return e=hn(22,e,null,n),e.lanes=0,e}function os(e,n,t){return na(n,e.child,null,t),e=ss(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ud(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),_r(e.return,n,t)}function cs(e,n,t,a,l,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:i}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=l,c.treeForkCount=i)}function rd(e,n,t){var a=n.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var c=ze.current,h=(c&2)!==0;if(h?(c=c&1|2,n.flags|=128):c&=1,Q(ze,c),Ie(e,n,a,t),a=ce?fl:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,t,n);else if(e.tag===19)ud(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Oi(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),cs(n,!1,l,t,i,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Oi(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}cs(n,!0,t,null,i,a);break;case"together":cs(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function nt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ra(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,t=Kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function fs(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_i(e)))}function vg(e,n,t){switch(n.tag){case 3:$e(n,n.stateNode.containerInfo),St(n,Ue,e.memoizedState.cache),Kt();break;case 27:case 5:Pa(n);break;case 4:$e(n,n.stateNode.containerInfo);break;case 10:St(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lr(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(At(n),n.flags|=128,null):(t&n.child.childLanes)!==0?id(e,n,t):(At(n),e=nt(e,n,t),e!==null?e.sibling:null);At(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Ra(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return rd(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Q(ze,ze.current),a)break;return null;case 22:return n.lanes=0,Wf(e,n,t,n.pendingProps);case 24:St(n,Ue,e.memoizedState.cache)}return nt(e,n,t)}function sd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)He=!0;else{if(!fs(e,t)&&(n.flags&128)===0)return He=!1,vg(e,n,t);He=(e.flags&131072)!==0}else He=!1,ce&&(n.flags&1048576)!==0&&Hc(n,fl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Wt(n.elementType),n.type=e,typeof e=="function")gr(e)?(a=aa(e,a),n.tag=1,n=ad(null,n,e,a,t)):(n.tag=0,n=ls(null,n,e,a,t));else{if(e!=null){var l=e.$$typeof;if(l===F){n.tag=11,n=Pf(null,n,e,a,t);break e}else if(l===P){n.tag=14,n=$f(null,n,e,a,t);break e}}throw n=Xn(e)||e,Error(o(306,n,""))}}return n;case 0:return ls(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=aa(a,n.pendingProps),ad(e,n,a,l,t);case 3:e:{if($e(n,n.stateNode.containerInfo),e===null)throw Error(o(387));a=n.pendingProps;var i=n.memoizedState;l=i.element,Dr(e,n),vl(n,a,null,t);var c=n.memoizedState;if(a=c.cache,St(n,Ue,a),a!==i.cache&&Ar(n,[Ue],t,!0),bl(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=ld(e,n,a,t);break e}else if(a!==l){l=_n(Error(o(424)),n),dl(l),n=ld(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Nn(e.firstChild),Je=n,ce=!0,vt=null,Tn=!0,t=Fc(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Kt(),a===l){n=nt(e,n,t);break e}Ie(e,n,a,t)}n=n.child}return n;case 26:return Yi(e,n),e===null?(t=vh(n.type,null,n.pendingProps,null))?n.memoizedState=t:ce||(t=n.type,e=n.pendingProps,a=uu(le.current).createElement(t),a[Xe]=n,a[nn]=e,Ke(a,t,e),Qe(a),n.stateNode=a):n.memoizedState=vh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pa(n),e===null&&ce&&(a=n.stateNode=gh(n.type,n.pendingProps,le.current),Je=n,Tn=!0,l=Re,jt(n.type)?(Vs=l,Re=Nn(a.firstChild)):Re=l),Ie(e,n,n.pendingProps.children,t),Yi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ce&&((l=a=Re)&&(a=Kg(a,n.type,n.pendingProps,Tn),a!==null?(n.stateNode=a,Je=n,Re=Nn(a.firstChild),Tn=!1,l=!0):l=!1),l||xt(n)),Pa(n),l=n.type,i=n.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,Hs(l,i)?a=null:c!==null&&Hs(l,c)&&(n.flags|=32),n.memoizedState!==null&&(l=Gr(e,n,cg,null,null,t),Hl._currentValue=l),Yi(e,n),Ie(e,n,a,t),n.child;case 6:return e===null&&ce&&((e=t=Re)&&(t=Pg(t,n.pendingProps,Tn),t!==null?(n.stateNode=t,Je=n,Re=null,e=!0):e=!1),e||xt(n)),null;case 13:return id(e,n,t);case 4:return $e(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=na(n,null,a,t):Ie(e,n,a,t),n.child;case 11:return Pf(e,n,n.type,n.pendingProps,t);case 7:return Ie(e,n,n.pendingProps,t),n.child;case 8:return Ie(e,n,n.pendingProps.children,t),n.child;case 12:return Ie(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,St(n,n.type,a.value),Ie(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,$t(n),l=Ze(l),a=a(l),n.flags|=1,Ie(e,n,a,t),n.child;case 14:return $f(e,n,n.type,n.pendingProps,t);case 15:return Ff(e,n,n.type,n.pendingProps,t);case 19:return rd(e,n,t);case 31:return bg(e,n,t);case 22:return Wf(e,n,t,n.pendingProps);case 24:return $t(n),a=Ze(Ue),e===null?(l=Mr(),l===null&&(l=Ae,i=Rr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),n.memoizedState={parent:a,cache:l},wr(n),St(n,Ue,l)):((e.lanes&t)!==0&&(Dr(e,n),vl(n,null,null,t),bl()),l=e.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),St(n,Ue,a)):(a=i.cache,St(n,Ue,a),a!==l.cache&&Ar(n,[Ue],t,!0))),Ie(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function tt(e){e.flags|=4}function ds(e,n,t,a,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(zd())e.flags|=8192;else throw ea=Mi,Nr}else e.flags&=-16777217}function od(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_h(n))if(zd())e.flags|=8192;else throw ea=Mi,Nr}function Xi(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?qo():536870912,e.lanes|=n,Ga|=n)}function Al(e,n){if(!ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function xg(e,n,t){var a=n.pendingProps;switch(xr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(n),null;case 1:return Te(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fn(Ue),je(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Aa(n)?tt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cr())),Te(n),null;case 26:var l=n.type,i=n.memoizedState;return e===null?(tt(n),i!==null?(Te(n),od(n,i)):(Te(n),ds(n,l,null,a,t))):i?i!==e.memoizedState?(tt(n),Te(n),od(n,i)):(Te(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&tt(n),Te(n),ds(n,l,e,a,t)),null;case 27:if(ti(n),t=le.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&tt(n);else{if(!a){if(n.stateNode===null)throw Error(o(166));return Te(n),null}e=X.current,Aa(n)?qc(n):(e=gh(l,a,t),n.stateNode=e,tt(n))}return Te(n),null;case 5:if(ti(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&tt(n);else{if(!a){if(n.stateNode===null)throw Error(o(166));return Te(n),null}if(i=X.current,Aa(n))qc(n);else{var c=uu(le.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(l,{is:a.is}):c.createElement(l)}}i[Xe]=n,i[nn]=a;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=i;e:switch(Ke(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&tt(n)}}return Te(n),ds(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&tt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(o(166));if(e=le.current,Aa(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=Je,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Xe]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||ih(e.nodeValue,t)),e||xt(n,!0)}else e=uu(e).createTextNode(a),e[Xe]=n,n.stateNode=e}return Te(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=Aa(n),t!==null){if(e===null){if(!a)throw Error(o(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Xe]=n}else Kt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Te(n),e=!1}else t=Cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(mn(n),n):(mn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return Te(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Aa(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Xe]=n}else Kt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Te(n),l=!1}else l=Cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(mn(n),n):(mn(n),null)}return mn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Xi(n,n.updateQueue),Te(n),null);case 4:return je(),e===null&&js(n.stateNode.containerInfo),Te(n),null;case 10:return Fn(n.type),Te(n),null;case 19:if(U(ze),a=n.memoizedState,a===null)return Te(n),null;if(l=(n.flags&128)!==0,i=a.rendering,i===null)if(l)Al(a,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=Oi(e),i!==null){for(n.flags|=128,Al(a,!1),e=i.updateQueue,n.updateQueue=e,Xi(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Lc(t,e),t=t.sibling;return Q(ze,ze.current&1|2),ce&&Pn(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&on()>Pi&&(n.flags|=128,l=!0,Al(a,!1),n.lanes=4194304)}else{if(!l)if(e=Oi(i),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Xi(n,e),Al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ce)return Te(n),null}else 2*on()-a.renderingStartTime>Pi&&t!==536870912&&(n.flags|=128,l=!0,Al(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(e=a.last,e!==null?e.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=on(),e.sibling=null,t=ze.current,Q(ze,l?t&1|2:t&1),ce&&Pn(n,a.treeForkCount),e):(Te(n),null);case 22:case 23:return mn(n),zr(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Te(n),n.subtreeFlags&6&&(n.flags|=8192)):Te(n),t=n.updateQueue,t!==null&&Xi(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&U(Ft),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Fn(Ue),Te(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function Sg(e,n){switch(xr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fn(Ue),je(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ti(n),null;case 31:if(n.memoizedState!==null){if(mn(n),n.alternate===null)throw Error(o(340));Kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(mn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(ze),null;case 4:return je(),null;case 10:return Fn(n.type),null;case 22:case 23:return mn(n),zr(),e!==null&&U(Ft),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fn(Ue),null;case 25:return null;default:return null}}function cd(e,n){switch(xr(n),n.tag){case 3:Fn(Ue),je();break;case 26:case 27:case 5:ti(n);break;case 4:je();break;case 31:n.memoizedState!==null&&mn(n);break;case 13:mn(n);break;case 19:U(ze);break;case 10:Fn(n.type);break;case 22:case 23:mn(n),zr(),e!==null&&U(Ft);break;case 24:Fn(Ue)}}function Rl(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var i=t.create,c=t.inst;a=i(),c.destroy=a}t=t.next}while(t!==l)}}catch(h){ye(n,n.return,h)}}function Tt(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var c=a.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,l=n;var v=t,R=h;try{R()}catch(O){ye(l,v,O)}}}a=a.next}while(a!==i)}}catch(O){ye(n,n.return,O)}}function fd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{ef(n,t)}catch(a){ye(e,e.return,a)}}}function dd(e,n,t){t.props=aa(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ye(e,n,a)}}function Tl(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){ye(e,n,l)}}function Yn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){ye(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){ye(e,n,l)}else t.current=null}function hd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){ye(e,e.return,l)}}function hs(e,n,t){try{var a=e.stateNode;Yg(a,e.type,t,n),a[nn]=n}catch(l){ye(e,e.return,l)}}function pd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jt(e.type)||e.tag===4}function ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Zn));else if(a!==4&&(a===27&&jt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(ms(e,n,t),e=e.sibling;e!==null;)ms(e,n,t),e=e.sibling}function Ji(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&jt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ji(e,n,t),e=e.sibling;e!==null;)Ji(e,n,t),e=e.sibling}function md(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Ke(n,a,t),n[Xe]=e,n[nn]=t}catch(i){ye(e,e.return,i)}}var at=!1,Be=!1,gs=!1,gd=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Cg(e,n){if(e=e.containerInfo,Us=hu,e=Tc(e),or(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var c=0,h=-1,v=-1,R=0,O=0,z=e,T=null;n:for(;;){for(var N;z!==t||l!==0&&z.nodeType!==3||(h=c+l),z!==i||a!==0&&z.nodeType!==3||(v=c+a),z.nodeType===3&&(c+=z.nodeValue.length),(N=z.firstChild)!==null;)T=z,z=N;for(;;){if(z===e)break n;if(T===t&&++R===l&&(h=c),T===i&&++O===a&&(v=c),(N=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=N}t=h===-1||v===-1?null:{start:h,end:v}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gs={focusedElem:e,selectionRange:t},hu=!1,Ye=n;Ye!==null;)if(n=Ye,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ye=e;else for(;Ye!==null;){switch(n=Ye,i=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,l=i.memoizedProps,i=i.memoizedState,a=t.stateNode;try{var Y=aa(t.type,l);e=a.getSnapshotBeforeUpdate(Y,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(K){ye(t,t.return,K)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)qs(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,Ye=e;break}Ye=n.return}}function yd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:it(e,t),a&4&&Rl(5,t);break;case 1:if(it(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){ye(t,t.return,c)}else{var l=aa(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ye(t,t.return,c)}}a&64&&fd(t),a&512&&Tl(t,t.return);break;case 3:if(it(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{ef(e,n)}catch(c){ye(t,t.return,c)}}break;case 27:n===null&&a&4&&md(t);case 26:case 5:it(e,t),n===null&&a&4&&hd(t),a&512&&Tl(t,t.return);break;case 12:it(e,t);break;case 31:it(e,t),a&4&&xd(e,t);break;case 13:it(e,t),a&4&&Sd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Dg.bind(null,t),$g(e,t))));break;case 22:if(a=t.memoizedState!==null||at,!a){n=n!==null&&n.memoizedState!==null||Be,l=at;var i=Be;at=a,(Be=n)&&!i?ut(e,t,(t.subtreeFlags&8772)!==0):it(e,t),at=l,Be=i}break;case 30:break;default:it(e,t)}}function bd(e){var n=e.alternate;n!==null&&(e.alternate=null,bd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ju(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,an=!1;function lt(e,n,t){for(t=t.child;t!==null;)vd(e,n,t),t=t.sibling}function vd(e,n,t){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount($a,t)}catch{}switch(t.tag){case 26:Be||Yn(t,n),lt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Be||Yn(t,n);var a=Me,l=an;jt(t.type)&&(Me=t.stateNode,an=!1),lt(e,n,t),Ll(t.stateNode),Me=a,an=l;break;case 5:Be||Yn(t,n);case 6:if(a=Me,l=an,Me=null,lt(e,n,t),Me=a,an=l,Me!==null)if(an)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(t.stateNode)}catch(i){ye(t,n,i)}else try{Me.removeChild(t.stateNode)}catch(i){ye(t,n,i)}break;case 18:Me!==null&&(an?(e=Me,fh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ja(e)):fh(Me,t.stateNode));break;case 4:a=Me,l=an,Me=t.stateNode.containerInfo,an=!0,lt(e,n,t),Me=a,an=l;break;case 0:case 11:case 14:case 15:Tt(2,t,n),Be||Tt(4,t,n),lt(e,n,t);break;case 1:Be||(Yn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&dd(t,n,a)),lt(e,n,t);break;case 21:lt(e,n,t);break;case 22:Be=(a=Be)||t.memoizedState!==null,lt(e,n,t),Be=a;break;default:lt(e,n,t)}}function xd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ja(e)}catch(t){ye(n,n.return,t)}}}function Sd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ja(e)}catch(t){ye(n,n.return,t)}}function Eg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gd),n;default:throw Error(o(435,e.tag))}}function Zi(e,n){var t=Eg(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var l=Og.bind(null,e,a);a.then(l,l)}})}function ln(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],i=e,c=n,h=c;e:for(;h!==null;){switch(h.tag){case 27:if(jt(h.type)){Me=h.stateNode,an=!1;break e}break;case 5:Me=h.stateNode,an=!1;break e;case 3:case 4:Me=h.stateNode.containerInfo,an=!0;break e}h=h.return}if(Me===null)throw Error(o(160));vd(i,c,l),Me=null,an=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cd(n,e),n=n.sibling}var jn=null;function Cd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ln(n,e),un(e),a&4&&(Tt(3,e,e.return),Rl(3,e),Tt(5,e,e.return));break;case 1:ln(n,e),un(e),a&512&&(Be||t===null||Yn(t,t.return)),a&64&&at&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=jn;if(ln(n,e),un(e),a&512&&(Be||t===null||Yn(t,t.return)),a&4){var i=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[el]||i[Xe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Ke(i,a,t),i[Xe]=e,Qe(i),a=i;break e;case"link":var c=Ch("link","href",l).get(a+(t.href||""));if(c){for(var h=0;h<c.length;h++)if(i=c[h],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(h,1);break n}}i=l.createElement(a),Ke(i,a,t),l.head.appendChild(i);break;case"meta":if(c=Ch("meta","content",l).get(a+(t.content||""))){for(h=0;h<c.length;h++)if(i=c[h],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(h,1);break n}}i=l.createElement(a),Ke(i,a,t),l.head.appendChild(i);break;default:throw Error(o(468,a))}i[Xe]=e,Qe(i),a=i}e.stateNode=a}else Eh(l,e.type,e.stateNode);else e.stateNode=Sh(l,a,e.memoizedProps);else i!==a?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,a===null?Eh(l,e.type,e.stateNode):Sh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&hs(e,e.memoizedProps,t.memoizedProps)}break;case 27:ln(n,e),un(e),a&512&&(Be||t===null||Yn(t,t.return)),t!==null&&a&4&&hs(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ln(n,e),un(e),a&512&&(Be||t===null||Yn(t,t.return)),e.flags&32){l=e.stateNode;try{ma(l,"")}catch(Y){ye(e,e.return,Y)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,hs(e,l,t!==null?t.memoizedProps:l)),a&1024&&(gs=!0);break;case 6:if(ln(n,e),un(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(Y){ye(e,e.return,Y)}}break;case 3:if(ou=null,l=jn,jn=ru(n.containerInfo),ln(n,e),jn=l,un(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ja(n.containerInfo)}catch(Y){ye(e,e.return,Y)}gs&&(gs=!1,Ed(e));break;case 4:a=jn,jn=ru(e.stateNode.containerInfo),ln(n,e),un(e),jn=a;break;case 12:ln(n,e),un(e);break;case 31:ln(n,e),un(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zi(e,a)));break;case 13:ln(n,e),un(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ki=on()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zi(e,a)));break;case 22:l=e.memoizedState!==null;var v=t!==null&&t.memoizedState!==null,R=at,O=Be;if(at=R||l,Be=O||v,ln(n,e),Be=O,at=R,un(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||v||at||Be||la(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){v=t=n;try{if(i=v.stateNode,l)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=v.stateNode;var z=v.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null;h.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Y){ye(v,v.return,Y)}}}else if(n.tag===6){if(t===null){v=n;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(Y){ye(v,v.return,Y)}}}else if(n.tag===18){if(t===null){v=n;try{var N=v.stateNode;l?dh(N,!0):dh(v.stateNode,!1)}catch(Y){ye(v,v.return,Y)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Zi(e,t))));break;case 19:ln(n,e),un(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zi(e,a)));break;case 30:break;case 21:break;default:ln(n,e),un(e)}}function un(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(pd(a)){t=a;break}a=a.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var l=t.stateNode,i=ps(e);Ji(e,i,l);break;case 5:var c=t.stateNode;t.flags&32&&(ma(c,""),t.flags&=-33);var h=ps(e);Ji(e,h,c);break;case 3:case 4:var v=t.stateNode.containerInfo,R=ps(e);ms(e,R,v);break;default:throw Error(o(161))}}catch(O){ye(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ed(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function it(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)yd(e,n.alternate,n),n=n.sibling}function la(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Tt(4,n,n.return),la(n);break;case 1:Yn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&dd(n,n.return,t),la(n);break;case 27:Ll(n.stateNode);case 26:case 5:Yn(n,n.return),la(n);break;case 22:n.memoizedState===null&&la(n);break;case 30:la(n);break;default:la(n)}e=e.sibling}}function ut(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,i=n,c=i.flags;switch(i.tag){case 0:case 11:case 15:ut(l,i,t),Rl(4,i);break;case 1:if(ut(l,i,t),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){ye(a,a.return,R)}if(a=i,l=a.updateQueue,l!==null){var h=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Wc(v[l],h)}catch(R){ye(a,a.return,R)}}t&&c&64&&fd(i),Tl(i,i.return);break;case 27:md(i);case 26:case 5:ut(l,i,t),t&&a===null&&c&4&&hd(i),Tl(i,i.return);break;case 12:ut(l,i,t);break;case 31:ut(l,i,t),t&&c&4&&xd(l,i);break;case 13:ut(l,i,t),t&&c&4&&Sd(l,i);break;case 22:i.memoizedState===null&&ut(l,i,t),Tl(i,i.return);break;case 30:break;default:ut(l,i,t)}n=n.sibling}}function ys(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&hl(t))}function bs(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&hl(e))}function zn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_d(e,n,t,a),n=n.sibling}function _d(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n,t,a),l&2048&&Rl(9,n);break;case 1:zn(e,n,t,a);break;case 3:zn(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&hl(e)));break;case 12:if(l&2048){zn(e,n,t,a),e=n.stateNode;try{var i=n.memoizedProps,c=i.id,h=i.onPostCommit;typeof h=="function"&&h(c,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ye(n,n.return,v)}}else zn(e,n,t,a);break;case 31:zn(e,n,t,a);break;case 13:zn(e,n,t,a);break;case 23:break;case 22:i=n.stateNode,c=n.alternate,n.memoizedState!==null?i._visibility&2?zn(e,n,t,a):Ml(e,n):i._visibility&2?zn(e,n,t,a):(i._visibility|=2,za(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),l&2048&&ys(c,n);break;case 24:zn(e,n,t,a),l&2048&&bs(n.alternate,n);break;default:zn(e,n,t,a)}}function za(e,n,t,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=e,c=n,h=t,v=a,R=c.flags;switch(c.tag){case 0:case 11:case 15:za(i,c,h,v,l),Rl(8,c);break;case 23:break;case 22:var O=c.stateNode;c.memoizedState!==null?O._visibility&2?za(i,c,h,v,l):Ml(i,c):(O._visibility|=2,za(i,c,h,v,l)),l&&R&2048&&ys(c.alternate,c);break;case 24:za(i,c,h,v,l),l&&R&2048&&bs(c.alternate,c);break;default:za(i,c,h,v,l)}n=n.sibling}}function Ml(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Ml(t,a),l&2048&&ys(a.alternate,a);break;case 24:Ml(t,a),l&2048&&bs(a.alternate,a);break;default:Ml(t,a)}n=n.sibling}}var Nl=8192;function La(e,n,t){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)Ad(e,n,t),e=e.sibling}function Ad(e,n,t){switch(e.tag){case 26:La(e,n,t),e.flags&Nl&&e.memoizedState!==null&&o0(t,jn,e.memoizedState,e.memoizedProps);break;case 5:La(e,n,t);break;case 3:case 4:var a=jn;jn=ru(e.stateNode.containerInfo),La(e,n,t),jn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Nl,Nl=16777216,La(e,n,t),Nl=a):La(e,n,t));break;default:La(e,n,t)}}function Rd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ye=a,Md(a,e)}Rd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Td(e),e=e.sibling}function Td(e){switch(e.tag){case 0:case 11:case 15:wl(e),e.flags&2048&&Tt(9,e,e.return);break;case 3:wl(e);break;case 12:wl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ii(e)):wl(e);break;default:wl(e)}}function Ii(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ye=a,Md(a,e)}Rd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Tt(8,n,n.return),Ii(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Ii(n));break;default:Ii(n)}e=e.sibling}}function Md(e,n){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:Tt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:hl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ye=a;else e:for(t=e;Ye!==null;){a=Ye;var l=a.sibling,i=a.return;if(bd(a),a===t){Ye=null;break e}if(l!==null){l.return=i,Ye=l;break e}Ye=i}}}var _g={getCacheForType:function(e){var n=Ze(Ue),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Ze(Ue).controller.signal}},Ag=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ae=null,ie=null,se=0,ge=0,gn=null,Mt=!1,Ua=!1,vs=!1,rt=0,De=0,Nt=0,ia=0,xs=0,yn=0,Ga=0,Dl=null,rn=null,Ss=!1,Ki=0,Nd=0,Pi=1/0,$i=null,wt=null,qe=0,Dt=null,Ha=null,st=0,Cs=0,Es=null,wd=null,Ol=0,_s=null;function bn(){return(pe&2)!==0&&se!==0?se&-se:k.T!==null?ws():Xo()}function Dd(){if(yn===0)if((se&536870912)===0||ce){var e=ii;ii<<=1,(ii&3932160)===0&&(ii=262144),yn=e}else yn=536870912;return e=pn.current,e!==null&&(e.flags|=32),yn}function sn(e,n,t){(e===Ae&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Ba(e,0),Ot(e,se,yn,!1)),Wa(e,t),((pe&2)===0||e!==Ae)&&(e===Ae&&((pe&2)===0&&(ia|=t),De===4&&Ot(e,se,yn,!1)),Vn(e))}function Od(e,n,t){if((pe&6)!==0)throw Error(o(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Fa(e,n),l=a?Mg(e,n):Rs(e,n,!0),i=a;do{if(l===0){Ua&&!a&&Ot(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!Rg(t)){l=Rs(e,n,!1),i=!1;continue}if(l===2){if(i=n,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;e:{var h=e;l=Dl;var v=h.current.memoizedState.isDehydrated;if(v&&(Ba(h,c).flags|=256),c=Rs(h,c,!1),c!==2){if(vs&&!v){h.errorRecoveryDisabledLanes|=i,ia|=i,l=4;break e}i=rn,rn=l,i!==null&&(rn===null?rn=i:rn.push.apply(rn,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){Ba(e,0),Ot(e,n,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Ot(a,n,yn,!Mt);break e;case 2:rn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(l=Ki+300-on(),10<l)){if(Ot(a,n,yn,!Mt),ri(a,0,!0)!==0)break e;st=n,a.timeoutHandle=oh(kd.bind(null,a,t,rn,$i,Ss,n,yn,ia,Ga,Mt,i,"Throttled",-0,0),l);break e}kd(a,t,rn,$i,Ss,n,yn,ia,Ga,Mt,i,null,-0,0)}}break}while(!0);Vn(e)}function kd(e,n,t,a,l,i,c,h,v,R,O,z,T,N){if(e.timeoutHandle=-1,z=n.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zn},Ad(n,i,z);var Y=(i&62914560)===i?Ki-on():(i&4194048)===i?Nd-on():0;if(Y=c0(z,Y),Y!==null){st=i,e.cancelPendingCommit=Y(qd.bind(null,e,n,i,t,a,l,c,h,v,O,z,null,T,N)),Ot(e,i,c,!R);return}}qd(e,n,i,t,a,l,c,h,v)}function Rg(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],i=l.getSnapshot;l=l.value;try{if(!dn(i(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ot(e,n,t,a){n&=~xs,n&=~ia,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var i=31-fn(l),c=1<<i;a[i]=-1,l&=~c}t!==0&&Qo(e,t,n)}function Fi(){return(pe&6)===0?(kl(0),!1):!0}function As(){if(ie!==null){if(ge===0)var e=ie.return;else e=ie,$n=Pt=null,qr(e),wa=null,ml=0,e=ie;for(;e!==null;)cd(e.alternate,e),e=e.return;ie=null}}function Ba(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Jg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),st=0,As(),Ae=e,ie=t=Kn(e.current,null),se=n,ge=0,gn=null,Mt=!1,Ua=Fa(e,n),vs=!1,Ga=yn=xs=ia=Nt=De=0,rn=Dl=null,Ss=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-fn(a),i=1<<l;n|=e[l],a&=~i}return rt=n,vi(),t}function jd(e,n){te=null,k.H=El,n===Na||n===Ti?(n=Kc(),ge=3):n===Nr?(n=Kc(),ge=4):ge=n===as?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gn=n,ie===null&&(De=1,qi(e,_n(n,e.current)))}function zd(){var e=pn.current;return e===null?!0:(se&4194048)===se?Mn===null:(se&62914560)===se||(se&536870912)!==0?e===Mn:!1}function Ld(){var e=k.H;return k.H=El,e===null?El:e}function Ud(){var e=k.A;return k.A=_g,e}function Wi(){De=4,Mt||(se&4194048)!==se&&pn.current!==null||(Ua=!0),(Nt&134217727)===0&&(ia&134217727)===0||Ae===null||Ot(Ae,se,yn,!1)}function Rs(e,n,t){var a=pe;pe|=2;var l=Ld(),i=Ud();(Ae!==e||se!==n)&&($i=null,Ba(e,n)),n=!1;var c=De;e:do try{if(ge!==0&&ie!==null){var h=ie,v=gn;switch(ge){case 8:As(),c=6;break e;case 3:case 2:case 9:case 6:pn.current===null&&(n=!0);var R=ge;if(ge=0,gn=null,qa(e,h,v,R),t&&Ua){c=0;break e}break;default:R=ge,ge=0,gn=null,qa(e,h,v,R)}}Tg(),c=De;break}catch(O){jd(e,O)}while(!0);return n&&e.shellSuspendCounter++,$n=Pt=null,pe=a,k.H=l,k.A=i,ie===null&&(Ae=null,se=0,vi()),c}function Tg(){for(;ie!==null;)Gd(ie)}function Mg(e,n){var t=pe;pe|=2;var a=Ld(),l=Ud();Ae!==e||se!==n?($i=null,Pi=on()+500,Ba(e,n)):Ua=Fa(e,n);e:do try{if(ge!==0&&ie!==null){n=ie;var i=gn;n:switch(ge){case 1:ge=0,gn=null,qa(e,n,i,1);break;case 2:case 9:if(Zc(i)){ge=0,gn=null,Hd(n);break}n=function(){ge!==2&&ge!==9||Ae!==e||(ge=7),Vn(e)},i.then(n,n);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Zc(i)?(ge=0,gn=null,Hd(n)):(ge=0,gn=null,qa(e,n,i,7));break;case 5:var c=null;switch(ie.tag){case 26:c=ie.memoizedState;case 5:case 27:var h=ie;if(c?_h(c):h.stateNode.complete){ge=0,gn=null;var v=h.sibling;if(v!==null)ie=v;else{var R=h.return;R!==null?(ie=R,eu(R)):ie=null}break n}}ge=0,gn=null,qa(e,n,i,5);break;case 6:ge=0,gn=null,qa(e,n,i,6);break;case 8:As(),De=6;break e;default:throw Error(o(462))}}Ng();break}catch(O){jd(e,O)}while(!0);return $n=Pt=null,k.H=a,k.A=l,pe=t,ie!==null?0:(Ae=null,se=0,vi(),De)}function Ng(){for(;ie!==null&&!Fp();)Gd(ie)}function Gd(e){var n=sd(e.alternate,e,rt);e.memoizedProps=e.pendingProps,n===null?eu(e):ie=n}function Hd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=td(t,n,n.pendingProps,n.type,void 0,se);break;case 11:n=td(t,n,n.pendingProps,n.type.render,n.ref,se);break;case 5:qr(n);default:cd(t,n),n=ie=Lc(n,rt),n=sd(t,n,rt)}e.memoizedProps=e.pendingProps,n===null?eu(e):ie=n}function qa(e,n,t,a){$n=Pt=null,qr(n),wa=null,ml=0;var l=n.return;try{if(yg(e,l,n,t,se)){De=1,qi(e,_n(t,e.current)),ie=null;return}}catch(i){if(l!==null)throw ie=l,i;De=1,qi(e,_n(t,e.current)),ie=null;return}n.flags&32768?(ce||a===1?e=!0:Ua||(se&536870912)!==0?e=!1:(Mt=e=!0,(a===2||a===9||a===3||a===6)&&(a=pn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Bd(n,e)):eu(n)}function eu(e){var n=e;do{if((n.flags&32768)!==0){Bd(n,Mt);return}e=n.return;var t=xg(n.alternate,n,rt);if(t!==null){ie=t;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);De===0&&(De=5)}function Bd(e,n){do{var t=Sg(e.alternate,e);if(t!==null){t.flags&=32767,ie=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ie=e;return}ie=e=t}while(e!==null);De=6,ie=null}function qd(e,n,t,a,l,i,c,h,v){e.cancelPendingCommit=null;do nu();while(qe!==0);if((pe&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(i=n.lanes|n.childLanes,i|=pr,sm(e,t,i,c,h,v),e===Ae&&(ie=Ae=null,se=0),Ha=n,Dt=e,st=t,Cs=i,Es=l,wd=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kg(ai,function(){return Jd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,l=q.p,q.p=2,c=pe,pe|=4;try{Cg(e,n,t)}finally{pe=c,q.p=l,k.T=a}}qe=1,Qd(),Yd(),Vd()}}function Qd(){if(qe===1){qe=0;var e=Dt,n=Ha,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=k.T,k.T=null;var a=q.p;q.p=2;var l=pe;pe|=4;try{Cd(n,e);var i=Gs,c=Tc(e.containerInfo),h=i.focusedElem,v=i.selectionRange;if(c!==h&&h&&h.ownerDocument&&Rc(h.ownerDocument.documentElement,h)){if(v!==null&&or(h)){var R=v.start,O=v.end;if(O===void 0&&(O=R),"selectionStart"in h)h.selectionStart=R,h.selectionEnd=Math.min(O,h.value.length);else{var z=h.ownerDocument||document,T=z&&z.defaultView||window;if(T.getSelection){var N=T.getSelection(),Y=h.textContent.length,K=Math.min(v.start,Y),Ce=v.end===void 0?K:Math.min(v.end,Y);!N.extend&&K>Ce&&(c=Ce,Ce=K,K=c);var _=Ac(h,K),x=Ac(h,Ce);if(_&&x&&(N.rangeCount!==1||N.anchorNode!==_.node||N.anchorOffset!==_.offset||N.focusNode!==x.node||N.focusOffset!==x.offset)){var A=z.createRange();A.setStart(_.node,_.offset),N.removeAllRanges(),K>Ce?(N.addRange(A),N.extend(x.node,x.offset)):(A.setEnd(x.node,x.offset),N.addRange(A))}}}}for(z=[],N=h;N=N.parentNode;)N.nodeType===1&&z.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<z.length;h++){var j=z[h];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}hu=!!Us,Gs=Us=null}finally{pe=l,q.p=a,k.T=t}}e.current=n,qe=2}}function Yd(){if(qe===2){qe=0;var e=Dt,n=Ha,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=k.T,k.T=null;var a=q.p;q.p=2;var l=pe;pe|=4;try{yd(e,n.alternate,n)}finally{pe=l,q.p=a,k.T=t}}qe=3}}function Vd(){if(qe===4||qe===3){qe=0,Wp();var e=Dt,n=Ha,t=st,a=wd;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?qe=5:(qe=0,Ha=Dt=null,Xd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(wt=null),Vu(t),n=n.stateNode,cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot($a,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=k.T,l=q.p,q.p=2,k.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var h=a[c];i(h.value,{componentStack:h.stack})}}finally{k.T=n,q.p=l}}(st&3)!==0&&nu(),Vn(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===_s?Ol++:(Ol=0,_s=e):Ol=0,kl(0)}}function Xd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,hl(n)))}function nu(){return Qd(),Yd(),Vd(),Jd()}function Jd(){if(qe!==5)return!1;var e=Dt,n=Cs;Cs=0;var t=Vu(st),a=k.T,l=q.p;try{q.p=32>t?32:t,k.T=null,t=Es,Es=null;var i=Dt,c=st;if(qe=0,Ha=Dt=null,st=0,(pe&6)!==0)throw Error(o(331));var h=pe;if(pe|=4,Td(i.current),_d(i,i.current,c,t),pe=h,kl(0,!1),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot($a,i)}catch{}return!0}finally{q.p=l,k.T=a,Xd(e,n)}}function Zd(e,n,t){n=_n(t,n),n=ts(e.stateNode,n,2),e=_t(e,n,2),e!==null&&(Wa(e,2),Vn(e))}function ye(e,n,t){if(e.tag===3)Zd(e,e,t);else for(;n!==null;){if(n.tag===3){Zd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wt===null||!wt.has(a))){e=_n(t,e),t=If(2),a=_t(n,t,2),a!==null&&(Kf(t,a,n,e),Wa(a,2),Vn(a));break}}n=n.return}}function Ts(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Ag;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(vs=!0,l.add(t),e=wg.bind(null,e,n,t),n.then(e,e))}function wg(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ae===e&&(se&t)===t&&(De===4||De===3&&(se&62914560)===se&&300>on()-Ki?(pe&2)===0&&Ba(e,0):xs|=t,Ga===se&&(Ga=0)),Vn(e)}function Id(e,n){n===0&&(n=qo()),e=Zt(e,n),e!==null&&(Wa(e,n),Vn(e))}function Dg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Id(e,t)}function Og(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(n),Id(e,t)}function kg(e,n){return Bu(e,n)}var tu=null,Qa=null,Ms=!1,au=!1,Ns=!1,kt=0;function Vn(e){e!==Qa&&e.next===null&&(Qa===null?tu=Qa=e:Qa=Qa.next=e),au=!0,Ms||(Ms=!0,zg())}function kl(e,n){if(!Ns&&au){Ns=!0;do for(var t=!1,a=tu;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var c=a.suspendedLanes,h=a.pingedLanes;i=(1<<31-fn(42|e)+1)-1,i&=l&~(c&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Fd(a,i))}else i=se,i=ri(a,a===Ae?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Fa(a,i)||(t=!0,Fd(a,i));a=a.next}while(t);Ns=!1}}function jg(){Kd()}function Kd(){au=Ms=!1;var e=0;kt!==0&&Xg()&&(e=kt);for(var n=on(),t=null,a=tu;a!==null;){var l=a.next,i=Pd(a,n);i===0?(a.next=null,t===null?tu=l:t.next=l,l===null&&(Qa=t)):(t=a,(e!==0||(i&3)!==0)&&(au=!0)),a=l}qe!==0&&qe!==5||kl(e),kt!==0&&(kt=0)}function Pd(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-fn(i),h=1<<c,v=l[c];v===-1?((h&t)===0||(h&a)!==0)&&(l[c]=rm(h,n)):v<=n&&(e.expiredLanes|=h),i&=~h}if(n=Ae,t=se,t=ri(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&qu(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Fa(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&qu(a),Vu(t)){case 2:case 8:t=Ho;break;case 32:t=ai;break;case 268435456:t=Bo;break;default:t=ai}return a=$d.bind(null,e),t=Bu(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&qu(a),e.callbackPriority=2,e.callbackNode=null,2}function $d(e,n){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(nu()&&e.callbackNode!==t)return null;var a=se;return a=ri(e,e===Ae?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Od(e,a,n),Pd(e,on()),e.callbackNode!=null&&e.callbackNode===t?$d.bind(null,e):null)}function Fd(e,n){if(nu())return null;Od(e,n,!0)}function zg(){Zg(function(){(pe&6)!==0?Bu(Go,jg):Kd()})}function ws(){if(kt===0){var e=Ta;e===0&&(e=li,li<<=1,(li&261888)===0&&(li=256)),kt=e}return kt}function Wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fi(""+e)}function eh(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Lg(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var i=Wd((l[nn]||null).action),c=a.submitter;c&&(n=(n=c[nn]||null)?Wd(n.formAction):c.getAttribute("formAction"),n!==null&&(i=n,c=null));var h=new mi("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(kt!==0){var v=c?eh(l,c):new FormData(l);Pr(t,{pending:!0,data:v,method:l.method,action:i},null,v)}}else typeof i=="function"&&(h.preventDefault(),v=c?eh(l,c):new FormData(l),Pr(t,{pending:!0,data:v,method:l.method,action:i},i,v))},currentTarget:l}]})}}for(var Ds=0;Ds<hr.length;Ds++){var Os=hr[Ds],Ug=Os.toLowerCase(),Gg=Os[0].toUpperCase()+Os.slice(1);kn(Ug,"on"+Gg)}kn(wc,"onAnimationEnd"),kn(Dc,"onAnimationIteration"),kn(Oc,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(eg,"onTransitionRun"),kn(ng,"onTransitionStart"),kn(tg,"onTransitionCancel"),kn(kc,"onTransitionEnd"),ha("onMouseEnter",["mouseout","mouseover"]),ha("onMouseLeave",["mouseout","mouseover"]),ha("onPointerEnter",["pointerout","pointerover"]),ha("onPointerLeave",["pointerout","pointerover"]),Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl));function nh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var c=a.length-1;0<=c;c--){var h=a[c],v=h.instance,R=h.currentTarget;if(h=h.listener,v!==i&&l.isPropagationStopped())break e;i=h,l.currentTarget=R;try{i(l)}catch(O){bi(O)}l.currentTarget=null,i=v}else for(c=0;c<a.length;c++){if(h=a[c],v=h.instance,R=h.currentTarget,h=h.listener,v!==i&&l.isPropagationStopped())break e;i=h,l.currentTarget=R;try{i(l)}catch(O){bi(O)}l.currentTarget=null,i=v}}}}function ue(e,n){var t=n[Xu];t===void 0&&(t=n[Xu]=new Set);var a=e+"__bubble";t.has(a)||(th(n,e,2,!1),t.add(a))}function ks(e,n,t){var a=0;n&&(a|=4),th(t,e,a,n)}var lu="_reactListening"+Math.random().toString(36).slice(2);function js(e){if(!e[lu]){e[lu]=!0,Io.forEach(function(t){t!=="selectionchange"&&(Hg.has(t)||ks(t,!1,e),ks(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lu]||(n[lu]=!0,ks("selectionchange",!1,n))}}function th(e,n,t,a){switch(Dh(n)){case 2:var l=h0;break;case 8:l=p0;break;default:l=Ks}t=l.bind(null,n,t,e),l=void 0,!er||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function zs(e,n,t,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var h=a.stateNode.containerInfo;if(h===l)break;if(c===4)for(c=a.return;c!==null;){var v=c.tag;if((v===3||v===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;h!==null;){if(c=ca(h),c===null)return;if(v=c.tag,v===5||v===6||v===26||v===27){a=i=c;continue e}h=h.parentNode}}a=a.return}uc(function(){var R=i,O=Fu(t),z=[];e:{var T=jc.get(e);if(T!==void 0){var N=mi,Y=e;switch(e){case"keypress":if(hi(t)===0)break e;case"keydown":case"keyup":N=Om;break;case"focusin":Y="focus",N=lr;break;case"focusout":Y="blur",N=lr;break;case"beforeblur":case"afterblur":N=lr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=zm;break;case wc:case Dc:case Oc:N=Em;break;case kc:N=Um;break;case"scroll":case"scrollend":N=bm;break;case"wheel":N=Hm;break;case"copy":case"cut":case"paste":N=Am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=fc;break;case"toggle":case"beforetoggle":N=qm}var K=(n&4)!==0,Ce=!K&&(e==="scroll"||e==="scrollend"),_=K?T!==null?T+"Capture":null:T;K=[];for(var x=R,A;x!==null;){var j=x;if(A=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||A===null||_===null||(j=tl(x,_),j!=null&&K.push(zl(x,j,A))),Ce)break;x=x.return}0<K.length&&(T=new N(T,Y,null,t,O),z.push({event:T,listeners:K}))}}if((n&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",T&&t!==$u&&(Y=t.relatedTarget||t.fromElement)&&(ca(Y)||Y[oa]))break e;if((N||T)&&(T=O.window===O?O:(T=O.ownerDocument)?T.defaultView||T.parentWindow:window,N?(Y=t.relatedTarget||t.toElement,N=R,Y=Y?ca(Y):null,Y!==null&&(Ce=d(Y),K=Y.tag,Y!==Ce||K!==5&&K!==27&&K!==6)&&(Y=null)):(N=null,Y=R),N!==Y)){if(K=oc,j="onMouseLeave",_="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(K=fc,j="onPointerLeave",_="onPointerEnter",x="pointer"),Ce=N==null?T:nl(N),A=Y==null?T:nl(Y),T=new K(j,x+"leave",N,t,O),T.target=Ce,T.relatedTarget=A,j=null,ca(O)===R&&(K=new K(_,x+"enter",Y,t,O),K.target=A,K.relatedTarget=Ce,j=K),Ce=j,N&&Y)n:{for(K=Bg,_=N,x=Y,A=0,j=_;j;j=K(j))A++;j=0;for(var Z=x;Z;Z=K(Z))j++;for(;0<A-j;)_=K(_),A--;for(;0<j-A;)x=K(x),j--;for(;A--;){if(_===x||x!==null&&_===x.alternate){K=_;break n}_=K(_),x=K(x)}K=null}else K=null;N!==null&&ah(z,T,N,K,!1),Y!==null&&Ce!==null&&ah(z,Ce,Y,K,!0)}}e:{if(T=R?nl(R):window,N=T.nodeName&&T.nodeName.toLowerCase(),N==="select"||N==="input"&&T.type==="file")var fe=vc;else if(yc(T))if(xc)fe=$m;else{fe=Km;var J=Im}else N=T.nodeName,!N||N.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?R&&Pu(R.elementType)&&(fe=vc):fe=Pm;if(fe&&(fe=fe(e,R))){bc(z,fe,t,O);break e}J&&J(e,T,R),e==="focusout"&&R&&T.type==="number"&&R.memoizedProps.value!=null&&Ku(T,"number",T.value)}switch(J=R?nl(R):window,e){case"focusin":(yc(J)||J.contentEditable==="true")&&(va=J,cr=R,cl=null);break;case"focusout":cl=cr=va=null;break;case"mousedown":fr=!0;break;case"contextmenu":case"mouseup":case"dragend":fr=!1,Mc(z,t,O);break;case"selectionchange":if(Wm)break;case"keydown":case"keyup":Mc(z,t,O)}var ae;if(ur)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ba?mc(e,t)&&(oe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(oe="onCompositionStart");oe&&(dc&&t.locale!=="ko"&&(ba||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ba&&(ae=rc()):(yt=O,nr="value"in yt?yt.value:yt.textContent,ba=!0)),J=iu(R,oe),0<J.length&&(oe=new cc(oe,e,null,t,O),z.push({event:oe,listeners:J}),ae?oe.data=ae:(ae=gc(t),ae!==null&&(oe.data=ae)))),(ae=Ym?Vm(e,t):Xm(e,t))&&(oe=iu(R,"onBeforeInput"),0<oe.length&&(J=new cc("onBeforeInput","beforeinput",null,t,O),z.push({event:J,listeners:oe}),J.data=ae)),Lg(z,e,R,t,O)}nh(z,n)})}function zl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function iu(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=tl(e,t),l!=null&&a.unshift(zl(e,l,i)),l=tl(e,n),l!=null&&a.push(zl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Bg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ah(e,n,t,a,l){for(var i=n._reactName,c=[];t!==null&&t!==a;){var h=t,v=h.alternate,R=h.stateNode;if(h=h.tag,v!==null&&v===a)break;h!==5&&h!==26&&h!==27||R===null||(v=R,l?(R=tl(t,i),R!=null&&c.unshift(zl(t,R,v))):l||(R=tl(t,i),R!=null&&c.push(zl(t,R,v)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var qg=/\r\n?/g,Qg=/\u0000|\uFFFD/g;function lh(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Qg,"")}function ih(e,n){return n=lh(n),lh(e)===n}function Se(e,n,t,a,l,i){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ma(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ma(e,""+a);break;case"className":oi(e,"class",a);break;case"tabIndex":oi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":oi(e,t,a);break;case"style":lc(e,a,i);break;case"data":if(n!=="object"){oi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=fi(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&Se(e,n,"name",l.name,l,null),Se(e,n,"formEncType",l.formEncType,l,null),Se(e,n,"formMethod",l.formMethod,l,null),Se(e,n,"formTarget",l.formTarget,l,null)):(Se(e,n,"encType",l.encType,l,null),Se(e,n,"method",l.method,l,null),Se(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=fi(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Zn);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=fi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ue("beforetoggle",e),ue("toggle",e),si(e,"popover",a);break;case"xlinkActuate":Jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":si(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=gm.get(t)||t,si(e,t,a))}}function Ls(e,n,t,a,l,i){switch(t){case"style":lc(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ma(e,a):(typeof a=="number"||typeof a=="bigint")&&ma(e,""+a);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Zn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),i=e[nn]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):si(e,t,a)}}}function Ke(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var a=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var c=t[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Se(e,n,i,c,t,null)}}l&&Se(e,n,"srcSet",t.srcSet,t,null),a&&Se(e,n,"src",t.src,t,null);return;case"input":ue("invalid",e);var h=i=c=l=null,v=null,R=null;for(a in t)if(t.hasOwnProperty(a)){var O=t[a];if(O!=null)switch(a){case"name":l=O;break;case"type":c=O;break;case"checked":v=O;break;case"defaultChecked":R=O;break;case"value":i=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,n));break;default:Se(e,n,a,O,t,null)}}ec(e,i,h,v,R,c,l,!1);return;case"select":ue("invalid",e),a=c=i=null;for(l in t)if(t.hasOwnProperty(l)&&(h=t[l],h!=null))switch(l){case"value":i=h;break;case"defaultValue":c=h;break;case"multiple":a=h;default:Se(e,n,l,h,t,null)}n=i,t=c,e.multiple=!!a,n!=null?pa(e,!!a,n,!1):t!=null&&pa(e,!!a,t,!0);return;case"textarea":ue("invalid",e),i=l=a=null;for(c in t)if(t.hasOwnProperty(c)&&(h=t[c],h!=null))switch(c){case"value":a=h;break;case"defaultValue":l=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:Se(e,n,c,h,t,null)}tc(e,a,l,i);return;case"option":for(v in t)if(t.hasOwnProperty(v)&&(a=t[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,n,v,a,t,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(a=0;a<jl.length;a++)ue(jl[a],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in t)if(t.hasOwnProperty(R)&&(a=t[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Se(e,n,R,a,t,null)}return;default:if(Pu(n)){for(O in t)t.hasOwnProperty(O)&&(a=t[O],a!==void 0&&Ls(e,n,O,a,t,void 0));return}}for(h in t)t.hasOwnProperty(h)&&(a=t[h],a!=null&&Se(e,n,h,a,t,null))}function Yg(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,h=null,v=null,R=null,O=null;for(N in t){var z=t[N];if(t.hasOwnProperty(N)&&z!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=z;default:a.hasOwnProperty(N)||Se(e,n,N,null,a,z)}}for(var T in a){var N=a[T];if(z=t[T],a.hasOwnProperty(T)&&(N!=null||z!=null))switch(T){case"type":i=N;break;case"name":l=N;break;case"checked":R=N;break;case"defaultChecked":O=N;break;case"value":c=N;break;case"defaultValue":h=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,n));break;default:N!==z&&Se(e,n,T,N,a,z)}}Iu(e,c,h,v,R,O,i,l);return;case"select":N=c=h=T=null;for(i in t)if(v=t[i],t.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":N=v;default:a.hasOwnProperty(i)||Se(e,n,i,null,a,v)}for(l in a)if(i=a[l],v=t[l],a.hasOwnProperty(l)&&(i!=null||v!=null))switch(l){case"value":T=i;break;case"defaultValue":h=i;break;case"multiple":c=i;default:i!==v&&Se(e,n,l,i,a,v)}n=h,t=c,a=N,T!=null?pa(e,!!t,T,!1):!!a!=!!t&&(n!=null?pa(e,!!t,n,!0):pa(e,!!t,t?[]:"",!1));return;case"textarea":N=T=null;for(h in t)if(l=t[h],t.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,n,h,null,a,l)}for(c in a)if(l=a[c],i=t[c],a.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":T=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==i&&Se(e,n,c,l,a,i)}nc(e,T,N);return;case"option":for(var Y in t)if(T=t[Y],t.hasOwnProperty(Y)&&T!=null&&!a.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:Se(e,n,Y,null,a,T)}for(v in a)if(T=a[v],N=t[v],a.hasOwnProperty(v)&&T!==N&&(T!=null||N!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Se(e,n,v,T,a,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in t)T=t[K],t.hasOwnProperty(K)&&T!=null&&!a.hasOwnProperty(K)&&Se(e,n,K,null,a,T);for(R in a)if(T=a[R],N=t[R],a.hasOwnProperty(R)&&T!==N&&(T!=null||N!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,n));break;default:Se(e,n,R,T,a,N)}return;default:if(Pu(n)){for(var Ce in t)T=t[Ce],t.hasOwnProperty(Ce)&&T!==void 0&&!a.hasOwnProperty(Ce)&&Ls(e,n,Ce,void 0,a,T);for(O in a)T=a[O],N=t[O],!a.hasOwnProperty(O)||T===N||T===void 0&&N===void 0||Ls(e,n,O,T,a,N);return}}for(var _ in t)T=t[_],t.hasOwnProperty(_)&&T!=null&&!a.hasOwnProperty(_)&&Se(e,n,_,null,a,T);for(z in a)T=a[z],N=t[z],!a.hasOwnProperty(z)||T===N||T==null&&N==null||Se(e,n,z,T,a,N)}function uh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],i=l.transferSize,c=l.initiatorType,h=l.duration;if(i&&h&&uh(c)){for(c=0,h=l.responseEnd,a+=1;a<t.length;a++){var v=t[a],R=v.startTime;if(R>h)break;var O=v.transferSize,z=v.initiatorType;O&&uh(z)&&(v=v.responseEnd,c+=O*(v<h?1:(h-R)/(v-R)))}if(--a,n+=8*(i+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Us=null,Gs=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function rh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bs=null;function Xg(){var e=window.event;return e&&e.type==="popstate"?e===Bs?!1:(Bs=e,!0):(Bs=null,!1)}var oh=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(e){return ch.resolve(null).then(e).catch(Ig)}:oh;function Ig(e){setTimeout(function(){throw e})}function jt(e){return e==="head"}function fh(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(l),Ja(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Ll(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ll(t);for(var i=t.firstChild;i;){var c=i.nextSibling,h=i.nodeName;i[el]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=c}}else t==="body"&&Ll(e.ownerDocument.body);t=l}while(t);Ja(n)}function dh(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function qs(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":qs(t),Ju(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Kg(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[el])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Nn(e.nextSibling),e===null)break}return null}function Pg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Nn(e.nextSibling),e===null))return null;return e}function hh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Nn(e.nextSibling),e===null))return null;return e}function Qs(e){return e.data==="$?"||e.data==="$~"}function Ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $g(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Nn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Vs=null;function ph(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Nn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function mh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function gh(e,n,t){switch(n=uu(t),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ll(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ju(e)}var wn=new Map,yh=new Set;function ru(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ot=q.d;q.d={f:Fg,r:Wg,D:e0,C:n0,L:t0,m:a0,X:i0,S:l0,M:u0};function Fg(){var e=ot.f(),n=Fi();return e||n}function Wg(e){var n=fa(e);n!==null&&n.tag===5&&n.type==="form"?jf(n):ot.r(e)}var Ya=typeof document>"u"?null:document;function bh(e,n,t){var a=Ya;if(a&&typeof n=="string"&&n){var l=Cn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),yh.has(l)||(yh.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),Ke(n,"link",e),Qe(n),a.head.appendChild(n)))}}function e0(e){ot.D(e),bh("dns-prefetch",e,null)}function n0(e,n){ot.C(e,n),bh("preconnect",e,n)}function t0(e,n,t){ot.L(e,n,t);var a=Ya;if(a&&e&&n){var l='link[rel="preload"][as="'+Cn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Cn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Cn(t.imageSizes)+'"]')):l+='[href="'+Cn(e)+'"]';var i=l;switch(n){case"style":i=Va(e);break;case"script":i=Xa(e)}wn.has(i)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),wn.set(i,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Ul(i))||n==="script"&&a.querySelector(Gl(i))||(n=a.createElement("link"),Ke(n,"link",e),Qe(n),a.head.appendChild(n)))}}function a0(e,n){ot.m(e,n);var t=Ya;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Cn(a)+'"][href="'+Cn(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Xa(e)}if(!wn.has(i)&&(e=E({rel:"modulepreload",href:e},n),wn.set(i,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Gl(i)))return}a=t.createElement("link"),Ke(a,"link",e),Qe(a),t.head.appendChild(a)}}}function l0(e,n,t){ot.S(e,n,t);var a=Ya;if(a&&e){var l=da(a).hoistableStyles,i=Va(e);n=n||"default";var c=l.get(i);if(!c){var h={loading:0,preload:null};if(c=a.querySelector(Ul(i)))h.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=wn.get(i))&&Xs(e,t);var v=c=a.createElement("link");Qe(v),Ke(v,"link",e),v._p=new Promise(function(R,O){v.onload=R,v.onerror=O}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,su(c,n,a)}c={type:"stylesheet",instance:c,count:1,state:h},l.set(i,c)}}}function i0(e,n){ot.X(e,n);var t=Ya;if(t&&e){var a=da(t).hoistableScripts,l=Xa(e),i=a.get(l);i||(i=t.querySelector(Gl(l)),i||(e=E({src:e,async:!0},n),(n=wn.get(l))&&Js(e,n),i=t.createElement("script"),Qe(i),Ke(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function u0(e,n){ot.M(e,n);var t=Ya;if(t&&e){var a=da(t).hoistableScripts,l=Xa(e),i=a.get(l);i||(i=t.querySelector(Gl(l)),i||(e=E({src:e,async:!0,type:"module"},n),(n=wn.get(l))&&Js(e,n),i=t.createElement("script"),Qe(i),Ke(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function vh(e,n,t,a){var l=(l=le.current)?ru(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Va(t.href),t=da(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Va(t.href);var i=da(l).hoistableStyles,c=i.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=l.querySelector(Ul(e)))&&!i._p&&(c.instance=i,c.state.loading=5),wn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},wn.set(e,t),i||r0(l,e,t,c.state))),n&&a===null)throw Error(o(528,""));return c}if(n&&a!==null)throw Error(o(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Xa(t),t=da(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Va(e){return'href="'+Cn(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function xh(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function r0(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Ke(n,"link",t),Qe(n),e.head.appendChild(n))}function Xa(e){return'[src="'+Cn(e)+'"]'}function Gl(e){return"script[async]"+e}function Sh(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Cn(t.href)+'"]');if(a)return n.instance=a,Qe(a),a;var l=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Qe(a),Ke(a,"style",l),su(a,t.precedence,e),n.instance=a;case"stylesheet":l=Va(t.href);var i=e.querySelector(Ul(l));if(i)return n.state.loading|=4,n.instance=i,Qe(i),i;a=xh(t),(l=wn.get(l))&&Xs(a,l),i=(e.ownerDocument||e).createElement("link"),Qe(i);var c=i;return c._p=new Promise(function(h,v){c.onload=h,c.onerror=v}),Ke(i,"link",a),n.state.loading|=4,su(i,t.precedence,e),n.instance=i;case"script":return i=Xa(t.src),(l=e.querySelector(Gl(i)))?(n.instance=l,Qe(l),l):(a=t,(l=wn.get(i))&&(a=E({},t),Js(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Qe(l),Ke(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,su(a,t.precedence,e));return n.instance}function su(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,c=0;c<a.length;c++){var h=a[c];if(h.dataset.precedence===n)i=h;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Xs(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Js(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ou=null;function Ch(e,n,t){if(ou===null){var a=new Map,l=ou=new Map;l.set(t,a)}else l=ou,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var i=t[l];if(!(i[el]||i[Xe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(n)||"";c=e+c;var h=a.get(c);h?h.push(i):a.set(c,[i])}}return a}function Eh(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function s0(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _h(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function o0(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Va(a.href),i=n.querySelector(Ul(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=cu.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=i,Qe(i);return}i=n.ownerDocument||n,a=xh(a),(l=wn.get(l))&&Xs(a,l),i=i.createElement("link"),Qe(i);var c=i;c._p=new Promise(function(h,v){c.onload=h,c.onerror=v}),Ke(i,"link",a),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=cu.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Zs=0;function c0(e,n){return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+n);0<e.imgBytes&&Zs===0&&(Zs=62500*Vg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&du(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Zs?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fu=null;function du(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fu=new Map,n.forEach(f0,e),fu=null,cu.call(e))}function f0(e,n){if(!(n.state.loading&4)){var t=fu.get(e);if(t)var a=t.get(null);else{t=new Map,fu.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),a=c)}a&&t.set(null,a)}l=n.instance,c=l.getAttribute("data-precedence"),i=t.get(c)||a,i===a&&t.set(null,l),t.set(c,l),this.count++,a=cu.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Hl={$$typeof:L,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function d0(e,n,t,a,l,i,c,h,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.hiddenUpdates=Qu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Ah(e,n,t,a,l,i,c,h,v,R,O,z){return e=new d0(e,n,t,c,v,R,O,z,h),n=1,i===!0&&(n|=24),i=hn(3,null,null,n),e.current=i,i.stateNode=e,n=Rr(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:n},wr(i),e}function Rh(e){return e?(e=Ca,e):Ca}function Th(e,n,t,a,l,i){l=Rh(l),a.context===null?a.context=l:a.pendingContext=l,a=Et(n),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=_t(e,a,n),t!==null&&(sn(t,e,n),yl(t,e,n))}function Mh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Is(e,n){Mh(e,n),(e=e.alternate)&&Mh(e,n)}function Nh(e){if(e.tag===13||e.tag===31){var n=Zt(e,67108864);n!==null&&sn(n,e,67108864),Is(e,67108864)}}function wh(e){if(e.tag===13||e.tag===31){var n=bn();n=Yu(n);var t=Zt(e,n);t!==null&&sn(t,e,n),Is(e,n)}}var hu=!0;function h0(e,n,t,a){var l=k.T;k.T=null;var i=q.p;try{q.p=2,Ks(e,n,t,a)}finally{q.p=i,k.T=l}}function p0(e,n,t,a){var l=k.T;k.T=null;var i=q.p;try{q.p=8,Ks(e,n,t,a)}finally{q.p=i,k.T=l}}function Ks(e,n,t,a){if(hu){var l=Ps(a);if(l===null)zs(e,n,a,pu,t),Oh(e,a);else if(g0(l,e,n,t,a))a.stopPropagation();else if(Oh(e,a),n&4&&-1<m0.indexOf(e)){for(;l!==null;){var i=fa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Qt(i.pendingLanes);if(c!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var v=1<<31-fn(c);h.entanglements[1]|=v,c&=~v}Vn(i),(pe&6)===0&&(Pi=on()+500,kl(0))}}break;case 31:case 13:h=Zt(i,2),h!==null&&sn(h,i,2),Fi(),Is(i,2)}if(i=Ps(a),i===null&&zs(e,n,a,pu,t),i===l)break;l=i}l!==null&&a.stopPropagation()}else zs(e,n,a,null,t)}}function Ps(e){return e=Fu(e),$s(e)}var pu=null;function $s(e){if(pu=null,e=ca(e),e!==null){var n=d(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=m(n),e!==null)return e;e=null}else if(t===31){if(e=g(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pu=e,null}function Dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(em()){case Go:return 2;case Ho:return 8;case ai:case nm:return 32;case Bo:return 268435456;default:return 32}default:return 32}}var Fs=!1,zt=null,Lt=null,Ut=null,Bl=new Map,ql=new Map,Gt=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(e,n){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Bl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(n.pointerId)}}function Ql(e,n,t,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=fa(n),n!==null&&Nh(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function g0(e,n,t,a,l){switch(n){case"focusin":return zt=Ql(zt,e,n,t,a,l),!0;case"dragenter":return Lt=Ql(Lt,e,n,t,a,l),!0;case"mouseover":return Ut=Ql(Ut,e,n,t,a,l),!0;case"pointerover":var i=l.pointerId;return Bl.set(i,Ql(Bl.get(i)||null,e,n,t,a,l)),!0;case"gotpointercapture":return i=l.pointerId,ql.set(i,Ql(ql.get(i)||null,e,n,t,a,l)),!0}return!1}function kh(e){var n=ca(e.target);if(n!==null){var t=d(n);if(t!==null){if(n=t.tag,n===13){if(n=m(t),n!==null){e.blockedOn=n,Jo(e.priority,function(){wh(t)});return}}else if(n===31){if(n=g(t),n!==null){e.blockedOn=n,Jo(e.priority,function(){wh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ps(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);$u=a,t.target.dispatchEvent(a),$u=null}else return n=fa(t),n!==null&&Nh(n),e.blockedOn=t,!1;n.shift()}return!0}function jh(e,n,t){mu(e)&&t.delete(n)}function y0(){Fs=!1,zt!==null&&mu(zt)&&(zt=null),Lt!==null&&mu(Lt)&&(Lt=null),Ut!==null&&mu(Ut)&&(Ut=null),Bl.forEach(jh),ql.forEach(jh)}function gu(e,n){e.blockedOn===n&&(e.blockedOn=null,Fs||(Fs=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,y0)))}var yu=null;function zh(e){yu!==e&&(yu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){yu===e&&(yu=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if($s(a||t)===null)continue;break}var i=fa(t);i!==null&&(e.splice(n,3),n-=3,Pr(i,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Ja(e){function n(v){return gu(v,e)}zt!==null&&gu(zt,e),Lt!==null&&gu(Lt,e),Ut!==null&&gu(Ut,e),Bl.forEach(n),ql.forEach(n);for(var t=0;t<Gt.length;t++){var a=Gt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Gt.length&&(t=Gt[0],t.blockedOn===null);)kh(t),t.blockedOn===null&&Gt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],i=t[a+1],c=l[nn]||null;if(typeof i=="function")c||zh(t);else if(c){var h=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[nn]||null)h=c.formAction;else if($s(l)!==null)continue}else h=c.action;typeof h=="function"?t[a+1]=h:(t.splice(a,3),a-=3),zh(t)}}}function Lh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Ws(e){this._internalRoot=e}bu.prototype.render=Ws.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var t=n.current,a=bn();Th(t,a,e,n,null,null)},bu.prototype.unmount=Ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Th(e.current,2,null,e,null,null),Fi(),n[oa]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Gt.length&&n!==0&&n<Gt[t].priority;t++);Gt.splice(t,0,e),t===0&&kh(e)}};var Uh=r.version;if(Uh!=="19.2.3")throw Error(o(527,Uh,"19.2.3"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var b0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{$a=vu.inject(b0),cn=vu}catch{}}return Vl.createRoot=function(e,n){if(!f(e))throw Error(o(299));var t=!1,a="",l=Vf,i=Xf,c=Jf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=Ah(e,1,!1,null,null,t,a,null,l,i,c,Lh),e[oa]=n.current,js(e),new Ws(n)},Vl.hydrateRoot=function(e,n,t){if(!f(e))throw Error(o(299));var a=!1,l="",i=Vf,c=Xf,h=Jf,v=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.formState!==void 0&&(v=t.formState)),n=Ah(e,1,!0,n,t??null,a,l,v,i,c,h,Lh),n.context=Rh(null),t=n.current,a=bn(),a=Yu(a),l=Et(a),l.callback=null,_t(t,l,a),t=a,n.current.lanes=t,Wa(n,t),Vn(n),e[oa]=n.current,js(e),new bu(n)},Vl.version="19.2.3",Vl}var Zh;function D0(){if(Zh)return to.exports;Zh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),to.exports=w0(),to.exports}var O0=D0();const k0=yp(O0);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ih="popstate";function j0(u={}){function r(o,f){let{pathname:d,search:m,hash:g}=o.location;return ho("",{pathname:d,search:m,hash:g},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(o,f){return typeof f=="string"?f:Fl(f)}return L0(r,s,null,u)}function Ne(u,r){if(u===!1||u===null||typeof u>"u")throw new Error(r)}function Hn(u,r){if(!u){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function z0(){return Math.random().toString(36).substring(2,10)}function Kh(u,r){return{usr:u.state,key:u.key,idx:r}}function ho(u,r,s=null,o){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof r=="string"?Za(r):r,state:s,key:r&&r.key||o||z0()}}function Fl({pathname:u="/",search:r="",hash:s=""}){return r&&r!=="?"&&(u+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(u+=s.charAt(0)==="#"?s:"#"+s),u}function Za(u){let r={};if(u){let s=u.indexOf("#");s>=0&&(r.hash=u.substring(s),u=u.substring(0,s));let o=u.indexOf("?");o>=0&&(r.search=u.substring(o),u=u.substring(0,o)),u&&(r.pathname=u)}return r}function L0(u,r,s,o={}){let{window:f=document.defaultView,v5Compat:d=!1}=o,m=f.history,g="POP",b=null,p=S();p==null&&(p=0,m.replaceState({...m.state,idx:p},""));function S(){return(m.state||{idx:null}).idx}function E(){g="POP";let H=S(),V=H==null?null:H-p;p=H,b&&b({action:g,location:G.location,delta:V})}function D(H,V){g="PUSH";let I=ho(G.location,H,V);p=S()+1;let L=Kh(I,p),F=G.createHref(I);try{m.pushState(L,"",F)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;f.location.assign(F)}d&&b&&b({action:g,location:G.location,delta:1})}function w(H,V){g="REPLACE";let I=ho(G.location,H,V);p=S();let L=Kh(I,p),F=G.createHref(I);m.replaceState(L,"",F),d&&b&&b({action:g,location:G.location,delta:0})}function B(H){return U0(H)}let G={get action(){return g},get location(){return u(f,m)},listen(H){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(Ih,E),b=H,()=>{f.removeEventListener(Ih,E),b=null}},createHref(H){return r(f,H)},createURL:B,encodeLocation(H){let V=B(H);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:D,replace:w,go(H){return m.go(H)}};return G}function U0(u,r=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(s,"No window.location.(origin|href) available to create URL");let o=typeof u=="string"?u:Fl(u);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function bp(u,r,s="/"){return G0(u,r,s,!1)}function G0(u,r,s,o){let f=typeof r=="string"?Za(r):r,d=ht(f.pathname||"/",s);if(d==null)return null;let m=vp(u);H0(m);let g=null;for(let b=0;g==null&&b<m.length;++b){let p=P0(d);g=I0(m[b],p,o)}return g}function vp(u,r=[],s=[],o="",f=!1){let d=(m,g,b=f,p)=>{let S={relativePath:p===void 0?m.path||"":p,caseSensitive:m.caseSensitive===!0,childrenIndex:g,route:m};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(o)&&b)return;Ne(S.relativePath.startsWith(o),`Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(o.length)}let E=dt([o,S.relativePath]),D=s.concat(S);m.children&&m.children.length>0&&(Ne(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),vp(m.children,r,D,E,b)),!(m.path==null&&!m.index)&&r.push({path:E,score:J0(E,m.index),routesMeta:D})};return u.forEach((m,g)=>{var b;if(m.path===""||!((b=m.path)!=null&&b.includes("?")))d(m,g);else for(let p of xp(m.path))d(m,g,!0,p)}),r}function xp(u){let r=u.split("/");if(r.length===0)return[];let[s,...o]=r,f=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return f?[d,""]:[d];let m=xp(o.join("/")),g=[];return g.push(...m.map(b=>b===""?d:[d,b].join("/"))),f&&g.push(...m),g.map(b=>u.startsWith("/")&&b===""?"/":b)}function H0(u){u.sort((r,s)=>r.score!==s.score?s.score-r.score:Z0(r.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var B0=/^:[\w-]+$/,q0=3,Q0=2,Y0=1,V0=10,X0=-2,Ph=u=>u==="*";function J0(u,r){let s=u.split("/"),o=s.length;return s.some(Ph)&&(o+=X0),r&&(o+=Q0),s.filter(f=>!Ph(f)).reduce((f,d)=>f+(B0.test(d)?q0:d===""?Y0:V0),o)}function Z0(u,r){return u.length===r.length&&u.slice(0,-1).every((o,f)=>o===r[f])?u[u.length-1]-r[r.length-1]:0}function I0(u,r,s=!1){let{routesMeta:o}=u,f={},d="/",m=[];for(let g=0;g<o.length;++g){let b=o[g],p=g===o.length-1,S=d==="/"?r:r.slice(d.length)||"/",E=Ru({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},S),D=b.route;if(!E&&p&&s&&!o[o.length-1].route.index&&(E=Ru({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},S)),!E)return null;Object.assign(f,E.params),m.push({params:f,pathname:dt([d,E.pathname]),pathnameBase:ey(dt([d,E.pathnameBase])),route:D}),E.pathnameBase!=="/"&&(d=dt([d,E.pathnameBase]))}return m}function Ru(u,r){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[s,o]=K0(u.path,u.caseSensitive,u.end),f=r.match(s);if(!f)return null;let d=f[0],m=d.replace(/(.)\/+$/,"$1"),g=f.slice(1);return{params:o.reduce((p,{paramName:S,isOptional:E},D)=>{if(S==="*"){let B=g[D]||"";m=d.slice(0,d.length-B.length).replace(/(.)\/+$/,"$1")}const w=g[D];return E&&!w?p[S]=void 0:p[S]=(w||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:m,pattern:u}}function K0(u,r=!1,s=!0){Hn(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let o=[],f="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,g,b)=>(o.push({paramName:g,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(o.push({paramName:"*"}),f+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":u!==""&&u!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,r?void 0:"i"),o]}function P0(u){try{return u.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Hn(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),u}}function ht(u,r){if(r==="/")return u;if(!u.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,o=u.charAt(s);return o&&o!=="/"?null:u.slice(s)||"/"}var $0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function F0(u,r="/"){let{pathname:s,search:o="",hash:f=""}=typeof u=="string"?Za(u):u,d;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?d=$h(s.substring(1),"/"):d=$h(s,r)):d=r,{pathname:d,search:ny(o),hash:ty(f)}}function $h(u,r){let s=r.replace(/\/+$/,"").split("/");return u.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function uo(u,r,s,o){return`Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function W0(u){return u.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function xo(u){let r=W0(u);return r.map((s,o)=>o===r.length-1?s.pathname:s.pathnameBase)}function So(u,r,s,o=!1){let f;typeof u=="string"?f=Za(u):(f={...u},Ne(!f.pathname||!f.pathname.includes("?"),uo("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),uo("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),uo("#","search","hash",f)));let d=u===""||f.pathname==="",m=d?"/":f.pathname,g;if(m==null)g=s;else{let E=r.length-1;if(!o&&m.startsWith("..")){let D=m.split("/");for(;D[0]==="..";)D.shift(),E-=1;f.pathname=D.join("/")}g=E>=0?r[E]:"/"}let b=F0(f,g),p=m&&m!=="/"&&m.endsWith("/"),S=(d||m===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(p||S)&&(b.pathname+="/"),b}var dt=u=>u.join("/").replace(/\/\/+/g,"/"),ey=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),ny=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,ty=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,ay=class{constructor(u,r,s,o=!1){this.status=u,this.statusText=r||"",this.internal=o,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function ly(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function iy(u){return u.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Sp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Cp(u,r){let s=u;if(typeof s!="string"||!$0.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let o=s,f=!1;if(Sp)try{let d=new URL(window.location.href),m=s.startsWith("//")?new URL(d.protocol+s):new URL(s),g=ht(m.pathname,r);m.origin===d.origin&&g!=null?s=g+m.search+m.hash:f=!0}catch{Hn(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:f,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ep=["POST","PUT","PATCH","DELETE"];new Set(Ep);var uy=["GET",...Ep];new Set(uy);var Ia=M.createContext(null);Ia.displayName="DataRouter";var Du=M.createContext(null);Du.displayName="DataRouterState";var ry=M.createContext(!1),_p=M.createContext({isTransitioning:!1});_p.displayName="ViewTransition";var sy=M.createContext(new Map);sy.displayName="Fetchers";var oy=M.createContext(null);oy.displayName="Await";var vn=M.createContext(null);vn.displayName="Navigation";var Wl=M.createContext(null);Wl.displayName="Location";var Dn=M.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var Co=M.createContext(null);Co.displayName="RouteError";var Ap="REACT_ROUTER_ERROR",cy="REDIRECT",fy="ROUTE_ERROR_RESPONSE";function dy(u){if(u.startsWith(`${Ap}:${cy}:{`))try{let r=JSON.parse(u.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function hy(u){if(u.startsWith(`${Ap}:${fy}:{`))try{let r=JSON.parse(u.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new ay(r.status,r.statusText,r.data)}catch{}}function py(u,{relative:r}={}){Ne(Ka(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=M.useContext(vn),{hash:f,pathname:d,search:m}=ei(u,{relative:r}),g=d;return s!=="/"&&(g=d==="/"?s:dt([s,d])),o.createHref({pathname:g,search:m,hash:f})}function Ka(){return M.useContext(Wl)!=null}function pt(){return Ne(Ka(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Wl).location}var Rp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Tp(u){M.useContext(vn).static||M.useLayoutEffect(u)}function Mp(){let{isDataRoute:u}=M.useContext(Dn);return u?wy():my()}function my(){Ne(Ka(),"useNavigate() may be used only in the context of a <Router> component.");let u=M.useContext(Ia),{basename:r,navigator:s}=M.useContext(vn),{matches:o}=M.useContext(Dn),{pathname:f}=pt(),d=JSON.stringify(xo(o)),m=M.useRef(!1);return Tp(()=>{m.current=!0}),M.useCallback((b,p={})=>{if(Hn(m.current,Rp),!m.current)return;if(typeof b=="number"){s.go(b);return}let S=So(b,JSON.parse(d),f,p.relative==="path");u==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:dt([r,S.pathname])),(p.replace?s.replace:s.push)(S,p.state,p)},[r,s,d,f,u])}var gy=M.createContext(null);function yy(u){let r=M.useContext(Dn).outlet;return M.useMemo(()=>r&&M.createElement(gy.Provider,{value:u},r),[r,u])}function by(){let{matches:u}=M.useContext(Dn),r=u[u.length-1];return r?r.params:{}}function ei(u,{relative:r}={}){let{matches:s}=M.useContext(Dn),{pathname:o}=pt(),f=JSON.stringify(xo(s));return M.useMemo(()=>So(u,JSON.parse(f),o,r==="path"),[u,f,o,r])}function vy(u,r){return Np(u,r)}function Np(u,r,s,o,f){var I;Ne(Ka(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=M.useContext(vn),{matches:m}=M.useContext(Dn),g=m[m.length-1],b=g?g.params:{},p=g?g.pathname:"/",S=g?g.pathnameBase:"/",E=g&&g.route;{let L=E&&E.path||"";Dp(p,!E||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let D=pt(),w;if(r){let L=typeof r=="string"?Za(r):r;Ne(S==="/"||((I=L.pathname)==null?void 0:I.startsWith(S)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${L.pathname}" was given in the \`location\` prop.`),w=L}else w=D;let B=w.pathname||"/",G=B;if(S!=="/"){let L=S.replace(/^\//,"").split("/");G="/"+B.replace(/^\//,"").split("/").slice(L.length).join("/")}let H=bp(u,{pathname:G});Hn(E||H!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Hn(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=_y(H&&H.map(L=>Object.assign({},L,{params:Object.assign({},b,L.params),pathname:dt([S,d.encodeLocation?d.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?S:dt([S,d.encodeLocation?d.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),m,s,o,f);return r&&V?M.createElement(Wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},V):V}function xy(){let u=Ny(),r=ly(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),s=u instanceof Error?u.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},m=null;return console.error("Error handled by React Router default ErrorBoundary:",u),m=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:d},"ErrorBoundary")," or"," ",M.createElement("code",{style:d},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},r),s?M.createElement("pre",{style:f},s):null,m)}var Sy=M.createElement(xy,null),wp=class extends M.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,r){return r.location!==u.location||r.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:r.error,location:r.location,revalidation:u.revalidation||r.revalidation}}componentDidCatch(u,r){this.props.onError?this.props.onError(u,r):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const s=hy(u.digest);s&&(u=s)}let r=u!==void 0?M.createElement(Dn.Provider,{value:this.props.routeContext},M.createElement(Co.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?M.createElement(Cy,{error:u},r):r}};wp.contextType=ry;var ro=new WeakMap;function Cy({children:u,error:r}){let{basename:s}=M.useContext(vn);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=dy(r.digest);if(o){let f=ro.get(r);if(f)throw f;let d=Cp(o.location,s);if(Sp&&!ro.get(r))if(d.isExternal||o.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:o.replace}));throw ro.set(r,m),m}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return u}function Ey({routeContext:u,match:r,children:s}){let o=M.useContext(Ia);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),M.createElement(Dn.Provider,{value:u},s)}function _y(u,r=[],s=null,o=null,f=null){if(u==null){if(!s)return null;if(s.errors)u=s.matches;else if(r.length===0&&!s.initialized&&s.matches.length>0)u=s.matches;else return null}let d=u,m=s==null?void 0:s.errors;if(m!=null){let S=d.findIndex(E=>E.route.id&&(m==null?void 0:m[E.route.id])!==void 0);Ne(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,S+1))}let g=!1,b=-1;if(s)for(let S=0;S<d.length;S++){let E=d[S];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(b=S),E.route.id){let{loaderData:D,errors:w}=s,B=E.route.loader&&!D.hasOwnProperty(E.route.id)&&(!w||w[E.route.id]===void 0);if(E.route.lazy||B){g=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}let p=s&&o?(S,E)=>{var D,w;o(S,{location:s.location,params:((w=(D=s.matches)==null?void 0:D[0])==null?void 0:w.params)??{},unstable_pattern:iy(s.matches),errorInfo:E})}:void 0;return d.reduceRight((S,E,D)=>{let w,B=!1,G=null,H=null;s&&(w=m&&E.route.id?m[E.route.id]:void 0,G=E.route.errorElement||Sy,g&&(b<0&&D===0?(Dp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,H=null):b===D&&(B=!0,H=E.route.hydrateFallbackElement||null)));let V=r.concat(d.slice(0,D+1)),I=()=>{let L;return w?L=G:B?L=H:E.route.Component?L=M.createElement(E.route.Component,null):E.route.element?L=E.route.element:L=S,M.createElement(Ey,{match:E,routeContext:{outlet:S,matches:V,isDataRoute:s!=null},children:L})};return s&&(E.route.ErrorBoundary||E.route.errorElement||D===0)?M.createElement(wp,{location:s.location,revalidation:s.revalidation,component:G,error:w,children:I(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:p}):I()},null)}function Eo(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ay(u){let r=M.useContext(Ia);return Ne(r,Eo(u)),r}function Ry(u){let r=M.useContext(Du);return Ne(r,Eo(u)),r}function Ty(u){let r=M.useContext(Dn);return Ne(r,Eo(u)),r}function _o(u){let r=Ty(u),s=r.matches[r.matches.length-1];return Ne(s.route.id,`${u} can only be used on routes that contain a unique "id"`),s.route.id}function My(){return _o("useRouteId")}function Ny(){var o;let u=M.useContext(Co),r=Ry("useRouteError"),s=_o("useRouteError");return u!==void 0?u:(o=r.errors)==null?void 0:o[s]}function wy(){let{router:u}=Ay("useNavigate"),r=_o("useNavigate"),s=M.useRef(!1);return Tp(()=>{s.current=!0}),M.useCallback(async(f,d={})=>{Hn(s.current,Rp),s.current&&(typeof f=="number"?await u.navigate(f):await u.navigate(f,{fromRouteId:r,...d}))},[u,r])}var Fh={};function Dp(u,r,s){!r&&!Fh[u]&&(Fh[u]=!0,Hn(!1,s))}M.memo(Dy);function Dy({routes:u,future:r,state:s,onError:o}){return Np(u,void 0,s,o,r)}function Oy({to:u,replace:r,state:s,relative:o}){Ne(Ka(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=M.useContext(vn);Hn(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=M.useContext(Dn),{pathname:m}=pt(),g=Mp(),b=So(u,xo(d),m,o==="path"),p=JSON.stringify(b);return M.useEffect(()=>{g(JSON.parse(p),{replace:r,state:s,relative:o})},[g,p,o,r,s]),null}function ky(u){return yy(u.context)}function ct(u){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jy({basename:u="/",children:r=null,location:s,navigationType:o="POP",navigator:f,static:d=!1,unstable_useTransitions:m}){Ne(!Ka(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=u.replace(/^\/*/,"/"),b=M.useMemo(()=>({basename:g,navigator:f,static:d,unstable_useTransitions:m,future:{}}),[g,f,d,m]);typeof s=="string"&&(s=Za(s));let{pathname:p="/",search:S="",hash:E="",state:D=null,key:w="default"}=s,B=M.useMemo(()=>{let G=ht(p,g);return G==null?null:{location:{pathname:G,search:S,hash:E,state:D,key:w},navigationType:o}},[g,p,S,E,D,w,o]);return Hn(B!=null,`<Router basename="${g}"> is not able to match the URL "${p}${S}${E}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:M.createElement(vn.Provider,{value:b},M.createElement(Wl.Provider,{children:r,value:B}))}function zy({children:u,location:r}){return vy(po(u),r)}function po(u,r=[]){let s=[];return M.Children.forEach(u,(o,f)=>{if(!M.isValidElement(o))return;let d=[...r,f];if(o.type===M.Fragment){s.push.apply(s,po(o.props.children,d));return}Ne(o.type===ct,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!o.props.index||!o.props.children,"An index route cannot have child routes.");let m={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(m.children=po(o.props.children,d)),s.push(m)}),s}var Eu="get",_u="application/x-www-form-urlencoded";function Ou(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Ly(u){return Ou(u)&&u.tagName.toLowerCase()==="button"}function Uy(u){return Ou(u)&&u.tagName.toLowerCase()==="form"}function Gy(u){return Ou(u)&&u.tagName.toLowerCase()==="input"}function Hy(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function By(u,r){return u.button===0&&(!r||r==="_self")&&!Hy(u)}var xu=null;function qy(){if(xu===null)try{new FormData(document.createElement("form"),0),xu=!1}catch{xu=!0}return xu}var Qy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function so(u){return u!=null&&!Qy.has(u)?(Hn(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_u}"`),null):u}function Yy(u,r){let s,o,f,d,m;if(Uy(u)){let g=u.getAttribute("action");o=g?ht(g,r):null,s=u.getAttribute("method")||Eu,f=so(u.getAttribute("enctype"))||_u,d=new FormData(u)}else if(Ly(u)||Gy(u)&&(u.type==="submit"||u.type==="image")){let g=u.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=u.getAttribute("formaction")||g.getAttribute("action");if(o=b?ht(b,r):null,s=u.getAttribute("formmethod")||g.getAttribute("method")||Eu,f=so(u.getAttribute("formenctype"))||so(g.getAttribute("enctype"))||_u,d=new FormData(g,u),!qy()){let{name:p,type:S,value:E}=u;if(S==="image"){let D=p?`${p}.`:"";d.append(`${D}x`,"0"),d.append(`${D}y`,"0")}else p&&d.append(p,E)}}else{if(Ou(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Eu,o=null,f=_u,m=u}return d&&f==="text/plain"&&(m=d,d=void 0),{action:o,method:s.toLowerCase(),encType:f,formData:d,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ao(u,r){if(u===!1||u===null||typeof u>"u")throw new Error(r)}function Vy(u,r,s,o){let f=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${o}`:f.pathname=`${f.pathname}.${o}`:f.pathname==="/"?f.pathname=`_root.${o}`:r&&ht(f.pathname,r)==="/"?f.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${o}`,f}async function Xy(u,r){if(u.id in r)return r[u.id];try{let s=await import(u.module);return r[u.id]=s,s}catch(s){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jy(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Zy(u,r,s){let o=await Promise.all(u.map(async f=>{let d=r.routes[f.route.id];if(d){let m=await Xy(d,s);return m.links?m.links():[]}return[]}));return $y(o.flat(1).filter(Jy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Wh(u,r,s,o,f,d){let m=(b,p)=>s[p]?b.route.id!==s[p].route.id:!0,g=(b,p)=>{var S;return s[p].pathname!==b.pathname||((S=s[p].route.path)==null?void 0:S.endsWith("*"))&&s[p].params["*"]!==b.params["*"]};return d==="assets"?r.filter((b,p)=>m(b,p)||g(b,p)):d==="data"?r.filter((b,p)=>{var E;let S=o.routes[b.route.id];if(!S||!S.hasLoader)return!1;if(m(b,p)||g(b,p))return!0;if(b.route.shouldRevalidate){let D=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((E=s[0])==null?void 0:E.params)||{},nextUrl:new URL(u,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Iy(u,r,{includeHydrateFallback:s}={}){return Ky(u.map(o=>{let f=r.routes[o.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function Ky(u){return[...new Set(u)]}function Py(u){let r={},s=Object.keys(u).sort();for(let o of s)r[o]=u[o];return r}function $y(u,r){let s=new Set;return new Set(r),u.reduce((o,f)=>{let d=JSON.stringify(Py(f));return s.has(d)||(s.add(d),o.push({key:d,link:f})),o},[])}function Op(){let u=M.useContext(Ia);return Ao(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Fy(){let u=M.useContext(Du);return Ao(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Ro=M.createContext(void 0);Ro.displayName="FrameworkContext";function kp(){let u=M.useContext(Ro);return Ao(u,"You must render this element inside a <HydratedRouter> element"),u}function Wy(u,r){let s=M.useContext(Ro),[o,f]=M.useState(!1),[d,m]=M.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:p,onMouseLeave:S,onTouchStart:E}=r,D=M.useRef(null);M.useEffect(()=>{if(u==="render"&&m(!0),u==="viewport"){let G=V=>{V.forEach(I=>{m(I.isIntersecting)})},H=new IntersectionObserver(G,{threshold:.5});return D.current&&H.observe(D.current),()=>{H.disconnect()}}},[u]),M.useEffect(()=>{if(o){let G=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(G)}}},[o]);let w=()=>{f(!0)},B=()=>{f(!1),m(!1)};return s?u!=="intent"?[d,D,{}]:[d,D,{onFocus:Xl(g,w),onBlur:Xl(b,B),onMouseEnter:Xl(p,w),onMouseLeave:Xl(S,B),onTouchStart:Xl(E,w)}]:[!1,D,{}]}function Xl(u,r){return s=>{u&&u(s),s.defaultPrevented||r(s)}}function eb({page:u,...r}){let{router:s}=Op(),o=M.useMemo(()=>bp(s.routes,u,s.basename),[s.routes,u,s.basename]);return o?M.createElement(tb,{page:u,matches:o,...r}):null}function nb(u){let{manifest:r,routeModules:s}=kp(),[o,f]=M.useState([]);return M.useEffect(()=>{let d=!1;return Zy(u,r,s).then(m=>{d||f(m)}),()=>{d=!0}},[u,r,s]),o}function tb({page:u,matches:r,...s}){let o=pt(),{future:f,manifest:d,routeModules:m}=kp(),{basename:g}=Op(),{loaderData:b,matches:p}=Fy(),S=M.useMemo(()=>Wh(u,r,p,d,o,"data"),[u,r,p,d,o]),E=M.useMemo(()=>Wh(u,r,p,d,o,"assets"),[u,r,p,d,o]),D=M.useMemo(()=>{if(u===o.pathname+o.search+o.hash)return[];let G=new Set,H=!1;if(r.forEach(I=>{var F;let L=d.routes[I.route.id];!L||!L.hasLoader||(!S.some(ee=>ee.route.id===I.route.id)&&I.route.id in b&&((F=m[I.route.id])!=null&&F.shouldRevalidate)||L.hasClientLoader?H=!0:G.add(I.route.id))}),G.size===0)return[];let V=Vy(u,g,f.unstable_trailingSlashAwareDataRequests,"data");return H&&G.size>0&&V.searchParams.set("_routes",r.filter(I=>G.has(I.route.id)).map(I=>I.route.id).join(",")),[V.pathname+V.search]},[g,f.unstable_trailingSlashAwareDataRequests,b,o,d,S,r,u,m]),w=M.useMemo(()=>Iy(E,d),[E,d]),B=nb(E);return M.createElement(M.Fragment,null,D.map(G=>M.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...s})),w.map(G=>M.createElement("link",{key:G,rel:"modulepreload",href:G,...s})),B.map(({key:G,link:H})=>M.createElement("link",{key:G,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function ab(...u){return r=>{u.forEach(s=>{typeof s=="function"?s(r):s!=null&&(s.current=r)})}}var lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lb&&(window.__reactRouterVersion="7.13.0")}catch{}function ib({basename:u,children:r,unstable_useTransitions:s,window:o}){let f=M.useRef();f.current==null&&(f.current=j0({window:o,v5Compat:!0}));let d=f.current,[m,g]=M.useState({action:d.action,location:d.location}),b=M.useCallback(p=>{s===!1?g(p):M.startTransition(()=>g(p))},[s]);return M.useLayoutEffect(()=>d.listen(b),[d,b]),M.createElement(jy,{basename:u,children:r,location:m.location,navigationType:m.action,navigator:d,unstable_useTransitions:s})}var jp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gn=M.forwardRef(function({onClick:r,discover:s="render",prefetch:o="none",relative:f,reloadDocument:d,replace:m,state:g,target:b,to:p,preventScrollReset:S,viewTransition:E,unstable_defaultShouldRevalidate:D,...w},B){let{basename:G,unstable_useTransitions:H}=M.useContext(vn),V=typeof p=="string"&&jp.test(p),I=Cp(p,G);p=I.to;let L=py(p,{relative:f}),[F,ee,re]=Wy(o,w),P=sb(p,{replace:m,state:g,target:b,preventScrollReset:S,relative:f,viewTransition:E,unstable_defaultShouldRevalidate:D,unstable_useTransitions:H});function ke(xn){r&&r(xn),xn.defaultPrevented||P(xn)}let Ve=M.createElement("a",{...w,...re,href:I.absoluteURL||L,onClick:I.isExternal||d?r:ke,ref:ab(B,ee),target:b,"data-discover":!V&&s==="render"?"true":void 0});return F&&!V?M.createElement(M.Fragment,null,Ve,M.createElement(eb,{page:L})):Ve});Gn.displayName="Link";var Au=M.forwardRef(function({"aria-current":r="page",caseSensitive:s=!1,className:o="",end:f=!1,style:d,to:m,viewTransition:g,children:b,...p},S){let E=ei(m,{relative:p.relative}),D=pt(),w=M.useContext(Du),{navigator:B,basename:G}=M.useContext(vn),H=w!=null&&hb(E)&&g===!0,V=B.encodeLocation?B.encodeLocation(E).pathname:E.pathname,I=D.pathname,L=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;s||(I=I.toLowerCase(),L=L?L.toLowerCase():null,V=V.toLowerCase()),L&&G&&(L=ht(L,G)||L);const F=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let ee=I===V||!f&&I.startsWith(V)&&I.charAt(F)==="/",re=L!=null&&(L===V||!f&&L.startsWith(V)&&L.charAt(V.length)==="/"),P={isActive:ee,isPending:re,isTransitioning:H},ke=ee?r:void 0,Ve;typeof o=="function"?Ve=o(P):Ve=[o,ee?"active":null,re?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let xn=typeof d=="function"?d(P):d;return M.createElement(Gn,{...p,"aria-current":ke,className:Ve,ref:S,style:xn,to:m,viewTransition:g},typeof b=="function"?b(P):b)});Au.displayName="NavLink";var ub=M.forwardRef(({discover:u="render",fetcherKey:r,navigate:s,reloadDocument:o,replace:f,state:d,method:m=Eu,action:g,onSubmit:b,relative:p,preventScrollReset:S,viewTransition:E,unstable_defaultShouldRevalidate:D,...w},B)=>{let{unstable_useTransitions:G}=M.useContext(vn),H=fb(),V=db(g,{relative:p}),I=m.toLowerCase()==="get"?"get":"post",L=typeof g=="string"&&jp.test(g),F=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let re=ee.nativeEvent.submitter,P=(re==null?void 0:re.getAttribute("formmethod"))||m,ke=()=>H(re||ee.currentTarget,{fetcherKey:r,method:P,navigate:s,replace:f,state:d,relative:p,preventScrollReset:S,viewTransition:E,unstable_defaultShouldRevalidate:D});G&&s!==!1?M.startTransition(()=>ke()):ke()};return M.createElement("form",{ref:B,method:I,action:V,onSubmit:o?b:F,...w,"data-discover":!L&&u==="render"?"true":void 0})});ub.displayName="Form";function rb(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zp(u){let r=M.useContext(Ia);return Ne(r,rb(u)),r}function sb(u,{target:r,replace:s,state:o,preventScrollReset:f,relative:d,viewTransition:m,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b}={}){let p=Mp(),S=pt(),E=ei(u,{relative:d});return M.useCallback(D=>{if(By(D,r)){D.preventDefault();let w=s!==void 0?s:Fl(S)===Fl(E),B=()=>p(u,{replace:w,state:o,preventScrollReset:f,relative:d,viewTransition:m,unstable_defaultShouldRevalidate:g});b?M.startTransition(()=>B()):B()}},[S,p,E,s,o,r,u,f,d,m,g,b])}var ob=0,cb=()=>`__${String(++ob)}__`;function fb(){let{router:u}=zp("useSubmit"),{basename:r}=M.useContext(vn),s=My(),o=u.fetch,f=u.navigate;return M.useCallback(async(d,m={})=>{let{action:g,method:b,encType:p,formData:S,body:E}=Yy(d,r);if(m.navigate===!1){let D=m.fetcherKey||cb();await o(D,s,m.action||g,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:S,body:E,formMethod:m.method||b,formEncType:m.encType||p,flushSync:m.flushSync})}else await f(m.action||g,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:S,body:E,formMethod:m.method||b,formEncType:m.encType||p,replace:m.replace,state:m.state,fromRouteId:s,flushSync:m.flushSync,viewTransition:m.viewTransition})},[o,f,r,s])}function db(u,{relative:r}={}){let{basename:s}=M.useContext(vn),o=M.useContext(Dn);Ne(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),d={...ei(u||".",{relative:r})},m=pt();if(u==null){d.search=m.search;let g=new URLSearchParams(d.search),b=g.getAll("index");if(b.some(S=>S==="")){g.delete("index"),b.filter(E=>E).forEach(E=>g.append("index",E));let S=g.toString();d.search=S?`?${S}`:""}}return(!u||u===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:dt([s,d.pathname])),Fl(d)}function hb(u,{relative:r}={}){let s=M.useContext(_p);Ne(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=zp("useViewTransitionState"),f=ei(u,{relative:r});if(!s.isTransitioning)return!1;let d=ht(s.currentLocation.pathname,o)||s.currentLocation.pathname,m=ht(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Ru(f.pathname,m)!=null||Ru(f.pathname,d)!=null}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mb=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),ep=u=>{const r=mb(u);return r.charAt(0).toUpperCase()+r.slice(1)},Lp=(...u)=>u.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),gb=u=>{for(const r in u)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=M.forwardRef(({color:u="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:f="",children:d,iconNode:m,...g},b)=>M.createElement("svg",{ref:b,...yb,width:r,height:r,stroke:u,strokeWidth:o?Number(s)*24/Number(r):s,className:Lp("lucide",f),...!d&&!gb(g)&&{"aria-hidden":"true"},...g},[...m.map(([p,S])=>M.createElement(p,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(u,r)=>{const s=M.forwardRef(({className:o,...f},d)=>M.createElement(bb,{ref:d,iconNode:r,className:Lp(`lucide-${pb(ep(u))}`,`lucide-${u}`,o),...f}));return s.displayName=ep(u),s};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],xb=Oe("arrow-left",vb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],oo=Oe("arrow-right",Sb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Eb=Oe("calendar",Cb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ab=Oe("check",_b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Up=Oe("chevron-left",Rb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Gp=Oe("chevron-right",Tb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Nb=Oe("chevron-up",Mb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],ua=Oe("code",wb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ob=Oe("copy",Db);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],jb=Oe("cpu",kb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Lb=Oe("database",zb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Gb=Oe("external-link",Ub);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],np=Oe("github",Hb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Jl=Oe("globe",Bb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Qb=Oe("layers",qb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Vb=Oe("menu",Yb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],tp=Oe("search",Xb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Zb=Oe("server",Jb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ap=Oe("shield-check",Ib);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Pb=Oe("tag",Kb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],lp=Oe("terminal",$b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Tu=Oe("x",Fb),ip=[{label:"Home",path:"/"},{label:"Experience",path:"/experience"},{label:"Skills",path:"/skills"},{label:"Education",path:"/education"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],mo=[{id:"standard-networks",title:"스탠다드네트웍스",role:"전송 개발팀",period:"2023.07 - 2025.12",description:"대용량 메시지 발송 플랫폼 기획/개발 및 운영",techStack:["Java","Spring Boot","Spring Cloud","Redis","RabbitMQ","R2DBC","Netflix Eureka","WebFlux"],keyAchievements:["월 평균 7천만 건에서 최대 3억 건에 이르는 메시지 데이터 처리","MSA(Microservices Architecture) 설계를 통한 시스템 결합도 최소화 및 확장성있는 인프라 구축","약 50개 고객사에 직접 배포되어 안정적으로 운영 중인 Agent 프로그램 개발 및 운영","메시지 검칙 프로세스 개발. KISA(한국인터넷진흥원) 및 내부 정책 준수로 스팸 신고율 50% 이상 감소 및 발송 신뢰도 향상"]}],Wb=[{category:"Languages",items:[{name:"Java",icon:ev},{name:"HTML/CSS",icon:Qb},{name:"JS(ES6)",icon:Zb}]},{category:"Frameworks & Libraries",items:[{name:"Spring boot",icon:Lb},{name:"WebFlux",icon:jb},{name:"Netty",icon:Jl},{name:"JPA",icon:Jl},{name:"mybatis",icon:Jl},{name:"R2DBC",icon:Jl},{name:"React",icon:Jl},{name:"Tailwind CSS"}]},{category:"Infrastructure & Databases",items:[{name:"RabbitMQ",icon:ap},{name:"Redis",icon:lp},{name:"mySQL",icon:ua},{name:"Oracle",icon:ua},{name:"maria",icon:ua},{name:"Linux",icon:ua}]},{category:"Tools & Collaboration",items:[{name:"VSCode",icon:ap},{name:"IntelliJ",icon:lp},{name:"Git/GithubDesktop",icon:ua},{name:"Notion",icon:ua},{name:"Slack",icon:ua}]}],up=[{institution:"서울사이버대학교",link:"https://www.iscu.ac.kr",degree:"인공지능학과",period:"2026.03 ~ 재학 중",details:[],category:"Education"},{institution:"Docker 클라우드 컨데이너 기반 아키텍처 이해와 실습",link:"https://edu.ktdsuniversity.com",degree:"kt University에서 진행한 Docker 클라우드 컨테이너 기반 아키텍처 교육 과정",period:"2024.10 ~ 2024.10",details:["Docker와 Docker 컴포넌트 이해","Docker 이미지와 컨테이너 설정","Dockerfile 로 서버 구축하기","Docker 이미지 공유","Container 통합 관리"],category:"Education"},{institution:"빅데이터 기반 지능형SW 및 MLOps 개발자 양성과정",link:"https://playdata.io/",degree:"엔코아 아카데미(Encore Academy)에서 진행한 빅데이터 기반 개발자 양성 과정",period:"2022.11 ~ 2023.5",details:["마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","마이크로 서비스 개발을 위한 DB설계 능력"],category:"Education"},{institution:"La Piscine",link:"https://42seoul.kr/seoul42/main/view",degree:"이노베이션 아카데미(Innovation Academy)에서 진행한 자기주도학습 기반의 알고리즘 문제 풀이 과정",period:"2022.8 ~ 2022.9",details:["알고리즘 문제 해결 능력","서로간의 코드 설명 및 코드 리뷰로 의사소통 능력 향상"],category:"Education"},{institution:"클라우드 기반의 MSA 스페셜리스트 주니어 개발자 양성 과정",link:"https://sesac.seoul.kr/course/active/detail.do",degree:"디지털 전환(Digital Transformation)시대의 핵심 클라우드 전문 인재 양성 교육 과정",period:"2021.11 ~ 2022.5",details:["클라우드 인프라 구축 능력","마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","클라우드 네이티브에 대한 이해와 마이크로 서비스 개발 및 관리할 수 있는 능력"],category:"Education"},{institution:"정보처리기능사",degree:"한국산업인력공단",period:"2022.07.01",details:["국가기술자격증 취득"],category:"Certification"}];function ev(u){return y.jsxs("svg",{...u,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[y.jsx("path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}),y.jsx("path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}),y.jsx("line",{x1:"6",x2:"6",y1:"2",y2:"4"}),y.jsx("line",{x1:"10",x2:"10",y1:"2",y2:"4"}),y.jsx("line",{x1:"14",x2:"14",y1:"2",y2:"4"})]})}const nv=()=>{const[u,r]=M.useState(!1),s=pt();return M.useEffect(()=>{r(!1),window.scrollTo(0,0)},[s]),y.jsxs("div",{className:"min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-mint selection:text-slate-900",children:[y.jsxs("header",{className:"w-full max-w-3xl mx-auto px-6 py-8 md:py-12 flex justify-between items-center",children:[y.jsxs(Au,{to:"/",className:"text-2xl font-extrabold tracking-tight hover:opacity-70 transition-opacity",children:["Whee",y.jsx("span",{className:"text-sky-500",children:"'s"})," Log",y.jsx("span",{className:"text-sky-500",children:"."})]}),y.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[ip.filter(o=>o.label!=="Home").map(o=>y.jsx(Au,{to:o.path,className:({isActive:f})=>`text-[15px] font-medium transition-colors ${f?"text-slate-900 font-bold bg-gradient-to-r from-sky-200 to-sky-100 px-3 py-1 rounded-sm -skew-x-3":"text-slate-500 hover:text-sky-500 hover:scale-110 transition-all duration-200"}`,children:o.label},o.path)),y.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"relative group text-slate-400 hover:text-sky-500 hover:scale-125 transition-all duration-200",children:[y.jsx(np,{size:20}),y.jsx("span",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-slate-700 bg-sky-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg",children:"Hanwhee's GitHub"})]})]}),y.jsx("button",{className:"md:hidden text-slate-800 focus:outline-none",onClick:()=>r(!u),children:u?y.jsx(Tu,{size:24}):y.jsx(Vb,{size:24})})]}),u&&y.jsxs("div",{className:"md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6 flex flex-col",children:[y.jsx("div",{className:"flex justify-end mb-8",children:y.jsx("button",{onClick:()=>r(!1),children:y.jsx(Tu,{size:28})})}),y.jsx("nav",{className:"flex flex-col space-y-6 text-center",children:ip.map(o=>y.jsx(Au,{to:o.path,className:({isActive:f})=>`text-2xl font-bold ${f?"text-sky-600":"text-slate-800"}`,children:o.label},o.path))})]}),y.jsx("main",{className:"flex-grow w-full max-w-3xl mx-auto px-6 pb-20",children:y.jsx(ky,{})}),y.jsxs("footer",{className:"w-full max-w-3xl mx-auto px-6 py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400",children:[y.jsxs("div",{children:["© ",new Date().getFullYear()," Hanwhee Kim."]}),y.jsx("div",{className:"flex gap-4",children:y.jsx("a",{href:"https://github.com/KimHanWhee",className:"hover:text-slate-600",children:y.jsx(np,{size:16})})})]})]})},tv=`---
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
`,av=`---
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

JVM이 관리하는 프로그램에서 데이터를 저장하기 위해 런타임 시 동적으로 할당되는 공간이다. 객체, 배열 등이 저장되는 공간으로 어떤 참조 변수도 힙 영역에 있는 인스턴스를 참조하지 않는다면 가비지 컬렉터(GC, Garbage Collector)에 의해 메모리에서 제거된다.`,lv=`---
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
`,iv=`---
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
`,uv=`---
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
`,rv=`---
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
`,sv=`---
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
`,ov=`---
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
`,fv=`---
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
`,dv=`---
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
`,pv=`---
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
`,mv=`---
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
`,gv=`---
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
`,yv=`---
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
`,bv=`---
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
`,vv=`---
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

### remove()를 해도 왜 해제가 안 됐을까?

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

### context.close()를 호출하면 해결되지 않을까?

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
`,xv=`---
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
`,Sv=`---
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
`,Cv=`---
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
`,_v=`---
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
`,Av=`---
title: "Redis 연결 상태 실시간 체크"
date: "2026-05-06"
description: "Redis 연결 장애 시 검칙이 멈추는 문제를 해결하기 위해 주기적 연결 상태 체크 모듈을 구현한 경험을 정리한 글이다."
tags: ["Java", "Spring Boot", "Redis", "Redis Cluster", "트러블슈팅"]
---

## 문제 발생

실시간 데이터 검칙 프로그램을 운영하던 중 이런 상황이 생겼다.

- 검칙 로직이 **Redis에 저장된 데이터를 기준**으로 동작
- Redis 연결이 끊겼을 때도 계속 Redis에 요청을 보냄
- 응답을 기다리다 **블로킹 발생** → 대규모 트래픽 환경에서 지연 현상이 매우 심해짐

우리는 기존 Redis 조회 실패 시 DB 조회를 하도록 예외처리를 하긴 했지만 Timeout으로 실패가 나는 상황이라면 너무 지연이 심했다.

---

## 원인 분석

근본 원인은 **연결 상태를 모르는 채로 Redis에 요청**을 보낸다는 것이었다.

> Redis 클라이언트는 연결이 끊겼을 때 즉시 예외를 던지지 않고, **타임아웃이 날 때까지 블로킹**하는 경우가 있다. 특히 Cluster 환경에서는 일부 노드 장애 시 Cluster 자체가 \`fail\` 상태가 되어도 ping은 성공하는 케이스가 존재한다.

| 상황                     | ping 결과 | Cluster State | 실제 사용 가능 여부 |
| ------------------------ | --------- | ------------- | ------------------- |
| 정상                     | PONG      | ok            | ✅                  |
| 단순 네트워크 단절       | 실패      | -             | ❌                  |
| 일부 노드 장애 (Cluster) | PONG      | fail          | ❌                  |

Cluster 환경에서는 **ping만으로는 부족**했다.

---

## 해결

### 접근 방향

별도 모듈에서 **주기적으로 Redis 연결 상태를 체크**하고, \`AtomicBoolean\` 으로 상태를 관리한다. 검칙 로직은 이 상태값을 보고 Redis/DB 조회를 분기한다.

\`\`\`
isConnected == true  → Redis 기반 검칙
isConnected == false → DB 기반 검칙 (Fallback)
\`\`\`

### RedisConnectionChecker 구현

\`\`\`java
package kr.standard.mcmp.ptp.modules;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.connection.ClusterInfo;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.concurrent.atomic.AtomicBoolean;

@Slf4j
@Component
@RequiredArgsConstructor
public class RedisConnectionChecker {

    @Value("\${spring.redis.use-cluster}")
    private boolean isClustered;

    private final RedisConnectionFactory redisConnectionFactory;

    private final AtomicBoolean isConnected = new AtomicBoolean(false);

    /**
     * 1. ping 실패 → isConnected = false
     * 2. ping 성공 + Cluster 모드 → ClusterInfo State 추가 확인
     * 3. ClusterInfo State == "ok" → isConnected = true
     * 4. ClusterInfo State == "fail" → isConnected = false
     * 5. Single 모드 → ping 성공 여부만 확인
     */
    @PostConstruct
    @Scheduled(fixedDelayString = "\${spring.redis.connection-check-delay}")
    public void renew() {
        if (isClustered) {
            isConnected(ping() && isClusterStateOk());
        } else {
            isConnected(ping());
        }
        log.info("[REDIS-CONNECTION-CHECKER] Current redis-connection-state[{}]", isConnected);
    }

    public boolean ping() {
        try {
            RedisConnection redisConnection = isClustered
                ? redisConnectionFactory.getClusterConnection()
                : redisConnectionFactory.getConnection();
            return "PONG".equals(redisConnection.ping());
        } catch (Exception e) {
            log.error("error occurred while ping to Redis : ", e);
            return false;
        }
    }

    public boolean isClusterStateOk() {
        try {
            ClusterInfo clusterInfo = redisConnectionFactory.getClusterConnection().clusterGetClusterInfo();
            return Objects.requireNonNull(clusterInfo.get(ClusterInfo.Info.STATE)).equalsIgnoreCase("ok");
        } catch (Exception e) {
            log.error("error occurred while check Redis clusterInfo : ", e);
            return false;
        }
    }

    public boolean isConnected() {
        return isConnected.get();
    }

    private void isConnected(boolean newState) {
        this.isConnected.set(newState);
    }
}
\`\`\`

### 설계 포인트 3가지

**1. \`@PostConstruct\` + \`@Scheduled\` 동시 사용**

앱 시작 직후 즉시 한 번 체크하고, 이후 주기적으로 반복한다.
\`@PostConstruct\`만 쓰면 최초 1회만 체크하고 끝나고, \`@Scheduled\`만 쓰면 첫 딜레이 동안 상태가 \`false\`인 채로 유지된다. 둘을 같이 쓰면 이 공백을 없앨 수 있다.

\`\`\`yaml
# application.yml
spring:
  redis:
    use-cluster: true
    connection-check-delay: 5000 # ms 단위, 5초마다 체크
\`\`\`

**2. Cluster 환경에서 ping만으론 부족**

일부 노드에 장애가 생겨 Cluster가 \`fail\` 상태가 되더라도 ping은 살아있는 노드에 연결되어 \`PONG\`을 반환할 수 있다. 그래서 Cluster 모드에서는 **ClusterInfo의 State까지 함께 확인**한다. 아래와 같이 RedisConnectionFactory를 사용하면 ClusterInfo를 불러올 수 있게된다.

\`\`\`java
import org.springframework.data.redis.connection.RedisConnectionFactory;
        :
        :
    private final RedisConnectionFactory redisConnectionFactory;

    public boolean isClusterStateOk() {
        try {
            ClusterInfo clusterInfo = redisConnectionFactory.getClusterConnection().clusterGetClusterInfo(); // ClusterInfo 불러오기
            return Objects.requireNonNull(clusterInfo.get(ClusterInfo.Info.STATE)).equalsIgnoreCase("ok"); // state가 "ok"일 경우에만 true
        } catch (Exception e) {
            log.error("error occurred while check Redis clusterInfo : ", e);
            return false;
        }
    }
\`\`\`

\`\`\`java
// ping 성공 AND Cluster State == "ok" 일 때만 연결 정상으로 판단
isConnected(ping() && isClusterStateOk());
\`\`\`

**3. \`AtomicBoolean\`으로 멀티스레드 환경에서 안전하게**

검칙 로직과 상태 체크는 **서로 다른 스레드**에서 동작한다. 일반 \`boolean\`을 쓰면 가시성(visibility) 문제가 생길 수 있어서 \`AtomicBoolean\`을 사용했다.

> \`AtomicBoolean\`은 CAS(Compare-And-Swap) 연산을 사용해 락 없이도 스레드 안전하게 상태를 읽고 쓸 수 있다.

### 검칙 로직에서의 분기 처리

\`\`\`java
@RequiredArgsConstructor
@Component
public class DetectionService {

    private final RedisConnectionChecker redisConnectionChecker;
    private final RedisDetectionRepository redisRepo;
    private final DbDetectionRepository dbRepo;

    public DetectionResult detect(String key) {
        if (redisConnectionChecker.isConnected()) {
            return redisRepo.find(key); // Redis 기반 검칙
        } else {
            return dbRepo.find(key);   // DB Fallback
        }
    }
}
\`\`\`

### 전체 흐름

\`\`\`
[앱 시작]
  └── @PostConstruct → renew() 즉시 실행
        ├── Cluster 모드: ping() && isClusterStateOk()
        └── Single 모드: ping()

[운영 중]
  └── @Scheduled (5초마다) → renew() 반복 실행
        └── AtomicBoolean isConnected 갱신

[검칙 요청]
  └── isConnected == true  → Redis 조회
  └── isConnected == false → DB 조회 (Fallback)
\`\`\`

---

## 결과

| 상황            | 이전               | 이후                       |
| --------------- | ------------------ | -------------------------- |
| Redis 정상      | Redis 기반 검칙    | Redis 기반 검칙            |
| Redis 연결 끊김 | 블로킹 → 검칙 멈춤 | DB 기반 검칙으로 자동 전환 |
| Cluster fail    | 블로킹 → 검칙 멈춤 | DB 기반 검칙으로 자동 전환 |
| Redis 복구      | 재시작 필요        | 자동으로 Redis 기반 복귀   |

Redis가 죽어도 검칙이 멈추지 않고, 복구되면 별도 작업 없이 자동으로 Redis 기반으로 돌아온다. 실제 운영 환경에서 Cluster 장애 상황을 겪었을 때도 정상 동작을 확인했다.

---

## 결론

단순해 보이는 연결 체크지만, 몇 가지 놓치기 쉬운 포인트가 있었다.

- **Cluster 환경에선 ping만으로 충분하지 않다** — ClusterInfo State까지 봐야 한다
- **\`@PostConstruct\` + \`@Scheduled\` 조합**으로 데이터 인입 전 먼저 확인 가능하도록 한다.
- **\`AtomicBoolean\`**은 멀티스레드 환경에서 boolean 상태 관리의 기본이다

Redis 의존도가 높은 서비스면서 나처럼 Redis 실패 시 Fallback(DB 참조) 환경이 갖추어져 있다면 이 기능이 서비스 안정성에 정말 큰 도움이 된다고 생각한다.
`,Rv=`---
title: "Raft 알고리즘과 RabbitMQ Quorum Queue"
date: "2026-05-11"
description: "Raft 알고리즘의 핵심 개념과 Quorum Queue의 동작 원리를 정리한 글이다."
tags: ["RabbitMQ", "알고리즘"]
---

과거 RabbitMQ 클러스터를 구성하면서 **[Quorum Queue](https://kimhanwhee.github.io/blog/mirror_queue_vs_quorum_queue)** 를 도입하려 했다. 이때 공부했던 Raft 알고리즘에 대한 정리를 해보려고 한다.

---

## 왜 Raft가 필요한가 - 분산 시스템의 합의 문제

분산 시스템에서 여러 노드가 동일한 데이터를 가져야 한다면, 반드시 이런 질문이 생긴다.

> "지금 이 데이터가 최신이 맞아? 다른 노드도 동의해?"

단일 서버라면 이 문제가 없다. 하나의 서버가 모든 결정을 내리면 된다. 하지만 분산 환경에서는 서버가 여러 대이고, 네트워크 지연이나 장애로 서로 다른 데이터를 가질 수 있다.

이 문제를 **분산 합의(Distributed Consensus)** 문제라고 한다. 대표적인 예시를 보면 이해가 쉽다.

| 상황                                | 문제                              |
| ----------------------------------- | --------------------------------- |
| 여러 노드가 동시에 쓰기 요청을 받음 | 어떤 순서로 적용해야 하나?        |
| 일부 노드가 죽음                    | 남은 노드끼리 데이터가 맞나?      |
| 죽었던 노드가 살아남                | 얼마나 오래된 데이터를 갖고 있나? |

**Raft**는 이 문제를 풀기 위해 설계된 분산 합의 알고리즘이다. 기존의 Paxos보다 이해하기 쉽게 만들어졌고, 실제 여러 분산 시스템(etcd, CockroachDB, RabbitMQ Quorum Queue 등)에서 채택하고 있다.

---

## Raft 핵심 개념

### 노드의 역할

Raft 클러스터의 모든 노드는 항상 아래 세 가지 상태 중 하나다.

| 역할          | 설명                                                  |
| ------------- | ----------------------------------------------------- |
| **Leader**    | 클라이언트 요청을 받고, 데이터를 복제하는 유일한 노드 |
| **Follower**  | Leader의 명령을 수동적으로 따르는 노드                |
| **Candidate** | Leader 선출에 입후보한 노드                           |

> 정상 상태에서는 반드시 **Leader 1개 + Follower N개** 구조다. Leader가 하나이기 때문에 쓰기 충돌이 없다.

### Term - 선거 주기

Raft는 시간을 **Term**이라는 단위로 나눈다. 각 Term은 새로운 선거로 시작하며, 번호가 단조 증가한다.

\`\`\`
Term 1: Leader A 선출 → 정상 운영
Term 2: A 장애 → 새 선거 → Leader B 선출
Term 3: B 장애 → 새 선거 → Leader C 선출
\`\`\`

Term은 "이 메시지가 얼마나 최신인가"를 판단하는 기준이 된다. 노드가 자신보다 낮은 Term의 메시지를 받으면 무시한다.

### 과반수(Quorum) 원칙

Raft의 핵심 규칙이다.

> **모든 결정은 클러스터 전체 노드의 과반수(N/2 + 1) 이상이 동의해야 한다.**

| 총 노드 수 | 과반수 | 허용 가능한 최대 장애 노드 |
| ---------- | ------ | -------------------------- |
| 1          | 1      | 0                          |
| 2          | 2      | 0                          |
| **3**      | **2**  | **1**                      |
| 4          | 3      | 1                          |
| **5**      | **3**  | **2**                      |

노드가 3개면 2개가 살아있어야 정상 동작한다. 그래서 **분산 시스템에서는 노드를 홀수로 구성하는 게 일반적**이다. 짝수로 구성하면 허용 장애 수가 동일하면서 비용만 늘어난다.

---

## Raft 동작 방식

### 1. Leader 선출 (Leader Election)

앱이 시작되면 모든 노드는 Follower 상태로 시작한다. Follower는 Leader로부터 주기적으로 **Heartbeat**를 받아야 한다. 일정 시간 내에 Heartbeat가 오지 않으면 Leader가 죽었다고 판단하고 투표를 시작한다.

\`\`\`
1. Follower → Candidate로 전환
2. Term 번호 1 증가
3. 자신에게 투표 후, 다른 노드에게 투표 요청(RequestVote) 전송
4. 과반수 투표 확보 → Leader로 전환
5. 즉시 Heartbeat 전송으로 리더십 선언
\`\`\`

투표 규칙은 두 가지다.

- 각 노드는 한 Term에 **한 번만** 투표할 수 있다.
- 자신보다 **최신 로그를 가진 Candidate에게만** 투표한다.

이 규칙 덕분에 데이터가 가장 최신인 노드가 Leader가 된다.

### 2. 데이터 복제 (Log Replication)

클라이언트의 쓰기 요청은 반드시 **Leader**가 받는다.

\`\`\`
1. 클라이언트 → Leader에게 쓰기 요청
2. Leader → 로그에 엔트리 추가 (아직 커밋 안 함)
3. Leader → 모든 Follower에게 AppendEntries 전송
4. 과반수 Follower가 저장 완료 응답
5. Leader → 커밋 처리 후 클라이언트에 응답
6. Leader → 다음 Heartbeat에서 Follower들에게 커밋 알림
\`\`\`

> **과반수가 저장했을 때만 커밋**하기 때문에, Leader가 죽더라도 커밋된 데이터는 반드시 과반수 노드에 존재한다. 새 Leader는 이 데이터를 이어받을 수 있다.

### 3. 장애 시 재선출

Leader가 죽으면 Follower들이 Heartbeat를 받지 못하고, 선거를 시작한다. 앞서 설명한 Leader 선출 과정이 다시 진행되고, 과반수를 확보한 새 Leader가 선출된다.

**이때 핵심은 과반수다.** 살아있는 노드가 과반수에 미치지 못하면 새 Leader를 선출할 수 없고, 클러스터는 쓰기를 멈춘다. 데이터 일관성을 지키기 위한 의도적인 선택이다.

---

## RabbitMQ Quorum Queue와 연결

### Quorum Queue가 Raft를 쓰는 이유

기존 **Mirror Queue**는 Leader가 메시지를 받으면 모든 Mirror에 복사하는 방식이었다. 문제는 **"얼마나 복제됐는지 확인하지 않고 커밋"** 한다는 점이었다. Leader가 갑자기 죽으면 일부 Mirror에만 복제된 메시지가 유실될 수 있었다.

**Quorum Queue**는 Raft를 기반으로 과반수 복제 확인 후 커밋한다. 메시지 유실 가능성이 구조적으로 차단된다.

| 항목          | Mirror Queue             | Quorum Queue          |
| ------------- | ------------------------ | --------------------- |
| 복제 방식     | 브로드캐스트             | Raft 기반 과반수 확인 |
| 데이터 안전성 | 리더 장애 시 유실 가능   | 과반수 복제 후 커밋   |
| 장애 복구     | 수동 개입 필요할 수 있음 | 자동 재선출           |
| 과반수 요건   | 없음                     | **있음**              |

### IDC 이중화 환경에서 왜 문제가 됐나

여기서 처음의 문제로 돌아온다. 구성은 이랬다.

\`\`\`
IDC1: Node1, Node2  (2노드)
IDC2: Node3         (1노드)
총 3노드 → 과반수 = 2
\`\`\`

IDC1이 다운되면 Node3 혼자 남는다. 과반수(2)를 확보하지 못하므로 **Leader를 선출할 수 없고, 클러스터는 쓰기를 멈춘다.**

\`\`\`
IDC1 (Node1, Node2) 다운
  └── 남은 노드: Node3 (1개)
  └── 과반수(2) 미달
  └── Leader 선출 불가
  └── 클러스터 중단
\`\`\`

이를 해결하려면 아래 중 하나를 선택해야 했다.

| 방법                    | 설명               | 비고                                          |
| ----------------------- | ------------------ | --------------------------------------------- |
| **노드 5개로 확장**     | IDC1 3개, IDC2 2개 | IDC1 다운 시 IDC2 2개 생존 → 과반수 확보 가능 |
| **IDC를 3곳으로 분리**  | IDC마다 1노드      | 어느 한 IDC 다운 시에도 2개 생존              |
| **Mirror Queue로 전환** | 과반수 요건 없음   | 데이터 안전성은 낮아짐                        |

우리 환경에서는 IDC 추가 및 노드 확장이 현실적으로 어려웠다. 결국 **Mirror Queue로 전환**하는 선택을 했다. 완벽한 해결은 아니었지만, 서비스 가용성을 우선시한 현실적인 판단이었다.

---

## 결론

Quorum Queue 도입에 실패했었지만, 덕분에 Raft 알고리즘을 제대로 이해하는 계기가 됐다.

정리하면 이렇다.

- **Raft는 과반수 합의를 통해 데이터 일관성을 보장**하는 알고리즘이다
- **과반수 원칙**은 강점이자 제약이다 — 노드 구성을 잘못 하면 오히려 가용성이 낮아진다
- **Quorum Queue는 Raft 덕분에 메시지 유실을 막지만**, 클러스터 구성이 과반수를 지킬 수 있어야 제대로 동작한다
- **IDC 이중화 환경**에서 Quorum Queue를 쓰려면 어느 한 IDC가 다운돼도 과반수가 남도록 설계해야 한다

분산 시스템의 장애 허용 설계는 단순히 노드를 늘리는 게 아니라, **과반수가 어디에 어떻게 배치되는가**를 따져야 한다는 걸 배운 경험이었다.
`,Tv=`---
title: "노트북 청소 후 SSD RAW 상태 전환 및 사용자 계정 권한 꼬임"
date: "2026-05-29"
description: "노트북 청소 후 SSD가 RAW로 잡히고 윈도우 권한이 전부 꼬였던 기록"
tags: ["트러블슈팅", "Windows", "OS", "NTFS", "SSD"]
---

레노버 노트북을 사용한지 2년이 넘어 내부 청소를 위해 서비스 센테를 방문하였다.
청소 후 노트북을 받아서 켰더니 처음에는 로그인까지 됐는데, **C 드라이브를 못 읽는다는 메시지**가 떴다.
뭔가 이상해서 재부팅했더니 그 이후로는 아예 로그인 화면도 안 뜨고 아래 화면만이 반복됐다.

\`\`\`
Stop code: NTFS_FILE_SYSTEM (0x24)
\`\`\`

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_01.png)

> **NTFS FILE SYSTEM 오류**는 파일시스템이 손상됐을 때 발생한다.
> 윈도우가 드라이브를 정상적으로 읽지 못할 때 나타난다.

서비스 센터 직원분께 말씀드렸더니 "윈도우가 깨진 것 같다, 재설치해야 한다"고 했다.
윈도우 재설치를 진행하면 파일들이 초기화 되고 2시간이 소요된다 하였다.
일단 직접 하겠다고 말씀드린 후 노트북을 가져와서 직접 복구를 시도했다.

---

## 원인 분석

### SSD 상태 확인

증상이 생긴 후 뜨는 **옵션선택** 화면에서 확인을 진행하였다.

**문제해결 → 고급 옵션 → 명령 프롬프트**에서 아래 명령어로 파일시스템 복구를 시도했다.

\`\`\`bash
# 파일시스템 오류를 검사하고 자동으로 복구 시도
chkdsk C: /f /r
\`\`\`

| 옵션 | 역할                        |
| ---- | --------------------------- |
| \`/f\` | 발견된 오류 자동 수정       |
| \`/r\` | 불량 섹터 검색 및 복구 시도 |

그런데 C 드라이브가 인식이 되지 않았다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_02.png)

\`diskpart\`로 상태를 확인했다.

\`\`\`bash
# 디스크 파티션 관리 도구 실행
diskpart

# 볼륨 목록 확인
list volume
\`\`\`

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_03.png)

C 드라이브가 RAW로 잡혀있었다.

> **RAW 상태**란 드라이브의 파일시스템을 윈도우가 인식하지 못하는 상태다.
> NTFS, FAT32 등으로 포맷이 되어있어야 하는데, 그 정보가 손상된 것이다.

volume을 확인한 후 다시 chkdsk 명령을 수행했더니 정상적으로 진행이 되었다.
diskpart에 접속해서 list volume을 했을때 C 드라이브를 인식한 것 같다.

\`\`\`bash
chkdsk C: /f /r
\`\`\`

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_04.png)

이후 재부팅하니 윈도우가 NTFS로 인식하고 부팅에 성공했다.

---

## 문제 발생 - 권한 꼬임

부팅은 됐는데 이런 오류 메시지가 떴다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_05.png)

그리고 일부 파일을 실행 시킬 때 아래 메시지가 뜨며 실행이 되지 않았다.

\`\`\`
지정한 장치 경로 또는 파일에 액세스할 수 없습니다.
이 항목에 액세스할 수 있는 권한이 없는 것 같습니다.
\`\`\`

SSD가 RAW로 갔다가 NTFS로 복구되는 과정에서 **파일 소유권(Ownership)과 ACL(Access Control List)이 초기화**된 것이다.

> **ACL**이란 파일/폴더에 누가 어떤 권한을 갖는지 정의하는 목록이다.
> RAW 복구 과정에서 이 정보가 손상되거나 초기화되면 본인 파일에도 접근이 안 된다.

---

## 해결 시도 (실패)

### takeown / icacls로 권한 복구 시도

\`\`\`bash
# Program Files 폴더 소유권 가져오기
takeown /f "C:\\Program Files" /r /d y

# 권한 부여
icacls "C:\\Program Files" /grant <PC명>\\<사용자명>:F /t /c /q
\`\`\`

| 명령어          | 역할                                  |
| --------------- | ------------------------------------- |
| \`takeown /f\`    | 파일/폴더 소유권을 현재 사용자로 변경 |
| \`/r\`            | 하위 폴더/파일에 재귀적으로 적용      |
| \`/d y\`          | 확인 프롬프트 자동 수락               |
| \`icacls /grant\` | 지정한 사용자에게 권한 부여           |
| \`:F\`            | Full Control (모든 권한)              |
| \`/t\`            | 하위 항목에 재귀 적용                 |
| \`/c\`            | 오류 무시하고 계속 진행               |

앱들은 어느 정도 열리게 됐는데 **윈도우 검색, 시스템 앱들**은 여전히 안 됐다.

### icacls /reset으로 권한 초기화 시도

\`\`\`bash
# 사용자 폴더 권한을 윈도우 기본값으로 초기화
icacls "C:\\Users\\<사용자명>" /reset /t /c /q
\`\`\`

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_06.png)

3시간을 돌렸는데 \`AppData\\Local\\Application Data\` 폴더만 계속 처리하길래 강제 종료 후 로그인을 시도했더니 계정 프로필이 손상됐다는 메시지가 뜨면서 임시 프로필로 로그인됐다.

\`\`\`
계정에 로그인할 수 없음
이 문제는 계정에서 로그아웃했다가 다시 로그인하면 해결되기도 합니다.
\`\`\`

해결 방법을 검색하여 다른 계정을 새로 생성한 후 명령 프롬프트 창을 관리자 권한으로 열어 아래 명령어 수행 후 접속했다.

\`\`\`bash
net user <사용자명> /active:yes
\`\`\`

---

## 최종 해결

### 새 계정 생성 후 파일 이전

더 이상 기존 계정을 고치는 건 시간 낭비라고 판단하고, **새 계정을 만들어서 파일을 이전**하는 방법을 선택했다.

\`\`\`bash
# 새 계정 생성
net user <새계정명> 비밀번호 /add

# 관리자 그룹에 추가
net localgroup administrators <새계정명> /add
\`\`\`

### 이전한 파일/폴더 목록

| 분류      | 경로                                   | 비고              |
| --------- | -------------------------------------- | ----------------- |
| 개발 환경 | \`.ssh\`                                 | GitHub SSH 키     |
| 개발 환경 | \`.gradle\`, \`.m2\`                       | Gradle/Maven 설정 |
| 개발 환경 | \`.jdks\`                                | JDK               |
| 개발 환경 | \`.vscode\`, \`.vscode-shared\`            | VSCode 설정       |
| 개발 환경 | \`.claude\`                              | Claude Code 설정  |
| 앱 설정   | \`AppData\\Roaming\` (Microsoft 제외)     | 앱별 설정 데이터  |
| 개인 파일 | \`Desktop\`, \`Documents\`, \`Downloads\` 등 | 개인 파일         |
| 기타      | \`<작업폴더>\`                           | 개발 프로젝트     |

---

## 결론

| 시도                         | 결과                                |
| ---------------------------- | ----------------------------------- |
| \`chkdsk /f /r\`               | RAW 상태라 동작 안 함               |
| \`bootrec\` 복구               | 부팅 복구 성공                      |
| \`takeown\` + \`icacls\`         | 부분 성공, 시스템 앱은 여전히 안 됨 |
| \`icacls /reset\`              | 심볼릭 링크 무한 루프 → 계정 손상   |
| **새 계정 생성 + 파일 이전** | **최종 해결**                       |

글에는 작성하진 않았지만 windows 복구 업데이트, windows 11 ISO 업데이트도 수행해 보았으나 사용자 권한이 다시 재설정 되진 않았다.

**청소 전에 데이터 백업은 필수다.** 청소 작업이 저장장치에 직접 영향을 줄 수 있다. 만약 AI가 없었다면 그냥 윈도우 재설치를 통해 파일을 날려먹었을 수 있는 상황이었다.
만약 청소 후 처음 부팅할때 내가 재부팅하지 않고 기다렸다면 어떻게 됐을지는 모르겠지만 SSD가 RAW로 갔다 오면 **권한 구조가 통째로 날아갈 수 있다.**
그리고 권한 문제가 광범위하게 발생했을 땐 명령어 하나하나로 고치는 것보다 새 계정 만들고 파일 복사하는게 훨씬 빠른 것 같다.

그래도 잃어버린 데이터 없이 복구돼서 정말 다행이었다. 요즘 AI 성능이 좋으니 전문가의 말을 듣고 바로 수행하지 말고 한번 찾아보자.

나는 이 모든 문제 해결을 Claude의 도움을 받아 해결했다.
`,Mv=`---
title: "게임 개발기 1편 - 유튜브를 따라 만들다가, 내 게임을 계획하기까지"
date: "2026-08-03"
description: "인생 첫 게임 개발. 게임 시스템을 계획하기까지의 첫 주 기록."
tags: ["Unity", "C#", "게임", "Project", "Subject:NULL"]
---

퇴사하고 나서 개인 시간이 늘었다. 자연스럽게 친구들이랑 게임하는 시간이 많아졌는데, 하다 보니 개발자로서 궁금증이 생겼다.
**게임은 대체 어떻게 만들까?**

플레이어로서가 아니라 개발자로서 궁금해진 거다. 이 조작감은 코드로 어떻게 나오는 건지, 적은 어떤 기준으로 움직이는 건지. 그래서 직접 만들어보기로 했다.

또 처음 해보는 분야 개발을 AI와 함께 어디까지 해낼 수 있을지 궁금하여 AI 활용 경험을 쌓기 위해 Claude Code를 적극 활용하여 개발을 시작하기로 했다.

프로젝트 환경은 이랬다.

| 항목      | 내용                             |
| --------- | -------------------------------- |
| 엔진      | Unity 6                          |
| 언어      | C#                               |
| 장르      | 2D 탑다운 슈팅                   |
| 개발 기간 | 2026-06-27 ~ 2026-07-31 (약 5주) |

---

## 1. 게임 장르 정하기

만들고 싶은 방향은 **2D 도트 + 액션**이었다.
문제는 그걸 어떻게 만드는지를 하나도 몰랐다는 거다. Unity도 C#도 **한 번도 안 써봤다.**

하지만 요즘은 AI가 발달되어 Claude Code를 활용한다면 충분히 할 수 있을거라 생각하였다. 하지만 AI를 사용하기 전 기본적인 지식은 습득을 해보고 싶었다.

> 최소한 **기본적인 사용법은 알고 시작하자.**

그래서 유튜브부터 찾았다. 만들고 싶은 방향에 맞는 영상을 찾다가 Unity + C#으로 탑다운 게임을 만들어보는 강의 영상을 발견했고, 이걸 보면서 시작했다.

- 참고 영상: [https://www.youtube.com/watch?v=hgDquKjtA-I](https://www.youtube.com/watch?v=hgDquKjtA-I)

---

## 2. 일단 따라하기

영상을 보면서 움직임, 공격, 적 생성까지 그대로 따라 만들었다.

### 첫 커밋 (2026-06-27)

그렇게 나온 첫 결과물은 아래와 같은 구성이었다.
폴더 구조랄 것도 없었다. \`Assets/Scripts/\` 아래에 파일 6개가 그냥 평면으로 들어 있었다.

\`\`\`
Assets/
└── Scripts/
    ├── Bullet.cs
    ├── Character.cs
    ├── EnemyController.cs
    ├── GameManager.cs
    ├── ObjectPool.cs
    └── PlayerController.cs
\`\`\`

### 첫날 게임 화면

![첫날 게임 화면](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/01-first-game.png)

이때 화면에서 확인되는 건 이 정도다.

- 플레이어가 움직이고, 마우스로 쏘고, 파란 슬라임이 쫓아온다
- **UI가 하나도 없다.** 씬에 Canvas 자체가 0개다. 체력바도 없다
- 바닥은 **모눈종이 같은 격자**
- 캐릭터는 무료 에셋. itch.io의 Tech Dungeon(https://trevor-pupkin.itch.io/tech-dungeon-roguelite) 에셋을 사용했다

캐릭터가 내가 설정한대로 움직이는게 신기하고 재밌기도 했다.

### 다음 날 - UI 추가 (2026-06-28)

바로 다음 날 구현 내용은 \`UI 추가 + HP 바 추가\`다.
TextMesh Pro를 넣고 체력 UI를 붙였다. 첫날 없던 Canvas가 이때 처음 생겼다.

여기까지가 "따라 만들기"의 끝이다.

---

## 3. 나만의 게임, 나만의 기믹 기획하기

움직이고, 쏘고, 적이 죽고, 체력바가 줄어든다.
근데 계속 돌려보다 보니 걸리는 게 있었다.

> **플레이가 심하게 단순하다**
> 적을 향해 마우스를 대고 클릭한다. 위험하면 뒤로 뺀다. 그게 전부였다.

여기까지는 강의를 따라온 결과물이지, 내 게임은 아니었다.
**나만의 아이디어가 들어간 게임**을 만들려면 여기서 뭔가를 더 얹어야 했다.

그래서 7월 3일, 프로젝트에 문서를 하나 만들고 넣고 싶은 기능을 적기 시작했다.

### 당시 적었던 기획 원문

\`\`\`
1. 플레이어 대시 기능
- Space + 방향키 클릭 시 해당 방향으로 짧은 대시 스테미너 사용
  쿨타임 1초 (스테미너 추가 필요)
- 적의 원거리 공격 (총알, 화살, 레이저)를 아슬아슬하게 피했을 시,
  해당 오브젝트랑 플레이어의 거리가 특정 px 이하일때 대시로 피했을 시
  게임의 속도가 잠깐 슬로우 걸림

2. 스펠 마블
   플레이어가 사용가능한 특수 능력
   스페이드, 하트, 클로버, 다이아몬드로 타입이 나뉨
   ♠ 스페이드 = 공격
   ♥ 하트 = 회복
   ♣ 클로버 = 유틸/교란
   ♦ 다이아몬드 = 방어

- 플레이어는 사전에 스펠 마블 덱을 구성할 수 있음.
  개수는 대략 15~25개 예상중, MainScene에 덱 구성 씬이 추가되어야 함
- GameScene 우측 하단에 현재 사용 가능한 덱에 있는 스펠마블 5개의 타입이
  동그라미 다섯개에 표기됨
- ctrl 키를 클릭 시 우측 하단의 타입만 표기되던 동그라미 다섯개가
  조금 위로 올라오며 선택창이 뜸 (마우스 올릴시 상세 능력 확인 가능)
- ctrl을 클릭하여 스펠 마블을 고를때 선택 화면 제외 게임 속도 느려짐
- 스펠마블 드래그 앤 드랍 형식으로 사용가능
  특정위치에 능력을 발동 시킨다거나 플레이어 버프 스킬일 경우
  아무 곳에나 드롭해도 플레이어한테 적용되는 방식
- 스펠 마블의 등급이 존재함
  (일반(무색) -> 골드(금색) -> 다이아(푸른색) -> 레전드(무지개빛))
\`\`\`

---

## 4. 이 게임의 기믹이 될 두 가지

### ① 니어미스 슬로우모션

액션 느낌을 강조하기 위해 꼭 넣고 싶었던 기능이다.

> **간신히 피한 것**과 **여유롭게 피한 것**을 게임이 구분해서 알아봐 주는 장치.

회피 자체는 원래도 가능했다. 근데 아슬아슬하게 피하든 멀찍이 피하든 게임은 똑같이 반응했다.
여기에 **거리 판정**을 붙이면, 위험을 감수한 플레이가 화면 위에서 보상으로 돌아온다.

동작 흐름은 이렇게 잡았다.

\`\`\`
[적 원거리 공격 발사]
        │
        ▼
[플레이어가 대시로 회피]
        │
        ▼
  대시 중 총알과의 최소 거리 측정
        │
        ├── 특정 px 초과 ──▶ 아무 일 없음 (그냥 피한 것)
        │
        └── 특정 px 이하 ──▶ 니어미스 판정
                                  │
                                  ▼
                        게임 속도 잠깐 슬로우 및 확대 애니메이션
\`\`\`

플레이어가 아슬아슬하게 피했을 때 조금이나마 도파민이 느껴지게 구현하고 싶었다.

### ② 스펠 마블 기능

두 번째로 스펠 마블 기능이다. 단순하게 총만 쏘는 게임이 아닌 주인공이 특별한 기능을 상황에 맞게 사용하며 적을 물리치는 형태의 게임을 만들고 싶었다.

> "ctrl 키를 클릭 시 우측 하단의 타입만 표기되던 동그라미 다섯개가 **조금 위로 올라오며** 선택창이 뜸"

플레이어는 현재 자신이 사용가능한 스펠 마블의 타입이 무엇인지 항상 확인할 수 있으면 사용을 원할 경우 ctrl를 눌렀을때 마블 선택창이 뜨도록 하고 싶었다.

> "ctrl을 클릭하여 스펠 마블을 고를때 선택 화면 제외 게임 속도 느려짐"

대시의 니어미스 슬로우모션과 같은 장치가 스펠 선택에도 들어간 거다.
빠르게 쫓아오는 적을 피해 스펠을 고르는 것이 힘들것이다 판단하여 기획에 추가하였다.

> 위 기능은 후에 웹 배포 시 단축키 이슈로 Ctrl -> Shift로 키를 변경하였다.

### 스펠 마블 정리

스펠 마블은 트럼프 카드에서 영감을 받아 타입을 만들고 그 타입에 맞는 스펠들을 플레이어들이 골라 사용할 수 있도록 할 계획을 세웠다.

| 타입       | 기호 | 역할        |
| ---------- | ---- | ----------- |
| 스페이드   | ♠    | 공격        |
| 하트       | ♥    | 회복 / 버프 |
| 클로버     | ♣    | 유틸 / 교란 |
| 다이아몬드 | ♦    | 방어        |

또한 등급을 나눠 더 좋은 등급은 뽑기를 통해 얻어야 사용하는 가챠 시스템도 구현할 계획을 세웠다.

| 등급   | 색       |
| ------ | -------- |
| 일반   | 무색     |
| 골드   | 금색     |
| 다이아 | 푸른색   |
| 레전드 | 무지개빛 |

---

## 정리

첫 주를 요약하면 이렇다.

| 날짜  | 내용                                                  |
| ----- | ----------------------------------------------------- |
| 06-27 | 유튜브를 따라 만든 첫 커밋. UI 없음                   |
| 06-28 | TextMesh Pro 도입, Canvas 추가, HP 바 추가            |
| 07-03 | 대시 + 니어미스 슬로우모션 + 스펠 마블 계획 문서 작성 |

단순 강의를 보고 따라해 만든 결과물에서 시작해서, 일주일 만에 "내가 만들고 싶은 게임"의 형태를 글로 적는 데까지는 왔다.
물론 **적은 것과 만든 것은 완전히 다른 얘기**고, 여기 적힌 것 중 상당수는 나중에 바뀌거나 잘려 나간다.

아래는 현재 완성된 게임을 플레이 할 수 있는 사이트이다.

> 🎮 **완성된 게임 플레이해보기 → [subjectnull.netlify.app](https://subjectnull.netlify.app/)**
`,Nv=`---
title: "게임 개발기 2편 - Unity MCP 연결해보기"
date: "2026-08-05"
description: "Unity MCP를 붙이기. 연결 구조와 설치 방법, 그리고 붙이고 나서 실제로 달라진 것들."
tags: ["Unity", "MCP", "C#", "게임", "Project", "Subject:NULL"]
---

[1편](/blog/게임_개발_도전기_01)에서는 유튜브를 따라 만드는 것으로 시작해, 대시와 니어미스 슬로우모션, 스펠 마블을 계획하는 데까지 갔다.
이번 편은 그 계획을 실제로 구현해 나가던 중에 **작업 방식 자체가 바뀐 이야기**다.

---

## 코드는 받는데, 손은 계속 내가 움직였다

Claude Code는 코드를 준다. 근데 **Unity는 코드만으로 안 굴러간다.**

- 스크립트를 어느 오브젝트에 붙일지
- 인스펙터에서 어떤 값을 넣을지
- 프리팹을 어떻게 만들지
- 애니메이터 상태를 어떻게 연결할지

이건 전부 에디터에서 손으로 하는 작업이다. 그래서 실제 작업은 이렇게 굴러갔다.

\`\`\`
Claude Code: "Player 오브젝트에 SlowMotion.cs를 붙이고,
     slowScale을 0.3, duration을 0.35로 설정하세요"

나: (Unity로 가서 클릭클릭)
\`\`\`

코드는 AI가 쓰고, **에디터 조작은 내가 받아쓰기**하는 구조였다.

### 진짜 문제는 따로 있었다

더 답답한 건 문제가 생겼을 때였다.

> **AI는 화면을 못 본다.**
> 그래서 증상을 내가 말로 옮겨야 했다.

"이상하게 안 돼", "적이 안 움직임" 같은 식으로 내가 본 걸 설명하면, AI는 그 문장만 가지고 추측으로 원인을 좁혀 들어간다.
내가 증상을 잘못 설명하면 그때부터 엉뚱한 데를 파기 시작한다. 정작 원인은 인스펙터 값 하나를 잘못 넣은 거였는데...

---

## Unity MCP를 알게 됨

Unity에도 AI 기능이 있길래 이게 뭔가 관련 영상을 찾아보다가 **Unity MCP**가 존재한다는 걸 알았다.

> AI가 Unity 에디터를 **직접 조작**할 수 있게 해주는 연결 도구다.

설명을 듣고 내가 클릭하는 게 아니라, AI가 에디터에 직접 손을 대는 방식이다.

---

## 연결 구조

양쪽을 붙이는 구조다.

\`\`\`
Claude Code  ←→  http://127.0.0.1:8080/mcp  ←→  Unity 에디터(브리지)
\`\`\`

> 전체적인 연동은 아래 블로그를 참조하였다.
> https://blog.naver.com/i_am_gamer/224217569913

### ① Unity - 패키지 설치

설치하면 Unity 안에 브리지가 뜬다. 이게 로컬 포트로 명령을 받는 쪽이다.

### ② Claude Code - MCP 서버 등록

그 주소를 MCP 서버로 등록한다.

\`\`\`json
"UnityMCP": {
  "type": "http",
  "url": "http://127.0.0.1:8080/mcp"
}
\`\`\`

패키지에 클라이언트별 설정 도우미가 들어 있어서 Claude Code용 설정은 자동으로 잡아준다.

> **전제: Unity 에디터가 켜져 있어야 한다.**
> 에디터를 닫으면 연결이 끊기고, 다시 열면 붙는다. 브리지가 에디터 안에 살아 있기 때문이다.

---

## 붙이고 나서 달라진 것

AI가 할 수 있게 된 일은 이 정도다.

| 영역    | 할 수 있게 된 일                              |
| ------- | --------------------------------------------- |
| 씬 조작 | 오브젝트 생성·수정, 컴포넌트 값 변경          |
| 에셋    | ScriptableObject 생성, 스프라이트 임포트 설정 |
| 실행    | 플레이 모드 진입 → 런타임 값 읽기 → 종료      |
| 진단    | 콘솔 로그 읽기 (컴파일 에러 확인)             |
| 빌드    | WebGL 빌드 실행                               |

작업 흐름으로 비교하면 이렇게 바뀌었다.

|             | MCP 연결 전                 | MCP 연결 후           |
| ----------- | --------------------------- | --------------------- |
| 에디터 조작 | AI가 설명 → 내가 클릭       | AI가 직접 조작        |
| 값 확인     | 내가 인스펙터 보고 알려줌   | AI가 직접 읽음        |
| 에러 확인   | 내가 콘솔 복사해서 붙여넣음 | AI가 콘솔을 직접 읽음 |
| 문제 파악   | 내 말로 옮긴 증상 → 추측    | 실제 상태를 보고 판단 |

**"설명 → 내가 클릭" 단계가 사라졌다.**
그리고 더 큰 변화는 **증상을 말로 옮길 필요가 없어졌다는 것**이다. "적이 안 움직여"라고 설명할 필요 없이, 콘솔과 컴포넌트 값을 직접 보고 판단한다.

앞에서 "AI는 화면을 못 본다"고 했던 게 이 지점에서 해결된 셈이다.

---

## 직접 써보니

일단 혼자 개발하는 게임이다 보니 아이디어를 생각하고 그것을 직접 구현하는데에는 많은 시간이 걸린다.
하지만 Unity MCP를 사용하고 나서는 직접 Claude Code가 Unity 구성을 확인하여 기능 추가, 오류 수정등을 직접 해줄 수 있게 되었다.

심지어 직접 Claude Code가 게임을 플레이해보고 오류가 있는지 기능이 잘 구현됐는지 까지 테스트를 직접한다.

이 덕에 나는 게임 기믹, 스킬, 동작 등을 디테일하게 고민해볼 수 있는 시간이 늘어나게 되었다.

---

## 정리

- Unity는 코드만으로 완성되지 않는다. 에디터 조작이 항상 따라붙는다
- 그래서 AI와 작업할 때 **"AI가 코드를 쓰고, 사람이 에디터를 클릭하는"** 구간이 계속 생긴다
- Unity MCP는 그 구간을 없애준다. AI가 에디터를 직접 만지고, 콘솔과 런타임 값을 직접 읽는다
- 다만 **에디터가 켜져 있어야 붙는다**는 전제는 기억해둘 것

이제 기능 구현은 Unity MCP를 활용하여 효율적으로 할 수 있게 되었다. 다음 문제는 나만의 캐릭터 만들기이다.

> 🎮 **완성된 게임 플레이해보기 → [subjectnull.netlify.app](https://subjectnull.netlify.app/)**
`,wv=`---
title: "게임 개발기 3편 - MCP를 활용해 나만의 캐릭터 만들기"
date: "2026-08-10"
description: "PixelLab, Aseprite MCP를 연결하여 나만의 캐릭터 생성하기."
tags: ["MCP", "C#", "게임", "Project", "Subject:NULL"]
---

[1편](/blog/게임_개발_도전기_01)에서는 유튜브를 따라 만드는 것으로 시작해, 대시와 니어미스 슬로우모션, 스펠 마블을 계획하는 데까지 갔다.

[2편](/blog/게임_개발_도전기_02)에서는 Unity MCP를 붙이면서 작업 방식 자체가 바뀐 이야기를 했다.

이번 편은 **그림 문제**를 해결한 이야기다.

---

## 문제 - 나는 그림을 못 그린다.

1편에서 유튜브를 보고 만들 때는 무료 에셋을 받아 썼다.

당시엔 그냥 돌아가면 됐으니까 괜찮았다. 문제는 게임에 **컨셉이 생기면서** 시작됐다.

- 실험실에서 실험을 받는 실험체 이야기인데, 캐릭터는 그냥 파란 병사
- 적 생김새가 제한이 되어있어 추가가 불가능함.

게임의 분위기가 있는데 비주얼이 따라오질 못하는 상태였다.

---

## 첫 번째 시도 - Aseprite + Claude Code MCP

나만의 캐릭터 디자인이 필요하다는 건 알았다. 직접 그리는 건 애초에 불가능하니까, **Aseprite**라는 도트 툴을 Claude Code에 MCP로 연결해서 그림 생성을 시도해봤다.

결과는 처참했다.

디자인이 너무 단순하고 어색하게 나왔다. Aseprite 자체가 **직접 그리는 도구**지, AI가 생성해주는 도구가 아니다 보니 한계가 명확했다.

※ 결과
![Aseprite 결과물](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/frog-2-aseprite.png)

---

## PixelLab 발견

AI가 도트 이미지를 생성해주는 도구를 찾아보다가 **PixelLab**을 많이 추천하는 걸 발견했다. 일단 무료 토큰으로 직접 테스트해봤는데, 뽑아주는 퀄리티가 생각보다 훨씬 좋았다.

결제 후 확인해보니 **vibe coding으로 MCP 연결이 가능**하다는 걸 알았다. 공식 문서에서 명령어를 복사해 내 계정 API 키를 같이 입력하니까 연결됐다.

Unity MCP처럼 로컬 브리지가 필요 없다. 원격 주소를 등록하면 끝이다.

\`\`\`
claude mcp add pixellab https://api.pixellab.ai/mcp -t http -H "Authorization: Bearer {API Key}"
\`\`\`

---

## 핵심 - 화풍을 맞추는 법

그냥 "슬라임 만들어줘"라고 하면 매번 다른 화풍이 나온다. 이걸 해결하는 게 핵심이었다.

일단 하나를 먼저 생성 후 **생성한 스프라이트를 참조로 넣으면** 그 톤에 맞춰 나머지도 그려준다.

덕분에 7종이 **한 세트처럼** 보인다.

**만든 것:** 슬라임 / 탱크슬라임 / 박쥐 / 샷건박쥐 / 레이저박쥐 / 개구리 / 힐드론

컨셉은 전부 **"실험실 표본 몬스터"** - 빛나는 코어, 바이오테크 느낌.

사실 이것도 Claude Code에게 디자인을 맞춰 달라하면 알아서 맞춰서 모두 생성해준다.

![적 7종 결과물](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/all-enemy.png)

기존 Aseprite mcp를 연결해서 생성했던 것과 차원이 다른 퀄리티인것을 확인할 수 있다.

### Aseprite 생성 결과

![Aseprite 결과물](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/frog-2-aseprite.png)

### PixelLab 생성 결과

![PixelLab 결과물](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/frog-3-pixellab.png)

Aseprite는 PixelLab 처럼 전문 AI가 생성하는것이 아닌 Claude Code가 하나하나 찍어서 생성하는 것이기 때문에 새로운 적 생성으로 사용하는 것보다는 PixelLab에서 뽑은 Sprite에서 디테일하게 수정하고 싶은 부분이 있을 때 사용하는 것이 좋은 것 같다.

---

## 적 몬스터 Sprite (Claude code)

### ① 생성 - 후보를 여러 개 받는다

한 번에 하나만 뽑지 않고, **여러 후보를 받아서 고르는** 방식이다. 토큰 소모가 있지만 그냥 쓰면 결과가 복불복이라 이렇게 하는 게 낫다.

### ② 애니메이션

디자인이 정해지면 이후 애니메이션에 사용할 sprite를 생성한다.

### ③ 시트로 합치기

프레임이 낱장 이미지로 나온다. 이걸 가로로 이어 붙여 스프라이트 시트를 만든다.

\`\`\`
결과: 448×64 = 64px 프레임 7장 (적 7종 모두 동일 규격)
\`\`\`

### ④ Unity 임포트

\`\`\`
Sprite Mode  = Multiple
Slice        = 64×64
Filter Mode  = Point  ← 도트가 뭉개지지 않게
Compression  = None
\`\`\`

### ⑤ 애니메이션 클립 재연결

기존 클립의 프레임 참조만 새 스프라이트로 갈아끼운다. \`Idle\` / \`Run\` / \`Spawn\`.

---

## Player 생성

### ① 생성

플레이어 생성은 일단 내가 원하는 Sprite를 생성한뒤 맘에 드는 캐릭터를 고른다.
![PixelLab Player 생성화면](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/player-gen.png)

### ② 애니메이션

Pixel Lab에서 제공해주는 애니메이션 생성 기능을 사용하면 GIF 형태로 움직이는 캐릭터 애니메이션 이미지를 다운받을 수 있다.
![PixelLab Player animation 생성화면1](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/player-animation.png)
![PixelLab Player animation 생성화면2](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/player-animation2.png)

### ③ 게임 적용

일단 GIF 파일을 프로젝트 내에 넣어놓은 뒤 Claude Code에게 "애니메이션(대기, 이동, 사망) GIF 이미지를 넣어놨으니 적용해 줘." 라고 프롬프트를 입력하면 GIF 이미지를 프레임 별로 자른 뒤 Animation을 적용해 준다.

---

## Aseprite와 나눠 쓰기

PixelLab으로 모든게 다 해결되진 않았다. **Aseprite**도 병행해서 썼다.

역할이 명확하게 나뉜다.

|              | 잘 되는 것                   | 안 되는 것      |
| ------------ | ---------------------------- | --------------- |
| **PixelLab** | 일러스트급 아이콘, 큰 캐릭터 | 픽셀 단위 통제  |
| **Aseprite** | 픽셀 단위 정교한 수정        | 정교한 일러스트 |

생성은 **PixelLab**, 세부 수정은 **Aseprite**. 이 조합이 잘 맞았다.

---

## 결과

| 항목     | 내용                       |
| -------- | -------------------------- |
| 적       | 7종 (448×64, 64px 7프레임) |
| 플레이어 | 실험체 컨셉으로 교체       |

무료 에셋으로 시작한 게임이 **나만의 화풍**을 갖게 됐다.

---

## 마치며

그림을 못 그려도 게임에 컨셉을 입힐 수 있다는 걸 이번 작업으로 확인했다.

다음 편에서는 [*AI를 활용한 UI 및 일러스트 생성*]을 다룰 예정이다.

---

🎮 완성된 게임 플레이 → [subjectnull.netlify.app](https://subjectnull.netlify.app/)
`,Dv=`---
title: "게임 개발기 4편 - 메인 일러스트와 UI 생성"
date: "2026-08-26"
description: "ChatGPT와 PixelLab MCP를 활용한 일러스트 및 UI 생성"
tags: ["Unity", "PixelLab", "ChatGPT", "게임", "Project", "Subject:NULL"]
---

[3편](/blog/게임_개발_도전기_03)에서 캐릭터와 적을 도트로 통일했다.
이번 편은 **화면**을 손본 내용이다. 메인 화면 일러스트부터 시작했는데, 그게 UI를 통째로 갈아엎는 계기가 됐다.

---

## 메인 화면 배경부터

메인 화면은 게임의 첫인상이다.

플레이어가 게임을 켜고 제일 먼저 보는 화면인데, 여기가 비어 있으면 그 뒤가 아무리 괜찮아도 첫인상이 깎인다.
그래서 여기만큼은 **화면을 통째로 채우는 그림**이 필요했다.

그래서 ChatGPT 이미지 생성으로 갔다.

### 실제로 넣은 프롬프트

<details>
<summary><b>프롬프트 펼쳐보기</b></summary>

\`\`\`
게임 타이틀 스크린용 키아트, 클리니컬 화이트 사이파이 실험실 컨셉.

주제: 밝고 새하얀 실험실 안에 서있는 인물. 오른팔이 총열이 노출된 기계 의수로
개조되어 있음, 팔 관절 사이로 은은한 빛(시안 또는 앰버색)이 새어나옴.

구도: 정면 또는 살짝 로우앵글. 인물은 화면 중앙 또는 하단에 배치,
상단에 타이틀 로고 들어갈 여백 남김.

배경: 밝은 화이트/라이트그레이 톤의 실험실. 깨끗한 유리 캡슐, 스테인리스 배관,
밝은 형광등/LED 조명들이 초점 흐리게 뒤로 물러나 있음.
그림자는 짧고 선명하게, 채광이 강한 느낌.

조명: 위에서 떨어지는 밝고 균일한 조명. 인물 실루엣이 어둡게 죽지 않고
디테일이 살아있는 정도로, 의수 부분만 포인트 라이트로 강조.

색상: 화이트/라이트그레이/스틸블루 베이스, 시안 또는 앰버 포인트 컬러,
붉은 경고등 소량. 채도는 낮은 편이지만 전체적으로 밝고 클린한 톤.

분위기: 무균실 같은 청결함과 통제된 느낌.
"밝지만 어딘가 비인간적이고 관찰당하는 듯한 불편함"이 배어있는 톤
— 밝다고 안전하거나 따뜻한 느낌은 아님.

타이포그래피(로고) 참고: "SUBJECT: NULL" 텍스트는 의료 서류/모니터 UI 느낌의
각진 산세리프 폰트로, 다크 네이비 또는 블랙 컬러로 배치해서
밝은 배경 위에서도 잘 읽히게.

전체 스타일: 클린 사이파이, 시네마틱 조명, 밝지만 차갑고 통제된 색감.
따뜻하거나 아늑한 느낌은 배제.
\`\`\`

</details>

결과를 보고 너무 일러스트가 고퀄리티로 나오는 것이 확인됐다.

> 일러스트가 너무 고퀄리티로 나오면, **도트 게임 화면과 붙였을 때 이질감이 생기지 않을까?**

타이틀은 번쩍이는 일러스트인데 시작 버튼을 누르면 도트가 나오는 상황. 그건 오히려 안 하느니만 못하다.
그래서 **일러스트도 도트 느낌이 나게** 뽑아달라고 요청했다.

**4번 만에 원하는 게 나왔다.**

![Illust 결과물](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/illust.png)

### 결과물에 담긴 것

- 배양관이 늘어선 실험실 복도
- 관 안에 서 있는 실험체들
- 가운데 주인공
- 손에 든 스펠 오브
- 상단 **SUBJECT:NULL** 로고 — NULL 쪽만 노이즈 느낌

**게임 컨셉이 그림 하나에 다 들어갔다.**

퀄리티에도 좀 놀랐다. 프롬프트 몇 줄로 이 정도가 나오는 걸 보고 **AI가 빠르게 발전하고 있다는 걸 체감**했다.

이 그림은 **로그인 화면과 메인 메뉴 두 곳**의 배경으로 넣었다.

---

## 그런데 배경을 넣고 나니

버튼 기능까지 다 만들고, 게임을 **처음부터 한 번 쭉 실행해봤다.**

로그인 → 메인 → 덱 → 가챠 → 게임 → 일시정지 순으로 넘어가는데, 여기서 문제가 눈에 들어왔다.

![only illust](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/only_illust.png)

**배경이 좋아지니까 그 위에 올라간 버튼이 더 초라해 보였다.**

실험실 키아트를 깔아놨는데 그 위에 얹힌 건 **회색 사각형 버튼** 뿐이었다.
코드로 색만 찍어서 만든 것들이라 그림판으로 대충 그린 것처럼 보였다.

배경이 없을 때는 그럭저럭 넘어갔는데, 배경이 제대로 들어가니까 대비가 확 드러났다.

> **UI가 화면의 절반을 차지한다.**
> 덱 구성, 가챠, 설정, 일시정지 - 게임플레이만큼 오래 보는 화면이다.

여기를 놔두면 게임 전체가 대충 만든 것처럼 보인다. 그래서 UI를 갈아엎기로 했다.

---

## PixelLab로 UI 프레임 만들기

claude code에 Pixel Lab MCP를 연동하여 UI를 뽑아달라고 하였다.

컨셉은 캐릭터, 그리고 방금 만든 타이틀 일러스트와 같은 **"실험실"**. 청록 네온 테두리, 금속 질감, 관찰 창 느낌으로 갔다.

| 만든 것             | 크기    | 쓰이는 곳                                   |
| ------------------- | ------- | ------------------------------------------- |
| \`SubjectNullButton\` | 579×159 | **9곳** - 로그인·덱·가챠·설정·일시정지 전부 |
| \`LabDossierPanel\`   | 291×158 | **9곳** - 패널 배경                         |
| \`SpecimenCardFrame\` | 350×475 | 덱·가챠 카드 프레임                         |
| \`StaminaTrack\`      | 550×99  | 스태미너 게이지 틀                          |
| \`HologramPanel\`     | 160×81  | 스펠 아이콘 홀로그램                        |

만든 건 **5종뿐**이다. 그런데 버튼 하나가 9곳에서 쓰인다.

**UI 부품 몇 개로 게임 전체 인상이 바뀐다.** 화면마다 따로 그릴 필요가 없다.

---

## 도구를 나눠 쓴 기준

결과적으로 이런 기준으로 갈렸다.

|              | 쓴 곳                     | 이유                                                    |
| ------------ | ------------------------- | ------------------------------------------------------- |
| **ChatGPT**  | 타이틀 일러스트           | 화면을 **통째로** 채우는 그림 — 도트로는 밀도가 안 나옴 |
| **PixelLab** | UI 프레임, 아이콘, 캐릭터 | 게임 화면 **안**에 들어가는 것 — 도트와 톤이 맞아야 함  |

> **게임 밖(타이틀)은 일러스트, 게임 안은 도트로 통일.**

경계가 명확해서 섞이는 구간이 없다. 타이틀에서 시작 버튼을 누르는 순간 도트 세계로 넘어가는 구조다.

---

## 결과

![result](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/last_menu.png)

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| 타이틀 일러스트 | 1672×894, 2개 화면 배경                                    |
| UI 프레임       | 5종 (버튼 · 패널 · 카드 · 게이지 · 홀로그램)               |
| 적용 화면       | 로그인 / 메인메뉴 / 덱 / 가챠 / 설정 / 일시정지 / 게임오버 |

---

다음 편에서는 [효과음 생성]을 정리한다.

> 🎮 **완성된 게임 플레이해보기 → [subjectnull.netlify.app](https://subjectnull.netlify.app/)**
`,Ov=`---
title: "게임 개발기 5편 - 효과음"
date: "2026-09-08"
description: "sfxr로 효과음 생성"
tags: ["Unity", "게임", "Project", "Subject:NULL"]
---

[4편](/blog/게임_개발_도전기_04)에서 타이틀 일러스트와 UI를 갈아엎었다.
화면은 이제 볼 만해졌는데, 플레이해보면 여전히 뭔가 빠져 있었다.

---

## 문제 - 소리가 없으니 허전했다

스펠을 계속 만들었다. 이펙트도 붙였다.
그런데 실행해보면 **뭔가 빠진 느낌**이 계속 남았다.

원인은 소리였다.

- 총을 쏘는데 아무 소리가 안 난다
- 적이 죽어도 조용하다
- 스펠을 써도 화면만 번쩍인다

그림은 AI로 해결했는데([3편](/blog/게임_개발_도전기_03) · [4편](/blog/게임_개발_도전기_04)), **소리는 어디서 구해야 할지 몰랐다.**
효과음 사이트는 대부분 유료거나 저작권 조건이 붙어 있었다.

---

## sfxr을 알게 됨

Claude에게 물어봤더니 알려준 사이트다.

**[https://sfxr.me/](https://sfxr.me/)**

브라우저에서 바로 되는 **8비트/16비트 효과음 생성기**다. 설치도, 가입도 없다.

![jsfxr 화면](https://hw-blog.s3.ap-northeast-2.amazonaws.com/SubjectNull/jsfxr.png)

### 쓰는 법

화면 왼쪽에 **상황별 버튼**이 있다.

\`\`\`
PICKUP/COIN     획득
LASER/SHOOT     발사
EXPLOSION       폭발
POWERUP         강화
HIT/HURT        피격
Click           클릭
JUMP            점프
BLIP/SELECT     UI 선택
RANDOM          무작위
MUTATE          현재 소리를 조금씩 변형
\`\`\`

버튼을 누르면 그 성격의 소리가 **즉시 생성**된다. 마음에 안 들면 다시 누르면 된다. 누를 때마다 다른 소리가 나온다.

비슷한데 조금 아쉬우면 \`MUTATE\`로 미세 변형을 반복한다.
원하는 게 나오면 \`EXPORT .WAV\`로 받는다.

### 왜 이게 맞았나

|                             |                                         |
| --------------------------- | --------------------------------------- |
| **무료 · 저작권 걱정 없음** | 내가 생성한 효과음이다                  |
| **도트와 톤이 맞음**        | 8비트/16비트 소리가 픽셀아트와 어울린다 |
| **빠름**                    | 버튼 몇 번이면 하나가 나온다            |

두 번째가 특히 컸다. 잘 만든 실사 녹음 효과음을 가져다 써봤자 도트 화면과는 따로 논다.
[4편](/blog/게임_개발_도전기_04)에서 "일러스트가 너무 고퀄이면 이질감이 생긴다"고 고민했던 것과 같은 얘기다.

---

## 만든 것

sfxr로 다양한 효과음을 생성했다.

\`\`\`
Player/     PlayerShoot, Player Hit, Player Dead, Player Dash
Enemy/      Enemy Hit, Enemy Dead, BatShot
Marble/     Marble Click / Pick / Use   ← 공통 조작음
  Spade/    Apocalypse, BlackHole, Grenade, Railgun
  Heart/    Resurrection
  Clove/    Freeze, TimeStop
  Diamond/  EMField, IronSkin, MirrorWorld, RepulseNova, Shield
UI/         UIClick, UIHover
\`\`\`

**폴더를 종류별로 나눴다.** 스펠이 34종이라 한 폴더에 몰아두면 나중에 못 찾는다.

---

## 소리를 겹쳐 쌓는 구조

스펠 하나를 쓰면 소리가 **두 겹**으로 난다.

\`\`\`
① Marble Use      - 모든 스펠 공통 "발동됨" 베이스음
                    ↓ 위에 얹힘
② activationSound - 그 스펠 고유의 소리
\`\`\`

공통 스펠 발동 효과음이 추가되고나서, 고유 효과음이 없는 스펠오브 사용도 밋밋하지 않았다.

> 공통음이 깔려 있으면, **고유음이 없는 스펠도 심심하지 않다.**

조작음도 단계별로 나눴다.

| 동작               | 소리                  |
| ------------------ | --------------------- |
| 슬롯에 마우스 올림 | \`Marble Click\` (호버) |
| 오브를 집음        | \`Marble Pick\`         |
| 발동 성공          | \`Marble Use\` + 고유음 |

### 넣고 나서

효과음을 넣고 처음 플레이해봤을 때 차이가 확실했다.

스킬을 쓰거나 적을 처치할 때 **쾌감이 훨씬 잘 느껴졌다.** 화면은 그대로인데 도파민이 도는 게 체감됐다.
이펙트만 있을 때는 "뭔가 일어났구나" 정도였는데, 소리가 붙으니까 적을 한번에 많이 처치할 수록 쾌감이 느껴졌다.

---

## 나중에 터진 문제 - 귀가 아팠다

효과음을 다 넣고 한참 지난 뒤에 나온 문제다.

**아포칼립스** - 화면의 모든 적을 즉사시키는 스펠이다.
이걸 쓰면 적이 수십 마리가 동시에 죽는데, 그때 사망음이 **전부 같은 음량으로 동시에** 울렸다.

> 소리는 겹치면 **진폭이 그대로 더해진다.**
> 20마리가 죽으면 20배다.

실제로 귀가 아플 정도였다.

### 해결 - 개수는 두고 총량만 줄인다

처음엔 동시 재생 개수를 확 제한할까 싶었는데, 그러면 **여러 마리가 한꺼번에 죽는 쾌감**이 죽는다.
그 쾌감은 남겨야 했다. 그래서 소리를 없애는 대신 **겹칠수록 작아지게** 했다.

| 몇 번째 소리 | 음량       |
| ------------ | ---------- |
| 1            | 1.00       |
| 2            | 0.65       |
| 3            | 0.42       |
| 4            | 0.27       |
| 5            | 0.18       |
| 6번째부터    | 재생 안 함 |

결과는 이렇게 바뀌었다.

|      | 음량 합계 |
| ---- | --------- |
| 이전 | **20배**  |
| 이후 | **2.5배** |

중요한 건 **한 마리만 죽을 때는 그대로 1.00배**라는 점이다.
**0.12초 안에 몰린 것만** 겹침으로 세기 때문에, 간간이 나는 소리는 항상 제 음량으로 들린다.

> 효과음은 "넣으면 끝"이 아니었다.
> **몇 개가 동시에 나는지**까지 관리해야 했다.

---

## 결과

|        |                                              |
| ------ | -------------------------------------------- |
| 효과음 | sfxr                                         |
| 적용   | 발사 · 피격 · 사망 · 대시 · 스펠 · UI · 경고 |
| 비용   | **0원**                                      |

---

## 정리

- 이펙트를 아무리 붙여도 **소리가 없으면 허전하다.** 타격감은 절반이 소리다
- **sfxr**은 무료에 저작권 문제도 없고, 무엇보다 도트 화면과 톤이 맞는다
- 소리도 **공통음 + 고유음** 구조로 쌓으면, 고유음이 없는 것까지 어느정도 커버된다
- 동시 재생은 반드시 제어할 것. **겹치면 진폭이 그대로 더해진다**
- 다만 개수를 자르지 말고 **음량을 감쇠시키자.** 쾌감은 살리고 총량만 줄이는 방향으로

다음 편에서는 [서버와 배포 (UGS + WebGL + Netlify)]를 정리한다.

> 🎮 **완성된 게임 플레이해보기 → [subjectnull.netlify.app](https://subjectnull.netlify.app/)**
`;function To(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var sa=To();function Hp(u){sa=u}var $l={exec:()=>null};function he(u,r=""){let s=typeof u=="string"?u:u.source,o={replace:(f,d)=>{let m=typeof d=="string"?d:d.source;return m=m.replace(We.caret,"$1"),s=s.replace(f,m),o},getRegex:()=>new RegExp(s,r)};return o}var kv=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),We={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i")},jv=/^(?:[ \t]*(?:\n|$))+/,zv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Lv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ni=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Uv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Mo=/(?:[*+-]|\d{1,9}[.)])/,Bp=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,qp=he(Bp).replace(/bull/g,Mo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Gv=he(Bp).replace(/bull/g,Mo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),No=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Hv=/^[^\n]+/,wo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Bv=he(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",wo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),qv=he(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Mo).getRegex(),ku="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Do=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Qv=he("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Do).replace("tag",ku).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Qp=he(No).replace("hr",ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex(),Yv=he(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Qp).getRegex(),Oo={blockquote:Yv,code:zv,def:Bv,fences:Lv,heading:Uv,hr:ni,html:Qv,lheading:qp,list:qv,newline:jv,paragraph:Qp,table:$l,text:Hv},rp=he("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex(),Vv={...Oo,lheading:Gv,table:rp,paragraph:he(No).replace("hr",ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",rp).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex()},Xv={...Oo,html:he(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Do).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$l,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:he(No).replace("hr",ni).replace("heading",` *#{1,6} *[^
]`).replace("lheading",qp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Jv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Zv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yp=/^( {2,}|\\)\n(?!\s*$)/,Iv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ju=/[\p{P}\p{S}]/u,ko=/[\s\p{P}\p{S}]/u,Vp=/[^\s\p{P}\p{S}]/u,Kv=he(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ko).getRegex(),Xp=/(?!~)[\p{P}\p{S}]/u,Pv=/(?!~)[\s\p{P}\p{S}]/u,$v=/(?:[^\s\p{P}\p{S}]|~)/u,Fv=he(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",kv?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Jp=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Wv=he(Jp,"u").replace(/punct/g,ju).getRegex(),e1=he(Jp,"u").replace(/punct/g,Xp).getRegex(),Zp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",n1=he(Zp,"gu").replace(/notPunctSpace/g,Vp).replace(/punctSpace/g,ko).replace(/punct/g,ju).getRegex(),t1=he(Zp,"gu").replace(/notPunctSpace/g,$v).replace(/punctSpace/g,Pv).replace(/punct/g,Xp).getRegex(),a1=he("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Vp).replace(/punctSpace/g,ko).replace(/punct/g,ju).getRegex(),l1=he(/\\(punct)/,"gu").replace(/punct/g,ju).getRegex(),i1=he(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),u1=he(Do).replace("(?:-->|$)","-->").getRegex(),r1=he("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",u1).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Mu=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,s1=he(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Mu).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ip=he(/^!?\[(label)\]\[(ref)\]/).replace("label",Mu).replace("ref",wo).getRegex(),Kp=he(/^!?\[(ref)\](?:\[\])?/).replace("ref",wo).getRegex(),o1=he("reflink|nolink(?!\\()","g").replace("reflink",Ip).replace("nolink",Kp).getRegex(),sp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,jo={_backpedal:$l,anyPunctuation:l1,autolink:i1,blockSkip:Fv,br:Yp,code:Zv,del:$l,emStrongLDelim:Wv,emStrongRDelimAst:n1,emStrongRDelimUnd:a1,escape:Jv,link:s1,nolink:Kp,punctuation:Kv,reflink:Ip,reflinkSearch:o1,tag:r1,text:Iv,url:$l},c1={...jo,link:he(/^!?\[(label)\]\((.*?)\)/).replace("label",Mu).getRegex(),reflink:he(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mu).getRegex()},go={...jo,emStrongRDelimAst:t1,emStrongLDelim:e1,url:he(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",sp).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:he(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",sp).getRegex()},f1={...go,br:he(Yp).replace("{2,}","*").getRegex(),text:he(go.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Su={normal:Oo,gfm:Vv,pedantic:Xv},Zl={normal:jo,gfm:go,breaks:f1,pedantic:c1},d1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},op=u=>d1[u];function ft(u,r){if(r){if(We.escapeTest.test(u))return u.replace(We.escapeReplace,op)}else if(We.escapeTestNoEncode.test(u))return u.replace(We.escapeReplaceNoEncode,op);return u}function cp(u){try{u=encodeURI(u).replace(We.percentDecode,"%")}catch{return null}return u}function fp(u,r){var d;let s=u.replace(We.findPipe,(m,g,b)=>{let p=!1,S=g;for(;--S>=0&&b[S]==="\\";)p=!p;return p?"|":" |"}),o=s.split(We.splitPipe),f=0;if(o[0].trim()||o.shift(),o.length>0&&!((d=o.at(-1))!=null&&d.trim())&&o.pop(),r)if(o.length>r)o.splice(r);else for(;o.length<r;)o.push("");for(;f<o.length;f++)o[f]=o[f].trim().replace(We.slashPipe,"|");return o}function Il(u,r,s){let o=u.length;if(o===0)return"";let f=0;for(;f<o&&u.charAt(o-f-1)===r;)f++;return u.slice(0,o-f)}function h1(u,r){if(u.indexOf(r[1])===-1)return-1;let s=0;for(let o=0;o<u.length;o++)if(u[o]==="\\")o++;else if(u[o]===r[0])s++;else if(u[o]===r[1]&&(s--,s<0))return o;return s>0?-2:-1}function dp(u,r,s,o,f){let d=r.href,m=r.title||null,g=u[1].replace(f.other.outputLinkReplace,"$1");o.state.inLink=!0;let b={type:u[0].charAt(0)==="!"?"image":"link",raw:s,href:d,title:m,text:g,tokens:o.inlineTokens(g)};return o.state.inLink=!1,b}function p1(u,r,s){let o=u.match(s.other.indentCodeCompensation);if(o===null)return r;let f=o[1];return r.split(`
`).map(d=>{let m=d.match(s.other.beginningSpace);if(m===null)return d;let[g]=m;return g.length>=f.length?d.slice(f.length):d}).join(`
`)}var Nu=class{constructor(u){Ee(this,"options");Ee(this,"rules");Ee(this,"lexer");this.options=u||sa}space(u){let r=this.rules.block.newline.exec(u);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(u){let r=this.rules.block.code.exec(u);if(r){let s=r[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Il(s,`
`)}}}fences(u){let r=this.rules.block.fences.exec(u);if(r){let s=r[0],o=p1(s,r[3]||"",this.rules);return{type:"code",raw:s,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:o}}}heading(u){let r=this.rules.block.heading.exec(u);if(r){let s=r[2].trim();if(this.rules.other.endingHash.test(s)){let o=Il(s,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(s=o.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(u){let r=this.rules.block.hr.exec(u);if(r)return{type:"hr",raw:Il(r[0],`
`)}}blockquote(u){let r=this.rules.block.blockquote.exec(u);if(r){let s=Il(r[0],`
`).split(`
`),o="",f="",d=[];for(;s.length>0;){let m=!1,g=[],b;for(b=0;b<s.length;b++)if(this.rules.other.blockquoteStart.test(s[b]))g.push(s[b]),m=!0;else if(!m)g.push(s[b]);else break;s=s.slice(b);let p=g.join(`
`),S=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${p}`:p,f=f?`${f}
${S}`:S;let E=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,d,!0),this.lexer.state.top=E,s.length===0)break;let D=d.at(-1);if((D==null?void 0:D.type)==="code")break;if((D==null?void 0:D.type)==="blockquote"){let w=D,B=w.raw+`
`+s.join(`
`),G=this.blockquote(B);d[d.length-1]=G,o=o.substring(0,o.length-w.raw.length)+G.raw,f=f.substring(0,f.length-w.text.length)+G.text;break}else if((D==null?void 0:D.type)==="list"){let w=D,B=w.raw+`
`+s.join(`
`),G=this.list(B);d[d.length-1]=G,o=o.substring(0,o.length-D.raw.length)+G.raw,f=f.substring(0,f.length-w.raw.length)+G.raw,s=B.substring(d.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:d,text:f}}}list(u){var s,o;let r=this.rules.block.list.exec(u);if(r){let f=r[1].trim(),d=f.length>1,m={type:"list",raw:"",ordered:d,start:d?+f.slice(0,-1):"",loose:!1,items:[]};f=d?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=d?f:"[*+-]");let g=this.rules.other.listItemRegex(f),b=!1;for(;u;){let S=!1,E="",D="";if(!(r=g.exec(u))||this.rules.block.hr.test(u))break;E=r[0],u=u.substring(E.length);let w=r[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,V=>" ".repeat(3*V.length)),B=u.split(`
`,1)[0],G=!w.trim(),H=0;if(this.options.pedantic?(H=2,D=w.trimStart()):G?H=r[1].length+1:(H=r[2].search(this.rules.other.nonSpaceChar),H=H>4?1:H,D=w.slice(H),H+=r[1].length),G&&this.rules.other.blankLine.test(B)&&(E+=B+`
`,u=u.substring(B.length+1),S=!0),!S){let V=this.rules.other.nextBulletRegex(H),I=this.rules.other.hrRegex(H),L=this.rules.other.fencesBeginRegex(H),F=this.rules.other.headingBeginRegex(H),ee=this.rules.other.htmlBeginRegex(H);for(;u;){let re=u.split(`
`,1)[0],P;if(B=re,this.options.pedantic?(B=B.replace(this.rules.other.listReplaceNesting,"  "),P=B):P=B.replace(this.rules.other.tabCharGlobal,"    "),L.test(B)||F.test(B)||ee.test(B)||V.test(B)||I.test(B))break;if(P.search(this.rules.other.nonSpaceChar)>=H||!B.trim())D+=`
`+P.slice(H);else{if(G||w.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(w)||F.test(w)||I.test(w))break;D+=`
`+B}!G&&!B.trim()&&(G=!0),E+=re+`
`,u=u.substring(re.length+1),w=P.slice(H)}}m.loose||(b?m.loose=!0:this.rules.other.doubleBlankLine.test(E)&&(b=!0)),m.items.push({type:"list_item",raw:E,task:!!this.options.gfm&&this.rules.other.listIsTask.test(D),loose:!1,text:D,tokens:[]}),m.raw+=E}let p=m.items.at(-1);if(p)p.raw=p.raw.trimEnd(),p.text=p.text.trimEnd();else return;m.raw=m.raw.trimEnd();for(let S of m.items){if(this.lexer.state.top=!1,S.tokens=this.lexer.blockTokens(S.text,[]),S.task){if(S.text=S.text.replace(this.rules.other.listReplaceTask,""),((s=S.tokens[0])==null?void 0:s.type)==="text"||((o=S.tokens[0])==null?void 0:o.type)==="paragraph"){S.tokens[0].raw=S.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),S.tokens[0].text=S.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let D=this.lexer.inlineQueue.length-1;D>=0;D--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[D].src)){this.lexer.inlineQueue[D].src=this.lexer.inlineQueue[D].src.replace(this.rules.other.listReplaceTask,"");break}}let E=this.rules.other.listTaskCheckbox.exec(S.raw);if(E){let D={type:"checkbox",raw:E[0]+" ",checked:E[0]!=="[ ]"};S.checked=D.checked,m.loose?S.tokens[0]&&["paragraph","text"].includes(S.tokens[0].type)&&"tokens"in S.tokens[0]&&S.tokens[0].tokens?(S.tokens[0].raw=D.raw+S.tokens[0].raw,S.tokens[0].text=D.raw+S.tokens[0].text,S.tokens[0].tokens.unshift(D)):S.tokens.unshift({type:"paragraph",raw:D.raw,text:D.raw,tokens:[D]}):S.tokens.unshift(D)}}if(!m.loose){let E=S.tokens.filter(w=>w.type==="space"),D=E.length>0&&E.some(w=>this.rules.other.anyLine.test(w.raw));m.loose=D}}if(m.loose)for(let S of m.items){S.loose=!0;for(let E of S.tokens)E.type==="text"&&(E.type="paragraph")}return m}}html(u){let r=this.rules.block.html.exec(u);if(r)return{type:"html",block:!0,raw:r[0],pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:r[0]}}def(u){let r=this.rules.block.def.exec(u);if(r){let s=r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",f=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:s,raw:r[0],href:o,title:f}}}table(u){var m;let r=this.rules.block.table.exec(u);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;let s=fp(r[1]),o=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),f=(m=r[3])!=null&&m.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],d={type:"table",raw:r[0],header:[],align:[],rows:[]};if(s.length===o.length){for(let g of o)this.rules.other.tableAlignRight.test(g)?d.align.push("right"):this.rules.other.tableAlignCenter.test(g)?d.align.push("center"):this.rules.other.tableAlignLeft.test(g)?d.align.push("left"):d.align.push(null);for(let g=0;g<s.length;g++)d.header.push({text:s[g],tokens:this.lexer.inline(s[g]),header:!0,align:d.align[g]});for(let g of f)d.rows.push(fp(g,d.header.length).map((b,p)=>({text:b,tokens:this.lexer.inline(b),header:!1,align:d.align[p]})));return d}}lheading(u){let r=this.rules.block.lheading.exec(u);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(u){let r=this.rules.block.paragraph.exec(u);if(r){let s=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:s,tokens:this.lexer.inline(s)}}}text(u){let r=this.rules.block.text.exec(u);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(u){let r=this.rules.inline.escape.exec(u);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(u){let r=this.rules.inline.tag.exec(u);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(u){let r=this.rules.inline.link.exec(u);if(r){let s=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let d=Il(s.slice(0,-1),"\\");if((s.length-d.length)%2===0)return}else{let d=h1(r[2],"()");if(d===-2)return;if(d>-1){let m=(r[0].indexOf("!")===0?5:4)+r[1].length+d;r[2]=r[2].substring(0,d),r[0]=r[0].substring(0,m).trim(),r[3]=""}}let o=r[2],f="";if(this.options.pedantic){let d=this.rules.other.pedanticHrefTitle.exec(o);d&&(o=d[1],f=d[3])}else f=r[3]?r[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?o=o.slice(1):o=o.slice(1,-1)),dp(r,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:f&&f.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(u,r){let s;if((s=this.rules.inline.reflink.exec(u))||(s=this.rules.inline.nolink.exec(u))){let o=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),f=r[o.toLowerCase()];if(!f){let d=s[0].charAt(0);return{type:"text",raw:d,text:d}}return dp(s,f,s[0],this.lexer,this.rules)}}emStrong(u,r,s=""){let o=this.rules.inline.emStrongLDelim.exec(u);if(!(!o||o[3]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!s||this.rules.inline.punctuation.exec(s))){let f=[...o[0]].length-1,d,m,g=f,b=0,p=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,r=r.slice(-1*u.length+f);(o=p.exec(r))!=null;){if(d=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!d)continue;if(m=[...d].length,o[3]||o[4]){g+=m;continue}else if((o[5]||o[6])&&f%3&&!((f+m)%3)){b+=m;continue}if(g-=m,g>0)continue;m=Math.min(m,m+g+b);let S=[...o[0]][0].length,E=u.slice(0,f+o.index+S+m);if(Math.min(f,m)%2){let w=E.slice(1,-1);return{type:"em",raw:E,text:w,tokens:this.lexer.inlineTokens(w)}}let D=E.slice(2,-2);return{type:"strong",raw:E,text:D,tokens:this.lexer.inlineTokens(D)}}}}codespan(u){let r=this.rules.inline.code.exec(u);if(r){let s=r[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(s),f=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return o&&f&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:r[0],text:s}}}br(u){let r=this.rules.inline.br.exec(u);if(r)return{type:"br",raw:r[0]}}del(u){let r=this.rules.inline.del.exec(u);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(u){let r=this.rules.inline.autolink.exec(u);if(r){let s,o;return r[2]==="@"?(s=r[1],o="mailto:"+s):(s=r[1],o=s),{type:"link",raw:r[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(u){var s;let r;if(r=this.rules.inline.url.exec(u)){let o,f;if(r[2]==="@")o=r[0],f="mailto:"+o;else{let d;do d=r[0],r[0]=((s=this.rules.inline._backpedal.exec(r[0]))==null?void 0:s[0])??"";while(d!==r[0]);o=r[0],r[1]==="www."?f="http://"+r[0]:f=r[0]}return{type:"link",raw:r[0],text:o,href:f,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(u){let r=this.rules.inline.text.exec(u);if(r){let s=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:s}}}},Ln=class yo{constructor(r){Ee(this,"tokens");Ee(this,"options");Ee(this,"state");Ee(this,"inlineQueue");Ee(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=r||sa,this.options.tokenizer=this.options.tokenizer||new Nu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:We,block:Su.normal,inline:Zl.normal};this.options.pedantic?(s.block=Su.pedantic,s.inline=Zl.pedantic):this.options.gfm&&(s.block=Su.gfm,this.options.breaks?s.inline=Zl.breaks:s.inline=Zl.gfm),this.tokenizer.rules=s}static get rules(){return{block:Su,inline:Zl}}static lex(r,s){return new yo(s).lex(r)}static lexInline(r,s){return new yo(s).inlineTokens(r)}lex(r){r=r.replace(We.carriageReturn,`
`),this.blockTokens(r,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let o=this.inlineQueue[s];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(r,s=[],o=!1){var f,d,m;for(this.options.pedantic&&(r=r.replace(We.tabCharGlobal,"    ").replace(We.spaceLine,""));r;){let g;if((d=(f=this.options.extensions)==null?void 0:f.block)!=null&&d.some(p=>(g=p.call({lexer:this},r,s))?(r=r.substring(g.raw.length),s.push(g),!0):!1))continue;if(g=this.tokenizer.space(r)){r=r.substring(g.raw.length);let p=s.at(-1);g.raw.length===1&&p!==void 0?p.raw+=`
`:s.push(g);continue}if(g=this.tokenizer.code(r)){r=r.substring(g.raw.length);let p=s.at(-1);(p==null?void 0:p.type)==="paragraph"||(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+g.raw,p.text+=`
`+g.text,this.inlineQueue.at(-1).src=p.text):s.push(g);continue}if(g=this.tokenizer.fences(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.heading(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.hr(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.blockquote(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.list(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.html(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.def(r)){r=r.substring(g.raw.length);let p=s.at(-1);(p==null?void 0:p.type)==="paragraph"||(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+g.raw,p.text+=`
`+g.raw,this.inlineQueue.at(-1).src=p.text):this.tokens.links[g.tag]||(this.tokens.links[g.tag]={href:g.href,title:g.title},s.push(g));continue}if(g=this.tokenizer.table(r)){r=r.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.lheading(r)){r=r.substring(g.raw.length),s.push(g);continue}let b=r;if((m=this.options.extensions)!=null&&m.startBlock){let p=1/0,S=r.slice(1),E;this.options.extensions.startBlock.forEach(D=>{E=D.call({lexer:this},S),typeof E=="number"&&E>=0&&(p=Math.min(p,E))}),p<1/0&&p>=0&&(b=r.substring(0,p+1))}if(this.state.top&&(g=this.tokenizer.paragraph(b))){let p=s.at(-1);o&&(p==null?void 0:p.type)==="paragraph"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+g.raw,p.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):s.push(g),o=b.length!==r.length,r=r.substring(g.raw.length);continue}if(g=this.tokenizer.text(r)){r=r.substring(g.raw.length);let p=s.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=(p.raw.endsWith(`
`)?"":`
`)+g.raw,p.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=p.text):s.push(g);continue}if(r){let p="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,s}inline(r,s=[]){return this.inlineQueue.push({src:r,tokens:s}),s}inlineTokens(r,s=[]){var b,p,S,E,D;let o=r,f=null;if(this.tokens.links){let w=Object.keys(this.tokens.links);if(w.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)w.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,f.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let d;for(;(f=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)d=f[2]?f[2].length:0,o=o.slice(0,f.index+d)+"["+"a".repeat(f[0].length-d-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=((p=(b=this.options.hooks)==null?void 0:b.emStrongMask)==null?void 0:p.call({lexer:this},o))??o;let m=!1,g="";for(;r;){m||(g=""),m=!1;let w;if((E=(S=this.options.extensions)==null?void 0:S.inline)!=null&&E.some(G=>(w=G.call({lexer:this},r,s))?(r=r.substring(w.raw.length),s.push(w),!0):!1))continue;if(w=this.tokenizer.escape(r)){r=r.substring(w.raw.length),s.push(w);continue}if(w=this.tokenizer.tag(r)){r=r.substring(w.raw.length),s.push(w);continue}if(w=this.tokenizer.link(r)){r=r.substring(w.raw.length),s.push(w);continue}if(w=this.tokenizer.reflink(r,this.tokens.links)){r=r.substring(w.raw.length);let G=s.at(-1);w.type==="text"&&(G==null?void 0:G.type)==="text"?(G.raw+=w.raw,G.text+=w.text):s.push(w);continue}if(w=this.tokenizer.emStrong(r,o,g)){r=r.substring(w.raw.length),s.push(w);continue}if(w=this.tokenizer.codespan(r)){r=r.substring(w.raw.length),s.push(w);continue}if(w=this.tokenizer.br(r)){r=r.substring(w.raw.length),s.push(w);continue}if(w=this.tokenizer.del(r)){r=r.substring(w.raw.length),s.push(w);continue}if(w=this.tokenizer.autolink(r)){r=r.substring(w.raw.length),s.push(w);continue}if(!this.state.inLink&&(w=this.tokenizer.url(r))){r=r.substring(w.raw.length),s.push(w);continue}let B=r;if((D=this.options.extensions)!=null&&D.startInline){let G=1/0,H=r.slice(1),V;this.options.extensions.startInline.forEach(I=>{V=I.call({lexer:this},H),typeof V=="number"&&V>=0&&(G=Math.min(G,V))}),G<1/0&&G>=0&&(B=r.substring(0,G+1))}if(w=this.tokenizer.inlineText(B)){r=r.substring(w.raw.length),w.raw.slice(-1)!=="_"&&(g=w.raw.slice(-1)),m=!0;let G=s.at(-1);(G==null?void 0:G.type)==="text"?(G.raw+=w.raw,G.text+=w.text):s.push(w);continue}if(r){let G="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(G);break}else throw new Error(G)}}return s}},wu=class{constructor(u){Ee(this,"options");Ee(this,"parser");this.options=u||sa}space(u){return""}code({text:u,lang:r,escaped:s}){var d;let o=(d=(r||"").match(We.notSpaceStart))==null?void 0:d[0],f=u.replace(We.endingNewline,"")+`
`;return o?'<pre><code class="language-'+ft(o)+'">'+(s?f:ft(f,!0))+`</code></pre>
`:"<pre><code>"+(s?f:ft(f,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}def(u){return""}heading({tokens:u,depth:r}){return`<h${r}>${this.parser.parseInline(u)}</h${r}>
`}hr(u){return`<hr>
`}list(u){let r=u.ordered,s=u.start,o="";for(let m=0;m<u.items.length;m++){let g=u.items[m];o+=this.listitem(g)}let f=r?"ol":"ul",d=r&&s!==1?' start="'+s+'"':"";return"<"+f+d+`>
`+o+"</"+f+`>
`}listitem(u){return`<li>${this.parser.parse(u.tokens)}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let r="",s="";for(let f=0;f<u.header.length;f++)s+=this.tablecell(u.header[f]);r+=this.tablerow({text:s});let o="";for(let f=0;f<u.rows.length;f++){let d=u.rows[f];s="";for(let m=0;m<d.length;m++)s+=this.tablecell(d[m]);o+=this.tablerow({text:s})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+o+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){let r=this.parser.parseInline(u.tokens),s=u.header?"th":"td";return(u.align?`<${s} align="${u.align}">`:`<${s}>`)+r+`</${s}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${ft(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:r,tokens:s}){let o=this.parser.parseInline(s),f=cp(u);if(f===null)return o;u=f;let d='<a href="'+u+'"';return r&&(d+=' title="'+ft(r)+'"'),d+=">"+o+"</a>",d}image({href:u,title:r,text:s,tokens:o}){o&&(s=this.parser.parseInline(o,this.parser.textRenderer));let f=cp(u);if(f===null)return ft(s);u=f;let d=`<img src="${u}" alt="${s}"`;return r&&(d+=` title="${ft(r)}"`),d+=">",d}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:ft(u.text)}},zo=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}checkbox({raw:u}){return u}},Un=class bo{constructor(r){Ee(this,"options");Ee(this,"renderer");Ee(this,"textRenderer");this.options=r||sa,this.options.renderer=this.options.renderer||new wu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new zo}static parse(r,s){return new bo(s).parse(r)}static parseInline(r,s){return new bo(s).parseInline(r)}parse(r){var o,f;let s="";for(let d=0;d<r.length;d++){let m=r[d];if((f=(o=this.options.extensions)==null?void 0:o.renderers)!=null&&f[m.type]){let b=m,p=this.options.extensions.renderers[b.type].call({parser:this},b);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(b.type)){s+=p||"";continue}}let g=m;switch(g.type){case"space":{s+=this.renderer.space(g);break}case"hr":{s+=this.renderer.hr(g);break}case"heading":{s+=this.renderer.heading(g);break}case"code":{s+=this.renderer.code(g);break}case"table":{s+=this.renderer.table(g);break}case"blockquote":{s+=this.renderer.blockquote(g);break}case"list":{s+=this.renderer.list(g);break}case"checkbox":{s+=this.renderer.checkbox(g);break}case"html":{s+=this.renderer.html(g);break}case"def":{s+=this.renderer.def(g);break}case"paragraph":{s+=this.renderer.paragraph(g);break}case"text":{s+=this.renderer.text(g);break}default:{let b='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(b),"";throw new Error(b)}}}return s}parseInline(r,s=this.renderer){var f,d;let o="";for(let m=0;m<r.length;m++){let g=r[m];if((d=(f=this.options.extensions)==null?void 0:f.renderers)!=null&&d[g.type]){let p=this.options.extensions.renderers[g.type].call({parser:this},g);if(p!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(g.type)){o+=p||"";continue}}let b=g;switch(b.type){case"escape":{o+=s.text(b);break}case"html":{o+=s.html(b);break}case"link":{o+=s.link(b);break}case"image":{o+=s.image(b);break}case"checkbox":{o+=s.checkbox(b);break}case"strong":{o+=s.strong(b);break}case"em":{o+=s.em(b);break}case"codespan":{o+=s.codespan(b);break}case"br":{o+=s.br(b);break}case"del":{o+=s.del(b);break}case"text":{o+=s.text(b);break}default:{let p='Token with "'+b.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return o}},Cu,Pl=(Cu=class{constructor(u){Ee(this,"options");Ee(this,"block");this.options=u||sa}preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}emStrongMask(u){return u}provideLexer(){return this.block?Ln.lex:Ln.lexInline}provideParser(){return this.block?Un.parse:Un.parseInline}},Ee(Cu,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Ee(Cu,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Cu),m1=class{constructor(...u){Ee(this,"defaults",To());Ee(this,"options",this.setOptions);Ee(this,"parse",this.parseMarkdown(!0));Ee(this,"parseInline",this.parseMarkdown(!1));Ee(this,"Parser",Un);Ee(this,"Renderer",wu);Ee(this,"TextRenderer",zo);Ee(this,"Lexer",Ln);Ee(this,"Tokenizer",Nu);Ee(this,"Hooks",Pl);this.use(...u)}walkTokens(u,r){var o,f;let s=[];for(let d of u)switch(s=s.concat(r.call(this,d)),d.type){case"table":{let m=d;for(let g of m.header)s=s.concat(this.walkTokens(g.tokens,r));for(let g of m.rows)for(let b of g)s=s.concat(this.walkTokens(b.tokens,r));break}case"list":{let m=d;s=s.concat(this.walkTokens(m.items,r));break}default:{let m=d;(f=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&f[m.type]?this.defaults.extensions.childTokens[m.type].forEach(g=>{let b=m[g].flat(1/0);s=s.concat(this.walkTokens(b,r))}):m.tokens&&(s=s.concat(this.walkTokens(m.tokens,r)))}}return s}use(...u){let r=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(s=>{let o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){let d=r.renderers[f.name];d?r.renderers[f.name]=function(...m){let g=f.renderer.apply(this,m);return g===!1&&(g=d.apply(this,m)),g}:r.renderers[f.name]=f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let d=r[f.level];d?d.unshift(f.tokenizer):r[f.level]=[f.tokenizer],f.start&&(f.level==="block"?r.startBlock?r.startBlock.push(f.start):r.startBlock=[f.start]:f.level==="inline"&&(r.startInline?r.startInline.push(f.start):r.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(r.childTokens[f.name]=f.childTokens)}),o.extensions=r),s.renderer){let f=this.defaults.renderer||new wu(this.defaults);for(let d in s.renderer){if(!(d in f))throw new Error(`renderer '${d}' does not exist`);if(["options","parser"].includes(d))continue;let m=d,g=s.renderer[m],b=f[m];f[m]=(...p)=>{let S=g.apply(f,p);return S===!1&&(S=b.apply(f,p)),S||""}}o.renderer=f}if(s.tokenizer){let f=this.defaults.tokenizer||new Nu(this.defaults);for(let d in s.tokenizer){if(!(d in f))throw new Error(`tokenizer '${d}' does not exist`);if(["options","rules","lexer"].includes(d))continue;let m=d,g=s.tokenizer[m],b=f[m];f[m]=(...p)=>{let S=g.apply(f,p);return S===!1&&(S=b.apply(f,p)),S}}o.tokenizer=f}if(s.hooks){let f=this.defaults.hooks||new Pl;for(let d in s.hooks){if(!(d in f))throw new Error(`hook '${d}' does not exist`);if(["options","block"].includes(d))continue;let m=d,g=s.hooks[m],b=f[m];Pl.passThroughHooks.has(d)?f[m]=p=>{if(this.defaults.async&&Pl.passThroughHooksRespectAsync.has(d))return(async()=>{let E=await g.call(f,p);return b.call(f,E)})();let S=g.call(f,p);return b.call(f,S)}:f[m]=(...p)=>{if(this.defaults.async)return(async()=>{let E=await g.apply(f,p);return E===!1&&(E=await b.apply(f,p)),E})();let S=g.apply(f,p);return S===!1&&(S=b.apply(f,p)),S}}o.hooks=f}if(s.walkTokens){let f=this.defaults.walkTokens,d=s.walkTokens;o.walkTokens=function(m){let g=[];return g.push(d.call(this,m)),f&&(g=g.concat(f.call(this,m))),g}}this.defaults={...this.defaults,...o}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,r){return Ln.lex(u,r??this.defaults)}parser(u,r){return Un.parse(u,r??this.defaults)}parseMarkdown(u){return(r,s)=>{let o={...s},f={...this.defaults,...o},d=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&o.async===!1)return d(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(f.hooks&&(f.hooks.options=f,f.hooks.block=u),f.async)return(async()=>{let m=f.hooks?await f.hooks.preprocess(r):r,g=await(f.hooks?await f.hooks.provideLexer():u?Ln.lex:Ln.lexInline)(m,f),b=f.hooks?await f.hooks.processAllTokens(g):g;f.walkTokens&&await Promise.all(this.walkTokens(b,f.walkTokens));let p=await(f.hooks?await f.hooks.provideParser():u?Un.parse:Un.parseInline)(b,f);return f.hooks?await f.hooks.postprocess(p):p})().catch(d);try{f.hooks&&(r=f.hooks.preprocess(r));let m=(f.hooks?f.hooks.provideLexer():u?Ln.lex:Ln.lexInline)(r,f);f.hooks&&(m=f.hooks.processAllTokens(m)),f.walkTokens&&this.walkTokens(m,f.walkTokens);let g=(f.hooks?f.hooks.provideParser():u?Un.parse:Un.parseInline)(m,f);return f.hooks&&(g=f.hooks.postprocess(g)),g}catch(m){return d(m)}}}onError(u,r){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,u){let o="<p>An error occurred:</p><pre>"+ft(s.message+"",!0)+"</pre>";return r?Promise.resolve(o):o}if(r)return Promise.reject(s);throw s}}},ra=new m1;function be(u,r){return ra.parse(u,r)}be.options=be.setOptions=function(u){return ra.setOptions(u),be.defaults=ra.defaults,Hp(be.defaults),be};be.getDefaults=To;be.defaults=sa;be.use=function(...u){return ra.use(...u),be.defaults=ra.defaults,Hp(be.defaults),be};be.walkTokens=function(u,r){return ra.walkTokens(u,r)};be.parseInline=ra.parseInline;be.Parser=Un;be.parser=Un.parse;be.Renderer=wu;be.TextRenderer=zo;be.Lexer=Ln;be.lexer=Ln.lex;be.Tokenizer=Nu;be.Hooks=Pl;be.parse=be;be.options;be.setOptions;be.use;be.walkTokens;be.parseInline;Un.parse;Ln.lex;const g1=Object.assign({"/post/2025-10-27-Base64.md":tv,"/post/2025-11-12-JAVA_프로그램이_실행되는_과정.md":av,"/post/2025-11-19-OOP.md":lv,"/post/2025-11-23-Garbage_Collection.md":iv,"/post/2025-12-10-IoC_DI.md":uv,"/post/2025-12-13-observer_pattern.md":rv,"/post/2025-12-20-reactive-programming.md":sv,"/post/2026-01-10-RabbitMq_Clustering.md":ov,"/post/2026-01-14-mirror_queue_vs_quorum_queue.md":cv,"/post/2026-02-05-React로_개발된_Github_Blog_배포_방법.md":fv,"/post/2026-03-04-CHARYEOT_게임_패배_범인찾기_프로젝트.md":dv,"/post/2026-03-05-CHARYEOT_앞으로의_계획.md":hv,"/post/2026-03-06-CHARYEOT_리그_오브_레전드_1_API_Key_발급받기.md":pv,"/post/2026-03-07-CHARYEOT_리그_오브_레전드_2_유저_프로필_불러오기.md":mv,"/post/2026-03-10-charyeot_리그_오브_레전드_3_이미지_불러오기.md":gv,"/post/2026-03-14-CHARYEOT_리그_오브_레전드_4_전적_불러오기.md":yv,"/post/2026-03-19-CHARYEOT_차렷봇_판결_기능_GEMINI_연동.md":bv,"/post/2026-03-26-ChronicleMap_GC_메모리_해제_실패_사건.md":vv,"/post/2026-03-29-Graceful_Shutdown_구현_데이터_유실_방지.md":xv,"/post/2026-03-30-API_Gateway_설정_변경_무중단_적용_Spring_Cloud_Bus_Refresh_Scope.md":Sv,"/post/2026-04-08-Eureka_OUT_OF_SERVICE_무중단_재기동.md":Cv,"/post/2026-04-17-Redis_KEYS_VS_SCAN.md":Ev,"/post/2026-04-24-Jasypt로_설정파일_암호화하기.md":_v,"/post/2026-05-06-Redis_Cluster_실시간_상태_확인.md":Av,"/post/2026-05-19-Raft_알고리즘.md":Rv,"/post/2026-05-29-ssd-raw-ntfs-troubleshooting.md":Tv,"/post/2026-08-04-게임_개발_도전기_01.md":Mv,"/post/2026-08-05-게임_개발_도전기_02.md":Nv,"/post/2026-08-10-게임_개발_도전기_03.md":wv,"/post/2026-08-26-게임_개발_도전기_04.md":Dv,"/post/2026-09-08-게임_개발_도전기_05.md":Ov});function hp(u){var o;const r=((o=u.split("/").pop())==null?void 0:o.replace(".md",""))||"",s=r.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);return s?{date:s[1],slug:s[2]}:{date:"",slug:r}}function pp(u){return u.replace(/-/g,".")}function y1(u){const r=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,s=u.match(r);if(!s)return{data:{title:"",description:"",date:"",tags:[]},content:u};const[,o,f]=s,d={title:"",description:"",date:"",tags:[]},m=o.split(/\r?\n/);for(const g of m){const b=g.indexOf(":");if(b===-1)continue;const p=g.slice(0,b).trim();let S=g.slice(b+1).trim();if((S.startsWith('"')&&S.endsWith('"')||S.startsWith("'")&&S.endsWith("'"))&&(S=S.slice(1,-1)),p==="title")d.title=S;else if(p==="description")d.description=S;else if(p==="date")d.date=S;else if(p==="tags"){const E=S.match(/\[(.*)\]/);E&&(d.tags=E[1].split(",").map(D=>D.trim().replace(/^["']|["']$/g,"")))}}return{data:d,content:f}}function b1(u,r){const{data:s,content:o}=y1(r),{slug:f}=hp(u),d=be(o),m=s.date?pp(s.date.replace(/"/g,"")):pp(hp(u).date);return{id:f,title:s.title||f,description:s.description||"",date:m,tags:s.tags||[],content:d}}let co=null;function zu(){if(co)return co;const u=[];for(const[r,s]of Object.entries(g1))try{const o=b1(r,s);u.push(o)}catch(o){console.error(`Failed to parse post: ${r}`,o)}return u.sort((r,s)=>{const o=r.date.replace(/\./g,"-");return s.date.replace(/\./g,"-").localeCompare(o)}),co=u,u}function v1(u){return zu().find(s=>s.id===u)}const x1=()=>{const u=zu().slice(0,4);return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("section",{className:"mb-16",children:[y.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight",children:["BackEnd Developer Hanwhee",y.jsxs("span",{className:"inline-flex flex-col items-center align-bottom",children:[y.jsx("style",{children:`
              @keyframes emoji-shadow {
                0%, 100% { transform: scaleX(0.5); opacity: 0.15; }
                50%       { transform: scaleX(1);   opacity: 0.35; }
              }
            `}),y.jsx("span",{className:"inline-block animate-[bounce_2s_infinite]",children:"😎"}),y.jsx("span",{className:"w-10 h-2 bg-slate-900 rounded-full blur-sm mt-1",style:{animation:"emoji-shadow 2s cubic-bezier(0.8,0,1,1) infinite"}})]})]}),y.jsxs("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed",children:[y.jsxs("p",{children:["안녕하세요!"," ",y.jsx("span",{className:"font-bold text-slate-900 bg-mint px-1",children:"백엔드 개발자 김한휘"}),"입니다!"]}),y.jsx("p",{children:"스탠다드네트웍스에서 2년 6개월간 근무하며 대용량 트래픽 환경에서 자라며 MSA 설계부터 개발, 운영까지 경험하며 성장해왔어요."}),y.jsx("p",{children:"서비스 불편한 거 하나씩 고칠 때마다 희열을 느끼는 타입입니다🔥🔥🔥"})]})]}),y.jsxs("section",{className:"mb-20",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[y.jsx("span",{className:"text-2xl",children:"🌱"}),y.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"My Career"})]}),y.jsxs("div",{className:"flex flex-col",children:[mo.map((r,s)=>y.jsxs(Gn,{to:"/Experience",className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${s!==mo.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[y.jsx("div",{className:"mb-2 md:mb-0",children:y.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:r.title.split("(")[0]})}),y.jsxs("div",{className:"flex flex-col md:items-end text-slate-500 text-sm md:text-base",children:[y.jsx("span",{className:"font-medium text-slate-700",children:r.role}),y.jsx("span",{className:"text-xs md:text-sm font-mono mt-1 text-slate-400",children:r.period})]})]},r.id)),y.jsx("div",{className:"flex flex-col md:flex-row md:justify-between md:items-baseline py-5 border-t border-slate-100 px-2 -mx-2 text-slate-400",children:y.jsx("div",{children:y.jsx("h3",{className:"text-lg font-bold",children:"... To Be Continued..."})})})]})]}),u.length>0&&y.jsxs("section",{className:"mb-20",children:[y.jsxs("div",{className:"flex items-center justify-between mb-8",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-2xl",children:"📝"}),y.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"Recent Posts"})]}),y.jsxs(Gn,{to:"/blog",className:"text-sm text-slate-500 hover:text-sky-600 flex items-center gap-1 transition-colors",children:["전체보기 ",y.jsx(oo,{size:14})]})]}),y.jsx("div",{className:"flex flex-col",children:u.map((r,s)=>y.jsxs(Gn,{to:`/blog/${r.id}`,className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${s!==u.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[y.jsxs("div",{className:"mb-2 md:mb-0 flex-1",children:[y.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:r.title}),y.jsx("p",{className:"text-sm text-slate-500 mt-1 line-clamp-1",children:r.description})]}),y.jsx("div",{className:"text-xs font-mono text-slate-400 md:ml-4",children:r.date})]},r.id))})]}),y.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[y.jsxs(Gn,{to:"/skills",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[y.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Skills"," ",y.jsx(oo,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),y.jsx("p",{className:"text-sm text-slate-500",children:"지금까지 써본 기술들과 개발 환경 정리해봤어요 🛠️"})]}),y.jsxs(Gn,{to:"/education",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[y.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Education"," ",y.jsx(oo,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),y.jsx("p",{className:"text-sm text-slate-500",children:"개발자로 성장하기 위해 공부하고 수료한 교육 과정들이에요 📚"})]})]})]})},S1=()=>y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12",children:["Work Experience ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("div",{className:"space-y-16",children:mo.map(u=>y.jsxs("div",{className:"relative border-l-2 border-slate-100 pl-6 md:pl-8 ml-2",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2",children:[y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900",children:u.title}),y.jsx("span",{className:"font-mono text-sm text-slate-400 mt-1 sm:mt-0 whitespace-nowrap",children:u.period})]}),y.jsx("div",{className:"text-lg font-medium text-slate-700 mb-4",children:u.role}),y.jsx("p",{className:"text-slate-600 leading-relaxed mb-6 max-w-2xl",children:u.description}),y.jsx("div",{className:"mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm font-mono text-slate-500",children:u.techStack.map((r,s)=>y.jsxs("span",{className:"bg-slate-50 px-1.5 rounded text-slate-600",children:["#",r]},r))}),y.jsx("ul",{className:"space-y-2 text-slate-600 list-disc list-outside pl-4",children:u.keyAchievements.map((r,s)=>y.jsx("li",{className:"pl-1 marker:text-sky-300",children:r},s))})]},u.id))})]}),C1=()=>y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Skills ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-12",children:"지금까지 사용해본 기술들입니다."}),y.jsx("div",{className:"space-y-12",children:Wb.map(u=>y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-6 bg-sky-50 inline-block px-2 py-0.5 rounded-md",children:u.category}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6",children:u.items.map(r=>y.jsx("div",{className:"flex flex-col",children:y.jsx("div",{className:"flex items-center justify-between mb-1",children:y.jsx("span",{className:"font-bold text-slate-800 text-lg",children:r.name})})},r.name))}),y.jsx("hr",{className:"mt-10 border-slate-100"})]},u.category))})]}),E1=()=>{const u=up.filter(s=>s.category==="Education"),r=up.filter(s=>s.category==="Certification");return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-12",children:["Education & Certs ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-12",children:"제가 해낸 교육과정/자격증 입니다."}),y.jsxs("section",{className:"mb-16",children:[y.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Education"}),y.jsx("div",{className:"space-y-10",children:u.map((s,o)=>y.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8",children:[y.jsx("div",{className:"md:w-32 flex-shrink-0 mb-1 md:mb-0",children:y.jsx("span",{className:"font-mono text-sm text-slate-400",children:s.period})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-slate-900",children:y.jsx("a",{href:s.link,className:"hover:underline",children:s.institution})}),y.jsx("div",{className:"text-slate-700 font-medium mb-3",children:s.degree}),y.jsx("ul",{className:"text-slate-600 text-sm space-y-1 list-disc list-outside pl-4",children:s.details.map((f,d)=>y.jsx("li",{children:f},d))})]})]},o))})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Certifications"}),y.jsx("div",{className:"space-y-6",children:r.map((s,o)=>y.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8 items-start",children:[y.jsx("div",{className:"md:w-32 flex-shrink-0",children:y.jsx("span",{className:"font-mono text-sm text-slate-400",children:s.period})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-bold text-slate-900",children:s.institution}),y.jsx("p",{className:"text-slate-600",children:s.details[0]})]})]},o))})]})]})},fo=5,_1=()=>{const u=zu(),[r,s]=M.useState(1),[o,f]=M.useState(""),[d,m]=M.useState(null),g=M.useMemo(()=>{const L={};return u.forEach(F=>{var ee;(ee=F.tags)==null||ee.forEach(re=>{L[re]=(L[re]||0)+1})}),Object.entries(L).sort((F,ee)=>ee[1]-F[1])},[u]),b=M.useMemo(()=>u.filter(L=>{var re;const F=o.trim()===""||L.title.toLowerCase().includes(o.toLowerCase()),ee=d===null||((re=L.tags)==null?void 0:re.includes(d));return F&&ee}),[u,o,d]),p=Math.ceil(b.length/fo),S=(r-1)*fo,E=b.slice(S,S+fo),D=()=>{s(L=>Math.max(L-1,1)),window.scrollTo({top:0,behavior:"smooth"})},w=()=>{s(L=>Math.min(L+1,p)),window.scrollTo({top:0,behavior:"smooth"})},B=L=>{s(L),window.scrollTo({top:0,behavior:"smooth"})},G=L=>{f(L),s(1)},H=L=>{m(F=>F===L?null:L),s(1)},V=()=>{f(""),m(null),s(1)},I=o.trim()!==""||d!==null;return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Blog ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("p",{className:"text-slate-500 mb-8",children:"생각을 정리하고 배운 것을 공유합니다."}),y.jsxs("div",{className:"relative mb-4",children:[y.jsx(tp,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),y.jsx("input",{type:"text",placeholder:"제목으로 검색...",value:o,onChange:L=>G(L.target.value),className:"w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"}),o&&y.jsx("button",{onClick:()=>G(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",children:y.jsx(Tu,{size:14})})]}),g.length>0&&y.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[g.map(([L,F])=>y.jsxs("button",{onClick:()=>H(L),className:`text-xs px-3 py-1 rounded-full border transition-colors ${d===L?"bg-sky-500 text-white border-sky-500":"bg-white text-slate-500 border-slate-200 hover:border-sky-400 hover:text-sky-500"}`,children:["#",L,y.jsx("span",{className:`ml-1 ${d===L?"text-sky-100":"text-slate-400"}`,children:F})]},L)),I&&y.jsxs("button",{onClick:V,className:"text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-colors flex items-center gap-1",children:[y.jsx(Tu,{size:11}),"초기화"]})]}),I&&y.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:[b.length,"개의 글",d&&y.jsxs("span",{children:[" · ",y.jsxs("span",{className:"text-sky-500",children:["#",d]})]}),o&&y.jsxs("span",{children:[' · "',y.jsx("span",{className:"text-slate-600",children:o}),'"']})]}),E.length>0?y.jsx("div",{className:"flex flex-col space-y-10",children:E.map(L=>{var F;return y.jsx("article",{className:"group",children:y.jsxs(Gn,{to:`/blog/${L.id}`,className:"block",children:[y.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-400 mb-2 font-mono",children:L.date}),y.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors",children:L.title}),y.jsx("p",{className:"text-slate-600 leading-relaxed mb-3",children:L.description}),y.jsx("div",{className:"flex flex-wrap gap-2",children:(F=L.tags)==null?void 0:F.map(ee=>y.jsxs("span",{onClick:re=>{re.preventDefault(),H(ee)},className:`text-xs px-2 py-0.5 rounded cursor-pointer transition-colors ${d===ee?"bg-sky-100 text-sky-600":"text-slate-400 bg-slate-50 hover:bg-sky-50 hover:text-sky-500"}`,children:["#",ee]},ee))})]})},L.id)})}):y.jsxs("div",{className:"text-center py-20 text-slate-400",children:[y.jsx(tp,{size:32,className:"mx-auto mb-3 opacity-30"}),y.jsx("p",{className:"text-sm",children:"검색 결과가 없습니다."})]}),p>1&&y.jsxs("div",{className:"flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-100",children:[y.jsx("button",{onClick:D,disabled:r===1,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"이전 페이지",children:y.jsx(Up,{size:20})}),y.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:p},(L,F)=>F+1).map(L=>y.jsx("button",{onClick:()=>B(L),className:`w-10 h-10 rounded-lg font-medium transition-colors ${r===L?"bg-sky-500 text-white":"hover:bg-slate-100 text-slate-600"}`,children:L},L))}),y.jsx("button",{onClick:w,disabled:r===p,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"다음 페이지",children:y.jsx(Gp,{size:20})})]})]})};function A1({term:u}){const r=M.useRef(null);return M.useEffect(()=>{if(!r.current)return;r.current.innerHTML="";const s=document.createElement("script");s.src="https://giscus.app/client.js",s.async=!0,s.crossOrigin="anonymous",s.setAttribute("data-repo","KimHanWhee/KimHanWhee.github.io"),s.setAttribute("data-repo-id","R_kgDORCSvGA"),s.setAttribute("data-category","General"),s.setAttribute("data-category-id","DIC_kwDORCSvGM4C3O7R"),s.setAttribute("data-mapping","specific"),s.setAttribute("data-term",u),s.setAttribute("data-strict","0"),s.setAttribute("data-reactions-enabled","1"),s.setAttribute("data-emit-metadata","0"),s.setAttribute("data-input-position","bottom"),s.setAttribute("data-theme","preferred_color_scheme"),s.setAttribute("data-lang","ko"),r.current.appendChild(s)},[u]),y.jsx("section",{ref:r})}function R1(u){const r=[],s=/<h([23])[^>]*>(.*?)<\/h[23]>/gi;let o;for(;(o=s.exec(u))!==null;){const f=parseInt(o[1]),d=o[2].replace(/<[^>]+>/g,"").trim(),m=d.toLowerCase().replace(/\s+/g,"-").replace(/[^\w가-힣-]/g,"");r.push({id:m,text:d,level:f})}return r}function T1(u){return u.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi,(r,s,o,f)=>{const m=f.replace(/<[^>]+>/g,"").trim().toLowerCase().replace(/\s+/g,"-").replace(/[^\w가-힣-]/g,"");return`<h${s}${o} id="${m}">${f}</h${s}>`})}const M1=({headings:u})=>{const[r,s]=M.useState("");return M.useEffect(()=>{if(u.length===0)return;const o=new IntersectionObserver(f=>{const d=f.filter(m=>m.isIntersecting);d.length>0&&s(d[0].target.id)},{rootMargin:"-80px 0px -60% 0px",threshold:0});return u.forEach(({id:f})=>{const d=document.getElementById(f);d&&o.observe(d)}),()=>o.disconnect()},[u]),u.length===0?null:y.jsxs("nav",{className:"sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto",children:[y.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest mb-3",children:"목차"}),y.jsx("ul",{className:"space-y-1",children:u.map(({id:o,text:f,level:d})=>y.jsx("li",{children:y.jsx("a",{href:`#${o}`,onClick:m=>{var g;m.preventDefault(),(g=document.getElementById(o))==null||g.scrollIntoView({behavior:"smooth"})},className:["block text-sm leading-snug transition-colors py-0.5 break-words",d===3?"pl-3":"",r===o?"text-secondary font-semibold":"text-slate-400 hover:text-slate-700"].join(" "),children:f})},o))})]})},Kl=3,N1=({currentId:u})=>{const r=zu(),s=r.filter(p=>p.id!==u),o=r.findIndex(p=>p.id===u),f=r.filter(p=>p.id!==u).findIndex((p,S)=>S>=Math.max(0,o-1)),[d,m]=M.useState(Math.max(0,Math.floor(Math.max(0,f)/Kl))),g=Math.ceil(s.length/Kl),b=s.slice(d*Kl,d*Kl+Kl);return s.length===0?null:y.jsxs("div",{className:"mt-16 pt-10 border-t border-slate-100",children:[y.jsx("h2",{className:"text-lg font-bold text-primary mb-6",children:"다른 글 보기"}),y.jsx("ul",{className:"space-y-3",children:b.map(p=>{var S;return y.jsx("li",{children:y.jsxs(Gn,{to:`/blog/${p.id}`,className:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4 rounded-xl border border-slate-100 hover:border-secondary/30 hover:bg-slate-50 transition-colors group",children:[y.jsx("span",{className:"font-mono text-xs text-slate-400 shrink-0",children:p.date}),y.jsx("span",{className:"font-semibold text-slate-700 group-hover:text-secondary transition-colors line-clamp-1 flex-1",children:p.title}),y.jsx("div",{className:"flex gap-1.5 flex-wrap",children:(S=p.tags)==null?void 0:S.slice(0,2).map(E=>y.jsx("span",{className:"px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-500",children:E},E))})]})},p.id)})}),g>1&&y.jsxs("div",{className:"flex items-center justify-center gap-3 mt-6",children:[y.jsx("button",{onClick:()=>m(p=>Math.max(0,p-1)),disabled:d===0,className:"p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-secondary/40 hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:y.jsx(Up,{size:16})}),y.jsxs("span",{className:"text-sm text-slate-500 font-mono",children:[d+1," / ",g]}),y.jsx("button",{onClick:()=>m(p=>Math.min(g-1,p+1)),disabled:d===g-1,className:"p-2 rounded-lg border border-slate-200 text-slate-500 hover:border-secondary/40 hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:y.jsx(Gp,{size:16})})]}),y.jsx("div",{className:"flex justify-center mt-6",children:y.jsx(Gn,{to:"/blog",className:"px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-sky-500 transition-colors shadow-lg shadow-slate-900/20",children:"목록으로 돌아가기"})})]})},w1=()=>{var d;const{id:u}=by(),r=u?v1(u):void 0,s=()=>{window.scrollTo({top:0,behavior:"smooth"})};if(!r)return y.jsx(Oy,{to:"/blog",replace:!0});const o=R1(r.content),f=T1(r.content);return y.jsxs("div",{className:"min-h-screen bg-white font-sans selection:bg-secondary/20 selection:text-primary",children:[y.jsx("div",{className:"bg-slate-50 border-b border-slate-200",children:y.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative",children:[y.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-5 pointer-events-none",children:y.jsx("div",{className:"text-9xl font-bold font-mono text-slate-900 tracking-tighter"})}),y.jsxs(Gn,{to:"/blog",className:"inline-flex items-center text-slate-500 hover:text-secondary mb-8 transition-colors font-medium",children:[y.jsx(xb,{size:18,className:"mr-2"}),"Back to Tech Notes"]}),y.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight tracking-tight",children:r.title}),y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-6 text-slate-600 border-t border-slate-200/60 pt-6",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Eb,{size:18,className:"text-secondary"}),y.jsx("span",{className:"font-medium font-mono text-sm",children:r.date})]}),y.jsx("div",{className:"hidden sm:block w-px h-4 bg-slate-300"}),y.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:(d=r.tags)==null?void 0:d.map(m=>y.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm",children:[y.jsx(Pb,{size:12,className:"mr-1.5 text-slate-400"}),m]},m))})]})]})}),y.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[y.jsx("aside",{className:"hidden xl:block absolute top-0 left-full pl-8 w-52 h-full",children:y.jsx(M1,{headings:o})}),y.jsx("div",{className:"overflow-x-hidden",children:y.jsxs("article",{className:"prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl",children:[y.jsx("style",{children:`
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
            `}),y.jsx("div",{dangerouslySetInnerHTML:{__html:f}})]})}),u&&y.jsx(N1,{currentId:u}),y.jsx("div",{className:"mt-10 flex flex-col items-center",children:y.jsx("button",{onClick:s,className:"p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-secondary transition-colors","aria-label":"Scroll to top",children:y.jsx(Nb,{size:24})})})]}),y.jsx(A1,{term:u})]})},D1=()=>{const[u,r]=M.useState(!1),s="hanwhee2@gmail.com",o=()=>{navigator.clipboard.writeText(s),r(!0),setTimeout(()=>r(!1),2e3)};return y.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[y.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8",children:["Contact ",y.jsx("span",{className:"text-sky-400",children:"."})]}),y.jsx("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed mb-12",children:y.jsxs("p",{children:[y.jsx("br",{}),"궁금한 점이 있으시다면 편하게 연락주세요💬"]})}),y.jsxs("div",{className:"mb-12",children:[y.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"Email"}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-2xl md:text-3xl font-mono font-bold text-slate-900 hover:bg-sky-100 transition-colors px-1 -ml-1 rounded",children:s}),y.jsx("button",{onClick:o,className:"p-2 text-slate-400 hover:text-sky-600 transition-colors","aria-label":"Copy email address",children:u?y.jsx(Ab,{size:20,className:"text-sky-500"}):y.jsx(Ob,{size:20})})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-4",children:"Social"}),y.jsx("div",{className:"flex flex-col space-y-3 items-start",children:y.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-sky-400 underline-offset-4 decoration-2",children:["Github ",y.jsx(Gb,{size:14,className:"opacity-50"})]})})]})]})},O1="/assets/dambi1-loading-D9CE2s7-.png",k1="/assets/dambi2-loading-y6E-lkC-.png",j1="/assets/dambi3-loading-DoVrgUOR.png",z1="/assets/dambi4-loading-BFy8SAhA.png",mp=3e3,L1=400,gp=[O1,k1,j1,z1],U1=({visible:u})=>{const[r,s]=M.useState(0);return M.useEffect(()=>{const o=setInterval(()=>{s(f=>(f+1)%4)},L1);return()=>clearInterval(o)},[]),y.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500",style:{opacity:u?1:0,pointerEvents:u?"auto":"none"},children:[y.jsx("div",{className:"flex flex-col items-center mb-6",children:y.jsx("img",{src:gp[r]??gp[0],alt:"loading",className:"w-30 h-30 object-contain"})}),y.jsxs("span",{className:"text-xl md:text-2xl font-mono font-bold text-sky-400 select-none tracking-wide",children:["Now Coding",y.jsx("span",{style:{opacity:r>=1?1:0},children:"."}),y.jsx("span",{style:{opacity:r>=2?1:0},children:"."}),y.jsx("span",{style:{opacity:r>=3?1:0},children:"."})]})]})},G1=()=>{const[u,r]=M.useState(!0),[s,o]=M.useState(!0);return M.useEffect(()=>{const f=setTimeout(()=>o(!1),mp),d=setTimeout(()=>r(!1),mp+500);return()=>{clearTimeout(f),clearTimeout(d)}},[]),y.jsxs(y.Fragment,{children:[u&&y.jsx(U1,{visible:s}),y.jsx(ib,{children:y.jsx(zy,{children:y.jsxs(ct,{path:"/",element:y.jsx(nv,{}),children:[y.jsx(ct,{index:!0,element:y.jsx(x1,{})}),y.jsx(ct,{path:"experience",element:y.jsx(S1,{})}),y.jsx(ct,{path:"skills",element:y.jsx(C1,{})}),y.jsx(ct,{path:"education",element:y.jsx(E1,{})}),y.jsx(ct,{path:"blog",element:y.jsx(_1,{})}),y.jsx(ct,{path:"blog/:id",element:y.jsx(w1,{})}),y.jsx(ct,{path:"contact",element:y.jsx(D1,{})})]})})})]})},Pp=document.getElementById("root");if(!Pp)throw new Error("Could not find root element to mount to");const H1=k0.createRoot(Pp);H1.render(y.jsx(A0.StrictMode,{children:y.jsx(G1,{})}));
