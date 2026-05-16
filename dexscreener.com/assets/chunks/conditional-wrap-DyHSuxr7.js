import {
  dG as ye,
  dH as ve,
  dI as R,
  m as o,
  dJ as x,
  dK as he,
  dL as a,
  dM as c,
  dN as _,
  n as $,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
var ke = () => typeof document < "u",
  ee = !1,
  E = null,
  y = !1,
  B = !1,
  I = new Set();
function K(e, i) {
  I.forEach((n) => n(e, i));
}
var pe =
  typeof window < "u" && window.navigator != null
    ? /^Mac/.test(window.navigator.platform)
    : !1;
function Ee(e) {
  return !(
    e.metaKey ||
    (!pe && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function te(e) {
  (y = !0), Ee(e) && ((E = "keyboard"), K("keyboard", e));
}
function h(e) {
  if (((E = "pointer"), e.type === "mousedown" || e.type === "pointerdown")) {
    y = !0;
    const i = e.composedPath ? e.composedPath()[0] : e.target;
    let n = !1;
    try {
      n = i.matches(":focus-visible");
    } catch {}
    if (n) return;
    K("pointer", e);
  }
}
function we(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : e.detail === 0 && !e.pointerType;
}
function Ce(e) {
  we(e) && ((y = !0), (E = "virtual"));
}
function ge(e) {
  e.target === window ||
    e.target === document ||
    (e.target instanceof Element && e.target.hasAttribute("tabindex")) ||
    (!y && !B && ((E = "virtual"), K("virtual", e)), (y = !1), (B = !1));
}
function Le() {
  (y = !1), (B = !0);
}
function ne() {
  return E !== "pointer";
}
function Fe() {
  if (!ke() || ee) return;
  const { focus: e } = HTMLElement.prototype;
  (HTMLElement.prototype.focus = function (...n) {
    (y = !0), e.apply(this, n);
  }),
    document.addEventListener("keydown", te, !0),
    document.addEventListener("keyup", te, !0),
    document.addEventListener("click", Ce, !0),
    window.addEventListener("focus", ge, !0),
    window.addEventListener("blur", Le, !1),
    typeof PointerEvent < "u"
      ? (document.addEventListener("pointerdown", h, !0),
        document.addEventListener("pointermove", h, !0),
        document.addEventListener("pointerup", h, !0))
      : (document.addEventListener("mousedown", h, !0),
        document.addEventListener("mousemove", h, !0),
        document.addEventListener("mouseup", h, !0)),
    (ee = !0);
}
function Se(e) {
  Fe(), e(ne());
  const i = () => e(ne());
  return (
    I.add(i),
    () => {
      I.delete(i);
    }
  );
}
const De = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute",
};
function xe(e = {}) {
  const i = ye(e),
    {
      isDisabled: n,
      isReadOnly: m,
      isRequired: F,
      isInvalid: d,
      id: A,
      onBlur: ae,
      onFocus: oe,
      "aria-describedby": H,
    } = i,
    {
      defaultChecked: T,
      isChecked: U,
      isFocusable: re,
      onChange: se,
      isIndeterminate: u,
      name: V,
      value: q,
      tabIndex: W = void 0,
      "aria-label": O,
      "aria-labelledby": j,
      "aria-invalid": S,
      ...ie
    } = e,
    D = ve(ie, [
      "isDisabled",
      "isReadOnly",
      "isRequired",
      "isInvalid",
      "id",
      "onBlur",
      "onFocus",
      "aria-describedby",
    ]),
    w = R(se),
    G = R(ae),
    N = R(oe),
    [b, C] = o.useState(!1),
    [k, z] = o.useState(!1),
    [p, v] = o.useState(!1),
    M = o.useRef(!1);
  o.useEffect(
    () =>
      Se((t) => {
        M.current = t;
      }),
    []
  );
  const l = o.useRef(null),
    [J, de] = o.useState(!0),
    [ue, g] = o.useState(!!T),
    P = U !== void 0,
    r = P ? U : ue,
    Q = o.useCallback(
      (t) => {
        if (m || n) {
          t.preventDefault();
          return;
        }
        P || g(r ? t.currentTarget.checked : u ? !0 : t.currentTarget.checked),
          w == null || w(t);
      },
      [m, n, r, P, u, w]
    );
  x(() => {
    l.current && (l.current.indeterminate = !!u);
  }, [u]),
    he(() => {
      n && C(!1);
    }, [n, C]),
    x(() => {
      const t = l.current;
      if (!(t != null && t.form)) return;
      const s = () => {
        g(!!T);
      };
      return (
        t.form.addEventListener("reset", s),
        () => {
          var f;
          return (f = t.form) == null
            ? void 0
            : f.removeEventListener("reset", s);
        }
      );
    }, []);
  const X = n && !re,
    Y = o.useCallback(
      (t) => {
        t.key === " " && v(!0);
      },
      [v]
    ),
    Z = o.useCallback(
      (t) => {
        t.key === " " && v(!1);
      },
      [v]
    );
  x(() => {
    if (!l.current) return;
    l.current.checked !== r && g(l.current.checked);
  }, [l.current]);
  const ce = o.useCallback(
      (t = {}, s = null) => {
        const f = (L) => {
          b && L.preventDefault(), v(!0);
        };
        return {
          ...t,
          ref: s,
          "data-active": a(p),
          "data-hover": a(k),
          "data-checked": a(r),
          "data-focus": a(b),
          "data-focus-visible": a(b && M.current),
          "data-indeterminate": a(u),
          "data-disabled": a(n),
          "data-invalid": a(d),
          "data-readonly": a(m),
          "aria-hidden": !0,
          onMouseDown: c(t.onMouseDown, f),
          onMouseUp: c(t.onMouseUp, () => v(!1)),
          onMouseEnter: c(t.onMouseEnter, () => z(!0)),
          onMouseLeave: c(t.onMouseLeave, () => z(!1)),
        };
      },
      [p, r, n, b, k, u, d, m]
    ),
    le = o.useCallback(
      (t = {}, s = null) => ({
        ...t,
        ref: s,
        "data-active": a(p),
        "data-hover": a(k),
        "data-checked": a(r),
        "data-focus": a(b),
        "data-focus-visible": a(b && M.current),
        "data-indeterminate": a(u),
        "data-disabled": a(n),
        "data-invalid": a(d),
        "data-readonly": a(m),
      }),
      [p, r, n, b, k, u, d, m]
    ),
    fe = o.useCallback(
      (t = {}, s = null) => ({
        ...D,
        ...t,
        ref: _(s, (f) => {
          f && de(f.tagName === "LABEL");
        }),
        onClick: c(t.onClick, () => {
          var f;
          J ||
            ((f = l.current) == null || f.click(),
            requestAnimationFrame(() => {
              var L;
              (L = l.current) == null || L.focus({ preventScroll: !0 });
            }));
        }),
        "data-disabled": a(n),
        "data-checked": a(r),
        "data-invalid": a(d),
      }),
      [D, n, r, d, J]
    ),
    me = o.useCallback(
      (t = {}, s = null) => ({
        ...t,
        ref: _(l, s),
        type: "checkbox",
        name: V,
        value: q,
        id: A,
        tabIndex: W,
        onChange: c(t.onChange, Q),
        onBlur: c(t.onBlur, G, () => C(!1)),
        onFocus: c(t.onFocus, N, () => C(!0)),
        onKeyDown: c(t.onKeyDown, Y),
        onKeyUp: c(t.onKeyUp, Z),
        required: F,
        checked: r,
        disabled: X,
        readOnly: m,
        "aria-label": O,
        "aria-labelledby": j,
        "aria-invalid": S ? !!S : d,
        "aria-describedby": H,
        "aria-disabled": n,
        "aria-checked": u ? "mixed" : r,
        style: De,
      }),
      [V, q, A, W, Q, G, N, Y, Z, F, r, X, m, O, j, S, d, H, n, u]
    ),
    be = o.useCallback(
      (t = {}, s = null) => ({
        ...t,
        ref: s,
        onMouseDown: c(t.onMouseDown, Me),
        "data-disabled": a(n),
        "data-checked": a(r),
        "data-invalid": a(d),
      }),
      [r, n, d]
    );
  return {
    state: {
      isInvalid: d,
      isFocused: b,
      isChecked: r,
      isActive: p,
      isHovered: k,
      isIndeterminate: u,
      isDisabled: n,
      isReadOnly: m,
      isRequired: F,
    },
    getRootProps: fe,
    getCheckboxProps: ce,
    getIndicatorProps: le,
    getInputProps: me,
    getLabelProps: be,
    htmlProps: D,
  };
}
function Me(e) {
  e.preventDefault(), e.stopPropagation();
}
const Be = ({ if: e, with: i, children: n }) =>
  e ? i(n) : $.jsx($.Fragment, { children: n });
export { Be as C, xe as u };
