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
    "mtime": "2026-08-26T21:13:25.330Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-26T21:13:25.329Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-26T21:13:25.329Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-BB8zAW3-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-vTRTESyGD4rlZcLlhbuV3CDro7I"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-BB8zAW3-.js"
  },
  "/assets/ProductDetailSheet-xqvyBplQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-uBwNQ62VweQ3S36Hmy1vWxvgD5I"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-xqvyBplQ.js"
  },
  "/assets/activities-BnqW9Rst.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-iJmoOo6/6ob2xapzUAH7uqvZAEU"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 1196,
    "path": "../public/assets/activities-BnqW9Rst.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-BRirWqB0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-n3qODpDK8nnAaA9eOaHRlHfUUzw"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 315,
    "path": "../public/assets/apple-BRirWqB0.js"
  },
  "/assets/arrow-up-right-C5X6AmTA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-F6bcD8GoieFIeIoPB/iexXoLCCU"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-C5X6AmTA.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/associado-ExBHsjOk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-728hjrX0WrtlcK7AEHrbmayWejQ"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 29722,
    "path": "../public/assets/associado-ExBHsjOk.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/circle-check-BRpT1Nf-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-9307VJgSI9pBrkZFWo6nl2ih2Sc"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 174,
    "path": "../public/assets/circle-check-BRpT1Nf-.js"
  },
  "/assets/circle-x-CB60ezBe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-smO+MOt7YR13OW+luxHiD182wpY"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 405,
    "path": "../public/assets/circle-x-CB60ezBe.js"
  },
  "/assets/calendar-ZRo_dQm9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-UwlMMYxPSC5Ob5QLDOxiVjwRPEQ"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 258,
    "path": "../public/assets/calendar-ZRo_dQm9.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-CSEyj-iO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f58-T7JbEMmLjJ5WE1h1St0O2klRRC0"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 8024,
    "path": "../public/assets/contato-CSEyj-iO.js"
  },
  "/assets/credit-card-D6e4uvNZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-Ata3qZxPizwcPuDLu+6I8BbnUpw"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 208,
    "path": "../public/assets/credit-card-D6e4uvNZ.js"
  },
  "/assets/download-z3qFSQ3e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-Ow7aQtU8jAGyDFQ97HVgKjnO9hI"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 8261,
    "path": "../public/assets/download-z3qFSQ3e.js"
  },
  "/assets/auth-BtZRJIqx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-Qv8IAQLdD37eAPvGh7GaPW6Vnlk"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 45736,
    "path": "../public/assets/auth-BtZRJIqx.js"
  },
  "/assets/dumbbell-Do0V5Gew.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-84xi8/GwpNq58m/7P5bfRB6VzM8"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 561,
    "path": "../public/assets/dumbbell-Do0V5Gew.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-msPji7za.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"86f8b-yF7HR3KEDn4taEEZnZgZdcSFAAs"',
    "mtime": "2026-08-26T21:13:19.985Z",
    "size": 552843,
    "path": "../public/assets/admin-msPji7za.js"
  },
  "/assets/eye-BsE6sj-0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-5d9eeb6sMNLng9IzbJzrL6aY+wY"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 252,
    "path": "../public/assets/eye-BsE6sj-0.js"
  },
  "/assets/faq-BGcgS-sY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"75d0-Qvdh1wE0cwhjlfJsKK/r9iFUEHQ"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 30160,
    "path": "../public/assets/faq-BGcgS-sY.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-26T21:13:19.980Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/file-text-pfEE7_BN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-FYf+6tm2NuMGwMhv6WnAlC2OPW8"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 386,
    "path": "../public/assets/file-text-pfEE7_BN.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-BSV_G8__.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-jHvs2mRttK7MVnM+F1u51dTxtAs"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 350,
    "path": "../public/assets/gift-BSV_G8__.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/home-Bj9A1BiP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-MhKadbjcstRxifaQiEvm8sSYaMI"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 11044,
    "path": "../public/assets/home-Bj9A1BiP.js"
  },
  "/assets/index-BTgs82Wv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-RR1zEf5YHDO0DTRA3INlYvIaEwQ"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 61206,
    "path": "../public/assets/index-BTgs82Wv.js"
  },
  "/assets/levels-BjGGJpaN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-KZIk3cW+zTdPYxTs2Yts/jpLuHk"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 6869,
    "path": "../public/assets/levels-BjGGJpaN.js"
  },
  "/assets/link-2-DoR8IhRs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-xC2tI7T07BRSIEIrlhAbDZOZxGA"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 243,
    "path": "../public/assets/link-2-DoR8IhRs.js"
  },
  "/assets/lock-DWLHTZSM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-HVX9CljG3fUdvP4YRTUVtFzAS4o"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 202,
    "path": "../public/assets/lock-DWLHTZSM.js"
  },
  "/assets/log-in-t5Ql-Q42.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-F+vrTjsvfucuvL6nhcMmUCEZIkY"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 232,
    "path": "../public/assets/log-in-t5Ql-Q42.js"
  },
  "/assets/mail-BThhzd5q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-lC+yqt5+QDg4f1csslASA9mwihc"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 214,
    "path": "../public/assets/mail-BThhzd5q.js"
  },
  "/assets/map-pin-Bxsdwi0S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-PWF2bf3ccTDVEMx36KGyRTsi8Ko"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 255,
    "path": "../public/assets/map-pin-Bxsdwi0S.js"
  },
  "/assets/market-BsCq0TO_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-IYdHpXM34xlJMRORdXVpR6TNX+w"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 26473,
    "path": "../public/assets/market-BsCq0TO_.js"
  },
  "/assets/index-Bb-rwq3t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c59d-1NrFG/NJjYyK1DjBYFobRoIJWm8"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 443805,
    "path": "../public/assets/index-Bb-rwq3t.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T21:13:25.345Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-26T21:13:25.340Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-08-26T21:13:25.342Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-B6Zcezf2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-CE2I2hBrx8Pn32Dl5NdoAOlCTPs"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 29316,
    "path": "../public/assets/parceiros-B6Zcezf2.js"
  },
  "/assets/percent-DeyIqTVy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-cnqa8ShJP+NZ95nysejJ2f108Xw"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 646,
    "path": "../public/assets/percent-DeyIqTVy.js"
  },
  "/assets/phone-13R7DHgR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-66yeGBW9zt83rvUeGTs3tZ0p1DA"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 323,
    "path": "../public/assets/phone-13R7DHgR.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-CLu9U5rF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-YfPM6GhhE9iVxplmlMkf8Cfo8I0"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 31108,
    "path": "../public/assets/profile-CLu9U5rF.js"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T21:13:19.987Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-26T21:13:19.987Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-26T21:13:19.981Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-sssW4fYt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-IitokdfibGkt4TrDXr057BeBFdY"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 410,
    "path": "../public/assets/save-sssW4fYt.js"
  },
  "/assets/search-B6UjJgj3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-gGJomLjyChVKnCP1XE3fP2Ci8mE"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 170,
    "path": "../public/assets/search-B6UjJgj3.js"
  },
  "/assets/shield-check-CMbyLotN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-FM0LdM14T0+PV/N0KqiGgr7GzBw"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 316,
    "path": "../public/assets/shield-check-CMbyLotN.js"
  },
  "/assets/truck-CQp8LqBY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-OObnaKByez/vyByQSuaHtAuGWBc"',
    "mtime": "2026-08-26T21:13:19.983Z",
    "size": 1109,
    "path": "../public/assets/truck-CQp8LqBY.js"
  },
  "/assets/styles-B4zMZW7F.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"27155-b3+lZmnjJtqrptEF6e7crIm8rAw"',
    "mtime": "2026-08-26T21:13:19.982Z",
    "size": 160085,
    "path": "../public/assets/styles-B4zMZW7F.css"
  },
  "/assets/user-plus-B5uKyEpM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-kBgagEHrHEXyyHqpnDZ4Iqw+b60"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 311,
    "path": "../public/assets/user-plus-B5uKyEpM.js"
  },
  "/assets/users-CJ8kZdzf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-FckvScLgMR0qygQ61WEoxkJf+9o"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 307,
    "path": "../public/assets/users-CJ8kZdzf.js"
  },
  "/assets/wallet-DsRXHI8k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-HNF5LZhDK/xWe2Eswjm33dNGgxc"',
    "mtime": "2026-08-26T21:13:19.984Z",
    "size": 4687,
    "path": "../public/assets/wallet-DsRXHI8k.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T21:13:25.346Z",
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
