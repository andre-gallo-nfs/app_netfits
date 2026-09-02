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
    "mtime": "2026-09-02T22:13:43.856Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T22:13:43.852Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-02T22:13:43.854Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-02T22:13:43.854Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-02T22:13:43.854Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-BlfGSqcZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d11-vP9OUrSzEwnoNF8hoR04p5gZsmw"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 3345,
    "path": "../public/assets/InstitutionalWebHeader-BlfGSqcZ.js"
  },
  "/assets/ProductDetailSheet-CbhlyfyP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-dgmsKGWLFlH7Xa1DP60EzLWV7Bw"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CbhlyfyP.js"
  },
  "/assets/activities-CV3K2u3Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-X47jDuxBbgH2ZWoGPWtN6iWZBuY"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 1196,
    "path": "../public/assets/activities-CV3K2u3Y.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-tAVh3dKb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-kziuF9K3xG+Eu7MPY787gTa98d4"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 315,
    "path": "../public/assets/apple-tAVh3dKb.js"
  },
  "/assets/arrow-up-right-Cq4OeThX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-yOgBHXjrviR9HnQpVEUfv6Fu3Cs"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Cq4OeThX.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-CtMNMqOM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-Ntv/ldpABji07S+bZvvxPfxFeJE"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 29722,
    "path": "../public/assets/associado-CtMNMqOM.js"
  },
  "/assets/calendar-Dk90es8P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-n0uBA5CgwtlPaiER2qnwsbINe1E"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 258,
    "path": "../public/assets/calendar-Dk90es8P.js"
  },
  "/assets/circle-check-M41nn3Lf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Dw19aQK5fWEOkhXWqzcVyXfjQd4"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 174,
    "path": "../public/assets/circle-check-M41nn3Lf.js"
  },
  "/assets/circle-x-Dh3_XD1Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-vGHvUnB3ja7nRuU1jJimuylD5kk"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 405,
    "path": "../public/assets/circle-x-Dh3_XD1Q.js"
  },
  "/assets/contato-Dk3ujOTt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"222c-Wy+uXhh/guoSQIHbtoR4I1MH3nk"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 8748,
    "path": "../public/assets/contato-Dk3ujOTt.js"
  },
  "/assets/auth-BmaVf1lS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b542-FW0oSD78YTTscJU1LIacRUNmwrY"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 46402,
    "path": "../public/assets/auth-BmaVf1lS.js"
  },
  "/assets/credit-card-CnYiU6Xh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-DSXHnNdA+yQImdQPyy8grJrXOyo"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 208,
    "path": "../public/assets/credit-card-CnYiU6Xh.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/admin-CFv_gojq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ab359-5UC/zWkPCPUmGy/4DLZpxm8VbFM"',
    "mtime": "2026-09-02T22:13:38.145Z",
    "size": 701273,
    "path": "../public/assets/admin-CFv_gojq.js"
  },
  "/assets/download-ChchLxg3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"202a-brKRMlLhxmmwWpkgG3VlA3B2HYc"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 8234,
    "path": "../public/assets/download-ChchLxg3.js"
  },
  "/assets/dumbbell-C5IPIKVm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-HZUfOoA+YddEulVCioJGlP3Eu5g"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C5IPIKVm.js"
  },
  "/assets/eye-Ds0QLyi9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-H0lhx5xWNrrrwZA79swIJIONXDU"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 252,
    "path": "../public/assets/eye-Ds0QLyi9.js"
  },
  "/assets/faq-PSUht0fn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7928-m2Z2oCjRbrq4P/Txm6Ivugc3QeA"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 31016,
    "path": "../public/assets/faq-PSUht0fn.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-02T22:13:38.144Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-02T22:13:38.131Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-CUNHXwK9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-fBiJM5PaTjz3crFezcy7OZMyY1Y"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 386,
    "path": "../public/assets/file-text-CUNHXwK9.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-02T22:13:38.137Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gift-BhwyWl7X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-OVq+6iOhpf9jU3Qu5FO2T9G59ZY"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 350,
    "path": "../public/assets/gift-BhwyWl7X.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/home-BzFX1DDc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a92-tMFt6QFacypiy1ZKU0K5/GGcKIk"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 10898,
    "path": "../public/assets/home-BzFX1DDc.js"
  },
  "/assets/index-Yud9yW-Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-H0eTD1FC56+AViGC7moepmeaYww"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 61206,
    "path": "../public/assets/index-Yud9yW-Q.js"
  },
  "/assets/levels-BRIhDv3A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-ANzOLAwr69vzCEZxxBJX4pMzwIM"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 6869,
    "path": "../public/assets/levels-BRIhDv3A.js"
  },
  "/assets/lock-DgMRPVBU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-DvlZ8KAc3eRPAIcBmvGWdUuHzjk"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 202,
    "path": "../public/assets/lock-DgMRPVBU.js"
  },
  "/assets/link-2-DX-bWqT-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-GoHj7yGJj+RZw/ByK7Cf+0y9xHk"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 243,
    "path": "../public/assets/link-2-DX-bWqT-.js"
  },
  "/assets/log-in-DB1fvcy3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-e4FX2H/7Bpb/C92bALOmMPDcUiY"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 232,
    "path": "../public/assets/log-in-DB1fvcy3.js"
  },
  "/assets/map-pin-uR4WIDz3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-MbZmrDGcRxa1jjALVURuU7OjRAM"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 255,
    "path": "../public/assets/map-pin-uR4WIDz3.js"
  },
  "/assets/mail-CVi6hddV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-soeW15/DpKjfa16R/gBa5xT9E7s"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 214,
    "path": "../public/assets/mail-CVi6hddV.js"
  },
  "/assets/index-BfC9W0mL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"70b4d-E5nxu0NbozWft0ooyVWhgtSpxtg"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 461645,
    "path": "../public/assets/index-BfC9W0mL.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/market-C1JsWv9U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-cXFVvPIELCMyc2a8e/P3VZFVtVg"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 26473,
    "path": "../public/assets/market-C1JsWv9U.js"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T22:13:43.870Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T22:13:43.871Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/percent-9-pDNeRs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-qf3PQ3oiCEv6wHvtt7gwckXvpJw"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 646,
    "path": "../public/assets/percent-9-pDNeRs.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/phone-Cf9WBlLy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-EDRt6k/jmgflQCAO2fOkPqEnyDI"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 323,
    "path": "../public/assets/phone-Cf9WBlLy.js"
  },
  "/assets/parceiros-CrBQ1mKJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9379-BZgFBKhbJdDtrnyJHXDWfomERCU"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 37753,
    "path": "../public/assets/parceiros-CrBQ1mKJ.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-02T22:13:38.140Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-02T22:13:38.140Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-02T22:13:38.137Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-02T22:13:38.139Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-02T22:13:38.139Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-02T22:13:38.141Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-02T22:13:38.137Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T22:13:43.868Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-02T22:13:43.870Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-EPr7xcDI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-RDk6DBGO37UY9g+68652Jej5mLk"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 30867,
    "path": "../public/assets/profile-EPr7xcDI.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-02T22:13:38.146Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-QtGP-tpj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-yViBYCLZjbIy7Z5qLXM7DcnwkbM"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 170,
    "path": "../public/assets/search-QtGP-tpj.js"
  },
  "/assets/shield-check-CuwsQtyS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-aM6dUjMV3NG8526mYVRwnQmUXU0"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 316,
    "path": "../public/assets/shield-check-CuwsQtyS.js"
  },
  "/assets/trash-2-BMLyoGWC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-04qYxvzNnFInZkUNiMChblGs3mw"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 690,
    "path": "../public/assets/trash-2-BMLyoGWC.js"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/truck-10h9P4We.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-OqgwCrzKqD/leFmpxQjvKGrIdZY"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 1109,
    "path": "../public/assets/truck-10h9P4We.js"
  },
  "/assets/user-plus-Ou8WhAIp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-OLh+iIyD5YrHrZbWxMuu/3T/6lk"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 311,
    "path": "../public/assets/user-plus-Ou8WhAIp.js"
  },
  "/assets/users-CJjs7oqb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-Zbp2258Q0qndzIhrm5g//AmibGo"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 307,
    "path": "../public/assets/users-CJjs7oqb.js"
  },
  "/assets/wallet-CvCA3xAv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-6Y4x44oB7Tks3+wBq5wJsBNNnls"',
    "mtime": "2026-09-02T22:13:38.143Z",
    "size": 4687,
    "path": "../public/assets/wallet-CvCA3xAv.js"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-02T22:13:43.833Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/assets/styles-yNE5KtYj.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"29155-k88gWmteHaLiVYWy1DD3ihrtGmw"',
    "mtime": "2026-09-02T22:13:38.142Z",
    "size": 168277,
    "path": "../public/assets/styles-yNE5KtYj.css"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T22:13:43.882Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-02T22:13:43.833Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-02T22:13:38.138Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T22:13:38.147Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"c29e-cUJ4cPHsXOzO1C7gxZJqC17jWWc"',
    "mtime": "2026-09-02T22:13:43.834Z",
    "size": 49822,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-02T22:13:43.835Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T22:13:43.837Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-02T22:13:43.837Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"dcb8-IVL5UCt+u3m22AYHmlnvajcTwuE"',
    "mtime": "2026-09-02T22:13:43.840Z",
    "size": 56504,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-02T22:13:43.850Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml": {
    "type": "application/xml",
    "etag": '"9e4-VESQYPBYMiS7nY1cg79RtZ2yIT8"',
    "mtime": "2026-09-02T22:13:43.829Z",
    "size": 2532,
    "path": "../public/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml"
  },
  "/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml": {
    "type": "application/xml",
    "etag": '"7ca-kATGz8x1SLGk8QlzS7UgeqgXmxQ"',
    "mtime": "2026-09-02T22:13:43.838Z",
    "size": 1994,
    "path": "../public/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml": {
    "type": "application/xml",
    "etag": '"a07-ECis3dxpyVRrYxvG3YBcJ8yH1LA"',
    "mtime": "2026-09-02T22:13:43.838Z",
    "size": 2567,
    "path": "../public/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-02T22:13:43.853Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml": {
    "type": "application/xml",
    "etag": '"a0f-ZEWWYe5lZOszlQlgopFp4HfdxTU"',
    "mtime": "2026-09-02T22:13:43.839Z",
    "size": 2575,
    "path": "../public/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml"
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
