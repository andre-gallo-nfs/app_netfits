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
    "mtime": "2026-08-24T20:14:35.926Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T20:14:35.926Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-Bm-KQlhD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-cFzTQLFIg3iGXug+Vg/FOMp8A9o"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-Bm-KQlhD.js"
  },
  "/assets/ProductDetailSheet-bSnKNfB-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-V7mkSY57D2b+VzCt3AKgGTM7f0k"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-bSnKNfB-.js"
  },
  "/assets/activities-Bu-XQJqh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-CncyDN3XVF7jBEoG9xSwDVNC8ts"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 1196,
    "path": "../public/assets/activities-Bu-XQJqh.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-BLCtCOoc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-gRUrteRD1+AWFzQhdIPZOL7mvN4"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 315,
    "path": "../public/assets/apple-BLCtCOoc.js"
  },
  "/assets/arrow-up-right-Bsj5aWog.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-d0a592Z/SfU25tbPT7o7b4doxnc"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Bsj5aWog.js"
  },
  "/assets/associado-DkB4f4M7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7461-d5kXRllMzn3oLiHt/vAu8XbH9VU"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 29793,
    "path": "../public/assets/associado-DkB4f4M7.js"
  },
  "/assets/auth-DO_zwPzd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a182-1+9dXxuhvTTnmyB+fMMg21qgXfM"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 41346,
    "path": "../public/assets/auth-DO_zwPzd.js"
  },
  "/assets/building-2-0-FS44eh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-wkiUEHlxik1JFy4pK3duyM6HTfI"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 384,
    "path": "../public/assets/building-2-0-FS44eh.js"
  },
  "/assets/check-gIM-bBlY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-C/qhfzMc9m23DK1SQ9PrCPNWktQ"',
    "mtime": "2026-08-24T20:14:29.628Z",
    "size": 120,
    "path": "../public/assets/check-gIM-bBlY.js"
  },
  "/assets/circle-check-MJRXAkfv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-GyCVo6jfR3ECixSXkEPnerZgGmo"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 174,
    "path": "../public/assets/circle-check-MJRXAkfv.js"
  },
  "/assets/circle-x-B0Uqt2Pu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-DavaDiBpQ5BubqnS8Irzj/wLK2Y"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 405,
    "path": "../public/assets/circle-x-B0Uqt2Pu.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-DVe9nCUd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-6NNWAb0Mdh7AdT+h4dDupbcUCfc"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 8068,
    "path": "../public/assets/contato-DVe9nCUd.js"
  },
  "/assets/credit-card-Cy8vWg1T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-3h8SJJy/O/qLAeCMmaDvVPz8Uv0"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 208,
    "path": "../public/assets/credit-card-Cy8vWg1T.js"
  },
  "/assets/download-BTLxfLT-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-b8n2f4dvCseiUYVFh+AQspN8Ekw"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 8305,
    "path": "../public/assets/download-BTLxfLT-.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/dumbbell-CG0UyfbR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-mAS6oJXiZ/LejeDrFQ7Az2earfs"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CG0UyfbR.js"
  },
  "/assets/eye-Ckodm-Rk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-pxtcr4ynY2zMuttAyIaar/B296M"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 252,
    "path": "../public/assets/eye-Ckodm-Rk.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-C0ragfUH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f1f-6eDRQitywmG6ZLMZ7pq+W6lhA4s"',
    "mtime": "2026-08-24T20:14:29.629Z",
    "size": 540447,
    "path": "../public/assets/admin-C0ragfUH.js"
  },
  "/assets/faq-Av1lMpfX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-4xaH+ii5sXIwJmtD8YPsnO/JzHM"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 8169,
    "path": "../public/assets/faq-Av1lMpfX.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-BdDQaXMI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-S+jGb5fi5t6U7ZgQVzAChJg22v4"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 350,
    "path": "../public/assets/gift-BdDQaXMI.js"
  },
  "/assets/heart-SC2XXmio.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-ooEWnIiFGBXQbCt+B4+1IqgNeB8"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 259,
    "path": "../public/assets/heart-SC2XXmio.js"
  },
  "/assets/home-CQX3ZzUf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-qfMdrNDQ8vIoNjDN3o5MsbJHbfM"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 11065,
    "path": "../public/assets/home-CQX3ZzUf.js"
  },
  "/assets/index-DJq9l8yA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4f8-UtlGZHJpBTX0MZ0VJ2jmIK/tmRY"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 58616,
    "path": "../public/assets/index-DJq9l8yA.js"
  },
  "/assets/levels-DpDtoeqX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-lXkGc9t//4lRYJHY9S4X+x8vQaE"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 6869,
    "path": "../public/assets/levels-DpDtoeqX.js"
  },
  "/assets/link-2-CJQB49Cn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-Jn7oKlD+ebqchbazgPGWtUhFoZI"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 243,
    "path": "../public/assets/link-2-CJQB49Cn.js"
  },
  "/assets/lock-B27W1NWK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-kC06Wt7q3LHh6kA7EOedaIoto9U"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 202,
    "path": "../public/assets/lock-B27W1NWK.js"
  },
  "/assets/log-in-Czo56rT3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-TfwAHjVcteY6t8sAfqiJJrou8jE"',
    "mtime": "2026-08-24T20:14:29.628Z",
    "size": 232,
    "path": "../public/assets/log-in-Czo56rT3.js"
  },
  "/assets/mail-CPZio3By.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-ZVe43qb6XCKy172zg6ve+39xyzM"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 214,
    "path": "../public/assets/mail-CPZio3By.js"
  },
  "/assets/map-pin-DmMRtpby.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-6+tijDkiMUZWKnRNlaD1pMwm6sE"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 255,
    "path": "../public/assets/map-pin-DmMRtpby.js"
  },
  "/assets/market-BYwZB3gE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-5HwZQS+geCsJfXQWxDwGC2PIOcg"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 26557,
    "path": "../public/assets/market-BYwZB3gE.js"
  },
  "/assets/index-I85bAreU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68d86-E8Q3w0NdHN0Kn5WnO147USeMLhE"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 429446,
    "path": "../public/assets/index-I85bAreU.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:14:35.935Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:14:29.628Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T20:14:35.940Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/operational-params-store-BFTAnYtM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-nsZM8wEnbS3HB1GJ2kvyQkO8e4k"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-BFTAnYtM.js"
  },
  "/assets/parceiros-Caff1a52.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-woRxf+fcfDPIP3DhEph0FfEXqCs"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 25692,
    "path": "../public/assets/parceiros-Caff1a52.js"
  },
  "/assets/percent-BeDmFyTw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-clJ1yessu1+ssn45H0N5591hjXg"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 646,
    "path": "../public/assets/percent-BeDmFyTw.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-CINKvS2N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"71b4-z8RZ/ofI6z4dsqi265u5jtrLE9E"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 29108,
    "path": "../public/assets/profile-CINKvS2N.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:14:29.630Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:14:36.038Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T20:14:29.625Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T20:14:29.624Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-B_nD273q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-9XSNmZ9etXmXjALSBT5sRZx5ORM"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 410,
    "path": "../public/assets/save-B_nD273q.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T20:14:29.629Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-Dtcd1hpN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-kVbYIn5IhI2LqIfNc5QzavbT9aM"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 170,
    "path": "../public/assets/search-Dtcd1hpN.js"
  },
  "/assets/share-2-C9Bjjl_J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-KVSex2f57psTeKpd9lzWqOFRBRI"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 353,
    "path": "../public/assets/share-2-C9Bjjl_J.js"
  },
  "/assets/shield-check-D2b0BLqV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-2gHR17z3R+yQx5gCSXzruJAo4KY"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 316,
    "path": "../public/assets/shield-check-D2b0BLqV.js"
  },
  "/assets/truck-BsWvMfak.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-7/LXQ/glF3My47lqeQC88C3ubDU"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 1109,
    "path": "../public/assets/truck-BsWvMfak.js"
  },
  "/assets/user-plus-D6AvnIrf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-70zqX0yX9sSECnBmVAivE258+f0"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 585,
    "path": "../public/assets/user-plus-D6AvnIrf.js"
  },
  "/assets/styles-COYd2nln.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"241c3-xxpNkS7dW4Fyd9VZrLVTxPc39nA"',
    "mtime": "2026-08-24T20:14:29.626Z",
    "size": 147907,
    "path": "../public/assets/styles-COYd2nln.css"
  },
  "/assets/users-DuwcUVcq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-V8W0sm1HcT7Uoowssu9rJrM8df4"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 307,
    "path": "../public/assets/users-DuwcUVcq.js"
  },
  "/assets/wallet-9DFrMnKq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1708-F0gkRKNPk1/JAvpCSYWFUBhsNsQ"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 5896,
    "path": "../public/assets/wallet-9DFrMnKq.js"
  },
  "/assets/zap-D5Oe_fC4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-EaHTdNXGmo7V/iFr8GqU5Lrigqc"',
    "mtime": "2026-08-24T20:14:29.627Z",
    "size": 263,
    "path": "../public/assets/zap-D5Oe_fC4.js"
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
