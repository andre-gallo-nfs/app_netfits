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
    "mtime": "2026-08-27T19:32:52.941Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-27T19:32:52.994Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-27T19:32:52.994Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-CPubrush.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-b7Aftt3481WCXIO12AU+V3M/6KM"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-CPubrush.js"
  },
  "/assets/ProductDetailSheet-DOtmqGQY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-uMdtFOA4rxj64FUx2SyxUVtoF/Y"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-DOtmqGQY.js"
  },
  "/assets/activities-C8DGdnYU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-YS49yreTKOkodYUZPH4GSX0vmm4"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 1196,
    "path": "../public/assets/activities-C8DGdnYU.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-27T19:32:43.208Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-27T19:32:43.208Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-vVAbJZt6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-UsEzftDJrPKTzbWD8lwVsFtgkPc"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 315,
    "path": "../public/assets/apple-vVAbJZt6.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/arrow-up-right-DWc_zfRZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-6NjSaZsZ3/Y6YzloMbln0pIVh/o"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-DWc_zfRZ.js"
  },
  "/assets/associado-B49LGeIu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-PepBQH/7oZbKlo716ukATWtn23E"',
    "mtime": "2026-08-27T19:32:43.211Z",
    "size": 29722,
    "path": "../public/assets/associado-B49LGeIu.js"
  },
  "/assets/circle-check-B3NjsaAT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-85xZJ4wHW3XDZV83386hI/v4iaU"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 174,
    "path": "../public/assets/circle-check-B3NjsaAT.js"
  },
  "/assets/calendar-D_NpzHtz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-vY9HJ4HfoOg8aEk3Z+VyCBf+mRE"',
    "mtime": "2026-08-27T19:32:43.216Z",
    "size": 258,
    "path": "../public/assets/calendar-D_NpzHtz.js"
  },
  "/assets/auth-hmalHUiE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-8RTg7bFRgJTi/TOnyBXCDJjbgNs"',
    "mtime": "2026-08-27T19:32:43.212Z",
    "size": 45736,
    "path": "../public/assets/auth-hmalHUiE.js"
  },
  "/assets/circle-x-Cm0B1v5F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-CXx289FeIQ9XK8ylyIA5/DlRpJw"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 405,
    "path": "../public/assets/circle-x-Cm0B1v5F.js"
  },
  "/assets/contato-CtK9WGs5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2165-QFJkGLDW9V7axFAl8kI054qEEiI"',
    "mtime": "2026-08-27T19:32:43.213Z",
    "size": 8549,
    "path": "../public/assets/contato-CtK9WGs5.js"
  },
  "/assets/credit-card-Dw5upplk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-uiuBYnCv0ewuIBHHCtPAo0rSJOQ"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 208,
    "path": "../public/assets/credit-card-Dw5upplk.js"
  },
  "/assets/download-Bne2xcFG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-WZrb6uqGgh2clMIaO1WrCEjXiQ8"',
    "mtime": "2026-08-27T19:32:43.213Z",
    "size": 8261,
    "path": "../public/assets/download-Bne2xcFG.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-DIqFyHbH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-EwL6rYGwwTHh7W4p632kAJDKhC8"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 561,
    "path": "../public/assets/dumbbell-DIqFyHbH.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-DTtBd7Jf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9eefa-IF3CYtVlJSWEcHJa2WFTidCGNgM"',
    "mtime": "2026-08-27T19:32:43.219Z",
    "size": 651002,
    "path": "../public/assets/admin-DTtBd7Jf.js"
  },
  "/assets/eye-ww6dCLPW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-o7RKEYOuO/j9CJolgZRySCFKrUk"',
    "mtime": "2026-08-27T19:32:43.213Z",
    "size": 252,
    "path": "../public/assets/eye-ww6dCLPW.js"
  },
  "/assets/faq-BsVKHjq_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7d6d-vFJ8ma62LvozN//pa1u6sfWJX10"',
    "mtime": "2026-08-27T19:32:43.213Z",
    "size": 32109,
    "path": "../public/assets/faq-BsVKHjq_.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-27T19:32:43.206Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-DRlqVsCE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-az5T2CGUEJCCTaUlXrQVLTkxLA0"',
    "mtime": "2026-08-27T19:32:43.213Z",
    "size": 386,
    "path": "../public/assets/file-text-DRlqVsCE.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-27T19:32:43.206Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-C4FyhiNq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-3Ys1qXHmxzVeNP2DickMjtp5r6U"',
    "mtime": "2026-08-27T19:32:43.211Z",
    "size": 350,
    "path": "../public/assets/gift-C4FyhiNq.js"
  },
  "/assets/index-BZmSbvkv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-52M6N5XKt9zMlt3PJCO0hbMwE5A"',
    "mtime": "2026-08-27T19:32:43.211Z",
    "size": 61206,
    "path": "../public/assets/index-BZmSbvkv.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/home-zT1203eC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-KE9zjTgYp4lgPPlWlf92aPg+wqs"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 11044,
    "path": "../public/assets/home-zT1203eC.js"
  },
  "/assets/levels-DtReObzt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-fZQdsPhW9K3TmubTJCygBrqdOKM"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 6869,
    "path": "../public/assets/levels-DtReObzt.js"
  },
  "/assets/link-2-ClEddpxg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-z+G5U4xKML79I9efwXUH4CHLB4Y"',
    "mtime": "2026-08-27T19:32:43.216Z",
    "size": 243,
    "path": "../public/assets/link-2-ClEddpxg.js"
  },
  "/assets/lock-DNK3Q2z8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-PTgp55epVz32FJ3741WAaR6YhVQ"',
    "mtime": "2026-08-27T19:32:43.215Z",
    "size": 202,
    "path": "../public/assets/lock-DNK3Q2z8.js"
  },
  "/assets/log-in-BVT_T5Ay.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-PbRpcW3MTAHdFcAKBHlJdGEWIoI"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 232,
    "path": "../public/assets/log-in-BVT_T5Ay.js"
  },
  "/assets/mail-BQ__m9gA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-tp1AcOKiPG+2oln7yAxM34vdjQQ"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 214,
    "path": "../public/assets/mail-BQ__m9gA.js"
  },
  "/assets/map-pin-BO_Bw8VH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-fyfHv90WnxE/NYgRUuZBj5TsXN8"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 255,
    "path": "../public/assets/map-pin-BO_Bw8VH.js"
  },
  "/assets/index-ih1nMttn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6ed34-AUoKu73J2Aew/x8bf/SG++6zkYg"',
    "mtime": "2026-08-27T19:32:43.211Z",
    "size": 453940,
    "path": "../public/assets/index-ih1nMttn.js"
  },
  "/assets/market-Cdp2nIRq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-32pzr/6kcHbBlx8f6iyztiqQM3s"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 26473,
    "path": "../public/assets/market-Cdp2nIRq.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-27T19:32:53.004Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-27T19:32:43.218Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-08-27T19:32:52.953Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-27T19:32:53.006Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-Cx11tUau.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"748b-7OjAXO7CRagz6WhKHqrLGZYH+u0"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 29835,
    "path": "../public/assets/parceiros-Cx11tUau.js"
  },
  "/assets/percent-CTOALo_M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-kLeDVjc9BWOBy8P+q/UaQ1GVfNU"',
    "mtime": "2026-08-27T19:32:43.211Z",
    "size": 646,
    "path": "../public/assets/percent-CTOALo_M.js"
  },
  "/assets/phone-C-Nrefv0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-7treKGcax/wPluLN+MqMSVdo5C8"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 323,
    "path": "../public/assets/phone-C-Nrefv0.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-27T19:32:43.208Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-27T19:32:43.206Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-27T19:32:43.206Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/profile-D5WWbgmO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79a1-XvTyg8CQQNzW2/OUHGH6O92Ihsc"',
    "mtime": "2026-08-27T19:32:43.215Z",
    "size": 31137,
    "path": "../public/assets/profile-D5WWbgmO.js"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-27T19:32:43.210Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-27T19:32:43.221Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-27T19:32:43.209Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-27T19:32:43.220Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-27T19:32:43.207Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-27T19:32:43.207Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-27T19:32:53.014Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/save-C_fQHn_0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-vIwKiFsg3J62vUs0hZA1Vi/Zrfg"',
    "mtime": "2026-08-27T19:32:43.216Z",
    "size": 410,
    "path": "../public/assets/save-C_fQHn_0.js"
  },
  "/assets/search-BgX2Py7m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-Hmi2KRufKWnJP/c4T56SMT1lm+0"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 170,
    "path": "../public/assets/search-BgX2Py7m.js"
  },
  "/assets/shield-check-BCa2rqC6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-Ar+hl81CO1aXlWRJbHIFsRWW040"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 316,
    "path": "../public/assets/shield-check-BCa2rqC6.js"
  },
  "/assets/styles-D4j3v_3c.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28b09-Xx9KvnQTYp9y1Adw/PjeWlZ05jA"',
    "mtime": "2026-08-27T19:32:43.211Z",
    "size": 166665,
    "path": "../public/assets/styles-D4j3v_3c.css"
  },
  "/assets/user-plus-BVWw0zw_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-r0xp0BvYsgPJAyUjjox8MAkxfQo"',
    "mtime": "2026-08-27T19:32:43.216Z",
    "size": 311,
    "path": "../public/assets/user-plus-BVWw0zw_.js"
  },
  "/assets/users-DemuoNm6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-U2igJ06mabZpVWzaWPDJ9mXS+mo"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 307,
    "path": "../public/assets/users-DemuoNm6.js"
  },
  "/assets/truck-CLaKuUfr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-fwIUJkrcJ3BZfZHgfApYDI6rcjQ"',
    "mtime": "2026-08-27T19:32:43.214Z",
    "size": 1109,
    "path": "../public/assets/truck-CLaKuUfr.js"
  },
  "/assets/wallet-D5jxqCdo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-jHvlI0UcquD6crHFUH6eXU1VRpM"',
    "mtime": "2026-08-27T19:32:43.217Z",
    "size": 4687,
    "path": "../public/assets/wallet-D5jxqCdo.js"
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
