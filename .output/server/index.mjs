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
    "mtime": "2026-08-24T19:15:54.462Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T19:15:54.462Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-DfWCGYRI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-OYEX2Kn0IZQmL9UImT7zFNjmHeQ"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-DfWCGYRI.js"
  },
  "/assets/ProductDetailSheet-DcsUeNku.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-oeIxCxHIENwqLT8RnJuOqUtAATY"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-DcsUeNku.js"
  },
  "/assets/activities-eMxIWnU_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-OvVVK12+PT2h1LOZYDZR9Fx0j3E"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 1159,
    "path": "../public/assets/activities-eMxIWnU_.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-CX7qvGNQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-Wh4qEX9ZIfTLShByLVQoPd4efa8"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 315,
    "path": "../public/assets/apple-CX7qvGNQ.js"
  },
  "/assets/arrow-up-right-CWYhms6M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-atYiEVyJIdoizhJj1Lm0picRqvk"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CWYhms6M.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/associado-gdAEKCNB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7451-k8/oSNxP+5Ixs/eCncrcIkJhDQU"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 29777,
    "path": "../public/assets/associado-gdAEKCNB.js"
  },
  "/assets/building-2-Br2uKIxK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-txcmPrisY5etIr7ke/XMmTdD6FY"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 384,
    "path": "../public/assets/building-2-Br2uKIxK.js"
  },
  "/assets/circle-check-CRWAd8M9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-/KoNNoICe317oYAKSoQgtEzKqs4"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 174,
    "path": "../public/assets/circle-check-CRWAd8M9.js"
  },
  "/assets/auth-x4EOeLCK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a154-cdzGrbro7xm7cV8yM0HWXHJGOQM"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 41300,
    "path": "../public/assets/auth-x4EOeLCK.js"
  },
  "/assets/circle-x-CdqpfZ1v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-+pfkS4SsZ4D3uif/VbRiccXtuRo"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 405,
    "path": "../public/assets/circle-x-CdqpfZ1v.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/contato-BLBM9kAd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-0qgi9vCFrlv7MtGDZgSFCPKY1yg"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 8068,
    "path": "../public/assets/contato-BLBM9kAd.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-C4aZov_l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-u8WLfVgx5lFPCJAuns2gAOY8kdE"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 208,
    "path": "../public/assets/credit-card-C4aZov_l.js"
  },
  "/assets/download-mo4l3Xye.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-xvt3Bh6HXtXouZOlxmeWDfLKnlk"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 8305,
    "path": "../public/assets/download-mo4l3Xye.js"
  },
  "/assets/dumbbell-BsYXJBiA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-ZGIPri8NlpKmPvmqCAnFIz/EDLM"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BsYXJBiA.js"
  },
  "/assets/eye-D-S3ohDY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-0WBm9FyKP+Y/ySZJ0vIbCm5Ebhs"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 252,
    "path": "../public/assets/eye-D-S3ohDY.js"
  },
  "/assets/check-DMbo2ewo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-qgcjKjcnkwLlwSyfMCY83XmlnpQ"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 120,
    "path": "../public/assets/check-DMbo2ewo.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-BVWJvOVD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"814e5-qSAAW3L37Dws0mjjB3LWul5qPcI"',
    "mtime": "2026-08-24T19:15:49.843Z",
    "size": 529637,
    "path": "../public/assets/admin-BVWJvOVD.js"
  },
  "/assets/faq-DDiwxhg1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-7OG0T1zFxL3/59ZUIbfLZ1ikY6U"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 8169,
    "path": "../public/assets/faq-DDiwxhg1.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-Cjmn0As8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-TvmH24bqBtYO0aruC4kO0IPgEe4"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 350,
    "path": "../public/assets/gift-Cjmn0As8.js"
  },
  "/assets/heart-uDl3fjkJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-inI/sGofruYFit/ReYTIogz6Bi4"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 259,
    "path": "../public/assets/heart-uDl3fjkJ.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/home-BZ3p1f9J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-+ScL+h35jntF01qx3Ltw13iosjo"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 11065,
    "path": "../public/assets/home-BZ3p1f9J.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/index-BXeG1Y-7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4d3-dI9SECQxTIQM6ergGMt2MS4nF2I"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 58579,
    "path": "../public/assets/index-BXeG1Y-7.js"
  },
  "/assets/link-2-CXu7LPtd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-5FgNIcXZKqwo4Dw00WOmKpwlShM"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 243,
    "path": "../public/assets/link-2-CXu7LPtd.js"
  },
  "/assets/lock-DU0UxjkL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-j2kfLhlVZyyS5D9uy4VdfTb0qYs"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 202,
    "path": "../public/assets/lock-DU0UxjkL.js"
  },
  "/assets/mail-Dbnva5A4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-i9CBtp4lJgK1HO7eoCwM4ouQ+G0"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 214,
    "path": "../public/assets/mail-Dbnva5A4.js"
  },
  "/assets/levels-CDc6ItUd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-ISK4/ue9ca4WWlB5xng5GcSG2qI"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 6864,
    "path": "../public/assets/levels-CDc6ItUd.js"
  },
  "/assets/map-pin-DpykxNpy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-v+eqM9uuSKGev3hKzWFNaIjwJ84"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 255,
    "path": "../public/assets/map-pin-DpykxNpy.js"
  },
  "/assets/market-BD0e-VX7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-8qAaUlF177lEgsAHminTr9gRfp8"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 26518,
    "path": "../public/assets/market-BD0e-VX7.js"
  },
  "/assets/index-BTDtIjWI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69bc9-AXeoBT89SWQ/aUhKEG23crF6Sis"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 433097,
    "path": "../public/assets/index-BTDtIjWI.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/operational-params-store-DjPcA_2f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-HN0byivSjcdWGSgEgpSO3s8zwFw"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-DjPcA_2f.js"
  },
  "/assets/parceiros-DUiLqiZX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-orTLtViQXtu2eUil/cIvf2Ceyuw"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 25692,
    "path": "../public/assets/parceiros-DUiLqiZX.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T19:15:49.842Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T19:15:54.479Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T19:15:54.481Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-DhUch1IY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-yJWgKyPFJMPyiQMWPjZ6bEld6Ns"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 646,
    "path": "../public/assets/percent-DhUch1IY.js"
  },
  "/assets/phone-B4qN82h7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-smY/0VwHk877/Uq91we/KkiVHyE"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 323,
    "path": "../public/assets/phone-B4qN82h7.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-CAAbc2C0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6030-AFwj6dLQk7JFNCeWYDCl+DKcfIk"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 24624,
    "path": "../public/assets/profile-CAAbc2C0.js"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-24T19:15:49.823Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T19:15:49.852Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T19:15:54.504Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T19:15:49.836Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-BrktRGeG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-XDeOpaOkTlsnFDOjcRaKoMD5T78"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 410,
    "path": "../public/assets/save-BrktRGeG.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T19:15:49.849Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-CCVwLb3f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-q8e9pihvmthk5gaPBQGkv33N+Ic"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 170,
    "path": "../public/assets/search-CCVwLb3f.js"
  },
  "/assets/share-2-BHJLzaX3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-MEvLrPXkqIDnNHcn4T7tAeEaC8w"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 353,
    "path": "../public/assets/share-2-BHJLzaX3.js"
  },
  "/assets/shield-check-DcHErDZf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-Ncs5U5oZ6xdD39YkSLccVoeZag0"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 316,
    "path": "../public/assets/shield-check-DcHErDZf.js"
  },
  "/assets/styles-BOpCtONf.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23f49-78lQ2q99XpYg4K0P6v3uhu0UXbo"',
    "mtime": "2026-08-24T19:15:49.837Z",
    "size": 147273,
    "path": "../public/assets/styles-BOpCtONf.css"
  },
  "/assets/truck-DDSC-_Ev.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-bt9NgMKCePnOlZkahxNEY2InlU4"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 1109,
    "path": "../public/assets/truck-DDSC-_Ev.js"
  },
  "/assets/user-plus-D21JzpS7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ee-wWG1rQJilbSK0rc8B82kK/Muy7Q"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 494,
    "path": "../public/assets/user-plus-D21JzpS7.js"
  },
  "/assets/users-BvwXgAyI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-mlOgsgtnMQQA91mKGYTnyMrCl2k"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 307,
    "path": "../public/assets/users-BvwXgAyI.js"
  },
  "/assets/wallet-BYRy1unv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-hK/548RbQBRJszMRjKuXZqL8Ep4"',
    "mtime": "2026-08-24T19:15:49.839Z",
    "size": 5150,
    "path": "../public/assets/wallet-BYRy1unv.js"
  },
  "/assets/zap-BEAXLBfz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-jzFLDoo9VA1RQsssMwRfJK0HwkU"',
    "mtime": "2026-08-24T19:15:49.838Z",
    "size": 263,
    "path": "../public/assets/zap-BEAXLBfz.js"
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
