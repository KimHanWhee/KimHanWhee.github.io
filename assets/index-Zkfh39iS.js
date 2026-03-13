var mg=Object.defineProperty;var pg=(u,s,c)=>s in u?mg(u,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):u[s]=c;var Ae=(u,s,c)=>pg(u,typeof s!="symbol"?s+"":s,c);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function dm(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Fc={exports:{}},Ya={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function gg(){if(Hd)return Ya;Hd=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(r,f,h){var p=null;if(h!==void 0&&(p=""+h),f.key!==void 0&&(p=""+f.key),"key"in f){h={};for(var g in f)g!=="key"&&(h[g]=f[g])}else h=f;return f=h.ref,{$$typeof:u,type:r,key:p,ref:f!==void 0?f:null,props:h}}return Ya.Fragment=s,Ya.jsx=c,Ya.jsxs=c,Ya}var Ud;function yg(){return Ud||(Ud=1,Fc.exports=gg()),Fc.exports}var v=yg(),Pc={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function bg(){if(Bd)return P;Bd=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),k=Symbol.iterator;function N(S){return S===null||typeof S!="object"?null:(S=k&&S[k]||S["@@iterator"],typeof S=="function"?S:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,B={};function X(S,H,q){this.props=S,this.context=H,this.refs=B,this.updater=q||L}X.prototype.isReactComponent={},X.prototype.setState=function(S,H){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,H,"setState")},X.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function K(){}K.prototype=X.prototype;function Q(S,H,q){this.props=S,this.context=H,this.refs=B,this.updater=q||L}var he=Q.prototype=new K;he.constructor=Q,U(he,X.prototype),he.isPureReactComponent=!0;var de=Array.isArray;function be(){}var W={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function Xe(S,H,q){var Z=q.ref;return{$$typeof:u,type:S,key:H,ref:Z!==void 0?Z:null,props:q}}function vt(S,H){return Xe(S.type,H,S.props)}function Bt(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function et(S){var H={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(q){return H[q]})}var Ln=/\/+/g;function Yt(S,H){return typeof S=="object"&&S!==null&&S.key!=null?et(""+S.key):H.toString(36)}function kt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(be,be):(S.status="pending",S.then(function(H){S.status==="pending"&&(S.status="fulfilled",S.value=H)},function(H){S.status==="pending"&&(S.status="rejected",S.reason=H)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function w(S,H,q,Z,I){var ne=typeof S;(ne==="undefined"||ne==="boolean")&&(S=null);var me=!1;if(S===null)me=!0;else switch(ne){case"bigint":case"string":case"number":me=!0;break;case"object":switch(S.$$typeof){case u:case s:me=!0;break;case E:return me=S._init,w(me(S._payload),H,q,Z,I)}}if(me)return I=I(S),me=Z===""?"."+Yt(S,0):Z,de(I)?(q="",me!=null&&(q=me.replace(Ln,"$&/")+"/"),w(I,H,q,"",function(Wl){return Wl})):I!=null&&(Bt(I)&&(I=vt(I,q+(I.key==null||S&&S.key===I.key?"":(""+I.key).replace(Ln,"$&/")+"/")+me)),H.push(I)),1;me=0;var Fe=Z===""?".":Z+":";if(de(S))for(var we=0;we<S.length;we++)Z=S[we],ne=Fe+Yt(Z,we),me+=w(Z,H,q,ne,I);else if(we=N(S),typeof we=="function")for(S=we.call(S),we=0;!(Z=S.next()).done;)Z=Z.value,ne=Fe+Yt(Z,we++),me+=w(Z,H,q,ne,I);else if(ne==="object"){if(typeof S.then=="function")return w(kt(S),H,q,Z,I);throw H=String(S),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return me}function G(S,H,q){if(S==null)return S;var Z=[],I=0;return w(S,Z,"","",function(ne){return H.call(q,ne,I++)}),Z}function F(S){if(S._status===-1){var H=S._result;H=H(),H.then(function(q){(S._status===0||S._status===-1)&&(S._status=1,S._result=q)},function(q){(S._status===0||S._status===-1)&&(S._status=2,S._result=q)}),S._status===-1&&(S._status=0,S._result=H)}if(S._status===1)return S._result.default;throw S._result}var ve=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},_e={map:G,forEach:function(S,H,q){G(S,function(){H.apply(this,arguments)},q)},count:function(S){var H=0;return G(S,function(){H++}),H},toArray:function(S){return G(S,function(H){return H})||[]},only:function(S){if(!Bt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return P.Activity=A,P.Children=_e,P.Component=X,P.Fragment=c,P.Profiler=f,P.PureComponent=Q,P.StrictMode=r,P.Suspense=y,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,P.__COMPILER_RUNTIME={__proto__:null,c:function(S){return W.H.useMemoCache(S)}},P.cache=function(S){return function(){return S.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(S,H,q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var Z=U({},S.props),I=S.key;if(H!=null)for(ne in H.key!==void 0&&(I=""+H.key),H)!ke.call(H,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&H.ref===void 0||(Z[ne]=H[ne]);var ne=arguments.length-2;if(ne===1)Z.children=q;else if(1<ne){for(var me=Array(ne),Fe=0;Fe<ne;Fe++)me[Fe]=arguments[Fe+2];Z.children=me}return Xe(S.type,I,Z)},P.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},P.createElement=function(S,H,q){var Z,I={},ne=null;if(H!=null)for(Z in H.key!==void 0&&(ne=""+H.key),H)ke.call(H,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(I[Z]=H[Z]);var me=arguments.length-2;if(me===1)I.children=q;else if(1<me){for(var Fe=Array(me),we=0;we<me;we++)Fe[we]=arguments[we+2];I.children=Fe}if(S&&S.defaultProps)for(Z in me=S.defaultProps,me)I[Z]===void 0&&(I[Z]=me[Z]);return Xe(S,ne,I)},P.createRef=function(){return{current:null}},P.forwardRef=function(S){return{$$typeof:g,render:S}},P.isValidElement=Bt,P.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:F}},P.memo=function(S,H){return{$$typeof:m,type:S,compare:H===void 0?null:H}},P.startTransition=function(S){var H=W.T,q={};W.T=q;try{var Z=S(),I=W.S;I!==null&&I(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(be,ve)}catch(ne){ve(ne)}finally{H!==null&&q.types!==null&&(H.types=q.types),W.T=H}},P.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},P.use=function(S){return W.H.use(S)},P.useActionState=function(S,H,q){return W.H.useActionState(S,H,q)},P.useCallback=function(S,H){return W.H.useCallback(S,H)},P.useContext=function(S){return W.H.useContext(S)},P.useDebugValue=function(){},P.useDeferredValue=function(S,H){return W.H.useDeferredValue(S,H)},P.useEffect=function(S,H){return W.H.useEffect(S,H)},P.useEffectEvent=function(S){return W.H.useEffectEvent(S)},P.useId=function(){return W.H.useId()},P.useImperativeHandle=function(S,H,q){return W.H.useImperativeHandle(S,H,q)},P.useInsertionEffect=function(S,H){return W.H.useInsertionEffect(S,H)},P.useLayoutEffect=function(S,H){return W.H.useLayoutEffect(S,H)},P.useMemo=function(S,H){return W.H.useMemo(S,H)},P.useOptimistic=function(S,H){return W.H.useOptimistic(S,H)},P.useReducer=function(S,H,q){return W.H.useReducer(S,H,q)},P.useRef=function(S){return W.H.useRef(S)},P.useState=function(S){return W.H.useState(S)},P.useSyncExternalStore=function(S,H,q){return W.H.useSyncExternalStore(S,H,q)},P.useTransition=function(){return W.H.useTransition()},P.version="19.2.3",P}var Gd;function pr(){return Gd||(Gd=1,Pc.exports=bg()),Pc.exports}var C=pr();const vg=dm(C);var Ic={exports:{}},Xa={},er={exports:{}},tr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function xg(){return qd||(qd=1,(function(u){function s(w,G){var F=w.length;w.push(G);e:for(;0<F;){var ve=F-1>>>1,_e=w[ve];if(0<f(_e,G))w[ve]=G,w[F]=_e,F=ve;else break e}}function c(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var G=w[0],F=w.pop();if(F!==G){w[0]=F;e:for(var ve=0,_e=w.length,S=_e>>>1;ve<S;){var H=2*(ve+1)-1,q=w[H],Z=H+1,I=w[Z];if(0>f(q,F))Z<_e&&0>f(I,q)?(w[ve]=I,w[Z]=F,ve=Z):(w[ve]=q,w[H]=F,ve=H);else if(Z<_e&&0>f(I,F))w[ve]=I,w[Z]=F,ve=Z;else break e}}return G}function f(w,G){var F=w.sortIndex-G.sortIndex;return F!==0?F:w.id-G.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var p=Date,g=p.now();u.unstable_now=function(){return p.now()-g}}var y=[],m=[],E=1,A=null,k=3,N=!1,L=!1,U=!1,B=!1,X=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function he(w){for(var G=c(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=w)r(m),G.sortIndex=G.expirationTime,s(y,G);else break;G=c(m)}}function de(w){if(U=!1,he(w),!L)if(c(y)!==null)L=!0,be||(be=!0,et());else{var G=c(m);G!==null&&kt(de,G.startTime-w)}}var be=!1,W=-1,ke=5,Xe=-1;function vt(){return B?!0:!(u.unstable_now()-Xe<ke)}function Bt(){if(B=!1,be){var w=u.unstable_now();Xe=w;var G=!0;try{e:{L=!1,U&&(U=!1,K(W),W=-1),N=!0;var F=k;try{t:{for(he(w),A=c(y);A!==null&&!(A.expirationTime>w&&vt());){var ve=A.callback;if(typeof ve=="function"){A.callback=null,k=A.priorityLevel;var _e=ve(A.expirationTime<=w);if(w=u.unstable_now(),typeof _e=="function"){A.callback=_e,he(w),G=!0;break t}A===c(y)&&r(y),he(w)}else r(y);A=c(y)}if(A!==null)G=!0;else{var S=c(m);S!==null&&kt(de,S.startTime-w),G=!1}}break e}finally{A=null,k=F,N=!1}G=void 0}}finally{G?et():be=!1}}}var et;if(typeof Q=="function")et=function(){Q(Bt)};else if(typeof MessageChannel<"u"){var Ln=new MessageChannel,Yt=Ln.port2;Ln.port1.onmessage=Bt,et=function(){Yt.postMessage(null)}}else et=function(){X(Bt,0)};function kt(w,G){W=X(function(){w(u.unstable_now())},G)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(w){w.callback=null},u.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<w?Math.floor(1e3/w):5},u.unstable_getCurrentPriorityLevel=function(){return k},u.unstable_next=function(w){switch(k){case 1:case 2:case 3:var G=3;break;default:G=k}var F=k;k=G;try{return w()}finally{k=F}},u.unstable_requestPaint=function(){B=!0},u.unstable_runWithPriority=function(w,G){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var F=k;k=w;try{return G()}finally{k=F}},u.unstable_scheduleCallback=function(w,G,F){var ve=u.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ve+F:ve):F=ve,w){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=F+_e,w={id:E++,callback:G,priorityLevel:w,startTime:F,expirationTime:_e,sortIndex:-1},F>ve?(w.sortIndex=F,s(m,w),c(y)===null&&w===c(m)&&(U?(K(W),W=-1):U=!0,kt(de,F-ve))):(w.sortIndex=_e,s(y,w),L||N||(L=!0,be||(be=!0,et()))),w},u.unstable_shouldYield=vt,u.unstable_wrapCallback=function(w){var G=k;return function(){var F=k;k=G;try{return w.apply(this,arguments)}finally{k=F}}}})(tr)),tr}var Ld;function Sg(){return Ld||(Ld=1,er.exports=xg()),er.exports}var nr={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function Eg(){if(Qd)return We;Qd=1;var u=pr();function s(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var r={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(y,m,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:A==null?null:""+A,children:y,containerInfo:m,implementation:E}}var p=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,We.createPortal=function(y,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return h(y,m,null,E)},We.flushSync=function(y){var m=p.T,E=r.p;try{if(p.T=null,r.p=2,y)return y()}finally{p.T=m,r.p=E,r.d.f()}},We.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(y,m))},We.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},We.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var E=m.as,A=g(E,m.crossOrigin),k=typeof m.integrity=="string"?m.integrity:void 0,N=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?r.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:A,integrity:k,fetchPriority:N}):E==="script"&&r.d.X(y,{crossOrigin:A,integrity:k,fetchPriority:N,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},We.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=g(m.as,m.crossOrigin);r.d.M(y,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(y)},We.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,A=g(E,m.crossOrigin);r.d.L(y,E,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},We.preloadModule=function(y,m){if(typeof y=="string")if(m){var E=g(m.as,m.crossOrigin);r.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(y)},We.requestFormReset=function(y){r.d.r(y)},We.unstable_batchedUpdates=function(y,m){return y(m)},We.useFormState=function(y,m,E){return p.H.useFormState(y,m,E)},We.useFormStatus=function(){return p.H.useHostTransitionStatus()},We.version="19.2.3",We}var Yd;function Ag(){if(Yd)return nr.exports;Yd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),nr.exports=Eg(),nr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function _g(){if(Xd)return Xa;Xd=1;var u=Sg(),s=pr(),c=Ag();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(r(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return y(a),e;if(i===l)return y(a),t;i=i.sibling}throw Error(r(188))}if(n.return!==l.return)n=a,l=i;else{for(var o=!1,d=a.child;d;){if(d===n){o=!0,n=a,l=i;break}if(d===l){o=!0,l=a,n=i;break}d=d.sibling}if(!o){for(d=i.child;d;){if(d===n){o=!0,n=i,l=a;break}if(d===l){o=!0,l=i,n=a;break}d=d.sibling}if(!o)throw Error(r(189))}}if(n.alternate!==l)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,k=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),Bt=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=Bt&&e[Bt]||e["@@iterator"],typeof e=="function"?e:null)}var Ln=Symbol.for("react.client.reference");function Yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ln?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case X:return"Profiler";case B:return"StrictMode";case de:return"Suspense";case be:return"SuspenseList";case Xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case Q:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Yt(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return Yt(e(t))}catch{}}return null}var kt=Array.isArray,w=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ve=[],_e=-1;function S(e){return{current:e}}function H(e){0>_e||(e.current=ve[_e],ve[_e]=null,_e--)}function q(e,t){_e++,ve[_e]=e.current,e.current=t}var Z=S(null),I=S(null),ne=S(null),me=S(null);function Fe(e,t){switch(q(ne,t),q(I,e),q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=id(t),e=ud(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(Z),q(Z,e)}function we(){H(Z),H(I),H(ne)}function Wl(e){e.memoizedState!==null&&q(me,e);var t=Z.current,n=ud(t,e.type);t!==n&&(q(I,e),q(Z,n))}function ti(e){I.current===e&&(H(Z),H(I)),me.current===e&&(H(me),Ga._currentValue=F)}var wu,wr;function Qn(e){if(wu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wu=t&&t[1]||"",wr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+e+wr}var Du=!1;function ju(e,t){if(!e||Du)return"";Du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var z=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){z=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){z=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&z&&typeof M.stack=="string")return[M.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],d=i[1];if(o&&d){var b=o.split(`
`),R=d.split(`
`);for(a=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;if(l===b.length||a===R.length)for(l=b.length-1,a=R.length-1;1<=l&&0<=a&&b[l]!==R[a];)a--;for(;1<=l&&0<=a;l--,a--)if(b[l]!==R[a]){if(l!==1||a!==1)do if(l--,a--,0>a||b[l]!==R[a]){var O=`
`+b[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=a);break}}}finally{Du=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qn(n):""}function Zm(e,t){switch(e.tag){case 26:case 27:case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return e.child!==t&&t!==null?Qn("Suspense Fallback"):Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 15:return ju(e.type,!1);case 11:return ju(e.type.render,!1);case 1:return ju(e.type,!0);case 31:return Qn("Activity");default:return""}}function Dr(e){try{var t="",n=null;do t+=Zm(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Hu=Object.prototype.hasOwnProperty,Uu=u.unstable_scheduleCallback,Bu=u.unstable_cancelCallback,Vm=u.unstable_shouldYield,Jm=u.unstable_requestPaint,ct=u.unstable_now,Km=u.unstable_getCurrentPriorityLevel,jr=u.unstable_ImmediatePriority,Hr=u.unstable_UserBlockingPriority,ni=u.unstable_NormalPriority,$m=u.unstable_LowPriority,Ur=u.unstable_IdlePriority,Wm=u.log,Fm=u.unstable_setDisableYieldValue,Fl=null,rt=null;function gn(e){if(typeof Wm=="function"&&Fm(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Fl,e)}catch{}}var ot=Math.clz32?Math.clz32:ep,Pm=Math.log,Im=Math.LN2;function ep(e){return e>>>=0,e===0?32:31-(Pm(e)/Im|0)|0}var li=256,ai=262144,ii=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?a=Yn(l):(o&=d,o!==0?a=Yn(o):n||(n=d&~e,n!==0&&(a=Yn(n))))):(d=l&~i,d!==0?a=Yn(d):o!==0?a=Yn(o):n||(n=l&~e,n!==0&&(a=Yn(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(){var e=ii;return ii<<=1,(ii&62914560)===0&&(ii=4194304),e}function Gu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function np(e,t,n,l,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,b=e.expirationTimes,R=e.hiddenUpdates;for(n=o&~n;0<n;){var O=31-ot(n),j=1<<O;d[O]=0,b[O]=-1;var z=R[O];if(z!==null)for(R[O]=null,O=0;O<z.length;O++){var M=z[O];M!==null&&(M.lane&=-536870913)}n&=~j}l!==0&&Gr(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Gr(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function qr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-ot(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function Lr(e,t){var n=t&-t;return n=(n&42)!==0?1:qu(n),(n&(e.suspendedLanes|t))!==0?0:n}function qu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Cd(e.type))}function Yr(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var yn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+yn,tt="__reactProps$"+yn,ol="__reactContainer$"+yn,Qu="__reactEvents$"+yn,lp="__reactListeners$"+yn,ap="__reactHandles$"+yn,Xr="__reactResources$"+yn,ea="__reactMarker$"+yn;function Yu(e){delete e[Ze],delete e[tt],delete e[Qu],delete e[lp],delete e[ap]}function fl(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ol]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dd(e);e!==null;){if(n=e[Ze])return n;e=dd(e)}return t}e=n,n=e.parentNode}return null}function hl(e){if(e=e[Ze]||e[ol]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ta(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function dl(e){var t=e[Xr];return t||(t=e[Xr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[ea]=!0}var Zr=new Set,Vr={};function Xn(e,t){ml(e,t),ml(e+"Capture",t)}function ml(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Zr.add(t[e])}var ip=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jr={},Kr={};function up(e){return Hu.call(Kr,e)?!0:Hu.call(Jr,e)?!1:ip.test(e)?Kr[e]=!0:(Jr[e]=!0,!1)}function si(e,t,n){if(up(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $r(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sp(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xu(e){if(!e._valueTracker){var t=$r(e)?"checked":"value";e._valueTracker=sp(e,t,""+e[t])}}function Wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=$r(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cp=/[\n"\\]/g;function St(e){return e.replace(cp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zu(e,t,n,l,a,i,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Vu(e,o,xt(t)):n!=null?Vu(e,o,xt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+xt(d):e.removeAttribute("name")}function Fr(e,t,n,l,a,i,o,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Xu(e);return}n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Xu(e)}function Vu(e,t,n){t==="number"&&ri(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function pl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Pr(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function Ir(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(r(92));if(kt(l)){if(1<l.length)throw Error(r(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Xu(e)}function gl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eo(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||rp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function to(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&eo(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&eo(e,i,t[i])}function Ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return fp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Ku=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,bl=null;function no(e){var t=hl(e);if(t&&(e=t.stateNode)){var n=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[tt]||null;if(!a)throw Error(r(90));Zu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Wr(l)}break e;case"textarea":Pr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&pl(e,!!n.multiple,t,!1)}}}var Wu=!1;function lo(e,t,n){if(Wu)return e(t,n);Wu=!0;try{var l=e(t);return l}finally{if(Wu=!1,(yl!==null||bl!==null)&&(Fi(),yl&&(t=yl,e=bl,bl=yl=null,no(t),e)))for(t=0;t<e.length;t++)no(e[t])}}function na(e,t){var n=e.stateNode;if(n===null)return null;var l=n[tt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if(Vt)try{var la={};Object.defineProperty(la,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Fu=!1}var bn=null,Pu=null,fi=null;function ao(){if(fi)return fi;var e,t=Pu,n=t.length,l,a="value"in bn?bn.value:bn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===a[i-l];l++);return fi=a.slice(e,1<l?1-l:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function io(){return!1}function nt(e){function t(n,l,a,i,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?di:io,this.isPropagationStopped=io,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=nt(Zn),aa=A({},Zn,{view:0,detail:0}),hp=nt(aa),Iu,es,ia,pi=A({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(Iu=e.screenX-ia.screenX,es=e.screenY-ia.screenY):es=Iu=0,ia=e),Iu)},movementY:function(e){return"movementY"in e?e.movementY:es}}),uo=nt(pi),dp=A({},pi,{dataTransfer:0}),mp=nt(dp),pp=A({},aa,{relatedTarget:0}),ts=nt(pp),gp=A({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),yp=nt(gp),bp=A({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=nt(bp),xp=A({},Zn,{data:0}),so=nt(xp),Sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function ns(){return _p}var Tp=A({},aa,{key:function(e){if(e.key){var t=Sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=nt(Tp),zp=A({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),co=nt(zp),Mp=A({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),Cp=nt(Mp),Np=A({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=nt(Np),kp=A({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=nt(kp),Dp=A({},Zn,{newState:0,oldState:0}),jp=nt(Dp),Hp=[9,13,27,32],ls=Vt&&"CompositionEvent"in window,ua=null;Vt&&"documentMode"in document&&(ua=document.documentMode);var Up=Vt&&"TextEvent"in window&&!ua,ro=Vt&&(!ls||ua&&8<ua&&11>=ua),oo=" ",fo=!1;function ho(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vl=!1;function Bp(e,t){switch(e){case"compositionend":return mo(t);case"keypress":return t.which!==32?null:(fo=!0,oo);case"textInput":return e=t.data,e===oo&&fo?null:e;default:return null}}function Gp(e,t){if(vl)return e==="compositionend"||!ls&&ho(e,t)?(e=ao(),fi=Pu=bn=null,vl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ro&&t.locale!=="ko"?null:t.data;default:return null}}var qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qp[e.type]:t==="textarea"}function go(e,t,n,l){yl?bl?bl.push(l):bl=[l]:yl=l,t=au(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var sa=null,ca=null;function Lp(e){Ih(e,0)}function gi(e){var t=ta(e);if(Wr(t))return e}function yo(e,t){if(e==="change")return t}var bo=!1;if(Vt){var as;if(Vt){var is="oninput"in document;if(!is){var vo=document.createElement("div");vo.setAttribute("oninput","return;"),is=typeof vo.oninput=="function"}as=is}else as=!1;bo=as&&(!document.documentMode||9<document.documentMode)}function xo(){sa&&(sa.detachEvent("onpropertychange",So),ca=sa=null)}function So(e){if(e.propertyName==="value"&&gi(ca)){var t=[];go(t,ca,e,$u(e)),lo(Lp,t)}}function Qp(e,t,n){e==="focusin"?(xo(),sa=t,ca=n,sa.attachEvent("onpropertychange",So)):e==="focusout"&&xo()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(ca)}function Xp(e,t){if(e==="click")return gi(t)}function Zp(e,t){if(e==="input"||e==="change")return gi(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Vp;function ra(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Hu.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,t){var n=Eo(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eo(n)}}function _o(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_o(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function To(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ri(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ri(e.document)}return t}function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jp=Vt&&"documentMode"in document&&11>=document.documentMode,xl=null,ss=null,oa=null,cs=!1;function Ro(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cs||xl==null||xl!==ri(l)||(l=xl,"selectionStart"in l&&us(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oa&&ra(oa,l)||(oa=l,l=au(ss,"onSelect"),0<l.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=xl)))}function Vn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sl={animationend:Vn("Animation","AnimationEnd"),animationiteration:Vn("Animation","AnimationIteration"),animationstart:Vn("Animation","AnimationStart"),transitionrun:Vn("Transition","TransitionRun"),transitionstart:Vn("Transition","TransitionStart"),transitioncancel:Vn("Transition","TransitionCancel"),transitionend:Vn("Transition","TransitionEnd")},rs={},zo={};Vt&&(zo=document.createElement("div").style,"AnimationEvent"in window||(delete Sl.animationend.animation,delete Sl.animationiteration.animation,delete Sl.animationstart.animation),"TransitionEvent"in window||delete Sl.transitionend.transition);function Jn(e){if(rs[e])return rs[e];if(!Sl[e])return e;var t=Sl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zo)return rs[e]=t[n];return e}var Mo=Jn("animationend"),Co=Jn("animationiteration"),No=Jn("animationstart"),Kp=Jn("transitionrun"),$p=Jn("transitionstart"),Wp=Jn("transitioncancel"),Oo=Jn("transitionend"),ko=new Map,os="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");os.push("scrollEnd");function wt(e,t){ko.set(e,t),Xn(t,[e])}var yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Et=[],El=0,fs=0;function bi(){for(var e=El,t=fs=El=0;t<e;){var n=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var i=Et[t];if(Et[t++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}i!==0&&wo(n,a,i)}}function vi(e,t,n,l){Et[El++]=e,Et[El++]=t,Et[El++]=n,Et[El++]=l,fs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function hs(e,t,n,l){return vi(e,t,n,l),xi(e)}function Kn(e,t){return vi(e,null,null,t),xi(e)}function wo(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-ot(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function xi(e){if(50<ka)throw ka=0,Sc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Al={};function Fp(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,l){return new Fp(e,t,n,l)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Do(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,l,a,i){var o=0;if(l=e,typeof e=="function")ds(e)&&(o=1);else if(typeof e=="string")o=ng(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Xe:return e=ht(31,n,t,a),e.elementType=Xe,e.lanes=i,e;case U:return $n(n.children,a,i,t);case B:o=8,a|=24;break;case X:return e=ht(12,n,t,a|2),e.elementType=X,e.lanes=i,e;case de:return e=ht(13,n,t,a),e.elementType=de,e.lanes=i,e;case be:return e=ht(19,n,t,a),e.elementType=be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:o=10;break e;case K:o=9;break e;case he:o=11;break e;case W:o=14;break e;case ke:o=16,l=null;break e}o=29,n=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=ht(o,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function $n(e,t,n,l){return e=ht(7,e,l,t),e.lanes=n,e}function ms(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function jo(e){var t=ht(18,null,null,0);return t.stateNode=e,t}function ps(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ho=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var n=Ho.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Dr(t)},Ho.set(e,t),t)}return{value:e,source:t,stack:Dr(t)}}var _l=[],Tl=0,Ei=null,fa=0,_t=[],Tt=0,vn=null,Gt=1,qt="";function Kt(e,t){_l[Tl++]=fa,_l[Tl++]=Ei,Ei=e,fa=t}function Uo(e,t,n){_t[Tt++]=Gt,_t[Tt++]=qt,_t[Tt++]=vn,vn=e;var l=Gt;e=qt;var a=32-ot(l)-1;l&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(l&(1<<o)-1).toString(32),l>>=o,a-=o,Gt=1<<32-ot(t)+a|n<<a|l,qt=i+e}else Gt=1<<i|n<<a|l,qt=e}function gs(e){e.return!==null&&(Kt(e,1),Uo(e,1,0))}function ys(e){for(;e===Ei;)Ei=_l[--Tl],_l[Tl]=null,fa=_l[--Tl],_l[Tl]=null;for(;e===vn;)vn=_t[--Tt],_t[Tt]=null,qt=_t[--Tt],_t[Tt]=null,Gt=_t[--Tt],_t[Tt]=null}function Bo(e,t){_t[Tt++]=Gt,_t[Tt++]=qt,_t[Tt++]=vn,Gt=t.id,qt=t.overflow,vn=e}var Ve=null,Re=null,se=!1,xn=null,Rt=!1,bs=Error(r(519));function Sn(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ha(At(t,e)),bs}function Go(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[tt]=l,n){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(n=0;n<Da.length;n++)ae(Da[n],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),Fr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),Ir(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||ld(t.textContent,n)?(l.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),l.onScroll!=null&&ae("scroll",t),l.onScrollEnd!=null&&ae("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||Sn(e,!0)}function qo(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Ve=Ve.return}}function Rl(e){if(e!==Ve)return!1;if(!se)return qo(e),se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hc(e.type,e.memoizedProps)),n=!n),n&&Re&&Sn(e),qo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Re=hd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Re=hd(e)}else t===27?(t=Re,jn(e.type)?(e=Lc,Lc=null,Re=e):Re=t):Re=Ve?Mt(e.stateNode.nextSibling):null;return!0}function Wn(){Re=Ve=null,se=!1}function vs(){var e=xn;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),xn=null),e}function ha(e){xn===null?xn=[e]:xn.push(e)}var xs=S(null),Fn=null,$t=null;function En(e,t,n){q(xs,t._currentValue),t._currentValue=n}function Wt(e){e._currentValue=xs.current,H(xs)}function Ss(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Es(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var o=a.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=a;for(var b=0;b<t.length;b++)if(d.context===t[b]){i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Ss(i.return,n,e),l||(o=null);break e}i=d.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(r(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Ss(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function zl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var d=a.type;ft(a.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(a===me.current){if(o=a.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ga):e=[Ga])}a=a.return}e!==null&&Es(t,e,n,l),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,$t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Lo(Fn,e)}function _i(e,t){return Fn===null&&Pn(e),Lo(e,t)}function Lo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$t===null){if(e===null)throw Error(r(308));$t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $t=$t.next=t;return n}var Pp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ip=u.unstable_scheduleCallback,e0=u.unstable_NormalPriority,Ue={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function As(){return{controller:new Pp,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&Ip(e0,function(){e.controller.abort()})}var ma=null,_s=0,Ml=0,Cl=null;function t0(e,t){if(ma===null){var n=ma=[];_s=0,Ml=zc(),Cl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return _s++,t.then(Qo,Qo),t}function Qo(){if(--_s===0&&ma!==null){Cl!==null&&(Cl.status="fulfilled");var e=ma;ma=null,Ml=0,Cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function n0(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Yo=w.S;w.S=function(e,t){zh=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&t0(e,t),Yo!==null&&Yo(e,t)};var In=S(null);function Ts(){var e=In.current;return e!==null?e:Te.pooledCache}function Ti(e,t){t===null?q(In,In.current):q(In,t.pool)}function Xo(){var e=Ts();return e===null?null:{parent:Ue._currentValue,pool:e}}var Nl=Error(r(460)),Rs=Error(r(474)),Ri=Error(r(542)),zi={then:function(){}};function Zo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ko(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ko(e),e}throw tl=t,Nl}}function el(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(tl=n,Nl):n}}var tl=null;function Jo(){if(tl===null)throw Error(r(459));var e=tl;return tl=null,e}function Ko(e){if(e===Nl||e===Ri)throw Error(r(483))}var Ol=null,pa=0;function Mi(e){var t=pa;return pa+=1,Ol===null&&(Ol=[]),Vo(Ol,e,t)}function ga(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ci(e,t){throw t.$$typeof===k?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $o(e){function t(_,x){if(e){var T=_.deletions;T===null?(_.deletions=[x],_.flags|=16):T.push(x)}}function n(_,x){if(!e)return null;for(;x!==null;)t(_,x),x=x.sibling;return null}function l(_){for(var x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function a(_,x){return _=Jt(_,x),_.index=0,_.sibling=null,_}function i(_,x,T){return _.index=T,e?(T=_.alternate,T!==null?(T=T.index,T<x?(_.flags|=67108866,x):T):(_.flags|=67108866,x)):(_.flags|=1048576,x)}function o(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function d(_,x,T,D){return x===null||x.tag!==6?(x=ms(T,_.mode,D),x.return=_,x):(x=a(x,T),x.return=_,x)}function b(_,x,T,D){var J=T.type;return J===U?O(_,x,T.props.children,D,T.key):x!==null&&(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ke&&el(J)===x.type)?(x=a(x,T.props),ga(x,T),x.return=_,x):(x=Si(T.type,T.key,T.props,null,_.mode,D),ga(x,T),x.return=_,x)}function R(_,x,T,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==T.containerInfo||x.stateNode.implementation!==T.implementation?(x=ps(T,_.mode,D),x.return=_,x):(x=a(x,T.children||[]),x.return=_,x)}function O(_,x,T,D,J){return x===null||x.tag!==7?(x=$n(T,_.mode,D,J),x.return=_,x):(x=a(x,T),x.return=_,x)}function j(_,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=ms(""+x,_.mode,T),x.return=_,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case N:return T=Si(x.type,x.key,x.props,null,_.mode,T),ga(T,x),T.return=_,T;case L:return x=ps(x,_.mode,T),x.return=_,x;case ke:return x=el(x),j(_,x,T)}if(kt(x)||et(x))return x=$n(x,_.mode,T,null),x.return=_,x;if(typeof x.then=="function")return j(_,Mi(x),T);if(x.$$typeof===Q)return j(_,_i(_,x),T);Ci(_,x)}return null}function z(_,x,T,D){var J=x!==null?x.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return J!==null?null:d(_,x,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case N:return T.key===J?b(_,x,T,D):null;case L:return T.key===J?R(_,x,T,D):null;case ke:return T=el(T),z(_,x,T,D)}if(kt(T)||et(T))return J!==null?null:O(_,x,T,D,null);if(typeof T.then=="function")return z(_,x,Mi(T),D);if(T.$$typeof===Q)return z(_,x,_i(_,T),D);Ci(_,T)}return null}function M(_,x,T,D,J){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return _=_.get(T)||null,d(x,_,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case N:return _=_.get(D.key===null?T:D.key)||null,b(x,_,D,J);case L:return _=_.get(D.key===null?T:D.key)||null,R(x,_,D,J);case ke:return D=el(D),M(_,x,T,D,J)}if(kt(D)||et(D))return _=_.get(T)||null,O(x,_,D,J,null);if(typeof D.then=="function")return M(_,x,T,Mi(D),J);if(D.$$typeof===Q)return M(_,x,T,_i(x,D),J);Ci(x,D)}return null}function Y(_,x,T,D){for(var J=null,ce=null,V=x,te=x=0,ue=null;V!==null&&te<T.length;te++){V.index>te?(ue=V,V=null):ue=V.sibling;var re=z(_,V,T[te],D);if(re===null){V===null&&(V=ue);break}e&&V&&re.alternate===null&&t(_,V),x=i(re,x,te),ce===null?J=re:ce.sibling=re,ce=re,V=ue}if(te===T.length)return n(_,V),se&&Kt(_,te),J;if(V===null){for(;te<T.length;te++)V=j(_,T[te],D),V!==null&&(x=i(V,x,te),ce===null?J=V:ce.sibling=V,ce=V);return se&&Kt(_,te),J}for(V=l(V);te<T.length;te++)ue=M(V,_,te,T[te],D),ue!==null&&(e&&ue.alternate!==null&&V.delete(ue.key===null?te:ue.key),x=i(ue,x,te),ce===null?J=ue:ce.sibling=ue,ce=ue);return e&&V.forEach(function(qn){return t(_,qn)}),se&&Kt(_,te),J}function $(_,x,T,D){if(T==null)throw Error(r(151));for(var J=null,ce=null,V=x,te=x=0,ue=null,re=T.next();V!==null&&!re.done;te++,re=T.next()){V.index>te?(ue=V,V=null):ue=V.sibling;var qn=z(_,V,re.value,D);if(qn===null){V===null&&(V=ue);break}e&&V&&qn.alternate===null&&t(_,V),x=i(qn,x,te),ce===null?J=qn:ce.sibling=qn,ce=qn,V=ue}if(re.done)return n(_,V),se&&Kt(_,te),J;if(V===null){for(;!re.done;te++,re=T.next())re=j(_,re.value,D),re!==null&&(x=i(re,x,te),ce===null?J=re:ce.sibling=re,ce=re);return se&&Kt(_,te),J}for(V=l(V);!re.done;te++,re=T.next())re=M(V,_,te,re.value,D),re!==null&&(e&&re.alternate!==null&&V.delete(re.key===null?te:re.key),x=i(re,x,te),ce===null?J=re:ce.sibling=re,ce=re);return e&&V.forEach(function(dg){return t(_,dg)}),se&&Kt(_,te),J}function Ee(_,x,T,D){if(typeof T=="object"&&T!==null&&T.type===U&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case N:e:{for(var J=T.key;x!==null;){if(x.key===J){if(J=T.type,J===U){if(x.tag===7){n(_,x.sibling),D=a(x,T.props.children),D.return=_,_=D;break e}}else if(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ke&&el(J)===x.type){n(_,x.sibling),D=a(x,T.props),ga(D,T),D.return=_,_=D;break e}n(_,x);break}else t(_,x);x=x.sibling}T.type===U?(D=$n(T.props.children,_.mode,D,T.key),D.return=_,_=D):(D=Si(T.type,T.key,T.props,null,_.mode,D),ga(D,T),D.return=_,_=D)}return o(_);case L:e:{for(J=T.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===T.containerInfo&&x.stateNode.implementation===T.implementation){n(_,x.sibling),D=a(x,T.children||[]),D.return=_,_=D;break e}else{n(_,x);break}else t(_,x);x=x.sibling}D=ps(T,_.mode,D),D.return=_,_=D}return o(_);case ke:return T=el(T),Ee(_,x,T,D)}if(kt(T))return Y(_,x,T,D);if(et(T)){if(J=et(T),typeof J!="function")throw Error(r(150));return T=J.call(T),$(_,x,T,D)}if(typeof T.then=="function")return Ee(_,x,Mi(T),D);if(T.$$typeof===Q)return Ee(_,x,_i(_,T),D);Ci(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,x!==null&&x.tag===6?(n(_,x.sibling),D=a(x,T),D.return=_,_=D):(n(_,x),D=ms(T,_.mode,D),D.return=_,_=D),o(_)):n(_,x)}return function(_,x,T,D){try{pa=0;var J=Ee(_,x,T,D);return Ol=null,J}catch(V){if(V===Nl||V===Ri)throw V;var ce=ht(29,V,null,_.mode);return ce.lanes=D,ce.return=_,ce}finally{}}}var nl=$o(!0),Wo=$o(!1),An=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=xi(e),wo(e,null,n),t}return vi(e,l,t,n),xi(e)}function ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,qr(e,n)}}function Cs(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ns=!1;function ba(){if(Ns){var e=Cl;if(e!==null)throw e}}function va(e,t,n,l){Ns=!1;var a=e.updateQueue;An=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var b=d,R=b.next;b.next=null,o===null?i=R:o.next=R,o=b;var O=e.alternate;O!==null&&(O=O.updateQueue,d=O.lastBaseUpdate,d!==o&&(d===null?O.firstBaseUpdate=R:d.next=R,O.lastBaseUpdate=b))}if(i!==null){var j=a.baseState;o=0,O=R=b=null,d=i;do{var z=d.lane&-536870913,M=z!==d.lane;if(M?(ie&z)===z:(l&z)===z){z!==0&&z===Ml&&(Ns=!0),O!==null&&(O=O.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var Y=e,$=d;z=t;var Ee=n;switch($.tag){case 1:if(Y=$.payload,typeof Y=="function"){j=Y.call(Ee,j,z);break e}j=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=$.payload,z=typeof Y=="function"?Y.call(Ee,j,z):Y,z==null)break e;j=A({},j,z);break e;case 2:An=!0}}z=d.callback,z!==null&&(e.flags|=64,M&&(e.flags|=8192),M=a.callbacks,M===null?a.callbacks=[z]:M.push(z))}else M={lane:z,tag:d.tag,payload:d.payload,callback:d.callback,next:null},O===null?(R=O=M,b=j):O=O.next=M,o|=z;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;M=d,d=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);O===null&&(b=j),a.baseState=b,a.firstBaseUpdate=R,a.lastBaseUpdate=O,i===null&&(a.shared.lanes=0),Nn|=o,e.lanes=o,e.memoizedState=j}}function Fo(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Po(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Fo(n[e],t)}var kl=S(null),Ni=S(0);function Io(e,t){e=un,q(Ni,e),q(kl,t),un=e|t.baseLanes}function Os(){q(Ni,un),q(kl,kl.current)}function ks(){un=Ni.current,H(kl),H(Ni)}var dt=S(null),zt=null;function Rn(e){var t=e.alternate;q(De,De.current&1),q(dt,e),zt===null&&(t===null||kl.current!==null||t.memoizedState!==null)&&(zt=e)}function ws(e){q(De,De.current),q(dt,e),zt===null&&(zt=e)}function ef(e){e.tag===22?(q(De,De.current),q(dt,e),zt===null&&(zt=e)):zn()}function zn(){q(De,De.current),q(dt,dt.current)}function mt(e){H(dt),zt===e&&(zt=null),H(De)}var De=S(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gc(n)||qc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,ee=null,xe=null,Be=null,ki=!1,wl=!1,ll=!1,wi=0,xa=0,Dl=null,l0=0;function Ne(){throw Error(r(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function js(e,t,n,l,a,i){return Ft=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Bf:Ws,ll=!1,i=n(l,a),ll=!1,wl&&(i=nf(t,n,l,a)),tf(e),i}function tf(e){w.H=Aa;var t=xe!==null&&xe.next!==null;if(Ft=0,Be=xe=ee=null,ki=!1,xa=0,Dl=null,t)throw Error(r(300));e===null||Ge||(e=e.dependencies,e!==null&&Ai(e)&&(Ge=!0))}function nf(e,t,n,l){ee=e;var a=0;do{if(wl&&(Dl=null),xa=0,wl=!1,25<=a)throw Error(r(301));if(a+=1,Be=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=Gf,i=t(n,l)}while(wl);return i}function a0(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?Sa(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ee.flags|=1024),t}function Hs(){var e=wi!==0;return wi=0,e}function Us(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Bs(e){if(ki){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ki=!1}Ft=0,Be=xe=ee=null,wl=!1,xa=wi=0,Dl=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ee.memoizedState=Be=e:Be=Be.next=e,Be}function je(){if(xe===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Be===null?ee.memoizedState:Be.next;if(t!==null)Be=t,xe=e;else{if(e===null)throw ee.alternate===null?Error(r(467)):Error(r(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Be===null?ee.memoizedState=Be=e:Be=Be.next=e}return Be}function Di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sa(e){var t=xa;return xa+=1,Dl===null&&(Dl=[]),e=Vo(Dl,e,t),t=ee,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Bf:Ws),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sa(e);if(e.$$typeof===Q)return Je(e)}throw Error(r(438,String(e)))}function Gs(e){var t=null,n=ee.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Di(),ee.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=vt;return t.index++,n}function Pt(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=je();return qs(t,xe,e)}function qs(e,t,n){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var d=o=null,b=null,R=t,O=!1;do{var j=R.lane&-536870913;if(j!==R.lane?(ie&j)===j:(Ft&j)===j){var z=R.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),j===Ml&&(O=!0);else if((Ft&z)===z){R=R.next,z===Ml&&(O=!0);continue}else j={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(d=b=j,o=i):b=b.next=j,ee.lanes|=z,Nn|=z;j=R.action,ll&&n(i,j),i=R.hasEagerState?R.eagerState:n(i,j)}else z={lane:j,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(d=b=z,o=i):b=b.next=z,ee.lanes|=j,Nn|=j;R=R.next}while(R!==null&&R!==t);if(b===null?o=i:b.next=d,!ft(i,e.memoizedState)&&(Ge=!0,O&&(n=Cl,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=b,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ls(e){var t=je(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);ft(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function lf(e,t,n){var l=ee,a=je(),i=se;if(i){if(n===void 0)throw Error(r(407));n=n()}else n=t();var o=!ft((xe||a).memoizedState,n);if(o&&(a.memoizedState=n,Ge=!0),a=a.queue,Xs(sf.bind(null,l,a,e),[e]),a.getSnapshot!==t||o||Be!==null&&Be.memoizedState.tag&1){if(l.flags|=2048,jl(9,{destroy:void 0},uf.bind(null,l,a,n,t),null),Te===null)throw Error(r(349));i||(Ft&127)!==0||af(l,t,n)}return n}function af(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t=Di(),ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uf(e,t,n,l){t.value=n,t.getSnapshot=l,cf(t)&&rf(e)}function sf(e,t,n){return n(function(){cf(t)&&rf(e)})}function cf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function rf(e){var t=Kn(e,2);t!==null&&st(t,e,2)}function Qs(e){var t=Pe();if(typeof e=="function"){var n=e;if(e=n(),ll){gn(!0);try{n()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function of(e,t,n,l){return e.baseState=n,qs(e,xe,typeof l=="function"?l:Pt)}function i0(e,t,n,l,a){if(Gi(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};w.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,ff(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ff(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=w.T,o={};w.T=o;try{var d=n(a,l),b=w.S;b!==null&&b(o,d),hf(e,t,d)}catch(R){Ys(e,t,R)}finally{i!==null&&o.types!==null&&(i.types=o.types),w.T=i}}else try{i=n(a,l),hf(e,t,i)}catch(R){Ys(e,t,R)}}function hf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){df(e,t,l)},function(l){return Ys(e,t,l)}):df(e,t,n)}function df(e,t,n){t.status="fulfilled",t.value=n,mf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ff(e,n)))}function Ys(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,mf(t),t=t.next;while(t!==l)}e.action=null}function mf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pf(e,t){return t}function gf(e,t){if(se){var n=Te.formState;if(n!==null){e:{var l=ee;if(se){if(Re){t:{for(var a=Re,i=Rt;a.nodeType!==8;){if(!i){a=null;break t}if(a=Mt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Re=Mt(a.nextSibling),l=a.data==="F!";break e}}Sn(l)}l=!1}l&&(t=n[0])}}return n=Pe(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pf,lastRenderedState:t},n.queue=l,n=jf.bind(null,ee,l),l.dispatch=n,l=Qs(!1),i=$s.bind(null,ee,!1,l.queue),l=Pe(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=i0.bind(null,ee,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function yf(e){var t=je();return bf(t,xe,e)}function bf(e,t,n){if(t=qs(e,t,pf)[0],e=Hi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Sa(t)}catch(o){throw o===Nl?Ri:o}else l=t;t=je();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ee.flags|=2048,jl(9,{destroy:void 0},u0.bind(null,a,n),null)),[l,i,e]}function u0(e,t){e.action=t}function vf(e){var t=je(),n=xe;if(n!==null)return bf(t,n,e);je(),t=t.memoizedState,n=je();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function jl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=Di(),ee.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function xf(){return je().memoizedState}function Ui(e,t,n,l){var a=Pe();ee.flags|=e,a.memoizedState=jl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Bi(e,t,n,l){var a=je();l=l===void 0?null:l;var i=a.memoizedState.inst;xe!==null&&l!==null&&Ds(l,xe.memoizedState.deps)?a.memoizedState=jl(t,i,n,l):(ee.flags|=e,a.memoizedState=jl(1|t,i,n,l))}function Sf(e,t){Ui(8390656,8,e,t)}function Xs(e,t){Bi(2048,8,e,t)}function s0(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=Di(),ee.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ef(e){var t=je().memoizedState;return s0({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Af(e,t){return Bi(4,2,e,t)}function _f(e,t){return Bi(4,4,e,t)}function Tf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rf(e,t,n){n=n!=null?n.concat([e]):null,Bi(4,4,Tf.bind(null,t,e),n)}function Zs(){}function zf(e,t){var n=je();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Ds(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Mf(e,t){var n=je();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Ds(t,l[1]))return l[0];if(l=e(),ll){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l}function Vs(e,t,n){return n===void 0||(Ft&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Ch(),ee.lanes|=e,Nn|=e,n)}function Cf(e,t,n,l){return ft(n,t)?n:kl.current!==null?(e=Vs(e,n,l),ft(e,t)||(Ge=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(ie&261930)===0?(Ge=!0,e.memoizedState=n):(e=Ch(),ee.lanes|=e,Nn|=e,t)}function Nf(e,t,n,l,a){var i=G.p;G.p=i!==0&&8>i?i:8;var o=w.T,d={};w.T=d,$s(e,!1,t,n);try{var b=a(),R=w.S;if(R!==null&&R(d,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var O=n0(b,l);Ea(e,t,O,yt(e))}else Ea(e,t,l,yt(e))}catch(j){Ea(e,t,{then:function(){},status:"rejected",reason:j},yt())}finally{G.p=i,o!==null&&d.types!==null&&(o.types=d.types),w.T=o}}function c0(){}function Js(e,t,n,l){if(e.tag!==5)throw Error(r(476));var a=Of(e).queue;Nf(e,a,t,F,n===null?c0:function(){return kf(e),n(l)})}function Of(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kf(e){var t=Of(e);t.next===null&&(t=e.alternate.memoizedState),Ea(e,t.next.queue,{},yt())}function Ks(){return Je(Ga)}function wf(){return je().memoizedState}function Df(){return je().memoizedState}function r0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=_n(n);var l=Tn(t,e,n);l!==null&&(st(l,t,n),ya(l,t,n)),t={cache:As()},e.payload=t;return}t=t.return}}function o0(e,t,n){var l=yt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gi(e)?Hf(t,n):(n=hs(e,t,n,l),n!==null&&(st(n,e,l),Uf(n,t,l)))}function jf(e,t,n){var l=yt();Ea(e,t,n,l)}function Ea(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))Hf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,d=i(o,n);if(a.hasEagerState=!0,a.eagerState=d,ft(d,o))return vi(e,t,a,0),Te===null&&bi(),!1}catch{}finally{}if(n=hs(e,t,a,l),n!==null)return st(n,e,l),Uf(n,t,l),!0}return!1}function $s(e,t,n,l){if(l={lane:2,revertLane:zc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gi(e)){if(t)throw Error(r(479))}else t=hs(e,n,l,2),t!==null&&st(t,e,2)}function Gi(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Hf(e,t){wl=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uf(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,qr(e,n)}}var Aa={readContext:Je,use:ji,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Aa.useEffectEvent=Ne;var Bf={readContext:Je,use:ji,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Sf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ui(4194308,4,Tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var n=Pe();t=t===void 0?null:t;var l=e();if(ll){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Pe();if(n!==void 0){var a=n(t);if(ll){gn(!0);try{n(t)}finally{gn(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=o0.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=Qs(e);var t=e.queue,n=jf.bind(null,ee,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zs,useDeferredValue:function(e,t){var n=Pe();return Vs(n,e,t)},useTransition:function(){var e=Qs(!1);return e=Nf.bind(null,ee,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ee,a=Pe();if(se){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Te===null)throw Error(r(349));(ie&127)!==0||af(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Sf(sf.bind(null,l,i,e),[e]),l.flags|=2048,jl(9,{destroy:void 0},uf.bind(null,l,i,n,t),null),n},useId:function(){var e=Pe(),t=Te.identifierPrefix;if(se){var n=qt,l=Gt;n=(l&~(1<<32-ot(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=l0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ks,useFormState:gf,useActionState:gf,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=$s.bind(null,ee,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gs,useCacheRefresh:function(){return Pe().memoizedState=r0.bind(null,ee)},useEffectEvent:function(e){var t=Pe(),n={impl:e};return t.memoizedState=n,function(){if((fe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:Je,use:ji,useCallback:zf,useContext:Je,useEffect:Xs,useImperativeHandle:Rf,useInsertionEffect:Af,useLayoutEffect:_f,useMemo:Mf,useReducer:Hi,useRef:xf,useState:function(){return Hi(Pt)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=je();return Cf(n,xe.memoizedState,e,t)},useTransition:function(){var e=Hi(Pt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Sa(e),t]},useSyncExternalStore:lf,useId:wf,useHostTransitionStatus:Ks,useFormState:yf,useActionState:yf,useOptimistic:function(e,t){var n=je();return of(n,xe,e,t)},useMemoCache:Gs,useCacheRefresh:Df};Ws.useEffectEvent=Ef;var Gf={readContext:Je,use:ji,useCallback:zf,useContext:Je,useEffect:Xs,useImperativeHandle:Rf,useInsertionEffect:Af,useLayoutEffect:_f,useMemo:Mf,useReducer:Ls,useRef:xf,useState:function(){return Ls(Pt)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=je();return xe===null?Vs(n,e,t):Cf(n,xe.memoizedState,e,t)},useTransition:function(){var e=Ls(Pt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Sa(e),t]},useSyncExternalStore:lf,useId:wf,useHostTransitionStatus:Ks,useFormState:vf,useActionState:vf,useOptimistic:function(e,t){var n=je();return xe!==null?of(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gs,useCacheRefresh:Df};Gf.useEffectEvent=Ef;function Fs(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ps={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=yt(),a=_n(l);a.payload=t,n!=null&&(a.callback=n),t=Tn(e,a,l),t!==null&&(st(t,e,l),ya(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=yt(),a=_n(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Tn(e,a,l),t!==null&&(st(t,e,l),ya(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),l=_n(n);l.tag=2,t!=null&&(l.callback=t),t=Tn(e,l,n),t!==null&&(st(t,e,n),ya(t,e,n))}};function qf(e,t,n,l,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!ra(n,l)||!ra(a,i):!0}function Lf(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Ps.enqueueReplaceState(t,t.state,null)}function al(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=A({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Qf(e){yi(e)}function Yf(e){console.error(e)}function Xf(e){yi(e)}function qi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zf(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Is(e,t,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){qi(e,t)},n}function Vf(e){return e=_n(e),e.tag=3,e}function Jf(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Zf(t,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Zf(t,n,l),typeof a!="function"&&(On===null?On=new Set([this]):On.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function f0(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&zl(t,n,a,!0),n=dt.current,n!==null){switch(n.tag){case 31:case 13:return zt===null?Pi():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===zi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),_c(e,l,a)),!1;case 22:return n.flags|=65536,l===zi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),_c(e,l,a)),!1}throw Error(r(435,n.tag))}return _c(e,l,a),Pi(),!1}if(se)return t=dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==bs&&(e=Error(r(422),{cause:l}),ha(At(e,n)))):(l!==bs&&(t=Error(r(423),{cause:l}),ha(At(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=At(l,n),a=Is(e.stateNode,l,a),Cs(e,a),Oe!==4&&(Oe=2)),!1;var i=Error(r(520),{cause:l});if(i=At(i,n),Oa===null?Oa=[i]:Oa.push(i),Oe!==4&&(Oe=2),t===null)return!0;l=At(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Is(n.stateNode,l,e),Cs(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(On===null||!On.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Vf(a),Jf(a,e,n,l),Cs(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(r(461)),Ge=!1;function Ke(e,t,n,l){t.child=e===null?Wo(t,null,n,l):nl(t,e.child,n,l)}function Kf(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return Pn(t),l=js(e,t,n,o,i,a),d=Hs(),e!==null&&!Ge?(Us(e,t,a),It(e,t,a)):(se&&d&&gs(t),t.flags|=1,Ke(e,t,l,a),t.child)}function $f(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!ds(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Wf(e,t,i,l,a)):(e=Si(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!cc(e,a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,l)&&e.ref===t.ref)return It(e,t,a)}return t.flags|=1,e=Jt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Wf(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(ra(i,l)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=l=i,cc(e,a))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,It(e,t,a)}return tc(e,t,n,l,a)}function Ff(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Pf(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ti(t,i!==null?i.cachePool:null),i!==null?Io(t,i):Os(),ef(t);else return l=t.lanes=536870912,Pf(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(Ti(t,i.cachePool),Io(t,i),zn(),t.memoizedState=null):(e!==null&&Ti(t,null),Os(),zn());return Ke(e,t,a,n),t.child}function _a(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Pf(e,t,n,l,a){var i=Ts();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ti(t,null),Os(),ef(t),e!==null&&zl(e,t,l,!0),t.childLanes=a,null}function Li(e,t){return t=Yi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function If(e,t,n){return nl(t,e.child,null,n),e=Li(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function h0(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(l.mode==="hidden")return e=Li(t,l),t.lanes=536870912,_a(null,e);if(ws(t),(e=Re)?(e=fd(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Gt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},n=jo(e),n.return=t,t.child=n,Ve=t,Re=null)):e=null,e===null)throw Sn(t);return t.lanes=536870912,null}return Li(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(ws(t),a)if(t.flags&256)t.flags&=-257,t=If(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ge||zl(e,t,n,!1),a=(n&e.childLanes)!==0,Ge||a){if(l=Te,l!==null&&(o=Lr(l,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Kn(e,o),st(l,e,o),ec;Pi(),t=If(e,t,n)}else e=i.treeContext,Re=Mt(o.nextSibling),Ve=t,se=!0,xn=null,Rt=!1,e!==null&&Bo(t,e),t=Li(t,l),t.flags|=4096;return t}return e=Jt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function tc(e,t,n,l,a){return Pn(t),n=js(e,t,n,l,void 0,a),l=Hs(),e!==null&&!Ge?(Us(e,t,a),It(e,t,a)):(se&&l&&gs(t),t.flags|=1,Ke(e,t,n,a),t.child)}function eh(e,t,n,l,a,i){return Pn(t),t.updateQueue=null,n=nf(t,l,n,a),tf(e),l=Hs(),e!==null&&!Ge?(Us(e,t,i),It(e,t,i)):(se&&l&&gs(t),t.flags|=1,Ke(e,t,n,i),t.child)}function th(e,t,n,l,a){if(Pn(t),t.stateNode===null){var i=Al,o=n.contextType;typeof o=="object"&&o!==null&&(i=Je(o)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ps,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},zs(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Je(o):Al,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Fs(t,n,o,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Ps.enqueueReplaceState(i,i.state,null),va(t,l,i,a),ba(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,b=al(n,d);i.props=b;var R=i.context,O=n.contextType;o=Al,typeof O=="object"&&O!==null&&(o=Je(O));var j=n.getDerivedStateFromProps;O=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||R!==o)&&Lf(t,i,l,o),An=!1;var z=t.memoizedState;i.state=z,va(t,l,i,a),ba(),R=t.memoizedState,d||z!==R||An?(typeof j=="function"&&(Fs(t,n,j,l),R=t.memoizedState),(b=An||qf(t,n,b,l,z,R,o))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=R),i.props=l,i.state=R,i.context=o,l=b):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Ms(e,t),o=t.memoizedProps,O=al(n,o),i.props=O,j=t.pendingProps,z=i.context,R=n.contextType,b=Al,typeof R=="object"&&R!==null&&(b=Je(R)),d=n.getDerivedStateFromProps,(R=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==j||z!==b)&&Lf(t,i,l,b),An=!1,z=t.memoizedState,i.state=z,va(t,l,i,a),ba();var M=t.memoizedState;o!==j||z!==M||An||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof d=="function"&&(Fs(t,n,d,l),M=t.memoizedState),(O=An||qf(t,n,O,l,z,M,b)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(R||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,M,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,M,b)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),i.props=l,i.state=M,i.context=b,l=O):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Qi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=nl(t,e.child,null,a),t.child=nl(t,null,n,a)):Ke(e,t,n,a),t.memoizedState=i.state,e=t.child):e=It(e,t,a),e}function nh(e,t,n,l){return Wn(),t.flags|=256,Ke(e,t,n,l),t.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:Xo()}}function ac(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gt),e}function lh(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(a?Rn(t):zn(),(e=Re)?(e=fd(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Gt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},n=jo(e),n.return=t,t.child=n,Ve=t,Re=null)):e=null,e===null)throw Sn(t);return qc(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,a?(zn(),a=t.mode,d=Yi({mode:"hidden",children:d},a),l=$n(l,a,n,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=lc(n),l.childLanes=ac(e,o,n),t.memoizedState=nc,_a(null,l)):(Rn(t),ic(t,d))}var b=e.memoizedState;if(b!==null&&(d=b.dehydrated,d!==null)){if(i)t.flags&256?(Rn(t),t.flags&=-257,t=uc(e,t,n)):t.memoizedState!==null?(zn(),t.child=e.child,t.flags|=128,t=null):(zn(),d=l.fallback,a=t.mode,l=Yi({mode:"visible",children:l.children},a),d=$n(d,a,n,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,nl(t,e.child,null,n),l=t.child,l.memoizedState=lc(n),l.childLanes=ac(e,o,n),t.memoizedState=nc,t=_a(null,l));else if(Rn(t),qc(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var R=o.dgst;o=R,l=Error(r(419)),l.stack="",l.digest=o,ha({value:l,source:null,stack:null}),t=uc(e,t,n)}else if(Ge||zl(e,t,n,!1),o=(n&e.childLanes)!==0,Ge||o){if(o=Te,o!==null&&(l=Lr(o,n),l!==0&&l!==b.retryLane))throw b.retryLane=l,Kn(e,l),st(o,e,l),ec;Gc(d)||Pi(),t=uc(e,t,n)}else Gc(d)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Re=Mt(d.nextSibling),Ve=t,se=!0,xn=null,Rt=!1,e!==null&&Bo(t,e),t=ic(t,l.children),t.flags|=4096);return t}return a?(zn(),d=l.fallback,a=t.mode,b=e.child,R=b.sibling,l=Jt(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,R!==null?d=Jt(R,d):(d=$n(d,a,n,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,_a(null,l),l=t.child,d=e.child.memoizedState,d===null?d=lc(n):(a=d.cachePool,a!==null?(b=Ue._currentValue,a=a.parent!==b?{parent:b,pool:b}:a):a=Xo(),d={baseLanes:d.baseLanes|n,cachePool:a}),l.memoizedState=d,l.childLanes=ac(e,o,n),t.memoizedState=nc,_a(e.child,l)):(Rn(t),n=e.child,e=n.sibling,n=Jt(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function ic(e,t){return t=Yi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yi(e,t){return e=ht(22,e,null,t),e.lanes=0,e}function uc(e,t,n){return nl(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ah(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ss(e.return,t,n)}function sc(e,t,n,l,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=a,o.treeForkCount=i)}function ih(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var o=De.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,q(De,o),Ke(e,t,l,n),l=se?fa:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ah(e,n,t);else if(e.tag===19)ah(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),sc(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Oi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}sc(t,!0,n,null,i,l);break;case"together":sc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(zl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function d0(e,t,n){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),En(t,Ue,e.memoizedState.cache),Wn();break;case 27:case 5:Wl(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:En(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ws(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Rn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lh(e,t,n):(Rn(t),e=It(e,t,n),e!==null?e.sibling:null);Rn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(zl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return ih(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(De,De.current),l)break;return null;case 22:return t.lanes=0,Ff(e,t,n,t.pendingProps);case 24:En(t,Ue,e.memoizedState.cache)}return It(e,t,n)}function uh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!cc(e,n)&&(t.flags&128)===0)return Ge=!1,d0(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,se&&(t.flags&1048576)!==0&&Uo(t,fa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=el(t.elementType),t.type=e,typeof e=="function")ds(e)?(l=al(e,l),t.tag=1,t=th(null,t,e,l,n)):(t.tag=0,t=tc(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===he){t.tag=11,t=Kf(null,t,e,l,n);break e}else if(a===W){t.tag=14,t=$f(null,t,e,l,n);break e}}throw t=Yt(e)||e,Error(r(306,t,""))}}return t;case 0:return tc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=al(l,t.pendingProps),th(e,t,l,a,n);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(r(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Ms(e,t),va(t,l,null,n);var o=t.memoizedState;if(l=o.cache,En(t,Ue,l),l!==i.cache&&Es(t,[Ue],n,!0),ba(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=nh(e,t,l,n);break e}else if(l!==a){a=At(Error(r(424)),t),ha(a),t=nh(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Mt(e.firstChild),Ve=t,se=!0,xn=null,Rt=!0,n=Wo(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wn(),l===a){t=It(e,t,n);break e}Ke(e,t,l,n)}t=t.child}return t;case 26:return Qi(e,t),e===null?(n=yd(t.type,null,t.pendingProps,null))?t.memoizedState=n:se||(n=t.type,e=t.pendingProps,l=iu(ne.current).createElement(n),l[Ze]=t,l[tt]=e,$e(l,n,e),Qe(l),t.stateNode=l):t.memoizedState=yd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wl(t),e===null&&se&&(l=t.stateNode=md(t.type,t.pendingProps,ne.current),Ve=t,Rt=!0,a=Re,jn(t.type)?(Lc=a,Re=Mt(l.firstChild)):Re=a),Ke(e,t,t.pendingProps.children,n),Qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((a=l=Re)&&(l=Y0(l,t.type,t.pendingProps,Rt),l!==null?(t.stateNode=l,Ve=t,Re=Mt(l.firstChild),Rt=!1,a=!0):a=!1),a||Sn(t)),Wl(t),a=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Hc(a,i)?l=null:o!==null&&Hc(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=js(e,t,a0,null,null,n),Ga._currentValue=a),Qi(e,t),Ke(e,t,l,n),t.child;case 6:return e===null&&se&&((e=n=Re)&&(n=X0(n,t.pendingProps,Rt),n!==null?(t.stateNode=n,Ve=t,Re=null,e=!0):e=!1),e||Sn(t)),null;case 13:return lh(e,t,n);case 4:return Fe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=nl(t,null,l,n):Ke(e,t,l,n),t.child;case 11:return Kf(e,t,t.type,t.pendingProps,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,En(t,t.type,l.value),Ke(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Pn(t),a=Je(a),l=l(a),t.flags|=1,Ke(e,t,l,n),t.child;case 14:return $f(e,t,t.type,t.pendingProps,n);case 15:return Wf(e,t,t.type,t.pendingProps,n);case 19:return ih(e,t,n);case 31:return h0(e,t,n);case 22:return Ff(e,t,n,t.pendingProps);case 24:return Pn(t),l=Je(Ue),e===null?(a=Ts(),a===null&&(a=Te,i=As(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},zs(t),En(t,Ue,a)):((e.lanes&n)!==0&&(Ms(e,t),va(t,null,null,n),ba()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),En(t,Ue,l)):(l=i.cache,En(t,Ue,l),l!==a.cache&&Es(t,[Ue],n,!0))),Ke(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function en(e){e.flags|=4}function rc(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(wh())e.flags|=8192;else throw tl=zi,Rs}else e.flags&=-16777217}function sh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ed(t))if(wh())e.flags|=8192;else throw tl=zi,Rs}function Xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Br():536870912,e.lanes|=t,Gl|=t)}function Ta(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function m0(e,t,n){var l=t.pendingProps;switch(ys(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Wt(Ue),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Rl(t)?en(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vs())),ze(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(en(t),i!==null?(ze(t),sh(t,i)):(ze(t),rc(t,a,null,l,n))):i?i!==e.memoizedState?(en(t),ze(t),sh(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&en(t),ze(t),rc(t,a,e,l,n)),null;case 27:if(ti(t),n=ne.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&en(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return ze(t),null}e=Z.current,Rl(t)?Go(t):(e=md(a,l,n),t.stateNode=e,en(t))}return ze(t),null;case 5:if(ti(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&en(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return ze(t),null}if(i=Z.current,Rl(t))Go(t);else{var o=iu(ne.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(a,{is:l.is}):o.createElement(a)}}i[Ze]=t,i[tt]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch($e(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&en(t)}}return ze(t),rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&en(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=ne.current,Rl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Ve,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ld(e.nodeValue,n)),e||Sn(t,!0)}else e=iu(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Rl(t),n!==null){if(e===null){if(!l)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ze]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=vs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Rl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(r(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(r(317));a[Ze]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),a=!1}else a=vs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Xi(t,t.updateQueue),ze(t),null);case 4:return we(),e===null&&Oc(t.stateNode.containerInfo),ze(t),null;case 10:return Wt(t.type),ze(t),null;case 19:if(H(De),l=t.memoizedState,l===null)return ze(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)Ta(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Oi(e),i!==null){for(t.flags|=128,Ta(l,!1),e=i.updateQueue,t.updateQueue=e,Xi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Do(n,e),n=n.sibling;return q(De,De.current&1|2),se&&Kt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ct()>$i&&(t.flags|=128,a=!0,Ta(l,!1),t.lanes=4194304)}else{if(!a)if(e=Oi(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Xi(t,e),Ta(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!se)return ze(t),null}else 2*ct()-l.renderingStartTime>$i&&n!==536870912&&(t.flags|=128,a=!0,Ta(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ct(),e.sibling=null,n=De.current,q(De,a?n&1|2:n&1),se&&Kt(t,l.treeForkCount),e):(ze(t),null);case 22:case 23:return mt(t),ks(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&Xi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&H(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function p0(e,t){switch(ys(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wt(Ue),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ti(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(r(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(De),null;case 4:return we(),null;case 10:return Wt(t.type),null;case 22:case 23:return mt(t),ks(),e!==null&&H(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wt(Ue),null;case 25:return null;default:return null}}function ch(e,t){switch(ys(t),t.tag){case 3:Wt(Ue),we();break;case 26:case 27:case 5:ti(t);break;case 4:we();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:H(De);break;case 10:Wt(t.type);break;case 22:case 23:mt(t),ks(),e!==null&&H(In);break;case 24:Wt(Ue)}}function Ra(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,o=n.inst;l=i(),o.destroy=l}n=n.next}while(n!==a)}}catch(d){ge(t,t.return,d)}}function Mn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,a=t;var b=n,R=d;try{R()}catch(O){ge(a,b,O)}}}l=l.next}while(l!==i)}}catch(O){ge(t,t.return,O)}}function rh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Po(t,n)}catch(l){ge(e,e.return,l)}}}function oh(e,t,n){n.props=al(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ge(e,t,l)}}function za(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){ge(e,t,a)}}function Lt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){ge(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ge(e,t,a)}else n.current=null}function fh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){ge(e,e.return,a)}}function oc(e,t,n){try{var l=e.stateNode;U0(l,e.type,n,t),l[tt]=t}catch(a){ge(e,e.return,a)}}function hh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jn(e.type)||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}function Zi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}function dh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$e(t,l,n),t[Ze]=e,t[tt]=n}catch(i){ge(e,e.return,i)}}var tn=!1,qe=!1,dc=!1,mh=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function g0(e,t){if(e=e.containerInfo,Dc=hu,e=To(e),us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,d=-1,b=-1,R=0,O=0,j=e,z=null;t:for(;;){for(var M;j!==n||a!==0&&j.nodeType!==3||(d=o+a),j!==i||l!==0&&j.nodeType!==3||(b=o+l),j.nodeType===3&&(o+=j.nodeValue.length),(M=j.firstChild)!==null;)z=j,j=M;for(;;){if(j===e)break t;if(z===n&&++R===a&&(d=o),z===i&&++O===l&&(b=o),(M=j.nextSibling)!==null)break;j=z,z=j.parentNode}j=M}n=d===-1||b===-1?null:{start:d,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:e,selectionRange:n},hu=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var Y=al(n.type,a);e=l.getSnapshotBeforeUpdate(Y,i),l.__reactInternalSnapshotBeforeUpdate=e}catch($){ge(n,n.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Bc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function ph(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:ln(e,n),l&4&&Ra(5,n);break;case 1:if(ln(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(n,n.return,o)}else{var a=al(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(n,n.return,o)}}l&64&&rh(n),l&512&&za(n,n.return);break;case 3:if(ln(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Po(e,t)}catch(o){ge(n,n.return,o)}}break;case 27:t===null&&l&4&&dh(n);case 26:case 5:ln(e,n),t===null&&l&4&&fh(n),l&512&&za(n,n.return);break;case 12:ln(e,n);break;case 31:ln(e,n),l&4&&bh(e,n);break;case 13:ln(e,n),l&4&&vh(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=T0.bind(null,n),Z0(e,n))));break;case 22:if(l=n.memoizedState!==null||tn,!l){t=t!==null&&t.memoizedState!==null||qe,a=tn;var i=qe;tn=l,(qe=t)&&!i?an(e,n,(n.subtreeFlags&8772)!==0):ln(e,n),tn=a,qe=i}break;case 30:break;default:ln(e,n)}}function gh(e){var t=e.alternate;t!==null&&(e.alternate=null,gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,lt=!1;function nn(e,t,n){for(n=n.child;n!==null;)yh(e,t,n),n=n.sibling}function yh(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 26:qe||Lt(n,t),nn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||Lt(n,t);var l=Me,a=lt;jn(n.type)&&(Me=n.stateNode,lt=!1),nn(e,t,n),Ha(n.stateNode),Me=l,lt=a;break;case 5:qe||Lt(n,t);case 6:if(l=Me,a=lt,Me=null,nn(e,t,n),Me=l,lt=a,Me!==null)if(lt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(i){ge(n,t,i)}else try{Me.removeChild(n.stateNode)}catch(i){ge(n,t,i)}break;case 18:Me!==null&&(lt?(e=Me,rd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jl(e)):rd(Me,n.stateNode));break;case 4:l=Me,a=lt,Me=n.stateNode.containerInfo,lt=!0,nn(e,t,n),Me=l,lt=a;break;case 0:case 11:case 14:case 15:Mn(2,n,t),qe||Mn(4,n,t),nn(e,t,n);break;case 1:qe||(Lt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&oh(n,t,l)),nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:qe=(l=qe)||n.memoizedState!==null,nn(e,t,n),qe=l;break;default:nn(e,t,n)}}function bh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jl(e)}catch(n){ge(t,t.return,n)}}}function vh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jl(e)}catch(n){ge(t,t.return,n)}}function y0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mh),t;default:throw Error(r(435,e.tag))}}function Vi(e,t){var n=y0(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=R0.bind(null,e,l);l.then(a,a)}})}function at(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(jn(d.type)){Me=d.stateNode,lt=!1;break e}break;case 5:Me=d.stateNode,lt=!1;break e;case 3:case 4:Me=d.stateNode.containerInfo,lt=!0;break e}d=d.return}if(Me===null)throw Error(r(160));yh(i,o,a),Me=null,lt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)xh(t,e),t=t.sibling}var Dt=null;function xh(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),it(e),l&4&&(Mn(3,e,e.return),Ra(3,e),Mn(5,e,e.return));break;case 1:at(t,e),it(e),l&512&&(qe||n===null||Lt(n,n.return)),l&64&&tn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Dt;if(at(t,e),it(e),l&512&&(qe||n===null||Lt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[ea]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),$e(i,l,n),i[Ze]=e,Qe(i),l=i;break e;case"link":var o=xd("link","href",a).get(l+(n.href||""));if(o){for(var d=0;d<o.length;d++)if(i=o[d],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(d,1);break t}}i=a.createElement(l),$e(i,l,n),a.head.appendChild(i);break;case"meta":if(o=xd("meta","content",a).get(l+(n.content||""))){for(d=0;d<o.length;d++)if(i=o[d],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(d,1);break t}}i=a.createElement(l),$e(i,l,n),a.head.appendChild(i);break;default:throw Error(r(468,l))}i[Ze]=e,Qe(i),l=i}e.stateNode=l}else Sd(a,e.type,e.stateNode);else e.stateNode=vd(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?Sd(a,e.type,e.stateNode):vd(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&oc(e,e.memoizedProps,n.memoizedProps)}break;case 27:at(t,e),it(e),l&512&&(qe||n===null||Lt(n,n.return)),n!==null&&l&4&&oc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(at(t,e),it(e),l&512&&(qe||n===null||Lt(n,n.return)),e.flags&32){a=e.stateNode;try{gl(a,"")}catch(Y){ge(e,e.return,Y)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,oc(e,a,n!==null?n.memoizedProps:a)),l&1024&&(dc=!0);break;case 6:if(at(t,e),it(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(Y){ge(e,e.return,Y)}}break;case 3:if(cu=null,a=Dt,Dt=uu(t.containerInfo),at(t,e),Dt=a,it(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Jl(t.containerInfo)}catch(Y){ge(e,e.return,Y)}dc&&(dc=!1,Sh(e));break;case 4:l=Dt,Dt=uu(e.stateNode.containerInfo),at(t,e),it(e),Dt=l;break;case 12:at(t,e),it(e);break;case 31:at(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vi(e,l)));break;case 13:at(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ki=ct()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vi(e,l)));break;case 22:a=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,R=tn,O=qe;if(tn=R||a,qe=O||b,at(t,e),qe=O,tn=R,it(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||b||tn||qe||il(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(i=b.stateNode,a)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=b.stateNode;var j=b.memoizedProps.style,z=j!=null&&j.hasOwnProperty("display")?j.display:null;d.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(Y){ge(b,b.return,Y)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=a?"":b.memoizedProps}catch(Y){ge(b,b.return,Y)}}}else if(t.tag===18){if(n===null){b=t;try{var M=b.stateNode;a?od(M,!0):od(b.stateNode,!1)}catch(Y){ge(b,b.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Vi(e,n))));break;case 19:at(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vi(e,l)));break;case 30:break;case 21:break;default:at(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(hh(l)){n=l;break}l=l.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var a=n.stateNode,i=fc(e);Zi(e,i,a);break;case 5:var o=n.stateNode;n.flags&32&&(gl(o,""),n.flags&=-33);var d=fc(e);Zi(e,d,o);break;case 3:case 4:var b=n.stateNode.containerInfo,R=fc(e);hc(e,R,b);break;default:throw Error(r(161))}}catch(O){ge(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ln(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ph(e,t.alternate,t),t=t.sibling}function il(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Mn(4,t,t.return),il(t);break;case 1:Lt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&oh(t,t.return,n),il(t);break;case 27:Ha(t.stateNode);case 26:case 5:Lt(t,t.return),il(t);break;case 22:t.memoizedState===null&&il(t);break;case 30:il(t);break;default:il(t)}e=e.sibling}}function an(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:an(a,i,n),Ra(4,i);break;case 1:if(an(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(R){ge(l,l.return,R)}if(l=i,a=l.updateQueue,a!==null){var d=l.stateNode;try{var b=a.shared.hiddenCallbacks;if(b!==null)for(a.shared.hiddenCallbacks=null,a=0;a<b.length;a++)Fo(b[a],d)}catch(R){ge(l,l.return,R)}}n&&o&64&&rh(i),za(i,i.return);break;case 27:dh(i);case 26:case 5:an(a,i,n),n&&l===null&&o&4&&fh(i),za(i,i.return);break;case 12:an(a,i,n);break;case 31:an(a,i,n),n&&o&4&&bh(a,i);break;case 13:an(a,i,n),n&&o&4&&vh(a,i);break;case 22:i.memoizedState===null&&an(a,i,n),za(i,i.return);break;case 30:break;default:an(a,i,n)}t=t.sibling}}function mc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function pc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function jt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Eh(e,t,n,l),t=t.sibling}function Eh(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:jt(e,t,n,l),a&2048&&Ra(9,t);break;case 1:jt(e,t,n,l);break;case 3:jt(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(a&2048){jt(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,d=i.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){ge(t,t.return,b)}}else jt(e,t,n,l);break;case 31:jt(e,t,n,l);break;case 13:jt(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?jt(e,t,n,l):Ma(e,t):i._visibility&2?jt(e,t,n,l):(i._visibility|=2,Hl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&mc(o,t);break;case 24:jt(e,t,n,l),a&2048&&pc(t.alternate,t);break;default:jt(e,t,n,l)}}function Hl(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,d=n,b=l,R=o.flags;switch(o.tag){case 0:case 11:case 15:Hl(i,o,d,b,a),Ra(8,o);break;case 23:break;case 22:var O=o.stateNode;o.memoizedState!==null?O._visibility&2?Hl(i,o,d,b,a):Ma(i,o):(O._visibility|=2,Hl(i,o,d,b,a)),a&&R&2048&&mc(o.alternate,o);break;case 24:Hl(i,o,d,b,a),a&&R&2048&&pc(o.alternate,o);break;default:Hl(i,o,d,b,a)}t=t.sibling}}function Ma(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:Ma(n,l),a&2048&&mc(l.alternate,l);break;case 24:Ma(n,l),a&2048&&pc(l.alternate,l);break;default:Ma(n,l)}t=t.sibling}}var Ca=8192;function Ul(e,t,n){if(e.subtreeFlags&Ca)for(e=e.child;e!==null;)Ah(e,t,n),e=e.sibling}function Ah(e,t,n){switch(e.tag){case 26:Ul(e,t,n),e.flags&Ca&&e.memoizedState!==null&&lg(n,Dt,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,n);break;case 3:case 4:var l=Dt;Dt=uu(e.stateNode.containerInfo),Ul(e,t,n),Dt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ca,Ca=16777216,Ul(e,t,n),Ca=l):Ul(e,t,n));break;default:Ul(e,t,n)}}function _h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Na(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Ye=l,Rh(l,e)}_h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Th(e),e=e.sibling}function Th(e){switch(e.tag){case 0:case 11:case 15:Na(e),e.flags&2048&&Mn(9,e,e.return);break;case 3:Na(e);break;case 12:Na(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Na(e);break;default:Na(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Ye=l,Rh(l,e)}_h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Mn(8,t,t.return),Ji(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function Rh(e,t){for(;Ye!==null;){var n=Ye;switch(n.tag){case 0:case 11:case 15:Mn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:da(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Ye=l;else e:for(n=e;Ye!==null;){l=Ye;var a=l.sibling,i=l.return;if(gh(l),l===n){Ye=null;break e}if(a!==null){a.return=i,Ye=a;break e}Ye=i}}}var b0={getCacheForType:function(e){var t=Je(Ue),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Je(Ue).controller.signal}},v0=typeof WeakMap=="function"?WeakMap:Map,fe=0,Te=null,le=null,ie=0,pe=0,pt=null,Cn=!1,Bl=!1,gc=!1,un=0,Oe=0,Nn=0,ul=0,yc=0,gt=0,Gl=0,Oa=null,ut=null,bc=!1,Ki=0,zh=0,$i=1/0,Wi=null,On=null,Le=0,kn=null,ql=null,sn=0,vc=0,xc=null,Mh=null,ka=0,Sc=null;function yt(){return(fe&2)!==0&&ie!==0?ie&-ie:w.T!==null?zc():Qr()}function Ch(){if(gt===0)if((ie&536870912)===0||se){var e=ai;ai<<=1,(ai&3932160)===0&&(ai=262144),gt=e}else gt=536870912;return e=dt.current,e!==null&&(e.flags|=32),gt}function st(e,t,n){(e===Te&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ll(e,0),wn(e,ie,gt,!1)),Il(e,n),((fe&2)===0||e!==Te)&&(e===Te&&((fe&2)===0&&(ul|=n),Oe===4&&wn(e,ie,gt,!1)),Qt(e))}function Nh(e,t,n){if((fe&6)!==0)throw Error(r(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Pl(e,t),a=l?E0(e,t):Ac(e,t,!0),i=l;do{if(a===0){Bl&&!l&&wn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!x0(n)){a=Ac(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;a=Oa;var b=d.current.memoizedState.isDehydrated;if(b&&(Ll(d,o).flags|=256),o=Ac(d,o,!1),o!==2){if(gc&&!b){d.errorRecoveryDisabledLanes|=i,ul|=i,a=4;break e}i=ut,ut=a,i!==null&&(ut===null?ut=i:ut.push.apply(ut,i))}a=o}if(i=!1,a!==2)continue}}if(a===1){Ll(e,0),wn(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:wn(l,t,gt,!Cn);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(a=Ki+300-ct(),10<a)){if(wn(l,t,gt,!Cn),ui(l,0,!0)!==0)break e;sn=t,l.timeoutHandle=sd(Oh.bind(null,l,n,ut,Wi,bc,t,gt,ul,Gl,Cn,i,"Throttled",-0,0),a);break e}Oh(l,n,ut,Wi,bc,t,gt,ul,Gl,Cn,i,null,-0,0)}}break}while(!0);Qt(e)}function Oh(e,t,n,l,a,i,o,d,b,R,O,j,z,M){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},Ah(t,i,j);var Y=(i&62914560)===i?Ki-ct():(i&4194048)===i?zh-ct():0;if(Y=ag(j,Y),Y!==null){sn=i,e.cancelPendingCommit=Y(Gh.bind(null,e,t,i,n,l,a,o,d,b,O,j,null,z,M)),wn(e,i,o,!R);return}}Gh(e,t,i,n,l,a,o,d,b)}function x0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!ft(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t,n,l){t&=~yc,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-ot(a),o=1<<i;l[i]=-1,a&=~o}n!==0&&Gr(e,n,t)}function Fi(){return(fe&6)===0?(wa(0),!1):!0}function Ec(){if(le!==null){if(pe===0)var e=le.return;else e=le,$t=Fn=null,Bs(e),Ol=null,pa=0,e=le;for(;e!==null;)ch(e.alternate,e),e=e.return;le=null}}function Ll(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,q0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),sn=0,Ec(),Te=e,le=n=Jt(e.current,null),ie=t,pe=0,pt=null,Cn=!1,Bl=Pl(e,t),gc=!1,Gl=gt=yc=ul=Nn=Oe=0,ut=Oa=null,bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-ot(l),i=1<<a;t|=e[a],l&=~i}return un=t,bi(),n}function kh(e,t){ee=null,w.H=Aa,t===Nl||t===Ri?(t=Jo(),pe=3):t===Rs?(t=Jo(),pe=4):pe=t===ec?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,le===null&&(Oe=1,qi(e,At(t,e.current)))}function wh(){var e=dt.current;return e===null?!0:(ie&4194048)===ie?zt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===zt:!1}function Dh(){var e=w.H;return w.H=Aa,e===null?Aa:e}function jh(){var e=w.A;return w.A=b0,e}function Pi(){Oe=4,Cn||(ie&4194048)!==ie&&dt.current!==null||(Bl=!0),(Nn&134217727)===0&&(ul&134217727)===0||Te===null||wn(Te,ie,gt,!1)}function Ac(e,t,n){var l=fe;fe|=2;var a=Dh(),i=jh();(Te!==e||ie!==t)&&(Wi=null,Ll(e,t)),t=!1;var o=Oe;e:do try{if(pe!==0&&le!==null){var d=le,b=pt;switch(pe){case 8:Ec(),o=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(t=!0);var R=pe;if(pe=0,pt=null,Ql(e,d,b,R),n&&Bl){o=0;break e}break;default:R=pe,pe=0,pt=null,Ql(e,d,b,R)}}S0(),o=Oe;break}catch(O){kh(e,O)}while(!0);return t&&e.shellSuspendCounter++,$t=Fn=null,fe=l,w.H=a,w.A=i,le===null&&(Te=null,ie=0,bi()),o}function S0(){for(;le!==null;)Hh(le)}function E0(e,t){var n=fe;fe|=2;var l=Dh(),a=jh();Te!==e||ie!==t?(Wi=null,$i=ct()+500,Ll(e,t)):Bl=Pl(e,t);e:do try{if(pe!==0&&le!==null){t=le;var i=pt;t:switch(pe){case 1:pe=0,pt=null,Ql(e,t,i,1);break;case 2:case 9:if(Zo(i)){pe=0,pt=null,Uh(t);break}t=function(){pe!==2&&pe!==9||Te!==e||(pe=7),Qt(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:Zo(i)?(pe=0,pt=null,Uh(t)):(pe=0,pt=null,Ql(e,t,i,7));break;case 5:var o=null;switch(le.tag){case 26:o=le.memoizedState;case 5:case 27:var d=le;if(o?Ed(o):d.stateNode.complete){pe=0,pt=null;var b=d.sibling;if(b!==null)le=b;else{var R=d.return;R!==null?(le=R,Ii(R)):le=null}break t}}pe=0,pt=null,Ql(e,t,i,5);break;case 6:pe=0,pt=null,Ql(e,t,i,6);break;case 8:Ec(),Oe=6;break e;default:throw Error(r(462))}}A0();break}catch(O){kh(e,O)}while(!0);return $t=Fn=null,w.H=l,w.A=a,fe=n,le!==null?0:(Te=null,ie=0,bi(),Oe)}function A0(){for(;le!==null&&!Vm();)Hh(le)}function Hh(e){var t=uh(e.alternate,e,un);e.memoizedProps=e.pendingProps,t===null?Ii(e):le=t}function Uh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=eh(n,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=eh(n,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:Bs(t);default:ch(n,t),t=le=Do(t,un),t=uh(n,t,un)}e.memoizedProps=e.pendingProps,t===null?Ii(e):le=t}function Ql(e,t,n,l){$t=Fn=null,Bs(t),Ol=null,pa=0;var a=t.return;try{if(f0(e,a,t,n,ie)){Oe=1,qi(e,At(n,e.current)),le=null;return}}catch(i){if(a!==null)throw le=a,i;Oe=1,qi(e,At(n,e.current)),le=null;return}t.flags&32768?(se||l===1?e=!0:Bl||(ie&536870912)!==0?e=!1:(Cn=e=!0,(l===2||l===9||l===3||l===6)&&(l=dt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bh(t,e)):Ii(t)}function Ii(e){var t=e;do{if((t.flags&32768)!==0){Bh(t,Cn);return}e=t.return;var n=m0(t.alternate,t,un);if(n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Oe===0&&(Oe=5)}function Bh(e,t){do{var n=p0(e.alternate,e);if(n!==null){n.flags&=32767,le=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=n}while(e!==null);Oe=6,le=null}function Gh(e,t,n,l,a,i,o,d,b){e.cancelPendingCommit=null;do eu();while(Le!==0);if((fe&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=fs,np(e,n,i,o,d,b),e===Te&&(le=Te=null,ie=0),ql=t,kn=e,sn=n,vc=i,xc=a,Mh=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,z0(ni,function(){return Xh(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,a=G.p,G.p=2,o=fe,fe|=4;try{g0(e,t,n)}finally{fe=o,G.p=a,w.T=l}}Le=1,qh(),Lh(),Qh()}}function qh(){if(Le===1){Le=0;var e=kn,t=ql,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=w.T,w.T=null;var l=G.p;G.p=2;var a=fe;fe|=4;try{xh(t,e);var i=jc,o=To(e.containerInfo),d=i.focusedElem,b=i.selectionRange;if(o!==d&&d&&d.ownerDocument&&_o(d.ownerDocument.documentElement,d)){if(b!==null&&us(d)){var R=b.start,O=b.end;if(O===void 0&&(O=R),"selectionStart"in d)d.selectionStart=R,d.selectionEnd=Math.min(O,d.value.length);else{var j=d.ownerDocument||document,z=j&&j.defaultView||window;if(z.getSelection){var M=z.getSelection(),Y=d.textContent.length,$=Math.min(b.start,Y),Ee=b.end===void 0?$:Math.min(b.end,Y);!M.extend&&$>Ee&&(o=Ee,Ee=$,$=o);var _=Ao(d,$),x=Ao(d,Ee);if(_&&x&&(M.rangeCount!==1||M.anchorNode!==_.node||M.anchorOffset!==_.offset||M.focusNode!==x.node||M.focusOffset!==x.offset)){var T=j.createRange();T.setStart(_.node,_.offset),M.removeAllRanges(),$>Ee?(M.addRange(T),M.extend(x.node,x.offset)):(T.setEnd(x.node,x.offset),M.addRange(T))}}}}for(j=[],M=d;M=M.parentNode;)M.nodeType===1&&j.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<j.length;d++){var D=j[d];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}hu=!!Dc,jc=Dc=null}finally{fe=a,G.p=l,w.T=n}}e.current=t,Le=2}}function Lh(){if(Le===2){Le=0;var e=kn,t=ql,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=w.T,w.T=null;var l=G.p;G.p=2;var a=fe;fe|=4;try{ph(e,t.alternate,t)}finally{fe=a,G.p=l,w.T=n}}Le=3}}function Qh(){if(Le===4||Le===3){Le=0,Jm();var e=kn,t=ql,n=sn,l=Mh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,ql=kn=null,Yh(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(On=null),Lu(n),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,a=G.p,G.p=2,w.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var d=l[o];i(d.value,{componentStack:d.stack})}}finally{w.T=t,G.p=a}}(sn&3)!==0&&eu(),Qt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Sc?ka++:(ka=0,Sc=e):ka=0,wa(0)}}function Yh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function eu(){return qh(),Lh(),Qh(),Xh()}function Xh(){if(Le!==5)return!1;var e=kn,t=vc;vc=0;var n=Lu(sn),l=w.T,a=G.p;try{G.p=32>n?32:n,w.T=null,n=xc,xc=null;var i=kn,o=sn;if(Le=0,ql=kn=null,sn=0,(fe&6)!==0)throw Error(r(331));var d=fe;if(fe|=4,Th(i.current),Eh(i,i.current,o,n),fe=d,wa(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Fl,i)}catch{}return!0}finally{G.p=a,w.T=l,Yh(e,t)}}function Zh(e,t,n){t=At(n,t),t=Is(e.stateNode,t,2),e=Tn(e,t,2),e!==null&&(Il(e,2),Qt(e))}function ge(e,t,n){if(e.tag===3)Zh(e,e,n);else for(;t!==null;){if(t.tag===3){Zh(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(On===null||!On.has(l))){e=At(n,e),n=Vf(2),l=Tn(t,n,2),l!==null&&(Jf(n,l,t,e),Il(l,2),Qt(l));break}}t=t.return}}function _c(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new v0;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(gc=!0,a.add(n),e=_0.bind(null,e,t,n),t.then(e,e))}function _0(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(ie&n)===n&&(Oe===4||Oe===3&&(ie&62914560)===ie&&300>ct()-Ki?(fe&2)===0&&Ll(e,0):yc|=n,Gl===ie&&(Gl=0)),Qt(e)}function Vh(e,t){t===0&&(t=Br()),e=Kn(e,t),e!==null&&(Il(e,t),Qt(e))}function T0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vh(e,n)}function R0(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),Vh(e,n)}function z0(e,t){return Uu(e,t)}var tu=null,Yl=null,Tc=!1,nu=!1,Rc=!1,Dn=0;function Qt(e){e!==Yl&&e.next===null&&(Yl===null?tu=Yl=e:Yl=Yl.next=e),nu=!0,Tc||(Tc=!0,C0())}function wa(e,t){if(!Rc&&nu){Rc=!0;do for(var n=!1,l=tu;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var o=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=a&~(o&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Wh(l,i))}else i=ie,i=ui(l,l===Te?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Pl(l,i)||(n=!0,Wh(l,i));l=l.next}while(n);Rc=!1}}function M0(){Jh()}function Jh(){nu=Tc=!1;var e=0;Dn!==0&&G0()&&(e=Dn);for(var t=ct(),n=null,l=tu;l!==null;){var a=l.next,i=Kh(l,t);i===0?(l.next=null,n===null?tu=a:n.next=a,a===null&&(Yl=n)):(n=l,(e!==0||(i&3)!==0)&&(nu=!0)),l=a}Le!==0&&Le!==5||wa(e),Dn!==0&&(Dn=0)}function Kh(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ot(i),d=1<<o,b=a[o];b===-1?((d&n)===0||(d&l)!==0)&&(a[o]=tp(d,t)):b<=t&&(e.expiredLanes|=d),i&=~d}if(t=Te,n=ie,n=ui(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Bu(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Pl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Bu(l),Lu(n)){case 2:case 8:n=Hr;break;case 32:n=ni;break;case 268435456:n=Ur;break;default:n=ni}return l=$h.bind(null,e),n=Uu(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Bu(l),e.callbackPriority=2,e.callbackNode=null,2}function $h(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(eu()&&e.callbackNode!==n)return null;var l=ie;return l=ui(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Nh(e,l,t),Kh(e,ct()),e.callbackNode!=null&&e.callbackNode===n?$h.bind(null,e):null)}function Wh(e,t){if(eu())return null;Nh(e,t,!0)}function C0(){L0(function(){(fe&6)!==0?Uu(jr,M0):Jh()})}function zc(){if(Dn===0){var e=Ml;e===0&&(e=li,li<<=1,(li&261888)===0&&(li=256)),Dn=e}return Dn}function Fh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function Ph(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function N0(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Fh((a[tt]||null).action),o=l.submitter;o&&(t=(t=o[tt]||null)?Fh(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var d=new mi("action","action",null,l,a);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Dn!==0){var b=o?Ph(a,o):new FormData(a);Js(n,{pending:!0,data:b,method:a.method,action:i},null,b)}}else typeof i=="function"&&(d.preventDefault(),b=o?Ph(a,o):new FormData(a),Js(n,{pending:!0,data:b,method:a.method,action:i},i,b))},currentTarget:a}]})}}for(var Mc=0;Mc<os.length;Mc++){var Cc=os[Mc],O0=Cc.toLowerCase(),k0=Cc[0].toUpperCase()+Cc.slice(1);wt(O0,"on"+k0)}wt(Mo,"onAnimationEnd"),wt(Co,"onAnimationIteration"),wt(No,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(Kp,"onTransitionRun"),wt($p,"onTransitionStart"),wt(Wp,"onTransitionCancel"),wt(Oo,"onTransitionEnd"),ml("onMouseEnter",["mouseout","mouseover"]),ml("onMouseLeave",["mouseout","mouseover"]),ml("onPointerEnter",["pointerout","pointerover"]),ml("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Da));function Ih(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var d=l[o],b=d.instance,R=d.currentTarget;if(d=d.listener,b!==i&&a.isPropagationStopped())break e;i=d,a.currentTarget=R;try{i(a)}catch(O){yi(O)}a.currentTarget=null,i=b}else for(o=0;o<l.length;o++){if(d=l[o],b=d.instance,R=d.currentTarget,d=d.listener,b!==i&&a.isPropagationStopped())break e;i=d,a.currentTarget=R;try{i(a)}catch(O){yi(O)}a.currentTarget=null,i=b}}}}function ae(e,t){var n=t[Qu];n===void 0&&(n=t[Qu]=new Set);var l=e+"__bubble";n.has(l)||(ed(t,e,2,!1),n.add(l))}function Nc(e,t,n){var l=0;t&&(l|=4),ed(n,e,l,t)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[lu]){e[lu]=!0,Zr.forEach(function(n){n!=="selectionchange"&&(w0.has(n)||Nc(n,!1,e),Nc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lu]||(t[lu]=!0,Nc("selectionchange",!1,t))}}function ed(e,t,n,l){switch(Cd(t)){case 2:var a=sg;break;case 8:a=cg;break;default:a=Vc}n=a.bind(null,t,n,e),a=void 0,!Fu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function kc(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===a)break;if(o===4)for(o=l.return;o!==null;){var b=o.tag;if((b===3||b===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;d!==null;){if(o=fl(d),o===null)return;if(b=o.tag,b===5||b===6||b===26||b===27){l=i=o;continue e}d=d.parentNode}}l=l.return}lo(function(){var R=i,O=$u(n),j=[];e:{var z=ko.get(e);if(z!==void 0){var M=mi,Y=e;switch(e){case"keypress":if(hi(n)===0)break e;case"keydown":case"keyup":M=Rp;break;case"focusin":Y="focus",M=ts;break;case"focusout":Y="blur",M=ts;break;case"beforeblur":case"afterblur":M=ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Cp;break;case Mo:case Co:case No:M=yp;break;case Oo:M=Op;break;case"scroll":case"scrollend":M=hp;break;case"wheel":M=wp;break;case"copy":case"cut":case"paste":M=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=co;break;case"toggle":case"beforetoggle":M=jp}var $=(t&4)!==0,Ee=!$&&(e==="scroll"||e==="scrollend"),_=$?z!==null?z+"Capture":null:z;$=[];for(var x=R,T;x!==null;){var D=x;if(T=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||T===null||_===null||(D=na(x,_),D!=null&&$.push(ja(x,D,T))),Ee)break;x=x.return}0<$.length&&(z=new M(z,Y,null,n,O),j.push({event:z,listeners:$}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",z&&n!==Ku&&(Y=n.relatedTarget||n.fromElement)&&(fl(Y)||Y[ol]))break e;if((M||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,M?(Y=n.relatedTarget||n.toElement,M=R,Y=Y?fl(Y):null,Y!==null&&(Ee=h(Y),$=Y.tag,Y!==Ee||$!==5&&$!==27&&$!==6)&&(Y=null)):(M=null,Y=R),M!==Y)){if($=uo,D="onMouseLeave",_="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&($=co,D="onPointerLeave",_="onPointerEnter",x="pointer"),Ee=M==null?z:ta(M),T=Y==null?z:ta(Y),z=new $(D,x+"leave",M,n,O),z.target=Ee,z.relatedTarget=T,D=null,fl(O)===R&&($=new $(_,x+"enter",Y,n,O),$.target=T,$.relatedTarget=Ee,D=$),Ee=D,M&&Y)t:{for($=D0,_=M,x=Y,T=0,D=_;D;D=$(D))T++;D=0;for(var J=x;J;J=$(J))D++;for(;0<T-D;)_=$(_),T--;for(;0<D-T;)x=$(x),D--;for(;T--;){if(_===x||x!==null&&_===x.alternate){$=_;break t}_=$(_),x=$(x)}$=null}else $=null;M!==null&&td(j,z,M,$,!1),Y!==null&&Ee!==null&&td(j,Ee,Y,$,!0)}}e:{if(z=R?ta(R):window,M=z.nodeName&&z.nodeName.toLowerCase(),M==="select"||M==="input"&&z.type==="file")var ce=yo;else if(po(z))if(bo)ce=Zp;else{ce=Yp;var V=Qp}else M=z.nodeName,!M||M.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?R&&Ju(R.elementType)&&(ce=yo):ce=Xp;if(ce&&(ce=ce(e,R))){go(j,ce,n,O);break e}V&&V(e,z,R),e==="focusout"&&R&&z.type==="number"&&R.memoizedProps.value!=null&&Vu(z,"number",z.value)}switch(V=R?ta(R):window,e){case"focusin":(po(V)||V.contentEditable==="true")&&(xl=V,ss=R,oa=null);break;case"focusout":oa=ss=xl=null;break;case"mousedown":cs=!0;break;case"contextmenu":case"mouseup":case"dragend":cs=!1,Ro(j,n,O);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":Ro(j,n,O)}var te;if(ls)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else vl?ho(e,n)&&(ue="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ue="onCompositionStart");ue&&(ro&&n.locale!=="ko"&&(vl||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&vl&&(te=ao()):(bn=O,Pu="value"in bn?bn.value:bn.textContent,vl=!0)),V=au(R,ue),0<V.length&&(ue=new so(ue,e,null,n,O),j.push({event:ue,listeners:V}),te?ue.data=te:(te=mo(n),te!==null&&(ue.data=te)))),(te=Up?Bp(e,n):Gp(e,n))&&(ue=au(R,"onBeforeInput"),0<ue.length&&(V=new so("onBeforeInput","beforeinput",null,n,O),j.push({event:V,listeners:ue}),V.data=te)),N0(j,e,R,n,O)}Ih(j,t)})}function ja(e,t,n){return{instance:e,listener:t,currentTarget:n}}function au(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=na(e,n),a!=null&&l.unshift(ja(e,a,i)),a=na(e,t),a!=null&&l.push(ja(e,a,i))),e.tag===3)return l;e=e.return}return[]}function D0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function td(e,t,n,l,a){for(var i=t._reactName,o=[];n!==null&&n!==l;){var d=n,b=d.alternate,R=d.stateNode;if(d=d.tag,b!==null&&b===l)break;d!==5&&d!==26&&d!==27||R===null||(b=R,a?(R=na(n,i),R!=null&&o.unshift(ja(n,R,b))):a||(R=na(n,i),R!=null&&o.push(ja(n,R,b)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var j0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function nd(e){return(typeof e=="string"?e:""+e).replace(j0,`
`).replace(H0,"")}function ld(e,t){return t=nd(t),nd(e)===t}function Se(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||gl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&gl(e,""+l);break;case"className":ci(e,"class",l);break;case"tabIndex":ci(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ci(e,n,l);break;case"style":to(e,l,i);break;case"data":if(t!=="object"){ci(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=oi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",a.name,a,null),Se(e,t,"formEncType",a.formEncType,a,null),Se(e,t,"formMethod",a.formMethod,a,null),Se(e,t,"formTarget",a.formTarget,a,null)):(Se(e,t,"encType",a.encType,a,null),Se(e,t,"method",a.method,a,null),Se(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=oi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=oi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ae("beforetoggle",e),ae("toggle",e),si(e,"popover",l);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":si(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=op.get(n)||n,si(e,n,l))}}function wc(e,t,n,l,a,i){switch(n){case"style":to(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof l=="string"?gl(e,l):(typeof l=="number"||typeof l=="bigint")&&gl(e,""+l);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[tt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):si(e,n,l)}}}function $e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Se(e,t,i,o,n,null)}}a&&Se(e,t,"srcSet",n.srcSet,n,null),l&&Se(e,t,"src",n.src,n,null);return;case"input":ae("invalid",e);var d=i=o=a=null,b=null,R=null;for(l in n)if(n.hasOwnProperty(l)){var O=n[l];if(O!=null)switch(l){case"name":a=O;break;case"type":o=O;break;case"checked":b=O;break;case"defaultChecked":R=O;break;case"value":i=O;break;case"defaultValue":d=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:Se(e,t,l,O,n,null)}}Fr(e,i,d,b,R,o,a,!1);return;case"select":ae("invalid",e),l=o=i=null;for(a in n)if(n.hasOwnProperty(a)&&(d=n[a],d!=null))switch(a){case"value":i=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:Se(e,t,a,d,n,null)}t=i,n=o,e.multiple=!!l,t!=null?pl(e,!!l,t,!1):n!=null&&pl(e,!!l,n,!0);return;case"textarea":ae("invalid",e),i=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(d=n[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":a=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:Se(e,t,o,d,n,null)}Ir(e,l,a,i);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(l=n[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Se(e,t,b,l,n,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(l=0;l<Da.length;l++)ae(Da[l],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(l=n[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Se(e,t,R,l,n,null)}return;default:if(Ju(t)){for(O in n)n.hasOwnProperty(O)&&(l=n[O],l!==void 0&&wc(e,t,O,l,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(l=n[d],l!=null&&Se(e,t,d,l,n,null))}function U0(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,o=null,d=null,b=null,R=null,O=null;for(M in n){var j=n[M];if(n.hasOwnProperty(M)&&j!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":b=j;default:l.hasOwnProperty(M)||Se(e,t,M,null,l,j)}}for(var z in l){var M=l[z];if(j=n[z],l.hasOwnProperty(z)&&(M!=null||j!=null))switch(z){case"type":i=M;break;case"name":a=M;break;case"checked":R=M;break;case"defaultChecked":O=M;break;case"value":o=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:M!==j&&Se(e,t,z,M,l,j)}}Zu(e,o,d,b,R,O,i,a);return;case"select":M=o=d=z=null;for(i in n)if(b=n[i],n.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":M=b;default:l.hasOwnProperty(i)||Se(e,t,i,null,l,b)}for(a in l)if(i=l[a],b=n[a],l.hasOwnProperty(a)&&(i!=null||b!=null))switch(a){case"value":z=i;break;case"defaultValue":d=i;break;case"multiple":o=i;default:i!==b&&Se(e,t,a,i,l,b)}t=d,n=o,l=M,z!=null?pl(e,!!n,z,!1):!!l!=!!n&&(t!=null?pl(e,!!n,t,!0):pl(e,!!n,n?[]:"",!1));return;case"textarea":M=z=null;for(d in n)if(a=n[d],n.hasOwnProperty(d)&&a!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Se(e,t,d,null,l,a)}for(o in l)if(a=l[o],i=n[o],l.hasOwnProperty(o)&&(a!=null||i!=null))switch(o){case"value":z=a;break;case"defaultValue":M=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(r(91));break;default:a!==i&&Se(e,t,o,a,l,i)}Pr(e,z,M);return;case"option":for(var Y in n)if(z=n[Y],n.hasOwnProperty(Y)&&z!=null&&!l.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:Se(e,t,Y,null,l,z)}for(b in l)if(z=l[b],M=n[b],l.hasOwnProperty(b)&&z!==M&&(z!=null||M!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Se(e,t,b,z,l,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in n)z=n[$],n.hasOwnProperty($)&&z!=null&&!l.hasOwnProperty($)&&Se(e,t,$,null,l,z);for(R in l)if(z=l[R],M=n[R],l.hasOwnProperty(R)&&z!==M&&(z!=null||M!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:Se(e,t,R,z,l,M)}return;default:if(Ju(t)){for(var Ee in n)z=n[Ee],n.hasOwnProperty(Ee)&&z!==void 0&&!l.hasOwnProperty(Ee)&&wc(e,t,Ee,void 0,l,z);for(O in l)z=l[O],M=n[O],!l.hasOwnProperty(O)||z===M||z===void 0&&M===void 0||wc(e,t,O,z,l,M);return}}for(var _ in n)z=n[_],n.hasOwnProperty(_)&&z!=null&&!l.hasOwnProperty(_)&&Se(e,t,_,null,l,z);for(j in l)z=l[j],M=n[j],!l.hasOwnProperty(j)||z===M||z==null&&M==null||Se(e,t,j,z,l,M)}function ad(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,o=a.initiatorType,d=a.duration;if(i&&d&&ad(o)){for(o=0,d=a.responseEnd,l+=1;l<n.length;l++){var b=n[l],R=b.startTime;if(R>d)break;var O=b.transferSize,j=b.initiatorType;O&&ad(j)&&(b=b.responseEnd,o+=O*(b<d?1:(d-R)/(b-R)))}if(--l,t+=8*(i+o)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Dc=null,jc=null;function iu(e){return e.nodeType===9?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ud(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uc=null;function G0(){var e=window.event;return e&&e.type==="popstate"?e===Uc?!1:(Uc=e,!0):(Uc=null,!1)}var sd=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(Q0)}:sd;function Q0(e){setTimeout(function(){throw e})}function jn(e){return e==="head"}function rd(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),Jl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ha(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ha(n);for(var i=n.firstChild;i;){var o=i.nextSibling,d=i.nodeName;i[ea]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Ha(e.ownerDocument.body);n=a}while(n);Jl(t)}function od(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Bc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Bc(n),Yu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Y0(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ea])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function X0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mt(e.nextSibling),e===null))return null;return e}function fd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$?"||e.data==="$~"}function qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Z0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Lc=null;function hd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Mt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function md(e,t,n){switch(t=iu(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ha(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yu(e)}var Ct=new Map,pd=new Set;function uu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cn=G.d;G.d={f:V0,r:J0,D:K0,C:$0,L:W0,m:F0,X:I0,S:P0,M:eg};function V0(){var e=cn.f(),t=Fi();return e||t}function J0(e){var t=hl(e);t!==null&&t.tag===5&&t.type==="form"?kf(t):cn.r(e)}var Xl=typeof document>"u"?null:document;function gd(e,t,n){var l=Xl;if(l&&typeof t=="string"&&t){var a=St(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),pd.has(a)||(pd.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),$e(t,"link",e),Qe(t),l.head.appendChild(t)))}}function K0(e){cn.D(e),gd("dns-prefetch",e,null)}function $0(e,t){cn.C(e,t),gd("preconnect",e,t)}function W0(e,t,n){cn.L(e,t,n);var l=Xl;if(l&&e&&t){var a='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+St(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+St(n.imageSizes)+'"]')):a+='[href="'+St(e)+'"]';var i=a;switch(t){case"style":i=Zl(e);break;case"script":i=Vl(e)}Ct.has(i)||(e=A({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ct.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ua(i))||t==="script"&&l.querySelector(Ba(i))||(t=l.createElement("link"),$e(t,"link",e),Qe(t),l.head.appendChild(t)))}}function F0(e,t){cn.m(e,t);var n=Xl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Vl(e)}if(!Ct.has(i)&&(e=A({rel:"modulepreload",href:e},t),Ct.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ba(i)))return}l=n.createElement("link"),$e(l,"link",e),Qe(l),n.head.appendChild(l)}}}function P0(e,t,n){cn.S(e,t,n);var l=Xl;if(l&&e){var a=dl(l).hoistableStyles,i=Zl(e);t=t||"default";var o=a.get(i);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(Ua(i)))d.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ct.get(i))&&Qc(e,n);var b=o=l.createElement("link");Qe(b),$e(b,"link",e),b._p=new Promise(function(R,O){b.onload=R,b.onerror=O}),b.addEventListener("load",function(){d.loading|=1}),b.addEventListener("error",function(){d.loading|=2}),d.loading|=4,su(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:d},a.set(i,o)}}}function I0(e,t){cn.X(e,t);var n=Xl;if(n&&e){var l=dl(n).hoistableScripts,a=Vl(e),i=l.get(a);i||(i=n.querySelector(Ba(a)),i||(e=A({src:e,async:!0},t),(t=Ct.get(a))&&Yc(e,t),i=n.createElement("script"),Qe(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function eg(e,t){cn.M(e,t);var n=Xl;if(n&&e){var l=dl(n).hoistableScripts,a=Vl(e),i=l.get(a);i||(i=n.querySelector(Ba(a)),i||(e=A({src:e,async:!0,type:"module"},t),(t=Ct.get(a))&&Yc(e,t),i=n.createElement("script"),Qe(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function yd(e,t,n,l){var a=(a=ne.current)?uu(a):null;if(!a)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Zl(n.href),n=dl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Zl(n.href);var i=dl(a).hoistableStyles,o=i.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=a.querySelector(Ua(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Ct.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ct.set(e,n),i||tg(a,e,n,o.state))),t&&l===null)throw Error(r(528,""));return o}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vl(n),n=dl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Zl(e){return'href="'+St(e)+'"'}function Ua(e){return'link[rel="stylesheet"]['+e+"]"}function bd(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function tg(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",n),Qe(t),e.head.appendChild(t))}function Vl(e){return'[src="'+St(e)+'"]'}function Ba(e){return"script[async]"+e}function vd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+St(n.href)+'"]');if(l)return t.instance=l,Qe(l),l;var a=A({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qe(l),$e(l,"style",a),su(l,n.precedence,e),t.instance=l;case"stylesheet":a=Zl(n.href);var i=e.querySelector(Ua(a));if(i)return t.state.loading|=4,t.instance=i,Qe(i),i;l=bd(n),(a=Ct.get(a))&&Qc(l,a),i=(e.ownerDocument||e).createElement("link"),Qe(i);var o=i;return o._p=new Promise(function(d,b){o.onload=d,o.onerror=b}),$e(i,"link",l),t.state.loading|=4,su(i,n.precedence,e),t.instance=i;case"script":return i=Vl(n.src),(a=e.querySelector(Ba(i)))?(t.instance=a,Qe(a),a):(l=n,(a=Ct.get(i))&&(l=A({},n),Yc(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Qe(a),$e(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,su(l,n.precedence,e));return t.instance}function su(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===t)i=d;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cu=null;function xd(e,t,n){if(cu===null){var l=new Map,a=cu=new Map;a.set(n,l)}else a=cu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[ea]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var d=l.get(o);d?d.push(i):l.set(o,[i])}}return l}function Sd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ng(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lg(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Zl(l.href),i=t.querySelector(Ua(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ru.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Qe(i);return}i=t.ownerDocument||t,l=bd(l),(a=Ct.get(a))&&Qc(l,a),i=i.createElement("link"),Qe(i);var o=i;o._p=new Promise(function(d,b){o.onload=d,o.onerror=b}),$e(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ru.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Xc=0;function ag(e,t){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Xc===0&&(Xc=62500*B0());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Xc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,t.forEach(ig,e),ou=null,ru.call(e))}function ig(e,t){if(!(t.state.loading&4)){var n=ou.get(e);if(n)var l=n.get(null);else{n=new Map,ou.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=t.instance,o=a.getAttribute("data-precedence"),i=n.get(o)||l,i===l&&n.set(null,a),n.set(o,a),this.count++,l=ru.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ga={$$typeof:Q,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function ug(e,t,n,l,a,i,o,d,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.hiddenUpdates=Gu(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Ad(e,t,n,l,a,i,o,d,b,R,O,j){return e=new ug(e,t,n,o,b,R,O,j,d),t=1,i===!0&&(t|=24),i=ht(3,null,null,t),e.current=i,i.stateNode=e,t=As(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},zs(i),e}function _d(e){return e?(e=Al,e):Al}function Td(e,t,n,l,a,i){a=_d(a),l.context===null?l.context=a:l.pendingContext=a,l=_n(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=Tn(e,l,t),n!==null&&(st(n,e,t),ya(n,e,t))}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function zd(e){if(e.tag===13||e.tag===31){var t=Kn(e,67108864);t!==null&&st(t,e,67108864),Zc(e,67108864)}}function Md(e){if(e.tag===13||e.tag===31){var t=yt();t=qu(t);var n=Kn(e,t);n!==null&&st(n,e,t),Zc(e,t)}}var hu=!0;function sg(e,t,n,l){var a=w.T;w.T=null;var i=G.p;try{G.p=2,Vc(e,t,n,l)}finally{G.p=i,w.T=a}}function cg(e,t,n,l){var a=w.T;w.T=null;var i=G.p;try{G.p=8,Vc(e,t,n,l)}finally{G.p=i,w.T=a}}function Vc(e,t,n,l){if(hu){var a=Jc(l);if(a===null)kc(e,t,l,du,n),Nd(e,l);else if(og(a,e,t,n,l))l.stopPropagation();else if(Nd(e,l),t&4&&-1<rg.indexOf(e)){for(;a!==null;){var i=hl(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Yn(i.pendingLanes);if(o!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var b=1<<31-ot(o);d.entanglements[1]|=b,o&=~b}Qt(i),(fe&6)===0&&($i=ct()+500,wa(0))}}break;case 31:case 13:d=Kn(i,2),d!==null&&st(d,i,2),Fi(),Zc(i,2)}if(i=Jc(l),i===null&&kc(e,t,l,du,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else kc(e,t,l,null,n)}}function Jc(e){return e=$u(e),Kc(e)}var du=null;function Kc(e){if(du=null,e=fl(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return du=e,null}function Cd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Km()){case jr:return 2;case Hr:return 8;case ni:case $m:return 32;case Ur:return 268435456;default:return 32}default:return 32}}var $c=!1,Hn=null,Un=null,Bn=null,qa=new Map,La=new Map,Gn=[],rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":qa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(t.pointerId)}}function Qa(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=hl(t),t!==null&&zd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function og(e,t,n,l,a){switch(t){case"focusin":return Hn=Qa(Hn,e,t,n,l,a),!0;case"dragenter":return Un=Qa(Un,e,t,n,l,a),!0;case"mouseover":return Bn=Qa(Bn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return qa.set(i,Qa(qa.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,La.set(i,Qa(La.get(i)||null,e,t,n,l,a)),!0}return!1}function Od(e){var t=fl(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Yr(e.priority,function(){Md(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Yr(e.priority,function(){Md(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Ku=l,n.target.dispatchEvent(l),Ku=null}else return t=hl(n),t!==null&&zd(t),e.blockedOn=n,!1;t.shift()}return!0}function kd(e,t,n){mu(e)&&n.delete(t)}function fg(){$c=!1,Hn!==null&&mu(Hn)&&(Hn=null),Un!==null&&mu(Un)&&(Un=null),Bn!==null&&mu(Bn)&&(Bn=null),qa.forEach(kd),La.forEach(kd)}function pu(e,t){e.blockedOn===t&&(e.blockedOn=null,$c||($c=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,fg)))}var gu=null;function wd(e){gu!==e&&(gu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Kc(l||n)===null)continue;break}var i=hl(n);i!==null&&(e.splice(t,3),t-=3,Js(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Jl(e){function t(b){return pu(b,e)}Hn!==null&&pu(Hn,e),Un!==null&&pu(Un,e),Bn!==null&&pu(Bn,e),qa.forEach(t),La.forEach(t);for(var n=0;n<Gn.length;n++){var l=Gn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Od(n),n.blockedOn===null&&Gn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],o=a[tt]||null;if(typeof i=="function")o||wd(n);else if(o){var d=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[tt]||null)d=o.formAction;else if(Kc(a)!==null)continue}else d=o.action;typeof d=="function"?n[l+1]=d:(n.splice(l,3),l-=3),wd(n)}}}function Dd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Wc(e){this._internalRoot=e}yu.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,l=yt();Td(n,l,e,t,null,null)},yu.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Td(e.current,2,null,e,null,null),Fi(),t[ol]=null}};function yu(e){this._internalRoot=e}yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gn.length&&t!==0&&t<Gn[n].priority;n++);Gn.splice(n,0,e),n===0&&Od(e)}};var jd=s.version;if(jd!=="19.2.3")throw Error(r(527,jd,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var hg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{Fl=bu.inject(hg),rt=bu}catch{}}return Xa.createRoot=function(e,t){if(!f(e))throw Error(r(299));var n=!1,l="",a=Qf,i=Yf,o=Xf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ad(e,1,!1,null,null,n,l,null,a,i,o,Dd),e[ol]=t.current,Oc(e),new Wc(t)},Xa.hydrateRoot=function(e,t,n){if(!f(e))throw Error(r(299));var l=!1,a="",i=Qf,o=Yf,d=Xf,b=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(b=n.formState)),t=Ad(e,1,!0,t,n??null,l,a,b,i,o,d,Dd),t.context=_d(null),n=t.current,l=yt(),l=qu(l),a=_n(l),a.callback=null,Tn(n,a,l),n=l,t.current.lanes=n,Il(t,n),Qt(t),e[ol]=t.current,Oc(e),new yu(t)},Xa.version="19.2.3",Xa}var Zd;function Tg(){if(Zd)return Ic.exports;Zd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(s){console.error(s)}}return u(),Ic.exports=_g(),Ic.exports}var Rg=Tg();const zg=dm(Rg);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vd="popstate";function Mg(u={}){function s(f,h){let{pathname:p="/",search:g="",hash:y=""}=cl(f.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),rr("",{pathname:p,search:g,hash:y},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function c(f,h){let p=f.document.querySelector("base"),g="";if(p&&p.getAttribute("href")){let y=f.location.href,m=y.indexOf("#");g=m===-1?y:y.slice(0,m)}return g+"#"+(typeof h=="string"?h:Fa(h))}function r(f,h){Nt(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return Ng(s,c,r,u)}function Ce(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function Nt(u,s){if(!u){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Cg(){return Math.random().toString(36).substring(2,10)}function Jd(u,s){return{usr:u.state,key:u.key,idx:s}}function rr(u,s,c=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof s=="string"?cl(s):s,state:c,key:s&&s.key||r||Cg()}}function Fa({pathname:u="/",search:s="",hash:c=""}){return s&&s!=="?"&&(u+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(u+=c.charAt(0)==="#"?c:"#"+c),u}function cl(u){let s={};if(u){let c=u.indexOf("#");c>=0&&(s.hash=u.substring(c),u=u.substring(0,c));let r=u.indexOf("?");r>=0&&(s.search=u.substring(r),u=u.substring(0,r)),u&&(s.pathname=u)}return s}function Ng(u,s,c,r={}){let{window:f=document.defaultView,v5Compat:h=!1}=r,p=f.history,g="POP",y=null,m=E();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function E(){return(p.state||{idx:null}).idx}function A(){g="POP";let B=E(),X=B==null?null:B-m;m=B,y&&y({action:g,location:U.location,delta:X})}function k(B,X){g="PUSH";let K=rr(U.location,B,X);c&&c(K,B),m=E()+1;let Q=Jd(K,m),he=U.createHref(K);try{p.pushState(Q,"",he)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;f.location.assign(he)}h&&y&&y({action:g,location:U.location,delta:1})}function N(B,X){g="REPLACE";let K=rr(U.location,B,X);c&&c(K,B),m=E();let Q=Jd(K,m),he=U.createHref(K);p.replaceState(Q,"",he),h&&y&&y({action:g,location:U.location,delta:0})}function L(B){return Og(B)}let U={get action(){return g},get location(){return u(f,p)},listen(B){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Vd,A),y=B,()=>{f.removeEventListener(Vd,A),y=null}},createHref(B){return s(f,B)},createURL:L,encodeLocation(B){let X=L(B);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:k,replace:N,go(B){return p.go(B)}};return U}function Og(u,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(c,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:Fa(u);return r=r.replace(/ $/,"%20"),!s&&r.startsWith("//")&&(r=c+r),new URL(r,c)}function mm(u,s,c="/"){return kg(u,s,c,!1)}function kg(u,s,c,r){let f=typeof s=="string"?cl(s):s,h=mn(f.pathname||"/",c);if(h==null)return null;let p=pm(u);wg(p);let g=null;for(let y=0;g==null&&y<p.length;++y){let m=Xg(h);g=Qg(p[y],m,r)}return g}function pm(u,s=[],c=[],r="",f=!1){let h=(p,g,y=f,m)=>{let E={relativePath:m===void 0?p.path||"":m,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(r)&&y)return;Ce(E.relativePath.startsWith(r),`Absolute route path "${E.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(r.length)}let A=dn([r,E.relativePath]),k=c.concat(E);p.children&&p.children.length>0&&(Ce(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),pm(p.children,s,k,A,y)),!(p.path==null&&!p.index)&&s.push({path:A,score:qg(A,p.index),routesMeta:k})};return u.forEach((p,g)=>{var y;if(p.path===""||!((y=p.path)!=null&&y.includes("?")))h(p,g);else for(let m of gm(p.path))h(p,g,!0,m)}),s}function gm(u){let s=u.split("/");if(s.length===0)return[];let[c,...r]=s,f=c.endsWith("?"),h=c.replace(/\?$/,"");if(r.length===0)return f?[h,""]:[h];let p=gm(r.join("/")),g=[];return g.push(...p.map(y=>y===""?h:[h,y].join("/"))),f&&g.push(...p),g.map(y=>u.startsWith("/")&&y===""?"/":y)}function wg(u){u.sort((s,c)=>s.score!==c.score?c.score-s.score:Lg(s.routesMeta.map(r=>r.childrenIndex),c.routesMeta.map(r=>r.childrenIndex)))}var Dg=/^:[\w-]+$/,jg=3,Hg=2,Ug=1,Bg=10,Gg=-2,Kd=u=>u==="*";function qg(u,s){let c=u.split("/"),r=c.length;return c.some(Kd)&&(r+=Gg),s&&(r+=Hg),c.filter(f=>!Kd(f)).reduce((f,h)=>f+(Dg.test(h)?jg:h===""?Ug:Bg),r)}function Lg(u,s){return u.length===s.length&&u.slice(0,-1).every((r,f)=>r===s[f])?u[u.length-1]-s[s.length-1]:0}function Qg(u,s,c=!1){let{routesMeta:r}=u,f={},h="/",p=[];for(let g=0;g<r.length;++g){let y=r[g],m=g===r.length-1,E=h==="/"?s:s.slice(h.length)||"/",A=Tu({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},E),k=y.route;if(!A&&m&&c&&!r[r.length-1].route.index&&(A=Tu({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!A)return null;Object.assign(f,A.params),p.push({params:f,pathname:dn([h,A.pathname]),pathnameBase:Kg(dn([h,A.pathnameBase])),route:k}),A.pathnameBase!=="/"&&(h=dn([h,A.pathnameBase]))}return p}function Tu(u,s){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[c,r]=Yg(u.path,u.caseSensitive,u.end),f=s.match(c);if(!f)return null;let h=f[0],p=h.replace(/(.)\/+$/,"$1"),g=f.slice(1);return{params:r.reduce((m,{paramName:E,isOptional:A},k)=>{if(E==="*"){let L=g[k]||"";p=h.slice(0,h.length-L.length).replace(/(.)\/+$/,"$1")}const N=g[k];return A&&!N?m[E]=void 0:m[E]=(N||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:p,pattern:u}}function Yg(u,s=!1,c=!0){Nt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],f="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,y)=>(r.push({paramName:g,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),f+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":u!==""&&u!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),r]}function Xg(u){try{return u.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Nt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),u}}function mn(u,s){if(s==="/")return u;if(!u.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,r=u.charAt(c);return r&&r!=="/"?null:u.slice(c)||"/"}var Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Vg(u,s="/"){let{pathname:c,search:r="",hash:f=""}=typeof u=="string"?cl(u):u,h;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?h=$d(c.substring(1),"/"):h=$d(c,s)):h=s,{pathname:h,search:$g(r),hash:Wg(f)}}function $d(u,s){let c=s.replace(/\/+$/,"").split("/");return u.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function lr(u,s,c,r){return`Cannot include a '${u}' character in a manually specified \`to.${s}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jg(u){return u.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function gr(u){let s=Jg(u);return s.map((c,r)=>r===s.length-1?c.pathname:c.pathnameBase)}function yr(u,s,c,r=!1){let f;typeof u=="string"?f=cl(u):(f={...u},Ce(!f.pathname||!f.pathname.includes("?"),lr("?","pathname","search",f)),Ce(!f.pathname||!f.pathname.includes("#"),lr("#","pathname","hash",f)),Ce(!f.search||!f.search.includes("#"),lr("#","search","hash",f)));let h=u===""||f.pathname==="",p=h?"/":f.pathname,g;if(p==null)g=c;else{let A=s.length-1;if(!r&&p.startsWith("..")){let k=p.split("/");for(;k[0]==="..";)k.shift(),A-=1;f.pathname=k.join("/")}g=A>=0?s[A]:"/"}let y=Vg(f,g),m=p&&p!=="/"&&p.endsWith("/"),E=(h||p===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(m||E)&&(y.pathname+="/"),y}var dn=u=>u.join("/").replace(/\/\/+/g,"/"),Kg=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),$g=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,Wg=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,Fg=class{constructor(u,s,c,r=!1){this.status=u,this.statusText=s||"",this.internal=r,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Pg(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function Ig(u){return u.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bm(u,s){let c=u;if(typeof c!="string"||!Zg.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let r=c,f=!1;if(ym)try{let h=new URL(window.location.href),p=c.startsWith("//")?new URL(h.protocol+c):new URL(c),g=mn(p.pathname,s);p.origin===h.origin&&g!=null?c=g+p.search+p.hash:f=!0}catch{Nt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:f,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vm=["POST","PUT","PATCH","DELETE"];new Set(vm);var ey=["GET",...vm];new Set(ey);var Kl=C.createContext(null);Kl.displayName="DataRouter";var Cu=C.createContext(null);Cu.displayName="DataRouterState";var ty=C.createContext(!1),xm=C.createContext({isTransitioning:!1});xm.displayName="ViewTransition";var ny=C.createContext(new Map);ny.displayName="Fetchers";var ly=C.createContext(null);ly.displayName="Await";var bt=C.createContext(null);bt.displayName="Navigation";var Pa=C.createContext(null);Pa.displayName="Location";var Ot=C.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var br=C.createContext(null);br.displayName="RouteError";var Sm="REACT_ROUTER_ERROR",ay="REDIRECT",iy="ROUTE_ERROR_RESPONSE";function uy(u){if(u.startsWith(`${Sm}:${ay}:{`))try{let s=JSON.parse(u.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function sy(u){if(u.startsWith(`${Sm}:${iy}:{`))try{let s=JSON.parse(u.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new Fg(s.status,s.statusText,s.data)}catch{}}function cy(u,{relative:s}={}){Ce($l(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:r}=C.useContext(bt),{hash:f,pathname:h,search:p}=Ia(u,{relative:s}),g=h;return c!=="/"&&(g=h==="/"?c:dn([c,h])),r.createHref({pathname:g,search:p,hash:f})}function $l(){return C.useContext(Pa)!=null}function pn(){return Ce($l(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Pa).location}var Em="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Am(u){C.useContext(bt).static||C.useLayoutEffect(u)}function _m(){let{isDataRoute:u}=C.useContext(Ot);return u?_y():ry()}function ry(){Ce($l(),"useNavigate() may be used only in the context of a <Router> component.");let u=C.useContext(Kl),{basename:s,navigator:c}=C.useContext(bt),{matches:r}=C.useContext(Ot),{pathname:f}=pn(),h=JSON.stringify(gr(r)),p=C.useRef(!1);return Am(()=>{p.current=!0}),C.useCallback((y,m={})=>{if(Nt(p.current,Em),!p.current)return;if(typeof y=="number"){c.go(y);return}let E=yr(y,JSON.parse(h),f,m.relative==="path");u==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:dn([s,E.pathname])),(m.replace?c.replace:c.push)(E,m.state,m)},[s,c,h,f,u])}var oy=C.createContext(null);function fy(u){let s=C.useContext(Ot).outlet;return C.useMemo(()=>s&&C.createElement(oy.Provider,{value:u},s),[s,u])}function hy(){let{matches:u}=C.useContext(Ot),s=u[u.length-1];return s?s.params:{}}function Ia(u,{relative:s}={}){let{matches:c}=C.useContext(Ot),{pathname:r}=pn(),f=JSON.stringify(gr(c));return C.useMemo(()=>yr(u,JSON.parse(f),r,s==="path"),[u,f,r,s])}function dy(u,s){return Tm(u,s)}function Tm(u,s,c,r,f){var K;Ce($l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=C.useContext(bt),{matches:p}=C.useContext(Ot),g=p[p.length-1],y=g?g.params:{},m=g?g.pathname:"/",E=g?g.pathnameBase:"/",A=g&&g.route;{let Q=A&&A.path||"";zm(m,!A||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let k=pn(),N;if(s){let Q=typeof s=="string"?cl(s):s;Ce(E==="/"||((K=Q.pathname)==null?void 0:K.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),N=Q}else N=k;let L=N.pathname||"/",U=L;if(E!=="/"){let Q=E.replace(/^\//,"").split("/");U="/"+L.replace(/^\//,"").split("/").slice(Q.length).join("/")}let B=mm(u,{pathname:U});Nt(A||B!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Nt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=by(B&&B.map(Q=>Object.assign({},Q,{params:Object.assign({},y,Q.params),pathname:dn([E,h.encodeLocation?h.encodeLocation(Q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?E:dn([E,h.encodeLocation?h.encodeLocation(Q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathnameBase])})),p,c,r,f);return s&&X?C.createElement(Pa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},X):X}function my(){let u=Ay(),s=Pg(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),c=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},p=null;return console.error("Error handled by React Router default ErrorBoundary:",u),p=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:h},"ErrorBoundary")," or"," ",C.createElement("code",{style:h},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},s),c?C.createElement("pre",{style:f},c):null,p)}var py=C.createElement(my,null),Rm=class extends C.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,s){return s.location!==u.location||s.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:s.error,location:s.location,revalidation:u.revalidation||s.revalidation}}componentDidCatch(u,s){this.props.onError?this.props.onError(u,s):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const c=sy(u.digest);c&&(u=c)}let s=u!==void 0?C.createElement(Ot.Provider,{value:this.props.routeContext},C.createElement(br.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?C.createElement(gy,{error:u},s):s}};Rm.contextType=ty;var ar=new WeakMap;function gy({children:u,error:s}){let{basename:c}=C.useContext(bt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let r=uy(s.digest);if(r){let f=ar.get(s);if(f)throw f;let h=bm(r.location,c);if(ym&&!ar.get(s))if(h.isExternal||r.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:r.replace}));throw ar.set(s,p),p}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return u}function yy({routeContext:u,match:s,children:c}){let r=C.useContext(Kl);return r&&r.static&&r.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=s.route.id),C.createElement(Ot.Provider,{value:u},c)}function by(u,s=[],c=null,r=null,f=null){if(u==null){if(!c)return null;if(c.errors)u=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)u=c.matches;else return null}let h=u,p=c==null?void 0:c.errors;if(p!=null){let E=h.findIndex(A=>A.route.id&&(p==null?void 0:p[A.route.id])!==void 0);Ce(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,y=-1;if(c)for(let E=0;E<h.length;E++){let A=h[E];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(y=E),A.route.id){let{loaderData:k,errors:N}=c,L=A.route.loader&&!k.hasOwnProperty(A.route.id)&&(!N||N[A.route.id]===void 0);if(A.route.lazy||L){g=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}let m=c&&r?(E,A)=>{var k,N;r(E,{location:c.location,params:((N=(k=c.matches)==null?void 0:k[0])==null?void 0:N.params)??{},unstable_pattern:Ig(c.matches),errorInfo:A})}:void 0;return h.reduceRight((E,A,k)=>{let N,L=!1,U=null,B=null;c&&(N=p&&A.route.id?p[A.route.id]:void 0,U=A.route.errorElement||py,g&&(y<0&&k===0?(zm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,B=null):y===k&&(L=!0,B=A.route.hydrateFallbackElement||null)));let X=s.concat(h.slice(0,k+1)),K=()=>{let Q;return N?Q=U:L?Q=B:A.route.Component?Q=C.createElement(A.route.Component,null):A.route.element?Q=A.route.element:Q=E,C.createElement(yy,{match:A,routeContext:{outlet:E,matches:X,isDataRoute:c!=null},children:Q})};return c&&(A.route.ErrorBoundary||A.route.errorElement||k===0)?C.createElement(Rm,{location:c.location,revalidation:c.revalidation,component:U,error:N,children:K(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:m}):K()},null)}function vr(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vy(u){let s=C.useContext(Kl);return Ce(s,vr(u)),s}function xy(u){let s=C.useContext(Cu);return Ce(s,vr(u)),s}function Sy(u){let s=C.useContext(Ot);return Ce(s,vr(u)),s}function xr(u){let s=Sy(u),c=s.matches[s.matches.length-1];return Ce(c.route.id,`${u} can only be used on routes that contain a unique "id"`),c.route.id}function Ey(){return xr("useRouteId")}function Ay(){var r;let u=C.useContext(br),s=xy("useRouteError"),c=xr("useRouteError");return u!==void 0?u:(r=s.errors)==null?void 0:r[c]}function _y(){let{router:u}=vy("useNavigate"),s=xr("useNavigate"),c=C.useRef(!1);return Am(()=>{c.current=!0}),C.useCallback(async(f,h={})=>{Nt(c.current,Em),c.current&&(typeof f=="number"?await u.navigate(f):await u.navigate(f,{fromRouteId:s,...h}))},[u,s])}var Wd={};function zm(u,s,c){!s&&!Wd[u]&&(Wd[u]=!0,Nt(!1,c))}C.memo(Ty);function Ty({routes:u,future:s,state:c,onError:r}){return Tm(u,void 0,c,r,s)}function Ry({to:u,replace:s,state:c,relative:r}){Ce($l(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=C.useContext(bt);Nt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=C.useContext(Ot),{pathname:p}=pn(),g=_m(),y=yr(u,gr(h),p,r==="path"),m=JSON.stringify(y);return C.useEffect(()=>{g(JSON.parse(m),{replace:s,state:c,relative:r})},[g,m,r,s,c]),null}function zy(u){return fy(u.context)}function on(u){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function My({basename:u="/",children:s=null,location:c,navigationType:r="POP",navigator:f,static:h=!1,unstable_useTransitions:p}){Ce(!$l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=u.replace(/^\/*/,"/"),y=C.useMemo(()=>({basename:g,navigator:f,static:h,unstable_useTransitions:p,future:{}}),[g,f,h,p]);typeof c=="string"&&(c=cl(c));let{pathname:m="/",search:E="",hash:A="",state:k=null,key:N="default"}=c,L=C.useMemo(()=>{let U=mn(m,g);return U==null?null:{location:{pathname:U,search:E,hash:A,state:k,key:N},navigationType:r}},[g,m,E,A,k,N,r]);return Nt(L!=null,`<Router basename="${g}"> is not able to match the URL "${m}${E}${A}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:C.createElement(bt.Provider,{value:y},C.createElement(Pa.Provider,{children:s,value:L}))}function Cy({children:u,location:s}){return dy(or(u),s)}function or(u,s=[]){let c=[];return C.Children.forEach(u,(r,f)=>{if(!C.isValidElement(r))return;let h=[...s,f];if(r.type===C.Fragment){c.push.apply(c,or(r.props.children,h));return}Ce(r.type===on,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!r.props.index||!r.props.children,"An index route cannot have child routes.");let p={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(p.children=or(r.props.children,h)),c.push(p)}),c}var Eu="get",Au="application/x-www-form-urlencoded";function Nu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Ny(u){return Nu(u)&&u.tagName.toLowerCase()==="button"}function Oy(u){return Nu(u)&&u.tagName.toLowerCase()==="form"}function ky(u){return Nu(u)&&u.tagName.toLowerCase()==="input"}function wy(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Dy(u,s){return u.button===0&&(!s||s==="_self")&&!wy(u)}var vu=null;function jy(){if(vu===null)try{new FormData(document.createElement("form"),0),vu=!1}catch{vu=!0}return vu}var Hy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ir(u){return u!=null&&!Hy.has(u)?(Nt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Au}"`),null):u}function Uy(u,s){let c,r,f,h,p;if(Oy(u)){let g=u.getAttribute("action");r=g?mn(g,s):null,c=u.getAttribute("method")||Eu,f=ir(u.getAttribute("enctype"))||Au,h=new FormData(u)}else if(Ny(u)||ky(u)&&(u.type==="submit"||u.type==="image")){let g=u.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=u.getAttribute("formaction")||g.getAttribute("action");if(r=y?mn(y,s):null,c=u.getAttribute("formmethod")||g.getAttribute("method")||Eu,f=ir(u.getAttribute("formenctype"))||ir(g.getAttribute("enctype"))||Au,h=new FormData(g,u),!jy()){let{name:m,type:E,value:A}=u;if(E==="image"){let k=m?`${m}.`:"";h.append(`${k}x`,"0"),h.append(`${k}y`,"0")}else m&&h.append(m,A)}}else{if(Nu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Eu,r=null,f=Au,p=u}return h&&f==="text/plain"&&(p=h,h=void 0),{action:r,method:c.toLowerCase(),encType:f,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sr(u,s){if(u===!1||u===null||typeof u>"u")throw new Error(s)}function By(u,s,c,r){let f=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return c?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${r}`:f.pathname=`${f.pathname}.${r}`:f.pathname==="/"?f.pathname=`_root.${r}`:s&&mn(f.pathname,s)==="/"?f.pathname=`${s.replace(/\/$/,"")}/_root.${r}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${r}`,f}async function Gy(u,s){if(u.id in s)return s[u.id];try{let c=await import(u.module);return s[u.id]=c,c}catch(c){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qy(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Ly(u,s,c){let r=await Promise.all(u.map(async f=>{let h=s.routes[f.route.id];if(h){let p=await Gy(h,c);return p.links?p.links():[]}return[]}));return Zy(r.flat(1).filter(qy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Fd(u,s,c,r,f,h){let p=(y,m)=>c[m]?y.route.id!==c[m].route.id:!0,g=(y,m)=>{var E;return c[m].pathname!==y.pathname||((E=c[m].route.path)==null?void 0:E.endsWith("*"))&&c[m].params["*"]!==y.params["*"]};return h==="assets"?s.filter((y,m)=>p(y,m)||g(y,m)):h==="data"?s.filter((y,m)=>{var A;let E=r.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(p(y,m)||g(y,m))return!0;if(y.route.shouldRevalidate){let k=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((A=c[0])==null?void 0:A.params)||{},nextUrl:new URL(u,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function Qy(u,s,{includeHydrateFallback:c}={}){return Yy(u.map(r=>{let f=s.routes[r.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Yy(u){return[...new Set(u)]}function Xy(u){let s={},c=Object.keys(u).sort();for(let r of c)s[r]=u[r];return s}function Zy(u,s){let c=new Set;return new Set(s),u.reduce((r,f)=>{let h=JSON.stringify(Xy(f));return c.has(h)||(c.add(h),r.push({key:h,link:f})),r},[])}function Mm(){let u=C.useContext(Kl);return Sr(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Vy(){let u=C.useContext(Cu);return Sr(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Er=C.createContext(void 0);Er.displayName="FrameworkContext";function Cm(){let u=C.useContext(Er);return Sr(u,"You must render this element inside a <HydratedRouter> element"),u}function Jy(u,s){let c=C.useContext(Er),[r,f]=C.useState(!1),[h,p]=C.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:m,onMouseLeave:E,onTouchStart:A}=s,k=C.useRef(null);C.useEffect(()=>{if(u==="render"&&p(!0),u==="viewport"){let U=X=>{X.forEach(K=>{p(K.isIntersecting)})},B=new IntersectionObserver(U,{threshold:.5});return k.current&&B.observe(k.current),()=>{B.disconnect()}}},[u]),C.useEffect(()=>{if(r){let U=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(U)}}},[r]);let N=()=>{f(!0)},L=()=>{f(!1),p(!1)};return c?u!=="intent"?[h,k,{}]:[h,k,{onFocus:Za(g,N),onBlur:Za(y,L),onMouseEnter:Za(m,N),onMouseLeave:Za(E,L),onTouchStart:Za(A,N)}]:[!1,k,{}]}function Za(u,s){return c=>{u&&u(c),c.defaultPrevented||s(c)}}function Ky({page:u,...s}){let{router:c}=Mm(),r=C.useMemo(()=>mm(c.routes,u,c.basename),[c.routes,u,c.basename]);return r?C.createElement(Wy,{page:u,matches:r,...s}):null}function $y(u){let{manifest:s,routeModules:c}=Cm(),[r,f]=C.useState([]);return C.useEffect(()=>{let h=!1;return Ly(u,s,c).then(p=>{h||f(p)}),()=>{h=!0}},[u,s,c]),r}function Wy({page:u,matches:s,...c}){let r=pn(),{future:f,manifest:h,routeModules:p}=Cm(),{basename:g}=Mm(),{loaderData:y,matches:m}=Vy(),E=C.useMemo(()=>Fd(u,s,m,h,r,"data"),[u,s,m,h,r]),A=C.useMemo(()=>Fd(u,s,m,h,r,"assets"),[u,s,m,h,r]),k=C.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let U=new Set,B=!1;if(s.forEach(K=>{var he;let Q=h.routes[K.route.id];!Q||!Q.hasLoader||(!E.some(de=>de.route.id===K.route.id)&&K.route.id in y&&((he=p[K.route.id])!=null&&he.shouldRevalidate)||Q.hasClientLoader?B=!0:U.add(K.route.id))}),U.size===0)return[];let X=By(u,g,f.unstable_trailingSlashAwareDataRequests,"data");return B&&U.size>0&&X.searchParams.set("_routes",s.filter(K=>U.has(K.route.id)).map(K=>K.route.id).join(",")),[X.pathname+X.search]},[g,f.unstable_trailingSlashAwareDataRequests,y,r,h,E,s,u,p]),N=C.useMemo(()=>Qy(A,h),[A,h]),L=$y(A);return C.createElement(C.Fragment,null,k.map(U=>C.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...c})),N.map(U=>C.createElement("link",{key:U,rel:"modulepreload",href:U,...c})),L.map(({key:U,link:B})=>C.createElement("link",{key:U,nonce:c.nonce,...B,crossOrigin:B.crossOrigin??c.crossOrigin})))}function Fy(...u){return s=>{u.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var Py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Py&&(window.__reactRouterVersion="7.13.0")}catch{}function Iy({basename:u,children:s,unstable_useTransitions:c,window:r}){let f=C.useRef();f.current==null&&(f.current=Mg({window:r,v5Compat:!0}));let h=f.current,[p,g]=C.useState({action:h.action,location:h.location}),y=C.useCallback(m=>{c===!1?g(m):C.startTransition(()=>g(m))},[c]);return C.useLayoutEffect(()=>h.listen(y),[h,y]),C.createElement(My,{basename:u,children:s,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:c})}var Nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hn=C.forwardRef(function({onClick:s,discover:c="render",prefetch:r="none",relative:f,reloadDocument:h,replace:p,state:g,target:y,to:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:k,...N},L){let{basename:U,unstable_useTransitions:B}=C.useContext(bt),X=typeof m=="string"&&Nm.test(m),K=bm(m,U);m=K.to;let Q=cy(m,{relative:f}),[he,de,be]=Jy(r,N),W=nb(m,{replace:p,state:g,target:y,preventScrollReset:E,relative:f,viewTransition:A,unstable_defaultShouldRevalidate:k,unstable_useTransitions:B});function ke(vt){s&&s(vt),vt.defaultPrevented||W(vt)}let Xe=C.createElement("a",{...N,...be,href:K.absoluteURL||Q,onClick:K.isExternal||h?s:ke,ref:Fy(L,de),target:y,"data-discover":!X&&c==="render"?"true":void 0});return he&&!X?C.createElement(C.Fragment,null,Xe,C.createElement(Ky,{page:Q})):Xe});hn.displayName="Link";var _u=C.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:r="",end:f=!1,style:h,to:p,viewTransition:g,children:y,...m},E){let A=Ia(p,{relative:m.relative}),k=pn(),N=C.useContext(Cu),{navigator:L,basename:U}=C.useContext(bt),B=N!=null&&sb(A)&&g===!0,X=L.encodeLocation?L.encodeLocation(A).pathname:A.pathname,K=k.pathname,Q=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;c||(K=K.toLowerCase(),Q=Q?Q.toLowerCase():null,X=X.toLowerCase()),Q&&U&&(Q=mn(Q,U)||Q);const he=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let de=K===X||!f&&K.startsWith(X)&&K.charAt(he)==="/",be=Q!=null&&(Q===X||!f&&Q.startsWith(X)&&Q.charAt(X.length)==="/"),W={isActive:de,isPending:be,isTransitioning:B},ke=de?s:void 0,Xe;typeof r=="function"?Xe=r(W):Xe=[r,de?"active":null,be?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let vt=typeof h=="function"?h(W):h;return C.createElement(hn,{...m,"aria-current":ke,className:Xe,ref:E,style:vt,to:p,viewTransition:g},typeof y=="function"?y(W):y)});_u.displayName="NavLink";var eb=C.forwardRef(({discover:u="render",fetcherKey:s,navigate:c,reloadDocument:r,replace:f,state:h,method:p=Eu,action:g,onSubmit:y,relative:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:k,...N},L)=>{let{unstable_useTransitions:U}=C.useContext(bt),B=ib(),X=ub(g,{relative:m}),K=p.toLowerCase()==="get"?"get":"post",Q=typeof g=="string"&&Nm.test(g),he=de=>{if(y&&y(de),de.defaultPrevented)return;de.preventDefault();let be=de.nativeEvent.submitter,W=(be==null?void 0:be.getAttribute("formmethod"))||p,ke=()=>B(be||de.currentTarget,{fetcherKey:s,method:W,navigate:c,replace:f,state:h,relative:m,preventScrollReset:E,viewTransition:A,unstable_defaultShouldRevalidate:k});U&&c!==!1?C.startTransition(()=>ke()):ke()};return C.createElement("form",{ref:L,method:K,action:X,onSubmit:r?y:he,...N,"data-discover":!Q&&u==="render"?"true":void 0})});eb.displayName="Form";function tb(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Om(u){let s=C.useContext(Kl);return Ce(s,tb(u)),s}function nb(u,{target:s,replace:c,state:r,preventScrollReset:f,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:g,unstable_useTransitions:y}={}){let m=_m(),E=pn(),A=Ia(u,{relative:h});return C.useCallback(k=>{if(Dy(k,s)){k.preventDefault();let N=c!==void 0?c:Fa(E)===Fa(A),L=()=>m(u,{replace:N,state:r,preventScrollReset:f,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:g});y?C.startTransition(()=>L()):L()}},[E,m,A,c,r,s,u,f,h,p,g,y])}var lb=0,ab=()=>`__${String(++lb)}__`;function ib(){let{router:u}=Om("useSubmit"),{basename:s}=C.useContext(bt),c=Ey(),r=u.fetch,f=u.navigate;return C.useCallback(async(h,p={})=>{let{action:g,method:y,encType:m,formData:E,body:A}=Uy(h,s);if(p.navigate===!1){let k=p.fetcherKey||ab();await r(k,c,p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:A,formMethod:p.method||y,formEncType:p.encType||m,flushSync:p.flushSync})}else await f(p.action||g,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:A,formMethod:p.method||y,formEncType:p.encType||m,replace:p.replace,state:p.state,fromRouteId:c,flushSync:p.flushSync,viewTransition:p.viewTransition})},[r,f,s,c])}function ub(u,{relative:s}={}){let{basename:c}=C.useContext(bt),r=C.useContext(Ot);Ce(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),h={...Ia(u||".",{relative:s})},p=pn();if(u==null){h.search=p.search;let g=new URLSearchParams(h.search),y=g.getAll("index");if(y.some(E=>E==="")){g.delete("index"),y.filter(A=>A).forEach(A=>g.append("index",A));let E=g.toString();h.search=E?`?${E}`:""}}return(!u||u===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(h.pathname=h.pathname==="/"?c:dn([c,h.pathname])),Fa(h)}function sb(u,{relative:s}={}){let c=C.useContext(xm);Ce(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Om("useViewTransitionState"),f=Ia(u,{relative:s});if(!c.isTransitioning)return!1;let h=mn(c.currentLocation.pathname,r)||c.currentLocation.pathname,p=mn(c.nextLocation.pathname,r)||c.nextLocation.pathname;return Tu(f.pathname,p)!=null||Tu(f.pathname,h)!=null}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rb=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,c,r)=>r?r.toUpperCase():c.toLowerCase()),Pd=u=>{const s=rb(u);return s.charAt(0).toUpperCase()+s.slice(1)},km=(...u)=>u.filter((s,c,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===c).join(" ").trim(),ob=u=>{for(const s in u)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=C.forwardRef(({color:u="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:r,className:f="",children:h,iconNode:p,...g},y)=>C.createElement("svg",{ref:y,...fb,width:s,height:s,stroke:u,strokeWidth:r?Number(c)*24/Number(s):c,className:km("lucide",f),...!h&&!ob(g)&&{"aria-hidden":"true"},...g},[...p.map(([m,E])=>C.createElement(m,E)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=(u,s)=>{const c=C.forwardRef(({className:r,...f},h)=>C.createElement(hb,{ref:h,iconNode:s,className:km(`lucide-${cb(Pd(u))}`,`lucide-${u}`,r),...f}));return c.displayName=Pd(u),c};/**
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
 */const _b=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Tb=He("chevron-up",_b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],rn=He("code",Rb);/**
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
 */const Ob=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],kb=He("database",Ob);/**
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
 */const Jb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nm=He("x",Jb),lm=[{label:"Home",path:"/"},{label:"Experience",path:"/experience"},{label:"Skills",path:"/skills"},{label:"Education",path:"/education"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],fr=[{id:"standard-networks",title:"스탠다드네트웍스",role:"전송 개발팀",period:"2023.07 - 2025.12",description:"대용량 메시지 발송 플랫폼 기획/개발 및 운영",techStack:["Java","Spring Boot","Spring Cloud","Redis","RabbitMQ","R2DBC","Netflix Eureka","WebFlux"],keyAchievements:["월 평균 7천만 건에서 최대 3억 건에 이르는 메시지 데이터 처리","MSA(Microservices Architecture) 설계를 통한 시스템 결합도 최소화 및 확장성있는 인프라 구축","약 50개 고객사에 직접 배포되어 안정적으로 운영 중인 Agent 프로그램 개발 및 운영","메시지 검칙 프로세스 개발. KISA(한국인터넷진흥원) 및 내부 정책 준수로 스팸 신고율 50% 이상 감소 및 발송 신뢰도 향상"]}],Kb=[{category:"Languages",items:[{name:"Java",icon:$b},{name:"HTML/CSS",icon:Bb},{name:"JS(ES6)",icon:Qb}]},{category:"Frameworks & Libraries",items:[{name:"Spring boot",icon:kb},{name:"WebFlux",icon:Nb},{name:"Netty",icon:Va},{name:"JPA",icon:Va},{name:"mybatis",icon:Va},{name:"R2DBC",icon:Va},{name:"React & Redux",icon:Va},{name:"Tailwind CSS"}]},{category:"Infrastructure & Databases",items:[{name:"RabbitMQ",icon:em},{name:"Redis",icon:tm},{name:"mySQL",icon:rn},{name:"Oracle",icon:rn},{name:"maria",icon:rn},{name:"Linux",icon:rn}]},{category:"Tools & Collaboration",items:[{name:"VSCode",icon:em},{name:"IntelliJ",icon:tm},{name:"eclipse",icon:rn},{name:"Git/GithubDesktop",icon:rn},{name:"Notion",icon:rn},{name:"Slack",icon:rn},{name:"Jira",icon:rn}]}],am=[{institution:"Docker 클라우드 컨데이너 기반 아키텍처 이해와 실습",link:"https://edu.ktdsuniversity.com",degree:"kt University에서 진행한 Docker 클라우드 컨테이너 기반 아키텍처 교육 과정",period:"2024.10 ~ 2024.10",details:["Docker와 Docker 컴포넌트 이해","Docker 이미지와 컨테이너 설정","Dockerfile 로 서버 구축하기","Docker 이미지 공유","Container 통합 관리"],category:"Education"},{institution:"빅데이터 기반 지능형SW 및 MLOps 개발자 양성과정",link:"https://playdata.io/",degree:"엔코아 아카데미(Encore Academy)에서 진행한 빅데이터 기반 개발자 양성 과정",period:"2022.11 ~ 2023.5",details:["마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","마이크로 서비스 개발을 위한 DB설계 능력"],category:"Education"},{institution:"La Piscine",link:"https://42seoul.kr/seoul42/main/view",degree:"이노베이션 아카데미(Innovation Academy)에서 진행한 자기주도학습 기반의 알고리즘 문제 풀이 과정",period:"2022.8 ~ 2022.9",details:["알고리즘 문제 해결 능력","서로간의 코드 설명 및 코드 리뷰로 의사소통 능력 향상"],category:"Education"},{institution:"클라우드 기반의 MSA 스페셜리스트 주니어 개발자 양성 과정",link:"https://sesac.seoul.kr/course/active/detail.do",degree:"디지털 전환(Digital Transformation)시대의 핵심 클라우드 전문 인재 양성 교육 과정",period:"2021.11 ~ 2022.5",details:["클라우드 인프라 구축 능력","마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력","클라우드 네이티브에 대한 이해와 마이크로 서비스 개발 및 관리할 수 있는 능력"],category:"Education"},{institution:"정보처리기능사",degree:"한국산업인력공단",period:"2022.07.01",details:["국가기술자격증 취득"],category:"Certification"}];function $b(u){return v.jsxs("svg",{...u,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M17 8h1a4 4 0 1 1 0 8h-1"}),v.jsx("path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}),v.jsx("line",{x1:"6",x2:"6",y1:"2",y2:"4"}),v.jsx("line",{x1:"10",x2:"10",y1:"2",y2:"4"}),v.jsx("line",{x1:"14",x2:"14",y1:"2",y2:"4"})]})}const Wb=()=>{const[u,s]=C.useState(!1),c=pn();return C.useEffect(()=>{s(!1),window.scrollTo(0,0)},[c]),v.jsxs("div",{className:"min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-mint selection:text-slate-900",children:[v.jsxs("header",{className:"w-full max-w-3xl mx-auto px-6 py-8 md:py-12 flex justify-between items-center",children:[v.jsxs(_u,{to:"/",className:"text-2xl font-extrabold tracking-tight hover:opacity-70 transition-opacity",children:["Whee",v.jsx("span",{className:"text-sky-500",children:"'s"})," Log",v.jsx("span",{className:"text-sky-500",children:"."})]}),v.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[lm.filter(r=>r.label!=="Home").map(r=>v.jsx(_u,{to:r.path,className:({isActive:f})=>`text-[15px] font-medium transition-colors ${f?"text-slate-900 font-bold bg-gradient-to-r from-sky-200 to-sky-100 px-3 py-1 rounded-sm -skew-x-3":"text-slate-500 hover:text-slate-900"}`,children:r.label},r.path)),v.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"relative group text-slate-400 hover:text-sky-500 hover:scale-125 transition-all duration-200",children:[v.jsx(Id,{size:20}),v.jsx("span",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-slate-700 bg-sky-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg",children:"Hanwhee's GitHub"})]})]}),v.jsx("button",{className:"md:hidden text-slate-800 focus:outline-none",onClick:()=>s(!u),children:u?v.jsx(nm,{size:24}):v.jsx(qb,{size:24})})]}),u&&v.jsxs("div",{className:"md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6 flex flex-col",children:[v.jsx("div",{className:"flex justify-end mb-8",children:v.jsx("button",{onClick:()=>s(!1),children:v.jsx(nm,{size:28})})}),v.jsx("nav",{className:"flex flex-col space-y-6 text-center",children:lm.map(r=>v.jsx(_u,{to:r.path,className:({isActive:f})=>`text-2xl font-bold ${f?"text-sky-600":"text-slate-800"}`,children:r.label},r.path))})]}),v.jsx("main",{className:"flex-grow w-full max-w-3xl mx-auto px-6 pb-20",children:v.jsx(zy,{})}),v.jsxs("footer",{className:"w-full max-w-3xl mx-auto px-6 py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400",children:[v.jsx("div",{children:"© 2025 Hanwhee Kim."}),v.jsx("div",{className:"flex gap-4",children:v.jsx("a",{href:"https://github.com/KimHanWhee",className:"hover:text-slate-600",children:v.jsx(Id,{size:16})})})]})]})},Fb=`---
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
`,Pb=`---
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

JVM이 관리하는 프로그램에서 데이터를 저장하기 위해 런타임 시 동적으로 할당되는 공간이다. 객체, 배열 등이 저장되는 공간으로 어떤 참조 변수도 힙 영역에 있는 인스턴스를 참조하지 않는다면 가비지 컬렉터(GC, Garbage Collector)에 의해 메모리에서 제거된다.`,Ib=`---
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

이렇게 객체 지향 프로그래밍에 관하여 간단하게 정리해보았다. `,ev=`---
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
`,tv=`---
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

위 처럼 구독을 취소한 옵저버(bottom)는 알림 대상에서 제외되어, 이벤트가 발생하여도 아무런 행동을 취하지 않는 것을 확인할 수 있다.`,lv=`---
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
| **대표적인 예** | \`Flux.fromIterable()\`, \`Mono.just()\`, \`Flux.range()\` | \`Sinks\`, \`ConnectableFlux\`, \`share()\` |`,av=`---
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

결국 시스템의 요구사항과 운영 환경을 고려하여 적절한 구성을 선택하는 것이 중요하다.`,iv=`---
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

**현재는 무조건 Quorum Queue 사용을 권장**한다고 한다. Mirrored Queue는 RabbitMQ 팀에서도 더 이상 권장하지 않는다고 하며, 향후 버전에서는 제거될 가능성이 높아 보인다.`,uv=`---
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


이로써 매번 명령어를 쳐주지 않아도 main에 나의 블로그 코드를 푸시하면 자동으로 GitHub Pages에 배포를 해주는 환경이 구축되었다!`,sv=`---
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
`,cv=`---
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
`,rv=`---
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

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_1_1.png)

나는 개인용 프로젝트를 진행할 거기 때문에 PERSONAL API KEY를 클릭한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_1_2.png)

이용약관에 동의를 하면 아래와 같이 진행할 프로젝트(애플리케이션) 정보를 입력하는 폼이 나온다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_1_3.png)

내용 작성 후 SUBMIT을 클릭하면 아래와 같이 나의 프로젝트 정보 및 API Key가 주어진다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_lol_1_4.png)

이제 해당 API Key를 가지고 리그 오브 레전드의 게임 데이터를 받아 올 수 있게 되었다.
`;function Ar(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var rl=Ar();function wm(u){rl=u}var Wa={exec:()=>null};function oe(u,s=""){let c=typeof u=="string"?u:u.source,r={replace:(f,h)=>{let p=typeof h=="string"?h:h.source;return p=p.replace(Ie.caret,"$1"),c=c.replace(f,p),r},getRegex:()=>new RegExp(c,s)};return r}var ov=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ie={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:u=>new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}#`),htmlBeginRegex:u=>new RegExp(`^ {0,${Math.min(3,u-1)}}<(?:[a-z].*>|!--)`,"i")},fv=/^(?:[ \t]*(?:\n|$))+/,hv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,dv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ei=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,mv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_r=/(?:[*+-]|\d{1,9}[.)])/,Dm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,jm=oe(Dm).replace(/bull/g,_r).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),pv=oe(Dm).replace(/bull/g,_r).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Tr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,gv=/^[^\n]+/,Rr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,yv=oe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Rr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),bv=oe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_r).getRegex(),Ou="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,vv=oe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zr).replace("tag",Ou).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Hm=oe(Tr).replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex(),xv=oe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Hm).getRegex(),Mr={blockquote:xv,code:hv,def:yv,fences:dv,heading:mv,hr:ei,html:vv,lheading:jm,list:bv,newline:fv,paragraph:Hm,table:Wa,text:gv},im=oe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex(),Sv={...Mr,lheading:pv,table:im,paragraph:oe(Tr).replace("hr",ei).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",im).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ou).getRegex()},Ev={...Mr,html:oe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Wa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:oe(Tr).replace("hr",ei).replace("heading",` *#{1,6} *[^
]`).replace("lheading",jm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Av=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,_v=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Um=/^( {2,}|\\)\n(?!\s*$)/,Tv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ku=/[\p{P}\p{S}]/u,Cr=/[\s\p{P}\p{S}]/u,Bm=/[^\s\p{P}\p{S}]/u,Rv=oe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Cr).getRegex(),Gm=/(?!~)[\p{P}\p{S}]/u,zv=/(?!~)[\s\p{P}\p{S}]/u,Mv=/(?:[^\s\p{P}\p{S}]|~)/u,Cv=oe(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ov?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),qm=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Nv=oe(qm,"u").replace(/punct/g,ku).getRegex(),Ov=oe(qm,"u").replace(/punct/g,Gm).getRegex(),Lm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",kv=oe(Lm,"gu").replace(/notPunctSpace/g,Bm).replace(/punctSpace/g,Cr).replace(/punct/g,ku).getRegex(),wv=oe(Lm,"gu").replace(/notPunctSpace/g,Mv).replace(/punctSpace/g,zv).replace(/punct/g,Gm).getRegex(),Dv=oe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Bm).replace(/punctSpace/g,Cr).replace(/punct/g,ku).getRegex(),jv=oe(/\\(punct)/,"gu").replace(/punct/g,ku).getRegex(),Hv=oe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Uv=oe(zr).replace("(?:-->|$)","-->").getRegex(),Bv=oe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Uv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ru=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Gv=oe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ru).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Qm=oe(/^!?\[(label)\]\[(ref)\]/).replace("label",Ru).replace("ref",Rr).getRegex(),Ym=oe(/^!?\[(ref)\](?:\[\])?/).replace("ref",Rr).getRegex(),qv=oe("reflink|nolink(?!\\()","g").replace("reflink",Qm).replace("nolink",Ym).getRegex(),um=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Nr={_backpedal:Wa,anyPunctuation:jv,autolink:Hv,blockSkip:Cv,br:Um,code:_v,del:Wa,emStrongLDelim:Nv,emStrongRDelimAst:kv,emStrongRDelimUnd:Dv,escape:Av,link:Gv,nolink:Ym,punctuation:Rv,reflink:Qm,reflinkSearch:qv,tag:Bv,text:Tv,url:Wa},Lv={...Nr,link:oe(/^!?\[(label)\]\((.*?)\)/).replace("label",Ru).getRegex(),reflink:oe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ru).getRegex()},hr={...Nr,emStrongRDelimAst:wv,emStrongLDelim:Ov,url:oe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",um).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:oe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",um).getRegex()},Qv={...hr,br:oe(Um).replace("{2,}","*").getRegex(),text:oe(hr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xu={normal:Mr,gfm:Sv,pedantic:Ev},Ja={normal:Nr,gfm:hr,breaks:Qv,pedantic:Lv},Yv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sm=u=>Yv[u];function fn(u,s){if(s){if(Ie.escapeTest.test(u))return u.replace(Ie.escapeReplace,sm)}else if(Ie.escapeTestNoEncode.test(u))return u.replace(Ie.escapeReplaceNoEncode,sm);return u}function cm(u){try{u=encodeURI(u).replace(Ie.percentDecode,"%")}catch{return null}return u}function rm(u,s){var h;let c=u.replace(Ie.findPipe,(p,g,y)=>{let m=!1,E=g;for(;--E>=0&&y[E]==="\\";)m=!m;return m?"|":" |"}),r=c.split(Ie.splitPipe),f=0;if(r[0].trim()||r.shift(),r.length>0&&!((h=r.at(-1))!=null&&h.trim())&&r.pop(),s)if(r.length>s)r.splice(s);else for(;r.length<s;)r.push("");for(;f<r.length;f++)r[f]=r[f].trim().replace(Ie.slashPipe,"|");return r}function Ka(u,s,c){let r=u.length;if(r===0)return"";let f=0;for(;f<r&&u.charAt(r-f-1)===s;)f++;return u.slice(0,r-f)}function Xv(u,s){if(u.indexOf(s[1])===-1)return-1;let c=0;for(let r=0;r<u.length;r++)if(u[r]==="\\")r++;else if(u[r]===s[0])c++;else if(u[r]===s[1]&&(c--,c<0))return r;return c>0?-2:-1}function om(u,s,c,r,f){let h=s.href,p=s.title||null,g=u[1].replace(f.other.outputLinkReplace,"$1");r.state.inLink=!0;let y={type:u[0].charAt(0)==="!"?"image":"link",raw:c,href:h,title:p,text:g,tokens:r.inlineTokens(g)};return r.state.inLink=!1,y}function Zv(u,s,c){let r=u.match(c.other.indentCodeCompensation);if(r===null)return s;let f=r[1];return s.split(`
`).map(h=>{let p=h.match(c.other.beginningSpace);if(p===null)return h;let[g]=p;return g.length>=f.length?h.slice(f.length):h}).join(`
`)}var zu=class{constructor(u){Ae(this,"options");Ae(this,"rules");Ae(this,"lexer");this.options=u||rl}space(u){let s=this.rules.block.newline.exec(u);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(u){let s=this.rules.block.code.exec(u);if(s){let c=s[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?c:Ka(c,`
`)}}}fences(u){let s=this.rules.block.fences.exec(u);if(s){let c=s[0],r=Zv(c,s[3]||"",this.rules);return{type:"code",raw:c,lang:s[2]?s[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):s[2],text:r}}}heading(u){let s=this.rules.block.heading.exec(u);if(s){let c=s[2].trim();if(this.rules.other.endingHash.test(c)){let r=Ka(c,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(c=r.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:c,tokens:this.lexer.inline(c)}}}hr(u){let s=this.rules.block.hr.exec(u);if(s)return{type:"hr",raw:Ka(s[0],`
`)}}blockquote(u){let s=this.rules.block.blockquote.exec(u);if(s){let c=Ka(s[0],`
`).split(`
`),r="",f="",h=[];for(;c.length>0;){let p=!1,g=[],y;for(y=0;y<c.length;y++)if(this.rules.other.blockquoteStart.test(c[y]))g.push(c[y]),p=!0;else if(!p)g.push(c[y]);else break;c=c.slice(y);let m=g.join(`
`),E=m.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${m}`:m,f=f?`${f}
${E}`:E;let A=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,h,!0),this.lexer.state.top=A,c.length===0)break;let k=h.at(-1);if((k==null?void 0:k.type)==="code")break;if((k==null?void 0:k.type)==="blockquote"){let N=k,L=N.raw+`
`+c.join(`
`),U=this.blockquote(L);h[h.length-1]=U,r=r.substring(0,r.length-N.raw.length)+U.raw,f=f.substring(0,f.length-N.text.length)+U.text;break}else if((k==null?void 0:k.type)==="list"){let N=k,L=N.raw+`
`+c.join(`
`),U=this.list(L);h[h.length-1]=U,r=r.substring(0,r.length-k.raw.length)+U.raw,f=f.substring(0,f.length-N.raw.length)+U.raw,c=L.substring(h.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:h,text:f}}}list(u){var c,r;let s=this.rules.block.list.exec(u);if(s){let f=s[1].trim(),h=f.length>1,p={type:"list",raw:"",ordered:h,start:h?+f.slice(0,-1):"",loose:!1,items:[]};f=h?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=h?f:"[*+-]");let g=this.rules.other.listItemRegex(f),y=!1;for(;u;){let E=!1,A="",k="";if(!(s=g.exec(u))||this.rules.block.hr.test(u))break;A=s[0],u=u.substring(A.length);let N=s[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,X=>" ".repeat(3*X.length)),L=u.split(`
`,1)[0],U=!N.trim(),B=0;if(this.options.pedantic?(B=2,k=N.trimStart()):U?B=s[1].length+1:(B=s[2].search(this.rules.other.nonSpaceChar),B=B>4?1:B,k=N.slice(B),B+=s[1].length),U&&this.rules.other.blankLine.test(L)&&(A+=L+`
`,u=u.substring(L.length+1),E=!0),!E){let X=this.rules.other.nextBulletRegex(B),K=this.rules.other.hrRegex(B),Q=this.rules.other.fencesBeginRegex(B),he=this.rules.other.headingBeginRegex(B),de=this.rules.other.htmlBeginRegex(B);for(;u;){let be=u.split(`
`,1)[0],W;if(L=be,this.options.pedantic?(L=L.replace(this.rules.other.listReplaceNesting,"  "),W=L):W=L.replace(this.rules.other.tabCharGlobal,"    "),Q.test(L)||he.test(L)||de.test(L)||X.test(L)||K.test(L))break;if(W.search(this.rules.other.nonSpaceChar)>=B||!L.trim())k+=`
`+W.slice(B);else{if(U||N.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Q.test(N)||he.test(N)||K.test(N))break;k+=`
`+L}!U&&!L.trim()&&(U=!0),A+=be+`
`,u=u.substring(be.length+1),N=W.slice(B)}}p.loose||(y?p.loose=!0:this.rules.other.doubleBlankLine.test(A)&&(y=!0)),p.items.push({type:"list_item",raw:A,task:!!this.options.gfm&&this.rules.other.listIsTask.test(k),loose:!1,text:k,tokens:[]}),p.raw+=A}let m=p.items.at(-1);if(m)m.raw=m.raw.trimEnd(),m.text=m.text.trimEnd();else return;p.raw=p.raw.trimEnd();for(let E of p.items){if(this.lexer.state.top=!1,E.tokens=this.lexer.blockTokens(E.text,[]),E.task){if(E.text=E.text.replace(this.rules.other.listReplaceTask,""),((c=E.tokens[0])==null?void 0:c.type)==="text"||((r=E.tokens[0])==null?void 0:r.type)==="paragraph"){E.tokens[0].raw=E.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),E.tokens[0].text=E.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let k=this.lexer.inlineQueue.length-1;k>=0;k--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[k].src)){this.lexer.inlineQueue[k].src=this.lexer.inlineQueue[k].src.replace(this.rules.other.listReplaceTask,"");break}}let A=this.rules.other.listTaskCheckbox.exec(E.raw);if(A){let k={type:"checkbox",raw:A[0]+" ",checked:A[0]!=="[ ]"};E.checked=k.checked,p.loose?E.tokens[0]&&["paragraph","text"].includes(E.tokens[0].type)&&"tokens"in E.tokens[0]&&E.tokens[0].tokens?(E.tokens[0].raw=k.raw+E.tokens[0].raw,E.tokens[0].text=k.raw+E.tokens[0].text,E.tokens[0].tokens.unshift(k)):E.tokens.unshift({type:"paragraph",raw:k.raw,text:k.raw,tokens:[k]}):E.tokens.unshift(k)}}if(!p.loose){let A=E.tokens.filter(N=>N.type==="space"),k=A.length>0&&A.some(N=>this.rules.other.anyLine.test(N.raw));p.loose=k}}if(p.loose)for(let E of p.items){E.loose=!0;for(let A of E.tokens)A.type==="text"&&(A.type="paragraph")}return p}}html(u){let s=this.rules.block.html.exec(u);if(s)return{type:"html",block:!0,raw:s[0],pre:s[1]==="pre"||s[1]==="script"||s[1]==="style",text:s[0]}}def(u){let s=this.rules.block.def.exec(u);if(s){let c=s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=s[2]?s[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",f=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):s[3];return{type:"def",tag:c,raw:s[0],href:r,title:f}}}table(u){var p;let s=this.rules.block.table.exec(u);if(!s||!this.rules.other.tableDelimiter.test(s[2]))return;let c=rm(s[1]),r=s[2].replace(this.rules.other.tableAlignChars,"").split("|"),f=(p=s[3])!=null&&p.trim()?s[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],h={type:"table",raw:s[0],header:[],align:[],rows:[]};if(c.length===r.length){for(let g of r)this.rules.other.tableAlignRight.test(g)?h.align.push("right"):this.rules.other.tableAlignCenter.test(g)?h.align.push("center"):this.rules.other.tableAlignLeft.test(g)?h.align.push("left"):h.align.push(null);for(let g=0;g<c.length;g++)h.header.push({text:c[g],tokens:this.lexer.inline(c[g]),header:!0,align:h.align[g]});for(let g of f)h.rows.push(rm(g,h.header.length).map((y,m)=>({text:y,tokens:this.lexer.inline(y),header:!1,align:h.align[m]})));return h}}lheading(u){let s=this.rules.block.lheading.exec(u);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(u){let s=this.rules.block.paragraph.exec(u);if(s){let c=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:c,tokens:this.lexer.inline(c)}}}text(u){let s=this.rules.block.text.exec(u);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(u){let s=this.rules.inline.escape.exec(u);if(s)return{type:"escape",raw:s[0],text:s[1]}}tag(u){let s=this.rules.inline.tag.exec(u);if(s)return!this.lexer.state.inLink&&this.rules.other.startATag.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:s[0]}}link(u){let s=this.rules.inline.link.exec(u);if(s){let c=s[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(c)){if(!this.rules.other.endAngleBracket.test(c))return;let h=Ka(c.slice(0,-1),"\\");if((c.length-h.length)%2===0)return}else{let h=Xv(s[2],"()");if(h===-2)return;if(h>-1){let p=(s[0].indexOf("!")===0?5:4)+s[1].length+h;s[2]=s[2].substring(0,h),s[0]=s[0].substring(0,p).trim(),s[3]=""}}let r=s[2],f="";if(this.options.pedantic){let h=this.rules.other.pedanticHrefTitle.exec(r);h&&(r=h[1],f=h[3])}else f=s[3]?s[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(c)?r=r.slice(1):r=r.slice(1,-1)),om(s,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:f&&f.replace(this.rules.inline.anyPunctuation,"$1")},s[0],this.lexer,this.rules)}}reflink(u,s){let c;if((c=this.rules.inline.reflink.exec(u))||(c=this.rules.inline.nolink.exec(u))){let r=(c[2]||c[1]).replace(this.rules.other.multipleSpaceGlobal," "),f=s[r.toLowerCase()];if(!f){let h=c[0].charAt(0);return{type:"text",raw:h,text:h}}return om(c,f,c[0],this.lexer,this.rules)}}emStrong(u,s,c=""){let r=this.rules.inline.emStrongLDelim.exec(u);if(!(!r||r[3]&&c.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!c||this.rules.inline.punctuation.exec(c))){let f=[...r[0]].length-1,h,p,g=f,y=0,m=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,s=s.slice(-1*u.length+f);(r=m.exec(s))!=null;){if(h=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!h)continue;if(p=[...h].length,r[3]||r[4]){g+=p;continue}else if((r[5]||r[6])&&f%3&&!((f+p)%3)){y+=p;continue}if(g-=p,g>0)continue;p=Math.min(p,p+g+y);let E=[...r[0]][0].length,A=u.slice(0,f+r.index+E+p);if(Math.min(f,p)%2){let N=A.slice(1,-1);return{type:"em",raw:A,text:N,tokens:this.lexer.inlineTokens(N)}}let k=A.slice(2,-2);return{type:"strong",raw:A,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(u){let s=this.rules.inline.code.exec(u);if(s){let c=s[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(c),f=this.rules.other.startingSpaceChar.test(c)&&this.rules.other.endingSpaceChar.test(c);return r&&f&&(c=c.substring(1,c.length-1)),{type:"codespan",raw:s[0],text:c}}}br(u){let s=this.rules.inline.br.exec(u);if(s)return{type:"br",raw:s[0]}}del(u){let s=this.rules.inline.del.exec(u);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(u){let s=this.rules.inline.autolink.exec(u);if(s){let c,r;return s[2]==="@"?(c=s[1],r="mailto:"+c):(c=s[1],r=c),{type:"link",raw:s[0],text:c,href:r,tokens:[{type:"text",raw:c,text:c}]}}}url(u){var c;let s;if(s=this.rules.inline.url.exec(u)){let r,f;if(s[2]==="@")r=s[0],f="mailto:"+r;else{let h;do h=s[0],s[0]=((c=this.rules.inline._backpedal.exec(s[0]))==null?void 0:c[0])??"";while(h!==s[0]);r=s[0],s[1]==="www."?f="http://"+s[0]:f=s[0]}return{type:"link",raw:s[0],text:r,href:f,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(u){let s=this.rules.inline.text.exec(u);if(s){let c=this.lexer.state.inRawBlock;return{type:"text",raw:s[0],text:s[0],escaped:c}}}},Ht=class dr{constructor(s){Ae(this,"tokens");Ae(this,"options");Ae(this,"state");Ae(this,"inlineQueue");Ae(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=s||rl,this.options.tokenizer=this.options.tokenizer||new zu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let c={other:Ie,block:xu.normal,inline:Ja.normal};this.options.pedantic?(c.block=xu.pedantic,c.inline=Ja.pedantic):this.options.gfm&&(c.block=xu.gfm,this.options.breaks?c.inline=Ja.breaks:c.inline=Ja.gfm),this.tokenizer.rules=c}static get rules(){return{block:xu,inline:Ja}}static lex(s,c){return new dr(c).lex(s)}static lexInline(s,c){return new dr(c).inlineTokens(s)}lex(s){s=s.replace(Ie.carriageReturn,`
`),this.blockTokens(s,this.tokens);for(let c=0;c<this.inlineQueue.length;c++){let r=this.inlineQueue[c];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(s,c=[],r=!1){var f,h,p;for(this.options.pedantic&&(s=s.replace(Ie.tabCharGlobal,"    ").replace(Ie.spaceLine,""));s;){let g;if((h=(f=this.options.extensions)==null?void 0:f.block)!=null&&h.some(m=>(g=m.call({lexer:this},s,c))?(s=s.substring(g.raw.length),c.push(g),!0):!1))continue;if(g=this.tokenizer.space(s)){s=s.substring(g.raw.length);let m=c.at(-1);g.raw.length===1&&m!==void 0?m.raw+=`
`:c.push(g);continue}if(g=this.tokenizer.code(s)){s=s.substring(g.raw.length);let m=c.at(-1);(m==null?void 0:m.type)==="paragraph"||(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.at(-1).src=m.text):c.push(g);continue}if(g=this.tokenizer.fences(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.heading(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.hr(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.blockquote(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.list(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.html(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.def(s)){s=s.substring(g.raw.length);let m=c.at(-1);(m==null?void 0:m.type)==="paragraph"||(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.raw,this.inlineQueue.at(-1).src=m.text):this.tokens.links[g.tag]||(this.tokens.links[g.tag]={href:g.href,title:g.title},c.push(g));continue}if(g=this.tokenizer.table(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.lheading(s)){s=s.substring(g.raw.length),c.push(g);continue}let y=s;if((p=this.options.extensions)!=null&&p.startBlock){let m=1/0,E=s.slice(1),A;this.options.extensions.startBlock.forEach(k=>{A=k.call({lexer:this},E),typeof A=="number"&&A>=0&&(m=Math.min(m,A))}),m<1/0&&m>=0&&(y=s.substring(0,m+1))}if(this.state.top&&(g=this.tokenizer.paragraph(y))){let m=c.at(-1);r&&(m==null?void 0:m.type)==="paragraph"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):c.push(g),r=y.length!==s.length,s=s.substring(g.raw.length);continue}if(g=this.tokenizer.text(s)){s=s.substring(g.raw.length);let m=c.at(-1);(m==null?void 0:m.type)==="text"?(m.raw+=(m.raw.endsWith(`
`)?"":`
`)+g.raw,m.text+=`
`+g.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=m.text):c.push(g);continue}if(s){let m="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return this.state.top=!0,c}inline(s,c=[]){return this.inlineQueue.push({src:s,tokens:c}),c}inlineTokens(s,c=[]){var y,m,E,A,k;let r=s,f=null;if(this.tokens.links){let N=Object.keys(this.tokens.links);if(N.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)N.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,f.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let h;for(;(f=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)h=f[2]?f[2].length:0,r=r.slice(0,f.index+h)+"["+"a".repeat(f[0].length-h-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=((m=(y=this.options.hooks)==null?void 0:y.emStrongMask)==null?void 0:m.call({lexer:this},r))??r;let p=!1,g="";for(;s;){p||(g=""),p=!1;let N;if((A=(E=this.options.extensions)==null?void 0:E.inline)!=null&&A.some(U=>(N=U.call({lexer:this},s,c))?(s=s.substring(N.raw.length),c.push(N),!0):!1))continue;if(N=this.tokenizer.escape(s)){s=s.substring(N.raw.length),c.push(N);continue}if(N=this.tokenizer.tag(s)){s=s.substring(N.raw.length),c.push(N);continue}if(N=this.tokenizer.link(s)){s=s.substring(N.raw.length),c.push(N);continue}if(N=this.tokenizer.reflink(s,this.tokens.links)){s=s.substring(N.raw.length);let U=c.at(-1);N.type==="text"&&(U==null?void 0:U.type)==="text"?(U.raw+=N.raw,U.text+=N.text):c.push(N);continue}if(N=this.tokenizer.emStrong(s,r,g)){s=s.substring(N.raw.length),c.push(N);continue}if(N=this.tokenizer.codespan(s)){s=s.substring(N.raw.length),c.push(N);continue}if(N=this.tokenizer.br(s)){s=s.substring(N.raw.length),c.push(N);continue}if(N=this.tokenizer.del(s)){s=s.substring(N.raw.length),c.push(N);continue}if(N=this.tokenizer.autolink(s)){s=s.substring(N.raw.length),c.push(N);continue}if(!this.state.inLink&&(N=this.tokenizer.url(s))){s=s.substring(N.raw.length),c.push(N);continue}let L=s;if((k=this.options.extensions)!=null&&k.startInline){let U=1/0,B=s.slice(1),X;this.options.extensions.startInline.forEach(K=>{X=K.call({lexer:this},B),typeof X=="number"&&X>=0&&(U=Math.min(U,X))}),U<1/0&&U>=0&&(L=s.substring(0,U+1))}if(N=this.tokenizer.inlineText(L)){s=s.substring(N.raw.length),N.raw.slice(-1)!=="_"&&(g=N.raw.slice(-1)),p=!0;let U=c.at(-1);(U==null?void 0:U.type)==="text"?(U.raw+=N.raw,U.text+=N.text):c.push(N);continue}if(s){let U="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(U);break}else throw new Error(U)}}return c}},Mu=class{constructor(u){Ae(this,"options");Ae(this,"parser");this.options=u||rl}space(u){return""}code({text:u,lang:s,escaped:c}){var h;let r=(h=(s||"").match(Ie.notSpaceStart))==null?void 0:h[0],f=u.replace(Ie.endingNewline,"")+`
`;return r?'<pre><code class="language-'+fn(r)+'">'+(c?f:fn(f,!0))+`</code></pre>
`:"<pre><code>"+(c?f:fn(f,!0))+`</code></pre>
`}blockquote({tokens:u}){return`<blockquote>
${this.parser.parse(u)}</blockquote>
`}html({text:u}){return u}def(u){return""}heading({tokens:u,depth:s}){return`<h${s}>${this.parser.parseInline(u)}</h${s}>
`}hr(u){return`<hr>
`}list(u){let s=u.ordered,c=u.start,r="";for(let p=0;p<u.items.length;p++){let g=u.items[p];r+=this.listitem(g)}let f=s?"ol":"ul",h=s&&c!==1?' start="'+c+'"':"";return"<"+f+h+`>
`+r+"</"+f+`>
`}listitem(u){return`<li>${this.parser.parse(u.tokens)}</li>
`}checkbox({checked:u}){return"<input "+(u?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:u}){return`<p>${this.parser.parseInline(u)}</p>
`}table(u){let s="",c="";for(let f=0;f<u.header.length;f++)c+=this.tablecell(u.header[f]);s+=this.tablerow({text:c});let r="";for(let f=0;f<u.rows.length;f++){let h=u.rows[f];c="";for(let p=0;p<h.length;p++)c+=this.tablecell(h[p]);r+=this.tablerow({text:c})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+s+`</thead>
`+r+`</table>
`}tablerow({text:u}){return`<tr>
${u}</tr>
`}tablecell(u){let s=this.parser.parseInline(u.tokens),c=u.header?"th":"td";return(u.align?`<${c} align="${u.align}">`:`<${c}>`)+s+`</${c}>
`}strong({tokens:u}){return`<strong>${this.parser.parseInline(u)}</strong>`}em({tokens:u}){return`<em>${this.parser.parseInline(u)}</em>`}codespan({text:u}){return`<code>${fn(u,!0)}</code>`}br(u){return"<br>"}del({tokens:u}){return`<del>${this.parser.parseInline(u)}</del>`}link({href:u,title:s,tokens:c}){let r=this.parser.parseInline(c),f=cm(u);if(f===null)return r;u=f;let h='<a href="'+u+'"';return s&&(h+=' title="'+fn(s)+'"'),h+=">"+r+"</a>",h}image({href:u,title:s,text:c,tokens:r}){r&&(c=this.parser.parseInline(r,this.parser.textRenderer));let f=cm(u);if(f===null)return fn(c);u=f;let h=`<img src="${u}" alt="${c}"`;return s&&(h+=` title="${fn(s)}"`),h+=">",h}text(u){return"tokens"in u&&u.tokens?this.parser.parseInline(u.tokens):"escaped"in u&&u.escaped?u.text:fn(u.text)}},Or=class{strong({text:u}){return u}em({text:u}){return u}codespan({text:u}){return u}del({text:u}){return u}html({text:u}){return u}text({text:u}){return u}link({text:u}){return""+u}image({text:u}){return""+u}br(){return""}checkbox({raw:u}){return u}},Ut=class mr{constructor(s){Ae(this,"options");Ae(this,"renderer");Ae(this,"textRenderer");this.options=s||rl,this.options.renderer=this.options.renderer||new Mu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Or}static parse(s,c){return new mr(c).parse(s)}static parseInline(s,c){return new mr(c).parseInline(s)}parse(s){var r,f;let c="";for(let h=0;h<s.length;h++){let p=s[h];if((f=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&f[p.type]){let y=p,m=this.options.extensions.renderers[y.type].call({parser:this},y);if(m!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(y.type)){c+=m||"";continue}}let g=p;switch(g.type){case"space":{c+=this.renderer.space(g);break}case"hr":{c+=this.renderer.hr(g);break}case"heading":{c+=this.renderer.heading(g);break}case"code":{c+=this.renderer.code(g);break}case"table":{c+=this.renderer.table(g);break}case"blockquote":{c+=this.renderer.blockquote(g);break}case"list":{c+=this.renderer.list(g);break}case"checkbox":{c+=this.renderer.checkbox(g);break}case"html":{c+=this.renderer.html(g);break}case"def":{c+=this.renderer.def(g);break}case"paragraph":{c+=this.renderer.paragraph(g);break}case"text":{c+=this.renderer.text(g);break}default:{let y='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(y),"";throw new Error(y)}}}return c}parseInline(s,c=this.renderer){var f,h;let r="";for(let p=0;p<s.length;p++){let g=s[p];if((h=(f=this.options.extensions)==null?void 0:f.renderers)!=null&&h[g.type]){let m=this.options.extensions.renderers[g.type].call({parser:this},g);if(m!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(g.type)){r+=m||"";continue}}let y=g;switch(y.type){case"escape":{r+=c.text(y);break}case"html":{r+=c.html(y);break}case"link":{r+=c.link(y);break}case"image":{r+=c.image(y);break}case"checkbox":{r+=c.checkbox(y);break}case"strong":{r+=c.strong(y);break}case"em":{r+=c.em(y);break}case"codespan":{r+=c.codespan(y);break}case"br":{r+=c.br(y);break}case"del":{r+=c.del(y);break}case"text":{r+=c.text(y);break}default:{let m='Token with "'+y.type+'" type was not found.';if(this.options.silent)return console.error(m),"";throw new Error(m)}}}return r}},Su,$a=(Su=class{constructor(u){Ae(this,"options");Ae(this,"block");this.options=u||rl}preprocess(u){return u}postprocess(u){return u}processAllTokens(u){return u}emStrongMask(u){return u}provideLexer(){return this.block?Ht.lex:Ht.lexInline}provideParser(){return this.block?Ut.parse:Ut.parseInline}},Ae(Su,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Ae(Su,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Su),Vv=class{constructor(...u){Ae(this,"defaults",Ar());Ae(this,"options",this.setOptions);Ae(this,"parse",this.parseMarkdown(!0));Ae(this,"parseInline",this.parseMarkdown(!1));Ae(this,"Parser",Ut);Ae(this,"Renderer",Mu);Ae(this,"TextRenderer",Or);Ae(this,"Lexer",Ht);Ae(this,"Tokenizer",zu);Ae(this,"Hooks",$a);this.use(...u)}walkTokens(u,s){var r,f;let c=[];for(let h of u)switch(c=c.concat(s.call(this,h)),h.type){case"table":{let p=h;for(let g of p.header)c=c.concat(this.walkTokens(g.tokens,s));for(let g of p.rows)for(let y of g)c=c.concat(this.walkTokens(y.tokens,s));break}case"list":{let p=h;c=c.concat(this.walkTokens(p.items,s));break}default:{let p=h;(f=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&f[p.type]?this.defaults.extensions.childTokens[p.type].forEach(g=>{let y=p[g].flat(1/0);c=c.concat(this.walkTokens(y,s))}):p.tokens&&(c=c.concat(this.walkTokens(p.tokens,s)))}}return c}use(...u){let s=this.defaults.extensions||{renderers:{},childTokens:{}};return u.forEach(c=>{let r={...c};if(r.async=this.defaults.async||r.async||!1,c.extensions&&(c.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if("renderer"in f){let h=s.renderers[f.name];h?s.renderers[f.name]=function(...p){let g=f.renderer.apply(this,p);return g===!1&&(g=h.apply(this,p)),g}:s.renderers[f.name]=f.renderer}if("tokenizer"in f){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let h=s[f.level];h?h.unshift(f.tokenizer):s[f.level]=[f.tokenizer],f.start&&(f.level==="block"?s.startBlock?s.startBlock.push(f.start):s.startBlock=[f.start]:f.level==="inline"&&(s.startInline?s.startInline.push(f.start):s.startInline=[f.start]))}"childTokens"in f&&f.childTokens&&(s.childTokens[f.name]=f.childTokens)}),r.extensions=s),c.renderer){let f=this.defaults.renderer||new Mu(this.defaults);for(let h in c.renderer){if(!(h in f))throw new Error(`renderer '${h}' does not exist`);if(["options","parser"].includes(h))continue;let p=h,g=c.renderer[p],y=f[p];f[p]=(...m)=>{let E=g.apply(f,m);return E===!1&&(E=y.apply(f,m)),E||""}}r.renderer=f}if(c.tokenizer){let f=this.defaults.tokenizer||new zu(this.defaults);for(let h in c.tokenizer){if(!(h in f))throw new Error(`tokenizer '${h}' does not exist`);if(["options","rules","lexer"].includes(h))continue;let p=h,g=c.tokenizer[p],y=f[p];f[p]=(...m)=>{let E=g.apply(f,m);return E===!1&&(E=y.apply(f,m)),E}}r.tokenizer=f}if(c.hooks){let f=this.defaults.hooks||new $a;for(let h in c.hooks){if(!(h in f))throw new Error(`hook '${h}' does not exist`);if(["options","block"].includes(h))continue;let p=h,g=c.hooks[p],y=f[p];$a.passThroughHooks.has(h)?f[p]=m=>{if(this.defaults.async&&$a.passThroughHooksRespectAsync.has(h))return(async()=>{let A=await g.call(f,m);return y.call(f,A)})();let E=g.call(f,m);return y.call(f,E)}:f[p]=(...m)=>{if(this.defaults.async)return(async()=>{let A=await g.apply(f,m);return A===!1&&(A=await y.apply(f,m)),A})();let E=g.apply(f,m);return E===!1&&(E=y.apply(f,m)),E}}r.hooks=f}if(c.walkTokens){let f=this.defaults.walkTokens,h=c.walkTokens;r.walkTokens=function(p){let g=[];return g.push(h.call(this,p)),f&&(g=g.concat(f.call(this,p))),g}}this.defaults={...this.defaults,...r}}),this}setOptions(u){return this.defaults={...this.defaults,...u},this}lexer(u,s){return Ht.lex(u,s??this.defaults)}parser(u,s){return Ut.parse(u,s??this.defaults)}parseMarkdown(u){return(s,c)=>{let r={...c},f={...this.defaults,...r},h=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&r.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof s>"u"||s===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(f.hooks&&(f.hooks.options=f,f.hooks.block=u),f.async)return(async()=>{let p=f.hooks?await f.hooks.preprocess(s):s,g=await(f.hooks?await f.hooks.provideLexer():u?Ht.lex:Ht.lexInline)(p,f),y=f.hooks?await f.hooks.processAllTokens(g):g;f.walkTokens&&await Promise.all(this.walkTokens(y,f.walkTokens));let m=await(f.hooks?await f.hooks.provideParser():u?Ut.parse:Ut.parseInline)(y,f);return f.hooks?await f.hooks.postprocess(m):m})().catch(h);try{f.hooks&&(s=f.hooks.preprocess(s));let p=(f.hooks?f.hooks.provideLexer():u?Ht.lex:Ht.lexInline)(s,f);f.hooks&&(p=f.hooks.processAllTokens(p)),f.walkTokens&&this.walkTokens(p,f.walkTokens);let g=(f.hooks?f.hooks.provideParser():u?Ut.parse:Ut.parseInline)(p,f);return f.hooks&&(g=f.hooks.postprocess(g)),g}catch(p){return h(p)}}}onError(u,s){return c=>{if(c.message+=`
Please report this to https://github.com/markedjs/marked.`,u){let r="<p>An error occurred:</p><pre>"+fn(c.message+"",!0)+"</pre>";return s?Promise.resolve(r):r}if(s)return Promise.reject(c);throw c}}},sl=new Vv;function ye(u,s){return sl.parse(u,s)}ye.options=ye.setOptions=function(u){return sl.setOptions(u),ye.defaults=sl.defaults,wm(ye.defaults),ye};ye.getDefaults=Ar;ye.defaults=rl;ye.use=function(...u){return sl.use(...u),ye.defaults=sl.defaults,wm(ye.defaults),ye};ye.walkTokens=function(u,s){return sl.walkTokens(u,s)};ye.parseInline=sl.parseInline;ye.Parser=Ut;ye.parser=Ut.parse;ye.Renderer=Mu;ye.TextRenderer=Or;ye.Lexer=Ht;ye.lexer=Ht.lex;ye.Tokenizer=zu;ye.Hooks=$a;ye.parse=ye;ye.options;ye.setOptions;ye.use;ye.walkTokens;ye.parseInline;Ut.parse;Ht.lex;const Jv=Object.assign({"/post/2025-10-27-Base64.md":Fb,"/post/2025-11-12-JAVA_프로그램이_실행되는_과정.md":Pb,"/post/2025-11-19-OOP.md":Ib,"/post/2025-11-23-Garbage_Collection.md":ev,"/post/2025-12-10-IoC_DI.md":tv,"/post/2025-12-13-observer_pattern.md":nv,"/post/2025-12-20-reactive-programming.md":lv,"/post/2026-01-10-RabbitMq_Clustering.md":av,"/post/2026-01-14-mirror_queue_vs_quorum_queue.md":iv,"/post/2026-02-05-React로_개발된_Github_Blog_배포_방법.md":uv,"/post/2026-03-04-CHARYEOT_게임_패배_범인찾기_프로젝트.md":sv,"/post/2026-03-05-CHARYEOT_앞으로의_계획.md":cv,"/post/2026-03-06-CHARYEOT_리그_오브_레전드_1_API_Key_발급받기.md":rv});function fm(u){var r;const s=((r=u.split("/").pop())==null?void 0:r.replace(".md",""))||"",c=s.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);return c?{date:c[1],slug:c[2]}:{date:"",slug:s}}function hm(u){return u.replace(/-/g,".")}function Kv(u){const s=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,c=u.match(s);if(!c)return{data:{title:"",description:"",date:"",tags:[]},content:u};const[,r,f]=c,h={title:"",description:"",date:"",tags:[]},p=r.split(/\r?\n/);for(const g of p){const y=g.indexOf(":");if(y===-1)continue;const m=g.slice(0,y).trim();let E=g.slice(y+1).trim();if((E.startsWith('"')&&E.endsWith('"')||E.startsWith("'")&&E.endsWith("'"))&&(E=E.slice(1,-1)),m==="title")h.title=E;else if(m==="description")h.description=E;else if(m==="date")h.date=E;else if(m==="tags"){const A=E.match(/\[(.*)\]/);A&&(h.tags=A[1].split(",").map(k=>k.trim().replace(/^["']|["']$/g,"")))}}return{data:h,content:f}}function $v(u,s){const{data:c,content:r}=Kv(s),{slug:f}=fm(u),h=ye(r),p=c.date?hm(c.date.replace(/"/g,"")):hm(fm(u).date);return{id:f,title:c.title||f,description:c.description||"",date:p,tags:c.tags||[],content:h}}let sr=null;function kr(){if(sr)return sr;const u=[];for(const[s,c]of Object.entries(Jv))try{const r=$v(s,c);u.push(r)}catch(r){console.error(`Failed to parse post: ${s}`,r)}return u.sort((s,c)=>{const r=s.date.replace(/\./g,"-");return c.date.replace(/\./g,"-").localeCompare(r)}),sr=u,u}function Wv(u){return kr().find(c=>c.id===u)}const Fv=()=>{const u=kr().slice(0,4);return v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("section",{className:"mb-16",children:[v.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight",children:["BackEnd Developer Hanwhee",v.jsx("span",{className:"inline-block animate-[bounce_2s_infinite]",children:"😎"})]}),v.jsxs("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed",children:[v.jsxs("p",{children:["안녕하세요! ",v.jsx("span",{className:"font-bold text-slate-900 bg-mint px-1",children:"백엔드 개발자 김한휘"}),"입니다!"]}),v.jsx("p",{children:"스탠다드네트웍스에서 3년간 근무하며 대용량 트래픽 환경에서 자라며 MSA 설계부터 개발, 운영까지 경험하며 성장해왔어요."}),v.jsx("p",{children:"서비스 불편한 거 하나씩 고칠 때마다 희열을 느끼는 타입입니다🔥🔥🔥"})]})]}),v.jsxs("section",{className:"mb-20",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[v.jsx("span",{className:"text-2xl",children:"🌱"}),v.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"My Career"})]}),v.jsxs("div",{className:"flex flex-col",children:[fr.map((s,c)=>v.jsxs("div",{className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${c!==fr.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[v.jsx("div",{className:"mb-2 md:mb-0",children:v.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:s.title.split("(")[0]})}),v.jsxs("div",{className:"flex flex-col md:items-end text-slate-500 text-sm md:text-base",children:[v.jsx("span",{className:"font-medium text-slate-700",children:s.role}),v.jsx("span",{className:"text-xs md:text-sm font-mono mt-1 text-slate-400",children:s.period})]})]},s.id)),v.jsx("div",{className:"flex flex-col md:flex-row md:justify-between md:items-baseline py-5 border-t border-slate-100 px-2 -mx-2 text-slate-400",children:v.jsx("div",{children:v.jsx("h3",{className:"text-lg font-bold",children:"... To Be Continued..."})})})]})]}),u.length>0&&v.jsxs("section",{className:"mb-20",children:[v.jsxs("div",{className:"flex items-center justify-between mb-8",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"text-2xl",children:"📝"}),v.jsx("h2",{className:"text-2xl font-bold bg-sky-100 px-2 leading-none",children:"Recent Posts"})]}),v.jsxs(hn,{to:"/blog",className:"text-sm text-slate-500 hover:text-sky-600 flex items-center gap-1 transition-colors",children:["전체보기 ",v.jsx(ur,{size:14})]})]}),v.jsx("div",{className:"flex flex-col",children:u.map((s,c)=>v.jsxs(hn,{to:`/blog/${s.id}`,className:`flex flex-col md:flex-row md:justify-between md:items-baseline py-5 ${c!==u.length-1?"border-b border-slate-100":""} hover:bg-slate-50 transition-colors px-2 -mx-2 rounded-lg group`,children:[v.jsxs("div",{className:"mb-2 md:mb-0 flex-1",children:[v.jsx("h3",{className:"text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors",children:s.title}),v.jsx("p",{className:"text-sm text-slate-500 mt-1 line-clamp-1",children:s.description})]}),v.jsx("div",{className:"text-xs font-mono text-slate-400 md:ml-4",children:s.date})]},s.id))})]}),v.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[v.jsxs(hn,{to:"/skills",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[v.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Skills ",v.jsx(ur,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),v.jsx("p",{className:"text-sm text-slate-500",children:"지금까지 써본 기술들과 개발 환경 정리해봤어요 🛠️"})]}),v.jsxs(hn,{to:"/education",className:"block p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-all group",children:[v.jsxs("h3",{className:"font-bold text-lg mb-2 group-hover:text-blue-800 flex items-center",children:["Education ",v.jsx(ur,{size:16,className:"ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]}),v.jsx("p",{className:"text-sm text-slate-500",children:"개발자로 성장하기 위해 공부하고 수료한 교육 과정들이에요 📚"})]})]})]})},Pv=()=>v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12",children:["Work Experience ",v.jsx("span",{className:"text-sky-400",children:"."})]}),v.jsx("div",{className:"space-y-16",children:fr.map(u=>v.jsxs("div",{className:"relative border-l-2 border-slate-100 pl-6 md:pl-8 ml-2",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2",children:[v.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900",children:u.title}),v.jsx("span",{className:"font-mono text-sm text-slate-400 mt-1 sm:mt-0 whitespace-nowrap",children:u.period})]}),v.jsx("div",{className:"text-lg font-medium text-slate-700 mb-4",children:u.role}),v.jsx("p",{className:"text-slate-600 leading-relaxed mb-6 max-w-2xl",children:u.description}),v.jsx("div",{className:"mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm font-mono text-slate-500",children:u.techStack.map((s,c)=>v.jsxs("span",{className:"bg-slate-50 px-1.5 rounded text-slate-600",children:["#",s]},s))}),v.jsx("ul",{className:"space-y-2 text-slate-600 list-disc list-outside pl-4",children:u.keyAchievements.map((s,c)=>v.jsx("li",{className:"pl-1 marker:text-sky-300",children:s},c))})]},u.id))})]}),Iv=()=>v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Skills ",v.jsx("span",{className:"text-sky-400",children:"."})]}),v.jsx("p",{className:"text-slate-500 mb-12",children:"지금까지 사용해본 기술들입니다."}),v.jsx("div",{className:"space-y-12",children:Kb.map(u=>v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-bold text-slate-900 mb-6 bg-sky-50 inline-block px-2 py-0.5 rounded-md",children:u.category}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6",children:u.items.map(s=>v.jsx("div",{className:"flex flex-col",children:v.jsx("div",{className:"flex items-center justify-between mb-1",children:v.jsx("span",{className:"font-bold text-slate-800 text-lg",children:s.name})})},s.name))}),v.jsx("hr",{className:"mt-10 border-slate-100"})]},u.category))})]}),e1=()=>{const u=am.filter(c=>c.category==="Education"),s=am.filter(c=>c.category==="Certification");return v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-12",children:"Education & Certs"}),v.jsx("p",{className:"text-slate-500 mb-12",children:"제가 해낸 교육과정/자격증 입니다."}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Education"}),v.jsx("div",{className:"space-y-10",children:u.map((c,r)=>v.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8",children:[v.jsx("div",{className:"md:w-32 flex-shrink-0 mb-1 md:mb-0",children:v.jsx("span",{className:"font-mono text-sm text-slate-400",children:c.period})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-bold text-slate-900",children:v.jsx("a",{href:c.link,className:"hover:underline",children:c.institution})}),v.jsx("div",{className:"text-slate-700 font-medium mb-3",children:c.degree}),v.jsx("ul",{className:"text-slate-600 text-sm space-y-1 list-disc list-outside pl-4",children:c.details.map((f,h)=>v.jsx("li",{children:f},h))})]})]},r))})]}),v.jsxs("section",{children:[v.jsx("h2",{className:"text-lg font-bold text-slate-400 uppercase tracking-wider mb-6",children:"Certifications"}),v.jsx("div",{className:"space-y-6",children:s.map((c,r)=>v.jsxs("div",{className:"flex flex-col md:flex-row md:gap-8 items-start",children:[v.jsx("div",{className:"md:w-32 flex-shrink-0",children:v.jsx("span",{className:"font-mono text-sm text-slate-400",children:c.period})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-slate-900",children:c.institution}),v.jsx("p",{className:"text-slate-600",children:c.details[0]})]})]},r))})]})]})},cr=5,t1=()=>{const u=kr(),[s,c]=C.useState(1),r=Math.ceil(u.length/cr),f=(s-1)*cr,h=u.slice(f,f+cr),p=()=>{c(m=>Math.max(m-1,1)),window.scrollTo({top:0,behavior:"smooth"})},g=()=>{c(m=>Math.min(m+1,r)),window.scrollTo({top:0,behavior:"smooth"})},y=m=>{c(m),window.scrollTo({top:0,behavior:"smooth"})};return v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-2",children:["Blog ",v.jsx("span",{className:"text-sky-400",children:"."})]}),v.jsx("p",{className:"text-slate-500 mb-12",children:"생각을 정리하고 배운 것을 공유합니다."}),v.jsx("div",{className:"flex flex-col space-y-10",children:h.map(m=>{var E;return v.jsx("article",{className:"group",children:v.jsxs(hn,{to:`/blog/${m.id}`,className:"block",children:[v.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-400 mb-2 font-mono",children:m.date}),v.jsx("h2",{className:"text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors",children:m.title}),v.jsx("p",{className:"text-slate-600 leading-relaxed mb-3",children:m.description}),v.jsx("div",{className:"flex gap-2",children:(E=m.tags)==null?void 0:E.map(A=>v.jsxs("span",{className:"text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded",children:["#",A]},A))})]})},m.id)})}),r>1&&v.jsxs("div",{className:"flex items-center justify-center gap-2 mt-16 pt-8 border-t border-slate-100",children:[v.jsx("button",{onClick:p,disabled:s===1,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"이전 페이지",children:v.jsx(Sb,{size:20})}),v.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:r},(m,E)=>E+1).map(m=>v.jsx("button",{onClick:()=>y(m),className:`w-10 h-10 rounded-lg font-medium transition-colors ${s===m?"bg-sky-500 text-white":"hover:bg-slate-100 text-slate-600"}`,children:m},m))}),v.jsx("button",{onClick:g,disabled:s===r,className:"p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors","aria-label":"다음 페이지",children:v.jsx(Ab,{size:20})})]})]})};function n1({term:u}){const s=C.useRef(null);return C.useEffect(()=>{if(!s.current)return;s.current.innerHTML="";const c=document.createElement("script");c.src="https://giscus.app/client.js",c.async=!0,c.crossOrigin="anonymous",c.setAttribute("data-repo","KimHanWhee/KimHanWhee.github.io"),c.setAttribute("data-repo-id","R_kgDORCSvGA"),c.setAttribute("data-category","General"),c.setAttribute("data-category-id","DIC_kwDORCSvGM4C3O7R"),c.setAttribute("data-mapping","specific"),c.setAttribute("data-term",u),c.setAttribute("data-strict","0"),c.setAttribute("data-reactions-enabled","1"),c.setAttribute("data-emit-metadata","0"),c.setAttribute("data-input-position","bottom"),c.setAttribute("data-theme","preferred_color_scheme"),c.setAttribute("data-lang","ko"),s.current.appendChild(c)},[u]),v.jsx("section",{ref:s})}const l1=()=>{const{id:u}=hy(),s=u?Wv(u):void 0,c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s?v.jsxs("div",{className:"min-h-screen bg-white font-sans selection:bg-secondary/20 selection:text-primary",children:[v.jsx("div",{className:"bg-slate-50 border-b border-slate-200",children:v.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative",children:[v.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-5 pointer-events-none",children:v.jsx("div",{className:"text-9xl font-bold font-mono text-slate-900 tracking-tighter"})}),v.jsxs(hn,{to:"/blog",className:"inline-flex items-center text-slate-500 hover:text-secondary mb-8 transition-colors font-medium",children:[v.jsx(mb,{size:18,className:"mr-2"}),"Back to Tech Notes"]}),v.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-primary mb-8 leading-tight tracking-tight",children:s.title}),v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-6 text-slate-600 border-t border-slate-200/60 pt-6",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(yb,{size:18,className:"text-secondary"}),v.jsx("span",{className:"font-medium font-mono text-sm",children:s.date})]}),v.jsx("div",{className:"hidden sm:block w-px h-4 bg-slate-300"}),v.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:s.tags.map(r=>v.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm",children:[v.jsx(Zb,{size:12,className:"mr-1.5 text-slate-400"}),r]},r))})]})]})}),v.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[v.jsxs("article",{className:"prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-h2:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl",children:[v.jsx("style",{children:`
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
          `}),v.jsx("div",{dangerouslySetInnerHTML:{__html:s.content}})]}),v.jsxs("div",{className:"mt-20 pt-10 border-t border-slate-100 flex flex-col items-center",children:[v.jsx("button",{onClick:c,className:"mb-8 p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-secondary transition-colors","aria-label":"Scroll to top",children:v.jsx(Tb,{size:24})}),v.jsx(hn,{to:"/blog",className:"px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20",children:"다른 글 보러가기"})]})]}),v.jsx(n1,{term:u})]}):v.jsx(Ry,{to:"/blog",replace:!0})},a1=()=>{const[u,s]=C.useState(!1),c="hanwhee2@gmail.com",r=()=>{navigator.clipboard.writeText(c),s(!0),setTimeout(()=>s(!1),2e3)};return v.jsxs("div",{className:"pt-4 md:pt-10 animate-fade-in-up",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mb-8",children:["Contact ",v.jsx("span",{className:"text-sky-400",children:"."})]}),v.jsx("div",{className:"prose prose-lg prose-slate text-slate-600 leading-relaxed mb-12",children:v.jsxs("p",{children:[v.jsx("br",{}),"궁금한 점이 있으시다면 편하게 연락주세요💬"]})}),v.jsxs("div",{className:"mb-12",children:[v.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2",children:"Email"}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"text-2xl md:text-3xl font-mono font-bold text-slate-900 hover:bg-sky-100 transition-colors px-1 -ml-1 rounded",children:c}),v.jsx("button",{onClick:r,className:"p-2 text-slate-400 hover:text-sky-600 transition-colors","aria-label":"Copy email address",children:u?v.jsx(vb,{size:20,className:"text-sky-500"}):v.jsx(Mb,{size:20})})]})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-sm font-bold text-slate-400 uppercase tracking-wider block mb-4",children:"Social"}),v.jsx("div",{className:"flex flex-col space-y-3 items-start",children:v.jsxs("a",{href:"https://github.com/KimHanWhee",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-slate-900 hover:underline decoration-sky-400 underline-offset-4 decoration-2",children:["Github ",v.jsx(Db,{size:14,className:"opacity-50"})]})})]})]})},i1=()=>v.jsx(Iy,{children:v.jsx(Cy,{children:v.jsxs(on,{path:"/",element:v.jsx(Wb,{}),children:[v.jsx(on,{index:!0,element:v.jsx(Fv,{})}),v.jsx(on,{path:"experience",element:v.jsx(Pv,{})}),v.jsx(on,{path:"skills",element:v.jsx(Iv,{})}),v.jsx(on,{path:"education",element:v.jsx(e1,{})}),v.jsx(on,{path:"blog",element:v.jsx(t1,{})}),v.jsx(on,{path:"blog/:id",element:v.jsx(l1,{})}),v.jsx(on,{path:"contact",element:v.jsx(a1,{})})]})})}),Xm=document.getElementById("root");if(!Xm)throw new Error("Could not find root element to mount to");const u1=zg.createRoot(Xm);u1.render(v.jsx(vg.StrictMode,{children:v.jsx(i1,{})}));
