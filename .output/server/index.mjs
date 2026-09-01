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
    "mtime": "2026-09-01T15:22:16.116Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-01T15:22:16.117Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-01T15:22:16.118Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-DhvjWwvu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-Df9qONELTVQUsNdgl3dv3Gvf2+c"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-DhvjWwvu.js"
  },
  "/assets/activities-ghun3cC_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-aMcjHAP+rSzYE3gL0UPEgFZyqeE"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 1196,
    "path": "../public/assets/activities-ghun3cC_.js"
  },
  "/assets/ProductDetailSheet-ceoLCCZm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-CiyjYpCyjZrw5hpOQMVsTyZZ9PI"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-ceoLCCZm.js"
  },
  "/assets/apple-Dn6FqvfO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-0AcjWwKQTP3oyUD52pT6ZiWk8wM"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 315,
    "path": "../public/assets/apple-Dn6FqvfO.js"
  },
  "/assets/arrow-up-right-ZXoIy9Ed.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-cVWMSR6UwcIp36+dXqgU8Uzyr6w"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-ZXoIy9Ed.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-BwXqbaT-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-XjrezoKifvqJj0BWRdyqpz3wd4Y"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 29722,
    "path": "../public/assets/associado-BwXqbaT-.js"
  },
  "/assets/auth-B_v679cN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-umY3imhSK7WWwVBhsm3DjgV7fVs"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 45736,
    "path": "../public/assets/auth-B_v679cN.js"
  },
  "/assets/calendar-BrHynvKx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-3WEsNjCm8nGzSUyzlg0lQqWuHRI"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 258,
    "path": "../public/assets/calendar-BrHynvKx.js"
  },
  "/assets/circle-check-CiphwM4N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Fgx0qn6oCuA8GVoPMEjV5qUc5hA"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 174,
    "path": "../public/assets/circle-check-CiphwM4N.js"
  },
  "/assets/circle-x-ftd0n60s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-ggHF0Xa7lkScvqqExxJ9HDk9od8"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 405,
    "path": "../public/assets/circle-x-ftd0n60s.js"
  },
  "/assets/contato-DQCv-DRA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2165-pUERpbP9Qxnhqk8v61w6FXVR1DA"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 8549,
    "path": "../public/assets/contato-DQCv-DRA.js"
  },
  "/assets/credit-card-DmybULCQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-a2iNl8dMFvC7N4vFnSONxOXlT54"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 208,
    "path": "../public/assets/credit-card-DmybULCQ.js"
  },
  "/assets/download-DPcqhHmS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-XtQQEBVsz3MmXBV8domdBB1VsMg"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 8261,
    "path": "../public/assets/download-DPcqhHmS.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-01T15:22:16.118Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-DczFHPL2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a073e-sGTq/wZTXAVS8Hr6iIMrzi8iYWU"',
    "mtime": "2026-09-01T15:22:10.752Z",
    "size": 657214,
    "path": "../public/assets/admin-DczFHPL2.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-01T15:22:16.118Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/dumbbell-C1GZbRoq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-Q+3J9K8U0qi+eFrKl9mQ/cH3elY"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C1GZbRoq.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/eye-BfceYL5l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-+QQWaoPQUNEiEXtpx0ug1k7H03c"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 252,
    "path": "../public/assets/eye-BfceYL5l.js"
  },
  "/assets/faq-DBUanFmo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7d87-/KS0T0hegwSXg7Kais9tcTQTwaU"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 32135,
    "path": "../public/assets/faq-DBUanFmo.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/file-text-DZ-daoD3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3d4-tsGQjN6sMnEG5ckxA+HIQkhV3JQ"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 980,
    "path": "../public/assets/file-text-DZ-daoD3.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-01T15:22:10.746Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/home-BMSjpnf0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-0JooDBc+aE4rS6Wk9SdvJ4s4ZPs"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 11044,
    "path": "../public/assets/home-BMSjpnf0.js"
  },
  "/assets/gift-ChZYun10.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-SCmaRSBQXD54RP9D9Ba05jKVkNQ"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 350,
    "path": "../public/assets/gift-ChZYun10.js"
  },
  "/assets/levels-BSOqxC1r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-QdZ7igXEzwVBKaczzEpGnXMbDKY"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 6869,
    "path": "../public/assets/levels-BSOqxC1r.js"
  },
  "/assets/lock-D-aa-gpj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-Lpz2lLVMkF4V+UeT9nOkpfD9a90"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 202,
    "path": "../public/assets/lock-D-aa-gpj.js"
  },
  "/assets/log-in-CzYOzZzz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-tArPU3o7PykVKpZKIgJwnDHuqKY"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 232,
    "path": "../public/assets/log-in-CzYOzZzz.js"
  },
  "/assets/mail-BSdDFYc8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-IwkN2POTdzia5CvDcW7cxt4Y/QI"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 214,
    "path": "../public/assets/mail-BSdDFYc8.js"
  },
  "/assets/link-2-E6Uj78TS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-8ezceuAM1NHiXiE35G4eNNdpiUI"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 243,
    "path": "../public/assets/link-2-E6Uj78TS.js"
  },
  "/assets/map-pin-DmKZZ4Ne.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-ZWIGq36qQAp9KTI0dP9DKDVlK5c"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 255,
    "path": "../public/assets/map-pin-DmKZZ4Ne.js"
  },
  "/assets/index-DQgcAC2M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-5HF//dTahowj8n2xhD9lFB95akk"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 61206,
    "path": "../public/assets/index-DQgcAC2M.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-DmtNee6g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6ed34-1VkErZ/CAFntnD7jqvVvDtyAOQo"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 453940,
    "path": "../public/assets/index-DmtNee6g.js"
  },
  "/assets/market-Cl3hRAP7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-9TPdBOH3Ap4OyrBPhsduBteI6To"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 26473,
    "path": "../public/assets/market-Cl3hRAP7.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-01T15:22:16.132Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-01T15:22:10.750Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-01T15:22:16.123Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BFvFv0Zz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"748b-exQ8P0C0fQ+g54MHu2mA4GB/d7M"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 29835,
    "path": "../public/assets/parceiros-BFvFv0Zz.js"
  },
  "/assets/percent-CG38EH-k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-Mdwe8qXn3tkqDRxMmas1ndOIO6g"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 646,
    "path": "../public/assets/percent-CG38EH-k.js"
  },
  "/assets/phone-BWWSic3r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-mgf2G9RW20UZ1Ff3kkatFlFS42w"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 323,
    "path": "../public/assets/phone-BWWSic3r.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-01T15:22:10.746Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-01T15:22:10.746Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-01T15:22:10.750Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-01T15:22:16.129Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/profile-DEInQxhl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79a1-cqSdKYdGA+AHfSBex7Iv32Nne5w"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 31137,
    "path": "../public/assets/profile-DEInQxhl.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-01T15:22:10.753Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-01T15:22:10.753Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-01T15:22:16.132Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-01T15:22:10.747Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-B3Zm3qrg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-V5IgO8fHDHve2aFt2yGRLCqdVbA"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 410,
    "path": "../public/assets/save-B3Zm3qrg.js"
  },
  "/assets/search-DLsL0vBz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-sGBis70Ppc0bLVTZ2jyGHxuUv0w"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 170,
    "path": "../public/assets/search-DLsL0vBz.js"
  },
  "/assets/shield-check-BR985zUC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-kGRBkcJu7s9hHKLFW8eQtSKf/8I"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 316,
    "path": "../public/assets/shield-check-BR985zUC.js"
  },
  "/assets/truck-1778r1yn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-DKWpCYglmFPZCZQlzx5oK4y3/Ew"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 1109,
    "path": "../public/assets/truck-1778r1yn.js"
  },
  "/assets/user-plus-BJFMENV2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-wfbGfOMaTFwLZBGD4ptqLMAw9nU"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 311,
    "path": "../public/assets/user-plus-BJFMENV2.js"
  },
  "/assets/users-Bl-tsHoh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-y3cgY1cX5LOBhXbUbsY7ENz1y3E"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 307,
    "path": "../public/assets/users-Bl-tsHoh.js"
  },
  "/assets/wallet-Fz7Dtirq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-VCimacvFhH2FdAjavT20R0f2A+A"',
    "mtime": "2026-09-01T15:22:10.749Z",
    "size": 4687,
    "path": "../public/assets/wallet-Fz7Dtirq.js"
  },
  "/assets/styles-BH7E1j5v.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28907-hiRcH5fvoSSXP/0wAfR0Sp7zFYo"',
    "mtime": "2026-09-01T15:22:10.748Z",
    "size": 166151,
    "path": "../public/assets/styles-BH7E1j5v.css"
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
