/**
  reframe.js - Reframe.js: responsive iframes for embedded content
  @version v3.0.3
  @link https://github.com/yowainwright/reframe.ts#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)
  @license MIT
**/
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).reframe = t() }(this, function () { "use strict"; function t() { for (var e = 0, t = 0, n = arguments.length; t < n; t++)e += arguments[t].length; for (var i = Array(e), o = 0, t = 0; t < n; t++)for (var r = arguments[t], f = 0, d = r.length; f < d; f++, o++)i[o] = r[f]; return i } return function (e, s) { return void 0 === s && (s = "js-reframe"), ("string" == typeof e ? t(document.querySelectorAll(e)) : "length" in e ? t(e) : [e]).forEach(function (e) { var t, n, i, o, r, f, d, l; -1 !== e.className.split(" ").indexOf(s) || -1 < e.style.width.indexOf("%") || (i = e.getAttribute("height") || e.offsetHeight, o = e.getAttribute("width") || e.offsetWidth, r = ("string" == typeof i ? parseInt(i) : i) / ("string" == typeof o ? parseInt(o) : o) * 100, (f = document.createElement("div")).className = s, (d = f.style).position = "relative", d.width = "100%", d.paddingTop = r + "%", (l = e.style).position = "absolute", l.width = "100%", l.height = "100%", l.left = "0", l.top = "0", null !== (t = e.parentNode) && void 0 !== t && t.insertBefore(f, e), null !== (n = e.parentNode) && void 0 !== n && n.removeChild(e), f.appendChild(e)) }) } });

// Responsive video embeds
(function (window, document) {
    const makeVideoEmbedsResponsive = function makeVideoEmbedsResponsive() {
        const videoEmbeds = [
            'iframe[src*="youtube.com"]',
            'iframe[src*="vimeo.com"]'
        ];
        reframe(videoEmbeds.join(','));
    };
    document.addEventListener('DOMContentLoaded', makeVideoEmbedsResponsive);
})(window, document);
