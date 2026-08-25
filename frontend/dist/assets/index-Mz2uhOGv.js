var Bg=Object.defineProperty;var Dg=(t,n,o)=>n in t?Bg(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;var gl=(t,n,o)=>Dg(t,typeof n!="symbol"?n+"":n,o);function zg(t,n){for(var o=0;o<n.length;o++){const l=n[o];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in t)){const u=Object.getOwnPropertyDescriptor(l,a);u&&Object.defineProperty(t,a,u.get?u:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(a){if(a.ep)return;a.ep=!0;const u=o(a);fetch(a.href,u)}})();function k_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nd={exports:{}},yl={},rd={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function Fg(){if(cp)return Et;cp=1;var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function b(j){return j===null||typeof j!="object"?null:(j=x&&j[x]||j["@@iterator"],typeof j=="function"?j:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function I(j,H,ge){this.props=j,this.context=H,this.refs=M,this.updater=ge||P}I.prototype.isReactComponent={},I.prototype.setState=function(j,H){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,H,"setState")},I.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function R(){}R.prototype=I.prototype;function Y(j,H,ge){this.props=j,this.context=H,this.refs=M,this.updater=ge||P}var Q=Y.prototype=new R;Q.constructor=Y,N(Q,I.prototype),Q.isPureReactComponent=!0;var $=Array.isArray,ie=Object.prototype.hasOwnProperty,re={current:null},ne={key:!0,ref:!0,__self:!0,__source:!0};function De(j,H,ge){var Se,Fe={},q=null,ve=null;if(H!=null)for(Se in H.ref!==void 0&&(ve=H.ref),H.key!==void 0&&(q=""+H.key),H)ie.call(H,Se)&&!ne.hasOwnProperty(Se)&&(Fe[Se]=H[Se]);var Pe=arguments.length-2;if(Pe===1)Fe.children=ge;else if(1<Pe){for(var ut=Array(Pe),Bt=0;Bt<Pe;Bt++)ut[Bt]=arguments[Bt+2];Fe.children=ut}if(j&&j.defaultProps)for(Se in Pe=j.defaultProps,Pe)Fe[Se]===void 0&&(Fe[Se]=Pe[Se]);return{$$typeof:t,type:j,key:q,ref:ve,props:Fe,_owner:re.current}}function rt(j,H){return{$$typeof:t,type:j.type,key:H,ref:j.ref,props:j.props,_owner:j._owner}}function Le(j){return typeof j=="object"&&j!==null&&j.$$typeof===t}function Te(j){var H={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ge){return H[ge]})}var tt=/\/+/g;function Ge(j,H){return typeof j=="object"&&j!==null&&j.key!=null?Te(""+j.key):H.toString(36)}function ce(j,H,ge,Se,Fe){var q=typeof j;(q==="undefined"||q==="boolean")&&(j=null);var ve=!1;if(j===null)ve=!0;else switch(q){case"string":case"number":ve=!0;break;case"object":switch(j.$$typeof){case t:case n:ve=!0}}if(ve)return ve=j,Fe=Fe(ve),j=Se===""?"."+Ge(ve,0):Se,$(Fe)?(ge="",j!=null&&(ge=j.replace(tt,"$&/")+"/"),ce(Fe,H,ge,"",function(Bt){return Bt})):Fe!=null&&(Le(Fe)&&(Fe=rt(Fe,ge+(!Fe.key||ve&&ve.key===Fe.key?"":(""+Fe.key).replace(tt,"$&/")+"/")+j)),H.push(Fe)),1;if(ve=0,Se=Se===""?".":Se+":",$(j))for(var Pe=0;Pe<j.length;Pe++){q=j[Pe];var ut=Se+Ge(q,Pe);ve+=ce(q,H,ge,ut,Fe)}else if(ut=b(j),typeof ut=="function")for(j=ut.call(j),Pe=0;!(q=j.next()).done;)q=q.value,ut=Se+Ge(q,Pe++),ve+=ce(q,H,ge,ut,Fe);else if(q==="object")throw H=String(j),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return ve}function me(j,H,ge){if(j==null)return j;var Se=[],Fe=0;return ce(j,Se,"","",function(q){return H.call(ge,q,Fe++)}),Se}function de(j){if(j._status===-1){var H=j._result;H=H(),H.then(function(ge){(j._status===0||j._status===-1)&&(j._status=1,j._result=ge)},function(ge){(j._status===0||j._status===-1)&&(j._status=2,j._result=ge)}),j._status===-1&&(j._status=0,j._result=H)}if(j._status===1)return j._result.default;throw j._result}var ze={current:null},D={transition:null},X={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:D,ReactCurrentOwner:re};function G(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:me,forEach:function(j,H,ge){me(j,function(){H.apply(this,arguments)},ge)},count:function(j){var H=0;return me(j,function(){H++}),H},toArray:function(j){return me(j,function(H){return H})||[]},only:function(j){if(!Le(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Et.Component=I,Et.Fragment=o,Et.Profiler=a,Et.PureComponent=Y,Et.StrictMode=l,Et.Suspense=_,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Et.act=G,Et.cloneElement=function(j,H,ge){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var Se=N({},j.props),Fe=j.key,q=j.ref,ve=j._owner;if(H!=null){if(H.ref!==void 0&&(q=H.ref,ve=re.current),H.key!==void 0&&(Fe=""+H.key),j.type&&j.type.defaultProps)var Pe=j.type.defaultProps;for(ut in H)ie.call(H,ut)&&!ne.hasOwnProperty(ut)&&(Se[ut]=H[ut]===void 0&&Pe!==void 0?Pe[ut]:H[ut])}var ut=arguments.length-2;if(ut===1)Se.children=ge;else if(1<ut){Pe=Array(ut);for(var Bt=0;Bt<ut;Bt++)Pe[Bt]=arguments[Bt+2];Se.children=Pe}return{$$typeof:t,type:j.type,key:Fe,ref:q,props:Se,_owner:ve}},Et.createContext=function(j){return j={$$typeof:f,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:u,_context:j},j.Consumer=j},Et.createElement=De,Et.createFactory=function(j){var H=De.bind(null,j);return H.type=j,H},Et.createRef=function(){return{current:null}},Et.forwardRef=function(j){return{$$typeof:p,render:j}},Et.isValidElement=Le,Et.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:de}},Et.memo=function(j,H){return{$$typeof:w,type:j,compare:H===void 0?null:H}},Et.startTransition=function(j){var H=D.transition;D.transition={};try{j()}finally{D.transition=H}},Et.unstable_act=G,Et.useCallback=function(j,H){return ze.current.useCallback(j,H)},Et.useContext=function(j){return ze.current.useContext(j)},Et.useDebugValue=function(){},Et.useDeferredValue=function(j){return ze.current.useDeferredValue(j)},Et.useEffect=function(j,H){return ze.current.useEffect(j,H)},Et.useId=function(){return ze.current.useId()},Et.useImperativeHandle=function(j,H,ge){return ze.current.useImperativeHandle(j,H,ge)},Et.useInsertionEffect=function(j,H){return ze.current.useInsertionEffect(j,H)},Et.useLayoutEffect=function(j,H){return ze.current.useLayoutEffect(j,H)},Et.useMemo=function(j,H){return ze.current.useMemo(j,H)},Et.useReducer=function(j,H,ge){return ze.current.useReducer(j,H,ge)},Et.useRef=function(j){return ze.current.useRef(j)},Et.useState=function(j){return ze.current.useState(j)},Et.useSyncExternalStore=function(j,H,ge){return ze.current.useSyncExternalStore(j,H,ge)},Et.useTransition=function(){return ze.current.useTransition()},Et.version="18.3.1",Et}var up;function qd(){return up||(up=1,rd.exports=Fg()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function Wg(){if(dp)return yl;dp=1;var t=qd(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(p,_,w){var y,x={},b=null,P=null;w!==void 0&&(b=""+w),_.key!==void 0&&(b=""+_.key),_.ref!==void 0&&(P=_.ref);for(y in _)l.call(_,y)&&!u.hasOwnProperty(y)&&(x[y]=_[y]);if(p&&p.defaultProps)for(y in _=p.defaultProps,_)x[y]===void 0&&(x[y]=_[y]);return{$$typeof:n,type:p,key:b,ref:P,props:x,_owner:a.current}}return yl.Fragment=o,yl.jsx=f,yl.jsxs=f,yl}var fp;function Ug(){return fp||(fp=1,nd.exports=Wg()),nd.exports}var s=Ug(),m=qd();const Qd=k_(m),Hg=zg({__proto__:null,default:Qd},[m]);var Va={},od={exports:{}},ar={},sd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Yg(){return hp||(hp=1,(function(t){function n(D,X){var G=D.length;D.push(X);e:for(;0<G;){var j=G-1>>>1,H=D[j];if(0<a(H,X))D[j]=X,D[G]=H,G=j;else break e}}function o(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var X=D[0],G=D.pop();if(G!==X){D[0]=G;e:for(var j=0,H=D.length,ge=H>>>1;j<ge;){var Se=2*(j+1)-1,Fe=D[Se],q=Se+1,ve=D[q];if(0>a(Fe,G))q<H&&0>a(ve,Fe)?(D[j]=ve,D[q]=G,j=q):(D[j]=Fe,D[Se]=G,j=Se);else if(q<H&&0>a(ve,G))D[j]=ve,D[q]=G,j=q;else break e}}return X}function a(D,X){var G=D.sortIndex-X.sortIndex;return G!==0?G:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();t.unstable_now=function(){return f.now()-p}}var _=[],w=[],y=1,x=null,b=3,P=!1,N=!1,M=!1,I=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(D){for(var X=o(w);X!==null;){if(X.callback===null)l(w);else if(X.startTime<=D)l(w),X.sortIndex=X.expirationTime,n(_,X);else break;X=o(w)}}function $(D){if(M=!1,Q(D),!N)if(o(_)!==null)N=!0,de(ie);else{var X=o(w);X!==null&&ze($,X.startTime-D)}}function ie(D,X){N=!1,M&&(M=!1,R(De),De=-1),P=!0;var G=b;try{for(Q(X),x=o(_);x!==null&&(!(x.expirationTime>X)||D&&!Te());){var j=x.callback;if(typeof j=="function"){x.callback=null,b=x.priorityLevel;var H=j(x.expirationTime<=X);X=t.unstable_now(),typeof H=="function"?x.callback=H:x===o(_)&&l(_),Q(X)}else l(_);x=o(_)}if(x!==null)var ge=!0;else{var Se=o(w);Se!==null&&ze($,Se.startTime-X),ge=!1}return ge}finally{x=null,b=G,P=!1}}var re=!1,ne=null,De=-1,rt=5,Le=-1;function Te(){return!(t.unstable_now()-Le<rt)}function tt(){if(ne!==null){var D=t.unstable_now();Le=D;var X=!0;try{X=ne(!0,D)}finally{X?Ge():(re=!1,ne=null)}}else re=!1}var Ge;if(typeof Y=="function")Ge=function(){Y(tt)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,me=ce.port2;ce.port1.onmessage=tt,Ge=function(){me.postMessage(null)}}else Ge=function(){I(tt,0)};function de(D){ne=D,re||(re=!0,Ge())}function ze(D,X){De=I(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){N||P||(N=!0,de(ie))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_getFirstCallbackNode=function(){return o(_)},t.unstable_next=function(D){switch(b){case 1:case 2:case 3:var X=3;break;default:X=b}var G=b;b=X;try{return D()}finally{b=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=b;b=D;try{return X()}finally{b=G}},t.unstable_scheduleCallback=function(D,X,G){var j=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,D){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=G+H,D={id:y++,callback:X,priorityLevel:D,startTime:G,expirationTime:H,sortIndex:-1},G>j?(D.sortIndex=G,n(w,D),o(_)===null&&D===o(w)&&(M?(R(De),De=-1):M=!0,ze($,G-j))):(D.sortIndex=H,n(_,D),N||P||(N=!0,de(ie))),D},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(D){var X=b;return function(){var G=b;b=X;try{return D.apply(this,arguments)}finally{b=G}}}})(id)),id}var pp;function Vg(){return pp||(pp=1,sd.exports=Yg()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Xg(){if(_p)return ar;_p=1;var t=qd(),n=Vg();function o(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,a={};function u(e,r){f(e,r),f(e+"Capture",r)}function f(e,r){for(a[e]=r,e=0;e<r.length;e++)l.add(r[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function b(e){return _.call(x,e)?!0:_.call(y,e)?!1:w.test(e)?x[e]=!0:(y[e]=!0,!1)}function P(e,r,i,c){if(i!==null&&i.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,r,i,c){if(r===null||typeof r>"u"||P(e,r,i,c))return!0;if(c)return!1;if(i!==null)switch(i.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(e,r,i,c,d,h,g){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=e,this.type=r,this.sanitizeURL=h,this.removeEmptyString=g}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];I[r]=new M(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(R,Y);I[r]=new M(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(R,Y);I[r]=new M(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(R,Y);I[r]=new M(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function Q(e,r,i,c){var d=I.hasOwnProperty(r)?I[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(N(r,i,d,c)&&(i=null),c||d===null?b(r)&&(i===null?e.removeAttribute(r):e.setAttribute(r,""+i)):d.mustUseProperty?e[d.propertyName]=i===null?d.type===3?!1:"":i:(r=d.attributeName,c=d.attributeNamespace,i===null?e.removeAttribute(r):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,c?e.setAttributeNS(c,r,i):e.setAttribute(r,i))))}var $=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),re=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),De=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),Te=Symbol.for("react.context"),tt=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),D=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,j;function H(e){if(j===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);j=r&&r[1]||""}return`
`+j+e}var ge=!1;function Se(e,r){if(!e||ge)return"";ge=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(V){var c=V}Reflect.construct(e,[],r)}else{try{r.call()}catch(V){c=V}e.call(r.prototype)}else{try{throw Error()}catch(V){c=V}e()}}catch(V){if(V&&c&&typeof V.stack=="string"){for(var d=V.stack.split(`
`),h=c.stack.split(`
`),g=d.length-1,C=h.length-1;1<=g&&0<=C&&d[g]!==h[C];)C--;for(;1<=g&&0<=C;g--,C--)if(d[g]!==h[C]){if(g!==1||C!==1)do if(g--,C--,0>C||d[g]!==h[C]){var L=`
`+d[g].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=g&&0<=C);break}}}finally{ge=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?H(e):""}function Fe(e){switch(e.tag){case 5:return H(e.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return e=Se(e.type,!1),e;case 11:return e=Se(e.type.render,!1),e;case 1:return e=Se(e.type,!0),e;default:return""}}function q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case re:return"Portal";case rt:return"Profiler";case De:return"StrictMode";case Ge:return"Suspense";case ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case tt:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case me:return r=e.displayName||null,r!==null?r:q(e.type)||"Memo";case de:r=e._payload,e=e._init;try{return q(e(r))}catch{}}return null}function ve(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(r);case 8:return r===De?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ut(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Bt(e){var r=ut(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),c=""+e[r];if(!e.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,h=i.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return d.call(this)},set:function(g){c=""+g,h.call(this,g)}}),Object.defineProperty(e,r,{enumerable:i.enumerable}),{getValue:function(){return c},setValue:function(g){c=""+g},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Dt(e){e._valueTracker||(e._valueTracker=Bt(e))}function _t(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var i=r.getValue(),c="";return e&&(c=ut(e)?e.checked?"true":"false":e.value),e=c,e!==i?(r.setValue(e),!0):!1}function Ht(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tt(e,r){var i=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function an(e,r){var i=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;i=Pe(r.value!=null?r.value:i),e._wrapperState={initialChecked:c,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Xe(e,r){r=r.checked,r!=null&&Q(e,"checked",r,!1)}function Xt(e,r){Xe(e,r);var i=Pe(r.value),c=r.type;if(i!=null)c==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(c==="submit"||c==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Re(e,r.type,i):r.hasOwnProperty("defaultValue")&&Re(e,r.type,Pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function J(e,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,i||r===e.value||(e.value=r),e.defaultValue=r}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Re(e,r,i){(r!=="number"||Ht(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var ot=Array.isArray;function Ve(e,r,i,c){if(e=e.options,r){r={};for(var d=0;d<i.length;d++)r["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=r.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&c&&(e[i].defaultSelected=!0)}else{for(i=""+Pe(i),r=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,c&&(e[d].defaultSelected=!0);return}r!==null||e[d].disabled||(r=e[d])}r!==null&&(r.selected=!0)}}function dt(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mt(e,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(o(92));if(ot(i)){if(1<i.length)throw Error(o(93));i=i[0]}r=i}r==null&&(r=""),i=r}e._wrapperState={initialValue:Pe(i)}}function Ct(e,r){var i=Pe(r.value),c=Pe(r.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),r.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),c!=null&&(e.defaultValue=""+c)}function ft(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Nt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ft(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Nt(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var We,z=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,i,c,d){MSApp.execUnsafeLocalFunction(function(){return e(r,i,c,d)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(We=We||document.createElement("div"),We.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=We.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function W(e,r){if(r){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=r;return}}e.textContent=r}var ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},se=["Webkit","ms","Moz","O"];Object.keys(ee).forEach(function(e){se.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),ee[r]=ee[e]})});function Be(e,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||ee.hasOwnProperty(e)&&ee[e]?(""+r).trim():r+"px"}function Me(e,r){e=e.style;for(var i in r)if(r.hasOwnProperty(i)){var c=i.indexOf("--")===0,d=Be(i,r[i],c);i==="float"&&(i="cssFloat"),c?e.setProperty(i,d):e[i]=d}}var pe=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(e,r){if(r){if(pe[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function ct(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function Je(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ce=null,gt=null,kt=null;function cn(e){if(e=nl(e)){if(typeof Ce!="function")throw Error(o(280));var r=e.stateNode;r&&(r=la(r),Ce(e.stateNode,e.type,r))}}function je(e){gt?kt?kt.push(e):kt=[e]:gt=e}function jt(){if(gt){var e=gt,r=kt;if(kt=gt=null,cn(e),r)for(e=0;e<r.length;e++)cn(r[e])}}function yt(e,r){return e(r)}function ht(){}var nn=!1;function qe(e,r,i){if(nn)return e(r,i);nn=!0;try{return yt(e,r,i)}finally{nn=!1,(gt!==null||kt!==null)&&(ht(),jt())}}function St(e,r){var i=e.stateNode;if(i===null)return null;var c=la(i);if(c===null)return null;i=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,r,typeof i));return i}var un=!1;if(p)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){un=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{un=!1}function Tn(e,r,i,c,d,h,g,C,L){var V=Array.prototype.slice.call(arguments,3);try{r.apply(i,V)}catch(ue){this.onError(ue)}}var yr=!1,er=null,Nn=!1,qt=null,ur={onError:function(e){yr=!0,er=e}};function tr(e,r,i,c,d,h,g,C,L){yr=!1,er=null,Tn.apply(ur,arguments)}function jo(e,r,i,c,d,h,g,C,L){if(tr.apply(this,arguments),yr){if(yr){var V=er;yr=!1,er=null}else throw Error(o(198));Nn||(Nn=!0,qt=V)}}function we(e){var r=e,i=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(i=r.return),e=r.return;while(e)}return r.tag===3?i:null}function qn(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Ws(e){if(we(e)!==e)throw Error(o(188))}function Li(e){var r=e.alternate;if(!r){if(r=we(e),r===null)throw Error(o(188));return r!==e?null:e}for(var i=e,c=r;;){var d=i.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){i=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===i)return Ws(d),e;if(h===c)return Ws(d),r;h=h.sibling}throw Error(o(188))}if(i.return!==c.return)i=d,c=h;else{for(var g=!1,C=d.child;C;){if(C===i){g=!0,i=d,c=h;break}if(C===c){g=!0,c=d,i=h;break}C=C.sibling}if(!g){for(C=h.child;C;){if(C===i){g=!0,i=h,c=d;break}if(C===c){g=!0,c=h,i=d;break}C=C.sibling}if(!g)throw Error(o(189))}}if(i.alternate!==c)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:r}function Wr(e){return e=Li(e),e!==null?Fl(e):null}function Fl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Fl(e);if(r!==null)return r;e=e.sibling}return null}var Pi=n.unstable_scheduleCallback,Wl=n.unstable_cancelCallback,Lc=n.unstable_shouldYield,Pc=n.unstable_requestPaint,Gt=n.unstable_now,Oc=n.unstable_getCurrentPriorityLevel,Us=n.unstable_ImmediatePriority,Eo=n.unstable_UserBlockingPriority,so=n.unstable_NormalPriority,dr=n.unstable_LowPriority,ss=n.unstable_IdlePriority,is=null,zn=null;function ls(e){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(is,e,void 0,(e.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:nr,fr=Math.log,Oi=Math.LN2;function nr(e){return e>>>=0,e===0?32:31-(fr(e)/Oi|0)|0}var Hs=64,Ys=4194304;function Ro(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,r){var i=e.pendingLanes;if(i===0)return 0;var c=0,d=e.suspendedLanes,h=e.pingedLanes,g=i&268435455;if(g!==0){var C=g&~d;C!==0?c=Ro(C):(h&=g,h!==0&&(c=Ro(h)))}else g=i&~d,g!==0?c=Ro(g):h!==0&&(c=Ro(h));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,h=r&-r,d>=h||d===16&&(h&4194240)!==0))return r;if((c&4)!==0&&(c|=i&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=c;0<r;)i=31-An(r),d=1<<i,c|=e[i],r&=~d;return c}function $i(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(e,r){for(var i=e.suspendedLanes,c=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes;0<h;){var g=31-An(h),C=1<<g,L=d[g];L===-1?((C&i)===0||(C&c)!==0)&&(d[g]=$i(C,r)):L<=r&&(e.expiredLanes|=C),h&=~C}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function io(){var e=Hs;return Hs<<=1,(Hs&4194240)===0&&(Hs=64),e}function rn(e){for(var r=[],i=0;31>i;i++)r.push(e);return r}function xr(e,r,i){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-An(r),e[r]=i}function vr(e,r){var i=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var c=e.eventTimes;for(e=e.expirationTimes;0<i;){var d=31-An(i),h=1<<d;r[d]=0,c[d]=-1,e[d]=-1,i&=~h}}function bn(e,r){var i=e.entangledLanes|=r;for(e=e.entanglements;i;){var c=31-An(i),d=1<<c;d&r|e[c]&r&&(e[c]|=r),i&=~d}}var At=0;function Hl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yl,wt,Vl,hr,Bi,Xs=!1,as=[],Ur=null,Hr=null,Fn=null,Jt=new Map,lo=new Map,Ir=[],pr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yr(e,r){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Jt.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(r.pointerId)}}function Lt(e,r,i,c,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:r,domEventName:i,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},r!==null&&(r=nl(r),r!==null&&wt(r)),e):(e.eventSystemFlags|=c,r=e.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),e)}function Di(e,r,i,c,d){switch(r){case"focusin":return Ur=Lt(Ur,e,r,i,c,d),!0;case"dragenter":return Hr=Lt(Hr,e,r,i,c,d),!0;case"mouseover":return Fn=Lt(Fn,e,r,i,c,d),!0;case"pointerover":var h=d.pointerId;return Jt.set(h,Lt(Jt.get(h)||null,e,r,i,c,d)),!0;case"gotpointercapture":return h=d.pointerId,lo.set(h,Lt(lo.get(h)||null,e,r,i,c,d)),!0}return!1}function Vr(e){var r=gs(e.target);if(r!==null){var i=we(r);if(i!==null){if(r=i.tag,r===13){if(r=qn(i),r!==null){e.blockedOn=r,Bi(e.priority,function(){Vl(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var i=Xr(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var c=new i.constructor(i.type,i);bt=c,i.target.dispatchEvent(c),bt=null}else return r=nl(i),r!==null&&wt(r),e.blockedOn=i,!1;r.shift()}return!0}function ao(e,r,i){cs(e)&&i.delete(r)}function Xl(){Xs=!1,Ur!==null&&cs(Ur)&&(Ur=null),Hr!==null&&cs(Hr)&&(Hr=null),Fn!==null&&cs(Fn)&&(Fn=null),Jt.forEach(ao),lo.forEach(ao)}function co(e,r){e.blockedOn===r&&(e.blockedOn=null,Xs||(Xs=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Xl)))}function To(e){function r(d){return co(d,e)}if(0<as.length){co(as[0],e);for(var i=1;i<as.length;i++){var c=as[i];c.blockedOn===e&&(c.blockedOn=null)}}for(Ur!==null&&co(Ur,e),Hr!==null&&co(Hr,e),Fn!==null&&co(Fn,e),Jt.forEach(r),lo.forEach(r),i=0;i<Ir.length;i++)c=Ir[i],c.blockedOn===e&&(c.blockedOn=null);for(;0<Ir.length&&(i=Ir[0],i.blockedOn===null);)Vr(i),i.blockedOn===null&&Ir.shift()}var wr=$.ReactCurrentBatchConfig,us=!0;function qs(e,r,i,c){var d=At,h=wr.transition;wr.transition=null;try{At=1,No(e,r,i,c)}finally{At=d,wr.transition=h}}function ds(e,r,i,c){var d=At,h=wr.transition;wr.transition=null;try{At=4,No(e,r,i,c)}finally{At=d,wr.transition=h}}function No(e,r,i,c){if(us){var d=Xr(e,r,i,c);if(d===null)Vc(e,r,c,Qs,i),Yr(e,c);else if(Di(d,e,r,i,c))c.stopPropagation();else if(Yr(e,c),r&4&&-1<pr.indexOf(e)){for(;d!==null;){var h=nl(d);if(h!==null&&Yl(h),h=Xr(e,r,i,c),h===null&&Vc(e,r,c,Qs,i),h===d)break;d=h}d!==null&&c.stopPropagation()}else Vc(e,r,c,null,i)}}var Qs=null;function Xr(e,r,i,c){if(Qs=null,e=Je(c),e=gs(e),e!==null)if(r=we(e),r===null)e=null;else if(i=r.tag,i===13){if(e=qn(r),e!==null)return e;e=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Qs=e,null}function br(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oc()){case Us:return 1;case Eo:return 4;case so:case dr:return 16;case ss:return 536870912;default:return 16}default:return 16}}var Lr=null,qr=null,Qn=null;function Mo(){if(Qn)return Qn;var e,r=qr,i=r.length,c,d="value"in Lr?Lr.value:Lr.textContent,h=d.length;for(e=0;e<i&&r[e]===d[e];e++);var g=i-e;for(c=1;c<=g&&r[i-c]===d[h-c];c++);return Qn=d.slice(e,1<c?1-c:void 0)}function Qr(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function zi(){return!1}function Mn(e){function r(i,c,d,h,g){this._reactName=i,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(i=e[C],this[C]=i?i(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?uo:zi,this.isPropagationStopped=zi,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),r}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=Mn(fo),hs=G({},fo,{view:0,detail:0}),ql=Mn(hs),Ks,ho,Qe,Io=G({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qe&&(Qe&&e.type==="mousemove"?(Ks=e.screenX-Qe.screenX,ho=e.screenY-Qe.screenY):ho=Ks=0,Qe=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:ho}}),Fi=Mn(Io),Ac=G({},Io,{dataTransfer:0}),Wi=Mn(Ac),Lo=G({},hs,{relatedTarget:0}),Po=Mn(Lo),Ql=G({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),Kl=Mn(Ql),Gs=G({},fo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ui=Mn(Gs),Gl=G({},fo,{data:0}),ps=Mn(Gl),kr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$c={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yi(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Hi[e])?!!r[e]:!1}function Oo(){return Yi}var Bc=G({},hs,{key:function(e){if(e.key){var r=kr[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$c[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oo,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dc=Mn(Bc),po=G({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=Mn(po),Vi=G({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oo}),zc=Mn(Vi),_s=G({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ao=Mn(_s),Fc=G({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jl=Mn(Fc),Zl=[9,13,27,32],Zs=p&&"CompositionEvent"in window,$o=null;p&&"documentMode"in document&&($o=document.documentMode);var ea=p&&"TextEvent"in window&&!$o,Xi=p&&(!Zs||$o&&8<$o&&11>=$o),qi=" ",Qi=!1;function v(e,r){switch(e){case"keyup":return Zl.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var T=!1;function E(e,r){switch(e){case"compositionend":return S(r);case"keypress":return r.which!==32?null:(Qi=!0,qi);case"textInput":return e=r.data,e===qi&&Qi?null:e;default:return null}}function B(e,r){if(T)return e==="compositionend"||!Zs&&v(e,r)?(e=Mo(),Qn=qr=Lr=null,T=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Xi&&r.locale!=="ko"?null:r.data;default:return null}}var K={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function he(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!K[e.type]:r==="textarea"}function ye(e,r,i,c){je(c),r=oa(r,"onChange"),0<r.length&&(i=new fs("onChange","change",null,i,c),e.push({event:i,listeners:r}))}var xe=null,Ie=null;function Ye(e){Cf(e,0)}function Ze(e){var r=ri(e);if(_t(r))return e}function vt(e,r){if(e==="change")return r}var Ke=!1;if(p){var ke;if(p){var Zt="oninput"in document;if(!Zt){var Wt=document.createElement("div");Wt.setAttribute("oninput","return;"),Zt=typeof Wt.oninput=="function"}ke=Zt}else ke=!1;Ke=ke&&(!document.documentMode||9<document.documentMode)}function dn(){xe&&(xe.detachEvent("onpropertychange",Mt),Ie=xe=null)}function Mt(e){if(e.propertyName==="value"&&Ze(Ie)){var r=[];ye(r,Ie,e,Je(e)),qe(Ye,r)}}function fn(e,r,i){e==="focusin"?(dn(),xe=r,Ie=i,xe.attachEvent("onpropertychange",Mt)):e==="focusout"&&dn()}function lt(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ze(Ie)}function pt(e,r){if(e==="click")return Ze(r)}function xn(e,r){if(e==="input"||e==="change")return Ze(r)}function Qt(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Yt=typeof Object.is=="function"?Object.is:Qt;function jn(e,r){if(Yt(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var i=Object.keys(e),c=Object.keys(r);if(i.length!==c.length)return!1;for(c=0;c<i.length;c++){var d=i[c];if(!_.call(r,d)||!Yt(e[d],r[d]))return!1}return!0}function _n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bo(e,r){var i=_n(e);e=0;for(var c;i;){if(i.nodeType===3){if(c=e+i.textContent.length,e<=r&&c>=r)return{node:i,offset:r-e};e=c}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=_n(i)}}function Kr(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Kr(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Pr(){for(var e=window,r=Ht();r instanceof e.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)e=r.contentWindow;else break;r=Ht(e.document)}return r}function on(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Gr(e){var r=Pr(),i=e.focusedElem,c=e.selectionRange;if(r!==i&&i&&i.ownerDocument&&Kr(i.ownerDocument.documentElement,i)){if(c!==null&&on(i)){if(r=c.start,e=c.end,e===void 0&&(e=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(e,i.value.length);else if(e=(r=i.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var d=i.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!e.extend&&h>c&&(d=c,c=h,h=d),d=Bo(i,h);var g=Bo(i,c);d&&g&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),e.removeAllRanges(),h>c?(e.addRange(r),e.extend(g.node,g.offset)):(r.setEnd(g.node,g.offset),e.addRange(r)))}}for(r=[],e=i;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)e=r[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _o=p&&"documentMode"in document&&11>=document.documentMode,Do=null,Ki=null,ms=null,Gi=!1;function mf(e,r,i){var c=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Gi||Do==null||Do!==Ht(c)||(c=Do,"selectionStart"in c&&on(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ms&&jn(ms,c)||(ms=c,c=oa(Ki,"onSelect"),0<c.length&&(r=new fs("onSelect","select",null,r,i),e.push({event:r,listeners:c}),r.target=Do)))}function ta(e,r){var i={};return i[e.toLowerCase()]=r.toLowerCase(),i["Webkit"+e]="webkit"+r,i["Moz"+e]="moz"+r,i}var ei={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Wc={},gf={};p&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function na(e){if(Wc[e])return Wc[e];if(!ei[e])return e;var r=ei[e],i;for(i in r)if(r.hasOwnProperty(i)&&i in gf)return Wc[e]=r[i];return e}var yf=na("animationend"),xf=na("animationiteration"),vf=na("animationstart"),wf=na("transitionend"),bf=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zo(e,r){bf.set(e,r),u(r,[e])}for(var Uc=0;Uc<kf.length;Uc++){var Hc=kf[Uc],Xm=Hc.toLowerCase(),qm=Hc[0].toUpperCase()+Hc.slice(1);zo(Xm,"on"+qm)}zo(yf,"onAnimationEnd"),zo(xf,"onAnimationIteration"),zo(vf,"onAnimationStart"),zo("dblclick","onDoubleClick"),zo("focusin","onFocus"),zo("focusout","onBlur"),zo(wf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function Sf(e,r,i){var c=e.type||"unknown-event";e.currentTarget=i,jo(c,r,void 0,e),e.currentTarget=null}function Cf(e,r){r=(r&4)!==0;for(var i=0;i<e.length;i++){var c=e[i],d=c.event;c=c.listeners;e:{var h=void 0;if(r)for(var g=c.length-1;0<=g;g--){var C=c[g],L=C.instance,V=C.currentTarget;if(C=C.listener,L!==h&&d.isPropagationStopped())break e;Sf(d,C,V),h=L}else for(g=0;g<c.length;g++){if(C=c[g],L=C.instance,V=C.currentTarget,C=C.listener,L!==h&&d.isPropagationStopped())break e;Sf(d,C,V),h=L}}}if(Nn)throw e=qt,Nn=!1,qt=null,e}function en(e,r){var i=r[Jc];i===void 0&&(i=r[Jc]=new Set);var c=e+"__bubble";i.has(c)||(jf(r,e,2,!1),i.add(c))}function Yc(e,r,i){var c=0;r&&(c|=4),jf(i,e,c,r)}var ra="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[ra]){e[ra]=!0,l.forEach(function(i){i!=="selectionchange"&&(Qm.has(i)||Yc(i,!1,e),Yc(i,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[ra]||(r[ra]=!0,Yc("selectionchange",!1,r))}}function jf(e,r,i,c){switch(br(r)){case 1:var d=qs;break;case 4:d=ds;break;default:d=No}i=d.bind(null,r,i,e),d=void 0,!un||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?e.addEventListener(r,i,{capture:!0,passive:d}):e.addEventListener(r,i,!0):d!==void 0?e.addEventListener(r,i,{passive:d}):e.addEventListener(r,i,!1)}function Vc(e,r,i,c,d){var h=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var g=c.tag;if(g===3||g===4){var C=c.stateNode.containerInfo;if(C===d||C.nodeType===8&&C.parentNode===d)break;if(g===4)for(g=c.return;g!==null;){var L=g.tag;if((L===3||L===4)&&(L=g.stateNode.containerInfo,L===d||L.nodeType===8&&L.parentNode===d))return;g=g.return}for(;C!==null;){if(g=gs(C),g===null)return;if(L=g.tag,L===5||L===6){c=h=g;continue e}C=C.parentNode}}c=c.return}qe(function(){var V=h,ue=Je(i),fe=[];e:{var ae=bf.get(e);if(ae!==void 0){var Ee=fs,$e=e;switch(e){case"keypress":if(Qr(i)===0)break e;case"keydown":case"keyup":Ee=Dc;break;case"focusin":$e="focus",Ee=Po;break;case"focusout":$e="blur",Ee=Po;break;case"beforeblur":case"afterblur":Ee=Po;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ee=Fi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ee=Wi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ee=zc;break;case yf:case xf:case vf:Ee=Kl;break;case wf:Ee=Ao;break;case"scroll":Ee=ql;break;case"wheel":Ee=Jl;break;case"copy":case"cut":case"paste":Ee=Ui;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ee=Js}var Ue=(r&4)!==0,vn=!Ue&&e==="scroll",F=Ue?ae!==null?ae+"Capture":null:ae;Ue=[];for(var A=V,U;A!==null;){U=A;var _e=U.stateNode;if(U.tag===5&&_e!==null&&(U=_e,F!==null&&(_e=St(A,F),_e!=null&&Ue.push(el(A,_e,U)))),vn)break;A=A.return}0<Ue.length&&(ae=new Ee(ae,$e,null,i,ue),fe.push({event:ae,listeners:Ue}))}}if((r&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",Ee=e==="mouseout"||e==="pointerout",ae&&i!==bt&&($e=i.relatedTarget||i.fromElement)&&(gs($e)||$e[mo]))break e;if((Ee||ae)&&(ae=ue.window===ue?ue:(ae=ue.ownerDocument)?ae.defaultView||ae.parentWindow:window,Ee?($e=i.relatedTarget||i.toElement,Ee=V,$e=$e?gs($e):null,$e!==null&&(vn=we($e),$e!==vn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Ee=null,$e=V),Ee!==$e)){if(Ue=Fi,_e="onMouseLeave",F="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(Ue=Js,_e="onPointerLeave",F="onPointerEnter",A="pointer"),vn=Ee==null?ae:ri(Ee),U=$e==null?ae:ri($e),ae=new Ue(_e,A+"leave",Ee,i,ue),ae.target=vn,ae.relatedTarget=U,_e=null,gs(ue)===V&&(Ue=new Ue(F,A+"enter",$e,i,ue),Ue.target=U,Ue.relatedTarget=vn,_e=Ue),vn=_e,Ee&&$e)t:{for(Ue=Ee,F=$e,A=0,U=Ue;U;U=ti(U))A++;for(U=0,_e=F;_e;_e=ti(_e))U++;for(;0<A-U;)Ue=ti(Ue),A--;for(;0<U-A;)F=ti(F),U--;for(;A--;){if(Ue===F||F!==null&&Ue===F.alternate)break t;Ue=ti(Ue),F=ti(F)}Ue=null}else Ue=null;Ee!==null&&Ef(fe,ae,Ee,Ue,!1),$e!==null&&vn!==null&&Ef(fe,vn,$e,Ue,!0)}}e:{if(ae=V?ri(V):window,Ee=ae.nodeName&&ae.nodeName.toLowerCase(),Ee==="select"||Ee==="input"&&ae.type==="file")var He=vt;else if(he(ae))if(Ke)He=xn;else{He=lt;var st=fn}else(Ee=ae.nodeName)&&Ee.toLowerCase()==="input"&&(ae.type==="checkbox"||ae.type==="radio")&&(He=pt);if(He&&(He=He(e,V))){ye(fe,He,i,ue);break e}st&&st(e,ae,V),e==="focusout"&&(st=ae._wrapperState)&&st.controlled&&ae.type==="number"&&Re(ae,"number",ae.value)}switch(st=V?ri(V):window,e){case"focusin":(he(st)||st.contentEditable==="true")&&(Do=st,Ki=V,ms=null);break;case"focusout":ms=Ki=Do=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,mf(fe,i,ue);break;case"selectionchange":if(_o)break;case"keydown":case"keyup":mf(fe,i,ue)}var it;if(Zs)e:{switch(e){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else T?v(e,i)&&(at="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(at="onCompositionStart");at&&(Xi&&i.locale!=="ko"&&(T||at!=="onCompositionStart"?at==="onCompositionEnd"&&T&&(it=Mo()):(Lr=ue,qr="value"in Lr?Lr.value:Lr.textContent,T=!0)),st=oa(V,at),0<st.length&&(at=new ps(at,e,null,i,ue),fe.push({event:at,listeners:st}),it?at.data=it:(it=S(i),it!==null&&(at.data=it)))),(it=ea?E(e,i):B(e,i))&&(V=oa(V,"onBeforeInput"),0<V.length&&(ue=new ps("onBeforeInput","beforeinput",null,i,ue),fe.push({event:ue,listeners:V}),ue.data=it))}Cf(fe,r)})}function el(e,r,i){return{instance:e,listener:r,currentTarget:i}}function oa(e,r){for(var i=r+"Capture",c=[];e!==null;){var d=e,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=St(e,i),h!=null&&c.unshift(el(e,h,d)),h=St(e,r),h!=null&&c.push(el(e,h,d))),e=e.return}return c}function ti(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ef(e,r,i,c,d){for(var h=r._reactName,g=[];i!==null&&i!==c;){var C=i,L=C.alternate,V=C.stateNode;if(L!==null&&L===c)break;C.tag===5&&V!==null&&(C=V,d?(L=St(i,h),L!=null&&g.unshift(el(i,L,C))):d||(L=St(i,h),L!=null&&g.push(el(i,L,C)))),i=i.return}g.length!==0&&e.push({event:r,listeners:g})}var Km=/\r\n?/g,Gm=/\u0000|\uFFFD/g;function Rf(e){return(typeof e=="string"?e:""+e).replace(Km,`
`).replace(Gm,"")}function sa(e,r,i){if(r=Rf(r),Rf(e)!==r&&i)throw Error(o(425))}function ia(){}var Xc=null,qc=null;function Qc(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,Zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(eg)}:Kc;function eg(e){setTimeout(function(){throw e})}function Gc(e,r){var i=r,c=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(c===0){e.removeChild(d),To(r);return}c--}else i!=="$"&&i!=="$?"&&i!=="$!"||c++;i=d}while(i);To(r)}function Fo(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Nf(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return e;r--}else i==="/$"&&r++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),Jr="__reactFiber$"+ni,tl="__reactProps$"+ni,mo="__reactContainer$"+ni,Jc="__reactEvents$"+ni,tg="__reactListeners$"+ni,ng="__reactHandles$"+ni;function gs(e){var r=e[Jr];if(r)return r;for(var i=e.parentNode;i;){if(r=i[mo]||i[Jr]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(e=Nf(e);e!==null;){if(i=e[Jr])return i;e=Nf(e)}return r}e=i,i=e.parentNode}return null}function nl(e){return e=e[Jr]||e[mo],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ri(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function la(e){return e[tl]||null}var Zc=[],oi=-1;function Wo(e){return{current:e}}function tn(e){0>oi||(e.current=Zc[oi],Zc[oi]=null,oi--)}function Kt(e,r){oi++,Zc[oi]=e.current,e.current=r}var Uo={},Wn=Wo(Uo),rr=Wo(!1),ys=Uo;function si(e,r){var i=e.type.contextTypes;if(!i)return Uo;var c=e.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in i)d[h]=r[h];return c&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=d),d}function or(e){return e=e.childContextTypes,e!=null}function aa(){tn(rr),tn(Wn)}function Mf(e,r,i){if(Wn.current!==Uo)throw Error(o(168));Kt(Wn,r),Kt(rr,i)}function If(e,r,i){var c=e.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return i;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(o(108,ve(e)||"Unknown",d));return G({},i,c)}function ca(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Uo,ys=Wn.current,Kt(Wn,e),Kt(rr,rr.current),!0}function Lf(e,r,i){var c=e.stateNode;if(!c)throw Error(o(169));i?(e=If(e,r,ys),c.__reactInternalMemoizedMergedChildContext=e,tn(rr),tn(Wn),Kt(Wn,e)):tn(rr),Kt(rr,i)}var go=null,ua=!1,eu=!1;function Pf(e){go===null?go=[e]:go.push(e)}function rg(e){ua=!0,Pf(e)}function Ho(){if(!eu&&go!==null){eu=!0;var e=0,r=At;try{var i=go;for(At=1;e<i.length;e++){var c=i[e];do c=c(!0);while(c!==null)}go=null,ua=!1}catch(d){throw go!==null&&(go=go.slice(e+1)),Pi(Us,Ho),d}finally{At=r,eu=!1}}return null}var ii=[],li=0,da=null,fa=0,Sr=[],Cr=0,xs=null,yo=1,xo="";function vs(e,r){ii[li++]=fa,ii[li++]=da,da=e,fa=r}function Of(e,r,i){Sr[Cr++]=yo,Sr[Cr++]=xo,Sr[Cr++]=xs,xs=e;var c=yo;e=xo;var d=32-An(c)-1;c&=~(1<<d),i+=1;var h=32-An(r)+d;if(30<h){var g=d-d%5;h=(c&(1<<g)-1).toString(32),c>>=g,d-=g,yo=1<<32-An(r)+d|i<<d|c,xo=h+e}else yo=1<<h|i<<d|c,xo=e}function tu(e){e.return!==null&&(vs(e,1),Of(e,1,0))}function nu(e){for(;e===da;)da=ii[--li],ii[li]=null,fa=ii[--li],ii[li]=null;for(;e===xs;)xs=Sr[--Cr],Sr[Cr]=null,xo=Sr[--Cr],Sr[Cr]=null,yo=Sr[--Cr],Sr[Cr]=null}var _r=null,mr=null,sn=!1,Or=null;function Af(e,r){var i=Tr(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=e,r=e.deletions,r===null?(e.deletions=[i],e.flags|=16):r.push(i)}function $f(e,r){switch(e.tag){case 5:var i=e.type;return r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,_r=e,mr=Fo(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,_r=e,mr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(i=xs!==null?{id:yo,overflow:xo}:null,e.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},i=Tr(18,null,null,0),i.stateNode=r,i.return=e,e.child=i,_r=e,mr=null,!0):!1;default:return!1}}function ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ou(e){if(sn){var r=mr;if(r){var i=r;if(!$f(e,r)){if(ru(e))throw Error(o(418));r=Fo(i.nextSibling);var c=_r;r&&$f(e,r)?Af(c,i):(e.flags=e.flags&-4097|2,sn=!1,_r=e)}}else{if(ru(e))throw Error(o(418));e.flags=e.flags&-4097|2,sn=!1,_r=e}}}function Bf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_r=e}function ha(e){if(e!==_r)return!1;if(!sn)return Bf(e),sn=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Qc(e.type,e.memoizedProps)),r&&(r=mr)){if(ru(e))throw Df(),Error(o(418));for(;r;)Af(e,r),r=Fo(r.nextSibling)}if(Bf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(r===0){mr=Fo(e.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}e=e.nextSibling}mr=null}}else mr=_r?Fo(e.stateNode.nextSibling):null;return!0}function Df(){for(var e=mr;e;)e=Fo(e.nextSibling)}function ai(){mr=_r=null,sn=!1}function su(e){Or===null?Or=[e]:Or.push(e)}var og=$.ReactCurrentBatchConfig;function rl(e,r,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var c=i.stateNode}if(!c)throw Error(o(147,e));var d=c,h=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(g){var C=d.refs;g===null?delete C[h]:C[h]=g},r._stringRef=h,r)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function pa(e,r){throw e=Object.prototype.toString.call(r),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function zf(e){var r=e._init;return r(e._payload)}function Ff(e){function r(F,A){if(e){var U=F.deletions;U===null?(F.deletions=[A],F.flags|=16):U.push(A)}}function i(F,A){if(!e)return null;for(;A!==null;)r(F,A),A=A.sibling;return null}function c(F,A){for(F=new Map;A!==null;)A.key!==null?F.set(A.key,A):F.set(A.index,A),A=A.sibling;return F}function d(F,A){return F=Jo(F,A),F.index=0,F.sibling=null,F}function h(F,A,U){return F.index=U,e?(U=F.alternate,U!==null?(U=U.index,U<A?(F.flags|=2,A):U):(F.flags|=2,A)):(F.flags|=1048576,A)}function g(F){return e&&F.alternate===null&&(F.flags|=2),F}function C(F,A,U,_e){return A===null||A.tag!==6?(A=Ku(U,F.mode,_e),A.return=F,A):(A=d(A,U),A.return=F,A)}function L(F,A,U,_e){var He=U.type;return He===ne?ue(F,A,U.props.children,_e,U.key):A!==null&&(A.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===de&&zf(He)===A.type)?(_e=d(A,U.props),_e.ref=rl(F,A,U),_e.return=F,_e):(_e=Ba(U.type,U.key,U.props,null,F.mode,_e),_e.ref=rl(F,A,U),_e.return=F,_e)}function V(F,A,U,_e){return A===null||A.tag!==4||A.stateNode.containerInfo!==U.containerInfo||A.stateNode.implementation!==U.implementation?(A=Gu(U,F.mode,_e),A.return=F,A):(A=d(A,U.children||[]),A.return=F,A)}function ue(F,A,U,_e,He){return A===null||A.tag!==7?(A=Rs(U,F.mode,_e,He),A.return=F,A):(A=d(A,U),A.return=F,A)}function fe(F,A,U){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Ku(""+A,F.mode,U),A.return=F,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ie:return U=Ba(A.type,A.key,A.props,null,F.mode,U),U.ref=rl(F,null,A),U.return=F,U;case re:return A=Gu(A,F.mode,U),A.return=F,A;case de:var _e=A._init;return fe(F,_e(A._payload),U)}if(ot(A)||X(A))return A=Rs(A,F.mode,U,null),A.return=F,A;pa(F,A)}return null}function ae(F,A,U,_e){var He=A!==null?A.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return He!==null?null:C(F,A,""+U,_e);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ie:return U.key===He?L(F,A,U,_e):null;case re:return U.key===He?V(F,A,U,_e):null;case de:return He=U._init,ae(F,A,He(U._payload),_e)}if(ot(U)||X(U))return He!==null?null:ue(F,A,U,_e,null);pa(F,U)}return null}function Ee(F,A,U,_e,He){if(typeof _e=="string"&&_e!==""||typeof _e=="number")return F=F.get(U)||null,C(A,F,""+_e,He);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case ie:return F=F.get(_e.key===null?U:_e.key)||null,L(A,F,_e,He);case re:return F=F.get(_e.key===null?U:_e.key)||null,V(A,F,_e,He);case de:var st=_e._init;return Ee(F,A,U,st(_e._payload),He)}if(ot(_e)||X(_e))return F=F.get(U)||null,ue(A,F,_e,He,null);pa(A,_e)}return null}function $e(F,A,U,_e){for(var He=null,st=null,it=A,at=A=0,Pn=null;it!==null&&at<U.length;at++){it.index>at?(Pn=it,it=null):Pn=it.sibling;var Ot=ae(F,it,U[at],_e);if(Ot===null){it===null&&(it=Pn);break}e&&it&&Ot.alternate===null&&r(F,it),A=h(Ot,A,at),st===null?He=Ot:st.sibling=Ot,st=Ot,it=Pn}if(at===U.length)return i(F,it),sn&&vs(F,at),He;if(it===null){for(;at<U.length;at++)it=fe(F,U[at],_e),it!==null&&(A=h(it,A,at),st===null?He=it:st.sibling=it,st=it);return sn&&vs(F,at),He}for(it=c(F,it);at<U.length;at++)Pn=Ee(it,F,at,U[at],_e),Pn!==null&&(e&&Pn.alternate!==null&&it.delete(Pn.key===null?at:Pn.key),A=h(Pn,A,at),st===null?He=Pn:st.sibling=Pn,st=Pn);return e&&it.forEach(function(Zo){return r(F,Zo)}),sn&&vs(F,at),He}function Ue(F,A,U,_e){var He=X(U);if(typeof He!="function")throw Error(o(150));if(U=He.call(U),U==null)throw Error(o(151));for(var st=He=null,it=A,at=A=0,Pn=null,Ot=U.next();it!==null&&!Ot.done;at++,Ot=U.next()){it.index>at?(Pn=it,it=null):Pn=it.sibling;var Zo=ae(F,it,Ot.value,_e);if(Zo===null){it===null&&(it=Pn);break}e&&it&&Zo.alternate===null&&r(F,it),A=h(Zo,A,at),st===null?He=Zo:st.sibling=Zo,st=Zo,it=Pn}if(Ot.done)return i(F,it),sn&&vs(F,at),He;if(it===null){for(;!Ot.done;at++,Ot=U.next())Ot=fe(F,Ot.value,_e),Ot!==null&&(A=h(Ot,A,at),st===null?He=Ot:st.sibling=Ot,st=Ot);return sn&&vs(F,at),He}for(it=c(F,it);!Ot.done;at++,Ot=U.next())Ot=Ee(it,F,at,Ot.value,_e),Ot!==null&&(e&&Ot.alternate!==null&&it.delete(Ot.key===null?at:Ot.key),A=h(Ot,A,at),st===null?He=Ot:st.sibling=Ot,st=Ot);return e&&it.forEach(function($g){return r(F,$g)}),sn&&vs(F,at),He}function vn(F,A,U,_e){if(typeof U=="object"&&U!==null&&U.type===ne&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case ie:e:{for(var He=U.key,st=A;st!==null;){if(st.key===He){if(He=U.type,He===ne){if(st.tag===7){i(F,st.sibling),A=d(st,U.props.children),A.return=F,F=A;break e}}else if(st.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===de&&zf(He)===st.type){i(F,st.sibling),A=d(st,U.props),A.ref=rl(F,st,U),A.return=F,F=A;break e}i(F,st);break}else r(F,st);st=st.sibling}U.type===ne?(A=Rs(U.props.children,F.mode,_e,U.key),A.return=F,F=A):(_e=Ba(U.type,U.key,U.props,null,F.mode,_e),_e.ref=rl(F,A,U),_e.return=F,F=_e)}return g(F);case re:e:{for(st=U.key;A!==null;){if(A.key===st)if(A.tag===4&&A.stateNode.containerInfo===U.containerInfo&&A.stateNode.implementation===U.implementation){i(F,A.sibling),A=d(A,U.children||[]),A.return=F,F=A;break e}else{i(F,A);break}else r(F,A);A=A.sibling}A=Gu(U,F.mode,_e),A.return=F,F=A}return g(F);case de:return st=U._init,vn(F,A,st(U._payload),_e)}if(ot(U))return $e(F,A,U,_e);if(X(U))return Ue(F,A,U,_e);pa(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,A!==null&&A.tag===6?(i(F,A.sibling),A=d(A,U),A.return=F,F=A):(i(F,A),A=Ku(U,F.mode,_e),A.return=F,F=A),g(F)):i(F,A)}return vn}var ci=Ff(!0),Wf=Ff(!1),_a=Wo(null),ma=null,ui=null,iu=null;function lu(){iu=ui=ma=null}function au(e){var r=_a.current;tn(_a),e._currentValue=r}function cu(e,r,i){for(;e!==null;){var c=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),e===i)break;e=e.return}}function di(e,r){ma=e,iu=ui=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(sr=!0),e.firstContext=null)}function jr(e){var r=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:r,next:null},ui===null){if(ma===null)throw Error(o(308));ui=e,ma.dependencies={lanes:0,firstContext:e}}else ui=ui.next=e;return r}var ws=null;function uu(e){ws===null?ws=[e]:ws.push(e)}function Uf(e,r,i,c){var d=r.interleaved;return d===null?(i.next=i,uu(r)):(i.next=d.next,d.next=i),r.interleaved=i,vo(e,c)}function vo(e,r){e.lanes|=r;var i=e.alternate;for(i!==null&&(i.lanes|=r),i=e,e=e.return;e!==null;)e.childLanes|=r,i=e.alternate,i!==null&&(i.childLanes|=r),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Yo=!1;function du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wo(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Vo(e,r,i){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vo(e,i)}return d=c.interleaved,d===null?(r.next=r,uu(c)):(r.next=d.next,d.next=r),c.interleaved=r,vo(e,i)}function ga(e,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194240)!==0)){var c=r.lanes;c&=e.pendingLanes,i|=c,r.lanes=i,bn(e,i)}}function Yf(e,r){var i=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,i===c)){var d=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var g={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?d=h=g:h=h.next=g,i=i.next}while(i!==null);h===null?d=h=r:h=h.next=r}else d=h=r;i={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=r:e.next=r,i.lastBaseUpdate=r}function ya(e,r,i,c){var d=e.updateQueue;Yo=!1;var h=d.firstBaseUpdate,g=d.lastBaseUpdate,C=d.shared.pending;if(C!==null){d.shared.pending=null;var L=C,V=L.next;L.next=null,g===null?h=V:g.next=V,g=L;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,C=ue.lastBaseUpdate,C!==g&&(C===null?ue.firstBaseUpdate=V:C.next=V,ue.lastBaseUpdate=L))}if(h!==null){var fe=d.baseState;g=0,ue=V=L=null,C=h;do{var ae=C.lane,Ee=C.eventTime;if((c&ae)===ae){ue!==null&&(ue=ue.next={eventTime:Ee,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var $e=e,Ue=C;switch(ae=r,Ee=i,Ue.tag){case 1:if($e=Ue.payload,typeof $e=="function"){fe=$e.call(Ee,fe,ae);break e}fe=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ue.payload,ae=typeof $e=="function"?$e.call(Ee,fe,ae):$e,ae==null)break e;fe=G({},fe,ae);break e;case 2:Yo=!0}}C.callback!==null&&C.lane!==0&&(e.flags|=64,ae=d.effects,ae===null?d.effects=[C]:ae.push(C))}else Ee={eventTime:Ee,lane:ae,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ue===null?(V=ue=Ee,L=fe):ue=ue.next=Ee,g|=ae;if(C=C.next,C===null){if(C=d.shared.pending,C===null)break;ae=C,C=ae.next,ae.next=null,d.lastBaseUpdate=ae,d.shared.pending=null}}while(!0);if(ue===null&&(L=fe),d.baseState=L,d.firstBaseUpdate=V,d.lastBaseUpdate=ue,r=d.shared.interleaved,r!==null){d=r;do g|=d.lane,d=d.next;while(d!==r)}else h===null&&(d.shared.lanes=0);Ss|=g,e.lanes=g,e.memoizedState=fe}}function Vf(e,r,i){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var c=e[r],d=c.callback;if(d!==null){if(c.callback=null,c=i,typeof d!="function")throw Error(o(191,d));d.call(c)}}}var ol={},Zr=Wo(ol),sl=Wo(ol),il=Wo(ol);function bs(e){if(e===ol)throw Error(o(174));return e}function fu(e,r){switch(Kt(il,r),Kt(sl,e),Kt(Zr,ol),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ft(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ft(r,e)}tn(Zr),Kt(Zr,r)}function fi(){tn(Zr),tn(sl),tn(il)}function Xf(e){bs(il.current);var r=bs(Zr.current),i=Ft(r,e.type);r!==i&&(Kt(sl,e),Kt(Zr,i))}function hu(e){sl.current===e&&(tn(Zr),tn(sl))}var hn=Wo(0);function xa(e){for(var r=e;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var pu=[];function _u(){for(var e=0;e<pu.length;e++)pu[e]._workInProgressVersionPrimary=null;pu.length=0}var va=$.ReactCurrentDispatcher,mu=$.ReactCurrentBatchConfig,ks=0,pn=null,En=null,In=null,wa=!1,ll=!1,al=0,sg=0;function Un(){throw Error(o(321))}function gu(e,r){if(r===null)return!1;for(var i=0;i<r.length&&i<e.length;i++)if(!Yt(e[i],r[i]))return!1;return!0}function yu(e,r,i,c,d,h){if(ks=h,pn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,va.current=e===null||e.memoizedState===null?cg:ug,e=i(c,d),ll){h=0;do{if(ll=!1,al=0,25<=h)throw Error(o(301));h+=1,In=En=null,r.updateQueue=null,va.current=dg,e=i(c,d)}while(ll)}if(va.current=Sa,r=En!==null&&En.next!==null,ks=0,In=En=pn=null,wa=!1,r)throw Error(o(300));return e}function xu(){var e=al!==0;return al=0,e}function eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?pn.memoizedState=In=e:In=In.next=e,In}function Er(){if(En===null){var e=pn.alternate;e=e!==null?e.memoizedState:null}else e=En.next;var r=In===null?pn.memoizedState:In.next;if(r!==null)In=r,En=e;else{if(e===null)throw Error(o(310));En=e,e={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},In===null?pn.memoizedState=In=e:In=In.next=e}return In}function cl(e,r){return typeof r=="function"?r(e):r}function vu(e){var r=Er(),i=r.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var c=En,d=c.baseQueue,h=i.pending;if(h!==null){if(d!==null){var g=d.next;d.next=h.next,h.next=g}c.baseQueue=d=h,i.pending=null}if(d!==null){h=d.next,c=c.baseState;var C=g=null,L=null,V=h;do{var ue=V.lane;if((ks&ue)===ue)L!==null&&(L=L.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),c=V.hasEagerState?V.eagerState:e(c,V.action);else{var fe={lane:ue,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};L===null?(C=L=fe,g=c):L=L.next=fe,pn.lanes|=ue,Ss|=ue}V=V.next}while(V!==null&&V!==h);L===null?g=c:L.next=C,Yt(c,r.memoizedState)||(sr=!0),r.memoizedState=c,r.baseState=g,r.baseQueue=L,i.lastRenderedState=c}if(e=i.interleaved,e!==null){d=e;do h=d.lane,pn.lanes|=h,Ss|=h,d=d.next;while(d!==e)}else d===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function wu(e){var r=Er(),i=r.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var c=i.dispatch,d=i.pending,h=r.memoizedState;if(d!==null){i.pending=null;var g=d=d.next;do h=e(h,g.action),g=g.next;while(g!==d);Yt(h,r.memoizedState)||(sr=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),i.lastRenderedState=h}return[h,c]}function qf(){}function Qf(e,r){var i=pn,c=Er(),d=r(),h=!Yt(c.memoizedState,d);if(h&&(c.memoizedState=d,sr=!0),c=c.queue,bu(Jf.bind(null,i,c,e),[e]),c.getSnapshot!==r||h||In!==null&&In.memoizedState.tag&1){if(i.flags|=2048,ul(9,Gf.bind(null,i,c,d,r),void 0,null),Ln===null)throw Error(o(349));(ks&30)!==0||Kf(i,r,d)}return d}function Kf(e,r,i){e.flags|=16384,e={getSnapshot:r,value:i},r=pn.updateQueue,r===null?(r={lastEffect:null,stores:null},pn.updateQueue=r,r.stores=[e]):(i=r.stores,i===null?r.stores=[e]:i.push(e))}function Gf(e,r,i,c){r.value=i,r.getSnapshot=c,Zf(r)&&eh(e)}function Jf(e,r,i){return i(function(){Zf(r)&&eh(e)})}function Zf(e){var r=e.getSnapshot;e=e.value;try{var i=r();return!Yt(e,i)}catch{return!0}}function eh(e){var r=vo(e,1);r!==null&&Dr(r,e,1,-1)}function th(e){var r=eo();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:e},r.queue=e,e=e.dispatch=ag.bind(null,pn,e),[r.memoizedState,e]}function ul(e,r,i,c){return e={tag:e,create:r,destroy:i,deps:c,next:null},r=pn.updateQueue,r===null?(r={lastEffect:null,stores:null},pn.updateQueue=r,r.lastEffect=e.next=e):(i=r.lastEffect,i===null?r.lastEffect=e.next=e:(c=i.next,i.next=e,e.next=c,r.lastEffect=e)),e}function nh(){return Er().memoizedState}function ba(e,r,i,c){var d=eo();pn.flags|=e,d.memoizedState=ul(1|r,i,void 0,c===void 0?null:c)}function ka(e,r,i,c){var d=Er();c=c===void 0?null:c;var h=void 0;if(En!==null){var g=En.memoizedState;if(h=g.destroy,c!==null&&gu(c,g.deps)){d.memoizedState=ul(r,i,h,c);return}}pn.flags|=e,d.memoizedState=ul(1|r,i,h,c)}function rh(e,r){return ba(8390656,8,e,r)}function bu(e,r){return ka(2048,8,e,r)}function oh(e,r){return ka(4,2,e,r)}function sh(e,r){return ka(4,4,e,r)}function ih(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function lh(e,r,i){return i=i!=null?i.concat([e]):null,ka(4,4,ih.bind(null,r,e),i)}function ku(){}function ah(e,r){var i=Er();r=r===void 0?null:r;var c=i.memoizedState;return c!==null&&r!==null&&gu(r,c[1])?c[0]:(i.memoizedState=[e,r],e)}function ch(e,r){var i=Er();r=r===void 0?null:r;var c=i.memoizedState;return c!==null&&r!==null&&gu(r,c[1])?c[0]:(e=e(),i.memoizedState=[e,r],e)}function uh(e,r,i){return(ks&21)===0?(e.baseState&&(e.baseState=!1,sr=!0),e.memoizedState=i):(Yt(i,r)||(i=io(),pn.lanes|=i,Ss|=i,e.baseState=!0),r)}function ig(e,r){var i=At;At=i!==0&&4>i?i:4,e(!0);var c=mu.transition;mu.transition={};try{e(!1),r()}finally{At=i,mu.transition=c}}function dh(){return Er().memoizedState}function lg(e,r,i){var c=Ko(e);if(i={lane:c,action:i,hasEagerState:!1,eagerState:null,next:null},fh(e))hh(r,i);else if(i=Uf(e,r,i,c),i!==null){var d=Gn();Dr(i,e,c,d),ph(i,r,c)}}function ag(e,r,i){var c=Ko(e),d={lane:c,action:i,hasEagerState:!1,eagerState:null,next:null};if(fh(e))hh(r,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var g=r.lastRenderedState,C=h(g,i);if(d.hasEagerState=!0,d.eagerState=C,Yt(C,g)){var L=r.interleaved;L===null?(d.next=d,uu(r)):(d.next=L.next,L.next=d),r.interleaved=d;return}}catch{}finally{}i=Uf(e,r,d,c),i!==null&&(d=Gn(),Dr(i,e,c,d),ph(i,r,c))}}function fh(e){var r=e.alternate;return e===pn||r!==null&&r===pn}function hh(e,r){ll=wa=!0;var i=e.pending;i===null?r.next=r:(r.next=i.next,i.next=r),e.pending=r}function ph(e,r,i){if((i&4194240)!==0){var c=r.lanes;c&=e.pendingLanes,i|=c,r.lanes=i,bn(e,i)}}var Sa={readContext:jr,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useInsertionEffect:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useSyncExternalStore:Un,useId:Un,unstable_isNewReconciler:!1},cg={readContext:jr,useCallback:function(e,r){return eo().memoizedState=[e,r===void 0?null:r],e},useContext:jr,useEffect:rh,useImperativeHandle:function(e,r,i){return i=i!=null?i.concat([e]):null,ba(4194308,4,ih.bind(null,r,e),i)},useLayoutEffect:function(e,r){return ba(4194308,4,e,r)},useInsertionEffect:function(e,r){return ba(4,2,e,r)},useMemo:function(e,r){var i=eo();return r=r===void 0?null:r,e=e(),i.memoizedState=[e,r],e},useReducer:function(e,r,i){var c=eo();return r=i!==void 0?i(r):r,c.memoizedState=c.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},c.queue=e,e=e.dispatch=lg.bind(null,pn,e),[c.memoizedState,e]},useRef:function(e){var r=eo();return e={current:e},r.memoizedState=e},useState:th,useDebugValue:ku,useDeferredValue:function(e){return eo().memoizedState=e},useTransition:function(){var e=th(!1),r=e[0];return e=ig.bind(null,e[1]),eo().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,i){var c=pn,d=eo();if(sn){if(i===void 0)throw Error(o(407));i=i()}else{if(i=r(),Ln===null)throw Error(o(349));(ks&30)!==0||Kf(c,r,i)}d.memoizedState=i;var h={value:i,getSnapshot:r};return d.queue=h,rh(Jf.bind(null,c,h,e),[e]),c.flags|=2048,ul(9,Gf.bind(null,c,h,i,r),void 0,null),i},useId:function(){var e=eo(),r=Ln.identifierPrefix;if(sn){var i=xo,c=yo;i=(c&~(1<<32-An(c)-1)).toString(32)+i,r=":"+r+"R"+i,i=al++,0<i&&(r+="H"+i.toString(32)),r+=":"}else i=sg++,r=":"+r+"r"+i.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},ug={readContext:jr,useCallback:ah,useContext:jr,useEffect:bu,useImperativeHandle:lh,useInsertionEffect:oh,useLayoutEffect:sh,useMemo:ch,useReducer:vu,useRef:nh,useState:function(){return vu(cl)},useDebugValue:ku,useDeferredValue:function(e){var r=Er();return uh(r,En.memoizedState,e)},useTransition:function(){var e=vu(cl)[0],r=Er().memoizedState;return[e,r]},useMutableSource:qf,useSyncExternalStore:Qf,useId:dh,unstable_isNewReconciler:!1},dg={readContext:jr,useCallback:ah,useContext:jr,useEffect:bu,useImperativeHandle:lh,useInsertionEffect:oh,useLayoutEffect:sh,useMemo:ch,useReducer:wu,useRef:nh,useState:function(){return wu(cl)},useDebugValue:ku,useDeferredValue:function(e){var r=Er();return En===null?r.memoizedState=e:uh(r,En.memoizedState,e)},useTransition:function(){var e=wu(cl)[0],r=Er().memoizedState;return[e,r]},useMutableSource:qf,useSyncExternalStore:Qf,useId:dh,unstable_isNewReconciler:!1};function Ar(e,r){if(e&&e.defaultProps){r=G({},r),e=e.defaultProps;for(var i in e)r[i]===void 0&&(r[i]=e[i]);return r}return r}function Su(e,r,i,c){r=e.memoizedState,i=i(c,r),i=i==null?r:G({},r,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ca={isMounted:function(e){return(e=e._reactInternals)?we(e)===e:!1},enqueueSetState:function(e,r,i){e=e._reactInternals;var c=Gn(),d=Ko(e),h=wo(c,d);h.payload=r,i!=null&&(h.callback=i),r=Vo(e,h,d),r!==null&&(Dr(r,e,d,c),ga(r,e,d))},enqueueReplaceState:function(e,r,i){e=e._reactInternals;var c=Gn(),d=Ko(e),h=wo(c,d);h.tag=1,h.payload=r,i!=null&&(h.callback=i),r=Vo(e,h,d),r!==null&&(Dr(r,e,d,c),ga(r,e,d))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var i=Gn(),c=Ko(e),d=wo(i,c);d.tag=2,r!=null&&(d.callback=r),r=Vo(e,d,c),r!==null&&(Dr(r,e,c,i),ga(r,e,c))}};function _h(e,r,i,c,d,h,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,h,g):r.prototype&&r.prototype.isPureReactComponent?!jn(i,c)||!jn(d,h):!0}function mh(e,r,i){var c=!1,d=Uo,h=r.contextType;return typeof h=="object"&&h!==null?h=jr(h):(d=or(r)?ys:Wn.current,c=r.contextTypes,h=(c=c!=null)?si(e,d):Uo),r=new r(i,h),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ca,e.stateNode=r,r._reactInternals=e,c&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=h),r}function gh(e,r,i,c){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,c),r.state!==e&&Ca.enqueueReplaceState(r,r.state,null)}function Cu(e,r,i,c){var d=e.stateNode;d.props=i,d.state=e.memoizedState,d.refs={},du(e);var h=r.contextType;typeof h=="object"&&h!==null?d.context=jr(h):(h=or(r)?ys:Wn.current,d.context=si(e,h)),d.state=e.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(Su(e,r,h,i),d.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ca.enqueueReplaceState(d,d.state,null),ya(e,i,d,c),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function hi(e,r){try{var i="",c=r;do i+=Fe(c),c=c.return;while(c);var d=i}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:r,stack:d,digest:null}}function ju(e,r,i){return{value:e,source:null,stack:i??null,digest:r??null}}function Eu(e,r){try{console.error(r.value)}catch(i){setTimeout(function(){throw i})}}var fg=typeof WeakMap=="function"?WeakMap:Map;function yh(e,r,i){i=wo(-1,i),i.tag=3,i.payload={element:null};var c=r.value;return i.callback=function(){Ia||(Ia=!0,Wu=c),Eu(e,r)},i}function xh(e,r,i){i=wo(-1,i),i.tag=3;var c=e.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;i.payload=function(){return c(d)},i.callback=function(){Eu(e,r)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){Eu(e,r),typeof c!="function"&&(qo===null?qo=new Set([this]):qo.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})}),i}function vh(e,r,i){var c=e.pingCache;if(c===null){c=e.pingCache=new fg;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(i)||(d.add(i),e=jg.bind(null,e,r,i),r.then(e,e))}function wh(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function bh(e,r,i,c,d){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(r=wo(-1,1),r.tag=2,Vo(i,r,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var hg=$.ReactCurrentOwner,sr=!1;function Kn(e,r,i,c){r.child=e===null?Wf(r,null,i,c):ci(r,e.child,i,c)}function kh(e,r,i,c,d){i=i.render;var h=r.ref;return di(r,d),c=yu(e,r,i,c,h,d),i=xu(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~d,bo(e,r,d)):(sn&&i&&tu(r),r.flags|=1,Kn(e,r,c,d),r.child)}function Sh(e,r,i,c,d){if(e===null){var h=i.type;return typeof h=="function"&&!Qu(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(r.tag=15,r.type=h,Ch(e,r,h,c,d)):(e=Ba(i.type,null,c,r,r.mode,d),e.ref=r.ref,e.return=r,r.child=e)}if(h=e.child,(e.lanes&d)===0){var g=h.memoizedProps;if(i=i.compare,i=i!==null?i:jn,i(g,c)&&e.ref===r.ref)return bo(e,r,d)}return r.flags|=1,e=Jo(h,c),e.ref=r.ref,e.return=r,r.child=e}function Ch(e,r,i,c,d){if(e!==null){var h=e.memoizedProps;if(jn(h,c)&&e.ref===r.ref)if(sr=!1,r.pendingProps=c=h,(e.lanes&d)!==0)(e.flags&131072)!==0&&(sr=!0);else return r.lanes=e.lanes,bo(e,r,d)}return Ru(e,r,i,c,d)}function jh(e,r,i){var c=r.pendingProps,d=c.children,h=e!==null?e.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(_i,gr),gr|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Kt(_i,gr),gr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:i,Kt(_i,gr),gr|=c}else h!==null?(c=h.baseLanes|i,r.memoizedState=null):c=i,Kt(_i,gr),gr|=c;return Kn(e,r,d,i),r.child}function Eh(e,r){var i=r.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(r.flags|=512,r.flags|=2097152)}function Ru(e,r,i,c,d){var h=or(i)?ys:Wn.current;return h=si(r,h),di(r,d),i=yu(e,r,i,c,h,d),c=xu(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~d,bo(e,r,d)):(sn&&c&&tu(r),r.flags|=1,Kn(e,r,i,d),r.child)}function Rh(e,r,i,c,d){if(or(i)){var h=!0;ca(r)}else h=!1;if(di(r,d),r.stateNode===null)Ea(e,r),mh(r,i,c),Cu(r,i,c,d),c=!0;else if(e===null){var g=r.stateNode,C=r.memoizedProps;g.props=C;var L=g.context,V=i.contextType;typeof V=="object"&&V!==null?V=jr(V):(V=or(i)?ys:Wn.current,V=si(r,V));var ue=i.getDerivedStateFromProps,fe=typeof ue=="function"||typeof g.getSnapshotBeforeUpdate=="function";fe||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(C!==c||L!==V)&&gh(r,g,c,V),Yo=!1;var ae=r.memoizedState;g.state=ae,ya(r,c,g,d),L=r.memoizedState,C!==c||ae!==L||rr.current||Yo?(typeof ue=="function"&&(Su(r,i,ue,c),L=r.memoizedState),(C=Yo||_h(r,i,C,c,ae,L,V))?(fe||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=L),g.props=c,g.state=L,g.context=V,c=C):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{g=r.stateNode,Hf(e,r),C=r.memoizedProps,V=r.type===r.elementType?C:Ar(r.type,C),g.props=V,fe=r.pendingProps,ae=g.context,L=i.contextType,typeof L=="object"&&L!==null?L=jr(L):(L=or(i)?ys:Wn.current,L=si(r,L));var Ee=i.getDerivedStateFromProps;(ue=typeof Ee=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(C!==fe||ae!==L)&&gh(r,g,c,L),Yo=!1,ae=r.memoizedState,g.state=ae,ya(r,c,g,d);var $e=r.memoizedState;C!==fe||ae!==$e||rr.current||Yo?(typeof Ee=="function"&&(Su(r,i,Ee,c),$e=r.memoizedState),(V=Yo||_h(r,i,V,c,ae,$e,L)||!1)?(ue||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,$e,L),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,$e,L)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||C===e.memoizedProps&&ae===e.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&ae===e.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=$e),g.props=c,g.state=$e,g.context=L,c=V):(typeof g.componentDidUpdate!="function"||C===e.memoizedProps&&ae===e.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&ae===e.memoizedState||(r.flags|=1024),c=!1)}return Tu(e,r,i,c,h,d)}function Tu(e,r,i,c,d,h){Eh(e,r);var g=(r.flags&128)!==0;if(!c&&!g)return d&&Lf(r,i,!1),bo(e,r,h);c=r.stateNode,hg.current=r;var C=g&&typeof i.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,e!==null&&g?(r.child=ci(r,e.child,null,h),r.child=ci(r,null,C,h)):Kn(e,r,C,h),r.memoizedState=c.state,d&&Lf(r,i,!0),r.child}function Th(e){var r=e.stateNode;r.pendingContext?Mf(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Mf(e,r.context,!1),fu(e,r.containerInfo)}function Nh(e,r,i,c,d){return ai(),su(d),r.flags|=256,Kn(e,r,i,c),r.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Mu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mh(e,r,i){var c=r.pendingProps,d=hn.current,h=!1,g=(r.flags&128)!==0,C;if((C=g)||(C=e!==null&&e.memoizedState===null?!1:(d&2)!==0),C?(h=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Kt(hn,d&1),e===null)return ou(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(g=c.children,e=c.fallback,h?(c=r.mode,h=r.child,g={mode:"hidden",children:g},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=Da(g,c,0,null),e=Rs(e,c,i,null),h.return=r,e.return=r,h.sibling=e,r.child=h,r.child.memoizedState=Mu(i),r.memoizedState=Nu,e):Iu(r,g));if(d=e.memoizedState,d!==null&&(C=d.dehydrated,C!==null))return pg(e,r,g,c,C,d,i);if(h){h=c.fallback,g=r.mode,d=e.child,C=d.sibling;var L={mode:"hidden",children:c.children};return(g&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=L,r.deletions=null):(c=Jo(d,L),c.subtreeFlags=d.subtreeFlags&14680064),C!==null?h=Jo(C,h):(h=Rs(h,g,i,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,g=e.child.memoizedState,g=g===null?Mu(i):{baseLanes:g.baseLanes|i,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=e.childLanes&~i,r.memoizedState=Nu,c}return h=e.child,e=h.sibling,c=Jo(h,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=i),c.return=r,c.sibling=null,e!==null&&(i=r.deletions,i===null?(r.deletions=[e],r.flags|=16):i.push(e)),r.child=c,r.memoizedState=null,c}function Iu(e,r){return r=Da({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ja(e,r,i,c){return c!==null&&su(c),ci(r,e.child,null,i),e=Iu(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function pg(e,r,i,c,d,h,g){if(i)return r.flags&256?(r.flags&=-257,c=ju(Error(o(422))),ja(e,r,g,c)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(h=c.fallback,d=r.mode,c=Da({mode:"visible",children:c.children},d,0,null),h=Rs(h,d,g,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,(r.mode&1)!==0&&ci(r,e.child,null,g),r.child.memoizedState=Mu(g),r.memoizedState=Nu,h);if((r.mode&1)===0)return ja(e,r,g,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var C=c.dgst;return c=C,h=Error(o(419)),c=ju(h,c,void 0),ja(e,r,g,c)}if(C=(g&e.childLanes)!==0,sr||C){if(c=Ln,c!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|g))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,vo(e,d),Dr(c,e,d,-1))}return qu(),c=ju(Error(o(421))),ja(e,r,g,c)}return d.data==="$?"?(r.flags|=128,r.child=e.child,r=Eg.bind(null,e),d._reactRetry=r,null):(e=h.treeContext,mr=Fo(d.nextSibling),_r=r,sn=!0,Or=null,e!==null&&(Sr[Cr++]=yo,Sr[Cr++]=xo,Sr[Cr++]=xs,yo=e.id,xo=e.overflow,xs=r),r=Iu(r,c.children),r.flags|=4096,r)}function Ih(e,r,i){e.lanes|=r;var c=e.alternate;c!==null&&(c.lanes|=r),cu(e.return,r,i)}function Lu(e,r,i,c,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:i,tailMode:d}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=i,h.tailMode=d)}function Lh(e,r,i){var c=r.pendingProps,d=c.revealOrder,h=c.tail;if(Kn(e,r,c.children,i),c=hn.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ih(e,i,r);else if(e.tag===19)Ih(e,i,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}c&=1}if(Kt(hn,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(i=r.child,d=null;i!==null;)e=i.alternate,e!==null&&xa(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=r.child,r.child=null):(d=i.sibling,i.sibling=null),Lu(r,!1,d,i,h);break;case"backwards":for(i=null,d=r.child,r.child=null;d!==null;){if(e=d.alternate,e!==null&&xa(e)===null){r.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}Lu(r,!0,i,null,h);break;case"together":Lu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ea(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function bo(e,r,i){if(e!==null&&(r.dependencies=e.dependencies),Ss|=r.lanes,(i&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(o(153));if(r.child!==null){for(e=r.child,i=Jo(e,e.pendingProps),r.child=i,i.return=r;e.sibling!==null;)e=e.sibling,i=i.sibling=Jo(e,e.pendingProps),i.return=r;i.sibling=null}return r.child}function _g(e,r,i){switch(r.tag){case 3:Th(r),ai();break;case 5:Xf(r);break;case 1:or(r.type)&&ca(r);break;case 4:fu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Kt(_a,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Kt(hn,hn.current&1),r.flags|=128,null):(i&r.child.childLanes)!==0?Mh(e,r,i):(Kt(hn,hn.current&1),e=bo(e,r,i),e!==null?e.sibling:null);Kt(hn,hn.current&1);break;case 19:if(c=(i&r.childLanes)!==0,(e.flags&128)!==0){if(c)return Lh(e,r,i);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Kt(hn,hn.current),c)break;return null;case 22:case 23:return r.lanes=0,jh(e,r,i)}return bo(e,r,i)}var Ph,Pu,Oh,Ah;Ph=function(e,r){for(var i=r.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Pu=function(){},Oh=function(e,r,i,c){var d=e.memoizedProps;if(d!==c){e=r.stateNode,bs(Zr.current);var h=null;switch(i){case"input":d=Tt(e,d),c=Tt(e,c),h=[];break;case"select":d=G({},d,{value:void 0}),c=G({},c,{value:void 0}),h=[];break;case"textarea":d=dt(e,d),c=dt(e,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(e.onclick=ia)}xt(i,c);var g;i=null;for(V in d)if(!c.hasOwnProperty(V)&&d.hasOwnProperty(V)&&d[V]!=null)if(V==="style"){var C=d[V];for(g in C)C.hasOwnProperty(g)&&(i||(i={}),i[g]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(a.hasOwnProperty(V)?h||(h=[]):(h=h||[]).push(V,null));for(V in c){var L=c[V];if(C=d!=null?d[V]:void 0,c.hasOwnProperty(V)&&L!==C&&(L!=null||C!=null))if(V==="style")if(C){for(g in C)!C.hasOwnProperty(g)||L&&L.hasOwnProperty(g)||(i||(i={}),i[g]="");for(g in L)L.hasOwnProperty(g)&&C[g]!==L[g]&&(i||(i={}),i[g]=L[g])}else i||(h||(h=[]),h.push(V,i)),i=L;else V==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,C=C?C.__html:void 0,L!=null&&C!==L&&(h=h||[]).push(V,L)):V==="children"?typeof L!="string"&&typeof L!="number"||(h=h||[]).push(V,""+L):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(a.hasOwnProperty(V)?(L!=null&&V==="onScroll"&&en("scroll",e),h||C===L||(h=[])):(h=h||[]).push(V,L))}i&&(h=h||[]).push("style",i);var V=h;(r.updateQueue=V)&&(r.flags|=4)}},Ah=function(e,r,i,c){i!==c&&(r.flags|=4)};function dl(e,r){if(!sn)switch(e.tailMode){case"hidden":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var c=null;i!==null;)i.alternate!==null&&(c=i),i=i.sibling;c===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function Hn(e){var r=e.alternate!==null&&e.alternate.child===e.child,i=0,c=0;if(r)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=c,e.childLanes=i,r}function mg(e,r,i){var c=r.pendingProps;switch(nu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(r),null;case 1:return or(r.type)&&aa(),Hn(r),null;case 3:return c=r.stateNode,fi(),tn(rr),tn(Wn),_u(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(e===null||e.child===null)&&(ha(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Or!==null&&(Yu(Or),Or=null))),Pu(e,r),Hn(r),null;case 5:hu(r);var d=bs(il.current);if(i=r.type,e!==null&&r.stateNode!=null)Oh(e,r,i,c,d),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(o(166));return Hn(r),null}if(e=bs(Zr.current),ha(r)){c=r.stateNode,i=r.type;var h=r.memoizedProps;switch(c[Jr]=r,c[tl]=h,e=(r.mode&1)!==0,i){case"dialog":en("cancel",c),en("close",c);break;case"iframe":case"object":case"embed":en("load",c);break;case"video":case"audio":for(d=0;d<Ji.length;d++)en(Ji[d],c);break;case"source":en("error",c);break;case"img":case"image":case"link":en("error",c),en("load",c);break;case"details":en("toggle",c);break;case"input":an(c,h),en("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},en("invalid",c);break;case"textarea":mt(c,h),en("invalid",c)}xt(i,h),d=null;for(var g in h)if(h.hasOwnProperty(g)){var C=h[g];g==="children"?typeof C=="string"?c.textContent!==C&&(h.suppressHydrationWarning!==!0&&sa(c.textContent,C,e),d=["children",C]):typeof C=="number"&&c.textContent!==""+C&&(h.suppressHydrationWarning!==!0&&sa(c.textContent,C,e),d=["children",""+C]):a.hasOwnProperty(g)&&C!=null&&g==="onScroll"&&en("scroll",c)}switch(i){case"input":Dt(c),J(c,h,!0);break;case"textarea":Dt(c),ft(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=ia)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nt(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof c.is=="string"?e=g.createElement(i,{is:c.is}):(e=g.createElement(i),i==="select"&&(g=e,c.multiple?g.multiple=!0:c.size&&(g.size=c.size))):e=g.createElementNS(e,i),e[Jr]=r,e[tl]=c,Ph(e,r,!1,!1),r.stateNode=e;e:{switch(g=ct(i,c),i){case"dialog":en("cancel",e),en("close",e),d=c;break;case"iframe":case"object":case"embed":en("load",e),d=c;break;case"video":case"audio":for(d=0;d<Ji.length;d++)en(Ji[d],e);d=c;break;case"source":en("error",e),d=c;break;case"img":case"image":case"link":en("error",e),en("load",e),d=c;break;case"details":en("toggle",e),d=c;break;case"input":an(e,c),d=Tt(e,c),en("invalid",e);break;case"option":d=c;break;case"select":e._wrapperState={wasMultiple:!!c.multiple},d=G({},c,{value:void 0}),en("invalid",e);break;case"textarea":mt(e,c),d=dt(e,c),en("invalid",e);break;default:d=c}xt(i,d),C=d;for(h in C)if(C.hasOwnProperty(h)){var L=C[h];h==="style"?Me(e,L):h==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&z(e,L)):h==="children"?typeof L=="string"?(i!=="textarea"||L!=="")&&W(e,L):typeof L=="number"&&W(e,""+L):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?L!=null&&h==="onScroll"&&en("scroll",e):L!=null&&Q(e,h,L,g))}switch(i){case"input":Dt(e),J(e,c,!1);break;case"textarea":Dt(e),ft(e);break;case"option":c.value!=null&&e.setAttribute("value",""+Pe(c.value));break;case"select":e.multiple=!!c.multiple,h=c.value,h!=null?Ve(e,!!c.multiple,h,!1):c.defaultValue!=null&&Ve(e,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=ia)}switch(i){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Hn(r),null;case 6:if(e&&r.stateNode!=null)Ah(e,r,e.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(o(166));if(i=bs(il.current),bs(Zr.current),ha(r)){if(c=r.stateNode,i=r.memoizedProps,c[Jr]=r,(h=c.nodeValue!==i)&&(e=_r,e!==null))switch(e.tag){case 3:sa(c.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sa(c.nodeValue,i,(e.mode&1)!==0)}h&&(r.flags|=4)}else c=(i.nodeType===9?i:i.ownerDocument).createTextNode(c),c[Jr]=r,r.stateNode=c}return Hn(r),null;case 13:if(tn(hn),c=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(sn&&mr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Df(),ai(),r.flags|=98560,h=!1;else if(h=ha(r),c!==null&&c.dehydrated!==null){if(e===null){if(!h)throw Error(o(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(o(317));h[Jr]=r}else ai(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Hn(r),h=!1}else Or!==null&&(Yu(Or),Or=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=i,r):(c=c!==null,c!==(e!==null&&e.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(hn.current&1)!==0?Rn===0&&(Rn=3):qu())),r.updateQueue!==null&&(r.flags|=4),Hn(r),null);case 4:return fi(),Pu(e,r),e===null&&Zi(r.stateNode.containerInfo),Hn(r),null;case 10:return au(r.type._context),Hn(r),null;case 17:return or(r.type)&&aa(),Hn(r),null;case 19:if(tn(hn),h=r.memoizedState,h===null)return Hn(r),null;if(c=(r.flags&128)!==0,g=h.rendering,g===null)if(c)dl(h,!1);else{if(Rn!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(g=xa(e),g!==null){for(r.flags|=128,dl(h,!1),c=g.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=i,i=r.child;i!==null;)h=i,e=c,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,e=g.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Kt(hn,hn.current&1|2),r.child}e=e.sibling}h.tail!==null&&Gt()>mi&&(r.flags|=128,c=!0,dl(h,!1),r.lanes=4194304)}else{if(!c)if(e=xa(g),e!==null){if(r.flags|=128,c=!0,i=e.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),dl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!sn)return Hn(r),null}else 2*Gt()-h.renderingStartTime>mi&&i!==1073741824&&(r.flags|=128,c=!0,dl(h,!1),r.lanes=4194304);h.isBackwards?(g.sibling=r.child,r.child=g):(i=h.last,i!==null?i.sibling=g:r.child=g,h.last=g)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Gt(),r.sibling=null,i=hn.current,Kt(hn,c?i&1|2:i&1),r):(Hn(r),null);case 22:case 23:return Xu(),c=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(gr&1073741824)!==0&&(Hn(r),r.subtreeFlags&6&&(r.flags|=8192)):Hn(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function gg(e,r){switch(nu(r),r.tag){case 1:return or(r.type)&&aa(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return fi(),tn(rr),tn(Wn),_u(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return hu(r),null;case 13:if(tn(hn),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(o(340));ai()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return tn(hn),null;case 4:return fi(),null;case 10:return au(r.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var Ra=!1,Yn=!1,yg=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function pi(e,r){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(c){mn(e,r,c)}else i.current=null}function Ou(e,r,i){try{i()}catch(c){mn(e,r,c)}}var $h=!1;function xg(e,r){if(Xc=us,e=Pr(),on(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var c=i.getSelection&&i.getSelection();if(c&&c.rangeCount!==0){i=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var g=0,C=-1,L=-1,V=0,ue=0,fe=e,ae=null;t:for(;;){for(var Ee;fe!==i||d!==0&&fe.nodeType!==3||(C=g+d),fe!==h||c!==0&&fe.nodeType!==3||(L=g+c),fe.nodeType===3&&(g+=fe.nodeValue.length),(Ee=fe.firstChild)!==null;)ae=fe,fe=Ee;for(;;){if(fe===e)break t;if(ae===i&&++V===d&&(C=g),ae===h&&++ue===c&&(L=g),(Ee=fe.nextSibling)!==null)break;fe=ae,ae=fe.parentNode}fe=Ee}i=C===-1||L===-1?null:{start:C,end:L}}else i=null}i=i||{start:0,end:0}}else i=null;for(qc={focusedElem:e,selectionRange:i},us=!1,Oe=r;Oe!==null;)if(r=Oe,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Oe=e;else for(;Oe!==null;){r=Oe;try{var $e=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ue=$e.memoizedProps,vn=$e.memoizedState,F=r.stateNode,A=F.getSnapshotBeforeUpdate(r.elementType===r.type?Ue:Ar(r.type,Ue),vn);F.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var U=r.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(_e){mn(r,r.return,_e)}if(e=r.sibling,e!==null){e.return=r.return,Oe=e;break}Oe=r.return}return $e=$h,$h=!1,$e}function fl(e,r,i){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&e)===e){var h=d.destroy;d.destroy=void 0,h!==void 0&&Ou(r,i,h)}d=d.next}while(d!==c)}}function Ta(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var c=i.create;i.destroy=c()}i=i.next}while(i!==r)}}function Au(e){var r=e.ref;if(r!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof r=="function"?r(e):r.current=e}}function Bh(e){var r=e.alternate;r!==null&&(e.alternate=null,Bh(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Jr],delete r[tl],delete r[Jc],delete r[tg],delete r[ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dh(e){return e.tag===5||e.tag===3||e.tag===4}function zh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $u(e,r,i){var c=e.tag;if(c===5||c===6)e=e.stateNode,r?i.nodeType===8?i.parentNode.insertBefore(e,r):i.insertBefore(e,r):(i.nodeType===8?(r=i.parentNode,r.insertBefore(e,i)):(r=i,r.appendChild(e)),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=ia));else if(c!==4&&(e=e.child,e!==null))for($u(e,r,i),e=e.sibling;e!==null;)$u(e,r,i),e=e.sibling}function Bu(e,r,i){var c=e.tag;if(c===5||c===6)e=e.stateNode,r?i.insertBefore(e,r):i.appendChild(e);else if(c!==4&&(e=e.child,e!==null))for(Bu(e,r,i),e=e.sibling;e!==null;)Bu(e,r,i),e=e.sibling}var $n=null,$r=!1;function Xo(e,r,i){for(i=i.child;i!==null;)Fh(e,r,i),i=i.sibling}function Fh(e,r,i){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(is,i)}catch{}switch(i.tag){case 5:Yn||pi(i,r);case 6:var c=$n,d=$r;$n=null,Xo(e,r,i),$n=c,$r=d,$n!==null&&($r?(e=$n,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):$n.removeChild(i.stateNode));break;case 18:$n!==null&&($r?(e=$n,i=i.stateNode,e.nodeType===8?Gc(e.parentNode,i):e.nodeType===1&&Gc(e,i),To(e)):Gc($n,i.stateNode));break;case 4:c=$n,d=$r,$n=i.stateNode.containerInfo,$r=!0,Xo(e,r,i),$n=c,$r=d;break;case 0:case 11:case 14:case 15:if(!Yn&&(c=i.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&Ou(i,r,g),d=d.next}while(d!==c)}Xo(e,r,i);break;case 1:if(!Yn&&(pi(i,r),c=i.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=i.memoizedProps,c.state=i.memoizedState,c.componentWillUnmount()}catch(C){mn(i,r,C)}Xo(e,r,i);break;case 21:Xo(e,r,i);break;case 22:i.mode&1?(Yn=(c=Yn)||i.memoizedState!==null,Xo(e,r,i),Yn=c):Xo(e,r,i);break;default:Xo(e,r,i)}}function Wh(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new yg),r.forEach(function(c){var d=Rg.bind(null,e,c);i.has(c)||(i.add(c),c.then(d,d))})}}function Br(e,r){var i=r.deletions;if(i!==null)for(var c=0;c<i.length;c++){var d=i[c];try{var h=e,g=r,C=g;e:for(;C!==null;){switch(C.tag){case 5:$n=C.stateNode,$r=!1;break e;case 3:$n=C.stateNode.containerInfo,$r=!0;break e;case 4:$n=C.stateNode.containerInfo,$r=!0;break e}C=C.return}if($n===null)throw Error(o(160));Fh(h,g,d),$n=null,$r=!1;var L=d.alternate;L!==null&&(L.return=null),d.return=null}catch(V){mn(d,r,V)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Uh(r,e),r=r.sibling}function Uh(e,r){var i=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Br(r,e),to(e),c&4){try{fl(3,e,e.return),Ta(3,e)}catch(Ue){mn(e,e.return,Ue)}try{fl(5,e,e.return)}catch(Ue){mn(e,e.return,Ue)}}break;case 1:Br(r,e),to(e),c&512&&i!==null&&pi(i,i.return);break;case 5:if(Br(r,e),to(e),c&512&&i!==null&&pi(i,i.return),e.flags&32){var d=e.stateNode;try{W(d,"")}catch(Ue){mn(e,e.return,Ue)}}if(c&4&&(d=e.stateNode,d!=null)){var h=e.memoizedProps,g=i!==null?i.memoizedProps:h,C=e.type,L=e.updateQueue;if(e.updateQueue=null,L!==null)try{C==="input"&&h.type==="radio"&&h.name!=null&&Xe(d,h),ct(C,g);var V=ct(C,h);for(g=0;g<L.length;g+=2){var ue=L[g],fe=L[g+1];ue==="style"?Me(d,fe):ue==="dangerouslySetInnerHTML"?z(d,fe):ue==="children"?W(d,fe):Q(d,ue,fe,V)}switch(C){case"input":Xt(d,h);break;case"textarea":Ct(d,h);break;case"select":var ae=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Ee=h.value;Ee!=null?Ve(d,!!h.multiple,Ee,!1):ae!==!!h.multiple&&(h.defaultValue!=null?Ve(d,!!h.multiple,h.defaultValue,!0):Ve(d,!!h.multiple,h.multiple?[]:"",!1))}d[tl]=h}catch(Ue){mn(e,e.return,Ue)}}break;case 6:if(Br(r,e),to(e),c&4){if(e.stateNode===null)throw Error(o(162));d=e.stateNode,h=e.memoizedProps;try{d.nodeValue=h}catch(Ue){mn(e,e.return,Ue)}}break;case 3:if(Br(r,e),to(e),c&4&&i!==null&&i.memoizedState.isDehydrated)try{To(r.containerInfo)}catch(Ue){mn(e,e.return,Ue)}break;case 4:Br(r,e),to(e);break;case 13:Br(r,e),to(e),d=e.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Fu=Gt())),c&4&&Wh(e);break;case 22:if(ue=i!==null&&i.memoizedState!==null,e.mode&1?(Yn=(V=Yn)||ue,Br(r,e),Yn=V):Br(r,e),to(e),c&8192){if(V=e.memoizedState!==null,(e.stateNode.isHidden=V)&&!ue&&(e.mode&1)!==0)for(Oe=e,ue=e.child;ue!==null;){for(fe=Oe=ue;Oe!==null;){switch(ae=Oe,Ee=ae.child,ae.tag){case 0:case 11:case 14:case 15:fl(4,ae,ae.return);break;case 1:pi(ae,ae.return);var $e=ae.stateNode;if(typeof $e.componentWillUnmount=="function"){c=ae,i=ae.return;try{r=c,$e.props=r.memoizedProps,$e.state=r.memoizedState,$e.componentWillUnmount()}catch(Ue){mn(c,i,Ue)}}break;case 5:pi(ae,ae.return);break;case 22:if(ae.memoizedState!==null){Vh(fe);continue}}Ee!==null?(Ee.return=ae,Oe=Ee):Vh(fe)}ue=ue.sibling}e:for(ue=null,fe=e;;){if(fe.tag===5){if(ue===null){ue=fe;try{d=fe.stateNode,V?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(C=fe.stateNode,L=fe.memoizedProps.style,g=L!=null&&L.hasOwnProperty("display")?L.display:null,C.style.display=Be("display",g))}catch(Ue){mn(e,e.return,Ue)}}}else if(fe.tag===6){if(ue===null)try{fe.stateNode.nodeValue=V?"":fe.memoizedProps}catch(Ue){mn(e,e.return,Ue)}}else if((fe.tag!==22&&fe.tag!==23||fe.memoizedState===null||fe===e)&&fe.child!==null){fe.child.return=fe,fe=fe.child;continue}if(fe===e)break e;for(;fe.sibling===null;){if(fe.return===null||fe.return===e)break e;ue===fe&&(ue=null),fe=fe.return}ue===fe&&(ue=null),fe.sibling.return=fe.return,fe=fe.sibling}}break;case 19:Br(r,e),to(e),c&4&&Wh(e);break;case 21:break;default:Br(r,e),to(e)}}function to(e){var r=e.flags;if(r&2){try{e:{for(var i=e.return;i!==null;){if(Dh(i)){var c=i;break e}i=i.return}throw Error(o(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(W(d,""),c.flags&=-33);var h=zh(e);Bu(e,h,d);break;case 3:case 4:var g=c.stateNode.containerInfo,C=zh(e);$u(e,C,g);break;default:throw Error(o(161))}}catch(L){mn(e,e.return,L)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function vg(e,r,i){Oe=e,Hh(e)}function Hh(e,r,i){for(var c=(e.mode&1)!==0;Oe!==null;){var d=Oe,h=d.child;if(d.tag===22&&c){var g=d.memoizedState!==null||Ra;if(!g){var C=d.alternate,L=C!==null&&C.memoizedState!==null||Yn;C=Ra;var V=Yn;if(Ra=g,(Yn=L)&&!V)for(Oe=d;Oe!==null;)g=Oe,L=g.child,g.tag===22&&g.memoizedState!==null?Xh(d):L!==null?(L.return=g,Oe=L):Xh(d);for(;h!==null;)Oe=h,Hh(h),h=h.sibling;Oe=d,Ra=C,Yn=V}Yh(e)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Oe=h):Yh(e)}}function Yh(e){for(;Oe!==null;){var r=Oe;if((r.flags&8772)!==0){var i=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Yn||Ta(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Yn)if(i===null)c.componentDidMount();else{var d=r.elementType===r.type?i.memoizedProps:Ar(r.type,i.memoizedProps);c.componentDidUpdate(d,i.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Vf(r,h,c);break;case 3:var g=r.updateQueue;if(g!==null){if(i=null,r.child!==null)switch(r.child.tag){case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}Vf(r,g,i)}break;case 5:var C=r.stateNode;if(i===null&&r.flags&4){i=C;var L=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&i.focus();break;case"img":L.src&&(i.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var V=r.alternate;if(V!==null){var ue=V.memoizedState;if(ue!==null){var fe=ue.dehydrated;fe!==null&&To(fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Yn||r.flags&512&&Au(r)}catch(ae){mn(r,r.return,ae)}}if(r===e){Oe=null;break}if(i=r.sibling,i!==null){i.return=r.return,Oe=i;break}Oe=r.return}}function Vh(e){for(;Oe!==null;){var r=Oe;if(r===e){Oe=null;break}var i=r.sibling;if(i!==null){i.return=r.return,Oe=i;break}Oe=r.return}}function Xh(e){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var i=r.return;try{Ta(4,r)}catch(L){mn(r,i,L)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(L){mn(r,d,L)}}var h=r.return;try{Au(r)}catch(L){mn(r,h,L)}break;case 5:var g=r.return;try{Au(r)}catch(L){mn(r,g,L)}}}catch(L){mn(r,r.return,L)}if(r===e){Oe=null;break}var C=r.sibling;if(C!==null){C.return=r.return,Oe=C;break}Oe=r.return}}var wg=Math.ceil,Na=$.ReactCurrentDispatcher,Du=$.ReactCurrentOwner,Rr=$.ReactCurrentBatchConfig,Pt=0,Ln=null,kn=null,Bn=0,gr=0,_i=Wo(0),Rn=0,hl=null,Ss=0,Ma=0,zu=0,pl=null,ir=null,Fu=0,mi=1/0,ko=null,Ia=!1,Wu=null,qo=null,La=!1,Qo=null,Pa=0,_l=0,Uu=null,Oa=-1,Aa=0;function Gn(){return(Pt&6)!==0?Gt():Oa!==-1?Oa:Oa=Gt()}function Ko(e){return(e.mode&1)===0?1:(Pt&2)!==0&&Bn!==0?Bn&-Bn:og.transition!==null?(Aa===0&&(Aa=io()),Aa):(e=At,e!==0||(e=window.event,e=e===void 0?16:br(e.type)),e)}function Dr(e,r,i,c){if(50<_l)throw _l=0,Uu=null,Error(o(185));xr(e,i,c),((Pt&2)===0||e!==Ln)&&(e===Ln&&((Pt&2)===0&&(Ma|=i),Rn===4&&Go(e,Bn)),lr(e,c),i===1&&Pt===0&&(r.mode&1)===0&&(mi=Gt()+500,ua&&Ho()))}function lr(e,r){var i=e.callbackNode;Ul(e,r);var c=Ai(e,e===Ln?Bn:0);if(c===0)i!==null&&Wl(i),e.callbackNode=null,e.callbackPriority=0;else if(r=c&-c,e.callbackPriority!==r){if(i!=null&&Wl(i),r===1)e.tag===0?rg(Qh.bind(null,e)):Pf(Qh.bind(null,e)),Zm(function(){(Pt&6)===0&&Ho()}),i=null;else{switch(Hl(c)){case 1:i=Us;break;case 4:i=Eo;break;case 16:i=so;break;case 536870912:i=ss;break;default:i=so}i=rp(i,qh.bind(null,e))}e.callbackPriority=r,e.callbackNode=i}}function qh(e,r){if(Oa=-1,Aa=0,(Pt&6)!==0)throw Error(o(327));var i=e.callbackNode;if(gi()&&e.callbackNode!==i)return null;var c=Ai(e,e===Ln?Bn:0);if(c===0)return null;if((c&30)!==0||(c&e.expiredLanes)!==0||r)r=$a(e,c);else{r=c;var d=Pt;Pt|=2;var h=Gh();(Ln!==e||Bn!==r)&&(ko=null,mi=Gt()+500,js(e,r));do try{Sg();break}catch(C){Kh(e,C)}while(!0);lu(),Na.current=h,Pt=d,kn!==null?r=0:(Ln=null,Bn=0,r=Rn)}if(r!==0){if(r===2&&(d=Vs(e),d!==0&&(c=d,r=Hu(e,d))),r===1)throw i=hl,js(e,0),Go(e,c),lr(e,Gt()),i;if(r===6)Go(e,c);else{if(d=e.current.alternate,(c&30)===0&&!bg(d)&&(r=$a(e,c),r===2&&(h=Vs(e),h!==0&&(c=h,r=Hu(e,h))),r===1))throw i=hl,js(e,0),Go(e,c),lr(e,Gt()),i;switch(e.finishedWork=d,e.finishedLanes=c,r){case 0:case 1:throw Error(o(345));case 2:Es(e,ir,ko);break;case 3:if(Go(e,c),(c&130023424)===c&&(r=Fu+500-Gt(),10<r)){if(Ai(e,0)!==0)break;if(d=e.suspendedLanes,(d&c)!==c){Gn(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Kc(Es.bind(null,e,ir,ko),r);break}Es(e,ir,ko);break;case 4:if(Go(e,c),(c&4194240)===c)break;for(r=e.eventTimes,d=-1;0<c;){var g=31-An(c);h=1<<g,g=r[g],g>d&&(d=g),c&=~h}if(c=d,c=Gt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*wg(c/1960))-c,10<c){e.timeoutHandle=Kc(Es.bind(null,e,ir,ko),c);break}Es(e,ir,ko);break;case 5:Es(e,ir,ko);break;default:throw Error(o(329))}}}return lr(e,Gt()),e.callbackNode===i?qh.bind(null,e):null}function Hu(e,r){var i=pl;return e.current.memoizedState.isDehydrated&&(js(e,r).flags|=256),e=$a(e,r),e!==2&&(r=ir,ir=i,r!==null&&Yu(r)),e}function Yu(e){ir===null?ir=e:ir.push.apply(ir,e)}function bg(e){for(var r=e;;){if(r.flags&16384){var i=r.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var c=0;c<i.length;c++){var d=i[c],h=d.getSnapshot;d=d.value;try{if(!Yt(h(),d))return!1}catch{return!1}}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Go(e,r){for(r&=~zu,r&=~Ma,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var i=31-An(r),c=1<<i;e[i]=-1,r&=~c}}function Qh(e){if((Pt&6)!==0)throw Error(o(327));gi();var r=Ai(e,0);if((r&1)===0)return lr(e,Gt()),null;var i=$a(e,r);if(e.tag!==0&&i===2){var c=Vs(e);c!==0&&(r=c,i=Hu(e,c))}if(i===1)throw i=hl,js(e,0),Go(e,r),lr(e,Gt()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Es(e,ir,ko),lr(e,Gt()),null}function Vu(e,r){var i=Pt;Pt|=1;try{return e(r)}finally{Pt=i,Pt===0&&(mi=Gt()+500,ua&&Ho())}}function Cs(e){Qo!==null&&Qo.tag===0&&(Pt&6)===0&&gi();var r=Pt;Pt|=1;var i=Rr.transition,c=At;try{if(Rr.transition=null,At=1,e)return e()}finally{At=c,Rr.transition=i,Pt=r,(Pt&6)===0&&Ho()}}function Xu(){gr=_i.current,tn(_i)}function js(e,r){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Jm(i)),kn!==null)for(i=kn.return;i!==null;){var c=i;switch(nu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&aa();break;case 3:fi(),tn(rr),tn(Wn),_u();break;case 5:hu(c);break;case 4:fi();break;case 13:tn(hn);break;case 19:tn(hn);break;case 10:au(c.type._context);break;case 22:case 23:Xu()}i=i.return}if(Ln=e,kn=e=Jo(e.current,null),Bn=gr=r,Rn=0,hl=null,zu=Ma=Ss=0,ir=pl=null,ws!==null){for(r=0;r<ws.length;r++)if(i=ws[r],c=i.interleaved,c!==null){i.interleaved=null;var d=c.next,h=i.pending;if(h!==null){var g=h.next;h.next=d,c.next=g}i.pending=c}ws=null}return e}function Kh(e,r){do{var i=kn;try{if(lu(),va.current=Sa,wa){for(var c=pn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}wa=!1}if(ks=0,In=En=pn=null,ll=!1,al=0,Du.current=null,i===null||i.return===null){Rn=1,hl=r,kn=null;break}e:{var h=e,g=i.return,C=i,L=r;if(r=Bn,C.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var V=L,ue=C,fe=ue.tag;if((ue.mode&1)===0&&(fe===0||fe===11||fe===15)){var ae=ue.alternate;ae?(ue.updateQueue=ae.updateQueue,ue.memoizedState=ae.memoizedState,ue.lanes=ae.lanes):(ue.updateQueue=null,ue.memoizedState=null)}var Ee=wh(g);if(Ee!==null){Ee.flags&=-257,bh(Ee,g,C,h,r),Ee.mode&1&&vh(h,V,r),r=Ee,L=V;var $e=r.updateQueue;if($e===null){var Ue=new Set;Ue.add(L),r.updateQueue=Ue}else $e.add(L);break e}else{if((r&1)===0){vh(h,V,r),qu();break e}L=Error(o(426))}}else if(sn&&C.mode&1){var vn=wh(g);if(vn!==null){(vn.flags&65536)===0&&(vn.flags|=256),bh(vn,g,C,h,r),su(hi(L,C));break e}}h=L=hi(L,C),Rn!==4&&(Rn=2),pl===null?pl=[h]:pl.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var F=yh(h,L,r);Yf(h,F);break e;case 1:C=L;var A=h.type,U=h.stateNode;if((h.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(qo===null||!qo.has(U)))){h.flags|=65536,r&=-r,h.lanes|=r;var _e=xh(h,C,r);Yf(h,_e);break e}}h=h.return}while(h!==null)}Zh(i)}catch(He){r=He,kn===i&&i!==null&&(kn=i=i.return);continue}break}while(!0)}function Gh(){var e=Na.current;return Na.current=Sa,e===null?Sa:e}function qu(){(Rn===0||Rn===3||Rn===2)&&(Rn=4),Ln===null||(Ss&268435455)===0&&(Ma&268435455)===0||Go(Ln,Bn)}function $a(e,r){var i=Pt;Pt|=2;var c=Gh();(Ln!==e||Bn!==r)&&(ko=null,js(e,r));do try{kg();break}catch(d){Kh(e,d)}while(!0);if(lu(),Pt=i,Na.current=c,kn!==null)throw Error(o(261));return Ln=null,Bn=0,Rn}function kg(){for(;kn!==null;)Jh(kn)}function Sg(){for(;kn!==null&&!Lc();)Jh(kn)}function Jh(e){var r=np(e.alternate,e,gr);e.memoizedProps=e.pendingProps,r===null?Zh(e):kn=r,Du.current=null}function Zh(e){var r=e;do{var i=r.alternate;if(e=r.return,(r.flags&32768)===0){if(i=mg(i,r,gr),i!==null){kn=i;return}}else{if(i=gg(i,r),i!==null){i.flags&=32767,kn=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Rn=6,kn=null;return}}if(r=r.sibling,r!==null){kn=r;return}kn=r=e}while(r!==null);Rn===0&&(Rn=5)}function Es(e,r,i){var c=At,d=Rr.transition;try{Rr.transition=null,At=1,Cg(e,r,i,c)}finally{Rr.transition=d,At=c}return null}function Cg(e,r,i,c){do gi();while(Qo!==null);if((Pt&6)!==0)throw Error(o(327));i=e.finishedWork;var d=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(vr(e,h),e===Ln&&(kn=Ln=null,Bn=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||La||(La=!0,rp(so,function(){return gi(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=Rr.transition,Rr.transition=null;var g=At;At=1;var C=Pt;Pt|=4,Du.current=null,xg(e,i),Uh(i,e),Gr(qc),us=!!Xc,qc=Xc=null,e.current=i,vg(i),Pc(),Pt=C,At=g,Rr.transition=h}else e.current=i;if(La&&(La=!1,Qo=e,Pa=d),h=e.pendingLanes,h===0&&(qo=null),ls(i.stateNode),lr(e,Gt()),r!==null)for(c=e.onRecoverableError,i=0;i<r.length;i++)d=r[i],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ia)throw Ia=!1,e=Wu,Wu=null,e;return(Pa&1)!==0&&e.tag!==0&&gi(),h=e.pendingLanes,(h&1)!==0?e===Uu?_l++:(_l=0,Uu=e):_l=0,Ho(),null}function gi(){if(Qo!==null){var e=Hl(Pa),r=Rr.transition,i=At;try{if(Rr.transition=null,At=16>e?16:e,Qo===null)var c=!1;else{if(e=Qo,Qo=null,Pa=0,(Pt&6)!==0)throw Error(o(331));var d=Pt;for(Pt|=4,Oe=e.current;Oe!==null;){var h=Oe,g=h.child;if((Oe.flags&16)!==0){var C=h.deletions;if(C!==null){for(var L=0;L<C.length;L++){var V=C[L];for(Oe=V;Oe!==null;){var ue=Oe;switch(ue.tag){case 0:case 11:case 15:fl(8,ue,h)}var fe=ue.child;if(fe!==null)fe.return=ue,Oe=fe;else for(;Oe!==null;){ue=Oe;var ae=ue.sibling,Ee=ue.return;if(Bh(ue),ue===V){Oe=null;break}if(ae!==null){ae.return=Ee,Oe=ae;break}Oe=Ee}}}var $e=h.alternate;if($e!==null){var Ue=$e.child;if(Ue!==null){$e.child=null;do{var vn=Ue.sibling;Ue.sibling=null,Ue=vn}while(Ue!==null)}}Oe=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,Oe=g;else e:for(;Oe!==null;){if(h=Oe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:fl(9,h,h.return)}var F=h.sibling;if(F!==null){F.return=h.return,Oe=F;break e}Oe=h.return}}var A=e.current;for(Oe=A;Oe!==null;){g=Oe;var U=g.child;if((g.subtreeFlags&2064)!==0&&U!==null)U.return=g,Oe=U;else e:for(g=A;Oe!==null;){if(C=Oe,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Ta(9,C)}}catch(He){mn(C,C.return,He)}if(C===g){Oe=null;break e}var _e=C.sibling;if(_e!==null){_e.return=C.return,Oe=_e;break e}Oe=C.return}}if(Pt=d,Ho(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(is,e)}catch{}c=!0}return c}finally{At=i,Rr.transition=r}}return!1}function ep(e,r,i){r=hi(i,r),r=yh(e,r,1),e=Vo(e,r,1),r=Gn(),e!==null&&(xr(e,1,r),lr(e,r))}function mn(e,r,i){if(e.tag===3)ep(e,e,i);else for(;r!==null;){if(r.tag===3){ep(r,e,i);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(qo===null||!qo.has(c))){e=hi(i,e),e=xh(r,e,1),r=Vo(r,e,1),e=Gn(),r!==null&&(xr(r,1,e),lr(r,e));break}}r=r.return}}function jg(e,r,i){var c=e.pingCache;c!==null&&c.delete(r),r=Gn(),e.pingedLanes|=e.suspendedLanes&i,Ln===e&&(Bn&i)===i&&(Rn===4||Rn===3&&(Bn&130023424)===Bn&&500>Gt()-Fu?js(e,0):zu|=i),lr(e,r)}function tp(e,r){r===0&&((e.mode&1)===0?r=1:(r=Ys,Ys<<=1,(Ys&130023424)===0&&(Ys=4194304)));var i=Gn();e=vo(e,r),e!==null&&(xr(e,r,i),lr(e,i))}function Eg(e){var r=e.memoizedState,i=0;r!==null&&(i=r.retryLane),tp(e,i)}function Rg(e,r){var i=0;switch(e.tag){case 13:var c=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:c=e.stateNode;break;default:throw Error(o(314))}c!==null&&c.delete(r),tp(e,i)}var np;np=function(e,r,i){if(e!==null)if(e.memoizedProps!==r.pendingProps||rr.current)sr=!0;else{if((e.lanes&i)===0&&(r.flags&128)===0)return sr=!1,_g(e,r,i);sr=(e.flags&131072)!==0}else sr=!1,sn&&(r.flags&1048576)!==0&&Of(r,fa,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ea(e,r),e=r.pendingProps;var d=si(r,Wn.current);di(r,i),d=yu(null,r,c,e,d,i);var h=xu();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(c)?(h=!0,ca(r)):h=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,du(r),d.updater=Ca,r.stateNode=d,d._reactInternals=r,Cu(r,c,e,i),r=Tu(null,r,c,!0,h,i)):(r.tag=0,sn&&h&&tu(r),Kn(null,r,d,i),r=r.child),r;case 16:c=r.elementType;e:{switch(Ea(e,r),e=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=Ng(c),e=Ar(c,e),d){case 0:r=Ru(null,r,c,e,i);break e;case 1:r=Rh(null,r,c,e,i);break e;case 11:r=kh(null,r,c,e,i);break e;case 14:r=Sh(null,r,c,Ar(c.type,e),i);break e}throw Error(o(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Ar(c,d),Ru(e,r,c,d,i);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Ar(c,d),Rh(e,r,c,d,i);case 3:e:{if(Th(r),e===null)throw Error(o(387));c=r.pendingProps,h=r.memoizedState,d=h.element,Hf(e,r),ya(r,c,null,i);var g=r.memoizedState;if(c=g.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){d=hi(Error(o(423)),r),r=Nh(e,r,c,i,d);break e}else if(c!==d){d=hi(Error(o(424)),r),r=Nh(e,r,c,i,d);break e}else for(mr=Fo(r.stateNode.containerInfo.firstChild),_r=r,sn=!0,Or=null,i=Wf(r,null,c,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ai(),c===d){r=bo(e,r,i);break e}Kn(e,r,c,i)}r=r.child}return r;case 5:return Xf(r),e===null&&ou(r),c=r.type,d=r.pendingProps,h=e!==null?e.memoizedProps:null,g=d.children,Qc(c,d)?g=null:h!==null&&Qc(c,h)&&(r.flags|=32),Eh(e,r),Kn(e,r,g,i),r.child;case 6:return e===null&&ou(r),null;case 13:return Mh(e,r,i);case 4:return fu(r,r.stateNode.containerInfo),c=r.pendingProps,e===null?r.child=ci(r,null,c,i):Kn(e,r,c,i),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Ar(c,d),kh(e,r,c,d,i);case 7:return Kn(e,r,r.pendingProps,i),r.child;case 8:return Kn(e,r,r.pendingProps.children,i),r.child;case 12:return Kn(e,r,r.pendingProps.children,i),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,h=r.memoizedProps,g=d.value,Kt(_a,c._currentValue),c._currentValue=g,h!==null)if(Yt(h.value,g)){if(h.children===d.children&&!rr.current){r=bo(e,r,i);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var C=h.dependencies;if(C!==null){g=h.child;for(var L=C.firstContext;L!==null;){if(L.context===c){if(h.tag===1){L=wo(-1,i&-i),L.tag=2;var V=h.updateQueue;if(V!==null){V=V.shared;var ue=V.pending;ue===null?L.next=L:(L.next=ue.next,ue.next=L),V.pending=L}}h.lanes|=i,L=h.alternate,L!==null&&(L.lanes|=i),cu(h.return,i,r),C.lanes|=i;break}L=L.next}}else if(h.tag===10)g=h.type===r.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(o(341));g.lanes|=i,C=g.alternate,C!==null&&(C.lanes|=i),cu(g,i,r),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===r){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}Kn(e,r,d.children,i),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,di(r,i),d=jr(d),c=c(d),r.flags|=1,Kn(e,r,c,i),r.child;case 14:return c=r.type,d=Ar(c,r.pendingProps),d=Ar(c.type,d),Sh(e,r,c,d,i);case 15:return Ch(e,r,r.type,r.pendingProps,i);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Ar(c,d),Ea(e,r),r.tag=1,or(c)?(e=!0,ca(r)):e=!1,di(r,i),mh(r,c,d),Cu(r,c,d,i),Tu(null,r,c,!0,e,i);case 19:return Lh(e,r,i);case 22:return jh(e,r,i)}throw Error(o(156,r.tag))};function rp(e,r){return Pi(e,r)}function Tg(e,r,i,c){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tr(e,r,i,c){return new Tg(e,r,i,c)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ng(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tt)return 11;if(e===me)return 14}return 2}function Jo(e,r){var i=e.alternate;return i===null?(i=Tr(e.tag,r,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=r,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,r=e.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ba(e,r,i,c,d,h){var g=2;if(c=e,typeof e=="function")Qu(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case ne:return Rs(i.children,d,h,r);case De:g=8,d|=8;break;case rt:return e=Tr(12,i,r,d|2),e.elementType=rt,e.lanes=h,e;case Ge:return e=Tr(13,i,r,d),e.elementType=Ge,e.lanes=h,e;case ce:return e=Tr(19,i,r,d),e.elementType=ce,e.lanes=h,e;case ze:return Da(i,d,h,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:g=10;break e;case Te:g=9;break e;case tt:g=11;break e;case me:g=14;break e;case de:g=16,c=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return r=Tr(g,i,r,d),r.elementType=e,r.type=c,r.lanes=h,r}function Rs(e,r,i,c){return e=Tr(7,e,c,r),e.lanes=i,e}function Da(e,r,i,c){return e=Tr(22,e,c,r),e.elementType=ze,e.lanes=i,e.stateNode={isHidden:!1},e}function Ku(e,r,i){return e=Tr(6,e,null,r),e.lanes=i,e}function Gu(e,r,i){return r=Tr(4,e.children!==null?e.children:[],e.key,r),r.lanes=i,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Mg(e,r,i,c,d){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rn(0),this.expirationTimes=rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ju(e,r,i,c,d,h,g,C,L){return e=new Mg(e,r,i,C,L),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Tr(3,null,null,r),e.current=h,h.stateNode=e,h.memoizedState={element:c,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(h),e}function Ig(e,r,i){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:c==null?null:""+c,children:e,containerInfo:r,implementation:i}}function op(e){if(!e)return Uo;e=e._reactInternals;e:{if(we(e)!==e||e.tag!==1)throw Error(o(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(or(i))return If(e,i,r)}return r}function sp(e,r,i,c,d,h,g,C,L){return e=Ju(i,c,!0,e,d,h,g,C,L),e.context=op(null),i=e.current,c=Gn(),d=Ko(i),h=wo(c,d),h.callback=r??null,Vo(i,h,d),e.current.lanes=d,xr(e,d,c),lr(e,c),e}function za(e,r,i,c){var d=r.current,h=Gn(),g=Ko(d);return i=op(i),r.context===null?r.context=i:r.pendingContext=i,r=wo(h,g),r.payload={element:e},c=c===void 0?null:c,c!==null&&(r.callback=c),e=Vo(d,r,g),e!==null&&(Dr(e,d,g,h),ga(e,d,g)),g}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ip(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<r?i:r}}function Zu(e,r){ip(e,r),(e=e.alternate)&&ip(e,r)}function Lg(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ed(e){this._internalRoot=e}Wa.prototype.render=ed.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(o(409));za(e,r,null,null)},Wa.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Cs(function(){za(null,e,null,null)}),r[mo]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var r=hr();e={blockedOn:null,target:e,priority:r};for(var i=0;i<Ir.length&&r!==0&&r<Ir[i].priority;i++);Ir.splice(i,0,e),i===0&&Vr(e)}};function td(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ap(){}function Pg(e,r,i,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var V=Fa(g);h.call(V)}}var g=sp(r,c,e,0,null,!1,!1,"",ap);return e._reactRootContainer=g,e[mo]=g.current,Zi(e.nodeType===8?e.parentNode:e),Cs(),g}for(;d=e.lastChild;)e.removeChild(d);if(typeof c=="function"){var C=c;c=function(){var V=Fa(L);C.call(V)}}var L=Ju(e,0,!1,null,null,!1,!1,"",ap);return e._reactRootContainer=L,e[mo]=L.current,Zi(e.nodeType===8?e.parentNode:e),Cs(function(){za(r,L,i,c)}),L}function Ha(e,r,i,c,d){var h=i._reactRootContainer;if(h){var g=h;if(typeof d=="function"){var C=d;d=function(){var L=Fa(g);C.call(L)}}za(r,g,e,d)}else g=Pg(i,r,e,d,c);return Fa(g)}Yl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var i=Ro(r.pendingLanes);i!==0&&(bn(r,i|1),lr(r,Gt()),(Pt&6)===0&&(mi=Gt()+500,Ho()))}break;case 13:Cs(function(){var c=vo(e,1);if(c!==null){var d=Gn();Dr(c,e,1,d)}}),Zu(e,1)}},wt=function(e){if(e.tag===13){var r=vo(e,134217728);if(r!==null){var i=Gn();Dr(r,e,134217728,i)}Zu(e,134217728)}},Vl=function(e){if(e.tag===13){var r=Ko(e),i=vo(e,r);if(i!==null){var c=Gn();Dr(i,e,r,c)}Zu(e,r)}},hr=function(){return At},Bi=function(e,r){var i=At;try{return At=e,r()}finally{At=i}},Ce=function(e,r,i){switch(r){case"input":if(Xt(e,i),r=i.name,i.type==="radio"&&r!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<i.length;r++){var c=i[r];if(c!==e&&c.form===e.form){var d=la(c);if(!d)throw Error(o(90));_t(c),Xt(c,d)}}}break;case"textarea":Ct(e,i);break;case"select":r=i.value,r!=null&&Ve(e,!!i.multiple,r,!1)}},yt=Vu,ht=Cs;var Og={usingClientEntryPoint:!1,Events:[nl,ri,la,je,jt,Vu]},ml={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ag={bundleType:ml.bundleType,version:ml.version,rendererPackageName:ml.rendererPackageName,rendererConfig:ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wr(e),e===null?null:e.stateNode},findFiberByHostInstance:ml.findFiberByHostInstance||Lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{is=Ya.inject(Ag),zn=Ya}catch{}}return ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Og,ar.createPortal=function(e,r){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(r))throw Error(o(200));return Ig(e,r,null,i)},ar.createRoot=function(e,r){if(!td(e))throw Error(o(299));var i=!1,c="",d=lp;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Ju(e,1,!1,null,null,i,!1,c,d),e[mo]=r.current,Zi(e.nodeType===8?e.parentNode:e),new ed(r)},ar.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Wr(r),e=e===null?null:e.stateNode,e},ar.flushSync=function(e){return Cs(e)},ar.hydrate=function(e,r,i){if(!Ua(r))throw Error(o(200));return Ha(null,e,r,!0,i)},ar.hydrateRoot=function(e,r,i){if(!td(e))throw Error(o(405));var c=i!=null&&i.hydratedSources||null,d=!1,h="",g=lp;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),r=sp(r,null,e,1,i??null,d,!1,h,g),e[mo]=r.current,Zi(e),c)for(e=0;e<c.length;e++)i=c[e],d=i._getVersion,d=d(i._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[i,d]:r.mutableSourceEagerHydrationData.push(i,d);return new Wa(r)},ar.render=function(e,r,i){if(!Ua(r))throw Error(o(200));return Ha(null,e,r,!1,i)},ar.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(o(40));return e._reactRootContainer?(Cs(function(){Ha(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0):!1},ar.unstable_batchedUpdates=Vu,ar.unstable_renderSubtreeIntoContainer=function(e,r,i,c){if(!Ua(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ha(e,r,i,!1,c)},ar.version="18.3.1-next-f1338f8080-20240426",ar}var mp;function S_(){if(mp)return od.exports;mp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),od.exports=Xg(),od.exports}var gp;function qg(){if(gp)return Va;gp=1;var t=S_();return Va.createRoot=t.createRoot,Va.hydrateRoot=t.hydrateRoot,Va}var Qg=qg();const Kg=k_(Qg);var C_=S_();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)({}).hasOwnProperty.call(o,l)&&(t[l]=o[l])}return t},Tl.apply(null,arguments)}var ns;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ns||(ns={}));const yp="popstate";function Gg(t){t===void 0&&(t={});function n(l,a){let{pathname:u,search:f,hash:p}=l.location;return Nd("",{pathname:u,search:f,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function o(l,a){return typeof a=="string"?a:E_(a)}return Zg(n,o,null,t)}function Cn(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function j_(t,n){if(!t){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Jg(){return Math.random().toString(36).substr(2,8)}function xp(t,n){return{usr:t.state,key:t.key,idx:n}}function Nd(t,n,o,l){return o===void 0&&(o=null),Tl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof n=="string"?Ri(n):n,{state:o,key:n&&n.key||l||Jg()})}function E_(t){let{pathname:n="/",search:o="",hash:l=""}=t;return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Ri(t){let n={};if(t){let o=t.indexOf("#");o>=0&&(n.hash=t.substr(o),t=t.substr(0,o));let l=t.indexOf("?");l>=0&&(n.search=t.substr(l),t=t.substr(0,l)),t&&(n.pathname=t)}return n}function Zg(t,n,o,l){l===void 0&&(l={});let{window:a=document.defaultView,v5Compat:u=!1}=l,f=a.history,p=ns.Pop,_=null,w=y();w==null&&(w=0,f.replaceState(Tl({},f.state,{idx:w}),""));function y(){return(f.state||{idx:null}).idx}function x(){p=ns.Pop;let I=y(),R=I==null?null:I-w;w=I,_&&_({action:p,location:M.location,delta:R})}function b(I,R){p=ns.Push;let Y=Nd(M.location,I,R);w=y()+1;let Q=xp(Y,w),$=M.createHref(Y);try{f.pushState(Q,"",$)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;a.location.assign($)}u&&_&&_({action:p,location:M.location,delta:1})}function P(I,R){p=ns.Replace;let Y=Nd(M.location,I,R);w=y();let Q=xp(Y,w),$=M.createHref(Y);f.replaceState(Q,"",$),u&&_&&_({action:p,location:M.location,delta:0})}function N(I){let R=a.location.origin!=="null"?a.location.origin:a.location.href,Y=typeof I=="string"?I:E_(I);return Y=Y.replace(/ $/,"%20"),Cn(R,"No window.location.(origin|href) available to create URL for href: "+Y),new URL(Y,R)}let M={get action(){return p},get location(){return t(a,f)},listen(I){if(_)throw new Error("A history only accepts one active listener");return a.addEventListener(yp,x),_=I,()=>{a.removeEventListener(yp,x),_=null}},createHref(I){return n(a,I)},createURL:N,encodeLocation(I){let R=N(I);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:b,replace:P,go(I){return f.go(I)}};return M}var vp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vp||(vp={}));function e0(t,n,o){return o===void 0&&(o="/"),t0(t,n,o)}function t0(t,n,o,l){let a=typeof n=="string"?Ri(n):n,u=N_(a.pathname||"/",o);if(u==null)return null;let f=R_(t);n0(f);let p=null,_=p0(u);for(let w=0;p==null&&w<f.length;++w)p=d0(f[w],_);return p}function R_(t,n,o,l){n===void 0&&(n=[]),o===void 0&&(o=[]),l===void 0&&(l="");let a=(u,f,p)=>{let _={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};_.relativePath.startsWith("/")&&(Cn(_.relativePath.startsWith(l),'Absolute route path "'+_.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),_.relativePath=_.relativePath.slice(l.length));let w=Ps([l,_.relativePath]),y=o.concat(_);u.children&&u.children.length>0&&(Cn(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+w+'".')),R_(u.children,n,y,w)),!(u.path==null&&!u.index)&&n.push({path:w,score:c0(w,u.index),routesMeta:y})};return t.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))a(u,f);else for(let _ of T_(u.path))a(u,f,_)}),n}function T_(t){let n=t.split("/");if(n.length===0)return[];let[o,...l]=n,a=o.endsWith("?"),u=o.replace(/\?$/,"");if(l.length===0)return a?[u,""]:[u];let f=T_(l.join("/")),p=[];return p.push(...f.map(_=>_===""?u:[u,_].join("/"))),a&&p.push(...f),p.map(_=>t.startsWith("/")&&_===""?"/":_)}function n0(t){t.sort((n,o)=>n.score!==o.score?o.score-n.score:u0(n.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}const r0=/^:[\w-]+$/,o0=3,s0=2,i0=1,l0=10,a0=-2,wp=t=>t==="*";function c0(t,n){let o=t.split("/"),l=o.length;return o.some(wp)&&(l+=a0),n&&(l+=s0),o.filter(a=>!wp(a)).reduce((a,u)=>a+(r0.test(u)?o0:u===""?i0:l0),l)}function u0(t,n){return t.length===n.length&&t.slice(0,-1).every((l,a)=>l===n[a])?t[t.length-1]-n[n.length-1]:0}function d0(t,n,o){let{routesMeta:l}=t,a={},u="/",f=[];for(let p=0;p<l.length;++p){let _=l[p],w=p===l.length-1,y=u==="/"?n:n.slice(u.length)||"/",x=f0({path:_.relativePath,caseSensitive:_.caseSensitive,end:w},y),b=_.route;if(!x)return null;Object.assign(a,x.params),f.push({params:a,pathname:Ps([u,x.pathname]),pathnameBase:g0(Ps([u,x.pathnameBase])),route:b}),x.pathnameBase!=="/"&&(u=Ps([u,x.pathnameBase]))}return f}function f0(t,n){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,l]=h0(t.path,t.caseSensitive,t.end),a=n.match(o);if(!a)return null;let u=a[0],f=u.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:l.reduce((w,y,x)=>{let{paramName:b,isOptional:P}=y;if(b==="*"){let M=p[x]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const N=p[x];return P&&!N?w[b]=void 0:w[b]=(N||"").replace(/%2F/g,"/"),w},{}),pathname:u,pathnameBase:f,pattern:t}}function h0(t,n,o){n===void 0&&(n=!1),o===void 0&&(o=!0),j_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let l=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,_)=>(l.push({paramName:p,isOptional:_!=null}),_?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),l]}function p0(t){try{return t.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return j_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),t}}function N_(t,n){if(n==="/")return t;if(!t.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,l=t.charAt(o);return l&&l!=="/"?null:t.slice(o)||"/"}function _0(t,n){n===void 0&&(n="/");let{pathname:o,search:l="",hash:a=""}=typeof t=="string"?Ri(t):t,u;return o?(o=L_(o),o.startsWith("/")?u=bp(o.substring(1),"/"):u=bp(o,n)):u=n,{pathname:u,search:y0(l),hash:x0(a)}}function bp(t,n){let o=n.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function ld(t,n,o,l){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function m0(t){return t.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function M_(t,n){let o=m0(t);return n?o.map((l,a)=>a===o.length-1?l.pathname:l.pathnameBase):o.map(l=>l.pathnameBase)}function I_(t,n,o,l){l===void 0&&(l=!1);let a;typeof t=="string"?a=Ri(t):(a=Tl({},t),Cn(!a.pathname||!a.pathname.includes("?"),ld("?","pathname","search",a)),Cn(!a.pathname||!a.pathname.includes("#"),ld("#","pathname","hash",a)),Cn(!a.search||!a.search.includes("#"),ld("#","search","hash",a)));let u=t===""||a.pathname==="",f=u?"/":a.pathname,p;if(f==null)p=o;else{let x=n.length-1;if(!l&&f.startsWith("..")){let b=f.split("/");for(;b[0]==="..";)b.shift(),x-=1;a.pathname=b.join("/")}p=x>=0?n[x]:"/"}let _=_0(a,p),w=f&&f!=="/"&&f.endsWith("/"),y=(u||f===".")&&o.endsWith("/");return!_.pathname.endsWith("/")&&(w||y)&&(_.pathname+="/"),_}const L_=t=>t.replace(/\/\/+/g,"/"),Ps=t=>L_(t.join("/")),g0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),y0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,x0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function v0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const P_=["post","put","patch","delete"];new Set(P_);const w0=["get",...P_];new Set(w0);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)({}).hasOwnProperty.call(o,l)&&(t[l]=o[l])}return t},Nl.apply(null,arguments)}const Kd=m.createContext(null),b0=m.createContext(null),Ol=m.createContext(null),jc=m.createContext(null),Fs=m.createContext({outlet:null,matches:[],isDataRoute:!1}),O_=m.createContext(null);function Al(){return m.useContext(jc)!=null}function Ec(){return Al()||Cn(!1),m.useContext(jc).location}function A_(t){m.useContext(Ol).static||m.useLayoutEffect(t)}function Ti(){let{isDataRoute:t}=m.useContext(Fs);return t?O0():k0()}function k0(){Al()||Cn(!1);let t=m.useContext(Kd),{basename:n,future:o,navigator:l}=m.useContext(Ol),{matches:a}=m.useContext(Fs),{pathname:u}=Ec(),f=JSON.stringify(M_(a,o.v7_relativeSplatPath)),p=m.useRef(!1);return A_(()=>{p.current=!0}),m.useCallback(function(w,y){if(y===void 0&&(y={}),!p.current)return;if(typeof w=="number"){l.go(w);return}let x=I_(w,JSON.parse(f),u,y.relative==="path");t==null&&n!=="/"&&(x.pathname=x.pathname==="/"?n:Ps([n,x.pathname])),(y.replace?l.replace:l.push)(x,y.state,y)},[n,l,f,u,t])}function S0(t,n){return C0(t,n)}function C0(t,n,o,l){Al()||Cn(!1);let{navigator:a}=m.useContext(Ol),{matches:u}=m.useContext(Fs),f=u[u.length-1],p=f?f.params:{};f&&f.pathname;let _=f?f.pathnameBase:"/";f&&f.route;let w=Ec(),y;if(n){var x;let I=typeof n=="string"?Ri(n):n;_==="/"||(x=I.pathname)!=null&&x.startsWith(_)||Cn(!1),y=I}else y=w;let b=y.pathname||"/",P=b;if(_!=="/"){let I=_.replace(/^\//,"").split("/");P="/"+b.replace(/^\//,"").split("/").slice(I.length).join("/")}let N=e0(t,{pathname:P}),M=N0(N&&N.map(I=>Object.assign({},I,{params:Object.assign({},p,I.params),pathname:Ps([_,a.encodeLocation?a.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?_:Ps([_,a.encodeLocation?a.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),u,o,l);return n&&M?m.createElement(jc.Provider,{value:{location:Nl({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:ns.Pop}},M):M}function j0(){let t=P0(),n=v0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},n),o?m.createElement("pre",{style:a},o):null,null)}const E0=m.createElement(j0,null);class R0 extends m.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error!==void 0?m.createElement(Fs.Provider,{value:this.props.routeContext},m.createElement(O_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T0(t){let{routeContext:n,match:o,children:l}=t,a=m.useContext(Kd);return a&&a.static&&a.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=o.route.id),m.createElement(Fs.Provider,{value:n},l)}function N0(t,n,o,l){var a;if(n===void 0&&(n=[]),o===void 0&&(o=null),l===void 0&&(l=null),t==null){var u;if(!o)return null;if(o.errors)t=o.matches;else if((u=l)!=null&&u.v7_partialHydration&&n.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let f=t,p=(a=o)==null?void 0:a.errors;if(p!=null){let y=f.findIndex(x=>x.route.id&&(p==null?void 0:p[x.route.id])!==void 0);y>=0||Cn(!1),f=f.slice(0,Math.min(f.length,y+1))}let _=!1,w=-1;if(o&&l&&l.v7_partialHydration)for(let y=0;y<f.length;y++){let x=f[y];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(w=y),x.route.id){let{loaderData:b,errors:P}=o,N=x.route.loader&&b[x.route.id]===void 0&&(!P||P[x.route.id]===void 0);if(x.route.lazy||N){_=!0,w>=0?f=f.slice(0,w+1):f=[f[0]];break}}}return f.reduceRight((y,x,b)=>{let P,N=!1,M=null,I=null;o&&(P=p&&x.route.id?p[x.route.id]:void 0,M=x.route.errorElement||E0,_&&(w<0&&b===0?(A0("route-fallback"),N=!0,I=null):w===b&&(N=!0,I=x.route.hydrateFallbackElement||null)));let R=n.concat(f.slice(0,b+1)),Y=()=>{let Q;return P?Q=M:N?Q=I:x.route.Component?Q=m.createElement(x.route.Component,null):x.route.element?Q=x.route.element:Q=y,m.createElement(T0,{match:x,routeContext:{outlet:y,matches:R,isDataRoute:o!=null},children:Q})};return o&&(x.route.ErrorBoundary||x.route.errorElement||b===0)?m.createElement(R0,{location:o.location,revalidation:o.revalidation,component:M,error:P,children:Y(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):Y()},null)}var $_=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})($_||{}),B_=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(B_||{});function M0(t){let n=m.useContext(Kd);return n||Cn(!1),n}function I0(t){let n=m.useContext(b0);return n||Cn(!1),n}function L0(t){let n=m.useContext(Fs);return n||Cn(!1),n}function D_(t){let n=L0(),o=n.matches[n.matches.length-1];return o.route.id||Cn(!1),o.route.id}function P0(){var t;let n=m.useContext(O_),o=I0(),l=D_();return n!==void 0?n:(t=o.errors)==null?void 0:t[l]}function O0(){let{router:t}=M0($_.UseNavigateStable),n=D_(B_.UseNavigateStable),o=m.useRef(!1);return A_(()=>{o.current=!0}),m.useCallback(function(a,u){u===void 0&&(u={}),o.current&&(typeof a=="number"?t.navigate(a):t.navigate(a,Nl({fromRouteId:n},u)))},[t,n])}const kp={};function A0(t,n,o){kp[t]||(kp[t]=!0)}function $0(t,n){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function z_(t){let{to:n,replace:o,state:l,relative:a}=t;Al()||Cn(!1);let{future:u,static:f}=m.useContext(Ol),{matches:p}=m.useContext(Fs),{pathname:_}=Ec(),w=Ti(),y=I_(n,M_(p,u.v7_relativeSplatPath),_,a==="path"),x=JSON.stringify(y);return m.useEffect(()=>w(JSON.parse(x),{replace:o,state:l,relative:a}),[w,x,a,o,l]),null}function ki(t){Cn(!1)}function B0(t){let{basename:n="/",children:o=null,location:l,navigationType:a=ns.Pop,navigator:u,static:f=!1,future:p}=t;Al()&&Cn(!1);let _=n.replace(/^\/*/,"/"),w=m.useMemo(()=>({basename:_,navigator:u,static:f,future:Nl({v7_relativeSplatPath:!1},p)}),[_,p,u,f]);typeof l=="string"&&(l=Ri(l));let{pathname:y="/",search:x="",hash:b="",state:P=null,key:N="default"}=l,M=m.useMemo(()=>{let I=N_(y,_);return I==null?null:{location:{pathname:I,search:x,hash:b,state:P,key:N},navigationType:a}},[_,y,x,b,P,N,a]);return M==null?null:m.createElement(Ol.Provider,{value:w},m.createElement(jc.Provider,{children:o,value:M}))}function D0(t){let{children:n,location:o}=t;return S0(Md(n),o)}new Promise(()=>{});function Md(t,n){n===void 0&&(n=[]);let o=[];return m.Children.forEach(t,(l,a)=>{if(!m.isValidElement(l))return;let u=[...n,a];if(l.type===m.Fragment){o.push.apply(o,Md(l.props.children,u));return}l.type!==ki&&Cn(!1),!l.props.index||!l.props.children||Cn(!1);let f={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=Md(l.props.children,u)),o.push(f)}),o}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Id(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((n,o)=>{let l=t[o];return n.concat(Array.isArray(l)?l.map(a=>[o,a]):[[o,l]])},[]))}function z0(t,n){let o=Id(t);return n&&n.forEach((l,a)=>{o.has(a)||n.getAll(a).forEach(u=>{o.append(a,u)})}),o}const F0="6";try{window.__reactRouterVersion=F0}catch{}const W0="startTransition",Sp=Hg[W0];function U0(t){let{basename:n,children:o,future:l,window:a}=t,u=m.useRef();u.current==null&&(u.current=Gg({window:a,v5Compat:!0}));let f=u.current,[p,_]=m.useState({action:f.action,location:f.location}),{v7_startTransition:w}=l||{},y=m.useCallback(x=>{w&&Sp?Sp(()=>_(x)):_(x)},[_,w]);return m.useLayoutEffect(()=>f.listen(y),[f,y]),m.useEffect(()=>$0(l),[l]),m.createElement(B0,{basename:n,children:o,location:p.location,navigationType:p.action,navigator:f,future:l})}var Cp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Cp||(Cp={}));var jp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jp||(jp={}));function H0(t){let n=m.useRef(Id(t)),o=m.useRef(!1),l=Ec(),a=m.useMemo(()=>z0(l.search,o.current?null:n.current),[l.search]),u=Ti(),f=m.useCallback((p,_)=>{const w=Id(typeof p=="function"?p(a):p);o.current=!0,u("?"+w,_)},[u,a]);return[a,f]}var Y0=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,V0={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Y0}var Vt=V0,X0=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,q0={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=X0}var Ut=q0,Q0=({size:t=16})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),K0=({size:t=24,style:n={}})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[s.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[s.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_list_sparkle",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),G0=({size:t=20,...n})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[s.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),J0=({size:t=24,copied:n=!1,tint:o})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:o?{color:o,transition:"color 0.3s ease"}:void 0,children:[s.jsxs("g",{className:`${Ut.iconState} ${n?Ut.hiddenScaled:Ut.visibleScaled}`,children:[s.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsxs("g",{className:`${Ut.iconState} ${n?Ut.visibleScaled:Ut.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Z0=({size:t=24,state:n="idle"})=>{const o=n==="idle",l=n==="sent",a=n==="failed",u=n==="sending";return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("g",{className:`${Ut.iconStateFast} ${o?Ut.visibleScaled:u?Ut.sending:Ut.hiddenScaled}`,children:s.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),s.jsxs("g",{className:`${Ut.iconStateFast} ${l?Ut.visibleScaled:Ut.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:`${Ut.iconStateFast} ${a?Ut.visibleScaled:Ut.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},ey=({size:t=24,isOpen:n=!0})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:`${Ut.iconFade} ${n?Ut.visible:Ut.hidden}`,children:[s.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:`${Ut.iconFade} ${n?Ut.hidden:Ut.visible}`,children:[s.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),s.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),ty=({size:t=24,isPaused:n=!1})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:`${Ut.iconFadeFast} ${n?Ut.hidden:Ut.visible}`,children:[s.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsx("path",{className:`${Ut.iconFadeFast} ${n?Ut.visible:Ut.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),ny=({size:t=16})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),ry=({size:t=16})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),F_=({size:t=16})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[s.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_2_53",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),oy=({size:t=24})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),sy=({size:t=16})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[s.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),iy=({size:t=16})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:s.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),ly=({size:t=16})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),ay=({size:t=24})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),cy=({size:t=16})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),uy=({size:t=24})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),W_=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],ad=W_.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Ld="feedback-freeze-styles",cd="__agentation_freeze";function dy(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[cd]||(t[cd]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[cd]}var Rt=dy();typeof window<"u"&&!Rt.installed&&(Rt.origSetTimeout=window.setTimeout.bind(window),Rt.origSetInterval=window.setInterval.bind(window),Rt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...o)=>typeof t=="string"?Rt.origSetTimeout(t,n):Rt.origSetTimeout((...l)=>{Rt.frozen?Rt.frozenTimeoutQueue.push(()=>t(...l)):t(...l)},n,...o),window.setInterval=(t,n,...o)=>typeof t=="string"?Rt.origSetInterval(t,n):Rt.origSetInterval((...l)=>{Rt.frozen||t(...l)},n,...o),window.requestAnimationFrame=t=>Rt.origRAF(n=>{Rt.frozen?Rt.frozenRAFQueue.push(t):t(n)}),Rt.installed=!0);var nt=Rt.origSetTimeout,fy=Rt.origSetInterval,Si=Rt.origRAF;function hy(t){return t?W_.some(n=>{var o;return!!((o=t.closest)!=null&&o.call(t,`[${n}]`))}):!1}function py(){if(typeof document>"u"||Rt.frozen)return;Rt.frozen=!0,Rt.frozenTimeoutQueue=[],Rt.frozenRAFQueue=[];let t=document.getElementById(Ld);t||(t=document.createElement("style"),t.id=Ld),t.textContent=`
    *${ad},
    *${ad}::before,
    *${ad}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),Rt.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var l;if(n.playState!=="running")return;const o=(l=n.effect)==null?void 0:l.target;hy(o)||(n.pause(),Rt.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ep(){var o;if(typeof document>"u"||!Rt.frozen)return;Rt.frozen=!1;const t=Rt.frozenTimeoutQueue;Rt.frozenTimeoutQueue=[];for(const l of t)Rt.origSetTimeout(()=>{if(Rt.frozen){Rt.frozenTimeoutQueue.push(l);return}try{l()}catch(a){console.warn("[agentation] Error replaying queued timeout:",a)}},0);const n=Rt.frozenRAFQueue;Rt.frozenRAFQueue=[];for(const l of n)Rt.origRAF(a=>{if(Rt.frozen){Rt.frozenRAFQueue.push(l);return}l(a)});for(const l of Rt.pausedAnimations)try{l.play()}catch(a){console.warn("[agentation] Error resuming animation:",a)}Rt.pausedAnimations=[],(o=document.getElementById(Ld))==null||o.remove(),document.querySelectorAll("video").forEach(l=>{l.dataset.wasPaused==="false"&&(l.play().catch(()=>{}),delete l.dataset.wasPaused)})}function ud(t){if(!t)return;const n=o=>o.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var mc=m.forwardRef(function({element:n,timestamp:o,selectedText:l,placeholder:a="What should change?",initialValue:u="",submitLabel:f="Add",onSubmit:p,onCancel:_,onDelete:w,style:y,accentColor:x="#3c82f7",isExiting:b=!1,lightMode:P=!1,computedStyles:N},M){const[I,R]=m.useState(u),[Y,Q]=m.useState(!1),[$,ie]=m.useState("initial"),[re,ne]=m.useState(!1),[De,rt]=m.useState(!1),Le=m.useRef(null),Te=m.useRef(null),tt=m.useRef(null),Ge=m.useRef(null);m.useEffect(()=>{b&&$!=="exit"&&ie("exit")},[b,$]),m.useEffect(()=>{nt(()=>{ie("enter")},0);const X=nt(()=>{ie("entered")},200),G=nt(()=>{const j=Le.current;j&&(ud(j),j.selectionStart=j.selectionEnd=j.value.length,j.scrollTop=j.scrollHeight)},50);return()=>{clearTimeout(X),clearTimeout(G),tt.current&&clearTimeout(tt.current),Ge.current&&clearTimeout(Ge.current)}},[]);const ce=m.useCallback(()=>{Ge.current&&clearTimeout(Ge.current),Q(!0),Ge.current=nt(()=>{Q(!1),ud(Le.current)},250)},[]);m.useImperativeHandle(M,()=>({shake:ce}),[ce]);const me=m.useCallback(()=>{ie("exit"),tt.current=nt(()=>{_()},150)},[_]),de=m.useCallback(()=>{I.trim()&&p(I.trim())},[I,p]),ze=m.useCallback(X=>{X.stopPropagation(),!X.nativeEvent.isComposing&&(X.key==="Enter"&&!X.shiftKey&&(X.preventDefault(),de()),X.key==="Escape"&&me())},[de,me]),D=[Vt.popup,P?Vt.light:"",$==="enter"?Vt.enter:"",$==="entered"?Vt.entered:"",$==="exit"?Vt.exit:"",Y?Vt.shake:""].filter(Boolean).join(" ");return s.jsxs("div",{ref:Te,className:D,"data-annotation-popup":!0,style:y,onClick:X=>X.stopPropagation(),children:[s.jsxs("div",{className:Vt.header,children:[N&&Object.keys(N).length>0?s.jsxs("button",{className:Vt.headerToggle,onClick:()=>{const X=De;rt(!De),X&&nt(()=>ud(Le.current),0)},type:"button",children:[s.jsx("svg",{className:`${Vt.chevron} ${De?Vt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),s.jsx("span",{className:Vt.element,children:n})]}):s.jsx("span",{className:Vt.element,children:n}),o&&s.jsx("span",{className:Vt.timestamp,children:o})]}),N&&Object.keys(N).length>0&&s.jsx("div",{className:`${Vt.stylesWrapper} ${De?Vt.expanded:""}`,children:s.jsx("div",{className:Vt.stylesInner,children:s.jsx("div",{className:Vt.stylesBlock,children:Object.entries(N).map(([X,G])=>s.jsxs("div",{className:Vt.styleLine,children:[s.jsx("span",{className:Vt.styleProperty,children:X.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",s.jsx("span",{className:Vt.styleValue,children:G}),";"]},X))})})}),l&&s.jsxs("div",{className:Vt.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),s.jsx("textarea",{ref:Le,className:Vt.textarea,style:{borderColor:re?x:void 0},placeholder:a,value:I,onChange:X=>R(X.target.value),onFocus:()=>ne(!0),onBlur:()=>ne(!1),rows:2,onKeyDown:ze}),s.jsxs("div",{className:Vt.actions,children:[w&&s.jsx("div",{className:Vt.deleteWrapper,children:s.jsx("button",{className:Vt.deleteButton,onClick:w,type:"button",children:s.jsx(ay,{size:22})})}),s.jsx("button",{className:Vt.cancel,onClick:me,children:"Cancel"}),s.jsx("button",{className:Vt.submit,style:{backgroundColor:x,opacity:I.trim()?1:.4},onClick:de,disabled:!I.trim(),children:f})]})]})}),_y=({content:t,children:n,...o})=>{const[l,a]=m.useState(!1),[u,f]=m.useState(!1),[p,_]=m.useState({top:0,right:0}),w=m.useRef(null),y=m.useRef(null),x=m.useRef(null),b=()=>{if(w.current){const M=w.current.getBoundingClientRect();_({top:M.top+M.height/2,right:window.innerWidth-M.left+8})}},P=()=>{f(!0),x.current&&(clearTimeout(x.current),x.current=null),b(),y.current=nt(()=>{a(!0)},500)},N=()=>{y.current&&(clearTimeout(y.current),y.current=null),a(!1),x.current=nt(()=>{f(!1)},150)};return m.useEffect(()=>()=>{y.current&&clearTimeout(y.current),x.current&&clearTimeout(x.current)},[]),s.jsxs(s.Fragment,{children:[s.jsx("span",{ref:w,onMouseEnter:P,onMouseLeave:N,...o,children:n}),u&&C_.createPortal(s.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:p.top,right:p.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},my=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,gy={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=my}var Rp=gy,Is=({content:t})=>s.jsx(_y,{className:Rp.tooltip,content:t,children:s.jsx(G0,{className:Rp.tooltipIcon})}),Ne={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},U_=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Ne.navigation},{type:"header",label:"Header",...Ne.header},{type:"hero",label:"Hero",...Ne.hero},{type:"section",label:"Section",...Ne.section},{type:"sidebar",label:"Sidebar",...Ne.sidebar},{type:"footer",label:"Footer",...Ne.footer},{type:"modal",label:"Modal",...Ne.modal},{type:"banner",label:"Banner",...Ne.banner},{type:"drawer",label:"Drawer",...Ne.drawer},{type:"popover",label:"Popover",...Ne.popover},{type:"divider",label:"Divider",...Ne.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Ne.card},{type:"text",label:"Text",...Ne.text},{type:"image",label:"Image",...Ne.image},{type:"video",label:"Video",...Ne.video},{type:"table",label:"Table",...Ne.table},{type:"grid",label:"Grid",...Ne.grid},{type:"list",label:"List",...Ne.list},{type:"chart",label:"Chart",...Ne.chart},{type:"codeBlock",label:"Code Block",...Ne.codeBlock},{type:"map",label:"Map",...Ne.map},{type:"timeline",label:"Timeline",...Ne.timeline},{type:"calendar",label:"Calendar",...Ne.calendar},{type:"accordion",label:"Accordion",...Ne.accordion},{type:"carousel",label:"Carousel",...Ne.carousel},{type:"logo",label:"Logo",...Ne.logo},{type:"faq",label:"FAQ",...Ne.faq},{type:"gallery",label:"Gallery",...Ne.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Ne.button},{type:"input",label:"Input",...Ne.input},{type:"search",label:"Search",...Ne.search},{type:"form",label:"Form",...Ne.form},{type:"tabs",label:"Tabs",...Ne.tabs},{type:"dropdown",label:"Dropdown",...Ne.dropdown},{type:"toggle",label:"Toggle",...Ne.toggle},{type:"stepper",label:"Stepper",...Ne.stepper},{type:"rating",label:"Rating",...Ne.rating},{type:"fileUpload",label:"File Upload",...Ne.fileUpload},{type:"checkbox",label:"Checkbox",...Ne.checkbox},{type:"radio",label:"Radio",...Ne.radio},{type:"slider",label:"Slider",...Ne.slider},{type:"datePicker",label:"Date Picker",...Ne.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Ne.avatar},{type:"badge",label:"Badge",...Ne.badge},{type:"tag",label:"Tag",...Ne.tag},{type:"breadcrumb",label:"Breadcrumb",...Ne.breadcrumb},{type:"pagination",label:"Pagination",...Ne.pagination},{type:"progress",label:"Progress",...Ne.progress},{type:"alert",label:"Alert",...Ne.alert},{type:"toast",label:"Toast",...Ne.toast},{type:"notification",label:"Notification",...Ne.notification},{type:"tooltip",label:"Tooltip",...Ne.tooltip},{type:"stat",label:"Stat",...Ne.stat},{type:"skeleton",label:"Skeleton",...Ne.skeleton},{type:"chip",label:"Chip",...Ne.chip},{type:"icon",label:"Icon",...Ne.icon},{type:"spinner",label:"Spinner",...Ne.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Ne.pricing},{type:"testimonial",label:"Testimonial",...Ne.testimonial},{type:"cta",label:"CTA",...Ne.cta},{type:"productCard",label:"Product Card",...Ne.productCard},{type:"profile",label:"Profile",...Ne.profile},{type:"feature",label:"Feature",...Ne.feature},{type:"team",label:"Team",...Ne.team},{type:"login",label:"Login",...Ne.login},{type:"contact",label:"Contact",...Ne.contact}]}],zr={};for(const t of U_)for(const n of t.items)zr[n.type]=n;function oe({w:t,h:n=3,strong:o}){return s.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:o?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function zt({w:t,h:n,radius:o=3,style:l}){return s.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...l}})}function Zn({size:t}){return s.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function yy({width:t,height:n}){const o=Math.max(8,n*.2);return s.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${o}px`,gap:t*.02},children:[s.jsx(zt,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),s.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[s.jsx(oe,{w:t*.06}),s.jsx(oe,{w:t*.07}),s.jsx(oe,{w:t*.05}),s.jsx(oe,{w:t*.06})]}),s.jsx(zt,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function xy({width:t,height:n,text:o}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[o?s.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:o}):s.jsx(oe,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),s.jsx(oe,{w:t*.6}),s.jsx(oe,{w:t*.4}),s.jsx(zt,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function vy({width:t,height:n}){const o=Math.max(3,Math.floor(n/36));return s.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[s.jsx(oe,{w:t*.6,h:4,strong:!0}),Array.from({length:o},(l,a)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx(zt,{w:10,h:10,radius:2}),s.jsx(oe,{w:t*(.4+a*17%30/100)})]},a))]})}function wy({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/160)));return s.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:o},(l,a)=>s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx(oe,{w:"60%",h:3,strong:!0}),s.jsx(oe,{w:"80%",h:2}),s.jsx(oe,{w:"70%",h:2}),s.jsx(oe,{w:"60%",h:2})]},a))})}function by({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(oe,{w:t*.3,h:4,strong:!0}),s.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),s.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[s.jsx(oe,{w:"90%"}),s.jsx(oe,{w:"70%"}),s.jsx(oe,{w:"80%"})]}),s.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[s.jsx(zt,{w:70,h:26,radius:4}),s.jsx(zt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function ky({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),s.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[s.jsx(oe,{w:"70%",h:4,strong:!0}),s.jsx(oe,{w:"95%",h:2}),s.jsx(oe,{w:"85%",h:2}),s.jsx(oe,{w:"50%",h:2})]})]})}function Sy({width:t,height:n,text:o}){if(o)return s.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:o});const l=Math.max(2,Math.floor(n/18));return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[s.jsx(oe,{w:t*.6,h:5,strong:!0}),Array.from({length:l},(a,u)=>s.jsx(oe,{w:`${70+u*13%25}%`,h:2},u))]})}function Cy({width:t,height:n}){return s.jsx("div",{style:{height:"100%",position:"relative"},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[s.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),s.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),s.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function jy({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(t/100))),l=Math.max(2,Math.min(6,Math.floor(n/32)));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:o},(a,u)=>s.jsx("div",{style:{flex:1,padding:"0 8px"},children:s.jsx(oe,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:l},(a,u)=>s.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:o},(f,p)=>s.jsx("div",{style:{flex:1,padding:"0 8px"},children:s.jsx(oe,{w:`${50+(u*7+p*13)%40}%`,h:2})},p))},u))]})}function Ey({width:t,height:n}){const o=Math.max(2,Math.floor(n/28));return s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:o},(l,a)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsx(Zn,{size:8}),s.jsx(oe,{w:`${55+a*17%35}%`,h:2})]},a))})}function Ry({width:t,height:n,text:o}){return s.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o?s.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:o}):s.jsx(oe,{w:Math.max(20,t*.5),h:3,strong:!0})})}function Ty({width:t,height:n}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[s.jsx(oe,{w:Math.min(80,t*.3),h:2}),s.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:s.jsx(oe,{w:"40%",h:2})})]})}function Ny({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:o},(l,a)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[s.jsx(oe,{w:60+a*17%30,h:2}),s.jsx(zt,{w:"100%",h:28,radius:4})]},a)),s.jsx(zt,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function My({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120)));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(l,a)=>s.jsx("div",{style:{padding:"8px 12px",borderBottom:a===0?"2px solid var(--agd-bar-strong)":"none"},children:s.jsx(oe,{w:60,h:3,strong:a===0})},a))}),s.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[s.jsx(oe,{w:"80%",h:2}),s.jsx(oe,{w:"65%",h:2}),s.jsx(oe,{w:"75%",h:2})]})]})}function Iy({width:t,height:n}){const o=Math.min(t,n)/2;return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[s.jsx("circle",{cx:t/2,cy:n/2,r:o-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),s.jsx("circle",{cx:t/2,cy:n*.38,r:o*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),s.jsx("path",{d:`M${t/2-o*.55} ${n*.78} C${t/2-o*.55} ${n*.55} ${t/2+o*.55} ${n*.55} ${t/2+o*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Ly({width:t,height:n}){return s.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(oe,{w:Math.max(16,t*.5),h:2,strong:!0})})}function Py({width:t,height:n}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[s.jsx(oe,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),s.jsx(oe,{w:t*.35})]})}function Oy({width:t,height:n}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[s.jsx(oe,{w:t*.3,h:4,strong:!0}),s.jsx(oe,{w:t*.7}),s.jsx(oe,{w:t*.5}),s.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[s.jsx(zt,{w:"33%",h:"100%",radius:4}),s.jsx(zt,{w:"33%",h:"100%",radius:4}),s.jsx(zt,{w:"33%",h:"100%",radius:4})]})]})}function Ay({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/140))),l=Math.max(1,Math.min(3,Math.floor(n/120)));return s.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:o*l},(a,u)=>s.jsx(zt,{w:"100%",h:"100%",radius:4},u))})}function $y({width:t,height:n}){const o=Math.max(2,Math.floor((n-32)/28));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:s.jsx(oe,{w:t*.5,h:3,strong:!0})}),s.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:o},(l,a)=>s.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:a===0?"var(--agd-fill)":"transparent"},children:s.jsx(oe,{w:`${50+a*17%35}%`,h:2,strong:a===0})},a))})]})}function By({width:t,height:n}){const o=Math.min(t,n)/2;return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:o,stroke:"var(--agd-stroke)",strokeWidth:"1"}),s.jsx("circle",{cx:t-o,cy:n/2,r:o*.7,fill:"var(--agd-bar)"})]})}function Dy({width:t,height:n}){const o=Math.min(n/2,20);return s.jsxs("div",{style:{height:"100%",borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${o*.6}px`,gap:6},children:[s.jsx(Zn,{size:Math.min(14,n*.4)}),s.jsx(oe,{w:"50%",h:2})]})}function zy({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[s.jsx(Zn,{size:Math.min(20,n*.5)}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(oe,{w:"60%",h:3,strong:!0}),s.jsx(oe,{w:"80%",h:2})]}),s.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Fy({width:t,height:n}){return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[s.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),s.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Wy({width:t,height:n}){const o=Math.max(3,Math.min(7,Math.floor(t/50))),l=t/(o*2);return s.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(a,u)=>{const f=30+(u*37+17)%55;return s.jsx(zt,{w:l,h:`${f}%`,radius:2},u)})})}function Uy({width:t,height:n}){const o=Math.min(t,n)*.12;return s.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[s.jsx(zt,{w:"100%",h:"100%",radius:4}),s.jsx("div",{style:{position:"absolute",width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("div",{style:{width:0,height:0,borderLeft:`${o*.6}px solid var(--agd-bar-strong)`,borderTop:`${o*.4}px solid transparent`,borderBottom:`${o*.4}px solid transparent`,marginLeft:o*.15}})})]})}function Hy({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(oe,{w:"60%",h:2})}),s.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Yy({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/80)));return s.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:o},(l,a)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[a>0&&s.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),s.jsx(oe,{w:40+a*13%20,h:2,strong:a===o-1})]},a))})}function Vy({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(t/40))),l=Math.min(28,n*.8);return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:o},(a,u)=>s.jsx(zt,{w:l,h:l,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Xy({width:t}){return s.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:s.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function qy({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(n/40)));return s.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(l,a)=>s.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:a===0?2:1},children:[s.jsx(oe,{w:`${40+a*17%25}%`,h:3,strong:!0}),s.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:a===0?"▼":"▶"})]},a))})}function Qy({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[s.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),s.jsx(zt,{w:"100%",h:"100%",radius:4}),s.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[s.jsx(Zn,{size:5}),s.jsx(Zn,{size:5}),s.jsx(Zn,{size:5})]})]})}function Ky({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[s.jsx(oe,{w:t*.4,h:3,strong:!0}),s.jsx(oe,{w:t*.3,h:6,strong:!0}),s.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(o,l)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[s.jsx(Zn,{size:5}),s.jsx(oe,{w:`${50+l*17%35}%`,h:2})]},l))}),s.jsx(zt,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Gy({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[s.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx(oe,{w:"90%",h:2}),s.jsx(oe,{w:"75%",h:2}),s.jsx(oe,{w:"60%",h:2})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx(Zn,{size:20}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[s.jsx(oe,{w:60,h:3,strong:!0}),s.jsx(oe,{w:40,h:2})]})]})]})}function Jy({width:t,height:n}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[s.jsx(oe,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),s.jsx(oe,{w:t*.35}),s.jsx(zt,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function Zy({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[s.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(oe,{w:"40%",h:3,strong:!0}),s.jsx(oe,{w:"70%",h:2})]})]})}function e1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[s.jsx(oe,{w:t*.4,h:3,strong:!0}),s.jsx(zt,{w:60,h:Math.min(24,n*.6),radius:4})]})}function t1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[s.jsx(oe,{w:t*.5,h:2}),s.jsx(oe,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),s.jsx(oe,{w:t*.3,h:2})]})}function n1({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(t/100))),l=Math.min(12,n*.35);return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:o},(a,u)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[s.jsx("div",{style:{width:l,height:l,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<o-1&&s.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function r1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[s.jsx(oe,{w:Math.max(16,t*.5),h:2,strong:!0}),s.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function o1({width:t,height:n}){const l=Math.min(n*.7,t/7.5);return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.2},children:Array.from({length:5},(a,u)=>s.jsx("svg",{width:l,height:l,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function s1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[s.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),s.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),s.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),s.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:s.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[s.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),s.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function i1({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(n/60)));return s.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[s.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:o},(l,a)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[s.jsx(Zn,{size:8}),a<o-1&&s.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},a))}),s.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:o},(l,a)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[s.jsx(oe,{w:`${35+a*13%25}%`,h:3,strong:!0}),s.jsx(oe,{w:`${50+a*17%30}%`,h:2})]},a))})]})}function l1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),s.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),s.jsx(oe,{w:t*.4,h:2}),s.jsx(oe,{w:t*.25,h:2})]})}function a1({width:t,height:n}){const o=Math.max(3,Math.min(8,Math.floor(n/20)));return s.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[s.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[s.jsx(Zn,{size:6}),s.jsx(Zn,{size:6}),s.jsx(Zn,{size:6})]}),Array.from({length:o},(l,a)=>s.jsx("div",{style:{display:"flex",gap:6,paddingLeft:a>0&&a<o-1?12:0},children:s.jsx(oe,{w:`${25+a*23%50}%`,h:2,strong:a===0})},a))]})}function c1({width:t,height:n}){const a=Math.min((t-16)/7,(n-40)/6);return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[s.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),s.jsx(oe,{w:t*.3,h:3,strong:!0}),s.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,f)=>s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:a*.6},children:s.jsx(oe,{w:a*.5,h:2})},`h${f}`)),Array.from({length:35},(u,f)=>s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:a},children:s.jsx("div",{style:{width:a*.6,height:a*.6,borderRadius:"50%",background:f===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:f===12?1:.3}})})},f))]})]})}function u1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[s.jsx(Zn,{size:Math.min(32,n*.55)}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(oe,{w:"50%",h:3,strong:!0}),s.jsx(oe,{w:"75%",h:2})]}),s.jsx(oe,{w:30,h:2})]})}function d1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),s.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[s.jsx(oe,{w:"65%",h:4,strong:!0}),s.jsx(oe,{w:"40%",h:3}),s.jsx("div",{style:{flex:1}}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(oe,{w:"30%",h:5,strong:!0}),s.jsx(zt,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function f1({width:t,height:n}){const o=Math.min(48,n*.3);return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[s.jsx(Zn,{size:o}),s.jsx(oe,{w:t*.45,h:4,strong:!0}),s.jsx(oe,{w:t*.3,h:2}),s.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[s.jsx(oe,{w:20,h:3,strong:!0}),s.jsx(oe,{w:28,h:2})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[s.jsx(oe,{w:20,h:3,strong:!0}),s.jsx(oe,{w:28,h:2})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[s.jsx(oe,{w:20,h:3,strong:!0}),s.jsx(oe,{w:28,h:2})]})]})]})}function h1({width:t,height:n}){const o=Math.max(t*.6,80),l=Math.max(3,Math.floor(n/40));return s.jsxs("div",{style:{height:"100%",display:"flex"},children:[s.jsx("div",{style:{width:t-o,background:"var(--agd-fill)",opacity:.3}}),s.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[s.jsx(oe,{w:o*.4,h:4,strong:!0}),s.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:l},(a,u)=>s.jsx("div",{style:{padding:"6px 0"},children:s.jsx(oe,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function p1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[s.jsx(oe,{w:"70%",h:3,strong:!0}),s.jsx(oe,{w:"90%",h:2}),s.jsx(oe,{w:"60%",h:2})]}),s.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function _1({width:t,height:n}){const o=Math.min(n*.7,t*.3);return s.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[s.jsx(zt,{w:o,h:o,radius:o*.25}),s.jsx(oe,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function m1({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return s.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(l,a)=>s.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:a===0?2:1},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),s.jsx(oe,{w:t*(.3+a*13%25/100),h:3,strong:!0})]}),s.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:a===0?"▼":"▶"})]},a))})}function g1({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),l=Math.max(1,Math.min(3,Math.floor(n/120)));return s.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:o*l},(a,u)=>s.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[s.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),s.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function y1({width:t,height:n}){const o=Math.min(t,n);return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[s.jsx("rect",{x:"1",y:(n-o+2)/2,width:o-2,height:o-2,rx:o*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),s.jsx("path",{d:`M${o*.25} ${n/2}l${o*.2} ${o*.2} ${o*.3}-${o*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function x1({width:t,height:n}){const o=Math.min(t,n)/2-1;return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[s.jsx("circle",{cx:t/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),s.jsx("circle",{cx:t/2,cy:n/2,r:o*.45,fill:"var(--agd-bar)"})]})}function v1({width:t,height:n}){const o=Math.max(2,n*.12),l=Math.min(n*.35,10),a=t*.55;return s.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[s.jsx("div",{style:{width:"100%",height:o,borderRadius:o/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:s.jsx("div",{style:{width:a,height:"100%",borderRadius:o/2,background:"var(--agd-bar)"}})}),s.jsx("div",{style:{position:"absolute",left:a-l,width:l*2,height:l*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function w1({width:t,height:n}){const o=Math.min(36,n*.15),l=7,a=4,u=Math.min((t-16)/l,(n-o-40)/(a+1));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[s.jsxs("div",{style:{height:o,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[s.jsx(oe,{w:"40%",h:2}),s.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[s.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),s.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),s.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[s.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),s.jsx(oe,{w:t*.25,h:2,strong:!0}),s.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:l*a},(f,p)=>s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:s.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:p===10?"var(--agd-bar)":"transparent"},children:s.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:p===10?1:.25}})})})},p))})]})]})}function b1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[s.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),s.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),s.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),s.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function k1({width:t,height:n}){return s.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:s.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[s.jsx(oe,{w:"60%",h:2,strong:!0}),s.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function S1({width:t,height:n}){const o=Math.min(t,n);return s.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:s.jsx("path",{d:`M${t/2} ${(n-o)/2+o*.1}l${o*.12} ${o*.25} ${o*.28} ${o*.04}-${o*.2} ${o*.2} ${o*.05} ${o*.28}-${o*.25}-${o*.12}-${o*.25} ${o*.12} ${o*.05}-${o*.28}-${o*.2}-${o*.2} ${o*.28}-${o*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function C1({width:t,height:n}){const o=Math.min(t,n)/2-2;return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[s.jsx("circle",{cx:t/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),s.jsx("path",{d:`M${t/2} ${n/2-o}a${o} ${o} 0 0 1 ${o} ${o}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function j1({width:t,height:n}){const o=Math.min(36,n*.25,t*.12),l=Math.max(1,Math.min(3,Math.floor(n/80)));return s.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:l},(a,u)=>s.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[s.jsx(zt,{w:o,h:o,radius:o*.25}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx(oe,{w:`${40+u*13%20}%`,h:3,strong:!0}),s.jsx(oe,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function E1({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),l=Math.min(36,n*.25);return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[s.jsx(oe,{w:t*.3,h:4,strong:!0}),s.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:o},(a,u)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[s.jsx(Zn,{size:l}),s.jsx(oe,{w:t*.12,h:3,strong:!0}),s.jsx(oe,{w:t*.08,h:2})]},u))})]})}function R1({width:t,height:n}){const o=Math.max(2,Math.min(3,Math.floor(n/80)));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[s.jsx(oe,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),s.jsx(oe,{w:t*.35,h:2}),s.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:o},(l,a)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[s.jsx(oe,{w:Math.min(60,t*.2),h:2}),s.jsx(zt,{w:"100%",h:Math.min(32,n*.1),radius:4})]},a))}),s.jsx(zt,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),s.jsx(oe,{w:t*.4,h:2})]})}function T1({width:t,height:n}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[s.jsx(oe,{w:t*.4,h:4,strong:!0}),s.jsx(oe,{w:t*.6,h:2}),s.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(oe,{w:50,h:2}),s.jsx(zt,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(oe,{w:40,h:2}),s.jsx(zt,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[s.jsx(oe,{w:50,h:2}),s.jsx(zt,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[s.jsx(oe,{w:60,h:2}),s.jsx(zt,{w:"100%",h:"100%",radius:4})]}),s.jsx(zt,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var N1={navigation:yy,hero:xy,sidebar:vy,footer:wy,modal:by,card:ky,text:Sy,image:Cy,table:jy,list:Ey,button:Ry,input:Ty,form:Ny,tabs:My,avatar:Iy,badge:Ly,header:Py,section:Oy,grid:Ay,dropdown:$y,toggle:By,search:Dy,toast:zy,progress:Fy,chart:Wy,video:Uy,tooltip:Hy,breadcrumb:Yy,pagination:Vy,divider:Xy,accordion:qy,carousel:Qy,pricing:Ky,testimonial:Gy,cta:Jy,alert:Zy,banner:e1,stat:t1,stepper:n1,tag:r1,rating:o1,map:s1,timeline:i1,fileUpload:l1,codeBlock:a1,calendar:c1,notification:u1,productCard:d1,profile:f1,drawer:h1,popover:p1,logo:_1,faq:m1,gallery:g1,checkbox:y1,radio:x1,slider:v1,datePicker:w1,skeleton:b1,chip:k1,icon:S1,spinner:C1,feature:j1,team:E1,login:R1,contact:T1};function M1({type:t,width:n,height:o,text:l}){const a=N1[t];return a?s.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:s.jsx(a,{width:n,height:o,text:l})}):s.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var I1=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,L1={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=I1}var te=L1,yi=24,Xa=5;function Tp(t,n,o,l,a){let u=1/0,f=1/0;const p=t.x,_=t.x+t.width,w=t.x+t.width/2,y=t.y,x=t.y+t.height,b=t.y+t.height/2,P=!l,N=P?[p,_,w]:[...l.left?[p]:[],...l.right?[_]:[]],M=P?[y,x,b]:[...l.top?[y]:[],...l.bottom?[x]:[]],I=[];for(const Te of n)o.has(Te.id)||I.push(Te);a&&I.push(...a);for(const Te of I){const tt=Te.x,Ge=Te.x+Te.width,ce=Te.x+Te.width/2,me=Te.y,de=Te.y+Te.height,ze=Te.y+Te.height/2;for(const D of N)for(const X of[tt,Ge,ce]){const G=X-D;Math.abs(G)<Xa&&Math.abs(G)<Math.abs(u)&&(u=G)}for(const D of M)for(const X of[me,de,ze]){const G=X-D;Math.abs(G)<Xa&&Math.abs(G)<Math.abs(f)&&(f=G)}}const R=Math.abs(u)<Xa?u:0,Y=Math.abs(f)<Xa?f:0,Q=[],$=new Set,ie=p+R,re=_+R,ne=w+R,De=y+Y,rt=x+Y,Le=b+Y;for(const Te of I){const tt=Te.x,Ge=Te.x+Te.width,ce=Te.x+Te.width/2,me=Te.y,de=Te.y+Te.height,ze=Te.y+Te.height/2;for(const D of[tt,ce,Ge])for(const X of[ie,ne,re])if(Math.abs(X-D)<.5){const G=`x:${Math.round(D)}`;$.has(G)||($.add(G),Q.push({axis:"x",pos:D}))}for(const D of[me,ze,de])for(const X of[De,Le,rt])if(Math.abs(X-D)<.5){const G=`y:${Math.round(D)}`;$.has(G)||($.add(G),Q.push({axis:"y",pos:D}))}}return{dx:R,dy:Y,guides:Q}}function Np(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function P1({placements:t,onChange:n,activeComponent:o,onActiveComponentChange:l,isDarkMode:a,exiting:u,onInteractionChange:f,className:p,passthrough:_,extraSnapRects:w,onSelectionChange:y,deselectSignal:x,onDragMove:b,onDragEnd:P,clearSignal:N,wireframe:M}){const[I,R]=m.useState(new Set),[Y,Q]=m.useState(null),[$,ie]=m.useState(null),[re,ne]=m.useState(null),[De,rt]=m.useState([]),[Le,Te]=m.useState(null),[tt,Ge]=m.useState(!1),ce=m.useRef(!1),[me,de]=m.useState(new Set),ze=m.useRef(new Map),D=m.useRef(null),X=m.useRef(null),G=m.useRef(t);G.current=t;const j=m.useRef(y);j.current=y;const H=m.useRef(b);H.current=b;const ge=m.useRef(P);ge.current=P;const Se=m.useRef(x);m.useEffect(()=>{x!==Se.current&&(Se.current=x,R(new Set))},[x]);const Fe=m.useRef(N);m.useEffect(()=>{if(N!==void 0&&N!==Fe.current){Fe.current=N;const J=new Set(G.current.map(Re=>Re.id));J.size>0&&(de(J),R(new Set),X.current=null,nt(()=>{n([]),de(new Set)},180))}},[N,n]),m.useEffect(()=>{const J=Re=>{const ot=Re.target;if(!(ot.tagName==="INPUT"||ot.tagName==="TEXTAREA"||ot.isContentEditable)){if((Re.key==="Backspace"||Re.key==="Delete")&&I.size>0){Re.preventDefault();const dt=new Set(I);de(dt),R(new Set),nt(()=>{n(G.current.filter(mt=>!dt.has(mt.id))),de(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Re.key)&&I.size>0){Re.preventDefault();const dt=Re.shiftKey?20:1,mt=Re.key==="ArrowLeft"?-dt:Re.key==="ArrowRight"?dt:0,Ct=Re.key==="ArrowUp"?-dt:Re.key==="ArrowDown"?dt:0;n(t.map(ft=>I.has(ft.id)?{...ft,x:Math.max(0,ft.x+mt),y:Math.max(0,ft.y+Ct)}:ft));return}if(Re.key==="Escape"){o?l(null):I.size>0&&R(new Set);return}}};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[I,o,t,n,l]);const q=m.useCallback(J=>{if(J.button!==0||_||J.target.closest(`.${te.placement}`))return;J.preventDefault(),J.stopPropagation();const ot=window.scrollY,Ve=J.clientX,dt=J.clientY;if(o){X.current="place",f==null||f(!0);let mt=!1,Ct=Ve,ft=dt;const Nt=We=>{Ct=We.clientX,ft=We.clientY;const z=Math.abs(Ct-Ve),W=Math.abs(ft-dt);if((z>5||W>5)&&(mt=!0),mt){const ee=Math.min(Ve,Ct),se=Math.min(dt,ft),Be=Math.abs(Ct-Ve),Me=Math.abs(ft-dt);Q({x:ee,y:se,w:Be,h:Me}),ne({x:We.clientX+12,y:We.clientY+12,text:`${Math.round(Be)} × ${Math.round(Me)}`})}},Ft=We=>{window.removeEventListener("mousemove",Nt),window.removeEventListener("mouseup",Ft),Q(null),ne(null),X.current=null,f==null||f(!1);const z=Ne[o];let W,ee,se,Be;mt?(W=Math.min(Ve,Ct),ee=Math.min(dt,ft)+ot,se=Math.max(yi,Math.abs(Ct-Ve)),Be=Math.max(yi,Math.abs(ft-dt))):(se=z.width,Be=z.height,W=Ve-se/2,ee=dt+ot-Be/2),W=Math.max(0,W),ee=Math.max(0,ee);const Me={id:Np(),type:o,x:W,y:ee,width:se,height:Be,scrollY:ot,timestamp:Date.now()},pe=[...t,Me];n(pe),R(new Set([Me.id])),l(null)};window.addEventListener("mousemove",Nt),window.addEventListener("mouseup",Ft)}else{J.shiftKey||R(new Set),X.current="select";let mt=!1;const Ct=Nt=>{const Ft=Math.abs(Nt.clientX-Ve),We=Math.abs(Nt.clientY-dt);if((Ft>4||We>4)&&(mt=!0),mt){const z=Math.min(Ve,Nt.clientX),W=Math.min(dt,Nt.clientY);ie({x:z,y:W,w:Math.abs(Nt.clientX-Ve),h:Math.abs(Nt.clientY-dt)})}},ft=Nt=>{if(window.removeEventListener("mousemove",Ct),window.removeEventListener("mouseup",ft),X.current=null,mt){const Ft=Math.min(Ve,Nt.clientX),We=Math.min(dt,Nt.clientY)+ot,z=Math.abs(Nt.clientX-Ve),W=Math.abs(Nt.clientY-dt),ee=new Set(J.shiftKey?I:new Set);for(const se of t)se.y-ot,se.x+se.width>Ft&&se.x<Ft+z&&se.y+se.height>We&&se.y<We+W&&ee.add(se.id);R(ee)}ie(null)};window.addEventListener("mousemove",Ct),window.addEventListener("mouseup",ft)}},[o,_,t,n,I]),ve=m.useCallback((J,Re)=>{var Me;if(J.button!==0)return;const ot=J.target;if(ot.closest(`.${te.handle}`)||ot.closest(`.${te.deleteButton}`))return;J.preventDefault(),J.stopPropagation();let Ve;J.shiftKey?(Ve=new Set(I),Ve.has(Re)?Ve.delete(Re):Ve.add(Re)):I.has(Re)?Ve=new Set(I):Ve=new Set([Re]),R(Ve),(Ve.size!==I.size||[...Ve].some(pe=>!I.has(pe)))&&((Me=j.current)==null||Me.call(j,Ve,J.shiftKey));const mt=J.clientX,Ct=J.clientY,ft=new Map;for(const pe of t)Ve.has(pe.id)&&ft.set(pe.id,{x:pe.x,y:pe.y});X.current="move",f==null||f(!0);let Nt=!1,Ft=!1,We=t,z=0,W=0;const ee=new Map;for(const pe of t)ft.has(pe.id)&&ee.set(pe.id,{w:pe.width,h:pe.height});const se=pe=>{var nn;const xt=pe.clientX-mt,ct=pe.clientY-Ct;if((Math.abs(xt)>2||Math.abs(ct)>2)&&(Nt=!0),!Nt)return;if(pe.altKey&&!Ft){Ft=!0;const qe=[];for(const St of t)ft.has(St.id)&&qe.push({...St,id:Np(),timestamp:Date.now()});We=[...t,...qe]}let bt=1/0,Je=1/0,Ce=-1/0,gt=-1/0;for(const[qe,St]of ft){const un=ee.get(qe);un&&(bt=Math.min(bt,St.x+xt),Je=Math.min(Je,St.y+ct),Ce=Math.max(Ce,St.x+xt+un.w),gt=Math.max(gt,St.y+ct+un.h))}const kt={x:bt,y:Je,width:Ce-bt,height:gt-Je},{dx:cn,dy:je,guides:jt}=Tp(kt,We,new Set(ft.keys()),void 0,w);rt(jt);const yt=xt+cn,ht=ct+je;z=yt,W=ht,n(We.map(qe=>{const St=ft.get(qe.id);return St?{...qe,x:Math.max(0,St.x+yt),y:Math.max(0,St.y+ht)}:qe})),(nn=H.current)==null||nn.call(H,yt,ht)},Be=()=>{var pe;window.removeEventListener("mousemove",se),window.removeEventListener("mouseup",Be),X.current=null,f==null||f(!1),rt([]),(pe=ge.current)==null||pe.call(ge,z,W,Nt)};window.addEventListener("mousemove",se),window.addEventListener("mouseup",Be)},[I,t,n,f]),Pe=m.useCallback((J,Re,ot)=>{J.preventDefault(),J.stopPropagation();const Ve=t.find(ee=>ee.id===Re);if(!Ve)return;R(new Set([Re])),X.current="resize",f==null||f(!0);const dt=J.clientX,mt=J.clientY,Ct=Ve.width,ft=Ve.height,Nt=Ve.x,Ft=Ve.y,We={left:ot.includes("w"),right:ot.includes("e"),top:ot.includes("n"),bottom:ot.includes("s")},z=ee=>{const se=ee.clientX-dt,Be=ee.clientY-mt;let Me=Ct,pe=ft,xt=Nt,ct=Ft;ot.includes("e")&&(Me=Math.max(yi,Ct+se)),ot.includes("w")&&(Me=Math.max(yi,Ct-se),xt=Nt+Ct-Me),ot.includes("s")&&(pe=Math.max(yi,ft+Be)),ot.includes("n")&&(pe=Math.max(yi,ft-Be),ct=Ft+ft-pe);const bt={x:xt,y:ct,width:Me,height:pe},{dx:Je,dy:Ce,guides:gt}=Tp(bt,G.current,new Set([Re]),We,w);rt(gt),Je!==0&&(We.right?Me+=Je:We.left&&(xt+=Je,Me-=Je)),Ce!==0&&(We.bottom?pe+=Ce:We.top&&(ct+=Ce,pe-=Ce)),n(G.current.map(kt=>kt.id===Re?{...kt,x:xt,y:ct,width:Me,height:pe}:kt)),ne({x:ee.clientX+12,y:ee.clientY+12,text:`${Math.round(Me)} × ${Math.round(pe)}`})},W=()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",W),ne(null),X.current=null,f==null||f(!1),rt([])};window.addEventListener("mousemove",z),window.addEventListener("mouseup",W)},[t,n,f]),ut=m.useCallback(J=>{X.current=null,de(Re=>{const ot=new Set(Re);return ot.add(J),ot}),R(Re=>{const ot=new Set(Re);return ot.delete(J),ot}),nt(()=>{n(G.current.filter(Re=>Re.id!==J)),de(Re=>{const ot=new Set(Re);return ot.delete(J),ot})},180)},[n]),Bt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Dt=m.useCallback(J=>{const Re=t.find(ot=>ot.id===J);Re&&(ce.current=!!Re.text,Te(J),Ge(!1))},[t]),_t=m.useCallback(()=>{Le&&(Ge(!0),nt(()=>{Te(null),Ge(!1)},150))},[Le]);m.useEffect(()=>{u&&Le&&_t()},[u]);const Ht=m.useCallback(J=>{Le&&(n(t.map(Re=>Re.id===Le?{...Re,text:J.trim()||void 0}:Re)),_t())},[Le,t,n,_t]),Tt=typeof window<"u"?window.scrollY:0,an=["nw","ne","se","sw"],Xe=M?"#f97316":"#3c82f7",Xt=[{dir:"n",cls:te.edgeN,arrow:s.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:s.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Xe})})},{dir:"e",cls:te.edgeE,arrow:s.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:s.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Xe})})},{dir:"s",cls:te.edgeS,arrow:s.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:s.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Xe})})},{dir:"w",cls:te.edgeW,arrow:s.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:s.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Xe})})}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:D,className:`${te.overlay} ${a?"":te.light} ${o?te.placing:""} ${_?te.passthrough:""} ${u?te.overlayExiting:""} ${M?te.wireframe:""}${p?` ${p}`:""}`,"data-feedback-toolbar":!0,onMouseDown:q,children:t.map(J=>{var dt;const Re=I.has(J.id),ot=((dt=zr[J.type])==null?void 0:dt.label)||J.type,Ve=J.y-Tt;return s.jsxs("div",{"data-design-placement":J.id,className:`${te.placement} ${Re?te.selected:""} ${me.has(J.id)?te.exiting:""}`,style:{left:J.x,top:Ve,width:J.width,height:J.height,position:"fixed"},onMouseDown:mt=>ve(mt,J.id),onDoubleClick:()=>Dt(J.id),children:[s.jsx("span",{className:te.placementLabel,children:ot}),s.jsx("span",{className:`${te.placementAnnotation} ${J.text?te.annotationVisible:""}`,children:(J.text&&ze.current.set(J.id,J.text),J.text||ze.current.get(J.id)||"")}),s.jsx("div",{className:te.placementContent,children:s.jsx(M1,{type:J.type,width:J.width,height:J.height,text:J.text})}),s.jsx("div",{className:te.deleteButton,onMouseDown:mt=>mt.stopPropagation(),onClick:()=>ut(J.id),children:"✕"}),an.map(mt=>s.jsx("div",{className:`${te.handle} ${te[`handle${mt.charAt(0).toUpperCase()}${mt.slice(1)}`]}`,onMouseDown:Ct=>Pe(Ct,J.id,mt)},mt)),Xt.map(({dir:mt,cls:Ct,arrow:ft})=>s.jsx("div",{className:`${te.edgeHandle} ${Ct}`,onMouseDown:Nt=>Pe(Nt,J.id,mt),children:ft},mt))]},J.id)})}),Le&&(()=>{var Ft;const J=t.find(We=>We.id===Le);if(!J)return null;const Re=J.y-Tt,ot=J.x+J.width/2,Ve=Re-8,dt=Re+J.height+8,mt=Ve>200,Ct=dt<window.innerHeight-100,ft=Math.max(160,Math.min(window.innerWidth-160,ot));let Nt;return mt?Nt={left:ft,bottom:window.innerHeight-Ve}:Ct?Nt={left:ft,top:dt}:Nt={left:ft,top:Math.max(80,window.innerHeight/2-80)},s.jsx(mc,{element:((Ft=zr[J.type])==null?void 0:Ft.label)||J.type,placeholder:Bt[J.type]||"Label or content text",initialValue:J.text??"",submitLabel:ce.current?"Save":"Set",onSubmit:Ht,onCancel:_t,onDelete:ce.current?()=>{Ht("")}:void 0,isExiting:tt,lightMode:!a,style:Nt})})(),Y&&s.jsx("div",{className:te.drawBox,style:{left:Y.x,top:Y.y,width:Y.w,height:Y.h},"data-feedback-toolbar":!0}),$&&s.jsx("div",{className:te.selectBox,style:{left:$.x,top:$.y,width:$.w,height:$.h},"data-feedback-toolbar":!0}),re&&s.jsx("div",{className:te.sizeIndicator,style:{left:re.x,top:re.y},"data-feedback-toolbar":!0,children:re.text}),De.map((J,Re)=>s.jsx("div",{className:te.guideLine,style:J.axis==="x"?{position:"fixed",left:J.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:J.pos-Tt,right:0,height:1},"data-feedback-toolbar":!0},`${J.axis}-${J.pos}-${Re}`))]})}function O1(t){if(!t)return"";const n=t.scrollTop>2,o=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?te.fadeTop:""} ${o?te.fadeBottom:""}`}var k="currentColor",Z="0.5";function A1({type:t}){switch(t){case"navigation":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:k,opacity:".4"}),s.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:k,opacity:".25"})]});case"header":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:k,opacity:".35"}),s.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:k,opacity:".15"})]});case"hero":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:k,opacity:".35"}),s.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:k,strokeWidth:Z})]});case"section":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:k,opacity:".3"}),s.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:k,opacity:".15"})]});case"sidebar":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:k,opacity:".3"}),s.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:k,opacity:".15"})]});case"footer":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:k,opacity:".2"})]});case"modal":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:k,opacity:".3"}),s.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:k,strokeWidth:Z})]});case"divider":return s.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:s.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:k,strokeWidth:"0.5",opacity:".3"})});case"card":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:k,opacity:".04"}),s.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:k,opacity:".12"})]});case"text":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:k,opacity:".3"}),s.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:k,opacity:".12"})]});case"image":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:k,strokeWidth:".3",opacity:".25"}),s.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:k,strokeWidth:".3",opacity:".25"})]});case"video":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:k,strokeWidth:Z,fill:k,opacity:".15"})]});case"table":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:k,strokeWidth:".3",opacity:".25"}),s.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:k,strokeWidth:".3",opacity:".25"}),s.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:k,strokeWidth:".3",opacity:".25"}),s.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:k,strokeWidth:".3",opacity:".25"})]});case"grid":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:k,strokeWidth:Z})]});case"list":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:k,opacity:".2"})]});case"chart":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:k,opacity:".2"}),s.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:k,opacity:".3"}),s.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:k,opacity:".2"})]});case"accordion":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:k,strokeWidth:Z})]});case"carousel":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:k,strokeWidth:Z,opacity:".35"}),s.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:k,strokeWidth:Z,opacity:".35"}),s.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:k,opacity:".35"}),s.jsx("circle",{cx:"10",cy:"14",r:".6",fill:k,opacity:".15"}),s.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:k,opacity:".15"})]});case"button":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:k,opacity:".25"})]});case"input":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:k,opacity:".12"})]});case"search":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:k,strokeWidth:Z}),s.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:k,strokeWidth:Z,opacity:".3"}),s.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:k,strokeWidth:Z,opacity:".3"}),s.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:k,opacity:".12"})]});case"form":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:k,strokeWidth:Z})]});case"tabs":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:k,strokeWidth:Z})]});case"dropdown":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:k,strokeWidth:Z,opacity:".3"}),s.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:k,strokeWidth:Z,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:k,strokeWidth:Z}),s.jsx("circle",{cx:"13",cy:"8",r:"2",fill:k,opacity:".3"})]});case"avatar":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:k,strokeWidth:Z}),s.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:k,strokeWidth:Z}),s.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:k,strokeWidth:Z})]});case"badge":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:k,opacity:".25"})]});case"breadcrumb":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:k,opacity:".3"}),s.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:k,strokeWidth:Z,opacity:".2"}),s.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("path",{d:"M14 7l1 1-1 1",stroke:k,strokeWidth:Z,opacity:".2"}),s.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:k,opacity:".15"})]});case"pagination":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:k,opacity:".15",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:k,strokeWidth:Z})]});case"progress":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:k,opacity:".2"})]});case"toast":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:k,strokeWidth:Z,opacity:".3"}),s.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".12"})]});case"tooltip":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:k,strokeWidth:Z})]});case"pricing":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:k,opacity:".1"}),s.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:k,opacity:".1"}),s.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:k,opacity:".2"})]});case"testimonial":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:k,opacity:".2",fontFamily:"serif",children:"“"}),s.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:k,opacity:".12"}),s.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:k,strokeWidth:Z,opacity:".25"}),s.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:k,opacity:".15"})]});case"cta":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:k,opacity:".3"}),s.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:k,strokeWidth:Z})]});case"alert":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:k,strokeWidth:Z,opacity:".3"}),s.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:k,strokeWidth:"0.6",opacity:".5"}),s.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:k,opacity:".5"}),s.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:k,opacity:".2"})]});case"banner":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:k,strokeWidth:Z})]});case"stat":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:k,opacity:".3"}),s.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:k,opacity:".12"})]});case"stepper":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"4",cy:"8",r:"2",fill:k,opacity:".2",stroke:k,strokeWidth:Z}),s.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:k,strokeWidth:".4",opacity:".3"}),s.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:k,strokeWidth:Z}),s.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:k,strokeWidth:".4",opacity:".3"}),s.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:k,strokeWidth:Z})]});case"tag":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:k,strokeWidth:Z,opacity:".2"}),s.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:k,strokeWidth:Z,opacity:".2"})]});case"rating":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:k,opacity:".25"}),s.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:k,opacity:".25"}),s.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:k,strokeWidth:Z,opacity:".25"})]});case"map":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:k,strokeWidth:".3",opacity:".15"}),s.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:k,strokeWidth:".3",opacity:".15"}),s.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:k,opacity:".15",stroke:k,strokeWidth:Z})]});case"timeline":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:k,strokeWidth:".4",opacity:".25"}),s.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:k,opacity:".2",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:k,opacity:".15"})]});case"fileUpload":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:k,strokeWidth:Z,strokeDasharray:"2 1"}),s.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:k,strokeWidth:Z,opacity:".3"}),s.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:k,opacity:".15"})]});case"codeBlock":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("circle",{cx:"4",cy:"4",r:".6",fill:k,opacity:".3"}),s.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:k,opacity:".3"}),s.jsx("circle",{cx:"7",cy:"4",r:".6",fill:k,opacity:".3"}),s.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:k,opacity:".12"})]});case"calendar":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:k,strokeWidth:".4",opacity:".25"}),s.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:k,opacity:".2"}),s.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:k,opacity:".2"}),s.jsx("circle",{cx:"7",cy:"9",r:".6",fill:k,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"9",r:".6",fill:k,opacity:".2"}),s.jsx("circle",{cx:"13",cy:"9",r:".6",fill:k,opacity:".3"}),s.jsx("circle",{cx:"7",cy:"12",r:".6",fill:k,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"12",r:".6",fill:k,opacity:".2"})]});case"notification":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:k,strokeWidth:Z,opacity:".25"}),s.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:k,opacity:".12"}),s.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:k,opacity:".25"})]});case"productCard":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:k,opacity:".04"}),s.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:k,strokeWidth:Z})]});case"profile":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:k,opacity:".12"})]});case"drawer":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:k,strokeWidth:Z,opacity:".15"})]});case"popover":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:k,strokeWidth:Z})]});case"logo":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:k,strokeWidth:Z}),s.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:k,strokeWidth:Z,opacity:".3"}),s.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:k,opacity:".12"})]});case"faq":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:k,opacity:".3",fontWeight:"bold",children:"?"}),s.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:k,opacity:".12"}),s.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:k,opacity:".3",fontWeight:"bold",children:"?"}),s.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:k,opacity:".12"})]});case"gallery":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:Z})]});case"checkbox":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:k,strokeWidth:Z,opacity:".35"})]});case"radio":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:k,strokeWidth:Z}),s.jsx("circle",{cx:"10",cy:"8",r:"2",fill:k,opacity:".3"})]});case"slider":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:k,strokeWidth:Z})]});case"datePicker":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:k,opacity:".12"}),s.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:k,strokeWidth:Z,strokeDasharray:"2 1",opacity:".3"}),s.jsx("circle",{cx:"6",cy:"10",r:".6",fill:k,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"10",r:".6",fill:k,opacity:".3"}),s.jsx("circle",{cx:"14",cy:"10",r:".6",fill:k,opacity:".2"}),s.jsx("circle",{cx:"6",cy:"13",r:".6",fill:k,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"13",r:".6",fill:k,opacity:".2"})]});case"skeleton":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:k,opacity:".08"}),s.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:k,opacity:".08"}),s.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:k,opacity:".08"})]});case"chip":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:k,opacity:".08",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:k,opacity:".25"}),s.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:k,strokeWidth:Z,opacity:".2"}),s.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:k,strokeWidth:Z,opacity:".2"}),s.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:k,strokeWidth:Z,opacity:".25"})]});case"icon":return s.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:s.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:k,strokeWidth:Z,opacity:".3"})});case"spinner":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:k,strokeWidth:Z,opacity:".12"}),s.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:k,strokeWidth:Z,opacity:".35",strokeLinecap:"round"})]});case"feature":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:k,strokeWidth:Z,opacity:".25"}),s.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:k,opacity:".12"}),s.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:k,opacity:".12"})]});case"team":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:k,strokeWidth:Z,opacity:".5"}),s.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".15"}),s.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:k,opacity:".1"})]});case"login":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:k,opacity:".25"}),s.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:k,opacity:".2"})]});case"contact":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:k,opacity:".2"}),s.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:k,strokeWidth:Z}),s.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:k,opacity:".2"})]});default:return null}}function $1({activeType:t,onSelect:n,onDragStart:o,scrollRef:l,fadeClass:a,blankCanvas:u}){return s.jsx("div",{ref:l,className:`${te.placeScroll} ${a||""}`,children:U_.map(f=>s.jsxs("div",{className:te.paletteSection,children:[s.jsx("div",{className:te.paletteSectionTitle,children:f.section}),f.items.map(p=>s.jsxs("div",{className:`${te.paletteItem} ${t===p.type?te.active:""} ${u?te.wireframe:""}`,onClick:()=>n(p.type),onMouseDown:_=>{_.button===0&&o(p.type,_)},children:[s.jsx("div",{className:te.paletteItemIcon,children:s.jsx(A1,{type:p.type})}),s.jsx("span",{className:te.paletteItemLabel,children:p.label})]},p.type))]},f.section))})}function B1({value:t,suffix:n}){const[o,l]=m.useState(null),[a,u]=m.useState(n),[f,p]=m.useState("up"),_=m.useRef(t),w=m.useRef(n),y=m.useRef(),x=o!==null&&a!==n;return m.useEffect(()=>{if(t!==_.current){if(t===0){_.current=t,w.current=n,l(null);return}p(t>_.current?"up":"down"),l(_.current),u(w.current),_.current=t,w.current=n,clearTimeout(y.current),y.current=nt(()=>l(null),250)}else w.current=n},[t,n]),o===null?s.jsxs(s.Fragment,{children:[t,n?` ${n}`:""]}):x?s.jsxs("span",{className:te.rollingWrap,children:[s.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),s.jsxs("span",{className:`${te.rollingNum} ${f==="up"?te.exitUp:te.exitDown}`,children:[o," ",a]},`o${o}-${t}`),s.jsxs("span",{className:`${te.rollingNum} ${f==="up"?te.enterUp:te.enterDown}`,children:[t," ",n]},`n${t}`)]}):s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:te.rollingWrap,children:[s.jsx("span",{style:{visibility:"hidden"},children:t}),s.jsx("span",{className:`${te.rollingNum} ${f==="up"?te.exitUp:te.exitDown}`,children:o},`o${o}-${t}`),s.jsx("span",{className:`${te.rollingNum} ${f==="up"?te.enterUp:te.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function D1({activeType:t,onSelect:n,isDarkMode:o,sectionCount:l,onDetectSections:a,visible:u,onExited:f,placementCount:p,onClearPlacements:_,onDragStart:w,blankCanvas:y,onBlankCanvasChange:x,wireframePurpose:b,onWireframePurposeChange:P,Tooltip:N}){const[M,I]=m.useState(!1),[R,Y]=m.useState("exit"),[Q,$]=m.useState(!1),[ie,re]=m.useState(!0),ne=m.useRef(0),De=m.useRef(""),rt=m.useRef(0),Le=m.useRef(),Te=m.useRef(null),[tt,Ge]=m.useState("");m.useEffect(()=>(u?(I(!0),clearTimeout(Le.current),cancelAnimationFrame(rt.current),rt.current=Si(()=>{rt.current=Si(()=>{Y("enter")})})):(cancelAnimationFrame(rt.current),Y("exit"),clearTimeout(Le.current),Le.current=nt(()=>{I(!1),f==null||f()},200)),()=>cancelAnimationFrame(rt.current)),[u]);const ce=p>0||l>0,me=p+l;return me>0&&(ne.current=me,De.current=y?me===1?"Component":"Components":me===1?"Change":"Changes"),m.useEffect(()=>{if(ce)Q?re(!1):(re(!0),$(!0),Si(()=>{Si(()=>{re(!1)})}));else{re(!0);const de=nt(()=>$(!1),300);return()=>clearTimeout(de)}},[ce]),m.useEffect(()=>{if(!M)return;const de=Te.current;if(!de)return;const ze=()=>Ge(O1(de));ze(),de.addEventListener("scroll",ze,{passive:!0});const D=new ResizeObserver(ze);return D.observe(de),()=>{de.removeEventListener("scroll",ze),D.disconnect()}},[M]),M?s.jsxs("div",{className:`${te.palette} ${te[R]} ${o?"":te.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:de=>de.stopPropagation(),onMouseDown:de=>de.stopPropagation(),onTransitionEnd:de=>{de.target===de.currentTarget&&(u||(clearTimeout(Le.current),I(!1),Y("exit"),f==null||f()))},children:[s.jsxs("div",{className:te.paletteHeader,children:[s.jsx("div",{className:te.paletteHeaderTitle,children:"Layout Mode"}),s.jsxs("div",{className:te.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",s.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),s.jsxs("div",{className:`${te.canvasToggle} ${y?te.active:""}`,onClick:()=>x(!y),children:[s.jsx("span",{className:te.canvasToggleIcon,children:s.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),s.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),s.jsx("span",{className:te.canvasToggleLabel,children:"Wireframe New Page"})]}),s.jsx("div",{className:`${te.wireframePurposeWrap} ${y?"":te.collapsed}`,children:s.jsx("div",{className:te.wireframePurposeInner,children:s.jsx("textarea",{className:te.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:b,onChange:de=>P(de.target.value),rows:2})})}),s.jsx($1,{activeType:t,onSelect:n,onDragStart:w,scrollRef:Te,fadeClass:tt,blankCanvas:y}),Q&&s.jsx("div",{className:`${te.paletteFooterWrap} ${ie?te.footerHidden:""}`,children:s.jsx("div",{className:te.paletteFooterInner,children:s.jsx("div",{className:te.paletteFooterInnerContent,children:s.jsxs("div",{className:te.paletteFooter,children:[s.jsx("span",{className:te.paletteFooterCount,children:s.jsx(B1,{value:ne.current,suffix:De.current})}),s.jsx("button",{className:te.paletteFooterClear,onClick:_,children:"Clear"})]})})})})]}):null}function ji(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function Jn(t,n){let o=t;for(;o;){if(o.matches(n))return o;o=ji(o)}return null}function z1(t,n=4){const o=[];let l=t,a=0;for(;l&&a<n;){const u=l.tagName.toLowerCase();if(u==="html"||u==="body")break;let f=u;if(l.id)f=`#${l.id}`;else if(l.className&&typeof l.className=="string"){const _=l.className.split(/\s+/).find(w=>w.length>2&&!w.match(/^[a-z]{1,2}$/)&&!w.match(/[A-Z0-9]{5,}/));_&&(f=`.${_.split("_")[0]}`)}const p=ji(l);!l.parentElement&&p&&(f=`⟨shadow⟩ ${f}`),o.unshift(f),l=p,a++}return o.join(" > ")}function Ci(t){var l,a,u,f,p,_,w,y;const n=z1(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const o=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(o)){const x=Jn(t,"svg");if(x){const b=ji(x);if(b instanceof HTMLElement)return{name:`graphic in ${Ci(b).name}`,path:n}}return{name:"graphic element",path:n}}if(o==="svg"){const x=ji(t);if((x==null?void 0:x.tagName.toLowerCase())==="button"){const b=(l=x.textContent)==null?void 0:l.trim();return{name:b?`icon in "${b}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(o==="button"){const x=(a=t.textContent)==null?void 0:a.trim(),b=t.getAttribute("aria-label");return b?{name:`button [${b}]`,path:n}:{name:x?`button "${x.slice(0,25)}"`:"button",path:n}}if(o==="a"){const x=(u=t.textContent)==null?void 0:u.trim(),b=t.getAttribute("href");return x?{name:`link "${x.slice(0,25)}"`,path:n}:b?{name:`link to ${b.slice(0,30)}`,path:n}:{name:"link",path:n}}if(o==="input"){const x=t.getAttribute("type")||"text",b=t.getAttribute("placeholder"),P=t.getAttribute("name");return b?{name:`input "${b}"`,path:n}:P?{name:`input [${P}]`,path:n}:{name:`${x} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(o)){const x=(f=t.textContent)==null?void 0:f.trim();return{name:x?`${o} "${x.slice(0,35)}"`:o,path:n}}if(o==="p"){const x=(p=t.textContent)==null?void 0:p.trim();return x?{name:`paragraph: "${x.slice(0,40)}${x.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(o==="span"||o==="label"){const x=(_=t.textContent)==null?void 0:_.trim();return x&&x.length<40?{name:`"${x}"`,path:n}:{name:o,path:n}}if(o==="li"){const x=(w=t.textContent)==null?void 0:w.trim();return x&&x.length<40?{name:`list item: "${x.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(o==="blockquote")return{name:"blockquote",path:n};if(o==="code"){const x=(y=t.textContent)==null?void 0:y.trim();return x&&x.length<30?{name:`code: \`${x}\``,path:n}:{name:"code",path:n}}if(o==="pre")return{name:"code block",path:n};if(o==="img"){const x=t.getAttribute("alt");return{name:x?`image "${x.slice(0,30)}"`:"image",path:n}}if(o==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(o)){const x=t.className,b=t.getAttribute("role"),P=t.getAttribute("aria-label");if(P)return{name:`${o} [${P}]`,path:n};if(b)return{name:`${b}`,path:n};if(typeof x=="string"&&x){const N=x.split(/[\s_-]+/).map(M=>M.replace(/[A-Z0-9]{5,}.*$/,"")).filter(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M)).slice(0,2);if(N.length>0)return{name:N.join(" "),path:n}}return{name:o==="div"?"container":o,path:n}}return{name:o,path:n}}function xl(t){var u,f,p;const n=[],o=(u=t.textContent)==null?void 0:u.trim();o&&o.length<100&&n.push(o);const l=t.previousElementSibling;if(l){const _=(f=l.textContent)==null?void 0:f.trim();_&&_.length<50&&n.unshift(`[before: "${_.slice(0,40)}"]`)}const a=t.nextElementSibling;if(a){const _=(p=a.textContent)==null?void 0:p.trim();_&&_.length<50&&n.push(`[after: "${_.slice(0,40)}"]`)}return n.join(" ")}function qa(t){const n=ji(t);if(!n)return"";const a=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(y=>y!==t&&y instanceof HTMLElement);if(a.length===0)return"";const u=a.slice(0,4).map(y=>{var N;const x=y.tagName.toLowerCase(),b=y.className;let P="";if(typeof b=="string"&&b){const M=b.split(/\s+/).map(I=>I.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(I=>I.length>2&&!/^[a-z]{1,2}$/.test(I));M&&(P=`.${M}`)}if(x==="button"||x==="a"){const M=(N=y.textContent)==null?void 0:N.trim().slice(0,15);if(M)return`${x}${P} "${M}"`}return`${x}${P}`});let p=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const y=n.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));y&&(p=`.${y}`)}const _=n.children.length,w=_>u.length+1?` (${_} total in ${p})`:"";return u.join(", ")+w}function vl(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(l=>l.length>0).map(l=>{const a=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return a?a[1]:l}).filter((l,a,u)=>u.indexOf(l)===a).join(", ")}var H_=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),F1=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),W1=new Set(["input","textarea","select"]),U1=new Set(["img","video","canvas","svg"]),H1=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Qa(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),o={},l=t.tagName.toLowerCase();let a;F1.has(l)?a=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&t.getAttribute("role")==="button"?a=["backgroundColor","color","padding","borderRadius","fontSize"]:W1.has(l)?a=["backgroundColor","color","padding","borderRadius","fontSize"]:U1.has(l)?a=["width","height","objectFit","borderRadius"]:H1.has(l)?a=["display","padding","margin","gap","backgroundColor"]:a=["color","fontSize","margin","padding","backgroundColor"];for(const u of a){const f=u.replace(/([A-Z])/g,"-$1").toLowerCase(),p=n.getPropertyValue(f);p&&!H_.has(p)&&(o[u]=p)}return o}var Y1=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Ka(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),o=[];for(const l of Y1){const a=l.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(a);u&&!H_.has(u)&&o.push(`${a}: ${u}`)}return o.join("; ")}function V1(t){if(!t)return;const n={},o=t.split(";").map(l=>l.trim()).filter(Boolean);for(const l of o){const a=l.indexOf(":");if(a>0){const u=l.slice(0,a).trim(),f=l.slice(a+1).trim();u&&f&&(n[u]=f)}}return Object.keys(n).length>0?n:void 0}function Ga(t){const n=[],o=t.getAttribute("role"),l=t.getAttribute("aria-label"),a=t.getAttribute("aria-describedby"),u=t.getAttribute("tabindex"),f=t.getAttribute("aria-hidden");return o&&n.push(`role="${o}"`),l&&n.push(`aria-label="${l}"`),a&&n.push(`aria-describedby="${a}"`),u&&n.push(`tabindex=${u}`),f==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Ja(t){const n=[];let o=t;for(;o&&o.tagName.toLowerCase()!=="html";){const l=o.tagName.toLowerCase();let a=l;if(o.id)a=`${l}#${o.id}`;else if(o.className&&typeof o.className=="string"){const f=o.className.split(/\s+/).map(p=>p.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(p=>p.length>2);f&&(a=`${l}.${f}`)}const u=ji(o);!o.parentElement&&u&&(a=`⟨shadow⟩ ${a}`),n.unshift(a),o=u}return n.join(" > ")}var X1=new Set(["nav","header","main","section","article","footer","aside"]),Pd={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Mp={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},q1=new Set(["script","style","noscript","link","meta"]),Q1=40;function Y_(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const o=window.getComputedStyle(n).position;if(o==="fixed"||o==="sticky")return!0;n=n.parentElement}return!1}function $s(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const a=t.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(a){const u=`${n}.${CSS.escape(a)}`;if(document.querySelectorAll(u).length===1)return u}}const o=t.parentElement;if(o){const a=Array.from(o.children).indexOf(t)+1;return`${o===document.body?"body":$s(o)} > ${n}:nth-child(${a})`}return n}function gc(t){var f;const n=t.tagName.toLowerCase(),o=t.getAttribute("aria-label");if(o)return o;const l=t.getAttribute("role");if(l&&Pd[l])return Pd[l];if(Mp[n])return Mp[n];const a=t.querySelector("h1, h2, h3, h4, h5, h6");if(a){const p=(f=a.textContent)==null?void 0:f.trim();if(p&&p.length<=50)return p;if(p)return p.slice(0,47)+"..."}const{name:u}=Ci(t);return u.charAt(0).toUpperCase()+u.slice(1)}function V_(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(l=>l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(l=>l.length>2&&!/^[a-z]{1,2}$/.test(l))||null}function X_(t){var l;const n=(l=t.textContent)==null?void 0:l.trim();if(!n)return null;const o=n.replace(/\s+/g," ");return o.length<=30?o:o.slice(0,30)+"…"}function K1(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let o=n;t!==document.body&&n.length<3&&(o=Array.from(document.body.children));const l=[];return o.forEach((a,u)=>{if(!(a instanceof HTMLElement))return;const f=a.tagName.toLowerCase();if(q1.has(f)||a.hasAttribute("data-feedback-toolbar")||a.closest("[data-feedback-toolbar]"))return;const p=window.getComputedStyle(a);if(p.display==="none"||p.visibility==="hidden")return;const _=a.getBoundingClientRect();if(_.height<Q1)return;const w=X1.has(f),y=a.getAttribute("role")&&Pd[a.getAttribute("role")],x=f==="div"&&_.height>=60;if(!w&&!y&&!x)return;const b=window.scrollY,P=Y_(a),N={x:_.x,y:P?_.y:_.y+b,width:_.width,height:_.height};l.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:gc(a),tagName:f,selector:$s(a),role:a.getAttribute("role"),className:V_(a),textSnippet:X_(a),originalRect:N,currentRect:{...N},originalIndex:u,isFixed:P})}),l}function G1(t){const n=window.scrollY,o=t.getBoundingClientRect(),l=Y_(t),a={x:o.x,y:l?o.y:o.y+n,width:o.width,height:o.height},u=t.parentElement;let f=0;return u&&(f=Array.from(u.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:gc(t),tagName:t.tagName.toLowerCase(),selector:$s(t),role:t.getAttribute("role"),className:V_(t),textSnippet:X_(t),originalRect:a,currentRect:{...a},originalIndex:f,isFixed:l}}var Ip={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Lp=["nw","n","ne","e","se","s","sw","w"],Za=24,Pp=16,ec=5;function Op(t,n,o,l){let a=1/0,u=1/0;const f=t.x,p=t.x+t.width,_=t.x+t.width/2,w=t.y,y=t.y+t.height,x=t.y+t.height/2,b=[];for(const ne of n)o.has(ne.id)||b.push(ne.currentRect);l&&b.push(...l);for(const ne of b){const De=ne.x,rt=ne.x+ne.width,Le=ne.x+ne.width/2,Te=ne.y,tt=ne.y+ne.height,Ge=ne.y+ne.height/2;for(const ce of[f,p,_])for(const me of[De,rt,Le]){const de=me-ce;Math.abs(de)<ec&&Math.abs(de)<Math.abs(a)&&(a=de)}for(const ce of[w,y,x])for(const me of[Te,tt,Ge]){const de=me-ce;Math.abs(de)<ec&&Math.abs(de)<Math.abs(u)&&(u=de)}}const P=Math.abs(a)<ec?a:0,N=Math.abs(u)<ec?u:0,M=[],I=new Set,R=f+P,Y=p+P,Q=_+P,$=w+N,ie=y+N,re=x+N;for(const ne of b){const De=ne.x,rt=ne.x+ne.width,Le=ne.x+ne.width/2,Te=ne.y,tt=ne.y+ne.height,Ge=ne.y+ne.height/2;for(const ce of[De,Le,rt])for(const me of[R,Q,Y])if(Math.abs(me-ce)<.5){const de=`x:${Math.round(ce)}`;I.has(de)||(I.add(de),M.push({axis:"x",pos:ce}))}for(const ce of[Te,Ge,tt])for(const me of[$,re,ie])if(Math.abs(me-ce)<.5){const de=`y:${Math.round(ce)}`;I.has(de)||(I.add(de),M.push({axis:"y",pos:ce}))}}return{dx:P,dy:N,guides:M}}var J1=new Set(["script","style","noscript","link","meta","br","hr"]);function Ap(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(J1.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const o=n.getBoundingClientRect();if(o.width>=Pp&&o.height>=Pp)return n;n=n.parentElement}return null}function Z1({rearrangeState:t,onChange:n,isDarkMode:o,exiting:l,className:a,blankCanvas:u,extraSnapRects:f,onSelectionChange:p,deselectSignal:_,onDragMove:w,onDragEnd:y,clearSignal:x}){const{sections:b}=t,P=m.useRef(t);P.current=t;const[N,M]=m.useState(new Set),[I,R]=m.useState(!1),Y=m.useRef(x);m.useEffect(()=>{x!==void 0&&x!==Y.current&&(Y.current=x,b.length>0&&R(!0))},[x,b.length]);const Q=m.useRef(_);m.useEffect(()=>{_!==Q.current&&(Q.current=_,M(new Set))},[_]);const[$,ie]=m.useState(null),[re,ne]=m.useState(!1),De=m.useRef(!1),rt=m.useCallback(z=>{const W=b.find(ee=>ee.id===z);W&&(De.current=!!W.note,ie(z),ne(!1))},[b]),Le=m.useCallback(()=>{$&&(ne(!0),nt(()=>{ie(null),ne(!1)},150))},[$]),Te=m.useCallback(z=>{$&&(n({...t,sections:b.map(W=>W.id===$?{...W,note:z.trim()||void 0}:W)}),Le())},[$,b,t,n,Le]);m.useEffect(()=>{l&&$&&Le()},[l]);const[tt,Ge]=m.useState(new Set),ce=m.useRef(new Map),[me,de]=m.useState(null),[ze,D]=m.useState(null),[X,G]=m.useState([]),[j,H]=m.useState(0),ge=m.useRef(null),Se=m.useRef(new Set),Fe=m.useRef(new Map),[q,ve]=m.useState(new Map),[Pe,ut]=m.useState(new Map),Bt=m.useRef(new Set),Dt=m.useRef(new Map),_t=m.useRef(p);_t.current=p;const Ht=m.useRef(w);Ht.current=w;const Tt=m.useRef(y);Tt.current=y,m.useEffect(()=>{u&&M(new Set)},[u]);const[an,Xe]=m.useState(()=>!t.sections.some(z=>{const W=z.originalRect,ee=z.currentRect;return Math.abs(W.x-ee.x)>1||Math.abs(W.y-ee.y)>1||Math.abs(W.width-ee.width)>1||Math.abs(W.height-ee.height)>1}));m.useEffect(()=>{if(!an){const z=nt(()=>Xe(!0),380);return()=>clearTimeout(z)}},[]);const Xt=m.useRef(new Set);m.useEffect(()=>{Xt.current=new Set(b.map(z=>z.selector))},[b]),m.useEffect(()=>{const z=()=>H(window.scrollY);return z(),window.addEventListener("scroll",z,{passive:!0}),window.addEventListener("resize",z,{passive:!0}),()=>{window.removeEventListener("scroll",z),window.removeEventListener("resize",z)}},[]),m.useEffect(()=>{const z=W=>{if(ge.current){de(null);return}const ee=document.elementFromPoint(W.clientX,W.clientY);if(!ee){de(null);return}if(ee.closest("[data-feedback-toolbar]")){de(null);return}if(ee.closest("[data-design-placement]")){de(null);return}if(ee.closest("[data-annotation-popup]")){de(null);return}const se=Ap(ee);if(!se){de(null);return}for(const Me of Xt.current)try{const pe=document.querySelector(Me);if(pe&&(pe===se||se.contains(pe))){de(null);return}}catch{}const Be=se.getBoundingClientRect();de({x:Be.x,y:Be.y,w:Be.width,h:Be.height})};return document.addEventListener("mousemove",z,{passive:!0}),()=>document.removeEventListener("mousemove",z)},[b]),m.useEffect(()=>{const z=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=z}},[]),m.useEffect(()=>{const z=W=>{var pe,xt,ct,bt;if(ge.current||W.button!==0)return;const ee=W.target;if(!ee||ee.closest("[data-feedback-toolbar]")||ee.closest("[data-design-placement]")||ee.closest("[data-annotation-popup]"))return;const se=Ap(ee);let Be=!1;if(se)for(const Je of Xt.current)try{const Ce=document.querySelector(Je);if(Ce&&(Ce===se||se.contains(Ce))){Be=!0;break}}catch{}const Me=!!(W.shiftKey||W.metaKey||W.ctrlKey);if(se&&!Be){W.preventDefault(),W.stopPropagation();const Je=G1(se),Ce=[...b,Je],gt=[...t.originalOrder,Je.id];n({...t,sections:Ce,originalOrder:gt});const kt=new Set([Je.id]);M(kt),(pe=_t.current)==null||pe.call(_t,kt,Me),de(null);const cn=W.clientX,je=W.clientY,jt={x:Je.currentRect.x,y:Je.currentRect.y};Je.originalRect;let yt=!1,ht=0,nn=0;ge.current="move";const qe=un=>{var tr;const yn=un.clientX-cn,Tn=un.clientY-je;if(!yt&&(Math.abs(yn)>2||Math.abs(Tn)>2)&&(yt=!0),!yt)return;const yr={x:jt.x+yn,y:jt.y+Tn,width:Je.currentRect.width,height:Je.currentRect.height},er=Op(yr,Ce,new Set([Je.id]),f);G(er.guides);const Nn=yn+er.dx,qt=Tn+er.dy;ht=Nn,nn=qt;const ur=document.querySelector(`[data-rearrange-section="${Je.id}"]`);ur&&(ur.style.transform=`translate(${Nn}px, ${qt}px)`),ve(new Map([[Je.id,{x:jt.x+Nn,y:jt.y+qt,width:Je.currentRect.width,height:Je.currentRect.height}]])),(tr=Ht.current)==null||tr.call(Ht,Nn,qt)},St=()=>{var yn;window.removeEventListener("mousemove",qe),window.removeEventListener("mouseup",St),ge.current=null,G([]),ve(new Map);const un=document.querySelector(`[data-rearrange-section="${Je.id}"]`);un&&(un.style.transform=""),yt&&n({...t,sections:Ce.map(Tn=>Tn.id===Je.id?{...Tn,currentRect:{...Tn.currentRect,x:Math.max(0,jt.x+ht),y:Math.max(0,jt.y+nn)}}:Tn),originalOrder:gt}),(yn=Tt.current)==null||yn.call(Tt,ht,nn,yt)};window.addEventListener("mousemove",qe),window.addEventListener("mouseup",St)}else if(Be&&se){W.preventDefault();for(const Je of b)try{const Ce=document.querySelector(Je.selector);if(Ce&&Ce===se){const gt=new Set([Je.id]);M(gt),(xt=_t.current)==null||xt.call(_t,gt,Me);return}}catch{}Me||(M(new Set),(ct=_t.current)==null||ct.call(_t,new Set,!1))}else Me||(M(new Set),(bt=_t.current)==null||bt.call(_t,new Set,!1))};return document.addEventListener("mousedown",z,!0),()=>document.removeEventListener("mousedown",z,!0)},[b,t,n]),m.useEffect(()=>{const z=W=>{const ee=W.target;if(!(ee.tagName==="INPUT"||ee.tagName==="TEXTAREA"||ee.isContentEditable)){if((W.key==="Backspace"||W.key==="Delete")&&N.size>0){W.preventDefault();const se=new Set(N);Ge(Be=>{const Me=new Set(Be);for(const pe of se)Me.add(pe);return Me}),M(new Set),nt(()=>{const Be=P.current;n({...Be,sections:Be.sections.filter(Me=>!se.has(Me.id)),originalOrder:Be.originalOrder.filter(Me=>!se.has(Me))}),Ge(Me=>{const pe=new Set(Me);for(const xt of se)pe.delete(xt);return pe})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(W.key)&&N.size>0){W.preventDefault();const se=W.shiftKey?20:1,Be=W.key==="ArrowLeft"?-se:W.key==="ArrowRight"?se:0,Me=W.key==="ArrowUp"?-se:W.key==="ArrowDown"?se:0;n({...t,sections:b.map(pe=>N.has(pe.id)?{...pe,currentRect:{...pe.currentRect,x:Math.max(0,pe.currentRect.x+Be),y:Math.max(0,pe.currentRect.y+Me)}}:pe)});return}W.key==="Escape"&&N.size>0&&M(new Set)}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[N,b,t,n]);const J=m.useCallback((z,W)=>{var cn;if(z.button!==0)return;const ee=z.target;if(ee.closest(`.${te.handle}`)||ee.closest(`.${te.deleteButton}`))return;z.preventDefault(),z.stopPropagation();let se;z.shiftKey||z.metaKey||z.ctrlKey?(se=new Set(N),se.has(W)?se.delete(W):se.add(W)):N.has(W)?se=new Set(N):se=new Set([W]),M(se),(se.size!==N.size||[...se].some(je=>!N.has(je)))&&((cn=_t.current)==null||cn.call(_t,se,!!(z.shiftKey||z.metaKey||z.ctrlKey)));const Me=z.clientX,pe=z.clientY,xt=new Map;for(const je of b)se.has(je.id)&&xt.set(je.id,{x:je.currentRect.x,y:je.currentRect.y});ge.current="move";let ct=!1,bt=0,Je=0;const Ce=new Map;for(const je of b)if(se.has(je.id)){const jt=document.querySelector(`[data-rearrange-section="${je.id}"]`);Ce.set(je.id,{outlineEl:jt,curW:je.currentRect.width,curH:je.currentRect.height})}const gt=je=>{var er;const jt=je.clientX-Me,yt=je.clientY-pe;if(jt===0&&yt===0)return;ct=!0;let ht=1/0,nn=1/0,qe=-1/0,St=-1/0;for(const[Nn,{curW:qt,curH:ur}]of Ce){const tr=xt.get(Nn);if(!tr)continue;const jo=tr.x+jt,we=tr.y+yt;ht=Math.min(ht,jo),nn=Math.min(nn,we),qe=Math.max(qe,jo+qt),St=Math.max(St,we+ur)}const un=Op({x:ht,y:nn,width:qe-ht,height:St-nn},b,se,f),yn=jt+un.dx,Tn=yt+un.dy;bt=yn,Je=Tn,G(un.guides);for(const[,{outlineEl:Nn}]of Ce)Nn&&(Nn.style.transform=`translate(${yn}px, ${Tn}px)`);const yr=new Map;for(const[Nn,{curW:qt,curH:ur}]of Ce){const tr=xt.get(Nn);if(tr){const jo={x:Math.max(0,tr.x+yn),y:Math.max(0,tr.y+Tn),width:qt,height:ur};yr.set(Nn,jo)}}ve(yr),(er=Ht.current)==null||er.call(Ht,yn,Tn)},kt=je=>{var jt,yt;window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",kt),ge.current=null,G([]),ve(new Map);for(const[,{outlineEl:ht}]of Ce)ht&&(ht.style.transform="");if(ct){const ht=je.clientX-Me,nn=je.clientY-pe;if(Math.abs(ht)<5&&Math.abs(nn)<5)n({...t,sections:b.map(qe=>{const St=xt.get(qe.id);return St?{...qe,currentRect:{...qe.currentRect,x:St.x,y:St.y}}:qe})});else{n({...t,sections:b.map(qe=>{const St=xt.get(qe.id);return St?{...qe,currentRect:{...qe.currentRect,x:Math.max(0,St.x+bt),y:Math.max(0,St.y+Je)}}:qe})}),(jt=Tt.current)==null||jt.call(Tt,bt,Je,!0);return}}(yt=Tt.current)==null||yt.call(Tt,0,0,!1)};window.addEventListener("mousemove",gt),window.addEventListener("mouseup",kt)},[N,b,t,n]),Re=m.useCallback((z,W,ee)=>{z.preventDefault(),z.stopPropagation();const se=b.find(gt=>gt.id===W);if(!se)return;M(new Set([W])),ge.current="resize";const Be=z.clientX,Me=z.clientY,pe={...se.currentRect};se.originalRect;const xt=pe.width/pe.height;let ct={...pe};const bt=document.querySelector(`[data-rearrange-section="${W}"]`),Je=gt=>{const kt=gt.clientX-Be,cn=gt.clientY-Me;let je=pe.x,jt=pe.y,yt=pe.width,ht=pe.height;if(ee.includes("e")&&(yt=Math.max(Za,pe.width+kt)),ee.includes("w")&&(yt=Math.max(Za,pe.width-kt),je=pe.x+pe.width-yt),ee.includes("s")&&(ht=Math.max(Za,pe.height+cn)),ee.includes("n")&&(ht=Math.max(Za,pe.height-cn),jt=pe.y+pe.height-ht),gt.shiftKey)if(ee.length===2){const qe=Math.abs(yt-pe.width),St=Math.abs(ht-pe.height);qe>St?ht=yt/xt:yt=ht*xt,ee.includes("w")&&(je=pe.x+pe.width-yt),ee.includes("n")&&(jt=pe.y+pe.height-ht)}else ee==="e"||ee==="w"?ht=yt/xt:yt=ht*xt,ee==="w"&&(je=pe.x+pe.width-yt),ee==="n"&&(jt=pe.y+pe.height-ht);ct={x:je,y:jt,width:yt,height:ht},bt&&(bt.style.left=`${je}px`,bt.style.top=`${jt-j}px`,bt.style.width=`${yt}px`,bt.style.height=`${ht}px`),D({x:gt.clientX+12,y:gt.clientY+12,text:`${Math.round(yt)} × ${Math.round(ht)}`}),ve(new Map([[W,ct]]))},Ce=()=>{window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",Ce),D(null),ge.current=null,ve(new Map),n({...t,sections:b.map(gt=>gt.id===W?{...gt,currentRect:ct}:gt)})};window.addEventListener("mousemove",Je),window.addEventListener("mouseup",Ce)},[b,t,n,j]),ot=m.useCallback(z=>{Ge(W=>{const ee=new Set(W);return ee.add(z),ee}),M(W=>{const ee=new Set(W);return ee.delete(z),ee}),nt(()=>{const W=P.current;n({...W,sections:W.sections.filter(ee=>ee.id!==z),originalOrder:W.originalOrder.filter(ee=>ee!==z)}),Ge(ee=>{const se=new Set(ee);return se.delete(z),se})},180)},[n]),Ve=z=>{const W=z.originalRect,ee=z.currentRect;return Math.abs(W.x-ee.x)>1||Math.abs(W.y-ee.y)>1||Math.abs(W.width-ee.width)>1||Math.abs(W.height-ee.height)>1},dt=z=>{const W=z.originalRect,ee=z.currentRect;return Math.abs(W.x-ee.x)>1||Math.abs(W.y-ee.y)>1},mt=z=>{const W=z.originalRect,ee=z.currentRect;return Math.abs(W.width-ee.width)>1||Math.abs(W.height-ee.height)>1};for(const z of b)Fe.current.has(z.id)||(dt(z)?Fe.current.set(z.id,"move"):mt(z)&&Fe.current.set(z.id,"resize"));for(const z of Fe.current.keys())b.some(W=>W.id===z)||Fe.current.delete(z);const Ct=b.filter(z=>{try{if(tt.has(z.id)||N.has(z.id))return!0;const W=document.querySelector(z.selector);if(!W)return!1;const ee=W.getBoundingClientRect(),se=z.originalRect;return Math.abs(ee.width-se.width)+Math.abs(ee.height-se.height)<200}catch{return!1}}),ft=Ct.filter(z=>Ve(z)),Nt=Ct.filter(z=>!Ve(z)),Ft=new Set(ft.map(z=>z.id));for(const z of Se.current)Ft.has(z)||Se.current.delete(z);const We=[...Ft].sort().join(",");for(const z of ft)Dt.current.set(z.id,{currentRect:z.currentRect,originalRect:z.originalRect,isFixed:z.isFixed});return m.useEffect(()=>{const z=Bt.current;Bt.current=Ft;const W=new Map;for(const ee of z)if(!Ft.has(ee)){if(!b.some(Be=>Be.id===ee))continue;const se=Dt.current.get(ee);se&&(W.set(ee,{orig:se.originalRect,target:se.currentRect,isFixed:se.isFixed}),Dt.current.delete(ee))}if(W.size>0){ut(se=>{const Be=new Map(se);for(const[Me,pe]of W)Be.set(Me,pe);return Be});const ee=nt(()=>{ut(se=>{const Be=new Map(se);for(const Me of W.keys())Be.delete(Me);return Be})},250);return()=>clearTimeout(ee)}},[We,b]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`${te.rearrangeOverlay} ${o?"":te.light} ${l?te.overlayExiting:""}${a?` ${a}`:""}`,"data-feedback-toolbar":!0,children:[me&&s.jsx("div",{className:te.hoverHighlight,style:{left:me.x,top:me.y,width:me.w,height:me.h}}),Nt.map(z=>{const W=z.currentRect,ee=z.isFixed?W.y:W.y-j,se=Ip,Be=N.has(z.id);return s.jsxs("div",{"data-rearrange-section":z.id,className:`${te.sectionOutline} ${Be?te.selected:""} ${I||l||tt.has(z.id)?te.exiting:""}`,style:{left:W.x,top:ee,width:W.width,height:W.height,borderColor:se.border,backgroundColor:se.bg,...an?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Me=>J(Me,z.id),onDoubleClick:()=>rt(z.id),children:[s.jsx("span",{className:te.sectionLabel,style:{backgroundColor:se.pill},children:z.label}),s.jsx("span",{className:`${te.sectionAnnotation} ${z.note?te.annotationVisible:""}`,children:(z.note&&ce.current.set(z.id,z.note),z.note||ce.current.get(z.id)||"")}),s.jsxs("span",{className:te.sectionDimensions,children:[Math.round(W.width)," × ",Math.round(W.height)]}),s.jsx("div",{className:te.deleteButton,onMouseDown:Me=>Me.stopPropagation(),onClick:()=>ot(z.id),children:"✕"}),Lp.map(Me=>s.jsx("div",{className:`${te.handle} ${te[`handle${Me.charAt(0).toUpperCase()}${Me.slice(1)}`]}`,onMouseDown:pe=>Re(pe,z.id,Me)},Me))]},z.id)}),ft.map(z=>{const W=z.currentRect,ee=z.isFixed?W.y:W.y-j,se=N.has(z.id),Be=dt(z),Me=mt(z);if(u&&!se)return null;const xt=!Se.current.has(z.id);return xt&&Se.current.add(z.id),s.jsxs("div",{"data-rearrange-section":z.id,className:`${te.ghostOutline} ${se?te.selected:""} ${I||l||tt.has(z.id)?te.exiting:""}`,style:{left:W.x,top:ee,width:W.width,height:W.height,...an?{}:{opacity:0,animation:"none",transition:"none"},...xt?{}:{animation:"none"}},onMouseDown:ct=>J(ct,z.id),onDoubleClick:()=>rt(z.id),children:[s.jsx("span",{className:te.sectionLabel,style:{backgroundColor:Ip.pill},children:z.label}),s.jsx("span",{className:`${te.sectionAnnotation} ${z.note?te.annotationVisible:""}`,children:(z.note&&ce.current.set(z.id,z.note),z.note||ce.current.get(z.id)||"")}),s.jsxs("span",{className:te.sectionDimensions,children:[Math.round(W.width)," × ",Math.round(W.height)]}),s.jsx("div",{className:te.deleteButton,onMouseDown:ct=>ct.stopPropagation(),onClick:()=>ot(z.id),children:"✕"}),Lp.map(ct=>s.jsx("div",{className:`${te.handle} ${te[`handle${ct.charAt(0).toUpperCase()}${ct.slice(1)}`]}`,onMouseDown:bt=>Re(bt,z.id,ct)},ct)),s.jsx("span",{className:te.ghostBadge,children:(()=>{const ct=Fe.current.get(z.id);if(Be&&Me){const[bt,Je]=ct==="resize"?["Resize","Move"]:["Move","Resize"];return s.jsxs(s.Fragment,{children:["Suggested ",bt," ",s.jsxs("span",{className:te.ghostBadgeExtra,children:["& ",Je]})]})}return`Suggested ${Me?"Resize":"Move"}`})()})]},z.id)})]}),!u&&(()=>{const z=[];for(const W of ft){const ee=q.get(W.id);z.push({id:W.id,orig:W.originalRect,target:ee||W.currentRect,isFixed:W.isFixed,isSelected:N.has(W.id),isExiting:tt.has(W.id)})}for(const[W,ee]of q)if(!z.some(se=>se.id===W)){const se=b.find(Be=>Be.id===W);se&&z.push({id:W,orig:se.originalRect,target:ee,isFixed:se.isFixed,isSelected:N.has(W)})}for(const[W,ee]of Pe)z.some(se=>se.id===W)||z.push({id:W,orig:ee.orig,target:ee.target,isFixed:ee.isFixed,isSelected:!1,isExiting:!0});return z.length===0?null:s.jsxs("svg",{className:`${te.connectorSvg} ${I||l?te.connectorExiting:""}`,children:[z.map(({id:W,orig:ee,target:se,isFixed:Be,isSelected:Me,isExiting:pe})=>{const xt=ee.x+ee.width/2,ct=(Be?ee.y:ee.y-j)+ee.height/2,bt=se.x+se.width/2,Je=(Be?se.y:se.y-j)+se.height/2,Ce=bt-xt,gt=Je-ct,kt=Math.sqrt(Ce*Ce+gt*gt);if(kt<2)return null;const cn=Math.min(1,kt/40),je=Math.min(kt*.3,60),jt=kt>0?-gt/kt:0,yt=kt>0?Ce/kt:0,ht=(xt+bt)/2+jt*je,nn=(ct+Je)/2+yt*je,qe=q.has(W),St=qe||Me?1:.4,un=qe||Me?1:.5;return s.jsxs("g",{className:pe?te.connectorExiting:"",children:[s.jsx("path",{className:te.connectorLine,d:`M ${xt} ${ct} Q ${ht} ${nn} ${bt} ${Je}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:St*cn}),s.jsx("circle",{className:te.connectorDot,cx:xt,cy:ct,r:4*cn,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:un*cn,filter:"url(#connDotShadow)"}),s.jsx("circle",{className:te.connectorDot,cx:bt,cy:Je,r:4*cn,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:un*cn,filter:"url(#connDotShadow)"})]},`conn-${W}`)}),s.jsx("defs",{children:s.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:s.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),$&&(()=>{const z=b.find(Je=>Je.id===$);if(!z)return null;const W=z.currentRect,ee=z.isFixed?W.y:W.y-j,se=W.x+W.width/2,Be=ee-8,Me=ee+W.height+8,pe=Be>200,xt=Me<window.innerHeight-100,ct=Math.max(160,Math.min(window.innerWidth-160,se));let bt;return pe?bt={left:ct,bottom:window.innerHeight-Be}:xt?bt={left:ct,top:Me}:bt={left:ct,top:Math.max(80,window.innerHeight/2-80)},s.jsx(mc,{element:z.label,placeholder:"Add a note about this section",initialValue:z.note??"",submitLabel:De.current?"Save":"Set",onSubmit:Te,onCancel:Le,onDelete:De.current?()=>{Te("")}:void 0,isExiting:re,lightMode:!o,style:bt})})(),ze&&s.jsx("div",{className:te.sizeIndicator,style:{left:ze.x,top:ze.y},"data-feedback-toolbar":!0,children:ze.text}),X.map((z,W)=>s.jsx("div",{className:te.guideLine,style:z.axis==="x"?{position:"fixed",left:z.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:z.pos-j,width:"100vw",height:1}},`${z.axis}-${z.pos}-${W}`))]})}var Od=new Set(["script","style","noscript","link","meta","br","hr"]);function ex(){const t=document.querySelector("main")||document.body,n=[],o=Array.from(t.children),l=t!==document.body&&o.length<3?Array.from(document.body.children):o;for(const a of l){if(!(a instanceof HTMLElement)||Od.has(a.tagName.toLowerCase())||a.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(a);if(u.display==="none"||u.visibility==="hidden")continue;const f=a.getBoundingClientRect();if(!(f.height<10||f.width<10)){n.push({label:gc(a),selector:$s(a),top:f.top,bottom:f.bottom,left:f.left,right:f.right,area:f.width*f.height});for(const p of Array.from(a.children)){if(!(p instanceof HTMLElement)||Od.has(p.tagName.toLowerCase())||p.hasAttribute("data-feedback-toolbar"))continue;const _=window.getComputedStyle(p);if(_.display==="none"||_.visibility==="hidden")continue;const w=p.getBoundingClientRect();w.height<10||w.width<10||n.push({label:gc(p),selector:$s(p),top:w.top,bottom:w.bottom,left:w.left,right:w.right,area:w.width*w.height})}}}return n}function tx(t){const n=window.scrollY;return t.map(({label:o,selector:l,rect:a})=>{const u=a.y-n;return{label:o,selector:l,top:u,bottom:u+a.height,left:a.x,right:a.x+a.width,area:a.width*a.height}})}function nx(t){const n=window.scrollY,o=t.y-n,l=t.x;return{top:o,bottom:o+t.height,left:l,right:l+t.width,area:t.width*t.height}}function Ad(t,n){const o=n?tx(n):ex(),l=nx(t);let a=null,u=null,f=null,p=null,_=null;for(const N of o){if(Math.abs(N.left-l.left)<2&&Math.abs(N.top-l.top)<2&&Math.abs(N.right-N.left-t.width)<2&&Math.abs(N.bottom-N.top-t.height)<2)continue;N.left<=l.left+2&&N.right>=l.right-2&&N.top<=l.top+2&&N.bottom>=l.bottom-2&&N.area>l.area*1.5&&(!_||N.area<_._area)&&(_={label:N.label,selector:N.selector,_area:N.area});const M=l.right>N.left+5&&l.left<N.right-5,I=l.bottom>N.top+5&&l.top<N.bottom-5;if(M&&N.bottom<=l.top+5){const R=Math.round(l.top-N.bottom);(!a||R<a._dist)&&(a={label:N.label,selector:N.selector,gap:Math.max(0,R),_dist:R})}if(M&&N.top>=l.bottom-5){const R=Math.round(N.top-l.bottom);(!u||R<u._dist)&&(u={label:N.label,selector:N.selector,gap:Math.max(0,R),_dist:R})}if(I&&N.right<=l.left+5){const R=Math.round(l.left-N.right);(!f||R<f._dist)&&(f={label:N.label,selector:N.selector,gap:Math.max(0,R),_dist:R})}if(I&&N.left>=l.right-5){const R=Math.round(N.left-l.right);(!p||R<p._dist)&&(p={label:N.label,selector:N.selector,gap:Math.max(0,R),_dist:R})}}const w=window.innerWidth,y=window.innerHeight,x=ox(t,w),b=N=>N?{label:N.label,selector:N.selector,gap:N.gap}:null,P=rx(l,t,w,y,_?{label:_.label,selector:_.selector,_area:_._area}:null,o);return{above:b(a),below:b(u),left:b(f),right:b(p),alignment:x,containedIn:_?{label:_.label,selector:_.selector}:null,outOfBounds:P}}function rx(t,n,o,l,a,u){const f={};let p=!1;const _=[];if(t.left<-2&&_.push("left"),t.right>o+2&&_.push("right"),t.top<-2&&_.push("top"),t.bottom>l+2&&_.push("bottom"),_.length>0&&(f.viewport=_,p=!0),a){const w=u.find(y=>y.label===a.label&&y.selector===a.selector&&Math.abs(y.area-a._area)<10);if(w){const y=[];t.left<w.left-2&&y.push("left"),t.right>w.right+2&&y.push("right"),t.top<w.top-2&&y.push("top"),t.bottom>w.bottom+2&&y.push("bottom"),y.length>0&&(f.container={label:a.label,edges:y},p=!0)}}return p?f:null}function ox(t,n){if(t.width/n>.85)return"full-width";const l=t.x+t.width/2,a=n/2,u=l-a,f=n*.08;return Math.abs(u)<f?"center":u<0?"left":"right"}function q_(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Q_(t,n={}){const o=[];t.above&&o.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&o.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&o.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&o.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const l=q_(t.alignment);return t.containedIn?o.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in \`${t.containedIn.label}\``):o.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&o.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&o.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&o.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),o}function sx(t,n,o){var u,f;const l=[];t.above&&l.push(`below \`${t.above.label}\``),t.below&&l.push(`above \`${t.below.label}\``),t.left&&l.push(`right of \`${t.left.label}\``),t.right&&l.push(`left of \`${t.right.label}\``),t.containedIn&&l.push(`inside \`${t.containedIn.label}\``),l.push(q_(t.alignment)),(u=t.outOfBounds)!=null&&u.viewport&&l.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(f=t.outOfBounds)!=null&&f.container&&l.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const a=o?`, ${Math.round(o.width)}×${Math.round(o.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${a}: ${l.join(", ")}`}var $p=15;function Bp(t){if(t.length<2)return[];const n=[],o=new Set;for(let l=0;l<t.length;l++){if(o.has(l))continue;const a=[l];for(let u=l+1;u<t.length;u++)o.has(u)||Math.abs(t[l].rect.y-t[u].rect.y)<$p&&a.push(u);if(a.length>=2){const u=a.map(_=>t[_]);u.sort((_,w)=>_.rect.x-w.rect.x);const f=[];for(let _=0;_<u.length-1;_++)f.push(Math.round(u[_+1].rect.x-(u[_].rect.x+u[_].rect.width)));const p=Math.round(u.reduce((_,w)=>_+w.rect.y,0)/u.length);n.push({labels:u.map(_=>_.label),type:"row",sharedEdge:p,gaps:f,avgGap:f.length?Math.round(f.reduce((_,w)=>_+w,0)/f.length):0}),a.forEach(_=>o.add(_))}}for(let l=0;l<t.length;l++){if(o.has(l))continue;const a=[l];for(let u=l+1;u<t.length;u++)o.has(u)||Math.abs(t[l].rect.x-t[u].rect.x)<$p&&a.push(u);if(a.length>=2){const u=a.map(_=>t[_]);u.sort((_,w)=>_.rect.y-w.rect.y);const f=[];for(let _=0;_<u.length-1;_++)f.push(Math.round(u[_+1].rect.y-(u[_].rect.y+u[_].rect.height)));const p=Math.round(u.reduce((_,w)=>_+w.rect.x,0)/u.length);n.push({labels:u.map(_=>_.label),type:"column",sharedEdge:p,gaps:f,avgGap:f.length?Math.round(f.reduce((_,w)=>_+w,0)/f.length):0}),a.forEach(_=>o.add(_))}}return n}function ix(t){if(t.length<2)return[];const n=Bp(t.map(f=>({label:f.label,rect:f.originalRect}))),o=Bp(t.map(f=>({label:f.label,rect:f.currentRect}))),l=[],a=new Set;for(const f of n){const p=new Set(f.labels);let _=null,w=0;for(const y of o){const x=y.labels.filter(b=>p.has(b)).length;x>=2&&x>w&&(_=y,w=x)}if(_){const y=_.labels.filter(b=>p.has(b)),x=y.join(", ");if(_.type!==f.type){const b=f.type==="row"?"y":"x",P=_.type==="row"?"y":"x";l.push(`**${x}**: ${f.type} (${b}≈${f.sharedEdge}, ${f.avgGap}px gaps) → ${_.type} (${P}≈${_.sharedEdge}, ${_.avgGap}px gaps)`)}else if(Math.abs(f.sharedEdge-_.sharedEdge)>20||Math.abs(f.avgGap-_.avgGap)>5){const b=f.type==="row"?"y":"x",P=Math.abs(f.sharedEdge-_.sharedEdge)>20?` ${b}: ${f.sharedEdge} → ${_.sharedEdge}`:"",N=Math.abs(f.avgGap-_.avgGap)>5?` gaps: ${f.avgGap}px → ${_.avgGap}px`:"";l.push(`**${x}**: ${f.type} shifted —${P}${N}`)}y.forEach(b=>a.add(b))}else{const y=f.labels.join(", "),x=f.type==="row"?"y":"x";l.push(`**${y}**: ${f.type} (${x}≈${f.sharedEdge}) dissolved`),f.labels.forEach(b=>a.add(b))}}for(const f of o){if(f.labels.every(w=>a.has(w))||f.labels.filter(w=>!a.has(w)).length<2)continue;if(!n.some(w=>w.labels.filter(x=>f.labels.includes(x)).length>=2)){const w=f.type==="row"?"y":"x";l.push(`**${f.labels.join(", ")}**: new ${f.type} (${w}≈${f.sharedEdge}, ${f.avgGap}px gaps)`),f.labels.forEach(y=>a.add(y))}}const u=t.filter(f=>!a.has(f.label));if(u.length>=2){const f={};for(const p of u){const _=Math.round(p.currentRect.x/5)*5;(f[_]??(f[_]=[])).push(p.label)}for(const[p,_]of Object.entries(f))_.length>=2&&l.push(`**${_.join(", ")}**: shared left edge at x≈${p}`)}return l}function K_(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],o=new Set,l=p=>{o.has(p)||p instanceof HTMLElement&&(p.hasAttribute("data-feedback-toolbar")||Od.has(p.tagName.toLowerCase())||(o.add(p),n.push(p)))},a=document.querySelector("main");a&&l(a);const u=document.querySelector("[role='main']");u&&l(u);for(const p of Array.from(document.body.children))if(l(p),p.children){for(const _ of Array.from(p.children))if(l(_),_.children)for(const w of Array.from(_.children))l(w)}let f=null;for(const p of n){const _=p.getBoundingClientRect();if(_.height<50)continue;const w=getComputedStyle(p);if(w.maxWidth&&w.maxWidth!=="none"&&w.maxWidth!=="0px"){(!f||_.width<f.rect.width)&&(f={el:p,rect:_});continue}!f&&_.width<t.width-20&&_.width>100&&(f={el:p,rect:_})}if(f){const{el:p,rect:_}=f;return{viewport:t,contentArea:{width:Math.round(_.width),left:Math.round(_.left),right:Math.round(_.right),centerX:Math.round(_.left+_.width/2),selector:$s(p)}}}return{viewport:t,contentArea:null}}function lx(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const o=getComputedStyle(n.parentElement),l={parentDisplay:o.display,parentSelector:$s(n.parentElement)};return o.display.includes("flex")&&(l.flexDirection=o.flexDirection),o.display.includes("grid")&&o.gridTemplateColumns!=="none"&&(l.gridCols=o.gridTemplateColumns),o.gap&&o.gap!=="normal"&&o.gap!=="0px"&&(l.gap=o.gap),l}function G_(t,n){const o=n.contentArea,l=o?o.width:n.viewport.width,a=o?o.left:0,u=o?o.centerX:Math.round(n.viewport.width/2),f=Math.round(t.x-a),p=Math.round(a+l-(t.x+t.width)),_=(t.width/l*100).toFixed(1),w=t.x+t.width/2,y=Math.abs(w-u)<20,x=t.width/l>.95,b=[];return x?b.push("`width: 100%` of container"):b.push(`left \`${f}px\` in container, right \`${p}px\`, width \`${_}%\` (\`${Math.round(t.width)}px\`)`),y&&!x&&b.push("centered — `margin-inline: auto`"),b.join(" — ")}function J_(t){const{viewport:n,contentArea:o}=t;let l=`### Reference Frame
`;if(l+=`- Viewport: \`${n.width}×${n.height}px\`
`,o){const a=o;l+=`- Content area: \`${a.width}px\` wide, left edge at \`x=${a.left}\`, right at \`x=${a.right}\` (\`${a.selector}\`)
`,l+=`- Pixel → CSS translation:
`,l+=`  - **Horizontal position in container**: \`element.x - ${a.left}\` → use as \`margin-left\` or \`left\`
`,l+=`  - **Width as % of container**: \`element.width / ${a.width} × 100\` → use as \`width: X%\`
`,l+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",l+=`  - **Centered**: if \`|element.centerX - ${a.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else l+=`- No distinct content container — elements positioned relative to full viewport
`,l+=`- Pixel → CSS translation:
`,l+=`  - **Width as % of viewport**: \`element.width / ${n.width} × 100\` → use as \`width: X%\`
`,l+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(n.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return l+=`
`,l}function ax(t){const n=lx(t);if(!n)return null;let o=`\`${n.parentDisplay}\``;return n.flexDirection&&(o+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(o+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(o+=`, gap: \`${n.gap}\``),`Parent: ${o} (\`${n.parentSelector}\`)`}function Dp(t,n,o,l="standard"){var I,R,Y,Q;if(t.length===0)return"";const a=[...t].sort(($,ie)=>Math.abs($.y-ie.y)<20?$.x-ie.x:$.y-ie.y);let u="";if(o!=null&&o.blankCanvas?(u+=`## Wireframe: New Page

`,o.wireframePurpose&&(u+=`> **Purpose:** ${o.wireframePurpose}
>
`),u+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,l==="compact")return u+=`### Components
`,a.forEach(($,ie)=>{var ne;const re=((ne=zr[$.type])==null?void 0:ne.label)||$.type;u+=`${ie+1}. **${re}** — \`${Math.round($.width)}×${Math.round($.height)}px\` at \`(${Math.round($.x)}, ${Math.round($.y)})\`
`}),u;const f=K_(n);u+=J_(f),u+=`### Components
`,a.forEach(($,ie)=>{var tt;const re=((tt=zr[$.type])==null?void 0:tt.label)||$.type,ne={x:$.x,y:$.y,width:$.width,height:$.height};u+=`${ie+1}. **${re}** — \`${Math.round($.width)}×${Math.round($.height)}px\` at \`(${Math.round($.x)}, ${Math.round($.y)})\`
`;const De=Ad(ne),Le=Q_(De,{includeLeftRight:l==="detailed"||l==="forensic"});for(const Ge of Le)u+=`   - ${Ge}
`;const Te=G_(ne,f);Te&&(u+=`   - CSS: ${Te}
`)}),u+=`
### Layout Analysis
`;const p=[];for(const $ of a){const ie=p.find(re=>Math.abs(re.y-$.y)<30);ie?ie.items.push($):p.push({y:$.y,items:[$]})}if(p.sort(($,ie)=>$.y-ie.y),p.forEach(($,ie)=>{$.items.sort((ne,De)=>ne.x-De.x);const re=$.items.map(ne=>{var De;return((De=zr[ne.type])==null?void 0:De.label)||ne.type});if($.items.length===1){const De=$.items[0].width>n.width*.8;u+=`- Row ${ie+1} (y≈${Math.round($.y)}): ${re[0]}${De?" — full width":""}
`}else u+=`- Row ${ie+1} (y≈${Math.round($.y)}): ${re.join(" | ")} — ${$.items.length} items side by side
`}),l==="detailed"||l==="forensic"){u+=`
### Spacing & Gaps
`;for(let $=0;$<a.length-1;$++){const ie=a[$],re=a[$+1],ne=((I=zr[ie.type])==null?void 0:I.label)||ie.type,De=((R=zr[re.type])==null?void 0:R.label)||re.type,rt=Math.round(re.y-(ie.y+ie.height)),Le=Math.round(re.x-(ie.x+ie.width));Math.abs(ie.y-re.y)<30?u+=`- ${ne} → ${De}: \`${Le}px\` horizontal gap
`:u+=`- ${ne} → ${De}: \`${rt}px\` vertical gap
`}if(l==="forensic"&&a.length>2){u+=`
### All Pairwise Gaps
`;for(let $=0;$<a.length;$++)for(let ie=$+1;ie<a.length;ie++){const re=a[$],ne=a[ie],De=((Y=zr[re.type])==null?void 0:Y.label)||re.type,rt=((Q=zr[ne.type])==null?void 0:Q.label)||ne.type,Le=Math.round(ne.y-(re.y+re.height)),Te=Math.round(ne.x-(re.x+re.width));u+=`- ${De} ↔ ${rt}: h=\`${Te}px\` v=\`${Le}px\`
`}}l==="forensic"&&(u+=`
### Z-Order (placement order)
`,t.forEach(($,ie)=>{var ne;const re=((ne=zr[$.type])==null?void 0:ne.label)||$.type;u+=`${ie}. ${re} at \`(${Math.round($.x)}, ${Math.round($.y)})\`
`}))}u+=`
### Suggested Implementation
`;const _=a.some($=>$.type==="navigation"),w=a.some($=>$.type==="hero"),y=a.some($=>$.type==="sidebar"),x=a.some($=>$.type==="footer"),b=a.filter($=>$.type==="card"),P=a.filter($=>$.type==="form"),N=a.filter($=>$.type==="table"),M=a.filter($=>$.type==="modal");if(_&&(u+=`- Top navigation bar with logo + nav links + CTA
`),w&&(u+=`- Hero section with heading, subtext, and call-to-action
`),y&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),b.length>1?u+=`- ${b.length}-column card grid — use CSS Grid or Flexbox
`:b.length===1&&(u+=`- Card component with image + content area
`),P.length>0&&(u+=`- ${P.length} form${P.length>1?"s":""} — add proper labels, validation, and submit handling
`),N.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),M.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(u+=`- Multi-column footer with links
`),l==="detailed"||l==="forensic"){if(u+=`
### CSS Suggestions
`,y){const $=a.find(ie=>ie.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round($.width)}px 1fr;\`
`}if(b.length>1){const $=Math.round(b[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${b.length}, ${$}px); gap: 16px;\`
`}_&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function zp(t,n="standard",o){const{sections:l}=t,a=[];for(const y of l){const x=y.originalRect,b=y.currentRect,P=Math.abs(x.x-b.x)>1||Math.abs(x.y-b.y)>1,N=Math.abs(x.width-b.width)>1||Math.abs(x.height-b.height)>1;if(!P&&!N){n==="forensic"&&a.push({section:y,posMoved:!1,sizeChanged:!1});continue}a.push({section:y,posMoved:P,sizeChanged:N})}if(a.length===0||n!=="forensic"&&a.every(y=>!y.posMoved&&!y.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const f=o?o.width:typeof window<"u"?window.innerWidth:0,p=o?o.height:typeof window<"u"?window.innerHeight:0,_=K_({width:f,height:p});n!=="compact"&&(u+=J_(_)),n==="forensic"&&(u+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${l.length}

`);const w=y=>l.map(x=>({label:x.label,selector:x.selector,rect:y==="original"?x.originalRect:x.currentRect}));u+=`**Changes:**
`;for(const{section:y,posMoved:x,sizeChanged:b}of a){const P=y.originalRect,N=y.currentRect;if(!x&&!b){u+=`- ${y.label} — unchanged at (${Math.round(N.x)}, ${Math.round(N.y)}) ${Math.round(N.width)}×${Math.round(N.height)}px
`;continue}if(n==="compact"){x&&b?u+=`- Suggested: move **${y.label}** to (${Math.round(N.x)}, ${Math.round(N.y)}) ${Math.round(N.width)}×${Math.round(N.height)}px
`:x?u+=`- Suggested: move **${y.label}** to (${Math.round(N.x)}, ${Math.round(N.y)})
`:u+=`- Suggested: resize **${y.label}** to ${Math.round(N.width)}×${Math.round(N.height)}px
`;continue}if(x&&b?u+=`- Suggested: move and resize **${y.label}**
`:x?u+=`- Suggested: move **${y.label}**
`:u+=`- Suggested: resize **${y.label}** from ${Math.round(P.width)}×${Math.round(P.height)}px to ${Math.round(N.width)}×${Math.round(N.height)}px
`,x){const I=Ad(P,w("original")),R=Ad(N,w("current")),Y=b?{width:P.width,height:P.height}:void 0;u+=`  - Currently ${sx(I,{x:P.x,y:P.y},Y)}
`;const Q=b?{width:N.width,height:N.height}:void 0,$=`at (${Math.round(N.x)}, ${Math.round(N.y)})`,ie=Q?`, ${Math.round(Q.width)}×${Math.round(Q.height)}px`:"",ne=Q_(R,{includeLeftRight:n==="detailed"||n==="forensic"});if(ne.length>0){u+=`  - Suggested position ${$}${ie}: ${ne[0]}
`;for(let rt=1;rt<ne.length;rt++)u+=`    ${ne[rt]}
`}else u+=`  - Suggested position ${$}${ie}
`;const De=G_(N,_);De&&(u+=`  - CSS: ${De}
`)}const M=ax(y.selector);if(M&&(u+=`  - ${M}
`),u+=`  - Selector: \`${y.selector}\`
`,n==="detailed"||n==="forensic"){const I=y.className?`${y.tagName}.${y.className.split(" ")[0]}`:y.tagName;I!==y.selector&&(u+=`  - Element: \`${I}\`
`),y.role&&(u+=`  - Role: \`${y.role}\`
`),n==="forensic"&&y.textSnippet&&(u+=`  - Text: "${y.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(P.x)}, y: ${Math.round(P.y)}, w: ${Math.round(P.width)}, h: ${Math.round(P.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(N.x)}, y: ${Math.round(N.y)}, w: ${Math.round(N.width)}, h: ${Math.round(N.height)} }\`
`)}if(n!=="compact"){const y=a.filter(b=>b.posMoved).map(b=>({label:b.section.label,originalRect:b.section.originalRect,currentRect:b.section.currentRect})),x=ix(y);if(x.length>0){u+=`
### Layout Summary
`;for(const b of x)u+=`- ${b}
`}}if(n!=="compact"&&l.length>1){u+=`
### All Sections (current positions)
`;const y=[...l].sort((x,b)=>Math.abs(x.currentRect.y-b.currentRect.y)<20?x.currentRect.x-b.currentRect.x:x.currentRect.y-b.currentRect.y);for(const x of y){const b=x.currentRect,P=Math.abs(b.x-x.originalRect.x)>1||Math.abs(b.y-x.originalRect.y)>1||Math.abs(b.width-x.originalRect.width)>1||Math.abs(b.height-x.originalRect.height)>1;u+=`- ${x.label}: \`${Math.round(b.width)}×${Math.round(b.height)}px\` at \`(${Math.round(b.x)}, ${Math.round(b.y)})\`${P?" ← suggested":""}
`}}return u}var $d="feedback-annotations-",Z_=7;function yc(t){return`${$d}${t}`}function dd(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(yc(t));if(!n)return[];const o=JSON.parse(n),l=Date.now()-Z_*24*60*60*1e3;return o.filter(a=>!a.timestamp||a.timestamp>l)}catch{return[]}}function em(t,n){if(!(typeof window>"u"))try{localStorage.setItem(yc(t),JSON.stringify(n))}catch{}}function cx(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Z_*24*60*60*1e3;for(let o=0;o<localStorage.length;o++){const l=localStorage.key(o);if(l!=null&&l.startsWith($d)){const a=l.slice($d.length),u=localStorage.getItem(l);if(u){const p=JSON.parse(u).filter(_=>!_.timestamp||_.timestamp>n);p.length>0&&t.set(a,p)}}}}catch{}return t}function wl(t,n,o){const l=n.map(a=>({...a,_syncedTo:o}));em(t,l)}var Gd="agentation-design-";function ux(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${Gd}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function dx(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Gd}${t}`,JSON.stringify(n))}catch{}}function fx(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Gd}${t}`)}catch{}}var Jd="agentation-rearrange-";function hx(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Jd}${t}`);return n?JSON.parse(n):null}catch{return null}}function px(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Jd}${t}`,JSON.stringify(n))}catch{}}function _x(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Jd}${t}`)}catch{}}var Zd="agentation-wireframe-";function mx(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Zd}${t}`);return n?JSON.parse(n):null}catch{return null}}function Fp(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Zd}${t}`,JSON.stringify(n))}catch{}}function tc(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${Zd}${t}`)}catch{}}var tm="agentation-session-";function ef(t){return`${tm}${t}`}function gx(t){if(typeof window>"u")return null;try{return localStorage.getItem(ef(t))}catch{return null}}function fd(t,n){if(!(typeof window>"u"))try{localStorage.setItem(ef(t),n)}catch{}}function yx(t){if(!(typeof window>"u"))try{localStorage.removeItem(ef(t))}catch{}}var nm=`${tm}toolbar-hidden`;function xx(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(nm)==="1"}catch{return!1}}function vx(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(nm,"1")}catch{}}async function hd(t,n){const o=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!o.ok)throw new Error(`Failed to create session: ${o.status}`);return o.json()}async function Wp(t,n){const o=await fetch(`${t}/sessions/${n}`);if(!o.ok)throw new Error(`Failed to get session: ${o.status}`);return o.json()}async function xi(t,n,o){const l=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function Up(t,n,o){const l=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function es(t,n){const o=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!o.ok)throw new Error(`Failed to delete annotation: ${o.status}`)}var $t={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Hp=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Yp=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],wx=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function bx(t){const n=(t==null?void 0:t.mode)??"filtered";let o=Hp;if(t!=null&&t.skipExact){const l=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);o=new Set([...Hp,...l])}return{maxComponents:(t==null?void 0:t.maxComponents)??6,maxDepth:(t==null?void 0:t.maxDepth)??30,mode:n,skipExact:o,skipPatterns:t!=null&&t.skipPatterns?[...Yp,...t.skipPatterns]:Yp,userPatterns:(t==null?void 0:t.userPatterns)??wx,filter:t==null?void 0:t.filter}}function kx(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Sx(t,n=10){const o=new Set;let l=t,a=0;for(;l&&a<n;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(u=>{if(u.length>1){const f=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();f.length>1&&o.add(f)}}),l=l.parentElement,a++;return o}function Cx(t,n){const o=kx(t);for(const l of n){if(l===o)return!0;const a=o.split("-").filter(f=>f.length>2),u=l.split("-").filter(f=>f.length>2);for(const f of a)for(const p of u)if(f===p||f.includes(p)||p.includes(f))return!0}return!1}function jx(t,n,o,l){if(o.filter)return o.filter(t,n);switch(o.mode){case"all":return!0;case"filtered":return!(o.skipExact.has(t)||o.skipPatterns.some(a=>a.test(t)));case"smart":return o.skipExact.has(t)||o.skipPatterns.some(a=>a.test(t))?!1:!!(l&&Cx(t,l)||o.userPatterns.some(a=>a.test(t)));default:return!0}}var vi=null,Ex=new WeakMap;function pd(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function Rx(){if(vi!==null)return vi;if(typeof document>"u")return!1;if(document.body&&pd(document.body))return vi=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const o=document.querySelector(n);if(o&&pd(o))return vi=!0,!0}if(document.body){for(const n of document.body.children)if(pd(n))return vi=!0,!0}return vi=!1,!1}var bl={map:Ex};function Tx(t){return Object.keys(t).find(o=>o.startsWith("__reactFiber$")||o.startsWith("__reactInternalInstance$"))||null}function Nx(t){const n=Tx(t);return n?t[n]:null}function Ts(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function Mx(t){var a;const{tag:n,type:o,elementType:l}=t;if(n===$t.HostComponent||n===$t.HostText||n===$t.HostHoistable||n===$t.HostSingleton||n===$t.Fragment||n===$t.Mode||n===$t.Profiler||n===$t.DehydratedFragment||n===$t.HostRoot||n===$t.HostPortal||n===$t.ScopeComponent||n===$t.OffscreenComponent||n===$t.LegacyHiddenComponent||n===$t.CacheComponent||n===$t.TracingMarkerComponent||n===$t.Throw||n===$t.ViewTransitionComponent||n===$t.ActivityComponent)return null;if(n===$t.ForwardRef){const u=l;if(u!=null&&u.render){const f=Ts(u.render);if(f)return f}return u!=null&&u.displayName?u.displayName:Ts(o)}if(n===$t.MemoComponent||n===$t.SimpleMemoComponent){const u=l;if(u!=null&&u.type){const f=Ts(u.type);if(f)return f}return u!=null&&u.displayName?u.displayName:Ts(o)}if(n===$t.ContextProvider){const u=o;return(a=u==null?void 0:u._context)!=null&&a.displayName?`${u._context.displayName}.Provider`:null}if(n===$t.ContextConsumer){const u=o;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===$t.LazyComponent){const u=l;return(u==null?void 0:u._status)===1&&u._result?Ts(u._result):null}return n===$t.SuspenseComponent||n===$t.SuspenseListComponent?null:n===$t.IncompleteClassComponent||n===$t.IncompleteFunctionComponent||n===$t.FunctionComponent||n===$t.ClassComponent||n===$t.IndeterminateComponent?Ts(o):null}function Ix(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function Lx(t,n){const o=bx(n),l=o.mode==="all";if(l){const _=bl.map.get(t);if(_!==void 0)return _}if(!Rx()){const _={path:null,components:[]};return l&&bl.map.set(t,_),_}const a=o.mode==="smart"?Sx(t):void 0,u=[];try{let _=Nx(t),w=0;for(;_&&w<o.maxDepth&&u.length<o.maxComponents;){const y=Mx(_);y&&!Ix(y)&&jx(y,w,o,a)&&u.push(y),_=_.return,w++}}catch{const _={path:null,components:[]};return l&&bl.map.set(t,_),_}if(u.length===0){const _={path:null,components:[]};return l&&bl.map.set(t,_),_}const p={path:u.slice().reverse().map(_=>`<${_}>`).join(" "),components:u};return l&&bl.map.set(t,p),p}var kl={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Px(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),o=n.find(u=>u.startsWith("__reactFiber$"));if(o)return t[o]||null;const l=n.find(u=>u.startsWith("__reactInternalInstance$"));if(l)return t[l]||null;const a=n.find(u=>{if(!u.startsWith("__react"))return!1;const f=t[u];return f&&typeof f=="object"&&"_debugSource"in f});return a&&t[a]||null}function Ml(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Ox(t,n=50){var a;let o=t,l=0;for(;o&&l<n;){if(o._debugSource)return{source:o._debugSource,componentName:Ml(o)};if((a=o._debugOwner)!=null&&a._debugSource)return{source:o._debugOwner._debugSource,componentName:Ml(o._debugOwner)};o=o.return,l++}return null}function Ax(t){let n=t,o=0;const l=50;for(;n&&o<l;){const a=n,u=["_debugSource","__source","_source","debugSource"];for(const f of u){const p=a[f];if(p&&typeof p=="object"&&"fileName"in p)return{source:p,componentName:Ml(n)}}if(n.memoizedProps){const f=n.memoizedProps;if(f.__source&&typeof f.__source=="object"){const p=f.__source;if(p.fileName&&p.lineNumber)return{source:{fileName:p.fileName,lineNumber:p.lineNumber,columnNumber:p.columnNumber},componentName:Ml(n)}}}n=n.return,o++}return null}var nc=new Map;function $x(t){var a;const n=t.tag,o=t.type,l=t.elementType;if(typeof o=="string"||o==null||typeof o=="function"&&((a=o.prototype)!=null&&a.isReactComponent))return null;if((n===kl.FunctionComponent||n===kl.IndeterminateComponent)&&typeof o=="function")return o;if(n===kl.ForwardRef&&l){const u=l.render;if(typeof u=="function")return u}if((n===kl.MemoComponent||n===kl.SimpleMemoComponent)&&l){const u=l.type;if(typeof u=="function")return u}return typeof o=="function"?o:null}function Bx(){const t=Qd,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:l=>{n.H=l}};const o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(o){const l=o.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:a=>{l.current=a}}}return null}function Dx(t){const n=t.split(`
`),o=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],l=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,a=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const f=u.trim();if(!f||o.some(_=>_.test(f)))continue;const p=l.exec(f)||a.exec(f);if(p)return{fileName:p[1],line:parseInt(p[2],10),column:parseInt(p[3],10)}}return null}function zx(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Fx(t){const n=$x(t);if(!n)return null;if(nc.has(n))return nc.get(n);const o=Bx();if(!o)return nc.set(n,null),null;const l=o.get();let a=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});o.set(u);try{n({})}catch(f){if(f instanceof Error&&f.message==="probe"&&f.stack){const p=Dx(f.stack);p&&(a={fileName:zx(p.fileName),lineNumber:p.line,columnNumber:p.column,componentName:Ml(t)||void 0})}}}finally{o.set(l)}return nc.set(n,a),a}function Wx(t,n=15){let o=t,l=0;for(;o&&l<n;){const a=Fx(o);if(a)return a;o=o.return,l++}return null}function Bd(t){const n=Px(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let o=Ox(n);if(o||(o=Ax(n)),o!=null&&o.source)return{found:!0,source:{fileName:o.source.fileName,lineNumber:o.source.lineNumber,columnNumber:o.source.columnNumber,componentName:o.componentName||void 0},isReactApp:!0,isProduction:!1};const l=Wx(n);return l?{found:!0,source:l,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Ux(t,n="path"){const{fileName:o,lineNumber:l,columnNumber:a}=t;let u=`${o}:${l}`;return a!==void 0&&(u+=`:${a}`),n==="vscode"?`vscode://file${o.startsWith("/")?"":"/"}${u}`:u}function Hx(t,n=10){let o=t,l=0;for(;o&&l<n;){const a=Bd(o);if(a.found)return a;o=o.parentElement,l++}return Bd(t)}var Yx=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Vx={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=Yx}var le=Vx,Sl=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Vp(t,n,o="standard"){if(t.length===0)return"";const l=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let a=`## Page Feedback: ${n}
`;return o==="forensic"?(a+=`
**Environment:**
`,a+=`- Viewport: ${l}
`,typeof window<"u"&&(a+=`- URL: ${window.location.href}
`,a+=`- User Agent: ${navigator.userAgent}
`,a+=`- Timestamp: ${new Date().toISOString()}
`,a+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),a+=`
---
`):o!=="compact"&&(a+=`**Viewport:** ${l}
`),a+=`
`,t.forEach((u,f)=>{o==="compact"?(a+=`${f+1}. **${u.element}**${u.sourceFile?` (${u.sourceFile})`:""}: ${u.comment}`,u.selectedText&&(a+=` (re: "${u.selectedText.slice(0,30)}${u.selectedText.length>30?"...":""}")`),a+=`
`):o==="forensic"?(a+=`### ${f+1}. ${u.element}
`,u.isMultiSelect&&u.fullPath&&(a+=`*Forensic data shown for first element of selection*
`),u.fullPath&&(a+=`**Full DOM Path:** ${u.fullPath}
`),u.cssClasses&&(a+=`**CSS Classes:** ${u.cssClasses}
`),u.boundingBox&&(a+=`**Position:** x:${Math.round(u.boundingBox.x)}, y:${Math.round(u.boundingBox.y)} (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`),a+=`**Annotation at:** ${u.x.toFixed(1)}% from left, ${Math.round(u.y)}px from top
`,u.selectedText&&(a+=`**Selected text:** "${u.selectedText}"
`),u.nearbyText&&!u.selectedText&&(a+=`**Context:** ${u.nearbyText.slice(0,100)}
`),u.computedStyles&&(a+=`**Computed Styles:** ${u.computedStyles}
`),u.accessibility&&(a+=`**Accessibility:** ${u.accessibility}
`),u.nearbyElements&&(a+=`**Nearby Elements:** ${u.nearbyElements}
`),u.sourceFile&&(a+=`**Source:** ${u.sourceFile}
`),u.reactComponents&&(a+=`**React:** ${u.reactComponents}
`),a+=`**Feedback:** ${u.comment}

`):(a+=`### ${f+1}. ${u.element}
`,a+=`**Location:** ${u.elementPath}
`,u.sourceFile&&(a+=`**Source:** ${u.sourceFile}
`),u.reactComponents&&(a+=`**React:** ${u.reactComponents}
`),o==="detailed"&&(u.cssClasses&&(a+=`**Classes:** ${u.cssClasses}
`),u.boundingBox&&(a+=`**Position:** ${Math.round(u.boundingBox.x)}px, ${Math.round(u.boundingBox.y)}px (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`)),u.selectedText&&(a+=`**Selected text:** "${u.selectedText}"
`),o==="detailed"&&u.nearbyText&&!u.selectedText&&(a+=`**Context:** ${u.nearbyText.slice(0,100)}
`),a+=`**Feedback:** ${u.comment}

`)}),a.trim()}var Xx=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,qx={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=Xx}var wn=qx;function Xp({annotation:t,globalIndex:n,layerIndex:o,layerSize:l,isExiting:a,isClearing:u,isAnimated:f,isHovered:p,isDeleting:_,isEditingAny:w,renumberFrom:y,markerClickBehavior:x,tooltipStyle:b,onHoverEnter:P,onHoverLeave:N,onClick:M,onContextMenu:I}){const R=(p||_)&&!w,Y=R&&x==="delete",Q=t.isMultiSelect,$=Q?"var(--agentation-color-green)":"var(--agentation-color-accent)",ie=a?wn.exit:u?wn.clearing:f?"":wn.enter,re=a?`${(l-1-o)*20}ms`:`${o*20}ms`;return s.jsxs("div",{className:`${wn.marker} ${Q?wn.multiSelect:""} ${ie} ${Y?wn.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:Y?void 0:$,animationDelay:re},onMouseEnter:()=>P(t),onMouseLeave:N,onClick:ne=>{ne.stopPropagation(),a||M(t)},onContextMenu:I?ne=>{x==="delete"&&(ne.preventDefault(),ne.stopPropagation(),a||I(t))}:void 0,children:[R?Y?s.jsx(F_,{size:Q?18:16}):s.jsx(ly,{size:16}):s.jsx("span",{className:y!==null&&n>=y?wn.renumber:void 0,children:n+1}),p&&!w&&s.jsxs("div",{className:`${wn.markerTooltip} ${wn.enter}`,style:b,children:[s.jsxs("span",{className:wn.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),s.jsx("span",{className:wn.markerNote,children:t.comment})]})]})}function Qx({x:t,y:n,isMultiSelect:o,isExiting:l}){return s.jsx("div",{className:`${wn.marker} ${wn.pending} ${o?wn.multiSelect:""} ${l?wn.exit:wn.enter}`,style:{left:`${t}%`,top:n,backgroundColor:o?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:s.jsx(Q0,{size:12})})}function qp({annotation:t,fixed:n}){const o=t.isMultiSelect;return s.jsx("div",{className:`${wn.marker} ${n?wn.fixed:""} ${wn.hovered} ${o?wn.multiSelect:""} ${wn.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:s.jsx(F_,{size:o?12:10})})}var Kx=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Gx={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=Kx}var _d=Gx,md=({className:t="",...n})=>s.jsxs("div",{className:`${_d.switchContainer} ${t}`,children:[s.jsx("input",{className:_d.switchInput,type:"checkbox",...n}),s.jsx("div",{className:_d.switchThumb})]}),Jx=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Zx={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=Jx}var rc=Zx,e5=({className:t="",...n})=>s.jsxs("div",{className:`${rc.checkboxContainer} ${t}`,children:[s.jsx("input",{className:rc.checkboxInput,type:"checkbox",...n}),s.jsx("svg",{className:rc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:s.jsx("path",{className:rc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),t5=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,n5={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=t5}var Qp=n5,Kp=({className:t="",label:n,tooltip:o,checked:l,onChange:a,...u})=>{const f=m.useId();return s.jsxs("div",{className:`${Qp.container} ${t}`,...u,children:[s.jsx(e5,{id:f,onChange:a,checked:l}),s.jsx("label",{className:Qp.label,htmlFor:f,children:n}),o&&s.jsx(Is,{content:o})]})},r5=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,o5={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=r5}var Ae=o5;function s5({settings:t,onSettingsChange:n,isDarkMode:o,onToggleTheme:l,isDevMode:a,connectionStatus:u,endpoint:f,isVisible:p,toolbarNearBottom:_,settingsPage:w,onSettingsPageChange:y,onHideToolbar:x}){var b;return s.jsx("div",{className:`${Ae.settingsPanel} ${p?Ae.enter:Ae.exit}`,style:_?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:s.jsxs("div",{className:Ae.settingsPanelContainer,children:[s.jsxs("div",{className:`${Ae.settingsPage} ${w==="automations"?Ae.slideLeft:""}`,children:[s.jsxs("div",{className:Ae.settingsHeader,children:[s.jsx("a",{className:Ae.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:s.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),s.jsxs("p",{className:Ae.settingsVersion,children:["v","3.0.2"]}),s.jsx("button",{className:Ae.themeToggle,onClick:l,title:o?"Switch to light mode":"Switch to dark mode",children:s.jsx("span",{className:Ae.themeIconWrapper,children:s.jsx("span",{className:Ae.themeIcon,children:o?s.jsx(sy,{size:20}):s.jsx(iy,{size:20})},o?"sun":"moon")})})]}),s.jsx("div",{className:Ae.divider}),s.jsxs("div",{className:Ae.settingsSection,children:[s.jsxs("div",{className:Ae.settingsRow,children:[s.jsxs("div",{className:Ae.settingsLabel,children:["Output Detail",s.jsx(Is,{content:"Controls how much detail is included in the copied output"})]}),s.jsxs("button",{className:Ae.cycleButton,onClick:()=>{const N=(Sl.findIndex(M=>M.value===t.outputDetail)+1)%Sl.length;n({outputDetail:Sl[N].value})},children:[s.jsx("span",{className:Ae.cycleButtonText,children:(b=Sl.find(P=>P.value===t.outputDetail))==null?void 0:b.label},t.outputDetail),s.jsx("span",{className:Ae.cycleDots,children:Sl.map(P=>s.jsx("span",{className:`${Ae.cycleDot} ${t.outputDetail===P.value?Ae.active:""}`},P.value))})]})]}),s.jsxs("div",{className:`${Ae.settingsRow} ${Ae.settingsRowMarginTop} ${a?"":Ae.settingsRowDisabled}`,children:[s.jsxs("div",{className:Ae.settingsLabel,children:["React Components",s.jsx(Is,{content:a?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),s.jsx(md,{checked:a&&t.reactEnabled,onChange:P=>n({reactEnabled:P.target.checked}),disabled:!a})]}),s.jsxs("div",{className:`${Ae.settingsRow} ${Ae.settingsRowMarginTop}`,children:[s.jsxs("div",{className:Ae.settingsLabel,children:["Hide Until Restart",s.jsx(Is,{content:"Hides the toolbar until you open a new tab"})]}),s.jsx(md,{checked:!1,onChange:P=>{P.target.checked&&x()}})]})]}),s.jsx("div",{className:Ae.divider}),s.jsxs("div",{className:Ae.settingsSection,children:[s.jsx("div",{className:`${Ae.settingsLabel} ${Ae.settingsLabelMarker}`,children:"Marker Color"}),s.jsx("div",{className:Ae.colorOptions,children:Rl.map(P=>s.jsx("button",{className:`${Ae.colorOption} ${t.annotationColorId===P.id?Ae.selected:""}`,style:{"--swatch":P.srgb,"--swatch-p3":P.p3},onClick:()=>n({annotationColorId:P.id}),title:P.label,type:"button"},P.id))})]}),s.jsx("div",{className:Ae.divider}),s.jsxs("div",{className:Ae.settingsSection,children:[s.jsx(Kp,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:P=>n({autoClearAfterCopy:P.target.checked}),tooltip:"Automatically clear annotations after copying"}),s.jsx(Kp,{className:Ae.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:P=>n({blockInteractions:P.target.checked})})]}),s.jsx("div",{className:Ae.divider}),s.jsxs("button",{className:Ae.settingsNavLink,onClick:()=>y("automations"),children:[s.jsx("span",{children:"Manage MCP & Webhooks"}),s.jsxs("span",{className:Ae.settingsNavLinkRight,children:[f&&u!=="disconnected"&&s.jsx("span",{className:`${Ae.mcpNavIndicator} ${Ae[u]}`}),s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),s.jsxs("div",{className:`${Ae.settingsPage} ${Ae.automationsPage} ${w==="automations"?Ae.slideIn:""}`,children:[s.jsxs("button",{className:Ae.settingsBackButton,onClick:()=>y("main"),children:[s.jsx(cy,{size:16}),s.jsx("span",{children:"Manage MCP & Webhooks"})]}),s.jsx("div",{className:Ae.divider}),s.jsxs("div",{className:Ae.settingsSection,children:[s.jsxs("div",{className:Ae.settingsRow,children:[s.jsxs("span",{className:Ae.automationHeader,children:["MCP Connection",s.jsx(Is,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),f&&s.jsx("div",{className:`${Ae.mcpStatusDot} ${Ae[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),s.jsxs("p",{className:Ae.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",s.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ae.learnMoreLink,children:"Learn more"})]})]}),s.jsx("div",{className:Ae.divider}),s.jsxs("div",{className:`${Ae.settingsSection} ${Ae.settingsSectionGrow}`,children:[s.jsxs("div",{className:Ae.settingsRow,children:[s.jsxs("span",{className:Ae.automationHeader,children:["Webhooks",s.jsx(Is,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),s.jsxs("div",{className:Ae.autoSendContainer,children:[s.jsx("label",{htmlFor:"agentation-auto-send",className:`${Ae.autoSendLabel} ${t.webhooksEnabled?Ae.active:""} ${t.webhookUrl?"":Ae.disabled}`,children:"Auto-Send"}),s.jsx(md,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:P=>n({webhooksEnabled:P.target.checked}),disabled:!t.webhookUrl})]})]}),s.jsx("p",{className:Ae.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),s.jsx("textarea",{className:Ae.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:P=>P.stopPropagation(),onChange:P=>n({webhookUrl:P.target.value})})]})]})]})})}function gd(t,n="filtered"){const{name:o,path:l}=Ci(t);if(n==="off")return{name:o,elementName:o,path:l,reactComponents:null};const a=Lx(t,{mode:n});return{name:a.path?`${a.path} ${o}`:o,elementName:o,path:l,reactComponents:a.path}}var Gp=!1,yd={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},no=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Rl=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],i5=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...Rl.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${Rl.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Rl.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};i5();function Ns(t,n){let o=document.elementFromPoint(t,n);if(!o)return null;for(;o!=null&&o.shadowRoot;){const l=o.shadowRoot.elementFromPoint(t,n);if(!l||l===o)break;o=l}return o}function xd(t){let n=t;for(;n&&n!==document.body;){const l=window.getComputedStyle(n).position;if(l==="fixed"||l==="sticky")return!0;n=n.parentElement}return!1}function Ms(t){return t.status!=="resolved"&&t.status!=="dismissed"}function oc(t){const n=Bd(t),o=n.found?n:Hx(t);if(o.found&&o.source)return Ux(o.source,"path")}function l5({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:o=!1,onAnnotationAdd:l,onAnnotationDelete:a,onAnnotationUpdate:u,onAnnotationsClear:f,onCopy:p,onSubmit:_,copyToClipboard:w=!0,endpoint:y,sessionId:x,onSessionCreated:b,webhookUrl:P,className:N}={}){var Zs,$o,ea,Xi,qi,Qi;const[M,I]=m.useState(!1),[R,Y]=m.useState([]),[Q,$]=m.useState(!0),[ie,re]=m.useState(()=>xx()),[ne,De]=m.useState(!1),rt=m.useRef(null);m.useEffect(()=>{const v=T=>{const E=rt.current;E&&E.contains(T.target)&&T.stopPropagation()},S=["mousedown","click","pointerdown"];return S.forEach(T=>document.body.addEventListener(T,v)),()=>{S.forEach(T=>document.body.removeEventListener(T,v))}},[]);const[Le,Te]=m.useState(!1),[tt,Ge]=m.useState(!1),[ce,me]=m.useState(null),[de,ze]=m.useState({x:0,y:0}),[D,X]=m.useState(null),[G,j]=m.useState(!1),[H,ge]=m.useState("idle"),[Se,Fe]=m.useState(!1),[q,ve]=m.useState(!1),[Pe,ut]=m.useState(null),[Bt,Dt]=m.useState(null),[_t,Ht]=m.useState([]),[Tt,an]=m.useState(null),[Xe,Xt]=m.useState(null),[J,Re]=m.useState(null),[ot,Ve]=m.useState(null),[dt,mt]=m.useState([]),[Ct,ft]=m.useState(0),[Nt,Ft]=m.useState(!1),[We,z]=m.useState(!1),[W,ee]=m.useState(!1),[se,Be]=m.useState(!1),[Me,pe]=m.useState(!1),[xt,ct]=m.useState("main"),[bt,Je]=m.useState(!1),[Ce,gt]=m.useState(!1),[kt,cn]=m.useState(!1),[je,jt]=m.useState([]),[yt,ht]=m.useState(null),nn=m.useRef(!1),[qe,St]=m.useState(!1),[un,yn]=m.useState(!1),[Tn,yr]=m.useState(1),[er,Nn]=m.useState("new-page"),[qt,ur]=m.useState(""),[tr,jo]=m.useState(!1),[we,qn]=m.useState(null),Ws=m.useRef(!1),Li=m.useRef({rearrange:null,placements:[]}),Wr=m.useRef({rearrange:null,placements:[]}),[Fl,Pi]=m.useState(0),[Wl,Lc]=m.useState(0),[Pc,Gt]=m.useState(0),[Oc,Us]=m.useState(0),Eo=m.useRef(new Set),so=m.useRef(new Set),dr=m.useRef(null),ss=m.useRef(),is=Ce&&M&&!kt&&qe;m.useEffect(()=>{if(is){yn(!1);const v=Si(()=>{yn(!0)});return()=>cancelAnimationFrame(v)}else yn(!1)},[is]);const zn=m.useRef(new Map),ls=m.useRef(new Map),An=m.useRef(),[fr,Oi]=m.useState(!1),[nr,Hs]=m.useState([]),Ys=m.useRef(nr);Ys.current=nr;const[Ro,Ai]=m.useState(null),$i=m.useRef(null);m.useRef(!1),m.useRef([]),m.useRef(0),m.useRef(null),m.useRef(null),m.useRef(1);const[Ul,Vs]=m.useState(!1),io=m.useRef(null),[rn,xr]=m.useState([]),vr=m.useRef({cmd:!1,shift:!1}),bn=()=>{Je(!0)},At=()=>{Je(!1)},Hl=()=>{Ul||(io.current=nt(()=>Vs(!0),850))},Yl=()=>{io.current&&(clearTimeout(io.current),io.current=null),Vs(!1),At()};m.useEffect(()=>()=>{io.current&&clearTimeout(io.current)},[]);const[wt,Vl]=m.useState(()=>{try{const v=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...yd,...v,annotationColorId:Rl.find(S=>S.id===v.annotationColorId)?v.annotationColorId:yd.annotationColorId}}catch{return yd}}),[hr,Bi]=m.useState(!0),[Xs,as]=m.useState(!1),Ur=()=>{var v;(v=rt.current)==null||v.classList.add(le.disableTransitions),Bi(S=>!S),Si(()=>{var S;(S=rt.current)==null||S.classList.remove(le.disableTransitions)})},Hr=!1,Fn="off",[Jt,lo]=m.useState(x??null),Ir=m.useRef(!1),[pr,Yr]=m.useState(y?"connecting":"disconnected"),[Lt,Di]=m.useState(null),[Vr,cs]=m.useState(!1),[ao,Xl]=m.useState(null),co=m.useRef(!1),[To,wr]=m.useState(new Set),[us,qs]=m.useState(new Set),[ds,No]=m.useState(!1),[Qs,Xr]=m.useState(!1),[br,Lr]=m.useState(!1),qr=m.useRef(null),Qn=m.useRef(null),Mo=m.useRef(null),Qr=m.useRef(null),uo=m.useRef(!1),zi=m.useRef(0),Mn=m.useRef(null),fo=m.useRef(null),fs=8,hs=50,ql=m.useRef(null),Ks=m.useRef(null),ho=m.useRef(null),Qe=typeof window<"u"?window.location.pathname:"/";m.useEffect(()=>{if(se)pe(!0);else{Je(!1),ct("main");const v=nt(()=>pe(!1),0);return()=>clearTimeout(v)}},[se]);const Io=M&&Q&&!Ce;m.useEffect(()=>{if(Io){Ge(!1),Te(!0),wr(new Set);const v=nt(()=>{wr(S=>{const T=new Set(S);return R.forEach(E=>T.add(E.id)),T})},350);return()=>clearTimeout(v)}else if(Le){Ge(!0);const v=nt(()=>{Te(!1),Ge(!1)},250);return()=>clearTimeout(v)}},[Io]),m.useEffect(()=>{z(!0),ft(window.scrollY);const v=dd(Qe);Y(v.filter(Ms)),Gp||(as(!0),Gp=!0,nt(()=>as(!1),750));try{const S=localStorage.getItem("feedback-toolbar-theme");S!==null&&Bi(S==="dark")}catch{}try{const S=localStorage.getItem("feedback-toolbar-position");if(S){const T=JSON.parse(S);typeof T.x=="number"&&typeof T.y=="number"&&Di(T)}}catch{}},[Qe]),m.useEffect(()=>{We&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(wt))},[wt,We]),m.useEffect(()=>{We&&localStorage.setItem("feedback-toolbar-theme",hr?"dark":"light")},[hr,We]);const Fi=m.useRef(!1);m.useEffect(()=>{const v=Fi.current;Fi.current=Vr,v&&!Vr&&Lt&&We&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Lt))},[Vr,Lt,We]),m.useEffect(()=>{if(!y||!We||Ir.current)return;Ir.current=!0,Yr("connecting"),(async()=>{try{const S=gx(Qe),T=x||S;let E=!1;if(T)try{const B=await Wp(y,T);lo(B.id),Yr("connected"),fd(Qe,B.id),E=!0;const K=dd(Qe),he=new Set(B.annotations.map(xe=>xe.id)),ye=K.filter(xe=>!he.has(xe.id));if(ye.length>0){const Ie=`${typeof window<"u"?window.location.origin:""}${Qe}`,Ze=(await Promise.allSettled(ye.map(Ke=>xi(y,B.id,{...Ke,sessionId:B.id,url:Ie})))).map((Ke,ke)=>Ke.status==="fulfilled"?Ke.value:(console.warn("[Agentation] Failed to sync annotation:",Ke.reason),ye[ke])),vt=[...B.annotations,...Ze];Y(vt.filter(Ms)),wl(Qe,vt.filter(Ms),B.id)}else Y(B.annotations.filter(Ms)),wl(Qe,B.annotations.filter(Ms),B.id)}catch(B){console.warn("[Agentation] Could not join session, creating new:",B),yx(Qe)}if(!E){const B=typeof window<"u"?window.location.href:"/",K=await hd(y,B);lo(K.id),Yr("connected"),fd(Qe,K.id),b==null||b(K.id);const he=cx(),ye=typeof window<"u"?window.location.origin:"",xe=[];for(const[Ie,Ye]of he){const Ze=Ye.filter(ke=>!ke._syncedTo);if(Ze.length===0)continue;const vt=`${ye}${Ie}`,Ke=Ie===Qe;xe.push((async()=>{try{const ke=Ke?K:await hd(y,vt),dn=(await Promise.allSettled(Ze.map(Mt=>xi(y,ke.id,{...Mt,sessionId:ke.id,url:vt})))).map((Mt,fn)=>Mt.status==="fulfilled"?Mt.value:(console.warn("[Agentation] Failed to sync annotation:",Mt.reason),Ze[fn])).filter(Ms);if(wl(Ie,dn,ke.id),Ke){const Mt=new Set(Ze.map(fn=>fn.id));Y(fn=>{const lt=fn.filter(pt=>!Mt.has(pt.id));return[...dn,...lt]})}}catch(ke){console.warn(`[Agentation] Failed to sync annotations for ${Ie}:`,ke)}})())}await Promise.allSettled(xe)}}catch(S){Yr("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",S)}})()},[y,x,We,b,Qe]),m.useEffect(()=>{if(!y||!We)return;const v=async()=>{try{(await fetch(`${y}/health`)).ok?Yr("connected"):Yr("disconnected")}catch{Yr("disconnected")}};v();const S=fy(v,1e4);return()=>clearInterval(S)},[y,We]),m.useEffect(()=>{if(!y||!We||!Jt)return;const v=new EventSource(`${y}/sessions/${Jt}/events`),S=["resolved","dismissed"],T=E=>{var B;try{const K=JSON.parse(E.data);if(S.includes((B=K.payload)==null?void 0:B.status)){const he=K.payload.id,ye=K.payload.kind;if(ye==="placement"){for(const[xe,Ie]of zn.current)if(Ie===he){zn.current.delete(xe),jt(Ye=>Ye.filter(Ze=>Ze.id!==xe));break}}else if(ye==="rearrange"){for(const[xe,Ie]of ls.current)if(Ie===he){ls.current.delete(xe),qn(Ye=>{if(!Ye)return null;const Ze=Ye.sections.filter(vt=>vt.id!==xe);return Ze.length===0?null:{...Ye,sections:Ze}});break}}else qs(xe=>new Set(xe).add(he)),nt(()=>{Y(xe=>xe.filter(Ie=>Ie.id!==he)),qs(xe=>{const Ie=new Set(xe);return Ie.delete(he),Ie})},150)}}catch{}};return v.addEventListener("annotation.updated",T),()=>{v.removeEventListener("annotation.updated",T),v.close()}},[y,We,Jt]),m.useEffect(()=>{if(!y||!We)return;const v=fo.current==="disconnected",S=pr==="connected";fo.current=pr,v&&S&&(async()=>{try{const E=dd(Qe);if(E.length===0)return;const K=`${typeof window<"u"?window.location.origin:""}${Qe}`;let he=Jt,ye=[];if(he)try{ye=(await Wp(y,he)).annotations}catch{he=null}he||(he=(await hd(y,K)).id,lo(he),fd(Qe,he));const xe=new Set(ye.map(Ye=>Ye.id)),Ie=E.filter(Ye=>!xe.has(Ye.id));if(Ie.length>0){const Ze=(await Promise.allSettled(Ie.map(ke=>xi(y,he,{...ke,sessionId:he,url:K})))).map((ke,Zt)=>ke.status==="fulfilled"?ke.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ke.reason),Ie[Zt])),Ke=[...ye,...Ze].filter(Ms);Y(Ke),wl(Qe,Ke,he)}}catch(E){console.warn("[Agentation] Failed to sync on reconnect:",E)}})()},[pr,y,We,Jt,Qe]);const Ac=m.useCallback(()=>{ne||(De(!0),Be(!1),I(!1),nt(()=>{vx(!0),re(!0),De(!1)},400))},[ne]);m.useEffect(()=>{if(!o||!We||!t||t.length===0||R.length>0)return;const v=[];return v.push(nt(()=>{I(!0)},n-200)),t.forEach((S,T)=>{const E=n+T*300;v.push(nt(()=>{const B=document.querySelector(S.selector);if(!B)return;const K=B.getBoundingClientRect(),{name:he,path:ye}=Ci(B),xe={id:`demo-${Date.now()}-${T}`,x:(K.left+K.width/2)/window.innerWidth*100,y:K.top+K.height/2+window.scrollY,comment:S.comment,element:he,elementPath:ye,timestamp:Date.now(),selectedText:S.selectedText,boundingBox:{x:K.left,y:K.top+window.scrollY,width:K.width,height:K.height},nearbyText:xl(B),cssClasses:vl(B)};Y(Ie=>[...Ie,xe])},E))}),()=>{v.forEach(clearTimeout)}},[o,We,t,n]),m.useEffect(()=>{const v=()=>{ft(window.scrollY),Ft(!0),ho.current&&clearTimeout(ho.current),ho.current=nt(()=>{Ft(!1)},150)};return window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("scroll",v),ho.current&&clearTimeout(ho.current)}},[]),m.useEffect(()=>{We&&R.length>0?Jt?wl(Qe,R,Jt):em(Qe,R):We&&R.length===0&&localStorage.removeItem(yc(Qe))},[R,Qe,We,Jt]),m.useEffect(()=>{if(We&&!nn.current){nn.current=!0;const v=ux(Qe);v.length>0&&jt(v)}},[We,Qe]),m.useEffect(()=>{We&&nn.current&&!qe&&(je.length>0?dx(Qe,je):fx(Qe))},[je,Qe,We,qe]),m.useEffect(()=>{if(We&&!Ws.current){Ws.current=!0;const v=hx(Qe);if(v){const S={...v,sections:v.sections.map(T=>({...T,currentRect:T.currentRect??{...T.originalRect}}))};qn(S)}}},[We,Qe]),m.useEffect(()=>{We&&Ws.current&&!qe&&(we?px(Qe,we):_x(Qe))},[we,Qe,We,qe]);const Wi=m.useRef(!1);m.useEffect(()=>{if(We&&!Wi.current){Wi.current=!0;const v=mx(Qe);v&&(Wr.current={rearrange:v.rearrange,placements:v.placements||[]},v.purpose&&ur(v.purpose))}},[We,Qe]),m.useEffect(()=>{var S,T,E;if(!We||!Wi.current)return;const v=Wr.current;qe?(((S=we==null?void 0:we.sections)==null?void 0:S.length)??0)>0||je.length>0||qt?Fp(Qe,{rearrange:we,placements:je,purpose:qt}):tc(Qe):(((E=(T=v.rearrange)==null?void 0:T.sections)==null?void 0:E.length)??0)>0||v.placements.length>0||qt?Fp(Qe,{rearrange:v.rearrange,placements:v.placements,purpose:qt}):tc(Qe)},[we,je,qt,qe,Qe,We]),m.useEffect(()=>{Ce&&!we&&qn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ce,we]),m.useEffect(()=>{if(!y||!Jt)return;const v=zn.current,S=new Set(je.map(T=>T.id));for(const T of je){if(v.has(T.id))continue;v.set(T.id,"");const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Qe;xi(y,Jt,{id:T.id,x:T.x/window.innerWidth*100,y:T.y,comment:`Place ${T.type} at (${Math.round(T.x)}, ${Math.round(T.y)}), ${T.width}×${T.height}px${T.text?` — "${T.text}"`:""}`,element:`[design:${T.type}]`,elementPath:"[placement]",timestamp:T.timestamp,url:E,intent:"change",severity:"important",kind:"placement",placement:{componentType:T.type,width:T.width,height:T.height,scrollY:T.scrollY,text:T.text}}).then(B=>{v.has(T.id)&&v.set(T.id,B.id)}).catch(B=>{console.warn("[Agentation] Failed to sync placement annotation:",B),v.delete(T.id)})}for(const[T,E]of v)S.has(T)||(v.delete(T),E&&es(y,E).catch(()=>{}))},[je,y,Jt,Qe]),m.useEffect(()=>{if(!(!y||!Jt))return An.current&&clearTimeout(An.current),An.current=nt(()=>{const v=ls.current;if(!we||we.sections.length===0){for(const[,E]of v)E&&es(y,E).catch(()=>{});v.clear();return}const S=new Set(we.sections.map(E=>E.id)),T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Qe;for(const E of we.sections){const B=E.originalRect,K=E.currentRect;if(!(Math.abs(B.x-K.x)>1||Math.abs(B.y-K.y)>1||Math.abs(B.width-K.width)>1||Math.abs(B.height-K.height)>1)){const xe=v.get(E.id);xe&&(v.delete(E.id),es(y,xe).catch(()=>{}));continue}const ye=v.get(E.id);ye?Up(y,ye,{comment:`Move ${E.label} section (${E.tagName}) — from (${Math.round(B.x)},${Math.round(B.y)}) ${Math.round(B.width)}×${Math.round(B.height)} to (${Math.round(K.x)},${Math.round(K.y)}) ${Math.round(K.width)}×${Math.round(K.height)}`}).catch(xe=>{console.warn("[Agentation] Failed to update rearrange annotation:",xe)}):(v.set(E.id,""),xi(y,Jt,{id:E.id,x:K.x/window.innerWidth*100,y:K.y,comment:`Move ${E.label} section (${E.tagName}) — from (${Math.round(B.x)},${Math.round(B.y)}) ${Math.round(B.width)}×${Math.round(B.height)} to (${Math.round(K.x)},${Math.round(K.y)}) ${Math.round(K.width)}×${Math.round(K.height)}`,element:E.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:T,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:E.selector,label:E.label,tagName:E.tagName,originalRect:B,currentRect:K}}).then(xe=>{v.has(E.id)&&v.set(E.id,xe.id)}).catch(xe=>{console.warn("[Agentation] Failed to sync rearrange annotation:",xe),v.delete(E.id)}))}for(const[E,B]of v)S.has(E)||(v.delete(E),B&&es(y,B).catch(()=>{}))},300),()=>{An.current&&clearTimeout(An.current)}},[we,y,Jt,Qe]);const Lo=m.useRef(new Map);m.useLayoutEffect(()=>{const v=(we==null?void 0:we.sections)??[],S=new Set;if((Ce||kt)&&M)for(const T of v){S.add(T.id);try{const E=document.querySelector(T.selector);if(!E)continue;if(!Lo.current.has(T.id)){const B={transform:E.style.transform,transformOrigin:E.style.transformOrigin,opacity:E.style.opacity,position:E.style.position,zIndex:E.style.zIndex,display:E.style.display},K=[];let he=E.parentElement;for(;he&&he!==document.body;){const xe=getComputedStyle(he);(xe.overflow!=="visible"||xe.overflowX!=="visible"||xe.overflowY!=="visible")&&(K.push({el:he,overflow:he.style.overflow}),he.style.overflow="visible"),he=he.parentElement}getComputedStyle(E).display==="inline"&&(E.style.display="inline-block"),Lo.current.set(T.id,{el:E,origStyles:B,ancestors:K}),E.style.transformOrigin="top left",E.style.zIndex="9999"}}catch{}}for(const[T,E]of Lo.current)if(!S.has(T)){const{el:B,origStyles:K,ancestors:he}=E;B.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",B.style.transform=K.transform,B.style.transformOrigin=K.transformOrigin,B.style.opacity=K.opacity,B.style.position=K.position,B.style.zIndex=K.zIndex,Lo.current.delete(T),nt(()=>{B.style.transition="",B.style.display=K.display;for(const ye of he)ye.el.style.overflow=ye.overflow},450)}},[we,Ce,kt,M]),m.useEffect(()=>()=>{for(const[,v]of Lo.current){const{el:S,origStyles:T,ancestors:E}=v;S.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",S.style.transform=T.transform,S.style.transformOrigin=T.transformOrigin,S.style.opacity=T.opacity,S.style.position=T.position,S.style.zIndex=T.zIndex,nt(()=>{S.style.transition="",S.style.display=T.display;for(const B of E)B.el.style.overflow=B.overflow},450)}Lo.current.clear()},[]);const Po=m.useCallback(()=>{cn(!0),gt(!1),ht(null),clearTimeout(ss.current),ss.current=nt(()=>{cn(!1)},300)},[]),Ql=m.useCallback(()=>{Ce&&(cn(!0),gt(!1),ht(null),clearTimeout(ss.current),ss.current=nt(()=>{cn(!1)},300)),I(!1)},[Ce]),Kl=m.useCallback(()=>{W||(py(),ee(!0))},[W]),Gs=m.useCallback(()=>{W&&(Ep(),ee(!1))},[W]),Ui=m.useCallback(()=>{W?Gs():Kl()},[W,Kl,Gs]),Gl=m.useCallback(()=>{if(rn.length===0)return;const v=rn[0],S=v.element,T=rn.length>1,E=rn.map(B=>B.element.getBoundingClientRect());if(T){const B={left:Math.min(...E.map(ke=>ke.left)),top:Math.min(...E.map(ke=>ke.top)),right:Math.max(...E.map(ke=>ke.right)),bottom:Math.max(...E.map(ke=>ke.bottom))},K=rn.slice(0,5).map(ke=>ke.name).join(", "),he=rn.length>5?` +${rn.length-5} more`:"",ye=E.map(ke=>({x:ke.left,y:ke.top+window.scrollY,width:ke.width,height:ke.height})),Ie=rn[rn.length-1].element,Ye=E[E.length-1],Ze=Ye.left+Ye.width/2,vt=Ye.top+Ye.height/2,Ke=xd(Ie);X({x:Ze/window.innerWidth*100,y:Ke?vt:vt+window.scrollY,clientY:vt,element:`${rn.length} elements: ${K}${he}`,elementPath:"multi-select",boundingBox:{x:B.left,y:B.top+window.scrollY,width:B.right-B.left,height:B.bottom-B.top},isMultiSelect:!0,isFixed:Ke,elementBoundingBoxes:ye,multiSelectElements:rn.map(ke=>ke.element),targetElement:Ie,fullPath:Ja(S),accessibility:Ga(S),computedStyles:Ka(S),computedStylesObj:Qa(S),nearbyElements:qa(S),cssClasses:vl(S),nearbyText:xl(S),sourceFile:oc(S)})}else{const B=E[0],K=xd(S);X({x:B.left/window.innerWidth*100,y:K?B.top:B.top+window.scrollY,clientY:B.top,element:v.name,elementPath:v.path,boundingBox:{x:B.left,y:K?B.top:B.top+window.scrollY,width:B.width,height:B.height},isFixed:K,fullPath:Ja(S),accessibility:Ga(S),computedStyles:Ka(S),computedStylesObj:Qa(S),nearbyElements:qa(S),cssClasses:vl(S),nearbyText:xl(S),reactComponents:v.reactComponents,sourceFile:oc(S)})}xr([]),me(null)},[rn]);m.useEffect(()=>{M||(X(null),Re(null),Ve(null),mt([]),me(null),Be(!1),xr([]),vr.current={cmd:!1,shift:!1},W&&Gs())},[M,W,Gs]),m.useEffect(()=>()=>{Ep()},[]),m.useEffect(()=>{if(!M)return;const v=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),S=":not([data-agentation-root]):not([data-agentation-root] *)",T=document.createElement("style");return T.id="feedback-cursor-styles",T.textContent=`
      body ${S} {
        cursor: crosshair !important;
      }

      body :is(${v})${S} {
        cursor: text !important;
      }
    `,document.head.appendChild(T),()=>{const E=document.getElementById("feedback-cursor-styles");E&&E.remove()}},[M]),m.useEffect(()=>{if(Ro!==null&&M)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ro,M]),m.useEffect(()=>{if(!M||D||fr||Ce)return;const v=S=>{const T=S.composedPath()[0]||S.target;if(Jn(T,"[data-feedback-toolbar]")){me(null);return}const E=Ns(S.clientX,S.clientY);if(!E||Jn(E,"[data-feedback-toolbar]")){me(null);return}const{name:B,elementName:K,path:he,reactComponents:ye}=gd(E,Fn),xe=E.getBoundingClientRect();me({element:B,elementName:K,elementPath:he,rect:xe,reactComponents:ye}),ze({x:S.clientX,y:S.clientY})};return document.addEventListener("mousemove",v),()=>document.removeEventListener("mousemove",v)},[M,D,fr,Ce,Fn,nr]);const ps=m.useCallback(v=>{var S;if(Re(v),ut(null),Dt(null),Ht([]),(S=v.elementBoundingBoxes)!=null&&S.length){const T=[];for(const E of v.elementBoundingBoxes){const B=E.x+E.width/2,K=E.y+E.height/2-window.scrollY,he=Ns(B,K);he&&T.push(he)}mt(T),Ve(null)}else if(v.boundingBox){const T=v.boundingBox,E=T.x+T.width/2,B=v.isFixed?T.y+T.height/2:T.y+T.height/2-window.scrollY,K=Ns(E,B);if(K){const he=K.getBoundingClientRect(),ye=he.width/T.width,xe=he.height/T.height;ye<.5||xe<.5?Ve(null):Ve(K)}else Ve(null);mt([])}else Ve(null),mt([])},[]);m.useEffect(()=>{if(!M||fr||Ce)return;const v=S=>{var Wt,dn;if(uo.current){uo.current=!1;return}const T=S.composedPath()[0]||S.target;if(Jn(T,"[data-feedback-toolbar]")||Jn(T,"[data-annotation-popup]")||Jn(T,"[data-annotation-marker]"))return;if(S.metaKey&&S.shiftKey&&!D&&!J){S.preventDefault(),S.stopPropagation();const Mt=Ns(S.clientX,S.clientY);if(!Mt)return;const fn=Mt.getBoundingClientRect(),{name:lt,path:pt,reactComponents:xn}=gd(Mt,Fn),Qt=rn.findIndex(Yt=>Yt.element===Mt);Qt>=0?xr(Yt=>Yt.filter((jn,_n)=>_n!==Qt)):xr(Yt=>[...Yt,{element:Mt,rect:fn,name:lt,path:pt,reactComponents:xn??void 0}]);return}const E=Jn(T,"button, a, input, select, textarea, [role='button'], [onclick]");if(wt.blockInteractions&&E&&(S.preventDefault(),S.stopPropagation()),D){if(E&&!wt.blockInteractions)return;S.preventDefault(),(Wt=ql.current)==null||Wt.shake();return}if(J){if(E&&!wt.blockInteractions)return;S.preventDefault(),(dn=Ks.current)==null||dn.shake();return}S.preventDefault();const B=Ns(S.clientX,S.clientY);if(!B)return;const{name:K,path:he,reactComponents:ye}=gd(B,Fn),xe=B.getBoundingClientRect(),Ie=S.clientX/window.innerWidth*100,Ye=xd(B),Ze=Ye?S.clientY:S.clientY+window.scrollY,vt=window.getSelection();let Ke;vt&&vt.toString().trim().length>0&&(Ke=vt.toString().trim().slice(0,500));const ke=Qa(B),Zt=Ka(B);X({x:Ie,y:Ze,clientY:S.clientY,element:K,elementPath:he,selectedText:Ke,boundingBox:{x:xe.left,y:Ye?xe.top:xe.top+window.scrollY,width:xe.width,height:xe.height},nearbyText:xl(B),cssClasses:vl(B),isFixed:Ye,fullPath:Ja(B),accessibility:Ga(B),computedStyles:Zt,computedStylesObj:ke,nearbyElements:qa(B),reactComponents:ye??void 0,sourceFile:oc(B),targetElement:B}),me(null)};return document.addEventListener("click",v,!0),()=>document.removeEventListener("click",v,!0)},[M,fr,Ce,D,J,wt.blockInteractions,Fn,rn]),m.useEffect(()=>{if(!M)return;const v=E=>{E.key==="Meta"&&(vr.current.cmd=!0),E.key==="Shift"&&(vr.current.shift=!0)},S=E=>{const B=vr.current.cmd&&vr.current.shift;E.key==="Meta"&&(vr.current.cmd=!1),E.key==="Shift"&&(vr.current.shift=!1);const K=vr.current.cmd&&vr.current.shift;B&&!K&&rn.length>0&&Gl()},T=()=>{vr.current={cmd:!1,shift:!1},xr([])};return document.addEventListener("keydown",v),document.addEventListener("keyup",S),window.addEventListener("blur",T),()=>{document.removeEventListener("keydown",v),document.removeEventListener("keyup",S),window.removeEventListener("blur",T)}},[M,rn,Gl]),m.useEffect(()=>{if(!M||D||fr||Ce)return;const v=S=>{const T=S.composedPath()[0]||S.target;Jn(T,"[data-feedback-toolbar]")||Jn(T,"[data-annotation-marker]")||Jn(T,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(T.tagName)||T.isContentEditable||(S.preventDefault(),qr.current={x:S.clientX,y:S.clientY})};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[M,D,fr,Ce]),m.useEffect(()=>{if(!M||D)return;const v=S=>{if(!qr.current)return;const T=S.clientX-qr.current.x,E=S.clientY-qr.current.y,B=T*T+E*E,K=fs*fs;if(!br&&B>=K&&(Qn.current=qr.current,Lr(!0),S.preventDefault()),(br||B>=K)&&Qn.current){if(Mo.current){const lt=Math.min(Qn.current.x,S.clientX),pt=Math.min(Qn.current.y,S.clientY),xn=Math.abs(S.clientX-Qn.current.x),Qt=Math.abs(S.clientY-Qn.current.y);Mo.current.style.transform=`translate(${lt}px, ${pt}px)`,Mo.current.style.width=`${xn}px`,Mo.current.style.height=`${Qt}px`}const he=Date.now();if(he-zi.current<hs)return;zi.current=he;const ye=Qn.current.x,xe=Qn.current.y,Ie=Math.min(ye,S.clientX),Ye=Math.min(xe,S.clientY),Ze=Math.max(ye,S.clientX),vt=Math.max(xe,S.clientY),Ke=(Ie+Ze)/2,ke=(Ye+vt)/2,Zt=new Set,Wt=[[Ie,Ye],[Ze,Ye],[Ie,vt],[Ze,vt],[Ke,ke],[Ke,Ye],[Ke,vt],[Ie,ke],[Ze,ke]];for(const[lt,pt]of Wt){const xn=document.elementsFromPoint(lt,pt);for(const Qt of xn)Qt instanceof HTMLElement&&Zt.add(Qt)}const dn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const lt of dn)if(lt instanceof HTMLElement){const pt=lt.getBoundingClientRect(),xn=pt.left+pt.width/2,Qt=pt.top+pt.height/2,Yt=xn>=Ie&&xn<=Ze&&Qt>=Ye&&Qt<=vt,jn=Math.min(pt.right,Ze)-Math.max(pt.left,Ie),_n=Math.min(pt.bottom,vt)-Math.max(pt.top,Ye),Bo=jn>0&&_n>0?jn*_n:0,Kr=pt.width*pt.height,Pr=Kr>0?Bo/Kr:0;(Yt||Pr>.5)&&Zt.add(lt)}const Mt=[],fn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const lt of Zt){if(Jn(lt,"[data-feedback-toolbar]")||Jn(lt,"[data-annotation-marker]"))continue;const pt=lt.getBoundingClientRect();if(!(pt.width>window.innerWidth*.8&&pt.height>window.innerHeight*.5)&&!(pt.width<10||pt.height<10)&&pt.left<Ze&&pt.right>Ie&&pt.top<vt&&pt.bottom>Ye){const xn=lt.tagName;let Qt=fn.has(xn);if(!Qt&&(xn==="DIV"||xn==="SPAN")){const Yt=lt.textContent&&lt.textContent.trim().length>0,jn=lt.onclick!==null||lt.getAttribute("role")==="button"||lt.getAttribute("role")==="link"||lt.classList.contains("clickable")||lt.hasAttribute("data-clickable");(Yt||jn)&&!lt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Qt=!0)}if(Qt){let Yt=!1;for(const jn of Mt)if(jn.left<=pt.left&&jn.right>=pt.right&&jn.top<=pt.top&&jn.bottom>=pt.bottom){Yt=!0;break}Yt||Mt.push(pt)}}}if(Qr.current){const lt=Qr.current;for(;lt.children.length>Mt.length;)lt.removeChild(lt.lastChild);Mt.forEach((pt,xn)=>{let Qt=lt.children[xn];Qt||(Qt=document.createElement("div"),Qt.className=le.selectedElementHighlight,lt.appendChild(Qt)),Qt.style.transform=`translate(${pt.left}px, ${pt.top}px)`,Qt.style.width=`${pt.width}px`,Qt.style.height=`${pt.height}px`})}}};return document.addEventListener("mousemove",v,{passive:!0}),()=>document.removeEventListener("mousemove",v)},[M,D,br,fs]),m.useEffect(()=>{if(!M)return;const v=S=>{const T=br,E=Qn.current;if(br&&E){uo.current=!0;const B=Math.min(E.x,S.clientX),K=Math.min(E.y,S.clientY),he=Math.max(E.x,S.clientX),ye=Math.max(E.y,S.clientY),xe=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Ke=>{if(!(Ke instanceof HTMLElement)||Jn(Ke,"[data-feedback-toolbar]")||Jn(Ke,"[data-annotation-marker]"))return;const ke=Ke.getBoundingClientRect();ke.width>window.innerWidth*.8&&ke.height>window.innerHeight*.5||ke.width<10||ke.height<10||ke.left<he&&ke.right>B&&ke.top<ye&&ke.bottom>K&&xe.push({element:Ke,rect:ke})});const Ye=xe.filter(({element:Ke})=>!xe.some(({element:ke})=>ke!==Ke&&Ke.contains(ke))),Ze=S.clientX/window.innerWidth*100,vt=S.clientY+window.scrollY;if(Ye.length>0){const Ke=Ye.reduce((fn,{rect:lt})=>({left:Math.min(fn.left,lt.left),top:Math.min(fn.top,lt.top),right:Math.max(fn.right,lt.right),bottom:Math.max(fn.bottom,lt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ke=Ye.slice(0,5).map(({element:fn})=>Ci(fn).name).join(", "),Zt=Ye.length>5?` +${Ye.length-5} more`:"",Wt=Ye[0].element,dn=Qa(Wt),Mt=Ka(Wt);X({x:Ze,y:vt,clientY:S.clientY,element:`${Ye.length} elements: ${ke}${Zt}`,elementPath:"multi-select",boundingBox:{x:Ke.left,y:Ke.top+window.scrollY,width:Ke.right-Ke.left,height:Ke.bottom-Ke.top},isMultiSelect:!0,fullPath:Ja(Wt),accessibility:Ga(Wt),computedStyles:Mt,computedStylesObj:dn,nearbyElements:qa(Wt),cssClasses:vl(Wt),nearbyText:xl(Wt),sourceFile:oc(Wt)})}else{const Ke=Math.abs(he-B),ke=Math.abs(ye-K);Ke>20&&ke>20&&X({x:Ze,y:vt,clientY:S.clientY,element:"Area selection",elementPath:`region at (${Math.round(B)}, ${Math.round(K)})`,boundingBox:{x:B,y:K+window.scrollY,width:Ke,height:ke},isMultiSelect:!0})}me(null)}else T&&(uo.current=!0);qr.current=null,Qn.current=null,Lr(!1),Qr.current&&(Qr.current.innerHTML="")};return document.addEventListener("mouseup",v),()=>document.removeEventListener("mouseup",v)},[M,br]);const kr=m.useCallback(async(v,S,T)=>{const E=wt.webhookUrl||P;if(!E||!wt.webhooksEnabled&&!T)return!1;try{return(await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:v,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...S})})).ok}catch(B){return console.warn("[Agentation] Webhook failed:",B),!1}},[P,wt.webhookUrl,wt.webhooksEnabled]),$c=m.useCallback(v=>{var T;if(!D)return;const S={id:Date.now().toString(),x:D.x,y:D.y,comment:v,element:D.element,elementPath:D.elementPath,timestamp:Date.now(),selectedText:D.selectedText,boundingBox:D.boundingBox,nearbyText:D.nearbyText,cssClasses:D.cssClasses,isMultiSelect:D.isMultiSelect,isFixed:D.isFixed,fullPath:D.fullPath,accessibility:D.accessibility,computedStyles:D.computedStyles,nearbyElements:D.nearbyElements,reactComponents:D.reactComponents,sourceFile:D.sourceFile,elementBoundingBoxes:D.elementBoundingBoxes,...y&&Jt?{sessionId:Jt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};Y(E=>[...E,S]),Mn.current=S.id,nt(()=>{Mn.current=null},300),nt(()=>{wr(E=>new Set(E).add(S.id))},250),l==null||l(S),kr("annotation.add",{annotation:S}),No(!0),nt(()=>{X(null),No(!1)},150),(T=window.getSelection())==null||T.removeAllRanges(),y&&Jt&&xi(y,Jt,S).then(E=>{E.id!==S.id&&(Y(B=>B.map(K=>K.id===S.id?{...K,id:E.id}:K)),wr(B=>{const K=new Set(B);return K.delete(S.id),K.add(E.id),K}))}).catch(E=>{console.warn("[Agentation] Failed to sync annotation:",E)})},[D,l,kr,y,Jt]),Hi=m.useCallback(()=>{No(!0),nt(()=>{X(null),No(!1)},150)},[]),Yi=m.useCallback(v=>{const S=R.findIndex(E=>E.id===v),T=R[S];(J==null?void 0:J.id)===v&&(Xr(!0),nt(()=>{Re(null),Ve(null),mt([]),Xr(!1)},150)),an(v),qs(E=>new Set(E).add(v)),T&&(a==null||a(T),kr("annotation.delete",{annotation:T})),y&&es(y,v).catch(E=>{console.warn("[Agentation] Failed to delete annotation from server:",E)}),nt(()=>{Y(E=>E.filter(B=>B.id!==v)),qs(E=>{const B=new Set(E);return B.delete(v),B}),an(null),S<R.length-1&&(Xt(S),nt(()=>Xt(null),200))},150)},[R,J,a,kr,y]),Oo=m.useCallback(v=>{var S;if(!v){ut(null),Dt(null),Ht([]);return}if(ut(v.id),(S=v.elementBoundingBoxes)!=null&&S.length){const T=[];for(const E of v.elementBoundingBoxes){const B=E.x+E.width/2,K=E.y+E.height/2-window.scrollY,ye=document.elementsFromPoint(B,K).find(xe=>!xe.closest("[data-annotation-marker]")&&!xe.closest("[data-agentation-root]"));ye&&T.push(ye)}Ht(T),Dt(null)}else if(v.boundingBox){const T=v.boundingBox,E=T.x+T.width/2,B=v.isFixed?T.y+T.height/2:T.y+T.height/2-window.scrollY,K=Ns(E,B);if(K){const he=K.getBoundingClientRect(),ye=he.width/T.width,xe=he.height/T.height;ye<.5||xe<.5?Dt(null):Dt(K)}else Dt(null);Ht([])}else Dt(null),Ht([])},[]),Bc=m.useCallback(v=>{if(!J)return;const S={...J,comment:v};Y(T=>T.map(E=>E.id===J.id?S:E)),u==null||u(S),kr("annotation.update",{annotation:S}),y&&Up(y,J.id,{comment:v}).catch(T=>{console.warn("[Agentation] Failed to update annotation on server:",T)}),Xr(!0),nt(()=>{Re(null),Ve(null),mt([]),Xr(!1)},150)},[J,u,kr,y]),Dc=m.useCallback(()=>{Xr(!0),nt(()=>{Re(null),Ve(null),mt([]),Xr(!1)},150)},[]),po=m.useCallback(()=>{const v=R.length,S=je.length>0||!!we;if(v===0&&nr.length===0&&!S)return;if(f==null||f(R),kr("annotations.clear",{annotations:R}),y){Promise.all(R.map(B=>es(y,B.id).catch(K=>{console.warn("[Agentation] Failed to delete annotation from server:",K)})));for(const[,B]of zn.current)B&&es(y,B).catch(()=>{});zn.current.clear();for(const[,B]of ls.current)B&&es(y,B).catch(()=>{});ls.current.clear()}ve(!0),Fe(!0),Hs([]);const T=$i.current;if(T){const B=T.getContext("2d");B&&B.clearRect(0,0,T.width,T.height)}(je.length>0||we)&&(Gt(B=>B+1),Us(B=>B+1),nt(()=>{jt([]),qn(null)},200)),qe&&St(!1),qt&&ur(""),Wr.current={rearrange:null,placements:[]},tc(Qe);const E=v*30+200;nt(()=>{Y([]),wr(new Set),localStorage.removeItem(yc(Qe)),ve(!1)},E),nt(()=>Fe(!1),1500)},[Qe,R,nr,je,we,qe,qt,f,kr,y]),Js=m.useCallback(async()=>{const v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Qe,S=Ce&&qe;let T;if(S){if(je.length===0&&!we&&!qt)return;T=""}else{if(T=Vp(R,v,wt.outputDetail),!T&&nr.length===0&&je.length===0&&!we)return;T||(T=`## Page Feedback: ${v}
`)}if(!S&&nr.length>0){const E=new Set;for(const ye of R)ye.drawingIndex!=null&&E.add(ye.drawingIndex);const B=$i.current;B&&(B.style.visibility="hidden");const K=[],he=window.scrollY;for(let ye=0;ye<nr.length;ye++){if(E.has(ye))continue;const xe=nr[ye];if(xe.points.length<2)continue;const Ie=xe.fixed?xe.points:xe.points.map(on=>({x:on.x,y:on.y-he}));let Ye=1/0,Ze=1/0,vt=-1/0,Ke=-1/0;for(const on of Ie)Ye=Math.min(Ye,on.x),Ze=Math.min(Ze,on.y),vt=Math.max(vt,on.x),Ke=Math.max(Ke,on.y);const ke=vt-Ye,Zt=Ke-Ze,Wt=Math.hypot(ke,Zt),dn=Ie[0],Mt=Ie[Ie.length-1],fn=Math.hypot(Mt.x-dn.x,Mt.y-dn.y);let lt;const pt=fn<Wt*.35,xn=ke/Math.max(Zt,1);if(pt&&Wt>20){const on=Math.max(ke,Zt)*.15;let Gr=0;for(const _o of Ie){const Do=_o.x-Ye<on,Ki=vt-_o.x<on,ms=_o.y-Ze<on,Gi=Ke-_o.y<on;(Do||Ki)&&(ms||Gi)&&Gr++}lt=Gr>Ie.length*.15?"box":"circle"}else xn>3&&Zt<40?lt="underline":fn>Wt*.5?lt="arrow":lt="drawing";const Qt=Math.min(10,Ie.length),Yt=Math.max(1,Math.floor(Ie.length/Qt)),jn=new Set,_n=[],Bo=[dn];for(let on=Yt;on<Ie.length-1;on+=Yt)Bo.push(Ie[on]);Bo.push(Mt);for(const on of Bo){const Gr=Ns(on.x,on.y);if(!Gr||jn.has(Gr)||Jn(Gr,"[data-feedback-toolbar]"))continue;jn.add(Gr);const{name:_o}=Ci(Gr);_n.includes(_o)||_n.push(_o)}const Kr=`${Math.round(Ye)},${Math.round(Ze)} → ${Math.round(vt)},${Math.round(Ke)}`;let Pr;(lt==="circle"||lt==="box")&&_n.length>0?Pr=`${lt==="box"?"Boxed":"Circled"} **${_n[0]}**${_n.length>1?` (and ${_n.slice(1).join(", ")})`:""} (region: ${Kr})`:lt==="underline"&&_n.length>0?Pr=`Underlined **${_n[0]}** (${Kr})`:lt==="arrow"&&_n.length>=2?Pr=`Arrow from **${_n[0]}** to **${_n[_n.length-1]}** (${Math.round(dn.x)},${Math.round(dn.y)} → ${Math.round(Mt.x)},${Math.round(Mt.y)})`:_n.length>0?Pr=`${lt==="arrow"?"Arrow":"Drawing"} near **${_n.join("**, **")}** (region: ${Kr})`:Pr=`Drawing at ${Kr}`,K.push(Pr)}B&&(B.style.visibility=""),K.length>0&&(T+=`
**Drawings:**
`,K.forEach((ye,xe)=>{T+=`${xe+1}. ${ye}
`}))}if((je.length>0||S&&qt)&&(T+=`
`+Dp(je,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:qe,wireframePurpose:qt||void 0},wt.outputDetail)),we){const E=zp(we,wt.outputDetail,{width:window.innerWidth,height:window.innerHeight});E&&(T+=`
`+E)}if(w)try{await navigator.clipboard.writeText(T)}catch{}p==null||p(T),j(!0),nt(()=>j(!1),2e3),wt.autoClearAfterCopy&&nt(()=>po(),500)},[R,nr,je,we,qe,Ce,er,qt,Qe,wt.outputDetail,Fn,wt.autoClearAfterCopy,po,w,p]),Vi=m.useCallback(async()=>{const v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Qe;let S=Vp(R,v,wt.outputDetail);if(!S&&je.length===0&&!we)return;if(S||(S=`## Page Feedback: ${v}
`),je.length>0&&(S+=`
`+Dp(je,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:qe,wireframePurpose:qt||void 0},wt.outputDetail)),we){const E=zp(we,wt.outputDetail,{width:window.innerWidth,height:window.innerHeight});E&&(S+=`
`+E)}_&&_(S,R),ge("sending"),await new Promise(E=>nt(E,150));const T=await kr("submit",{output:S,annotations:R},!0);ge(T?"sent":"failed"),nt(()=>ge("idle"),2500),T&&wt.autoClearAfterCopy&&nt(()=>po(),500)},[_,kr,R,je,we,qe,er,Qe,wt.outputDetail,Fn,wt.autoClearAfterCopy,po]);m.useEffect(()=>{if(!ao)return;const v=10,S=E=>{const B=E.clientX-ao.x,K=E.clientY-ao.y,he=Math.sqrt(B*B+K*K);if(!Vr&&he>v&&cs(!0),Vr||he>v){let ye=ao.toolbarX+B,xe=ao.toolbarY+K;const Ie=20,Ye=337,Ze=44,Ke=Ye-(M?pr==="connected"?297:257:44),ke=Ie-Ke,Zt=window.innerWidth-Ie-Ye;ye=Math.max(ke,Math.min(Zt,ye)),xe=Math.max(Ie,Math.min(window.innerHeight-Ze-Ie,xe)),Di({x:ye,y:xe})}},T=()=>{Vr&&(co.current=!0),cs(!1),Xl(null)};return document.addEventListener("mousemove",S),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",T)}},[ao,Vr,M,pr]);const zc=m.useCallback(v=>{if(v.target.closest("button")||v.target.closest("[data-agentation-settings-panel]"))return;const S=v.currentTarget.parentElement;if(!S)return;const T=S.getBoundingClientRect(),E=(Lt==null?void 0:Lt.x)??T.left,B=(Lt==null?void 0:Lt.y)??T.top;Xl({x:v.clientX,y:v.clientY,toolbarX:E,toolbarY:B})},[Lt]);if(m.useEffect(()=>{if(!Lt)return;const v=()=>{let B=Lt.x,K=Lt.y;const xe=20-(337-(M?pr==="connected"?297:257:44)),Ie=window.innerWidth-20-337;B=Math.max(xe,Math.min(Ie,B)),K=Math.max(20,Math.min(window.innerHeight-44-20,K)),(B!==Lt.x||K!==Lt.y)&&Di({x:B,y:K})};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[Lt,M,pr]),m.useEffect(()=>{const v=S=>{const T=S.target,E=T.tagName==="INPUT"||T.tagName==="TEXTAREA"||T.isContentEditable;if(S.key==="Escape"){if(Ce){yt?ht(null):Po();return}if(fr){Oi(!1);return}if(rn.length>0){xr([]);return}D||M&&(bn(),I(!1))}if((S.metaKey||S.ctrlKey)&&S.shiftKey&&(S.key==="f"||S.key==="F")){S.preventDefault(),bn(),M?Ql():I(!0);return}if(!(E||S.metaKey||S.ctrlKey)&&((S.key==="p"||S.key==="P")&&(S.preventDefault(),bn(),Ui()),(S.key==="l"||S.key==="L")&&(S.preventDefault(),bn(),fr&&Oi(!1),se&&Be(!1),D&&Hi(),Ce?Po():gt(!0)),(S.key==="h"||S.key==="H")&&R.length>0&&(S.preventDefault(),bn(),$(B=>!B)),(S.key==="c"||S.key==="C")&&(R.length>0||je.length>0||we)&&(S.preventDefault(),bn(),Js()),(S.key==="x"||S.key==="X")&&(R.length>0||je.length>0||we)&&(S.preventDefault(),bn(),po(),je.length>0&&jt([]),we&&qn(null)),S.key==="s"||S.key==="S")){const B=no(wt.webhookUrl)||no(P||"");R.length>0&&B&&H==="idle"&&(S.preventDefault(),bn(),Vi())}};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[M,fr,Ce,yt,je,we,D,R.length,wt.webhookUrl,P,H,Vi,Ui,Js,po,rn]),!We||ie)return null;const _s=R.length>0,Ao=R.filter(v=>!us.has(v.id)&&v.kind!=="placement"&&v.kind!=="rearrange"),Fc=Ao.length>0,Jl=R.filter(v=>us.has(v.id)),Zl=v=>{const K=v.x/100*window.innerWidth,he=typeof v.y=="string"?parseFloat(v.y):v.y,ye={};window.innerHeight-he-22-10<80&&(ye.top="auto",ye.bottom="calc(100% + 10px)");const Ie=K-200/2,Ye=10;if(Ie<Ye){const Ze=Ye-Ie;ye.left=`calc(50% + ${Ze}px)`}else if(Ie+200>window.innerWidth-Ye){const Ze=Ie+200-(window.innerWidth-Ye);ye.left=`calc(50% - ${Ze}px)`}return ye};return C_.createPortal(s.jsxs("div",{ref:rt,style:{display:"contents"},"data-agentation-theme":hr?"dark":"light","data-agentation-accent":wt.annotationColorId,"data-agentation-root":"",children:[s.jsx("div",{className:`${le.toolbar}${N?` ${N}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Lt?{left:Lt.x,top:Lt.y,right:"auto",bottom:"auto"}:void 0,children:s.jsxs("div",{className:`${le.toolbarContainer} ${M?le.expanded:le.collapsed} ${Xs?le.entrance:""} ${ne?le.hiding:""} ${!wt.webhooksEnabled&&(no(wt.webhookUrl)||no(P||""))?le.serverConnected:""}`,onClick:M?void 0:v=>{if(co.current){co.current=!1,v.preventDefault();return}I(!0)},onMouseDown:zc,role:M?void 0:"button",tabIndex:M?-1:0,title:M?void 0:"Start feedback mode",children:[s.jsxs("div",{className:`${le.toggleContent} ${M?le.hidden:le.visible}`,children:[s.jsx(K0,{size:24}),Fc&&s.jsx("span",{className:`${le.badge} ${M?le.fadeOut:""} ${Xs?le.entrance:""}`,children:Ao.length})]}),s.jsxs("div",{className:`${le.controlsContent} ${M?le.visible:le.hidden} ${Lt&&Lt.y<100?le.tooltipBelow:""} ${bt||se?le.tooltipsHidden:""} ${Ul?le.tooltipsInSession:""}`,onMouseEnter:Hl,onMouseLeave:Yl,children:[s.jsxs("div",{className:`${le.buttonWrapper} ${Lt&&Lt.x<120?le.buttonWrapperAlignLeft:""}`,children:[s.jsx("button",{className:le.controlButton,onClick:v=>{v.stopPropagation(),bn(),Ui()},"data-active":W,children:s.jsx(ty,{size:24,isPaused:W})}),s.jsxs("span",{className:le.buttonTooltip,children:[W?"Resume animations":"Pause animations",s.jsx("span",{className:le.shortcut,children:"P"})]})]}),s.jsxs("div",{className:le.buttonWrapper,children:[s.jsx("button",{className:`${le.controlButton} ${hr?"":le.light}`,onClick:v=>{v.stopPropagation(),bn(),fr&&Oi(!1),se&&Be(!1),D&&Hi(),Ce?Po():gt(!0)},"data-active":Ce,style:Ce&&qe?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:s.jsx(uy,{size:21})}),s.jsxs("span",{className:le.buttonTooltip,children:[Ce?"Exit layout mode":"Layout mode",s.jsx("span",{className:le.shortcut,children:"L"})]})]}),s.jsxs("div",{className:le.buttonWrapper,children:[s.jsx("button",{className:le.controlButton,onClick:v=>{v.stopPropagation(),bn(),$(!Q)},disabled:!_s||Ce,children:s.jsx(ey,{size:24,isOpen:Q})}),s.jsxs("span",{className:le.buttonTooltip,children:[Q?"Hide markers":"Show markers",s.jsx("span",{className:le.shortcut,children:"H"})]})]}),s.jsxs("div",{className:le.buttonWrapper,children:[s.jsx("button",{className:`${le.controlButton} ${G?le.statusShowing:""}`,onClick:v=>{v.stopPropagation(),bn(),Js()},disabled:Ce&&qe?je.length===0&&!((Zs=we==null?void 0:we.sections)!=null&&Zs.length):!_s&&nr.length===0&&je.length===0&&!(($o=we==null?void 0:we.sections)!=null&&$o.length),"data-active":G,children:s.jsx(J0,{size:24,copied:G,tint:Ce&&qe&&(je.length>0||(ea=we==null?void 0:we.sections)!=null&&ea.length)?"#f97316":void 0})}),s.jsxs("span",{className:le.buttonTooltip,children:[Ce&&qe?"Copy layout":"Copy feedback",s.jsx("span",{className:le.shortcut,children:"C"})]})]}),s.jsxs("div",{className:`${le.buttonWrapper} ${le.sendButtonWrapper} ${M&&!wt.webhooksEnabled&&(no(wt.webhookUrl)||no(P||""))?le.sendButtonVisible:""}`,children:[s.jsxs("button",{className:`${le.controlButton} ${H==="sent"||H==="failed"?le.statusShowing:""}`,onClick:v=>{v.stopPropagation(),bn(),Vi()},disabled:!_s||!no(wt.webhookUrl)&&!no(P||"")||H==="sending","data-no-hover":H==="sent"||H==="failed",tabIndex:no(wt.webhookUrl)||no(P||"")?0:-1,children:[s.jsx(Z0,{size:24,state:H}),_s&&H==="idle"&&s.jsx("span",{className:le.buttonBadge,children:R.length})]}),s.jsxs("span",{className:le.buttonTooltip,children:["Send Annotations",s.jsx("span",{className:le.shortcut,children:"S"})]})]}),s.jsxs("div",{className:le.buttonWrapper,children:[s.jsx("button",{className:le.controlButton,onClick:v=>{v.stopPropagation(),bn(),po()},disabled:!_s&&nr.length===0&&je.length===0&&!((Xi=we==null?void 0:we.sections)!=null&&Xi.length),"data-danger":!0,children:s.jsx(ry,{size:24})}),s.jsxs("span",{className:le.buttonTooltip,children:["Clear all",s.jsx("span",{className:le.shortcut,children:"X"})]})]}),s.jsxs("div",{className:le.buttonWrapper,children:[s.jsx("button",{className:le.controlButton,onClick:v=>{v.stopPropagation(),bn(),Ce&&Po(),Be(!se)},children:s.jsx(ny,{size:24})}),y&&pr!=="disconnected"&&s.jsx("span",{className:`${le.mcpIndicator} ${le[pr]} ${se?le.hidden:""}`,title:pr==="connected"?"MCP Connected":"MCP Connecting..."}),s.jsx("span",{className:le.buttonTooltip,children:"Settings"})]}),s.jsx("div",{className:le.divider}),s.jsxs("div",{className:`${le.buttonWrapper} ${Lt&&typeof window<"u"&&Lt.x>window.innerWidth-120?le.buttonWrapperAlignRight:""}`,children:[s.jsx("button",{className:le.controlButton,onClick:v=>{v.stopPropagation(),bn(),Ql()},children:s.jsx(oy,{size:24})}),s.jsxs("span",{className:le.buttonTooltip,children:["Exit",s.jsx("span",{className:le.shortcut,children:"Esc"})]})]})]}),s.jsx(D1,{visible:Ce&&M,activeType:yt,onSelect:v=>{ht(yt===v?null:v)},isDarkMode:hr,sectionCount:(we==null?void 0:we.sections.length)??0,onDetectSections:()=>{const v=K1(),S=(we==null?void 0:we.sections)??[],T=new Set(S.map(he=>he.selector)),E=v.filter(he=>!T.has(he.selector)),B=[...S,...E],K=[...(we==null?void 0:we.originalOrder)??[],...E.map(he=>he.id)];qn({sections:B,originalOrder:K,detectedAt:Date.now()})},placementCount:je.length,onClearPlacements:()=>{Gt(v=>v+1),Us(v=>v+1),nt(()=>{qn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:qe,onBlankCanvasChange:v=>{const S={sections:[],originalOrder:[],detectedAt:Date.now()};v?(Li.current={rearrange:we,placements:je},qn(Wr.current.rearrange||S),jt(Wr.current.placements),ht(null)):(Wr.current={rearrange:we,placements:je},qn(Li.current.rearrange||S),jt(Li.current.placements)),St(v)},wireframePurpose:qt,onWireframePurposeChange:ur,Tooltip:Is,onDragStart:(v,S)=>{S.preventDefault();const T=Ne[v];let E=null,B=!1;const K=S.clientX,he=S.clientY,ye=S.target.closest("[data-feedback-toolbar]"),xe=(ye==null?void 0:ye.getBoundingClientRect().top)??window.innerHeight,Ie=Ze=>{const vt=Ze.clientX-K,Ke=Ze.clientY-he;if(!B&&(Math.abs(vt)>4||Math.abs(Ke)>4)&&(B=!0,E=document.createElement("div"),E.className=`${te.dragPreview}${qe?` ${te.dragPreviewWireframe}`:""}`,document.body.appendChild(E)),!E)return;const ke=Math.max(0,xe-Ze.clientY),Zt=Math.min(1,ke/180),Wt=1-Math.pow(1-Zt,2),dn=28,Mt=20,fn=Math.min(140,T.width*.18),lt=Math.min(90,T.height*.18),pt=dn+(fn-dn)*Wt,xn=Mt+(lt-Mt)*Wt;E.style.width=`${pt}px`,E.style.height=`${xn}px`,E.style.left=`${Ze.clientX-pt/2}px`,E.style.top=`${Ze.clientY-xn/2}px`,E.style.opacity=`${.5+.5*Wt}`,E.textContent=Wt>.25?v:""},Ye=Ze=>{if(window.removeEventListener("mousemove",Ie),window.removeEventListener("mouseup",Ye),E&&document.body.removeChild(E),B){const vt=T.width,Ke=T.height,ke=window.scrollY,Zt=Math.max(0,Ze.clientX-vt/2),Wt=Math.max(0,Ze.clientY+ke-Ke/2),dn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:v,x:Zt,y:Wt,width:vt,height:Ke,scrollY:ke,timestamp:Date.now()};jt(Mt=>[...Mt,dn]),ht(null),Eo.current=new Set,Pi(Mt=>Mt+1)}};window.addEventListener("mousemove",Ie),window.addEventListener("mouseup",Ye)}}),s.jsx(s5,{settings:wt,onSettingsChange:v=>Vl(S=>({...S,...v})),isDarkMode:hr,onToggleTheme:Ur,isDevMode:Hr,connectionStatus:pr,endpoint:y,isVisible:Me,toolbarNearBottom:!!Lt&&Lt.y<230,settingsPage:xt,onSettingsPageChange:ct,onHideToolbar:Ac})]})}),(Ce||kt)&&s.jsx("div",{className:`${te.blankCanvas} ${un?te.visible:""} ${tr?te.gridActive:""}`,style:{"--canvas-opacity":Tn},"data-feedback-toolbar":!0}),Ce&&qe&&un&&s.jsxs("div",{className:te.wireframeNotice,"data-feedback-toolbar":!0,children:[s.jsxs("div",{className:te.wireframeOpacityRow,children:[s.jsx("span",{className:te.wireframeOpacityLabel,children:"Toggle Opacity"}),s.jsx("input",{type:"range",className:te.wireframeOpacitySlider,min:0,max:1,step:.01,value:Tn,onChange:v=>yr(Number(v.target.value))})]}),s.jsxs("div",{className:te.wireframeNoticeTitleRow,children:[s.jsx("span",{className:te.wireframeNoticeTitle,children:"Wireframe Mode"}),s.jsx("span",{className:te.wireframeNoticeDivider}),s.jsx("button",{className:te.wireframeStartOver,onClick:()=>{Gt(v=>v+1),qn({sections:[],originalOrder:[],detectedAt:Date.now()}),Wr.current={rearrange:null,placements:[]},ur(""),tc(Qe)},children:"Start Over"})]}),"Drag components onto the canvas.",s.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ce||kt)&&s.jsx(P1,{placements:je,onChange:jt,activeComponent:kt?null:yt,onActiveComponentChange:ht,isDarkMode:hr,exiting:kt,onInteractionChange:jo,passthrough:!yt,extraSnapRects:we==null?void 0:we.sections.map(v=>v.currentRect),deselectSignal:Fl,clearSignal:Pc,wireframe:qe,onSelectionChange:(v,S)=>{Eo.current=v,S||(so.current=new Set,Lc(T=>T+1))},onDragMove:(v,S)=>{const T=so.current;if(!(!T.size||!we)){if(!dr.current){dr.current=new Map;for(const E of we.sections)T.has(E.id)&&dr.current.set(E.id,{x:E.currentRect.x,y:E.currentRect.y})}for(const E of we.sections){if(!T.has(E.id)||!dr.current.get(E.id))continue;const K=document.querySelector(`[data-rearrange-section="${E.id}"]`);K&&(K.style.transform=`translate(${v}px, ${S}px)`)}}},onDragEnd:(v,S,T)=>{const E=so.current,B=dr.current;if(dr.current=null,!(!E.size||!we||!B)){for(const K of E){const he=document.querySelector(`[data-rearrange-section="${K}"]`);he&&(he.style.transform="")}T&&qn(K=>K&&{...K,sections:K.sections.map(he=>{const ye=B.get(he.id);return ye?{...he,currentRect:{...he.currentRect,x:Math.max(0,ye.x+v),y:Math.max(0,ye.y+S)}}:he})})}}}),(Ce||kt)&&we&&s.jsx(Z1,{rearrangeState:we,onChange:qn,isDarkMode:hr,exiting:kt,blankCanvas:qe,extraSnapRects:je.map(v=>({x:v.x,y:v.y,width:v.width,height:v.height})),clearSignal:Oc,deselectSignal:Wl,onSelectionChange:(v,S)=>{so.current=v,S||(Eo.current=new Set,Pi(T=>T+1))},onDragMove:(v,S)=>{const T=Eo.current;if(T.size){if(!dr.current){dr.current=new Map;for(const E of je)T.has(E.id)&&dr.current.set(E.id,{x:E.x,y:E.y})}for(const E of T){const B=document.querySelector(`[data-design-placement="${E}"]`);B&&(B.style.transform=`translate(${v}px, ${S}px)`)}}},onDragEnd:(v,S,T)=>{const E=Eo.current,B=dr.current;if(dr.current=null,!(!E.size||!B)){for(const K of E){const he=document.querySelector(`[data-design-placement="${K}"]`);he&&(he.style.transform="")}T&&jt(K=>K.map(he=>{const ye=B.get(he.id);return ye?{...he,x:Math.max(0,ye.x+v),y:Math.max(0,ye.y+S)}:he}))}}}),s.jsx("canvas",{ref:$i,className:`${le.drawCanvas} ${fr?le.active:""}`,style:{opacity:Io?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),s.jsxs("div",{className:le.markersLayer,"data-feedback-toolbar":!0,children:[Le&&Ao.filter(v=>!v.isFixed).map((v,S,T)=>s.jsx(Xp,{annotation:v,globalIndex:Ao.findIndex(E=>E.id===v.id),layerIndex:S,layerSize:T.length,isExiting:tt,isClearing:q,isAnimated:To.has(v.id),isHovered:!tt&&Pe===v.id,isDeleting:Tt===v.id,isEditingAny:!!J,renumberFrom:Xe,markerClickBehavior:wt.markerClickBehavior,tooltipStyle:Zl(v),onHoverEnter:E=>!tt&&E.id!==Mn.current&&Oo(E),onHoverLeave:()=>Oo(null),onClick:E=>wt.markerClickBehavior==="delete"?Yi(E.id):ps(E),onContextMenu:ps},v.id)),Le&&!tt&&Jl.filter(v=>!v.isFixed).map(v=>s.jsx(qp,{annotation:v},v.id))]}),s.jsxs("div",{className:le.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[Le&&Ao.filter(v=>v.isFixed).map((v,S,T)=>s.jsx(Xp,{annotation:v,globalIndex:Ao.findIndex(E=>E.id===v.id),layerIndex:S,layerSize:T.length,isExiting:tt,isClearing:q,isAnimated:To.has(v.id),isHovered:!tt&&Pe===v.id,isDeleting:Tt===v.id,isEditingAny:!!J,renumberFrom:Xe,markerClickBehavior:wt.markerClickBehavior,tooltipStyle:Zl(v),onHoverEnter:E=>!tt&&E.id!==Mn.current&&Oo(E),onHoverLeave:()=>Oo(null),onClick:E=>wt.markerClickBehavior==="delete"?Yi(E.id):ps(E),onContextMenu:ps},v.id)),Le&&!tt&&Jl.filter(v=>v.isFixed).map(v=>s.jsx(qp,{annotation:v,fixed:!0},v.id))]}),M&&s.jsxs("div",{className:le.overlay,"data-feedback-toolbar":!0,style:D||J?{zIndex:99999}:void 0,children:[(ce==null?void 0:ce.rect)&&!D&&!Nt&&!br&&s.jsx("div",{className:`${le.hoverHighlight} ${le.enter}`,style:{left:ce.rect.left,top:ce.rect.top,width:ce.rect.width,height:ce.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),rn.filter(v=>document.contains(v.element)).map((v,S)=>{const T=v.element.getBoundingClientRect(),E=rn.length>1;return s.jsx("div",{className:E?le.multiSelectOutline:le.singleSelectOutline,style:{position:"fixed",left:T.left,top:T.top,width:T.width,height:T.height,...E?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},S)}),Pe&&!D&&(()=>{var B;const v=R.find(K=>K.id===Pe);if(!(v!=null&&v.boundingBox))return null;if((B=v.elementBoundingBoxes)!=null&&B.length)return _t.length>0?_t.filter(K=>document.contains(K)).map((K,he)=>{const ye=K.getBoundingClientRect();return s.jsx("div",{className:`${le.multiSelectOutline} ${le.enter}`,style:{left:ye.left,top:ye.top,width:ye.width,height:ye.height}},`hover-outline-live-${he}`)}):v.elementBoundingBoxes.map((K,he)=>s.jsx("div",{className:`${le.multiSelectOutline} ${le.enter}`,style:{left:K.x,top:K.y-Ct,width:K.width,height:K.height}},`hover-outline-${he}`));const S=Bt&&document.contains(Bt)?Bt.getBoundingClientRect():null,T=S?{x:S.left,y:S.top,width:S.width,height:S.height}:{x:v.boundingBox.x,y:v.isFixed?v.boundingBox.y:v.boundingBox.y-Ct,width:v.boundingBox.width,height:v.boundingBox.height},E=v.isMultiSelect;return s.jsx("div",{className:`${E?le.multiSelectOutline:le.singleSelectOutline} ${le.enter}`,style:{left:T.x,top:T.y,width:T.width,height:T.height,...E?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ce&&!D&&!Nt&&!br&&s.jsxs("div",{className:`${le.hoverTooltip} ${le.enter}`,style:{left:Math.max(8,Math.min(de.x,window.innerWidth-100)),top:Math.max(de.y-(ce.reactComponents?48:32),8)},children:[ce.reactComponents&&s.jsx("div",{className:le.hoverReactPath,children:ce.reactComponents}),s.jsx("div",{className:le.hoverElementName,children:ce.elementName})]}),D&&s.jsxs(s.Fragment,{children:[(qi=D.multiSelectElements)!=null&&qi.length?D.multiSelectElements.filter(v=>document.contains(v)).map((v,S)=>{const T=v.getBoundingClientRect();return s.jsx("div",{className:`${le.multiSelectOutline} ${ds?le.exit:le.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`pending-multi-${S}`)}):D.targetElement&&document.contains(D.targetElement)?(()=>{const v=D.targetElement.getBoundingClientRect();return s.jsx("div",{className:`${le.singleSelectOutline} ${ds?le.exit:le.enter}`,style:{left:v.left,top:v.top,width:v.width,height:v.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():D.boundingBox&&s.jsx("div",{className:`${D.isMultiSelect?le.multiSelectOutline:le.singleSelectOutline} ${ds?le.exit:le.enter}`,style:{left:D.boundingBox.x,top:D.boundingBox.y-Ct,width:D.boundingBox.width,height:D.boundingBox.height,...D.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const v=D.x,S=D.isFixed?D.y:D.y-Ct;return s.jsxs(s.Fragment,{children:[s.jsx(Qx,{x:v,y:S,isMultiSelect:D.isMultiSelect,isExiting:ds}),s.jsx(mc,{ref:ql,element:D.element,selectedText:D.selectedText,computedStyles:D.computedStylesObj,placeholder:D.element==="Area selection"?"What should change in this area?":D.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:$c,onCancel:Hi,isExiting:ds,lightMode:!hr,accentColor:D.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,v/100*window.innerWidth)),...S>window.innerHeight-290?{bottom:window.innerHeight-S+20}:{top:S+20}}})]})})()]}),J&&s.jsxs(s.Fragment,{children:[(Qi=J.elementBoundingBoxes)!=null&&Qi.length?dt.length>0?dt.filter(v=>document.contains(v)).map((v,S)=>{const T=v.getBoundingClientRect();return s.jsx("div",{className:`${le.multiSelectOutline} ${le.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`edit-multi-live-${S}`)}):J.elementBoundingBoxes.map((v,S)=>s.jsx("div",{className:`${le.multiSelectOutline} ${le.enter}`,style:{left:v.x,top:v.y-Ct,width:v.width,height:v.height}},`edit-multi-${S}`)):(()=>{const v=ot&&document.contains(ot)?ot.getBoundingClientRect():null,S=v?{x:v.left,y:v.top,width:v.width,height:v.height}:J.boundingBox?{x:J.boundingBox.x,y:J.isFixed?J.boundingBox.y:J.boundingBox.y-Ct,width:J.boundingBox.width,height:J.boundingBox.height}:null;return S?s.jsx("div",{className:`${J.isMultiSelect?le.multiSelectOutline:le.singleSelectOutline} ${le.enter}`,style:{left:S.x,top:S.y,width:S.width,height:S.height,...J.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),s.jsx(mc,{ref:Ks,element:J.element,selectedText:J.selectedText,computedStyles:V1(J.computedStyles),placeholder:"Edit your feedback...",initialValue:J.comment,submitLabel:"Save",onSubmit:Bc,onCancel:Dc,onDelete:()=>Yi(J.id),isExiting:Qs,lightMode:!hr,accentColor:J.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const v=J.isFixed?J.y:J.y-Ct;return{left:Math.max(160,Math.min(window.innerWidth-160,J.x/100*window.innerWidth)),...v>window.innerHeight-290?{bottom:window.innerHeight-v+20}:{top:v+20}}})()})]}),br&&s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:Mo,className:le.dragSelection}),s.jsx("div",{ref:Qr,className:le.highlightsContainer})]})]})]}),document.body)}function rm(t,n){return function(){return t.apply(n,arguments)}}const{toString:a5}=Object.prototype,{getPrototypeOf:Ei}=Object,{iterator:$l,toStringTag:om}=Symbol,xc=(({hasOwnProperty:t})=>(n,o)=>t.call(n,o))(Object.prototype),Il=(t,n)=>{let o=t;const l=[];for(;o!=null&&o!==Object.prototype;){if(l.indexOf(o)!==-1)return!1;if(l.push(o),xc(o,n))return!0;o=Ei(o)}return!1},c5=(t,n)=>t!=null&&Il(t,n)?t[n]:void 0,tf=(t=>n=>{const o=a5.call(n);return t[o]||(t[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Mr=t=>(t=t.toLowerCase(),n=>tf(n)===t),Rc=t=>n=>typeof n===t,{isArray:Bs}=Array,Ds=Rc("undefined");function Ni(t){return t!==null&&!Ds(t)&&t.constructor!==null&&!Ds(t.constructor)&&cr(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const sm=Mr("ArrayBuffer");function u5(t){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(t):n=t&&t.buffer&&sm(t.buffer),n}const d5=Rc("string"),cr=Rc("function"),im=Rc("number"),Mi=t=>t!==null&&typeof t=="object",f5=t=>t===!0||t===!1,ac=t=>{if(!Mi(t))return!1;const n=Ei(t);return(n===null||n===Object.prototype||Ei(n)===null)&&!Il(t,om)&&!Il(t,$l)},h5=t=>{if(!Mi(t)||Ni(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},p5=Mr("Date"),_5=Mr("File"),m5=t=>!!(t&&typeof t.uri<"u"),g5=t=>t&&typeof t.getParts<"u",y5=Mr("Blob"),x5=Mr("FileList"),v5=Mr("Set"),w5=t=>Mi(t)&&cr(t.pipe);function b5(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Jp=b5(),Zp=typeof Jp.FormData<"u"?Jp.FormData:void 0,k5=t=>{if(!t)return!1;if(Zp&&t instanceof Zp)return!0;const n=Ei(t);if(!n||n===Object.prototype||!cr(t.append))return!1;const o=tf(t);return o==="formdata"||o==="object"&&cr(t.toString)&&t.toString()==="[object FormData]"},S5=Mr("URLSearchParams"),[C5,j5,E5,R5]=["ReadableStream","Request","Response","Headers"].map(Mr),T5=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bl(t,n,{allOwnKeys:o=!1}={}){if(t===null||typeof t>"u")return;let l,a;if(typeof t!="object"&&(t=[t]),Bs(t))for(l=0,a=t.length;l<a;l++)n.call(null,t[l],l,t);else{if(Ni(t))return;const u=o?Object.getOwnPropertyNames(t):Object.keys(t),f=u.length;let p;for(l=0;l<f;l++)p=u[l],n.call(null,t[p],p,t)}}function lm(t,n){if(Ni(t))return null;n=n.toLowerCase();const o=Object.keys(t);let l=o.length,a;for(;l-- >0;)if(a=o[l],n===a.toLowerCase())return a;return null}const Ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,am=t=>!Ds(t)&&t!==Ls;function Dd(...t){const{caseless:n,skipUndefined:o}=am(this)&&this||{},l={},a=(u,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=n&&typeof f=="string"&&lm(l,f)||f,_=xc(l,p)?l[p]:void 0;ac(_)&&ac(u)?l[p]=Dd(_,u):ac(u)?l[p]=Dd({},u):Bs(u)?l[p]=u.slice():(!o||!Ds(u))&&(l[p]=u)};for(let u=0,f=t.length;u<f;u++){const p=t[u];if(!p||Ni(p)||(Bl(p,a),typeof p!="object"||Bs(p)))continue;const _=Object.getOwnPropertySymbols(p);for(let w=0;w<_.length;w++){const y=_[w];F5.call(p,y)&&a(p[y],y)}}return l}const N5=(t,n,o,{allOwnKeys:l}={})=>(Bl(n,(a,u)=>{o&&cr(a)?Object.defineProperty(t,u,{__proto__:null,value:rm(a,o),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,u,{__proto__:null,value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:l}),t),M5=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),I5=(t,n,o,l)=>{t.prototype=Object.create(n.prototype,l),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:n.prototype}),o&&Object.assign(t.prototype,o)},L5=(t,n,o,l)=>{let a,u,f;const p={};if(n=n||{},t==null)return n;do{for(a=Object.getOwnPropertyNames(t),u=a.length;u-- >0;)f=a[u],(!l||l(f,t,n))&&!p[f]&&(n[f]=t[f],p[f]=!0);t=o!==!1&&Ei(t)}while(t&&(!o||o(t,n))&&t!==Object.prototype);return n},P5=(t,n,o)=>{t=String(t),(o===void 0||o>t.length)&&(o=t.length),o-=n.length;const l=t.indexOf(n,o);return l!==-1&&l===o},O5=t=>{if(!t)return null;if(Bs(t))return t;let n=t.length;if(!im(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=t[n];return o},A5=(t=>n=>t&&n instanceof t)(typeof Uint8Array<"u"&&Ei(Uint8Array)),$5=(t,n)=>{const l=(t&&t[$l]).call(t);let a;for(;(a=l.next())&&!a.done;){const u=a.value;n.call(t,u[0],u[1])}},B5=(t,n)=>{let o;const l=[];for(;(o=t.exec(n))!==null;)l.push(o);return l},D5=Mr("HTMLFormElement"),z5=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,l,a){return l.toUpperCase()+a}),{propertyIsEnumerable:F5}=Object.prototype,W5=Mr("RegExp"),cm=(t,n)=>{const o=Object.getOwnPropertyDescriptors(t),l={};Bl(o,(a,u)=>{let f;(f=n(a,u,t))!==!1&&(l[u]=f||a)}),Object.defineProperties(t,l)},U5=t=>{cm(t,(n,o)=>{if(cr(t)&&["arguments","caller","callee"].includes(o))return!1;const l=t[o];if(cr(l)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},H5=(t,n)=>{const o={},l=a=>{a.forEach(u=>{o[u]=!0})};return Bs(t)?l(t):l(String(t).split(n)),o},Y5=()=>{},V5=(t,n)=>t!=null&&Number.isFinite(t=+t)?t:n;function X5(t){return!!(t&&cr(t.append)&&t[om]==="FormData"&&t[$l])}const q5=t=>{const n=new WeakSet,o=l=>{if(Mi(l)){if(n.has(l))return;if(Ni(l))return l;if(!("toJSON"in l)){n.add(l);let a;if(v5(l)){a=[];for(const u of l){const f=o(u);!Ds(f)&&a.push(f)}}else a=Bs(l)?[]:{},Bl(l,(u,f)=>{const p=o(u);!Ds(p)&&(a[f]=p)});return n.delete(l),a}}return l};return o(t)},Q5=Mr("AsyncFunction"),K5=t=>t&&(Mi(t)||cr(t))&&cr(t.then)&&cr(t.catch),um=((t,n)=>t?setImmediate:n?((o,l)=>(Ls.addEventListener("message",({source:a,data:u})=>{a===Ls&&u===o&&l.length&&l.shift()()},!1),a=>{l.push(a),Ls.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",cr(Ls.postMessage)),G5=typeof queueMicrotask<"u"?queueMicrotask.bind(Ls):typeof process<"u"&&process.nextTick||um,dm=t=>t!=null&&cr(t[$l]),J5=t=>t!=null&&Il(t,$l)&&dm(t),O={isArray:Bs,isArrayBuffer:sm,isBuffer:Ni,isFormData:k5,isArrayBufferView:u5,isString:d5,isNumber:im,isBoolean:f5,isObject:Mi,isPlainObject:ac,isEmptyObject:h5,isReadableStream:C5,isRequest:j5,isResponse:E5,isHeaders:R5,isUndefined:Ds,isDate:p5,isFile:_5,isReactNativeBlob:m5,isReactNative:g5,isBlob:y5,isRegExp:W5,isFunction:cr,isStream:w5,isURLSearchParams:S5,isTypedArray:A5,isFileList:x5,forEach:Bl,merge:Dd,extend:N5,trim:T5,stripBOM:M5,inherits:I5,toFlatObject:L5,kindOf:tf,kindOfTest:Mr,endsWith:P5,toArray:O5,forEachEntry:$5,matchAll:B5,isHTMLForm:D5,hasOwnProperty:xc,hasOwnProp:xc,hasOwnInPrototypeChain:Il,getSafeProp:c5,reduceDescriptors:cm,freezeMethods:U5,toObjectSet:H5,toCamelCase:z5,noop:Y5,toFiniteNumber:V5,findKey:lm,global:Ls,isContextDefined:am,isSpecCompliantForm:X5,toJSONObject:q5,isAsyncFn:Q5,isThenable:K5,setImmediate:um,asap:G5,isIterable:dm,isSafeIterable:J5},Z5=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),e2=t=>{const n={};let o,l,a;return t&&t.split(`
`).forEach(function(f){a=f.indexOf(":"),o=f.substring(0,a).trim().toLowerCase(),l=f.substring(a+1).trim();const p=O.hasOwnProp(n,o);!o||p&&O.hasOwnProp(Z5,o)||(o==="set-cookie"?p?n[o].push(l):n[o]=[l]:n[o]=p?n[o]+", "+l:l)}),n};function t2(t){let n=0,o=t.length;for(;n<o;){const l=t.charCodeAt(n);if(l!==9&&l!==32)break;n+=1}for(;o>n;){const l=t.charCodeAt(o-1);if(l!==9&&l!==32)break;o-=1}return n===0&&o===t.length?t:t.slice(n,o)}const n2=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),r2=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function nf(t,n){return O.isArray(t)?t.map(o=>nf(o,n)):t2(String(t).replace(n,""))}const o2=t=>nf(t,n2),s2=t=>nf(t,r2);function fm(t){const n=Object.create(null);return O.forEach(t.toJSON(),(o,l)=>{n[l]=s2(o)}),n}const e_=Symbol("internals");function Cl(t){return t&&String(t).trim().toLowerCase()}function cc(t){return t===!1||t==null?t:O.isArray(t)?t.map(cc):o2(String(t))}function i2(t){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=o.exec(t);)n[l[1]]=l[2];return n}const l2=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function vd(t){let n=0,o=t.length;for(;n<o;){const l=t.charCodeAt(n);if(l!==9&&l!==32)break;n+=1}for(;o>n;){const l=t.charCodeAt(o-1);if(l!==9&&l!==32)break;o-=1}return n===0&&o===t.length?t:t.slice(n,o)}function a2(t){const n=t.length-1;if(n<1||t.charCodeAt(0)!==34||t.charCodeAt(n)!==34)return t;let o="";for(let l=1;l<n;l++){const a=t.charCodeAt(l);if(a===34||a===92&&(l+=1,l>=n))return t;o+=t[l]}return o}function c2(t){const n=Object.create(null),o=String(t);let l=0,a=!1,u=!1;function f(p){const _=vd(o.slice(l,p)),w=_.indexOf("=");if(w<1)return;const y=vd(_.slice(0,w));if(!l2.test(y))return;const x=y.toLowerCase();if(x==="__proto__"||x==="constructor"||x==="prototype")return;const b=vd(_.slice(w+1));n[x]=a2(b)}for(let p=0;p<o.length;p++){const _=o.charCodeAt(p);a?u?u=!1:_===92?u=!0:_===34&&(a=!1):_===34?a=!0:(_===44||_===59)&&(f(p),l=p+1)}return f(o.length),n}const u2=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function wd(t,n,o,l,a){if(O.isFunction(l))return l.call(this,n,o);if(a&&(n=o),!!O.isString(n)){if(O.isString(l))return n.indexOf(l)!==-1;if(O.isRegExp(l))return l.test(n)}}function d2(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,l)=>o.toUpperCase()+l)}function f2(t,n){const o=O.toCamelCase(" "+n);["get","set","has"].forEach(l=>{Object.defineProperty(t,l+o,{__proto__:null,value:function(a,u,f){return this[l].call(this,n,a,u,f)},configurable:!0})})}let Xn=class{constructor(n){n&&this.set(n)}set(n,o,l){const a=this;function u(p,_,w){const y=Cl(_);if(!y)return;const x=O.findKey(a,y);(!x||a[x]===void 0||w===!0||w===void 0&&a[x]!==!1)&&(a[x||_]=cc(p))}const f=(p,_)=>O.forEach(p,(w,y)=>u(w,y,_));if(O.isPlainObject(n)||n instanceof this.constructor)f(n,o);else if(O.isString(n)&&(n=n.trim())&&!u2(n))f(e2(n),o);else if(O.isObject(n)&&O.isSafeIterable(n)){let p=Object.create(null),_,w;for(const y of n){if(!O.isArray(y))throw new TypeError("Object iterator must return a key-value pair");w=y[0],O.hasOwnProp(p,w)?(_=p[w],p[w]=O.isArray(_)?[..._,y[1]]:[_,y[1]]):p[w]=y[1]}f(p,o)}else n!=null&&u(o,n,l);return this}get(n,o){if(n=Cl(n),n){const l=O.findKey(this,n);if(l){const a=this[l];if(!o)return a;if(o===!0)return i2(a);if(O.isFunction(o))return o.call(this,a,l);if(O.isRegExp(o))return o.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=Cl(n),n){const l=O.findKey(this,n);return!!(l&&this[l]!==void 0&&(!o||wd(this,this[l],l,o)))}return!1}delete(n,o){const l=this;let a=!1;function u(f){if(f=Cl(f),f){const p=O.findKey(l,f);p&&(!o||wd(l,l[p],p,o))&&(delete l[p],a=!0)}}return O.isArray(n)?n.forEach(u):u(n),a}clear(n){const o=Object.keys(this);let l=o.length,a=!1;for(;l--;){const u=o[l];(!n||wd(this,this[u],u,n,!0))&&(delete this[u],a=!0)}return a}normalize(n){const o=this,l={};return O.forEach(this,(a,u)=>{const f=O.findKey(l,u);if(f){o[f]=cc(a),delete o[u];return}const p=n?d2(u):String(u).trim();p!==u&&delete o[u],o[p]=cc(a),l[p]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return O.forEach(this,(l,a)=>{l!=null&&l!==!1&&(o[a]=n&&O.isArray(l)?l.join(", "):l)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}getSetCookie(){const n=this.get("set-cookie");return O.isArray(n)?n:n==null||n===!1?[]:[n]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static parseParameters(n){return c2(n)}static concat(n,...o){const l=new this(n);return o.forEach(a=>l.set(a)),l}static accessor(n){const l=(this[e_]=this[e_]={accessors:{}}).accessors,a=this.prototype;function u(f){const p=Cl(f);l[p]||(f2(a,f),l[p]=!0)}return O.isArray(n)?n.forEach(u):u(n),this}};Xn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(Xn.prototype,({value:t},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>t,set(l){this[o]=l}}});O.freezeMethods(Xn);const vc="[REDACTED ****]";function h2(t){if(O.hasOwnProp(t,"toJSON"))return!0;let n=Object.getPrototypeOf(t);for(;n&&n!==Object.prototype;){if(O.hasOwnProp(n,"toJSON"))return!0;n=Object.getPrototypeOf(n)}return!1}function p2(t,n){const o=new Set(n.map(u=>String(u).toLowerCase())),l=[],a=u=>{if(u===null||typeof u!="object"||O.isBuffer(u))return u;if(l.indexOf(u)!==-1)return;u instanceof Xn&&(u=u.toJSON()),l.push(u);let f;if(O.isArray(u))f=[],u.forEach((p,_)=>{const w=a(p);O.isUndefined(w)||(f[_]=w)});else{if(!O.isPlainObject(u)&&h2(u))return l.pop(),u;f=Object.create(null);for(const[p,_]of Object.entries(u)){const w=o.has(p.toLowerCase())?vc:a(_);O.isUndefined(w)||(f[p]=w)}}return l.pop(),f};return a(t)}function t_(t){try{return String(t)}catch{return""}}function _2(t){return t.errors.map(o=>{try{return o&&o.message?t_(o.message):t_(o)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let be=class hm extends Error{static from(n,o,l,a,u,f){let p=n.message;!p&&O.isArray(n.errors)&&n.errors.length&&(p=_2(n));const _=new hm(p,o||n.code,l,a,u);return Object.defineProperty(_,"cause",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),_.name=n.name,n.status!=null&&_.status==null&&(_.status=n.status),f&&Object.assign(_,f),_}constructor(n,o,l,a,u){super(n),Object.defineProperty(this,"message",{__proto__:null,value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,o&&(this.code=o),l&&(this.config=l),a&&(this.request=a),u&&(this.response=u,this.status=u.status)}toJSON(){const n=this.config,o=n&&O.hasOwnProp(n,"redact")?n.redact:void 0,l=O.isArray(o)&&o.length>0?p2(n,o):O.toJSONObject(n);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l,code:this.code,status:this.status}}};be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";be.ERR_BAD_OPTION="ERR_BAD_OPTION";be.ECONNABORTED="ECONNABORTED";be.ETIMEDOUT="ETIMEDOUT";be.ECONNREFUSED="ECONNREFUSED";be.ERR_NETWORK="ERR_NETWORK";be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";be.ERR_DEPRECATED="ERR_DEPRECATED";be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";be.ERR_CANCELED="ERR_CANCELED";be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";be.ERR_INVALID_URL="ERR_INVALID_URL";be.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const m2=null,pm=100;function zd(t){return O.isPlainObject(t)||O.isArray(t)}function _m(t){return O.endsWith(t,"[]")?t.slice(0,-2):t}function bd(t,n,o){return t?t.concat(n).map(function(a,u){return a=_m(a),!o&&u?"["+a+"]":a}).join(o?".":""):n}function g2(t){return O.isArray(t)&&!t.some(zd)}const y2=O.toFlatObject(O,{},null,function(n){return/^is[A-Z]/.test(n)});function Tc(t,n,o){if(!O.isObject(t))throw new TypeError("target must be an object");n=n||new FormData,o=O.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(Y,Q){return!O.isUndefined(Q[Y])});const l=o.metaTokens,a=o.visitor||N,u=o.dots,f=o.indexes,p=o.Blob||typeof Blob<"u"&&Blob,_=o.maxDepth===void 0?pm:o.maxDepth,w=p&&O.isSpecCompliantForm(n),y=[];if(!O.isFunction(a))throw new TypeError("visitor must be a function");function x(R){if(R===null)return"";if(O.isDate(R))return R.toISOString();if(O.isBoolean(R))return R.toString();if(!w&&O.isBlob(R))throw new be("Blob is not supported. Use a Buffer instead.");if(O.isArrayBuffer(R)||O.isTypedArray(R)){if(w&&typeof p=="function")return new p([R]);throw new be("Blob is not supported. Use a Buffer instead.",be.ERR_NOT_SUPPORT)}return R}function b(R){if(R>_)throw new be("Object is too deeply nested ("+R+" levels). Max depth: "+_,be.ERR_FORM_DATA_DEPTH_EXCEEDED)}function P(R,Y){if(_===1/0)return JSON.stringify(R);const Q=[];return JSON.stringify(R,function(ie,re){if(!O.isObject(re))return re;for(;Q.length&&Q[Q.length-1]!==this;)Q.pop();return Q.push(re),b(Y+Q.length-1),re})}function N(R,Y,Q){let $=R;if(O.isReactNative(n)&&O.isReactNativeBlob(R))return n.append(bd(Q,Y,u),x(R)),!1;if(R&&!Q&&typeof R=="object"){if(O.endsWith(Y,"{}"))Y=l?Y:Y.slice(0,-2),R=P(R,1);else if(O.isArray(R)&&g2(R)||(O.isFileList(R)||O.endsWith(Y,"[]"))&&($=O.toArray(R)))return Y=_m(Y),$.forEach(function(re,ne){!(O.isUndefined(re)||re===null)&&n.append(f===!0?bd([Y],ne,u):f===null?Y:Y+"[]",x(re))}),!1}return zd(R)?!0:(n.append(bd(Q,Y,u),x(R)),!1)}const M=Object.assign(y2,{defaultVisitor:N,convertValue:x,isVisitable:zd});function I(R,Y,Q=0){if(!O.isUndefined(R)){if(b(Q),y.indexOf(R)!==-1)throw new Error("Circular reference detected in "+Y.join("."));y.push(R),O.forEach(R,function(ie,re){(!(O.isUndefined(ie)||ie===null)&&a.call(n,ie,O.isString(re)?re.trim():re,Y,M))===!0&&I(ie,Y?Y.concat(re):[re],Q+1)}),y.pop()}}if(!O.isObject(t))throw new TypeError("data must be an object");return I(t),n}function n_(t){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(l){return n[l]})}function rf(t,n){this._pairs=[],t&&Tc(t,this,n)}const mm=rf.prototype;mm.append=function(n,o){this._pairs.push([n,o])};mm.toString=function(n){const o=n?l=>n.call(this,l,n_):n_;return this._pairs.map(function(a){return o(a[0])+"="+o(a[1])},"").join("&")};function x2(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function gm(t,n,o){if(!n)return t;t=t||"";const l=O.isFunction(o)?{serialize:o}:o,a=O.getSafeProp(l,"encode")||x2,u=O.getSafeProp(l,"serialize");let f;if(u?f=u(n,l):f=O.isURLSearchParams(n)?n.toString():new rf(n,l).toString(a),f){const p=t.indexOf("#");p!==-1&&(t=t.slice(0,p)),t+=(t.indexOf("?")===-1?"?":"&")+f}return t}class r_{constructor(){this.handlers=[]}use(n,o,l){return this.handlers.push({fulfilled:n,rejected:o,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){O.forEach(this.handlers,function(l){l!==null&&n(l)})}}const of={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},v2=typeof URLSearchParams<"u"?URLSearchParams:rf,w2=typeof FormData<"u"?FormData:null,b2=typeof Blob<"u"?Blob:null,k2={isBrowser:!0,classes:{URLSearchParams:v2,FormData:w2,Blob:b2},protocols:["http","https","file","blob","url","data"]},sf=typeof window<"u"&&typeof document<"u",Fd=typeof navigator=="object"&&navigator||void 0,S2=sf&&(!Fd||["ReactNative","NativeScript","NS"].indexOf(Fd.product)<0),C2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",j2=sf&&window.location.href||"http://localhost",E2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sf,hasStandardBrowserEnv:S2,hasStandardBrowserWebWorkerEnv:C2,navigator:Fd,origin:j2},Symbol.toStringTag,{value:"Module"})),Dn={...E2,...k2};function R2(t,n){return Tc(t,new Dn.classes.URLSearchParams,{visitor:function(o,l,a,u){return Dn.isNode&&O.isBuffer(o)?(this.append(l,o.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)},...n})}const o_=pm;function ym(t){if(t>o_)throw new be("FormData field is too deeply nested ("+t+" levels). Max depth: "+o_,be.ERR_FORM_DATA_DEPTH_EXCEEDED)}function T2(t){const n=[],o=/[^.[\]]+|\[([^.[\]]*)]/g;let l;for(;(l=o.exec(t))!==null;)ym(n.length),n.push(l[0]==="[]"?"":l[1]||l[0]);return n}function N2(t){const n={},o=Object.keys(t);let l;const a=o.length;let u;for(l=0;l<a;l++)u=o[l],n[u]=t[u];return n}function xm(t){function n(o,l,a,u){ym(u);let f=o[u++];if(f==="__proto__")return!0;const p=Number.isFinite(+f),_=u>=o.length;return f=!f&&O.isArray(a)?a.length:f,_?(O.hasOwnProp(a,f)?a[f]=O.isArray(a[f])?a[f].concat(l):[a[f],l]:a[f]=l,!p):((!O.hasOwnProp(a,f)||!O.isObject(a[f]))&&(a[f]=[]),n(o,l,a[f],u)&&O.isArray(a[f])&&(a[f]=N2(a[f])),!p)}if(O.isFormData(t)&&O.isFunction(t.entries)){const o={};return O.forEachEntry(t,(l,a)=>{n(T2(l),a,o,0)}),o}return null}const wi=(t,n)=>t!=null&&O.hasOwnProp(t,n)?t[n]:void 0;function M2(t,n,o){if(O.isString(t))try{return(n||JSON.parse)(t),O.trim(t)}catch(l){if(l.name!=="SyntaxError")throw l}return(o||JSON.stringify)(t)}const Dl={transitional:of,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const l=o.getContentType()||"",a=l.indexOf("application/json")>-1,u=O.isObject(n);if(u&&O.isHTMLForm(n)&&(n=new FormData(n)),O.isFormData(n))return a?JSON.stringify(xm(n)):n;if(O.isArrayBuffer(n)||O.isBuffer(n)||O.isStream(n)||O.isFile(n)||O.isBlob(n)||O.isReadableStream(n))return n;if(O.isArrayBufferView(n))return n.buffer;if(O.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let p;if(u){const _=wi(this,"formSerializer");if(l.indexOf("application/x-www-form-urlencoded")>-1)return R2(n,_).toString();if((p=O.isFileList(n))||l.indexOf("multipart/form-data")>-1){const w=wi(this,"env"),y=w&&w.FormData;return Tc(p?{"files[]":n}:n,y&&new y,_)}}return u||a?(o.setContentType("application/json",!1),M2(n)):n}],transformResponse:[function(n){const o=wi(this,"transitional")||Dl.transitional,l=o&&o.forcedJSONParsing,a=wi(this,"responseType"),u=a==="json";if(O.isResponse(n)||O.isReadableStream(n))return n;if(n&&O.isString(n)&&(l&&!a||u)){const p=!(o&&o.silentJSONParsing)&&u;try{return JSON.parse(n,wi(this,"parseReviver"))}catch(_){if(p)throw _.name==="SyntaxError"?be.from(_,be.ERR_BAD_RESPONSE,this,null,wi(this,"response")):_}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dn.classes.FormData,Blob:Dn.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch","query"],t=>{Dl.headers[t]={}});function kd(t,n){const o=this||Dl,l=n||o,a=Xn.from(l.headers);let u=l.data;return O.forEach(t,function(p){u=p.call(o,u,a.normalize(),n?n.status:void 0)}),a.normalize(),u}function vm(t){return!!(t&&t.__CANCEL__)}let zl=class extends be{constructor(n,o,l){super(n??"canceled",be.ERR_CANCELED,o,l),this.name="CanceledError",this.__CANCEL__=!0}};function wm(t,n,o){const l=o.config.validateStatus;!o.status||!l||l(o.status)?t(o):n(new be("Request failed with status code "+o.status,o.status>=400&&o.status<500?be.ERR_BAD_REQUEST:be.ERR_BAD_RESPONSE,o.config,o.request,o))}function I2(t){const n=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return n&&n[1]||""}function L2(t,n){t=t||10;const o=new Array(t),l=new Array(t);let a=0,u=0,f;return n=n!==void 0?n:1e3,function(_){const w=Date.now(),y=l[u];f||(f=w),o[a]=_,l[a]=w;let x=u,b=0;for(;x!==a;)b+=o[x++],x=x%t;if(a=(a+1)%t,a===u&&(u=(u+1)%t),w-f<n)return;const P=y&&w-y;return P?Math.round(b*1e3/P):void 0}}function P2(t,n){let o=0,l=1e3/n,a,u;const f=(w,y=Date.now())=>{o=y,a=null,u&&(clearTimeout(u),u=null),t(...w)};return[(...w)=>{const y=Date.now(),x=y-o;x>=l?f(w,y):(a=w,u||(u=setTimeout(()=>{u=null,f(a)},l-x)))},()=>a&&f(a)]}const wc=(t,n,o=3)=>{let l=0;const a=L2(50,250);return P2(u=>{if(!u||typeof u.loaded!="number")return;const f=u.loaded,p=u.lengthComputable?u.total:void 0,_=Math.max(0,p!=null?Math.min(f,p):f),w=Math.max(0,_-l),y=a(w);l=Math.max(l,_);const x={loaded:_,total:p,progress:p?_/p:void 0,bytes:w,rate:y||void 0,estimated:y&&p?(p-_)/y:void 0,event:u,lengthComputable:p!=null,[n?"download":"upload"]:!0};t(x)},o)},s_=(t,n)=>{const o=t!=null;return[l=>n[0]({lengthComputable:o,total:t,loaded:l}),n[1]]},i_=(t,n=O.asap)=>(...o)=>n(()=>t(...o)),O2=Dn.hasStandardBrowserEnv?((t,n)=>o=>(o=new URL(o,Dn.origin),t.protocol===o.protocol&&t.host===o.host&&(n||t.port===o.port)))(new URL(Dn.origin),Dn.navigator&&/(msie|trident)/i.test(Dn.navigator.userAgent)):()=>!0,A2=Dn.hasStandardBrowserEnv?{write(t,n,o,l,a,u,f){if(typeof document>"u")return;const p=[`${t}=${encodeURIComponent(n)}`];O.isNumber(o)&&p.push(`expires=${new Date(o).toUTCString()}`),O.isString(l)&&p.push(`path=${l}`),O.isString(a)&&p.push(`domain=${a}`),u===!0&&p.push("secure"),O.isString(f)&&p.push(`SameSite=${f}`),document.cookie=p.join("; ")},read(t){if(typeof document>"u")return null;const n=document.cookie.split(";");for(let o=0;o<n.length;o++){const l=n[o].replace(/^\s+/,""),a=l.indexOf("=");if(a!==-1&&l.slice(0,a)===t)try{return decodeURIComponent(l.slice(a+1))}catch{return l.slice(a+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function $2(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function B2(t,n){if(!n)return t;let o=t.length;for(;o>0&&t.charCodeAt(o-1)===47;)o--;return t.slice(0,o)+"/"+n.replace(/^\/+/,"")}const D2=/^https?:(?!\/\/)/i,z2=/[\t\n\r]/g;function F2(t){let n=0;for(;n<t.length&&t.charCodeAt(n)<=32;)n++;return t.slice(n)}function W2(t){return F2(t).replace(z2,"")}function U2(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(n,o,l="")=>`${o}${l}${vc}`)}function H2(t){const n=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${vc}@`),o=n.indexOf("#"),a=(o===-1?n:n.slice(0,o)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${vc}`);return o===-1?a:`${a}#${U2(n.slice(o+1))}`}function l_(t,n){if(typeof t=="string"){const o=W2(t);if(D2.test(o))throw new be(`Invalid URL ${JSON.stringify(H2(o))}: missing "//" after protocol`,be.ERR_INVALID_URL,n)}}function bm(t,n,o,l){l_(n,l);let a=!$2(n);return t&&(a||o===!1)?(l_(t,l),B2(t,n)):n}const a_=t=>t instanceof Xn?{...t}:t,Y2=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(n=>Object.getOwnPropertyDescriptor(t,n).enumerable)):Object.keys(t);function zs(t,n){t=t||{},n=n||{};const o=Object.create(null);Object.defineProperty(o,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function l(y,x,b,P){return O.isPlainObject(y)&&O.isPlainObject(x)?O.merge.call({caseless:P},y,x):O.isPlainObject(x)?O.merge({},x):O.isArray(x)?x.slice():x}function a(y,x,b,P){if(O.isUndefined(x)){if(!O.isUndefined(y))return l(void 0,y,b,P)}else return l(y,x,b,P)}function u(y,x){if(!O.isUndefined(x))return l(void 0,x)}function f(y,x){if(O.isUndefined(x)){if(!O.isUndefined(y))return l(void 0,y)}else return l(void 0,x)}function p(y){const x=O.hasOwnProp(n,"transitional")?n.transitional:void 0;if(!O.isUndefined(x))if(O.isPlainObject(x)){if(O.hasOwnProp(x,y))return x[y]}else return;const b=O.hasOwnProp(t,"transitional")?t.transitional:void 0;if(O.isPlainObject(b)&&O.hasOwnProp(b,y))return b[y]}function _(y,x,b){if(O.hasOwnProp(n,b))return l(y,x);if(O.hasOwnProp(t,b))return l(void 0,y)}const w={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,allowedSocketPaths:f,responseEncoding:f,validateStatus:_,headers:(y,x,b)=>a(a_(y),a_(x),b,!0)};return O.forEach(Y2({...t,...n}),function(x){if(x==="__proto__"||x==="constructor"||x==="prototype")return;const b=O.hasOwnProp(w,x)?w[x]:a,P=O.hasOwnProp(t,x)?t[x]:void 0,N=O.hasOwnProp(n,x)?n[x]:void 0,M=b(P,N,x);O.isUndefined(M)&&b!==_||(o[x]=M)}),O.hasOwnProp(n,"validateStatus")&&O.isUndefined(n.validateStatus)&&p("validateStatusUndefinedResolves")===!1&&(O.hasOwnProp(t,"validateStatus")?o.validateStatus=l(void 0,t.validateStatus):delete o.validateStatus),o}const V2=["content-type","content-length"];function X2(t,n,o){if(o!=="content-only"){t.set(n);return}Object.entries(n||{}).forEach(([l,a])=>{V2.includes(l.toLowerCase())&&t.set(l,a)})}const q2=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(n,o)=>String.fromCharCode(parseInt(o,16)));function km(t){const n=zs({},t),o=b=>O.hasOwnProp(n,b)?n[b]:void 0,l=o("data");let a=o("withXSRFToken");const u=o("xsrfHeaderName"),f=o("xsrfCookieName");let p=o("headers");const _=o("auth"),w=o("baseURL"),y=o("allowAbsoluteUrls"),x=o("url");if(n.headers=p=Xn.from(p),n.url=gm(bm(w,x,y,n),o("params"),o("paramsSerializer")),_){const b=O.getSafeProp(_,"username")||"",P=O.getSafeProp(_,"password")||"";try{p.set("Authorization","Basic "+btoa(b+":"+(P?q2(P):"")))}catch(N){throw be.from(N,be.ERR_BAD_OPTION_VALUE,t)}}if(O.isFormData(l)&&(Dn.hasStandardBrowserEnv||Dn.hasStandardBrowserWebWorkerEnv||O.isReactNative(l)?p.setContentType(void 0):O.isFunction(l.getHeaders)&&X2(p,l.getHeaders(),o("formDataHeaderPolicy"))),Dn.hasStandardBrowserEnv&&(O.isFunction(a)&&(a=a(n)),a===!0||a==null&&O2(n.url))){const P=u&&f&&A2.read(f);P&&p.set(u,P)}return n}const Q2=typeof XMLHttpRequest<"u",K2=Q2&&function(t){return new Promise(function(o,l){const a=km(t);let u=a.data;const f=Xn.from(a.headers).normalize();let{responseType:p,onUploadProgress:_,onDownloadProgress:w}=a,y,x,b,P,N;function M(){P&&P(),N&&N(),a.cancelToken&&a.cancelToken.unsubscribe(y),a.signal&&a.signal.removeEventListener("abort",y)}let I=new XMLHttpRequest;I.open(a.method.toUpperCase(),a.url,!0),I.timeout=a.timeout;function R(){if(!I)return;const Q=Xn.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),ie={data:!p||p==="text"||p==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:Q,config:t,request:I};wm(function(ne){o(ne),M()},function(ne){l(ne),M()},ie),I=null}"onloadend"in I?I.onloadend=R:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.startsWith("file:"))||setTimeout(R)},I.onabort=function(){I&&(l(new be("Request aborted",be.ECONNABORTED,t,I)),M(),I=null)},I.onerror=function($){const ie=$&&$.message?$.message:"Network Error",re=new be(ie,be.ERR_NETWORK,t,I);re.event=$||null,l(re),M(),I=null},I.ontimeout=function(){let $=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const ie=a.transitional||of;a.timeoutErrorMessage&&($=a.timeoutErrorMessage),l(new be($,ie.clarifyTimeoutError?be.ETIMEDOUT:be.ECONNABORTED,t,I)),M(),I=null},u===void 0&&f.setContentType(null),"setRequestHeader"in I&&O.forEach(fm(f),function($,ie){I.setRequestHeader(ie,$)}),O.isUndefined(a.withCredentials)||(I.withCredentials=!!a.withCredentials),p&&p!=="json"&&(I.responseType=a.responseType),w&&([b,N]=wc(w,!0),I.addEventListener("progress",b)),_&&I.upload&&([x,P]=wc(_),I.upload.addEventListener("progress",x),I.upload.addEventListener("loadend",P)),(a.cancelToken||a.signal)&&(y=Q=>{I&&(l(!Q||Q.type?new zl(null,t,I):Q),I.abort(),M(),I=null)},a.cancelToken&&a.cancelToken.subscribe(y),a.signal&&(a.signal.aborted?y():a.signal.addEventListener("abort",y)));const Y=I2(a.url);if(Y&&!Dn.protocols.includes(Y)){l(new be("Unsupported protocol "+Y+":",be.ERR_BAD_REQUEST,t)),M();return}I.send(u||null)})},G2=(t,n)=>{if(t=t?t.filter(Boolean):[],!n&&!t.length)return;const o=new AbortController;let l=!1;const a=function(_){if(!l){l=!0,f();const w=_ instanceof Error?_:this.reason;o.abort(w instanceof be?w:new zl(w instanceof Error?w.message:w))}};let u=n&&setTimeout(()=>{u=null,a(new be(`timeout of ${n}ms exceeded`,be.ETIMEDOUT))},n);const f=()=>{t&&(u&&clearTimeout(u),u=null,t.forEach(_=>{_.unsubscribe?_.unsubscribe(a):_.removeEventListener("abort",a)}),t=null)};t.forEach(_=>{if(!l){if(_.aborted){a.call(_);return}_.addEventListener("abort",a,{once:!0})}});const{signal:p}=o;return p.unsubscribe=()=>O.asap(f),p},J2=function*(t,n){let o=t.byteLength;if(o<n){yield t;return}let l=0,a;for(;l<o;)a=l+n,yield t.slice(l,a),l=a},Z2=async function*(t,n){for await(const o of ev(t))yield*J2(o,n)},ev=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const n=t.getReader();try{for(;;){const{done:o,value:l}=await n.read();if(o)break;yield l}}finally{await n.cancel()}},c_=(t,n,o,l)=>{const a=Z2(t,n);let u=0,f,p=_=>{f||(f=!0,l&&l(_))};return new ReadableStream({async pull(_){try{const{done:w,value:y}=await a.next();if(w){p(),_.close();return}let x=y.byteLength;if(o){let b=u+=x;o(b)}_.enqueue(new Uint8Array(y))}catch(w){throw p(w),w}},cancel(_){return p(_),a.return()}},{highWaterMark:2})},u_=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,Sm=(t,n,o)=>n+2<o&&u_(t.charCodeAt(n+1))&&u_(t.charCodeAt(n+2)),d_=t=>t<=57?t-48:(t&223)-55,tv=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,nv=t=>t===9||t===10||t===12||t===13||t===32,rv=t=>{const n=Math.floor(t/4),o=t%4;return n*3+(o===2?1:o===3?2:0)},ov=t=>{const n=t.length;let o=0;return n>0&&t.charCodeAt(n-1)===61&&(o++,n>1&&t.charCodeAt(n-2)===61&&o++),Math.floor((n-o)*3/4)},sv=t=>{const n=t.length;let o=0,l=0,a=!1;for(let u=0;u<n;u++){let f=t.charCodeAt(u);if(f===37&&Sm(t,u,n)&&(f=d_(t.charCodeAt(u+1))*16+d_(t.charCodeAt(u+2)),u+=2),!nv(f)){if(f===61){l++;continue}if(!tv(f)||l>0){a=!0;continue}o++}}return a||l>2||l>0&&(o+l)%4!==0||o%4===1?ov(t):rv(o)},iv=(t,n)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const o=t.indexOf(",");if(o<0)return 0;const l=t.slice(5,o),a=t.slice(o+1);if(/;base64/i.test(l))return n(a);let f=0;for(let p=0,_=a.length;p<_;p++){const w=a.charCodeAt(p);if(w===37&&Sm(a,p,_))f+=1,p+=2;else if(w<128)f+=1;else if(w<2048)f+=2;else if(w>=55296&&w<=56319&&p+1<_){const y=a.charCodeAt(p+1);y>=56320&&y<=57343?(f+=4,p++):f+=3}else f+=3}return f};function lv(t){const n=typeof t=="string"?t.indexOf("#"):-1;return iv(n===-1?t:t.slice(0,n),sv)}const lf="1.19.0",f_=64*1024,{isFunction:sc}=O,av=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(n,o)=>String.fromCharCode(parseInt(o,16))),h_=t=>{if(!O.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},p_=(t,...n)=>{try{return!!t(...n)}catch{return!1}},cv=t=>{const n=t.indexOf("://");let o=t;return n!==-1&&(o=o.slice(n+3)),o.includes("@")||o.includes(":")},uv=t=>{const n=O.global!==void 0&&O.global!==null?O.global:globalThis,{ReadableStream:o,TextEncoder:l}=n;t=O.merge.call({skipUndefined:!0},{Request:n.Request,Response:n.Response},t);const{fetch:a,Request:u,Response:f}=t,p=a?sc(a):typeof fetch=="function",_=sc(u),w=sc(f);if(!p)return!1;const y=p&&sc(o),x=p&&(typeof l=="function"?(R=>Y=>R.encode(Y))(new l):async R=>new Uint8Array(await new u(R).arrayBuffer())),b=_&&y&&p_(()=>{let R=!1;const Y=new u(Dn.origin,{body:new o,method:"POST",get duplex(){return R=!0,"half"}}),Q=Y.headers.has("Content-Type");return Y.body!=null&&Y.body.cancel(),R&&!Q}),P=w&&y&&p_(()=>O.isReadableStream(new f("").body)),N={stream:P&&(R=>R.body)};p&&["text","arrayBuffer","blob","formData","stream"].forEach(R=>{!N[R]&&(N[R]=(Y,Q)=>{let $=Y&&Y[R];if($)return $.call(Y);throw new be(`Response type '${R}' is not supported`,be.ERR_NOT_SUPPORT,Q)})});const M=async R=>{if(R==null)return 0;if(O.isBlob(R))return R.size;if(O.isSpecCompliantForm(R))return(await new u(Dn.origin,{method:"POST",body:R}).arrayBuffer()).byteLength;if(O.isArrayBufferView(R)||O.isArrayBuffer(R))return R.byteLength;if(O.isURLSearchParams(R)&&(R=R+""),O.isString(R))return(await x(R)).byteLength},I=async(R,Y)=>{const Q=O.toFiniteNumber(R.getContentLength());return Q??M(Y)};return async R=>{let{url:Y,method:Q,data:$,signal:ie,cancelToken:re,timeout:ne,onDownloadProgress:De,onUploadProgress:rt,responseType:Le,headers:Te,withCredentials:tt="same-origin",fetchOptions:Ge,maxContentLength:ce,maxBodyLength:me}=km(R);const de=O.isNumber(ce)&&ce>-1,ze=O.isNumber(me)&&me>-1,D=q=>O.hasOwnProp(R,q)?R[q]:void 0;let X=a||fetch;Le=Le?(Le+"").toLowerCase():"text";let G=G2([ie,re&&re.toAbortSignal()],ne),j=null;const H=G&&G.unsubscribe&&(()=>{G.unsubscribe()});let ge,Se=null;const Fe=()=>new be("Request body larger than maxBodyLength limit",be.ERR_BAD_REQUEST,R,j);try{let q;const ve=D("auth");if(ve){const Xe=O.getSafeProp(ve,"username")||"",Xt=O.getSafeProp(ve,"password")||"";q={username:Xe,password:Xt}}if(cv(Y)){const Xe=new URL(Y,Dn.origin);if(!q&&(Xe.username||Xe.password)){const Xt=h_(Xe.username),J=h_(Xe.password);q={username:Xt,password:J}}(Xe.username||Xe.password)&&(Xe.username="",Xe.password="",Y=Xe.href)}if(q&&(Te.delete("authorization"),Te.set("Authorization","Basic "+btoa(av((q.username||"")+":"+(q.password||""))))),de&&typeof Y=="string"&&Y.startsWith("data:")&&lv(Y)>ce)throw new be("maxContentLength size of "+ce+" exceeded",be.ERR_BAD_RESPONSE,R,j);if(ze&&Q!=="get"&&Q!=="head"){const Xe=await M($);if(typeof Xe=="number"&&isFinite(Xe)&&(ge=Xe,Xe>me))throw Fe()}const Pe=ze&&(O.isReadableStream($)||O.isStream($)),ut=(Xe,Xt,J)=>c_(Xe,f_,Re=>{if(ze&&Re>me)throw Se=Fe();Xt&&Xt(Re)},J);if(b&&Q!=="get"&&Q!=="head"&&(rt||Pe)){if(ge=ge??await I(Te,$),ge!==0||Pe){let Xe=new u(Y,{method:"POST",body:$,duplex:"half"}),Xt;if(O.isFormData($)&&(Xt=Xe.headers.get("content-type"))&&Te.setContentType(Xt),Xe.body){const[J,Re]=rt&&s_(ge,wc(i_(rt)))||[];$=ut(Xe.body,J,Re)}}}else if(Pe&&!_&&y&&Q!=="get"&&Q!=="head")$=ut($);else if(Pe&&_&&!b&&Q!=="get"&&Q!=="head")throw new be("Stream request bodies are not supported by the current fetch implementation",be.ERR_NOT_SUPPORT,R,j);O.isString(tt)||(tt=tt?"include":"omit");const Bt=_&&"credentials"in u.prototype;if(O.isFormData($)){const Xe=Te.getContentType();Xe&&/^multipart\/form-data/i.test(Xe)&&!/boundary=/i.test(Xe)&&Te.delete("content-type")}Te.set("User-Agent","axios/"+lf,!1);const Dt={...Ge,signal:G,method:Q.toUpperCase(),headers:fm(Te.normalize()),body:$,duplex:"half",credentials:Bt?tt:void 0};j=_&&new u(Y,Dt);let _t=await(_?X(j,Ge):X(Y,Dt));const Ht=Xn.from(_t.headers);if(de){const Xe=O.toFiniteNumber(Ht.getContentLength());if(Xe!=null&&Xe>ce)throw new be("maxContentLength size of "+ce+" exceeded",be.ERR_BAD_RESPONSE,R,j)}const Tt=P&&(Le==="stream"||Le==="response");if(P&&_t.body&&(De||de||Tt&&H)){const Xe={};["status","statusText","headers"].forEach(dt=>{Xe[dt]=_t[dt]});const Xt=O.toFiniteNumber(Ht.getContentLength()),[J,Re]=De&&s_(Xt,wc(i_(De),!0))||[];let ot=0;const Ve=dt=>{if(de&&(ot=dt,ot>ce))throw new be("maxContentLength size of "+ce+" exceeded",be.ERR_BAD_RESPONSE,R,j);J&&J(dt)};_t=new f(c_(_t.body,f_,Ve,()=>{Re&&Re(),H&&H()}),Xe)}Le=Le||"text";let an=await N[O.findKey(N,Le)||"text"](_t,R);if(de&&!P&&!Tt){let Xe;if(an!=null&&(typeof an.byteLength=="number"?Xe=an.byteLength:typeof an.size=="number"?Xe=an.size:typeof an=="string"&&(Xe=typeof l=="function"?new l().encode(an).byteLength:an.length)),typeof Xe=="number"&&Xe>ce)throw new be("maxContentLength size of "+ce+" exceeded",be.ERR_BAD_RESPONSE,R,j)}return!Tt&&H&&H(),await new Promise((Xe,Xt)=>{wm(Xe,Xt,{data:an,headers:Xn.from(_t.headers),status:_t.status,statusText:_t.statusText,config:R,request:j})})}catch(q){if(H&&H(),G&&G.aborted&&G.reason instanceof be){const ve=G.reason;throw ve.config=R,j&&(ve.request=j),q!==ve&&Object.defineProperty(ve,"cause",{__proto__:null,value:q,writable:!0,enumerable:!1,configurable:!0}),ve}if(Se)throw j&&!Se.request&&(Se.request=j),Se;if(q instanceof be)throw j&&!q.request&&(q.request=j),q;if(q&&q.name==="TypeError"&&/Load failed|fetch/i.test(q.message)){const ve=new be("Network Error",be.ERR_NETWORK,R,j,q&&q.response);throw Object.defineProperty(ve,"cause",{__proto__:null,value:q.cause||q,writable:!0,enumerable:!1,configurable:!0}),ve}throw be.from(q,q&&q.code,R,j,q&&q.response)}}},dv=new Map,Cm=t=>{let n=t&&t.env||{};const{fetch:o,Request:l,Response:a}=n,u=[l,a,o];let f=u.length,p=f,_,w,y=dv;for(;p--;)_=u[p],w=y.get(_),w===void 0&&y.set(_,w=p?new Map:uv(n)),y=w;return w};Cm();const af={http:m2,xhr:K2,fetch:{get:Cm}};O.forEach(af,(t,n)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:n})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:n})}});const __=t=>`- ${t}`,fv=t=>O.isFunction(t)||t===null||t===!1;function hv(t,n){t=O.isArray(t)?t:[t];const{length:o}=t;let l,a;const u={};for(let f=0;f<o;f++){l=t[f];let p;if(a=l,!fv(l)&&(a=af[(p=String(l)).toLowerCase()],a===void 0))throw new be(`Unknown adapter '${p}'`);if(a&&(O.isFunction(a)||(a=a.get(n))))break;u[p||"#"+f]=a}if(!a){const f=Object.entries(u).map(([_,w])=>`adapter ${_} `+(w===!1?"is not supported by the environment":"is not available in the build"));let p=o?f.length>1?`since :
`+f.map(__).join(`
`):" "+__(f[0]):"as no adapter specified";throw new be("There is no suitable adapter to dispatch the request "+p,be.ERR_NOT_SUPPORT)}return a}const jm={getAdapter:hv,adapters:af};function Sd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new zl(null,t)}function Cd(t){return Sd(t),t.headers=Xn.from(t.headers),t.data=kd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),jm.getAdapter(t.adapter||Dl.adapter,t)(t).then(function(l){Sd(t),t.response=l;try{l.data=kd.call(t,t.transformResponse,l)}finally{delete t.response}return l.headers=Xn.from(l.headers),l},function(l){if(!vm(l)&&(Sd(t),l&&l.response)){t.response=l.response;try{l.response.data=kd.call(t,t.transformResponse,l.response)}finally{delete t.response}l.response.headers=Xn.from(l.response.headers)}return Promise.reject(l)})}const Nc={};["object","boolean","number","function","string","symbol"].forEach((t,n)=>{Nc[t]=function(l){return typeof l===t||"a"+(n<1?"n ":" ")+t}});const m_={};Nc.transitional=function(n,o,l){function a(u,f){return"[Axios v"+lf+"] Transitional option '"+u+"'"+f+(l?". "+l:"")}return(u,f,p)=>{if(n===!1)throw new be(a(f," has been removed"+(o?" in "+o:"")),be.ERR_DEPRECATED);return o&&!m_[f]&&(m_[f]=!0,console.warn(a(f," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(u,f,p):!0}};Nc.spelling=function(n){return(o,l)=>(console.warn(`${l} is likely a misspelling of ${n}`),!0)};function pv(t,n,o){if(typeof t!="object"||t===null)throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);const l=Object.keys(t);let a=l.length;for(;a-- >0;){const u=l[a],f=Object.prototype.hasOwnProperty.call(n,u)?n[u]:void 0;if(f){const p=t[u],_=p===void 0||f(p,u,t);if(_!==!0)throw new be("option "+u+" must be "+_,be.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new be("Unknown option "+u,be.ERR_BAD_OPTION)}}const uc={assertOptions:pv,validators:Nc},Vn=uc.validators;let Os=class{constructor(n){this.defaults=n||{},this.interceptors={request:new r_,response:new r_}}async request(n,o){try{return await this._request(n,o)}catch(l){if(l instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=(()=>{if(!a.stack)return"";const f=a.stack.indexOf(`
`);return f===-1?"":a.stack.slice(f+1)})();try{if(!l.stack)l.stack=u;else if(u){const f=u.indexOf(`
`),p=f===-1?-1:u.indexOf(`
`,f+1),_=p===-1?"":u.slice(p+1);String(l.stack).endsWith(_)||(l.stack+=`
`+u)}}catch{}}throw l}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=zs(this.defaults,o);const{transitional:l,paramsSerializer:a,headers:u}=o;l!==void 0&&uc.assertOptions(l,{silentJSONParsing:Vn.transitional(Vn.boolean),forcedJSONParsing:Vn.transitional(Vn.boolean),clarifyTimeoutError:Vn.transitional(Vn.boolean),legacyInterceptorReqResOrdering:Vn.transitional(Vn.boolean),advertiseZstdAcceptEncoding:Vn.transitional(Vn.boolean),validateStatusUndefinedResolves:Vn.transitional(Vn.boolean)},!1),a!=null&&(O.isFunction(a)?o.paramsSerializer={serialize:a}:uc.assertOptions(a,{encode:Vn.function,serialize:Vn.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),uc.assertOptions(o,{baseUrl:Vn.spelling("baseURL"),withXsrfToken:Vn.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let f=u&&O.merge(u.common,u[o.method]);u&&O.forEach(["delete","get","head","post","put","patch","query","common"],N=>{delete u[N]}),o.headers=Xn.concat(f,u);const p=[];let _=!0;this.interceptors.request.forEach(function(M){if(typeof M.runWhen=="function"&&M.runWhen(o)===!1)return;_=_&&M.synchronous;const I=o.transitional||of;I&&I.legacyInterceptorReqResOrdering?p.unshift(M.fulfilled,M.rejected):p.push(M.fulfilled,M.rejected)});const w=[];this.interceptors.response.forEach(function(M){w.push(M.fulfilled,M.rejected)});let y,x=0,b;if(!_){const N=[Cd.bind(this),void 0];for(N.unshift(...p),N.push(...w),b=N.length,y=Promise.resolve(o);x<b;)y=y.then(N[x++],N[x++]);return y}b=p.length;let P=o;for(;x<b;){const N=p[x++],M=p[x++];try{P=N?N(P):P}catch(I){if(!M){y=Promise.reject(I);break}try{const R=M.call(this,I);O.isThenable(R)&&(y=Promise.resolve(R).then(()=>Cd.call(this,P)))}catch(R){y=Promise.reject(R)}break}}if(!y)try{y=Cd.call(this,P)}catch(N){y=Promise.reject(N)}for(x=0,b=w.length;x<b;)y=y.then(w[x++],w[x++]);return y}getUri(n){n=zs(this.defaults,n);const o=bm(n.baseURL,n.url,n.allowAbsoluteUrls,n);return gm(o,n.params,n.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(n){Os.prototype[n]=function(o,l){return this.request(zs(l||{},{method:n,url:o,data:l&&O.hasOwnProp(l,"data")?l.data:void 0}))}});O.forEach(["post","put","patch","query"],function(n){function o(l){return function(u,f,p){return this.request(zs(p||{},{method:n,headers:l?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}Os.prototype[n]=o(),n!=="query"&&(Os.prototype[n+"Form"]=o(!0))});let _v=class Em{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(u){o=u});const l=this;this.promise.then(a=>{if(!l._listeners)return;let u=l._listeners.length;for(;u-- >0;)l._listeners[u](a);l._listeners=null}),this.promise.then=a=>{let u;const f=new Promise(p=>{l.subscribe(p),u=p}).then(a);return f.cancel=function(){l.unsubscribe(u)},f},n(function(u,f,p){l.reason||(l.reason=new zl(u,f,p),o(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=l=>{n.abort(l)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new Em(function(a){n=a}),cancel:n}}};function mv(t){return function(o){return t.apply(null,o)}}function gv(t){return O.isObject(t)&&t.isAxiosError===!0}const Wd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Wd).forEach(([t,n])=>{Wd[n]=t});function Rm(t){const n=new Os(t),o=rm(Os.prototype.request,n);return O.extend(o,Os.prototype,n,{allOwnKeys:!0}),O.extend(o,n,null,{allOwnKeys:!0}),o.create=function(a){return Rm(zs(t,a))},o}const gn=Rm(Dl);gn.Axios=Os;gn.CanceledError=zl;gn.CancelToken=_v;gn.isCancel=vm;gn.VERSION=lf;gn.toFormData=Tc;gn.AxiosError=be;gn.Cancel=gn.CanceledError;gn.all=function(n){return Promise.all(n)};gn.spread=mv;gn.isAxiosError=gv;gn.mergeConfig=zs;gn.AxiosHeaders=Xn;gn.formToJSON=t=>xm(O.isHTMLForm(t)?new FormData(t):t);gn.getAdapter=jm.getAdapter;gn.HttpStatusCode=Wd;gn.default=gn;const{Axios:Aw,AxiosError:$w,CanceledError:Bw,isCancel:Dw,CancelToken:zw,VERSION:Fw,all:Ww,Cancel:Uw,isAxiosError:Hw,spread:Yw,toFormData:Vw,AxiosHeaders:Xw,HttpStatusCode:qw,formToJSON:Qw,getAdapter:Kw,mergeConfig:Gw,create:Jw}=gn,yv="/api",ln=gn.create({baseURL:yv,withCredentials:!0});let bc=localStorage.getItem("accessToken");function So(t){bc=t,t?localStorage.setItem("accessToken",t):localStorage.removeItem("accessToken")}function g_(){return bc}ln.interceptors.request.use(t=>(bc&&(t.headers.Authorization=`Bearer ${bc}`),t));ln.interceptors.response.use(t=>t,async t=>{var o,l,a,u,f,p;const n=t.config;if(((o=t.response)==null?void 0:o.status)===401&&!n._retry&&!((l=n.url)!=null&&l.includes("/auth/login"))&&!((a=n.url)!=null&&a.includes("/auth/register"))&&!((u=n.url)!=null&&u.includes("/auth/refresh"))){n._retry=!0;try{const _=await gn.post("/api/auth/refresh",{},{withCredentials:!0});if((p=(f=_.data)==null?void 0:f.data)!=null&&p.accessToken)return So(_.data.data.accessToken),n.headers.Authorization=`Bearer ${_.data.data.accessToken}`,ln(n)}catch{So(null)}}return Promise.reject(t)});const bi={async register(t){return(await ln.post("/auth/register",t)).data.data},async login(t){return(await ln.post("/auth/login",t)).data.data},async refresh(){return(await ln.post("/auth/refresh")).data.data},async logout(){await ln.post("/auth/logout"),So(null)},async verifyEmail(t){return(await ln.get(`/auth/verify-email?token=${encodeURIComponent(t)}`)).data.data.message},async resendVerification(t){return(await ln.post("/auth/resend-verification",{email:t})).data.data.message}},As={async getMe(){return(await ln.get("/users/me")).data.data},async updateProfile(t){return(await ln.patch("/users/me",t)).data.data},async changePassword(t){return(await ln.patch("/users/me/password",t)).data.data.message},async searchUsers(t){return(await ln.get(`/users${t?`?query=${encodeURIComponent(t)}`:""}`)).data.data}},jd={async list(){return(await ln.get("/conversations")).data.data},async createDirect(t){return(await ln.post("/conversations/direct",{recipientId:t})).data.data},async createGroup(t,n){return(await ln.post("/conversations/group",{name:t,memberIds:n})).data.data},async get(t){return(await ln.get(`/conversations/${t}`)).data.data},async addMember(t,n){await ln.post(`/conversations/${t}/members`,{userId:n})},async removeMember(t,n){await ln.delete(`/conversations/${t}/members/${n}`)}},ts={async getMessages(t,n,o=50){var u,f;const l=new URLSearchParams;n&&l.append("cursor",n),o&&l.append("limit",String(o));const a=await ln.get(`/conversations/${t}/messages?${l.toString()}`);return{items:a.data.data||[],nextCursor:((u=a.data.pagination)==null?void 0:u.nextCursor)||null,hasMore:((f=a.data.pagination)==null?void 0:f.hasMore)||!1}},async sendMessage(t,n){return(await ln.post(`/conversations/${t}/messages`,{content:n})).data.data},async deleteMessage(t,n){await ln.delete(`/conversations/${t}/messages/${n}`)},async markRead(t,n){await ln.post(`/conversations/${t}/messages/read`,{messageIds:n})},async uploadAttachment(t,n){const o=new FormData;return o.append("file",n),(await ln.post(`/messages/${t}/attachments`,o,{headers:{"Content-Type":"multipart/form-data"}})).data.data},getAttachmentUrl(t){return`/api/attachments/${t}`}},oo=Object.create(null);oo.open="0";oo.close="1";oo.ping="2";oo.pong="3";oo.message="4";oo.upgrade="5";oo.noop="6";const dc=Object.create(null);Object.keys(oo).forEach(t=>{dc[oo[t]]=t});const Ud={type:"error",data:"parser error"},Tm=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Nm=typeof ArrayBuffer=="function",Mm=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,cf=({type:t,data:n},o,l)=>Tm&&n instanceof Blob?o?l(n):y_(n,l):Nm&&(n instanceof ArrayBuffer||Mm(n))?o?l(n):y_(new Blob([n]),l):l(oo[t]+(n||"")),y_=(t,n)=>{const o=new FileReader;return o.onload=function(){const l=o.result.split(",")[1];n("b"+(l||""))},o.readAsDataURL(t)};function x_(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Ed;function xv(t,n){if(Tm&&t.data instanceof Blob)return t.data.arrayBuffer().then(x_).then(n);if(Nm&&(t.data instanceof ArrayBuffer||Mm(t.data)))return n(x_(t.data));cf(t,!1,o=>{Ed||(Ed=new TextEncoder),n(Ed.encode(o))})}const v_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",El=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<v_.length;t++)El[v_.charCodeAt(t)]=t;const vv=t=>{let n=t.length*.75,o=t.length,l,a=0,u,f,p,_;t[t.length-1]==="="&&(n--,t[t.length-2]==="="&&n--);const w=new ArrayBuffer(n),y=new Uint8Array(w);for(l=0;l<o;l+=4)u=El[t.charCodeAt(l)],f=El[t.charCodeAt(l+1)],p=El[t.charCodeAt(l+2)],_=El[t.charCodeAt(l+3)],y[a++]=u<<2|f>>4,y[a++]=(f&15)<<4|p>>2,y[a++]=(p&3)<<6|_&63;return w},wv=typeof ArrayBuffer=="function",uf=(t,n)=>{if(typeof t!="string")return{type:"message",data:Im(t,n)};const o=t.charAt(0);return o==="b"?{type:"message",data:bv(t.substring(1),n)}:dc[o]?t.length>1?{type:dc[o],data:t.substring(1)}:{type:dc[o]}:Ud},bv=(t,n)=>{if(wv){const o=vv(t);return Im(o,n)}else return{base64:!0,data:t}},Im=(t,n)=>{switch(n){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Lm="",kv=(t,n)=>{const o=t.length,l=new Array(o);let a=0;t.forEach((u,f)=>{cf(u,!1,p=>{l[f]=p,++a===o&&n(l.join(Lm))})})},Sv=(t,n)=>{const o=t.split(Lm),l=[];for(let a=0;a<o.length;a++){const u=uf(o[a],n);if(l.push(u),u.type==="error")break}return l};function Cv(){return new TransformStream({transform(t,n){xv(t,o=>{const l=o.length;let a;if(l<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,l);else if(l<65536){a=new Uint8Array(3);const u=new DataView(a.buffer);u.setUint8(0,126),u.setUint16(1,l)}else{a=new Uint8Array(9);const u=new DataView(a.buffer);u.setUint8(0,127),u.setBigUint64(1,BigInt(l))}t.data&&typeof t.data!="string"&&(a[0]|=128),n.enqueue(a),n.enqueue(o)})}})}let Rd;function ic(t){return t.reduce((n,o)=>n+o.length,0)}function lc(t,n){if(t[0].length===n)return t.shift();const o=new Uint8Array(n);let l=0;for(let a=0;a<n;a++)o[a]=t[0][l++],l===t[0].length&&(t.shift(),l=0);return t.length&&l<t[0].length&&(t[0]=t[0].slice(l)),o}function jv(t,n){Rd||(Rd=new TextDecoder);const o=[];let l=0,a=-1,u=!1;return new TransformStream({transform(f,p){for(o.push(f);;){if(l===0){if(ic(o)<1)break;const _=lc(o,1);u=(_[0]&128)===128,a=_[0]&127,a<126?l=3:a===126?l=1:l=2}else if(l===1){if(ic(o)<2)break;const _=lc(o,2);a=new DataView(_.buffer,_.byteOffset,_.length).getUint16(0),l=3}else if(l===2){if(ic(o)<8)break;const _=lc(o,8),w=new DataView(_.buffer,_.byteOffset,_.length),y=w.getUint32(0);if(y>Math.pow(2,21)-1){p.enqueue(Ud);break}a=y*Math.pow(2,32)+w.getUint32(4),l=3}else{if(ic(o)<a)break;const _=lc(o,a);p.enqueue(uf(u?_:Rd.decode(_),n)),l=0}if(a===0||a>t){p.enqueue(Ud);break}}}})}const Pm=4;function Sn(t){if(t)return Ev(t)}function Ev(t){for(var n in Sn.prototype)t[n]=Sn.prototype[n];return t}Sn.prototype.on=Sn.prototype.addEventListener=function(t,n){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(n),this};Sn.prototype.once=function(t,n){function o(){this.off(t,o),n.apply(this,arguments)}return o.fn=n,this.on(t,o),this};Sn.prototype.off=Sn.prototype.removeListener=Sn.prototype.removeAllListeners=Sn.prototype.removeEventListener=function(t,n){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var o=this._callbacks["$"+t];if(!o)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var l,a=0;a<o.length;a++)if(l=o[a],l===n||l.fn===n){o.splice(a,1);break}return o.length===0&&delete this._callbacks["$"+t],this};Sn.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var n=new Array(arguments.length-1),o=this._callbacks["$"+t],l=1;l<arguments.length;l++)n[l-1]=arguments[l];if(o){o=o.slice(0);for(var l=0,a=o.length;l<a;++l)o[l].apply(this,n)}return this};Sn.prototype.emitReserved=Sn.prototype.emit;Sn.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};Sn.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Mc=typeof Promise=="function"&&typeof Promise.resolve=="function"?n=>Promise.resolve().then(n):(n,o)=>o(n,0),Nr=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Rv="arraybuffer";function Om(t,...n){return n.reduce((o,l)=>(t.hasOwnProperty(l)&&(o[l]=t[l]),o),{})}const Tv=Nr.setTimeout,Nv=Nr.clearTimeout;function Ic(t,n){n.useNativeTimers?(t.setTimeoutFn=Tv.bind(Nr),t.clearTimeoutFn=Nv.bind(Nr)):(t.setTimeoutFn=Nr.setTimeout.bind(Nr),t.clearTimeoutFn=Nr.clearTimeout.bind(Nr))}const Mv=1.33;function Iv(t){return typeof t=="string"?Lv(t):Math.ceil((t.byteLength||t.size)*Mv)}function Lv(t){let n=0,o=0;for(let l=0,a=t.length;l<a;l++)n=t.charCodeAt(l),n<128?o+=1:n<2048?o+=2:n<55296||n>=57344?o+=3:(l++,o+=4);return o}function Am(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Pv(t){let n="";for(let o in t)t.hasOwnProperty(o)&&(n.length&&(n+="&"),n+=encodeURIComponent(o)+"="+encodeURIComponent(t[o]));return n}function Ov(t){let n={},o=t.split("&");for(let l=0,a=o.length;l<a;l++){let u=o[l].split("=");n[decodeURIComponent(u[0])]=decodeURIComponent(u[1])}return n}class Av extends Error{constructor(n,o,l){super(n),this.description=o,this.context=l,this.type="TransportError"}}class df extends Sn{constructor(n){super(),this.writable=!1,Ic(this,n),this.opts=n,this.query=n.query,this.socket=n.socket,this.supportsBinary=!n.forceBase64}onError(n,o,l){return super.emitReserved("error",new Av(n,o,l)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(n){this.readyState==="open"&&this.write(n)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(n){const o=uf(n,this.socket.binaryType);this.onPacket(o)}onPacket(n){super.emitReserved("packet",n)}onClose(n){this.readyState="closed",super.emitReserved("close",n)}pause(n){}createUri(n,o={}){return n+"://"+this._hostname()+this._port()+this.opts.path+this._query(o)}_hostname(){const n=this.opts.hostname;return n.indexOf(":")===-1?n:"["+n+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(n){const o=Pv(n);return o.length?"?"+o:""}}class $v extends df{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(n){this.readyState="pausing";const o=()=>{this.readyState="paused",n()};if(this._polling||!this.writable){let l=0;this._polling&&(l++,this.once("pollComplete",function(){--l||o()})),this.writable||(l++,this.once("drain",function(){--l||o()}))}else o()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(n){const o=l=>{if(this.readyState==="opening"&&l.type==="open"&&this.onOpen(),l.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(l)};Sv(n,this.socket.binaryType).forEach(o),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const n=()=>{this.write([{type:"close"}])};this.readyState==="open"?n():this.once("open",n)}write(n){this.writable=!1,kv(n,o=>{this.doWrite(o,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const n=this.opts.secure?"https":"http",o=this.query||{};return this.opts.timestampRequests!==!1&&(o[this.opts.timestampParam]=Am()),!this.supportsBinary&&!o.sid&&(o.b64=1),this.createUri(n,o)}}let $m=!1;try{$m=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Bv=$m;function Dv(){}class zv extends $v{constructor(n){if(super(n),typeof location<"u"){const o=location.protocol==="https:";let l=location.port;l||(l=o?"443":"80"),this.xd=typeof location<"u"&&n.hostname!==location.hostname||l!==n.port}}doWrite(n,o){const l=this.request({method:"POST",data:n});l.on("success",o),l.on("error",(a,u)=>{this.onError("xhr post error",a,u)})}doPoll(){const n=this.request();n.on("data",this.onData.bind(this)),n.on("error",(o,l)=>{this.onError("xhr poll error",o,l)}),this.pollXhr=n}}class ro extends Sn{constructor(n,o,l){super(),this.createRequest=n,Ic(this,l),this._opts=l,this._method=l.method||"GET",this._uri=o,this._data=l.data!==void 0?l.data:null,this._create()}_create(){var n;const o=Om(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");o.xdomain=!!this._opts.xd;const l=this._xhr=this.createRequest(o);try{l.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){l.setDisableHeaderCheck&&l.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&l.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method==="POST")try{l.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{l.setRequestHeader("Accept","*/*")}catch{}(n=this._opts.cookieJar)===null||n===void 0||n.addCookies(l),"withCredentials"in l&&(l.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(l.timeout=this._opts.requestTimeout),l.onreadystatechange=()=>{var a;l.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(l.getResponseHeader("set-cookie"))),l.readyState===4&&(l.status===200||l.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof l.status=="number"?l.status:0)},0))},l.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<"u"&&(this._index=ro.requestsCount++,ro.requests[this._index]=this)}_onError(n){this.emitReserved("error",n,this._xhr),this._cleanup(!0)}_cleanup(n){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Dv,n)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ro.requests[this._index],this._xhr=null}}_onLoad(){const n=this._xhr.responseText;n!==null&&(this.emitReserved("data",n),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ro.requestsCount=0;ro.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",w_);else if(typeof addEventListener=="function"){const t="onpagehide"in Nr?"pagehide":"unload";addEventListener(t,w_,!1)}}function w_(){for(let t in ro.requests)ro.requests.hasOwnProperty(t)&&ro.requests[t].abort()}const Fv=(function(){const t=Bm({xdomain:!1});return t&&t.responseType!==null})();class Wv extends zv{constructor(n){super(n);const o=n&&n.forceBase64;this.supportsBinary=Fv&&!o}request(n={}){return Object.assign(n,{xd:this.xd},this.opts),new ro(Bm,this.uri(),n)}}function Bm(t){const n=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!n||Bv))return new XMLHttpRequest}catch{}if(!n)try{return new Nr[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Dm=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Uv extends df{get name(){return"websocket"}doOpen(){const n=this.uri(),o=this.opts.protocols,l=Dm?{}:Om(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(l.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(n,o,l)}catch(a){return this.emitReserved("error",a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=n=>this.onClose({description:"websocket connection closed",context:n}),this.ws.onmessage=n=>this.onData(n.data),this.ws.onerror=n=>this.onError("websocket error",n)}write(n){this.writable=!1;for(let o=0;o<n.length;o++){const l=n[o],a=o===n.length-1;cf(l,this.supportsBinary,u=>{try{this.doWrite(l,u)}catch{}a&&Mc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const n=this.opts.secure?"wss":"ws",o=this.query||{};return this.opts.timestampRequests&&(o[this.opts.timestampParam]=Am()),this.supportsBinary||(o.b64=1),this.createUri(n,o)}}const Td=Nr.WebSocket||Nr.MozWebSocket;class Hv extends Uv{createSocket(n,o,l){return Dm?new Td(n,o,l):o?new Td(n,o):new Td(n)}doWrite(n,o){this.ws.send(o)}}class Yv extends df{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(n){return this.emitReserved("error",n)}this._transport.closed.then(()=>{this.onClose()}).catch(n=>{this.onError("webtransport error",n)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(n=>{const o=jv(Number.MAX_SAFE_INTEGER,this.socket.binaryType),l=n.readable.pipeThrough(o).getReader(),a=Cv();a.readable.pipeTo(n.writable),this._writer=a.writable.getWriter();const u=()=>{l.read().then(({done:p,value:_})=>{p||(this.onPacket(_),u())}).catch(p=>{})};u();const f={type:"open"};this.query.sid&&(f.data=`{"sid":"${this.query.sid}"}`),this._writer.write(f).then(()=>this.onOpen())})})}write(n){this.writable=!1;for(let o=0;o<n.length;o++){const l=n[o],a=o===n.length-1;this._writer.write(l).then(()=>{a&&Mc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var n;(n=this._transport)===null||n===void 0||n.close()}}const Vv={websocket:Hv,webtransport:Yv,polling:Wv},Xv=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,qv=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Hd(t){if(t.length>8e3)throw"URI too long";const n=t,o=t.indexOf("["),l=t.indexOf("]");o!=-1&&l!=-1&&(t=t.substring(0,o)+t.substring(o,l).replace(/:/g,";")+t.substring(l,t.length));let a=Xv.exec(t||""),u={},f=14;for(;f--;)u[qv[f]]=a[f]||"";return o!=-1&&l!=-1&&(u.source=n,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=Qv(u,u.path),u.queryKey=Kv(u,u.query),u}function Qv(t,n){const o=/\/{2,9}/g,l=n.replace(o,"/").split("/");return(n.slice(0,1)=="/"||n.length===0)&&l.splice(0,1),n.slice(-1)=="/"&&l.splice(l.length-1,1),l}function Kv(t,n){const o={};return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(l,a,u){a&&(o[a]=u)}),o}const Yd=typeof addEventListener=="function"&&typeof removeEventListener=="function",fc=[];Yd&&addEventListener("offline",()=>{fc.forEach(t=>t())},!1);class rs extends Sn{constructor(n,o){if(super(),this.binaryType=Rv,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,n&&typeof n=="object"&&(o=n,n=null),n){const l=Hd(n);o.hostname=l.host,o.secure=l.protocol==="https"||l.protocol==="wss",o.port=l.port,l.query&&(o.query=l.query)}else o.host&&(o.hostname=Hd(o.host).host);Ic(this,o),this.secure=o.secure!=null?o.secure:typeof location<"u"&&location.protocol==="https:",o.hostname&&!o.port&&(o.port=this.secure?"443":"80"),this.hostname=o.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=o.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},o.transports.forEach(l=>{const a=l.prototype.name;this.transports.push(a),this._transportsByName[a]=l}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},o),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ov(this.opts.query)),Yd&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},fc.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(n){const o=Object.assign({},this.opts.query);o.EIO=Pm,o.transport=n,this.id&&(o.sid=this.id);const l=Object.assign({},this.opts,{query:o,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[n]);return new this._transportsByName[n](l)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const n=this.opts.rememberUpgrade&&rs.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const o=this.createTransport(n);o.open(),this.setTransport(o)}setTransport(n){this.transport&&this.transport.removeAllListeners(),this.transport=n,n.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",o=>this._onClose("transport close",o))}onOpen(){this.readyState="open",rs.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",n),this.emitReserved("heartbeat"),n.type){case"open":this.onHandshake(JSON.parse(n.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const o=new Error("server error");o.code=n.data,this._onError(o);break;case"message":this.emitReserved("data",n.data),this.emitReserved("message",n.data);break}}onHandshake(n){this.emitReserved("handshake",n),this.id=n.sid,this.transport.query.sid=n.sid,this._pingInterval=n.pingInterval,this._pingTimeout=n.pingTimeout,this._maxPayload=n.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const n=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+n,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},n),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const n=this._getWritablePackets();this.transport.send(n),this._prevBufferLen=n.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let o=1;for(let l=0;l<this.writeBuffer.length;l++){const a=this.writeBuffer[l].data;if(a&&(o+=Iv(a)),l>0&&o>this._maxPayload)return this.writeBuffer.slice(0,l);o+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const n=Date.now()>this._pingTimeoutTime;return n&&(this._pingTimeoutTime=0,Mc(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),n}write(n,o,l){return this._sendPacket("message",n,o,l),this}send(n,o,l){return this._sendPacket("message",n,o,l),this}_sendPacket(n,o,l,a){if(typeof o=="function"&&(a=o,o=void 0),typeof l=="function"&&(a=l,l=null),this.readyState==="closing"||this.readyState==="closed")return;l=l||{},l.compress=l.compress!==!1;const u={type:n,data:o,options:l};this.emitReserved("packetCreate",u),this.writeBuffer.push(u),a&&this.once("flush",a),this.flush()}close(){const n=()=>{this._onClose("forced close"),this.transport.close()},o=()=>{this.off("upgrade",o),this.off("upgradeError",o),n()},l=()=>{this.once("upgrade",o),this.once("upgradeError",o)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?l():n()}):this.upgrading?l():n()),this}_onError(n){if(rs.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",n),this._onClose("transport error",n)}_onClose(n,o){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Yd&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const l=fc.indexOf(this._offlineEventListener);l!==-1&&fc.splice(l,1)}this.readyState="closed",this.id=null,this.emitReserved("close",n,o),this.writeBuffer=[],this._prevBufferLen=0}}}rs.protocol=Pm;class Gv extends rs{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let n=0;n<this._upgrades.length;n++)this._probe(this._upgrades[n])}_probe(n){let o=this.createTransport(n),l=!1;rs.priorWebsocketSuccess=!1;const a=()=>{l||(o.send([{type:"ping",data:"probe"}]),o.once("packet",x=>{if(!l)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",o),!o)return;rs.priorWebsocketSuccess=o.name==="websocket",this.transport.pause(()=>{l||this.readyState!=="closed"&&(y(),this.setTransport(o),o.send([{type:"upgrade"}]),this.emitReserved("upgrade",o),o=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=o.name,this.emitReserved("upgradeError",b)}}))};function u(){l||(l=!0,y(),o.close(),o=null)}const f=x=>{const b=new Error("probe error: "+x);b.transport=o.name,u(),this.emitReserved("upgradeError",b)};function p(){f("transport closed")}function _(){f("socket closed")}function w(x){o&&x.name!==o.name&&u()}const y=()=>{o.removeListener("open",a),o.removeListener("error",f),o.removeListener("close",p),this.off("close",_),this.off("upgrading",w)};o.once("open",a),o.once("error",f),o.once("close",p),this.once("close",_),this.once("upgrading",w),this._upgrades.indexOf("webtransport")!==-1&&n!=="webtransport"?this.setTimeoutFn(()=>{l||o.open()},200):o.open()}onHandshake(n){this._upgrades=this._filterUpgrades(n.upgrades),super.onHandshake(n)}_filterUpgrades(n){const o=[];for(let l=0;l<n.length;l++)~this.transports.indexOf(n[l])&&o.push(n[l]);return o}}let Jv=class extends Gv{constructor(n,o={}){const l=typeof n=="object",a=l?{...n}:{...o};(!a.transports||a.transports&&typeof a.transports[0]=="string")&&(a.transports=(a.transports||["polling","websocket","webtransport"]).map(u=>Vv[u]).filter(u=>!!u)),super(l?a:n,a)}};function Zv(t,n="",o){let l=t;o=o||typeof location<"u"&&location,t==null&&(t=o.protocol+"//"+o.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=o.protocol+t:t=o.host+t),/^(https?|wss?):\/\//.test(t)||(typeof o<"u"?t=o.protocol+"//"+t:t="https://"+t),l=Hd(t)),l.port||(/^(http|ws)$/.test(l.protocol)?l.port="80":/^(http|ws)s$/.test(l.protocol)&&(l.port="443")),l.path=l.path||"/";const u=l.host.indexOf(":")!==-1?"["+l.host+"]":l.host;return l.id=l.protocol+"://"+u+":"+l.port+n,l.href=l.protocol+"://"+u+(o&&o.port===l.port?"":":"+l.port),l}const ew=typeof ArrayBuffer=="function",tw=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,zm=Object.prototype.toString,nw=typeof Blob=="function"||typeof Blob<"u"&&zm.call(Blob)==="[object BlobConstructor]",rw=typeof File=="function"||typeof File<"u"&&zm.call(File)==="[object FileConstructor]";function ff(t){return ew&&(t instanceof ArrayBuffer||tw(t))||nw&&t instanceof Blob||rw&&t instanceof File}function hc(t,n){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let o=0,l=t.length;o<l;o++)if(hc(t[o]))return!0;return!1}if(ff(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return hc(t.toJSON(),!0);for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)&&hc(t[o]))return!0;return!1}function ow(t){const n=[],o=t.data,l=t;return l.data=pc(o,n),l.attachments=n.length,{packet:l,buffers:n}}function pc(t,n,o){if(!t)return t;if(ff(t)){const l={_placeholder:!0,num:n.length};return n.push(t),l}else if(Array.isArray(t)){const l=new Array(t.length);for(let a=0;a<t.length;a++)l[a]=pc(t[a],n);return l}else if(typeof t=="object"&&!(t instanceof Date)){if(t.toJSON&&typeof t.toJSON=="function"&&!o)return pc(t.toJSON(),n,!0);const l={};for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(l[a]=pc(t[a],n));return l}return t}function sw(t,n){return t.data=Vd(t.data,n),delete t.attachments,t}function Vd(t,n){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<n.length)return n[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let o=0;o<t.length;o++)t[o]=Vd(t[o],n);else if(typeof t=="object")for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(t[o]=Vd(t[o],n));return t}const iw=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var It;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(It||(It={}));class lw{constructor(n){this.replacer=n}encode(n){return(n.type===It.EVENT||n.type===It.ACK)&&hc(n)?this.encodeAsBinary({type:n.type===It.EVENT?It.BINARY_EVENT:It.BINARY_ACK,nsp:n.nsp,data:n.data,id:n.id}):[this.encodeAsString(n)]}encodeAsString(n){let o=""+n.type;return(n.type===It.BINARY_EVENT||n.type===It.BINARY_ACK)&&(o+=n.attachments+"-"),n.nsp&&n.nsp!=="/"&&(o+=n.nsp+","),n.id!=null&&(o+=n.id),n.data!=null&&(o+=JSON.stringify(n.data,this.replacer)),o}encodeAsBinary(n){const o=ow(n),l=this.encodeAsString(o.packet),a=o.buffers;return a.unshift(l),a}}class hf extends Sn{constructor(n){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof n=="function"?{reviver:n}:n)}add(n){let o;if(typeof n=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");o=this.decodeString(n);const l=o.type===It.BINARY_EVENT;l||o.type===It.BINARY_ACK?(o.type=l?It.EVENT:It.ACK,this.reconstructor=new aw(o)):super.emitReserved("decoded",o)}else if(ff(n)||n.base64)if(this.reconstructor)o=this.reconstructor.takeBinaryData(n),o&&(this.reconstructor=null,super.emitReserved("decoded",o));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+n)}decodeString(n){let o=0;const l={type:Number(n.charAt(0))};if(It[l.type]===void 0)throw new Error("unknown packet type "+l.type);if(l.type===It.BINARY_EVENT||l.type===It.BINARY_ACK){const u=o+1;for(;n.charAt(++o)!=="-"&&o!=n.length;);const f=n.substring(u,o);if(f!=Number(f)||n.charAt(o)!=="-")throw new Error("Illegal attachments");const p=Number(f);if(!cw(p)||p<1)throw new Error("Illegal attachments");if(p>this.opts.maxAttachments)throw new Error("too many attachments");l.attachments=p}if(n.charAt(o+1)==="/"){const u=o+1;for(;++o&&!(n.charAt(o)===","||o===n.length););l.nsp=n.substring(u,o)}else l.nsp="/";const a=n.charAt(o+1);if(a!==""&&Number(a)==a){const u=o+1;for(;++o;){const f=n.charAt(o);if(f==null||Number(f)!=f){--o;break}if(o===n.length)break}l.id=Number(n.substring(u,o+1))}if(n.charAt(++o)){const u=this.tryParse(n.substr(o));if(hf.isPayloadValid(l.type,u))l.data=u;else throw new Error("invalid payload")}return l}tryParse(n){try{return JSON.parse(n,this.opts.reviver)}catch{return!1}}static isPayloadValid(n,o){switch(n){case It.CONNECT:return b_(o);case It.DISCONNECT:return o===void 0;case It.CONNECT_ERROR:return typeof o=="string"||b_(o);case It.EVENT:case It.BINARY_EVENT:return Array.isArray(o)&&(typeof o[0]=="number"||typeof o[0]=="string"&&iw.indexOf(o[0])===-1);case It.ACK:case It.BINARY_ACK:return Array.isArray(o)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class aw{constructor(n){this.packet=n,this.buffers=[],this.reconPack=n}takeBinaryData(n){if(this.buffers.push(n),this.buffers.length===this.reconPack.attachments){const o=sw(this.reconPack,this.buffers);return this.finishedReconstruction(),o}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const cw=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function b_(t){return Object.prototype.toString.call(t)==="[object Object]"}const uw=Object.freeze(Object.defineProperty({__proto__:null,Decoder:hf,Encoder:lw,get PacketType(){return It}},Symbol.toStringTag,{value:"Module"}));function Fr(t,n,o){return t.on(n,o),function(){t.off(n,o)}}const dw=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Fm extends Sn{constructor(n,o,l){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=n,this.nsp=o,l&&l.auth&&(this.auth=l.auth),this._opts=Object.assign({},l),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const n=this.io;this.subs=[Fr(n,"open",this.onopen.bind(this)),Fr(n,"packet",this.onpacket.bind(this)),Fr(n,"error",this.onerror.bind(this)),Fr(n,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...n){return n.unshift("message"),this.emit.apply(this,n),this}emit(n,...o){var l,a,u;if(dw.hasOwnProperty(n))throw new Error('"'+n.toString()+'" is a reserved event name');if(o.unshift(n),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(o),this;const f={type:It.EVENT,data:o};if(f.options={},f.options.compress=this.flags.compress!==!1,typeof o[o.length-1]=="function"){const y=this.ids++,x=o.pop();this._registerAckCallback(y,x),f.id=y}const p=(a=(l=this.io.engine)===null||l===void 0?void 0:l.transport)===null||a===void 0?void 0:a.writable,_=this.connected&&!(!((u=this.io.engine)===null||u===void 0)&&u._hasPingExpired());return this.flags.volatile&&!p||(_?(this.notifyOutgoingListeners(f),this.packet(f)):this.sendBuffer.push(f)),this.flags={},this}_registerAckCallback(n,o){var l;const a=(l=this.flags.timeout)!==null&&l!==void 0?l:this._opts.ackTimeout;if(a===void 0){this.acks[n]=o;return}const u=this.io.setTimeoutFn(()=>{delete this.acks[n];for(let p=0;p<this.sendBuffer.length;p++)this.sendBuffer[p].id===n&&this.sendBuffer.splice(p,1);o.call(this,new Error("operation has timed out"))},a),f=(...p)=>{this.io.clearTimeoutFn(u),o.apply(this,p)};f.withError=!0,this.acks[n]=f}emitWithAck(n,...o){return new Promise((l,a)=>{const u=(f,p)=>f?a(f):l(p);u.withError=!0,o.push(u),this.emit(n,...o)})}_addToQueue(n){let o;typeof n[n.length-1]=="function"&&(o=n.pop());const l={id:this._queueSeq++,tryCount:0,pending:!1,args:n,flags:Object.assign({fromQueue:!0},this.flags)};n.push((a,...u)=>(this._queue[0],a!==null?l.tryCount>this._opts.retries&&(this._queue.shift(),o&&o(a)):(this._queue.shift(),o&&o(null,...u)),l.pending=!1,this._drainQueue())),this._queue.push(l),this._drainQueue()}_drainQueue(n=!1){if(!this.connected||this._queue.length===0)return;const o=this._queue[0];o.pending&&!n||(o.pending=!0,o.tryCount++,this.flags=o.flags,this.emit.apply(this,o.args))}packet(n){n.nsp=this.nsp,this.io._packet(n)}onopen(){typeof this.auth=="function"?this.auth(n=>{this._sendConnectPacket(n)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(n){this.packet({type:It.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},n):n})}onerror(n){this.connected||this.emitReserved("connect_error",n)}onclose(n,o){this.connected=!1,delete this.id,this.emitReserved("disconnect",n,o),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(n=>{if(!this.sendBuffer.some(l=>String(l.id)===n)){const l=this.acks[n];delete this.acks[n],l.withError&&l.call(this,new Error("socket has been disconnected"))}})}onpacket(n){if(n.nsp===this.nsp)switch(n.type){case It.CONNECT:n.data&&n.data.sid?this.onconnect(n.data.sid,n.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case It.EVENT:case It.BINARY_EVENT:this.onevent(n);break;case It.ACK:case It.BINARY_ACK:this.onack(n);break;case It.DISCONNECT:this.ondisconnect();break;case It.CONNECT_ERROR:this.destroy();const l=new Error(n.data.message);l.data=n.data.data,this.emitReserved("connect_error",l);break}}onevent(n){const o=n.data||[];n.id!=null&&o.push(this.ack(n.id)),this.connected?this.emitEvent(o):this.receiveBuffer.push(Object.freeze(o))}emitEvent(n){if(this._anyListeners&&this._anyListeners.length){const o=this._anyListeners.slice();for(const l of o)l.apply(this,n)}super.emit.apply(this,n),this._pid&&n.length&&typeof n[n.length-1]=="string"&&(this._lastOffset=n[n.length-1])}ack(n){const o=this;let l=!1;return function(...a){l||(l=!0,o.packet({type:It.ACK,id:n,data:a}))}}onack(n){const o=this.acks[n.id];typeof o=="function"&&(delete this.acks[n.id],o.withError&&n.data.unshift(null),o.apply(this,n.data))}onconnect(n,o){this.id=n,this.recovered=o&&this._pid===o,this._pid=o,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(n=>this.emitEvent(n)),this.receiveBuffer=[],this.sendBuffer.forEach(n=>{this.notifyOutgoingListeners(n),this.packet(n)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(n=>n()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:It.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(n){return this.flags.compress=n,this}get volatile(){return this.flags.volatile=!0,this}timeout(n){return this.flags.timeout=n,this}onAny(n){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(n),this}prependAny(n){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(n),this}offAny(n){if(!this._anyListeners)return this;if(n){const o=this._anyListeners;for(let l=0;l<o.length;l++)if(n===o[l])return o.splice(l,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(n){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(n),this}prependAnyOutgoing(n){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(n),this}offAnyOutgoing(n){if(!this._anyOutgoingListeners)return this;if(n){const o=this._anyOutgoingListeners;for(let l=0;l<o.length;l++)if(n===o[l])return o.splice(l,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(n){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const o=this._anyOutgoingListeners.slice();for(const l of o)l.apply(this,n.data)}}}function Ii(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Ii.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var n=Math.random(),o=Math.floor(n*this.jitter*t);t=(Math.floor(n*10)&1)==0?t-o:t+o}return Math.min(t,this.max)|0};Ii.prototype.reset=function(){this.attempts=0};Ii.prototype.setMin=function(t){this.ms=t};Ii.prototype.setMax=function(t){this.max=t};Ii.prototype.setJitter=function(t){this.jitter=t};class Xd extends Sn{constructor(n,o){var l;super(),this.nsps={},this.subs=[],n&&typeof n=="object"&&(o=n,n=void 0),o=o||{},o.path=o.path||"/socket.io",this.opts=o,Ic(this,o),this.reconnection(o.reconnection!==!1),this.reconnectionAttempts(o.reconnectionAttempts||1/0),this.reconnectionDelay(o.reconnectionDelay||1e3),this.reconnectionDelayMax(o.reconnectionDelayMax||5e3),this.randomizationFactor((l=o.randomizationFactor)!==null&&l!==void 0?l:.5),this.backoff=new Ii({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(o.timeout==null?2e4:o.timeout),this._readyState="closed",this.uri=n;const a=o.parser||uw;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=o.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(n){return arguments.length?(this._reconnection=!!n,n||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(n){return n===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=n,this)}reconnectionDelay(n){var o;return n===void 0?this._reconnectionDelay:(this._reconnectionDelay=n,(o=this.backoff)===null||o===void 0||o.setMin(n),this)}randomizationFactor(n){var o;return n===void 0?this._randomizationFactor:(this._randomizationFactor=n,(o=this.backoff)===null||o===void 0||o.setJitter(n),this)}reconnectionDelayMax(n){var o;return n===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=n,(o=this.backoff)===null||o===void 0||o.setMax(n),this)}timeout(n){return arguments.length?(this._timeout=n,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(n){if(~this._readyState.indexOf("open"))return this;this.engine=new Jv(this.uri,this.opts);const o=this.engine,l=this;this._readyState="opening",this.skipReconnect=!1;const a=Fr(o,"open",function(){l.onopen(),n&&n()}),u=p=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",p),n?n(p):this.maybeReconnectOnOpen()},f=Fr(o,"error",u);if(this._timeout!==!1){const p=this._timeout,_=this.setTimeoutFn(()=>{a(),u(new Error("timeout")),o.close()},p);this.opts.autoUnref&&_.unref(),this.subs.push(()=>{this.clearTimeoutFn(_)})}return this.subs.push(a),this.subs.push(f),this}connect(n){return this.open(n)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const n=this.engine;this.subs.push(Fr(n,"ping",this.onping.bind(this)),Fr(n,"data",this.ondata.bind(this)),Fr(n,"error",this.onerror.bind(this)),Fr(n,"close",this.onclose.bind(this)),Fr(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(n){try{this.decoder.add(n)}catch(o){this.onclose("parse error",o)}}ondecoded(n){Mc(()=>{this.emitReserved("packet",n)},this.setTimeoutFn)}onerror(n){this.emitReserved("error",n)}socket(n,o){let l=this.nsps[n];return l?this._autoConnect&&!l.active&&l.connect():(l=new Fm(this,n,o),this.nsps[n]=l),l}_destroy(n){const o=Object.keys(this.nsps);for(const l of o)if(this.nsps[l].active)return;this._close()}_packet(n){const o=this.encoder.encode(n);for(let l=0;l<o.length;l++)this.engine.write(o[l],n.options)}cleanup(){this.subs.forEach(n=>n()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(n,o){var l;this.cleanup(),(l=this.engine)===null||l===void 0||l.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",n,o),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const n=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const o=this.backoff.duration();this._reconnecting=!0;const l=this.setTimeoutFn(()=>{n.skipReconnect||(this.emitReserved("reconnect_attempt",n.backoff.attempts),!n.skipReconnect&&n.open(a=>{a?(n._reconnecting=!1,n.reconnect(),this.emitReserved("reconnect_error",a)):n.onreconnect()}))},o);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}}onreconnect(){const n=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",n)}}const jl={};function _c(t,n){typeof t=="object"&&(n=t,t=void 0),n=n||{};const o=Zv(t,n.path||"/socket.io"),l=o.source,a=o.id,u=o.path,f=jl[a]&&u in jl[a].nsps,p=n.forceNew||n["force new connection"]||n.multiplex===!1||f;let _;return p?_=new Xd(l,n):(jl[a]||(jl[a]=new Xd(l,n)),_=jl[a]),o.query&&!n.query&&(n.query=o.queryKey),_.socket(o.path,n)}Object.assign(_c,{Manager:Xd,Socket:Fm,io:_c,connect:_c});class fw{constructor(){gl(this,"socket",null);gl(this,"currentToken",null)}connect(n){if(this.socket&&this.currentToken===n&&this.socket.connected)return this.socket;this.socket&&this.socket.disconnect(),this.currentToken=n;const o=void 0;return this.socket=_c(o,{auth:{token:n},transports:["websocket","polling"]}),this.socket.on("connect",()=>{var l;(l=this.socket)==null||l.emit("presence:online")}),this.socket}disconnect(){this.socket&&(this.socket.disconnect(),this.socket=null,this.currentToken=null)}getSocket(){return this.socket}joinConversation(n){var o;(o=this.socket)==null||o.emit("conversation:join",n)}leaveConversation(n){var o;(o=this.socket)==null||o.emit("conversation:leave",n)}sendMessage(n,o,l){var a;(a=this.socket)==null||a.emit("message:send",{conversationId:n,content:o,tempId:l})}markRead(n,o){var l;(l=this.socket)==null||l.emit("message:read",{conversationId:n,messageIds:o})}startTyping(n){var o;(o=this.socket)==null||o.emit("typing:start",{conversationId:n})}stopTyping(n){var o;(o=this.socket)==null||o.emit("typing:stop",{conversationId:n})}onNewMessage(n){var o;return(o=this.socket)==null||o.on("message:new",n),()=>{var l;(l=this.socket)==null||l.off("message:new",n)}}onReadReceipt(n){var o;return(o=this.socket)==null||o.on("message:read_receipt",n),()=>{var l;(l=this.socket)==null||l.off("message:read_receipt",n)}}onPresenceStatus(n){var o;return(o=this.socket)==null||o.on("presence:status",n),()=>{var l;(l=this.socket)==null||l.off("presence:status",n)}}onTypingStart(n){var o;return(o=this.socket)==null||o.on("typing:start",n),()=>{var l;(l=this.socket)==null||l.off("typing:start",n)}}onTypingStop(n){var o;return(o=this.socket)==null||o.on("typing:stop",n),()=>{var l;(l=this.socket)==null||l.off("typing:stop",n)}}}const On=new fw,Wm=m.createContext(void 0),hw=({children:t})=>{const[n,o]=m.useState(null),[l,a]=m.useState(g_()),[u,f]=m.useState(!0),p=m.useCallback(async()=>{try{f(!0);const M=await bi.refresh();if(M.accessToken&&M.user){a(M.accessToken),So(M.accessToken),o(M.user),On.connect(M.accessToken);return}}catch{const M=g_();if(M)try{const I=await As.getMe();o(I),On.connect(M)}catch{So(null),a(null),o(null)}}finally{f(!1)}},[]);m.useEffect(()=>{p()},[p]);const _=async(M,I)=>{const R=await bi.login({email:M,password:I});a(R.accessToken),So(R.accessToken),o(R.user),On.connect(R.accessToken)},w=async(M,I,R)=>{const Y=await bi.register({email:M,password:I,name:R});a(Y.accessToken),So(Y.accessToken),o(Y.user),On.connect(Y.accessToken)},y=async M=>{a(M),So(M);const I=await As.getMe();o(I),On.connect(M)},x=async()=>{try{await bi.logout()}catch{}So(null),a(null),o(null),On.disconnect()},b=async M=>await bi.verifyEmail(M),P=async M=>await bi.resendVerification(M),N=async()=>{if(l){const M=await As.getMe();o(M)}};return s.jsx(Wm.Provider,{value:{user:n,token:l,isLoading:u,login:_,register:w,loginWithOAuthToken:y,logout:x,verifyEmail:b,resendVerification:P,refreshProfile:N},children:t})};function os(){const t=m.useContext(Wm);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}class pw{constructor(){gl(this,"ctx",null);gl(this,"isMuted",!1);const n=localStorage.getItem("retro_sound_muted");this.isMuted=n==="true"}getContext(){if(this.isMuted)return null;if(!this.ctx){const n=window.AudioContext||window.webkitAudioContext;n&&(this.ctx=new n)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("retro_sound_muted",String(this.isMuted)),this.isMuted}getIsMuted(){return this.isMuted}playClick(){const n=this.getContext();if(!n)return;const o=n.createOscillator(),l=n.createGain();o.type="square",o.frequency.setValueAtTime(440,n.currentTime),o.frequency.exponentialRampToValueAtTime(880,n.currentTime+.05),l.gain.setValueAtTime(.1,n.currentTime),l.gain.exponentialRampToValueAtTime(.01,n.currentTime+.05),o.connect(l),l.connect(n.destination),o.start(),o.stop(n.currentTime+.05)}playSend(){const n=this.getContext();if(!n)return;[523.25,659.25,783.99].forEach((l,a)=>{const u=n.createOscillator(),f=n.createGain();u.type="triangle",u.frequency.setValueAtTime(l,n.currentTime+a*.04),f.gain.setValueAtTime(.15,n.currentTime+a*.04),f.gain.exponentialRampToValueAtTime(.01,n.currentTime+a*.04+.08),u.connect(f),f.connect(n.destination),u.start(n.currentTime+a*.04),u.stop(n.currentTime+a*.04+.08)})}playReceive(){const n=this.getContext();if(!n)return;[880,1174.66].forEach((l,a)=>{const u=n.createOscillator(),f=n.createGain();u.type="sine",u.frequency.setValueAtTime(l,n.currentTime+a*.06),f.gain.setValueAtTime(.2,n.currentTime+a*.06),f.gain.exponentialRampToValueAtTime(.01,n.currentTime+a*.06+.15),u.connect(f),f.connect(n.destination),u.start(n.currentTime+a*.06),u.stop(n.currentTime+a*.06+.15)})}playError(){const n=this.getContext();if(!n)return;const o=n.createOscillator(),l=n.createGain();o.type="sawtooth",o.frequency.setValueAtTime(150,n.currentTime),o.frequency.setValueAtTime(110,n.currentTime+.1),l.gain.setValueAtTime(.2,n.currentTime),l.gain.exponentialRampToValueAtTime(.01,n.currentTime+.25),o.connect(l),l.connect(n.destination),o.start(),o.stop(n.currentTime+.25)}playSuccess(){const n=this.getContext();if(!n)return;[523.25,659.25,783.99,1046.5].forEach((l,a)=>{const u=n.createOscillator(),f=n.createGain();u.type="square",u.frequency.setValueAtTime(l,n.currentTime+a*.08),f.gain.setValueAtTime(.12,n.currentTime+a*.08),f.gain.exponentialRampToValueAtTime(.01,n.currentTime+a*.08+.12),u.connect(f),f.connect(n.destination),u.start(n.currentTime+a*.08),u.stop(n.currentTime+a*.08+.12)})}}const et=new pw,Um=m.createContext(void 0),_w=({children:t})=>{const{user:n,token:o}=os(),[l,a]=m.useState([]),[u,f]=m.useState(null),[p,_]=m.useState([]),[w,y]=m.useState(!1),[x,b]=m.useState(!1),[P,N]=m.useState(new Set),[M,I]=m.useState({}),R=m.useRef(null);R.current=u;const Y=m.useRef(new Map),Q=m.useRef(null),$=m.useCallback(async()=>{if(o)try{y(!0);const ce=await jd.list();a(ce),ce.forEach(me=>{me.messages&&me.messages.length>0&&!Y.current.has(me.id)&&Y.current.set(me.id,[...me.messages])})}catch(ce){console.error("Failed to load conversations:",ce)}finally{y(!1)}},[o]);m.useEffect(()=>{o?$():(a([]),f(null),_([]),Y.current.clear())},[o,$]);const ie=m.useCallback(async ce=>{var ze;const me=l.find(D=>D.id===ce);me&&f(me);const de=Y.current.get(ce);de&&de.length>0?(_(de),b(!1)):(me!=null&&me.messages&&me.messages.length>0?_([...me.messages]):_([]),b(!0)),R.current&&R.current.id!==ce&&On.leaveConversation(R.current.id),On.joinConversation(ce);try{const{items:D}=await ts.getMessages(ce,void 0,50),X=[...D].reverse();Y.current.set(ce,X),(((ze=R.current)==null?void 0:ze.id)===ce||!R.current)&&_(X);const G=D.filter(j=>{var H;return j.senderId!==(n==null?void 0:n.id)&&!((H=j.statuses)!=null&&H.some(ge=>ge.userId===(n==null?void 0:n.id)&&ge.status==="READ"))}).map(j=>j.id);G.length>0&&(On.markRead(ce,G),ts.markRead(ce,G))}catch(D){console.error("Failed to load messages:",D)}finally{b(!1)}},[l,n==null?void 0:n.id]);m.useEffect(()=>{if(!o)return;const ce=On.onNewMessage(X=>{var ge;const j=[...(Y.current.get(X.conversationId)||[]).filter(Se=>Se.id!==X.id&&Se.tempId!==X.tempId),X];Y.current.set(X.conversationId,j),((ge=R.current)==null?void 0:ge.id)===X.conversationId?(_(Se=>{if(X.tempId){const Fe=Se.findIndex(q=>q.tempId===X.tempId||q.id===X.id);if(Fe!==-1){const q=[...Se];return q[Fe]=X,q}}return Se.some(Fe=>Fe.id===X.id)?Se:[...Se,X]}),X.senderId!==(n==null?void 0:n.id)&&(n!=null&&n.id)&&(On.markRead(X.conversationId,[X.id]),et.playReceive())):X.senderId!==(n==null?void 0:n.id)&&et.playReceive(),a(Se=>Se.map(Fe=>Fe.id===X.conversationId?{...Fe,updatedAt:X.createdAt,messages:[X]}:Fe))}),me=On.onReadReceipt(({messageIds:X,userId:G})=>{const j=H=>{if(X.includes(H.id)){const ge=H.statuses?[...H.statuses]:[],Se=ge.findIndex(Fe=>Fe.userId===G);return Se!==-1?ge[Se]={...ge[Se],status:"READ",readAt:new Date().toISOString()}:ge.push({id:`status-${Date.now()}`,messageId:H.id,userId:G,status:"READ",deliveredAt:null,readAt:new Date().toISOString()}),{...H,statuses:ge}}return H};_(H=>H.map(j)),Y.current.forEach((H,ge)=>{Y.current.set(ge,H.map(j))})}),de=On.onPresenceStatus(({userId:X,status:G})=>{N(j=>{const H=new Set(j);return G==="online"?H.add(X):H.delete(X),H})}),ze=On.onTypingStart(({userId:X,conversationId:G})=>{X!==(n==null?void 0:n.id)&&I(j=>{const H=new Set(j[G]||[]);return H.add(X),{...j,[G]:H}})}),D=On.onTypingStop(({userId:X,conversationId:G})=>{X!==(n==null?void 0:n.id)&&I(j=>{const H=new Set(j[G]||[]);return H.delete(X),{...j,[G]:H}})});return()=>{ce(),me(),de(),ze(),D()}},[o,n==null?void 0:n.id]);const re=async ce=>{if(!u||!ce.trim()||!n)return;const me=`temp-${Date.now()}`,de={id:me,tempId:me,conversationId:u.id,senderId:n.id,content:ce.trim(),createdAt:new Date().toISOString(),sender:{id:n.id,name:n.name,email:n.email,avatarUrl:n.avatarUrl}};_(ze=>{const D=[...ze,de];return Y.current.set(u.id,D),D}),et.playSend();try{On.sendMessage(u.id,ce.trim(),me)}catch{const ze=await ts.sendMessage(u.id,ce.trim());_(D=>{const X=D.map(G=>G.tempId===me?ze:G);return Y.current.set(u.id,X),X})}},ne=async(ce,me)=>{if(!u||!n)return;const de=me||`Attached: ${ce.name}`,ze=await ts.sendMessage(u.id,de);await ts.uploadAttachment(ze.id,ce);const{items:D}=await ts.getMessages(u.id,void 0,50),X=[...D].reverse();Y.current.set(u.id,X),_(X),et.playSend()},De=async ce=>{const me=await jd.createDirect(ce);return await $(),await ie(me.id),me},rt=async(ce,me)=>{const de=await jd.createGroup(ce,me);return await $(),await ie(de.id),de},Le=async ce=>{u&&(await ts.deleteMessage(u.id,ce),_(me=>{const de=me.filter(ze=>ze.id!==ce);return Y.current.set(u.id,de),de}))},Te=()=>{u&&(On.startTyping(u.id),Q.current&&clearTimeout(Q.current),Q.current=setTimeout(()=>{tt()},3e3))},tt=()=>{u&&(On.stopTyping(u.id),Q.current&&(clearTimeout(Q.current),Q.current=null))},Ge=u?M[u.id]||new Set:new Set;return s.jsx(Um.Provider,{value:{conversations:l,activeConversation:u,messages:p,isLoadingConversations:w,isLoadingMessages:x,onlineUserIds:P,typingUserIds:Ge,selectConversation:ie,sendMessage:re,sendAttachment:ne,createDirectConversation:De,createGroupConversation:rt,refreshConversations:$,startTyping:Te,stopTyping:tt,deleteMessage:Le},children:t})};function pf(){const t=m.useContext(Um);if(!t)throw new Error("useChat must be used within a ChatProvider");return t}const Ll=({size:t=24,className:n=""})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:n,children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"13",rx:"2",fill:"#7bed9f",stroke:"#1E1B18",strokeWidth:"2"}),s.jsx("rect",{x:"6",y:"5",width:"12",height:"9",rx:"1",fill:"#2ed573",stroke:"#1E1B18",strokeWidth:"1.5"}),s.jsx("path",{d:"M10 16v3M14 16v3M6 19h12",stroke:"#1E1B18",strokeWidth:"2",strokeLinecap:"round"})]}),kc=({size:t=24,className:n=""})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:n,children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",fill:"#70a1ff",stroke:"#1E1B18",strokeWidth:"2"}),s.jsx("rect",{x:"7",y:"3",width:"10",height:"7",fill:"#ffffff",stroke:"#1E1B18",strokeWidth:"1.5"}),s.jsx("rect",{x:"9",y:"5",width:"3",height:"4",fill:"#1E1B18"}),s.jsx("circle",{cx:"12",cy:"15",r:"3.5",fill:"#ffffff",stroke:"#1E1B18",strokeWidth:"1.5"}),s.jsx("circle",{cx:"12",cy:"15",r:"1.5",fill:"#1E1B18"})]}),Sc=({size:t=24,className:n=""})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:n,children:[s.jsx("path",{d:"M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z",fill:"#fed330",stroke:"#1E1B18",strokeWidth:"2"}),s.jsx("path",{d:"M3 9h18",stroke:"#1E1B18",strokeWidth:"1.5"})]}),Pl=({size:t=24,badge:n,className:o=""})=>s.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:o,children:[s.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2",fill:"#ffeaa7",stroke:"#1E1B18",strokeWidth:"2"}),s.jsx("path",{d:"M3 7l9 6 9-6",stroke:"#1E1B18",strokeWidth:"2",strokeLinecap:"round"})]}),n!==void 0&&n>0&&s.jsx("span",{style:{position:"absolute",top:-6,right:-6,background:"#fc5c65",color:"#fff",fontSize:10,fontFamily:"var(--font-pixel)",padding:"1px 5px",borderRadius:8,border:"1.5px solid #1E1B18"},children:n})]}),mw=({size:t=24,className:n=""})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:n,children:[s.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"#48c9b0",stroke:"#1E1B18",strokeWidth:"2"}),s.jsx("path",{d:"M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18",stroke:"#1E1B18",strokeWidth:"1.5"})]}),_f=({size:t=24,className:n=""})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:n,children:[s.jsx("circle",{cx:"12",cy:"12",r:"9",fill:"#fed330",stroke:"#1E1B18",strokeWidth:"2"}),s.jsx("circle",{cx:"9",cy:"10",r:"1.5",fill:"#1E1B18"}),s.jsx("circle",{cx:"15",cy:"10",r:"1.5",fill:"#1E1B18"}),s.jsx("path",{d:"M8 14c1 2 2.5 3 4 3s3-1 4-3",stroke:"#1E1B18",strokeWidth:"2",strokeLinecap:"round"})]}),gw=({size:t=24,className:n="",color:o="#ff9ff3"})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:n,children:[s.jsx("circle",{cx:"12",cy:"7",r:"3.5",fill:o,stroke:"#1E1B18",strokeWidth:"1.5"}),s.jsx("circle",{cx:"12",cy:"17",r:"3.5",fill:o,stroke:"#1E1B18",strokeWidth:"1.5"}),s.jsx("circle",{cx:"7",cy:"12",r:"3.5",fill:o,stroke:"#1E1B18",strokeWidth:"1.5"}),s.jsx("circle",{cx:"17",cy:"12",r:"3.5",fill:o,stroke:"#1E1B18",strokeWidth:"1.5"}),s.jsx("circle",{cx:"12",cy:"12",r:"3.5",fill:"#fed330",stroke:"#1E1B18",strokeWidth:"1.5"})]}),Cc=({size:t=24,className:n="",color:o="#ff8552"})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:n,children:s.jsx("path",{d:"M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z",fill:o,stroke:"#1E1B18",strokeWidth:"2"})}),yw=({size:t=24,className:n=""})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",className:n,children:s.jsx("path",{d:"M4 6h3v3H4zm3-3h3v3H7zm3 0h4v3h-4zm4 0h3v3h-3zm3 3h3v3h-3zm0 3h3v3h-3zm-3 3h3v3h-3zm-3 3h3v3h-3zm-2 2h2v2h-2zm-3-2h3v3h-3zm-3-3h3v3h-3zm-3-3h3v3H4zm0-3h3v3H4zm3 0h10v3H7z",fill:"#fc5c65"})}),xw=({size:t=20})=>s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",children:[s.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),s.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),s.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),s.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),vw=({size:t=20})=>s.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})}),ww=({currentTheme:t,onThemeChange:n,onOpenProfile:o})=>{const l=Ti(),{user:a,logout:u}=os(),[f,p]=m.useState(""),[_,w]=m.useState(et.getIsMuted()),[y,x]=m.useState(!1);m.useEffect(()=>{const N=()=>{p(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}))};N();const M=setInterval(N,1e3);return()=>clearInterval(M)},[]);const b=()=>{const N=et.toggleMute();w(N),N||et.playClick()},P=[{key:"theme-lavender",label:"Lavender Grid",bg:"#d9ceee"},{key:"theme-peach",label:"Peach Tan Grid",bg:"#f5e4d3"},{key:"theme-mint",label:"Cyber Mint Grid",bg:"#d2ebe3"},{key:"theme-cyberdark",label:"Dark Grid",bg:"#191826"}];return s.jsxs("header",{style:{width:"100%",height:48,backgroundColor:"var(--window-bg)",borderBottom:"2.5px solid var(--border-dark)",boxShadow:"0 2px 0px rgba(0,0,0,0.06)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",userSelect:"none",zIndex:50},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontFamily:"var(--font-pixel)",fontSize:"0.9rem",fontWeight:700,cursor:"pointer",padding:"4px 8px",borderRadius:4,transition:"background-color 0.15s ease",color:"var(--text-primary)"},onClick:()=>{et.playClick(),l("/")},title:"Return to Home / Landing Page",children:[s.jsx(Ll,{size:26}),s.jsx("span",{children:"CYBERCHAT '98"})]}),s.jsx("span",{style:{color:"var(--border-dark)",opacity:.4},children:"|"}),s.jsxs("div",{style:{position:"relative"},children:[s.jsxs("button",{type:"button",className:"retro-btn retro-btn-sm",onClick:()=>{et.playClick(),x(N=>!N)},style:{fontSize:"0.75rem",padding:"3px 8px"},children:[s.jsx(Cc,{size:14}),s.jsx("span",{children:"Theme"})]}),y&&s.jsx("div",{style:{position:"absolute",top:32,left:0,backgroundColor:"var(--window-bg)",border:"2px solid var(--border-dark)",borderRadius:4,boxShadow:"var(--retro-shadow-sm)",display:"flex",flexDirection:"column",width:160,zIndex:100,overflow:"hidden"},children:P.map(N=>s.jsxs("button",{type:"button",onClick:()=>{et.playClick(),n(N.key),x(!1)},style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderBottom:"1px solid var(--border-dark)",background:t===N.key?"var(--window-subtle)":"transparent",fontFamily:"var(--font-retro)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",textAlign:"left",color:"inherit"},children:[s.jsx("span",{style:{width:14,height:14,borderRadius:2,border:"1px solid var(--border-dark)",backgroundColor:N.bg}}),s.jsx("span",{children:N.label})]},N.key))})]}),s.jsx("button",{type:"button",className:"retro-btn retro-btn-sm",onClick:b,title:_?"Unmute 8-Bit Sound FX":"Mute Sound FX",style:{fontSize:"0.75rem",padding:"3px 8px"},children:s.jsx("span",{children:_?"🔇 Muted":"🔊 8-Bit Audio"})})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[s.jsx("div",{style:{backgroundColor:"var(--window-subtle)",border:"1.5px solid var(--border-dark)",borderRadius:4,padding:"3px 10px",fontFamily:"var(--font-arcade)",fontSize:"1.2rem",letterSpacing:1,boxShadow:"inset 1px 1px 0px rgba(0,0,0,0.1)"},children:f}),a?s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",padding:"2px 8px",border:"1.5px solid var(--border-dark)",borderRadius:20,backgroundColor:"var(--card-bg)",color:"var(--text-primary)",boxShadow:"1px 1px 0px var(--border-dark)"},onClick:()=>{et.playClick(),o&&o()},children:[s.jsx("div",{style:{width:22,height:22,borderRadius:"50%",backgroundColor:"#ff8552",border:"1.5px solid var(--border-dark)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:"#fff",overflow:"hidden"},children:a.avatarUrl?s.jsx("img",{src:a.avatarUrl,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}):(a.name||a.email)[0].toUpperCase()}),s.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-retro)"},children:a.name||a.email.split("@")[0]})]}),s.jsx("button",{type:"button",className:"retro-btn retro-btn-sm retro-btn-danger",onClick:()=>{et.playClick(),u()},style:{fontSize:"0.75rem",padding:"3px 8px"},children:"Exit"})]}):null]})]})},Co=({title:t,icon:n,headerColor:o="orange",onClose:l,onMinimize:a,onMaximize:u,className:f="",style:p,floating:_=!1,children:w})=>{const y=x=>{et.playClick(),x&&x()};return s.jsxs("div",{className:`retro-window ${_?"floating":""} ${f}`,style:p,children:[s.jsxs("div",{className:`retro-titlebar ${o}`,children:[s.jsxs("div",{className:"retro-titlebar-title",children:[n&&s.jsx("span",{style:{display:"inline-flex",alignItems:"center"},children:n}),s.jsx("span",{children:t})]}),s.jsxs("div",{className:"retro-window-controls",children:[a&&s.jsx("button",{type:"button",className:"retro-btn-win",title:"Minimize",onClick:()=>y(a),children:"_"}),u&&s.jsx("button",{type:"button",className:"retro-btn-win",title:"Maximize",onClick:()=>y(u),children:"□"}),l&&s.jsx("button",{type:"button",className:"retro-btn-win close",title:"Close",onClick:()=>y(l),children:"✕"}),!l&&!a&&!u&&s.jsxs("div",{style:{display:"flex",gap:3},children:[s.jsx("span",{className:"retro-btn-win",children:"_"}),s.jsx("span",{className:"retro-btn-win",children:"□"}),s.jsx("span",{className:"retro-btn-win",children:"✕"})]})]})]}),s.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:w})]})},bw=()=>{const t=Ti(),{user:n}=os(),o=()=>{et.playClick(),t(n?"/chat":"/auth")};return s.jsxs("div",{style:{minHeight:"calc(100vh - 48px)",padding:"24px 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"},children:[s.jsx("div",{className:"sticker animate-float",style:{position:"absolute",top:"12%",left:"6%",zIndex:1},children:s.jsx(gw,{size:44,color:"#ff7675"})}),s.jsx("div",{className:"sticker animate-float",style:{position:"absolute",top:"15%",right:"8%",zIndex:1,animationDelay:"1s"},children:s.jsx(Cc,{size:38,color:"#fed330"})}),s.jsx("div",{className:"sticker animate-float",style:{position:"absolute",bottom:"16%",left:"8%",zIndex:1,animationDelay:"1.5s"},children:s.jsx(yw,{size:40})}),s.jsx("div",{className:"sticker animate-float",style:{position:"absolute",bottom:"18%",right:"7%",zIndex:1,animationDelay:"0.5s"},children:s.jsx(_f,{size:44})}),s.jsx("div",{style:{width:"100%",maxWidth:840,position:"relative",zIndex:10},children:s.jsx(Co,{title:"CyberChat '98 Console",icon:s.jsx(Ll,{size:20}),headerColor:"orange",floating:!0,children:s.jsxs("div",{style:{padding:"32px 28px",display:"flex",flexDirection:"column",gap:28},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:14},children:[s.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,backgroundColor:"#ffeaa7",color:"#1e1b18",padding:"4px 14px",border:"2px solid var(--border-dark)",borderRadius:20,boxShadow:"var(--retro-shadow-sm)",fontFamily:"var(--font-pixel)",fontSize:"0.8rem"},children:s.jsx("span",{children:"⚡ ULTRA-FAST REALTIME CHAT SYSTEM"})}),s.jsx("h1",{style:{fontFamily:"var(--font-retro)",fontSize:"2.5rem",fontWeight:800,letterSpacing:"-0.5px",color:"var(--text-primary)",lineHeight:1.2},children:"CHAT LIKE IT'S 1998"}),s.jsx("p",{style:{width:"100%",maxWidth:680,fontSize:"1.08rem",fontWeight:500,lineHeight:1.6,textAlign:"center",color:"var(--text-primary)",opacity:.7,fontFamily:"var(--font-retro)",margin:"0 auto"},children:"Welcome to CyberChat '98 — a nostalgic retro sanctuary for hanging out with friends, exchanging banter in lively channels, and chatting in raw 90s cyber vibes."})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16},children:[s.jsxs("div",{style:{border:"2px solid var(--border-dark)",borderRadius:6,backgroundColor:"var(--card-bg)",boxShadow:"var(--retro-shadow-sm)",overflow:"hidden"},children:[s.jsxs("div",{style:{backgroundColor:"#48c9b0",color:"#1e1b18",padding:"6px 10px",borderBottom:"2px solid var(--border-dark)",fontWeight:700,fontFamily:"var(--font-retro)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:6},children:[s.jsx(Pl,{size:16}),s.jsx("span",{children:"3-WAY AUTH PORTAL"})]}),s.jsxs("div",{style:{padding:12,fontSize:"0.85rem",lineHeight:1.45,color:"var(--text-secondary)"},children:["Sign in instantly with ",s.jsx("strong",{children:"Google"}),", ",s.jsx("strong",{children:"GitHub"}),", or ",s.jsx("strong",{children:"Email"}),"."]})]}),s.jsxs("div",{style:{border:"2px solid var(--border-dark)",borderRadius:6,backgroundColor:"var(--card-bg)",boxShadow:"var(--retro-shadow-sm)",overflow:"hidden"},children:[s.jsxs("div",{style:{backgroundColor:"#fed330",color:"#1e1b18",padding:"6px 10px",borderBottom:"2px solid var(--border-dark)",fontWeight:700,fontFamily:"var(--font-retro)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:6},children:[s.jsx(Sc,{size:16}),s.jsx("span",{children:"CHANNELS & DMS"})]}),s.jsx("div",{style:{padding:12,fontSize:"0.85rem",lineHeight:1.45,color:"var(--text-secondary)"},children:"Create custom group channels or direct conversations with realtime delivery, read receipts, and typing pulses."})]}),s.jsxs("div",{style:{border:"2px solid var(--border-dark)",borderRadius:6,backgroundColor:"var(--card-bg)",boxShadow:"var(--retro-shadow-sm)",overflow:"hidden"},children:[s.jsxs("div",{style:{backgroundColor:"#a55eea",color:"#ffffff",padding:"6px 10px",borderBottom:"2px solid var(--border-dark)",fontWeight:700,fontFamily:"var(--font-retro)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:6},children:[s.jsx(kc,{size:16}),s.jsx("span",{children:"MEDIA & 8-BIT AUDIO"})]}),s.jsx("div",{style:{padding:12,fontSize:"0.85rem",lineHeight:1.45,color:"var(--text-secondary)"},children:"Share files and photos with retro frames, plus synthesized 8-bit sound effects and customizable grid themes."})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,marginTop:4},children:[s.jsx("button",{type:"button",className:"retro-btn retro-btn-lg retro-btn-orange",onClick:o,style:{fontSize:"1.15rem",padding:"14px 36px",letterSpacing:"0.5px"},children:s.jsxs("span",{children:["🚀 ",n?"OPEN ACTIVE CHAT":"LAUNCH CHAT / SIGN IN"]})}),s.jsx("div",{style:{fontSize:"0.85rem",fontFamily:"var(--font-arcade)",color:"var(--text-muted)",letterSpacing:.5},children:"v1.0.0"})]})]})})}),s.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:24,marginTop:28,zIndex:10,flexWrap:"wrap"},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",padding:6},onClick:o,children:[s.jsx(mw,{size:32}),s.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,fontFamily:"var(--font-retro)"},children:"Network"})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",padding:6},onClick:o,children:[s.jsx(kc,{size:32}),s.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,fontFamily:"var(--font-retro)"},children:"Database"})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",padding:6},onClick:o,children:[s.jsx(Pl,{size:32,badge:3}),s.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,fontFamily:"var(--font-retro)"},children:"Inbox"})]})]})]})},Hm=({totalSegments:t=16,activeSegments:n,percentage:o,color:l="purple",label:a,className:u=""})=>{const f=n!==void 0?n:o!==void 0?Math.round(o/100*t):t;return s.jsxs("div",{className:`retro-progress-container ${u}`,children:[a&&s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-retro)"},children:[s.jsx("span",{children:a}),o!==void 0&&s.jsxs("span",{children:[Math.min(100,Math.max(0,o)),"%"]})]}),s.jsx("div",{className:"retro-progress-bar",children:Array.from({length:t}).map((p,_)=>{const w=_<f;return s.jsx("div",{className:`progress-segment ${l}`,style:{backgroundColor:w?void 0:"transparent",borderRight:_<t-1?"1.5px solid var(--border-dark)":"none",opacity:w?1:.15,animationDelay:`${_*.08}s`}},_)})})]})},kw=()=>{const t=Ti(),{login:n,register:o}=os(),[l,a]=m.useState("login"),[u,f]=m.useState(""),[p,_]=m.useState(""),[w,y]=m.useState(""),[x,b]=m.useState(!1),[P,N]=m.useState(""),[M,I]=m.useState(""),R=()=>{et.playClick(),window.location.href="/api/auth/google"},Y=()=>{et.playClick(),window.location.href="/api/auth/github"},Q=async $=>{if($.preventDefault(),!u||!p){et.playError(),N("Please enter both email and password");return}if(l==="signup"&&p.length<6){et.playError(),N("Password must be at least 6 characters");return}try{b(!0),N(""),et.playClick(),l==="login"?(await n(u.trim(),p),et.playSuccess(),t("/chat")):(await o(u.trim(),p,w.trim()||void 0),et.playSuccess(),I("Account created! Logging in..."),setTimeout(()=>t("/chat"),1200))}catch(ie){et.playError(),N(ie instanceof Error?ie.message:l==="login"?"Failed to sign in. Please check your credentials.":"Registration failed. Email might already be in use.")}finally{b(!1)}};return s.jsx("div",{style:{minHeight:"calc(100vh - 48px)",padding:"32px 16px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:s.jsxs("div",{style:{width:"100%",maxWidth:440},children:[s.jsx(Co,{title:"CyberChat 98 - Authentication",icon:s.jsx(Ll,{size:18}),headerColor:"purple",onClose:()=>t("/"),floating:!0,children:s.jsxs("div",{style:{padding:"28px 26px",display:"flex",flexDirection:"column",gap:16},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:10},children:[s.jsx("div",{style:{width:52,height:52,borderRadius:10,backgroundColor:"#a55eea",border:"2.5px solid var(--border-dark)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--retro-shadow-sm)",color:"#ffffff"},children:s.jsx(Ll,{size:30})}),s.jsx("h2",{style:{fontFamily:"var(--font-retro)",fontSize:"1.45rem",fontWeight:800,color:"var(--text-primary)",letterSpacing:"-0.5px"},children:l==="login"?"Continue to CyberChat":"Create CyberChat Account"})]}),P&&s.jsxs("div",{style:{padding:"10px 14px",backgroundColor:"#ff7675",border:"2px solid var(--border-dark)",borderRadius:4,color:"#ffffff",fontSize:"0.85rem",fontWeight:700,boxShadow:"var(--retro-shadow-sm)"},children:["✕ ",P]}),M&&s.jsxs("div",{style:{padding:"10px 14px",backgroundColor:"#55efc4",border:"2px solid var(--border-dark)",borderRadius:4,color:"#1E1B18",fontSize:"0.85rem",fontWeight:700,boxShadow:"var(--retro-shadow-sm)"},children:["✓ ",M]}),s.jsxs("form",{onSubmit:Q,style:{display:"flex",flexDirection:"column",gap:14},children:[l==="signup"&&s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:6,color:"var(--text-primary)"},children:"Display Name"}),s.jsx("input",{type:"text",className:"retro-input",placeholder:"e.g. PixelHero",value:w,onChange:$=>y($.target.value)})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:6,color:"var(--text-primary)"},children:"Email address"}),s.jsx("input",{type:"email",className:"retro-input",placeholder:"you@example.com",value:u,onChange:$=>f($.target.value),required:!0,autoFocus:!0})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:6,color:"var(--text-primary)"},children:"Password"}),s.jsx("input",{type:"password",className:"retro-input",placeholder:"••••••••",value:p,onChange:$=>_($.target.value),required:!0})]}),x&&s.jsx(Hm,{color:"purple",label:l==="login"?"Authenticating...":"Creating account..."}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:4},children:[s.jsx("button",{type:"submit",className:"retro-btn retro-btn-lg retro-btn-purple",disabled:x,style:{width:"100%",fontSize:"0.95rem"},children:s.jsx("span",{children:x?"Processing...":l==="login"?"Login":"Sign Up"})}),s.jsx("button",{type:"button",className:"retro-btn retro-btn-lg",onClick:()=>{et.playClick(),N(""),a(l==="login"?"signup":"login")},style:{width:"100%",fontSize:"0.95rem",backgroundColor:"var(--card-bg)",color:"var(--text-primary)"},children:s.jsx("span",{children:l==="login"?"Sign Up":"Back to Login"})})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,margin:"6px 0"},children:[s.jsx("div",{style:{flex:1,height:1.5,backgroundColor:"var(--border-dark)",opacity:.3}}),s.jsx("span",{style:{fontFamily:"var(--font-retro)",fontSize:"0.8rem",fontWeight:600,color:"var(--text-muted)"},children:"Or continue with"}),s.jsx("div",{style:{flex:1,height:1.5,backgroundColor:"var(--border-dark)",opacity:.3}})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[s.jsxs("button",{type:"button",className:"retro-btn",onClick:R,style:{backgroundColor:"var(--card-bg)",color:"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"10px 12px",fontSize:"0.9rem"},children:[s.jsx(xw,{size:18}),s.jsx("span",{children:"Google"})]}),s.jsxs("button",{type:"button",className:"retro-btn",onClick:Y,style:{backgroundColor:"var(--card-bg)",color:"var(--text-primary)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"10px 12px",fontSize:"0.9rem"},children:[s.jsx(vw,{size:18}),s.jsx("span",{children:"GitHub"})]})]})]})]})}),s.jsxs("div",{style:{textAlign:"center",marginTop:16,fontSize:"0.78rem",color:"var(--text-muted)",fontFamily:"var(--font-retro)"},children:["By signing in, you agree to our"," ",s.jsx("span",{style:{textDecoration:"underline",color:"var(--text-secondary)",fontWeight:700,cursor:"pointer"},children:"Terms of Service"})]})]})})},Sw=()=>{const[t]=H0(),n=Ti(),{loginWithOAuthToken:o}=os(),[l,a]=m.useState(null);return m.useEffect(()=>{const u=t.get("token");if(!u){a("No authentication token received from OAuth provider"),et.playError();return}(async()=>{try{await o(u),et.playSuccess(),setTimeout(()=>{n("/chat")},1e3)}catch(p){a(p instanceof Error?p.message:"Failed to authenticate with token"),et.playError()}})()},[t,o,n]),s.jsx("div",{style:{minHeight:"calc(100vh - 48px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16},children:s.jsx("div",{style:{width:"100%",maxWidth:420},children:s.jsx(Co,{title:"Connecting to Server...",icon:s.jsx(Ll,{size:18}),headerColor:"orange",floating:!0,children:s.jsx("div",{style:{padding:"28px 24px",display:"flex",flexDirection:"column",gap:18,textAlign:"center"},children:l?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[s.jsxs("div",{style:{padding:"10px 14px",backgroundColor:"#ff7675",border:"2px solid var(--border-dark)",borderRadius:4,color:"#fff",fontWeight:700,fontSize:"0.85rem"},children:["✕ ",l]}),s.jsx("button",{type:"button",className:"retro-btn",onClick:()=>n("/auth"),children:"Back to Sign In"})]}):s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[s.jsx("div",{style:{fontFamily:"var(--font-arcade)",fontSize:"1.2rem"},children:"AUTHENTICATING OAUTH CREDENTIALS..."}),s.jsx(Hm,{color:"orange",label:"Establishing secure session...",totalSegments:16})]})})})})})},Cw=({isOpen:t,onClose:n})=>{const{createDirectConversation:o}=pf(),[l,a]=m.useState(""),[u,f]=m.useState([]),[p,_]=m.useState(!1),[w,y]=m.useState(!1);if(m.useEffect(()=>{if(!t)return;let b=!0;const N=setTimeout(async()=>{try{_(!0);const M=await As.searchUsers(l);b&&f(M)}catch(M){console.error("Failed to search users:",M)}finally{b&&_(!1)}},250);return()=>{b=!1,clearTimeout(N)}},[t,l]),!t)return null;const x=async b=>{try{y(!0),et.playClick(),await o(b),n()}catch(P){console.error("Failed to create direct chat:",P)}finally{y(!1)}};return s.jsx("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.45)",backdropFilter:"blur(2px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,padding:16},onClick:n,children:s.jsx("div",{style:{width:"100%",maxWidth:460},onClick:b=>b.stopPropagation(),children:s.jsx(Co,{title:"New Direct Message",icon:s.jsx(Pl,{size:18}),headerColor:"orange",onClose:n,floating:!0,children:s.jsxs("div",{style:{padding:18,display:"flex",flexDirection:"column",gap:14},children:[s.jsxs("div",{className:"retro-search-container",children:[s.jsx("div",{className:"retro-search-icon",children:"🔍"}),s.jsx("input",{type:"text",className:"retro-search-input",placeholder:"Search by name or email...",value:l,onChange:b=>a(b.target.value),autoFocus:!0})]}),s.jsx("div",{style:{maxHeight:280,overflowY:"auto",border:"2px solid var(--border-dark)",borderRadius:4,backgroundColor:"var(--window-subtle)",display:"flex",flexDirection:"column"},children:p?s.jsx("div",{style:{padding:24,textAlign:"center",fontFamily:"var(--font-arcade)",fontSize:"1.1rem",color:"var(--text-muted)"},children:"Searching directory..."}):u.length===0?s.jsxs("div",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:['No users found matching "',l,'"']}):u.map(b=>s.jsxs("div",{onClick:()=>x(b.id),style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--border-subtle)",cursor:w?"not-allowed":"pointer",backgroundColor:"var(--card-bg)",color:"var(--text-primary)",transition:"background-color 0.15s"},onMouseEnter:P=>P.currentTarget.style.backgroundColor="var(--card-bg-hover)",onMouseLeave:P=>P.currentTarget.style.backgroundColor="var(--card-bg)",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("div",{style:{width:32,height:32,borderRadius:"50%",backgroundColor:"#fed330",color:"#1e1b18",border:"1.5px solid var(--border-dark)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800},children:b.avatarUrl?s.jsx("img",{src:b.avatarUrl,alt:"",style:{width:"100%",height:"100%",borderRadius:"50%"}}):(b.name||b.email)[0].toUpperCase()}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text-primary)"},children:b.name||b.email.split("@")[0]}),s.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:b.email})]})]}),s.jsx("button",{type:"button",className:"retro-btn retro-btn-sm retro-btn-teal",disabled:w,children:"Chat"})]},b.id))}),s.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:s.jsx("button",{type:"button",className:"retro-btn",onClick:n,children:"Cancel"})})]})})})})},jw=({isOpen:t,onClose:n})=>{const{createGroupConversation:o}=pf(),[l,a]=m.useState(""),[u,f]=m.useState(""),[p,_]=m.useState([]),[w,y]=m.useState(new Set),[x,b]=m.useState(!1),[P,N]=m.useState(!1),[M,I]=m.useState("");if(m.useEffect(()=>{if(!t)return;let Q=!0;const ie=setTimeout(async()=>{try{b(!0);const re=await As.searchUsers(u);Q&&_(re)}catch(re){console.error("Failed to load users for group:",re)}finally{Q&&b(!1)}},250);return()=>{Q=!1,clearTimeout(ie)}},[t,u]),!t)return null;const R=Q=>{et.playClick(),y($=>{const ie=new Set($);return ie.has(Q)?ie.delete(Q):ie.add(Q),ie})},Y=async Q=>{if(Q.preventDefault(),!l.trim()){I("Please enter a group name"),et.playError();return}if(w.size===0){I("Please select at least 1 member for the group"),et.playError();return}try{N(!0),I(""),et.playClick(),await o(l.trim(),Array.from(w)),et.playSuccess(),n()}catch($){et.playError(),I($ instanceof Error?$.message:"Failed to create group")}finally{N(!1)}};return s.jsx("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.45)",backdropFilter:"blur(2px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,padding:16},onClick:n,children:s.jsx("div",{style:{width:"100%",maxWidth:480},onClick:Q=>Q.stopPropagation(),children:s.jsx(Co,{title:"Create New Channel",icon:s.jsx(Sc,{size:18}),headerColor:"purple",onClose:n,floating:!0,children:s.jsxs("form",{onSubmit:Y,style:{padding:18,display:"flex",flexDirection:"column",gap:14},children:[M&&s.jsx("div",{style:{padding:"8px 12px",backgroundColor:"#ff7675",border:"2px solid var(--border-dark)",borderRadius:4,color:"#fff",fontSize:"0.85rem",fontWeight:600},children:M}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:6,color:"var(--text-primary)"},children:"CHANNEL NAME"}),s.jsx("input",{type:"text",className:"retro-input",placeholder:"e.g. Pixel Warriors, Team Alpha...",value:l,onChange:Q=>a(Q.target.value),autoFocus:!0})]}),s.jsxs("div",{children:[s.jsxs("label",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.85rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:6,color:"var(--text-primary)"},children:[s.jsx("span",{children:"SELECT MEMBERS"}),s.jsxs("span",{className:"retro-badge retro-badge-yellow",children:[w.size," SELECTED"]})]}),s.jsxs("div",{className:"retro-search-container",style:{marginBottom:8},children:[s.jsx("div",{className:"retro-search-icon",children:"🔍"}),s.jsx("input",{type:"text",className:"retro-search-input",placeholder:"Filter users...",value:u,onChange:Q=>f(Q.target.value)})]}),s.jsx("div",{style:{maxHeight:180,overflowY:"auto",border:"2px solid var(--border-dark)",borderRadius:4,backgroundColor:"var(--window-subtle)"},children:x?s.jsx("div",{style:{padding:16,textAlign:"center",fontFamily:"var(--font-arcade)",fontSize:"1.1rem",color:"var(--text-muted)"},children:"Loading directory..."}):p.length===0?s.jsx("div",{style:{padding:16,textAlign:"center",color:"var(--text-muted)",fontSize:"0.85rem"},children:"No users found"}):p.map(Q=>{const $=w.has(Q.id);return s.jsx("div",{onClick:()=>R(Q.id),style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 12px",borderBottom:"1px solid var(--border-subtle)",cursor:"pointer",backgroundColor:$?"var(--card-bg-selected)":"var(--card-bg)",color:"var(--text-primary)"},children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[s.jsx("input",{type:"checkbox",checked:$,onChange:()=>{},style:{width:16,height:16,accentColor:"#a55eea",cursor:"pointer"}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem",color:"var(--text-primary)"},children:Q.name||Q.email.split("@")[0]}),s.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:Q.email})]})]})},Q.id)})})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:6},children:[s.jsx("button",{type:"button",className:"retro-btn",onClick:n,children:"Cancel"}),s.jsx("button",{type:"submit",className:"retro-btn retro-btn-purple",disabled:P,children:P?"Creating...":"Create Channel"})]})]})})})})},Ew=["https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix","https://api.dicebear.com/7.x/pixel-art/svg?seed=Luna","https://api.dicebear.com/7.x/pixel-art/svg?seed=Gizmo","https://api.dicebear.com/7.x/pixel-art/svg?seed=Bandit","https://api.dicebear.com/7.x/pixel-art/svg?seed=Shadow","https://api.dicebear.com/7.x/pixel-art/svg?seed=Princess","https://api.dicebear.com/7.x/pixel-art/svg?seed=Sparky","https://api.dicebear.com/7.x/pixel-art/svg?seed=Buster"],Ym=({isOpen:t,onClose:n})=>{const{user:o,refreshProfile:l}=os(),[a,u]=m.useState("profile"),[f,p]=m.useState((o==null?void 0:o.name)||""),[_,w]=m.useState((o==null?void 0:o.avatarUrl)||""),[y,x]=m.useState(!1),[b,P]=m.useState(null),[N,M]=m.useState(""),[I,R]=m.useState(""),[Y,Q]=m.useState("");if(!t||!o)return null;const $=async re=>{re.preventDefault();try{x(!0),P(null),et.playClick(),await As.updateProfile({name:f.trim()||void 0,avatarUrl:_.trim()||void 0}),await l(),et.playSuccess(),P({type:"success",text:"Profile updated successfully!"})}catch(ne){et.playError(),P({type:"error",text:ne instanceof Error?ne.message:"Failed to update profile"})}finally{x(!1)}},ie=async re=>{if(re.preventDefault(),I!==Y){et.playError(),P({type:"error",text:"New passwords do not match"});return}if(I.length<6){et.playError(),P({type:"error",text:"Password must be at least 6 characters"});return}try{x(!0),P(null),et.playClick();const ne=await As.changePassword({currentPassword:N,newPassword:I});et.playSuccess(),P({type:"success",text:ne||"Password changed successfully!"}),M(""),R(""),Q("")}catch(ne){et.playError(),P({type:"error",text:ne instanceof Error?ne.message:"Failed to change password"})}finally{x(!1)}};return s.jsx("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.45)",backdropFilter:"blur(2px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,padding:16},onClick:n,children:s.jsx("div",{style:{width:"100%",maxWidth:480},onClick:re=>re.stopPropagation(),children:s.jsxs(Co,{title:"User Preferences & Profile",icon:s.jsx(_f,{size:18}),headerColor:"teal",onClose:n,floating:!0,children:[s.jsxs("div",{style:{display:"flex",borderBottom:"2px solid var(--border-dark)",backgroundColor:"var(--window-subtle)"},children:[s.jsx("button",{type:"button",onClick:()=>{et.playClick(),u("profile"),P(null)},style:{flex:1,padding:"10px",border:"none",borderRight:"2px solid var(--border-dark)",background:a==="profile"?"var(--window-bg)":"transparent",fontWeight:700,fontFamily:"var(--font-retro)",fontSize:"0.9rem",cursor:"pointer",color:"var(--text-primary)"},children:"Identity & Avatar"}),s.jsx("button",{type:"button",onClick:()=>{et.playClick(),u("password"),P(null)},style:{flex:1,padding:"10px",border:"none",background:a==="password"?"var(--window-bg)":"transparent",fontWeight:700,fontFamily:"var(--font-retro)",fontSize:"0.9rem",cursor:"pointer",color:"var(--text-primary)"},children:"Security / Password"})]}),s.jsxs("div",{style:{padding:20},children:[b&&s.jsx("div",{style:{padding:"8px 12px",marginBottom:14,border:"2px solid var(--border-dark)",borderRadius:4,backgroundColor:b.type==="success"?"#55efc4":"#ff7675",color:b.type==="success"?"#1E1B18":"#fff",fontWeight:600,fontSize:"0.85rem"},children:b.text}),a==="profile"?s.jsxs("form",{onSubmit:$,style:{display:"flex",flexDirection:"column",gap:14},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:4,color:"var(--text-primary)"},children:"EMAIL ADDRESS"}),s.jsx("input",{type:"text",className:"retro-input",value:o.email,disabled:!0,style:{opacity:.7,cursor:"not-allowed"}})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:4,color:"var(--text-primary)"},children:"DISPLAY NAME"}),s.jsx("input",{type:"text",className:"retro-input",placeholder:"Enter your screen name...",value:f,onChange:re=>p(re.target.value)})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:6,color:"var(--text-primary)"},children:"PIXEL AVATAR PRESETS"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8,marginBottom:8},children:Ew.map((re,ne)=>s.jsx("div",{onClick:()=>{et.playClick(),w(re)},style:{width:"100%",aspectRatio:"1/1",border:_===re?"3px solid #ff8552":"2px solid var(--border-dark)",borderRadius:6,overflow:"hidden",cursor:"pointer",backgroundColor:"var(--card-bg)",padding:4,boxShadow:_===re?"2px 2px 0px #ff8552":"none"},children:s.jsx("img",{src:re,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})},ne))}),s.jsx("input",{type:"text",className:"retro-input",placeholder:"Or enter custom image URL...",value:_,onChange:re=>w(re.target.value),style:{fontSize:"0.85rem"}})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:8},children:[s.jsx("button",{type:"button",className:"retro-btn",onClick:n,children:"Close"}),s.jsxs("button",{type:"submit",className:"retro-btn retro-btn-teal",disabled:y,children:[s.jsx(kc,{size:16}),s.jsx("span",{children:y?"Saving...":"Save Profile"})]})]})]}):s.jsxs("form",{onSubmit:ie,style:{display:"flex",flexDirection:"column",gap:14},children:[s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:4,color:"var(--text-primary)"},children:"CURRENT PASSWORD"}),s.jsx("input",{type:"password",className:"retro-input",placeholder:"Enter current password...",value:N,onChange:re=>M(re.target.value),required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:4,color:"var(--text-primary)"},children:"NEW PASSWORD"}),s.jsx("input",{type:"password",className:"retro-input",placeholder:"Minimum 6 characters...",value:I,onChange:re=>R(re.target.value),required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,fontFamily:"var(--font-retro)",marginBottom:4,color:"var(--text-primary)"},children:"CONFIRM NEW PASSWORD"}),s.jsx("input",{type:"password",className:"retro-input",placeholder:"Repeat new password...",value:Y,onChange:re=>Q(re.target.value),required:!0})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:8},children:[s.jsx("button",{type:"button",className:"retro-btn",onClick:n,children:"Cancel"}),s.jsx("button",{type:"submit",className:"retro-btn retro-btn-primary",disabled:y,children:"Update Password"})]})]})]})]})})})},Rw=()=>{var ge,Se,Fe;const{user:t}=os(),{conversations:n,activeConversation:o,messages:l,isLoadingConversations:a,isLoadingMessages:u,onlineUserIds:f,typingUserIds:p,selectConversation:_,sendMessage:w,sendAttachment:y,startTyping:x,stopTyping:b}=pf(),[P,N]=m.useState(""),[M,I]=m.useState("all"),[R,Y]=m.useState(""),[Q,$]=m.useState(!1),[ie,re]=m.useState(!1),[ne,De]=m.useState(!1),[rt,Le]=m.useState(!1),[Te,tt]=m.useState(!1),Ge=m.useRef(null),ce=m.useRef(null);m.useEffect(()=>{var q;(q=ce.current)==null||q.scrollIntoView({behavior:"smooth"})},[l,p]);const me=async q=>{if(q&&q.preventDefault(),!(!R.trim()||Q||!o))try{$(!0);const ve=R;Y(""),b(),await w(ve)}catch(ve){console.error("Failed to send message:",ve)}finally{$(!1)}},de=q=>{Y(q.target.value),x()},ze=async q=>{const ve=q.target.files;if(!ve||ve.length===0||!o)return;const Pe=ve[0];try{et.playClick(),await y(Pe)}catch(ut){console.error("Failed to upload attachment:",ut)}finally{Ge.current&&(Ge.current.value="")}},D=q=>{et.playClick(),Y(ve=>ve+q),re(!1)},X=q=>{try{return new Date(q).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return""}},G=q=>{var ve;return q&&((ve=q.members.find(Pe=>Pe.userId!==(t==null?void 0:t.id)))==null?void 0:ve.user)||null},j=n.filter(q=>{var ve,Pe;return M==="direct"&&q.isGroup||M==="groups"&&!q.isGroup?!1:P.trim()?(q.isGroup?q.name||"Group":((ve=G(q))==null?void 0:ve.name)||((Pe=G(q))==null?void 0:Pe.email)||"").toLowerCase().includes(P.toLowerCase()):!0}),H=["😀","😎","👾","❤️","🔥","✨","🌸","👍","🚀","💾","⚡","🎉"];return s.jsxs("div",{style:{height:"calc(100vh - 48px)",padding:"16px",display:"flex",gap:"16px",boxSizing:"border-box"},children:[s.jsx("div",{style:{width:340,flexShrink:0,display:"flex",flexDirection:"column",height:"100%"},children:s.jsx(Co,{title:"Directory & Folders",icon:s.jsx(Sc,{size:18}),headerColor:"yellow",className:"h-full",style:{height:"100%"},children:s.jsxs("div",{style:{padding:"12px",display:"flex",flexDirection:"column",gap:"10px",height:"100%"},children:[s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[s.jsx("button",{type:"button",className:"retro-btn retro-btn-sm retro-btn-teal",onClick:()=>{et.playClick(),De(!0)},children:s.jsx("span",{children:"+ New DM"})}),s.jsx("button",{type:"button",className:"retro-btn retro-btn-sm retro-btn-purple",onClick:()=>{et.playClick(),Le(!0)},children:s.jsx("span",{children:"+ Channel"})})]}),s.jsxs("div",{className:"retro-search-container",children:[s.jsx("div",{className:"retro-search-icon",children:"🔍"}),s.jsx("input",{type:"text",className:"retro-search-input",placeholder:"Search conversations...",value:P,onChange:q=>N(q.target.value)})]}),s.jsx("div",{style:{display:"flex",borderBottom:"2px solid var(--border-dark)",backgroundColor:"var(--window-subtle)",borderRadius:4,overflow:"hidden"},children:["all","direct","groups"].map(q=>s.jsx("button",{type:"button",onClick:()=>{et.playClick(),I(q)},style:{flex:1,padding:"6px 0",border:"none",borderRight:q!=="groups"?"1.5px solid var(--border-dark)":"none",background:M===q?"var(--window-bg)":"transparent",fontFamily:"var(--font-retro)",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",textTransform:"capitalize",color:"inherit"},children:q==="all"?"All":q==="direct"?"DMs":"Channels"},q))}),s.jsx("div",{style:{flex:1,overflowY:"auto",border:"2px solid var(--border-dark)",borderRadius:4,backgroundColor:"var(--window-subtle)",display:"flex",flexDirection:"column"},children:a?s.jsx("div",{style:{padding:24,textAlign:"center",fontFamily:"var(--font-arcade)",fontSize:"1.1rem",color:"var(--text-muted)"},children:"Loading channels..."}):j.length===0?s.jsxs("div",{style:{padding:24,textAlign:"center",color:"var(--text-muted)",fontSize:"0.85rem"},children:["No chats found. Click ",s.jsx("strong",{children:"+ Channel"})," to start chatting!"]}):j.map(q=>{var _t;const ve=(o==null?void 0:o.id)===q.id,Pe=G(q),ut=q.isGroup?q.name||"Group Channel":(Pe==null?void 0:Pe.name)||((_t=Pe==null?void 0:Pe.email)==null?void 0:_t.split("@")[0])||"Chat",Bt=Pe?f.has(Pe.id):!1,Dt=q.messages&&q.messages.length>0?q.messages[0]:null;return s.jsxs("div",{onClick:()=>{et.playClick(),_(q.id)},style:{padding:"10px 12px",borderBottom:"1.5px solid var(--border-subtle)",backgroundColor:ve?"var(--card-bg-selected)":"var(--card-bg)",color:"var(--text-primary)",cursor:"pointer",display:"flex",alignItems:"center",gap:10,transition:"background-color 0.1s"},children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx("div",{style:{width:36,height:36,borderRadius:"50%",backgroundColor:q.isGroup?"#a55eea":"#48c9b0",border:"1.5px solid var(--border-dark)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,color:"#fff",overflow:"hidden"},children:q.isGroup?"👥":Pe!=null&&Pe.avatarUrl?s.jsx("img",{src:Pe.avatarUrl,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}):ut[0].toUpperCase()}),!q.isGroup&&s.jsx("span",{className:`status-dot ${Bt?"online":"offline"}`,style:{position:"absolute",bottom:0,right:0}})]}),s.jsxs("div",{style:{flex:1,minWidth:0},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text-primary)"},children:ut}),Dt&&s.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-muted)"},children:X(Dt.createdAt)})]}),s.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-secondary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:2},children:Dt?Dt.content||"Attached file":"No messages yet"})]})]},q.id)})})]})})}),s.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",height:"100%"},children:o?s.jsx(Co,{title:o.isGroup?`Channel: ${o.name||"Group"}`:`Chat with: ${((ge=G(o))==null?void 0:ge.name)||((Fe=(Se=G(o))==null?void 0:Se.email)==null?void 0:Fe.split("@")[0])||"User"}`,icon:o.isGroup?s.jsx(Sc,{size:18}):s.jsx(Pl,{size:18}),headerColor:o.isGroup?"purple":"orange",style:{height:"100%"},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[s.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"16px 20px",display:"flex",flexDirection:"column",gap:"12px",backgroundColor:"var(--window-subtle)"},children:[u?s.jsx("div",{style:{textAlign:"center",padding:32,fontFamily:"var(--font-arcade)",fontSize:"1.2rem",color:"var(--text-muted)"},children:"Loading message history..."}):l.length===0?s.jsxs("div",{style:{margin:"auto",textAlign:"center",backgroundColor:"var(--card-bg)",border:"2px solid var(--border-dark)",borderRadius:8,padding:"20px 24px",boxShadow:"var(--retro-shadow-sm)"},children:[s.jsx(Cc,{size:32,color:"#ff8552"}),s.jsx("h3",{style:{fontFamily:"var(--font-retro)",marginTop:8,color:"var(--text-primary)"},children:"Channel Initialized"}),s.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:4},children:"Send the first message to start conversation!"})]}):l.map(q=>{var Bt,Dt,_t,Ht;const ve=q.senderId===(t==null?void 0:t.id),Pe=ve?"You":((Bt=q.sender)==null?void 0:Bt.name)||((_t=(Dt=q.sender)==null?void 0:Dt.email)==null?void 0:_t.split("@")[0])||"User",ut=(Ht=q.statuses)==null?void 0:Ht.some(Tt=>Tt.userId!==(t==null?void 0:t.id)&&Tt.status==="READ");return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:ve?"flex-end":"flex-start"},children:[!ve&&o.isGroup&&s.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--text-muted)",marginBottom:2,marginLeft:4},children:Pe}),s.jsxs("div",{className:`chat-bubble ${ve?"outgoing":"incoming"}`,children:[q.content&&s.jsx("div",{children:q.content}),q.attachments&&q.attachments.length>0&&s.jsx("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:6},children:q.attachments.map(Tt=>{const an=Tt.mimeType.startsWith("image/"),Xe=ts.getAttachmentUrl(Tt.storageKey);return an?s.jsxs("div",{style:{border:"2px solid var(--border-dark)",borderRadius:4,overflow:"hidden",backgroundColor:"var(--card-bg)",padding:4,maxWidth:240},children:[s.jsx("img",{src:Xe,alt:Tt.originalName,style:{width:"100%",height:"auto",display:"block",borderRadius:2}}),s.jsx("div",{style:{fontSize:"0.7rem",marginTop:4,color:"var(--text-muted)"},children:Tt.originalName})]},Tt.id):s.jsxs("a",{href:Xe,download:Tt.originalName,style:{display:"flex",alignItems:"center",gap:8,padding:"6px 10px",border:"1.5px solid var(--border-dark)",borderRadius:4,backgroundColor:"var(--card-bg)",textDecoration:"none",color:"var(--text-primary)",fontSize:"0.8rem",fontWeight:600},children:[s.jsx(kc,{size:18}),s.jsx("span",{children:Tt.originalName})]},Tt.id)})}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:4,fontSize:"0.7rem",color:"var(--bubble-meta)",marginTop:4},children:[s.jsx("span",{children:X(q.createdAt)}),ve&&s.jsx("span",{style:{fontWeight:800,color:ut?"#20bf6b":"var(--bubble-meta)"},children:ut?"✓✓":"✓"})]})]})]},q.id)}),p.size>0&&s.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:s.jsx("div",{className:"chat-bubble incoming",style:{padding:"6px 12px",fontSize:"0.8rem",fontStyle:"italic",color:"var(--text-muted)"},children:s.jsx("span",{className:"animate-pulse",children:"✍️ Someone is typing..."})})}),s.jsx("div",{ref:ce})]}),s.jsxs("div",{style:{padding:"12px 16px",borderTop:"2.5px solid var(--border-dark)",backgroundColor:"var(--window-bg)",display:"flex",flexDirection:"column",gap:8,position:"relative"},children:[ie&&s.jsx("div",{style:{position:"absolute",bottom:64,left:16,backgroundColor:"var(--card-bg)",border:"2px solid var(--border-dark)",borderRadius:6,padding:8,display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:6,boxShadow:"var(--retro-shadow)",zIndex:20},children:H.map((q,ve)=>s.jsx("button",{type:"button",onClick:()=>D(q),style:{background:"none",border:"none",fontSize:"1.2rem",cursor:"pointer",padding:4},children:q},ve))}),s.jsxs("form",{onSubmit:me,style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("input",{type:"file",ref:Ge,onChange:ze,style:{display:"none"}}),s.jsx("button",{type:"button",className:"retro-btn retro-btn-sm",title:"Send File / Photo",onClick:()=>{var q;et.playClick(),(q=Ge.current)==null||q.click()},style:{padding:"8px 10px"},children:"📎"}),s.jsx("button",{type:"button",className:"retro-btn retro-btn-sm",title:"Insert Emoji",onClick:()=>{et.playClick(),re(q=>!q)},style:{padding:"8px 10px"},children:s.jsx(_f,{size:16})}),s.jsx("input",{type:"text",className:"retro-input",placeholder:"Type message and press Enter...",value:R,onChange:de,style:{flex:1}}),s.jsx("button",{type:"submit",className:"retro-btn retro-btn-orange",disabled:Q||!R.trim(),style:{padding:"8px 18px",fontSize:"0.95rem"},children:s.jsx("span",{children:"Send"})})]})]})]})}):s.jsx(Co,{title:"CyberChat 98 - Mainframe",icon:s.jsx(Cc,{size:18}),headerColor:"teal",style:{height:"100%"},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:32,textAlign:"center",gap:16},children:[s.jsx("div",{style:{width:64,height:64,borderRadius:"50%",backgroundColor:"#ffeaa7",color:"#1e1b18",border:"2.5px solid var(--border-dark)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--retro-shadow)"},children:s.jsx(Pl,{size:34})}),s.jsxs("div",{children:[s.jsx("h2",{style:{fontFamily:"var(--font-retro)",fontSize:"1.4rem",fontWeight:800,color:"var(--text-primary)"},children:"NO ACTIVE CHANNEL SELECTED"}),s.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",marginTop:4,maxWidth:380},children:"Select a direct message or channel from the directory on the left, or launch a new conversation below."})]}),s.jsxs("div",{style:{display:"flex",gap:12},children:[s.jsx("button",{type:"button",className:"retro-btn retro-btn-teal",onClick:()=>{et.playClick(),De(!0)},children:s.jsx("span",{children:"+ Start Direct Message"})}),s.jsx("button",{type:"button",className:"retro-btn retro-btn-purple",onClick:()=>{et.playClick(),Le(!0)},children:s.jsx("span",{children:"+ Create Channel"})})]})]})})}),s.jsx(Cw,{isOpen:ne,onClose:()=>De(!1)}),s.jsx(jw,{isOpen:rt,onClose:()=>Le(!1)}),s.jsx(Ym,{isOpen:Te,onClose:()=>tt(!1)})]})},Tw=({children:t})=>{const{user:n,isLoading:o}=os();return o?s.jsx("div",{style:{minHeight:"calc(100vh - 48px)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-arcade)",fontSize:"1.3rem"},children:"BOOTING CYBERCHAT OS..."}):n?s.jsx(s.Fragment,{children:t}):s.jsx(z_,{to:"/auth",replace:!0})},Nw=()=>{const[t,n]=m.useState(()=>localStorage.getItem("retro_theme")||"theme-lavender"),[o,l]=m.useState(!1);return m.useEffect(()=>{document.body.className=t,localStorage.setItem("retro_theme",t)},[t]),s.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[s.jsx(ww,{currentTheme:t,onThemeChange:a=>n(a),onOpenProfile:()=>l(!0)}),s.jsx("main",{style:{flex:1},children:s.jsxs(D0,{children:[s.jsx(ki,{path:"/",element:s.jsx(bw,{})}),s.jsx(ki,{path:"/auth",element:s.jsx(kw,{})}),s.jsx(ki,{path:"/auth/callback",element:s.jsx(Sw,{})}),s.jsx(ki,{path:"/chat",element:s.jsx(Tw,{children:s.jsx(Rw,{})})}),s.jsx(ki,{path:"*",element:s.jsx(z_,{to:"/",replace:!0})})]})}),s.jsx(Ym,{isOpen:o,onClose:()=>l(!1)}),s.jsx(l5,{})]})},Mw=()=>s.jsx(U0,{children:s.jsx(hw,{children:s.jsx(_w,{children:s.jsx(Nw,{})})})}),Vm=document.getElementById("root");if(!Vm)throw new Error("Failed to find the root element");Kg.createRoot(Vm).render(s.jsx(Qd.StrictMode,{children:s.jsx(Mw,{})}));
