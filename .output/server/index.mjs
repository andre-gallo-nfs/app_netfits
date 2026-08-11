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
    "mtime": "2026-08-11T19:37:31.451Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"526-6zVsZr6XdQArNr/SYsmqBheO7+0"',
    "mtime": "2026-08-11T19:37:31.452Z",
    "size": 1318,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-C5K3S9GH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"497e-Z8FNVp88X9OTipSHkJZr9VWEfPU"',
    "mtime": "2026-08-11T19:37:26.391Z",
    "size": 18814,
    "path": "../public/assets/ProductDetailSheet-C5K3S9GH.js"
  },
  "/assets/heart-BqnkLZvN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-iSQmKBRC7gge28DTp596O9u+8FI"',
    "mtime": "2026-08-11T19:37:26.400Z",
    "size": 259,
    "path": "../public/assets/heart-BqnkLZvN.js"
  },
  "/assets/lock-B2CDNjnR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-0chFsibnf7zxeGNuaAGazIsALQ0"',
    "mtime": "2026-08-11T19:37:26.400Z",
    "size": 202,
    "path": "../public/assets/lock-B2CDNjnR.js"
  },
  "/assets/shield-check-DJY7Fa71.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-6/3W152Dw4eiDahXwNdOsWRQjFU"',
    "mtime": "2026-08-11T19:37:26.399Z",
    "size": 316,
    "path": "../public/assets/shield-check-DJY7Fa71.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-11T19:37:26.401Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/save-D8QJRv4l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-SxT4l2cyVmttGpwyGM8IgbhmjvI"',
    "mtime": "2026-08-11T19:37:26.396Z",
    "size": 410,
    "path": "../public/assets/save-D8QJRv4l.js"
  },
  "/assets/circle-check-VmrcqvTb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-XgwyuKM6yIrqjroteHEbKQwrbs0"',
    "mtime": "2026-08-11T19:37:26.400Z",
    "size": 174,
    "path": "../public/assets/circle-check-VmrcqvTb.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-11T19:37:26.394Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-11T19:37:26.392Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/auth-XES5rDdd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9754-g3JiEOoQoDDSMkKC0Gvd6MKI9RM"',
    "mtime": "2026-08-11T19:37:26.390Z",
    "size": 38740,
    "path": "../public/assets/auth-XES5rDdd.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-11T19:37:26.402Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-11T19:37:26.398Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/associado-DZ0O1c-b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"634a-VnZtYFArPRxzz4SKV0rqC0gHW3o"',
    "mtime": "2026-08-11T19:37:26.381Z",
    "size": 25418,
    "path": "../public/assets/associado-DZ0O1c-b.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-11T19:37:26.402Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-BvX1xjej.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"db97-nZMW518EQz7iG6Z2RWkncEDpLoE"',
    "mtime": "2026-08-11T19:37:26.392Z",
    "size": 56215,
    "path": "../public/assets/index-BvX1xjej.js"
  },
  "/assets/users-DZAgPlb2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-yD5twMQQyHJzcPkHQoMJEDqhoe4"',
    "mtime": "2026-08-11T19:37:26.398Z",
    "size": 307,
    "path": "../public/assets/users-DZAgPlb2.js"
  },
  "/assets/styles-Diw3HvNG.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"1d76a-wpAqBbAuOHCTQ/jqUaRBA+l8S9U"',
    "mtime": "2026-08-11T19:37:26.400Z",
    "size": 120682,
    "path": "../public/assets/styles-Diw3HvNG.css"
  },
  "/assets/user-DH54cm9S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"439-z1SOOecD+5Pbv1dkAD8Xx4O9cXY"',
    "mtime": "2026-08-11T19:37:26.400Z",
    "size": 1081,
    "path": "../public/assets/user-DH54cm9S.js"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-11T19:37:26.410Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-11T19:37:26.392Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-11T19:37:26.399Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/index-zTQPyAsa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"61d25-AheByxjvETJsTc5b4R+mqDEOabM"',
    "mtime": "2026-08-11T19:37:26.391Z",
    "size": 400677,
    "path": "../public/assets/index-zTQPyAsa.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-11T19:37:26.401Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-11T19:37:26.395Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/profile-D3FP2pbA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133f1-BMEx0WiZbznuSsDORUn7/mrk2Wo"',
    "mtime": "2026-08-11T19:37:26.400Z",
    "size": 78833,
    "path": "../public/assets/profile-D3FP2pbA.js"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-11T19:37:26.401Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/market-Dm224u0r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67c9-gGUqNQRFzzufCi3tZx6mIPJFfCg"',
    "mtime": "2026-08-11T19:37:26.385Z",
    "size": 26569,
    "path": "../public/assets/market-Dm224u0r.js"
  },
  "/assets/check-BPulYPHV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-LbdRXrsLOwEIqUF2+nI8EpXIUEA"',
    "mtime": "2026-08-11T19:37:26.401Z",
    "size": 120,
    "path": "../public/assets/check-BPulYPHV.js"
  },
  "/assets/activities-HaFN1Yzk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-GDc2pyjgFJnGqKIUFP3tfGheA+Q"',
    "mtime": "2026-08-11T19:37:26.399Z",
    "size": 1159,
    "path": "../public/assets/activities-HaFN1Yzk.js"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-11T19:37:26.400Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/eye-CVgvGJSb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-ZnnM6tee3TQCAXNX3GXA/tgW82U"',
    "mtime": "2026-08-11T19:37:26.394Z",
    "size": 252,
    "path": "../public/assets/eye-CVgvGJSb.js"
  },
  "/assets/zap-B4k9Qww7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"52b-1EvIVaHJV8PjdthfAgCZuDuoEXw"',
    "mtime": "2026-08-11T19:37:26.393Z",
    "size": 1323,
    "path": "../public/assets/zap-B4k9Qww7.js"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-11T19:37:26.402Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-11T19:37:26.402Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-11T19:37:26.393Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-11T19:37:26.396Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/copy-CY21Bjel.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-Sv1MrYQyL+h4B15FEmh7ZoPMEvQ"',
    "mtime": "2026-08-11T19:37:26.394Z",
    "size": 232,
    "path": "../public/assets/copy-CY21Bjel.js"
  },
  "/assets/gift-Cp7Wtyph.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-vIUPwcM/DQoFG/I8kKTUks4vC7A"',
    "mtime": "2026-08-11T19:37:26.393Z",
    "size": 350,
    "path": "../public/assets/gift-Cp7Wtyph.js"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-11T19:37:26.395Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/levels-DGaomtNx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1aad-w0bZC3I6//okVVdNP5DSp6JrUIM"',
    "mtime": "2026-08-11T19:37:26.392Z",
    "size": 6829,
    "path": "../public/assets/levels-DGaomtNx.js"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-11T19:37:26.393Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-11T19:37:26.411Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-mark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-11T19:37:26.379Z",
    "size": 662919,
    "path": "../public/assets/netfits-mark-D0RtFoJs.png"
  },
  "/assets/arrow-up-right-Ck5m9nWy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-utcCOyVNVUERZTDLii51gF+ctZM"',
    "mtime": "2026-08-11T19:37:26.391Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Ck5m9nWy.js"
  },
  "/assets/percent-DJc8UAFC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"33e-wUw2apQYyyvFjO9l/3QfNIiJdf0"',
    "mtime": "2026-08-11T19:37:26.392Z",
    "size": 830,
    "path": "../public/assets/percent-DJc8UAFC.js"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-11T19:37:26.402Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/share-2-Df0xs4tZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-u861Es4IFBwziR4KnQgNdGh5Qrk"',
    "mtime": "2026-08-11T19:37:26.390Z",
    "size": 353,
    "path": "../public/assets/share-2-Df0xs4tZ.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-11T19:37:26.411Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-11T19:37:26.398Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/netfits-logo-DjUMognO.png": {
    "type": "image/png",
    "etag": '"aaf84-b1gDV0yzuLurVIakqsvTIqFrewY"',
    "mtime": "2026-08-11T19:37:26.382Z",
    "size": 700292,
    "path": "../public/assets/netfits-logo-DjUMognO.png"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-11T19:37:26.401Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/map-pin-BjWRWmpr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c1-+n1alfRYMF3vaZTrakfyKCsNjZk"',
    "mtime": "2026-08-11T19:37:26.386Z",
    "size": 449,
    "path": "../public/assets/map-pin-BjWRWmpr.js"
  },
  "/assets/wallet-B9NPpVB8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9d9-odmOkYaOw1hWkdzOp1Dz+nzGbeM"',
    "mtime": "2026-08-11T19:37:26.401Z",
    "size": 2521,
    "path": "../public/assets/wallet-B9NPpVB8.js"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-11T19:37:26.400Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/credit-card-Cg8KFfJQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-oBY86LtVW5HBPxwbiRrCzsFcVaA"',
    "mtime": "2026-08-11T19:37:26.392Z",
    "size": 208,
    "path": "../public/assets/credit-card-Cg8KFfJQ.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-11T19:37:26.394Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-11T19:37:26.401Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-11T19:37:26.410Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-11T19:37:26.402Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/admin-CsFU5-kb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"17212-jU3/q4Te1a4ms2YTCh8wy4yIfmA"',
    "mtime": "2026-08-11T19:37:26.399Z",
    "size": 94738,
    "path": "../public/assets/admin-CsFU5-kb.js"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-11T19:37:26.393Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
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
