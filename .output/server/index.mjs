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
    "mtime": "2026-08-24T19:04:06.424Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T19:04:06.424Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-B9bUNfP5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-IxIYYVwtdXWCnpy72SSF0rHhXxE"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-B9bUNfP5.js"
  },
  "/assets/ProductDetailSheet-CI7-71uK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-gQNJmr5XOQl+3q/mq1n28e2vMug"',
    "mtime": "2026-08-24T19:04:02.088Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-CI7-71uK.js"
  },
  "/assets/activities-ecDC3CxI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-3R/9mJOn4jdUEfhVBFkRrBbosBk"',
    "mtime": "2026-08-24T19:04:02.086Z",
    "size": 1159,
    "path": "../public/assets/activities-ecDC3CxI.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T19:04:02.088Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-gpZv26V1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-Key4eIt69Fl5QYwOk0M2FU8L1Rs"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 315,
    "path": "../public/assets/apple-gpZv26V1.js"
  },
  "/assets/arrow-up-right-DioqCpOj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-Fzqi69bJ0kGiiGAZD5lDeVL2/3M"',
    "mtime": "2026-08-24T19:04:02.091Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-DioqCpOj.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-CYwwryL2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7451-KrZQsbzI2JwHp5WgY5OO1MRmWJI"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 29777,
    "path": "../public/assets/associado-CYwwryL2.js"
  },
  "/assets/auth-CxkZZUnp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a154-39pGXKl63fbMem84DFyozBDIOLA"',
    "mtime": "2026-08-24T19:04:02.086Z",
    "size": 41300,
    "path": "../public/assets/auth-CxkZZUnp.js"
  },
  "/assets/building-2-R0sR4Ilc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-qOZCnsFEakcbDuxs8pNiWSNUGS8"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 384,
    "path": "../public/assets/building-2-R0sR4Ilc.js"
  },
  "/assets/check-anNOjjAl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-t4UsIXuTpgWMGTcEV6ZBKjHehwk"',
    "mtime": "2026-08-24T19:04:02.090Z",
    "size": 120,
    "path": "../public/assets/check-anNOjjAl.js"
  },
  "/assets/circle-check-pNTONNnS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-xXNWGPmJkyyUUUXgxyyMA8cVXN0"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 174,
    "path": "../public/assets/circle-check-pNTONNnS.js"
  },
  "/assets/circle-x-Cb_KbLs9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-WK1Nvm2PcJM7T+4F6UYJRQRhWRw"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 405,
    "path": "../public/assets/circle-x-Cb_KbLs9.js"
  },
  "/assets/contato-2NJONwR9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-n2Y8UZKv03GEI9Z1iqVnAiWfwsY"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 8068,
    "path": "../public/assets/contato-2NJONwR9.js"
  },
  "/assets/credit-card-CY0XcsMw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-o5Dxd0dZVGikHT54jF0T5dC45RU"',
    "mtime": "2026-08-24T19:04:02.090Z",
    "size": 208,
    "path": "../public/assets/credit-card-CY0XcsMw.js"
  },
  "/assets/download-Q7arMUwr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-bLWlKJPDNuYavM24RGIjNcWlD2Q"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 8305,
    "path": "../public/assets/download-Q7arMUwr.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T19:04:02.083Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-5dmOiKLZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-7+9ZwyKra9m/BkOqSZ2ewW0bF1Y"',
    "mtime": "2026-08-24T19:04:02.091Z",
    "size": 561,
    "path": "../public/assets/dumbbell-5dmOiKLZ.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/eye--9OCCKlx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-sUABrS9xyYCTVb52/gxV5ZyNdYY"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 252,
    "path": "../public/assets/eye--9OCCKlx.js"
  },
  "/assets/admin-BQtcq2uK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"814e5-vSl4ICVnkNS+0IJF6bTbCiYp1DE"',
    "mtime": "2026-08-24T19:04:02.094Z",
    "size": 529637,
    "path": "../public/assets/admin-BQtcq2uK.js"
  },
  "/assets/faq-CJ6Fc2Av.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-QgKWG7VHEYm6Ft5viVQt9kOQLRs"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 8169,
    "path": "../public/assets/faq-CJ6Fc2Av.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-BglYxXao.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-jip9lffkKxu/v+wFEkAfPj1b1VM"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 350,
    "path": "../public/assets/gift-BglYxXao.js"
  },
  "/assets/heart-CMYwfUvG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-P1G3KcvXL9+DkenLoZoTDStdEhg"',
    "mtime": "2026-08-24T19:04:02.090Z",
    "size": 259,
    "path": "../public/assets/heart-CMYwfUvG.js"
  },
  "/assets/home-zJ7nUfjb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-JuJxO6hdJ+Sx7dyW7nfvFUg3KFU"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 11065,
    "path": "../public/assets/home-zJ7nUfjb.js"
  },
  "/assets/index-BFfGvTkN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-EQhzkx5qu0IrOMdEMJe/oTsPuK4"',
    "mtime": "2026-08-24T19:04:02.086Z",
    "size": 58579,
    "path": "../public/assets/index-BFfGvTkN.js"
  },
  "/assets/link-2-BAIljoG8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-KKqFLg6NyNk0AOZrxvq5GVlytw4"',
    "mtime": "2026-08-24T19:04:02.090Z",
    "size": 243,
    "path": "../public/assets/link-2-BAIljoG8.js"
  },
  "/assets/levels-DHqgid8c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-LIwjmVdG8WeNgDBsmQdol/ljZMM"',
    "mtime": "2026-08-24T19:04:02.088Z",
    "size": 6864,
    "path": "../public/assets/levels-DHqgid8c.js"
  },
  "/assets/lock-ClcPmTgs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-EfbB24ran7VT5znvkRCtZpoJg7Y"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 202,
    "path": "../public/assets/lock-ClcPmTgs.js"
  },
  "/assets/mail-D5Hmvfhj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-2+I0K8+jCfk5nDlLZQosEYmMCas"',
    "mtime": "2026-08-24T19:04:02.091Z",
    "size": 214,
    "path": "../public/assets/mail-D5Hmvfhj.js"
  },
  "/assets/market-Cc6Bl1Ju.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-9nRT8fn2bCnhAh9JB9cQhDTdSi4"',
    "mtime": "2026-08-24T19:04:02.088Z",
    "size": 26518,
    "path": "../public/assets/market-Cc6Bl1Ju.js"
  },
  "/assets/map-pin-CRq_owXB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-X5Bp2VC/kGtTLGjZYQABQ09gk5k"',
    "mtime": "2026-08-24T19:04:02.092Z",
    "size": 255,
    "path": "../public/assets/map-pin-CRq_owXB.js"
  },
  "/assets/index-BO3Mkajg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69bc9-rd4whKLY/qRND7M0zx33BsKwmW0"',
    "mtime": "2026-08-24T19:04:02.086Z",
    "size": 433097,
    "path": "../public/assets/index-BO3Mkajg.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T19:04:02.091Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/operational-params-store-k_oCaNuC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-e3EVZPe8YnNykmTWi4BLM3F0lGQ"',
    "mtime": "2026-08-24T19:04:02.092Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-k_oCaNuC.js"
  },
  "/assets/parceiros-CY0BoWqZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fbe-4oQIOtuB2Jc2u28ayOn38kCkq2U"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 24510,
    "path": "../public/assets/parceiros-CY0BoWqZ.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T19:04:02.094Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T19:04:06.434Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T19:04:06.438Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-gfjdzAQI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-M/J5CioEk7Mb2j95q1Dc6tGGxPg"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 646,
    "path": "../public/assets/percent-gfjdzAQI.js"
  },
  "/assets/phone--0lWvjFk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-M3f9tITA9cYPYT8I/4BVqxMUGXI"',
    "mtime": "2026-08-24T19:04:02.091Z",
    "size": 323,
    "path": "../public/assets/phone--0lWvjFk.js"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-Ca8UH9i1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6030-8ZbbRqblQsRB4w+T+abYyZH6NdU"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 24624,
    "path": "../public/assets/profile-Ca8UH9i1.js"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-24T19:04:02.068Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T19:04:02.092Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T19:04:02.100Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T19:04:06.442Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T19:04:02.084Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-KYE1710q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-UHWLKxra0xeMrO8ScGpVr0SuaSM"',
    "mtime": "2026-08-24T19:04:02.090Z",
    "size": 410,
    "path": "../public/assets/save-KYE1710q.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T19:04:02.095Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-CrivjN1n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-3nrEbhMmhn/FIgRKlo+IKzJDPwM"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 170,
    "path": "../public/assets/search-CrivjN1n.js"
  },
  "/assets/share-2-CANtIwmU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-Mr/Y+2LeoXGj4TRXEvtpBZOmP1k"',
    "mtime": "2026-08-24T19:04:02.087Z",
    "size": 353,
    "path": "../public/assets/share-2-CANtIwmU.js"
  },
  "/assets/shield-check-C4KxPT_L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-+Bm5eSkMEPOXA8ums8X4btfvoR0"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 316,
    "path": "../public/assets/shield-check-C4KxPT_L.js"
  },
  "/assets/truck-D-lypF4N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-C2H3QuPgixa4i3c9Q5ooiDPzY4w"',
    "mtime": "2026-08-24T19:04:02.089Z",
    "size": 1109,
    "path": "../public/assets/truck-D-lypF4N.js"
  },
  "/assets/styles-D-4kt748.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23f08-L+4B/zwT2kOLv7eoF0gjzAM+Lkg"',
    "mtime": "2026-08-24T19:04:02.085Z",
    "size": 147208,
    "path": "../public/assets/styles-D-4kt748.css"
  },
  "/assets/user-plus-Cyk_e4bL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ee-TZGSOdNXuXSNQex3C+fAsrdPZKk"',
    "mtime": "2026-08-24T19:04:02.092Z",
    "size": 494,
    "path": "../public/assets/user-plus-Cyk_e4bL.js"
  },
  "/assets/users-oIS5gu2H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-mVCSWFsYvdKuV60gDRcRNXb2o4w"',
    "mtime": "2026-08-24T19:04:02.090Z",
    "size": 307,
    "path": "../public/assets/users-oIS5gu2H.js"
  },
  "/assets/wallet-C5byWu0-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-3k3YcHD1+zTLcJPsY1AcBarHEBo"',
    "mtime": "2026-08-24T19:04:02.091Z",
    "size": 5150,
    "path": "../public/assets/wallet-C5byWu0-.js"
  },
  "/assets/zap-Q9IYwAJd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-XYxVypdezP6+s38mqzFFtIkm8FE"',
    "mtime": "2026-08-24T19:04:02.088Z",
    "size": 263,
    "path": "../public/assets/zap-Q9IYwAJd.js"
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
