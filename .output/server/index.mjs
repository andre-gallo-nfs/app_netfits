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
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a636-ogHQ/SWKkPdSbnRP4tz8snVaxzc"',
    "mtime": "2026-08-28T20:35:20.367Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-28T20:35:20.362Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-CLJJkBFX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-35lfVBI8GQVVvp7zITNB+VPKPTw"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-CLJJkBFX.js"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-28T20:35:20.365Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/ProductDetailSheet-DeJENDKx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-0Jzbudsyw0G2rCyKRVOEOzgVMZY"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-DeJENDKx.js"
  },
  "/assets/activities-BUmrwb3s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-DT+A9fhOJR1qrm1FuILIeCf6oMU"',
    "mtime": "2026-08-28T20:35:11.167Z",
    "size": 1196,
    "path": "../public/assets/activities-BUmrwb3s.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-28T20:35:11.163Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-DtmlgSO_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-37i0CgvVLukP9H/3yZlz9bP9pTY"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 315,
    "path": "../public/assets/apple-DtmlgSO_.js"
  },
  "/assets/arrow-up-right-CAmdXeQj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-0dNJUVjdwgGKPFxBAGdpd19y0I4"',
    "mtime": "2026-08-28T20:35:11.173Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CAmdXeQj.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/associado-DD7XlwC2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-SZ9aUrhawFdi82QHcfLfE9YTNCU"',
    "mtime": "2026-08-28T20:35:11.167Z",
    "size": 29722,
    "path": "../public/assets/associado-DD7XlwC2.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-28T20:35:11.163Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/calendar-8uC9u--M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-iyomrA+Dt4aBtTm/XWyMArvkV58"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 258,
    "path": "../public/assets/calendar-8uC9u--M.js"
  },
  "/assets/auth-DxFwdNnw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-SQKxAOJkFiE0TW7bAO56rH3mhLE"',
    "mtime": "2026-08-28T20:35:11.170Z",
    "size": 45736,
    "path": "../public/assets/auth-DxFwdNnw.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-28T20:35:11.165Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/circle-x-BI0j1A_0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-45JhU33/+2bpDoVK0VLRSQIoy9U"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 405,
    "path": "../public/assets/circle-x-BI0j1A_0.js"
  },
  "/assets/circle-check-WvUcRdiN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-QmegDgcthhHmB19UB6qz4PFPSsY"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 174,
    "path": "../public/assets/circle-check-WvUcRdiN.js"
  },
  "/assets/download-BZDJ6ORY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-jOV+2ZiSVy2TGqbA4CB69tnBta8"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 8261,
    "path": "../public/assets/download-BZDJ6ORY.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-28T20:35:11.162Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-BhQsRDjz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-vWt0YHmhHfMT/rF/XAhVecVV1SQ"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BhQsRDjz.js"
  },
  "/assets/contato-BOVGt30I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2165-CAE1nBHv0H59EtHzTbTbPW/zeTU"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 8549,
    "path": "../public/assets/contato-BOVGt30I.js"
  },
  "/assets/credit-card-Ss3vvN7C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-KGZkIgHeR5q5vIusx/LMfpcHAT8"',
    "mtime": "2026-08-28T20:35:11.173Z",
    "size": 208,
    "path": "../public/assets/credit-card-Ss3vvN7C.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-DlwXktcv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a0985-gzJqY+Qeuz4C7AGezD15kj6IMPo"',
    "mtime": "2026-08-28T20:35:11.177Z",
    "size": 657797,
    "path": "../public/assets/admin-DlwXktcv.js"
  },
  "/assets/eye-D4w4Tj7e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-9mvkFa12l6s4t6AStxk0DmkhVa8"',
    "mtime": "2026-08-28T20:35:11.170Z",
    "size": 252,
    "path": "../public/assets/eye-D4w4Tj7e.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-28T20:35:11.162Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/faq-BkdwTMHQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7d6d-XfFhUIlQE5YufQ9qKHBEFeEQ264"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 32109,
    "path": "../public/assets/faq-BkdwTMHQ.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-28T20:35:11.162Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-28T20:35:11.163Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/file-text-CFDAeG5G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-X+tYLjYY9yPt2J3Usd9e0MERezk"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 386,
    "path": "../public/assets/file-text-CFDAeG5G.js"
  },
  "/assets/gift-BMh0PAYn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-V/qrecOK+1QlGrVcSzu5+lrCVWc"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 350,
    "path": "../public/assets/gift-BMh0PAYn.js"
  },
  "/assets/home-Ck4IzIDQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-YD/ZiEz9Cln7Z9tbD9eSZSarP/4"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 11044,
    "path": "../public/assets/home-Ck4IzIDQ.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-28T20:35:11.162Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/levels-C8AnCgc8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-3DgTqnP0mBp+ibdkkIRcGqkiWw8"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 6869,
    "path": "../public/assets/levels-C8AnCgc8.js"
  },
  "/assets/link-2-BS2KvUGt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-0tEQf50Mn4oKq0YFq0m1LZoTSr4"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 243,
    "path": "../public/assets/link-2-BS2KvUGt.js"
  },
  "/assets/lock-DLVcgNgn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-QifisYQFhmucpyBhgA/z1gD50gY"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 202,
    "path": "../public/assets/lock-DLVcgNgn.js"
  },
  "/assets/log-in-Big6FXQC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-kl+3Zy6LNBLjWs5PXkZ2i8TjYTo"',
    "mtime": "2026-08-28T20:35:11.173Z",
    "size": 232,
    "path": "../public/assets/log-in-Big6FXQC.js"
  },
  "/assets/mail-BHMXDgNd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-t6YJY1rvB4TJSDi62lBbhQpoAGA"',
    "mtime": "2026-08-28T20:35:11.173Z",
    "size": 214,
    "path": "../public/assets/mail-BHMXDgNd.js"
  },
  "/assets/map-pin-CXEhUsG4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-IcEnB9iZ+lCypIHZp8H+wEIaass"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 255,
    "path": "../public/assets/map-pin-CXEhUsG4.js"
  },
  "/assets/market-CkQa-9SP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-ThtTasHsFCrJAtltQfVD+qHWvUQ"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 26473,
    "path": "../public/assets/market-CkQa-9SP.js"
  },
  "/assets/index-Dg2NpMMt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-2FppuYqooGjcMx1lb59XpKocCxw"',
    "mtime": "2026-08-28T20:35:11.167Z",
    "size": 61206,
    "path": "../public/assets/index-Dg2NpMMt.js"
  },
  "/assets/index-BmhiseZb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6ed34-FAfvCNu+TFv0yyXRDh9mkUu39QM"',
    "mtime": "2026-08-28T20:35:11.165Z",
    "size": 453940,
    "path": "../public/assets/index-BmhiseZb.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-28T20:35:20.373Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-28T20:35:11.173Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-28T20:35:20.378Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-08-28T20:35:20.385Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-28T20:35:11.174Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-CZqqBEQe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"748b-gerFw69Y1sy3mSuJJu7eaoqUJsY"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 29835,
    "path": "../public/assets/parceiros-CZqqBEQe.js"
  },
  "/assets/percent-D2r248WS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-4e8h7gRIlp6N2zZ9KA0bYoH/x98"',
    "mtime": "2026-08-28T20:35:11.170Z",
    "size": 646,
    "path": "../public/assets/percent-D2r248WS.js"
  },
  "/assets/phone-Do5fpa-N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-9N6MI131PHcLXCcgy5skFMvpMD8"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 323,
    "path": "../public/assets/phone-Do5fpa-N.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-28T20:35:11.162Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-28T20:35:11.163Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-28T20:35:11.163Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-MnGnf4jo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79a1-CUDqGJyssd+tKdQfq3jYXOgLDF0"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 31137,
    "path": "../public/assets/profile-MnGnf4jo.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-28T20:35:11.164Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-28T20:35:11.184Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-28T20:35:11.163Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-28T20:35:11.163Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-28T20:35:11.163Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-28T20:35:11.183Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-28T20:35:11.162Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-28T20:35:20.386Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/save-Nhm-p6y0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-spRp00tND1looInkd+cb5zmzE4g"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 410,
    "path": "../public/assets/save-Nhm-p6y0.js"
  },
  "/assets/search-Bhhb5ATW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-CkyE4Rh9fPk81SIjYrRs1nYtpmM"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 170,
    "path": "../public/assets/search-Bhhb5ATW.js"
  },
  "/assets/shield-check-BlcTSggS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-IQ4y29IT5O/YFNld4xaVG+p5TT0"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 316,
    "path": "../public/assets/shield-check-BlcTSggS.js"
  },
  "/assets/styles-pZIjZjKV.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28c82-va3V+eJr0RFjto/6UjyMWZubuoQ"',
    "mtime": "2026-08-28T20:35:11.167Z",
    "size": 167042,
    "path": "../public/assets/styles-pZIjZjKV.css"
  },
  "/assets/truck-BRZfqPjB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-v7H00cQUHfW7PjdRmdD6U2VJOt8"',
    "mtime": "2026-08-28T20:35:11.171Z",
    "size": 1109,
    "path": "../public/assets/truck-BRZfqPjB.js"
  },
  "/assets/user-plus-DxsOeVEj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-txxgOqQrRteDxehPA0hzI9hL2hA"',
    "mtime": "2026-08-28T20:35:11.172Z",
    "size": 311,
    "path": "../public/assets/user-plus-DxsOeVEj.js"
  },
  "/assets/users-ppYO_LDd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-QBm5uJJzizuyr/FKFw4FogzGdlk"',
    "mtime": "2026-08-28T20:35:11.173Z",
    "size": 307,
    "path": "../public/assets/users-ppYO_LDd.js"
  },
  "/assets/wallet-Cosi54VT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-4vM/Dm24xjq/6ty4VHBiG0zmqgg"',
    "mtime": "2026-08-28T20:35:11.173Z",
    "size": 4687,
    "path": "../public/assets/wallet-Cosi54VT.js"
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
