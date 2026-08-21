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
    "etag": '"526-6zVsZr6XdQArNr/SYsmqBheO7+0"',
    "mtime": "2026-08-21T21:10:11.420Z",
    "size": 1318,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-lsuW8FUB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-QQK0NP6M1l+y6XkxvZTQ8RngeMk"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-lsuW8FUB.js"
  },
  "/assets/ProductDetailSheet-C-JD1ge9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-R5Og8sUTe8VFuZgtlkzXW2KE3Nc"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-C-JD1ge9.js"
  },
  "/assets/activities-CNVCaiCS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-k2X7MiTIKEGBfeI1JXKkW+nW/IY"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 1159,
    "path": "../public/assets/activities-CNVCaiCS.js"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-21T21:10:11.421Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/arrow-up-right-CZXUiIEn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-BnUdmpJEWn1hej03l1Y29rnQgIU"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CZXUiIEn.js"
  },
  "/assets/apple-CE4lB_au.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-hD+qAHXa33U8Cd0cwC7XE/QT//k"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 315,
    "path": "../public/assets/apple-CE4lB_au.js"
  },
  "/assets/associado-2lJlZPan.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"734f-1LJQY3AdrN1A+MLZ48v1OvE0P6Y"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 29519,
    "path": "../public/assets/associado-2lJlZPan.js"
  },
  "/assets/building-2-BxcpJxt9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-J61dhfn23nxBaRcvznKs1k/eotE"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 384,
    "path": "../public/assets/building-2-BxcpJxt9.js"
  },
  "/assets/check-Bq0KBa07.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-gKW66znIUhzkKN6kKDNEmAjRgeA"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 120,
    "path": "../public/assets/check-Bq0KBa07.js"
  },
  "/assets/auth-sxnM-djL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9f92-ImZvmX809j2N5VrgnkhvXfcocbA"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 40850,
    "path": "../public/assets/auth-sxnM-djL.js"
  },
  "/assets/circle-check-pOlCly5W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-/3U048/sXlYvAEV4qq51jvAxjbQ"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 174,
    "path": "../public/assets/circle-check-pOlCly5W.js"
  },
  "/assets/circle-x-CWC7g_vU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-S/o0EapgheAGMvcA324VoVx21LE"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 405,
    "path": "../public/assets/circle-x-CWC7g_vU.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-21T21:10:08.022Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-CaqFBw7K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-e8GwaeBG+kejXBUr75xmjAJD/nk"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 8068,
    "path": "../public/assets/contato-CaqFBw7K.js"
  },
  "/assets/credit-card-4O3-uhIJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-7FkvGM/5rTTMvLGi8LBoH0uKSqs"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 208,
    "path": "../public/assets/credit-card-4O3-uhIJ.js"
  },
  "/assets/download-DrbtOkxT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-PjajOxVb/vl2jlMpGSm4yeeQXWE"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 8305,
    "path": "../public/assets/download-DrbtOkxT.js"
  },
  "/assets/dumbbell-5YKJ0uLz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-msPy90Yalyl0aaGAusWO+upCDf4"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 561,
    "path": "../public/assets/dumbbell-5YKJ0uLz.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/eye-BFZ18tBh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-Qn0Em6eoQ8+qNgQmbaIdxDGezKo"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 252,
    "path": "../public/assets/eye-BFZ18tBh.js"
  },
  "/assets/admin-DbACQz55.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"814e5-/jHqkMd4tqvEW5cx7dIK5/PtdJM"',
    "mtime": "2026-08-21T21:10:08.026Z",
    "size": 529637,
    "path": "../public/assets/admin-DbACQz55.js"
  },
  "/assets/faq-CFaJmenT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-Xk0GUzz/gd41H6GDxV8zOiCCFNY"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 8169,
    "path": "../public/assets/faq-CFaJmenT.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-C1nEMXyY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-3HITxOL2pbUhFiKU+ByD3PYZ8nQ"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 350,
    "path": "../public/assets/gift-C1nEMXyY.js"
  },
  "/assets/heart-BEqm95gb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-ykLsZc+zLftoJ5TQs2LOEkbuVtg"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 259,
    "path": "../public/assets/heart-BEqm95gb.js"
  },
  "/assets/home-B3HHnJ4U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-X5bYEelTrQxqawpE7hJEhnc6hZc"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 11065,
    "path": "../public/assets/home-B3HHnJ4U.js"
  },
  "/assets/index-Bl0onGTU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68498-OQlOERKzcLWNuyWvz+x4DHwrwKw"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 427160,
    "path": "../public/assets/index-Bl0onGTU.js"
  },
  "/assets/levels-BHnBwdAh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-AFiwvCC9E4IVomh5svW1OdKF4io"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 6864,
    "path": "../public/assets/levels-BHnBwdAh.js"
  },
  "/assets/index-CfL3IO2i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4a9-EHmeBE0MoXtTXWu9reGiVmZj9Jk"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 58537,
    "path": "../public/assets/index-CfL3IO2i.js"
  },
  "/assets/link-2-DKddnsgC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-aj+MAnWcBunhXnfZcz85b24pSiI"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 243,
    "path": "../public/assets/link-2-DKddnsgC.js"
  },
  "/assets/lock-D-zs-QIR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-fiiUkFFQPw5jRHBpURQUo/Ws6aQ"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 202,
    "path": "../public/assets/lock-D-zs-QIR.js"
  },
  "/assets/mail-DvNP5KeZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-VAWKiqC0kLxlC0xfc3deoKu0654"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 214,
    "path": "../public/assets/mail-DvNP5KeZ.js"
  },
  "/assets/map-pin-C_yp1jLz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-aOn+kOQYCg0CRht4TGCoLNSerOE"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 255,
    "path": "../public/assets/map-pin-C_yp1jLz.js"
  },
  "/assets/market-CxDhtKRd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-RMey4X5Dqb26GDOFwh7K+l2x+ac"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 26518,
    "path": "../public/assets/market-CxDhtKRd.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/operational-params-store-DY1qheNf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-kmUgsF5sxb/rRUQiV/1Q9oIVHo0"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-DY1qheNf.js"
  },
  "/assets/parceiros-KC55MSal.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fad-CtVTaRQNbi7E5FOwV/f70SmeTmE"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 24493,
    "path": "../public/assets/parceiros-KC55MSal.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-21T21:10:08.026Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-21T21:10:11.427Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-21T21:10:11.428Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-tBKBOoqV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-j6xswQIOcdxgNW1x/wz673l+uUs"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 646,
    "path": "../public/assets/percent-tBKBOoqV.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-21T21:10:08.022Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-21T21:10:08.022Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-21T21:10:08.022Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-C400V-JW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13268-+n13wjVa0q6C/XHqwQfBFOgIt3Q"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 78440,
    "path": "../public/assets/profile-C400V-JW.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-21T21:10:08.023Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-21T21:10:08.028Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-21T21:10:11.430Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-21T21:10:08.022Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-B-EVl1cU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-0qqWIIWB1nS/YbuqmmhS70C5JN0"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 410,
    "path": "../public/assets/save-B-EVl1cU.js"
  },
  "/assets/search-tIXSkWL-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-cc6xxgP1bgK9Epk99Tk7jyupAb0"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 170,
    "path": "../public/assets/search-tIXSkWL-.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-21T21:10:08.027Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/share-2-CbfLrdRT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-pXJfbXpQzXG7w2YLHaXVqp68YuE"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 353,
    "path": "../public/assets/share-2-CbfLrdRT.js"
  },
  "/assets/shield-check-CsMRqVRu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-tdJzmJNwu+49iEEaHx7HgO58hGA"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 316,
    "path": "../public/assets/shield-check-CsMRqVRu.js"
  },
  "/assets/styles-C77-bgPW.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23e0e-ygCqVWQ58QI7mzouCK0nLqKnfuc"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 146958,
    "path": "../public/assets/styles-C77-bgPW.css"
  },
  "/assets/truck-BpxCtfcR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-viEyrg2C29fBh9XD21ENPTNugAc"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 1109,
    "path": "../public/assets/truck-BpxCtfcR.js"
  },
  "/assets/user-1ADzQAp2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d7-l476HFdgOmRIddLfV55ynwHIG78"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 471,
    "path": "../public/assets/user-1ADzQAp2.js"
  },
  "/assets/user-plus-CUp_eXrJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ee-Ug6pkeoXuQQ5tGShik18ySO5OpQ"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 494,
    "path": "../public/assets/user-plus-CUp_eXrJ.js"
  },
  "/assets/users-DjInWiwK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-vLOIwKrx/egYVum82lG0KYv45PY"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 307,
    "path": "../public/assets/users-DjInWiwK.js"
  },
  "/assets/wallet-hkrBRP-G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-xGcX6fm7zDkBSJ6BJdkkXxRFF3k"',
    "mtime": "2026-08-21T21:10:08.025Z",
    "size": 5150,
    "path": "../public/assets/wallet-hkrBRP-G.js"
  },
  "/assets/zap-DHjOUdSw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-qb396dfR50zAPTrQ9Hm6g3iOMTE"',
    "mtime": "2026-08-21T21:10:08.024Z",
    "size": 263,
    "path": "../public/assets/zap-DHjOUdSw.js"
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
