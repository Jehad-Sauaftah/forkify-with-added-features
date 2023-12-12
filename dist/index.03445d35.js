!function(){var e,t,r,n,i,a,o,s,c,l,u,d,p,f,h,g,v,y,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=m.parcelRequire3a11;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},m.parcelRequire3a11=k),k.register("bRFvr",function(e,t){Object.defineProperty(e.exports,"getBundleURL",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}});var E={},S=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
S("object"==typeof self&&self)||S("object"==typeof m&&m)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||E||Function("return this")();var L={},$={};// Detect IE8's incomplete defineProperty implementation
L=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var T={},A={},x={},O={};O=!$(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype,M=j.call,H=O&&j.bind.bind(M,M);x=O?H:function(e){return function(){return M.apply(e,arguments)}};var I={},P={},q="object"==typeof document&&document.all,N=(P={all:q,IS_HTMLDDA:void 0===q&&void 0!==q}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
I=P.IS_HTMLDDA?function(e){return"function"==typeof e||e===N}:function(e){return"function"==typeof e};var C={},R={},D={},F={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
F=function(e){return null==e};var W=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
D=function(e){if(F(e))throw W("Can't call method on "+e);return e};var U=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
R=function(e){return U(D(e))};var B=x({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
C=Object.hasOwn||function(e,t){return B(R(e),t)};var G=Function.prototype,z=L&&Object.getOwnPropertyDescriptor,Y=C(G,"name"),V=Y&&(!L||L&&z(G,"name").configurable),J={},Q={},K={},X=Object.defineProperty;K=function(e,t){try{X(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var Z="__core-js_shared__";Q=E[Z]||K(Z,{});var ee=x(Function.toString);I(Q.inspectSource)||(Q.inspectSource=function(e){return ee(e)}),J=Q.inspectSource;var et={},er={},en=E.WeakMap;er=I(en)&&/native code/.test(String(en));var ei={},ea=P.all;ei=P.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:I(e)||e===ea}:function(e){return"object"==typeof e?null!==e:I(e)};var eo={},es={},ec={},el=E.document,eu=ei(el)&&ei(el.createElement);ec=function(e){return eu?el.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
es=!L&&!$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ec("div"),"a",{get:function(){return 7}}).a});var ed={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
ed=L&&$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ep={},ef=String,eh=TypeError;// `Assert: Type(argument) is Object`
ep=function(e){if(ei(e))return e;throw eh(ef(e)+" is not an object")};var eg={},ev={},ey={},em=Function.prototype.call;ey=O?em.bind(em):function(){return em.apply(em,arguments)};var eb={},e_={};e_=function(e,t){var r;return arguments.length<2?(r=E[e],I(r)?r:void 0):E[e]&&E[e][t]};var ew={};ew=x({}.isPrototypeOf);var ek={},eE={},eS={},eL={};eL="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var e$=E.process,eT=E.Deno,eA=e$&&e$.versions||eT&&eT.version,ex=eA&&eA.v8;ex&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(n=(r=ex.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&eL&&(!(r=eL.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=eL.match(/Chrome\/(\d+)/))&&(n=+r[1]),eS=n;var eO=E.String;ek=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(eE=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eO(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eS&&eS<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ej=Object;eb=ek?function(e){return"symbol"==typeof e}:function(e){var t=e_("Symbol");return I(t)&&ew(t.prototype,ej(e))};var eM={},eH={},eI={},eP=String;eI=function(e){try{return eP(e)}catch(e){return"Object"}};var eq=TypeError;// `Assert: IsCallable(argument) is true`
eH=function(e){if(I(e))return e;throw eq(eI(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eM=function(e,t){var r=e[t];return F(r)?void 0:eH(r)};var eN={},eC=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eN=function(e,t){var r,n;if("string"===t&&I(r=e.toString)&&!ei(n=ey(r,e))||I(r=e.valueOf)&&!ei(n=ey(r,e))||"string"!==t&&I(r=e.toString)&&!ei(n=ey(r,e)))return n;throw eC("Can't convert object to primitive value")};var eR={},eD={},eF={};eF=!1,(eD=function(e,t){return Q[e]||(Q[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.2",mode:eF?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var eW={},eU=0,eB=Math.random(),eG=x(1..toString);eW=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eG(++eU+eB,36)};var ez=E.Symbol,eY=eD("wks"),eV=ek?ez.for||ez:ez&&ez.withoutSetter||eW,eJ=TypeError,eQ=(eR=function(e){return C(eY,e)||(eY[e]=eE&&C(ez,e)?ez[e]:eV("Symbol."+e)),eY[e]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
ev=function(e,t){if(!ei(e)||eb(e))return e;var r,n=eM(e,eQ);if(n){if(void 0===t&&(t="default"),r=ey(n,e,t),!ei(r)||eb(r))return r;throw eJ("Can't convert object to primitive value")}return void 0===t&&(t="number"),eN(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
eg=function(e){var t=ev(e,"string");return eb(t)?t:t+""};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";t=L?ed?function(e,t,r){if(ep(e),t=eg(t),ep(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(ep(e),t=eg(t),ep(r),es)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var e9={};e9=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},eo=L?function(e,r,n){return t(e,r,e9(1,n))}:function(e,t,r){return e[t]=r,e};var e3={},e4=eD("keys");e3=function(e){return e4[e]||(e4[e]=eW(e))};var e8={};e8={};var e6="Object already initialized",e5=E.TypeError,e7=E.WeakMap;if(er||Q.state){var te=Q.state||(Q.state=new e7);/* eslint-disable no-self-assign -- prototype methods protection */te.get=te.get,te.has=te.has,te.set=te.set,/* eslint-enable no-self-assign -- prototype methods protection */i=function(e,t){if(te.has(e))throw e5(e6);return t.facade=e,te.set(e,t),t},a=function(e){return te.get(e)||{}},o=function(e){return te.has(e)}}else{var tt=e3("state");e8[tt]=!0,i=function(e,t){if(C(e,tt))throw e5(e6);return t.facade=e,eo(e,tt,t),t},a=function(e){return C(e,tt)?e[tt]:{}},o=function(e){return C(e,tt)}}var tr=(et={set:i,get:a,has:o,enforce:function(e){return o(e)?a(e):i(e,{})},getterFor:function(e){return function(t){var r;if(!ei(t)||(r=a(t)).type!==e)throw e5("Incompatible receiver, "+e+" required");return r}}}).enforce,tn=et.get,ti=String,ta=Object.defineProperty,to=x("".slice),ts=x("".replace),tc=x([].join),tl=L&&!$(function(){return 8!==ta(function(){},"length",{value:8}).length}),tu=String(String).split("String"),td=A=function(e,t,r){"Symbol("===to(ti(t),0,7)&&(t="["+ts(ti(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!C(e,"name")||V&&e.name!==t)&&(L?ta(e,"name",{value:t,configurable:!0}):e.name=t),tl&&r&&C(r,"arity")&&e.length!==r.arity&&ta(e,"length",{value:r.arity});try{r&&C(r,"constructor")&&r.constructor?L&&ta(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tr(e);return C(n,"source")||(n.source=tc(tu,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=td(function(){return I(this)&&tn(this).source||J(this)},"toString"),T=function(e,r,n){return n.get&&A(n.get,r,{getter:!0}),n.set&&A(n.set,r,{setter:!0}),t(e,r,n)};var tp={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
tp=function(){var e=ep(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var tf=E.RegExp,th=tf.prototype;L&&$(function(){var e=!0;try{tf(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(a.hasIndices="d"),a)i(o,a[o]);return Object.getOwnPropertyDescriptor(th,"flags").get.call(t)!==n||r!==n})&&T(th,"flags",{configurable:!0,get:tp});var tg={},tv={};// eslint-disable-next-line es/no-typed-arrays -- safe
tv="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var ty={},tm={},tb=eR("toStringTag"),t_={};t_[tb]="z",tm="[object z]"===String(t_);var tw={},tk=x({}.toString),tE=x("".slice);tw=function(e){return tE(tk(e),8,-1)};var tS=eR("toStringTag"),tL=Object,t$="Arguments"===tw(function(){return arguments}()),tT=function(e,t){try{return e[t]}catch(e){}};// getting tag from ES6+ `Object.prototype.toString`
ty=tm?tw:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tT(t=tL(e),tS))?r:t$?tw(t):"Object"===(n=tw(t))&&I(t.callee)?"Arguments":n};var tA={};tA=function(e,r,n,i){i||(i={});var a=i.enumerable,o=void 0!==i.name?i.name:r;if(I(n)&&A(n,o,i),i.global)a?e[r]=n:K(r,n);else{try{i.unsafe?e[r]&&(a=!0):delete e[r]}catch(e){}a?e[r]=n:t(e,r,{value:n,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return e};var tx={},tO={};tO=!$(function(){function e(){}// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype});var tj=e3("IE_PROTO"),tM=Object,tH=tM.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
tx=tO?tM.getPrototypeOf:function(e){var t=R(e);if(C(t,tj))return t[tj];var r=t.constructor;return I(r)&&t instanceof r?r.prototype:t instanceof tM?tH:null};var tI={},tP={};tP=function(e,t,r){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return x(eH(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(e){}};var tq={},tN=String,tC=TypeError;tq=function(e){if("object"==typeof e||I(e))return e;throw tC("Can't set "+tN(e)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
tI=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=tP(Object.prototype,"__proto__","set"))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return ep(r),tq(n),t?e(r,n):r.__proto__=n,r}}():void 0);var tR=et.enforce,tD=et.get,tF=E.Int8Array,tW=tF&&tF.prototype,tU=E.Uint8ClampedArray,tB=tU&&tU.prototype,tG=tF&&tx(tF),tz=tW&&tx(tW),tY=Object.prototype,tV=E.TypeError,tJ=eR("toStringTag"),tQ=eW("TYPED_ARRAY_TAG"),tK="TypedArrayConstructor",tX=tv&&!!tI&&"Opera"!==ty(E.opera),tZ=!1,t0={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},t1={BigInt64Array:8,BigUint64Array:8},t2=function(e){var t=tx(e);if(ei(t)){var r=tD(t);return r&&C(r,tK)?r[tK]:t2(t)}},t9=function(e){if(!ei(e))return!1;var t=ty(e);return C(t0,t)||C(t1,t)};for(s in t0)(l=(c=E[s])&&c.prototype)?tR(l)[tK]=c:tX=!1;for(s in t1)(l=(c=E[s])&&c.prototype)&&(tR(l)[tK]=c);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!tX||!I(tG)||tG===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
tG=function(){throw tV("Incorrect invocation")},tX))for(s in t0)E[s]&&tI(E[s],tG);if((!tX||!tz||tz===tY)&&(tz=tG.prototype,tX))for(s in t0)E[s]&&tI(E[s].prototype,tz);if(tX&&tx(tB)!==tz&&tI(tB,tz),L&&!C(tz,tJ))for(s in tZ=!0,T(tz,tJ,{configurable:!0,get:function(){return ei(this)?this[tQ]:void 0}}),t0)E[s]&&eo(E[s],tQ,s);tg={NATIVE_ARRAY_BUFFER_VIEWS:tX,TYPED_ARRAY_TAG:tZ&&tQ,aTypedArray:function(e){if(t9(e))return e;throw tV("Target is not a typed array")},aTypedArrayConstructor:function(e){if(I(e)&&(!tI||ew(tG,e)))return e;throw tV(eI(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if(L){if(r)for(var i in t0){var a=E[i];if(a&&C(a.prototype,e))try{delete a.prototype[e]}catch(r){// old WebKit bug - some methods are non-configurable
try{a.prototype[e]=t}catch(e){}}}(!tz[e]||r)&&tA(tz,e,r?t:tX&&tW[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,i;if(L){if(tI){if(r){for(n in t0)if((i=E[n])&&C(i,e))try{delete i[e]}catch(e){}}if(tG[e]&&!r)return;try{return tA(tG,e,r?t:tX&&tG[e]||t)}catch(e){}}for(n in t0)(i=E[n])&&(!i[e]||r)&&tA(i,e,t)}},getTypedArrayConstructor:t2,isView:function(e){if(!ei(e))return!1;var t=ty(e);return"DataView"===t||C(t0,t)||C(t1,t)},isTypedArray:t9,TypedArray:tG,TypedArrayPrototype:tz};var t3={},t4={},t8={},t6={},t5=Math.ceil,t7=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
t6=Math.trunc||function(e){var t=+e;return(t>0?t7:t5)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t8=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:t6(t)};var re=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
t4=function(e){return e>0?re(t8(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
t3=function(e){return t4(e.length)};var rt={},rr={},rn=RangeError;rr=function(e){var t=t8(e);if(t<0)throw rn("The argument can't be less than 0");return t};var ri=RangeError;rt=function(e,t){var r=rr(e);if(r%t)throw ri("Wrong offset");return r};var ra=E.RangeError,ro=E.Int8Array,rs=ro&&ro.prototype,rc=rs&&rs.set,rl=tg.aTypedArray,ru=tg.exportTypedArrayMethod,rd=!$(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var e=new Uint8ClampedArray(2);return ey(rc,e,{length:1,0:3},1),3!==e[1]}),rp=rd&&tg.NATIVE_ARRAY_BUFFER_VIEWS&&$(function(){var e=new ro(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
ru("set",function(e/* , offset */){rl(this);var t=rt(arguments.length>1?arguments[1]:void 0,1),r=R(e);if(rd)return ey(rc,this,r,t);var n=this.length,i=t3(r),a=0;if(i+t>n)throw ra("Wrong length");for(;a<i;)this[t+a]=r[a++]},!rd||rp);var rf={},rh={}.propertyIsEnumerable,rg=Object.getOwnPropertyDescriptor;d=rg&&!rh.call({1:2},1)?function(e){var t=rg(this,e);return!!t&&t.enumerable}:rh;var rv={},ry={},rm=Object,rb=x("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
ry=$(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!rm("z").propertyIsEnumerable(0)})?function(e){return"String"===tw(e)?rb(e,""):rm(e)}:rm,rv=function(e){return ry(D(e))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var r_=Object.getOwnPropertyDescriptor;u=L?r_:function(e,t){if(e=rv(e),t=eg(t),es)try{return r_(e,t)}catch(e){}if(C(e,t))return e9(!ey(d,e,t),e[t])};var rw={},rk={},rE={},rS={},rL=Math.max,r$=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
rS=function(e,t){var r=t8(e);return r<0?rL(r+t,0):r$(r,t)};// `Array.prototype.{ indexOf, includes }` methods implementation
var rT=function(e){return function(t,r,n){var i,a=rv(t),o=t3(a),s=rS(n,o);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;o>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=a[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},rA={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:rT(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:rT(!1)}.indexOf,rx=x([].push);rE=function(e,t){var r,n=rv(e),i=0,a=[];for(r in n)!C(e8,r)&&C(n,r)&&rx(a,r);// Don't enum bug & hidden keys
for(;t.length>i;)C(n,r=t[i++])&&(~rA(a,r)||rx(a,r));return a};var rO=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return rE(e,rO)},f=Object.getOwnPropertySymbols;var rj=x([].concat);// all object keys, includes non-enumerable and symbols
rk=e_("Reflect","ownKeys")||function(e){var t=p(ep(e));return f?rj(t,f(e)):t},rw=function(e,r,n){for(var i=rk(r),a=0;a<i.length;a++){var o=i[a];C(e,o)||n&&C(n,o)||t(e,o,u(r,o))}};var rM={},rH=/#|\.prototype\./,rI=function(e,t){var r=rq[rP(e)];return r===rC||r!==rN&&(I(t)?$(t):!!t)},rP=rI.normalize=function(e){return String(e).replace(rH,".").toLowerCase()},rq=rI.data={},rN=rI.NATIVE="N",rC=rI.POLYFILL="P";rM=rI,/*
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
*/rf=function(e,t){var r,n,i,a,o,s=e.target,c=e.global,l=e.stat;if(r=c?E:l?E[s]||K(s,{}):(E[s]||{}).prototype)for(n in t){// contained in target
if(a=t[n],i=e.dontCallGetSet?(o=u(r,n))&&o.value:r[n],!rM(c?n:s+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;rw(a,i)}(e.sham||i&&i.sham)&&eo(a,"sham",!0),tA(r,n,a,e)}};var rR={},rD={},rF=Function.prototype,rW=rF.apply,rU=rF.call;// eslint-disable-next-line es/no-reflect -- safe
rD="object"==typeof Reflect&&Reflect.apply||(O?rU.bind(rW):function(){return rU.apply(rW,arguments)});var rB={},rG={},rz=(rG=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===tw(e))return x(e)})(rG.bind);// optional / simple context binding
rB=function(e,t){return eH(e),void 0===t?e:O?rz(e,t):function(){return e.apply(t,arguments)}};var rY={};rY=e_("document","documentElement");var rV={};rV=x([].slice);var rJ={},rQ=TypeError;rJ=function(e,t){if(e<t)throw rQ("Not enough arguments");return e};var rK={};// eslint-disable-next-line redos/no-vulnerable -- safe
rK=/(?:ipad|iphone|ipod).*applewebkit/i.test(eL);var rX={};rX="process"===tw(E.process);var rZ=E.setImmediate,r0=E.clearImmediate,r1=E.process,r2=E.Dispatch,r9=E.Function,r3=E.MessageChannel,r4=E.String,r8=0,r6={},r5="onreadystatechange";$(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=E.location});var r7=function(e){if(C(r6,e)){var t=r6[e];delete r6[e],t()}},ne=function(e){return function(){r7(e)}},nt=function(e){r7(e.data)},nr=function(e){// old engines have not location.origin
E.postMessage(r4(e),h.protocol+"//"+h.host)};rZ&&r0||(rZ=function(e){rJ(arguments.length,1);var t=I(e)?e:r9(e),r=rV(arguments,1);return r6[++r8]=function(){rD(t,void 0,r)},g(r8),r8},r0=function(e){delete r6[e]},rX?g=function(e){r1.nextTick(ne(e))}:r2&&r2.now?g=function(e){r2.now(ne(e))}:r3&&!rK?(y=(v=new r3).port2,v.port1.onmessage=nt,g=rB(y.postMessage,y)):E.addEventListener&&I(E.postMessage)&&!E.importScripts&&h&&"file:"!==h.protocol&&!$(nr)?(g=nr,E.addEventListener("message",nt,!1)):g=r5 in ec("script")?function(e){rY.appendChild(ec("script"))[r5]=function(){rY.removeChild(this),r7(e)}}:function(e){setTimeout(ne(e),0)});var nn=(rR={set:rZ,clear:r0}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
rf({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==nn},{clearImmediate:nn});var ni=rR.set,na={},no={};/* global Bun -- Deno case */no="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ns=E.Function,nc=/MSIE .\./.test(eL)||no&&((e=E.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
na=function(e,t){var r=t?2:1;return nc?function(n,i/* , ...arguments */){var a=rJ(arguments.length,1)>r,o=I(n)?n:ns(n),s=a?rV(arguments,r):[],c=a?function(){rD(o,this,s)}:o;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var nl=E.setImmediate?na(ni,!1):ni;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
rf({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==nl},{setImmediate:nl});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(o=new T(a||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)// function.sent implementation.
o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;var l=d(e,n,o);if("normal"===l.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=o.done?h:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(s=h,// Dispatch the exception by looping back around to the
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
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p="suspendedStart",f="executing",h="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};l(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(A([])));w&&w!==r&&n.call(w,o)&&// of the polyfill.
(b=w);var k=m.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
l.value=e,o(l)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,o,s)})}}(i,a,r,o)})}return r=// all previous Promises have been resolved before calling invoke,
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
r?r.then(o,// invocations of the iterator.
o):o()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),l(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o// If outerFn is a generator, return the full iterator.
:o.next().then(function(e){return e.done?e.value:o.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),l(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&// location outside the try/catch block.
(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=nu}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=nu:Function("r","regeneratorRuntime = r")(nu)}let nd="https://forkify-api.herokuapp.com/api/v2/recipes/",np="2b56e887-9ee3-4c3f-8d2e-9eb91d8a27f9",nf=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},nh=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,nf(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},ng=async function(e){try{let t=fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),r=await Promise.race([t,nf(10)]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},nv={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[],shoppingList:[]},ny=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},nm=async function(e,t=!0){try{let r=await nh(`${nd}${e}?key=${np}`);if(nv.recipe=ny(r),nv.bookmarks.some(t=>t.id===e)?nv.recipe.bookmarked=!0:nv.recipe.bookmarked=!1,!t)return nv.recipe}catch(e){throw e}},nb=async function(e){try{nv.search.query=e;let t=await nh(`${nd}?search=${e}&key=${np}`);console.log(t),nv.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),nv.search.page=1}catch(e){throw e}},n_=function(e=nv.search.page){nv.search.page=e;let t=(e-1)*nv.search.resultsPerPage,r=e*nv.search.resultsPerPage;return nv.search.results.slice(t,r)},nw=function(e){nv.recipe.ingredients.forEach(t=>t.quantity=t.quantity*e/nv.recipe.servings),nv.recipe.servings=e},nk=function(){try{localStorage.setItem("bookmarks",JSON.stringify(nv.bookmarks))}catch(e){console.error(e,"localStorage disabled, can't use bookmars")}},nE=function(e){// Add bookmark
nv.bookmarks.push(e),// Mark current recipe as bookmarked
e.bookmarked=!0,nk()},nS=function(e){// Delete bookmark
let t=nv.bookmarks.findIndex(t=>t.id===e);nv.bookmarks.splice(t,1),e===nv.recipe.id&&(nv.recipe.bookmarked=!1),nk()},nL=function(){try{localStorage.setItem("shoppingList",JSON.stringify(nv.shoppingList))}catch(e){console.error(e,"localStorage disabled, can't use shopping list")}},n$=function(e,t=!1){t?e.forEach(e=>nv.shoppingList.push(e)):nv.shoppingList.push(e),nL()},nT=function(e){let t=nv.shoppingList.findIndex(t=>t.id===e);nv.shoppingList.splice(t,1),nL()};!function(){let e=localStorage.getItem("bookmarks");e&&(nv.bookmarks=JSON.parse(e));let t=localStorage.getItem("shoppingList");t&&(nv.shoppingList=JSON.parse(t))}();let nA=function(){localStorage.clear("shoppingList"),nv.shoppingList.length=0},nx=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("Quantity")).map(e=>e[1]),r=Object.entries(e).filter(e=>e[0].startsWith("Unit")).map(e=>e[1]),n=Object.entries(e).filter(e=>e[0].startsWith("Description")).map(e=>e[1]),i=t.map((e,t)=>{let i=[e,r[t],n[t]];return i}).map(e=>({quantity:+e[0],unit:e[1],description:e[2]})),a={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:i},o=await nh(`${nd}?key=${np}`,a);nv.recipe=ny(o),nE(nv.recipe)}catch(e){throw e}},nO=async function(e){try{let t=fetch(`${nd}${e}?key=${np}`,{method:"DELETE"});await t}catch(e){throw e}},nj=function(e){let t=nv.search.results.findIndex(t=>t.id===e);nv.search.results.splice(t,1)},nM=async function(){try{let e=[];nv.search.results.map(t=>{e.push(t.id)}),console.log(e);let t=e.map(async e=>await nm(e,!1)),r=await Promise.all(t);return r.map((e,t)=>{nv.search.results[t].cookingTime=e.cookingTime,nv.search.results[t].ingredients=e.ingredients.length}),nv.search.results}catch(e){throw e}},nH=async function(e){try{let[t]=await ng(`https://api.spoonacular.com/recipes/parseIngredients?apiKey=8afce0fe645d40158c9986bfe98b52d4&ingredientList=${e}&includeNutrition=true`);return{name:t.name,caloricBreakdown:t.nutrition.caloricBreakdown,nutrients:t.nutrition.nutrients}}catch(e){throw e}},nI=async function(e){try{let t=e.map(e=>`${e.quantity} ${e.description}`),r=t.map(async e=>await nH(e)),n=await Promise.all(r),i=n.flatMap(e=>e.nutrients),a=i.reduce((e,t)=>"Calories"===t.name?e+t.amount:e,0);return a.toFixed(2)}catch(e){throw e}};var nP={};nP=k("bRFvr").getBundleURL("9J6lJ")+k("kfXfx").resolve("9xDC1");class nq{_data;/**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Jonas Schmedtmann
   * @todo Finish implementation0
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/b(nP)}#icon-loader"></use>
        </svg>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/b(nP)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/b(nP)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var nN={};//FRACTY REDUCES THE FRACTION.
function nC(e,t,r,n,i){var a,o,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let l=0,u=e,d=t;//Initialize counter over the prime number array for the while loop.
for(;l<=c.length;)u%c[l]==0&&d%c[l]==0?(c[l],u/=c[l],d/=c[l]):l++;return a=d,o=u,s=r,1===a&&1===o?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
nN=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return nC(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,a,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),l=Math.round((s*c-s)*Math.pow(10,a));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return nC(l,(c-1)*o,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,a,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class nR extends nq{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one :)";_message="";_window=document.querySelector(".recipe--calories-window");_calories=document.querySelector(".recipe--calories");_overlay=document.querySelector(".recipe--calories-overlay");_btnClose=document.querySelector(".btn--close-calories-modal");constructor(){super(),this._addHandlerHideWindow()}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}addHandlerAddToList(e){this._parentElement.addEventListener("click",(function(t){let r=t.target.closest(".btn--add-ingredient");if(!r)return;let n=r.parentElement.children,i=Array.from(n),a=this._getIngData(i);e(a)}).bind(this))}addHandlerAddAllToList(e){this._parentElement.addEventListener("click",(function(t){let r=t.target.closest(".btn--add-all");if(!r)return;let n=Array.from(document.querySelectorAll(".recipe__ingredient")),i=n.map(e=>{let t=Array.from(e.children);return this._getIngData(t)});console.log(i),e(i,!0)}).bind(this))}_getIngData(e){let[t]=e.filter(e=>e.classList.contains("recipe__quantity")),[r]=e.filter(e=>e.classList.contains("recipe__description"));return{quantity:t.innerText,description:r.innerText,id:Math.random().toString(36).substring(2,12)}}addHandlerIngNutrients(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--ingredient-info");if(!r)return;let n=r.parentElement.children,i=Array.from(n),[a]=i.filter(e=>e.classList.contains("recipe__quantity")),[o]=i.filter(e=>e.classList.contains("recipe__description")),s=`${a.innerText} ${o.innerText}`;e(s)})}addHandlerRecipeCalories(e){this._parentElement.addEventListener("click",(function(t){let r=t.target.closest(".btn--recipe-calories");if(!r)return;let n=Array.from(document.querySelectorAll(".recipe__ingredient")),i=n.map(e=>{let t=Array.from(e.children);return this._getIngData(t)});e(i)}).bind(this))}addHandlerRecipeCalories(){this._parentElement.addEventListener("click",function(e){let t=e.target.closest(".btn--weekly-calendar");if(!t)return})}renderCalories(e){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/b(nP)}#icon-smile"></use>
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
          <use href="${/*@__PURE__*/b(nP)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>

      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${/*@__PURE__*/b(nP)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
            <svg>
              <use href="${/*@__PURE__*/b(nP)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
            <svg>
              <use href="${/*@__PURE__*/b(nP)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${/*@__PURE__*/b(nP)}#icon-user"></use>
        </svg>
      </div>

      <button class="btn--delete ${this._data.key?"":"hidden"}">
        <svg class="">
          <use href="${/*@__PURE__*/b(nP)}#icon-minus-circle"></use>
        </svg>
      </button>
      
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${/*@__PURE__*/b(nP)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
          <use href="${/*@__PURE__*/b(nP)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/b(nP)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?/*@__PURE__*/b(nN)(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
      <button class="btn--tiny btn--add-ingredient">
        <svg>
          <use href="${/*@__PURE__*/b(nP)}#icon-plus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--ingredient-info">
        <svg>
          <use href="${/*@__PURE__*/b(nP)}#icon-search"></use>
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
  `}}var nD=new nR;class nF{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){// Now here, we cannot simply call the handler immediately, because remember, as we did many times before when we submit a form, we need to first prevent the default action, because otherwise the page is going to reload. So, preventDefault. And only after that, we can call the handler function.
t.preventDefault(),e()})}}var nW=new nF,nU=new class extends nq{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
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
              <use href="${/*@__PURE__*/b(nP)}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `}};class nB extends nq{_parent=document.querySelector(".search-results");_parentElement=document.querySelector(".results");_sortList=document.querySelector(".sort--info");_errorMessage="No recipes found for your query! Please try again :)";_message="";_generateMarkup(){return this._data.map(e=>nU.render(e,!1)).join("")}toggleList(){this._sortList.classList.remove("hidden")}addHandlerSort(e){this._parent.addEventListener("click",function(t){let r=t.target.closest(".sort");r&&e(r)})}}var nG=new nB;class nz extends nq{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(//  Page 1, and there are other pages
1===e&&t>1?`${this._generateMarkupButton("next",e)}<p class="page--number">${e} / ${t}</p>`:e===t&&t>1?`${this._generateMarkupButton("prev",e)}<p class="page--number">${e} / ${t}</p>`:e<t?`${this._generateMarkupButton("next",e)}<p class="page--number">${e} / ${t}</p>${this._generateMarkupButton("prev",e)}`:"")}_generateMarkupButton(e,t){return`
      <button data-goto="${"next"===e?`${t+1}`:`${t-1}`}" class="btn--inline pagination__btn--${e}">
        ${"next"===e?`<span>Page ${t+1}</span>`:""}
        <svg class="search__icon">
          <use href="${/*@__PURE__*/b(nP)}#icon-arrow-${"next"===e?"right":"left"}"></use>
        </svg>
        ${"prev"===e?`<span>Page ${t-1}</span>`:""}
      </button>
    `}}var nY=new nz;class nV extends nq{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>nU.render(e,!1)).join("")}}var nJ=new nV;class nQ extends nq{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_ingredientNumber=1;constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),this._ingredientNumber=1}_addHandlerShowWindow(){this.renderForm(),this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=document.querySelector(".upload__btn"),n=t.submitter;if(n!==r)return;let i=[...new FormData(this)],a=Object.fromEntries(i);e(a)})}renderForm(){let e=`
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
          <use href="${/*@__PURE__*/b(nP)}g#icon-upload-cloud"></use>
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
          `;document.querySelector(".ingredients--column").insertAdjacentHTML("beforeend",e)}if(t.classList.contains("btn--remove")){let e=Array.from(document.querySelectorAll(".ingredients__info"));if(1===e.length)return;let t=e.find(e=>+e.dataset.num==this._ingredientNumber-1);document.querySelector(".ingredients--column").removeChild(t),--this._ingredientNumber}}}addHandlerIngredients(){this._parentElement.addEventListener("click",this._addRemoveIngredient.bind(this))}}var nK=new nQ;class nX extends nq{_parentElement=document.querySelector(".recipe");_message="Recipe was successfully deleted :)";addHandlerDelete(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--delete");r&&e()})}}var nZ=new nX;class n0 extends nq{_parentElement=document.querySelector(".shopping__list");_errorMessage="No ingredients yet. Find a recipe and add ingredients from it :)";_message="";_listParent=document.querySelector(".ingredients--list");addHandlerRender(e){window.addEventListener("load",e)}addHandlerRemoveFromList(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--remove-ingredient");if(!r)return;let n=r.dataset.id;e(n)})}addHandlerClearList(e){this._listParent.addEventListener("click",function(t){let r=t.target.closest(".btn--clear-list");r&&e()})}_generateMarkup(){return this._data.map(e=>`
      <li class="shopping__list-item">
        <div class="recipe__quantity">${e.quantity}</div>
        <div class="recipe__description">
          ${e.description}
        </div>
        <button class="btn--tiny btn--remove-ingredient" data-id="${e.id}">
          <svg>
            <use href="${/*@__PURE__*/b(nP)}#icon-minus-circle"></use>
          </svg>
        </button>
      </li>
    `).join("")}}var n1=new n0;class n2 extends nq{_parentElement=document.querySelector(".recipe");_window=document.querySelector(".ingredient--info-window");_nutrition=document.querySelector(".ingredients--nutrition");_overlay=document.querySelector(".ing--window-overlay");_btnClose=document.querySelector(".btn--close-ing-modal");_errorMessage="We could not find ingredient nutrients. Please try another one :)";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerShowWindow(){this._parentElement.addEventListener("click",(function(e){let t=e.target.closest(".btn--ingredient-info");t&&this.toggleWindow()}).bind(this))}renderNutrients(e){let t=`
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
          <use href="${/*@__PURE__*/b(nP)}#icon-loader"></use>
        </svg>
      </div>
      `;this._nutrition.innerHTML="",this._nutrition.insertAdjacentHTML("afterbegin",e)}renderNutrientsError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/b(nP)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._nutrition.innerHTML="",this._nutrition.insertAdjacentHTML("afterbegin",t)}}var n9=new n2;// if (module.hot) {
//   module.hot.accept();
// }
///////////////////////////////////////
let n3=async function(){try{let e=window.location.hash.slice(1);if(!e)return;nD.renderSpinner(),nG.update(n_()),nJ.update(nv.bookmarks),// 2) Loading recipe
await nm(e),nD.render(nv.recipe)}catch(e){nD.renderError(),console.log(e)}},n4=async function(){try{nG.renderSpinner();// 1) Get search query
let e=nW.getQuery();if(!e)return;// 2) Load search results
await nb(e),nG.toggleList(),nG.render(n_()),nY.render(nv.search)}catch(e){console.log(e)}},n8=function(e,t=!1){t?n$(e,!0):n$(e),n1.render(nv.shoppingList)},n6=async function(e){try{nK.renderSpinner(),// Upload the new recipe data
await nx(e),nD.render(nv.recipe),nK.renderMessage(),// Change ID in URL
window.history.pushState(null,"",`#${nv.recipe.id}`),nJ.render(nv.bookmarks),// Close form window
setTimeout(function(){nK.toggleWindow()},2e3),setTimeout(function(){nK.renderForm()},2009.9999999999998)}catch(e){nK.renderError(e.message)}},n5=async function(){try{let e=window.location.hash.slice(1);nZ.renderSpinner(),// Delete the recipe data
await nO(e),nZ.renderMessage(),// Remove ID from URL
setTimeout(()=>{window.history.replaceState(null,"",window.location.href.split("#")[0])},5),// Delete bookmark
nS(e),nJ.render(nv.bookmarks),// Update results
nj(e),nG.renderSpinner(),nG.render(n_()),nY.render(nv.search),0===nv.search.results.length&&nG._clear()}catch(e){console.error("\uD83D\uDCA5",e),nZ.renderError(e.message)}},n7=async function(e){try{let t=await nM();e.classList.contains("duration")&&(t.sort((e,t)=>e.cookingTime-t.cookingTime),nG.render(n_())),e.classList.contains("ingredients")&&(t.sort((e,t)=>e.ingredients-t.ingredients),nG.render(n_()))}catch(e){console.log(e)}},ie=async function(e){try{let t=await nH(e);n9.renderWindowSpinner(),setTimeout(()=>{n9.renderNutrients(t)},500)}catch(e){n9.renderNutrientsError()}},it=async function(e){try{let t=await nI(e);nD.renderCalories(t),nD.toggleWindow()}catch(e){console.log(e)}};nJ.addHandlerRender(function(){nJ.render(nv.bookmarks)}),nD.addHandlerRender(n3),nD.addHandlerUpdateServings(function(e){// Update the recipe servings (in state)
nw(e),nD.update(nv.recipe)}),nD.addHandlerAddBookmark(function(){nv.recipe.bookmarked?nS(nv.recipe.id):nE(nv.recipe),nD.update(nv.recipe),nJ.render(nv.bookmarks)}),nD.addHandlerAddToList(n8),nD.addHandlerAddAllToList(n8),nD.addHandlerIngNutrients(ie),nD.addHandlerRecipeCalories(it),nW.addHandlerSearch(n4),nY.addHandlerClick(function(e){nG.render(n_(e)),nY.render(nv.search)}),nK.addHandlerUpload(n6),nK.addHandlerIngredients(function(){nK.addHandlerIngredients()}),nZ.addHandlerDelete(n5),nG.addHandlerSort(n7),n1.addHandlerRender(function(){n1.render(nv.shoppingList)}),n1.addHandlerRemoveFromList(function(e){// 1) remove ingredient
nT(e),n1.render(nv.shoppingList)}),n1.addHandlerClearList(function(){nA(),n1.render(nv.shoppingList)});let ir=new Date(2023,10,0).getDate(),ii=new Date(2023,11,0);console.log(ir),console.log(ii),console.log(ii.getDay())}();//# sourceMappingURL=index.03445d35.js.map

//# sourceMappingURL=index.03445d35.js.map
