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
    "mtime": "2026-08-24T20:10:44.078Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T20:10:44.083Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-qkyOlYjL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-PmcKeBsX0OxHj/ieRsL5De+kqx4"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-qkyOlYjL.js"
  },
  "/assets/ProductDetailSheet-CI6dv-06.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-tXSSfWWkQKWlwFa8NdBOUjvZbYQ"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-CI6dv-06.js"
  },
  "/assets/activities--GjA9CZY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-TifzTFHLzgy9MYX/x8sPLWFErRo"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 1196,
    "path": "../public/assets/activities--GjA9CZY.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-_XqmVbly.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-rdYGRsjFAW78wwxFsq87z3kG6bE"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 315,
    "path": "../public/assets/apple-_XqmVbly.js"
  },
  "/assets/arrow-up-right-BdCf7wyX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-h43+Lwb+oYckYMB/ZzJ6dUoyeMY"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BdCf7wyX.js"
  },
  "/assets/associado-BAx7hA6j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7461-f9UPFvUF7eWipMqg3fgu5TnQer4"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 29793,
    "path": "../public/assets/associado-BAx7hA6j.js"
  },
  "/assets/auth-BDUZVFVN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a182-vomDLDZ/WdROMN25/aLVyvBoW7k"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 41346,
    "path": "../public/assets/auth-BDUZVFVN.js"
  },
  "/assets/building-2-Bf-tw7h_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-d1rcj2ws+Url1UteRvA2lPZkuTo"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 384,
    "path": "../public/assets/building-2-Bf-tw7h_.js"
  },
  "/assets/check-5JR8Lt2-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-ZTHH1n3YSHD7VNY61EfKmMVEqAg"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 120,
    "path": "../public/assets/check-5JR8Lt2-.js"
  },
  "/assets/circle-check-DOoUMynJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-vtJX1Xhgfqohv/R/G7h0XfVNsjM"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 174,
    "path": "../public/assets/circle-check-DOoUMynJ.js"
  },
  "/assets/circle-x-wEh_3eu5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-y3Cy/WEzWrP7w6TWM/nW3m7yTis"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 405,
    "path": "../public/assets/circle-x-wEh_3eu5.js"
  },
  "/assets/contato-B_SYwjNH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-bOJJCeLGnrUB4pThGAf6nUWU7C4"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 8068,
    "path": "../public/assets/contato-B_SYwjNH.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T20:10:37.105Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T20:10:37.094Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-4x5PmBSB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-Zb9T/Bh3yBT939erp3mq5jzt5ec"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 208,
    "path": "../public/assets/credit-card-4x5PmBSB.js"
  },
  "/assets/download-KYvi4k4D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-zhuT0WDFi9mkZPxxNGFjxXE7eYc"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 8305,
    "path": "../public/assets/download-KYvi4k4D.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T20:10:37.105Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/dumbbell-CSsPRcH0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-4HMproN/iLQI6YbIJPwHRgFi2KI"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CSsPRcH0.js"
  },
  "/assets/eye-Bfashzj7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-rc3oExZ9PRce4QovfWaT111MMVU"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 252,
    "path": "../public/assets/eye-Bfashzj7.js"
  },
  "/assets/admin-Du29bN5x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f1f-DR7qaYHzQmumCUhAubErY3pXSdU"',
    "mtime": "2026-08-24T20:10:37.108Z",
    "size": 540447,
    "path": "../public/assets/admin-Du29bN5x.js"
  },
  "/assets/faq-DbhBP86E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-tF6bWwd7NQwuNaQT5VfQmJSK61k"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 8169,
    "path": "../public/assets/faq-DbhBP86E.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T20:10:37.094Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T20:10:37.094Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T20:10:37.097Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/heart-DTUyGzVR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-iKbf2ERHu66stJ6gZdYvzOeZenk"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 259,
    "path": "../public/assets/heart-DTUyGzVR.js"
  },
  "/assets/gift-BtM6-Z8Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-AX7nuxiqj3ypL/VHLJyBRzxz4XM"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 350,
    "path": "../public/assets/gift-BtM6-Z8Y.js"
  },
  "/assets/home-CHsxbk-P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-IJKcHdKGP9x61cE8qT8UrxWcJOI"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 11065,
    "path": "../public/assets/home-CHsxbk-P.js"
  },
  "/assets/index-ykki7Ft1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4f8-ULJr+rOvyzCMAWUZjcWVdk/Oc9A"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 58616,
    "path": "../public/assets/index-ykki7Ft1.js"
  },
  "/assets/levels-Cy1vtm_5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-cFIbxdtprXgSgKN6xpEZcXZgMck"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 6869,
    "path": "../public/assets/levels-Cy1vtm_5.js"
  },
  "/assets/index-Pl3mnSPQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68ca1-y6ANUvyv5stJEyFFWUciI9uGBRs"',
    "mtime": "2026-08-24T20:10:37.105Z",
    "size": 429217,
    "path": "../public/assets/index-Pl3mnSPQ.js"
  },
  "/assets/link-2-JDMDNr8c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-6iHicV1YPTWa4cag3s7rLWqyGmc"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 243,
    "path": "../public/assets/link-2-JDMDNr8c.js"
  },
  "/assets/lock-PyEiE38L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-y32/lT4xWj3DkmuMNBUHNKdKzFQ"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 202,
    "path": "../public/assets/lock-PyEiE38L.js"
  },
  "/assets/log-in-Bxqkp_Iv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-31AkxXSU1okhB9zMpM4+8zOen5Y"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 232,
    "path": "../public/assets/log-in-Bxqkp_Iv.js"
  },
  "/assets/mail-mxJldfyv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-RBC1e8bDRRnAyOhMbddhmkspCwg"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 214,
    "path": "../public/assets/mail-mxJldfyv.js"
  },
  "/assets/map-pin-BwR3IaBY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-oAenC/9XuGcMK1AMYQGZr1v4VXc"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 255,
    "path": "../public/assets/map-pin-BwR3IaBY.js"
  },
  "/assets/market-ExC18CJb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-SrFtBMMUMAIouHtVu15aLmb337E"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 26557,
    "path": "../public/assets/market-ExC18CJb.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:10:44.094Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T20:10:44.092Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/operational-params-store-DOg16Q-L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-J2A7aRMHjkqrb4gj0ma2ZGuINwg"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-DOg16Q-L.js"
  },
  "/assets/parceiros-GwK-s45r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-yKBgSi6DK85FyjichWw641EyQsw"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 25692,
    "path": "../public/assets/parceiros-GwK-s45r.js"
  },
  "/assets/percent-C41ur7E_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-1YZgGDPbrGY5yjdTL8uLOcP3wR8"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 646,
    "path": "../public/assets/percent-C41ur7E_.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T20:10:37.105Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T20:10:37.104Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T20:10:37.103Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T20:10:37.094Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T20:10:37.104Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T20:10:37.104Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T20:10:37.094Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T20:10:37.094Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T20:10:37.097Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T20:10:37.104Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-ClwEEUOX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6031-vTHFkSUWMo3fMewVFuy9MiKNGfY"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 24625,
    "path": "../public/assets/profile-ClwEEUOX.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:10:37.110Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:10:44.096Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T20:10:37.095Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T20:10:37.094Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-CBIPK1hz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-xkwtteJbRk+RWla7xP3AeNefHNE"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 410,
    "path": "../public/assets/save-CBIPK1hz.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T20:10:37.109Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-3jdZPhbO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-lnvWruIaxHRYMawbKcIcFohaknM"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 170,
    "path": "../public/assets/search-3jdZPhbO.js"
  },
  "/assets/share-2-B02-v19Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-rJ91RKSFWZ2xoc4lJcokdXxSw9w"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 353,
    "path": "../public/assets/share-2-B02-v19Y.js"
  },
  "/assets/shield-check-Cv0MHk2l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-Fft2dRKt8HON4eOFHNxfErSeWZc"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 316,
    "path": "../public/assets/shield-check-Cv0MHk2l.js"
  },
  "/assets/styles-DZx1DdIK.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23fa3-U578GZivv8glS+IecL4bYfU0nqM"',
    "mtime": "2026-08-24T20:10:37.105Z",
    "size": 147363,
    "path": "../public/assets/styles-DZx1DdIK.css"
  },
  "/assets/truck-CvwPNZ7C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-+B/jjptQJO1jMthCa41kzDBZfJc"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 1109,
    "path": "../public/assets/truck-CvwPNZ7C.js"
  },
  "/assets/user-plus-CDSG7iqd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-hnWNKCdyOWMme+VcmM8rKO0mUBM"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 585,
    "path": "../public/assets/user-plus-CDSG7iqd.js"
  },
  "/assets/users-C9wT_3oU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-WR5ZeLw1eb9qxXqX6ZBmNkMl0T8"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 307,
    "path": "../public/assets/users-C9wT_3oU.js"
  },
  "/assets/wallet-Dchx8QoX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1708-vzVaVGG7x+qnu5fhoKFOBX3jIJ8"',
    "mtime": "2026-08-24T20:10:37.107Z",
    "size": 5896,
    "path": "../public/assets/wallet-Dchx8QoX.js"
  },
  "/assets/zap-DrYA84YY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-x/6FU6a4LZzq28Q0vB4R4++HNEs"',
    "mtime": "2026-08-24T20:10:37.106Z",
    "size": 263,
    "path": "../public/assets/zap-DrYA84YY.js"
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
