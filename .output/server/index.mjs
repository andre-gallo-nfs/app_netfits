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
    "mtime": "2026-08-24T20:00:42.403Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T20:00:42.404Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-C7IV-E5W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-f2YC0dlH3sdmuEU1Te0m21f6GrY"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-C7IV-E5W.js"
  },
  "/assets/ProductDetailSheet-B4hlnanZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-tepEv0hDyqnSEwB1QqyINrThr3U"',
    "mtime": "2026-08-24T20:00:37.262Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-B4hlnanZ.js"
  },
  "/assets/activities-B4cPeJ2d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-gdheRGcGlJFhPp8bDy704GL6fHs"',
    "mtime": "2026-08-24T20:00:37.258Z",
    "size": 1196,
    "path": "../public/assets/activities-B4cPeJ2d.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T20:00:37.251Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-Cqau1MYC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-btFRN2IFzQr96BnmwGzmfvzJw4o"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 315,
    "path": "../public/assets/apple-Cqau1MYC.js"
  },
  "/assets/arrow-up-right-bMhDb2PH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-1RDOqY6NgUeWw77m74shK0Es4rQ"',
    "mtime": "2026-08-24T20:00:37.268Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-bMhDb2PH.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T20:00:37.250Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-C20LCQ9y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7461-lqVvTU3lpsNqmTM3hQGlSHzgpMI"',
    "mtime": "2026-08-24T20:00:37.259Z",
    "size": 29793,
    "path": "../public/assets/associado-C20LCQ9y.js"
  },
  "/assets/auth-Dfp_4XF_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a155-AWici5/NhAms6yGqvK7QvPZ0isY"',
    "mtime": "2026-08-24T20:00:37.259Z",
    "size": 41301,
    "path": "../public/assets/auth-Dfp_4XF_.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T20:00:37.255Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/building-2-CnGemOdr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-ZOg1l8b/sElSTVyehJniDEEduO0"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 384,
    "path": "../public/assets/building-2-CnGemOdr.js"
  },
  "/assets/check-DYGwDIu0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-qcrpsYP1y4Y8J8P3X+e5/zHYWkQ"',
    "mtime": "2026-08-24T20:00:37.266Z",
    "size": 120,
    "path": "../public/assets/check-DYGwDIu0.js"
  },
  "/assets/circle-check-BiF2HoO8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-BDjjwge+/hptbdlZ4enz91tWGBw"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 174,
    "path": "../public/assets/circle-check-BiF2HoO8.js"
  },
  "/assets/circle-x-jHlGccSl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-5s6OXoxmQdIrg0modpxNmBzYvu0"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 405,
    "path": "../public/assets/circle-x-jHlGccSl.js"
  },
  "/assets/contato-BGx_3QzB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-NwmLCxZcJTqZ+TpdFeWmoafJ8cI"',
    "mtime": "2026-08-24T20:00:37.259Z",
    "size": 8068,
    "path": "../public/assets/contato-BGx_3QzB.js"
  },
  "/assets/credit-card-CWfVw_I_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-i65HZr+1iTcXKe6++fT/Quirz8I"',
    "mtime": "2026-08-24T20:00:37.268Z",
    "size": 208,
    "path": "../public/assets/credit-card-CWfVw_I_.js"
  },
  "/assets/download-CeOk8aSt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-83kvaeGyicS63Xyzp85/MUfMg2Q"',
    "mtime": "2026-08-24T20:00:37.260Z",
    "size": 8305,
    "path": "../public/assets/download-CeOk8aSt.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-BlGBq8wC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-N3pizQLi6BJKNoVS77+LycvRV78"',
    "mtime": "2026-08-24T20:00:37.267Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BlGBq8wC.js"
  },
  "/assets/eye-yz6WRlIS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-q5atNJ5OGBpW+FM4rWlk8OLaIvk"',
    "mtime": "2026-08-24T20:00:37.259Z",
    "size": 252,
    "path": "../public/assets/eye-yz6WRlIS.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T20:00:37.253Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-DuLJ3oyU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f1f-1v5ktoD3HlfvIR5HGNYeSOz9Znc"',
    "mtime": "2026-08-24T20:00:37.272Z",
    "size": 540447,
    "path": "../public/assets/admin-DuLJ3oyU.js"
  },
  "/assets/faq-L8k_6yzV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-i8A+ymrZ24A+whavH8XQpDAnwV8"',
    "mtime": "2026-08-24T20:00:37.262Z",
    "size": 8169,
    "path": "../public/assets/faq-L8k_6yzV.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T20:00:37.262Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T20:00:37.248Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gift-_svZI0B_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-0b8ZZl6oazkGPav4xZB9rOvY55A"',
    "mtime": "2026-08-24T20:00:37.260Z",
    "size": 350,
    "path": "../public/assets/gift-_svZI0B_.js"
  },
  "/assets/heart-DfPHCv_E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-V5NScKti4eNFoe6H/SKBamTOM+w"',
    "mtime": "2026-08-24T20:00:37.266Z",
    "size": 259,
    "path": "../public/assets/heart-DfPHCv_E.js"
  },
  "/assets/home-CPf2ONpS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-KlN5qUs9VWb2x2jlB0PV1cHVlyo"',
    "mtime": "2026-08-24T20:00:37.261Z",
    "size": 11065,
    "path": "../public/assets/home-CPf2ONpS.js"
  },
  "/assets/index-CS5CI1G2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4f8-qmUa43CUl05X+ETaOayg6WROcTI"',
    "mtime": "2026-08-24T20:00:37.258Z",
    "size": 58616,
    "path": "../public/assets/index-CS5CI1G2.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/levels-Betq-hy7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-+CkEiW5M7mHTkvnZDBiZpJpDpnI"',
    "mtime": "2026-08-24T20:00:37.261Z",
    "size": 6869,
    "path": "../public/assets/levels-Betq-hy7.js"
  },
  "/assets/link-2-DiaQu8xH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-AEoP46b/Sf6ZppkrxQK02iQCcaY"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 243,
    "path": "../public/assets/link-2-DiaQu8xH.js"
  },
  "/assets/lock-Cdq4yBnv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-K8FzU3eg4dH4YiOCUlVnyMjxKnQ"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 202,
    "path": "../public/assets/lock-Cdq4yBnv.js"
  },
  "/assets/log-in-BxpT87HO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-JHdTmUGA3fhRlOFjUobLcLZB3SE"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 232,
    "path": "../public/assets/log-in-BxpT87HO.js"
  },
  "/assets/mail-CR7rk4g3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-QEeLPaRtu84iso5GNQvDCMFerKM"',
    "mtime": "2026-08-24T20:00:37.267Z",
    "size": 214,
    "path": "../public/assets/mail-CR7rk4g3.js"
  },
  "/assets/map-pin-DTgjvu5x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-RH//7hZFa7K0RLU+o48soVAmCSY"',
    "mtime": "2026-08-24T20:00:37.267Z",
    "size": 255,
    "path": "../public/assets/map-pin-DTgjvu5x.js"
  },
  "/assets/market-CvU0bCOU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-P8R/uPFlRk9HpkFuIPHJPDL/8sg"',
    "mtime": "2026-08-24T20:00:37.261Z",
    "size": 26557,
    "path": "../public/assets/market-CvU0bCOU.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-DMTR7Nea.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68b20-I5lhjxY9R0HhjQUOlevzg3ko/vA"',
    "mtime": "2026-08-24T20:00:37.258Z",
    "size": 428832,
    "path": "../public/assets/index-DMTR7Nea.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T20:00:37.268Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:00:42.425Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:00:37.271Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T20:00:42.422Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/operational-params-store-BnnQMVco.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-wLGtCkmnxnoU23hQ2pO7MT7BN4Y"',
    "mtime": "2026-08-24T20:00:37.268Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-BnnQMVco.js"
  },
  "/assets/parceiros-Do9nmp-r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-fYUpTCTy3ABhOFIywZA9Mk/xi2Q"',
    "mtime": "2026-08-24T20:00:37.262Z",
    "size": 25692,
    "path": "../public/assets/parceiros-Do9nmp-r.js"
  },
  "/assets/percent-BK6cUPir.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-h+i8Rti+tnnH1gh/BQ5pRCbDAxc"',
    "mtime": "2026-08-24T20:00:37.259Z",
    "size": 646,
    "path": "../public/assets/percent-BK6cUPir.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T20:00:37.257Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T20:00:37.253Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-JlTCXe-B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6031-mvHg3z1sYBirTYca4AIH3hLYWFg"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 24625,
    "path": "../public/assets/profile-JlTCXe-B.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T20:00:37.252Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:00:37.282Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-24T20:00:37.225Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:00:42.431Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T20:00:37.251Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T20:00:37.250Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T20:00:37.249Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T20:00:37.278Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/save-Cu8dOiP2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-R+rsvfq20MUun4NQpcsrvFH5NW0"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 410,
    "path": "../public/assets/save-Cu8dOiP2.js"
  },
  "/assets/search-BotBe0lM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-/KTkcuGvjRzv3IAzpAyTTPxZh8w"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 170,
    "path": "../public/assets/search-BotBe0lM.js"
  },
  "/assets/share-2-BwW7YGld.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-O6lMc6w7roiRbpRXnz4x5z5XdwM"',
    "mtime": "2026-08-24T20:00:37.259Z",
    "size": 353,
    "path": "../public/assets/share-2-BwW7YGld.js"
  },
  "/assets/styles-DpvN1TAk.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23fe9-9AyN0RaDL4jP3Z/P8GlhEoWt6sk"',
    "mtime": "2026-08-24T20:00:37.257Z",
    "size": 147433,
    "path": "../public/assets/styles-DpvN1TAk.css"
  },
  "/assets/shield-check-DFHdEOjo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-daGhqD/N7Xyq/Iny3Rgren/pMx4"',
    "mtime": "2026-08-24T20:00:37.265Z",
    "size": 316,
    "path": "../public/assets/shield-check-DFHdEOjo.js"
  },
  "/assets/truck-CtxqvQfM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-0WnQio/kZdAVpLUcm8TLTmP4O3U"',
    "mtime": "2026-08-24T20:00:37.262Z",
    "size": 1109,
    "path": "../public/assets/truck-CtxqvQfM.js"
  },
  "/assets/wallet-D0veLGsg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1708-T/8PFPLOOFOiviGz911FcyhvNMk"',
    "mtime": "2026-08-24T20:00:37.267Z",
    "size": 5896,
    "path": "../public/assets/wallet-D0veLGsg.js"
  },
  "/assets/users-CZnOPHiH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-BYx9/3X4F47KADIbUSNnvnEn0hs"',
    "mtime": "2026-08-24T20:00:37.267Z",
    "size": 307,
    "path": "../public/assets/users-CZnOPHiH.js"
  },
  "/assets/zap-CVY00MT_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-FxlZzco5eqoTvaMKCmHPmWHEDrk"',
    "mtime": "2026-08-24T20:00:37.262Z",
    "size": 263,
    "path": "../public/assets/zap-CVY00MT_.js"
  },
  "/assets/user-plus-BjUD-FlN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-yP8j0uZzc820/ghzJ/3zlp4h9vk"',
    "mtime": "2026-08-24T20:00:37.266Z",
    "size": 585,
    "path": "../public/assets/user-plus-BjUD-FlN.js"
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
