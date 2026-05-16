import {
  fQ as nt,
  fR as it,
  fS as st,
  fT as at,
  fU as rt,
  fV as Z,
  fW as $,
  fX as ot,
  fY as lt,
  fZ as ut,
  f_ as k,
  f$ as ct,
  g0 as ft,
  g1 as mt,
  g2 as ht,
  g3 as pt,
  g4 as gt,
  g5 as dt,
  g6 as R,
  g7 as yt,
  g8 as At,
  g9 as St,
  ga as Et,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
const Vt = (e, t, n) => {
  const i = t - e;
  return ((((n - e) % i) + i) % i) + e;
};
function q(e, t) {
  return nt(e) ? e[Vt(0, e.length, t)] : e;
}
class vt {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(this.animations.map((t) => t.finished));
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((i) => i.attachTimeline(t));
    return () => {
      n.forEach((i, s) => {
        i && i(), this.animations[s].stop();
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
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return H(this.animations, "duration");
  }
  get iterationDuration() {
    return H(this.animations, "iterationDuration");
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
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
function H(e, t) {
  let n = 0;
  for (let i = 0; i < e.length; i++) {
    const s = e[i][t];
    s !== null && s > n && (n = s);
  }
  return n;
}
class Tt extends vt {
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
}
function Dt(e, t) {
  return e in t;
}
class Mt extends it {
  constructor() {
    super(...arguments), (this.type = "object");
  }
  readValueFromInstance(t, n) {
    if (Dt(n, t)) {
      const i = t[n];
      if (typeof i == "string" || typeof i == "number") return i;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(t, n) {
    delete n.output[t];
  }
  measureInstanceViewportBox() {
    return st();
  }
  build(t, n) {
    Object.assign(t.output, n);
  }
  renderInstance(t, { output: n }) {
    Object.assign(t, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function L(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function J(e, t, n, i) {
  return e == null
    ? []
    : typeof e == "string" && L(t)
    ? at(e, n, i)
    : e instanceof NodeList
    ? Array.from(e)
    : Array.isArray(e)
    ? e.filter((s) => s != null)
    : [e];
}
function bt(e, t, n) {
  return e * (t + 1);
}
function Q(e, t, n, i) {
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : t.startsWith("<")
    ? Math.max(0, n + parseFloat(t.slice(1)))
    : i.get(t) ?? e;
}
function xt(e, t, n) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    s.at > t && s.at < n && (Z(e, s), i--);
  }
}
function Ot(e, t, n, i, s, c) {
  xt(e, s, c);
  for (let a = 0; a < t.length; a++)
    e.push({ value: t[a], at: rt(s, c, i[a]), easing: q(n, a) });
}
function wt(e, t) {
  for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
function Gt(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
const It = "easeInOut",
  Ft = 20;
function Nt(e, { defaultTransition: t = {}, ...n } = {}, i, s) {
  const c = t.duration || 0.3,
    a = new Map(),
    l = new Map(),
    r = {},
    f = new Map();
  let S = 0,
    u = 0,
    N = 0;
  for (let D = 0; D < e.length; D++) {
    const p = e[D];
    if (typeof p == "string") {
      f.set(p, u);
      continue;
    } else if (!Array.isArray(p)) {
      f.set(p.name, Q(u, p.at, S, f));
      continue;
    }
    let [v, g, m = {}] = p;
    m.at !== void 0 && (u = Q(u, m.at, S, f));
    let h = 0;
    const M = (d, b, E, T = 0, x = 0) => {
      const o = Bt(d),
        {
          delay: O = 0,
          times: y = ot(o),
          type: C = t.type || "keyframes",
          repeat: w,
          repeatType: Xt,
          repeatDelay: Ht = 0,
          ...et
        } = b;
      let { ease: V = t.ease || "easeOut", duration: A } = b;
      const W = typeof O == "function" ? O(T, x) : O,
        _ = o.length,
        j = ft(C) ? C : s == null ? void 0 : s[C || "keyframes"];
      if (_ <= 2 && j) {
        let G = 100;
        if (_ === 2 && Ct(o)) {
          const I = o[1] - o[0];
          G = Math.abs(I);
        }
        const B = { ...t, ...et };
        A !== void 0 && (B.duration = mt(A));
        const K = lt(B, G, j);
        (V = K.ease), (A = K.duration);
      }
      A ?? (A = c);
      const P = u + W;
      y.length === 1 && y[0] === 0 && (y[1] = 1);
      const z = y.length - o.length;
      if ((z > 0 && ut(y, z), o.length === 1 && o.unshift(null), w)) {
        k(
          w < Ft,
          "Repeat count too high, must be less than 20",
          "repeat-count-high"
        ),
          (A = bt(A, w));
        const G = [...o],
          B = [...y];
        V = Array.isArray(V) ? [...V] : [V];
        const K = [...V];
        for (let I = 0; I < w; I++) {
          o.push(...G);
          for (let F = 0; F < G.length; F++)
            y.push(B[F] + (I + 1)), V.push(F === 0 ? "linear" : q(K, F - 1));
        }
        wt(y, w);
      }
      const X = P + A;
      Ot(E, o, V, y, P, X), (h = Math.max(W + A, h)), (N = Math.max(X, N));
    };
    if ($(v)) {
      const d = U(v, l);
      M(g, m, Y("default", d));
    } else {
      const d = J(v, g, i, r),
        b = d.length;
      for (let E = 0; E < b; E++) {
        (g = g), (m = m);
        const T = d[E],
          x = U(T, l);
        for (const o in g) M(g[o], Kt(m, o), Y(o, x), E, b);
      }
    }
    (S = u), (u += h);
  }
  return (
    l.forEach((D, p) => {
      for (const v in D) {
        const g = D[v];
        g.sort(Gt);
        const m = [],
          h = [],
          M = [];
        for (let T = 0; T < g.length; T++) {
          const { at: x, value: o, easing: O } = g[T];
          m.push(o), h.push(ct(0, N, x)), M.push(O || "easeOut");
        }
        h[0] !== 0 && (h.unshift(0), m.unshift(m[0]), M.unshift(It)),
          h[h.length - 1] !== 1 && (h.push(1), m.push(null)),
          a.has(p) || a.set(p, { keyframes: {}, transition: {} });
        const d = a.get(p);
        d.keyframes[v] = m;
        const { type: b, ...E } = t;
        d.transition[v] = { ...E, duration: N, ease: M, times: h, ...n };
      }
    }),
    a
  );
}
function U(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Y(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function Bt(e) {
  return Array.isArray(e) ? e : [e];
}
function Kt(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
const Rt = (e) => typeof e == "number",
  Ct = (e) => e.every(Rt);
function Lt(e) {
  const t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = ht(e) && !pt(e) ? new gt(t) : new dt(t);
  n.mount(e), R.set(e, n);
}
function Wt(e) {
  const t = {
      presenceContext: null,
      props: {},
      visualState: { renderState: { output: {} }, latestValues: {} },
    },
    n = new Mt(t);
  n.mount(e), R.set(e, n);
}
function _t(e, t) {
  return $(e) || typeof e == "number" || (typeof e == "string" && !L(t));
}
function tt(e, t, n, i) {
  const s = [];
  if (_t(e, t)) s.push(yt(e, (L(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return s;
    const c = J(e, t, i),
      a = c.length;
    k(!!a, "No valid elements provided.", "no-valid-elements");
    for (let l = 0; l < a; l++) {
      const r = c[l],
        f = r instanceof Element ? Lt : Wt;
      R.has(r) || f(r);
      const S = R.get(r),
        u = { ...n };
      "delay" in u && typeof u.delay == "function" && (u.delay = u.delay(l, a)),
        s.push(...At(S, { ...t, transition: u }, {}));
    }
  }
  return s;
}
function jt(e, t, n) {
  const i = [],
    s = e.map((a) => {
      if (Array.isArray(a) && typeof a[0] == "function") {
        const l = a[0],
          r = St(0);
        return (
          r.on("change", l),
          a.length === 1
            ? [r, [0, 1]]
            : a.length === 2
            ? [r, [0, 1], a[1]]
            : [r, a[1], a[2]]
        );
      }
      return a;
    });
  return (
    Nt(s, t, n, { spring: Et }).forEach(
      ({ keyframes: a, transition: l }, r) => {
        i.push(...tt(r, a, l));
      }
    ),
    i
  );
}
function Pt(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function zt(e = {}) {
  const { scope: t, reduceMotion: n } = e;
  function i(s, c, a) {
    let l = [],
      r;
    if (Pt(s)) l = jt(s, n !== void 0 ? { reduceMotion: n, ...c } : c, t);
    else {
      const { onComplete: S, ...u } = a || {};
      typeof S == "function" && (r = S),
        (l = tt(s, c, n !== void 0 ? { reduceMotion: n, ...u } : u, t));
    }
    const f = new Tt(l);
    return (
      r && f.finished.then(r),
      t &&
        (t.animations.push(f),
        f.finished.then(() => {
          Z(t.animations, f);
        })),
      f
    );
  }
  return i;
}
const Ut = zt();
export { Ut as a, zt as c };
