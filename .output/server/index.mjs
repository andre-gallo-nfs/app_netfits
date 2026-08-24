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
    "mtime": "2026-08-24T20:30:14.386Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T20:30:14.386Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-DRxG87XR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-hgNdBs05zCzznWt2P/DHPKtJf80"',
    "mtime": "2026-08-24T20:30:07.379Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-DRxG87XR.js"
  },
  "/assets/ProductDetailSheet-gFLpONQZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-A4kcHeGTM13ZbOWHqIpxOlPZ1Fc"',
    "mtime": "2026-08-24T20:30:07.377Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-gFLpONQZ.js"
  },
  "/assets/activities-D5EGpO1g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-2umM3DyvSKnOhx0UkFWAlH++hYw"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 1196,
    "path": "../public/assets/activities-D5EGpO1g.js"
  },
  "/assets/apple-CMp_Q_yJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-ft+FRy53tTBKOkCz+oRP5P7C1lA"',
    "mtime": "2026-08-24T20:30:07.378Z",
    "size": 315,
    "path": "../public/assets/apple-CMp_Q_yJ.js"
  },
  "/assets/arrow-up-right-CDn8Qe8r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-ayDuiE+5JHy0mSQlWy3loTDz0Yg"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CDn8Qe8r.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/associado-CtBqNaX5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"742d-b6yyDfw/i7o9GroJBO4u4l67JdE"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 29741,
    "path": "../public/assets/associado-CtBqNaX5.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/building-2-C2OZ2wZL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-9zIwAxkh2kS0Z0yxu9xUxS3h234"',
    "mtime": "2026-08-24T20:30:07.379Z",
    "size": 384,
    "path": "../public/assets/building-2-C2OZ2wZL.js"
  },
  "/assets/check-DPltXMSr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-ZB1WrBGA72uo4d4lvGi4+skN8RM"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 120,
    "path": "../public/assets/check-DPltXMSr.js"
  },
  "/assets/auth-kHB8gL9c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a182-cjVf6wHVXS+FUDQP3dMpJHaOtTM"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 41346,
    "path": "../public/assets/auth-kHB8gL9c.js"
  },
  "/assets/circle-check-DAiiFNtC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-wqFF8qW9mgRhHPKeR/V6dBcqNy4"',
    "mtime": "2026-08-24T20:30:07.379Z",
    "size": 174,
    "path": "../public/assets/circle-check-DAiiFNtC.js"
  },
  "/assets/circle-x-BI_xCR76.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-afFiwAN/gUaRMQuQo1P+FSDbsuc"',
    "mtime": "2026-08-24T20:30:07.378Z",
    "size": 405,
    "path": "../public/assets/circle-x-BI_xCR76.js"
  },
  "/assets/contato-DHO5Ehdq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-ArXjanKG79erlC9e34VyNGhpVXo"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 8068,
    "path": "../public/assets/contato-DHO5Ehdq.js"
  },
  "/assets/credit-card-DZ_GnqR2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-+SX6ZgSU5KNzB9b7cRSbnW27pbI"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 208,
    "path": "../public/assets/credit-card-DZ_GnqR2.js"
  },
  "/assets/download-gw-l00Jx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-XCr1lx8Et16nEx0G6tVgCko+Py8"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 8305,
    "path": "../public/assets/download-gw-l00Jx.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-DdFw4t5M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-MM1FAdYFvqZsa7TqBPIU08ru3X4"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 561,
    "path": "../public/assets/dumbbell-DdFw4t5M.js"
  },
  "/assets/eye-CVi6WCcR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-cxABaA6cO5D3R1R2sB0yip2a0CQ"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 252,
    "path": "../public/assets/eye-CVi6WCcR.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-ATD7W1V8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f79-BfbRt2fOAJ+RdpHUwWSt5WwwOL4"',
    "mtime": "2026-08-24T20:30:07.383Z",
    "size": 540537,
    "path": "../public/assets/admin-ATD7W1V8.js"
  },
  "/assets/faq-BOOY0Vt1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-Zt9quRnhIM1d1FyVPYKOJYMjRdo"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 8169,
    "path": "../public/assets/faq-BOOY0Vt1.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T20:30:07.369Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T20:30:07.377Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T20:30:07.369Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T20:30:07.369Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-C6F8yl7P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-1uFkZpWwOle1roSxkdY1+5uK3fY"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 350,
    "path": "../public/assets/gift-C6F8yl7P.js"
  },
  "/assets/heart-C-0nP91f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-2MCO0LTpQfNYE6WO+4Zquv4BlCY"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 259,
    "path": "../public/assets/heart-C-0nP91f.js"
  },
  "/assets/home-Dglkg-Ub.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-Y8pD+342qkR/t5h4LRavVvbDN5c"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 11065,
    "path": "../public/assets/home-Dglkg-Ub.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/index-BBJ_FYEh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-mrIO1PWOCCcuWBrWJ5cVDZWW1Z8"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 58579,
    "path": "../public/assets/index-BBJ_FYEh.js"
  },
  "/assets/levels-BILFl6T-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-/tGPRPJEKXra3wY9AVP+bOoVnqg"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 6864,
    "path": "../public/assets/levels-BILFl6T-.js"
  },
  "/assets/link-2-Cyc85_CU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-O1Xwgmei3wMRDJXnAjinYwVArTk"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 243,
    "path": "../public/assets/link-2-Cyc85_CU.js"
  },
  "/assets/lock-DHlUzP44.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-LXpggZum1DOaVqIQMCs04j7VzEs"',
    "mtime": "2026-08-24T20:30:07.379Z",
    "size": 202,
    "path": "../public/assets/lock-DHlUzP44.js"
  },
  "/assets/log-in-C5YXJndH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-M3N50meYT7llRoS23v7p20l8Lws"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 232,
    "path": "../public/assets/log-in-C5YXJndH.js"
  },
  "/assets/mail-D9X9DvVk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-nhKx/iDyQ370Ve7nanOHb4+d+iI"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 214,
    "path": "../public/assets/mail-D9X9DvVk.js"
  },
  "/assets/map-pin-77nMRDSL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-Qxl9O0Oc16RulvjQpwVU+vudVac"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 255,
    "path": "../public/assets/map-pin-77nMRDSL.js"
  },
  "/assets/market-C_oa_XXh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-dSDhIFVr8SB6gLrmj4+bShkMO/0"',
    "mtime": "2026-08-24T20:30:07.377Z",
    "size": 26557,
    "path": "../public/assets/market-C_oa_XXh.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-B3hldIPC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"694eb-hyNEASTXGcedueINUI/C/YxYJg4"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 431339,
    "path": "../public/assets/index-B3hldIPC.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:30:14.392Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:30:07.382Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T20:30:14.395Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/parceiros-fq7yGx1k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b5-NZBpYUzzwaNNP5VR9mBatVt2Ndk"',
    "mtime": "2026-08-24T20:30:07.378Z",
    "size": 25781,
    "path": "../public/assets/parceiros-fq7yGx1k.js"
  },
  "/assets/percent-Bc0aEnDX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-TETXSmbUfBcNGXMoDoCZvoV5vPU"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 646,
    "path": "../public/assets/percent-Bc0aEnDX.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T20:30:07.369Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T20:30:07.369Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/profile-h5GuLPzL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7390-A+zmPzAj5JN/Uxw49HC3LIdE78g"',
    "mtime": "2026-08-24T20:30:07.379Z",
    "size": 29584,
    "path": "../public/assets/profile-h5GuLPzL.js"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:30:14.396Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:30:07.385Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/save-rloD-YvU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-UGnbo98u2o+1KJyampAaKsxjrwQ"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 410,
    "path": "../public/assets/save-rloD-YvU.js"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T20:30:07.370Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/search-DFz1LJZz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-0Jg7HJNF8BCCXCktpn4HgFv1+wk"',
    "mtime": "2026-08-24T20:30:07.379Z",
    "size": 170,
    "path": "../public/assets/search-DFz1LJZz.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T20:30:07.384Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/share-2-DSa6xa5A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-tXa422L9annnuqYnGrhfQplWFAk"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 353,
    "path": "../public/assets/share-2-DSa6xa5A.js"
  },
  "/assets/shield-check-DqY1lqIb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-CNAOEJQIj18SKzDH8ZkPsLVeZX8"',
    "mtime": "2026-08-24T20:30:07.379Z",
    "size": 316,
    "path": "../public/assets/shield-check-DqY1lqIb.js"
  },
  "/assets/styles-COYd2nln.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"241c3-xxpNkS7dW4Fyd9VZrLVTxPc39nA"',
    "mtime": "2026-08-24T20:30:07.371Z",
    "size": 147907,
    "path": "../public/assets/styles-COYd2nln.css"
  },
  "/assets/truck-C0zTXn8Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-uwqNEWhiWv0d3DEuiGk64aEXjWA"',
    "mtime": "2026-08-24T20:30:07.378Z",
    "size": 1109,
    "path": "../public/assets/truck-C0zTXn8Z.js"
  },
  "/assets/user-plus-DElkJBD-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-tmvzHrtqTpZHLy9z7MQbZ15cwrU"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 585,
    "path": "../public/assets/user-plus-DElkJBD-.js"
  },
  "/assets/users-BNTBSDc4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-Jn6juQKls7aU6q7cPJd9OKHUA2w"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 307,
    "path": "../public/assets/users-BNTBSDc4.js"
  },
  "/assets/wallet-1kET5bgL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-aInrpzm9wCeTApvjmI8k65T8OXg"',
    "mtime": "2026-08-24T20:30:07.380Z",
    "size": 5844,
    "path": "../public/assets/wallet-1kET5bgL.js"
  },
  "/assets/zap-Ma1lZuN0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-scYAsULn6bxh5hF0o/uYDAFAkYM"',
    "mtime": "2026-08-24T20:30:07.377Z",
    "size": 263,
    "path": "../public/assets/zap-Ma1lZuN0.js"
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
