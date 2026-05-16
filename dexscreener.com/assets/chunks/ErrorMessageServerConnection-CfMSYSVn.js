import {
  a3 as n,
  ce as r,
  ej as w,
  ek as u,
  el as i,
  em as P,
  en as x,
  bY as L,
  eo as M,
  b_ as k,
  n as d,
  c2 as y,
  b$ as D,
  m as h,
  E as v,
  T as E,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
const c = {
    sm: { width: 64, height: 64 },
    md: { width: 128, height: 128 },
    lg: { width: 256, height: 256 },
    xl: { width: 800, height: 800 },
  },
  l = {
    sm: { width: 300, height: 100 },
    md: { width: 600, height: 200 },
    lg: { width: 900, height: 300 },
    xl: { width: 1500, height: 500 },
  },
  I = n(w, (e) => ({
    buildTokenMetadataURL: (s) => {
      const t = new URL(e);
      return (t.pathname = `/cms/tokens/metadata/${s}`), t.toString();
    },
    buildTokenImageURL: (s, t, a) => {
      const o = new URL(e);
      return (
        (o.pathname = `/cms/images/tokens/${s}/${t}`),
        (o.search = r.stringify(a)),
        o.toString()
      );
    },
    buildImageURL: (s, t) => {
      const a = new URL(e);
      return (
        (a.pathname = `/cms/images/${encodeURIComponent(s)}`),
        (a.search = r.stringify(t)),
        a.toString()
      );
    },
  })),
  f = (e) => e.c === "a" && !!e.launchpad,
  U = (e) => f(e) && u({ chainId: e.chainId, dexId: e.dexId }),
  N = (e) => f(e) && !u({ chainId: e.chainId, dexId: e.dexId }),
  j = (e) => {
    var s;
    return (s = e.launchpad.meta) == null ? void 0 : s.id;
  },
  z = (e) =>
    e.chainId === "solana" &&
    e.dexId === "raydium" &&
    (!e.labels || e.labels.length === 0),
  _ = (e) =>
    e.chainId === "solana" &&
    e.dexId === "raydium" &&
    e.labels !== void 0 &&
    i(e.labels, "clmm"),
  A = (e) =>
    e.chainId === "solana" &&
    e.dexId === "raydium" &&
    e.labels !== void 0 &&
    i(e.labels, "cpmm"),
  B = (e) =>
    e.chainId === "solana" &&
    e.dexId === "meteora" &&
    e.labels !== void 0 &&
    i(e.labels, "DYN"),
  Y = (e) =>
    e.chainId === "solana" &&
    e.dexId === "meteora" &&
    e.labels !== void 0 &&
    i(e.labels, "DYN2"),
  $ = (e) =>
    e.chainId === "solana" &&
    e.dexId === "meteora" &&
    e.labels !== void 0 &&
    i(e.labels, "DLMM"),
  q = (e) =>
    e.baseToken.decimals !== void 0 && e.quoteToken.decimals !== void 0,
  m = (e) => (typeof e == "string" ? c[e] : e),
  g = (e) => (typeof e == "string" ? l[e] : e),
  R = n(I, (e) => (s) => {
    const t = {
      width: s.size ? m(s.size).width : c.sm.width,
      height: s.size ? m(s.size).height : c.sm.height,
      fit: s.fit,
      quality: 95,
      format: s.format ?? "auto",
    };
    return e.buildImageURL(s.assetId, t);
  }),
  S = n(I, (e) => (s) => {
    const t = {
      width: s.size ? g(s.size).width : l.md.width,
      height: s.size ? g(s.size).height : l.md.height,
      fit: s.fit,
      quality: 95,
      format: s.format ?? "auto",
    };
    return e.buildImageURL(s.assetId, t);
  }),
  F = (e) => {
    if (e.pair.profile)
      return {
        chainId: e.pair.chainId,
        tokenAddress: e.pair.baseToken.address,
        size: e.size,
        cacheKey: e.pair.profile.imgKey,
      };
  },
  H = n(P, R, (e, s) => (t) => {
    if (t.cmsParams) return s(t.cmsParams);
    if (t.dsDataParams) return e(t.dsDataParams);
  }),
  K = n(x, S, (e, s) => (t) => {
    if (t.cmsParams) return s(t.cmsParams);
    if (t.dsDataParams) return e(t.dsDataParams);
  }),
  T = L(function (s, t) {
    const a = M("Badge", s),
      { className: o, ...b } = k(s);
    return d.jsx(y.span, {
      ref: t,
      className: D("chakra-badge", s.className),
      ...b,
      __css: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...a,
      },
    });
  });
T.displayName = "Badge";
const Z = (e) =>
    h.createElement(
      "svg",
      {
        viewBox: "0 0 540 620",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      h.createElement("path", {
        d: "M538.459 65.0059C539.485 58.6244 540.277 52.114 539.181 45.7441C532.853 8.9565 491.088 -12.1336 457.137 7.48956L18.5484 316.242C-16.5855 336.549 2.05682 390.523 42.2045 384.733L256.185 343.176C285.831 338.9 314.658 353.019 329.742 378.059C333.869 384.911 336.002 392.719 337.839 400.503L382.773 590.916C383.692 594.808 384.772 598.719 386.777 602.18C403.758 631.491 449.437 622.816 454.691 589.504C455.363 585.248 455.53 580.904 456.214 576.65L538.459 65.0059Z",
        fill: "#DFFF18",
      })
    ),
  O = ({ children: e, ...s }) =>
    d.jsxs(v, {
      ...s,
      emoji: "😢",
      title: "Failed connecting to server",
      children: [
        d.jsx(E, {
          children:
            "Please wait a few seconds or refresh this page to try again.",
        }),
        e,
      ],
    });
export {
  T as B,
  O as E,
  Z as S,
  N as a,
  F as b,
  H as c,
  f as d,
  K as e,
  B as f,
  j as g,
  q as h,
  U as i,
  Y as j,
  $ as k,
  z as l,
  _ as m,
  A as n,
  R as o,
};
