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
    "mtime": "2026-08-26T21:09:45.363Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-26T21:09:45.363Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-26T21:09:45.361Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-wBwm9BwZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-btvsMYBgjKc7VgGPhnZhoplmbfI"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-wBwm9BwZ.js"
  },
  "/assets/ProductDetailSheet-CQKtzLiy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-pM57wzz6dbwdBNuMazB5eQS7EIw"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CQKtzLiy.js"
  },
  "/assets/activities-Bu2Er0JV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-S6Ytl1VeXMCEcZmHC2srJ4eTwIE"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 1196,
    "path": "../public/assets/activities-Bu2Er0JV.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/arrow-up-right-sa7DbzGe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-Ly2USEG0KeK1+BDUgZ6KA0gckrE"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-sa7DbzGe.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-BIeUXtk7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-Xa6xtMYs3mWH4oPAiJCHSTeGrRs"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 315,
    "path": "../public/assets/apple-BIeUXtk7.js"
  },
  "/assets/associado-K0-FfTrt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-t6bmEziEEtObu+quXVPIx3tG4Bs"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 29722,
    "path": "../public/assets/associado-K0-FfTrt.js"
  },
  "/assets/calendar-CdYQzkt-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-uthFyYPzQzaL5KgzLQBLT9oZFVg"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 258,
    "path": "../public/assets/calendar-CdYQzkt-.js"
  },
  "/assets/auth-DxQfNY3i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-evxu/sdbk8vOyCSs23XrYnxNUpg"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 45736,
    "path": "../public/assets/auth-DxQfNY3i.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/circle-check-us56vwBm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-fpkSbId4nj7bKlAuXFE+lRARSc4"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 174,
    "path": "../public/assets/circle-check-us56vwBm.js"
  },
  "/assets/circle-x-YFvBYNDf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-tBJHB8CtkPq9vv28geI33j7HYNo"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 405,
    "path": "../public/assets/circle-x-YFvBYNDf.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-DnDe9-xb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f58-Tr622AojyfaTUfUy5OktWqfpOrw"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 8024,
    "path": "../public/assets/contato-DnDe9-xb.js"
  },
  "/assets/credit-card-BC7mAhGH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-45KeApPdDn6+uQc/9YdMgU2VkXc"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 208,
    "path": "../public/assets/credit-card-BC7mAhGH.js"
  },
  "/assets/download-ll0s4Nqb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-KfO8q51we62HCKGBtzgym1+/Paw"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 8261,
    "path": "../public/assets/download-ll0s4Nqb.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/dumbbell-l_VcTYnE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-oOrzwbu6i3HZHH13W+5yFcd8aRY"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 561,
    "path": "../public/assets/dumbbell-l_VcTYnE.js"
  },
  "/assets/admin-DG-0JGO3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"86f8b-jdaWwe875P45pX9+4SFILWccpfo"',
    "mtime": "2026-08-26T21:09:40.260Z",
    "size": 552843,
    "path": "../public/assets/admin-DG-0JGO3.js"
  },
  "/assets/eye-zGL5ZDZa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-Q/wo3IzzYoz4ivOdoOc3BxFXggI"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 252,
    "path": "../public/assets/eye-zGL5ZDZa.js"
  },
  "/assets/faq-CpEEuF3D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5205-fAuTAPEuPfPwzpC5389NYKEU/pM"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 20997,
    "path": "../public/assets/faq-CpEEuF3D.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-26T21:09:40.253Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-CBsR9xDo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-+T/ZOTpexUWO/H70x+jOiHwBnbU"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 386,
    "path": "../public/assets/file-text-CBsR9xDo.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-26T21:09:40.253Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-DRLV2kei.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-3sCnltMp3lO4dXPwdL/5EUeILVs"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 350,
    "path": "../public/assets/gift-DRLV2kei.js"
  },
  "/assets/home-CCYeCAdM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-82Ni4UCcTeCp839loKALIA2pt+0"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 11044,
    "path": "../public/assets/home-CCYeCAdM.js"
  },
  "/assets/index-C7Sw3BwL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-McW3EzAp4o/rn35Q4ZlAOOv3MpQ"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 61206,
    "path": "../public/assets/index-C7Sw3BwL.js"
  },
  "/assets/levels-BIF1azva.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-EOiZ2t37fSI3+qrCVkKaGyndZbU"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 6869,
    "path": "../public/assets/levels-BIF1azva.js"
  },
  "/assets/link-2-CdxpujDj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-7vhKP0V1eRm88gmVM7/xuHurNDw"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 243,
    "path": "../public/assets/link-2-CdxpujDj.js"
  },
  "/assets/lock-Cz-2_SmV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-ts5dJ2Z8q6pXW3CRSocJ5gZE2FA"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 202,
    "path": "../public/assets/lock-Cz-2_SmV.js"
  },
  "/assets/log-in-Dfk9bOJP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-ZedFqDpsbCmPqGzpP9zgvPbGLZY"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 232,
    "path": "../public/assets/log-in-Dfk9bOJP.js"
  },
  "/assets/mail-BFu49oUr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-RSa4Az1NJK2bHLVA6XxYvsJWNuk"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 214,
    "path": "../public/assets/mail-BFu49oUr.js"
  },
  "/assets/index-CZMmGN_X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c59d-eOvVcLbca1PlQEqEMGPn8+6mxBw"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 443805,
    "path": "../public/assets/index-CZMmGN_X.js"
  },
  "/assets/map-pin-DGVjp4Pe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-qj0kcQhOIJLlIW0q7lN/SnV7Tp8"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 255,
    "path": "../public/assets/map-pin-DGVjp4Pe.js"
  },
  "/assets/market-CbX2nx6b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-u4w9MDIbsBQE9klji+3uwzWyg1E"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 26473,
    "path": "../public/assets/market-CbX2nx6b.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T21:09:40.258Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T21:09:45.365Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-26T21:09:45.374Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-08-26T21:09:45.373Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/percent-DIp4E_-d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-Dz1Hg32mqyWqnEV2JNKWCHRzNhI"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 646,
    "path": "../public/assets/percent-DIp4E_-d.js"
  },
  "/assets/parceiros-AjJXOt9K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-hLsJD/ca1aZX6UeP3mu+CB0EAGI"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 29316,
    "path": "../public/assets/parceiros-AjJXOt9K.js"
  },
  "/assets/phone-CNlrbCtt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-g3rZOrHdLYN9fa8LIjh99r+xANo"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 323,
    "path": "../public/assets/phone-CNlrbCtt.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-26T21:09:40.253Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-26T21:09:40.253Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-D2zARu4S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-7vY6nuCRMBRpEcqdE/TGTj2iyFA"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 31108,
    "path": "../public/assets/profile-D2zARu4S.js"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T21:09:40.261Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-26T21:09:40.261Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-26T21:09:40.254Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/search-CWbKZznq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-5lyvppNG7xSL+5/pUkFre1JIQJY"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 170,
    "path": "../public/assets/search-CWbKZznq.js"
  },
  "/assets/save-BKwj3B9c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-x9d5KvywKS5ZNvTiw7Zgf9HzXew"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 410,
    "path": "../public/assets/save-BKwj3B9c.js"
  },
  "/assets/shield-check-cP7zYByA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-gdCHbvRvd4USBfA+vtZz/f/lDtY"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 316,
    "path": "../public/assets/shield-check-cP7zYByA.js"
  },
  "/assets/truck-BshflkOF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-KU9n5n6oleWWzD3TQdiqJfBe+ps"',
    "mtime": "2026-08-26T21:09:40.256Z",
    "size": 1109,
    "path": "../public/assets/truck-BshflkOF.js"
  },
  "/assets/user-plus-BZOlOGaV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-WwcDsyiuzEbxHhi0uSEkeKEfXcM"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 311,
    "path": "../public/assets/user-plus-BZOlOGaV.js"
  },
  "/assets/users-Ccjl-OFX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-tyjl50AcQP2YdDyz8NgKIwN0qvc"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 307,
    "path": "../public/assets/users-Ccjl-OFX.js"
  },
  "/assets/wallet-C8exODY8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-Z2KisGFVht4xozLNFzB3SmidT3I"',
    "mtime": "2026-08-26T21:09:40.257Z",
    "size": 4687,
    "path": "../public/assets/wallet-C8exODY8.js"
  },
  "/assets/styles-UZsy0BEA.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"26ff7-tTkf3jNBJz/AvC7xMWZjGiN/6TE"',
    "mtime": "2026-08-26T21:09:40.255Z",
    "size": 159735,
    "path": "../public/assets/styles-UZsy0BEA.css"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T21:09:45.374Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
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
