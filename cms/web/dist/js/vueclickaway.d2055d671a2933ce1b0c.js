/*!
 * @project        Example Project
 * @name           vueclickaway.badef227af4fa34fe0fa.js
 * @author         Andrew Welch
<<<<<<< HEAD:cms/web/dist/js/vueclickaway.badef227af4fa34fe0fa.js
 * @build          Sun, Jan 26, 2020 10:51 PM ET
 * @release        c2ffbfdc0ef71ac1054bc3c5251d77802be0193a [develop]
=======
 * @build          Mon, Jan 27, 2020 5:21 AM ET
>>>>>>> feature/docker:cms/web/dist/js/vueclickaway.d2055d671a2933ce1b0c.js
 * @copyright      Copyright (c) 2020 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{97:function(e,n,t){"use strict";var i=t(79);i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+i.version);var o="_vue_clickaway_handler";function a(e,n,t){c(e);var i=t.context,a=n.value;if("function"==typeof a){var u=!1;setTimeout((function(){u=!0}),0),e[o]=function(n){var t=n.path||(n.composedPath?n.composedPath():void 0);if(u&&(t?t.indexOf(e)<0:!e.contains(n.target)))return a.call(i,n)},document.documentElement.addEventListener("click",e[o],!1)}}function c(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var u={bind:a,update:function(e,n){n.value!==n.oldValue&&a(e,n)},unbind:c},d={directives:{onClickaway:u}};n.version="2.2.2",n.directive=u,n.mixin=d}}]);
//# sourceMappingURL=vueclickaway.badef227af4fa34fe0fa.js.map