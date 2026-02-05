var mg=Object.defineProperty;var pg=(u,c,s)=>c in u?mg(u,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[c]=s;var Ae=(u,c,s)=>pg(u,typeof c!="symbol"?c+"":c,s);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(f){if(f.ep)return;f.ep=!0;const h=s(f);fetch(f.href,h)}})();function dm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Fs={exports:{}},Ya={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function gg(){if(Hd)return Ya;Hd=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function s(r,f,h){var p=null;if(h!==void 0&&(p=""+h),f.key!==void 0&&(p=""+f.key),"key"in f){h={};for(var g in f)g!=="key"&&(h[g]=f[g])}else h=f;return f=h.ref,{$$typeof:u,type:r,key:p,ref:f!==void 0?f:null,props:h}}return Ya.Fragment=c,Ya.jsx=s,Ya.jsxs=s,Ya}var Ud;function yg(){return Ud||(Ud=1,Fs.exports=gg()),Fs.exports}var v=yg(),Ps={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function bg(){if(Bd)return P;Bd=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),O=Symbol.iterator;function N(S){return S===null||typeof S!="object"?null:(S=O&&S[O]||S["@@iterator"],typeof S=="function"?S:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,B={};function X(S,H,q){this.props=S,this.context=H,this.refs=B,this.updater=q||L}X.prototype.isReactComponent={},X.prototype.setState=function(S,H){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,H,"setState")},X.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function K(){}K.prototype=X.prototype;function Q(S,H,q){this.props=S,this.context=H,this.refs=B,this.updater=q||L}var he=Q.prototype=new K;he.constructor=Q,U(he,X.prototype),he.isPureReactComponent=!0;var de=Array.isArray;function be(){}var W={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function Xe(S,H,q){var Z=q.ref;return{$$typeof:u,type:S,key:H,ref:Z!==void 0?Z:null,props:q}}function vt(S,H){return Xe(S.type,H,S.props)}function Bt(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function et(S){var H={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(q){return H[q]})}var ql=/\/+/g;function Yt(S,H){return typeof S=="object"&&S!==null&&S.key!=null?et(""+S.key):H.toString(36)}function Ot(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(be,be):(S.status="pending",S.then(function(H){S.status==="pending"&&(S.status="fulfilled",S.value=H)},function(H){S.status==="pending"&&(S.status="rejected",S.reason=H)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function w(S,H,q,Z,I){var le=typeof S;(le==="undefined"||le==="boolean")&&(S=null);var me=!1;if(S===null)me=!0;else switch(le){case"bigint":case"string":case"number":me=!0;break;case"object":switch(S.$$typeof){case u:case c:me=!0;break;case E:return me=S._init,w(me(S._payload),H,q,Z,I)}}if(me)return I=I(S),me=Z===""?"."+Yt(S,0):Z,de(I)?(q="",me!=null&&(q=me.replace(ql,"$&/")+"/"),w(I,H,q,"",function(Wn){return Wn})):I!=null&&(Bt(I)&&(I=vt(I,q+(I.key==null||S&&S.key===I.key?"":(""+I.key).replace(ql,"$&/")+"/")+me)),H.push(I)),1;me=0;var Fe=Z===""?".":Z+":";if(de(S))for(var we=0;we<S.length;we++)Z=S[we],le=Fe+Yt(Z,we),me+=w(Z,H,q,le,I);else if(we=N(S),typeof we=="function")for(S=we.call(S),we=0;!(Z=S.next()).done;)Z=Z.value,le=Fe+Yt(Z,we++),me+=w(Z,H,q,le,I);else if(le==="object"){if(typeof S.then=="function")return w(Ot(S),H,q,Z,I);throw H=String(S),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return me}function G(S,H,q){if(S==null)return S;var Z=[],I=0;return w(S,Z,"","",function(le){return H.call(q,le,I++)}),Z}function F(S){if(S._status===-1){var H=S._result;H=H(),H.then(function(q){(S._status===0||S._status===-1)&&(S._status=1,S._result=q)},function(q){(S._status===0||S._status===-1)&&(S._status=2,S._result=q)}),S._status===-1&&(S._status=0,S._result=H)}if(S._status===1)return S._result.default;throw S._result}var ve=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Te={map:G,forEach:function(S,H,q){G(S,function(){H.apply(this,arguments)},q)},count:function(S){var H=0;return G(S,function(){H++}),H},toArray:function(S){return G(S,function(H){return H})||[]},only:function(S){if(!Bt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return P.Activity=A,P.Children=Te,P.Component=X,P.Fragment=s,P.Profiler=f,P.PureComponent=Q,P.StrictMode=r,P.Suspense=y,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,P.__COMPILER_RUNTIME={__proto__:null,c:function(S){return W.H.useMemoCache(S)}},P.cache=function(S){return function(){return S.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(S,H,q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var Z=U({},S.props),I=S.key;if(H!=null)for(le in H.key!==void 0&&(I=""+H.key),H)!Oe.call(H,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&H.ref===void 0||(Z[le]=H[le]);var le=arguments.length-2;if(le===1)Z.children=q;else if(1<le){for(var me=Array(le),Fe=0;Fe<le;Fe++)me[Fe]=arguments[Fe+2];Z.children=me}return Xe(S.type,I,Z)},P.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},P.createElement=function(S,H,q){var Z,I={},le=null;if(H!=null)for(Z in H.key!==void 0&&(le=""+H.key),H)Oe.call(H,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(I[Z]=H[Z]);var me=arguments.length-2;if(me===1)I.children=q;else if(1<me){for(var Fe=Array(me),we=0;we<me;we++)Fe[we]=arguments[we+2];I.children=Fe}if(S&&S.defaultProps)for(Z in me=S.defaultProps,me)I[Z]===void 0&&(I[Z]=me[Z]);return Xe(S,le,I)},P.createRef=function(){return{current:null}},P.forwardRef=function(S){return{$$typeof:g,render:S}},P.isValidElement=Bt,P.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:F}},P.memo=function(S,H){return{$$typeof:m,type:S,compare:H===void 0?null:H}},P.startTransition=function(S){var H=W.T,q={};W.T=q;try{var Z=S(),I=W.S;I!==null&&I(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(be,ve)}catch(le){ve(le)}finally{H!==null&&q.types!==null&&(H.types=q.types),W.T=H}},P.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},P.use=function(S){return W.H.use(S)},P.useActionState=function(S,H,q){return W.H.useActionState(S,H,q)},P.useCallback=function(S,H){return W.H.useCallback(S,H)},P.useContext=function(S){return W.H.useContext(S)},P.useDebugValue=function(){},P.useDeferredValue=function(S,H){return W.H.useDeferredValue(S,H)},P.useEffect=function(S,H){return W.H.useEffect(S,H)},P.useEffectEvent=function(S){return W.H.useEffectEvent(S)},P.useId=function(){return W.H.useId()},P.useImperativeHandle=function(S,H,q){return W.H.useImperativeHandle(S,H,q)},P.useInsertionEffect=function(S,H){return W.H.useInsertionEffect(S,H)},P.useLayoutEffect=function(S,H){return W.H.useLayoutEffect(S,H)},P.useMemo=function(S,H){return W.H.useMemo(S,H)},P.useOptimistic=function(S,H){return W.H.useOptimistic(S,H)},P.useReducer=function(S,H,q){return W.H.useReducer(S,H,q)},P.useRef=function(S){return W.H.useRef(S)},P.useState=function(S){return W.H.useState(S)},P.useSyncExternalStore=function(S,H,q){return W.H.useSyncExternalStore(S,H,q)},P.useTransition=function(){return W.H.useTransition()},P.version="19.2.3",P}var Gd;function pr(){return Gd||(Gd=1,Ps.exports=bg()),Ps.exports}var C=pr();const vg=dm(C);var Is={exports:{}},Xa={},er={exports:{}},tr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function xg(){return qd||(qd=1,(function(u){function c(w,G){var F=w.length;w.push(G);e:for(;0<F;){var ve=F-1>>>1,Te=w[ve];if(0<f(Te,G))w[ve]=G,w[F]=Te,F=ve;else break e}}function s(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var G=w[0],F=w.pop();if(F!==G){w[0]=F;e:for(var ve=0,Te=w.length,S=Te>>>1;ve<S;){var H=2*(ve+1)-1,q=w[H],Z=H+1,I=w[Z];if(0>f(q,F))Z<Te&&0>f(I,q)?(w[ve]=I,w[Z]=F,ve=Z):(w[ve]=q,w[H]=F,ve=H);else if(Z<Te&&0>f(I,F))w[ve]=I,w[Z]=F,ve=Z;else break e}}return G}function f(w,G){var F=w.sortIndex-G.sortIndex;return F!==0?F:w.id-G.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var p=Date,g=p.now();u.unstable_now=function(){return p.now()-g}}var y=[],m=[],E=1,A=null,O=3,N=!1,L=!1,U=!1,B=!1,X=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function he(w){for(var G=s(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=w)r(m),G.sortIndex=G.expirationTime,c(y,G);else break;G=s(m)}}function de(w){if(U=!1,he(w),!L)if(s(y)!==null)L=!0,be||(be=!0,et());else{var G=s(m);G!==null&&Ot(de,G.startTime-w)}}var be=!1,W=-1,Oe=5,Xe=-1;function vt(){return B?!0:!(u.unstable_now()-Xe<Oe)}function Bt(){if(B=!1,be){var w=u.unstable_now();Xe=w;var G=!0;try{e:{L=!1,U&&(U=!1,K(W),W=-1),N=!0;var F=O;try{t:{for(he(w),A=s(y);A!==null&&!(A.expirationTime>w&&vt());){var ve=A.callback;if(typeof ve=="function"){A.callback=null,O=A.priorityLevel;var Te=ve(A.expirationTime<=w);if(w=u.unstable_now(),typeof Te=="function"){A.callback=Te,he(w),G=!0;break t}A===s(y)&&r(y),he(w)}else r(y);A=s(y)}if(A!==null)G=!0;else{var S=s(m);S!==null&&Ot(de,S.startTime-w),G=!1}}break e}finally{A=null,O=F,N=!1}G=void 0}}finally{G?et():be=!1}}}var et;if(typeof Q=="function")et=function(){Q(Bt)};else if(typeof MessageChannel<"u"){var ql=new MessageChannel,Yt=ql.port2;ql.port1.onmessage=Bt,et=function(){Yt.postMessage(null)}}else et=function(){X(Bt,0)};function Ot(w,G){W=X(function(){w(u.unstable_now())},G)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(w){w.callback=null},u.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<w?Math.floor(1e3/w):5},u.unstable_getCurrentPriorityLevel=function(){return O},u.unstable_next=function(w){switch(O){case 1:case 2:case 3:var G=3;break;default:G=O}var F=O;O=G;try{return w()}finally{O=F}},u.unstable_requestPaint=function(){B=!0},u.unstable_runWithPriority=function(w,G){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var F=O;O=w;try{return G()}finally{O=F}},u.unstable_scheduleCallback=function(w,G,F){var ve=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ve+F:ve):F=ve,w){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=F+Te,w={id:E++,callback:G,priorityLevel:w,startTime:F,expirationTime:Te,sortIndex:-1},F>ve?(w.sortIndex=F,c(m,w),s(y)===null&&w===s(m)&&(U?(K(W),W=-1):U=!0,Ot(de,F-ve))):(w.sortIndex=Te,c(y,w),L||N||(L=!0,be||(be=!0,et()))),w},u.unstable_shouldYield=vt,u.unstable_wrapCallback=function(w){var G=O;return function(){var F=O;O=G;try{return w.apply(this,arguments)}finally{O=F}}}})(tr)),tr}var Ld;function Sg(){return Ld||(Ld=1,er.exports=xg()),er.exports}var lr={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function Eg(){if(Qd)return We;Qd=1;var u=pr();function c(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(c(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(y,m,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:A==null?null:""+A,children:y,containerInfo:m,implementation:E}}var p=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,We.createPortal=function(y,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return h(y,m,null,E)},We.flushSync=function(y){var m=p.T,E=r.p;try{if(p.T=null,r.p=2,y)return y()}finally{p.T=m,r.p=E,r.d.f()}},We.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(y,m))},We.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},We.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var E=m.as,A=g(E,m.crossOrigin),O=typeof m.integrity=="string"?m.integrity:void 0,N=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?r.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:A,integrity:O,fetchPriority:N}):E==="script"&&r.d.X(y,{crossOrigin:A,integrity:O,fetchPriority:N,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},We.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=g(m.as,m.crossOrigin);r.d.M(y,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(y)},We.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,A=g(E,m.crossOrigin);r.d.L(y,E,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},We.preloadModule=function(y,m){if(typeof y=="string")if(m){var E=g(m.as,m.crossOrigin);r.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(y)},We.requestFormReset=function(y){r.d.r(y)},We.unstable_batchedUpdates=function(y,m){return y(m)},We.useFormState=function(y,m,E){return p.H.useFormState(y,m,E)},We.useFormStatus=function(){return p.H.useHostTransitionStatus()},We.version="19.2.3",We}var Yd;function Ag(){if(Yd)return lr.exports;Yd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),lr.exports=Eg(),lr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Tg(){if(Xd)return Xa;Xd=1;var u=Sg(),c=pr(),s=Ag();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(r(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,n=t;;){var a=l.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===l)return y(a),e;if(i===n)return y(a),t;i=i.sibling}throw Error(r(188))}if(l.return!==n.return)l=a,n=i;else{for(var o=!1,d=a.child;d;){if(d===l){o=!0,l=a,n=i;break}if(d===n){o=!0,n=a,l=i;break}d=d.sibling}if(!o){for(d=i.child;d;){if(d===l){o=!0,l=i,n=a;break}if(d===n){o=!0,n=i,l=a;break}d=d.sibling}if(!o)throw Error(r(189))}}if(l.alternate!==n)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,O=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),Bt=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=Bt&&e[Bt]||e["@@iterator"],typeof e=="function"?e:null)}var ql=Symbol.for("react.client.reference");function Yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ql?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case X:return"Profiler";case B:return"StrictMode";case de:return"Suspense";case be:return"SuspenseList";case Xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case Q:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Yt(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return Yt(e(t))}catch{}}return null}var Ot=Array.isArray,w=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],Te=-1;function S(e){return{current:e}}function H(e){0>Te||(e.current=ve[Te],ve[Te]=null,Te--)}function q(e,t){Te++,ve[Te]=e.current,e.current=t}var Z=S(null),I=S(null),le=S(null),me=S(null);function Fe(e,t){switch(q(le,t),q(I,e),q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=id(t),e=ud(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(Z),q(Z,e)}function we(){H(Z),H(I),H(le)}function Wn(e){e.memoizedState!==null&&q(me,e);var t=Z.current,l=ud(t,e.type);t!==l&&(q(I,e),q(Z,l))}function ti(e){I.current===e&&(H(Z),H(I)),me.current===e&&(H(me),Ga._currentValue=F)}var wu,wr;function Ll(e){if(wu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);wu=t&&t[1]||"",wr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+e+wr}var Du=!1;function ju(e,t){if(!e||Du)return"";Du=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var z=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){z=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){z=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&z&&typeof M.stack=="string")return[M.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),o=i[0],d=i[1];if(o&&d){var b=o.split(`
`),_=d.split(`
`);for(a=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;a<_.length&&!_[a].includes("DetermineComponentFrameRoot");)a++;if(n===b.length||a===_.length)for(n=b.length-1,a=_.length-1;1<=n&&0<=a&&b[n]!==_[a];)a--;for(;1<=n&&0<=a;n--,a--)if(b[n]!==_[a]){if(n!==1||a!==1)do if(n--,a--,0>a||b[n]!==_[a]){var k=`
`+b[n].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=n&&0<=a);break}}}finally{Du=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Ll(l):""}function Zm(e,t){switch(e.tag){case 26:case 27:case 5:return Ll(e.type);case 16:return Ll("Lazy");case 13:return e.child!==t&&t!==null?Ll("Suspense Fallback"):Ll("Suspense");case 19:return Ll("SuspenseList");case 0:case 15:return ju(e.type,!1);case 11:return ju(e.type.render,!1);case 1:return ju(e.type,!0);case 31:return Ll("Activity");default:return""}}function Dr(e){try{var t="",l=null;do t+=Zm(e,l),l=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Hu=Object.prototype.hasOwnProperty,Uu=u.unstable_scheduleCallback,Bu=u.unstable_cancelCallback,Vm=u.unstable_shouldYield,Jm=u.unstable_requestPaint,st=u.unstable_now,Km=u.unstable_getCurrentPriorityLevel,jr=u.unstable_ImmediatePriority,Hr=u.unstable_UserBlockingPriority,li=u.unstable_NormalPriority,$m=u.unstable_LowPriority,Ur=u.unstable_IdlePriority,Wm=u.log,Fm=u.unstable_setDisableYieldValue,Fn=null,rt=null;function pl(e){if(typeof Wm=="function"&&Fm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Fn,e)}catch{}}var ot=Math.clz32?Math.clz32:ep,Pm=Math.log,Im=Math.LN2;function ep(e){return e>>>=0,e===0?32:31-(Pm(e)/Im|0)|0}var ni=256,ai=262144,ii=4194304;function Ql(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=n&134217727;return d!==0?(n=d&~i,n!==0?a=Ql(n):(o&=d,o!==0?a=Ql(o):l||(l=d&~e,l!==0&&(a=Ql(l))))):(d=n&~i,d!==0?a=Ql(d):o!==0?a=Ql(o):l||(l=n&~e,l!==0&&(a=Ql(l)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:a}function Pn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(){var e=ii;return ii<<=1,(ii&62914560)===0&&(ii=4194304),e}function Gu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function In(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lp(e,t,l,n,a,i){var o=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var d=e.entanglements,b=e.expirationTimes,_=e.hiddenUpdates;for(l=o&~l;0<l;){var k=31-ot(l),j=1<<k;d[k]=0,b[k]=-1;var z=_[k];if(z!==null)for(_[k]=null,k=0;k<z.length;k++){var M=z[k];M!==null&&(M.lane&=-536870913)}l&=~j}n!==0&&Gr(e,n,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Gr(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ot(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&261930}function qr(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-ot(l),a=1<<n;a&t|e[n]&t&&(e[n]|=t),l&=~a}}function Lr(e,t){var l=t&-t;return l=(l&42)!==0?1:qu(l),(l&(e.suspendedLanes|t))!==0?0:l}function qu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Cd(e.type))}function Yr(e,t){var l=G.p;try{return G.p=e,t()}finally{G.p=l}}var gl=Math.random().toString(36).slice(2),Ze="__reactFiber$"+gl,tt="__reactProps$"+gl,on="__reactContainer$"+gl,Qu="__reactEvents$"+gl,np="__reactListeners$"+gl,ap="__reactHandles$"+gl,Xr="__reactResources$"+gl,ea="__reactMarker$"+gl;function Yu(e){delete e[Ze],delete e[tt],delete e[Qu],delete e[np],delete e[ap]}function fn(e){var t=e[Ze];if(t)return t;for(var l=e.parentNode;l;){if(t=l[on]||l[Ze]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=dd(e);e!==null;){if(l=e[Ze])return l;e=dd(e)}return t}e=l,l=e.parentNode}return null}function hn(e){if(e=e[Ze]||e[on]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ta(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function dn(e){var t=e[Xr];return t||(t=e[Xr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[ea]=!0}var Zr=new Set,Vr={};function Yl(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Zr.add(t[e])}var ip=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jr={},Kr={};function up(e){return Hu.call(Kr,e)?!0:Hu.call(Jr,e)?!1:ip.test(e)?Kr[e]=!0:(Jr[e]=!0,!1)}function ci(e,t,l){if(up(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function si(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Xt(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $r(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cp(e,t,l){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){l=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xu(e){if(!e._valueTracker){var t=$r(e)?"checked":"value";e._valueTracker=cp(e,t,""+e[t])}}function Wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=$r(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sp=/[\n"\\]/g;function St(e){return e.replace(sp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zu(e,t,l,n,a,i,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Vu(e,o,xt(t)):l!=null?Vu(e,o,xt(l)):n!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+xt(d):e.removeAttribute("name")}function Fr(e,t,l,n,a,i,o,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Xu(e);return}l=l!=null?""+xt(l):"",t=t!=null?""+xt(t):l,d||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=d?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Xu(e)}function Vu(e,t,l){t==="number"&&ri(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function pn(e,t,l,n){if(e=e.options,t){t={};for(var a=0;a<l.length;a++)t["$"+l[a]]=!0;for(l=0;l<e.length;l++)a=t.hasOwnProperty("$"+e[l].value),e[l].selected!==a&&(e[l].selected=a),a&&n&&(e[l].defaultSelected=!0)}else{for(l=""+xt(l),t=null,a=0;a<e.length;a++){if(e[a].value===l){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Pr(e,t,l){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+xt(l):""}function Ir(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(r(92));if(Ot(n)){if(1<n.length)throw Error(r(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=xt(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n),Xu(e)}function gn(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eo(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||rp.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function to(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&l[a]!==n&&eo(e,a,n)}else for(var i in t)t.hasOwnProperty(i)&&eo(e,i,t[i])}function Ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return fp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Ku=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,bn=null;function lo(e){var t=hn(e);if(t&&(e=t.stateNode)){var l=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var a=n[tt]||null;if(!a)throw Error(r(90));Zu(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&Wr(n)}break e;case"textarea":Pr(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&pn(e,!!l.multiple,t,!1)}}}var Wu=!1;function no(e,t,l){if(Wu)return e(t,l);Wu=!0;try{var n=e(t);return n}finally{if(Wu=!1,(yn!==null||bn!==null)&&(Fi(),yn&&(t=yn,e=bn,bn=yn=null,lo(t),e)))for(t=0;t<e.length;t++)lo(e[t])}}function la(e,t){var l=e.stateNode;if(l===null)return null;var n=l[tt]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if(Vt)try{var na={};Object.defineProperty(na,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Fu=!1}var yl=null,Pu=null,fi=null;function ao(){if(fi)return fi;var e,t=Pu,l=t.length,n,a="value"in yl?yl.value:yl.textContent,i=a.length;for(e=0;e<l&&t[e]===a[e];e++);var o=l-e;for(n=1;n<=o&&t[l-n]===a[i-n];n++);return fi=a.slice(e,1<n?1-n:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function io(){return!1}function lt(e){function t(l,n,a,i,o){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(l=e[d],this[d]=l?l(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?di:io,this.isPropagationStopped=io,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var Xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=lt(Xl),aa=A({},Xl,{view:0,detail:0}),hp=lt(aa),Iu,ec,ia,pi=A({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(Iu=e.screenX-ia.screenX,ec=e.screenY-ia.screenY):ec=Iu=0,ia=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:ec}}),uo=lt(pi),dp=A({},pi,{dataTransfer:0}),mp=lt(dp),pp=A({},aa,{relatedTarget:0}),tc=lt(pp),gp=A({},Xl,{animationName:0,elapsedTime:0,pseudoElement:0}),yp=lt(gp),bp=A({},Xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=lt(bp),xp=A({},Xl,{data:0}),co=lt(xp),Sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function lc(){return Tp}var Rp=A({},aa,{key:function(e){if(e.key){var t=Sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_p=lt(Rp),zp=A({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),so=lt(zp),Mp=A({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),Cp=lt(Mp),Np=A({},Xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=lt(Np),Op=A({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=lt(Op),Dp=A({},Xl,{newState:0,oldState:0}),jp=lt(Dp),Hp=[9,13,27,32],nc=Vt&&"CompositionEvent"in window,ua=null;Vt&&"documentMode"in document&&(ua=document.documentMode);var Up=Vt&&"TextEvent"in window&&!ua,ro=Vt&&(!nc||ua&&8<ua&&11>=ua),oo=" ",fo=!1;function ho(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Bp(e,t){switch(e){case"compositionend":return mo(t);case"keypress":return t.which!==32?null:(fo=!0,oo);case"textInput":return e=t.data,e===oo&&fo?null:e;default:return null}}function Gp(e,t){if(vn)return e==="compositionend"||!nc&&ho(e,t)?(e=ao(),fi=Pu=yl=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ro&&t.locale!=="ko"?null:t.data;default:return null}}var qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qp[e.type]:t==="textarea"}function go(e,t,l,n){yn?bn?bn.push(n):bn=[n]:yn=n,t=au(t,"onChange"),0<t.length&&(l=new mi("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var ca=null,sa=null;function Lp(e){Ih(e,0)}function gi(e){var t=ta(e);if(Wr(t))return e}function yo(e,t){if(e==="change")return t}var bo=!1;if(Vt){var ac;if(Vt){var ic="oninput"in document;if(!ic){var vo=document.createElement("div");vo.setAttribute("oninput","return;"),ic=typeof vo.oninput=="function"}ac=ic}else ac=!1;bo=ac&&(!document.documentMode||9<document.documentMode)}function xo(){ca&&(ca.detachEvent("onpropertychange",So),sa=ca=null)}function So(e){if(e.propertyName==="value"&&gi(sa)){var t=[];go(t,sa,e,$u(e)),no(Lp,t)}}function Qp(e,t,l){e==="focusin"?(xo(),ca=t,sa=l,ca.attachEvent("onpropertychange",So)):e==="focusout"&&xo()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(sa)}function Xp(e,t){if(e==="click")return gi(t)}function Zp(e,t){if(e==="input"||e==="change")return gi(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Vp;function ra(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Hu.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,t){var l=Eo(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Eo(l)}}function To(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?To(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ro(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ri(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ri(e.document)}return t}function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jp=Vt&&"documentMode"in document&&11>=document.documentMode,xn=null,cc=null,oa=null,sc=!1;function _o(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;sc||xn==null||xn!==ri(n)||(n=xn,"selectionStart"in n&&uc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),oa&&ra(oa,n)||(oa=n,n=au(cc,"onSelect"),0<n.length&&(t=new mi("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=xn)))}function Zl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Sn={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionrun:Zl("Transition","TransitionRun"),transitionstart:Zl("Transition","TransitionStart"),transitioncancel:Zl("Transition","TransitionCancel"),transitionend:Zl("Transition","TransitionEnd")},rc={},zo={};Vt&&(zo=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Vl(e){if(rc[e])return rc[e];if(!Sn[e])return e;var t=Sn[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in zo)return rc[e]=t[l];return e}var Mo=Vl("animationend"),Co=Vl("animationiteration"),No=Vl("animationstart"),Kp=Vl("transitionrun"),$p=Vl("transitionstart"),Wp=Vl("transitioncancel"),ko=Vl("transitionend"),Oo=new Map,oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oc.push("scrollEnd");function wt(e,t){Oo.set(e,t),Yl(t,[e])}var yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],En=0,fc=0;function bi(){for(var e=En,t=fc=En=0;t<e;){var l=Et[t];Et[t++]=null;var n=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,n!==null&&a!==null){var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}i!==0&&wo(l,a,i)}}function vi(e,t,l,n){Et[En++]=e,Et[En++]=t,Et[En++]=l,Et[En++]=n,fc|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function hc(e,t,l,n){return vi(e,t,l,n),xi(e)}function Jl(e,t){return vi(e,null,null,t),xi(e)}function wo(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var a=!1,i=e.return;i!==null;)i.childLanes|=l,n=i.alternate,n!==null&&(n.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-ot(l),e=i.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=l|536870912),i):null}function xi(e){if(50<Oa)throw Oa=0,Ss=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var An={};function Fp(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,l,n){return new Fp(e,t,l,n)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var l=e.alternate;return l===null?(l=ht(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Do(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,l,n,a,i){var o=0;if(n=e,typeof e=="function")dc(e)&&(o=1);else if(typeof e=="string")o=lg(e,l,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Xe:return e=ht(31,l,t,a),e.elementType=Xe,e.lanes=i,e;case U:return Kl(l.children,a,i,t);case B:o=8,a|=24;break;case X:return e=ht(12,l,t,a|2),e.elementType=X,e.lanes=i,e;case de:return e=ht(13,l,t,a),e.elementType=de,e.lanes=i,e;case be:return e=ht(19,l,t,a),e.elementType=be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:o=10;break e;case K:o=9;break e;case he:o=11;break e;case W:o=14;break e;case Oe:o=16,n=null;break e}o=29,l=Error(r(130,e===null?"null":typeof e,"")),n=null}return t=ht(o,l,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function Kl(e,t,l,n){return e=ht(7,e,n,t),e.lanes=l,e}function mc(e,t,l){return e=ht(6,e,null,t),e.lanes=l,e}function jo(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function pc(e,t,l){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ho=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var l=Ho.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Dr(t)},Ho.set(e,t),t)}return{value:e,source:t,stack:Dr(t)}}var Tn=[],Rn=0,Ei=null,fa=0,Tt=[],Rt=0,bl=null,Gt=1,qt="";function Kt(e,t){Tn[Rn++]=fa,Tn[Rn++]=Ei,Ei=e,fa=t}function Uo(e,t,l){Tt[Rt++]=Gt,Tt[Rt++]=qt,Tt[Rt++]=bl,bl=e;var n=Gt;e=qt;var a=32-ot(n)-1;n&=~(1<<a),l+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(n&(1<<o)-1).toString(32),n>>=o,a-=o,Gt=1<<32-ot(t)+a|l<<a|n,qt=i+e}else Gt=1<<i|l<<a|n,qt=e}function gc(e){e.return!==null&&(Kt(e,1),Uo(e,1,0))}function yc(e){for(;e===Ei;)Ei=Tn[--Rn],Tn[Rn]=null,fa=Tn[--Rn],Tn[Rn]=null;for(;e===bl;)bl=Tt[--Rt],Tt[Rt]=null,qt=Tt[--Rt],Tt[Rt]=null,Gt=Tt[--Rt],Tt[Rt]=null}function Bo(e,t){Tt[Rt++]=Gt,Tt[Rt++]=qt,Tt[Rt++]=bl,Gt=t.id,qt=t.overflow,bl=e}var Ve=null,_e=null,ce=!1,vl=null,_t=!1,bc=Error(r(519));function xl(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ha(At(t,e)),bc}function Go(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[Ze]=e,t[tt]=n,l){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(l=0;l<Da.length;l++)ae(Da[l],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),Fr(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),Ir(t,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||nd(t.textContent,l)?(n.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),n.onScroll!=null&&ae("scroll",t),n.onScrollEnd!=null&&ae("scrollend",t),n.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||xl(e,!0)}function qo(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:Ve=Ve.return}}function _n(e){if(e!==Ve)return!1;if(!ce)return qo(e),ce=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Hs(e.type,e.memoizedProps)),l=!l),l&&_e&&xl(e),qo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));_e=hd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));_e=hd(e)}else t===27?(t=_e,Dl(e.type)?(e=Ls,Ls=null,_e=e):_e=t):_e=Ve?Mt(e.stateNode.nextSibling):null;return!0}function $l(){_e=Ve=null,ce=!1}function vc(){var e=vl;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),vl=null),e}function ha(e){vl===null?vl=[e]:vl.push(e)}var xc=S(null),Wl=null,$t=null;function Sl(e,t,l){q(xc,t._currentValue),t._currentValue=l}function Wt(e){e._currentValue=xc.current,H(xc)}function Sc(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function Ec(e,t,l,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var o=a.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=a;for(var b=0;b<t.length;b++)if(d.context===t[b]){i.lanes|=l,d=i.alternate,d!==null&&(d.lanes|=l),Sc(i.return,l,e),n||(o=null);break e}i=d.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(r(341));o.lanes|=l,i=o.alternate,i!==null&&(i.lanes|=l),Sc(o,l,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function zn(e,t,l,n){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var d=a.type;ft(a.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(a===me.current){if(o=a.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ga):e=[Ga])}a=a.return}e!==null&&Ec(t,e,l,n),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fl(e){Wl=e,$t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Lo(Wl,e)}function Ti(e,t){return Wl===null&&Fl(e),Lo(e,t)}function Lo(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},$t===null){if(e===null)throw Error(r(308));$t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $t=$t.next=t;return l}var Pp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Ip=u.unstable_scheduleCallback,e0=u.unstable_NormalPriority,Ue={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ac(){return{controller:new Pp,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&Ip(e0,function(){e.controller.abort()})}var ma=null,Tc=0,Mn=0,Cn=null;function t0(e,t){if(ma===null){var l=ma=[];Tc=0,Mn=zs(),Cn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Tc++,t.then(Qo,Qo),t}function Qo(){if(--Tc===0&&ma!==null){Cn!==null&&(Cn.status="fulfilled");var e=ma;ma=null,Mn=0,Cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function l0(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<l.length;a++)(0,l[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var Yo=w.S;w.S=function(e,t){zh=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&t0(e,t),Yo!==null&&Yo(e,t)};var Pl=S(null);function Rc(){var e=Pl.current;return e!==null?e:Re.pooledCache}function Ri(e,t){t===null?q(Pl,Pl.current):q(Pl,t.pool)}function Xo(){var e=Rc();return e===null?null:{parent:Ue._currentValue,pool:e}}var Nn=Error(r(460)),_c=Error(r(474)),_i=Error(r(542)),zi={then:function(){}};function Zo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Zt,Zt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ko(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ko(e),e}throw en=t,Nn}}function Il(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(en=l,Nn):l}}var en=null;function Jo(){if(en===null)throw Error(r(459));var e=en;return en=null,e}function Ko(e){if(e===Nn||e===_i)throw Error(r(483))}var kn=null,pa=0;function Mi(e){var t=pa;return pa+=1,kn===null&&(kn=[]),Vo(kn,e,t)}function ga(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ci(e,t){throw t.$$typeof===O?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $o(e){function t(T,x){if(e){var R=T.deletions;R===null?(T.deletions=[x],T.flags|=16):R.push(x)}}function l(T,x){if(!e)return null;for(;x!==null;)t(T,x),x=x.sibling;return null}function n(T){for(var x=new Map;T!==null;)T.key!==null?x.set(T.key,T):x.set(T.index,T),T=T.sibling;return x}function a(T,x){return T=Jt(T,x),T.index=0,T.sibling=null,T}function i(T,x,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<x?(T.flags|=67108866,x):R):(T.flags|=67108866,x)):(T.flags|=1048576,x)}function o(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function d(T,x,R,D){return x===null||x.tag!==6?(x=mc(R,T.mode,D),x.return=T,x):(x=a(x,R),x.return=T,x)}function b(T,x,R,D){var J=R.type;return J===U?k(T,x,R.props.children,D,R.key):x!==null&&(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Oe&&Il(J)===x.type)?(x=a(x,R.props),ga(x,R),x.return=T,x):(x=Si(R.type,R.key,R.props,null,T.mode,D),ga(x,R),x.return=T,x)}function _(T,x,R,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==R.containerInfo||x.stateNode.implementation!==R.implementation?(x=pc(R,T.mode,D),x.return=T,x):(x=a(x,R.children||[]),x.return=T,x)}function k(T,x,R,D,J){return x===null||x.tag!==7?(x=Kl(R,T.mode,D,J),x.return=T,x):(x=a(x,R),x.return=T,x)}function j(T,x,R){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=mc(""+x,T.mode,R),x.return=T,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case N:return R=Si(x.type,x.key,x.props,null,T.mode,R),ga(R,x),R.return=T,R;case L:return x=pc(x,T.mode,R),x.return=T,x;case Oe:return x=Il(x),j(T,x,R)}if(Ot(x)||et(x))return x=Kl(x,T.mode,R,null),x.return=T,x;if(typeof x.then=="function")return j(T,Mi(x),R);if(x.$$typeof===Q)return j(T,Ti(T,x),R);Ci(T,x)}return null}function z(T,x,R,D){var J=x!==null?x.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return J!==null?null:d(T,x,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case N:return R.key===J?b(T,x,R,D):null;case L:return R.key===J?_(T,x,R,D):null;case Oe:return R=Il(R),z(T,x,R,D)}if(Ot(R)||et(R))return J!==null?null:k(T,x,R,D,null);if(typeof R.then=="function")return z(T,x,Mi(R),D);if(R.$$typeof===Q)return z(T,x,Ti(T,R),D);Ci(T,R)}return null}function M(T,x,R,D,J){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return T=T.get(R)||null,d(x,T,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case N:return T=T.get(D.key===null?R:D.key)||null,b(x,T,D,J);case L:return T=T.get(D.key===null?R:D.key)||null,_(x,T,D,J);case Oe:return D=Il(D),M(T,x,R,D,J)}if(Ot(D)||et(D))return T=T.get(R)||null,k(x,T,D,J,null);if(typeof D.then=="function")return M(T,x,R,Mi(D),J);if(D.$$typeof===Q)return M(T,x,R,Ti(x,D),J);Ci(x,D)}return null}function Y(T,x,R,D){for(var J=null,se=null,V=x,te=x=0,ue=null;V!==null&&te<R.length;te++){V.index>te?(ue=V,V=null):ue=V.sibling;var re=z(T,V,R[te],D);if(re===null){V===null&&(V=ue);break}e&&V&&re.alternate===null&&t(T,V),x=i(re,x,te),se===null?J=re:se.sibling=re,se=re,V=ue}if(te===R.length)return l(T,V),ce&&Kt(T,te),J;if(V===null){for(;te<R.length;te++)V=j(T,R[te],D),V!==null&&(x=i(V,x,te),se===null?J=V:se.sibling=V,se=V);return ce&&Kt(T,te),J}for(V=n(V);te<R.length;te++)ue=M(V,T,te,R[te],D),ue!==null&&(e&&ue.alternate!==null&&V.delete(ue.key===null?te:ue.key),x=i(ue,x,te),se===null?J=ue:se.sibling=ue,se=ue);return e&&V.forEach(function(Gl){return t(T,Gl)}),ce&&Kt(T,te),J}function $(T,x,R,D){if(R==null)throw Error(r(151));for(var J=null,se=null,V=x,te=x=0,ue=null,re=R.next();V!==null&&!re.done;te++,re=R.next()){V.index>te?(ue=V,V=null):ue=V.sibling;var Gl=z(T,V,re.value,D);if(Gl===null){V===null&&(V=ue);break}e&&V&&Gl.alternate===null&&t(T,V),x=i(Gl,x,te),se===null?J=Gl:se.sibling=Gl,se=Gl,V=ue}if(re.done)return l(T,V),ce&&Kt(T,te),J;if(V===null){for(;!re.done;te++,re=R.next())re=j(T,re.value,D),re!==null&&(x=i(re,x,te),se===null?J=re:se.sibling=re,se=re);return ce&&Kt(T,te),J}for(V=n(V);!re.done;te++,re=R.next())re=M(V,T,te,re.value,D),re!==null&&(e&&re.alternate!==null&&V.delete(re.key===null?te:re.key),x=i(re,x,te),se===null?J=re:se.sibling=re,se=re);return e&&V.forEach(function(dg){return t(T,dg)}),ce&&Kt(T,te),J}function Ee(T,x,R,D){if(typeof R=="object"&&R!==null&&R.type===U&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case N:e:{for(var J=R.key;x!==null;){if(x.key===J){if(J=R.type,J===U){if(x.tag===7){l(T,x.sibling),D=a(x,R.props.children),D.return=T,T=D;break e}}else if(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Oe&&Il(J)===x.type){l(T,x.sibling),D=a(x,R.props),ga(D,R),D.return=T,T=D;break e}l(T,x);break}else t(T,x);x=x.sibling}R.type===U?(D=Kl(R.props.children,T.mode,D,R.key),D.return=T,T=D):(D=Si(R.type,R.key,R.props,null,T.mode,D),ga(D,R),D.return=T,T=D)}return o(T);case L:e:{for(J=R.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===R.containerInfo&&x.stateNode.implementation===R.implementation){l(T,x.sibling),D=a(x,R.children||[]),D.return=T,T=D;break e}else{l(T,x);break}else t(T,x);x=x.sibling}D=pc(R,T.mode,D),D.return=T,T=D}return o(T);case Oe:return R=Il(R),Ee(T,x,R,D)}if(Ot(R))return Y(T,x,R,D);if(et(R)){if(J=et(R),typeof J!="function")throw Error(r(150));return R=J.call(R),$(T,x,R,D)}if(typeof R.then=="function")return Ee(T,x,Mi(R),D);if(R.$$typeof===Q)return Ee(T,x,Ti(T,R),D);Ci(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,x!==null&&x.tag===6?(l(T,x.sibling),D=a(x,R),D.return=T,T=D):(l(T,x),D=mc(R,T.mode,D),D.return=T,T=D),o(T)):l(T,x)}return function(T,x,R,D){try{pa=0;var J=Ee(T,x,R,D);return kn=null,J}catch(V){if(V===Nn||V===_i)throw V;var se=ht(29,V,null,T.mode);return se.lanes=D,se.return=T,se}finally{}}}var tn=$o(!0),Wo=$o(!1),El=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Al(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(fe&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=xi(e),wo(e,null,l),t}return vi(e,n,t,l),xi(e)}function ya(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,qr(e,l)}}function Cc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var o={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?a=i=o:i=i.next=o,l=l.next}while(l!==null);i===null?a=i=t:i=i.next=t}else a=i=t;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Nc=!1;function ba(){if(Nc){var e=Cn;if(e!==null)throw e}}function va(e,t,l,n){Nc=!1;var a=e.updateQueue;El=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var b=d,_=b.next;b.next=null,o===null?i=_:o.next=_,o=b;var k=e.alternate;k!==null&&(k=k.updateQueue,d=k.lastBaseUpdate,d!==o&&(d===null?k.firstBaseUpdate=_:d.next=_,k.lastBaseUpdate=b))}if(i!==null){var j=a.baseState;o=0,k=_=b=null,d=i;do{var z=d.lane&-536870913,M=z!==d.lane;if(M?(ie&z)===z:(n&z)===z){z!==0&&z===Mn&&(Nc=!0),k!==null&&(k=k.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var Y=e,$=d;z=t;var Ee=l;switch($.tag){case 1:if(Y=$.payload,typeof Y=="function"){j=Y.call(Ee,j,z);break e}j=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=$.payload,z=typeof Y=="function"?Y.call(Ee,j,z):Y,z==null)break e;j=A({},j,z);break e;case 2:El=!0}}z=d.callback,z!==null&&(e.flags|=64,M&&(e.flags|=8192),M=a.callbacks,M===null?a.callbacks=[z]:M.push(z))}else M={lane:z,tag:d.tag,payload:d.payload,callback:d.callback,next:null},k===null?(_=k=M,b=j):k=k.next=M,o|=z;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;M=d,d=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);k===null&&(b=j),a.baseState=b,a.firstBaseUpdate=_,a.lastBaseUpdate=k,i===null&&(a.shared.lanes=0),Cl|=o,e.lanes=o,e.memoizedState=j}}function Fo(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Po(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Fo(l[e],t)}var On=S(null),Ni=S(0);function Io(e,t){e=il,q(Ni,e),q(On,t),il=e|t.baseLanes}function kc(){q(Ni,il),q(On,On.current)}function Oc(){il=Ni.current,H(On),H(Ni)}var dt=S(null),zt=null;function Rl(e){var t=e.alternate;q(De,De.current&1),q(dt,e),zt===null&&(t===null||On.current!==null||t.memoizedState!==null)&&(zt=e)}function wc(e){q(De,De.current),q(dt,e),zt===null&&(zt=e)}function ef(e){e.tag===22?(q(De,De.current),q(dt,e),zt===null&&(zt=e)):_l()}function _l(){q(De,De.current),q(dt,dt.current)}function mt(e){H(dt),zt===e&&(zt=null),H(De)}var De=S(0);function ki(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Gs(l)||qs(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,ee=null,xe=null,Be=null,Oi=!1,wn=!1,ln=!1,wi=0,xa=0,Dn=null,n0=0;function Ne(){throw Error(r(321))}function Dc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ft(e[l],t[l]))return!1;return!0}function jc(e,t,l,n,a,i){return Ft=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Bf:Wc,ln=!1,i=l(n,a),ln=!1,wn&&(i=lf(t,l,n,a)),tf(e),i}function tf(e){w.H=Aa;var t=xe!==null&&xe.next!==null;if(Ft=0,Be=xe=ee=null,Oi=!1,xa=0,Dn=null,t)throw Error(r(300));e===null||Ge||(e=e.dependencies,e!==null&&Ai(e)&&(Ge=!0))}function lf(e,t,l,n){ee=e;var a=0;do{if(wn&&(Dn=null),xa=0,wn=!1,25<=a)throw Error(r(301));if(a+=1,Be=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=Gf,i=t(l,n)}while(wn);return i}function a0(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?Sa(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ee.flags|=1024),t}function Hc(){var e=wi!==0;return wi=0,e}function Uc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Bc(e){if(Oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Oi=!1}Ft=0,Be=xe=ee=null,wn=!1,xa=wi=0,Dn=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ee.memoizedState=Be=e:Be=Be.next=e,Be}function je(){if(xe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Be===null?ee.memoizedState:Be.next;if(t!==null)Be=t,xe=e;else{if(e===null)throw ee.alternate===null?Error(r(467)):Error(r(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Be===null?ee.memoizedState=Be=e:Be=Be.next=e}return Be}function Di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sa(e){var t=xa;return xa+=1,Dn===null&&(Dn=[]),e=Vo(Dn,e,t),t=ee,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Bf:Wc),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sa(e);if(e.$$typeof===Q)return Je(e)}throw Error(r(438,String(e)))}function Gc(e){var t=null,l=ee.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=ee.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Di(),ee.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=vt;return t.index++,l}function Pt(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=je();return qc(t,xe,e)}function qc(e,t,l){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=l;var a=e.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}t.baseQueue=a=i,n.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var d=o=null,b=null,_=t,k=!1;do{var j=_.lane&-536870913;if(j!==_.lane?(ie&j)===j:(Ft&j)===j){var z=_.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),j===Mn&&(k=!0);else if((Ft&z)===z){_=_.next,z===Mn&&(k=!0);continue}else j={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},b===null?(d=b=j,o=i):b=b.next=j,ee.lanes|=z,Cl|=z;j=_.action,ln&&l(i,j),i=_.hasEagerState?_.eagerState:l(i,j)}else z={lane:j,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},b===null?(d=b=z,o=i):b=b.next=z,ee.lanes|=j,Cl|=j;_=_.next}while(_!==null&&_!==t);if(b===null?o=i:b.next=d,!ft(i,e.memoizedState)&&(Ge=!0,k&&(l=Cn,l!==null)))throw l;e.memoizedState=i,e.baseState=o,e.baseQueue=b,n.lastRenderedState=i}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Lc(e){var t=je(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var n=l.dispatch,a=l.pending,i=t.memoizedState;if(a!==null){l.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);ft(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,n]}function nf(e,t,l){var n=ee,a=je(),i=ce;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=t();var o=!ft((xe||a).memoizedState,l);if(o&&(a.memoizedState=l,Ge=!0),a=a.queue,Xc(cf.bind(null,n,a,e),[e]),a.getSnapshot!==t||o||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,jn(9,{destroy:void 0},uf.bind(null,n,a,l,t),null),Re===null)throw Error(r(349));i||(Ft&127)!==0||af(n,t,l)}return l}function af(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ee.updateQueue,t===null?(t=Di(),ee.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function uf(e,t,l,n){t.value=l,t.getSnapshot=n,sf(t)&&rf(e)}function cf(e,t,l){return l(function(){sf(t)&&rf(e)})}function sf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ft(e,l)}catch{return!0}}function rf(e){var t=Jl(e,2);t!==null&&ct(t,e,2)}function Qc(e){var t=Pe();if(typeof e=="function"){var l=e;if(e=l(),ln){pl(!0);try{l()}finally{pl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function of(e,t,l,n){return e.baseState=l,qc(e,xe,typeof n=="function"?n:Pt)}function i0(e,t,l,n,a){if(Gi(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};w.T!==null?l(!0):i.isTransition=!1,n(i),l=t.pending,l===null?(i.next=t.pending=i,ff(t,i)):(i.next=l.next,t.pending=l.next=i)}}function ff(e,t){var l=t.action,n=t.payload,a=e.state;if(t.isTransition){var i=w.T,o={};w.T=o;try{var d=l(a,n),b=w.S;b!==null&&b(o,d),hf(e,t,d)}catch(_){Yc(e,t,_)}finally{i!==null&&o.types!==null&&(i.types=o.types),w.T=i}}else try{i=l(a,n),hf(e,t,i)}catch(_){Yc(e,t,_)}}function hf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){df(e,t,n)},function(n){return Yc(e,t,n)}):df(e,t,l)}function df(e,t,l){t.status="fulfilled",t.value=l,mf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,ff(e,l)))}function Yc(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,mf(t),t=t.next;while(t!==n)}e.action=null}function mf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pf(e,t){return t}function gf(e,t){if(ce){var l=Re.formState;if(l!==null){e:{var n=ee;if(ce){if(_e){t:{for(var a=_e,i=_t;a.nodeType!==8;){if(!i){a=null;break t}if(a=Mt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){_e=Mt(a.nextSibling),n=a.data==="F!";break e}}xl(n)}n=!1}n&&(t=l[0])}}return l=Pe(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pf,lastRenderedState:t},l.queue=n,l=jf.bind(null,ee,n),n.dispatch=l,n=Qc(!1),i=$c.bind(null,ee,!1,n.queue),n=Pe(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,l=i0.bind(null,ee,a,i,l),a.dispatch=l,n.memoizedState=e,[t,l,!1]}function yf(e){var t=je();return bf(t,xe,e)}function bf(e,t,l){if(t=qc(e,t,pf)[0],e=Hi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Sa(t)}catch(o){throw o===Nn?_i:o}else n=t;t=je();var a=t.queue,i=a.dispatch;return l!==t.memoizedState&&(ee.flags|=2048,jn(9,{destroy:void 0},u0.bind(null,a,l),null)),[n,i,e]}function u0(e,t){e.action=t}function vf(e){var t=je(),l=xe;if(l!==null)return bf(t,l,e);je(),t=t.memoizedState,l=je();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function jn(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=ee.updateQueue,t===null&&(t=Di(),ee.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function xf(){return je().memoizedState}function Ui(e,t,l,n){var a=Pe();ee.flags|=e,a.memoizedState=jn(1|t,{destroy:void 0},l,n===void 0?null:n)}function Bi(e,t,l,n){var a=je();n=n===void 0?null:n;var i=a.memoizedState.inst;xe!==null&&n!==null&&Dc(n,xe.memoizedState.deps)?a.memoizedState=jn(t,i,l,n):(ee.flags|=e,a.memoizedState=jn(1|t,i,l,n))}function Sf(e,t){Ui(8390656,8,e,t)}function Xc(e,t){Bi(2048,8,e,t)}function c0(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=Di(),ee.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Ef(e){var t=je().memoizedState;return c0({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Af(e,t){return Bi(4,2,e,t)}function Tf(e,t){return Bi(4,4,e,t)}function Rf(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _f(e,t,l){l=l!=null?l.concat([e]):null,Bi(4,4,Rf.bind(null,t,e),l)}function Zc(){}function zf(e,t){var l=je();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&Dc(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function Mf(e,t){var l=je();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&Dc(t,n[1]))return n[0];if(n=e(),ln){pl(!0);try{e()}finally{pl(!1)}}return l.memoizedState=[n,t],n}function Vc(e,t,l){return l===void 0||(Ft&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Ch(),ee.lanes|=e,Cl|=e,l)}function Cf(e,t,l,n){return ft(l,t)?l:On.current!==null?(e=Vc(e,l,n),ft(e,t)||(Ge=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(ie&261930)===0?(Ge=!0,e.memoizedState=l):(e=Ch(),ee.lanes|=e,Cl|=e,t)}function Nf(e,t,l,n,a){var i=G.p;G.p=i!==0&&8>i?i:8;var o=w.T,d={};w.T=d,$c(e,!1,t,l);try{var b=a(),_=w.S;if(_!==null&&_(d,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var k=l0(b,n);Ea(e,t,k,yt(e))}else Ea(e,t,n,yt(e))}catch(j){Ea(e,t,{then:function(){},status:"rejected",reason:j},yt())}finally{G.p=i,o!==null&&d.types!==null&&(o.types=d.types),w.T=o}}function s0(){}function Jc(e,t,l,n){if(e.tag!==5)throw Error(r(476));var a=kf(e).queue;Nf(e,a,t,F,l===null?s0:function(){return Of(e),l(n)})}function kf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:F},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Of(e){var t=kf(e);t.next===null&&(t=e.alternate.memoizedState),Ea(e,t.next.queue,{},yt())}function Kc(){return Je(Ga)}function wf(){return je().memoizedState}function Df(){return je().memoizedState}function r0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=yt();e=Al(l);var n=Tl(t,e,l);n!==null&&(ct(n,t,l),ya(n,t,l)),t={cache:Ac()},e.payload=t;return}t=t.return}}function o0(e,t,l){var n=yt();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gi(e)?Hf(t,l):(l=hc(e,t,l,n),l!==null&&(ct(l,e,n),Uf(l,t,n)))}function jf(e,t,l){var n=yt();Ea(e,t,l,n)}function Ea(e,t,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))Hf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,d=i(o,l);if(a.hasEagerState=!0,a.eagerState=d,ft(d,o))return vi(e,t,a,0),Re===null&&bi(),!1}catch{}finally{}if(l=hc(e,t,a,n),l!==null)return ct(l,e,n),Uf(l,t,n),!0}return!1}function $c(e,t,l,n){if(n={lane:2,revertLane:zs(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gi(e)){if(t)throw Error(r(479))}else t=hc(e,l,n,2),t!==null&&ct(t,e,2)}function Gi(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Hf(e,t){wn=Oi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Uf(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,qr(e,l)}}var Aa={readContext:Je,use:ji,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Aa.useEffectEvent=Ne;var Bf={readContext:Je,use:ji,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Sf,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Ui(4194308,4,Rf.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var l=Pe();t=t===void 0?null:t;var n=e();if(ln){pl(!0);try{e()}finally{pl(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=Pe();if(l!==void 0){var a=l(t);if(ln){pl(!0);try{l(t)}finally{pl(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=o0.bind(null,ee,e),[n.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=Qc(e);var t=e.queue,l=jf.bind(null,ee,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Zc,useDeferredValue:function(e,t){var l=Pe();return Vc(l,e,t)},useTransition:function(){var e=Qc(!1);return e=Nf.bind(null,ee,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=ee,a=Pe();if(ce){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),Re===null)throw Error(r(349));(ie&127)!==0||af(n,t,l)}a.memoizedState=l;var i={value:l,getSnapshot:t};return a.queue=i,Sf(cf.bind(null,n,i,e),[e]),n.flags|=2048,jn(9,{destroy:void 0},uf.bind(null,n,i,l,t),null),l},useId:function(){var e=Pe(),t=Re.identifierPrefix;if(ce){var l=qt,n=Gt;l=(n&~(1<<32-ot(n)-1)).toString(32)+l,t="_"+t+"R_"+l,l=wi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=n0++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Kc,useFormState:gf,useActionState:gf,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=$c.bind(null,ee,!0,l),l.dispatch=t,[e,t]},useMemoCache:Gc,useCacheRefresh:function(){return Pe().memoizedState=r0.bind(null,ee)},useEffectEvent:function(e){var t=Pe(),l={impl:e};return t.memoizedState=l,function(){if((fe&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},Wc={readContext:Je,use:ji,useCallback:zf,useContext:Je,useEffect:Xc,useImperativeHandle:_f,useInsertionEffect:Af,useLayoutEffect:Tf,useMemo:Mf,useReducer:Hi,useRef:xf,useState:function(){return Hi(Pt)},useDebugValue:Zc,useDeferredValue:function(e,t){var l=je();return Cf(l,xe.memoizedState,e,t)},useTransition:function(){var e=Hi(Pt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Sa(e),t]},useSyncExternalStore:nf,useId:wf,useHostTransitionStatus:Kc,useFormState:yf,useActionState:yf,useOptimistic:function(e,t){var l=je();return of(l,xe,e,t)},useMemoCache:Gc,useCacheRefresh:Df};Wc.useEffectEvent=Ef;var Gf={readContext:Je,use:ji,useCallback:zf,useContext:Je,useEffect:Xc,useImperativeHandle:_f,useInsertionEffect:Af,useLayoutEffect:Tf,useMemo:Mf,useReducer:Lc,useRef:xf,useState:function(){return Lc(Pt)},useDebugValue:Zc,useDeferredValue:function(e,t){var l=je();return xe===null?Vc(l,e,t):Cf(l,xe.memoizedState,e,t)},useTransition:function(){var e=Lc(Pt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Sa(e),t]},useSyncExternalStore:nf,useId:wf,useHostTransitionStatus:Kc,useFormState:vf,useActionState:vf,useOptimistic:function(e,t){var l=je();return xe!==null?of(l,xe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:Df};Gf.useEffectEvent=Ef;function Fc(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:A({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Pc={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=yt(),a=Al(n);a.payload=t,l!=null&&(a.callback=l),t=Tl(e,a,n),t!==null&&(ct(t,e,n),ya(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=yt(),a=Al(n);a.tag=1,a.payload=t,l!=null&&(a.callback=l),t=Tl(e,a,n),t!==null&&(ct(t,e,n),ya(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=yt(),n=Al(l);n.tag=2,t!=null&&(n.callback=t),t=Tl(e,n,l),t!==null&&(ct(t,e,l),ya(t,e,l))}};function qf(e,t,l,n,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!ra(l,n)||!ra(a,i):!0}function Lf(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&Pc.enqueueReplaceState(t,t.state,null)}function nn(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=A({},l));for(var a in e)l[a]===void 0&&(l[a]=e[a])}return l}function Qf(e){yi(e)}function Yf(e){console.error(e)}function Xf(e){yi(e)}function qi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Zf(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ic(e,t,l){return l=Al(l),l.tag=3,l.payload={element:null},l.callback=function(){qi(e,t)},l}function Vf(e){return e=Al(e),e.tag=3,e}function Jf(e,t,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;e.payload=function(){return a(i)},e.callback=function(){Zf(t,l,n)}}var o=l.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Zf(t,l,n),typeof a!="function"&&(Nl===null?Nl=new Set([this]):Nl.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})})}function f0(e,t,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&zn(t,l,a,!0),l=dt.current,l!==null){switch(l.tag){case 31:case 13:return zt===null?Pi():l.alternate===null&&ke===0&&(ke=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===zi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),Ts(e,n,a)),!1;case 22:return l.flags|=65536,n===zi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),Ts(e,n,a)),!1}throw Error(r(435,l.tag))}return Ts(e,n,a),Pi(),!1}if(ce)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==bc&&(e=Error(r(422),{cause:n}),ha(At(e,l)))):(n!==bc&&(t=Error(r(423),{cause:n}),ha(At(t,l))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=At(n,l),a=Ic(e.stateNode,n,a),Cc(e,a),ke!==4&&(ke=2)),!1;var i=Error(r(520),{cause:n});if(i=At(i,l),ka===null?ka=[i]:ka.push(i),ke!==4&&(ke=2),t===null)return!0;n=At(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=a&-a,l.lanes|=e,e=Ic(l.stateNode,n,e),Cc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Nl===null||!Nl.has(i))))return l.flags|=65536,a&=-a,l.lanes|=a,a=Vf(a),Jf(a,e,l,n),Cc(l,a),!1}l=l.return}while(l!==null);return!1}var es=Error(r(461)),Ge=!1;function Ke(e,t,l,n){t.child=e===null?Wo(t,null,l,n):tn(t,e.child,l,n)}function Kf(e,t,l,n,a){l=l.render;var i=t.ref;if("ref"in n){var o={};for(var d in n)d!=="ref"&&(o[d]=n[d])}else o=n;return Fl(t),n=jc(e,t,l,o,i,a),d=Hc(),e!==null&&!Ge?(Uc(e,t,a),It(e,t,a)):(ce&&d&&gc(t),t.flags|=1,Ke(e,t,n,a),t.child)}function $f(e,t,l,n,a){if(e===null){var i=l.type;return typeof i=="function"&&!dc(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Wf(e,t,i,n,a)):(e=Si(l.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ss(e,a)){var o=i.memoizedProps;if(l=l.compare,l=l!==null?l:ra,l(o,n)&&e.ref===t.ref)return It(e,t,a)}return t.flags|=1,e=Jt(i,n),e.ref=t.ref,e.return=t,t.child=e}function Wf(e,t,l,n,a){if(e!==null){var i=e.memoizedProps;if(ra(i,n)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=n=i,ss(e,a))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,It(e,t,a)}return ts(e,t,l,n,a)}function Ff(e,t,l,n){var a=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(n=t.child=e.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~i}else n=0,t.child=null;return Pf(e,t,i,l,n)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,i!==null?i.cachePool:null),i!==null?Io(t,i):kc(),ef(t);else return n=t.lanes=536870912,Pf(e,t,i!==null?i.baseLanes|l:l,l,n)}else i!==null?(Ri(t,i.cachePool),Io(t,i),_l(),t.memoizedState=null):(e!==null&&Ri(t,null),kc(),_l());return Ke(e,t,a,l),t.child}function Ta(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Pf(e,t,l,n,a){var i=Rc();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Ri(t,null),kc(),ef(t),e!==null&&zn(e,t,n,!0),t.childLanes=a,null}function Li(e,t){return t=Yi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function If(e,t,l){return tn(t,e.child,null,l),e=Li(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function h0(e,t,l){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(n.mode==="hidden")return e=Li(t,n),t.lanes=536870912,Ta(null,e);if(wc(t),(e=_e)?(e=fd(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bl!==null?{id:Gt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},l=jo(e),l.return=t,t.child=l,Ve=t,_e=null)):e=null,e===null)throw xl(t);return t.lanes=536870912,null}return Li(t,n)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(wc(t),a)if(t.flags&256)t.flags&=-257,t=If(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ge||zn(e,t,l,!1),a=(l&e.childLanes)!==0,Ge||a){if(n=Re,n!==null&&(o=Lr(n,l),o!==0&&o!==i.retryLane))throw i.retryLane=o,Jl(e,o),ct(n,e,o),es;Pi(),t=If(e,t,l)}else e=i.treeContext,_e=Mt(o.nextSibling),Ve=t,ce=!0,vl=null,_t=!1,e!==null&&Bo(t,e),t=Li(t,n),t.flags|=4096;return t}return e=Jt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function ts(e,t,l,n,a){return Fl(t),l=jc(e,t,l,n,void 0,a),n=Hc(),e!==null&&!Ge?(Uc(e,t,a),It(e,t,a)):(ce&&n&&gc(t),t.flags|=1,Ke(e,t,l,a),t.child)}function eh(e,t,l,n,a,i){return Fl(t),t.updateQueue=null,l=lf(t,n,l,a),tf(e),n=Hc(),e!==null&&!Ge?(Uc(e,t,i),It(e,t,i)):(ce&&n&&gc(t),t.flags|=1,Ke(e,t,l,i),t.child)}function th(e,t,l,n,a){if(Fl(t),t.stateNode===null){var i=An,o=l.contextType;typeof o=="object"&&o!==null&&(i=Je(o)),i=new l(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},zc(t),o=l.contextType,i.context=typeof o=="object"&&o!==null?Je(o):An,i.state=t.memoizedState,o=l.getDerivedStateFromProps,typeof o=="function"&&(Fc(t,l,o,n),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Pc.enqueueReplaceState(i,i.state,null),va(t,n,i,a),ba(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,b=nn(l,d);i.props=b;var _=i.context,k=l.contextType;o=An,typeof k=="object"&&k!==null&&(o=Je(k));var j=l.getDerivedStateFromProps;k=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,k||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||_!==o)&&Lf(t,i,n,o),El=!1;var z=t.memoizedState;i.state=z,va(t,n,i,a),ba(),_=t.memoizedState,d||z!==_||El?(typeof j=="function"&&(Fc(t,l,j,n),_=t.memoizedState),(b=El||qf(t,l,b,n,z,_,o))?(k||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=_),i.props=n,i.state=_,i.context=o,n=b):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Mc(e,t),o=t.memoizedProps,k=nn(l,o),i.props=k,j=t.pendingProps,z=i.context,_=l.contextType,b=An,typeof _=="object"&&_!==null&&(b=Je(_)),d=l.getDerivedStateFromProps,(_=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==j||z!==b)&&Lf(t,i,n,b),El=!1,z=t.memoizedState,i.state=z,va(t,n,i,a),ba();var M=t.memoizedState;o!==j||z!==M||El||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof d=="function"&&(Fc(t,l,d,n),M=t.memoizedState),(k=El||qf(t,l,k,n,z,M,b)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(_||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,M,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,M,b)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),i.props=n,i.state=M,i.context=b,n=k):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Qi(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=tn(t,e.child,null,a),t.child=tn(t,null,l,a)):Ke(e,t,l,a),t.memoizedState=i.state,e=t.child):e=It(e,t,a),e}function lh(e,t,l,n){return $l(),t.flags|=256,Ke(e,t,l,n),t.child}var ls={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ns(e){return{baseLanes:e,cachePool:Xo()}}function as(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=gt),e}function nh(e,t,l){var n=t.pendingProps,a=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(a?Rl(t):_l(),(e=_e)?(e=fd(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bl!==null?{id:Gt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},l=jo(e),l.return=t,t.child=l,Ve=t,_e=null)):e=null,e===null)throw xl(t);return qs(e)?t.lanes=32:t.lanes=536870912,null}var d=n.children;return n=n.fallback,a?(_l(),a=t.mode,d=Yi({mode:"hidden",children:d},a),n=Kl(n,a,l,null),d.return=t,n.return=t,d.sibling=n,t.child=d,n=t.child,n.memoizedState=ns(l),n.childLanes=as(e,o,l),t.memoizedState=ls,Ta(null,n)):(Rl(t),is(t,d))}var b=e.memoizedState;if(b!==null&&(d=b.dehydrated,d!==null)){if(i)t.flags&256?(Rl(t),t.flags&=-257,t=us(e,t,l)):t.memoizedState!==null?(_l(),t.child=e.child,t.flags|=128,t=null):(_l(),d=n.fallback,a=t.mode,n=Yi({mode:"visible",children:n.children},a),d=Kl(d,a,l,null),d.flags|=2,n.return=t,d.return=t,n.sibling=d,t.child=n,tn(t,e.child,null,l),n=t.child,n.memoizedState=ns(l),n.childLanes=as(e,o,l),t.memoizedState=ls,t=Ta(null,n));else if(Rl(t),qs(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var _=o.dgst;o=_,n=Error(r(419)),n.stack="",n.digest=o,ha({value:n,source:null,stack:null}),t=us(e,t,l)}else if(Ge||zn(e,t,l,!1),o=(l&e.childLanes)!==0,Ge||o){if(o=Re,o!==null&&(n=Lr(o,l),n!==0&&n!==b.retryLane))throw b.retryLane=n,Jl(e,n),ct(o,e,n),es;Gs(d)||Pi(),t=us(e,t,l)}else Gs(d)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,_e=Mt(d.nextSibling),Ve=t,ce=!0,vl=null,_t=!1,e!==null&&Bo(t,e),t=is(t,n.children),t.flags|=4096);return t}return a?(_l(),d=n.fallback,a=t.mode,b=e.child,_=b.sibling,n=Jt(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,_!==null?d=Jt(_,d):(d=Kl(d,a,l,null),d.flags|=2),d.return=t,n.return=t,n.sibling=d,t.child=n,Ta(null,n),n=t.child,d=e.child.memoizedState,d===null?d=ns(l):(a=d.cachePool,a!==null?(b=Ue._currentValue,a=a.parent!==b?{parent:b,pool:b}:a):a=Xo(),d={baseLanes:d.baseLanes|l,cachePool:a}),n.memoizedState=d,n.childLanes=as(e,o,l),t.memoizedState=ls,Ta(e.child,n)):(Rl(t),l=e.child,e=l.sibling,l=Jt(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=l,t.memoizedState=null,l)}function is(e,t){return t=Yi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yi(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function us(e,t,l){return tn(t,e.child,null,l),e=is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ah(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Sc(e.return,t,l)}function cs(e,t,l,n,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=l,o.tailMode=a,o.treeForkCount=i)}function ih(e,t,l){var n=t.pendingProps,a=n.revealOrder,i=n.tail;n=n.children;var o=De.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,q(De,o),Ke(e,t,n,l),n=ce?fa:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ah(e,l,t);else if(e.tag===19)ah(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(l=t.child,a=null;l!==null;)e=l.alternate,e!==null&&ki(e)===null&&(a=l),l=l.sibling;l=a,l===null?(a=t.child,t.child=null):(a=l.sibling,l.sibling=null),cs(t,!1,a,l,i,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ki(e)===null){t.child=a;break}e=a.sibling,a.sibling=l,l=a,a=e}cs(t,!0,l,null,i,n);break;case"together":cs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function It(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Cl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(zn(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Jt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Jt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function ss(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function d0(e,t,l){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),Sl(t,Ue,e.memoizedState.cache),$l();break;case 27:case 5:Wn(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:Sl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wc(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Rl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?nh(e,t,l):(Rl(t),e=It(e,t,l),e!==null?e.sibling:null);Rl(t);break;case 19:var a=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(zn(e,t,l,!1),n=(l&t.childLanes)!==0),a){if(n)return ih(e,t,l);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(De,De.current),n)break;return null;case 22:return t.lanes=0,Ff(e,t,l,t.pendingProps);case 24:Sl(t,Ue,e.memoizedState.cache)}return It(e,t,l)}function uh(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!ss(e,l)&&(t.flags&128)===0)return Ge=!1,d0(e,t,l);Ge=(e.flags&131072)!==0}else Ge=!1,ce&&(t.flags&1048576)!==0&&Uo(t,fa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Il(t.elementType),t.type=e,typeof e=="function")dc(e)?(n=nn(e,n),t.tag=1,t=th(null,t,e,n,l)):(t.tag=0,t=ts(null,t,e,n,l));else{if(e!=null){var a=e.$$typeof;if(a===he){t.tag=11,t=Kf(null,t,e,n,l);break e}else if(a===W){t.tag=14,t=$f(null,t,e,n,l);break e}}throw t=Yt(e)||e,Error(r(306,t,""))}}return t;case 0:return ts(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,a=nn(n,t.pendingProps),th(e,t,n,a,l);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(r(387));n=t.pendingProps;var i=t.memoizedState;a=i.element,Mc(e,t),va(t,n,null,l);var o=t.memoizedState;if(n=o.cache,Sl(t,Ue,n),n!==i.cache&&Ec(t,[Ue],l,!0),ba(),n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=lh(e,t,n,l);break e}else if(n!==a){a=At(Error(r(424)),t),ha(a),t=lh(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Mt(e.firstChild),Ve=t,ce=!0,vl=null,_t=!0,l=Wo(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if($l(),n===a){t=It(e,t,l);break e}Ke(e,t,n,l)}t=t.child}return t;case 26:return Qi(e,t),e===null?(l=yd(t.type,null,t.pendingProps,null))?t.memoizedState=l:ce||(l=t.type,e=t.pendingProps,n=iu(le.current).createElement(l),n[Ze]=t,n[tt]=e,$e(n,l,e),Qe(n),t.stateNode=n):t.memoizedState=yd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wn(t),e===null&&ce&&(n=t.stateNode=md(t.type,t.pendingProps,le.current),Ve=t,_t=!0,a=_e,Dl(t.type)?(Ls=a,_e=Mt(n.firstChild)):_e=a),Ke(e,t,t.pendingProps.children,l),Qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((a=n=_e)&&(n=Y0(n,t.type,t.pendingProps,_t),n!==null?(t.stateNode=n,Ve=t,_e=Mt(n.firstChild),_t=!1,a=!0):a=!1),a||xl(t)),Wn(t),a=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,Hs(a,i)?n=null:o!==null&&Hs(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=jc(e,t,a0,null,null,l),Ga._currentValue=a),Qi(e,t),Ke(e,t,n,l),t.child;case 6:return e===null&&ce&&((e=l=_e)&&(l=X0(l,t.pendingProps,_t),l!==null?(t.stateNode=l,Ve=t,_e=null,e=!0):e=!1),e||xl(t)),null;case 13:return nh(e,t,l);case 4:return Fe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=tn(t,null,n,l):Ke(e,t,n,l),t.child;case 11:return Kf(e,t,t.type,t.pendingProps,l);case 7:return Ke(e,t,t.pendingProps,l),t.child;case 8:return Ke(e,t,t.pendingProps.children,l),t.child;case 12:return Ke(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,Sl(t,t.type,n.value),Ke(e,t,n.children,l),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Fl(t),a=Je(a),n=n(a),t.flags|=1,Ke(e,t,n,l),t.child;case 14:return $f(e,t,t.type,t.pendingProps,l);case 15:return Wf(e,t,t.type,t.pendingProps,l);case 19:return ih(e,t,l);case 31:return h0(e,t,l);case 22:return Ff(e,t,l,t.pendingProps);case 24:return Fl(t),n=Je(Ue),e===null?(a=Rc(),a===null&&(a=Re,i=Ac(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=l),a=i),t.memoizedState={parent:n,cache:a},zc(t),Sl(t,Ue,a)):((e.lanes&l)!==0&&(Mc(e,t),va(t,null,null,l),ba()),a=e.memoizedState,i=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Sl(t,Ue,n)):(n=i.cache,Sl(t,Ue,n),n!==a.cache&&Ec(t,[Ue],l,!0))),Ke(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function el(e){e.flags|=4}function rs(e,t,l,n,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(wh())e.flags|=8192;else throw en=zi,_c}else e.flags&=-16777217}function ch(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ed(t))if(wh())e.flags|=8192;else throw en=zi,_c}function Xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Br():536870912,e.lanes|=t,Gn|=t)}function Ra(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function m0(e,t,l){var n=t.pendingProps;switch(yc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Ue),we(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(_n(t)?el(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vc())),ze(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(el(t),i!==null?(ze(t),ch(t,i)):(ze(t),rs(t,a,null,n,l))):i?i!==e.memoizedState?(el(t),ze(t),ch(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&el(t),ze(t),rs(t,a,e,n,l)),null;case 27:if(ti(t),l=le.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&el(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return ze(t),null}e=Z.current,_n(t)?Go(t):(e=md(a,n,l),t.stateNode=e,el(t))}return ze(t),null;case 5:if(ti(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&el(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return ze(t),null}if(i=Z.current,_n(t))Go(t);else{var o=iu(le.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?o.createElement(a,{is:n.is}):o.createElement(a)}}i[Ze]=t,i[tt]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch($e(i,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&el(t)}}return ze(t),rs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&el(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(r(166));if(e=le.current,_n(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,a=Ve,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||nd(e.nodeValue,l)),e||xl(t,!0)}else e=iu(e).createTextNode(n),e[Ze]=t,t.stateNode=e}return ze(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(n=_n(t),l!==null){if(e===null){if(!n)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ze]=t}else $l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else l=vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return ze(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=_n(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(r(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(r(317));a[Ze]=t}else $l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),a=!1}else a=vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=n!==null,e=e!==null&&e.memoizedState!==null,l&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Xi(t,t.updateQueue),ze(t),null);case 4:return we(),e===null&&ks(t.stateNode.containerInfo),ze(t),null;case 10:return Wt(t.type),ze(t),null;case 19:if(H(De),n=t.memoizedState,n===null)return ze(t),null;if(a=(t.flags&128)!==0,i=n.rendering,i===null)if(a)Ra(n,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ki(e),i!==null){for(t.flags|=128,Ra(n,!1),e=i.updateQueue,t.updateQueue=e,Xi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Do(l,e),l=l.sibling;return q(De,De.current&1|2),ce&&Kt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&st()>$i&&(t.flags|=128,a=!0,Ra(n,!1),t.lanes=4194304)}else{if(!a)if(e=ki(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Xi(t,e),Ra(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ce)return ze(t),null}else 2*st()-n.renderingStartTime>$i&&l!==536870912&&(t.flags|=128,a=!0,Ra(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=st(),e.sibling=null,l=De.current,q(De,a?l&1|2:l&1),ce&&Kt(t,n.treeForkCount),e):(ze(t),null);case 22:case 23:return mt(t),Oc(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&Xi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&H(Pl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Wt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function p0(e,t){switch(yc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ue),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ti(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(r(340));$l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));$l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(De),null;case 4:return we(),null;case 10:return Wt(t.type),null;case 22:case 23:return mt(t),Oc(),e!==null&&H(Pl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ue),null;case 25:return null;default:return null}}function sh(e,t){switch(yc(t),t.tag){case 3:Wt(Ue),we();break;case 26:case 27:case 5:ti(t);break;case 4:we();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:H(De);break;case 10:Wt(t.type);break;case 22:case 23:mt(t),Oc(),e!==null&&H(Pl);break;case 24:Wt(Ue)}}function _a(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&e)===e){n=void 0;var i=l.create,o=l.inst;n=i(),o.destroy=n}l=l.next}while(l!==a)}}catch(d){ge(t,t.return,d)}}function zl(e,t,l){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){var o=n.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,a=t;var b=l,_=d;try{_()}catch(k){ge(a,b,k)}}}n=n.next}while(n!==i)}}catch(k){ge(t,t.return,k)}}function rh(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Po(t,l)}catch(n){ge(e,e.return,n)}}}function oh(e,t,l){l.props=nn(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){ge(e,t,n)}}function za(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(a){ge(e,t,a)}}function Lt(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){ge(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){ge(e,t,a)}else l.current=null}function fh(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){ge(e,e.return,a)}}function os(e,t,l){try{var n=e.stateNode;U0(n,e.type,l,t),n[tt]=t}catch(a){ge(e,e.return,a)}}function hh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dl(e.type)||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hs(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Zt));else if(n!==4&&(n===27&&Dl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(hs(e,t,l),e=e.sibling;e!==null;)hs(e,t,l),e=e.sibling}function Zi(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&Dl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Zi(e,t,l),e=e.sibling;e!==null;)Zi(e,t,l),e=e.sibling}function dh(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$e(t,n,l),t[Ze]=e,t[tt]=l}catch(i){ge(e,e.return,i)}}var tl=!1,qe=!1,ds=!1,mh=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function g0(e,t){if(e=e.containerInfo,Ds=hu,e=Ro(e),uc(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var o=0,d=-1,b=-1,_=0,k=0,j=e,z=null;t:for(;;){for(var M;j!==l||a!==0&&j.nodeType!==3||(d=o+a),j!==i||n!==0&&j.nodeType!==3||(b=o+n),j.nodeType===3&&(o+=j.nodeValue.length),(M=j.firstChild)!==null;)z=j,j=M;for(;;){if(j===e)break t;if(z===l&&++_===a&&(d=o),z===i&&++k===n&&(b=o),(M=j.nextSibling)!==null)break;j=z,z=j.parentNode}j=M}l=d===-1||b===-1?null:{start:d,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(js={focusedElem:e,selectionRange:l},hu=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)a=e[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,a=i.memoizedProps,i=i.memoizedState,n=l.stateNode;try{var Y=nn(l.type,a);e=n.getSnapshotBeforeUpdate(Y,i),n.__reactInternalSnapshotBeforeUpdate=e}catch($){ge(l,l.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Bs(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function ph(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:nl(e,l),n&4&&_a(5,l);break;case 1:if(nl(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(l,l.return,o)}else{var a=nn(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(l,l.return,o)}}n&64&&rh(l),n&512&&za(l,l.return);break;case 3:if(nl(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Po(e,t)}catch(o){ge(l,l.return,o)}}break;case 27:t===null&&n&4&&dh(l);case 26:case 5:nl(e,l),t===null&&n&4&&fh(l),n&512&&za(l,l.return);break;case 12:nl(e,l);break;case 31:nl(e,l),n&4&&bh(e,l);break;case 13:nl(e,l),n&4&&vh(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=R0.bind(null,l),Z0(e,l))));break;case 22:if(n=l.memoizedState!==null||tl,!n){t=t!==null&&t.memoizedState!==null||qe,a=tl;var i=qe;tl=n,(qe=t)&&!i?al(e,l,(l.subtreeFlags&8772)!==0):nl(e,l),tl=a,qe=i}break;case 30:break;default:nl(e,l)}}function gh(e){var t=e.alternate;t!==null&&(e.alternate=null,gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,nt=!1;function ll(e,t,l){for(l=l.child;l!==null;)yh(e,t,l),l=l.sibling}function yh(e,t,l){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Fn,l)}catch{}switch(l.tag){case 26:qe||Lt(l,t),ll(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:qe||Lt(l,t);var n=Me,a=nt;Dl(l.type)&&(Me=l.stateNode,nt=!1),ll(e,t,l),Ha(l.stateNode),Me=n,nt=a;break;case 5:qe||Lt(l,t);case 6:if(n=Me,a=nt,Me=null,ll(e,t,l),Me=n,nt=a,Me!==null)if(nt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(l.stateNode)}catch(i){ge(l,t,i)}else try{Me.removeChild(l.stateNode)}catch(i){ge(l,t,i)}break;case 18:Me!==null&&(nt?(e=Me,rd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Jn(e)):rd(Me,l.stateNode));break;case 4:n=Me,a=nt,Me=l.stateNode.containerInfo,nt=!0,ll(e,t,l),Me=n,nt=a;break;case 0:case 11:case 14:case 15:zl(2,l,t),qe||zl(4,l,t),ll(e,t,l);break;case 1:qe||(Lt(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&oh(l,t,n)),ll(e,t,l);break;case 21:ll(e,t,l);break;case 22:qe=(n=qe)||l.memoizedState!==null,ll(e,t,l),qe=n;break;default:ll(e,t,l)}}function bh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jn(e)}catch(l){ge(t,t.return,l)}}}function vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jn(e)}catch(l){ge(t,t.return,l)}}function y0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mh),t;default:throw Error(r(435,e.tag))}}function Vi(e,t){var l=y0(e);t.forEach(function(n){if(!l.has(n)){l.add(n);var a=_0.bind(null,e,n);n.then(a,a)}})}function at(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],i=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Dl(d.type)){Me=d.stateNode,nt=!1;break e}break;case 5:Me=d.stateNode,nt=!1;break e;case 3:case 4:Me=d.stateNode.containerInfo,nt=!0;break e}d=d.return}if(Me===null)throw Error(r(160));yh(i,o,a),Me=null,nt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)xh(t,e),t=t.sibling}var Dt=null;function xh(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),it(e),n&4&&(zl(3,e,e.return),_a(3,e),zl(5,e,e.return));break;case 1:at(t,e),it(e),n&512&&(qe||l===null||Lt(l,l.return)),n&64&&tl&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Dt;if(at(t,e),it(e),n&512&&(qe||l===null||Lt(l,l.return)),n&4){var i=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":i=a.getElementsByTagName("title")[0],(!i||i[ea]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(n),a.head.insertBefore(i,a.querySelector("head > title"))),$e(i,n,l),i[Ze]=e,Qe(i),n=i;break e;case"link":var o=xd("link","href",a).get(n+(l.href||""));if(o){for(var d=0;d<o.length;d++)if(i=o[d],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){o.splice(d,1);break t}}i=a.createElement(n),$e(i,n,l),a.head.appendChild(i);break;case"meta":if(o=xd("meta","content",a).get(n+(l.content||""))){for(d=0;d<o.length;d++)if(i=o[d],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){o.splice(d,1);break t}}i=a.createElement(n),$e(i,n,l),a.head.appendChild(i);break;default:throw Error(r(468,n))}i[Ze]=e,Qe(i),n=i}e.stateNode=n}else Sd(a,e.type,e.stateNode);else e.stateNode=vd(a,n,e.memoizedProps);else i!==n?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,n===null?Sd(a,e.type,e.stateNode):vd(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&os(e,e.memoizedProps,l.memoizedProps)}break;case 27:at(t,e),it(e),n&512&&(qe||l===null||Lt(l,l.return)),l!==null&&n&4&&os(e,e.memoizedProps,l.memoizedProps);break;case 5:if(at(t,e),it(e),n&512&&(qe||l===null||Lt(l,l.return)),e.flags&32){a=e.stateNode;try{gn(a,"")}catch(Y){ge(e,e.return,Y)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,os(e,a,l!==null?l.memoizedProps:a)),n&1024&&(ds=!0);break;case 6:if(at(t,e),it(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(Y){ge(e,e.return,Y)}}break;case 3:if(su=null,a=Dt,Dt=uu(t.containerInfo),at(t,e),Dt=a,it(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(Y){ge(e,e.return,Y)}ds&&(ds=!1,Sh(e));break;case 4:n=Dt,Dt=uu(e.stateNode.containerInfo),at(t,e),it(e),Dt=n;break;case 12:at(t,e),it(e);break;case 31:at(t,e),it(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Vi(e,n)));break;case 13:at(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ki=st()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Vi(e,n)));break;case 22:a=e.memoizedState!==null;var b=l!==null&&l.memoizedState!==null,_=tl,k=qe;if(tl=_||a,qe=k||b,at(t,e),qe=k,tl=_,it(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(l===null||b||tl||qe||an(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){b=l=t;try{if(i=b.stateNode,a)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=b.stateNode;var j=b.memoizedProps.style,z=j!=null&&j.hasOwnProperty("display")?j.display:null;d.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(Y){ge(b,b.return,Y)}}}else if(t.tag===6){if(l===null){b=t;try{b.stateNode.nodeValue=a?"":b.memoizedProps}catch(Y){ge(b,b.return,Y)}}}else if(t.tag===18){if(l===null){b=t;try{var M=b.stateNode;a?od(M,!0):od(b.stateNode,!1)}catch(Y){ge(b,b.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,Vi(e,l))));break;case 19:at(t,e),it(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Vi(e,n)));break;case 30:break;case 21:break;default:at(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(hh(n)){l=n;break}n=n.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var a=l.stateNode,i=fs(e);Zi(e,i,a);break;case 5:var o=l.stateNode;l.flags&32&&(gn(o,""),l.flags&=-33);var d=fs(e);Zi(e,d,o);break;case 3:case 4:var b=l.stateNode.containerInfo,_=fs(e);hs(e,_,b);break;default:throw Error(r(161))}}catch(k){ge(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ph(e,t.alternate,t),t=t.sibling}function an(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zl(4,t,t.return),an(t);break;case 1:Lt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&oh(t,t.return,l),an(t);break;case 27:Ha(t.stateNode);case 26:case 5:Lt(t,t.return),an(t);break;case 22:t.memoizedState===null&&an(t);break;case 30:an(t);break;default:an(t)}e=e.sibling}}function al(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:al(a,i,l),_a(4,i);break;case 1:if(al(a,i,l),n=i,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(_){ge(n,n.return,_)}if(n=i,a=n.updateQueue,a!==null){var d=n.stateNode;try{var b=a.shared.hiddenCallbacks;if(b!==null)for(a.shared.hiddenCallbacks=null,a=0;a<b.length;a++)Fo(b[a],d)}catch(_){ge(n,n.return,_)}}l&&o&64&&rh(i),za(i,i.return);break;case 27:dh(i);case 26:case 5:al(a,i,l),l&&n===null&&o&4&&fh(i),za(i,i.return);break;case 12:al(a,i,l);break;case 31:al(a,i,l),l&&o&4&&bh(a,i);break;case 13:al(a,i,l),l&&o&4&&vh(a,i);break;case 22:i.memoizedState===null&&al(a,i,l),za(i,i.return);break;case 30:break;default:al(a,i,l)}t=t.sibling}}function ms(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&da(l))}function ps(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function jt(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Eh(e,t,l,n),t=t.sibling}function Eh(e,t,l,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,l,n),a&2048&&_a(9,t);break;case 1:jt(e,t,l,n);break;case 3:jt(e,t,l,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(a&2048){jt(e,t,l,n),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,d=i.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){ge(t,t.return,b)}}else jt(e,t,l,n);break;case 31:jt(e,t,l,n);break;case 13:jt(e,t,l,n);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?jt(e,t,l,n):Ma(e,t):i._visibility&2?jt(e,t,l,n):(i._visibility|=2,Hn(e,t,l,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&ms(o,t);break;case 24:jt(e,t,l,n),a&2048&&ps(t.alternate,t);break;default:jt(e,t,l,n)}}function Hn(e,t,l,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,d=l,b=n,_=o.flags;switch(o.tag){case 0:case 11:case 15:Hn(i,o,d,b,a),_a(8,o);break;case 23:break;case 22:var k=o.stateNode;o.memoizedState!==null?k._visibility&2?Hn(i,o,d,b,a):Ma(i,o):(k._visibility|=2,Hn(i,o,d,b,a)),a&&_&2048&&ms(o.alternate,o);break;case 24:Hn(i,o,d,b,a),a&&_&2048&&ps(o.alternate,o);break;default:Hn(i,o,d,b,a)}t=t.sibling}}function Ma(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,a=n.flags;switch(n.tag){case 22:Ma(l,n),a&2048&&ms(n.alternate,n);break;case 24:Ma(l,n),a&2048&&ps(n.alternate,n);break;default:Ma(l,n)}t=t.sibling}}var Ca=8192;function Un(e,t,l){if(e.subtreeFlags&Ca)for(e=e.child;e!==null;)Ah(e,t,l),e=e.sibling}function Ah(e,t,l){switch(e.tag){case 26:Un(e,t,l),e.flags&Ca&&e.memoizedState!==null&&ng(l,Dt,e.memoizedState,e.memoizedProps);break;case 5:Un(e,t,l);break;case 3:case 4:var n=Dt;Dt=uu(e.stateNode.containerInfo),Un(e,t,l),Dt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ca,Ca=16777216,Un(e,t,l),Ca=n):Un(e,t,l));break;default:Un(e,t,l)}}function Th(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Na(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Ye=n,_h(n,e)}Th(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rh(e),e=e.sibling}function Rh(e){switch(e.tag){case 0:case 11:case 15:Na(e),e.flags&2048&&zl(9,e,e.return);break;case 3:Na(e);break;case 12:Na(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Na(e);break;default:Na(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];Ye=n,_h(n,e)}Th(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zl(8,t,t.return),Ji(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function _h(e,t){for(;Ye!==null;){var l=Ye;switch(l.tag){case 0:case 11:case 15:zl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:da(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,Ye=n;else e:for(l=e;Ye!==null;){n=Ye;var a=n.sibling,i=n.return;if(gh(n),n===l){Ye=null;break e}if(a!==null){a.return=i,Ye=a;break e}Ye=i}}}var b0={getCacheForType:function(e){var t=Je(Ue),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Je(Ue).controller.signal}},v0=typeof WeakMap=="function"?WeakMap:Map,fe=0,Re=null,ne=null,ie=0,pe=0,pt=null,Ml=!1,Bn=!1,gs=!1,il=0,ke=0,Cl=0,un=0,ys=0,gt=0,Gn=0,ka=null,ut=null,bs=!1,Ki=0,zh=0,$i=1/0,Wi=null,Nl=null,Le=0,kl=null,qn=null,ul=0,vs=0,xs=null,Mh=null,Oa=0,Ss=null;function yt(){return(fe&2)!==0&&ie!==0?ie&-ie:w.T!==null?zs():Qr()}function Ch(){if(gt===0)if((ie&536870912)===0||ce){var e=ai;ai<<=1,(ai&3932160)===0&&(ai=262144),gt=e}else gt=536870912;return e=dt.current,e!==null&&(e.flags|=32),gt}function ct(e,t,l){(e===Re&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ln(e,0),Ol(e,ie,gt,!1)),In(e,l),((fe&2)===0||e!==Re)&&(e===Re&&((fe&2)===0&&(un|=l),ke===4&&Ol(e,ie,gt,!1)),Qt(e))}function Nh(e,t,l){if((fe&6)!==0)throw Error(r(327));var n=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Pn(e,t),a=n?E0(e,t):As(e,t,!0),i=n;do{if(a===0){Bn&&!n&&Ol(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!x0(l)){a=As(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;a=ka;var b=d.current.memoizedState.isDehydrated;if(b&&(Ln(d,o).flags|=256),o=As(d,o,!1),o!==2){if(gs&&!b){d.errorRecoveryDisabledLanes|=i,un|=i,a=4;break e}i=ut,ut=a,i!==null&&(ut===null?ut=i:ut.push.apply(ut,i))}a=o}if(i=!1,a!==2)continue}}if(a===1){Ln(e,0),Ol(e,t,0,!0);break}e:{switch(n=e,i=a,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Ol(n,t,gt,!Ml);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(a=Ki+300-st(),10<a)){if(Ol(n,t,gt,!Ml),ui(n,0,!0)!==0)break e;ul=t,n.timeoutHandle=cd(kh.bind(null,n,l,ut,Wi,bs,t,gt,un,Gn,Ml,i,"Throttled",-0,0),a);break e}kh(n,l,ut,Wi,bs,t,gt,un,Gn,Ml,i,null,-0,0)}}break}while(!0);Qt(e)}function kh(e,t,l,n,a,i,o,d,b,_,k,j,z,M){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Ah(t,i,j);var Y=(i&62914560)===i?Ki-st():(i&4194048)===i?zh-st():0;if(Y=ag(j,Y),Y!==null){ul=i,e.cancelPendingCommit=Y(Gh.bind(null,e,t,i,l,n,a,o,d,b,k,j,null,z,M)),Ol(e,i,o,!_);return}}Gh(e,t,i,l,n,a,o,d,b)}function x0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],i=a.getSnapshot;a=a.value;try{if(!ft(i(),a))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ol(e,t,l,n){t&=~ys,t&=~un,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var i=31-ot(a),o=1<<i;n[i]=-1,a&=~o}l!==0&&Gr(e,l,t)}function Fi(){return(fe&6)===0?(wa(0),!1):!0}function Es(){if(ne!==null){if(pe===0)var e=ne.return;else e=ne,$t=Wl=null,Bc(e),kn=null,pa=0,e=ne;for(;e!==null;)sh(e.alternate,e),e=e.return;ne=null}}function Ln(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,q0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ul=0,Es(),Re=e,ne=l=Jt(e.current,null),ie=t,pe=0,pt=null,Ml=!1,Bn=Pn(e,t),gs=!1,Gn=gt=ys=un=Cl=ke=0,ut=ka=null,bs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-ot(n),i=1<<a;t|=e[a],n&=~i}return il=t,bi(),l}function Oh(e,t){ee=null,w.H=Aa,t===Nn||t===_i?(t=Jo(),pe=3):t===_c?(t=Jo(),pe=4):pe=t===es?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ne===null&&(ke=1,qi(e,At(t,e.current)))}function wh(){var e=dt.current;return e===null?!0:(ie&4194048)===ie?zt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===zt:!1}function Dh(){var e=w.H;return w.H=Aa,e===null?Aa:e}function jh(){var e=w.A;return w.A=b0,e}function Pi(){ke=4,Ml||(ie&4194048)!==ie&&dt.current!==null||(Bn=!0),(Cl&134217727)===0&&(un&134217727)===0||Re===null||Ol(Re,ie,gt,!1)}function As(e,t,l){var n=fe;fe|=2;var a=Dh(),i=jh();(Re!==e||ie!==t)&&(Wi=null,Ln(e,t)),t=!1;var o=ke;e:do try{if(pe!==0&&ne!==null){var d=ne,b=pt;switch(pe){case 8:Es(),o=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var _=pe;if(pe=0,pt=null,Qn(e,d,b,_),l&&Bn){o=0;break e}break;default:_=pe,pe=0,pt=null,Qn(e,d,b,_)}}S0(),o=ke;break}catch(k){Oh(e,k)}while(!0);return t&&e.shellSuspendCounter++,$t=Wl=null,fe=n,w.H=a,w.A=i,ne===null&&(Re=null,ie=0,bi()),o}function S0(){for(;ne!==null;)Hh(ne)}function E0(e,t){var l=fe;fe|=2;var n=Dh(),a=jh();Re!==e||ie!==t?(Wi=null,$i=st()+500,Ln(e,t)):Bn=Pn(e,t);e:do try{if(pe!==0&&ne!==null){t=ne;var i=pt;t:switch(pe){case 1:pe=0,pt=null,Qn(e,t,i,1);break;case 2:case 9:if(Zo(i)){pe=0,pt=null,Uh(t);break}t=function(){pe!==2&&pe!==9||Re!==e||(pe=7),Qt(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:Zo(i)?(pe=0,pt=null,Uh(t)):(pe=0,pt=null,Qn(e,t,i,7));break;case 5:var o=null;switch(ne.tag){case 26:o=ne.memoizedState;case 5:case 27:var d=ne;if(o?Ed(o):d.stateNode.complete){pe=0,pt=null;var b=d.sibling;if(b!==null)ne=b;else{var _=d.return;_!==null?(ne=_,Ii(_)):ne=null}break t}}pe=0,pt=null,Qn(e,t,i,5);break;case 6:pe=0,pt=null,Qn(e,t,i,6);break;case 8:Es(),ke=6;break e;default:throw Error(r(462))}}A0();break}catch(k){Oh(e,k)}while(!0);return $t=Wl=null,w.H=n,w.A=a,fe=l,ne!==null?0:(Re=null,ie=0,bi(),ke)}function A0(){for(;ne!==null&&!Vm();)Hh(ne)}function Hh(e){var t=uh(e.alternate,e,il);e.memoizedProps=e.pendingProps,t===null?Ii(e):ne=t}function Uh(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=eh(l,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=eh(l,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:Bc(t);default:sh(l,t),t=ne=Do(t,il),t=uh(l,t,il)}e.memoizedProps=e.pendingProps,t===null?Ii(e):ne=t}function Qn(e,t,l,n){$t=Wl=null,Bc(t),kn=null,pa=0;var a=t.return;try{if(f0(e,a,t,l,ie)){ke=1,qi(e,At(l,e.current)),ne=null;return}}catch(i){if(a!==null)throw ne=a,i;ke=1,qi(e,At(l,e.current)),ne=null;return}t.flags&32768?(ce||n===1?e=!0:Bn||(ie&536870912)!==0?e=!1:(Ml=e=!0,(n===2||n===9||n===3||n===6)&&(n=dt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Bh(t,e)):Ii(t)}function Ii(e){var t=e;do{if((t.flags&32768)!==0){Bh(t,Ml);return}e=t.return;var l=m0(t.alternate,t,il);if(l!==null){ne=l;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ke===0&&(ke=5)}function Bh(e,t){do{var l=p0(e.alternate,e);if(l!==null){l.flags&=32767,ne=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=l}while(e!==null);ke=6,ne=null}function Gh(e,t,l,n,a,i,o,d,b){e.cancelPendingCommit=null;do eu();while(Le!==0);if((fe&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=fc,lp(e,l,i,o,d,b),e===Re&&(ne=Re=null,ie=0),qn=t,kl=e,ul=l,vs=i,xs=a,Mh=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,z0(li,function(){return Xh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=w.T,w.T=null,a=G.p,G.p=2,o=fe,fe|=4;try{g0(e,t,l)}finally{fe=o,G.p=a,w.T=n}}Le=1,qh(),Lh(),Qh()}}function qh(){if(Le===1){Le=0;var e=kl,t=qn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null;var n=G.p;G.p=2;var a=fe;fe|=4;try{xh(t,e);var i=js,o=Ro(e.containerInfo),d=i.focusedElem,b=i.selectionRange;if(o!==d&&d&&d.ownerDocument&&To(d.ownerDocument.documentElement,d)){if(b!==null&&uc(d)){var _=b.start,k=b.end;if(k===void 0&&(k=_),"selectionStart"in d)d.selectionStart=_,d.selectionEnd=Math.min(k,d.value.length);else{var j=d.ownerDocument||document,z=j&&j.defaultView||window;if(z.getSelection){var M=z.getSelection(),Y=d.textContent.length,$=Math.min(b.start,Y),Ee=b.end===void 0?$:Math.min(b.end,Y);!M.extend&&$>Ee&&(o=Ee,Ee=$,$=o);var T=Ao(d,$),x=Ao(d,Ee);if(T&&x&&(M.rangeCount!==1||M.anchorNode!==T.node||M.anchorOffset!==T.offset||M.focusNode!==x.node||M.focusOffset!==x.offset)){var R=j.createRange();R.setStart(T.node,T.offset),M.removeAllRanges(),$>Ee?(M.addRange(R),M.extend(x.node,x.offset)):(R.setEnd(x.node,x.offset),M.addRange(R))}}}}for(j=[],M=d;M=M.parentNode;)M.nodeType===1&&j.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<j.length;d++){var D=j[d];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}hu=!!Ds,js=Ds=null}finally{fe=a,G.p=n,w.T=l}}e.current=t,Le=2}}function Lh(){if(Le===2){Le=0;var e=kl,t=qn,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=w.T,w.T=null;var n=G.p;G.p=2;var a=fe;fe|=4;try{ph(e,t.alternate,t)}finally{fe=a,G.p=n,w.T=l}}Le=3}}function Qh(){if(Le===4||Le===3){Le=0,Jm();var e=kl,t=qn,l=ul,n=Mh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,qn=kl=null,Yh(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Nl=null),Lu(l),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Fn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=w.T,a=G.p,G.p=2,w.T=null;try{for(var i=e.onRecoverableError,o=0;o<n.length;o++){var d=n[o];i(d.value,{componentStack:d.stack})}}finally{w.T=t,G.p=a}}(ul&3)!==0&&eu(),Qt(e),a=e.pendingLanes,(l&261930)!==0&&(a&42)!==0?e===Ss?Oa++:(Oa=0,Ss=e):Oa=0,wa(0)}}function Yh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function eu(){return qh(),Lh(),Qh(),Xh()}function Xh(){if(Le!==5)return!1;var e=kl,t=vs;vs=0;var l=Lu(ul),n=w.T,a=G.p;try{G.p=32>l?32:l,w.T=null,l=xs,xs=null;var i=kl,o=ul;if(Le=0,qn=kl=null,ul=0,(fe&6)!==0)throw Error(r(331));var d=fe;if(fe|=4,Rh(i.current),Eh(i,i.current,o,l),fe=d,wa(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Fn,i)}catch{}return!0}finally{G.p=a,w.T=n,Yh(e,t)}}function Zh(e,t,l){t=At(l,t),t=Ic(e.stateNode,t,2),e=Tl(e,t,2),e!==null&&(In(e,2),Qt(e))}function ge(e,t,l){if(e.tag===3)Zh(e,e,l);else for(;t!==null;){if(t.tag===3){Zh(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Nl===null||!Nl.has(n))){e=At(l,e),l=Vf(2),n=Tl(t,l,2),n!==null&&(Jf(l,n,t,e),In(n,2),Qt(n));break}}t=t.return}}function Ts(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new v0;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(l)||(gs=!0,a.add(l),e=T0.bind(null,e,t,l),t.then(e,e))}function T0(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Re===e&&(ie&l)===l&&(ke===4||ke===3&&(ie&62914560)===ie&&300>st()-Ki?(fe&2)===0&&Ln(e,0):ys|=l,Gn===ie&&(Gn=0)),Qt(e)}function Vh(e,t){t===0&&(t=Br()),e=Jl(e,t),e!==null&&(In(e,t),Qt(e))}function R0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Vh(e,l)}function _0(e,t){var l=0;switch(e.tag){case 31:case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(t),Vh(e,l)}function z0(e,t){return Uu(e,t)}var tu=null,Yn=null,Rs=!1,lu=!1,_s=!1,wl=0;function Qt(e){e!==Yn&&e.next===null&&(Yn===null?tu=Yn=e:Yn=Yn.next=e),lu=!0,Rs||(Rs=!0,C0())}function wa(e,t){if(!_s&&lu){_s=!0;do for(var l=!1,n=tu;n!==null;){if(e!==0){var a=n.pendingLanes;if(a===0)var i=0;else{var o=n.suspendedLanes,d=n.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=a&~(o&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Wh(n,i))}else i=ie,i=ui(n,n===Re?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Pn(n,i)||(l=!0,Wh(n,i));n=n.next}while(l);_s=!1}}function M0(){Jh()}function Jh(){lu=Rs=!1;var e=0;wl!==0&&G0()&&(e=wl);for(var t=st(),l=null,n=tu;n!==null;){var a=n.next,i=Kh(n,t);i===0?(n.next=null,l===null?tu=a:l.next=a,a===null&&(Yn=l)):(l=n,(e!==0||(i&3)!==0)&&(lu=!0)),n=a}Le!==0&&Le!==5||wa(e),wl!==0&&(wl=0)}function Kh(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ot(i),d=1<<o,b=a[o];b===-1?((d&l)===0||(d&n)!==0)&&(a[o]=tp(d,t)):b<=t&&(e.expiredLanes|=d),i&=~d}if(t=Re,l=ie,l=ui(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Pn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Bu(n),Lu(l)){case 2:case 8:l=Hr;break;case 32:l=li;break;case 268435456:l=Ur;break;default:l=li}return n=$h.bind(null,e),l=Uu(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Bu(n),e.callbackPriority=2,e.callbackNode=null,2}function $h(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(eu()&&e.callbackNode!==l)return null;var n=ie;return n=ui(e,e===Re?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Nh(e,n,t),Kh(e,st()),e.callbackNode!=null&&e.callbackNode===l?$h.bind(null,e):null)}function Wh(e,t){if(eu())return null;Nh(e,t,!0)}function C0(){L0(function(){(fe&6)!==0?Uu(jr,M0):Jh()})}function zs(){if(wl===0){var e=Mn;e===0&&(e=ni,ni<<=1,(ni&261888)===0&&(ni=256)),wl=e}return wl}function Fh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function Ph(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function N0(e,t,l,n,a){if(t==="submit"&&l&&l.stateNode===a){var i=Fh((a[tt]||null).action),o=n.submitter;o&&(t=(t=o[tt]||null)?Fh(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var d=new mi("action","action",null,n,a);e.push({event:d,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(wl!==0){var b=o?Ph(a,o):new FormData(a);Jc(l,{pending:!0,data:b,method:a.method,action:i},null,b)}}else typeof i=="function"&&(d.preventDefault(),b=o?Ph(a,o):new FormData(a),Jc(l,{pending:!0,data:b,method:a.method,action:i},i,b))},currentTarget:a}]})}}for(var Ms=0;Ms<oc.length;Ms++){var Cs=oc[Ms],k0=Cs.toLowerCase(),O0=Cs[0].toUpperCase()+Cs.slice(1);wt(k0,"on"+O0)}wt(Mo,"onAnimationEnd"),wt(Co,"onAnimationIteration"),wt(No,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(Kp,"onTransitionRun"),wt($p,"onTransitionStart"),wt(Wp,"onTransitionCancel"),wt(ko,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),Yl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Da));function Ih(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var d=n[o],b=d.instance,_=d.currentTarget;if(d=d.listener,b!==i&&a.isPropagationStopped())break e;i=d,a.currentTarget=_;try{i(a)}catch(k){yi(k)}a.currentTarget=null,i=b}else for(o=0;o<n.length;o++){if(d=n[o],b=d.instance,_=d.currentTarget,d=d.listener,b!==i&&a.isPropagationStopped())break e;i=d,a.currentTarget=_;try{i(a)}catch(k){yi(k)}a.currentTarget=null,i=b}}}}function ae(e,t){var l=t[Qu];l===void 0&&(l=t[Qu]=new Set);var n=e+"__bubble";l.has(n)||(ed(t,e,2,!1),l.add(n))}function Ns(e,t,l){var n=0;t&&(n|=4),ed(l,e,n,t)}var nu="_reactListening"+Math.random().toString(36).slice(2);function ks(e){if(!e[nu]){e[nu]=!0,Zr.forEach(function(l){l!=="selectionchange"&&(w0.has(l)||Ns(l,!1,e),Ns(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nu]||(t[nu]=!0,Ns("selectionchange",!1,t))}}function ed(e,t,l,n){switch(Cd(t)){case 2:var a=cg;break;case 8:a=sg;break;default:a=Vs}l=a.bind(null,t,l,e),a=void 0,!Fu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,l,{capture:!0,passive:a}):e.addEventListener(t,l,!0):a!==void 0?e.addEventListener(t,l,{passive:a}):e.addEventListener(t,l,!1)}function Os(e,t,l,n,a){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var d=n.stateNode.containerInfo;if(d===a)break;if(o===4)for(o=n.return;o!==null;){var b=o.tag;if((b===3||b===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;d!==null;){if(o=fn(d),o===null)return;if(b=o.tag,b===5||b===6||b===26||b===27){n=i=o;continue e}d=d.parentNode}}n=n.return}no(function(){var _=i,k=$u(l),j=[];e:{var z=Oo.get(e);if(z!==void 0){var M=mi,Y=e;switch(e){case"keypress":if(hi(l)===0)break e;case"keydown":case"keyup":M=_p;break;case"focusin":Y="focus",M=tc;break;case"focusout":Y="blur",M=tc;break;case"beforeblur":case"afterblur":M=tc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Cp;break;case Mo:case Co:case No:M=yp;break;case ko:M=kp;break;case"scroll":case"scrollend":M=hp;break;case"wheel":M=wp;break;case"copy":case"cut":case"paste":M=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=so;break;case"toggle":case"beforetoggle":M=jp}var $=(t&4)!==0,Ee=!$&&(e==="scroll"||e==="scrollend"),T=$?z!==null?z+"Capture":null:z;$=[];for(var x=_,R;x!==null;){var D=x;if(R=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||R===null||T===null||(D=la(x,T),D!=null&&$.push(ja(x,D,R))),Ee)break;x=x.return}0<$.length&&(z=new M(z,Y,null,l,k),j.push({event:z,listeners:$}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",z&&l!==Ku&&(Y=l.relatedTarget||l.fromElement)&&(fn(Y)||Y[on]))break e;if((M||z)&&(z=k.window===k?k:(z=k.ownerDocument)?z.defaultView||z.parentWindow:window,M?(Y=l.relatedTarget||l.toElement,M=_,Y=Y?fn(Y):null,Y!==null&&(Ee=h(Y),$=Y.tag,Y!==Ee||$!==5&&$!==27&&$!==6)&&(Y=null)):(M=null,Y=_),M!==Y)){if($=uo,D="onMouseLeave",T="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&($=so,D="onPointerLeave",T="onPointerEnter",x="pointer"),Ee=M==null?z:ta(M),R=Y==null?z:ta(Y),z=new $(D,x+"leave",M,l,k),z.target=Ee,z.relatedTarget=R,D=null,fn(k)===_&&($=new $(T,x+"enter",Y,l,k),$.target=R,$.relatedTarget=Ee,D=$),Ee=D,M&&Y)t:{for($=D0,T=M,x=Y,R=0,D=T;D;D=$(D))R++;D=0;for(var J=x;J;J=$(J))D++;for(;0<R-D;)T=$(T),R--;for(;0<D-R;)x=$(x),D--;for(;R--;){if(T===x||x!==null&&T===x.alternate){$=T;break t}T=$(T),x=$(x)}$=null}else $=null;M!==null&&td(j,z,M,$,!1),Y!==null&&Ee!==null&&td(j,Ee,Y,$,!0)}}e:{if(z=_?ta(_):window,M=z.nodeName&&z.nodeName.toLowerCase(),M==="select"||M==="input"&&z.type==="file")var se=yo;else if(po(z))if(bo)se=Zp;else{se=Yp;var V=Qp}else M=z.nodeName,!M||M.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?_&&Ju(_.elementType)&&(se=yo):se=Xp;if(se&&(se=se(e,_))){go(j,se,l,k);break e}V&&V(e,z,_),e==="focusout"&&_&&z.type==="number"&&_.memoizedProps.value!=null&&Vu(z,"number",z.value)}switch(V=_?ta(_):window,e){case"focusin":(po(V)||V.contentEditable==="true")&&(xn=V,cc=_,oa=null);break;case"focusout":oa=cc=xn=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,_o(j,l,k);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":_o(j,l,k)}var te;if(nc)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else vn?ho(e,l)&&(ue="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ue="onCompositionStart");ue&&(ro&&l.locale!=="ko"&&(vn||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&vn&&(te=ao()):(yl=k,Pu="value"in yl?yl.value:yl.textContent,vn=!0)),V=au(_,ue),0<V.length&&(ue=new co(ue,e,null,l,k),j.push({event:ue,listeners:V}),te?ue.data=te:(te=mo(l),te!==null&&(ue.data=te)))),(te=Up?Bp(e,l):Gp(e,l))&&(ue=au(_,"onBeforeInput"),0<ue.length&&(V=new co("onBeforeInput","beforeinput",null,l,k),j.push({event:V,listeners:ue}),V.data=te)),N0(j,e,_,l,k)}Ih(j,t)})}function ja(e,t,l){return{instance:e,listener:t,currentTarget:l}}function au(e,t){for(var l=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=la(e,l),a!=null&&n.unshift(ja(e,a,i)),a=la(e,t),a!=null&&n.push(ja(e,a,i))),e.tag===3)return n;e=e.return}return[]}function D0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function td(e,t,l,n,a){for(var i=t._reactName,o=[];l!==null&&l!==n;){var d=l,b=d.alternate,_=d.stateNode;if(d=d.tag,b!==null&&b===n)break;d!==5&&d!==26&&d!==27||_===null||(b=_,a?(_=la(l,i),_!=null&&o.unshift(ja(l,_,b))):a||(_=la(l,i),_!=null&&o.push(ja(l,_,b)))),l=l.return}o.length!==0&&e.push({event:t,listeners:o})}var j0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(j0,`
`).replace(H0,"")}function nd(e,t){return t=ld(t),ld(e)===t}function Se(e,t,l,n,a,i){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||gn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&gn(e,""+n);break;case"className":si(e,"class",n);break;case"tabIndex":si(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,l,n);break;case"style":to(e,n,i);break;case"data":if(t!=="object"){si(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=oi(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Se(e,t,"name",a.name,a,null),Se(e,t,"formEncType",a.formEncType,a,null),Se(e,t,"formMethod",a.formMethod,a,null),Se(e,t,"formTarget",a.formTarget,a,null)):(Se(e,t,"encType",a.encType,a,null),Se(e,t,"method",a.method,a,null),Se(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=oi(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Zt);break;case"onScroll":n!=null&&ae("scroll",e);break;case"onScrollEnd":n!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=oi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":ae("beforetoggle",e),ae("toggle",e),ci(e,"popover",n);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ci(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=op.get(l)||l,ci(e,l,n))}}function ws(e,t,l,n,a,i){switch(l){case"style":to(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof n=="string"?gn(e,n):(typeof n=="number"||typeof n=="bigint")&&gn(e,""+n);break;case"onScroll":n!=null&&ae("scroll",e);break;case"onScrollEnd":n!=null&&ae("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vr.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),t=l.slice(2,a?l.length-7:void 0),i=e[tt]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof n=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,a);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):ci(e,l,n)}}}function $e(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var n=!1,a=!1,i;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];if(o!=null)switch(i){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Se(e,t,i,o,l,null)}}a&&Se(e,t,"srcSet",l.srcSet,l,null),n&&Se(e,t,"src",l.src,l,null);return;case"input":ae("invalid",e);var d=i=o=a=null,b=null,_=null;for(n in l)if(l.hasOwnProperty(n)){var k=l[n];if(k!=null)switch(n){case"name":a=k;break;case"type":o=k;break;case"checked":b=k;break;case"defaultChecked":_=k;break;case"value":i=k;break;case"defaultValue":d=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,t));break;default:Se(e,t,n,k,l,null)}}Fr(e,i,d,b,_,o,a,!1);return;case"select":ae("invalid",e),n=o=i=null;for(a in l)if(l.hasOwnProperty(a)&&(d=l[a],d!=null))switch(a){case"value":i=d;break;case"defaultValue":o=d;break;case"multiple":n=d;default:Se(e,t,a,d,l,null)}t=i,l=o,e.multiple=!!n,t!=null?pn(e,!!n,t,!1):l!=null&&pn(e,!!n,l,!0);return;case"textarea":ae("invalid",e),i=a=n=null;for(o in l)if(l.hasOwnProperty(o)&&(d=l[o],d!=null))switch(o){case"value":n=d;break;case"defaultValue":a=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:Se(e,t,o,d,l,null)}Ir(e,n,a,i);return;case"option":for(b in l)if(l.hasOwnProperty(b)&&(n=l[b],n!=null))switch(b){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Se(e,t,b,n,l,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(n=0;n<Da.length;n++)ae(Da[n],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in l)if(l.hasOwnProperty(_)&&(n=l[_],n!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Se(e,t,_,n,l,null)}return;default:if(Ju(t)){for(k in l)l.hasOwnProperty(k)&&(n=l[k],n!==void 0&&ws(e,t,k,n,l,void 0));return}}for(d in l)l.hasOwnProperty(d)&&(n=l[d],n!=null&&Se(e,t,d,n,l,null))}function U0(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,o=null,d=null,b=null,_=null,k=null;for(M in l){var j=l[M];if(l.hasOwnProperty(M)&&j!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":b=j;default:n.hasOwnProperty(M)||Se(e,t,M,null,n,j)}}for(var z in n){var M=n[z];if(j=l[z],n.hasOwnProperty(z)&&(M!=null||j!=null))switch(z){case"type":i=M;break;case"name":a=M;break;case"checked":_=M;break;case"defaultChecked":k=M;break;case"value":o=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:M!==j&&Se(e,t,z,M,n,j)}}Zu(e,o,d,b,_,k,i,a);return;case"select":M=o=d=z=null;for(i in l)if(b=l[i],l.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":M=b;default:n.hasOwnProperty(i)||Se(e,t,i,null,n,b)}for(a in n)if(i=n[a],b=l[a],n.hasOwnProperty(a)&&(i!=null||b!=null))switch(a){case"value":z=i;break;case"defaultValue":d=i;break;case"multiple":o=i;default:i!==b&&Se(e,t,a,i,n,b)}t=d,l=o,n=M,z!=null?pn(e,!!l,z,!1):!!n!=!!l&&(t!=null?pn(e,!!l,t,!0):pn(e,!!l,l?[]:"",!1));return;case"textarea":M=z=null;for(d in l)if(a=l[d],l.hasOwnProperty(d)&&a!=null&&!n.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Se(e,t,d,null,n,a)}for(o in n)if(a=n[o],i=l[o],n.hasOwnProperty(o)&&(a!=null||i!=null))switch(o){case"value":z=a;break;case"defaultValue":M=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(r(91));break;default:a!==i&&Se(e,t,o,a,n,i)}Pr(e,z,M);return;case"option":for(var Y in l)if(z=l[Y],l.hasOwnProperty(Y)&&z!=null&&!n.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:Se(e,t,Y,null,n,z)}for(b in n)if(z=n[b],M=l[b],n.hasOwnProperty(b)&&z!==M&&(z!=null||M!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Se(e,t,b,z,n,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in l)z=l[$],l.hasOwnProperty($)&&z!=null&&!n.hasOwnProperty($)&&Se(e,t,$,null,n,z);for(_ in n)if(z=n[_],M=l[_],n.hasOwnProperty(_)&&z!==M&&(z!=null||M!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:Se(e,t,_,z,n,M)}return;default:if(Ju(t)){for(var Ee in l)z=l[Ee],l.hasOwnProperty(Ee)&&z!==void 0&&!n.hasOwnProperty(Ee)&&ws(e,t,Ee,void 0,n,z);for(k in n)z=n[k],M=l[k],!n.hasOwnProperty(k)||z===M||z===void 0&&M===void 0||ws(e,t,k,z,n,M);return}}for(var T in l)z=l[T],l.hasOwnProperty(T)&&z!=null&&!n.hasOwnProperty(T)&&Se(e,t,T,null,n,z);for(j in n)z=n[j],M=l[j],!n.hasOwnProperty(j)||z===M||z==null&&M==null||Se(e,t,j,z,n,M)}function ad(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],i=a.transferSize,o=a.initiatorType,d=a.duration;if(i&&d&&ad(o)){for(o=0,d=a.responseEnd,n+=1;n<l.length;n++){var b=l[n],_=b.startTime;if(_>d)break;var k=b.transferSize,j=b.initiatorType;k&&ad(j)&&(b=b.responseEnd,o+=k*(b<d?1:(d-_)/(b-_)))}if(--n,t+=8*(i+o)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ds=null,js=null;function iu(e){return e.nodeType===9?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ud(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Us=null;function G0(){var e=window.event;return e&&e.type==="popstate"?e===Us?!1:(Us=e,!0):(Us=null,!1)}var cd=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(Q0)}:cd;function Q0(e){setTimeout(function(){throw e})}function Dl(e){return e==="head"}function rd(e,t){var l=t,n=0;do{var a=l.nextSibling;if(e.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){e.removeChild(a),Jn(t);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")Ha(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Ha(l);for(var i=l.firstChild;i;){var o=i.nextSibling,d=i.nodeName;i[ea]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=o}}else l==="body"&&Ha(e.ownerDocument.body);l=a}while(l);Jn(t)}function od(e,t){var l=e;e=0;do{var n=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=n}while(l)}function Bs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Bs(l),Yu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Y0(e,t,l,n){for(;e.nodeType===1;){var a=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ea])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function X0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Mt(e.nextSibling),e===null))return null;return e}function fd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Gs(e){return e.data==="$?"||e.data==="$~"}function qs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Z0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ls=null;function hd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Mt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function md(e,t,l){switch(t=iu(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ha(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yu(e)}var Ct=new Map,pd=new Set;function uu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cl=G.d;G.d={f:V0,r:J0,D:K0,C:$0,L:W0,m:F0,X:I0,S:P0,M:eg};function V0(){var e=cl.f(),t=Fi();return e||t}function J0(e){var t=hn(e);t!==null&&t.tag===5&&t.type==="form"?Of(t):cl.r(e)}var Xn=typeof document>"u"?null:document;function gd(e,t,l){var n=Xn;if(n&&typeof t=="string"&&t){var a=St(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),pd.has(a)||(pd.add(a),e={rel:e,crossOrigin:l,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),$e(t,"link",e),Qe(t),n.head.appendChild(t)))}}function K0(e){cl.D(e),gd("dns-prefetch",e,null)}function $0(e,t){cl.C(e,t),gd("preconnect",e,t)}function W0(e,t,l){cl.L(e,t,l);var n=Xn;if(n&&e&&t){var a='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+St(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+St(l.imageSizes)+'"]')):a+='[href="'+St(e)+'"]';var i=a;switch(t){case"style":i=Zn(e);break;case"script":i=Vn(e)}Ct.has(i)||(e=A({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Ct.set(i,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(Ua(i))||t==="script"&&n.querySelector(Ba(i))||(t=n.createElement("link"),$e(t,"link",e),Qe(t),n.head.appendChild(t)))}}function F0(e,t){cl.m(e,t);var l=Xn;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+St(n)+'"][href="'+St(e)+'"]',i=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Vn(e)}if(!Ct.has(i)&&(e=A({rel:"modulepreload",href:e},t),Ct.set(i,e),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ba(i)))return}n=l.createElement("link"),$e(n,"link",e),Qe(n),l.head.appendChild(n)}}}function P0(e,t,l){cl.S(e,t,l);var n=Xn;if(n&&e){var a=dn(n).hoistableStyles,i=Zn(e);t=t||"default";var o=a.get(i);if(!o){var d={loading:0,preload:null};if(o=n.querySelector(Ua(i)))d.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Ct.get(i))&&Qs(e,l);var b=o=n.createElement("link");Qe(b),$e(b,"link",e),b._p=new Promise(function(_,k){b.onload=_,b.onerror=k}),b.addEventListener("load",function(){d.loading|=1}),b.addEventListener("error",function(){d.loading|=2}),d.loading|=4,cu(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:d},a.set(i,o)}}}function I0(e,t){cl.X(e,t);var l=Xn;if(l&&e){var n=dn(l).hoistableScripts,a=Vn(e),i=n.get(a);i||(i=l.querySelector(Ba(a)),i||(e=A({src:e,async:!0},t),(t=Ct.get(a))&&Ys(e,t),i=l.createElement("script"),Qe(i),$e(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function eg(e,t){cl.M(e,t);var l=Xn;if(l&&e){var n=dn(l).hoistableScripts,a=Vn(e),i=n.get(a);i||(i=l.querySelector(Ba(a)),i||(e=A({src:e,async:!0,type:"module"},t),(t=Ct.get(a))&&Ys(e,t),i=l.createElement("script"),Qe(i),$e(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function yd(e,t,l,n){var a=(a=le.current)?uu(a):null;if(!a)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Zn(l.href),l=dn(a).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Zn(l.href);var i=dn(a).hoistableStyles,o=i.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=a.querySelector(Ua(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Ct.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ct.set(e,l),i||tg(a,e,l,o.state))),t&&n===null)throw Error(r(528,""));return o}if(t&&n!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vn(l),l=dn(a).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Zn(e){return'href="'+St(e)+'"'}function Ua(e){return'link[rel="stylesheet"]['+e+"]"}function bd(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function tg(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),$e(t,"link",l),Qe(t),e.head.appendChild(t))}function Vn(e){return'[src="'+St(e)+'"]'}function Ba(e){return"script[async]"+e}function vd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+St(l.href)+'"]');if(n)return t.instance=n,Qe(n),n;var a=A({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Qe(n),$e(n,"style",a),cu(n,l.precedence,e),t.instance=n;case"stylesheet":a=Zn(l.href);var i=e.querySelector(Ua(a));if(i)return t.state.loading|=4,t.instance=i,Qe(i),i;n=bd(l),(a=Ct.get(a))&&Qs(n,a),i=(e.ownerDocument||e).createElement("link"),Qe(i);var o=i;return o._p=new Promise(function(d,b){o.onload=d,o.onerror=b}),$e(i,"link",n),t.state.loading|=4,cu(i,l.precedence,e),t.instance=i;case"script":return i=Vn(l.src),(a=e.querySelector(Ba(i)))?(t.instance=a,Qe(a),a):(n=l,(a=Ct.get(i))&&(n=A({},l),Ys(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),Qe(a),$e(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,cu(n,l.precedence,e));return t.instance}function cu(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,i=a,o=0;o<n.length;o++){var d=n[o];if(d.dataset.precedence===t)i=d;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Qs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ys(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var su=null;function xd(e,t,l){if(su===null){var n=new Map,a=su=new Map;a.set(l,n)}else a=su,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),a=0;a<l.length;a++){var i=l[a];if(!(i[ea]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var d=n.get(o);d?d.push(i):n.set(o,[i])}}return n}function Sd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function lg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ng(e,t,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=Zn(n.href),i=t.querySelector(Ua(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ru.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Qe(i);return}i=t.ownerDocument||t,n=bd(n),(a=Ct.get(a))&&Qs(n,a),i=i.createElement("link"),Qe(i);var o=i;o._p=new Promise(function(d,b){o.onload=d,o.onerror=b}),$e(i,"link",n),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=ru.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Xs=0;function ag(e,t){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var n=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Xs===0&&(Xs=62500*B0());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Xs?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,t.forEach(ig,e),ou=null,ru.call(e))}function ig(e,t){if(!(t.state.loading&4)){var l=ou.get(e);if(l)var n=l.get(null);else{l=new Map,ou.set(e,l);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(l.set(o.dataset.precedence,o),n=o)}n&&l.set(null,n)}a=t.instance,o=a.getAttribute("data-precedence"),i=l.get(o)||n,i===n&&l.set(null,a),l.set(o,a),this.count++,n=ru.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ga={$$typeof:Q,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function ug(e,t,l,n,a,i,o,d,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.hiddenUpdates=Gu(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Ad(e,t,l,n,a,i,o,d,b,_,k,j){return e=new ug(e,t,l,o,b,_,k,j,d),t=1,i===!0&&(t|=24),i=ht(3,null,null,t),e.current=i,i.stateNode=e,t=Ac(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:l,cache:t},zc(i),e}function Td(e){return e?(e=An,e):An}function Rd(e,t,l,n,a,i){a=Td(a),n.context===null?n.context=a:n.pendingContext=a,n=Al(t),n.payload={element:l},i=i===void 0?null:i,i!==null&&(n.callback=i),l=Tl(e,n,t),l!==null&&(ct(l,e,t),ya(l,e,t))}function _d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Zs(e,t){_d(e,t),(e=e.alternate)&&_d(e,t)}function zd(e){if(e.tag===13||e.tag===31){var t=Jl(e,67108864);t!==null&&ct(t,e,67108864),Zs(e,67108864)}}function Md(e){if(e.tag===13||e.tag===31){var t=yt();t=qu(t);var l=Jl(e,t);l!==null&&ct(l,e,t),Zs(e,t)}}var hu=!0;function cg(e,t,l,n){var a=w.T;w.T=null;var i=G.p;try{G.p=2,Vs(e,t,l,n)}finally{G.p=i,w.T=a}}function sg(e,t,l,n){var a=w.T;w.T=null;var i=G.p;try{G.p=8,Vs(e,t,l,n)}finally{G.p=i,w.T=a}}function Vs(e,t,l,n){if(hu){var a=Js(n);if(a===null)Os(e,t,n,du,l),Nd(e,n);else if(og(a,e,t,l,n))n.stopPropagation();else if(Nd(e,n),t&4&&-1<rg.indexOf(e)){for(;a!==null;){var i=hn(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ql(i.pendingLanes);if(o!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var b=1<<31-ot(o);d.entanglements[1]|=b,o&=~b}Qt(i),(fe&6)===0&&($i=st()+500,wa(0))}}break;case 31:case 13:d=Jl(i,2),d!==null&&ct(d,i,2),Fi(),Zs(i,2)}if(i=Js(n),i===null&&Os(e,t,n,du,l),i===a)break;a=i}a!==null&&n.stopPropagation()}else Os(e,t,n,null,l)}}function Js(e){return e=$u(e),Ks(e)}var du=null;function Ks(e){if(du=null,e=fn(e),e!==null){var t=h(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=p(t),e!==null)return e;e=null}else if(l===31){if(e=g(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return du=e,null}function Cd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Km()){case jr:return 2;case Hr:return 8;case li:case $m:return 32;case Ur:return 268435456;default:return 32}default:return 32}}var $s=!1,jl=null,Hl=null,Ul=null,qa=new Map,La=new Map,Bl=[],rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(e,t){switch(e){case"focusin":case"focusout":jl=null;break;case"dragenter":case"dragleave":Hl=null;break;case"mouseover":case"mouseout":Ul=null;break;case"pointerover":case"pointerout":qa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(t.pointerId)}}function Qa(e,t,l,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=hn(t),t!==null&&zd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function og(e,t,l,n,a){switch(t){case"focusin":return jl=Qa(jl,e,t,l,n,a),!0;case"dragenter":return Hl=Qa(Hl,e,t,l,n,a),!0;case"mouseover":return Ul=Qa(Ul,e,t,l,n,a),!0;case"pointerover":var i=a.pointerId;return qa.set(i,Qa(qa.get(i)||null,e,t,l,n,a)),!0;case"gotpointercapture":return i=a.pointerId,La.set(i,Qa(La.get(i)||null,e,t,l,n,a)),!0}return!1}function kd(e){var t=fn(e.target);if(t!==null){var l=h(t);if(l!==null){if(t=l.tag,t===13){if(t=p(l),t!==null){e.blockedOn=t,Yr(e.priority,function(){Md(l)});return}}else if(t===31){if(t=g(l),t!==null){e.blockedOn=t,Yr(e.priority,function(){Md(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Js(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);Ku=n,l.target.dispatchEvent(n),Ku=null}else return t=hn(l),t!==null&&zd(t),e.blockedOn=l,!1;t.shift()}return!0}function Od(e,t,l){mu(e)&&l.delete(t)}function fg(){$s=!1,jl!==null&&mu(jl)&&(jl=null),Hl!==null&&mu(Hl)&&(Hl=null),Ul!==null&&mu(Ul)&&(Ul=null),qa.forEach(Od),La.forEach(Od)}function pu(e,t){e.blockedOn===t&&(e.blockedOn=null,$s||($s=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,fg)))}var gu=null;function wd(e){gu!==e&&(gu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(Ks(n||l)===null)continue;break}var i=hn(l);i!==null&&(e.splice(t,3),t-=3,Jc(i,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function Jn(e){function t(b){return pu(b,e)}jl!==null&&pu(jl,e),Hl!==null&&pu(Hl,e),Ul!==null&&pu(Ul,e),qa.forEach(t),La.forEach(t);for(var l=0;l<Bl.length;l++){var n=Bl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Bl.length&&(l=Bl[0],l.blockedOn===null);)kd(l),l.blockedOn===null&&Bl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],i=l[n+1],o=a[tt]||null;if(typeof i=="function")o||wd(l);else if(o){var d=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[tt]||null)d=o.formAction;else if(Ks(a)!==null)continue}else d=o.action;typeof d=="function"?l[n+1]=d:(l.splice(n,3),n-=3),wd(l)}}}function Dd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Ws(e){this._internalRoot=e}yu.prototype.render=Ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,n=yt();Rd(l,n,e,t,null,null)},yu.prototype.unmount=Ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rd(e.current,2,null,e,null,null),Fi(),t[on]=null}};function yu(e){this._internalRoot=e}yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qr();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Bl.length&&t!==0&&t<Bl[l].priority;l++);Bl.splice(l,0,e),l===0&&kd(e)}};var jd=c.version;if(jd!=="19.2.3")throw Error(r(527,jd,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var hg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{Fn=bu.inject(hg),rt=bu}catch{}}return Xa.createRoot=function(e,t){if(!f(e))throw Error(r(299));var l=!1,n="",a=Qf,i=Yf,o=Xf;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ad(e,1,!1,null,null,l,n,null,a,i,o,Dd),e[on]=t.current,ks(e),new Ws(t)},Xa.hydrateRoot=function(e,t,l){if(!f(e))throw Error(r(299));var n=!1,a="",i=Qf,o=Yf,d=Xf,b=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(o=l.onCaughtError),l.onRecoverableError!==void 0&&(d=l.onRecoverableError),l.formState!==void 0&&(b=l.formState)),t=Ad(e,1,!0,t,l??null,n,a,b,i,o,d,Dd),t.context=Td(null),l=t.current,n=yt(),n=qu(n),a=Al(n),a.callback=null,Tl(l,a,n),l=n,t.current.lanes=l,In(t,l),Qt(t),e[on]=t.current,ks(e),new yu(t)},Xa.version="19.2.3",Xa}var Zd;function Rg(){if(Zd)return Is.exports;Zd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),Is.exports=Tg(),Is.exports}var _g=Rg();const zg=dm(_g);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vd="popstate";function Mg(u={}){function c(f,h){let{pathname:p="/",search:g="",hash:y=""}=sn(f.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),rr("",{pathname:p,search:g,hash:y},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function s(f,h){let p=f.document.querySelector("base"),g="";if(p&&p.getAttribute("href")){let y=f.location.href,m=y.indexOf("#");g=m===-1?y:y.slice(0,m)}return g+"#"+(typeof h=="string"?h:Fa(h))}function r(f,h){Nt(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return Ng(c,s,r,u)}function Ce(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function Nt(u,c){if(!u){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Cg(){return Math.random().toString(36).substring(2,10)}function Jd(u,c){return{usr:u.state,key:u.key,idx:c}}function rr(u,c,s=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof c=="string"?sn(c):c,state:s,key:c&&c.key||r||Cg()}}function Fa({pathname:u="/",search:c="",hash:s=""}){return c&&c!=="?"&&(u+=c.charAt(0)==="?"?c:"?"+c),s&&s!=="#"&&(u+=s.charAt(0)==="#"?s:"#"+s),u}function sn(u){let c={};if(u){let s=u.indexOf("#");s>=0&&(c.hash=u.substring(s),u=u.substring(0,s));let r=u.indexOf("?");r>=0&&(c.search=u.substring(r),u=u.substring(0,r)),u&&(c.pathname=u)}return c}function Ng(u,c,s,r={}){let{window:f=document.defaultView,v5Compat:h=!1}=r,p=f.history,g="POP",y=null,m=E();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function E(){return(p.state||{idx:null}).idx}function A(){g="POP";let B=E(),X=B==null?null:B-m;m=B,y&&y({action:g,location:U.location,delta:X})}function O(B,X){g="PUSH";let K=rr(U.location,B,X);s&&s(K,B),m=E()+1;let Q=Jd(K,m),he=U.createHref(K);try{p.pushState(Q,"",he)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;f.location.assign(he)}h&&y&&y({action:g,location:U.location,delta:1})}function N(B,X){g="REPLACE";let K=rr(U.location,B,X);s&&s(K,B),m=E();let Q=Jd(K,m),he=U.createHref(K);p.replaceState(Q,"",he),h&&y&&y({action:g,location:U.location,delta:0})}function L(B){return kg(B)}let U={get action(){return g},get location(){return u(f,p)},listen(B){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Vd,A),y=B,()=>{f.removeEventListener(Vd,A),y=null}},createHref(B){return c(f,B)},createURL:L,encodeLocation(B){let X=L(B);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:O,replace:N,go(B){return p.go(B)}};return U}function kg(u,c=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(s,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:Fa(u);return r=r.replace(/ $/,"%20"),!c&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function mm(u,c,s="/"){return Og(u,c,s,!1)}function Og(u,c,s,r){let f=typeof c=="string"?sn(c):c,h=dl(f.pathname||"/",s);if(h==null)return null;let p=pm(u);wg(p);let g=null;for(let y=0;g==null&&y<p.length;++y){let m=Xg(h);g=Qg(p[y],m,r)}return g}function pm(u,c=[],s=[],r="",f=!1){let h=(p,g,y=f,m)=>{let E={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(r)&&y)return;Ce(E.relativePath.startsWith(r),`Absolute route path "${E.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(r.length)}let A=hl([r,E.relativePath]),O=s.concat(E);p.children&&p.children.length>0&&(Ce(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),pm(p.children,c,O,A,y)),!(p.path==null&&!p.index)&&c.push({path:A,score:qg(A,p.index),routesMeta:O})};return u.forEach((p,g)=>{var y;if(p.path===""||!((y=p.path)!=null&&y.includes("?")))h(p,g);else for(let m of gm(p.path))h(p,g,!0,m)}),c}function gm(u){let c=u.split("/");if(c.length===0)return[];let[s,...r]=c,f=s.endsWith("?"),h=s.replace(/\?$/,"");if(r.length===0)return f?[h,""]:[h];let p=gm(r.join("/")),g=[];return g.push(...p.map(y=>y===""?h:[h,y].join("/"))),f&&g.push(...p),g.map(y=>u.startsWith("/")&&y===""?"/":y)}function wg(u){u.sort((c,s)=>c.score!==s.score?s.score-c.score:Lg(c.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var Dg=/^:[\w-]+$/,jg=3,Hg=2,Ug=1,Bg=10,Gg=-2,Kd=u=>u==="*";function qg(u,c){let s=u.split("/"),r=s.length;return s.some(Kd)&&(r+=Gg),c&&(r+=Hg),s.filter(f=>!Kd(f)).reduce((f,h)=>f+(Dg.test(h)?jg:h===""?Ug:Bg),r)}function Lg(u,c){return u.length===c.length&&u.slice(0,-1).every((r,f)=>r===c[f])?u[u.length-1]-c[c.length-1]:0}function Qg(u,c,s=!1){let{routesMeta:r}=u,f={},h="/",p=[];for(let g=0;g<r.length;++g){let y=r[g],m=g===r.length-1,E=h==="/"?c:c.slice(h.length)||"/",A=Ru({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},E),O=y.route;if(!A&&m&&s&&!r[r.length-1].route.index&&(A=Ru({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!A)return null;Object.assign(f,A.params),p.push({params:f,pathname:hl([h,A.pathname]),pathnameBase:Kg(hl([h,A.pathnameBase])),route:O}),A.pathnameBase!=="/"&&(h=hl([h,A.pathnameBase]))}return p}function Ru(u,c){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[s,r]=Yg(u.path,u.caseSensitive,u.end),f=c.match(s);if(!f)return null;let h=f[0],p=h.replace(/(.)\/+$/,"$1"),g=f.slice(1);return{params:r.reduce((m,{paramName:E,isOptional:A},O)=>{if(E==="*"){let L=g[O]||"";p=h.slice(0,h.length-L.length).replace(/(.)\/+$/,"$1")}const N=g[O];return A&&!N?m[E]=void 0:m[E]=(N||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:p,pattern:u}}function Yg(u,c=!1,s=!0){Nt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],f="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,y)=>(r.push({paramName:g,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),f+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":u!==""&&u!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),r]}function Xg(u){try{return u.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Nt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),u}}function dl(u,c){if(c==="/")return u;if(!u.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,r=u.charAt(s);return r&&r!=="/"?null:u.slice(s)||"/"}var Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Vg(u,c="/"){let{pathname:s,search:r="",hash:f=""}=typeof u=="string"?sn(u):u,h;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?h=$d(s.substring(1),"/"):h=$d(s,c)):h=c,{pathname:h,search:$g(r),hash:Wg(f)}}function $d(u,c){let s=c.replace(/\/+$/,"").split("/");return u.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function nr(u,c,s,r){return`Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jg(u){return u.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function gr(u){let c=Jg(u);return c.map((s,r)=>r===c.length-1?s.pathname:s.pathnameBase)}function yr(u,c,s,r=!1){let f;typeof u=="string"?f=sn(u):(f={...u},Ce(!f.pathname||!f.pathname.includes("?"),nr("?","pathname","search",f)),Ce(!f.pathname||!f.pathname.includes("#"),nr("#","pathname","hash",f)),Ce(!f.search||!f.search.includes("#"),nr("#","search","hash",f)));let h=u===""||f.pathname==="",p=h?"/":f.pathname,g;if(p==null)g=s;else{let A=c.length-1;if(!r&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),A-=1;f.pathname=O.join("/")}g=A>=0?c[A]:"/"}let y=Vg(f,g),m=p&&p!=="/"&&p.endsWith("/"),E=(h||p===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(m||E)&&(y.pathname+="/"),y}var hl=u=>u.join("/").replace(/\/\/+/g,"/"),Kg=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),$g=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Wg=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Fg=class{constructor(u,c,s,r=!1){this.status=u,this.statusText=c||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Pg(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function Ig(u){return u.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bm(u,c){let s=u;if(typeof s!="string"||!Zg.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,f=!1;if(ym)try{let h=new URL(window.location.href),p=s.startsWith("//")?new URL(h.protocol+s):new URL(s),g=dl(p.pathname,c);p.origin===h.origin&&g!=null?s=g+p.search+p.hash:f=!0}catch{Nt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:f,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vm=["POST","PUT","PATCH","DELETE"];new Set(vm);var ey=["GET",...vm];new Set(ey);var Kn=C.createContext(null);Kn.displayName="DataRouter";var Cu=C.createContext(null);Cu.displayName="DataRouterState";var ty=C.createContext(!1),xm=C.createContext({isTransitioning:!1});xm.displayName="ViewTransition";var ly=C.createContext(new Map);ly.displayName="Fetchers";var ny=C.createContext(null);ny.displayName="Await";var bt=C.createContext(null);bt.displayName="Navigation";var Pa=C.createContext(null);Pa.displayName="Location";var kt=C.createContext({outlet:null,matches:[],isDataRoute:!1});kt.displayName="Route";var br=C.createContext(null);br.displayName="RouteError";var Sm="REACT_ROUTER_ERROR",ay="REDIRECT",iy="ROUTE_ERROR_RESPONSE";function uy(u){if(u.startsWith(`${Sm}:${ay}:{`))try{let c=JSON.parse(u.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function cy(u){if(u.startsWith(`${Sm}:${iy}:{`))try{let c=JSON.parse(u.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Fg(c.status,c.statusText,c.data)}catch{}}function sy(u,{relative:c}={}){Ce($n(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=C.useContext(bt),{hash:f,pathname:h,search:p}=Ia(u,{relative:c}),g=h;return s!=="/"&&(g=h==="/"?s:hl([s,h])),r.createHref({pathname:g,search:p,hash:f})}function $n(){return C.useContext(Pa)!=null}function ml(){return Ce($n(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Pa).location}var Em="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Am(u){C.useContext(bt).static||C.useLayoutEffect(u)}function Tm(){let{isDataRoute:u}=C.useContext(kt);return u?Ty():ry()}function ry(){Ce($n(),"useNavigate() may be used only in the context of a <Router> component.");let u=C.useContext(Kn),{basename:c,navigator:s}=C.useContext(bt),{matches:r}=C.useContext(kt),{pathname:f}=ml(),h=JSON.stringify(gr(r)),p=C.useRef(!1);return Am(()=>{p.current=!0}),C.useCallback((y,m={})=>{if(Nt(p.current,Em),!p.current)return;if(typeof y=="number"){s.go(y);return}let E=yr(y,JSON.parse(h),f,m.relative==="path");u==null&&c!=="/"&&(E.pathname=E.pathname==="/"?c:hl([c,E.pathname])),(m.replace?s.replace:s.push)(E,m.state,m)},[c,s,h,f,u])}var oy=C.createContext(null);function fy(u){let c=C.useContext(kt).outlet;return C.useMemo(()=>c&&C.createElement(oy.Provider,{value:u},c),[c,u])}function hy(){let{matches:u}=C.useContext(kt),c=u[u.length-1];return c?c.params:{}}function Ia(u,{relative:c}={}){let{matches:s}=C.useContext(kt),{pathname:r}=ml(),f=JSON.stringify(gr(s));return C.useMemo(()=>yr(u,JSON.parse(f),r,c==="path"),[u,f,r,c])}function dy(u,c){return Rm(u,c)}function Rm(u,c,s,r,f){var K;Ce($n(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=C.useContext(bt),{matches:p}=C.useContext(kt),g=p[p.length-1],y=g?g.params:{},m=g?g.pathname:"/",E=g?g.pathnameBase:"/",A=g&&g.route;{let Q=A&&A.path||"";zm(m,!A||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let O=ml(),N;if(c){let Q=typeof c=="string"?sn(c):c;Ce(E==="/"||((K=Q.pathname)==null?void 0:K.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),N=Q}else N=O;let L=N.pathname||"/",U=L;if(E!=="/"){let Q=E.replace(/^\//,"").split("/");U="/"+L.replace(/^\//,"").split("/").slice(Q.length).join("/")}let B=mm(u,{pathname:U});Nt(A||B!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Nt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=by(B&&B.map(Q=>Object.assign({},Q,{params:Object.assign({},y,Q.params),pathname:hl([E,h.encodeLocation?h.encodeLocation(Q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?E:hl([E,h.encodeLocation?h.encodeLocation(Q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathnameBase])})),p,s,r,f);return c&&X?C.createElement(Pa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},X):X}function my(){let u=Ay(),c=Pg(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),s=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},p=null;return console.error("Error handled by React Router default ErrorBoundary:",u),p=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:h},"ErrorBoundary")," or"," ",C.createElement("code",{style:h},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},c),s?C.createElement("pre",{style:f},s):null,p)}var py=C.createElement(my,null),_m=class extends C.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,c){return c.location!==u.location||c.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:c.error,location:c.location,revalidation:u.revalidation||c.revalidation}}componentDidCatch(u,c){this.props.onError?this.props.onError(u,c):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const s=cy(u.digest);s&&(u=s)}let c=u!==void 0?C.createElement(kt.Provider,{value:this.props.routeContext},C.createElement(br.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?C.createElement(gy,{error:u},c):c}};_m.contextType=ty;var ar=new WeakMap;function gy({children:u,error:c}){let{basename:s}=C.useContext(bt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let r=uy(c.digest);if(r){let f=ar.get(c);if(f)throw f;let h=bm(r.location,s);if(ym&&!ar.get(c))if(h.isExternal||r.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:r.replace}));throw ar.set(c,p),p}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function yy({routeContext:u,match:c,children:s}){let r=C.useContext(Kn);return r&&r.static&&r.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=c.route.id),C.createElement(kt.Provider,{value:u},s)}function by(u,c=[],s=null,r=null,f=null){if(u==null){if(!s)return null;if(s.errors)u=s.matches;else if(c.length===0&&!s.initialized&&s.matches.length>0)u=s.matches;else return null}let h=u,p=s==null?void 0:s.errors;if(p!=null){let E=h.findIndex(A=>A.route.id&&(p==null?void 0:p[A.route.id])!==void 0);Ce(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,y=-1;if(s)for(let E=0;E<h.length;E++){let A=h[E];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(y=E),A.route.id){let{loaderData:O,errors:N}=s,L=A.route.loader&&!O.hasOwnProperty(A.route.id)&&(!N||N[A.route.id]===void 0);if(A.route.lazy||L){g=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}let m=s&&r?(E,A)=>{var O,N;r(E,{location:s.location,params:((N=(O=s.matches)==null?void 0:O[0])==null?void 0:N.params)??{},unstable_pattern:Ig(s.matches),errorInfo:A})}:void 0;return h.reduceRight((E,A,O)=>{let N,L=!1,U=null,B=null;s&&(N=p&&A.route.id?p[A.route.id]:void 0,U=A.route.errorElement||py,g&&(y<0&&O===0?(zm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,B=null):y===O&&(L=!0,B=A.route.hydrateFallbackElement||null)));let X=c.concat(h.slice(0,O+1)),K=()=>{let Q;return N?Q=U:L?Q=B:A.route.Component?Q=C.createElement(A.route.Component,null):A.route.element?Q=A.route.element:Q=E,C.createElement(yy,{match:A,routeContext:{outlet:E,matches:X,isDataRoute:s!=null},children:Q})};return s&&(A.route.ErrorBoundary||A.route.errorElement||O===0)?C.createElement(_m,{location:s.location,revalidation:s.revalidation,component:U,error:N,children:K(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:m}):K()},null)}function vr(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vy(u){let c=C.useContext(Kn);return Ce(c,vr(u)),c}function xy(u){let c=C.useContext(Cu);return Ce(c,vr(u)),c}function Sy(u){let c=C.useContext(kt);return Ce(c,vr(u)),c}function xr(u){let c=Sy(u),s=c.matches[c.matches.length-1];return Ce(s.route.id,`${u} can only be used on routes that contain a unique "id"`),s.route.id}function Ey(){return xr("useRouteId")}function Ay(){var r;let u=C.useContext(br),c=xy("useRouteError"),s=xr("useRouteError");return u!==void 0?u:(r=c.errors)==null?void 0:r[s]}function Ty(){let{router:u}=vy("useNavigate"),c=xr("useNavigate"),s=C.useRef(!1);return Am(()=>{s.current=!0}),C.useCallback(async(f,h={})=>{Nt(s.current,Em),s.current&&(typeof f=="number"?await u.navigate(f):await u.navigate(f,{fromRouteId:c,...h}))},[u,c])}var Wd={};function zm(u,c,s){!c&&!Wd[u]&&(Wd[u]=!0,Nt(!1,s))}C.memo(Ry);function Ry({routes:u,future:c,state:s,onError:r}){return Rm(u,void 0,s,r,c)}function _y({to:u,replace:c,state:s,relative:r}){Ce($n(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=C.useContext(bt);Nt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=C.useContext(kt),{pathname:p}=ml(),g=Tm(),y=yr(u,gr(h),p,r==="path"),m=JSON.stringify(y);return C.useEffect(()=>{g(JSON.parse(m),{replace:c,state:s,relative:r})},[g,m,r,c,s]),null}function zy(u){return fy(u.context)}function rl(u){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function My({basename:u="/",children:c=null,location:s,navigationType:r="POP",navigator:f,static:h=!1,unstable_useTransitions:p}){Ce(!$n(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=u.replace(/^\/*/,"/"),y=C.useMemo(()=>({basename:g,navigator:f,static:h,unstable_useTransitions:p,future:{}}),[g,f,h,p]);typeof s=="string"&&(s=sn(s));let{pathname:m="/",search:E="",hash:A="",state:O=null,key:N="default"}=s,L=C.useMemo(()=>{let U=dl(m,g);return U==null?null:{location:{pathname:U,search:E,hash:A,state:O,key:N},navigationType:r}},[g,m,E,A,O,N,r]);return Nt(L!=null,`<Router basename="${g}"> is not able to match the URL "${m}${E}${A}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:C.createElement(bt.Provider,{value:y},C.createElement(Pa.Provider,{children:c,value:L}))}function Cy({children:u,location:c}){return dy(or(u),c)}function or(u,c=[]){let s=[];return C.Children.forEach(u,(r,f)=>{if(!C.isValidElement(r))return;let h=[...c,f];if(r.type===C.Fragment){s.push.apply(s,or(r.props.children,h));return}Ce(r.type===rl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!r.props.index||!r.props.children,"An index route cannot have child routes.");let p={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(p.children=or(r.props.children,h)),s.push(p)}),s}var Eu="get",Au="application/x-www-form-urlencoded";function Nu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Ny(u){return Nu(u)&&u.tagName.toLowerCase()==="button"}function ky(u){return Nu(u)&&u.tagName.toLowerCase()==="form"}function Oy(u){return Nu(u)&&u.tagName.toLowerCase()==="input"}function wy(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Dy(u,c){return u.button===0&&(!c||c==="_self")&&!wy(u)}var vu=null;function jy(){if(vu===null)try{new FormData(document.createElement("form"),0),vu=!1}catch{vu=!0}return vu}var Hy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ir(u){return u!=null&&!Hy.has(u)?(Nt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Au}"`),null):u}function Uy(u,c){let s,r,f,h,p;if(ky(u)){let g=u.getAttribute("action");r=g?dl(g,c):null,s=u.getAttribute("method")||Eu,f=ir(u.getAttribute("enctype"))||Au,h=new FormData(u)}else if(Ny(u)||Oy(u)&&(u.type==="submit"||u.type==="image")){let g=u.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=u.getAttribute("formaction")||g.getAttribute("action");if(r=y?dl(y,c):null,s=u.getAttribute("formmethod")||g.getAttribute("method")||Eu,f=ir(u.getAttribute("formenctype"))||ir(g.getAttribute("enctype"))||Au,h=new FormData(g,u),!jy()){let{name:m,type:E,value:A}=u;if(E==="image"){let O=m?`${m}.`:"";h.append(`${O}x`,"0"),h.append(`${O}y`,"0")}else m&&h.append(m,A)}}else{if(Nu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Eu,r=null,f=Au,p=u}return h&&f==="text/plain"&&(p=h,h=void 0),{action:r,method:s.toLowerCase(),encType:f,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sr(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function By(u,c,s,r){let f=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${r}`:f.pathname=`${f.pathname}.${r}`:f.pathname==="/"?f.pathname=`_root.${r}`:c&&dl(f.pathname,c)==="/"?f.pathname=`${c.replace(/\/$/,"")}/_root.${r}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${r}`,f}async function Gy(u,c){if(u.id in c)return c[u.id];try{let s=await import(u.module);return c[u.id]=s,s}catch(s){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qy(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Ly(u,c,s){let r=await Promise.all(u.map(async f=>{let h=c.routes[f.route.id];if(h){let p=await Gy(h,s);return p.links?p.links():[]}return[]}));return Zy(r.flat(1).filter(qy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Fd(u,c,s,r,f,h){let p=(y,m)=>s[m]?y.route.id!==s[m].route.id:!0,g=(y,m)=>{var E;return s[m].pathname!==y.pathname||((E=s[m].route.path)==null?void 0:E.endsWith("*"))&&s[m].params["*"]!==y.params["*"]};return h==="assets"?c.filter((y,m)=>p(y,m)||g(y,m)):h==="data"?c.filter((y,m)=>{var A;let E=r.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(p(y,m)||g(y,m))return!0;if(y.route.shouldRevalidate){let O=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((A=s[0])==null?void 0:A.params)||{},nextUrl:new URL(u,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function Qy(u,c,{includeHydrateFallback:s}={}){return Yy(u.map(r=>{let f=c.routes[r.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Yy(u){return[...new Set(u)]}function Xy(u){let c={},s=Object.keys(u).sort();for(let r of s)c[r]=u[r];return c}function Zy(u,c){let s=new Set;return new Set(c),u.reduce((r,f)=>{let h=JSON.stringify(Xy(f));return s.has(h)||(s.add(h),r.push({key:h,link:f})),r},[])}function Mm(){let u=C.useContext(Kn);return Sr(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Vy(){let u=C.useContext(Cu);return Sr(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Er=C.createContext(void 0);Er.displayName="FrameworkContext";function Cm(){let u=C.useContext(Er);return Sr(u,"You must render this element inside a <HydratedRouter> element"),u}function Jy(u,c){let s=C.useContext(Er),[r,f]=C.useState(!1),[h,p]=C.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:m,onMouseLeave:E,onTouchStart:A}=c,O=C.useRef(null);C.useEffect(()=>{if(u==="render"&&p(!0),u==="viewport"){let U=X=>{X.forEach(K=>{p(K.isIntersecting)})},B=new IntersectionObserver(U,{threshold:.5});return O.current&&B.observe(O.current),()=>{B.disconnect()}}},[u]),C.useEffect(()=>{if(r){let U=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(U)}}},[r]);let N=()=>{f(!0)},L=()=>{f(!1),p(!1)};return s?u!=="intent"?[h,O,{}]:[h,O,{onFocus:Za(g,N),onBlur:Za(y,L),onMouseEnter:Za(m,N),onMouseLeave:Za(E,L),onTouchStart:Za(A,N)}]:[!1,O,{}]}function Za(u,c){return s=>{u&&u(s),s.defaultPrevented||c(s)}}function Ky({page:u,...c}){let{router:s}=Mm(),r=C.useMemo(()=>mm(s.routes,u,s.basename),[s.routes,u,s.basename]);return r?C.createElement(Wy,{page:u,matches:r,...c}):null}function $y(u){let{manifest:c,routeModules:s}=Cm(),[r,f]=C.useState([]);return C.useEffect(()=>{let h=!1;return Ly(u,c,s).then(p=>{h||f(p)}),()=>{h=!0}},[u,c,s]),r}function Wy({page:u,matches:c,...s}){let r=ml(),{future:f,manifest:h,routeModules:p}=Cm(),{basename:g}=Mm(),{loaderData:y,matches:m}=Vy(),E=C.useMemo(()=>Fd(u,c,m,h,r,"data"),[u,c,m,h,r]),A=C.useMemo(()=>Fd(u,c,m,h,r,"assets"),[u,c,m,h,r]),O=C.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let U=new Set,B=!1;if(c.forEach(K=>{var he;let Q=h.routes[K.route.id];!Q||!Q.hasLoader||(!E.some(de=>de.route.id===K.route.id)&&K.route.id in y&&((he=p[K.route.id])!=null&&he.shouldRevalidate)||Q.hasClientLoader?B=!0:U.add(K.route.id))}),U.size===0)return[];let X=By(u,g,f.unstable_trailingSlashAwareDataRequests,"data");return B&&U.size>0&&X.searchParams.set("_routes",c.filter(K=>U.has(K.route.id)).map(K=>K.route.id).join(",")),[X.pathname+X.search]},[g,f.unstable_trailingSlashAwareDataRequests,y,r,h,E,c,u,p]),N=C.useMemo(()=>Qy(A,h),[A,h]),L=$y(A);return C.createElement(C.Fragment,null,O.map(U=>C.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...s})),N.map(U=>C.createElement("link",{key:U,rel:"modulepreload",href:U,...s})),L.map(({key:U,link:B})=>C.createElement("link",{key:U,nonce:s.nonce,...B,crossOrigin:B.crossOrigin??s.crossOrigin})))}function Fy(...u){return c=>{u.forEach(s=>{typeof s=="function"?s(c):s!=null&&(s.current=c)})}}var Py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Py&&(window.__reactRouterVersion="7.13.0")}catch{}function Iy({basename:u,children:c,unstable_useTransitions:s,window:r}){let f=C.useRef();f.current==null&&(f.current=Mg({window:r,v5Compat:!0}));let h=f.current,[p,g]=C.useState({action:h.action,location:h.location}),y=C.useCallback(m=>{s===!1?g(m):C.startTransition(()=>g(m))},[s]);return C.useLayoutEffect(()=>h.listen(y),[h,y]),C.createElement(My,{basename:u,children:c,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:s})}var Nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fl=C.forwardRef(function({onClick:c,discover:s="render",prefetch:r="none",relative:f,reloadDocument:h,replace:p,state:g,target:y,to:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:O,...N},L){let{basename:U,unstable_useTransitions:B}=C.useContext(bt),X=typeof m=="string"&&Nm.test(m),K=bm(m,U);m=K.to;let Q=sy(m,{relative:f}),[he,de,be]=Jy(r,N),W=lb(m,{replace:p,state:g,target:y,preventScrollReset:E,relative:f,viewTransition:A,unstable_defaultShouldRevalidate:O,unstable_useTransitions:B});function Oe(vt){c&&c(vt),vt.defaultPrevented||W(vt)}let Xe=C.createElement("a",{...N,...be,href:K.absoluteURL||Q,onClick:K.isExternal||h?c:Oe,ref:Fy(L,de),target:y,"data-discover":!X&&s==="render"?"true":void 0});return he&&!X?C.createElement(C.Fragment,null,Xe,C.createElement(Ky,{page:Q})):Xe});fl.displayName="Link";var Tu=C.forwardRef(function({"aria-current":c="page",caseSensitive:s=!1,className:r="",end:f=!1,style:h,to:p,viewTransition:g,children:y,...m},E){let A=Ia(p,{relative:m.relative}),O=ml(),N=C.useContext(Cu),{navigator:L,basename:U}=C.useContext(bt),B=N!=null&&cb(A)&&g===!0,X=L.encodeLocation?L.encodeLocation(A).pathname:A.pathname,K=O.pathname,Q=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;s||(K=K.toLowerCase(),Q=Q?Q.toLowerCase():null,X=X.toLowerCase()),Q&&U&&(Q=dl(Q,U)||Q);const he=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let de=K===X||!f&&K.startsWith(X)&&K.charAt(he)==="/",be=Q!=null&&(Q===X||!f&&Q.startsWith(X)&&Q.charAt(X.length)==="/"),W={isActive:de,isPending:be,isTransitioning:B},Oe=de?c:void 0,Xe;typeof r=="function"?Xe=r(W):Xe=[r,de?"active":null,be?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let vt=typeof h=="function"?h(W):h;return C.createElement(fl,{...m,"aria-current":Oe,className:Xe,ref:E,style:vt,to:p,viewTransition:g},typeof y=="function"?y(W):y)});Tu.displayName="NavLink";var eb=C.forwardRef(({discover:u="render",fetcherKey:c,navigate:s,reloadDocument:r,replace:f,state:h,method:p=Eu,action:g,onSubmit:y,relative:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:O,...N},L)=>{let{unstable_useTransitions:U}=C.useContext(bt),B=ib(),X=ub(g,{relative:m}),K=p.toLowerCase()==="get"?"get":"post",Q=typeof g=="string"&&Nm.test(g),he=de=>{if(y&&y(de),de.defaultPrevented)return;de.preventDefault();let be=de.nativeEvent.submitter,W=(be==null?void 0:be.getAttribute("formmethod"))||p,Oe=()=>B(be||de.currentTarget,{fetcherKey:c,method:W,navigate:s,replace:f,state:h,relative:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:O});U&&s!==!1?C.startTransition(()=>Oe()):Oe()};return C.createElement("form",{ref:L,method:K,action:X,onSubmit:r?y:he,...N,"data-discover":!Q&&u==="render"?"true":void 0})});eb.displayName="Form";function tb(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function km(u){let c=C.useContext(Kn);return Ce(c,tb(u)),c}function lb(u,{target:c,replace:s,state:r,preventScrollReset:f,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:g,unstable_useTransitions:y}={}){let m=Tm(),E=ml(),A=Ia(u,{relative:h});return C.useCallback(O=>{if(Dy(O,c)){O.preventDefault();let N=s!==void 0?s:Fa(E)===Fa(A),L=()=>m(u,{replace:N,state:r,preventScrollReset:f,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:g});y?C.startTransition(()=>L()):L()}},[E,m,A,s,r,c,u,f,h,p,g,y])}var nb=0,ab=()=>`__${String(++nb)}__`;function ib(){let{router:u}=km("useSubmit"),{basename:c}=C.useContext(bt),s=Ey(),r=u.fetch,f=u.navigate;return C.useCallback(async(h,p={})=>{let{action:g,method:y,encType:m,formData:E,body:A}=Uy(h,c);if(p.navigate===!1){let O=p.fetcherKey||ab();await r(O,s,p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:A,formMethod:p.method||y,formEncType:p.encType||m,flushSync:p.flushSync})}else await f(p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:A,formMethod:p.method||y,formEncType:p.encType||m,replace:p.replace,state:p.state,fromRouteId:s,flushSync:p.flushSync,viewTransition:p.viewTransition})},[r,f,c,s])}function ub(u,{relative:c}={}){let{basename:s}=C.useContext(bt),r=C.useContext(kt);Ce(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),h={...Ia(u||".",{relative:c})},p=ml();if(u==null){h.search=p.search;let g=new URLSearchParams(h.search),y=g.getAll("index");if(y.some(E=>E==="")){g.delete("index"),y.filter(A=>A).forEach(A=>g.append("index",A));let E=g.toString();h.search=E?`?${E}`:""}}return(!u||u===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:hl([s,h.pathname])),Fa(h)}function cb(u,{relative:c}={}){let s=C.useContext(xm);Ce(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=km("useViewTransitionState"),f=Ia(u,{relative:c});if(!s.isTransitioning)return!1;let h=dl(s.currentLocation.pathname,r)||s.currentLocation.pathname,p=dl(s.nextLocation.pathname,r)||s.nextLocation.pathname;return Ru(f.pathname,p)!=null||Ru(f.pathname,h)!=null}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rb=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,s,r)=>r?r.toUpperCase():s.toLowerCase()),Pd=u=>{const c=rb(u);return c.charAt(0).toUpperCase()+c.slice(1)},Om=(...u)=>u.filter((c,s,r)=>!!c&&c.trim()!==""&&r.indexOf(c)===s).join(" ").trim(),ob=u=>{for(const c in u)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=C.forwardRef(({color:u="currentColor",size:c=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:f="",children:h,iconNode:p,...g},y)=>C.createElement("svg",{ref:y,...fb,width:c,height:c,stroke:u,strokeWidth:r?Number(s)*24/Number(c):s,className:Om("lucide",f),...!h&&!ob(g)&&{"aria-hidden":"true"},...g},[...p.map(([m,E])=>C.createElement(m,E)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=(u,c)=>{const s=C.forwardRef(({className:r,...f},h)=>C.createElement(hb,{ref:h,iconNode:c,className:Om(`lucide-${sb(Pd(u))}`,`lucide-${u}`,r),...f}));return s.displayName=Pd(u),s};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],mb=He("arrow-left",db);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ur=He("arrow-right",pb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],yb=He("calendar",gb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vb=He("check",bb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Sb=He("chevron-left",xb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ab=He("chevron-right",Eb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Rb=He("chevron-up",Tb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],sl=He("code",_b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Mb=He("copy",zb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Nb=He("cpu",Cb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Ob=He("database",kb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Db=He("external-link",wb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Id=He("github",jb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Va=He("globe",Hb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Bb=He("layers",Ub);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],qb=He("menu",Gb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Qb=He("server",Lb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],em=He("shield-check",Yb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Zb=He("tag",Xb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],tm=He("terminal",Vb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],lm=He("x",Jb),nm=[{label:"Home",path:"/"},{label:"Experience",path:"/experience"},{label:"Skills",path:"/skills"},{label:"Education",path:"/education"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],fr=[{id:"standard-networks",title:"스탠다드네트웍스",role:"전송 개발팀",period:"2023.07 - 2025.12",description:"대용량 메시지 발송 플랫폼 기획/개발 및 운영",techStack:["Java","Spring Boot","Spring Cloud","Redis","RabbitMQ","R2DBC","Netflix Eureka","WebFlux"],keyAchievements:["월 평균 7천만 건에서 최대 3억 건에 이르는 메시지 데이터 처리","MSA(Microservices Architecture) 설계를 통한 시스템 결합도 최소화 및 확장성있는 인프라 구축","약 50개 고객사에 직접 배포되어 안정적으로 운영 중인 Agent 프로그램 개발 및 운영","메시지 검칙 프로세스 개발. KISA(한국인터넷진흥원) 및 내부 정책 준수로 스팸 신고율 50% 이상 감소 및 발송 신뢰도 향상"]}],Kb=[{category:"Languages",items:[{name:"Java",icon:$b},{name:"HTML/CSS",icon:Bb},{name:"JS(ES6)",icon:Qb}]},{category:"Frameworks & Libraries",items:[{name:"Spring boot",icon:Ob},{name:"WebFlux",icon:Nb},{name:"Netty",icon:Va},{name:"JPA",icon:Va},{name:"mybatis",icon:Va},{name:"R2DBC",icon:Va},{name:"React & Redux",icon:Va},{name:"Tailwind CSS"}]},{category:"Infrastructure & Databases",items:[{name:"RabbitMQ",icon:em},{name:"Redis",icon:tm},{name:"mySQL",icon:sl},{name:"Oracle",icon:sl},{name:"maria",icon:sl},{name:"Linux",icon:sl}]},{category:"Tools & Collaboration",items:[{name:"VSCode",icon:em},{name:"IntelliJ",icon:tm},{name:"eclipse",icon:sl},{name:"Git/GithubDesktop",icon:sl},{name:"Notion",icon:sl},{name:"Slack",icon:sl},{name:"Jira",icon:sl}]}],am=[{institution:"Docker 클라우드 컨데이너 기반 아키텍처 이해와 실습",link:"https://edu.ktdsuniversity.com",degree:"kt University에서 진행한 Docker 클라우드 컨테이너 기반 아키텍처 교육 과정",period:"2024.10 ~ 2024.10",details:["Docker와 Docker 컴포넌트 이해","Docker 이미지와 컨테이너 설정","Dockerfile 로 서버 구축하기","Docker 이미지 공유","Container 통합 관리"],category:"Education"},{institution:"빅데이터 기반 지능형SW 및 MLOps 개발자 양성과정",link:"https://playdata.io/",degree:"엔코아 아카데미(Encore Academy)에서 진행한 빅데이터 기반 개발자 양성 과정",period:"2022.11 ~ 2023.5",details:["마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","마이크로 서비스 개발을 위한 DB설계 능력"],category:"Education"},{institution:"La Piscine",link:"https://42seoul.kr/seoul42/main/view",degree:"이노베이션 아카데미(Innovation Academy)에서 진행한 자기주도학습 기반의 알고리즘 문제 풀이 과정",period:"2022.8 ~ 2022.9",details:["알고리즘 문제 해결 능력","서로간의 코드 설명 및 코드 리뷰로 의사소통 능력 향상"],category:"Education"},{institution:"클라우드 기반의 MSA 스페셜리스트 주니어 개발자 양성 과정",link:"https://sesac.seoul.kr/course/active/detail.do",degree:"디지털 전환(Digital Transformation)시대의 핵심 클라우드 전문 인재 양성 교육 과정",period:"2021.11 ~ 2022.5",details:["클라우드 인프라 구축 능력","마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","클라우드 네이티브에 대한 이해와 마이크로 서비스 개발 및 관리할 수 있는 능력"],category:"Education"},{institution:"정보처리기능사",degree:"한국산업인력공단",period:"2022.07.01",details:["국가기술자격증 취득"],category:"Certification"}];function $b(u){return v.jsxs("svg",{...u,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}),v.jsx("path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}),v.jsx("line",{x1:"6",x2:"6",y1:"2",y2:"4"}),v.jsx("line",{x1:"10",x2:"10",y1:"2",y2:"4"}),v.jsx("line",{x1:"14",x2:"14",y1:"2",y2:"4"})]})}const Wb=()=>{const[u,c]=C.useState(!1),s=ml();return C.useEffect(()=>{c(!1),window.scrollTo(0,0)},[s]),v.jsxs("div",{className:"min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-mint selection:text-slate-900",children:[v.jsxs("header",{className:"w-full max-w-3xl mx-auto px-6 py-8 md:py-12 flex justify-between items-center",children:[v.jsxs(Tu,{to:"/",className:"text-2xl font-extrabold tracking-tight hover:opacity-70 transition-opacity",children:["Whee",v.jsx("span",{className:"text-sky-500",children:"'s"})," Log",v.jsx("span",{className:"text-sky-500",children:"."})]}),v.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[nm.filter(r=>r.label!=="Home").map(r=>v.jsx(Tu,{to:r.path,className:({isActive:f})=>`text-[15px] font-medium transition-colors ${f?"text-slate-900 font-bold bg-gradient-to-r from-sky-200 to-sky-100 px-3 py-1 rounded-sm -skew-x-3":"text-slate-500 hover:text-slate-900"}`,children:r.label},r.path)),v.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"relative group text-slate-400 hover:text-sky-500 hover:scale-125 transition-all duration-200",children:[v.jsx(Id,{size:20}),v.jsx("span",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-slate-700 bg-sky-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg",children:"Hanwhee's GitHub"})]})]}),v.jsx("button",{className:"md:hidden text-slate-800 focus:outline-none",onClick:()=>c(!u),children:u?v.jsx(lm,{size:24}):v.jsx(qb,{size:24})})]}),u&&v.jsxs("div",{className:"md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6 flex flex-col",children:[v.jsx("div",{className:"flex justify-end mb-8",children:v.jsx("button",{onClick:()=>c(!1),children:v.jsx(lm,{size:28})})}),v.jsx("nav",{className:"flex flex-col space-y-6 text-center",children:nm.map(r=>v.jsx(Tu,{to:r.path,className:({isActive:f})=>`text-2xl font-bold ${f?"text-sky-600":"text-slate-800"}`,children:r.label},r.path))})]}),v.jsx("main",{className:"flex-grow w-full max-w-3xl mx-auto px-6 pb-20",children:v.jsx(zy,{})}),v.jsxs("footer",{className:"w-full max-w-3xl mx-auto px-6 py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400",children:[v.jsx("div",{children:"© 2025 Hanwhee Kim."}),v.jsx("div",{className:"flex gap-4",children:v.jsx("a",{href:"https://github.com/KimHanWhee",className:"hover:text-slate-600",children:v.jsx(Id,{size:16})})})]})]})},Fb=`---
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


이로써 매번 명령어를 쳐주지 않아도 main에 나의 블로그 코드를 푸시하면 자동으로 GitHub Pages에 배포를 해주는 환경이 구축되었다!`,Pb=`---
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
`,Ib=`---
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

JVM이 관리하는 프로그램에서 데이터를 저장하기 위해 런타임 시 동적으로 할당되는 공간이다. 객체, 배열 등이 저장되는 공간으로 어떤 참조 변수도 힙 영역에 있는 인스턴스를 참조하지 않는다면 가비지 컬렉터(GC, Garbage Collector)에 의해 메모리에서 제거된다.`,ev=`---
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

이렇게 객체 지향 프로그래밍에 관하여 간단하게 정리해보았다. `,tv=`---
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
`,lv=`---
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
        \`\`\``,nv=`---
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

위 처럼 구독을 취소한 옵저버(bottom)는 알림 대상에서 제외되어, 이벤트가 발생하여도 아무런 행동을 취하지 않는 것을 확인할 수 있다.`,av=`---
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
| **대표적인 예** | \`Flux.fromIterable()\`, \`Mono.just()\`, \`Flux.range()\` | \`Sinks\`, \`ConnectableFlux\`, \`share()\` |`,iv=`---
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

결국 시스템의 요구사항과 운영 환경을 고려하여 적절한 구성을 선택하는 것이 중요하다.`,uv=`---
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

**현재는 무조건 Quorum Queue 사용을 권장**한다고 한다. Mirrored Queue는 RabbitMQ 팀에서도 더 이상 권장하지 않는다고 하며, 향후 버전에서는 제거될 가능성이 높아 보인다.`;function Ar(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rn=Ar();function wm(u){rn=u}var Wa={exec:()=>null};function oe(u,c=""){let s=typeof u=="string"?u:u.source,r={replace:(f,h)=>{let p=typeof h=="string"?h:h.source;return p=p.replace(Ie.caret,"$1"),s=s.replace(f,p),r},getRegex:()=>new RegExp(s,c)};return r}var cv=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ie={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i")},sv=/^(?:[ \t]*(?:\n|$))+/,rv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ov=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ei=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,fv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Tr=/(?:[*+-]|\d{1,9}[.)])/,Dm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,jm=oe(Dm).replace(/bull/g,Tr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),hv=oe(Dm).replace(/bull/g,Tr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Rr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,dv=/^[^\n]+/,_r=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,mv=oe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",_r).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),pv=oe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Tr).getRegex(),ku="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,gv=oe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zr).replace("tag",ku).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Hm=oe(Rr).replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex(),yv=oe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Hm).getRegex(),Mr={blockquote:yv,code:rv,def:mv,fences:ov,heading:fv,hr:ei,html:gv,lheading:jm,list:pv,newline:sv,paragraph:Hm,table:Wa,text:dv},im=oe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex(),bv={...Mr,lheading:hv,table:im,paragraph:oe(Rr).replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",im).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ku).getRegex()},vv={...Mr,html:oe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Wa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:oe(Rr).replace("hr",ei).replace("heading",` *#{1,6} *[^
]`).replace("lheading",jm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},xv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Sv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Um=/^( {2,}|\\)\n(?!\s*$)/,Ev=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ou=/[\p{P}\p{S}]/u,Cr=/[\s\p{P}\p{S}]/u,Bm=/[^\s\p{P}\p{S}]/u,Av=oe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Cr).getRegex(),Gm=/(?!~)[\p{P}\p{S}]/u,Tv=/(?!~)[\s\p{P}\p{S}]/u,Rv=/(?:[^\s\p{P}\p{S}]|~)/u,_v=oe(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",cv?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),qm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,zv=oe(qm,"u").replace(/punct/g,Ou).getRegex(),Mv=oe(qm,"u").replace(/punct/g,Gm).getRegex(),Lm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Cv=oe(Lm,"gu").replace(/notPunctSpace/g,Bm).replace(/punctSpace/g,Cr).replace(/punct/g,Ou).getRegex(),Nv=oe(Lm,"gu").replace(/notPunctSpace/g,Rv).replace(/punctSpace/g,Tv).replace(/punct/g,Gm).getRegex(),kv=oe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Bm).replace(/punctSpace/g,Cr).replace(/punct/g,Ou).getRegex(),Ov=oe(/\\(punct)/,"gu").replace(/punct/g,Ou).getRegex(),wv=oe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Dv=oe(zr).replace("(?:-->|$)","-->").getRegex(),jv=oe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Dv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),_u=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Hv=oe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",_u).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Qm=oe(/^!?\[(label)\]\[(ref)\]/).replace("label",_u).replace("ref",_r).getRegex(),Ym=oe(/^!?\[(ref)\](?:\[\])?/).replace("ref",_r).getRegex(),Uv=oe("reflink|nolink(?!\\()","g").replace("reflink",Qm).replace("nolink",Ym).getRegex(),um=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Nr={_backpedal:Wa,anyPunctuation:Ov,autolink:wv,blockSkip:_v,br:Um,code:Sv,del:Wa,emStrongLDelim:zv,emStrongRDelimAst:Cv,emStrongRDelimUnd:kv,escape:xv,link:Hv,nolink:Ym,punctuation:Av,reflink:Qm,reflinkSearch:Uv,tag:jv,text:Ev,url:Wa},Bv={...Nr,link:oe(/^!?\[(label)\]\((.*?)\)/).replace("label",_u).getRegex(),reflink:oe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_u).getRegex()},hr={...Nr,emStrongRDelimAst:Nv,emStrongLDelim:Mv,url:oe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",um).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:oe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",um).getRegex()},Gv={...hr,br:oe(Um).replace("{2,}","*").getRegex(),text:oe(hr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xu={normal:Mr,gfm:bv,pedantic:vv},Ja={normal:Nr,gfm:hr,breaks:Gv,pedantic:Bv},qv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cm=u=>qv[u];function ol(u,c){if(c){if(Ie.escapeTest.test(u))return u.replace(Ie.escapeReplace,cm)}else if(Ie.escapeTestNoEncode.test(u))return u.replace(Ie.escapeReplaceNoEncode,cm);return u}function sm(u){try{u=encodeURI(u).replace(Ie.percentDecode,"%")}catch{return null}return u}function rm(u,c){var h;let s=u.replace(Ie.findPipe,(p,g,y)=>{let m=!1,E=g;for(;--E>=0&&y[E]==="\\";)m=!m;return m?"|":" |"}),r=s.split(Ie.splitPipe),f=0;if(r[0].trim()||r.shift(),r.length>0&&!((h=r.at(-1))!=null&&h.trim())&&r.pop(),c)if(r.length>c)r.splice(c);else for(;r.length<c;)r.push("");for(;f<r.length;f++)r[f]=r[f].trim().replace(Ie.slashPipe,"|");return r}function Ka(u,c,s){let r=u.length;if(r===0)return"";let f=0;for(;f<r&&u.charAt(r-f-1)===c;)f++;return u.slice(0,r-f)}function Lv(u,c){if(u.indexOf(c[1])===-1)return-1;let s=0;for(let r=0;r<u.length;r++)if(u[r]==="\\")r++;else if(u[r]===c[0])s++;else if(u[r]===c[1]&&(s--,s<0))return r;return s>0?-2:-1}function om(u,c,s,r,f){let h=c.href,p=c.title||null,g=u[1].replace(f.other.outputLinkReplace,"$1");r.state.inLink=!0;let y={type:u[0].charAt(0)==="!"?"image":"link",raw:s,href:h,title:p,text:g,tokens:r.inlineTokens(g)};return r.state.inLink=!1,y}function Qv(u,c,s){let r=u.match(s.other.indentCodeCompensation);if(r===null)return c;let f=r[1];return c.split(`
`).map(h=>{let p=h.match(s.other.beginningSpace);if(p===null)return h;let[g]=p;return g.length>=f.length?h.slice(f.length):h}).join(`
`)}var zu=class{constructor(u){Ae(this,"options");Ae(this,"rules");Ae(this,"lexer");this.options=u||rn}space(u){let c=this.rules.block.newline.exec(u);if(c&&c[0].length>0)return{type:"space",raw:c[0]}}code(u){let c=this.rules.block.code.exec(u);if(c){let s=c[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:c[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Ka(s,`
`)}}}fences(u){let c=this.rules.block.fences.exec(u);if(c){let s=c[0],r=Qv(s,c[3]||"",this.rules);return{type:"code",raw:s,lang:c[2]?c[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):c[2],text:r}}}heading(u){let c=this.rules.block.heading.exec(u);if(c){let s=c[2].trim();if(this.rules.other.endingHash.test(s)){let r=Ka(s,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(s=r.trim())}return{type:"heading",raw:c[0],depth:c[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(u){let c=this.rules.block.hr.exec(u);if(c)return{type:"hr",raw:Ka(c[0],`
`)}}blockquote(u){let c=this.rules.block.blockquote.exec(u);if(c){let s=Ka(c[0],`
`).split(`
`),r="",f="",h=[];for(;s.length>0;){let p=!1,g=[],y;for(y=0;y<s.length;y++)if(this.rules.other.blockquoteStart.test(s[y]))g.push(s[y]),p=!0;else if(!p)g.push(s[y]);else break;s=s.slice(y);let m=g.join(`
`),E=m.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${m}`:m,f=f?`${f}
${E}`:E;let A=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,h,!0),this.lexer.state.top=A,s.length===0)break;let O=h.at(-1);if((O==null?void 0:O.type)==="code")break;if((O==null?void 0:O.type)==="blockquote"){let N=O,L=N.raw+`
`+s.join(`
`),U=this.blockquote(L);h[h.length-1]=U,r=r.substring(0,r.length-N.raw.length)+U.raw,f=f.substring(0,f.length-N.text.length)+U.text;break}else if((O==null?void 0:O.type)==="list"){let N=O,L=N.raw+`
`+s.join(`
`),U=this.list(L);h[h.length-1]=U,r=r.substring(0,r.length-O.raw.length)+U.raw,f=f.substring(0,f.length-N.raw.length)+U.raw,s=L.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:h,text:f}}}list(u){var s,r;let c=this.rules.block.list.exec(u);if(c){let f=c[1].trim(),h=f.length>1,p={type:"list",raw:"",ordered:h,start:h?+f.slice(0,-1):"",loose:!1,items:[]};f=h?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=h?f:"[*+-]");let g=this.rules.other.listItemRegex(f),y=!1;for(;u;){let E=!1,A="",O="";if(!(c=g.exec(u))||this.rules.block.hr.test(u))break;A=c[0],u=u.substring(A.length);let N=c[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,X=>" ".repeat(3*X.length)),L=u.split(`
`,1)[0],U=!N.trim(),B=0;if(this.options.pedantic?(B=2,O=N.trimStart()):U?B=c[1].length+1:(B=c[2].search(this.rules.other.nonSpaceChar),B=B>4?1:B,O=N.slice(B),B+=c[1].length),U&&this.rules.other.blankLine.test(L)&&(A+=L+`
`,u=u.substring(L.length+1),E=!0),!E){let X=this.rules.other.nextBulletRegex(B),K=this.rules.other.hrRegex(B),Q=this.rules.other.fencesBeginRegex(B),he=this.rules.other.headingBeginRegex(B),de=this.rules.other.htmlBeginRegex(B);for(;u;){let be=u.split(`
`,1)[0],W;if(L=be,this.options.pedantic?(L=L.replace(this.rules.other.listReplaceNesting,"  "),W=L):W=L.replace(this.rules.other.tabCharGlobal,"    "),Q.test(L)||he.test(L)||de.test(L)||X.test(L)||K.test(L))break;if(W.search(this.rules.other.nonSpaceChar)>=B||!L.trim())O+=`
`+W.slice(B);else{if(U||N.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Q.test(N)||he.test(N)||K.test(N))break;O+=`
`+L}!U&&!L.trim()&&(U=!0),A+=be+`
`,u=u.substring(be.length+1),N=W.slice(B)}}p.loose||(y?p.loose=!0:this.rules.other.doubleBlankLine.test(A)&&(y=!0)),p.items.push({type:"list_item",raw:A,task:!!this.options.gfm&&this.rules.other.listIsTask.test(O),loose:!1,text:O,tokens:[]}),p.raw+=A}let m=p.items.at(-1);if(m)m.raw=m.raw.trimEnd(),m.text=m.text.trimEnd();else return;p.raw=p.raw.trimEnd();for(let E of p.items){if(this.lexer.state.top=!1,E.tokens=this.lexer.blockTokens(E.text,[]),E.task){if(E.text=E.text.replace(this.rules.other.listReplaceTask,""),((s=E.tokens[0])==null?void 0:s.type)==="text"||((r=E.tokens[0])==null?void 0:r.type)==="paragraph"){E.tokens[0].raw=E.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),E.tokens[0].text=E.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let O=this.lexer.inlineQueue.length-1;O>=0;O--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[O].src)){this.lexer.inlineQueue[O].src=this.lexer.inlineQueue[O].src.replace(this.rules.other.listReplaceTask,"");break}}let A=this.rules.other.listTaskCheckbox.exec(E.raw);if(A){let O={type:"checkbox",raw:A[0]+" ",checked:A[0]!=="[ ]"};E.checked=O.checked,p.loose?E.tokens[0]&&["paragraph","text"].includes(E.tokens[0].type)&&"tokens"in E.tokens[0]&&E.tokens[0].tokens?(E.tokens[0].raw=O.raw+E.tokens[0].raw,E.tokens[0].text=O.raw+E.tokens[0].text,E.tokens[0].tokens.unshift(O)):E.tokens.unshift({type:"paragraph",raw:O.raw,text:O.raw,tokens:[O]}):E.tokens.unshift(O)}}if(!p.loose){let A=E.tokens.filter(N=>N.type==="space"),O=A.length>0&&A.some(N=>this.rules.other.anyLine.test(N.raw));p.loose=O}}if(p.loose)for(let E of p.items){E.loose=!0;for(let A of E.tokens)A.type==="text"&&(A.type="paragraph")}return p}}html(u){let c=this.rules.block.html.exec(u);if(c)return{type:"html",block:!0,raw:c[0],pre:c[1]==="pre"||c[1]==="script"||c[1]==="style",text:c[0]}}def(u){let c=this.rules.block.def.exec(u);if(c){let s=c[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=c[2]?c[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",f=c[3]?c[3].substring(1,c[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):c[3];return{type:"def",tag:s,raw:c[0],href:r,title:f}}}table(u){var p;let c=this.rules.block.table.exec(u);if(!c||!this.rules.other.tableDelimiter.test(c[2]))return;let s=rm(c[1]),r=c[2].replace(this.rules.other.tableAlignChars,"").split("|"),f=(p=c[3])!=null&&p.trim()?c[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:c[0],header:[],align:[],rows:[]};if(s.length===r.length){for(let g of r)this.rules.other.tableAlignRight.test(g)?h.align.push("right"):this.rules.other.tableAlignCenter.test(g)?h.align.push("center"):this.rules.other.tableAlignLeft.test(g)?h.align.push("left"):h.align.push(null);for(let g=0;g<s.length;g++)h.header.push({text:s[g],tokens:this.lexer.inline(s[g]),header:!0,align:h.align[g]});for(let g of f)h.rows.push(rm(g,h.header.length).map((y,m)=>({text:y,tokens:this.lexer.inline(y),header:!1,align:h.align[m]})));return h}}lheading(u){let c=this.rules.block.lheading.exec(u);if(c)return{type:"heading",raw:c[0],depth:c[2].charAt(0)==="="?1:2,text:c[1],tokens:this.lexer.inline(c[1])}}paragraph(u){let c=this.rules.block.paragraph.exec(u);if(c){let s=c[1].charAt(c[1].length-1)===`
`?c[1].slice(0,-1):c[1];return{type:"paragraph",raw:c[0],text:s,tokens:this.lexer.inline(s)}}}text(u){let c=this.rules.block.text.exec(u);if(c)return{type:"text",raw:c[0],text:c[0],tokens:this.lexer.inline(c[0])}}escape(u){let c=this.rules.inline.escape.exec(u);if(c)return{type:"escape",raw:c[0],text:c[1]}}tag(u){let c=this.rules.inline.tag.exec(u);if(c)return!this.lexer.state.inLink&&this.rules.other.startATag.test(c[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(c[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(c[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(c[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:c[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:c[0]}}link(u){let c=this.rules.inline.link.exec(u);if(c){let s=c[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let h=Ka(s.slice(0,-1),"\\");if((s.length-h.length)%2===0)return}else{let h=Lv(c[2],"()");if(h===-2)return;if(h>-1){let p=(c[0].indexOf("!")===0?5:4)+c[1].length+h;c[2]=c[2].substring(0,h),c[0]=c[0].substring(0,p).trim(),c[3]=""}}let r=c[2],f="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(r);h&&(r=h[1],f=h[3])}else f=c[3]?c[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?r=r.slice(1):r=r.slice(1,-1)),om(c,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:f&&f.replace(this.rules.inline.anyPunctuation,"$1")},c[0],this.lexer,this.rules)}}reflink(u,c){let s;if((s=this.rules.inline.reflink.exec(u))||(s=this.rules.inline.nolink.exec(u))){let r=(s[2]||s[1]).replace(this.rules.other.multipleSpaceGlobal," "),f=c[r.toLowerCase()];if(!f){let h=s[0].charAt(0);return{type:"text",raw:h,text:h}}return om(s,f,s[0],this.lexer,this.rules)}}emStrong(u,c,s=""){let r=this.rules.inline.emStrongLDelim.exec(u);if(!(!r||r[3]&&s.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!s||this.rules.inline.punctuation.exec(s))){let f=[...r[0]].length-1,h,p,g=f,y=0,m=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,c=c.slice(-1*u.length+f);(r=m.exec(c))!=null;){if(h=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!h)continue;if(p=[...h].length,r[3]||r[4]){g+=p;continue}else if((r[5]||r[6])&&f%3&&!((f+p)%3)){y+=p;continue}if(g-=p,g>0)continue;p=Math.min(p,p+g+y);let E=[...r[0]][0].length,A=u.slice(0,f+r.index+E+p);if(Math.min(f,p)%2){let N=A.slice(1,-1);return{type:"em",raw:A,text:N,tokens:this.lexer.inlineTokens(N)}}let O=A.slice(2,-2);return{type:"strong",raw:A,text:O,tokens:this.lexer.inlineTokens(O)}}}}codespan(u){let c=this.rules.inline.code.exec(u);if(c){let s=c[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(s),f=this.rules.other.startingSpaceChar.test(s)&&this.rules.other.endingSpaceChar.test(s);return r&&f&&(s=s.substring(1,s.length-1)),{type:"codespan",raw:c[0],text:s}}}br(u){let c=this.rules.inline.br.exec(u);if(c)return{type:"br",raw:c[0]}}del(u){let c=this.rules.inline.del.exec(u);if(c)return{type:"del",raw:c[0],text:c[2],tokens:this.lexer.inlineTokens(c[2])}}autolink(u){let c=this.rules.inline.autolink.exec(u);if(c){let s,r;return c[2]==="@"?(s=c[1],r="mailto:"+s):(s=c[1],r=s),{type:"link",raw:c[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(u){var s;let c;if(c=this.rules.inline.url.exec(u)){let r,f;if(c[2]==="@")r=c[0],f="mailto:"+r;else{let h;do h=c[0],c[0]=((s=this.rules.inline._backpedal.exec(c[0]))==null?void 0:s[0])??"";while(h!==c[0]);r=c[0],c[1]==="www."?f="http://"+c[0]:f=c[0]}return{type:"link",raw:c[0],text:r,href:f,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(u){let c=this.rules.inline.text.exec(u);if(c){let s=this.lexer.state.inRawBlock;return{type:"text",raw:c[0],text:c[0],escaped:s}}}},Ht=class dr{constructor(c){Ae(this,"tokens");Ae(this,"options");Ae(this,"state");Ae(this,"inlineQueue");Ae(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=c||rn,this.options.tokenizer=this.options.tokenizer||new zu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let s={other:Ie,block:xu.normal,inline:Ja.normal};this.options.pedantic?(s.block=xu.pedantic,s.inline=Ja.pedantic):this.options.gfm&&(s.block=xu.gfm,this.options.breaks?s.inline=Ja.breaks:s.inline=Ja.gfm),this.tokenizer.rules=s}static get rules(){return{block:xu,inline:Ja}}static lex(c,s){return new dr(s).lex(c)}static lexInline(c,s){return new dr(s).inlineTokens(c)}lex(c){c=c.replace(Ie.carriageReturn,`
`),this.blockTokens(c,this.tokens);for(let s=0;s<this.inlineQueue.length;s++){let r=this.inlineQueue[s];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(c,s=[],r=!1){var f,h,p;for(this.options.pedantic&&(c=c.replace(Ie.tabCharGlobal,"    ").replace(Ie.spaceLine,""));c;){let g;if((h=(f=this.options.extensions)==null?void 0:f.block)!=null&&h.some(m=>(g=m.call({lexer:this},c,s))?(c=c.substring(g.raw.length),s.push(g),!0):!1))continue;if(g=this.tokenizer.space(c)){c=c.substring(g.raw.length);let m=s.at(-1);g.raw.length===1&&m!==void 0?m.raw+=`
`:s.push(g);continue}if(g=this.tokenizer.code(c)){c=c.substring(g.raw.length);let m=s.at(-1);(m==null?void 0:m.type)==="paragraph"||(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.at(-1).src=m.text):s.push(g);continue}if(g=this.tokenizer.fences(c)){c=c.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.heading(c)){c=c.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.hr(c)){c=c.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.blockquote(c)){c=c.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.list(c)){c=c.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.html(c)){c=c.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.def(c)){c=c.substring(g.raw.length);let m=s.at(-1);(m==null?void 0:m.type)==="paragraph"||(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.raw,this.inlineQueue.at(-1).src=m.text):this.tokens.links[g.tag]||(this.tokens.links[g.tag]={href:g.href,title:g.title},s.push(g));continue}if(g=this.tokenizer.table(c)){c=c.substring(g.raw.length),s.push(g);continue}if(g=this.tokenizer.lheading(c)){c=c.substring(g.raw.length),s.push(g);continue}let y=c;if((p=this.options.extensions)!=null&&p.startBlock){let m=1/0,E=c.slice(1),A;this.options.extensions.startBlock.forEach(O=>{A=O.call({lexer:this},E),typeof A=="number"&&A>=0&&(m=Math.min(m,A))}),m<1/0&&m>=0&&(y=c.substring(0,m+1))}if(this.state.top&&(g=this.tokenizer.paragraph(y))){let m=s.at(-1);r&&(m==null?void 0:m.type)==="paragraph"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):s.push(g),r=y.length!==c.length,c=c.substring(g.raw.length);continue}if(g=this.tokenizer.text(c)){c=c.substring(g.raw.length);let m=s.at(-1);(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):s.push(g);continue}if(c){let m="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,s}inline(c,s=[]){return this.inlineQueue.push({src:c,tokens:s}),s}inlineTokens(c,s=[]){var y,m,E,A,O;let r=c,f=null;if(this.tokens.links){let N=Object.keys(this.tokens.links);if(N.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)N.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,f.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let h;for(;(f=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)h=f[2]?f[2].length:0,r=r.slice(0,f.index+h)+"["+"a".repeat(f[0].length-h-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=((m=(y=this.options.hooks)==null?void 0:y.emStrongMask)==null?void 0:m.call({lexer:this},r))??r;let p=!1,g="";for(;c;){p||(g=""),p=!1;let N;if((A=(E=this.options.extensions)==null?void 0:E.inline)!=null&&A.some(U=>(N=U.call({lexer:this},c,s))?(c=c.substring(N.raw.length),s.push(N),!0):!1))continue;if(N=this.tokenizer.escape(c)){c=c.substring(N.raw.length),s.push(N);continue}if(N=this.tokenizer.tag(c)){c=c.substring(N.raw.length),s.push(N);continue}if(N=this.tokenizer.link(c)){c=c.substring(N.raw.length),s.push(N);continue}if(N=this.tokenizer.reflink(c,this.tokens.links)){c=c.substring(N.raw.length);let U=s.at(-1);N.type==="text"&&(U==null?void 0:U.type)==="text"?(U.raw+=N.raw,U.text+=N.text):s.push(N);continue}if(N=this.tokenizer.emStrong(c,r,g)){c=c.substring(N.raw.length),s.push(N);continue}if(N=this.tokenizer.codespan(c)){c=c.substring(N.raw.length),s.push(N);continue}if(N=this.tokenizer.br(c)){c=c.substring(N.raw.length),s.push(N);continue}if(N=this.tokenizer.del(c)){c=c.substring(N.raw.length),s.push(N);continue}if(N=this.tokenizer.autolink(c)){c=c.substring(N.raw.length),s.push(N);continue}if(!this.state.inLink&&(N=this.tokenizer.url(c))){c=c.substring(N.raw.length),s.push(N);continue}let L=c;if((O=this.options.extensions)!=null&&O.startInline){let U=1/0,B=c.slice(1),X;this.options.extensions.startInline.forEach(K=>{X=K.call({lexer:this},B),typeof X=="number"&&X>=0&&(U=Math.min(U,X))}),U<1/0&&U>=0&&(L=c.substring(0,U+1))}if(N=this.tokenizer.inlineText(L)){c=c.substring(N.raw.length),N.raw.slice(-1)!=="_"&&(g=N.raw.slice(-1)),p=!0;let U=s.at(-1);(U==null?void 0:U.type)==="text"?(U.raw+=N.raw,U.text+=N.text):s.push(N);continue}if(c){let U="Infinite loop on byte: "+c.charCodeAt(0);if(this.options.silent){console.error(U);break}else throw new Error(U)}}return s}},Mu=class{constructor(u){Ae(this,"options");Ae(this,"parser");this.options=u||rn}space(u){return""}code({text:u,lang:c,escaped:s}){var h;let r=(h=(c||"").match(Ie.notSpaceStart))==null?void 0:h[0],f=u.replace(Ie.endingNewline,"")+`
`;return r?'<pre><code class="language-'+ol(r)+'">'+(s?f:ol(f,!0))+`</code></pre>
`:"<pre><code>"+(s?f:ol(f,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}def(u){return""}heading({tokens:u,depth:c}){return`<h${c}>${this.parser.parseInline(u)}</h${c}>
`}hr(u){return`<hr>
`}list(u){let c=u.ordered,s=u.start,r="";for(let p=0;p<u.items.length;p++){let g=u.items[p];r+=this.listitem(g)}let f=c?"ol":"ul",h=c&&s!==1?' start="'+s+'"':"";return"<"+f+h+`>
`+r+"</"+f+`>
`}listitem(u){return`<li>${this.parser.parse(u.tokens)}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let c="",s="";for(let f=0;f<u.header.length;f++)s+=this.tablecell(u.header[f]);c+=this.tablerow({text:s});let r="";for(let f=0;f<u.rows.length;f++){let h=u.rows[f];s="";for(let p=0;p<h.length;p++)s+=this.tablecell(h[p]);r+=this.tablerow({text:s})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+c+`</thead>
`+r+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){let c=this.parser.parseInline(u.tokens),s=u.header?"th":"td";return(u.align?`<${s} align="${u.align}">`:`<${s}>`)+c+`</${s}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${ol(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:c,tokens:s}){let r=this.parser.parseInline(s),f=sm(u);if(f===null)return r;u=f;let h='<a href="'+u+'"';return c&&(h+=' title="'+ol(c)+'"'),h+=">"+r+"</a>",h}image({href:u,title:c,text:s,tokens:r}){r&&(s=this.parser.parseInline(r,this.parser.textRenderer));let f=sm(u);if(f===null)return ol(s);u=f;let h=`<img src="${u}" alt="${s}"`;return c&&(h+=` title="${ol(c)}"`),h+=">",h}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:ol(u.text)}},kr=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}checkbox({raw:u}){return u}},Ut=class mr{constructor(c){Ae(this,"options");Ae(this,"renderer");Ae(this,"textRenderer");this.options=c||rn,this.options.renderer=this.options.renderer||new Mu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new kr}static parse(c,s){return new mr(s).parse(c)}static parseInline(c,s){return new mr(s).parseInline(c)}parse(c){var r,f;let s="";for(let h=0;h<c.length;h++){let p=c[h];if((f=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&f[p.type]){let y=p,m=this.options.extensions.renderers[y.type].call({parser:this},y);if(m!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(y.type)){s+=m||"";continue}}let g=p;switch(g.type){case"space":{s+=this.renderer.space(g);break}case"hr":{s+=this.renderer.hr(g);break}case"heading":{s+=this.renderer.heading(g);break}case"code":{s+=this.renderer.code(g);break}case"table":{s+=this.renderer.table(g);break}case"blockquote":{s+=this.renderer.blockquote(g);break}case"list":{s+=this.renderer.list(g);break}case"checkbox":{s+=this.renderer.checkbox(g);break}case"html":{s+=this.renderer.html(g);break}case"def":{s+=this.renderer.def(g);break}case"paragraph":{s+=this.renderer.paragraph(g);break}case"text":{s+=this.renderer.text(g);break}default:{let y='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(y),"";throw new Error(y)}}}return s}parseInline(c,s=this.renderer){var f,h;let r="";for(let p=0;p<c.length;p++){let g=c[p];if((h=(f=this.options.extensions)==null?void 0:f.renderers)!=null&&h[g.type]){let m=this.options.extensions.renderers[g.type].call({parser:this},g);if(m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(g.type)){r+=m||"";continue}}let y=g;switch(y.type){case"escape":{r+=s.text(y);break}case"html":{r+=s.html(y);break}case"link":{r+=s.link(y);break}case"image":{r+=s.image(y);break}case"checkbox":{r+=s.checkbox(y);break}case"strong":{r+=s.strong(y);break}case"em":{r+=s.em(y);break}case"codespan":{r+=s.codespan(y);break}case"br":{r+=s.br(y);break}case"del":{r+=s.del(y);break}case"text":{r+=s.text(y);break}default:{let m='Token with "'+y.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return r}},Su,$a=(Su=class{constructor(u){Ae(this,"options");Ae(this,"block");this.options=u||rn}preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}emStrongMask(u){return u}provideLexer(){return this.block?Ht.lex:Ht.lexInline}provideParser(){return this.block?Ut.parse:Ut.parseInline}},Ae(Su,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Ae(Su,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Su),Yv=class{constructor(...u){Ae(this,"defaults",Ar());Ae(this,"options",this.setOptions);Ae(this,"parse",this.parseMarkdown(!0));Ae(this,"parseInline",this.parseMarkdown(!1));Ae(this,"Parser",Ut);Ae(this,"Renderer",Mu);Ae(this,"TextRenderer",kr);Ae(this,"Lexer",Ht);Ae(this,"Tokenizer",zu);Ae(this,"Hooks",$a);this.use(...u)}walkTokens(u,c){var r,f;let s=[];for(let h of u)switch(s=s.concat(c.call(this,h)),h.type){case"table":{let p=h;for(let g of p.header)s=s.concat(this.walkTokens(g.tokens,c));for(let g of p.rows)for(let y of g)s=s.concat(this.walkTokens(y.tokens,c));break}case"list":{let p=h;s=s.concat(this.walkTokens(p.items,c));break}default:{let p=h;(f=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&f[p.type]?this.defaults.extensions.childTokens[p.type].forEach(g=>{let y=p[g].flat(1/0);s=s.concat(this.walkTokens(y,c))}):p.tokens&&(s=s.concat(this.walkTokens(p.tokens,c)))}}return s}use(...u){let c=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(s=>{let r={...s};if(r.async=this.defaults.async||r.async||!1,s.extensions&&(s.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){let h=c.renderers[f.name];h?c.renderers[f.name]=function(...p){let g=f.renderer.apply(this,p);return g===!1&&(g=h.apply(this,p)),g}:c.renderers[f.name]=f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=c[f.level];h?h.unshift(f.tokenizer):c[f.level]=[f.tokenizer],f.start&&(f.level==="block"?c.startBlock?c.startBlock.push(f.start):c.startBlock=[f.start]:f.level==="inline"&&(c.startInline?c.startInline.push(f.start):c.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(c.childTokens[f.name]=f.childTokens)}),r.extensions=c),s.renderer){let f=this.defaults.renderer||new Mu(this.defaults);for(let h in s.renderer){if(!(h in f))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let p=h,g=s.renderer[p],y=f[p];f[p]=(...m)=>{let E=g.apply(f,m);return E===!1&&(E=y.apply(f,m)),E||""}}r.renderer=f}if(s.tokenizer){let f=this.defaults.tokenizer||new zu(this.defaults);for(let h in s.tokenizer){if(!(h in f))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let p=h,g=s.tokenizer[p],y=f[p];f[p]=(...m)=>{let E=g.apply(f,m);return E===!1&&(E=y.apply(f,m)),E}}r.tokenizer=f}if(s.hooks){let f=this.defaults.hooks||new $a;for(let h in s.hooks){if(!(h in f))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let p=h,g=s.hooks[p],y=f[p];$a.passThroughHooks.has(h)?f[p]=m=>{if(this.defaults.async&&$a.passThroughHooksRespectAsync.has(h))return(async()=>{let A=await g.call(f,m);return y.call(f,A)})();let E=g.call(f,m);return y.call(f,E)}:f[p]=(...m)=>{if(this.defaults.async)return(async()=>{let A=await g.apply(f,m);return A===!1&&(A=await y.apply(f,m)),A})();let E=g.apply(f,m);return E===!1&&(E=y.apply(f,m)),E}}r.hooks=f}if(s.walkTokens){let f=this.defaults.walkTokens,h=s.walkTokens;r.walkTokens=function(p){let g=[];return g.push(h.call(this,p)),f&&(g=g.concat(f.call(this,p))),g}}this.defaults={...this.defaults,...r}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,c){return Ht.lex(u,c??this.defaults)}parser(u,c){return Ut.parse(u,c??this.defaults)}parseMarkdown(u){return(c,s)=>{let r={...s},f={...this.defaults,...r},h=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&r.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof c>"u"||c===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof c!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(c)+", string expected"));if(f.hooks&&(f.hooks.options=f,f.hooks.block=u),f.async)return(async()=>{let p=f.hooks?await f.hooks.preprocess(c):c,g=await(f.hooks?await f.hooks.provideLexer():u?Ht.lex:Ht.lexInline)(p,f),y=f.hooks?await f.hooks.processAllTokens(g):g;f.walkTokens&&await Promise.all(this.walkTokens(y,f.walkTokens));let m=await(f.hooks?await f.hooks.provideParser():u?Ut.parse:Ut.parseInline)(y,f);return f.hooks?await f.hooks.postprocess(m):m})().catch(h);try{f.hooks&&(c=f.hooks.preprocess(c));let p=(f.hooks?f.hooks.provideLexer():u?Ht.lex:Ht.lexInline)(c,f);f.hooks&&(p=f.hooks.processAllTokens(p)),f.walkTokens&&this.walkTokens(p,f.walkTokens);let g=(f.hooks?f.hooks.provideParser():u?Ut.parse:Ut.parseInline)(p,f);return f.hooks&&(g=f.hooks.postprocess(g)),g}catch(p){return h(p)}}}onError(u,c){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,u){let r="<p>An error occurred:</p><pre>"+ol(s.message+"",!0)+"</pre>";return c?Promise.resolve(r):r}if(c)return Promise.reject(s);throw s}}},cn=new Yv;function ye(u,c){return cn.parse(u,c)}ye.options=ye.setOptions=function(u){return cn.setOptions(u),ye.defaults=cn.defaults,wm(ye.defaults),ye};ye.getDefaults=Ar;ye.defaults=rn;ye.use=function(...u){return cn.use(...u),ye.defaults=cn.defaults,wm(ye.defaults),ye};ye.walkTokens=function(u,c){return cn.walkTokens(u,c)};ye.parseInline=cn.parseInline;ye.Parser=Ut;ye.parser=Ut.parse;ye.Renderer=Mu;ye.TextRenderer=kr;ye.Lexer=Ht;ye.lexer=Ht.lex;ye.Tokenizer=zu;ye.Hooks=$a;ye.parse=ye;ye.options;ye.setOptions;ye.use;ye.walkTokens;ye.parseInline;Ut.parse;Ht.lex;const Xv=Object.assign({"/post/2025-02-05-React로_개발된_Github_Blog_배포_방법.md":Fb,"/post/2025-10-27-Base64.md":Pb,"/post/2025-11-12-JAVA_프로그램이_실행되는_과정.md":Ib,"/post/2025-11-19-OOP.md":ev,"/post/2025-11-23-Garbage_Collection.md":tv,"/post/2025-12-10-IoC_DI.md":lv,"/post/2025-12-13-observer_pattern.md":nv,"/post/2025-12-20-reactive-programming.md":av,"/post/2026-01-10-RabbitMq_Clustering.md":iv,"/post/2026-01-14-mirror_queue_vs_quorum_queue.md":uv});function fm(u){var r;const c=((r=u.split("/").pop())==null?void 0:r.replace(".md",""))||"",s=c.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);return s?{date:s[1],slug:s[2]}:{date:"",slug:c}}function hm(u){return u.replace(/-/g,".")}function Zv(u){const c=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,s=u.match(c);if(!s)return{data:{title:"",description:"",date:"",tags:[]},content:u};const[,r,f]=s,h={title:"",description:"",date:"",tags:[]},p=r.split(/\r?\n/);for(const g of p){const y=g.indexOf(":");if(y===-1)continue;const m=g.slice(0,y).trim();let E=g.slice(y+1).trim();if((E.startsWith('"')&&E.endsWith('"')||E.startsWith("'")&&E.endsWith("'"))&&(E=E.slice(1,-1)),m==="title")h.title=E;else if(m==="description")h.description=E;else if(m==="date")h.date=E;else if(m==="tags"){const A=E.match(/\[(.*)\]/);A&&(h.tags=A[1].split(",").map(O=>O.trim().replace(/^["']|["']$/g,"")))}}return{data:h,content:f}}function Vv(u,c){const{data:s,content:r}=Zv(c),{slug:f}=fm(u),h=ye(r),p=s.date?hm(s.date.replace(/"/g,"")):hm(fm(u).date);return{id:f,title:s.title||f,description:s.description||"",date:p,tags:s.tags||[],content:h}}let cr=null;function Or(){if(cr)return cr;const u=[];for(const[c,s]of Object.entries(Xv))try{const r=Vv(c,s);u.push(r)}catch(r){console.error(`Failed to parse post: ${c}`,r)}return u.sort((c,s)=>{const r=c.date.replace(/\./g,"-");return s.date.replace(/\./g,"-").localeCompare(r)}),cr=u,u}function Jv(u){return Or().find(s=>s.id===u)}const Kv=()=>{const u=Or().slice(0,4);return v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("section",{className:"mb-16",children:[v.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight",children:["BackEnd Developer Hanwhee",v.jsx("span",{className:"inline-block animate-[bounce_2s_infinite]",children:"😎"})]}),v.jsxs("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed",children:[v.jsxs("p",{children:["안녕하세요! ",v.jsx("span",{className:"font-bold text-slate-900 bg-mint px-1",children:"백엔드 개발자 김한휘"}),"입니다!"]}),v.jsx("p",{children:"스탠다드네트웍스에서 3년간 근무하며 대용량 트래픽 환경에서 자라며 MSA 설계부터 개발, 운영까지 경험하며 성장해왔어요."}),v.jsx("p",{children:"서비스 불편한 거 하나씩 고칠 때마다 희열을 느끼는 타입입니다🔥🔥🔥"})]})]}),v.jsxs("section",{className:"mb-20",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[v.jsx("span",{className:"text-2xl",children:"🌱"}),v.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"My Career"})]}),v.jsxs("div",{className:"flex flex-col",children:[fr.map((c,s)=>v.jsxs("div",{className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${s!==fr.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[v.jsx("div",{className:"mb-2 md:mb-0",children:v.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:c.title.split("(")[0]})}),v.jsxs("div",{className:"flex flex-col md:items-end text-slate-500 text-sm md:text-base",children:[v.jsx("span",{className:"font-medium text-slate-700",children:c.role}),v.jsx("span",{className:"text-xs md:text-sm font-mono mt-1 text-slate-400",children:c.period})]})]},c.id)),v.jsx("div",{className:"flex flex-col md:flex-row md:justify-between md:items-baseline py-5 border-t border-slate-100 px-2 -mx-2 text-slate-400",children:v.jsx("div",{children:v.jsx("h3",{className:"text-lg font-bold",children:"... To Be Continued..."})})})]})]}),u.length>0&&v.jsxs("section",{className:"mb-20",children:[v.jsxs("div",{className:"flex items-center justify-between mb-8",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"text-2xl",children:"📝"}),v.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"Recent Posts"})]}),v.jsxs(fl,{to:"/blog",className:"text-sm text-slate-500 hover:text-sky-600 flex items-center gap-1 transition-colors",children:["전체보기 ",v.jsx(ur,{size:14})]})]}),v.jsx("div",{className:"flex flex-col",children:u.map((c,s)=>v.jsxs(fl,{to:`/blog/${c.id}`,className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${s!==u.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[v.jsxs("div",{className:"mb-2 md:mb-0 flex-1",children:[v.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:c.title}),v.jsx("p",{className:"text-sm text-slate-500 mt-1 line-clamp-1",children:c.description})]}),v.jsx("div",{className:"text-xs font-mono text-slate-400 md:ml-4",children:c.date})]},c.id))})]}),v.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[v.jsxs(fl,{to:"/skills",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[v.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Skills ",v.jsx(ur,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),v.jsx("p",{className:"text-sm text-slate-500",children:"지금까지 써본 기술들과 개발 환경 정리해봤어요 🛠️"})]}),v.jsxs(fl,{to:"/education",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[v.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Education ",v.jsx(ur,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),v.jsx("p",{className:"text-sm text-slate-500",children:"개발자로 성장하기 위해 공부하고 수료한 교육 과정들이에요 📚"})]})]})]})},$v=()=>v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12",children:["Work Experience ",v.jsx("span",{className:"text-sky-400",children:"."})]}),v.jsx("div",{className:"space-y-16",children:fr.map(u=>v.jsxs("div",{className:"relative border-l-2 border-slate-100 pl-6 md:pl-8 ml-2",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2",children:[v.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900",children:u.title}),v.jsx("span",{className:"font-mono text-sm text-slate-400 mt-1 sm:mt-0 whitespace-nowrap",children:u.period})]}),v.jsx("div",{className:"text-lg font-medium text-slate-700 mb-4",children:u.role}),v.jsx("p",{className:"text-slate-600 leading-relaxed mb-6 max-w-2xl",children:u.description}),v.jsx("div",{className:"mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm font-mono text-slate-500",children:u.techStack.map((c,s)=>v.jsxs("span",{className:"bg-slate-50 px-1.5 rounded text-slate-600",children:["#",c]},c))}),v.jsx("ul",{className:"space-y-2 text-slate-600 list-disc list-outside pl-4",children:u.keyAchievements.map((c,s)=>v.jsx("li",{className:"pl-1 marker:text-sky-300",children:c},s))})]},u.id))})]}),Wv=()=>v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Skills ",v.jsx("span",{className:"text-sky-400",children:"."})]}),v.jsx("p",{className:"text-slate-500 mb-12",children:"지금까지 사용해본 기술들입니다."}),v.jsx("div",{className:"space-y-12",children:Kb.map(u=>v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-6 bg-sky-50 inline-block px-2 py-0.5 rounded-md",children:u.category}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6",children:u.items.map(c=>v.jsx("div",{className:"flex flex-col",children:v.jsx("div",{className:"flex items-center justify-between mb-1",children:v.jsx("span",{className:"font-bold text-slate-800 text-lg",children:c.name})})},c.name))}),v.jsx("hr",{className:"mt-10 border-slate-100"})]},u.category))})]}),Fv=()=>{const u=am.filter(s=>s.category==="Education"),c=am.filter(s=>s.category==="Certification");return v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-12",children:"Education & Certs"}),v.jsx("p",{className:"text-slate-500 mb-12",children:"제가 해낸 교육과정/자격증 입니다."}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Education"}),v.jsx("div",{className:"space-y-10",children:u.map((s,r)=>v.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8",children:[v.jsx("div",{className:"md:w-32 flex-shrink-0 mb-1 md:mb-0",children:v.jsx("span",{className:"font-mono text-sm text-slate-400",children:s.period})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-bold text-slate-900",children:v.jsx("a",{href:s.link,className:"hover:underline",children:s.institution})}),v.jsx("div",{className:"text-slate-700 font-medium mb-3",children:s.degree}),v.jsx("ul",{className:"text-slate-600 text-sm space-y-1 list-disc list-outside pl-4",children:s.details.map((f,h)=>v.jsx("li",{children:f},h))})]})]},r))})]}),v.jsxs("section",{children:[v.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Certifications"}),v.jsx("div",{className:"space-y-6",children:c.map((s,r)=>v.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8 items-start",children:[v.jsx("div",{className:"md:w-32 flex-shrink-0",children:v.jsx("span",{className:"font-mono text-sm text-slate-400",children:s.period})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-slate-900",children:s.institution}),v.jsx("p",{className:"text-slate-600",children:s.details[0]})]})]},r))})]})]})},sr=5,Pv=()=>{const u=Or(),[c,s]=C.useState(1),r=Math.ceil(u.length/sr),f=(c-1)*sr,h=u.slice(f,f+sr),p=()=>{s(m=>Math.max(m-1,1)),window.scrollTo({top:0,behavior:"smooth"})},g=()=>{s(m=>Math.min(m+1,r)),window.scrollTo({top:0,behavior:"smooth"})},y=m=>{s(m),window.scrollTo({top:0,behavior:"smooth"})};return v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Blog ",v.jsx("span",{className:"text-sky-400",children:"."})]}),v.jsx("p",{className:"text-slate-500 mb-12",children:"생각을 정리하고 배운 것을 공유합니다."}),v.jsx("div",{className:"flex flex-col space-y-10",children:h.map(m=>{var E;return v.jsx("article",{className:"group",children:v.jsxs(fl,{to:`/blog/${m.id}`,className:"block",children:[v.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-400 mb-2 font-mono",children:m.date}),v.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors",children:m.title}),v.jsx("p",{className:"text-slate-600 leading-relaxed mb-3",children:m.description}),v.jsx("div",{className:"flex gap-2",children:(E=m.tags)==null?void 0:E.map(A=>v.jsxs("span",{className:"text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded",children:["#",A]},A))})]})},m.id)})}),r>1&&v.jsxs("div",{className:"flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-100",children:[v.jsx("button",{onClick:p,disabled:c===1,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"이전 페이지",children:v.jsx(Sb,{size:20})}),v.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:r},(m,E)=>E+1).map(m=>v.jsx("button",{onClick:()=>y(m),className:`w-10 h-10 rounded-lg font-medium transition-colors ${c===m?"bg-sky-500 text-white":"hover:bg-slate-100 text-slate-600"}`,children:m},m))}),v.jsx("button",{onClick:g,disabled:c===r,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"다음 페이지",children:v.jsx(Ab,{size:20})})]})]})},Iv=()=>{const{id:u}=hy(),c=u?Jv(u):void 0,s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c?v.jsxs("div",{className:"min-h-screen bg-white font-sans selection:bg-secondary/20 selection:text-primary",children:[v.jsx("div",{className:"bg-slate-50 border-b border-slate-200",children:v.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative",children:[v.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-5 pointer-events-none",children:v.jsx("div",{className:"text-9xl font-bold font-mono text-slate-900 tracking-tighter"})}),v.jsxs(fl,{to:"/blog",className:"inline-flex items-center text-slate-500 hover:text-secondary mb-8 transition-colors font-medium",children:[v.jsx(mb,{size:18,className:"mr-2"}),"Back to Tech Notes"]}),v.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-primary mb-8 leading-tight tracking-tight",children:c.title}),v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-6 text-slate-600 border-t border-slate-200/60 pt-6",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(yb,{size:18,className:"text-secondary"}),v.jsx("span",{className:"font-medium font-mono text-sm",children:c.date})]}),v.jsx("div",{className:"hidden sm:block w-px h-4 bg-slate-300"}),v.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:c.tags.map(r=>v.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm",children:[v.jsx(Zb,{size:12,className:"mr-1.5 text-slate-400"}),r]},r))})]})]})}),v.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[v.jsxs("article",{className:"prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl",children:[v.jsx("style",{children:`
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
          `}),v.jsx("div",{dangerouslySetInnerHTML:{__html:c.content}})]}),v.jsxs("div",{className:"mt-20 pt-10 border-t border-slate-100 flex flex-col items-center",children:[v.jsx("button",{onClick:s,className:"mb-8 p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-secondary transition-colors","aria-label":"Scroll to top",children:v.jsx(Rb,{size:24})}),v.jsx(fl,{to:"/blog",className:"px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20",children:"다른 글 보러가기"})]})]})]}):v.jsx(_y,{to:"/blog",replace:!0})},e1=()=>{const[u,c]=C.useState(!1),s="hanwhee2@gmail.com",r=()=>{navigator.clipboard.writeText(s),c(!0),setTimeout(()=>c(!1),2e3)};return v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8",children:["Contact ",v.jsx("span",{className:"text-sky-400",children:"."})]}),v.jsx("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed mb-12",children:v.jsxs("p",{children:[v.jsx("br",{}),"궁금한 점이 있으시다면 편하게 연락주세요💬"]})}),v.jsxs("div",{className:"mb-12",children:[v.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"Email"}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"text-2xl md:text-3xl font-mono font-bold text-slate-900 hover:bg-sky-100 transition-colors px-1 -ml-1 rounded",children:s}),v.jsx("button",{onClick:r,className:"p-2 text-slate-400 hover:text-sky-600 transition-colors","aria-label":"Copy email address",children:u?v.jsx(vb,{size:20,className:"text-sky-500"}):v.jsx(Mb,{size:20})})]})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-4",children:"Social"}),v.jsx("div",{className:"flex flex-col space-y-3 items-start",children:v.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-sky-400 underline-offset-4 decoration-2",children:["Github ",v.jsx(Db,{size:14,className:"opacity-50"})]})})]})]})},t1=()=>v.jsx(Iy,{children:v.jsx(Cy,{children:v.jsxs(rl,{path:"/",element:v.jsx(Wb,{}),children:[v.jsx(rl,{index:!0,element:v.jsx(Kv,{})}),v.jsx(rl,{path:"experience",element:v.jsx($v,{})}),v.jsx(rl,{path:"skills",element:v.jsx(Wv,{})}),v.jsx(rl,{path:"education",element:v.jsx(Fv,{})}),v.jsx(rl,{path:"blog",element:v.jsx(Pv,{})}),v.jsx(rl,{path:"blog/:id",element:v.jsx(Iv,{})}),v.jsx(rl,{path:"contact",element:v.jsx(e1,{})})]})})}),Xm=document.getElementById("root");if(!Xm)throw new Error("Could not find root element to mount to");const l1=zg.createRoot(Xm);l1.render(v.jsx(vg.StrictMode,{children:v.jsx(t1,{})}));
