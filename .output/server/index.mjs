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
    "mtime": "2026-08-24T21:28:58.752Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/InstitutionalWebHeader-DNGjDNSI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-L96MYr+2nICxxInvLF3DAnZn1E0"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-DNGjDNSI.js"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T21:28:58.752Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-urGWLf5g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-NmRxiUTTh3kBm6MoMDtBJxV2bws"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-urGWLf5g.js"
  },
  "/assets/activities-fZ5AYuzQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-Kqov83o0qifjAcntPOdlBtnPQzY"',
    "mtime": "2026-08-24T21:28:54.340Z",
    "size": 1196,
    "path": "../public/assets/activities-fZ5AYuzQ.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-BcfxjXJv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-tgEGimNk6JN3XGBD7lI2Q9T7tp0"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 315,
    "path": "../public/assets/apple-BcfxjXJv.js"
  },
  "/assets/arrow-up-right-B1w7Bln8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-/lI4NSi4cKo8UK2x/P/7OLnVINE"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-B1w7Bln8.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-By14lHxT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"742d-UV9VxrsJWiW/eU5LnGeiHwR6irk"',
    "mtime": "2026-08-24T21:28:54.340Z",
    "size": 29741,
    "path": "../public/assets/associado-By14lHxT.js"
  },
  "/assets/building-2-jL0cHuNM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-jhgpuAys2sYWo3E1KMOpY2NQkW0"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 384,
    "path": "../public/assets/building-2-jL0cHuNM.js"
  },
  "/assets/calendar-KhmnGoje.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-XNDNoK9Qu4wgBZzI9NrIzu/Y7d8"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 258,
    "path": "../public/assets/calendar-KhmnGoje.js"
  },
  "/assets/auth-BHBLXYS2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b6f4-08/9cEiR5tu/qFLEBgZk0/rrp/A"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 46836,
    "path": "../public/assets/auth-BHBLXYS2.js"
  },
  "/assets/check-j1vq2wSH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-JaKmPx5nO52DMaD5WHAF2evtSJ4"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 120,
    "path": "../public/assets/check-j1vq2wSH.js"
  },
  "/assets/circle-check-DGY_bw7W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-yqgWiwT88Pf3B3HrNWuRv9vK3Ds"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 174,
    "path": "../public/assets/circle-check-DGY_bw7W.js"
  },
  "/assets/circle-x-Coccp4C_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-aDIFoOB+lGG+BFjVVt4w7YDOtUA"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 405,
    "path": "../public/assets/circle-x-Coccp4C_.js"
  },
  "/assets/credit-card-BQWK-Zj5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-NCGDyGxHO25BeF9XGTFcsvfcAes"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 208,
    "path": "../public/assets/credit-card-BQWK-Zj5.js"
  },
  "/assets/contato-BhRF4Oqu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-LnA3uoUazQD+2Lc75Ayr97TQGn0"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 8068,
    "path": "../public/assets/contato-BhRF4Oqu.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T21:28:54.336Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T21:28:54.339Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/download-DavvsFOY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-I4Mpt3sLPWcdul1DreXBHuYX7y4"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 8305,
    "path": "../public/assets/download-DavvsFOY.js"
  },
  "/assets/dumbbell-BnAua5hY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-S0GEhiaKluDgwSbL71cXD/9AzA4"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BnAua5hY.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/admin-DT2axrj-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f79-HXpetGy2tOuBhQLtUTZX1zLPaTo"',
    "mtime": "2026-08-24T21:28:54.343Z",
    "size": 540537,
    "path": "../public/assets/admin-DT2axrj-.js"
  },
  "/assets/eye-Dfg1nFmf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-1pKxd2OSPLnle4UqPqGVkgPlfS8"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 252,
    "path": "../public/assets/eye-Dfg1nFmf.js"
  },
  "/assets/faq-BcoZyH1p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-uXo0RaxCgmhdpsfTPmkxyphf5Sg"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 8169,
    "path": "../public/assets/faq-BcoZyH1p.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T21:28:54.326Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/heart-DYvyCPzn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-eXIE6Fdg92ewWM/AbZ2F9GU64x0"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 259,
    "path": "../public/assets/heart-DYvyCPzn.js"
  },
  "/assets/home-LCyNxto0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-VZSvDuwcroDC2V471Ch8I2g9iFY"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 11065,
    "path": "../public/assets/home-LCyNxto0.js"
  },
  "/assets/gift-eere2urR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-wr19bPeZbvxBFPs+W/tgB5jzahQ"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 350,
    "path": "../public/assets/gift-eere2urR.js"
  },
  "/assets/levels-C7eYs6Nf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-MdIn2iEgFNbOxXEt5Pk+wUfUkwM"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 6864,
    "path": "../public/assets/levels-C7eYs6Nf.js"
  },
  "/assets/link-2-DI_FgsNC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-7naUpBHM5431uhsRnnFzGzEYzNU"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 243,
    "path": "../public/assets/link-2-DI_FgsNC.js"
  },
  "/assets/lock-CdsR-0rj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-YBo4PEA6wpjqD1hhHY4V7A3SeE0"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 202,
    "path": "../public/assets/lock-CdsR-0rj.js"
  },
  "/assets/log-in-DBPqKT7O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-SVxwm5CMtFZYQ5+7QT6TSUCA8/A"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 232,
    "path": "../public/assets/log-in-DBPqKT7O.js"
  },
  "/assets/mail-DuOcfQOL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-m/AdzU3uC/G4N7ZTKJLbZkl8h9I"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 214,
    "path": "../public/assets/mail-DuOcfQOL.js"
  },
  "/assets/map-pin-CQmqUpkU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-B0cwxOCmIq1N0RWOJ8T286J4PCU"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 255,
    "path": "../public/assets/map-pin-CQmqUpkU.js"
  },
  "/assets/market-SoT2S9uj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-RKeuW68IDU4Cv9+QuPB4TLpcT2M"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 26557,
    "path": "../public/assets/market-SoT2S9uj.js"
  },
  "/assets/index-Cdy9l3Q0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e565-AAnykx6illJqtelc46ElncZhRFE"',
    "mtime": "2026-08-24T21:28:54.339Z",
    "size": 58725,
    "path": "../public/assets/index-Cdy9l3Q0.js"
  },
  "/assets/index-Bfsl2C5b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69af0-h+ZcnAAnimhMh5gJLOPO916512s"',
    "mtime": "2026-08-24T21:28:54.340Z",
    "size": 432880,
    "path": "../public/assets/index-Bfsl2C5b.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T21:28:54.343Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T21:28:58.760Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T21:28:58.756Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/percent-Bw_2LHKc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-7aAPKy6alFtIzBwsymCdw970z2s"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 646,
    "path": "../public/assets/percent-Bw_2LHKc.js"
  },
  "/assets/parceiros-C4sKaHTh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b5-hSFIrMj2Edh3O1D41lnLtkXtDr4"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 25781,
    "path": "../public/assets/parceiros-C4sKaHTh.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-D7hCnKW3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79a8-pf+ByzA2sxrpOd60kPZwRwG+ZzI"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 31144,
    "path": "../public/assets/profile-D7hCnKW3.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T21:28:54.338Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T21:28:54.345Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T21:28:58.764Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/save-Dl4wNQ0I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-pq6qw3cJyA+5EwoU+OlVT3lrzGU"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 410,
    "path": "../public/assets/save-Dl4wNQ0I.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T21:28:54.337Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T21:28:54.344Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-DORjM-SV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-o1E8s1glHLq/FsBn2Ti4e52xn2A"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 170,
    "path": "../public/assets/search-DORjM-SV.js"
  },
  "/assets/shield-check-BNxoxZ6q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-2Pjb27qrj1/lWAI6FoOJr/GnG98"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 316,
    "path": "../public/assets/shield-check-BNxoxZ6q.js"
  },
  "/assets/share-2-DC8sguLl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-IlqGp59rkjgRMyAxdd8TECuvb1Q"',
    "mtime": "2026-08-24T21:28:54.341Z",
    "size": 353,
    "path": "../public/assets/share-2-DC8sguLl.js"
  },
  "/assets/truck-CGzw8OlH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-zdwZGObOdkgUyeI6lYDNYOt+ve0"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 1109,
    "path": "../public/assets/truck-CGzw8OlH.js"
  },
  "/assets/user-plus-2D3DvAwg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-rezaKIBJzFoVFebYJ9TyXZ1xMz8"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 585,
    "path": "../public/assets/user-plus-2D3DvAwg.js"
  },
  "/assets/styles-NwwxXpd_.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24400-CtW6WFUU42wZRz/VUMJn+EAZ1y8"',
    "mtime": "2026-08-24T21:28:54.339Z",
    "size": 148480,
    "path": "../public/assets/styles-NwwxXpd_.css"
  },
  "/assets/users-cRAomz8S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-pEzFYyRuY362QHauT0wUjhdOj7U"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 307,
    "path": "../public/assets/users-cRAomz8S.js"
  },
  "/assets/wallet-UAzdrLbZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-9mKReviUp5nUkwWr8YWrUjW7uQo"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 5844,
    "path": "../public/assets/wallet-UAzdrLbZ.js"
  },
  "/assets/zap-CTsriVYQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-jO2xBFIWHTN3CfraJHEpAO3SK8s"',
    "mtime": "2026-08-24T21:28:54.342Z",
    "size": 263,
    "path": "../public/assets/zap-CTsriVYQ.js"
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
