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
    "mtime": "2026-08-24T16:11:00.431Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T16:11:00.432Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-B52I0KG5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-r2InYdh1IyTH1kLW3t554hsQZ+s"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-B52I0KG5.js"
  },
  "/assets/ProductDetailSheet-KxrY1U4q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-2g9mTXG0YCNrjzhD7Pn3vk+sRGc"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-KxrY1U4q.js"
  },
  "/assets/activities-DKbKPUFe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-ONfIMSqCz0p9lTPJ+nIpz+tsKhY"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 1159,
    "path": "../public/assets/activities-DKbKPUFe.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T16:10:56.616Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-JmnooI7a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-vQ09/UscCDgNyns42a2iRtowAa0"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 315,
    "path": "../public/assets/apple-JmnooI7a.js"
  },
  "/assets/arrow-up-right-D-0MynqU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-DyCEUy3gmJRJFCc3LX39emWsUKY"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-D-0MynqU.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T16:10:56.615Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-CRjPRbQO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"734f-OhqM/EJpahrfadnxgOEGAkmhiDM"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 29519,
    "path": "../public/assets/associado-CRjPRbQO.js"
  },
  "/assets/auth-DnEnGtH7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9f93-ProC84cmVTvK9LOJYal+A7AHL5I"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 40851,
    "path": "../public/assets/auth-DnEnGtH7.js"
  },
  "/assets/building-2-CMMugael.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-ELmfbmJzVtST9CsviJXwt0+3i94"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 384,
    "path": "../public/assets/building-2-CMMugael.js"
  },
  "/assets/check-D_-aKJeU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-aVHuVfIxdDZ0yaGABNvkD09luU4"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 120,
    "path": "../public/assets/check-D_-aKJeU.js"
  },
  "/assets/circle-check-DhDfbmGh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-t9vICx5Vd3n2ARQS0MFgB4VgOLo"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 174,
    "path": "../public/assets/circle-check-DhDfbmGh.js"
  },
  "/assets/circle-x-BgT6H7Pe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-l2OzD8qFrHNq+9eWiZaJjR1cj58"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 405,
    "path": "../public/assets/circle-x-BgT6H7Pe.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T16:10:56.615Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-4G7qAXcl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-49HRaR7k/akQjUGi1gaVVtrF5Bs"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 8068,
    "path": "../public/assets/contato-4G7qAXcl.js"
  },
  "/assets/credit-card-FJ-cYvKS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-nnorNQneTN3Bv75vQRiia07QOYY"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 208,
    "path": "../public/assets/credit-card-FJ-cYvKS.js"
  },
  "/assets/download-CBR1xdP1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-5UkQzzOwNQTuO4j8FZuBmp4UL8o"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 8305,
    "path": "../public/assets/download-CBR1xdP1.js"
  },
  "/assets/dumbbell-C4drlWY4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-oLIlP8VWCW8fpKyWezZjZ4iN2OE"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C4drlWY4.js"
  },
  "/assets/eye-B6zoQSwo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-nw0W2Ocr9FGsGhP71+eVEZA1c1c"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 252,
    "path": "../public/assets/eye-B6zoQSwo.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T16:10:56.615Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-Nd-EeNOn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"814e5-hUFz1dEJCQSmbVel82RoVTC+M8A"',
    "mtime": "2026-08-24T16:10:56.623Z",
    "size": 529637,
    "path": "../public/assets/admin-Nd-EeNOn.js"
  },
  "/assets/faq-DGmzVqeC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-R0TjNK3yC21VqFZGvYq8YmowGNQ"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 8169,
    "path": "../public/assets/faq-DGmzVqeC.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T16:10:56.616Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T16:10:56.615Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T16:10:56.616Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-Ba6D7ZE2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-VxtOBrcUYDoEphvb8/E0Ndl8SnE"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 350,
    "path": "../public/assets/gift-Ba6D7ZE2.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/heart-0S1Onurx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-qiyeRdRCWMnaHl4tDqrI+ECHGRo"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 259,
    "path": "../public/assets/heart-0S1Onurx.js"
  },
  "/assets/home-DAnGOkhc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-Tfrz8CSOkwGN79rhO+2DRhhDoEk"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 11065,
    "path": "../public/assets/home-DAnGOkhc.js"
  },
  "/assets/index-BIggBBEp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-okt86u4I8iSjstp2bszG25y9sA0"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 58579,
    "path": "../public/assets/index-BIggBBEp.js"
  },
  "/assets/levels-C4bpt0BD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-2kQx4D6bNBRJ/eoK4DGcrjru8l4"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 6864,
    "path": "../public/assets/levels-C4bpt0BD.js"
  },
  "/assets/link-2-SfAPH1C_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-6J+0e+AwQ14JKbD1xb1QOWTFn7k"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 243,
    "path": "../public/assets/link-2-SfAPH1C_.js"
  },
  "/assets/lock-CRsPTzrt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-ls5w3TFcgguutwOfMnOZdIHSAMU"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 202,
    "path": "../public/assets/lock-CRsPTzrt.js"
  },
  "/assets/mail-DBgk6UXe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-0Fy28aoAq0MTnpLPaTg4tO5vb20"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 214,
    "path": "../public/assets/mail-DBgk6UXe.js"
  },
  "/assets/map-pin-B6vwZl6Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-Suu7Wg3FS0l/VvGZlGYnnFjsPL0"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 255,
    "path": "../public/assets/map-pin-B6vwZl6Y.js"
  },
  "/assets/market-RL7sr8YA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-1sQtuC0C4h+aiZPshITutbnzovM"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 26518,
    "path": "../public/assets/market-RL7sr8YA.js"
  },
  "/assets/index-Ck9hotzL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69918-l3MllFOBQo6DYJokA9Q+foQF+SU"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 432408,
    "path": "../public/assets/index-Ck9hotzL.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T16:10:56.620Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/operational-params-store-C8G0hfs9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-U/dMd54rpMzy1o/phRFipmmCrRI"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-C8G0hfs9.js"
  },
  "/assets/parceiros-DtpOutLf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5fad-AISBY75bcBnjL3+ina1XVZt+qkE"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 24493,
    "path": "../public/assets/parceiros-DtpOutLf.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T16:10:56.616Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T16:11:00.441Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T16:11:00.440Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-pFyieCUj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-YjBGsHUnmbPpCByi7LIUF1NwaVw"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 646,
    "path": "../public/assets/percent-pFyieCUj.js"
  },
  "/assets/phone-B_69u3pg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-6OZG6Dv0SdSPoH5O5SMftDX43uI"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 323,
    "path": "../public/assets/phone-B_69u3pg.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T16:10:56.615Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T16:10:56.615Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T16:10:56.615Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-24T16:10:56.615Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/profile-BeO8SeiI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13269-GLem8Rm/7MHSJg3t95dAHWUiJ1Q"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 78441,
    "path": "../public/assets/profile-BeO8SeiI.js"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T16:10:56.626Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T16:10:56.616Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T16:11:00.441Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T16:10:56.616Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/save-C4kMSpJU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-WqgO92G3fJutEX3Ks9gU+hMz5ZQ"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 410,
    "path": "../public/assets/save-C4kMSpJU.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T16:10:56.616Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T16:10:56.625Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-CMcQFjtt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-6A3zYYdFeT+UPHVggaRT0o82Uy0"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 170,
    "path": "../public/assets/search-CMcQFjtt.js"
  },
  "/assets/shield-check-y-fJpero.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-QYgmdwhNxVbBBtTjjg8cRFxEvaU"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 316,
    "path": "../public/assets/shield-check-y-fJpero.js"
  },
  "/assets/share-2-DPoV97_N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-C5eUpFKyDswvIJGgg8544fPdtpU"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 353,
    "path": "../public/assets/share-2-DPoV97_N.js"
  },
  "/assets/styles-BxUmEA30.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23ee4-WrnZzKPvyeEHpR4yILrFlW9l4Hk"',
    "mtime": "2026-08-24T16:10:56.617Z",
    "size": 147172,
    "path": "../public/assets/styles-BxUmEA30.css"
  },
  "/assets/truck-7A-o_0C3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-zgJ8slBtxxxIZ0I/u8O7+AzPff8"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 1109,
    "path": "../public/assets/truck-7A-o_0C3.js"
  },
  "/assets/user-plus-CKyQ7CH5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ee-QQkMGcUoDwGilU/Y88hc95E79Fs"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 494,
    "path": "../public/assets/user-plus-CKyQ7CH5.js"
  },
  "/assets/users-BDyMVu3e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-iffXAqWrmyZ2mYFAcfqXhT95e+s"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 307,
    "path": "../public/assets/users-BDyMVu3e.js"
  },
  "/assets/wallet-BX0Z2COb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-GAF/QHPLkZFuGf14yVHXCJd5uzM"',
    "mtime": "2026-08-24T16:10:56.619Z",
    "size": 5150,
    "path": "../public/assets/wallet-BX0Z2COb.js"
  },
  "/assets/zap-CJPOa2kw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-FzyR6ofzeh65LGLEtMxYMyIlcX4"',
    "mtime": "2026-08-24T16:10:56.618Z",
    "size": 263,
    "path": "../public/assets/zap-CJPOa2kw.js"
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
