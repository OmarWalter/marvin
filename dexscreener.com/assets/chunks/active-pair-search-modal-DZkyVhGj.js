import {
  bi as i,
  bj as s,
  bk as n,
  m as l,
  n as r,
  aP as h,
} from "../entries/pages_catch-all.DAV0Q7Rp.js";
import { C as m } from "./controlled-pair-search-modal-CL4P6aIP.js";
import "./preload-helper-D7HrI6pR.js";
/* empty css                                                               */ /* empty css                                                                      */ /* empty css                                                                                        */ /* empty css                                                                                    */ /* empty css                                                   */ import "./dex-search.service-OCdkBXFP.js";
import "./scroll-shade-QMKIYVf5.js";
import "./index-z-9Utyvp.js";
import "./embed-feature-disabled-modal-_wkgj46S.js";
import "./index-DPgyYGTA.js";
import "./ErrorMessageServerConnection-CfMSYSVn.js";
const p = () => {
    const t = i(),
      e = s(),
      a = n(),
      o = l.useCallback(
        (c) => {
          e(c);
        },
        [e]
      );
    return { close: t, activeSearch: a, onChange: o };
  },
  V = () => {
    const { close: t, activeSearch: e, onChange: a } = p();
    if (!e) return null;
    const o = `DEX Screener - Search${e.query === "" ? "" : ` "${e.query}"`}`;
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx(h, { location: "ActivePairSearchModal", children: o }),
        r.jsx(m, { onClose: t, searchValue: e, onSearchValueChange: a }),
      ],
    });
  };
export { V as ActivePairSearchModal };
