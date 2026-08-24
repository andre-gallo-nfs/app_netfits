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
  "/assets/InstitutionalWebHeader-8xRUvtcP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-i5FhA3h1WAjH6tNpsmzqYQgqBdc"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-8xRUvtcP.js"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T21:10:08.616Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-C3zoMYi4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-8gsDYUw1WzRIwWtBlOjg/ZsSpd0"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-C3zoMYi4.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/activities-D74BwJ22.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-jER0nzX+XgSAvEO2F6GXgYsoWjA"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 1196,
    "path": "../public/assets/activities-D74BwJ22.js"
  },
  "/assets/apple-BaaGMmQ-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-RLebWDu6h+yDBd2jRIphtBcivI4"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 315,
    "path": "../public/assets/apple-BaaGMmQ-.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/arrow-up-right-D4gwq9CY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-IBPrBcZeCBhHKMhIY3Ij/YyQqqU"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-D4gwq9CY.js"
  },
  "/assets/associado-5W0QHUMB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"742d-Z1OdMQFxWRt1pd9ROefm3Deggxw"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 29741,
    "path": "../public/assets/associado-5W0QHUMB.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/auth-CW-id2Rh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b6ae-qHbzLqqCbkMHLsARdUTyq5k6Xi8"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 46766,
    "path": "../public/assets/auth-CW-id2Rh.js"
  },
  "/assets/building-2-INm0qh7H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-CvTWdKnfWWIWXvtACVxbGEsfmUM"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 384,
    "path": "../public/assets/building-2-INm0qh7H.js"
  },
  "/assets/calendar-C069723O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-msoF1dx44c8KQc7TYVklHybs0dE"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 258,
    "path": "../public/assets/calendar-C069723O.js"
  },
  "/assets/check-B0pi0Yq1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-9lAqbLPeAHNiALXRnHDSB5fdeOI"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 120,
    "path": "../public/assets/check-B0pi0Yq1.js"
  },
  "/assets/circle-check-CqwPGNW5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-4QEK0kr6HX051+hduEZyIAkA9xU"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 174,
    "path": "../public/assets/circle-check-CqwPGNW5.js"
  },
  "/assets/circle-x-CFva4D0-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-eRG6IqGfNMlma0tlKzKj0Usfuvs"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 405,
    "path": "../public/assets/circle-x-CFva4D0-.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T21:10:04.725Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-CJRf8THX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-oPeYCAD/BGT9yJBVQ6qapVdQn8o"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 8068,
    "path": "../public/assets/contato-CJRf8THX.js"
  },
  "/assets/credit-card-ByVrqxU_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-i/2WDUykoUDxloS37YDeXgb78ZY"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 208,
    "path": "../public/assets/credit-card-ByVrqxU_.js"
  },
  "/assets/dumbbell-CmBI0c08.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-Jzqjg9dqCXpchqUw5qrNHXCb9Aw"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CmBI0c08.js"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-24T21:10:08.616Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/download-DwximlQA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-qX797QnV3C/FkZfV/A1OzDUbXlA"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 8305,
    "path": "../public/assets/download-DwximlQA.js"
  },
  "/assets/admin-DvSEiuPz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f79-mfiH0mz8wAtDOOXPPeE2vRtrgj4"',
    "mtime": "2026-08-24T21:10:04.729Z",
    "size": 540537,
    "path": "../public/assets/admin-DvSEiuPz.js"
  },
  "/assets/eye-DPXte8wQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-Y5RlppXB6q2OKH9XlvH0/R8kSRo"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 252,
    "path": "../public/assets/eye-DPXte8wQ.js"
  },
  "/assets/faq-BkTkJ193.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-gW9YlWtxDL//zIXAWbD1y8PPA3o"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 8169,
    "path": "../public/assets/faq-BkTkJ193.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-Cws8doqq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-/tCS3t0mqQcS33tmyOplLG1Jjvk"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 350,
    "path": "../public/assets/gift-Cws8doqq.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T21:10:04.725Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/home-wWsefJu9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-PiKC65AQnmr8hYHTnbPVPOAWm4w"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 11065,
    "path": "../public/assets/home-wWsefJu9.js"
  },
  "/assets/heart-CnfzDmbG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-0hiCDvSR+7pjRwRy4ovGiU9ZJYU"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 259,
    "path": "../public/assets/heart-CnfzDmbG.js"
  },
  "/assets/index-By5sUNKy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69718-joxICThoQ45zpeq42xr2mjyOrHM"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 431896,
    "path": "../public/assets/index-By5sUNKy.js"
  },
  "/assets/levels-BGpQg28x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-d+z4jrPEhjwiFkiAd67VEYY2AAs"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 6864,
    "path": "../public/assets/levels-BGpQg28x.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/link-2-dJbWvrzk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-z1CLS0bSFJuteeGaBoPoKhi8jlE"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 243,
    "path": "../public/assets/link-2-dJbWvrzk.js"
  },
  "/assets/index-CG5y3H-M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-8Vr8QLwWNx2L+YIIau1a8lYn3iU"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 58579,
    "path": "../public/assets/index-CG5y3H-M.js"
  },
  "/assets/lock-Cc3AkAbo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-7k0owtLGFRMotlhz/VWRNBg3VSw"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 202,
    "path": "../public/assets/lock-Cc3AkAbo.js"
  },
  "/assets/log-in-BpOZZfWQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-+ZnEhXt2SKvw9xUeEyrS6HDCsL0"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 232,
    "path": "../public/assets/log-in-BpOZZfWQ.js"
  },
  "/assets/mail-DX_dVkED.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-NDYmIJSh/BIbz6sZyACyyd7q114"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 214,
    "path": "../public/assets/mail-DX_dVkED.js"
  },
  "/assets/map-pin-Bq_fuaAP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-0jJE8lWmDZor7/xPTqfZ1NccVdQ"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 255,
    "path": "../public/assets/map-pin-Bq_fuaAP.js"
  },
  "/assets/market-DheKjIvR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-coS3ntzgpX/+oDqtxx7V8Alvy08"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 26557,
    "path": "../public/assets/market-DheKjIvR.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T21:10:08.623Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T21:10:04.730Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T21:10:08.623Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BldeFIdg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b5-6G1RkPBRuHKFIa2ikvSZOPugJWk"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 25781,
    "path": "../public/assets/parceiros-BldeFIdg.js"
  },
  "/assets/percent-D_BF7Fo_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-/ddqWP4sgIX4mM+QXqyjrNc7GDg"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 646,
    "path": "../public/assets/percent-D_BF7Fo_.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-Ie1U-laa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72ef-26JHE1AblFOmzPYxKWfQkRnUy8c"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 29423,
    "path": "../public/assets/profile-Ie1U-laa.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T21:10:04.731Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T21:10:04.726Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-BsUv5Y3q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-BJ3y0hG4e317SBDsqyacd35V5yI"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 410,
    "path": "../public/assets/save-BsUv5Y3q.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T21:10:08.625Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T21:10:04.730Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-DBEXrb1q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-m24bYA3H/saVinK0pA7krQ0VppE"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 170,
    "path": "../public/assets/search-DBEXrb1q.js"
  },
  "/assets/share-2-DwmWmTDk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-VwLNRQQKiCkN02zftpGLbXtKyNM"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 353,
    "path": "../public/assets/share-2-DwmWmTDk.js"
  },
  "/assets/shield-check-VmwBbbXZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-4R1T09s+gTSfNJNkcjMX1Jjw34Y"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 316,
    "path": "../public/assets/shield-check-VmwBbbXZ.js"
  },
  "/assets/styles-CGRoB4Kk.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24284-CyBJTupTN/24CrSlUcXPfHY0ciA"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 148100,
    "path": "../public/assets/styles-CGRoB4Kk.css"
  },
  "/assets/truck-CeaTD_68.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-SH9y0eALNuPkM1ngt9UoKPeZcdg"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 1109,
    "path": "../public/assets/truck-CeaTD_68.js"
  },
  "/assets/user-plus-BQfBlGLo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-SScOJjDxWZdCwoXd4KwB0egOzs0"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 585,
    "path": "../public/assets/user-plus-BQfBlGLo.js"
  },
  "/assets/users-oH6vvyGs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-IBUU24dPz0bCxQ13wrl+lt5X2F8"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 307,
    "path": "../public/assets/users-oH6vvyGs.js"
  },
  "/assets/wallet-QWNKi-2q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-8jldrpJEvsT4BgwPSXyyddybH1c"',
    "mtime": "2026-08-24T21:10:04.728Z",
    "size": 5844,
    "path": "../public/assets/wallet-QWNKi-2q.js"
  },
  "/assets/zap-Coze3Q9G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-MhuxrhcjnWZEz39WDgeLGGAWg20"',
    "mtime": "2026-08-24T21:10:04.727Z",
    "size": 263,
    "path": "../public/assets/zap-Coze3Q9G.js"
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
