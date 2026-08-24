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
    "mtime": "2026-08-24T20:19:55.768Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T20:19:55.769Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-D92anymp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-D4HPnp4fvrDahSV757cZfInSElU"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-D92anymp.js"
  },
  "/assets/ProductDetailSheet-Djw9y4Ci.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-m1xHB6D4437OO+tmGcYDnPz3xKg"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-Djw9y4Ci.js"
  },
  "/assets/activities-mSMD9-av.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-t8ZqmNj9Mq0oQgWi0zwoo8ELWF8"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 1196,
    "path": "../public/assets/activities-mSMD9-av.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-Do50Ca97.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-B+aD5qp2WT44E4V/g7r21X6v3Iw"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 315,
    "path": "../public/assets/apple-Do50Ca97.js"
  },
  "/assets/arrow-up-right-CPnsqhra.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-R0p9P+RhrMAXMqWtMCnFgp3lrIM"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CPnsqhra.js"
  },
  "/assets/associado-Juk0vQT-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7461-fD1+Gg+H2/sTDvyG5l1vunxg3Zw"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 29793,
    "path": "../public/assets/associado-Juk0vQT-.js"
  },
  "/assets/auth-BBPDlVEe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a182-ySixKoqPEd1Y98bq+wMuw7EpO9I"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 41346,
    "path": "../public/assets/auth-BBPDlVEe.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/building-2-B1oj0GEJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-n663bOvmKJfoBK6Y8cYB3iua8G4"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 384,
    "path": "../public/assets/building-2-B1oj0GEJ.js"
  },
  "/assets/check-C9IvunfE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-gIQ75zyutUwx7MLQfGzRsm+X5Zc"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 120,
    "path": "../public/assets/check-C9IvunfE.js"
  },
  "/assets/circle-check-CB940Sfl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-rFSPRihuhssHLzBdREYijmd62wE"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 174,
    "path": "../public/assets/circle-check-CB940Sfl.js"
  },
  "/assets/circle-x-w-vbB8Cm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-ADrQeLDF5lDSdUMSSeFM194mEWk"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 405,
    "path": "../public/assets/circle-x-w-vbB8Cm.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-DWPcpqOR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-4xc6CmMyIZtKom12T3aWPJii8wU"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 8068,
    "path": "../public/assets/contato-DWPcpqOR.js"
  },
  "/assets/credit-card-D8KuObgH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-XmoizxsNJyLT/uKIuwrXgKCVhKc"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 208,
    "path": "../public/assets/credit-card-D8KuObgH.js"
  },
  "/assets/download-GlrYnKGz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-ZOCDOnVXx4b9wiJTGfr7aHGG62s"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 8305,
    "path": "../public/assets/download-GlrYnKGz.js"
  },
  "/assets/dumbbell-DnkdZ6pE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-JApVByW2a1M3TxWKiKtTSTU5Zj0"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 561,
    "path": "../public/assets/dumbbell-DnkdZ6pE.js"
  },
  "/assets/eye-DxUo4Xoc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-skBrCjzCCOTGri21G04IIoahR9s"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 252,
    "path": "../public/assets/eye-DxUo4Xoc.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-Cz6wI__z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f1f-e/FM7KcJM8AfhJ6ySyuCHdCG3+g"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 540447,
    "path": "../public/assets/admin-Cz6wI__z.js"
  },
  "/assets/faq-DGfSPYsf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-VWY1TBMTRMWPjuHg0l57ZnROvxw"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 8169,
    "path": "../public/assets/faq-DGfSPYsf.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-i2osLWda.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-p52CjkyqHyeFzMSlKkdRLJtpaYg"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 350,
    "path": "../public/assets/gift-i2osLWda.js"
  },
  "/assets/heart-WKy50lWh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-JUNuI37fwNdpIuNfXYuu7ybalis"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 259,
    "path": "../public/assets/heart-WKy50lWh.js"
  },
  "/assets/home-BhpOt__X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-bfiQKCs4ISmqtSYkmI00CXAPI3U"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 11065,
    "path": "../public/assets/home-BhpOt__X.js"
  },
  "/assets/index-DOo0guI9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4f8-VQgRAA7mtVgRqUYNSsWWSEC1x1s"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 58616,
    "path": "../public/assets/index-DOo0guI9.js"
  },
  "/assets/levels-lBkwCvJ2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-BXfyaLpBlStvx5ogLoymywzCOwA"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 6869,
    "path": "../public/assets/levels-lBkwCvJ2.js"
  },
  "/assets/link-2-CydAe_nb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-s9KEFfNBRdAUbYC8HyIhskGUydo"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 243,
    "path": "../public/assets/link-2-CydAe_nb.js"
  },
  "/assets/mail-BT3x0FBY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-LrFuX60PMz1swo5NahVN9wv4ZaI"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 214,
    "path": "../public/assets/mail-BT3x0FBY.js"
  },
  "/assets/log-in-fPaBdLPZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-4F5CYB+HuDIZ4h949ScsBW69zhI"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 232,
    "path": "../public/assets/log-in-fPaBdLPZ.js"
  },
  "/assets/map-pin-D4NjX9F3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-oanUNSCJZnclcNAYVT/qvx++pyE"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 255,
    "path": "../public/assets/map-pin-D4NjX9F3.js"
  },
  "/assets/lock-UyxI7Gyx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-69d2Ww+A5YyISVELYrrKAZSnENE"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 202,
    "path": "../public/assets/lock-UyxI7Gyx.js"
  },
  "/assets/market-DSxEUBF0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-NtZ7t3ig2al8sYVjzLDbxB3Su3E"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 26557,
    "path": "../public/assets/market-DSxEUBF0.js"
  },
  "/assets/index-CG8byb3s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68d79-xSDf9/KVgb6LCp8uFqVx1xoc1t8"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 429433,
    "path": "../public/assets/index-CG8byb3s.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:19:55.778Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T20:19:55.780Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/operational-params-store-BeD5O1sL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-rFZ/VGJC19A48w6lHFXAAhhGyrs"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-BeD5O1sL.js"
  },
  "/assets/parceiros-CbH6g0iL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-/UUkrFoxrKvSmTFfdwSwzUFkDSc"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 25692,
    "path": "../public/assets/parceiros-CbH6g0iL.js"
  },
  "/assets/percent-gkNfpTvp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-zmxKYHt9k3Gpfi0DQ6nRmaAUWP0"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 646,
    "path": "../public/assets/percent-gkNfpTvp.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/profile-C2krG3dZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"71b4-xcnwxKLeQfy69RPazo8w1RnNyOM"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 29108,
    "path": "../public/assets/profile-C2krG3dZ.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:19:49.951Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:19:55.782Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T20:19:49.945Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-DHChehLj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-Va+CJtHm8GEn0a3M/HjUvhUAXa0"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 410,
    "path": "../public/assets/save-DHChehLj.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T20:19:49.950Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-C_DbopZA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-odIahrkc8U7GlsufdXh5dxs/1GE"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 170,
    "path": "../public/assets/search-C_DbopZA.js"
  },
  "/assets/share-2-NGzgDSgT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-mTdBGtDvuZi1I9eA07M/blsjcHE"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 353,
    "path": "../public/assets/share-2-NGzgDSgT.js"
  },
  "/assets/shield-check-9ujo01Uq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-D+ajN60Gj/nS/LhBI/DeseMui4Y"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 316,
    "path": "../public/assets/shield-check-9ujo01Uq.js"
  },
  "/assets/truck-gDCIT0T4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-+n++S04X8j2At77ejyKUoFK4Vqc"',
    "mtime": "2026-08-24T20:19:49.947Z",
    "size": 1109,
    "path": "../public/assets/truck-gDCIT0T4.js"
  },
  "/assets/styles-COYd2nln.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"241c3-xxpNkS7dW4Fyd9VZrLVTxPc39nA"',
    "mtime": "2026-08-24T20:19:49.946Z",
    "size": 147907,
    "path": "../public/assets/styles-COYd2nln.css"
  },
  "/assets/user-plus-C5yxUwwL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-6X/VUOWXgoBF6fUC7g5yv/5O4/U"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 585,
    "path": "../public/assets/user-plus-C5yxUwwL.js"
  },
  "/assets/users-CvvToVTn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-5C9a63YCRycuywqnj3AzKC+xynk"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 307,
    "path": "../public/assets/users-CvvToVTn.js"
  },
  "/assets/zap-CJN7DJJ3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-+9fi3jR0ZJPzADTIr21zKA1ECxs"',
    "mtime": "2026-08-24T20:19:49.948Z",
    "size": 263,
    "path": "../public/assets/zap-CJN7DJJ3.js"
  },
  "/assets/wallet-FiPsHIiu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1708-Fj86b8QoornOdd2e4NXb9KF12k4"',
    "mtime": "2026-08-24T20:19:49.949Z",
    "size": 5896,
    "path": "../public/assets/wallet-FiPsHIiu.js"
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
