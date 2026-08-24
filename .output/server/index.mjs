globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { d as FastResponse } from "./_libs/srvx.mjs";




import "./_libs/rou3.mjs";




function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-24T16:01:34.222Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/InstitutionalWebHeader-DiwIWZ-P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-69PtATGaFsCwtlQ4Ns86pd0qA0g"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-DiwIWZ-P.js"
  },
  "/assets/ProductDetailSheet-Bu2GXMgf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-RtcduU44gwZuX4touBNjwbZseos"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-Bu2GXMgf.js"
  },
  "/assets/activities-DF6Oxl8g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-E7BiPUbwD6cL32BbdUYLXdkr1Io"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 1159,
    "path": "../public/assets/activities-DF6Oxl8g.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-DLLNH1Sx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-aNoMwSgRbNb1RZ5CMzJDtJP+y6E"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 315,
    "path": "../public/assets/apple-DLLNH1Sx.js"
  },
  "/assets/arrow-up-right-ChMLLhZR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-EQ1G4ldz7wwrm0nReoQfHIaYXgM"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-ChMLLhZR.js"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"526-6zVsZr6XdQArNr/SYsmqBheO7+0"',
    "mtime": "2026-08-24T16:01:34.222Z",
    "size": 1318,
    "path": "../public/sw.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/auth-CMvKdJzz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9f92-65oyhMmz3fTmB4/vaBDaBo/IIYs"',
    "mtime": "2026-08-24T16:01:30.221Z",
    "size": 40850,
    "path": "../public/assets/auth-CMvKdJzz.js"
  },
  "/assets/building-2-DNcmg-2n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-eOcLlRpTEgmbsUZCgcBzbY/W8eM"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 384,
    "path": "../public/assets/building-2-DNcmg-2n.js"
  },
  "/assets/associado-CeD1uf_X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"734f-lW1ZELy3VY0MR+zKjTTyEb4GdiY"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 29519,
    "path": "../public/assets/associado-CeD1uf_X.js"
  },
  "/assets/check-CQhksRWC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-qHYPP6y7c0ZyRuHhVwsSVA83K1o"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 120,
    "path": "../public/assets/check-CQhksRWC.js"
  },
  "/assets/circle-check-BcwfrOss.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-SIbXGBPst2hwSdtESgBnVW+lDJY"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 174,
    "path": "../public/assets/circle-check-BcwfrOss.js"
  },
  "/assets/circle-x-IpLe4o92.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-HmvFcffkiDWxv/8Kc0pPe1W/NuE"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 405,
    "path": "../public/assets/circle-x-IpLe4o92.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T16:01:30.217Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/contato-Tkwnqu3f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-IaBynOb7g4OHMppgS7d8tTerV7Q"',
    "mtime": "2026-08-24T16:01:30.221Z",
    "size": 8068,
    "path": "../public/assets/contato-Tkwnqu3f.js"
  },
  "/assets/credit-card-CbYPloEk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-xA3b2jxKihRUDET08hEeSDGM7Ec"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 208,
    "path": "../public/assets/credit-card-CbYPloEk.js"
  },
  "/assets/download-DbqRsSui.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-GpIxtx6dic1CRqc6fiurJqBJc64"',
    "mtime": "2026-08-24T16:01:30.221Z",
    "size": 8305,
    "path": "../public/assets/download-DbqRsSui.js"
  },
  "/assets/dumbbell-BnZ4bMJL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-9LpJLixl9eRG/EhKsClqPptYXfA"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BnZ4bMJL.js"
  },
  "/assets/eye-EH2d5v0K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-yOji7ub5lHG5NFCfXddPQjXil1Y"',
    "mtime": "2026-08-24T16:01:30.221Z",
    "size": 252,
    "path": "../public/assets/eye-EH2d5v0K.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-BoQAwZ3y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"814e5-SgNhCOj65pCBMqabfZbyxT5vLLk"',
    "mtime": "2026-08-24T16:01:30.224Z",
    "size": 529637,
    "path": "../public/assets/admin-BoQAwZ3y.js"
  },
  "/assets/faq-D9CWULiB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-sD12kbPpCmscqOiV+ObQY2FKPCw"',
    "mtime": "2026-08-24T16:01:30.221Z",
    "size": 8169,
    "path": "../public/assets/faq-D9CWULiB.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T16:01:30.217Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-BV4haChf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-q1l9+UItdecnflEVG4Ym8eQARCg"',
    "mtime": "2026-08-24T16:01:30.221Z",
    "size": 350,
    "path": "../public/assets/gift-BV4haChf.js"
  },
  "/assets/heart-K_5-1fTe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-sTY7CiovirhhfDNGtOML6McyNl0"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 259,
    "path": "../public/assets/heart-K_5-1fTe.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/home-DPD-de2_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-STPDBQUTwrCwLD7HbIGRtzXRHLg"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 11065,
    "path": "../public/assets/home-DPD-de2_.js"
  },
  "/assets/index-B35B3-cn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6849b-FoDL44UqiodjtpghgScjShkpcbI"',
    "mtime": "2026-08-24T16:01:30.220Z",
    "size": 427163,
    "path": "../public/assets/index-B35B3-cn.js"
  },
  "/assets/link-2-Bwtd19XQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-qv0AB7xLKb20ef0OXwDs+XuQJyA"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 243,
    "path": "../public/assets/link-2-Bwtd19XQ.js"
  },
  "/assets/lock-CDPrPhCc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-eJfJ6IgukeWObNhJXlzux4s0Bks"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 202,
    "path": "../public/assets/lock-CDPrPhCc.js"
  },
  "/assets/mail-CasIzAGy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-31yhZRduL9+dwcZMCeweNYcdw30"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 214,
    "path": "../public/assets/mail-CasIzAGy.js"
  },
  "/assets/map-pin-DCmDJCIs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-/62pKynqHEmQYdVzjDE2Uv9flMA"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 255,
    "path": "../public/assets/map-pin-DCmDJCIs.js"
  },
  "/assets/market-hlodg7Vi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-cMmB0dGVqMxZc+MgH92A9wNyBBg"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 26518,
    "path": "../public/assets/market-hlodg7Vi.js"
  },
  "/assets/levels-CoK-PBtv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-gy1oq2KR2dMlxnUxbAEFnUoxRcI"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 6864,
    "path": "../public/assets/levels-CoK-PBtv.js"
  },
  "/assets/index-DFJ_arEY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-NzXO94PQ7Z/ex4XGt2pgVebW1D4"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 58579,
    "path": "../public/assets/index-DFJ_arEY.js"
  },
  "/assets/operational-params-store-CLixytzW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-0+myx69PPjAQAO8HNfpF7+21LPQ"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-CLixytzW.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-Br4zBNm-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fad-gcFAR2jKFL7UnkE8ihhS1GF8fFY"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 24493,
    "path": "../public/assets/parceiros-Br4zBNm-.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T16:01:34.231Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T16:01:30.223Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T16:01:34.233Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-BlFWq7rh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-tXK7+KQ5caMJzHLMp6vRKKS1UqA"',
    "mtime": "2026-08-24T16:01:30.220Z",
    "size": 646,
    "path": "../public/assets/percent-BlFWq7rh.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T16:01:30.217Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T16:01:30.217Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T16:01:30.217Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-C0KeXAMr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13268-l9qoizHcwqS01E+3TODetabHuTU"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 78440,
    "path": "../public/assets/profile-C0KeXAMr.js"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-24T16:01:30.217Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T16:01:30.217Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T16:01:34.235Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T16:01:30.226Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T16:01:30.217Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T16:01:30.218Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-CmebOfAb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-I3t7/714TcRvoqAKm8IFliM5LLc"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 410,
    "path": "../public/assets/save-CmebOfAb.js"
  },
  "/assets/search-DYCtd1Xc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-z2qBWHEEXpgg6evoc51P/nMfn+A"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 170,
    "path": "../public/assets/search-DYCtd1Xc.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T16:01:30.225Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/shield-check-C1COCPpz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-moECY9AMHCT81wli9yOTEMtOupY"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 316,
    "path": "../public/assets/shield-check-C1COCPpz.js"
  },
  "/assets/share-2-Bh1CqlOL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-l9PNFQTwPltxl4EAeRNj5rz48l0"',
    "mtime": "2026-08-24T16:01:30.220Z",
    "size": 353,
    "path": "../public/assets/share-2-Bh1CqlOL.js"
  },
  "/assets/styles-C77-bgPW.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23e0e-ygCqVWQ58QI7mzouCK0nLqKnfuc"',
    "mtime": "2026-08-24T16:01:30.219Z",
    "size": 146958,
    "path": "../public/assets/styles-C77-bgPW.css"
  },
  "/assets/truck-DYfEqqdm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-HEwna8AchNnMScwH0VPE+d796Qg"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 1109,
    "path": "../public/assets/truck-DYfEqqdm.js"
  },
  "/assets/user-plus-fav92Wvn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ee-Bhcj/aBEoZsdAy6v1MvFJ+C/JKQ"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 494,
    "path": "../public/assets/user-plus-fav92Wvn.js"
  },
  "/assets/user-D7RvDdjf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d7-ZPxvI6mMWSy8yJvVGFiEFaFSqxw"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 471,
    "path": "../public/assets/user-D7RvDdjf.js"
  },
  "/assets/users-R4Kbkmq7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-32iHc2UyPQ/4dWvy/b8zZxi3hZ4"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 307,
    "path": "../public/assets/users-R4Kbkmq7.js"
  },
  "/assets/wallet-DnQV9c_u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-11GQJN5z375xQp9bI5vHUKxeCZs"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 5150,
    "path": "../public/assets/wallet-DnQV9c_u.js"
  },
  "/assets/zap-N4t5hf7O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-oeQ+7flmNW/VfLVn2oc49i4zRnM"',
    "mtime": "2026-08-24T16:01:30.222Z",
    "size": 263,
    "path": "../public/assets/zap-N4t5hf7O.js"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_v9cBoz = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_v9cBoz };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
