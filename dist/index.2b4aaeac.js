var e,t,n,r,i,a,o,s,c,l,d,u,p,h,f,g,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function m(e){return e&&e.__esModule?e.default:e}var y={},b={},_=v.parcelRequire3a11;null==_&&((_=function(e){if(e in y)return y[e].exports;if(e in b){var t=b[e];delete b[e];var n={id:e,exports:{}};return y[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){b[e]=t},v.parcelRequire3a11=_);var w={},k=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
w=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
k("object"==typeof self&&self)||k("object"==typeof v&&v)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||w||Function("return this")();var E={},L={};// Detect IE8's incomplete defineProperty implementation
E=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={},$={},T={},x={};x=!L(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype,M=j.call,O=x&&j.bind.bind(M,M);T=x?O:function(e){return function(){return M.apply(e,arguments)}};var H={},q={},P="object"==typeof document&&document.all,I=(q={all:P,IS_HTMLDDA:void 0===P&&void 0!==P}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
H=q.IS_HTMLDDA?function(e){return"function"==typeof e||e===I}:function(e){return"function"==typeof e};var A={},N={},C={},D={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
D=function(e){return null==e};var F=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
C=function(e){if(D(e))throw F("Can't call method on "+e);return e};var W=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
N=function(e){return W(C(e))};var R=T({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
A=Object.hasOwn||function(e,t){return R(N(e),t)};var U=Function.prototype,B=E&&Object.getOwnPropertyDescriptor,G=A(U,"name")&&(!E||E&&B(U,"name").configurable),Q={},z={},J={},Y=Object.defineProperty;J=function(e,t){try{Y(w,e,{value:t,configurable:!0,writable:!0})}catch(n){w[e]=t}return t};var V="__core-js_shared__";z=w[V]||J(V,{});var K=T(Function.toString);H(z.inspectSource)||(z.inspectSource=function(e){return K(e)}),Q=z.inspectSource;var X={},Z={},ee=w.WeakMap;Z=H(ee)&&/native code/.test(String(ee));var et={},en=q.all;et=q.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:H(e)||e===en}:function(e){return"object"==typeof e?null!==e:H(e)};var er={},ei={},ea={},eo=w.document,es=et(eo)&&et(eo.createElement);ea=function(e){return es?eo.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
ei=!E&&!L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ea("div"),"a",{get:function(){return 7}}).a});var ec={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
ec=E&&L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var el={},ed=String,eu=TypeError;// `Assert: Type(argument) is Object`
el=function(e){if(et(e))return e;throw eu(ed(e)+" is not an object")};var ep={},eh={},ef={},eg=Function.prototype.call;ef=x?eg.bind(eg):function(){return eg.apply(eg,arguments)};var ev={},em={};em=function(e,t){var n;return arguments.length<2?(n=w[e],H(n)?n:void 0):w[e]&&w[e][t]};var ey={};ey=T({}.isPrototypeOf);var eb={},e_={},ew={},ek={};ek="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eE=w.process,eL=w.Deno,eS=eE&&eE.versions||eL&&eL.version,e$=eS&&eS.v8;e$&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i=(r=e$.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&ek&&(!(r=ek.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=ek.match(/Chrome\/(\d+)/))&&(i=+r[1]),ew=i;var eT=w.String;eb=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(e_=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eT(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ew&&ew<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ex=Object;ev=eb?function(e){return"symbol"==typeof e}:function(e){var t=em("Symbol");return H(t)&&ey(t.prototype,ex(e))};var ej={},eM={},eO={},eH=String;eO=function(e){try{return eH(e)}catch(e){return"Object"}};var eq=TypeError;// `Assert: IsCallable(argument) is true`
eM=function(e){if(H(e))return e;throw eq(eO(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ej=function(e,t){var n=e[t];return D(n)?void 0:eM(n)};var eP={},eI=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eP=function(e,t){var n,r;if("string"===t&&H(n=e.toString)&&!et(r=ef(n,e))||H(n=e.valueOf)&&!et(r=ef(n,e))||"string"!==t&&H(n=e.toString)&&!et(r=ef(n,e)))return r;throw eI("Can't convert object to primitive value")};var eA={},eN={};eN=!1,(eA=function(e,t){return z[e]||(z[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.2",mode:eN?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var eC={},eD=0,eF=Math.random(),eW=T(1..toString);eC=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eW(++eD+eF,36)};var eR=w.Symbol,eU=eA("wks"),eB=eb?eR.for||eR:eR&&eR.withoutSetter||eC,eG=TypeError,eQ=(A(eU,e="toPrimitive")||(eU[e]=e_&&A(eR,e)?eR[e]:eB("Symbol."+e)),eU[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
eh=function(e,t){if(!et(e)||ev(e))return e;var n,r=ej(e,eQ);if(r){if(void 0===t&&(t="default"),n=ef(r,e,t),!et(n)||ev(n))return n;throw eG("Can't convert object to primitive value")}return void 0===t&&(t="number"),eP(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
ep=function(e){var t=eh(e,"string");return ev(t)?t:t+""};var ez=TypeError,eJ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eV="enumerable",eK="configurable",eX="writable";n=E?ec?function(e,t,n){if(el(e),t=ep(t),el(n),"function"==typeof e&&"prototype"===t&&"value"in n&&eX in n&&!n[eX]){var r=eY(e,t);r&&r[eX]&&(e[t]=n.value,n={configurable:eK in n?n[eK]:r[eK],enumerable:eV in n?n[eV]:r[eV],writable:!1})}return eJ(e,t,n)}:eJ:function(e,t,n){if(el(e),t=ep(t),el(n),ei)try{return eJ(e,t,n)}catch(e){}if("get"in n||"set"in n)throw ez("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var eZ={};eZ=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},er=E?function(e,t,r){return n(e,t,eZ(1,r))}:function(e,t,n){return e[t]=n,e};var e0={},e1=eA("keys");e0=function(e){return e1[e]||(e1[e]=eC(e))};var e9={};e9={};var e2="Object already initialized",e3=w.TypeError,e4=w.WeakMap;if(Z||z.state){var e8=z.state||(z.state=new e4);/* eslint-disable no-self-assign -- prototype methods protection */e8.get=e8.get,e8.has=e8.has,e8.set=e8.set,/* eslint-enable no-self-assign -- prototype methods protection */a=function(e,t){if(e8.has(e))throw e3(e2);return t.facade=e,e8.set(e,t),t},o=function(e){return e8.get(e)||{}},s=function(e){return e8.has(e)}}else{var e5=e0("state");e9[e5]=!0,a=function(e,t){if(A(e,e5))throw e3(e2);return t.facade=e,er(e,e5,t),t},o=function(e){return A(e,e5)?e[e5]:{}},s=function(e){return A(e,e5)}}var e7=(X={set:a,get:o,has:s,enforce:function(e){return s(e)?o(e):a(e,{})},getterFor:function(e){return function(t){var n;if(!et(t)||(n=o(t)).type!==e)throw e3("Incompatible receiver, "+e+" required");return n}}}).enforce,e6=X.get,te=String,tt=Object.defineProperty,tn=T("".slice),tr=T("".replace),ti=T([].join),ta=E&&!L(function(){return 8!==tt(function(){},"length",{value:8}).length}),to=String(String).split("String"),ts=$=function(e,t,n){"Symbol("===tn(te(t),0,7)&&(t="["+tr(te(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!A(e,"name")||G&&e.name!==t)&&(E?tt(e,"name",{value:t,configurable:!0}):e.name=t),ta&&n&&A(n,"arity")&&e.length!==n.arity&&tt(e,"length",{value:n.arity});try{n&&A(n,"constructor")&&n.constructor?E&&tt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=e7(e);return A(r,"source")||(r.source=ti(to,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=ts(function(){return H(this)&&e6(this).source||Q(this)},"toString"),S=function(e,t,r){return r.get&&$(r.get,t,{getter:!0}),r.set&&$(r.set,t,{setter:!0}),n(e,t,r)};var tc={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
tc=function(){var e=el(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var tl=w.RegExp,td=tl.prototype;E&&L(function(){var e=!0;try{tl(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(a.hasIndices="d"),a)i(o,a[o]);return Object.getOwnPropertyDescriptor(td,"flags").get.call(t)!==r||n!==r})&&S(td,"flags",{configurable:!0,get:tc});var tu={},tp={}.propertyIsEnumerable,th=Object.getOwnPropertyDescriptor;l=th&&!tp.call({1:2},1)?function(e){var t=th(this,e);return!!t&&t.enumerable}:tp;var tf={},tg={},tv={},tm=T({}.toString),ty=T("".slice);tv=function(e){return ty(tm(e),8,-1)};var tb=Object,t_=T("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
tg=L(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!tb("z").propertyIsEnumerable(0)})?function(e){return"String"===tv(e)?t_(e,""):tb(e)}:tb,tf=function(e){return tg(C(e))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tw=Object.getOwnPropertyDescriptor;c=E?tw:function(e,t){if(e=tf(e),t=ep(t),ei)try{return tw(e,t)}catch(e){}if(A(e,t))return eZ(!ef(l,e,t),e[t])};var tk={};tk=function(e,t,r,i){i||(i={});var a=i.enumerable,o=void 0!==i.name?i.name:t;if(H(r)&&$(r,o,i),i.global)a?e[t]=r:J(t,r);else{try{i.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:n(e,t,{value:r,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return e};var tE={},tL={},tS={},t$={},tT={},tx={},tj=Math.ceil,tM=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tx=Math.trunc||function(e){var t=+e;return(t>0?tM:tj)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tT=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tx(t)};var tO=Math.max,tH=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
t$=function(e,t){var n=tT(e);return n<0?tO(n+t,0):tH(n,t)};var tq={},tP={},tI=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tP=function(e){return e>0?tI(tT(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tq=function(e){return tP(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tA=function(e){return function(t,n,r){var i,a=tf(t),o=tq(a),s=t$(r,o);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&n!=n){for(;o>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=a[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},tN={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tA(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tA(!1)}.indexOf,tC=T([].push);tS=function(e,t){var n,r=tf(e),i=0,a=[];for(n in r)!A(e9,n)&&A(r,n)&&tC(a,n);// Don't enum bug & hidden keys
for(;t.length>i;)A(r,n=t[i++])&&(~tN(a,n)||tC(a,n));return a};var tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");d=Object.getOwnPropertyNames||function(e){return tS(e,tD)},u=Object.getOwnPropertySymbols;var tF=T([].concat);// all object keys, includes non-enumerable and symbols
tL=em("Reflect","ownKeys")||function(e){var t=d(el(e));return u?tF(t,u(e)):t},tE=function(e,t,r){for(var i=tL(t),a=0;a<i.length;a++){var o=i[a];A(e,o)||r&&A(r,o)||n(e,o,c(t,o))}};var tW={},tR=/#|\.prototype\./,tU=function(e,t){var n=tG[tB(e)];return n===tz||n!==tQ&&(H(t)?L(t):!!t)},tB=tU.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tG=tU.data={},tQ=tU.NATIVE="N",tz=tU.POLYFILL="P";tW=tU,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/tu=function(e,t){var n,r,i,a,o,s=e.target,l=e.global,d=e.stat;if(n=l?w:d?w[s]||J(s,{}):(w[s]||{}).prototype)for(r in t){// contained in target
if(a=t[r],i=e.dontCallGetSet?(o=c(n,r))&&o.value:n[r],!tW(l?r:s+(d?".":"#")+r,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tE(a,i)}(e.sham||i&&i.sham)&&er(a,"sham",!0),tk(n,r,a,e)}};var tJ={},tY={},tV=Function.prototype,tK=tV.apply,tX=tV.call;// eslint-disable-next-line es/no-reflect -- safe
tY="object"==typeof Reflect&&Reflect.apply||(x?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===tv(e))return T(e)})(t0.bind);// optional / simple context binding
tZ=function(e,t){return eM(e),void 0===t?e:x?t1(e,t):function(){return e.apply(t,arguments)}};var t9={};t9=em("document","documentElement");var t2={};t2=T([].slice);var t3={},t4=TypeError;t3=function(e,t){if(e<t)throw t4("Not enough arguments");return e};var t8={};// eslint-disable-next-line redos/no-vulnerable -- safe
t8=/(?:ipad|iphone|ipod).*applewebkit/i.test(ek);var t5={};t5="process"===tv(w.process);var t7=w.setImmediate,t6=w.clearImmediate,ne=w.process,nt=w.Dispatch,nn=w.Function,nr=w.MessageChannel,ni=w.String,na=0,no={},ns="onreadystatechange";L(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=w.location});var nc=function(e){if(A(no,e)){var t=no[e];delete no[e],t()}},nl=function(e){return function(){nc(e)}},nd=function(e){nc(e.data)},nu=function(e){// old engines have not location.origin
w.postMessage(ni(e),p.protocol+"//"+p.host)};t7&&t6||(t7=function(e){t3(arguments.length,1);var t=H(e)?e:nn(e),n=t2(arguments,1);return no[++na]=function(){tY(t,void 0,n)},h(na),na},t6=function(e){delete no[e]},t5?h=function(e){ne.nextTick(nl(e))}:nt&&nt.now?h=function(e){nt.now(nl(e))}:nr&&!t8?(g=(f=new nr).port2,f.port1.onmessage=nd,h=tZ(g.postMessage,g)):w.addEventListener&&H(w.postMessage)&&!w.importScripts&&p&&"file:"!==p.protocol&&!L(nu)?(h=nu,w.addEventListener("message",nd,!1)):h=ns in ea("script")?function(e){t9.appendChild(ea("script"))[ns]=function(){t9.removeChild(this),nc(e)}}:function(e){setTimeout(nl(e),0)});var np=(tJ={set:t7,clear:t6}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
tu({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==np},{clearImmediate:np});var nh=tJ.set,nf={},ng={};/* global Bun -- Deno case */ng="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var nv=w.Function,nm=/MSIE .\./.test(ek)||ng&&((t=w.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
nf=function(e,t){var n=t?2:1;return nm?function(r,i/* , ...arguments */){var a=t3(arguments.length,1)>n,o=H(r)?r:nv(r),s=a?t2(arguments,n):[],c=a?function(){tY(o,this,s)}:o;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var ny=w.setImmediate?nf(nh,!1):nh;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
tu({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==ny},{setImmediate:ny});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nb=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function d(e,n,r,a){var o,s,c=Object.create((n&&n.prototype instanceof v?n:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(o=new T(a||[]),s=p,function(n,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===n)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(n,r){var i=r.method,a=n.iterator[i];if(a===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
r.delegate=null,"throw"===i&&n.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
r.method="return",r.arg=t,e(n,r),"throw"===r.method)||"return"!==i&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var o=u(a,n.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var s=o.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
r[n.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
r.delegate=null,g):s:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)// function.sent implementation.
o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=h;var l=u(e,r,o);if("normal"===l.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=o.done?f:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(s=f,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
o.method="throw",o.arg=l.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var p="suspendedStart",h="executing",f="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};l(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,o)&&// of the polyfill.
(b=w);var k=y.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){var n;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,a){function o(){return new t(function(n,o){!function n(i,a,o,s){var c=u(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then(function(e){n("next",e,o,s)},function(e){n("throw",e,o,s)}):t.resolve(d).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
l.value=e,o(l)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return n("throw",e,o,s)})}}(i,a,n,o)})}return n=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
n?n.then(o,// invocations of the iterator.
o):o()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(L.prototype),l(L.prototype,s,function(){return this}),e.AsyncIterator=L,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new L(d(t,n,r,i),a);return e.isGeneratorFunction(n)?o// If outerFn is a generator, return the full iterator.
:o.next().then(function(e){return e.done?e.value:o.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),l(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=x,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&// location outside the try/catch block.
(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),$(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=nb}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=nb:Function("r","regeneratorRuntime = r")(nb)}const n_="https://forkify-api.herokuapp.com/api/v2/recipes/",nw="2b56e887-9ee3-4c3f-8d2e-9eb91d8a27f9",nk=function(e){return new Promise(function(t,n){setTimeout(function(){n(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},nE=async function(e,t){try{let n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),r=await Promise.race([n,nk(10)]),i=await r.json();if(!r.ok)throw Error(`${i.message} (${r.status})`);return i}catch(e){throw e}},nL=async function(e){try{let t=fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),n=await Promise.race([t,nk(10)]),r=await n.json();if(!n.ok)throw Error(`${r.message} (${n.status})`);return r}catch(e){throw e}},nS={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[],shoppingList:[]},n$=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},nT=async function(e,t=!0){try{let n=await nE(`${n_}${e}?key=${nw}`);if(nS.recipe=n$(n),nS.bookmarks.some(t=>t.id===e)?nS.recipe.bookmarked=!0:nS.recipe.bookmarked=!1,!t)return nS.recipe}catch(e){throw e}},nx=async function(e){try{nS.search.query=e;let t=await nE(`${n_}?search=${e}&key=${nw}`);console.log(t),nS.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),nS.search.page=1}catch(e){throw e}},nj=function(e=nS.search.page){nS.search.page=e;let t=(e-1)*nS.search.resultsPerPage,n=e*nS.search.resultsPerPage;return nS.search.results.slice(t,n)},nM=function(e){nS.recipe.ingredients.forEach(t=>t.quantity=t.quantity*e/nS.recipe.servings),nS.recipe.servings=e},nO=function(){try{localStorage.setItem("bookmarks",JSON.stringify(nS.bookmarks))}catch(e){console.error(e,"localStorage disabled, can't use bookmars")}},nH=function(e){// Add bookmark
nS.bookmarks.push(e),// Mark current recipe as bookmarked
e.bookmarked=!0,nO()},nq=function(e){// Delete bookmark
let t=nS.bookmarks.findIndex(t=>t.id===e);nS.bookmarks.splice(t,1),e===nS.recipe.id&&(nS.recipe.bookmarked=!1),nO()},nP=function(){try{localStorage.setItem("shoppingList",JSON.stringify(nS.shoppingList))}catch(e){console.error(e,"localStorage disabled, can't use shopping list")}},nI=function(e,t=!1){t?e.forEach(e=>nS.shoppingList.push(e)):nS.shoppingList.push(e),nP()},nA=function(e){let t=nS.shoppingList.findIndex(t=>t.id===e);nS.shoppingList.splice(t,1),nP()};!function(){let e=localStorage.getItem("bookmarks");e&&(nS.bookmarks=JSON.parse(e));let t=localStorage.getItem("shoppingList");t&&(nS.shoppingList=JSON.parse(t))}();const nN=function(){localStorage.clear("shoppingList"),nS.shoppingList.length=0},nC=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("Quantity")).map(e=>e[1]),n=Object.entries(e).filter(e=>e[0].startsWith("Unit")).map(e=>e[1]),r=Object.entries(e).filter(e=>e[0].startsWith("Description")).map(e=>e[1]),i=t.map((e,t)=>{let i=[e,n[t],r[t]];return i}).map(e=>({quantity:+e[0],unit:e[1],description:e[2]})),a={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:i},o=await nE(`${n_}?key=${nw}`,a);nS.recipe=n$(o),nH(nS.recipe)}catch(e){throw e}},nD=async function(e){try{let t=fetch(`${n_}${e}?key=${nw}`,{method:"DELETE"});await t}catch(e){throw e}},nF=function(e){let t=nS.search.results.findIndex(t=>t.id===e);nS.search.results.splice(t,1)},nW=async function(){try{let e=[];nS.search.results.map(t=>{e.push(t.id)}),console.log(e);let t=e.map(async e=>await nT(e,!1)),n=await Promise.all(t);return n.map((e,t)=>{nS.search.results[t].cookingTime=e.cookingTime,nS.search.results[t].ingredients=e.ingredients.length}),nS.search.results}catch(e){throw e}},nR=async function(e){try{let[t]=await nL(`https://api.spoonacular.com/recipes/parseIngredients?apiKey=8afce0fe645d40158c9986bfe98b52d4&ingredientList=${e}&includeNutrition=true`);return{name:t.name,caloricBreakdown:t.nutrition.caloricBreakdown,nutrients:t.nutrition.nutrients}}catch(e){throw e}},nU=async function(e){try{let t=e.map(e=>`${e.quantity} ${e.description}`),n=t.map(async e=>await nR(e)),r=await Promise.all(n),i=r.flatMap(e=>e.nutrients),a=i.reduce((e,t)=>"Calories"===t.name?e+t.amount:e,0);return a.toFixed(2)}catch(e){throw e}};var nB={};nB=new URL(_("70euV").resolve("fng5f"),import.meta.url).toString();class nG{_data;/**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Jonas Schmedtmann
   * @todo Finish implementation0
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;let t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let n=i[t];e.isEqualNode(n)||e.firstChild?.nodeValue.trim()===""||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach(e=>n.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-loader"></use>
        </svg>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var nQ={};//FRACTY REDUCES THE FRACTION.
function nz(e,t,n,r,i){var a,o,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let l=0,d=e,u=t;//Initialize counter over the prime number array for the while loop.
for(;l<=c.length;)d%c[l]==0&&u%c[l]==0?(c[l],d/=c[l],u/=c[l]):l++;return a=u,o=d,s=n,1===a&&1===o?`${s=`${r}${(parseInt(s)+1).toString()}`}`:0===o?`${r}${s}`:"0"==s?`${r}${o}/${a}`:`${r}${s} ${o}/${a}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
nQ=function(e){let t,n;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let r=e.toString(),i=r.split("."),a=i[0];if("0"==n&&"0"!==a)return a;if("0"==n&&"0"==a)return"0";if("99"==(n=r.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==n&&"0"==a)return"99/100";if(1-parseFloat(`.${n}`)<.0011&&(n="999"),void 0==n)return a;let o=n.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(n.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,n){let r=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return nz(r,i,t,n,!1);//Reduce the numerator and denominator.
}(n,a,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),r=s[1].split("").reverse().join("");if(r.length>1){let e=r.split(""),t=1;for(let n=0;n<e.length;n++)t/=e[0]/e[n];1===t&&(r=e[0])}return r.length>1&&r.length%2==0&&(r=parseInt(r.slice(0,r.length/2),10)-parseInt(r.slice(r.length/2,r.length),10)==0?r.slice(0,r.length/2):r),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,n,r,i){let a=e.length-n.length>=1?e.length-n.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),l=Math.round((s*c-s)*Math.pow(10,a));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return nz(l,(c-1)*o,r,i,!0);//Further reduce the numerator and denominator.
}(n,r,e,a,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class nJ extends nG{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one :)";_message="";_window=document.querySelector(".recipe--calories-window");_calories=document.querySelector(".recipe--calories");_overlay=document.querySelector(".recipe--calories-overlay");_btnClose=document.querySelector(".btn--close-calories-modal");constructor(){super(),this._addHandlerHideWindow()}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--update-servings");if(!n)return;let{updateTo:r}=n.dataset;+r>0&&e(+r)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--bookmark");n&&e()})}addHandlerAddToList(e){this._parentElement.addEventListener("click",(function(t){let n=t.target.closest(".btn--add-ingredient");if(!n)return;let r=n.parentElement.children,i=Array.from(r),a=this._getIngData(i);e(a)}).bind(this))}addHandlerAddAllToList(e){this._parentElement.addEventListener("click",(function(t){let n=t.target.closest(".btn--add-all");if(!n)return;let r=Array.from(document.querySelectorAll(".recipe__ingredient")),i=r.map(e=>{let t=Array.from(e.children);return this._getIngData(t)});console.log(i),e(i,!0)}).bind(this))}_getIngData(e){let[t]=e.filter(e=>e.classList.contains("recipe__quantity")),[n]=e.filter(e=>e.classList.contains("recipe__description"));return{quantity:t.innerText,description:n.innerText,id:Math.random().toString(36).substring(2,12)}}addHandlerIngNutrients(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--ingredient-info");if(!n)return;let r=n.parentElement.children,i=Array.from(r),[a]=i.filter(e=>e.classList.contains("recipe__quantity")),[o]=i.filter(e=>e.classList.contains("recipe__description")),s=`${a.innerText} ${o.innerText}`;e(s)})}addHandlerRecipeCalories(e){this._parentElement.addEventListener("click",(function(t){let n=t.target.closest(".btn--recipe-calories");if(!n)return;let r=Array.from(document.querySelectorAll(".recipe__ingredient")),i=r.map(e=>{let t=Array.from(e.children);return this._getIngData(t)});e(i)}).bind(this))}addHandlerRecipeCalories(){this._parentElement.addEventListener("click",function(e){let t=e.target.closest(".btn--weekly-calendar");if(!t)return})}renderCalories(e){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-smile"></use>
        </svg>
      </div>
      <p class="calories--amount">Total Calories of Recipe are <span>${e} kcal</span></p>
    </div>
    `;this._calories.innerHTML="",this._calories.insertAdjacentHTML("afterbegin",t)}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/m(nB)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>

      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/m(nB)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
            <svg>
              <use href="${/*@__PURE__*/m(nB)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
            <svg>
              <use href="${/*@__PURE__*/m(nB)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-user"></use>
        </svg>
      </div>

      <button class="btn--delete ${this._data.key?"":"hidden"}">
        <svg class="">
          <use href="${/*@__PURE__*/m(nB)}#icon-minus-circle"></use>
        </svg>
      </button>
      
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${/*@__PURE__*/m(nB)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          
        <button class="btn--recipe btn--add-all">Add to Shopping List</button>
        <button class="btn--recipe btn--recipe-calories">Recipe Calories</button>
        <button class="btn--recipe btn--weekly-calendar">📆</button>
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
      </p>
      <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${/*@__PURE__*/m(nB)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/m(nB)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?/*@__PURE__*/m(nQ)(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
      <button class="btn--tiny btn--add-ingredient">
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-plus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--ingredient-info">
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-search"></use>
        </svg>
      </button>
    </li>
  `}_generateMarkupCalendar(){return`
    <div class="container">
      <div class="left">
        <div class="calendar">
          <div class="month">
            <i class="fas fa-angle-left prev"></i>
            <div class="date">december 2015</div>
            <i class="fas fa-angle-right next"></i>
          </div>
          <div class="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div class="days"></div>
          <div class="goto-today">
            <div class="goto">
              <input type="text" placeholder="mm/yyyy" class="date-input" />
              <button class="goto-btn">Go</button>
            </div>
            <button class="today-btn">Today</button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="today-date">
          <div class="event-day">wed</div>
          <div class="event-date">12th december 2022</div>
        </div>
        <div class="events"></div>
        <div class="add-event-wrapper">
          <div class="add-event-header">
            <div class="title">Add Event</div>
            <i class="fas fa-times close"></i>
          </div>
          <div class="add-event-body">
            <div class="add-event-input">
              <input type="text" placeholder="Event Name" class="event-name" />
            </div>
            <div class="add-event-input">
              <input
                type="text"
                placeholder="Event Time From"
                class="event-time-from"
              />
            </div>
            <div class="add-event-input">
              <input
                type="text"
                placeholder="Event Time To"
                class="event-time-to"
              />
            </div>
          </div>
          <div class="add-event-footer">
            <button class="add-event-btn">Add Event</button>
          </div>
        </div>
      </div>
      <button class="add-event">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  `}}var nY=new nJ;class nV{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){// Now here, we cannot simply call the handler immediately, because remember, as we did many times before when we submit a form, we need to first prevent the default action, because otherwise the page is going to reload. So, preventDefault. And only after that, we can call the handler function.
t.preventDefault(),e()})}}var nK=new nV,nX=new class extends nG{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
      <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
          <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/m(nB)}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `}};class nZ extends nG{_parent=document.querySelector(".search-results");_parentElement=document.querySelector(".results");_sortList=document.querySelector(".sort--info");_errorMessage="No recipes found for your query! Please try again :)";_message="";_generateMarkup(){return this._data.map(e=>nX.render(e,!1)).join("")}toggleList(){this._sortList.classList.remove("hidden")}addHandlerSort(e){this._parent.addEventListener("click",function(t){let n=t.target.closest(".sort");n&&e(n)})}}var n0=new nZ;class n1 extends nG{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--inline");if(!n)return;let r=+n.dataset.goto;e(r)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(//  Page 1, and there are other pages
1===e&&t>1?`${this._generateMarkupButton("next",e)}<p class="page--number">${e} / ${t}</p>`:e===t&&t>1?`${this._generateMarkupButton("prev",e)}<p class="page--number">${e} / ${t}</p>`:e<t?`${this._generateMarkupButton("next",e)}<p class="page--number">${e} / ${t}</p>${this._generateMarkupButton("prev",e)}`:"")}_generateMarkupButton(e,t){return`
      <button data-goto="${"next"===e?`${t+1}`:`${t-1}`}" class="btn--inline pagination__btn--${e}">
        ${"next"===e?`<span>Page ${t+1}</span>`:""}
        <svg class="search__icon">
          <use href="${/*@__PURE__*/m(nB)}#icon-arrow-${"next"===e?"right":"left"}"></use>
        </svg>
        ${"prev"===e?`<span>Page ${t-1}</span>`:""}
      </button>
    `}}var n9=new n1;class n2 extends nG{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>nX.render(e,!1)).join("")}}var n3=new n2;class n4 extends nG{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_ingredientNumber=1;constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),this._ingredientNumber=1}_addHandlerShowWindow(){this.renderForm(),this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let n=document.querySelector(".upload__btn"),r=t.submitter;if(r!==n)return;let i=[...new FormData(this)],a=Object.fromEntries(i);e(a)})}renderForm(){let e=`
    <div class="upload__column">
      <h3 class="upload__heading">Recipe data</h3>
      <label>Title</label>
      <input required name="title" type="text" minlength="3" />
      <label>URL</label>
      <input required name="sourceUrl" type="text" minlength="5" />
      <label>Image URL</label>
      <input required name="image" type="text" minlength="4" />
      <label>Publisher</label>
      <input required name="publisher" type="text" minlength="4" />
      <label>Prep time</label>
      <input required name="cookingTime" type="number" />
      <label>Servings</label>
      <input required name="servings" type="number" />
    </div>
 
    <div class="upload__column upload__column--ingredients">
      <h3 class="upload__heading">Ingredients</h3>
      <div class="ingredients--column">
        <div class="ingredients__info">
          <label>Ingredient 1</label>
          <div class="ingredients__data">
            <input
              type="text"
              name="Quantity-1"
              placeholder="Quantity"
            />
            <input type="text" name="Unit-1" placeholder="Unit" />
            <input
              type="text"
              required
              name="Description-1"
              placeholder="Description"
            />
          </div>
        </div>
      </div>

      <div class="add__ingredient">
        <button class="btn--round btn--ingredient btn--add">+</button>
        <button class="btn--round btn--ingredient btn--remove">-</button>
      </div>
    </div>
 
    <button class="btn upload__btn">
      <svg>
          <use href="${/*@__PURE__*/m(nB)}g#icon-upload-cloud"></use>
      </svg>
      <span>Upload</span>
    </button>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_addRemoveIngredient(e){let t=e.target.closest(".btn--ingredient");if(t){if(t.classList.contains("btn--add")){let e=`
          <div class="ingredients__info" data-num=${this._ingredientNumber}>
            <label>Ingredient ${++this._ingredientNumber}</label>
            <div class="ingredients__data">
              <input
                type="text"
                name="Quantity-${this._ingredientNumber}"
                placeholder="Quantity"
              />
              <input type="text" name="Unit-${this._ingredientNumber}" placeholder="Unit" />
              <input
                type="text"
                required
                name="Description-${this._ingredientNumber}"
                placeholder="Description"
              />
            </div>
          </div>
          `;document.querySelector(".ingredients--column").insertAdjacentHTML("beforeend",e)}if(t.classList.contains("btn--remove")){let e=Array.from(document.querySelectorAll(".ingredients__info"));if(1===e.length)return;let t=e.find(e=>+e.dataset.num==this._ingredientNumber-1);document.querySelector(".ingredients--column").removeChild(t),--this._ingredientNumber}}}addHandlerIngredients(){this._parentElement.addEventListener("click",this._addRemoveIngredient.bind(this))}}var n8=new n4;class n5 extends nG{_parentElement=document.querySelector(".recipe");_message="Recipe was successfully deleted :)";addHandlerDelete(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--delete");n&&e()})}}var n7=new n5;class n6 extends nG{_parentElement=document.querySelector(".shopping__list");_errorMessage="No ingredients yet. Find a recipe and add ingredients from it :)";_message="";_listParent=document.querySelector(".ingredients--list");addHandlerRender(e){window.addEventListener("load",e)}addHandlerRemoveFromList(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--remove-ingredient");if(!n)return;let r=n.dataset.id;e(r)})}addHandlerClearList(e){this._listParent.addEventListener("click",function(t){let n=t.target.closest(".btn--clear-list");n&&e()})}_generateMarkup(){return this._data.map(e=>`
      <li class="shopping__list-item">
        <div class="recipe__quantity">${e.quantity}</div>
        <div class="recipe__description">
          ${e.description}
        </div>
        <button class="btn--tiny btn--remove-ingredient" data-id="${e.id}">
          <svg>
            <use href="${/*@__PURE__*/m(nB)}#icon-minus-circle"></use>
          </svg>
        </button>
      </li>
    `).join("")}}var re=new n6;class rt extends nG{_parentElement=document.querySelector(".recipe");_window=document.querySelector(".ingredient--info-window");_nutrition=document.querySelector(".ingredients--nutrition");_overlay=document.querySelector(".ing--window-overlay");_btnClose=document.querySelector(".btn--close-ing-modal");_errorMessage="We could not find ingredient nutrients. Please try another one :)";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerShowWindow(){this._parentElement.addEventListener("click",(function(e){let t=e.target.closest(".btn--ingredient-info");t&&this.toggleWindow()}).bind(this))}renderNutrients(e){let t=`
    <h1 class="recipe__title nutrient--title">
      <span>${e.name}</span>
    </h1>

    <div class="caloric--breakdown-section">
      <p class="section--title">Caloric Breakdown</p>
      <div class="ing--info">
        <p class="ing--breakdown">Carbs: 
          <span>${e.caloricBreakdown.percentCarbs}%</span>
        </p>
        <p class="ing--breakdown">Fat: 
          <span>${e.caloricBreakdown.percentFat}%</span>
        </p>
        <p class="ing--breakdown">Protein: 
          <span>${e.caloricBreakdown.percentProtein}%</span>
        </p>
      </div>
    </div>

    <div class="nutrients-section">
      <p class="section--title">Nutrients</p>
      <div class="nutrients--table-box">
        <table class="nutrients--info-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Unit</th>
              <th>Daily Needs</th>
            </tr>
          </thead>

          <tbody>
            ${e.nutrients.map(e=>this._generateMarkupNutrition(e)).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;this._nutrition.innerHTML="",this._nutrition.insertAdjacentHTML("afterbegin",t)}_generateMarkupNutrition(e){return`
      <tr>
        <td class="table--data">${e.name}</td>
        <td class="table--data">${e.amount}</td>
        <td class="table--data">${e.unit}</td>
        <td class="table--data">${e.percentOfDailyNeeds}</td>
      </tr>
      `}renderWindowSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-loader"></use>
        </svg>
      </div>
      `;this._nutrition.innerHTML="",this._nutrition.insertAdjacentHTML("afterbegin",e)}renderNutrientsError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/m(nB)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._nutrition.innerHTML="",this._nutrition.insertAdjacentHTML("afterbegin",t)}}var rn=new rt;// if (module.hot) {
//   module.hot.accept();
// }
///////////////////////////////////////
const rr=async function(){try{let e=window.location.hash.slice(1);if(!e)return;nY.renderSpinner(),n0.update(nj()),n3.update(nS.bookmarks),// 2) Loading recipe
await nT(e),nY.render(nS.recipe)}catch(e){nY.renderError(),console.log(e)}},ri=async function(){try{n0.renderSpinner();// 1) Get search query
let e=nK.getQuery();if(!e)return;// 2) Load search results
await nx(e),n0.toggleList(),n0.render(nj()),n9.render(nS.search)}catch(e){console.log(e)}},ra=function(e,t=!1){t?nI(e,!0):nI(e),re.render(nS.shoppingList)},ro=async function(e){try{n8.renderSpinner(),// Upload the new recipe data
await nC(e),nY.render(nS.recipe),n8.renderMessage(),// Change ID in URL
window.history.pushState(null,"",`#${nS.recipe.id}`),n3.render(nS.bookmarks),// Close form window
setTimeout(function(){n8.toggleWindow()},2e3),setTimeout(function(){n8.renderForm()},2009.9999999999998)}catch(e){n8.renderError(e.message)}},rs=async function(){try{let e=window.location.hash.slice(1);n7.renderSpinner(),// Delete the recipe data
await nD(e),n7.renderMessage(),// Remove ID from URL
setTimeout(()=>{window.history.replaceState(null,"",window.location.href.split("#")[0])},5),// Delete bookmark
nq(e),n3.render(nS.bookmarks),// Update results
nF(e),n0.renderSpinner(),n0.render(nj()),n9.render(nS.search),0===nS.search.results.length&&n0._clear()}catch(e){console.error("\uD83D\uDCA5",e),n7.renderError(e.message)}},rc=async function(e){try{let t=await nW();e.classList.contains("duration")&&(t.sort((e,t)=>e.cookingTime-t.cookingTime),n0.render(nj())),e.classList.contains("ingredients")&&(t.sort((e,t)=>e.ingredients-t.ingredients),n0.render(nj()))}catch(e){console.log(e)}},rl=async function(e){try{let t=await nR(e);rn.renderWindowSpinner(),setTimeout(()=>{rn.renderNutrients(t)},500)}catch(e){rn.renderNutrientsError()}},rd=async function(e){try{let t=await nU(e);nY.renderCalories(t),nY.toggleWindow()}catch(e){console.log(e)}};n3.addHandlerRender(function(){n3.render(nS.bookmarks)}),nY.addHandlerRender(rr),nY.addHandlerUpdateServings(function(e){// Update the recipe servings (in state)
nM(e),nY.update(nS.recipe)}),nY.addHandlerAddBookmark(function(){nS.recipe.bookmarked?nq(nS.recipe.id):nH(nS.recipe),nY.update(nS.recipe),n3.render(nS.bookmarks)}),nY.addHandlerAddToList(ra),nY.addHandlerAddAllToList(ra),nY.addHandlerIngNutrients(rl),nY.addHandlerRecipeCalories(rd),nK.addHandlerSearch(ri),n9.addHandlerClick(function(e){n0.render(nj(e)),n9.render(nS.search)}),n8.addHandlerUpload(ro),n8.addHandlerIngredients(function(){n8.addHandlerIngredients()}),n7.addHandlerDelete(rs),n0.addHandlerSort(rc),re.addHandlerRender(function(){re.render(nS.shoppingList)}),re.addHandlerRemoveFromList(function(e){// 1) remove ingredient
nA(e),re.render(nS.shoppingList)}),re.addHandlerClearList(function(){nN(),re.render(nS.shoppingList)});const ru=new Date(2023,10,0).getDate(),rp=new Date(2023,11,0);console.log(ru),console.log(rp),console.log(rp.getDay());//# sourceMappingURL=index.2b4aaeac.js.map

//# sourceMappingURL=index.2b4aaeac.js.map
