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
    "mtime": "2026-08-25T16:44:10.132Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T16:44:10.132Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-C1_Y9H34.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-KxuWnpEEdJRiCJ/8tEYHcer/yTk"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-C1_Y9H34.js"
  },
  "/assets/ProductDetailSheet-BbBTlcaT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-PIjIh6lihdJMkh0NIZ4HX+c8VS0"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-BbBTlcaT.js"
  },
  "/assets/activities-C8Adx1TZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-2XiXX+O3BWGBdqtmBarQjdNng2o"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 1196,
    "path": "../public/assets/activities-C8Adx1TZ.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-CBG4qkY1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-5trZCUeRg/3m7HXd1Nh1yIsHauQ"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 315,
    "path": "../public/assets/apple-CBG4qkY1.js"
  },
  "/assets/arrow-up-right-CEuk56cz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-liuOPVq4YHHYXJZBHet4Z6+X/3I"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CEuk56cz.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-CRWBeGZV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73c8-91yagZx1wznefIc4MB/uAWUCrX8"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 29640,
    "path": "../public/assets/associado-CRWBeGZV.js"
  },
  "/assets/auth-qdWiQ_5i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b75e-04lXCx8Pd8C5RNhBagxVJVOiX8g"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 46942,
    "path": "../public/assets/auth-qdWiQ_5i.js"
  },
  "/assets/circle-check-CMNLt-ql.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-1SbaboTA4RGHebYyZXe89CBjbIg"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 174,
    "path": "../public/assets/circle-check-CMNLt-ql.js"
  },
  "/assets/calendar-DfqTutoZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-6K35NRY3i5m4YhplGP2UXgSVnuI"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 258,
    "path": "../public/assets/calendar-DfqTutoZ.js"
  },
  "/assets/circle-x-w79xxCri.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-LR2XOn2DZtodk+lRZ7CDE0dGyfc"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 405,
    "path": "../public/assets/circle-x-w79xxCri.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-D0PHrC28.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f63-QAJVWJxVlkvZI090IIen5OZnXCc"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 8035,
    "path": "../public/assets/contato-D0PHrC28.js"
  },
  "/assets/credit-card-B83GRE5V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-sN5ZohZyPDXpAQikp2J6U5KrUuw"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 208,
    "path": "../public/assets/credit-card-B83GRE5V.js"
  },
  "/assets/download-BnnCiOJ6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2050-DY2bxqT/5pHX13C55+Voz5iP4KA"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 8272,
    "path": "../public/assets/download-BnnCiOJ6.js"
  },
  "/assets/dumbbell-ClfN0LSM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-on36S6Kf/kxACycYF9LMr4h1IGU"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 561,
    "path": "../public/assets/dumbbell-ClfN0LSM.js"
  },
  "/assets/eye-BZwG1l3b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-W3NeNeHTmWQt3Ukbbtp4/dFE0K4"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 252,
    "path": "../public/assets/eye-BZwG1l3b.js"
  },
  "/assets/faq-BSekvgzv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-sHsvZdYBLGatN/SBffYPSaHvCc8"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 8136,
    "path": "../public/assets/faq-BSekvgzv.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-D79XAV-P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f66-3E9EPnXxs50aw7Fk/XdaKQnBuSE"',
    "mtime": "2026-08-25T16:44:05.559Z",
    "size": 540518,
    "path": "../public/assets/admin-D79XAV-P.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-38s-iGVx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-glP3whTpIBP5cIMAYhUBqfdYlzI"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 350,
    "path": "../public/assets/gift-38s-iGVx.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/home-B-Ihfmnk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2af4-ovUZE0TyLPKWmXGM0zjt4bUgcqQ"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 10996,
    "path": "../public/assets/home-B-Ihfmnk.js"
  },
  "/assets/index-BSPPJCmF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d775-0fBaXQdbfqfotWPAz1TJ/jMBLhg"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 55157,
    "path": "../public/assets/index-BSPPJCmF.js"
  },
  "/assets/levels-BPp5HNbH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-JtNeQvZ1UoyeMB+xEzG/rKi1yHc"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 6869,
    "path": "../public/assets/levels-BPp5HNbH.js"
  },
  "/assets/lock-CoMiOUA8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-hrTQcYmFbETVPXXHvcwr3MIszHk"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 202,
    "path": "../public/assets/lock-CoMiOUA8.js"
  },
  "/assets/link-2-Cir-5o4g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-xzp2CH9mf8jivztGS0t5tgv1rVI"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 243,
    "path": "../public/assets/link-2-Cir-5o4g.js"
  },
  "/assets/index-BHnXocwD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bc91-eFvKtgNJgRi4RioI4OXvvOBMGvU"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 441489,
    "path": "../public/assets/index-BHnXocwD.js"
  },
  "/assets/log-in-DWvp26X8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-AQt3TeHLVh80+rapFUwbMvOLTRg"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 232,
    "path": "../public/assets/log-in-DWvp26X8.js"
  },
  "/assets/mail-I4LwOeDD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-o47VczuITP8GMc787C8kpt2I1BM"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 214,
    "path": "../public/assets/mail-I4LwOeDD.js"
  },
  "/assets/map-pin-DmBGmItZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-kzGbYNTQ42l2uPvoRBCZ8ROoQUw"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 255,
    "path": "../public/assets/map-pin-DmBGmItZ.js"
  },
  "/assets/market-DTdYO0MH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-HyKppSzn/Pzv71w4QG1KG6iP35U"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 26473,
    "path": "../public/assets/market-DTdYO0MH.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-JDTSeuBm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-IFU0i89pRM9pvl7IWQDhrU8To6s"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 29316,
    "path": "../public/assets/parceiros-JDTSeuBm.js"
  },
  "/assets/percent-DAjLJoke.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-Xu4HB8yimBDZxRfJS2JriCvQKhY"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 646,
    "path": "../public/assets/percent-DAjLJoke.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:44:10.139Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T16:44:10.141Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-BcyG5cmT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-Lg7ap0UvyQY4lQxVf6J+5kt4mSU"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 323,
    "path": "../public/assets/phone-BcyG5cmT.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/profile-xhJfAriS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-YN3ekAGWrknThHVDpiyu7i5waKA"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 31108,
    "path": "../public/assets/profile-xhJfAriS.js"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:44:10.145Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T16:44:05.554Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:44:05.560Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T16:44:05.555Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save--eAMi1M8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-YCnDtMppAr+CQB5M7xhkgi38xxg"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 410,
    "path": "../public/assets/save--eAMi1M8.js"
  },
  "/assets/search-D-iCWtls.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-8f0Z8qe1cuXVuaV/11CYiDjr68Q"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 170,
    "path": "../public/assets/search-D-iCWtls.js"
  },
  "/assets/shield-check-Cd1Ostup.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-pVnCHi5GVHrj371GKMOURsJdmrk"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 316,
    "path": "../public/assets/shield-check-Cd1Ostup.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T16:44:05.560Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/truck-DiEtGcbV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-/esiToTviqDIlYyI9syh4xv3NfI"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 1109,
    "path": "../public/assets/truck-DiEtGcbV.js"
  },
  "/assets/user-plus-BCYdKxqu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-golZhtKMOvhNRLqp9h3z9LA10Os"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 311,
    "path": "../public/assets/user-plus-BCYdKxqu.js"
  },
  "/assets/users-CDLGJQBM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-fHGgkcQSOrDVZWjgR4OzOwgQFmQ"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 307,
    "path": "../public/assets/users-CDLGJQBM.js"
  },
  "/assets/styles-Dg_0i3xw.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24dd9-DDaO34l1kO+2PdHCxAbTjTDVIzg"',
    "mtime": "2026-08-25T16:44:05.556Z",
    "size": 151001,
    "path": "../public/assets/styles-Dg_0i3xw.css"
  },
  "/assets/wallet-ZJcl7TsO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-T4loCZtwPa5lBrKA+z7ATvACAYU"',
    "mtime": "2026-08-25T16:44:05.557Z",
    "size": 5844,
    "path": "../public/assets/wallet-ZJcl7TsO.js"
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
