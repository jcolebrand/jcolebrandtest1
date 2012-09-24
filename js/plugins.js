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

/*!
jQuery Browser Plugin
  * Version 2.3
  * 2008-09-17 19:27:05
  * URL: http://jquery.thewikies.com/browser
  * Description: jQuery Browser Plugin extends browser detection capabilities and can assign browser selectors to CSS classes.
  * Author: Nate Cavanaugh, Minhchau Dang, & Jonathan Neal
  * Copyright: Copyright (c) 2008 Jonathan Neal under dual MIT/GPL license.
  * JSLint: This javascript file passes JSLint verification.
*/

(function ($) {
  $.browserTest = function (a, z) {
    var u = 'unknown', x = 'X', m = function (r, h) {
      for (var i = 0; i < h.length; i = i + 1) {
        r = r.replace(h[i][0], h[i][1]);
      }

      return r;
    }, c = function (i, a, b, c) {
      var r = {
        name: m((a.exec(i) || [u, u])[1], b)
      };

      r[r.name] = true;

      r.version = (c.exec(i) || [x, x, x, x])[3];

      if (r.name.match(/safari/) && r.version > 400) {
        r.version = '2.0';
      }

      if (r.name === 'presto') {
        r.version = ($.browser.version > 9.27) ? 'futhark' : 'linear_b';
      }
      r.versionNumber = parseFloat(r.version, 10) || 0;
      r.versionX = (r.version !== x) ? (r.version + '').substr(0, 1) : x;
      r.className = r.name + r.versionX;

      return r;
    };

    a = (a.match(/Opera|Navigator|Minefield|KHTML|Chrome/) ? m(a, [
      [/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ''],
      ['Chrome Safari', 'Chrome'],
      ['KHTML', 'Konqueror'],
      ['Minefield', 'Firefox'],
      ['Navigator', 'Netscape']
    ]) : a).toLowerCase();

    $.browser = $.extend((!z) ? $.browser : {}, c(a, /(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/, [], /(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));

    $.layout = c(a, /(gecko|konqueror|msie|opera|webkit)/, [
      ['konqueror', 'khtml'],
      ['msie', 'trident'],
      ['opera', 'presto']
    ], /(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);

    $.os = {
      name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris')
    };

    if (!z) {
      $('html').addClass([$.os.name, $.browser.name, $.browser.className, $.layout.name, $.layout.className].join(' '));
    }
  };

  $.browserTest(navigator.userAgent);
})(jQuery);
