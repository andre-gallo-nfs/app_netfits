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
    "mtime": "2026-08-25T15:29:57.991Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T15:29:57.991Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-zaldheJr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-YFKSQPvjsqL3rPabUuJ3HOXZWyk"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-zaldheJr.js"
  },
  "/assets/ProductDetailSheet-B7EvsoUQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-8xqBHq670Ose0IXGUCn0eWcMbcs"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-B7EvsoUQ.js"
  },
  "/assets/activities-DTt2w4E3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-iYeosM/md3p3K1yP0QvE5EZjEps"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 1196,
    "path": "../public/assets/activities-DTt2w4E3.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apple-C1-t9ANd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-pH9jo1Pt3lzE6kLVQVJYy03P0/4"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 315,
    "path": "../public/assets/apple-C1-t9ANd.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/arrow-up-right-DIxgtlbY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-5f6gzekZijBrMFTGwHUPz2U2368"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-DIxgtlbY.js"
  },
  "/assets/auth-DK1bS5lI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b6f4-KCJumzGqa5t7wLiSYZS4m66ukO8"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 46836,
    "path": "../public/assets/auth-DK1bS5lI.js"
  },
  "/assets/associado-jT1NCOiD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"742d-2iXdZiUXhSP/7NjNXKiaWXqP2DI"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 29741,
    "path": "../public/assets/associado-jT1NCOiD.js"
  },
  "/assets/calendar-Bf3KYBGQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-TElxLA8XJhgNy/EWyFQRX4A//tw"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 258,
    "path": "../public/assets/calendar-Bf3KYBGQ.js"
  },
  "/assets/building-2-CQxDRuUW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-gyWL9qxu5IpeNDStLHxOUDlQQ60"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 384,
    "path": "../public/assets/building-2-CQxDRuUW.js"
  },
  "/assets/check-0plKOzMo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-HB5mSKPXlzWItU6IrokauWDMKGs"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 120,
    "path": "../public/assets/check-0plKOzMo.js"
  },
  "/assets/circle-check-C2KqzoXx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-kAukMh3qqHVCazAIdmP9GJNGV94"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 174,
    "path": "../public/assets/circle-check-C2KqzoXx.js"
  },
  "/assets/contato-S0qT3hQT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-ICzun5hNTb7zqqD9Js5hY5xQcPc"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 8068,
    "path": "../public/assets/contato-S0qT3hQT.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/credit-card-Cv0lxtWd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-Av+V4ef+lG7PxMWjwgxnanL9Bgc"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 208,
    "path": "../public/assets/credit-card-Cv0lxtWd.js"
  },
  "/assets/circle-x-BSfbxdBZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-iKS74Z4SdO4hcgHCAeFuy7qXd04"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 405,
    "path": "../public/assets/circle-x-BSfbxdBZ.js"
  },
  "/assets/download-BBThAjrF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-wI1puxqjmy8EtrFuFFUzHNmMUP4"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 8305,
    "path": "../public/assets/download-BBThAjrF.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-BjW7Omhw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-6bxmjpYihkx4IUQJr3h2HXLWaIw"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BjW7Omhw.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-PMZ0U3zd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83fa8-bm15vOQrOWcE8UBzQ+KgZrl6Rj8"',
    "mtime": "2026-08-25T15:29:53.065Z",
    "size": 540584,
    "path": "../public/assets/admin-PMZ0U3zd.js"
  },
  "/assets/faq-WBj5hE63.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-V6iQ17Jdv1OqBywwC+JTyy0HwMw"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 8169,
    "path": "../public/assets/faq-WBj5hE63.js"
  },
  "/assets/eye-B7JbAsbj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-+wTMSdCxSJtIJGsRC1HWnpHlOKQ"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 252,
    "path": "../public/assets/eye-B7JbAsbj.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-DipUZ6Gt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-ZzGBlij49fVO9BqZG1oPWbn98kM"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 350,
    "path": "../public/assets/gift-DipUZ6Gt.js"
  },
  "/assets/heart-DXABBNje.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-qvzzJUYp40IOejNNyeXa/0qYFPU"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 259,
    "path": "../public/assets/heart-DXABBNje.js"
  },
  "/assets/home-65fXMPlN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-5bCWpPLtokmgHFMELxbxcsO0ZXs"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 11065,
    "path": "../public/assets/home-65fXMPlN.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-C0KfBp-z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e565-R1DZA5/sMjKviGak+yjyqNTTKLA"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 58725,
    "path": "../public/assets/index-C0KfBp-z.js"
  },
  "/assets/levels-CTtiG7KP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-GCBO8mx4gYgNnP7mg9/dZA6W1x0"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 6864,
    "path": "../public/assets/levels-CTtiG7KP.js"
  },
  "/assets/link-2-DiuFZGWB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-rOmc7EeAsrDY9lOvK3MfG9/xYqA"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 243,
    "path": "../public/assets/link-2-DiuFZGWB.js"
  },
  "/assets/lock-DldqHclG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-mIKLs1CXoOPT+9Lu7y+iECnpEUU"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 202,
    "path": "../public/assets/lock-DldqHclG.js"
  },
  "/assets/log-in-CVUu0qy7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-fOXGo+yAo/rLXKrxK+GvCY8u5z8"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 232,
    "path": "../public/assets/log-in-CVUu0qy7.js"
  },
  "/assets/mail-fSf3NGuU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-8bFcADCW3gHDOXsPihQQff/P3Ww"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 214,
    "path": "../public/assets/mail-fSf3NGuU.js"
  },
  "/assets/map-pin-CDTz17M-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-4sR2g82dFb4VVhaBwUJ4h2/AMMs"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 255,
    "path": "../public/assets/map-pin-CDTz17M-.js"
  },
  "/assets/market-CWWOnpfl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-dFKFljX8HWGalUnKmz5j3rAPxAc"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 26557,
    "path": "../public/assets/market-CWWOnpfl.js"
  },
  "/assets/index-Cnawt_uk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6a31d-9R5QIWRI2vbbGefjQnrbNDg0O7k"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 434973,
    "path": "../public/assets/index-Cnawt_uk.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T15:29:57.999Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T15:29:58.003Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-CRR2zGOK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b5-KPdv0NT3qDcjpr72/0MXnfKIMTk"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 25781,
    "path": "../public/assets/parceiros-CRR2zGOK.js"
  },
  "/assets/percent-DKKsJ6Kh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-hZFJ7PbbBfzBD//XdVfE898WZ6M"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 646,
    "path": "../public/assets/percent-DKKsJ6Kh.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/profile-BsmD6mTf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79c8-9dsZcqWGHg6GOXA/XuHopk1ky1E"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 31176,
    "path": "../public/assets/profile-BsmD6mTf.js"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T15:29:53.066Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/save-DT2C5cJj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-/hV2rlnVrRri+8sjOM9hA7ONZzE"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 410,
    "path": "../public/assets/save-DT2C5cJj.js"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T15:29:53.057Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T15:29:58.010Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T15:29:53.066Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-DUTd7iqS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-gSECtp0yyzQjjyWyGILptAuPCsk"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 170,
    "path": "../public/assets/search-DUTd7iqS.js"
  },
  "/assets/share-2-Ox4nvZqn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-wlhWBPWVSCHJrGuE8Zp0yn5RmoI"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 353,
    "path": "../public/assets/share-2-Ox4nvZqn.js"
  },
  "/assets/shield-check-Cs-SNh6l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-Rb09ddPrgLokNI9cXMz1FmEI694"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 316,
    "path": "../public/assets/shield-check-Cs-SNh6l.js"
  },
  "/assets/styles-NwwxXpd_.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24400-CtW6WFUU42wZRz/VUMJn+EAZ1y8"',
    "mtime": "2026-08-25T15:29:53.058Z",
    "size": 148480,
    "path": "../public/assets/styles-NwwxXpd_.css"
  },
  "/assets/truck-CFZCLbVX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-OmXda7w/BawrPAZt+zMrbEiH52M"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 1109,
    "path": "../public/assets/truck-CFZCLbVX.js"
  },
  "/assets/user-plus-6VwWorEn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-Zb1w09MFuXdxo653dQ01+vPeKiA"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 585,
    "path": "../public/assets/user-plus-6VwWorEn.js"
  },
  "/assets/users-CZcK3oSL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-1ks/pbXXYMM8WqvPsoTj/oQ78P8"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 307,
    "path": "../public/assets/users-CZcK3oSL.js"
  },
  "/assets/wallet-BBtFgGSn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-PeE8sL4oLBMpSzevlhYMNru2LTU"',
    "mtime": "2026-08-25T15:29:53.060Z",
    "size": 5844,
    "path": "../public/assets/wallet-BBtFgGSn.js"
  },
  "/assets/zap-DKvXiwTj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-x730YTErXdMSSNwzm4UTNJZD3yo"',
    "mtime": "2026-08-25T15:29:53.059Z",
    "size": 263,
    "path": "../public/assets/zap-DKvXiwTj.js"
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
