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
    "mtime": "2026-08-27T16:19:53.012Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-27T16:19:53.011Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-27T16:19:53.011Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-DHj8F-lk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-FeAuRLy6kRyZ3RqLjOyPQmxshNU"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-DHj8F-lk.js"
  },
  "/assets/activities-BvhXVwoW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-o2R4nyxUhCIEAlVhboufhkHmZ2k"',
    "mtime": "2026-08-27T16:19:45.746Z",
    "size": 1196,
    "path": "../public/assets/activities-BvhXVwoW.js"
  },
  "/assets/apple-DEpvvwbS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-+iHilikcEtoATj2/0C8mlOebR3I"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 315,
    "path": "../public/assets/apple-DEpvvwbS.js"
  },
  "/assets/ProductDetailSheet-C7MAUxxa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-AO+0UsSMcvZT+FxqOWy7ynWDUyM"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-C7MAUxxa.js"
  },
  "/assets/arrow-up-right-B4NtvqZi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-SCWAMwhiirEoW0LxRi3x7m6P/SI"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-B4NtvqZi.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/associado-Id-upx-d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-nmYMoZwmuaV2mVPVf/knkant6Mo"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 29722,
    "path": "../public/assets/associado-Id-upx-d.js"
  },
  "/assets/auth-BFc8h48G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-VpjGuH5xvFtwCIH8tgpjfGS0dlQ"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 45736,
    "path": "../public/assets/auth-BFc8h48G.js"
  },
  "/assets/calendar-BVbS31s8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-jYyTd6HTcjs/ir7iwJI4dlbO67c"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 258,
    "path": "../public/assets/calendar-BVbS31s8.js"
  },
  "/assets/circle-x-CoAYzOiY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-+qAgnrLuEeQhnZhtwhoKsyuNmXo"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 405,
    "path": "../public/assets/circle-x-CoAYzOiY.js"
  },
  "/assets/circle-check-Bey9aaMx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-b7Tw3FLISNyd6RWTvARmw2TyBBc"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 174,
    "path": "../public/assets/circle-check-Bey9aaMx.js"
  },
  "/assets/contato-B7mp97yo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f58-6IAD/Se/Jyil1t0rKSt7UE1xWdY"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 8024,
    "path": "../public/assets/contato-B7mp97yo.js"
  },
  "/assets/download-BQw2PKUv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-yPsi63htsGzLbiNR42APZzNRmts"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 8261,
    "path": "../public/assets/download-BQw2PKUv.js"
  },
  "/assets/credit-card-BvGDAZxw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-fUVMMPQKgidEubeE96q7aULI1KY"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 208,
    "path": "../public/assets/credit-card-BvGDAZxw.js"
  },
  "/assets/dumbbell-Dvta4aSh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-8Ip8xwLsRJkZW8BelMMeYVcnPao"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 561,
    "path": "../public/assets/dumbbell-Dvta4aSh.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-27T16:19:45.738Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-27T16:19:45.737Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-27T16:19:45.738Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-CI252ow8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"88214-LcCiqLBn4kNwKW4n7+18yotcWII"',
    "mtime": "2026-08-27T16:19:45.748Z",
    "size": 557588,
    "path": "../public/assets/admin-CI252ow8.js"
  },
  "/assets/eye-TJN9WWoo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-MbFU9yFrUWcEY8WQVC8mJwqn6PQ"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 252,
    "path": "../public/assets/eye-TJN9WWoo.js"
  },
  "/assets/faq-CJ95nMvP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"75d0-utuVc3Gms/kgopyazOkTKPQ18Ns"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 30160,
    "path": "../public/assets/faq-CJ95nMvP.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/file-text-vVAUWk7-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-3WsfQPU/P2hUnmVQ7/YhmBCNh+I"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 386,
    "path": "../public/assets/file-text-vVAUWk7-.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-27T16:19:45.737Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-JwjKjH88.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-bNM7V5/WZ7qpdaAXTPHDihOlxq4"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 350,
    "path": "../public/assets/gift-JwjKjH88.js"
  },
  "/assets/home-DNSwtLFB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-TX7qWJD5LHo8CZtpBHiEf7GsQgE"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 11044,
    "path": "../public/assets/home-DNSwtLFB.js"
  },
  "/assets/index-C9ToGQPK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-dT31D8QOWEbVEp5cHhDyfVkLmho"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 61206,
    "path": "../public/assets/index-C9ToGQPK.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/levels-DnmbDfOS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-Xmk/OghZVKkm6NBQFwYJeS63LA4"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 6869,
    "path": "../public/assets/levels-DnmbDfOS.js"
  },
  "/assets/link-2-BqqZ9iPT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-iYio6JGdAjHORiD5nf+LngHa1MA"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 243,
    "path": "../public/assets/link-2-BqqZ9iPT.js"
  },
  "/assets/lock-BQpgycGX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-+AqvdA9/3xBN5Z1Tza71QJijemY"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 202,
    "path": "../public/assets/lock-BQpgycGX.js"
  },
  "/assets/log-in-HDcf82iX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-ULcheHsPIgyiOO/IERX+eMvlMFE"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 232,
    "path": "../public/assets/log-in-HDcf82iX.js"
  },
  "/assets/mail-haKTRf8o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-d941HYVaN2sc1LrqRuWTJlTJ8qw"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 214,
    "path": "../public/assets/mail-haKTRf8o.js"
  },
  "/assets/map-pin-DuLyWlzK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-JXLuHBAChuelTIzBWID9HiH7ycY"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 255,
    "path": "../public/assets/map-pin-DuLyWlzK.js"
  },
  "/assets/market-DOXILGpy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-EFMb7aNc9MEnuvlAk4mLkAGkUWE"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 26473,
    "path": "../public/assets/market-DOXILGpy.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-27T16:19:45.738Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-DzW_ANxO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c59d-21IgXKrdiTZwJlNbfquBhyXcx7A"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 443805,
    "path": "../public/assets/index-DzW_ANxO.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-27T16:19:53.019Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-27T16:19:45.747Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-08-27T16:19:53.025Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-27T16:19:53.019Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/percent-DPUponZF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-9rKxPXmkIhVxVDcTKGRn+kPIjrM"',
    "mtime": "2026-08-27T16:19:45.741Z",
    "size": 646,
    "path": "../public/assets/percent-DPUponZF.js"
  },
  "/assets/parceiros-CDEEmdz_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-CysipL/Jekb0Ka2VYpphW4J07wM"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 29316,
    "path": "../public/assets/parceiros-CDEEmdz_.js"
  },
  "/assets/phone-DBGcVU4F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-r+OUKW29NKGwPyAyD7/DpgRx89E"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 323,
    "path": "../public/assets/phone-DBGcVU4F.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-27T16:19:45.738Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-27T16:19:45.740Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-27T16:19:45.737Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-27T16:19:45.737Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-27T16:19:45.737Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-27T16:19:45.739Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-27T16:19:45.738Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-27T16:19:45.738Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/profile-Bw6LVIHK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79a1-2QvaQQceOSczZ8V8O6h1vgK6D2o"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 31137,
    "path": "../public/assets/profile-Bw6LVIHK.js"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-27T16:19:45.737Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-27T16:19:45.737Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-27T16:19:45.749Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-27T16:19:45.737Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-27T16:19:45.749Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-27T16:19:45.735Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-27T16:19:53.024Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/save-CLhOF-K3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-Jw5Paq7lVAgi32GooFndSp41uEc"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 410,
    "path": "../public/assets/save-CLhOF-K3.js"
  },
  "/assets/search-mpUDgSew.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-1T7zFqQBXhTRBwNaz2hQN17FDOg"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 170,
    "path": "../public/assets/search-mpUDgSew.js"
  },
  "/assets/shield-check-CXL8F_cp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-xaMFAjAgouxBn0EQXUdWs/zFrvo"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 316,
    "path": "../public/assets/shield-check-CXL8F_cp.js"
  },
  "/assets/truck-CpfTnly3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-NF/+k2gq0tcj87oF7fXE5Lg6Dnk"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 1109,
    "path": "../public/assets/truck-CpfTnly3.js"
  },
  "/assets/user-plus-Co7DBtqb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-SUM2djDPwpR36axlE48RiHvQCTo"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 311,
    "path": "../public/assets/user-plus-Co7DBtqb.js"
  },
  "/assets/styles-X--fBSaZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2745d-X2VY11fGoaBI3fQcyRowfjoib2w"',
    "mtime": "2026-08-27T16:19:45.740Z",
    "size": 160861,
    "path": "../public/assets/styles-X--fBSaZ.css"
  },
  "/assets/users-z0SN2xTO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-qJ336rwtKQg3XADR2a6hal9uVDI"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 307,
    "path": "../public/assets/users-z0SN2xTO.js"
  },
  "/assets/wallet-CAZEDoEf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-8BSiWu3c+QW2+rkasdqxUTUgM2o"',
    "mtime": "2026-08-27T16:19:45.742Z",
    "size": 4687,
    "path": "../public/assets/wallet-CAZEDoEf.js"
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
