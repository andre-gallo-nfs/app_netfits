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
    "mtime": "2026-08-27T16:14:58.697Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a636-ogHQ/SWKkPdSbnRP4tz8snVaxzc"',
    "mtime": "2026-08-27T16:14:58.698Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-27T16:14:58.697Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-DVXPjAx_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-iy8/fo96AgFPrTYn8jw2h7gdfPE"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-DVXPjAx_.js"
  },
  "/assets/ProductDetailSheet-DqNIKLPQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-S/H1f3KHI/NA5NsP7gTJlxhunxU"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-DqNIKLPQ.js"
  },
  "/assets/activities-BS4hLLg5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-VOaL8PHejhz5/IS/U82fts7W0S8"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 1196,
    "path": "../public/assets/activities-BS4hLLg5.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/arrow-up-right-C7gH9pfu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-gikLvQFkZVNhhPfR9gGwsEFmn8M"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-C7gH9pfu.js"
  },
  "/assets/apple-CP2Eh5jd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-kYyr7xcH4rqzUTOjtEI4iHoaTd8"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 315,
    "path": "../public/assets/apple-CP2Eh5jd.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/calendar-DZVkTe9t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-Pe9Xj3sKO9TBcWpsk1D5Rv11NIM"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 258,
    "path": "../public/assets/calendar-DZVkTe9t.js"
  },
  "/assets/circle-check-Dzq0kIDd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-mYbL2I/AdCrHhc4AbjOTPzg4ppY"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 174,
    "path": "../public/assets/circle-check-Dzq0kIDd.js"
  },
  "/assets/circle-x-X__fynqx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-bmqFO/Mc4CQE+G4QRQurJex76Nc"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 405,
    "path": "../public/assets/circle-x-X__fynqx.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-C_pZ-oxM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-FeHV1JvAbgk5EPn1y1hKTM7NrX4"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 208,
    "path": "../public/assets/credit-card-C_pZ-oxM.js"
  },
  "/assets/contato-D0XXXZSB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f58-TwqOf5UpaDYMoIYYRomNN57dwls"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 8024,
    "path": "../public/assets/contato-D0XXXZSB.js"
  },
  "/assets/download-BOUmvBCk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-a5Mo53tlLGDHP7SYntMkVD6j75M"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 8261,
    "path": "../public/assets/download-BOUmvBCk.js"
  },
  "/assets/auth-ClofFc46.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-OnutUoFfKtzderIA5ApbBnsjVLo"',
    "mtime": "2026-08-27T16:14:54.312Z",
    "size": 45736,
    "path": "../public/assets/auth-ClofFc46.js"
  },
  "/assets/dumbbell-CdkE4o1G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-zfMG5bb92b+e3KVZ0D3fa6yG1wE"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CdkE4o1G.js"
  },
  "/assets/associado-DodD0wll.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-u2BetynMCM09zeNwC463grOimso"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 29722,
    "path": "../public/assets/associado-DodD0wll.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-sRnb8t_t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"86fcd-i29RnPrg7qB2jRzSGZ6f/cgTSNo"',
    "mtime": "2026-08-27T16:14:54.314Z",
    "size": 552909,
    "path": "../public/assets/admin-sRnb8t_t.js"
  },
  "/assets/faq-CCjSfQqu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"75d0-d8SCbdjnRU2ZZ13OoPA1CsvQKHU"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 30160,
    "path": "../public/assets/faq-CCjSfQqu.js"
  },
  "/assets/eye-Ckv3PdDY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-OcOQSdyr8afGCeLB7kdfgDv0C7w"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 252,
    "path": "../public/assets/eye-Ckv3PdDY.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-Dt-WTXty.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-8IMPIyNh6LHi5vucQYWin61KUY4"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 386,
    "path": "../public/assets/file-text-Dt-WTXty.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-DN6pVkt2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-rLZzLkdzh81fbQzjCTgvUkJ/2nY"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 350,
    "path": "../public/assets/gift-DN6pVkt2.js"
  },
  "/assets/home-B3KC0Zqs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-tknznZTSNbbP3PLa9dntLGfFYUw"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 11044,
    "path": "../public/assets/home-B3KC0Zqs.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/index-E_fgXv1K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-I4/r53HCzA1YXSim0vpwlAaMhTA"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 61206,
    "path": "../public/assets/index-E_fgXv1K.js"
  },
  "/assets/levels-IKX29zFu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-BtmdD4Urxo/XhSxMY8M+9pemM2s"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 6869,
    "path": "../public/assets/levels-IKX29zFu.js"
  },
  "/assets/link-2-zb8S0sKi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-X7Fdge+zDAc7zWGNtP7NgnC9zzU"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 243,
    "path": "../public/assets/link-2-zb8S0sKi.js"
  },
  "/assets/lock-B85bppIH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-aHEQrTsQ3eS/uvJGRRuqL9TpHQU"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 202,
    "path": "../public/assets/lock-B85bppIH.js"
  },
  "/assets/log-in-BOM14fr2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-yLGgpPY1/Q3LDaP3kwaEpfTCIXg"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 232,
    "path": "../public/assets/log-in-BOM14fr2.js"
  },
  "/assets/mail-C293ySXI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-f1FyMjUG4o7yMle/aTOhrlm5hOk"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 214,
    "path": "../public/assets/mail-C293ySXI.js"
  },
  "/assets/index-M4Uuq-LG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c59d-2ok+G1ISfpowVHUJxyZaKvwtxSc"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 443805,
    "path": "../public/assets/index-M4Uuq-LG.js"
  },
  "/assets/map-pin-MKOXvE-2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-cEqeqgPnaVvvPIQYW/nJD8Okfqg"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 255,
    "path": "../public/assets/map-pin-MKOXvE-2.js"
  },
  "/assets/market-Bxupy31i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-eO95z1HrjRt6xz3mYebwFEqmA1A"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 26473,
    "path": "../public/assets/market-Bxupy31i.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-27T16:14:58.705Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-27T16:14:58.709Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-08-27T16:14:58.713Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DaIDxbaF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-Hnyo1D8hg/BGEslYnwzMUmZf5Z0"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 29316,
    "path": "../public/assets/parceiros-DaIDxbaF.js"
  },
  "/assets/percent-BWPGlbys.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-CIAZ13RwZ2D4wy6+V6LHUDT2mes"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 646,
    "path": "../public/assets/percent-BWPGlbys.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/phone-CjrmC0c7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-RnL/veEK9cd5g5B/Bs/Y256zDXY"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 323,
    "path": "../public/assets/phone-CjrmC0c7.js"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-CFT5CopY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79a1-3Ut4oNaMuAWB4Pw843u1+rzvwRA"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 31137,
    "path": "../public/assets/profile-CFT5CopY.js"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-27T16:14:54.316Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-27T16:14:54.309Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-27T16:14:54.316Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-27T16:14:54.308Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-DGMu-cta.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-6ZPZet79Eo4mbdz8gLsdhUCY4HI"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 410,
    "path": "../public/assets/save-DGMu-cta.js"
  },
  "/assets/search-D2o23oLM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-S9MbHxMVX1qxE8VdQYI0Yg0ACxg"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 170,
    "path": "../public/assets/search-D2o23oLM.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-27T16:14:58.711Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/shield-check-lUD9JgP1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-pNpJmDkbowWQbK6hyACA1Z0Kk04"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 316,
    "path": "../public/assets/shield-check-lUD9JgP1.js"
  },
  "/assets/truck-7Vg_9OXv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-1y8fiPgH4Zb0Sj+l4awsr1sxNLE"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 1109,
    "path": "../public/assets/truck-7Vg_9OXv.js"
  },
  "/assets/user-plus-moj8041-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-Cs84p50GCNgGZ0Q8X2clYSpNUzk"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 311,
    "path": "../public/assets/user-plus-moj8041-.js"
  },
  "/assets/styles-B4zMZW7F.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"27155-b3+lZmnjJtqrptEF6e7crIm8rAw"',
    "mtime": "2026-08-27T16:14:54.310Z",
    "size": 160085,
    "path": "../public/assets/styles-B4zMZW7F.css"
  },
  "/assets/users-CztVmyZL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-7ZsJgJEePUYVPLsZ88W0qOd3W8U"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 307,
    "path": "../public/assets/users-CztVmyZL.js"
  },
  "/assets/wallet-C0wkeLeD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-9PDVH1AaI4yFJDIChiAU9Hghuwo"',
    "mtime": "2026-08-27T16:14:54.311Z",
    "size": 4687,
    "path": "../public/assets/wallet-C0wkeLeD.js"
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
