/*!
 * @project        Example Project
 * @name           app-legacy.5ddada5999836c8c5ac0.js
 * @author         Andrew Welch
 * @build          Sun, Mar 3, 2019 10:06 PM ET
 * @release        2acff0780c4a75df5671e3f3b64b2bb82f5ffd13 [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */!function(t){function e(e){for(var n,a,u=e[0],c=e[1],f=e[2],l=0,p=[];l<u.length;l++)a=u[l],o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(s&&s(e);p.length;)p.shift()();return i.push.apply(i,f||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={2:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=n);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(t){return a.p+"js/"+({1:"vendors~vue~vueclickaway",3:"lazysizes",6:"vueclickaway",7:"vuetyper"}[t]||t)+"-legacy."+{1:"74cf45e8cef24dd54f0a",3:"2cd61dc1fad9e5235afe",6:"4fc91165ace28e2418c6",7:"f4b83f1f45ed302c86fd"}[t]+".js"}(t),i=function(e){u.onerror=u.onload=null,clearTimeout(c);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,r[1](a)}o[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/",a.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var s=c;i.push([6,0]),r()}([function(t,e,r){t.exports=r(3)},function(t,e){function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)})}}},,function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(4),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",f="object"==typeof t,s=e.regeneratorRuntime;if(s)f&&(t.exports=s);else{(s=e.regeneratorRuntime=f?t.exports:{}).wrap=x;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",y={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(M([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=E.prototype=O.prototype=Object.create(v);L.prototype=w.constructor=E,E.constructor=L,E[c]=L.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},s.awrap=function(t){return{__await:t}},S(k.prototype),k.prototype[u]=function(){return this},s.AsyncIterator=k,s.async=function(t,e,r,n){var o=new k(x(t,e,r,n));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},S(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=M,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),f=o.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function x(t,e,r,n){var o=e&&e.prototype instanceof O?e:O,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=b(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function O(){}function L(){}function E(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var u=b(t[r],t,n);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&o.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},,function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(1),a=r.n(i);r(7),r(8),r(9),r(10),r(11),r(12),r(13),r(14),r(15),r(16),r(17),r(18),r(19);(function(){var t=a()(o.a.mark(function t(){var e,n,i,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(1).then(r.bind(null,5));case 2:return e=t.sent,t.next=5,Promise.all([r.e(1),r.e(6)]).then(r.t.bind(null,23,7));case 5:return n=t.sent,t.next=8,r.e(7).then(r.t.bind(null,24,7));case 8:return i=t.sent,t.next=11,r.e(3).then(r.t.bind(null,25,7));case 11:return a=t.sent,t.next=14,r.e(3).then(r.t.bind(null,26,7));case 14:t.sent,a.init(),e.default.use(i.default),new e.default({el:"#page-header",mixins:[n.mixin],components:{},delimiters:["${","}"],data:{menuOpen:!1},methods:{prerenderLink:function(t){var e=document.getElementsByTagName("head")[0],r=e.childNodes;ref=r[r.length-1];var n=e.getElementsByTagName("link");Array.prototype.forEach.call(n,function(t,e){"rel"in t&&"prerender"===t.rel&&t.parentNode.removeChild(t)});var o=document.createElement("link");o.rel="prerender",o.href=t.currentTarget.href,ref.parentNode.insertBefore(o,ref)},away:function(){this.menuOpen=!1,console.log("away")},toggle:function(){this.menuOpen=!this.menuOpen,console.log("toggle")}}});case 18:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()().then(function(t){})},,function(t,e,r){t.exports=r.p+"fonts/fontello.eot"},function(t,e,r){t.exports=r.p+"fonts/fontello.ttf"},function(t,e,r){t.exports=r.p+"fonts/fontello.woff"},function(t,e,r){t.exports=r.p+"fonts/fontello.woff2"},function(t,e,r){t.exports=r.p+"fonts/OperatorMonoSSm-Book.eot"},function(t,e,r){t.exports=r.p+"fonts/OperatorMonoSSm-Book.ttf"},function(t,e,r){t.exports=r.p+"fonts/OperatorMonoSSm-Book.woff"},function(t,e,r){t.exports=r.p+"fonts/OperatorMonoSSm-Book.woff2"},function(t,e,r){t.exports=r.p+"fonts/OperatorMonoSSm-BookItalic.eot"},function(t,e,r){t.exports=r.p+"fonts/OperatorMonoSSm-BookItalic.ttf"},function(t,e,r){t.exports=r.p+"fonts/OperatorMonoSSm-BookItalic.woff"},function(t,e,r){t.exports=r.p+"fonts/OperatorMonoSSm-BookItalic.woff2"}]);
//# sourceMappingURL=app-legacy.5ddada5999836c8c5ac0.js.map