!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e,t){return t?t.querySelector(e):document.querySelector(e)},u=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=a.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,f=[],d=n(9);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(w(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(w(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function v(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function w(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=l||(l=g(t)),r=_.bind(null,n,s,!1),o=_.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=k.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=V.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=v(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&p(v(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function V(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function k(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(e,t,n){var r=n(3);n(4);r({required:{e:16,i:12,f:52,o:44,s:10.3,c:57,samsung:7,vivaldi:1.2},insecure:!0,test:!1,reminder:0,reminderClosed:1,onshow:function(){n(7)}})},function(e,t,n){"use strict";var r=new function(){var e=this;this.version="3.3.19",this.vsakt={c:"81",f:76,s:"13.1",e:83,i:12,ios:"13.3",samsung:11.1,o:68,e_a:45,o_a:55.2,y:"20.4.3",v:3,uc:"13.1.2"},this.vsinsecure_below={c:"78.0.3904.87",f:72,s:"11.1.1",e:16,i:11,ios:"12.3",samsung:9,o:62,o_a:52,y:"20",v:"2.7",uc:"12.10"},this.vsdefault={c:-3,f:-3,s:-1,e:-3,i:11,ios:10,samsung:9.1,o:-3,o_a:-3,y:20.3,v:2.6,uc:13,a:535},this.names={c:"Chrome",f:"Firefox",s:"Safari",e:"Edge",i:"Internet Explorer",ios:"iOS",samsung:"Samsung Internet",o:"Opera",o_a:"Opera",e_a:"Edge",y:"Yandex Browser",v:"Vivaldi",uc:"UC Browser",a:"Android Browser",x:"Other",silk:"Silk"},this.get_browser=function(t){t=(t||navigator.userAgent).replace("_",".");var n={n:"x",v:0,t:"other browser",age_years:void 0,no_device_update:!1,available:e.vsakt};function r(e,n){return!!new RegExp(n,"i").test(t)&&e}n.other=r("bot","Pagespeed|pingdom|Preview|ktxn|dynatrace|Ruxit|PhantomJS|Headless|Lighthouse|bot|spider|archiver|transcoder|crawl|checker|monitoring|prerender|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Expeditor")||r("TV","SMART-TV|SmartTV")||r("niche browser","OculusBrowser|Falkon|Brave|Classic Browser|Dorado|LBBROWSER|Focus|waterfox|Firefox/56.2|Firefox/56.3|Whale|MIDP|k-meleon|sparrow|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|QupZilla|Otter|Midori|qutebrowser")||r("mobile without upgrade path or landing page","OPR/44.12.2246|cros|kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10"),n.mobile=/iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(t),n.discontinued=/netscape|greenbrowser|camino|flot|fennec|galeon|coolnovo/i.test(t);for(var o=[["CriOS.VV","c","ios"],["FxiOS.VV","f","ios"],["Trident.*rv:VV","i","i"],["Trident.VV","io","i"],["UCBrowser.VV","uc","c"],["MSIE.VV","i","i"],["Edge.VV","e","e"],["Edg.VV","e","c"],["EdgA.VV","e_a","c"],["Vivaldi.VV","v","c"],["Android.*OPR.VV","o_a","c"],["OPR.VV","o","c"],["YaBrowser.VV","y","c"],["SamsungBrowser.VV","samsung","c"],["Silk.VV","silk","c"],["Chrome.VV","c","c"],["Firefox.VV","f","f"],[" OS.VV.*Safari","ios","ios"],["Version.VV.*Safari","s","s"],["Safari.VV","so","s"],["Opera.*Version.VV","o"],["Opera.VV","o"]],i="(\\d+\\.?\\d+\\.?\\d*\\.?\\d*)",s=0;s<o.length;s++)if(t.match(new RegExp(o[s][0].replace("VV",i),"i"))){n.n=o[s][1],n.engine=o[s][2];break}if(n.fullv=RegExp.$1,n.v=parseFloat(n.fullv),/windows.nt.5.0|windows.nt.4.0|windows.95|windows.98|os x 10.2|os x 10.3|os x 10.4|os x 10.5/i.test(t)&&(n.no_device_update=!0,n.available={}),"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1&&(n.n="ios",n.engine="ios",n.fullv=n.v=13,n.no_device_update=!0),/iphone|ipod|ipad|ios/i.test(t)){t.match(new RegExp("OS."+i,"i")),n.n="ios",n.fullv=RegExp.$1,n.v=parseFloat(n.fullv),n.engine="ios";var a=e.available_ios(t,n.v);a<12&&11===Math.round(n.v)&&(a=12),n.available={ios:a},parseFloat(n.available.ios)<11&&(n.no_device_update=!0)}if(/windows.nt.5.1|windows.nt.5.2|windows.nt.6.0/i.test(t)&&(n.available={c:49.9,f:52.9}),/os x 10.6/i.test(t)&&(n.available={s:"5.1.10",c:49.9,f:48},n.no_device_update=!0),/os x 10.7|os x 10.8/i.test(t)&&(n.available={s:"6.2.8",c:49.9,f:48},n.no_device_update=!0),/os x 10.9/i.test(t)&&(n.available.s="9.1.3"),/os x 10.10/i.test(t)&&(n.available.s="10.1.2"),t.indexOf("Android")>-1&&"s"===n.n){var u=parseInt((/WebKit\/([0-9]+)/i.exec(t)||0)[1],10)||2e3;u<=534&&(n.n="a",n.fullv=n.v=u,n.is_insecure=!0)}"so"===n.n&&(n.v=n.fullv=4,n.n="s"),"io"===n.n&&(n.n="i",n.v>6?n.v=11:n.v>5?n.v=10:n.v>4?n.v=9:n.v>3.1?n.v=8:n.v>3?n.v=7:n.v=9,n.fullv=n.v),n.t=e.names[n.n]+" "+n.v,n.is_supported=n.is_latest=e.vsakt[n.n]?e.less(n.fullv,e.vsakt[n.n])<=0:void 0,n.vmaj=Math.round(n.v),n.is_insecure=n.is_insecure||!e.vsinsecure_below[n.n]?void 0:1===e.less(n.fullv,e.vsinsecure_below[n.n]),("f"===n.n&&(68===n.vmaj||60===n.vmaj)||"i"===n.n&&11===n.vmaj)&&(n.is_supported=!0,n.is_insecure=!1,"f"===n.n&&(n.esr=!0)),"ios"===n.n&&n.v>10.3&&(n.is_supported=!0),"a"!==n.n&&"x"!==n.n||(n.t=e.names[n.n]),"e"===n.n&&(n.t=e.names[n.n]+" "+n.vmaj,n.is_supported=1!=e.less(n.fullv,"18.15063")),n.n in["c","f","o","e"]&&e.less(n.fullv,parseFloat(e.vsakt[n.n])-1)<=0&&(n.is_supported=!0);var l={f:7,c:8,o:8,i:1,e:1,s:1};l[n.n]&&(n.age_years=Math.round((e.vsakt[n.n]-n.v)/l[n.n]*10)/10||0);return n.engine&&(t.match(new RegExp({e:"Edge.VV",c:"Chrome.VV",f:"Firefox.VV",s:"Version.VV",i:"MSIE.VV",ios:" OS.VV"}[n.engine].replace("VV",i),"i")),n.engine_version=parseFloat(RegExp.$1)),n},this.semver=function(e){if(e instanceof Array)return e;var t=(e+".0.0.0").split(".");return[parseInt(t[0])||0,parseInt(t[1])||0,parseInt(t[2])||0,parseInt(t[3])||0]},this.less=function(t,n){t=e.semver(t),n=e.semver(n);for(var r=0;;r++){if(r>=t.length)return r>=n.length?0:1;if(r>=n.length)return-1;var o=n[r]-t[r];if(o)return o>0?1:-1}},this.available_ios=function(e,t){var n=Math.max(window.screen.height,window.screen.width),r=window.devicePixelRatio;return/ipad/i.test(e)?1024==n&&2==r?10:1112==n||1366==n?15:1024==n&&t<6?5:9:1==r?6:812==n?15:736==n||667==n?12:568==n?10:480==n?7:6}};window.$bu_getBrowser=r.get_browser;e.exports=function(e,t){var n,o=window.navigator,i=(e=window._buorgres=e||{}).l||(o.languages?o.languages[0]:null)||o.language||o.browserLanguage||o.userLanguage||document.documentElement.getAttribute("lang")||"en";e.llfull=i.replace("_","-").toLowerCase().substr(0,5),e.ll=e.llfull.substr(0,2),e.domain=void 0!==e.domain?e.domain:(/file:/.test(location.href)?"https:":"")+"//browser-update.org",e.apiver=e.api||e.c||-1,e.jsv=r.version;var s=e.apiver<2018&&{i:10,f:11,o:21,s:8,c:30}||{},a=e.notify||e.vs||{};a.e=a.e||a.i,a.i=a.i||a.e;var u=e.required||{};for(n in u.e=u.e||u.i,u.i||(u.i=u.e,r.vsakt.i=r.vsakt.e),r.vsdefault)a[n]&&(r.less(a[n],0)>=0?u[n]=parseFloat(r.vsakt[n])+parseFloat(a[n])+.01:u[n]=parseFloat(a[n])+.01),n in u&&null!=u[n]||(u[n]=r.vsdefault[n]),r.less(u[n],0)>=0&&(u[n]=parseFloat(r.vsakt[n])+parseFloat(u[n])),s[n]&&1===r.less(u[n],s[n])&&(u[n]=s[n]);if(u.ios=u.ios||u.s,u.i<79&&u.i>65&&(u.i=u.i-60),u.e<79&&u.e>65&&(u.e=u.e-60),e.required=u,e.reminder=e.reminder<.1?0:e.reminder||168,e.reminderClosed=e.reminderClosed<1?0:e.reminderClosed||168,e.onshow=e.onshow||function(e){},e.onclick=e.onclick||function(e){},e.onclose=e.onclose||function(e){},e.pageurl=e.pageurl||location.hostname||"x",e.newwindow=!1!==e.newwindow,e.test=t||e.test||"#test-bu"===location.hash||!1,e.ignorecookie=e.ignorecookie||"#ignorecookie-bu"===location.hash,e.reasons=[],e.hide_reasons=[],e.notified=function(e){var t=e.browser=r.get_browser(e.override_ua);return e.is_below_required=u[t.n]&&1===r.less(t.fullv,u[t.n]),!1!==t.other&&e.hide_reasons.push("is other browser:"+t.other),t.esr&&!e.notify_esr&&e.hide_reasons.push("Extended support (ESR)"),t.mobile&&!1===e.mobile&&e.hide_reasons.push("do not notify mobile"),(e.apiver<2018.5||e.apiver>2020.1)&&t.is_latest&&e.hide_reasons.push("is latest version of the browser"),t.no_device_update&&e.hide_reasons.push("no device update"),e.is_below_required&&e.reasons.push("below required"),(e.insecure||e.unsecure)&&t.is_insecure&&e.reasons.push("insecure"),e.unsupported&&!t.is_supported&&e.reasons.push("no vendor support"),!(e.hide_reasons.length>0)&&e.reasons.length>0}(e),e.already_shown=document.cookie.indexOf("browserupdateorg=pause")>-1&&!e.ignorecookie,e.test||e.notified&&!e.already_shown)if(e.setCookie=function(e){document.cookie="browserupdateorg=pause; expires="+new Date((new Date).getTime()+36e5*e).toGMTString()+"; path=/; SameSite=None; Secure"},e.already_shown&&(e.ignorecookie||e.test)&&e.setCookie(-10),e.reminder>0&&e.setCookie(e.reminder),e.nomessage)e.onshow(e);else{var l=document.createElement("script");l.src=e.jsshowurl||e.domain+"/update.show.min.js",document.body.appendChild(l)}}},function(e,t,n){n(5);e.exports=function(e){var t="";return t+='<div class="message"><div class="message__text">Message</div></div>'}},function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty;function o(e,t){return Array.isArray(e)?function(e,t){for(var n,r="",i="",s=Array.isArray(t),a=0;a<e.length;a++)(n=o(e[a]))&&(s&&t[a]&&(n=u(n)),r=r+i+n,i=" ");return r}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var o in e)o&&e[o]&&r.call(e,o)&&(t=t+n+o,n=" ");return t}(e):e||""}function i(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)r.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function s(e,t,n,r){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(r?e:e+'="'+e+'"');var o=typeof t;return"object"!==o&&"function"!==o||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=u(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var r=t[0],o=1;o<t.length;o++)r=e(r,t[o]);return r}for(var s in n)if("class"===s){var a=t[s]||[];t[s]=(Array.isArray(a)?a:[a]).concat(n[s]||[])}else if("style"===s){a=(a=i(t[s]))&&";"!==a[a.length-1]?a+";":a;var u=i(n[s]);u=u&&";"!==u[u.length-1]?u+";":u,t[s]=a+u}else t[s]=n[s];return t},t.classes=o,t.style=i,t.attr=s,t.attrs=function(e,t){var n="";for(var a in e)if(r.call(e,a)){var u=e[a];if("class"===a){u=o(u),n=s(a,u,!1,t)+n;continue}"style"===a&&(u=i(u)),n+=s(a,u,!1,t)}return n};var a=/["&<>]/;function u(e){var t=""+e,n=a.exec(t);if(!n)return e;var r,o,i,s="";for(r=n.index,o=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}o!==r&&(s+=t.substring(o,r)),o=r+1,s+=i}return o!==r?s+t.substring(o,r):s}t.escape=u,t.rethrow=function e(t,r,o,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&r||i))throw t.message+=" on line "+o,t;try{i=i||n(6).readFileSync(r,"utf8")}catch(n){e(t,null,o)}var s=3,a=i.split("\n"),u=Math.max(o-s,0),l=Math.min(a.length,o+s);s=a.slice(u,l).map((function(e,t){var n=t+u+1;return(n==o?"  > ":"    ")+n+"| "+e})).join("\n");throw t.path=r,t.message=(r||"Pug")+":"+o+"\n"+s+"\n\n"+t.message,t}},function(e,t){},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"html{margin-top:0 !important}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".message__text{color:red;font-size:70px}\n",""])}]);