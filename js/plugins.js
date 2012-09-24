// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.
/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(a,b,c){function e(a){return a}function f(a){return decodeURIComponent(a.replace(d," "))}var d=/\+/g;var g=a.cookie=function(d,h,i){if(h!==c){i=a.extend({},g.defaults,i);if(h===null){i.expires=-1}if(typeof i.expires==="number"){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}h=g.json?JSON.stringify(h):String(h);return b.cookie=[encodeURIComponent(d),"=",g.raw?h:encodeURIComponent(h),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}var l=g.raw?e:f;var m=b.cookie.split("; ");for(var n=0,o;o=m[n]&&m[n].split("=");n++){if(l(o.shift())===d){var p=l(o.join("="));return g.json?JSON.parse(p):p}}return null};g.defaults={};a.removeCookie=function(b,c){if(a.cookie(b)!==null){a.cookie(b,null,c);return true}return false}})(jQuery,document)
