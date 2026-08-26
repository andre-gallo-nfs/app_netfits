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
    "mtime": "2026-08-26T21:04:20.653Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-26T21:04:20.654Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-26T21:04:20.654Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-CQ2_c4Iu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-WrB7zCD6uEYTzRadzi5LbPmW8+8"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-CQ2_c4Iu.js"
  },
  "/assets/ProductDetailSheet-CWMzMYmB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-jAOfIQ21nvNb2QOZhBhN+onnwtI"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CWMzMYmB.js"
  },
  "/assets/activities-DuEA6-Pw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-9SKQxem2i/kI/q5z8rOnJEbDQLc"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 1196,
    "path": "../public/assets/activities-DuEA6-Pw.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-6q3rVej6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-UY58YBZVGV+2RJooJz447asvZ/0"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 315,
    "path": "../public/assets/apple-6q3rVej6.js"
  },
  "/assets/arrow-up-right-7vUKu-ud.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-LLIScl78KRSr/p5eI6KCXtH+nbI"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-7vUKu-ud.js"
  },
  "/assets/associado-BY_2s79n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-uexZ7Y5ovTBE48ocl6E9FQ85yK8"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 29722,
    "path": "../public/assets/associado-BY_2s79n.js"
  },
  "/assets/calendar-DfBoOsvA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-OTLxido/ABMmzUeLQvEoAquvh8w"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 258,
    "path": "../public/assets/calendar-DfBoOsvA.js"
  },
  "/assets/circle-check-D3FbxDvf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-QSIqDEvsunPwYNlrdpCALdIunXo"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 174,
    "path": "../public/assets/circle-check-D3FbxDvf.js"
  },
  "/assets/auth-DXviK4as.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-H32SNnSM4l77F0c7tA9u7/QQD2Y"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 45736,
    "path": "../public/assets/auth-DXviK4as.js"
  },
  "/assets/circle-x-DPo_oHnY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-NPg6UTiBafgQs7x818aE4BbQPWE"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 405,
    "path": "../public/assets/circle-x-DPo_oHnY.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-26T21:04:15.958Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/download-D5ycBo-l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-gKZiuQorCjcENdwglATshqJuebA"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 8261,
    "path": "../public/assets/download-D5ycBo-l.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/contato-CxFh0R1K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f58-v5kge1t/802VGEjD7iml3jMC1SI"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 8024,
    "path": "../public/assets/contato-CxFh0R1K.js"
  },
  "/assets/credit-card-r9HqCozn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-l6P4D6Leo3e/kzpJiYZuE5dvqDY"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 208,
    "path": "../public/assets/credit-card-r9HqCozn.js"
  },
  "/assets/dumbbell-BoyB84jP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-mWibOP9mb8vs/drUsEuKXoENcaQ"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BoyB84jP.js"
  },
  "/assets/eye-DOEY8yGs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-2w4gXaz9ubkAsqwWcvkgRDJY2bU"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 252,
    "path": "../public/assets/eye-DOEY8yGs.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-Dp9exRPS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"86f8b-MhbDC2Zyrz46EPsqelZpU0UYdAA"',
    "mtime": "2026-08-26T21:04:15.964Z",
    "size": 552843,
    "path": "../public/assets/admin-Dp9exRPS.js"
  },
  "/assets/faq-SS9oTY_g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"514b-j6uSZU0QfZ9HsnVNB8U3EQX31bs"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 20811,
    "path": "../public/assets/faq-SS9oTY_g.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-iwTCQ8nh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-O59GhIh4K8I1gASWTcFrRVp3ND0"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 386,
    "path": "../public/assets/file-text-iwTCQ8nh.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-26T21:04:15.958Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-pazK0mld.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-tnt5fzuGGUABw3XP75mmsLIgwxQ"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 350,
    "path": "../public/assets/gift-pazK0mld.js"
  },
  "/assets/home-BXFkzmHq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-2M2c8z2mAh0lwK7lRsLNHmwNLmQ"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 11044,
    "path": "../public/assets/home-BXFkzmHq.js"
  },
  "/assets/index-vtXVN4xO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-Spmkflz96MH7zVHgezrl24m0CdQ"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 61206,
    "path": "../public/assets/index-vtXVN4xO.js"
  },
  "/assets/levels-Yq0-EViF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-v3tg0G4nyH4lOoxWHJ8u4Vt2RgI"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 6869,
    "path": "../public/assets/levels-Yq0-EViF.js"
  },
  "/assets/link-2-BULpKCRJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-nsMAEeeMGxJOnK9bmcokgTOzRX8"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 243,
    "path": "../public/assets/link-2-BULpKCRJ.js"
  },
  "/assets/lock-682kC8QB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-Xp4k451livXqi/SbwewkvFqGNIQ"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 202,
    "path": "../public/assets/lock-682kC8QB.js"
  },
  "/assets/log-in-DtjGtSK7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-XNlo61V2fzieCKQHxCcK5zZrKWs"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 232,
    "path": "../public/assets/log-in-DtjGtSK7.js"
  },
  "/assets/mail-DXl1iT-O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-kEsaZuZAcOWS5G7xm+ybJo7urP8"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 214,
    "path": "../public/assets/mail-DXl1iT-O.js"
  },
  "/assets/index-DfCn1iSm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c59d-z2yMryeIX6ug/zduUcQYjN7luSg"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 443805,
    "path": "../public/assets/index-DfCn1iSm.js"
  },
  "/assets/map-pin-BPk1k9qv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-tncqZW+cOsZydELAKLY1yQL+PS8"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 255,
    "path": "../public/assets/map-pin-BPk1k9qv.js"
  },
  "/assets/market-B5RWqeju.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-cJmUm5btNBvPz1xDveqN3zfhxsg"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 26473,
    "path": "../public/assets/market-B5RWqeju.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T21:04:20.658Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-26T21:04:20.659Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/parceiros-C__OoONE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-sSaKGbKj7l9y5DEN53FwG6lKzDk"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 29316,
    "path": "../public/assets/parceiros-C__OoONE.js"
  },
  "/assets/percent-B_T1y3hj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-EmrtszHLDcCWo/YI3RPDgl+6+ck"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 646,
    "path": "../public/assets/percent-B_T1y3hj.js"
  },
  "/assets/phone-C4wydvuJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-vInnToXwZjS7XOLD7oA4pNN8sqs"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 323,
    "path": "../public/assets/phone-C4wydvuJ.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-26T21:04:15.958Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-CtSTsMoH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-g343Xn35aHUOR2jYNN8u27mYSVg"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 31108,
    "path": "../public/assets/profile-CtSTsMoH.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T21:04:15.965Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T21:04:20.660Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-26T21:04:15.959Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-CuZg-j7M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-vhiSHTbmScJZEdMS/D5BxbV9oHM"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 410,
    "path": "../public/assets/save-CuZg-j7M.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-26T21:04:15.965Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-_bXnFEne.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-492Xcwr94JGtfws7rVx4uJ5tbvU"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 170,
    "path": "../public/assets/search-_bXnFEne.js"
  },
  "/assets/shield-check-BPqac9B2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-LAkJWbjU2brFL6imD6jOujlN6HI"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 316,
    "path": "../public/assets/shield-check-BPqac9B2.js"
  },
  "/assets/truck-BlYa2SXb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-nd7PMdc3u/bjD1L66t0EghP8auk"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 1109,
    "path": "../public/assets/truck-BlYa2SXb.js"
  },
  "/assets/user-plus-Bpc-UHkR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-DffSCCjneSqVe66vsbL6HrHlEKQ"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 311,
    "path": "../public/assets/user-plus-Bpc-UHkR.js"
  },
  "/assets/styles-UZsy0BEA.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"26ff7-tTkf3jNBJz/AvC7xMWZjGiN/6TE"',
    "mtime": "2026-08-26T21:04:15.960Z",
    "size": 159735,
    "path": "../public/assets/styles-UZsy0BEA.css"
  },
  "/assets/users-CeaAW47a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-6fQxIJZv6F0aAcdgX8URPedAMfM"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 307,
    "path": "../public/assets/users-CeaAW47a.js"
  },
  "/assets/wallet-CyEL5syR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-Q1I7TWxmPn0W/IZvAeGfGBRzYec"',
    "mtime": "2026-08-26T21:04:15.961Z",
    "size": 4687,
    "path": "../public/assets/wallet-CyEL5syR.js"
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
