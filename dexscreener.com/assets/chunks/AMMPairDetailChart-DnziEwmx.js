var Ze = Object.defineProperty;
var et = (r, e, s) =>
  e in r
    ? Ze(r, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (r[e] = s);
var U = (r, e, s) => et(r, typeof e != "symbol" ? e + "" : e, s);
import {
  hr as tt,
  ab as rt,
  a9 as st,
  ac as Be,
  aa as it,
  hs as nt,
  ht as ot,
  hu as at,
  ee as N,
  hv as lt,
  hw as ct,
  hx as dt,
  a3 as E,
  de as L,
  hy as ut,
  ba as ne,
  dS as pt,
  bc as ie,
  bf as ht,
  dd as Le,
  hz as je,
  hA as mt,
  cQ as K,
  hB as yt,
  hC as St,
  hD as gt,
  bX as bt,
  n as b,
  c2 as z,
  m as c,
  hE as me,
  bY as ft,
  bZ as Pt,
  b_ as vt,
  c1 as Ct,
  b$ as wt,
  hF as kt,
  hG as Tt,
  dW as xt,
  gx as de,
  v as B,
  hH as It,
  hI as V,
  hJ as At,
  a0 as Bt,
  hK as Lt,
  a2 as T,
  dP as Dt,
  hL as Ge,
  dm as _t,
  az as pe,
  hM as qe,
  hN as Nt,
  b6 as Et,
  hO as Mt,
  hP as Rt,
  dT as Ut,
  cI as Y,
  cl as Vt,
  U as Ht,
  ah as Ot,
  eU as De,
  eQ as _e,
  fO as $t,
  b8 as Ft,
  b7 as Wt,
  eR as jt,
  dv as Gt,
  dK as se,
  Q as Ne,
  E as qt,
  cz as zt,
  B as Jt,
  hQ as Xt,
  hR as Qt,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
import { u as Yt } from "./conditional-wrap-DyHSuxr7.js";
import { b as Kt, c as Zt } from "./ErrorMessageServerConnection-CfMSYSVn.js";
import { a as er } from "./dex-log.service-BiStPYRF.js";
import { i as tr } from "./useWindowSize-BOT_4j9N.js";
import { d as rr } from "./dex-search.service-OCdkBXFP.js";
import { t as sr } from "./timeout-Bz-kKj_1.js";
function ir(r) {
  for (var e, s, t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  var i = (e = tt(t)) !== null && e !== void 0 ? e : rt,
    o = (s = t[0]) !== null && s !== void 0 ? s : null,
    a = t[1] || 1 / 0;
  return st(function (d, h) {
    var l = [],
      g = !1,
      v = function (p) {
        var C = p.buffer,
          P = p.subs;
        P.unsubscribe(), ot(l, p), h.next(C), g && f();
      },
      f = function () {
        if (l) {
          var p = new at();
          h.add(p);
          var C = [],
            P = { buffer: C, subs: p };
          l.push(P),
            Be(
              p,
              i,
              function () {
                return v(P);
              },
              r
            );
        }
      };
    o !== null && o >= 0 ? Be(h, i, f, o, !0) : (g = !0), f();
    var S = it(
      h,
      function (p) {
        var C,
          P,
          D = l.slice();
        try {
          for (var _ = nt(D), w = _.next(); !w.done; w = _.next()) {
            var H = w.value,
              M = H.buffer;
            M.push(p), a <= M.length && v(H);
          }
        } catch (O) {
          C = { error: O };
        } finally {
          try {
            w && !w.done && (P = _.return) && P.call(_);
          } finally {
            if (C) throw C.error;
          }
        }
      },
      function () {
        for (; l != null && l.length; ) h.next(l.shift().buffer);
        S == null || S.unsubscribe(), h.complete(), h.unsubscribe();
      },
      void 0,
      function () {
        return (l = null);
      }
    );
    d.subscribe(S);
  });
}
const ue = N.object({
    pairChartSettings: lt.optional(),
    globalChartSettings: ct.optional(),
    chartStudyTemplates: N.array(dt).optional(),
  }),
  Ee = "chart.lastUsedTimeBasedResolution",
  Me = "chartproperties.mainSeriesProperties",
  nr = E(ne, ut, (r, e) => ({
    actions: {
      async allChartStudyTemplates() {
        const s = await L(r.currentUser);
        return s ? e.findByUserId(s.id) : [];
      },
      async persistChartStudyTemplate(s) {
        const t = await L(r.ensuredCurrentUser),
          i = (await e.findByUserId(t.id)).find((o) => o.name === s.name);
        i
          ? await e.update({ id: i.id, userId: t.id, input: s })
          : await e.create(t.id, s);
      },
      async deleteChartStudyTemplate(s) {
        await e.delete(s);
      },
    },
  })),
  or = E(ne, yt, K, (r, e, s) => {
    const t = r.currentUser.pipe(
        pt((o) =>
          o
            ? new ht((a) =>
                e.findByUserIdSnapshot({
                  userId: o.id,
                  onResult: (d) => {
                    a.next(d);
                  },
                  onError: (d) => {
                    s.error({
                      event: {
                        id: "failedOnReadingGlobalChartSettingsStore",
                        data: { error: d, userId: o.id },
                      },
                    }),
                      a.error(d);
                  },
                })
              )
            : ie(void 0)
        ),
        Le
      ),
      n = new je(),
      i = mt(t, n).pipe(Le);
    return {
      all: i,
      actions: {
        async createGlobalChartSettings(o) {
          const a = await L(r.ensuredCurrentUser);
          await e.create(a.id, o);
        },
        async updateGlobalChartSettings(o, a) {
          const d = await L(r.ensuredCurrentUser);
          await e.update({ id: o, userId: d.id, input: a });
        },
        async persistGlobalChartSettings(o) {
          const a = await L(i),
            d = await L(r.ensuredCurrentUser);
          if (a) {
            const h = { ...a, settings: { ...a.settings, ...o.settings } };
            n.next(h),
              await this.updateGlobalChartSettings(a.id, h).catch((l) => {
                s.error({
                  event: {
                    id: "failedUpdatingGlobalChartSettings",
                    data: { error: l, userId: d.id },
                  },
                });
              });
          } else await this.createGlobalChartSettings(o);
        },
      },
    };
  }),
  ar = E(ne, St, (r, e) => {
    const s = async (n) => {
        const i = await L(r.ensuredCurrentUser);
        await e.create(i.id, n);
      },
      t = async (n, i) => {
        const o = await L(r.ensuredCurrentUser);
        await e.update({ pairChartSettings: n, input: i, userId: o.id });
      };
    return {
      actions: {
        async getPairChartSettings(n) {
          const i = await L(r.currentUser);
          if (!i) return;
          const o = await e.findByPairId({
            userId: i.id,
            pairId: n.pair.pairId,
            chainId: n.pair.chainId,
          });
          if (o) return o;
        },
        async persistPairChartSettings(n) {
          const i = await L(r.ensuredCurrentUser),
            o = await e.findByPairId({
              userId: i.id,
              pairId: n.pair.pairId,
              chainId: n.pair.chainId,
            });
          o ? await t(o, n) : await s(n);
        },
      },
    };
  }),
  ze = () => Intl.DateTimeFormat().resolvedOptions().timeZone,
  lr = gt,
  cr = [
    "volumePaneSize",
    "editorFontsList",
    "priceScaleSelectionStrategyName",
    "paneProperties.backgroundType",
    "paneProperties.background",
    "paneProperties.backgroundGradientStartColor",
    "paneProperties.backgroundGradientEndColor",
    "paneProperties.vertGridProperties.color",
    "paneProperties.vertGridProperties.style",
    "paneProperties.horzGridProperties.color",
    "paneProperties.horzGridProperties.style",
    "paneProperties.crossHairProperties.color",
    "paneProperties.crossHairProperties.style",
    "paneProperties.crossHairProperties.transparency",
    "paneProperties.crossHairProperties.width",
    "paneProperties.topMargin",
    "paneProperties.bottomMargin",
    "paneProperties.axisProperties.autoScale",
    "paneProperties.axisProperties.percentage",
    "paneProperties.axisProperties.indexedTo100",
    "paneProperties.axisProperties.log",
    "paneProperties.axisProperties.alignLabels",
    "paneProperties.axisProperties.isInverted",
    "paneProperties.legendProperties.showStudyArguments",
    "paneProperties.legendProperties.showStudyTitles",
    "paneProperties.legendProperties.showStudyValues",
    "paneProperties.legendProperties.showSeriesTitle",
    "paneProperties.legendProperties.showSeriesOHLC",
    "paneProperties.legendProperties.showLegend",
    "paneProperties.legendProperties.showBarChange",
    "paneProperties.legendProperties.showBackground",
    "paneProperties.legendProperties.backgroundTransparency",
    "scalesProperties.axisHighlightColor",
    "scalesProperties.axisLineToolLabelBackgroundColorActive",
    "scalesProperties.axisLineToolLabelBackgroundColorCommon",
    "scalesProperties.backgroundColor",
    "scalesProperties.lineColor",
    "scalesProperties.textColor",
    "scalesProperties.fontSize",
    "scalesProperties.scaleSeriesOnly",
    "scalesProperties.showSeriesLastValue",
    "scalesProperties.seriesLastValueMode",
    "scalesProperties.showSeriesPrevCloseValue",
    "scalesProperties.showStudyLastValue",
    "scalesProperties.showSymbolLabels",
    "scalesProperties.showStudyPlotLabels",
    "scalesProperties.showPriceScaleCrosshairLabel",
    "scalesProperties.showTimeScaleCrosshairLabel",
    "timeScale.rightOffset",
    "sessions.vertlines.sessBreaks.color",
    "sessions.vertlines.sessBreaks.style",
    "sessions.vertlines.sessBreaks.visible",
    "sessions.vertlines.sessBreaks.width",
    "mainSeriesProperties.style",
    "mainSeriesProperties.visible",
    "mainSeriesProperties.showPriceLine",
    "mainSeriesProperties.priceLineWidth",
    "mainSeriesProperties.priceLineColor",
    "mainSeriesProperties.baseLineColor",
    "mainSeriesProperties.showPrevClosePriceLine",
    "mainSeriesProperties.prevClosePriceLineWidth",
    "mainSeriesProperties.prevClosePriceLineColor",
    "mainSeriesProperties.showCountdown",
    "mainSeriesProperties.priceAxisProperties.autoScale",
    "mainSeriesProperties.priceAxisProperties.lockScale",
    "mainSeriesProperties.priceAxisProperties.percentage",
    "mainSeriesProperties.priceAxisProperties.indexedTo100",
    "mainSeriesProperties.priceAxisProperties.log",
    "mainSeriesProperties.priceAxisProperties.isInverted",
    "mainSeriesProperties.priceAxisProperties.alignLabels",
    "mainSeriesProperties.statusViewStyle.showExchange",
    "mainSeriesProperties.statusViewStyle.showInterval",
    "mainSeriesProperties.statusViewStyle.symbolTextSource",
    "symbolWatermarkProperties.color ",
    "symbolWatermarkProperties.visibility ",
    "mainSeriesProperties.highLowAvgPrice.highLowPriceLinesVisible",
    "mainSeriesProperties.highLowAvgPrice.highLowPriceLabelsVisible",
    "mainSeriesProperties.highLowAvgPrice.averageClosePriceLineVisible",
    "mainSeriesProperties.highLowAvgPrice.averageClosePriceLabelVisible",
    "mainSeriesProperties.candleStyle.upColor",
    "mainSeriesProperties.candleStyle.downColor",
    "mainSeriesProperties.candleStyle.drawWick",
    "mainSeriesProperties.candleStyle.drawBorder",
    "mainSeriesProperties.candleStyle.borderColor",
    "mainSeriesProperties.candleStyle.borderUpColor",
    "mainSeriesProperties.candleStyle.borderDownColor",
    "mainSeriesProperties.candleStyle.wickColor",
    "mainSeriesProperties.candleStyle.wickUpColor",
    "mainSeriesProperties.candleStyle.wickDownColor",
    "mainSeriesProperties.candleStyle.barColorsOnPrevClose",
    "mainSeriesProperties.candleStyle.drawBody",
    "mainSeriesProperties.hollowCandleStyle.upColor",
    "mainSeriesProperties.hollowCandleStyle.downColor",
    "mainSeriesProperties.hollowCandleStyle.drawWick",
    "mainSeriesProperties.hollowCandleStyle.drawBorder",
    "mainSeriesProperties.hollowCandleStyle.borderColor",
    "mainSeriesProperties.hollowCandleStyle.borderUpColor",
    "mainSeriesProperties.hollowCandleStyle.borderDownColor",
    "mainSeriesProperties.hollowCandleStyle.wickColor",
    "mainSeriesProperties.hollowCandleStyle.wickUpColor",
    "mainSeriesProperties.hollowCandleStyle.wickDownColor",
    "mainSeriesProperties.hollowCandleStyle.drawBody",
    "mainSeriesProperties.haStyle.upColor",
    "mainSeriesProperties.haStyle.downColor",
    "mainSeriesProperties.haStyle.drawWick",
    "mainSeriesProperties.haStyle.drawBorder",
    "mainSeriesProperties.haStyle.borderColor",
    "mainSeriesProperties.haStyle.borderUpColor",
    "mainSeriesProperties.haStyle.borderDownColor",
    "mainSeriesProperties.haStyle.wickColor",
    "mainSeriesProperties.haStyle.wickUpColor",
    "mainSeriesProperties.haStyle.wickDownColor",
    "mainSeriesProperties.haStyle.barColorsOnPrevClose",
    "mainSeriesProperties.haStyle.drawBody",
    "mainSeriesProperties.barStyle.upColor",
    "mainSeriesProperties.barStyle.downColor",
    "mainSeriesProperties.barStyle.barColorsOnPrevClose",
    "mainSeriesProperties.barStyle.dontDrawOpen",
    "mainSeriesProperties.barStyle.thinBars",
    "mainSeriesProperties.columnStyle.upColor",
    "mainSeriesProperties.columnStyle.downColor",
    "mainSeriesProperties.columnStyle.barColorsOnPrevClose",
    "mainSeriesProperties.columnStyle.priceSource",
    "mainSeriesProperties.lineStyle.color",
    "mainSeriesProperties.lineStyle.linestyle",
    "mainSeriesProperties.lineStyle.linewidth",
    "mainSeriesProperties.lineStyle.priceSource",
    "mainSeriesProperties.areaStyle.color1",
    "mainSeriesProperties.areaStyle.color2",
    "mainSeriesProperties.areaStyle.linecolor",
    "mainSeriesProperties.areaStyle.linestyle",
    "mainSeriesProperties.areaStyle.linewidth",
    "mainSeriesProperties.areaStyle.priceSource",
    "mainSeriesProperties.areaStyle.transparency",
    "mainSeriesProperties.baselineStyle.baselineColor",
    "mainSeriesProperties.baselineStyle.topFillColor1",
    "mainSeriesProperties.baselineStyle.topFillColor2",
    "mainSeriesProperties.baselineStyle.bottomFillColor1",
    "mainSeriesProperties.baselineStyle.bottomFillColor2",
    "mainSeriesProperties.baselineStyle.topLineColor",
    "mainSeriesProperties.baselineStyle.bottomLineColor",
    "mainSeriesProperties.baselineStyle.topLineWidth",
    "mainSeriesProperties.baselineStyle.bottomLineWidth",
    "mainSeriesProperties.baselineStyle.priceSource",
    "mainSeriesProperties.baselineStyle.transparency",
    "mainSeriesProperties.baselineStyle.baseLevelPercentage",
    "mainSeriesProperties.hiloStyle.color",
    "mainSeriesProperties.hiloStyle.showBorders",
    "mainSeriesProperties.hiloStyle.borderColor",
    "mainSeriesProperties.hiloStyle.showLabels",
    "mainSeriesProperties.hiloStyle.labelColor",
    "mainSeriesProperties.pbStyle.upColor",
    "mainSeriesProperties.pbStyle.downColor",
    "mainSeriesProperties.pbStyle.borderUpColor",
    "mainSeriesProperties.pbStyle.borderDownColor",
    "mainSeriesProperties.pbStyle.upColorProjection",
    "mainSeriesProperties.pbStyle.downColorProjection",
    "mainSeriesProperties.pbStyle.borderUpColorProjection",
    "mainSeriesProperties.pbStyle.borderDownColorProjection",
    "mainSeriesProperties.renkoStyle.upColor",
    "mainSeriesProperties.renkoStyle.downColor",
    "mainSeriesProperties.renkoStyle.borderUpColor",
    "mainSeriesProperties.renkoStyle.borderDownColor",
    "mainSeriesProperties.renkoStyle.upColorProjection",
    "mainSeriesProperties.renkoStyle.downColorProjection",
    "mainSeriesProperties.renkoStyle.borderUpColorProjection",
    "mainSeriesProperties.renkoStyle.borderDownColorProjection",
    "mainSeriesProperties.renkoStyle.wickUpColor",
    "mainSeriesProperties.renkoStyle.wickDownColor",
    "mainSeriesProperties.kagiStyle.upColor",
    "mainSeriesProperties.kagiStyle.downColor",
    "mainSeriesProperties.kagiStyle.upColorProjection",
    "mainSeriesProperties.kagiStyle.downColorProjection",
    "mainSeriesProperties.pnfStyle.upColor",
    "mainSeriesProperties.pnfStyle.downColor",
    "mainSeriesProperties.pnfStyle.upColorProjection",
    "mainSeriesProperties.pnfStyle.downColorProjection",
    "mainSeriesProperties.rangeStyle.upColor",
    "mainSeriesProperties.rangeStyle.downColor",
    "mainSeriesProperties.rangeStyle.thinBars",
    "mainSeriesProperties.rangeStyle.upColorProjection",
    "mainSeriesProperties.rangeStyle.downColorProjection",
  ],
  [us, dr] = bt({ name: "CheckboxGroupContext", strict: !1 });
function ur(r) {
  return b.jsx(z.svg, {
    width: "1.2em",
    viewBox: "0 0 12 10",
    style: {
      fill: "none",
      strokeWidth: 2,
      stroke: "currentColor",
      strokeDasharray: 16,
    },
    ...r,
    children: b.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" }),
  });
}
function pr(r) {
  return b.jsx(z.svg, {
    width: "1.2em",
    viewBox: "0 0 24 24",
    style: { stroke: "currentColor", strokeWidth: 4 },
    ...r,
    children: b.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
  });
}
function hr(r) {
  const { isIndeterminate: e, isChecked: s, ...t } = r,
    n = e ? pr : ur;
  return s || e
    ? b.jsx(z.div, {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        },
        children: b.jsx(n, { ...t }),
      })
    : null;
}
function mr(r) {
  const [e, s] = c.useState(r),
    [t, n] = c.useState(!1);
  return r !== e && (n(!0), s(r)), t;
}
const yr = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "top",
    userSelect: "none",
    flexShrink: 0,
  },
  Sr = {
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    position: "relative",
  },
  gr = me({
    from: { opacity: 0, strokeDashoffset: 16, transform: "scale(0.95)" },
    to: { opacity: 1, strokeDashoffset: 0, transform: "scale(1)" },
  }),
  br = me({ from: { opacity: 0 }, to: { opacity: 1 } }),
  fr = me({
    from: { transform: "scaleX(0.65)" },
    to: { transform: "scaleX(1)" },
  }),
  Pr = ft(function (e, s) {
    const t = dr(),
      n = { ...t, ...e },
      i = Pt("Checkbox", n),
      o = vt(e),
      {
        spacing: a = "0.5rem",
        className: d,
        children: h,
        iconColor: l,
        iconSize: g,
        icon: v = b.jsx(hr, {}),
        isChecked: f,
        isDisabled: S = t == null ? void 0 : t.isDisabled,
        onChange: p,
        inputProps: C,
        ...P
      } = o;
    let D = f;
    t != null && t.value && o.value && (D = t.value.includes(o.value));
    let _ = p;
    t != null && t.onChange && o.value && (_ = kt(t.onChange, p));
    const {
        state: w,
        getInputProps: H,
        getCheckboxProps: M,
        getLabelProps: O,
        getRootProps: m,
      } = Yt({ ...P, isDisabled: S, isChecked: D, onChange: _ }),
      R = mr(w.isChecked),
      I = c.useMemo(
        () => ({
          animation: R
            ? w.isIndeterminate
              ? `${br} 20ms linear, ${fr} 200ms linear`
              : `${gr} 200ms linear`
            : void 0,
          ...i.icon,
          ...Ct({ fontSize: g, color: l }),
        }),
        [l, g, R, w.isIndeterminate, i.icon]
      ),
      $ = c.cloneElement(v, {
        __css: I,
        isIndeterminate: w.isIndeterminate,
        isChecked: w.isChecked,
      });
    return b.jsxs(z.label, {
      __css: { ...Sr, ...i.container },
      className: wt("chakra-checkbox", d),
      ...m(),
      children: [
        b.jsx("input", { className: "chakra-checkbox__input", ...H(C, s) }),
        b.jsx(z.span, {
          __css: { ...yr, ...i.control },
          className: "chakra-checkbox__control",
          ...M(),
          children: $,
        }),
        h &&
          b.jsx(z.span, {
            className: "chakra-checkbox__label",
            ...O(),
            __css: { marginStart: a, ...i.label },
            children: h,
          }),
      ],
    });
  });
Pr.displayName = "Checkbox";
function vr() {
  var r = c.useRef(!0);
  return r.current ? ((r.current = !1), !0) : r.current;
}
var Cr = function (r, e) {
  var s = vr();
  c.useEffect(function () {
    if (!s) return r();
  }, e);
};
function wr(r, e) {
  e === void 0 && (e = 0);
  var s = c.useRef(!1),
    t = c.useRef(),
    n = c.useRef(r),
    i = c.useCallback(function () {
      return s.current;
    }, []),
    o = c.useCallback(
      function () {
        (s.current = !1),
          t.current && clearTimeout(t.current),
          (t.current = setTimeout(function () {
            (s.current = !0), n.current();
          }, e));
      },
      [e]
    ),
    a = c.useCallback(function () {
      (s.current = null), t.current && clearTimeout(t.current);
    }, []);
  return (
    c.useEffect(
      function () {
        n.current = r;
      },
      [r]
    ),
    c.useEffect(
      function () {
        return o(), a;
      },
      [e]
    ),
    [i, a, o]
  );
}
function kr(r, e, s) {
  s === void 0 && (s = []);
  var t = wr(r, e),
    n = t[0],
    i = t[1],
    o = t[2];
  return c.useEffect(o, s), [n, i];
}
var Tr = function (r, e) {
  var s = c.useRef(function () {});
  c.useEffect(function () {
    s.current = r;
  }),
    c.useEffect(
      function () {
        if (e !== null) {
          var t = setInterval(function () {
            return s.current();
          }, e || 0);
          return function () {
            return clearInterval(t);
          };
        }
      },
      [e]
    );
};
const xr = N.enum(["idle", "loading", "ready", "error"]),
  Ir = (r) => {
    const [e, s] = c.useState(r ? "loading" : "idle");
    return (
      c.useEffect(() => {
        if (!r) {
          s("idle");
          return;
        }
        let t = document.querySelector(`script[src='${r}']`);
        if (t) {
          const i = xr.safeParse(t.getAttribute("data-status"));
          i.success && s(i.data);
        } else {
          (t = document.createElement("script")),
            (t.src = r),
            (t.async = !0),
            t.setAttribute("data-status", "loading"),
            document.body.appendChild(t);
          const i = (o) => {
            t == null ||
              t.setAttribute(
                "data-status",
                o.type === "load" ? "ready" : "error"
              );
          };
          t.addEventListener("load", i), t.addEventListener("error", i);
        }
        const n = (i) => {
          s(i.type === "load" ? "ready" : "error");
        };
        return (
          t.addEventListener("load", n),
          t.addEventListener("error", n),
          () => {
            t &&
              (t.removeEventListener("load", n),
              t.removeEventListener("error", n));
          }
        );
      }, [r]),
      e
    );
  },
  Ar = 50,
  Br = E(er, K, (r, e) => {
    const s = new Tt(void 0);
    return {
      tradingHistoryResponse: s,
      fetchHistory: async (i) => {
        const o = s.getValue(),
          a = new Date().getTime();
        try {
          const d = await r.getLogs(i),
            h = d.logs;
          if (h && h.length > 0) {
            if (i.isFetchingPastTradingHistory && o != null && o.success)
              s.next({
                ...o,
                value: {
                  ...o.value,
                  tradingHistory: [...o.value.tradingHistory, ...h],
                  fetchedAtTimestamp: a,
                },
              });
            else {
              let l = [];
              !i.isUpdatingFilter &&
                o &&
                o.success &&
                o.value.tradingHistory &&
                l.push(...o.value.tradingHistory),
                (l = [...h, ...l]),
                i.currentListRange &&
                  i.currentListRange.startIndex <= Ar &&
                  (l = l.slice(0, 100)),
                l[0] &&
                  s.next({
                    success: !0,
                    value: {
                      tradingHistory: l,
                      latestBlockNumber: l[0].blockNumber,
                      fetchedAtTimestamp: a,
                      filteredResult: { byMaker: i.filters.maker !== null },
                    },
                  });
            }
            return;
          }
          (!o || !o.success || i.isUpdatingFilter) &&
            s.next({
              success: !0,
              value: {
                ...d,
                tradingHistory: [],
                latestBlockNumber: null,
                fetchedAtTimestamp: a,
                filteredResult: { byMaker: i.filters.maker !== null },
              },
            });
        } catch (d) {
          !xt(d) &&
            !tr(d) &&
            e.error({
              event: {
                id: "failedFetchingTradingHistory",
                data: {
                  error: d,
                  chainId: i.pair.chainId,
                  pairId: i.pair.pairAddress,
                  recent: !i.isFetchingPastTradingHistory,
                  beforeBlockNumber: i.beforeBlockNumber,
                  afterBlockNumber: i.afterBlockNumber,
                },
              },
            }),
            o != null && o.success && i.isUpdatingFilter
              ? s.next({
                  success: !0,
                  value: {
                    ...o.value,
                    tradingHistory: [],
                    fetchedAtTimestamp: a,
                    filteredResult: { byMaker: i.filters.maker !== null },
                  },
                })
              : (!o || !o.success) && s.next({ success: !1, error: "failed" });
        }
      },
      clearHistory: () => s.next(void 0),
    };
  }),
  q = (r, e, s) => {
    const t = new Date(r);
    switch (e) {
      case "second":
        t.setMilliseconds(0),
          t.setSeconds(t.getSeconds() - (t.getSeconds() % s));
        break;
      case "minute":
        t.setSeconds(0, 0), t.setMinutes(t.getMinutes() - (t.getMinutes() % s));
        break;
      case "hour":
        t.setMinutes(0, 0, 0), t.setHours(t.getHours() - (t.getHours() % s));
        break;
      case "day":
        t.setHours(0, 0, 0, 0), t.setDate(t.getDate() - (t.getDate() % s));
        break;
      case "week": {
        const n = t.getDay(),
          i = (n === 0 ? 7 : n) - 1;
        t.setDate(t.getDate() - i), t.setHours(0, 0, 0, 0);
        break;
      }
      case "month":
        if (s !== 1)
          throw new Error("Month truncation only supports amount of 1");
        t.setHours(0, 0, 0, 0), t.setDate(1);
        break;
      default:
        throw new Error("Unsupported interval");
    }
    return Math.floor(t.getTime() / 1e3);
  },
  Lr = (r, e) => {
    if (e.endsWith("S")) {
      const s = de(e.split("S")[0] ?? e);
      return q(r, "second", s);
    } else if (e.endsWith("M")) {
      const s = de(e.split("M")[0] ?? e);
      return q(r, "month", s);
    } else if (e.endsWith("W")) {
      const s = de(e.split("W")[0] ?? e);
      return q(r, "week", s);
    } else {
      const s = Number.parseInt(e);
      if (s < 60) return q(r, "minute", s);
      if (s >= 60 && s <= 720) {
        const t = Math.floor(s / 60);
        return q(r, "hour", t);
      } else return q(r, "day", 1);
    }
  },
  Dr = () => ({
    buildSearchTicker: (r, e) => {
      var t;
      let s = `${e.chainId}+${e.pairAddress}+${
        (t = e.quoteToken) == null ? void 0 : t.address
      }`;
      return (
        e.c && ((s = `${s}+${e.c}`), e.c === "a" && (s = `${s}+${e.a}`)),
        `${r} (${s})`
      );
    },
    getComparableSymbolDetail: (r) => {
      const e = /\((.*\+.*)\)/,
        s = r.match(e);
      if (!s || !s[1]) return;
      const [t, n, i, o, a] = s[1].split("+");
      if (!(!t || !n || !i))
        return {
          context: o == null ? void 0 : o.toLowerCase(),
          ammId: a == null ? void 0 : a.toLowerCase(),
          chainId: t.toLowerCase(),
          pairId: n,
          quoteTokenAddress: i,
        };
    },
  });
class _r {
  constructor(e) {
    U(this, "params");
    U(this, "barCursor", {});
    U(this, "isTriggeringSubscribers", !1);
    U(this, "symbolManagement", Dr());
    U(this, "subscribeBarsCallbacks", []);
    U(this, "makerHistory", []);
    U(this, "getResolution", (e) =>
      e.indexOf("S") != -1 ? e : e === "1D" ? 1440 : e
    );
    U(this, "getSymbolInfoDescription", (e) =>
      this.params.chartType === "marketCap"
        ? `${e} (Market Cap) on ${this.params.dexName}`
        : `${e} on ${this.params.dexName}`
    );
    (this.params = e), (this.makerHistory = []);
  }
  async fetchDexChartBars(e) {
    var n;
    const s = await this.params.dexChartAmmService.getBars({
        chartType: this.params.chartType,
        context: e.context,
        ammId: e.ammId,
        chainId: e.chainId,
        paidId: e.pairAddress,
        quoteTokenAddress: e.quoteTokenAddress,
        beforeBlockNumber: e.beforeBlockNumber,
        afterBlockNumber: e.afterBlockNumber,
        resolution: this.getResolution(e.resolution).toString(),
        countBack: e.countBack,
        usdOnly: e.usdOnly,
        isInverted: e.isInverted,
        circulatingSupply: this.params.circulatingSupply ?? void 0,
      }),
      t = [];
    return (
      (n = s.bars) == null ||
        n.forEach((i) => {
          if (i.closeUsd && e.usdOnly) {
            const o = new B(i.closeUsd).toNumber();
            t.push({
              time: i.timestamp,
              open: i.openUsd ? new B(i.openUsd).toNumber() : o,
              high: i.highUsd ? new B(i.highUsd).toNumber() : o,
              low: i.lowUsd ? new B(i.lowUsd).toNumber() : o,
              close: i.closeUsd ? new B(i.closeUsd).toNumber() : o,
              volume: i.volumeUsd ? new B(i.volumeUsd).toNumber() : void 0,
              minBlockNumber: i.minBlockNumber,
              maxBlockNumber: i.maxBlockNumber,
            });
          } else
            e.usdOnly ||
              t.push({
                time: i.timestamp,
                open: new B(i.open).toNumber(),
                high: new B(i.high).toNumber(),
                low: new B(i.low).toNumber(),
                close: new B(i.close).toNumber(),
                volume: i.volumeUsd ? new B(i.volumeUsd).toNumber() : void 0,
                minBlockNumber: i.minBlockNumber,
                maxBlockNumber: i.maxBlockNumber,
              });
        }),
      t
    );
  }
  getFetchBarParameters(e) {
    const s = this.symbolManagement.getComparableSymbolDetail(e);
    return (
      s || {
        context: this.params.context,
        ammId: this.params.ammId,
        chainId: this.params.chainId,
        pairId: this.params.pairAddress,
        quoteTokenAddress: this.params.quoteTokenAddress,
      }
    );
  }
  setBarCursor(e) {
    var n, i;
    const s = e.oldest
        ? { ...e.oldest }
        : (n = this.barCursor[e.resolution]) == null
        ? void 0
        : n.oldest,
      t = e.newest
        ? { ...e.newest }
        : (i = this.barCursor[e.resolution]) == null
        ? void 0
        : i.newest;
    this.barCursor[e.resolution] = { oldest: s, newest: t };
  }
  setTradingHistoryMarks(e) {
    this.makerHistory = e;
  }
  getDataFeed() {
    return {
      onReady: (e) => {
        setTimeout(() => {
          e({
            supported_resolutions: this.params.supportedResolutions,
            supports_marks: !0,
          });
        }, 0);
      },
      searchSymbols: async (e, s, t, n) => {
        const o = (await this.params.searchPair(e)).map((a) => {
          const d = `${a.baseToken.symbol}/${a.quoteToken.symbol}`,
            h = this.symbolManagement.buildSearchTicker(d, a);
          return {
            symbol: d,
            full_name: d,
            description: `${a.chainId} / ${a.dexId}`,
            exchange: "dexscreener.com",
            ticker: h,
            type: "",
          };
        });
        n(o);
      },
      resolveSymbol: (e, s) => {
        setTimeout(() => {
          var i;
          let t = 100,
            n =
              ((i = this.params.latestPrice.split(".")[1]) == null
                ? void 0
                : i.length) ?? 0;
          n < 4 && (n = 4),
            n > 2 && (t = 10 ** Math.min(n, 16)),
            s({
              name: e,
              description: this.getSymbolInfoDescription(e),
              exchange: "dexscreener.com",
              minmov: 1,
              pricescale: t,
              session: "24x7",
              timezone: ze(),
              supported_resolutions: this.params.supportedResolutions,
              has_seconds: !0,
              has_intraday: !0,
              has_daily: !0,
              visible_plots_set: "ohlcv",
              logo_urls: [this.params.symbolLogo],
            });
        }, 0);
      },
      getBars: async (e, s, t, n, i) => {
        var v, f;
        const {
            context: o,
            ammId: a,
            chainId: d,
            pairId: h,
            quoteTokenAddress: l,
          } = this.getFetchBarParameters(e.name),
          g = await It({
            callback: () => {
              var S, p;
              return this.fetchDexChartBars({
                context: o,
                ammId: a,
                chainId: d,
                pairAddress: h,
                quoteTokenAddress: l,
                beforeBlockNumber:
                  (p = (S = this.barCursor[s]) == null ? void 0 : S.oldest) ==
                  null
                    ? void 0
                    : p.minBlockNumber,
                resolution: s,
                countBack: t.countBack,
                usdOnly: this.params.useUsdPrice,
                isInverted: this.params.isInverted,
              });
            },
            retrySettings: { tries: 3, delayInMs: 1e3, timeoutInMs: 3e4 },
          }).catch(() => {
            i("Failed fetching bars");
          });
        if (g)
          if (g.length > 0) {
            const S = (v = this.barCursor[s]) == null ? void 0 : v.newest,
              p = g[g.length - 1];
            p &&
              (!S || S.maxBlockNumber < p.maxBlockNumber) &&
              (this.setBarCursor({ resolution: s, newest: p }),
              this.params.onLatestPrice &&
                this.params.onLatestPrice({
                  value: p.close,
                  usd: this.params.useUsdPrice,
                }));
            const C = (f = this.barCursor[s]) == null ? void 0 : f.oldest,
              P = g[0];
            P &&
              (!C || C.minBlockNumber > P.minBlockNumber) &&
              this.setBarCursor({ resolution: s, oldest: P }),
              n(g);
          } else n([], { noData: !0 });
      },
      getMarks: (e, s, t, n, i) => {
        const o = this.makerHistory.map((a) => ({
          id: a.id,
          time: Lr(a.timestamp, i),
          color: { border: a.color, background: a.color },
          text: a.text,
          label: a.label,
          labelFontColor: "white",
          minSize: 25,
        }));
        n(o);
      },
      subscribeBars: (e, s, t, n) => {
        this.subscribeBarsCallbacks.push({
          subscriberId: n,
          symbolName: e.name,
          resolution: s,
          callback: t,
        });
      },
      unsubscribeBars: (e) => {
        const s = this.subscribeBarsCallbacks.findIndex(
          (n) => n.subscriberId === e
        );
        if (s === -1) return;
        const [t] = this.subscribeBarsCallbacks.splice(s, 1);
        t && (delete this.barCursor[t.resolution], (t.callback = null));
      },
    };
  }
  triggerSubscribers() {
    Object.keys(this.barCursor).length !== 0 &&
      (this.isTriggeringSubscribers ||
        ((this.isTriggeringSubscribers = !0),
        Promise.all(
          this.subscribeBarsCallbacks.map(
            async ({ symbolName: e, resolution: s, callback: t }) => {
              var g;
              if (!t) return;
              const n = (g = this.barCursor[s]) == null ? void 0 : g.newest;
              if (!n) return;
              const {
                  context: i,
                  ammId: o,
                  chainId: a,
                  pairId: d,
                  quoteTokenAddress: h,
                } = this.getFetchBarParameters(e),
                l = await this.fetchDexChartBars({
                  context: i,
                  ammId: o,
                  chainId: a,
                  pairAddress: d,
                  quoteTokenAddress: h,
                  afterBlockNumber: n.minBlockNumber - 1,
                  resolution: s,
                  countBack: 2,
                  usdOnly: this.params.useUsdPrice,
                  isInverted: this.params.isInverted,
                }).catch(() => {});
              if (l && l.length !== 0)
                try {
                  l.forEach((v) => {
                    var S;
                    const f =
                      (S = this.barCursor[s]) == null ? void 0 : S.newest;
                    if (f) {
                      if (v.minBlockNumber === f.minBlockNumber) {
                        const p = { ...v, open: f.open };
                        this.setBarCursor({ resolution: s, newest: p }), t(p);
                      } else if (v.minBlockNumber > f.minBlockNumber) {
                        const p = { ...v, open: f.close };
                        this.setBarCursor({ resolution: s, newest: p }), t(p);
                      }
                    }
                  }),
                    this.params.onLatestPrice &&
                      this.params.onLatestPrice({
                        value: n.close,
                        usd: this.params.useUsdPrice,
                      });
                } catch {}
            }
          )
        ).then(() => {
          this.isTriggeringSubscribers = !1;
        })));
  }
}
const Nr = (r) => {
    let e = [
        "iframe_loading_compatibility_mode",
        "study_templates",
        "items_favoriting",
        "datasource_copypaste",
        "seconds_resolution",
      ],
      s = [
        "auto_enable_symbol_labels",
        "header_symbol_search",
        "save_shortcut",
        "header_saveload",
        "header_fullscreen_button",
        "symbol_search_hot_key",
        "popup_hints",
        "legend_inplace_edit",
      ];
    const t = r.hideTradingViewLogo
        ? { image: "/transparent-pixel.png" }
        : void 0,
      n = r.theme ?? "dark",
      i = {
        library_path: "/tv/v27.001/",
        logo: t,
        theme: n,
        locale: "en",
        autosize: !0,
        symbol_search_request_delay: 500,
        container: r.containerId,
        auto_save_delay: 2,
        timezone: ze(),
        interval: r.defaultInterval ?? V[15],
        favorites: {
          intervals: r.favoriteIntervals,
          chartTypes: ["Line", "Candles"],
        },
        overrides: {
          ...r.widgetOverrides,
          "scalesProperties.fontSize": 14,
          "scalesProperties.showStudyLastValue": !1,
          "scalesProperties.showSymbolLabels": !1,
          "mainSeriesProperties.style": r.chartStyle ?? 1,
        },
        datafeed: r.dataFeed.getDataFeed(),
        symbol: r.symbol,
        saved_data: r.savedData,
        save_load_adapter: r.saveLoadAdapter,
        custom_formatters: {
          priceFormatterFactory: () => ({
            format: (o) => (o === null ? o : At({ price: o })),
          }),
        },
      };
    return (
      r.settingsAdapter && (i.settings_adapter = r.settingsAdapter),
      r.symbolLogo && e.push("show_symbol_logos"),
      r.enabledFeatures &&
        (e.push(...r.enabledFeatures),
        (s = s.filter((o) => {
          var a;
          return !((a = r.enabledFeatures) != null && a.includes(o));
        }))),
      r.disabledFeatures &&
        (s.push(...r.disabledFeatures),
        (e = e.filter((o) => {
          var a;
          return !((a = r.disabledFeatures) != null && a.includes(o));
        }))),
      (i.enabled_features = e),
      (i.disabled_features = s),
      i
    );
  },
  Er = (r) => {
    const [e, s] = c.useState("visible"),
      [t, n] = c.useState(!0);
    return (
      c.useEffect(() => {
        const i = () => {
          document.visibilityState === "hidden"
            ? s("hidden")
            : document.visibilityState === "visible" && (s("visible"), n(!0));
        };
        return (
          document.addEventListener("visibilitychange", i),
          () => document.removeEventListener("visibilitychange", i)
        );
      }, [r == null ? void 0 : r.hiddenDebounceInMs]),
      kr(
        () => {
          e === "hidden" && n(!1);
        },
        r == null ? void 0 : r.hiddenDebounceInMs,
        [r == null ? void 0 : r.hiddenDebounceInMs, e]
      ),
      t
    );
  },
  Mr = Bt(),
  Re = {
    production: { visibleDefault: 4500, visibleFast: 3e3, invisible: 1e4 },
    development: { visibleDefault: 3e3, visibleFast: 1e3, invisible: 5e3 },
  },
  Ue = (r) => {
    const e = r.isDev ? Re.development : Re.production;
    return r.isPageVisible
      ? r.m5Txns >= 20
        ? { type: "visibleFast", rate: e.visibleFast }
        : { type: "visibleDefault", rate: e.visibleDefault }
      : { type: "invisible", rate: e.invisible };
  },
  Ve = (r) => {
    console.log(
      new Date(),
      `${r.source}.polling.type=${r.chartAndTxnsPollingRate.type} ${r.source}.polling.rate=${r.chartAndTxnsPollingRate.rate}`
    );
  },
  Rr = (r) => {
    const s = T(K),
      t = T(Mr),
      n = c.useMemo(
        () =>
          !!(
            typeof window < "u" &&
            window.location.search.includes("debugPolling=1")
          ),
        []
      ),
      i = Er({ hiddenDebounceInMs: 3e4 }),
      [o, a] = c.useState(() => {
        const l = Ue({
          isPageVisible: i,
          m5Txns: r.pair.txns.m5.buys + r.pair.txns.m5.sells,
          isDev: !1,
        });
        return n && Ve({ source: r.source, chartAndTxnsPollingRate: l }), l;
      });
    Cr(() => {
      const l = Ue({
        isPageVisible: i,
        m5Txns: r.pair.txns.m5.buys + r.pair.txns.m5.sells,
        isDev: !1,
      });
      (l.type !== o.type || l.rate !== o.rate) &&
        (n && Ve({ source: r.source, chartAndTxnsPollingRate: l }), a(l));
    }, [n, o.type, o.rate, i, r.pair.txns.m5.buys, r.pair.txns.m5.sells, !1]);
    const d = c.useMemo(
        () =>
          o.type === "visibleFast" &&
          t.DS_WEB_LOG_TXNS_LAG_ENABLED.includes(
            `${r.pair.chainId}:${r.pair.dexId}`
          ),
        [t.DS_WEB_LOG_TXNS_LAG_ENABLED, o.type, r.pair.chainId, r.pair.dexId]
      ),
      h = c.useCallback(
        (l) => {
          d &&
            Lt({
              threshold: t.DS_WEB_LOG_TXNS_LAG_THRESHOLD,
              callback: () => {
                s.info({
                  event: {
                    id: "txnsLag",
                    data: {
                      chainId: l.chainId,
                      dexId: l.dexId,
                      lagInMs: Date.now() - l.latestBlockTimestamp,
                    },
                  },
                });
              },
            });
        },
        [t.DS_WEB_LOG_TXNS_LAG_THRESHOLD, s, d]
      );
    return {
      chartAndTxnsPollingRate: o,
      isPageVisible: i,
      debugPolling: n,
      logTxnsLag: h,
    };
  },
  Ur = E(K, Ge, (r, e) => ({
    async persistPairChartSettings(s) {
      var n;
      const t = { type: "savePairChartSettings", input: s };
      (n = e.ReactNativeWebView) == null || n.postMessage(JSON.stringify(t));
    },
    async getPairChartSettings(s) {
      const t = ue.safeParse(e.chartSettingsWebView);
      if (!t.success) {
        r.error({
          event: {
            id: "failedParsingChartSettingsWebView",
            data: {
              entityType: "pairChartSettings",
              error: t.error,
              pair: s.pair,
            },
          },
        });
        return;
      }
      return t.data.pairChartSettings;
    },
    getGlobalChartSettings() {
      const s = new Dt(),
        t = ue.safeParse(e.chartSettingsWebView);
      return (
        t.success
          ? s.next(t.data.globalChartSettings)
          : (r.error({
              event: {
                id: "failedParsingChartSettingsWebView",
                data: { entityType: "globalChartSettings", error: t.error },
              },
            }),
            s.next(void 0)),
        s
      );
    },
    async persistGlobalChartSettings(s) {
      var n;
      const t = { type: "saveGlobalChartSettings", input: s };
      (n = e.ReactNativeWebView) == null || n.postMessage(JSON.stringify(t));
    },
    async getStudyTemplates() {
      const s = ue.safeParse(e.chartSettingsWebView);
      return s.success
        ? s.data.chartStudyTemplates ?? []
        : (r.error({
            event: {
              id: "failedParsingChartSettingsWebView",
              data: { entityType: "chartStudyTemplates", error: s.error },
            },
          }),
          []);
    },
    async persistStudyTemplate(s) {
      var n;
      const t = { type: "saveChartStudyTemplate", input: s };
      (n = e.ReactNativeWebView) == null || n.postMessage(JSON.stringify(t));
    },
    async deleteStudyTemplate(s) {
      var n;
      const t = { type: "deleteChartStudyTemplate", id: s };
      (n = e.ReactNativeWebView) == null || n.postMessage(JSON.stringify(t));
    },
  })),
  Vr = E(ar, or, nr, (r, e, s) => ({
    async persistPairChartSettings(t) {
      await r.actions.persistPairChartSettings(t);
    },
    async getPairChartSettings(t) {
      return r.actions.getPairChartSettings(t);
    },
    getGlobalChartSettings() {
      return e.all;
    },
    async persistGlobalChartSettings(t) {
      await e.actions.persistGlobalChartSettings(t);
    },
    async getStudyTemplates() {
      return s.actions.allChartStudyTemplates();
    },
    async persistStudyTemplate(t) {
      await s.actions.persistChartStudyTemplate(t);
    },
    async deleteStudyTemplate(t) {
      await s.actions.deleteChartStudyTemplate(t);
    },
  })),
  ye = E(Ge, Vr, Ur, (r, e, s) => (r.chartSettingsWebView ? s : e)),
  Hr = N.object({
    version: N.number(),
    panes: N.array(N.unknown()),
    symbol: N.string().optional(),
    interval: N.string().optional(),
  }),
  He = (r) => {
    const e = Hr.parse(JSON.parse(r));
    return e.symbol && delete e.symbol, JSON.stringify(e);
  },
  Or = E(ye, _t, (r, e) => ({
    saveLineToolsAndGroups: async () => {},
    loadLineToolsAndGroups: async () => null,
    getAllCharts: async () => [],
    removeChart: async () => {},
    saveChart: async () => "",
    getChartContent: async () => "",
    getChartTemplateContent: async () => ({}),
    getAllChartTemplates: async () => [],
    saveChartTemplate: async () => {},
    removeChartTemplate: async () => {},
    getDrawingTemplates: async () => [],
    loadDrawingTemplate: async () => "",
    removeDrawingTemplate: async () => {},
    saveDrawingTemplate: async () => {},
    getAllStudyTemplates: async () => {
      try {
        return (await r.getStudyTemplates()).map((t) => ({
          name: t.name,
          content: "",
        }));
      } catch {
        return e.track({ event: "chart:studyTemplates:error" }), [];
      }
    },
    getStudyTemplateContent: async (s) => {
      e.track({ event: "chart:studyTemplates:apply" });
      try {
        const t = await r.getStudyTemplates();
        if (!t) return "";
        const n = t.find((i) => i.name === s.name);
        return n ? He(n.content) : "";
      } catch {
        return e.track({ event: "chart:studyTemplates:error" }), "";
      }
    },
    saveStudyTemplate: async (s) => {
      e.track({ event: "chart:studyTemplates:save" });
      try {
        await r.persistStudyTemplate({
          schemaVersion: "1.0.0",
          name: s.name,
          content: He(s.content),
        });
      } catch {
        e.track({ event: "chart:studyTemplates:error" });
      }
    },
    removeStudyTemplate: async (s) => {
      e.track({ event: "chart:studyTemplates:delete" });
      try {
        const t = await r.getStudyTemplates();
        if (!t) return;
        const n = t.find((i) => i.name === s.name);
        if (!n) return;
        await r.deleteStudyTemplate(n.id);
      } catch {
        e.track({ event: "chart:studyTemplates:error" });
      }
    },
  })),
  Oe = [V["1S"], V[1], V[5], V[15], V[60], V[240], V["1D"]],
  $r = (r) => (r && r === "a" ? Oe : Oe.filter((e) => e.indexOf("S") === -1)),
  Fr = (r) => (r && r === "a" ? pe : pe.filter((e) => e.indexOf("S") === -1)),
  Wr = (r) => pe.find((e) => e == r),
  jr = (r) =>
    typeof r == "boolean" || typeof r == "number" || typeof r == "string",
  he = (r, e = null, s = {}) => {
    for (const t in r) {
      const n = e ? `${e}.${t}` : t,
        i = r[t];
      qe(i) ? he(i, n, s) : jr(i) && (s[n] = i);
    }
    return s;
  },
  Gr = (r) => {
    let e = {};
    if (!r) return e;
    const s = r.settings;
    if (s.chartproperties) {
      const t = JSON.parse(s.chartproperties);
      qe(t) && (e = he(t));
    }
    if (s[Me]) {
      const t = he({ mainSeriesProperties: JSON.parse(s[Me]) });
      e = { ...e, ...t };
    }
    for (const t of Object.keys(e)) cr.includes(t) || delete e[t];
    return e;
  },
  $e = new je(),
  qr = (r) => {
    if (r && r.settings[Ee]) return Wr(r.settings[Ee]);
  },
  zr = E(ye, (r) => async (e) => {
    let s = !1;
    const t = setTimeout(() => {
      (s = !0), clearTimeout(t);
    }, 2e3);
    return {
      subscription: $e
        .pipe(
          ir(1e3),
          Nt((i) => i.length > 0),
          Et((i) => i.reduce((o, a) => ({ ...o, ...a }), {}))
        )
        .subscribe(async (i) => {
          await r.persistGlobalChartSettings({
            schemaVersion: "1.0.0",
            settings: i,
          });
        }),
      widgetOverrides: Gr(e),
      widgetLastUsedTime: qr(e),
      settingsAdapter: {
        initialSettings: e == null ? void 0 : e.settings,
        setValue: async (i, o) => {
          s && $e.next({ [i]: o });
        },
        removeValue: () => {},
      },
    };
  }),
  Jr = (r) => ("txnType" in r ? r.txnType : r.logType),
  Xr = (r) => {
    if ("volumeUsd" in r) return r.volumeUsd;
  },
  Qr = { buy: "B", sell: "S", add: "A", remove: "R" },
  Fe = { buy: "Bought", sell: "Sold", add: "Added", remove: "Removed" },
  Yr = (r) => {
    const e = Jr(r.tradingHistory),
      s = Xr(r.tradingHistory);
    let t = "";
    if (s) {
      const n = Mt({ number: s, significantDigits: 2, addCommas: !0 });
      t = `${Fe[e]} $${n} on ${Rt(
        r.tradingHistory.blockTimestamp,
        "MMM d yy hh:mm a"
      )}`;
    }
    return (
      (e === "add" || e === "remove") &&
        (t = `${Fe[e]} ${r.tradingHistory.amount0} ${r.pairBaseTokenSymbol}`),
      {
        id: `${r.tradingHistory.txnHash}:${r.tradingHistory.logIndex}`,
        text: t,
        color: e === "remove" || e === "sell" ? "#e53e3e" : "#38a169",
        label: Qr[e],
        timestamp: r.tradingHistory.blockTimestamp,
      }
    );
  },
  Kr = E(rr, (r) => async (e) => {
    if (e.trim().length < 2) return [];
    const s = Ut(r.searchPairs({ query: e }));
    return await L(s);
  }),
  x = {
    default: {
      color: "var(--tv-color-toolbar-button-text,#d1d4dc)",
      fontWeight: "400",
    },
    active: {
      color: "var(--tv-color-toolbar-button-text-active,#2962ff)",
      fontWeight: "600",
    },
  },
  Zr = (r) => {
    var t;
    const e = `color:${x.active.color};font-weight:${x.active.fontWeight}`,
      s = (t = r.tvWidgetRef.current) == null ? void 0 : t.createButton();
    s &&
      (r.chartType === "price"
        ? ((s.style.color = "var(--tv-color-toolbar-button-text,#d1d4dc)"),
          r.isDisabled ||
            (s.addEventListener("click", () =>
              r.onChartTypeChange("marketCap")
            ),
            s.setAttribute("title", "Switch to market cap chart")),
          (s.innerHTML = `<span style="${e}">Price</span> / MCap`))
        : ((s.style.color = "var(--tv-color-toolbar-button-text,#d1d4dc)"),
          r.isDisabled ||
            (s.addEventListener("click", () => r.onChartTypeChange("price")),
            s.setAttribute("title", "Switch to price chart")),
          (s.innerHTML = `Price / <span style="${e}">MCap</span>`)),
      r.isDisabled
        ? ((s.style.opacity = "0.4"), (s.style.cursor = "not-allowed"))
        : (s.style.cursor = "pointer"));
  },
  es = (r) => {
    var t;
    if (!r.pair.priceUsd) return;
    const e = `color:${x.active.color};font-weight:${x.active.fontWeight}`,
      s = (t = r.tvWidgetRef.current) == null ? void 0 : t.createButton();
    if (s) {
      (s.style.color = x.default.color),
        (s.style.fontWeight = x.default.fontWeight),
        (s.style.cursor = "pointer");
      const n = Y(
        r.isInverted ? r.pair.baseToken.symbol : r.pair.quoteToken.symbol,
        24
      );
      r.quotePricingMode === "usd"
        ? ((s.innerHTML = `<span style="${e}">USD</span> / ${n}`),
          s.addEventListener("click", () =>
            r.onQuotePricingModeChange("quote")
          ),
          s.setAttribute("title", `Switch to price in ${n}`))
        : ((s.innerHTML = `USD / <span style="${e}">${n}</span>`),
          s.addEventListener("click", () => r.onQuotePricingModeChange("usd")),
          s.setAttribute("title", "Switch to price in USD"));
    }
  },
  ts =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="100%" height="100%"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"></path></svg>',
  rs = (r) => {
    var s;
    if (!r.isLargeScreen) return;
    const e = (s = r.tvWidgetRef.current) == null ? void 0 : s.createButton();
    if (e)
      return (
        (e.style.color = x.default.color),
        (e.style.fontWeight = x.default.fontWeight),
        (e.style.cursor = "pointer"),
        (e.innerHTML = `<span style="display:block;width:24px;height:24px;margin-right:2px;">${ts}</span><span>Full</span>`),
        (e.style.display = "flex"),
        (e.style.alignItems = "center"),
        (e.style.padding = "0 6px 0 2px"),
        e.addEventListener("click", r.onToggleExpandCollapse),
        e
      );
  },
  We = "tv-chart-container",
  ps = (r) => {
    const {
        chainId: e,
        dexId: s,
        pair: t,
        isInverted: n,
        circulatingSupply: i,
        isExpanded: o,
        quotePricingMode: a,
        chartType: d,
        isChartTypeToggleEnabled: h,
        onToggleExpandCollapse: l,
        onQuotePricingModeChange: g,
        onChartTypeChange: v,
        onLatestPrice: f,
        containerId: S,
        containerProps: p,
        widgetConfigOverrides: C,
        chartStyle: P,
        intervalOverride: D,
      } = r,
      _ = Vt({ base: !1, lg: !0 }) ?? !1,
      w = Ht(),
      H = T(Zt),
      M = Ir("/tv/v27.001/charting_library.js"),
      O = c.useRef(null),
      m = c.useRef(void 0),
      R = c.useRef(void 0),
      I = c.useRef(void 0),
      $ = c.useRef(void 0),
      F = T(K),
      Je = T(ne),
      W = Ot(Je.currentUser, void 0),
      Se = T(Xt),
      [Z, J] = c.useState(),
      [oe, ae] = c.useState(),
      X = T(ye),
      ge = T(zr),
      be = T(Br),
      [Q, le] = c.useState([]);
    De(
      () =>
        be.tradingHistoryResponse.pipe(
          _e((u) => {
            if (!u) {
              le([]);
              return;
            }
            if (u.success)
              if (u.value.filteredResult.byMaker) {
                const y = u.value.tradingHistory.map((A) =>
                  Yr({
                    tradingHistory: A,
                    pairBaseTokenSymbol: t.baseToken.symbol,
                  })
                );
                le(y);
              } else Q.length > 0 && le([]);
          })
        ),
      [be.tradingHistoryResponse, t.baseToken.symbol, Q.length]
    );
    const k = $t((u) => u.value),
      ee = c.useMemo(
        () =>
          H({
            dsDataParams: Kt({ pair: t }),
            cmsParams: t.cmsProfile
              ? { assetId: t.cmsProfile.iconId, fit: "crop" }
              : void 0,
          }),
        [H, t]
      ),
      te = c.useMemo(
        () => ({
          userId: W == null ? void 0 : W.id,
          pairId: t.pairAddress,
          quotePricingMode: a,
          chainId: e,
          embedSettings: k,
        }),
        [e, W == null ? void 0 : W.id, k, t.pairAddress, a]
      ),
      j = !k.isEmbed || k.chartSaveDrawings;
    De(
      () =>
        j
          ? Ft([
              k.isEmbed && !k.loadChartSettings
                ? ie(null)
                : X.getGlobalChartSettings(),
              k.isEmbed && !k.loadChartSettings
                ? ie(null)
                : X.getPairChartSettings({
                    isInverted: n,
                    quotePricingMode: a,
                    pair: {
                      chainId: e,
                      pairId: t.pairAddress,
                      quoteTokenAddress: t.quoteToken.address,
                      baseTokenAddress: t.baseToken.address,
                    },
                  }),
            ]).pipe(
              sr({ first: 1e4 }),
              Wt(
                () => (
                  w({
                    status: "error",
                    description: "Failed loading chart settings.",
                  }),
                  J(null),
                  ae(null),
                  jt
                )
              ),
              _e(([u, y]) => {
                if ((ae(u ?? null), !y)) return J(null);
                const A = Se.getChartContent({
                  chartType: d,
                  pairChartSettings: y,
                  isInverted: n,
                  quotePricingMode: a,
                  pair: {
                    chainId: e,
                    pairId: t.pairAddress,
                    quoteTokenAddress: t.quoteToken.address,
                    baseTokenAddress: t.baseToken.address,
                  },
                });
                if (A) return J(A);
                J(null);
              })
            )
          : (J(null), ae(null), ie(void 0)),
      [
        d,
        e,
        X,
        n,
        j,
        t.baseToken.address,
        t.pairAddress,
        t.quoteToken.address,
        a,
        Se,
        w,
        te,
        F,
        k.isEmbed,
        k.loadChartSettings,
      ]
    );
    const fe = T(Or),
      Pe = Gt(s),
      ve = T(Kr),
      Ce = T(Qt),
      G = oe === void 0 || Z === void 0 || (d === "marketCap" && i === void 0),
      ce = M === "ready",
      Xe = M === "error",
      Qe = () => {
        var u, y;
        (u = I.current) == null || u.setTradingHistoryMarks([]),
          (y = m.current) == null || y.activeChart().clearMarks();
      },
      we = ce && !G && m.current !== void 0 && I.current !== void 0;
    se(() => {
      var u, y;
      try {
        if (!we) return;
        if (Q.length === 0) return Qe();
        (u = I.current) == null || u.setTradingHistoryMarks(Q),
          (y = m.current) == null || y.activeChart().refreshMarks();
      } catch (A) {
        F.debug({ event: { id: "failedLoadingMarks", data: { error: A } } });
      }
    }, [G, F, Q, we]);
    const ke = c.useCallback(() => {
        const u = N.string().safeParse(e);
        if (!u.success) return;
        const y = a === "usd" && t.priceUsd ? t.priceUsd : t.price,
          A = a === "usd",
          Ke = t.c === "a" ? t.a : void 0;
        return new _r({
          chartType: d,
          context: t.c,
          ammId: Ke,
          chainId: u.data,
          dexName: Pe,
          pairAddress: t.pairAddress,
          quoteTokenAddress: t.quoteToken.address,
          latestPrice: y,
          useUsdPrice: A,
          supportedResolutions: Fr(t.c),
          isInverted: n,
          searchPair: ve,
          onLatestPrice: f,
          dexChartAmmService: Ce,
          circulatingSupply: i,
          symbolLogo: ee,
        });
      }, [i, d, e, Pe, n, f, t, a, ve, Ce, ee]),
      Te = c.useCallback(
        async (u) => {
          R.current = await ge(oe);
          const y = D ?? R.current.widgetLastUsedTime;
          return new lr(
            Nr({
              chartStyle: P,
              defaultInterval: y,
              settingsAdapter: R.current.settingsAdapter,
              saveLoadAdapter: fe,
              containerId: S ?? We,
              hideTradingViewLogo: !1,
              dataFeed: u.dataFeed,
              savedData: j ? Z ?? void 0 : void 0,
              favoriteIntervals: $r(t.c),
              widgetOverrides: R.current.widgetOverrides,
              symbolLogo: ee,
              theme: k.isEmbed ? k.chartTheme : void 0,
              symbol: n
                ? `${Y(t.quoteToken.symbol, 48)}/${Y(t.baseToken.symbol, 48)}`
                : `${Y(t.baseToken.symbol, 48)}/${Y(t.quoteToken.symbol, 48)}`,
              ...C,
            })
          );
        },
        [
          ge,
          oe,
          D,
          P,
          fe,
          S,
          k.isEmbed,
          k.chartTheme,
          j,
          Z,
          t.c,
          t.baseToken.symbol,
          t.quoteToken.symbol,
          ee,
          n,
          C,
        ]
      ),
      xe = c.useCallback(
        async (u) => {
          await X.persistPairChartSettings({
            schemaVersion: "1.0.0",
            isInverted: n,
            quotePricingMode: a,
            chartType: d,
            pair: {
              chainId: e,
              pairId: t.pairAddress,
              quoteTokenAddress: t.quoteToken.address,
              baseTokenAddress: t.baseToken.address,
            },
            chartData: JSON.stringify(u),
          });
        },
        [e, X, n, t, a, d]
      ),
      Ie = M !== "ready" || O.current === void 0 || m.current !== void 0;
    c.useEffect(() => {
      G ||
        Ie ||
        ((I.current = ke()),
        I.current &&
          Te({ dataFeed: I.current })
            .then((u) => {
              (m.current = u),
                m.current
                  .headerReady()
                  .then(() => {
                    t.c === "a" &&
                      Zr({
                        chartType: d,
                        tvWidgetRef: m,
                        onChartTypeChange: v,
                        isDisabled: !h,
                      }),
                      es({
                        isInverted: n,
                        quotePricingMode: a,
                        pair: t,
                        tvWidgetRef: m,
                        onQuotePricingModeChange: g,
                      }),
                      ($.current = rs({
                        isLargeScreen: _,
                        tvWidgetRef: m,
                        onToggleExpandCollapse: l,
                      }));
                  })
                  .catch((y) => {
                    F.debug({
                      event: {
                        id: "failedCreatingTradingViewCustomButtons",
                        data: { ...te, error: y },
                      },
                    });
                  }),
                m.current.onChartReady(() => {
                  var y;
                  j &&
                    ((y = m.current) == null ||
                      y.subscribe("onAutoSaveNeeded", () => {
                        var A;
                        (A = m.current) == null || A.save(xe);
                      }));
                });
            })
            .catch((u) => {
              F.debug({
                event: {
                  id: "failedInstantiatingTradingView",
                  data: { ...te, error: u },
                },
              });
            }));
    }, [i, M, Z, G, Ie, ke, Te, F, te, n, t, a, g, d, v, _, l, j, xe, h]);
    const { chartAndTxnsPollingRate: re, debugPolling: Ye } = Rr({
        source: "chart",
        pair: t,
      }),
      Ae = () => {
        I.current && I.current.triggerSubscribers();
      };
    return (
      Tr(() => Ae(), re.rate),
      se(() => {
        re.type !== "invisible" &&
          (Ye &&
            console.log(
              new Date(),
              `chart.polling.type=${re.type} trigger chart subscribers`
            ),
          Ae());
      }, [re.type]),
      se(() => {
        D &&
          m.current &&
          m.current.activeChart() &&
          m.current.setSymbol(m.current.activeChart().symbol(), D, () => {});
      }, [D]),
      se(() => {
        $.current &&
          (($.current.style.color = o ? x.active.color : x.default.color),
          ($.current.style.fontWeight = o
            ? x.active.fontWeight
            : x.default.fontWeight));
      }, [o]),
      c.useEffect(
        () => () => {
          var u;
          (u = R.current) == null || u.subscription.unsubscribe();
        },
        [R]
      ),
      c.useEffect(
        () => () => {
          var u;
          try {
            (u = m.current) == null || u.remove();
          } catch {}
          (m.current = void 0), (I.current = void 0);
        },
        []
      ),
      b.jsxs(b.Fragment, {
        children: [
          Xe &&
            b.jsx(Ne, {
              flex: 1,
              m: 2,
              ...p,
              children: b.jsx(qt, {
                size: "sm",
                title: "Error loading chart",
                children: "Please refresh this page to try again!",
              }),
            }),
          (!ce || G) &&
            b.jsx(Ne, {
              flex: 1,
              m: 2,
              ...p,
              children: b.jsx(zt, {
                size: "sm",
                color: "trading-view.text-color",
                label: "Loading chart settings...",
              }),
            }),
          ce && !G && b.jsx(Jt, { ref: O, id: S ?? We, flex: 1, ...p }),
        ],
      })
    );
  };
export {
  ps as A,
  Pr as C,
  Ar as D,
  Ir as a,
  wr as b,
  Rr as c,
  Tr as d,
  Br as e,
  Cr as u,
};
