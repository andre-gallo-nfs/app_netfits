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
    "mtime": "2026-09-03T22:54:36.362Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-03T22:54:36.360Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-03T22:54:36.360Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-03T22:54:36.359Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-03T22:54:36.360Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-D8WTzeIu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c84-tvTWhgIgFVGNe/A8arGkMoM1lYk"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 3204,
    "path": "../public/assets/InstitutionalWebHeader-D8WTzeIu.js"
  },
  "/assets/ProductDetailSheet-CT0k7fyd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-zxvMgG0XYDCd6FuENQs6kyWtM2Q"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CT0k7fyd.js"
  },
  "/assets/activities-D7-oMwaX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-wcsH/NX/NCx4lTcoQZ6q/EOaGHY"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 1196,
    "path": "../public/assets/activities-D7-oMwaX.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apple-BFIzPsJt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-iXgrk+PT+d12SZ8KMvTAwPbq7Go"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 315,
    "path": "../public/assets/apple-BFIzPsJt.js"
  },
  "/assets/arrow-up-right-Cy0F4_h6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-DPtqy5iUPlidTMnHlh6cPqt+R3I"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Cy0F4_h6.js"
  },
  "/assets/associado-Brauevfe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"743e-WQFnbe6hd/b9MzLhAszdcPEvEBY"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 29758,
    "path": "../public/assets/associado-Brauevfe.js"
  },
  "/assets/auth-Bl52Du68.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a432-WNe9nKWX7uY+SqEk0CkuSoOtbHE"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 42034,
    "path": "../public/assets/auth-Bl52Du68.js"
  },
  "/assets/auth-store-n2NjC0EZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1197-gwsEOpqLhF18f35nxEPhhFcV/g4"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 4503,
    "path": "../public/assets/auth-store-n2NjC0EZ.js"
  },
  "/assets/calendar-Cke9aQbY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-UynszRxS6RbI2KLkeC1L3TzWyaY"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 258,
    "path": "../public/assets/calendar-Cke9aQbY.js"
  },
  "/assets/circle-check-FgokKuv3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-PO7T6/jJFKoKDYn+k7COZliX6Y8"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 174,
    "path": "../public/assets/circle-check-FgokKuv3.js"
  },
  "/assets/circle-x-DCBV_jZm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-Da/BrtP38um7fpKHxj10s3ffFfE"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 405,
    "path": "../public/assets/circle-x-DCBV_jZm.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/contato-BWoh3e3y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2325-PkDXht9ryJRaybgVJbreRmjHMnI"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 8997,
    "path": "../public/assets/contato-BWoh3e3y.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/admin-lAjo5yIc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aca4c-x4XWzpEtRtUtFZrYZ+t8yfc+/Nc"',
    "mtime": "2026-09-03T22:54:28.780Z",
    "size": 707148,
    "path": "../public/assets/admin-lAjo5yIc.js"
  },
  "/assets/credit-card-CK3bGaZ9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-CB+IqYDrko51JbGyz8wmr3JEgIQ"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 208,
    "path": "../public/assets/credit-card-CK3bGaZ9.js"
  },
  "/assets/download-DqU8GxEF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-bdqpfpmTe5NZtcBgOlXxE4unvng"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 233,
    "path": "../public/assets/download-DqU8GxEF.js"
  },
  "/assets/download-j-F4vzFn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2049-GuqS5sze0RwniyTRwb7jbA2PZgI"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 8265,
    "path": "../public/assets/download-j-F4vzFn.js"
  },
  "/assets/dumbbell-Bap7LxA6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-SPDuqrJXB2t25ciaLmxWaXtO1ks"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 561,
    "path": "../public/assets/dumbbell-Bap7LxA6.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/eye-C7p3e_a6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-flQF4gucboOa/d3cSY8iAnQT3OE"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 252,
    "path": "../public/assets/eye-C7p3e_a6.js"
  },
  "/assets/faq-BEwHI7sJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"794c-iT4Dmi7OOqhF45452DaFEx+BcQk"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 31052,
    "path": "../public/assets/faq-BEwHI7sJ.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-BpYtt-WI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-0UYG6g/6zXCxEbhoWUMIlonz4CQ"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 386,
    "path": "../public/assets/file-text-BpYtt-WI.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-03T22:54:28.774Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-DdYLYntw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-u/cPbD0S6qeVigEL47t3y16XHfc"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 350,
    "path": "../public/assets/gift-DdYLYntw.js"
  },
  "/assets/home-BNU72dp3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ab1-WQTE2I/daaz0WjqAceZpCmWOsb0"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 10929,
    "path": "../public/assets/home-BNU72dp3.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/index-DDllSF5P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"70ba3-UmNYeubkey68z4LGzkBDsso/LUo"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 461731,
    "path": "../public/assets/index-DDllSF5P.js"
  },
  "/assets/levels-DhtJpy0a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-r+PDq5Vd9qaqoZZHS2Mv2uP7gK8"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 6869,
    "path": "../public/assets/levels-DhtJpy0a.js"
  },
  "/assets/link-2-Cv2yT1_q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-/EcZ/1b9LhRALuwITcOqbTlPMCM"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 243,
    "path": "../public/assets/link-2-Cv2yT1_q.js"
  },
  "/assets/lock-BfxYn9dc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-7YTTwUD0LF9g4c8O4m+Ue5nWNPg"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 202,
    "path": "../public/assets/lock-BfxYn9dc.js"
  },
  "/assets/index-DHF0-hhe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-bsNglpZetkWhao4FMXlaBjgxO10"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 61206,
    "path": "../public/assets/index-DHF0-hhe.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/log-in-CBtCTZXT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-AR1dAE5DCo4H6ceOtSaqCldqMmc"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 232,
    "path": "../public/assets/log-in-CBtCTZXT.js"
  },
  "/assets/mail-DmbaK4vx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-KW92DMU/PK2676ZOncMIvBGUJCQ"',
    "mtime": "2026-09-03T22:54:28.779Z",
    "size": 214,
    "path": "../public/assets/mail-DmbaK4vx.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-03T22:54:36.377Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-03T22:54:36.372Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/assets/map-pin-DpSoVdVs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-XwQfaHqjCakuEDogPTsFiUgNclA"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 255,
    "path": "../public/assets/map-pin-DpSoVdVs.js"
  },
  "/assets/market-BKrNiu2h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-aZVqZ0ucJTJC0Fi+p0RydTWKYt0"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 26473,
    "path": "../public/assets/market-BKrNiu2h.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DqZkZ1s3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9398-JrMbCHy/OjoMRK4MqTNxYPIxPTk"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 37784,
    "path": "../public/assets/parceiros-DqZkZ1s3.js"
  },
  "/assets/percent-CIBXXFs2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-SN3eKmoMOjMywE8jpCRNLhbVV58"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 646,
    "path": "../public/assets/percent-CIBXXFs2.js"
  },
  "/assets/phone-C_lFhVrC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-u+nUDgV3H2E41D6EGUUuV0noJbM"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 323,
    "path": "../public/assets/phone-C_lFhVrC.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-03T22:54:28.774Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-03T22:54:28.777Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-03T22:54:36.371Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-03T22:54:36.366Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-03T22:54:28.781Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/profile-BS7sL_Wb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-gr07A7cbbnsQeqcOZ/CmC8VWQE4"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 30867,
    "path": "../public/assets/profile-BS7sL_Wb.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-03T22:54:28.775Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-03T22:54:28.781Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/search-CPhCHpue.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-XRFltNZGV6rkJzhuTFyvaKabJsM"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 170,
    "path": "../public/assets/search-CPhCHpue.js"
  },
  "/assets/shield-check-vUY5oH4P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-Iith+6sApqPqsrgsa4j/sC5Ly4A"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 316,
    "path": "../public/assets/shield-check-vUY5oH4P.js"
  },
  "/assets/styles-Cce0mIlv.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"296b8-EwvQaSyO8/V6ZDYII9cHscSSEeQ"',
    "mtime": "2026-09-03T22:54:28.776Z",
    "size": 169656,
    "path": "../public/assets/styles-Cce0mIlv.css"
  },
  "/assets/trash-2-CqIZ7WzQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-dt3FhUq9r6n1/en+kLc6IW4XYL4"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 690,
    "path": "../public/assets/trash-2-CqIZ7WzQ.js"
  },
  "/assets/truck-B5AHqiWH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-0iTqV/ZolEEJTm+N2VqV7zSE5VQ"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 1109,
    "path": "../public/assets/truck-B5AHqiWH.js"
  },
  "/assets/user-plus-DY1cUmXm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-TQXWg9zv7it/ya3jLXNrw9yVr5w"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 311,
    "path": "../public/assets/user-plus-DY1cUmXm.js"
  },
  "/assets/users-BpJbsxbt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-+NCZgSPdRuZs6QcJPpkqSg8a0F8"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 307,
    "path": "../public/assets/users-BpJbsxbt.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-03T22:54:36.382Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/wallet-Bg0f02NF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-/wlO3bO6VY88Vo2RQtD3PRQ36TM"',
    "mtime": "2026-09-03T22:54:28.778Z",
    "size": 4687,
    "path": "../public/assets/wallet-Bg0f02NF.js"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-03T22:54:36.344Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-03T22:54:36.345Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"c472-6lRqgrJrc+gQ27tIKFGebwvQoMc"',
    "mtime": "2026-09-03T22:54:36.344Z",
    "size": 50290,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-03T22:54:36.345Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a9a5-uH4bqxnKSUQgogTqioUrhsZYQIM"',
    "mtime": "2026-09-03T22:54:36.346Z",
    "size": 43429,
    "path": "../public/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-03T22:54:36.351Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-03T22:54:36.347Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-03T22:54:36.348Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"dcb8-IVL5UCt+u3m22AYHmlnvajcTwuE"',
    "mtime": "2026-09-03T22:54:36.355Z",
    "size": 56504,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-03T22:54:36.355Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml": {
    "type": "application/xml",
    "etag": '"9e4-VESQYPBYMiS7nY1cg79RtZ2yIT8"',
    "mtime": "2026-09-03T22:54:36.342Z",
    "size": 2532,
    "path": "../public/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml"
  },
  "/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml": {
    "type": "application/xml",
    "etag": '"7ca-kATGz8x1SLGk8QlzS7UgeqgXmxQ"',
    "mtime": "2026-09-03T22:54:36.349Z",
    "size": 1994,
    "path": "../public/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml": {
    "type": "application/xml",
    "etag": '"a07-ECis3dxpyVRrYxvG3YBcJ8yH1LA"',
    "mtime": "2026-09-03T22:54:36.351Z",
    "size": 2567,
    "path": "../public/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml": {
    "type": "application/xml",
    "etag": '"a0f-ZEWWYe5lZOszlQlgopFp4HfdxTU"',
    "mtime": "2026-09-03T22:54:36.353Z",
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
