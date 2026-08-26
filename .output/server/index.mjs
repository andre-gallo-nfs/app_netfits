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
    "mtime": "2026-08-26T16:42:52.314Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-26T16:42:52.314Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-DmnWc1R3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-5rVEjgfaJu/S6taFX9ICYeIHSPc"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-DmnWc1R3.js"
  },
  "/assets/ProductDetailSheet-Ce5XTJ-0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-enebDAD7e4UWk1DI4c00BPMOvVs"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-Ce5XTJ-0.js"
  },
  "/assets/activities-Clh06YSp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-VNKetf/AsvmNxjHvppkXs5/W038"',
    "mtime": "2026-08-26T16:42:44.942Z",
    "size": 1196,
    "path": "../public/assets/activities-Clh06YSp.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-26T16:42:44.935Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/arrow-up-right-qXXVy-es.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-xbS7daCB3865FO5ag5GYKyU6J0o"',
    "mtime": "2026-08-26T16:42:44.945Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-qXXVy-es.js"
  },
  "/assets/apple-BWtU6oxt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-Q59ZxEujf6zMZODI+x/NvNq+TGQ"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 315,
    "path": "../public/assets/apple-BWtU6oxt.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-ClC4Y0cY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73c8-wNx3aMhSDxaWm0oYsHBd8pMRoDA"',
    "mtime": "2026-08-26T16:42:44.942Z",
    "size": 29640,
    "path": "../public/assets/associado-ClC4Y0cY.js"
  },
  "/assets/auth-DnTt0n2y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b748-BrbP+063LaK9rbNrpaN5INDMfic"',
    "mtime": "2026-08-26T16:42:44.942Z",
    "size": 46920,
    "path": "../public/assets/auth-DnTt0n2y.js"
  },
  "/assets/calendar-CQI0DYZ0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-vFgfHl1fWD1CF1vLJOwsY7+lRe0"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 258,
    "path": "../public/assets/calendar-CQI0DYZ0.js"
  },
  "/assets/circle-check-Ce_FvCDu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-kXOOTbcsuJeR7N/UuckWU7yjngY"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 174,
    "path": "../public/assets/circle-check-Ce_FvCDu.js"
  },
  "/assets/circle-x-C8CtxOkW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-92D8tXIxevvAkGZ3NWIpatR83Lg"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 405,
    "path": "../public/assets/circle-x-C8CtxOkW.js"
  },
  "/assets/contato-Iu49MhDA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f63-TZelHq1lAigsCko2xnNtZmZUt4c"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 8035,
    "path": "../public/assets/contato-Iu49MhDA.js"
  },
  "/assets/credit-card-C1omHl1M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-27K29qFksz3yXuBtQ/kNBhgFpws"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 208,
    "path": "../public/assets/credit-card-C1omHl1M.js"
  },
  "/assets/download-C3k5dpKx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2050-Dcdy1zG4rdiszFg019WYZsj/0YI"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 8272,
    "path": "../public/assets/download-C3k5dpKx.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-26T16:42:44.941Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-ClNoTNYu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-D934y4jWRY6jdhY5vIaPTMi1kxM"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 561,
    "path": "../public/assets/dumbbell-ClNoTNYu.js"
  },
  "/assets/eye-CQJDeDzk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-F/9isJUQFdm+AjUMs9dcC9JCDZ4"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 252,
    "path": "../public/assets/eye-CQJDeDzk.js"
  },
  "/assets/faq-CTRiXvHS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-yrjNUG5lIeQ49JuXZ6jtiYRUeBw"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 8136,
    "path": "../public/assets/faq-CTRiXvHS.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-26T16:42:44.941Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-CavFB0Xg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"86c9e-/28NgA7sGxdf98jL9leEuucWoo0"',
    "mtime": "2026-08-26T16:42:44.949Z",
    "size": 552094,
    "path": "../public/assets/admin-CavFB0Xg.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-C-uf_hph.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-tZlmdMYSQYg/ifwSzUip4DJh7q0"',
    "mtime": "2026-08-26T16:42:44.942Z",
    "size": 350,
    "path": "../public/assets/gift-C-uf_hph.js"
  },
  "/assets/home-CtQyYn2-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2af4-C6txEGCOFq25Pz+9uzWL1U5CmWM"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 10996,
    "path": "../public/assets/home-CtQyYn2-.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-CeKgpwPM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-aFD68VplqNwYvsGpud8kTeIAdDU"',
    "mtime": "2026-08-26T16:42:44.941Z",
    "size": 61206,
    "path": "../public/assets/index-CeKgpwPM.js"
  },
  "/assets/levels-CCuoD1gk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-fTmhF5sKO/DbH8myTGGZA1YH2J8"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 6869,
    "path": "../public/assets/levels-CCuoD1gk.js"
  },
  "/assets/lock-x3_lwCLk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-+vaHS5GAZW+yR6NJ0ktextGglrY"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 202,
    "path": "../public/assets/lock-x3_lwCLk.js"
  },
  "/assets/link-2-CCUEueEu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-7RQwPrPRB4uqGByoi6Y7E//IRpI"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 243,
    "path": "../public/assets/link-2-CCUEueEu.js"
  },
  "/assets/log-in-BLreJQk0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-0HWDM3hh0DT/WPX9KVzDAjYQdDI"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 232,
    "path": "../public/assets/log-in-BLreJQk0.js"
  },
  "/assets/mail-BnO16ZdW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-J2vp8Jfv8YQnFL2skW4uYwVD+rY"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 214,
    "path": "../public/assets/mail-BnO16ZdW.js"
  },
  "/assets/map-pin-D_pBJ-4B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-/4BvIb2Vea/7d1wO+OKn/NxvADY"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 255,
    "path": "../public/assets/map-pin-D_pBJ-4B.js"
  },
  "/assets/index-CKixTfW-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c3cc-zOlaWUlZwOyPSKX393k0cjQHYWc"',
    "mtime": "2026-08-26T16:42:44.941Z",
    "size": 443340,
    "path": "../public/assets/index-CKixTfW-.js"
  },
  "/assets/market-U2xLfyMF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-EtKOUilHOuEtNekNNuIG8YjDPqM"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 26473,
    "path": "../public/assets/market-U2xLfyMF.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-26T16:42:44.945Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BXK2jKbm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-a8Fh+eKQqOBqn2AayCnjhCNHzrs"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 29316,
    "path": "../public/assets/parceiros-BXK2jKbm.js"
  },
  "/assets/percent-CXFrSFxq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-hfPmfnuqiifRPWy8D2BnQOh9piU"',
    "mtime": "2026-08-26T16:42:44.945Z",
    "size": 646,
    "path": "../public/assets/percent-CXFrSFxq.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T16:42:52.322Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-26T16:42:52.329Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T16:42:44.935Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/phone-g38Ocd24.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-YgIOEjTXHkxAJKdqHJSzo2YTRZo"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 323,
    "path": "../public/assets/phone-g38Ocd24.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-26T16:42:44.940Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-26T16:42:44.939Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-26T16:42:44.942Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-26T16:42:44.935Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-26T16:42:44.935Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-26T16:42:44.935Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-26T16:42:44.940Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-26T16:42:44.940Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/profile-BpuMMVLn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-xLvZA+o2IOoTM6RFQ0F3ESBRgMw"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 31108,
    "path": "../public/assets/profile-BpuMMVLn.js"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-26T16:42:44.935Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-26T16:42:44.935Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T16:42:52.332Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T16:42:44.960Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-26T16:42:44.934Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-hOHyh2MK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-jHoN8lU14HQ6UTDGzZdFH6+b1oM"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 410,
    "path": "../public/assets/save-hOHyh2MK.js"
  },
  "/assets/search-DU_DYkRK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-KLFSryIajrXF8R8pK40U6Gtalnw"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 170,
    "path": "../public/assets/search-DU_DYkRK.js"
  },
  "/assets/shield-check-AJyWLiRF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-NjJjZYT3XwdNoss89vvgo3qufMo"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 316,
    "path": "../public/assets/shield-check-AJyWLiRF.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-26T16:42:44.959Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/styles-DVhiHEG4.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"26892-G8gzG+m1kPOJPMcctoOwCSF9BvQ"',
    "mtime": "2026-08-26T16:42:44.941Z",
    "size": 157842,
    "path": "../public/assets/styles-DVhiHEG4.css"
  },
  "/assets/truck-Vti-uTOR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-ecmWt2QvLQBopiUinnFLdGcALgM"',
    "mtime": "2026-08-26T16:42:44.943Z",
    "size": 1109,
    "path": "../public/assets/truck-Vti-uTOR.js"
  },
  "/assets/user-plus-CiGitssF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-0Ma2L1Lza+Rfr/6tveoPsiAoHqM"',
    "mtime": "2026-08-26T16:42:44.944Z",
    "size": 311,
    "path": "../public/assets/user-plus-CiGitssF.js"
  },
  "/assets/users-DMdtZWjc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-kcyDcELsWYLuApfgNzYQsMk4dno"',
    "mtime": "2026-08-26T16:42:44.945Z",
    "size": 307,
    "path": "../public/assets/users-DMdtZWjc.js"
  },
  "/assets/wallet-BHfgberF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-r3Q6rgpkYniC6kA9FufyerQoa1A"',
    "mtime": "2026-08-26T16:42:44.946Z",
    "size": 4687,
    "path": "../public/assets/wallet-BHfgberF.js"
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
