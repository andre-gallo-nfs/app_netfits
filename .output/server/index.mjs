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
    "mtime": "2026-08-24T20:06:41.909Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T20:06:41.909Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-CFiwf1k-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-VpBLvvBy2fKJUdp5l6klz0beJ+U"',
    "mtime": "2026-08-24T20:06:36.131Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-CFiwf1k-.js"
  },
  "/assets/activities-Bj0sQ8Qe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-syot37dAcJ05BF7iy12MSqvgbEc"',
    "mtime": "2026-08-24T20:06:36.118Z",
    "size": 1196,
    "path": "../public/assets/activities-Bj0sQ8Qe.js"
  },
  "/assets/InstitutionalWebHeader-BjNGN4nR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-9zhK9ccDlTAdXqyYFYQQ+SSjQrc"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-BjNGN4nR.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apple-TbLG-2k2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-yELXf9n5MGdL+5uiEwflSVaxA6I"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 315,
    "path": "../public/assets/apple-TbLG-2k2.js"
  },
  "/assets/arrow-up-right-DHr-2vNw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-xjKCfZr9xTiN7No63vMVrnpz2TA"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-DHr-2vNw.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-oLVFiLMQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7461-G8HXt8/8Moo7aHpfCoaXFG2QMQY"',
    "mtime": "2026-08-24T20:06:36.121Z",
    "size": 29793,
    "path": "../public/assets/associado-oLVFiLMQ.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T20:06:36.116Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/auth-Dq4AHPg4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a182-Rjr/pQN7vRIe8NCJws3iKXrLGPo"',
    "mtime": "2026-08-24T20:06:36.121Z",
    "size": 41346,
    "path": "../public/assets/auth-Dq4AHPg4.js"
  },
  "/assets/building-2-CuBsEFDj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-sFRwpJNh6ShSDGrpi4CFaTV0DB4"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 384,
    "path": "../public/assets/building-2-CuBsEFDj.js"
  },
  "/assets/check-wRRxTmeY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-Wd7wP2MSfKufcyE81QQCUqKxTok"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 120,
    "path": "../public/assets/check-wRRxTmeY.js"
  },
  "/assets/circle-check-B4d9ZU-Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-hCS2dmZI8WUJLkwslETTICtZoKs"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 174,
    "path": "../public/assets/circle-check-B4d9ZU-Z.js"
  },
  "/assets/circle-x-BfonApkM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-cju168BxiAikrJP+7jNfY0WLM24"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 405,
    "path": "../public/assets/circle-x-BfonApkM.js"
  },
  "/assets/contato-Br0zK5D5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-fhvPg7jukB5Oa36nZJSYcotD3pc"',
    "mtime": "2026-08-24T20:06:36.122Z",
    "size": 8068,
    "path": "../public/assets/contato-Br0zK5D5.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-DueKVAdw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-8NIP23ohDJz4BoqRmqs9RFtKd90"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 208,
    "path": "../public/assets/credit-card-DueKVAdw.js"
  },
  "/assets/download-CYdTJPEu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-kyii1/9jg1CAkiGdeNPYN4lRW6E"',
    "mtime": "2026-08-24T20:06:36.122Z",
    "size": 8305,
    "path": "../public/assets/download-CYdTJPEu.js"
  },
  "/assets/dumbbell-Df6Hxwt9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-8f26AXoO1s+LUEofzyG+4JJDkAQ"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 561,
    "path": "../public/assets/dumbbell-Df6Hxwt9.js"
  },
  "/assets/eye-BFlZMx8e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-vkLkdli+Nv1zQcCBR35M6cGCLH0"',
    "mtime": "2026-08-24T20:06:36.122Z",
    "size": 252,
    "path": "../public/assets/eye-BFlZMx8e.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T20:06:36.118Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-DZXyg288.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f1f-ML8sduQZ3x3PypEnkdp3OIIqMAc"',
    "mtime": "2026-08-24T20:06:36.139Z",
    "size": 540447,
    "path": "../public/assets/admin-DZXyg288.js"
  },
  "/assets/faq-gysx-8fo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-HYJlrokpODpYT+77UajD3sdI2UE"',
    "mtime": "2026-08-24T20:06:36.122Z",
    "size": 8169,
    "path": "../public/assets/faq-gysx-8fo.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-CRA1RDB_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-t0c0AuFa6zEPoMEtQsdF9qKdtQM"',
    "mtime": "2026-08-24T20:06:36.121Z",
    "size": 350,
    "path": "../public/assets/gift-CRA1RDB_.js"
  },
  "/assets/heart-tbAJ19J-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-hycFyqAwK4Fup+So3U5LSjhT2cY"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 259,
    "path": "../public/assets/heart-tbAJ19J-.js"
  },
  "/assets/home-BDsCwhVw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-6sf1CQJn7+M5N8uGzaswnQujyl8"',
    "mtime": "2026-08-24T20:06:36.125Z",
    "size": 11065,
    "path": "../public/assets/home-BDsCwhVw.js"
  },
  "/assets/index-CNhBIfPb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4f8-bb/Ze8HKfqyifo0HedAjPaDQOdA"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 58616,
    "path": "../public/assets/index-CNhBIfPb.js"
  },
  "/assets/levels-BeX8onlK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-MP2PlXc4wYaWWfKPcxdG+ykl3cs"',
    "mtime": "2026-08-24T20:06:36.125Z",
    "size": 6869,
    "path": "../public/assets/levels-BeX8onlK.js"
  },
  "/assets/link-2-CNlqsJ0E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-VnVFIrALnKhARqV8WCgefF0qoyg"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 243,
    "path": "../public/assets/link-2-CNlqsJ0E.js"
  },
  "/assets/lock-DMhqBc86.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-QSpjcDBRMcxuj1Gd2sg7nqXqqe4"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 202,
    "path": "../public/assets/lock-DMhqBc86.js"
  },
  "/assets/index-hot0zMWg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68c28-TZFb0cTEtyf8ioMu8wHQH256GPk"',
    "mtime": "2026-08-24T20:06:36.118Z",
    "size": 429096,
    "path": "../public/assets/index-hot0zMWg.js"
  },
  "/assets/log-in-BVhHrFEL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-GUQXFC1aT5cbcv1mZKNprP9g87w"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 232,
    "path": "../public/assets/log-in-BVhHrFEL.js"
  },
  "/assets/mail-Bom241ey.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-8ytxJTbdm2m/if5WyvmNFbevLuM"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 214,
    "path": "../public/assets/mail-Bom241ey.js"
  },
  "/assets/map-pin-BPVgdxFY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-hcvXhiuMHZnbZ1aa1DR14yITjrw"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 255,
    "path": "../public/assets/map-pin-BPVgdxFY.js"
  },
  "/assets/market-CWJ4KVub.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-+o9qlyh2DvKq790ipVSu57oeF94"',
    "mtime": "2026-08-24T20:06:36.131Z",
    "size": 26557,
    "path": "../public/assets/market-CWJ4KVub.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:06:36.138Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:06:41.917Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T20:06:41.917Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/operational-params-store-KHEFKa5P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-Rl5qbgDJeEUJw0+4eRdxPBdJAzI"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-KHEFKa5P.js"
  },
  "/assets/parceiros-CtGq0wMu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-RADUyu2Ve5ej69o2pLNhdxXV+mI"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 25692,
    "path": "../public/assets/parceiros-CtGq0wMu.js"
  },
  "/assets/percent-ZZqPW3Xj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-9aRBbjX4jkAleXzLqdpOWyLfRas"',
    "mtime": "2026-08-24T20:06:36.121Z",
    "size": 646,
    "path": "../public/assets/percent-ZZqPW3Xj.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T20:06:36.116Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-B4s_oqrt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6031-aqLoZp0x5M/VuhI1OYyRgTmnbRs"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 24625,
    "path": "../public/assets/profile-B4s_oqrt.js"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:06:41.919Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:06:36.140Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T20:06:36.115Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T20:06:36.114Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T20:06:36.140Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/save-C6vBv4tf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-l4owdKZsb42U1xto5lUM27T9BSk"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 410,
    "path": "../public/assets/save-C6vBv4tf.js"
  },
  "/assets/search-WZNU4sev.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-ncaiDloqnbz1qFhGC33opCFOz6c"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 170,
    "path": "../public/assets/search-WZNU4sev.js"
  },
  "/assets/share-2-B99KaRNo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-bIau2X63hw1uVR97Rq+2gvldMx0"',
    "mtime": "2026-08-24T20:06:36.122Z",
    "size": 353,
    "path": "../public/assets/share-2-B99KaRNo.js"
  },
  "/assets/shield-check-Dmz7EcpK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-yT3aFJbEs6EhQyVQdMB3X4pPQl8"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 316,
    "path": "../public/assets/shield-check-Dmz7EcpK.js"
  },
  "/assets/styles-DpvN1TAk.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"23fe9-9AyN0RaDL4jP3Z/P8GlhEoWt6sk"',
    "mtime": "2026-08-24T20:06:36.118Z",
    "size": 147433,
    "path": "../public/assets/styles-DpvN1TAk.css"
  },
  "/assets/truck-CMwhWD2x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-Iu7GbXvSo7E5hCBJyGRoHiCt1+E"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 1109,
    "path": "../public/assets/truck-CMwhWD2x.js"
  },
  "/assets/user-plus-BHNxUiSV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-5jEcrgTLiz63W50E7bZ3rMEy2Hc"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 585,
    "path": "../public/assets/user-plus-BHNxUiSV.js"
  },
  "/assets/users-CTDaTSIA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-Bg1lWk5v4s6LBjWjfKZUxIuQ09c"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 307,
    "path": "../public/assets/users-CTDaTSIA.js"
  },
  "/assets/wallet-kSn3h8tT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1708-OdzVJaWOYnWKq3K/HlwL8SHG6vI"',
    "mtime": "2026-08-24T20:06:36.137Z",
    "size": 5896,
    "path": "../public/assets/wallet-kSn3h8tT.js"
  },
  "/assets/zap-BpbtYqZ8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-WcJxzactHS2dOLAJeVPUeVQ4zLA"',
    "mtime": "2026-08-24T20:06:36.136Z",
    "size": 263,
    "path": "../public/assets/zap-BpbtYqZ8.js"
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
