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
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T21:26:16.667Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-24T21:26:16.667Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/InstitutionalWebHeader-kbLDGMdY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-8h7vosjjp1CGGfKegrf0JSjZb/Q"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-kbLDGMdY.js"
  },
  "/assets/ProductDetailSheet-4B10hrLh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-OuDU8Dez8rbFmRKsGinibSW1VOc"',
    "mtime": "2026-08-24T21:26:11.804Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-4B10hrLh.js"
  },
  "/assets/activities-BPnNuuYJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-CbGNRxl+XjseLrjW3dwNJ+Zt5WA"',
    "mtime": "2026-08-24T21:26:11.803Z",
    "size": 1196,
    "path": "../public/assets/activities-BPnNuuYJ.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T21:26:11.799Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T21:26:11.799Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/arrow-up-right-Bhil7PoM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-KTogPn00VyURhIdtOJYyx5ikWlc"',
    "mtime": "2026-08-24T21:26:11.807Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Bhil7PoM.js"
  },
  "/assets/apple-CMFn36ZD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-C2pQXZs9vWhrgayNHxJzNk+8Glk"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 315,
    "path": "../public/assets/apple-CMFn36ZD.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T21:26:11.802Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-ByCnCAD6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"742d-YkHnSVVBOgQZyIDBVBCXdg7kro0"',
    "mtime": "2026-08-24T21:26:11.803Z",
    "size": 29741,
    "path": "../public/assets/associado-ByCnCAD6.js"
  },
  "/assets/auth-BCNvbewF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b6ae-5VRfWOrMPbmO+SloS+IRNRveFfQ"',
    "mtime": "2026-08-24T21:26:11.803Z",
    "size": 46766,
    "path": "../public/assets/auth-BCNvbewF.js"
  },
  "/assets/calendar-BqFqgKTf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-8Dd9jlgQhwTbwiJP693/qdJbGII"',
    "mtime": "2026-08-24T21:26:11.806Z",
    "size": 258,
    "path": "../public/assets/calendar-BqFqgKTf.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T21:26:11.799Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/building-2-C-CJ9yci.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-24vAS24dSWAA0GwAcpaYh70BWQg"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 384,
    "path": "../public/assets/building-2-C-CJ9yci.js"
  },
  "/assets/check-Dohqnu69.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-HhoLC3swyEsFKrhWw/HWKr7W3to"',
    "mtime": "2026-08-24T21:26:11.806Z",
    "size": 120,
    "path": "../public/assets/check-Dohqnu69.js"
  },
  "/assets/circle-check-B-Ukz74i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-3LMp8XTzuKmmzyePgWxvKc2tLfs"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 174,
    "path": "../public/assets/circle-check-B-Ukz74i.js"
  },
  "/assets/circle-x-Cs05IjwA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-0GEVVEShsvru9l6c9Ik0lMJtQAo"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 405,
    "path": "../public/assets/circle-x-Cs05IjwA.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T21:26:11.798Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-DHVjaCNc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-4DyvjilmvyR3ESFlyfHBEalcoqk"',
    "mtime": "2026-08-24T21:26:11.804Z",
    "size": 8068,
    "path": "../public/assets/contato-DHVjaCNc.js"
  },
  "/assets/credit-card-BHSNbj05.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-ylUcLO8vp1i0ayGjD5ufrJdMZ1c"',
    "mtime": "2026-08-24T21:26:11.807Z",
    "size": 208,
    "path": "../public/assets/credit-card-BHSNbj05.js"
  },
  "/assets/download-ClIaazPC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-EF+5hXNbHhITHU54yeuAed4hH3I"',
    "mtime": "2026-08-24T21:26:11.804Z",
    "size": 8305,
    "path": "../public/assets/download-ClIaazPC.js"
  },
  "/assets/dumbbell-CelZKY4D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-rSTEwaH4C+T+KQzvl6URe1E2mn8"',
    "mtime": "2026-08-24T21:26:11.807Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CelZKY4D.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T21:26:11.802Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-jkbIbY4P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f79-MZWwKxPgPJwBvUH9FBas4SzfJc4"',
    "mtime": "2026-08-24T21:26:11.811Z",
    "size": 540537,
    "path": "../public/assets/admin-jkbIbY4P.js"
  },
  "/assets/eye-DA5kgQPk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-stIkA3fEnkf29eNCPGgIfK6oMdQ"',
    "mtime": "2026-08-24T21:26:11.803Z",
    "size": 252,
    "path": "../public/assets/eye-DA5kgQPk.js"
  },
  "/assets/faq-BF7gDx88.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-DIQImVHYb6h8TKL43zLEIC3uSeo"',
    "mtime": "2026-08-24T21:26:11.804Z",
    "size": 8169,
    "path": "../public/assets/faq-BF7gDx88.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T21:26:11.798Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T21:26:11.798Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T21:26:11.800Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-Ak_-Wygz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-2ssgfG04PA1ZAuEG42t44uKGwO8"',
    "mtime": "2026-08-24T21:26:11.803Z",
    "size": 350,
    "path": "../public/assets/gift-Ak_-Wygz.js"
  },
  "/assets/home-YOwHdubU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-dEmsmCFF0Zj3+LQGiUERc9GkPpc"',
    "mtime": "2026-08-24T21:26:11.804Z",
    "size": 11065,
    "path": "../public/assets/home-YOwHdubU.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T21:26:11.801Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T21:26:11.798Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/heart-D1oGfIhF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-LhyB+/tvEKB4RwePr3ydphyArE8"',
    "mtime": "2026-08-24T21:26:11.806Z",
    "size": 259,
    "path": "../public/assets/heart-D1oGfIhF.js"
  },
  "/assets/index-DAf21Tmu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e565-IKiiXIDPkqQKeVNhQdJiUeppaVA"',
    "mtime": "2026-08-24T21:26:11.802Z",
    "size": 58725,
    "path": "../public/assets/index-DAf21Tmu.js"
  },
  "/assets/levels-D6JWF4-u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad0-0rmYaqmGBrXBjeAX9J8GC75B5ns"',
    "mtime": "2026-08-24T21:26:11.804Z",
    "size": 6864,
    "path": "../public/assets/levels-D6JWF4-u.js"
  },
  "/assets/link-2-8iHw-R7Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-U1Nl3v0VhuqUVgdLYcyo0+NOs1U"',
    "mtime": "2026-08-24T21:26:11.806Z",
    "size": 243,
    "path": "../public/assets/link-2-8iHw-R7Y.js"
  },
  "/assets/lock-DGlYkSzy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-wnrziTrzTG+clOHVIxLjf/eeLM4"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 202,
    "path": "../public/assets/lock-DGlYkSzy.js"
  },
  "/assets/mail-l_FUoTMi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-/ML/NLcBAOLE41rfqi5KjNuSVRo"',
    "mtime": "2026-08-24T21:26:11.807Z",
    "size": 214,
    "path": "../public/assets/mail-l_FUoTMi.js"
  },
  "/assets/map-pin-Cvbmcwd8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-8BPdhHyv9QbymVdXHmYdDGUQrzc"',
    "mtime": "2026-08-24T21:26:11.807Z",
    "size": 255,
    "path": "../public/assets/map-pin-Cvbmcwd8.js"
  },
  "/assets/log-in-B0xzCvBA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-U7rXqliv/eahhZZUzWM78u7lhg8"',
    "mtime": "2026-08-24T21:26:11.806Z",
    "size": 232,
    "path": "../public/assets/log-in-B0xzCvBA.js"
  },
  "/assets/market-CRGFAOYw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-vHGhqaCzpK8Ij2CVQjFOyH4cO8A"',
    "mtime": "2026-08-24T21:26:11.804Z",
    "size": 26557,
    "path": "../public/assets/market-CRGFAOYw.js"
  },
  "/assets/index-GUNYBKPA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69718-wNXaWqoOUpj5ktHV2dSanr1efMs"',
    "mtime": "2026-08-24T21:26:11.802Z",
    "size": 431896,
    "path": "../public/assets/index-GUNYBKPA.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T21:26:11.809Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T21:26:16.672Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T21:26:16.674Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T21:26:11.809Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BprkLiWo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b5-NSA4PvPOORRevOImNABjNRKsFkM"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 25781,
    "path": "../public/assets/parceiros-BprkLiWo.js"
  },
  "/assets/percent-DuxOKobN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-bZSN9cixCyedQTUeSvdx6M2h5Go"',
    "mtime": "2026-08-24T21:26:11.803Z",
    "size": 646,
    "path": "../public/assets/percent-DuxOKobN.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T21:26:11.801Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T21:26:11.800Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T21:26:11.801Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T21:26:11.798Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T21:26:11.800Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T21:26:11.800Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T21:26:11.801Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T21:26:11.801Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T21:26:11.801Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T21:26:11.799Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T21:26:11.798Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T21:26:11.801Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T21:26:11.801Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-CzddqEEC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79a8-4tfBQh48QQANIZA5qub1+lwNoqc"',
    "mtime": "2026-08-24T21:26:11.806Z",
    "size": 31144,
    "path": "../public/assets/profile-CzddqEEC.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T21:26:11.799Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T21:26:11.800Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T21:26:11.827Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T21:26:11.799Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T21:26:11.799Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-C2REqGah.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-h+mtCOpoNl2TjOGgzX6SapIWaLU"',
    "mtime": "2026-08-24T21:26:11.806Z",
    "size": 410,
    "path": "../public/assets/save-C2REqGah.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T21:26:16.678Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T21:26:11.827Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-_SdTh9fN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-9bRCyH+5VrrB9cOzWSYm8Nk+Mpk"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 170,
    "path": "../public/assets/search-_SdTh9fN.js"
  },
  "/assets/share-2-3l1Cz8NA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-GSiUONQPUnQRVO8dh56hEE48Bhg"',
    "mtime": "2026-08-24T21:26:11.803Z",
    "size": 353,
    "path": "../public/assets/share-2-3l1Cz8NA.js"
  },
  "/assets/shield-check-DF4rcPc5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-Lc+3MaarvG5imiYe4Yk/XfZt6/I"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 316,
    "path": "../public/assets/shield-check-DF4rcPc5.js"
  },
  "/assets/truck-C8hGnn1o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-HO6jgUunOqv0Vu8vlgDCFkUUxJ8"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 1109,
    "path": "../public/assets/truck-C8hGnn1o.js"
  },
  "/assets/styles-NwwxXpd_.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24400-CtW6WFUU42wZRz/VUMJn+EAZ1y8"',
    "mtime": "2026-08-24T21:26:11.802Z",
    "size": 148480,
    "path": "../public/assets/styles-NwwxXpd_.css"
  },
  "/assets/user-plus-BS_xb9k3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-WEEqPt1/DLWK7k23oOCn8/tiNWM"',
    "mtime": "2026-08-24T21:26:11.806Z",
    "size": 585,
    "path": "../public/assets/user-plus-BS_xb9k3.js"
  },
  "/assets/users-NJUcbxqx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-SX+etxkPSezwt/mrha35h4+M/Hc"',
    "mtime": "2026-08-24T21:26:11.807Z",
    "size": 307,
    "path": "../public/assets/users-NJUcbxqx.js"
  },
  "/assets/zap-CYd1ACtx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-TFORJXboC8bi0pAwucFfkqjMc8M"',
    "mtime": "2026-08-24T21:26:11.805Z",
    "size": 263,
    "path": "../public/assets/zap-CYd1ACtx.js"
  },
  "/assets/wallet-Ik7hEqF_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-sRFAvSZ2P2BNdjHRhEQVLD715YE"',
    "mtime": "2026-08-24T21:26:11.807Z",
    "size": 5844,
    "path": "../public/assets/wallet-Ik7hEqF_.js"
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
