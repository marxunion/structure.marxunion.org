/**
 * Carrot Search Circles HTML5 (demo variant)
 * v2.3.8, master/c377a6bc, build CIRCLES-SOFTWARE-DIST-92, Jan 19, 2021
 * 
 * Carrot Search confidential.
 * Copyright 2002-2021, Carrot Search s.c, All Rights Reserved.
 */
(function () {/*
 Includes Hammer.JS (1.0.3), http://eightmedia.github.com/hammer.js
 Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>, MIT license.
*/
    function aa(a, b) { return new ia(a, b || {}) } var ka = { stop_browser_behavior: { userSelect: "none", touchCallout: "none", touchAction: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } }, la = navigator.pointerEnabled || navigator.msPointerEnabled, ma = {}, na = !1;
    function oa(a) { return function () { if (1 <= arguments.length) { var b = arguments[0]; if ("pageX" in b && !b.pageX && b.clientX) { var c = b.target.ownerDocument || document, f = c.documentElement; c = c.body; b.pageX_ || (b.pageX_ = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0)); b.pageY_ || (b.pageY_ = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)) } } a.apply(this, arguments) } } function qa(a) { return "pageX_" in a ? a.pageX_ : a.pageX }
    function sa(a) { return "pageY_" in a ? a.pageY_ : a.pageY } function ta() { if (!na) { ua.ad(); for (var a in va) va.hasOwnProperty(a) && G.register(va[a]); ua.vb(document, "move", G.cb); ua.vb(document, "end", G.hd); na = !0 } } function ia(a, b) { var c = this; ta(); this.element = a; this.options = K.extend(K.extend({}, ka), b || {}); this.options.fe && K.ee(this.element, this.options.fe); ua.vb(a, "start", function (f) { G.de(c, f) }); return this }
    function wa(a, b, c) { var f = document.createEvent("Event"); f.initEvent(b, !0, !0); f.Rb = c; a.element.dispatchEvent(f) } ia.prototype = { na: function (a, b) { a = a.split(" "); for (var c = 0; c < a.length; c++)this.element.addEventListener(a[c], oa(b), !1); return this } };
    var xa = null, za = !1, Aa = !1, ua = function () {
        var a = {
            Yc: function (b, c, f) { c = c.split(" "); for (var e = 0; e < c.length; e++)b.addEventListener(c[e], oa(f), !1) }, vb: function (b, c, f) {
                a.Yc(b, ma[c], function (e) {
                    var m = e.type.toLowerCase(); if (m.match(/mouseup/) && Aa) Aa = !1; else {
                        if (m.match(/touch/) || m.match(/mouse/) && 1 === e.which || la && m.match(/down/)) za = !0; m.match(/touch|pointer/) && (Aa = !0); !za || Aa && m.match(/mouse/) || (la && "end" != c && Ba.Lc(c, e), "end" === c && null !== xa ? e = xa : xa = e, f.call(G, a.Zc(b, c, e)), la && "end" == c && Ba.Lc(c, e)); m.match(/up|cancel|end/) &&
                            (za = !1, xa = null, Ba.reset())
                    }
                })
            }, ad: function () { var b; la ? b = ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"] : b = ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"]; ma.start = b[0]; ma.move = b[1]; ma.end = b[2] }, gb: function (b) { return la ? Ba.gb() : b.touches ? b.touches : [{ identifier: 1, pageX: qa(b), pageY: sa(b), target: b.target }] }, Zc: function (b, c, f) {
                b = a.gb(f, c); var e = "touch"; if (f.type.match(/mouse/) || Ba.Dd("mouse", f)) e = "mouse"; return {
                    M: K.pd(b),
                    timestamp: f.timestamp || (new Date).getTime(), target: f.target, touches: b, da: c, pointerType: e, ce: f, preventDefault: function () { f.Jd && f.Jd(); f.preventDefault && f.preventDefault() }, stopPropagation: function () { f.stopPropagation() }, Ua: function () { return G.Ua() }
                }
            }
        }; return a
    }(), Ba = function () {
        var a = {
            Ra: {}, gb: function () { var b = a.Ra, c = []; null != b && Object.keys(b).sort().forEach(function (f) { c.push(b[f]) }); return c }, Lc: function (b, c) { "end" == b ? delete a.Ra[c.pointerId] : (c.identifier = c.pointerId, a.Ra[c.pointerId] = c) }, Dd: function (b,
                c) { if (!c.pointerType) return !1; var f = {}; f.mouse = c.pointerType == c.MSPOINTER_TYPE_MOUSE || "mouse" == c.pointerType; f.touch = c.pointerType == c.MSPOINTER_TYPE_TOUCH || "touch" == c.pointerType; f.pen = c.pointerType == c.MSPOINTER_TYPE_PEN || "pen" == c.pointerType; return f[b] }, Ee: function () { return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"] }, reset: function () { a.Ra = {} }
        }; return a
    }(), K = function () {
        var a = {
            extend: function (b, c) { for (var f in c) b[f] = c[f]; return b },
            pd: function (b) { for (var c = [], f = [], e = 0, m = b.length; e < m; e++)c.push(qa(b[e])), f.push(sa(b[e])); return { pageX: (Math.min.apply(Math, c) + Math.max.apply(Math, c)) / 2, pageY: (Math.min.apply(Math, f) + Math.max.apply(Math, f)) / 2 } }, td: function (b, c, f) { return { x: Math.abs(c / b) || 0, y: Math.abs(f / b) || 0 } }, fb: function (b, c) { return 180 * Math.atan2(sa(c) - sa(b), qa(c) - qa(b)) / Math.PI }, qd: function (b, c) { return Math.abs(qa(b) - qa(c)) >= Math.abs(sa(b) - sa(c)) ? 0 < qa(b) - qa(c) ? "left" : "right" : 0 < sa(b) - sa(c) ? "up" : "down" }, Ja: function (b, c) {
                var f = qa(c) -
                    qa(b); b = sa(c) - sa(b); return Math.sqrt(f * f + b * b)
            }, sd: function (b, c) { return 2 <= b.length && 2 <= c.length ? a.Ja(c[0], c[1]) / a.Ja(b[0], b[1]) : 1 }, rd: function (b, c) { return 2 <= b.length && 2 <= c.length ? a.fb(c[1], c[0]) - a.fb(b[1], b[0]) : 0 }, kb: function (b) { return "up" == b || "down" == b }, ee: function (b, c) {
                var f = "webkit khtml moz ms o ".split(" "); if (c && b.style) {
                    for (var e = 0; e < f.length; e++)for (var m in c) if (c.hasOwnProperty(m)) { var v = m; f[e] && (v = f[e] + v.charAt(0).toUpperCase() + v.substring(1)); b.style[v] = c[m] } "none" == c.userSelect && (b.onselectstart =
                        function () { return !1 })
                }
            }
        }; return a
    }(), G = function () {
        var a = {
            xa: [], current: null, wc: null, stopped: !1, de: function (b, c) { a.current || (a.stopped = !1, a.current = { ac: b, Db: K.extend({}, c), ob: !1, name: "" }, a.cb(c)) }, cb: function (b) { if (a.current && !G.stopped) { b = a.ld(b); for (var c = a.current.ac.options, f = 0, e = a.xa.length; f < e; f++) { var m = a.xa[f]; if (!a.stopped && !1 !== c[m.name] && !1 === m.fa.call(m, b, a.current.ac)) { a.Ua(); break } } a.current && (a.current.ob = b) } }, hd: function (b) { a.cb(b); a.Ua() }, Ua: function () {
                a.wc = K.extend({}, a.current);
                a.current = null; a.stopped = !0
            }, ld: function (b) {
                var c = a.current.Db; if (c && (b.touches.length != c.touches.length || b.touches === c.touches)) { c.touches = []; for (var f = 0, e = b.touches.length; f < e; f++)c.touches.push(K.extend({}, b.touches[f])) } f = b.timestamp - c.timestamp; e = qa(b.M) - qa(c.M); var m = sa(b.M) - sa(c.M), v = K.td(f, e, m); K.extend(b, { $c: f, deltaX: e, deltaY: m, velocityX: v.x, velocityY: v.y, eb: K.Ja(c.M, b.M), angle: K.fb(c.M, b.M), direction: K.qd(c.M, b.M), scale: K.sd(c.touches, b.touches), rotation: K.rd(c.touches, b.touches), Db: c });
                return b
            }, register: function (b) { var c = b.N || {}; "undefined" == typeof c[b.name] && (c[b.name] = !0); K.extend(ka, c); b.index = b.index || 1E3; a.xa.push(b); a.xa.sort(function (f, e) { return f.index < e.index ? -1 : f.index > e.index ? 1 : 0 }); return a.xa }
        }; return a
    }(), va = va || {};
    va.te = function () { var a = { name: "hold", index: 10, N: { Ad: 500, zd: 1 }, Va: null, fa: function (b, c) { switch (b.da) { case "start": clearTimeout(a.Va); G.current.name = a.name; a.Va = setTimeout(function () { G.current.name == a.name && wa(c, a.name, b) }, c.options.Ad); break; case "move": b.eb > c.options.zd && clearTimeout(a.Va); break; case "end": clearTimeout(a.Va) } } }; return a }();
    va.we = { name: "tap", index: 100, N: { he: 250, ge: 10, bd: 20, cd: 300 }, fa: function (a, b) { if ("end" == a.da) { var c = G.wc; a.$c > b.options.he || a.eb > b.options.ge || (G.current.name = c && "tap" == c.name && a.timestamp - c.ob.timestamp < b.options.cd && K.Ja(a.M, c.Db.M) < b.options.bd ? "doubletap" : "tap", wa(b, G.current.name, a)) } } };
    va.ve = function () { var a = { name: "swipe", index: 40, N: { yc: 1, zc: .7 }, fa: function (b, c) { "end" != b.da || 0 < c.options.yc && b.touches.length > c.options.yc || !(b.velocityX > c.options.zc || b.velocityY > c.options.zc) || (wa(c, a.name, b), wa(c, a.name + b.direction, b)) } }; return a }();
    va.se = function () {
        var a = {
            name: "drag", index: 50, N: { gd: 10, Mb: 1, dd: !1, ed: !1, fd: !1 }, D: !1, fa: function (b, c) {
                if (G.current.name != a.name && a.D) wa(c, a.name + "end", b), a.D = !1; else if (!(0 < c.options.Mb && b.touches.length > c.options.Mb)) switch (b.da) {
                    case "start": a.D = !1; break; case "move": if (b.eb < c.options.gd && G.current.name != a.name) break; G.current.name = a.name; var f = G.current.ob.direction; c.options.fd && f !== b.direction && (b.direction = K.kb(f) ? 0 > b.deltaY ? "up" : "down" : 0 > b.deltaX ? "left" : "right"); a.D || (wa(c, a.name + "start", b), a.D =
                        !0); wa(c, a.name, b); wa(c, a.name + b.direction, b); (c.options.ed && K.kb(b.direction) || c.options.dd && !K.kb(b.direction)) && b.preventDefault(); break; case "end": a.D && wa(c, a.name + "end", b), a.D = !1
                }
            }
        }; return a
    }();
    va.xe = function () {
        var a = {
            name: "transform", index: 45, N: { Kc: .01, Jc: 1, ne: !1 }, D: !1, fa: function (b, c) {
                if (G.current.name != a.name && a.D) wa(c, a.name + "end", b), a.D = !1; else if (!(2 > b.touches.length)) switch (c.options.ne && b.preventDefault(), b.da) {
                    case "start": a.D = !1; break; case "move": var f = Math.abs(1 - b.scale), e = Math.abs(b.rotation); if (f < c.options.Kc && e < c.options.Jc) break; G.current.name = a.name; a.D || (wa(c, a.name + "start", b), a.D = !0); wa(c, a.name, b); e > c.options.Jc && wa(c, "rotate", b); f > c.options.Kc && (wa(c, "pinch", b), wa(c,
                        "pinch" + (1 > b.scale ? "in" : "out"), b)); break; case "end": a.D && wa(c, a.name + "end", b), a.D = !1
                }
            }
        }; return a
    }(); va.Touch = function () { var a = { name: "touch", index: -Infinity, N: { xb: !1 }, fa: function (b, c) { c.options.xb && b.preventDefault(); "start" == b.da && wa(c, a.name, b) } }; return a }(); va.ue = function () { var a = { name: "release", index: Infinity, fa: function (b, c) { "end" == b.da && wa(c, a.name, b) } }; return a }(); var X = function () {
        var a = {}, b = Array.prototype, c = Object.prototype, f = b.slice, e = b.concat, m = c.toString, v = c.hasOwnProperty; c = Object.keys; var x = b.forEach, u = b.filter, z = b.map; a.isArray = Array.isArray || function (p) { return "[object Array]" == m.call(p) }; a.Ke = function (p) { return "[object Arguments]" == m.call(p) }; a.ga = function (p) { return "[object Function]" == m.call(p) }; a.jb = function (p) { return "[object String]" == m.call(p) }; a.Na = function (p) { return "[object Number]" == m.call(p) }; a.Le = function (p) { return "[object Date]" == m.call(p) };
        a.Me = function (p) { return "[object RegExp]" == m.call(p) }; a.u = function (p) { return void 0 === p }; a.ha = function (p) { return p === Object(p) }; a.Be = function (p, q, r) { r || (r = 1E-6); p -= q; return p < r && p > -r }; a.P = function (p, q) { return a.ha(p) ? q in p : !1 }; a.hasOwnProperty = function (p, q) { return v.call(p, q) }; a.forEach = function (p, q, r) { if (null != p) if (x && p.forEach === x) p.forEach(q, r); else if (p.length === +p.length) for (var y = 0, A = p.length; y < A; y++)q.call(r, p[y], y, p); else for (y in p) a.hasOwnProperty(p, y) && q.call(r, p[y], y, p) }; a.filter = function (p,
            q, r) { if (null == p) return []; if (u && p.filter === u) return p.filter(q, r); var y = []; a.forEach(p, function (A, D, J) { q.call(r, A, D, J) && y.push(A) }); return y }; a.map = function (p, q, r) { if (null == p) return []; if (z && p.map === z) return p.map(q, r); var y = []; a.forEach(p, function (A, D, J) { y.push(q.call(r, A, D, J)) }); return y }; a.extend = function (p, q) { for (var r = 1, y = arguments.length; r < y; r++) { var A = arguments[r], D; for (D in A) p[D] = A[D] } return p }; a.keys = c || function (p) {
                if (!a.ha(p)) throw new TypeError; var q = [], r; for (r in p) a.hasOwnProperty(p, r) &&
                    q.push(r); return q
            }; a.Id = function (p, q) { for (var r = {}, y = e.apply(b, f.call(arguments, 1)), A = 0, D = y.length; A < D; A++) { var J = y[A]; J in p && (r[J] = p[J]) } return r }; a.clone = function (p) { return a.isArray(p) ? p.slice() : a.extend({}, p) }; a.N = function (p, q) { a.forEach(f.call(arguments, 1), function (r) { for (var y in r) null == p[y] && (p[y] = r[y]) }); return p }; a.contains = function (p, q) { return null == p ? !1 : -1 != p.indexOf(q) }; a.md = function (p) { for (var q = 0, r = arguments.length; q < r; q++)if (!a.u(arguments[q])) return arguments[q] }; return a
    }(); var Ca = function () { var a = window.performance && (window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow); return function () { return a && a.call(window.performance) || (new Date).getTime() } }(); var Da, Ea, Fa, Ga, Ha; (function () { function a(f) { return function (e) { return Math.pow(e, f) } } function b(f) { return function (e) { return 1 - Math.pow(1 - e, f) } } function c(f) { return function (e) { return 1 > (e *= 2) ? .5 * Math.pow(e, f) : 1 - .5 * Math.abs(Math.pow(2 - e, f)) } } Da = function (f) { return f }; Ea = a(3); Fa = b(3); Ga = c(3); a(2); b(2); Ha = c(2) })(); function Ia() {
        function a(f) { if (!f.type) throw "Events must have a type."; for (var e = "on" + f.type.substr(0, 1).toUpperCase() + f.type.substring(1), m = b.slice(0), v = 0; v < m.length; v++) { var x = m[v][e]; x && x.call(x, f); if (!0 === f.stopPropagation) break } return f.stopPropagation } var b = [], c; this.addEventListener = function (f) { b.push(f) }; this.removeEventListener = function (f) { for (var e = 0; e < b.length; e++)b[e] === f && b.splice(e, 1) }; this.Cb = function (f) { c = f }; this.I = function (f) {
            a(f); !0 !== f.stopPropagation && Ja(this, function (e) {
                e.I &&
                e.I(f)
            })
        }; this.Y = function (f) { a(f); c && c.Y(f) }
    } function La() { Ia.call(this); var a = this; a.addEventListener({ onAddedToStage: function (b) { a.za = b.za; a.Cb(b.za) }, onRemovedFromStage: function () { a.za = void 0; a.Cb(void 0) } }); a.G = function () { a.Y({ type: "dirty", target: this }) } } function Ma() { Ia.call(this); this.o = this.children = []; this.L = {}; this.i = function (a, b) { this.o.push(b); this.L[a] = b; b.Cb(this) } }
    function Na(a, b) {
        function c() { f.I({ type: "paint" }) } Ia.call(this); this.children = []; this.name = b ? b : "unnamed"; this.canvas = a; this.context = a.getContext("2d"); var f = this, e = !1; this.addEventListener({ onDirty: function () { e || (e = !0, Oa.once(c)) }, onPaint: function (m) { a = a || this.canvas; var v = a.getContext("2d"); v.clearRect(0, 0, a.width, a.height); m.context = v; e = !1 }, onLayout: function (m) { var v = f.canvas; if (v.width != m.w || v.height != m.m) v.width = m.w, v.height = m.m } }); this.i = function (m) {
            for (var v = 0; v < arguments.length; v++)this.children.push(arguments[v]),
                arguments[v].I({ type: "addedToStage", za: f })
        }; this.o = function (m) { for (var v = 0; v < arguments.length; v++)for (var x = 0; x < this.children.length;)this.children[x] === arguments[v] ? (this.children.splice(x, 1), arguments[v].I({ type: "removedFromStage", za: f })) : x++ }
    }; var Pa = new function () { this.o = function (a, b) { for (var c = 0; c < a.length; c++) { var f = a[c], e = a[c + 1] || a[0]; if (0 > (b.y - f.y) * (e.x - f.x) - (b.x - f.x) * (e.y - f.y)) return !1 } return !0 }; this.L = function (a, b) { return a.x >= b.x && a.y >= b.y && a.x <= b.x + b.w && a.y <= b.y + b.m }; this.i = function (a, b) { a.beginPath(); var c = b[0]; a.moveTo(c.x, c.y); for (var f = 1; f < b.length; f++)c = b[f], a.lineTo(c.x, c.y) }; return this }; var Qa = new function () {
        function a(e, m) { for (var v in m) e.style[v] = m[v] } function b(e, m, v, x, u, z) {
            var p = x + "@" + v; if (!X.hasOwnProperty(f, p)) {
                var q = document.createElement("div"); a(q, { visibility: "hidden", position: "absolute", top: 0, left: 0, "line-height": "normal" }); var r = document.createElement("span"); r.appendChild(document.createTextNode("Ay|")); a(r, { "font-family": x, "font-size": v + "px" }); q.appendChild(r); var y = document.createElement("div"); a(y, { display: "inline-block", width: "1px", height: "0" }); q.appendChild(y);
                document.body.appendChild(q); try { y.style.verticalAlign = "baseline"; var A = y.offsetTop - r.offsetTop; y.style.verticalAlign = "bottom"; var D = y.offsetTop - r.offsetTop; f[p] = { ye: A, Ae: D - A, height: D, Xc: A } } finally { document.body.removeChild(q) }
            } p = f[p]; u = p.height * u; x = v + "px " + x; e.font = x; q = 0; r = []; y = !0; for (A = p.height; 0 < m.length && q + A <= z.m;)D = c(e, m, z.w), D.x = 0, D.y = q, r.push(D), m = D.Ac, y = y && D.Ha, q += A, 0 < m.length && (q += u); return { lines: r, font: x, Gb: 0 < m.length, Ha: y, Ic: q, nd: p, fontSize: v }
        } function c(e, m, v) {
            m = m.trim(); for (var x = 0, u =
                m.length + 1; 1 < u - x;) { var z = Math.floor((u + x) / 2), p = e.measureText(m.substring(0, z)).width; if (p == v) { x = z; break } p < v ? x = z : u = z } v = !0; if (x < m.length) { for (u = x; 0 < u && " " != m.charAt(u);)u--; (v = 0 < u) && (x = u) } u = m.substring(0, x); return { text: u, width: e.measureText(u).width, Ac: m.substring(x).trim(), Ha: v }
        } var f = {}; this.i = function (e, m, v, x, u, z, p, q, r) {
            if (X.jb(m)) {
                p = Number(p); var y = String.fromCharCode(8230), A = r ? r.Pa : void 0; if (!A) {
                    u = Math.floor(u); z = Math.floor(z); var D; if (1 >= z - u) for (D = z; D >= u; D--) {
                        var J = b(e, m, D, x, p, v); if (!J.Gb && J.Ha) {
                            A =
                            J; break
                        }
                    } else for (; 1 < z - u;)D = Math.floor((z + u) / 2), J = b(e, m, D, x, p, v), J.Gb || !J.Ha ? z = D : (u = D, A = J); A || (A = J); if (A) {
                        if (A.Gb && 0 < A.lines.length) for (e.font = A.font, x = A.lines[A.lines.length - 1], p = x.text; 0 < p.length;) { for (m = p.length - 1; 0 < m && " " == p.charCodeAt(m);)m--; p = p.substring(0, m); m = c(e, p + y, v.w); if (0 == m.Ac.length) { A.lines.pop(); m.x = 0; m.y = x.y; A.lines.push(m); break } } m = (v.m - A.Ic) / 2; for (y = 0; y < A.lines.length; y++)A.lines[y].y += m; for (y = 0; y < A.lines.length; y++)m = A.lines[y], m.x = (v.w - m.width) / 2; if (r) {
                            m = A.lines; if (0 < m.length) for (x =
                                A.Jb = { x: Math.floor(m[0].x), y: Math.floor(m[0].y), w: Math.ceil(m[0].width), m: Math.ceil(A.Ic) }, y = 1; y < m.length; y++)x.x = Math.min(x.x, Math.floor(m[y].x)), x.w = Math.max(x.w, Math.ceil(m[y].width)); r.Pa = A
                        }
                    }
                } if (A) { e.save(); e.textBaseline = "alphabetic"; e.translate(0, A.nd.Xc); e.translate(v.x, v.y); e.font = A.font; e.fillStyle = q; for (y = 0; y < A.lines.length; y++)m = A.lines[y], e.fillText(m.text, m.x, m.y); e.restore() }
            }
        }; return this
    }; var Ra = 2 * Math.PI; function Sa(a) { return a * Math.PI / 180 } function Ta(a) { if (0 <= a && 360 > a) return a; a %= 360; return 0 > a ? a + 360 : a } function Ua(a) { if (0 <= a && a < Ra) return a; a %= Ra; return 0 > a ? Ra + a : a } function Va(a, b) { if (a == b) return 0; if (0 > a || a > Ra) a = Ua(a); if (0 > b || b > Ra) b = Ua(b); return a < b ? b - a : a > Math.PI ? Ra - a + b : Ra - b + a }; var Oa = function () {
        function a() {
            if (!x) throw "Panic. onFrame called from unregistered state?"; var u = Ca(); v = v.filter(function (q) { return null !== q }); f.frames++; f.Nd = v.length; f.ic = Math.max(f.ic, v.length); for (var z = 0; z < v.length; z++) { var p = v[z]; null !== p && (p.Kb.call(p.context), X.Na(p.repeat) && (p.repeat = p.repeat - 1, 0 >= p.repeat && (v[z] = null))) } u = Ca() - u; f.totalTime += u; f.hc = Math.max(f.hc, u); e += u; for (f.wa.push(u); 100 < f.wa.length;)e -= f.wa.shift(); f.od = f.wa.length / (e / 1E3); f.me = e / f.wa.length; v = v.filter(function (q) {
                return null !==
                    q
            }); x = !1; b()
        } function b() { 0 < v.length && !x && (x = !0, m(a)) } var c = {}, f = c.Pe = { frames: 0, totalTime: 0, me: 0, od: 0, Nd: 0, ic: 0, hc: 0, wa: [] }, e = 0, m = function () { return /iPad|iPhone/.test(window.navigator.userAgent) ? function (u) { window.setTimeout(u, 0) } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (u) { var z = 0; window.setTimeout(function () { var p = Ca(); u(); z = Ca() - p }, 16 > z ? 16 - z : 0) } }(), v = [], x = !1; c.repeat =
            function (u, z, p) { c.cancel(u); v.push({ Kb: u, context: p, repeat: z }); b() }; c.once = function (u, z) { c.repeat(u, 1, z) }; c.cancel = function (u) { for (var z = 0; z < v.length; z++) { var p = v[z]; null !== p && p.Kb === u && (v[z] = null) } }; return c
    }(); var Wa = function () {
        function a(v, x, u) {
            var z = this, p; this.id = e++; this.name = u ? u : "{unnamed on " + v + "}"; this.target = function () { return v }; this.hb = function () { return -1 != m.indexOf(z) }; this.start = function () { if (!z.hb()) { if (-1 == m.indexOf(z)) { var q = Ca(); !0 === z.oc(q) && (m = m.slice(), m.push(z)) } 0 < m.length && Oa.repeat(b) } return this }; this.stop = function () { f(z); return this }; this.oc = function (q) {
                if (0 !== x.length) {
                    if (X.u(p)) { p = 0; var r = x[p]; r.before && r.before.call(r, q, z) } else r = x[p]; for (; p < x.length;) {
                        if (r.Aa && r.Aa.call(r, q, z)) return !0;
                        r.after && r.after.call(r, q, z); X.u(p) && (p = -1); ++p < x.length && (r = x[p], r.before && r.before.call(r, q, z))
                    }
                } return !1
            }
        } function b() { c(); 0 == m.length && Oa.cancel(b) } function c() { var v = Ca(); m.forEach(function (x) { !0 !== x.oc(v) && f(x) }) } function f(v) { m = m.filter(function (x) { return x !== v }) } var e = 0, m = []; a.active = function (v) { return X.u(v) ? m.slice() : m.filter(function (x) { return x.target() === v }) }; a.K = function () {
            function v() { throw "No instances."; } function x(q) {
                function r(L) { return X.ga(L) ? L.call(void 0) : L } var y = q.target, A =
                    q.duration, D = q.R, J, U; this.before = function () { J = {}; for (var L in q.C) L in y && (J[L] = { start: X.u(q.C[L].start) ? y[L] : r(q.C[L].start), end: X.u(q.C[L].end) ? y[L] : r(q.C[L].end), easing: X.u(q.C[L].easing) ? Da : q.C[L].easing }); U = Ca() }; this.Aa = function () { var L = Ca() - U; L = 0 === A ? 1 : Math.min(A, L) / A; for (var Q in J) { var ca = J[Q]; y[Q] = ca.start + (ca.end - ca.start) * ca.easing(L) } D && D.call(y, L); return 1 > L }
            } function u(q, r) { this.Aa = function () { q.call(r); return !1 } } function z(q) {
                var r; this.before = function (y) { r = y + q }; this.Aa = function (y) {
                    return y <
                        r
                }
            } function p(q) { if (!Array.isArray(q)) throw "An array of timelines required."; this.before = function () { q.forEach(function (r) { r.start() }) }; this.Aa = function () { for (var r = 0; r < q.length; r++)if (q[r].hb()) return !0; return !1 } } v.na = function (q, r) {
                return new function () {
                    var y = []; this.i = function (A) { y.push(A); return this }; this.wait = function (A) { return this.i(new z(A)) }; this.call = function (A, D) { X.u(D) && (D = q); return this.i(new u(A, D)) }; this.X = function (A) { X.u(A.target) && (A.target = q); return this.i(new x(A)) }; this.wb = function (A) { return this.i(new p(A)) };
                    this.done = function () { return new a(q, y, r) }; this.start = function () { return this.done().start() }
                }
            }; v.O = function (q, r) { a.active(q).forEach(function (y) { y.stop() }); return v.na(q, r) }; return v
        }(); return a
    }(); var Xa = new function () {
        function a(b, c, f, e, m, v, x, u, z, p, q, r, y, A, D) { b.save(); b.beginPath(); b.moveTo(e, m); b.lineTo(v, x); b.lineTo(u, z); b.clip(); v -= e; x -= m; u -= e; z -= m; r -= p; y -= q; A -= p; D -= q; f = r * D - A * y; if (0 != f) { var J = 1 / f; f = (D * v - y * u) * J; y = (D * x - y * z) * J; v = (r * u - A * v) * J; x = (r * z - A * x) * J; b.transform(f, y, v, x, e - f * p - v * q, m - y * p - x * q); b.drawImage(c, 0, 0) } b.restore() } this.i = function (b, c, f, e, m, v, x, u, z, p, q, r, y, A, D, J, U, L) {
            z = Math.ceil((u - x) / z); v = Math.ceil((m - e) / v); if (!(0 >= z || 0 >= v)) for (var Q = function (d, g) {
                var h = (d - x) / (u - x), k = (g - e) / (m - e);
                J && (h = 1 - h); U || (k = 1 - k); if (D) { var l = h; h = k; k = l } return { x: c + g * Math.cos(d), y: f + g * Math.sin(d), pa: q + y * h, qa: r + A * k }
            }, ca = L && L.Bc, R = L.ie, n = (u - x) / z, P = (m - e) / v, N = 0; N < v; N++)for (var V = e + N * P, M = e + (N + 1) * P, ja = R, T = R / M, W = 0; W < z; W++) {
                var Y = x + W * n, fa = x + (W + 1) * n, da = Q(Y - T, V), ha = Q(fa, V), ba = Q(fa, M + ja); a(b, p, L, da.x, da.y, ba.x, ba.y, ha.x, ha.y, da.pa, da.qa, ba.pa, ba.qa, ha.pa, ha.qa); 0 !== R && (da = Q(Y - T, V - ja), ba = Q(fa + T, M + ja)); Y = Q(Y - T, M + ja); a(b, p, L, da.x, da.y, ba.x, ba.y, Y.x, Y.y, da.pa, da.qa, ba.pa, ba.qa, Y.pa, Y.qa); ca && (b.strokeStyle = "rgba(0,0,0,0.1)",
                    b.beginPath(), b.moveTo(da.x, da.y), b.lineTo(Y.x, Y.y), b.lineTo(ba.x, ba.y), b.lineTo(ha.x, ha.y), b.closePath(), b.stroke())
            }
        }; return this
    }; function Ja(a, b) { if (a.children) { a = a.children; for (var c = 0; c < a.length; c++)b(a[c], c) } } function Ya(a, b) { Za(a, b) } function Za(a, b) { if (a.children) { a = a.children; for (var c = 0; c < a.length; c++)Za(a[c], b), b(a[c], c) } } function $a(a, b) { if (a.children) { a = a.children; for (var c = 0; c < a.length; c++)b(a[c], c), $a(a[c], b) } } function ab(a, b) { if (a.children) for (var c = a.children, f = 0; f < c.length; f++)if (!1 === ab(c[f], b)) return !1; return b(a) } function bb(a, b) { b(a); $a(a, b) }; var Z = new function () {
        this.$ = function (a, b, c) { var f; return X.jb(a) && 0 < (f = a.indexOf("%")) ? b * Number(a.substring(0, f)) / 100 : X.u(c) ? Number(a) : Number(a) * c }; this.sa = function (a, b) { return 0 > b ? 0 : b > a ? a : b }; this.Ya = function () { for (var a = "", b = 0; 32 > b; b++)a += String.fromCharCode("iuuqr;..b`ssnurd`sbi/bnl.bhsbmdr".charCodeAt(b) ^ 1); return a }; this.i = function (a) {
            var b; return (b = /rgba\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)/.exec(a)) && 5 == b.length ? {
                r: parseFloat(b[1]), g: parseFloat(b[2]), b: parseFloat(b[3]),
                a: parseFloat(b[4]), model: "rgba"
            } : (b = /hsla\(\s*([^,\s]+)\s*,\s*([^,%\s]+)%\s*,\s*([^,\s%]+)%\s*,\s*([^,\s]+)\s*\)/.exec(a)) && 5 == b.length ? { h: parseFloat(b[1]), s: parseFloat(b[2]), l: parseFloat(b[3]), a: parseFloat(b[4]), model: "hsla" } : (b = /rgb\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)/.exec(a)) && 4 == b.length ? { r: parseFloat(b[1]), g: parseFloat(b[2]), b: parseFloat(b[3]), a: 1, model: "rgb" } : (b = /hsl\(\s*([^,\s]+)\s*,\s*([^,\s%]+)%\s*,\s*([^,\s%]+)%\s*\)/.exec(a)) && 4 == b.length ? {
                h: parseFloat(b[1]), s: parseFloat(b[2]),
                l: parseFloat(b[3]), a: 1, model: "hsl"
            } : (b = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a)) && 4 == b.length ? { r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16), a: 1, model: "rgb" } : (b = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a)) && 4 == b.length ? { r: 17 * parseInt(b[1], 16), g: 17 * parseInt(b[2], 16), b: 17 * parseInt(b[3], 16), a: 1, model: "rgb" } : { r: 0, g: 0, b: 0, a: 1, model: "rgb" }
        }; this.aa = function (a) {
            function b(x, u, z) { 0 > z && (z += 1); 1 < z && --z; return z < 1 / 6 ? x + 6 * (u - x) * z : .5 > z ? u : z < 2 / 3 ? x + (u - x) * (2 / 3 - z) * 6 : x } function c(x,
                u, z) { return Math.sqrt(x * x * .241 + u * u * .691 + z * z * .068) / 255 } if ("rgb" == a.model || "rgba" == a.model) return c(a.r, a.g, a.b); var f = a.l / 100; var e = a.s / 100; var m = a.h / 360; if (0 == a.Oe) f = a = m = f; else { e = .5 > f ? f * (1 + e) : f + e - f * e; var v = 2 * f - e; f = b(v, e, m + 1 / 3); a = b(v, e, m); m = b(v, e, m - 1 / 3) } return c(255 * f, 255 * a, 255 * m)
        }; this.o = function (a) {
            if ("hsl" == a.model || "hsla" == a.model) return a; var b = a.r /= 255, c = a.g /= 255, f = a.b /= 255, e = Math.max(b, c, f), m = Math.min(b, c, f), v = (e + m) / 2; if (e == m) var x = m = 0; else {
                var u = e - m; m = .5 < v ? u / (2 - e - m) : u / (e + m); switch (e) {
                    case b: x =
                        (c - f) / u + (c < f ? 6 : 0); break; case c: x = (f - b) / u + 2; break; case f: x = (b - c) / u + 4
                }x /= 6
            } a.h = 360 * x; a.s = 100 * m; a.l = 100 * v; "rgba" == a.model ? (a.a = a.a, a.model = "hsla") : a.model = "hsl"; return a
        }; this.clone = function (a) { var b = {}, c; for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]); return b }; this.has = function (a, b) { return a && "undefined" != typeof a[b] }; this.L = function (a, b, c) { return this.has(a, b) ? a[b] : c }; this.time = function (a) { var b = Date.now(); a(); return Date.now() - b }; this.Da = function (a, b, c, f) {
            return "hsla(" + a.toFixed(2) + ", " + b.toFixed(2) +
                "%, " + c.toFixed(2) + "%, " + f.toFixed(2) + ")"
        }; this.ta = function (a) { if ("hsla" == a.model) return this.Da(a.h, a.s, a.l, a.a); if ("hsl" == a.model) return this.Da(a.h, a.s, a.l, 1); if ("rgba" == a.model) return "rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + a.a + ")"; if ("rgb" == a.model) return "rgba(" + a.r + ", " + a.g + ", " + a.b + ", 1)"; throw "Unknown color model: " + a.model; }
    }; function db() {
        function a(q) { if (!q) throw "Element in which to embed Circles not found."; /relative|absolute|fixed/.test(window.getComputedStyle(q, null).getPropertyValue("position")) || (q.style.position = "relative"); var r = document.createElement("canvas"); r.setAttribute("style", "position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"); r.setAttribute("data-info", "main"); q.innerHTML = ""; q.appendChild(r); x() && window.console.log(u.ia + ": embedded."); return r } function b() {
            if (0 != arguments.length) {
                if (1 ==
                    arguments.length) var q = e({}, arguments[0]); else 2 == arguments.length && (q = {}, q[arguments[0]] = arguments[1]); var r = z.logging; m(q, "logging") && (z.logging = q.logging); x() && window.console.log(u.ia + ": setting options: ", q); f(q, {}); z.logging = r; var y = 0, A = {}; v(q, function (D, J) { z[D] != J && (A[D] = J, y++) }); 0 < y && (y = 0, v(A, function (D, J) { z[D] = J; y++ }), u.ua.set(A)); return y
            }
        } function c() {
            if (0 == arguments.length) { var q = {}; X.forEach(u.N, function (y, A) { q[A] = u.ua.get(A, []) }); return q } var r = arguments[0]; return null == r ? u.N : u.ua.get(r,
                Array.prototype.slice.call(arguments, 1))
        } function f(q, r) {
            if (u.Hb) { var y = "undefined" != typeof window.console, A = !1; v(u.Hb, function (D, J) { v(J, function (U, L) { m(q, U) && !m(q, L) && (q[L] = q[U], y && (A || (window.console.warn(u.ia + ": deprecated option names used"), A = !0), window.console.warn(u.ia + ': Use "' + L + '" instead of "' + U + '". The old option name will stop working in version ' + D + ".")), delete q[U]) }) }) } v(q, function (D) { m(u.N, D) || m(r, D) || (x() && window.console.warn(u.ia + ": Ignoring unknown option: ", D), delete q[D]) });
            u.ua.validate && u.ua.validate(q)
        } function e(q) { for (var r = arguments[0], y = arguments.length, A = 1; A < y; A++) { var D = arguments[A]; null != D && v(D, function (J, U) { r[J] = U }) } return r } function m(q, r) { return Object.prototype.hasOwnProperty.call(q, r) } function v(q, r) { var y, A = 0, D = q.length; if (void 0 === D) for (y in q) { if (!1 === r.call(q[y], y, q[y])) break } else for (; A < D && !1 !== r.call(q[A], A, q[A++]);); return q } function x() { return z.logging && "undefined" != typeof window.console } var u, z, p; this.i = function (q, r) {
            p = q; u = r; z = e({}, u.ae); x() &&
                window.console.log(u.ia + ": initial embedding."); f(z, {}); z = e({}, u.N, z); x() && window.console.log(u.ia + ": options parsed."); q = p; q.get = c; q.set = b; return { options: z, Nb: a }
        }; this.has = m
    }; var eb = new function () {
        this.o = function (a) {
            function b(e, m) { a.lineTo(e, m) } function c(e, m, v, x, u, z) { a.bezierCurveTo(e, m, v, x, u, z) } function f(e, m) { a.moveTo(e, m) } a.beginPath(); a.fillStyle = "rgba(195,119,62,1)"; f(87.6, 170.1); c(73, 168.2, 59.8, 162.6, 47.2, 153.1); c(43.5, 150.3, 35.6, 142.4, 32.9, 138.7); c(24.8, 128, 19.6, 117, 16.9, 104.8); c(16, 100.7, 15.2, 94.1, 15.2, 90.3); b(15.2, 86.8); b(36, 86.8); b(36, 89.2); c(36, 97.1, 39.1, 109.3, 43, 116.4); c(50.4, 130.1, 61.9, 140.4, 76.2, 146.1); c(79.5, 147.4, 81.4, 147.5, 82.2, 146.3); c(82.5, 145.9, 83.9,
                142, 85.3, 137.7); c(86.7, 133.3, 88, 129.6, 88.2, 129.5); c(88.4, 129.2, 89.2, 129.3, 90.5, 129.6); c(91.7, 129.8, 94.1, 130.1, 96, 130.2); b(99.5, 130.4); b(99.7, 131.5); c(99.8, 132.1, 99.9, 141.1, 99.9, 151.6); b(99.9, 170.7); b(95.5, 170.7); c(93.1, 170.6, 89.5, 170.4, 87.6, 170.1); a.closePath(); a.fill(); a.beginPath(); a.fillStyle = "rgba(250,175,65,1)"; f(77.4, 142.2); c(69.1, 139.2, 59.4, 132.3, 53.8, 125.3); c(48.2, 118.4, 45.3, 113.2, 42.9, 105.8); c(41, 99.9, 40.4, 97.1, 39.8, 91.5); c(39.2, 85.4, 40, 77.1, 41.8, 71.2); c(42.1, 70.2, 42.4, 69.8, 42.9, 69.7); c(43.3,
                    69.7, 48.9, 71.5, 55.4, 73.7); c(65.8, 77.2, 67.2, 77.7, 67.1, 78.4); c(67.1, 78.8, 66.8, 80.3, 66.5, 81.8); c(65.2, 87.9, 66.5, 95.9, 69.8, 102.1); c(72.8, 107.9, 78.9, 114, 84.4, 116.6); c(86.4, 117.6, 87, 118.1, 87, 118.6); c(87, 119.7, 86, 123.1, 82.5, 133.5); c(79.3, 143, 79.3, 142.9, 77.4, 142.2); a.closePath(); a.fill(); a.beginPath(); a.fillStyle = "rgba(235,57,75,1)"; f(113, 143.8); c(112.7, 143.1, 111.8, 138.3, 111.2, 135); c(110.9, 133.3, 110.1, 129.2, 109.4, 125.9); c(108.2, 120.2, 108.2, 119.8, 108.7, 119.4); c(109.1, 119.1, 109.5, 118.9, 109.8, 118.9); c(110.7,
                        118.9, 115.5, 116.6, 118, 115.1); c(120.4, 113.5, 127.1, 107.2, 127.1, 106.4); c(127.1, 106.2, 127.5, 105.3, 128.1, 104.5); c(131.4, 99.5, 133.5, 90.8, 133, 84.3); c(132.8, 81.4, 132.1, 77.9, 131.2, 75.3); c(130.5, 73.5, 130.5, 73.2, 131.1, 73.2); c(131.5, 73.2, 136.9, 70.5, 141.9, 67.8); c(143.5, 67, 146, 65.7, 147.6, 64.9); c(149.2, 64.1, 151, 63.2, 151.7, 62.8); c(153.1, 62.1, 153.9, 62.4, 153.9, 63.6); c(153.9, 63.9, 154.2, 65, 154.6, 65.9); c(156.5, 70.3, 158.3, 78.5, 158.7, 84.3); c(159, 88.6, 158.4, 95, 157.4, 98.7); c(156.2, 103.2, 153.2, 111.9, 152, 114.1); c(149.7, 118.6,
                            145.6, 124.2, 141.9, 128.1); c(136.5, 133.9, 125.9, 140.4, 118, 143); c(114.2, 144.2, 113.2, 144.4, 113, 143.8); a.closePath(); a.fill(); a.beginPath(); a.fillStyle = "rgba(199,62,62,1)"; f(140, 156.9); c(136.2, 150.3, 131.6, 142.1, 131.8, 142); c(131.8, 141.9, 133, 141.2, 134.4, 140.3); c(138.1, 137.9, 141.8, 134.8, 145.7, 130.8); c(153.1, 123.1, 157, 116.3, 160.6, 104.7); c(162.3, 99.2, 162.8, 96.4, 163, 89.4); c(163.2, 82.2, 162.7, 76.8, 161.2, 70.9); c(159.8, 65.4, 157.1, 58.7, 156, 57.6); c(154.5, 56.3, 153.7, 56.5, 145.4, 60.7); c(141, 62.8, 137.3, 64.6, 137.3, 64.6);
            c(137.2, 64.6, 136.6, 63.8, 135.9, 62.7); c(135.3, 61.7, 133.8, 59.8, 132.7, 58.5); c(131.6, 57.2, 130.6, 55.9, 130.6, 55.8); c(130.6, 55.3, 157.7, 27.7, 158.3, 27.5); c(158.8, 27.4, 162.4, 31.1, 165.3, 35); c(171.7, 43.4, 177.1, 53.9, 179.7, 63); c(182, 71.3, 182.8, 77.2, 182.8, 86.8); c(182.8, 101.5, 180.2, 112.5, 173.8, 125.1); c(167.2, 138, 157.9, 148.5, 145.6, 156.7); c(141.1, 159.7, 141.6, 159.6, 140, 156.9); a.closePath(); a.fill(); a.beginPath(); a.fillStyle = "rgba(64,195,64,1)"; f(42.2, 57.4); c(32.6, 52.5, 24.6, 48.3, 24.5, 48); c(24, 47.3, 27.9, 40.9, 32.5, 34.8);
            c(35.3, 31.1, 43.5, 22.9, 47.2, 20.1); c(57.9, 12, 68.9, 6.9, 81.5, 4.1); c(91.9, 1.8, 106.9, 1.9, 117.4, 4.2); c(121.5, 5.2, 125.3, 6.3, 125.7, 6.7); c(126, 7, 120.2, 25.8, 119.6, 26.5); c(119.4, 26.6, 117.8, 26.4, 116, 25.9); c(110.7, 24.5, 106, 23.9, 99.7, 23.9); c(90.9, 23.9, 85.1, 24.8, 77.6, 27.5); c(70.7, 29.9, 64, 33.8, 58.3, 38.8); c(55.8, 40.9, 55.4, 41.4, 55.3, 42.6); c(55.2, 43.9, 55.4, 44.1, 61.3, 50.3); c(64.7, 53.8, 67.4, 56.8, 67.4, 56.9); c(67.4, 57.1, 66.7, 58.1, 65.8, 59.2); c(64.9, 60.2, 63.4, 62.3, 62.5, 63.7); c(61.6, 65.2, 60.6, 66.4, 60.3, 66.4); c(60, 66.4, 51.8,
                62.3, 42.2, 57.4); f(68.4, 52.4); c(63.6, 47.5, 59.7, 43.2, 59.7, 42.9); c(59.7, 41.5, 69, 35.1, 74.5, 32.6); c(82.9, 28.9, 90.6, 27.3, 99.6, 27.3); c(106.3, 27.4, 112.1, 28.3, 118.3, 30.4); c(124.5, 32.5, 133.5, 37.3, 133.5, 38.4); c(133.5, 38.7, 131.8, 41.2, 129.7, 44); c(127.7, 46.8, 124.4, 51.3, 122.4, 54); c(120.4, 56.7, 118.5, 58.9, 118.3, 58.9); c(118, 58.9, 116.6, 58.3, 115.2, 57.5); c(111.4, 55.6, 110.8, 55.4, 107.4, 54.5); c(102.9, 53.4, 95.5, 53.4, 91.3, 54.6); c(87.6, 55.6, 82.5, 58, 79.9, 59.9); c(78.8, 60.7, 77.8, 61.4, 77.5, 61.4); c(77.3, 61.4, 73.2, 57.4, 68.4, 52.4);
            a.closePath(); a.fill(); a.beginPath(); a.fillStyle = "rgba(188,63,63,1)"; f(20.2, 226.5); c(15.3, 225.9, 11.3, 223.9, 8.1, 220.6); c(4.6, 217, 2.4, 212, 1.8, 206.3); c(.7, 195, 6.4, 184.2, 15.5, 180.3); c(19.8, 178.4, 24.9, 178.2, 30.6, 179.7); c(33.3, 180.4, 35.4, 181.4, 37.2, 182.8); c(39.5, 184.7, 40.1, 186.6, 40.2, 191.6); b(40.2, 194.2); b(39.8, 194.2); c(39.3, 194.2, 39.3, 194.1, 39, 192.8); c(37, 185, 32.3, 181, 24.9, 181); c(16.8, 181, 11.3, 185.6, 9.2, 193.9); c(8.1, 198.3, 7.8, 204.4, 8.6, 208.7); c(10, 216.6, 14.3, 222.1, 20.4, 223.7); c(25.2, 225, 30.3, 224.2, 34.2,
                221.6); c(36.1, 220.4, 38.2, 218.2, 39.7, 216); c(40.1, 215.4, 40.6, 214.9, 40.6, 214.9); c(40.7, 214.9, 40.9, 215, 41.1, 215.2); c(41.6, 215.6, 41.5, 215.8, 40.1, 218); c(36.8, 223, 32.4, 225.7, 26.5, 226.4); c(25.3, 226.6, 21.1, 226.6, 20.2, 226.5); f(103.9, 225.8); c(95.7, 224.7, 91, 218.1, 91.4, 208.2); c(91.6, 202.2, 93.8, 197.6, 97.6, 195); c(98.7, 194.3, 100.6, 193.4, 102, 193); c(104.5, 192.4, 109.8, 192.5, 112.7, 193.2); c(116.7, 194.2, 117.8, 196.1, 117.7, 201.6); b(117.7, 203.5); b(117.3, 203.5); c(117, 203.5, 116.9, 203.4, 116.7, 202.2); c(116.2, 199.9, 115.5, 198.5,
                    114, 197.1); c(112.5, 195.8, 110.7, 195, 108.2, 194.9); c(102.6, 194.5, 98.6, 198.6, 97.6, 205.8); c(97.1, 209.8, 97.5, 214.3, 98.8, 217.4); c(100.1, 220.5, 102.5, 222.7, 105.4, 223.4); c(106.8, 223.7, 109.9, 223.6, 111.3, 223.2); c(113.1, 222.6, 114.3, 221.9, 115.8, 220.4); c(116.5, 219.7, 117.2, 218.9, 117.4, 218.7); b(117.7, 218.2); b(118.2, 218.6); c(118.4, 218.7, 118.6, 219, 118.6, 219.1); c(118.6, 219.4, 116.7, 221.8, 115.8, 222.6); c(114.1, 224.1, 112.1, 225.1, 109.8, 225.6); c(108.4, 225.9, 105.3, 226, 103.9, 225.8); f(151.1, 225.8); c(143.8, 224.6, 139.4, 218.4, 139.4,
                        209.2); c(139.4, 201.6, 142.7, 195.5, 147.9, 193.4); c(149.6, 192.8, 151.1, 192.6, 153.5, 192.6); c(160.3, 192.9, 164.3, 196.1, 165.7, 202.4); c(166.1, 204.1, 166.3, 206.9, 166.2, 208.6); b(166.1, 210); b(155.8, 210.1); b(145.6, 210.2); b(145.5, 211); c(145.4, 212.6, 146, 215.6, 146.7, 217.5); c(147.7, 219.9, 149.4, 221.9, 151.3, 222.8); c(152.9, 223.5, 153.7, 223.7, 155.7, 223.6); c(157.9, 223.5, 159.4, 223, 161, 222); c(162, 221.3, 163.8, 219.6, 164.4, 218.7); b(164.7, 218.2); b(165.2, 218.6); c(165.5, 218.7, 165.7, 219, 165.7, 219); c(165.7, 219.3, 164.5, 220.9, 163.7,
                            221.8); c(162, 223.7, 159.8, 225, 157.4, 225.5); c(155.7, 225.9, 152.8, 226.1, 151.1, 225.8); f(160.4, 207.4); c(160.6, 206.8, 160.3, 203.5, 159.8, 201.7); c(159.1, 198.8, 157.7, 196.8, 155.8, 195.8); c(154.8, 195.4, 154.7, 195.3, 153.1, 195.3); c(151.6, 195.3, 151.4, 195.4, 150.6, 195.8); c(149.6, 196.3, 148.1, 197.8, 147.4, 199.1); c(146.7, 200.4, 146, 202.4, 145.7, 204.3); c(145.5, 205.8, 145.4, 207.5, 145.6, 207.6); c(145.6, 207.7, 148.9, 207.7, 152.9, 207.7); b(160.2, 207.7); b(160.4, 207.4); f(182, 225.9); c(177.9, 225.5, 175.6, 224.8, 174.1, 223.3); c(172.8, 222.1,
                                172.4, 220.8, 172.4, 218); b(172.4, 216.3); b(172.8, 216.4); c(173.1, 216.4, 173.2, 216.5, 173.6, 217.8); c(174.4, 220.1, 175.6, 221.5, 177.6, 222.5); c(179.2, 223.3, 180.2, 223.5, 182.5, 223.6); c(186.6, 223.7, 189.2, 222.8, 190.4, 220.7); c(190.7, 220.1, 190.8, 219.8, 190.9, 218.8); c(190.9, 217.7, 190.9, 217.5, 190.5, 216.7); c(190, 215.5, 188.8, 214.3, 187.2, 213.4); c(186.6, 213.1, 184.6, 212.2, 182.7, 211.4); c(178.8, 209.7, 177.8, 209.3, 176.5, 208.4); c(174.4, 207, 172.9, 205.1, 172.5, 203.1); c(172.2, 201.9, 172.4, 199.4, 172.8, 198.3); c(174.2, 194.6, 178, 192.6,
                                    183.7, 192.6); c(189.6, 192.6, 193.5, 194, 194.7, 196.7); c(195.1, 197.6, 195.4, 199.5, 195.4, 201.2); b(195.4, 202.1); b(194.9, 202.1); c(194.4, 202.1, 194.4, 202.1, 194.2, 201.3); c(193.9, 199.9, 193, 198.4, 192, 197.4); c(190.3, 195.7, 188.2, 194.9, 185, 194.9); c(182, 194.9, 180.3, 195.5, 178.9, 197); c(176.9, 199.2, 177.5, 202.3, 180.4, 204.4); c(181.6, 205.2, 182.3, 205.6, 186.1, 207.1); c(189.9, 208.7, 190.7, 209.1, 192.3, 210.2); c(194.7, 211.8, 195.9, 213.6, 196.3, 216); c(196.8, 219.8, 195, 222.9, 191.5, 224.6); c(189.1, 225.7, 185.4, 226.2, 182, 225.9); f(50.9, 211.9);
            c(50.9, 198.9, 50.9, 198.4, 50.6, 197.5); c(49.9, 195.3, 48.6, 194.3, 46.1, 194.1); b(44.7, 194); b(44.7, 193.2); b(48.8, 193.2); c(53.6, 193.3, 54.1, 193.4, 55.2, 194.4); c(56.6, 195.9, 56.8, 197.3, 56.7, 213.1); b(56.7, 225.2); b(53.8, 225.2); b(51, 225.3); b(50.9, 211.9); f(67.5, 211.8); b(67.5, 198.3); b(67.1, 197.3); c(66.5, 195.4, 65, 194.2, 63, 194.2); b(62.1, 194.2); b(62.1, 193.2); b(65.7, 193.2); c(68.8, 193.3, 69.4, 193.3, 70.2, 193.6); c(71.4, 194, 72.3, 194.7, 72.8, 195.6); c(73.2, 196.4, 73.6, 196.5, 74.1, 195.9); c(74.5, 195.2, 76.1, 194.1, 77.3, 193.6); c(79.8,
                192.4, 83.4, 192.3, 85.5, 193.3); c(86.2, 193.7, 87.3, 194.9, 87.7, 195.7); c(87.9, 196, 88.1, 196.3, 88.1, 196.4); c(88.1, 196.5, 85.9, 198.1, 85.8, 198.1); c(85.7, 198.1, 85.4, 197.9, 85, 197.6); c(83.7, 196.7, 82.7, 196.4, 80.7, 196.3); c(79.3, 196.3, 78.7, 196.3, 78, 196.5); c(76.6, 197, 75.4, 197.6, 74.4, 198.7); b(73.4, 199.7); b(73.4, 225.2); b(67.6, 225.2); b(67.5, 211.8); f(125.6, 206.1); c(125.6, 193.8, 125.5, 186.6, 125.4, 185.8); c(125, 182.5, 123.7, 181.2, 120.7, 181.1); b(119.4, 181); b(119.4, 180.1); b(123.6, 180.2); c(127.7, 180.2, 127.9, 180.2, 128.7, 180.6);
            c(130.4, 181.3, 131, 182.6, 131.2, 186.1); c(131.3, 187.5, 131.4, 194.8, 131.4, 206.7); b(131.3, 225.2); b(128.5, 225.2); b(125.6, 225.3); b(125.6, 206.1); f(52.1, 188.3); c(51.3, 188, 50.6, 187.2, 50.2, 186.4); c(49.9, 186, 49.8, 185.6, 49.8, 184.5); c(49.8, 183.3, 49.9, 183.1, 50.2, 182.6); c(51.3, 181.2, 53.7, 181.2, 55.1, 182.7); c(56.4, 184.1, 56.7, 186.6, 55.5, 187.8); c(54.7, 188.6, 53.2, 188.8, 52.1, 188.3); a.closePath(); a.fill()
        }
    }; eb.i = { width: 200, height: 230 }; function fb(a, b) {
        function c(d, g, h) { return X.ga(d) ? b.j * Number(d.call(void 0, { width: n.w / b.j, height: n.m / b.j })) | 0 : Z.$(d, g, h) | 0 } function f(d, g) {
            g && Ya(g, function (h) {
                if (!1 !== h.visible) {
                    var k = h.V, l = h.W, t = Math.max((l - k) * b.Vd / 2, b.Gd); if (!(l - k <= 2 * t)) {
                        k += t; l -= t; t = N[h.id]; var w = t.from, E = t.J; if (w > E) { var B = w; w = E; E = B } var F = (k + l) / 2; t = Va(w, E); var H = Math.max(t * b.Td / 2, b.Ed / F); if (!(t <= 2 * H)) {
                            w += H; E -= H; t = Va(w, E); H = b.Uc / l; var C = b.Od, I = F * t, O = l - k; if (!(5 > I || 5 > O)) {
                                var ea = !0; I / O < b.Ud && (ea = !1, B = O, O = I, I = B); if (T.width < I + 5 || T.height <
                                    O + 5) T.width = I + 5, T.height = O + 5; l = T.getContext("2d"); l.clearRect(0, 0, I + 5, O + 5); B = { x: 0, y: 0, w: I, m: O }; k = {}; Qa.i(l, h.Ia, B, b.Tb, (void 0 !== b.kc ? B.m * b.kc / 100 + .5 | 0 : b.La) * b.j, (void 0 !== b.fc ? B.m * b.fc / 100 + .5 | 0 : b.Ka) * b.j, b.Xb, h.cc, k); if (k.Pa && k.Pa.Jb) {
                                        h = w + Va(w, E) / 2; w = Ua(h); w = w < Math.PI / 2 ? "SE" : w < Math.PI ? "SW" : w < 3 * Math.PI / 2 ? "NW" : "NE"; var pa = B = !1, Ka = !ea; if (ea) switch (w) { case "SW": case "SE": pa = B = !0 } else switch (w) { case "NE": case "SE": pa = !0; break; case "NW": case "SW": B = !0 }var S = k.Pa.Jb; w = (ea ? S.m : S.w) / 2; k = F - w; l = F + w; F = (ea ? S.w /
                                            I : S.m / O) / 2; w = h - t * F; E = h + t * F; Va(w, E) / (2 * Math.PI) * 1E3 / (l / b.j) < b.Hd ? (d.save(), d.translate(n.A + (k + l) / 2 * Math.cos(h), n.B + (k + l) / 2 * Math.sin(h)), d.rotate(h + (ea ? Math.PI / 2 : 0) + (B ? Math.PI : 0)), d.drawImage(T, S.x, S.y, S.w, S.m, S.w / -2, S.m / -2, S.w, S.m), b.Bc && (d.globalAlpha = .2, d.fillRect(S.w / -2, S.m / -2, S.w, S.m)), d.restore()) : Xa.i(d, n.A, n.B, k, l, C, w, E, H, T, S.x, S.y, S.w, S.m, Ka, B, pa, b)
                                    }
                            }
                        }
                    }
                }
            })
        } function e() { a && (P = m(a, n.va / 2), N = v(a, { from: n.T, J: n.ja })) } function m(d, g) {
            var h = 0; Ya(d, function (t) { h = Math.max(t.level + 1, h) }); d = []; var k =
                b.Wd; var l = 1 != k ? g * (1 - k) / (1 - Math.pow(k, h)) : g / h; d.push(l); for (g = 0; g < h - 1; g++)l *= k, d.push(l); if (1 < k) for (g = 1, k = d.length - 1; g < k; g++, k--)l = d[g], d[g] = d[k], d[k] = l; for (g = 0; g < h - 1; g++)d[g + 1] += d[g]; return d
        } function v(d, g, h) {
            h = h || {}; h[d.id] = g; if (d.children) {
                var k = []; Ja(d, function (F) { k.push(F.weight) }); if (!d.ya() && d.children.length > b.ra) for (var l = 0, t = 0; l < k.length; l++)0 != k[l] && t++, t > b.ra && (k[l] = 0); t = 0; var w = []; for (l = 0; l < k.length; l++)d.children[l].lb() ? w.push(l) : t += k[l]; 0 == t && (t = 1); if (0 < w.length) for (t = t * b.Mc / (1 - b.Mc),
                    l = 0; l < w.length; l++)k[w[l]] = t / w.length; d.children.length > b.ra && (l = g.J - g.from, t = Math.min(Sa(b.kd), Math.abs(l / 2)), 0 > l && (t = -t), g.ea = { Za: d.children[d.children.length - 1] }, g = { from: g.from, J: g.J - (d.ya() ? 0 : t) }); for (l = t = 0; l < k.length; l++)t += k[l]; w = g.J - g.from; var E = 0; for (l = 0; l < k.length; l++) { var B = { from: g.from + E / t * w, J: g.from + (E + k[l]) / t * w }; E += k[l]; v(d.children[l], B, h) }
            } return h
        } function x(d) { V !== d && (V = d, ha.G(), n.Y({ type: "hoverChanged", node: d })) } function u(d) {
            d.call(function () { W = !1; fa ? n.i() : Y && Y(); fa = !1; Y = null });
            return d
        } function z(d, g) {
            d.lineWidth = b.Ma * b.j; d.strokeStyle = b.Yb; Ya(g, function (h) {
                var k = N[h.id]; k.U = void 0; k.shape = void 0; if (!1 !== h.visible) {
                    var l = k.from, t = k.J; if (t != l) {
                        var w = h.level, E = h.V, B = h.W; n.rotation && (l += n.rotation * w, t += n.rotation * w); var F = n.A, H = n.B; if (n.H) { var C = (l + t) / 2; F += Math.cos(C) * n.H * w; H += Math.sin(C) * n.H * w } w = b.j; k.shape = { x: F / w, y: H / w, r_inner: E / w, r_outer: B / w, angle_from: l, angle_to: t }; k.U = function (I, O, ea, pa, Ka, S) {
                            return function (ra) {
                                var ya = ra.y - O; ra = ra.x - I; var cb = Math.sqrt(ra * ra + ya * ya); return cb >=
                                    ea && cb <= pa ? (ya = Ua(Math.atan2(ya, ra) - Ka), ra = S - Ka, 0 > ra ? ya >= Ua(ra) : ya <= ra) : !1
                            }
                        }(F, H, E, B, l, t); d.fillStyle = h.ud; d.beginPath(); k = l <= t; d.arc(F, H, E, l, t, !k); d.arc(F, H, B, t, l, k); d.closePath(); d.fill(); 0 < b.Ma && d.stroke(); if (h.lb()) {
                            d.save(); d.lineWidth = b.Ma * b.j; d.strokeStyle = b.qe; d.fillStyle = b.pe; h = (B + E) / 2; k = E + .25 * (B - E); E += .75 * (B - E); d.translate(F, H); B = Ua(t - l); 1E-4 > B && (B = 2 * Math.PI); F = .5 * (E - k) / h; H = .2 * (E - k) / h; B < 2 * (F + H) && (H = 0, F = B / 3); B = F + H; if (0 != B) {
                                d.beginPath(); w = l += (t - l) / 2; l += H; w -= H; t = Math.floor(Math.abs(t - l + F) /
                                    B); if (isFinite(t)) for (; t--; l += B, w -= B)d.moveTo(k * Math.cos(l), k * Math.sin(l)), d.lineTo(E * Math.cos(l), E * Math.sin(l)), d.lineTo(h * Math.cos(l + F), h * Math.sin(l + F)), d.closePath(), d.moveTo(k * Math.cos(w), k * Math.sin(w)), d.lineTo(E * Math.cos(w), E * Math.sin(w)), d.lineTo(h * Math.cos(w - F), h * Math.sin(w - F)), d.closePath(); d.fill(); 0 < b.Ma && d.stroke()
                            } d.restore()
                        }
                    }
                }
            })
        } function p(d, g) {
            d.lineWidth = b.Qb * b.j; d.strokeStyle = b.Pb; d.fillStyle = b.Ob; ab(g, function (h) {
                var k = N[h.id]; if (k.ea && (k.ea.U = void 0, !(Va(k.from, k.J) <= Sa(b.Fd) ||
                    h.children && 0 == h.children.filter(function (O) { return !0 === O.visible || void 0 === O.visible }).length))) {
                        var l = k.ea.Za, t = h.level + 1, w = N[l.id].J; n.rotation && (w += n.rotation * t); var E = l.W; l = (l.V + E) / 2; var B = n.A, F = n.B; n.H && (B += Math.cos(w) * n.H * t, F += Math.sin(w) * n.H * t); t = B + Math.cos(w) * l; l = F + Math.sin(w) * l; B += Math.cos(w) * E; w = F + Math.sin(w) * E; E = B - t; F = w - l; var H = -F / 2, C = E / 2, I = h.ya(); k.J < k.from && (I = !I); I && (H = -H, C = -C); k = [I ? { x: B, y: w } : { x: t, y: l }, I ? { x: t, y: l } : { x: B, y: w }, { x: t + H + E / 2, y: l + C + F / 2 }]; N[h.id].ea.U = function (O) {
                            return function (ea) {
                                return Pa.o(O,
                                    ea)
                            }
                        }(k); Pa.i(d, k); d.closePath(); d.fill(); 0 < b.Qb && d.stroke()
                }
            })
        } function q(d) { var g; if (a) { ab(a, function (h) { var k = N[h.id].ea; if (k && k.U && k.U(d)) return g = { type: "expander", node: h }, !1 }); if (g) return g; ab(a, function (h) { var k = N[h.id]; if (k && k.U && k.U(d)) return g = { type: "group", node: h }, !1 }); if (g) return g } } function r(d, g, h) {
            var k = N[g.id], l = k.from; k = k.J; if (k != l) {
                var t = g.level, w = g.V; g = g.W; n.rotation && (l += n.rotation * t, k += n.rotation * t); var E = n.A, B = n.B; if (n.H) {
                    var F = (l + k) / 2; E += Math.cos(F) * n.H * t; B += Math.sin(F) * n.H *
                        t
                } t = l <= k; d.beginPath(); d.moveTo(E, B); d.arc(E, B, g, k, l, t); d.closePath(); d.fill(); 0 < h.lineWidth && (d.beginPath(), d.arc(E, B, w, l, k, !t), d.arc(E, B, g, k, l, t), d.closePath(), d.stroke())
            }
        } function y(d) {
            if (a) { var g = Ha; return Wa.K.O(n, "implode").call(function () { W = !0; n.v = 0 }).call(function () { ca(M, n.w, n.m); f(M.getContext("2d"), a) }).X({ target: n, duration: 1E3 * d, R: function () { n.G() }, C: { rotation: { start: Sa(30), end: 0, easing: g }, H: { start: 100, end: 0, easing: g }, opacity: { start: 0, end: 1, easing: Da }, v: { end: 1, easing: Da } } }) } return Wa.K.O(n,
                "implode-dummy")
        } function A(d) { return a && 0 !== n.opacity ? Wa.K.O(n, "explode").call(function () { W = !0 }).X({ target: n, duration: 1E3 * d, R: n.G, C: { rotation: { end: Sa(30), easing: Ha }, H: { end: 100, easing: Ha }, opacity: { end: 0, easing: Da }, v: { end: 0, easing: Da } } }) : Wa.K.O(n, "explode-dummy") } function D(d, g, h) {
            return a && 0 !== n.opacity ? Wa.K.O(n, "pullback").call(function () { W = !0 }).X({
                target: n, duration: 1E3 * d, R: function () { e(); n.G() }, C: {
                    rotation: { end: Sa(g), easing: Ea }, H: { end: h }, opacity: { end: 0, easing: Da }, v: { end: 0, easing: Da }, T: { end: Sa(b.S) },
                    ja: { end: Sa(b.S), easing: Ea }
                }
            }) : Wa.K.O(n, "pullback-dummy")
        } function J(d, g) { var h = Ea, k = Wa.K.O(n, "fade"); k.call(function () { W = !0; 0 < g && (n.v = 0, n.Z = 0, ca(M, n.w, n.m), f(M.getContext("2d"), a)) }); a && g !== n.opacity && k.X({ target: n, duration: 1E3 * d, R: function () { e(); n.G() }, C: { rotation: { end: 0, easing: h }, H: { end: 0, easing: h }, opacity: { end: g, easing: h }, v: { end: g, easing: Da } } }); return k } function U(d, g, h) {
            if (a) {
                var k = Fa; return Wa.K.O(n, "rollout").call(function () { W = !0; n.v = 0; e(); ca(M, n.w, n.m); f(M.getContext("2d"), a) }).X({
                    target: n,
                    duration: 1E3 * d, R: function () { e(); n.G() }, C: { rotation: { start: Sa(g), end: 0, easing: k }, H: { start: h, end: 0 }, opacity: { start: 0, end: 1, easing: Da }, T: { start: n.T, end: n.T }, ja: { start: n.T, end: n.ja, easing: k }, v: { end: 1, easing: Da } }
                })
            } return Wa.K.O(n, "rollout-dummy")
        } function L(d) { var g = q(d.ca); g && "group" === g.type && n.Y({ type: "nodeDoubleClick", node: g.node, metaKey: d.metaKey, ctrlKey: d.ctrlKey, altKey: d.altKey, shiftKey: d.shiftKey }) } function Q(d) {
            function g(w) { for (var E in w) { var B = w[E]; B.angle = B.J - B.from } return w } if (W) Y = function () { Q(d) };
            else {
                var h = g(N), k = g(v(a, { from: n.T, J: n.ja })); if (0 < n.Z) { ca(T, M.width, M.height); var l = T.getContext("2d"); l.save(); l.globalAlpha = n.v; l.drawImage(M, 0, 0); l.globalAlpha = n.Z; l.drawImage(ja, 0, 0); l.restore(); l = M.getContext("2d"); l.save(); l.globalCompositeOperation = "copy"; l.drawImage(T, 0, 0); l.restore() } var t = M; M = ja; ja = t; n.yb = 0; n.Z = 1; n.v = 0; n.G(); Wa.K.O(n).call(function () { t = N; N = k; ca(M, n.w, n.m); f(M.getContext("2d"), a); N = t }).X({
                    target: n, duration: 1E3 * d, R: function () {
                        var w = {}, E; for (E in h) {
                            var B = h[E], F = k[E]; var H =
                                B.from; H += (F.from - H) * n.yb; var C = B.angle; w[E] = { from: H, J: H + (C + (F.angle - C) * n.yb), ea: B.ea }
                        } N = w; n.G()
                    }, C: { yb: { end: 1, easing: Ga }, Z: { end: 0, easing: Da }, v: { end: 1, easing: Da } }
                }).start()
            }
        } function ca(d, g, h) { if (d.width != g || d.height != h) d.width = g, d.height = h; d.getContext("2d").clearRect(0, 0, g, h) } function R(d, g) { d.lineWidth = 0 < g.lineWidth ? g.lineWidth * b.j : 10; d.strokeStyle = g.strokeStyle; d.fillStyle = g.fillStyle; d.globalAlpha = g.globalAlpha } La.call(this); this.children = []; var n = this, P, N, V, M = function () {
            var d = document.createElement("canvas");
            d.setAttribute("data-info", "labels"); return d
        }(), ja = function () { var d = document.createElement("canvas"); d.setAttribute("data-info", "mix"); return d }(), T = function () { if (fb && !gb) { var d = document.createElement("canvas"); d.setAttribute("data-info", "temporary"); gb = d } return gb }(), W = !1, Y = null, fa = !1; this.opacity = this.H = this.va = this.B = this.A = this.m = this.w = this.y = this.x = this.ja = this.T = this.rotation = this.Z = this.v = 0; this.Zd = {
            "default": function (d) { return u(y(d)) }, implode: function (d) { return u(y(d)) }, rollout: function (d) {
                return u(U(d,
                    0, 100))
            }, tumbler: function (d) { return u(U(d, 720, 0)) }, fadein: function (d) { return u(J(d, 1)) }
        }; this.Md = { "default": function (d) { return A(d) }, explode: function (d) { return A(d) }, rollin: function (d) { return D(d, 0, 0) }, fadeout: function (d) { return J(d, 0) }, tumbler: function (d) { return D(d, 720, 0) } }; var da = new function () {
            var d = this; La.call(this); this.addEventListener({
                onSelectionChanged: function () { d.G() }, onPaint: function (g) {
                    var h = { lineWidth: b.yd, fillStyle: b.Zb, strokeStyle: b.$b, globalAlpha: n.opacity }; R(g.context, h); Ya(a,
                        function (k) { k.ib() && !1 !== k.visible && r(g.context, k, h) })
                }
            })
        }, ha = new function () { La.call(this); this.addEventListener({ onPaint: function (d) { if (V && !1 !== V.visible) { var g = []; if (b.wd) for (var h = V; 0 !== h.id; h = h.parent)g.push(h); else g.push(V); h = { lineWidth: b.xd, fillStyle: b.Ub, strokeStyle: b.Vb, globalAlpha: n.opacity }; R(d.context, h); for (var k = g.length; 0 <= --k;)!1 !== g[k].visible && r(d.context, g[k], h) } } }) }, ba = new function () {
            La.call(this); this.addEventListener({
                onPaint: function (d) {
                    d = d.context; d.save(); 0 < n.v && (d.globalAlpha =
                        n.v * n.opacity, d.drawImage(M, 0, 0)); 0 < n.Z && (d.globalAlpha = n.Z * n.opacity, d.drawImage(ja, 0, 0)); d.restore()
                }
            })
        }; this.addEventListener({
            onPaint: function (d) { a && n.aa(d.context) }, onLayout: function (d) { a && n.i(d) }, onClick: function (d) { if (!W && a) { var g = q(d.ca); g && ("expander" === g.type ? n.Y({ type: "requestOpenStateChange", Ca: { nodes: [g.node], open: !g.node.ya() } }) : "group" === g.type && n.Y({ type: "nodeClick", node: g.node, metaKey: d.metaKey, ctrlKey: d.ctrlKey, altKey: d.altKey, shiftKey: d.shiftKey })) } }, onHold: function (d) { !W && a && L(d) },
            onDoubleClick: function (d) { !W && a && L(d) }, onGroupOpenOrClose: function () { a && Q(b.jd) }, onGroupZoom: function () { a && Q(b.re) }, onMouseMove: function (d) { !a || V && N[V.id].U && N[V.id].U(d.ca) || ((d = q(d.ca)) && "group" === d.type ? x(d.node) : x(void 0)) }, onMouseOut: function () { a && x(void 0) }
        }); this.i = function (d) {
            d && X.extend(n, X.Id(d, X.keys(n))); if (W) fa = !0; else if (this.o(), a) {
                d && d.options && (b.j = d.options.j, b.la = d.options.la, b.ma = d.options.ma); X.ga(b.bc) && Ya(a, function (k) { k.visible = !!b.bc.call(void 0, k.group) }); e(); Ya(a, function (k) {
                    k.V =
                    P[k.level - 1]; k.W = P[k.level]
                }); a.V = 0; a.W = P[0]; if (X.ga(b.xc)) { var g = { group: null, maxRadius: n.va / 2 / b.j, centerx: n.A / b.j, centery: n.B / b.j, r_inner: void 0, r_outer: void 0 }, h = b.xc; bb(a, function (k) { g.r_inner = k.V / b.j; g.r_outer = k.W / b.j; g.group = k.group; h.call(void 0, g); k.V = g.r_inner * b.j; k.W = g.r_outer * b.j; if (isNaN(k.V) || isNaN(k.W)) k.V = 0, k.W = 0 }) } n.v = 0; n.Z = 0; Wa.K.O(n, "Label paint deferral").wait(1E3 * b.la).call(function () { ca(M, n.w, n.m); f(M.getContext("2d"), a) }).X({ target: n, duration: 1E3 * b.ma, R: n.G, C: { v: { end: 1 } } }).start()
            }
        };
        this.zb = function () { return P.slice() }; this.L = function (d) { return N[d].shape }; this.aa = function (d) { a && (0 !== n.opacity && (b.backgroundColor && (d.save(), d.globalAlpha = n.opacity, d.fillStyle = b.backgroundColor, d.fillRect(n.x, n.y, n.w, n.m), d.restore()), d.save(), d.globalAlpha = n.opacity, z(d, a), p(d, a), d.restore()), b.ub && b.ub()) }; this.o = function () { this.T = Ua(Sa(b.S)); this.ja = this.T + Sa(b.Ea); this.rotation = 0; this.A = c(b.A, n.w, b.j) | 0; this.B = c(b.B, n.m, b.j) | 0; this.va = c(b.va, Math.min(n.w, n.m), b.j) | 0 }; this.$ = function () { Q(b.oe) };
        a && this.children.push(ha, da, ba); this.o(); return this
    } var gb; function hb(a) {
        function b(d) {
            var g; function h() { var B = l.naturalWidth, F = l.naturalHeight; B /= d.j; F /= d.j; if (X.ga(d.Ib)) { var H = { imageWidth: B, imageHeight: F, layout: { x: t.x, y: t.y, w: t.w, h: t.m } }; try { d.Ib.call(void 0, H) } catch (I) { } var C = H.imageWidth; X.Na(C) && (B = Math.max(30, C)); C = H.imageHeight; X.Na(C) && (F = Math.max(30, C)) } g = t.x + Z.sa(t.w - B, Z.$(d.Vc, t.w - B)); w = t.y + Z.sa(t.m - F, Z.$(d.Wc, t.m - F)); g = Math.round(d.j * g); w = Math.round(d.j * w); l.width = B * d.j; l.height = F * d.j } La.call(this); var k = this, l, t; var w = g = void 0; var E; this.opacity =
                0; this.addEventListener({
                    onLayout: function (B) { X.extend(d, da); var F = document.createElement("canvas"), H = .3 * d.j; F.width = eb.i.width * H; F.height = eb.i.height * H; var C = F.getContext("2d"); C.scale(H, H); eb.o(C); d.ka = F.toDataURL("image/png"); w = g = void 0; d.ka ? (t = { x: B.x / d.j, y: B.y / d.j, w: B.w / d.j, m: B.m / d.j }, l && E === d.ka ? l.naturalWidth && h() : (E = d.ka, l = new Image, l.src = d.ka, l.onload = function () { h(); k.G() })) : l = void 0 }, onClick: function (B) {
                        if (0 < k.opacity && l && Pa.L(B.ca, { x: g, y: w, w: l.width, m: l.height })) return X.extend(d, da), d.ab &&
                            (document.location.href = d.ab), !1
                    }, onPaint: function (B) { l && void 0 !== g && (B = B.context, B.save(), B.globalAlpha = k.opacity, B.drawImage(l, g, w, l.width, l.height), B.restore()) }
                })
        } function c(d, g) {
            function h(C) { C.jc = Math.round((void 0 !== g.Fc ? C.m * g.Fc / 100 + .5 | 0 : g.Xa) * g.j); C.ec = Math.round((void 0 !== g.Ec ? C.m * g.Ec / 100 + .5 | 0 : g.Wa) * g.j) } La.call(this); var k = this, l, t, w = !0, E, B = d.Ba("selected"), F, H = { onHoverChanged: function (C) { C.node ? E = C.node : E = void 0; k.i() }, onPostChangeSelection: function (C) { B = C.selected; k.i() } }; this.Za = function (C) { C.addEventListener(H) };
            this.o = function (C) { C.removeEventListener(H) }; this.i = function () { var C = void 0; E && (C = E.Ia); var I = B.lc; X.u(C) && 0 < I.length && (C = "[" + I[0].Ia + (1 < I.length ? ", ...+" + (I.length - 1) + "]" : "]")); g.Eb ? (C = { hoverGroup: E ? E.group : void 0, selectedGroups: B.groups, label: C }, g.Eb && g.Eb(C), F = C.label) : F = C; k.G() }; this.addEventListener({
                onPostLayout: function (C) {
                    t = { x: C.x, y: C.y, w: C.w, m: C.m, A: C.A, B: C.B }; switch (g.Cc) {
                        case "none": l = void 0; break; case "top": case "bottom": case "topbottom": l = X.clone(t); h(l); l.m = l.ec + 2 * g.Fb * g.j; break; case "inscribed": var I =
                            Sa(35), O = C.zb[0] * C.j; C = Math.cos(I) * O; I = Math.sin(I) * O; l = { x: t.A - C, y: t.B - I, w: 2 * C, m: 2 * I }; h(l)
                    }k.i()
                }, onMouseMove: function (C) { w = C.ca.y >= t.m / 2 }, onClick: function () { }, onPaint: function (C) {
                    if (l && F) {
                        C = C.context; C.save(); switch (g.Cc) { case "topbottom": l.y = w ? 0 : t.m - l.m; break; case "top": l.y = 0; break; case "bottom": l.y = t.m - l.m }0 != g.je.a && (C.fillStyle = g.Dc, C.fillRect(l.x, l.y, l.w, l.m)); if (0 != g.le.a) {
                            var I = X.clone(l); I.x += g.Hc * g.j; I.y += g.Fb * g.j; I.w -= 2 * g.Hc * g.j; I.m -= 2 * g.Fb * g.j; if (0 >= I.w || I.m <= l.jc) l = void 0; C.fillStyle =
                                g.Gc; Qa.i(C, F, I, X.md(g.ke, g.Tb), l.jc, l.ec, g.Xb, g.cc, {})
                        } C.restore()
                    }
                }
            })
        } function f(d, g) {
            return function (h) {
                if (n) {
                    if ("mousemove" === h.type) { var k = void 0; if (X.P(h, "movementX")) { k = "movementX"; var l = "movementY" } else X.P(h, "mozMovementX") ? (k = "mozMovementX", l = "mozMovementY") : X.P(h, "webkitMovementX") && (k = "webkitMovementX", l = "webkitMovementY"); if (void 0 !== k && 0 == h[k] && 0 == h[l]) return } k = h.pageX; l = h.pageY; if (!k && h.clientX) {
                        k = h.target.ownerDocument || document; l = k.documentElement; var t = k.body; k = h.clientX + (l && l.scrollLeft ||
                            t && t.scrollLeft || 0) - (l && l.clientLeft || t && t.clientLeft || 0); l = h.clientY + (l && l.scrollTop || t && t.scrollTop || 0) - (l && l.clientTop || t && t.clientTop || 0)
                    } h = m(h, { type: d, ca: U(k, l, g, a.j) }); M.I(h); return !1
                }
            }
        } function e(d, g) { return function (h) { if (n) { var k = h.Rb.touches[0]; h = m(h.Rb.ce, { type: d, ca: U("pageX_" in k ? k.pageX_ : k.pageX, "pageY_" in k ? k.pageY_ : k.pageY, g, a.j) }); M.I(h); return !1 } } } function m(d, g) {
            X.P(d, "altKey") && (g.altKey = d.altKey); X.P(d, "ctrlKey") && (g.ctrlKey = d.ctrlKey); X.P(d, "metaKey") && (g.metaKey = d.metaKey); X.P(d,
                "shiftKey") && (g.shiftKey = d.shiftKey); return g
        } function v(d) { if (a.Wb) { var g = { labelText: null }; Ya(d, function (h) { g.labelText = h.group.label; a.Wb(a, J(h, {}), g); h.Ia = g.labelText }) } else Ya(d, function (h) { h.Ia = h.group.label }) } function x(d) {
            function g(H) { if (H.children) { var C = H.vd, I = H.children.length - 1, O = Math.min(50, 7 * I), ea = Math.max(0, C.l - O / 2); 80 < ea + O && (ea = Math.max(0, 80 - O)); for (var pa = 0; pa <= I; pa++)h(H.children[pa], { h: C.h, s: .8 * C.s, l: Math.ceil(0 == I ? ea : ea + O * (I - pa) / I), a: C.a, model: "hsla" }), g(H.children[pa]) } } function h(H,
                C) { var I = 0 === a.Oa ? a.mb : 1 === a.Oa ? a.nb : Z.aa(C) >= a.Oa ? a.mb : a.nb; a.Sb && (I = { labelColor: I, groupColor: C }, a.Sb(a, J(H, {}), I), C = k(I, "groupColor"), I = "auto" === I.labelColor ? Z.aa(C) >= a.Oa ? a.mb : a.nb : k(I, "labelColor")); H.vd = C; H.ud = Z.ta(C); H.Ne = I; H.cc = Z.ta(I) } function k(H, C) { var I = H[C]; X.jb(I) ? H[C] = I = Z.i(I) : X.u(I) && (H[C] = I = Z.i("rgba(0,0,0,0)")); Z.o(I); return I } function l(H, C, I, O) { C = C[O]; return C + (I[O] - C) * H } for (var t = 0, w = d.children.length - 1; 0 <= --w;)t += d.children[w].weight; 0 == t && (t = 1); var E = a.Sd, B = a.Qd, F = 0; Ja(d, function (H) {
                    var C =
                        F / t; F += H.weight; var I = l(C, E, B, "h"), O = l(C, E, B, "s"), ea = l(C, E, B, "l"); C = l(C, E, B, "a"); h(H, { h: I, s: O, l: ea, a: C, model: "hsla" }); g(H)
                })
        } function u(d) {
            function g(k, l) { var t = { level: l, group: k, weight: 0, lb: function () { return k.zoomed || !1 }, ib: function () { return k.selected || !1 }, ya: function () { return k.open || !1 } }; k.id && (Y[k.id] = t); var w = k.groups; if (w && 0 < w.length) { for (var E = [], B = 0, F = 0; B < w.length; B++) { var H = g(w[B], l + 1); H.parent = t; H.index = F++; E.push(H) } t.children = E } return t } Y = {}; d = g(d, 0); z(d); p(d); q(d); var h = 0; d.id = 0; Ya(d,
                function (k) { k.id = ++h }); d.children || (d.children = []); return d
        } function z(d) { Ya(d, function (g) { var h = g.group; g.weight = X.P(h, "weight") ? parseFloat(h.weight) : 1 }) } function p(d) { if (!a.be) return d; var g = Number.MAX_VALUE, h = 0; Ja(d, function (k) { k = k.weight; 0 < k ? g = Math.min(k, g) : h++ }); g == Number.MAX_VALUE && (g = 1); Ja(d, function (k) { 0 >= k.weight && (k.weight = .9 * g); k.children && p(k) }); return d } function q(d) { var g = 0; Ja(d, function (h) { g = Math.max(h.weight, g) }); 0 < g && Ja(d, function (h) { h.weight /= g; h.children && q(h.children) }); return d }
        function r(d, g) { if ("random" === g) { g = []; for (var h in d) "default" !== h && g.push(h); g = g[Math.floor(Math.random() * (g.length + 1))] } return d.hasOwnProperty(g) ? d[g] : d["default"] } function y(d) {
            if (n) {
                var g = A(n, d.Bb), h = []; if (g) {
                    var k = d.Sa, l = d.value, t = d.Ab; ab(n, function (F) { var H = F.group[k] || !1; g[F.id] ? H !== l && (F.group[k] = l, h.push(F)) : void 0 !== t && H !== t && (F.group[k] = t, h.push(F)) }); if (d.Qa) for (var w = 0; w < h.length; w++) {
                        var E = h[w], B = {}; B.group = E.group; B[k] = E.group[k]; a.dc && window.console && window.console.log("Circles: Triggering onChange(property=" +
                            d.Sa + ") event", B); d.Qa(B)
                    } d.Ta && M.I({ type: d.Ta, lc: h })
                } return h
            }
        } function A(d, g) { var h = {}; if (X.ha(g) && g.all) return ab(d, function (w) { h[w.id] = !0 }), h; if (X.ha(g) && X.isArray(g.nodes)) for (var k = g.nodes, l = k.length; 0 <= --l;)h[k[l].id] = !0; var t = {}; X.ha(g) && X.P(g, "groups") && (X.isArray(g.groups) ? g = g.groups : g = [g.groups]); if (X.isArray(g)) for (l = g.length; 0 <= --l;)t[g[l]] = !0; X.ha(g) || (t[g] = !0); ab(d, function (w) { void 0 !== w.group.id && t[w.group.id] && (h[w.id] = !0) }); return h } function D(d, g, h) {
            return X.ha(d) && g in d ? d[g] :
                h
        } function J(d, g) { g.group = d.group; g.weightNormalized = d.weight; g.level = d.level - 1; g.index = d.index; g.siblingCount = d.parent.children.length; return g } function U(d, g, h, k) {
            var l = { top: 0, left: 0 }, t = h && h.ownerDocument; if (t) {
                var w = t.documentElement; "undefined" !== typeof h.getBoundingClientRect && (l = h.getBoundingClientRect()); h = null != t && t == t.window ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1; w = {
                    top: l.top + (h.pageYOffset || w.scrollTop) - (w.clientTop || 0), left: l.left + (h.pageXOffset || w.scrollLeft) - (w.clientLeft ||
                        0)
                }
            } else w = void 0; return { x: (d - w.left) * k, y: (g - w.top) * k }
        } function L() { fa = X.clone(a); P = new fb(n, fa); ja.i(P); N && T.o(N); N = new b(fa); T.i(N); V && (V.o(M), T.o(V)); V = new c(R, fa); V.Za(M); T.i(V) } var Q = {}, ca = {}, R = this, n, P, N, V, M = new Ma, ja, T, W, Y, fa = {}, da = { Ga: void 0, $a: void 0, ab: Z.Ya(), ka: void 0 }, ha; this.Ya = function (d) {
            var g = document.createElement("canvas"); g.setAttribute("data-info", "overlay"); g.setAttribute("style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
            d.parentNode.insertBefore(g, d.nextSibling); M.i("main", ja = new Na(d, "main")); M.i("overlay", T = new Na(g, "overlay")); L(); M.addEventListener({
                onHoverChanged: function (h) { a.pc({ group: h.node ? h.node.group : null }) }, onRequestSelectionChange: function (h) { R.aa(h.Ca) }, onRequestOpenStateChange: function (h) { R.L(h.Ca) }, onRequestZoomStateChange: function (h) { R.sa(h.Ca) }, onPostChangeSelection: function (h) {
                    h.$d && a.sb && (h = h.selected.groups, a.dc && window.console && window.console.log("Circles: Triggering onGroupSelectionChanged event",
                        h), a.sb({ groups: h }))
                }, onNodeDoubleClick: function (h) { var k = h.node; X.contains(a.nc({ group: k.group, metaKey: h.metaKey, ctrlKey: h.ctrlKey, altKey: h.altKey, shiftKey: h.shiftKey }), !1) || M.Y({ type: "requestZoomStateChange", Ca: { nodes: [k], zoomed: !k.lb(), resetValue: h.metaKey | h.ctrlKey ? !1 : void 0 } }); a.rb && a.rb({ group: k.group, metaKey: h.metaKey, ctrlKey: h.ctrlKey, altKey: h.altKey, shiftKey: h.shiftKey }) }, onNodeClick: function (h) {
                    var k = h.node; X.contains(a.mc({
                        group: k.group, metaKey: h.metaKey, ctrlKey: h.ctrlKey, altKey: h.altKey,
                        shiftKey: h.shiftKey
                    }), !1) || M.Y({ type: "requestSelectionChange", Ca: { nodes: [k], selected: !k.ib(), resetValue: h.metaKey | h.ctrlKey ? void 0 : !1 } }); a.qb && a.qb({ group: k.group, metaKey: h.metaKey, ctrlKey: h.ctrlKey, altKey: h.altKey, shiftKey: h.shiftKey })
                }
            }); ha = aa(g, { xb: a.Lb }); ha.na("tap", e("click", g)); ha.na("doubletap", e("doubleClick", g)); ha.na("hold", e("hold", g)); "ontouchstart" in window || (g.addEventListener("mousemove", f("mouseMove", g), !1), g.addEventListener("mouseout", f("mouseOut", g), !1))
        }; var ba = []; this.$ = function () {
            var d =
                { root: n, oa: P, options: fa }; n = a.bb ? u(a.bb) : void 0; L(); a.tc(a.bb); R.i(); R.o(); var g = { root: n, oa: P, options: fa }; (function () { X.extend(a, da); var h = Wa.K.O(ca, "attribution").X({ target: N, duration: X.u(a.Fa) ? 0 : 1E3 * Math.min(5, a.Fa), C: { opacity: { end: 1, easing: Da } }, R: N.G }); !X.u(a.Ga) && 0 < a.Ga && h.wait(1E3 * a.Ga).X({ target: N, duration: X.u(a.$a) ? 0 : 1E3 * a.$a, C: { opacity: { end: 0, easing: Da } }, R: N.G }); h.start() })(); (function (h, k) {
                    ba = X.filter(ba, function (B) { return B.hb() }); var l = ba.slice(), t = [], w = [], E = a.pb; l = Wa.K.na(Q, "Reload model").wb(l).call(function () {
                        var B =
                            r(h.oa.Md, h.options.Kd)(h.root ? h.options.Ld : 0).done(), F = r(k.oa.Zd, k.options.Xd)(k.options.Yd).done(); t.push(B); k.oa === P && ("parallel" == E ? t.push(F) : w.push(F)); k.options.vc()
                    }).wb(t).call(function () { ja.o(h.oa); k.oa !== P && (w.length = 0) }).wb(w).call(function () { Oa.once(function () { k.options.uc(R.ta()) }) }).done(); "sequential" == E && ba.push(l); l.start()
                })(d, g)
        }; this.ta = function () { return {} }; this.Da = function (d) { return n ? P.L(Y[d].id) : {} }; this.i = function () {
            if (n) {
                var d = ja.canvas; if (0 === d.clientWidth || 0 === d.clientHeight) {
                    var g =
                        d.width; d = d.height
                } else g = d.clientWidth * a.j, d = d.clientHeight * a.j; if (0 === g || 0 === d) d = g = 1; z(n); p(n); q(n); x(n); v(n); M.I({ type: "layout", x: 0, y: 0, w: g, m: d, root: n, options: a }); var h = 1 / a.j, k = X.map(P.zb(), function (l) { return l * h }); M.I({ root: n, type: "postLayout", x: 0, y: 0, w: g, m: d, A: P.A, B: P.B, j: a.j, zb: k, options: a }); W = { x: 0, y: 0, w: g * h, h: d * h, pixelRatio: a.j, centerx: P.A * h, centery: P.B * h, radii: k }; a.tb && a.tb(W)
            }
        }; this.Tc = function () { return n ? W : void 0 }; this.Nc = function () { n && P && (z(n), p(n), q(n), P.$()) }; this.o = function () { n && M.I({ type: "dirty" }) };
        this.L = function (d, g) { n && (X.u(g) && (g = !0), y({ Bb: d, Sa: "open", value: D(d, "open", !0), Ab: D(d, "resetValue", void 0), Qa: g ? D(d, "onChange", a.qc) : void 0, Ta: "groupOpenOrClose" })) }; this.sa = function (d, g) { n && (X.u(g) && (g = !0), y({ Bb: d, Sa: "zoomed", value: D(d, "zoomed", !0), Ab: D(d, "resetValue", void 0), Qa: g ? D(d, "onChange", a.sc) : void 0, Ta: "groupZoom" })) }; this.aa = function (d, g) {
            if (n) {
                X.u(g) && (g = !0); var h = y({ Bb: d, Sa: "selected", value: D(d, "selected", !0), Ab: D(d, "resetValue", void 0), Qa: g ? D(d, "onChange", a.rc) : void 0, Ta: "selectionChanged" });
                if (!X.P(d, "open") || d.open) { var k = []; h.forEach(function (l) { if (l.ib()) for (; l.parent;)!l.parent.ya() && l.index >= a.ra && k.push(l.parent), l = l.parent; return !1 }); 0 < k.length && this.L({ nodes: k, open: !0 }, g) } M.I({ type: "postChangeSelection", selected: R.Ba("selected"), $d: g })
            }
        }; this.Pc = function () { return { groups: R.Ba("open").groups } }; this.Qc = function () { return { groups: R.Ba("selected").groups } }; this.Rc = function () { return { groups: R.Ba("zoomed").groups } }; this.Sc = function (d) {
            var g = Z.L(d, "format", "image/png"), h = Z.L(d, "quality",
                .8), k = P.v, l = a.la, t = a.ma, w = a.j; d = Z.L(d, "pixelRatio", w); var E = document.createElement("canvas"); if (n) try { a.la = 0; a.ma = 0; a.j = d; R.i(); M.I({ type: "paint" }); var B = ja.canvas; E.width = B.width; E.height = B.height; var F = E.getContext("2d"); F.save(); M.o.forEach(function (H) { F.globalAlpha = "" === H.canvas.style.opacity ? 1 : H.canvas.style.opacity; F.drawImage(H.canvas, 0, 0) }); F.restore() } finally { a.j = w, P.v = k, R.i(), M.I({ type: "paint" }), a.ma = t, a.la = l } return E.toDataURL(g, h)
        }; this.Oc = function () {
            X.extend(fa, a); ha && (ha.options.xb =
                fa.Lb)
        }; this.Ba = function (d) { var g = [], h = []; n && ab(n, function (k) { k.group[d] && (g.push(k), h.push(k.group)) }); return { lc: g, groups: h } }
    } function ib() { return { version: "2.3.8", build: "master/c377a6bc", brandingAllowed: !1 } }; window.CarrotSearchCircles = function (a) {
        function b(u) {
            function z(J) { return /%$/.test(J) ? parseFloat(J.replace(/[%\s]/g, "")) : void 0 } function p(J) { return X.u(J) || X.Na(J) ? J : parseFloat(J.replace(/[%\s]/g, "")) } function q(J) { return function () { if (J) return J.apply(c, arguments) } } function r(J) { function U() { var Q = [], ca = arguments; X.forEach(L, function (R) { Q.push(R.apply(c, ca)) }); return Q } var L = []; X.isArray(J) ? X.forEach(J, function (Q) { X.ga(Q) && L.push(Q) }) : X.ga(J) && L.push(J); U.F = function () { return X.clone(L) }; return U }
            (function () {
                e.id = f.id; e.element = f.element; e.A = f.centerx; e.B = f.centery; e.va = f.diameter; e.bb = f.dataObject; e.dc = f.logging; e.Bc = f.textureMappingMesh; e.backgroundColor = f.backgroundColor; e.ze = Z.o(Z.i(e.backgroundColor)); e.Wd = f.ringScaling; e.xc = f.ringShape; e.ra = f.visibleGroupCount; e.Mc = f.zoomedFraction; e.oe = f.updateTime; e.jd = f.expandTime; e.re = f.zoomTime; e.kd = f.expanderAngle; e.Fd = f.minExpanderAngle; e.Qb = f.expanderOutlineWidth; e.Pb = f.expanderOutlineColor; e.De = Z.o(Z.i(e.Pb)); e.Ob = f.expanderColor; e.Ce = Z.o(Z.i(e.Ob));
                e.qe = f.zoomDecorationStrokeColor; e.pe = f.zoomDecorationFillColor; e.la = f.deferLabelRedraws; e.ma = f.labelRedrawFadeInTime; e.S = f.angleStart; e.ba = f.angleEnd; e.Ea = f.angleWidth; if (!X.u(e.ba)) { e.S = Ta(e.S); e.ba = Ta(e.ba); if (e.S >= e.ba) { var J = e.S; e.S = e.ba; e.ba = J } e.Ea = e.ba - e.S; 0 == Ta(e.Ea) && 0 != f.angleEnd && (e.Ea = 360) } e.Xd = f.rolloutAnimation; e.Yd = f.rolloutTime; e.Kd = f.pullbackAnimation; e.Ld = f.pullbackTime; e.Rd = f.rainbowStartColor; e.Sd = Z.o(Z.i(e.Rd)); e.Pd = f.rainbowEndColor; e.Qd = Z.o(Z.i(e.Pd)); e.wd = f.groupHoverHierarchy;
                e.Ub = f.groupHoverColor; e.Fe = Z.o(Z.i(e.Ub)); e.xd = f.groupHoverOutlineWidth; e.Vb = f.groupHoverOutlineColor; e.Ge = Z.o(Z.i(e.Vb)); e.Zb = f.groupSelectionColor; e.Ie = Z.o(Z.i(e.Zb)); e.yd = f.groupSelectionOutlineWidth; e.$b = f.groupSelectionOutlineColor; e.Je = Z.o(Z.i(e.$b)); e.Ma = f.groupOutlineWidth; e.Yb = f.groupOutlineColor; e.He = Z.o(Z.i(e.Yb)); e.Cd = f.labelLightColor; e.nb = Z.o(Z.i(e.Cd)); e.Bd = f.labelDarkColor; e.mb = Z.o(Z.i(e.Bd)); e.Oa = f.labelColorThreshold; e.Tb = f.groupFontFamily; e.La = f.groupMinFontSize; e.Ka = f.groupMaxFontSize;
                e.Xb = f.groupLinePaddingRatio; e.Wb = q(f.groupLabelDecorator); e.Sb = q(f.groupColorDecorator); e.Uc = f.angularTextureStep; e.Od = f.radialTextureStep; e.ie = f.textureOverlapFudge; e.Hd = f.noTexturingCurvature; e.Vd = f.ratioRadialPadding; e.Gd = f.minRadialPadding; e.Td = f.ratioAngularPadding; e.Ed = f.minAngularPadding; e.Ud = f.ratioAspectSwap; e.bc = f.isGroupVisible; e.tc = r(f.onModelChanged); e.vc = r(f.onRolloutStart); e.uc = r(f.onRolloutComplete); e.ub = r(f.onRedraw); e.tb = r(f.onLayout); e.pc = r(f.onGroupHover); e.qc = r(f.onGroupOpenOrClose);
                e.sc = r(f.onGroupZoom); e.rc = r(f.onGroupSelectionChanging); e.sb = r(f.onGroupSelectionChanged); e.mc = r(f.onBeforeSelection); e.nc = r(f.onBeforeZoom); e.qb = r(f.onGroupClick); e.rb = r(f.onGroupDoubleClick); e.be = f.showZeroWeightGroups; e.j = f.pixelRatio; e.Lb = f.captureMouseEvents; e.ka = f.attributionLogo; e.ab = f.attributionUrl; e.Vc = f.attributionPositionX; e.Wc = f.attributionPositionY; e.$a = f.attributionFadeOutTime; e.Ga = f.attributionStayOnTime; e.Ib = f.attributionSize; e.Cc = f.titleBar; e.ke = f.titleBarFontFamily; e.Xa = f.titleBarMinFontSize;
                e.Wa = f.titleBarMaxFontSize; e.Dc = f.titleBarBackgroundColor; e.je = Z.o(Z.i(e.Dc)); e.Gc = f.titleBarTextColor; e.le = Z.o(Z.i(e.Gc)); e.Hc = f.titleBarTextPaddingLeftRight; e.Fb = f.titleBarTextPaddingTopBottom; e.Eb = f.titleBarLabelDecorator; e.Fa = Number(f.attributionFadeInTime); isNaN(e.Fa) && (e.Fa = 0); e.kc = z(e.La); e.fc = z(e.Ka); e.La = p(e.La); e.Ka = p(e.Ka); e.Fc = z(e.Xa); e.Xa = p(e.Xa); e.Ec = z(e.Wa); e.Wa = p(e.Wa); e.ra || (e.ra = Number.MAX_VALUE); e.pb = f.modelChangeAnimations; "auto" == e.pb && (e.pb = /iPad|iPhone/.test(window.navigator.userAgent) ?
                    "sequential" : "parallel")
            })(); for (var y = "dataObject showZeroWeightGroups attributionLogo attributionStayOnTime attributionFadeOutTime attributionFadeInTime pixelRatio".split(" "), A = !1, D = 0; D < y.length; D++)if ("undefined" != typeof u[y[D]]) { m.$(); A = !0; break } m.Oc(); if (!A) for (y = "centerx centery diameter ringScaling ringShape visibleGroupCount zoomedFraction expanderAngle minExpanderAngle angleStart angleEnd angleWidth rainbowStartColor rainbowEndColor labelColorThreshold labelDarkColor labelLightColor groupFontFamily groupMinFontSize groupMaxFontSize groupLinePaddingRatio ratioRadialPadding minRadialPadding ratioAngularPadding minAngularPadding groupLabelDecorator groupColorDecorator textureMappingMesh radialTextureStep angularTextureStep textureOverlapFudge attributionLogo attributionUrl attributionPositionX attributionPositionY attributionSize attributionFadeOutTime attributionStayOnTime noTexturingCurvature isGroupVisible ratioAspectSwap titleBar titleBarFontFamily titleBarMinFontSize titleBarMaxFontSize titleBarBackgroundColor titleBarTextColor titleBarTextPaddingLeftRight titleBarTextPaddingTopBottom titleBarLabelDecorator zoomDecorationStrokeColor zoomDecorationFillColor".split(" "),
                D = 0; D < y.length; D++)if ("undefined" != typeof u[y[D]]) { m.i(); m.o(); break } "undefined" !== typeof u.selection && (delete f.selection, m.aa(u.selection, !1)); "undefined" !== typeof u.open && (delete f.open, m.L(u.open, !1)); "undefined" !== typeof u.zoom && (delete f.zoom, m.sa(u.zoom, !1))
        } if (window.CarrotSearchCircles.supported) {
            var c = this; a = (new db).i(this, {
                ia: "Circles", ae: a, N: {
                    id: null, element: null, dataObject: null, logging: !1, times: null, textureMappingMesh: !1, backgroundColor: "rgba(0, 0, 0, 0)", centerx: "50%", centery: "50%",
                    diameter: "99%", layout: void 0, ringScaling: .75, ringShape: void 0, angleStart: 0, angleEnd: void 0, angleWidth: 360, showZeroWeightGroups: !0, visibleGroupCount: 6, zoomedFraction: .75, groupOutlineWidth: 1, groupOutlineColor: "rgba(0, 0, 0, 0.5)", rainbowStartColor: "hsla(0, 100%, 50%, 0.7)", rainbowEndColor: "hsla(300, 100%, 50%, 0.7)", labelDarkColor: "rgba(0, 0, 0, 0.8)", labelLightColor: "rgba(255, 255, 255, 0.8)", labelColorThreshold: .35, groupColorDecorator: null, groupFontFamily: "Impact, Charcoal, sans-serif", groupMinFontSize: "5",
                    groupMaxFontSize: "30", groupLinePaddingRatio: 0, groupLabelDecorator: null, ratioAspectSwap: .8, ratioRadialPadding: .1, minRadialPadding: 4, ratioAngularPadding: .2, minAngularPadding: 2, radialTextureStep: 30, angularTextureStep: 25, noTexturingCurvature: .1, textureOverlapFudge: navigator.userAgent.match(/Chrome/i) ? 0 : .5, deferLabelRedraws: .25, labelRedrawFadeInTime: .5, expanderAngle: 2, minExpanderAngle: 1, expanderOutlineWidth: 1, expanderOutlineColor: "rgba(0, 0, 0, .2)", expanderColor: "rgba(255, 136, 136, 0.8)", expandTime: 1,
                    zoomDecorationStrokeColor: "hsla(0, 0%, 0%, 0.2)", zoomDecorationFillColor: "hsla(0, 0%, 0%, 0.1)", zoomTime: 1, rolloutAnimation: "random", rolloutTime: 1, pullbackAnimation: "random", pullbackTime: .5, updateTime: 1, modelChangeAnimations: "auto", groupSelectionColor: "rgba(255, 128, 128, 0.1)", groupSelectionOutlineColor: "rgba(255, 128, 128, 1)", groupSelectionOutlineWidth: 3, groupHoverColor: "rgba(0, 0, 227, 0.1)", groupHoverOutlineColor: "rgba(0, 0, 227, 0.1)", groupHoverOutlineWidth: 1, groupHoverHierarchy: !0, selection: null,
                    open: null, zoom: null, attributionLogo: "carrotsearch", attributionUrl: "http://carrotsearch.com/circles", attributionPositionX: "3%", attributionPositionY: "97%", attributionSize: void 0, attributionStayOnTime: 3, attributionFadeOutTime: 3, attributionFadeInTime: .5, titleBar: "none", titleBarFontFamily: void 0, titleBarMinFontSize: 8, titleBarMaxFontSize: 40, titleBarBackgroundColor: "rgba(0, 0, 0, 0)", titleBarTextColor: "rgba(255, 255, 255, .7)", titleBarTextPaddingLeftRight: 5, titleBarTextPaddingTopBottom: 5, titleBarLabelDecorator: void 0,
                    isGroupVisible: null, onModelChanged: void 0, onRolloutStart: void 0, onRolloutComplete: void 0, onRedraw: void 0, onLayout: void 0, onGroupHover: void 0, onGroupZoom: void 0, onGroupOpenOrClose: void 0, onGroupSelectionChanging: void 0, onGroupSelectionChanged: void 0, onGroupClick: void 0, onGroupDoubleClick: void 0, onBeforeZoom: void 0, onBeforeSelection: void 0, pixelRatio: 1, captureMouseEvents: !0
                }, Hb: {}, ua: {
                    get: function (u, z) {
                        switch (u) {
                            case "selection": return m.Qc(); case "open": return m.Pc(); case "zoom": return m.Rc(); case "times": return m.ta();
                            case "layout": return m.Tc(); case "imageData": return m.Sc(z[0]); case "onModelChanged": return e.tc.F(); case "onRolloutStart": return e.vc.F(); case "onRolloutComplete": return e.uc.F(); case "onRedraw": return e.ub.F(); case "onLayout": return e.tb.F(); case "onGroupHover": return e.pc.F(); case "onGroupOpenOrClose": return e.qc.F(); case "onGroupZoom": return e.sc.F(); case "onBeforeSelection": return e.mc.F(); case "onBeforeZoom": return e.nc.F(); case "onGroupClick": return e.qb.F(); case "onGroupDoubleClick": return e.rb.F();
                            case "onGroupSelectionChanging": return e.rc.F(); case "onGroupSelectionChanged": return e.sb.F(); default: return f[u]
                        }
                    }, set: b, validate: function (u) {
                        var z = window.CarrotSearchCircles.attributes; if (z) {
                            var p = ib().version; X.forEach(u, function (q, r) {
                                try { z[r] && z[r].asserts && (z[r].asserts.validate(q), z[r].deprecated && window.console && window.console.warn("Attribute '" + r + "' has been deprecated in version " + z[r].deprecated + " (you are using version " + p + ")")) } catch (y) {
                                    window.console && (window.console.error("Attribute validation failed for '" +
                                        r + "': " + y), window.console.log("Expected value for '" + r + "': " + z[r].asserts)), delete u[r]
                                }
                            })
                        }
                    }
                }
            }); var f = a.options, e = {}, m = new hb(e); b({}); if (null == e.id && null == e.element) throw Error("Either an id or element attributes are required for embedding."); if (null != e.id && null != e.element) throw Error("Either an id or element attributes are required for embedding (never both).", e.id, e.element); if (null != e.id) {
                var v = document.getElementById(e.id); if (null == v) throw Error("No such element in the document: " + e.id); var x =
                    a.Nb(v)
            } else x = a.Nb(e.element); this.resize = function () { var u = e.j; return 0 < x.clientWidth && 0 < x.clientHeight && (x.width != x.clientWidth * u || x.height != x.clientHeight * u) ? (m.i(), m.o(), !0) : !1 }; this.update = function () { m.Nc() }; this.redraw = function () { m.o() }; this.layout = function () { m.i() }; this.dispose = function () { }; this.version = ib; this.groupShape = function (u) { return m.Da(u) }; m.Ya(x); m.$()
        }
    }; var jb = window.CarrotSearchCircles, kb, lb = document.createElement("canvas"); kb = !(!lb.getContext || !lb.getContext("2d"));
    jb.supported = kb; window.CarrotSearchCircles.version = ib; var mb = window.CarrotSearchCircles, nb; var ob = window["CarrotSearchCircles.attributes"]; ob ? (delete window["CarrotSearchCircles.attributes"], nb = ob) : nb = {}; mb.attributes = nb;
})();

