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
    "mtime": "2026-08-24T19:46:06.578Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T19:46:06.578Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-BLtaQhMo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-KI6e3lWdoC+wyhxXI24Bgr9wkM0"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-BLtaQhMo.js"
  },
  "/assets/activities-CKluM0kM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-xas5tyT/CGmkKmmVWmrEqDEUD0E"',
    "mtime": "2026-08-24T19:45:57.500Z",
    "size": 1159,
    "path": "../public/assets/activities-CKluM0kM.js"
  },
  "/assets/ProductDetailSheet-CnTzDJwQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-m8NnQAzW3C/vcGCjU+TWkG8+lPw"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-CnTzDJwQ.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-CKiJZocv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-4FWShGouEmVN4l2CLGonmrqMIj0"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 315,
    "path": "../public/assets/apple-CKiJZocv.js"
  },
  "/assets/arrow-up-right-CrlUJ2WK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-xZC9F9Xi1J3EWFhRJa/3fW900AQ"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CrlUJ2WK.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-D6IZ9IBh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7461-A7SoVIHhvvSLpEqZGP8Q16S8i+0"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 29793,
    "path": "../public/assets/associado-D6IZ9IBh.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/building-2-B7yaxg5A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-k7FWsxpe9/P7FSBODNAz2DuRru8"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 384,
    "path": "../public/assets/building-2-B7yaxg5A.js"
  },
  "/assets/auth-CEOHaM5v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a155-BTNPgE5lpVSD3ZyTkI38l1ZLsUU"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 41301,
    "path": "../public/assets/auth-CEOHaM5v.js"
  },
  "/assets/check-COWSz3ym.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-HzgQqU+yalPGM49yqpBp7fX2twQ"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 120,
    "path": "../public/assets/check-COWSz3ym.js"
  },
  "/assets/circle-check-Bkj-Z_6g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-ehtzzEOSKhegVormvQjtlLILKVk"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 174,
    "path": "../public/assets/circle-check-Bkj-Z_6g.js"
  },
  "/assets/circle-x-CVZnYUvm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-hdc68nA395sJh0/xxg/ZYhCt/8U"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 405,
    "path": "../public/assets/circle-x-CVZnYUvm.js"
  },
  "/assets/contato-Mr0IivGP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-rB61gX5zGRKUNy6LgoRbashXbwM"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 8068,
    "path": "../public/assets/contato-Mr0IivGP.js"
  },
  "/assets/credit-card-Cs-vYH5j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-yvH8ZCb0eC/Qv5YxE/lsXFY0qpU"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 208,
    "path": "../public/assets/credit-card-Cs-vYH5j.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-C1WUFzea.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-Q9NgarVNnoNmjUa3FflI/Y+AoPs"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C1WUFzea.js"
  },
  "/assets/download-DQ1PtGTD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-t9G1jRtAoVkzNY8EwK7v+bTksxM"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 8305,
    "path": "../public/assets/download-DQ1PtGTD.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/eye-Czh2Eq64.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-NOYret/fDJl3QVQdVkt+0mRDKYg"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 252,
    "path": "../public/assets/eye-Czh2Eq64.js"
  },
  "/assets/admin-BgUpdxaZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f1f-7UPvS/P8gYS3hCr+fTingIVpaLo"',
    "mtime": "2026-08-24T19:45:57.506Z",
    "size": 540447,
    "path": "../public/assets/admin-BgUpdxaZ.js"
  },
  "/assets/faq-CJklQjRV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-kFh3Mp9cw42aUjyrdIv6ZpaeEe8"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 8169,
    "path": "../public/assets/faq-CJklQjRV.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-BDV3Z6Za.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-My69JehGvaFG3u6Jp0UDZjBfmMo"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 350,
    "path": "../public/assets/gift-BDV3Z6Za.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/home-DioWv9k2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-plaMHkWyi3Vt9GEsoZeI+2v9oY0"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 11065,
    "path": "../public/assets/home-DioWv9k2.js"
  },
  "/assets/index-CLO71YLL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-NjeH7zPJImFpGvvD6Yh5PwMuruI"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 58579,
    "path": "../public/assets/index-CLO71YLL.js"
  },
  "/assets/heart-CTOh5eBL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-RdgK0yrdH3CYTuCj+vfzqMP+aY4"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 259,
    "path": "../public/assets/heart-CTOh5eBL.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/levels-BeTv9rTL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-vr2Myj9hBQesvaqIHE0BLtfzOSg"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 6864,
    "path": "../public/assets/levels-BeTv9rTL.js"
  },
  "/assets/link-2-CrERCHQC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-03xyZR3tS8XObsFgZQIuHQ1HAjE"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 243,
    "path": "../public/assets/link-2-CrERCHQC.js"
  },
  "/assets/lock-B8Cu_Qbj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-J0Yr3JMY6Aw49jBNybEyePWOi0Q"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 202,
    "path": "../public/assets/lock-B8Cu_Qbj.js"
  },
  "/assets/log-in-DOKZFL__.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-FOKHwuNzIN6NaWpmen0BTel9eTo"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 232,
    "path": "../public/assets/log-in-DOKZFL__.js"
  },
  "/assets/mail-CVbc6kVv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-sT2/rbE+N6KGp9ADuIjnd3NHL70"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 214,
    "path": "../public/assets/mail-CVbc6kVv.js"
  },
  "/assets/map-pin-BnT8U6Aj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-IumpEz3wZnryK2rx4AeFEqZqqMw"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 255,
    "path": "../public/assets/map-pin-BnT8U6Aj.js"
  },
  "/assets/market-DUQSbMF_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-+67j0/z/xYN6UzzhRNGUygHsefQ"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 26518,
    "path": "../public/assets/market-DUQSbMF_.js"
  },
  "/assets/index-fj9Kx5o8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69f61-FltpvDgoebrvVQizBN1lgvRjxos"',
    "mtime": "2026-08-24T19:45:57.500Z",
    "size": 434017,
    "path": "../public/assets/index-fj9Kx5o8.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/operational-params-store-BfQP5VVk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-Iuofr7tPD1Fh5EwiuwUbFrpUwSQ"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-BfQP5VVk.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T19:45:57.505Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T19:46:06.589Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T19:46:06.593Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/parceiros-DlHfgUad.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-bNUrDUiBiVm7bdgeWEL7F+jDB7M"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 25692,
    "path": "../public/assets/parceiros-DlHfgUad.js"
  },
  "/assets/percent-ZFGZ4S42.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-KEofAktJD8GDK1YvKbs5k5ar0hs"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 646,
    "path": "../public/assets/percent-ZFGZ4S42.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-AK_Nq5zi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6031-kpyNV9pS9zrU8dKN6u0+JYWt0UY"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 24625,
    "path": "../public/assets/profile-AK_Nq5zi.js"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T19:45:57.509Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T19:46:06.594Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T19:45:57.494Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-c-0p8u17.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-ZE2e/w6QYOqZjCdwOSgrfot6ex4"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 410,
    "path": "../public/assets/save-c-0p8u17.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T19:45:57.509Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-Bohir3qt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-lVbU/98jlkUX2++EpakdYWPupcs"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 170,
    "path": "../public/assets/search-Bohir3qt.js"
  },
  "/assets/share-2-B8GMZrm_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-AErk+dQyGNoRzg8tueLHrqbFLiI"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 353,
    "path": "../public/assets/share-2-B8GMZrm_.js"
  },
  "/assets/styles-BljRuCYc.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23fca-wVHt72yNKxTP7fVmIUDjdpHNZTg"',
    "mtime": "2026-08-24T19:45:57.495Z",
    "size": 147402,
    "path": "../public/assets/styles-BljRuCYc.css"
  },
  "/assets/truck-Dn4GGw0H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-0rZSyAD6+iIqtcBRoNE3gJeXUsg"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 1109,
    "path": "../public/assets/truck-Dn4GGw0H.js"
  },
  "/assets/user-plus-l9Req-aU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-9BUfoXww7+MMc5/ZpNT9DNZbqGA"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 585,
    "path": "../public/assets/user-plus-l9Req-aU.js"
  },
  "/assets/users-Cpf6Fe6D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-y4sB38pT4gBVoWEAYoiRj9zlNyc"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 307,
    "path": "../public/assets/users-Cpf6Fe6D.js"
  },
  "/assets/wallet--Oly114L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-tkgLfw25POm+6oqMlzW7uPW0s98"',
    "mtime": "2026-08-24T19:45:57.503Z",
    "size": 5150,
    "path": "../public/assets/wallet--Oly114L.js"
  },
  "/assets/zap-COfBS56s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-cWD/ZqKfreTuUi6lBfnbtWmgURM"',
    "mtime": "2026-08-24T19:45:57.501Z",
    "size": 263,
    "path": "../public/assets/zap-COfBS56s.js"
  },
  "/assets/shield-check-CC4eFDId.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-e9RPTqht6GnnX9xkXxdKGZIFz/E"',
    "mtime": "2026-08-24T19:45:57.502Z",
    "size": 316,
    "path": "../public/assets/shield-check-CC4eFDId.js"
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
