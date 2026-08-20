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
    "mtime": "2026-08-20T21:04:09.740Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"526-6zVsZr6XdQArNr/SYsmqBheO7+0"',
    "mtime": "2026-08-20T21:04:09.740Z",
    "size": 1318,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-DglKAZi9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4912-Sn+0D3JlATJHg1rZBYZx3jqAodE"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 18706,
    "path": "../public/assets/ProductDetailSheet-DglKAZi9.js"
  },
  "/assets/activities-DpkpxuQj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-fd8DKF4gqE/u9wQ6cgd8OxseNKQ"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 1159,
    "path": "../public/assets/activities-DpkpxuQj.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-C3Ct1VTX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-Ul1PGxd5sG2EVFLpdzmaCL6HWkU"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 315,
    "path": "../public/assets/apple-C3Ct1VTX.js"
  },
  "/assets/arrow-up-right-CbM836Y9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-C+ipr2aVgKeYS+HDTFRlGalJry0"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CbM836Y9.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-C7Um0BLR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"63f0-1a+Jr9zRJJPBV415hHUeq7rRRTg"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 25584,
    "path": "../public/assets/associado-C7Um0BLR.js"
  },
  "/assets/auth-D9T-vora.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9693-1cBsw6bm0LjaUDPnA/NyDv/SFUg"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 38547,
    "path": "../public/assets/auth-D9T-vora.js"
  },
  "/assets/building-2-CZDPZJCF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-LSOignVamxJ42a9KPZ7jgQ6abl0"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 384,
    "path": "../public/assets/building-2-CZDPZJCF.js"
  },
  "/assets/check-B5BPNZxv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-C+0udDxJ8e4Beg6bDYS1/wPbeGo"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 120,
    "path": "../public/assets/check-B5BPNZxv.js"
  },
  "/assets/chevron-down-65YUrGOz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"81-GCcOpJiSYRyxEJHjd2zepVMiPU8"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 129,
    "path": "../public/assets/chevron-down-65YUrGOz.js"
  },
  "/assets/circle-question-mark-DOS6PIRM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f4-5UL7gBmN71bg7PQ9QK1QaOW/V5I"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 244,
    "path": "../public/assets/circle-question-mark-DOS6PIRM.js"
  },
  "/assets/circle-check-XYZ5-LRQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-NQBi3UfVEvH8E+A2/MxcwjVq75I"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 174,
    "path": "../public/assets/circle-check-XYZ5-LRQ.js"
  },
  "/assets/circle-x-BlvHmwGJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-Wh/QkW9TyVJMnSfT9nw7rfqV9pc"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 405,
    "path": "../public/assets/circle-x-BlvHmwGJ.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-20T21:04:05.822Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-DFmxCkjZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2374-doH/7WRzRFRWgTcA7oIwvYUp3gg"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 9076,
    "path": "../public/assets/contato-DFmxCkjZ.js"
  },
  "/assets/copy-COXgHWW0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-fLIo0q8fS8IusbIJ9OvJsGibvVg"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 232,
    "path": "../public/assets/copy-COXgHWW0.js"
  },
  "/assets/credit-card-ukqRvni5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-jKMU/xK6vR3SnINF2JJO0YJ4AM0"',
    "mtime": "2026-08-20T21:04:05.826Z",
    "size": 208,
    "path": "../public/assets/credit-card-ukqRvni5.js"
  },
  "/assets/download-qTRG2QCt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"24d4-eS6zNwJHf+Dmty1jtuH1d5AypYI"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 9428,
    "path": "../public/assets/download-qTRG2QCt.js"
  },
  "/assets/download-us5bTEUE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-7BVMYfa8ztskbLL6hBisFpS3J/Y"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 233,
    "path": "../public/assets/download-us5bTEUE.js"
  },
  "/assets/admin-BNPTMb4R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8017e-3Q2doCpNxyNPHPot7ZUzYsgOcwM"',
    "mtime": "2026-08-20T21:04:05.831Z",
    "size": 524670,
    "path": "../public/assets/admin-BNPTMb4R.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/dumbbell-BqiRHS30.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-lfNNDAOtK7WhGlUzNsPrA9SquOc"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BqiRHS30.js"
  },
  "/assets/faq-Hlia4t80.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"24ea-ZUHrxEjE2wHOV/DnQhykBlK5I0Q"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 9450,
    "path": "../public/assets/faq-Hlia4t80.js"
  },
  "/assets/eye-7exVGeTT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-6u+UYIp2Z/tadN8KaPhcJ0lNVHo"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 252,
    "path": "../public/assets/eye-7exVGeTT.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-Bvk5pUUw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-Z8ztrRQkEs22kbRhMcMXpSK6mA0"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 350,
    "path": "../public/assets/gift-Bvk5pUUw.js"
  },
  "/assets/heart-CWJ7Socn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-HpNQaXF0gXa1wAg3eUE6zg3W7AY"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 259,
    "path": "../public/assets/heart-CWJ7Socn.js"
  },
  "/assets/home-zpDqb9B6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"34bc-1mWYzd5OThNXKmQ7BxMfdPAS/Bc"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 13500,
    "path": "../public/assets/home-zpDqb9B6.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/levels-D-0YL2SG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-DDFXRLqs1g3jvIvcOetLI+/5Oq8"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 6869,
    "path": "../public/assets/levels-D-0YL2SG.js"
  },
  "/assets/link-2-DqbFtAFi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-ih6MXY26JzZj0PA6SUQKu5LEql8"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 243,
    "path": "../public/assets/link-2-DqbFtAFi.js"
  },
  "/assets/lock-CKWGPZS-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-tkXz82jz6cCkyHIn/ye0/PgKt0I"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 202,
    "path": "../public/assets/lock-CKWGPZS-.js"
  },
  "/assets/index-GP4Yanbq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dfaf-6IDjqwLzHXJIhFAaIkz1LPJFi/w"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 57263,
    "path": "../public/assets/index-GP4Yanbq.js"
  },
  "/assets/mail-C8HEoFt9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-8CYRgEW/of7jcFkj6j/SmE5jg7A"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 214,
    "path": "../public/assets/mail-C8HEoFt9.js"
  },
  "/assets/map-pin-4J38X3UH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-oM2bj1SrUQNXrmAu5O8GseyoUMc"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 255,
    "path": "../public/assets/map-pin-4J38X3UH.js"
  },
  "/assets/market-CryVzMTl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-hsEl6q3Mmf1PZEuOIQPzR2kh2vE"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 26518,
    "path": "../public/assets/market-CryVzMTl.js"
  },
  "/assets/index-CcOdu4Yu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"62af0-ha4tj9pZ0SKZzLbwi870TuznslA"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 404208,
    "path": "../public/assets/index-CcOdu4Yu.js"
  },
  "/assets/log-in-Cr-2hkM3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-xMhwOptoZXzJaHTBlLXjJQYdX/M"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 232,
    "path": "../public/assets/log-in-Cr-2hkM3.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-20T21:04:09.745Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-20T21:04:09.746Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/operational-params-store-Bh7h1Mso.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"63c-qt8lk4rrxdtHyTQLejOgRYcdHFo"',
    "mtime": "2026-08-20T21:04:05.826Z",
    "size": 1596,
    "path": "../public/assets/operational-params-store-Bh7h1Mso.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-20T21:04:05.826Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DQNA5tLb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ec0-6fXhWvYG1CcKVt+3X31MRXHo+KY"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 24256,
    "path": "../public/assets/parceiros-DQNA5tLb.js"
  },
  "/assets/percent-DZBIrJZ8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-Iq1WQLo7J/NGf0qaHt5wsv6xRGs"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 646,
    "path": "../public/assets/percent-DZBIrJZ8.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-20T21:04:05.822Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-DefGuu0W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13285-REJ7POLVlnJrbnNBPs9Pa79vADA"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 78469,
    "path": "../public/assets/profile-DefGuu0W.js"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-20T21:04:05.822Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-20T21:04:05.833Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-20T21:04:05.826Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-20T21:04:05.826Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-20T21:04:05.832Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/save-0TD93Qkp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-1VU7CmaoVOJBywRSkVpN86mJJWE"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 410,
    "path": "../public/assets/save-0TD93Qkp.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-20T21:04:05.823Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-20T21:04:09.751Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/search-zMC1y8Fr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-VyklMSkobRLuEwgFL5y3eeEd9Zs"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 170,
    "path": "../public/assets/search-zMC1y8Fr.js"
  },
  "/assets/share-2-CaCT1fOD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-G9TQ7sdMH00Zv/8IVrenDUOkAcM"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 353,
    "path": "../public/assets/share-2-CaCT1fOD.js"
  },
  "/assets/truck-BByUVPMR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ed-99vuehE7rIfRwXbXvxVyVNru5gw"',
    "mtime": "2026-08-20T21:04:05.826Z",
    "size": 1261,
    "path": "../public/assets/truck-BByUVPMR.js"
  },
  "/assets/styles-B963i7ac.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"22898-UjzBJU9b50x1+xifiEkGTrb55Fc"',
    "mtime": "2026-08-20T21:04:05.824Z",
    "size": 141464,
    "path": "../public/assets/styles-B963i7ac.css"
  },
  "/assets/user-BhVwPhyQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2dd-AjYIaodPCgy3WYoI1J1fAMw1L2Y"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 733,
    "path": "../public/assets/user-BhVwPhyQ.js"
  },
  "/assets/users-DLWoJ7zK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-IoekWwuJiyTPqZFDH17ecTFbWbs"',
    "mtime": "2026-08-20T21:04:05.826Z",
    "size": 307,
    "path": "../public/assets/users-DLWoJ7zK.js"
  },
  "/assets/zap-CluhazJk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-GWib0CPfssXwSrDIGkuETD7CMHU"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 263,
    "path": "../public/assets/zap-CluhazJk.js"
  },
  "/assets/wallet-DZfgDwTz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-oWK1MZOccmICa5gNQWzBzCDZ3v0"',
    "mtime": "2026-08-20T21:04:05.826Z",
    "size": 5150,
    "path": "../public/assets/wallet-DZfgDwTz.js"
  },
  "/assets/shield-check-B0FkWjld.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-yFdVp88u8w4ct6sLDIJUiJZYGJg"',
    "mtime": "2026-08-20T21:04:05.825Z",
    "size": 316,
    "path": "../public/assets/shield-check-B0FkWjld.js"
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
