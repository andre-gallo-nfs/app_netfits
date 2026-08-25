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
    "mtime": "2026-08-25T15:44:32.373Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T15:44:32.374Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-Cc5vfKaR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-jFDIYxwRBhcSSBEd4PAqRQpCpAc"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-Cc5vfKaR.js"
  },
  "/assets/activities-CGk7Xne-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-iYqyUqsdd58INgAUYChFdRPe3+I"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 1196,
    "path": "../public/assets/activities-CGk7Xne-.js"
  },
  "/assets/ProductDetailSheet-DgUt6AcV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-qDEHjBetl27O5dXXixdBZlgHbO8"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-DgUt6AcV.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-y-19DXaL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-hxQgoUREw3jbPZRlHymRVu9JyWw"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 315,
    "path": "../public/assets/apple-y-19DXaL.js"
  },
  "/assets/arrow-up-right-DgxUEC_z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-YWb6LEhtpvqA/I28XiuJojdLXOA"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-DgxUEC_z.js"
  },
  "/assets/associado-CX9fYN-u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73e9-ugBD2RG7Z6FPFTq0nbYKq7GuFd8"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 29673,
    "path": "../public/assets/associado-CX9fYN-u.js"
  },
  "/assets/auth-Cu8Np7NY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b73d-fAhMZEk0B+g081v5aXMCEko/89Q"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 46909,
    "path": "../public/assets/auth-Cu8Np7NY.js"
  },
  "/assets/building-2-DXDjCirs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-h6hSkJLS9YyL6qm9TrZd3MdEx4I"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 384,
    "path": "../public/assets/building-2-DXDjCirs.js"
  },
  "/assets/calendar-DoQDSaxv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-f+s+EUuCvEfrJCTiowD2ZNuYU3Y"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 258,
    "path": "../public/assets/calendar-DoQDSaxv.js"
  },
  "/assets/circle-check-DeA6nbi3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Ejbyg4Kqf+5QCsrQc4siTKjHl50"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 174,
    "path": "../public/assets/circle-check-DeA6nbi3.js"
  },
  "/assets/circle-x-Dncq465I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-oGreWoJDq2VekYi9ayXSNgk+CXM"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 405,
    "path": "../public/assets/circle-x-Dncq465I.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/contato-Coew5Ami.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-bZxvIY9H+LJ+gdhxitkvFzf6YS0"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 8068,
    "path": "../public/assets/contato-Coew5Ami.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-CR2m2Bxt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-aqi+s7QUmIktgbKE/bg6z01tbEM"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 208,
    "path": "../public/assets/credit-card-CR2m2Bxt.js"
  },
  "/assets/download-CKmVXBqQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-SvfIZI9lKaU5q/edKXFsYLEuaUQ"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 8305,
    "path": "../public/assets/download-CKmVXBqQ.js"
  },
  "/assets/dumbbell-BsQ5q7TH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-XsdsTqUOmj/qEjlqjvUQGnch/gY"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BsQ5q7TH.js"
  },
  "/assets/eye--UFgXuEh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-QA3Kwvp0dB8RZw4yeyCD80sZqr8"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 252,
    "path": "../public/assets/eye--UFgXuEh.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-DUmE1HJ4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f66-SxaKMwxsjt0TTIRiaGYtVdWvpgY"',
    "mtime": "2026-08-25T15:44:28.235Z",
    "size": 540518,
    "path": "../public/assets/admin-DUmE1HJ4.js"
  },
  "/assets/faq-D455uMqY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-xPtDiyGgFJJVcw1bchQksDNVi4U"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 8169,
    "path": "../public/assets/faq-D455uMqY.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-CwGxffYz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-6WJzeAdbIk7yDnC3UqA675rdBZ4"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 350,
    "path": "../public/assets/gift-CwGxffYz.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/home-d_-RbXQd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b1a-+HT/7UeOPhCr80xVNgWYJL/XEi4"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 11034,
    "path": "../public/assets/home-d_-RbXQd.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/index-BsfNJ865.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bca2-sjKk3OH489G6NPvirI7Iowgxcyo"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 441506,
    "path": "../public/assets/index-BsfNJ865.js"
  },
  "/assets/index-Ck8zoXCv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4e1-9Z69MHQ5bnPax4Jw4OuBQUiRp3I"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 58593,
    "path": "../public/assets/index-Ck8zoXCv.js"
  },
  "/assets/levels-DY5DjwO2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-RvInVSolkyvhrOF5EZ118BPAdQw"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 6869,
    "path": "../public/assets/levels-DY5DjwO2.js"
  },
  "/assets/link-2-FTr5o5bc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-dBqtYZbEicMqPiIsF/KhFrKmX8E"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 243,
    "path": "../public/assets/link-2-FTr5o5bc.js"
  },
  "/assets/lock-wDh-CBJF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-sIdA6yt/QKGhEA1ulY6y8wg3J0E"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 202,
    "path": "../public/assets/lock-wDh-CBJF.js"
  },
  "/assets/log-in-CeuqslIB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-XbRFTnChAPDNqsx/D/7TRWCwc5w"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 232,
    "path": "../public/assets/log-in-CeuqslIB.js"
  },
  "/assets/mail-ltVrIxIa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-6DLcsS0njXAaTTyyVEdps5bCGaY"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 214,
    "path": "../public/assets/mail-ltVrIxIa.js"
  },
  "/assets/market-BUOmxhQ6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-OMyiSJCPavVHHHCGtirRkUiYCiQ"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 26473,
    "path": "../public/assets/market-BUOmxhQ6.js"
  },
  "/assets/map-pin-n3q8EPD6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-sPveDkNOhCwIXIiwIrElYwSGF1g"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 255,
    "path": "../public/assets/map-pin-n3q8EPD6.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DHhbt6_d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b5-/Oa6rGqUhN+UcD3+qB1u2udgUtc"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 25781,
    "path": "../public/assets/parceiros-DHhbt6_d.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T15:44:32.386Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T15:44:32.391Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-DOIHckW3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-JdCo870o5oGOe9s+tK4G6yHYo6w"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 646,
    "path": "../public/assets/percent-DOIHckW3.js"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-vEuKPMhc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7963-TNFj2VtQA5bm8xK/ANaDASpF8ec"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 31075,
    "path": "../public/assets/profile-vEuKPMhc.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T15:44:28.236Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T15:44:32.395Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T15:44:28.229Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-mc8hCS7j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-mnkz5KvWQQ1Mer/oD57QqT/Azao"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 410,
    "path": "../public/assets/save-mc8hCS7j.js"
  },
  "/assets/search-BtrOjLGi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-od8zKWmXOGCGReQMTgNy+IBjcis"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 170,
    "path": "../public/assets/search-BtrOjLGi.js"
  },
  "/assets/shield-check-3d29c59n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-DkCckIyKA/Jjt5H+Y2fsSfZ9H/k"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 316,
    "path": "../public/assets/shield-check-3d29c59n.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T15:44:28.236Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/truck-sDjMMAp1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-XV5a5+KQhjfvm3Tc3yOyap14JMs"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 1109,
    "path": "../public/assets/truck-sDjMMAp1.js"
  },
  "/assets/user-plus-DWAzbXjc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-UP69kwZ/XItcNQy/fS4PsoXOvx4"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 585,
    "path": "../public/assets/user-plus-DWAzbXjc.js"
  },
  "/assets/users-ipcmzbp3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-moDXzn6vEd76iJtXimyOcqmxNu4"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 307,
    "path": "../public/assets/users-ipcmzbp3.js"
  },
  "/assets/wallet-Cdwsro8g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-9iGn1hYDopUEmmwUsO/3quZAj3I"',
    "mtime": "2026-08-25T15:44:28.231Z",
    "size": 5844,
    "path": "../public/assets/wallet-Cdwsro8g.js"
  },
  "/assets/styles-BrwryxNw.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2460d-q2X4LhF833dOF+TjnusjgeWPkiQ"',
    "mtime": "2026-08-25T15:44:28.230Z",
    "size": 149005,
    "path": "../public/assets/styles-BrwryxNw.css"
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
