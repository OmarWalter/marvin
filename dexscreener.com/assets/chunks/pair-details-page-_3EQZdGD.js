const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/chunks/wallets-adapter-DqQpJdCN.js",
      "assets/entries/pages_catch-all.DAV0Q7Rp.js",
      "assets/chunks/preload-helper-D7HrI6pR.js",
      "assets/static/src_presentation_components_nav-link_nav-link-24958f2e.3Tmj03nP.css",
      "assets/static/src_presentation_components_nav-main_nav-main.CYIrF5OT.css",
      "assets/static/src_presentation_components_change-percentage_change-percentage.De5TmJFb.css",
      "assets/static/src_presentation_components_nav-header-icon_nav-header-icon.DfgF_AXH.css",
      "assets/static/src_presentation_pages_app.BoYzLVi2.css",
      "assets/chunks/mainnet-pcXn7qUz.js",
    ])
) => i.map((i) => d[i]);
import { _ as p } from "./preload-helper-D7HrI6pR.js";
import {
  m as o,
  s as m,
  n as t,
  B as l,
  t as n,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
import { D as c, a as e } from "./dex-pair-details-6HTFYaDc.js";
/* empty css                                                               */ /* empty css                                                                      */ /* empty css                                                                                        */ /* empty css                                                                                    */ /* empty css                                                   */ import "./ErrorMessageServerConnection-CfMSYSVn.js";
import "./pair-details-pair-overview-BPl4Wpj7.js";
import "./delayed-DvD_pQl0.js";
import "./wrap-BFhasb9J.js";
import "./index-DPgyYGTA.js";
import "./conditional-wrap-DyHSuxr7.js";
import "./index-z-9Utyvp.js";
import "./dex-search.service-OCdkBXFP.js";
import "./scroll-shade-QMKIYVf5.js";
import "./embed-feature-disabled-modal-_wkgj46S.js";
import "./AMMPairDetailChart-DnziEwmx.js";
import "./dex-log.service-BiStPYRF.js";
import "./useWindowSize-BOT_4j9N.js";
import "./timeout-Bz-kKj_1.js";
import "./price-alerts-button-CgyMWHNC.js";
import "./index-LjMT9bxi.js";
import "./live-time-ago-DQPXgnYx.js";
const d = n(async () => {
    const { WalletsAdapter: i } = await p(async () => {
      const { WalletsAdapter: r } = await import(
        "./wallets-adapter-DqQpJdCN.js"
      );
      return { WalletsAdapter: r };
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
    return { default: i };
  }),
  O = o.memo(({ initialData: i, pairAddress: r, platformId: a }) => {
    const { navWidth: s } = m();
    return t.jsx(l, {
      display: "flex",
      flex: "1",
      height: "100%",
      overflow: "hidden",
      w: { lg: `calc(100vw - ${s}px)` },
      children: t.jsx(
        c,
        {
          initialData: i,
          chainId: a,
          pairAddress: r,
          children: t.jsx(o.Suspense, {
            fallback: t.jsx(e, {}),
            children: t.jsx(d, { children: t.jsx(e, {}) }),
          }),
        },
        `${a}/${r}`
      ),
    });
  });
export { O as PairDetailsPage };
