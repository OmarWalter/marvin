import {
  ea as l,
  eb as n,
  ec as t,
  ed as A,
  ee as e,
  ef as c,
  eg as x,
  df as S,
  eh as y,
  ei as E,
  a3 as U,
  a0 as L,
  b9 as w,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
const P = e.object({
    buys: e.number(),
    sells: e.number(),
    volumeUsdBuy: e.number(),
    volumeUsdSell: e.number(),
    amountBuy: e.string(),
    amountSell: e.string(),
    balanceAmount: e.string().nullable(),
    balancePercentage: e.number().nullable(),
    firstSwap: e.number(),
    new: e.boolean(),
  }),
  k = l({
    buys: n(),
    sells: n(),
    volumeUsdBuy: n(),
    volumeUsdSell: n(),
    amountBuy: t(),
    amountSell: t(),
    balanceAmount: t().nullable(),
    balancePercentage: n().nullable(),
    firstSwap: n(),
    new: A(),
  }),
  f = e.object({
    logType: e.literal("swap"),
    blockNumber: e.number(),
    blockTimestamp: e.number(),
    txnHash: e.string(),
    maker: e.string().optional(),
    makerScreener: P.optional(),
    logIndex: e.number(),
    txnType: e.literal("buy").or(e.literal("sell")),
    priceUsd: e.string().optional(),
    priceNative: e.string().optional(),
    volumeUsd: e.string().optional(),
    amount0: e.string(),
    amount1: e.string(),
  }),
  _ = f.extend({ metadata: e.record(e.string(), e.string()).optional() }),
  T = l({
    logType: c("swap"),
    blockNumber: n(),
    blockTimestamp: n(),
    txnHash: t(),
    maker: t().optional(),
    makerScreener: k.optional(),
    logIndex: n(),
    txnType: c("buy").or(c("sell")),
    priceUsd: t().optional(),
    volumeUsd: t().optional(),
    amount0: t(),
    amount1: t(),
  }),
  R = l({
    logType: c("swap"),
    blockNumber: n(),
    blockTimestamp: n(),
    txnHash: t(),
    maker: t().optional(),
    makerScreener: k.optional(),
    logIndex: n(),
    txnType: c("buy").or(c("sell")),
    priceUsd: t().optional(),
    priceNative: t().optional(),
    volumeUsd: t().optional(),
    amount0: t(),
    amount1: t(),
  }),
  V = T.extend({ metadata: x(t(), t()).optional() }),
  $ = R.extend({ metadata: x(t(), t()).optional() }),
  I = e.object({
    logType: e.literal("add").or(e.literal("remove")),
    blockNumber: e.number(),
    blockTimestamp: e.number(),
    txnHash: e.string(),
    maker: e.string().optional(),
    makerScreener: P.optional(),
    logIndex: e.number(),
    amount0: e.string(),
    amount1: e.string(),
  }),
  v = l({
    logType: c("add").or(c("remove")),
    blockNumber: n(),
    blockTimestamp: n(),
    txnHash: t(),
    maker: t().optional(),
    makerScreener: k.optional(),
    logIndex: n(),
    amount0: t(),
    amount1: t(),
  }),
  C = T.or(v),
  j = _.or(I),
  M = V.or(v),
  D = $.or(v);
l({
  schemaVersion: t(),
  baseTokenSymbol: t().optional(),
  quoteTokenSymbol: t().optional(),
  logs: S(C).nullable(),
});
l({ logs: S(M).nullable() });
const B = e.object({ logs: y(j).nullable() }),
  O = l({ logs: S(D).nullable() }),
  q = e.object({
    firstBlockTimestamp: e.date(),
    maker: e.string(),
    buys: e.number(),
    sells: e.number(),
    volumeUsdBuy: e.number(),
    volumeUsdSell: e.number(),
    amountBuy: e.string(),
    amountSell: e.string(),
    pnl: e.number(),
    balanceAmount: e.string().nullable(),
    balancePercentage: e.number().nullable(),
  }),
  H = l({
    firstBlockTimestamp: E(),
    maker: t(),
    buys: n(),
    sells: n(),
    volumeUsdBuy: n(),
    volumeUsdSell: n(),
    amountBuy: t(),
    amountSell: t(),
    pnl: n(),
    balanceAmount: t().nullable(),
    balancePercentage: n().nullable(),
  }),
  W = y(q),
  N = S(H),
  X = e.object({
    maker: e.string(),
    buys: e.number(),
    sells: e.number(),
    volumeUsdBuy: e.number(),
    volumeUsdSell: e.number(),
    amountBuy: e.string(),
    amountSell: e.string(),
    balanceAmount: e.string().nullable(),
    balancePercentage: e.number().nullable(),
    firstSwap: e.number(),
    lastSwap: e.number(),
  });
l({
  maker: t(),
  buys: n(),
  sells: n(),
  volumeUsdBuy: n(),
  volumeUsdSell: n(),
  amountBuy: t(),
  amountSell: t(),
  balanceAmount: t().nullable(),
  balancePercentage: n().nullable(),
  firstSwap: n(),
  lastSwap: n(),
});
const G = X.extend({
    label: e.string().optional(),
    url: e.string().optional(),
  }),
  F = l({
    maker: t(),
    label: t().optional(),
    url: t().optional(),
    buys: n(),
    sells: n(),
    volumeUsdBuy: n(),
    volumeUsdSell: n(),
    amountBuy: t(),
    amountSell: t(),
    balanceAmount: t().nullable(),
    balancePercentage: n().nullable(),
    firstSwap: n(),
    lastSwap: n(),
  }),
  z = y(G),
  J = S(F),
  K = U(L(), (r) => {
    const u = {
        format: "json",
        endpoints: { root: `${r.DS_DEX_LOG_UNISWAP_HOST}/dex/log/uniswap` },
      },
      g = {
        format: "json",
        endpoints: { root: `${r.DS_DEX_LOG_BALANCER_HOST}/dex/balancer/log` },
      },
      h = {
        format: "json",
        endpoints: { root: `${r.DS_DEX_LOG_OSMOSIS_HOST}/dex/osmosis/log` },
      },
      d = {
        all: {
          endpoints: { root: `${r.DS_DEX_FEED_PUBLIC_URL}/dex/log/amm/v4` },
        },
        top: {
          endpoints: { root: `${r.DS_DEX_FEED_PUBLIC_URL}/dex/log/amm/v5` },
        },
        snipers: {
          endpoints: { root: `${r.DS_DEX_LOG_AMM_HOST}/dex/log/amm/v1` },
        },
      };
    return {
      get(o, a = "all") {
        return o.c === "u"
          ? { ...u, route: "all" }
          : o.c === "b"
          ? { ...g, route: "logs" }
          : o.c === "o"
          ? { ...h, route: "logs" }
          : {
              ...d[a],
              route: a,
              endpoints: {
                root: `${d[a].endpoints.root}/${o.c === "a" ? o.a : ""}`,
              },
            };
      },
    };
  }),
  Y = U(K, w, (r, u) => {
    const g = ({
        pair: o,
        filters: a,
        isInverted: m,
        beforeBlockNumber: b,
        afterBlockNumber: i,
      }) => {
        const p = r.get(o, "all"),
          s = new URL(
            `${p.endpoints.root}/${p.route}/${o.chainId}/${encodeURIComponent(
              o.pairAddress
            )}`
          );
        return (
          b && s.searchParams.set("bbn", b.toString()),
          i && s.searchParams.set("abn", i.toString()),
          o.quoteToken.address && s.searchParams.set("q", o.quoteToken.address),
          m && s.searchParams.set("i", "1"),
          a.type && s.searchParams.set("ft", a.type),
          a.amountUsd.min &&
            s.searchParams.set("vumi", a.amountUsd.min.toString()),
          a.amountUsd.max &&
            s.searchParams.set("vuma", a.amountUsd.max.toString()),
          a.amount0.min && s.searchParams.set("a0mi", a.amount0.min.toString()),
          a.amount0.max && s.searchParams.set("a0ma", a.amount0.max.toString()),
          a.amount1.min && s.searchParams.set("a1mi", a.amount1.min.toString()),
          a.amount1.max && s.searchParams.set("a1ma", a.amount1.max.toString()),
          a.timestamp.min &&
            s.searchParams.set("tss", a.timestamp.min.toString()),
          a.timestamp.max &&
            s.searchParams.set("tse", a.timestamp.max.toString()),
          a.maker && s.searchParams.set("m", a.maker),
          s.searchParams.set("c", "1"),
          s
        );
      },
      h = ({ pair: o, sortBy: a, maxDaysAgo: m, kols: b, launchpadId: i }) => {
        const p = r.get(o, "top"),
          s = new URL(
            `${p.endpoints.root}/top/${o.chainId}/${encodeURIComponent(
              o.pairAddress
            )}`
          );
        return (
          o.quoteToken.address && s.searchParams.set("q", o.quoteToken.address),
          m && s.searchParams.set("mda", m.toString()),
          a && a.type && s.searchParams.set("s", a.type),
          a && a.direction && s.searchParams.set("sd", a.direction),
          b && s.searchParams.set("k", "1"),
          i && s.searchParams.set("lpId", i),
          s
        );
      },
      d = ({ pair: o }) => {
        const a = r.get(o, "snipers"),
          m = new URL(
            `${a.endpoints.root}/snipers/${o.chainId}/${encodeURIComponent(
              o.pairAddress
            )}`
          );
        return (
          o.quoteToken.address && m.searchParams.set("q", o.quoteToken.address),
          m
        );
      };
    return {
      getServer: (o) => r.get(o),
      getLogs: async (o) => {
        const a = g(o).toString();
        return r.get(o.pair).format === "json"
          ? u.get(a.toString(), B)
          : u.avro(a.toString(), O);
      },
      getTopMakers: async (o) => {
        const a = h(o);
        return r.get(o.pair).format === "json"
          ? u.get(a.toString(), z)
          : u.avro(a.toString(), J);
      },
      getSnipers: async (o) => {
        const a = d(o);
        return r.get(o.pair).format === "json"
          ? u.get(a.toString(), W)
          : u.avro(a.toString(), N);
      },
    };
  });
export { Y as a, D as d };
