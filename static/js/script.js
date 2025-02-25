/*! For license information please see main.c62e81bd.js.LICENSE.txt */
(() => {
    var e = {
            26: function(e, t, n) {
                e.exports = function(e, t) {
                    "use strict";
                    var n = function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                            return e
                        }, n.apply(this, arguments)
                    };

                    function r(e, n, r) {
                        var a = t.useRef(n);
                        t.useEffect((function() {
                            a.current = n
                        })), t.useEffect((function() {
                            var t = void 0 === r ? window : r,
                                n = function(e) {
                                    return a.current(e)
                                };
                            return null === t || void 0 === t || t.addEventListener(e, n),
                                function() {
                                    null === t || void 0 === t || t.removeEventListener(e, n)
                                }
                        }), [e, r])
                    }
                    var a = function() {
                        var e = t.useState({
                                info: "",
                                Android: function() {
                                    return null
                                },
                                BlackBerry: function() {
                                    return null
                                },
                                IEMobile: function() {
                                    return null
                                },
                                iOS: function() {
                                    return null
                                },
                                iPad: function() {
                                    return null
                                },
                                OperaMini: function() {
                                    return null
                                },
                                any: function() {
                                    return !1
                                }
                            }),
                            r = e[0],
                            a = e[1];
                        return t.useEffect((function() {
                            if ("undefined" !== typeof navigator) {
                                var e = navigator.userAgent;
                                a((function(t) {
                                    return n(n({}, t), {
                                        info: e,
                                        Android: function() {
                                            return e.match(/Android/i)
                                        },
                                        BlackBerry: function() {
                                            return e.match(/BlackBerry/i)
                                        },
                                        IEMobile: function() {
                                            return e.match(/IEMobile/i)
                                        },
                                        iOS: function() {
                                            return e.match(/iPhone|iPad|iPod/i)
                                        },
                                        iPad: function() {
                                            return !!(e.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
                                        },
                                        OperaMini: function() {
                                            return e.match(/Opera Mini/i)
                                        },
                                        any: function() {
                                            var e, n, r, a, i;
                                            return !!((null === (e = t.Android()) || void 0 === e ? void 0 : e.length) || (null === (n = t.BlackBerry()) || void 0 === n ? void 0 : n.length) || (null === (r = t.iOS()) || void 0 === r ? void 0 : r.length) || t.iPad() || (null === (a = t.OperaMini()) || void 0 === a ? void 0 : a.length) || (null === (i = t.IEMobile()) || void 0 === i ? void 0 : i.length))
                                        }
                                    })
                                }))
                            }
                        }), []), r
                    };

                    function i(e, t) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        if ("function" !== typeof t) throw new TypeError("callback must be a function");
                        for (var a = Object(e), i = a.length >>> 0, l = n[2], s = 0; s < i; s++) {
                            var o = a[s];
                            if (t.call(l, o, s, a)) return o
                        }
                    }

                    function l(a) {
                        var l = a.clickables,
                            s = void 0 === l ? ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link"] : l,
                            o = a.children,
                            c = a.color,
                            u = void 0 === c ? "220, 90, 90" : c,
                            d = a.innerScale,
                            f = void 0 === d ? .6 : d,
                            p = a.innerSize,
                            m = void 0 === p ? 8 : p,
                            h = a.innerStyle,
                            v = a.outerAlpha,
                            g = void 0 === v ? .4 : v,
                            y = a.outerScale,
                            b = void 0 === y ? 6 : y,
                            x = a.outerSize,
                            w = void 0 === x ? 8 : x,
                            S = a.outerStyle,
                            k = a.showSystemCursor,
                            _ = void 0 !== k && k,
                            E = a.trailingSpeed,
                            C = void 0 === E ? 8 : E,
                            j = t.useMemo((function() {
                                return {
                                    children: o,
                                    color: u,
                                    innerScale: f,
                                    innerSize: m,
                                    innerStyle: h,
                                    outerAlpha: g,
                                    outerScale: b,
                                    outerSize: w,
                                    outerStyle: S
                                }
                            }), [o, u, f, m, h, g, b, w, S]),
                            T = t.useRef(null),
                            N = t.useRef(null),
                            P = t.useRef(null),
                            z = t.useRef(null),
                            L = t.useState({
                                x: 0,
                                y: 0
                            }),
                            M = L[0],
                            O = L[1],
                            I = t.useState(!1),
                            D = I[0],
                            A = I[1],
                            F = t.useState(j),
                            R = F[0],
                            H = F[1],
                            B = t.useState(!1),
                            V = B[0],
                            G = B[1],
                            q = t.useState(!1),
                            U = q[0],
                            W = q[1],
                            Y = t.useRef(0),
                            Q = t.useRef(0),
                            X = t.useCallback((function(e) {
                                var t = e.clientX,
                                    n = e.clientY;
                                O({
                                    x: t,
                                    y: n
                                }), null !== N.current && (N.current.style.top = "".concat(n, "px"), N.current.style.left = "".concat(t, "px")), Y.current = t, Q.current = n
                            }), []),
                            J = t.useCallback((function(e) {
                                void 0 !== z.current && (M.x += (Y.current - M.x) / C, M.y += (Q.current - M.y) / C, null !== T.current && (T.current.style.top = "".concat(M.y, "px"), T.current.style.left = "".concat(M.x, "px"))), z.current = e, P.current = requestAnimationFrame(J)
                            }), [P]);
                        t.useEffect((function() {
                            return P.current = requestAnimationFrame(J),
                                function() {
                                    null !== P.current && cancelAnimationFrame(P.current)
                                }
                        }), [J]);
                        var Z = function(e, t) {
                                return "".concat(parseInt(String(e * t)), "px")
                            },
                            K = t.useCallback((function(e, t, n) {
                                e && (e.style.height = Z(t, n), e.style.width = Z(t, n))
                            }), []),
                            $ = t.useCallback((function() {
                                return G(!0)
                            }), []),
                            ee = t.useCallback((function() {
                                return G(!1)
                            }), []),
                            te = t.useCallback((function() {
                                return A(!0)
                            }), []),
                            ne = t.useCallback((function() {
                                return A(!1)
                            }), []);
                        r("mousemove", X), r("mousedown", $), r("mouseup", ee), r("mouseover", te), r("mouseout", ne), t.useEffect((function() {
                            V ? (K(N.current, R.innerSize, R.innerScale), K(T.current, R.outerSize, R.outerScale)) : (K(N.current, R.innerSize, 1), K(T.current, R.outerSize, 1))
                        }), [R.innerSize, R.innerScale, R.outerSize, R.outerScale, K, V]), t.useEffect((function() {
                            U && (K(N.current, R.innerSize, 1.2 * R.innerScale), K(T.current, R.outerSize, 1.4 * R.outerScale))
                        }), [R.innerSize, R.innerScale, R.outerSize, R.outerScale, K, U]), t.useEffect((function() {
                            null != N.current && null != T.current && (D ? (N.current.style.opacity = "1", T.current.style.opacity = "1") : (N.current.style.opacity = "0", T.current.style.opacity = "0"))
                        }), [D]), t.useEffect((function() {
                            var e = document.querySelectorAll(s.map((function(e) {
                                return "object" === typeof e && (null === e || void 0 === e ? void 0 : e.target) ? e.target : null !== e && void 0 !== e ? e : ""
                            })).join(","));
                            return e.forEach((function(e) {
                                    _ || (e.style.cursor = "none");
                                    var t = "object" === typeof s ? i(s, (function(t) {
                                            return "object" === typeof t && e.matches(t.target)
                                        })) : {},
                                        r = n(n({}, j), t);
                                    e.addEventListener("mouseover", (function() {
                                        G(!0), H(r)
                                    })), e.addEventListener("click", (function() {
                                        G(!0), W(!1)
                                    })), e.addEventListener("mousedown", (function() {
                                        W(!0)
                                    })), e.addEventListener("mouseup", (function() {
                                        G(!0)
                                    })), e.addEventListener("mouseout", (function() {
                                        G(!1), W(!1), H(j)
                                    }))
                                })),
                                function() {
                                    e.forEach((function(e) {
                                        var t = "object" === typeof s ? i(s, (function(t) {
                                                return "object" === typeof t && e.matches(t.target)
                                            })) : {},
                                            r = n(n({}, j), t);
                                        e.removeEventListener("mouseover", (function() {
                                            G(!0), H(r)
                                        })), e.removeEventListener("click", (function() {
                                            G(!0), W(!1)
                                        })), e.removeEventListener("mousedown", (function() {
                                            W(!0)
                                        })), e.removeEventListener("mouseup", (function() {
                                            G(!0)
                                        })), e.removeEventListener("mouseout", (function() {
                                            G(!1), W(!1), H(j)
                                        }))
                                    }))
                                }
                        }), [V, s, _, j]), t.useEffect((function() {
                            "object" !== typeof window || _ || (document.body.style.cursor = "none")
                        }), [_]);
                        var re = {
                                zIndex: 999,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "fixed",
                                borderRadius: "50%",
                                pointerEvents: "none",
                                transform: "translate(-50%, -50%)",
                                transition: "opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"
                            },
                            ae = {
                                cursorInner: n(n({
                                    width: R.children ? "auto" : R.innerSize,
                                    height: R.children ? "auto" : R.innerSize,
                                    backgroundColor: R.children ? "transparent" : "rgba(".concat(R.color, ", 1)")
                                }, re), R.innerStyle && R.innerStyle),
                                cursorOuter: n(n({
                                    width: R.outerSize,
                                    height: R.outerSize,
                                    backgroundColor: "rgba(".concat(R.color, ", ").concat(R.outerAlpha, ")")
                                }, re), R.outerStyle && R.outerStyle)
                            };
                        return e.jsxs(e.Fragment, {
                            children: [e.jsx("div", {
                                ref: T,
                                style: ae.cursorOuter
                            }), e.jsx("div", n({
                                ref: N,
                                style: ae.cursorInner
                            }, {
                                children: e.jsx("div", n({
                                    style: {
                                        opacity: R.children ? 1 : 0,
                                        transition: "opacity 0.3s ease-in-out"
                                    }
                                }, {
                                    children: R.children
                                }))
                            }))]
                        })
                    }

                    function s(t) {
                        var r = t.children,
                            i = t.clickables,
                            s = t.color,
                            o = t.innerScale,
                            c = t.innerSize,
                            u = t.innerStyle,
                            d = t.outerAlpha,
                            f = t.outerScale,
                            p = t.outerSize,
                            m = t.outerStyle,
                            h = t.showSystemCursor,
                            v = t.trailingSpeed,
                            g = a();
                        return "undefined" !== typeof navigator && g.any() ? e.jsx(e.Fragment, {}) : e.jsx(l, n({
                            clickables: i,
                            color: s,
                            innerScale: o,
                            innerSize: c,
                            innerStyle: u,
                            outerAlpha: d,
                            outerScale: f,
                            outerSize: p,
                            outerStyle: m,
                            showSystemCursor: h,
                            trailingSpeed: v
                        }, {
                            children: r
                        }))
                    }
                    return s
                }(n(184), n(791))
            },
            463: (e, t, n) => {
                "use strict";
                var r = n(791),
                    a = n(296);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var l = new Set,
                    s = {};

                function o(e, t) {
                    c(e, t), c(e + "Capture", t)
                }

                function c(e, t) {
                    for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e])
                }
                var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = Object.prototype.hasOwnProperty,
                    f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = {},
                    m = {};

                function h(e, t, n, r, a, i, l) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l
                }
                var v = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    v[e] = new h(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    v[t] = new h(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    v[e] = new h(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    v[e] = new h(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    v[e] = new h(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    v[e] = new h(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var g = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function b(e, t, n, r) {
                    var a = v.hasOwnProperty(t) ? v[t] : null;
                    (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                        return !!d.call(m, e) || !d.call(p, e) && (f.test(e) ? m[e] = !0 : (p[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(g, y);
                    v[t] = new h(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(g, y);
                    v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(g, y);
                    v[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), v.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    w = Symbol.for("react.element"),
                    S = Symbol.for("react.portal"),
                    k = Symbol.for("react.fragment"),
                    _ = Symbol.for("react.strict_mode"),
                    E = Symbol.for("react.profiler"),
                    C = Symbol.for("react.provider"),
                    j = Symbol.for("react.context"),
                    T = Symbol.for("react.forward_ref"),
                    N = Symbol.for("react.suspense"),
                    P = Symbol.for("react.suspense_list"),
                    z = Symbol.for("react.memo"),
                    L = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var M = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var O = Symbol.iterator;

                function I(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = O && e[O] || e["@@iterator"]) ? e : null
                }
                var D, A = Object.assign;

                function F(e) {
                    if (void 0 === D) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        D = t && t[1] || ""
                    }
                    return "\n" + D + e
                }
                var R = !1;

                function H(e, t) {
                    if (!e || R) return "";
                    R = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (c) {
                                    var r = c
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (c) {
                                    r = c
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (c) {
                                r = c
                            }
                            e()
                        }
                    } catch (c) {
                        if (c && r && "string" === typeof c.stack) {
                            for (var a = c.stack.split("\n"), i = r.stack.split("\n"), l = a.length - 1, s = i.length - 1; 1 <= l && 0 <= s && a[l] !== i[s];) s--;
                            for (; 1 <= l && 0 <= s; l--, s--)
                                if (a[l] !== i[s]) {
                                    if (1 !== l || 1 !== s)
                                        do {
                                            if (l--, 0 > --s || a[l] !== i[s]) {
                                                var o = "\n" + a[l].replace(" at new ", " at ");
                                                return e.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", e.displayName)), o
                                            }
                                        } while (1 <= l && 0 <= s);
                                    break
                                }
                        }
                    } finally {
                        R = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? F(e) : ""
                }

                function B(e) {
                    switch (e.tag) {
                        case 5:
                            return F(e.type);
                        case 16:
                            return F("Lazy");
                        case 13:
                            return F("Suspense");
                        case 19:
                            return F("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = H(e.type, !1);
                        case 11:
                            return e = H(e.type.render, !1);
                        case 1:
                            return e = H(e.type, !0);
                        default:
                            return ""
                    }
                }

                function V(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case k:
                            return "Fragment";
                        case S:
                            return "Portal";
                        case E:
                            return "Profiler";
                        case _:
                            return "StrictMode";
                        case N:
                            return "Suspense";
                        case P:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case j:
                            return (e.displayName || "Context") + ".Consumer";
                        case C:
                            return (e._context.displayName || "Context") + ".Provider";
                        case T:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case z:
                            return null !== (t = e.displayName || null) ? t : V(e.type) || "Memo";
                        case L:
                            t = e._payload, e = e._init;
                            try {
                                return V(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function G(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return V(t);
                        case 8:
                            return t === _ ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function q(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function U(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function W(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = U(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var a = n.get,
                                i = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, i.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function Y(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = U(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function Q(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function X(e, t) {
                    var n = t.checked;
                    return A({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function J(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = q(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function Z(e, t) {
                    null != (t = t.checked) && b(e, "checked", t, !1)
                }

                function K(e, t) {
                    Z(e, t);
                    var n = q(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, q(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function $(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && Q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return A({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ae(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: q(n)
                    }
                }

                function ie(e, t) {
                    var n = q(t.value),
                        r = q(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function le(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function se(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function oe(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var ce, ue, de = (ue = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ue(e, t)
                    }))
                } : ue);

                function fe(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var pe = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    me = ["Webkit", "ms", "Moz", "O"];

                function he(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
                }

                function ve(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                a = he(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                        }
                }
                Object.keys(pe).forEach((function(e) {
                    me.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                    }))
                }));
                var ge = A({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function ye(e, t) {
                    if (t) {
                        if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                    }
                }

                function be(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var xe = null;

                function we(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Se = null,
                    ke = null,
                    _e = null;

                function Ee(e) {
                    if (e = ba(e)) {
                        if ("function" !== typeof Se) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = wa(t), Se(e.stateNode, e.type, t))
                    }
                }

                function Ce(e) {
                    ke ? _e ? _e.push(e) : _e = [e] : ke = e
                }

                function je() {
                    if (ke) {
                        var e = ke,
                            t = _e;
                        if (_e = ke = null, Ee(e), t)
                            for (e = 0; e < t.length; e++) Ee(t[e])
                    }
                }

                function Te(e, t) {
                    return e(t)
                }

                function Ne() {}
                var Pe = !1;

                function ze(e, t, n) {
                    if (Pe) return e(t, n);
                    Pe = !0;
                    try {
                        return Te(e, t, n)
                    } finally {
                        Pe = !1, (null !== ke || null !== _e) && (Ne(), je())
                    }
                }

                function Le(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = wa(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var Me = !1;
                if (u) try {
                    var Oe = {};
                    Object.defineProperty(Oe, "passive", {
                        get: function() {
                            Me = !0
                        }
                    }), window.addEventListener("test", Oe, Oe), window.removeEventListener("test", Oe, Oe)
                } catch (ue) {
                    Me = !1
                }

                function Ie(e, t, n, r, a, i, l, s, o) {
                    var c = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, c)
                    } catch (u) {
                        this.onError(u)
                    }
                }
                var De = !1,
                    Ae = null,
                    Fe = !1,
                    Re = null,
                    He = {
                        onError: function(e) {
                            De = !0, Ae = e
                        }
                    };

                function Be(e, t, n, r, a, i, l, s, o) {
                    De = !1, Ae = null, Ie.apply(He, arguments)
                }

                function Ve(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function Ge(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function qe(e) {
                    if (Ve(e) !== e) throw Error(i(188))
                }

                function Ue(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Ve(e))) throw Error(i(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var l = a.alternate;
                            if (null === l) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === l.child) {
                                for (l = a.child; l;) {
                                    if (l === n) return qe(a), e;
                                    if (l === r) return qe(a), t;
                                    l = l.sibling
                                }
                                throw Error(i(188))
                            }
                            if (n.return !== r.return) n = a, r = l;
                            else {
                                for (var s = !1, o = a.child; o;) {
                                    if (o === n) {
                                        s = !0, n = a, r = l;
                                        break
                                    }
                                    if (o === r) {
                                        s = !0, r = a, n = l;
                                        break
                                    }
                                    o = o.sibling
                                }
                                if (!s) {
                                    for (o = l.child; o;) {
                                        if (o === n) {
                                            s = !0, n = l, r = a;
                                            break
                                        }
                                        if (o === r) {
                                            s = !0, r = l, n = a;
                                            break
                                        }
                                        o = o.sibling
                                    }
                                    if (!s) throw Error(i(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(i(190))
                        }
                        if (3 !== n.tag) throw Error(i(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? We(e) : null
                }

                function We(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = We(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Ye = a.unstable_scheduleCallback,
                    Qe = a.unstable_cancelCallback,
                    Xe = a.unstable_shouldYield,
                    Je = a.unstable_requestPaint,
                    Ze = a.unstable_now,
                    Ke = a.unstable_getCurrentPriorityLevel,
                    $e = a.unstable_ImmediatePriority,
                    et = a.unstable_UserBlockingPriority,
                    tt = a.unstable_NormalPriority,
                    nt = a.unstable_LowPriority,
                    rt = a.unstable_IdlePriority,
                    at = null,
                    it = null;
                var lt = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (st(e) / ot | 0) | 0
                    },
                    st = Math.log,
                    ot = Math.LN2;
                var ct = 64,
                    ut = 4194304;

                function dt(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function ft(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        i = e.pingedLanes,
                        l = 268435455 & n;
                    if (0 !== l) {
                        var s = l & ~a;
                        0 !== s ? r = dt(s) : 0 !== (i &= l) && (r = dt(i))
                    } else 0 !== (l = n & ~a) ? r = dt(l) : 0 !== i && (r = dt(i));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (i = t & -t) || 16 === a && 0 !== (4194240 & i))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - lt(t)), r |= e[n], t &= ~a;
                    return r
                }

                function pt(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function mt(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function ht() {
                    var e = ct;
                    return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e
                }

                function vt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function gt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - lt(t)] = n
                }

                function yt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - lt(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }
                var bt = 0;

                function xt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var wt, St, kt, _t, Et, Ct = !1,
                    jt = [],
                    Tt = null,
                    Nt = null,
                    Pt = null,
                    zt = new Map,
                    Lt = new Map,
                    Mt = [],
                    Ot = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function It(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Tt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Nt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Pt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            zt.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Lt.delete(t.pointerId)
                    }
                }

                function Dt(e, t, n, r, a, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [a]
                    }, null !== t && (null !== (t = ba(t)) && St(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function At(e) {
                    var t = ya(e.target);
                    if (null !== t) {
                        var n = Ve(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = Ge(n))) return e.blockedOn = t, void Et(e.priority, (function() {
                                    kt(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Ft(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        xe = r, n.target.dispatchEvent(r), xe = null, t.shift()
                    }
                    return !0
                }

                function Rt(e, t, n) {
                    Ft(e) && n.delete(t)
                }

                function Ht() {
                    Ct = !1, null !== Tt && Ft(Tt) && (Tt = null), null !== Nt && Ft(Nt) && (Nt = null), null !== Pt && Ft(Pt) && (Pt = null), zt.forEach(Rt), Lt.forEach(Rt)
                }

                function Bt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Ht)))
                }

                function Vt(e) {
                    function t(t) {
                        return Bt(t, e)
                    }
                    if (0 < jt.length) {
                        Bt(jt[0], e);
                        for (var n = 1; n < jt.length; n++) {
                            var r = jt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Tt && Bt(Tt, e), null !== Nt && Bt(Nt, e), null !== Pt && Bt(Pt, e), zt.forEach(t), Lt.forEach(t), n = 0; n < Mt.length; n++)(r = Mt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn;) At(n), null === n.blockedOn && Mt.shift()
                }
                var Gt = x.ReactCurrentBatchConfig,
                    qt = !0;

                function Ut(e, t, n, r) {
                    var a = bt,
                        i = Gt.transition;
                    Gt.transition = null;
                    try {
                        bt = 1, Yt(e, t, n, r)
                    } finally {
                        bt = a, Gt.transition = i
                    }
                }

                function Wt(e, t, n, r) {
                    var a = bt,
                        i = Gt.transition;
                    Gt.transition = null;
                    try {
                        bt = 4, Yt(e, t, n, r)
                    } finally {
                        bt = a, Gt.transition = i
                    }
                }

                function Yt(e, t, n, r) {
                    if (qt) {
                        var a = Xt(e, t, n, r);
                        if (null === a) qr(e, t, r, Qt, n), It(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return Tt = Dt(Tt, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return Nt = Dt(Nt, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return Pt = Dt(Pt, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var i = a.pointerId;
                                        return zt.set(i, Dt(zt.get(i) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return i = a.pointerId, Lt.set(i, Dt(Lt.get(i) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (It(e, r), 4 & t && -1 < Ot.indexOf(e)) {
                            for (; null !== a;) {
                                var i = ba(a);
                                if (null !== i && wt(i), null === (i = Xt(e, t, n, r)) && qr(e, t, r, Qt, n), i === a) break;
                                a = i
                            }
                            null !== a && r.stopPropagation()
                        } else qr(e, t, r, null, n)
                    }
                }
                var Qt = null;

                function Xt(e, t, n, r) {
                    if (Qt = null, null !== (e = ya(e = we(r))))
                        if (null === (t = Ve(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = Ge(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Qt = e, null
                }

                function Jt(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Ke()) {
                                case $e:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Zt = null,
                    Kt = null,
                    $t = null;

                function en() {
                    if ($t) return $t;
                    var e, t, n = Kt,
                        r = n.length,
                        a = "value" in Zt ? Zt.value : Zt.textContent,
                        i = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var l = r - e;
                    for (t = 1; t <= l && n[r - t] === a[i - t]; t++);
                    return $t = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function an(e) {
                    function t(t, n, r, a, i) {
                        for (var l in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(l) && (t = e[l], this[l] = t ? t(a) : a[l]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return A(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var ln, sn, on, cn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    un = an(cn),
                    dn = A({}, cn, {
                        view: 0,
                        detail: 0
                    }),
                    fn = an(dn),
                    pn = A({}, dn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: En,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== on && (on && "mousemove" === e.type ? (ln = e.screenX - on.screenX, sn = e.screenY - on.screenY) : sn = ln = 0, on = e), ln)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : sn
                        }
                    }),
                    mn = an(pn),
                    hn = an(A({}, pn, {
                        dataTransfer: 0
                    })),
                    vn = an(A({}, dn, {
                        relatedTarget: 0
                    })),
                    gn = an(A({}, cn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    yn = A({}, cn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    bn = an(yn),
                    xn = an(A({}, cn, {
                        data: 0
                    })),
                    wn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    Sn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    kn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function _n(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
                }

                function En() {
                    return _n
                }
                var Cn = A({}, dn, {
                        key: function(e) {
                            if (e.key) {
                                var t = wn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: En,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    jn = an(Cn),
                    Tn = an(A({}, pn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Nn = an(A({}, dn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: En
                    })),
                    Pn = an(A({}, cn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    zn = A({}, pn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Ln = an(zn),
                    Mn = [9, 13, 27, 32],
                    On = u && "CompositionEvent" in window,
                    In = null;
                u && "documentMode" in document && (In = document.documentMode);
                var Dn = u && "TextEvent" in window && !In,
                    An = u && (!On || In && 8 < In && 11 >= In),
                    Fn = String.fromCharCode(32),
                    Rn = !1;

                function Hn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Mn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Bn(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Vn = !1;
                var Gn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function qn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Gn[e.type] : "textarea" === t
                }

                function Un(e, t, n, r) {
                    Ce(r), 0 < (t = Wr(t, "onChange")).length && (n = new un("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Wn = null,
                    Yn = null;

                function Qn(e) {
                    Fr(e, 0)
                }

                function Xn(e) {
                    if (Y(xa(e))) return e
                }

                function Jn(e, t) {
                    if ("change" === e) return t
                }
                var Zn = !1;
                if (u) {
                    var Kn;
                    if (u) {
                        var $n = "oninput" in document;
                        if (!$n) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), $n = "function" === typeof er.oninput
                        }
                        Kn = $n
                    } else Kn = !1;
                    Zn = Kn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Wn && (Wn.detachEvent("onpropertychange", nr), Yn = Wn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Xn(Yn)) {
                        var t = [];
                        Un(t, Yn, e, we(e)), ze(Qn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), Yn = n, (Wn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function ar(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xn(Yn)
                }

                function ir(e, t) {
                    if ("click" === e) return Xn(t)
                }

                function lr(e, t) {
                    if ("input" === e || "change" === e) return Xn(t)
                }
                var sr = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function or(e, t) {
                    if (sr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!d.call(t, a) || !sr(e[a], t[a])) return !1
                    }
                    return !0
                }

                function cr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function ur(e, t) {
                    var n, r = cr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = cr(r)
                    }
                }

                function dr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function fr() {
                    for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = Q((e = t.contentWindow).document)
                    }
                    return t
                }

                function pr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function mr(e) {
                    var t = fr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && pr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = n.textContent.length,
                                i = Math.min(r.start, a);
                            r = void 0 === r.end ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = ur(n, i);
                            var l = ur(n, r);
                            a && l && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var hr = u && "documentMode" in document && 11 >= document.documentMode,
                    vr = null,
                    gr = null,
                    yr = null,
                    br = !1;

                function xr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br || null == vr || vr !== Q(r) || ("selectionStart" in (r = vr) && pr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, yr && or(yr, r) || (yr = r, 0 < (r = Wr(gr, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = vr)))
                }

                function wr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Sr = {
                        animationend: wr("Animation", "AnimationEnd"),
                        animationiteration: wr("Animation", "AnimationIteration"),
                        animationstart: wr("Animation", "AnimationStart"),
                        transitionend: wr("Transition", "TransitionEnd")
                    },
                    kr = {},
                    _r = {};

                function Er(e) {
                    if (kr[e]) return kr[e];
                    if (!Sr[e]) return e;
                    var t, n = Sr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in _r) return kr[e] = n[t];
                    return e
                }
                u && (_r = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
                var Cr = Er("animationend"),
                    jr = Er("animationiteration"),
                    Tr = Er("animationstart"),
                    Nr = Er("transitionend"),
                    Pr = new Map,
                    zr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Lr(e, t) {
                    Pr.set(e, t), o(t, [e])
                }
                for (var Mr = 0; Mr < zr.length; Mr++) {
                    var Or = zr[Mr];
                    Lr(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)))
                }
                Lr(Cr, "onAnimationEnd"), Lr(jr, "onAnimationIteration"), Lr(Tr, "onAnimationStart"), Lr("dblclick", "onDoubleClick"), Lr("focusin", "onFocus"), Lr("focusout", "onBlur"), Lr(Nr, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), o("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Dr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));

                function Ar(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, a, l, s, o, c) {
                            if (Be.apply(this, arguments), De) {
                                if (!De) throw Error(i(198));
                                var u = Ae;
                                De = !1, Ae = null, Fe || (Fe = !0, Re = u)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Fr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var l = r.length - 1; 0 <= l; l--) {
                                    var s = r[l],
                                        o = s.instance,
                                        c = s.currentTarget;
                                    if (s = s.listener, o !== i && a.isPropagationStopped()) break e;
                                    Ar(a, s, c), i = o
                                } else
                                    for (l = 0; l < r.length; l++) {
                                        if (o = (s = r[l]).instance, c = s.currentTarget, s = s.listener, o !== i && a.isPropagationStopped()) break e;
                                        Ar(a, s, c), i = o
                                    }
                        }
                    }
                    if (Fe) throw e = Re, Fe = !1, Re = null, e
                }

                function Rr(e, t) {
                    var n = t[ha];
                    void 0 === n && (n = t[ha] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Gr(t, e, 2, !1), n.add(r))
                }

                function Hr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Gr(n, e, r, t)
                }
                var Br = "_reactListening" + Math.random().toString(36).slice(2);

                function Vr(e) {
                    if (!e[Br]) {
                        e[Br] = !0, l.forEach((function(t) {
                            "selectionchange" !== t && (Dr.has(t) || Hr(t, !1, e), Hr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Br] || (t[Br] = !0, Hr("selectionchange", !1, t))
                    }
                }

                function Gr(e, t, n, r) {
                    switch (Jt(t)) {
                        case 1:
                            var a = Ut;
                            break;
                        case 4:
                            a = Wt;
                            break;
                        default:
                            a = Yt
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Me || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function qr(e, t, n, r, a) {
                    var i = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var l = r.tag;
                        if (3 === l || 4 === l) {
                            var s = r.stateNode.containerInfo;
                            if (s === a || 8 === s.nodeType && s.parentNode === a) break;
                            if (4 === l)
                                for (l = r.return; null !== l;) {
                                    var o = l.tag;
                                    if ((3 === o || 4 === o) && ((o = l.stateNode.containerInfo) === a || 8 === o.nodeType && o.parentNode === a)) return;
                                    l = l.return
                                }
                            for (; null !== s;) {
                                if (null === (l = ya(s))) return;
                                if (5 === (o = l.tag) || 6 === o) {
                                    r = i = l;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                    ze((function() {
                        var r = i,
                            a = we(n),
                            l = [];
                        e: {
                            var s = Pr.get(e);
                            if (void 0 !== s) {
                                var o = un,
                                    c = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        o = jn;
                                        break;
                                    case "focusin":
                                        c = "focus", o = vn;
                                        break;
                                    case "focusout":
                                        c = "blur", o = vn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        o = vn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        o = mn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        o = hn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        o = Nn;
                                        break;
                                    case Cr:
                                    case jr:
                                    case Tr:
                                        o = gn;
                                        break;
                                    case Nr:
                                        o = Pn;
                                        break;
                                    case "scroll":
                                        o = fn;
                                        break;
                                    case "wheel":
                                        o = Ln;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        o = bn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        o = Tn
                                }
                                var u = 0 !== (4 & t),
                                    d = !u && "scroll" === e,
                                    f = u ? null !== s ? s + "Capture" : null : s;
                                u = [];
                                for (var p, m = r; null !== m;) {
                                    var h = (p = m).stateNode;
                                    if (5 === p.tag && null !== h && (p = h, null !== f && (null != (h = Le(m, f)) && u.push(Ur(m, h, p)))), d) break;
                                    m = m.return
                                }
                                0 < u.length && (s = new o(s, c, null, n, a), l.push({
                                    event: s,
                                    listeners: u
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (o = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === xe || !(c = n.relatedTarget || n.fromElement) || !ya(c) && !c[ma]) && (o || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, o ? (o = r, null !== (c = (c = n.relatedTarget || n.toElement) ? ya(c) : null) && (c !== (d = Ve(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (o = null, c = r), o !== c)) {
                                if (u = mn, h = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Tn, h = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == o ? s : xa(o), p = null == c ? s : xa(c), (s = new u(h, m + "leave", o, n, a)).target = d, s.relatedTarget = p, h = null, ya(a) === r && ((u = new u(f, m + "enter", c, n, a)).target = p, u.relatedTarget = d, h = u), d = h, o && c) e: {
                                    for (f = c, m = 0, p = u = o; p; p = Yr(p)) m++;
                                    for (p = 0, h = f; h; h = Yr(h)) p++;
                                    for (; 0 < m - p;) u = Yr(u),
                                    m--;
                                    for (; 0 < p - m;) f = Yr(f),
                                    p--;
                                    for (; m--;) {
                                        if (u === f || null !== f && u === f.alternate) break e;
                                        u = Yr(u), f = Yr(f)
                                    }
                                    u = null
                                }
                                else u = null;
                                null !== o && Qr(l, s, o, u, !1), null !== c && null !== d && Qr(l, d, c, u, !0)
                            }
                            if ("select" === (o = (s = r ? xa(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === o && "file" === s.type) var v = Jn;
                            else if (qn(s))
                                if (Zn) v = lr;
                                else {
                                    v = ar;
                                    var g = rr
                                }
                            else(o = s.nodeName) && "input" === o.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (v = ir);
                            switch (v && (v = v(e, r)) ? Un(l, v, n, a) : (g && g(e, s, r), "focusout" === e && (g = s._wrapperState) && g.controlled && "number" === s.type && ee(s, "number", s.value)), g = r ? xa(r) : window, e) {
                                case "focusin":
                                    (qn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                                    break;
                                case "focusout":
                                    yr = gr = vr = null;
                                    break;
                                case "mousedown":
                                    br = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    br = !1, xr(l, n, a);
                                    break;
                                case "selectionchange":
                                    if (hr) break;
                                case "keydown":
                                case "keyup":
                                    xr(l, n, a)
                            }
                            var y;
                            if (On) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else Vn ? Hn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (An && "ko" !== n.locale && (Vn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Vn && (y = en()) : (Kt = "value" in (Zt = a) ? Zt.value : Zt.textContent, Vn = !0)), 0 < (g = Wr(r, b)).length && (b = new xn(b, e, null, n, a), l.push({
                                event: b,
                                listeners: g
                            }), y ? b.data = y : null !== (y = Bn(n)) && (b.data = y))), (y = Dn ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Bn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Rn = !0, Fn);
                                    case "textInput":
                                        return (e = t.data) === Fn && Rn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Vn) return "compositionend" === e || !On && Hn(e, t) ? (e = en(), $t = Kt = Zt = null, Vn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return An && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Wr(r, "onBeforeInput")).length && (a = new xn("onBeforeInput", "beforeinput", null, n, a), l.push({
                                event: a,
                                listeners: r
                            }), a.data = y))
                        }
                        Fr(l, t)
                    }))
                }

                function Ur(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Wr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            i = a.stateNode;
                        5 === a.tag && null !== i && (a = i, null != (i = Le(e, n)) && r.unshift(Ur(e, i, a)), null != (i = Le(e, t)) && r.push(Ur(e, i, a))), e = e.return
                    }
                    return r
                }

                function Yr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Qr(e, t, n, r, a) {
                    for (var i = t._reactName, l = []; null !== n && n !== r;) {
                        var s = n,
                            o = s.alternate,
                            c = s.stateNode;
                        if (null !== o && o === r) break;
                        5 === s.tag && null !== c && (s = c, a ? null != (o = Le(n, i)) && l.unshift(Ur(n, o, s)) : a || null != (o = Le(n, i)) && l.push(Ur(n, o, s))), n = n.return
                    }
                    0 !== l.length && e.push({
                        event: t,
                        listeners: l
                    })
                }
                var Xr = /\r\n?/g,
                    Jr = /\u0000|\uFFFD/g;

                function Zr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(Xr, "\n").replace(Jr, "")
                }

                function Kr(e, t, n) {
                    if (t = Zr(t), Zr(e) !== t && n) throw Error(i(425))
                }

                function $r() {}
                var ea = null,
                    ta = null;

                function na(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                    aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    ia = "function" === typeof Promise ? Promise : void 0,
                    la = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ia ? function(e) {
                        return ia.resolve(null).then(e).catch(sa)
                    } : ra;

                function sa(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function oa(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if (e.removeChild(n), a && 8 === a.nodeType)
                            if ("/$" === (n = a.data)) {
                                if (0 === r) return e.removeChild(a), void Vt(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = a
                    } while (n);
                    Vt(t)
                }

                function ca(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function ua(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var da = Math.random().toString(36).slice(2),
                    fa = "__reactFiber$" + da,
                    pa = "__reactProps$" + da,
                    ma = "__reactContainer$" + da,
                    ha = "__reactEvents$" + da,
                    va = "__reactListeners$" + da,
                    ga = "__reactHandles$" + da;

                function ya(e) {
                    var t = e[fa];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[ma] || n[fa]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = ua(e); null !== e;) {
                                    if (n = e[fa]) return n;
                                    e = ua(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ba(e) {
                    return !(e = e[fa] || e[ma]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function xa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function wa(e) {
                    return e[pa] || null
                }
                var Sa = [],
                    ka = -1;

                function _a(e) {
                    return {
                        current: e
                    }
                }

                function Ea(e) {
                    0 > ka || (e.current = Sa[ka], Sa[ka] = null, ka--)
                }

                function Ca(e, t) {
                    ka++, Sa[ka] = e.current, e.current = t
                }
                var ja = {},
                    Ta = _a(ja),
                    Na = _a(!1),
                    Pa = ja;

                function za(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return ja;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, i = {};
                    for (a in n) i[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
                }

                function La(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Ma() {
                    Ea(Na), Ea(Ta)
                }

                function Oa(e, t, n) {
                    if (Ta.current !== ja) throw Error(i(168));
                    Ca(Ta, t), Ca(Na, n)
                }

                function Ia(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in t)) throw Error(i(108, G(e) || "Unknown", a));
                    return A({}, n, r)
                }

                function Da(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ja, Pa = Ta.current, Ca(Ta, e), Ca(Na, Na.current), !0
                }

                function Aa(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(i(169));
                    n ? (e = Ia(e, t, Pa), r.__reactInternalMemoizedMergedChildContext = e, Ea(Na), Ea(Ta), Ca(Ta, e)) : Ea(Na), Ca(Na, n)
                }
                var Fa = null,
                    Ra = !1,
                    Ha = !1;

                function Ba(e) {
                    null === Fa ? Fa = [e] : Fa.push(e)
                }

                function Va() {
                    if (!Ha && null !== Fa) {
                        Ha = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Fa;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Fa = null, Ra = !1
                        } catch (a) {
                            throw null !== Fa && (Fa = Fa.slice(e + 1)), Ye($e, Va), a
                        } finally {
                            bt = t, Ha = !1
                        }
                    }
                    return null
                }
                var Ga = [],
                    qa = 0,
                    Ua = null,
                    Wa = 0,
                    Ya = [],
                    Qa = 0,
                    Xa = null,
                    Ja = 1,
                    Za = "";

                function Ka(e, t) {
                    Ga[qa++] = Wa, Ga[qa++] = Ua, Ua = e, Wa = t
                }

                function $a(e, t, n) {
                    Ya[Qa++] = Ja, Ya[Qa++] = Za, Ya[Qa++] = Xa, Xa = e;
                    var r = Ja;
                    e = Za;
                    var a = 32 - lt(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var i = 32 - lt(t) + a;
                    if (30 < i) {
                        var l = a - a % 5;
                        i = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, Ja = 1 << 32 - lt(t) + a | n << a | r, Za = i + e
                    } else Ja = 1 << i | n << a | r, Za = e
                }

                function ei(e) {
                    null !== e.return && (Ka(e, 1), $a(e, 1, 0))
                }

                function ti(e) {
                    for (; e === Ua;) Ua = Ga[--qa], Ga[qa] = null, Wa = Ga[--qa], Ga[qa] = null;
                    for (; e === Xa;) Xa = Ya[--Qa], Ya[Qa] = null, Za = Ya[--Qa], Ya[Qa] = null, Ja = Ya[--Qa], Ya[Qa] = null
                }
                var ni = null,
                    ri = null,
                    ai = !1,
                    ii = null;

                function li(e, t) {
                    var n = Lc(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function si(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ni = e, ri = ca(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ni = e, ri = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xa ? {
                                id: Ja,
                                overflow: Za
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Lc(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ni = e, ri = null, !0);
                        default:
                            return !1
                    }
                }

                function oi(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function ci(e) {
                    if (ai) {
                        var t = ri;
                        if (t) {
                            var n = t;
                            if (!si(e, t)) {
                                if (oi(e)) throw Error(i(418));
                                t = ca(n.nextSibling);
                                var r = ni;
                                t && si(e, t) ? li(r, n) : (e.flags = -4097 & e.flags | 2, ai = !1, ni = e)
                            }
                        } else {
                            if (oi(e)) throw Error(i(418));
                            e.flags = -4097 & e.flags | 2, ai = !1, ni = e
                        }
                    }
                }

                function ui(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    ni = e
                }

                function di(e) {
                    if (e !== ni) return !1;
                    if (!ai) return ui(e), ai = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ri)) {
                        if (oi(e)) throw fi(), Error(i(418));
                        for (; t;) li(e, t), t = ca(t.nextSibling)
                    }
                    if (ui(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            ri = ca(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ri = null
                        }
                    } else ri = ni ? ca(e.stateNode.nextSibling) : null;
                    return !0
                }

                function fi() {
                    for (var e = ri; e;) e = ca(e.nextSibling)
                }

                function pi() {
                    ri = ni = null, ai = !1
                }

                function mi(e) {
                    null === ii ? ii = [e] : ii.push(e)
                }
                var hi = x.ReactCurrentBatchConfig;

                function vi(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = A({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var gi = _a(null),
                    yi = null,
                    bi = null,
                    xi = null;

                function wi() {
                    xi = bi = yi = null
                }

                function Si(e) {
                    var t = gi.current;
                    Ea(gi), e._currentValue = t
                }

                function ki(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function _i(e, t) {
                    yi = e, xi = bi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bs = !0), e.firstContext = null)
                }

                function Ei(e) {
                    var t = e._currentValue;
                    if (xi !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === bi) {
                            if (null === yi) throw Error(i(308));
                            bi = e, yi.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else bi = bi.next = e;
                    return t
                }
                var Ci = null;

                function ji(e) {
                    null === Ci ? Ci = [e] : Ci.push(e)
                }

                function Ti(e, t, n, r) {
                    var a = t.interleaved;
                    return null === a ? (n.next = n, ji(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Ni(e, r)
                }

                function Ni(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Pi = !1;

                function zi(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Li(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Mi(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Oi(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & No)) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Ni(e, n)
                    }
                    return null === (a = r.interleaved) ? (t.next = t, ji(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Ni(e, n)
                }

                function Ii(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }

                function Di(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var l = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === i ? a = i = l : i = i.next = l, n = n.next
                            } while (null !== n);
                            null === i ? a = i = t : i = i.next = t
                        } else a = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Ai(e, t, n, r) {
                    var a = e.updateQueue;
                    Pi = !1;
                    var i = a.firstBaseUpdate,
                        l = a.lastBaseUpdate,
                        s = a.shared.pending;
                    if (null !== s) {
                        a.shared.pending = null;
                        var o = s,
                            c = o.next;
                        o.next = null, null === l ? i = c : l.next = c, l = o;
                        var u = e.alternate;
                        null !== u && ((s = (u = u.updateQueue).lastBaseUpdate) !== l && (null === s ? u.firstBaseUpdate = c : s.next = c, u.lastBaseUpdate = o))
                    }
                    if (null !== i) {
                        var d = a.baseState;
                        for (l = 0, u = c = o = null, s = i;;) {
                            var f = s.lane,
                                p = s.eventTime;
                            if ((r & f) === f) {
                                null !== u && (u = u.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: s.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        h = s;
                                    switch (f = t, p = n, h.tag) {
                                        case 1:
                                            if ("function" === typeof(m = h.payload)) {
                                                d = m.call(p, d, f);
                                                break e
                                            }
                                            d = m;
                                            break e;
                                        case 3:
                                            m.flags = -65537 & m.flags | 128;
                                        case 0:
                                            if (null === (f = "function" === typeof(m = h.payload) ? m.call(p, d, f) : m) || void 0 === f) break e;
                                            d = A({}, d, f);
                                            break e;
                                        case 2:
                                            Pi = !0
                                    }
                                }
                                null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [s] : f.push(s))
                            } else p = {
                                eventTime: p,
                                lane: f,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            }, null === u ? (c = u = p, o = d) : u = u.next = p, l |= f;
                            if (null === (s = s.next)) {
                                if (null === (s = a.shared.pending)) break;
                                s = (f = s).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null
                            }
                        }
                        if (null === u && (o = d), a.baseState = o, a.firstBaseUpdate = c, a.lastBaseUpdate = u, null !== (t = a.shared.interleaved)) {
                            a = t;
                            do {
                                l |= a.lane, a = a.next
                            } while (a !== t)
                        } else null === i && (a.shared.lanes = 0);
                        Ao |= l, e.lanes = l, e.memoizedState = d
                    }
                }

                function Fi(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" !== typeof a) throw Error(i(191, a));
                                a.call(r)
                            }
                        }
                }
                var Ri = (new r.Component).refs;

                function Hi(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : A({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var Bi = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ve(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = tc(),
                            a = nc(e),
                            i = Mi(r, a);
                        i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Oi(e, i, a)) && (rc(t, e, a, r), Ii(t, e, a))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = tc(),
                            a = nc(e),
                            i = Mi(r, a);
                        i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Oi(e, i, a)) && (rc(t, e, a, r), Ii(t, e, a))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = tc(),
                            r = nc(e),
                            a = Mi(n, r);
                        a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Oi(e, a, r)) && (rc(t, e, r, n), Ii(t, e, r))
                    }
                };

                function Vi(e, t, n, r, a, i, l) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, l) : !t.prototype || !t.prototype.isPureReactComponent || (!or(n, r) || !or(a, i))
                }

                function Gi(e, t, n) {
                    var r = !1,
                        a = ja,
                        i = t.contextType;
                    return "object" === typeof i && null !== i ? i = Ei(i) : (a = La(t) ? Pa : Ta.current, i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? za(e, a) : ja), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Bi, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t
                }

                function qi(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bi.enqueueReplaceState(t, t.state, null)
                }

                function Ui(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = Ri, zi(e);
                    var i = t.contextType;
                    "object" === typeof i && null !== i ? a.context = Ei(i) : (i = La(t) ? Pa : Ta.current, a.context = za(e, i)), a.state = e.memoizedState, "function" === typeof(i = t.getDerivedStateFromProps) && (Hi(e, t, i, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bi.enqueueReplaceState(a, a.state, null), Ai(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
                }

                function Wi(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(i(147, e));
                            var a = r,
                                l = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === l ? t.ref : (t = function(e) {
                                var t = a.refs;
                                t === Ri && (t = a.refs = {}), null === e ? delete t[l] : t[l] = e
                            }, t._stringRef = l, t)
                        }
                        if ("string" !== typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function Yi(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function Qi(e) {
                    return (0, e._init)(e._payload)
                }

                function Xi(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = Oc(e, t)).index = 0, e.sibling = null, e
                    }

                    function l(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function s(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function o(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Fc(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function c(e, t, n, r) {
                        var i = n.type;
                        return i === k ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === L && Qi(i) === t.type) ? ((r = a(t, n.props)).ref = Wi(e, t, n), r.return = e, r) : ((r = Ic(n.type, n.key, n.props, null, e.mode, r)).ref = Wi(e, t, n), r.return = e, r)
                    }

                    function u(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Rc(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = Dc(n, e.mode, r, i)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Fc("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case w:
                                    return (n = Ic(t.type, t.key, t.props, null, e.mode, n)).ref = Wi(e, null, t), n.return = e, n;
                                case S:
                                    return (t = Rc(t, e.mode, n)).return = e, t;
                                case L:
                                    return f(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || I(t)) return (t = Dc(t, e.mode, n, null)).return = e, t;
                            Yi(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : o(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case w:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case S:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case L:
                                    return p(e, t, (a = n._init)(n._payload), r)
                            }
                            if (te(n) || I(n)) return null !== a ? null : d(e, t, n, r, null);
                            Yi(e, n)
                        }
                        return null
                    }

                    function m(e, t, n, r, a) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return o(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case w:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case S:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case L:
                                    return m(e, t, n, (0, r._init)(r._payload), a)
                            }
                            if (te(r) || I(r)) return d(t, e = e.get(n) || null, r, a, null);
                            Yi(t, r)
                        }
                        return null
                    }

                    function h(a, i, s, o) {
                        for (var c = null, u = null, d = i, h = i = 0, v = null; null !== d && h < s.length; h++) {
                            d.index > h ? (v = d, d = null) : v = d.sibling;
                            var g = p(a, d, s[h], o);
                            if (null === g) {
                                null === d && (d = v);
                                break
                            }
                            e && d && null === g.alternate && t(a, d), i = l(g, i, h), null === u ? c = g : u.sibling = g, u = g, d = v
                        }
                        if (h === s.length) return n(a, d), ai && Ka(a, h), c;
                        if (null === d) {
                            for (; h < s.length; h++) null !== (d = f(a, s[h], o)) && (i = l(d, i, h), null === u ? c = d : u.sibling = d, u = d);
                            return ai && Ka(a, h), c
                        }
                        for (d = r(a, d); h < s.length; h++) null !== (v = m(d, a, h, s[h], o)) && (e && null !== v.alternate && d.delete(null === v.key ? h : v.key), i = l(v, i, h), null === u ? c = v : u.sibling = v, u = v);
                        return e && d.forEach((function(e) {
                            return t(a, e)
                        })), ai && Ka(a, h), c
                    }

                    function v(a, s, o, c) {
                        var u = I(o);
                        if ("function" !== typeof u) throw Error(i(150));
                        if (null == (o = u.call(o))) throw Error(i(151));
                        for (var d = u = null, h = s, v = s = 0, g = null, y = o.next(); null !== h && !y.done; v++, y = o.next()) {
                            h.index > v ? (g = h, h = null) : g = h.sibling;
                            var b = p(a, h, y.value, c);
                            if (null === b) {
                                null === h && (h = g);
                                break
                            }
                            e && h && null === b.alternate && t(a, h), s = l(b, s, v), null === d ? u = b : d.sibling = b, d = b, h = g
                        }
                        if (y.done) return n(a, h), ai && Ka(a, v), u;
                        if (null === h) {
                            for (; !y.done; v++, y = o.next()) null !== (y = f(a, y.value, c)) && (s = l(y, s, v), null === d ? u = y : d.sibling = y, d = y);
                            return ai && Ka(a, v), u
                        }
                        for (h = r(a, h); !y.done; v++, y = o.next()) null !== (y = m(h, a, v, y.value, c)) && (e && null !== y.alternate && h.delete(null === y.key ? v : y.key), s = l(y, s, v), null === d ? u = y : d.sibling = y, d = y);
                        return e && h.forEach((function(e) {
                            return t(a, e)
                        })), ai && Ka(a, v), u
                    }
                    return function e(r, i, l, o) {
                        if ("object" === typeof l && null !== l && l.type === k && null === l.key && (l = l.props.children), "object" === typeof l && null !== l) {
                            switch (l.$$typeof) {
                                case w:
                                    e: {
                                        for (var c = l.key, u = i; null !== u;) {
                                            if (u.key === c) {
                                                if ((c = l.type) === k) {
                                                    if (7 === u.tag) {
                                                        n(r, u.sibling), (i = a(u, l.props.children)).return = r, r = i;
                                                        break e
                                                    }
                                                } else if (u.elementType === c || "object" === typeof c && null !== c && c.$$typeof === L && Qi(c) === u.type) {
                                                    n(r, u.sibling), (i = a(u, l.props)).ref = Wi(r, u, l), i.return = r, r = i;
                                                    break e
                                                }
                                                n(r, u);
                                                break
                                            }
                                            t(r, u), u = u.sibling
                                        }
                                        l.type === k ? ((i = Dc(l.props.children, r.mode, o, l.key)).return = r, r = i) : ((o = Ic(l.type, l.key, l.props, null, r.mode, o)).ref = Wi(r, i, l), o.return = r, r = o)
                                    }
                                    return s(r);
                                case S:
                                    e: {
                                        for (u = l.key; null !== i;) {
                                            if (i.key === u) {
                                                if (4 === i.tag && i.stateNode.containerInfo === l.containerInfo && i.stateNode.implementation === l.implementation) {
                                                    n(r, i.sibling), (i = a(i, l.children || [])).return = r, r = i;
                                                    break e
                                                }
                                                n(r, i);
                                                break
                                            }
                                            t(r, i), i = i.sibling
                                        }(i = Rc(l, r.mode, o)).return = r,
                                        r = i
                                    }
                                    return s(r);
                                case L:
                                    return e(r, i, (u = l._init)(l._payload), o)
                            }
                            if (te(l)) return h(r, i, l, o);
                            if (I(l)) return v(r, i, l, o);
                            Yi(r, l)
                        }
                        return "string" === typeof l && "" !== l || "number" === typeof l ? (l = "" + l, null !== i && 6 === i.tag ? (n(r, i.sibling), (i = a(i, l)).return = r, r = i) : (n(r, i), (i = Fc(l, r.mode, o)).return = r, r = i), s(r)) : n(r, i)
                    }
                }
                var Ji = Xi(!0),
                    Zi = Xi(!1),
                    Ki = {},
                    $i = _a(Ki),
                    el = _a(Ki),
                    tl = _a(Ki);

                function nl(e) {
                    if (e === Ki) throw Error(i(174));
                    return e
                }

                function rl(e, t) {
                    switch (Ca(tl, t), Ca(el, e), Ca($i, Ki), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : oe(null, "");
                            break;
                        default:
                            t = oe(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    Ea($i), Ca($i, t)
                }

                function al() {
                    Ea($i), Ea(el), Ea(tl)
                }

                function il(e) {
                    nl(tl.current);
                    var t = nl($i.current),
                        n = oe(t, e.type);
                    t !== n && (Ca(el, e), Ca($i, n))
                }

                function ll(e) {
                    el.current === e && (Ea($i), Ea(el))
                }
                var sl = _a(0);

                function ol(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var cl = [];

                function ul() {
                    for (var e = 0; e < cl.length; e++) cl[e]._workInProgressVersionPrimary = null;
                    cl.length = 0
                }
                var dl = x.ReactCurrentDispatcher,
                    fl = x.ReactCurrentBatchConfig,
                    pl = 0,
                    ml = null,
                    hl = null,
                    vl = null,
                    gl = !1,
                    yl = !1,
                    bl = 0,
                    xl = 0;

                function wl() {
                    throw Error(i(321))
                }

                function Sl(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!sr(e[n], t[n])) return !1;
                    return !0
                }

                function kl(e, t, n, r, a, l) {
                    if (pl = l, ml = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, dl.current = null === e || null === e.memoizedState ? ls : ss, e = n(r, a), yl) {
                        l = 0;
                        do {
                            if (yl = !1, bl = 0, 25 <= l) throw Error(i(301));
                            l += 1, vl = hl = null, t.updateQueue = null, dl.current = os, e = n(r, a)
                        } while (yl)
                    }
                    if (dl.current = is, t = null !== hl && null !== hl.next, pl = 0, vl = hl = ml = null, gl = !1, t) throw Error(i(300));
                    return e
                }

                function _l() {
                    var e = 0 !== bl;
                    return bl = 0, e
                }

                function El() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === vl ? ml.memoizedState = vl = e : vl = vl.next = e, vl
                }

                function Cl() {
                    if (null === hl) {
                        var e = ml.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = hl.next;
                    var t = null === vl ? ml.memoizedState : vl.next;
                    if (null !== t) vl = t, hl = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (hl = e).memoizedState,
                            baseState: hl.baseState,
                            baseQueue: hl.baseQueue,
                            queue: hl.queue,
                            next: null
                        }, null === vl ? ml.memoizedState = vl = e : vl = vl.next = e
                    }
                    return vl
                }

                function jl(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function Tl(e) {
                    var t = Cl(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = hl,
                        a = r.baseQueue,
                        l = n.pending;
                    if (null !== l) {
                        if (null !== a) {
                            var s = a.next;
                            a.next = l.next, l.next = s
                        }
                        r.baseQueue = a = l, n.pending = null
                    }
                    if (null !== a) {
                        l = a.next, r = r.baseState;
                        var o = s = null,
                            c = null,
                            u = l;
                        do {
                            var d = u.lane;
                            if ((pl & d) === d) null !== c && (c = c.next = {
                                lane: 0,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                            else {
                                var f = {
                                    lane: d,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === c ? (o = c = f, s = r) : c = c.next = f, ml.lanes |= d, Ao |= d
                            }
                            u = u.next
                        } while (null !== u && u !== l);
                        null === c ? s = r : c.next = o, sr(r, t.memoizedState) || (bs = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = c, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        a = e;
                        do {
                            l = a.lane, ml.lanes |= l, Ao |= l, a = a.next
                        } while (a !== e)
                    } else null === a && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function Nl(e) {
                    var t = Cl(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        l = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var s = a = a.next;
                        do {
                            l = e(l, s.action), s = s.next
                        } while (s !== a);
                        sr(l, t.memoizedState) || (bs = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l
                    }
                    return [l, r]
                }

                function Pl() {}

                function zl(e, t) {
                    var n = ml,
                        r = Cl(),
                        a = t(),
                        l = !sr(r.memoizedState, a);
                    if (l && (r.memoizedState = a, bs = !0), r = r.queue, Gl(Ol.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || null !== vl && 1 & vl.memoizedState.tag) {
                        if (n.flags |= 2048, Fl(9, Ml.bind(null, n, r, a, t), void 0, null), null === Po) throw Error(i(349));
                        0 !== (30 & pl) || Ll(n, t, a)
                    }
                    return a
                }

                function Ll(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = ml.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, ml.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Ml(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Il(t) && Dl(e)
                }

                function Ol(e, t, n) {
                    return n((function() {
                        Il(t) && Dl(e)
                    }))
                }

                function Il(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !sr(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function Dl(e) {
                    var t = Ni(e, 1);
                    null !== t && rc(t, e, 1, -1)
                }

                function Al(e) {
                    var t = El();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: jl,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = ts.bind(null, ml, e), [t.memoizedState, e]
                }

                function Fl(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = ml.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, ml.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Rl() {
                    return Cl().memoizedState
                }

                function Hl(e, t, n, r) {
                    var a = El();
                    ml.flags |= e, a.memoizedState = Fl(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Bl(e, t, n, r) {
                    var a = Cl();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== hl) {
                        var l = hl.memoizedState;
                        if (i = l.destroy, null !== r && Sl(r, l.deps)) return void(a.memoizedState = Fl(t, n, i, r))
                    }
                    ml.flags |= e, a.memoizedState = Fl(1 | t, n, i, r)
                }

                function Vl(e, t) {
                    return Hl(8390656, 8, e, t)
                }

                function Gl(e, t) {
                    return Bl(2048, 8, e, t)
                }

                function ql(e, t) {
                    return Bl(4, 2, e, t)
                }

                function Ul(e, t) {
                    return Bl(4, 4, e, t)
                }

                function Wl(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Yl(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Bl(4, 4, Wl.bind(null, t, e), n)
                }

                function Ql() {}

                function Xl(e, t) {
                    var n = Cl();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && Sl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Jl(e, t) {
                    var n = Cl();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && Sl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Zl(e, t, n) {
                    return 0 === (21 & pl) ? (e.baseState && (e.baseState = !1, bs = !0), e.memoizedState = n) : (sr(n, t) || (n = ht(), ml.lanes |= n, Ao |= n, e.baseState = !0), t)
                }

                function Kl(e, t) {
                    var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = fl.transition;
                    fl.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        bt = n, fl.transition = r
                    }
                }

                function $l() {
                    return Cl().memoizedState
                }

                function es(e, t, n) {
                    var r = nc(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, ns(e)) rs(t, n);
                    else if (null !== (n = Ti(e, t, n, r))) {
                        rc(n, e, r, tc()), as(n, t, r)
                    }
                }

                function ts(e, t, n) {
                    var r = nc(e),
                        a = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (ns(e)) rs(t, a);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var l = t.lastRenderedState,
                                s = i(l, n);
                            if (a.hasEagerState = !0, a.eagerState = s, sr(s, l)) {
                                var o = t.interleaved;
                                return null === o ? (a.next = a, ji(t)) : (a.next = o.next, o.next = a), void(t.interleaved = a)
                            }
                        } catch (c) {}
                        null !== (n = Ti(e, t, a, r)) && (rc(n, e, r, a = tc()), as(n, t, r))
                    }
                }

                function ns(e) {
                    var t = e.alternate;
                    return e === ml || null !== t && t === ml
                }

                function rs(e, t) {
                    yl = gl = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function as(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }
                var is = {
                        readContext: Ei,
                        useCallback: wl,
                        useContext: wl,
                        useEffect: wl,
                        useImperativeHandle: wl,
                        useInsertionEffect: wl,
                        useLayoutEffect: wl,
                        useMemo: wl,
                        useReducer: wl,
                        useRef: wl,
                        useState: wl,
                        useDebugValue: wl,
                        useDeferredValue: wl,
                        useTransition: wl,
                        useMutableSource: wl,
                        useSyncExternalStore: wl,
                        useId: wl,
                        unstable_isNewReconciler: !1
                    },
                    ls = {
                        readContext: Ei,
                        useCallback: function(e, t) {
                            return El().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Ei,
                        useEffect: Vl,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, Hl(4194308, 4, Wl.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Hl(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return Hl(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = El();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = El();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = es.bind(null, ml, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, El().memoizedState = e
                        },
                        useState: Al,
                        useDebugValue: Ql,
                        useDeferredValue: function(e) {
                            return El().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Al(!1),
                                t = e[0];
                            return e = Kl.bind(null, e[1]), El().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = ml,
                                a = El();
                            if (ai) {
                                if (void 0 === n) throw Error(i(407));
                                n = n()
                            } else {
                                if (n = t(), null === Po) throw Error(i(349));
                                0 !== (30 & pl) || Ll(r, t, n)
                            }
                            a.memoizedState = n;
                            var l = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = l, Vl(Ol.bind(null, r, l, e), [e]), r.flags |= 2048, Fl(9, Ml.bind(null, r, l, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = El(),
                                t = Po.identifierPrefix;
                            if (ai) {
                                var n = Za;
                                t = ":" + t + "R" + (n = (Ja & ~(1 << 32 - lt(Ja) - 1)).toString(32) + n), 0 < (n = bl++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = xl++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    ss = {
                        readContext: Ei,
                        useCallback: Xl,
                        useContext: Ei,
                        useEffect: Gl,
                        useImperativeHandle: Yl,
                        useInsertionEffect: ql,
                        useLayoutEffect: Ul,
                        useMemo: Jl,
                        useReducer: Tl,
                        useRef: Rl,
                        useState: function() {
                            return Tl(jl)
                        },
                        useDebugValue: Ql,
                        useDeferredValue: function(e) {
                            return Zl(Cl(), hl.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Tl(jl)[0], Cl().memoizedState]
                        },
                        useMutableSource: Pl,
                        useSyncExternalStore: zl,
                        useId: $l,
                        unstable_isNewReconciler: !1
                    },
                    os = {
                        readContext: Ei,
                        useCallback: Xl,
                        useContext: Ei,
                        useEffect: Gl,
                        useImperativeHandle: Yl,
                        useInsertionEffect: ql,
                        useLayoutEffect: Ul,
                        useMemo: Jl,
                        useReducer: Nl,
                        useRef: Rl,
                        useState: function() {
                            return Nl(jl)
                        },
                        useDebugValue: Ql,
                        useDeferredValue: function(e) {
                            var t = Cl();
                            return null === hl ? t.memoizedState = e : Zl(t, hl.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Nl(jl)[0], Cl().memoizedState]
                        },
                        useMutableSource: Pl,
                        useSyncExternalStore: zl,
                        useId: $l,
                        unstable_isNewReconciler: !1
                    };

                function cs(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += B(r), r = r.return
                        } while (r);
                        var a = n
                    } catch (i) {
                        a = "\nError generating stack: " + i.message + "\n" + i.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a,
                        digest: null
                    }
                }

                function us(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function ds(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                var fs = "function" === typeof WeakMap ? WeakMap : Map;

                function ps(e, t, n) {
                    (n = Mi(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Uo || (Uo = !0, Wo = r), ds(0, t)
                    }, n
                }

                function ms(e, t, n) {
                    (n = Mi(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = t.value;
                        n.payload = function() {
                            return r(a)
                        }, n.callback = function() {
                            ds(0, t)
                        }
                    }
                    var i = e.stateNode;
                    return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                        ds(0, t), "function" !== typeof r && (null === Yo ? Yo = new Set([this]) : Yo.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function hs(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new fs;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (a.add(n), e = Cc.bind(null, e, t, n), t.then(e, e))
                }

                function vs(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function gs(e, t, n, r, a) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Mi(-1, 1)).tag = 2, Oi(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
                }
                var ys = x.ReactCurrentOwner,
                    bs = !1;

                function xs(e, t, n, r) {
                    t.child = null === e ? Zi(t, null, n, r) : Ji(t, e.child, n, r)
                }

                function ws(e, t, n, r, a) {
                    n = n.render;
                    var i = t.ref;
                    return _i(t, a), r = kl(e, t, n, r, i, a), n = _l(), null === e || bs ? (ai && n && ei(t), t.flags |= 1, xs(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qs(e, t, a))
                }

                function Ss(e, t, n, r, a) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Mc(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ic(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, ks(e, t, i, r, a))
                    }
                    if (i = e.child, 0 === (e.lanes & a)) {
                        var l = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : or)(l, r) && e.ref === t.ref) return qs(e, t, a)
                    }
                    return t.flags |= 1, (e = Oc(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function ks(e, t, n, r, a) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (or(i, r) && e.ref === t.ref) {
                            if (bs = !1, t.pendingProps = r = i, 0 === (e.lanes & a)) return t.lanes = e.lanes, qs(e, t, a);
                            0 !== (131072 & e.flags) && (bs = !0)
                        }
                    }
                    return Cs(e, t, n, r, a)
                }

                function _s(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, Ca(Oo, Mo), Mo |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, Ca(Oo, Mo), Mo |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== i ? i.baseLanes : n, Ca(Oo, Mo), Mo |= r
                        }
                    else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ca(Oo, Mo), Mo |= r;
                    return xs(e, t, a, n), t.child
                }

                function Es(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function Cs(e, t, n, r, a) {
                    var i = La(n) ? Pa : Ta.current;
                    return i = za(t, i), _i(t, a), n = kl(e, t, n, r, i, a), r = _l(), null === e || bs ? (ai && r && ei(t), t.flags |= 1, xs(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qs(e, t, a))
                }

                function js(e, t, n, r, a) {
                    if (La(n)) {
                        var i = !0;
                        Da(t)
                    } else i = !1;
                    if (_i(t, a), null === t.stateNode) Gs(e, t), Gi(t, n, r), Ui(t, n, r, a), r = !0;
                    else if (null === e) {
                        var l = t.stateNode,
                            s = t.memoizedProps;
                        l.props = s;
                        var o = l.context,
                            c = n.contextType;
                        "object" === typeof c && null !== c ? c = Ei(c) : c = za(t, c = La(n) ? Pa : Ta.current);
                        var u = n.getDerivedStateFromProps,
                            d = "function" === typeof u || "function" === typeof l.getSnapshotBeforeUpdate;
                        d || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (s !== r || o !== c) && qi(t, l, r, c), Pi = !1;
                        var f = t.memoizedState;
                        l.state = f, Ai(t, r, l, a), o = t.memoizedState, s !== r || f !== o || Na.current || Pi ? ("function" === typeof u && (Hi(t, n, u, r), o = t.memoizedState), (s = Pi || Vi(t, n, s, r, f, o, c)) ? (d || "function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount || ("function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" === typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = o), l.props = r, l.state = o, l.context = c, r = s) : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        l = t.stateNode, Li(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : vi(t.type, s), l.props = c, d = t.pendingProps, f = l.context, "object" === typeof(o = n.contextType) && null !== o ? o = Ei(o) : o = za(t, o = La(n) ? Pa : Ta.current);
                        var p = n.getDerivedStateFromProps;
                        (u = "function" === typeof p || "function" === typeof l.getSnapshotBeforeUpdate) || "function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps || (s !== d || f !== o) && qi(t, l, r, o), Pi = !1, f = t.memoizedState, l.state = f, Ai(t, r, l, a);
                        var m = t.memoizedState;
                        s !== d || f !== m || Na.current || Pi ? ("function" === typeof p && (Hi(t, n, p, r), m = t.memoizedState), (c = Pi || Vi(t, n, c, r, f, m, o) || !1) ? (u || "function" !== typeof l.UNSAFE_componentWillUpdate && "function" !== typeof l.componentWillUpdate || ("function" === typeof l.componentWillUpdate && l.componentWillUpdate(r, m, o), "function" === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, m, o)), "function" === typeof l.componentDidUpdate && (t.flags |= 4), "function" === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof l.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = o, r = c) : ("function" !== typeof l.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Ts(e, t, n, r, i, a)
                }

                function Ts(e, t, n, r, a, i) {
                    Es(e, t);
                    var l = 0 !== (128 & t.flags);
                    if (!r && !l) return a && Aa(t, n, !1), qs(e, t, i);
                    r = t.stateNode, ys.current = t;
                    var s = l && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && l ? (t.child = Ji(t, e.child, null, i), t.child = Ji(t, null, s, i)) : xs(e, t, s, i), t.memoizedState = r.state, a && Aa(t, n, !0), t.child
                }

                function Ns(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Oa(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Oa(0, t.context, !1), rl(e, t.containerInfo)
                }

                function Ps(e, t, n, r, a) {
                    return pi(), mi(a), t.flags |= 256, xs(e, t, n, r), t.child
                }
                var zs, Ls, Ms, Os, Is = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function Ds(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function As(e, t, n) {
                    var r, a = t.pendingProps,
                        l = sl.current,
                        s = !1,
                        o = 0 !== (128 & t.flags);
                    if ((r = o) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (l |= 1), Ca(sl, 1 & l), null === e) return ci(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = a.children, e = a.fallback, s ? (a = t.mode, s = t.child, o = {
                        mode: "hidden",
                        children: o
                    }, 0 === (1 & a) && null !== s ? (s.childLanes = 0, s.pendingProps = o) : s = Ac(o, a, 0, null), e = Dc(e, a, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Ds(n), t.memoizedState = Is, e) : Fs(t, o));
                    if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated)) return function(e, t, n, r, a, l, s) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Rs(e, t, s, r = us(Error(i(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, a = t.mode, r = Ac({
                            mode: "visible",
                            children: r.children
                        }, a, 0, null), (l = Dc(l, a, s, null)).flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, 0 !== (1 & t.mode) && Ji(t, e.child, null, s), t.child.memoizedState = Ds(s), t.memoizedState = Is, l);
                        if (0 === (1 & t.mode)) return Rs(e, t, s, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset) var o = r.dgst;
                            return r = o, Rs(e, t, s, r = us(l = Error(i(419)), r, void 0))
                        }
                        if (o = 0 !== (s & e.childLanes), bs || o) {
                            if (null !== (r = Po)) {
                                switch (s & -s) {
                                    case 4:
                                        a = 2;
                                        break;
                                    case 16:
                                        a = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        a = 32;
                                        break;
                                    case 536870912:
                                        a = 268435456;
                                        break;
                                    default:
                                        a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) && a !== l.retryLane && (l.retryLane = a, Ni(e, a), rc(r, e, a, -1))
                            }
                            return vc(), Rs(e, t, s, r = us(Error(i(421))))
                        }
                        return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Tc.bind(null, e), a._reactRetry = t, null) : (e = l.treeContext, ri = ca(a.nextSibling), ni = t, ai = !0, ii = null, null !== e && (Ya[Qa++] = Ja, Ya[Qa++] = Za, Ya[Qa++] = Xa, Ja = e.id, Za = e.overflow, Xa = t), t = Fs(t, r.children), t.flags |= 4096, t)
                    }(e, t, o, a, r, l, n);
                    if (s) {
                        s = a.fallback, o = t.mode, r = (l = e.child).sibling;
                        var c = {
                            mode: "hidden",
                            children: a.children
                        };
                        return 0 === (1 & o) && t.child !== l ? ((a = t.child).childLanes = 0, a.pendingProps = c, t.deletions = null) : (a = Oc(l, c)).subtreeFlags = 14680064 & l.subtreeFlags, null !== r ? s = Oc(r, s) : (s = Dc(s, o, n, null)).flags |= 2, s.return = t, a.return = t, a.sibling = s, t.child = a, a = s, s = t.child, o = null === (o = e.child.memoizedState) ? Ds(n) : {
                            baseLanes: o.baseLanes | n,
                            cachePool: null,
                            transitions: o.transitions
                        }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Is, a
                    }
                    return e = (s = e.child).sibling, a = Oc(s, {
                        mode: "visible",
                        children: a.children
                    }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
                }

                function Fs(e, t) {
                    return (t = Ac({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Rs(e, t, n, r) {
                    return null !== r && mi(r), Ji(t, e.child, null, n), (e = Fs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Hs(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), ki(e.return, t, n)
                }

                function Bs(e, t, n, r, a) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a)
                }

                function Vs(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        i = r.tail;
                    if (xs(e, t, r.children, n), 0 !== (2 & (r = sl.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Hs(e, n, t);
                            else if (19 === e.tag) Hs(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (Ca(sl, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === ol(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bs(t, !1, a, n, i);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === ol(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            Bs(t, !0, n, null, i);
                            break;
                        case "together":
                            Bs(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Gs(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function qs(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Ao |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Oc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Oc(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Us(e, t) {
                    if (!ai) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Ws(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Ys(e, t, n) {
                    var r = t.pendingProps;
                    switch (ti(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Ws(t), null;
                        case 1:
                        case 17:
                            return La(t.type) && Ma(), Ws(t), null;
                        case 3:
                            return r = t.stateNode, al(), Ea(Na), Ea(Ta), ul(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (di(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ii && (sc(ii), ii = null))), Ls(e, t), Ws(t), null;
                        case 5:
                            ll(t);
                            var a = nl(tl.current);
                            if (n = t.type, null !== e && null != t.stateNode) Ms(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return Ws(t), null
                                }
                                if (e = nl($i.current), di(t)) {
                                    r = t.stateNode, n = t.type;
                                    var l = t.memoizedProps;
                                    switch (r[fa] = t, r[pa] = l, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Rr("cancel", r), Rr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Rr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Ir.length; a++) Rr(Ir[a], r);
                                            break;
                                        case "source":
                                            Rr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Rr("error", r), Rr("load", r);
                                            break;
                                        case "details":
                                            Rr("toggle", r);
                                            break;
                                        case "input":
                                            J(r, l), Rr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!l.multiple
                                            }, Rr("invalid", r);
                                            break;
                                        case "textarea":
                                            ae(r, l), Rr("invalid", r)
                                    }
                                    for (var o in ye(n, l), a = null, l)
                                        if (l.hasOwnProperty(o)) {
                                            var c = l[o];
                                            "children" === o ? "string" === typeof c ? r.textContent !== c && (!0 !== l.suppressHydrationWarning && Kr(r.textContent, c, e), a = ["children", c]) : "number" === typeof c && r.textContent !== "" + c && (!0 !== l.suppressHydrationWarning && Kr(r.textContent, c, e), a = ["children", "" + c]) : s.hasOwnProperty(o) && null != c && "onScroll" === o && Rr("scroll", r)
                                        } switch (n) {
                                        case "input":
                                            W(r), $(r, l, !0);
                                            break;
                                        case "textarea":
                                            W(r), le(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof l.onClick && (r.onclick = $r)
                                    }
                                    r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    o = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = o.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = o.createElement(n, {
                                        is: r.is
                                    }) : (e = o.createElement(n), "select" === n && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[fa] = t, e[pa] = r, zs(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (o = be(n, r), n) {
                                            case "dialog":
                                                Rr("cancel", e), Rr("close", e), a = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Rr("load", e), a = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (a = 0; a < Ir.length; a++) Rr(Ir[a], e);
                                                a = r;
                                                break;
                                            case "source":
                                                Rr("error", e), a = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Rr("error", e), Rr("load", e), a = r;
                                                break;
                                            case "details":
                                                Rr("toggle", e), a = r;
                                                break;
                                            case "input":
                                                J(e, r), a = X(e, r), Rr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                a = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, a = A({}, r, {
                                                    value: void 0
                                                }), Rr("invalid", e);
                                                break;
                                            case "textarea":
                                                ae(e, r), a = re(e, r), Rr("invalid", e)
                                        }
                                        for (l in ye(n, a), c = a)
                                            if (c.hasOwnProperty(l)) {
                                                var u = c[l];
                                                "style" === l ? ve(e, u) : "dangerouslySetInnerHTML" === l ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === l ? "string" === typeof u ? ("textarea" !== n || "" !== u) && fe(e, u) : "number" === typeof u && fe(e, "" + u) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (s.hasOwnProperty(l) ? null != u && "onScroll" === l && Rr("scroll", e) : null != u && b(e, l, u, o))
                                            } switch (n) {
                                            case "input":
                                                W(e), $(e, r, !1);
                                                break;
                                            case "textarea":
                                                W(e), le(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + q(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (l = r.value) ? ne(e, !!r.multiple, l, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof a.onClick && (e.onclick = $r)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Ws(t), null;
                        case 6:
                            if (e && null != t.stateNode) Os(e, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                                if (n = nl(tl.current), nl($i.current), di(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (l = r.nodeValue !== n) && null !== (e = ni)) switch (e.tag) {
                                        case 3:
                                            Kr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Kr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    l && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r
                            }
                            return Ws(t), null;
                        case 13:
                            if (Ea(sl), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ai && null !== ri && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) fi(), pi(), t.flags |= 98560, l = !1;
                                else if (l = di(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!l) throw Error(i(318));
                                        if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(i(317));
                                        l[fa] = t
                                    } else pi(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Ws(t), l = !1
                                } else null !== ii && (sc(ii), ii = null), l = !0;
                                if (!l) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & sl.current) ? 0 === Io && (Io = 3) : vc())), null !== t.updateQueue && (t.flags |= 4), Ws(t), null);
                        case 4:
                            return al(), Ls(e, t), null === e && Vr(t.stateNode.containerInfo), Ws(t), null;
                        case 10:
                            return Si(t.type._context), Ws(t), null;
                        case 19:
                            if (Ea(sl), null === (l = t.memoizedState)) return Ws(t), null;
                            if (r = 0 !== (128 & t.flags), null === (o = l.rendering))
                                if (r) Us(l, !1);
                                else {
                                    if (0 !== Io || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (o = ol(e))) {
                                                for (t.flags |= 128, Us(l, !1), null !== (r = o.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (l = n).flags &= 14680066, null === (o = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = o.childLanes, l.lanes = o.lanes, l.child = o.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = o.memoizedProps, l.memoizedState = o.memoizedState, l.updateQueue = o.updateQueue, l.type = o.type, e = o.dependencies, l.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return Ca(sl, 1 & sl.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== l.tail && Ze() > Go && (t.flags |= 128, r = !0, Us(l, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = ol(o))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Us(l, !0), null === l.tail && "hidden" === l.tailMode && !o.alternate && !ai) return Ws(t), null
                                    } else 2 * Ze() - l.renderingStartTime > Go && 1073741824 !== n && (t.flags |= 128, r = !0, Us(l, !1), t.lanes = 4194304);
                                l.isBackwards ? (o.sibling = t.child, t.child = o) : (null !== (n = l.last) ? n.sibling = o : t.child = o, l.last = o)
                            }
                            return null !== l.tail ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Ze(), t.sibling = null, n = sl.current, Ca(sl, r ? 1 & n | 2 : 1 & n), t) : (Ws(t), null);
                        case 22:
                        case 23:
                            return fc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Mo) && (Ws(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ws(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(i(156, t.tag))
                }

                function Qs(e, t) {
                    switch (ti(t), t.tag) {
                        case 1:
                            return La(t.type) && Ma(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return al(), Ea(Na), Ea(Ta), ul(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return ll(t), null;
                        case 13:
                            if (Ea(sl), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(i(340));
                                pi()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Ea(sl), null;
                        case 4:
                            return al(), null;
                        case 10:
                            return Si(t.type._context), null;
                        case 22:
                        case 23:
                            return fc(), null;
                        default:
                            return null
                    }
                }
                zs = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ls = function() {}, Ms = function(e, t, n, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        e = t.stateNode, nl($i.current);
                        var i, l = null;
                        switch (n) {
                            case "input":
                                a = X(e, a), r = X(e, r), l = [];
                                break;
                            case "select":
                                a = A({}, a, {
                                    value: void 0
                                }), r = A({}, r, {
                                    value: void 0
                                }), l = [];
                                break;
                            case "textarea":
                                a = re(e, a), r = re(e, r), l = [];
                                break;
                            default:
                                "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = $r)
                        }
                        for (u in ye(n, r), n = null, a)
                            if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                                if ("style" === u) {
                                    var o = a[u];
                                    for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (s.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
                        for (u in r) {
                            var c = r[u];
                            if (o = null != a ? a[u] : void 0, r.hasOwnProperty(u) && c !== o && (null != c || null != o))
                                if ("style" === u)
                                    if (o) {
                                        for (i in o) !o.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in c) c.hasOwnProperty(i) && o[i] !== c[i] && (n || (n = {}), n[i] = c[i])
                                    } else n || (l || (l = []), l.push(u, n)), n = c;
                            else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, o = o ? o.__html : void 0, null != c && o !== c && (l = l || []).push(u, c)) : "children" === u ? "string" !== typeof c && "number" !== typeof c || (l = l || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (s.hasOwnProperty(u) ? (null != c && "onScroll" === u && Rr("scroll", e), l || o === c || (l = [])) : (l = l || []).push(u, c))
                        }
                        n && (l = l || []).push("style", n);
                        var u = l;
                        (t.updateQueue = u) && (t.flags |= 4)
                    }
                }, Os = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Xs = !1,
                    Js = !1,
                    Zs = "function" === typeof WeakSet ? WeakSet : Set,
                    Ks = null;

                function $s(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            Ec(e, t, r)
                        } else n.current = null
                }

                function eo(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        Ec(e, t, r)
                    }
                }
                var to = !1;

                function no(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = r = r.next;
                        do {
                            if ((a.tag & e) === e) {
                                var i = a.destroy;
                                a.destroy = void 0, void 0 !== i && eo(t, n, i)
                            }
                            a = a.next
                        } while (a !== r)
                    }
                }

                function ro(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ao(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function io(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, io(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[ha], delete t[va], delete t[ga])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function lo(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function so(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || lo(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function oo(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = $r));
                    else if (4 !== r && null !== (e = e.child))
                        for (oo(e, t, n), e = e.sibling; null !== e;) oo(e, t, n), e = e.sibling
                }

                function co(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (co(e, t, n), e = e.sibling; null !== e;) co(e, t, n), e = e.sibling
                }
                var uo = null,
                    fo = !1;

                function po(e, t, n) {
                    for (n = n.child; null !== n;) mo(e, t, n), n = n.sibling
                }

                function mo(e, t, n) {
                    if (it && "function" === typeof it.onCommitFiberUnmount) try {
                        it.onCommitFiberUnmount(at, n)
                    } catch (s) {}
                    switch (n.tag) {
                        case 5:
                            Js || $s(n, t);
                        case 6:
                            var r = uo,
                                a = fo;
                            uo = null, po(e, t, n), fo = a, null !== (uo = r) && (fo ? (e = uo, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : uo.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== uo && (fo ? (e = uo, n = n.stateNode, 8 === e.nodeType ? oa(e.parentNode, n) : 1 === e.nodeType && oa(e, n), Vt(e)) : oa(uo, n.stateNode));
                            break;
                        case 4:
                            r = uo, a = fo, uo = n.stateNode.containerInfo, fo = !0, po(e, t, n), uo = r, fo = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Js && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                a = r = r.next;
                                do {
                                    var i = a,
                                        l = i.destroy;
                                    i = i.tag, void 0 !== l && (0 !== (2 & i) || 0 !== (4 & i)) && eo(n, t, l), a = a.next
                                } while (a !== r)
                            }
                            po(e, t, n);
                            break;
                        case 1:
                            if (!Js && ($s(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (s) {
                                Ec(n, t, s)
                            }
                            po(e, t, n);
                            break;
                        case 21:
                            po(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Js = (r = Js) || null !== n.memoizedState, po(e, t, n), Js = r) : po(e, t, n);
                            break;
                        default:
                            po(e, t, n)
                    }
                }

                function ho(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Zs), t.forEach((function(t) {
                            var r = Nc.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function vo(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            try {
                                var l = e,
                                    s = t,
                                    o = s;
                                e: for (; null !== o;) {
                                    switch (o.tag) {
                                        case 5:
                                            uo = o.stateNode, fo = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            uo = o.stateNode.containerInfo, fo = !0;
                                            break e
                                    }
                                    o = o.return
                                }
                                if (null === uo) throw Error(i(160));
                                mo(l, s, a), uo = null, fo = !1;
                                var c = a.alternate;
                                null !== c && (c.return = null), a.return = null
                            } catch (u) {
                                Ec(a, t, u)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) go(t, e), t = t.sibling
                }

                function go(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (vo(t, e), yo(e), 4 & r) {
                                try {
                                    no(3, e, e.return), ro(3, e)
                                } catch (v) {
                                    Ec(e, e.return, v)
                                }
                                try {
                                    no(5, e, e.return)
                                } catch (v) {
                                    Ec(e, e.return, v)
                                }
                            }
                            break;
                        case 1:
                            vo(t, e), yo(e), 512 & r && null !== n && $s(n, n.return);
                            break;
                        case 5:
                            if (vo(t, e), yo(e), 512 & r && null !== n && $s(n, n.return), 32 & e.flags) {
                                var a = e.stateNode;
                                try {
                                    fe(a, "")
                                } catch (v) {
                                    Ec(e, e.return, v)
                                }
                            }
                            if (4 & r && null != (a = e.stateNode)) {
                                var l = e.memoizedProps,
                                    s = null !== n ? n.memoizedProps : l,
                                    o = e.type,
                                    c = e.updateQueue;
                                if (e.updateQueue = null, null !== c) try {
                                    "input" === o && "radio" === l.type && null != l.name && Z(a, l), be(o, s);
                                    var u = be(o, l);
                                    for (s = 0; s < c.length; s += 2) {
                                        var d = c[s],
                                            f = c[s + 1];
                                        "style" === d ? ve(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, u)
                                    }
                                    switch (o) {
                                        case "input":
                                            K(a, l);
                                            break;
                                        case "textarea":
                                            ie(a, l);
                                            break;
                                        case "select":
                                            var p = a._wrapperState.wasMultiple;
                                            a._wrapperState.wasMultiple = !!l.multiple;
                                            var m = l.value;
                                            null != m ? ne(a, !!l.multiple, m, !1) : p !== !!l.multiple && (null != l.defaultValue ? ne(a, !!l.multiple, l.defaultValue, !0) : ne(a, !!l.multiple, l.multiple ? [] : "", !1))
                                    }
                                    a[pa] = l
                                } catch (v) {
                                    Ec(e, e.return, v)
                                }
                            }
                            break;
                        case 6:
                            if (vo(t, e), yo(e), 4 & r) {
                                if (null === e.stateNode) throw Error(i(162));
                                a = e.stateNode, l = e.memoizedProps;
                                try {
                                    a.nodeValue = l
                                } catch (v) {
                                    Ec(e, e.return, v)
                                }
                            }
                            break;
                        case 3:
                            if (vo(t, e), yo(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Vt(t.containerInfo)
                            } catch (v) {
                                Ec(e, e.return, v)
                            }
                            break;
                        case 4:
                        default:
                            vo(t, e), yo(e);
                            break;
                        case 13:
                            vo(t, e), yo(e), 8192 & (a = e.child).flags && (l = null !== a.memoizedState, a.stateNode.isHidden = l, !l || null !== a.alternate && null !== a.alternate.memoizedState || (Vo = Ze())), 4 & r && ho(e);
                            break;
                        case 22:
                            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Js = (u = Js) || d, vo(t, e), Js = u) : vo(t, e), yo(e), 8192 & r) {
                                if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                                    for (Ks = e, d = e.child; null !== d;) {
                                        for (f = Ks = d; null !== Ks;) {
                                            switch (m = (p = Ks).child, p.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    no(4, p, p.return);
                                                    break;
                                                case 1:
                                                    $s(p, p.return);
                                                    var h = p.stateNode;
                                                    if ("function" === typeof h.componentWillUnmount) {
                                                        r = p, n = p.return;
                                                        try {
                                                            t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                                        } catch (v) {
                                                            Ec(r, n, v)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    $s(p, p.return);
                                                    break;
                                                case 22:
                                                    if (null !== p.memoizedState) {
                                                        So(f);
                                                        continue
                                                    }
                                            }
                                            null !== m ? (m.return = p, Ks = m) : So(f)
                                        }
                                        d = d.sibling
                                    }
                                e: for (d = null, f = e;;) {
                                    if (5 === f.tag) {
                                        if (null === d) {
                                            d = f;
                                            try {
                                                a = f.stateNode, u ? "function" === typeof(l = a.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none" : (o = f.stateNode, s = void 0 !== (c = f.memoizedProps.style) && null !== c && c.hasOwnProperty("display") ? c.display : null, o.style.display = he("display", s))
                                            } catch (v) {
                                                Ec(e, e.return, v)
                                            }
                                        }
                                    } else if (6 === f.tag) {
                                        if (null === d) try {
                                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                                        } catch (v) {
                                            Ec(e, e.return, v)
                                        }
                                    } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                        f.child.return = f, f = f.child;
                                        continue
                                    }
                                    if (f === e) break e;
                                    for (; null === f.sibling;) {
                                        if (null === f.return || f.return === e) break e;
                                        d === f && (d = null), f = f.return
                                    }
                                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                                }
                            }
                            break;
                        case 19:
                            vo(t, e), yo(e), 4 & r && ho(e);
                        case 21:
                    }
                }

                function yo(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (lo(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(i(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var a = r.stateNode;
                                    32 & r.flags && (fe(a, ""), r.flags &= -33), co(e, so(e), a);
                                    break;
                                case 3:
                                case 4:
                                    var l = r.stateNode.containerInfo;
                                    oo(e, so(e), l);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        }
                        catch (s) {
                            Ec(e, e.return, s)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function bo(e, t, n) {
                    Ks = e, xo(e, t, n)
                }

                function xo(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== Ks;) {
                        var a = Ks,
                            i = a.child;
                        if (22 === a.tag && r) {
                            var l = null !== a.memoizedState || Xs;
                            if (!l) {
                                var s = a.alternate,
                                    o = null !== s && null !== s.memoizedState || Js;
                                s = Xs;
                                var c = Js;
                                if (Xs = l, (Js = o) && !c)
                                    for (Ks = a; null !== Ks;) o = (l = Ks).child, 22 === l.tag && null !== l.memoizedState ? ko(a) : null !== o ? (o.return = l, Ks = o) : ko(a);
                                for (; null !== i;) Ks = i, xo(i, t, n), i = i.sibling;
                                Ks = a, Xs = s, Js = c
                            }
                            wo(e)
                        } else 0 !== (8772 & a.subtreeFlags) && null !== i ? (i.return = a, Ks = i) : wo(e)
                    }
                }

                function wo(e) {
                    for (; null !== Ks;) {
                        var t = Ks;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Js || ro(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Js)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var a = t.elementType === t.type ? n.memoizedProps : vi(t.type, n.memoizedProps);
                                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            } var l = t.updateQueue;
                                        null !== l && Fi(t, l, r);
                                        break;
                                    case 3:
                                        var s = t.updateQueue;
                                        if (null !== s) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Fi(t, s, n)
                                        }
                                        break;
                                    case 5:
                                        var o = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = o;
                                            var c = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    c.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    c.src && (n.src = c.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var u = t.alternate;
                                            if (null !== u) {
                                                var d = u.memoizedState;
                                                if (null !== d) {
                                                    var f = d.dehydrated;
                                                    null !== f && Vt(f)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(i(163))
                                }
                                Js || 512 & t.flags && ao(t)
                            } catch (p) {
                                Ec(t, t.return, p)
                            }
                        }
                        if (t === e) {
                            Ks = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Ks = n;
                            break
                        }
                        Ks = t.return
                    }
                }

                function So(e) {
                    for (; null !== Ks;) {
                        var t = Ks;
                        if (t === e) {
                            Ks = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Ks = n;
                            break
                        }
                        Ks = t.return
                    }
                }

                function ko(e) {
                    for (; null !== Ks;) {
                        var t = Ks;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        ro(4, t)
                                    } catch (o) {
                                        Ec(t, n, o)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var a = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (o) {
                                            Ec(t, a, o)
                                        }
                                    }
                                    var i = t.return;
                                    try {
                                        ao(t)
                                    } catch (o) {
                                        Ec(t, i, o)
                                    }
                                    break;
                                case 5:
                                    var l = t.return;
                                    try {
                                        ao(t)
                                    } catch (o) {
                                        Ec(t, l, o)
                                    }
                            }
                        } catch (o) {
                            Ec(t, t.return, o)
                        }
                        if (t === e) {
                            Ks = null;
                            break
                        }
                        var s = t.sibling;
                        if (null !== s) {
                            s.return = t.return, Ks = s;
                            break
                        }
                        Ks = t.return
                    }
                }
                var _o, Eo = Math.ceil,
                    Co = x.ReactCurrentDispatcher,
                    jo = x.ReactCurrentOwner,
                    To = x.ReactCurrentBatchConfig,
                    No = 0,
                    Po = null,
                    zo = null,
                    Lo = 0,
                    Mo = 0,
                    Oo = _a(0),
                    Io = 0,
                    Do = null,
                    Ao = 0,
                    Fo = 0,
                    Ro = 0,
                    Ho = null,
                    Bo = null,
                    Vo = 0,
                    Go = 1 / 0,
                    qo = null,
                    Uo = !1,
                    Wo = null,
                    Yo = null,
                    Qo = !1,
                    Xo = null,
                    Jo = 0,
                    Zo = 0,
                    Ko = null,
                    $o = -1,
                    ec = 0;

                function tc() {
                    return 0 !== (6 & No) ? Ze() : -1 !== $o ? $o : $o = Ze()
                }

                function nc(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & No) && 0 !== Lo ? Lo & -Lo : null !== hi.transition ? (0 === ec && (ec = ht()), ec) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Jt(e.type)
                }

                function rc(e, t, n, r) {
                    if (50 < Zo) throw Zo = 0, Ko = null, Error(i(185));
                    gt(e, n, r), 0 !== (2 & No) && e === Po || (e === Po && (0 === (2 & No) && (Fo |= n), 4 === Io && oc(e, Lo)), ac(e, r), 1 === n && 0 === No && 0 === (1 & t.mode) && (Go = Ze() + 500, Ra && Va()))
                }

                function ac(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                            var l = 31 - lt(i),
                                s = 1 << l,
                                o = a[l]; - 1 === o ? 0 !== (s & n) && 0 === (s & r) || (a[l] = pt(s, t)) : o <= t && (e.expiredLanes |= s), i &= ~s
                        }
                    }(e, t);
                    var r = ft(e, e === Po ? Lo : 0);
                    if (0 === r) null !== n && Qe(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Qe(n), 1 === t) 0 === e.tag ? function(e) {
                            Ra = !0, Ba(e)
                        }(cc.bind(null, e)) : Ba(cc.bind(null, e)), la((function() {
                            0 === (6 & No) && Va()
                        })), n = null;
                        else {
                            switch (xt(r)) {
                                case 1:
                                    n = $e;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Pc(n, ic.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function ic(e, t) {
                    if ($o = -1, ec = 0, 0 !== (6 & No)) throw Error(i(327));
                    var n = e.callbackNode;
                    if (kc() && e.callbackNode !== n) return null;
                    var r = ft(e, e === Po ? Lo : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
                    else {
                        t = r;
                        var a = No;
                        No |= 2;
                        var l = hc();
                        for (Po === e && Lo === t || (qo = null, Go = Ze() + 500, pc(e, t));;) try {
                            bc();
                            break
                        } catch (o) {
                            mc(e, o)
                        }
                        wi(), Co.current = l, No = a, null !== zo ? t = 0 : (Po = null, Lo = 0, t = Io)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (a = mt(e)) && (r = a, t = lc(e, a))), 1 === t) throw n = Do, pc(e, 0), oc(e, r), ac(e, Ze()), n;
                        if (6 === t) oc(e, r);
                        else {
                            if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var a = n[r],
                                                        i = a.getSnapshot;
                                                    a = a.value;
                                                    try {
                                                        if (!sr(i(), a)) return !1
                                                    } catch (s) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(a) && (2 === (t = gc(e, r)) && (0 !== (l = mt(e)) && (r = l, t = lc(e, l))), 1 === t)) throw n = Do, pc(e, 0), oc(e, r), ac(e, Ze()), n;
                            switch (e.finishedWork = a, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(i(345));
                                case 2:
                                case 5:
                                    Sc(e, Bo, qo);
                                    break;
                                case 3:
                                    if (oc(e, r), (130023424 & r) === r && 10 < (t = Vo + 500 - Ze())) {
                                        if (0 !== ft(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            tc(), e.pingedLanes |= e.suspendedLanes & a;
                                            break
                                        }
                                        e.timeoutHandle = ra(Sc.bind(null, e, Bo, qo), t);
                                        break
                                    }
                                    Sc(e, Bo, qo);
                                    break;
                                case 4:
                                    if (oc(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, a = -1; 0 < r;) {
                                        var s = 31 - lt(r);
                                        l = 1 << s, (s = t[s]) > a && (a = s), r &= ~l
                                    }
                                    if (r = a, 10 < (r = (120 > (r = Ze() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eo(r / 1960)) - r)) {
                                        e.timeoutHandle = ra(Sc.bind(null, e, Bo, qo), r);
                                        break
                                    }
                                    Sc(e, Bo, qo);
                                    break;
                                default:
                                    throw Error(i(329))
                            }
                        }
                    }
                    return ac(e, Ze()), e.callbackNode === n ? ic.bind(null, e) : null
                }

                function lc(e, t) {
                    var n = Ho;
                    return e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256), 2 !== (e = gc(e, t)) && (t = Bo, Bo = n, null !== t && sc(t)), e
                }

                function sc(e) {
                    null === Bo ? Bo = e : Bo.push.apply(Bo, e)
                }

                function oc(e, t) {
                    for (t &= ~Ro, t &= ~Fo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - lt(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function cc(e) {
                    if (0 !== (6 & No)) throw Error(i(327));
                    kc();
                    var t = ft(e, 0);
                    if (0 === (1 & t)) return ac(e, Ze()), null;
                    var n = gc(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = mt(e);
                        0 !== r && (t = r, n = lc(e, r))
                    }
                    if (1 === n) throw n = Do, pc(e, 0), oc(e, t), ac(e, Ze()), n;
                    if (6 === n) throw Error(i(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Sc(e, Bo, qo), ac(e, Ze()), null
                }

                function uc(e, t) {
                    var n = No;
                    No |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (No = n) && (Go = Ze() + 500, Ra && Va())
                    }
                }

                function dc(e) {
                    null !== Xo && 0 === Xo.tag && 0 === (6 & No) && kc();
                    var t = No;
                    No |= 1;
                    var n = To.transition,
                        r = bt;
                    try {
                        if (To.transition = null, bt = 1, e) return e()
                    } finally {
                        bt = r, To.transition = n, 0 === (6 & (No = t)) && Va()
                    }
                }

                function fc() {
                    Mo = Oo.current, Ea(Oo)
                }

                function pc(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== zo)
                        for (n = zo.return; null !== n;) {
                            var r = n;
                            switch (ti(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Ma();
                                    break;
                                case 3:
                                    al(), Ea(Na), Ea(Ta), ul();
                                    break;
                                case 5:
                                    ll(r);
                                    break;
                                case 4:
                                    al();
                                    break;
                                case 13:
                                case 19:
                                    Ea(sl);
                                    break;
                                case 10:
                                    Si(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    fc()
                            }
                            n = n.return
                        }
                    if (Po = e, zo = e = Oc(e.current, null), Lo = Mo = t, Io = 0, Do = null, Ro = Fo = Ao = 0, Bo = Ho = null, null !== Ci) {
                        for (t = 0; t < Ci.length; t++)
                            if (null !== (r = (n = Ci[t]).interleaved)) {
                                n.interleaved = null;
                                var a = r.next,
                                    i = n.pending;
                                if (null !== i) {
                                    var l = i.next;
                                    i.next = a, r.next = l
                                }
                                n.pending = r
                            } Ci = null
                    }
                    return e
                }

                function mc(e, t) {
                    for (;;) {
                        var n = zo;
                        try {
                            if (wi(), dl.current = is, gl) {
                                for (var r = ml.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                gl = !1
                            }
                            if (pl = 0, vl = hl = ml = null, yl = !1, bl = 0, jo.current = null, null === n || null === n.return) {
                                Io = 1, Do = t, zo = null;
                                break
                            }
                            e: {
                                var l = e,
                                    s = n.return,
                                    o = n,
                                    c = t;
                                if (t = Lo, o.flags |= 32768, null !== c && "object" === typeof c && "function" === typeof c.then) {
                                    var u = c,
                                        d = o,
                                        f = d.tag;
                                    if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                        var p = d.alternate;
                                        p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                    }
                                    var m = vs(s);
                                    if (null !== m) {
                                        m.flags &= -257, gs(m, s, o, 0, t), 1 & m.mode && hs(l, u, t), c = u;
                                        var h = (t = m).updateQueue;
                                        if (null === h) {
                                            var v = new Set;
                                            v.add(c), t.updateQueue = v
                                        } else h.add(c);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        hs(l, u, t), vc();
                                        break e
                                    }
                                    c = Error(i(426))
                                } else if (ai && 1 & o.mode) {
                                    var g = vs(s);
                                    if (null !== g) {
                                        0 === (65536 & g.flags) && (g.flags |= 256), gs(g, s, o, 0, t), mi(cs(c, o));
                                        break e
                                    }
                                }
                                l = c = cs(c, o),
                                4 !== Io && (Io = 2),
                                null === Ho ? Ho = [l] : Ho.push(l),
                                l = s;do {
                                    switch (l.tag) {
                                        case 3:
                                            l.flags |= 65536, t &= -t, l.lanes |= t, Di(l, ps(0, c, t));
                                            break e;
                                        case 1:
                                            o = c;
                                            var y = l.type,
                                                b = l.stateNode;
                                            if (0 === (128 & l.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Yo || !Yo.has(b)))) {
                                                l.flags |= 65536, t &= -t, l.lanes |= t, Di(l, ms(l, o, t));
                                                break e
                                            }
                                    }
                                    l = l.return
                                } while (null !== l)
                            }
                            wc(n)
                        } catch (x) {
                            t = x, zo === n && null !== n && (zo = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function hc() {
                    var e = Co.current;
                    return Co.current = is, null === e ? is : e
                }

                function vc() {
                    0 !== Io && 3 !== Io && 2 !== Io || (Io = 4), null === Po || 0 === (268435455 & Ao) && 0 === (268435455 & Fo) || oc(Po, Lo)
                }

                function gc(e, t) {
                    var n = No;
                    No |= 2;
                    var r = hc();
                    for (Po === e && Lo === t || (qo = null, pc(e, t));;) try {
                        yc();
                        break
                    } catch (a) {
                        mc(e, a)
                    }
                    if (wi(), No = n, Co.current = r, null !== zo) throw Error(i(261));
                    return Po = null, Lo = 0, Io
                }

                function yc() {
                    for (; null !== zo;) xc(zo)
                }

                function bc() {
                    for (; null !== zo && !Xe();) xc(zo)
                }

                function xc(e) {
                    var t = _o(e.alternate, e, Mo);
                    e.memoizedProps = e.pendingProps, null === t ? wc(e) : zo = t, jo.current = null
                }

                function wc(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = Ys(n, t, Mo))) return void(zo = n)
                        } else {
                            if (null !== (n = Qs(n, t))) return n.flags &= 32767, void(zo = n);
                            if (null === e) return Io = 6, void(zo = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(zo = t);
                        zo = t = e
                    } while (null !== t);
                    0 === Io && (Io = 5)
                }

                function Sc(e, t, n) {
                    var r = bt,
                        a = To.transition;
                    try {
                        To.transition = null, bt = 1,
                            function(e, t, n, r) {
                                do {
                                    kc()
                                } while (null !== Xo);
                                if (0 !== (6 & No)) throw Error(i(327));
                                n = e.finishedWork;
                                var a = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var l = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var a = 31 - lt(n),
                                                i = 1 << a;
                                            t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i
                                        }
                                    }(e, l), e === Po && (zo = Po = null, Lo = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Qo || (Qo = !0, Pc(tt, (function() {
                                        return kc(), null
                                    }))), l = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || l) {
                                    l = To.transition, To.transition = null;
                                    var s = bt;
                                    bt = 1;
                                    var o = No;
                                    No |= 4, jo.current = null,
                                        function(e, t) {
                                            if (ea = qt, pr(e = fr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var a = r.anchorOffset,
                                                            l = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, l.nodeType
                                                        } catch (w) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var s = 0,
                                                            o = -1,
                                                            c = -1,
                                                            u = 0,
                                                            d = 0,
                                                            f = e,
                                                            p = null;
                                                        t: for (;;) {
                                                            for (var m; f !== n || 0 !== a && 3 !== f.nodeType || (o = s + a), f !== l || 0 !== r && 3 !== f.nodeType || (c = s + r), 3 === f.nodeType && (s += f.nodeValue.length), null !== (m = f.firstChild);) p = f, f = m;
                                                            for (;;) {
                                                                if (f === e) break t;
                                                                if (p === n && ++u === a && (o = s), p === l && ++d === r && (c = s), null !== (m = f.nextSibling)) break;
                                                                p = (f = p).parentNode
                                                            }
                                                            f = m
                                                        }
                                                        n = -1 === o || -1 === c ? null : {
                                                            start: o,
                                                            end: c
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (ta = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, qt = !1, Ks = t; null !== Ks;)
                                                if (e = (t = Ks).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Ks = e;
                                                else
                                                    for (; null !== Ks;) {
                                                        t = Ks;
                                                        try {
                                                            var h = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== h) {
                                                                        var v = h.memoizedProps,
                                                                            g = h.memoizedState,
                                                                            y = t.stateNode,
                                                                            b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vi(t.type, v), g);
                                                                        y.__reactInternalSnapshotBeforeUpdate = b
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var x = t.stateNode.containerInfo;
                                                                    1 === x.nodeType ? x.textContent = "" : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(i(163))
                                                            }
                                                        } catch (w) {
                                                            Ec(t, t.return, w)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Ks = e;
                                                            break
                                                        }
                                                        Ks = t.return
                                                    }
                                            h = to, to = !1
                                        }(e, n), go(n, e), mr(ta), qt = !!ea, ta = ea = null, e.current = n, bo(n, e, a), Je(), No = o, bt = s, To.transition = l
                                } else e.current = n;
                                if (Qo && (Qo = !1, Xo = e, Jo = a), l = e.pendingLanes, 0 === l && (Yo = null), function(e) {
                                        if (it && "function" === typeof it.onCommitFiberRoot) try {
                                            it.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (t) {}
                                    }(n.stateNode), ac(e, Ze()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
                                        componentStack: a.stack,
                                        digest: a.digest
                                    });
                                if (Uo) throw Uo = !1, e = Wo, Wo = null, e;
                                0 !== (1 & Jo) && 0 !== e.tag && kc(), l = e.pendingLanes, 0 !== (1 & l) ? e === Ko ? Zo++ : (Zo = 0, Ko = e) : Zo = 0, Va()
                            }(e, t, n, r)
                    } finally {
                        To.transition = a, bt = r
                    }
                    return null
                }

                function kc() {
                    if (null !== Xo) {
                        var e = xt(Jo),
                            t = To.transition,
                            n = bt;
                        try {
                            if (To.transition = null, bt = 16 > e ? 16 : e, null === Xo) var r = !1;
                            else {
                                if (e = Xo, Xo = null, Jo = 0, 0 !== (6 & No)) throw Error(i(331));
                                var a = No;
                                for (No |= 4, Ks = e.current; null !== Ks;) {
                                    var l = Ks,
                                        s = l.child;
                                    if (0 !== (16 & Ks.flags)) {
                                        var o = l.deletions;
                                        if (null !== o) {
                                            for (var c = 0; c < o.length; c++) {
                                                var u = o[c];
                                                for (Ks = u; null !== Ks;) {
                                                    var d = Ks;
                                                    switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            no(8, d, l)
                                                    }
                                                    var f = d.child;
                                                    if (null !== f) f.return = d, Ks = f;
                                                    else
                                                        for (; null !== Ks;) {
                                                            var p = (d = Ks).sibling,
                                                                m = d.return;
                                                            if (io(d), d === u) {
                                                                Ks = null;
                                                                break
                                                            }
                                                            if (null !== p) {
                                                                p.return = m, Ks = p;
                                                                break
                                                            }
                                                            Ks = m
                                                        }
                                                }
                                            }
                                            var h = l.alternate;
                                            if (null !== h) {
                                                var v = h.child;
                                                if (null !== v) {
                                                    h.child = null;
                                                    do {
                                                        var g = v.sibling;
                                                        v.sibling = null, v = g
                                                    } while (null !== v)
                                                }
                                            }
                                            Ks = l
                                        }
                                    }
                                    if (0 !== (2064 & l.subtreeFlags) && null !== s) s.return = l, Ks = s;
                                    else e: for (; null !== Ks;) {
                                        if (0 !== (2048 & (l = Ks).flags)) switch (l.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                no(9, l, l.return)
                                        }
                                        var y = l.sibling;
                                        if (null !== y) {
                                            y.return = l.return, Ks = y;
                                            break e
                                        }
                                        Ks = l.return
                                    }
                                }
                                var b = e.current;
                                for (Ks = b; null !== Ks;) {
                                    var x = (s = Ks).child;
                                    if (0 !== (2064 & s.subtreeFlags) && null !== x) x.return = s, Ks = x;
                                    else e: for (s = b; null !== Ks;) {
                                        if (0 !== (2048 & (o = Ks).flags)) try {
                                            switch (o.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ro(9, o)
                                            }
                                        } catch (S) {
                                            Ec(o, o.return, S)
                                        }
                                        if (o === s) {
                                            Ks = null;
                                            break e
                                        }
                                        var w = o.sibling;
                                        if (null !== w) {
                                            w.return = o.return, Ks = w;
                                            break e
                                        }
                                        Ks = o.return
                                    }
                                }
                                if (No = a, Va(), it && "function" === typeof it.onPostCommitFiberRoot) try {
                                    it.onPostCommitFiberRoot(at, e)
                                } catch (S) {}
                                r = !0
                            }
                            return r
                        } finally {
                            bt = n, To.transition = t
                        }
                    }
                    return !1
                }

                function _c(e, t, n) {
                    e = Oi(e, t = ps(0, t = cs(n, t), 1), 1), t = tc(), null !== e && (gt(e, 1, t), ac(e, t))
                }

                function Ec(e, t, n) {
                    if (3 === e.tag) _c(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                _c(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Yo || !Yo.has(r))) {
                                    t = Oi(t, e = ms(t, e = cs(n, e), 1), 1), e = tc(), null !== t && (gt(t, 1, e), ac(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Cc(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = tc(), e.pingedLanes |= e.suspendedLanes & n, Po === e && (Lo & n) === n && (4 === Io || 3 === Io && (130023424 & Lo) === Lo && 500 > Ze() - Vo ? pc(e, 0) : Ro |= n), ac(e, t)
                }

                function jc(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ut, 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
                    var n = tc();
                    null !== (e = Ni(e, t)) && (gt(e, t, n), ac(e, n))
                }

                function Tc(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), jc(e, n)
                }

                function Nc(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(i(314))
                    }
                    null !== r && r.delete(t), jc(e, n)
                }

                function Pc(e, t) {
                    return Ye(e, t)
                }

                function zc(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Lc(e, t, n, r) {
                    return new zc(e, t, n, r)
                }

                function Mc(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Oc(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Lc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Ic(e, t, n, r, a, l) {
                    var s = 2;
                    if (r = e, "function" === typeof e) Mc(e) && (s = 1);
                    else if ("string" === typeof e) s = 5;
                    else e: switch (e) {
                        case k:
                            return Dc(n.children, a, l, t);
                        case _:
                            s = 8, a |= 8;
                            break;
                        case E:
                            return (e = Lc(12, n, t, 2 | a)).elementType = E, e.lanes = l, e;
                        case N:
                            return (e = Lc(13, n, t, a)).elementType = N, e.lanes = l, e;
                        case P:
                            return (e = Lc(19, n, t, a)).elementType = P, e.lanes = l, e;
                        case M:
                            return Ac(n, a, l, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case C:
                                    s = 10;
                                    break e;
                                case j:
                                    s = 9;
                                    break e;
                                case T:
                                    s = 11;
                                    break e;
                                case z:
                                    s = 14;
                                    break e;
                                case L:
                                    s = 16, r = null;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Lc(s, n, t, a)).elementType = e, t.type = r, t.lanes = l, t
                }

                function Dc(e, t, n, r) {
                    return (e = Lc(7, e, r, t)).lanes = n, e
                }

                function Ac(e, t, n, r) {
                    return (e = Lc(22, e, r, t)).elementType = M, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Fc(e, t, n) {
                    return (e = Lc(6, e, null, t)).lanes = n, e
                }

                function Rc(e, t, n) {
                    return (t = Lc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Hc(e, t, n, r, a) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
                }

                function Bc(e, t, n, r, a, i, l, s, o) {
                    return e = new Hc(e, t, n, s, o), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Lc(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, zi(i), e
                }

                function Vc(e) {
                    if (!e) return ja;
                    e: {
                        if (Ve(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(i(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (La(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(i(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (La(n)) return Ia(e, n, t)
                    }
                    return t
                }

                function Gc(e, t, n, r, a, i, l, s, o) {
                    return (e = Bc(n, r, !0, e, 0, i, 0, s, o)).context = Vc(null), n = e.current, (i = Mi(r = tc(), a = nc(n))).callback = void 0 !== t && null !== t ? t : null, Oi(n, i, a), e.current.lanes = a, gt(e, a, r), ac(e, r), e
                }

                function qc(e, t, n, r) {
                    var a = t.current,
                        i = tc(),
                        l = nc(a);
                    return n = Vc(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Mi(i, l)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Oi(a, t, l)) && (rc(e, a, l, i), Ii(e, a, l)), l
                }

                function Uc(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Wc(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Yc(e, t) {
                    Wc(e, t), (e = e.alternate) && Wc(e, t)
                }
                _o = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Na.current) bs = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return bs = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Ns(t), pi();
                                            break;
                                        case 5:
                                            il(t);
                                            break;
                                        case 1:
                                            La(t.type) && Da(t);
                                            break;
                                        case 4:
                                            rl(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                a = t.memoizedProps.value;
                                            Ca(gi, r._currentValue), r._currentValue = a;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ca(sl, 1 & sl.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? As(e, t, n) : (Ca(sl, 1 & sl.current), null !== (e = qs(e, t, n)) ? e.sibling : null);
                                            Ca(sl, 1 & sl.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Vs(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ca(sl, sl.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, _s(e, t, n)
                                    }
                                    return qs(e, t, n)
                                }(e, t, n);
                            bs = 0 !== (131072 & e.flags)
                        }
                    else bs = !1, ai && 0 !== (1048576 & t.flags) && $a(t, Wa, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Gs(e, t), e = t.pendingProps;
                            var a = za(t, Ta.current);
                            _i(t, n), a = kl(null, t, r, e, a, n);
                            var l = _l();
                            return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, La(r) ? (l = !0, Da(t)) : l = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, zi(t), a.updater = Bi, t.stateNode = a, a._reactInternals = t, Ui(t, r, e, n), t = Ts(null, t, r, !0, l, n)) : (t.tag = 0, ai && l && ei(t), xs(null, t, a, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Gs(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                        if ("function" === typeof e) return Mc(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === T) return 11;
                                            if (e === z) return 14
                                        }
                                        return 2
                                    }(r), e = vi(r, e), a) {
                                    case 0:
                                        t = Cs(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = js(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = ws(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Ss(null, t, r, vi(r.type, e), n);
                                        break e
                                }
                                throw Error(i(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, Cs(e, t, r, a = t.elementType === r ? a : vi(r, a), n);
                        case 1:
                            return r = t.type, a = t.pendingProps, js(e, t, r, a = t.elementType === r ? a : vi(r, a), n);
                        case 3:
                            e: {
                                if (Ns(t), null === e) throw Error(i(387));r = t.pendingProps,
                                a = (l = t.memoizedState).element,
                                Li(e, t),
                                Ai(t, r, null, n);
                                var s = t.memoizedState;
                                if (r = s.element, l.isDehydrated) {
                                    if (l = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: s.cache,
                                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                            transitions: s.transitions
                                        }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
                                        t = Ps(e, t, r, n, a = cs(Error(i(423)), t));
                                        break e
                                    }
                                    if (r !== a) {
                                        t = Ps(e, t, r, n, a = cs(Error(i(424)), t));
                                        break e
                                    }
                                    for (ri = ca(t.stateNode.containerInfo.firstChild), ni = t, ai = !0, ii = null, n = Zi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (pi(), r === a) {
                                        t = qs(e, t, n);
                                        break e
                                    }
                                    xs(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return il(t), null === e && ci(t), r = t.type, a = t.pendingProps, l = null !== e ? e.memoizedProps : null, s = a.children, na(r, a) ? s = null : null !== l && na(r, l) && (t.flags |= 32), Es(e, t), xs(e, t, s, n), t.child;
                        case 6:
                            return null === e && ci(t), null;
                        case 13:
                            return As(e, t, n);
                        case 4:
                            return rl(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ji(t, null, r, n) : xs(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, ws(e, t, r, a = t.elementType === r ? a : vi(r, a), n);
                        case 7:
                            return xs(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return xs(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, a = t.pendingProps, l = t.memoizedProps, s = a.value, Ca(gi, r._currentValue), r._currentValue = s, null !== l)
                                    if (sr(l.value, s)) {
                                        if (l.children === a.children && !Na.current) {
                                            t = qs(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                            var o = l.dependencies;
                                            if (null !== o) {
                                                s = l.child;
                                                for (var c = o.firstContext; null !== c;) {
                                                    if (c.context === r) {
                                                        if (1 === l.tag) {
                                                            (c = Mi(-1, n & -n)).tag = 2;
                                                            var u = l.updateQueue;
                                                            if (null !== u) {
                                                                var d = (u = u.shared).pending;
                                                                null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
                                                            }
                                                        }
                                                        l.lanes |= n, null !== (c = l.alternate) && (c.lanes |= n), ki(l.return, n, t), o.lanes |= n;
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else if (10 === l.tag) s = l.type === t.type ? null : l.child;
                                            else if (18 === l.tag) {
                                                if (null === (s = l.return)) throw Error(i(341));
                                                s.lanes |= n, null !== (o = s.alternate) && (o.lanes |= n), ki(s, n, t), s = l.sibling
                                            } else s = l.child;
                                            if (null !== s) s.return = l;
                                            else
                                                for (s = l; null !== s;) {
                                                    if (s === t) {
                                                        s = null;
                                                        break
                                                    }
                                                    if (null !== (l = s.sibling)) {
                                                        l.return = s.return, s = l;
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            l = s
                                        }
                                xs(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = t.pendingProps.children, _i(t, n), r = r(a = Ei(a)), t.flags |= 1, xs(e, t, r, n), t.child;
                        case 14:
                            return a = vi(r = t.type, t.pendingProps), Ss(e, t, r, a = vi(r.type, a), n);
                        case 15:
                            return ks(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vi(r, a), Gs(e, t), t.tag = 1, La(r) ? (e = !0, Da(t)) : e = !1, _i(t, n), Gi(t, r, a), Ui(t, r, a, n), Ts(null, t, r, !0, e, n);
                        case 19:
                            return Vs(e, t, n);
                        case 22:
                            return _s(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                };
                var Qc = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function Xc(e) {
                    this._internalRoot = e
                }

                function Jc(e) {
                    this._internalRoot = e
                }

                function Zc(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Kc(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function $c() {}

                function eu(e, t, n, r, a) {
                    var i = n._reactRootContainer;
                    if (i) {
                        var l = i;
                        if ("function" === typeof a) {
                            var s = a;
                            a = function() {
                                var e = Uc(l);
                                s.call(e)
                            }
                        }
                        qc(t, l, e, a)
                    } else l = function(e, t, n, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var i = r;
                                r = function() {
                                    var e = Uc(l);
                                    i.call(e)
                                }
                            }
                            var l = Gc(t, r, e, 0, null, !1, 0, "", $c);
                            return e._reactRootContainer = l, e[ma] = l.current, Vr(8 === e.nodeType ? e.parentNode : e), dc(), l
                        }
                        for (; a = e.lastChild;) e.removeChild(a);
                        if ("function" === typeof r) {
                            var s = r;
                            r = function() {
                                var e = Uc(o);
                                s.call(e)
                            }
                        }
                        var o = Bc(e, 0, !1, null, 0, !1, 0, "", $c);
                        return e._reactRootContainer = o, e[ma] = o.current, Vr(8 === e.nodeType ? e.parentNode : e), dc((function() {
                            qc(t, o, n, r)
                        })), o
                    }(n, t, e, a, r);
                    return Uc(l)
                }
                Jc.prototype.render = Xc.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(i(409));
                    qc(e, t, null, null)
                }, Jc.prototype.unmount = Xc.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        dc((function() {
                            qc(null, e, null, null)
                        })), t[ma] = null
                    }
                }, Jc.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = _t();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Mt.length && 0 !== t && t < Mt[n].priority; n++);
                        Mt.splice(n, 0, e), 0 === n && At(e)
                    }
                }, wt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = dt(t.pendingLanes);
                                0 !== n && (yt(t, 1 | n), ac(t, Ze()), 0 === (6 & No) && (Go = Ze() + 500, Va()))
                            }
                            break;
                        case 13:
                            dc((function() {
                                var t = Ni(e, 1);
                                if (null !== t) {
                                    var n = tc();
                                    rc(t, e, 1, n)
                                }
                            })), Yc(e, 1)
                    }
                }, St = function(e) {
                    if (13 === e.tag) {
                        var t = Ni(e, 134217728);
                        if (null !== t) rc(t, e, 134217728, tc());
                        Yc(e, 134217728)
                    }
                }, kt = function(e) {
                    if (13 === e.tag) {
                        var t = nc(e),
                            n = Ni(e, t);
                        if (null !== n) rc(n, e, t, tc());
                        Yc(e, t)
                    }
                }, _t = function() {
                    return bt
                }, Et = function(e, t) {
                    var n = bt;
                    try {
                        return bt = e, t()
                    } finally {
                        bt = n
                    }
                }, Se = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (K(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = wa(r);
                                        if (!a) throw Error(i(90));
                                        Y(r), K(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ie(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Te = uc, Ne = dc;
                var tu = {
                        usingClientEntryPoint: !1,
                        Events: [ba, xa, wa, Ce, je, uc]
                    },
                    nu = {
                        findFiberByHostInstance: ya,
                        bundleType: 0,
                        version: "18.2.0",
                        rendererPackageName: "react-dom"
                    },
                    ru = {
                        bundleType: nu.bundleType,
                        version: nu.version,
                        rendererPackageName: nu.rendererPackageName,
                        rendererConfig: nu.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: x.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = Ue(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: nu.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!au.isDisabled && au.supportsFiber) try {
                        at = au.inject(ru), it = au
                    } catch (ue) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Zc(t)) throw Error(i(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: S,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Zc(e)) throw Error(i(299));
                    var n = !1,
                        r = "",
                        a = Qc;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Bc(e, 1, !1, null, 0, n, 0, r, a), e[ma] = t.current, Vr(8 === e.nodeType ? e.parentNode : e), new Xc(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(i(188));
                        throw e = Object.keys(e).join(","), Error(i(268, e))
                    }
                    return e = null === (e = Ue(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return dc(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Kc(t)) throw Error(i(200));
                    return eu(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Zc(e)) throw Error(i(405));
                    var r = null != n && n.hydratedSources || null,
                        a = !1,
                        l = "",
                        s = Qc;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (l = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = Gc(t, null, e, 1, null != n ? n : null, a, 0, l, s), e[ma] = t.current, Vr(e), r)
                        for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                    return new Jc(t)
                }, t.render = function(e, t, n) {
                    if (!Kc(t)) throw Error(i(200));
                    return eu(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Kc(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (dc((function() {
                        eu(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[ma] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = uc, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Kc(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return eu(e, t, n, !1, r)
                }, t.version = "18.2.0-next-9e3b772b8-20220608"
            },
            250: (e, t, n) => {
                "use strict";
                var r = n(164);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
            },
            164: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(463)
            },
            48: (e, t, n) => {
                "use strict";
                var r = n(184),
                    a = n(791),
                    i = function() {
                        return i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                            return e
                        }, i.apply(this, arguments)
                    };

                function l(e, t) {
                    var n, r;
                    switch (t.type) {
                        case "TYPE":
                            return i(i({}, e), {
                                speed: t.speed,
                                text: null === (n = t.payload) || void 0 === n ? void 0 : n.substring(0, e.text.length + 1)
                            });
                        case "DELAY":
                            return i(i({}, e), {
                                speed: t.payload
                            });
                        case "DELETE":
                            return i(i({}, e), {
                                speed: t.speed,
                                text: null === (r = t.payload) || void 0 === r ? void 0 : r.substring(0, e.text.length - 1)
                            });
                        case "COUNT":
                            return i(i({}, e), {
                                count: e.count + 1
                            });
                        default:
                            return e
                    }
                }
                var s = function(e) {
                    var t = e.words,
                        n = void 0 === t ? ["Hello World!", "This is", "a simple Typewriter"] : t,
                        r = e.loop,
                        i = void 0 === r ? 1 : r,
                        s = e.typeSpeed,
                        o = void 0 === s ? 80 : s,
                        c = e.deleteSpeed,
                        u = void 0 === c ? 50 : c,
                        d = e.delaySpeed,
                        f = void 0 === d ? 1500 : d,
                        p = e.onLoopDone,
                        m = e.onType,
                        h = e.onDelete,
                        v = e.onDelay,
                        g = a.useReducer(l, {
                            speed: o,
                            text: "",
                            count: 0
                        }),
                        y = g[0],
                        b = y.speed,
                        x = y.text,
                        w = y.count,
                        S = g[1],
                        k = a.useRef(0),
                        _ = a.useRef(!1),
                        E = a.useRef(!1),
                        C = a.useRef(!1),
                        j = a.useRef(!1),
                        T = a.useCallback((function() {
                            var e = w % n.length,
                                t = n[e];
                            E.current ? (S({
                                type: "DELETE",
                                payload: t,
                                speed: u
                            }), "" === x && (E.current = !1, S({
                                type: "COUNT"
                            }))) : (S({
                                type: "TYPE",
                                payload: t,
                                speed: o
                            }), C.current = !0, x === t && (S({
                                type: "DELAY",
                                payload: f
                            }), C.current = !1, j.current = !0, setTimeout((function() {
                                j.current = !1, E.current = !0
                            }), f), i > 0 && (k.current += 1, k.current / n.length === i && (j.current = !1, _.current = !0)))), C.current && m && m(k.current), E.current && h && h(), j.current && v && v()
                        }), [w, f, u, i, o, n, x, m, h, v]);
                    return a.useEffect((function() {
                        var e = setTimeout(T, b);
                        return _.current && clearTimeout(e),
                            function() {
                                return clearTimeout(e)
                            }
                    }), [T, b]), a.useEffect((function() {
                        p && _.current && p()
                    }), [p]), [x, {
                        isType: C.current,
                        isDelay: j.current,
                        isDelete: E.current,
                        isDone: _.current
                    }]
                };
                ! function(e, t) {
                    void 0 === t && (t = {});
                    var n = t.insertAt;
                    if (e && "undefined" != typeof document) {
                        var r = document.head || document.getElementsByTagName("head")[0],
                            a = document.createElement("style");
                        a.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
                    }
                }(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");
                var o = a.memo((function(e) {
                    var t = e.cursorBlinking,
                        n = void 0 === t || t,
                        a = e.cursorStyle,
                        l = void 0 === a ? "|" : a,
                        s = e.cursorColor,
                        o = void 0 === s ? "inherit" : s;
                    return r.jsx("span", i({
                        style: {
                            color: o
                        },
                        className: "".concat("styles-module_blinkingCursor__yugAC", " ").concat(n ? "styles-module_blinking__9VXRT" : "")
                    }, {
                        children: l
                    }))
                }));
                t.CF = o, t.Ku = s
            },
            374: (e, t, n) => {
                "use strict";
                var r = n(791),
                    a = Symbol.for("react.element"),
                    i = Symbol.for("react.fragment"),
                    l = Object.prototype.hasOwnProperty,
                    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    o = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function c(e, t, n) {
                    var r, i = {},
                        c = null,
                        u = null;
                    for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) l.call(t, r) && !o.hasOwnProperty(r) && (i[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: c,
                        ref: u,
                        props: i,
                        _owner: s.current
                    }
                }
                t.Fragment = i, t.jsx = c, t.jsxs = c
            },
            117: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    i = Symbol.for("react.strict_mode"),
                    l = Symbol.for("react.profiler"),
                    s = Symbol.for("react.provider"),
                    o = Symbol.for("react.context"),
                    c = Symbol.for("react.forward_ref"),
                    u = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    p = Symbol.iterator;
                var m = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    h = Object.assign,
                    v = {};

                function g(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || m
                }

                function y() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || m
                }
                g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, g.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, y.prototype = g.prototype;
                var x = b.prototype = new y;
                x.constructor = b, h(x, g.prototype), x.isPureReactComponent = !0;
                var w = Array.isArray,
                    S = Object.prototype.hasOwnProperty,
                    k = {
                        current: null
                    },
                    _ = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function E(e, t, r) {
                    var a, i = {},
                        l = null,
                        s = null;
                    if (null != t)
                        for (a in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (l = "" + t.key), t) S.call(t, a) && !_.hasOwnProperty(a) && (i[a] = t[a]);
                    var o = arguments.length - 2;
                    if (1 === o) i.children = r;
                    else if (1 < o) {
                        for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
                        i.children = c
                    }
                    if (e && e.defaultProps)
                        for (a in o = e.defaultProps) void 0 === i[a] && (i[a] = o[a]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: l,
                        ref: s,
                        props: i,
                        _owner: k.current
                    }
                }

                function C(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var j = /\/+/g;

                function T(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function N(e, t, a, i, l) {
                    var s = typeof e;
                    "undefined" !== s && "boolean" !== s || (e = null);
                    var o = !1;
                    if (null === e) o = !0;
                    else switch (s) {
                        case "string":
                        case "number":
                            o = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    o = !0
                            }
                    }
                    if (o) return l = l(o = e), e = "" === i ? "." + T(o, 0) : i, w(l) ? (a = "", null != e && (a = e.replace(j, "$&/") + "/"), N(l, t, a, "", (function(e) {
                        return e
                    }))) : null != l && (C(l) && (l = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(l, a + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(j, "$&/") + "/") + e)), t.push(l)), 1;
                    if (o = 0, i = "" === i ? "." : i + ":", w(e))
                        for (var c = 0; c < e.length; c++) {
                            var u = i + T(s = e[c], c);
                            o += N(s, t, a, u, l)
                        } else if (u = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof u)
                            for (e = u.call(e), c = 0; !(s = e.next()).done;) o += N(s = s.value, t, a, u = i + T(s, c++), l);
                        else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return o
                }

                function P(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return N(e, r, "", "", (function(e) {
                        return t.call(n, e, a++)
                    })), r
                }

                function z(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var L = {
                        current: null
                    },
                    M = {
                        transition: null
                    },
                    O = {
                        ReactCurrentDispatcher: L,
                        ReactCurrentBatchConfig: M,
                        ReactCurrentOwner: k
                    };
                t.Children = {
                    map: P,
                    forEach: function(e, t, n) {
                        P(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return P(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return P(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = g, t.Fragment = a, t.Profiler = l, t.PureComponent = b, t.StrictMode = i, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function(e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var a = h({}, e.props),
                        i = e.key,
                        l = e.ref,
                        s = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (l = t.ref, s = k.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
                        for (c in t) S.call(t, c) && !_.hasOwnProperty(c) && (a[c] = void 0 === t[c] && void 0 !== o ? o[c] : t[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) a.children = r;
                    else if (1 < c) {
                        o = Array(c);
                        for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
                        a.children = o
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: i,
                        ref: l,
                        props: a,
                        _owner: s
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: o,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: s,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = E, t.createFactory = function(e) {
                    var t = E.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: c,
                        render: e
                    }
                }, t.isValidElement = C, t.lazy = function(e) {
                    return {
                        $$typeof: f,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: z
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = M.transition;
                    M.transition = {};
                    try {
                        e()
                    } finally {
                        M.transition = t
                    }
                }, t.unstable_act = function() {
                    throw Error("act(...) is not supported in production builds of React.")
                }, t.useCallback = function(e, t) {
                    return L.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return L.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return L.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return L.current.useEffect(e, t)
                }, t.useId = function() {
                    return L.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return L.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return L.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return L.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return L.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return L.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return L.current.useRef(e)
                }, t.useState = function(e) {
                    return L.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return L.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return L.current.useTransition()
                }, t.version = "18.2.0"
            },
            791: (e, t, n) => {
                "use strict";
                e.exports = n(117)
            },
            184: (e, t, n) => {
                "use strict";
                e.exports = n(374)
            },
            813: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < i(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, l = a >>> 1; r < l;) {
                            var s = 2 * (r + 1) - 1,
                                o = e[s],
                                c = s + 1,
                                u = e[c];
                            if (0 > i(o, n)) c < a && 0 > i(u, o) ? (e[r] = u, e[c] = n, r = c) : (e[r] = o, e[s] = n, r = s);
                            else {
                                if (!(c < a && 0 > i(u, n))) break e;
                                e[r] = u, e[c] = n, r = c
                            }
                        }
                    }
                    return t
                }

                function i(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var l = performance;
                    t.unstable_now = function() {
                        return l.now()
                    }
                } else {
                    var s = Date,
                        o = s.now();
                    t.unstable_now = function() {
                        return s.now() - o
                    }
                }
                var c = [],
                    u = [],
                    d = 1,
                    f = null,
                    p = 3,
                    m = !1,
                    h = !1,
                    v = !1,
                    g = "function" === typeof setTimeout ? setTimeout : null,
                    y = "function" === typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" !== typeof setImmediate ? setImmediate : null;

                function x(e) {
                    for (var t = r(u); null !== t;) {
                        if (null === t.callback) a(u);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(u), t.sortIndex = t.expirationTime, n(c, t)
                        }
                        t = r(u)
                    }
                }

                function w(e) {
                    if (v = !1, x(e), !h)
                        if (null !== r(c)) h = !0, M(S);
                        else {
                            var t = r(u);
                            null !== t && O(w, t.startTime - e)
                        }
                }

                function S(e, n) {
                    h = !1, v && (v = !1, y(C), C = -1), m = !0;
                    var i = p;
                    try {
                        for (x(n), f = r(c); null !== f && (!(f.expirationTime > n) || e && !N());) {
                            var l = f.callback;
                            if ("function" === typeof l) {
                                f.callback = null, p = f.priorityLevel;
                                var s = l(f.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof s ? f.callback = s : f === r(c) && a(c), x(n)
                            } else a(c);
                            f = r(c)
                        }
                        if (null !== f) var o = !0;
                        else {
                            var d = r(u);
                            null !== d && O(w, d.startTime - n), o = !1
                        }
                        return o
                    } finally {
                        f = null, p = i, m = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var k, _ = !1,
                    E = null,
                    C = -1,
                    j = 5,
                    T = -1;

                function N() {
                    return !(t.unstable_now() - T < j)
                }

                function P() {
                    if (null !== E) {
                        var e = t.unstable_now();
                        T = e;
                        var n = !0;
                        try {
                            n = E(!0, e)
                        } finally {
                            n ? k() : (_ = !1, E = null)
                        }
                    } else _ = !1
                }
                if ("function" === typeof b) k = function() {
                    b(P)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var z = new MessageChannel,
                        L = z.port2;
                    z.port1.onmessage = P, k = function() {
                        L.postMessage(null)
                    }
                } else k = function() {
                    g(P, 0)
                };

                function M(e) {
                    E = e, _ || (_ = !0, k())
                }

                function O(e, n) {
                    C = g((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    h || m || (h = !0, M(S))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return p
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(c)
                }, t.unstable_next = function(e) {
                    switch (p) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = p
                    }
                    var n = p;
                    p = t;
                    try {
                        return e()
                    } finally {
                        p = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = p;
                    p = e;
                    try {
                        return t()
                    } finally {
                        p = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, i) {
                    var l = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? l + i : l : i = l, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: d++,
                        callback: a,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: s = i + s,
                        sortIndex: -1
                    }, i > l ? (e.sortIndex = i, n(u, e), null === r(c) && e === r(u) && (v ? (y(C), C = -1) : v = !0, O(w, i - l))) : (e.sortIndex = s, n(c, e), h || m || (h = !0, M(S))), e
                }, t.unstable_shouldYield = N, t.unstable_wrapCallback = function(e) {
                    var t = p;
                    return function() {
                        var n = p;
                        p = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            p = n
                        }
                    }
                }
            },
            296: (e, t, n) => {
                "use strict";
                e.exports = n(813)
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.m = e, n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, r) => (n.f[r](e, t), t)), [])), n.u = e => "static/js/" + e + ".bfed726e.chunk.js", n.miniCssF = e => {}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {},
            t = "pfh:";
        n.l = (r, a, i, l) => {
            if (e[r]) e[r].push(a);
            else {
                var s, o;
                if (void 0 !== i)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var d = c[u];
                        if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + i) {
                            s = d;
                            break
                        }
                    }
                s || (o = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, n.nc && s.setAttribute("nonce", n.nc), s.setAttribute("data-webpack", t + i), s.src = r), e[r] = [a];
                var f = (t, n) => {
                        s.onerror = s.onload = null, clearTimeout(p);
                        var a = e[r];
                        if (delete e[r], s.parentNode && s.parentNode.removeChild(s), a && a.forEach((e => e(n))), t) return t(n)
                    },
                    p = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                s.onerror = f.bind(null, s.onerror), s.onload = f.bind(null, s.onload), o && document.head.appendChild(s)
            }
        }
    })(), n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "/", (() => {
        var e = {
            179: 0
        };
        n.f.j = (t, r) => {
            var a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a) r.push(a[2]);
                else {
                    var i = new Promise(((n, r) => a = e[t] = [n, r]));
                    r.push(a[2] = i);
                    var l = n.p + n.u(t),
                        s = new Error;
                    n.l(l, (r => {
                        if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                            var i = r && ("load" === r.type ? "missing" : r.type),
                                l = r && r.target && r.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + l + ")", s.name = "ChunkLoadError", s.type = i, s.request = l, a[1](s)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, r) => {
                var a, i, l = r[0],
                    s = r[1],
                    o = r[2],
                    c = 0;
                if (l.some((t => 0 !== e[t]))) {
                    for (a in s) n.o(s, a) && (n.m[a] = s[a]);
                    if (o) o(n)
                }
                for (t && t(r); c < l.length; c++) i = l[c], n.o(e, i) && e[i] && e[i][0](), e[i] = 0
            },
            r = self.webpackChunkpfh = self.webpackChunkpfh || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), (() => {
        "use strict";
        var e = n(791),
            t = n(250),
            r = n(26),
            a = n.n(r);
        const i = n.p + "static/media/cubegif.0a6e6e0b00912260cac2.gif";
        var l = n(184);
        const s = () => {
                const [t, n] = (0, e.useState)(!1);
                return (0, l.jsx)("header", {
                    className: "header",
                    id: "header",
                    children: (0, l.jsxs)("nav", {
                        className: "nav container",
                        children: [(0, l.jsx)("a", {
                            href: "#home",
                            children: (0, l.jsx)("img", {
                                src: i,
                                alt: "",
                                className: "cube__img nav__link nav__item"
                            })
                        }), (0, l.jsxs)("div", {
                            className: t ? "nav__menu show-menu" : "nav__menu",
                            children: [(0, l.jsxs)("ul", {
                                className: "nav__list grid",
                                children: [(0, l.jsx)("li", {
                                    className: "nav__item",
                                    children: (0, l.jsxs)("a", {
                                        href: "#home",
                                        className: "nav__link activ-link",
                                        children: [(0, l.jsx)("i", {
                                            className: "uil uil-estate nav__icon"
                                        }), " Home"]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "nav__item",
                                    children: (0, l.jsxs)("a", {
                                        href: "#about",
                                        className: "nav__link",
                                        children: [(0, l.jsx)("i", {
                                            className: "uil uil-user nav__icon"
                                        }), " About"]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "nav__item",
                                    children: (0, l.jsxs)("a", {
                                        href: "#qualifications",
                                        className: "nav__link",
                                        children: [(0, l.jsx)("i", {
                                            className: "uil uil-message nav__icon"
                                        }), " Experience"]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "nav__item",
                                    children: (0, l.jsxs)("a", {
                                        href: "#skills",
                                        className: "nav__link",
                                        children: [(0, l.jsx)("i", {
                                            className: "uil uil-file-alt nav__icon"
                                        }), " Skills"]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "nav__item",
                                    children: (0, l.jsxs)("a", {
                                        href: "#projects",
                                        className: "nav__link",
                                        children: [(0, l.jsx)("i", {
                                            className: "uil uil-scenery nav__icon"
                                        }), " Projects"]
                                    })
                                }), (0, l.jsx)("li", {
                                    className: "nav__item",
                                    children: (0, l.jsxs)("a", {
                                        href: "#contact",
                                        className: "nav__link",
                                        children: [(0, l.jsx)("i", {
                                            className: "uil uil-message nav__icon"
                                        }), " Contact"]
                                    })
                                })]
                            }), (0, l.jsx)("i", {
                                class: "uil uil-times nav__close",
                                onClick: () => n(!t)
                            })]
                        }), (0, l.jsx)("div", {
                            className: "nav__toggle",
                            onClick: () => n(!t),
                            children: (0, l.jsx)("i", {
                                class: "uil uil-apps"
                            })
                        })]
                    })
                })
            },
            o = () => (0, l.jsxs)("div", {
                className: "home__social",
                children: [(0, l.jsx)("a", {
                    href: "https://www.linkedin.com/in/eswara-sai-sumanth-mamidi/",
                    className: "home__social-icon",
                    target: "_blank",
                    children: (0, l.jsx)("i", {
                        class: "uil uil-linkedin"
                    })
                }), (0, l.jsx)("a", {
                    href: "https://github.com/Eswara06",
                    className: "home__social-icon",
                    target: "_blank",
                    children: (0, l.jsx)("i", {
                        class: "uil uil-github"
                    })
              
                })]
            });
        var c = n(48);
        const u = n.p + "static/media/EswaraSaiSumanth_Resume.pdf",
            d = () => {
                const [e] = (0, c.Ku)({
                    words: [" a Data Scientist.", " a Data Analyst.", " a Student.", " a Machine Learning Enthusiast.", " a Problem Solver.", " a Researcher."],
                    loop: {}
                });
                return (0, l.jsxs)("div", {
                    className: "home__data",
                    children: [(0, l.jsx)("h1", {
                        className: "home__title",
                        children: "Eswara Sai Sumanth Mamidi"
                    }), (0, l.jsxs)("h3", {
                        className: "home__subtitle",
                        children: ["Hi, I'm", (0, l.jsx)("span", {
                            className: "home__subtitle",
                            style: {
                                fontweight: "bold",
                                color: "#007791"
                            },
                            children: e
                        }), (0, l.jsx)(c.CF, {})]
                    }), (0, l.jsxs)("p", {
                        className: "home__description",
                        children: [" Data Scientist and Analyst passionate about using data to drive impactful decisions and improve business outcomes with over three years of experience as a Data Analyst working for companies like ", (0, l.jsx)("strong", {
                            children: "Accenture"
                        }), ", ", (0, l.jsx)("strong", {
                            children: "Camino"
                        }), " and at ", (0, l.jsx)("strong", {
                            children: "University of North Carolina at Charlotte"
                        }), "."]
                    }), (0, l.jsxs)("a", {
                        href: "#contact",
                        className: "button button--flex hello__button",
                        children: ["Say Hello!", (0, l.jsxs)("svg", {
                            class: "button__icon",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [(0, l.jsx)("path", {
                                d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                                fill: "var(--container-color)"
                            }), (0, l.jsx)("path", {
                                d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                                fill: "var(--container-color)"
                            })]
                        })]
                    }), (0, l.jsxs)("a", {
                        download: "",
                        href: u,
                        className: "button button--flex cv__button",
                        children: ["Resume", (0, l.jsxs)("svg", {
                            class: "button__icon",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [(0, l.jsx)("path", {
                                d: "M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z",
                                fill: "var(--container-color)"
                            }), (0, l.jsx)("path", {
                                d: "M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z",
                                fill: "var(--container-color)"
                            }), (0, l.jsx)("path", {
                                d: "M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z",
                                fill: "var(--container-color)"
                            }), (0, l.jsx)("path", {
                                d: "M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z",
                                fill: "var(--container-color)"
                            })]
                        })]
                    })]
                })
            },
            f = () => (0, l.jsx)("section", {
                className: "home section",
                id: "home",
                children: (0, l.jsx)("div", {
                    className: "home__container container grid",
                    children: (0, l.jsxs)("div", {
                        className: "home__content grid",
                        children: [(0, l.jsx)(o, {}), (0, l.jsx)("div", {
                            className: "home__img"
                        }), (0, l.jsx)(d, {})]
                    })
                })
            }),
            p = n.p + "static/media/profile1.jpg",
            m = () => (0, l.jsxs)("div", {
                className: "about__info grid",
                children: [(0, l.jsx)("a", {
                    href: "#qualifications",
                    children: (0, l.jsxs)("div", {
                        className: "about__box",
                        children: [(0, l.jsx)("i", {
                            class: "bx bx-award about__icon"
                        }), (0, l.jsx)("h3", {
                            className: "about__title",
                            children: "Experience"
                        }), (0, l.jsx)("span", {
                            className: "about__subtitle",
                            children: "3 Years Working"
                        })]
                    })
                }), (0, l.jsx)("a", {
                    href: "#projects",
                    children: (0, l.jsxs)("div", {
                        className: "about__box",
                        children: [(0, l.jsx)("i", {
                            class: "bx bx-briefcase about__icon"
                        }), (0, l.jsx)("h3", {
                            className: "about__title",
                            children: "Completed"
                        }), (0, l.jsx)("span", {
                            className: "about__subtitle",
                            children: "20+ Projects"
                        })]
                    })
                }), (0, l.jsx)("a", {
                    href: "#skills",
                    children: (0, l.jsxs)("div", {
                        className: "about__box",
                        children: [(0, l.jsx)("i", {
                            class: "bx bx-code-alt about__icon"
                        }), (0, l.jsx)("h3", {
                            className: "about__title",
                            children: "Skillset"
                        }), (0, l.jsx)("span", {
                            className: "about__subtitle",
                            children: "15+ Technologies "
                        })]
                    })
                })]
            }),
            h = () => (0, l.jsxs)("section", {
                className: "about section",
                id: "about",
                children: [(0, l.jsx)("h2", {
                    className: "section__title",
                    children: "About Me"
                }), (0, l.jsx)("span", {
                    className: "section__subtitle",
                    children: "Introduction"
                }), (0, l.jsxs)("div", {
                    className: "about__container container grid",
                    children: [(0, l.jsx)("img", {
                        src: p,
                        alt: "",
                        className: "about__img"
                    }), (0, l.jsxs)("div", {
                        className: "about__data",
                        children: [(0, l.jsx)(m, {}), (0, l.jsxs)("p", {
                            className: "about__description",
                            children: ["Recently graduated with a masters degree in Data Science and Business Analytics from the University of North Carolina at Charlotte. I'm a Data Scientist with 3 years of hands-on experience working  at ", (0, l.jsx)("strong", {
                                children: "Accenture"
                            }), ", and ", (0, l.jsx)("strong", {
                                children: "Camino"
                            }), ". With a proven track record of harnessing machine learning, statistical analysis, and cutting-edge AI techniques, I turn complex data into actionable insights that drive smarter business decisions. Armed with deep technical skills in ", (0, l.jsx)("strong", {
                                children: "Python, Machine Learning, SQL, Power BI and AWS"
                            }), ". Highly adaptabe and a quick learner, I enjoy problem solving and always look forward to new challenges. Explore my resume to learn more about my achievements and how I can contribute to your team."]
                        }), (0, l.jsxs)("a", {
                            download: "",
                            href: u,
                            className: "button button--flex",
                            children: ["Download Resume", (0, l.jsxs)("svg", {
                                class: "button__icon",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: [(0, l.jsx)("path", {
                                    d: "M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z",
                                    fill: "var(--container-color)"
                                }), (0, l.jsx)("path", {
                                    d: "M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z",
                                    fill: "var(--container-color)"
                                }), (0, l.jsx)("path", {
                                    d: "M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z",
                                    fill: "var(--container-color)"
                                }), (0, l.jsx)("path", {
                                    d: "M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z",
                                    fill: "var(--container-color)"
                                })]
                            })]
                        })]
                    })]
                })]
            }),
            v = () => (0, l.jsxs)("div", {
                className: "skills__content card",
                children: [(0, l.jsx)("h3", {
                    className: "skills__title",
                    children: "Tools and Software"
                }), (0, l.jsxs)("div", {
                    className: "skills__box",
                    children: [(0, l.jsxs)("div", {
                        className: "skills__group",
                        children: [(0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-jupyter-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Jupyter"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar2",
                                    children: (0, l.jsx)("div", {
                                        className: "pb13",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-r-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "R Studio"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar2",
                                    children: (0, l.jsx)("div", {
                                        className: "pb14",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-streamlit-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Streamlit Cloud"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar15",
                                    children: (0, l.jsx)("div", {
                                        className: "pb15",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "skills__group",
                        children: [(0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-github-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "GitHub"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar17",
                                    children: (0, l.jsx)("div", {
                                        className: "pb16",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-matlab-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Matlab"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Beginner"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar18",
                                    children: (0, l.jsx)("div", {
                                        className: "pb17",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-amazonwebservices-plain-wordmark colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "AWS"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar15",
                                    children: (0, l.jsx)("div", {
                                        className: "pb18",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            }),
            g = () => (0, l.jsxs)("div", {
                className: "skills__content card",
                children: [(0, l.jsx)("h3", {
                    className: "skills__title",
                    children: "Data Visualisation"
                }), (0, l.jsxs)("div", {
                    className: "skills__box",
                    children: [(0, l.jsxs)("div", {
                        className: "skills__group",
                        children: [(0, l.jsxs)("div", {
                            className: "skills__data",
                            //children: [(0, l.jsx)("i", {
                                // Replacing svg class with src 
                                // class:"devicon-tableau-plain"
                            children:[(0, l.jsx)("img", {
                                src: "/static/media/tableau-icon.svg",
                                alt: "Tableau Logo",
                                style: {width:"18px", height: "18px"}
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Tableau"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar2",
                                    children: (0, l.jsx)("div", {
                                        className: "pb19",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-streamlit-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Streamlit"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar10",
                                    children: (0, l.jsx)("div", {
                                        className: "pb20",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children:[(0, l.jsx)("img", {
                                src: "/static/media/vega-lite-logo.svg",
                                alt: "VegaLiteLogo",
                                style: {width:"18px", height: "18px"}
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Vegalite"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Beginner"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar20",
                                    children: (0, l.jsx)("div", {
                                        className: "pb10",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "skills__group",
                        children: [(0, l.jsxs)("div", {
                            className: "skills__data",
                            children:[(0, l.jsx)("img", {
                                src: "/static/media/power-bi-logo.svg",
                                alt: "Powerbi Logo",
                                style: {width:"18px", height: "18px"}
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Power BI"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar2",
                                    children: (0, l.jsx)("div", {
                                        className: "pb22",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-matplotlib-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Matplotlib"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar13",
                                    children: (0, l.jsx)("div", {
                                        className: "pb23",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-plotly-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Plotly"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar15",
                                    children: (0, l.jsx)("div", {
                                        className: "pb24",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            }),
            y = () => (0, l.jsxs)("div", {
                className: "skills__content card",
                style: {
                    "--clr": "#007791"
                },
                children: [(0, l.jsx)("h3", {
                    className: "skills__title",
                    children: "Statistical Modeling and Analysis"
                }), (0, l.jsxs)("div", {
                    className: "skills__box",
                    children: [(0, l.jsxs)("div", {
                        className: "skills__group",
                        children: [(0, l.jsxs)("div", {
                            className: "skills__data",
                            children:[(0, l.jsx)("img", {
                                src: "/static/media/regression-logo.svg",
                                alt: "Regression Logo",
                                style: {width:"24px", height: "24px"}
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Regression"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar1",
                                    children: (0, l.jsx)("div", {
                                        className: "pb7",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children:[(0, l.jsx)("img", {
                                src: "/static/media/clustering-logo.svg",
                                alt: "Clustering Logo",
                                style: {width:"24px", height: "24px"}
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Clustering"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar1",
                                    children: (0, l.jsx)("div", {
                                        className: "pb21",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children:[(0, l.jsx)("img", {
                                src: "/static/media/text-analysis-logo.svg",
                                alt: "Textanalysis Logo",
                                style: {width:"24px", height: "24px"}
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Text Analysis"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar1",
                                    children: (0, l.jsx)("div", {
                                        className: "pb9",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "skills__group",
                        children: [(0, l.jsxs)("div", {
                            className: "skills__data",
                            children:[(0, l.jsx)("img", {
                                src: "/static/media/classification-logo.svg",
                                alt: "Classification Logo",
                                style: {width:"24px", height: "24px"}
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Classification"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar1",
                                    children: (0, l.jsx)("div", {
                                        className: "pb8",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children:[(0, l.jsx)("img", {
                                src: "/static/media/time-series-logo.svg",
                                alt: "Timeseries Logo",
                                style: {width:"24px", height: "24px"}
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Time Series Analysis"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar1",
                                    children: (0, l.jsx)("div", {
                                        className: "pb11",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-git-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Git"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar3",
                                    children: (0, l.jsx)("div", {
                                        className: "pb12",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            }),
            b = () => (0, l.jsxs)("div", {
                className: "skills__content card",
                children: [(0, l.jsx)("h3", {
                    className: "skills__title",
                    children: "Languages & Databases"
                }), (0, l.jsxs)("div", {
                    className: "skills__box",
                    children: [(0, l.jsxs)("div", {
                        className: "skills__group",
                        children: [(0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-python-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Python"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar2",
                                    children: (0, l.jsx)("div", {
                                        className: "pb2",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-cplusplus-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "C/C++"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar15",
                                    children: (0, l.jsx)("div", {
                                        className: "pb25",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-sqlite-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "SQLite3"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar1",
                                    children: (0, l.jsx)("div", {
                                        className: "pb3",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "skills__group",
                        children: [(0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-r-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "R"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Intermediate"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar15",
                                    children: (0, l.jsx)("div", {
                                        className: "pb4",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-mysql-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "SQL"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Advanced"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar2",
                                    children: (0, l.jsx)("div", {
                                        className: "pb5",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "skills__data",
                            children: [(0, l.jsx)("i", {
                                class: "devicon-mongodb-plain colored skills__icon"
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("h3", {
                                    className: "skills__name",
                                    children: "Mongo DB"
                                }), (0, l.jsx)("span", {
                                    className: "skills__level",
                                    children: "Beginner"
                                }), (0, l.jsx)("div", {
                                    className: "progress__bar24",
                                    children: (0, l.jsx)("div", {
                                        className: "pb10",
                                        children: (0, l.jsx)("span", {})
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            }),
            c195 = () => (0, l.jsxs)("div", {
                className: "skills__content card",
                children: [
                        (0, l.jsx)("h3", {
                        className: "skills__title",
                        children: "AWS Certifications"
                    }),
                    (0, l.jsxs)("div", {
                        className: "skills__box",
                        style: { display: "flex", flexDirection: "column", gap: "10px" },
                        children: [
                            // AWS CCP
                            (0, l.jsxs)("div", {
                                className: "skills__data",
                                // style: { display: "block" },
                                style: { display: "flex", alignItems: "center" },
                                children: [
                                    // Replace Java icon with Oracle logo image
                                    (0, l.jsx)("img", {
                                        src: "/static/media/amazon_web_services_logo.png", // Path to your Oracle logo image
                                        alt: "Oracle Logo",
                                        style: { width: "24px", height: "24px", marginRight: "8px" } // Adjust size and spacing as needed
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)("a", {
                                                href: "https://www.credly.com/badges/ee837f44-ef71-4caa-a363-dc7efcf32872", // Replace with the actual URL you want to link to
                                                target: "_blank", // Opens the link in a new tab
                                                rel: "noopener noreferrer", // Security best practices for external links
                                                className: "skills__name",
                                                style: { display: "inline", color: "#333333", textDecoration: "none" }, // Make the link inline
                                                children: [
                                                    "AWS Certified Cloud Practitioner - Foundational",
                                                    (0, l.jsx)("img", {
                                                        src: "/static/media/external-link.png", // Path to your external link icon
                                                        alt: "External link",
                                                        style: { width: "16px", height: "16px", verticalAlign: "text-middle", marginLeft: "3px" } // Align icon closely to text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            // AWS AI Practitioner
                            (0, l.jsxs)("div", {
                                className: "skills__data",
                                // style: { display: "block" },
                                style: { display: "flex", alignItems: "center" },
                                children: [
                                    // Replace Java icon with Oracle logo image
                                    (0, l.jsx)("img", {
                                        src: "/static/media/amazon_web_services_logo.png", // Path to your Oracle logo image
                                        alt: "Oracle Logo",
                                        style: { width: "24px", height: "24px", marginRight: "8px" } // Adjust size and spacing as needed
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)("a", {
                                                href: "https://www.credly.com/badges/30471381-49ee-4520-8ac3-9d81967e37cf", // Replace with the actual URL you want to link to
                                                target: "_blank", // Opens the link in a new tab
                                                rel: "noopener noreferrer", // Security best practices for external links
                                                className: "skills__name",
                                                style: { display: "inline", color: "#333333", textDecoration: "none" }, // Make the link inline
                                                children: [
                                                    "AWS Certified AI Practitioner - Foundational",
                                                    (0, l.jsx)("img", {
                                                        src: "/static/media/external-link.png", // Path to your external link icon
                                                        alt: "External link",
                                                        style: { width: "16px", height: "16px", verticalAlign: "text-middle", marginLeft: "3px" } // Align icon closely to text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),/*
                            // AWS Solution Architect
                            (0, l.jsxs)("div", {
                                className: "skills__data",
                                // style: { display: "block" },
                                style: { display: "flex", alignItems: "center" },
                                children: [
                                    // Replace Java icon with Oracle logo image
                                    (0, l.jsx)("img", {
                                        src: "/static/media/amazon_web_services_logo.png", // Path to your Oracle logo image
                                        alt: "Oracle Logo",
                                        style: { width: "24px", height: "24px", marginRight: "8px" } // Adjust size and spacing as needed
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)("a", {
                                                href: "https://www.credly.com/badges/ee837f44-ef71-4caa-a363-dc7efcf32872", // Replace with the actual URL you want to link to
                                                target: "_blank", // Opens the link in a new tab
                                                rel: "noopener noreferrer", // Security best practices for external links
                                                className: "skills__name",
                                                style: { display: "inline", color: "#333333", textDecoration: "none" }, // Make the link inline
                                                children: [
                                                    "AWS Certified AI Practitioner",
                                                    (0, l.jsx)("img", {
                                                        src: "/static/media/external-link.png", // Path to your external link icon
                                                        alt: "External link",
                                                        style: { width: "16px", height: "16px", verticalAlign: "text-middle", marginLeft: "3px" } // Align icon closely to text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            // AWS Cloud Practitioner
                            (0, l.jsxs)("div", {
                                className: "skills__data",
                                // style: { display: "block" },
                                style: { display: "flex", alignItems: "center" },
                                children: [
                                    // Replace Java icon with Oracle logo image
                                    (0, l.jsx)("img", {
                                        src: "/static/media/amazon_web_services_logo.png", // Path to your Oracle logo image
                                        alt: "Oracle Logo",
                                        style: { width: "24px", height: "24px", marginRight: "8px" } // Adjust size and spacing as needed
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)("a", {
                                                href: "https://www.credly.com/badges/ee837f44-ef71-4caa-a363-dc7efcf32872", // Replace with the actual URL you want to link to
                                                target: "_blank", // Opens the link in a new tab
                                                rel: "noopener noreferrer", // Security best practices for external links
                                                className: "skills__name",
                                                style: { display: "inline", color: "#333333", textDecoration: "none" }, // Make the link inline
                                                children: [
                                                    "AWS Certified Cloud Practitioner",
                                                    (0, l.jsx)("img", {
                                                        src: "/static/media/external-link.png", // Path to your external link icon
                                                        alt: "External link",
                                                        style: { width: "16px", height: "16px", verticalAlign: "text-middle", marginLeft: "3px" } // Align icon closely to text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })*/
                        ]
                    })
                ]
            }),
            b195 = () => (0, l.jsxs)("div", {
                className: "skills__content card",
                children: [
                        (0, l.jsx)("h3", {
                        className: "skills__title",
                        children: "Other Certifications"
                    }),
                    (0, l.jsxs)("div", {
                        className: "skills__box",
                        style: { display: "flex", flexDirection: "column", gap: "10px" },
                        children: [
                            // Microsoft Certification
                            (0, l.jsxs)("div", {
                                className: "skills__data",
                                // style: { display: "block" },
                                style: { display: "flex", alignItems: "center" },
                                children: [
                                    // Replace Java icon with Oracle logo image
                                    (0, l.jsx)("img", {
                                        src: "/static/media/microsoft_logo.png", // Path to your Oracle logo image
                                        alt: "Oracle Logo",
                                        style: { width: "24px", height: "24px", marginRight: "8px" } // Adjust size and spacing as needed
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)("a", {
                                                href: "https://www.credly.com/badges/76add498-7c99-4d89-90de-ec1a05feb932", // Replace with the actual URL you want to link to
                                                target: "_blank", // Opens the link in a new tab
                                                rel: "noopener noreferrer", // Security best practices for external links
                                                className: "skills__name",
                                                style: { display: "inline", color: "#333333", textDecoration: "none" }, // Make the link inline
                                                children: [
                                                    "Microsoft MTA: Python Programming",
                                                    (0, l.jsx)("img", {
                                                        src: "/static/media/external-link.png", // Path to your external link icon
                                                        alt: "External link",
                                                        style: { width: "16px", height: "16px", verticalAlign: "text-middle", marginLeft: "3px" } // Align icon closely to text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            // Alteryx
                            (0, l.jsxs)("div", {
                                className: "skills__data",
                                //style: { display: "block" },
                                style: { display: "flex", alignItems: "center" },
                                children: [
                                    // Replace Java icon with Oracle logo image
                                    (0, l.jsx)("img", {
                                        src: "/static/media/alteryx_logo.png", // Path to your Oracle logo image
                                        alt: "Oracle Logo",
                                        style: { width: "24px", height: "24px", marginRight: "8px" } // Adjust size and spacing as needed
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)("a", {
                                                href: "https://www.credly.com/badges/ee1d3f6e-bdee-4ad7-bec1-d3fa8ab14285", // Replace with the actual URL you want to link to
                                                target: "_blank", // Opens the link in a new tab
                                                rel: "noopener noreferrer", // Security best practices for external links
                                                className: "skills__name",
                                                style: { display: "inline", color: "#333333", textDecoration: "none" }, // Make the link inline
                                                children: [
                                                    "Alteryx Designer Core",
                                                    (0, l.jsx)("img", {
                                                        src: "/static/media/external-link.png", // Path to your external link icon
                                                        alt: "External link",
                                                        style: { width: "16px", height: "16px", verticalAlign: "text-middle", marginLeft: "3px" } // Align icon closely to text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            // Alteryx ML Micro-cred
                            (0, l.jsxs)("div", {
                                className: "skills__data",
                                // style: { display: "block" },
                                style: { display: "flex", alignItems: "center" },
                                children: [
                                    // Replace Java icon with Oracle logo image
                                    (0, l.jsx)("img", {
                                        src: "/static/media/alteryx_ml_logo.png", // Path to your Oracle logo image
                                        alt: "Oracle Logo",
                                        style: { width: "24px", height: "24px", marginRight: "8px" } // Adjust size and spacing as needed
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)("a", {
                                                href: "https://www.credly.com/badges/ee1d3f6e-bdee-4ad7-bec1-d3fa8ab14285", // Replace with the actual URL you want to link to
                                                target: "_blank", // Opens the link in a new tab
                                                rel: "noopener noreferrer", // Security best practices for external links
                                                className: "skills__name",
                                                style: { display: "inline", color: "#333333", textDecoration: "none" }, // Make the link inline
                                                children: [
                                                    "Alteryx Machine Learning Micro-Credential ",
                                                    (0, l.jsx)("img", {
                                                        src: "/static/media/external-link.png", // Path to your external link icon
                                                        alt: "External link",
                                                        style: { width: "16px", height: "16px", verticalAlign: "text-middle", marginLeft: "3px" } // Align icon closely to text
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            x = () => (0, l.jsxs)("section", {
                className: "skills section",
                id: "skills",
                children: [(0, l.jsx)("h2", {
                    className: "section__title",
                    children: "Skills"
                }), (0, l.jsx)("span", {
                    className: "section__subtitle",
                    children: "My Tech Stack"
                }), (0, l.jsxs)("div", {
                    className: "skills__container container grid",
                    children: [(0, l.jsx)(b, {}), (0, l.jsx)(y, {}), (0, l.jsx)(v, {}), (0, l.jsx)(g, {}), (0, l.jsx)(c195, {}), (0, l.jsx)(b195, {})]
                })]
            }),
            
            //Suamnth ess
            /*
            x = () => (0, l.jsxs)("section", {
                className: "certification section",
                id: "certifications",
                children: [(0, l.jsx)("h2", {
                    className: "section__title",
                    children: "Certifications"
                }), (0, l.jsx)("span", {
                    className: "section__subtitle",
                    children: "List of my Certifications"
                }), (0, l.jsxs)("div", {
                    className: "skills__container container grid",
                    children: [(0, l.jsx)(b, {}), (0, l.jsx)(y, {}), (0, l.jsx)(v, {}), (0, l.jsx)(g, {})]
                })]
            }),
            //esss*/
            w = n.p + "static/media/caminologo.png",
            S = n.p + "static/media/accenturelogo.png",
            t196 = n.p + "static/media/ksilogo.png",
            k = n.p + "static/media/uncclogo.png",
            _ = n.p + "static/media/mrcetlogo.jpeg",
            E = () => {
                const [t, n] = (0, e.useState)(1), r = e => {
                    n(e)
                };
                return (0, l.jsxs)("section", {
                    className: "qualification section",
                    id: "qualifications",
                    children: [(0, l.jsx)("h2", {
                        className: "section__title",
                        children: "Experience"
                    }), (0, l.jsx)("span", {
                        className: "section__subtitle",
                        children: "Academic/Professional Journey So Far"
                    }), (0, l.jsxs)("div", {
                        className: "qualification__container container",
                        children: [(0, l.jsxs)("div", {
                            className: "qualification__tabs",
                            children: [(0, l.jsxs)("div", {
                                className: 1 === t ? "qualification__button qualification__active button--flex" : "qualification__button button--flex",
                                onClick: () => r(1),
                                children: [(0, l.jsx)("i", {
                                    className: "uil uil-briefcase-alt qualification__icon"
                                }), "Experience"]
                            }), (0, l.jsxs)("div", {
                                className: 2 === t ? "qualification__button qualification__active button--flex" : "qualification__button button--flex",
                                onClick: () => r(2),
                                children: [(0, l.jsx)("i", {
                                    className: "uil uil-graduation-cap qualification__icon"
                                }), "Education"]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "qualification__sections",
                            children: [(0, l.jsxs)("div", {
                                className: 2 === t ? "qualification__content qualification__content-active" : "qualification__content",
                                children: [(0, l.jsxs)("div", {
                                    className: "qualification__data",
                                    children: [(0, l.jsxs)("div", {
                                        className: "Box",
                                        children: [(0, l.jsx)("h3", {
                                            className: "qualification__title",
                                            children: "Data Science and Business Analytics, MS"
                                        }), (0, l.jsx)("img", {
                                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABnYAAAF+AgMAAADCWMwYAAAACVBMVEVHcEwJV0GrmGcnnDKwAAAAAXRSTlMAQObYZgAAGgpJREFUeNrs3U2S4yoSAGBEhDesR5fgFJobaCLs+xCznFMQb0Vwyunyn0gygUS2S/i9ZNPd1VhGfBJKQUqlFF2my+WyKCmDlvlyL6v0xYDlAspZOmSocroQRbpluLENFbkgDTe2oSIXpEPLdGEUuSCNN7aJ0fhjm8QM449tcikaKqyWEe5LxzYZ3YYe24Rn6LFN7lXHHtskNhh6bJPYYOixTS4+Q04ZCM9XjG0SG4w9tklsMPTYJrHBwGG1XHwGH9uEZ+ixTWKDscc2iQ0GDqslNhh8bJOLz9Bjm/AMPbZJbDByWC2xweBjm8QGQ49tcvEZemwTnlHC6v9IbDDy2PZviQ1GHttOEhsMPLadT3LxGTisXoVn5EvPOsu8wcA8yyzzBgNHBsUrlMQGA/CcldyYDsyzKpm0HphnEZ6heSZZUxj4rrQS30lscDjPuRZ+SxcezbPWhkDpwqN5FuE5qlyE59t5lPAMzHOuDoHShQfzrMIzMs9S45H7nk+WiccjqW7j8ijhGZjnLDwj86zVWqv0ofD8U8uJFRkIz7g89VrCcyzPWXi+mGeRPjyUZxWe48rMiQxqtYRHeISnOiMtPKPyXCdt5PHFUXlW4REeKXRhRQaT8IzKo4Tni3lkuedQnrPwjMyzNmZ+hOeTZRKer+ZZhGdkntbN0Sp9KDzCUxu7hOegcmLxyOsqB+VZWzyL9OGBPIvwCI+UnTzN+EF4PllmTmQgPF/LI114IM/aHAGlC4VHeGpXFuEZlEcJz6GF9Q7+WdYThuQ5C4/wSNnJszYrCY/w/GPLxPrVcLLcMyaPEp7xeSbhGZLnLDzCI6VYTpzATZZ7huY5Cc+QPIvwCI+UnTz3SvMBPCaG/g/pGD9UOW+cZ9WzzHqf48maE6+77bYOfnRzvP1p7z+8VvlT86e4+0fvf3v03eNff/7qt8rXPr3/yGYd/FPl0R+3uh6BP9lR5W0fnh+9fY/JHQ1o6vbRaxMD6I6Y9szz026z2wRtulFGzz/n097D4wGPongi2LOtH929Tx67f+eJ2Rlmk000eVDlkH7wefw4ggco6Ixn+06d/MtuH3hsLueJv8ATUp7I40kOWg92tM3jUbc9djHGmO0vbE+xcptHgyMJ8aSnSdwOBoInvMaztqfcCB6T8XjMc28s5gnpnt1bS/DctqYzHoNPAorHlyp7Jo8FmzaIxynchAqPQ8P5r/Dchtv70aEpHpPwxIgvAD4dq0keh7stUD2F2kNVDojn9tX5JQ6OmwmPAf+j4TkZVHYZuv0o7udZ9vKo3TwO9wDNEzBPKtzkISpHHg/ApHgCgbWT5/Iizzk7rio8buO5N7rIA3rgvj3MY8ij+s08cGAieCyTx4NjGPOYbh7GtGmdx3Xz+CJPGvCSPDoVpnlAe1DlNNh/HhKYx+BxmPwfC4dMgif+Oo/v5wmYx7B4Ct3miCAKtcfs57GYx1E8sZ/H9/Cc9/HYjMchniT0znmeIl7VeCzN45/3dhUeV6qM7n6LPE7BeyZHHCDXKprBkzAPxwM++tyZ6yYe2zFJT4R0F7PdudY3EX5fiQdXNs/NmbS/8d3v/cyleVRq7rfPfoBnZUz8rBTP8+v98+Q1FI8FN3fJzgCetCd8i0dn3wcjh609uLJOeUA0QfEYiic39+kdnlfwILtFarrKM72VRzN5DOp4xBNaPJG47Qk9PKGDxxcvsLfB0BXPXz5PPJiHujNKZ65cFnPa1IrBE0vjJsVDVCZ5AuLRNR50gGw8TsG9eJln2cHjeDyB5gEjdY3nZ3P4tsf38OSVNZ8nnej5sy+QB85psXn+/MXu45l384Tnpc+kf9qjeLb2jMHzEw2FvTyciZ8F88RXeHyFR0OeLN59A4/L12Yeo1Unj/oCHn3tDp1d3+88aCLKZDwhZe7gMTgoTCYVtvbgyhRPLPLYbW7AJzOFiCc+Zxedgntxuw012xRQwDwnzi1NN49v8EQWj8rvdjSYxUcrxW/kCVS0MSrPhctjcp6Y8ASKx8NFkGTNJev2jOdns1mgo7MZpUDwPNtDVKZ58LoFiMhyHp/fNWwWkPfGEwblcU0e1+JxWVx9EE98E4/t5Vk5PHmKhEI8AfHoEo9OeHyL57+Yx3F4QqGy4fMowOMgjwUtaPM8kxH8r/DoJ0/YweOSICvnMTmP6uMJLR40tVfmSVqHeAKT568mD+uqv4/nFnFmeVQPnjwSg/Mh6SQ9vB9Jfvi/Kk9EPKA9RGWLeTQIIEiedJQlJqa2FAsij+qvNL6Je3mmbh5X5zEsHk/xqJQnKFWMqFg8tsTje3hUhUd38LhP8+Rpbjbl8RQPzGSJ270eSH9xuGOyhD+UF4Dnr0B7cGUd8eQEWPvJUwVInmRdIkIeKs3tJR71OZ5A8KQdYSJIEi3weJIn9PAQS4F9PAby5MkfcJG4wqM/wnNWlSn9n0iR4rFlniTBFsdrTR6V9XhAPH7jUYjHM3kC3CricTisKPG4hEd18Zy77o2oKUF/7Q7fw+Px2EVNtoBFMDZP0h6Sx+UXOwaPJXgUk8ddeVxxGoSXIrWfx5R4fIvHohzePTw+4zGD8dhjeB4nr3kGizrlgfk4iuih9OJD3S6C9CVF5AVozAPaQ1SmY5E2j1dJS0FicBL1kVmIzm5B+c8g2cWz9vNExBNoHlfgAWn/2ydYPJbD82gPUTmN5DMenGoA7pkzHkcE5SUen0au+3jYq3F1Hsfg8aD7Pbk49vz/QPP4Hp6kMpjP6+RJR4NITQGSiTqYJ3yYB0wJek3yaA6PybMQGTyhxaMTnrCfx8M5nSKPa/GYlMf38Swv87hrdziCRzV5VJvH9/Ik7XkXj36FR115tq0inukDPDbliQ0eEImBHbeYJ/byOMQTGTzNLMQ38oTDeOK1O/K0sz9/MUmOOFisAf1gIpHmFpRCfaiovACDeUB78soOLpQ7Itoo8WyHlb1NWDk8BUinuaVzV8Rpynx9OHs1Lk8SLfIEBo+OlSxEDo9DmSB8HiraINfMzZt49C/w5FmITqU8iuAJ2SABY6JILY7Rqy6Kk4WYtAdVLvC0shAzngCOQ9dI1LmvEA7GY4XndZ7zLh6HeRTm8XUeuBjD5/EsHrpyDw9YZ63wKA5PICYcGBMCu3m29DRF8BSe9b9+1NZ59Ks8qsKT5W/v5tF8nvAWnmkfj74/A5Jd31OePM3Nbmc6te6ps1mFGg+Z5pa0B1cGD4tm46WvrJlnKzwaTnbYSppbSG7ubC/P2r8al2chFnlcncfgpxXyQ7DEY3p4TIknNHkskycOxGNqPIHigYk6JR5P8gTU/T57jKjMQ1SmeXwxzY3k8RuPzXhwos6wPKrJo4jH/pg8qodH7eYJ1PI1weNZPLGXZ9nJo1Mes5fHfYbHvJ/HwZzkPh5LPjHDWcteOMs9NI97RCY/Pwl8HpPxwHVWOBNQ4LG1LMStPUTl7IrT4IklHgV4dI3HJzOHv8Zj2jyBw6PrPJHmifjJoTJP9iRrgccQPLDbyzwGx/kkD7xj5PBwBsBssRS8K8AAnkjwZG9zAzvjswec0b0MxRPS1wgQWYiAJ6/ckYUYnslseVI5ML/Fom678oMgzv46D1izN/egdAfP9VOxxeNRYE2/YSjl0eQ7SJo81E66Bg94Q0iJxwzDkyS/eIonAB7wOiK3h8f38PgSj6vz5MtGjsWjEA/59hEez9zLE/p41Ht5XA+P28+jeDzpbY3v5eF0PJ8newubV8T1ncMD1qbYPBYlmWU8aXtwZS6Pgt1e5MkX6jCPKzzF/T6eleJxW3cokscVeDTMSfQZTzpRo0s8ocqjYH8FIkUCZiE6PD9k0RhKXkB0REmWmAdmKX6ax4K3mfn8qpnxwLe5YR5HLi0XeQw0xXopD65M8JgKjwM8RFq9inSiS7LWj3niR3ngq2f38Hi0HToLkXjhlEY5gBUeXUwYhKMpEU8ZdF2M1EMpN8bA47n9XwfPuocHvl8GnfcghSDnSa8M6fMHdB4VwUOnzRd4cGWahxhyNBp4I3zqgXgIJn8T3Ys8C4sQv6HfpjNXXqF3IXJ54AsgmTyGeiYo47GJOqzM5kkaV+VRYH6E5lFVnqlwSsy8MyzHUcnL414sNu76kP9QZbwszij61c6YOCPWSX7vyEFlYp0UIjM0zyS/XH4kHlRtFpmReaQcU07C83U88jvKhUeK8PwteVbpF+GRIjxfXmaZThMeKcLzj+GRbhEeKcLz7UUmDYRHivD8Y3hk0kB4pAjP35JHJg1GKZPwCI+Ud/JItwiPFOH5O/Kc373581d2ygi3F6eP8rz9hJzW3zxiUYg0NYOmfynVbOJpDJ6pmVVf3JOZbsT0YtsmxoFyqtyfT42o9trsZp1Lo4kNnrVyGix7dR7qU+Wb5sYF8IQPnYnT/Lnjwnqqbav64rTHTjbrXOqvkOrnmXmP/bbmI5YOnjN94DF48DHUwTNVN8Xh4dR5Lw/nhYk80gW2funmuXB4erdbO6a4HfE+nnPjCxfFP6XPPRe1n72dKkfy3HC/cHmyXeDzzPXjr82zfp7nPMFWnfbwsA6uSucshW0uvEOni726teVInnknYYtn5vCc+3imDp7zLp75hZ74VZ59b3Nj9BqXR73GA+q1zkr2hYzDc/oCnspJOVdvK5o8K/+byO0unScP2NJ7eNZ68L1+nifdSH6+zOWBZmrd9nSElQt7u9R0wYk8UuZm1y88ntqWPs9zgt80w+pz+Tpwqm331HVTttI9zzh5/t/enSQ4rOIAAIWFjqD7sOk9C7j/Vfp351eVwZow4OCE7CrxyLORLEgqVblNnMDj3slT76jctRc6Gu2xh/qgKXnTn3kSXzAcyOOH8WArj68/8+WukeeBCzyHdYCLMl5/7IHqvInSaHHgSF9xcFwGDntlGiHSbSReeX08yKY8sfgr8P1/ZDerrMNFNp0H69XOPS0e/yzP8vevYhkotgnHNc6NAC08l34L8bjRyHZ3XuholKIBuVJxosyVgxoPcVCnK7X4C6nPfngCAeKKz4j9YcMP6V3n8cS9gVYevMBTNJQXg0/U+jayXBKORxCpW+ln4aoLBqq/DMfTOT8AzOZB4jotyAw8waZOXcdIBh8wlnDJfC8eW4s5TX/kCTSPk3nKdWfxkM2Yz0c2icdL1cyo5G1RSLVfyyTuKsQDj2N4UOaBG3i8UO7kj8zME9l+SUzONR6g9lv3bsUWBJ7E8cApmUhi2WoCDwgFmx4esPIAFXw0HiQvquo0iSw7lXuoCGsef+qEkzRk4nt52K4mkJ2HzgP9PF4YCwgtfVvdu3nieSPVTV/speZxE3hyGw8TV47vXuLhU2MyALfxMIGtvBE9cdWWPKlq4VYenM7DTW3DJh7Xw4OZTZKDHHrYKmnQedwvT+I3i+/mAanaOYAn6+tAOw8yR3TiiVN5YDoPSndVD08283h+oDM0hZ7qRvTFBk7Niz/DjXFhnixVxlbl8XJfcChqWngCfzbwtwbDk0bymENPcddf4fFaf5pFSZlH3+v52qZ44lgeGM4DUjEhKV3JKB4cxlMEH6g1GB53mcfP5kG2FXBhHpQHmWw8cCdPvsYjVtN6eEAdAj8vG6w8/AEds0AoFmF50uo86WE8fLW1SDMsPCDzeHZAov7YyuNbeLwY9GMHD/IDtHfw5NchBANPXJcHxIa/i8c38oAwTaSJJ6zFk+yZwco8KAx0H3IDJIaeCZ4wjAefw/PPm/8Rk3mCJxp58rfwCL2E7+YBK4+7xBOlju9/n1p4kErnV+GRvontqykVbTz+jyeM5vGGtOE1PTwN4AkyT3gsj38zT1Z5asLFeITErZ8nzeIBcX7vX3tQPc/SPPE2HvjjiaN58Ft4UO4l+niiM/PgBR7ti37ByBPH8eQbeWyZEvCl1sglwL082cjTgqp3m4b1R/OoX9JYmCfKTbwaT1iNJ3Bn1MnjbTxxTR6w8/h5PIfZ/9nME0bw+A/jSQ/jsU2BY75HvjRPoI5mBs9rEBLeweM2TxtPGMuD38KDypc0unjSZB61kW7n8Y/heY0Re6lWkcUW7+DBzfNOnvwtPNlWNLjAg6/FrTy5nSepPGEpnrgsTzLypDE88FiehnGTbp4wicdvnm6efzdLR/EhPPFbeNwqPHEMD1PVmc8DT+H5mbls5PEtPPAtPDCdB4RiRRZ72Y/jSY/ncS08Qa2tTOfB/FCen4nl9JXex4Or8ECey2M54D4eb+MhSrMDeNKSPGieRzWP59+n0s2zNg/9XHpah6j9bZ7VeIKNJ6s8eA8P0sFCCSwr8OTytw41HmIbm0etLQ7gQVPGSByHyuM2z1Wev687m3j85nkvTxDXoWZ6fyNPNLf6KB6w84QP5wnL8ED9w9AyD/IdYGAraoba1+Zhg0sSqv91IwjZ3co8+QE8XEs08HihsvAonjyUxzfyWL4eUT2V0iPPVSOAMCb0QTxxQR5n4EFhPsJyPNJpP4Un11+sk3i8NNlq89zBk4VGAGmi71fxhHt4jr8wiCoP3Wqfx5NW4pHK/0UjMBOJN88SPNx89s2jTre8ygOnrJnk4YuBY3jSzTz+OTz1//SIMk/4Ap68Cg+e/ouRxuM2z608cfM8iSdtnnL82DzF2s4TjCdU3C2fxhPYmtu7eZydJ0jrPjo1cKvyWP+Hgm/nie084T086TpPvMQzfI61J+awfQMPPJgnjH4s1Xni5qFOCIj50wpP3jx38iSxrQ5vfRNPUniSPSHr4UEjT3D8Txd28eBH8YSpPPz3Ro+nFDfPjTxRTN+H8ESVJyzGk5UKzE08uYGH+208fZbo5rnOI6clQBztB/DgHJ44lsdvHqmq8yweLnVTeVJrifBxPHgnT6DX4XKDT+SJl3gG/5YobJ5rPHFBHi5143lw8/TwoLrzYh0mN1B5cuv4x3Ae7sDk3svOA9aqzrN4/OZp5+H+eSuTun0iT77GE4by5DYeJjfgedSj9lJXPpEnb55v4jFUF9t5vD7YVKzDpG4dPLAsT1iDJ8l5brkOnRvoPFFp4/A0nsDwpNE8Qa689vH45/LEJh43gwcy831yjodO3Tp4kG7jx/Lkt/LQnZXOkzbPBR7konwcxONsPGlBntTGg8bMeioPfTfoPLmtpvNgnvhOHrq5BR408cS7ebzOk9t4YALPecFTkaWD55+3tXvefxxPeisP2dxsdpyMPGFFniDx8Fscx+NZnsytQ97DAg9sni6eoAyPdfDkA09sa+IVeGITj8u21G0uD5m6CTzKg8/NPL//dH4iTxzGA+wD4V9T1+tQx0fzeAMPxzCPx373pDYetOUGK/FE7cHnZh64gScP40GeJ0rr1BbAjaGqPNzBPpAHbMGnjSdpAzBAx6JiBxKPmFmz/xBvEg/W44rKg88lnvgMnteXH+BbeHw2BZ8GHmo5qPZBZXvMtxjOPEEpdoDckQ/nqX8TWnvwMU8SLcp4M3m8wuP4edjhdCBBGVIA7qNH89DBB1p5vMCTb+HBe3l8G09s40E5+OQrPIG7CKQqNzPRN5ycgzKkwB7rEjypjQfE4OOL/8IzjwfYmaRnHm2cSpm+OJoHfo96Kg/ze0axkQckntDLAxVPZJMdtyhPbuPxWerd8iUetgtleTw7VZHmEVI3UPrx0Tw4lccpT0WpkQcv8Th2qmI4bYctomoIc3hyI0/AJh4Ueje8xMO22e8GeJ5g43FakTe+gQc7eaTmZWqxzZ0b3QCg8aCNJ9e/3RDsmcEcnkMqZOOJbTyeH+vGnJszN5EnsY1wDiYUjz/xRHtm8Ewex3Z+/u9Am3j4dErnSUYedpIEXHhe7eGBVp6E5pkgFQ/R0bfy+Is83sQDv0uwo/DIH+kUHpzNg8ztA4d3snbSWXwqras6RCNkZsA71PuKXC6hhZ55PK6FJ6O9YF3ng7Fu0djIA/LETp0nSDz5nCZFc+gx8WDr+rmZpymvLnu30y+0huNJ9/MEthFOzU3w+Ew8ZNgJcicPtb4fxxPlQyqbozj5Nh53hQeyMmT381asEs5gHfmYwgPjeJT+9niPVYkRCGddbhzFpLbqmZyUunF3WKzu+Wjt20w/C50beQ7pk5vTt0lTGOJgnsQ2wikVQyY+hfpatfZtvTzk+sd35vRthtFv5LdQ5WRK6SiRo3NkZ8UN0IV6hWjs28DA4xt5YBxPcLbejbjhBODypL1W2eMboWptYpnqNLKxyk3fwHJLWHnzOB79muFuOOnLnHgKUlIC8Wo5kHgS11D1XEZinFcEsMx5Qb12nNgSxZzQI2w4sINlzEmjEqFeHyLFg+VO62XOZQKfmXAVxWswGUKPNDAW2XdwTuhhe7ckJUnU44fXItT/N0kXZLDYqzd0AvVxesPUXpkHhJ4G1JbFOaGHbQximEku2KE8f7Zcih68zuWvj0s8WG5Gvj285UoVOhs9vTUOxzWHHrY1yAOLll4xCqft6eMqLgKwnIcv3kVz4Vd7wm4608NyflLoYbac1BND273qLZfNcSFvu8zQfqJo4IFLZ3pYblLoYXYfVuRJ2nbD7TzB9Qef4Fpvn+Ru5XHtPNT+k+3yCzN4YFLoIfcfaJ4wnydZebz5MryFx08KPdSmk7uZB9t5zgeQ3Bt53KzQQxycW5MnyheVewOPbame0HPeduzjce08cIGnbtLwUB5neDGdxFwe18dTHkJ0I3lCMw/MCj3ClCpTuhqb4lqwBMJgOmamBkEulQzdu5T5ueYAPiz0cDX69V/QeJIzX/NCz4HfPey1ziWF80LPfg28kyeEnv3qfvmZoWe/3hN8wm63lYPPbraVg88OPUsHnx16lg4+O/QsHXx2o60cfHboWTr47NCzdPDZoWfp4LObbOXgs/u2pYPP7tuW5tkttnJusNPqpXODHXqWzg126Fk6+Oz2Wjn47NCzdPDZoWfp4LNb667XfwFKEUqU7L4uJgAAAABJRU5ErkJggg==",
                                            alt: "",
                                            className: "school1__logo"
                                        }), (0, l.jsxs)("div", {
                                            className: "qualification__calendar",
                                            children: [(0, l.jsx)("i", {
                                                className: "uil uil-calendar-alt"
                                            }), " 2022 - 2024"]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("span", {
                                            className: "qualification__rounder"
                                        }), (0, l.jsx)("span", {
                                            className: "qualification__line"
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "qualification__data",
                                    children: [(0, l.jsx)("div", {}), (0, l.jsx)("div", {
                                        children: (0, l.jsx)("span", {
                                            className: "qualification__rounder"
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "Box",
                                        children: [(0, l.jsx)("h3", {
                                            className: "qualification__title",
                                            children: "Electronics and Communication Engineering, B. Tech."
                                        }), (0, l.jsx)("img", {
                                            src: _,
                                            alt: "",
                                            className: "school2__logo"
                                        }), (0, l.jsxs)("div", {
                                            className: "qualification__calendar",
                                            children: [(0, l.jsx)("i", {
                                                className: "uil uil-calendar-alt"
                                            }), " 2017 - 2021"]
                                        })]
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: 1 === t ? "qualification__content qualification__content-active" : "qualification__content ",
                                children: [(0, l.jsxs)("div", {
                                    className: "qualification__data",
                                    children: [(0, l.jsxs)("div", {
                                        className: "Box",
                                        children: [(0, l.jsx)("h3", {
                                            className: "qualification__title",
                                            children: "Data Analyst Intern"
                                        }), (0, l.jsx)("img", {
                                            src: w,
                                            alt: "",
                                            className: "company__logo"
                                        }), (0, l.jsxs)("div", {
                                            className: "qualification__calendar",
                                            children: [(0, l.jsx)("i", {
                                                className: "uil uil-calendar-alt"
                                            }), "2024 - Present"]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("span", {
                                            className: "qualification__rounder"
                                        }), (0, l.jsx)("span", {
                                            className: "qualification__line"
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "qualification__data",
                                    children: [(0, l.jsx)("div", {}), (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("span", {
                                            className: "qualification__rounder"
                                        }), (0, l.jsx)("span", {
                                            className: "qualification__line"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "Box",
                                        children: [(0, l.jsx)("h3", {
                                            className: "qualification__title",
                                            children: "Graduate Research Assistant"
                                        }), (0, l.jsx)("img", {
                                            src: k,
                                            alt: "",
                                            className: "company__logo"
                                        }), (0, l.jsxs)("div", {
                                            className: "qualification__calendar",
                                            children: [(0, l.jsx)("i", {
                                                className: "uil uil-calendar-alt"
                                            }), " 2023 - 2024"]
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "qualification__data",
                                    children: [(0, l.jsxs)("div", {
                                        className: "Box",
                                        children: [(0, l.jsx)("h3", {
                                            className: "qualification__title",
                                            children: "Data Analyst"
                                        }), (0, l.jsx)("img", {
                                            src: S,
                                            alt: "",
                                            className: "company__logo"
                                        }), (0, l.jsxs)("div", {
                                            className: "qualification__calendar",
                                            children: [(0, l.jsx)("i", {
                                                className: "uil uil-calendar-alt"
                                            }), " 2021 - 2022"]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("span", {
                                            className: "qualification__rounder"
                                        }), (0, l.jsx)("span", {
                                            className: "qualification__line"
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "qualification__data",
                                    children: [(0, l.jsx)("div", {}), (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("span", {
                                            className: "qualification__rounder"
                                        }), (0, l.jsx)("span", {
                                            className: "qualification__line"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "Box",
                                        children: [(0, l.jsx)("h3", {
                                            className: "qualification__title",
                                            children: "Data Science Intern"
                                        }), (0, l.jsx)("img", {
                                            src: t196,
                                            alt: "",
                                            className: "company__logo"
                                        }), (0, l.jsxs)("div", {
                                            className: "qualification__calendar",
                                            children: [(0, l.jsx)("i", {
                                                className: "uil uil-calendar-alt"
                                            }), " 2020 - 2021"]
                                        })]
                                    })]
                                
                                /* (0, l.jsxs)("div", {
                                    className: "qualification__data",
                                    children: [(0, l.jsx)("div", {}), (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("span", {
                                            className: "qualification__rounder"
                                        }), (0, l.jsx)("span", {
                                            className: "qualification__line"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "Box",
                                        children: [(0, l.jsx)("h3", {
                                            className: "qualification__title",
                                            children: "Data Science Intern"
                                        }), (0, l.jsx)("img", {
                                            src: S,
                                            alt: "",
                                            className: "company__logo"
                                        }), (0, l.jsxs)("div", {
                                            className: "qualification__calendar",
                                            children: [(0, l.jsx)("i", {
                                                className: "uil uil-calendar-alt"
                                            }), "2020 - 2021"]
                                        })]
                                    })]
                                } ),*//*(0, l.jsxs)("div", {
                                    className: "qualification__data",
                                    children: [(0, l.jsxs)("div", {
                                        className: "Box",
                                        children: [(0, l.jsx)("h3", {
                                            className: "qualification__title",
                                            children: "Machine Learning Intern"
                                        }), (0, l.jsx)("span", {
                                            className: "qualification__subtitle",
                                            children: "Flutura Decision Sciences"
                                        }), (0, l.jsxs)("div", {
                                            className: "qualification__calendar",
                                            children: [(0, l.jsx)("i", {
                                                className: "uil uil-calendar-alt"
                                            }), "2019 - 2019"]
                                        })]
                                    }), (0, l.jsx)("div", {
                                        children: (0, l.jsx)("span", {
                                            className: "qualification__rounder"
                                        })
                                    })]
                                    */
                                })]
                            })]
                        })]
                    })]
                })
            },
            C = [{
                id: 1,
                image: n.p + "static/media/proj1.c111cc25cf091b9029d8.png",
                title: "Trend of Corona Virus",
                description: "This time series forecasting model, built during the peak of the 2020 pandemic, provides daily predictions for new COVID-19 cases, recoveries, and fatalities in India. By analyzing real-time data, this project aids in visualizing trends and potential outbreaks, serving as an early-warning system for public health responses. "
            }, {
                id: 2,
                image: n.p + "static/media/proj1_trading.c387326efdc76059c543.png",
                title: "Customer Segmentation and Strategic Business Analytics",
                description: "Using cluster and regression analysis on retail data, this project enabled targeted customer insights, boosting customer lifetime value by 30%. Built with R, it identifies behavioral patterns and demographic insights, empowering data-driven decision-making to optimize marketing strategies and customer engagement."
            }, {
                id: 3,
                image: n.p + "static/media/proj2_infovis.548470eff2c28bcfd79a.png",
                title: "Sucide Data Analysis",
                description: "Leveraging global suicide data, this project delivers powerful insights into mental health trends across regions. Through dynamic dashboards in both Tableau and Streamlit, it visualizes critical factors affecting suicide rates, offering a data-driven perspective on a global crisis, from demographic breakdowns to potential interventions."
            }, {
                id: 4,
                image: n.p + "static/media/proj5_cv.1117be663e31fe8cddb5.png",
                title: "Bank Marketing Data Analysis",
                description: "Using the Bank Marketing dataset, this project explores factors influencing client subscription to term deposits. Through EDA and three predictive models (Logistic Regression, Random Forest, and Deep Neural Network), it offers actionable insights on customer targeting, delivering a competitive edge in strategic banking decisions."
            }, {
                id: 5,
                image: n.p + "static/media/proj3_dataanal.cc4eedf110a0fe16fd74.png",
                title: "Data Analysis (CIFAR-10)",
                description: "This project explores insights within the CIFAR-10 dataset. Through statistical analysis and visualization, it uncovers patterns and trends in labeled images, contributing valuable insights for computer vision and machine learning applications."
            }, {
                id: 6,
                image: n.p + "static/media/proj4_airquality.01c02212bebd1b1bb50b.png",
                title: "Air Quality Analysis",
                description: "Air Quality Analysis is a Python project utilizing Matplotlib, Seaborn, Plotly, NumPy, and SciPy for comprehensive analysis of air quality data. Through visualization and statistical methods, it offers insights into air pollution trends."
            }];

        function j(e) {
            return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
        }

        function T(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((n => {
                "undefined" === typeof e[n] ? e[n] = t[n] : j(t[n]) && j(e[n]) && Object.keys(t[n]).length > 0 && T(e[n], t[n])
            }))
        }
        const N = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function P() {
            const e = "undefined" !== typeof document ? document : {};
            return T(e, N), e
        }
        const z = {
            document: N,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" !== typeof setTimeout && clearTimeout(e)
            }
        };

        function L() {
            const e = "undefined" !== typeof window ? window : {};
            return T(e, z), e
        }

        function M(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function O() {
            return Date.now()
        }

        function I(e, t) {
            void 0 === t && (t = "x");
            const n = L();
            let r, a, i;
            const l = function(e) {
                const t = L();
                let n;
                return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
            }(e);
            return n.WebKitCSSMatrix ? (a = l.transform || l.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")), i = new n.WebKitCSSMatrix("none" === a ? "" : a)) : (i = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = i.toString().split(",")), "x" === t && (a = n.WebKitCSSMatrix ? i.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (a = n.WebKitCSSMatrix ? i.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), a || 0
        }

        function D(e) {
            return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function A() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < arguments.length; r += 1) {
                const a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                if (void 0 !== a && null !== a && (n = a, !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                    const n = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, r = n.length; t < r; t += 1) {
                        const r = n[t],
                            i = Object.getOwnPropertyDescriptor(a, r);
                        void 0 !== i && i.enumerable && (D(e[r]) && D(a[r]) ? a[r].__swiper__ ? e[r] = a[r] : A(e[r], a[r]) : !D(e[r]) && D(a[r]) ? (e[r] = {}, a[r].__swiper__ ? e[r] = a[r] : A(e[r], a[r])) : e[r] = a[r])
                    }
                }
            }
            var n;
            return e
        }

        function F(e, t, n) {
            e.style.setProperty(t, n)
        }

        function R(e) {
            let {
                swiper: t,
                targetPosition: n,
                side: r
            } = e;
            const a = L(),
                i = -t.translate;
            let l, s = null;
            const o = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(t.cssModeFrameID);
            const c = n > i ? "next" : "prev",
                u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                d = () => {
                    l = (new Date).getTime(), null === s && (s = l);
                    const e = Math.max(Math.min((l - s) / o, 1), 0),
                        c = .5 - Math.cos(e * Math.PI) / 2;
                    let f = i + c * (n - i);
                    if (u(f, n) && (f = n), t.wrapperEl.scrollTo({
                            [r]: f
                        }), u(f, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                            [r]: f
                        })
                    })), void a.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = a.requestAnimationFrame(d)
                };
            d()
        }

        function H(e, t) {
            return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
        }

        function B(e) {
            try {
                return void console.warn(e)
            } catch (t) {}
        }

        function V(e, t) {
            void 0 === t && (t = []);
            const n = document.createElement(e);
            return n.classList.add(...Array.isArray(t) ? t : function(e) {
                return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
            }(t)), n
        }

        function G(e, t) {
            return L().getComputedStyle(e, null).getPropertyValue(t)
        }

        function q(e) {
            let t, n = e;
            if (n) {
                for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
                return t
            }
        }

        function U(e, t) {
            const n = [];
            let r = e.parentElement;
            for (; r;) t ? r.matches(t) && n.push(r) : n.push(r), r = r.parentElement;
            return n
        }

        function W(e, t, n) {
            const r = L();
            return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }

        function Y(e) {
            return (Array.isArray(e) ? e : [e]).filter((e => !!e))
        }
        let Q, X, J;

        function Z() {
            return Q || (Q = function() {
                const e = L(),
                    t = P();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()), Q
        }

        function K(e) {
            return void 0 === e && (e = {}), X || (X = function(e) {
                let {
                    userAgent: t
                } = void 0 === e ? {} : e;
                const n = Z(),
                    r = L(),
                    a = r.navigator.platform,
                    i = t || r.navigator.userAgent,
                    l = {
                        ios: !1,
                        android: !1
                    },
                    s = r.screen.width,
                    o = r.screen.height,
                    c = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                let u = i.match(/(iPad).*OS\s([\d_]+)/);
                const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                    f = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    p = "Win32" === a;
                let m = "MacIntel" === a;
                return !u && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(s, "x").concat(o)) >= 0 && (u = i.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), m = !1), c && !p && (l.os = "android", l.android = !0), (u || f || d) && (l.os = "ios", l.ios = !0), l
            }(e)), X
        }

        function $() {
            return J || (J = function() {
                const e = L(),
                    t = K();
                let n = !1;

                function r() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }
                if (r()) {
                    const t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                        const [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                        n = e < 16 || 16 === e && r < 2
                    }
                }
                const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                    i = r();
                return {
                    isSafari: n || i,
                    needPerspectiveFix: n,
                    need3dFix: i || a && t.ios,
                    isWebView: a
                }
            }()), J
        }
        var ee = {
            on(e, t, n) {
                const r = this;
                if (!r.eventsListeners || r.destroyed) return r;
                if ("function" !== typeof t) return r;
                const a = n ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](t)
                })), r
            },
            once(e, t, n) {
                const r = this;
                if (!r.eventsListeners || r.destroyed) return r;
                if ("function" !== typeof t) return r;

                function a() {
                    r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                    for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l];
                    t.apply(r, i)
                }
                return a.__emitterProxy = t, r.on(e, a, n)
            },
            onAny(e, t) {
                const n = this;
                if (!n.eventsListeners || n.destroyed) return n;
                if ("function" !== typeof e) return n;
                const r = t ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const n = t.eventsAnyListeners.indexOf(e);
                return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
            },
            off(e, t) {
                const n = this;
                return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
                    "undefined" === typeof t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((r, a) => {
                        (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(a, 1)
                    }))
                })), n) : n
            },
            emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, n, r;
                for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                "string" === typeof i[0] || Array.isArray(i[0]) ? (t = i[0], n = i.slice(1, i.length), r = e) : (t = i[0].events, n = i[0].data, r = i[0].context || e), n.unshift(r);
                return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(r, [t, ...n])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(r, n)
                    }))
                })), e
            }
        };
        const te = (e, t, n) => {
            t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
        };
        const ne = (e, t) => {
                if (!e || e.destroyed || !e.params) return;
                const n = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
                if (n) {
                    let t = n.querySelector(".".concat(e.params.lazyPreloaderClass));
                    !t && e.isElement && (n.shadowRoot ? t = n.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)) : requestAnimationFrame((() => {
                        n.shadowRoot && (t = n.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)), t && t.remove())
                    }))), t && t.remove()
                }
            },
            re = (e, t) => {
                if (!e.slides[t]) return;
                const n = e.slides[t].querySelector('[loading="lazy"]');
                n && n.removeAttribute("loading")
            },
            ae = e => {
                if (!e || e.destroyed || !e.params) return;
                let t = e.params.lazyPreloadPrevNext;
                const n = e.slides.length;
                if (!n || !t || t < 0) return;
                t = Math.min(t, n);
                const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                    a = e.activeIndex;
                if (e.params.grid && e.params.grid.rows > 1) {
                    const n = a,
                        i = [n - t];
                    return i.push(...Array.from({
                        length: t
                    }).map(((e, t) => n + r + t))), void e.slides.forEach(((t, n) => {
                        i.includes(t.column) && re(e, n)
                    }))
                }
                const i = a + r - 1;
                if (e.params.rewind || e.params.loop)
                    for (let l = a - t; l <= i + t; l += 1) {
                        const t = (l % n + n) % n;
                        (t < a || t > i) && re(e, t)
                    } else
                        for (let l = Math.max(a - t, 0); l <= Math.min(i + t, n - 1); l += 1) l !== a && (l > i || l < a) && re(e, l)
            };
        var ie = {
            updateSize: function() {
                const e = this;
                let t, n;
                const r = e.el;
                t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, n = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(G(r, "padding-left") || 0, 10) - parseInt(G(r, "padding-right") || 0, 10), n = n - parseInt(G(r, "padding-top") || 0, 10) - parseInt(G(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            },
            updateSlides: function() {
                const e = this;

                function t(t, n) {
                    return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0)
                }
                const n = e.params,
                    {
                        wrapperEl: r,
                        slidesEl: a,
                        size: i,
                        rtlTranslate: l,
                        wrongRTL: s
                    } = e,
                    o = e.virtual && n.virtual.enabled,
                    c = o ? e.virtual.slides.length : e.slides.length,
                    u = H(a, ".".concat(e.params.slideClass, ", swiper-slide")),
                    d = o ? e.virtual.slides.length : u.length;
                let f = [];
                const p = [],
                    m = [];
                let h = n.slidesOffsetBefore;
                "function" === typeof h && (h = n.slidesOffsetBefore.call(e));
                let v = n.slidesOffsetAfter;
                "function" === typeof v && (v = n.slidesOffsetAfter.call(e));
                const g = e.snapGrid.length,
                    y = e.slidesGrid.length;
                let b = n.spaceBetween,
                    x = -h,
                    w = 0,
                    S = 0;
                if ("undefined" === typeof i) return;
                "string" === typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * i : "string" === typeof b && (b = parseFloat(b)), e.virtualSize = -b, u.forEach((e => {
                    l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), n.centeredSlides && n.cssMode && (F(r, "--swiper-centered-offset-before", ""), F(r, "--swiper-centered-offset-after", ""));
                const k = n.grid && n.grid.rows > 1 && e.grid;
                let _;
                k ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
                const E = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => "undefined" !== typeof n.breakpoints[e].slidesPerView)).length > 0;
                for (let C = 0; C < d; C += 1) {
                    let r;
                    if (_ = 0, u[C] && (r = u[C]), k && e.grid.updateSlide(C, r, u), !u[C] || "none" !== G(r, "display")) {
                        if ("auto" === n.slidesPerView) {
                            E && (u[C].style[e.getDirectionLabel("width")] = "");
                            const a = getComputedStyle(r),
                                i = r.style.transform,
                                l = r.style.webkitTransform;
                            if (i && (r.style.transform = "none"), l && (r.style.webkitTransform = "none"), n.roundLengths) _ = e.isHorizontal() ? W(r, "width", !0) : W(r, "height", !0);
                            else {
                                const e = t(a, "width"),
                                    n = t(a, "padding-left"),
                                    i = t(a, "padding-right"),
                                    l = t(a, "margin-left"),
                                    s = t(a, "margin-right"),
                                    o = a.getPropertyValue("box-sizing");
                                if (o && "border-box" === o) _ = e + l + s;
                                else {
                                    const {
                                        clientWidth: t,
                                        offsetWidth: a
                                    } = r;
                                    _ = e + n + i + l + s + (a - t)
                                }
                            }
                            i && (r.style.transform = i), l && (r.style.webkitTransform = l), n.roundLengths && (_ = Math.floor(_))
                        } else _ = (i - (n.slidesPerView - 1) * b) / n.slidesPerView, n.roundLengths && (_ = Math.floor(_)), u[C] && (u[C].style[e.getDirectionLabel("width")] = "".concat(_, "px"));
                        u[C] && (u[C].swiperSlideSize = _), m.push(_), n.centeredSlides ? (x = x + _ / 2 + w / 2 + b, 0 === w && 0 !== C && (x = x - i / 2 - b), 0 === C && (x = x - i / 2 - b), Math.abs(x) < .001 && (x = 0), n.roundLengths && (x = Math.floor(x)), S % n.slidesPerGroup === 0 && f.push(x), p.push(x)) : (n.roundLengths && (x = Math.floor(x)), (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup === 0 && f.push(x), p.push(x), x = x + _ + b), e.virtualSize += _ + b, w = _, S += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v, l && s && ("slide" === n.effect || "coverflow" === n.effect) && (r.style.width = "".concat(e.virtualSize + b, "px")), n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = "".concat(e.virtualSize + b, "px")), k && e.grid.updateWrapperSize(_, f), !n.centeredSlides) {
                    const t = [];
                    for (let r = 0; r < f.length; r += 1) {
                        let a = f[r];
                        n.roundLengths && (a = Math.floor(a)), f[r] <= e.virtualSize - i && t.push(a)
                    }
                    f = t, Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - i)
                }
                if (o && n.loop) {
                    const t = m[0] + b;
                    if (n.slidesPerGroup > 1) {
                        const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                            a = t * n.slidesPerGroup;
                        for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + a)
                    }
                    for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === n.slidesPerGroup && f.push(f[f.length - 1] + t), p.push(p[p.length - 1] + t), e.virtualSize += t
                }
                if (0 === f.length && (f = [0]), 0 !== b) {
                    const t = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
                    u.filter(((e, t) => !(n.cssMode && !n.loop) || t !== u.length - 1)).forEach((e => {
                        e.style[t] = "".concat(b, "px")
                    }))
                }
                if (n.centeredSlides && n.centeredSlidesBounds) {
                    let e = 0;
                    m.forEach((t => {
                        e += t + (b || 0)
                    })), e -= b;
                    const t = e - i;
                    f = f.map((e => e <= 0 ? -h : e > t ? t + v : e))
                }
                if (n.centerInsufficientSlides) {
                    let e = 0;
                    if (m.forEach((t => {
                            e += t + (b || 0)
                        })), e -= b, e < i) {
                        const t = (i - e) / 2;
                        f.forEach(((e, n) => {
                            f[n] = e - t
                        })), p.forEach(((e, n) => {
                            p[n] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                        slides: u,
                        snapGrid: f,
                        slidesGrid: p,
                        slidesSizesGrid: m
                    }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                    F(r, "--swiper-centered-offset-before", "".concat(-f[0], "px")), F(r, "--swiper-centered-offset-after", "".concat(e.size / 2 - m[m.length - 1] / 2, "px"));
                    const t = -e.snapGrid[0],
                        n = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                }
                if (d !== c && e.emit("slidesLengthChange"), f.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== y && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !o && !n.cssMode && ("slide" === n.effect || "fade" === n.effect)) {
                    const t = "".concat(n.containerModifierClass, "backface-hidden"),
                        r = e.el.classList.contains(t);
                    d <= n.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
                }
            },
            updateAutoHeight: function(e) {
                const t = this,
                    n = [],
                    r = t.virtual && t.params.virtual.enabled;
                let a, i = 0;
                "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const l = e => r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                        n.push(e)
                    }));
                    else
                        for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                            const e = t.activeIndex + a;
                            if (e > t.slides.length && !r) break;
                            n.push(l(e))
                        } else n.push(l(t.activeIndex));
                for (a = 0; a < n.length; a += 1)
                    if ("undefined" !== typeof n[a]) {
                        const e = n[a].offsetHeight;
                        i = e > i ? e : i
                    }(i || 0 === i) && (t.wrapperEl.style.height = "".concat(i, "px"))
            },
            updateSlidesOffset: function() {
                const e = this,
                    t = e.slides,
                    n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this,
                    n = t.params,
                    {
                        slides: r,
                        rtlTranslate: a,
                        snapGrid: i
                    } = t;
                if (0 === r.length) return;
                "undefined" === typeof r[0].swiperSlideOffset && t.updateSlidesOffset();
                let l = -e;
                a && (l = e), r.forEach((e => {
                    e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass)
                })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let s = n.spaceBetween;
                "string" === typeof s && s.indexOf("%") >= 0 ? s = parseFloat(s.replace("%", "")) / 100 * t.size : "string" === typeof s && (s = parseFloat(s));
                for (let o = 0; o < r.length; o += 1) {
                    const e = r[o];
                    let c = e.swiperSlideOffset;
                    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
                    const u = (l + (n.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + s),
                        d = (l - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + s),
                        f = -(l - c),
                        p = f + t.slidesSizesGrid[o],
                        m = f >= 0 && f <= t.size - t.slidesSizesGrid[o];
                    (f >= 0 && f < t.size - 1 || p > 1 && p <= t.size || f <= 0 && p >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o), r[o].classList.add(n.slideVisibleClass)), m && r[o].classList.add(n.slideFullyVisibleClass), e.progress = a ? -u : u, e.originalProgress = a ? -d : d
                }
            },
            updateProgress: function(e) {
                const t = this;
                if ("undefined" === typeof e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params,
                    r = t.maxTranslate() - t.minTranslate();
                let {
                    progress: a,
                    isBeginning: i,
                    isEnd: l,
                    progressLoop: s
                } = t;
                const o = i,
                    c = l;
                if (0 === r) a = 0, i = !0, l = !0;
                else {
                    a = (e - t.minTranslate()) / r;
                    const n = Math.abs(e - t.minTranslate()) < 1,
                        s = Math.abs(e - t.maxTranslate()) < 1;
                    i = n || a <= 0, l = s || a >= 1, n && (a = 0), s && (a = 1)
                }
                if (n.loop) {
                    const n = t.getSlideIndexByData(0),
                        r = t.getSlideIndexByData(t.slides.length - 1),
                        a = t.slidesGrid[n],
                        i = t.slidesGrid[r],
                        l = t.slidesGrid[t.slidesGrid.length - 1],
                        o = Math.abs(e);
                    s = o >= a ? (o - a) / l : (o + l - i) / l, s > 1 && (s -= 1)
                }
                Object.assign(t, {
                    progress: a,
                    progressLoop: s,
                    isBeginning: i,
                    isEnd: l
                }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), i && !o && t.emit("reachBeginning toEdge"), l && !c && t.emit("reachEnd toEdge"), (o && !i || c && !l) && t.emit("fromEdge"), t.emit("progress", a)
            },
            updateSlidesClasses: function() {
                const e = this,
                    {
                        slides: t,
                        params: n,
                        slidesEl: r,
                        activeIndex: a
                    } = e,
                    i = e.virtual && n.virtual.enabled,
                    l = e.grid && n.grid && n.grid.rows > 1,
                    s = e => H(r, ".".concat(n.slideClass).concat(e, ", swiper-slide").concat(e))[0];
                let o, c, u;
                if (i)
                    if (n.loop) {
                        let t = a - e.virtual.slidesBefore;
                        t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = s('[data-swiper-slide-index="'.concat(t, '"]'))
                    } else o = s('[data-swiper-slide-index="'.concat(a, '"]'));
                else l ? (o = t.filter((e => e.column === a))[0], u = t.filter((e => e.column === a + 1))[0], c = t.filter((e => e.column === a - 1))[0]) : o = t[a];
                o && (l || (u = function(e, t) {
                    const n = [];
                    for (; e.nextElementSibling;) {
                        const r = e.nextElementSibling;
                        t ? r.matches(t) && n.push(r) : n.push(r), e = r
                    }
                    return n
                }(o, ".".concat(n.slideClass, ", swiper-slide"))[0], n.loop && !u && (u = t[0]), c = function(e, t) {
                    const n = [];
                    for (; e.previousElementSibling;) {
                        const r = e.previousElementSibling;
                        t ? r.matches(t) && n.push(r) : n.push(r), e = r
                    }
                    return n
                }(o, ".".concat(n.slideClass, ", swiper-slide"))[0], n.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach((e => {
                    te(e, e === o, n.slideActiveClass), te(e, e === u, n.slideNextClass), te(e, e === c, n.slidePrevClass)
                })), e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this,
                    n = t.rtlTranslate ? t.translate : -t.translate,
                    {
                        snapGrid: r,
                        params: a,
                        activeIndex: i,
                        realIndex: l,
                        snapIndex: s
                    } = t;
                let o, c = e;
                const u = e => {
                    let n = e - t.virtual.slidesBefore;
                    return n < 0 && (n = t.virtual.slides.length + n), n >= t.virtual.slides.length && (n -= t.virtual.slides.length), n
                };
                if ("undefined" === typeof c && (c = function(e) {
                        const {
                            slidesGrid: t,
                            params: n
                        } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                        let a;
                        for (let i = 0; i < t.length; i += 1) "undefined" !== typeof t[i + 1] ? r >= t[i] && r < t[i + 1] - (t[i + 1] - t[i]) / 2 ? a = i : r >= t[i] && r < t[i + 1] && (a = i + 1) : r >= t[i] && (a = i);
                        return n.normalizeSlideIndex && (a < 0 || "undefined" === typeof a) && (a = 0), a
                    }(t)), r.indexOf(n) >= 0) o = r.indexOf(n);
                else {
                    const e = Math.min(a.slidesPerGroupSkip, c);
                    o = e + Math.floor((c - e) / a.slidesPerGroup)
                }
                if (o >= r.length && (o = r.length - 1), c === i && !t.params.loop) return void(o !== s && (t.snapIndex = o, t.emit("snapIndexChange")));
                if (c === i && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = u(c));
                const d = t.grid && a.grid && a.grid.rows > 1;
                let f;
                if (t.virtual && a.virtual.enabled && a.loop) f = u(c);
                else if (d) {
                    const e = t.slides.filter((e => e.column === c))[0];
                    let n = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                    Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)), f = Math.floor(n / a.grid.rows)
                } else if (t.slides[c]) {
                    const e = t.slides[c].getAttribute("data-swiper-slide-index");
                    f = e ? parseInt(e, 10) : c
                } else f = c;
                Object.assign(t, {
                    previousSnapIndex: s,
                    snapIndex: o,
                    previousRealIndex: l,
                    realIndex: f,
                    previousIndex: i,
                    activeIndex: c
                }), t.initialized && ae(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (l !== f && t.emit("realIndexChange"), t.emit("slideChange"))
            },
            updateClickedSlide: function(e, t) {
                const n = this,
                    r = n.params;
                let a = e.closest(".".concat(r.slideClass, ", swiper-slide"));
                !a && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                    !a && e.matches && e.matches(".".concat(r.slideClass, ", swiper-slide")) && (a = e)
                }));
                let i, l = !1;
                if (a)
                    for (let s = 0; s < n.slides.length; s += 1)
                        if (n.slides[s] === a) {
                            l = !0, i = s;
                            break
                        } if (!a || !l) return n.clickedSlide = void 0, void(n.clickedIndex = void 0);
                n.clickedSlide = a, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = i, r.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
            }
        };
        var le = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const {
                    params: t,
                    rtlTranslate: n,
                    translate: r,
                    wrapperEl: a
                } = this;
                if (t.virtualTranslate) return n ? -r : r;
                if (t.cssMode) return r;
                let i = I(a, e);
                return i += this.cssOverflowAdjustment(), n && (i = -i), i || 0
            },
            setTranslate: function(e, t) {
                const n = this,
                    {
                        rtlTranslate: r,
                        params: a,
                        wrapperEl: i,
                        progress: l
                    } = n;
                let s, o = 0,
                    c = 0;
                n.isHorizontal() ? o = r ? -e : e : c = e, a.roundLengths && (o = Math.floor(o), c = Math.floor(c)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? o : c, a.cssMode ? i[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -o : -c : a.virtualTranslate || (n.isHorizontal() ? o -= n.cssOverflowAdjustment() : c -= n.cssOverflowAdjustment(), i.style.transform = "translate3d(".concat(o, "px, ").concat(c, "px, ").concat(0, "px)"));
                const u = n.maxTranslate() - n.minTranslate();
                s = 0 === u ? 0 : (e - n.minTranslate()) / u, s !== l && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, n, r, a) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = !0);
                const i = this,
                    {
                        params: l,
                        wrapperEl: s
                    } = i;
                if (i.animating && l.preventInteractionOnTransition) return !1;
                const o = i.minTranslate(),
                    c = i.maxTranslate();
                let u;
                if (u = r && e > o ? o : r && e < c ? c : e, i.updateProgress(u), l.cssMode) {
                    const e = i.isHorizontal();
                    if (0 === t) s[e ? "scrollLeft" : "scrollTop"] = -u;
                    else {
                        if (!i.support.smoothScroll) return R({
                            swiper: i,
                            targetPosition: -u,
                            side: e ? "left" : "top"
                        }), !0;
                        s.scrollTo({
                            [e ? "left" : "top"]: -u,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (i.setTransition(0), i.setTranslate(u), n && (i.emit("beforeTransitionStart", t, a), i.emit("transitionEnd"))) : (i.setTransition(t), i.setTranslate(u), n && (i.emit("beforeTransitionStart", t, a), i.emit("transitionStart")), i.animating || (i.animating = !0, i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function(e) {
                    i && !i.destroyed && e.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.onTranslateToWrapperTransitionEnd = null, delete i.onTranslateToWrapperTransitionEnd, i.animating = !1, n && i.emit("transitionEnd"))
                }), i.wrapperEl.addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd))), !0
            }
        };

        function se(e) {
            let {
                swiper: t,
                runCallbacks: n,
                direction: r,
                step: a
            } = e;
            const {
                activeIndex: i,
                previousIndex: l
            } = t;
            let s = r;
            if (s || (s = i > l ? "next" : i < l ? "prev" : "reset"), t.emit("transition".concat(a)), n && i !== l) {
                if ("reset" === s) return void t.emit("slideResetTransition".concat(a));
                t.emit("slideChangeTransition".concat(a)), "next" === s ? t.emit("slideNextTransition".concat(a)) : t.emit("slidePrevTransition".concat(a))
            }
        }
        var oe = {
            setTransition: function(e, t) {
                const n = this;
                n.params.cssMode || (n.wrapperEl.style.transitionDuration = "".concat(e, "ms"), n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), n.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                const n = this,
                    {
                        params: r
                    } = n;
                r.cssMode || (r.autoHeight && n.updateAutoHeight(), se({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                const n = this,
                    {
                        params: r
                    } = n;
                n.animating = !1, r.cssMode || (n.setTransition(0), se({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        };
        var ce = {
            slideTo: function(e, t, n, r, a) {
                void 0 === e && (e = 0), void 0 === n && (n = !0), "string" === typeof e && (e = parseInt(e, 10));
                const i = this;
                let l = e;
                l < 0 && (l = 0);
                const {
                    params: s,
                    snapGrid: o,
                    slidesGrid: c,
                    previousIndex: u,
                    activeIndex: d,
                    rtlTranslate: f,
                    wrapperEl: p,
                    enabled: m
                } = i;
                if (!m && !r && !a || i.destroyed || i.animating && s.preventInteractionOnTransition) return !1;
                "undefined" === typeof t && (t = i.params.speed);
                const h = Math.min(i.params.slidesPerGroupSkip, l);
                let v = h + Math.floor((l - h) / i.params.slidesPerGroup);
                v >= o.length && (v = o.length - 1);
                const g = -o[v];
                if (s.normalizeSlideIndex)
                    for (let b = 0; b < c.length; b += 1) {
                        const e = -Math.floor(100 * g),
                            t = Math.floor(100 * c[b]),
                            n = Math.floor(100 * c[b + 1]);
                        "undefined" !== typeof c[b + 1] ? e >= t && e < n - (n - t) / 2 ? l = b : e >= t && e < n && (l = b + 1) : e >= t && (l = b)
                    }
                if (i.initialized && l !== d) {
                    if (!i.allowSlideNext && (f ? g > i.translate && g > i.minTranslate() : g < i.translate && g < i.minTranslate())) return !1;
                    if (!i.allowSlidePrev && g > i.translate && g > i.maxTranslate() && (d || 0) !== l) return !1
                }
                let y;
                if (l !== (u || 0) && n && i.emit("beforeSlideChangeStart"), i.updateProgress(g), y = l > d ? "next" : l < d ? "prev" : "reset", f && -g === i.translate || !f && g === i.translate) return i.updateActiveIndex(l), s.autoHeight && i.updateAutoHeight(), i.updateSlidesClasses(), "slide" !== s.effect && i.setTranslate(g), "reset" !== y && (i.transitionStart(n, y), i.transitionEnd(n, y)), !1;
                if (s.cssMode) {
                    const e = i.isHorizontal(),
                        n = f ? g : -g;
                    if (0 === t) {
                        const t = i.virtual && i.params.virtual.enabled;
                        t && (i.wrapperEl.style.scrollSnapType = "none", i._immediateVirtual = !0), t && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0 ? (i._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            p[e ? "scrollLeft" : "scrollTop"] = n
                        }))) : p[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                            i.wrapperEl.style.scrollSnapType = "", i._immediateVirtual = !1
                        }))
                    } else {
                        if (!i.support.smoothScroll) return R({
                            swiper: i,
                            targetPosition: n,
                            side: e ? "left" : "top"
                        }), !0;
                        p.scrollTo({
                            [e ? "left" : "top"]: n,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return i.setTransition(t), i.setTranslate(g), i.updateActiveIndex(l), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, r), i.transitionStart(n, y), 0 === t ? i.transitionEnd(n, y) : i.animating || (i.animating = !0, i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(e) {
                    i && !i.destroyed && e.target === this && (i.wrapperEl.removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.onSlideToWrapperTransitionEnd = null, delete i.onSlideToWrapperTransitionEnd, i.transitionEnd(n, y))
                }), i.wrapperEl.addEventListener("transitionend", i.onSlideToWrapperTransitionEnd)), !0
            },
            slideToLoop: function(e, t, n, r) {
                if (void 0 === e && (e = 0), void 0 === n && (n = !0), "string" === typeof e) {
                    e = parseInt(e, 10)
                }
                const a = this;
                if (a.destroyed) return;
                "undefined" === typeof t && (t = a.params.speed);
                const i = a.grid && a.params.grid && a.params.grid.rows > 1;
                let l = e;
                if (a.params.loop)
                    if (a.virtual && a.params.virtual.enabled) l += a.virtual.slidesBefore;
                    else {
                        let e;
                        if (i) {
                            const t = l * a.params.grid.rows;
                            e = a.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                        } else e = a.getSlideIndexByData(l);
                        const t = i ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length,
                            {
                                centeredSlides: n
                            } = a.params;
                        let s = a.params.slidesPerView;
                        "auto" === s ? s = a.slidesPerViewDynamic() : (s = Math.ceil(parseFloat(a.params.slidesPerView, 10)), n && s % 2 === 0 && (s += 1));
                        let o = t - e < s;
                        if (n && (o = o || e < Math.ceil(s / 2)), r && n && "auto" !== a.params.slidesPerView && !i && (o = !1), o) {
                            const r = n ? e < a.activeIndex ? "prev" : "next" : e - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
                            a.loopFix({
                                direction: r,
                                slideTo: !0,
                                activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                                slideRealIndex: "next" === r ? a.realIndex : void 0
                            })
                        }
                        if (i) {
                            const e = l * a.params.grid.rows;
                            l = a.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                        } else l = a.getSlideIndexByData(l)
                    } return requestAnimationFrame((() => {
                    a.slideTo(l, t, n, r)
                })), a
            },
            slideNext: function(e, t, n) {
                void 0 === t && (t = !0);
                const r = this,
                    {
                        enabled: a,
                        params: i,
                        animating: l
                    } = r;
                if (!a || r.destroyed) return r;
                "undefined" === typeof e && (e = r.params.speed);
                let s = i.slidesPerGroup;
                "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (s = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                const o = r.activeIndex < i.slidesPerGroupSkip ? 1 : s,
                    c = r.virtual && i.virtual.enabled;
                if (i.loop) {
                    if (l && !c && i.loopPreventsSliding) return !1;
                    if (r.loopFix({
                            direction: "next"
                        }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && i.cssMode) return requestAnimationFrame((() => {
                        r.slideTo(r.activeIndex + o, e, t, n)
                    })), !0
                }
                return i.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + o, e, t, n)
            },
            slidePrev: function(e, t, n) {
                void 0 === t && (t = !0);
                const r = this,
                    {
                        params: a,
                        snapGrid: i,
                        slidesGrid: l,
                        rtlTranslate: s,
                        enabled: o,
                        animating: c
                    } = r;
                if (!o || r.destroyed) return r;
                "undefined" === typeof e && (e = r.params.speed);
                const u = r.virtual && a.virtual.enabled;
                if (a.loop) {
                    if (c && !u && a.loopPreventsSliding) return !1;
                    r.loopFix({
                        direction: "prev"
                    }), r._clientLeft = r.wrapperEl.clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const f = d(s ? r.translate : -r.translate),
                    p = i.map((e => d(e)));
                let m = i[p.indexOf(f) - 1];
                if ("undefined" === typeof m && a.cssMode) {
                    let e;
                    i.forEach(((t, n) => {
                        f >= t && (e = n)
                    })), "undefined" !== typeof e && (m = i[e > 0 ? e - 1 : e])
                }
                let h = 0;
                if ("undefined" !== typeof m && (h = l.indexOf(m), h < 0 && (h = r.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), a.rewind && r.isBeginning) {
                    const a = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                    return r.slideTo(a, e, t, n)
                }
                return a.loop && 0 === r.activeIndex && a.cssMode ? (requestAnimationFrame((() => {
                    r.slideTo(h, e, t, n)
                })), !0) : r.slideTo(h, e, t, n)
            },
            slideReset: function(e, t, n) {
                void 0 === t && (t = !0);
                const r = this;
                if (!r.destroyed) return "undefined" === typeof e && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
            },
            slideToClosest: function(e, t, n, r) {
                void 0 === t && (t = !0), void 0 === r && (r = .5);
                const a = this;
                if (a.destroyed) return;
                "undefined" === typeof e && (e = a.params.speed);
                let i = a.activeIndex;
                const l = Math.min(a.params.slidesPerGroupSkip, i),
                    s = l + Math.floor((i - l) / a.params.slidesPerGroup),
                    o = a.rtlTranslate ? a.translate : -a.translate;
                if (o >= a.snapGrid[s]) {
                    const e = a.snapGrid[s];
                    o - e > (a.snapGrid[s + 1] - e) * r && (i += a.params.slidesPerGroup)
                } else {
                    const e = a.snapGrid[s - 1];
                    o - e <= (a.snapGrid[s] - e) * r && (i -= a.params.slidesPerGroup)
                }
                return i = Math.max(i, 0), i = Math.min(i, a.slidesGrid.length - 1), a.slideTo(i, e, t, n)
            },
            slideToClickedSlide: function() {
                const e = this;
                if (e.destroyed) return;
                const {
                    params: t,
                    slidesEl: n
                } = e, r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let a, i = e.clickedIndex;
                const l = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
                if (t.loop) {
                    if (e.animating) return;
                    a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), i = e.getSlideIndex(H(n, "".concat(l, '[data-swiper-slide-index="').concat(a, '"]'))[0]), M((() => {
                        e.slideTo(i)
                    }))) : e.slideTo(i) : i > e.slides.length - r ? (e.loopFix(), i = e.getSlideIndex(H(n, "".concat(l, '[data-swiper-slide-index="').concat(a, '"]'))[0]), M((() => {
                        e.slideTo(i)
                    }))) : e.slideTo(i)
                } else e.slideTo(i)
            }
        };
        var ue = {
            loopCreate: function(e) {
                const t = this,
                    {
                        params: n,
                        slidesEl: r
                    } = t;
                if (!n.loop || t.virtual && t.params.virtual.enabled) return;
                const a = () => {
                        H(r, ".".concat(n.slideClass, ", swiper-slide")).forEach(((e, t) => {
                            e.setAttribute("data-swiper-slide-index", t)
                        }))
                    },
                    i = t.grid && n.grid && n.grid.rows > 1,
                    l = n.slidesPerGroup * (i ? n.grid.rows : 1),
                    s = t.slides.length % l !== 0,
                    o = i && t.slides.length % n.grid.rows !== 0,
                    c = e => {
                        for (let r = 0; r < e; r += 1) {
                            const e = t.isElement ? V("swiper-slide", [n.slideBlankClass]) : V("div", [n.slideClass, n.slideBlankClass]);
                            t.slidesEl.append(e)
                        }
                    };
                if (s) {
                    if (n.loopAddBlankSlides) {
                        c(l - t.slides.length % l), t.recalcSlides(), t.updateSlides()
                    } else B("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                    a()
                } else if (o) {
                    if (n.loopAddBlankSlides) {
                        c(n.grid.rows - t.slides.length % n.grid.rows), t.recalcSlides(), t.updateSlides()
                    } else B("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                    a()
                } else a();
                t.loopFix({
                    slideRealIndex: e,
                    direction: n.centeredSlides ? void 0 : "next"
                })
            },
            loopFix: function(e) {
                let {
                    slideRealIndex: t,
                    slideTo: n = !0,
                    direction: r,
                    setTranslate: a,
                    activeSlideIndex: i,
                    byController: l,
                    byMousewheel: s
                } = void 0 === e ? {} : e;
                const o = this;
                if (!o.params.loop) return;
                o.emit("beforeLoopFix");
                const {
                    slides: c,
                    allowSlidePrev: u,
                    allowSlideNext: d,
                    slidesEl: f,
                    params: p
                } = o, {
                    centeredSlides: m
                } = p;
                if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && p.virtual.enabled) return n && (p.centeredSlides || 0 !== o.snapIndex ? p.centeredSlides && o.snapIndex < p.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = u, o.allowSlideNext = d, void o.emit("loopFix");
                let h = p.slidesPerView;
                "auto" === h ? h = o.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(p.slidesPerView, 10)), m && h % 2 === 0 && (h += 1));
                const v = p.slidesPerGroupAuto ? h : p.slidesPerGroup;
                let g = v;
                g % v !== 0 && (g += v - g % v), g += p.loopAdditionalSlides, o.loopedSlides = g;
                const y = o.grid && p.grid && p.grid.rows > 1;
                c.length < h + g ? B("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : y && "row" === p.grid.fill && B("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const b = [],
                    x = [];
                let w = o.activeIndex;
                "undefined" === typeof i ? i = o.getSlideIndex(c.filter((e => e.classList.contains(p.slideActiveClass)))[0]) : w = i;
                const S = "next" === r || !r,
                    k = "prev" === r || !r;
                let _ = 0,
                    E = 0;
                const C = y ? Math.ceil(c.length / p.grid.rows) : c.length,
                    j = (y ? c[i].column : i) + (m && "undefined" === typeof a ? -h / 2 + .5 : 0);
                if (j < g) {
                    _ = Math.max(g - j, v);
                    for (let e = 0; e < g - j; e += 1) {
                        const t = e - Math.floor(e / C) * C;
                        if (y) {
                            const e = C - t - 1;
                            for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && b.push(t)
                        } else b.push(C - t - 1)
                    }
                } else if (j + h > C - g) {
                    E = Math.max(j - (C - 2 * g), v);
                    for (let e = 0; e < E; e += 1) {
                        const t = e - Math.floor(e / C) * C;
                        y ? c.forEach(((e, n) => {
                            e.column === t && x.push(n)
                        })) : x.push(t)
                    }
                }
                if (o.__preventObserver__ = !0, requestAnimationFrame((() => {
                        o.__preventObserver__ = !1
                    })), k && b.forEach((e => {
                        c[e].swiperLoopMoveDOM = !0, f.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
                    })), S && x.forEach((e => {
                        c[e].swiperLoopMoveDOM = !0, f.append(c[e]), c[e].swiperLoopMoveDOM = !1
                    })), o.recalcSlides(), "auto" === p.slidesPerView ? o.updateSlides() : y && (b.length > 0 && k || x.length > 0 && S) && o.slides.forEach(((e, t) => {
                        o.grid.updateSlide(t, e, o.slides)
                    })), p.watchSlidesProgress && o.updateSlidesOffset(), n)
                    if (b.length > 0 && k) {
                        if ("undefined" === typeof t) {
                            const e = o.slidesGrid[w],
                                t = o.slidesGrid[w + _] - e;
                            s ? o.setTranslate(o.translate - t) : (o.slideTo(w + Math.ceil(_), 0, !1, !0), a && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                        } else if (a) {
                            const e = y ? b.length / p.grid.rows : b.length;
                            o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
                        }
                    } else if (x.length > 0 && S)
                    if ("undefined" === typeof t) {
                        const e = o.slidesGrid[w],
                            t = o.slidesGrid[w - E] - e;
                        s ? o.setTranslate(o.translate - t) : (o.slideTo(w - E, 0, !1, !0), a && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                    } else {
                        const e = y ? x.length / p.grid.rows : x.length;
                        o.slideTo(o.activeIndex - e, 0, !1, !0)
                    } if (o.allowSlidePrev = u, o.allowSlideNext = d, o.controller && o.controller.control && !l) {
                    const e = {
                        slideRealIndex: t,
                        direction: r,
                        setTranslate: a,
                        activeSlideIndex: i,
                        byController: !0
                    };
                    Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({
                            ...e,
                            slideTo: t.params.slidesPerView === p.slidesPerView && n
                        })
                    })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                        ...e,
                        slideTo: o.controller.control.params.slidesPerView === p.slidesPerView && n
                    })
                }
                o.emit("loopFix")
            },
            loopDestroy: function() {
                const e = this,
                    {
                        params: t,
                        slidesEl: n
                    } = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const r = [];
                e.slides.forEach((e => {
                    const t = "undefined" === typeof e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    r[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), r.forEach((e => {
                    n.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
        };
        var de = {
            setGrabCursor: function(e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                    t.__preventObserver__ = !1
                }))
            },
            unsetGrabCursor: function() {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                    e.__preventObserver__ = !1
                })))
            }
        };

        function fe(e, t, n) {
            const r = L(),
                {
                    params: a
                } = e,
                i = a.edgeSwipeDetection,
                l = a.edgeSwipeThreshold;
            return !i || !(n <= l || n >= r.innerWidth - l) || "prevent" === i && (t.preventDefault(), !0)
        }

        function pe(e) {
            const t = this,
                n = P();
            let r = e;
            r.originalEvent && (r = r.originalEvent);
            const a = t.touchEventsData;
            if ("pointerdown" === r.type) {
                if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
                a.pointerId = r.pointerId
            } else "touchstart" === r.type && 1 === r.targetTouches.length && (a.touchId = r.targetTouches[0].identifier);
            if ("touchstart" === r.type) return void fe(t, r, r.targetTouches[0].pageX);
            const {
                params: i,
                touches: l,
                enabled: s
            } = t;
            if (!s) return;
            if (!i.simulateTouch && "mouse" === r.pointerType) return;
            if (t.animating && i.preventInteractionOnTransition) return;
            !t.animating && i.cssMode && i.loop && t.loopFix();
            let o = r.target;
            if ("wrapper" === i.touchEventsTarget && !t.wrapperEl.contains(o)) return;
            if ("which" in r && 3 === r.which) return;
            if ("button" in r && r.button > 0) return;
            if (a.isTouched && a.isMoved) return;
            const c = !!i.noSwipingClass && "" !== i.noSwipingClass,
                u = r.composedPath ? r.composedPath() : r.path;
            c && r.target && r.target.shadowRoot && u && (o = u[0]);
            const d = i.noSwipingSelector ? i.noSwipingSelector : ".".concat(i.noSwipingClass),
                f = !(!r.target || !r.target.shadowRoot);
            if (i.noSwiping && (f ? function(e, t) {
                    return void 0 === t && (t = this),
                        function t(n) {
                            if (!n || n === P() || n === L()) return null;
                            n.assignedSlot && (n = n.assignedSlot);
                            const r = n.closest(e);
                            return r || n.getRootNode ? r || t(n.getRootNode().host) : null
                        }(t)
                }(d, o) : o.closest(d))) return void(t.allowClick = !0);
            if (i.swipeHandler && !o.closest(i.swipeHandler)) return;
            l.currentX = r.pageX, l.currentY = r.pageY;
            const p = l.currentX,
                m = l.currentY;
            if (!fe(t, r, p)) return;
            Object.assign(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), l.startX = p, l.startY = m, a.touchStartTime = O(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (a.allowThresholdMove = !1);
            let h = !0;
            o.matches(a.focusableElements) && (h = !1, "SELECT" === o.nodeName && (a.isTouched = !1)), n.activeElement && n.activeElement.matches(a.focusableElements) && n.activeElement !== o && n.activeElement.blur();
            const v = h && t.allowTouchMove && i.touchStartPreventDefault;
            !i.touchStartForcePreventDefault && !v || o.isContentEditable || r.preventDefault(), i.freeMode && i.freeMode.enabled && t.freeMode && t.animating && !i.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
        }

        function me(e) {
            const t = P(),
                n = this,
                r = n.touchEventsData,
                {
                    params: a,
                    touches: i,
                    rtlTranslate: l,
                    enabled: s
                } = n;
            if (!s) return;
            if (!a.simulateTouch && "mouse" === e.pointerType) return;
            let o, c = e;
            if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
                if (null !== r.touchId) return;
                if (c.pointerId !== r.pointerId) return
            }
            if ("touchmove" === c.type) {
                if (o = [...c.changedTouches].filter((e => e.identifier === r.touchId))[0], !o || o.identifier !== r.touchId) return
            } else o = c;
            if (!r.isTouched) return void(r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", c));
            const u = o.pageX,
                d = o.pageY;
            if (c.preventedByNestedSwiper) return i.startX = u, void(i.startY = d);
            if (!n.allowTouchMove) return c.target.matches(r.focusableElements) || (n.allowClick = !1), void(r.isTouched && (Object.assign(i, {
                startX: u,
                startY: d,
                currentX: u,
                currentY: d
            }), r.touchStartTime = O()));
            if (a.touchReleaseOnEdges && !a.loop)
                if (n.isVertical()) {
                    if (d < i.startY && n.translate <= n.maxTranslate() || d > i.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                } else if (u < i.startX && n.translate <= n.maxTranslate() || u > i.startX && n.translate >= n.minTranslate()) return;
            if (t.activeElement && c.target === t.activeElement && c.target.matches(r.focusableElements)) return r.isMoved = !0, void(n.allowClick = !1);
            r.allowTouchCallbacks && n.emit("touchMove", c), i.previousX = i.currentX, i.previousY = i.currentY, i.currentX = u, i.currentY = d;
            const f = i.currentX - i.startX,
                p = i.currentY - i.startY;
            if (n.params.threshold && Math.sqrt(f ** 2 + p ** 2) < n.params.threshold) return;
            if ("undefined" === typeof r.isScrolling) {
                let e;
                n.isHorizontal() && i.currentY === i.startY || n.isVertical() && i.currentX === i.startX ? r.isScrolling = !1 : f * f + p * p >= 25 && (e = 180 * Math.atan2(Math.abs(p), Math.abs(f)) / Math.PI, r.isScrolling = n.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
            }
            if (r.isScrolling && n.emit("touchMoveOpposite", c), "undefined" === typeof r.startMoving && (i.currentX === i.startX && i.currentY === i.startY || (r.startMoving = !0)), r.isScrolling) return void(r.isTouched = !1);
            if (!r.startMoving) return;
            n.allowClick = !1, !a.cssMode && c.cancelable && c.preventDefault(), a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
            let m = n.isHorizontal() ? f : p,
                h = n.isHorizontal() ? i.currentX - i.previousX : i.currentY - i.previousY;
            a.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1), h = Math.abs(h) * (l ? 1 : -1)), i.diff = m, m *= a.touchRatio, l && (m = -m, h = -h);
            const v = n.touchesDirection;
            n.swipeDirection = m > 0 ? "prev" : "next", n.touchesDirection = h > 0 ? "prev" : "next";
            const g = n.params.loop && !a.cssMode,
                y = "next" === n.touchesDirection && n.allowSlideNext || "prev" === n.touchesDirection && n.allowSlidePrev;
            if (!r.isMoved) {
                if (g && y && n.loopFix({
                        direction: n.swipeDirection
                    }), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    n.wrapperEl.dispatchEvent(e)
                }
                r.allowMomentumBounce = !1, !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)
            }
            if ((new Date).getTime(), r.isMoved && r.allowThresholdMove && v !== n.touchesDirection && g && y && Math.abs(m) >= 1) return Object.assign(i, {
                startX: u,
                startY: d,
                currentX: u,
                currentY: d,
                startTranslate: r.currentTranslate
            }), r.loopSwapReset = !0, void(r.startTranslate = r.currentTranslate);
            n.emit("sliderMove", c), r.isMoved = !0, r.currentTranslate = m + r.startTranslate;
            let b = !0,
                x = a.resistanceRatio;
            if (a.touchReleaseOnEdges && (x = 0), m > 0 ? (g && y && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) && n.loopFix({
                    direction: "prev",
                    setTranslate: !0,
                    activeSlideIndex: 0
                }), r.currentTranslate > n.minTranslate() && (b = !1, a.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + m) ** x))) : m < 0 && (g && y && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] : n.maxTranslate()) && n.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex: n.slides.length - ("auto" === a.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                }), r.currentTranslate < n.maxTranslate() && (b = !1, a.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - m) ** x))), b && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
                if (!(Math.abs(m) > a.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                if (!r.allowThresholdMove) return r.allowThresholdMove = !0, i.startX = i.currentX, i.startY = i.currentY, r.currentTranslate = r.startTranslate, void(i.diff = n.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
            }
            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && n.freeMode || a.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
        }

        function he(e) {
            const t = this,
                n = t.touchEventsData;
            let r, a = e;
            a.originalEvent && (a = a.originalEvent);
            if ("touchend" === a.type || "touchcancel" === a.type) {
                if (r = [...a.changedTouches].filter((e => e.identifier === n.touchId))[0], !r || r.identifier !== n.touchId) return
            } else {
                if (null !== n.touchId) return;
                if (a.pointerId !== n.pointerId) return;
                r = a
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type)) {
                if (!(["pointercancel", "contextmenu"].includes(a.type) && (t.browser.isSafari || t.browser.isWebView))) return
            }
            n.pointerId = null, n.touchId = null;
            const {
                params: i,
                touches: l,
                rtlTranslate: s,
                slidesGrid: o,
                enabled: c
            } = t;
            if (!c) return;
            if (!i.simulateTouch && "mouse" === a.pointerType) return;
            if (n.allowTouchCallbacks && t.emit("touchEnd", a), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
            i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = O(),
                d = u - n.touchStartTime;
            if (t.allowClick) {
                const e = a.path || a.composedPath && a.composedPath();
                t.updateClickedSlide(e && e[0] || a.target, e), t.emit("tap click", a), d < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", a)
            }
            if (n.lastClickTime = O(), M((() => {
                    t.destroyed || (t.allowClick = !0)
                })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === l.diff && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
            let f;
            if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, f = i.followFinger ? s ? t.translate : -t.translate : -n.currentTranslate, i.cssMode) return;
            if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
                currentPos: f
            });
            const p = f >= -t.maxTranslate() && !t.params.loop;
            let m = 0,
                h = t.slidesSizesGrid[0];
            for (let x = 0; x < o.length; x += x < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                const e = x < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                "undefined" !== typeof o[x + e] ? (p || f >= o[x] && f < o[x + e]) && (m = x, h = o[x + e] - o[x]) : (p || f >= o[x]) && (m = x, h = o[o.length - 1] - o[o.length - 2])
            }
            let v = null,
                g = null;
            i.rewind && (t.isBeginning ? g = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
            const y = (f - o[m]) / h,
                b = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (d > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (y >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (y > 1 - i.longSwipesRatio ? t.slideTo(m + b) : null !== g && y < 0 && Math.abs(y) > i.longSwipesRatio ? t.slideTo(g) : t.slideTo(m))
            } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + b), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m))
            }
        }

        function ve() {
            const e = this,
                {
                    params: t,
                    el: n
                } = e;
            if (n && 0 === n.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {
                allowSlideNext: r,
                allowSlidePrev: a,
                snapGrid: i
            } = e, l = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            const s = l && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || s ? e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }), 500)), e.allowSlidePrev = a, e.allowSlideNext = r, e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow()
        }

        function ge(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function ye() {
            const e = this,
                {
                    wrapperEl: t,
                    rtlTranslate: n,
                    enabled: r
                } = e;
            if (!r) return;
            let a;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const i = e.maxTranslate() - e.minTranslate();
            a = 0 === i ? 0 : (e.translate - e.minTranslate()) / i, a !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        function be(e) {
            const t = this;
            ne(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }

        function xe() {
            const e = this;
            e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
        }
        const we = (e, t) => {
            const n = P(),
                {
                    params: r,
                    el: a,
                    wrapperEl: i,
                    device: l
                } = e,
                s = !!r.nested,
                o = "on" === t ? "addEventListener" : "removeEventListener",
                c = t;
            n[o]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: s
            }), a[o]("touchstart", e.onTouchStart, {
                passive: !1
            }), a[o]("pointerdown", e.onTouchStart, {
                passive: !1
            }), n[o]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: s
            }), n[o]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: s
            }), n[o]("touchend", e.onTouchEnd, {
                passive: !0
            }), n[o]("pointerup", e.onTouchEnd, {
                passive: !0
            }), n[o]("pointercancel", e.onTouchEnd, {
                passive: !0
            }), n[o]("touchcancel", e.onTouchEnd, {
                passive: !0
            }), n[o]("pointerout", e.onTouchEnd, {
                passive: !0
            }), n[o]("pointerleave", e.onTouchEnd, {
                passive: !0
            }), n[o]("contextmenu", e.onTouchEnd, {
                passive: !0
            }), (r.preventClicks || r.preventClicksPropagation) && a[o]("click", e.onClick, !0), r.cssMode && i[o]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ve, !0) : e[c]("observerUpdate", ve, !0), a[o]("load", e.onLoad, {
                capture: !0
            })
        };
        var Se = {
            attachEvents: function() {
                const e = this,
                    {
                        params: t
                    } = e;
                e.onTouchStart = pe.bind(e), e.onTouchMove = me.bind(e), e.onTouchEnd = he.bind(e), e.onDocumentTouchStart = xe.bind(e), t.cssMode && (e.onScroll = ye.bind(e)), e.onClick = ge.bind(e), e.onLoad = be.bind(e), we(e, "on")
            },
            detachEvents: function() {
                we(this, "off")
            }
        };
        const ke = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var _e = {
            setBreakpoint: function() {
                const e = this,
                    {
                        realIndex: t,
                        initialized: n,
                        params: r,
                        el: a
                    } = e,
                    i = r.breakpoints;
                if (!i || i && 0 === Object.keys(i).length) return;
                const l = e.getBreakpoint(i, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const s = (l in i ? i[l] : void 0) || e.originalParams,
                    o = ke(e, r),
                    c = ke(e, s),
                    u = e.params.grabCursor,
                    d = s.grabCursor,
                    f = r.enabled;
                o && !c ? (a.classList.remove("".concat(r.containerModifierClass, "grid"), "".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !o && c && (a.classList.add("".concat(r.containerModifierClass, "grid")), (s.grid.fill && "column" === s.grid.fill || !s.grid.fill && "column" === r.grid.fill) && a.classList.add("".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()), u && !d ? e.unsetGrabCursor() : !u && d && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    if ("undefined" === typeof s[t]) return;
                    const n = r[t] && r[t].enabled,
                        a = s[t] && s[t].enabled;
                    n && !a && e[t].disable(), !n && a && e[t].enable()
                }));
                const p = s.direction && s.direction !== r.direction,
                    m = r.loop && (s.slidesPerView !== r.slidesPerView || p),
                    h = r.loop;
                p && n && e.changeDirection(), A(e.params, s);
                const v = e.params.enabled,
                    g = e.params.loop;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), f && !v ? e.disable() : !f && v && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", s), n && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && g ? (e.loopCreate(t), e.updateSlides()) : h && !g && e.loopDestroy()), e.emit("breakpoint", s)
            },
            getBreakpoint: function(e, t, n) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                let r = !1;
                const a = L(),
                    i = "window" === t ? a.innerHeight : n.clientHeight,
                    l = Object.keys(e).map((e => {
                        if ("string" === typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {
                                value: i * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }));
                l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let s = 0; s < l.length; s += 1) {
                    const {
                        point: e,
                        value: i
                    } = l[s];
                    "window" === t ? a.matchMedia("(min-width: ".concat(i, "px)")).matches && (r = e) : i <= n.clientWidth && (r = e)
                }
                return r || "max"
            }
        };
        var Ee = {
            addClasses: function() {
                const e = this,
                    {
                        classNames: t,
                        params: n,
                        rtl: r,
                        el: a,
                        device: i
                    } = e,
                    l = function(e, t) {
                        const n = [];
                        return e.forEach((e => {
                            "object" === typeof e ? Object.keys(e).forEach((r => {
                                e[r] && n.push(t + r)
                            })) : "string" === typeof e && n.push(t + e)
                        })), n
                    }(["initialized", n.direction, {
                        "free-mode": e.params.freeMode && n.freeMode.enabled
                    }, {
                        autoheight: n.autoHeight
                    }, {
                        rtl: r
                    }, {
                        grid: n.grid && n.grid.rows > 1
                    }, {
                        "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
                    }, {
                        android: i.android
                    }, {
                        ios: i.ios
                    }, {
                        "css-mode": n.cssMode
                    }, {
                        centered: n.cssMode && n.centeredSlides
                    }, {
                        "watch-progress": n.watchSlidesProgress
                    }], n.containerModifierClass);
                t.push(...l), a.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
                const {
                    el: e,
                    classNames: t
                } = this;
                e.classList.remove(...t), this.emitContainerClasses()
            }
        };
        var Ce = {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: n
                        } = e,
                        {
                            slidesOffsetBefore: r
                        } = n;
                    if (r) {
                        const t = e.slides.length - 1,
                            n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                        e.isLocked = e.size > n
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            je = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
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
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

        function Te(e, t) {
            return function(n) {
                void 0 === n && (n = {});
                const r = Object.keys(n)[0],
                    a = n[r];
                "object" === typeof a && null !== a ? (!0 === e[r] && (e[r] = {
                    enabled: !0
                }), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in a ? ("object" !== typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
                    enabled: !1
                }), A(t, n)) : A(t, n)) : A(t, n)
            }
        }
        const Ne = {
                eventsEmitter: ee,
                update: ie,
                translate: le,
                transition: oe,
                slide: ce,
                loop: ue,
                grabCursor: de,
                events: Se,
                breakpoints: _e,
                checkOverflow: Ce,
                classes: Ee
            },
            Pe = {};
        class ze {
            constructor() {
                let e, t;
                for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = A({}, t), e && !t.el && (t.el = e);
                const i = P();
                if (t.el && "string" === typeof t.el && i.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return i.querySelectorAll(t.el).forEach((n => {
                        const r = A({}, t, {
                            el: n
                        });
                        e.push(new ze(r))
                    })), e
                }
                const l = this;
                l.__swiper__ = !0, l.support = Z(), l.device = K({
                    userAgent: t.userAgent
                }), l.browser = $(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
                const s = {};
                l.modules.forEach((e => {
                    e({
                        params: t,
                        swiper: l,
                        extendParams: Te(t, s),
                        on: l.on.bind(l),
                        once: l.once.bind(l),
                        off: l.off.bind(l),
                        emit: l.emit.bind(l)
                    })
                }));
                const o = A({}, je, s);
                return l.params = A({}, o, Pe, t), l.originalParams = A({}, l.params), l.passedParams = A({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                    l.on(e, l.params.on[e])
                })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                    enabled: l.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === l.params.direction,
                    isVertical: () => "vertical" === l.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                    },
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: l.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), l.emit("_swiper"), l.params.init && l.init(), l
            }
            getDirectionLabel(e) {
                return this.isHorizontal() ? e : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                } [e]
            }
            getSlideIndex(e) {
                const {
                    slidesEl: t,
                    params: n
                } = this, r = q(H(t, ".".concat(n.slideClass, ", swiper-slide"))[0]);
                return q(e) - r
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }
            recalcSlides() {
                const {
                    slidesEl: e,
                    params: t
                } = this;
                this.slides = H(e, ".".concat(t.slideClass, ", swiper-slide"))
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }
            setProgress(e, t) {
                const n = this;
                e = Math.min(Math.max(e, 0), 1);
                const r = n.minTranslate(),
                    a = (n.maxTranslate() - r) * e + r;
                n.translateTo(a, "undefined" === typeof t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.forEach((n => {
                    const r = e.getSlideClasses(n);
                    t.push({
                        slideEl: n,
                        classNames: r
                    }), e.emit("_slideClass", n, r)
                })), e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {
                    params: n,
                    slides: r,
                    slidesGrid: a,
                    slidesSizesGrid: i,
                    size: l,
                    activeIndex: s
                } = this;
                let o = 1;
                if ("number" === typeof n.slidesPerView) return n.slidesPerView;
                if (n.centeredSlides) {
                    let e, t = r[s] ? Math.ceil(r[s].swiperSlideSize) : 0;
                    for (let n = s + 1; n < r.length; n += 1) r[n] && !e && (t += Math.ceil(r[n].swiperSlideSize), o += 1, t > l && (e = !0));
                    for (let n = s - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, o += 1, t > l && (e = !0))
                } else if ("current" === e)
                    for (let c = s + 1; c < r.length; c += 1) {
                        (t ? a[c] + i[c] - a[s] < l : a[c] - a[s] < l) && (o += 1)
                    } else
                        for (let c = s - 1; c >= 0; c -= 1) {
                            a[s] - a[c] < l && (o += 1)
                        }
                return o
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {
                    snapGrid: t,
                    params: n
                } = e;

                function r() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                let a;
                if (n.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                        t.complete && ne(e, t)
                    })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), n.freeMode && n.freeMode.enabled && !n.cssMode) r(), n.autoHeight && e.updateAutoHeight();
                else {
                    if (("auto" === n.slidesPerView || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
                        const t = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
                        a = e.slideTo(t.length - 1, 0, !1, !0)
                    } else a = e.slideTo(e.activeIndex, 0, !1, !0);
                    a || r()
                }
                n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const n = this,
                    r = n.params.direction;
                return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.el.classList.remove("".concat(n.params.containerModifierClass).concat(r)), n.el.classList.add("".concat(n.params.containerModifierClass).concat(e)), n.emitContainerClasses(), n.params.direction = e, n.slides.forEach((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), n.emit("changeDirection"), t && n.update()), n
            }
            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update())
            }
            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                let n = e || t.params.el;
                if ("string" === typeof n && (n = document.querySelector(n)), !n) return !1;
                n.swiper = t, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                const r = () => ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
                let a = (() => {
                    if (n && n.shadowRoot && n.shadowRoot.querySelector) {
                        return n.shadowRoot.querySelector(r())
                    }
                    return H(n, r())[0]
                })();
                return !a && t.params.createElements && (a = V("div", t.params.wrapperClass), n.append(a), H(n, ".".concat(t.params.slideClass)).forEach((e => {
                    a.append(e)
                }))), Object.assign(t, {
                    el: n,
                    wrapperEl: a,
                    slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : a,
                    hostEl: t.isElement ? n.parentNode.host : n,
                    mounted: !0,
                    rtl: "rtl" === n.dir.toLowerCase() || "rtl" === G(n, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === G(n, "direction")),
                    wrongRTL: "-webkit-box" === G(a, "display")
                }), !0
            }
            init(e) {
                const t = this;
                if (t.initialized) return t;
                if (!1 === t.mount(e)) return t;
                t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                const n = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((e => {
                    e.complete ? ne(t, e) : e.addEventListener("load", (e => {
                        ne(t, e.target)
                    }))
                })), ae(t), t.initialized = !0, ae(t), t.emit("init"), t.emit("afterInit"), t
            }
            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const n = this,
                    {
                        params: r,
                        el: a,
                        wrapperEl: i,
                        slides: l
                    } = n;
                return "undefined" === typeof n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), a.removeAttribute("style"), i.removeAttribute("style"), l && l.length && l.forEach((e => {
                    e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                }))), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                    n.off(e)
                })), !1 !== e && (n.el.swiper = null, function(e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (n) {}
                        try {
                            delete t[e]
                        } catch (n) {}
                    }))
                }(n)), n.destroyed = !0), null
            }
            static extendDefaults(e) {
                A(Pe, e)
            }
            static get extendedDefaults() {
                return Pe
            }
            static get defaults() {
                return je
            }
            static installModule(e) {
                ze.prototype.__modules__ || (ze.prototype.__modules__ = []);
                const t = ze.prototype.__modules__;
                "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => ze.installModule(e))), ze) : (ze.installModule(e), ze)
            }
        }
        Object.keys(Ne).forEach((e => {
            Object.keys(Ne[e]).forEach((t => {
                ze.prototype[t] = Ne[e][t]
            }))
        })), ze.use([function(e) {
            let {
                swiper: t,
                on: n,
                emit: r
            } = e;
            const a = L();
            let i = null,
                l = null;
            const s = () => {
                    t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
                },
                o = () => {
                    t && !t.destroyed && t.initialized && r("orientationchange")
                };
            n("init", (() => {
                t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver ? t && !t.destroyed && t.initialized && (i = new ResizeObserver((e => {
                    l = a.requestAnimationFrame((() => {
                        const {
                            width: n,
                            height: r
                        } = t;
                        let a = n,
                            i = r;
                        e.forEach((e => {
                            let {
                                contentBoxSize: n,
                                contentRect: r,
                                target: l
                            } = e;
                            l && l !== t.el || (a = r ? r.width : (n[0] || n).inlineSize, i = r ? r.height : (n[0] || n).blockSize)
                        })), a === n && i === r || s()
                    }))
                })), i.observe(t.el)) : (a.addEventListener("resize", s), a.addEventListener("orientationchange", o))
            })), n("destroy", (() => {
                l && a.cancelAnimationFrame(l), i && i.unobserve && t.el && (i.unobserve(t.el), i = null), a.removeEventListener("resize", s), a.removeEventListener("orientationchange", o)
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: n,
                on: r,
                emit: a
            } = e;
            const i = [],
                l = L(),
                s = function(e, n) {
                    void 0 === n && (n = {});
                    const r = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) return void a("observerUpdate", e[0]);
                        const n = function() {
                            a("observerUpdate", e[0])
                        };
                        l.requestAnimationFrame ? l.requestAnimationFrame(n) : l.setTimeout(n, 0)
                    }));
                    r.observe(e, {
                        attributes: "undefined" === typeof n.attributes || n.attributes,
                        childList: "undefined" === typeof n.childList || n.childList,
                        characterData: "undefined" === typeof n.characterData || n.characterData
                    }), i.push(r)
                };
            n({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), r("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = U(t.hostEl);
                        for (let t = 0; t < e.length; t += 1) s(e[t])
                    }
                    s(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }), s(t.wrapperEl, {
                        attributes: !1
                    })
                }
            })), r("destroy", (() => {
                i.forEach((e => {
                    e.disconnect()
                })), i.splice(0, i.length)
            }))
        }]);
        const Le = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

        function Me(e) {
            return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
        }

        function Oe(e, t) {
            const n = ["__proto__", "constructor", "prototype"];
            Object.keys(t).filter((e => n.indexOf(e) < 0)).forEach((n => {
                "undefined" === typeof e[n] ? e[n] = t[n] : Me(t[n]) && Me(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : Oe(e[n], t[n]) : e[n] = t[n]
            }))
        }

        function Ie(e) {
            return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
        }

        function De(e) {
            return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
        }

        function Ae(e) {
            return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
        }

        function Fe(e) {
            void 0 === e && (e = "");
            const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                n = [];
            return t.forEach((e => {
                n.indexOf(e) < 0 && n.push(e)
            })), n.join(" ")
        }

        function Re(e) {
            return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : "swiper-wrapper ".concat(e) : "swiper-wrapper"
        }

        function He() {
            return He = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, He.apply(this, arguments)
        }

        function Be(e) {
            return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
        }

        function Ve(t) {
            const n = [];
            return e.Children.toArray(t).forEach((e => {
                Be(e) ? n.push(e) : e.props && e.props.children && Ve(e.props.children).forEach((e => n.push(e)))
            })), n
        }

        function Ge(t) {
            const n = [],
                r = {
                    "container-start": [],
                    "container-end": [],
                    "wrapper-start": [],
                    "wrapper-end": []
                };
            return e.Children.toArray(t).forEach((e => {
                if (Be(e)) n.push(e);
                else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
                else if (e.props && e.props.children) {
                    const t = Ve(e.props.children);
                    t.length > 0 ? t.forEach((e => n.push(e))) : r["container-end"].push(e)
                } else r["container-end"].push(e)
            })), {
                slides: n,
                slots: r
            }
        }

        function qe(t, n) {
            return "undefined" === typeof window ? (0, e.useEffect)(t, n) : (0, e.useLayoutEffect)(t, n)
        }
        const Ue = (0, e.createContext)(null),
            We = (0, e.createContext)(null),
            Ye = (0, e.forwardRef)((function(t, n) {
                let {
                    className: r,
                    tag: a = "div",
                    wrapperTag: i = "div",
                    children: l,
                    onSwiper: s,
                    ...o
                } = void 0 === t ? {} : t, c = !1;
                const [u, d] = (0, e.useState)("swiper"), [f, p] = (0, e.useState)(null), [m, h] = (0, e.useState)(!1), v = (0, e.useRef)(!1), g = (0, e.useRef)(null), y = (0, e.useRef)(null), b = (0, e.useRef)(null), x = (0, e.useRef)(null), w = (0, e.useRef)(null), S = (0, e.useRef)(null), k = (0, e.useRef)(null), _ = (0, e.useRef)(null), {
                    params: E,
                    passedParams: C,
                    rest: j,
                    events: T
                } = function(e, t) {
                    void 0 === e && (e = {}), void 0 === t && (t = !0);
                    const n = {
                            on: {}
                        },
                        r = {},
                        a = {};
                    Oe(n, je), n._emitClasses = !0, n.init = !1;
                    const i = {},
                        l = Le.map((e => e.replace(/_/, ""))),
                        s = Object.assign({}, e);
                    return Object.keys(s).forEach((s => {
                        "undefined" !== typeof e[s] && (l.indexOf(s) >= 0 ? Me(e[s]) ? (n[s] = {}, a[s] = {}, Oe(n[s], e[s]), Oe(a[s], e[s])) : (n[s] = e[s], a[s] = e[s]) : 0 === s.search(/on[A-Z]/) && "function" === typeof e[s] ? t ? r["".concat(s[2].toLowerCase()).concat(s.substr(3))] = e[s] : n.on["".concat(s[2].toLowerCase()).concat(s.substr(3))] = e[s] : i[s] = e[s])
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
                    })), {
                        params: n,
                        passedParams: a,
                        rest: i,
                        events: r
                    }
                }(o), {
                    slides: N,
                    slots: P
                } = Ge(l), z = () => {
                    h(!m)
                };
                Object.assign(E.on, {
                    _containerClasses(e, t) {
                        d(t)
                    }
                });
                const L = () => {
                    Object.assign(E.on, T), c = !0;
                    const e = {
                        ...E
                    };
                    if (delete e.wrapperClass, y.current = new ze(e), y.current.virtual && y.current.params.virtual.enabled) {
                        y.current.virtual.slides = N;
                        const e = {
                            cache: !1,
                            slides: N,
                            renderExternal: p,
                            renderExternalUpdate: !1
                        };
                        Oe(y.current.params.virtual, e), Oe(y.current.originalParams.virtual, e)
                    }
                };
                g.current || L(), y.current && y.current.on("_beforeBreakpoint", z);
                return (0, e.useEffect)((() => () => {
                    y.current && y.current.off("_beforeBreakpoint", z)
                })), (0, e.useEffect)((() => {
                    !v.current && y.current && (y.current.emitSlidesClasses(), v.current = !0)
                })), qe((() => {
                    if (n && (n.current = g.current), g.current) return y.current.destroyed && L(),
                        function(e, t) {
                            let {
                                el: n,
                                nextEl: r,
                                prevEl: a,
                                paginationEl: i,
                                scrollbarEl: l,
                                swiper: s
                            } = e;
                            Ie(t) && r && a && (s.params.navigation.nextEl = r, s.originalParams.navigation.nextEl = r, s.params.navigation.prevEl = a, s.originalParams.navigation.prevEl = a), De(t) && i && (s.params.pagination.el = i, s.originalParams.pagination.el = i), Ae(t) && l && (s.params.scrollbar.el = l, s.originalParams.scrollbar.el = l), s.init(n)
                        }({
                            el: g.current,
                            nextEl: w.current,
                            prevEl: S.current,
                            paginationEl: k.current,
                            scrollbarEl: _.current,
                            swiper: y.current
                        }, E), s && !y.current.destroyed && s(y.current), () => {
                            y.current && !y.current.destroyed && y.current.destroy(!0, !1)
                        }
                }), []), qe((() => {
                    !c && T && y.current && Object.keys(T).forEach((e => {
                        y.current.on(e, T[e])
                    }));
                    const e = function(e, t, n, r, a) {
                        const i = [];
                        if (!t) return i;
                        const l = e => {
                            i.indexOf(e) < 0 && i.push(e)
                        };
                        if (n && r) {
                            const e = r.map(a),
                                t = n.map(a);
                            e.join("") !== t.join("") && l("children"), r.length !== n.length && l("children")
                        }
                        return Le.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((n => {
                            if (n in e && n in t)
                                if (Me(e[n]) && Me(t[n])) {
                                    const r = Object.keys(e[n]),
                                        a = Object.keys(t[n]);
                                    r.length !== a.length ? l(n) : (r.forEach((r => {
                                        e[n][r] !== t[n][r] && l(n)
                                    })), a.forEach((r => {
                                        e[n][r] !== t[n][r] && l(n)
                                    })))
                                } else e[n] !== t[n] && l(n)
                        })), i
                    }(C, b.current, N, x.current, (e => e.key));
                    return b.current = C, x.current = N, e.length && y.current && !y.current.destroyed && function(e) {
                        let {
                            swiper: t,
                            slides: n,
                            passedParams: r,
                            changedParams: a,
                            nextEl: i,
                            prevEl: l,
                            scrollbarEl: s,
                            paginationEl: o
                        } = e;
                        const c = a.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                            {
                                params: u,
                                pagination: d,
                                navigation: f,
                                scrollbar: p,
                                virtual: m,
                                thumbs: h
                            } = t;
                        let v, g, y, b, x, w, S, k;
                        a.includes("thumbs") && r.thumbs && r.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (v = !0), a.includes("controller") && r.controller && r.controller.control && u.controller && !u.controller.control && (g = !0), a.includes("pagination") && r.pagination && (r.pagination.el || o) && (u.pagination || !1 === u.pagination) && d && !d.el && (y = !0), a.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || s) && (u.scrollbar || !1 === u.scrollbar) && p && !p.el && (b = !0), a.includes("navigation") && r.navigation && (r.navigation.prevEl || l) && (r.navigation.nextEl || i) && (u.navigation || !1 === u.navigation) && f && !f.prevEl && !f.nextEl && (x = !0);
                        const _ = e => {
                            t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), u[e].prevEl = void 0, u[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), u[e].el = void 0, t[e].el = void 0))
                        };
                        a.includes("loop") && t.isElement && (u.loop && !r.loop ? w = !0 : !u.loop && r.loop ? S = !0 : k = !0), c.forEach((e => {
                            if (Me(u[e]) && Me(r[e])) Object.assign(u[e], r[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in r[e]) || r[e].enabled || _(e);
                            else {
                                const t = r[e];
                                !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = r[e] : !1 === t && _(e)
                            }
                        })), c.includes("controller") && !g && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), a.includes("children") && n && m && u.virtual.enabled ? (m.slides = n, m.update(!0)) : a.includes("virtual") && m && u.virtual.enabled && (n && (m.slides = n), m.update(!0)), a.includes("children") && n && u.loop && (k = !0), v && h.init() && h.update(!0);
                        g && (t.controller.control = u.controller.control), y && (!t.isElement || o && "string" !== typeof o || (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)), o && (u.pagination.el = o), d.init(), d.render(), d.update()), b && (!t.isElement || s && "string" !== typeof s || (s = document.createElement("div"), s.classList.add("swiper-scrollbar"), s.part.add("scrollbar"), t.el.appendChild(s)), s && (u.scrollbar.el = s), p.init(), p.updateSize(), p.setTranslate()), x && (t.isElement && (i && "string" !== typeof i || (i = document.createElement("div"), i.classList.add("swiper-button-next"), i.innerHTML = t.hostEl.constructor.nextButtonSvg, i.part.add("button-next"), t.el.appendChild(i)), l && "string" !== typeof l || (l = document.createElement("div"), l.classList.add("swiper-button-prev"), l.innerHTML = t.hostEl.constructor.prevButtonSvg, l.part.add("button-prev"), t.el.appendChild(l))), i && (u.navigation.nextEl = i), l && (u.navigation.prevEl = l), f.init(), f.update()), a.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext), a.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev), a.includes("direction") && t.changeDirection(r.direction, !1), (w || k) && t.loopDestroy(), (S || k) && t.loopCreate(), t.update()
                    }({
                        swiper: y.current,
                        slides: N,
                        passedParams: C,
                        changedParams: e,
                        nextEl: w.current,
                        prevEl: S.current,
                        scrollbarEl: _.current,
                        paginationEl: k.current
                    }), () => {
                        T && y.current && Object.keys(T).forEach((e => {
                            y.current.off(e, T[e])
                        }))
                    }
                })), qe((() => {
                    (e => {
                        !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                    })(y.current)
                }), [f]), e.createElement(a, He({
                    ref: g,
                    className: Fe("".concat(u).concat(r ? " ".concat(r) : ""))
                }, j), e.createElement(We.Provider, {
                    value: y.current
                }, P["container-start"], e.createElement(i, {
                    className: Re(E.wrapperClass)
                }, P["wrapper-start"], E.virtual ? function(t, n, r) {
                    if (!r) return null;
                    const a = e => {
                            let t = e;
                            return e < 0 ? t = n.length + e : t >= n.length && (t -= n.length), t
                        },
                        i = t.isHorizontal() ? {
                            [t.rtlTranslate ? "right" : "left"]: "".concat(r.offset, "px")
                        } : {
                            top: "".concat(r.offset, "px")
                        },
                        {
                            from: l,
                            to: s
                        } = r,
                        o = t.params.loop ? -n.length : 0,
                        c = t.params.loop ? 2 * n.length : n.length,
                        u = [];
                    for (let e = o; e < c; e += 1) e >= l && e <= s && u.push(n[a(e)]);
                    return u.map(((n, r) => e.cloneElement(n, {
                        swiper: t,
                        style: i,
                        key: n.props.virtualIndex || n.key || "slide-".concat(r)
                    })))
                }(y.current, N, f) : N.map(((t, n) => e.cloneElement(t, {
                    swiper: y.current,
                    swiperSlideIndex: n
                }))), P["wrapper-end"]), Ie(E) && e.createElement(e.Fragment, null, e.createElement("div", {
                    ref: S,
                    className: "swiper-button-prev"
                }), e.createElement("div", {
                    ref: w,
                    className: "swiper-button-next"
                })), Ae(E) && e.createElement("div", {
                    ref: _,
                    className: "swiper-scrollbar"
                }), De(E) && e.createElement("div", {
                    ref: k,
                    className: "swiper-pagination"
                }), P["container-end"]))
            }));
        Ye.displayName = "Swiper";
        const Qe = (0, e.forwardRef)((function(t, n) {
            let {
                tag: r = "div",
                children: a,
                className: i = "",
                swiper: l,
                zoom: s,
                lazy: o,
                virtualIndex: c,
                swiperSlideIndex: u,
                ...d
            } = void 0 === t ? {} : t;
            const f = (0, e.useRef)(null),
                [p, m] = (0, e.useState)("swiper-slide"),
                [h, v] = (0, e.useState)(!1);

            function g(e, t, n) {
                t === f.current && m(n)
            }
            qe((() => {
                if ("undefined" !== typeof u && (f.current.swiperSlideIndex = u), n && (n.current = f.current), f.current && l) {
                    if (!l.destroyed) return l.on("_slideClass", g), () => {
                        l && l.off("_slideClass", g)
                    };
                    "swiper-slide" !== p && m("swiper-slide")
                }
            })), qe((() => {
                l && f.current && !l.destroyed && m(l.getSlideClasses(f.current))
            }), [l]);
            const y = {
                    isActive: p.indexOf("swiper-slide-active") >= 0,
                    isVisible: p.indexOf("swiper-slide-visible") >= 0,
                    isPrev: p.indexOf("swiper-slide-prev") >= 0,
                    isNext: p.indexOf("swiper-slide-next") >= 0
                },
                b = () => "function" === typeof a ? a(y) : a;
            return e.createElement(r, He({
                ref: f,
                className: Fe("".concat(p).concat(i ? " ".concat(i) : "")),
                "data-swiper-slide-index": c,
                onLoad: () => {
                    v(!0)
                }
            }, d), s && e.createElement(Ue.Provider, {
                value: y
            }, e.createElement("div", {
                className: "swiper-zoom-container",
                "data-swiper-zoom": "number" === typeof s ? s : void 0
            }, b(), o && !h && e.createElement("div", {
                className: "swiper-lazy-preloader"
            }))), !s && e.createElement(Ue.Provider, {
                value: y
            }, b(), o && !h && e.createElement("div", {
                className: "swiper-lazy-preloader"
            })))
        }));

        function Xe(e, t, n, r) {
            return e.params.createElements && Object.keys(r).forEach((a => {
                if (!n[a] && !0 === n.auto) {
                    let i = H(e.el, ".".concat(r[a]))[0];
                    i || (i = V("div", r[a]), i.className = r[a], e.el.append(i)), n[a] = i, t[a] = i
                }
            })), n
        }

        function Je(e) {
            let {
                swiper: t,
                extendParams: n,
                on: r,
                emit: a
            } = e;

            function i(e) {
                let n;
                return e && "string" === typeof e && t.isElement && (n = t.el.querySelector(e), n) ? n : (e && ("string" === typeof e && (n = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" === typeof e && n && n.length > 1 && 1 === t.el.querySelectorAll(e).length ? n = t.el.querySelector(e) : n && 1 === n.length && (n = n[0])), e && !n ? e : n)
            }

            function l(e, n) {
                const r = t.params.navigation;
                (e = Y(e)).forEach((e => {
                    e && (e.classList[n ? "add" : "remove"](...r.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = n), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass))
                }))
            }

            function s() {
                const {
                    nextEl: e,
                    prevEl: n
                } = t.navigation;
                if (t.params.loop) return l(n, !1), void l(e, !1);
                l(n, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind)
            }

            function o(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a("navigationPrev"))
            }

            function c(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"))
            }

            function u() {
                const e = t.params.navigation;
                if (t.params.navigation = Xe(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), !e.nextEl && !e.prevEl) return;
                let n = i(e.nextEl),
                    r = i(e.prevEl);
                Object.assign(t.navigation, {
                    nextEl: n,
                    prevEl: r
                }), n = Y(n), r = Y(r);
                const a = (n, r) => {
                    n && n.addEventListener("click", "next" === r ? c : o), !t.enabled && n && n.classList.add(...e.lockClass.split(" "))
                };
                n.forEach((e => a(e, "next"))), r.forEach((e => a(e, "prev")))
            }

            function d() {
                let {
                    nextEl: e,
                    prevEl: n
                } = t.navigation;
                e = Y(e), n = Y(n);
                const r = (e, n) => {
                    e.removeEventListener("click", "next" === n ? c : o), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                };
                e.forEach((e => r(e, "next"))), n.forEach((e => r(e, "prev")))
            }
            n({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {
                nextEl: null,
                prevEl: null
            }, r("init", (() => {
                !1 === t.params.navigation.enabled ? f() : (u(), s())
            })), r("toEdge fromEdge lock unlock", (() => {
                s()
            })), r("destroy", (() => {
                d()
            })), r("enable disable", (() => {
                let {
                    nextEl: e,
                    prevEl: n
                } = t.navigation;
                e = Y(e), n = Y(n), t.enabled ? s() : [...e, ...n].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
            })), r("click", ((e, n) => {
                let {
                    nextEl: r,
                    prevEl: i
                } = t.navigation;
                r = Y(r), i = Y(i);
                const l = n.target;
                if (t.params.navigation.hideOnClick && !i.includes(l) && !r.includes(l)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
                    let e;
                    r.length ? e = r[0].classList.contains(t.params.navigation.hiddenClass) : i.length && (e = i[0].classList.contains(t.params.navigation.hiddenClass)), a(!0 === e ? "navigationShow" : "navigationHide"), [...r, ...i].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                }
            }));
            const f = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), d()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), s()
                },
                disable: f,
                update: s,
                init: u,
                destroy: d
            })
        }

        function Ze(e) {
            return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, "."))
        }

        function Ke(e) {
            let {
                swiper: t,
                extendParams: n,
                on: r,
                emit: a
            } = e;
            const i = "swiper-pagination";
            let l;
            n({
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
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: "".concat(i, "-bullet"),
                    bulletActiveClass: "".concat(i, "-bullet-active"),
                    modifierClass: "".concat(i, "-"),
                    currentClass: "".concat(i, "-current"),
                    totalClass: "".concat(i, "-total"),
                    hiddenClass: "".concat(i, "-hidden"),
                    progressbarFillClass: "".concat(i, "-progressbar-fill"),
                    progressbarOppositeClass: "".concat(i, "-progressbar-opposite"),
                    clickableClass: "".concat(i, "-clickable"),
                    lockClass: "".concat(i, "-lock"),
                    horizontalClass: "".concat(i, "-horizontal"),
                    verticalClass: "".concat(i, "-vertical"),
                    paginationDisabledClass: "".concat(i, "-disabled")
                }
            }), t.pagination = {
                el: null,
                bullets: []
            };
            let s = 0;

            function o() {
                return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
            }

            function c(e, n) {
                const {
                    bulletActiveClass: r
                } = t.params.pagination;
                e && (e = e["".concat("prev" === n ? "previous" : "next", "ElementSibling")]) && (e.classList.add("".concat(r, "-").concat(n)), (e = e["".concat("prev" === n ? "previous" : "next", "ElementSibling")]) && e.classList.add("".concat(r, "-").concat(n, "-").concat(n)))
            }

            function u(e) {
                const n = e.target.closest(Ze(t.params.pagination.bulletClass));
                if (!n) return;
                e.preventDefault();
                const r = q(n) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === r) return;
                    t.slideToLoop(r)
                } else t.slideTo(r)
            }

            function d() {
                const e = t.rtl,
                    n = t.params.pagination;
                if (o()) return;
                let r, i, u = t.pagination.el;
                u = Y(u);
                const d = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    f = t.params.loop ? Math.ceil(d / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (i = t.previousRealIndex || 0, r = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : "undefined" !== typeof t.snapIndex ? (r = t.snapIndex, i = t.previousSnapIndex) : (i = t.previousIndex || 0, r = t.activeIndex || 0), "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const a = t.pagination.bullets;
                    let o, d, f;
                    if (n.dynamicBullets && (l = W(a[0], t.isHorizontal() ? "width" : "height", !0), u.forEach((e => {
                            e.style[t.isHorizontal() ? "width" : "height"] = "".concat(l * (n.dynamicMainBullets + 4), "px")
                        })), n.dynamicMainBullets > 1 && void 0 !== i && (s += r - (i || 0), s > n.dynamicMainBullets - 1 ? s = n.dynamicMainBullets - 1 : s < 0 && (s = 0)), o = Math.max(r - s, 0), d = o + (Math.min(a.length, n.dynamicMainBullets) - 1), f = (d + o) / 2), a.forEach((e => {
                            const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => "".concat(n.bulletActiveClass).concat(e)))].map((e => "string" === typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                            e.classList.remove(...t)
                        })), u.length > 1) a.forEach((e => {
                        const a = q(e);
                        a === r ? e.classList.add(...n.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), n.dynamicBullets && (a >= o && a <= d && e.classList.add(..."".concat(n.bulletActiveClass, "-main").split(" ")), a === o && c(e, "prev"), a === d && c(e, "next"))
                    }));
                    else {
                        const e = a[r];
                        if (e && e.classList.add(...n.bulletActiveClass.split(" ")), t.isElement && a.forEach(((e, t) => {
                                e.setAttribute("part", t === r ? "bullet-active" : "bullet")
                            })), n.dynamicBullets) {
                            const e = a[o],
                                t = a[d];
                            for (let r = o; r <= d; r += 1) a[r] && a[r].classList.add(..."".concat(n.bulletActiveClass, "-main").split(" "));
                            c(e, "prev"), c(t, "next")
                        }
                    }
                    if (n.dynamicBullets) {
                        const r = Math.min(a.length, n.dynamicMainBullets + 4),
                            i = (l * r - l) / 2 - f * l,
                            s = e ? "right" : "left";
                        a.forEach((e => {
                            e.style[t.isHorizontal() ? s : "top"] = "".concat(i, "px")
                        }))
                    }
                }
                u.forEach(((e, i) => {
                    if ("fraction" === n.type && (e.querySelectorAll(Ze(n.currentClass)).forEach((e => {
                            e.textContent = n.formatFractionCurrent(r + 1)
                        })), e.querySelectorAll(Ze(n.totalClass)).forEach((e => {
                            e.textContent = n.formatFractionTotal(f)
                        }))), "progressbar" === n.type) {
                        let a;
                        a = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const i = (r + 1) / f;
                        let l = 1,
                            s = 1;
                        "horizontal" === a ? l = i : s = i, e.querySelectorAll(Ze(n.progressbarFillClass)).forEach((e => {
                            e.style.transform = "translate3d(0,0,0) scaleX(".concat(l, ") scaleY(").concat(s, ")"), e.style.transitionDuration = "".concat(t.params.speed, "ms")
                        }))
                    }
                    "custom" === n.type && n.renderCustom ? (e.innerHTML = n.renderCustom(t, r + 1, f), 0 === i && a("paginationRender", e)) : (0 === i && a("paginationRender", e), a("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](n.lockClass)
                }))
            }

            function f() {
                const e = t.params.pagination;
                if (o()) return;
                const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
                let r = t.pagination.el;
                r = Y(r);
                let i = "";
                if ("bullets" === e.type) {
                    let r = t.params.loop ? Math.ceil(n / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && r > n && (r = n);
                    for (let n = 0; n < r; n += 1) e.renderBullet ? i += e.renderBullet.call(t, n, e.bulletClass) : i += "<".concat(e.bulletElement, " ").concat(t.isElement ? 'part="bullet"' : "", ' class="').concat(e.bulletClass, '"></').concat(e.bulletElement, ">")
                }
                "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : '<span class="'.concat(e.currentClass, '"></span>') + " / " + '<span class="'.concat(e.totalClass, '"></span>')), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : '<span class="'.concat(e.progressbarFillClass, '"></span>')), t.pagination.bullets = [], r.forEach((n => {
                    "custom" !== e.type && (n.innerHTML = i || ""), "bullets" === e.type && t.pagination.bullets.push(...n.querySelectorAll(Ze(e.bulletClass)))
                })), "custom" !== e.type && a("paginationRender", r[0])
            }

            function p() {
                t.params.pagination = Xe(t, t.originalParams.pagination, t.params.pagination, {
                    el: "swiper-pagination"
                });
                const e = t.params.pagination;
                if (!e.el) return;
                let n;
                "string" === typeof e.el && t.isElement && (n = t.el.querySelector(e.el)), n || "string" !== typeof e.el || (n = [...document.querySelectorAll(e.el)]), n || (n = e.el), n && 0 !== n.length && (t.params.uniqueNavElements && "string" === typeof e.el && Array.isArray(n) && n.length > 1 && (n = [...t.el.querySelectorAll(e.el)], n.length > 1 && (n = n.filter((e => U(e, ".swiper")[0] === t.el))[0])), Array.isArray(n) && 1 === n.length && (n = n[0]), Object.assign(t.pagination, {
                    el: n
                }), n = Y(n), n.forEach((n => {
                    "bullets" === e.type && e.clickable && n.classList.add(...(e.clickableClass || "").split(" ")), n.classList.add(e.modifierClass + e.type), n.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (n.classList.add("".concat(e.modifierClass).concat(e.type, "-dynamic")), s = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.classList.add(e.progressbarOppositeClass), e.clickable && n.addEventListener("click", u), t.enabled || n.classList.add(e.lockClass)
                })))
            }

            function m() {
                const e = t.params.pagination;
                if (o()) return;
                let n = t.pagination.el;
                n && (n = Y(n), n.forEach((n => {
                    n.classList.remove(e.hiddenClass), n.classList.remove(e.modifierClass + e.type), n.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (n.classList.remove(...(e.clickableClass || "").split(" ")), n.removeEventListener("click", u))
                }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
            }
            r("changeDirection", (() => {
                if (!t.pagination || !t.pagination.el) return;
                const e = t.params.pagination;
                let {
                    el: n
                } = t.pagination;
                n = Y(n), n.forEach((n => {
                    n.classList.remove(e.horizontalClass, e.verticalClass), n.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }))
            })), r("init", (() => {
                !1 === t.params.pagination.enabled ? h() : (p(), f(), d())
            })), r("activeIndexChange", (() => {
                "undefined" === typeof t.snapIndex && d()
            })), r("snapIndexChange", (() => {
                d()
            })), r("snapGridLengthChange", (() => {
                f(), d()
            })), r("destroy", (() => {
                m()
            })), r("enable disable", (() => {
                let {
                    el: e
                } = t.pagination;
                e && (e = Y(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
            })), r("lock unlock", (() => {
                d()
            })), r("click", ((e, n) => {
                const r = n.target,
                    i = Y(t.pagination.el);
                if (t.params.pagination.el && t.params.pagination.hideOnClick && i && i.length > 0 && !r.classList.contains(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && r === t.navigation.nextEl || t.navigation.prevEl && r === t.navigation.prevEl)) return;
                    const e = i[0].classList.contains(t.params.pagination.hiddenClass);
                    a(!0 === e ? "paginationShow" : "paginationHide"), i.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                }
            }));
            const h = () => {
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                let {
                    el: e
                } = t.pagination;
                e && (e = Y(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), m()
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = t.pagination;
                    e && (e = Y(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), p(), f(), d()
                },
                disable: h,
                render: f,
                update: d,
                init: p,
                destroy: m
            })
        }

        function $e(e) {
            let t, n, {
                swiper: r,
                extendParams: a,
                on: i,
                emit: l,
                params: s
            } = e;
            r.autoplay = {
                running: !1,
                paused: !1,
                timeLeft: 0
            }, a({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !1,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            });
            let o, c, u, d, f, p, m, h, v = s && s.autoplay ? s.autoplay.delay : 3e3,
                g = s && s.autoplay ? s.autoplay.delay : 3e3,
                y = (new Date).getTime();

            function b(e) {
                r && !r.destroyed && r.wrapperEl && e.target === r.wrapperEl && (r.wrapperEl.removeEventListener("transitionend", b), h || E())
            }
            const x = () => {
                    if (r.destroyed || !r.autoplay.running) return;
                    r.autoplay.paused ? c = !0 : c && (g = o, c = !1);
                    const e = r.autoplay.paused ? o : y + g - (new Date).getTime();
                    r.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), n = requestAnimationFrame((() => {
                        x()
                    }))
                },
                w = e => {
                    if (r.destroyed || !r.autoplay.running) return;
                    cancelAnimationFrame(n), x();
                    let a = "undefined" === typeof e ? r.params.autoplay.delay : e;
                    v = r.params.autoplay.delay, g = r.params.autoplay.delay;
                    const i = (() => {
                        let e;
                        if (e = r.virtual && r.params.virtual.enabled ? r.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : r.slides[r.activeIndex], !e) return;
                        return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                    })();
                    !Number.isNaN(i) && i > 0 && "undefined" === typeof e && (a = i, v = i, g = i), o = a;
                    const s = r.params.speed,
                        c = () => {
                            r && !r.destroyed && (r.params.autoplay.reverseDirection ? !r.isBeginning || r.params.loop || r.params.rewind ? (r.slidePrev(s, !0, !0), l("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(r.slides.length - 1, s, !0, !0), l("autoplay")) : !r.isEnd || r.params.loop || r.params.rewind ? (r.slideNext(s, !0, !0), l("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(0, s, !0, !0), l("autoplay")), r.params.cssMode && (y = (new Date).getTime(), requestAnimationFrame((() => {
                                w()
                            }))))
                        };
                    return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
                        c()
                    }), a)) : requestAnimationFrame((() => {
                        c()
                    })), a
                },
                S = () => {
                    y = (new Date).getTime(), r.autoplay.running = !0, w(), l("autoplayStart")
                },
                k = () => {
                    r.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(n), l("autoplayStop")
                },
                _ = (e, n) => {
                    if (r.destroyed || !r.autoplay.running) return;
                    clearTimeout(t), e || (m = !0);
                    const a = () => {
                        l("autoplayPause"), r.params.autoplay.waitForTransition ? r.wrapperEl.addEventListener("transitionend", b) : E()
                    };
                    if (r.autoplay.paused = !0, n) return p && (o = r.params.autoplay.delay), p = !1, void a();
                    const i = o || r.params.autoplay.delay;
                    o = i - ((new Date).getTime() - y), r.isEnd && o < 0 && !r.params.loop || (o < 0 && (o = 0), a())
                },
                E = () => {
                    r.isEnd && o < 0 && !r.params.loop || r.destroyed || !r.autoplay.running || (y = (new Date).getTime(), m ? (m = !1, w(o)) : w(), r.autoplay.paused = !1, l("autoplayResume"))
                },
                C = () => {
                    if (r.destroyed || !r.autoplay.running) return;
                    const e = P();
                    "hidden" === e.visibilityState && (m = !0, _(!0)), "visible" === e.visibilityState && E()
                },
                j = e => {
                    "mouse" === e.pointerType && (m = !0, h = !0, r.animating || r.autoplay.paused || _(!0))
                },
                T = e => {
                    "mouse" === e.pointerType && (h = !1, r.autoplay.paused && E())
                };
            i("init", (() => {
                r.params.autoplay.enabled && (r.params.autoplay.pauseOnMouseEnter && (r.el.addEventListener("pointerenter", j), r.el.addEventListener("pointerleave", T)), P().addEventListener("visibilitychange", C), S())
            })), i("destroy", (() => {
                r.el.removeEventListener("pointerenter", j), r.el.removeEventListener("pointerleave", T), P().removeEventListener("visibilitychange", C), r.autoplay.running && k()
            })), i("_freeModeStaticRelease", (() => {
                (d || m) && E()
            })), i("_freeModeNoMomentumRelease", (() => {
                r.params.autoplay.disableOnInteraction ? k() : _(!0, !0)
            })), i("beforeTransitionStart", ((e, t, n) => {
                !r.destroyed && r.autoplay.running && (n || !r.params.autoplay.disableOnInteraction ? _(!0, !0) : k())
            })), i("sliderFirstMove", (() => {
                !r.destroyed && r.autoplay.running && (r.params.autoplay.disableOnInteraction ? k() : (u = !0, d = !1, m = !1, f = setTimeout((() => {
                    m = !0, d = !0, _(!0)
                }), 200)))
            })), i("touchEnd", (() => {
                if (!r.destroyed && r.autoplay.running && u) {
                    if (clearTimeout(f), clearTimeout(t), r.params.autoplay.disableOnInteraction) return d = !1, void(u = !1);
                    d && r.params.cssMode && E(), d = !1, u = !1
                }
            })), i("slideChange", (() => {
                !r.destroyed && r.autoplay.running && (p = !0)
            })), Object.assign(r.autoplay, {
                start: S,
                stop: k,
                pause: _,
                resume: E
            })
        }
       
        Qe.displayName = "SwiperSlide";
        const et = () => (0, l.jsxs)("section", {
            className: "project container section",
            id: "projects",
            children: [(0, l.jsx)("h2", {
                className: "section__title",
                children: "Selected Projects"
            }), (0, l.jsx)("span", {
                className: "section__subtitle",
                children: "Few Projects I Worked On"
            }), (0, l.jsx)(Ye, {
                className: "project__container",
                loop: !0,
                grabCursor: !0,
                spaceBetween: 24,
                navigation: !1,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: !1
                },
                pagination: {
                    clickable: !0
                },
                breakpoints: {
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48
                    }
                },
                modules: [$e, Ke, Je],
                children: C.map((e => {
                    let {
                        id: t,
                        image: n,
                        title: r,
                        description: a
                    } = e;
                    return (0, l.jsxs)(Qe, {
                        className: "project__card",
                        children: [(0, l.jsx)("img", {
                            src: n,
                            alt: "",
                            className: "project__image"
                        }), (0, l.jsx)("h3", {
                            className: "project__name",
                            children: r
                        }), (0, l.jsx)("p", {
                            className: "project__description",
                            children: a
                        })]
                    }, t)
                }))
            })]
        });
        class tt {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Network Error";
                this.status = e, this.text = t
            }
        }
        const nt = {
                origin: "https://api.emailjs.com",
                blockHeadless: !1,
                storageProvider: (() => {
                    if ("undefined" !== typeof localStorage) return {
                        get: e => Promise.resolve(localStorage.getItem(e)),
                        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
                        remove: e => Promise.resolve(localStorage.removeItem(e))
                    }
                })()
            },
            rt = e => e ? "string" === typeof e ? {
                publicKey: e
            } : "[object Object]" === e.toString() ? e : {} : {},
            at = async function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const r = await fetch(nt.origin + e, {
                        method: "POST",
                        headers: n,
                        body: t
                    }),
                    a = await r.text(),
                    i = new tt(r.status, a);
                if (r.ok) return i;
                throw i
            }, it = (e, t, n) => {
                if (!e || "string" !== typeof e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
                if (!t || "string" !== typeof t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                if (!n || "string" !== typeof n) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
            }, lt = e => e.webdriver || !e.languages || 0 === e.languages.length, st = () => new tt(451, "Unavailable For Headless Browser"), ot = (e, t) => {
                if ((e => {
                        var t;
                        return !(null !== (t = e.list) && void 0 !== t && t.length) || !e.watchVariable
                    })(e)) return !1;
                ((e, t) => {
                    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
                    if ("string" !== typeof t) throw "The BlockList watchVariable has to be a string"
                })(e.list, e.watchVariable);
                const n = (r = t, a = e.watchVariable, r instanceof FormData ? r.get(a) : r[a]);
                var r, a;
                return "string" === typeof n && e.list.includes(n)
            }, ct = () => new tt(403, "Forbidden"), ut = async (e, t, n) => {
                if (!t.throttle || !n) return !1;
                ((e, t) => {
                    if ("number" !== typeof e || e < 0) throw "The LimitRate throttle has to be a positive number";
                    if (t && "string" !== typeof t) throw "The LimitRate ID has to be a string"
                })(t.throttle, t.id);
                const r = t.id || e,
                    a = await (async (e, t, n) => {
                        const r = Number(await n.get(e) || 0);
                        return t - Date.now() + r
                    })(r, t.throttle, n);
                return a > 0 || (await n.set(r, Date.now().toString()), !1)
            }, dt = () => new tt(429, "Too Many Requests"), ft = async (e, t, n, r) => {
                const a = rt(r),
                    i = a.publicKey || nt.publicKey,
                    l = a.blockHeadless || nt.blockHeadless,
                    s = nt.storageProvider || a.storageProvider,
                    o = {
                        ...nt.blockList,
                        ...a.blockList
                    },
                    c = {
                        ...nt.limitRate,
                        ...a.limitRate
                    };
                if (l && lt(navigator)) return Promise.reject(st());
                const u = (e => "string" === typeof e ? document.querySelector(e) : e)(n);
                it(i, e, t), (e => {
                    if (!e || "FORM" !== e.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
                })(u);
                const d = new FormData(u);
                return ot(o, d) ? Promise.reject(ct()) : await ut(location.pathname, c, s) ? Promise.reject(dt()) : (d.append("lib_version", "4.3.3"), d.append("service_id", e), d.append("template_id", t), d.append("user_id", i), at("/api/v1.0/email/send-form", d))
            }, pt = () => {
                const t = (0, e.useRef)();
                return (0, l.jsxs)("section", {
                    className: "contact section",
                    id: "contact",
                    children: [(0, l.jsx)("h2", {
                        className: "section__title",
                        children: "Contact"
                    }), (0, l.jsx)("span", {
                        className: "section__subtitle",
                        children: "Reach Out"
                    }), (0, l.jsx)("h3", {
                        className: "section__title1",
                        children: "Let's Work Together!"
                    }), (0, l.jsxs)("div", {
                        className: "contact__container container grid",
                        children: [(0, l.jsxs)("div", {
                            className: "contact__content",
                            children: [(0, l.jsx)("h3", {
                                className: "contact__title contact__title1"
                            }), (0, l.jsx)("div", {
                                className: "contact__info",
                                children: (0, l.jsxs)("div", {
                                    className: "contact__card contact__card1",
                                    children: [(0, l.jsx)("i", {
                                        className: "bx bx-mail-send contact__card-icon"
                                    }), (0, l.jsx)("h3", {
                                        className: "contact__card-title",
                                        children: "Email"
                                    }), (0, l.jsx)("span", {
                                        className: "contact__card-data",
                                        children: "eashwarsaisumanth@yahoo.com"
                                    }), (0, l.jsxs)("a", {
                                        href: "mailto:eashwarsaisumanth@yahoo.com",
                                        className: "contact__button",
                                        children: ["Write to me", " ", (0, l.jsx)("i", {
                                            className: "bx bx-right-arrow-alt contact__button-icon"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "contact__info",
                                children: (0, l.jsxs)("div", {
                                    className: "contact__card contact__card1",
                                    children: [(0, l.jsx)("a", {
                                        href: "https://www.linkedin.com/in/eswara-sai-sumanth-mamidi/",
                                        className: "home__social-icon",
                                        target: "_blank",
                                        children: (0, l.jsx)("i", {
                                            class: "uil uil-linkedin"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "https://github.com/Eswara06",
                                        className: "home__social-icon",
                                        target: "_blank",
                                        children: (0, l.jsx)("i", {
                                            class: "uil uil-github"
                                        })
                                    })]
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "contact__content",
                            children: (0, l.jsxs)("form", {
                                ref: t,
                                onSubmit: e => {
                                    e.preventDefault(), ft("service_twh08y4", "template_l60145m", t.current, {
                                        publicKey: "U_yn4ikU8kyi-_8Q2"
                                    }), e.target.reset()
                                },
                                className: "contact__form",
                                children: [(0, l.jsxs)("div", {
                                    className: "contact__form-div",
                                    children: [(0, l.jsx)("label", {
                                        className: "contact__form-tag",
                                        children: "Name"
                                    }), (0, l.jsx)("input", {
                                        type: "text",
                                        name: "name",
                                        className: "contact__form-input",
                                        placeholder: "Write your name..."
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "contact__form-div",
                                    children: [(0, l.jsx)("label", {
                                        className: "contact__form-tag",
                                        children: "Mail"
                                    }), (0, l.jsx)("input", {
                                        type: "email",
                                        name: "email",
                                        className: "contact__form-input",
                                        placeholder: "Write your email..."
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "contact__form-div contact__form-area",
                                    children: [(0, l.jsx)("label", {
                                        className: "contact__form-tag",
                                        children: "Message"
                                    }), (0, l.jsx)("textarea", {
                                        name: "project",
                                        cols: "30",
                                        rows: "10",
                                        className: "contact__form-input",
                                        placeholder: "Write your message..."
                                    })]
                                }), (0, l.jsxs)("button", {
                                    className: "button button--flex",
                                    children: ["Send Message", (0, l.jsxs)("svg", {
                                        class: "button__icon",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [(0, l.jsx)("path", {
                                            d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                                            fill: "var(--container-color)"
                                        }), (0, l.jsx)("path", {
                                            d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                                            fill: "var(--container-color)"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }, mt = () => (0, l.jsx)("footer", {
                className: "footer",
                children: (0, l.jsxs)("div", {
                    className: "footer__container container",
                    children: [(0, l.jsx)("h1", {
                        className: "footer__title",
                        children: "Eswara Sai Sumanth Mamidi"
                    }), (0, l.jsxs)("ul", {
                        className: "footer__list",
                        children: [(0, l.jsx)("li", {
                            children: (0, l.jsx)("a", {
                                href: "#about",
                                className: "footer__link",
                                children: "About"
                            })
                        }), (0, l.jsx)("li", {
                            children: (0, l.jsx)("a", {
                                href: "#projects",
                                className: "footer__link",
                                children: "Projects"
                            })
                        }), (0, l.jsx)("li", {
                            children: (0, l.jsx)("a", {
                                href: "#skills",
                                className: "footer__link",
                                children: "Skills"
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "footer__social",
                        children: [(0, l.jsx)("a", {
                            href: "https://www.linkedin.com/in/eswara-sai-sumanth-mamidi/",
                            className: "footer__social-link",
                            target: "_blank",
                            children: (0, l.jsx)("i", {
                                class: "bx bxl-linkedin"
                            })
                        }), (0, l.jsx)("a", {
                            href: "https://github.com/Eswara06",
                            className: "footer__social-link",
                            target: "_blank",
                            children: (0, l.jsx)("i", {
                                class: "bx bxl-github"
                            })
                        
                        })]
                    }), (0, l.jsx)("span", {
                        className: "footer__copy",
                        children: "\xa9 2025. Eswara Sai Sumanth Mamidi. All Rights Reserved."
                    })]
                })
            }), ht = () => (window.addEventListener("scroll", (function() {
                const e = document.querySelector(".scrollup");
                this.scrollY >= 560 ? e.classList.add("show-scroll") : e.classList.remove("show-scroll")
            })), (0, l.jsx)("a", {
                href: "#",
                className: "scrollup",
                children: (0, l.jsx)("i", {
                    className: "uil uil-arrow-up scrollup__icon"
                })
            })), vt = () => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(s, {}), (0, l.jsx)(a(), {
                    innerSize: 25,
                    outerSize: 35,
                    color: "255, 160, 148",
                    innerAlpha: .5,
                    outerAlpha: .5,
                    innerScale: 2.25,
                    outerScale: 2.5,
                    innerStyle: {
                        background: "rgba(255, 160, 148, 0.2)",
                        border: "solid 1.5px white"
                    },
                    outerStyle: {},
                    clickables: ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'input[type="button"]', "label[for]", "select", "textarea", "button", ".link", {
                        target: ".custom",
                        options: {
                            innerSize: 12,
                            outerSize: 24,
                            color: "255, 255, 255",
                            outerAlpha: .3,
                            innerScale: .5,
                            outerScale: 3
                        }
                    }]
                }), (0, l.jsxs)("main", {
                    className: "main",
                    children: [(0, l.jsx)(f, {}), (0, l.jsx)(h, {}), (0, l.jsx)(E, {}), (0, l.jsx)(x, {}), (0, l.jsx)(et, {}), (0, l.jsx)(pt, {})]
                }), (0, l.jsx)(mt, {}), (0, l.jsx)(ht, {})]
            }), gt = e => {
                e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((t => {
                    let {
                        getCLS: n,
                        getFID: r,
                        getFCP: a,
                        getLCP: i,
                        getTTFB: l
                    } = t;
                    n(e), r(e), a(e), i(e), l(e)
                }))
            };
        t.createRoot(document.getElementById("root")).render((0, l.jsx)(e.StrictMode, {
            children: (0, l.jsx)(vt, {})
        })), gt()
    })()
})();
//# sourceMappingURL=main.c62e81bd.js.map