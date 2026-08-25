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
    "mtime": "2026-08-25T16:06:20.074Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T16:06:20.074Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-F8OZkspz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-N5sztnmMfx/IHXqAYtGlPMNSyhA"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-F8OZkspz.js"
  },
  "/assets/ProductDetailSheet-CfJQ6TS6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-AgLZAGOrtAc3jAjhZ3c6h+cJkUc"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CfJQ6TS6.js"
  },
  "/assets/activities-nh6Iw8En.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-oOPUAAKagWjMaD1wNHrzgb0fbNk"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 1196,
    "path": "../public/assets/activities-nh6Iw8En.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apple-DXu-eygX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-0RwLkUeIMJ06GIh4jEsWAB4r9Cg"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 315,
    "path": "../public/assets/apple-DXu-eygX.js"
  },
  "/assets/arrow-up-right-CoyMpHkv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-5+G7KWvSdlxdeTdP3LqIR8QQWQ8"',
    "mtime": "2026-08-25T16:06:15.298Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CoyMpHkv.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-Y68Yh-e9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73e9-hBjAQd2RaxNMbeZy/0W2Oaxm5xw"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 29673,
    "path": "../public/assets/associado-Y68Yh-e9.js"
  },
  "/assets/auth-OsB-xzzh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b75e-p8nUTZE68Ess7z/c9hJnMv65Cco"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 46942,
    "path": "../public/assets/auth-OsB-xzzh.js"
  },
  "/assets/building-2-cFjTCdRT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-XnIqSD9T7S4tD/uVgbZbAdjDU5A"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 384,
    "path": "../public/assets/building-2-cFjTCdRT.js"
  },
  "/assets/calendar-DYgNerOe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-/JcQSLkxtzNipwHmuRxZnx1Mn8I"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 258,
    "path": "../public/assets/calendar-DYgNerOe.js"
  },
  "/assets/circle-check-CmuKm4gR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-BV0u2ywWl6B1/XZ0NPDYPA+7e6I"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 174,
    "path": "../public/assets/circle-check-CmuKm4gR.js"
  },
  "/assets/circle-x-CYUc1dKc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-YlyoVv5hqvlwU+OB96jF2RzLT6Y"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 405,
    "path": "../public/assets/circle-x-CYUc1dKc.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/contato-B5OGrCt-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-lTjhgtVPTu+11cqCZ+EOIAsA2yA"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 8068,
    "path": "../public/assets/contato-B5OGrCt-.js"
  },
  "/assets/credit-card-DmPKG5MC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-sdnjEf03B9UfEHfAnfr8Ixu3xbc"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 208,
    "path": "../public/assets/credit-card-DmPKG5MC.js"
  },
  "/assets/download-D-6eEkeu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-cORqBsHun2YMk+43VtIyK67SV2A"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 8305,
    "path": "../public/assets/download-D-6eEkeu.js"
  },
  "/assets/eye-Bzw-Uy1j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-EQa7b1/CGD04qne6n6nrhyOju6U"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 252,
    "path": "../public/assets/eye-Bzw-Uy1j.js"
  },
  "/assets/dumbbell-soZoy2O0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-hgdNHCb8cWYUzQypBboEeK+A5Mc"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 561,
    "path": "../public/assets/dumbbell-soZoy2O0.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-DVkik7mF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f87-VCAunKFgT5AUUXX3p7OEHtOhE30"',
    "mtime": "2026-08-25T16:06:15.298Z",
    "size": 540551,
    "path": "../public/assets/admin-DVkik7mF.js"
  },
  "/assets/faq-D-OVwlCx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-+HS7d4yNp4JLwGDJZ1j3aveG3yk"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 8169,
    "path": "../public/assets/faq-D-OVwlCx.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-B96LC0jW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-HnYSu1/Q1Emsy1QS1kqpxOyk//E"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 350,
    "path": "../public/assets/gift-B96LC0jW.js"
  },
  "/assets/home-DLTWFF8Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b1a-iMMg+k1bO8RY1Ttg5E9azxFCw4E"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 11034,
    "path": "../public/assets/home-DLTWFF8Q.js"
  },
  "/assets/index-CR-62F5B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4e1-sjdsduSJIlNuvLMiqdnQQRqmXqY"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 58593,
    "path": "../public/assets/index-CR-62F5B.js"
  },
  "/assets/levels-POjZaS0i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-MQWDCp0dG2LRf/ZoaDP139k3tac"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 6869,
    "path": "../public/assets/levels-POjZaS0i.js"
  },
  "/assets/link-2-DkjlE1ze.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-epGffFLIjR9itAkxVG/2u0PArAo"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 243,
    "path": "../public/assets/link-2-DkjlE1ze.js"
  },
  "/assets/lock-DZ31H8qQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-D6xKgOkvOArd1lQ6A4GEr+WJICg"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 202,
    "path": "../public/assets/lock-DZ31H8qQ.js"
  },
  "/assets/log-in-Bd43cPgA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-NO/m49K32+N74KkO7rNwD3vJeRA"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 232,
    "path": "../public/assets/log-in-Bd43cPgA.js"
  },
  "/assets/mail-CzLpL5g1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-ctvQ2MJuuTXqvBOFW4oL0nZM29s"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 214,
    "path": "../public/assets/mail-CzLpL5g1.js"
  },
  "/assets/map-pin-DeFrykQ6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-3DKt4GdiLK4E4KeQmV0rMxUsoM0"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 255,
    "path": "../public/assets/map-pin-DeFrykQ6.js"
  },
  "/assets/index-Cfy9T4VK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bcc9-+W6AP0jUyyWJEvorhCVHnbzorA8"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 441545,
    "path": "../public/assets/index-Cfy9T4VK.js"
  },
  "/assets/market-CcOWhUF7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-kMWD6CqtyQ1BF6psi+RVhzrOMt8"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 26473,
    "path": "../public/assets/market-CcOWhUF7.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-Cyf55wNb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72a5-OA0EyBHjxerlrLKlmApGY0nBEMo"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 29349,
    "path": "../public/assets/parceiros-Cyf55wNb.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:06:20.085Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T16:06:20.083Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-BwXJE6wl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-pmv/yNI6VUUNEJlAIceUsKnVqic"',
    "mtime": "2026-08-25T16:06:15.295Z",
    "size": 646,
    "path": "../public/assets/percent-BwXJE6wl.js"
  },
  "/assets/phone-CQ0TqWZp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-ej2TJnvd4UpgaI8GmVvngjcb3sw"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 323,
    "path": "../public/assets/phone-CQ0TqWZp.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-BaOKXw1N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-KwGRdv7KAp68NYzqIhhsOQ/XS4I"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 31108,
    "path": "../public/assets/profile-BaOKXw1N.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:06:20.086Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:06:15.300Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/search-SfdZWZvy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-GSmUnt24MV+/YqtcDUcXWADR4JA"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 170,
    "path": "../public/assets/search-SfdZWZvy.js"
  },
  "/assets/save-Cb5A7uEm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-VfjBRUUoni24W+W5Fqb25aZPzKk"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 410,
    "path": "../public/assets/save-Cb5A7uEm.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T16:06:15.293Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T16:06:15.299Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/shield-check-DPbtKs8g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-pppqEsiSw2dP2BGTfnozMOIoqLo"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 316,
    "path": "../public/assets/shield-check-DPbtKs8g.js"
  },
  "/assets/styles-CMgaF4Wx.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"252b2-AOkyEvIQTtb+GuGB1+bwRaMZGQY"',
    "mtime": "2026-08-25T16:06:15.294Z",
    "size": 152242,
    "path": "../public/assets/styles-CMgaF4Wx.css"
  },
  "/assets/truck-B3Pvqzh_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-l3it1+wAVKdkYt0N24OliSCojHQ"',
    "mtime": "2026-08-25T16:06:15.296Z",
    "size": 1109,
    "path": "../public/assets/truck-B3Pvqzh_.js"
  },
  "/assets/user-plus-BmnSBxAG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-vyy3yYzeWFYtiiatGSa83PBgVHM"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 311,
    "path": "../public/assets/user-plus-BmnSBxAG.js"
  },
  "/assets/users-BHWytOqR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-XqQzktY4pS44Vg9jo6U9ujP5+v0"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 307,
    "path": "../public/assets/users-BHWytOqR.js"
  },
  "/assets/wallet-CvUcihX3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-dtM9jU82HTx6MvgnQzMYBOrfTSI"',
    "mtime": "2026-08-25T16:06:15.297Z",
    "size": 5844,
    "path": "../public/assets/wallet-CvUcihX3.js"
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
