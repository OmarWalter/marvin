import {
  cs as vn,
  iG as pt,
  hG as xn,
  hu as gn,
  eJ as bn,
  iH as Pt,
  bY as Ze,
  n as s,
  B as M,
  c2 as yn,
  m as v,
  cz as wn,
  a1 as Ee,
  W as ze,
  y as De,
  by as ye,
  aF as Ue,
  bP as Be,
  gt as Cn,
  I as J,
  bA as kn,
  T as G,
  L as Ln,
  N as En,
  ag as Ne,
  ar as $,
  $ as Ke,
  be as Dn,
  A as ke,
  a3 as K,
  b5 as We,
  b9 as qe,
  iI as ht,
  iJ as $e,
  bc as Se,
  iK as Sn,
  dm as zt,
  b7 as An,
  dS as Me,
  iL as In,
  iM as Bt,
  b0 as Ye,
  iN as jn,
  fr as Tn,
  eU as ft,
  eP as Rn,
  a2 as Ge,
  iO as ut,
  iP as Un,
  eQ as Mn,
  Q as Nt,
  cB as Wn,
  iQ as Hn,
  bJ as ae,
  bS as _n,
  v as Pn,
  iR as mt,
  fO as zn,
  es as Ot,
  fD as He,
  U as Bn,
  fs as Nn,
  bK as vt,
  fk as On,
  iS as Fn,
  M as Vn,
  x as Kn,
  iT as xt,
  G as $n,
  iU as Gn,
  fh as Xn,
  cI as Zn,
  e0 as qn,
  ih as Yn,
  iV as Jn,
  fu as Qn,
  bd as gt,
  fw as ei,
  a5 as ti,
  a6 as ni,
  iW as bt,
  iX as ii,
  dy as ri,
  af as si,
  iY as ai,
  cO as oi,
  iZ as ci,
  i_ as di,
  i4 as li,
  i$ as pi,
  j0 as hi,
  j1 as fi,
  j2 as ui,
  j3 as mi,
  ea as B,
  df as z,
  j4 as Ft,
  j5 as Je,
  j6 as oe,
  ec as R,
  eb as Q,
  j7 as vi,
  cW as xi,
  cX as gi,
  d1 as bi,
  b6 as yi,
  a0 as wi,
  d5 as Ci,
  d6 as ki,
  iD as Li,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
import { S as Ei } from "./scroll-shade-QMKIYVf5.js";
import { E as Di, B as Si } from "./embed-feature-disabled-modal-_wkgj46S.js";
import { a as Ai } from "./index-DPgyYGTA.js";
function yt(e, t) {
  vn(2, arguments);
  var n = pt(e),
    i = pt(t);
  return n.getTime() < i.getTime();
}
class Ii extends xn {
  constructor(t, n) {
    super(n(t.getValue())), (this.property = t), (this.f = n);
  }
  subscribe(t) {
    return t
      ? typeof t == "function"
        ? this.property.subscribe((n) => t(this.f(n)))
        : this.property.subscribe({
            next: (n) => {
              var i;
              return (i = t.next) == null ? void 0 : i.call(t, this.f(n));
            },
            error: (n) => {
              var i;
              return (i = t.error) == null ? void 0 : i.call(t, n);
            },
            complete: () => {
              var n;
              return (n = t.complete) == null ? void 0 : n.call(t);
            },
          })
      : gn.EMPTY;
  }
  get value() {
    return this.getValue();
  }
  getValue() {
    return this.f(this.property.getValue());
  }
}
function ji(e, t) {
  return new Ii(e, t);
}
const wt = (e) => {
    const n = new URL(e).pathname.split("/").filter(Boolean);
    if (n.length === 1) return "profile";
    if (n.length > 1 && n[1] === "status") return "post";
    if (n.length > 1 && n[0] === "i" && n[1] === "communities")
      return "community";
  },
  _e = [
    "twitter",
    "telegram",
    "discord",
    "facebook",
    "tiktok",
    "instagram",
    "reddit",
    "farcaster",
  ],
  Ct = ["profile", "community", "post"],
  Ti = "Website",
  Ri = "media/image",
  Ui = "media/video",
  Mi = (e) => e.label === Ti,
  Qe = (e) => e.label === Ri,
  et = (e) => e.label === Ui,
  Yr = (e) => et(e) || Qe(e),
  Vt = (e) => {
    const t = e.find(Mi);
    return t || e.filter((i) => !Qe(i) && !et(i))[0];
  },
  Kt = (e) =>
    e
      .filter((t) => t.type !== void 0)
      .sort((t, n) => {
        let i, r;
        if (t.type === "twitter" && n.type === "twitter") {
          const c = wt(t.url),
            h = wt(n.url);
          (i = c !== void 0 ? Ct.indexOf(c) : -1),
            (r = h !== void 0 ? Ct.indexOf(h) : -1);
        } else (i = _e.indexOf(t.type)), (r = _e.indexOf(n.type));
        return i === -1 && (i = 1 / 0), r === -1 && (r = 1 / 0), i - r;
      }),
  $t = (e) =>
    e
      .filter((t) => t.type === void 0)
      .map((t) => ({ url: t.url, label: t.label ?? "" })),
  Wi = (e, t) => {
    if (!t) return;
    const n = Pt(t.claims ?? []),
      i = (e && n ? n.socials : t.socials) ?? [],
      r = bn(i, "type").sort((d, u) => _e.indexOf(d.type) - _e.indexOf(u.type)),
      c = (e && n ? n.websites : t.websites) ?? [],
      h = Vt(c);
    return { socials: r, websites: c, website: h };
  },
  Hi = (e) => {
    if (!e.cmsToken) return;
    const t = Pt(e.cmsToken.claims ?? []),
      n = (e.includeClaims && t ? t.links : e.cmsToken.links) ?? [],
      i = Kt(n),
      r = $t(n),
      c = Vt(r);
    return { socials: i, websites: r, website: c };
  },
  _i = (e) => {
    const t = Wi(e.includeClaims, e.dsDataToken);
    if (t) return t;
    const n = Hi({ includeClaims: e.includeClaims, cmsToken: e.cmsToken });
    return n || { socials: [], websites: [], website: void 0 };
  },
  Jr = (e) => {
    const t = _i(e),
      n = t.websites.find(Qe),
      i = t.websites.find(et);
    if (i)
      return {
        type: "video",
        src: i.url,
        posterSrc: n == null ? void 0 : n.url,
      };
    if (n) return { type: "image", src: n.url };
  },
  Qr = (e) => {
    const t = e.links ?? [],
      n = Kt(t),
      i = $t(t);
    return { socials: n, websites: i };
  },
  Gt = Ze(function (t, n) {
    const { size: i, centerContent: r = !0, ...c } = t,
      h = r
        ? { display: "flex", alignItems: "center", justifyContent: "center" }
        : {};
    return s.jsx(M, {
      ref: n,
      boxSize: i,
      __css: { ...h, flexShrink: 0, flexGrow: 0 },
      ...c,
    });
  });
Gt.displayName = "Square";
const Pi = Ze(function (t, n) {
  const { size: i, ...r } = t;
  return s.jsx(Gt, { size: i, ref: n, borderRadius: "9999px", ...r });
});
Pi.displayName = "Circle";
const zi = Ze(function (t, n) {
  const {
      templateAreas: i,
      gap: r,
      rowGap: c,
      columnGap: h,
      column: d,
      row: u,
      autoFlow: l,
      autoRows: o,
      templateRows: m,
      autoColumns: w,
      templateColumns: y,
      ...x
    } = t,
    j = {
      display: "grid",
      gridTemplateAreas: i,
      gridGap: r,
      gridRowGap: c,
      gridColumnGap: h,
      gridAutoColumns: w,
      gridColumn: d,
      gridRow: u,
      gridAutoFlow: l,
      gridAutoRows: o,
      gridTemplateRows: m,
      gridTemplateColumns: y,
    };
  return s.jsx(yn.div, { ref: n, __css: j, ...x });
});
zi.displayName = "Grid";
const Oe = v.memo(() =>
    s.jsx(wn, {
      size: "xs",
      spinnerContainerProps: { display: "flex" },
      width: "100%",
      justifyContent: "center",
    })
  ),
  Xt = 18,
  Bi = v.memo((e) => {
    const {
        contentWidth: t,
        width: n,
        children: i,
        height: r,
        onHide: c,
        isLoaded: h,
        advertiseLink: d,
      } = e,
      u = Ee("white", "blue.975");
    return s.jsxs(M, {
      display: "flex",
      flexDirection: "column",
      width: n,
      height: r,
      position: "relative",
      overflow: "hidden",
      alignItems: "center",
      children: [
        s.jsxs(M, {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: t,
          height: r,
          children: [
            s.jsx(M, { overflow: "hidden", flex: 1, children: i }),
            s.jsxs(ze, {
              pt: "2px",
              flexShrink: 0,
              justifyContent: "space-between",
              height: `${Xt}px`,
              opacity: 0.7,
              children: [
                d &&
                  s.jsx(De, {
                    as: ye,
                    variant: "link",
                    target: "_blank",
                    href: d,
                    height: "100%",
                    size: "xs",
                    fontWeight: "normal",
                    children: "Advertise here",
                  }),
                c &&
                  s.jsx(De, {
                    marginLeft: "auto",
                    height: "100%",
                    size: "xs",
                    variant: "link",
                    fontWeight: "normal",
                    onClick: c,
                    children: "Hide ad",
                  }),
              ],
            }),
          ],
        }),
        s.jsx(M, {
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          backgroundColor: u,
          pointerEvents: h ? "none" : "all",
          opacity: h ? 0 : 1,
          transitionDuration: "fast",
          transitionProperty: "opacity",
          children: s.jsx(Oe, {}),
        }),
      ],
    });
  }),
  Ni = v.forwardRef((e, t) => {
    const { src: n, width: i, height: r, ...c } = e;
    return s.jsx("iframe", {
      ...c,
      ref: t,
      style: {
        backgroundColor: "transparent",
        colorScheme: "auto",
        ...c.style,
      },
      src: n,
      width: i ?? "100%",
      height: r ?? "100%",
      allowtransparency: "true",
    });
  }),
  kt = v.memo((e) => {
    const {
        height: t,
        onHide: n,
        ad: i,
        width: r,
        onView: c,
        onFallbackRequest: h,
        adUnit: d,
      } = e,
      u = Ue(i),
      [l, o] = v.useState(!1),
      m = v.useCallback(() => {
        u.current && (o(!0), c(u.current));
      }, [u, c]),
      w = v.useCallback(() => {
        h(d);
      }, [d, h]);
    return s.jsx(Bi, {
      contentWidth: i ? Oi(i.adUnit) : void 0,
      width: r,
      height: t,
      onHide: n,
      isLoaded: l,
      children:
        i &&
        s.jsxs(ye, {
          href: i.url,
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          children: [
            i.source === "image" &&
              s.jsx(Be, { src: i.src, onLoad: m, onError: w, loading: "lazy" }),
            i.source === "iframe" &&
              s.jsx(Ni, {
                style: { pointerEvents: "none" },
                onLoad: m,
                onError: w,
                width: "100%",
                height: "100%",
                src: i.src,
              }),
          ],
        }),
    });
  });
function Oi(e) {
  return `${e.size.width}px`;
}
var Zt = { exports: {} },
  Fi = (Zt.exports = {});
Fi.forEach = function (e, t) {
  for (var n = 0; n < e.length; n++) {
    var i = t(e[n]);
    if (i) return i;
  }
};
var qt = Zt.exports,
  Vi = function (e) {
    var t = e.stateHandler.getState;
    function n(h) {
      var d = t(h);
      return d && !!d.isDetectable;
    }
    function i(h) {
      t(h).isDetectable = !0;
    }
    function r(h) {
      return !!t(h).busy;
    }
    function c(h, d) {
      t(h).busy = !!d;
    }
    return { isDetectable: n, markAsDetectable: i, isBusy: r, markBusy: c };
  },
  Ki = function (e) {
    var t = {};
    function n(h) {
      var d = e.get(h);
      return d === void 0 ? [] : t[d] || [];
    }
    function i(h, d) {
      var u = e.get(h);
      t[u] || (t[u] = []), t[u].push(d);
    }
    function r(h, d) {
      for (var u = n(h), l = 0, o = u.length; l < o; ++l)
        if (u[l] === d) {
          u.splice(l, 1);
          break;
        }
    }
    function c(h) {
      var d = n(h);
      d && (d.length = 0);
    }
    return { get: n, add: i, removeListener: r, removeAllListeners: c };
  },
  $i = function () {
    var e = 1;
    function t() {
      return e++;
    }
    return { generate: t };
  },
  Gi = function (e) {
    var t = e.idGenerator,
      n = e.stateHandler.getState;
    function i(c) {
      var h = n(c);
      return h && h.id !== void 0 ? h.id : null;
    }
    function r(c) {
      var h = n(c);
      if (!h)
        throw new Error(
          "setId required the element to have a resize detection state."
        );
      var d = t.generate();
      return (h.id = d), d;
    }
    return { get: i, set: r };
  },
  Xi = function (e) {
    function t() {}
    var n = { log: t, warn: t, error: t };
    if (!e && window.console) {
      var i = function (r, c) {
        r[c] = function () {
          var d = console[c];
          if (d.apply) d.apply(console, arguments);
          else for (var u = 0; u < arguments.length; u++) d(arguments[u]);
        };
      };
      i(n, "log"), i(n, "warn"), i(n, "error");
    }
    return n;
  },
  Yt = { exports: {} },
  Jt = (Yt.exports = {});
Jt.isIE = function (e) {
  function t() {
    var i = navigator.userAgent.toLowerCase();
    return (
      i.indexOf("msie") !== -1 ||
      i.indexOf("trident") !== -1 ||
      i.indexOf(" edge/") !== -1
    );
  }
  if (!t()) return !1;
  if (!e) return !0;
  var n = (function () {
    var i,
      r = 3,
      c = document.createElement("div"),
      h = c.getElementsByTagName("i");
    do c.innerHTML = "<!--[if gt IE " + ++r + "]><i></i><![endif]-->";
    while (h[0]);
    return r > 4 ? r : i;
  })();
  return e === n;
};
Jt.isLegacyOpera = function () {
  return !!window.opera;
};
var Qt = Yt.exports,
  en = { exports: {} },
  Zi = (en.exports = {});
Zi.getOption = qi;
function qi(e, t, n) {
  var i = e[t];
  return i == null && n !== void 0 ? n : i;
}
var Yi = en.exports,
  Lt = Yi,
  Ji = function (t) {
    t = t || {};
    var n = t.reporter,
      i = Lt.getOption(t, "async", !0),
      r = Lt.getOption(t, "auto", !0);
    r &&
      !i &&
      (n &&
        n.warn(
          "Invalid options combination. auto=true and async=false is invalid. Setting async=true."
        ),
      (i = !0));
    var c = Et(),
      h,
      d = !1;
    function u(x, j) {
      !d && r && i && c.size() === 0 && m(), c.add(x, j);
    }
    function l() {
      for (d = !0; c.size(); ) {
        var x = c;
        (c = Et()), x.process();
      }
      d = !1;
    }
    function o(x) {
      d || (x === void 0 && (x = i), h && (w(h), (h = null)), x ? m() : l());
    }
    function m() {
      h = y(l);
    }
    function w(x) {
      var j = clearTimeout;
      return j(x);
    }
    function y(x) {
      var j = function (W) {
        return setTimeout(W, 0);
      };
      return j(x);
    }
    return { add: u, force: o };
  };
function Et() {
  var e = {},
    t = 0,
    n = 0,
    i = 0;
  function r(d, u) {
    u || ((u = d), (d = 0)),
      d > n ? (n = d) : d < i && (i = d),
      e[d] || (e[d] = []),
      e[d].push(u),
      t++;
  }
  function c() {
    for (var d = i; d <= n; d++)
      for (var u = e[d], l = 0; l < u.length; l++) {
        var o = u[l];
        o();
      }
  }
  function h() {
    return t;
  }
  return { add: r, process: c, size: h };
}
var tt = "_erd";
function Qi(e) {
  return (e[tt] = {}), tn(e);
}
function tn(e) {
  return e[tt];
}
function er(e) {
  delete e[tt];
}
var tr = { initState: Qi, getState: tn, cleanState: er },
  Ce = Qt,
  nr = function (e) {
    e = e || {};
    var t = e.reporter,
      n = e.batchProcessor,
      i = e.stateHandler.getState;
    if (!t) throw new Error("Missing required dependency: reporter.");
    function r(l, o) {
      function m() {
        o(l);
      }
      if (Ce.isIE(8))
        (i(l).object = { proxy: m }), l.attachEvent("onresize", m);
      else {
        var w = d(l);
        if (!w) throw new Error("Element is not detectable by this strategy.");
        w.contentDocument.defaultView.addEventListener("resize", m);
      }
    }
    function c(l) {
      var o = e.important ? " !important; " : "; ";
      return (l.join(o) + o).trim();
    }
    function h(l, o, m) {
      m || ((m = o), (o = l), (l = null)), (l = l || {});
      function w(y, x) {
        var j = c([
            "display: block",
            "position: absolute",
            "top: 0",
            "left: 0",
            "width: 100%",
            "height: 100%",
            "border: none",
            "padding: 0",
            "margin: 0",
            "opacity: 0",
            "z-index: -1000",
            "pointer-events: none",
          ]),
          W = !1,
          C = window.getComputedStyle(y),
          D = y.offsetWidth,
          S = y.offsetHeight;
        i(y).startSize = { width: D, height: S };
        function f() {
          function a() {
            if (C.position === "static") {
              y.style.setProperty(
                "position",
                "relative",
                l.important ? "important" : ""
              );
              var L = function (_, A, P, k) {
                function T(N) {
                  return N.replace(/[^-\d\.]/g, "");
                }
                var F = P[k];
                F !== "auto" &&
                  T(F) !== "0" &&
                  (_.warn(
                    "An element that is positioned static has style." +
                      k +
                      "=" +
                      F +
                      " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." +
                      k +
                      " will be set to 0. Element: ",
                    A
                  ),
                  A.style.setProperty(k, "0", l.important ? "important" : ""));
              };
              L(t, y, C, "top"),
                L(t, y, C, "right"),
                L(t, y, C, "bottom"),
                L(t, y, C, "left");
            }
          }
          function g() {
            W || a();
            function L(A, P) {
              if (!A.contentDocument) {
                var k = i(A);
                k.checkForObjectDocumentTimeoutId &&
                  window.clearTimeout(k.checkForObjectDocumentTimeoutId),
                  (k.checkForObjectDocumentTimeoutId = setTimeout(function () {
                    (k.checkForObjectDocumentTimeoutId = 0), L(A, P);
                  }, 100));
                return;
              }
              P(A.contentDocument);
            }
            var _ = this;
            L(_, function (P) {
              x(y);
            });
          }
          C.position !== "" && (a(), (W = !0));
          var p = document.createElement("object");
          (p.style.cssText = j),
            (p.tabIndex = -1),
            (p.type = "text/html"),
            p.setAttribute("aria-hidden", "true"),
            (p.onload = g),
            Ce.isIE() || (p.data = "about:blank"),
            i(y) &&
              (y.appendChild(p),
              (i(y).object = p),
              Ce.isIE() && (p.data = "about:blank"));
        }
        n ? n.add(f) : f();
      }
      Ce.isIE(8) ? m(o) : w(o, m);
    }
    function d(l) {
      return i(l).object;
    }
    function u(l) {
      if (i(l)) {
        var o = d(l);
        o &&
          (Ce.isIE(8) ? l.detachEvent("onresize", o.proxy) : l.removeChild(o),
          i(l).checkForObjectDocumentTimeoutId &&
            window.clearTimeout(i(l).checkForObjectDocumentTimeoutId),
          delete i(l).object);
      }
    }
    return { makeDetectable: h, addListener: r, uninstall: u };
  },
  ir = qt.forEach,
  rr = function (e) {
    e = e || {};
    var t = e.reporter,
      n = e.batchProcessor,
      i = e.stateHandler.getState,
      r = e.idHandler;
    if (!n) throw new Error("Missing required dependency: batchProcessor");
    if (!t) throw new Error("Missing required dependency: reporter.");
    var c = o(),
      h = "erd_scroll_detection_scrollbar_style",
      d = "erd_scroll_detection_container";
    function u(f) {
      m(f, h, d);
    }
    u(window.document);
    function l(f) {
      var a = e.important ? " !important; " : "; ";
      return (f.join(a) + a).trim();
    }
    function o() {
      var f = 500,
        a = 500,
        g = document.createElement("div");
      g.style.cssText = l([
        "position: absolute",
        "width: " + f * 2 + "px",
        "height: " + a * 2 + "px",
        "visibility: hidden",
        "margin: 0",
        "padding: 0",
      ]);
      var p = document.createElement("div");
      (p.style.cssText = l([
        "position: absolute",
        "width: " + f + "px",
        "height: " + a + "px",
        "overflow: scroll",
        "visibility: none",
        "top: " + -f * 3 + "px",
        "left: " + -a * 3 + "px",
        "visibility: hidden",
        "margin: 0",
        "padding: 0",
      ])),
        p.appendChild(g),
        document.body.insertBefore(p, document.body.firstChild);
      var L = f - p.clientWidth,
        _ = a - p.clientHeight;
      return document.body.removeChild(p), { width: L, height: _ };
    }
    function m(f, a, g) {
      function p(P, k) {
        k =
          k ||
          function (F) {
            f.head.appendChild(F);
          };
        var T = f.createElement("style");
        return (T.innerHTML = P), (T.id = a), k(T), T;
      }
      if (!f.getElementById(a)) {
        var L = g + "_animation",
          _ = g + "_animation_active",
          A = `/* Created by the element-resize-detector library. */
`;
        (A +=
          "." +
          g +
          " > div::-webkit-scrollbar { " +
          l(["display: none"]) +
          ` }

`),
          (A +=
            "." +
            _ +
            " { " +
            l([
              "-webkit-animation-duration: 0.1s",
              "animation-duration: 0.1s",
              "-webkit-animation-name: " + L,
              "animation-name: " + L,
            ]) +
            ` }
`),
          (A +=
            "@-webkit-keyframes " +
            L +
            ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`),
          (A +=
            "@keyframes " +
            L +
            " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }"),
          p(A);
      }
    }
    function w(f) {
      f.className += " " + d + "_animation_active";
    }
    function y(f, a, g) {
      if (f.addEventListener) f.addEventListener(a, g);
      else if (f.attachEvent) f.attachEvent("on" + a, g);
      else return t.error("[scroll] Don't know how to add event listeners.");
    }
    function x(f, a, g) {
      if (f.removeEventListener) f.removeEventListener(a, g);
      else if (f.detachEvent) f.detachEvent("on" + a, g);
      else return t.error("[scroll] Don't know how to remove event listeners.");
    }
    function j(f) {
      return i(f).container.childNodes[0].childNodes[0].childNodes[0];
    }
    function W(f) {
      return i(f).container.childNodes[0].childNodes[0].childNodes[1];
    }
    function C(f, a) {
      var g = i(f).listeners;
      if (!g.push)
        throw new Error(
          "Cannot add listener to an element that is not detectable."
        );
      i(f).listeners.push(a);
    }
    function D(f, a, g) {
      g || ((g = a), (a = f), (f = null)), (f = f || {});
      function p() {
        if (f.debug) {
          var b = Array.prototype.slice.call(arguments);
          if ((b.unshift(r.get(a), "Scroll: "), t.log.apply))
            t.log.apply(null, b);
          else for (var E = 0; E < b.length; E++) t.log(b[E]);
        }
      }
      function L(b) {
        function E(U) {
          var X = U.getRootNode && U.getRootNode().contains(U);
          return (
            U === U.ownerDocument.body || U.ownerDocument.body.contains(U) || X
          );
        }
        return !E(b) || window.getComputedStyle(b) === null;
      }
      function _(b) {
        var E = i(b).container.childNodes[0],
          U = window.getComputedStyle(E);
        return !U.width || U.width.indexOf("px") === -1;
      }
      function A() {
        var b = window.getComputedStyle(a),
          E = {};
        return (
          (E.position = b.position),
          (E.width = a.offsetWidth),
          (E.height = a.offsetHeight),
          (E.top = b.top),
          (E.right = b.right),
          (E.bottom = b.bottom),
          (E.left = b.left),
          (E.widthCSS = b.width),
          (E.heightCSS = b.height),
          E
        );
      }
      function P() {
        var b = A();
        (i(a).startSize = { width: b.width, height: b.height }),
          p("Element start size", i(a).startSize);
      }
      function k() {
        i(a).listeners = [];
      }
      function T() {
        if ((p("storeStyle invoked."), !i(a))) {
          p("Aborting because element has been uninstalled");
          return;
        }
        var b = A();
        i(a).style = b;
      }
      function F(b, E, U) {
        (i(b).lastWidth = E), (i(b).lastHeight = U);
      }
      function N(b) {
        return j(b).childNodes[0];
      }
      function ne() {
        return 2 * c.width + 1;
      }
      function Ae() {
        return 2 * c.height + 1;
      }
      function Ie(b) {
        return b + 10 + ne();
      }
      function je(b) {
        return b + 10 + Ae();
      }
      function on(b) {
        return b * 2 + ne();
      }
      function cn(b) {
        return b * 2 + Ae();
      }
      function rt(b, E, U) {
        var X = j(b),
          ie = W(b),
          ce = Ie(E),
          de = je(U),
          O = on(E),
          I = cn(U);
        (X.scrollLeft = ce),
          (X.scrollTop = de),
          (ie.scrollLeft = O),
          (ie.scrollTop = I);
      }
      function st() {
        var b = i(a).container;
        if (!b) {
          (b = document.createElement("div")),
            (b.className = d),
            (b.style.cssText = l([
              "visibility: hidden",
              "display: inline",
              "width: 0px",
              "height: 0px",
              "z-index: -1",
              "overflow: hidden",
              "margin: 0",
              "padding: 0",
            ])),
            (i(a).container = b),
            w(b),
            a.appendChild(b);
          var E = function () {
            i(a).onRendered && i(a).onRendered();
          };
          y(b, "animationstart", E), (i(a).onAnimationStart = E);
        }
        return b;
      }
      function dn() {
        function b() {
          var H = i(a).style;
          if (H.position === "static") {
            a.style.setProperty(
              "position",
              "relative",
              f.important ? "important" : ""
            );
            var Y = function (pe, se, fn, Re) {
              function un(mn) {
                return mn.replace(/[^-\d\.]/g, "");
              }
              var Fe = fn[Re];
              Fe !== "auto" &&
                un(Fe) !== "0" &&
                (pe.warn(
                  "An element that is positioned static has style." +
                    Re +
                    "=" +
                    Fe +
                    " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." +
                    Re +
                    " will be set to 0. Element: ",
                  se
                ),
                (se.style[Re] = 0));
            };
            Y(t, a, H, "top"),
              Y(t, a, H, "right"),
              Y(t, a, H, "bottom"),
              Y(t, a, H, "left");
          }
        }
        function E(H, Y, pe, se) {
          return (
            (H = H ? H + "px" : "0"),
            (Y = Y ? Y + "px" : "0"),
            (pe = pe ? pe + "px" : "0"),
            (se = se ? se + "px" : "0"),
            ["left: " + H, "top: " + Y, "right: " + se, "bottom: " + pe]
          );
        }
        if ((p("Injecting elements"), !i(a))) {
          p("Aborting because element has been uninstalled");
          return;
        }
        b();
        var U = i(a).container;
        U || (U = st());
        var X = c.width,
          ie = c.height,
          ce = l([
            "position: absolute",
            "flex: none",
            "overflow: hidden",
            "z-index: -1",
            "visibility: hidden",
            "width: 100%",
            "height: 100%",
            "left: 0px",
            "top: 0px",
          ]),
          de = l(
            [
              "position: absolute",
              "flex: none",
              "overflow: hidden",
              "z-index: -1",
              "visibility: hidden",
            ].concat(E(-(1 + X), -(1 + ie), -ie, -X))
          ),
          O = l([
            "position: absolute",
            "flex: none",
            "overflow: scroll",
            "z-index: -1",
            "visibility: hidden",
            "width: 100%",
            "height: 100%",
          ]),
          I = l([
            "position: absolute",
            "flex: none",
            "overflow: scroll",
            "z-index: -1",
            "visibility: hidden",
            "width: 100%",
            "height: 100%",
          ]),
          V = l(["position: absolute", "left: 0", "top: 0"]),
          re = l(["position: absolute", "width: 200%", "height: 200%"]),
          Z = document.createElement("div"),
          q = document.createElement("div"),
          le = document.createElement("div"),
          ot = document.createElement("div"),
          Te = document.createElement("div"),
          ct = document.createElement("div");
        (Z.dir = "ltr"),
          (Z.style.cssText = ce),
          (Z.className = d),
          (q.className = d),
          (q.style.cssText = de),
          (le.style.cssText = O),
          (ot.style.cssText = V),
          (Te.style.cssText = I),
          (ct.style.cssText = re),
          le.appendChild(ot),
          Te.appendChild(ct),
          q.appendChild(le),
          q.appendChild(Te),
          Z.appendChild(q),
          U.appendChild(Z);
        function dt() {
          var H = i(a);
          H && H.onExpand
            ? H.onExpand()
            : p("Aborting expand scroll handler: element has been uninstalled");
        }
        function lt() {
          var H = i(a);
          H && H.onShrink
            ? H.onShrink()
            : p("Aborting shrink scroll handler: element has been uninstalled");
        }
        y(le, "scroll", dt),
          y(Te, "scroll", lt),
          (i(a).onExpandScroll = dt),
          (i(a).onShrinkScroll = lt);
      }
      function ln() {
        function b(O, I, V) {
          var re = N(O),
            Z = Ie(I),
            q = je(V);
          re.style.setProperty(
            "width",
            Z + "px",
            f.important ? "important" : ""
          ),
            re.style.setProperty(
              "height",
              q + "px",
              f.important ? "important" : ""
            );
        }
        function E(O) {
          var I = a.offsetWidth,
            V = a.offsetHeight,
            re = I !== i(a).lastWidth || V !== i(a).lastHeight;
          p("Storing current size", I, V),
            F(a, I, V),
            n.add(0, function () {
              if (re) {
                if (!i(a)) {
                  p("Aborting because element has been uninstalled");
                  return;
                }
                if (!U()) {
                  p(
                    "Aborting because element container has not been initialized"
                  );
                  return;
                }
                if (f.debug) {
                  var q = a.offsetWidth,
                    le = a.offsetHeight;
                  (q !== I || le !== V) &&
                    t.warn(
                      r.get(a),
                      "Scroll: Size changed before updating detector elements."
                    );
                }
                b(a, I, V);
              }
            }),
            n.add(1, function () {
              if (!i(a)) {
                p("Aborting because element has been uninstalled");
                return;
              }
              if (!U()) {
                p(
                  "Aborting because element container has not been initialized"
                );
                return;
              }
              rt(a, I, V);
            }),
            re &&
              O &&
              n.add(2, function () {
                if (!i(a)) {
                  p("Aborting because element has been uninstalled");
                  return;
                }
                if (!U()) {
                  p(
                    "Aborting because element container has not been initialized"
                  );
                  return;
                }
                O();
              });
        }
        function U() {
          return !!i(a).container;
        }
        function X() {
          function O() {
            return i(a).lastNotifiedWidth === void 0;
          }
          p("notifyListenersIfNeeded invoked");
          var I = i(a);
          if (
            O() &&
            I.lastWidth === I.startSize.width &&
            I.lastHeight === I.startSize.height
          )
            return p(
              "Not notifying: Size is the same as the start size, and there has been no notification yet."
            );
          if (
            I.lastWidth === I.lastNotifiedWidth &&
            I.lastHeight === I.lastNotifiedHeight
          )
            return p("Not notifying: Size already notified");
          p("Current size not notified, notifying..."),
            (I.lastNotifiedWidth = I.lastWidth),
            (I.lastNotifiedHeight = I.lastHeight),
            ir(i(a).listeners, function (V) {
              V(a);
            });
        }
        function ie() {
          if ((p("startanimation triggered."), _(a))) {
            p("Ignoring since element is still unrendered...");
            return;
          }
          p("Element rendered.");
          var O = j(a),
            I = W(a);
          (O.scrollLeft === 0 ||
            O.scrollTop === 0 ||
            I.scrollLeft === 0 ||
            I.scrollTop === 0) &&
            (p("Scrollbars out of sync. Updating detector elements..."), E(X));
        }
        function ce() {
          if ((p("Scroll detected."), _(a))) {
            p("Scroll event fired while unrendered. Ignoring...");
            return;
          }
          E(X);
        }
        if ((p("registerListenersAndPositionElements invoked."), !i(a))) {
          p("Aborting because element has been uninstalled");
          return;
        }
        (i(a).onRendered = ie), (i(a).onExpand = ce), (i(a).onShrink = ce);
        var de = i(a).style;
        b(a, de.width, de.height);
      }
      function pn() {
        if ((p("finalizeDomMutation invoked."), !i(a))) {
          p("Aborting because element has been uninstalled");
          return;
        }
        var b = i(a).style;
        F(a, b.width, b.height), rt(a, b.width, b.height);
      }
      function hn() {
        g(a);
      }
      function at() {
        p("Installing..."),
          k(),
          P(),
          n.add(0, T),
          n.add(1, dn),
          n.add(2, ln),
          n.add(3, pn),
          n.add(4, hn);
      }
      p("Making detectable..."),
        L(a)
          ? (p("Element is detached"),
            st(),
            p("Waiting until element is attached..."),
            (i(a).onRendered = function () {
              p("Element is now attached"), at();
            }))
          : at();
    }
    function S(f) {
      var a = i(f);
      a &&
        (a.onExpandScroll && x(j(f), "scroll", a.onExpandScroll),
        a.onShrinkScroll && x(W(f), "scroll", a.onShrinkScroll),
        a.onAnimationStart &&
          x(a.container, "animationstart", a.onAnimationStart),
        a.container && f.removeChild(a.container));
    }
    return { makeDetectable: D, addListener: C, uninstall: S, initDocument: u };
  },
  Le = qt.forEach,
  sr = Vi,
  ar = Ki,
  or = $i,
  cr = Gi,
  dr = Xi,
  Dt = Qt,
  lr = Ji,
  ee = tr,
  pr = nr,
  hr = rr;
function St(e) {
  return Array.isArray(e) || e.length !== void 0;
}
function At(e) {
  if (Array.isArray(e)) return e;
  var t = [];
  return (
    Le(e, function (n) {
      t.push(n);
    }),
    t
  );
}
function It(e) {
  return e && e.nodeType === 1;
}
var fr = function (e) {
  e = e || {};
  var t;
  if (e.idHandler)
    t = {
      get: function (D) {
        return e.idHandler.get(D, !0);
      },
      set: e.idHandler.set,
    };
  else {
    var n = or(),
      i = cr({ idGenerator: n, stateHandler: ee });
    t = i;
  }
  var r = e.reporter;
  if (!r) {
    var c = r === !1;
    r = dr(c);
  }
  var h = te(e, "batchProcessor", lr({ reporter: r })),
    d = {};
  (d.callOnAdd = !!te(e, "callOnAdd", !0)), (d.debug = !!te(e, "debug", !1));
  var u = ar(t),
    l = sr({ stateHandler: ee }),
    o,
    m = te(e, "strategy", "object"),
    w = te(e, "important", !1),
    y = {
      reporter: r,
      batchProcessor: h,
      stateHandler: ee,
      idHandler: t,
      important: w,
    };
  if (
    (m === "scroll" &&
      (Dt.isLegacyOpera()
        ? (r.warn(
            "Scroll strategy is not supported on legacy Opera. Changing to object strategy."
          ),
          (m = "object"))
        : Dt.isIE(9) &&
          (r.warn(
            "Scroll strategy is not supported on IE9. Changing to object strategy."
          ),
          (m = "object"))),
    m === "scroll")
  )
    o = hr(y);
  else if (m === "object") o = pr(y);
  else throw new Error("Invalid strategy name: " + m);
  var x = {};
  function j(D, S, f) {
    function a(P) {
      var k = u.get(P);
      Le(k, function (F) {
        F(P);
      });
    }
    function g(P, k, T) {
      u.add(k, T), P && T(k);
    }
    if ((f || ((f = S), (S = D), (D = {})), !S))
      throw new Error("At least one element required.");
    if (!f) throw new Error("Listener required.");
    if (It(S)) S = [S];
    else if (St(S)) S = At(S);
    else
      return r.error(
        "Invalid arguments. Must be a DOM element or a collection of DOM elements."
      );
    var p = 0,
      L = te(D, "callOnAdd", d.callOnAdd),
      _ = te(D, "onReady", function () {}),
      A = te(D, "debug", d.debug);
    Le(S, function (k) {
      ee.getState(k) || (ee.initState(k), t.set(k));
      var T = t.get(k);
      if (
        (A && r.log("Attaching listener to element", T, k), !l.isDetectable(k))
      ) {
        if ((A && r.log(T, "Not detectable."), l.isBusy(k))) {
          A && r.log(T, "System busy making it detectable"),
            g(L, k, f),
            (x[T] = x[T] || []),
            x[T].push(function () {
              p++, p === S.length && _();
            });
          return;
        }
        return (
          A && r.log(T, "Making detectable..."),
          l.markBusy(k, !0),
          o.makeDetectable({ debug: A, important: w }, k, function (N) {
            if ((A && r.log(T, "onElementDetectable"), ee.getState(N))) {
              l.markAsDetectable(N),
                l.markBusy(N, !1),
                o.addListener(N, a),
                g(L, N, f);
              var ne = ee.getState(N);
              if (ne && ne.startSize) {
                var Ae = N.offsetWidth,
                  Ie = N.offsetHeight;
                (ne.startSize.width !== Ae || ne.startSize.height !== Ie) &&
                  a(N);
              }
              x[T] &&
                Le(x[T], function (je) {
                  je();
                });
            } else
              A && r.log(T, "Element uninstalled before being detectable.");
            delete x[T], p++, p === S.length && _();
          })
        );
      }
      A && r.log(T, "Already detecable, adding listener."), g(L, k, f), p++;
    }),
      p === S.length && _();
  }
  function W(D) {
    if (!D) return r.error("At least one element is required.");
    if (It(D)) D = [D];
    else if (St(D)) D = At(D);
    else
      return r.error(
        "Invalid arguments. Must be a DOM element or a collection of DOM elements."
      );
    Le(D, function (S) {
      u.removeAllListeners(S), o.uninstall(S), ee.cleanState(S);
    });
  }
  function C(D) {
    o.initDocument && o.initDocument(D);
  }
  return {
    listenTo: j,
    removeListener: u.removeListener,
    removeAllListeners: u.removeAllListeners,
    uninstall: W,
    initDocument: C,
  };
};
function te(e, t, n) {
  var i = e[t];
  return i == null && n !== void 0 ? n : i;
}
const nn = Cn(fr),
  nt = (e) => {
    const {
        containerProps: t,
        closeButtonProps: n,
        onClose: i,
        advertiseLink: r,
      } = e,
      c = v.useCallback(
        (h) => {
          h.preventDefault(), i == null || i();
        },
        [i]
      );
    return s.jsxs(M, {
      display: "flex",
      alignItems: "center",
      ...t,
      children: [
        r !== void 0 &&
          s.jsx(ye, {
            pointerEvents: "auto",
            href: r,
            variant: "link",
            size: "sm",
            fontSize: "11px",
            fontWeight: "normal",
            opacity: 0.5,
            target: "_blank",
            rel: "noreferrer noopener",
            _hover: { opacity: 0.8 },
            _focus: { outline: "none" },
            children: s.jsxs(ze, {
              spacing: "3px",
              children: [s.jsx(J, { as: kn }), s.jsx(G, { children: "Ad" })],
            }),
          }),
        s.jsx(Ln, {
          pointerEvents: "auto",
          onClick: c,
          size: "sm",
          icon: s.jsx(J, { as: En }),
          "aria-label": "Hide",
          variant: "link",
          minW: "23px",
          py: "7px",
          opacity: 0.5,
          _hover: { opacity: 0.8 },
          _focus: {},
          ...n,
        }),
      ],
    });
  },
  it = v.memo((e) => {
    const { title: t } = e,
      n = Ee("accent.600", "accent.150");
    return s.jsx(G, {
      as: "span",
      fontWeight: "semibold",
      fontSize: { base: "sm", lg: "md" },
      noOfLines: 1,
      color: n,
      children: t,
    });
  }),
  ur = v.memo((e) => {
    const { onHide: t, ad: n, height: i } = e,
      { colorMode: r } = Ne(),
      c = n && n.url,
      h = c ? ye : M,
      d = v.useRef(null),
      [u, l] = v.useState();
    v.useEffect(() => {
      const w = d.current;
      let y;
      return (
        w &&
          ((y = nn({ strategy: "scroll" })),
          y.listenTo(w, (x) => {
            l(x.getBoundingClientRect().height);
          })),
        () => {
          w && y && y.uninstall(w);
        }
      );
    }, []);
    const o = u !== void 0 && u > 150,
      m = Ee("accent.600", "accent.150");
    return s.jsxs(M, {
      position: "relative",
      children: [
        s.jsxs(h, {
          _focus: { outline: "none" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          href: n == null ? void 0 : n.url,
          target: "_blank",
          rel: "sponsored noreferrer noopener",
          width: "100%",
          height: i,
          pt: "7px",
          pb: "8px",
          px: 2,
          pl: "10px",
          borderWidth: 1,
          borderRadius: "md",
          borderColor: $("gray.100", "blue.850", r),
          transition: "background-color 0.25s",
          cursor: c ? "pointer" : "default",
          _hover: {
            textDecoration: "none",
            bg: c ? $("gray.50", "blue.875", r) : "initial",
          },
          ref: d,
          children: [
            !(n && u !== void 0) && s.jsx(Oe, {}),
            n &&
              u !== void 0 &&
              s.jsxs(Ke, {
                alignItems: "stretch",
                flex: 1,
                spacing: o ? "10px" : "3px",
                children: [
                  (n.thumbnail || n.title) &&
                    s.jsxs(Dn, {
                      direction: o ? "column" : "row",
                      spacing: o ? 2 : 1,
                      alignItems: "center",
                      children: [
                        n.thumbnail &&
                          s.jsx(Be, {
                            src: n.thumbnail,
                            w: "20px",
                            h: "20px",
                            loading: "lazy",
                          }),
                        n.title && s.jsx(it, { title: n.title }),
                      ],
                    }),
                  !o &&
                    (n.description || n.callToAction) &&
                    s.jsxs(G, {
                      fontSize: "sm",
                      lineHeight: "15px",
                      noOfLines: 2,
                      children: [
                        n.description && s.jsx(ke, { children: n.description }),
                        n.callToAction &&
                          s.jsx(ke, {
                            paddingLeft: n.description ? 1 : 0,
                            color: m,
                            fontWeight: "semibold",
                            children: n.callToAction,
                          }),
                      ],
                    }),
                  o &&
                    (n.description || n.callToAction) &&
                    s.jsxs(Ke, {
                      spacing: 3,
                      lineHeight: "20px",
                      fontSize: "sm",
                      alignItems: "center",
                      children: [
                        n.description &&
                          s.jsx(ke, {
                            noOfLines: 4,
                            textAlign: "center",
                            children: n.description,
                          }),
                        n.callToAction &&
                          s.jsx(ke, {
                            color: m,
                            fontWeight: "semibold",
                            children: n.callToAction,
                          }),
                      ],
                    }),
                ],
              }),
          ],
        }),
        n &&
          s.jsx(nt, {
            advertiseLink: n.advertiseLink,
            containerProps: { pos: "absolute", top: 0, right: "3px" },
            onClose: t,
          }),
      ],
    });
  }),
  jt = 66,
  Tt = 25,
  mr = v.memo((e) => {
    const { ad: t, onHide: n, height: i } = e,
      { colorMode: r } = Ne(),
      c = t && t.url,
      h = c ? ye : M,
      d = $("white", "blue.950", r);
    return s.jsxs(M, {
      position: "relative",
      children: [
        s.jsxs(h, {
          _focus: { outline: "none" },
          href: t == null ? void 0 : t.url,
          target: "_blank",
          rel: "sponsored noreferrer noopener",
          height: i,
          pos: "relative",
          display: "flex",
          alignItems: "center",
          padding: 2,
          borderColor: $("gray.100", "blue.900", r),
          bg: d,
          px: { base: "10px", md: 3 },
          pt: { base: "6px", md: 3 },
          pb: { base: "6px", md: 3 },
          cursor: c ? "pointer" : "default",
          _hover: {
            textDecoration: "none",
            bg: c ? $("gray.50", "blue.900", r) : d,
          },
          borderWidth: 1,
          borderRadius: "md",
          children: [
            !t && s.jsx(Oe, {}),
            t &&
              s.jsxs(M, {
                display: "flex",
                flexDir: { base: "column", md: "row" },
                fontSize: { base: "sm", md: "md" },
                w: "100%",
                alignItems: { base: "flex-start", md: "center" },
                paddingRight: {
                  md: t.advertiseLink === void 0 ? `${Tt}px` : `${jt}px`,
                },
                children: [
                  s.jsxs(ze, {
                    align: { base: "flex-start", md: "center" },
                    spacing: 1,
                    flexShrink: 0,
                    children: [
                      t.thumbnail &&
                        s.jsx(Be, {
                          alt: "thumbnail",
                          src: t.thumbnail,
                          width: "20px",
                          height: "20px",
                          display: "flex",
                          alignSelf: "center",
                          loading: "lazy",
                        }),
                      t.title && s.jsx(it, { title: t.title }),
                    ],
                  }),
                  s.jsx(M, {
                    lineHeight: "15px",
                    fontSize: "sm",
                    display: "flex",
                    flexDirection: "row",
                    width: { base: "100%", md: "initial" },
                    children: s.jsxs(G, {
                      as: "span",
                      noOfLines: 2,
                      ml: { base: 0, md: t.thumbnail || t.title ? 2 : 0 },
                      children: [
                        t.description &&
                          s.jsx(G, { as: "span", children: t.description }),
                        t.callToAction &&
                          s.jsx(G, {
                            as: "span",
                            ml: { base: 1, lg: 2 },
                            color: $("accent.600", "accent.150", r),
                            fontWeight: "semibold",
                            children: t.callToAction,
                          }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
        t &&
          s.jsx(nt, {
            advertiseLink: t.advertiseLink,
            containerProps: {
              pointerEvents: "none",
              justifyContent: "flex-end",
              width: t.advertiseLink === void 0 ? `${Tt}px` : `${jt}px`,
              pos: "absolute",
              top: 0,
              bottom: { md: 0 },
              right: { base: 0, md: 2 },
            },
            closeButtonProps: { ml: { md: 2 } },
            onClose: n,
          }),
      ],
    });
  }),
  Rt = 66,
  Ut = 25,
  vr = v.memo((e) => {
    const { ad: t, onHide: n, height: i } = e,
      { colorMode: r } = Ne(),
      c = t && t.url,
      h = c ? ye : M,
      d = $("white", "gray.925", r);
    return s.jsxs(M, {
      position: "relative",
      children: [
        s.jsxs(h, {
          _focus: { outline: "none" },
          href: t == null ? void 0 : t.url,
          target: "_blank",
          rel: "sponsored noreferrer noopener",
          height: i,
          pos: "relative",
          display: "flex",
          alignItems: "center",
          padding: 2,
          borderColor: $("gray.100", "gray.875", r),
          bg: d,
          px: { base: "10px", md: 3 },
          pt: { base: "6px", md: 3 },
          pb: { base: "6px", md: 3 },
          cursor: c ? "pointer" : "default",
          _hover: {
            textDecoration: "none",
            bg: c ? $("gray.50", "gray.875", r) : d,
          },
          borderWidth: 1,
          borderRadius: "md",
          children: [
            !t && s.jsx(Oe, {}),
            t &&
              s.jsx(M, {
                display: "flex",
                flexDir: { base: "column", md: "row" },
                fontSize: { base: "sm", md: "md" },
                w: "100%",
                alignItems: { base: "flex-start", md: "center" },
                paddingRight: {
                  md: t.advertiseLink === void 0 ? `${Ut}px` : `${Rt}px`,
                },
                children: s.jsxs(ze, {
                  spacing: "2",
                  flexShrink: 0,
                  children: [
                    t.thumbnail &&
                      s.jsx(Be, {
                        src: t.thumbnail,
                        width: "48px",
                        minWidth: "48px",
                        height: "48px",
                        display: "flex",
                        alignSelf: "center",
                        loading: "lazy",
                      }),
                    s.jsxs(Ke, {
                      alignItems: "stretch",
                      spacing: "0",
                      children: [
                        t.title && s.jsx(it, { title: t.title }),
                        s.jsx(M, {
                          lineHeight: "15px",
                          fontSize: "sm",
                          display: "flex",
                          flexDirection: "row",
                          width: { base: "100%", md: "initial" },
                          children: s.jsxs(G, {
                            as: "span",
                            noOfLines: 2,
                            children: [
                              t.description &&
                                s.jsx(G, {
                                  as: "span",
                                  children: t.description,
                                }),
                              t.callToAction &&
                                s.jsx(G, {
                                  as: "span",
                                  ml: { base: 1, md: 2 },
                                  color: $("accent.600", "accent.150", r),
                                  fontWeight: "semibold",
                                  children: t.callToAction,
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
        t &&
          s.jsx(nt, {
            advertiseLink: t.advertiseLink,
            containerProps: {
              pointerEvents: "none",
              justifyContent: "flex-end",
              width: t.advertiseLink === void 0 ? `${Ut}px` : `${Rt}px`,
              pos: "absolute",
              top: 0,
              right: 0,
            },
            onClose: n,
          }),
      ],
    });
  }),
  Mt = v.memo((e) => {
    const { location: t, ad: n, onHide: i, height: r } = e;
    switch (t) {
      case "screener":
        return s.jsx(mr, { ad: n, onHide: i, height: r });
      case "pair":
        return s.jsx(ur, { ad: n, onHide: i, height: r });
      case "search":
        return s.jsx(vr, { ad: n, onHide: i, height: r });
    }
  });
function Wt(e, t) {
  return e.width === t.width && e.height === t.height;
}
const xr = K(
    "@dexscreener/data-access-ads//AdsWorkerAdsDataSource",
    qe,
    (e) => ({
      notifyViewed: (t) =>
        We(async () => {
          switch (t.provider) {
            case "direct": {
              await Promise.all(
                t.impressionURLs.map((n) =>
                  e.text(n, { credentials: "include" })
                )
              );
              break;
            }
            case "fallback": {
              t.impressionUrl &&
                (await e.text(t.impressionUrl, { credentials: "include" }));
              break;
            }
          }
        }),
    })
  ),
  we = K("@dexscreener/data-access-ads//DirectAdUnitsDataSource", () => {
    const e = {
      native: {
        home: {
          adKind: "native",
          provider: "direct",
          screen: "home",
          id: "native-ad-home",
        },
        search: {
          adKind: "native",
          provider: "direct",
          screen: "search",
          id: "native-ad-search",
        },
        multicharts: {
          adKind: "native",
          provider: "direct",
          screen: "multicharts",
          id: "native-ad-multicharts",
        },
        gainersLosers: {
          adKind: "native",
          provider: "direct",
          screen: "gainers-losers",
          id: "native-ad-gainers-losers",
        },
        newPairs: {
          adKind: "native",
          provider: "direct",
          screen: "new-pairs",
          id: "native-ad-new-pairs",
        },
        watchlist: {
          adKind: "native",
          provider: "direct",
          screen: "watchlist",
          id: "native-ad-watchlist",
        },
        screener: {
          adKind: "native",
          provider: "direct",
          screen: "screener",
          id: "native-ad-screener",
        },
      },
      display: {
        pair: {
          all: {
            "300x250": {
              adKind: "display",
              provider: "direct",
              screen: "pair",
              id: "direct-ad-300x250",
              size: { width: 300, height: 250 },
            },
            "320x100": {
              adKind: "display",
              provider: "direct",
              screen: "pair",
              id: "direct-ad-320x100",
              size: { width: 320, height: 100 },
            },
          },
        },
      },
    };
    return {
      map: e,
      nativeAdUnits: [
        e.native.home,
        e.native.search,
        e.native.multicharts,
        e.native.gainersLosers,
        e.native.newPairs,
        e.native.watchlist,
        e.native.screener,
      ],
      displayAdUnits: [
        e.display.pair.all["300x250"],
        e.display.pair.all["320x100"],
      ],
    };
  }),
  gr = K(we, (e) => [
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "bc-game-300x250",
      src: "https://static.dexscreen.com/bc-game/300x250-v1/index.html",
      url: "https://shortbly.com/i-4bokhke9u-n",
      impressionURLs: [
        "https://cfw.dexscreener.com/a/direct/pair/display/bc-game-300x250",
      ],
      startDate: new Date("2026-02-13"),
      endDate: new Date("2026-06-01"),
      weight: 1,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "bc-game-320x100",
      src: "https://static.dexscreen.com/bc-game/320x100-v1/index.html",
      url: "https://shortbly.com/i-4bokhke9u-n",
      impressionURLs: [
        "https://cfw.dexscreener.com/a/direct/pair/display/bc-game-320x100",
      ],
      startDate: new Date("2026-02-13"),
      endDate: new Date("2026-06-01"),
      weight: 1,
    },
  ]),
  br = K(we, (e) => [
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "instant-casino-3616397-300x250",
      src: "https://static.dexscreen.com/finixio/instant-casino-300x250-v5/300x250.html",
      url: "https://a1.adform.net/C/?bn=79892868",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79892868;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/instant-casino-300x250",
      ],
      startDate: new Date("2023-04-30"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "instant-casino-3616397-320x100",
      src: "https://static.dexscreen.com/finixio/instant-casino-320x100-v5/320x100.html",
      url: "https://a1.adform.net/C/?bn=79892864",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79892864;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/instant-casino-320x100",
      ],
      startDate: new Date("2023-04-30"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "bitcoin-hyper-3779689-300x250",
      src: "https://static.dexscreen.com/finixio/bitcoin-hyper-300x250-v2/300x250.html",
      url: "https://a1.adform.net/C/?bn=81160322",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=81160322;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/bitcoin-hyper-300x250",
      ],
      startDate: new Date("2025-06-05"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "bitcoin-hyper-3779689-320x100",
      src: "https://static.dexscreen.com/finixio/bitcoin-hyper-320x100-v2/320x100.html",
      url: "https://a1.adform.net/C/?bn=81160324",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=81160324;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/bitcoin-hyper-320x100",
      ],
      startDate: new Date("2025-06-05"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "coin-casino-3612999-300x250",
      src: "https://static.dexscreen.com/finixio/coin-casino-300x250-v2/300x250.html",
      url: "https://a1.adform.net/C/?bn=79683958",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79683958;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/coin-casino-300x250",
      ],
      startDate: new Date("2023-03-28"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "coin-casino-3612999-320x100",
      src: "https://static.dexscreen.com/finixio/coin-casino-320x100-v2/320x100.html",
      url: "https://a1.adform.net/C/?bn=79683955",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79683955;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/coin-casino-320x100",
      ],
      startDate: new Date("2023-03-28"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "pepe-node-3891388-300x250",
      src: "https://static.dexscreen.com/finixio/pepe-node-300x250-v2/300x250.html",
      url: "https://a1.adform.net/C/?bn=83120293",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=83120293;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/pepe-node-300x250",
      ],
      startDate: new Date("2023-03-28"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "pepe-node-3891388-320x100",
      src: "https://static.dexscreen.com/finixio/pepe-node-320x100-v2/320x100.html",
      url: "https://a1.adform.net/C/?bn=83120291",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=83120291;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/pepe-node-320x100",
      ],
      startDate: new Date("2023-03-28"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "maxi-doge-3858326-300x250",
      src: "https://static.dexscreen.com/finixio/maxi-doge-300x250-v2/300x250.html",
      url: "https://a1.adform.net/C/?bn=82377559",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=82377559;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/maxi-doge-300x250",
      ],
      startDate: new Date("2023-04-30"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "maxi-doge-3858326-320x100",
      src: "https://static.dexscreen.com/finixio/maxi-doge-320x100-v2/320x100.html",
      url: "https://a1.adform.net/C/?bn=82377563",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=82377563;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/maxi-doge-320x100",
      ],
      startDate: new Date("2023-04-30"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "lucky-block-3624738-300x250",
      src: "https://static.dexscreen.com/finixio/lucky-block-300x250-v6/300x250.html",
      url: "https://a1.adform.net/C/?bn=79893052",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79893052;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/lucky-block-300x250",
      ],
      startDate: new Date("2025-10-31"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "lucky-block-3624738-320x100",
      src: "https://static.dexscreen.com/finixio/lucky-block-320x100-v6/320x100.html",
      url: "https://a1.adform.net/C/?bn=79893054",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79893054;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/lucky-block-320x100",
      ],
      startDate: new Date("2025-10-31"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "best-wallet-3625392-300x250",
      src: "https://static.dexscreen.com/finixio/best-wallet-app-300x250/300x250.html",
      url: "https://a1.adform.net/C/?bn=78456412",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=78456412;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/best-wallet-300x250",
      ],
      startDate: new Date("2025-11-01"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "best-wallet-3625392-320x100",
      src: "https://static.dexscreen.com/finixio/best-wallet-app-320x100/320x100.html",
      url: "https://a1.adform.net/C/?bn=78456413",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=78456413;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/best-wallet-320x100",
      ],
      startDate: new Date("2025-11-01"),
      endDate: new Date("2025-12-03"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "coin-poker-4069875-300x250",
      src: "https://static.dexscreen.com/finixio/coin-poker-300x250-v10/300x250.html",
      url: "https://a1.adform.net/C/?bn=86903911",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=86903911;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/coin-poker-300x250",
      ],
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-06-01"),
      weight: 1,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "coin-poker-4069875-320x100",
      src: "https://static.dexscreen.com/finixio/coin-poker-320x100-v10/320x100.html",
      url: "https://a1.adform.net/C/?bn=86903912",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=86903912;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/pair/display/coin-poker-320x100",
      ],
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-06-01"),
      weight: 1,
    },
  ]),
  he = {
    kind: "native",
    provider: "direct",
    title: "Instant Casino",
    description:
      "Instant Casino & Sportsbook - Get 10% Cashback and Instant Crypto Withdrawals!",
    callToAction: "PLAY NOW",
    thumbnail: "https://static.dexscreen.com/finixio/instant-casino-logo.svg",
    advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
    startDate: new Date("2024-04-16T00:00:00.00Z"),
    endDate: new Date("2025-12-03T13:00:00.00Z"),
    weight: 0,
  },
  fe = {
    kind: "native",
    provider: "direct",
    title: "Bitcoin Hyper",
    description:
      "Bitcoin’s FIRST L2 for Fast, Low-Cost Transactions! Presale LIVE! - $28m + Raised!",
    callToAction: "BUY $HYPER",
    thumbnail: "https://static.dexscreen.com/finixio/bitcoin-hyper-logo.png",
    advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
    startDate: new Date("2025-06-05T00:00:00.00Z"),
    endDate: new Date("2025-12-03T13:00:00.00Z"),
    weight: 0,
  },
  ue = {
    kind: "native",
    provider: "direct",
    title: "CoinCasino",
    description:
      "The Ultimate Web3 Casino – Play with BTC, ETH, & More | No KYC, Fast Payouts, Massive Bonuses!",
    callToAction: "PLAY NOW",
    thumbnail: "https://static.dexscreen.com/finixio/coin-casino-logo.svg",
    advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
    startDate: new Date("2024-04-16T00:00:00.00Z"),
    endDate: new Date("2025-12-03T13:00:00.00Z"),
    weight: 0,
  },
  me = {
    kind: "native",
    provider: "direct",
    title: "PepeNode",
    description:
      "The Easiest Way to Earn Passive $PEPE? Whales Are Rushing Into the $PEPENODE Presale! $2 Mil+ Raised",
    callToAction: "Buy $PEPE",
    thumbnail: "https://static.dexscreen.com/finixio/pepe-node.png",
    advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
    startDate: new Date("2024-04-16T00:00:00.00Z"),
    endDate: new Date("2025-12-03T13:00:00.00Z"),
    weight: 0,
  },
  ve = {
    kind: "native",
    provider: "direct",
    title: "Maxi Doge",
    description:
      "Is This The Next Dogecoin? Whales Send $MAXI Presale To $4mil In Weeks!",
    callToAction: "BUY $MAXI",
    thumbnail: "https://static.dexscreen.com/finixio/maxi-doge-logo.webp",
    advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
    startDate: new Date("2024-04-16T00:00:00.00Z"),
    endDate: new Date("2025-12-03T13:00:00.00Z"),
    weight: 0,
  },
  xe = {
    kind: "native",
    provider: "direct",
    title: "LuckyBlock",
    description:
      "Lucky Block - Licensed Bitcoin Casino - 200% up to €25,000. Instant withdrawals + Free Spins",
    callToAction: "PLAY NOW",
    thumbnail: "https://static.dexscreen.com/finixio/lucky-block-logo.jpg",
    advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
    startDate: new Date("2025-11-01T00:00:00.00Z"),
    endDate: new Date("2025-12-03T13:00:00.00Z"),
    weight: 0,
  },
  ge = {
    kind: "native",
    provider: "direct",
    title: "Best Wallet",
    description: "Best Wallet - Buy, Store, and Manage Crypto - with No KYC!",
    callToAction: "DOWNLOAD NOW",
    thumbnail: "https://static.dexscreen.com/finixio/best-wallet-logo-v3.svg",
    advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
    startDate: new Date("2025-11-01T00:00:00.00Z"),
    endDate: new Date("2025-12-03T13:00:00.00Z"),
    weight: 0,
  },
  be = {
    kind: "native",
    provider: "direct",
    title: "CoinPoker",
    description:
      "Instant Withdrawal Crypto Casino & Poker - World Poker Masters, $25,000,000 Prize Pool",
    callToAction: "PLAY NOW",
    thumbnail: "https://static.dexscreen.com/finixio/coinpoker-logo.svg",
    advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
    startDate: new Date("2025-12-03T00:00:00.00Z"),
    endDate: new Date("2026-06-01T13:00:00.00Z"),
    weight: 100,
  },
  yr = K(we, (e) => [
    {
      ...he,
      adUnit: e.map.native.home,
      url: "https://a1.adform.net/C/?bn=79892865",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79892865;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/home/native/instant-casino",
      ],
    },
    {
      ...fe,
      adUnit: e.map.native.home,
      url: "https://a1.adform.net/C/?bn=81160321",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=81160321;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/home/native/bitcoin-hyper",
      ],
    },
    {
      ...ue,
      adUnit: e.map.native.home,
      url: "https://a1.adform.net/C/?bn=79683960",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79683960;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/home/native/coin-casino",
      ],
    },
    {
      ...me,
      adUnit: e.map.native.home,
      url: "https://a1.adform.net/C/?bn=83120290",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=83120290;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/home/native/pepe-node",
      ],
    },
    {
      ...ve,
      adUnit: e.map.native.home,
      url: "https://a1.adform.net/C/?bn=82438808",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=82438808;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/home/native/maxi-doge",
      ],
    },
    {
      ...xe,
      adUnit: e.map.native.home,
      url: "https://a1.adform.net/C/?bn=79893053",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79893053;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/home/native/lucky-block",
      ],
    },
    {
      ...ge,
      adUnit: e.map.native.home,
      url: "https://a1.adform.net/C/?bn=78456411",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=78456411;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/home/native/best-wallet",
      ],
    },
    {
      ...be,
      adUnit: e.map.native.home,
      url: "https://a1.adform.net/C/?bn=86903910",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=86903910;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/home/native/coin-poker",
      ],
    },
    {
      ...he,
      adUnit: e.map.native.multicharts,
      url: "https://a1.adform.net/C/?bn=79892867",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79892867;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/multicharts/native/instant-casino",
      ],
    },
    {
      ...fe,
      adUnit: e.map.native.multicharts,
      url: "https://a1.adform.net/C/?bn=81160323",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=81160323;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/multicharts/native/bitcoin-hyper",
      ],
    },
    {
      ...ue,
      adUnit: e.map.native.multicharts,
      url: "https://a1.adform.net/C/?bn=79683959",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79683959;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/multicharts/native/coin-casino",
      ],
    },
    {
      ...me,
      adUnit: e.map.native.multicharts,
      url: "https://a1.adform.net/C/?bn=83120292",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=83120292;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/multicharts/native/pepe-node",
      ],
    },
    {
      ...ve,
      adUnit: e.map.native.multicharts,
      url: "https://a1.adform.net/C/?bn=82438809",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=82438809;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/multicharts/native/maxi-doge",
      ],
    },
    {
      ...xe,
      adUnit: e.map.native.multicharts,
      url: "https://a1.adform.net/C/?bn=79893051",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79893051;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/multicharts/native/lucky-block",
      ],
    },
    {
      ...ge,
      adUnit: e.map.native.multicharts,
      url: "https://a1.adform.net/C/?bn=78456414",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=78456414;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/multicharts/native/best-wallet",
      ],
    },
    {
      ...be,
      adUnit: e.map.native.multicharts,
      url: "https://a1.adform.net/C/?bn=86903909",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=86903909;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/multicharts/native/coin-poker",
      ],
    },
    {
      ...he,
      adUnit: e.map.native.gainersLosers,
      url: "https://a1.adform.net/C/?bn=79892867",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79892867;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/gainers-losers/native/instant-casino",
      ],
    },
    {
      ...fe,
      adUnit: e.map.native.gainersLosers,
      url: "https://a1.adform.net/C/?bn=81160323",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=81160323;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/gainers-losers/native/bitcoin-hyper",
      ],
    },
    {
      ...ue,
      adUnit: e.map.native.gainersLosers,
      url: "https://a1.adform.net/C/?bn=79683959",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79683959;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/gainers-losers/native/coin-casino",
      ],
    },
    {
      ...me,
      adUnit: e.map.native.gainersLosers,
      url: "https://a1.adform.net/C/?bn=83120292",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=83120292;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/gainers-losers/native/pepe-node",
      ],
    },
    {
      ...ve,
      adUnit: e.map.native.gainersLosers,
      url: "https://a1.adform.net/C/?bn=82438809",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=82438809;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/gainers-losers/native/maxi-doge",
      ],
    },
    {
      ...xe,
      adUnit: e.map.native.gainersLosers,
      url: "https://a1.adform.net/C/?bn=79893051",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79893051;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/gainers-losers/native/lucky-block",
      ],
    },
    {
      ...ge,
      adUnit: e.map.native.gainersLosers,
      url: "https://a1.adform.net/C/?bn=78456414",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=78456414;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/gainers-losers/native/best-wallet",
      ],
    },
    {
      ...be,
      adUnit: e.map.native.gainersLosers,
      url: "https://a1.adform.net/C/?bn=86903909",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=86903909;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/gainers-losers/native/coin-poker",
      ],
    },
    {
      ...he,
      adUnit: e.map.native.newPairs,
      url: "https://a1.adform.net/C/?bn=79892867",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79892867;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/new-pairs/native/instant-casino",
      ],
    },
    {
      ...fe,
      adUnit: e.map.native.newPairs,
      url: "https://a1.adform.net/C/?bn=81160323",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=81160323;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/new-pairs/native/bitcoin-hyper",
      ],
    },
    {
      ...ue,
      adUnit: e.map.native.newPairs,
      url: "https://a1.adform.net/C/?bn=79683959",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79683959;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/new-pairs/native/coin-casino",
      ],
    },
    {
      ...me,
      adUnit: e.map.native.newPairs,
      url: "https://a1.adform.net/C/?bn=83120292",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=83120292;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/new-pairs/native/pepe-node",
      ],
    },
    {
      ...ve,
      adUnit: e.map.native.newPairs,
      url: "https://a1.adform.net/C/?bn=82438809",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=82438809;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/new-pairs/native/maxi-doge",
      ],
    },
    {
      ...xe,
      adUnit: e.map.native.newPairs,
      url: "https://a1.adform.net/C/?bn=79893051",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79893051;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/new-pairs/native/lucky-block",
      ],
    },
    {
      ...ge,
      adUnit: e.map.native.newPairs,
      url: "https://a1.adform.net/C/?bn=78456414",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=78456414;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/new-pairs/native/best-wallet",
      ],
    },
    {
      ...be,
      adUnit: e.map.native.newPairs,
      url: "https://a1.adform.net/C/?bn=86903909",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=86903909;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/new-pairs/native/coin-poker",
      ],
    },
    {
      ...he,
      adUnit: e.map.native.watchlist,
      url: "https://a1.adform.net/C/?bn=79892867",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79892867;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/watchlist/native/instant-casino",
      ],
    },
    {
      ...fe,
      adUnit: e.map.native.watchlist,
      url: "https://a1.adform.net/C/?bn=81160323",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=81160323;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/watchlist/native/bitcoin-hyper",
      ],
    },
    {
      ...ue,
      adUnit: e.map.native.watchlist,
      url: "https://a1.adform.net/C/?bn=79683959",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79683959;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/watchlist/native/coin-casino",
      ],
    },
    {
      ...me,
      adUnit: e.map.native.watchlist,
      url: "https://a1.adform.net/C/?bn=83120292",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=83120292;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/watchlist/native/pepe-node",
      ],
    },
    {
      ...ve,
      adUnit: e.map.native.watchlist,
      url: "https://a1.adform.net/C/?bn=82438809",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=82438809;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/watchlist/native/maxi-doge",
      ],
    },
    {
      ...xe,
      adUnit: e.map.native.watchlist,
      url: "https://a1.adform.net/C/?bn=79893051",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79893051;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/watchlist/native/lucky-block",
      ],
    },
    {
      ...ge,
      adUnit: e.map.native.watchlist,
      url: "https://a1.adform.net/C/?bn=78456414",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=78456414;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/watchlist/native/best-wallet",
      ],
    },
    {
      ...be,
      adUnit: e.map.native.watchlist,
      url: "https://a1.adform.net/C/?bn=86903909",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=86903909;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/watchlist/native/coin-poker",
      ],
    },
    {
      ...he,
      adUnit: e.map.native.search,
      url: "https://a1.adform.net/C/?bn=79892866",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79892866;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/search/native/instant-casino",
      ],
    },
    {
      ...fe,
      adUnit: e.map.native.search,
      url: "https://a1.adform.net/C/?bn=81160320",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=81160320;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/search/native/bitcoin-hyper",
      ],
    },
    {
      ...ue,
      adUnit: e.map.native.search,
      url: "https://a1.adform.net/C/?bn=79683957",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79683957;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/search/native/coin-casino",
      ],
    },
    {
      ...me,
      adUnit: e.map.native.search,
      url: "https://a1.adform.net/C/?bn=83120289",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=83120289;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/search/native/pepe-node",
      ],
    },
    {
      ...ve,
      adUnit: e.map.native.search,
      url: "https://a1.adform.net/C/?bn=82438807",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=82438807;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/search/native/maxi-doge",
      ],
    },
    {
      ...xe,
      adUnit: e.map.native.search,
      url: "https://a1.adform.net/C/?bn=79893050",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=79893050;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/search/native/lucky-block",
      ],
    },
    {
      ...ge,
      adUnit: e.map.native.search,
      url: "https://a1.adform.net/C/?bn=78456409",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=78456409;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/search/native/best-wallet",
      ],
    },
    {
      ...be,
      adUnit: e.map.native.search,
      url: "https://a1.adform.net/C/?bn=86903913",
      impressionURLs: [
        "https://a1.adform.net/adfserve/?CC=1&bn=86903913;1x1inv=1;srctype=3",
        "https://cfw.dexscreener.com/a/direct/search/native/coin-poker",
      ],
    },
  ]),
  wr = K(we, (e) => [
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["300x250"]],
      source: "iframe",
      id: "metawin-300x250",
      src: "https://static.dexscreen.com/metawin/300x250-v3/300x250.html",
      url: "https://metawin.com/t/dexscreener-3",
      impressionURLs: [
        "https://cfw.dexscreener.com/a/direct/pair/display/metawin-300x250",
      ],
      startDate: new Date("2026-03-19"),
      endDate: new Date("2026-04-14"),
      weight: 0,
    },
    {
      kind: "display",
      provider: "direct",
      adUnits: [e.map.display.pair.all["320x100"]],
      source: "iframe",
      id: "metawin-320x100",
      src: "https://static.dexscreen.com/metawin/320x100-v3/320x100.html",
      url: "https://metawin.com/t/dexscreener-3",
      impressionURLs: [
        "https://cfw.dexscreener.com/a/direct/pair/display/metawin-320x100",
      ],
      startDate: new Date("2026-03-19"),
      endDate: new Date("2026-04-14"),
      weight: 0,
    },
  ]),
  Cr = K(we, (e) => [
    {
      kind: "native",
      provider: "direct",
      title: "MetaWin",
      description:
        "$3 Million Cashdrop Is Coming! Play Now & Get 30% Bonus Free.",
      callToAction: "Join Here.",
      thumbnail: "https://dexscreener.com/a/direct/meta-win-logo.svg",
      url: "https://metawin.com/t/dexscreener-1?r=cashdrop",
      advertiseLink: "https://docs.dexscreener.com/contact-us/advertise",
      startDate: new Date("2023-10-30T13:00:00.00Z"),
      endDate: new Date("2026-06-01T13:00:00.00Z"),
      weight: 1,
      adUnit: e.map.native.screener,
      impressionURLs: [
        "https://cfw.dexscreener.com/a/direct/screener/native/metawin",
      ],
    },
  ]),
  kr = K(
    "@dexscreener/data-access-ads//DirectAdsDataSource",
    qe,
    we,
    gr,
    yr,
    br,
    Cr,
    wr,
    (e, t, n, i, r, c, h) => {
      const d = [...i, ...c],
        u = [...r, ...n, ...h];
      return {
        findNativeAdUnit: (l) =>
          t.nativeAdUnits.find((o) => o.screen === l.screen),
        findDisplayAdUnit: (l) => {
          const o = l.chainId;
          if (o) {
            const m = t.displayAdUnits.find(
              (w) =>
                l.screen === w.screen &&
                Wt(l.size, w.size) &&
                w.chainIds !== void 0 &&
                w.chainIds.includes(o)
            );
            if (m) return m;
          }
          return t.displayAdUnits.find(
            (m) =>
              l.screen === m.screen &&
              Wt(l.size, m.size) &&
              m.chainIds === void 0
          );
        },
        getNativeAd: (l) => {
          const o = new Date(),
            w = d
              .filter(
                (x) =>
                  ht(o, x.startDate) && yt(o, x.endDate) && x.adUnit.id === l.id
              )
              .flatMap((x) => Array(x.weight).fill(x)),
            y = w.at($e(w.length - 1, !1));
          return Se(y);
        },
        getDisplayAd: (l) => {
          const o = new Date(),
            w = u
              .filter(
                (x) =>
                  ht(o, x.startDate) &&
                  yt(o, x.endDate) &&
                  x.adUnits.includes(l)
              )
              .flatMap((x) => Array(x.weight).fill({ ...x, adUnit: l })),
            y = w[$e(w.length - 1)];
          return Se(y);
        },
        notifyViewed: (l) =>
          We(async ({ signal: o }) => {
            for (const m of l.impressionURLs)
              await e.text(m, { mode: "no-cors", signal: o });
          }),
      };
    }
  ),
  Lr = K("@dexscreener/data-access-ads//fallbackAds", () => [
    {
      kind: "native",
      provider: "fallback",
      description:
        "Advertise on DEX Screener and reach millions of crypto enthusiasts!",
      callToAction: "More info",
      url: "https://docs.dexscreener.com/contact-us/advertise",
    },
    {
      kind: "native",
      provider: "fallback",
      description: "Have you tried the DEX Screener app for iOS/Android yet?",
      callToAction: "Download now!",
      url: "https://docs.dexscreener.com/mobile-app",
    },
    {
      kind: "native",
      provider: "fallback",
      description: "Did you know DEX Screener has a free API?",
      callToAction: "More info",
      url: "https://docs.dexscreener.com/api/reference",
    },
  ]),
  Er = { adKind: "native", provider: "fallback" },
  Dr = K("@dexcreener/data-access-ads//fallbackAdsDataSource", Lr, (e) => ({
    getAd: () => Se(e[$e(0, e.length - 1, !1)] ?? e[0]),
    findAdUnit: () => Er,
  })),
  Sr = K(xr, Dr, zt, kr, (e, t, n, i) => {
    const r = new Sn([]),
      c = (o) => {
        switch (o.preferredAdKind) {
          case "native":
            switch (o.provider) {
              case "direct":
                return i.findNativeAdUnit(o) ?? t.findAdUnit();
            }
          case "display":
            switch (o.provider) {
              case "direct":
                return i.findDisplayAdUnit(o) ?? t.findAdUnit();
            }
        }
      },
      h = (o) => {
        switch (o.adKind) {
          case "native":
            switch (o.provider) {
              case "fallback":
                return t.getAd();
              case "direct":
                return i.getNativeAd(o);
            }
          case "display":
            switch (o.provider) {
              case "direct":
                return i.getDisplayAd(o);
            }
        }
      },
      d = () => t.getAd(),
      u = (o) => {
        switch ((n.track(Ar(o)), o.adKind)) {
          case "native":
            return d();
          case "display":
            return o.provider === "direct", d();
        }
      },
      l = (o) =>
        h(o).pipe(
          An(() => u(o)),
          Me((m) => (m ? Se(m) : u(o)))
        );
    return {
      getAd: (o) => {
        const m = c(o);
        return l(m);
      },
      getAdByAdUnit: l,
      getFallbackAd: u,
      hideAd: (o) => {
        const m = r.getValue();
        Ht(m, o) || (r.next([...m, o]), n.track(jr(o)));
      },
      notifyViewed: (o) => {
        switch ((n.track(Ir(o)), o.kind)) {
          case "native":
            switch (o.provider) {
              case "direct":
                return i.notifyViewed(o);
              case "fallback":
                return e.notifyViewed(o);
            }
          case "display":
            switch (o.provider) {
              case "direct":
                return i.notifyViewed(o);
            }
        }
      },
      notifyHidden: (o) => (n.track(Tr(o)), Se(void 0)),
      findAdUnit: c,
      isAdLocationHidden: (o) => ji(r, (m) => Ht(m, o)),
    };
  });
function Ht(e, t) {
  return e.some((n) => n.screen === t.screen);
}
function rn(e) {
  return `${e.size.width}x${e.size.height}`;
}
function Ar(e) {
  switch (e.adKind) {
    case "native":
      switch (e.provider) {
        case "direct":
          return {
            event: "adFallback",
            data: {
              adUnitKind: e.adKind,
              adUnitScreen: e.screen,
              adUnitID: e.id,
            },
          };
        case "fallback":
          return { event: "adFallback", data: { adUnitKind: e.adKind } };
      }
    case "display":
      return {
        event: "adFallback",
        data: {
          adUnitKind: e.adKind,
          adUnitScreen: e.screen,
          adUnitID: e.id.toString(),
          adUnitProvider: e.provider,
          adUnitSize: rn(e),
        },
      };
  }
}
function Ir(e) {
  switch (e.kind) {
    case "native":
      return { event: "adImpression", data: { adKind: e.kind } };
    case "display":
      return {
        event: "adImpression",
        data: {
          adKind: e.kind,
          adUnitKind: e.adUnit.adKind,
          adUnitScreen: e.adUnit.screen,
          adUnitID: e.adUnit.id.toString(),
          adUnitProvider: e.adUnit.provider,
          adUnitSize: rn(e.adUnit),
        },
      };
  }
}
function jr(e) {
  switch (e.preferredAdKind) {
    case "native":
      return {
        event: "hideAd",
        data: { kind: e.preferredAdKind, screen: e.screen },
      };
    case "display":
      return {
        event: "hideAd",
        data: {
          kind: e.preferredAdKind,
          screen: e.screen,
          provider: e.provider,
        },
      };
  }
}
function Tr(e) {
  switch (e.preferredAdKind) {
    case "native":
      return {
        event: "adHidden",
        data: { kind: e.preferredAdKind, screen: e.screen },
      };
    case "display":
      return {
        event: "adHidden",
        data: {
          kind: e.preferredAdKind,
          screen: e.screen,
          provider: e.provider,
        },
      };
  }
}
const es = (e) => {
    const [t, n] = Bt();
    return { ...e, refreshRequest: n, refresh: t };
  },
  [Rr, ts] = In("AdsProvider"),
  Ur = () => {
    const e = Rr(),
      t = Ge(Sr),
      n = Ye(),
      i = jn(
        v.useMemo(() => t.isAdLocationHidden(e.adLocation), [e.adLocation, t])
      ),
      r = v.useMemo(() => (e.enabled ? (n ? i : !1) : !0), [e.enabled, i, n]),
      [c, h] = v.useState(r ? void 0 : e.ad),
      d = v.useMemo(() => t.findAdUnit(e.adLocation), [e.adLocation, t]),
      [u, l] = v.useMemo(() => Bt(), []),
      { value: o, enable: m } = Tn(!1);
    ft(() => {
      if (r || !o) return;
      const C = e.ad ? ut : t.getAdByAdUnit(d),
        D = l.pipe(Me(() => t.getFallbackAd(d))),
        S = e.ad ? ut : e.refreshRequest.pipe(Me(() => t.getAdByAdUnit(d)));
      return Un(C, S, D).pipe(Mn(h));
    }, [d, e.ad, e.refresh, e.refreshRequest, t, l, r, o]);
    const w = v.useCallback(() => {
        t.hideAd(e.adLocation);
      }, [e.adLocation, t]),
      y = Rn((C) => C.pipe(Me(t.notifyViewed)), [t.notifyViewed]),
      x = Ue(e.adLocation),
      j = Ue(e.enabled),
      W = Ue(i);
    return (
      ft(() => {
        if (j.current && W.current && n) return t.notifyHidden(x.current);
      }, [x, t, W, j, n]),
      {
        isHidden: r,
        ad: c,
        hide: w,
        adUnit: d,
        requestFallback: u,
        show: m,
        isShown: o,
        notifyViewed: y,
      }
    );
  },
  ns = v.memo((e) => {
    const { variant: t, containerProps: n } = e,
      {
        show: i,
        hide: r,
        ad: c,
        isHidden: h,
        adUnit: d,
        requestFallback: u,
        notifyViewed: l,
      } = Ur(),
      o = v.useMemo(() => Mr(t, d), [t, d]),
      m = v.useMemo(() => Wr(d), [d]),
      w = v.useRef(null);
    if (
      (v.useEffect(() => {
        let x;
        return (
          w.current &&
            ((x = new IntersectionObserver((j) => {
              for (const W of j) if (W.isIntersecting) return i();
            })),
            x.observe(w.current)),
          () => {
            x && x.disconnect();
          }
        );
      }, [i]),
      v.useEffect(() => {
        c && c.kind === "native" && l(c);
      }, [c, l]),
      h)
    )
      return null;
    const y = () => {
      if (c)
        switch (c.kind) {
          case "native":
            return s.jsx(M, {
              width: "100%",
              children: s.jsx(Mt, { height: o, location: t, ad: c, onHide: r }),
            });
          case "display":
            switch (c.provider) {
              case "direct":
                return s.jsx(kt, {
                  onView: l,
                  ad: c,
                  width: m,
                  height: o,
                  adUnit: c.adUnit,
                  onFallbackRequest: u,
                  onHide: r,
                });
            }
        }
      else
        switch (d.adKind) {
          case "native":
            return s.jsx(M, {
              width: "100%",
              children: s.jsx(Mt, { height: o, location: t, ad: c, onHide: r }),
            });
          case "display":
            switch (d.provider) {
              case "direct":
                return s.jsx(kt, {
                  onView: l,
                  width: m,
                  height: o,
                  adUnit: d,
                  onFallbackRequest: u,
                  onHide: r,
                });
            }
        }
    };
    return s.jsx(M, {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      ...n,
      ref: w,
      children: y(),
    });
  });
function Mr(e, t) {
  switch (t.adKind) {
    case "native":
      switch (e) {
        case "search":
          return { base: "64px", md: "74px" };
        case "screener":
          return { base: "64px", md: "47px" };
        case "pair":
          return { base: "58px", lg: "71px" };
      }
    case "display":
      return `calc(${t.size.height}px + ${Xt}px)`;
  }
}
function Wr(e) {
  switch (e.adKind) {
    case "native":
      return "100%";
    case "display":
      return `${e.size.width}px`;
  }
}
const is = (e) =>
    v.createElement(
      "svg",
      {
        id: "eyes",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 128 128",
        style: { enableBackground: "new 0 0 128 128" },
        xmlSpace: "preserve",
        ...e,
      },
      v.createElement(
        "g",
        null,
        v.createElement(
          "g",
          null,
          v.createElement(
            "g",
            null,
            v.createElement(
              "g",
              null,
              v.createElement("path", {
                style: { fill: "#FAFAFA" },
                d: "M34.16,106.51C18.73,106.51,6.19,87.44,6.19,64c0-23.44,12.55-42.51,27.97-42.51 c15.42,0,27.97,19.07,27.97,42.51C62.13,87.44,49.58,106.51,34.16,106.51z",
              }),
              v.createElement("path", {
                style: { fill: "#B0BEC5" },
                d: "M34.16,23.49c6.63,0,12.98,4,17.87,11.27c5.22,7.75,8.1,18.14,8.1,29.24s-2.88,21.49-8.1,29.24 c-4.89,7.27-11.24,11.27-17.87,11.27s-12.98-4-17.87-11.27C11.06,85.49,8.19,75.1,8.19,64s2.88-21.49,8.1-29.24 C21.18,27.49,27.52,23.49,34.16,23.49 M34.16,19.49C17.61,19.49,4.19,39.42,4.19,64s13.42,44.51,29.97,44.51 S64.13,88.58,64.13,64S50.71,19.49,34.16,19.49L34.16,19.49z",
              })
            ),
            v.createElement(
              "linearGradient",
              {
                id: "emoji-u1f440-g1",
                gradientUnits: "userSpaceOnUse",
                x1: 22.5233,
                y1: 46.6759,
                x2: 22.5233,
                y2: 82.0828,
              },
              v.createElement("stop", {
                offset: 0,
                style: { stopColor: "#424242" },
              }),
              v.createElement("stop", {
                offset: 1,
                style: { stopColor: "#212121" },
              })
            ),
            v.createElement("path", {
              style: { fill: "url(#emoji-u1f440-g1)" },
              d: "M25.63,59.84c-2.7-2.54-2.1-7.58,1.36-11.26c0.18-0.19,0.36-0.37,0.55-0.54 c-1.54-0.87-3.23-1.36-5.01-1.36c-7.19,0-13.02,7.93-13.02,17.7s5.83,17.7,13.02,17.7s13.02-7.93,13.02-17.7 c0-1.75-0.19-3.45-0.54-5.05C31.77,61.66,27.9,61.97,25.63,59.84z",
            })
          )
        ),
        v.createElement(
          "g",
          null,
          v.createElement(
            "g",
            null,
            v.createElement("ellipse", {
              style: { fill: "#EEEEEE" },
              cx: 93.84,
              cy: 64,
              rx: 29.97,
              ry: 44.51,
            }),
            v.createElement(
              "g",
              null,
              v.createElement("path", {
                style: { fill: "#FAFAFA" },
                d: "M93.84,106.51c-15.42,0-27.97-19.07-27.97-42.51c0-23.44,12.55-42.51,27.97-42.51 c15.42,0,27.97,19.07,27.97,42.51C121.81,87.44,109.27,106.51,93.84,106.51z",
              }),
              v.createElement("path", {
                style: { fill: "#B0BEC5" },
                d: "M93.84,23.49c6.63,0,12.98,4,17.87,11.27c5.22,7.75,8.1,18.14,8.1,29.24s-2.88,21.49-8.1,29.24 c-4.89,7.27-11.24,11.27-17.87,11.27s-12.98-4-17.87-11.27c-5.22-7.75-8.1-18.14-8.1-29.24s2.88-21.49,8.1-29.24 C80.86,27.49,87.21,23.49,93.84,23.49 M93.84,19.49c-16.55,0-29.97,19.93-29.97,44.51s13.42,44.51,29.97,44.51 S123.81,88.58,123.81,64S110.39,19.49,93.84,19.49L93.84,19.49z",
              })
            ),
            v.createElement(
              "linearGradient",
              {
                id: "emoji-u1f440-g2",
                gradientUnits: "userSpaceOnUse",
                x1: 82.2093,
                y1: 46.6759,
                x2: 82.2093,
                y2: 82.0828,
              },
              v.createElement("stop", {
                offset: 0,
                style: { stopColor: "#424242" },
              }),
              v.createElement("stop", {
                offset: 1,
                style: { stopColor: "#212121" },
              })
            ),
            v.createElement("path", {
              style: { fill: "url(#emoji-u1f440-g2)" },
              d: "M85.31,59.84c-2.7-2.54-2.1-7.58,1.36-11.26c0.18-0.19,0.36-0.37,0.55-0.54 c-1.54-0.87-3.23-1.36-5.01-1.36c-7.19,0-13.02,7.93-13.02,17.7s5.83,17.7,13.02,17.7c7.19,0,13.02-7.93,13.02-17.7 c0-1.75-0.19-3.45-0.54-5.05C91.46,61.66,87.58,61.97,85.31,59.84z",
            })
          )
        )
      )
    ),
  rs = ({ boosts: e, prefix: t, ...n }) =>
    e === void 0 || e.active === 0
      ? null
      : s.jsxs(Nt, {
          fontWeight: "semibold",
          fontSize: "xs",
          color: "boost.accent.screener",
          gap: "1px",
          ...n,
          children: [
            s.jsx(J, { as: Wn, boxSize: "12px" }),
            " ",
            t ?? "",
            e.active,
          ],
        }),
  _t = { drag: 1, wheel: 1 },
  Hr = () => {
    const e = document.getElementsByTagName("iframe");
    for (const t of Array.from(e))
      t.style.pointerEvents &&
        t.setAttribute("data-ds-pointer-events", t.style.pointerEvents),
        (t.style.pointerEvents = "none");
  },
  _r = () => {
    const e = document.getElementsByTagName("iframe");
    for (const t of Array.from(e))
      (t.style.pointerEvents =
        t.getAttribute("data-ds-pointer-events") ?? "auto"),
        t.removeAttribute("data-ds-pointer-events");
  },
  ss = ({
    children: e,
    childRef: t,
    scrollSpeed: n,
    scrollShadeBackground: i,
    scrollShadeForceVisibility: r,
    trapMouseWheel: c,
    onOverflowChange: h,
  }) => {
    const d = v.useRef(null),
      u = v.useRef(null),
      [l, o] = v.useState(),
      [m, w] = v.useState(!1),
      y = v.useRef(void 0),
      [x] = Hn("(hover: hover) and (pointer: fine)"),
      j = ae((g) => {
        if (t != null && t.current) {
          const p = t.current.style.pointerEvents;
          g
            ? p !== "none" && (t.current.style.pointerEvents = "none")
            : p === "none" && (t.current.style.pointerEvents = "auto");
        }
      }),
      W = ae((g) => {
        if (!y.current) return;
        g.preventDefault(), g.stopPropagation();
        const p = u.current;
        if (!p) return;
        const L = g.pageX - p.offsetLeft,
          _ = L - y.current.startX;
        if (Math.abs(_) < 3) return;
        y.current.didSetIsDragging ||
          (j(!0), (y.current.didSetIsDragging = !0));
        const A = (L - y.current.startX) * (n ?? _t.drag);
        p.scrollLeft = y.current.scrollLeft - A;
      }),
      C = ae(() => {
        y.current &&
          (y.current.didSetIsDragging && j(!1), (y.current = void 0)),
          S();
      }),
      D = ae(() => {
        Hr(),
          (document.body.style.userSelect = "none"),
          document.addEventListener("mousemove", W),
          document.addEventListener("mouseup", C),
          document.addEventListener("mouseleave", C);
      }),
      S = ae(() => {
        _r(),
          (document.body.style.userSelect = "auto"),
          document.removeEventListener("mousemove", W),
          document.removeEventListener("mouseup", C),
          document.removeEventListener("mouseleave", C);
      }),
      f = ae((g) => {
        if (!t.current) return;
        const p = u.current;
        p &&
          ((g.target instanceof Node && !p.contains(g.target)) ||
            y.current ||
            ((y.current = {
              startX: g.pageX - p.offsetLeft,
              scrollLeft: p.scrollLeft,
              didSetIsDragging: !1,
            }),
            D()));
      }),
      a = ae((g) => {
        g.deltaX === 0 &&
          (c && g.stopPropagation(),
          g.preventDefault(),
          !y.current &&
            u.current &&
            (u.current.scrollLeft += g.deltaY * _t.wheel));
      });
    return (
      v.useEffect(() => {
        if (!t.current) return;
        const g = u.current;
        if (g) {
          if (g.scrollWidth === g.offsetWidth || !x) {
            m && (w(!1), h && h(!1));
            return;
          }
          m || (w(!0), h && h(!0));
        }
      }, [t, x, m, l, h]),
      v.useEffect(() => {
        if (!x) return;
        const g = d.current;
        let p;
        return (
          g &&
            ((p = nn({ strategy: "scroll" })),
            p.listenTo(g, (L) => {
              o(L.getBoundingClientRect().width);
            })),
          () => {
            g && p && p.uninstall(g);
          }
        );
      }, [x]),
      v.useEffect(() => {
        const g = u.current;
        return (
          g == null || g.addEventListener("wheel", a, { passive: !1 }),
          () => {
            g == null || g.removeEventListener("wheel", a);
          }
        );
      }, [a]),
      v.useEffect(() => () => S(), [S]),
      s.jsxs(M, {
        ref: d,
        display: "flex",
        width: "100%",
        overflowX: "hidden",
        children: [
          s.jsx(_n, {
            "data-scrollable": m,
            axes: "x",
            appearance: "hidden",
            ref: u,
            display: "flex",
            width: "100%",
            onMouseDown: x ? f : void 0,
            css: {
              '&[data-scrollable="true"]': { cursor: "move" },
              "& *": { "-webkit-user-drag": "none" },
            },
            children: e,
          }),
          s.jsx(M, {
            position: "relative",
            children: s.jsx(Ei, {
              background: i,
              scrollContainerRef: u,
              forceVisibility: r,
            }),
          }),
        ],
      })
    );
  },
  as = (e) =>
    s.jsx(M, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: Ee("gray.300", "blue.800"),
      color: Ee("gray.300", "blue.800"),
      borderRadius: "3px",
      fontSize: "sm",
      userSelect: "none",
      ...e,
      children: "?",
    }),
  os = (e) => (e.length > 10 ? e.slice(0, 5) + "..." + e.slice(-4) : e);
Pn.clone({ DECIMAL_PLACES: 50 });
const cs = (e, t) => {
    const n = mt(e),
      i = mt(t);
    return n.multipliedBy(100).dividedBy(i);
  },
  Pr = { strategy: "fixed", isLazy: !0, matchWidth: !0 },
  Xe = {
    fontWeight: "normal",
    iconSpacing: "4px",
    _focus: { boxShadow: "none" },
  },
  Pe = { boxSize: "20px" },
  zr = ({
    watchlistPair: e,
    containerProps: t,
    buttonProps: n,
    menuProps: i,
  }) => {
    const r = Ge(zt),
      c = Bn(),
      h = Ye(),
      u = Ge(ei).actions,
      [l, o] = v.useState(!1),
      { settings: m, setSettings: w } = Nn(),
      y = v.useCallback((f) => w(f), [w]),
      x = vt({
        value: On(),
        onPending: () => [],
        onFailure: () => [],
        onSuccess: (f) => f,
      }),
      j = Fn(),
      W = vt({
        value: j,
        onPending: () => [],
        onFailure: () => [],
        onSuccess: (f) => f,
      }),
      C = [];
    x.forEach((f) => {
      f.pairs.find((a) => a.chainId === e.chainId && a.pairId === e.pairId) &&
        C.push(f.id);
    });
    const D = Ot(),
      S = async (f) => {
        if (!e) return;
        const a = C.length === 0 || !C.includes(f) ? "add" : "remove";
        e.dexId &&
          r.track({
            event: "toggleWatchlist",
            data: {
              action: a,
              chainId: e.chainId,
              dexId: e.dexId,
              pairId: e.pairId,
              pair: `${e.baseTokenSymbol}/${e.quoteTokenSymbol}`,
            },
          }),
          o(!0);
        const g = W.find((p) => p.id === f);
        if (a === "add")
          try {
            if (g) await u.addPairToWatchlist(f, e);
            else {
              const p = x.find((L) => L.id === f && L.default);
              if (!p) throw new Error(`The list '${f}' does not exist!`);
              await u.createWatchlist({
                visibility: "private",
                schemaVersion: "1.0.0",
                name: p.name,
                default: p.default,
                pairs: [e],
              });
            }
          } catch (p) {
            c({
              status: "error",
              title: `Failed adding pair to watchlist: ${gt(p).message}`,
            });
          }
        else
          try {
            const p =
              g == null
                ? void 0
                : g.pairs.find(
                    (L) => L.pairId === e.pairId && L.chainId === e.chainId
                  );
            if (!p) {
              c({
                status: "error",
                title: "Failed removing pair from watchlist",
              });
              return;
            }
            await u.removePairFromWatchlist(f, p);
          } catch (p) {
            c({
              status: "error",
              title: `Failed removing pair from watchlist: ${gt(p).message}`,
            });
          }
        o(!1);
      };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(M, {
          ...t,
          children: s.jsxs(Vn, {
            ...Pr,
            ...i,
            children: [
              s.jsxs(Kn, {
                as: De,
                isDisabled: !h || l,
                w: "100%",
                leftIcon: s.jsx(J, { as: C.length === 0 ? He : xt, ...Pe }),
                sx: { span: { flex: "initial" } },
                ...Xe,
                ...n,
                children: [
                  s.jsx(ke, { children: "Watchlist" }),
                  C.length > 0 && s.jsx(Si, { label: C.length }),
                ],
              }),
              s.jsxs($n, {
                overflowX: "hidden",
                overflowY: "auto",
                maxH: { base: "max(20vh, 150px)", lg: "250px" },
                children: [
                  s.jsx(Gn, {
                    children: x.map((f) =>
                      s.jsx(
                        Xn,
                        {
                          onClick: () => S(f.id),
                          closeOnSelect: !0,
                          children: s.jsxs(G, {
                            as: "span",
                            display: "flex",
                            alignItems: "center",
                            fontWeight:
                              C != null && C.includes(f.id)
                                ? "semibold"
                                : void 0,
                            w: "100%",
                            children: [
                              s.jsx(J, {
                                as:
                                  C.length === 0 || !C.includes(f.id) ? He : xt,
                                mr: 2,
                                ...Pe,
                              }),
                              s.jsx(G, {
                                as: "span",
                                children: Zn(f.name, 30),
                              }),
                              (C == null ? void 0 : C.includes(f.id)) &&
                                s.jsx(J, { ml: "auto", as: qn }),
                            ],
                          }),
                        },
                        f.id
                      )
                    ),
                  }),
                  s.jsx(Yn, {}),
                  s.jsx(Jn, {
                    onOpenManager: D.onOpen,
                    watchlistOrder: m,
                    onWatchlistOrderChanged: y,
                  }),
                ],
              }),
            ],
          }),
        }),
        D.isOpen &&
          s.jsx(Qn, {
            onClose: D.onClose,
            watchlistOrder: m,
            onWatchlistOrderChanged: y,
          }),
      ],
    });
  },
  ds = ({
    watchlistPair: e,
    menuContainerProps: t,
    buttonProps: n,
    menuProps: i,
  }) => {
    const { isEmbed: r } = zn((d) => d.value),
      c = Ot(),
      h = Ye();
    return !h || !e
      ? s.jsx(De, {
          isDisabled: !h,
          leftIcon: s.jsx(J, { as: He, ...Pe }),
          ...Xe,
          ...n,
          children: "Watchlist",
        })
      : r
      ? s.jsxs(s.Fragment, {
          children: [
            s.jsx(De, {
              isDisabled: !h,
              onClick: c.onOpen,
              leftIcon: s.jsx(J, { as: He, ...Pe }),
              ...Xe,
              ...n,
              children: "Watchlist",
            }),
            c.isOpen && s.jsx(Di, { onClose: c.onClose }),
          ],
        })
      : s.jsx(zr, {
          watchlistPair: e,
          containerProps: t,
          buttonProps: n,
          menuProps: i,
        });
  },
  sn = 6e4,
  an = 60 * sn,
  Br = 24 * an,
  Nr = (e, t) => {
    if (e > t) return;
    const n = t - e;
    if (!(n > Br)) return n > an ? 6e4 : n > sn ? 5e3 : 200;
  },
  Ve = (e) => (e instanceof Date ? e.getTime() : e),
  Or = (e) => {
    var c;
    const t = ti(Date.now(), (c = ni().data.current) == null ? void 0 : c.time),
      [n, i] = v.useState(
        bt(e.timestamp, {
          now: e.baseDate ? Ve(e.baseDate) : t,
          singleUnit: e.singleUnit,
        })
      ),
      r = t ? Nr(Ve(e.timestamp), t) : void 0;
    return (
      v.useEffect(() => {
        const h = r
          ? setInterval(() => {
              i(
                bt(e.timestamp, {
                  now: e.baseDate ? Ve(e.baseDate) : Date.now(),
                  singleUnit: e.singleUnit,
                })
              );
            }, r)
          : -1;
        return () => clearInterval(h);
      }, [e.timestamp, e.singleUnit, e.baseDate, r]),
      { timeAgo: n ?? "0s" }
    );
  },
  ls = ({ timestamp: e, singleUnit: t, baseDate: n }) => {
    const { timeAgo: i } = Or({ timestamp: e, singleUnit: t, baseDate: n });
    return s.jsx("span", { children: i ?? "0s" });
  },
  ps = ({ chainId: e, baseTokenAddress: t, containerProps: n }) => {
    const { colorMode: i } = Ne();
    return ii({ chainId: e, tokenAddress: t })
      ? s.jsx(ri, {
          placement: "auto-start",
          label: "Recently advertised on DEX Screener!",
          "aria-label": "Recently advertised on DEX Screener!",
          children: s.jsxs(Nt, {
            color: $("accent.darkGreen", "accent.lightGreen", i),
            fontSize: "xs",
            fontWeight: "semibold",
            ...n,
            children: [s.jsx(J, { as: Ai, mr: "2px" }), "Ads"],
          }),
        })
      : null;
  };
function Fr(e) {
  return si({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M18.24.24H5.76C2.5789.24 0 2.8188 0 6v12c0 3.1811 2.5789 5.76 5.76 5.76h12.48c3.1812 0 5.76-2.5789 5.76-5.76V6C24 2.8188 21.4212.24 18.24.24m.8155 17.1662v.504c.2868-.0256.5458.1905.5439.479v.5688h-5.1437v-.5688c-.0019-.2885.2576-.5047.5443-.479v-.504c0-.22.1525-.402.358-.458l-.0095-4.3645c-.1589-1.7366-1.6402-3.0979-3.4435-3.0979-1.8038 0-3.2846 1.3613-3.4435 3.0979l-.0096 4.3578c.2276.0424.5318.2083.5395.4648v.504c.2863-.0256.5457.1905.5438.479v.5688H4.3915v-.5688c-.0019-.2885.2575-.5047.5438-.479v-.504c0-.2529.2011-.4548.4536-.4724v-7.895h-.4905L4.2898 7.008l2.6405-.0005V5.0419h9.9495v1.9656h2.8219l-.6091 2.0314h-.4901v7.8949c.2519.0177.453.2195.453.4724",
        },
        child: [],
      },
    ],
  })(e);
}
const hs = {
  telegram: ai,
  twitter: oi,
  x_post: ci,
  x_community: di,
  x_profile: li,
  discord: pi,
  tiktok: hi,
  facebook: fi,
  instagram: ui,
  reddit: mi,
  farcaster: Fr,
};
B({
  latestProfiles: z(Ft.extend({ boosts: Je.optional() })),
  moonshot: B({
    trending: z(oe),
    top: z(oe),
    rising: z(oe),
    new: z(oe),
    finalized: z(oe),
  }),
  boosts: B({
    top: z(
      B({
        chainId: R(),
        tokenAddress: R(),
        tokenSymbol: R(),
        totalAmount: Q(),
        tokenImageURL: R().optional(),
      })
    ),
    recent: z(
      B({
        chainId: R(),
        tokenAddress: R(),
        tokenSymbol: R(),
        totalAmount: Q(),
        amount: Q(),
        tokenImageURL: R().optional(),
      })
    ),
  }),
});
B({
  latestProfiles: z(Ft.extend({ boosts: Je.optional() })),
  moonit: B({ finalized: z(oe) }),
  boosts: B({
    top: z(
      B({
        chainId: R(),
        tokenAddress: R(),
        tokenSymbol: R(),
        totalAmount: Q(),
        tokenImageURL: R().optional(),
      })
    ),
    recent: z(
      B({
        chainId: R(),
        tokenAddress: R(),
        tokenSymbol: R(),
        totalAmount: Q(),
        amount: Q(),
        tokenImageURL: R().optional(),
      })
    ),
  }),
});
const Vr = B({
    latestProfiles: z(vi.extend({ boosts: Je.optional() })),
    moonit: B({ finalized: z(oe) }),
    boosts: B({
      top: z(
        B({
          chainId: R(),
          tokenAddress: R(),
          tokenSymbol: R(),
          totalAmount: Q(),
          tokenImageURL: R().optional(),
        })
      ),
      recent: z(
        B({
          chainId: R(),
          tokenAddress: R(),
          tokenSymbol: R(),
          totalAmount: Q(),
          amount: Q(),
          tokenImageURL: R().optional(),
        })
      ),
    }),
  }),
  Kr = gi(
    "ChdkZXhfc2VhcmNoL3NlcnZlci5wcm90bxIKZGV4X3NlYXJjaCI/ChNTZWFyY2hQYWlyc1Jlc3BvbnNlEigKBXBhaXJzGAEgAygLMhkuZGV4X3NjcmVlbmVyX3NjaGVtYS5QYWlyQi5aLGRleHNjcmVlbmVyL3BhY2thZ2VzL2dlbmVyYXRlZC9nby9kZXhfc2VhcmNoYghlZGl0aW9uc3DoBw",
    [bi]
  ),
  $r = xi(Kr, 0),
  fs = K({ env: wi(), httpClient: qe }, ({ env: e, httpClient: t }) => ({
    searchPairs: ({ query: n, filters: i }) => {
      const r = new URL(e.DS_DEX_SCREENER_SEARCH_PUBLIC_ORIGIN);
      return (
        (r.pathname = "/dex/search/v12/pairs"),
        r.searchParams.append("q", n),
        i != null && i.moonshot && r.searchParams.append("ms", "true"),
        We(({ signal: c }) =>
          t.arrayBuffer(r.toString(), { credentials: "include", signal: c })
        ).pipe(yi((c) => Ci($r, ki.Buffer.from(c)).pairs.map(Li)))
      );
    },
    spotlight: () => {
      const n = new URL(e.DS_DEX_SCREENER_SEARCH_PUBLIC_ORIGIN);
      return (
        (n.pathname = "/dex/search/spotlight/v9"),
        We(({ signal: i }) =>
          t.avro(n.toString(), Vr, { credentials: "include", signal: i })
        )
      );
    },
  }));
export {
  ts as A,
  Pi as C,
  rs as D,
  zi as G,
  ss as H,
  is as S,
  ls as T,
  as as U,
  ds as W,
  _e as a,
  ps as b,
  hs as c,
  fs as d,
  ns as e,
  Qr as f,
  wt as g,
  _i as h,
  Yr as i,
  Jr as j,
  cs as k,
  es as n,
  os as s,
  Rr as u,
};
