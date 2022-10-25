if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(T, e) {
        function r(e) {
            var t = !!e && "length" in e && e.length,
                n = ne.type(e);
            return "function" !== n && !ne.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }

        function t(e, n, i) {
            if (ne.isFunction(n)) return ne.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            });
            if (n.nodeType) return ne.grep(e, function(e) {
                return e === n !== i
            });
            if ("string" == typeof n) {
                if (ue.test(n)) return ne.filter(n, e, i);
                n = ne.filter(n, e)
            }
            return ne.grep(e, function(e) {
                return -1 < ne.inArray(e, n) !== i
            })
        }

        function n(e, t) {
            for (; e = e[t], e && 1 !== e.nodeType;);
            return e
        }

        function i() {
            X.addEventListener ? (X.removeEventListener("DOMContentLoaded", s), T.removeEventListener("load", s)) : (X.detachEvent("onreadystatechange", s), T.detachEvent("onload", s))
        }

        function s() {
            !X.addEventListener && "load" !== T.event.type && "complete" !== X.readyState || (i(), ne.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Se, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Te.test(n) ? ne.parseJSON(n) : n)
                    } catch (e) {}
                    ne.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function c(e) {
            for (var t in e)
                if (("data" !== t || !ne.isEmptyObject(e[t])) && "toJSON" !== t) return;
            return 1
        }

        function o(e, t, n, i) {
            if (ye(e)) {
                var s, o = ne.expando,
                    a = e.nodeType,
                    r = a ? ne.cache : e,
                    l = a ? e[o] : e[o] && o;
                if (l && r[l] && (i || r[l].data) || void 0 !== n || "string" != typeof t) return r[l = l || (a ? e[o] = W.pop() || ne.guid++ : o)] || (r[l] = a ? {} : {
                    toJSON: ne.noop
                }), "object" != typeof t && "function" != typeof t || (i ? r[l] = ne.extend(r[l], t) : r[l].data = ne.extend(r[l].data, t)), l = r[l], i || (l.data || (l.data = {}), l = l.data), void 0 !== n && (l[ne.camelCase(t)] = n), "string" == typeof t ? null == (s = l[t]) && (s = l[ne.camelCase(t)]) : s = l, s
            }
        }

        function a(e, t, n) {
            if (ye(e)) {
                var i, s, o = e.nodeType,
                    a = o ? ne.cache : e,
                    r = o ? e[ne.expando] : ne.expando;
                if (a[r]) {
                    if (t && (i = n ? a[r] : a[r].data)) {
                        s = (t = ne.isArray(t) ? t.concat(ne.map(t, ne.camelCase)) : t in i ? [t] : (t = ne.camelCase(t)) in i ? [t] : t.split(" ")).length;
                        for (; s--;) delete i[t[s]];
                        if (n ? !c(i) : !ne.isEmptyObject(i)) return
                    }(n || (delete a[r].data, c(a[r]))) && (o ? ne.cleanData([e], !0) : te.deleteExpando || a != a.window ? delete a[r] : a[r] = void 0)
                }
            }
        }

        function d(e, t, n, i) {
            var s, o = 1,
                a = 20,
                r = i ? function() {
                    return i.cur()
                } : function() {
                    return ne.css(e, t, "")
                },
                l = r(),
                c = n && n[3] || (ne.cssNumber[t] ? "" : "px"),
                d = (ne.cssNumber[t] || "px" !== c && +l) && Ee.exec(ne.css(e, t));
            if (d && d[3] !== c)
                for (c = c || d[3], n = n || [], d = +l || 1; d /= o = o || ".5", ne.style(e, t, d + c), o !== (o = r() / l) && 1 !== o && --a;);
            return n && (d = +d || +l || 0, s = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = s)), s
        }

        function g(e) {
            var t = $e.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function v(e, t) {
            var n, i, s = 0,
                o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[s]); s++) !t || ne.nodeName(i, t) ? o.push(i) : ne.merge(o, v(i, t));
            return void 0 === t || t && ne.nodeName(e, t) ? ne.merge([e], o) : o
        }

        function b(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ne._data(n, "globalEval", !t || ne._data(t[i], "globalEval"))
        }

        function m(e, t, n, i, s) {
            for (var o, a, r, l, c, d, u, h = e.length, p = g(t), f = [], m = 0; m < h; m++)
                if ((a = e[m]) || 0 === a)
                    if ("object" === ne.type(a)) ne.merge(f, a.nodeType ? [a] : a);
                    else if (Le.test(a)) {
                for (l = l || p.appendChild(t.createElement("div")), c = (ke.exec(a) || ["", ""])[1].toLowerCase(), u = Ie[c] || Ie._default, l.innerHTML = u[1] + ne.htmlPrefilter(a) + u[2], o = u[0]; o--;) l = l.lastChild;
                if (!te.leadingWhitespace && De.test(a) && f.push(t.createTextNode(De.exec(a)[0])), !te.tbody)
                    for (o = (a = "table" !== c || He.test(a) ? "<table>" !== u[1] || He.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; o--;) ne.nodeName(d = a.childNodes[o], "tbody") && !d.childNodes.length && a.removeChild(d);
                for (ne.merge(f, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = p.lastChild
            } else f.push(t.createTextNode(a));
            for (l && p.removeChild(l), te.appendChecked || ne.grep(v(f, "input"), function(e) {
                    Me.test(e.type) && (e.defaultChecked = e.checked)
                }), m = 0; a = f[m++];)
                if (i && -1 < ne.inArray(a, i)) s && s.push(a);
                else if (r = ne.contains(a.ownerDocument, a), l = v(p.appendChild(a), "script"), r && b(l), n)
                for (o = 0; a = l[o++];) _e.test(a.type || "") && n.push(a);
            return l = null, p
        }

        function u() {
            return !0
        }

        function h() {
            return !1
        }

        function p() {
            try {
                return X.activeElement
            } catch (e) {}
        }

        function f(e, t, n, i, s, o) {
            var a, r;
            if ("object" == typeof t) {
                for (r in "string" != typeof n && (i = i || n, n = void 0), t) f(e, r, n, i, t[r], o);
                return e
            }
            if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = h;
            else if (!s) return e;
            return 1 === o && (a = s, (s = function(e) {
                return ne().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = ne.guid++)), e.each(function() {
                ne.event.add(this, t, s, i, n)
            })
        }

        function y(e, t) {
            return ne.nodeName(e, "table") && ne.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function w(e) {
            return e.type = (null !== ne.find.attr(e, "type")) + "/" + e.type, e
        }

        function S(e) {
            var t = We.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function x(e, t) {
            if (1 === t.nodeType && ne.hasData(e)) {
                var n, i, s, o = ne._data(e),
                    e = ne._data(t, o),
                    a = o.events;
                if (a)
                    for (n in delete e.handle, e.events = {}, a)
                        for (i = 0, s = a[n].length; i < s; i++) ne.event.add(t, n, a[n][i]);
                e.data && (e.data = ne.extend({}, e.data))
            }
        }

        function C(n, i, s, o) {
            i = Y.apply([], i);
            var e, t, a, r, l, c, d = 0,
                u = n.length,
                h = u - 1,
                p = i[0],
                f = ne.isFunction(p);
            if (f || 1 < u && "string" == typeof p && !te.checkClone && Ve.test(p)) return n.each(function(e) {
                var t = n.eq(e);
                f && (i[0] = p.call(this, e, t.html())), C(t, i, s, o)
            });
            if (u && (e = (c = m(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === c.childNodes.length && (c = e), e || o)) {
                for (a = (r = ne.map(v(c, "script"), w)).length; d < u; d++) t = c, d !== h && (t = ne.clone(t, !0, !0), a && ne.merge(r, v(t, "script"))), s.call(n[d], t, d);
                if (a)
                    for (l = r[r.length - 1].ownerDocument, ne.map(r, S), d = 0; d < a; d++) t = r[d], _e.test(t.type || "") && !ne._data(t, "globalEval") && ne.contains(l, t) && (t.src ? ne._evalUrl && ne._evalUrl(t.src) : ne.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Xe, "")));
                c = e = null
            }
            return n
        }

        function E(e, t, n) {
            for (var i, s = t ? ne.filter(t, e) : e, o = 0; null != (i = s[o]); o++) n || 1 !== i.nodeType || ne.cleanData(v(i)), i.parentNode && (n && ne.contains(i.ownerDocument, i) && b(v(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function P(e, t) {
            e = ne(t.createElement(e)).appendTo(t.body), t = ne.css(e[0], "display");
            return e.detach(), t
        }

        function A(e) {
            var t = X,
                n = ot[e];
            return n || ("none" !== (n = P(e, t)) && n || ((t = ((Ke = (Ke || ne("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ke[0].contentDocument).document).write(), t.close(), n = P(e, t), Ke.detach()), ot[e] = n), n
        }

        function M(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function k(e) {
            if (e in wt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = yt.length; n--;)
                if ((e = yt[n] + t) in wt) return e
        }

        function _(e, t) {
            for (var n, i, s, o = [], a = 0, r = e.length; a < r; a++)(i = e[a]).style && (o[a] = ne._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (o[a] = ne._data(i, "olddisplay", A(i.nodeName)))) : (s = xe(i), (n && "none" !== n || !s) && ne._data(i, "olddisplay", s ? n : ne.css(i, "display"))));
            for (a = 0; a < r; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function D(e, t, n) {
            var i = gt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function $(e, t, n, i, s) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ne.css(e, n + Pe[o], !0, s)), i ? ("content" === n && (a -= ne.css(e, "padding" + Pe[o], !0, s)), "margin" !== n && (a -= ne.css(e, "border" + Pe[o] + "Width", !0, s))) : (a += ne.css(e, "padding" + Pe[o], !0, s), "padding" !== n && (a += ne.css(e, "border" + Pe[o] + "Width", !0, s)));
            return a
        }

        function I(e, t, n) {
            var i = !0,
                s = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = dt(e),
                a = te.boxSizing && "border-box" === ne.css(e, "boxSizing", !1, o);
            if (X.msFullscreenElement && T.top !== T && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[t])), s <= 0 || null == s) {
                if (((s = ut(e, t, o)) < 0 || null == s) && (s = e.style[t]), rt.test(s)) return s;
                i = a && (te.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
            }
            return s + $(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function L(e, t, n, i, s) {
            return new L.prototype.init(e, t, n, i, s)
        }

        function H() {
            return T.setTimeout(function() {
                Tt = void 0
            }), Tt = ne.now()
        }

        function N(e, t) {
            var n, i = {
                    height: e
                },
                s = 0;
            for (t = t ? 1 : 0; s < 4; s += 2 - t) i["margin" + (n = Pe[s])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function O(e, t, n) {
            for (var i, s = (B.tweeners[t] || []).concat(B.tweeners["*"]), o = 0, a = s.length; o < a; o++)
                if (i = s[o].call(n, t, e)) return i
        }

        function B(s, e, t) {
            var n, o, i = 0,
                a = B.prefilters.length,
                r = ne.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Tt || H(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(t);
                    return r.notifyWith(s, [c, t, e]), t < 1 && i ? e : (r.resolveWith(s, [c]), !1)
                },
                c = r.promise({
                    elem: s,
                    props: ne.extend({}, e),
                    opts: ne.extend(!0, {
                        specialEasing: {},
                        easing: ne.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Tt || H(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        e = ne.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(e), e
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; t < n; t++) c.tweens[t].run(1);
                        return e ? (r.notifyWith(s, [c, 1, 0]), r.resolveWith(s, [c, e])) : r.rejectWith(s, [c, e]), this
                    }
                }),
                d = c.props;
            for (function(e, t) {
                    var n, i, s, o, a;
                    for (n in e)
                        if (i = ne.camelCase(n), s = t[i], o = e[n], ne.isArray(o) && (s = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = ne.cssHooks[i]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = s);
                        else t[i] = s
                }(d, c.opts.specialEasing); i < a; i++)
                if (n = B.prefilters[i].call(c, s, d, c.opts)) return ne.isFunction(n.stop) && (ne._queueHooks(c.elem, c.opts.queue).stop = ne.proxy(n.stop, n)), n;
            return ne.map(d, O, c), ne.isFunction(c.opts.start) && c.opts.start.call(s, c), ne.fx.timer(ne.extend(l, {
                elem: s,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function G(e) {
            return ne.attr(e, "class") || ""
        }

        function z(o) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, i = 0,
                    s = e.toLowerCase().match(be) || [];
                if (ne.isFunction(t))
                    for (; n = s[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }

        function j(t, i, s, o) {
            function a(e) {
                var n;
                return r[e] = !0, ne.each(t[e] || [], function(e, t) {
                    t = t(i, s, o);
                    return "string" != typeof t || l || r[t] ? l ? !(n = t) : void 0 : (i.dataTypes.unshift(t), a(t), !1)
                }), n
            }
            var r = {},
                l = t === Ut;
            return a(i.dataTypes[0]) || !r["*"] && a("*")
        }

        function F(e, t) {
            var n, i, s = ne.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((s[i] ? e : n = n || {})[i] = t[i]);
            return n && ne.extend(!0, e, n), e
        }

        function R() {
            try {
                return new T.XMLHttpRequest
            } catch (e) {}
        }

        function q() {
            try {
                return new T.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function V(e) {
            return ne.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var W = [],
            X = T.document,
            U = W.slice,
            Y = W.concat,
            K = W.push,
            Q = W.indexOf,
            Z = {},
            J = Z.toString,
            ee = Z.hasOwnProperty,
            te = {},
            ne = function(e, t) {
                return new ne.fn.init(e, t)
            },
            ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            oe = /-([\da-z])/gi;
        ne.fn = ne.prototype = {
            jquery: "1.12.0",
            constructor: ne,
            selector: "",
            length: 0,
            toArray: function() {
                return U.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : U.call(this)
            },
            pushStack: function(e) {
                e = ne.merge(this.constructor(), e);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(e) {
                return ne.each(this, e)
            },
            map: function(n) {
                return this.pushStack(ne.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(U.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: K,
            sort: W.sort,
            splice: W.splice
        }, ne.extend = ne.fn.extend = function() {
            var e, t, n, i, s, o = arguments[0] || {},
                a = 1,
                r = arguments.length,
                l = !1;
            for ("boolean" == typeof o && (l = o, o = arguments[a] || {}, a++), "object" == typeof o || ne.isFunction(o) || (o = {}), a === r && (o = this, a--); a < r; a++)
                if (null != (i = arguments[a]))
                    for (n in i) s = o[n], t = i[n], o !== t && (l && t && (ne.isPlainObject(t) || (e = ne.isArray(t))) ? (s = e ? (e = !1, s && ne.isArray(s) ? s : []) : s && ne.isPlainObject(s) ? s : {}, o[n] = ne.extend(l, s, t)) : void 0 !== t && (o[n] = t));
            return o
        }, ne.extend({
            expando: "jQuery" + ("1.12.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ne.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ne.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !ne.isArray(e) && 0 <= t - parseFloat(t) + 1
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                if (!e || "object" !== ne.type(e) || e.nodeType || ne.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ee.call(e, "constructor") && !ee.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (!te.ownFirst)
                    for (var t in e) return ee.call(e, t);
                for (t in e);
                return void 0 === t || ee.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[J.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                e && ne.trim(e) && (T.execScript || function(e) {
                    T.eval.call(T, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(se, "ms-").replace(oe, function(e, t) {
                    return t.toUpperCase()
                })
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (r(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ie, "")
            },
            makeArray: function(e, t) {
                t = t || [];
                return null != e && (r(Object(e)) ? ne.merge(t, "string" == typeof e ? [e] : e) : K.call(t, e)), t
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (Q) return Q.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, s = e.length; i < n;) e[s++] = t[i++];
                if (n != n)
                    for (; void 0 !== t[i];) e[s++] = t[i++];
                return e.length = s, e
            },
            grep: function(e, t, n) {
                for (var i = [], s = 0, o = e.length, a = !n; s < o; s++) !t(e[s], s) != a && i.push(e[s]);
                return i
            },
            map: function(e, t, n) {
                var i, s, o = 0,
                    a = [];
                if (r(e))
                    for (i = e.length; o < i; o++) null != (s = t(e[o], o, n)) && a.push(s);
                else
                    for (o in e) null != (s = t(e[o], o, n)) && a.push(s);
                return Y.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i;
                return "string" == typeof t && (i = e[t], t = e, e = i), ne.isFunction(e) ? (n = U.call(arguments, 2), (i = function() {
                    return e.apply(t || this, n.concat(U.call(arguments)))
                }).guid = e.guid = e.guid || ne.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: te
        }), "function" == typeof Symbol && (ne.fn[Symbol.iterator] = W[Symbol.iterator]), ne.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var ae = function(n) {
            function w(e, t, n, i) {
                var s, o, a, r, l, c, d, u, h = t && t.ownerDocument,
                    p = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!i && ((t ? t.ownerDocument || t : B) !== _ && k(t), t = t || _, $)) {
                    if (11 !== p && (c = fe.exec(e)))
                        if (s = c[1]) {
                            if (9 === p) {
                                if (!(a = t.getElementById(s))) return n;
                                if (a.id === s) return n.push(a), n
                            } else if (h && (a = h.getElementById(s)) && N(t, a) && a.id === s) return n.push(a), n
                        } else {
                            if (c[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = c[3]) && b.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(s)), n
                        } if (b.qsa && !R[e + " "] && (!I || !I.test(e))) {
                        if (1 !== p) h = t, u = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((r = t.getAttribute("id")) ? r = r.replace(ge, "\\$&") : t.setAttribute("id", r = O), o = (d = x(e)).length, l = ce.test(r) ? "#" + r : "[id='" + r + "']"; o--;) d[o] = l + " " + m(d[o]);
                            u = d.join(","), h = me.test(e) && f(t.parentNode) || t
                        }
                        if (u) try {
                            return Y.apply(n, h.querySelectorAll(u)), n
                        } catch (e) {} finally {
                            r === O && t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(se, "$1"), t, n, i)
            }

            function e() {
                function n(e, t) {
                    return i.push(e + " ") > S.cacheLength && delete n[i.shift()], n[e + " "] = t
                }
                var i = [];
                return n
            }

            function u(e) {
                return e[O] = !0, e
            }

            function t(e) {
                var t = _.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function i(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) S.attrHandle[n[i]] = t
            }

            function l(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(a) {
                return u(function(o) {
                    return o = +o, u(function(e, t) {
                        for (var n, i = a([], e.length, o), s = i.length; s--;) e[n = i[s]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function f(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function o() {}

            function m(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function h(a, e, t) {
                var r = e.dir,
                    l = t && "parentNode" === r,
                    c = z++;
                return e.first ? function(e, t, n) {
                    for (; e = e[r];)
                        if (1 === e.nodeType || l) return a(e, t, n)
                } : function(e, t, n) {
                    var i, s, o = [G, c];
                    if (n) {
                        for (; e = e[r];)
                            if ((1 === e.nodeType || l) && a(e, t, n)) return !0
                    } else
                        for (; e = e[r];)
                            if (1 === e.nodeType || l) {
                                if ((s = (i = (s = e[O] || (e[O] = {}))[e.uniqueID] || (s[e.uniqueID] = {}))[r]) && s[0] === G && s[1] === c) return o[2] = s[2];
                                if ((i[r] = o)[2] = a(e, t, n)) return !0
                            }
                }
            }

            function p(s) {
                return 1 < s.length ? function(e, t, n) {
                    for (var i = s.length; i--;)
                        if (!s[i](e, t, n)) return !1;
                    return !0
                } : s[0]
            }

            function T(e, t, n, i, s) {
                for (var o, a = [], r = 0, l = e.length, c = null != t; r < l; r++) !(o = e[r]) || n && !n(o, i, s) || (a.push(o), c && t.push(r));
                return a
            }

            function g(e) {
                for (var i, t, n, s = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], r = o ? 1 : 0, l = h(function(e) {
                        return e === i
                    }, a, !0), c = h(function(e) {
                        return -1 < Q(i, e)
                    }, a, !0), d = [function(e, t, n) {
                        n = !o && (n || t !== P) || ((i = t).nodeType ? l : c)(e, t, n);
                        return i = null, n
                    }]; r < s; r++)
                    if (t = S.relative[e[r].type]) d = [h(p(d), t)];
                    else {
                        if ((t = S.filter[e[r].type].apply(null, e[r].matches))[O]) {
                            for (n = ++r; n < s && !S.relative[e[n].type]; n++);
                            return function e(p, f, m, g, v, t) {
                                return g && !g[O] && (g = e(g)), v && !v[O] && (v = e(v, t)), u(function(e, t, n, i) {
                                    var s, o, a, r = [],
                                        l = [],
                                        c = t.length,
                                        d = e || function(e, t, n) {
                                            for (var i = 0, s = t.length; i < s; i++) w(e, t[i], n);
                                            return n
                                        }(f || "*", n.nodeType ? [n] : n, []),
                                        u = !p || !e && f ? d : T(d, r, p, n, i),
                                        h = m ? v || (e ? p : c || g) ? [] : t : u;
                                    if (m && m(u, h, n, i), g)
                                        for (s = T(h, l), g(s, [], n, i), o = s.length; o--;)(a = s[o]) && (h[l[o]] = !(u[l[o]] = a));
                                    if (e) {
                                        if (v || p) {
                                            if (v) {
                                                for (s = [], o = h.length; o--;)(a = h[o]) && s.push(u[o] = a);
                                                v(null, h = [], s, i)
                                            }
                                            for (o = h.length; o--;)(a = h[o]) && -1 < (s = v ? Q(e, a) : r[o]) && (e[s] = !(t[s] = a))
                                        }
                                    } else h = T(h === t ? h.splice(c, h.length) : h), v ? v(null, t, h, i) : Y.apply(t, h)
                                })
                            }(1 < r && p(d), 1 < r && m(e.slice(0, r - 1).concat({
                                value: " " === e[r - 2].type ? "*" : ""
                            })).replace(se, "$1"), t, r < n && g(e.slice(r, n)), n < s && g(e = e.slice(n)), n < s && m(e))
                        }
                        d.push(t)
                    } return p(d)
            }

            function a(g, v) {
                function e(e, t, n, i, s) {
                    var o, a, r, l = 0,
                        c = "0",
                        d = e && [],
                        u = [],
                        h = P,
                        p = e || y && S.find.TAG("*", s),
                        f = G += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (s && (P = t === _ || t || s); c !== m && null != (o = p[c]); c++) {
                        if (y && o) {
                            for (a = 0, t || o.ownerDocument === _ || (k(o), n = !$); r = g[a++];)
                                if (r(o, t || _, n)) {
                                    i.push(o);
                                    break
                                } s && (G = f)
                        }
                        b && ((o = !r && o) && l--, e && d.push(o))
                    }
                    if (l += c, b && c !== l) {
                        for (a = 0; r = v[a++];) r(d, u, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) d[c] || u[c] || (u[c] = X.call(i));
                            u = T(u)
                        }
                        Y.apply(i, u), s && !e && 0 < u.length && 1 < l + v.length && w.uniqueSort(i)
                    }
                    return s && (G = f, P = h), d
                }
                var b = 0 < v.length,
                    y = 0 < g.length;
                return b ? u(e) : e
            }

            function v(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }

            function r() {
                k()
            }
            var c, b, S, d, y, x, C, E, P, A, M, k, _, D, $, I, L, H, N, O = "sizzle" + +new Date,
                B = n.document,
                G = 0,
                z = 0,
                j = e(),
                F = e(),
                R = e(),
                q = function(e, t) {
                    return e === t && (M = !0), 0
                },
                V = {}.hasOwnProperty,
                W = [],
                X = W.pop,
                U = W.push,
                Y = W.push,
                K = W.slice,
                Q = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                J = "[\\x20\\t\\r\\n\\f]",
                ee = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                te = "\\[" + J + "*(" + ee + ")(?:" + J + "*([*^$|!~]?=)" + J + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ee + "))|)" + J + "*\\]",
                ne = ":(" + ee + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + te + ")*)|.*)\\)|)",
                ie = new RegExp(J + "+", "g"),
                se = new RegExp("^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$", "g"),
                oe = new RegExp("^" + J + "*," + J + "*"),
                ae = new RegExp("^" + J + "*([>+~]|" + J + ")" + J + "*"),
                re = new RegExp("=" + J + "*([^\\]'\"]*?)" + J + "*\\]", "g"),
                le = new RegExp(ne),
                ce = new RegExp("^" + ee + "$"),
                de = {
                    ID: new RegExp("^#(" + ee + ")"),
                    CLASS: new RegExp("^\\.(" + ee + ")"),
                    TAG: new RegExp("^(" + ee + "|[*])"),
                    ATTR: new RegExp("^" + te),
                    PSEUDO: new RegExp("^" + ne),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
                },
                ue = /^(?:input|select|textarea|button)$/i,
                he = /^h\d$/i,
                pe = /^[^{]+\{\s*\[native \w/,
                fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                me = /[+~]/,
                ge = /'|\\/g,
                ve = new RegExp("\\\\([\\da-f]{1,6}" + J + "?|(" + J + ")|.)", "ig");
            try {
                Y.apply(W = K.call(B.childNodes), B.childNodes), W[B.childNodes.length].nodeType
            } catch (n) {
                Y = {
                    apply: W.length ? function(e, t) {
                        U.apply(e, K.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            for (c in b = w.support = {}, y = w.isXML = function(e) {
                    e = e && (e.ownerDocument || e).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, k = w.setDocument = function(e) {
                    var e = e ? e.ownerDocument || e : B;
                    return e !== _ && 9 === e.nodeType && e.documentElement && (D = (_ = e).documentElement, $ = !y(_), (e = _.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", r, !1) : e.attachEvent && e.attachEvent("onunload", r)), b.attributes = t(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), b.getElementsByTagName = t(function(e) {
                        return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
                    }), b.getElementsByClassName = pe.test(_.getElementsByClassName), b.getById = t(function(e) {
                        return D.appendChild(e).id = O, !_.getElementsByName || !_.getElementsByName(O).length
                    }), b.getById ? (S.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && $) {
                            e = t.getElementById(e);
                            return e ? [e] : []
                        }
                    }, S.filter.ID = function(e) {
                        var t = e.replace(ve, v);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete S.find.ID, S.filter.ID = function(e) {
                        var t = e.replace(ve, v);
                        return function(e) {
                            e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return e && e.value === t
                        }
                    }), S.find.TAG = b.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            s = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; n = o[s++];) 1 === n.nodeType && i.push(n);
                        return i
                    }, S.find.CLASS = b.getElementsByClassName && function(e, t) {
                        return void 0 !== t.getElementsByClassName && $ ? t.getElementsByClassName(e) : void 0
                    }, L = [], I = [], (b.qsa = pe.test(_.querySelectorAll)) && (t(function(e) {
                        D.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + J + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + J + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + O + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || I.push(".#.+[+~]")
                    }), t(function(e) {
                        var t = _.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + J + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                    })), (b.matchesSelector = pe.test(H = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && t(function(e) {
                        b.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), L.push("!=", ne)
                    }), I = I.length && new RegExp(I.join("|")), L = L.length && new RegExp(L.join("|")), e = pe.test(D.compareDocumentPosition), N = e || pe.test(D.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            t = t && t.parentNode;
                        return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, q = e ? function(e, t) {
                        if (e === t) return M = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === B && N(B, e) ? -1 : t === _ || t.ownerDocument === B && N(B, t) ? 1 : A ? Q(A, e) - Q(A, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return M = !0, 0;
                        var n, i = 0,
                            s = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            r = [t];
                        if (!s || !o) return e === _ ? -1 : t === _ ? 1 : s ? -1 : o ? 1 : A ? Q(A, e) - Q(A, t) : 0;
                        if (s === o) return l(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) r.unshift(n);
                        for (; a[i] === r[i];) i++;
                        return i ? l(a[i], r[i]) : a[i] === B ? -1 : r[i] === B ? 1 : 0
                    }), _
                }, w.matches = function(e, t) {
                    return w(e, null, null, t)
                }, w.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== _ && k(e), t = t.replace(re, "='$1']"), b.matchesSelector && $ && !R[t + " "] && (!L || !L.test(t)) && (!I || !I.test(t))) try {
                        var n = H.call(e, t);
                        if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {}
                    return 0 < w(t, _, null, [e]).length
                }, w.contains = function(e, t) {
                    return (e.ownerDocument || e) !== _ && k(e), N(e, t)
                }, w.attr = function(e, t) {
                    (e.ownerDocument || e) !== _ && k(e);
                    var n = S.attrHandle[t.toLowerCase()],
                        n = n && V.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
                    return void 0 !== n ? n : b.attributes || !$ ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }, w.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, w.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        s = 0;
                    if (M = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(q), M) {
                        for (; t = e[s++];) t === e[s] && (i = n.push(s));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return A = null, e
                }, d = w.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        s = e.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += d(e)
                        } else if (3 === s || 4 === s) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += d(t);
                    return n
                }, (S = w.selectors = {
                    cacheLength: 50,
                    createPseudo: u,
                    match: de,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(ve, v), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, v), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(ve, v).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = j[e + " "];
                            return t || (t = new RegExp("(^|" + J + ")" + e + "(" + J + "|$)")) && j(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, i) {
                            return function(e) {
                                e = w.attr(e, t);
                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(ie, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(f, e, t, m, g) {
                            var v = "nth" !== f.slice(0, 3),
                                b = "last" !== f.slice(-4),
                                y = "of-type" === e;
                            return 1 === m && 0 === g ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var i, s, o, a, r, l, c = v != b ? "nextSibling" : "previousSibling",
                                    d = e.parentNode,
                                    u = y && e.nodeName.toLowerCase(),
                                    h = !n && !y,
                                    p = !1;
                                if (d) {
                                    if (v) {
                                        for (; c;) {
                                            for (a = e; a = a[c];)
                                                if (y ? a.nodeName.toLowerCase() === u : 1 === a.nodeType) return !1;
                                            l = c = "only" === f && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [b ? d.firstChild : d.lastChild], b && h) {
                                        for (p = (r = (i = (s = (o = (a = d)[O] || (a[O] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] || [])[0] === G && i[1]) && i[2], a = r && d.childNodes[r]; a = ++r && a && a[c] || (p = r = 0) || l.pop();)
                                            if (1 === a.nodeType && ++p && a === e) {
                                                s[f] = [G, r, p];
                                                break
                                            }
                                    } else if (h && (p = r = (i = (s = (o = (a = e)[O] || (a[O] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] || [])[0] === G && i[1]), !1 === p)
                                        for (;
                                            (a = ++r && a && a[c] || (p = r = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== u : 1 !== a.nodeType) || !++p || (h && ((s = (o = a[O] || (a[O] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] = [G, p]), a !== e)););
                                    return (p -= g) === m || p % m == 0 && 0 <= p / m
                                }
                            }
                        },
                        PSEUDO: function(e, o) {
                            var t, a = S.pseudos[e] || S.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                            return a[O] ? a(o) : 1 < a.length ? (t = [e, e, "", o], S.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, t) {
                                for (var n, i = a(e, o), s = i.length; s--;) e[n = Q(e, i[s])] = !(t[n] = i[s])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: u(function(e) {
                            var i = [],
                                s = [],
                                r = C(e.replace(se, "$1"));
                            return r[O] ? u(function(e, t, n, i) {
                                for (var s, o = r(e, null, i, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
                            }) : function(e, t, n) {
                                return i[0] = e, r(i, null, n, s), i[0] = null, !s.pop()
                            }
                        }),
                        has: u(function(t) {
                            return function(e) {
                                return 0 < w(t, e).length
                            }
                        }),
                        contains: u(function(t) {
                            return t = t.replace(ve, v),
                                function(e) {
                                    return -1 < (e.textContent || e.innerText || d(e)).indexOf(t)
                                }
                        }),
                        lang: u(function(n) {
                            return ce.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(ve, v).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === D
                        },
                        focus: function(e) {
                            return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !S.pseudos.empty(e)
                        },
                        header: function(e) {
                            return he.test(e.nodeName)
                        },
                        input: function(e) {
                            return ue.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: s(function() {
                            return [0]
                        }),
                        last: s(function(e, t) {
                            return [t - 1]
                        }),
                        eq: s(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: s(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: s(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: s(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                            return e
                        }),
                        gt: s(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = S.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) S.pseudos[c] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(c);
            for (c in {
                    submit: !0,
                    reset: !0
                }) S.pseudos[c] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(c);
            return o.prototype = S.filters = S.pseudos, S.setFilters = new o, x = w.tokenize = function(e, t) {
                var n, i, s, o, a, r, l, c = F[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, r = [], l = S.preFilter; a;) {
                    for (o in n && !(i = oe.exec(a)) || (i && (a = a.slice(i[0].length) || a), r.push(s = [])), n = !1, (i = ae.exec(a)) && (n = i.shift(), s.push({
                            value: n,
                            type: i[0].replace(se, " ")
                        }), a = a.slice(n.length)), S.filter) !(i = de[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), s.push({
                        value: n,
                        type: o,
                        matches: i
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? w.error(e) : F(e, r).slice(0)
            }, C = w.compile = function(e, t) {
                var n, i = [],
                    s = [],
                    o = R[e + " "];
                if (!o) {
                    for (n = (t = t || x(e)).length; n--;)((o = g(t[n]))[O] ? i : s).push(o);
                    (o = R(e, a(s, i))).selector = e
                }
                return o
            }, E = w.select = function(e, t, n, i) {
                var s, o, a, r, l, c = "function" == typeof e && e,
                    d = !i && x(e = c.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (2 < (o = d[0] = d[0].slice(0)).length && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && $ && S.relative[o[1].type]) {
                        if (!(t = (S.find.ID(a.matches[0].replace(ve, v), t) || [])[0])) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (s = de.needsContext.test(e) ? 0 : o.length; s-- && (a = o[s], !S.relative[r = a.type]);)
                        if ((l = S.find[r]) && (i = l(a.matches[0].replace(ve, v), me.test(o[0].type) && f(t.parentNode) || t))) {
                            if (o.splice(s, 1), !(e = i.length && m(o))) return Y.apply(n, i), n;
                            break
                        }
                }
                return (c || C(e, d))(i, t, !$, n, !t || me.test(e) && f(t.parentNode) || t), n
            }, b.sortStable = O.split("").sort(q).join("") === O, b.detectDuplicates = !!M, k(), b.sortDetached = t(function(e) {
                return 1 & e.compareDocumentPosition(_.createElement("div"))
            }), t(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || i("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), b.attributes && t(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || i("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), t(function(e) {
                return null == e.getAttribute("disabled")
            }) || i(Z, function(e, t, n) {
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
            }), w
        }(T);
        ne.find = ae, ne.expr = ae.selectors, ne.expr[":"] = ne.expr.pseudos, ne.uniqueSort = ne.unique = ae.uniqueSort, ne.text = ae.getText, ne.isXMLDoc = ae.isXML, ne.contains = ae.contains;

        function re(e, t, n) {
            for (var i = [], s = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (s && ne(e).is(n)) break;
                    i.push(e)
                } return i
        }

        function le(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        var ce = ne.expr.match.needsContext,
            de = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ue = /^.[^:#\[\.,]*$/;
        ne.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ne.find.matchesSelector(i, e) ? [i] : [] : ne.find.matches(e, ne.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, ne.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    s = i.length;
                if ("string" != typeof e) return this.pushStack(ne(e).filter(function() {
                    for (t = 0; t < s; t++)
                        if (ne.contains(i[t], this)) return !0
                }));
                for (t = 0; t < s; t++) ne.find(e, i[t], n);
                return (n = this.pushStack(1 < s ? ne.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(t(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(t(this, e || [], !0))
            },
            is: function(e) {
                return !!t(this, "string" == typeof e && ce.test(e) ? ne(e) : e || [], !1).length
            }
        });
        var he, pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (ne.fn.init = function(e, t, n) {
            if (!e) return this;
            if (n = n || he, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ne.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ne) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ne.makeArray(e, this));
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : pe.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (i[1]) {
                if (t = t instanceof ne ? t[0] : t, ne.merge(this, ne.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : X, !0)), de.test(i[1]) && ne.isPlainObject(t))
                    for (var i in t) ne.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((n = X.getElementById(i[2])) && n.parentNode) {
                if (n.id !== i[2]) return he.find(e);
                this.length = 1, this[0] = n
            }
            return this.context = X, this.selector = e, this
        }).prototype = ne.fn, he = ne(X);
        var fe = /^(?:parents|prev(?:Until|All))/,
            me = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ne.fn.extend({
            has: function(e) {
                var t, n = ne(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (ne.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, s = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ne(e, t || this.context) : 0; i < s; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ne.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? ne.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ne.inArray(this[0], ne(e)) : ne.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(ne.uniqueSort(ne.merge(this.get(), ne(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ne.each({
            parent: function(e) {
                e = e.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(e) {
                return re(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return re(e, "parentNode", n)
            },
            next: function(e) {
                return n(e, "nextSibling")
            },
            prev: function(e) {
                return n(e, "previousSibling")
            },
            nextAll: function(e) {
                return re(e, "nextSibling")
            },
            prevAll: function(e) {
                return re(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return re(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return re(e, "previousSibling", n)
            },
            siblings: function(e) {
                return le((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return le(e.firstChild)
            },
            contents: function(e) {
                return ne.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ne.merge([], e.childNodes)
            }
        }, function(i, s) {
            ne.fn[i] = function(e, t) {
                var n = ne.map(this, s, e);
                return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = ne.filter(t, n)), 1 < this.length && (me[i] || (n = ne.uniqueSort(n)), fe.test(i) && (n = n.reverse())), this.pushStack(n)
            }
        });
        var ge, ve, be = /\S+/g;
        for (ve in ne.Callbacks = function(i) {
                var n;
                i = "string" == typeof i ? (n = {}, ne.each(i.match(be) || [], function(e, t) {
                    n[t] = !0
                }), n) : ne.extend({}, i);

                function s() {
                    for (a = i.once, t = o = !0; l.length; c = -1)
                        for (e = l.shift(); ++c < r.length;) !1 === r[c].apply(e[0], e[1]) && i.stopOnFalse && (c = r.length, e = !1);
                    i.memory || (e = !1), o = !1, a && (r = e ? [] : "")
                }
                var o, e, t, a, r = [],
                    l = [],
                    c = -1,
                    d = {
                        add: function() {
                            return r && (e && !o && (c = r.length - 1, l.push(e)), function n(e) {
                                ne.each(e, function(e, t) {
                                    ne.isFunction(t) ? i.unique && d.has(t) || r.push(t) : t && t.length && "string" !== ne.type(t) && n(t)
                                })
                            }(arguments), e && !o && s()), this
                        },
                        remove: function() {
                            return ne.each(arguments, function(e, t) {
                                for (var n; - 1 < (n = ne.inArray(t, r, n));) r.splice(n, 1), n <= c && c--
                            }), this
                        },
                        has: function(e) {
                            return e ? -1 < ne.inArray(e, r) : 0 < r.length
                        },
                        empty: function() {
                            return r = r && [], this
                        },
                        disable: function() {
                            return a = l = [], r = e = "", this
                        },
                        disabled: function() {
                            return !r
                        },
                        lock: function() {
                            return a = !0, e || d.disable(), this
                        },
                        locked: function() {
                            return !!a
                        },
                        fireWith: function(e, t) {
                            return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || s()), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!t
                        }
                    };
                return d
            }, ne.extend({
                Deferred: function(e) {
                    var o = [
                            ["resolve", "done", ne.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", ne.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", ne.Callbacks("memory")]
                        ],
                        s = "pending",
                        a = {
                            state: function() {
                                return s
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var s = arguments;
                                return ne.Deferred(function(i) {
                                    ne.each(o, function(e, t) {
                                        var n = ne.isFunction(s[e]) && s[e];
                                        r[t[1]](function() {
                                            var e = n && n.apply(this, arguments);
                                            e && ne.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                        })
                                    }), s = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? ne.extend(e, a) : a
                            }
                        },
                        r = {};
                    return a.pipe = a.then, ne.each(o, function(e, t) {
                        var n = t[2],
                            i = t[3];
                        a[t[1]] = n.add, i && n.add(function() {
                            s = i
                        }, o[1 ^ e][2].disable, o[2][2].lock), r[t[0]] = function() {
                            return r[t[0] + "With"](this === r ? a : this, arguments), this
                        }, r[t[0] + "With"] = n.fireWith
                    }), a.promise(r), e && e.call(r, r), r
                },
                when: function(e) {
                    function t(t, n, i) {
                        return function(e) {
                            n[t] = this, i[t] = 1 < arguments.length ? U.call(arguments) : e, i === s ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                        }
                    }
                    var s, n, i, o = 0,
                        a = U.call(arguments),
                        r = a.length,
                        l = 1 !== r || e && ne.isFunction(e.promise) ? r : 0,
                        c = 1 === l ? e : ne.Deferred();
                    if (1 < r)
                        for (s = new Array(r), n = new Array(r), i = new Array(r); o < r; o++) a[o] && ne.isFunction(a[o].promise) ? a[o].promise().progress(t(o, n, s)).done(t(o, i, a)).fail(c.reject) : --l;
                    return l || c.resolveWith(i, a), c.promise()
                }
            }), ne.fn.ready = function(e) {
                return ne.ready.promise().done(e), this
            }, ne.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ne.readyWait++ : ne.ready(!0)
                },
                ready: function(e) {
                    (!0 === e ? --ne.readyWait : ne.isReady) || ((ne.isReady = !0) !== e && 0 < --ne.readyWait || (ge.resolveWith(X, [ne]), ne.fn.triggerHandler && (ne(X).triggerHandler("ready"), ne(X).off("ready"))))
                }
            }), ne.ready.promise = function(e) {
                if (!ge)
                    if (ge = ne.Deferred(), "complete" === X.readyState) T.setTimeout(ne.ready);
                    else if (X.addEventListener) X.addEventListener("DOMContentLoaded", s), T.addEventListener("load", s);
                else {
                    X.attachEvent("onreadystatechange", s), T.attachEvent("onload", s);
                    var n = !1;
                    try {
                        n = null == T.frameElement && X.documentElement
                    } catch (e) {}
                    n && n.doScroll && function t() {
                        if (!ne.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return T.setTimeout(t, 50)
                            }
                            i(), ne.ready()
                        }
                    }()
                }
                return ge.promise(e)
            }, ne.ready.promise(), ne(te)) break;
        te.ownFirst = "0" === ve, te.inlineBlockNeedsLayout = !1, ne(function() {
                var e, t, n;
                (t = X.getElementsByTagName("body")[0]) && t.style && (e = X.createElement("div"), (n = X.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", te.inlineBlockNeedsLayout = e = 3 === e.offsetWidth, e && (t.style.zoom = 1)), t.removeChild(n))
            }),
            function() {
                var e = X.createElement("div");
                te.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    te.deleteExpando = !1
                }
                e = null
            }();

        function ye(e) {
            var t = ne.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        }
        var we, Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Se = /([A-Z])/g;
        ne.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? ne.cache[e[ne.expando]] : e[ne.expando]) && !c(e)
            },
            data: function(e, t, n) {
                return o(e, t, n)
            },
            removeData: function(e, t) {
                return a(e, t)
            },
            _data: function(e, t, n) {
                return o(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return a(e, t, !0)
            }
        }), ne.fn.extend({
            data: function(e, t) {
                var n, i, s, o = this[0],
                    a = o && o.attributes;
                if (void 0 !== e) return "object" == typeof e ? this.each(function() {
                    ne.data(this, e)
                }) : 1 < arguments.length ? this.each(function() {
                    ne.data(this, e, t)
                }) : o ? l(o, e, ne.data(o, e)) : void 0;
                if (this.length && (s = ne.data(o), 1 === o.nodeType && !ne._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && l(o, i = ne.camelCase(i.slice(5)), s[i]);
                    ne._data(o, "parsedAttrs", !0)
                }
                return s
            },
            removeData: function(e) {
                return this.each(function() {
                    ne.removeData(this, e)
                })
            }
        }), ne.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = ne._data(e, t), n && (!i || ne.isArray(n) ? i = ne._data(e, t, ne.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ne.queue(e, t),
                    i = n.length,
                    s = n.shift(),
                    o = ne._queueHooks(e, t);
                "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete o.stop, s.call(e, function() {
                    ne.dequeue(e, t)
                }, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ne._data(e, n) || ne._data(e, n, {
                    empty: ne.Callbacks("once memory").add(function() {
                        ne._removeData(e, t + "queue"), ne._removeData(e, n)
                    })
                })
            }
        }), ne.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ne.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = ne.queue(this, t, n);
                    ne._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ne.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ne.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                function n() {
                    --s || o.resolveWith(a, [a])
                }
                var i, s = 1,
                    o = ne.Deferred(),
                    a = this,
                    r = this.length;
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = ne._data(a[r], e + "queueHooks")) && i.empty && (s++, i.empty.add(n));
                return n(), o.promise(t)
            }
        }), te.shrinkWrapBlocks = function() {
            return null != we ? we : (we = !1, (t = X.getElementsByTagName("body")[0]) && t.style ? (e = X.createElement("div"), (n = X.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(X.createElement("div")).style.width = "5px", we = 3 !== e.offsetWidth), t.removeChild(n), we) : void 0);
            var e, t, n
        };

        function xe(e, t) {
            return e = t || e, "none" === ne.css(e, "display") || !ne.contains(e.ownerDocument, e)
        }
        var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ee = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
            Pe = ["Top", "Right", "Bottom", "Left"],
            Ae = function(e, t, n, i, s, o, a) {
                var r = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === ne.type(n))
                    for (r in s = !0, n) Ae(e, t, r, n[r], !0, o, a);
                else if (void 0 !== i && (s = !0, ne.isFunction(i) || (a = !0), c && (t = a ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                        return c.call(ne(e), n)
                    })), t))
                    for (; r < l; r++) t(e[r], n, a ? i : i.call(e[r], r, t(e[r], n)));
                return s ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            Me = /^(?:checkbox|radio)$/i,
            ke = /<([\w:-]+)/,
            _e = /^$|\/(?:java|ecma)script/i,
            De = /^\s+/,
            $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        Et = X.createElement("div"), xt = X.createDocumentFragment(), Ct = X.createElement("input"), Et.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", te.leadingWhitespace = 3 === Et.firstChild.nodeType, te.tbody = !Et.getElementsByTagName("tbody").length, te.htmlSerialize = !!Et.getElementsByTagName("link").length, te.html5Clone = "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML, Ct.type = "checkbox", Ct.checked = !0, xt.appendChild(Ct), te.appendChecked = Ct.checked, Et.innerHTML = "<textarea>x</textarea>", te.noCloneChecked = !!Et.cloneNode(!0).lastChild.defaultValue, xt.appendChild(Et), (Ct = X.createElement("input")).setAttribute("type", "radio"), Ct.setAttribute("checked", "checked"), Ct.setAttribute("name", "t"), Et.appendChild(Ct), te.checkClone = Et.cloneNode(!0).cloneNode(!0).lastChild.checked, te.noCloneEvent = !!Et.addEventListener, Et[ne.expando] = 1, te.attributes = !Et.getAttribute(ne.expando);
        var Ie = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: te.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
        var Le = /<|&#?\w+;/,
            He = /<tbody/i;
        ! function() {
            var e, t, n = X.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (te[e] = t in T) || (n.setAttribute(t, "t"), te[e] = !1 === n.attributes[t].expando);
            n = null
        }();
        var Ne = /^(?:input|select|textarea)$/i,
            Oe = /^key/,
            Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ge = /^(?:focusinfocus|focusoutblur)$/,
            ze = /^([^.]*)(?:\.(.+)|)/;
        ne.event = {
            global: {},
            add: function(e, t, n, i, s) {
                var o, a, r, l, c, d, u, h, p, f = ne._data(e);
                if (f) {
                    for (n.handler && (n = (r = n).handler, s = r.selector), n.guid || (n.guid = ne.guid++), (o = f.events) || (o = f.events = {}), (c = f.handle) || ((c = f.handle = function(e) {
                            return void 0 === ne || e && ne.event.triggered === e.type ? void 0 : ne.event.dispatch.apply(c.elem, arguments)
                        }).elem = e), a = (t = (t || "").match(be) || [""]).length; a--;) u = p = (d = ze.exec(t[a]) || [])[1], h = (d[2] || "").split(".").sort(), u && (l = ne.event.special[u] || {}, u = (s ? l.delegateType : l.bindType) || u, l = ne.event.special[u] || {}, d = ne.extend({
                        type: u,
                        origType: p,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: s,
                        needsContext: s && ne.expr.match.needsContext.test(s),
                        namespace: h.join(".")
                    }, r), (p = o[u]) || ((p = o[u] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(u, c, !1) : e.attachEvent && e.attachEvent("on" + u, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), s ? p.splice(p.delegateCount++, 0, d) : p.push(d), ne.event.global[u] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, s) {
                var o, a, r, l, c, d, u, h, p, f, m, g = ne.hasData(e) && ne._data(e);
                if (g && (d = g.events)) {
                    for (c = (t = (t || "").match(be) || [""]).length; c--;)
                        if (p = m = (r = ze.exec(t[c]) || [])[1], f = (r[2] || "").split(".").sort(), p) {
                            for (u = ne.event.special[p] || {}, h = d[p = (i ? u.delegateType : u.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !s && m !== a.origType || n && n.guid !== a.guid || r && !r.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, u.remove && u.remove.call(e, a));
                            l && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || ne.removeEvent(e, p, g.handle), delete d[p])
                        } else
                            for (p in d) ne.event.remove(e, p + t[c], n, i, !0);
                    ne.isEmptyObject(d) && (delete g.handle, ne._removeData(e, "events"))
                }
            },
            trigger: function(e, t, n, i) {
                var s, o, a, r, l, c, d = [n || X],
                    u = ee.call(e, "type") ? e.type : e,
                    h = ee.call(e, "namespace") ? e.namespace.split(".") : [],
                    p = l = n = n || X;
                if (3 !== n.nodeType && 8 !== n.nodeType && !Ge.test(u + ne.event.triggered) && (-1 < u.indexOf(".") && (u = (h = u.split(".")).shift(), h.sort()), o = u.indexOf(":") < 0 && "on" + u, (e = e[ne.expando] ? e : new ne.Event(u, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ne.makeArray(t, [e]), r = ne.event.special[u] || {}, i || !r.trigger || !1 !== r.trigger.apply(n, t))) {
                    if (!i && !r.noBubble && !ne.isWindow(n)) {
                        for (a = r.delegateType || u, Ge.test(a + u) || (p = p.parentNode); p; p = p.parentNode) d.push(p), l = p;
                        l === (n.ownerDocument || X) && d.push(l.defaultView || l.parentWindow || T)
                    }
                    for (c = 0;
                        (p = d[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? a : r.bindType || u, (s = (ne._data(p, "events") || {})[e.type] && ne._data(p, "handle")) && s.apply(p, t), (s = o && p[o]) && s.apply && ye(p) && (e.result = s.apply(p, t), !1 === e.result && e.preventDefault());
                    if (e.type = u, !i && !e.isDefaultPrevented() && (!r._default || !1 === r._default.apply(d.pop(), t)) && ye(n) && o && n[u] && !ne.isWindow(n)) {
                        (l = n[o]) && (n[o] = null), ne.event.triggered = u;
                        try {
                            n[u]()
                        } catch (e) {}
                        ne.event.triggered = void 0, l && (n[o] = l)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = ne.event.fix(e);
                var t, n, i, s, o, a = U.call(arguments),
                    r = (ne._data(this, "events") || {})[e.type] || [],
                    l = ne.event.special[e.type] || {};
                if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                    for (o = ne.event.handlers.call(this, e, r), t = 0;
                        (i = o[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, n = 0;
                            (s = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (s = ((ne.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, a)) && !1 === (e.result = s) && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, s, o, a = [],
                    r = t.delegateCount,
                    l = e.target;
                if (r && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < r; n++) void 0 === i[s = (o = t[n]).selector + " "] && (i[s] = o.needsContext ? -1 < ne(s, this).index(l) : ne.find(s, this, null, [l]).length), i[s] && i.push(o);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        } return r < t.length && a.push({
                    elem: this,
                    handlers: t.slice(r)
                }), a
            },
            fix: function(e) {
                if (e[ne.expando]) return e;
                var t, n, i, s = e.type,
                    o = e,
                    a = this.fixHooks[s];
                for (a || (this.fixHooks[s] = a = Be.test(s) ? this.mouseHooks : Oe.test(s) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ne.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
                return e.target || (e.target = o.srcElement || X), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, s = t.button,
                        o = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || X).documentElement, n = n.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ne.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return ne.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                e = ne.extend(new ne.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ne.event.trigger(e, null, t), e.isDefaultPrevented() && n.preventDefault()
            }
        }, ne.removeEvent = X.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            t = "on" + t;
            e.detachEvent && (void 0 === e[t] && (e[t] = null), e.detachEvent(t, n))
        }, ne.Event = function(e, t) {
            return this instanceof ne.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? u : h) : this.type = e, t && ne.extend(this, t), this.timeStamp = e && e.timeStamp || ne.now(), void(this[ne.expando] = !0)) : new ne.Event(e, t)
        }, ne.Event.prototype = {
            constructor: ne.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = u, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ne.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, s) {
            ne.event.special[e] = {
                delegateType: s,
                bindType: s,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        i = e.handleObj;
                    return n && (n === this || ne.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = s), t
                }
            }
        }), te.submit || (ne.event.special.submit = {
            setup: function() {
                return !ne.nodeName(this, "form") && void ne.event.add(this, "click._submit keypress._submit", function(e) {
                    e = e.target, e = ne.nodeName(e, "input") || ne.nodeName(e, "button") ? ne.prop(e, "form") : void 0;
                    e && !ne._data(e, "submit") && (ne.event.add(e, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), ne._data(e, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ne.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                return !ne.nodeName(this, "form") && void ne.event.remove(this, "._submit")
            }
        }), te.change || (ne.event.special.change = {
            setup: function() {
                return Ne.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ne.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), ne.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), ne.event.simulate("change", this, e)
                })), !1) : void ne.event.add(this, "beforeactivate._change", function(e) {
                    e = e.target;
                    Ne.test(e.nodeName) && !ne._data(e, "change") && (ne.event.add(e, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ne.event.simulate("change", this.parentNode, e)
                    }), ne._data(e, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ne.event.remove(this, "._change"), !Ne.test(this.nodeName)
            }
        }), te.focusin || ne.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            function s(e) {
                ne.event.simulate(i, e.target, ne.event.fix(e))
            }
            ne.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = ne._data(e, i);
                    t || e.addEventListener(n, s, !0), ne._data(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = ne._data(e, i) - 1;
                    t ? ne._data(e, i, t) : (e.removeEventListener(n, s, !0), ne._removeData(e, i))
                }
            }
        }), ne.fn.extend({
            on: function(e, t, n, i) {
                return f(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return f(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ne(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = h), this.each(function() {
                    ne.event.remove(this, e, n, t)
                });
                for (s in e) this.off(s, t, e[s]);
                return this
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ne.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? ne.event.trigger(e, t, n, !0) : void 0
            }
        });
        var je = / jQuery\d+="(?:null|\d+)"/g,
            Fe = new RegExp("<(?:" + $e + ")[\\s/>]", "i"),
            Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            qe = /<script|<style|<link/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            We = /^true\/(.*)/,
            Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ue = g(X).appendChild(X.createElement("div"));
        ne.extend({
            htmlPrefilter: function(e) {
                return e.replace(Re, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, s, o, a, r, l = ne.contains(e.ownerDocument, e);
                if (te.html5Clone || ne.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ue.innerHTML = e.outerHTML, Ue.removeChild(o = Ue.firstChild)), !(te.noCloneEvent && te.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ne.isXMLDoc(e)))
                    for (i = v(o), r = v(e), a = 0; null != (s = r[a]); ++a) i[a] && function(e, t) {
                        var n, i, s;
                        if (1 === t.nodeType) {
                            if (n = t.nodeName.toLowerCase(), !te.noCloneEvent && t[ne.expando]) {
                                for (i in (s = ne._data(t)).events) ne.removeEvent(t, i, s.handle);
                                t.removeAttribute(ne.expando)
                            }
                            "script" === n && t.text !== e.text ? (w(t).text = e.text, S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), te.html5Clone && e.innerHTML && !ne.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Me.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                        }
                    }(s, i[a]);
                if (t)
                    if (n)
                        for (r = r || v(e), i = i || v(o), a = 0; null != (s = r[a]); a++) x(s, i[a]);
                    else x(e, o);
                return 0 < (i = v(o, "script")).length && b(i, !l && v(e, "script")), i = r = s = null, o
            },
            cleanData: function(e, t) {
                for (var n, i, s, o, a = 0, r = ne.expando, l = ne.cache, c = te.attributes, d = ne.event.special; null != (n = e[a]); a++)
                    if ((t || ye(n)) && (o = (s = n[r]) && l[s])) {
                        if (o.events)
                            for (i in o.events) d[i] ? ne.event.remove(n, i) : ne.removeEvent(n, i, o.handle);
                        l[s] && (delete l[s], c || void 0 === n.removeAttribute ? n[r] = void 0 : n.removeAttribute(r), W.push(s))
                    }
            }
        }), ne.fn.extend({
            domManip: C,
            detach: function(e) {
                return E(this, e, !0)
            },
            remove: function(e) {
                return E(this, e)
            },
            text: function(e) {
                return Ae(this, function(e) {
                    return void 0 === e ? ne.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return C(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || y(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return C(this, arguments, function(e) {
                    var t;
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = y(this, e)).insertBefore(e, t.firstChild)
                })
            },
            before: function() {
                return C(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return C(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ne.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ne.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return ne.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ae(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(je, "") : void 0;
                    if ("string" == typeof e && !qe.test(e) && (te.htmlSerialize || !Fe.test(e)) && (te.leadingWhitespace || !De.test(e)) && !Ie[(ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ne.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (ne.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return C(this, arguments, function(e) {
                    var t = this.parentNode;
                    ne.inArray(this, n) < 0 && (ne.cleanData(v(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), ne.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            ne.fn[e] = function(e) {
                for (var t, n = 0, i = [], s = ne(e), o = s.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), ne(s[n])[a](t), K.apply(i, t.get());
                return this.pushStack(i)
            }
        });

        function Ye(e, t, n, i) {
            var s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            for (s in i = n.apply(e, i || []), t) e.style[s] = o[s];
            return i
        }
        var Ke, Qe, Ze, Je, et, tt, nt, it, st, ot = {
                HTML: "block",
                BODY: "block"
            },
            at = /^margin/,
            rt = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
            lt = X.documentElement;

        function ct() {
            var e, t = X.documentElement;
            t.appendChild(it), st.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", Qe = Je = nt = !1, Ze = tt = !0, T.getComputedStyle && (e = T.getComputedStyle(st), Qe = "1%" !== (e || {}).top, nt = "2px" === (e || {}).marginLeft, Je = "4px" === (e || {
                width: "4px"
            }).width, st.style.marginRight = "50%", Ze = "4px" === (e || {
                marginRight: "4px"
            }).marginRight, (e = st.appendChild(X.createElement("div"))).style.cssText = st.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", st.style.width = "1px", tt = !parseFloat((T.getComputedStyle(e) || {}).marginRight), st.removeChild(e)), st.style.display = "none", (et = 0 === st.getClientRects().length) && (st.style.display = "", st.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (e = st.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (et = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", et = 0 === e[0].offsetHeight)), t.removeChild(it)
        }
        it = X.createElement("div"), (st = X.createElement("div")).style && (st.style.cssText = "float:left;opacity:.5", te.opacity = "0.5" === st.style.opacity, te.cssFloat = !!st.style.cssFloat, st.style.backgroundClip = "content-box", st.cloneNode(!0).style.backgroundClip = "", te.clearCloneStyle = "content-box" === st.style.backgroundClip, (it = X.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", st.innerHTML = "", it.appendChild(st), te.boxSizing = "" === st.style.boxSizing || "" === st.style.MozBoxSizing || "" === st.style.WebkitBoxSizing, ne.extend(te, {
            reliableHiddenOffsets: function() {
                return null == Qe && ct(), et
            },
            boxSizingReliable: function() {
                return null == Qe && ct(), Je
            },
            pixelMarginRight: function() {
                return null == Qe && ct(), Ze
            },
            pixelPosition: function() {
                return null == Qe && ct(), Qe
            },
            reliableMarginRight: function() {
                return null == Qe && ct(), tt
            },
            reliableMarginLeft: function() {
                return null == Qe && ct(), nt
            }
        }));
        var dt, ut, ht = /^(top|right|bottom|left)$/;
        T.getComputedStyle ? (dt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t.opener || (t = T), t.getComputedStyle(e)
        }, ut = function(e, t, n) {
            var i, s = e.style,
                o = (n = n || dt(e)) ? n.getPropertyValue(t) || n[t] : void 0;
            return n && ("" !== o || ne.contains(e.ownerDocument, e) || (o = ne.style(e, t)), !te.pixelMarginRight() && rt.test(o) && at.test(t) && (i = s.width, e = s.minWidth, t = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = e, s.maxWidth = t)), void 0 === o ? o : o + ""
        }) : lt.currentStyle && (dt = function(e) {
            return e.currentStyle
        }, ut = function(e, t, n) {
            var i, s, o, a = e.style;
            return null == (o = (n = n || dt(e)) ? n[t] : void 0) && a && a[t] && (o = a[t]), rt.test(o) && !ht.test(t) && (i = a.left, (n = (s = e.runtimeStyle) && s.left) && (s.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = i, n && (s.left = n)), void 0 === o ? o : o + "" || "auto"
        });
        var pt = /alpha\([^)]*\)/i,
            ft = /opacity\s*=\s*([^)]*)/i,
            mt = /^(none|table(?!-c[ea]).+)/,
            gt = new RegExp("^(" + Ce + ")(.*)$", "i"),
            vt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            bt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            yt = ["Webkit", "O", "Moz", "ms"],
            wt = X.createElement("div").style;
        ne.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            e = ut(e, "opacity");
                            return "" === e ? "1" : e
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: te.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var s, o, a, r = ne.camelCase(t),
                        l = e.style;
                    if (t = ne.cssProps[r] || (ne.cssProps[r] = k(r) || r), a = ne.cssHooks[t] || ne.cssHooks[r], void 0 === n) return a && "get" in a && void 0 !== (s = a.get(e, !1, i)) ? s : l[t];
                    if ("string" == (o = typeof n) && (s = Ee.exec(n)) && s[1] && (n = d(e, t, s), o = "number"), null != n && n == n && ("number" === o && (n += s && s[3] || (ne.cssNumber[r] ? "" : "px")), te.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, i) {
                var s, o = ne.camelCase(t);
                return t = ne.cssProps[o] || (ne.cssProps[o] = k(o) || o), (o = ne.cssHooks[t] || ne.cssHooks[o]) && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = ut(e, t, i)), "normal" === s && t in bt && (s = bt[t]), "" === n || n ? (t = parseFloat(s), !0 === n || isFinite(t) ? t || 0 : s) : s
            }
        }), ne.each(["height", "width"], function(e, s) {
            ne.cssHooks[s] = {
                get: function(e, t, n) {
                    return t ? mt.test(ne.css(e, "display")) && 0 === e.offsetWidth ? Ye(e, vt, function() {
                        return I(e, s, n)
                    }) : I(e, s, n) : void 0
                },
                set: function(e, t, n) {
                    var i = n && dt(e);
                    return D(0, t, n ? $(e, s, n, te.boxSizing && "border-box" === ne.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), te.opacity || (ne.cssHooks.opacity = {
            get: function(e, t) {
                return ft.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    s = ne.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    e = i && i.filter || n.filter || "";
                ((n.zoom = 1) <= t || "" === t) && "" === ne.trim(e.replace(pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = pt.test(e) ? e.replace(pt, s) : e + " " + s)
            }
        }), ne.cssHooks.marginRight = M(te.reliableMarginRight, function(e, t) {
            return t ? Ye(e, {
                display: "inline-block"
            }, ut, [e, "marginRight"]) : void 0
        }), ne.cssHooks.marginLeft = M(te.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(ut(e, "marginLeft")) || (ne.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Ye(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), ne.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(s, o) {
            ne.cssHooks[s + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[s + Pe[t] + o] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, at.test(s) || (ne.cssHooks[s + o].set = D)
        }), ne.fn.extend({
            css: function(e, t) {
                return Ae(this, function(e, t, n) {
                    var i, s, o = {},
                        a = 0;
                    if (ne.isArray(t)) {
                        for (i = dt(e), s = t.length; a < s; a++) o[t[a]] = ne.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? ne.style(e, t, n) : ne.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function() {
                return _(this, !0)
            },
            hide: function() {
                return _(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    xe(this) ? ne(this).show() : ne(this).hide()
                })
            }
        }), ((ne.Tween = L).prototype = {
            constructor: L,
            init: function(e, t, n, i, s, o) {
                this.elem = e, this.prop = n, this.easing = s || ne.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ne.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = L.propHooks[this.prop];
                return (e && e.get ? e : L.propHooks._default).get(this)
            },
            run: function(e) {
                var t, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ne.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : L.propHooks._default).set(this), this
            }
        }).init.prototype = L.prototype, (L.propHooks = {
            _default: {
                get: function(e) {
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = ne.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(e) {
                    ne.fx.step[e.prop] ? ne.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ne.cssProps[e.prop]] && !ne.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ne.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = L.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ne.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, ne.fx = L.prototype.init, ne.fx.step = {};
        var Tt, St, xt, Ct, Et, Pt = /^(?:toggle|show|hide)$/,
            At = /queueHooks$/;
        ne.Animation = ne.extend(B, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return d(n.elem, e, Ee.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                for (var n, i = 0, s = (e = ne.isFunction(e) ? (t = e, ["*"]) : e.match(be)).length; i < s; i++) n = e[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
            },
            prefilters: [function(t, e, n) {
                var i, s, o, a, r, l, c, d = this,
                    u = {},
                    h = t.style,
                    p = t.nodeType && xe(t),
                    f = ne._data(t, "fxshow");
                for (i in n.queue || (null == (r = ne._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
                        r.unqueued || l()
                    }), r.unqueued++, d.always(function() {
                        d.always(function() {
                            r.unqueued--, ne.queue(t, "fx").length || r.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = ne.css(t, "display")) ? ne._data(t, "olddisplay") || A(t.nodeName) : c) && "none" === ne.css(t, "float") && (te.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", te.shrinkWrapBlocks() || d.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), e)
                    if (s = e[i], Pt.exec(s)) {
                        if (delete e[i], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
                            if ("show" !== s || !f || void 0 === f[i]) continue;
                            p = !0
                        }
                        u[i] = f && f[i] || ne.style(t, i)
                    } else c = void 0;
                if (ne.isEmptyObject(u)) "inline" === ("none" === c ? A(t.nodeName) : c) && (h.display = c);
                else
                    for (i in f ? "hidden" in f && (p = f.hidden) : f = ne._data(t, "fxshow", {}), o && (f.hidden = !p), p ? ne(t).show() : d.done(function() {
                            ne(t).hide()
                        }), d.done(function() {
                            for (var e in ne._removeData(t, "fxshow"), u) ne.style(t, e, u[e])
                        }), u) a = O(p ? f[i] : 0, i, d), i in f || (f[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }],
            prefilter: function(e, t) {
                t ? B.prefilters.unshift(e) : B.prefilters.push(e)
            }
        }), ne.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ne.extend({}, e) : {
                complete: n || !n && t || ne.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ne.isFunction(t) && t
            };
            return i.duration = ne.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ne.fx.speeds ? ne.fx.speeds[i.duration] : ne.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ne.isFunction(i.old) && i.old.call(this), i.queue && ne.dequeue(this, i.queue)
            }, i
        }, ne.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(xe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                var s = ne.isEmptyObject(t),
                    o = ne.speed(e, n, i),
                    i = function() {
                        var e = B(this, ne.extend({}, t), o);
                        (s || ne._data(this, "finish")) && e.stop(!0)
                    };
                return i.finish = i, s || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
            },
            stop: function(s, e, o) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                }
                return "string" != typeof s && (o = e, e = s, s = void 0), e && !1 !== s && this.queue(s || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != s && s + "queueHooks",
                        n = ne.timers,
                        i = ne._data(this);
                    if (t) i[t] && i[t].stop && a(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && At.test(t) && a(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != s && n[t].queue !== s || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    !e && o || ne.dequeue(this, s)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var e, t = ne._data(this),
                        n = t[a + "queue"],
                        i = t[a + "queueHooks"],
                        s = ne.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, ne.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === a && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), ne.each(["toggle", "show", "hide"], function(e, i) {
            var s = ne.fn[i];
            ne.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(N(i, !0), e, t, n)
            }
        }), ne.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            ne.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), ne.timers = [], ne.fx.tick = function() {
            var e, t = ne.timers,
                n = 0;
            for (Tt = ne.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || ne.fx.stop(), Tt = void 0
        }, ne.fx.timer = function(e) {
            ne.timers.push(e), e() ? ne.fx.start() : ne.timers.pop()
        }, ne.fx.interval = 13, ne.fx.start = function() {
            St = St || T.setInterval(ne.fx.tick, ne.fx.interval)
        }, ne.fx.stop = function() {
            T.clearInterval(St), St = null
        }, ne.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ne.fn.delay = function(i, e) {
            return i = ne.fx && ne.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                var n = T.setTimeout(e, i);
                t.stop = function() {
                    T.clearTimeout(n)
                }
            })
        }, ae = X.createElement("input"), xt = X.createElement("div"), Ct = X.createElement("select"), Et = Ct.appendChild(X.createElement("option")), (xt = X.createElement("div")).setAttribute("className", "t"), xt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Ce = xt.getElementsByTagName("a")[0], ae.setAttribute("type", "checkbox"), xt.appendChild(ae), (Ce = xt.getElementsByTagName("a")[0]).style.cssText = "top:1px", te.getSetAttribute = "t" !== xt.className, te.style = /top/.test(Ce.getAttribute("style")), te.hrefNormalized = "/a" === Ce.getAttribute("href"), te.checkOn = !!ae.value, te.optSelected = Et.selected, te.enctype = !!X.createElement("form").enctype, Ct.disabled = !0, te.optDisabled = !Et.disabled, (ae = X.createElement("input")).setAttribute("value", ""), te.input = "" === ae.getAttribute("value"), ae.value = "t", ae.setAttribute("type", "radio"), te.radioValue = "t" === ae.value;
        var Mt = /\r/g;
        ne.fn.extend({
            val: function(t) {
                var n, e, i, s = this[0];
                return arguments.length ? (i = ne.isFunction(t), this.each(function(e) {
                    1 === this.nodeType && (null == (e = i ? t.call(this, e, ne(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : ne.isArray(e) && (e = ne.map(e, function(e) {
                        return null == e ? "" : e + ""
                    })), (n = ne.valHooks[this.type] || ne.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                })) : s ? (n = ne.valHooks[s.type] || ne.valHooks[s.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(s, "value")) ? e : "string" == typeof(e = s.value) ? e.replace(Mt, "") : null == e ? "" : e : void 0
            }
        }), ne.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ne.find.attr(e, "value");
                        return null != t ? t : ne.trim(ne.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n = e.options, i = e.selectedIndex, s = "select-one" === e.type || i < 0, o = s ? null : [], a = s ? i + 1 : n.length, r = i < 0 ? a : s ? i : 0; r < a; r++)
                            if (((t = n[r]).selected || r === i) && (te.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !ne.nodeName(t.parentNode, "optgroup"))) {
                                if (t = ne(t).val(), s) return t;
                                o.push(t)
                            } return o
                    },
                    set: function(e, t) {
                        for (var n, i, s = e.options, o = ne.makeArray(t), a = s.length; a--;)
                            if (i = s[a], 0 <= ne.inArray(ne.valHooks.option.get(i), o)) try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), s
                    }
                }
            }
        }), ne.each(["radio", "checkbox"], function() {
            ne.valHooks[this] = {
                set: function(e, t) {
                    return ne.isArray(t) ? e.checked = -1 < ne.inArray(ne(e).val(), t) : void 0
                }
            }, te.checkOn || (ne.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var kt, _t, Dt = ne.expr.attrHandle,
            $t = /^(?:checked|selected)$/i,
            It = te.getSetAttribute,
            Lt = te.input;
        ne.fn.extend({
            attr: function(e, t) {
                return Ae(this, ne.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ne.removeAttr(this, e)
                })
            }
        }), ne.extend({
            attr: function(e, t, n) {
                var i, s, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ne.prop(e, t, n) : (1 === o && ne.isXMLDoc(e) || (t = t.toLowerCase(), s = ne.attrHooks[t] || (ne.expr.match.bool.test(t) ? _t : kt)), void 0 !== n ? null === n ? void ne.removeAttr(e, t) : s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(s && "get" in s && null !== (i = s.get(e, t))) && null == (i = ne.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!te.radioValue && "radio" === t && ne.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, s = 0,
                    o = t && t.match(be);
                if (o && 1 === e.nodeType)
                    for (; n = o[s++];) i = ne.propFix[n] || n, ne.expr.match.bool.test(n) ? Lt && It || !$t.test(n) ? e[i] = !1 : e[ne.camelCase("default-" + n)] = e[i] = !1 : ne.attr(e, n, ""), e.removeAttribute(It ? n : i)
            }
        }), _t = {
            set: function(e, t, n) {
                return !1 === t ? ne.removeAttr(e, n) : Lt && It || !$t.test(n) ? e.setAttribute(!It && ne.propFix[n] || n, n) : e[ne.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ne.each(ne.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var o = Dt[t] || ne.find.attr;
            Lt && It || !$t.test(t) ? Dt[t] = function(e, t, n) {
                var i, s;
                return n || (s = Dt[t], Dt[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, Dt[t] = s), i
            } : Dt[t] = function(e, t, n) {
                return n ? void 0 : e[ne.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Lt && It || (ne.attrHooks.value = {
            set: function(e, t, n) {
                return ne.nodeName(e, "input") ? void(e.defaultValue = t) : kt && kt.set(e, t, n)
            }
        }), It || (kt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, Dt.id = Dt.name = Dt.coords = function(e, t, n) {
            return n ? void 0 : (t = e.getAttributeNode(t)) && "" !== t.value ? t.value : null
        }, ne.valHooks.button = {
            get: function(e, t) {
                t = e.getAttributeNode(t);
                return t && t.specified ? t.value : void 0
            },
            set: kt.set
        }, ne.attrHooks.contenteditable = {
            set: function(e, t, n) {
                kt.set(e, "" !== t && t, n)
            }
        }, ne.each(["width", "height"], function(e, n) {
            ne.attrHooks[n] = {
                set: function(e, t) {
                    return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
                }
            }
        })), te.style || (ne.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Ht = /^(?:input|select|textarea|button|object)$/i,
            Nt = /^(?:a|area)$/i;
        ne.fn.extend({
            prop: function(e, t) {
                return Ae(this, ne.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return e = ne.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (e) {}
                })
            }
        }), ne.extend({
            prop: function(e, t, n) {
                var i, s, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ne.isXMLDoc(e) || (t = ne.propFix[t] || t, s = ne.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ne.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ht.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), te.hrefNormalized || ne.each(["href", "src"], function(e, t) {
            ne.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), te.optSelected || (ne.propHooks.selected = {
            get: function(e) {
                e = e.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ne.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ne.propFix[this.toLowerCase()] = this
        }), te.enctype || (ne.propFix.enctype = "encoding");
        var Ot = /[\t\r\n\f]/g;
        ne.fn.extend({
            addClass: function(t) {
                var e, n, i, s, o, a, r = 0;
                if (ne.isFunction(t)) return this.each(function(e) {
                    ne(this).addClass(t.call(this, e, G(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(be) || []; n = this[r++];)
                        if (a = G(n), i = 1 === n.nodeType && (" " + a + " ").replace(Ot, " ")) {
                            for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a !== (a = ne.trim(i)) && ne.attr(n, "class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, s, o, a, r = 0;
                if (ne.isFunction(t)) return this.each(function(e) {
                    ne(this).removeClass(t.call(this, e, G(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(be) || []; n = this[r++];)
                        if (a = G(n), i = 1 === n.nodeType && (" " + a + " ").replace(Ot, " ")) {
                            for (o = 0; s = e[o++];)
                                for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                            a !== (a = ne.trim(i)) && ne.attr(n, "class", a)
                        } return this
            },
            toggleClass: function(s, t) {
                var o = typeof s;
                return "boolean" == typeof t && "string" == o ? t ? this.addClass(s) : this.removeClass(s) : ne.isFunction(s) ? this.each(function(e) {
                    ne(this).toggleClass(s.call(this, e, G(this), t), t)
                }) : this.each(function() {
                    var e, t, n, i;
                    if ("string" == o)
                        for (t = 0, n = ne(this), i = s.match(be) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else void 0 !== s && "boolean" != o || ((e = G(this)) && ne._data(this, "__className__", e), ne.attr(this, "class", !e && !1 !== s && ne._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                    if (1 === t.nodeType && -1 < (" " + G(t) + " ").replace(Ot, " ").indexOf(i)) return !0;
                return !1
            }
        }), ne.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
            ne.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), ne.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var ae = T.location,
            Bt = ne.now(),
            Gt = /\?/,
            zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ne.parseJSON = function(e) {
            if (T.JSON && T.JSON.parse) return T.JSON.parse(e + "");
            var s, o = null,
                t = ne.trim(e + "");
            return t && !ne.trim(t.replace(zt, function(e, t, n, i) {
                return s && t && (o = 0), 0 === o ? e : (s = n || t, o += !i - !n, "")
            })) ? Function("return " + t)() : ne.error("Invalid JSON: " + e)
        }, ne.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                T.DOMParser ? t = (new T.DOMParser).parseFromString(e, "text/xml") : ((t = new T.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
            } catch (e) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ne.error("Invalid XML: " + e), t
        };
        var jt = /#.*$/,
            Ft = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            qt = /^(?:GET|HEAD)$/,
            Vt = /^\/\//,
            Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Xt = {},
            Ut = {},
            Yt = "*/".concat("*"),
            Kt = ae.href,
            Qt = Wt.exec(Kt.toLowerCase()) || [];
        ne.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Kt,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Qt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Yt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ne.parseJSON,
                    "text xml": ne.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? F(F(e, ne.ajaxSettings), t) : F(ne.ajaxSettings, e)
            },
            ajaxPrefilter: z(Xt),
            ajaxTransport: z(Ut),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var s, o, a, r = t;
                    2 !== y && (y = 2, d && T.clearTimeout(d), h = void 0, c = i || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                        for (var i, s, o, a, r = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === s && (s = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (s)
                            for (a in r)
                                if (r[a] && r[a].test(s)) {
                                    l.unshift(a);
                                    break
                                } if (l[0] in n) o = l[0];
                        else {
                            for (a in n) {
                                if (!l[0] || e.converters[a + " " + l[0]]) {
                                    o = a;
                                    break
                                }
                                i = i || a
                            }
                            o = o || i
                        }
                        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                    }(p, w, n)), a = function(e, t, n, i) {
                        var s, o, a, r, l, c = {},
                            d = e.dataTypes.slice();
                        if (d[1])
                            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                        for (o = d.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(a = c[l + " " + o] || c["* " + o]))
                                for (s in c)
                                    if ((r = s.split(" "))[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                                        !0 === a ? a = c[s] : !0 !== c[s] && (o = r[0], d.unshift(r[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(p, a, w, i), i ? (p.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (ne.lastModified[l] = n), (n = w.getResponseHeader("etag")) && (ne.etag[l] = n)), 204 === e || "HEAD" === p.type ? r = "nocontent" : 304 === e ? r = "notmodified" : (r = a.state, s = a.data, i = !(o = a.error))) : (o = r, !e && r || (r = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || r) + "", i ? g.resolveWith(f, [s, r, w]) : g.rejectWith(f, [w, r, o]), w.statusCode(b), b = void 0, u && m.trigger(i ? "ajaxSuccess" : "ajaxError", [w, p, i ? s : o]), v.fireWith(f, [w, r]), u && (m.trigger("ajaxComplete", [w, p]), --ne.active || ne.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, l, c, d, u, h, s, p = ne.ajaxSetup({}, t),
                    f = p.context || p,
                    m = p.context && (f.nodeType || f.jquery) ? ne(f) : ne.event,
                    g = ne.Deferred(),
                    v = ne.Callbacks("once memory"),
                    b = p.statusCode || {},
                    o = {},
                    a = {},
                    y = 0,
                    r = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === y) {
                                if (!s)
                                    for (s = {}; t = Rt.exec(c);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? c : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return y || (e = a[n] = a[n] || e, o[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return y || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            if (e)
                                if (y < 2)
                                    for (var t in e) b[t] = [b[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            e = e || r;
                            return h && h.abort(e), n(0, e), this
                        }
                    };
                if (g.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Kt) + "").replace(jt, "").replace(Vt, Qt[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ne.trim(p.dataType || "*").toLowerCase().match(be) || [""], null == p.crossDomain && (e = Wt.exec(p.url.toLowerCase()), p.crossDomain = !(!e || e[1] === Qt[1] && e[2] === Qt[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Qt[3] || ("http:" === Qt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ne.param(p.data, p.traditional)), j(Xt, p, t, w), 2 === y) return w;
                for (i in (u = ne.event && p.global) && 0 == ne.active++ && ne.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !qt.test(p.type), l = p.url, p.hasContent || (p.data && (l = p.url += (Gt.test(l) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Ft.test(l) ? l.replace(Ft, "$1_=" + Bt++) : l + (Gt.test(l) ? "&" : "?") + "_=" + Bt++)), p.ifModified && (ne.lastModified[l] && w.setRequestHeader("If-Modified-Since", ne.lastModified[l]), ne.etag[l] && w.setRequestHeader("If-None-Match", ne.etag[l])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : p.accepts["*"]), p.headers) w.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, w, p) || 2 === y)) return w.abort();
                for (i in r = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[i](p[i]);
                if (h = j(Ut, p, t, w)) {
                    if (w.readyState = 1, u && m.trigger("ajaxSend", [w, p]), 2 === y) return w;
                    p.async && 0 < p.timeout && (d = T.setTimeout(function() {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        y = 1, h.send(o, n)
                    } catch (e) {
                        if (!(y < 2)) throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return ne.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ne.get(e, void 0, t, "script")
            }
        }), ne.each(["get", "post"], function(e, s) {
            ne[s] = function(e, t, n, i) {
                return ne.isFunction(t) && (i = i || n, n = t, t = void 0), ne.ajax(ne.extend({
                    url: e,
                    type: s,
                    dataType: i,
                    data: t,
                    success: n
                }, ne.isPlainObject(e) && e))
            }
        }), ne._evalUrl = function(e) {
            return ne.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, ne.fn.extend({
            wrapAll: function(t) {
                return ne.isFunction(t) ? this.each(function(e) {
                    ne(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = ne(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)), this);
                var e
            },
            wrapInner: function(n) {
                return ne.isFunction(n) ? this.each(function(e) {
                    ne(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = ne(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = ne.isFunction(t);
                return this.each(function(e) {
                    ne(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ne.nodeName(this, "body") || ne(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ne.expr.filters.hidden = function(e) {
            return te.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
                for (; e && 1 === e.nodeType;) {
                    if ("none" === (e.style && e.style.display || ne.css(e, "display")) || "hidden" === e.type) return !0;
                    e = e.parentNode
                }
                return !1
            }(e)
        }, ne.expr.filters.visible = function(e) {
            return !ne.expr.filters.hidden(e)
        };
        var Zt = /%20/g,
            Jt = /\[\]$/,
            en = /\r?\n/g,
            tn = /^(?:submit|button|image|reset|file)$/i,
            nn = /^(?:input|select|textarea|keygen)/i;
        ne.param = function(e, t) {
            function n(e, t) {
                t = ne.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            }
            var i, s = [];
            if (void 0 === t && (t = ne.ajaxSettings && ne.ajaxSettings.traditional), ne.isArray(e) || e.jquery && !ne.isPlainObject(e)) ne.each(e, function() {
                n(this.name, this.value)
            });
            else
                for (i in e) ! function n(i, e, s, o) {
                    if (ne.isArray(e)) ne.each(e, function(e, t) {
                        s || Jt.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, s, o)
                    });
                    else if (s || "object" !== ne.type(e)) o(i, e);
                    else
                        for (var t in e) n(i + "[" + t + "]", e[t], s, o)
                }(i, e[i], t, n);
            return s.join("&").replace(Zt, "+")
        }, ne.fn.extend({
            serialize: function() {
                return ne.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ne.prop(this, "elements");
                    return e ? ne.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ne(this).is(":disabled") && nn.test(this.nodeName) && !tn.test(e) && (this.checked || !Me.test(e))
                }).map(function(e, t) {
                    var n = ne(this).val();
                    return null == n ? null : ne.isArray(n) ? ne.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(en, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(en, "\r\n")
                    }
                }).get()
            }
        }), ne.ajaxSettings.xhr = void 0 !== T.ActiveXObject ? function() {
            return this.isLocal ? q() : 8 < X.documentMode ? R() : /^(get|post|head|put|delete|options)$/i.test(this.type) && R() || q()
        } : R;
        var sn = 0,
            on = {},
            ae = ne.ajaxSettings.xhr();
        T.attachEvent && T.attachEvent("onunload", function() {
            for (var e in on) on[e](void 0, !0)
        }), te.cors = !!ae && "withCredentials" in ae, (ae = te.ajax = !!ae) && ne.ajaxTransport(function(l) {
            var c;
            if (!l.crossDomain || te.cors) return {
                send: function(e, o) {
                    var t, a = l.xhr(),
                        r = ++sn;
                    if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                        for (t in l.xhrFields) a[t] = l.xhrFields[t];
                    for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                    a.send(l.hasContent && l.data || null), c = function(e, t) {
                        var n, i, s;
                        if (c && (t || 4 === a.readyState))
                            if (delete on[r], c = void 0, a.onreadystatechange = ne.noop, t) 4 !== a.readyState && a.abort();
                            else {
                                s = {}, n = a.status, "string" == typeof a.responseText && (s.text = a.responseText);
                                try {
                                    i = a.statusText
                                } catch (e) {
                                    i = ""
                                }
                                n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = s.text ? 200 : 404
                            } s && o(n, i, s, a.getAllResponseHeaders())
                    }, l.async ? 4 === a.readyState ? T.setTimeout(c) : a.onreadystatechange = on[r] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }), ne.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), ne.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return ne.globalEval(e), e
                }
            }
        }), ne.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ne.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var i, s = X.head || ne("head")[0] || X.documentElement;
                return {
                    send: function(e, n) {
                        (i = X.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                            !t && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                        }, s.insertBefore(i, s.firstChild)
                    },
                    abort: function() {
                        i && i.onload(void 0, !0)
                    }
                }
            }
        });
        var an = [],
            rn = /(=)\?(?=&|$)|\?\?/;
        ne.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = an.pop() || ne.expando + "_" + Bt++;
                return this[e] = !0, e
            }
        }), ne.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, s, o, a = !1 !== e.jsonp && (rn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && rn.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ne.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(rn, "$1" + i) : !1 !== e.jsonp && (e.url += (Gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return o || ne.error(i + " was not called"), o[0]
            }, e.dataTypes[0] = "json", s = T[i], T[i] = function() {
                o = arguments
            }, n.always(function() {
                void 0 === s ? ne(T).removeProp(i) : T[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, an.push(i)), o && ne.isFunction(s) && s(o[0]), o = s = void 0
            }), "script") : void 0
        }), te.createHTMLDocument = function() {
            if (!X.implementation.createHTMLDocument) return !1;
            var e = X.implementation.createHTMLDocument("");
            return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
        }(), ne.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || (te.createHTMLDocument ? X.implementation.createHTMLDocument("") : X);
            var i = de.exec(e),
                n = !n && [];
            return i ? [t.createElement(i[1])] : (i = m([e], t, n), n && n.length && ne(n).remove(), ne.merge([], i.childNodes))
        };
        var ln = ne.fn.load;
        ne.fn.load = function(e, t, n) {
            if ("string" != typeof e && ln) return ln.apply(this, arguments);
            var i, s, o, a = this,
                r = e.indexOf(" ");
            return -1 < r && (i = ne.trim(e.slice(r, e.length)), e = e.slice(0, r)), ne.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < a.length && ne.ajax({
                url: e,
                type: s || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? ne("<div>").append(ne.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(a, o || [e.responseText, t, e])
                })
            }), this
        }, ne.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ne.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ne.expr.filters.animated = function(t) {
            return ne.grep(ne.timers, function(e) {
                return t === e.elem
            }).length
        }, ne.offset = {
            setOffset: function(e, t, n) {
                var i, s, o, a, r = ne.css(e, "position"),
                    l = ne(e),
                    c = {};
                "static" === r && (e.style.position = "relative"), o = l.offset(), i = ne.css(e, "top"), a = ne.css(e, "left"), a = ("absolute" === r || "fixed" === r) && -1 < ne.inArray("auto", [i, a]) ? (s = (r = l.position()).top, r.left) : (s = parseFloat(i) || 0, parseFloat(a) || 0), ne.isFunction(t) && (t = t.call(e, n, ne.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + a), "using" in t ? t.using.call(e, c) : l.css(c)
            }
        }, ne.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ne.offset.setOffset(this, t, e)
                });
                var e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0],
                    s = i && i.ownerDocument;
                return s ? (e = s.documentElement, ne.contains(e, i) ? (void 0 !== i.getBoundingClientRect && (n = i.getBoundingClientRect()), s = V(s), {
                    top: n.top + (s.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: n.left + (s.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : n) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ne.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ne.nodeName(e[0], "html") || (n = e.offset()), n.top += ne.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += ne.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                        top: t.top - n.top - ne.css(i, "marginTop", !0),
                        left: t.left - n.left - ne.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !ne.nodeName(e, "html") && "static" === ne.css(e, "position");) e = e.offsetParent;
                    return e || lt
                })
            }
        }), ne.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, s) {
            var o = /Y/.test(s);
            ne.fn[t] = function(e) {
                return Ae(this, function(e, t, n) {
                    var i = V(e);
                    return void 0 === n ? i ? s in i ? i[s] : i.document.documentElement[t] : e[t] : void(i ? i.scrollTo(o ? ne(i).scrollLeft() : n, o ? n : ne(i).scrollTop()) : e[t] = n)
                }, t, e, arguments.length, null)
            }
        }), ne.each(["top", "left"], function(e, n) {
            ne.cssHooks[n] = M(te.pixelPosition, function(e, t) {
                return t ? (t = ut(e, n), rt.test(t) ? ne(e).position()[n] + "px" : t) : void 0
            })
        }), ne.each({
            Height: "height",
            Width: "width"
        }, function(o, a) {
            ne.each({
                padding: "inner" + o,
                content: a,
                "": "outer" + o
            }, function(i, e) {
                ne.fn[e] = function(e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        s = i || (!0 === e || !0 === t ? "margin" : "border");
                    return Ae(this, function(e, t, n) {
                        var i;
                        return ne.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? ne.css(e, t, s) : ne.style(e, t, n, s)
                    }, a, n ? e : void 0, n, null)
                }
            })
        }), ne.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), ne.fn.size = function() {
            return this.length
        }, ne.fn.andSelf = ne.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ne
        });
        var cn = T.jQuery,
            dn = T.$;
        return ne.noConflict = function(e) {
            return T.$ === ne && (T.$ = dn), e && T.jQuery === ne && (T.jQuery = cn), ne
        }, e || (T.jQuery = T.$ = ne), ne
    }), function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(d) {
        function e() {
            for (var e = u.scrollTop(), t = h.height(), n = t - f, i = n < e ? n - e : 0, s = 0, o = p.length; s < o; s++) {
                var a, r, l = p[s],
                    c = l.stickyWrapper.offset().top - l.topSpacing - i;
                l.stickyWrapper.css("height", l.stickyElement.outerHeight()), e <= c ? null !== l.currentTop && (l.stickyElement.css({
                    width: "",
                    position: "",
                    top: "",
                    "z-index": ""
                }), l.stickyElement.parent().removeClass(l.className), l.stickyElement.trigger("sticky-end", [l]), l.currentTop = null) : ((a = t - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - e - i) < 0 ? a += l.topSpacing : a = l.topSpacing, l.currentTop !== a && (l.getWidthFrom ? r = d(l.getWidthFrom).width() || null : l.widthFromWrapper && (r = l.stickyWrapper.width()), null == r && (r = l.stickyElement.width()), l.stickyElement.css("width", r).css("position", "fixed").css("top", a).css("z-index", l.zIndex), l.stickyElement.parent().addClass(l.className), null === l.currentTop ? l.stickyElement.trigger("sticky-start", [l]) : l.stickyElement.trigger("sticky-update", [l]), l.currentTop === l.topSpacing && l.currentTop > a || null === l.currentTop && a < l.topSpacing ? l.stickyElement.trigger("sticky-bottom-reached", [l]) : null !== l.currentTop && a === l.topSpacing && l.currentTop < a && l.stickyElement.trigger("sticky-bottom-unreached", [l]), l.currentTop = a), c = l.stickyWrapper.parent(), l.stickyElement.offset().top + l.stickyElement.outerHeight() >= c.offset().top + c.outerHeight() && l.stickyElement.offset().top <= l.topSpacing ? l.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : l.stickyElement.css("position", "fixed").css("top", a).css("bottom", "").css("z-index", l.zIndex))
            }
        }

        function t() {
            f = u.height();
            for (var e = 0, t = p.length; e < t; e++) {
                var n = p[e],
                    i = null;
                n.getWidthFrom ? n.responsiveWidth && (i = d(n.getWidthFrom).width()) : n.widthFromWrapper && (i = n.stickyWrapper.width()), null != i && n.stickyElement.css("width", i)
            }
        }
        var n = Array.prototype.slice,
            i = Array.prototype.splice,
            o = {
                topSpacing: 0,
                bottomSpacing: 0,
                className: "is-sticky",
                wrapperClassName: "sticky-wrapper",
                center: !1,
                getWidthFrom: "",
                widthFromWrapper: !0,
                responsiveWidth: !1,
                zIndex: "auto"
            },
            u = d(window),
            h = d(document),
            p = [],
            f = u.height(),
            a = {
                init: function(e) {
                    var s = d.extend({}, o, e);
                    return this.each(function() {
                        var e = d(this),
                            t = e.attr("id"),
                            n = t ? t + "-" + o.wrapperClassName : o.wrapperClassName,
                            i = d("<div></div>").attr("id", n).addClass(s.wrapperClassName);
                        e.wrapAll(function() {
                            if (0 == d(this).parent("#" + n).length) return i
                        });
                        t = e.parent();
                        s.center && t.css({
                            width: e.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        }), "right" === e.css("float") && e.css({
                            float: "none"
                        }).parent().css({
                            float: "right"
                        }), s.stickyElement = e, s.stickyWrapper = t, s.currentTop = null, p.push(s), a.setWrapperHeight(this), a.setupChangeListeners(this)
                    })
                },
                setWrapperHeight: function(e) {
                    var t = d(e),
                        e = t.parent();
                    e && e.css("height", t.outerHeight())
                },
                setupChangeListeners: function(t) {
                    window.MutationObserver ? new window.MutationObserver(function(e) {
                        (e[0].addedNodes.length || e[0].removedNodes.length) && a.setWrapperHeight(t)
                    }).observe(t, {
                        subtree: !0,
                        childList: !0
                    }) : window.addEventListener ? (t.addEventListener("DOMNodeInserted", function() {
                        a.setWrapperHeight(t)
                    }, !1), t.addEventListener("DOMNodeRemoved", function() {
                        a.setWrapperHeight(t)
                    }, !1)) : window.attachEvent && (t.attachEvent("onDOMNodeInserted", function() {
                        a.setWrapperHeight(t)
                    }), t.attachEvent("onDOMNodeRemoved", function() {
                        a.setWrapperHeight(t)
                    }))
                },
                update: e,
                unstick: function(e) {
                    return this.each(function() {
                        for (var e = d(this), t = -1, n = p.length; 0 < n--;) p[n].stickyElement.get(0) === this && (i.call(p, n, 1), t = n); - 1 !== t && (e.unwrap(), e.css({
                            width: "",
                            position: "",
                            top: "",
                            float: "",
                            "z-index": ""
                        }))
                    })
                }
            };
        window.addEventListener ? (window.addEventListener("scroll", e, !1), window.addEventListener("resize", t, !1)) : window.attachEvent && (window.attachEvent("onscroll", e), window.attachEvent("onresize", t)), d.fn.sticky = function(e) {
            return a[e] ? a[e].apply(this, n.call(arguments, 1)) : "object" != typeof e && e ? void d.error("Method " + e + " does not exist on jQuery.sticky") : a.init.apply(this, arguments)
        }, d.fn.unstick = function(e) {
            return a[e] ? a[e].apply(this, n.call(arguments, 1)) : "object" != typeof e && e ? void d.error("Method " + e + " does not exist on jQuery.sticky") : a.unstick.apply(this, arguments)
        }, d(function() {
            setTimeout(e, 0)
        })
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");
! function(i) {
    "use strict";
    i.fn.emulateTransitionEnd = function(e) {
        var t = !1,
            n = this;
        return i(this).one(i.support.transition.end, function() {
            t = !0
        }), setTimeout(function() {
            t || i(n).trigger(i.support.transition.end)
        }, e), this
    }, i(function() {
        i.support.transition = function() {
            var e, t = document.createElement("bootstrap"),
                n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (e in n)
                if (void 0 !== t.style[e]) return {
                    end: n[e]
                }
        }()
    })
}(jQuery),
function(o) {
    "use strict";

    function i(e) {
        o(e).on("click", t, this.close)
    }
    var t = '[data-dismiss="alert"]';
    i.prototype.close = function(e) {
        function t() {
            s.trigger("closed.bs.alert").remove()
        }
        var n = o(this),
            i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = o(i);
        e && e.preventDefault(), s.length || (s = n.hasClass("alert") ? n : n.parent()), s.trigger(e = o.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), o.support.transition && s.hasClass("fade") ? s.one(o.support.transition.end, t).emulateTransitionEnd(150) : t())
    };
    var e = o.fn.alert;
    o.fn.alert = function(n) {
        return this.each(function() {
            var e = o(this),
                t = e.data("bs.alert");
            t || e.data("bs.alert", t = new i(this)), "string" == typeof n && t[n].call(e)
        })
    }, o.fn.alert.Constructor = i, o.fn.alert.noConflict = function() {
        return o.fn.alert = e, this
    }, o(document).on("click.bs.alert.data-api", t, i.prototype.close)
}(jQuery),
function(s) {
    "use strict";
    var o = function(e, t) {
        this.$element = s(e), this.options = s.extend({}, o.DEFAULTS, t)
    };
    o.DEFAULTS = {
        loadingText: "loading..."
    }, o.prototype.setState = function(e) {
        var t = "disabled",
            n = this.$element,
            i = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", s.resetText || n.data("resetText", n[i]()), n[i](s[e] || this.options[e]), setTimeout(function() {
            "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, o.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons"]');
        e.length && "radio" === this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change").prop("type") && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var e = s.fn.button;
    s.fn.button = function(i) {
        return this.each(function() {
            var e = s(this),
                t = e.data("bs.button"),
                n = "object" == typeof i && i;
            t || e.data("bs.button", t = new o(this, n)), "toggle" == i ? t.toggle() : i && t.setState(i)
        })
    }, s.fn.button.Constructor = o, s.fn.button.noConflict = function() {
        return s.fn.button = e, this
    }, s(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
        var t = s(e.target);
        t.hasClass("btn") || (t = t.closest(".btn")), t.button("toggle"), e.preventDefault()
    })
}(jQuery),
function(r) {
    "use strict";

    function o(e, t) {
        this.$element = r(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = t, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", r.proxy(this.pause, this)).on("mouseleave", r.proxy(this.cycle, this))
    }
    o.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, o.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(r.proxy(this.next, this), this.options.interval)), this
    }, o.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, o.prototype.to = function(e) {
        var t = this,
            n = this.getActiveIndex();
        return e > this.$items.length - 1 || e < 0 ? void 0 : this.sliding ? this.$element.one("slid", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(n < e ? "next" : "prev", r(this.$items[e]))
    }, o.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && r.support.transition.end && (this.$element.trigger(r.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, o.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, o.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, o.prototype.slide = function(e, t) {
        var n = this.$element.find(".item.active"),
            i = t || n[e](),
            s = this.interval,
            o = "next" == e ? "left" : "right",
            t = "next" == e ? "first" : "last",
            a = this;
        if (!i.length) {
            if (!this.options.wrap) return;
            i = this.$element.find(".item")[t]()
        }
        this.sliding = !0, s && this.pause();
        t = r.Event("slide.bs.carousel", {
            relatedTarget: i[0],
            direction: o
        });
        if (!i.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                    var e = r(a.$indicators.children()[a.getActiveIndex()]);
                    e && e.addClass("active")
                })), r.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(t), t.isDefaultPrevented()) return;
                i.addClass(e), i[0].offsetWidth, n.addClass(o), i.addClass(o), n.one(r.support.transition.end, function() {
                    i.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function() {
                        a.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(t), t.isDefaultPrevented()) return;
                n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return s && this.cycle(), this
        }
    };
    var e = r.fn.carousel;
    r.fn.carousel = function(s) {
        return this.each(function() {
            var e = r(this),
                t = e.data("bs.carousel"),
                n = r.extend({}, o.DEFAULTS, e.data(), "object" == typeof s && s),
                i = "string" == typeof s ? s : n.slide;
            t || e.data("bs.carousel", t = new o(this, n)), "number" == typeof s ? t.to(s) : i ? t[i]() : n.interval && t.pause().cycle()
        })
    }, r.fn.carousel.Constructor = o, r.fn.carousel.noConflict = function() {
        return r.fn.carousel = e, this
    }, r(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var t = r(this),
            n = r(t.attr("data-target") || (s = t.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "")),
            i = r.extend({}, n.data(), t.data()),
            s = t.attr("data-slide-to");
        s && (i.interval = !1), n.carousel(i), (s = t.attr("data-slide-to")) && n.data("bs.carousel").to(s), e.preventDefault()
    }), r(window).on("load", function() {
        r('[data-ride="carousel"]').each(function() {
            var e = r(this);
            e.carousel(e.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";
    var s = function(e, t) {
        this.$element = a(e), this.options = a.extend({}, s.DEFAULTS, t), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    s.DEFAULTS = {
        toggle: !0
    }, s.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, s.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = a.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                e = this.$parent && this.$parent.find("> .panel > .in");
                if (e && e.length) {
                    var t = e.data("bs.collapse");
                    if (t && t.transitioning) return;
                    e.collapse("hide"), t || e.data("bs.collapse", null)
                }
                var n = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[n](0), this.transitioning = 1;
                t = function() {
                    this.$element.removeClass("collapsing").addClass("in")[n]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return t.call(this);
                e = a.camelCase(["scroll", n].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(t, this)).emulateTransitionEnd(350)[n](this.$element[0][e])
            }
        }
    }, s.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = a.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var t = this.dimension();
                this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                e = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[t](0).one(a.support.transition.end, a.proxy(e, this)).emulateTransitionEnd(350) : e.call(this)
            }
        }
    }, s.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var e = a.fn.collapse;
    a.fn.collapse = function(i) {
        return this.each(function() {
            var e = a(this),
                t = e.data("bs.collapse"),
                n = a.extend({}, s.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data("bs.collapse", t = new s(this, n)), "string" == typeof i && t[i]()
        })
    }, a.fn.collapse.Constructor = s, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(e) {
        var t = a(this),
            n = t.attr("data-target") || e.preventDefault() || (o = t.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""),
            i = a(n),
            s = i.data("bs.collapse"),
            e = s ? "toggle" : t.data(),
            o = t.attr("data-parent"),
            n = o && a(o);
        s && s.transitioning || (n && n.find('[data-toggle=collapse][data-parent="' + o + '"]').not(t).addClass("collapsed"), t[i.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), i.collapse(e)
    })
}(jQuery),
function(s) {
    "use strict";

    function o() {
        s(".dropdown-backdrop").remove(), s(r).each(function(e) {
            var t = a(s(this));
            t.hasClass("open") && (t.trigger(e = s.Event("hide.bs.dropdown")), e.isDefaultPrevented() || t.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function a(e) {
        var t = e.attr("data-target");
        t || (t = (t = e.attr("href")) && /#/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        t = t && s(t);
        return t && t.length ? t : e.parent()
    }

    function i(e) {
        s(e).on("click.bs.dropdown", this.toggle)
    }
    var r = "[data-toggle=dropdown]";
    i.prototype.toggle = function(e) {
        var t = s(this);
        if (!t.is(".disabled, :disabled")) {
            var n = a(t),
                i = n.hasClass("open");
            if (o(), !i) {
                if ("ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && s('<div class="dropdown-backdrop"/>').insertAfter(s(this)).on("click", o), n.trigger(e = s.Event("show.bs.dropdown")), e.isDefaultPrevented()) return;
                n.toggleClass("open").trigger("shown.bs.dropdown"), t.focus()
            }
            return !1
        }
    }, i.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var t = s(this);
            if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
                var n = a(t),
                    i = n.hasClass("open");
                if (!i || i && 27 == e.keyCode) return 27 == e.which && n.find(r).focus(), t.click();
                t = s("[role=menu] li:not(.divider):visible a", n);
                t.length && (n = t.index(t.filter(":focus")), 38 == e.keyCode && 0 < n && n--, 40 == e.keyCode && n < t.length - 1 && n++, ~n || (n = 0), t.eq(n).focus())
            }
        }
    };
    var e = s.fn.dropdown;
    s.fn.dropdown = function(n) {
        return this.each(function() {
            var e = s(this),
                t = e.data("dropdown");
            t || e.data("dropdown", t = new i(this)), "string" == typeof n && t[n].call(e)
        })
    }, s.fn.dropdown.Constructor = i, s.fn.dropdown.noConflict = function() {
        return s.fn.dropdown = e, this
    }, s(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, i.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu]", i.prototype.keydown)
}(jQuery),
function(o) {
    "use strict";

    function a(e, t) {
        this.options = t, this.$element = o(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    }
    a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function(e) {
        return this[this.isShown ? "hide" : "show"](e)
    }, a.prototype.show = function(n) {
        var i = this,
            e = o.Event("show.bs.modal", {
                relatedTarget: n
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', o.proxy(this.hide, this)), this.backdrop(function() {
            var e = o.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(document.body), i.$element.show(), e && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var t = o.Event("shown.bs.modal", {
                relatedTarget: n
            });
            e ? i.$element.find(".modal-dialog").one(o.support.transition.end, function() {
                i.$element.focus().trigger(t)
            }).emulateTransitionEnd(300) : i.$element.focus().trigger(t)
        }))
    }, a.prototype.hide = function(e) {
        e && e.preventDefault(), e = o.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), o(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), o.support.transition && this.$element.hasClass("fade") ? this.$element.one(o.support.transition.end, o.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, a.prototype.enforceFocus = function() {
        o(document).off("focusin.bs.modal").on("focusin.bs.modal", o.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
        }, this))
    }, a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", o.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, a.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
        })
    }, a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, a.prototype.backdrop = function(e) {
        var t, n = this.$element.hasClass("fade") ? "fade" : "";
        this.isShown && this.options.backdrop ? (t = o.support.transition && n, this.$backdrop = o('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", o.proxy(function(e) {
            e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
        }, this)), t && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), e && (t ? this.$backdrop.one(o.support.transition.end, e).emulateTransitionEnd(150) : e())) : !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), o.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(o.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    };
    var e = o.fn.modal;
    o.fn.modal = function(i, s) {
        return this.each(function() {
            var e = o(this),
                t = e.data("bs.modal"),
                n = o.extend({}, a.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data("bs.modal", t = new a(this, n)), "string" == typeof i ? t[i](s) : n.show && t.show(s)
        })
    }, o.fn.modal.Constructor = a, o.fn.modal.noConflict = function() {
        return o.fn.modal = e, this
    }, o(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t = o(this),
            n = t.attr("href"),
            i = o(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            n = i.data("modal") ? "toggle" : o.extend({
                remote: !/#/.test(n) && n
            }, i.data(), t.data());
        e.preventDefault(), i.modal(n, this).one("hide", function() {
            t.is(":visible") && t.focus()
        })
    }), o(document).on("show.bs.modal", ".modal", function() {
        o(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        o(document.body).removeClass("modal-open")
    })
}(jQuery),
function(d) {
    "use strict";

    function s(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    }
    s.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, s.prototype.init = function(e, t, n) {
        this.enabled = !0, this.type = e, this.$element = d(t), this.options = this.getOptions(n);
        for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
            var o, a = i[s];
            "click" == a ? this.$element.on("click." + this.type, this.options.selector, d.proxy(this.toggle, this)) : "manual" != a && (o = "hover" == a ? "mouseenter" : "focus", a = "hover" == a ? "mouseleave" : "blur", this.$element.on(o + "." + this.type, this.options.selector, d.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, d.proxy(this.leave, this)))
        }
        this.options.selector ? this._options = d.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, s.prototype.getDefaults = function() {
        return s.DEFAULTS
    }, s.prototype.getOptions = function(e) {
        return (e = d.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, s.prototype.getDelegateOptions = function() {
        var n = {},
            i = this.getDefaults();
        return this._options && d.each(this._options, function(e, t) {
            i[e] != t && (n[e] = t)
        }), n
    }, s.prototype.enter = function(e) {
        var t = e instanceof this.constructor ? e : d(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void(t.timeout = setTimeout(function() {
            "in" == t.hoverState && t.show()
        }, t.options.delay.show)) : t.show()
    }, s.prototype.leave = function(e) {
        var t = e instanceof this.constructor ? e : d(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void(t.timeout = setTimeout(function() {
            "out" == t.hoverState && t.hide()
        }, t.options.delay.hide)) : t.hide()
    }, s.prototype.show = function() {
        var e, t, n, i, s, o, a, r, l, c = d.Event("show.bs." + this.type);
        this.hasContent() && this.enabled && (this.$element.trigger(c), c.isDefaultPrevented() || (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), r = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, (o = (s = /\s?auto?\s?/i).test(r)) && (r = r.replace(s, "") || "top"), e.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(r), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), t = this.getPosition(), n = e[0].offsetWidth, l = e[0].offsetHeight, o && (a = this.$element.parent(), i = r, c = document.documentElement.scrollTop || document.body.scrollTop, s = "body" == this.options.container ? window.innerWidth : a.outerWidth(), o = "body" == this.options.container ? window.innerHeight : a.outerHeight(), a = "body" == this.options.container ? 0 : a.offset().left, r = "bottom" == r && t.top + t.height + l - c > o ? "top" : "top" == r && t.top - c - l < 0 ? "bottom" : "right" == r && t.right + n > s ? "left" : "left" == r && t.left - n < a ? "right" : r, e.removeClass(i).addClass(r)), l = this.getCalculatedOffset(r, t, n, l), this.applyPlacement(l, r), this.$element.trigger("shown.bs." + this.type)))
    }, s.prototype.applyPlacement = function(e, t) {
        var n, i = this.tip(),
            s = i[0].offsetWidth,
            o = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            r = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top = e.top + a, e.left = e.left + r, i.offset(e).addClass("in");
        a = i[0].offsetWidth, r = i[0].offsetHeight;
        "top" == t && r != o && (n = !0, e.top = e.top + o - r), /bottom|top/.test(t) ? (t = 0, e.left < 0 && (t = -2 * e.left, e.left = 0, i.offset(e), a = i[0].offsetWidth, r = i[0].offsetHeight), this.replaceArrow(t - s + a, a, "left")) : this.replaceArrow(r - o, r, "top"), n && i.offset(e)
    }, s.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, s.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, s.prototype.hide = function() {
        function e() {
            "in" != t.hoverState && n.detach()
        }
        var t = this,
            n = this.tip(),
            i = d.Event("hide.bs." + this.type);
        return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), d.support.transition && this.$tip.hasClass("fade") ? n.one(d.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.bs." + this.type), this)
    }, s.prototype.fixTitle = function() {
        var e = this.$element;
        !e.attr("title") && "string" == typeof e.attr("data-original-title") || e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, s.prototype.hasContent = function() {
        return this.getTitle()
    }, s.prototype.getPosition = function() {
        var e = this.$element[0];
        return d.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }, s.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, s.prototype.getTitle = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }, s.prototype.tip = function() {
        return this.$tip = this.$tip || d(this.options.template)
    }, s.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, s.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, s.prototype.enable = function() {
        this.enabled = !0
    }, s.prototype.disable = function() {
        this.enabled = !1
    }, s.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, s.prototype.toggle = function(e) {
        e = e ? d(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, s.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var e = d.fn.tooltip;
    d.fn.tooltip = function(i) {
        return this.each(function() {
            var e = d(this),
                t = e.data("bs.tooltip"),
                n = "object" == typeof i && i;
            t || e.data("bs.tooltip", t = new s(this, n)), "string" == typeof i && t[i]()
        })
    }, d.fn.tooltip.Constructor = s, d.fn.tooltip.noConflict = function() {
        return d.fn.tooltip = e, this
    }
}(jQuery),
function(s) {
    "use strict";

    function o(e, t) {
        this.init("popover", e, t)
    }
    if (!s.fn.tooltip) throw new Error("Popover requires tooltip.js");
    o.DEFAULTS = s.extend({}, s.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((o.prototype = s.extend({}, s.fn.tooltip.Constructor.prototype)).constructor = o).prototype.getDefaults = function() {
        return o.DEFAULTS
    }, o.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, o.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, o.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, o.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, o.prototype.tip = function() {
        return this.$tip || (this.$tip = s(this.options.template)), this.$tip
    };
    var e = s.fn.popover;
    s.fn.popover = function(i) {
        return this.each(function() {
            var e = s(this),
                t = e.data("bs.popover"),
                n = "object" == typeof i && i;
            t || e.data("bs.popover", t = new o(this, n)), "string" == typeof i && t[i]()
        })
    }, s.fn.popover.Constructor = o, s.fn.popover.noConflict = function() {
        return s.fn.popover = e, this
    }
}(jQuery),
function(s) {
    "use strict";

    function o(e, t) {
        var n = s.proxy(this.process, this);
        this.$element = s(s(e).is("body") ? window : e), this.$body = s("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", n), this.options = s.extend({}, o.DEFAULTS, t), this.selector = (this.options.target || (e = s(e).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = s([]), this.targets = s([]), this.activeTarget = null, this.refresh(), this.process()
    }
    o.DEFAULTS = {
        offset: 10
    }, o.prototype.refresh = function() {
        var n = this.$element[0] == window ? "offset" : "position";
        this.offsets = s([]), this.targets = s([]);
        var i = this;
        this.$body.find(this.selector).map(function() {
            var e = s(this),
                t = e.data("target") || e.attr("href"),
                e = /^#\w/.test(t) && s(t);
            return e && e.length ? [
                [e[n]().top + (!s.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), t]
            ] : null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, o.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = (this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight) - this.$scrollElement.height(),
            i = this.offsets,
            s = this.targets,
            o = this.activeTarget;
        if (n <= t) return o != (e = s.last()[0]) && this.activate(e);
        for (e = i.length; e--;) o != s[e] && t >= i[e] && (!i[e + 1] || t <= i[e + 1]) && this.activate(s[e])
    }, o.prototype.activate = function(e) {
        this.activeTarget = e, s(this.selector).parents(".active").removeClass("active");
        e = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', e = s(e).parents("li").addClass("active");
        e.parent(".dropdown-menu").length && (e = e.closest("li.dropdown").addClass("active")), e.trigger("activate")
    };
    var e = s.fn.scrollspy;
    s.fn.scrollspy = function(i) {
        return this.each(function() {
            var e = s(this),
                t = e.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            t || e.data("bs.scrollspy", t = new o(this, n)), "string" == typeof i && t[i]()
        })
    }, s.fn.scrollspy.Constructor = o, s.fn.scrollspy.noConflict = function() {
        return s.fn.scrollspy = e, this
    }, s(window).on("load", function() {
        s('[data-spy="scroll"]').each(function() {
            var e = s(this);
            e.scrollspy(e.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function i(e) {
        this.element = a(e)
    }
    i.prototype.show = function() {
        var e, t, n = this.element,
            i = n.closest("ul:not(.dropdown-menu)"),
            s = n.data("target");
        s || (s = (s = n.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")), n.parent("li").hasClass("active") || (e = i.find(".active:last a")[0], t = a.Event("show.bs.tab", {
            relatedTarget: e
        }), n.trigger(t), t.isDefaultPrevented() || (s = a(s), this.activate(n.parent("li"), i), this.activate(s, s.parent(), function() {
            n.trigger({
                type: "shown.bs.tab",
                relatedTarget: e
            })
        })))
    }, i.prototype.activate = function(e, t, n) {
        function i() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
        }
        var s = t.find("> .active"),
            o = n && a.support.transition && s.hasClass("fade");
        o ? s.one(a.support.transition.end, i).emulateTransitionEnd(150) : i(), s.removeClass("in")
    };
    var e = a.fn.tab;
    a.fn.tab = function(n) {
        return this.each(function() {
            var e = a(this),
                t = e.data("bs.tab");
            t || e.data("bs.tab", t = new i(this)), "string" == typeof n && t[n]()
        })
    }, a.fn.tab.Constructor = i, a.fn.tab.noConflict = function() {
        return a.fn.tab = e, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), a(this).tab("show")
    })
}(jQuery),
function(a) {
    "use strict";
    var r = function(e, t) {
        this.options = a.extend({}, r.DEFAULTS, t), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(e), this.affixed = this.unpin = null, this.checkPosition()
    };
    r.RESET = "affix affix-top affix-bottom", r.DEFAULTS = {
        offset: 0
    }, r.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, r.prototype.checkPosition = function() {
        var e, t, n, i, s, o;
        this.$element.is(":visible") && (e = a(document).height(), t = this.$window.scrollTop(), n = this.$element.offset(), o = (i = this.options.offset).top, s = i.bottom, "object" != typeof i && (s = o = i), "function" == typeof o && (o = i.top()), "function" == typeof s && (s = i.bottom()), o = !(null != this.unpin && t + this.unpin <= n.top) && (null != s && n.top + this.$element.height() >= e - s ? "bottom" : null != o && t <= o && "top"), this.affixed !== o && (this.unpin && this.$element.css("top", ""), this.affixed = o, this.unpin = "bottom" == o ? n.top - t : null, this.$element.removeClass(r.RESET).addClass("affix" + (o ? "-" + o : "")), "bottom" == o && this.$element.offset({
            top: document.body.offsetHeight - s - this.$element.height()
        })))
    };
    var e = a.fn.affix;
    a.fn.affix = function(i) {
        return this.each(function() {
            var e = a(this),
                t = e.data("bs.affix"),
                n = "object" == typeof i && i;
            t || e.data("bs.affix", t = new r(this, n)), "string" == typeof i && t[i]()
        })
    }, a.fn.affix.Constructor = r, a.fn.affix.noConflict = function() {
        return a.fn.affix = e, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var e = a(this),
                t = e.data();
            t.offset = t.offset || {}, t.offsetBottom && (t.offset.bottom = t.offsetBottom), t.offsetTop && (t.offset.top = t.offsetTop), e.affix(t)
        })
    })
}(jQuery),
function(e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = e()
}(function() {
    return function i(s, o, a) {
        function r(t, e) {
            if (!o[t]) {
                if (!s[t]) {
                    var n = "function" == typeof require && require;
                    if (!e && n) return n(t, !0);
                    if (l) return l(t, !0);
                    n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                n = o[t] = {
                    exports: {}
                };
                s[t][0].call(n.exports, function(e) {
                    return r(s[t][1][e] || e)
                }, n, n.exports, i, s, o, a)
            }
            return o[t].exports
        }
        for (var l = "function" == typeof require && require, e = 0; e < a.length; e++) r(a[e]);
        return r
    }({
        1: [function(e, t, n) {
            var i;
            "undefined" == typeof Element || Element.prototype.matches || ((i = Element.prototype).matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector), t.exports = function(e, t) {
                for (; e && 9 !== e.nodeType;) {
                    if (e.matches(t)) return e;
                    e = e.parentNode
                }
            }
        }, {}],
        2: [function(e, t, n) {
            var a = e("./closest");
            t.exports = function(e, t, n, i, s) {
                var o = function(t, n, e, i) {
                    return function(e) {
                        e.delegateTarget = a(e.target, n), e.delegateTarget && i.call(t, e)
                    }
                }.apply(this, arguments);
                return e.addEventListener(n, o, s), {
                    destroy: function() {
                        e.removeEventListener(n, o, s)
                    }
                }
            }
        }, {
            "./closest": 1
        }],
        3: [function(e, t, n) {
            n.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function(e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, {}],
        4: [function(e, t, n) {
            var c = e("./is"),
                d = e("delegate");
            t.exports = function(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!c.string(t)) throw new TypeError("Second argument must be a String");
                if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                if (c.node(e)) return s = t, o = n, (i = e).addEventListener(s, o), {
                    destroy: function() {
                        i.removeEventListener(s, o)
                    }
                };
                var i, s, o, a, r, l;
                if (c.nodeList(e)) return a = e, r = t, l = n, Array.prototype.forEach.call(a, function(e) {
                    e.addEventListener(r, l)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(a, function(e) {
                            e.removeEventListener(r, l)
                        })
                    }
                };
                if (c.string(e)) return d(document.body, e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(e, t, n) {
            t.exports = function(e) {
                var t, n = "SELECT" === e.nodeName ? (e.focus(), e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly"), e.value) : (e.hasAttribute("contenteditable") && e.focus(), n = window.getSelection(), (t = document.createRange()).selectNodeContents(e), n.removeAllRanges(), n.addRange(t), n.toString());
                return n
            }
        }, {}],
        6: [function(e, t, n) {
            function i() {}
            i.prototype = {
                on: function(e, t, n) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function(e, t, n) {
                    function i() {
                        s.off(e, i), t.apply(n, arguments)
                    }
                    var s = this;
                    return i._ = t, this.on(e, i, n)
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, s = n.length; i < s; i++) n[i].fn.apply(n[i].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        i = n[e],
                        s = [];
                    if (i && t)
                        for (var o = 0, a = i.length; o < a; o++) i[o].fn !== t && i[o].fn._ !== t && s.push(i[o]);
                    return s.length ? n[e] = s : delete n[e], this
                }
            }, t.exports = i
        }, {}],
        7: [function(e, t, n) {
            var i, s;
            i = this, s = function(e, t) {
                "use strict";
                var n = t && t.__esModule ? t : {
                        default: t
                    },
                    i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    t = (function(e, t, n) {
                        return t && o(e.prototype, t), n && o(e, n), e
                    }(s, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var e = this,
                                t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return e.removeFake()
                            }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            t = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = t + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, n.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult",
                        value: function(e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.target && this.target.blur(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), s);

                function s(e) {
                    (function(e) {
                        if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                    })(this), this.resolveOptions(e), this.initSelection()
                }

                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                e.exports = t
            }, void 0 !== n ? s(t, e("select")) : (s(s = {
                exports: {}
            }, i.select), i.clipboardAction = s.exports)
        }, {
            select: 5
        }],
        8: [function(e, t, n) {
            var i, s;
            i = this, s = function(e, t, n, i) {
                "use strict";

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function o(e, t) {
                    e = "data-clipboard-" + e;
                    if (t.hasAttribute(e)) return t.getAttribute(e)
                }
                var a = s(t),
                    n = s(n),
                    r = s(i),
                    i = function(e, t, n) {
                        return t && c(e.prototype, t), n && c(e, n), e
                    },
                    i = (function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(l, n.default), i(l, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                        }
                    }, {
                        key: "listenClick",
                        value: function(e) {
                            var t = this;
                            this.listener = (0, r.default)(e, "click", function(e) {
                                return t.onClick(e)
                            })
                        }
                    }, {
                        key: "onClick",
                        value: function(e) {
                            e = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({
                                action: this.action(e),
                                target: this.target(e),
                                text: this.text(e),
                                trigger: e,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(e) {
                            return o("action", e)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(e) {
                            e = o("target", e);
                            if (e) return document.querySelector(e)
                        }
                    }, {
                        key: "defaultText",
                        value: function(e) {
                            return o("text", e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                e = "string" == typeof e ? [e] : e,
                                t = !!document.queryCommandSupported;
                            return e.forEach(function(e) {
                                t = t && !!document.queryCommandSupported(e)
                            }), t
                        }
                    }]), l);

                function l(e, t) {
                    ! function(e) {
                        if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function")
                    }(this);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
                    return n.resolveOptions(t), n.listenClick(e), n
                }

                function c(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                e.exports = i
            }, void 0 !== n ? s(t, e("./clipboard-action"), e("tiny-emitter"), e("good-listener")) : (s(s = {
                exports: {}
            }, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = s.exports)
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
}),
function(z) {
    var j = {},
        F = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {},
            onSliderResize: function() {}
        };
    z.fn.bxSlider = function(t) {
        if (0 == this.length) return this;
        if (1 < this.length) return this.each(function() {
            z(this).bxSlider(t)
        }), this;
        var a = {},
            r = this;
        j.el = this;

        function n() {
            a.settings = z.extend({}, F, t), a.settings.slideWidth = parseInt(a.settings.slideWidth), a.children = r.children(a.settings.slideSelector), a.children.length < a.settings.minSlides && (a.settings.minSlides = a.children.length), a.children.length < a.settings.maxSlides && (a.settings.maxSlides = a.children.length), a.settings.randomStart && (a.settings.startSlide = Math.floor(Math.random() * a.children.length)), a.active = {
                index: a.settings.startSlide
            }, a.carousel = 1 < a.settings.minSlides || 1 < a.settings.maxSlides, a.carousel && (a.settings.preloadImages = "all"), a.minThreshold = a.settings.minSlides * a.settings.slideWidth + (a.settings.minSlides - 1) * a.settings.slideMargin, a.maxThreshold = a.settings.maxSlides * a.settings.slideWidth + (a.settings.maxSlides - 1) * a.settings.slideMargin, a.working = !1, a.controls = {}, a.interval = null, a.animProp = "vertical" == a.settings.mode ? "top" : "left", a.usingCSS = a.settings.useCSS && "fade" != a.settings.mode && function() {
                var e, t = document.createElement("div"),
                    n = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (e in n)
                    if (void 0 !== t.style[n[e]]) return a.cssPrefix = n[e].replace("Perspective", "").toLowerCase(), a.animProp = "-" + a.cssPrefix + "-transform", !0;
                return !1
            }(), "vertical" == a.settings.mode && (a.settings.maxSlides = a.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(a.settings.slideSelector).each(function() {
                z(this).data("origStyle", z(this).attr("style"))
            }), l()
        }

        function e() {
            for (var e = "", t = m(), n = 0; n < t; n++) {
                var i = "";
                a.settings.buildPager && z.isFunction(a.settings.buildPager) ? (i = a.settings.buildPager(n), a.pagerEl.addClass("bx-custom-pager")) : (i = n + 1, a.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + n + '" class="bx-pager-link">' + i + "</a></div>"
            }
            a.pagerEl.html(e)
        }
        var s = z(window).width(),
            o = z(window).height(),
            l = function() {
                r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), a.viewport = r.parent(), a.loader = z('<div class="bx-loading" />'), a.viewport.prepend(a.loader), r.css({
                    width: "horizontal" == a.settings.mode ? 100 * a.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), a.usingCSS && a.settings.easing ? r.css("-" + a.cssPrefix + "-transition-timing-function", a.settings.easing) : a.settings.easing || (a.settings.easing = "swing"), f(), a.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), a.viewport.parent().css({
                    maxWidth: h()
                }), a.settings.pager || a.viewport.parent().css({
                    margin: "0 auto 0px"
                }), a.children.css({
                    float: "horizontal" == a.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), a.children.css("width", p()), "horizontal" == a.settings.mode && 0 < a.settings.slideMargin && a.children.css("marginRight", a.settings.slideMargin), "vertical" == a.settings.mode && 0 < a.settings.slideMargin && a.children.css("marginBottom", a.settings.slideMargin), "fade" == a.settings.mode && (a.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), a.children.eq(a.settings.startSlide).css({
                    zIndex: a.settings.slideZIndex,
                    display: "block"
                })), a.controls.el = z('<div class="bx-controls" />'), a.settings.captions && S(), a.active.last = a.settings.startSlide == m() - 1, a.settings.video && r.fitVids();
                var e = a.children.eq(a.settings.startSlide);
                "all" == a.settings.preloadImages && (e = a.children), a.settings.ticker ? a.settings.pager = !1 : (a.settings.pager && y(), a.settings.controls && w(), a.settings.auto && a.settings.autoControls && T(), (a.settings.controls || a.settings.autoControls || a.settings.pager) && a.viewport.after(a.controls.el)), c(e, d)
            },
            c = function(e, t) {
                var n, i = e.find("img, iframe").length;
                0 != i ? (n = 0, e.find("img, iframe").each(function() {
                    z(this).one("load", function() {
                        ++n == i && t()
                    }).each(function() {
                        this.complete && z(this).load()
                    })
                })) : t()
            },
            d = function() {
                var e, t;
                a.settings.infiniteLoop && "fade" != a.settings.mode && !a.settings.ticker && (t = "vertical" == a.settings.mode ? a.settings.minSlides : a.settings.maxSlides, e = a.children.slice(0, t).clone().addClass("bx-clone"), t = a.children.slice(-t).clone().addClass("bx-clone"), r.append(e).prepend(t)), a.loader.remove(), v(), "vertical" == a.settings.mode && (a.settings.adaptiveHeight = !0), a.viewport.height(u()), r.redrawSlider(), a.settings.onSliderLoad(a.active.index), a.initialized = !0, a.settings.responsive && z(window).bind("resize", G), a.settings.auto && a.settings.autoStart && $(), a.settings.ticker && I(), a.settings.pager && M(a.settings.startSlide), a.settings.controls && D(), a.settings.touchEnabled && !a.settings.ticker && H()
            },
            u = function() {
                var e = 0,
                    t = z();
                if ("vertical" == a.settings.mode || a.settings.adaptiveHeight)
                    if (a.carousel) {
                        var n = 1 == a.settings.moveSlides ? a.active.index : a.active.index * g(),
                            t = a.children.eq(n);
                        for (i = 1; i <= a.settings.maxSlides - 1; i++) t = n + i >= a.children.length ? t.add(a.children.eq(i - 1)) : t.add(a.children.eq(n + i))
                    } else t = a.children.eq(a.active.index);
                else t = a.children;
                return "vertical" == a.settings.mode ? (t.each(function() {
                    e += z(this).outerHeight()
                }), 0 < a.settings.slideMargin && (e += a.settings.slideMargin * (a.settings.minSlides - 1))) : e = Math.max.apply(Math, t.map(function() {
                    return z(this).outerHeight(!1)
                }).get()), e
            },
            h = function() {
                var e = "100%";
                return 0 < a.settings.slideWidth && (e = "horizontal" == a.settings.mode ? a.settings.maxSlides * a.settings.slideWidth + (a.settings.maxSlides - 1) * a.settings.slideMargin : a.settings.slideWidth), e
            },
            p = function() {
                var e = a.settings.slideWidth,
                    t = a.viewport.width();
                return 0 == a.settings.slideWidth || a.settings.slideWidth > t && !a.carousel || "vertical" == a.settings.mode ? e = t : 1 < a.settings.maxSlides && "horizontal" == a.settings.mode && (t > a.maxThreshold || t < a.minThreshold && (e = (t - a.settings.slideMargin * (a.settings.minSlides - 1)) / a.settings.minSlides)), e
            },
            f = function() {
                var e, t = 1;
                return "horizontal" == a.settings.mode && 0 < a.settings.slideWidth ? t = a.viewport.width() < a.minThreshold ? a.settings.minSlides : a.viewport.width() > a.maxThreshold ? a.settings.maxSlides : (e = a.children.first().width(), Math.floor(a.viewport.width() / e)) : "vertical" == a.settings.mode && (t = a.settings.minSlides), t
            },
            m = function() {
                var e = 0;
                if (0 < a.settings.moveSlides)
                    if (a.settings.infiniteLoop) e = a.children.length / g();
                    else
                        for (var t = 0, n = 0; t < a.children.length;) ++e, t = n + f(), n += a.settings.moveSlides <= f() ? a.settings.moveSlides : f();
                else e = Math.ceil(a.children.length / f());
                return e
            },
            g = function() {
                return 0 < a.settings.moveSlides && a.settings.moveSlides <= f() ? a.settings.moveSlides : f()
            },
            v = function() {
                var e, t;
                a.children.length > a.settings.maxSlides && a.active.last && !a.settings.infiniteLoop ? "horizontal" == a.settings.mode ? (t = (e = a.children.last()).position(), b(-(t.left - (a.viewport.width() - e.width())), "reset", 0)) : "vertical" == a.settings.mode && (e = a.children.length - a.settings.minSlides, t = a.children.eq(e).position(), b(-t.top, "reset", 0)) : (t = a.children.eq(a.active.index * g()).position(), a.active.index == m() - 1 && (a.active.last = !0), null != t && ("horizontal" == a.settings.mode ? b(-t.left, "reset", 0) : "vertical" == a.settings.mode && b(-t.top, "reset", 0)))
            },
            b = function(e, t, n, i) {
                var s;
                a.usingCSS ? (s = "vertical" == a.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", r.css("-" + a.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" == t ? (r.css(a.animProp, s), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), k()
                })) : "reset" == t ? r.css(a.animProp, s) : "ticker" == t && (r.css("-" + a.cssPrefix + "-transition-timing-function", "linear"), r.css(a.animProp, s), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(i.resetValue, "reset", 0), L()
                }))) : ((s = {})[a.animProp] = e, "slide" == t ? r.animate(s, n, a.settings.easing, function() {
                    k()
                }) : "reset" == t ? r.css(a.animProp, e) : "ticker" == t && r.animate(s, speed, "linear", function() {
                    b(i.resetValue, "reset", 0), L()
                }))
            },
            y = function() {
                a.settings.pagerCustom ? a.pagerEl = z(a.settings.pagerCustom) : (a.pagerEl = z('<div class="bx-pager" />'), a.settings.pagerSelector ? z(a.settings.pagerSelector).html(a.pagerEl) : a.controls.el.addClass("bx-has-pager").append(a.pagerEl), e()), a.pagerEl.on("click", "a", A)
            },
            w = function() {
                a.controls.next = z('<a class="bx-next" href="">' + a.settings.nextText + "</a>"), a.controls.prev = z('<a class="bx-prev" href="">' + a.settings.prevText + "</a>"), a.controls.next.bind("click", x), a.controls.prev.bind("click", C), a.settings.nextSelector && z(a.settings.nextSelector).append(a.controls.next), a.settings.prevSelector && z(a.settings.prevSelector).append(a.controls.prev), a.settings.nextSelector || a.settings.prevSelector || (a.controls.directionEl = z('<div class="bx-controls-direction" />'), a.controls.directionEl.append(a.controls.prev).append(a.controls.next), a.controls.el.addClass("bx-has-controls-direction").append(a.controls.directionEl))
            },
            T = function() {
                a.controls.start = z('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + a.settings.startText + "</a></div>"), a.controls.stop = z('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + a.settings.stopText + "</a></div>"), a.controls.autoEl = z('<div class="bx-controls-auto" />'), a.controls.autoEl.on("click", ".bx-start", E), a.controls.autoEl.on("click", ".bx-stop", P), a.settings.autoControlsCombine ? a.controls.autoEl.append(a.controls.start) : a.controls.autoEl.append(a.controls.start).append(a.controls.stop), a.settings.autoControlsSelector ? z(a.settings.autoControlsSelector).html(a.controls.autoEl) : a.controls.el.addClass("bx-has-controls-auto").append(a.controls.autoEl), _(a.settings.autoStart ? "stop" : "start")
            },
            S = function() {
                a.children.each(function() {
                    var e = z(this).find("img:first").attr("title");
                    null != e && ("" + e).length && z(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                })
            },
            x = function(e) {
                a.settings.auto && r.stopAuto(), r.goToNextSlide(), e.preventDefault()
            },
            C = function(e) {
                a.settings.auto && r.stopAuto(), r.goToPrevSlide(), e.preventDefault()
            },
            E = function(e) {
                r.startAuto(), e.preventDefault()
            },
            P = function(e) {
                r.stopAuto(), e.preventDefault()
            },
            A = function(e) {
                a.settings.auto && r.stopAuto();
                var t = z(e.currentTarget),
                    t = parseInt(t.attr("data-slide-index"));
                t != a.active.index && r.goToSlide(t), e.preventDefault()
            },
            M = function(n) {
                var e = a.children.length;
                return "short" == a.settings.pagerType ? (1 < a.settings.maxSlides && (e = Math.ceil(a.children.length / a.settings.maxSlides)), void a.pagerEl.html(n + 1 + a.settings.pagerShortSeparator + e)) : (a.pagerEl.find("a").removeClass("active"), void a.pagerEl.each(function(e, t) {
                    z(t).find("a").eq(n).addClass("active")
                }))
            },
            k = function() {
                var e;
                a.settings.infiniteLoop && (e = "", 0 == a.active.index ? e = a.children.eq(0).position() : a.active.index == m() - 1 && a.carousel ? e = a.children.eq((m() - 1) * g()).position() : a.active.index == a.children.length - 1 && (e = a.children.eq(a.children.length - 1).position()), e && ("horizontal" == a.settings.mode ? b(-e.left, "reset", 0) : "vertical" == a.settings.mode && b(-e.top, "reset", 0))), a.working = !1, a.settings.onSlideAfter(a.children.eq(a.active.index), a.oldIndex, a.active.index)
            },
            _ = function(e) {
                a.settings.autoControlsCombine ? a.controls.autoEl.html(a.controls[e]) : (a.controls.autoEl.find("a").removeClass("active"), a.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
            },
            D = function() {
                1 == m() ? (a.controls.prev.addClass("disabled"), a.controls.next.addClass("disabled")) : !a.settings.infiniteLoop && a.settings.hideControlOnEnd && (0 == a.active.index ? (a.controls.prev.addClass("disabled"), a.controls.next.removeClass("disabled")) : a.active.index == m() - 1 ? (a.controls.next.addClass("disabled"), a.controls.prev.removeClass("disabled")) : (a.controls.prev.removeClass("disabled"), a.controls.next.removeClass("disabled")))
            },
            $ = function() {
                0 < a.settings.autoDelay ? setTimeout(r.startAuto, a.settings.autoDelay) : r.startAuto(), a.settings.autoHover && r.hover(function() {
                    a.interval && (r.stopAuto(!0), a.autoPaused = !0)
                }, function() {
                    a.autoPaused && (r.startAuto(!0), a.autoPaused = null)
                })
            },
            I = function() {
                var e, t = 0;
                "next" == a.settings.autoDirection ? r.append(a.children.clone().addClass("bx-clone")) : (r.prepend(a.children.clone().addClass("bx-clone")), e = a.children.first().position(), t = "horizontal" == a.settings.mode ? -e.left : -e.top), b(t, "reset", 0), a.settings.pager = !1, a.settings.controls = !1, a.settings.autoControls = !1, a.settings.tickerHover && !a.usingCSS && a.viewport.hover(function() {
                    r.stop()
                }, function() {
                    var e = 0;
                    a.children.each(function() {
                        e += "horizontal" == a.settings.mode ? z(this).outerWidth(!0) : z(this).outerHeight(!0)
                    });
                    var t = a.settings.speed / e,
                        n = "horizontal" == a.settings.mode ? "left" : "top",
                        n = t * (e - Math.abs(parseInt(r.css(n))));
                    L(n)
                }), L()
            },
            L = function(e) {
                speed = e || a.settings.speed;
                var t = {
                        left: 0,
                        top: 0
                    },
                    e = {
                        left: 0,
                        top: 0
                    };
                "next" == a.settings.autoDirection ? t = r.find(".bx-clone").first().position() : e = a.children.first().position();
                t = "horizontal" == a.settings.mode ? -t.left : -t.top, e = {
                    resetValue: "horizontal" == a.settings.mode ? -e.left : -e.top
                };
                b(t, "ticker", speed, e)
            },
            H = function() {
                a.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, a.viewport.bind("touchstart", N)
            },
            N = function(e) {
                a.working ? e.preventDefault() : (a.touch.originalPos = r.position(), e = e.originalEvent, a.touch.start.x = e.changedTouches[0].pageX, a.touch.start.y = e.changedTouches[0].pageY, a.viewport.bind("touchmove", O), a.viewport.bind("touchend", B))
            },
            O = function(e) {
                var t, n = e.originalEvent,
                    i = Math.abs(n.changedTouches[0].pageX - a.touch.start.x),
                    s = Math.abs(n.changedTouches[0].pageY - a.touch.start.y);
                (s < 3 * i && a.settings.preventDefaultSwipeX || i < 3 * s && a.settings.preventDefaultSwipeY) && e.preventDefault(), "fade" != a.settings.mode && a.settings.oneToOneTouch && (e = 0, e = "horizontal" == a.settings.mode ? (t = n.changedTouches[0].pageX - a.touch.start.x, a.touch.originalPos.left + t) : (t = n.changedTouches[0].pageY - a.touch.start.y, a.touch.originalPos.top + t), b(e, "reset", 0))
            },
            B = function(e) {
                a.viewport.unbind("touchmove", O);
                var t, n = e.originalEvent,
                    e = 0;
                a.touch.end.x = n.changedTouches[0].pageX, a.touch.end.y = n.changedTouches[0].pageY, "fade" == a.settings.mode ? (t = Math.abs(a.touch.start.x - a.touch.end.x)) >= a.settings.swipeThreshold && (a.touch.start.x > a.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : (t = 0, e = "horizontal" == a.settings.mode ? (t = a.touch.end.x - a.touch.start.x, a.touch.originalPos.left) : (t = a.touch.end.y - a.touch.start.y, a.touch.originalPos.top), (a.settings.infiniteLoop || !(0 == a.active.index && 0 < t || a.active.last && t < 0)) && Math.abs(t) >= a.settings.swipeThreshold ? (t < 0 ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(e, "reset", 200)), a.viewport.unbind("touchend", B)
            },
            G = function() {
                var e = z(window).width(),
                    t = z(window).height();
                s == e && o == t || (s = e, o = t, r.redrawSlider(), a.settings.onSliderResize.call(r, a.active.index))
            };
        return r.goToSlide = function(e, t) {
            var n, i, s, o;
            a.working || a.active.index == e || (a.working = !0, a.oldIndex = a.active.index, a.active.index = e < 0 ? m() - 1 : e >= m() ? 0 : e, a.settings.onSlideBefore(a.children.eq(a.active.index), a.oldIndex, a.active.index), "next" == t ? a.settings.onSlideNext(a.children.eq(a.active.index), a.oldIndex, a.active.index) : "prev" == t && a.settings.onSlidePrev(a.children.eq(a.active.index), a.oldIndex, a.active.index), a.active.last = a.active.index >= m() - 1, a.settings.pager && M(a.active.index), a.settings.controls && D(), "fade" == a.settings.mode ? (a.settings.adaptiveHeight && a.viewport.height() != u() && a.viewport.animate({
                height: u()
            }, a.settings.adaptiveHeightSpeed), a.children.filter(":visible").fadeOut(a.settings.speed).css({
                zIndex: 0
            }), a.children.eq(a.active.index).css("zIndex", a.settings.slideZIndex + 1).fadeIn(a.settings.speed, function() {
                z(this).css("zIndex", a.settings.slideZIndex), k()
            })) : (a.settings.adaptiveHeight && a.viewport.height() != u() && a.viewport.animate({
                height: u()
            }, a.settings.adaptiveHeightSpeed), o = {
                left: n = 0,
                top: 0
            }, !a.settings.infiniteLoop && a.carousel && a.active.last ? "horizontal" == a.settings.mode ? (o = (s = a.children.eq(a.children.length - 1)).position(), n = a.viewport.width() - s.outerWidth()) : (i = a.children.length - a.settings.minSlides, o = a.children.eq(i).position()) : a.carousel && a.active.last && "prev" == t ? (i = 1 == a.settings.moveSlides ? a.settings.maxSlides - g() : (m() - 1) * g() - (a.children.length - a.settings.maxSlides), o = (s = r.children(".bx-clone").eq(i)).position()) : "next" == t && 0 == a.active.index ? (o = r.find("> .bx-clone").eq(a.settings.maxSlides).position(), a.active.last = !1) : 0 <= e && (e = e * g(), o = a.children.eq(e).position()), void 0 !== o && (o = "horizontal" == a.settings.mode ? -(o.left - n) : -o.top, b(o, "slide", a.settings.speed))))
        }, r.goToNextSlide = function() {
            var e;
            !a.settings.infiniteLoop && a.active.last || (e = parseInt(a.active.index) + 1, r.goToSlide(e, "next"))
        }, r.goToPrevSlide = function() {
            var e;
            !a.settings.infiniteLoop && 0 == a.active.index || (e = parseInt(a.active.index) - 1, r.goToSlide(e, "prev"))
        }, r.startAuto = function(e) {
            a.interval || (a.interval = setInterval(function() {
                "next" == a.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
            }, a.settings.pause), a.settings.autoControls && 1 != e && _("stop"))
        }, r.stopAuto = function(e) {
            a.interval && (clearInterval(a.interval), a.interval = null, a.settings.autoControls && 1 != e && _("start"))
        }, r.getCurrentSlide = function() {
            return a.active.index
        }, r.getCurrentSlideElement = function() {
            return a.children.eq(a.active.index)
        }, r.getSlideCount = function() {
            return a.children.length
        }, r.redrawSlider = function() {
            a.children.add(r.find(".bx-clone")).outerWidth(p()), a.viewport.css("height", u()), a.settings.ticker || v(), a.active.last && (a.active.index = m() - 1), a.active.index >= m() && (a.active.last = !0), a.settings.pager && !a.settings.pagerCustom && (e(), M(a.active.index))
        }, r.destroySlider = function() {
            a.initialized && (a.initialized = !1, z(".bx-clone", this).remove(), a.children.each(function() {
                null != z(this).data("origStyle") ? z(this).attr("style", z(this).data("origStyle")) : z(this).removeAttr("style")
            }), null != z(this).data("origStyle") ? this.attr("style", z(this).data("origStyle")) : z(this).removeAttr("style"), z(this).unwrap().unwrap(), a.controls.el && a.controls.el.remove(), a.controls.next && a.controls.next.remove(), a.controls.prev && a.controls.prev.remove(), a.pagerEl && a.settings.controls && a.pagerEl.remove(), z(".bx-caption", this).remove(), a.controls.autoEl && a.controls.autoEl.remove(), clearInterval(a.interval), a.settings.responsive && z(window).unbind("resize", G))
        }, r.reloadSlider = function(e) {
            null != e && (t = e), r.destroySlider(), n()
        }, n(), this
    }
}(jQuery),
function(h) {
    var n = !0;
    h.flexslider = function(p, e) {
        var f = h(p);
        f.vars = h.extend({}, h.flexslider.defaults, e);
        var t, r = f.vars.namespace,
            m = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            a = ("ontouchstart" in window || m || window.DocumentTouch && document instanceof DocumentTouch) && f.vars.touch,
            l = "click touchend MSPointerUp keyup",
            c = "",
            g = "vertical" === f.vars.direction,
            v = f.vars.reverse,
            b = 0 < f.vars.itemWidth,
            y = "fade" === f.vars.animation,
            d = "" !== f.vars.asNavFor,
            u = {};
        h.data(p, "flexslider", f), u = {
            init: function() {
                f.animating = !1, f.currentSlide = parseInt(f.vars.startAt || 0, 10), isNaN(f.currentSlide) && (f.currentSlide = 0), f.animatingTo = f.currentSlide, f.atEnd = 0 === f.currentSlide || f.currentSlide === f.last, f.containerSelector = f.vars.selector.substr(0, f.vars.selector.search(" ")), f.slides = h(f.vars.selector, f), f.container = h(f.containerSelector, f), f.count = f.slides.length, f.syncExists = 0 < h(f.vars.sync).length, "slide" === f.vars.animation && (f.vars.animation = "swing"), f.prop = g ? "top" : "marginLeft", f.args = {}, f.manualPause = !1, f.stopped = !1, f.started = !1, f.startTimeout = null, f.transitions = !f.vars.video && !y && f.vars.useCSS && function() {
                    var e, t = document.createElement("div"),
                        n = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (e in n)
                        if (void 0 !== t.style[n[e]]) return f.pfx = n[e].replace("Perspective", "").toLowerCase(), f.prop = "-" + f.pfx + "-transform", !0;
                    return !1
                }(), (f.ensureAnimationEnd = "") !== f.vars.controlsContainer && (f.controlsContainer = 0 < h(f.vars.controlsContainer).length && h(f.vars.controlsContainer)), "" !== f.vars.manualControls && (f.manualControls = 0 < h(f.vars.manualControls).length && h(f.vars.manualControls)), "" !== f.vars.customDirectionNav && (f.customDirectionNav = 2 === h(f.vars.customDirectionNav).length && h(f.vars.customDirectionNav)), f.vars.randomize && (f.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), f.container.empty().append(f.slides)), f.doMath(), f.setup("init"), f.vars.controlNav && u.controlNav.setup(), f.vars.directionNav && u.directionNav.setup(), f.vars.keyboard && (1 === h(f.containerSelector).length || f.vars.multipleKeyboard) && h(document).bind("keyup", function(e) {
                    e = e.keyCode;
                    f.animating || 39 !== e && 37 !== e || (e = 39 === e ? f.getTarget("next") : 37 === e && f.getTarget("prev"), f.flexAnimate(e, f.vars.pauseOnAction))
                }), f.vars.mousewheel && f.bind("mousewheel", function(e, t, n, i) {
                    e.preventDefault();
                    t = t < 0 ? f.getTarget("next") : f.getTarget("prev");
                    f.flexAnimate(t, f.vars.pauseOnAction)
                }), f.vars.pausePlay && u.pausePlay.setup(), f.vars.slideshow && f.vars.pauseInvisible && u.pauseInvisible.init(), f.vars.slideshow && (f.vars.pauseOnHover && f.hover(function() {
                    f.manualPlay || f.manualPause || f.pause()
                }, function() {
                    f.manualPause || f.manualPlay || f.stopped || f.play()
                }), f.vars.pauseInvisible && u.pauseInvisible.isHidden() || (0 < f.vars.initDelay ? f.startTimeout = setTimeout(f.play, f.vars.initDelay) : f.play())), d && u.asNav.setup(), a && f.vars.touch && u.touch(), (!y || y && f.vars.smoothHeight) && h(window).bind("resize orientationchange focus", u.resize), f.find("img").attr("draggable", "false"), setTimeout(function() {
                    f.vars.start(f)
                }, 200)
            },
            asNav: {
                setup: function() {
                    f.asNav = !0, f.animatingTo = Math.floor(f.currentSlide / f.move), f.currentItem = f.currentSlide, f.slides.removeClass(r + "active-slide").eq(f.currentItem).addClass(r + "active-slide"), m ? (p._slider = f).slides.each(function() {
                        var e = this;
                        e._gesture = new MSGesture, (e._gesture.target = e).addEventListener("MSPointerDown", function(e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function(e) {
                            e.preventDefault();
                            var t = h(this),
                                e = t.index();
                            h(f.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (f.direction = f.currentItem < e ? "next" : "prev", f.flexAnimate(e, f.vars.pauseOnAction, !1, !0, !0))
                        })
                    }) : f.slides.on(l, function(e) {
                        e.preventDefault();
                        var t = h(this),
                            e = t.index();
                        t.offset().left - h(f).scrollLeft() <= 0 && t.hasClass(r + "active-slide") ? f.flexAnimate(f.getTarget("prev"), !0) : h(f.vars.asNavFor).data("flexslider").animating || t.hasClass(r + "active-slide") || (f.direction = f.currentItem < e ? "next" : "prev", f.flexAnimate(e, f.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    f.manualControls ? u.controlNav.setupManual() : u.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var e, t = "thumbnails" === f.vars.controlNav ? "control-thumbs" : "control-paging",
                        n = 1;
                    if (f.controlNavScaffold = h('<ol class="' + r + "control-nav " + r + t + '"></ol>'), 1 < f.pagingCount)
                        for (var i = 0; i < f.pagingCount; i++) {
                            void 0 === (e = f.slides.eq(i)).attr("data-thumb-alt") && e.attr("data-thumb-alt", "");
                            var s, o = "" !== e.attr("data-thumb-alt") ? o = ' alt="' + e.attr("data-thumb-alt") + '"' : "",
                                a = "thumbnails" === f.vars.controlNav ? '<img src="' + e.attr("data-thumb") + '"' + o + "/>" : '<a href="#">' + n + "</a>";
                            "thumbnails" === f.vars.controlNav && !0 === f.vars.thumbCaptions && "" !== (s = e.attr("data-thumbcaption")) && void 0 !== s && (a += '<span class="' + r + 'caption">' + s + "</span>"), f.controlNavScaffold.append("<li>" + a + "</li>"), n++
                        }(f.controlsContainer ? h(f.controlsContainer) : f).append(f.controlNavScaffold), u.controlNav.set(), u.controlNav.active(), f.controlNavScaffold.delegate("a, img", l, function(e) {
                            var t, n;
                            e.preventDefault(), "" !== c && c !== e.type || (t = h(this), n = f.controlNav.index(t), t.hasClass(r + "active") || (f.direction = n > f.currentSlide ? "next" : "prev", f.flexAnimate(n, f.vars.pauseOnAction))), "" === c && (c = e.type), u.setToClearWatchedEvent()
                        })
                },
                setupManual: function() {
                    f.controlNav = f.manualControls, u.controlNav.active(), f.controlNav.bind(l, function(e) {
                        var t, n;
                        e.preventDefault(), "" !== c && c !== e.type || (t = h(this), n = f.controlNav.index(t), t.hasClass(r + "active") || (n > f.currentSlide ? f.direction = "next" : f.direction = "prev", f.flexAnimate(n, f.vars.pauseOnAction))), "" === c && (c = e.type), u.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var e = "thumbnails" === f.vars.controlNav ? "img" : "a";
                    f.controlNav = h("." + r + "control-nav li " + e, f.controlsContainer || f)
                },
                active: function() {
                    f.controlNav.removeClass(r + "active").eq(f.animatingTo).addClass(r + "active")
                },
                update: function(e, t) {
                    1 < f.pagingCount && "add" === e ? f.controlNavScaffold.append(h('<li><a href="#">' + f.count + "</a></li>")) : (1 === f.pagingCount ? f.controlNavScaffold.find("li") : f.controlNav.eq(t).closest("li")).remove(), u.controlNav.set(), 1 < f.pagingCount && f.pagingCount !== f.controlNav.length ? f.update(t, e) : u.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var e = h('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + f.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + f.vars.nextText + "</a></li></ul>");
                    f.customDirectionNav ? f.directionNav = f.customDirectionNav : f.controlsContainer ? (h(f.controlsContainer).append(e), f.directionNav = h("." + r + "direction-nav li a", f.controlsContainer)) : (f.append(e), f.directionNav = h("." + r + "direction-nav li a", f)), u.directionNav.update(), f.directionNav.bind(l, function(e) {
                        var t;
                        e.preventDefault(), "" !== c && c !== e.type || (t = h(this).hasClass(r + "next") ? f.getTarget("next") : f.getTarget("prev"), f.flexAnimate(t, f.vars.pauseOnAction)), "" === c && (c = e.type), u.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = r + "disabled";
                    1 === f.pagingCount ? f.directionNav.addClass(e).attr("tabindex", "-1") : f.vars.animationLoop ? f.directionNav.removeClass(e).removeAttr("tabindex") : 0 === f.animatingTo ? f.directionNav.removeClass(e).filter("." + r + "prev").addClass(e).attr("tabindex", "-1") : f.animatingTo === f.last ? f.directionNav.removeClass(e).filter("." + r + "next").addClass(e).attr("tabindex", "-1") : f.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var e = h('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
                    f.controlsContainer ? (f.controlsContainer.append(e), f.pausePlay = h("." + r + "pauseplay a", f.controlsContainer)) : (f.append(e), f.pausePlay = h("." + r + "pauseplay a", f)), u.pausePlay.update(f.vars.slideshow ? r + "pause" : r + "play"), f.pausePlay.bind(l, function(e) {
                        e.preventDefault(), "" !== c && c !== e.type || (h(this).hasClass(r + "pause") ? (f.manualPause = !0, f.manualPlay = !1, f.pause()) : (f.manualPause = !1, f.manualPlay = !0, f.play())), "" === c && (c = e.type), u.setToClearWatchedEvent()
                    })
                },
                update: function(e) {
                    "play" === e ? f.pausePlay.removeClass(r + "pause").addClass(r + "play").html(f.vars.playText) : f.pausePlay.removeClass(r + "play").addClass(r + "pause").html(f.vars.pauseText)
                }
            },
            touch: function() {
                var i, s, o, a, r, l, e, c, d, u = !1,
                    t = 0,
                    n = 0,
                    h = 0;
                m ? (p.style.msTouchAction = "none", p._gesture = new MSGesture, (p._gesture.target = p).addEventListener("MSPointerDown", function(e) {
                    e.stopPropagation(), f.animating ? e.preventDefault() : (f.pause(), p._gesture.addPointer(e.pointerId), h = 0, a = g ? f.h : f.w, l = Number(new Date), o = b && v && f.animatingTo === f.last ? 0 : b && v ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : b && f.currentSlide === f.last ? f.limit : b ? (f.itemW + f.vars.itemMargin) * f.move * f.currentSlide : v ? (f.last - f.currentSlide + f.cloneOffset) * a : (f.currentSlide + f.cloneOffset) * a)
                }, !1), p._slider = f, p.addEventListener("MSGestureChange", function(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        var n = -e.translationX,
                            i = -e.translationY;
                        return r = h += g ? i : n, u = g ? Math.abs(h) < Math.abs(-n) : Math.abs(h) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            p._gesture.stop()
                        }) : void((!u || 500 < Number(new Date) - l) && (e.preventDefault(), !y && t.transitions && (t.vars.animationLoop || (r = h / (0 === t.currentSlide && h < 0 || t.currentSlide === t.last && 0 < h ? Math.abs(h) / a + 2 : 1)), t.setProps(o + r, "setTouch"))))
                    }
                }, !1), p.addEventListener("MSGestureEnd", function(e) {
                    e.stopPropagation();
                    var t, n = e.target._slider;
                    n && (n.animatingTo !== n.currentSlide || u || null === r || (e = 0 < (t = v ? -r : r) ? n.getTarget("next") : n.getTarget("prev"), n.canAdvance(e) && (Number(new Date) - l < 550 && 50 < Math.abs(t) || Math.abs(t) > a / 2) ? n.flexAnimate(e, n.vars.pauseOnAction) : y || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)), o = r = s = i = null, h = 0)
                }, !1)) : (e = function(e) {
                    f.animating ? e.preventDefault() : !window.navigator.msPointerEnabled && 1 !== e.touches.length || (f.pause(), a = g ? f.h : f.w, l = Number(new Date), t = e.touches[0].pageX, n = e.touches[0].pageY, o = b && v && f.animatingTo === f.last ? 0 : b && v ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : b && f.currentSlide === f.last ? f.limit : b ? (f.itemW + f.vars.itemMargin) * f.move * f.currentSlide : v ? (f.last - f.currentSlide + f.cloneOffset) * a : (f.currentSlide + f.cloneOffset) * a, i = g ? n : t, s = g ? t : n, p.addEventListener("touchmove", c, !1), p.addEventListener("touchend", d, !1))
                }, c = function(e) {
                    t = e.touches[0].pageX, n = e.touches[0].pageY, r = g ? i - n : i - t, (!(u = g ? Math.abs(r) < Math.abs(t - s) : Math.abs(r) < Math.abs(n - s)) || 500 < Number(new Date) - l) && (e.preventDefault(), !y && f.transitions && (f.vars.animationLoop || (r /= 0 === f.currentSlide && r < 0 || f.currentSlide === f.last && 0 < r ? Math.abs(r) / a + 2 : 1), f.setProps(o + r, "setTouch")))
                }, d = function(e) {
                    var t, n;
                    p.removeEventListener("touchmove", c, !1), f.animatingTo !== f.currentSlide || u || null === r || (n = 0 < (t = v ? -r : r) ? f.getTarget("next") : f.getTarget("prev"), f.canAdvance(n) && (Number(new Date) - l < 550 && 50 < Math.abs(t) || Math.abs(t) > a / 2) ? f.flexAnimate(n, f.vars.pauseOnAction) : y || f.flexAnimate(f.currentSlide, f.vars.pauseOnAction, !0)), p.removeEventListener("touchend", d, !1), o = r = s = i = null
                }, p.addEventListener("touchstart", e, !1))
            },
            resize: function() {
                !f.animating && f.is(":visible") && (b || f.doMath(), y ? u.smoothHeight() : b ? (f.slides.width(f.computedW), f.update(f.pagingCount), f.setProps()) : g ? (f.viewport.height(f.h), f.setProps(f.h, "setTotal")) : (f.vars.smoothHeight && u.smoothHeight(), f.newSlides.width(f.computedW), f.setProps(f.computedW, "setTotal")))
            },
            smoothHeight: function(e) {
                var t;
                g && !y || (t = y ? f : f.viewport, e ? t.animate({
                    height: f.slides.eq(f.animatingTo).innerHeight()
                }, e) : t.innerHeight(f.slides.eq(f.animatingTo).innerHeight()))
            },
            sync: function(e) {
                var t = h(f.vars.sync).data("flexslider"),
                    n = f.animatingTo;
                switch (e) {
                    case "animate":
                        t.flexAnimate(n, f.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        t.playing || t.asNav || t.play();
                        break;
                    case "pause":
                        t.pause()
                }
            },
            uniqueID: function(e) {
                return e.filter("[id]").add(e.find("[id]")).each(function() {
                    var e = h(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = u.pauseInvisible.getHiddenProp();
                    e && (e = e.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(e, function() {
                        u.pauseInvisible.isHidden() ? f.startTimeout ? clearTimeout(f.startTimeout) : f.pause() : !f.started && 0 < f.vars.initDelay ? setTimeout(f.play, f.vars.initDelay) : f.play()
                    }))
                },
                isHidden: function() {
                    var e = u.pauseInvisible.getHiddenProp();
                    return !!e && document[e]
                },
                getHiddenProp: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(t), t = setTimeout(function() {
                    c = ""
                }, 3e3)
            }
        }, f.flexAnimate = function(e, t, n, i, s) {
            if (f.vars.animationLoop || e === f.currentSlide || (f.direction = e > f.currentSlide ? "next" : "prev"), d && 1 === f.pagingCount && (f.direction = f.currentItem < e ? "next" : "prev"), !f.animating && (f.canAdvance(e, s) || n) && f.is(":visible")) {
                if (d && i) {
                    i = h(f.vars.asNavFor).data("flexslider");
                    if (f.atEnd = 0 === e || e === f.count - 1, i.flexAnimate(e, !0, !1, !0, s), f.direction = f.currentItem < e ? "next" : "prev", i.direction = f.direction, Math.ceil((e + 1) / f.visible) - 1 === f.currentSlide || 0 === e) return f.currentItem = e, f.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), !1;
                    f.currentItem = e, f.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), e = Math.floor(e / f.visible)
                }
                var o;
                f.animating = !0, f.animatingTo = e, t && f.pause(), f.vars.before(f), f.syncExists && !s && u.sync("animate"), f.vars.controlNav && u.controlNav.active(), b || f.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), f.atEnd = 0 === e || e === f.last, f.vars.directionNav && u.directionNav.update(), e === f.last && (f.vars.end(f), f.vars.animationLoop || f.pause()), y ? a ? (f.slides.eq(f.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), f.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), f.wrapup(o)) : (f.slides.eq(f.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, f.vars.animationSpeed, f.vars.easing), f.slides.eq(e).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, f.vars.animationSpeed, f.vars.easing, f.wrapup)) : (o = g ? f.slides.filter(":first").height() : f.computedW, e = b ? (s = f.vars.itemMargin, (s = (f.itemW + s) * f.move * f.animatingTo) > f.limit && 1 !== f.visible ? f.limit : s) : 0 === f.currentSlide && e === f.count - 1 && f.vars.animationLoop && "next" !== f.direction ? v ? (f.count + f.cloneOffset) * o : 0 : f.currentSlide === f.last && 0 === e && f.vars.animationLoop && "prev" !== f.direction ? v ? 0 : (f.count + 1) * o : v ? (f.count - 1 - e + f.cloneOffset) * o : (e + f.cloneOffset) * o, f.setProps(e, "", f.vars.animationSpeed), f.transitions ? (f.vars.animationLoop && f.atEnd || (f.animating = !1, f.currentSlide = f.animatingTo), f.container.unbind("webkitTransitionEnd transitionend"), f.container.bind("webkitTransitionEnd transitionend", function() {
                    clearTimeout(f.ensureAnimationEnd), f.wrapup(o)
                }), clearTimeout(f.ensureAnimationEnd), f.ensureAnimationEnd = setTimeout(function() {
                    f.wrapup(o)
                }, f.vars.animationSpeed + 100)) : f.container.animate(f.args, f.vars.animationSpeed, f.vars.easing, function() {
                    f.wrapup(o)
                })), f.vars.smoothHeight && u.smoothHeight(f.vars.animationSpeed)
            }
        }, f.wrapup = function(e) {
            y || b || (0 === f.currentSlide && f.animatingTo === f.last && f.vars.animationLoop ? f.setProps(e, "jumpEnd") : f.currentSlide === f.last && 0 === f.animatingTo && f.vars.animationLoop && f.setProps(e, "jumpStart")), f.animating = !1, f.currentSlide = f.animatingTo, f.vars.after(f)
        }, f.animateSlides = function() {
            !f.animating && n && f.flexAnimate(f.getTarget("next"))
        }, f.pause = function() {
            clearInterval(f.animatedSlides), f.animatedSlides = null, f.playing = !1, f.vars.pausePlay && u.pausePlay.update("play"), f.syncExists && u.sync("pause")
        }, f.play = function() {
            f.playing && clearInterval(f.animatedSlides), f.animatedSlides = f.animatedSlides || setInterval(f.animateSlides, f.vars.slideshowSpeed), f.started = f.playing = !0, f.vars.pausePlay && u.pausePlay.update("pause"), f.syncExists && u.sync("play")
        }, f.stop = function() {
            f.pause(), f.stopped = !0
        }, f.canAdvance = function(e, t) {
            var n = d ? f.pagingCount - 1 : f.last;
            return !(!t && (!d || f.currentItem !== f.count - 1 || 0 !== e || "prev" !== f.direction) && (d && 0 === f.currentItem && e === f.pagingCount - 1 && "next" !== f.direction || e === f.currentSlide && !d || !f.vars.animationLoop && (f.atEnd && 0 === f.currentSlide && e === n && "next" !== f.direction || f.atEnd && f.currentSlide === n && 0 === e && "next" === f.direction)))
        }, f.getTarget = function(e) {
            return "next" === (f.direction = e) ? f.currentSlide === f.last ? 0 : f.currentSlide + 1 : 0 === f.currentSlide ? f.last : f.currentSlide - 1
        }, f.setProps = function(e, t, n) {
            var i, s = (i = e || (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo, -1 * function() {
                if (b) return "setTouch" === t ? e : v && f.animatingTo === f.last ? 0 : v ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : f.animatingTo === f.last ? f.limit : i;
                switch (t) {
                    case "setTotal":
                        return v ? (f.count - 1 - f.currentSlide + f.cloneOffset) * e : (f.currentSlide + f.cloneOffset) * e;
                    case "setTouch":
                        return e;
                    case "jumpEnd":
                        return v ? e : f.count * e;
                    case "jumpStart":
                        return v ? f.count * e : e;
                    default:
                        return e
                }
            }() + "px");
            f.transitions && (s = g ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", f.container.css("-" + f.pfx + "-transition-duration", n), f.container.css("transition-duration", n)), f.args[f.prop] = s, !f.transitions && void 0 !== n || f.container.css(f.args), f.container.css("transform", s)
        }, f.setup = function(e) {
            var t, n;
            y ? (f.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (a ? f.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + f.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(f.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == f.vars.fadeFirstSlide ? f.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(f.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : f.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(f.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, f.vars.animationSpeed, f.vars.easing)), f.vars.smoothHeight && u.smoothHeight()) : ("init" === e && (f.viewport = h('<div class="' + r + 'viewport"></div>').css({
                overflow: "hidden",
                position: "relative"
            }).appendTo(f).append(f.container), f.cloneCount = 0, f.cloneOffset = 0, v && (n = h.makeArray(f.slides).reverse(), f.slides = h(n), f.container.empty().append(f.slides))), f.vars.animationLoop && !b && (f.cloneCount = 2, f.cloneOffset = 1, "init" !== e && f.container.find(".clone").remove(), f.container.append(u.uniqueID(f.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(u.uniqueID(f.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), f.newSlides = h(f.vars.selector, f), t = v ? f.count - 1 - f.currentSlide + f.cloneOffset : f.currentSlide + f.cloneOffset, g && !b ? (f.container.height(200 * (f.count + f.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                f.newSlides.css({
                    display: "block"
                }), f.doMath(), f.viewport.height(f.h), f.setProps(t * f.h, "init")
            }, "init" === e ? 100 : 0)) : (f.container.width(200 * (f.count + f.cloneCount) + "%"), f.setProps(t * f.computedW, "init"), setTimeout(function() {
                f.doMath(), f.newSlides.css({
                    width: f.computedW,
                    marginRight: f.computedM,
                    float: "left",
                    display: "block"
                }), f.vars.smoothHeight && u.smoothHeight()
            }, "init" === e ? 100 : 0))), b || f.slides.removeClass(r + "active-slide").eq(f.currentSlide).addClass(r + "active-slide"), f.vars.init(f)
        }, f.doMath = function() {
            var e = f.slides.first(),
                t = f.vars.itemMargin,
                n = f.vars.minItems,
                i = f.vars.maxItems;
            f.w = (void 0 === f.viewport ? f : f.viewport).width(), f.h = e.height(), f.boxPadding = e.outerWidth() - e.width(), b ? (f.itemT = f.vars.itemWidth + t, f.itemM = t, f.minW = n ? n * f.itemT : f.w, f.maxW = i ? i * f.itemT - t : f.w, f.itemW = f.minW > f.w ? (f.w - t * (n - 1)) / n : f.maxW < f.w ? (f.w - t * (i - 1)) / i : f.vars.itemWidth > f.w ? f.w : f.vars.itemWidth, f.visible = Math.floor(f.w / f.itemW), f.move = 0 < f.vars.move && f.vars.move < f.visible ? f.vars.move : f.visible, f.pagingCount = Math.ceil((f.count - f.visible) / f.move + 1), f.last = f.pagingCount - 1, f.limit = 1 === f.pagingCount ? 0 : f.vars.itemWidth > f.w ? f.itemW * (f.count - 1) + t * (f.count - 1) : (f.itemW + t) * f.count - f.w - t) : (f.itemW = f.w, f.itemM = t, f.pagingCount = f.count, f.last = f.count - 1), f.computedW = f.itemW - f.boxPadding, f.computedM = f.itemM
        }, f.update = function(e, t) {
            f.doMath(), b || (e < f.currentSlide ? f.currentSlide += 1 : e <= f.currentSlide && 0 !== e && --f.currentSlide, f.animatingTo = f.currentSlide), f.vars.controlNav && !f.manualControls && ("add" === t && !b || f.pagingCount > f.controlNav.length ? u.controlNav.update("add") : ("remove" === t && !b || f.pagingCount < f.controlNav.length) && (b && f.currentSlide > f.last && (--f.currentSlide, --f.animatingTo), u.controlNav.update("remove", f.last))), f.vars.directionNav && u.directionNav.update()
        }, f.addSlide = function(e, t) {
            e = h(e);
            f.count += 1, f.last = f.count - 1, g && v ? void 0 !== t ? f.slides.eq(f.count - t).after(e) : f.container.prepend(e) : void 0 !== t ? f.slides.eq(t).before(e) : f.container.append(e), f.update(t, "add"), f.slides = h(f.vars.selector + ":not(.clone)", f), f.setup(), f.vars.added(f)
        }, f.removeSlide = function(e) {
            var t = isNaN(e) ? f.slides.index(h(e)) : e;
            --f.count, f.last = f.count - 1, (isNaN(e) ? h(e, f.slides) : g && v ? f.slides.eq(f.last) : f.slides.eq(e)).remove(), f.doMath(), f.update(t, "remove"), f.slides = h(f.vars.selector + ":not(.clone)", f), f.setup(), f.vars.removed(f)
        }, u.init()
    }, h(window).blur(function(e) {
        n = !1
    }).focus(function(e) {
        n = !0
    }), h.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, h.fn.flexslider = function(n) {
        if (void 0 === n && (n = {}), "object" == typeof n) return this.each(function() {
            var e = h(this),
                t = n.selector || ".slides > li",
                t = e.find(t);
            1 === t.length && !1 === n.allowOneSlide || 0 === t.length ? (t.fadeIn(400), n.start && n.start(e)) : void 0 === e.data("flexslider") && new h.flexslider(this, n)
        });
        var e = h(this).data("flexslider");
        switch (n) {
            case "play":
                e.play();
                break;
            case "pause":
                e.pause();
                break;
            case "stop":
                e.stop();
                break;
            case "next":
                e.flexAnimate(e.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                e.flexAnimate(e.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof n && e.flexAnimate(n, !0)
        }
    }
}(jQuery),
function(o) {
    (function() {
        if ("undefined" != typeof module && module.exports) return function(e) {
            module.exports = e()
        };
        if ("function" == typeof define && define.amd) return define;
        if ("undefined" != typeof window) return function(e) {
            window.MobileDetect = e()
        };
        throw new Error("unknown environment")
    })()(function() {
        "use strict";

        function t(e, t) {
            return null != e && null != t && e.toLowerCase() === t.toLowerCase()
        }

        function n(e, t) {
            var n, i, s = e.length;
            if (!s || !t) return !1;
            for (n = t.toLowerCase(), i = 0; i < s; ++i)
                if (n === e[i].toLowerCase()) return !0;
            return !1
        }

        function r(e) {
            for (var t in e) d.call(e, t) && (e[t] = new RegExp(e[t], "i"))
        }

        function s(e, t) {
            this.ua = e || "", this._cache = {}, this.maxPhoneWidth = t || 600
        }
        var l, c = {
                mobileDetectRules: {
                    phones: {
                        iPhone: "\\biPhone\\b|\\biPod\\b",
                        BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                        HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                        Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                        Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                        Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                        Samsung: "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350",
                        LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                        Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                        Asus: "Asus.*Galaxy|PadFone.*Mobile",
                        Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                        Palm: "PalmSource|Palm",
                        Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                        Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                        Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                        Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                        iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                        SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                        Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                        Alcatel: "Alcatel",
                        Nintendo: "Nintendo 3DS",
                        Amoi: "Amoi",
                        INQ: "INQ",
                        GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                    },
                    tablets: {
                        iPad: "iPad|iPad.*Mobile",
                        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                        SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561",
                        Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",
                        SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                        HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                        AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C",
                        BlackBerryTablet: "PlayBook|RIM Tablet",
                        HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                        MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                        NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                        AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",
                        ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                        LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                        FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                        PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                        LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                        DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                        YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                        MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                        ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                        IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                        IRUTablet: "M702pro",
                        MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                        EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                        AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                        ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                        AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                        SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                        PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                        CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                        CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                        MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                        MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                        SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                        RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                        FlyTablet: "IQ310|Fly Vision",
                        bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
                        HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                        NecTablet: "\\bN-06D|\\bN-08D",
                        PantechTablet: "Pantech.*P4100",
                        BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                        VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                        ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                        PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                        NabiTablet: "Android.*\\bNabi",
                        KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                        DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                        TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                        PlaystationTablet: "Playstation.*(Portable|Vita)",
                        TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                        PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                        AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                        DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                        GalapadTablet: "Android.*\\bG1\\b",
                        MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                        KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                        AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                        PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                        YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                        ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                        GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                        PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                        OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                        HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                        DPSTablet: "DPS Dream 9|DPS Dual 7",
                        VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                        CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                        MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                        ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                        GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                        ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                        VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                        ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                        StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                        VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
                        EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                        RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                        iMobileTablet: "i-mobile i-note",
                        TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                        AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                        AMPETablet: "Android.* A78 ",
                        SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                        TecnoTablet: "TECNO P9",
                        JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                        iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                        FX2Tablet: "FX2 PAD7|FX2 PAD10",
                        XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                        ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                        OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                        CaptivaTablet: "CAPTIVA PAD",
                        IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                        TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                        OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                        JaytechTablet: "TPC-PA762",
                        BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                        DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                        EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                        LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                        AocTablet: "MW0811|MW0812|MW0922|MTK8382",
                        MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                        CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                        WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                        NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                        NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                        LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                        UbislateTablet: "UbiSlate[\\s]?7C",
                        PocketBookTablet: "Pocketbook",
                        Hudl: "Hudl HT7S3|Hudl 2",
                        TelstraTablet: "T-Hub2",
                        GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"
                    },
                    oss: {
                        AndroidOS: "Android",
                        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                        WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                        WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                        MeeGoOS: "MeeGo",
                        MaemoOS: "Maemo",
                        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                        webOS: "webOS|hpwOS",
                        badaOS: "\\bBada\\b",
                        BREWOS: "BREW"
                    },
                    uas: {
                        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                        Dolfin: "\\bDolfin\\b",
                        Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                        Skyfire: "Skyfire",
                        IE: "IEMobile|MSIEMobile",
                        Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                        Bolt: "bolt",
                        TeaShark: "teashark",
                        Blazer: "Blazer",
                        Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                        Tizen: "Tizen",
                        UCBrowser: "UC.*Browser|UCWEB",
                        baiduboxapp: "baiduboxapp",
                        baidubrowser: "baidubrowser",
                        DiigoBrowser: "DiigoBrowser",
                        Puffin: "Puffin",
                        Mercury: "\\bMercury\\b",
                        ObigoBrowser: "Obigo",
                        NetFront: "NF-Browser",
                        GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
                    },
                    props: {
                        Mobile: "Mobile/[VER]",
                        Build: "Build/[VER]",
                        Version: "Version/[VER]",
                        VendorID: "VendorID/[VER]",
                        iPad: "iPad.*CPU[a-z ]+[VER]",
                        iPhone: "iPhone.*CPU[a-z ]+[VER]",
                        iPod: "iPod.*CPU[a-z ]+[VER]",
                        Kindle: "Kindle/[VER]",
                        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                        Coast: ["Coast/[VER]"],
                        Dolfin: "Dolfin/[VER]",
                        Firefox: "Firefox/[VER]",
                        Fennec: "Fennec/[VER]",
                        IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                        NetFront: "NetFront/[VER]",
                        NokiaBrowser: "NokiaBrowser/[VER]",
                        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                        "Opera Mini": "Opera Mini/[VER]",
                        "Opera Mobi": "Version/[VER]",
                        "UC Browser": "UC Browser[VER]",
                        MQQBrowser: "MQQBrowser/[VER]",
                        MicroMessenger: "MicroMessenger/[VER]",
                        baiduboxapp: "baiduboxapp/[VER]",
                        baidubrowser: "baidubrowser/[VER]",
                        Iron: "Iron/[VER]",
                        Safari: ["Version/[VER]", "Safari/[VER]"],
                        Skyfire: "Skyfire/[VER]",
                        Tizen: "Tizen/[VER]",
                        Webkit: "webkit[ /][VER]",
                        Gecko: "Gecko/[VER]",
                        Trident: "Trident/[VER]",
                        Presto: "Presto/[VER]",
                        iOS: " \\bi?OS\\b [VER][ ;]{1}",
                        Android: "Android [VER]",
                        BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                        BREW: "BREW [VER]",
                        Java: "Java/[VER]",
                        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                        "Windows Phone": "Windows Phone [VER]",
                        "Windows CE": "Windows CE/[VER]",
                        "Windows NT": "Windows NT [VER]",
                        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                        webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                    },
                    utils: {
                        Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                        MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                        DesktopMode: "WPDesktop",
                        TV: "SonyDTV|HbbTV",
                        WebKit: "(webkit)[ /]([\\w.]+)",
                        Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                        Watch: "SM-V700"
                    }
                },
                detectMobileBrowsers: {
                    fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    tabletPattern: /android|ipad|playbook|silk/i
                }
            },
            d = Object.prototype.hasOwnProperty;
        return c.FALLBACK_PHONE = "UnknownPhone", c.FALLBACK_TABLET = "UnknownTablet", c.FALLBACK_MOBILE = "UnknownMobile", l = "isArray" in Array ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            function() {
                var e, t, n, i, s, o, a = c.mobileDetectRules;
                for (e in a.props)
                    if (d.call(a.props, e)) {
                        for (t = a.props[e], l(t) || (t = [t]), s = t.length, i = 0; i < s; ++i) 0 <= (o = (n = t[i]).indexOf("[VER]")) && (n = n.substring(0, o) + "([\\w._\\+]+)" + n.substring(o + 5)), t[i] = new RegExp(n, "i");
                        a.props[e] = t
                    } r(a.oss), r(a.phones), r(a.tablets), r(a.uas), r(a.utils), a.oss0 = {
                    WindowsPhoneOS: a.oss.WindowsPhoneOS,
                    WindowsMobileOS: a.oss.WindowsMobileOS
                }
            }(), c.findMatch = function(e, t) {
                for (var n in e)
                    if (d.call(e, n) && e[n].test(t)) return n;
                return null
            }, c.findMatches = function(e, t) {
                var n, i = [];
                for (n in e) d.call(e, n) && e[n].test(t) && i.push(n);
                return i
            }, c.getVersionStr = function(e, t) {
                var n, i, s, o, a = c.mobileDetectRules.props;
                if (d.call(a, e))
                    for (s = (n = a[e]).length, i = 0; i < s; ++i)
                        if (null !== (o = n[i].exec(t))) return o[1];
                return null
            }, c.getVersion = function(e, t) {
                t = c.getVersionStr(e, t);
                return t ? c.prepareVersionNo(t) : NaN
            }, c.prepareVersionNo = function(e) {
                var t;
                return 1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]), 1 < t.length && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
            }, c.isMobileFallback = function(e) {
                return c.detectMobileBrowsers.fullPattern.test(e) || c.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
            }, c.isTabletFallback = function(e) {
                return c.detectMobileBrowsers.tabletPattern.test(e)
            }, c.prepareDetectionCache = function(e, t, n) {
                var i;
                if (e.mobile === o) return (i = c.findMatch(c.mobileDetectRules.tablets, t)) ? (e.mobile = e.tablet = i, void(e.phone = null)) : (i = c.findMatch(c.mobileDetectRules.phones, t)) ? (e.mobile = e.phone = i, void(e.tablet = null)) : void(c.isMobileFallback(t) ? (n = s.isPhoneSized(n)) === o ? (e.mobile = c.FALLBACK_MOBILE, e.tablet = e.phone = null) : n ? (e.mobile = e.phone = c.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = c.FALLBACK_TABLET, e.phone = null) : c.isTabletFallback(t) ? (e.mobile = e.tablet = c.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
            }, c.mobileGrade = function(e) {
                var t = null !== e.mobile();
                return e.os("iOS") && 4.3 <= e.version("iPad") || e.os("iOS") && 3.1 <= e.version("iPhone") || e.os("iOS") && 3.1 <= e.version("iPod") || 2.1 < e.version("Android") && e.is("Webkit") || 7 <= e.version("Windows Phone OS") || e.is("BlackBerry") && 6 <= e.version("BlackBerry") || e.match("Playbook.*Tablet") || 1.4 <= e.version("webOS") && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && 12 <= e.version("Firefox") || e.is("Chrome") && e.is("AndroidOS") && 4 <= e.version("Android") || e.is("Skyfire") && 4.1 <= e.version("Skyfire") && e.is("AndroidOS") && 2.3 <= e.version("Android") || e.is("Opera") && 11 < e.version("Opera Mobi") && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && 2 <= e.version("Bada") || (e.is("UC Browser") || e.is("Dolfin")) && 2.3 <= e.version("Android") || e.match("Kindle Fire") || e.is("Kindle") && 3 <= e.version("Kindle") || e.is("AndroidOS") && e.is("NookTablet") || 11 <= e.version("Chrome") && !t || 5 <= e.version("Safari") && !t || 4 <= e.version("Firefox") && !t || 7 <= e.version("MSIE") && !t || 10 <= e.version("Opera") && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && 5 <= e.version("BlackBerry") && e.version("BlackBerry") < 6 || 5 <= e.version("Opera Mini") && e.version("Opera Mini") <= 6.5 && (2.3 <= e.version("Android") || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || 11 <= e.version("Opera Mobi") && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C")
            }, c.detectOS = function(e) {
                return c.findMatch(c.mobileDetectRules.oss0, e) || c.findMatch(c.mobileDetectRules.oss, e)
            }, c.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }, s.prototype = {
                constructor: s,
                mobile: function() {
                    return c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                },
                phone: function() {
                    return c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                },
                tablet: function() {
                    return c.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                },
                userAgent: function() {
                    return this._cache.userAgent === o && (this._cache.userAgent = c.findMatch(c.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                },
                userAgents: function() {
                    return this._cache.userAgents === o && (this._cache.userAgents = c.findMatches(c.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                },
                os: function() {
                    return this._cache.os === o && (this._cache.os = c.detectOS(this.ua)), this._cache.os
                },
                version: function(e) {
                    return c.getVersion(e, this.ua)
                },
                versionStr: function(e) {
                    return c.getVersionStr(e, this.ua)
                },
                is: function(e) {
                    return n(this.userAgents(), e) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || n(c.findMatches(c.mobileDetectRules.utils, this.ua), e)
                },
                match: function(e) {
                    return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                },
                isPhoneSized: function(e) {
                    return s.isPhoneSized(e || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    return this._cache.grade === o && (this._cache.grade = c.mobileGrade(this)), this._cache.grade
                }
            }, s.isPhoneSized = "undefined" != typeof window && window.screen ? function(e) {
                return e < 0 ? o : c.getDeviceSmallerSide() <= e
            } : function() {}, s._impl = c, s
    })
}(),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.jquery_mmenu_all_js = t(e.jQuery)
}(this, function(e) {
    return (st = e)[dt = "mmenu"] && "6.1.0" < st[dt].version || (st[dt] = function(e, t, n) {
            return this.$menu = e, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this
        }, st[dt].version = "6.1.0", st[dt].addons = {}, st[dt].uniqueId = 0, st[dt].defaults = {
            extensions: [],
            initMenu: function() {},
            initPanels: function() {},
            navbar: {
                add: !0,
                title: "Menu",
                titleLink: "parent"
            },
            onClick: {
                setSelected: !0
            },
            slidingSubmenus: !0
        }, st[dt].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                nolistview: "NoListview",
                nopanel: "NoPanel",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            },
            clone: !1,
            openingInterval: 25,
            panelNodetype: "ul, ol, div",
            transitionDuration: 400
        }, st[dt].prototype = {
            getInstance: function() {
                return this
            },
            initPanels: function(e) {
                this._initPanels(e)
            },
            openPanel: function(e, t) {
                if (this.trigger("openPanel:before", e), e && e.length && (e.is("." + ot.panel) || (e = e.closest("." + ot.panel)), e.is("." + ot.panel))) {
                    var n = this;
                    if ("boolean" != typeof t && (t = !0), e.hasClass(ot.vertical)) e.add(e.parents("." + ot.vertical)).removeClass(ot.hidden).parent("li").addClass(ot.opened), this.openPanel(e.parents("." + ot.panel).not("." + ot.vertical).first()), this.trigger("openPanel:start", e), this.trigger("openPanel:finish", e);
                    else {
                        if (e.hasClass(ot.opened)) return;
                        var i = this.$pnls.children("." + ot.panel),
                            s = i.filter("." + ot.opened);
                        if (!st[dt].support.csstransitions) return s.addClass(ot.hidden).removeClass(ot.opened), e.removeClass(ot.hidden).addClass(ot.opened), this.trigger("openPanel:start", e), void this.trigger("openPanel:finish", e);
                        i.not(e).removeClass(ot.subopened);
                        for (var o = e.data(at.parent); o;)(o = o.closest("." + ot.panel)).is("." + ot.vertical) || o.addClass(ot.subopened), o = o.data(at.parent);
                        i.removeClass(ot.highest).not(s).not(e).addClass(ot.hidden), e.removeClass(ot.hidden);

                        function a() {
                            s.removeClass(ot.opened), e.addClass(ot.opened), e.hasClass(ot.subopened) ? (s.addClass(ot.highest), e.removeClass(ot.subopened)) : (s.addClass(ot.subopened), e.addClass(ot.highest)), this.trigger("openPanel:start", e)
                        }

                        function r() {
                            s.removeClass(ot.highest).addClass(ot.hidden), e.removeClass(ot.highest), this.trigger("openPanel:finish", e)
                        }
                        t && !e.hasClass(ot.noanimation) ? setTimeout(function() {
                            n.__transitionend(e, function() {
                                r.call(n)
                            }, n.conf.transitionDuration), a.call(n)
                        }, this.conf.openingInterval) : (a.call(this), r.call(this))
                    }
                    this.trigger("openPanel:after", e)
                }
            },
            closePanel: function(e) {
                this.trigger("closePanel:before", e);
                var t = e.parent();
                t.hasClass(ot.vertical) && (t.removeClass(ot.opened), this.trigger("closePanel", e)), this.trigger("closePanel:after", e)
            },
            closeAllPanels: function() {
                this.trigger("closeAllPanels:before"), this.$pnls.find("." + ot.listview).children().removeClass(ot.selected).filter("." + ot.vertical).removeClass(ot.opened);
                var e = this.$pnls.children("." + ot.panel).first();
                this.$pnls.children("." + ot.panel).not(e).removeClass(ot.subopened).removeClass(ot.opened).removeClass(ot.highest).addClass(ot.hidden), this.openPanel(e), this.trigger("closeAllPanels:after")
            },
            togglePanel: function(e) {
                var t = e.parent();
                t.hasClass(ot.vertical) && this[t.hasClass(ot.opened) ? "closePanel" : "openPanel"](e)
            },
            setSelected: function(e) {
                this.trigger("setSelected:before", e), this.$menu.find("." + ot.listview).children("." + ot.selected).removeClass(ot.selected), e.addClass(ot.selected), this.trigger("setSelected:after", e)
            },
            bind: function(e, t) {
                this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
            },
            trigger: function() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                if (this.cbck[t])
                    for (var n = 0, i = this.cbck[t].length; n < i; n++) this.cbck[t][n].apply(this, e)
            },
            matchMedia: function(e, t, n) {
                n = {
                    yes: t,
                    no: n
                };
                this.mtch[e] = this.mtch[e] || [], this.mtch[e].push(n)
            },
            _initAddons: function() {
                for (var e in this.trigger("initAddons:before"), st[dt].addons) st[dt].addons[e].add.call(this), st[dt].addons[e].add = function() {};
                for (e in st[dt].addons) st[dt].addons[e].setup.call(this);
                this.trigger("initAddons:after")
            },
            _initExtensions: function() {
                this.trigger("initExtensions:before");
                var e, t = this;
                for (e in this.opts.extensions.constructor === Array && (this.opts.extensions = {
                        all: this.opts.extensions
                    }), this.opts.extensions) this.opts.extensions[e] = this.opts.extensions[e].length ? "mm-" + this.opts.extensions[e].join(" mm-") : "", this.opts.extensions[e] && function(e) {
                    t.matchMedia(e, function() {
                        this.$menu.addClass(this.opts.extensions[e])
                    }, function() {
                        this.$menu.removeClass(this.opts.extensions[e])
                    })
                }(e);
                this.trigger("initExtensions:after")
            },
            _initMenu: function() {
                this.trigger("initMenu:before"), this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                    st(this).attr("id", ot.mm(st(this).attr("id")))
                })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = st('<div class="' + ot.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);
                var e = [ot.menu];
                this.opts.slidingSubmenus || e.push(ot.vertical), this.$menu.addClass(e.join(" ")).parent().addClass(ot.wrapper), this.trigger("initMenu:after")
            },
            _initPanels: function(e) {
                this.trigger("initPanels:before", e), e = e || this.$pnls.children(this.conf.panelNodetype);
                var t = st(),
                    n = this,
                    i = function(e) {
                        e.filter(this.conf.panelNodetype).each(function() {
                            var e = n._initPanel(st(this));
                            e && (n._initNavbar(e), n._initListview(e), t = t.add(e), (e = e.children("." + ot.listview).children("li").children(n.conf.panelNodeType).add(e.children("." + n.conf.classNames.panel))).length && i.call(n, e))
                        })
                    };
                i.call(this, e), this.opts.initPanels.call(this, t), this.trigger("initPanels:after", t)
            },
            _initPanel: function(e) {
                if (this.trigger("initPanel:before", e), this.__refactorClass(e, this.conf.classNames.panel, "panel"), this.__refactorClass(e, this.conf.classNames.nopanel, "nopanel"), this.__refactorClass(e, this.conf.classNames.vertical, "vertical"), this.__refactorClass(e, this.conf.classNames.inset, "inset"), e.filter("." + ot.inset).addClass(ot.nopanel), e.hasClass(ot.nopanel)) return !1;
                if (e.hasClass(ot.panel)) return e;
                var t = e.hasClass(ot.vertical) || !this.opts.slidingSubmenus;
                e.removeClass(ot.vertical);
                var n = e.attr("id") || this.__getUniqueId();
                e.removeAttr("id"), e.is("ul, ol") && (e.wrap("<div />"), e = e.parent()), e.addClass(ot.panel + " " + ot.hidden).attr("id", n);
                n = e.parent("li");
                return t ? e.add(n).addClass(ot.vertical) : e.appendTo(this.$pnls), n.length && (n.data(at.child, e), e.data(at.parent, n)), this.trigger("initPanel:after", e), e
            },
            _initNavbar: function(e) {
                if (this.trigger("initNavbar:before", e), !e.children("." + ot.navbar).length) {
                    var t = e.data(at.parent),
                        n = st('<div class="' + ot.navbar + '" />'),
                        i = st[dt].i18n(this.opts.navbar.title),
                        s = "";
                    if (t && t.length) {
                        if (t.hasClass(ot.vertical)) return;
                        var o = t.parent().is("." + ot.listview) ? t.children("a, span").not("." + ot.next) : t.closest("." + ot.panel).find('a[href="#' + e.attr("id") + '"]'),
                            a = (t = (o = o.first()).closest("." + ot.panel)).attr("id"),
                            i = o.text();
                        switch (this.opts.navbar.titleLink) {
                            case "anchor":
                                s = o.attr("href");
                                break;
                            case "parent":
                                s = "#" + a
                        }
                        n.append('<a class="' + ot.btn + " " + ot.prev + '" href="#' + a + '" />')
                    } else if (!this.opts.navbar.title) return;
                    this.opts.navbar.add && e.addClass(ot.hasnavbar), n.append('<a class="' + ot.title + '"' + (s.length ? ' href="' + s + '"' : "") + ">" + i + "</a>").prependTo(e), this.trigger("initNavbar:after", e)
                }
            },
            _initListview: function(e) {
                this.trigger("initListview:before", e);
                var t = this.__childAddBack(e, "ul, ol");
                this.__refactorClass(t, this.conf.classNames.nolistview, "nolistview"), t.filter("." + this.conf.classNames.inset).addClass(ot.nolistview);
                var n = t.not("." + ot.nolistview).addClass(ot.listview).children();
                this.__refactorClass(n, this.conf.classNames.selected, "selected"), this.__refactorClass(n, this.conf.classNames.divider, "divider"), this.__refactorClass(n, this.conf.classNames.spacer, "spacer");
                t = e.data(at.parent);
                t && t.parent().is("." + ot.listview) && !t.children("." + ot.next).length && (n = t.children("a, span").first(), t = st('<a class="' + ot.next + '" href="#' + e.attr("id") + '" />').insertBefore(n), n.is("span") && t.addClass(ot.fullsubopen)), this.trigger("initListview:after", e)
            },
            _initOpened: function() {
                this.trigger("initOpened:before");
                var e = this.$pnls.find("." + ot.listview).children("." + ot.selected).removeClass(ot.selected).last().addClass(ot.selected),
                    e = e.length ? e.closest("." + ot.panel) : this.$pnls.children("." + ot.panel).first();
                this.openPanel(e, !1), this.trigger("initOpened:after")
            },
            _initAnchors: function() {
                var l = this;
                lt.$body.on(rt.click + "-oncanvas", "a[href]", function(e) {
                    var t, n = st(this),
                        i = !1,
                        s = l.$menu.find(n).length;
                    for (t in st[dt].addons)
                        if (st[dt].addons[t].clickAnchor.call(l, n, s)) {
                            i = !0;
                            break
                        } var o, a = n.attr("href");
                    if (!i && s && 1 < a.length && "#" == a.slice(0, 1)) try {
                        var r = st(a, l.$menu);
                        r.is("." + ot.panel) && (i = !0, l[n.parent().hasClass(ot.vertical) ? "togglePanel" : "openPanel"](r))
                    } catch (e) {}
                    i && e.preventDefault(), i || !s || !n.is("." + ot.listview + " > li > a") || n.is('[rel="external"]') || n.is('[target="_blank"]') || (l.__valueOrFn(l.opts.onClick.setSelected, n) && l.setSelected(st(e.target).parent()), (o = l.__valueOrFn(l.opts.onClick.preventDefault, n, "#" == a.slice(0, 1))) && e.preventDefault(), l.__valueOrFn(l.opts.onClick.close, n, o) && l.close())
                })
            },
            _initMatchMedia: function() {
                var t = this;
                this._fireMatchMedia(), lt.$wndw.on(rt.resize, function(e) {
                    t._fireMatchMedia()
                })
            },
            _fireMatchMedia: function() {
                for (var e in this.mtch)
                    for (var t = window.matchMedia && window.matchMedia(e).matches ? "yes" : "no", n = 0; n < this.mtch[e].length; n++) this.mtch[e][n][t].call(this)
            },
            _getOriginalMenuId: function() {
                var e = this.$menu.attr("id");
                return this.conf.clone && e && e.length && (e = ot.umm(e)), e
            },
            __api: function() {
                var n = this,
                    i = {};
                return st.each(this._api, function(e) {
                    var t = this;
                    i[t] = function() {
                        var e = n[t].apply(n, arguments);
                        return void 0 === e ? i : e
                    }
                }), i
            },
            __valueOrFn: function(e, t, n) {
                return "function" == typeof e ? e.call(t[0]) : void 0 === e && void 0 !== n ? n : e
            },
            __refactorClass: function(e, t, n) {
                return e.filter("." + t).removeClass(t).addClass(ot[n])
            },
            __findAddBack: function(e, t) {
                return e.find(t).add(e.filter(t))
            },
            __childAddBack: function(e, t) {
                return e.children(t).add(e.filter(t))
            },
            __filterListItems: function(e) {
                return e.not("." + ot.divider).not("." + ot.hidden)
            },
            __filterListItemAnchors: function(e) {
                return this.__filterListItems(e).children("a").not("." + ot.next)
            },
            __transitionend: function(t, n, e) {
                function i(e) {
                    void 0 !== e && e.target != t[0] || (s || (t.unbind(rt.transitionend), t.unbind(rt.webkitTransitionEnd), n.call(t[0])), s = !0)
                }
                var s = !1;
                t.on(rt.transitionend, i), t.on(rt.webkitTransitionEnd, i), setTimeout(i, 1.1 * e)
            },
            __getUniqueId: function() {
                return ot.mm(st[dt].uniqueId++)
            }
        }, st.fn[dt] = function(t, n) {
            st[dt].glbl || (lt = {
                $wndw: st(window),
                $docu: st(document),
                $html: st("html"),
                $body: st("body")
            }, ot = {}, at = {}, rt = {}, st.each([ot, at, rt], function(e, i) {
                i.add = function(e) {
                    for (var t = 0, n = (e = e.split(" ")).length; t < n; t++) i[e[t]] = i.mm(e[t])
                }
            }), ot.mm = function(e) {
                return "mm-" + e
            }, ot.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"), ot.umm = function(e) {
                return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
            }, at.mm = function(e) {
                return "mm-" + e
            }, at.add("parent child"), rt.mm = function(e) {
                return e + ".mm"
            }, rt.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), st[dt]._c = ot, st[dt]._d = at, st[dt]._e = rt, st[dt].glbl = lt), t = st.extend(!0, {}, st[dt].defaults, t), n = st.extend(!0, {}, st[dt].configuration, n);
            var i = st();
            return this.each(function() {
                var e = st(this);
                e.data(dt) || ((e = new st[dt](e, t, n)).$menu.data(dt, e.__api()), i = i.add(e.$menu))
            }), i
        }, st[dt].i18n = (ct = {}, function(e) {
            switch (typeof e) {
                case "object":
                    return st.extend(ct, e), ct;
                case "string":
                    return ct[e] || e;
                case "undefined":
                default:
                    return ct
            }
        }), st[dt].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
            csstransitions: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransitions || Modernizr.csstransitions,
            csstransforms: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransforms || Modernizr.csstransforms,
            csstransforms3d: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransforms3d || Modernizr.csstransforms3d
        }), it = "offCanvas", (Qe = e)[nt = "mmenu"].addons[it] = {
            setup: function() {
                var i, e, n, s;
                this.opts[it] && (e = (i = this).opts[it], n = this.conf[it], tt = Qe[nt].glbl, this._api = Qe.merge(this._api, ["open", "close", "setPage"]), "object" != typeof e && (e = {}), "top" != e.position && "bottom" != e.position || (e.zposition = "front"), e = this.opts[it] = Qe.extend(!0, {}, Qe[nt].defaults[it], e), "string" != typeof n.pageSelector && (n.pageSelector = "> " + n.pageNodetype), tt.$allMenus = (tt.$allMenus || Qe()).add(this.$menu), this.vars.opened = !1, s = [Ze.offcanvas], "left" != e.position && s.push(Ze.mm(e.position)), "back" != e.zposition && s.push(Ze.mm(e.zposition)), Qe[nt].support.csstransforms || s.push(Ze["no-csstransforms"]), Qe[nt].support.csstransforms3d || s.push(Ze["no-csstransforms3d"]), this.bind("initMenu:after", function() {
                    this.setPage(tt.$page), this._initBlocker(), this["_initWindow_" + it](), this.$menu.addClass(s.join(" ")).parent("." + Ze.wrapper).removeClass(Ze.wrapper), this.$menu[n.menuInsertMethod](n.menuInsertSelector);
                    var e, t = window.location.hash;
                    !t || (e = this._getOriginalMenuId()) && e == t.slice(1) && this.open()
                }), this.bind("initExtensions:after", function() {
                    for (var t = [Ze.mm("widescreen"), Ze.mm("iconbar")], e = 0; e < t.length; e++)
                        for (var n in this.opts.extensions)
                            if (-1 < this.opts.extensions[n].indexOf(t[e])) {
                                ! function(e) {
                                    i.matchMedia(n, function() {
                                        tt.$html.addClass(t[e])
                                    }, function() {
                                        tt.$html.removeClass(t[e])
                                    })
                                }(e);
                                break
                            }
                }), this.bind("open:start:sr-aria", function() {
                    this.__sr_aria(this.$menu, "hidden", !1)
                }), this.bind("close:finish:sr-aria", function() {
                    this.__sr_aria(this.$menu, "hidden", !0)
                }), this.bind("initMenu:after:sr-aria", function() {
                    this.__sr_aria(this.$menu, "hidden", !0)
                }))
            },
            add: function() {
                Ze = Qe[nt]._c, Je = Qe[nt]._d, et = Qe[nt]._e, Ze.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), Je.add("style")
            },
            clickAnchor: function(e, t) {
                var n = this;
                if (this.opts[it]) {
                    var i = this._getOriginalMenuId();
                    if (i && e.is('[href="#' + i + '"]')) {
                        if (t) return !0;
                        var s = e.closest("." + Ze.menu);
                        if (s.length) {
                            t = s.data("mmenu");
                            if (t && t.close) return t.close(), n.__transitionend(s, function() {
                                n.open()
                            }, n.conf.transitionDuration), !0
                        }
                        return this.open(), !0
                    }
                    if (tt.$page) return (i = tt.$page.first().attr("id")) && e.is('[href="#' + i + '"]') ? (this.close(), !0) : void 0
                }
            }
        }, Qe[nt].defaults[it] = {
            position: "left",
            zposition: "back",
            blockUI: !0,
            moveBackground: !0
        }, Qe[nt].configuration[it] = {
            pageNodetype: "div",
            pageSelector: null,
            noPageSelector: [],
            wrapPageIfNeeded: !0,
            menuInsertMethod: "prependTo",
            menuInsertSelector: "body"
        }, Qe[nt].prototype.open = function() {
            var e;
            this.trigger("open:before"), this.vars.opened || ((e = this)._openSetup(), setTimeout(function() {
                e._openFinish()
            }, this.conf.openingInterval), this.trigger("open:after"))
        }, Qe[nt].prototype._openSetup = function() {
            var e = this,
                t = this.opts[it];
            this.closeAllOthers(), tt.$page.each(function() {
                Qe(this).data(Je.style, Qe(this).attr("style") || "")
            }), tt.$wndw.trigger(et.resize + "-" + it, [!0]);
            var n = [Ze.opened];
            t.blockUI && n.push(Ze.blocking), "modal" == t.blockUI && n.push(Ze.modal), t.moveBackground && n.push(Ze.background), "left" != t.position && n.push(Ze.mm(this.opts[it].position)), "back" != t.zposition && n.push(Ze.mm(this.opts[it].zposition)), tt.$html.addClass(n.join(" ")), setTimeout(function() {
                e.vars.opened = !0
            }, this.conf.openingInterval), this.$menu.addClass(Ze.opened)
        }, Qe[nt].prototype._openFinish = function() {
            var e = this;
            this.__transitionend(tt.$page.first(), function() {
                e.trigger("open:finish")
            }, this.conf.transitionDuration), this.trigger("open:start"), tt.$html.addClass(Ze.opening)
        }, Qe[nt].prototype.close = function() {
            var t;
            this.trigger("close:before"), this.vars.opened && ((t = this).__transitionend(tt.$page.first(), function() {
                t.$menu.removeClass(Ze.opened);
                var e = [Ze.opened, Ze.blocking, Ze.modal, Ze.background, Ze.mm(t.opts[it].position), Ze.mm(t.opts[it].zposition)];
                tt.$html.removeClass(e.join(" ")), tt.$page.each(function() {
                    Qe(this).attr("style", Qe(this).data(Je.style))
                }), t.vars.opened = !1, t.trigger("close:finish")
            }, this.conf.transitionDuration), this.trigger("close:start"), tt.$html.removeClass(Ze.opening), this.trigger("close:after"))
        }, Qe[nt].prototype.closeAllOthers = function() {
            tt.$allMenus.not(this.$menu).each(function() {
                var e = Qe(this).data(nt);
                e && e.close && e.close()
            })
        }, Qe[nt].prototype.setPage = function(e) {
            this.trigger("setPage:before", e);
            var t = this,
                n = this.conf[it];
            e && e.length || (e = tt.$body.find(n.pageSelector), n.noPageSelector.length && (e = e.not(n.noPageSelector.join(", "))), 1 < e.length && n.wrapPageIfNeeded && (e = e.wrapAll("<" + this.conf[it].pageNodetype + " />").parent())), e.each(function() {
                Qe(this).attr("id", Qe(this).attr("id") || t.__getUniqueId())
            }), e.addClass(Ze.page + " " + Ze.slideout), tt.$page = e, this.trigger("setPage:after", e)
        }, Qe[nt].prototype["_initWindow_" + it] = function() {
            tt.$wndw.off(et.keydown + "-" + it).on(et.keydown + "-" + it, function(e) {
                if (tt.$html.hasClass(Ze.opened) && 9 == e.keyCode) return e.preventDefault(), !1
            });
            var i = 0;
            tt.$wndw.off(et.resize + "-" + it).on(et.resize + "-" + it, function(e, t) {
                var n;
                1 == tt.$page.length && (t || tt.$html.hasClass(Ze.opened)) && (n = tt.$wndw.height(), !t && n == i || (i = n, tt.$page.css("minHeight", n)))
            })
        }, Qe[nt].prototype._initBlocker = function() {
            var t = this;
            this.opts[it].blockUI && (tt.$blck || (tt.$blck = Qe('<div id="' + Ze.blocker + '" class="' + Ze.slideout + '" />')), tt.$blck.appendTo(tt.$body).off(et.touchstart + "-" + it + " " + et.touchmove + "-" + it).on(et.touchstart + "-" + it + " " + et.touchmove + "-" + it, function(e) {
                e.preventDefault(), e.stopPropagation(), tt.$blck.trigger(et.mousedown + "-" + it)
            }).off(et.mousedown + "-" + it).on(et.mousedown + "-" + it, function(e) {
                e.preventDefault(), tt.$html.hasClass(Ze.modal) || (t.closeAllOthers(), t.close())
            }))
        }, Ke = "scrollBugFix", (Ve = e)[Ye = "mmenu"].addons[Ke] = {
            setup: function() {
                var e = this.opts[Ke];
                this.conf[Ke], Ue = Ve[Ye].glbl, Ve[Ye].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof e && (e = {
                    fix: e
                }), "object" != typeof e && (e = {}), (e = this.opts[Ke] = Ve.extend(!0, {}, Ve[Ye].defaults[Ke], e)).fix && (this.bind("open:start", function() {
                    this.$pnls.children("." + We.opened).scrollTop(0)
                }), this.bind("initMenu:after", function() {
                    this["_initWindow_" + Ke]()
                })))
            },
            add: function() {
                We = Ve[Ye]._c, Ve[Ye]._d, Xe = Ve[Ye]._e
            },
            clickAnchor: function(e, t) {}
        }, Ve[Ye].defaults[Ke] = {
            fix: !0
        }, Ve[Ye].prototype["_initWindow_" + Ke] = function() {
            var e = this;
            Ue.$docu.off(Xe.touchmove + "-" + Ke).on(Xe.touchmove + "-" + Ke, function(e) {
                Ue.$html.hasClass(We.opened) && e.preventDefault()
            });
            var t = !1;
            Ue.$body.off(Xe.touchstart + "-" + Ke).on(Xe.touchstart + "-" + Ke, "." + We.panels + "> ." + We.opened, function(e) {
                Ue.$html.hasClass(We.opened) && (t || (t = !0, 0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && --e.currentTarget.scrollTop, t = !1))
            }).off(Xe.touchmove + "-" + Ke).on(Xe.touchmove + "-" + Ke, "." + We.panels + "> ." + We.opened, function(e) {
                Ue.$html.hasClass(We.opened) && Ve(this)[0].scrollHeight > Ve(this).innerHeight() && e.stopPropagation()
            }), Ue.$wndw.off(Xe.orientationchange + "-" + Ke).on(Xe.orientationchange + "-" + Ke, function() {
                e.$pnls.children("." + We.opened).scrollTop(0).css({
                    "-webkit-overflow-scrolling": "auto"
                }).css({
                    "-webkit-overflow-scrolling": "touch"
                })
            })
        }, qe = "screenReader", (ze = e)[Re = "mmenu"].addons[qe] = {
            setup: function() {
                var i = this,
                    e = this.opts[qe],
                    s = this.conf[qe];
                ze[Re].glbl, "boolean" == typeof e && (e = {
                    aria: e,
                    text: e
                }), "object" != typeof e && (e = {}), (e = this.opts[qe] = ze.extend(!0, {}, ze[Re].defaults[qe], e)).aria && (this.bind("initAddons:after", function() {
                    this.bind("initMenu:after", function() {
                        this.trigger("initMenu:after:sr-aria")
                    }), this.bind("initNavbar:after", function() {
                        this.trigger("initNavbar:after:sr-aria", arguments[0])
                    }), this.bind("openPanel:start", function() {
                        this.trigger("openPanel:start:sr-aria", arguments[0])
                    }), this.bind("close:start", function() {
                        this.trigger("close:start:sr-aria")
                    }), this.bind("close:finish", function() {
                        this.trigger("close:finish:sr-aria")
                    }), this.bind("open:start", function() {
                        this.trigger("open:start:sr-aria")
                    }), this.bind("open:finish", function() {
                        this.trigger("open:finish:sr-aria")
                    })
                }), this.bind("updateListview", function() {
                    this.$pnls.find("." + je.listview).children().each(function() {
                        i.__sr_aria(ze(this), "hidden", ze(this).is("." + je.hidden))
                    })
                }), this.bind("openPanel:start", function(e) {
                    var t = this.$menu.find("." + je.panel).not(e).not(e.parents("." + je.panel)),
                        e = e.add(e.find("." + je.vertical + "." + je.opened).children("." + je.panel));
                    this.__sr_aria(t, "hidden", !0), this.__sr_aria(e, "hidden", !1)
                }), this.bind("closePanel", function(e) {
                    this.__sr_aria(e, "hidden", !0)
                }), this.bind("initPanels:after", function(e) {
                    e = e.find("." + je.prev + ", ." + je.next).each(function() {
                        i.__sr_aria(ze(this), "owns", ze(this).attr("href").replace("#", ""))
                    });
                    this.__sr_aria(e, "haspopup", !0)
                }), this.bind("initNavbar:after", function(e) {
                    var t = e.children("." + je.navbar);
                    this.__sr_aria(t, "hidden", !e.hasClass(je.hasnavbar))
                }), e.text && (this.bind("initlistview:after", function(e) {
                    e = e.find("." + je.listview).find("." + je.fullsubopen).parent().children("span");
                    this.__sr_aria(e, "hidden", !0)
                }), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function(e) {
                    var t = e.children("." + je.navbar),
                        e = !!t.children("." + je.prev).length;
                    this.__sr_aria(t.children("." + je.title), "hidden", e)
                }))), e.text && (this.bind("initAddons:after", function() {
                    this.bind("setPage:after", function() {
                        this.trigger("setPage:after:sr-text", arguments[0])
                    })
                }), this.bind("initNavbar:after", function(e) {
                    var t = e.children("." + je.navbar),
                        n = t.children("." + je.title).text(),
                        e = ze[Re].i18n(s.text.closeSubmenu);
                    n && (e += " (" + n + ")"), t.children("." + je.prev).html(this.__sr_text(e))
                }), this.bind("initListview:after", function(e) {
                    var t, n = e.data(Fe.parent);
                    n && n.length && (e = (t = n.children("." + je.next)).nextAll("span, a").first().text(), n = ze[Re].i18n(s.text[t.parent().is("." + je.vertical) ? "toggleSubmenu" : "openSubmenu"]), e && (n += " (" + e + ")"), t.html(i.__sr_text(n)))
                }))
            },
            add: function() {
                je = ze[Re]._c, Fe = ze[Re]._d, ze[Re]._e, je.add("sronly")
            },
            clickAnchor: function(e, t) {}
        }, ze[Re].defaults[qe] = {
            aria: !0,
            text: !0
        }, ze[Re].configuration[qe] = {
            text: {
                closeMenu: "Close menu",
                closeSubmenu: "Close submenu",
                openSubmenu: "Open submenu",
                toggleSubmenu: "Toggle submenu"
            }
        }, ze[Re].prototype.__sr_aria = function(e, t, n) {
            e.prop("aria-" + t, n)[n ? "attr" : "removeAttr"]("aria-" + t, n)
        }, ze[Re].prototype.__sr_text = function(e) {
            return '<span class="' + je.sronly + '">' + e + "</span>"
        }, Ge = "autoHeight", (He = e)[Be = "mmenu"].addons[Ge] = {
            setup: function() {
                var e, s = this.opts[Ge];
                this.conf[Ge], He[Be].glbl, "boolean" == typeof s && s && (s = {
                    height: "auto"
                }), "string" == typeof s && (s = {
                    height: s
                }), "object" != typeof s && (s = {}), "auto" != (s = this.opts[Ge] = He.extend(!0, {}, He[Be].defaults[Ge], s)).height && "highest" != s.height || (this.bind("initMenu:after", function() {
                    this.$menu.addClass(Ne.autoheight)
                }), e = function(e) {
                    var t, n, i;
                    this.opts.offCanvas && !this.vars.opened || (t = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0, n = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0, i = 0, this.$menu.addClass(Ne.measureheight), "auto" == s.height ? ((e = e || this.$pnls.children("." + Ne.opened)).is("." + Ne.vertical) && (e = e.parents("." + Ne.panel).not("." + Ne.vertical)), e.length || (e = this.$pnls.children("." + Ne.panel)), i = e.first().outerHeight()) : "highest" == s.height && this.$pnls.children().each(function() {
                        var e = He(this);
                        e.is("." + Ne.vertical) && (e = e.parents("." + Ne.panel).not("." + Ne.vertical).first()), i = Math.max(i, e.outerHeight())
                    }), this.$menu.height(i + t + n).removeClass(Ne.measureheight))
                }, this.opts.offCanvas && this.bind("open:start", e), "highest" == s.height && this.bind("initPanels:after", e), "auto" == s.height && (this.bind("updateListview", e), this.bind("openPanel:start", e), this.bind("closePanel", e)))
            },
            add: function() {
                Ne = He[Be]._c, He[Be]._d, Oe = He[Be]._e, Ne.add("autoheight measureheight"), Oe.add("resize")
            },
            clickAnchor: function(e, t) {}
        }, He[Be].defaults[Ge] = {
            height: "default"
        }, Le = "backButton", (_e = e)[Ie = "mmenu"].addons[Le] = {
            setup: function() {
                var t, e, n;
                this.opts.offCanvas && (e = (t = this).opts[Le], this.conf[Le], $e = _e[Ie].glbl, "boolean" == typeof e && (e = {
                    close: e
                }), "object" != typeof e && (e = {}), (e = _e.extend(!0, {}, _e[Ie].defaults[Le], e)).close && (n = "#" + t.$menu.attr("id"), this.bind("open:finish", function(e) {
                    location.hash != n && history.pushState(null, document.title, n)
                }), _e(window).on("popstate", function(e) {
                    $e.$html.hasClass(De.opened) ? (e.stopPropagation(), t.close()) : location.hash == n && (e.stopPropagation(), t.open())
                })))
            },
            add: function() {
                return window.history && window.history.pushState ? (De = _e[Ie]._c, _e[Ie]._d, void _e[Ie]._e) : void(_e[Ie].addons[Le].setup = function() {})
            },
            clickAnchor: function(e, t) {}
        }, _e[Ie].defaults[Le] = {
            close: !1
        }, ke = "columns", (Ee = e)[Me = "mmenu"].addons[ke] = {
            setup: function() {
                var n = this.opts[ke];
                if (this.conf[ke], Ae = Ee[Me].glbl, "boolean" == typeof n && (n = {
                        add: n
                    }), "number" == typeof n && (n = {
                        add: !0,
                        visible: n
                    }), "object" != typeof n && (n = {}), "number" == typeof n.visible && (n.visible = {
                        min: n.visible,
                        max: n.visible
                    }), (n = this.opts[ke] = Ee.extend(!0, {}, Ee[Me].defaults[ke], n)).add) {
                    n.visible.min = Math.max(1, Math.min(6, n.visible.min)), n.visible.max = Math.max(n.visible.min, Math.min(6, n.visible.max));
                    for (var i = this.opts.offCanvas ? this.$menu.add(Ae.$html) : this.$menu, s = "", e = 0; e <= n.visible.max; e++) s += " " + Pe.columns + "-" + e;
                    s.length && (s = s.slice(1));

                    function t(e) {
                        var t = this.$pnls.children("." + Pe.subopened).length;
                        e && !e.hasClass(Pe.subopened) && t++, t = Math.min(n.visible.max, Math.max(n.visible.min, t)), i.removeClass(s).addClass(Pe.columns + "-" + t)
                    }

                    function o(e) {
                        this.$pnls.children("." + Pe.panel).removeClass(s).filter("." + Pe.subopened).add(e).slice(-n.visible.max).each(function(e) {
                            Ee(this).addClass(Pe.columns + "-" + e)
                        })
                    }
                    this.bind("initMenu:after", function() {
                        this.$menu.addClass(Pe.columns)
                    }), this.bind("initPanels:after", function(e) {
                        o.call(this, this.$pnls.children("." + Pe.opened))
                    }), this.bind("open:start", t), this.bind("openPanel:start", t), this.bind("openPanel:start", o), this.bind("close:finish", function() {
                        i.removeClass(s)
                    }), this.opts.offCanvas || t.call(this)
                }
            },
            add: function() {
                Pe = Ee[Me]._c, Ee[Me]._d, Ee[Me]._e, Pe.add("columns")
            },
            clickAnchor: function(e, t) {
                if (!this.opts[ke].add) return !1;
                if (t) {
                    var n = e.attr("href");
                    if (1 < n.length && "#" == n.slice(0, 1)) try {
                        if (Ee(n, this.$menu).is("." + Pe.panel))
                            for (var i = parseInt(e.closest("." + Pe.panel).attr("class").split(Pe.columns + "-")[1].split(" ")[0], 10) + 1; 0 < i;) {
                                var s = this.$pnls.children("." + Pe.columns + "-" + i);
                                if (!s.length) {
                                    i = -1;
                                    break
                                }
                                i++, s.removeClass(Pe.subopened).removeClass(Pe.opened).removeClass(Pe.highest).addClass(Pe.hidden)
                            }
                    } catch (e) {}
                }
            }
        }, Ee[Me].defaults[ke] = {
            add: !1,
            visible: {
                min: 1,
                max: 3
            }
        }, Ce = "counters", (we = e)[xe = "mmenu"].addons[Ce] = {
            setup: function() {
                var e, n = this,
                    t = this.opts[Ce];
                this.conf[Ce], we[xe].glbl, "boolean" == typeof t && (t = {
                    add: t,
                    update: t
                }), "object" != typeof t && (t = {}), t = this.opts[Ce] = we.extend(!0, {}, we[xe].defaults[Ce], t), this.bind("initListview:after", function(e) {
                    this.__refactorClass(we("em", e), this.conf.classNames[Ce].counter, "counter")
                }), t.add && this.bind("initListview:after", function(e) {
                    e = "panels" === t.addTo ? e : e.filter(t.addTo);
                    e.each(function() {
                        var e = we(this).data(Se.parent);
                        e && (e.children("em." + Te.counter).length || e.prepend(we('<em class="' + Te.counter + '" />')))
                    })
                }), t.update && (e = function(e) {
                    (e = e || this.$pnls.children("." + Te.panel)).each(function() {
                        var e = we(this),
                            t = e.data(Se.parent);
                        !t || (t = t.children("em." + Te.counter)).length && (e = e.children("." + Te.listview)).length && t.html(n.__filterListItems(e.children()).length)
                    })
                }, this.bind("initListview:after", e), this.bind("updateListview", e))
            },
            add: function() {
                Te = we[xe]._c, Se = we[xe]._d, we[xe]._e, Te.add("counter search noresultsmsg")
            },
            clickAnchor: function(e, t) {}
        }, we[xe].defaults[Ce] = {
            add: !1,
            addTo: "panels",
            count: !1
        }, we[xe].configuration.classNames[Ce] = {
            counter: "Counter"
        }, ye = "dividers", (me = e)[be = "mmenu"].addons[ye] = {
            setup: function() {
                var n, i = this,
                    t = this.opts[ye];
                this.conf[ye], me[be].glbl, "boolean" == typeof t && (t = {
                    add: t,
                    fixed: t
                }), "object" != typeof t && (t = {}), t = this.opts[ye] = me.extend(!0, {}, me[be].defaults[ye], t), this.bind("initListview:after", function(e) {
                    this.__refactorClass(e.find("li"), this.conf.classNames[ye].collapsed, "collapsed")
                }), t.add && this.bind("initListview:after", function(e) {
                    e = "panels" === t.addTo ? e : e.filter(t.addTo);
                    e.length && e.find("." + ge.listview).find("." + ge.divider).remove().end().each(function() {
                        var t = "";
                        i.__filterListItems(me(this).children()).each(function() {
                            var e = me.trim(me(this).children("a, span").text()).slice(0, 1).toLowerCase();
                            e != t && e.length && (t = e, me('<li class="' + ge.divider + '">' + e + "</li>").insertBefore(this))
                        })
                    })
                }), t.collapse && this.bind("initListview:after", function(e) {
                    e.find("." + ge.divider).each(function() {
                        var e = me(this);
                        e.nextUntil("." + ge.divider, "." + ge.collapsed).length && (e.children("." + ge.next).length || (e.wrapInner("<span />"), e.prepend('<a href="#" class="' + ge.next + " " + ge.fullsubopen + '" />')))
                    })
                }), t.fixed && (this.bind("initPanels:after", function() {
                    void 0 === this.$fixeddivider && (this.$fixeddivider = me('<ul class="' + ge.listview + " " + ge.fixeddivider + '"><li class="' + ge.divider + '"></li></ul>').prependTo(this.$pnls).children())
                }), n = function(e) {
                    var t, n, i;
                    (e = e || this.$pnls.children("." + ge.opened)).is(":hidden") || (t = e.children("." + ge.listview).children("." + ge.divider).not("." + ge.hidden), n = e.scrollTop() || 0, i = "", t.each(function() {
                        me(this).position().top + n < n + 1 && (i = me(this).text())
                    }), this.$fixeddivider.text(i), this.$pnls[i.length ? "addClass" : "removeClass"](ge.hasdividers))
                }, this.bind("open:start", n), this.bind("openPanel:start", n), this.bind("updateListview", n), this.bind("initPanel:after", function(t) {
                    t.off(ve.scroll + "-" + ye + " " + ve.touchmove + "-" + ye).on(ve.scroll + "-" + ye + " " + ve.touchmove + "-" + ye, function(e) {
                        n.call(i, t)
                    })
                }))
            },
            add: function() {
                ge = me[be]._c, me[be]._d, ve = me[be]._e, ge.add("collapsed uncollapsed fixeddivider hasdividers"), ve.add("scroll")
            },
            clickAnchor: function(e, t) {
                if (this.opts[ye].collapse && t) {
                    t = e.parent();
                    if (t.is("." + ge.divider)) {
                        e = t.nextUntil("." + ge.divider, "." + ge.collapsed);
                        return t.toggleClass(ge.opened), e[t.hasClass(ge.opened) ? "addClass" : "removeClass"](ge.uncollapsed), !0
                    }
                }
                return !1
            }
        }, me[be].defaults[ye] = {
            add: !1,
            addTo: "panels",
            fixed: !1,
            collapse: !1
        }, me[be].configuration.classNames[ye] = {
            collapsed: "Collapsed"
        }, fe = "drag", (ce = e)[pe = "mmenu"].addons[fe] = {
            setup: function() {
                var t, n;
                this.opts.offCanvas && (t = this.opts[fe], n = this.conf[fe], he = ce[pe].glbl, "boolean" == typeof t && (t = {
                    menu: t,
                    panels: t
                }), "object" != typeof t && (t = {}), "boolean" == typeof t.menu && (t.menu = {
                    open: t.menu
                }), "object" != typeof t.menu && (t.menu = {}), "boolean" == typeof t.panels && (t.panels = {
                    close: t.panels
                }), "object" != typeof t.panels && (t.panels = {}), (t = this.opts[fe] = ce.extend(!0, {}, ce[pe].defaults[fe], t)).menu.open && this.bind("setPage:after", function() {
                    (function(t, n, i) {
                        var s, o = this,
                            a = {
                                events: "panleft panright",
                                typeLower: "x",
                                typeUpper: "X",
                                open_dir: "right",
                                close_dir: "left",
                                negative: !1
                            },
                            r = "width",
                            l = a.open_dir,
                            c = function(e) {
                                e <= t.maxStartPos && (u = 1)
                            },
                            d = function() {
                                return ce("." + de.slideout)
                            },
                            u = 0,
                            h = 0,
                            p = 0;
                        switch (this.opts.offCanvas.position) {
                            case "top":
                            case "bottom":
                                a.events = "panup pandown", a.typeLower = "y", a.typeUpper = "Y", r = "height"
                        }
                        switch (this.opts.offCanvas.position) {
                            case "right":
                            case "bottom":
                                a.negative = !0, c = function(e) {
                                    e >= i.$wndw[r]() - t.maxStartPos && (u = 1)
                                }
                        }
                        switch (this.opts.offCanvas.position) {
                            case "left":
                                break;
                            case "right":
                                a.open_dir = "left", a.close_dir = "right";
                                break;
                            case "top":
                                a.open_dir = "down", a.close_dir = "up";
                                break;
                            case "bottom":
                                a.open_dir = "up", a.close_dir = "down"
                        }
                        "front" === this.opts.offCanvas.zposition && (d = function() {
                            return this.$menu
                        });
                        var e = this.__valueOrFn(t.node, this.$menu, i.$page);
                        "string" == typeof e && (e = ce(e)), (e = new Hammer(e[0], this.opts[fe].vendors.hammer)).on("panstart", function(e) {
                            c(e.center[a.typeLower]), i.$slideOutNodes = d(), l = a.open_dir
                        }), e.on(a.events + " panend", function(e) {
                            0 < u && e.preventDefault()
                        }), e.on(a.events, function(e) {
                            if (s = e["delta" + a.typeUpper], a.negative && (s = -s), s != h && (l = h <= s ? a.open_dir : a.close_dir), (h = s) > t.threshold && 1 == u) {
                                if (i.$html.hasClass(de.opened)) return;
                                u = 2, o._openSetup(), o.trigger("open:start"), i.$html.addClass(de.dragging), p = ut(i.$wndw[r]() * n[r].perc, n[r].min, n[r].max)
                            }
                            2 == u && (s = ut(h, 10, p) - ("front" == o.opts.offCanvas.zposition ? p : 0), a.negative && (s = -s), s = "translate" + a.typeUpper + "(" + s + "px )", i.$slideOutNodes.css({
                                "-webkit-transform": "-webkit-" + s,
                                transform: s
                            }))
                        }), e.on("panend", function(e) {
                            2 == u && (i.$html.removeClass(de.dragging), i.$slideOutNodes.css("transform", ""), o[l == a.open_dir ? "_openFinish" : "close"]()), u = 0
                        })
                    }).call(this, t.menu, n.menu, he)
                }), t.panels.close && this.bind("initPanel:after", function(e) {
                    (function(e, t, n, i) {
                        var s, o = this,
                            a = e.data(ue.parent);
                        a && (a = a.closest("." + de.panel), s = null, new Hammer(e[0], o.opts[fe].vendors.hammer).on("panright", function(e) {
                            s || (o.openPanel(a), s = setTimeout(function() {
                                clearTimeout(s), s = null
                            }, o.conf.openingInterval + o.conf.transitionDuration))
                        }))
                    }).call(this, e, t.panels, n.panels, he)
                }))
            },
            add: function() {
                return "function" != typeof Hammer || Hammer.VERSION < 2 ? (ce[pe].addons[fe].add = function() {}, void(ce[pe].addons[fe].setup = function() {})) : (de = ce[pe]._c, ue = ce[pe]._d, ce[pe]._e, void de.add("dragging"))
            },
            clickAnchor: function(e, t) {}
        }, ce[pe].defaults[fe] = {
            menu: {
                open: !1,
                maxStartPos: 100,
                threshold: 50
            },
            panels: {
                close: !1
            },
            vendors: {
                hammer: {}
            }
        }, ce[pe].configuration[fe] = {
            menu: {
                width: {
                    perc: .8,
                    min: 140,
                    max: 440
                },
                height: {
                    perc: .8,
                    min: 140,
                    max: 880
                }
            },
            panels: {}
        }, le = "dropdown", (ne = e)[re = "mmenu"].addons[le] = {
            setup: function() {
                var t, f, m, g, n, i;
                this.opts.offCanvas && (f = (t = this).opts[le], m = this.conf[le], ae = ne[re].glbl, "boolean" == typeof f && f && (f = {
                    drop: f
                }), "object" != typeof f && (f = {}), "string" == typeof f.position && (f.position = {
                    of: f.position
                }), (f = this.opts[le] = ne.extend(!0, {}, ne[re].defaults[le], f)).drop && (this.bind("initMenu:after", function() {
                    var e;
                    this.$menu.addClass(ie.dropdown), f.tip && this.$menu.addClass(ie.tip), "string" != typeof f.position.of && (e = this._getOriginalMenuId()) && e.length && (f.position.of = '[href="#' + e + '"]'), "string" == typeof f.position.of && (g = ne(f.position.of), f.event = f.event.split(" "), 1 == f.event.length && (f.event[1] = f.event[0]), "hover" == f.event[0] && g.on(oe.mouseenter + "-" + le, function() {
                        t.open()
                    }), "hover" == f.event[1] && this.$menu.on(oe.mouseleave + "-" + le, function() {
                        t.close()
                    }))
                }), this.bind("open:start", function() {
                    this.$menu.data(se.style, this.$menu.attr("style") || ""), ae.$html.addClass(ie.dropdown)
                }), this.bind("close:finish", function() {
                    this.$menu.attr("style", this.$menu.data(se.style)), ae.$html.removeClass(ie.dropdown)
                }), n = function(e, t) {
                    var n, i, s = t[0],
                        o = t[1],
                        a = "x" == e ? "scrollLeft" : "scrollTop",
                        r = "x" == e ? "outerWidth" : "outerHeight",
                        l = "x" == e ? "left" : "top",
                        c = "x" == e ? "right" : "bottom",
                        d = "x" == e ? "width" : "height",
                        u = "x" == e ? "maxWidth" : "maxHeight",
                        h = null,
                        p = ae.$wndw[a](),
                        t = g.offset()[l] -= p,
                        a = t + g[r](),
                        p = ae.$wndw[d](),
                        r = m.offset.button[e] + m.offset.viewport[e];
                    if (f.position[e]) switch (f.position[e]) {
                        case "left":
                        case "bottom":
                            h = "after";
                            break;
                        case "right":
                        case "top":
                            h = "before"
                    }
                    return null === h && (h = t + (a - t) / 2 < p / 2 ? "after" : "before"), "after" == h ? (i = p - ((n = "x" == e ? t : a) + r), s[l] = n + m.offset.button[e], s[c] = "auto", o.push(ie["x" == e ? "tipleft" : "tiptop"])) : (i = (n = "x" == e ? a : t) - r, s[c] = "calc( 100% - " + (n - m.offset.button[e]) + "px )", s[l] = "auto", o.push(ie["x" == e ? "tipright" : "tipbottom"])), s[u] = Math.min(m[d].max, i), [s, o]
                }, i = function(e) {
                    var t;
                    this.vars.opened && (this.$menu.attr("style", this.$menu.data(se.style)), t = n.call(this, "y", t = [{},
                        []
                    ]), t = n.call(this, "x", t), this.$menu.css(t[0]), f.tip && this.$menu.removeClass(ie.tipleft + " " + ie.tipright + " " + ie.tiptop + " " + ie.tipbottom).addClass(t[1].join(" ")))
                }, this.bind("open:start", i), ae.$wndw.on(oe.resize + "-" + le, function(e) {
                    i.call(t)
                }), this.opts.offCanvas.blockUI || ae.$wndw.on(oe.scroll + "-" + le, function(e) {
                    i.call(t)
                })))
            },
            add: function() {
                ie = ne[re]._c, se = ne[re]._d, oe = ne[re]._e, ie.add("dropdown tip tipleft tipright tiptop tipbottom"), oe.add("mouseenter mouseleave resize scroll")
            },
            clickAnchor: function(e, t) {}
        }, ne[re].defaults[le] = {
            drop: !1,
            event: "click",
            position: {},
            tip: !0
        }, ne[re].configuration[le] = {
            offset: {
                button: {
                    x: -10,
                    y: 10
                },
                viewport: {
                    x: 20,
                    y: 20
                }
            },
            height: {
                max: 880
            },
            width: {
                max: 440
            }
        }, te = "fixedElements", (Z = e)[ee = "mmenu"].addons[te] = {
            setup: function() {
                var e, n;
                this.opts.offCanvas && (e = this.opts[te], n = this.conf[te], Z[ee].glbl, e = this.opts[te] = Z.extend(!0, {}, Z[ee].defaults[te], e), this.bind("setPage:after", function(e) {
                    var t = this.conf.classNames[te].fixed;
                    this.__refactorClass(e.find("." + t), t, "slideout")[n.elemInsertMethod](n.elemInsertSelector)
                }))
            },
            add: function() {
                J = Z[ee]._c, Z[ee]._d, Z[ee]._e, J.add("fixed")
            },
            clickAnchor: function(e, t) {}
        }, Z[ee].configuration[te] = {
            elemInsertMethod: "appendTo",
            elemInsertSelector: "body"
        }, Z[ee].configuration.classNames[te] = {
            fixed: "Fixed"
        }, Q = "iconPanels", (U = e)[K = "mmenu"].addons[Q] = {
            setup: function() {
                var t = this,
                    n = this.opts[Q];
                if (this.conf[Q], U[K].glbl, "boolean" == typeof n && (n = {
                        add: n
                    }), "number" == typeof n && (n = {
                        add: !0,
                        visible: n
                    }), "object" != typeof n && (n = {}), (n = this.opts[Q] = U.extend(!0, {}, U[K].defaults[Q], n)).visible++, n.add) {
                    for (var i = "", e = 0; e <= n.visible; e++) i += " " + Y.iconpanel + "-" + e;
                    i.length && (i = i.slice(1));

                    function s(e) {
                        e.hasClass(Y.vertical) || t.$pnls.children("." + Y.panel).removeClass(i).filter("." + Y.subopened).removeClass(Y.hidden).add(e).not("." + Y.vertical).slice(-n.visible).each(function(e) {
                            U(this).addClass(Y.iconpanel + "-" + e)
                        })
                    }
                    this.bind("initMenu:after", function() {
                        this.$menu.addClass(Y.iconpanel)
                    }), this.bind("openPanel:start", s), this.bind("initPanels:after", function(e) {
                        s.call(t, t.$pnls.children("." + Y.opened))
                    }), this.bind("initListview:after", function(e) {
                        e.hasClass(Y.vertical) || e.children("." + Y.subblocker).length || e.prepend('<a href="#' + e.closest("." + Y.panel).attr("id") + '" class="' + Y.subblocker + '" />')
                    })
                }
            },
            add: function() {
                Y = U[K]._c, U[K]._d, U[K]._e, Y.add("iconpanel subblocker")
            },
            clickAnchor: function(e, t) {}
        }, U[K].defaults[Q] = {
            add: !1,
            visible: 3
        },
        function(o) {
            function i(e, t) {
                e = e || this.$pnls.children("." + l.opened);
                var n = o(),
                    i = this.$menu.children("." + l.mm("navbars-top") + ", ." + l.mm("navbars-bottom")).children("." + l.navbar);
                i.find(h).filter(":focus").length || ("default" == t && ((n = e.children("." + l.listview).find("a[href]").not("." + l.hidden)).length || (n = e.find(h).not("." + l.hidden)), n.length || (n = i.find(h).not("." + l.hidden))), n.length || (n = this.$menu.children("." + l.tabstart)), n.first().focus())
            }

            function s(e) {
                e = e || this.$pnls.children("." + l.opened), this.$pnls.children("." + l.panel).not(e).find(h).attr("tabindex", -1), e.find(h).attr("tabindex", 0), e.find("." + l.mm("toggle") + ", ." + l.mm("check")).attr("tabindex", -1), e.children("." + l.navbar).children("." + l.title).attr("tabindex", -1)
            }
            var a = "mmenu",
                r = "keyboardNavigation";
            o[a].addons[r] = {
                setup: function() {
                    var e, t, n = this.opts[r];
                    this.conf[r], u = o[a].glbl, "boolean" != typeof n && "string" != typeof n || (n = {
                        enable: n
                    }), "object" != typeof n && (n = {}), (n = this.opts[r] = o.extend(!0, {}, o[a].defaults[r], n)).enable && (e = o('<button class="' + l.tabstart + '" tabindex="0" type="button" />'), t = o('<button class="' + l.tabend + '" tabindex="0" type="button" />'), this.bind("initMenu:after", function() {
                        n.enhance && this.$menu.addClass(l.keyboardfocus), this["_initWindow_" + r](n.enhance)
                    }), this.bind("initOpened:before", function() {
                        this.$menu.prepend(e).append(t).children("." + l.mm("navbars-top") + ", ." + l.mm("navbars-bottom")).children("." + l.navbar).children("a." + l.title).attr("tabindex", -1)
                    }), this.bind("open:start", function() {
                        s.call(this)
                    }), this.bind("open:finish", function() {
                        i.call(this, null, n.enable)
                    }), this.bind("openPanel:start", function(e) {
                        s.call(this, e)
                    }), this.bind("openPanel:finish", function(e) {
                        i.call(this, e, n.enable)
                    }), this.bind("initOpened:after", function() {
                        this.__sr_aria(this.$menu.children("." + l.mm("tabstart") + ", ." + l.mm("tabend")), "hidden", !0)
                    }))
                },
                add: function() {
                    l = o[a]._c, c = o[a]._d, d = o[a]._e, l.add("tabstart tabend keyboardfocus"), d.add("focusin keydown")
                },
                clickAnchor: function(e, t) {}
            }, o[a].defaults[r] = {
                enable: !1,
                enhance: !1
            }, o[a].configuration[r] = {}, o[a].prototype["_initWindow_" + r] = function(e) {
                u.$wndw.off(d.keydown + "-offCanvas"), u.$wndw.off(d.focusin + "-" + r).on(d.focusin + "-" + r, function(e) {
                    !u.$html.hasClass(l.opened) || (e = o(e.target)).is("." + l.tabend) && e.parent().find("." + l.tabstart).focus()
                }), u.$wndw.off(d.keydown + "-" + r).on(d.keydown + "-" + r, function(e) {
                    var t = o(e.target),
                        n = t.closest("." + l.menu);
                    if (n.length && (n.data("mmenu"), !t.is("input, textarea"))) switch (e.keyCode) {
                        case 13:
                            (t.is(".mm-toggle") || t.is(".mm-check")) && t.trigger(d.click);
                            break;
                        case 32:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            e.preventDefault()
                    }
                }), e && u.$wndw.off(d.keydown + "-" + r).on(d.keydown + "-" + r, function(e) {
                    var t = o(e.target),
                        n = t.closest("." + l.menu);
                    if (n.length) {
                        var i = n.data("mmenu");
                        if (t.is("input, textarea")) 27 === e.keyCode && t.val("");
                        else switch (e.keyCode) {
                            case 8:
                                var s = t.closest("." + l.panel).data(c.parent);
                                s && s.length && i.openPanel(s.closest("." + l.panel));
                                break;
                            case 27:
                                n.hasClass(l.offcanvas) && i.close()
                        }
                    }
                })
            };
            var l, c, d, u, h = "input, select, textarea, button, label, a[href]"
        }(e), X = "lazySubmenus", (R = e)[W = "mmenu"].addons[X] = {
            setup: function() {
                var e = this.opts[X];
                this.conf[X], R[W].glbl, "boolean" == typeof e && (e = {
                    load: e
                }), "object" != typeof e && (e = {}), (e = this.opts[X] = R.extend(!0, {}, R[W].defaults[X], e)).load && (this.bind("initMenu:after", function() {
                    this.$pnls.find("li").children(this.conf.panelNodetype).not("." + q.inset).not("." + q.nolistview).not("." + q.nopanel).addClass(q.lazysubmenu + " " + q.nolistview + " " + q.nopanel)
                }), this.bind("initPanels:before", function(e) {
                    e = e || this.$pnls.children(this.conf.panelNodetype), this.__findAddBack(e, "." + q.lazysubmenu).not("." + q.lazysubmenu + " ." + q.lazysubmenu).removeClass(q.lazysubmenu + " " + q.nolistview + " " + q.nopanel)
                }), this.bind("initOpened:before", function() {
                    var e = this.$pnls.find("." + this.conf.classNames.selected).parents("." + q.lazysubmenu);
                    e.length && (e.removeClass(q.lazysubmenu + " " + q.nolistview + " " + q.nopanel), this.initPanels(e.last()))
                }), this.bind("openPanel:before", function(e) {
                    e = this.__findAddBack(e, "." + q.lazysubmenu).not("." + q.lazysubmenu + " ." + q.lazysubmenu);
                    e.length && this.initPanels(e)
                }))
            },
            add: function() {
                q = R[W]._c, V = R[W]._d, R[W]._e, q.add("lazysubmenu"), V.add("lazysubmenu")
            },
            clickAnchor: function(e, t) {}
        }, R[W].defaults[X] = {
            load: !1
        }, R[W].configuration[X] = {}, F = "navbars", (G = e)[j = "mmenu"].addons[F] = {
            setup: function() {
                var l, c, d = this,
                    u = this.opts[F],
                    h = this.conf[F];
                G[j].glbl, void 0 !== u && (u instanceof Array || (u = [u]), l = {}, c = {}, u.length && (G.each(u, function(e) {
                    var t = u[e];
                    "boolean" == typeof t && t && (t = {}), "object" != typeof t && (t = {}), void 0 === t.content && (t.content = ["prev", "title"]), t.content instanceof Array || (t.content = [t.content]), t = G.extend(!0, {}, d.opts.navbar, t);
                    var n = G('<div class="' + z.navbar + '" />'),
                        i = t.height;
                    "number" != typeof i && (i = 1), i = Math.min(4, Math.max(1, i)), n.addClass(z.navbar + "-size-" + i);
                    e = t.position;
                    "bottom" != e && (e = "top"), l[e] || (l[e] = 0), l[e] += i, c[e] || (c[e] = G('<div class="' + z.navbars + "-" + e + '" />')), c[e].append(n);
                    for (var s = 0, o = 0, a = t.content.length; o < a; o++) {
                        var r = G[j].addons[F][t.content[o]] || !1;
                        r ? s += r.call(d, n, t, h) : ((r = t.content[o]) instanceof G || (r = G(t.content[o])), n.append(r))
                    }
                    1 < (s += Math.ceil(n.children().not("." + z.btn).length / i)) && n.addClass(z.navbar + "-content-" + s), n.children("." + z.btn).length && n.addClass(z.hasbtns)
                }), this.bind("initMenu:after", function() {
                    for (var e in l) this.$menu.addClass(z.hasnavbar + "-" + e + "-" + l[e]), this.$menu["bottom" == e ? "append" : "prepend"](c[e])
                })))
            },
            add: function() {
                z = G[j]._c, G[j]._d, G[j]._e, z.add("navbars close hasbtns")
            },
            clickAnchor: function(e, t) {}
        }, G[j].configuration[F] = {
            breadcrumbSeparator: "/"
        }, G[j].configuration.classNames[F] = {}, (O = e)[B = "mmenu"].addons.navbars.breadcrumbs = function(e, t, a) {
            var n = this,
                r = O[B]._c,
                l = O[B]._d;
            r.add("breadcrumbs separator");
            var i = O('<span class="' + r.breadcrumbs + '" />').appendTo(e);
            return this.bind("initNavbar:after", function(e) {
                e.removeClass(r.hasnavbar);
                for (var t, n = [], i = O('<span class="' + r.breadcrumbs + '"></span>'), s = e, o = !0; s && s.length;) s.is("." + r.panel) || (s = s.closest("." + r.panel)), s.hasClass(r.vertical) || (t = s.children("." + r.navbar).children("." + r.title).text(), n.unshift(o ? "<span>" + t + "</span>" : '<a href="#' + s.attr("id") + '">' + t + "</a>"), o = !1), s = s.data(l.parent);
                i.append(n.join('<span class="' + r.separator + '">' + a.breadcrumbSeparator + "</span>")).appendTo(e.children("." + r.navbar))
            }), this.bind("openPanel:start", function(e) {
                i.html(e.children("." + r.navbar).children("." + r.breadcrumbs).html() || "")
            }), this.bind("initNavbar:after:sr-aria", function(e) {
                e.children("." + r.navbar).children("." + r.breadcrumbs).children("a").each(function() {
                    n.__sr_aria(O(this), "owns", O(this).attr("href").slice(1))
                })
            }), 0
        }, (H = e)[N = "mmenu"].addons.navbars.close = function(e, t) {
            var n = H[N]._c,
                i = (H[N].glbl, H('<a class="' + n.close + " " + n.btn + '" href="#" />').appendTo(e));
            return this.bind("setPage:after", function(e) {
                i.attr("href", "#" + e.attr("id"))
            }), this.bind("setPage:after:sr-text", function(e) {
                i.html(this.__sr_text(H[N].i18n(this.conf.screenReader.text.closeMenu))), this.__sr_aria(i, "owns", i.attr("href").slice(1))
            }), -1
        }, L = "navbars", ($ = e)[I = "mmenu"].addons[L].next = function(e, t) {
            var n, i, s = $[I]._c,
                o = $('<a class="' + s.next + " " + s.btn + '" href="#" />').appendTo(e);
            return this.bind("openPanel:start", function(e) {
                i = e.find("." + this.conf.classNames[L].panelNext), n = i.attr("href"), i = i.html(), n ? o.attr("href", n) : o.removeAttr("href"), o[n || i ? "removeClass" : "addClass"](s.hidden), o.html(i)
            }), this.bind("openPanel:start:sr-aria", function(e) {
                this.__sr_aria(o, "hidden", o.hasClass(s.hidden)), this.__sr_aria(o, "owns", (o.attr("href") || "").slice(1))
            }), -1
        }, $[I].configuration.classNames[L].panelNext = "Next", D = "navbars", (k = e)[_ = "mmenu"].addons[D].prev = function(e, t) {
            var n, i, s = k[_]._c,
                o = k('<a class="' + s.prev + " " + s.btn + '" href="#" />').appendTo(e);
            return this.bind("initNavbar:after", function(e) {
                e.removeClass(s.hasnavbar)
            }), this.bind("openPanel:start", function(e) {
                e.hasClass(s.vertical) || ((i = e.find("." + this.conf.classNames[D].panelPrev)).length || (i = e.children("." + s.navbar).children("." + s.prev)), n = i.attr("href"), i = i.html(), n ? o.attr("href", n) : o.removeAttr("href"), o[n || i ? "removeClass" : "addClass"](s.hidden), o.html(i))
            }), this.bind("initNavbar:after:sr-aria", function(e) {
                e = e.children("." + s.navbar);
                this.__sr_aria(e, "hidden", !0)
            }), this.bind("openPanel:start:sr-aria", function(e) {
                this.__sr_aria(o, "hidden", o.hasClass(s.hidden)), this.__sr_aria(o, "owns", (o.attr("href") || "").slice(1))
            }), -1
        }, k[_].configuration.classNames[D].panelPrev = "Prev", (M = e).mmenu.addons.navbars.searchfield = function(e, t) {
            var n = M.mmenu._c,
                e = M('<div class="' + n.search + '" />').appendTo(e);
            return "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = e, 0
        }, A = "navbars", (E = e)[P = "mmenu"].addons[A].title = function(e, t) {
            var n, i, s, o = E[P]._c,
                a = E('<a class="' + o.title + '" />').appendTo(e);
            return this.bind("openPanel:start", function(e) {
                e.hasClass(o.vertical) || ((i = e.find("." + this.conf.classNames[A].panelTitle)).length || (i = e.children("." + o.navbar).children("." + o.title)), n = i.attr("href"), i = i.html() || t.title, n ? a.attr("href", n) : a.removeAttr("href"), a[n || i ? "removeClass" : "addClass"](o.hidden), a.html(i))
            }), this.bind("openPanel:start:sr-aria", function(e) {
                var t;
                this.opts.screenReader.text && (s = s || this.$menu.children("." + o.navbars + "-top, ." + o.navbars + "-bottom").children("." + o.navbar).children("." + o.prev)).length && (t = !0, "parent" == this.opts.navbar.titleLink && (t = !s.hasClass(o.hidden)), this.__sr_aria(a, "hidden", t))
            }), 0
        }, E[P].configuration.classNames[A].panelTitle = "Title",
        function(r) {
            function l(e) {
                i && i.length && i.is(":visible") && p.$html.add(p.$body).animate({
                    scrollTop: i.offset().top + e
                }), i = !1
            }

            function c(e) {
                try {
                    return "#" != e && "#" == e.slice(0, 1) && p.$page.find(e).length
                } catch (e) {
                    return
                }
            }
            var n = "mmenu",
                d = "pageScroll";
            r[n].addons[d] = {
                setup: function() {
                    var t, i, s, o = this,
                        e = this.opts[d],
                        a = this.conf[d];
                    p = r[n].glbl, "boolean" == typeof e && (e = {
                        scroll: e
                    }), (e = this.opts[d] = r.extend(!0, {}, r[n].defaults[d], e)).scroll && this.bind("close:finish", function() {
                        l(a.scrollOffset)
                    }), e.update && (t = [], i = [], (o = this).bind("initListview:after", function(e) {
                        o.__filterListItemAnchors(e.find("." + u.listview).children("li")).each(function() {
                            var e = r(this).attr("href");
                            c(e) && t.push(e)
                        }), i = t.reverse()
                    }), s = -1, p.$wndw.on(h.scroll + "-" + d, function(e) {
                        for (var t = p.$wndw.scrollTop(), n = 0; n < i.length; n++)
                            if (r(i[n]).offset().top < t + a.updateOffset) {
                                s !== n && (s = n, o.setSelected(o.__filterListItemAnchors(o.$pnls.children("." + u.opened).find("." + u.listview).children("li")).filter('[href="' + i[n] + '"]').parent()));
                                break
                            }
                    }))
                },
                add: function() {
                    u = r[n]._c, r[n]._d, h = r[n]._e
                },
                clickAnchor: function(e, t) {
                    var n;
                    i = !1, t && this.opts[d].scroll && this.opts.offCanvas && p.$page && p.$page.length && c(n = e.attr("href")) && (i = r(n), p.$html.hasClass(u.mm("widescreen")) && l(this.conf[d].scrollOffset))
                }
            }, r[n].defaults[d] = {
                scroll: !1,
                update: !1
            };
            var u, h, p, i = !(r[n].configuration[d] = {
                scrollOffset: 0,
                updateOffset: 50
            })
        }(e), (T = e)[C = "mmenu"].addons.rtl = {
            setup: function() {
                var e = this.opts.rtl;
                this.conf.rtl, x = T[C].glbl, "object" != typeof e && (e = {
                    use: e
                }), "boolean" != typeof(e = this.opts.rtl = T.extend(!0, {}, T[C].defaults.rtl, e)).use && (e.use = "rtl" == (x.$html.attr("dir") || "").toLowerCase()), e.use && this.bind("initMenu:after", function() {
                    this.$menu.addClass(S.rtl)
                })
            },
            add: function() {
                S = T[C]._c, T[C]._d, T[C]._e, S.add("rtl")
            },
            clickAnchor: function(e, t) {}
        }, T[C].defaults.rtl = {
            use: "detect"
        }, w = "searchfield", (m = e)[y = "mmenu"].addons[w] = {
            setup: function() {
                var h = this,
                    p = this.opts[w],
                    l = this.conf[w];
                m[y].glbl, "boolean" == typeof p && (p = {
                    add: p
                }), "object" != typeof p && (p = {}), "boolean" == typeof p.resultsPanel && (p.resultsPanel = {
                    add: p.resultsPanel
                }), p = this.opts[w] = m.extend(!0, {}, m[y].defaults[w], p), l = this.conf[w] = m.extend(!0, {}, m[y].configuration[w], l), this.bind("close:start", function() {
                    this.$menu.find("." + g.search).find("input").blur()
                }), this.bind("initPanels:after", function(e) {
                    var u;
                    p.add && (("panels" === p.addTo ? e : this.$menu.find(p.addTo)).each(function() {
                        var e = m(this);
                        if (!e.is("." + g.panel) || !e.is("." + g.vertical)) {
                            if (!e.children("." + g.search).length) {
                                var t, n = h.__valueOrFn(l.clear, e),
                                    i = h.__valueOrFn(l.form, e),
                                    s = h.__valueOrFn(l.input, e),
                                    o = h.__valueOrFn(l.submit, e),
                                    a = m("<" + (i ? "form" : "div") + ' class="' + g.search + '" />'),
                                    r = m('<input placeholder="' + m[y].i18n(p.placeholder) + '" type="text" autocomplete="off" />');
                                if (a.append(r), s)
                                    for (t in s) r.attr(t, s[t]);
                                if (n && m('<a class="' + g.btn + " " + g.clear + '" href="#" />').appendTo(a).on(b.click + "-searchfield", function(e) {
                                        e.preventDefault(), r.val("").trigger(b.keyup + "-searchfield")
                                    }), i) {
                                    for (t in i) a.attr(t, i[t]);
                                    o && !n && m('<a class="' + g.btn + " " + g.next + '" href="#" />').appendTo(a).on(b.click + "-searchfield", function(e) {
                                        e.preventDefault(), a.submit()
                                    })
                                }
                                e.hasClass(g.search) ? e.replaceWith(a) : e.prepend(a).addClass(g.hassearch)
                            }
                            p.noResults && (e.closest("." + g.panel).length || (e = h.$pnls.children("." + g.panel).first()), !e.children("." + g.noresultsmsg).length) && (n = e.children("." + g.listview).first(), m('<div class="' + g.noresultsmsg + " " + g.hidden + '" />').append(m[y].i18n(p.noResults))[n.length ? "insertAfter" : "prependTo"](n.length ? n : e))
                        }
                    }), p.search && (p.resultsPanel.add && (p.showSubPanels = !1, (u = this.$pnls.children("." + g.resultspanel)).length || (u = m('<div class="' + g.panel + " " + g.resultspanel + " " + g.noanimation + " " + g.hidden + '" />').appendTo(this.$pnls).append('<div class="' + g.navbar + " " + g.hidden + '"><a class="' + g.title + '">' + m[y].i18n(p.resultsPanel.title) + "</a></div>").append('<ul class="' + g.listview + '" />').append(this.$pnls.find("." + g.noresultsmsg).first().clone()), this.initPanels(u))), this.$menu.find("." + g.search).each(function() {
                        var n, e = m(this),
                            i = e.closest("." + g.panel).length,
                            s = i ? n = e.closest("." + g.panel) : (n = m("." + g.panel, h.pnls), h.$menu);
                        p.resultsPanel.add && (n = n.not(u));

                        function t() {
                            var t, e = o.val().toLowerCase();
                            e != c && (c = e, p.resultsPanel.add && u.children("." + g.listview).empty(), n.scrollTop(0), l.add(r).addClass(g.hidden).find("." + g.fullsubopensearch).removeClass(g.fullsubopen + " " + g.fullsubopensearch), l.each(function() {
                                var e = m(this),
                                    t = "a";
                                (p.showTextItems || p.showSubPanels && e.find("." + g.next)) && (t = "a, span"), -1 < (e.data(v.searchtext) || e.children(t).not("." + g.next).text()).toLowerCase().indexOf(c) && e.add(e.prevAll("." + g.divider).first()).removeClass(g.hidden)
                            }), p.showSubPanels && n.each(function(e) {
                                var t = m(this);
                                h.__filterListItems(t.find("." + g.listview).children()).each(function() {
                                    var e = m(this),
                                        t = e.data(v.child);
                                    e.removeClass(g.nosubresults), t && t.find("." + g.listview).children().removeClass(g.hidden)
                                })
                            }), p.resultsPanel.add ? "" === c ? (this.closeAllPanels(), this.openPanel(this.$pnls.children("." + g.subopened).last())) : (t = m(), n.each(function() {
                                var e = h.__filterListItems(m(this).find("." + g.listview).children()).not("." + g.hidden).clone(!0);
                                e.length && (p.resultsPanel.dividers && (t = t.add('<li class="' + g.divider + '">' + m(this).children("." + g.navbar).children("." + g.title).text() + "</li>")), e.children("." + g.mm("toggle") + ", ." + g.mm("check")).remove(), t = t.add(e))
                            }), t.find("." + g.next).remove(), u.children("." + g.listview).append(t), this.openPanel(u)) : m(n.get().reverse()).each(function(e) {
                                var t = m(this),
                                    n = t.data(v.parent);
                                n && (h.__filterListItems(t.find("." + g.listview).children()).length ? (n.hasClass(g.hidden) && n.children("." + g.next).not("." + g.fullsubopen).addClass(g.fullsubopen).addClass(g.fullsubopensearch), n.removeClass(g.hidden).removeClass(g.nosubresults).prevAll("." + g.divider).first().removeClass(g.hidden)) : i || (t.hasClass(g.opened) && setTimeout(function() {
                                    h.openPanel(n.closest("." + g.panel))
                                }, (e + 1) * (1.5 * h.conf.openingInterval)), n.addClass(g.nosubresults)))
                            }), s.find("." + g.noresultsmsg)[l.not("." + g.hidden).length ? "addClass" : "removeClass"](g.hidden), this.trigger("updateListview"))
                        }
                        var o = e.children("input"),
                            a = h.__findAddBack(n, "." + g.listview).children("li"),
                            r = a.filter("." + g.divider),
                            l = h.__filterListItems(a),
                            c = "";
                        o.off(b.keyup + "-" + w + " " + b.change + "-" + w).on(b.keyup + "-" + w, function(e) {
                            ! function() {
                                switch (e.keyCode) {
                                    case 9:
                                    case 16:
                                    case 17:
                                    case 18:
                                    case 37:
                                    case 38:
                                    case 39:
                                    case 40:
                                        return 1
                                }
                            }() && t.call(h)
                        }).on(b.change + "-" + w, function(e) {
                            t.call(h)
                        });
                        var d = e.children("." + g.btn);
                        d.length && o.on(b.keyup + "-" + w, function(e) {
                            d[o.val().length ? "removeClass" : "addClass"](g.hidden)
                        }), o.trigger(b.keyup + "-" + w)
                    })))
                })
            },
            add: function() {
                g = m[y]._c, v = m[y]._d, b = m[y]._e, g.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), v.add("searchtext"), b.add("change keyup")
            },
            clickAnchor: function(e, t) {}
        }, m[y].defaults[w] = {
            add: !1,
            addTo: "panels",
            placeholder: "Search",
            noResults: "No results found.",
            resultsPanel: {
                add: !1,
                dividers: !0,
                title: "Search results"
            },
            search: !0,
            showTextItems: !1,
            showSubPanels: !0
        }, m[y].configuration[w] = {
            clear: !1,
            form: !1,
            input: !1,
            submit: !1
        }, f = "sectionIndexer", (u = e)[p = "mmenu"].addons[f] = {
            setup: function() {
                var a = this,
                    t = this.opts[f];
                this.conf[f], u[p].glbl, "boolean" == typeof t && (t = {
                    add: t
                }), "object" != typeof t && (t = {}), t = this.opts[f] = u.extend(!0, {}, u[p].defaults[f], t), this.bind("initPanels:after", function(e) {
                    t.add && (("panels" === t.addTo ? e : u(t.addTo, this.$menu).filter("." + h.panel)).find("." + h.divider).closest("." + h.panel).addClass(h.hasindexer), this.$indexer || (this.$indexer = u('<div class="' + h.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(i.mouseover + "-" + f + " " + h.touchstart + "-" + f, function(e) {
                        var t = u(this).attr("href").slice(1),
                            n = a.$pnls.children("." + h.opened),
                            i = n.find("." + h.listview),
                            s = -1,
                            o = n.scrollTop();
                        n.scrollTop(0), i.children("." + h.divider).not("." + h.hidden).each(function() {
                            s < 0 && t == u(this).text().slice(0, 1).toLowerCase() && (s = u(this).position().top)
                        }), n.scrollTop(-1 < s ? s : o)
                    })), e = function(e) {
                        e = e || this.$pnls.children("." + h.opened), this.$menu[(e.hasClass(h.hasindexer) ? "add" : "remove") + "Class"](h.hasindexer)
                    }, this.bind("openPanel:start", e), this.bind("initPanels:after", e))
                })
            },
            add: function() {
                h = u[p]._c, u[p]._d, i = u[p]._e, h.add("indexer hasindexer"), i.add("mouseover touchstart")
            },
            clickAnchor: function(e, t) {
                if (e.parent().is("." + h.indexer)) return !0
            }
        }, u[p].defaults[f] = {
            add: !1,
            addTo: "panels"
        }, d = "setSelected", (s = e)[c = "mmenu"].addons[d] = {
            setup: function() {
                var n, i = this,
                    e = this.opts[d];
                this.conf[d], s[c].glbl, "boolean" == typeof e && (e = {
                    hover: e,
                    parent: e
                }), "object" != typeof e && (e = {}), "detect" == (e = this.opts[d] = s.extend(!0, {}, s[c].defaults[d], e)).current ? (n = function(e) {
                    e = e.split("?")[0].split("#")[0];
                    var t = i.$menu.find('a[href="' + e + '"], a[href="' + e + '/"]');
                    t.length ? i.setSelected(t.parent(), !0) : (e = e.split("/").slice(0, -1)).length && n(e.join("/"))
                }, this.bind("initMenu:after", function() {
                    n(window.location.href)
                })) : e.current || this.bind("initListview:after", function(e) {
                    this.$pnls.find("." + r.listview).children("." + r.selected).removeClass(r.selected)
                }), e.hover && this.bind("initMenu:after", function() {
                    this.$menu.addClass(r.hoverselected)
                }), e.parent && (this.bind("openPanel:finish", function(e) {
                    this.$pnls.find("." + r.listview).find("." + r.next).removeClass(r.selected);
                    for (var t = e.data(l.parent); t;) t.not("." + r.vertical).children("." + r.next).addClass(r.selected), t = t.closest("." + r.panel).data(l.parent)
                }), this.bind("initMenu:after", function() {
                    this.$menu.addClass(r.parentselected)
                }))
            },
            add: function() {
                r = s[c]._c, l = s[c]._d, s[c]._e, r.add("hoverselected parentselected")
            },
            clickAnchor: function(e, t) {}
        }, s[c].defaults[d] = {
            current: !0,
            hover: !1,
            parent: !1
        }, n = "toggles", (o = e)[t = "mmenu"].addons[n] = {
            setup: function() {
                var s = this;
                this.opts[n], this.conf[n], o[t].glbl, this.bind("initListview:after", function(e) {
                    this.__refactorClass(e.find("input"), this.conf.classNames[n].toggle, "toggle"), this.__refactorClass(e.find("input"), this.conf.classNames[n].check, "check"), e.find("input." + a.toggle + ", input." + a.check).each(function() {
                        var e = o(this),
                            t = e.closest("li"),
                            n = e.hasClass(a.toggle) ? "toggle" : "check",
                            i = e.attr("id") || s.__getUniqueId();
                        t.children('label[for="' + i + '"]').length || (e.attr("id", i), t.prepend(e), o('<label for="' + i + '" class="' + a[n] + '"></label>').insertBefore(t.children("a, span").last()))
                    })
                })
            },
            add: function() {
                a = o[t]._c, o[t]._d, o[t]._e, a.add("toggle check")
            },
            clickAnchor: function(e, t) {}
        }, o[t].configuration.classNames[n] = {
            toggle: "Toggle",
            check: "Check"
        }, !0;
    var o, a, t, n, s, r, l, c, d, u, h, i, p, f, m, g, v, b, y, w, T, S, x, C, E, P, A, M, k, _, D, $, I, L, H, N, O, B, G, z, j, F, R, q, V, W, X, U, Y, K, Q, Z, J, ee, te, ne, ie, se, oe, ae, re, le, ce, de, ue, he, pe, fe, me, ge, ve, be, ye, we, Te, Se, xe, Ce, Ee, Pe, Ae, Me, ke, _e, De, $e, Ie, Le, He, Ne, Oe, Be, Ge, ze, je, Fe, Re, qe, Ve, We, Xe, Ue, Ye, Ke, Qe, Ze, Je, et, tt, nt, it, st, ot, at, rt, lt, ct, dt;

    function ut(e, t, n) {
        return e < t && (e = t), n < e && (e = n), e
    }
}), ("function" == typeof define && define.amd ? define : function(e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
})(["jquery"], function(T) {
    return function() {
        function f(e, t) {
            return e = e || g(), (b = T("#" + e.containerId)).length || t && (e = e, (b = T("<div/>").attr("id", e.containerId).addClass(e.positionClass)).appendTo(T(e.target))), b
        }

        function i(e, t, n) {
            n = !(!n || !n.force) && n.force;
            return e && (n || 0 === T(":focus", e).length) && (e[t.hideMethod]({
                duration: t.hideDuration,
                easing: t.hideEasing,
                complete: function() {
                    v(e)
                }
            }), 1)
        }

        function m(e) {
            t && t(e)
        }

        function s(t) {
            function e(e) {
                return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function n(e) {
                var t = e && !1 !== s.closeMethod ? s.closeMethod : s.hideMethod,
                    n = e && !1 !== s.closeDuration ? s.closeDuration : s.hideDuration,
                    i = e && !1 !== s.closeEasing ? s.closeEasing : s.hideEasing;
                if (!T(":focus", r).length || e) return clearTimeout(h.intervalId), r[t]({
                    duration: n,
                    easing: i,
                    complete: function() {
                        v(r), clearTimeout(a), s.onHidden && "hidden" !== p.state && s.onHidden(), p.state = "hidden", p.endTime = new Date, m(p)
                    }
                })
            }
            var i, s = g(),
                o = t.iconClass || s.iconClass;
            if (void 0 !== t.optionsOverride && (s = T.extend(s, t.optionsOverride), o = t.optionsOverride.iconClass || o), ! function() {
                    if (s.preventDuplicates) {
                        if (t.message === y) return 1;
                        y = t.message
                    }
                }()) {
                w++, b = f(s, !0);
                var a = null,
                    r = T("<div/>"),
                    l = T("<div/>"),
                    c = T("<div/>"),
                    d = T("<div/>"),
                    u = T(s.closeHtml),
                    h = {
                        intervalId: null,
                        hideEta: null,
                        maxHideTime: null
                    },
                    p = {
                        toastId: w,
                        state: "visible",
                        startTime: new Date,
                        options: s,
                        map: t
                    };
                return t.iconClass && r.addClass(s.toastClass).addClass(o), t.title && (i = t.title, s.escapeHtml && (i = e(t.title)), l.append(i).addClass(s.titleClass), r.append(l)), t.message && (i = t.message, s.escapeHtml && (i = e(t.message)), c.append(i).addClass(s.messageClass), r.append(c)), s.closeButton && (u.addClass(s.closeClass).attr("role", "button"), r.prepend(u)), s.progressBar && (d.addClass(s.progressClass), r.prepend(d)), s.rtl && r.addClass("rtl"), s.newestOnTop ? b.prepend(r) : b.append(r),
                    function() {
                        var e = "";
                        switch (t.iconClass) {
                            case "toast-success":
                            case "toast-info":
                                e = "polite";
                                break;
                            default:
                                e = "assertive"
                        }
                        r.attr("aria-live", e)
                    }(), r.hide(), r[s.showMethod]({
                        duration: s.showDuration,
                        easing: s.showEasing,
                        complete: s.onShown
                    }), 0 < s.timeOut && (a = setTimeout(n, s.timeOut), h.maxHideTime = parseFloat(s.timeOut), h.hideEta = (new Date).getTime() + h.maxHideTime, s.progressBar && (h.intervalId = setInterval(function() {
                        var e = (h.hideEta - (new Date).getTime()) / h.maxHideTime * 100;
                        d.width(e + "%")
                    }, 10))), s.closeOnHover && r.hover(function() {
                        clearTimeout(a), h.hideEta = 0, r.stop(!0, !0)[s.showMethod]({
                            duration: s.showDuration,
                            easing: s.showEasing
                        })
                    }, function() {
                        (0 < s.timeOut || 0 < s.extendedTimeOut) && (a = setTimeout(n, s.extendedTimeOut), h.maxHideTime = parseFloat(s.extendedTimeOut), h.hideEta = (new Date).getTime() + h.maxHideTime)
                    }), !s.onclick && s.tapToDismiss && r.click(n), s.closeButton && u && u.click(function(e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), s.onCloseClick && s.onCloseClick(e), n(!0)
                    }), s.onclick && r.click(function(e) {
                        s.onclick(e), n()
                    }), m(p), s.debug && console && console.log(p), r
            }
        }

        function g() {
            return T.extend({}, {
                tapToDismiss: !0,
                toastClass: "toast",
                containerId: "toast-container",
                debug: !1,
                showMethod: "fadeIn",
                showDuration: 300,
                showEasing: "swing",
                onShown: void 0,
                hideMethod: "fadeOut",
                hideDuration: 1e3,
                hideEasing: "swing",
                onHidden: void 0,
                closeMethod: !1,
                closeDuration: !1,
                closeEasing: !1,
                closeOnHover: !0,
                extendedTimeOut: 1e3,
                iconClasses: {
                    error: "toast-error",
                    info: "toast-info",
                    success: "toast-success",
                    warning: "toast-warning"
                },
                iconClass: "toast-info",
                positionClass: "toast-top-right",
                timeOut: 5e3,
                titleClass: "toast-title",
                messageClass: "toast-message",
                escapeHtml: !1,
                target: "body",
                closeHtml: '<button type="button">&times;</button>',
                closeClass: "toast-close-button",
                newestOnTop: !0,
                preventDuplicates: !1,
                progressBar: !1,
                progressClass: "toast-progress",
                rtl: !1
            }, e.options)
        }

        function v(e) {
            b = b || f(), e.is(":visible") || (e.remove(), e = null, 0 === b.children().length && (b.remove(), y = void 0))
        }
        var b, t, y, w = 0,
            o = "error",
            a = "info",
            r = "success",
            l = "warning",
            e = {
                clear: function(e, t) {
                    var n = g();
                    b || f(n), i(e, n, t) || function(e) {
                        for (var t = b.children(), n = t.length - 1; 0 <= n; n--) i(T(t[n]), e)
                    }(n)
                },
                remove: function(e) {
                    var t = g();
                    return b || f(t), e && 0 === T(":focus", e).length ? void v(e) : void(b.children().length && b.remove())
                },
                error: function(e, t, n) {
                    return s({
                        type: o,
                        iconClass: g().iconClasses.error,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                getContainer: f,
                info: function(e, t, n) {
                    return s({
                        type: a,
                        iconClass: g().iconClasses.info,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                options: {},
                subscribe: function(e) {
                    t = e
                },
                success: function(e, t, n) {
                    return s({
                        type: r,
                        iconClass: g().iconClasses.success,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                version: "2.1.3",
                warning: function(e, t, n) {
                    return s({
                        type: l,
                        iconClass: g().iconClasses.warning,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }
            };
        return e
    }()
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    var e, n, i, s, u, o, h, p, m, f, a, r, g, v, b, l, s = (t && t.fn && t.fn.select2 && t.fn.select2.amd && (e = t.fn.select2.amd), e && e.requirejs || (e ? i = e : e = {}, h = {}, p = {}, m = {}, f = {}, a = Object.prototype.hasOwnProperty, r = [].slice, g = /\.js$/, v = function(e, t) {
            var n, i, s = d(e),
                o = s[0];
            return e = s[1], o && (n = T(o = c(o, t))), o ? e = n && n.normalize ? n.normalize(e, (i = t, function(e) {
                return c(e, i)
            })) : c(e, t) : (o = (s = d(e = c(e, t)))[0], e = s[1], o && (n = T(o))), {
                f: o ? o + "!" + e : e,
                n: e,
                pr: o,
                p: n
            }
        }, b = {
            require: function(e) {
                return w(e)
            },
            exports: function(e) {
                var t = h[e];
                return void 0 !== t ? t : h[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: h[e],
                    config: (t = e, function() {
                        return m && m.config && m.config[t] || {}
                    })
                };
                var t
            }
        }, l = function(e, t, n, i) {
            var s, o, a, r, l, c = [],
                d = typeof n;
            if (i = i || e, "undefined" == d || "function" == d) {
                for (t = !t.length && n.length ? ["require", "exports", "module"] : t, r = 0; r < t.length; r += 1)
                    if ("require" === (o = (a = v(t[r], i)).f)) c[r] = b.require(e);
                    else if ("exports" === o) c[r] = b.exports(e), l = !0;
                else if ("module" === o) s = c[r] = b.module(e);
                else if (y(h, o) || y(p, o) || y(f, o)) c[r] = T(o);
                else {
                    if (!a.p) throw new Error(e + " missing " + o);
                    a.p.load(a.n, w(i, !0), function(t) {
                        return function(e) {
                            h[t] = e
                        }
                    }(o), {}), c[r] = h[o]
                }
                d = n ? n.apply(h[e], c) : void 0, e && (s && s.exports !== u && s.exports !== h[e] ? h[e] = s.exports : d === u && l || (h[e] = d))
            } else e && (h[e] = n)
        }, n = i = o = function(e, t, n, i, s) {
            if ("string" == typeof e) return b[e] ? b[e](t) : T(v(e, t).f);
            if (!e.splice) {
                if ((m = e).deps && o(m.deps, m.callback), !t) return;
                t.splice ? (e = t, t = n, n = null) : e = u
            }
            return t = t || function() {}, "function" == typeof n && (n = i, i = s), i ? l(u, e, t, n) : setTimeout(function() {
                l(u, e, t, n)
            }, 4), o
        }, o.config = function(e) {
            return o(e)
        }, n._defined = h, (s = function(e, t, n) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            t.splice || (n = t, t = []), y(h, e) || y(p, e) || (p[e] = [e, t, n])
        }).amd = {
            jQuery: !0
        }, e.requirejs = n, e.require = i, e.define = s), e.define("almond", function() {}), e.define("jquery", [], function() {
            var e = t || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
        }), e.define("select2/utils", ["jquery"], function(o) {
            function c(e) {
                var t, n = e.prototype,
                    i = [];
                for (t in n) "function" == typeof n[t] && "constructor" !== t && i.push(t);
                return i
            }

            function e() {
                this.listeners = {}
            }
            var t = {
                Extend: function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    var i, s = {}.hasOwnProperty;
                    for (i in t) s.call(t, i) && (e[i] = t[i]);
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                },
                Decorate: function(i, s) {
                    function o() {
                        var e = Array.prototype.unshift,
                            t = s.prototype.constructor.length,
                            n = i.prototype.constructor;
                        0 < t && (e.call(arguments, i.prototype.constructor), n = s.prototype.constructor), n.apply(this, arguments)
                    }
                    var e = c(s),
                        t = c(i);
                    s.displayName = i.displayName, o.prototype = new function() {
                        this.constructor = o
                    };
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        o.prototype[a] = i.prototype[a]
                    }
                    for (var r = 0; r < e.length; r++) {
                        var l = e[r];
                        o.prototype[l] = function(e) {
                            var t = function() {};
                            e in o.prototype && (t = o.prototype[e]);
                            var n = s.prototype[e];
                            return function() {
                                return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments)
                            }
                        }(l)
                    }
                    return o
                }
            };
            return e.prototype.on = function(e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }, e.prototype.trigger = function(e) {
                var t = Array.prototype.slice,
                    n = t.call(arguments, 1);
                this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, e.prototype.invoke = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
            }, t.Observable = e, t.generateChars = function(e) {
                for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                return t
            }, t.bind = function(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }, t._convertData = function(e) {
                for (var t in e) {
                    var n = t.split("-"),
                        i = e;
                    if (1 !== n.length) {
                        for (var s = 0; s < n.length; s++) {
                            var o = n[s];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), s == n.length - 1 && (i[o] = e[t]), i = i[o]
                        }
                        delete e[t]
                    }
                }
                return e
            }, t.hasScroll = function(e, t) {
                var n = o(t),
                    i = t.style.overflowX,
                    s = t.style.overflowY;
                return (i !== s || "hidden" !== s && "visible" !== s) && ("scroll" === i || "scroll" === s || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth)
            }, t.escapeMarkup = function(e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                    return t[e]
                })
            }, t.appendMany = function(e, t) {
                var n;
                "1.7" === o.fn.jquery.substr(0, 3) && (n = o(), o.map(t, function(e) {
                    n = n.add(e)
                }), t = n), e.append(t)
            }, t
        }), e.define("select2/results", ["jquery", "./utils"], function(u, e) {
            function i(e, t, n) {
                this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this)
            }
            return e.Extend(i, e.Observable), i.prototype.render = function() {
                var e = u('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e
            }, i.prototype.clear = function() {
                this.$results.empty()
            }, i.prototype.displayMessage = function(e) {
                var t = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var n = u('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    i = this.options.get("translations").get(e.message);
                n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n)
            }, i.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }, i.prototype.append = function(e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var i = e.results[n],
                            i = this.option(i);
                        t.push(i)
                    }
                    this.$results.append(t)
                } else 0 === this.$results.children().length && this.trigger("results:message", {
                    message: "noResults"
                })
            }, i.prototype.position = function(e, t) {
                t.find(".select2-results").append(e)
            }, i.prototype.sort = function(e) {
                return this.options.get("sorter")(e)
            }, i.prototype.highlightFirstItem = function() {
                var e = this.$results.find(".select2-results__option[aria-selected]"),
                    t = e.filter("[aria-selected=true]");
                (0 < t.length ? t : e).first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, i.prototype.setClasses = function() {
                var t = this;
                this.data.current(function(e) {
                    var i = u.map(e, function(e) {
                        return e.id.toString()
                    });
                    t.$results.find(".select2-results__option[aria-selected]").each(function() {
                        var e = u(this),
                            t = u.data(this, "data"),
                            n = "" + t.id;
                        null != t.element && t.element.selected || null == t.element && -1 < u.inArray(n, i) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                    })
                })
            }, i.prototype.showLoading = function(e) {
                this.hideLoading();
                e = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e)
                }, e = this.option(e);
                e.className += " loading-results", this.$results.prepend(e)
            }, i.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }, i.prototype.option = function(e) {
                var t = document.createElement("li");
                t.className = "select2-results__option";
                var n, i = {
                    role: "treeitem",
                    "aria-selected": "false"
                };
                for (n in e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == e.id && delete i["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, delete i["aria-selected"]), i) {
                    var s = i[n];
                    t.setAttribute(n, s)
                }
                if (e.children) {
                    var o = u(t),
                        a = document.createElement("strong");
                    a.className = "select2-results__group", u(a), this.template(e, a);
                    for (var r = [], l = 0; l < e.children.length; l++) {
                        var c = e.children[l],
                            c = this.option(c);
                        r.push(c)
                    }
                    var d = u("<ul></ul>", {
                        class: "select2-results__options select2-results__options--nested"
                    });
                    d.append(r), o.append(a), o.append(d)
                } else this.template(e, t);
                return u.data(t, "data", e), t
            }, i.prototype.bind = function(t, e) {
                var s = this,
                    n = t.id + "-results";
                this.$results.attr("id", n), t.on("results:all", function(e) {
                    s.clear(), s.append(e.data), t.isOpen() && (s.setClasses(), s.highlightFirstItem())
                }), t.on("results:append", function(e) {
                    s.append(e.data), t.isOpen() && s.setClasses()
                }), t.on("query", function(e) {
                    s.hideMessages(), s.showLoading(e)
                }), t.on("select", function() {
                    t.isOpen() && (s.setClasses(), s.highlightFirstItem())
                }), t.on("unselect", function() {
                    t.isOpen() && (s.setClasses(), s.highlightFirstItem())
                }), t.on("open", function() {
                    s.$results.attr("aria-expanded", "true"), s.$results.attr("aria-hidden", "false"), s.setClasses(), s.ensureHighlightVisible()
                }), t.on("close", function() {
                    s.$results.attr("aria-expanded", "false"), s.$results.attr("aria-hidden", "true"), s.$results.removeAttr("aria-activedescendant")
                }), t.on("results:toggle", function() {
                    var e = s.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }), t.on("results:select", function() {
                    var e, t = s.getHighlightedResults();
                    0 !== t.length && (e = t.data("data"), "true" == t.attr("aria-selected") ? s.trigger("close", {}) : s.trigger("select", {
                        data: e
                    }))
                }), t.on("results:previous", function() {
                    var e, t = s.getHighlightedResults(),
                        n = s.$results.find("[aria-selected]"),
                        i = n.index(t);
                    0 !== i && (e = i - 1, 0 === t.length && (e = 0), (i = n.eq(e)).trigger("mouseenter"), t = s.$results.offset().top, n = i.offset().top, i = s.$results.scrollTop() + (n - t), 0 === e ? s.$results.scrollTop(0) : n - t < 0 && s.$results.scrollTop(i))
                }), t.on("results:next", function() {
                    var e, t = s.getHighlightedResults(),
                        n = s.$results.find("[aria-selected]"),
                        i = n.index(t) + 1;
                    i >= n.length || ((e = n.eq(i)).trigger("mouseenter"), t = s.$results.offset().top + s.$results.outerHeight(!1), n = e.offset().top + e.outerHeight(!1), e = s.$results.scrollTop() + n - t, 0 === i ? s.$results.scrollTop(0) : t < n && s.$results.scrollTop(e))
                }), t.on("results:focus", function(e) {
                    e.element.addClass("select2-results__option--highlighted")
                }), t.on("results:message", function(e) {
                    s.displayMessage(e)
                }), u.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                    var t = s.$results.scrollTop(),
                        n = s.$results.get(0).scrollHeight - t + e.deltaY,
                        t = 0 < e.deltaY && t - e.deltaY <= 0,
                        n = e.deltaY < 0 && n <= s.$results.height();
                    t ? (s.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : n && (s.$results.scrollTop(s.$results.get(0).scrollHeight - s.$results.height()), e.preventDefault(), e.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                    var t = u(this),
                        n = t.data("data");
                    return "true" === t.attr("aria-selected") ? void(s.options.get("multiple") ? s.trigger("unselect", {
                        originalEvent: e,
                        data: n
                    }) : s.trigger("close", {})) : void s.trigger("select", {
                        originalEvent: e,
                        data: n
                    })
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) {
                    var t = u(this).data("data");
                    s.getHighlightedResults().removeClass("select2-results__option--highlighted"), s.trigger("results:focus", {
                        data: t,
                        element: u(this)
                    })
                })
            }, i.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted")
            }, i.prototype.destroy = function() {
                this.$results.remove()
            }, i.prototype.ensureHighlightVisible = function() {
                var e, t, n, i, s = this.getHighlightedResults();
                0 !== s.length && (e = this.$results.find("[aria-selected]").index(s), i = this.$results.offset().top, t = s.offset().top, n = this.$results.scrollTop() + (t - i), i = t - i, n -= 2 * s.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (i > this.$results.outerHeight() || i < 0) && this.$results.scrollTop(n))
            }, i.prototype.template = function(e, t) {
                var n = this.options.get("templateResult"),
                    i = this.options.get("escapeMarkup"),
                    e = n(e, t);
                null == e ? t.style.display = "none" : "string" == typeof e ? t.innerHTML = i(e) : u(t).append(e)
            }, i
        }), e.define("select2/keys", [], function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, e, s) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this)
            }
            return e.Extend(i, e.Observable), i.prototype.render = function() {
                var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e
            }, i.prototype.bind = function(e, t) {
                var n = this,
                    i = (e.id, e.id + "-results");
                this.container = e, this.$selection.on("focus", function(e) {
                    n.trigger("focus", e)
                }), this.$selection.on("blur", function(e) {
                    n._handleBlur(e)
                }), this.$selection.on("keydown", function(e) {
                    n.trigger("keypress", e), e.which === s.SPACE && e.preventDefault()
                }), e.on("results:focus", function(e) {
                    n.$selection.attr("aria-activedescendant", e.data._resultId)
                }), e.on("selection:update", function(e) {
                    n.update(e.data)
                }), e.on("open", function() {
                    n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e)
                }), e.on("close", function() {
                    n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(e)
                }), e.on("enable", function() {
                    n.$selection.attr("tabindex", n._tabindex)
                }), e.on("disable", function() {
                    n.$selection.attr("tabindex", "-1")
                })
            }, i.prototype._handleBlur = function(e) {
                var t = this;
                window.setTimeout(function() {
                    document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
                }, 1)
            }, i.prototype._attachCloseHandler = function(e) {
                n(document.body).on("mousedown.select2." + e.id, function(e) {
                    var t = n(e.target).closest(".select2");
                    n(".select2.select2-container--open").each(function() {
                        var e = n(this);
                        this != t[0] && e.data("element").select2("close")
                    })
                })
            }, i.prototype._detachCloseHandler = function(e) {
                n(document.body).off("mousedown.select2." + e.id)
            }, i.prototype.position = function(e, t) {
                t.find(".selection").append(e)
            }, i.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }, i.prototype.update = function(e) {
                throw new Error("The `update` method must be defined in child classes.")
            }, i
        }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
            function s() {
                s.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(s, t), s.prototype.render = function() {
                var e = s.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
            }, s.prototype.bind = function(t, e) {
                var n = this;
                s.__super__.bind.apply(this, arguments);
                var i = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
                    1 === e.which && n.trigger("toggle", {
                        originalEvent: e
                    })
                }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), t.on("focus", function(e) {
                    t.isOpen() || n.$selection.focus()
                }), t.on("selection:update", function(e) {
                    n.update(e.data)
                })
            }, s.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }, s.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }, s.prototype.selectionContainer = function() {
                return e("<span></span>")
            }, s.prototype.update = function(e) {
                var t, n;
                0 !== e.length ? (t = e[0], n = this.$selection.find(".select2-selection__rendered"), e = this.display(t, n), n.empty().append(e), n.prop("title", t.title || t.text)) : this.clear()
            }, s
        }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(i, e, r) {
            function s(e, t) {
                s.__super__.constructor.apply(this, arguments)
            }
            return r.Extend(s, e), s.prototype.render = function() {
                var e = s.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
            }, s.prototype.bind = function(e, t) {
                var n = this;
                s.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                    n.trigger("toggle", {
                        originalEvent: e
                    })
                }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                    var t;
                    n.options.get("disabled") || (t = i(this).parent().data("data"), n.trigger("unselect", {
                        originalEvent: e,
                        data: t
                    }))
                })
            }, s.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }, s.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }, s.prototype.selectionContainer = function() {
                return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }, s.prototype.update = function(e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = e[n],
                            s = this.selectionContainer(),
                            o = this.display(i, s);
                        s.append(o), s.prop("title", i.title || i.text), s.data("data", i), t.push(s)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    r.appendMany(a, t)
                }
            }, s
        }), e.define("select2/selection/placeholder", ["../utils"], function(e) {
            function t(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
            }
            return t.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }), t
            }, t.prototype.createPlaceholder = function(e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
            }, t.prototype.update = function(e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (1 < t.length || n) return e.call(this, t);
                this.clear();
                t = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(t)
            }, t
        }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(n, i) {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                    i._handleClear(e)
                }), t.on("keypress", function(e) {
                    i._handleKeyboardClear(e, t)
                })
            }, e.prototype._handleClear = function(e, t) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        t.stopPropagation();
                        for (var i = n.data("data"), s = 0; s < i.length; s++) {
                            var o = {
                                data: i[s]
                            };
                            if (this.trigger("unselect", o), o.prevented) return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, e.prototype._handleKeyboardClear = function(e, t, n) {
                n.isOpen() || t.which != i.DELETE && t.which != i.BACKSPACE || this._handleClear(t)
            }, e.prototype.update = function(e, t) {
                e.call(this, t), 0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length || ((e = n('<span class="select2-selection__clear">&times;</span>')).data("data", t), this.$selection.find(".select2-selection__rendered").prepend(e))
            }, e
        }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(n, e, o) {
            function t(e, t, n) {
                e.call(this, t, n)
            }
            return t.prototype.render = function(e) {
                var t = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = t, this.$search = t.find("input");
                e = e.call(this);
                return this._transferTabIndex(), e
            }, t.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("open", function() {
                    i.$search.trigger("focus")
                }), t.on("close", function() {
                    i.$search.val(""), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus")
                }), t.on("enable", function() {
                    i.$search.prop("disabled", !1), i._transferTabIndex()
                }), t.on("disable", function() {
                    i.$search.prop("disabled", !0)
                }), t.on("focus", function(e) {
                    i.$search.trigger("focus")
                }), t.on("results:focus", function(e) {
                    i.$search.attr("aria-activedescendant", e.id)
                }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                    i.trigger("focus", e)
                }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                    i._handleBlur(e)
                }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                    var t;
                    e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === o.BACKSPACE && "" === i.$search.val() && 0 < (t = i.$searchContainer.prev(".select2-selection__choice")).length && (t = t.data("data"), i.searchRemoveChoice(t), e.preventDefault())
                });
                var t = document.documentMode,
                    s = t && t <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                    return s ? void i.$selection.off("input.search input.searchcheck") : void i.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                    var t;
                    s && "input" === e.type ? i.$selection.off("input.search input.searchcheck") : (t = e.which) != o.SHIFT && t != o.CTRL && t != o.ALT && t != o.TAB && i.handleSearch(e)
                })
            }, t.prototype._transferTabIndex = function(e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, t.prototype.createPlaceholder = function(e, t) {
                this.$search.attr("placeholder", t.text)
            }, t.prototype.update = function(e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
            }, t.prototype.handleSearch = function() {
                var e;
                this.resizeSearch(), this._keyUpPrevented || (e = this.$search.val(), this.trigger("query", {
                    term: e
                })), this._keyUpPrevented = !1
            }, t.prototype.searchRemoveChoice = function(e, t) {
                this.trigger("unselect", {
                    data: t
                }), this.$search.val(t.text), this.handleSearch()
            }, t.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", e)
            }, t
        }), e.define("select2/selection/eventRelay", ["jquery"], function(a) {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var i = this,
                    s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                    o = ["opening", "closing", "selecting", "unselecting"];
                e.call(this, t, n), t.on("*", function(e, t) {
                    var n; - 1 !== a.inArray(e, s) && (t = t || {}, n = a.Event("select2:" + e, {
                        params: t
                    }), i.$element.trigger(n), -1 !== a.inArray(e, o) && (t.prevented = n.isDefaultPrevented()))
                })
            }, e
        }), e.define("select2/translation", ["jquery", "require"], function(t, n) {
            function i(e) {
                this.dict = e || {}
            }
            return i.prototype.all = function() {
                return this.dict
            }, i.prototype.get = function(e) {
                return this.dict[e]
            }, i.prototype.extend = function(e) {
                this.dict = t.extend({}, e.all(), this.dict)
            }, i._cache = {}, i.loadPath = function(e) {
                var t;
                return e in i._cache || (t = n(e), i._cache[e] = t), new i(i._cache[e])
            }, i
        }), e.define("select2/diacritics", [], function() {
            return {
                "â’¶": "A",
                "ï¼¡": "A",
                "Ã€": "A",
                "Ã": "A",
                "Ã‚": "A",
                "áº¦": "A",
                "áº¤": "A",
                "áºª": "A",
                "áº¨": "A",
                "Ãƒ": "A",
                "Ä€": "A",
                "Ä‚": "A",
                "áº°": "A",
                "áº®": "A",
                "áº´": "A",
                "áº²": "A",
                "È¦": "A",
                "Ç ": "A",
                "Ã„": "A",
                "Çž": "A",
                "áº¢": "A",
                "Ã…": "A",
                "Çº": "A",
                "Ç": "A",
                "È€": "A",
                "È‚": "A",
                "áº ": "A",
                "áº¬": "A",
                "áº¶": "A",
                "á¸€": "A",
                "Ä„": "A",
                "Èº": "A",
                "â±¯": "A",
                "êœ²": "AA",
                "Ã†": "AE",
                "Ç¼": "AE",
                "Ç¢": "AE",
                "êœ´": "AO",
                "êœ¶": "AU",
                "êœ¸": "AV",
                "êœº": "AV",
                "êœ¼": "AY",
                "â’·": "B",
                "ï¼¢": "B",
                "á¸‚": "B",
                "á¸„": "B",
                "á¸†": "B",
                "Éƒ": "B",
                "Æ‚": "B",
                "Æ": "B",
                "â’¸": "C",
                "ï¼£": "C",
                "Ä†": "C",
                "Äˆ": "C",
                "ÄŠ": "C",
                "ÄŒ": "C",
                "Ã‡": "C",
                "á¸ˆ": "C",
                "Æ‡": "C",
                "È»": "C",
                "êœ¾": "C",
                "â’¹": "D",
                "ï¼¤": "D",
                "á¸Š": "D",
                "ÄŽ": "D",
                "á¸Œ": "D",
                "á¸": "D",
                "á¸’": "D",
                "á¸Ž": "D",
                "Ä": "D",
                "Æ‹": "D",
                "ÆŠ": "D",
                "Æ‰": "D",
                "ê¹": "D",
                "Ç±": "DZ",
                "Ç„": "DZ",
                "Ç²": "Dz",
                "Ç…": "Dz",
                "â’º": "E",
                "ï¼¥": "E",
                "Ãˆ": "E",
                "Ã‰": "E",
                "ÃŠ": "E",
                "á»€": "E",
                "áº¾": "E",
                "á»„": "E",
                "á»‚": "E",
                "áº¼": "E",
                "Ä’": "E",
                "á¸”": "E",
                "á¸–": "E",
                "Ä”": "E",
                "Ä–": "E",
                "Ã‹": "E",
                "áºº": "E",
                "Äš": "E",
                "È„": "E",
                "È†": "E",
                "áº¸": "E",
                "á»†": "E",
                "È¨": "E",
                "á¸œ": "E",
                "Ä˜": "E",
                "á¸˜": "E",
                "á¸š": "E",
                "Æ": "E",
                "ÆŽ": "E",
                "â’»": "F",
                "ï¼¦": "F",
                "á¸ž": "F",
                "Æ‘": "F",
                "ê»": "F",
                "â’¼": "G",
                "ï¼§": "G",
                "Ç´": "G",
                "Äœ": "G",
                "á¸ ": "G",
                "Äž": "G",
                "Ä ": "G",
                "Ç¦": "G",
                "Ä¢": "G",
                "Ç¤": "G",
                "Æ“": "G",
                "êž ": "G",
                "ê½": "G",
                "ê¾": "G",
                "â’½": "H",
                "ï¼¨": "H",
                "Ä¤": "H",
                "á¸¢": "H",
                "á¸¦": "H",
                "Èž": "H",
                "á¸¤": "H",
                "á¸¨": "H",
                "á¸ª": "H",
                "Ä¦": "H",
                "â±§": "H",
                "â±µ": "H",
                "êž": "H",
                "â’¾": "I",
                "ï¼©": "I",
                "ÃŒ": "I",
                "Ã": "I",
                "ÃŽ": "I",
                "Ä¨": "I",
                "Äª": "I",
                "Ä¬": "I",
                "Ä°": "I",
                "Ã": "I",
                "á¸®": "I",
                "á»ˆ": "I",
                "Ç": "I",
                "Èˆ": "I",
                "ÈŠ": "I",
                "á»Š": "I",
                "Ä®": "I",
                "á¸¬": "I",
                "Æ—": "I",
                "â’¿": "J",
                "ï¼ª": "J",
                "Ä´": "J",
                "Éˆ": "J",
                "â“€": "K",
                "ï¼«": "K",
                "á¸°": "K",
                "Ç¨": "K",
                "á¸²": "K",
                "Ä¶": "K",
                "á¸´": "K",
                "Æ˜": "K",
                "â±©": "K",
                "ê€": "K",
                "ê‚": "K",
                "ê„": "K",
                "êž¢": "K",
                "â“": "L",
                "ï¼¬": "L",
                "Ä¿": "L",
                "Ä¹": "L",
                "Ä½": "L",
                "á¸¶": "L",
                "á¸¸": "L",
                "Ä»": "L",
                "á¸¼": "L",
                "á¸º": "L",
                "Å": "L",
                "È½": "L",
                "â±¢": "L",
                "â± ": "L",
                "êˆ": "L",
                "ê†": "L",
                "êž€": "L",
                "Ç‡": "LJ",
                "Çˆ": "Lj",
                "â“‚": "M",
                "ï¼­": "M",
                "á¸¾": "M",
                "á¹€": "M",
                "á¹‚": "M",
                "â±®": "M",
                "Æœ": "M",
                "â“ƒ": "N",
                "ï¼®": "N",
                "Ç¸": "N",
                "Åƒ": "N",
                "Ã‘": "N",
                "á¹„": "N",
                "Å‡": "N",
                "á¹†": "N",
                "Å…": "N",
                "á¹Š": "N",
                "á¹ˆ": "N",
                "È ": "N",
                "Æ": "N",
                "êž": "N",
                "êž¤": "N",
                "ÇŠ": "NJ",
                "Ç‹": "Nj",
                "â“„": "O",
                "ï¼¯": "O",
                "Ã’": "O",
                "Ã“": "O",
                "Ã”": "O",
                "á»’": "O",
                "á»": "O",
                "á»–": "O",
                "á»”": "O",
                "Ã•": "O",
                "á¹Œ": "O",
                "È¬": "O",
                "á¹Ž": "O",
                "ÅŒ": "O",
                "á¹": "O",
                "á¹’": "O",
                "ÅŽ": "O",
                "È®": "O",
                "È°": "O",
                "Ã–": "O",
                "Èª": "O",
                "á»Ž": "O",
                "Å": "O",
                "Ç‘": "O",
                "ÈŒ": "O",
                "ÈŽ": "O",
                "Æ ": "O",
                "á»œ": "O",
                "á»š": "O",
                "á» ": "O",
                "á»ž": "O",
                "á»¢": "O",
                "á»Œ": "O",
                "á»˜": "O",
                "Çª": "O",
                "Ç¬": "O",
                "Ã˜": "O",
                "Ç¾": "O",
                "Æ†": "O",
                "ÆŸ": "O",
                "êŠ": "O",
                "êŒ": "O",
                "Æ¢": "OI",
                "êŽ": "OO",
                "È¢": "OU",
                "â“…": "P",
                "ï¼°": "P",
                "á¹”": "P",
                "á¹–": "P",
                "Æ¤": "P",
                "â±£": "P",
                "ê": "P",
                "ê’": "P",
                "ê”": "P",
                "â“†": "Q",
                "ï¼±": "Q",
                "ê–": "Q",
                "ê˜": "Q",
                "ÉŠ": "Q",
                "â“‡": "R",
                "ï¼²": "R",
                "Å”": "R",
                "á¹˜": "R",
                "Å˜": "R",
                "È": "R",
                "È’": "R",
                "á¹š": "R",
                "á¹œ": "R",
                "Å–": "R",
                "á¹ž": "R",
                "ÉŒ": "R",
                "â±¤": "R",
                "êš": "R",
                "êž¦": "R",
                "êž‚": "R",
                "â“ˆ": "S",
                "ï¼³": "S",
                "áºž": "S",
                "Åš": "S",
                "á¹¤": "S",
                "Åœ": "S",
                "á¹ ": "S",
                "Å ": "S",
                "á¹¦": "S",
                "á¹¢": "S",
                "á¹¨": "S",
                "È˜": "S",
                "Åž": "S",
                "â±¾": "S",
                "êž¨": "S",
                "êž„": "S",
                "â“‰": "T",
                "ï¼´": "T",
                "á¹ª": "T",
                "Å¤": "T",
                "á¹¬": "T",
                "Èš": "T",
                "Å¢": "T",
                "á¹°": "T",
                "á¹®": "T",
                "Å¦": "T",
                "Æ¬": "T",
                "Æ®": "T",
                "È¾": "T",
                "êž†": "T",
                "êœ¨": "TZ",
                "â“Š": "U",
                "ï¼µ": "U",
                "Ã™": "U",
                "Ãš": "U",
                "Ã›": "U",
                "Å¨": "U",
                "á¹¸": "U",
                "Åª": "U",
                "á¹º": "U",
                "Å¬": "U",
                "Ãœ": "U",
                "Ç›": "U",
                "Ç—": "U",
                "Ç•": "U",
                "Ç™": "U",
                "á»¦": "U",
                "Å®": "U",
                "Å°": "U",
                "Ç“": "U",
                "È”": "U",
                "È–": "U",
                "Æ¯": "U",
                "á»ª": "U",
                "á»¨": "U",
                "á»®": "U",
                "á»¬": "U",
                "á»°": "U",
                "á»¤": "U",
                "á¹²": "U",
                "Å²": "U",
                "á¹¶": "U",
                "á¹´": "U",
                "É„": "U",
                "â“‹": "V",
                "ï¼¶": "V",
                "á¹¼": "V",
                "á¹¾": "V",
                "Æ²": "V",
                "êž": "V",
                "É…": "V",
                "ê ": "VY",
                "â“Œ": "W",
                "ï¼·": "W",
                "áº€": "W",
                "áº‚": "W",
                "Å´": "W",
                "áº†": "W",
                "áº„": "W",
                "áºˆ": "W",
                "â±²": "W",
                "â“": "X",
                "ï¼¸": "X",
                "áºŠ": "X",
                "áºŒ": "X",
                "â“Ž": "Y",
                "ï¼¹": "Y",
                "á»²": "Y",
                "Ã": "Y",
                "Å¶": "Y",
                "á»¸": "Y",
                "È²": "Y",
                "áºŽ": "Y",
                "Å¸": "Y",
                "á»¶": "Y",
                "á»´": "Y",
                "Æ³": "Y",
                "ÉŽ": "Y",
                "á»¾": "Y",
                "â“": "Z",
                "ï¼º": "Z",
                "Å¹": "Z",
                "áº": "Z",
                "Å»": "Z",
                "Å½": "Z",
                "áº’": "Z",
                "áº”": "Z",
                "Æµ": "Z",
                "È¤": "Z",
                "â±¿": "Z",
                "â±«": "Z",
                "ê¢": "Z",
                "â“": "a",
                "ï½": "a",
                "áºš": "a",
                "Ã ": "a",
                "Ã¡": "a",
                "Ã¢": "a",
                "áº§": "a",
                "áº¥": "a",
                "áº«": "a",
                "áº©": "a",
                "Ã£": "a",
                "Ä": "a",
                "Äƒ": "a",
                "áº±": "a",
                "áº¯": "a",
                "áºµ": "a",
                "áº³": "a",
                "È§": "a",
                "Ç¡": "a",
                "Ã¤": "a",
                "ÇŸ": "a",
                "áº£": "a",
                "Ã¥": "a",
                "Ç»": "a",
                "ÇŽ": "a",
                "È": "a",
                "Èƒ": "a",
                "áº¡": "a",
                "áº­": "a",
                "áº·": "a",
                "á¸": "a",
                "Ä…": "a",
                "â±¥": "a",
                "É": "a",
                "êœ³": "aa",
                "Ã¦": "ae",
                "Ç½": "ae",
                "Ç£": "ae",
                "êœµ": "ao",
                "êœ·": "au",
                "êœ¹": "av",
                "êœ»": "av",
                "êœ½": "ay",
                "â“‘": "b",
                "ï½‚": "b",
                "á¸ƒ": "b",
                "á¸…": "b",
                "á¸‡": "b",
                "Æ€": "b",
                "Æƒ": "b",
                "É“": "b",
                "â“’": "c",
                "ï½ƒ": "c",
                "Ä‡": "c",
                "Ä‰": "c",
                "Ä‹": "c",
                "Ä": "c",
                "Ã§": "c",
                "á¸‰": "c",
                "Æˆ": "c",
                "È¼": "c",
                "êœ¿": "c",
                "â†„": "c",
                "â““": "d",
                "ï½„": "d",
                "á¸‹": "d",
                "Ä": "d",
                "á¸": "d",
                "á¸‘": "d",
                "á¸“": "d",
                "á¸": "d",
                "Ä‘": "d",
                "ÆŒ": "d",
                "É–": "d",
                "É—": "d",
                "êº": "d",
                "Ç³": "dz",
                "Ç†": "dz",
                "â“”": "e",
                "ï½…": "e",
                "Ã¨": "e",
                "Ã©": "e",
                "Ãª": "e",
                "á»": "e",
                "áº¿": "e",
                "á»…": "e",
                "á»ƒ": "e",
                "áº½": "e",
                "Ä“": "e",
                "á¸•": "e",
                "á¸—": "e",
                "Ä•": "e",
                "Ä—": "e",
                "Ã«": "e",
                "áº»": "e",
                "Ä›": "e",
                "È…": "e",
                "È‡": "e",
                "áº¹": "e",
                "á»‡": "e",
                "È©": "e",
                "á¸": "e",
                "Ä™": "e",
                "á¸™": "e",
                "á¸›": "e",
                "É‡": "e",
                "É›": "e",
                "Ç": "e",
                "â“•": "f",
                "ï½†": "f",
                "á¸Ÿ": "f",
                "Æ’": "f",
                "ê¼": "f",
                "â“–": "g",
                "ï½‡": "g",
                "Çµ": "g",
                "Ä": "g",
                "á¸¡": "g",
                "ÄŸ": "g",
                "Ä¡": "g",
                "Ç§": "g",
                "Ä£": "g",
                "Ç¥": "g",
                "É ": "g",
                "êž¡": "g",
                "áµ¹": "g",
                "ê¿": "g",
                "â“—": "h",
                "ï½ˆ": "h",
                "Ä¥": "h",
                "á¸£": "h",
                "á¸§": "h",
                "ÈŸ": "h",
                "á¸¥": "h",
                "á¸©": "h",
                "á¸«": "h",
                "áº–": "h",
                "Ä§": "h",
                "â±¨": "h",
                "â±¶": "h",
                "É¥": "h",
                "Æ•": "hv",
                "â“˜": "i",
                "ï½‰": "i",
                "Ã¬": "i",
                "Ã­": "i",
                "Ã®": "i",
                "Ä©": "i",
                "Ä«": "i",
                "Ä­": "i",
                "Ã¯": "i",
                "á¸¯": "i",
                "á»‰": "i",
                "Ç": "i",
                "È‰": "i",
                "È‹": "i",
                "á»‹": "i",
                "Ä¯": "i",
                "á¸­": "i",
                "É¨": "i",
                "Ä±": "i",
                "â“™": "j",
                "ï½Š": "j",
                "Äµ": "j",
                "Ç°": "j",
                "É‰": "j",
                "â“š": "k",
                "ï½‹": "k",
                "á¸±": "k",
                "Ç©": "k",
                "á¸³": "k",
                "Ä·": "k",
                "á¸µ": "k",
                "Æ™": "k",
                "â±ª": "k",
                "ê": "k",
                "êƒ": "k",
                "ê…": "k",
                "êž£": "k",
                "â“›": "l",
                "ï½Œ": "l",
                "Å€": "l",
                "Äº": "l",
                "Ä¾": "l",
                "á¸·": "l",
                "á¸¹": "l",
                "Ä¼": "l",
                "á¸½": "l",
                "á¸»": "l",
                "Å¿": "l",
                "Å‚": "l",
                "Æš": "l",
                "É«": "l",
                "â±¡": "l",
                "ê‰": "l",
                "êž": "l",
                "ê‡": "l",
                "Ç‰": "lj",
                "â“œ": "m",
                "ï½": "m",
                "á¸¿": "m",
                "á¹": "m",
                "á¹ƒ": "m",
                "É±": "m",
                "É¯": "m",
                "â“": "n",
                "ï½Ž": "n",
                "Ç¹": "n",
                "Å„": "n",
                "Ã±": "n",
                "á¹…": "n",
                "Åˆ": "n",
                "á¹‡": "n",
                "Å†": "n",
                "á¹‹": "n",
                "á¹‰": "n",
                "Æž": "n",
                "É²": "n",
                "Å‰": "n",
                "êž‘": "n",
                "êž¥": "n",
                "ÇŒ": "nj",
                "â“ž": "o",
                "ï½": "o",
                "Ã²": "o",
                "Ã³": "o",
                "Ã´": "o",
                "á»“": "o",
                "á»‘": "o",
                "á»—": "o",
                "á»•": "o",
                "Ãµ": "o",
                "á¹": "o",
                "È­": "o",
                "á¹": "o",
                "Å": "o",
                "á¹‘": "o",
                "á¹“": "o",
                "Å": "o",
                "È¯": "o",
                "È±": "o",
                "Ã¶": "o",
                "È«": "o",
                "á»": "o",
                "Å‘": "o",
                "Ç’": "o",
                "È": "o",
                "È": "o",
                "Æ¡": "o",
                "á»": "o",
                "á»›": "o",
                "á»¡": "o",
                "á»Ÿ": "o",
                "á»£": "o",
                "á»": "o",
                "á»™": "o",
                "Ç«": "o",
                "Ç­": "o",
                "Ã¸": "o",
                "Ç¿": "o",
                "É”": "o",
                "ê‹": "o",
                "ê": "o",
                "Éµ": "o",
                "Æ£": "oi",
                "È£": "ou",
                "ê": "oo",
                "â“Ÿ": "p",
                "ï½": "p",
                "á¹•": "p",
                "á¹—": "p",
                "Æ¥": "p",
                "áµ½": "p",
                "ê‘": "p",
                "ê“": "p",
                "ê•": "p",
                "â“ ": "q",
                "ï½‘": "q",
                "É‹": "q",
                "ê—": "q",
                "ê™": "q",
                "â“¡": "r",
                "ï½’": "r",
                "Å•": "r",
                "á¹™": "r",
                "Å™": "r",
                "È‘": "r",
                "È“": "r",
                "á¹›": "r",
                "á¹": "r",
                "Å—": "r",
                "á¹Ÿ": "r",
                "É": "r",
                "É½": "r",
                "ê›": "r",
                "êž§": "r",
                "êžƒ": "r",
                "â“¢": "s",
                "ï½“": "s",
                "ÃŸ": "s",
                "Å›": "s",
                "á¹¥": "s",
                "Å": "s",
                "á¹¡": "s",
                "Å¡": "s",
                "á¹§": "s",
                "á¹£": "s",
                "á¹©": "s",
                "È™": "s",
                "ÅŸ": "s",
                "È¿": "s",
                "êž©": "s",
                "êž…": "s",
                "áº›": "s",
                "â“£": "t",
                "ï½”": "t",
                "á¹«": "t",
                "áº—": "t",
                "Å¥": "t",
                "á¹­": "t",
                "È›": "t",
                "Å£": "t",
                "á¹±": "t",
                "á¹¯": "t",
                "Å§": "t",
                "Æ­": "t",
                "Êˆ": "t",
                "â±¦": "t",
                "êž‡": "t",
                "êœ©": "tz",
                "â“¤": "u",
                "ï½•": "u",
                "Ã¹": "u",
                "Ãº": "u",
                "Ã»": "u",
                "Å©": "u",
                "á¹¹": "u",
                "Å«": "u",
                "á¹»": "u",
                "Å­": "u",
                "Ã¼": "u",
                "Çœ": "u",
                "Ç˜": "u",
                "Ç–": "u",
                "Çš": "u",
                "á»§": "u",
                "Å¯": "u",
                "Å±": "u",
                "Ç”": "u",
                "È•": "u",
                "È—": "u",
                "Æ°": "u",
                "á»«": "u",
                "á»©": "u",
                "á»¯": "u",
                "á»­": "u",
                "á»±": "u",
                "á»¥": "u",
                "á¹³": "u",
                "Å³": "u",
                "á¹·": "u",
                "á¹µ": "u",
                "Ê‰": "u",
                "â“¥": "v",
                "ï½–": "v",
                "á¹½": "v",
                "á¹¿": "v",
                "Ê‹": "v",
                "êŸ": "v",
                "ÊŒ": "v",
                "ê¡": "vy",
                "â“¦": "w",
                "ï½—": "w",
                "áº": "w",
                "áºƒ": "w",
                "Åµ": "w",
                "áº‡": "w",
                "áº…": "w",
                "áº˜": "w",
                "áº‰": "w",
                "â±³": "w",
                "â“§": "x",
                "ï½˜": "x",
                "áº‹": "x",
                "áº": "x",
                "â“¨": "y",
                "ï½™": "y",
                "á»³": "y",
                "Ã½": "y",
                "Å·": "y",
                "á»¹": "y",
                "È³": "y",
                "áº": "y",
                "Ã¿": "y",
                "á»·": "y",
                "áº™": "y",
                "á»µ": "y",
                "Æ´": "y",
                "É": "y",
                "á»¿": "y",
                "â“©": "z",
                "ï½š": "z",
                "Åº": "z",
                "áº‘": "z",
                "Å¼": "z",
                "Å¾": "z",
                "áº“": "z",
                "áº•": "z",
                "Æ¶": "z",
                "È¥": "z",
                "É€": "z",
                "â±¬": "z",
                "ê£": "z",
                "Î†": "Î‘",
                "Îˆ": "Î•",
                "Î‰": "Î—",
                "ÎŠ": "Î™",
                "Îª": "Î™",
                "ÎŒ": "ÎŸ",
                "ÎŽ": "Î¥",
                "Î«": "Î¥",
                "Î": "Î©",
                "Î¬": "Î±",
                "Î­": "Îµ",
                "Î®": "Î·",
                "Î¯": "Î¹",
                "ÏŠ": "Î¹",
                "Î": "Î¹",
                "ÏŒ": "Î¿",
                "Ï": "Ï…",
                "Ï‹": "Ï…",
                "Î°": "Ï…",
                "Ï‰": "Ï‰",
                "Ï‚": "Ïƒ"
            }
        }), e.define("select2/data/base", ["../utils"], function(n) {
            function i(e, t) {
                i.__super__.constructor.call(this)
            }
            return n.Extend(i, n.Observable), i.prototype.current = function(e) {
                throw new Error("The `current` method must be defined in child classes.")
            }, i.prototype.query = function(e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }, i.prototype.bind = function(e, t) {}, i.prototype.destroy = function() {}, i.prototype.generateResultId = function(e, t) {
                e = e.id + "-result-";
                return (e += n.generateChars(4)) + (null != t.id ? "-" + t.id.toString() : "-" + n.generateChars(4))
            }, i
        }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, a) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }
            return t.Extend(n, e), n.prototype.current = function(e) {
                var t = [],
                    n = this;
                this.$element.find(":selected").each(function() {
                    var e = a(this),
                        e = n.item(e);
                    t.push(e)
                }), e(t)
            }, n.prototype.select = function(s) {
                var e, o = this;
                if (s.selected = !0, a(s.element).is("option")) return s.element.selected = !0, void this.$element.trigger("change");
                this.$element.prop("multiple") ? this.current(function(e) {
                    var t = [];
                    (s = [s]).push.apply(s, e);
                    for (var n = 0; n < s.length; n++) {
                        var i = s[n].id; - 1 === a.inArray(i, t) && t.push(i)
                    }
                    o.$element.val(t), o.$element.trigger("change")
                }) : (e = s.id, this.$element.val(e), this.$element.trigger("change"))
            }, n.prototype.unselect = function(s) {
                var o = this;
                if (this.$element.prop("multiple")) return s.selected = !1, a(s.element).is("option") ? (s.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = e[n].id;
                        i !== s.id && -1 === a.inArray(i, t) && t.push(i)
                    }
                    o.$element.val(t), o.$element.trigger("change")
                })
            }, n.prototype.bind = function(e, t) {
                var n = this;
                (this.container = e).on("select", function(e) {
                    n.select(e.data)
                }), e.on("unselect", function(e) {
                    n.unselect(e.data)
                })
            }, n.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    a.removeData(this, "data")
                })
            }, n.prototype.query = function(t, e) {
                var n = [],
                    i = this;
                this.$element.children().each(function() {
                    var e = a(this);
                    (e.is("option") || e.is("optgroup")) && (e = i.item(e), null !== (e = i.matches(t, e)) && n.push(e))
                }), e({
                    results: n
                })
            }, n.prototype.addOptions = function(e) {
                t.appendMany(this.$element, e)
            }, n.prototype.option = function(e) {
                var t;
                e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                var n = a(t),
                    e = this._normalizeItem(e);
                return e.element = t, a.data(t, "data", e), n
            }, n.prototype.item = function(e) {
                var t = {};
                if (null != (t = a.data(e[0], "data"))) return t;
                if (e.is("option")) t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                };
                else if (e.is("optgroup")) {
                    t = {
                        text: e.prop("label"),
                        children: [],
                        title: e.prop("title")
                    };
                    for (var n = e.children("option"), i = [], s = 0; s < n.length; s++) {
                        var o = a(n[s]),
                            o = this.item(o);
                        i.push(o)
                    }
                    t.children = i
                }
                return (t = this._normalizeItem(t)).element = e[0], a.data(e[0], "data", t), t
            }, n.prototype._normalizeItem = function(e) {
                return a.isPlainObject(e) || (e = {
                    id: e,
                    text: e
                }), null != (e = a.extend({}, {
                    text: ""
                }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), a.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e)
            }, n.prototype.matches = function(e, t) {
                return this.options.get("matcher")(e, t)
            }, n
        }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, c, d) {
            function i(e, t) {
                var n = t.get("data") || [];
                i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
            }
            return c.Extend(i, e), i.prototype.select = function(n) {
                var e = this.$element.find("option").filter(function(e, t) {
                    return t.value == n.id.toString()
                });
                0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n)
            }, i.prototype.convertToOptions = function(e) {
                for (var t = this, n = this.$element.find("option"), i = n.map(function() {
                        return t.item(d(this)).id
                    }).get(), s = [], o = 0; o < e.length; o++) {
                    var a, r, l = this._normalizeItem(e[o]);
                    0 <= d.inArray(l.id, i) ? (a = n.filter(function(e) {
                        return function() {
                            return d(this).val() == e.id
                        }
                    }(l)), r = this.item(a), r = d.extend(!0, {}, l, r), r = this.option(r), a.replaceWith(r)) : (r = this.option(l), l.children && (l = this.convertToOptions(l.children), c.appendMany(r, l)), s.push(r))
                }
                return s
            }, i
        }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, o) {
            function n(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
            }
            return t.Extend(n, e), n.prototype._applyDefaults = function(e) {
                var t = {
                    data: function(e) {
                        return o.extend({}, e, {
                            q: e.term
                        })
                    },
                    transport: function(e, t, n) {
                        e = o.ajax(e);
                        return e.then(t), e.fail(n), e
                    }
                };
                return o.extend({}, t, e, !0)
            }, n.prototype.processResults = function(e) {
                return e
            }, n.prototype.query = function(t, n) {
                function e() {
                    var e = s.transport(s, function(e) {
                        e = i.processResults(e, t);
                        i.options.get("debug") && window.console && console.error && (e && e.results && o.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), n(e)
                    }, function() {
                        e.status && "0" === e.status || i.trigger("results:message", {
                            message: "errorLoading"
                        })
                    });
                    i._request = e
                }
                var i = this;
                null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var s = o.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof s.url && (s.url = s.url.call(this.$element, t)), "function" == typeof s.data && (s.data = s.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
            }, n
        }), e.define("select2/data/tags", ["jquery"], function(r) {
            function e(e, t, n) {
                var i = n.get("tags"),
                    s = n.get("createTag");
                void 0 !== s && (this.createTag = s);
                s = n.get("insertTag");
                if (void 0 !== s && (this.insertTag = s), e.call(this, t, n), r.isArray(i))
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o],
                            a = this._normalizeItem(a),
                            a = this.option(a);
                        this.$element.append(a)
                    }
            }
            return e.prototype.query = function(e, c, d) {
                var u = this;
                return this._removeOldTags(), null == c.term || null != c.page ? void e.call(this, c, d) : void e.call(this, c, function e(t, n) {
                    for (var i = t.results, s = 0; s < i.length; s++) {
                        var o = i[s],
                            a = null != o.children && !e({
                                results: o.children
                            }, !0);
                        if (o.text === c.term || a) return !n && (t.data = i, void d(t))
                    }
                    if (n) return !0;
                    var r, l = u.createTag(c);
                    null != l && ((r = u.option(l)).attr("data-select2-tag", !0), u.addOptions([r]), u.insertTag(i, l)), t.results = i, d(t)
                })
            }, e.prototype.createTag = function(e, t) {
                t = r.trim(t.term);
                return "" === t ? null : {
                    id: t,
                    text: t
                }
            }, e.prototype.insertTag = function(e, t, n) {
                t.unshift(n)
            }, e.prototype._removeOldTags = function(e) {
                this._lastTag, this.$element.find("option[data-select2-tag]").each(function() {
                    this.selected || r(this).remove()
                })
            }, e
        }), e.define("select2/data/tokenizer", ["jquery"], function(c) {
            function e(e, t, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
            }
            return e.prototype.bind = function(e, t, n) {
                e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }, e.prototype.query = function(e, t, n) {
                var i = this;
                t.term = t.term || "";
                var s = this.tokenizer(t, this.options, function(e) {
                    var t = i._normalizeItem(e);
                    i.$element.find("option").filter(function() {
                        return c(this).val() === t.id
                    }).length || ((e = i.option(t)).attr("data-select2-tag", !0), i._removeOldTags(), i.addOptions([e])), i.trigger("select", {
                        data: t
                    })
                });
                s.term !== t.term && (this.$search.length && (this.$search.val(s.term), this.$search.focus()), t.term = s.term), e.call(this, t, n)
            }, e.prototype.tokenizer = function(e, t, n, i) {
                for (var s = n.get("tokenSeparators") || [], o = t.term, a = 0, r = this.createTag || function(e) {
                        return {
                            id: e.term,
                            text: e.term
                        }
                    }; a < o.length;) {
                    var l = o[a]; - 1 !== c.inArray(l, s) ? (l = o.substr(0, a), null != (l = r(c.extend({}, t, {
                        term: l
                    }))) ? (i(l), o = o.substr(a + 1) || "", a = 0) : a++) : a++
                }
                return {
                    term: o
                }
            }, e
        }), e.define("select2/data/minimumInputLength", [], function() {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, n)
            }, e
        }), e.define("select2/data/maximumInputLength", [], function() {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                return t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, n)
            }, e
        }), e.define("select2/data/maximumSelectionLength", [], function() {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
            }
            return e.prototype.query = function(t, n, i) {
                var s = this;
                this.current(function(e) {
                    e = null != e ? e.length : 0;
                    return 0 < s.maximumSelectionLength && e >= s.maximumSelectionLength ? void s.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: s.maximumSelectionLength
                        }
                    }) : void t.call(s, n, i)
                })
            }, e
        }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }
            return e.Extend(n, e.Observable), n.prototype.render = function() {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$dropdown = e
            }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                this.$dropdown.remove()
            }, n
        }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(s, e) {
            function t() {}
            return t.prototype.render = function(e) {
                var t = e.call(this),
                    e = s('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = e, this.$search = e.find("input"), t.prepend(e), t
            }, t.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n), this.$search.on("keydown", function(e) {
                    i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented()
                }), this.$search.on("input", function(e) {
                    s(this).off("keyup")
                }), this.$search.on("keyup input", function(e) {
                    i.handleSearch(e)
                }), t.on("open", function() {
                    i.$search.attr("tabindex", 0), i.$search.focus(), window.setTimeout(function() {
                        i.$search.focus()
                    }, 0)
                }), t.on("close", function() {
                    i.$search.attr("tabindex", -1), i.$search.val("")
                }), t.on("focus", function() {
                    t.isOpen() && i.$search.focus()
                }), t.on("results:all", function(e) {
                    null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
                })
            }, t.prototype.handleSearch = function(e) {
                var t;
                this._keyUpPrevented || (t = this.$search.val(), this.trigger("query", {
                    term: t
                })), this._keyUpPrevented = !1
            }, t.prototype.showSearch = function(e, t) {
                return !0
            }, t
        }), e.define("select2/dropdown/hidePlaceholder", [], function() {
            function e(e, t, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
            }
            return e.prototype.append = function(e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t)
            }, e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }), t
            }, e.prototype.removePlaceholder = function(e, t) {
                for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                    var s = t[i];
                    this.placeholder.id === s.id && n.splice(i, 1)
                }
                return n
            }, e
        }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(s) {
            function e(e, t, n, i) {
                this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }
            return e.prototype.append = function(e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }, e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("query", function(e) {
                    i.lastParams = e, i.loading = !0
                }), t.on("query:append", function(e) {
                    i.lastParams = e, i.loading = !0
                }), this.$results.on("scroll", function() {
                    var e = s.contains(document.documentElement, i.$loadingMore[0]);
                    !i.loading && e && i.$results.offset().top + i.$results.outerHeight(!1) + 50 >= i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) && i.loadMore()
                })
            }, e.prototype.loadMore = function() {
                this.loading = !0;
                var e = s.extend({}, {
                    page: 1
                }, this.lastParams);
                e.page++, this.trigger("query:append", e)
            }, e.prototype.showLoadingMore = function(e, t) {
                return t.pagination && t.pagination.more
            }, e.prototype.createLoadingMore = function() {
                var e = s('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    t = this.options.get("translations").get("loadingMore");
                return e.html(t(this.lastParams)), e
            }, e
        }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(c, a) {
            function e(e, t, n) {
                this.$dropdownParent = n.get("dropdownParent") || c(document.body), e.call(this, t, n)
            }
            return e.prototype.bind = function(e, t, n) {
                var i = this,
                    s = !1;
                e.call(this, t, n), t.on("open", function() {
                    i._showDropdown(), i._attachPositioningHandler(t), s || (s = !0, t.on("results:all", function() {
                        i._positionDropdown(), i._resizeDropdown()
                    }), t.on("results:append", function() {
                        i._positionDropdown(), i._resizeDropdown()
                    }))
                }), t.on("close", function() {
                    i._hideDropdown(), i._detachPositioningHandler(t)
                }), this.$dropdownContainer.on("mousedown", function(e) {
                    e.stopPropagation()
                })
            }, e.prototype.destroy = function(e) {
                e.call(this), this.$dropdownContainer.remove()
            }, e.prototype.position = function(e, t, n) {
                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n
            }, e.prototype.render = function(e) {
                var t = c("<span></span>"),
                    e = e.call(this);
                return t.append(e), this.$dropdownContainer = t
            }, e.prototype._hideDropdown = function(e) {
                this.$dropdownContainer.detach()
            }, e.prototype._attachPositioningHandler = function(e, t) {
                var n = this,
                    i = "scroll.select2." + t.id,
                    s = "resize.select2." + t.id,
                    o = "orientationchange.select2." + t.id,
                    t = this.$container.parents().filter(a.hasScroll);
                t.each(function() {
                    c(this).data("select2-scroll-position", {
                        x: c(this).scrollLeft(),
                        y: c(this).scrollTop()
                    })
                }), t.on(i, function(e) {
                    var t = c(this).data("select2-scroll-position");
                    c(this).scrollTop(t.y)
                }), c(window).on(i + " " + s + " " + o, function(e) {
                    n._positionDropdown(), n._resizeDropdown()
                })
            }, e.prototype._detachPositioningHandler = function(e, t) {
                var n = "scroll.select2." + t.id,
                    i = "resize.select2." + t.id,
                    t = "orientationchange.select2." + t.id;
                this.$container.parents().filter(a.hasScroll).off(n), c(window).off(n + " " + i + " " + t)
            }, e.prototype._positionDropdown = function() {
                var e = c(window),
                    t = this.$dropdown.hasClass("select2-dropdown--above"),
                    n = this.$dropdown.hasClass("select2-dropdown--below"),
                    i = null,
                    s = this.$container.offset();
                s.bottom = s.top + this.$container.outerHeight(!1);
                var o = {
                    height: this.$container.outerHeight(!1)
                };
                o.top = s.top, o.bottom = s.top + o.height;
                var a = this.$dropdown.outerHeight(!1),
                    r = e.scrollTop(),
                    l = e.scrollTop() + e.height(),
                    e = r < s.top - a,
                    r = l > s.bottom + a,
                    l = {
                        left: s.left,
                        top: o.bottom
                    },
                    s = this.$dropdownParent;
                "static" === s.css("position") && (s = s.offsetParent());
                s = s.offset();
                l.top -= s.top, l.left -= s.left, t || n || (i = "below"), r || !e || t ? !e && r && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (l.top = o.top - s.top - a), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(l)
            }, e.prototype._resizeDropdown = function() {
                var e = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
            }, e.prototype._showDropdown = function(e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, e
        }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function e(e, t, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
            }
            return e.prototype.showSearch = function(e, t) {
                return !(function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.children ? n += e(s.children) : n++
                    }
                    return n
                }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
            }, e
        }), e.define("select2/dropdown/selectOnClose", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("close", function(e) {
                    i._handleSelectOnClose(e)
                })
            }, e.prototype._handleSelectOnClose = function(e, t) {
                if (t && null != t.originalSelect2Event) {
                    var n = t.originalSelect2Event;
                    if ("select" === n._type || "unselect" === n._type) return
                }
                n = this.getHighlightedResults();
                n.length < 1 || (null != (n = n.data("data")).element && n.element.selected || null == n.element && n.selected || this.trigger("select", {
                    data: n
                }))
            }, e
        }), e.define("select2/dropdown/closeOnSelect", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("select", function(e) {
                    i._selectTriggered(e)
                }), t.on("unselect", function(e) {
                    i._selectTriggered(e)
                })
            }, e.prototype._selectTriggered = function(e, t) {
                var n = t.originalEvent;
                n && n.ctrlKey || this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t
                })
            }, e
        }), e.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(e) {
                    var t = e.input.length - e.maximum,
                        e = "Please delete " + t + " character";
                    return 1 != t && (e += "s"), e
                },
                inputTooShort: function(e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                },
                loadingMore: function() {
                    return "Loading more resultsâ€¦"
                },
                maximumSelected: function(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searchingâ€¦"
                }
            }
        }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(d, u, h, p, f, m, g, v, b, y, w, t, T, S, x, C, E, P, A, M, k, _, D, $, I, L, H, N, e) {
            function n() {
                this.reset()
            }
            return n.prototype.apply = function(t) {
                var e, n;
                if (null == (t = d.extend(!0, {}, this.defaults, t)).dataAdapter && (null != t.ajax ? t.dataAdapter = x : null != t.data ? t.dataAdapter = S : t.dataAdapter = T, 0 < t.minimumInputLength && (t.dataAdapter = y.Decorate(t.dataAdapter, P)), 0 < t.maximumInputLength && (t.dataAdapter = y.Decorate(t.dataAdapter, A)), 0 < t.maximumSelectionLength && (t.dataAdapter = y.Decorate(t.dataAdapter, M)), t.tags && (t.dataAdapter = y.Decorate(t.dataAdapter, C)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = y.Decorate(t.dataAdapter, E)), null != t.query && (e = u(t.amdBase + "compat/query"), t.dataAdapter = y.Decorate(t.dataAdapter, e)), null != t.initSelection && (e = u(t.amdBase + "compat/initSelection"), t.dataAdapter = y.Decorate(t.dataAdapter, e))), null == t.resultsAdapter && (t.resultsAdapter = h, null != t.ajax && (t.resultsAdapter = y.Decorate(t.resultsAdapter, $)), null != t.placeholder && (t.resultsAdapter = y.Decorate(t.resultsAdapter, D)), t.selectOnClose && (t.resultsAdapter = y.Decorate(t.resultsAdapter, H))), null == t.dropdownAdapter && (t.multiple ? t.dropdownAdapter = k : (n = y.Decorate(k, _), t.dropdownAdapter = n), 0 !== t.minimumResultsForSearch && (t.dropdownAdapter = y.Decorate(t.dropdownAdapter, L)), t.closeOnSelect && (t.dropdownAdapter = y.Decorate(t.dropdownAdapter, N)), null == t.dropdownCssClass && null == t.dropdownCss && null == t.adaptDropdownCssClass || (n = u(t.amdBase + "compat/dropdownCss"), t.dropdownAdapter = y.Decorate(t.dropdownAdapter, n)), t.dropdownAdapter = y.Decorate(t.dropdownAdapter, I)), null == t.selectionAdapter && (t.multiple ? t.selectionAdapter = f : t.selectionAdapter = p, null != t.placeholder && (t.selectionAdapter = y.Decorate(t.selectionAdapter, m)), t.allowClear && (t.selectionAdapter = y.Decorate(t.selectionAdapter, g)), t.multiple && (t.selectionAdapter = y.Decorate(t.selectionAdapter, v)), null == t.containerCssClass && null == t.containerCss && null == t.adaptContainerCssClass || (l = u(t.amdBase + "compat/containerCss"), t.selectionAdapter = y.Decorate(t.selectionAdapter, l)), t.selectionAdapter = y.Decorate(t.selectionAdapter, b)), "string" == typeof t.language && (0 < t.language.indexOf("-") ? (c = t.language.split("-")[0], t.language = [t.language, c]) : t.language = [t.language]), d.isArray(t.language)) {
                    var i = new w;
                    t.language.push("en");
                    for (var s = t.language, o = 0; o < s.length; o++) {
                        var a = s[o],
                            r = {};
                        try {
                            r = w.loadPath(a)
                        } catch (e) {
                            try {
                                a = this.defaults.amdLanguageBase + a, r = w.loadPath(a)
                            } catch (e) {
                                t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + a + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        i.extend(r)
                    }
                    t.translations = i
                } else {
                    var l = w.loadPath(this.defaults.amdLanguageBase + "en"),
                        c = new w(t.language);
                    c.extend(l), t.translations = c
                }
                return t
            }, n.prototype.reset = function() {
                function r(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function(e) {
                        return t[e] || e
                    })
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: y.escapeMarkup,
                    language: e,
                    matcher: function e(t, n) {
                        if ("" === d.trim(t.term)) return n;
                        if (n.children && 0 < n.children.length) {
                            for (var i = d.extend(!0, {}, n), s = n.children.length - 1; 0 <= s; s--) null == e(t, n.children[s]) && i.children.splice(s, 1);
                            return 0 < i.children.length ? i : e(t, i)
                        }
                        var o = r(n.text).toUpperCase(),
                            a = r(t.term).toUpperCase();
                        return -1 < o.indexOf(a) ? n : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(e) {
                        return e
                    },
                    templateResult: function(e) {
                        return e.text
                    },
                    templateSelection: function(e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, n.prototype.set = function(e, t) {
                var n = {};
                n[d.camelCase(e)] = t;
                n = y._convertData(n);
                d.extend(this.defaults, n)
            }, new n
        }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(n, o, i, a) {
            function e(e, t) {
                this.options = e, null != t && this.fromElement(t), this.options = i.apply(this.options), t && t.is("input") && (t = n(this.get("amdBase") + "compat/inputData"), this.options.dataAdapter = a.Decorate(this.options.dataAdapter, t))
            }
            return e.prototype.fromElement = function(e) {
                var t = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                var n, i = o.fn.jquery && "1." == o.fn.jquery.substr(0, 2) && e[0].dataset ? o.extend(!0, {}, e[0].dataset, e.data()) : e.data(),
                    s = o.extend(!0, {}, i);
                for (n in s = a._convertData(s)) - 1 < o.inArray(n, t) || (o.isPlainObject(this.options[n]) ? o.extend(this.options[n], s[n]) : this.options[n] = s[n]);
                return this
            }, e.prototype.get = function(e) {
                return this.options[e]
            }, e.prototype.set = function(e, t) {
                this.options[e] = t
            }, e
        }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(s, o, n, i) {
            var a = function(e, t) {
                null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new o(t, e), a.__super__.constructor.call(this);
                var n = e.attr("tabindex") || 0;
                e.data("old-tabindex", n), e.attr("tabindex", "-1");
                t = this.options.get("dataAdapter");
                this.dataAdapter = new t(e, this.options);
                n = this.render();
                this._placeContainer(n);
                t = this.options.get("selectionAdapter");
                this.selection = new t(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, n);
                t = this.options.get("dropdownAdapter");
                this.dropdown = new t(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, n);
                n = this.options.get("resultsAdapter");
                this.results = new n(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var i = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                    i.trigger("selection:update", {
                        data: e
                    })
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
            };
            return n.Extend(a, n.Observable), a.prototype._generateId = function(e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }, a.prototype._placeContainer = function(e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }, a.prototype._resolveWidth = function(e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    i = e.outerWidth(!1);
                    return i <= 0 ? "auto" : i + "px"
                }
                if ("style" != t) return t;
                e = e.attr("style");
                if ("string" != typeof e) return null;
                for (var s = e.split(";"), o = 0, a = s.length; o < a; o += 1) {
                    var r = s[o].replace(/\s/g, "").match(n);
                    if (null !== r && 1 <= r.length) return r[1]
                }
                return null
            }, a.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, a.prototype._registerDomEvents = function() {
                var t = this;
                this.$element.on("change.select2", function() {
                    t.dataAdapter.current(function(e) {
                        t.trigger("selection:update", {
                            data: e
                        })
                    })
                }), this.$element.on("focus.select2", function(e) {
                    t.trigger("focus", e)
                }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != e ? (this._observer = new e(function(e) {
                    s.each(e, t._syncA), s.each(e, t._syncS)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }, a.prototype._registerDataEvents = function() {
                var n = this;
                this.dataAdapter.on("*", function(e, t) {
                    n.trigger(e, t)
                })
            }, a.prototype._registerSelectionEvents = function() {
                var n = this,
                    i = ["toggle", "focus"];
                this.selection.on("toggle", function() {
                    n.toggleDropdown()
                }), this.selection.on("focus", function(e) {
                    n.focus(e)
                }), this.selection.on("*", function(e, t) {
                    -1 === s.inArray(e, i) && n.trigger(e, t)
                })
            }, a.prototype._registerDropdownEvents = function() {
                var n = this;
                this.dropdown.on("*", function(e, t) {
                    n.trigger(e, t)
                })
            }, a.prototype._registerResultsEvents = function() {
                var n = this;
                this.results.on("*", function(e, t) {
                    n.trigger(e, t)
                })
            }, a.prototype._registerEvents = function() {
                var n = this;
                this.on("open", function() {
                    n.$container.addClass("select2-container--open")
                }), this.on("close", function() {
                    n.$container.removeClass("select2-container--open")
                }), this.on("enable", function() {
                    n.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function() {
                    n.$container.addClass("select2-container--disabled")
                }), this.on("blur", function() {
                    n.$container.removeClass("select2-container--focus")
                }), this.on("query", function(t) {
                    n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function(e) {
                        n.trigger("results:all", {
                            data: e,
                            query: t
                        })
                    })
                }), this.on("query:append", function(t) {
                    this.dataAdapter.query(t, function(e) {
                        n.trigger("results:append", {
                            data: e,
                            query: t
                        })
                    })
                }), this.on("keypress", function(e) {
                    var t = e.which;
                    n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault())
                })
            }, a.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, a.prototype._syncSubtree = function(e, t) {
                var n = !1,
                    i = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t)
                        if (t.addedNodes && 0 < t.addedNodes.length)
                            for (var s = 0; s < t.addedNodes.length; s++) t.addedNodes[s].selected && (n = !0);
                        else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                    else n = !0;
                    n && this.dataAdapter.current(function(e) {
                        i.trigger("selection:update", {
                            data: e
                        })
                    })
                }
            }, a.prototype.trigger = function(e, t) {
                var n = a.__super__.trigger,
                    i = {
                        open: "opening",
                        close: "closing",
                        select: "selecting",
                        unselect: "unselecting"
                    };
                if (void 0 === t && (t = {}), e in i) {
                    var s = i[e],
                        i = {
                            prevented: !1,
                            name: e,
                            args: t
                        };
                    if (n.call(this, s, i), i.prevented) return void(t.prevented = !0)
                }
                n.call(this, e, t)
            }, a.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, a.prototype.open = function() {
                this.isOpen() || this.trigger("query", {})
            }, a.prototype.close = function() {
                this.isOpen() && this.trigger("close", {})
            }, a.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open")
            }, a.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus")
            }, a.prototype.focus = function(e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, a.prototype.enable = function(e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                e = !e[0];
                this.$element.prop("disabled", e)
            }, a.prototype.data = function() {
                this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current(function(e) {
                    t = e
                }), t
            }, a.prototype.val = function(e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                e = e[0];
                s.isArray(e) && (e = s.map(e, function(e) {
                    return e.toString()
                })), this.$element.val(e).trigger("change")
            }, a.prototype.destroy = function() {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, a.prototype.render = function() {
                var e = s('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
            }, a
        }), e.define("select2/compat/utils", ["jquery"], function(a) {
            return {
                syncCssClasses: function(e, t, n) {
                    var i, s, o = [];
                    (i = a.trim(e.attr("class"))) && a((i = "" + i).split(/\s+/)).each(function() {
                        0 === this.indexOf("select2-") && o.push(this)
                    }), (i = a.trim(t.attr("class"))) && a((i = "" + i).split(/\s+/)).each(function() {
                        0 !== this.indexOf("select2-") && null != (s = n(this)) && o.push(s)
                    }), e.attr("class", o.join(" "))
                }
            }
        }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function(o, a) {
            function e() {}
            return e.prototype.render = function(e) {
                var t = e.call(this),
                    n = this.options.get("containerCssClass") || "";
                o.isFunction(n) && (n = n(this.$element));
                var i, s = this.options.get("adaptContainerCssClass");
                s = s || function(e) {
                    return null
                }, -1 !== n.indexOf(":all:") && (n = n.replace(":all:", ""), i = s, s = function(e) {
                    var t = i(e);
                    return null != t ? t + " " + e : e
                });
                e = this.options.get("containerCss") || {};
                return o.isFunction(e) && (e = e(this.$element)), a.syncCssClasses(t, this.$element, s), t.css(e), t.addClass(n), t
            }, e
        }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(o, a) {
            function e() {}
            return e.prototype.render = function(e) {
                var t = e.call(this),
                    n = this.options.get("dropdownCssClass") || "";
                o.isFunction(n) && (n = n(this.$element));
                var i, s = this.options.get("adaptDropdownCssClass");
                s = s || function(e) {
                    return null
                }, -1 !== n.indexOf(":all:") && (n = n.replace(":all:", ""), i = s, s = function(e) {
                    var t = i(e);
                    return null != t ? t + " " + e : e
                });
                e = this.options.get("dropdownCss") || {};
                return o.isFunction(e) && (e = e(this.$element)), a.syncCssClasses(t, this.$element, s), t.css(e), t.addClass(n), t
            }, e
        }), e.define("select2/compat/initSelection", ["jquery"], function(i) {
            function e(e, t, n) {
                n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)
            }
            return e.prototype.current = function(e, t) {
                var n = this;
                return this._isInitialized ? void e.call(this, t) : void this.initSelection.call(null, this.$element, function(e) {
                    n._isInitialized = !0, i.isArray(e) || (e = [e]), t(e)
                })
            }, e
        }), e.define("select2/compat/inputData", ["jquery"], function(o) {
            function e(e, t, n) {
                this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)
            }
            return e.prototype.current = function(e, t) {
                for (var n = [], i = 0; i < this._currentData.length; i++) {
                    var s = this._currentData[i];
                    n.push.apply(n, function e(t, n) {
                        var i = [];
                        return t.selected || -1 !== o.inArray(t.id, n) ? (t.selected = !0, i.push(t)) : t.selected = !1, t.children && i.push.apply(i, e(t.children, n)), i
                    }(s, this.$element.val().split(this._valueSeparator)))
                }
                t(n)
            }, e.prototype.select = function(e, t) {
                var n;
                this.options.get("multiple") ? (n = this.$element.val(), n += this._valueSeparator + t.id, this.$element.val(n)) : (this.current(function(e) {
                    o.map(e, function(e) {
                        e.selected = !1
                    })
                }), this.$element.val(t.id)), this.$element.trigger("change")
            }, e.prototype.unselect = function(e, s) {
                var o = this;
                s.selected = !1, this.current(function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = e[n];
                        s.id != i.id && t.push(i.id)
                    }
                    o.$element.val(t.join(o._valueSeparator)), o.$element.trigger("change")
                })
            }, e.prototype.query = function(e, t, n) {
                for (var i = [], s = 0; s < this._currentData.length; s++) {
                    var o = this._currentData[s],
                        o = this.matches(t, o);
                    null !== o && i.push(o)
                }
                n({
                    results: i
                })
            }, e.prototype.addOptions = function(e, t) {
                t = o.map(t, function(e) {
                    return o.data(e[0], "data")
                });
                this._currentData.push.apply(this._currentData, t)
            }, e
        }), e.define("select2/compat/matcher", ["jquery"], function(a) {
            return function(o) {
                return function(e, t) {
                    var n = a.extend(!0, {}, t);
                    if (null == e.term || "" === a.trim(e.term)) return n;
                    if (t.children) {
                        for (var i = t.children.length - 1; 0 <= i; i--) {
                            var s = t.children[i];
                            o(e.term, s.text, s) || n.children.splice(i, 1)
                        }
                        if (0 < n.children.length) return n
                    }
                    return o(e.term, t.text, t) ? n : null
                }
            }
        }), e.define("select2/compat/query", [], function() {
            function e(e, t, n) {
                n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                t.callback = n, this.options.get("query").call(null, t)
            }, e
        }), e.define("select2/dropdown/attachContainer", [], function() {
            function e(e, t, n) {
                e.call(this, t, n)
            }
            return e.prototype.position = function(e, t, n) {
                n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
            }, e
        }), e.define("select2/dropdown/stopPropagation", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                e.call(this, t, n), this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function(e) {
                    e.stopPropagation()
                })
            }, e
        }), e.define("select2/selection/stopPropagation", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                e.call(this, t, n), this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function(e) {
                    e.stopPropagation()
                })
            }, e
        }), s = function(d) {
            function t(e) {
                var t, n = e || window.event,
                    i = f.call(arguments, 1),
                    s = 0,
                    o = 0,
                    a = 0,
                    r = 0,
                    l = 0,
                    c = 0;
                if ((e = d.event.fix(n)).type = "mousewheel", "detail" in n && (a = -1 * n.detail), "wheelDelta" in n && (a = n.wheelDelta), "wheelDeltaY" in n && (a = n.wheelDeltaY), "wheelDeltaX" in n && (o = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (o = -1 * a, a = 0), s = 0 === a ? o : a, "deltaY" in n && (s = a = -1 * n.deltaY), "deltaX" in n && (o = n.deltaX, 0 === a && (s = -1 * o)), 0 !== a || 0 !== o) {
                    1 === n.deltaMode ? (s *= t = d.data(this, "mousewheel-line-height"), a *= t, o *= t) : 2 === n.deltaMode && (s *= t = d.data(this, "mousewheel-page-height"), a *= t, o *= t);
                    var r = Math.max(Math.abs(a), Math.abs(o));
                    return p && !(r < p) || u(n, p = r) && (p /= 40), u(n, r) && (s /= 40, o /= 40, a /= 40), s = Math[1 <= s ? "floor" : "ceil"](s / p), o = Math[1 <= o ? "floor" : "ceil"](o / p), a = Math[1 <= a ? "floor" : "ceil"](a / p), m.settings.normalizeOffset && this.getBoundingClientRect && (r = this.getBoundingClientRect(), l = e.clientX - r.left, c = e.clientY - r.top), e.deltaX = o, e.deltaY = a, e.deltaFactor = p, e.offsetX = l, e.offsetY = c, e.deltaMode = 0, i.unshift(e, s, o, a), h && clearTimeout(h), h = setTimeout(function() {
                        p = null
                    }, 200), (d.event.dispatch || d.event.handle).apply(this, i)
                }
            }

            function u(e, t) {
                return m.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
            }
            var h, p, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                n = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                f = Array.prototype.slice;
            if (d.event.fixHooks)
                for (var i = e.length; i;) d.event.fixHooks[e[--i]] = d.event.mouseHooks;
            var m = d.event.special.mousewheel = {
                version: "3.1.12",
                setup: function() {
                    if (this.addEventListener)
                        for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
                    else this.onmousewheel = t;
                    d.data(this, "mousewheel-line-height", m.getLineHeight(this)), d.data(this, "mousewheel-page-height", m.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
                    else this.onmousewheel = null;
                    d.removeData(this, "mousewheel-line-height"), d.removeData(this, "mousewheel-page-height")
                },
                getLineHeight: function(e) {
                    var t = d(e),
                        e = t["offsetParent" in d.fn ? "offsetParent" : "parent"]();
                    return e.length || (e = d("body")), parseInt(e.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
                },
                getPageHeight: function(e) {
                    return d(e).height()
                },
                settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0
                }
            };
            d.fn.extend({
                mousewheel: function(e) {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                },
                unmousewheel: function(e) {
                    return this.unbind("mousewheel", e)
                }
            })
        }, "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], s) : "object" == typeof exports ? module.exports = s : s(t), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(s, e, o, t) {
            var a;
            return null == s.fn.select2 && (a = ["open", "close", "destroy"], s.fn.select2 = function(t) {
                if ("object" == typeof(t = t || {})) return this.each(function() {
                    var e = s.extend(!0, {}, t);
                    new o(s(this), e)
                }), this;
                if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                var n, i = Array.prototype.slice.call(arguments, 1);
                return this.each(function() {
                    var e = s(this).data("select2");
                    null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i)
                }), -1 < s.inArray(t, a) ? this : n
            }), null == s.fn.select2.defaults && (s.fn.select2.defaults = t), o
        }), {
            define: e.define,
            require: e.require
        }),
        e = s.require("jquery.select2");

    function y(e, t) {
        return a.call(e, t)
    }

    function c(e, t) {
        var n, i, s, o, a, r, l, c, d, u, h = t && t.split("/"),
            p = m.map,
            f = p && p["*"] || {};
        if (e && "." === e.charAt(0))
            if (t) {
                for (t = (e = e.split("/")).length - 1, m.nodeIdCompat && g.test(e[t]) && (e[t] = e[t].replace(g, "")), e = h.slice(0, h.length - 1).concat(e), c = 0; c < e.length; c += 1)
                    if ("." === (u = e[c])) e.splice(c, 1), --c;
                    else if (".." === u) {
                    if (1 === c && (".." === e[2] || ".." === e[0])) break;
                    0 < c && (e.splice(c - 1, 2), c -= 2)
                }
                e = e.join("/")
            } else 0 === e.indexOf("./") && (e = e.substring(2));
        if ((h || f) && p) {
            for (c = (n = e.split("/")).length; 0 < c; --c) {
                if (i = n.slice(0, c).join("/"), h)
                    for (d = h.length; 0 < d; --d)
                        if ((s = p[h.slice(0, d).join("/")]) && (s = s[i])) {
                            o = s, a = c;
                            break
                        } if (o) break;
                !r && f && f[i] && (r = f[i], l = c)
            }!o && r && (o = r, a = l), o && (n.splice(0, a, o), e = n.join("/"))
        }
        return e
    }

    function w(t, n) {
        return function() {
            var e = r.call(arguments, 0);
            return "string" != typeof e[0] && 1 === e.length && e.push(null), o.apply(u, e.concat([t, n]))
        }
    }

    function T(e) {
        var t;
        if (y(p, e) && (t = p[e], delete p[e], f[e] = !0, l.apply(u, t)), !y(h, e) && !y(f, e)) throw new Error("No " + e);
        return h[e]
    }

    function d(e) {
        var t, n = e ? e.indexOf("!") : -1;
        return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
    }
    return t.fn.select2.amd = s, e
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(l) {
    l.extend(l.fn, {
        validate: function(e) {
            if (this.length) {
                var i = l.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new l.validator(e, this[0]), l.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target), l(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== l(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function(n) {
                    function e() {
                        var e, t;
                        return !i.settings.submitHandler || (i.submitButton && (e = l("<input type='hidden'/>").attr("name", i.submitButton.name).val(l(i.submitButton).val()).appendTo(i.currentForm)), t = i.settings.submitHandler.call(i, i.currentForm, n), i.submitButton && e.remove(), void 0 !== t && t)
                    }
                    return i.settings.debug && n.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, t, n;
            return l(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, t = l(this[0].form).validate(), this.each(function() {
                e = t.element(this) && e, n = n.concat(t.errorList)
            }), t.errorList = n), e
        },
        rules: function(e, t) {
            var n, i, s, o, a, r = this[0];
            if (e) switch (n = l.data(r.form, "validator").settings, i = n.rules, s = l.validator.staticRules(r), e) {
                case "add":
                    l.extend(s, l.validator.normalizeRule(t)), delete s.messages, i[r.name] = s, t.messages && (n.messages[r.name] = l.extend(n.messages[r.name], t.messages));
                    break;
                case "remove":
                    return t ? (a = {}, l.each(t.split(/\s/), function(e, t) {
                        a[t] = s[t], delete s[t], "required" === t && l(r).removeAttr("aria-required")
                    }), a) : (delete i[r.name], s)
            }
            return (e = l.validator.normalizeRules(l.extend({}, l.validator.classRules(r), l.validator.attributeRules(r), l.validator.dataRules(r), l.validator.staticRules(r)), r)).required && (o = e.required, delete e.required, e = l.extend({
                required: o
            }, e), l(r).attr("aria-required", "true")), e.remote && (o = e.remote, delete e.remote, e = l.extend(e, {
                remote: o
            })), e
        }
    }), l.extend(l.expr[":"], {
        blank: function(e) {
            return !l.trim("" + l(e).val())
        },
        filled: function(e) {
            return !!l.trim("" + l(e).val())
        },
        unchecked: function(e) {
            return !l(e).prop("checked")
        }
    }), l.validator = function(e, t) {
        this.settings = l.extend(!0, {}, l.validator.defaults, e), this.currentForm = t, this.init()
    }, l.validator.format = function(n, e) {
        return 1 === arguments.length ? function() {
            var e = l.makeArray(arguments);
            return e.unshift(n), l.validator.format.apply(this, e)
        } : (2 < arguments.length && e.constructor !== Array && (e = l.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), l.each(e, function(e, t) {
            n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return t
            })
        }), n)
    }, l.extend(l.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: l([]),
            errorLabelContainer: l([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                9 === t.which && "" === this.elementValue(e) || -1 !== l.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(e, t, n) {
                ("radio" === e.type ? this.findByName(e.name) : l(e)).addClass(t).removeClass(n)
            },
            unhighlight: function(e, t, n) {
                ("radio" === e.type ? this.findByName(e.name) : l(e)).removeClass(t).addClass(n)
            }
        },
        setDefaults: function(e) {
            l.extend(l.validator.defaults, e)
        },
        messages: {
            required: "ThÃ´ng tin báº¯t buá»™c.",
            remote: "Please fix this field.",
            email: "Äá»‹a chá»‰ email khÃ´ng há»£p lá»‡.",
            url: "ÄÆ°á»ng dáº«n khÃ´ng há»£p lá»‡.",
            date: "NgÃ y khÃ´ng há»£p lá»‡.",
            dateISO: "NgÃ y khÃ´ng há»£p lá»‡ ( ISO ).",
            number: "Sá»‘ khÃ´ng há»£p lá»‡.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: l.validator.format("Vui lÃ²ng khÃ´ng nháº­p quÃ¡ {0} kÃ½ tá»±."),
            minlength: l.validator.format("Vui lÃ²ng khÃ´ng nháº­p ngáº¯n hÆ¡n {0} kÃ½ tá»±."),
            rangelength: l.validator.format("Please enter a value between {0} and {1} characters long."),
            range: l.validator.format("Please enter a value between {0} and {1}."),
            max: l.validator.format("Please enter a value less than or equal to {0}."),
            min: l.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var t = l.data(this.form, "validator"),
                        n = "on" + e.type.replace(/^validate/, ""),
                        i = t.settings;
                    i[n] && !l(this).is(i.ignore) && i[n].call(t, this, e)
                }
                this.labelContainer = l(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || l(this.currentForm), this.containers = l(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.groups = {};
                l.each(this.settings.groups, function(n, e) {
                    "string" == typeof e && (e = e.split(/\s/)), l.each(e, function(e, t) {
                        i[t] = n
                    })
                }), n = this.settings.rules, l.each(n, function(e, t) {
                    n[e] = l.validator.normalizeRule(t)
                }), l(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && l(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), l(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), l.extend(this.submitted, this.errorMap), this.invalid = l.extend({}, this.errorMap), this.valid() || l(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(e) {
                var t = this.clean(e),
                    n = this.validationTargetFor(t),
                    i = !0;
                return void 0 === (this.lastElement = n) ? delete this.invalid[t.name] : (this.prepareElement(n), this.currentElements = l(n), (i = !1 !== this.check(n)) ? delete this.invalid[n.name] : this.invalid[n.name] = !0), l(e).attr("aria-invalid", !i), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(t) {
                if (t) {
                    for (var e in l.extend(this.errorMap, t), this.errorList = [], t) this.errorList.push({
                        message: t[e],
                        element: this.findByName(e)[0]
                    });
                    this.successList = l.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                l.fn.resetForm && l(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                var e, t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, "");
                else t.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e) n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    l(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === l.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var e = this,
                    t = {};
                return l(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in t || !e.objectLength(l(this).rules()) || (t[this.name] = !0, 0))
                })
            },
            clean: function(e) {
                return l(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return l(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = l([]), this.toHide = l([]), this.currentElements = l([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(e) {
                var t = l(e),
                    n = e.type;
                return "radio" === n || "checkbox" === n ? this.findByName(e.name).filter(":checked").val() : "number" === n && void 0 !== e.validity ? !e.validity.badInput && t.val() : "string" == typeof(t = t.val()) ? t.replace(/\r/g, "") : t
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var e, n, i, s = l(t).rules(),
                    o = l.map(s, function(e, t) {
                        return t
                    }).length,
                    a = !1,
                    r = this.elementValue(t);
                for (n in s) {
                    i = {
                        method: n,
                        parameters: s[n]
                    };
                    try {
                        if ("dependency-mismatch" === (e = l.validator.methods[n].call(this, r, t, i.parameters)) && 1 === o) {
                            a = !0;
                            continue
                        }
                        if (a = !1, "pending" === e) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!e) return this.formatAndAdd(t, i), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."), e
                    }
                }
                if (!a) return this.objectLength(s) && this.successList.push(t), !0
            },
            customDataMessage: function(e, t) {
                return l(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || l(e).data("msg")
            },
            customMessage: function(e, t) {
                e = this.settings.messages[e];
                return e && (e.constructor === String ? e : e[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(e, t) {
                return this.findDefined(this.customMessage(e.name, t), this.customDataMessage(e, t), !this.settings.ignoreTitle && e.title || void 0, l.validator.messages[t], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t.method),
                    i = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = l.validator.format(n.replace(i, "{$1}"), t.parameters)), this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                for (var e, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, e = this.validElements(); e[n]; n++) this.settings.unhighlight.call(this, e[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return l(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, t) {
                var n, i, s = this.errorsFor(e),
                    o = this.idOrName(e),
                    a = l(e).attr("aria-describedby");
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(t)) : (n = s = l("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, l(e)) : n.insertAfter(e), s.is("label") ? s.attr("for", o) : 0 === s.parents("label[for='" + o + "']").length && (o = s.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), a ? a.match(new RegExp("\\b" + o + "\\b")) || (a += " " + o) : a = o, l(e).attr("aria-describedby", a), (i = this.groups[e.name]) && l.each(this.groups, function(e, t) {
                    t === i && l("[name='" + e + "']", this.currentForm).attr("aria-describedby", s.attr("id"))
                }))), !t && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
            },
            errorsFor: function(e) {
                var t = this.idOrName(e),
                    e = l(e).attr("aria-describedby"),
                    t = "label[for='" + t + "'], label[for='" + t + "'] *";
                return e && (t = t + ", #" + e.replace(/\s+/g, ", #")), this.errors().filter(t)
            },
            idOrName: function(e) {
                return this.groups[e.name] || !this.checkable(e) && e.id || e.name
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), l(e).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(e) {
                return l(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                    case "select":
                        return l("option:selected", t).length;
                    case "input":
                        if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(e, t) {
                    return !!l(e, t.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(e) {
                var t = this.elementValue(e);
                return !l.validator.methods.required.call(this, t, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
            },
            stopRequest: function(e, t) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (l(this.currentForm).submit(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (l(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return l.data(e, "previousValue") || l.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            },
            destroy: function() {
                this.resetForm(), l(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, t) {
            e.constructor === String ? this.classRuleSettings[e] = t : l.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var t = {},
                e = l(e).attr("class");
            return e && l.each(e.split(" "), function() {
                this in l.validator.classRuleSettings && l.extend(t, l.validator.classRuleSettings[this])
            }), t
        },
        normalizeAttributeRule: function(e, t, n, i) {
            /min|max/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function(e) {
            var t, n, i = {},
                s = l(e),
                o = e.getAttribute("type");
            for (t in l.validator.methods) n = "required" === t ? ("" === (n = e.getAttribute(t)) && (n = !0), !!n) : s.attr(t), this.normalizeAttributeRule(i, o, t, n);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(e) {
            var t, n, i = {},
                s = l(e),
                o = e.getAttribute("type");
            for (t in l.validator.methods) n = s.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()), this.normalizeAttributeRule(i, o, t, n);
            return i
        },
        staticRules: function(e) {
            var t = {},
                n = l.data(e.form, "validator");
            return n.settings.rules && (t = l.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
        },
        normalizeRules: function(i, s) {
            return l.each(i, function(e, t) {
                if (!1 !== t) {
                    if (t.param || t.depends) {
                        var n = !0;
                        switch (typeof t.depends) {
                            case "string":
                                n = !!l(t.depends, s.form).length;
                                break;
                            case "function":
                                n = t.depends.call(s, s)
                        }
                        n ? i[e] = void 0 === t.param || t.param : delete i[e]
                    }
                } else delete i[e]
            }), l.each(i, function(e, t) {
                i[e] = l.isFunction(t) ? t(s) : t
            }), l.each(["minlength", "maxlength"], function() {
                i[this] && (i[this] = Number(i[this]))
            }), l.each(["rangelength", "range"], function() {
                var e;
                i[this] && (l.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]))
            }), l.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
        },
        normalizeRule: function(e) {
            var t;
            return "string" == typeof e && (t = {}, l.each(e.split(/\s/), function() {
                t[this] = !0
            }), e = t), e
        },
        addMethod: function(e, t, n) {
            l.validator.methods[e] = t, l.validator.messages[e] = void 0 !== n ? n : l.validator.messages[e], t.length < 3 && l.validator.addClassRules(e, l.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, t, n) {
                if (!this.depend(n, t)) return "dependency-mismatch";
                if ("select" !== t.nodeName.toLowerCase()) return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < e.length;
                t = l(t).val();
                return t && 0 < t.length
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            creditcard: function(e, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e)) return !1;
                var n, i, s = 0,
                    o = 0,
                    a = !1;
                if ((e = e.replace(/\D/g, "")).length < 13 || 19 < e.length) return !1;
                for (n = e.length - 1; 0 <= n; n--) i = e.charAt(n), o = parseInt(i, 10), a && 9 < (o *= 2) && (o -= 9), s += o, a = !a;
                return s % 10 == 0
            },
            minlength: function(e, t, n) {
                e = l.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || n <= e
            },
            maxlength: function(e, t, n) {
                e = l.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || e <= n
            },
            rangelength: function(e, t, n) {
                e = l.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || n <= e
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            equalTo: function(e, t, n) {
                n = l(n);
                return this.settings.onfocusout && n.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    l(t).valid()
                }), e === n.val()
            },
            remote: function(i, s, e) {
                if (this.optional(s)) return "dependency-mismatch";
                var o, t, a = this.previousValue(s);
                return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), a.originalMessage = this.settings.messages[s.name].remote, this.settings.messages[s.name].remote = a.message, e = "string" == typeof e ? {
                    url: e
                } : e, a.old === i ? a.valid : (a.old = i, (o = this).startRequest(s), (t = {})[s.name] = i, l.ajax(l.extend(!0, {
                    mode: "abort",
                    port: "validate" + s.name,
                    dataType: "json",
                    data: t,
                    context: o.currentForm,
                    success: function(e) {
                        var t, n = !0 === e || "true" === e;
                        o.settings.messages[s.name].remote = a.originalMessage, n ? (t = o.formSubmitted, o.prepareElement(s), o.formSubmitted = t, o.successList.push(s), delete o.invalid[s.name], o.showErrors()) : (t = {}, e = e || o.defaultMessage(s, "remote"), t[s.name] = a.message = l.isFunction(e) ? e(i) : e, o.invalid[s.name] = !0, o.showErrors(t)), a.valid = n, o.stopRequest(s, n)
                    }
                }, e)), "pending")
            }
        }
    });
    var i, s = {};
    l.ajaxPrefilter ? l.ajaxPrefilter(function(e, t, n) {
        var i = e.port;
        "abort" === e.mode && (s[i] && s[i].abort(), s[i] = n)
    }) : (i = l.ajax, l.ajax = function(e) {
        var t = ("mode" in e ? e : l.ajaxSettings).mode,
            n = ("port" in e ? e : l.ajaxSettings).port;
        return "abort" === t ? (s[n] && s[n].abort(), s[n] = i.apply(this, arguments), s[n]) : i.apply(this, arguments)
    })
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Cleave = t() : e.Cleave = t()
}(this, function() {
    return s = {}, n.m = i = [function(t, e, n) {
        (function(e) {
            "use strict";
            var o = function(e, t) {
                if (this.element = "string" == typeof e ? document.querySelector(e) : void 0 !== e.length && 0 < e.length ? e[0] : e, !this.element) throw new Error("[cleave.js] Please check the element");
                t.initValue = this.element.value, this.properties = o.DefaultProperties.assign({}, t), this.init()
            };
            o.prototype = {
                init: function() {
                    var e = this,
                        t = e.properties;
                    (t.numeral || t.phone || t.creditCard || t.date || 0 !== t.blocksLength || t.prefix) && (t.maxLength = o.Util.getMaxLength(t.blocks), e.isAndroid = o.Util.isAndroid(), e.onChangeListener = e.onChange.bind(e), e.onKeyDownListener = e.onKeyDown.bind(e), e.onCutListener = e.onCut.bind(e), e.onCopyListener = e.onCopy.bind(e), e.element.addEventListener("input", e.onChangeListener), e.element.addEventListener("keydown", e.onKeyDownListener), e.element.addEventListener("cut", e.onCutListener), e.element.addEventListener("copy", e.onCopyListener), e.initPhoneFormatter(), e.initDateFormatter(), e.initNumeralFormatter(), e.onInput(t.initValue))
                },
                initNumeralFormatter: function() {
                    var e = this.properties;
                    e.numeral && (e.numeralFormatter = new o.NumeralFormatter(e.numeralDecimalMark, e.numeralDecimalScale, e.numeralThousandsGroupStyle, e.numeralPositiveOnly, e.delimiter))
                },
                initDateFormatter: function() {
                    var e = this.properties;
                    e.date && (e.dateFormatter = new o.DateFormatter(e.datePattern), e.blocks = e.dateFormatter.getBlocks(), e.blocksLength = e.blocks.length, e.maxLength = o.Util.getMaxLength(e.blocks))
                },
                initPhoneFormatter: function() {
                    var e = this.properties;
                    if (e.phone) try {
                        e.phoneFormatter = new o.PhoneFormatter(new e.root.Cleave.AsYouTypeFormatter(e.phoneRegionCode), e.delimiter)
                    } catch (e) {
                        throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib")
                    }
                },
                onKeyDown: function(e) {
                    var t = this.properties;
                    return 8 === (e.which || e.keyCode) && o.Util.isDelimiter(this.element.value.slice(-1), t.delimiter, t.delimiters) ? void(t.backspace = !0) : void(t.backspace = !1)
                },
                onChange: function() {
                    this.onInput(this.element.value)
                },
                onCut: function(e) {
                    this.copyClipboardData(e), this.onInput("")
                },
                onCopy: function(e) {
                    this.copyClipboardData(e)
                },
                copyClipboardData: function(e) {
                    var t = this.properties,
                        n = o.Util,
                        i = this.element.value,
                        s = t.copyDelimiter ? i : n.stripDelimiters(i, t.delimiter, t.delimiters);
                    try {
                        (e.clipboardData ? e : window).clipboardData.setData("Text", s), e.preventDefault()
                    } catch (e) {}
                },
                onInput: function(e) {
                    var t = this.properties,
                        n = e,
                        i = o.Util;
                    return t.numeral || !t.backspace || i.isDelimiter(e.slice(-1), t.delimiter, t.delimiters) || (e = i.headStr(e, e.length - 1)), t.phone ? (t.result = t.phoneFormatter.format(e), void this.updateValueState()) : t.numeral ? (t.result = t.prefix + t.numeralFormatter.format(e), void this.updateValueState()) : (t.date && (e = t.dateFormatter.getValidatedDate(e)), e = i.stripDelimiters(e, t.delimiter, t.delimiters), e = i.getPrefixStrippedValue(e, t.prefix, t.prefixLength), e = t.numericOnly ? i.strip(e, /[^\d]/g) : e, e = t.uppercase ? e.toUpperCase() : e, e = t.lowercase ? e.toLowerCase() : e, t.prefix && (e = t.prefix + e, 0 === t.blocksLength) ? (t.result = e, void this.updateValueState()) : (t.creditCard && this.updateCreditCardPropsByValue(e), e = i.headStr(e, t.maxLength), t.result = i.getFormattedValue(e, t.blocks, t.blocksLength, t.delimiter, t.delimiters), void(n === t.result && n !== t.prefix || this.updateValueState())))
                },
                updateCreditCardPropsByValue: function(e) {
                    var t = this.properties,
                        n = o.Util;
                    n.headStr(t.result, 4) !== n.headStr(e, 4) && (e = o.CreditCardDetector.getInfo(e, t.creditCardStrictMode), t.blocks = e.blocks, t.blocksLength = t.blocks.length, t.maxLength = n.getMaxLength(t.blocks), t.creditCardType !== e.type && (t.creditCardType = e.type, t.onCreditCardTypeChanged.call(this, t.creditCardType)))
                },
                updateValueState: function() {
                    var e = this;
                    return e.isAndroid ? void window.setTimeout(function() {
                        e.element.value = e.properties.result
                    }, 1) : void(e.element.value = e.properties.result)
                },
                setPhoneRegionCode: function(e) {
                    this.properties.phoneRegionCode = e, this.initPhoneFormatter(), this.onChange()
                },
                setRawValue: function(e) {
                    var t = this.properties;
                    e = void 0 !== e ? e.toString() : "", t.numeral && (e = e.replace(".", t.numeralDecimalMark)), this.element.value = e, this.onInput(e)
                },
                getRawValue: function() {
                    var e = this.properties,
                        t = o.Util,
                        n = this.element.value;
                    return e.rawValueTrimPrefix && (n = t.getPrefixStrippedValue(n, e.prefix, e.prefixLength)), e.numeral ? e.numeralFormatter.getRawValue(n) : t.stripDelimiters(n, e.delimiter, e.delimiters)
                },
                getFormattedValue: function() {
                    return this.element.value
                },
                destroy: function() {
                    this.element.removeEventListener("input", this.onChangeListener), this.element.removeEventListener("keydown", this.onKeyDownListener), this.element.removeEventListener("cut", this.onCutListener), this.element.removeEventListener("copy", this.onCopyListener)
                },
                toString: function() {
                    return "[Cleave Object]"
                }
            }, o.NumeralFormatter = n(1), o.DateFormatter = n(2), o.PhoneFormatter = n(3), o.CreditCardDetector = n(4), o.Util = n(5), o.DefaultProperties = n(6), ("object" == typeof e && e ? e : window).Cleave = o, t.exports = o
        }).call(e, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";
        var o = function(e, t, n, i, s) {
            this.numeralDecimalMark = e || ".", this.numeralDecimalScale = 0 <= t ? t : 2, this.numeralThousandsGroupStyle = n || o.groupStyle.thousand, this.numeralPositiveOnly = !!i, this.delimiter = s || "" === s ? s : ",", this.delimiterRE = s ? new RegExp("\\" + s, "g") : ""
        };
        o.groupStyle = {
            thousand: "thousand",
            lakh: "lakh",
            wan: "wan"
        }, o.prototype = {
            getRawValue: function(e) {
                return e.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".")
            },
            format: function(e) {
                var t, n = this,
                    i = "";
                switch (0 <= (t = e = e.replace(/[A-Za-z]/g, "").replace(n.numeralDecimalMark, "M").replace(/[^\dM-]/g, "").replace(/^\-/, "N").replace(/\-/g, "").replace("N", n.numeralPositiveOnly ? "" : "-").replace("M", n.numeralDecimalMark).replace(/^(-)?0+(?=\d)/, "$1")).indexOf(n.numeralDecimalMark) && (t = (e = e.split(n.numeralDecimalMark))[0], i = n.numeralDecimalMark + e[1].slice(0, n.numeralDecimalScale)), n.numeralThousandsGroupStyle) {
                    case o.groupStyle.lakh:
                        t = t.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + n.delimiter);
                        break;
                    case o.groupStyle.wan:
                        t = t.replace(/(\d)(?=(\d{4})+$)/g, "$1" + n.delimiter);
                        break;
                    default:
                        t = t.replace(/(\d)(?=(\d{3})+$)/g, "$1" + n.delimiter)
                }
                return t.toString() + (0 < n.numeralDecimalScale ? i.toString() : "")
            }
        }, e.exports = o
    }, function(e, t) {
        "use strict";

        function n(e) {
            this.blocks = [], this.datePattern = e, this.initBlocks()
        }
        n.prototype = {
            initBlocks: function() {
                var t = this;
                t.datePattern.forEach(function(e) {
                    "Y" === e ? t.blocks.push(4) : t.blocks.push(2)
                })
            },
            getBlocks: function() {
                return this.blocks
            },
            getValidatedDate: function(s) {
                var o = this,
                    a = "";
                return s = s.replace(/[^\d]/g, ""), o.blocks.forEach(function(e, t) {
                    if (0 < s.length) {
                        var n = s.slice(0, e),
                            i = n.slice(0, 1),
                            e = s.slice(e);
                        switch (o.datePattern[t]) {
                            case "d":
                                "00" === n ? n = "01" : 3 < parseInt(i, 10) ? n = "0" + i : 31 < parseInt(n, 10) && (n = "31");
                                break;
                            case "m":
                                "00" === n ? n = "01" : 1 < parseInt(i, 10) ? n = "0" + i : 12 < parseInt(n, 10) && (n = "12")
                        }
                        a += n, s = e
                    }
                }), a
            }
        }, e.exports = n
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            this.delimiter = t || "" === t ? t : " ", this.delimiterRE = t ? new RegExp("\\" + t, "g") : "", this.formatter = e
        }
        n.prototype = {
            setFormatter: function(e) {
                this.formatter = e
            },
            format: function(e) {
                this.formatter.clear();
                for (var t, n = "", i = !1, s = 0, o = (e = (e = e.replace(/[^\d+]/g, "")).replace(this.delimiterRE, "")).length; s < o; s++) t = this.formatter.inputDigit(e.charAt(s)), /[\s()-]/g.test(t) ? (n = t, i = !0) : i || (n = t);
                return (n = n.replace(/[()]/g, "")).replace(/[\s-]/g, this.delimiter)
            }
        }, e.exports = n
    }, function(e, t) {
        "use strict";
        var s = {
            blocks: {
                uatp: [4, 5, 6],
                amex: [4, 6, 5],
                diners: [4, 6, 4],
                discover: [4, 4, 4, 4],
                mastercard: [4, 4, 4, 4],
                dankort: [4, 4, 4, 4],
                instapayment: [4, 4, 4, 4],
                jcb: [4, 4, 4, 4],
                maestro: [4, 4, 4, 4],
                visa: [4, 4, 4, 4],
                general: [4, 4, 4, 4],
                generalStrict: [4, 4, 4, 7]
            },
            re: {
                uatp: /^(?!1800)1\d{0,14}/,
                amex: /^3[47]\d{0,13}/,
                discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
                diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
                mastercard: /^(5[1-5]|2[2-7])\d{0,14}/,
                dankort: /^(5019|4175|4571)\d{0,12}/,
                instapayment: /^63[7-9]\d{0,13}/,
                jcb: /^(?:2131|1800|35\d{0,2})\d{0,12}/,
                maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
                visa: /^4\d{0,15}/
            },
            getInfo: function(e, t) {
                var n = s.blocks,
                    i = s.re;
                return t = !!t, i.amex.test(e) ? {
                    type: "amex",
                    blocks: n.amex
                } : i.uatp.test(e) ? {
                    type: "uatp",
                    blocks: n.uatp
                } : i.diners.test(e) ? {
                    type: "diners",
                    blocks: n.diners
                } : i.discover.test(e) ? {
                    type: "discover",
                    blocks: n.discover
                } : i.mastercard.test(e) ? {
                    type: "mastercard",
                    blocks: n.mastercard
                } : i.dankort.test(e) ? {
                    type: "dankort",
                    blocks: n.dankort
                } : i.instapayment.test(e) ? {
                    type: "instapayment",
                    blocks: n.instapayment
                } : i.jcb.test(e) ? {
                    type: "jcb",
                    blocks: n.jcb
                } : i.maestro.test(e) ? {
                    type: "maestro",
                    blocks: n.maestro
                } : i.visa.test(e) ? {
                    type: "visa",
                    blocks: t ? n.generalStrict : n.visa
                } : {
                    type: "unknown",
                    blocks: n.general
                }
            }
        };
        e.exports = s
    }, function(e, t) {
        "use strict";
        var n = {
            noop: function() {},
            strip: function(e, t) {
                return e.replace(t, "")
            },
            isDelimiter: function(t, e, n) {
                return 0 === n.length ? t === e : n.some(function(e) {
                    return t === e || void 0
                })
            },
            stripDelimiters: function(t, e, n) {
                if (0 !== n.length) return n.forEach(function(e) {
                    t = t.replace(new RegExp("\\" + e, "g"), "")
                }), t;
                e = e ? new RegExp("\\" + e, "g") : "";
                return t.replace(e, "")
            },
            headStr: function(e, t) {
                return e.slice(0, t)
            },
            getMaxLength: function(e) {
                return e.reduce(function(e, t) {
                    return e + t
                }, 0)
            },
            getPrefixStrippedValue: function(e, t, n) {
                var i;
                return e.slice(0, n) !== t && (i = this.getFirstDiffIndex(t, e.slice(0, n)), e = t + e.slice(i, i + 1) + e.slice(n + 1)), e.slice(n)
            },
            getFirstDiffIndex: function(e, t) {
                for (var n = 0; e.charAt(n) === t.charAt(n);)
                    if ("" === e.charAt(n++)) return -1;
                return n
            },
            getFormattedValue: function(s, e, o, a, r) {
                var l, c = "",
                    d = 0 < r.length;
                return 0 === o ? s : (e.forEach(function(e, t) {
                    var n, i;
                    0 < s.length && (n = s.slice(0, e), i = s.slice(e), c += n, l = d ? r[t] || l : a, n.length === e && t < o - 1 && (c += l), s = i)
                }), c)
            },
            isAndroid: function() {
                return !(!navigator || !/android/i.test(navigator.userAgent))
            }
        };
        e.exports = n
    }, function(t, e) {
        (function(n) {
            "use strict";
            var e = {
                assign: function(e, t) {
                    return (e = e || {}).creditCard = !!(t = t || {}).creditCard, e.creditCardStrictMode = !!t.creditCardStrictMode, e.creditCardType = "", e.onCreditCardTypeChanged = t.onCreditCardTypeChanged || function() {}, e.phone = !!t.phone, e.phoneRegionCode = t.phoneRegionCode || "AU", e.phoneFormatter = {}, e.date = !!t.date, e.datePattern = t.datePattern || ["d", "m", "Y"], e.dateFormatter = {}, e.numeral = !!t.numeral, e.numeralDecimalScale = 0 <= t.numeralDecimalScale ? t.numeralDecimalScale : 2, e.numeralDecimalMark = t.numeralDecimalMark || ".", e.numeralThousandsGroupStyle = t.numeralThousandsGroupStyle || "thousand", e.numeralPositiveOnly = !!t.numeralPositiveOnly, e.numericOnly = e.creditCard || e.date || !!t.numericOnly, e.uppercase = !!t.uppercase, e.lowercase = !!t.lowercase, e.prefix = !(e.creditCard || e.phone || e.date) && t.prefix || "", e.prefixLength = e.prefix.length, e.rawValueTrimPrefix = !!t.rawValueTrimPrefix, e.copyDelimiter = !!t.copyDelimiter, e.initValue = void 0 === t.initValue ? "" : t.initValue.toString(), e.delimiter = t.delimiter || "" === t.delimiter ? t.delimiter : t.date ? "/" : t.numeral ? "," : (t.phone, " "), e.delimiters = t.delimiters || [], e.blocks = t.blocks || [], e.blocksLength = e.blocks.length, e.root = "object" == typeof n && n ? n : window, e.maxLength = 0, e.backspace = !1, e.result = "", e
                }
            };
            t.exports = e
        }).call(e, function() {
            return this
        }())
    }], n.c = s, n.p = "", n(0);

    function n(e) {
        if (s[e]) return s[e].exports;
        var t = s[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return i[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
    }
    var i, s
}),
function(a) {
    function t(e, t) {
        return this.element = a(e), this.settings = a.extend({}, i, t), !!this.checkBrowser() && (this.init(), !0)
    }
    var n = "dmUploader",
        i = {
            url: document.URL,
            method: "POST",
            extraData: {},
            maxFileSize: 0,
            maxFiles: 0,
            allowedTypes: "*",
            extFilter: null,
            dataType: null,
            fileName: "file",
            onInit: function() {},
            onFallbackMode: function(e) {},
            onNewFile: function(e, t) {},
            onBeforeUpload: function(e) {},
            onComplete: function() {},
            onUploadProgress: function(e, t) {},
            onUploadSuccess: function(e, t) {},
            onUploadError: function(e, t) {},
            onFileTypeError: function(e) {},
            onFileSizeError: function(e) {},
            onFileExtError: function(e) {},
            onFilesMaxError: function(e) {}
        };
    t.prototype.checkBrowser = function() {
        return void 0 === window.FormData ? (this.settings.onFallbackMode.call(this.element, "Browser doesn't support Form API"), !1) : 0 < this.element.find("input[type=file]").length || !(!this.checkEvent("drop", this.element) || !this.checkEvent("dragstart", this.element)) || (this.settings.onFallbackMode.call(this.element, "Browser doesn't support Ajax Drag and Drop"), !1)
    }, t.prototype.checkEvent = function(e, t) {
        var n = (e = "on" + e) in(t = t || document.createElement("div"));
        return n || (t.setAttribute || (t = document.createElement("div")), t.setAttribute && t.removeAttribute && (t.setAttribute(e, ""), n = "function" == typeof t[e], void 0 !== t[e] && (t[e] = void 0), t.removeAttribute(e))), t = null, n
    }, t.prototype.init = function() {
        var t = this;
        t.queue = new Array, t.queuePos = -1, t.queueRunning = !1, t.element.on("drop", function(e) {
            e.preventDefault();
            e = e.originalEvent.dataTransfer.files;
            t.queueFiles(e)
        }), t.element.find("input[type=file]").on("change", function(e) {
            e = e.target.files;
            t.queueFiles(e), a(this).val("")
        }), this.settings.onInit.call(this.element)
    }, t.prototype.queueFiles = function(e) {
        for (var t = this.queue.length, n = 0; n < e.length; n++) {
            var i = e[n];
            if (0 < this.settings.maxFileSize && i.size > this.settings.maxFileSize) this.settings.onFileSizeError.call(this.element, i);
            else if ("*" == this.settings.allowedTypes || i.type.match(this.settings.allowedTypes)) {
                if (null != this.settings.extFilter) {
                    var s = this.settings.extFilter.toLowerCase().split(";"),
                        o = i.name.toLowerCase().split(".").pop();
                    if (a.inArray(o, s) < 0) {
                        this.settings.onFileExtError.call(this.element, i);
                        continue
                    }
                }
                0 < this.settings.maxFiles && this.queue.length >= this.settings.maxFiles ? this.settings.onFilesMaxError.call(this.element, i) : (this.queue.push(i), s = this.queue.length - 1, this.settings.onNewFile.call(this.element, s, i))
            } else this.settings.onFileTypeError.call(this.element, i)
        }
        return !this.queueRunning && this.queue.length != t && (this.processQueue(), !0)
    }, t.prototype.processQueue = function() {
        var s = this;
        if (++s.queuePos >= s.queue.length) return s.settings.onComplete.call(s.element), s.queuePos = s.queue.length - 1, void(s.queueRunning = !1);
        var e = s.queue[s.queuePos],
            n = new FormData;
        n.append(s.settings.fileName, e), !1 !== s.settings.onBeforeUpload.call(s.element, s.queuePos) && (a.each(s.settings.extraData, function(e, t) {
            n.append(e, t)
        }), s.queueRunning = !0, a.ajax({
            url: s.settings.url,
            type: s.settings.method,
            dataType: s.settings.dataType,
            data: n,
            cache: !1,
            contentType: !1,
            processData: !1,
            forceSync: !1,
            xhr: function() {
                var e = a.ajaxSettings.xhr();
                return e.upload && e.upload.addEventListener("progress", function(e) {
                    var t = 0,
                        n = e.loaded || e.position,
                        i = e.total || e.totalSize;
                    e.lengthComputable && (t = Math.ceil(n / i * 100)), s.settings.onUploadProgress.call(s.element, s.queuePos, t)
                }, !1), e
            },
            success: function(e, t, n) {
                s.settings.onUploadSuccess.call(s.element, s.queuePos, e)
            },
            error: function(e, t, n) {
                s.settings.onUploadError.call(s.element, s.queuePos, n)
            },
            complete: function(e, t) {
                s.processQueue()
            }
        }))
    }, a.fn.dmUploader = function(e) {
        return this.each(function() {
            a.data(this, n) || a.data(this, n, new t(this, e))
        })
    }, a(document).on("dragenter", function(e) {
        e.stopPropagation(), e.preventDefault()
    }), a(document).on("dragover", function(e) {
        e.stopPropagation(), e.preventDefault()
    }), a(document).on("drop", function(e) {
        e.stopPropagation(), e.preventDefault()
    })
}(jQuery),
function(D, h) {
    "use strict";

    function a(p, f, m, e, t) {
        function n() {
            var s, o, a;
            S = 1 < D.devicePixelRatio, i(m), 0 <= f.delay && setTimeout(function() {
                r(!0)
            }, f.delay), (f.delay < 0 || f.combined) && (e.e = (s = f.throttle, a = 0, function(e, t) {
                function n() {
                    a = +new Date,
                        function(e) {
                            "resize" === e.type && (w = T = -1), r(e.all)
                        }.call(p, e)
                }
                var i = +new Date - a;
                o && clearTimeout(o), s < i || !f.enableThrottle || t ? n() : o = setTimeout(n, s - i)
            }), e.a = function(e) {
                i(e), m.push.apply(m, e)
            }, e.g = function() {
                return m = $(m).filter(function() {
                    return !$(this).data(f.loadedName)
                })
            }, e.f = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = m.filter(function() {
                        return this === e[t]
                    });
                    n.length && r(!1, n)
                }
            }, r(), $(f.appendScroll).on("scroll." + t + " resize." + t, e.e))
        }

        function i(e) {
            for (var t = f.defaultImage, n = f.placeholder, i = f.imageBase, s = f.srcsetAttribute, o = f.loaderAttribute, a = f._f || {}, r = 0, l = (e = $(e).filter(function() {
                    var e = $(this),
                        t = g(this);
                    return !e.data(f.handledName) && (e.attr(f.attribute) || e.attr(s) || e.attr(o) || a[t] !== h)
                }).data("plugin_" + f.name, p)).length; r < l; r++) {
                var c = $(e[r]),
                    d = g(e[r]),
                    u = c.attr(f.imageBaseAttribute) || i;
                d === P && u && c.attr(s) && c.attr(s, function(e, t) {
                    if (t) {
                        var n = e.split(",");
                        e = "";
                        for (var i = 0, s = n.length; i < s; i++) e += t + n[i].trim() + (i !== s - 1 ? "," : "")
                    }
                    return e
                }(c.attr(s), u)), a[d] === h || c.attr(o) || c.attr(o, a[d]), d === P && t && !c.attr(A) ? c.attr(A, t) : d === P || !n || c.css(_) && "none" !== c.css(_) || c.css(_, "url('" + n + "')")
            }
        }

        function r(e, t) {
            if (m.length) {
                for (var n, i = t || m, s = !1, o = f.imageBase || "", a = f.srcsetAttribute, r = f.handledName, l = 0; l < i.length; l++)(e || t || (c = i[l], d = h = u = d = void 0, d = c.getBoundingClientRect(), u = f.scrollDirection, h = f.threshold, c = (0 <= T ? T : T = $(D).height()) + h > d.top && -h < d.bottom, d = (0 <= w ? w : w = $(D).width()) + h > d.left && -h < d.right, "vertical" === u ? c : ("horizontal" === u || c) && d)) && (n = $(i[l]), h = g(i[l]), u = n.attr(f.attribute), c = n.attr(f.imageBaseAttribute) || o, d = n.attr(f.loaderAttribute), n.data(r) || f.visibleOnly && !n.is(":visible") || !((u || n.attr(a)) && (h === P && (c + u !== n.attr(A) || n.attr(a) !== n.attr(M)) || h !== P && c + u !== n.css(_)) || d) || (s = !0, n.data(r, !0), function(t, e, n, i) {
                    ++y;
                    var s = function() {
                        b("onError", t), v(), s = $.noop
                    };
                    b("beforeLoad", t);
                    var o, a, r = f.attribute,
                        l = f.srcsetAttribute,
                        c = f.sizesAttribute,
                        d = f.retinaAttribute,
                        u = f.removeAttribute,
                        h = f.loadedName,
                        p = t.attr(d);
                    i ? (o = function() {
                        u && t.removeAttr(f.loaderAttribute), t.data(h, !0), b(x, t), setTimeout(v, 1), o = $.noop
                    }, t.off(E).one(E, s).one(C, o), b(i, t, function(e) {
                        e ? (t.off(C), o()) : (t.off(E), s())
                    }) || t.trigger(E)) : ((a = $(new Image)).one(E, s).one(C, function() {
                        t.hide(), e === P ? t.attr(k, a.attr(k)).attr(M, a.attr(M)).attr(A, a.attr(A)) : t.css(_, "url('" + a.attr(A) + "')"), t[f.effect](f.effectTime), u && (t.removeAttr(r + " " + l + " " + d + " " + f.imageBaseAttribute), c !== k && t.removeAttr(c)), t.data(h, !0), b(x, t), a.remove(), v()
                    }), p = (S && p ? p : t.attr(r)) || "", a.attr(k, t.attr(c)).attr(M, t.attr(l)).attr(A, p ? n + p : null), a.complete && a.trigger(C))
                }(n, h, c, d)));
                s && (m = $(m).filter(function() {
                    return !$(this).data(r)
                }))
            } else f.autoDestroy && p.destroy();
            var c, d, u, h
        }

        function g(e) {
            return e.tagName.toLowerCase()
        }

        function v() {
            --y, m.length || y || b("onFinishedAll")
        }

        function b(e) {
            return (e = f[e]) && (e.apply(p, [].slice.call(arguments, 1)), 1)
        }
        var y = 0,
            w = -1,
            T = -1,
            S = !1,
            x = "afterLoad",
            C = "load",
            E = "error",
            P = "img",
            A = "src",
            M = "srcset",
            k = "sizes",
            _ = "background-image";
        "event" === f.bind || s ? n() : $(D).on(C + "." + t, n)
    }

    function c(e, t) {
        var n = this,
            i = $.extend({}, n.config, t),
            s = {},
            o = i.name + "-" + ++r;
        return n.config = function(e, t) {
            return t === h ? i[e] : (i[e] = t, n)
        }, n.addItems = function(e) {
            return s.a && s.a("string" === $.type(e) ? $(e) : e), n
        }, n.getItems = function() {
            return s.g ? s.g() : {}
        }, n.update = function(e) {
            return s.e && s.e({}, !e), n
        }, n.force = function(e) {
            return s.f && s.f("string" === $.type(e) ? $(e) : e), n
        }, n.loadAll = function() {
            return s.e && s.e({
                all: !0
            }, !0), n
        }, n.destroy = function() {
            return $(i.appendScroll).off("." + o, s.e), $(D).off("." + o), s = {}, h
        }, a(n, i, e, s, o), i.chainable ? e : n
    }
    var $ = D.jQuery || D.Zepto,
        r = 0,
        s = !1;
    $.fn.Lazy = $.fn.lazy = function(e) {
        return new c(this, e)
    }, $.Lazy = $.lazy = function(e, t, n) {
        if ($.isFunction(t) && (n = t, t = []), $.isFunction(n)) {
            e = $.isArray(e) ? e : [e], t = $.isArray(t) ? t : [t];
            for (var i = c.prototype.config, s = i._f || (i._f = {}), o = 0, a = e.length; o < a; o++) i[e[o]] !== h && !$.isFunction(i[e[o]]) || (i[e[o]] = n);
            for (var r = 0, l = t.length; r < l; r++) s[t[r]] = e[0]
        }
    }, c.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: D,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: h,
        afterLoad: h,
        onError: h,
        onFinishedAll: h
    }, $(D).on("load", function() {
        s = !0
    })
}(window),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var u = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        O = "undefined" == typeof window ? {
            document: u,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        l = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function x(e, t) {
        var n = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s, o, a = e.trim();
                if (0 <= a.indexOf("<") && 0 <= a.indexOf(">")) {
                    var r = "div";
                    for (0 === a.indexOf("<li") && (r = "ul"), 0 === a.indexOf("<tr") && (r = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (r = "tr"), 0 === a.indexOf("<tbody") && (r = "table"), 0 === a.indexOf("<option") && (r = "select"), (o = u.createElement(r)).innerHTML = a, i = 0; i < o.childNodes.length; i += 1) n.push(o.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || u).querySelectorAll(e.trim()) : [u.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && n.push(s[i])
            } else if (e.nodeType || e === O || e === u) n.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) n.push(e[i]);
        return new l(n)
    }

    function o(e) {
        for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
        return t
    }
    x.fn = l.prototype, x.Class = l, x.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
            return this
        },
        attr: function(e, t) {
            var n = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === n.length) this[i].setAttribute(e, t);
                else
                    for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var n;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                return this
            }
            if (n = this[0]) return n.dom7ElementDataStorage && e in n.dom7ElementDataStorage ? n.dom7ElementDataStorage[e] : n.getAttribute("data-" + e) || void 0
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransform = e, n.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransitionDuration = e, n.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = e[0],
                o = e[1],
                a = e[2],
                i = e[3];

            function s(e) {
                var t = e.target;
                if (t) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), x(t).is(o)) a.apply(t, n);
                    else
                        for (var i = x(t).parents(), s = 0; s < i.length; s += 1) x(i[s]).is(o) && a.apply(i[s], n)
                }
            }

            function r(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
            }
            "function" == typeof e[1] && (n = e[0], a = e[1], i = e[2], o = void 0), i = i || !1;
            for (var l, c = n.split(" "), d = 0; d < this.length; d += 1) {
                var u = this[d];
                if (o)
                    for (l = 0; l < c.length; l += 1) {
                        var h = c[l];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
                            listener: a,
                            proxyListener: s
                        }), u.addEventListener(h, s, i)
                    } else
                        for (l = 0; l < c.length; l += 1) {
                            var p = c[l];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[p] || (u.dom7Listeners[p] = []), u.dom7Listeners[p].push({
                                listener: a,
                                proxyListener: r
                            }), u.addEventListener(p, r, i)
                        }
            }
            return this
        },
        off: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = e[0],
                i = e[1],
                s = e[2],
                o = e[3];
            "function" == typeof e[1] && (n = e[0], s = e[1], o = e[2], i = void 0), o = o || !1;
            for (var a = n.split(" "), r = 0; r < a.length; r += 1)
                for (var l = a[r], c = 0; c < this.length; c += 1) {
                    var d = this[c],
                        u = void 0;
                    if (!i && d.dom7Listeners ? u = d.dom7Listeners[l] : i && d.dom7LiveListeners && (u = d.dom7LiveListeners[l]), u && u.length)
                        for (var h = u.length - 1; 0 <= h; --h) {
                            var p = u[h];
                            (!s || p.listener !== s) && s || (d.removeEventListener(l, p.proxyListener, o), u.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var n = e[0].split(" "), i = e[1], s = 0; s < n.length; s += 1)
                for (var o = n[s], a = 0; a < this.length; a += 1) {
                    var r = this[a],
                        l = void 0;
                    try {
                        l = new O.CustomEvent(o, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = u.createEvent("Event")).initEvent(o, !0, !0), l.detail = i
                    }
                    r.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }), r.dispatchEvent(l), r.dom7EventData = [], delete r.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var n, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function o(e) {
                if (e.target === this)
                    for (t.call(this, e), n = 0; n < i.length; n += 1) s.off(i[n], o)
            }
            if (t)
                for (n = 0; n < i.length; n += 1) s.on(i[n], o);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    n = u.body,
                    i = e.clientTop || n.clientTop || 0,
                    s = e.clientLeft || n.clientLeft || 0,
                    n = e === O ? O.scrollY : e.scrollTop,
                    e = e === O ? O.scrollX : e.scrollLeft;
                return {
                    top: t.top + n - i,
                    left: t.left + e - s
                }
            }
            return null
        },
        css: function(e, t) {
            var n;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var i in e) this[n].style[i] = e[i];
                    return this
                }
                if (this[0]) return O.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e) return this;
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, n, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = x(e), n = 0; n < t.length; n += 1)
                    if (t[n] === i) return !0;
                return !1
            }
            if (e === u) return i === u;
            if (e === O) return i === O;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                    if (t[n] === i) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t = this.length;
            return new l(t - 1 < e ? [] : e < 0 ? (t = t + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var o = u.createElement("div");
                        for (o.innerHTML = e; o.firstChild;) this[s].appendChild(o.firstChild)
                    } else if (e instanceof l)
                    for (var a = 0; a < e.length; a += 1) this[s].appendChild(e[a]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            for (var t, n = 0; n < this.length; n += 1)
                if ("string" == typeof e) {
                    var i = u.createElement("div");
                    for (i.innerHTML = e, t = i.childNodes.length - 1; 0 <= t; --t) this[n].insertBefore(i.childNodes[t], this[n].childNodes[0])
                } else if (e instanceof l)
                for (t = 0; t < e.length; t += 1) this[n].insertBefore(e[t], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && x(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return new l([]);
            for (; n.nextElementSibling;) {
                var i = n.nextElementSibling;
                e && !x(i).is(e) || t.push(i), n = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && x(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return new l([]);
            for (; n.previousElementSibling;) {
                var i = n.previousElementSibling;
                e && !x(i).is(e) || t.push(i), n = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1) null === this[n].parentNode || e && !x(this[n].parentNode).is(e) || t.push(this[n].parentNode);
            return x(o(t))
        },
        parents: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].parentNode; i;) e && !x(i).is(e) || t.push(i), i = i.parentNode;
            return x(o(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && x(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(o(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            for (e = 0; e < t.length; e += 1)
                for (var i = x(t[e]), s = 0; s < i.length; s += 1) this[this.length] = i[s], this.length += 1;
            return this
        },
        styles: function() {
            return this[0] ? O.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        x.fn[e] = t[e]
    });
    var i, B = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                var n, i, s;
                void 0 === t && (t = "x");
                e = O.getComputedStyle(e, null);
                return O.WebKitCSSMatrix ? (6 < (i = e.transform || e.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), s = new O.WebKitCSSMatrix("none" === i ? "" : i)) : n = (s = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = O.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = O.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
            },
            parseUrlQuery: function(e) {
                var t, n, i, s, o = {},
                    e = e || O.location.href;
                if ("string" == typeof e && e.length)
                    for (s = (n = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < s; t += 1) i = n[t].replace(/#\S+/g, "").split("="), o[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return o
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (var o = Object.keys(Object(s)), a = 0, r = o.length; a < r; a += 1) {
                            var l = o[a],
                                c = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== c && c.enumerable && (B.isObject(n[l]) && B.isObject(s[l]) ? B.extend(n[l], s[l]) : !B.isObject(n[l]) && B.isObject(s[l]) ? (n[l] = {}, B.extend(n[l], s[l])) : n[l] = s[l])
                        }
                }
                return n
            }
        },
        G = (i = u.createElement("div"), {
            touch: O.Modernizr && !0 === O.Modernizr.touch || !!("ontouchstart" in O || O.DocumentTouch && u instanceof O.DocumentTouch),
            pointerEvents: !!(O.navigator.pointerEnabled || O.PointerEvent || "maxTouchPoints" in O.navigator),
            prefixedPointerEvents: !!O.navigator.msPointerEnabled,
            transition: "transition" in (b = i.style) || "webkitTransition" in b || "MozTransition" in b,
            transforms3d: O.Modernizr && !0 === O.Modernizr.csstransforms3d || ("webkitPerspective" in (r = i.style) || "MozPerspective" in r || "OPerspective" in r || "MsPerspective" in r || "perspective" in r),
            flexbox: function() {
                for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
                    if (t[n] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in O || "WebkitMutationObserver" in O,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    O.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in O
        }),
        e = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        n = {
            components: {
                configurable: !0
            }
        };
    e.prototype.on = function(e, t, n) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = n ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
        }), i
    }, e.prototype.once = function(i, s, e) {
        var o = this;
        return "function" != typeof s ? o : o.on(i, function e() {
            for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
            s.apply(o, t), o.off(i, e)
        }, e)
    }, e.prototype.off = function(e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function(n) {
            void 0 === i ? s.eventsListeners[n] = [] : s.eventsListeners[n] && s.eventsListeners[n].length && s.eventsListeners[n].forEach(function(e, t) {
                e === i && s.eventsListeners[n].splice(t, 1)
            })
        }), s
    }, e.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n, i, s, o = this;
        return o.eventsListeners && (s = "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), o) : (n = e[0].events, i = e[0].data, e[0].context || o), (Array.isArray(n) ? n : n.split(" ")).forEach(function(e) {
            var t;
            o.eventsListeners && o.eventsListeners[e] && (t = [], o.eventsListeners[e].forEach(function(e) {
                t.push(e)
            }), t.forEach(function(e) {
                e.apply(s, i)
            }))
        })), o
    }, e.prototype.useModulesParams = function(t) {
        var n = this;
        n.modules && Object.keys(n.modules).forEach(function(e) {
            e = n.modules[e];
            e.params && B.extend(t, e.params)
        })
    }, e.prototype.useModules = function(t) {
        void 0 === t && (t = {});
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var n = i.modules[e],
                e = t[e] || {};
            n.instance && Object.keys(n.instance).forEach(function(e) {
                var t = n.instance[e];
                i[e] = "function" == typeof t ? t.bind(i) : t
            }), n.on && i.on && Object.keys(n.on).forEach(function(e) {
                i.on(e, n.on[e])
            }), n.create && n.create.bind(i)(e)
        })
    }, n.components.set = function(e) {
        this.use && this.use(e)
    }, e.installModule = function(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + B.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function(e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, e.use = function(e) {
        for (var t = [], n = arguments.length - 1; 0 < n--;) t[n] = arguments[n + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(e, n);
    var s, a, r, c = {
            updateSize: function() {
                var e = this.$el,
                    t = void 0 !== this.params.width ? this.params.width : e[0].clientWidth,
                    n = void 0 !== this.params.height ? this.params.height : e[0].clientHeight;
                0 === t && this.isHorizontal() || 0 === n && this.isVertical() || (t = t - parseInt(e.css("padding-left"), 10) - parseInt(e.css("padding-right"), 10), n = n - parseInt(e.css("padding-top"), 10) - parseInt(e.css("padding-bottom"), 10), B.extend(this, {
                    width: t,
                    height: n,
                    size: this.isHorizontal() ? t : n
                }))
            },
            updateSlides: function() {
                var e = this,
                    t = e.params,
                    n = e.$wrapperEl,
                    i = e.size,
                    s = e.rtlTranslate,
                    o = e.wrongRTL,
                    a = e.virtual && t.virtual.enabled,
                    r = (a ? e.virtual : e).slides.length,
                    l = n.children("." + e.params.slideClass),
                    c = (a ? e.virtual.slides : l).length,
                    d = [],
                    u = [],
                    h = [],
                    p = t.slidesOffsetBefore;
                "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
                var f = t.slidesOffsetAfter;
                "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
                var m, g, v = e.snapGrid.length,
                    a = e.snapGrid.length,
                    b = t.spaceBetween,
                    y = -p,
                    w = 0,
                    T = 0;
                if (void 0 !== i) {
                    "string" == typeof b && 0 <= b.indexOf("%") && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, s ? l.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : l.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < t.slidesPerColumn && (m = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (m = Math.max(m, t.slidesPerView * t.slidesPerColumn)));
                    for (var S, x, C, E = t.slidesPerColumn, P = m / E, A = P - (t.slidesPerColumn * P - c), M = 0; M < c; M += 1) {
                        g = 0;
                        var k, _, D, $ = l.eq(M);
                        1 < t.slidesPerColumn && (D = _ = k = void 0, "column" === t.slidesPerColumnFill ? (D = M - (_ = Math.floor(M / E)) * E, (A < _ || _ === A && D === E - 1) && E <= (D += 1) && (D = 0, _ += 1), k = _ + D * m / E, $.css({
                            "-webkit-box-ordinal-group": k,
                            "-moz-box-ordinal-group": k,
                            "-ms-flex-order": k,
                            "-webkit-order": k,
                            order: k
                        })) : _ = M - (D = Math.floor(M / P)) * P, $.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== D && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", _).attr("data-swiper-row", D)), "none" !== $.css("display") && ("auto" === t.slidesPerView ? (k = O.getComputedStyle($[0], null), _ = $[0].style.transform, D = $[0].style.webkitTransform, _ && ($[0].style.transform = "none"), D && ($[0].style.webkitTransform = "none"), g = t.roundLengths ? e.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0) : e.isHorizontal() ? parseFloat(k.getPropertyValue("width")) + parseFloat(k.getPropertyValue("margin-left")) + parseFloat(k.getPropertyValue("margin-right")) : parseFloat(k.getPropertyValue("height")) + parseFloat(k.getPropertyValue("margin-top")) + parseFloat(k.getPropertyValue("margin-bottom")), _ && ($[0].style.transform = _), D && ($[0].style.webkitTransform = D), t.roundLengths && (g = Math.floor(g))) : (g = (i - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (g = Math.floor(g)), l[M] && (e.isHorizontal() ? l[M].style.width = g + "px" : l[M].style.height = g + "px")), l[M] && (l[M].swiperSlideSize = g), h.push(g), t.centeredSlides ? (y = y + g / 2 + w / 2 + b, 0 === w && 0 !== M && (y = y - i / 2 - b), 0 === M && (y = y - i / 2 - b), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), T % t.slidesPerGroup == 0 && d.push(y), u.push(y)) : (t.roundLengths && (y = Math.floor(y)), T % t.slidesPerGroup == 0 && d.push(y), u.push(y), y = y + g + b), e.virtualSize += g + b, w = g, T += 1)
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, i) + f, s && o && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }), G.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        })), 1 < t.slidesPerColumn && (e.virtualSize = (g + t.spaceBetween) * m, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        }), t.centeredSlides)) {
                        S = [];
                        for (var I = 0; I < d.length; I += 1) {
                            var L = d[I];
                            t.roundLengths && (L = Math.floor(L)), d[I] < e.virtualSize + d[0] && S.push(L)
                        }
                        d = S
                    }
                    if (!t.centeredSlides) {
                        S = [];
                        for (var H = 0; H < d.length; H += 1) {
                            var N = d[H];
                            t.roundLengths && (N = Math.floor(N)), d[H] <= e.virtualSize - i && S.push(N)
                        }
                        d = S, 1 < Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) && d.push(e.virtualSize - i)
                    }
                    0 === d.length && (d = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                        marginLeft: b + "px"
                    }) : l.css({
                        marginRight: b + "px"
                    }) : l.css({
                        marginBottom: b + "px"
                    })), t.centerInsufficientSlides && (x = 0, h.forEach(function(e) {
                        x += e + (t.spaceBetween || 0)
                    }), (x -= t.spaceBetween) < i && (C = (i - x) / 2, d.forEach(function(e, t) {
                        d[t] = e - C
                    }), u.forEach(function(e, t) {
                        u[t] = e + C
                    }))), B.extend(e, {
                        slides: l,
                        snapGrid: d,
                        slidesGrid: u,
                        slidesSizesGrid: h
                    }), c !== r && e.emit("slidesLengthChange"), d.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), u.length !== a && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                var t, n, i = this,
                    s = [],
                    o = 0;
                if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                        var a = i.activeIndex + t;
                        if (a > i.slides.length) break;
                        s.push(i.slides.eq(a)[0])
                    } else s.push(i.slides.eq(i.activeIndex)[0]);
                for (t = 0; t < s.length; t += 1) void 0 !== s[t] && (o = o < (n = s[t].offsetHeight) ? n : o);
                o && i.$wrapperEl.css("height", o + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this,
                    n = t.params,
                    i = t.slides,
                    s = t.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var o = s ? e : -e;
                    i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (var a = 0; a < i.length; a += 1) {
                        var r, l, c = i[a],
                            d = (o + (n.centeredSlides ? t.minTranslate() : 0) - c.swiperSlideOffset) / (c.swiperSlideSize + n.spaceBetween);
                        n.watchSlidesVisibility && (l = (r = -(o - c.swiperSlideOffset)) + t.slidesSizesGrid[a], (0 <= r && r < t.size || 0 < l && l <= t.size || r <= 0 && l >= t.size) && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(a), i.eq(a).addClass(n.slideVisibleClass))), c.progress = s ? -d : d
                    }
                    t.visibleSlides = x(t.visibleSlides)
                }
            },
            updateProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this,
                    n = t.params,
                    i = t.maxTranslate() - t.minTranslate(),
                    s = t.progress,
                    o = t.isBeginning,
                    a = o,
                    r = l = t.isEnd,
                    l = 0 == i ? o = !(s = 0) : (o = (s = (e - t.minTranslate()) / i) <= 0, 1 <= s);
                B.extend(t, {
                    progress: s,
                    isBeginning: o,
                    isEnd: l
                }), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), o && !a && t.emit("reachBeginning toEdge"), l && !r && t.emit("reachEnd toEdge"), (a && !o || r && !l) && t.emit("fromEdge"), t.emit("progress", s)
            },
            updateSlidesClasses: function() {
                var e = this.slides,
                    t = this.params,
                    n = this.$wrapperEl,
                    i = this.activeIndex,
                    s = this.realIndex,
                    o = this.virtual && t.virtual.enabled;
                e.removeClass(t.slideActiveClass + " " + t.slideNextClass + " " + t.slidePrevClass + " " + t.slideDuplicateActiveClass + " " + t.slideDuplicateNextClass + " " + t.slideDuplicatePrevClass), (i = o ? this.$wrapperEl.find("." + t.slideClass + '[data-swiper-slide-index="' + i + '"]') : e.eq(i)).addClass(t.slideActiveClass), t.loop && (i.hasClass(t.slideDuplicateClass) ? n.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]') : n.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]')).addClass(t.slideDuplicateActiveClass);
                s = i.nextAll("." + t.slideClass).eq(0).addClass(t.slideNextClass);
                t.loop && 0 === s.length && (s = e.eq(0)).addClass(t.slideNextClass);
                i = i.prevAll("." + t.slideClass).eq(0).addClass(t.slidePrevClass);
                t.loop && 0 === i.length && (i = e.eq(-1)).addClass(t.slidePrevClass), t.loop && ((s.hasClass(t.slideDuplicateClass) ? n.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]') : n.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]')).addClass(t.slideDuplicateNextClass), (i.hasClass(t.slideDuplicateClass) ? n.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]') : n.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]')).addClass(t.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                var t = this,
                    n = t.rtlTranslate ? t.translate : -t.translate,
                    i = t.slidesGrid,
                    s = t.snapGrid,
                    o = t.params,
                    a = t.activeIndex,
                    r = t.realIndex,
                    l = t.snapIndex,
                    c = e;
                if (void 0 === c) {
                    for (var d = 0; d < i.length; d += 1) void 0 !== i[d + 1] ? n >= i[d] && n < i[d + 1] - (i[d + 1] - i[d]) / 2 ? c = d : n >= i[d] && n < i[d + 1] && (c = d + 1) : n >= i[d] && (c = d);
                    o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }(o = 0 <= s.indexOf(n) ? s.indexOf(n) : Math.floor(c / o.slidesPerGroup)) >= s.length && (o = s.length - 1), c !== a ? (s = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10), B.extend(t, {
                    snapIndex: o,
                    realIndex: s,
                    previousIndex: a,
                    activeIndex: c
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), r !== s && t.emit("realIndexChange"), t.emit("slideChange")) : o !== l && (t.snapIndex = o, t.emit("snapIndexChange"))
            },
            updateClickedSlide: function(e) {
                var t = this,
                    n = t.params,
                    i = x(e.target).closest("." + n.slideClass)[0],
                    s = !1;
                if (i)
                    for (var o = 0; o < t.slides.length; o += 1) t.slides[o] === i && (s = !0);
                if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(x(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = x(i).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        d = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    n = this.rtlTranslate,
                    i = this.translate,
                    s = this.$wrapperEl;
                if (t.virtualTranslate) return n ? -i : i;
                e = B.getTranslate(s[0], e);
                return n && (e = -e), e || 0
            },
            setTranslate: function(e, t) {
                var n = this,
                    i = n.rtlTranslate,
                    s = n.params,
                    o = n.$wrapperEl,
                    a = n.progress,
                    r = 0,
                    l = 0;
                n.isHorizontal() ? r = i ? -e : e : l = e, s.roundLengths && (r = Math.floor(r), l = Math.floor(l)), s.virtualTranslate || (G.transforms3d ? o.transform("translate3d(" + r + "px, " + l + "px, 0px)") : o.transform("translate(" + r + "px, " + l + "px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? r : l;
                l = n.maxTranslate() - n.minTranslate();
                (0 == l ? 0 : (e - n.minTranslate()) / l) !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        h = {
            slideTo: function(e, t, n, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                var s = this,
                    o = e;
                o < 0 && (o = 0);
                var a = s.params,
                    r = s.snapGrid,
                    l = s.slidesGrid,
                    c = s.previousIndex,
                    d = s.activeIndex,
                    u = s.rtlTranslate;
                if (s.animating && a.preventInteractionOnTransition) return !1;
                e = Math.floor(o / a.slidesPerGroup);
                e >= r.length && (e = r.length - 1), (d || a.initialSlide || 0) === (c || 0) && n && s.emit("beforeSlideChangeStart");
                var h, p = -r[e];
                if (s.updateProgress(p), a.normalizeSlideIndex)
                    for (var f = 0; f < l.length; f += 1) - Math.floor(100 * p) >= Math.floor(100 * l[f]) && (o = f);
                if (s.initialized && o !== d) {
                    if (!s.allowSlideNext && p < s.translate && p < s.minTranslate()) return !1;
                    if (!s.allowSlidePrev && p > s.translate && p > s.maxTranslate() && (d || 0) !== o) return !1
                }
                return h = d < o ? "next" : o < d ? "prev" : "reset", u && -p === s.translate || !u && p === s.translate ? (s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(p), "reset" != h && (s.transitionStart(n, h), s.transitionEnd(n, h)), !1) : (0 !== t && G.transition ? (s.setTransition(t), s.setTranslate(p), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(n, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, h))
                }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(p), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(n, h), s.transitionEnd(n, h)), !0)
            },
            slideToLoop: function(e, t, n, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
                return this.params.loop && (e += this.loopedSlides), this.slideTo(e, t, n, i)
            },
            slideNext: function(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this.params,
                    s = this.animating;
                return i.loop ? !s && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + i.slidesPerGroup, e, t, n)) : this.slideTo(this.activeIndex + i.slidesPerGroup, e, t, n)
            },
            slidePrev: function(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    o = i.animating,
                    a = i.snapGrid,
                    r = i.slidesGrid,
                    l = i.rtlTranslate;
                if (s.loop) {
                    if (o) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }

                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var d, o = c(l ? i.translate : -i.translate),
                    l = a.map(c),
                    o = (r.map(c), a[l.indexOf(o)], a[l.indexOf(o) - 1]);
                return void 0 !== o && (d = r.indexOf(o)) < 0 && (d = i.activeIndex - 1), i.slideTo(d, e, t, n)
            },
            slideReset: function(e, t, n) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
            },
            slideToClosest: function(e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i, s, o = this,
                    a = o.activeIndex,
                    r = Math.floor(a / o.params.slidesPerGroup);
                return r < o.snapGrid.length - 1 && (i = o.rtlTranslate ? o.translate : -o.translate, s = o.snapGrid[r], (o.snapGrid[r + 1] - s) / 2 < i - s && (a = o.params.slidesPerGroup)), o.slideTo(a, e, t, n)
            },
            slideToClickedSlide: function() {
                var e, t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    s = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                    o = t.clickedIndex;
                n.loop ? t.animating || (e = parseInt(x(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? o < t.loopedSlides - s / 2 || o > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), o = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), B.nextTick(function() {
                    t.slideTo(o)
                })) : t.slideTo(o) : o > t.slides.length - s ? (t.loopFix(), o = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), B.nextTick(function() {
                    t.slideTo(o)
                })) : t.slideTo(o)) : t.slideTo(o)
            }
        },
        p = {
            loopCreate: function() {
                var i = this,
                    e = i.params,
                    t = i.$wrapperEl;
                t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
                var s = t.children("." + e.slideClass);
                if (e.loopFillGroupWithBlank) {
                    var n = e.slidesPerGroup - s.length % e.slidesPerGroup;
                    if (n !== e.slidesPerGroup) {
                        for (var o = 0; o < n; o += 1) {
                            var a = x(u.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                            t.append(a)
                        }
                        s = t.children("." + e.slideClass)
                    }
                }
                "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
                var r = [],
                    l = [];
                s.each(function(e, t) {
                    var n = x(t);
                    e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && r.push(t), n.attr("data-swiper-slide-index", e)
                });
                for (var c = 0; c < l.length; c += 1) t.append(x(l[c].cloneNode(!0)).addClass(e.slideDuplicateClass));
                for (var d = r.length - 1; 0 <= d; --d) t.prepend(x(r[d].cloneNode(!0)).addClass(e.slideDuplicateClass))
            },
            loopFix: function() {
                var e, t = this,
                    n = t.params,
                    i = t.activeIndex,
                    s = t.slides,
                    o = t.loopedSlides,
                    a = t.allowSlidePrev,
                    r = t.allowSlideNext,
                    l = t.snapGrid,
                    c = t.rtlTranslate;
                t.allowSlidePrev = !0, t.allowSlideNext = !0;
                l = -l[i] - t.getTranslate();
                i < o ? (e = s.length - 3 * o + i, e += o, t.slideTo(e, 0, !1, !0) && 0 != l && t.setTranslate((c ? -t.translate : t.translate) - l)) : ("auto" === n.slidesPerView && 2 * o <= i || i >= s.length - o) && (e = -s.length + i + o, e += o, t.slideTo(e, 0, !1, !0) && 0 != l && t.setTranslate((c ? -t.translate : t.translate) - l)), t.allowSlidePrev = a, t.allowSlideNext = r
            },
            loopDestroy: function() {
                var e = this.$wrapperEl,
                    t = this.params,
                    n = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), n.removeAttr("data-swiper-slide-index")
            }
        },
        f = {
            setGrabCursor: function(e) {
                var t;
                G.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || ((t = this.el).style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab")
            },
            unsetGrabCursor: function() {
                G.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
            }
        },
        m = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    n = this.params;
                if (n.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var i = 0; i < e.length; i += 1) e[i] && t.append(e[i]);
                else t.append(e);
                n.loop && this.loopCreate(), n.observer && G.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    n = this.$wrapperEl,
                    i = this.activeIndex;
                t.loop && this.loopDestroy();
                var s = i + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) e[o] && n.prepend(e[o]);
                    s = i + e.length
                } else n.prepend(e);
                t.loop && this.loopCreate(), t.observer && G.observer || this.update(), this.slideTo(s, 0, !1)
            },
            addSlide: function(e, t) {
                var n = this,
                    i = n.$wrapperEl,
                    s = n.params,
                    o = n.activeIndex;
                s.loop && (o -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + s.slideClass));
                var a = n.slides.length;
                if (e <= 0) n.prependSlide(t);
                else if (a <= e) n.appendSlide(t);
                else {
                    for (var r = e < o ? o + 1 : o, l = [], c = a - 1; e <= c; --c) {
                        var d = n.slides.eq(c);
                        d.remove(), l.unshift(d)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                        r = e < o ? o + t.length : o
                    } else i.append(t);
                    for (var h = 0; h < l.length; h += 1) i.append(l[h]);
                    s.loop && n.loopCreate(), s.observer && G.observer || n.update(), s.loop ? n.slideTo(r + n.loopedSlides, 0, !1) : n.slideTo(r, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                n.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
                var o, a = s;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) o = e[r], t.slides[o] && t.slides.eq(o).remove(), o < a && --a;
                    a = Math.max(a, 0)
                } else o = e, t.slides[o] && t.slides.eq(o).remove(), o < a && --a, a = Math.max(a, 0);
                n.loop && t.loopCreate(), n.observer && G.observer || t.update(), n.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        g = (y = O.navigator.userAgent, P = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: O.cordova || O.phonegap,
            phonegap: O.cordova || O.phonegap
        }, s = y.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), a = y.match(/(Android);?[\s\/]+([\d.]+)?/), b = y.match(/(iPad).*OS\s([\d_]+)/), r = y.match(/(iPod)(.*OS\s([\d_]+))?/), n = !b && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/), s && (P.os = "windows", P.osVersion = s[2], P.windows = !0), a && !s && (P.os = "android", P.osVersion = a[2], P.android = !0, P.androidChrome = 0 <= y.toLowerCase().indexOf("chrome")), (b || n || r) && (P.os = "ios", P.ios = !0), n && !r && (P.osVersion = n[2].replace(/_/g, "."), P.iphone = !0), b && (P.osVersion = b[2].replace(/_/g, "."), P.ipad = !0), r && (P.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, P.iphone = !0), P.ios && P.osVersion && 0 <= y.indexOf("Version/") && "10" === P.osVersion.split(".")[0] && (P.osVersion = y.toLowerCase().split("version/")[1].split(" ")[0]), P.desktop = !(P.os || P.android || P.webView), P.webView = (n || b || r) && y.match(/.*AppleWebKit(?!.*Safari)/i), P.os && "ios" === P.os && (b = P.osVersion.split("."), y = u.querySelector('meta[name="viewport"]'), P.minimalUi = !P.webView && (r || n) && (7 == +b[0] ? 1 <= +b[1] : 7 < +b[0]) && y && 0 <= y.getAttribute("content").indexOf("minimal-ui")), P.pixelRatio = O.devicePixelRatio || 1, P);

    function v() {
        var e, t, n, i = this,
            s = i.params,
            o = i.el;
        o && 0 === o.offsetWidth || (s.breakpoints && i.setBreakpoint(), e = i.allowSlideNext, t = i.allowSlidePrev, n = i.snapGrid, i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), s.freeMode ? (o = Math.min(Math.max(i.translate, i.maxTranslate()), i.minTranslate()), i.setTranslate(o), i.updateActiveIndex(), i.updateSlidesClasses(), s.autoHeight && i.updateAutoHeight()) : (i.updateSlidesClasses(), ("auto" === s.slidesPerView || 1 < s.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)), i.allowSlidePrev = t, i.allowSlideNext = e, i.params.watchOverflow && n !== i.snapGrid && i.checkOverflow())
    }
    var b = {
            attachEvents: function() {
                var e = this,
                    t = e.params,
                    n = e.touchEvents,
                    i = e.el,
                    s = e.wrapperEl;
                e.onTouchStart = function(e) {
                    var t, n, i, s, o = this,
                        a = o.touchEventsData,
                        r = o.params,
                        l = o.touches;
                    o.animating && r.preventInteractionOnTransition || ((t = e).originalEvent && (t = t.originalEvent), a.isTouchEvent = "touchstart" === t.type, !a.isTouchEvent && "which" in t && 3 === t.which || !a.isTouchEvent && "button" in t && 0 < t.button || a.isTouched && a.isMoved || (r.noSwiping && x(t.target).closest(r.noSwipingSelector || "." + r.noSwipingClass)[0] ? o.allowClick = !0 : r.swipeHandler && !x(t).closest(r.swipeHandler)[0] || (l.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX, l.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY, n = l.currentX, s = l.currentY, i = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection, e = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold, i && (n <= e || n >= O.screen.width - e) || (B.extend(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = n, l.startY = s, a.touchStartTime = B.now(), o.allowClick = !0, o.updateSize(), o.swipeDirection = void 0, 0 < r.threshold && (a.allowThresholdMove = !1), "touchstart" !== t.type && (s = !0, x(t.target).is(a.formElements) && (s = !1), u.activeElement && x(u.activeElement).is(a.formElements) && u.activeElement !== t.target && u.activeElement.blur(), s = s && o.allowTouchMove && r.touchStartPreventDefault, (r.touchStartForcePreventDefault || s) && t.preventDefault()), o.emit("touchStart", t)))))
                }.bind(e), e.onTouchMove = function(e) {
                    var t = this,
                        n = t.touchEventsData,
                        i = t.params,
                        s = t.touches,
                        o = t.rtlTranslate,
                        a = e;
                    if (a.originalEvent && (a = a.originalEvent), n.isTouched) {
                        if (!n.isTouchEvent || "mousemove" !== a.type) {
                            var r = ("touchmove" === a.type ? a.targetTouches[0] : a).pageX,
                                l = ("touchmove" === a.type ? a.targetTouches[0] : a).pageY;
                            if (a.preventedByNestedSwiper) return s.startX = r, void(s.startY = l);
                            if (!t.allowTouchMove) return t.allowClick = !1, void(n.isTouched && (B.extend(s, {
                                startX: r,
                                startY: l,
                                currentX: r,
                                currentY: l
                            }), n.touchStartTime = B.now()));
                            if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                if (t.isVertical()) {
                                    if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                                } else if (r < s.startX && t.translate <= t.maxTranslate() || r > s.startX && t.translate >= t.minTranslate()) return;
                            if (n.isTouchEvent && u.activeElement && a.target === u.activeElement && x(a.target).is(n.formElements)) return n.isMoved = !0, void(t.allowClick = !1);
                            if (n.allowTouchCallbacks && t.emit("touchMove", a), !(a.targetTouches && 1 < a.targetTouches.length)) {
                                s.currentX = r, s.currentY = l;
                                e = s.currentX - s.startX, r = s.currentY - s.startY;
                                if (!(t.params.threshold && Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) < t.params.threshold))
                                    if (void 0 === n.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : 25 <= e * e + r * r && (l = 180 * Math.atan2(Math.abs(r), Math.abs(e)) / Math.PI, n.isScrolling = t.isHorizontal() ? l > i.touchAngle : 90 - l > i.touchAngle)), n.isScrolling && t.emit("touchMoveOpposite", a), void 0 === n.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
                                    else if (n.startMoving) {
                                    t.allowClick = !1, a.preventDefault(), i.touchMoveStopPropagation && !i.nested && a.stopPropagation(), n.isMoved || (i.loop && t.loopFix(), n.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", a)), t.emit("sliderMove", a), n.isMoved = !0;
                                    e = t.isHorizontal() ? e : r;
                                    s.diff = e, e *= i.touchRatio, o && (e = -e), t.swipeDirection = 0 < e ? "prev" : "next", n.currentTranslate = e + n.startTranslate;
                                    r = !0, o = i.resistanceRatio;
                                    if (i.touchReleaseOnEdges && (o = 0), 0 < e && n.currentTranslate > t.minTranslate() ? (r = !1, i.resistance && (n.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + n.startTranslate + e, o))) : e < 0 && n.currentTranslate < t.maxTranslate() && (r = !1, i.resistance && (n.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - n.startTranslate - e, o))), r && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), 0 < i.threshold) {
                                        if (!(Math.abs(e) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                                        if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                    }
                                    i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === n.velocities.length && n.velocities.push({
                                        position: s[t.isHorizontal() ? "startX" : "startY"],
                                        time: n.touchStartTime
                                    }), n.velocities.push({
                                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                        time: B.now()
                                    })), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate))
                                }
                            }
                        }
                    } else n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", a)
                }.bind(e), e.onTouchEnd = function(e) {
                    var t = this,
                        n = t.touchEventsData,
                        i = t.params,
                        s = t.touches,
                        o = t.rtlTranslate,
                        a = t.$wrapperEl,
                        r = t.slidesGrid,
                        l = t.snapGrid,
                        c = e;
                    if (c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                    i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var d, u = B.now(),
                        e = u - n.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), e < 300 && 300 < u - n.lastClickTime && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = B.nextTick(function() {
                            t && !t.destroyed && t.emit("click", c)
                        }, 300)), e < 300 && u - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", c))), n.lastClickTime = B.now(), B.nextTick(function() {
                            t.destroyed || (t.allowClick = !0)
                        }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                    if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = i.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, i.freeMode)
                        if (d < -t.minTranslate()) t.slideTo(t.activeIndex);
                        else if (d > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (i.freeModeMomentum) {
                            1 < n.velocities.length ? (v = n.velocities.pop(), p = n.velocities.pop(), h = v.position - p.position, p = v.time - p.time, t.velocity = h / p, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < p || 300 < B.now() - v.time) && (t.velocity = 0)) : t.velocity = 0, t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                            var h = 1e3 * i.freeModeMomentumRatio,
                                p = t.velocity * h,
                                f = t.translate + p;
                            o && (f = -f);
                            var m, g, v = !1,
                                p = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                            if (f < t.maxTranslate()) i.freeModeMomentumBounce ? (f + t.maxTranslate() < -p && (f = t.maxTranslate() - p), m = t.maxTranslate(), v = !0, n.allowMomentumBounce = !0) : f = t.maxTranslate(), i.loop && i.centeredSlides && (g = !0);
                            else if (f > t.minTranslate()) i.freeModeMomentumBounce ? (f - t.minTranslate() > p && (f = t.minTranslate() + p), m = t.minTranslate(), v = !0, n.allowMomentumBounce = !0) : f = t.minTranslate(), i.loop && i.centeredSlides && (g = !0);
                            else if (i.freeModeSticky) {
                                for (var b, y = 0; y < l.length; y += 1)
                                    if (l[y] > -f) {
                                        b = y;
                                        break
                                    } f = -(Math.abs(l[b] - f) < Math.abs(l[b - 1] - f) || "next" === t.swipeDirection ? l[b] : l[b - 1])
                            }
                            if (g && t.once("transitionEnd", function() {
                                    t.loopFix()
                                }), 0 !== t.velocity) h = o ? Math.abs((-f - t.translate) / t.velocity) : Math.abs((f - t.translate) / t.velocity);
                            else if (i.freeModeSticky) return void t.slideToClosest();
                            i.freeModeMomentumBounce && v ? (t.updateProgress(m), t.setTransition(h), t.setTranslate(f), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function() {
                                t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(m), a.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            })) : t.velocity ? (t.updateProgress(f), t.setTransition(h), t.setTranslate(f), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(f), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else if (i.freeModeSticky) return void t.slideToClosest();
                        (!i.freeModeMomentum || e >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    } else {
                        for (var w = 0, T = t.slidesSizesGrid[0], S = 0; S < r.length; S += i.slidesPerGroup) void 0 !== r[S + i.slidesPerGroup] ? d >= r[S] && d < r[S + i.slidesPerGroup] && (T = r[(w = S) + i.slidesPerGroup] - r[S]) : d >= r[S] && (w = S, T = r[r.length - 1] - r[r.length - 2]);
                        h = (d - r[w]) / T;
                        e > i.longSwipesMs ? i.longSwipes ? ("next" === t.swipeDirection && (h >= i.longSwipesRatio ? t.slideTo(w + i.slidesPerGroup) : t.slideTo(w)), "prev" === t.swipeDirection && (h > 1 - i.longSwipesRatio ? t.slideTo(w + i.slidesPerGroup) : t.slideTo(w))) : t.slideTo(t.activeIndex) : i.shortSwipes ? ("next" === t.swipeDirection && t.slideTo(w + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(w)) : t.slideTo(t.activeIndex)
                    }
                }.bind(e), e.onClick = function(e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }.bind(e);
                var o = "container" === t.touchEventsTarget ? i : s,
                    i = !!t.nested;
                G.touch || !G.pointerEvents && !G.prefixedPointerEvents ? (G.touch && (s = !("touchstart" !== n.start || !G.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, o.addEventListener(n.start, e.onTouchStart, s), o.addEventListener(n.move, e.onTouchMove, G.passiveListener ? {
                    passive: !1,
                    capture: i
                } : i), o.addEventListener(n.end, e.onTouchEnd, s)), (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !G.touch && g.ios) && (o.addEventListener("mousedown", e.onTouchStart, !1), u.addEventListener("mousemove", e.onTouchMove, i), u.addEventListener("mouseup", e.onTouchEnd, !1))) : (o.addEventListener(n.start, e.onTouchStart, !1), u.addEventListener(n.move, e.onTouchMove, i), u.addEventListener(n.end, e.onTouchEnd, !1)), (t.preventClicks || t.preventClicksPropagation) && o.addEventListener("click", e.onClick, !0), e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", v, !0)
            },
            detachEvents: function() {
                var e = this,
                    t = e.params,
                    n = e.touchEvents,
                    i = e.el,
                    s = e.wrapperEl,
                    o = "container" === t.touchEventsTarget ? i : s,
                    i = !!t.nested;
                G.touch || !G.pointerEvents && !G.prefixedPointerEvents ? (G.touch && (s = !("onTouchStart" !== n.start || !G.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, o.removeEventListener(n.start, e.onTouchStart, s), o.removeEventListener(n.move, e.onTouchMove, i), o.removeEventListener(n.end, e.onTouchEnd, s)), (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !G.touch && g.ios) && (o.removeEventListener("mousedown", e.onTouchStart, !1), u.removeEventListener("mousemove", e.onTouchMove, i), u.removeEventListener("mouseup", e.onTouchEnd, !1))) : (o.removeEventListener(n.start, e.onTouchStart, !1), u.removeEventListener(n.move, e.onTouchMove, i), u.removeEventListener(n.end, e.onTouchEnd, !1)), (t.preventClicks || t.preventClicksPropagation) && o.removeEventListener("click", e.onClick, !0), e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", v)
            }
        },
        y = {
            setBreakpoint: function() {
                var e = this,
                    t = e.activeIndex,
                    n = e.initialized,
                    i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s, o, a = e.params,
                    r = a.breakpoints;
                !r || r && 0 === Object.keys(r).length || (s = e.getBreakpoint(r)) && e.currentBreakpoint !== s && ((o = s in r ? r[s] : void 0) && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                    var t = o[e];
                    void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                }), r = o || e.originalParams, a = a.loop && r.slidesPerView !== a.slidesPerView, B.extend(e.params, r), B.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), e.currentBreakpoint = s, a && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", r))
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1,
                        n = [];
                    Object.keys(e).forEach(function(e) {
                        n.push(e)
                    }), n.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < n.length; i += 1) {
                        var s = n[i];
                        this.params.breakpointsInverse ? s <= O.innerWidth && (t = s) : s >= O.innerWidth && !t && (t = s)
                    }
                    return t || "max"
                }
            }
        },
        C = {
            isIE: !!O.navigator.userAgent.match(/Trident/g) || !!O.navigator.userAgent.match(/MSIE/g),
            isEdge: !!O.navigator.userAgent.match(/Edge/g),
            isSafari: 0 <= (P = O.navigator.userAgent.toLowerCase()).indexOf("safari") && P.indexOf("chrome") < 0 && P.indexOf("android") < 0,
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(O.navigator.userAgent)
        },
        w = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        T = {
            update: c,
            translate: d,
            transition: {
                setTransition: function(e, t) {
                    this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this.activeIndex,
                        i = this.params,
                        s = this.previousIndex;
                    i.autoHeight && this.updateAutoHeight();
                    t = t || (s < n ? "next" : n < s ? "prev" : "reset");
                    this.emit("transitionStart"), e && n !== s && ("reset" !== t ? (this.emit("slideChangeTransitionStart"), "next" === t ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")) : this.emit("slideResetTransitionStart"))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this.activeIndex,
                        i = this.previousIndex;
                    this.animating = !1, this.setTransition(0);
                    t = t || (i < n ? "next" : n < i ? "prev" : "reset");
                    this.emit("transitionEnd"), e && n !== i && ("reset" !== t ? (this.emit("slideChangeTransitionEnd"), "next" === t ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")) : this.emit("slideResetTransitionEnd"))
                }
            },
            slide: h,
            loop: p,
            grabCursor: f,
            manipulation: m,
            events: b,
            breakpoints: y,
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var t = this.classNames,
                        n = this.params,
                        e = this.rtl,
                        i = this.$el,
                        s = [];
                    s.push(n.direction), n.freeMode && s.push("free-mode"), G.flexbox || s.push("no-flexbox"), n.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < n.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (C.isIE || C.isEdge) && (G.pointerEvents || G.prefixedPointerEvents) && s.push("wp8-" + n.direction), s.forEach(function(e) {
                        t.push(n.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, n, i, s, o) {
                    function a() {
                        o && o()
                    }(!e.complete || !s) && t ? ((s = new O.Image).onload = a, s.onerror = a, i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : a()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                        var i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        S = {},
        E = function(l) {
            function c() {
                for (var e, n, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                n = (n = 1 === t.length && t[0].constructor && t[0].constructor === Object ? t[0] : (e = t[0], t[1])) || {}, n = B.extend({}, n), e && !n.el && (n.el = e), l.call(this, n), Object.keys(T).forEach(function(t) {
                    Object.keys(T[t]).forEach(function(e) {
                        c.prototype[e] || (c.prototype[e] = T[t][e])
                    })
                });
                var s = this;
                void 0 === s.modules && (s.modules = {}), Object.keys(s.modules).forEach(function(e) {
                    var t = s.modules[e];
                    t.params && (e = Object.keys(t.params)[0], "object" == typeof(t = t.params[e]) && null !== t && e in n && "enabled" in t && (!0 === n[e] && (n[e] = {
                        enabled: !0
                    }), "object" != typeof n[e] || "enabled" in n[e] || (n[e].enabled = !0), n[e] || (n[e] = {
                        enabled: !1
                    })))
                });
                var o = B.extend({}, w);
                s.useModulesParams(o), s.params = B.extend({}, o, S, n), s.originalParams = B.extend({}, s.params), s.passedParams = B.extend({}, n);
                var a = (s.$ = x)(s.params.el);
                if (e = a[0]) {
                    if (1 < a.length) {
                        var r = [];
                        return a.each(function(e, t) {
                            t = B.extend({}, n, {
                                el: t
                            });
                            r.push(new c(t))
                        }), r
                    }
                    e.swiper = s, a.data("swiper", s);
                    var o = a.children("." + s.params.wrapperClass);
                    return B.extend(s, {
                        $el: a,
                        el: e,
                        $wrapperEl: o,
                        wrapperEl: o[0],
                        classNames: [],
                        slides: x(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === s.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === s.params.direction
                        },
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
                        rtlTranslate: "horizontal" === s.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
                        wrongRTL: "-webkit-box" === o.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEvents: (a = ["touchstart", "touchmove", "touchend"], o = ["mousedown", "mousemove", "mouseup"], G.pointerEvents ? o = ["pointerdown", "pointermove", "pointerup"] : G.prefixedPointerEvents && (o = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), s.touchEventsTouch = {
                            start: a[0],
                            move: a[1],
                            end: a[2]
                        }, s.touchEventsDesktop = {
                            start: o[0],
                            move: o[1],
                            end: o[2]
                        }, G.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: B.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), s.useModules(), s.params.init && s.init(), s
                }
            }
            l && (c.__proto__ = l);
            var e = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((c.prototype = Object.create(l && l.prototype)).constructor = c).prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    n = this.slidesGrid,
                    i = this.size,
                    s = this.activeIndex,
                    o = 1;
                if (e.centeredSlides) {
                    for (var a, r = t[s].swiperSlideSize, l = s + 1; l < t.length; l += 1) t[l] && !a && (o += 1, i < (r += t[l].swiperSlideSize) && (a = !0));
                    for (var c = s - 1; 0 <= c; --c) t[c] && !a && (o += 1, i < (r += t[c].swiperSlideSize) && (a = !0))
                } else
                    for (var d = s + 1; d < t.length; d += 1) n[d] - n[s] < i && (o += 1);
                return o
            }, c.prototype.update = function() {
                var e, t, n = this;

                function i() {
                    var e = n.rtlTranslate ? -1 * n.translate : n.translate,
                        e = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
                    n.setTranslate(e), n.updateActiveIndex(), n.updateSlidesClasses()
                }
                n && !n.destroyed && (e = n.snapGrid, (t = n.params).breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (i(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== n.snapGrid && n.checkOverflow(), n.emit("update"))
            }, c.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, c.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var n = this,
                    i = n.params,
                    s = n.$el,
                    o = n.$wrapperEl,
                    a = n.slides;
                return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function(e) {
                    n.off(e)
                }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), B.deleteProps(n)), n.destroyed = !0), null
            }, c.extendDefaults = function(e) {
                B.extend(S, e)
            }, e.extendedDefaults.get = function() {
                return S
            }, e.defaults.get = function() {
                return w
            }, e.Class.get = function() {
                return l
            }, e.$.get = function() {
                return x
            }, Object.defineProperties(c, e), c
        }(e),
        P = {
            name: "device",
            proto: {
                device: g
            },
            static: {
                device: g
            }
        },
        c = {
            name: "support",
            proto: {
                support: G
            },
            static: {
                support: G
            }
        },
        d = {
            name: "browser",
            proto: {
                browser: C
            },
            static: {
                browser: C
            }
        },
        h = {
            name: "resize",
            create: function() {
                var e = this;
                B.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    O.addEventListener("resize", this.resize.resizeHandler), O.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    O.removeEventListener("resize", this.resize.resizeHandler), O.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        A = {
            func: O.MutationObserver || O.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var n = this,
                    i = new A.func(function(e) {
                        var t;
                        1 !== e.length ? (t = function() {
                            n.emit("observerUpdate", e[0])
                        }, O.requestAnimationFrame ? O.requestAnimationFrame(t) : O.setTimeout(t, 0)) : n.emit("observerUpdate", e[0])
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), n.observer.observers.push(i)
            },
            init: function() {
                if (G.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: !1
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        p = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1
            },
            create: function() {
                B.extend(this, {
                    observer: {
                        init: A.init.bind(this),
                        attach: A.attach.bind(this),
                        destroy: A.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        M = {
            update: function(e) {
                var t = this,
                    n = t.params,
                    i = n.slidesPerView,
                    s = n.slidesPerGroup,
                    o = n.centeredSlides,
                    a = t.params.virtual,
                    r = a.addSlidesBefore,
                    l = a.addSlidesAfter,
                    c = t.virtual,
                    d = c.from,
                    u = c.to,
                    h = c.slides,
                    p = c.slidesGrid,
                    f = c.renderSlide,
                    n = c.offset;
                t.updateActiveIndex();
                var a = t.activeIndex || 0,
                    c = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                    l = o ? (v = Math.floor(i / 2) + s + r, Math.floor(i / 2) + s + l) : (v = i + (s - 1) + r, s + l),
                    m = Math.max((a || 0) - l, 0),
                    g = Math.min((a || 0) + v, h.length - 1),
                    v = (t.slidesGrid[m] || 0) - (t.slidesGrid[0] || 0);

                function b() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (B.extend(t.virtual, {
                        from: m,
                        to: g,
                        offset: v,
                        slidesGrid: t.slidesGrid
                    }), d === m && u === g && !e) return t.slidesGrid !== p && v !== n && t.slides.css(c, v + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: v,
                    from: m,
                    to: g,
                    slides: function() {
                        for (var e = [], t = m; t <= g; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void b();
                var y = [],
                    w = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var T = d; T <= u; T += 1)(T < m || g < T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
                for (var S = 0; S < h.length; S += 1) m <= S && S <= g && (void 0 === u || e ? w.push(S) : (u < S && w.push(S), S < d && y.push(S)));
                w.forEach(function(e) {
                    t.$wrapperEl.append(f(h[e], e))
                }), y.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(f(h[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(c, v + "px"), b()
            },
            renderSlide: function(e, t) {
                var n = this.params.virtual;
                if (n.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                e = n.renderSlide ? x(n.renderSlide.call(this, e, t)) : x('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return e.attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t), n.cache && (this.virtual.cache[t] = e), e
            },
            appendSlide: function(e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t, n;
                this.virtual.slides.unshift(e), this.params.virtual.cache && (t = this.virtual.cache, n = {}, Object.keys(t).forEach(function(e) {
                    n[e + 1] = t[e]
                }), this.virtual.cache = n), this.virtual.update(!0), this.slideNext(0)
            }
        },
        f = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                B.extend(this, {
                    virtual: {
                        update: M.update.bind(this),
                        appendSlide: M.appendSlide.bind(this),
                        prependSlide: M.prependSlide.bind(this),
                        renderSlide: M.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e;
                    this.params.virtual.enabled && (this.classNames.push(this.params.containerModifierClass + "virtual"), e = {
                        watchSlidesProgress: !0
                    }, B.extend(this.params, e), B.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update())
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        k = {
            handle: function(e) {
                var t = this,
                    n = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || u.activeElement && u.activeElement.nodeName && ("input" === u.activeElement.nodeName.toLowerCase() || "textarea" === u.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var o = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var a = O.innerWidth,
                            r = O.innerHeight,
                            e = t.$el.offset();
                        n && (e.left -= t.$el[0].scrollLeft);
                        for (var l = [
                                [e.left, e.top],
                                [e.left + t.width, e.top],
                                [e.left, e.top + t.height],
                                [e.left + t.width, e.top + t.height]
                            ], c = 0; c < l.length; c += 1) {
                            var d = l[c];
                            0 <= d[0] && d[0] <= a && 0 <= d[1] && d[1] <= r && (o = !0)
                        }
                        if (!o) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !n || 37 === s && n) && t.slideNext(), (37 === s && !n || 39 === s && n) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            },
            enable: function() {
                this.keyboard.enabled || (x(u).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (x(u).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        m = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                B.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: k.enable.bind(this),
                        disable: k.disable.bind(this),
                        handle: k.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        _ = {
            lastScrollTime: B.now(),
            event: -1 < O.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : ((y = (b = "onwheel") in u) || ((e = u.createElement("div")).setAttribute(b, "return;"), y = "function" == typeof e[b]), !y && u.implementation && u.implementation.hasFeature && !0 !== u.implementation.hasFeature("", "") && (y = u.implementation.hasFeature("Events.wheel", "3.0")), y ? "wheel" : "mousewheel"),
            normalize: function(e) {
                var t = 0,
                    n = 0,
                    i = 0,
                    s = 0;
                return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, s = 10 * n, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !n && (n = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: n,
                    pixelX: i,
                    pixelY: s
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    n = this,
                    i = n.params.mousewheel;
                if (!n.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s = 0,
                    o = n.rtlTranslate ? -1 : 1,
                    a = _.normalize(t);
                if (i.forceToAxis)
                    if (n.isHorizontal()) {
                        if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                        s = a.pixelX * o
                    } else {
                        if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                        s = a.pixelY
                    }
                else s = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * o : -a.pixelY;
                if (0 === s) return !0;
                if (i.invert && (s = -s), n.params.freeMode) {
                    n.params.loop && n.loopFix();
                    e = n.getTranslate() + s * i.sensitivity, o = n.isBeginning, a = n.isEnd;
                    if (e >= n.minTranslate() && (e = n.minTranslate()), e <= n.maxTranslate() && (e = n.maxTranslate()), n.setTransition(0), n.setTranslate(e), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!o && n.isBeginning || !a && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = B.nextTick(function() {
                            n.slideToClosest()
                        }, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), e === n.minTranslate() || e === n.maxTranslate()) return !0
                } else {
                    if (60 < B.now() - n.mousewheel.lastScrollTime)
                        if (s < 0)
                            if (n.isEnd && !n.params.loop || n.animating) {
                                if (i.releaseOnEdges) return !0
                            } else n.slideNext(), n.emit("scroll", t);
                    else if (n.isBeginning && !n.params.loop || n.animating) {
                        if (i.releaseOnEdges) return !0
                    } else n.slidePrev(), n.emit("scroll", t);
                    n.mousewheel.lastScrollTime = (new O.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                if (!_.event) return !1;
                if (this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = x(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(_.event, this.mousewheel.handle), this.mousewheel.enabled = !0
            },
            disable: function() {
                if (!_.event) return !1;
                if (!this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = x(this.params.mousewheel.eventsTarged)), e.off(_.event, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
            }
        },
        D = {
            update: function() {
                var e, t, n = this.params.navigation;
                this.params.loop || (e = (t = this.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (this.isBeginning ? t.addClass(n.disabledClass) : t.removeClass(n.disabledClass), t[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)), e && 0 < e.length && (this.isEnd ? e.addClass(n.disabledClass) : e.removeClass(n.disabledClass), e[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)))
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, n = this,
                    i = n.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = x(i.nextEl), n.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))), i.prevEl && (t = x(i.prevEl), n.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", n.navigation.onNextClick), t && 0 < t.length && t.on("click", n.navigation.onPrevClick), B.extend(n.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    e = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), e && e.length && (e.off("click", this.navigation.onPrevClick), e.removeClass(this.params.navigation.disabledClass))
            }
        },
        $ = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    i = e.params.pagination;
                if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var s, n = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length,
                        o = e.pagination.$el,
                        a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (s -= n - 2 * e.loopedSlides), a - 1 < s && (s -= a), s < 0 && "bullets" !== e.params.paginationType && (s = a + s)) : s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var r, l, c, d, u, h = e.pagination.bullets;
                        if (i.dynamicBullets && (e.pagination.bulletSize = h.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += s - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), r = s - e.pagination.dynamicBulletIndex, c = ((l = r + (Math.min(h.length, i.dynamicMainBullets) - 1)) + r) / 2), h.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < o.length) h.each(function(e, t) {
                            var n = x(t),
                                t = n.index();
                            t === s && n.addClass(i.bulletActiveClass), i.dynamicBullets && (r <= t && t <= l && n.addClass(i.bulletActiveClass + "-main"), t === r && n.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), t === l && n.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        });
                        else if (h.eq(s).addClass(i.bulletActiveClass), i.dynamicBullets) {
                            for (var p = h.eq(r), n = h.eq(l), f = r; f <= l; f += 1) h.eq(f).addClass(i.bulletActiveClass + "-main");
                            p.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), n.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                        }
                        i.dynamicBullets && (u = Math.min(h.length, i.dynamicMainBullets + 4), d = (e.pagination.bulletSize * u - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize, u = t ? "right" : "left", h.css(e.isHorizontal() ? u : "top", d + "px"))
                    }
                    "fraction" === i.type && (o.find("." + i.currentClass).text(i.formatFractionCurrent(s + 1)), o.find("." + i.totalClass).text(i.formatFractionTotal(a))), "progressbar" === i.type && (c = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical", t = (s + 1) / a, d = u = 1, "horizontal" == c ? u = t : d = t, o.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + u + ") scaleY(" + d + ")").transition(e.params.speed)), "custom" === i.type && i.renderCustom ? (o.html(i.renderCustom(e, s + 1, a)), e.emit("paginationRender", e, o[0])) : e.emit("paginationUpdate", e, o[0]), o[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, a = 0; a < o; a += 1) t.renderBullet ? s += t.renderBullet.call(e, a, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var e, t = this,
                    n = t.params.pagination;
                !n.el || 0 !== (e = x(n.el)).length && (t.params.uniqueNavElements && "string" == typeof n.el && 1 < e.length && 1 === t.$el.find(n.el).length && (e = t.$el.find(n.el)), "bullets" === n.type && n.clickable && e.addClass(n.clickableClass), e.addClass(n.modifierClass + n.type), "bullets" === n.type && n.dynamicBullets && (e.addClass("" + n.modifierClass + n.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), "progressbar" === n.type && n.progressbarOpposite && e.addClass(n.progressbarOppositeClass), n.clickable && e.on("click", "." + n.bulletClass, function(e) {
                    e.preventDefault();
                    e = x(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (e += t.loopedSlides), t.slideTo(e)
                }), B.extend(t.pagination, {
                    $el: e,
                    el: e[0]
                }))
            },
            destroy: function() {
                var e, t = this.params.pagination;
                t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length && ((e = this.pagination.$el).removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", "." + t.bulletClass))
            }
        },
        I = {
            setTranslate: function() {
                var e, t, n, i, s, o, a, r;
                this.params.scrollbar.el && this.scrollbar.el && (a = this.scrollbar, e = this.rtlTranslate, r = this.progress, t = a.dragSize, n = a.trackSize, i = a.$dragEl, s = a.$el, o = this.params.scrollbar, r = (n - (a = t)) * r, e ? 0 < (r = -r) ? (a = t - r, r = 0) : n < -r + t && (a = n + r) : r < 0 ? (a = t + r, r = 0) : n < r + t && (a = n - r), this.isHorizontal() ? (G.transforms3d ? i.transform("translate3d(" + r + "px, 0, 0)") : i.transform("translateX(" + r + "px)"), i[0].style.width = a + "px") : (G.transforms3d ? i.transform("translate3d(0px, " + r + "px, 0)") : i.transform("translateY(" + r + "px)"), i[0].style.height = a + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), s[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                    s[0].style.opacity = 0, s.transition(400)
                }, 1e3)))
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e, t, n, i, s, o, a, r = this;
                r.params.scrollbar.el && r.scrollbar.el && (t = (e = r.scrollbar).$dragEl, n = e.$el, t[0].style.width = "", t[0].style.height = "", i = r.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, o = (s = r.size / r.virtualSize) * (i / r.size), a = "auto" === r.params.scrollbar.dragSize ? i * s : parseInt(r.params.scrollbar.dragSize, 10), r.isHorizontal() ? t[0].style.width = a + "px" : t[0].style.height = a + "px", n[0].style.display = 1 <= s ? "none" : "", r.params.scrollbarHide && (n[0].style.opacity = 0), B.extend(e, {
                    trackSize: i,
                    divider: s,
                    moveDivider: o,
                    dragSize: a
                }), e.$el[r.params.watchOverflow && r.isLocked ? "addClass" : "removeClass"](r.params.scrollbar.lockClass))
            },
            setDragPosition: function(e) {
                var t = this,
                    n = t.scrollbar,
                    i = t.rtlTranslate,
                    s = n.$el,
                    o = n.dragSize,
                    n = n.trackSize,
                    o = ((t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[t.isHorizontal() ? "left" : "top"] - o / 2) / (n - o);
                o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
                o = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * o;
                t.updateProgress(o), t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    n = this.scrollbar,
                    i = this.$wrapperEl,
                    s = n.$el,
                    o = n.$dragEl;
                this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), n.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), t.hide && s.css("opacity", 1), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    n = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    n = this.scrollbar.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = B.nextTick(function() {
                    n.css("opacity", 0), n.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                var e, t, n, i, s, o = this;
                o.params.scrollbar.el && (i = o.scrollbar, e = o.touchEventsTouch, t = o.touchEventsDesktop, s = o.params, n = i.$el[0], i = !(!G.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, s = !(!G.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, G.touch ? (n.addEventListener(e.start, o.scrollbar.onDragStart, i), n.addEventListener(e.move, o.scrollbar.onDragMove, i), n.addEventListener(e.end, o.scrollbar.onDragEnd, s)) : (n.addEventListener(t.start, o.scrollbar.onDragStart, i), u.addEventListener(t.move, o.scrollbar.onDragMove, i), u.addEventListener(t.end, o.scrollbar.onDragEnd, s)))
            },
            disableDraggable: function() {
                var e, t, n, i, s, o = this;
                o.params.scrollbar.el && (i = o.scrollbar, e = o.touchEventsTouch, t = o.touchEventsDesktop, s = o.params, n = i.$el[0], i = !(!G.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, s = !(!G.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, G.touch ? (n.removeEventListener(e.start, o.scrollbar.onDragStart, i), n.removeEventListener(e.move, o.scrollbar.onDragMove, i), n.removeEventListener(e.end, o.scrollbar.onDragEnd, s)) : (n.removeEventListener(t.start, o.scrollbar.onDragStart, i), u.removeEventListener(t.move, o.scrollbar.onDragMove, i), u.removeEventListener(t.end, o.scrollbar.onDragEnd, s)))
            },
            init: function() {
                var e, t, n, i;
                this.params.scrollbar.el && (e = this.scrollbar, i = this.$el, n = x((t = this.params.scrollbar).el), this.params.uniqueNavElements && "string" == typeof t.el && 1 < n.length && 1 === i.find(t.el).length && (n = i.find(t.el)), 0 === (i = n.find("." + this.params.scrollbar.dragClass)).length && (i = x('<div class="' + this.params.scrollbar.dragClass + '"></div>'), n.append(i)), B.extend(e, {
                    $el: n,
                    el: n[0],
                    $dragEl: i,
                    dragEl: i[0]
                }), t.draggable && e.enableDraggable())
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        L = {
            setTransform: function(e, t) {
                var n = this.rtl,
                    i = x(e),
                    s = n ? -1 : 1,
                    o = i.attr("data-swiper-parallax") || "0",
                    a = i.attr("data-swiper-parallax-x"),
                    r = i.attr("data-swiper-parallax-y"),
                    e = i.attr("data-swiper-parallax-scale"),
                    n = i.attr("data-swiper-parallax-opacity");
                a || r ? (a = a || "0", r = r || "0") : this.isHorizontal() ? (a = o, r = "0") : (r = o, a = "0"), a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t * s + "%" : a * t * s + "px", r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t + "%" : r * t + "px", null != n && (n = n - (n - 1) * (1 - Math.abs(t)), i[0].style.opacity = n), null == e ? i.transform("translate3d(" + a + ", " + r + ", 0px)") : (t = e - (e - 1) * (1 - Math.abs(t)), i.transform("translate3d(" + a + ", " + r + ", 0px) scale(" + t + ")"))
            },
            setTranslate: function() {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    o = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    i.parallax.setTransform(t, s)
                }), t.each(function(e, t) {
                    var n = t.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (n += Math.ceil(e / 2) - s * (o.length - 1)), n = Math.min(Math.max(n, -1), 1), x(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        i.parallax.setTransform(t, n)
                    })
                })
            },
            setTransition: function(i) {
                void 0 === i && (i = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    var n = x(t),
                        t = parseInt(n.attr("data-swiper-parallax-duration"), 10) || i;
                    0 === i && (t = 0), n.transition(t)
                })
            }
        },
        H = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    n = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    e = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(e - n, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    n = this.zoom,
                    i = n.gesture;
                if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !G.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    n.fakeGestureTouched = !0, i.scaleStart = H.getDistanceBetweenTouches(e)
                }
                i.$slideEl && i.$slideEl.length || (i.$slideEl = x(e.target).closest(".swiper-slide"), 0 === i.$slideEl.length && (i.$slideEl = this.slides.eq(this.activeIndex)), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass), i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== i.$imageWrapEl.length) ? (i.$imageEl.transition(0), this.zoom.isScaling = !0) : i.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    n = this.zoom,
                    i = n.gesture;
                if (!G.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    n.fakeGestureMoved = !0, i.scaleMove = H.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (G.gestures ? this.zoom.scale = e.scale * n.currentScale : n.scale = i.scaleMove / i.scaleStart * n.currentScale, n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    n = this.zoom,
                    i = n.gesture;
                if (!G.gestures) {
                    if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
                    n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
                }
                i.$imageEl && 0 !== i.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (i.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    n = t.gesture,
                    t = t.image;
                n.$imageEl && 0 !== n.$imageEl.length && (t.isTouched || (g.android && e.preventDefault(), t.isTouched = !0, t.touchesStart.x = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX, t.touchesStart.y = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    n = t.gesture,
                    i = t.image,
                    s = t.velocity;
                if (n.$imageEl && 0 !== n.$imageEl.length && (this.allowClick = !1, i.isTouched && n.$slideEl)) {
                    i.isMoved || (i.width = n.$imageEl[0].offsetWidth, i.height = n.$imageEl[0].offsetHeight, i.startX = B.getTranslate(n.$imageWrapEl[0], "x") || 0, i.startY = B.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), this.rtl && (i.startX = -i.startX, i.startY = -i.startY));
                    var o = i.width * t.scale,
                        a = i.height * t.scale;
                    if (!(o < n.slideWidth && a < n.slideHeight)) {
                        if (i.minX = Math.min(n.slideWidth / 2 - o / 2, 0), i.maxX = -i.minX, i.minY = Math.min(n.slideHeight / 2 - a / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX, i.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY, !i.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x)) return void(i.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y)) return void(i.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), i.isMoved = !0, i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX, i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY, i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8)), i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8)), i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8)), i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = i.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = i.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (i.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (i.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(i.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(i.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = i.touchesCurrent.x, s.prevPositionY = i.touchesCurrent.y, s.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    n = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                    n.isTouched = !1, n.isMoved = !1;
                    var s = 300,
                        o = 300,
                        a = i.x * s,
                        r = n.currentX + a,
                        a = i.y * o,
                        a = n.currentY + a;
                    0 !== i.x && (s = Math.abs((r - n.currentX) / i.x)), 0 !== i.y && (o = Math.abs((a - n.currentY) / i.y));
                    o = Math.max(s, o);
                    n.currentX = r, n.currentY = a;
                    a = n.width * e.scale, e = n.height * e.scale;
                    n.minX = Math.min(t.slideWidth / 2 - a / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - e / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(o).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, n, i, s = this.zoom,
                    o = this.params.zoom,
                    a = s.gesture,
                    r = s.image;
                a.$slideEl || (a.$slideEl = this.clickedSlide ? x(this.clickedSlide) : this.slides.eq(this.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + o.containerClass)), a.$imageEl && 0 !== a.$imageEl.length && (a.$slideEl.addClass("" + o.zoomedSlideClass), r = void 0 === r.touchesStart.x && e ? (i = ("touchend" === e.type ? e.changedTouches[0] : e).pageX, ("touchend" === e.type ? e.changedTouches[0] : e).pageY) : (i = r.touchesStart.x, r.touchesStart.y), s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, s.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, e ? (o = a.$slideEl[0].offsetWidth, e = a.$slideEl[0].offsetHeight, t = a.$slideEl.offset().left + o / 2 - i, n = a.$slideEl.offset().top + e / 2 - r, i = a.$imageEl[0].offsetWidth, r = a.$imageEl[0].offsetHeight, i = i * s.scale, r = r * s.scale, i = -(o = Math.min(o / 2 - i / 2, 0)), r = -(e = Math.min(e / 2 - r / 2, 0)), (t = t * s.scale) < o && (t = o), i < t && (t = i), (n = n * s.scale) < e && (n = e), r < n && (n = r)) : n = t = 0, a.$imageWrapEl.transition(300).transform("translate3d(" + t + "px, " + n + "px,0)"), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    n = e.gesture;
                n.$slideEl || (n.$slideEl = this.clickedSlide ? x(this.clickedSlide) : this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (e.scale = 1, e.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + t.zoomedSlideClass), n.$slideEl = void 0)
            },
            enable: function() {
                var e, t = this,
                    n = t.zoom;
                n.enabled || (n.enabled = !0, e = !("touchstart" !== t.touchEvents.start || !G.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, G.gestures ? (t.$wrapperEl.on("gesturestart", ".swiper-slide", n.onGestureStart, e), t.$wrapperEl.on("gesturechange", ".swiper-slide", n.onGestureChange, e), t.$wrapperEl.on("gestureend", ".swiper-slide", n.onGestureEnd, e)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, ".swiper-slide", n.onGestureStart, e), t.$wrapperEl.on(t.touchEvents.move, ".swiper-slide", n.onGestureChange, e), t.$wrapperEl.on(t.touchEvents.end, ".swiper-slide", n.onGestureEnd, e)), t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, n.onTouchMove))
            },
            disable: function() {
                var e, t = this,
                    n = t.zoom;
                n.enabled && (t.zoom.enabled = !1, e = !("touchstart" !== t.touchEvents.start || !G.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, G.gestures ? (t.$wrapperEl.off("gesturestart", ".swiper-slide", n.onGestureStart, e), t.$wrapperEl.off("gesturechange", ".swiper-slide", n.onGestureChange, e), t.$wrapperEl.off("gestureend", ".swiper-slide", n.onGestureEnd, e)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, ".swiper-slide", n.onGestureStart, e), t.$wrapperEl.off(t.touchEvents.move, ".swiper-slide", n.onGestureChange, e), t.$wrapperEl.off(t.touchEvents.end, ".swiper-slide", n.onGestureEnd, e)), t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, n.onTouchMove))
            }
        },
        N = {
            loadInSlide: function(e, r) {
                void 0 === r && (r = !0);
                var l, c = this,
                    d = c.params.lazy;
                void 0 !== e && 0 !== c.slides.length && (e = (l = c.virtual && c.params.virtual.enabled ? c.$wrapperEl.children("." + c.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : c.slides.eq(e)).find("." + d.elementClass + ":not(." + d.loadedClass + "):not(." + d.loadingClass + ")"), !l.hasClass(d.elementClass) || l.hasClass(d.loadedClass) || l.hasClass(d.loadingClass) || (e = e.add(l[0])), 0 !== e.length && e.each(function(e, t) {
                    var n = x(t);
                    n.addClass(d.loadingClass);
                    var i = n.attr("data-background"),
                        s = n.attr("data-src"),
                        o = n.attr("data-srcset"),
                        a = n.attr("data-sizes");
                    c.loadImage(n[0], s || i, o, a, !1, function() {
                        var e, t;
                        null == c || !c || c && !c.params || c.destroyed || (i ? (n.css("background-image", 'url("' + i + '")'), n.removeAttr("data-background")) : (o && (n.attr("srcset", o), n.removeAttr("data-srcset")), a && (n.attr("sizes", a), n.removeAttr("data-sizes")), s && (n.attr("src", s), n.removeAttr("data-src"))), n.addClass(d.loadedClass).removeClass(d.loadingClass), l.find("." + d.preloaderClass).remove(), c.params.loop && r && (t = l.attr("data-swiper-slide-index"), l.hasClass(c.params.slideDuplicateClass) ? (e = c.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + c.params.slideDuplicateClass + ")"), c.lazy.loadInSlide(e.index(), !1)) : (t = c.$wrapperEl.children("." + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]'), c.lazy.loadInSlide(t.index(), !1))), c.emit("lazyImageReady", l[0], n[0]))
                    }), c.emit("lazyImageLoad", l[0], n[0])
                }))
            },
            load: function() {
                var n = this,
                    t = n.$wrapperEl,
                    i = n.params,
                    s = n.slides,
                    e = n.activeIndex,
                    o = n.virtual && i.virtual.enabled,
                    a = i.lazy,
                    r = i.slidesPerView;

                function l(e) {
                    if (o) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return 1
                    } else if (s[e]) return 1
                }

                function c(e) {
                    return o ? x(e).attr("data-swiper-slide-index") : x(e).index()
                }
                if ("auto" === r && (r = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(e, t) {
                    t = o ? x(t).attr("data-swiper-slide-index") : x(t).index();
                    n.lazy.loadInSlide(t)
                });
                else if (1 < r)
                    for (var d = e; d < e + r; d += 1) l(d) && n.lazy.loadInSlide(d);
                else n.lazy.loadInSlide(e);
                if (a.loadPrevNext)
                    if (1 < r || a.loadPrevNextAmount && 1 < a.loadPrevNextAmount) {
                        for (var u = a.loadPrevNextAmount, a = r, h = Math.min(e + a + Math.max(u, a), s.length), u = Math.max(e - Math.max(a, u), 0), p = e + r; p < h; p += 1) l(p) && n.lazy.loadInSlide(p);
                        for (var f = u; f < e; f += 1) l(f) && n.lazy.loadInSlide(f)
                    } else {
                        u = t.children("." + i.slideNextClass);
                        0 < u.length && n.lazy.loadInSlide(c(u));
                        u = t.children("." + i.slidePrevClass);
                        0 < u.length && n.lazy.loadInSlide(c(u))
                    }
            }
        },
        z = {
            LinearSpline: function(e, t) {
                var n, i, s, o, a;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (a = function(e, t) {
                        for (i = -1, n = e.length; 1 < n - i;) e[s = n + i >> 1] <= t ? i = s : n = s;
                        return n
                    }(this.x, e), o = a - 1, (e - this.x[o]) * (this.y[a] - this.y[o]) / (this.x[a] - this.x[o]) + this.y[o]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new z.LinearSpline(this.slidesGrid, e.slidesGrid) : new z.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var n, i, s = this,
                    o = s.controller.control;

                function a(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * n + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(o))
                    for (var r = 0; r < o.length; r += 1) o[r] !== t && o[r] instanceof E && a(o[r]);
                else o instanceof E && t !== o && a(o)
            },
            setTransition: function(t, e) {
                var n, i = this,
                    s = i.controller.control;

                function o(e) {
                    e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && B.nextTick(function() {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function() {
                        s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(s))
                    for (n = 0; n < s.length; n += 1) s[n] !== e && s[n] instanceof E && o(s[n]);
                else s instanceof E && e !== s && o(s)
            }
        },
        j = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this,
                    n = t.params.a11y;
                13 === e.keyCode && (e = x(e.target), t.navigation && t.navigation.$nextEl && e.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && e.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && e.is("." + t.params.pagination.bulletClass) && e[0].click())
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e, t;
                this.params.loop || (e = (t = this.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (this.isBeginning ? this.a11y.disableEl(t) : this.a11y.enableEl(t)), e && 0 < e.length && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e)))
            },
            updatePagination: function() {
                var n = this,
                    i = n.params.a11y;
                n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.bullets.each(function(e, t) {
                    t = x(t);
                    n.a11y.makeElFocusable(t), n.a11y.addElRole(t, "button"), n.a11y.addElLabel(t, i.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, n, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t, n = this;
                n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterKey), t && t.off("keydown", n.a11y.onEnterKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
            }
        },
        F = {
            init: function() {
                if (this.params.history) {
                    if (!O.history || !O.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = F.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || O.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || O.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = F.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = O.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                this.history.initialized && this.params.history.enabled && (t = this.slides.eq(t), t = F.slugify(t.attr("data-history")), O.location.pathname.includes(e) || (t = e + "/" + t), (e = O.history.state) && e.value === t || (this.params.history.replaceState ? O.history.replaceState({
                    value: t
                }, null, t) : O.history.pushState({
                    value: t
                }, null, t)))
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, n) {
                if (t)
                    for (var i = 0, s = this.slides.length; i < s; i += 1) {
                        var o = this.slides.eq(i);
                        F.slugify(o.attr("data-history")) !== t || o.hasClass(this.params.slideDuplicateClass) || (o = o.index(), this.slideTo(o, e, n))
                    } else this.slideTo(0, e, n)
            }
        },
        R = {
            onHashCange: function() {
                var e = u.location.hash.replace("#", "");
                e === this.slides.eq(this.activeIndex).attr("data-hash") || void 0 !== (e = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index()) && this.slideTo(e)
            },
            setHash: function() {
                var e;
                this.hashNavigation.initialized && this.params.hashNavigation.enabled && (this.params.hashNavigation.replaceState && O.history && O.history.replaceState ? O.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "") : (e = (e = this.slides.eq(this.activeIndex)).attr("data-hash") || e.attr("data-history"), u.location.hash = e || ""))
            },
            init: function() {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var t = u.location.hash.replace("#", "");
                    if (t)
                        for (var n = 0, i = e.slides.length; n < i; n += 1) {
                            var s = e.slides.eq(n);
                            (s.attr("data-hash") || s.attr("data-history")) !== t || s.hasClass(e.params.slideDuplicateClass) || (s = s.index(), e.slideTo(s, 0, e.params.runCallbacksOnInit, !0))
                        }
                    e.params.hashNavigation.watchState && x(O).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && x(O).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        q = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    n = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = B.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, n)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
            },
            stop: function() {
                return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        V = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var n = this.slides.eq(t),
                        i = -n[0].swiperSlideOffset;
                    this.params.virtualTranslate || (i -= this.translate);
                    var s = 0;
                    this.isHorizontal() || (s = i, i = 0);
                    var o = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                    n.css({
                        opacity: o
                    }).transform("translate3d(" + i + "px, " + s + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var n, i = this,
                    t = i.slides,
                    s = i.$wrapperEl;
                t.transition(e), i.params.virtualTranslate && 0 !== e && (n = !1, t.transitionEnd(function() {
                    if (!n && i && !i.destroyed) {
                        n = !0, i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                    }
                }))
            }
        },
        W = {
            setTranslate: function() {
                var e, t = this,
                    n = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    o = t.width,
                    a = t.height,
                    r = t.rtlTranslate,
                    l = t.size,
                    c = t.params.cubeEffect,
                    d = t.isHorizontal(),
                    u = t.virtual && t.params.virtual.enabled,
                    h = 0;
                c.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = x('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: o + "px"
                })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = x('<div class="swiper-cube-shadow"></div>'), n.append(e)));
                for (var p = 0; p < s.length; p += 1) {
                    var f = s.eq(p),
                        m = p;
                    u && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var g = 90 * m,
                        v = Math.floor(g / 360);
                    r && (g = -g, v = Math.floor(-g / 360));
                    var b = Math.max(Math.min(f[0].progress, 1), -1),
                        y = 0,
                        w = 0,
                        T = 0;
                    m % 4 == 0 ? (y = 4 * -v * l, T = 0) : (m - 1) % 4 == 0 ? (y = 0, T = 4 * -v * l) : (m - 2) % 4 == 0 ? (y = l + 4 * v * l, T = l) : (m - 3) % 4 == 0 && (y = -l, T = 3 * l + 4 * l * v), r && (y = -y), d || (w = y, y = 0);
                    T = "rotateX(" + (d ? 0 : -g) + "deg) rotateY(" + (d ? g : 0) + "deg) translate3d(" + y + "px, " + w + "px, " + T + "px)";
                    b <= 1 && -1 < b && (h = r ? 90 * -m - 90 * b : 90 * m + 90 * b), f.transform(T), c.slideShadows && (m = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"), T = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom"), 0 === m.length && (m = x('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), f.append(m)), 0 === T.length && (T = x('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), f.append(T)), m.length && (m[0].style.opacity = Math.max(-b, 0)), T.length && (T[0].style.opacity = Math.max(b, 0)))
                }
                i.css({
                    "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                    "transform-origin": "50% 50% -" + l / 2 + "px"
                }), c.shadow && (d ? e.transform("translate3d(0px, " + (o / 2 + c.shadowOffset) + "px, " + -o / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")") : (S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90), n = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2), o = c.shadowScale, S = c.shadowScale / n, n = c.shadowOffset, e.transform("scale3d(" + o + ", 1, " + S + ") translate3d(0px, " + (a / 2 + n) + "px, " + -a / 2 / S + "px) rotateX(-90deg)")));
                var S = C.isSafari || C.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + S + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        X = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, n = 0; n < e.length; n += 1) {
                    var i = e.eq(n),
                        s = i[0].progress;
                    this.params.flipEffect.limitRotation && (s = Math.max(Math.min(i[0].progress, 1), -1));
                    var o, a, r = -180 * s,
                        l = 0,
                        c = -i[0].swiperSlideOffset,
                        d = 0;
                    this.isHorizontal() ? t && (r = -r) : (d = c, l = -r, r = c = 0), i[0].style.zIndex = -Math.abs(Math.round(s)) + e.length, this.params.flipEffect.slideShadows && (o = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"), a = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"), 0 === o.length && (o = x('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(o)), 0 === a.length && (a = x('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(a)), o.length && (o[0].style.opacity = Math.max(-s, 0)), a.length && (a[0].style.opacity = Math.max(s, 0))), i.transform("translate3d(" + c + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + r + "deg)")
                }
            },
            setTransition: function(e) {
                var n, i = this,
                    t = i.slides,
                    s = i.activeIndex,
                    o = i.$wrapperEl;
                t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), i.params.virtualTranslate && 0 !== e && (n = !1, t.eq(s).transitionEnd(function() {
                    if (!n && i && !i.destroyed) {
                        n = !0, i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) o.trigger(e[t])
                    }
                }))
            }
        },
        U = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, n = this.slides, i = this.$wrapperEl, s = this.slidesSizesGrid, o = this.params.coverflowEffect, a = this.isHorizontal(), r = this.translate, l = a ? e / 2 - r : t / 2 - r, c = a ? o.rotate : -o.rotate, d = o.depth, u = 0, h = n.length; u < h; u += 1) {
                    var p = n.eq(u),
                        f = s[u],
                        m = (l - p[0].swiperSlideOffset - f / 2) / f * o.modifier,
                        g = a ? c * m : 0,
                        v = a ? 0 : c * m,
                        b = -d * Math.abs(m),
                        y = a ? 0 : o.stretch * m,
                        f = a ? o.stretch * m : 0;
                    Math.abs(f) < .001 && (f = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(g) < .001 && (g = 0), Math.abs(v) < .001 && (v = 0);
                    v = "translate3d(" + f + "px," + y + "px," + b + "px)  rotateX(" + v + "deg) rotateY(" + g + "deg)";
                    p.transform(v), p[0].style.zIndex = 1 - Math.abs(Math.round(m)), o.slideShadows && (g = a ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"), v = a ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom"), 0 === g.length && (g = x('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), p.append(g)), 0 === v.length && (v = x('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), p.append(v)), g.length && (g[0].style.opacity = 0 < m ? m : 0), v.length && (v[0].style.opacity = 0 < -m ? -m : 0))
                }(G.pointerEvents || G.prefixedPointerEvents) && (i[0].style.perspectiveOrigin = l + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        Y = {
            init: function() {
                var e = this,
                    t = e.params.thumbs,
                    n = e.constructor;
                t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, B.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), B.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : B.isObject(t.swiper) && (e.thumbs.swiper = new n(B.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e, t, n, i = this,
                    s = i.thumbs.swiper;
                s && (t = s.clickedIndex, (e = s.clickedSlide) && x(e).hasClass(i.params.thumbs.slideThumbActiveClass) || null == t || (n = s.params.loop ? parseInt(x(s.clickedSlide).attr("data-swiper-slide-index"), 10) : t, i.params.loop && (e = i.activeIndex, i.slides.eq(e).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, e = i.activeIndex), s = i.slides.eq(e).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(), t = i.slides.eq(e).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(), n = void 0 === s || void 0 !== t && t - e < e - s ? t : s), i.slideTo(n)))
            },
            update: function(e) {
                var t = this,
                    n = t.thumbs.swiper;
                if (n) {
                    var i, s, o, a = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
                    t.realIndex !== n.realIndex && (i = n.activeIndex, o = n.params.loop ? (n.slides.eq(i).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, i = n.activeIndex), o = n.slides.eq(i).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(), s = n.slides.eq(i).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(), void 0 === o ? s : void 0 === s ? o : s - i == i - o ? i : s - i < i - o ? s : o) : t.realIndex, n.visibleSlidesIndexes.indexOf(o) < 0 && (n.params.centeredSlides ? o = i < o ? o - Math.floor(a / 2) + 1 : o + Math.floor(a / 2) - 1 : i < o && (o = o - a + 1), n.slideTo(o, e ? 0 : void 0)));
                    var r = 1,
                        l = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (r = t.params.slidesPerView), n.slides.removeClass(l), n.params.loop)
                        for (var c = 0; c < r; c += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(l);
                    else
                        for (var d = 0; d < r; d += 1) n.slides.eq(t.realIndex + d).addClass(l)
                }
            }
        },
        m = [P, c, d, h, p, f, m, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                B.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: _.enable.bind(this),
                        disable: _.disable.bind(this),
                        handle: _.handle.bind(this),
                        handleMouseEnter: _.handleMouseEnter.bind(this),
                        handleMouseLeave: _.handleMouseLeave.bind(this),
                        lastScrollTime: B.now()
                    }
                })
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                B.extend(this, {
                    navigation: {
                        init: D.init.bind(this),
                        update: D.update.bind(this),
                        destroy: D.destroy.bind(this),
                        onNextClick: D.onNextClick.bind(this),
                        onPrevClick: D.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t = this.navigation,
                        n = t.$nextEl,
                        t = t.$prevEl;
                    !this.params.navigation.hideOnClick || x(e.target).is(t) || x(e.target).is(n) || (n && n.toggleClass(this.params.navigation.hiddenClass), t && t.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                B.extend(this, {
                    pagination: {
                        init: $.init.bind(this),
                        render: $.render.bind(this),
                        update: $.update.bind(this),
                        destroy: $.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    !this.params.loop && void 0 !== this.snapIndex || this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !x(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                var e = this;
                B.extend(e, {
                    scrollbar: {
                        init: I.init.bind(e),
                        destroy: I.destroy.bind(e),
                        updateSize: I.updateSize.bind(e),
                        setTranslate: I.setTranslate.bind(e),
                        setTransition: I.setTransition.bind(e),
                        enableDraggable: I.enableDraggable.bind(e),
                        disableDraggable: I.disableDraggable.bind(e),
                        setDragPosition: I.setDragPosition.bind(e),
                        onDragStart: I.onDragStart.bind(e),
                        onDragMove: I.onDragMove.bind(e),
                        onDragEnd: I.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                B.extend(this, {
                    parallax: {
                        setTransform: L.setTransform.bind(this),
                        setTranslate: L.setTranslate.bind(this),
                        setTransition: L.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var t = this,
                    n = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                    n[e] = H[e].bind(t)
                }), B.extend(t, {
                    zoom: n
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                B.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: N.load.bind(this),
                        loadInSlide: N.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                B.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: z.getInterpolateFunction.bind(this),
                        setTranslate: z.setTranslate.bind(this),
                        setTransition: z.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                B.extend(t, {
                    a11y: {
                        liveRegion: x('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(j).forEach(function(e) {
                    t.a11y[e] = j[e].bind(t)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                B.extend(this, {
                    history: {
                        init: F.init.bind(this),
                        setHistory: F.setHistory.bind(this),
                        setHistoryPopState: F.setHistoryPopState.bind(this),
                        scrollToSlide: F.scrollToSlide.bind(this),
                        destroy: F.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                B.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: R.init.bind(this),
                        destroy: R.destroy.bind(this),
                        setHash: R.setHash.bind(this),
                        onHashCange: R.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var t = this;
                B.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: q.run.bind(t),
                        start: q.start.bind(t),
                        stop: q.stop.bind(t),
                        pause: q.pause.bind(t),
                        onTransitionEnd: function(e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                B.extend(this, {
                    fadeEffect: {
                        setTranslate: V.setTranslate.bind(this),
                        setTransition: V.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e;
                    "fade" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "fade"), e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }, B.extend(this.params, e), B.extend(this.originalParams, e))
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                B.extend(this, {
                    cubeEffect: {
                        setTranslate: W.setTranslate.bind(this),
                        setTransition: W.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e;
                    "cube" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d"), e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    }, B.extend(this.params, e), B.extend(this.originalParams, e))
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                B.extend(this, {
                    flipEffect: {
                        setTranslate: X.setTranslate.bind(this),
                        setTransition: X.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e;
                    "flip" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d"), e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }, B.extend(this.params, e), B.extend(this.originalParams, e))
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                B.extend(this, {
                    coverflowEffect: {
                        setTranslate: U.setTranslate.bind(this),
                        setTransition: U.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                B.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: Y.init.bind(this),
                        update: Y.update.bind(this),
                        onThumbClick: Y.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === E.use && (E.use = E.Class.use, E.installModule = E.Class.installModule), E.use(m), E
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Sweetalert2 = t()
}(this, function() {
    "use strict";

    function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function e(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e
    }

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, i = arguments[t];
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }

    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function a(e, t) {
        return (a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function l(e, t, n) {
        return (l = function() {
            if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
                if ("function" == typeof Proxy) return 1;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                } catch (e) {
                    return
                }
            }
        }() ? Reflect.construct : function(e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            i = new(Function.bind.apply(e, i));
            return n && a(i, n.prototype), i
        }).apply(null, arguments)
    }

    function d(e, t, n) {
        return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            e = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e)););
                return e
            }(e, t);
            if (e) {
                t = Object.getOwnPropertyDescriptor(e, t);
                return t.get ? t.get.call(n) : t.value
            }
        })(e, t, n || e)
    }

    function u(t) {
        return Object.keys(t).map(function(e) {
            return t[e]
        })
    }

    function h(e) {
        return Array.prototype.slice.call(e)
    }

    function p(e) {
        console.error("".concat(n, " ").concat(e))
    }

    function f(e, t) {
        t = '"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'), -1 === w.indexOf(t) && (w.push(t), y(t))
    }

    function m(e) {
        return e && Promise.resolve(e) === e
    }

    function t(e) {
        var t, n = {};
        for (t in e) n[e[t]] = "swal2-" + e[t];
        return n
    }

    function g(e, t) {
        return e.classList.contains(t)
    }

    function v(t, e, n) {
        h(t.classList).forEach(function(e) {
            -1 === u(S).indexOf(e) && -1 === u(x).indexOf(e) && t.classList.remove(e)
        }), e && e[n] && ie(t, e[n])
    }

    function b(e) {
        return "function" == typeof e ? e() : e
    }
    var n = "SweetAlert2:",
        y = function(e) {
            console.warn("".concat(n, " ").concat(e))
        },
        w = [],
        T = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        S = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl"]),
        x = t(["success", "warning", "info", "question", "error"]),
        C = {
            previousBodyPadding: null
        };

    function E(e, t) {
        if (!t) return null;
        switch (t) {
            case "select":
            case "textarea":
            case "file":
                return oe(e, S[t]);
            case "checkbox":
                return e.querySelector(".".concat(S.checkbox, " input"));
            case "radio":
                return e.querySelector(".".concat(S.radio, " input:checked")) || e.querySelector(".".concat(S.radio, " input:first-child"));
            case "range":
                return e.querySelector(".".concat(S.range, " input"));
            default:
                return oe(e, S.input)
        }
    }

    function P(e) {
        var t;
        e.focus(), "file" !== e.type && (t = e.value, e.value = "", e.value = t)
    }

    function A(e, t, n) {
        e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach(function(t) {
            e.forEach ? e.forEach(function(e) {
                n ? e.classList.add(t) : e.classList.remove(t)
            }) : n ? e.classList.add(t) : e.classList.remove(t)
        }))
    }

    function M(e, t, n) {
        n || 0 === parseInt(n) ? e.style[t] = "number" == typeof n ? n + "px" : n : e.style.removeProperty(t)
    }

    function k(e, t) {
        t = 1 < arguments.length && void 0 !== t ? t : "flex";
        e.style.opacity = "", e.style.display = t
    }

    function _(e) {
        e.style.opacity = "", e.style.display = "none"
    }

    function D(e, t, n) {
        t ? k(e, n) : _(e)
    }

    function $(e) {
        return !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length))
    }

    function I(e) {
        var t = window.getComputedStyle(e),
            e = parseFloat(t.getPropertyValue("animation-duration") || "0"),
            t = parseFloat(t.getPropertyValue("transition-duration") || "0");
        return 0 < e || 0 < t
    }

    function L() {
        return document.body.querySelector("." + S.container)
    }

    function H(e) {
        var t = L();
        return t ? t.querySelector(e) : null
    }

    function N(e) {
        return H("." + e)
    }

    function O() {
        return N(S.popup)
    }

    function B() {
        return h(O().querySelectorAll("." + S.icon))
    }

    function G() {
        var e = B().filter($);
        return e.length ? e[0] : null
    }

    function z() {
        return N(S.title)
    }

    function j() {
        return N(S.content)
    }

    function F() {
        return N(S.image)
    }

    function R() {
        return N(S["progress-steps"])
    }

    function q() {
        return N(S["validation-message"])
    }

    function V() {
        return H("." + S.actions + " ." + S.confirm)
    }

    function W() {
        return H("." + S.actions + " ." + S.cancel)
    }

    function X() {
        return N(S.actions)
    }

    function U() {
        return N(S.header)
    }

    function Y() {
        return N(S.footer)
    }

    function K() {
        return N(S.close)
    }

    function Q() {
        var e = h(O().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e, t) {
                return e = parseInt(e.getAttribute("tabindex")), (t = parseInt(t.getAttribute("tabindex"))) < e ? 1 : e < t ? -1 : 0
            }),
            t = h(O().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e) {
                return "-1" !== e.getAttribute("tabindex")
            });
        return function(e) {
            for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(e.concat(t)).filter($)
    }

    function Z() {
        return !ae() && !document.body.classList.contains(S["no-backdrop"])
    }

    function J() {
        return "undefined" == typeof window || "undefined" == typeof document
    }

    function ee(e) {
        wt.isVisible() && ne !== e.target.value && wt.resetValidationMessage(), ne = e.target.value
    }

    function te(e, t) {
        e instanceof HTMLElement ? t.appendChild(e) : "object" === c(e) ? le(t, e) : e && (t.innerHTML = e)
    }
    var ne, ie = function(e, t) {
            A(e, t, !0)
        },
        se = function(e, t) {
            A(e, t, !1)
        },
        oe = function(e, t) {
            for (var n = 0; n < e.childNodes.length; n++)
                if (g(e.childNodes[n], t)) return e.childNodes[n]
        },
        ae = function() {
            return document.body.classList.contains(S["toast-shown"])
        },
        re = '\n <div aria-labelledby="'.concat(S.title, '" aria-describedby="').concat(S.content, '" class="').concat(S.popup, '" tabindex="-1">\n   <div class="').concat(S.header, '">\n     <ul class="').concat(S["progress-steps"], '"></ul>\n     <div class="').concat(S.icon, " ").concat(x.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(S.icon, " ").concat(x.question, '"></div>\n     <div class="').concat(S.icon, " ").concat(x.warning, '"></div>\n     <div class="').concat(S.icon, " ").concat(x.info, '"></div>\n     <div class="').concat(S.icon, " ").concat(x.success, '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(S.image, '" />\n     <h2 class="').concat(S.title, '" id="').concat(S.title, '"></h2>\n     <button type="button" class="').concat(S.close, '"></button>\n   </div>\n   <div class="').concat(S.content, '">\n     <div id="').concat(S.content, '"></div>\n     <input class="').concat(S.input, '" />\n     <input type="file" class="').concat(S.file, '" />\n     <div class="').concat(S.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(S.select, '"></select>\n     <div class="').concat(S.radio, '"></div>\n     <label for="').concat(S.checkbox, '" class="').concat(S.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(S.label, '"></span>\n     </label>\n     <textarea class="').concat(S.textarea, '"></textarea>\n     <div class="').concat(S["validation-message"], '" id="').concat(S["validation-message"], '"></div>\n   </div>\n   <div class="').concat(S.actions, '">\n     <button type="button" class="').concat(S.confirm, '">OK</button>\n     <button type="button" class="').concat(S.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(S.footer, '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        le = function(e, t) {
            if (e.innerHTML = "", 0 in t)
                for (var n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
            else e.appendChild(t.cloneNode(!0))
        },
        ce = function() {
            if (J()) return !1;
            var e, t = document.createElement("div"),
                n = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (e in n)
                if (Object.prototype.hasOwnProperty.call(n, e) && void 0 !== t.style[e]) return n[e];
            return !1
        }();

    function de(e, t, n) {
        D(e, n["showC" + t.substring(1) + "Button"], "inline-block"), e.innerHTML = n[t + "ButtonText"], e.setAttribute("aria-label", n[t + "ButtonAriaLabel"]), e.className = S[t], v(e, n.customClass, t + "Button"), ie(e, n[t + "ButtonClass"])
    }

    function ue(e, t) {
        e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
    }
    var he = {
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        },
        pe = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        fe = function(e) {
            if (!ve[e.input]) return p('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
            var t = ve[e.input](e);
            k(t), setTimeout(function() {
                P(t)
            })
        },
        me = function(e, t) {
            var n = E(j(), e);
            if (n)
                for (var i in function(e) {
                        for (var t = 0; t < e.attributes.length; t++) {
                            var n = e.attributes[t].name; - 1 === ["type", "value", "style"].indexOf(n) && e.removeAttribute(n)
                        }
                    }(n), t) "range" === e && "placeholder" === i || n.setAttribute(i, t[i])
        },
        ge = function(e, t, n) {
            e.className = t, n.inputClass && ie(e, n.inputClass), n.customClass && ie(e, n.customClass.input)
        },
        ve = {};

    function be(e, s) {
        var o = R();
        if (!s.progressSteps || 0 === s.progressSteps.length) return _(o), 0;
        k(o), o.innerHTML = "";
        var a = parseInt(null === s.currentProgressStep ? wt.getQueueStep() : s.currentProgressStep);
        a >= s.progressSteps.length && y("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), s.progressSteps.forEach(function(e, t) {
            var n, i, i = (n = e, i = document.createElement("li"), ie(i, S["progress-step"]), i.innerHTML = n, i);
            o.appendChild(i), t === a && ie(i, S["active-progress-step"]), t !== s.progressSteps.length - 1 && (t = e, e = document.createElement("li"), ie(e, S["progress-step-line"]), t.progressStepsDistance && (e.style.width = t.progressStepsDistance), e = e, o.appendChild(e))
        })
    }

    function ye(e, t) {
        var n;
        v(U(), t.customClass, "header"), be(0, t), n = t, (e = he.innerParams.get(e)) && n.type === e.type && G() ? v(G(), n.customClass, "icon") : (Se(), n.type && (xe(), -1 !== Object.keys(x).indexOf(n.type) ? (k(e = H(".".concat(S.icon, ".").concat(x[n.type]))), v(e, n.customClass, "icon"), A(e, "swal2-animate-".concat(n.type, "-icon"), n.animation)) : p('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(n.type, '"')))),
            function(e) {
                var t = F();
                if (!e.imageUrl) return _(t);
                k(t), t.setAttribute("src", e.imageUrl), t.setAttribute("alt", e.imageAlt), M(t, "width", e.imageWidth), M(t, "height", e.imageHeight), t.className = S.image, v(t, e.customClass, "image"), e.imageClass && ie(t, e.imageClass)
            }(t), e = t, D(n = z(), e.title || e.titleText), e.title && te(e.title, n), e.titleText && (n.innerText = e.titleText), v(n, e.customClass, "title"), e = t, (t = K()).innerHTML = e.closeButtonHtml, v(t, e.customClass, "closeButton"), D(t, e.showCloseButton), t.setAttribute("aria-label", e.closeButtonAriaLabel)
    }

    function we(e, t) {
        var i, s, o, n, a, r, l, c;
        l = t, M(c = O(), "width", l.width), M(c, "padding", l.padding), l.background && (c.style.background = l.background), c.className = S.popup, l.toast ? (ie([document.documentElement, document.body], S["toast-shown"]), ie(c, S.toast)) : ie(c, S.modal), v(c, l.customClass, "popup"), "string" == typeof l.customClass && ie(c, l.customClass), A(c, S.noanimation, !l.animation), n = t, (c = L()) && ("string" == typeof(r = n.backdrop) ? c.style.background = r : r || ie([document.documentElement, document.body], S["no-backdrop"]), !n.backdrop && n.allowOutsideClick && y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), a = c, (r = n.position) in S ? ie(a, S[r]) : (y('The "position" parameter is not valid, defaulting to "center"'), ie(a, S.center)), r = c, !(a = n.grow) || "string" != typeof a || (a = "grow-" + a) in S && ie(r, S[a]), v(c, n.customClass, "container"), n.customContainerClass && ie(c, n.customContainerClass)), ye(e, t), l = e, r = t, a = j().querySelector("#" + S.content), r.html ? (te(r.html, a), k(a, "block")) : r.text ? (a.textContent = r.text, k(a, "block")) : _(a), l = l, i = r, s = j(), l = he.innerParams.get(l), o = !l || i.input !== l.input, pe.forEach(function(e) {
            var t = S[e],
                n = oe(s, t);
            me(e, i.inputAttributes), ge(n, t, i), o && _(n)
        }), i.input && o && fe(i), v(j(), r.customClass, "content"), c = t, n = X(), e = V(), a = W(), c.showConfirmButton || c.showCancelButton || _(n), v(n, c.customClass, "actions"), de(e, "confirm", c), de(a, "cancel", c), c.buttonsStyling ? (l = c, ie([r = e, n = a], S.styled), l.confirmButtonColor && (r.style.backgroundColor = l.confirmButtonColor), l.cancelButtonColor && (n.style.backgroundColor = l.cancelButtonColor), l = window.getComputedStyle(r).getPropertyValue("background-color"), r.style.borderLeftColor = l, r.style.borderRightColor = l) : (se([e, a], S.styled), e.style.backgroundColor = e.style.borderLeftColor = e.style.borderRightColor = "", a.style.backgroundColor = a.style.borderLeftColor = a.style.borderRightColor = ""), c.reverseButtons && e.parentNode.insertBefore(a, e), e = t, D(t = Y(), e.footer), e.footer && te(e.footer, t), v(t, e.customClass, "footer")
    }

    function Te() {
        return V() && V().click()
    }
    ve.text = ve.email = ve.password = ve.number = ve.tel = ve.url = function(e) {
        var t = oe(j(), S.input);
        return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : m(e.inputValue) || y('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(c(e.inputValue), '"')), ue(t, e), t.type = e.input, t
    }, ve.file = function(e) {
        var t = oe(j(), S.file);
        return ue(t, e), t.type = e.input, t
    }, ve.range = function(e) {
        var t = oe(j(), S.range),
            n = t.querySelector("input"),
            i = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, i.value = e.inputValue, t
    }, ve.select = function(e) {
        var t, n = oe(j(), S.select);
        return n.innerHTML = "", e.inputPlaceholder && ((t = document.createElement("option")).innerHTML = e.inputPlaceholder, t.value = "", t.disabled = !0, t.selected = !0, n.appendChild(t)), n
    }, ve.radio = function() {
        var e = oe(j(), S.radio);
        return e.innerHTML = "", e
    }, ve.checkbox = function(e) {
        var t = oe(j(), S.checkbox),
            n = E(j(), "checkbox");
        return n.type = "checkbox", n.value = 1, n.id = S.checkbox, n.checked = Boolean(e.inputValue), t.querySelector("span").innerHTML = e.inputPlaceholder, t
    }, ve.textarea = function(e) {
        var t, n, i = oe(j(), S.textarea);
        return i.value = e.inputValue, ue(i, e), "MutationObserver" in window && (t = parseInt(window.getComputedStyle(O()).width), n = parseInt(window.getComputedStyle(O()).paddingLeft) + parseInt(window.getComputedStyle(O()).paddingRight), new MutationObserver(function() {
            var e = i.offsetWidth + n;
            O().style.width = t < e ? e + "px" : null
        }).observe(i, {
            attributes: !0,
            attributeFilter: ["style"]
        })), i
    };
    var Se = function() {
            for (var e = B(), t = 0; t < e.length; t++) _(e[t])
        },
        xe = function() {
            for (var e = O(), t = window.getComputedStyle(e).getPropertyValue("background-color"), n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), i = 0; i < n.length; i++) n[i].style.backgroundColor = t
        };

    function Ce() {
        var e = O();
        e || wt.fire(""), e = O();
        var t = X(),
            n = V(),
            i = W();
        k(t), k(n), ie([e, t], S.loading), n.disabled = !0, i.disabled = !0, e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus()
    }

    function Ee(e) {
        return Object.prototype.hasOwnProperty.call(ke, e)
    }

    function Pe(e) {
        return De[e]
    }
    var Ae = [],
        Me = {},
        ke = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            type: null,
            toast: !1,
            customClass: "",
            customContainerClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: null,
            confirmButtonClass: "",
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: null,
            cancelButtonClass: "",
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: "",
            timer: null,
            width: null,
            padding: null,
            background: null,
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: "",
            inputAttributes: {},
            inputValidator: null,
            validationMessage: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: null,
            onBeforeOpen: null,
            onAfterClose: null,
            onOpen: null,
            onClose: null,
            scrollbarPadding: !0
        },
        _e = ["title", "titleText", "text", "html", "type", "customClass", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonClass", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonClass", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeigth", "imageAlt", "imageClass", "progressSteps", "currentProgressStep"],
        De = {
            customContainerClass: "customClass",
            confirmButtonClass: "customClass",
            cancelButtonClass: "customClass",
            imageClass: "customClass",
            inputClass: "customClass"
        },
        $e = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        Ie = Object.freeze({
            isValidParameter: Ee,
            isUpdatableParameter: function(e) {
                return -1 !== _e.indexOf(e)
            },
            isDeprecatedParameter: Pe,
            argsToParams: function(n) {
                var i = {};
                return "object" === c(n[0]) ? r(i, n[0]) : ["title", "html", "type"].forEach(function(e, t) {
                    switch (c(n[t])) {
                        case "string":
                            i[e] = n[t];
                            break;
                        case "undefined":
                            break;
                        default:
                            p("Unexpected type of ".concat(e, '! Expected "string", got ').concat(c(n[t])))
                    }
                }), i
            },
            isVisible: function() {
                return $(O())
            },
            clickConfirm: Te,
            clickCancel: function() {
                return W() && W().click()
            },
            getContainer: L,
            getPopup: O,
            getTitle: z,
            getContent: j,
            getImage: F,
            getIcon: G,
            getIcons: B,
            getCloseButton: K,
            getActions: X,
            getConfirmButton: V,
            getCancelButton: W,
            getHeader: U,
            getFooter: Y,
            getFocusableElements: Q,
            getValidationMessage: q,
            isLoading: function() {
                return O().hasAttribute("data-loading")
            },
            fire: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return l(this, t)
            },
            mixin: function(t) {
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t)
                }(n, this), e(n, [{
                    key: "_main",
                    value: function(e) {
                        return d(o(n.prototype), "_main", this).call(this, r({}, t, e))
                    }
                }]), n;

                function n() {
                    return i(this, n), e = this, !(t = o(n).apply(this, arguments)) || "object" != typeof t && "function" != typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t;
                    var e, t
                }
            },
            queue: function(e) {
                var o = this;

                function a(e, t) {
                    Ae = [], document.body.removeAttribute("data-swal2-queue-step"), e(t)
                }
                Ae = e;
                var r = [];
                return new Promise(function(s) {
                    ! function t(n, i) {
                        n < Ae.length ? (document.body.setAttribute("data-swal2-queue-step", n), o.fire(Ae[n]).then(function(e) {
                            void 0 !== e.value ? (r.push(e.value), t(n + 1, i)) : a(s, {
                                dismiss: e.dismiss
                            })
                        })) : a(s, {
                            value: r
                        })
                    }(0)
                })
            },
            getQueueStep: function() {
                return document.body.getAttribute("data-swal2-queue-step")
            },
            insertQueueStep: function(e, t) {
                return t && t < Ae.length ? Ae.splice(t, 0, e) : Ae.push(e)
            },
            deleteQueueStep: function(e) {
                void 0 !== Ae[e] && Ae.splice(e, 1)
            },
            showLoading: Ce,
            enableLoading: Ce,
            getTimerLeft: function() {
                return Me.timeout && Me.timeout.getTimerLeft()
            },
            stopTimer: function() {
                return Me.timeout && Me.timeout.stop()
            },
            resumeTimer: function() {
                return Me.timeout && Me.timeout.start()
            },
            toggleTimer: function() {
                var e = Me.timeout;
                return e && (e.running ? e.stop() : e.start())
            },
            increaseTimer: function(e) {
                return Me.timeout && Me.timeout.increase(e)
            },
            isTimerRunning: function() {
                return Me.timeout && Me.timeout.isRunning()
            }
        });

    function Le() {
        var e = he.innerParams.get(this),
            t = he.domCache.get(this);
        e.showConfirmButton || (_(t.confirmButton), e.showCancelButton || _(t.actions)), se([t.popup, t.actions], S.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.cancelButton.disabled = !1
    }

    function He() {
        return window.MSInputMethodContext && document.documentMode
    }

    function Ne() {
        var e = L(),
            t = O();
        e.style.removeProperty("align-items"), t.offsetTop < 0 && (e.style.alignItems = "flex-start")
    }
    var Oe = {
        swalPromiseResolve: new WeakMap
    };

    function Be(e, t, n, i) {
        n ? je(e, i) : (new Promise(function(e) {
            var t = window.scrollX,
                n = window.scrollY;
            Me.restoreFocusTimeout = setTimeout(function() {
                Me.previousActiveElement && Me.previousActiveElement.focus ? (Me.previousActiveElement.focus(), Me.previousActiveElement = null) : document.body && document.body.focus(), e()
            }, 100), void 0 !== t && void 0 !== n && window.scrollTo(t, n)
        }).then(function() {
            return je(e, i)
        }), Me.keydownTarget.removeEventListener("keydown", Me.keydownHandler, {
            capture: Me.keydownListenerCapture
        }), Me.keydownHandlerAdded = !1), t.parentNode && t.parentNode.removeChild(t), Z() && (null !== C.previousBodyPadding && (document.body.style.paddingRight = C.previousBodyPadding + "px", C.previousBodyPadding = null), g(document.body, S.iosfix) && (t = parseInt(document.body.style.top, 10), se(document.body, S.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t), "undefined" != typeof window && He() && window.removeEventListener("resize", Ne), h(document.body.children).forEach(function(e) {
            e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
        })), se([document.documentElement, document.body], [S.shown, S["height-auto"], S["no-backdrop"], S["toast-shown"], S["toast-column"]])
    }

    function Ge(e) {
        var t, n, i, s, o, a, r, l = O();
        !l || g(l, S.hide) || (r = he.innerParams.get(this)) && (t = Oe.swalPromiseResolve.get(this), se(l, S.show), ie(l, S.hide), n = this, i = l, s = r, a = L(), l = ce && I(i), r = s.onClose, s = s.onAfterClose, null !== r && "function" == typeof r && r(i), l ? (r = n, o = i, l = a, i = s, Me.swalCloseEventFinishedCallback = Be.bind(null, r, l, ae(), i), o.addEventListener(ce, function(e) {
            e.target === o && (Me.swalCloseEventFinishedCallback(), delete Me.swalCloseEventFinishedCallback)
        })) : Be(n, a, ae(), s), t(e || {}))
    }

    function ze(e) {
        for (var t in e) e[t] = new WeakMap
    }
    var je = function(e, t) {
        setTimeout(function() {
            null !== t && "function" == typeof t && t(), O() || (delete e.params, delete Me.keydownHandler, delete Me.keydownTarget, ze(he), ze(Oe))
        })
    };

    function Fe(e, t, n) {
        var i = he.domCache.get(e);
        t.forEach(function(e) {
            i[e].disabled = n
        })
    }

    function Re(e, t) {
        if (!e) return !1;
        if ("radio" === e.type)
            for (var n = e.parentNode.parentNode.querySelectorAll("input"), i = 0; i < n.length; i++) n[i].disabled = t;
        else e.disabled = t
    }
    var qe = (e(We, [{
            key: "start",
            value: function() {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
        }, {
            key: "stop",
            value: function() {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
            }
        }, {
            key: "increase",
            value: function(e) {
                var t = this.running;
                return t && this.stop(), this.remaining += e, t && this.start(), this.remaining
            }
        }, {
            key: "getTimerLeft",
            value: function() {
                return this.running && (this.stop(), this.start()), this.remaining
            }
        }, {
            key: "isRunning",
            value: function() {
                return this.running
            }
        }]), We),
        Ve = {
            email: function(e, t) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address")
            },
            url: function(e, t) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
            }
        };

    function We(e, t) {
        i(this, We), this.callback = e, this.remaining = t, this.running = !1, this.start()
    }

    function Xe(e) {
        var t, n, i, s, o, a, r;
        (r = e).inputValidator || Object.keys(Ve).forEach(function(e) {
            r.input === e && (r.inputValidator = Ve[e])
        }), e.showLoaderOnConfirm && !e.preConfirm && y("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), e.animation = b(e.animation), (a = e).target && ("string" != typeof a.target || document.querySelector(a.target)) && ("string" == typeof a.target || a.target.appendChild) || (y('Target parameter is not valid, defaulting to "body"'), a.target = "body"), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), t = e, (o = L()) && (o.parentNode.removeChild(o), se([document.documentElement, document.body], [S["no-backdrop"], S["toast-shown"], S["has-column"]])), J() ? p("SweetAlert2 requires document to initialize") : ((n = document.createElement("div")).className = S.container, n.innerHTML = re, (e = "string" == typeof(a = t.target) ? document.querySelector(a) : a).appendChild(n), o = t, (a = O()).setAttribute("role", o.toast ? "alert" : "dialog"), a.setAttribute("aria-live", o.toast ? "polite" : "assertive"), o.toast || a.setAttribute("aria-modal", "true"), "rtl" === window.getComputedStyle(e).direction && ie(L(), S.rtl), n = j(), t = oe(n, S.input), o = oe(n, S.file), i = n.querySelector(".".concat(S.range, " input")), s = n.querySelector(".".concat(S.range, " output")), a = oe(n, S.select), e = n.querySelector(".".concat(S.checkbox, " input")), n = oe(n, S.textarea), t.oninput = ee, o.onchange = ee, a.onchange = ee, e.onchange = ee, n.oninput = ee, i.oninput = function(e) {
            ee(e), s.value = i.value
        }, i.onchange = function(e) {
            ee(e), i.nextSibling.value = i.value
        })
    }

    function Ue(e, t) {
        e.removeEventListener(ce, Ue), t.style.overflowY = "auto"
    }

    function Ye(e) {
        var t, n, i, s, o = L(),
            a = O();
        "function" == typeof e.onBeforeOpen && e.onBeforeOpen(a), n = o, i = a, (s = e).animation && (ie(i, S.show), ie(n, S.fade)), k(i), ie([document.documentElement, document.body, n], S.shown), s.heightAuto && s.backdrop && !s.toast && ie([document.documentElement, document.body], S["height-auto"]), n = o, s = a, ce && I(s) ? (n.style.overflowY = "hidden", s.addEventListener(ce, Ue.bind(null, s, n))) : n.style.overflowY = "auto", Z() && (t = o, o = e.scrollbarPadding, function() {
            var e, t, n;
            !/iPad|iPhone|iPod/.test(navigator.userAgent) || window.MSStream || g(document.body, S.iosfix) || (e = document.body.scrollTop, document.body.style.top = -1 * e + "px", ie(document.body, S.iosfix), (n = L()).ontouchstart = function(e) {
                t = e.target === n || !(n.scrollHeight > n.clientHeight) && "INPUT" !== e.target.tagName
            }, n.ontouchmove = function(e) {
                t && (e.preventDefault(), e.stopPropagation())
            })
        }(), "undefined" != typeof window && He() && (Ne(), window.addEventListener("resize", Ne)), h(document.body.children).forEach(function(e) {
            var t, n;
            e === L() || (t = e, n = L(), "function" == typeof t.contains && t.contains(n)) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"))
        }), !o || null === C.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (C.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = C.previousBodyPadding + function() {
            if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
            var e = document.createElement("div");
            e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e);
            var t = e.offsetWidth - e.clientWidth;
            return document.body.removeChild(e), t
        }() + "px"), setTimeout(function() {
            t.scrollTop = 0
        })), ae() || Me.previousActiveElement || (Me.previousActiveElement = document.activeElement), "function" == typeof e.onOpen && setTimeout(function() {
            return e.onOpen(a)
        })
    }

    function Ke(e, t) {
        var n, i, s, o, a, r;

        function l(e) {
            return it[a.input](r, st(e), a)
        }
        "select" === t.input || "radio" === t.input ? (o = e, a = t, r = j(), m(a.inputOptions) ? (Ce(), a.inputOptions.then(function(e) {
            o.hideLoading(), l(e)
        })) : "object" === c(a.inputOptions) ? l(a.inputOptions) : p("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(c(a.inputOptions)))) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(t.input) && m(t.inputValue) && (i = t, _(s = (n = e).getInput()), i.inputValue.then(function(e) {
            s.value = "number" === i.input ? parseFloat(e) || 0 : e + "", k(s), s.focus(), n.hideLoading()
        }).catch(function(e) {
            p("Error in inputValue promise: " + e), s.value = "", k(s), s.focus(), n.hideLoading()
        }))
    }

    function Qe(e, t) {
        var n, i, s;
        e.disableButtons(), t.input ? (s = at(n = e, i = t), i.inputValidator ? (n.disableInput(), Promise.resolve().then(function() {
            return i.inputValidator(s, i.validationMessage)
        }).then(function(e) {
            n.enableButtons(), n.enableInput(), e ? n.showValidationMessage(e) : ot(n, i, s)
        })) : n.getInput().checkValidity() ? ot(n, i, s) : (n.enableButtons(), n.showValidationMessage(i.validationMessage))) : ot(e, t, !0)
    }

    function Ze(e, t) {
        e.closePopup({
            value: t
        })
    }

    function Je(s, e, o, a) {
        e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
            capture: e.keydownListenerCapture
        }), e.keydownHandlerAdded = !1), o.toast || (e.keydownHandler = function(e) {
            return t = s, n = e, i = a, (e = o).stopKeydownPropagation && n.stopPropagation(), void("Enter" === n.key ? ht(t, n, e) : "Tab" === n.key ? pt(n, e) : -1 !== dt.indexOf(n.key) ? ft() : -1 !== ut.indexOf(n.key) && mt(n, e, i));
            var t, n, i
        }, e.keydownTarget = o.keydownListenerCapture ? window : O(), e.keydownListenerCapture = o.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
            capture: e.keydownListenerCapture
        }), e.keydownHandlerAdded = !0)
    }

    function et(e, t, n) {
        var i = Q(e.focusCancel),
            e = 0;
        if (e < i.length) return (t += n) === i.length ? t = 0 : -1 === t && (t = i.length - 1), i[t].focus();
        O().focus()
    }

    function tt(e, t, n) {
        var i, s, o, a, r, l, c;
        t.toast ? (l = t, c = n, e.popup.onclick = function() {
            l.showConfirmButton || l.showCancelButton || l.showCloseButton || l.input || c(T.close)
        }) : ((r = e).popup.onmousedown = function() {
            r.container.onmouseup = function(e) {
                r.container.onmouseup = void 0, e.target === r.container && (gt = !0)
            }
        }, (a = e).container.onmousedown = function() {
            a.popup.onmouseup = function(e) {
                a.popup.onmouseup = void 0, e.target !== a.popup && !a.popup.contains(e.target) || (gt = !0)
            }
        }, s = t, o = n, (i = e).container.onclick = function(e) {
            gt ? gt = !1 : e.target === i.container && b(s.allowOutsideClick) && o(T.backdrop)
        })
    }
    var nt, it = {
            select: function(e, t, i) {
                var s = oe(e, S.select);
                t.forEach(function(e) {
                    var t = e[0],
                        n = e[1],
                        e = document.createElement("option");
                    e.value = t, e.innerHTML = n, i.inputValue.toString() === t.toString() && (e.selected = !0), s.appendChild(e)
                }), s.focus()
            },
            radio: function(e, t, s) {
                var o = oe(e, S.radio);
                t.forEach(function(e) {
                    var t = e[0],
                        n = e[1],
                        i = document.createElement("input"),
                        e = document.createElement("label");
                    i.type = "radio", i.name = S.radio, i.value = t, s.inputValue.toString() === t.toString() && (i.checked = !0);
                    t = document.createElement("span");
                    t.innerHTML = n, t.className = S.label, e.appendChild(i), e.appendChild(t), o.appendChild(e)
                });
                t = o.querySelectorAll("input");
                t.length && t[0].focus()
            }
        },
        st = function(t) {
            var n = [];
            return "undefined" != typeof Map && t instanceof Map ? t.forEach(function(e, t) {
                n.push([t, e])
            }) : Object.keys(t).forEach(function(e) {
                n.push([e, t[e]])
            }), n
        },
        ot = function(t, e, n) {
            e.showLoaderOnConfirm && Ce(), e.preConfirm ? (t.resetValidationMessage(), Promise.resolve().then(function() {
                return e.preConfirm(n, e.validationMessage)
            }).then(function(e) {
                $(q()) || !1 === e ? t.hideLoading() : Ze(t, void 0 === e ? n : e)
            })) : Ze(t, n)
        },
        at = function(e, t) {
            var n = e.getInput();
            if (!n) return null;
            switch (t.input) {
                case "checkbox":
                    return rt(n);
                case "radio":
                    return lt(n);
                case "file":
                    return ct(n);
                default:
                    return t.inputAutoTrim ? n.value.trim() : n.value
            }
        },
        rt = function(e) {
            return e.checked ? 1 : 0
        },
        lt = function(e) {
            return e.checked ? e.value : null
        },
        ct = function(e) {
            return e.files.length ? e.files[0] : null
        },
        dt = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
        ut = ["Escape", "Esc"],
        ht = function(e, t, n) {
            !t.isComposing && t.target && e.getInput() && t.target.outerHTML === e.getInput().outerHTML && -1 === ["textarea", "file"].indexOf(n.input) && (Te(), t.preventDefault())
        },
        pt = function(e, t) {
            for (var n = e.target, i = Q(t.focusCancel), s = -1, o = 0; o < i.length; o++)
                if (n === i[o]) {
                    s = o;
                    break
                } e.shiftKey ? et(t, s, -1) : et(t, s, 1), e.stopPropagation(), e.preventDefault()
        },
        ft = function() {
            var e = V(),
                t = W();
            document.activeElement === e && $(t) ? t.focus() : document.activeElement === t && $(e) && e.focus()
        },
        mt = function(e, t, n) {
            b(t.allowEscapeKey) && (e.preventDefault(), n(T.esc))
        },
        gt = !1,
        vt = function() {
            document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        },
        bt = Object.freeze({
            hideLoading: Le,
            disableLoading: Le,
            getInput: function(e) {
                var t = he.innerParams.get(e || this),
                    e = he.domCache.get(e || this);
                return e ? E(e.content, t.input) : null
            },
            close: Ge,
            closePopup: Ge,
            closeModal: Ge,
            closeToast: Ge,
            enableButtons: function() {
                Fe(this, ["confirmButton", "cancelButton"], !1)
            },
            disableButtons: function() {
                Fe(this, ["confirmButton", "cancelButton"], !0)
            },
            enableConfirmButton: function() {
                f("Swal.disableConfirmButton()", "Swal.getConfirmButton().removeAttribute('disabled')"), Fe(this, ["confirmButton"], !1)
            },
            disableConfirmButton: function() {
                f("Swal.enableConfirmButton()", "Swal.getConfirmButton().setAttribute('disabled', '')"), Fe(this, ["confirmButton"], !0)
            },
            enableInput: function() {
                return Re(this.getInput(), !1)
            },
            disableInput: function() {
                return Re(this.getInput(), !0)
            },
            showValidationMessage: function(e) {
                var t = he.domCache.get(this);
                t.validationMessage.innerHTML = e;
                e = window.getComputedStyle(t.popup);
                t.validationMessage.style.marginLeft = "-".concat(e.getPropertyValue("padding-left")), t.validationMessage.style.marginRight = "-".concat(e.getPropertyValue("padding-right")), k(t.validationMessage);
                t = this.getInput();
                t && (t.setAttribute("aria-invalid", !0), t.setAttribute("aria-describedBy", S["validation-message"]), P(t), ie(t, S.inputerror))
            },
            resetValidationMessage: function() {
                var e = he.domCache.get(this);
                e.validationMessage && _(e.validationMessage);
                e = this.getInput();
                e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), se(e, S.inputerror))
            },
            getProgressSteps: function() {
                return f("Swal.getProgressSteps()", "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"), he.innerParams.get(this).progressSteps
            },
            setProgressSteps: function(e) {
                f("Swal.setProgressSteps()", "Swal.update()");
                e = r({}, he.innerParams.get(this), {
                    progressSteps: e
                });
                be(0, e), he.innerParams.set(this, e)
            },
            showProgressSteps: function() {
                k(he.domCache.get(this).progressSteps)
            },
            hideProgressSteps: function() {
                _(he.domCache.get(this).progressSteps)
            },
            _main: function(e) {
                ! function(e) {
                    for (var t in e) Ee(n = t) || y('Unknown parameter "'.concat(n, '"')), e.toast && (n = t, -1 !== $e.indexOf(n) && y('The parameter "'.concat(n, '" is incompatible with toasts'))), Pe(void 0) && f(void 0, De[void 0]);
                    var n
                }(e), O() && Me.swalCloseEventFinishedCallback && (Me.swalCloseEventFinishedCallback(), delete Me.swalCloseEventFinishedCallback), Me.deferDisposalTimer && (clearTimeout(Me.deferDisposalTimer), delete Me.deferDisposalTimer);
                var t = r({}, ke, e);
                Xe(t), Object.freeze(t), Me.timeout && (Me.timeout.stop(), delete Me.timeout), clearTimeout(Me.restoreFocusTimeout);
                var n, s, o, a, e = (n = this, e = {
                    popup: O(),
                    container: L(),
                    content: j(),
                    actions: X(),
                    confirmButton: V(),
                    cancelButton: W(),
                    closeButton: K(),
                    validationMessage: q(),
                    progressSteps: R()
                }, he.domCache.set(n, e), e);
                return we(this, t), he.innerParams.set(this, t), s = this, o = e, a = t, new Promise(function(e) {
                    function t(e) {
                        s.closePopup({
                            dismiss: e
                        })
                    }
                    var n, i;
                    Oe.swalPromiseResolve.set(s, e), n = Me, i = t, (e = a).timer && (n.timeout = new qe(function() {
                            i("timer"), delete n.timeout
                        }, e.timer)), o.confirmButton.onclick = function() {
                            return Qe(s, a)
                        }, o.cancelButton.onclick = function() {
                            return e = t, s.disableButtons(), void e(T.cancel);
                            var e
                        }, o.closeButton.onclick = function() {
                            return t(T.close)
                        }, tt(o, a, t), Je(s, Me, a, t), (a.toast && (a.input || a.footer || a.showCloseButton) ? ie : se)(document.body, S["toast-column"]), Ke(s, a), Ye(a),
                        function(e, t) {
                            if (!t.toast) b(t.allowEnterKey) ? t.focusCancel && $(e.cancelButton) ? e.cancelButton.focus() : t.focusConfirm && $(e.confirmButton) ? e.confirmButton.focus() : et(t, -1, 1) : vt()
                        }(o, a), o.container.scrollTop = 0
                })
            },
            update: function(t) {
                var n = {};
                Object.keys(t).forEach(function(e) {
                    wt.isUpdatableParameter(e) ? n[e] = t[e] : y('Invalid parameter to update: "'.concat(e, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))
                });
                var e = r({}, he.innerParams.get(this), n);
                we(this, e), he.innerParams.set(this, e), Object.defineProperties(this, {
                    params: {
                        value: r({}, this.params, t),
                        writable: !1,
                        enumerable: !0
                    }
                })
            }
        });

    function yt() {
        if ("undefined" != typeof window) {
            "undefined" == typeof Promise && p("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), nt = this;
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = Object.freeze(this.constructor.argsToParams(t));
            Object.defineProperties(this, {
                params: {
                    value: i,
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                }
            });
            i = this._main(this.params);
            he.promise.set(this, i)
        }
    }
    yt.prototype.then = function(e) {
        return he.promise.get(this).then(e)
    }, yt.prototype.finally = function(e) {
        return he.promise.get(this).finally(e)
    }, r(yt.prototype, bt), r(yt, Ie), Object.keys(bt).forEach(function(e) {
        yt[e] = function() {
            if (nt) return nt[e].apply(nt, arguments)
        }
    }), yt.DismissReason = T, yt.version = "8.15.3";
    var wt = yt;
    return wt.default = wt
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2), "undefined" != typeof document && function(e, t) {
        var n = e.createElement("style");
        if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
        else try {
            n.innerHTML = t
        } catch (e) {
            n.innerText = t
        }
    }(document, '@charset "UTF-8";@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:"!"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:"i"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:"?"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:"ØŸ"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}'),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(p) {
        p.ui = p.ui || {}, p.ui.version = "1.12.1";
        var s, n = 0,
            r = Array.prototype.slice;
        p.cleanData = (s = p.cleanData, function(e) {
            for (var t, n, i = 0; null != (n = e[i]); i++) try {
                (t = p._data(n, "events")) && t.remove && p(n).triggerHandler("remove")
            } catch (e) {}
            s(e)
        }), p.widget = function(e, n, t) {
            var i, s, o, a = {},
                r = e.split(".")[0],
                l = r + "-" + (e = e.split(".")[1]);
            return t || (t = n, n = p.Widget), p.isArray(t) && (t = p.extend.apply(null, [{}].concat(t))), p.expr[":"][l.toLowerCase()] = function(e) {
                return !!p.data(e, l)
            }, p[r] = p[r] || {}, i = p[r][e], s = p[r][e] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new s(e, t)
            }, p.extend(s, i, {
                version: t.version,
                _proto: p.extend({}, t),
                _childConstructors: []
            }), (o = new n).options = p.widget.extend({}, o.options), p.each(t, function(t, i) {
                return p.isFunction(i) ? void(a[t] = function() {
                    var e, t = this._super,
                        n = this._superApply;
                    return this._super = s, this._superApply = o, e = i.apply(this, arguments), this._super = t, this._superApply = n, e
                }) : void(a[t] = i);

                function s() {
                    return n.prototype[t].apply(this, arguments)
                }

                function o(e) {
                    return n.prototype[t].apply(this, e)
                }
            }), s.prototype = p.widget.extend(o, {
                widgetEventPrefix: i && o.widgetEventPrefix || e
            }, a, {
                constructor: s,
                namespace: r,
                widgetName: e,
                widgetFullName: l
            }), i ? (p.each(i._childConstructors, function(e, t) {
                var n = t.prototype;
                p.widget(n.namespace + "." + n.widgetName, s, t._proto)
            }), delete i._childConstructors) : n._childConstructors.push(s), p.widget.bridge(e, s), s
        }, p.widget.extend = function(e) {
            for (var t, n, i = r.call(arguments, 1), s = 0, o = i.length; s < o; s++)
                for (t in i[s]) n = i[s][t], i[s].hasOwnProperty(t) && void 0 !== n && (e[t] = p.isPlainObject(n) ? p.isPlainObject(e[t]) ? p.widget.extend({}, e[t], n) : p.widget.extend({}, n) : n);
            return e
        }, p.widget.bridge = function(o, t) {
            var a = t.prototype.widgetFullName || o;
            p.fn[o] = function(n) {
                var e = "string" == typeof n,
                    i = r.call(arguments, 1),
                    s = this;
                return e ? this.length || "instance" !== n ? this.each(function() {
                    var e, t = p.data(this, a);
                    return "instance" === n ? (s = t, !1) : t ? p.isFunction(t[n]) && "_" !== n.charAt(0) ? (e = t[n].apply(t, i)) !== t && void 0 !== e ? (s = e && e.jquery ? s.pushStack(e.get()) : e, !1) : void 0 : p.error("no such method '" + n + "' for " + o + " widget instance") : p.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + n + "'")
                }) : s = void 0 : (i.length && (n = p.widget.extend.apply(null, [n].concat(i))), this.each(function() {
                    var e = p.data(this, a);
                    e ? (e.option(n || {}), e._init && e._init()) : p.data(this, a, new t(n, this))
                })), s
            }
        }, p.Widget = function() {}, p.Widget._childConstructors = [], p.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(e, t) {
                t = p(t || this.defaultElement || this)[0], this.element = p(t), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = p(), this.hoverable = p(), this.focusable = p(), this.classesElementLookup = {}, t !== this && (p.data(t, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === t && this.destroy()
                    }
                }), this.document = p(t.style ? t.ownerDocument : t.document || t), this.window = p(this.document[0].defaultView || this.document[0].parentWindow)), this.options = p.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: p.noop,
            _create: p.noop,
            _init: p.noop,
            destroy: function() {
                var n = this;
                this._destroy(), p.each(this.classesElementLookup, function(e, t) {
                    n._removeClass(t, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: p.noop,
            widget: function() {
                return this.element
            },
            option: function(e, t) {
                var n, i, s, o = e;
                if (0 === arguments.length) return p.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (o = {}, e = (n = e.split(".")).shift(), n.length) {
                        for (i = o[e] = p.widget.extend({}, this.options[e]), s = 0; n.length - 1 > s; s++) i[n[s]] = i[n[s]] || {}, i = i[n[s]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === i[e] ? null : i[e];
                        i[e] = t
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        o[e] = t
                    } return this._setOptions(o), this
            },
            _setOptions: function(e) {
                for (var t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function(e) {
                var t, n, i;
                for (t in e) i = this.classesElementLookup[t], e[t] !== this.options.classes[t] && i && i.length && (n = p(i.get()), this._removeClass(i, t), n.addClass(this._classes({
                    element: n,
                    keys: t,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function(e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(s) {
                function e(e, t) {
                    for (var n, i = 0; e.length > i; i++) n = a.classesElementLookup[e[i]] || p(), n = s.add ? p(p.unique(n.get().concat(s.element.get()))) : p(n.not(s.element).get()), a.classesElementLookup[e[i]] = n, o.push(e[i]), t && s.classes[e[i]] && o.push(s.classes[e[i]])
                }
                var o = [],
                    a = this;
                return s = p.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, s), this._on(s.element, {
                    remove: "_untrackClassesElement"
                }), s.keys && e(s.keys.match(/\S+/g) || [], !0), s.extra && e(s.extra.match(/\S+/g) || []), o.join(" ")
            },
            _untrackClassesElement: function(n) {
                var i = this;
                p.each(i.classesElementLookup, function(e, t) {
                    -1 !== p.inArray(n.target, t) && (i.classesElementLookup[e] = p(t.not(n.target).get()))
                })
            },
            _removeClass: function(e, t, n) {
                return this._toggleClass(e, t, n, !1)
            },
            _addClass: function(e, t, n) {
                return this._toggleClass(e, t, n, !0)
            },
            _toggleClass: function(e, t, n, i) {
                i = "boolean" == typeof i ? i : n;
                var s = "string" == typeof e || null === e,
                    e = {
                        extra: s ? t : n,
                        keys: s ? e : t,
                        element: s ? this.element : e,
                        add: i
                    };
                return e.element.toggleClass(this._classes(e), i), this
            },
            _on: function(s, o, e) {
                var a, r = this;
                "boolean" != typeof s && (e = o, o = s, s = !1), e ? (o = a = p(o), this.bindings = this.bindings.add(o)) : (e = o, o = this.element, a = this.widget()), p.each(e, function(e, t) {
                    function n() {
                        return s || !0 !== r.options.disabled && !p(this).hasClass("ui-state-disabled") ? ("string" == typeof t ? r[t] : t).apply(r, arguments) : void 0
                    }
                    "string" != typeof t && (n.guid = t.guid = t.guid || n.guid || p.guid++);
                    var i = e.match(/^([\w:-]*)\s*(.*)$/),
                        e = i[1] + r.eventNamespace,
                        i = i[2];
                    i ? a.on(e, i, n) : o.on(e, n)
                })
            },
            _off: function(e, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(t).off(t), this.bindings = p(this.bindings.not(e).get()), this.focusable = p(this.focusable.not(e).get()), this.hoverable = p(this.hoverable.not(e).get())
            },
            _delay: function(e, t) {
                var n = this;
                return setTimeout(function() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }, t || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(p(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(e) {
                        this._removeClass(p(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        this._addClass(p(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(e) {
                        this._removeClass(p(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(e, t, n) {
                var i, s, o = this.options[e];
                if (n = n || {}, (t = p.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], s = t.originalEvent)
                    for (i in s) i in t || (t[i] = s[i]);
                return this.element.trigger(t, n), !(p.isFunction(o) && !1 === o.apply(this.element[0], [t].concat(n)) || t.isDefaultPrevented())
            }
        }, p.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(o, a) {
            p.Widget.prototype["_" + o] = function(t, e, n) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var i, s = e ? !0 !== e && "number" != typeof e && e.effect || a : o;
                "number" == typeof(e = e || {}) && (e = {
                    duration: e
                }), i = !p.isEmptyObject(e), e.complete = n, e.delay && t.delay(e.delay), i && p.effects && p.effects.effect[s] ? t[o](e) : s !== o && t[s] ? t[s](e.duration, e.easing, n) : t.queue(function(e) {
                    p(this)[o](), n && n.call(t[0]), e()
                })
            }
        }), p.widget, p.extend(p.expr[":"], {
            data: p.expr.createPseudo ? p.expr.createPseudo(function(t) {
                return function(e) {
                    return !!p.data(e, t)
                }
            }) : function(e, t, n) {
                return !!p.data(e, n[3])
            }
        }), p.fn.scrollParent = function(e) {
            var t = this.css("position"),
                n = "absolute" === t,
                i = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                e = this.parents().filter(function() {
                    var e = p(this);
                    return (!n || "static" !== e.css("position")) && i.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== t && e.length ? e : p(this[0].ownerDocument || document)
        }, p.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var o = !1;
        p(document).on("mouseup", function() {
            o = !1
        }), p.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.on("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).on("click." + this.widgetName, function(e) {
                    return !0 === p.data(e.target, t.widgetName + ".preventClickEvent") ? (p.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!o) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var t = this,
                        n = 1 === e.which,
                        i = !("string" != typeof this.options.cancel || !e.target.nodeName) && p(e.target).closest(this.options.cancel).length;
                    return n && !i && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        t.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? e.preventDefault() : (!0 === p.data(e.target, this.widgetName + ".preventClickEvent") && p.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return t._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return t._mouseUp(e)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0)), !0
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (p.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && p.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, o = !1, e.preventDefault()
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }), p.widget("ui.sortable", p.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(e, t, n) {
                return t <= e && e < t + n
            },
            _isFloating: function(e) {
                return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
            },
            _create: function() {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(e, t) {
                this._super(e, t), "handle" === e && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), p.each(this.items, function() {
                    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function() {
                this._mouseDestroy();
                for (var e = this.items.length - 1; 0 <= e; e--) this.items[e].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(e, t) {
                var n = null,
                    i = !1,
                    s = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), p(e.target).parents().each(function() {
                    return p.data(this, s.widgetName + "-item") === s ? (n = p(this), !1) : void 0
                }), p.data(e.target, s.widgetName + "-item") === s && (n = p(e.target)), !!n && (!(this.options.handle && !t && (p(this.options.handle, n).find("*").addBack().each(function() {
                    this === e.target && (i = !0)
                }), !i)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
            },
            _mouseStart: function(e, t, n) {
                var i, s, o = this.options;
                if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, p.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = p("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (i = this.containers.length - 1; 0 <= i; i--) this.containers[i]._trigger("activate", e, this._uiHash(this));
                return p.ui.ddmanager && (p.ui.ddmanager.current = this), p.ui.ddmanager && !o.dropBehaviour && p.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var t, n, i, s, o = this.options,
                    a = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), e.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), !1 !== a && p.ui.ddmanager && !o.dropBehaviour && p.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t = this.items.length - 1; 0 <= t; t--)
                    if (i = (n = this.items[t]).item[0], (s = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && i !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== i && !p.contains(this.placeholder[0], i) && ("semi-dynamic" !== this.options.type || !p.contains(this.element[0], i))) {
                        if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                        break
                    } return this._contactContainers(e), p.ui.ddmanager && p.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, t) {
                var n, i, s, o;
                if (e) return p.ui.ddmanager && !this.options.dropBehaviour && p.ui.ddmanager.drop(this, e), this.options.revert ? (i = (n = this).placeholder.offset(), o = {}, (s = this.options.axis) && "x" !== s || (o.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, p(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                    n._clear(e)
                })) : this._clear(e, t), !1
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp(new p.Event("mouseup", {
                        target: null
                    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var e = this.containers.length - 1; 0 <= e; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), p.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? p(this.domPosition.prev).after(this.currentItem) : p(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var e = this._getItemsAsjQuery(t && t.connected),
                    n = [];
                return t = t || {}, p(e).each(function() {
                    var e = (p(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    e && n.push((t.key || e[1] + "[]") + "=" + (t.key && t.expression ? e[1] : e[2]))
                }), !n.length && t.key && n.push(t.key + "="), n.join("&")
            },
            toArray: function(e) {
                var t = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, t.each(function() {
                    n.push(p(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function(e) {
                var t = this.positionAbs.left,
                    n = t + this.helperProportions.width,
                    i = this.positionAbs.top,
                    s = i + this.helperProportions.height,
                    o = e.left,
                    a = o + e.width,
                    r = e.top,
                    l = r + e.height,
                    c = this.offset.click.top,
                    d = this.offset.click.left,
                    c = "x" === this.options.axis || r < i + c && i + c < l,
                    d = "y" === this.options.axis || o < t + d && t + d < a,
                    d = c && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? d : t + this.helperProportions.width / 2 > o && a > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > r && l > s - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(e) {
                var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    e = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width);
                return !!(t && e) && (t = this._getDragVerticalDirection(), e = this._getDragHorizontalDirection(), this.floating ? "right" === e || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1))
            },
            _intersectsWithSides: function(e) {
                var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    i = this._getDragVerticalDirection(),
                    e = this._getDragHorizontalDirection();
                return this.floating && e ? "right" === e && n || "left" === e && !n : i && ("down" === i && t || "up" === i && !t)
            },
            _getDragVerticalDirection: function() {
                var e = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 != e && (0 < e ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var e = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 != e && (0 < e ? "right" : "left")
            },
            refresh: function(e) {
                return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var e = this.options;
                return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
            },
            _getItemsAsjQuery: function(e) {
                function t() {
                    a.push(this)
                }
                var n, i, s, o, a = [],
                    r = [],
                    l = this._connectWith();
                if (l && e)
                    for (n = l.length - 1; 0 <= n; n--)
                        for (i = (s = p(l[n], this.document[0])).length - 1; 0 <= i; i--)(o = p.data(s[i], this.widgetFullName)) && o !== this && !o.options.disabled && r.push([p.isFunction(o.options.items) ? o.options.items.call(o.element) : p(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (r.push([p.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : p(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = r.length - 1; 0 <= n; n--) r[n][0].each(t);
                return p(a)
            },
            _removeCurrentsFromItems: function() {
                var n = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = p.grep(this.items, function(e) {
                    for (var t = 0; n.length > t; t++)
                        if (n[t] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var t, n, i, s, o, a, r, l, c = this.items,
                    d = [
                        [p.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : p(this.options.items, this.element), this]
                    ],
                    u = this._connectWith();
                if (u && this.ready)
                    for (t = u.length - 1; 0 <= t; t--)
                        for (n = (i = p(u[t], this.document[0])).length - 1; 0 <= n; n--)(s = p.data(i[n], this.widgetFullName)) && s !== this && !s.options.disabled && (d.push([p.isFunction(s.options.items) ? s.options.items.call(s.element[0], e, {
                            item: this.currentItem
                        }) : p(s.options.items, s.element), s]), this.containers.push(s));
                for (t = d.length - 1; 0 <= t; t--)
                    for (o = d[t][1], n = 0, l = (a = d[t][0]).length; n < l; n++)(r = p(a[n])).data(this.widgetName + "-item", o), c.push({
                        item: r,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(e) {
                var t, n, i, s;
                for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), t = this.items.length - 1; 0 <= t; t--)(n = this.items[t]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (i = this.options.toleranceElement ? p(this.options.toleranceElement, n.item) : n.item, e || (n.width = i.outerWidth(), n.height = i.outerHeight()), s = i.offset(), n.left = s.left, n.top = s.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (t = this.containers.length - 1; 0 <= t; t--) s = this.containers[t].element.offset(), this.containers[t].containerCache.left = s.left, this.containers[t].containerCache.top = s.top, this.containers[t].containerCache.width = this.containers[t].element.outerWidth(), this.containers[t].containerCache.height = this.containers[t].element.outerHeight();
                return this
            },
            _createPlaceholder: function(n) {
                var i, s = (n = n || this).options;
                s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                    element: function() {
                        var e = n.currentItem[0].nodeName.toLowerCase(),
                            t = p("<" + e + ">", n.document[0]);
                        return n._addClass(t, "ui-sortable-placeholder", i || n.currentItem[0].className)._removeClass(t, "ui-sortable-helper"), "tbody" === e ? n._createTrPlaceholder(n.currentItem.find("tr").eq(0), p("<tr>", n.document[0]).appendTo(t)) : "tr" === e ? n._createTrPlaceholder(n.currentItem, t) : "img" === e && t.attr("src", n.currentItem.attr("src")), i || t.css("visibility", "hidden"), t
                    },
                    update: function(e, t) {
                        i && !s.forcePlaceholderSize || (t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), n.placeholder = p(s.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), s.placeholder.update(n, n.placeholder)
            },
            _createTrPlaceholder: function(e, t) {
                var n = this;
                e.children().each(function() {
                    p("<td>&#160;</td>", n.document[0]).attr("colspan", p(this).attr("colspan") || 1).appendTo(t)
                })
            },
            _contactContainers: function(e) {
                for (var t, n, i, s, o, a, r, l, c, d = null, u = null, h = this.containers.length - 1; 0 <= h; h--)
                    if (!p.contains(this.currentItem[0], this.containers[h].element[0]))
                        if (this._intersectsWith(this.containers[h].containerCache)) {
                            if (d && p.contains(this.containers[h].element[0], d.element[0])) continue;
                            d = this.containers[h], u = h
                        } else this.containers[h].containerCache.over && (this.containers[h]._trigger("out", e, this._uiHash(this)), this.containers[h].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[u].containerCache.over || (this.containers[u]._trigger("over", e, this._uiHash(this)), this.containers[u].containerCache.over = 1);
                    else {
                        for (n = 1e4, i = null, s = (l = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", o = l ? "width" : "height", c = l ? "pageX" : "pageY", t = this.items.length - 1; 0 <= t; t--) p.contains(this.containers[u].element[0], this.items[t].item[0]) && this.items[t].item[0] !== this.currentItem[0] && (a = this.items[t].item.offset()[s], r = !1, e[c] - a > this.items[t][o] / 2 && (r = !0), n > Math.abs(e[c] - a) && (n = Math.abs(e[c] - a), i = this.items[t], this.direction = r ? "up" : "down"));
                        (i || this.options.dropOnEmpty) && (this.currentContainer !== this.containers[u] ? (i ? this._rearrange(e, i, null, !0) : this._rearrange(e, null, this.containers[u].element, !0), this._trigger("change", e, this._uiHash()), this.containers[u]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[u], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[u]._trigger("over", e, this._uiHash(this)), this.containers[u].containerCache.over = 1) : this.currentContainer.containerCache.over || (this.containers[u]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1))
                    }
            },
            _createHelper: function(e) {
                var t = this.options,
                    e = p.isFunction(t.helper) ? p(t.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === t.helper ? this.currentItem.clone() : this.currentItem;
                return e.parents("body").length || p("parent" !== t.appendTo ? t.appendTo : this.currentItem[0].parentNode)[0].appendChild(e[0]), e[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), e[0].style.width && !t.forceHelperSize || e.width(this.currentItem.width()), e[0].style.height && !t.forceHelperSize || e.height(this.currentItem.height()), e
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), p.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && p.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && p.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, t, n = this.options;
                "parent" === n.containment && (n.containment = this.helper[0].parentNode), "document" !== n.containment && "window" !== n.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = p(n.containment)[0], t = p(n.containment).offset(), n = "hidden" !== p(e).css("overflow"), this.containment = [t.left + (parseInt(p(e).css("borderLeftWidth"), 10) || 0) + (parseInt(p(e).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(p(e).css("borderTopWidth"), 10) || 0) + (parseInt(p(e).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(p(e).css("borderLeftWidth"), 10) || 0) - (parseInt(p(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(p(e).css("borderTopWidth"), 10) || 0) - (parseInt(p(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, t) {
                t = t || this.position;
                var n = "absolute" === e ? 1 : -1,
                    i = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && p.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    e = /(html|body)/i.test(i[0].tagName);
                return {
                    top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : i.scrollTop()) * n,
                    left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : i.scrollLeft()) * n
                }
            },
            _generatePosition: function(e) {
                var t = this.options,
                    n = e.pageX,
                    i = e.pageY,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && p.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (i = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (i = this.containment[3] + this.offset.click.top)), t.grid && (e = this.originalPageY + Math.round((i - this.originalPageY) / t.grid[1]) * t.grid[1], i = !this.containment || e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - t.grid[1] : e + t.grid[1], e = this.originalPageX + Math.round((n - this.originalPageX) / t.grid[0]) * t.grid[0], n = !this.containment || e - this.offset.click.left >= this.containment[0] && e - this.offset.click.left <= this.containment[2] ? e : e - this.offset.click.left >= this.containment[0] ? e - t.grid[0] : e + t.grid[0])), {
                    top: i - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()),
                    left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft())
                }
            },
            _rearrange: function(e, t, n, i) {
                n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s === this.counter && this.refreshPositions(!i)
                })
            },
            _clear: function(e, t) {
                function n(t, n, i) {
                    return function(e) {
                        i._trigger(t, e, n._uiHash(n))
                    }
                }
                this.reverting = !1;
                var i, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && s.push(function(e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || s.push(function(e) {
                        this._trigger("update", e, this._uiHash())
                    }), this !== this.currentContainer && (t || (s.push(function(e) {
                        this._trigger("remove", e, this._uiHash())
                    }), s.push(function(t) {
                        return function(e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), s.push(function(t) {
                        return function(e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) t || s.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                    for (i = 0; s.length > i; i++) s[i].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                !1 === p.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function(e) {
                var t = e || this;
                return {
                    helper: t.helper,
                    placeholder: t.placeholder || p([]),
                    position: t.position,
                    originalPosition: t.originalPosition,
                    offset: t.positionAbs,
                    item: t.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(i) {
        "use strict";

        function t(u) {
            return function(e) {
                var t, n, i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (i)
                    for (var s = 0, o = i.length; s < o; ++s) {
                        var a = i[s].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                            r = (n = (n = a[0]).toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(n)),
                            l = a[1] || "",
                            c = a[3] || "",
                            d = null,
                            a = a[2];
                        h.hasOwnProperty(a) && (d = h[a], d = Number(u[d])), null !== d && ("!" === l && (t = d, a = n = void 0, n = "s", a = "", (c = c) && (n = 1 === (c = c.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? c[0] : (a = c[0], c[1])), d = 1 < Math.abs(t) ? n : a), "" === l && d < 10 && (d = "0" + d.toString()), e = e.replace(r, d.toString()))
                    }
                return e.replace(/%%/, "%")
            }
        }
        var s = [],
            n = [],
            o = {
                precision: 100,
                elapse: !1,
                defer: !1
            };
        n.push(/^[0-9]*$/.source), n.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n = new RegExp(n.join("|"));

        function a(e, t, n) {
            this.el = e, this.$el = i(e), this.interval = null, this.offset = {}, this.options = i.extend({}, o), this.instanceNumber = s.length, s.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = i.extend({}, o, n)), this.setFinalDate(t), !1 === this.options.defer && this.start()
        }
        var h = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        };
        i.extend(a.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var e = this;
                this.update(), this.interval = setInterval(function() {
                    e.update.call(e)
                }, this.options.precision)
            },
            stop: function() {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function() {
                this.interval ? this.stop() : this.start()
            },
            pause: function() {
                this.stop()
            },
            resume: function() {
                this.start()
            },
            remove: function() {
                this.stop.call(this), s[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function(e) {
                this.finalDate = function(e) {
                    if (e instanceof Date) return e;
                    if (String(e).match(n)) return String(e).match(/^[0-9]*$/) && (e = Number(e)), String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")), new Date(e);
                    throw new Error("Couldn't cast `" + e + "` to a date object.")
                }(e)
            },
            update: function() {
                var e, t, n;
                0 !== this.$el.closest("html").length ? (e = void 0 !== i._data(this.el, "events"), t = new Date, n = this.finalDate.getTime() - t.getTime(), n = Math.ceil(n / 1e3), n = !this.options.elapse && n < 0 ? 0 : Math.abs(n), this.totalSecsLeft !== n && e && (this.totalSecsLeft = n, this.elapsed = t >= this.finalDate, this.offset = {
                    seconds: this.totalSecsLeft % 60,
                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                    weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                    years: Math.abs(this.finalDate.getFullYear() - t.getFullYear()),
                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                    totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                    totalMinutes: Math.floor(this.totalSecsLeft / 60),
                    totalSeconds: this.totalSecsLeft
                }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))) : this.remove()
            },
            dispatchEvent: function(e) {
                e = i.Event(e + ".countdown");
                e.finalDate = this.finalDate, e.elapsed = this.elapsed, e.offset = i.extend({}, this.offset), e.strftime = t(this.offset), this.$el.trigger(e)
            }
        }), i.fn.countdown = function() {
            var n = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var e, t = i(this).data("countdown-instance");
                void 0 !== t ? (e = s[t], t = n[0], a.prototype.hasOwnProperty(t) ? e[t].apply(e, n.slice(1)) : null === String(t).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (e.setFinalDate.call(e, t), e.start()) : i.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, t))) : new a(this, n[0], n[1])
            })
        }
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.lozad = t()
    }(this, function() {
        "use strict";
        var d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, i = arguments[t];
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            },
            o = "undefined" != typeof document && document.documentMode,
            u = {
                rootMargin: "0px",
                threshold: 0,
                load: function(e) {
                    var t;
                    if ("picture" === e.nodeName.toLowerCase() && (t = document.createElement("img"), o && e.getAttribute("data-iesrc") && (t.src = e.getAttribute("data-iesrc")), e.getAttribute("data-alt") && (t.alt = e.getAttribute("data-alt")), e.append(t)), "video" === e.nodeName.toLowerCase() && !e.getAttribute("data-src") && e.children) {
                        for (var n, i = e.children, s = 0; s <= i.length - 1; s++)(n = i[s].getAttribute("data-src")) && (i[s].src = n);
                        e.load()
                    }
                    e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")), e.getAttribute("data-srcset") && e.setAttribute("srcset", e.getAttribute("data-srcset")), e.getAttribute("data-background-image") && (e.style.backgroundImage = "url('" + e.getAttribute("data-background-image") + "')"), e.getAttribute("data-toggle-class") && e.classList.toggle(e.getAttribute("data-toggle-class"))
                },
                loaded: function() {}
            };

        function h(e) {
            e.setAttribute("data-loaded", !0)
        }

        function p(e) {
            return "true" === e.getAttribute("data-loaded")
        }
        return function() {
            var n, i, s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
                e = d({}, u, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}),
                o = e.root,
                t = e.rootMargin,
                a = e.threshold,
                r = e.load,
                l = e.loaded,
                c = void 0;
            return "undefined" != typeof window && window.IntersectionObserver && (c = new IntersectionObserver((n = r, i = l, function(e, t) {
                e.forEach(function(e) {
                    (0 < e.intersectionRatio || e.isIntersecting) && (t.unobserve(e.target), p(e.target) || (n(e.target), h(e.target), i(e.target)))
                })
            }), {
                root: o,
                rootMargin: t,
                threshold: a
            })), {
                observe: function() {
                    for (var e = function(e, t) {
                            t = 1 < arguments.length && void 0 !== t ? t : document;
                            return e instanceof Element ? [e] : e instanceof NodeList ? e : t.querySelectorAll(e)
                        }(s, o), t = 0; t < e.length; t++) p(e[t]) || (c ? c.observe(e[t]) : (r(e[t]), h(e[t]), l(e[t])))
                },
                triggerLoad: function(e) {
                    p(e) || (r(e), h(e), l(e))
                },
                observer: c
            }
        }
    });
var location_app = location_app || {},
    location_app = {
        body: $(document.body),
        Window: $(window),
        current_district_id: 0,
        current_ward_id: 0,
        current_street_id: 0,
        is_requesting: !1,
        getDistricts: function(e, t) {
            var n = this;
            n.current_district_id = t || 0, 0 != e && "" != e && (n.is_requesting || (n.is_requesting = !0, $.ajax({
                type: "POST",
                url: base_api_url + "/get/districts",
                data: {
                    province: e
                },
                dataType: "json",
                success: function(e) {
                    n.is_requesting = !1, 200 == e.code && ($(".js-select-duong").empty(), $(".js-select-duong").select2({
                        data: [{
                            id: "0",
                            text: "-- ÄÆ°á»ng/Phá»‘ --"
                        }]
                    }), $(".js-select-phuongxa").empty(), $(".js-select-phuongxa").select2({
                        data: [{
                            id: "0",
                            text: "-- PhÆ°á»ng/XÃ£ --"
                        }]
                    }), $(".js-select-quanhuyen").empty(), (e = $.map(e.districts, function(e) {
                        return {
                            id: e.id,
                            text: e.name
                        }
                    })).unshift({
                        id: "0",
                        text: "-- Quáº­n/huyá»‡n -- "
                    }), $(".js-select-quanhuyen").select2({
                        data: e,
                        placeholder: "Chá»n quáº­n huyá»‡n"
                    }), n.current_district_id && $(".js-select-quanhuyen").val(n.current_district_id).trigger("change"))
                },
                error: function(e) {
                    n.is_requesting = !1
                }
            })))
        },
        getWards: function(e, t) {
            var n = this;
            n.current_ward_id = t || 0, 0 != e && "" != e && ($(".js-select-phuongxa").length <= 0 || $.ajax({
                type: "POST",
                url: base_api_url + "/get/wards",
                data: {
                    district: e
                },
                dataType: "json",
                success: function(e) {
                    n.is_requesting = !1, 200 == e.code && ($(".js-select-phuongxa").empty(), (e = $.map(e.wards, function(e) {
                        return {
                            id: e.id,
                            text: e.name
                        }
                    })).unshift({
                        id: "0",
                        text: "Chá»n phÆ°á»ng xÃ£"
                    }), $(".js-select-phuongxa").select2({
                        data: e,
                        placeholder: "Chá»n phÆ°á»ng xÃ£"
                    }), n.current_ward_id && $(".js-select-phuongxa").val(n.current_ward_id).trigger("change"))
                },
                error: function(e) {
                    n.is_requesting = !1
                }
            }))
        },
        getStreets: function(e, t) {
            var n = this;
            0 != e && "" != e && (n.current_street_id = t || 0, $(".js-select-duong").length <= 0 || $.ajax({
                type: "POST",
                url: base_api_url + "/get/streets",
                data: {
                    district: e
                },
                dataType: "json",
                success: function(e) {
                    200 == e.code && ($(".js-select-duong").empty(), (e = $.map(e.streets, function(e) {
                        return {
                            id: e.id,
                            text: e.name
                        }
                    })).unshift({
                        id: "0",
                        text: "Chá»n Ä‘Æ°á»ng phá»‘"
                    }), $(".js-select-duong").select2({
                        data: e,
                        placeholder: "Chá»n Ä‘Æ°á»ng phá»‘"
                    }), n.current_street_id && $(".js-select-duong").val(n.current_street_id).trigger("change"))
                },
                error: function(e) {
                    n.is_requesting = !1
                }
            }))
        },
        layoutFront: function() {
            var n = this;
            $.fn.select2 && ($(".js-select-tinhthanhpho").select2().on("change", function(e) {
                var t = $(this).val();
                n.getDistricts(t, n.current_district_id)
            }), $(".js-select-quanhuyen").select2().on("change", function(e) {
                var t = $(this).val();
                t && (n.getWards(t, n.current_street_id), n.getStreets(t, n.current_street_id))
            }), $(".js-select-duong").select2({}), $(".js-select-phuongxa").select2({}))
        },
        init: function() {
            this.layoutFront()
        }
    };
jQuery(document).ready(function(e) {
    location_app.init()
});
var front_app = front_app || {},
    front_app = {
        body: $(document.body),
        Window: $(window),
        is_requesting: !1,
        positionFixed: function() {
            var e = $("#fixed_Left").width(),
                t = $("#fixed_Right").width(),
                n = ($(document).width(), $(document).width(), 0);
            $(document.body).width() < 1100 + e + t ? $(".banner_fixed").css("display", "none") : ($(".banner_fixed").css("display", "block"), n = (+$(document.body).width() - 1100) / 2 - e - 15, $("#fixed_Left").css({
                left: n + "px"
            }), $("#fixed_Right").css({
                right: n + "px"
            }))
        },
        user: {
            logout: function() {
                $(".js-header-control-user-login").on("click", ".js-user-logout", function(e) {
                    e.preventDefault();
                    e = $(this).attr("href");
                    localStorage.removeItem("authenticated"), localStorage.removeItem("verified"), localStorage.removeItem("access_token"), localStorage.removeItem("bds123.user_data"), window.location.href = e
                })
            },
            reloadHtmlHeader: function() {
                var e;
                0 != $(".js-reload-html-header").length && (e = base_url + "/api/refresh/header", $.ajax({
                    url: e,
                    type: "POST",
                    dataType: "json"
                }))
            },
            userLastActivity: function() {
                0 != $(".js-author-online-status").length && $.ajax({
                    url: base_url + "/api/user/check/online",
                    data: {
                        user_id: $(".js-author-online-status").attr("author_id") || 0
                    },
                    type: "POST",
                    dataType: "json"
                })
            },
            init: function() {
                this.reloadHtmlHeader(), this.userLastActivity(), this.logout()
            }
        },
        post: {
            postLikable: function() {
                $(".js-btn-save").on("click", function(e) {
                    e.preventDefault();
                    var e = $(this),
                        i = $(this).attr("data-post-id"),
                        s = "saved";
                    e.hasClass("saved") && (s = "unsaved"), window.show_loading = !1, $.ajax({
                        url: base_url + "/api/post/save",
                        data: {
                            post_id: i,
                            action: s,
                            referer_url: window.location.href
                        },
                        type: "POST",
                        dataType: "json",
                        success: function(n) {
                            $(".js-btn-save").each(function(e, t) {
                                $(t).attr("data-post-id") == i && ($(t).find("span").html(n.button_text), $(t).attr("data-original-title", n.button_text), "saved" == s ? $(t).addClass("saved") : ($(t).removeClass("saved"), front_app.body.hasClass("page-post-saved") && $(t).closest("article").length && $(t).closest("article").fadeOut(1e3, function() {
                                    $(this).remove()
                                })))
                            })
                        }
                    })
                })
            },
            init: function() {
                this.postLikable()
            }
        },
        layoutFront: function() {
            var e = this,
                t = !1;
            $("#my-video").length && !t && (t = videojs("my-video", {
                controls: !0,
                autoplay: !1,
                preload: "auto"
            })), $(".js-btn-menu").click(function(e) {
                $("body").toggleClass("active-menu-mobile"), e.stopPropagation()
            }), $(".js-footer-sublink .js-btn-show-sublink").click(function(e) {
                $(this).parent().parent().find("ul").toggleClass("show-sublink"), e.stopPropagation()
            }), $(".js-panel-backdrop").click(function() {
                $("body").removeClass("active-menu-mobile")
            }), $(".js-scroll-top").on("click", function(e) {
                $("html,body").animate({
                    scrollTop: 0
                }, "fast")
            }), $(window).resize(function() {
                e.positionFixed()
            }), e.positionFixed();
            var n = $("#navbar-menu"),
                i = 0 < n.length ? n.offset().top : 0;
            $(window).scroll(function() {
                var e = $(this).scrollTop() > i;
                n.toggleClass("fix-nav", e), $("body").toggleClass("fix-body", e), 400 < $(this).scrollTop() ? $(".scrollToTop").fadeIn() : $(".scrollToTop").fadeOut()
            }), $(".scrollToTop").click(function() {
                return $("html, body").animate({
                    scrollTop: 0
                }, 500), !1
            }), $(".js-jump-to").click(function() {
                var e = $(this).attr("data-jumpto"),
                    t = 110;
                $(".js-bar-sticky").length && (t = $("#headerNav").outerHeight() + $(".js-bar-sticky").outerHeight() + 15);
                var n = t;
                $(".js-bar-sticky").length && !$(".js-bar-sticky").hasClass("is-sticky") && (n = $("#headerNav").outerHeight() + 2 * $(".js-bar-sticky").outerHeight() + 30), $(".js-bar-sticky").length && $(".js-bar-sticky").hasClass("is-sticky") && (n = t), $("html, body").animate({
                    scrollTop: $("#" + e).offset().top - n + "px"
                }, 500)
            }), "undefined" != typeof Swiper && (new Swiper(".js-post-media-swiper", {
                loop: !0,
                pagination: {
                    el: ".swiper-pagination"
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }), new Swiper(".images-swiper-container", {
                loop: !0,
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction"
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            })), $(".js-show-popup-image").on("click", function(e) {
                $("body").addClass("active-popup-image popup-overflow-hidden")
            }), $(".js-show-popup-video").on("click", function(e) {
                $("body").addClass("active-popup-video popup-overflow-hidden")
            }), $(".js-show-popup-map").on("click", function(e) {
                $("body").addClass("active-popup-map popup-overflow-hidden")
            }), $(".js-close-popup-123").on("click", function() {
                $("body").removeClass("active-popup-image"), $("body").removeClass("active-popup-video"), $("body").removeClass("active-popup-map"), $("body").removeClass("popup-overflow-hidden"), t && t.pause()
            })
        },
        processSubmitFormFront: function() {
            var s = this;
            $(".js-form-submit-data").each(function(e, t) {
                $(t).validate({
                    submitHandler: function(e, t) {
                        var n, i;
                        t.preventDefault(), s.is_requesting || (s.is_requesting = !0, (t = (n = $(e)).attr("data-action-url")) && (i = n.find(".js-btn-hoan-tat").html(), e = new FormData(e), $.ajax({
                            url: t,
                            data: e,
                            processData: !1,
                            contentType: !1,
                            type: "POST",
                            dataType: "json",
                            beforeSend: function() {
                                n.find(".js-btn-hoan-tat").text("Äang xá»­ lÃ­..."), n.find(".js-btn-hoan-tat").addClass("disabled").attr("disabled", !0)
                            },
                            success: function(e) {
                                n.find(".js-btn-hoan-tat").html(i), n.find(".js-btn-hoan-tat").removeClass("disabled").removeAttr("disabled", !0), s.is_requesting = !1
                            },
                            error: function(e) {
                                n.find(".js-btn-hoan-tat").html(i), n.find(".js-btn-hoan-tat").removeClass("disabled").removeAttr("disabled", !0), s.is_requesting = !1
                            }
                        })))
                    },
                    errorPlacement: function(e, t) {
                        var n = t.closest(".input-group"),
                            t = (0 < n.length ? n : t).parent();
                        e.appendTo(t)
                    }
                })
            })
        },
        reloadPostSaved: function() {
            var n;
            0 != $(".js-btn-save").length && (n = [], $(".js-btn-save").each(function(e, t) {
                t = $(t).attr("data-post-id");
                n.indexOf(t) < 0 && n.push(t)
            }), $.ajax({
                url: base_url + "/api/post/check/save",
                data: {
                    data_post_ids: n
                },
                type: "POST",
                dataType: "json"
            }))
        },
        calculatorReadmore: function() {
            $(".js-btn-readmore").on("click", function(e) {
                e.preventDefault(), $(".js-bottom-content").removeClass("has-readmore")
            })
        },
        lazyLoadImage: function() {
            "function" == typeof lozad && (this.observer = lozad(".lazy", {
                rootMargin: "10px 0px",
                threshold: .1,
                loaded: function(e) {
                    e.classList.add("lazy_done"), e.classList.remove("lazy")
                }
            }), this.observer.observe())
        },
        initWithWindow: function() {
            this.lazyLoadImage()
        },
        init: function() {
            this.layoutFront(), this.processSubmitFormFront(), this.reloadPostSaved(), this.calculatorReadmore(), this.user.init(), this.post.init()
        }
    };
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")
    }
}), $(document).ajaxComplete(function(e, t, n) {
    if (t.responseText) {
        var i = $.parseJSON(t.responseText);
        if (i)
            if (200 == i.code || 500 != i.code) void 0 !== i.action && "" != i.action && $.each(i.action.trim().split(" "), function(e, t) {
                var n = 2 < i.action.trim().split(" ").length ? 3e3 : 2e3;
                "redirect" == t && setTimeout(function() {
                    window.location.href = i.link
                }, n), "sweetalert" == t && Swal.fire({
                    title: i.title,
                    html: i.message,
                    type: i.command,
                    timer: "error" == i.command ? 9e3 : 3e3,
                    showConfirmButton: "error" == i.command
                }), "toastr" == t && (toastr.options = {
                    closeButton: !0,
                    showDuration: "300",
                    hideDuration: "1000",
                    timeOut: "6000"
                }, "success" == i.command ? toastr.success(i.message, i.title) : "info" == i.command ? toastr.info(i.message, i.title) : "waring" == i.command ? toastr.warning(i.message, i.title) : "error" == i.command ? (toastr.options.closeButton = !0, toastr.error(i.message, i.title)) : toastr.info(i.message, i.title)), "redirect_auth" != t && "redirect_suddenly" != t || (window.location.href = i.link), "redirect_delay" == t && setTimeout(function() {
                    window.location.href = i.link
                }, n), "reload" == t && setTimeout(function() {
                    window.location.reload()
                }, n), "replace_html" == t && $(i.js_class).html(i.html), "replace_array_html" == t && $.each(i.responses, function(e, t) {
                    $(e).html(t)
                }), "check_save_post" == t && (n = i.post_likeds, $.each(n, function(e, t) {
                    $('.js-btn-save[data-post-id="' + e + '"]').attr("title", t.text), $('.js-btn-save[data-post-id="' + e + '"]').find("span").html(t.text), 1 == t.liked ? $('.js-btn-save[data-post-id="' + e + '"]').addClass("saved") : $('.js-btn-save[data-post-id="' + e + '"]').removeClass("saved")
                })), "user_last_activity" == t && (i.is_online ? $(".js-author-online-status").addClass("online") : $(".js-author-online-status").removeClass("online").addClass("offline"), $(".js-author-online-status").find("span").html(i.last_activity), $(".js-author-online-status").removeClass("hidden"))
            });
            else {
                var s, o = i;
                for (s in o) toastr.options.closeButton = !0, toastr.error(o[s][0], "Lá»—i")
            }
    }
}), front_app.initWithWindow(), jQuery(document).ready(function(e) {
    e = e(document.body);
    e.hasClass("loaded") || (e.addClass("loaded"), e.addClass("ready"), front_app.init())
});
//# sourceMappingURL=main-fr.min.js.map