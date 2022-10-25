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
								n.find(".js-btn-hoan-tat").text("Đang xử lí..."), n.find(".js-btn-hoan-tat").addClass("disabled").attr("disabled", !0)
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
				for (s in o) toastr.options.closeButton = !0, toastr.error(o[s][0], "Lỗi")
			}
	}
}), front_app.initWithWindow(), jQuery(document).ready(function(e) {
	e = e(document.body);
	e.hasClass("loaded") || (e.addClass("loaded"), e.addClass("ready"), front_app.init())
});
