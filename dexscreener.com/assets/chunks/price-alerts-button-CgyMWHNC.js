import {
  c2 as z,
  bY as O,
  n as e,
  b$ as J,
  bZ as Ce,
  b_ as we,
  fF as Ue,
  dL as Ne,
  m as x,
  fG as Pe,
  v as U,
  f0 as D,
  fH as Ae,
  fI as ge,
  fJ as ue,
  U as Z,
  bd as q,
  $,
  T as v,
  I as j,
  fK as ee,
  y as G,
  e0 as De,
  N as Fe,
  a2 as P,
  dm as re,
  at as L,
  ag as te,
  B as R,
  ar as d,
  q as Ee,
  eC as Me,
  aq as se,
  fL as ae,
  W as oe,
  L as X,
  fM as Be,
  fn as Te,
  ff as _e,
  fj as Re,
  cP as _,
  b1 as Ve,
  fm as Ge,
  ax as ce,
  aj as ze,
  ak as Oe,
  al as We,
  am as qe,
  an as $e,
  ao as Le,
  ap as Ke,
  Q as de,
  by as le,
  fN as He,
  fO as Ye,
  es as pe,
  ah as Qe,
  dy as Xe,
  fP as Je,
  A as Ze,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
import { B as er, E as rr } from "./embed-feature-disabled-modal-_wkgj46S.js";
import {
  u as tr,
  a as y,
  I as F,
  W as V,
  i as sr,
  b as nr,
} from "./wrap-BFhasb9J.js";
const me = [
    {
      type: "priceUsd",
      types: ["priceUsd", "priceUsdPercentage", "priceUsdCross"],
    },
    { type: "priceNative", types: ["priceNative"] },
    { type: "marketCap", types: ["marketCap"] },
  ],
  he = [
    {
      type: "priceUsdInverted",
      types: ["priceUsdInverted", "priceUsdInvertedCross"],
    },
    { type: "priceNativeInverted", types: ["priceNativeInverted"] },
  ],
  be = [
    {
      base: "priceUsd",
      type: "priceUsd",
      direction: "over",
      message: "Goes over",
      channels: ["web", "mobile"],
    },
    {
      base: "priceUsd",
      type: "priceUsd",
      direction: "under",
      message: "Goes under",
      channels: ["web", "mobile"],
    },
    {
      base: "priceUsd",
      type: "priceUsdCross",
      message: "Crosses",
      channels: ["mobile"],
    },
    {
      base: "priceUsd",
      type: "priceUsdPercentage",
      message: "Goes up or down",
      channels: ["mobile"],
    },
    {
      base: "priceUsd",
      type: "priceUsdPercentage",
      direction: "over",
      channels: ["web"],
    },
    {
      base: "priceUsd",
      type: "priceUsdPercentage",
      direction: "under",
      channels: ["web"],
    },
    {
      base: "priceNative",
      type: "priceNative",
      direction: "over",
      message: "Goes over",
      channels: ["web", "mobile"],
    },
    {
      base: "priceNative",
      type: "priceNative",
      direction: "under",
      message: "Goes under",
      channels: ["web", "mobile"],
    },
    {
      base: "marketCap",
      type: "marketCap",
      direction: "over",
      message: "Goes over",
      channels: ["web", "mobile"],
    },
    {
      base: "marketCap",
      type: "marketCap",
      direction: "under",
      message: "Goes under",
      channels: ["web", "mobile"],
    },
  ],
  ve = [
    {
      base: "priceUsdInverted",
      type: "priceUsdInverted",
      direction: "over",
      message: "Goes over",
      channels: ["web", "mobile"],
    },
    {
      base: "priceUsdInverted",
      type: "priceUsdInverted",
      direction: "under",
      message: "Goes under",
      channels: ["web", "mobile"],
    },
    {
      base: "priceUsdInverted",
      type: "priceUsdInvertedCross",
      message: "Crosses",
      channels: ["mobile"],
    },
    {
      base: "priceNativeInverted",
      type: "priceNativeInverted",
      direction: "over",
      message: "Goes over",
      channels: ["web", "mobile"],
    },
    {
      base: "priceNativeInverted",
      type: "priceNativeInverted",
      direction: "under",
      message: "Goes under",
      channels: ["web", "mobile"],
    },
  ];
function ir(r, t) {
  const s = {},
    i = {};
  for (const [a, o] of Object.entries(r))
    t.includes(a) ? (s[a] = o) : (i[a] = o);
  return [s, i];
}
const ar = {
    left: {
      marginEnd: "-1px",
      borderEndRadius: 0,
      borderEndColor: "transparent",
    },
    right: {
      marginStart: "-1px",
      borderStartRadius: 0,
      borderStartColor: "transparent",
    },
  },
  or = z("div", {
    baseStyle: {
      flex: "0 0 auto",
      width: "auto",
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
    },
  }),
  ne = O(function (t, s) {
    const { placement: i = "left", ...a } = t,
      o = ar[i] ?? {},
      l = tr();
    return e.jsx(or, { ref: s, ...a, __css: { ...l.addon, ...o } });
  });
ne.displayName = "InputAddon";
const N = O(function (t, s) {
  return e.jsx(ne, {
    ref: s,
    placement: "left",
    ...t,
    className: J("chakra-input__left-addon", t.className),
  });
});
N.displayName = "InputLeftAddon";
N.id = "InputLeftAddon";
const ie = O(function (t, s) {
  return e.jsx(ne, {
    ref: s,
    placement: "right",
    ...t,
    className: J("chakra-input__right-addon", t.className),
  });
});
ie.displayName = "InputRightAddon";
ie.id = "InputRightAddon";
const xe = O(function (t, s) {
  const { children: i, placeholder: a, className: o, ...l } = t;
  return e.jsxs(z.select, {
    ...l,
    ref: s,
    className: J("chakra-select", o),
    children: [a && e.jsx("option", { value: "", children: a }), i],
  });
});
xe.displayName = "SelectField";
const K = O((r, t) => {
  var C;
  const s = Ce("Select", r),
    {
      rootProps: i,
      placeholder: a,
      icon: o,
      color: l,
      height: g,
      h,
      minH: f,
      minHeight: c,
      iconColor: S,
      iconSize: k,
      ...u
    } = we(r),
    [p, w] = ir(u, Pe),
    m = Ue(w),
    n = {
      width: "100%",
      height: "fit-content",
      position: "relative",
      color: l,
    },
    b = {
      paddingEnd: "2rem",
      ...s.field,
      _focus: {
        zIndex: "unset",
        ...((C = s.field) == null ? void 0 : C._focus),
      },
    };
  return e.jsxs(z.div, {
    className: "chakra-select__wrapper",
    __css: n,
    ...p,
    ...i,
    children: [
      e.jsx(xe, {
        ref: t,
        height: h ?? g,
        minH: f ?? c,
        placeholder: a,
        ...m,
        __css: b,
        children: r.children,
      }),
      e.jsx(fe, {
        "data-disabled": Ne(m.disabled),
        ...((S || l) && { color: S || l }),
        __css: s.icon,
        ...(k && { fontSize: k }),
        children: o,
      }),
    ],
  });
});
K.displayName = "Select";
const cr = (r) =>
    e.jsx("svg", {
      viewBox: "0 0 24 24",
      ...r,
      children: e.jsx("path", {
        fill: "currentColor",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      }),
    }),
  dr = z("div", {
    baseStyle: {
      position: "absolute",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }),
  fe = (r) => {
    const { children: t = e.jsx(cr, {}), ...s } = r,
      i = x.cloneElement(t, {
        role: "presentation",
        className: "chakra-select__icon",
        focusable: !1,
        "aria-hidden": !0,
        style: { width: "1em", height: "1em", color: "currentColor" },
      });
    return e.jsx(dr, {
      ...s,
      className: "chakra-select__icon-wrapper",
      children: x.isValidElement(t) ? i : null,
    });
  };
fe.displayName = "SelectIcon";
const ye = (r) =>
  e.jsx(z.div, {
    className: "chakra-stack__divider",
    ...r,
    __css: {
      ...r.__css,
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto",
    },
  });
ye.displayName = "StackDivider";
const je = (r) => {
    const { pair: t, formValues: s, isInverted: i } = r;
    if (!t) throw new Error("No pair provided.");
    switch (s.triggerAndDirection) {
      case "priceUsdValueOver":
        if (s.priceUsd)
          return {
            type: i ? "priceUsdInverted" : "priceUsd",
            subject: t,
            direction: "over",
            priceUsd: s.priceUsd.replace(/,/g, ""),
          };
        break;
      case "priceUsdValueUnder":
        if (s.priceUsd)
          return {
            type: i ? "priceUsdInverted" : "priceUsd",
            subject: t,
            direction: "under",
            priceUsd: s.priceUsd.replace(/,/g, ""),
          };
        break;
      case "priceNativeValueOver":
        if (s.priceNative)
          return {
            type: i ? "priceNativeInverted" : "priceNative",
            subject: t,
            direction: "over",
            price: s.priceNative.replace(/,/g, ""),
          };
        break;
      case "priceNativeValueUnder":
        if (s.priceNative)
          return {
            type: i ? "priceNativeInverted" : "priceNative",
            subject: t,
            direction: "under",
            price: s.priceNative.replace(/,/g, ""),
          };
        break;
      case "priceUsdPercentageOver":
        if (s.percentage && s.timeframeKey)
          return {
            type: "priceUsdPercentage",
            subject: t,
            direction: "over",
            percentage: new U(s.percentage).decimalPlaces(2).toNumber(),
            timeframeKey: s.timeframeKey,
          };
        break;
      case "priceUsdPercentageUnder":
        if (s.percentage && s.timeframeKey)
          return {
            type: "priceUsdPercentage",
            subject: t,
            direction: "under",
            percentage: new U(s.percentage).decimalPlaces(2).toNumber(),
            timeframeKey: s.timeframeKey,
          };
        break;
      case "marketCapValueUnder":
        if (s.marketCap)
          return {
            type: "marketCap",
            subject: t,
            direction: "under",
            marketCap: new U(s.marketCap).decimalPlaces(2).toNumber(),
          };
        break;
      case "marketCapValueOver":
        if (s.marketCap)
          return {
            type: "marketCap",
            subject: t,
            direction: "over",
            marketCap: new U(s.marketCap).decimalPlaces(2).toNumber(),
          };
        break;
    }
  },
  ke = ({ form: r, currentAlertBases: t, baseTokenSymbol: s }) => {
    const i = (a, o) => {
      switch (a.type) {
        case "priceUsd":
        case "priceUsdInverted":
          return "Price in USD";
        case "priceNative":
        case "priceNativeInverted":
          return `Price in ${o}`;
        case "marketCap":
          return "Market Cap";
      }
    };
    return e.jsx(y, {
      as: "span",
      children: e.jsx(K, {
        ...r.register("triggerBase"),
        children: t.map((a) =>
          e.jsx("option", { value: a.type, children: i(a, s) }, a.type)
        ),
      }),
    });
  },
  lr = (r) => {
    var u;
    const { alert: t, dexScreenerPair: s } = r,
      i =
        t.trigger.type === "priceUsdInverted" ||
        t.trigger.type === "priceNativeInverted",
      a = i ? ve : be,
      o = i ? he : me,
      l =
        t.trigger.type === "priceUsdInverted" || t.trigger.type === "priceUsd"
          ? t.trigger.priceUsd
          : s == null
          ? void 0
          : s.priceUsd,
      g =
        t.trigger.type === "priceNative" ||
        t.trigger.type === "priceNativeInverted"
          ? t.trigger.price
          : s == null
          ? void 0
          : s.price,
      h =
        ((u = a.find((p) => p.type === t.trigger.type)) == null
          ? void 0
          : u.base) ?? "priceUsd",
      f =
        t.trigger.type === "marketCap"
          ? t.trigger.marketCap
          : (s == null ? void 0 : s.marketCap) ?? (s == null ? void 0 : s.fdv),
      c =
        t.trigger.type === "priceUsdPercentage" ? t.trigger.percentage : void 0,
      S =
        t.trigger.type === "priceUsdPercentage"
          ? t.trigger.timeframeKey
          : void 0;
    let k = "over";
    return (
      (t.trigger.type === "priceUsd" ||
        t.trigger.type === "priceUsdInverted" ||
        t.trigger.type === "priceNative" ||
        t.trigger.type === "priceNativeInverted" ||
        t.trigger.type === "priceUsdPercentage" ||
        t.trigger.type === "marketCap") &&
        (k = t.trigger.direction),
      {
        isInverted: i,
        priceUsd: l,
        priceNative: g,
        triggerAndDirection: E(t.trigger.type, k),
        triggerBase: h,
        percentage: c,
        timeframeKey: S,
        marketCap: f,
        currentAlertTypes: a,
        currentAlertBases: o,
      }
    );
  },
  Ie = ({ form: r, quoteTokenSymbol: t = "$" }) => {
    switch (r.watch("triggerBase")) {
      case "priceNative":
        return e.jsx(y, {
          as: "div",
          flex: 1,
          children: e.jsxs(F, {
            children: [
              e.jsx(N, { children: t }),
              e.jsx(
                D,
                {
                  isInvalid: !!r.formState.errors.priceNative,
                  ...r.register("priceNative", {
                    validate: (s) =>
                      s ? new U(s.replace(/,/g, "")).gt(0) : !1,
                  }),
                },
                "TriggerAndDirectionFormPriceNative"
              ),
            ],
          }),
        });
      case "marketCap":
        return e.jsx(y, {
          as: "div",
          flex: 1,
          children: e.jsxs(F, {
            children: [
              e.jsx(N, { children: "$" }),
              e.jsx(
                D,
                {
                  isInvalid: !!r.formState.errors.marketCap,
                  ...r.register("marketCap", {
                    validate: (s) => (s ? new U(s).gt(0) : !1),
                  }),
                },
                "TriggerAndDirectionFormMarketCap"
              ),
            ],
          }),
        });
      default:
        switch (r.watch("triggerAndDirection")) {
          case "priceUsdPercentageOver":
          case "priceUsdPercentageUnder":
            return e.jsxs(e.Fragment, {
              children: [
                e.jsx(y, {
                  as: "div",
                  flex: 1,
                  children: e.jsxs(F, {
                    children: [
                      e.jsx(D, {
                        placeholder: "0",
                        type: "number",
                        step: ".01",
                        isInvalid: !!r.formState.errors.percentage,
                        ...r.register("percentage", {
                          valueAsNumber: !0,
                          validate: (s) =>
                            !(
                              !s ||
                              s < 0 ||
                              (r.getValues("triggerAndDirection") ===
                                "priceUsdPercentageUnder" &&
                                s > 99.99)
                            ),
                        }),
                      }),
                      e.jsx(ie, { children: "%" }),
                    ],
                  }),
                }),
                e.jsx(y, { as: "div", children: "within the" }),
                e.jsx(y, {
                  as: "div",
                  children: e.jsx(K, {
                    ...r.register("timeframeKey"),
                    children: Ae.map((s) =>
                      e.jsx("option", { value: s, children: ge[s].label }, s)
                    ),
                  }),
                }),
              ],
            });
          default:
            return e.jsx(y, {
              as: "div",
              flex: 1,
              children: e.jsxs(F, {
                children: [
                  e.jsx(N, { children: "$" }),
                  e.jsx(
                    D,
                    {
                      isInvalid: !!r.formState.errors.priceUsd,
                      ...r.register("priceUsd", {
                        validate: (s) =>
                          s ? new U(s.replace(/,/g, "")).gt(0) : !1,
                      }),
                    },
                    "TriggerAndDirectionFormPriceUsd"
                  ),
                ],
              }),
            });
        }
    }
  },
  Se = ({ form: r, alertTypes: t, edit: s }) => {
    var a;
    const i = (o) => {
      switch (o.type) {
        case "priceUsd":
        case "priceUsdInverted":
        case "priceNative":
        case "priceNativeInverted":
        case "marketCap":
          return o.direction === "over" ? "Goes over" : "Goes under";
        case "priceUsdCross":
        case "priceUsdInvertedCross":
          return "Crosses";
        case "priceUsdPercentage":
          return o.direction === "over"
            ? "Goes up more than"
            : "Goes down more than";
      }
    };
    return (
      x.useEffect(() => {
        !s &&
          t &&
          t[0] &&
          r.setValue("triggerAndDirection", E(t[0].type, t[0].direction));
      }, [(a = t[0]) == null ? void 0 : a.type]),
      e.jsx(K, {
        ...r.register("triggerAndDirection"),
        children: t.map((o) =>
          e.jsx(
            "option",
            { value: E(o.type, o.direction), children: i(o) },
            E(o.type, o.direction)
          )
        ),
      })
    );
  },
  pr = ({ alert: r, onSubmit: t, onCancel: s, dexScreenerPair: i }) => {
    const a = x.useRef(!1),
      o = lr({ alert: r, dexScreenerPair: i }),
      {
        isInverted: l,
        priceUsd: g,
        priceNative: h,
        triggerBase: f,
        percentage: c,
        timeframeKey: S,
        marketCap: k,
        triggerAndDirection: u,
        currentAlertTypes: p,
        currentAlertBases: w,
      } = o,
      m = ue({
        defaultValues: {
          triggerBase: f,
          triggerAndDirection: u,
          priceUsd: g,
          priceNative: h,
          marketCap: k,
          percentage: c,
          note: r.note,
          timeframeKey: S,
        },
      }),
      n = Z(),
      b = P(re),
      [C, A] = x.useState(!1),
      M = P(L),
      W = x.useCallback(
        () =>
          p.filter(
            (I) =>
              I.base === m.watch("triggerBase") && I.channels.includes("web")
          ),
        [p, m]
      )();
    x.useEffect(() => {
      if (a.current) return m.setValue("triggerAndDirection", u);
      a.current = !0;
    }, [m, u]);
    const H = m.handleSubmit(async (I) => {
        if (C || r.trigger.subject.type !== "dexPair") return;
        const Y = {
            type: "dexPair",
            chainId: r.trigger.subject.chainId,
            dexId: r.trigger.subject.dexId,
            pairId: r.trigger.subject.pairId,
            baseTokenName: r.trigger.subject.baseTokenName,
            baseTokenSymbol: r.trigger.subject.baseTokenSymbol,
            quoteTokenSymbol: r.trigger.subject.quoteTokenSymbol,
          },
          T = je({ pair: Y, formValues: I, isInverted: l });
        if (!T) {
          n({ status: "error", description: "Invalid price alert" });
          return;
        }
        A(!0);
        try {
          await M.actions.updateAlert(r.id, {
            schemaVersion: "1.0.0",
            trigger: T,
            channels: [{ type: "browser" }],
            enabled: !0,
            note: I.note,
          }),
            b.track({ event: "updatePriceAlert", data: { id: r.id } }),
            n({ status: "success", description: "Price alert updated!" }),
            t();
        } catch (Q) {
          n({
            status: "error",
            description: `Failed updating price alert: ${q(Q).message}`,
          });
        }
        A(!1);
      }),
      B =
        r.trigger.subject.type === "dexPair"
          ? l
            ? r.trigger.subject.baseTokenSymbol
            : r.trigger.subject.quoteTokenSymbol
          : void 0;
    return e.jsx(e.Fragment, {
      children: e.jsxs($, {
        spacing: 4,
        alignItems: "flex-start",
        as: "form",
        onSubmit: H,
        children: [
          e.jsxs(V, {
            style: { height: "inherit" },
            children: [
              e.jsx(y, {
                as: "span",
                alignItems: "center",
                children: e.jsx(v, { children: "Alert me when " }),
              }),
              e.jsx(ke, {
                form: m,
                currentAlertBases: w,
                baseTokenSymbol: B ?? "",
              }),
            ],
          }),
          e.jsxs(V, {
            align: "center",
            width: "100%",
            children: [
              e.jsx(y, {
                as: "span",
                w: "210px",
                children: e.jsx(Se, { form: m, alertTypes: W, edit: !0 }),
              }),
              B && e.jsx(Ie, { form: m, quoteTokenSymbol: B }),
            ],
          }),
          e.jsxs(F, {
            children: [
              e.jsx(N, { children: e.jsx(j, { as: ee }) }),
              e.jsx(D, {
                isInvalid: !!m.formState.errors.note,
                ...m.register("note"),
                placeholder: "Add a note to your alert (optional)",
              }),
            ],
          }),
          e.jsx(V, {
            width: "100%",
            display: "flex",
            justifyContent: "end",
            children: e.jsxs(y, {
              as: "div",
              children: [
                e.jsx(G, {
                  isLoading: C,
                  type: "submit",
                  mr: 2,
                  leftIcon: e.jsx(j, { as: De }),
                  colorScheme: "green",
                  children: "Save",
                }),
                e.jsx(G, {
                  onClick: s,
                  leftIcon: e.jsx(j, { as: Fe }),
                  colorScheme: "red",
                  variant: "ghost",
                  children: "Cancel",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  gr = ({ priceAlert: r }) => {
    var s;
    const { colorMode: t } = te();
    switch (r.trigger.type) {
      case "priceUsd":
        return e.jsxs(e.Fragment, {
          children: [
            "Alert me when price",
            " ",
            e.jsxs(v, {
              as: "span",
              fontWeight: "semibold",
              color:
                r.trigger.direction === "over"
                  ? d("green.500", "green.400", t)
                  : d("red.500", "red.400", t),
              children: [
                r.trigger.direction === "over" ? "goes over" : "goes under",
                " $",
                _(r.trigger.priceUsd),
              ],
            }),
          ],
        });
      case "priceUsdInverted":
        return e.jsxs(e.Fragment, {
          children: [
            "Alert me when ",
            r.trigger.subject.quoteTokenSymbol,
            " price",
            " ",
            e.jsxs(v, {
              as: "span",
              fontWeight: "semibold",
              color:
                r.trigger.direction === "over"
                  ? d("green.500", "green.400", t)
                  : d("red.500", "red.400", t),
              children: [
                r.trigger.direction === "over" ? "goes over" : "goes under",
                " $",
                _(r.trigger.priceUsd),
              ],
            }),
          ],
        });
      case "priceNative":
      case "priceNativeInverted":
        return e.jsxs(e.Fragment, {
          children: [
            "Alert me when ",
            r.trigger.subject.baseTokenSymbol,
            " price",
            " ",
            e.jsxs(v, {
              as: "span",
              fontWeight: "semibold",
              color:
                r.trigger.direction === "over"
                  ? d("green.500", "green.400", t)
                  : d("red.500", "red.400", t),
              children: [
                r.trigger.direction === "over" ? "goes over" : "goes under",
                " ",
                _(r.trigger.price),
                " ",
                r.trigger.subject.quoteTokenSymbol,
              ],
            }),
          ],
        });
      case "priceUsdPercentage":
        return e.jsxs(v, {
          as: "span",
          children: [
            "Alert me when price is",
            " ",
            e.jsxs(v, {
              as: "span",
              fontWeight: "semibold",
              color:
                r.trigger.direction === "over"
                  ? d("green.500", "green.400", t)
                  : d("red.500", "red.400", t),
              children: [
                r.trigger.direction === "over"
                  ? "goes up more than"
                  : "goes down more than",
                " ",
                _(r.trigger.percentage),
                "%",
              ],
            }),
            " ",
            "within the",
            " ",
            e.jsx(R, {
              as: "span",
              fontWeight: "semibold",
              children:
                (s = ge[r.trigger.timeframeKey]) == null
                  ? void 0
                  : s.label.toLowerCase(),
            }),
          ],
        });
      case "marketCap":
        return e.jsxs(e.Fragment, {
          children: [
            "Alert me when market cap",
            " ",
            e.jsxs(v, {
              as: "span",
              fontWeight: "semibold",
              color:
                r.trigger.direction === "over"
                  ? d("green.500", "green.400", t)
                  : d("red.500", "red.400", t),
              children: [
                r.trigger.direction === "over" ? "goes over" : "goes under",
                " $",
                _(r.trigger.marketCap),
              ],
            }),
          ],
        });
      default:
        return null;
    }
  },
  ur = ({
    priceAlerts: r,
    containerProps: t,
    showPair: s,
    dexScreenerPair: i,
    onPairClick: a,
  }) => {
    const o = P(L),
      { actions: l } = o,
      [g, h] = x.useState(void 0),
      f = Z(),
      { colorMode: c } = te(),
      S = (n) => {
        try {
          l.resetAlert(n),
            f({ status: "success", description: "Price alert reset" });
        } catch (b) {
          f({
            status: "error",
            description: `Failed resetting price alert: ${q(b).message}`,
          });
        }
      },
      k = (n) => {
        try {
          l.deleteAlert(n);
        } catch (b) {
          f({
            status: "error",
            description: `Failed deleting price alert: ${q(b).message}`,
          });
        }
      },
      u = (n) => {
        h({ type: "edit", id: n.id });
      },
      p = () => {
        h(void 0);
      },
      w = () => {
        h(void 0);
      },
      m = () => {
        h(void 0);
      };
    return e.jsx($, {
      spacing: 3,
      alignItems: "stretch",
      ...t,
      children: r.map((n) => {
        if (n.trigger.subject.type !== "dexPair") return;
        const b = g && g.type === "edit" && g.id === n.id,
          C = g && g.type === "delete" && g.id === n.id;
        return e.jsxs(
          R,
          {
            borderWidth: 1,
            borderColor: b
              ? d("gray.100", "gray.800", c)
              : d("gray.50", "gray.925", c),
            p: 3,
            bg: b ? d("gray.0", "blue.950", c) : d("gray.50", "gray.925", c),
            borderRadius: "md",
            children: [
              s &&
                e.jsx(Ee, {
                  display: "block",
                  w: "100%",
                  to: Me({
                    platformId: n.trigger.subject.chainId,
                    pairAddress:
                      n.trigger.subject.type === "dexPair"
                        ? n.trigger.subject.pairId
                        : "",
                  }),
                  onClick: a ? () => a() : void 0,
                  mb: 3,
                  pb: 2,
                  borderBottomWidth: 1,
                  borderBottomColor: d("gray.100", "gray.800", c),
                  _hover: {
                    textDecoration: "none",
                    borderBottomColor: d("gray.150", "gray.750", c),
                  },
                  children: e.jsxs(v, {
                    as: "span",
                    fontSize: { base: "sm", md: "md" },
                    children: [
                      e.jsx(v, {
                        as: "span",
                        fontWeight: "semibold",
                        children: n.trigger.subject.baseTokenSymbol,
                      }),
                      e.jsx(v, {
                        as: "span",
                        mx: "2px",
                        color: d("gray.400", "gray.500", c),
                        children: "/",
                      }),
                      e.jsx(v, {
                        as: "span",
                        color: d("gray.400", "gray.500", c),
                        children: n.trigger.subject.quoteTokenSymbol,
                      }),
                      e.jsx(v, {
                        as: "span",
                        display: { base: "none", md: "initial" },
                        ml: 3,
                        children: n.trigger.subject.baseTokenName,
                      }),
                    ],
                  }),
                }),
              e.jsxs(R, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ...(n.note && { pb: 2 }),
                children: [
                  e.jsxs(R, {
                    width: "100%",
                    children: [
                      e.jsxs(R, {
                        wordBreak: "break-all",
                        children: [
                          e.jsxs(v, {
                            as: "span",
                            display: "flex",
                            alignItems: "center",
                            mb: 1,
                            fontWeight: "semibold",
                            textTransform: "uppercase",
                            fontSize: "xs",
                            color: n.enabled
                              ? d("green.500", "green.400", c)
                              : d("red.500", "red.400", c),
                            children: [
                              e.jsx(j, { as: se, mr: "3px" }),
                              n.enabled ? "Active" : "Disabled",
                            ],
                          }),
                          b &&
                            e.jsx(pr, {
                              alert: n,
                              dexScreenerPair: i,
                              onSubmit: p,
                              onCancel: w,
                            }),
                          !b && e.jsx(gr, { priceAlert: n }),
                        ],
                      }),
                      !b &&
                        e.jsxs(v, {
                          as: "span",
                          fontSize: "sm",
                          color: d("gray.400", "gray.600", c),
                          children: [
                            "Created ",
                            ae(n.createdAt),
                            " ago",
                            n.triggeredAt &&
                              `, last triggered ${ae(n.triggeredAt)} ago`,
                          ],
                        }),
                    ],
                  }),
                  !b &&
                    e.jsxs(oe, {
                      children: [
                        !n.enabled &&
                          e.jsx(X, {
                            onClick: () => S(n.id),
                            "aria-label": "Reset alert",
                            title: "Reset alert",
                            icon: e.jsx(j, { as: Be }),
                            flexShrink: 0,
                            variant: "unstyled",
                            colorScheme: "red",
                            size: "sm",
                            ml: 3,
                            color: d("gray.500", "gray.600", c),
                            _hover: { color: d("green.600", "green.300", c) },
                          }),
                        e.jsx(X, {
                          onClick: () => u(n),
                          variant: "unstyled",
                          flexShrink: 0,
                          size: "sm",
                          ml: 3,
                          title: "Edit alert",
                          "aria-label": "Edit alert",
                          icon: e.jsx(j, { as: Te }),
                          color: d("gray.500", "gray.600", c),
                          _hover: { color: d("accent.500", "accent.400", c) },
                        }),
                        e.jsx(X, {
                          onClick: () => h({ type: "delete", id: n.id }),
                          "aria-label": "Delete alert",
                          title: "Delete alert",
                          icon: e.jsx(j, { as: _e }),
                          flexShrink: 0,
                          variant: "unstyled",
                          colorScheme: "red",
                          size: "sm",
                          ml: 3,
                          color: d("gray.500", "gray.600", c),
                          _hover: { color: d("red.500", "red.400", c) },
                        }),
                      ],
                    }),
                ],
              }),
              !b &&
                n.note &&
                e.jsx(e.Fragment, {
                  children: e.jsxs($, {
                    alignItems: "flex-start",
                    children: [
                      e.jsx(ye, {
                        borderTopWidth: 1,
                        borderColor: d("gray.100", "blue.900", c),
                      }),
                      e.jsxs(oe, {
                        spacing: 2,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        children: [
                          e.jsx(j, {
                            as: ee,
                            color: d("gray.400", "gray.600", c),
                          }),
                          e.jsx(v, {
                            as: "span",
                            fontSize: "sm",
                            color: d("gray.500", "gray.300", c),
                            children: n.note,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              C &&
                e.jsx(Re, {
                  modalProps: { onClose: () => m() },
                  message: "Are you sure you want to delete this alert?",
                  onConfirm: () => k(n.id),
                  onCancel: () => m(),
                }),
            ],
          },
          n.id
        );
      }),
    });
  },
  E = (r, t) =>
    r === "priceUsdCross" ||
    r === "priceNativeInverted" ||
    r === "priceUsdInvertedCross" ||
    r === "newScreenerPair" ||
    r === "watchlistPriceUsdPercentage"
      ? r
      : r === "priceUsd" || r === "priceNative" || r === "marketCap"
      ? `${r}Value${t ? ce(t) : ""}`
      : `${r}${t ? ce(t) : ""}`,
  mr = ({ pair: r, isInverted: t }) => {
    const s = x.useRef(!0),
      {
        price: i,
        priceUsd: a,
        chainId: o,
        pairAddress: l,
        dexId: g,
        quoteToken: h,
        baseToken: f,
        marketCap: c,
        fdv: S,
      } = r,
      k = x.useCallback(() => (t ? he : me), [t])(),
      u = x.useCallback(() => (t ? ve : be), [t])(),
      p = ue({
        defaultValues: {
          triggerBase: k[0].type,
          triggerAndDirection: E(
            u[0].type,
            u[0].direction ? u[0].direction : void 0
          ),
          priceUsd: t ? sr({ price: i, priceUsd: a }) : a,
          priceNative: t ? nr({ price: i }) : i,
          marketCap: c ?? S ?? 0,
          note: void 0,
        },
      }),
      w = x.useCallback(
        () =>
          u.filter(
            (I) =>
              I.base === p.watch("triggerBase") && I.channels.includes("web")
          ),
        [u, p]
      )(),
      m = Z(),
      n = P(re),
      [b, C] = x.useState(!1),
      A = P(L),
      M = Ve(
        () => A.listAlertsByPair(o, g, r.pairAddress),
        [A, o, g, r.pairAddress],
        []
      ),
      { setValue: W } = p;
    x.useEffect(
      () => () => {
        s.current = !1;
      },
      [s]
    ),
      x.useEffect(() => {
        W(
          "triggerAndDirection",
          E(u[0].type, u[0].direction ? u[0].direction : void 0)
        );
      }, [W, u]);
    const H = p.handleSubmit(async (I) => {
        if (b) return;
        const Y = {
            type: "dexPair",
            chainId: o,
            dexId: g,
            pairId: l,
            baseTokenName: f.name,
            baseTokenSymbol: f.symbol,
            quoteTokenSymbol: h.symbol,
          },
          T = je({ pair: Y, formValues: I, isInverted: t });
        if (!T) {
          m({ status: "error", description: "Invalid price alert" });
          return;
        }
        C(!0);
        try {
          await A.actions.createAlert({
            schemaVersion: "1.0.0",
            trigger: T,
            channels: [{ type: "browser" }],
            enabled: !0,
            note: I.note,
          }),
            n.track({ event: "addPriceAlert" }),
            m({ status: "success", description: "Price alert created!" }),
            s.current &&
              (p.setValue("priceUsd", void 0),
              p.setValue("priceNative", void 0),
              p.setValue("marketCap", void 0),
              p.setValue("percentage", void 0),
              p.setValue("note", null));
        } catch (Q) {
          m({
            status: "error",
            description: `Failed creating price alert: ${q(Q).message}`,
          });
        }
        C(!1);
      }),
      B = t ? f.symbol : h.symbol;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs($, {
          spacing: 4,
          alignItems: "flex-start",
          as: "form",
          onSubmit: H,
          children: [
            e.jsxs(V, {
              style: { height: "inherit" },
              children: [
                e.jsx(y, {
                  as: "span",
                  alignItems: "center",
                  children: e.jsx(v, { children: "Alert me when " }),
                }),
                e.jsx(ke, {
                  form: p,
                  currentAlertBases: k,
                  baseTokenSymbol: r.baseToken.symbol,
                }),
              ],
            }),
            e.jsxs(V, {
              align: "center",
              width: "100%",
              children: [
                e.jsx(y, {
                  as: "span",
                  w: "210px",
                  children: e.jsx(Se, { form: p, alertTypes: w }),
                }),
                e.jsx(Ie, { form: p, quoteTokenSymbol: B }),
                e.jsx(y, {
                  as: "div",
                  children: e.jsx(G, {
                    isLoading: b,
                    type: "submit",
                    leftIcon: e.jsx(j, { as: Ge }),
                    colorScheme: "green",
                    children: "Create Alert",
                  }),
                }),
              ],
            }),
            e.jsxs(F, {
              children: [
                e.jsx(N, { children: e.jsx(j, { as: ee }) }),
                e.jsx(D, {
                  isInvalid: !!p.formState.errors.note,
                  ...p.register("note"),
                  placeholder: "Add a note to your alert (optional)",
                }),
              ],
            }),
          ],
        }),
        M &&
          M.length > 0 &&
          e.jsx(ur, {
            dexScreenerPair: r,
            containerProps: { mt: 5 },
            priceAlerts: M,
          }),
      ],
    });
  },
  hr = ({ pair: r, onClose: t, isInverted: s }) => {
    const [i, a] = x.useState();
    x.useEffect(() => {
      "Notification" in window && a(window.Notification.permission);
    }, []);
    const o = () => {
        "Notification" in window &&
          window.Notification.requestPermission((g) => {
            a(g);
          });
      },
      { colorMode: l } = te();
    return e.jsxs(ze, {
      size: "3xl",
      onClose: t,
      motionPreset: "none",
      scrollBehavior: "inside",
      blockScrollOnMount: !1,
      isOpen: !0,
      children: [
        e.jsx(Oe, {}),
        e.jsxs(We, {
          children: [
            e.jsx(qe, {}),
            e.jsx($e, {
              children: e.jsx(Le, {
                size: "md",
                children: "Manage Price Alerts",
              }),
            }),
            e.jsxs(Ke, {
              p: 5,
              children: [
                i === "default" &&
                  e.jsxs(de, {
                    display: "flex",
                    flexDir: "column",
                    py: 6,
                    textAlign: "center",
                    children: [
                      e.jsxs(v, {
                        fontSize: "lg",
                        children: [
                          "To set price alerts please enable",
                          " ",
                          e.jsx(le, {
                            href: "https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop",
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            color: d("accent.600", "accent.200", l),
                            textDecor: "underline",
                            children: "browser notifications",
                          }),
                          " ",
                          "for DEX Screener first:",
                        ],
                      }),
                      e.jsx(G, {
                        mt: 4,
                        onClick: o,
                        colorScheme: "green",
                        leftIcon: e.jsx(j, { as: se }),
                        size: "lg",
                        children: "Enable Notifications",
                      }),
                    ],
                  }),
                i === "denied" &&
                  e.jsxs(de, {
                    display: "flex",
                    flexDir: "column",
                    py: 6,
                    textAlign: "center",
                    children: [
                      e.jsx(j, {
                        as: He,
                        color: d("red.500", "red.400", l),
                        boxSize: "80px",
                      }),
                      e.jsxs(v, {
                        mt: 4,
                        fontSize: "lg",
                        children: [
                          "You have blocked notifications for DEX Screener. Please",
                          " ",
                          e.jsx(le, {
                            href: "https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop",
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            color: d("accent.600", "accent.200", l),
                            textDecor: "underline",
                            children: "change your browser settings",
                          }),
                          ", reload this page and try again.",
                        ],
                      }),
                    ],
                  }),
                i === "granted" && e.jsx(mr, { pair: r, isInverted: s }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  fr = ({ pair: r, buttonProps: t, isInverted: s }) => {
    const i = P(re),
      { isEmbed: a } = Ye((c) => c.value),
      o = pe(),
      l = pe(),
      g = P(L),
      h = Qe(g.active, []).filter(
        ({ trigger: c }) =>
          c.subject.type === "dexPair" &&
          c.subject.chainId === (r == null ? void 0 : r.chainId) &&
          c.subject.pairId === r.pairAddress
      ).length,
      f = () => {
        if (a) {
          o.onOpen();
          return;
        }
        l.onOpen(), i.track({ event: "priceAlertsButtonClick" });
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Xe, {
          isDisabled: t && !t.isDisabled,
          label: "Your device does not support notifications",
          children: e.jsxs(G, {
            onClick: f,
            leftIcon: e.jsx(j, { as: h === 0 ? Je : se, boxSize: "16px" }),
            fontWeight: "normal",
            pointerEvents: r ? void 0 : "none",
            _focus: { boxShadow: "none" },
            ...t,
            children: [
              e.jsx(Ze, { children: "Alerts" }),
              h > 0 && e.jsx(er, { label: h }),
            ],
          }),
        }),
        r &&
          l.isOpen &&
          e.jsx(hr, { pair: r, onClose: l.onClose, isInverted: s }),
        o.isOpen && e.jsx(rr, { onClose: o.onClose }),
      ],
    });
  };
export { N as I, fr as P, K as S, ur as a, ie as b, ye as c };
