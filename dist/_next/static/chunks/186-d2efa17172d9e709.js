"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [186],
  {
    6463: function (t, e, i) {
      var r = i(1169);
      i.o(r, "useRouter") &&
        i.d(e, {
          useRouter: function () {
            return r.useRouter;
          }
        });
    },
    5815: function (t, e, i) {
      i.d(e, {
        f: function () {
          return d;
        }
      });
      var r = i(2265);
      i(4887);
      var n = i(7437),
        s = r.forwardRef((t, e) => {
          let { children: i, ...s } = t,
            a = r.Children.toArray(i),
            u = a.find(l);
          if (u) {
            let t = u.props.children,
              i = a.map((e) =>
                e !== u
                  ? e
                  : r.Children.count(t) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(t)
                  ? t.props.children
                  : null
              );
            return (0, n.jsx)(o, {
              ...s,
              ref: e,
              children: r.isValidElement(t)
                ? r.cloneElement(t, void 0, i)
                : null
            });
          }
          return (0, n.jsx)(o, { ...s, ref: e, children: i });
        });
      s.displayName = "Slot";
      var o = r.forwardRef((t, e) => {
        let { children: i, ...n } = t;
        if (r.isValidElement(i)) {
          let t, s;
          let o =
            (t = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
            "isReactWarning" in t &&
            t.isReactWarning
              ? i.ref
              : (t = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                "isReactWarning" in t &&
                t.isReactWarning
              ? i.props.ref
              : i.props.ref || i.ref;
          return r.cloneElement(i, {
            ...(function (t, e) {
              let i = { ...e };
              for (let r in e) {
                let n = t[r],
                  s = e[r];
                /^on[A-Z]/.test(r)
                  ? n && s
                    ? (i[r] = (...t) => {
                        s(...t), n(...t);
                      })
                    : n && (i[r] = n)
                  : "style" === r
                  ? (i[r] = { ...n, ...s })
                  : "className" === r &&
                    (i[r] = [n, s].filter(Boolean).join(" "));
              }
              return { ...t, ...i };
            })(n, i.props),
            ref: e
              ? (function (...t) {
                  return (e) =>
                    t.forEach((t) => {
                      "function" == typeof t
                        ? t(e)
                        : null != t && (t.current = e);
                    });
                })(e, o)
              : o
          });
        }
        return r.Children.count(i) > 1 ? r.Children.only(null) : null;
      });
      o.displayName = "SlotClone";
      var a = ({ children: t }) => (0, n.jsx)(n.Fragment, { children: t });
      function l(t) {
        return r.isValidElement(t) && t.type === a;
      }
      var u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul"
        ].reduce((t, e) => {
          let i = r.forwardRef((t, i) => {
            let { asChild: r, ...o } = t,
              a = r ? s : e;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, n.jsx)(a, { ...o, ref: i })
            );
          });
          return (i.displayName = `Primitive.${e}`), { ...t, [e]: i };
        }, {}),
        h = r.forwardRef((t, e) =>
          (0, n.jsx)(u.label, {
            ...t,
            ref: e,
            onMouseDown: (e) => {
              var i;
              e.target.closest("button, input, select, textarea") ||
                (null === (i = t.onMouseDown) || void 0 === i || i.call(t, e),
                !e.defaultPrevented && e.detail > 1 && e.preventDefault());
            }
          })
        );
      h.displayName = "Label";
      var d = h;
    },
    8646: function (t, e, i) {
      i.d(e, {
        _: function () {
          return r;
        }
      });
      function r(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
    },
    4839: function (t, e, i) {
      i.d(e, {
        W: function () {
          return r;
        }
      });
      function r() {
        for (var t, e, i = 0, r = "", n = arguments.length; i < n; i++)
          (t = arguments[i]) &&
            (e = (function t(e) {
              var i,
                r,
                n = "";
              if ("string" == typeof e || "number" == typeof e) n += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var s = e.length;
                  for (i = 0; i < s; i++)
                    e[i] && (r = t(e[i])) && (n && (n += " "), (n += r));
                } else for (r in e) e[r] && (n && (n += " "), (n += r));
              }
              return n;
            })(t)) &&
            (r && (r += " "), (r += e));
        return r;
      }
    },
    9791: function (t, e, i) {
      i.d(e, {
        _: function () {
          return r;
        }
      });
      let r = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never"
      });
    },
    2981: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        }
      });
      var r = i(565);
      class n {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender"
      ];
      function o(t, e) {
        let i = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new n(),
                  i = new n(),
                  r = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (t, n = !1, o = !1) => {
                      let l = o && s,
                        u = l ? e : i;
                      return (
                        n && a.add(t),
                        u.add(t) && l && s && (r = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), a.delete(t);
                    },
                    process: (n) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (r = e.order.length))
                      )
                        for (let i = 0; i < r; i++) {
                          let r = e.order[i];
                          a.has(r) && (l.schedule(r), t()), r(n);
                        }
                      (s = !1), o && ((o = !1), l.process(n));
                    }
                  };
                return l;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          u = (t) => {
            l[t].process(a);
          },
          h = () => {
            let n = r.c.useManualTiming ? a.timestamp : performance.now();
            (i = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(n - a.timestamp, 40), 1)),
              (a.timestamp = n),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              i && e && ((o = !1), t(h));
          },
          d = () => {
            (i = !0), (o = !0), a.isProcessing || t(h);
          };
        return {
          schedule: s.reduce((t, e) => {
            let r = l[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || d(), r.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => s.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l
        };
      }
    },
    6219: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return n;
        },
        frameData: function () {
          return o;
        }
      });
      var r = i(9276);
      let {
        schedule: n,
        cancel: s,
        state: o,
        steps: a
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.Z,
        !0
      );
    },
    9993: function (t, e, i) {
      let r;
      i.d(e, {
        X: function () {
          return a;
        }
      });
      var n = i(565),
        s = i(6219);
      function o() {
        r = void 0;
      }
      let a = {
        now: () => (
          void 0 === r &&
            a.set(
              s.frameData.isProcessing || n.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          r
        ),
        set: (t) => {
          (r = t), queueMicrotask(o);
        }
      };
    },
    6550: function (t, e, i) {
      i.d(e, {
        E: function () {
          return n4;
        }
      });
      var r,
        n = i(7437),
        s = i(2265),
        o = i(9791);
      let a = (0, s.createContext)({}),
        l = (0, s.createContext)(null);
      var u = i(9033);
      let h = (0, s.createContext)({ strict: !1 }),
        d = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        c = "data-" + d("framerAppearId"),
        { schedule: p, cancel: m } = (0, i(2981).Z)(queueMicrotask, !1);
      function f(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let g = (0, s.createContext)({}),
        v = !1;
      function y() {
        window.HandoffComplete = !0;
      }
      function b(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function x(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let w = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit"
        ],
        P = ["initial", ...w];
      function T(t) {
        return x(t.animate) || P.some((e) => b(t[e]));
      }
      function S(t) {
        return !!(T(t) || t.variants);
      }
      function A(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let V = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag"
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"]
        },
        k = {};
      for (let t in V) k[t] = { isEnabled: (e) => V[t].some((t) => !!e[t]) };
      var C = i(7282);
      let E = (0, s.createContext)({}),
        M = Symbol.for("motionComponentSymbol"),
        R = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view"
        ];
      function D(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (R.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let j = {},
        L = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY"
        ],
        F = new Set(L);
      function B(t, { layout: e, layoutId: i }) {
        return (
          F.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!j[t] || "opacity" === t))
        );
      }
      var O = i(8322);
      let W = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        I = L.length,
        z = (t) => (e) => "string" == typeof e && e.startsWith(t),
        U = z("--"),
        N = z("var(--"),
        $ = (t) => !!N(t) && X.test(t.split("/*")[0].trim()),
        X =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        H = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        G = (t, e, i) => (i > e ? e : i < t ? t : i),
        Z = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t
        },
        Y = { ...Z, transform: (t) => G(0, 1, t) },
        K = { ...Z, default: 1 },
        q = (t) => Math.round(1e5 * t) / 1e5,
        _ = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        J =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        Q =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function tt(t) {
        return "string" == typeof t;
      }
      let te = (t) => ({
          test: (e) => tt(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`
        }),
        ti = te("deg"),
        tr = te("%"),
        tn = te("px"),
        ts = te("vh"),
        to = te("vw"),
        ta = {
          ...tr,
          parse: (t) => tr.parse(t) / 100,
          transform: (t) => tr.transform(100 * t)
        },
        tl = { ...Z, transform: Math.round },
        tu = {
          borderWidth: tn,
          borderTopWidth: tn,
          borderRightWidth: tn,
          borderBottomWidth: tn,
          borderLeftWidth: tn,
          borderRadius: tn,
          radius: tn,
          borderTopLeftRadius: tn,
          borderTopRightRadius: tn,
          borderBottomRightRadius: tn,
          borderBottomLeftRadius: tn,
          width: tn,
          maxWidth: tn,
          height: tn,
          maxHeight: tn,
          size: tn,
          top: tn,
          right: tn,
          bottom: tn,
          left: tn,
          padding: tn,
          paddingTop: tn,
          paddingRight: tn,
          paddingBottom: tn,
          paddingLeft: tn,
          margin: tn,
          marginTop: tn,
          marginRight: tn,
          marginBottom: tn,
          marginLeft: tn,
          rotate: ti,
          rotateX: ti,
          rotateY: ti,
          rotateZ: ti,
          scale: K,
          scaleX: K,
          scaleY: K,
          scaleZ: K,
          skew: ti,
          skewX: ti,
          skewY: ti,
          distance: tn,
          translateX: tn,
          translateY: tn,
          translateZ: tn,
          x: tn,
          y: tn,
          z: tn,
          perspective: tn,
          transformPerspective: tn,
          opacity: Y,
          originX: ta,
          originY: ta,
          originZ: tn,
          zIndex: tl,
          backgroundPositionX: tn,
          backgroundPositionY: tn,
          fillOpacity: Y,
          strokeOpacity: Y,
          numOctaves: tl
        };
      function th(t, e, i, r) {
        let { style: n, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if (U(t)) {
            s[t] = i;
            continue;
          }
          let r = tu[t],
            d = H(i, r);
          if (F.has(t)) {
            if (((l = !0), (o[t] = d), !h)) continue;
            i !== (r.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = d)) : (n[t] = d);
        }
        if (
          (!e.transform &&
            (l || r
              ? (n.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0
                  },
                  r,
                  n
                ) {
                  let s = "";
                  for (let e = 0; e < I; e++) {
                    let i = L[e];
                    if (void 0 !== t[i]) {
                      let e = W[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    n ? (s = n(t, r ? "" : s)) : i && r && (s = "none"),
                    s
                  );
                })(t.transform, i, h, r))
              : n.transform && (n.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let td = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      });
      function tc(t, e, i) {
        for (let r in e) (0, O.i)(e[r]) || B(r, i) || (t[r] = e[r]);
      }
      let tp = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport"
      ]);
      function tm(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          tp.has(t)
        );
      }
      let tf = (t) => !tm(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (tf = (t) => (t.startsWith("on") ? !tm(t) : r(t)));
      } catch (t) {}
      function tg(t, e, i) {
        return "string" == typeof t ? t : tn.transform(e + i * t);
      }
      let tv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ty = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tb(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d,
        c
      ) {
        if ((th(t, u, h, c), d)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: f } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform),
          f &&
            (void 0 !== n || void 0 !== s || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let r = tg(e, t.x, t.width),
                n = tg(i, t.y, t.height);
              return `${r} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== r && (p.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? tv : ty;
              t[s.offset] = tn.transform(-r);
              let o = tn.transform(e),
                a = tn.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let tx = () => ({ ...td(), attrs: {} }),
        tw = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tP(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let tT = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust"
      ]);
      function tS(t, e, i, r) {
        for (let i in (tP(t, e, void 0, r), e.attrs))
          t.setAttribute(tT.has(i) ? i : d(i), e.attrs[i]);
      }
      function tA(t, e, i) {
        var r;
        let { style: n } = t,
          s = {};
        for (let o in n)
          ((0, O.i)(n[o]) ||
            (e.style && (0, O.i)(e.style[o])) ||
            B(o, t) ||
            (null === (r = null == i ? void 0 : i.getValue(o)) || void 0 === r
              ? void 0
              : r.liveStyle) !== void 0) &&
            (s[o] = n[o]);
        return s;
      }
      function tV(t, e, i) {
        let r = tA(t, e, i);
        for (let i in t)
          ((0, O.i)(t[i]) || (0, O.i)(e[i])) &&
            (r[
              -1 !== L.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      function tk(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function tC(t, e, i, r) {
        if ("function" == typeof e) {
          let [n, s] = tk(r);
          e = e(void 0 !== i ? i : t.custom, n, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, s] = tk(r);
          e = e(void 0 !== i ? i : t.custom, n, s);
        }
        return e;
      }
      var tE = i(458);
      let tM = (t) => Array.isArray(t),
        tR = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tD = (t) => (tM(t) ? t[t.length - 1] || 0 : t);
      function tj(t) {
        let e = (0, O.i)(t) ? t.get() : t;
        return tR(e) ? e.toValue() : e;
      }
      let tL = (t) => (e, i) => {
        let r = (0, s.useContext)(a),
          n = (0, s.useContext)(l),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i
              },
              r,
              n,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, r) {
                  let n = {},
                    s = r(t, {});
                  for (let t in s) n[t] = tj(s[t]);
                  let { initial: o, animate: a } = t,
                    l = T(t),
                    u = S(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial,
                    d = (h = h || !1 === o) ? a : o;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !x(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((e) => {
                        let i = tC(t, e);
                        if (!i) return;
                        let { transitionEnd: r, transition: s, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (n[t] = e);
                        }
                        for (let t in r) n[t] = r[t];
                      }),
                    n
                  );
                })(r, n, s, t),
                renderState: e()
              };
              return i && (o.mount = (t) => i(r, t, o)), o;
            })(t, e, r, n);
        return i ? o() : (0, tE.h)(o);
      };
      var tF = i(6219);
      let tB = {
          useVisualState: tL({
            scrapeMotionValuesFromProps: tV,
            createRenderState: tx,
            onMount: (t, e, { renderState: i, latestValues: r }) => {
              tF.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tF.Wi.render(() => {
                  tb(
                    i,
                    r,
                    { enableHardwareAcceleration: !1 },
                    tw(e.tagName),
                    t.transformTemplate
                  ),
                    tS(e, i);
                });
            }
          })
        },
        tO = {
          useVisualState: tL({
            scrapeMotionValuesFromProps: tA,
            createRenderState: td
          })
        };
      function tW(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      let tI = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tz(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let tU = (t) => (e) => tI(e) && t(e, tz(e));
      function tN(t, e, i, r) {
        return tW(t, e, tU(i), r);
      }
      let t$ = (t, e) => (i) => e(t(i)),
        tX = (...t) => t.reduce(t$);
      function tH(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tG = tH("dragHorizontal"),
        tZ = tH("dragVertical");
      function tY(t) {
        let e = !1;
        if ("y" === t) e = tZ();
        else if ("x" === t) e = tG();
        else {
          let t = tG(),
            i = tZ();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tK() {
        let t = tY(!0);
        return !t || (t(), !1);
      }
      class tq {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function t_(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return tN(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (r, n) => {
            if ("touch" === r.pointerType || tK()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && tF.Wi.postRender(() => o(r, n));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class tJ extends tq {
        mount() {
          this.unmount = tX(t_(this.node, !0), t_(this.node, !1));
        }
        unmount() {}
      }
      class tQ extends tq {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = tX(
            tW(this.node.current, "focus", () => this.onFocus()),
            tW(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let t0 = (t, e) => !!e && (t === e || t0(t, e.parentElement));
      var t1 = i(9276);
      function t2(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tz(i));
      }
      class t5 extends tq {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = t1.Z),
            (this.removeEndListeners = t1.Z),
            (this.removeAccessibleListeners = t1.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                r = tN(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: r,
                        globalTapTarget: n
                      } = this.node.getProps(),
                      s = n || t0(this.node.current, t.target) ? i : r;
                    s && tF.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = tN(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = tX(r, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tW(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tW(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          t2("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && tF.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    t2("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tW(this.node.current, "blur", () => {
                  this.isPressing &&
                    t2("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = tX(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && tF.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tK()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && tF.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tN(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tW(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = tX(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let t3 = new WeakMap(),
        t6 = new WeakMap(),
        t9 = (t) => {
          let e = t3.get(t.target);
          e && e(t);
        },
        t4 = (t) => {
          t.forEach(t9);
        },
        t8 = { some: 0, all: 1 };
      class t7 extends tq {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : t8[r]
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              t6.has(i) || t6.set(i, {});
              let r = t6.get(i),
                n = JSON.stringify(e);
              return (
                r[n] ||
                  (r[n] = new IntersectionObserver(t4, { root: t, ...e })),
                r[n]
              );
            })(e);
            return (
              t3.set(t, i),
              r.observe(t),
              () => {
                t3.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? i : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function et(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function ee(t, e, i) {
        let r = t.getProps();
        return tC(r, e, void 0 !== i ? i : r.custom, t);
      }
      let ei = (t) => 1e3 * t,
        er = (t) => t / 1e3,
        en = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        es = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        eo = { type: "keyframes", duration: 0.8 },
        ea = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        el = (t, { keyframes: e }) =>
          e.length > 2
            ? eo
            : F.has(t)
            ? t.startsWith("scale")
              ? es(e[1])
              : en
            : ea;
      function eu(t, e) {
        return t[e] || t.default || t;
      }
      var eh = i(565);
      let ed = { current: !1 },
        ec = (t) => null !== t;
      function ep(t, { repeat: e, repeatType: i = "loop" }, r) {
        let n = t.filter(ec),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== r ? r : n[s];
      }
      var em = i(9993);
      let ef = (t) => /^0[^.\s]+$/u.test(t),
        eg = t1.Z,
        ev = t1.Z,
        ey = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        eb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ex = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY"
        ]),
        ew = (t) => t === Z || t === tn,
        eP = (t, e) => parseFloat(t.split(", ")[e]),
        eT =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/u);
            if (n) return eP(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/u);
              return e ? eP(e[1], t) : 0;
            }
          },
        eS = new Set(["x", "y", "z"]),
        eA = L.filter((t) => !eS.has(t)),
        eV = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: eT(4, 13),
          y: eT(5, 14)
        };
      (eV.translateX = eV.x), (eV.translateY = eV.y);
      let ek = (t) => (e) => e.test(t),
        eC = [
          Z,
          tn,
          tr,
          ti,
          to,
          ts,
          { test: (t) => "auto" === t, parse: (t) => t }
        ],
        eE = (t) => eC.find(ek(t)),
        eM = new Set(),
        eR = !1,
        eD = !1;
      function ej() {
        if (eD) {
          let t = Array.from(eM).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                eA.forEach((i) => {
                  let r = t.getValue(i);
                  void 0 !== r &&
                    (e.push([i, r.get()]),
                    r.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var r;
                  null === (r = t.getValue(e)) || void 0 === r || r.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eD = !1), (eR = !1), eM.forEach((t) => t.complete()), eM.clear();
      }
      function eL() {
        eM.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eD = !0);
        });
      }
      class eF {
        constructor(t, e, i, r, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eM.add(this),
                eR || ((eR = !0), tF.Wi.read(eL), tF.Wi.resolveKeyframes(ej)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let r = i.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eM.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eM.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let eB = (t, e) => (i) =>
          !!(
            (tt(i) && Q.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eO = (t, e, i) => (r) => {
          if (!tt(r)) return r;
          let [n, s, o, a] = r.match(_);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1
          };
        },
        eW = (t) => G(0, 255, t),
        eI = { ...Z, transform: (t) => Math.round(eW(t)) },
        ez = {
          test: eB("rgb", "red"),
          parse: eO("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            eI.transform(t) +
            ", " +
            eI.transform(e) +
            ", " +
            eI.transform(i) +
            ", " +
            q(Y.transform(r)) +
            ")"
        },
        eU = {
          test: eB("#"),
          parse: function (t) {
            let e = "",
              i = "",
              r = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (r += r),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(r, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1
              }
            );
          },
          transform: ez.transform
        },
        eN = {
          test: eB("hsl", "hue"),
          parse: eO("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tr.transform(q(e)) +
            ", " +
            tr.transform(q(i)) +
            ", " +
            q(Y.transform(r)) +
            ")"
        },
        e$ = {
          test: (t) => ez.test(t) || eU.test(t) || eN.test(t),
          parse: (t) =>
            ez.test(t) ? ez.parse(t) : eN.test(t) ? eN.parse(t) : eU.parse(t),
          transform: (t) =>
            tt(t)
              ? t
              : t.hasOwnProperty("red")
              ? ez.transform(t)
              : eN.transform(t)
        },
        eX = "number",
        eH = "color",
        eG =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function eZ(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          n = [],
          s = 0,
          o = e
            .replace(
              eG,
              (t) => (
                e$.test(t)
                  ? (r.color.push(s), n.push(eH), i.push(e$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(s), n.push("var"), i.push(t))
                  : (r.number.push(s), n.push(eX), i.push(parseFloat(t))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: r, types: n };
      }
      function eY(t) {
        return eZ(t).values;
      }
      function eK(t) {
        let { split: e, types: i } = eZ(t),
          r = e.length;
        return (t) => {
          let n = "";
          for (let s = 0; s < r; s++)
            if (((n += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === eX
                ? (n += q(t[s]))
                : e === eH
                ? (n += e$.transform(t[s]))
                : (n += t[s]);
            }
          return n;
        };
      }
      let eq = (t) => ("number" == typeof t ? 0 : t),
        e_ = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              tt(t) &&
              ((null === (e = t.match(_)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(J)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eY,
          createTransformer: eK,
          getAnimatableNone: function (t) {
            let e = eY(t);
            return eK(t)(e.map(eq));
          }
        },
        eJ = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eQ(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(_) || [];
        if (!r) return t;
        let n = i.replace(r, ""),
          s = eJ.has(e) ? 1 : 0;
        return r !== i && (s *= 100), e + "(" + s + n + ")";
      }
      let e0 = /\b([a-z-]*)\(.*?\)/gu,
        e1 = {
          ...e_,
          getAnimatableNone: (t) => {
            let e = t.match(e0);
            return e ? e.map(eQ).join(" ") : t;
          }
        },
        e2 = {
          ...tu,
          color: e$,
          backgroundColor: e$,
          outlineColor: e$,
          fill: e$,
          stroke: e$,
          borderColor: e$,
          borderTopColor: e$,
          borderRightColor: e$,
          borderBottomColor: e$,
          borderLeftColor: e$,
          filter: e1,
          WebkitFilter: e1
        },
        e5 = (t) => e2[t];
      function e3(t, e) {
        let i = e5(t);
        return (
          i !== e1 && (i = e_),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let e6 = new Set(["auto", "none", "0"]);
      class e9 extends eF {
        constructor(t, e, i, r) {
          super(t, e, i, r, null == r ? void 0 : r.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ("string" == typeof r && $((r = r.trim()))) {
              let n = (function t(e, i, r = 1) {
                ev(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, s] = (function (t) {
                  let e = eb.exec(t);
                  if (!e) return [,];
                  let [, i, r, n] = e;
                  return [`--${null != i ? i : r}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return ey(t) ? parseFloat(t) : t;
                }
                return $(s) ? t(s, i, r + 1) : s;
              })(r, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !ex.has(i) || 2 !== t.length))
            return;
          let [r, n] = t,
            s = eE(r),
            o = eE(n);
          if (s !== o) {
            if (ew(s) && ew(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || ef(r)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                n = 0;
              for (; n < t.length && !r; ) {
                let e = t[n];
                "string" == typeof e &&
                  !e6.has(e) &&
                  eZ(e).values.length &&
                  (r = t[n]),
                  n++;
              }
              if (r && i) for (let n of e) t[n] = e3(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eV[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: r } = this;
          if (!e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            o = r[s];
          (r[s] = eV[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function e4(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let e8 = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (e_.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class e7 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: n,
              repeatType: s,
              ...o
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (eL(), ej()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: r,
            velocity: n,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, r) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = e8(n, e),
                a = e8(s, e);
              return (
                eg(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && r))
              );
            })(t, i, r, n)
          ) {
            if (ed.current || !s) {
              null == a || a(ep(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var it = i(3476);
      function ie(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, it.R)(i - t(r), e - r);
      }
      function ii(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let ir = ["duration", "bounce"],
        is = ["stiffness", "damping", "mass"];
      function io(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ia({ keyframes: t, restDelta: e, restSpeed: i, ...r }) {
        let n;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!io(t, is) && io(t, ir)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1
              }) {
                let n, s;
                eg(t <= ei(10), "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                (o = G(0.05, 1, o)),
                  (t = G(0.01, 10, er(t))),
                  o < 1
                    ? ((n = (e) => {
                        let r = e * o,
                          n = r * t;
                        return 0.001 - ((r - i) / ii(e, o)) * Math.exp(-n);
                      }),
                      (s = (e) => {
                        let r = e * o * t,
                          s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = ii(Math.pow(e, 2), o);
                        return (
                          ((r * i + i - s) *
                            Math.exp(-r) *
                            (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let r = i;
                  for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                  return r;
                })(n, s, 5 / t);
                if (((t = ei(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(r * e),
                    duration: t
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...r, velocity: -er(r.velocity || 0) }),
          m = c || 0,
          f = u / (2 * Math.sqrt(l * h)),
          g = o - s,
          v = er(Math.sqrt(l / h)),
          y = 5 > Math.abs(g);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), f < 1)) {
          let t = ii(v, f);
          n = (e) =>
            o -
            Math.exp(-f * v * e) *
              (((m + f * v * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === f)
          n = (t) => o - Math.exp(-v * t) * (g + (m + v * g) * t);
        else {
          let t = v * Math.sqrt(f * f - 1);
          n = (e) => {
            let i = Math.exp(-f * v * e),
              r = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + f * v * g) * Math.sinh(r) + t * g * Math.cosh(r))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let r = n(t);
            if (p) a.done = t >= d;
            else {
              let s = m;
              0 !== t && (s = f < 1 ? ie(n, t, r) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(o - r) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : r), a;
          }
        };
      }
      function il({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = p + v,
          b = void 0 === o ? y : o(y);
        b !== y && (v = b - p);
        let x = (t) => -v * Math.exp(-t / r),
          w = (t) => b + x(t),
          P = (t) => {
            let e = x(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? b : i);
          },
          T = (t) => {
            f(m.value) &&
              ((d = t),
              (c = ia({
                keyframes: [m.value, g(m.value)],
                velocity: ie(w, t, m.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), P(t), T(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || P(t), m);
            }
          }
        );
      }
      let iu = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function ih(t, e, i, r) {
        if (t === e && i === r) return t1.Z;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do
              (s = iu((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : iu(n(t), e, r));
      }
      let id = ih(0.42, 0, 1, 1),
        ic = ih(0, 0, 0.58, 1),
        ip = ih(0.42, 0, 0.58, 1),
        im = (t) => Array.isArray(t) && "number" != typeof t[0],
        ig = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        iv = (t) => (e) => 1 - t(1 - e),
        iy = (t) => 1 - Math.sin(Math.acos(t)),
        ib = iv(iy),
        ix = ig(iy),
        iw = ih(0.33, 1.53, 0.69, 0.99),
        iP = iv(iw),
        iT = ig(iP),
        iS = {
          linear: t1.Z,
          easeIn: id,
          easeInOut: ip,
          easeOut: ic,
          circIn: iy,
          circInOut: ix,
          circOut: ib,
          backIn: iP,
          backInOut: iT,
          backOut: iw,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * iP(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        iA = (t) => {
          if (Array.isArray(t)) {
            ev(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return ih(e, i, r, n);
          }
          return "string" == typeof t
            ? (ev(void 0 !== iS[t], `Invalid easing type '${t}'`), iS[t])
            : t;
        },
        iV = (t, e, i) => {
          let r = e - t;
          return 0 === r ? 1 : (i - t) / r;
        },
        ik = (t, e, i) => t + (e - t) * i;
      function iC(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function iE(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let iM = (t, e, i) => {
          let r = t * t,
            n = i * (e * e - r) + r;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        iR = [eU, ez, eN],
        iD = (t) => iR.find((e) => e.test(t));
      function ij(t) {
        let e = iD(t);
        if (
          (eg(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === eN &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                (n = iC(a, r, t + 1 / 3)),
                  (s = iC(a, r, t)),
                  (o = iC(a, r, t - 1 / 3));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r
              };
            })(i)),
          i
        );
      }
      let iL = (t, e) => {
          let i = ij(t),
            r = ij(e);
          if (!i || !r) return iE(t, e);
          let n = { ...i };
          return (t) => (
            (n.red = iM(i.red, r.red, t)),
            (n.green = iM(i.green, r.green, t)),
            (n.blue = iM(i.blue, r.blue, t)),
            (n.alpha = ik(i.alpha, r.alpha, t)),
            ez.transform(n)
          );
        },
        iF = new Set(["none", "hidden"]);
      function iB(t, e) {
        return (i) => ik(t, e, i);
      }
      function iO(t) {
        return "number" == typeof t
          ? iB
          : "string" == typeof t
          ? $(t)
            ? iE
            : e$.test(t)
            ? iL
            : iz
          : Array.isArray(t)
          ? iW
          : "object" == typeof t
          ? e$.test(t)
            ? iL
            : iI
          : iE;
      }
      function iW(t, e) {
        let i = [...t],
          r = i.length,
          n = t.map((t, i) => iO(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = n[e](t);
          return i;
        };
      }
      function iI(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (r[n] = iO(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let iz = (t, e) => {
        let i = e_.createTransformer(e),
          r = eZ(t),
          n = eZ(e);
        return r.indexes.var.length === n.indexes.var.length &&
          r.indexes.color.length === n.indexes.color.length &&
          r.indexes.number.length >= n.indexes.number.length
          ? (iF.has(t) && !n.values.length) || (iF.has(e) && !r.values.length)
            ? iF.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : tX(
                iW(
                  (function (t, e) {
                    var i;
                    let r = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][n[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (r[s] = l), n[o]++;
                    }
                    return r;
                  })(r, n),
                  n.values
                ),
                i
              )
          : (eg(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            iE(t, e));
      };
      function iU(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? ik(t, e, i)
          : iO(t)(t, e);
      }
      function iN({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut"
      }) {
        let n = im(r) ? r.map(iA) : iA(r),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: r, mixer: n } = {}) {
            let s = t.length;
            if (
              (ev(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let r = [],
                  n = i || iU,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = n(t[i], t[i + 1]);
                  e && (s = tX(Array.isArray(e) ? e[i] || t1.Z : e, s)),
                    r.push(s);
                }
                return r;
              })(e, r, n),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let r = iV(t[i], t[i + 1], e);
                return o[i](r);
              };
            return i ? (e) => l(G(t[0], t[s - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let n = iV(0, e, r);
                        t.push(ik(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || ip).splice(0, e.length - 1)
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s)
        };
      }
      let i$ = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => tF.Wi.update(e, !0),
            stop: () => (0, tF.Pn)(e),
            now: () =>
              tF.frameData.isProcessing ? tF.frameData.timestamp : em.X.now()
          };
        },
        iX = { decay: il, inertia: il, tween: iN, keyframes: iN, spring: ia },
        iH = (t) => t / 100;
      class iG extends e7 {
        constructor({ KeyframeResolver: t = eF, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: i, motionValue: r, keyframes: n } = this.options,
            s = (t, e) => this.onKeyframesResolved(t, e);
          i && r && r.owner
            ? (this.resolver = r.owner.resolveKeyframes(n, s, i, r))
            : (this.resolver = new t(n, s, i, r)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: r = "keyframes",
              repeat: n = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0
            } = this.options,
            l = iX[r] || iN;
          l !== iN &&
            "number" != typeof t[0] &&
            ((e = tX(iH, iU(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - s
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            b = n;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (b = s)),
              (y = G(0, 1, i) * h);
          }
          let x = v ? { done: !1, value: a[0] } : b.next(y);
          o && (x.value = o(x.value));
          let { done: w } = x;
          v ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && void 0 !== r && (x.value = ep(a, this.options, r)),
            f && f(x.value),
            P && this.finish(),
            x
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? er(t.calculatedDuration) : 0;
        }
        get time() {
          return er(this.currentTime);
        }
        set time(t) {
          (t = ei(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = er(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = i$, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let iZ = (t) => Array.isArray(t) && "number" == typeof t[0],
        iY = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        iK = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: iY([0, 0.65, 0.55, 1]),
          circOut: iY([0.55, 0, 1, 0.45]),
          backIn: iY([0.31, 0.01, 0.66, -0.59]),
          backOut: iY([0.33, 1.53, 0.69, 0.99])
        };
      function iq(t) {
        return i_(t) || iK.easeOut;
      }
      function i_(t) {
        if (t) return iZ(t) ? iY(t) : Array.isArray(t) ? t.map(iq) : iK[t];
      }
      let iJ = e4(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        iQ = new Set(["opacity", "clipPath", "filter", "transform"]);
      class i0 extends e7 {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: r } = this.options;
          (this.resolver = new e9(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, r;
          let {
            duration: n = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (r = this.options).type ||
            "backgroundColor" === r.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in iK) ||
                iZ(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(r.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: r,
                ...l
              } = this.options,
              u = (function (t, e) {
                let i = new iG({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0
                  }),
                  r = { done: !1, value: t[0] },
                  n = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  n.push((r = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear"
                };
              })(t, l);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (n = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: r = 0,
              duration: n = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = i_(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: r,
                duration: n,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal"
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: n,
            times: s,
            ease: o
          });
          return (
            (h.startTime = em.X.now()),
            this.pendingTimeline
              ? ((h.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(ep(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: n,
              times: s,
              type: a,
              ease: o,
              keyframes: t
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return er(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return er(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = ei(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return t1.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return t1.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: n,
            ease: s,
            times: o
          } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: a,
                  ...l
                } = this.options,
                u = new iG({
                  ...l,
                  keyframes: i,
                  duration: r,
                  type: n,
                  ease: s,
                  times: o,
                  isGenerator: !0
                }),
                h = ei(this.time);
              t.setWithVelocity(u.sample(h - 10).value, u.sample(h).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: r,
            repeatType: n,
            damping: s,
            type: o
          } = t;
          return (
            iJ() &&
            i &&
            iQ.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !r &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let i1 = e4(() => void 0 !== window.ScrollTimeline);
      class i2 {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!i1() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let r = () => {
                    let { currentTime: r } = e,
                      n = (null === r ? 0 : r.value) / 100;
                    i !== n && t(n), (i = n);
                  };
                  return tF.Wi.update(r, !0), () => (0, tF.Pn)(r);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let i5 =
        (t, e, i, r = {}, n, s) =>
        (o) => {
          let a = eu(r, t) || {},
            l = a.delay || r.delay || 0,
            { elapsed: u = 0 } = r;
          u -= ei(l);
          let h = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: s ? void 0 : n
          };
          !(function ({
            when: t,
            delay: e,
            delayChildren: i,
            staggerChildren: r,
            staggerDirection: n,
            repeat: s,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: u,
            ...h
          }) {
            return !!Object.keys(h).length;
          })(a) && (h = { ...h, ...el(t, h) }),
            h.duration && (h.duration = ei(h.duration)),
            h.repeatDelay && (h.repeatDelay = ei(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
          let d = !1;
          if (
            ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
              ((h.duration = 0), 0 !== h.delay || (d = !0)),
            (ed.current || eh.c.skipAnimations) &&
              ((d = !0), (h.duration = 0), (h.delay = 0)),
            d && !s && void 0 !== e.get())
          ) {
            let t = ep(h.keyframes, a);
            if (void 0 !== t)
              return (
                tF.Wi.update(() => {
                  h.onUpdate(t), h.onComplete();
                }),
                new i2([])
              );
          }
          return !s && i0.supports(h) ? new i0(h) : new iG(h);
        };
      function i3(t) {
        return !!((0, O.i)(t) && t.add);
      }
      var i6 = i(804);
      function i9(t) {
        return t.getProps()[c];
      }
      function i4(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        var s;
        let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e,
          u = t.getValue("willChange");
        r && (o = r);
        let h = [],
          d = n && t.animationState && t.animationState.getState()[n];
        for (let e in l) {
          let r = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            n = l[e];
          if (
            void 0 === n ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(d, e))
          )
            continue;
          let a = { delay: i, elapsed: 0, ...eu(o || {}, e) },
            c = !1;
          if (window.HandoffAppearAnimations) {
            let i = i9(t);
            if (i) {
              let t = window.HandoffAppearAnimations(i, e, r, tF.Wi);
              null !== t && ((a.elapsed = t), (c = !0));
            }
          }
          r.start(
            i5(
              e,
              r,
              n,
              t.shouldReduceMotion && F.has(e) ? { type: !1 } : a,
              t,
              c
            )
          );
          let p = r.animation;
          p && (i3(u) && (u.add(e), p.then(() => u.remove(e))), h.push(p));
        }
        return (
          a &&
            Promise.all(h).then(() => {
              tF.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...n
                    } = ee(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = tD(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, i6.BX)(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function i8(t, e, i = {}) {
        var r;
        let n = ee(
            t,
            e,
            "exit" === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = n ? () => Promise.all(i4(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a
                  } = s;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(i7)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              i8(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function i7(t, e) {
        return t.sortNodePosition(e);
      }
      let rt = [...w].reverse(),
        re = w.length;
      function ri(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        };
      }
      function rr() {
        return {
          animate: ri(!0),
          whileInView: ri(),
          whileHover: ri(),
          whileTap: ri(),
          whileDrag: ri(),
          whileFocus: ri(),
          exit: ri()
        };
      }
      class rn extends tq {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => i8(t, e, i)));
                          else if ("string" == typeof e) r = i8(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? ee(t, e, i.custom) : e;
                            r = Promise.all(i4(t, n, i));
                          }
                          return r.then(() => {
                            tF.Wi.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, e, i)
                      )
                    ),
                  i = rr(),
                  r = !0,
                  n = (e) => (i, r) => {
                    var n;
                    let s = ee(
                      t,
                      r,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...r } = s;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    d = 1 / 0;
                  for (let e = 0; e < re; e++) {
                    var c;
                    let p = rt[e],
                      m = i[p],
                      f = void 0 !== o[p] ? o[p] : a[p],
                      g = b(f),
                      v = p === s ? m.isActive : null;
                    !1 === v && (d = e);
                    let y = f === a[p] && f !== o[p] && g;
                    if (
                      (y && r && t.manuallyAnimateOnMount && (y = !1),
                      (m.protectedKeys = { ...h }),
                      (!m.isActive && null === v) ||
                        (!f && !m.prevProp) ||
                        x(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let w =
                        ((c = m.prevProp),
                        ("string" == typeof f
                          ? f !== c
                          : !!Array.isArray(f) && !et(f, c)) ||
                          (p === s && m.isActive && !y && g) ||
                          (e > d && g)),
                      P = !1,
                      T = Array.isArray(f) ? f : [f],
                      S = T.reduce(n(p), {});
                    !1 === v && (S = {});
                    let { prevResolvedValues: A = {} } = m,
                      V = { ...A, ...S },
                      k = (e) => {
                        (w = !0),
                          u.has(e) && ((P = !0), u.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in V) {
                      let e = S[t],
                        i = A[t];
                      if (!h.hasOwnProperty(t))
                        (tM(e) && tM(i) ? et(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? k(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? k(t)
                          : u.add(t);
                    }
                    (m.prevProp = f),
                      (m.prevResolvedValues = S),
                      m.isActive && (h = { ...h, ...S }),
                      r && t.blockInitialAnimation && (w = !1),
                      w &&
                        (!y || P) &&
                        l.push(
                          ...T.map((t) => ({
                            animation: t,
                            options: { type: p }
                          }))
                        );
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != r ? r : null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    r &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (r = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, r) {
                    var n;
                    if (i[e].isActive === r) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = rr()), (r = !0);
                  }
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          x(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let rs = 0;
      class ro extends tq {
        constructor() {
          super(...arguments), (this.id = rs++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t);
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let ra = (t, e) => Math.abs(t - e);
      class rl {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: r,
            dragSnapToOrigin: n = !1
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = rd(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(ra(t.x, e.x) ** 2 + ra(t.y, e.y) ** 2) >= 3);
              if (!r && !n) return;
              let { point: s } = i,
                { timestamp: o } = tF.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              r ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = ru(e, this.transformPagePoint)),
                tF.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: r,
                resumeAnimation: n
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = rd(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : ru(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), r && r(t, s);
            }),
            !tI(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = r || window);
          let s = ru(tz(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = tF.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, rd(s, this.history)),
            (this.removeListeners = tX(
              tN(this.contextWindow, "pointermove", this.handlePointerMove),
              tN(this.contextWindow, "pointerup", this.handlePointerUp),
              tN(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tF.Pn)(this.updatePoint);
        }
      }
      function ru(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function rh(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function rd({ point: t }, e) {
        return {
          point: t,
          delta: rh(t, rc(e)),
          offset: rh(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = rc(t);
            for (
              ;
              i >= 0 && ((r = t[i]), !(n.timestamp - r.timestamp > ei(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = er(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0)
        };
      }
      function rc(t) {
        return t[t.length - 1];
      }
      function rp(t) {
        return t.max - t.min;
      }
      function rm(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function rf(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = ik(e.min, e.max, t.origin)),
          (t.scale = rp(i) / rp(e)),
          (rm(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = ik(i.min, i.max, t.origin) - t.originPoint),
          (rm(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function rg(t, e, i, r) {
        rf(t.x, e.x, i.x, r ? r.originX : void 0),
          rf(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function rv(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + rp(e));
      }
      function ry(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + rp(e));
      }
      function rb(t, e, i) {
        ry(t.x, e.x, i.x), ry(t.y, e.y, i.y);
      }
      function rx(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        };
      }
      function rw(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function rP(t, e, i) {
        return { min: rT(t, e), max: rT(t, i) };
      }
      function rT(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let rS = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        rA = () => ({ x: rS(), y: rS() }),
        rV = () => ({ min: 0, max: 0 }),
        rk = () => ({ x: rV(), y: rV() });
      function rC(t) {
        return [t("x"), t("y")];
      }
      function rE({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function rM(t) {
        return void 0 === t || 1 === t;
      }
      function rR({ scale: t, scaleX: e, scaleY: i }) {
        return !rM(t) || !rM(e) || !rM(i);
      }
      function rD(t) {
        return (
          rR(t) ||
          rj(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function rj(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function rL(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function rF(t, e = 0, i = 1, r, n) {
        (t.min = rL(t.min, e, i, r, n)), (t.max = rL(t.max, e, i, r, n));
      }
      function rB(t, { x: e, y: i }) {
        rF(t.x, e.translate, e.scale, e.originPoint),
          rF(t.y, i.translate, i.scale, i.originPoint);
      }
      function rO(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function rW(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function rI(t, e, [i, r, n]) {
        let s = void 0 !== e[n] ? e[n] : 0.5,
          o = ik(t.min, t.max, s);
        rF(t, e[i], e[r], o, e.scale);
      }
      let rz = ["x", "scaleX", "originX"],
        rU = ["y", "scaleY", "originY"];
      function rN(t, e) {
        rI(t.x, e, rz), rI(t.y, e, rU);
      }
      function r$(t, e) {
        return rE(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let rX = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        rH = new WeakMap();
      class rG {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = rk()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new rl(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tz(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: r,
                  onDragStart: n
                } = this.getProps();
                if (
                  i &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tY(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  rC((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tr.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let r = i.layout.layoutBox[t];
                        if (r) {
                          let t = rp(r);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && tF.Wi.postRender(() => n(t, e));
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: r,
                  onDirectionLock: n,
                  onDrag: s
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                rC((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                })
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: rX(this.visualElement)
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && tF.Wi.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !rZ(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? ik(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? ik(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && f(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: r, right: n }
              ) {
                return { x: rx(t.x, i, n), y: rx(t.y, e, r) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: rP(t, "left", "right"), y: rP(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              rC((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !f(e)) return !1;
          let r = e.current;
          ev(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = r$(t, i),
                { scroll: n } = e;
              return n && (rW(r.x, n.offset.x), rW(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: rw((t = n.layout.layoutBox).x, s.x), y: rw(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = rE(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            rC((o) => {
              if (!rZ(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(i5(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          rC((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          rC((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          rC((e) => {
            let { drag: i } = this.getProps();
            if (!rZ(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - ik(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!f(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          rC((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = rp(t),
                  n = rp(e);
                return (
                  n > r
                    ? (i = iV(e.min, e.max - r, t.min))
                    : r > n && (i = iV(t.min, t.max - n, e.min)),
                  G(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            rC((e) => {
              if (!rZ(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set(ik(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rH.set(this.visualElement, this);
          let t = tN(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              f(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            tF.Wi.read(e);
          let n = tW(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (rC((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o
          };
        }
      }
      function rZ(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class rY extends tq {
        constructor(t) {
          super(t),
            (this.removeGroupControls = t1.Z),
            (this.removeListeners = t1.Z),
            (this.controls = new rG(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || t1.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let rK = (t) => (e, i) => {
        t && tF.Wi.postRender(() => t(e, i));
      };
      class rq extends tq {
        constructor() {
          super(...arguments), (this.removePointerDownListener = t1.Z);
        }
        onPointerDown(t) {
          this.session = new rl(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: rX(this.node)
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: r
          } = this.node.getProps();
          return {
            onSessionStart: rK(t),
            onStart: rK(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, r && tF.Wi.postRender(() => r(t, e));
            }
          };
        }
        mount() {
          this.removePointerDownListener = tN(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let r_ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rJ(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rQ = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tn.test(t)) return t;
            t = parseFloat(t);
          }
          let i = rJ(t, e.target.x),
            r = rJ(t, e.target.y);
          return `${i}% ${r}%`;
        }
      };
      class r0 extends s.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r
            } = this.props,
            { projection: n } = t;
          Object.assign(j, r2),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove()
              })),
            (r_.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    tF.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            p.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function r1(t) {
        let [e, i] = (function () {
            let t = (0, s.useContext)(l);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: r } = t,
              n = (0, s.useId)();
            return (
              (0, s.useEffect)(() => r(n), []),
              !e && i ? [!1, () => i && i(n)] : [!0]
            );
          })(),
          r = (0, s.useContext)(E);
        return (0, n.jsx)(r0, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, s.useContext)(g),
          isPresent: e,
          safeToRemove: i
        });
      }
      let r2 = {
        borderRadius: {
          ...rQ,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius"
          ]
        },
        borderTopLeftRadius: rQ,
        borderTopRightRadius: rQ,
        borderBottomLeftRadius: rQ,
        borderBottomRightRadius: rQ,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let r = e_.parse(t);
            if (r.length > 5) return t;
            let n = e_.createTransformer(t),
              s = "number" != typeof r[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (r[0 + s] /= o), (r[1 + s] /= a);
            let l = ik(o, a, 0.5);
            return (
              "number" == typeof r[2 + s] && (r[2 + s] /= l),
              "number" == typeof r[3 + s] && (r[3 + s] /= l),
              n(r)
            );
          }
        }
      };
      var r5 = i(2428);
      let r3 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        r6 = r3.length,
        r9 = (t) => ("string" == typeof t ? parseFloat(t) : t),
        r4 = (t) => "number" == typeof t || tn.test(t);
      function r8(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let r7 = ne(0, 0.5, ib),
        nt = ne(0.5, 0.95, t1.Z);
      function ne(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i(iV(t, e, r)));
      }
      function ni(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nr(t, e) {
        ni(t.x, e.x), ni(t.y, e.y);
      }
      function nn(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function ns(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (
            (tr.test(e) &&
              ((e = parseFloat(e)), (e = ik(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = ik(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = nn(t.min, e, i, a, n)),
            (t.max = nn(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let no = ["x", "scaleX", "originX"],
        na = ["y", "scaleY", "originY"];
      function nl(t, e, i, r) {
        ns(t.x, e, no, i ? i.x : void 0, r ? r.x : void 0),
          ns(t.y, e, na, i ? i.y : void 0, r ? r.y : void 0);
      }
      function nu(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nh(t) {
        return nu(t.x) && nu(t.y);
      }
      function nd(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function nc(t) {
        return rp(t.x) / rp(t.y);
      }
      var np = i(8746);
      class nm {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, np.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, np.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nf(t, e, i) {
        let r = "",
          n = t.x.translate / e.x,
          s = t.y.translate / e.y,
          o = (null == i ? void 0 : i.z) || 0;
        if (
          ((n || s || o) && (r = `translate3d(${n}px, ${s}px, ${o}px) `),
          (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let {
            transformPerspective: t,
            rotate: e,
            rotateX: n,
            rotateY: s,
            skewX: o,
            skewY: a
          } = i;
          t && (r = `perspective(${t}px) ${r}`),
            e && (r += `rotate(${e}deg) `),
            n && (r += `rotateX(${n}deg) `),
            s && (r += `rotateY(${s}deg) `),
            o && (r += `skewX(${o}deg) `),
            a && (r += `skewY(${a}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`), r || "none";
      }
      let ng = (t, e) => t.depth - e.depth;
      class nv {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, np.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, np.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(ng),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let ny = ["", "X", "Y", "Z"],
        nb = { visibility: "hidden" },
        nx = 0,
        nw = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0
        };
      function nP(t, e, i, r) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
      }
      function nT({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nx++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (nw.totalNodes =
                    nw.resolvedTargetDeltas =
                    nw.recalculatedProjection =
                      0),
                  this.nodes.forEach(nV),
                  this.nodes.forEach(nj),
                  this.nodes.forEach(nL),
                  this.nodes.forEach(nk),
                  window.MotionDebug && window.MotionDebug.record(nw);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nv());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new r5.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = em.X.now(),
                      r = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && ((0, tF.Pn)(r), t(n - 250));
                      };
                    return tF.Wi.read(r, !0), () => (0, tF.Pn)(r);
                  })(r, 0)),
                  r_.hasAnimatedSinceResize &&
                    ((r_.hasAnimatedSinceResize = !1), this.nodes.forEach(nD));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nz,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a
                      } = s.getProps(),
                      l = !this.targetLayout || !nd(this.targetLayout, r) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...eu(n, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nD(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tF.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nF),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.HandoffCancelAllAnimations &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return !1;
                  let { visualElement: i } = e.options;
                  return (
                    !!i &&
                    (!!i9(i) ||
                      (!!e.parent &&
                        !e.parent.hasCheckedOptimisedAppear &&
                        t(e.parent)))
                  );
                })(this) &&
                window.HandoffCancelAllAnimations(),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nE);
              return;
            }
            this.isUpdating || this.nodes.forEach(nM),
              (this.isUpdating = !1),
              this.nodes.forEach(nR),
              this.nodes.forEach(nS),
              this.nodes.forEach(nA),
              this.clearAllSnapshots();
            let t = em.X.now();
            (tF.frameData.delta = G(0, 1e3 / 60, t - tF.frameData.timestamp)),
              (tF.frameData.timestamp = t),
              (tF.frameData.isProcessing = !0),
              tF.S6.update.process(tF.frameData),
              tF.S6.preRender.process(tF.frameData),
              tF.S6.render.process(tF.frameData),
              (tF.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), p.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nC), this.sharedNodes.forEach(nB);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tF.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tF.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = rk()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: r(this.instance),
                  offset: i(this.instance)
                });
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nh(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || rD(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              n$((e = r).x),
              n$(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return rk();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (rW(e.x, i.offset.x), rW(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = rk();
            nr(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let r = this.path[i],
                { scroll: n, options: s } = r;
              if (r !== this.root && n && s.layoutScroll) {
                if (n.isRoot) {
                  nr(e, t);
                  let { scroll: i } = this.root;
                  i && (rW(e.x, -i.offset.x), rW(e.y, -i.offset.y));
                }
                rW(e.x, n.offset.x), rW(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = rk();
            nr(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                rN(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                rD(r.latestValues) && rN(i, r.latestValues);
            }
            return rD(this.latestValues) && rN(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = rk();
            nr(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !rD(i.latestValues)) continue;
              rR(i.latestValues) && i.updateSnapshot();
              let r = rk();
              nr(r, i.measurePageBox()),
                nl(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r
                );
            }
            return rD(this.latestValues) && nl(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tF.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tF.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = rk()),
                    (this.relativeTargetOrigin = rk()),
                    rb(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nr(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = rk()), (this.targetWithTransforms = rk())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      rv(i.x, r.x, n.x),
                      rv(i.y, r.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nr(this.target, this.layout.layoutBox),
                      rB(this.target, this.targetDelta))
                    : nr(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = rk()),
                      (this.relativeTargetOrigin = rk()),
                      rb(this.relativeTargetOrigin, this.target, t.target),
                      nr(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nw.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              rR(this.parent.latestValues) ||
              rj(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === tF.frameData.timestamp &&
                (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            nr(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, r = !1) {
              let n, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = i[a]).projectionDelta;
                  let o = n.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (r &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      rN(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), rB(t, s)),
                    r && rD(n.latestValues) && rN(t, n.latestValues));
                }
                (e.x = rO(e.x)), (e.y = rO(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = rk()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = rA()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = rA()),
              (this.projectionDeltaWithTransform = rA()));
            let u = this.projectionTransform;
            rg(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = nf(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nw.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = rA();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = rk(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(nI)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (nO(o.x, t.x, r),
                  nO(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  rb(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nW(p.x, m.x, a.x, r),
                    nW(p.y, m.y, a.y, r),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      u.x.min === c.x.min &&
                        u.x.max === c.x.max &&
                        u.y.min === c.y.min &&
                        u.y.max === c.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = rk()),
                    nr(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, r, n, s) {
                    n
                      ? ((t.opacity = ik(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          r7(r)
                        )),
                        (t.opacityExit = ik(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nt(r)
                        )))
                      : s &&
                        (t.opacity = ik(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          r
                        ));
                    for (let n = 0; n < r6; n++) {
                      let s = `border${r3[n]}Radius`,
                        o = r8(e, s),
                        a = r8(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || r4(o) === r4(a)
                          ? ((t[s] = Math.max(ik(r9(o), r9(a), r), 0)),
                            (tr.test(a) || tr.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = ik(e.rotate || 0, i.rotate || 0, r));
                  })(s, n, this.latestValues, r, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tF.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tF.Wi.update(() => {
                (r_.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = (0, O.i)(0) ? 0 : (0, i6.BX)(0);
                    return r.start(i5("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    }
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                nX(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                i = this.target || rk();
                let e = rp(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = rp(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              nr(e, i),
                rN(e, n),
                rg(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nm()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let r = {};
            i.z && nP("z", t, r, this.animationValues);
            for (let e = 0; e < ny.length; e++)
              nP(`rotate${ny[e]}`, t, r, this.animationValues),
                nP(`skew${ny[e]}`, t, r, this.animationValues);
            for (let e in (t.render(), r))
              t.setStaticValue(e, r[e]),
                this.animationValues && (this.animationValues[e] = r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nb;
            let r = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  tj(null == t ? void 0 : t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tj(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !rD(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = nf(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            j)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = j[t],
                n = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = n;
              } else r[t] = n;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this
                    ? tj(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nE),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nS(t) {
        t.updateLayout();
      }
      function nA(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? rC((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = rp(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : nX(n, i.layoutBox, e) &&
              rC((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = rp(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = rA();
          rg(o, e, i.layoutBox);
          let a = rA();
          s
            ? rg(a, t.applyTransform(r, !0), i.measuredBox)
            : rg(a, e, i.layoutBox);
          let l = !nh(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = rk();
                rb(o, i.layoutBox, n.layoutBox);
                let a = rk();
                rb(a, e, s.layoutBox),
                  nd(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nV(t) {
        nw.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nk(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nC(t) {
        t.clearSnapshot();
      }
      function nE(t) {
        t.clearMeasurements();
      }
      function nM(t) {
        t.isLayoutDirty = !1;
      }
      function nR(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nD(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nj(t) {
        t.resolveTargetDelta();
      }
      function nL(t) {
        t.calcProjection();
      }
      function nF(t) {
        t.resetSkewAndRotation();
      }
      function nB(t) {
        t.removeLeadSnapshot();
      }
      function nO(t, e, i) {
        (t.translate = ik(e.translate, 0, i)),
          (t.scale = ik(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nW(t, e, i, r) {
        (t.min = ik(e.min, i.min, r)), (t.max = ik(e.max, i.max, r));
      }
      function nI(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nz = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nU = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nN = nU("applewebkit/") && !nU("chrome/") ? Math.round : t1.Z;
      function n$(t) {
        (t.min = nN(t.min)), (t.max = nN(t.max));
      }
      function nX(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !rm(nc(e), nc(i), 0.2))
        );
      }
      let nH = nT({
          attachResizeListener: (t, e) => tW(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        nG = { current: void 0 },
        nZ = nT({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nG.current) {
              let t = new nH({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nG.current = t);
            }
            return nG.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position
        }),
        nY = { current: null },
        nK = { current: !1 },
        nq = new WeakMap(),
        n_ = [...eC, e$, e_],
        nJ = (t) => n_.find(ek(t)),
        nQ = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete"
        ],
        n0 = P.length;
      class n1 {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: s
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, r) =>
            new this.KeyframeResolver(t, e, i, r, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eF),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tF.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = T(e)),
            (this.isVariantNode = S(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] &&
              (0, O.i)(e) &&
              (e.set(a[t], !1), i3(u) && u.add(t));
          }
        }
        mount(t) {
          (this.current = t),
            nq.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nK.current ||
              (function () {
                if (((nK.current = !0), C.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nY.current = t.matches);
                    t.addListener(e), e();
                  } else nY.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nY.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nq.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tF.Pn)(this.notifyUpdate),
          (0, tF.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = F.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tF.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            r(), n(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in k) {
            let e = k[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : rk();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nQ.length; e++) {
            let i = nQ[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: r } = e;
            for (let n in e) {
              let s = e[n],
                o = i[n];
              if ((0, O.i)(s)) t.addValue(n, s), i3(r) && r.add(n);
              else if ((0, O.i)(o))
                t.addValue(n, (0, i6.BX)(s, { owner: t })),
                  i3(r) && r.remove(n);
              else if (o !== s) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, i6.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < n0; t++) {
            let i = P[t],
              r = this.props[i];
            (b(r) || !1 === r) && (e[i] = r);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, i6.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && (ey(r) || ef(r))
                ? (r = parseFloat(r))
                : !nJ(r) && e_.test(e) && (r = e3(t, e)),
              this.setBaseTarget(t, (0, O.i)(r) ? r.get() : r)),
            (0, O.i)(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let n = tC(
              this.props,
              r,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (r && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, O.i)(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new r5.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class n2 extends n1 {
        constructor() {
          super(...arguments), (this.KeyframeResolver = e9);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class n5 extends n2 {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (F.has(e)) {
            let t = e5(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = (U(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return r$(t, e);
        }
        build(t, e, i, r) {
          th(t, e, i, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tA(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, O.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, r) {
          tP(t, e, i, r);
        }
      }
      class n3 extends n2 {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (F.has(e)) {
            let t = e5(e);
            return (t && t.default) || 0;
          }
          return (e = tT.has(e) ? e : d(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return rk();
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tV(t, e, i);
        }
        build(t, e, i, r) {
          tb(t, e, i, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          tS(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = tw(t.tagName)), super.mount(t);
        }
      }
      let n6 = (t, e) =>
          D(t)
            ? new n3(e, { enableHardwareAcceleration: !1 })
            : new n5(e, {
                allowProjection: t !== s.Fragment,
                enableHardwareAcceleration: !0
              }),
        n9 = {
          animation: { Feature: rn },
          exit: { Feature: ro },
          inView: { Feature: t7 },
          tap: { Feature: t5 },
          focus: { Feature: tQ },
          hover: { Feature: tJ },
          pan: { Feature: rq },
          drag: { Feature: rY, ProjectionNode: nZ, MeasureLayout: r1 },
          layout: { ProjectionNode: nZ, MeasureLayout: r1 }
        },
        n4 = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: r,
              Component: d
            }) {
              t &&
                (function (t) {
                  for (let e in t) k[e] = { ...k[e], ...t[e] };
                })(t);
              let m = (0, s.forwardRef)(function (t, m) {
                var x;
                let w;
                let P = {
                    ...(0, s.useContext)(o._),
                    ...t,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, s.useContext)(E).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(t)
                  },
                  { isStatic: S } = P,
                  V = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (T(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || b(e) ? e : void 0,
                          animate: b(i) ? i : void 0
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, s.useContext)(a));
                    return (0, s.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [A(e), A(i)]
                    );
                  })(t),
                  M = r(t, S);
                if (!S && C.j) {
                  (0, s.useContext)(h).strict;
                  let t = (function (t) {
                    let { drag: e, layout: i } = k;
                    if (!e && !i) return {};
                    let r = { ...e, ...i };
                    return {
                      MeasureLayout:
                        (null == e ? void 0 : e.isEnabled(t)) ||
                        (null == i ? void 0 : i.isEnabled(t))
                          ? r.MeasureLayout
                          : void 0,
                      ProjectionNode: r.ProjectionNode
                    };
                  })(P);
                  (w = t.MeasureLayout),
                    (V.visualElement = (function (t, e, i, r, n) {
                      let { visualElement: d } = (0, s.useContext)(a),
                        m = (0, s.useContext)(h),
                        b = (0, s.useContext)(l),
                        x = (0, s.useContext)(o._).reducedMotion,
                        w = (0, s.useRef)();
                      (r = r || m.renderer),
                        !w.current &&
                          r &&
                          (w.current = r(t, {
                            visualState: e,
                            parent: d,
                            props: i,
                            presenceContext: b,
                            blockInitialAnimation: !!b && !1 === b.initial,
                            reducedMotionConfig: x
                          }));
                      let P = w.current,
                        T = (0, s.useContext)(g);
                      P &&
                        !P.projection &&
                        n &&
                        ("html" === P.type || "svg" === P.type) &&
                        (function (t, e, i, r) {
                          let {
                            layoutId: n,
                            layout: s,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: u
                          } = e;
                          (t.projection = new i(
                            t.latestValues,
                            e["data-framer-portal-id"]
                              ? void 0
                              : (function t(e) {
                                  if (e)
                                    return !1 !== e.options.allowProjection
                                      ? e.projection
                                      : t(e.parent);
                                })(t.parent)
                          )),
                            t.projection.setOptions({
                              layoutId: n,
                              layout: s,
                              alwaysMeasureLayout: !!o || (a && f(a)),
                              visualElement: t,
                              scheduleRender: () => t.scheduleRender(),
                              animationType: "string" == typeof s ? s : "both",
                              initialPromotionConfig: r,
                              layoutScroll: l,
                              layoutRoot: u
                            });
                        })(w.current, i, n, T),
                        (0, s.useInsertionEffect)(() => {
                          P && P.update(i, b);
                        });
                      let S = (0, s.useRef)(
                        !!(i[c] && !window.HandoffComplete)
                      );
                      return (
                        (0, u.L)(() => {
                          P &&
                            (P.updateFeatures(),
                            p.render(P.render),
                            S.current &&
                              P.animationState &&
                              P.animationState.animateChanges());
                        }),
                        (0, s.useEffect)(() => {
                          P &&
                            (!S.current &&
                              P.animationState &&
                              P.animationState.animateChanges(),
                            S.current &&
                              ((S.current = !1),
                              v || ((v = !0), queueMicrotask(y))));
                        }),
                        P
                      );
                    })(d, M, P, e, t.ProjectionNode));
                }
                return (0, n.jsxs)(a.Provider, {
                  value: V,
                  children: [
                    w && V.visualElement
                      ? (0, n.jsx)(w, { visualElement: V.visualElement, ...P })
                      : null,
                    i(
                      d,
                      t,
                      ((x = V.visualElement),
                      (0, s.useCallback)(
                        (t) => {
                          t && M.mount && M.mount(t),
                            x && (t ? x.mount(t) : x.unmount()),
                            m &&
                              ("function" == typeof m
                                ? m(t)
                                : f(m) && (m.current = t));
                        },
                        [x]
                      )),
                      M,
                      S,
                      V.visualElement
                    )
                  ]
                });
              });
              return (m[M] = d), m;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r))
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, r) {
            return {
              ...(D(t) ? tB : tO),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, r, { latestValues: n }, o) => {
                  let a = (
                      D(e)
                        ? function (t, e, i, r) {
                            let n = (0, s.useMemo)(() => {
                              let i = tx();
                              return (
                                tb(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tw(r),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              tc(e, t.style, t),
                                (n.style = { ...e, ...n.style });
                            }
                            return n;
                          }
                        : function (t, e, i) {
                            let r = {},
                              n = (function (t, e, i) {
                                let r = t.style || {},
                                  n = {};
                                return (
                                  tc(n, r, t),
                                  Object.assign(
                                    n,
                                    (function ({ transformTemplate: t }, e, i) {
                                      return (0, s.useMemo)(() => {
                                        let r = td();
                                        return (
                                          th(
                                            r,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            t
                                          ),
                                          Object.assign({}, r.vars, r.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  n
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((r.draggable = !1),
                                (n.userSelect =
                                  n.WebkitUserSelect =
                                  n.WebkitTouchCallout =
                                    "none"),
                                (n.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (r.tabIndex = 0),
                              (r.style = n),
                              r
                            );
                          }
                    )(i, n, o, e),
                    l = (function (t, e, i) {
                      let r = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (tf(n) ||
                            (!0 === i && tm(n)) ||
                            (!e && !tm(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (r[n] = t[n]);
                      return r;
                    })(i, "string" == typeof e, t),
                    u = e !== s.Fragment ? { ...l, ...a, ref: r } : {},
                    { children: h } = i,
                    d = (0, s.useMemo)(() => ((0, O.i)(h) ? h.get() : h), [h]);
                  return (0, s.createElement)(e, { ...u, children: d });
                };
              })(e),
              createVisualElement: r,
              Component: t
            };
          })(t, e, n9, n6)
        );
    },
    565: function (t, e, i) {
      i.d(e, {
        c: function () {
          return r;
        }
      });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (t, e, i) {
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function n(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return n;
        },
        y4: function () {
          return r;
        }
      });
    },
    7282: function (t, e, i) {
      i.d(e, {
        j: function () {
          return r;
        }
      });
      let r = "undefined" != typeof document;
    },
    9276: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        }
      });
      let r = (t) => t;
    },
    2428: function (t, e, i) {
      i.d(e, {
        L: function () {
          return n;
        }
      });
      var r = i(8746);
      class n {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, r.y4)(this.subscriptions, t),
            () => (0, r.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    458: function (t, e, i) {
      i.d(e, {
        h: function () {
          return n;
        }
      });
      var r = i(2265);
      function n(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9033: function (t, e, i) {
      i.d(e, {
        L: function () {
          return n;
        }
      });
      var r = i(2265);
      let n = i(7282).j ? r.useLayoutEffect : r.useEffect;
    },
    3476: function (t, e, i) {
      i.d(e, {
        R: function () {
          return r;
        }
      });
      function r(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    804: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        }
      });
      var r = i(2428),
        n = i(3476),
        s = i(9993),
        o = i(6219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.2.13"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new r.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, n.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    4924: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return a;
        }
      });
      var r = i(5282),
        n = i(9033),
        s = i(6219),
        o = i(8322);
      function a(t, ...e) {
        let i = t.length;
        return (function (t, e) {
          let i = (0, r.c)(e()),
            o = () => i.set(e());
          return (
            o(),
            (0, n.L)(() => {
              let e = () => s.Wi.preRender(o, !1, !0),
                i = t.map((t) => t.on("change", e));
              return () => {
                i.forEach((t) => t()), (0, s.Pn)(o);
              };
            }),
            i
          );
        })(e.filter(o.i), function () {
          let r = "";
          for (let n = 0; n < i; n++) {
            r += t[n];
            let i = e[n];
            i && (r += (0, o.i)(i) ? i.get() : i);
          }
          return r;
        });
      }
    },
    5282: function (t, e, i) {
      i.d(e, {
        c: function () {
          return a;
        }
      });
      var r = i(2265),
        n = i(804),
        s = i(9791),
        o = i(458);
      function a(t) {
        let e = (0, o.h)(() => (0, n.BX)(t)),
          { isStatic: i } = (0, r.useContext)(s._);
        if (i) {
          let [, i] = (0, r.useState)(t);
          (0, r.useEffect)(() => e.on("change", i), []);
        }
        return e;
      }
    },
    8322: function (t, e, i) {
      i.d(e, {
        i: function () {
          return r;
        }
      });
      let r = (t) => !!(t && t.getVelocity);
    },
    6164: function (t, e, i) {
      i.d(e, {
        m6: function () {
          return B;
        }
      });
      let r = /^\[(.+)\]$/;
      function n(t, e) {
        let i = t;
        return (
          e.split("-").forEach((t) => {
            i.nextPart.has(t) ||
              i.nextPart.set(t, { nextPart: new Map(), validators: [] }),
              (i = i.nextPart.get(t));
          }),
          i
        );
      }
      let s = /\s+/;
      function o() {
        let t,
          e,
          i = 0,
          r = "";
        for (; i < arguments.length; )
          (t = arguments[i++]) &&
            (e = (function t(e) {
              let i;
              if ("string" == typeof e) return e;
              let r = "";
              for (let n = 0; n < e.length; n++)
                e[n] && (i = t(e[n])) && (r && (r += " "), (r += i));
              return r;
            })(t)) &&
            (r && (r += " "), (r += e));
        return r;
      }
      function a(t) {
        let e = (e) => e[t] || [];
        return (e.isThemeGetter = !0), e;
      }
      let l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        u = /^\d+\/\d+$/,
        h = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        c =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        f =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(t) {
        return y(t) || h.has(t) || u.test(t);
      }
      function v(t) {
        return R(t, "length", D);
      }
      function y(t) {
        return !!t && !Number.isNaN(Number(t));
      }
      function b(t) {
        return R(t, "number", y);
      }
      function x(t) {
        return !!t && Number.isInteger(Number(t));
      }
      function w(t) {
        return t.endsWith("%") && y(t.slice(0, -1));
      }
      function P(t) {
        return l.test(t);
      }
      function T(t) {
        return d.test(t);
      }
      let S = new Set(["length", "size", "percentage"]);
      function A(t) {
        return R(t, S, j);
      }
      function V(t) {
        return R(t, "position", j);
      }
      let k = new Set(["image", "url"]);
      function C(t) {
        return R(t, k, F);
      }
      function E(t) {
        return R(t, "", L);
      }
      function M() {
        return !0;
      }
      function R(t, e, i) {
        let r = l.exec(t);
        return (
          !!r &&
          (r[1] ? ("string" == typeof e ? r[1] === e : e.has(r[1])) : i(r[2]))
        );
      }
      function D(t) {
        return c.test(t) && !p.test(t);
      }
      function j() {
        return !1;
      }
      function L(t) {
        return m.test(t);
      }
      function F(t) {
        return f.test(t);
      }
      let B = (function (t, ...e) {
        let i, a, l;
        let u = function (s) {
          var o;
          return (
            (a = (i = {
              cache: (function (t) {
                if (t < 1) return { get: () => void 0, set: () => {} };
                let e = 0,
                  i = new Map(),
                  r = new Map();
                function n(n, s) {
                  i.set(n, s), ++e > t && ((e = 0), (r = i), (i = new Map()));
                }
                return {
                  get(t) {
                    let e = i.get(t);
                    return void 0 !== e
                      ? e
                      : void 0 !== (e = r.get(t))
                      ? (n(t, e), e)
                      : void 0;
                  },
                  set(t, e) {
                    i.has(t) ? i.set(t, e) : n(t, e);
                  }
                };
              })((o = e.reduce((t, e) => e(t), t())).cacheSize),
              parseClassName: (function (t) {
                let { separator: e, experimentalParseClassName: i } = t,
                  r = 1 === e.length,
                  n = e[0],
                  s = e.length;
                function o(t) {
                  let i;
                  let o = [],
                    a = 0,
                    l = 0;
                  for (let u = 0; u < t.length; u++) {
                    let h = t[u];
                    if (0 === a) {
                      if (h === n && (r || t.slice(u, u + s) === e)) {
                        o.push(t.slice(l, u)), (l = u + s);
                        continue;
                      }
                      if ("/" === h) {
                        i = u;
                        continue;
                      }
                    }
                    "[" === h ? a++ : "]" === h && a--;
                  }
                  let u = 0 === o.length ? t : t.substring(l),
                    h = u.startsWith("!"),
                    d = h ? u.substring(1) : u;
                  return {
                    modifiers: o,
                    hasImportantModifier: h,
                    baseClassName: d,
                    maybePostfixModifierPosition: i && i > l ? i - l : void 0
                  };
                }
                return i
                  ? function (t) {
                      return i({ className: t, parseClassName: o });
                    }
                  : o;
              })(o),
              ...(function (t) {
                let e = (function (t) {
                    var e;
                    let { theme: i, prefix: r } = t,
                      s = { nextPart: new Map(), validators: [] };
                    return (
                      ((e = Object.entries(t.classGroups)),
                      r
                        ? e.map(([t, e]) => [
                            t,
                            e.map((t) =>
                              "string" == typeof t
                                ? r + t
                                : "object" == typeof t
                                ? Object.fromEntries(
                                    Object.entries(t).map(([t, e]) => [
                                      r + t,
                                      e
                                    ])
                                  )
                                : t
                            )
                          ])
                        : e).forEach(([t, e]) => {
                        (function t(e, i, r, s) {
                          e.forEach((e) => {
                            if ("string" == typeof e) {
                              ("" === e ? i : n(i, e)).classGroupId = r;
                              return;
                            }
                            if ("function" == typeof e) {
                              if (e.isThemeGetter) {
                                t(e(s), i, r, s);
                                return;
                              }
                              i.validators.push({
                                validator: e,
                                classGroupId: r
                              });
                              return;
                            }
                            Object.entries(e).forEach(([e, o]) => {
                              t(o, n(i, e), r, s);
                            });
                          });
                        })(e, s, t, i);
                      }),
                      s
                    );
                  })(t),
                  {
                    conflictingClassGroups: i,
                    conflictingClassGroupModifiers: s
                  } = t;
                return {
                  getClassGroupId: function (t) {
                    let i = t.split("-");
                    return (
                      "" === i[0] && 1 !== i.length && i.shift(),
                      (function t(e, i) {
                        if (0 === e.length) return i.classGroupId;
                        let r = e[0],
                          n = i.nextPart.get(r),
                          s = n ? t(e.slice(1), n) : void 0;
                        if (s) return s;
                        if (0 === i.validators.length) return;
                        let o = e.join("-");
                        return i.validators.find(({ validator: t }) => t(o))
                          ?.classGroupId;
                      })(i, e) ||
                        (function (t) {
                          if (r.test(t)) {
                            let e = r.exec(t)[1],
                              i = e?.substring(0, e.indexOf(":"));
                            if (i) return "arbitrary.." + i;
                          }
                        })(t)
                    );
                  },
                  getConflictingClassGroupIds: function (t, e) {
                    let r = i[t] || [];
                    return e && s[t] ? [...r, ...s[t]] : r;
                  }
                };
              })(o)
            }).cache.get),
            (l = i.cache.set),
            (u = h),
            h(s)
          );
        };
        function h(t) {
          let e = a(t);
          if (e) return e;
          let r = (function (t, e) {
            let {
                parseClassName: i,
                getClassGroupId: r,
                getConflictingClassGroupIds: n
              } = e,
              o = new Set();
            return t
              .trim()
              .split(s)
              .map((t) => {
                let {
                    modifiers: e,
                    hasImportantModifier: n,
                    baseClassName: s,
                    maybePostfixModifierPosition: o
                  } = i(t),
                  a = !!o,
                  l = r(a ? s.substring(0, o) : s);
                if (!l) {
                  if (!a || !(l = r(s)))
                    return { isTailwindClass: !1, originalClassName: t };
                  a = !1;
                }
                let u = (function (t) {
                  if (t.length <= 1) return t;
                  let e = [],
                    i = [];
                  return (
                    t.forEach((t) => {
                      "[" === t[0]
                        ? (e.push(...i.sort(), t), (i = []))
                        : i.push(t);
                    }),
                    e.push(...i.sort()),
                    e
                  );
                })(e).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? u + "!" : u,
                  classGroupId: l,
                  originalClassName: t,
                  hasPostfixModifier: a
                };
              })
              .reverse()
              .filter((t) => {
                if (!t.isTailwindClass) return !0;
                let {
                    modifierId: e,
                    classGroupId: i,
                    hasPostfixModifier: r
                  } = t,
                  s = e + i;
                return (
                  !o.has(s) &&
                  (o.add(s), n(i, r).forEach((t) => o.add(e + t)), !0)
                );
              })
              .reverse()
              .map((t) => t.originalClassName)
              .join(" ");
          })(t, i);
          return l(t, r), r;
        }
        return function () {
          return u(o.apply(null, arguments));
        };
      })(function () {
        let t = a("colors"),
          e = a("spacing"),
          i = a("blur"),
          r = a("brightness"),
          n = a("borderColor"),
          s = a("borderRadius"),
          o = a("borderSpacing"),
          l = a("borderWidth"),
          u = a("contrast"),
          h = a("grayscale"),
          d = a("hueRotate"),
          c = a("invert"),
          p = a("gap"),
          m = a("gradientColorStops"),
          f = a("gradientColorStopPositions"),
          S = a("inset"),
          k = a("margin"),
          R = a("opacity"),
          D = a("padding"),
          j = a("saturate"),
          L = a("scale"),
          F = a("sepia"),
          B = a("skew"),
          O = a("space"),
          W = a("translate"),
          I = () => ["auto", "contain", "none"],
          z = () => ["auto", "hidden", "clip", "visible", "scroll"],
          U = () => ["auto", P, e],
          N = () => [P, e],
          $ = () => ["", g, v],
          X = () => ["auto", y, P],
          H = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top"
          ],
          G = () => ["solid", "dashed", "dotted", "double", "none"],
          Z = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity"
          ],
          Y = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch"
          ],
          K = () => ["", "0", P],
          q = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
          ],
          _ = () => [y, b],
          J = () => [y, P];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [M],
            spacing: [g, v],
            blur: ["none", "", T, P],
            brightness: _(),
            borderColor: [t],
            borderRadius: ["none", "", "full", T, P],
            borderSpacing: N(),
            borderWidth: $(),
            contrast: _(),
            grayscale: K(),
            hueRotate: J(),
            invert: K(),
            gap: N(),
            gradientColorStops: [t],
            gradientColorStopPositions: [w, v],
            inset: U(),
            margin: U(),
            opacity: _(),
            padding: N(),
            saturate: _(),
            scale: _(),
            sepia: K(),
            skew: J(),
            space: N(),
            translate: N()
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", P] }],
            container: ["container"],
            columns: [{ columns: [T] }],
            "break-after": [{ "break-after": q() }],
            "break-before": [{ "break-before": q() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
              }
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden"
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] }
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] }
            ],
            "object-position": [{ object: [...H(), P] }],
            overflow: [{ overflow: z() }],
            "overflow-x": [{ "overflow-x": z() }],
            "overflow-y": [{ "overflow-y": z() }],
            overscroll: [{ overscroll: I() }],
            "overscroll-x": [{ "overscroll-x": I() }],
            "overscroll-y": [{ "overscroll-y": I() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [S] }],
            "inset-x": [{ "inset-x": [S] }],
            "inset-y": [{ "inset-y": [S] }],
            start: [{ start: [S] }],
            end: [{ end: [S] }],
            top: [{ top: [S] }],
            right: [{ right: [S] }],
            bottom: [{ bottom: [S] }],
            left: [{ left: [S] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", x, P] }],
            basis: [{ basis: U() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] }
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", P] }],
            grow: [{ grow: K() }],
            shrink: [{ shrink: K() }],
            order: [{ order: ["first", "last", "none", x, P] }],
            "grid-cols": [{ "grid-cols": [M] }],
            "col-start-end": [{ col: ["auto", { span: ["full", x, P] }, P] }],
            "col-start": [{ "col-start": X() }],
            "col-end": [{ "col-end": X() }],
            "grid-rows": [{ "grid-rows": [M] }],
            "row-start-end": [{ row: ["auto", { span: [x, P] }, P] }],
            "row-start": [{ "row-start": X() }],
            "row-end": [{ "row-end": X() }],
            "grid-flow": [
              { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", P] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", P] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...Y()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] }
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] }
            ],
            "align-content": [{ content: ["normal", ...Y(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] }
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
              }
            ],
            "place-content": [{ "place-content": [...Y(), "baseline"] }],
            "place-items": [
              {
                "place-items": ["start", "end", "center", "baseline", "stretch"]
              }
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] }
            ],
            p: [{ p: [D] }],
            px: [{ px: [D] }],
            py: [{ py: [D] }],
            ps: [{ ps: [D] }],
            pe: [{ pe: [D] }],
            pt: [{ pt: [D] }],
            pr: [{ pr: [D] }],
            pb: [{ pb: [D] }],
            pl: [{ pl: [D] }],
            m: [{ m: [k] }],
            mx: [{ mx: [k] }],
            my: [{ my: [k] }],
            ms: [{ ms: [k] }],
            me: [{ me: [k] }],
            mt: [{ mt: [k] }],
            mr: [{ mr: [k] }],
            mb: [{ mb: [k] }],
            ml: [{ ml: [k] }],
            "space-x": [{ "space-x": [O] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [O] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", P, e] }
            ],
            "min-w": [{ "min-w": [P, e, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  P,
                  e,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [T] },
                  T
                ]
              }
            ],
            h: [
              { h: [P, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }
            ],
            "min-h": [
              { "min-h": [P, e, "min", "max", "fit", "svh", "lvh", "dvh"] }
            ],
            "max-h": [
              { "max-h": [P, e, "min", "max", "fit", "svh", "lvh", "dvh"] }
            ],
            size: [{ size: [P, e, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", T, v] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  b
                ]
              }
            ],
            "font-family": [{ font: [M] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  P
                ]
              }
            ],
            "line-clamp": [{ "line-clamp": ["none", y, b] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  P
                ]
              }
            ],
            "list-image": [{ "list-image": ["none", P] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", P] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [t] }],
            "placeholder-opacity": [{ "placeholder-opacity": [R] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] }
            ],
            "text-color": [{ text: [t] }],
            "text-opacity": [{ "text-opacity": [R] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline"
            ],
            "text-decoration-style": [{ decoration: [...G(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, v] }
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, P] }],
            "text-decoration-color": [{ decoration: [t] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case"
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: N() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  P
                ]
              }
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces"
                ]
              }
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", P] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] }
            ],
            "bg-opacity": [{ "bg-opacity": [R] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...H(), V] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }]
              }
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", A] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                  },
                  C
                ]
              }
            ],
            "bg-color": [{ bg: [t] }],
            "gradient-from-pos": [{ from: [f] }],
            "gradient-via-pos": [{ via: [f] }],
            "gradient-to-pos": [{ to: [f] }],
            "gradient-from": [{ from: [m] }],
            "gradient-via": [{ via: [m] }],
            "gradient-to": [{ to: [m] }],
            rounded: [{ rounded: [s] }],
            "rounded-s": [{ "rounded-s": [s] }],
            "rounded-e": [{ "rounded-e": [s] }],
            "rounded-t": [{ "rounded-t": [s] }],
            "rounded-r": [{ "rounded-r": [s] }],
            "rounded-b": [{ "rounded-b": [s] }],
            "rounded-l": [{ "rounded-l": [s] }],
            "rounded-ss": [{ "rounded-ss": [s] }],
            "rounded-se": [{ "rounded-se": [s] }],
            "rounded-ee": [{ "rounded-ee": [s] }],
            "rounded-es": [{ "rounded-es": [s] }],
            "rounded-tl": [{ "rounded-tl": [s] }],
            "rounded-tr": [{ "rounded-tr": [s] }],
            "rounded-br": [{ "rounded-br": [s] }],
            "rounded-bl": [{ "rounded-bl": [s] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [R] }],
            "border-style": [{ border: [...G(), "hidden"] }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [R] }],
            "divide-style": [{ divide: G() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: ["", ...G()] }],
            "outline-offset": [{ "outline-offset": [g, P] }],
            "outline-w": [{ outline: [g, v] }],
            "outline-color": [{ outline: [t] }],
            "ring-w": [{ ring: $() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [t] }],
            "ring-opacity": [{ "ring-opacity": [R] }],
            "ring-offset-w": [{ "ring-offset": [g, v] }],
            "ring-offset-color": [{ "ring-offset": [t] }],
            shadow: [{ shadow: ["", "inner", "none", T, E] }],
            "shadow-color": [{ shadow: [M] }],
            opacity: [{ opacity: [R] }],
            "mix-blend": [
              { "mix-blend": [...Z(), "plus-lighter", "plus-darker"] }
            ],
            "bg-blend": [{ "bg-blend": Z() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [i] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", T, P] }],
            grayscale: [{ grayscale: [h] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [c] }],
            saturate: [{ saturate: [j] }],
            sepia: [{ sepia: [F] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [i] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [h] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [c] }],
            "backdrop-opacity": [{ "backdrop-opacity": [R] }],
            "backdrop-saturate": [{ "backdrop-saturate": [j] }],
            "backdrop-sepia": [{ "backdrop-sepia": [F] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [o] }],
            "border-spacing-x": [{ "border-spacing-x": [o] }],
            "border-spacing-y": [{ "border-spacing-y": [o] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  P
                ]
              }
            ],
            duration: [{ duration: J() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", P] }],
            delay: [{ delay: J() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", P] }
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [L] }],
            "scale-x": [{ "scale-x": [L] }],
            "scale-y": [{ "scale-y": [L] }],
            rotate: [{ rotate: [x, P] }],
            "translate-x": [{ "translate-x": [W] }],
            "translate-y": [{ "translate-y": [W] }],
            "skew-x": [{ "skew-x": [B] }],
            "skew-y": [{ "skew-y": [B] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  P
                ]
              }
            ],
            accent: [{ accent: ["auto", t] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  P
                ]
              }
            ],
            "caret-color": [{ caret: [t] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": N() }],
            "scroll-mx": [{ "scroll-mx": N() }],
            "scroll-my": [{ "scroll-my": N() }],
            "scroll-ms": [{ "scroll-ms": N() }],
            "scroll-me": [{ "scroll-me": N() }],
            "scroll-mt": [{ "scroll-mt": N() }],
            "scroll-mr": [{ "scroll-mr": N() }],
            "scroll-mb": [{ "scroll-mb": N() }],
            "scroll-ml": [{ "scroll-ml": N() }],
            "scroll-p": [{ "scroll-p": N() }],
            "scroll-px": [{ "scroll-px": N() }],
            "scroll-py": [{ "scroll-py": N() }],
            "scroll-ps": [{ "scroll-ps": N() }],
            "scroll-pe": [{ "scroll-pe": N() }],
            "scroll-pt": [{ "scroll-pt": N() }],
            "scroll-pr": [{ "scroll-pr": N() }],
            "scroll-pb": [{ "scroll-pb": N() }],
            "scroll-pl": [{ "scroll-pl": N() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", P] }
            ],
            fill: [{ fill: [t, "none"] }],
            "stroke-w": [{ stroke: [g, v, b] }],
            stroke: [{ stroke: [t, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left"
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction"
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl"
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l"
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l"
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml"
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl"
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] }
        };
      });
    }
  }
]);
