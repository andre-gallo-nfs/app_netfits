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
    "mtime": "2026-09-02T17:01:27.470Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T17:01:27.470Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-02T17:01:27.471Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-02T17:01:27.471Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-02T17:01:27.471Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-Dy2CCwLt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d11-63DDbbU262UddoSWwzgrO3HoiY8"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 3345,
    "path": "../public/assets/InstitutionalWebHeader-Dy2CCwLt.js"
  },
  "/assets/ProductDetailSheet-CxEVlQNC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-uUBPRPaPZh852/6TXkML0z1oaaw"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CxEVlQNC.js"
  },
  "/assets/activities-DTrmLKOF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-EMB7PHAA1KXIlfUFUGJGyAD9+kE"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 1196,
    "path": "../public/assets/activities-DTrmLKOF.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-02T17:01:19.656Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-C7iFlxY5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-JBUs9NjIm36OUM/pSCFlA2mg3Nc"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 315,
    "path": "../public/assets/apple-C7iFlxY5.js"
  },
  "/assets/arrow-up-right-DpeMObPb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-YEIikMehpIfBt9LUIAkswnzTaO4"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-DpeMObPb.js"
  },
  "/assets/associado-CB2CoZ75.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-tyCDPn0Vglg7/xOcK38Xkx/RGVM"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 29722,
    "path": "../public/assets/associado-CB2CoZ75.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/calendar-JQVjAiIW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-lArFn/lhyUer6WbC6b/ngM0hgQI"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 258,
    "path": "../public/assets/calendar-JQVjAiIW.js"
  },
  "/assets/auth-CcNkTnrK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b4ab-t4u5PlzhWySl7+5O0BRDMod6uv0"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 46251,
    "path": "../public/assets/auth-CcNkTnrK.js"
  },
  "/assets/circle-check-Cp9W7c83.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-LDS1rRM0czz9Ee2IdFR4NbQ0o5k"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 174,
    "path": "../public/assets/circle-check-Cp9W7c83.js"
  },
  "/assets/circle-x-P7vII09i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-vE0ZwiodAgrYa2AnlUBWfZcvzk4"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 405,
    "path": "../public/assets/circle-x-P7vII09i.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-02T17:01:19.651Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-h058uxq0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"214f-0LvanQw5YMQpaHoS5cAiAm+ozLs"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 8527,
    "path": "../public/assets/contato-h058uxq0.js"
  },
  "/assets/credit-card-CPBFHS8U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-Vk2kgAGSh7aZoaoK/lAldM6GowM"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 208,
    "path": "../public/assets/credit-card-CPBFHS8U.js"
  },
  "/assets/admin-DC-rhC6N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a9773-GzBRj3bncWD1alu3jU7AvbfmPFA"',
    "mtime": "2026-09-02T17:01:19.674Z",
    "size": 694131,
    "path": "../public/assets/admin-DC-rhC6N.js"
  },
  "/assets/download-JCBpJ3s_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"202a-/YUd9n1wDlwOH/AfQx1zaTn1Mzo"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 8234,
    "path": "../public/assets/download-JCBpJ3s_.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/dumbbell-B4iQh2UB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-7tDjzcP3slnfaGJZ9Gy8MSoybjo"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 561,
    "path": "../public/assets/dumbbell-B4iQh2UB.js"
  },
  "/assets/eye-LBCLNEaE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-y2u3y86PArZw5L6SHruuU5k8knI"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 252,
    "path": "../public/assets/eye-LBCLNEaE.js"
  },
  "/assets/faq-GKt4MuI-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7895-COlmb277+6pgPPI+Sy//8rmI0Ag"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 30869,
    "path": "../public/assets/faq-GKt4MuI-.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-02T17:01:19.642Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-DTuhZNFD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-rHAK0SYOkU1/5HQnglGrbUUzOyk"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 386,
    "path": "../public/assets/file-text-DTuhZNFD.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-02T17:01:19.651Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-Cfg75FAd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-Fp0kUh99eKcdHcuQUlWKn0grdtc"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 350,
    "path": "../public/assets/gift-Cfg75FAd.js"
  },
  "/assets/home-CDHI6bvH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a92-dwKdTFVZ7c5XW3lqVd720OCxsLQ"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 10898,
    "path": "../public/assets/home-CDHI6bvH.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-CCLOX6sc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-fHO8KnBMAtAZmK2qEcCND1igGRc"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 61206,
    "path": "../public/assets/index-CCLOX6sc.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-02T17:01:19.651Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/levels-CfuidpHt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-f2x05QGbQ5M70of+6c49bx2s3J4"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 6869,
    "path": "../public/assets/levels-CfuidpHt.js"
  },
  "/assets/link-2-ByoDAyRk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-DutSRi544jS1SRhLQRwpvsXOWjA"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 243,
    "path": "../public/assets/link-2-ByoDAyRk.js"
  },
  "/assets/lock-Bzt3mrI_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-Yg7bqwP/7VTAN9qBKv7YSRhxxxw"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 202,
    "path": "../public/assets/lock-Bzt3mrI_.js"
  },
  "/assets/log-in-DiQHwWtp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-MZD8MmfEF+TwSGdgHyf7FSjGS/g"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 232,
    "path": "../public/assets/log-in-DiQHwWtp.js"
  },
  "/assets/mail-5clOaFfy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-/dibwZEqxRw7eJvaDaQb/AaLRyM"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 214,
    "path": "../public/assets/mail-5clOaFfy.js"
  },
  "/assets/map-pin-BtZ1lf3i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-v9ol9JObXCcizHnl1I7l1PV9HOY"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 255,
    "path": "../public/assets/map-pin-BtZ1lf3i.js"
  },
  "/assets/index-CfE5_koq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"70b4d-BCJboeYXtUxqIXXbdMa9bnjSt6c"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 461645,
    "path": "../public/assets/index-CfE5_koq.js"
  },
  "/assets/market-5QPWbzEe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-/Xb0Drgzkyy+T81B8rDANqwJL+M"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 26473,
    "path": "../public/assets/market-5QPWbzEe.js"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T17:01:27.480Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T17:01:27.481Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BTFNFYLc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9379-94Boxk9QRE5fbXBbZrJeI7GEKNM"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 37753,
    "path": "../public/assets/parceiros-BTFNFYLc.js"
  },
  "/assets/percent-CwpoY0pZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-Y+9I1wZKlWjhDJ8iCuHJJfk0CPs"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 646,
    "path": "../public/assets/percent-CwpoY0pZ.js"
  },
  "/assets/phone-C-nRSGY3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-duJ3xCkoe/q3X0wAbAgT35XdA/I"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 323,
    "path": "../public/assets/phone-C-nRSGY3.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-02T17:01:19.651Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-02T17:01:19.651Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T17:01:27.483Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T17:01:19.666Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-02T17:01:27.482Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-02T17:01:19.676Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/profile-BOIJkA7D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-6wAjODh6c6xo0k5Qwj+m1LHyFMk"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 30867,
    "path": "../public/assets/profile-BOIJkA7D.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-02T17:01:19.652Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/search-Ct_OV5Tu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-rgufItAXM0qIvL5h8cbbYNqaT1s"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 170,
    "path": "../public/assets/search-Ct_OV5Tu.js"
  },
  "/assets/shield-check-Cl2o74n6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-AlEHKO/7cJ+35hyGohM+JuOk2sQ"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 316,
    "path": "../public/assets/shield-check-Cl2o74n6.js"
  },
  "/assets/styles-B8Ovx9ID.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28af5-dmwLlYyk2M9/13A2qsHzND6veSg"',
    "mtime": "2026-09-02T17:01:19.664Z",
    "size": 166645,
    "path": "../public/assets/styles-B8Ovx9ID.css"
  },
  "/assets/trash-2-gwdXbm7b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-JdBBFPqux28V64nhnVjze/zxqbg"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 690,
    "path": "../public/assets/trash-2-gwdXbm7b.js"
  },
  "/assets/truck-BdwoYRtz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-1EIhLND/hGXWeYaXDpNesshKlU8"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 1109,
    "path": "../public/assets/truck-BdwoYRtz.js"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T17:01:19.676Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T17:01:27.493Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-02T17:01:19.652Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-02T17:01:19.663Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/user-plus-TgJ6Vnwc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-2iCfDTvcPxVR2dXBuY6qJLGVrsE"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 311,
    "path": "../public/assets/user-plus-TgJ6Vnwc.js"
  },
  "/assets/users-iQB_VIv4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-wXsVehFFjq8MJ1ykZN9BMByuHmY"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 307,
    "path": "../public/assets/users-iQB_VIv4.js"
  },
  "/assets/wallet-mwv0dsek.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-OzKFVryYGbGPT2FH86mdiEk6ReY"',
    "mtime": "2026-09-02T17:01:19.665Z",
    "size": 4687,
    "path": "../public/assets/wallet-mwv0dsek.js"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-02T17:01:27.459Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-02T17:01:27.459Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bff3-g1H466Nz+MsFZGlEA0Vr7UpSOWs"',
    "mtime": "2026-09-02T17:01:27.459Z",
    "size": 49139,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-02T17:01:27.461Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T17:01:27.462Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-02T17:01:27.462Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"a2aa-ivFUdSBYs6biyn+XrviAfll732o"',
    "mtime": "2026-09-02T17:01:27.464Z",
    "size": 41642,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-02T17:01:27.466Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-02T17:01:27.466Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
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
