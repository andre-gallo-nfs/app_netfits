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
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T21:03:40.821Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-24T21:03:40.821Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/InstitutionalWebHeader-BTKNMJwb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-WgvDJ/Y7Ohp5jNUfkdK/Cf3ljqA"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-BTKNMJwb.js"
  },
  "/assets/ProductDetailSheet-5xMaej-o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-m2Ktc+Kabw+RVAMyuAC57NqktSI"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-5xMaej-o.js"
  },
  "/assets/activities-gZKGxXAS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-fFCKA1dWbTPbcpqp+6TwRd6ljvI"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 1196,
    "path": "../public/assets/activities-gZKGxXAS.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-C9v4VI5a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-CgNK4eHTmgtJs+t++2BkwvRqAmw"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 315,
    "path": "../public/assets/apple-C9v4VI5a.js"
  },
  "/assets/arrow-up-right-FdaWByEV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-oRdX+04qoMjdj994GxWabG3hrVE"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-FdaWByEV.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-BJA-dCcE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"742d-GAEjDq8QBdZHd8hl4QpiLf8Bx3k"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 29741,
    "path": "../public/assets/associado-BJA-dCcE.js"
  },
  "/assets/auth-B7N0olrN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b0f5-p2I6c5OFymI30fs7AMmjbIwbbFo"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 45301,
    "path": "../public/assets/auth-B7N0olrN.js"
  },
  "/assets/building-2-BCMrnh5p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-kTSj24Jv7i0Fy9qP8+dxFwpQQyU"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 384,
    "path": "../public/assets/building-2-BCMrnh5p.js"
  },
  "/assets/calendar-g9wejR6B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-P65mG0c+pYRlTIt4ynkaWNb91iQ"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 258,
    "path": "../public/assets/calendar-g9wejR6B.js"
  },
  "/assets/check-0LMLU9Yu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-2/A8RMG5RLUPWFf+uK53bM1TyeU"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 120,
    "path": "../public/assets/check-0LMLU9Yu.js"
  },
  "/assets/circle-check-B3dKdpyO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Aj12ZEXLqPB4wMGmv1Vtttd2RAA"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 174,
    "path": "../public/assets/circle-check-B3dKdpyO.js"
  },
  "/assets/circle-x-CFfFsl52.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-ERCn3AD6m5e5uYG6u92XtaYhGDU"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 405,
    "path": "../public/assets/circle-x-CFfFsl52.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T21:03:36.079Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-CEhe9wzC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-LGThy41K5l0nOsY3jLqOCRccz28"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 8068,
    "path": "../public/assets/contato-CEhe9wzC.js"
  },
  "/assets/credit-card-Cc_wXRNq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-EJ9aID2qQ1glNxFqztglnauxHjI"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 208,
    "path": "../public/assets/credit-card-Cc_wXRNq.js"
  },
  "/assets/download-DM-UGmL-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-M0WLJaENpzVlcsFlBXn5gZrAOOU"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 8305,
    "path": "../public/assets/download-DM-UGmL-.js"
  },
  "/assets/dumbbell-DTEG_2Qn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-psbzsXyWWTjCjbYoJAvigpD/q/g"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 561,
    "path": "../public/assets/dumbbell-DTEG_2Qn.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-zMqN9Df4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f79-/qHJ6XI2vNmJyEsHR+lKGUe2yj0"',
    "mtime": "2026-08-24T21:03:36.084Z",
    "size": 540537,
    "path": "../public/assets/admin-zMqN9Df4.js"
  },
  "/assets/eye-DYP0z8Pl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-J4Rrj5+zRmg/zbY3V6gIr2Sqmek"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 252,
    "path": "../public/assets/eye-DYP0z8Pl.js"
  },
  "/assets/faq-CcLE0QNW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-7n7EHBMAcnNFLR0jlFq+mHqEsqA"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 8169,
    "path": "../public/assets/faq-CcLE0QNW.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T21:03:36.079Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-ceL8c8N2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-fXRuigDe8XHFZriuvzK3pBttvsA"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 350,
    "path": "../public/assets/gift-ceL8c8N2.js"
  },
  "/assets/heart-C2-dcOs1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-+rgDgAYGZ3qcIAA/bc8iLYMNs/U"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 259,
    "path": "../public/assets/heart-C2-dcOs1.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/home-CVk-Wdrt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-7gkLNe/oLd4A6eyKsOn4XAJOBRk"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 11065,
    "path": "../public/assets/home-CVk-Wdrt.js"
  },
  "/assets/levels-DemAH-G5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-HdikBAf4K46NvziqCpgoQ9cjvLE"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 6864,
    "path": "../public/assets/levels-DemAH-G5.js"
  },
  "/assets/lock-BWkMHd6U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-51q/utBjeWslkObgL3SenzJGcOU"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 202,
    "path": "../public/assets/lock-BWkMHd6U.js"
  },
  "/assets/index-C2f5HtdB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-+lmTL5RbYFOgcfkEhY+3p83TvNc"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 58579,
    "path": "../public/assets/index-C2f5HtdB.js"
  },
  "/assets/log-in-C2T7k2zJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-KbvyNqdYnDDgqZCKwivGAWA4YuA"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 232,
    "path": "../public/assets/log-in-C2T7k2zJ.js"
  },
  "/assets/mail-CEhpZrAf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-XIbu0VmwI3SFA2tD6DzGOtZIGJk"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 214,
    "path": "../public/assets/mail-CEhpZrAf.js"
  },
  "/assets/link-2-B7aCdpcl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-V3G1P5/UZons6aKs6euNVLDPa98"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 243,
    "path": "../public/assets/link-2-B7aCdpcl.js"
  },
  "/assets/map-pin-CsGMQwlL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-MgViFklEkcWB7dgmXBbeORopbo4"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 255,
    "path": "../public/assets/map-pin-CsGMQwlL.js"
  },
  "/assets/market-CrCZL9TE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-iJxHYAb5OdLzO6Tq8bmZK3iO3S4"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 26557,
    "path": "../public/assets/market-CrCZL9TE.js"
  },
  "/assets/index-X1D07nJu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69718-mW5Rx0kdNlVtaZks2y8J68bmKx0"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 431896,
    "path": "../public/assets/index-X1D07nJu.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T21:03:40.824Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T21:03:40.827Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DF0fmgnh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b5-cvbY8MTB2xze2tQE+NpONQ1bg4A"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 25781,
    "path": "../public/assets/parceiros-DF0fmgnh.js"
  },
  "/assets/percent-CJ6Xz5Qn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-GqC7Mtuk0fMy5ZyJ0iIzwngetPs"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 646,
    "path": "../public/assets/percent-CJ6Xz5Qn.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T21:03:36.079Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T21:03:36.079Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T21:03:36.079Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-B-tK3YoU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72ef-l1HrXKUQcVsLRRYIczKmq54Ghfc"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 29423,
    "path": "../public/assets/profile-B-tK3YoU.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T21:03:36.080Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T21:03:36.086Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T21:03:36.079Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T21:03:36.079Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-BMJYS9c3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-mTmOlepmsCSqGa0X7SsRKdh/bOE"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 410,
    "path": "../public/assets/save-BMJYS9c3.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T21:03:40.827Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T21:03:36.086Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-SO3aRpbC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-jGjWeZmzaL4pnJzWl953adEg4jQ"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 170,
    "path": "../public/assets/search-SO3aRpbC.js"
  },
  "/assets/share-2-Cem-6aaL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-++A2mfbb+J9JXOCnY1LDnVot/YU"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 353,
    "path": "../public/assets/share-2-Cem-6aaL.js"
  },
  "/assets/shield-check-D0D79z4q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-SUo9CygHkcoCqbWlIJ5LbTIGwcQ"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 316,
    "path": "../public/assets/shield-check-D0D79z4q.js"
  },
  "/assets/truck-BapcrNlS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-leuvSfAXs5FZPOvrZtCMXA9UXPU"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 1109,
    "path": "../public/assets/truck-BapcrNlS.js"
  },
  "/assets/styles-COYd2nln.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"241c3-xxpNkS7dW4Fyd9VZrLVTxPc39nA"',
    "mtime": "2026-08-24T21:03:36.081Z",
    "size": 147907,
    "path": "../public/assets/styles-COYd2nln.css"
  },
  "/assets/user-plus-DAL4eWiA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-Ld0wi89ENhHCxofN+5DUZnfXqUY"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 585,
    "path": "../public/assets/user-plus-DAL4eWiA.js"
  },
  "/assets/users-CP52BWop.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-adJwBz4glXJ3McVR7PeEfLUxRBA"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 307,
    "path": "../public/assets/users-CP52BWop.js"
  },
  "/assets/wallet-nmuffsuI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-ULqbsWMNPFP16OIMpduqDTNhTyA"',
    "mtime": "2026-08-24T21:03:36.083Z",
    "size": 5844,
    "path": "../public/assets/wallet-nmuffsuI.js"
  },
  "/assets/zap-BbSiNwqg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-UwcVu4edh3nZNcp4ykcpBKF2Ul0"',
    "mtime": "2026-08-24T21:03:36.082Z",
    "size": 263,
    "path": "../public/assets/zap-BbSiNwqg.js"
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
