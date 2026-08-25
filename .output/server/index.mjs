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
    "mtime": "2026-08-25T15:36:52.175Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T15:36:52.173Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-DtNUsKng.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-CxSRgW3wjc1/AUvWEk7brVXf4E0"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-DtNUsKng.js"
  },
  "/assets/activities-DHnNVX88.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-ZyEEfP0goAjtUJkfeJoHGQz5VAk"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 1196,
    "path": "../public/assets/activities-DHnNVX88.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-DKTrVc3n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-znoouiQ0m78fNfrYd18llej+P5o"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 315,
    "path": "../public/assets/apple-DKTrVc3n.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/arrow-up-right-D3slBIV-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-DvhB3R5lflVaapklJWctsubEg2Q"',
    "mtime": "2026-08-25T15:36:47.774Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-D3slBIV-.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-R3ZuSXDB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73e9-jK1xIKsB5h8wZX70byhRGyloUqk"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 29673,
    "path": "../public/assets/associado-R3ZuSXDB.js"
  },
  "/assets/auth-BZzmUZE9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b801-nuSbkpnVnxoSu/F1CJ6SCK+/2EE"',
    "mtime": "2026-08-25T15:36:47.770Z",
    "size": 47105,
    "path": "../public/assets/auth-BZzmUZE9.js"
  },
  "/assets/calendar-BNA-hROC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-5QDjm7iEvjdi2jGgOzZH2UNZhCc"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 258,
    "path": "../public/assets/calendar-BNA-hROC.js"
  },
  "/assets/building-2-DqO80Ff2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-jaZuQK4fUFodsupMQA40wwSEFUA"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 384,
    "path": "../public/assets/building-2-DqO80Ff2.js"
  },
  "/assets/circle-check-DN-9nVzw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Fcjaau8K2oRnluwWiGhT0pnMbmg"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 174,
    "path": "../public/assets/circle-check-DN-9nVzw.js"
  },
  "/assets/ProductDetailSheet-WQMLWMo7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-k9rzpm475Liy5ft8fmicZjrvtoQ"',
    "mtime": "2026-08-25T15:36:47.771Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-WQMLWMo7.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/circle-x-BVl8LGlY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-aubyIQt93lMUrLc/jDUmc+PeTxU"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 405,
    "path": "../public/assets/circle-x-BVl8LGlY.js"
  },
  "/assets/contato-BMsFEAWH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-/wKwndcipd9HKjbjtOEC+2HHGnI"',
    "mtime": "2026-08-25T15:36:47.770Z",
    "size": 8068,
    "path": "../public/assets/contato-BMsFEAWH.js"
  },
  "/assets/download-CKKaHqG-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-tq78NCrv5qqjmvgbljykRYaY/0g"',
    "mtime": "2026-08-25T15:36:47.770Z",
    "size": 8305,
    "path": "../public/assets/download-CKKaHqG-.js"
  },
  "/assets/credit-card-uGdRPIZo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-sb25aVCUukDHzV8u7Q4s7J+QhnU"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 208,
    "path": "../public/assets/credit-card-uGdRPIZo.js"
  },
  "/assets/dumbbell-DqqtdtF5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-WRpOlMdU3ZOk1c4R86RmLFe8/DE"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 561,
    "path": "../public/assets/dumbbell-DqqtdtF5.js"
  },
  "/assets/eye-BjS4ZEh6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-CHzNAyX9qmmmfVcvN8gs9H+bLFw"',
    "mtime": "2026-08-25T15:36:47.770Z",
    "size": 252,
    "path": "../public/assets/eye-BjS4ZEh6.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-ZPu7fuaj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f66-8GApSngo7OYSRizFcl6gGq5hUXs"',
    "mtime": "2026-08-25T15:36:47.776Z",
    "size": 540518,
    "path": "../public/assets/admin-ZPu7fuaj.js"
  },
  "/assets/faq-D-KDrk5I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-njzu/CidG78QXaQ8aECEg71Tbik"',
    "mtime": "2026-08-25T15:36:47.770Z",
    "size": 8169,
    "path": "../public/assets/faq-D-KDrk5I.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T15:36:47.771Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-B8jsrB-Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-/VAOhWA1EyzuxZeEzvjLliLINjE"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 350,
    "path": "../public/assets/gift-B8jsrB-Z.js"
  },
  "/assets/home-CKe3BHdu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b1a-QoxfUnKwfj+NN7aAhN93c/cPMsU"',
    "mtime": "2026-08-25T15:36:47.770Z",
    "size": 11034,
    "path": "../public/assets/home-CKe3BHdu.js"
  },
  "/assets/index-DcWaOfPt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4e1-yJUg6kBoRdAnX9mA7eDUmPb+Dn8"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 58593,
    "path": "../public/assets/index-DcWaOfPt.js"
  },
  "/assets/levels-SHQNG2oW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-C14YRAG9yqpH8lE5tqUfZ1/grB0"',
    "mtime": "2026-08-25T15:36:47.770Z",
    "size": 6869,
    "path": "../public/assets/levels-SHQNG2oW.js"
  },
  "/assets/link-2-B1mJN_LQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-4AauzlVBKzBieHVy7D9nAf5LtC8"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 243,
    "path": "../public/assets/link-2-B1mJN_LQ.js"
  },
  "/assets/index-LGtpQ4df.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bca4-Jj+zjt5ZRKzN5cyeGXjIXYkqLnA"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 441508,
    "path": "../public/assets/index-LGtpQ4df.js"
  },
  "/assets/lock-8M-Xo3Sv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-EbqtIcZpUujlKg7cu9GbVqFzvL8"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 202,
    "path": "../public/assets/lock-8M-Xo3Sv.js"
  },
  "/assets/log-in-DwTC-UAT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-ZbukvnDdnJORj30KKDuaGAE1LGU"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 232,
    "path": "../public/assets/log-in-DwTC-UAT.js"
  },
  "/assets/mail-BHrQBAWx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-BVssftEmxdaGW7XhqnKTVpkuyMY"',
    "mtime": "2026-08-25T15:36:47.774Z",
    "size": 214,
    "path": "../public/assets/mail-BHrQBAWx.js"
  },
  "/assets/map-pin-U6R7s5QW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-ZxGX9RQSnkAKE4MpeE8tpDnHq8E"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 255,
    "path": "../public/assets/map-pin-U6R7s5QW.js"
  },
  "/assets/market-D5jer145.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-xjoKTtqPy94MZlsn7rOrbtgk1ZM"',
    "mtime": "2026-08-25T15:36:47.771Z",
    "size": 26473,
    "path": "../public/assets/market-D5jer145.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T15:36:47.774Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-8q8cObN3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b5-XtIWQgWuWo+LY7GrtAl5Hdt+DY0"',
    "mtime": "2026-08-25T15:36:47.772Z",
    "size": 25781,
    "path": "../public/assets/parceiros-8q8cObN3.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T15:36:52.183Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T15:36:52.181Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/percent-ByCG6w9R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-5i13MexUePkwBGBgGxmaF9KyHKk"',
    "mtime": "2026-08-25T15:36:47.770Z",
    "size": 646,
    "path": "../public/assets/percent-ByCG6w9R.js"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-Cuu-GPtX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7963-MPimx9vJEvUL8N4it/6sPECRNPo"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 31075,
    "path": "../public/assets/profile-Cuu-GPtX.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T15:36:47.777Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T15:36:52.181Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T15:36:47.768Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-DhkMf8ei.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-oYWqqFYeFt2ApPqVzrRLp7LWG/s"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 410,
    "path": "../public/assets/save-DhkMf8ei.js"
  },
  "/assets/search-WVmgyFa_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-606YPpS14V0va6fWG3+MJFwZ7fE"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 170,
    "path": "../public/assets/search-WVmgyFa_.js"
  },
  "/assets/shield-check-L-tzG9ZN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-bMgUHncdSomOeMUfsUI3l/cAx5A"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 316,
    "path": "../public/assets/shield-check-L-tzG9ZN.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T15:36:47.777Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/styles-B1j2IE1P.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"247bb-1ZGPEYChyoquVCUqwAR9yRsNQ7E"',
    "mtime": "2026-08-25T15:36:47.769Z",
    "size": 149435,
    "path": "../public/assets/styles-B1j2IE1P.css"
  },
  "/assets/user-plus-OcxslN1B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-OJhPspSwQcfb8v/MxxihwDJNkhM"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 585,
    "path": "../public/assets/user-plus-OcxslN1B.js"
  },
  "/assets/users-CQmGDSXc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-r0nNmPSV95w86zHgt8bglbHUAqI"',
    "mtime": "2026-08-25T15:36:47.773Z",
    "size": 307,
    "path": "../public/assets/users-CQmGDSXc.js"
  },
  "/assets/truck-BxQ60SHJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-DJF2UQQzqNUSgasVa2xtWeltNG4"',
    "mtime": "2026-08-25T15:36:47.772Z",
    "size": 1109,
    "path": "../public/assets/truck-BxQ60SHJ.js"
  },
  "/assets/wallet-D3C2W30h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-kbCVnTKnry842MrhU3RNi/N/u0Q"',
    "mtime": "2026-08-25T15:36:47.774Z",
    "size": 5844,
    "path": "../public/assets/wallet-D3C2W30h.js"
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
