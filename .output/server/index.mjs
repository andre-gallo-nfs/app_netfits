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
    "mtime": "2026-08-24T19:20:22.816Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T19:20:22.816Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-CCnDuqi9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-oo/lRePyYWRQe8gy7aTNteCJYpA"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-CCnDuqi9.js"
  },
  "/assets/activities-Bz9kEX89.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-BOxPDVsWhR4nOmBdiISMkSQHSHc"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 1159,
    "path": "../public/assets/activities-Bz9kEX89.js"
  },
  "/assets/InstitutionalWebHeader-BLR099z7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-9GJTOvqWpgpiWoVMgkTNT0D/MIw"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-BLR099z7.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-BMCF6bFb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-5rfcZoSnnMreVCRZFduHk9KMprg"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 315,
    "path": "../public/assets/apple-BMCF6bFb.js"
  },
  "/assets/arrow-up-right-BcplYxV1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-NY3MyPnvsGw90UBAHsRBqlqxJsQ"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BcplYxV1.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-DdcoaaI0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7461-h9h2UYf2C9H0/DuqHkyKKvqP/Rs"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 29793,
    "path": "../public/assets/associado-DdcoaaI0.js"
  },
  "/assets/auth-DJTuWlsP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a155-drcY9xNsqBIOFD7Pla9Zsm6WJSA"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 41301,
    "path": "../public/assets/auth-DJTuWlsP.js"
  },
  "/assets/check-CMW-dY8v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-rrSh0O7YLg9925f6F7bS2g1WnBY"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 120,
    "path": "../public/assets/check-CMW-dY8v.js"
  },
  "/assets/circle-check-jc-iJqda.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-vbn81cgQZ/edFJtLVDjAPEd3eI8"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 174,
    "path": "../public/assets/circle-check-jc-iJqda.js"
  },
  "/assets/building-2-BiM9Qcek.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-CeHDzIXdwplpQrQnr97Khz1TOrw"',
    "mtime": "2026-08-24T19:20:18.314Z",
    "size": 384,
    "path": "../public/assets/building-2-BiM9Qcek.js"
  },
  "/assets/circle-x-CEgrfetw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-iol886PURR/qvkVQPQr/xeph/TM"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 405,
    "path": "../public/assets/circle-x-CEgrfetw.js"
  },
  "/assets/contato-DBohHFgJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-7WwSFMt64Bq+pXXXtH0kBpJsdWM"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 8068,
    "path": "../public/assets/contato-DBohHFgJ.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-BNDx57Fb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-0nCk83gZ+qblcMQ4dWTRKFyv7sw"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 208,
    "path": "../public/assets/credit-card-BNDx57Fb.js"
  },
  "/assets/download-Bi28HkV3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-ea5fpJ3rwjJ5d6hjIjWkpJLeOA4"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 8305,
    "path": "../public/assets/download-Bi28HkV3.js"
  },
  "/assets/dumbbell-d2G-i3gY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-7szV4iZBzomg6xUrovxmHNn3Vzo"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 561,
    "path": "../public/assets/dumbbell-d2G-i3gY.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/eye-BUX3FcRR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-eeqJAn1jIRNw+FuR6KrpBMGAMic"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 252,
    "path": "../public/assets/eye-BUX3FcRR.js"
  },
  "/assets/admin-CqJpHMAQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f1f-vaghLio2sYH5V+HSHj1Esy81cwo"',
    "mtime": "2026-08-24T19:20:18.315Z",
    "size": 540447,
    "path": "../public/assets/admin-CqJpHMAQ.js"
  },
  "/assets/faq-BwEabYqU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-6f53Y3cg/S5aYQcJSrAV7BRRrHM"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 8169,
    "path": "../public/assets/faq-BwEabYqU.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-BQBTZaia.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-Ap2h9InKo+YtZW92I9rz9DNBJ6M"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 350,
    "path": "../public/assets/gift-BQBTZaia.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/heart-Bl8UE90U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-p71hAp6LoaU3cY24ZZErmxfjHfI"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 259,
    "path": "../public/assets/heart-Bl8UE90U.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/home-B50mkZqp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-XDZsqohi966uFCxSPnvcf4kr/00"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 11065,
    "path": "../public/assets/home-B50mkZqp.js"
  },
  "/assets/index-B7wCw5IC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-eIlcJaBMCQegcIIjqKQ5gWNXIak"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 58579,
    "path": "../public/assets/index-B7wCw5IC.js"
  },
  "/assets/levels-CadzCrk0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-cjr74qdjIf0fyQoQMrXCkePNADE"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 6864,
    "path": "../public/assets/levels-CadzCrk0.js"
  },
  "/assets/link-2-DMpXGOjo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-bPPB9w4PDuB++pYBTS1DCe6xG2E"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 243,
    "path": "../public/assets/link-2-DMpXGOjo.js"
  },
  "/assets/lock-Dn8YuvoC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-4DyrJ19+l6Dn95/p7ZaYmnjo78Q"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 202,
    "path": "../public/assets/lock-Dn8YuvoC.js"
  },
  "/assets/log-in-CN1IrwTr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-LakyrTysg7aBHrGgsFDykqdqSf8"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 232,
    "path": "../public/assets/log-in-CN1IrwTr.js"
  },
  "/assets/mail-DnnDVwoV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-9bCLBsyu90CM2kPKBb1PsOnpxZk"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 214,
    "path": "../public/assets/mail-DnnDVwoV.js"
  },
  "/assets/map-pin-D_Gnms_E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-XPT5JMf329x4VIEfBWj3yU3W3xE"',
    "mtime": "2026-08-24T19:20:18.314Z",
    "size": 255,
    "path": "../public/assets/map-pin-D_Gnms_E.js"
  },
  "/assets/market-9G7lyHbG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-QtxtpNqpThRAJxoyfZIp4KDR+EU"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 26518,
    "path": "../public/assets/market-9G7lyHbG.js"
  },
  "/assets/index-hcE0tUXw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69bd0-4OKbkVxlhtqLoUs+aDxAtHLsi4A"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 433104,
    "path": "../public/assets/index-hcE0tUXw.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T19:20:18.314Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/operational-params-store-3uSaATrp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-oXAjTRkVtqA/aNxniF+zZ95oP+Q"',
    "mtime": "2026-08-24T19:20:18.314Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-3uSaATrp.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T19:20:22.819Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T19:20:22.819Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T19:20:18.314Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/parceiros-gF00SXU8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-Gpb9PoeW5XHNWfwgYoS6qoD6afY"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 25692,
    "path": "../public/assets/parceiros-gF00SXU8.js"
  },
  "/assets/percent-Cf9qde1m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-+98VB4sODSGcYZ15nIRAcySB2mQ"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 646,
    "path": "../public/assets/percent-Cf9qde1m.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-Di6RO405.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6031-/UU0RAwVtaTotYYDLgcD2UKp5Ks"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 24625,
    "path": "../public/assets/profile-Di6RO405.js"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T19:20:18.316Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T19:20:22.822Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T19:20:18.310Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T19:20:18.311Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-q3weDcdd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-IXpCMivqOwEfZLhNY587nPNjRbU"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 410,
    "path": "../public/assets/save-q3weDcdd.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T19:20:18.316Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-CIyzH1OD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-RWPDRK2OnAnS1KV1lA7mvV6/LXY"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 170,
    "path": "../public/assets/search-CIyzH1OD.js"
  },
  "/assets/share-2-B02RPzmy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-L+TgAWFsviXnmAfL96j94Fc22hM"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 353,
    "path": "../public/assets/share-2-B02RPzmy.js"
  },
  "/assets/shield-check-DG8ZxByP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-5otAu/eRgvWQf6SkU8RIoZr9cKQ"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 316,
    "path": "../public/assets/shield-check-DG8ZxByP.js"
  },
  "/assets/truck-CWS3RLPa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-jqUiY67IMcX7bM9auOox4T3FJoU"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 1109,
    "path": "../public/assets/truck-CWS3RLPa.js"
  },
  "/assets/styles-BljRuCYc.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23fca-wVHt72yNKxTP7fVmIUDjdpHNZTg"',
    "mtime": "2026-08-24T19:20:18.312Z",
    "size": 147402,
    "path": "../public/assets/styles-BljRuCYc.css"
  },
  "/assets/user-plus-Cj6wcPuJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-R8prTF7hQm7WdQ//3J3q6+4BJag"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 585,
    "path": "../public/assets/user-plus-Cj6wcPuJ.js"
  },
  "/assets/users-wyE7UPCg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-+VGQWt0aFqR97N5xeOu4O76yipU"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 307,
    "path": "../public/assets/users-wyE7UPCg.js"
  },
  "/assets/wallet-CS494C43.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-B5RMAU4cyUUuAhAU60HFcCjgDmE"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 5150,
    "path": "../public/assets/wallet-CS494C43.js"
  },
  "/assets/zap-CiWejsQ3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-A57QXKVEZauls8VuKBLaCe+XE0o"',
    "mtime": "2026-08-24T19:20:18.313Z",
    "size": 263,
    "path": "../public/assets/zap-CiWejsQ3.js"
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
