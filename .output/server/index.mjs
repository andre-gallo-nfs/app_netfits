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
    "etag": '"526-6zVsZr6XdQArNr/SYsmqBheO7+0"',
    "mtime": "2026-08-18T15:45:07.456Z",
    "size": 1318,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-Bv0FSQHK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48f1-24oIR+OUn0cTYTKf5sRaceQ4qgk"',
    "mtime": "2026-08-18T15:45:02.416Z",
    "size": 18673,
    "path": "../public/assets/ProductDetailSheet-Bv0FSQHK.js"
  },
  "/assets/activities-ZGitjeri.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-PclcOR1SrGboKzMIwgFmJ5oCafU"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 1159,
    "path": "../public/assets/activities-ZGitjeri.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-18T15:45:07.456Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/associado-DyWqvkCm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"63cc-WvFz1S1nxDD4lQw00Q5o0xZitKo"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 25548,
    "path": "../public/assets/associado-DyWqvkCm.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/arrow-up-right-WJuQsQRU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-9Au+c24urPsvucQrsbq1vRyeIl4"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-WJuQsQRU.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-18T15:45:02.406Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/check-T6uadfab.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-6YmL8Cp7bNlAW1c7O3kkw7VvUgM"',
    "mtime": "2026-08-18T15:45:02.419Z",
    "size": 120,
    "path": "../public/assets/check-T6uadfab.js"
  },
  "/assets/circle-check-Cr-KTi-H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-bfXW9Ti+xb1WXjO0996Ud3j87ZE"',
    "mtime": "2026-08-18T15:45:02.416Z",
    "size": 174,
    "path": "../public/assets/circle-check-Cr-KTi-H.js"
  },
  "/assets/auth-v6PTOyjA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"97a0-m1n5pJiAa1Ddf22Kgp4FDKzfdGs"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 38816,
    "path": "../public/assets/auth-v6PTOyjA.js"
  },
  "/assets/copy-9FxSGBR4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-pEUly7UbPUt6b+Ay/TzSuWBj3r4"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 232,
    "path": "../public/assets/copy-9FxSGBR4.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-18T15:45:02.404Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-18T15:45:02.404Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-18T15:45:02.404Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/eye-Cf3F1dbr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-4ZAXXz9WszbpuMd1W0SNZ7eNF6Y"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 252,
    "path": "../public/assets/eye-Cf3F1dbr.js"
  },
  "/assets/credit-card-C0klQ8-L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-ZP/RS88oLQ4I2fyZK4sWpGx4d6U"',
    "mtime": "2026-08-18T15:45:02.419Z",
    "size": 208,
    "path": "../public/assets/credit-card-C0klQ8-L.js"
  },
  "/assets/admin-YaDYtnWV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7e811-v89WUDeg81QcgKGP3mHgktuRg/k"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 518161,
    "path": "../public/assets/admin-YaDYtnWV.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-DfEnhlki.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-+WaBdWKHcGXnqGl8vuYSRUPIIsE"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 350,
    "path": "../public/assets/gift-DfEnhlki.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-18T15:45:02.406Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/heart-XZ812Wvk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-0j2h/VyoY2LqUCA0wCCUObn4ReA"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 259,
    "path": "../public/assets/heart-XZ812Wvk.js"
  },
  "/assets/index-C49WMQYZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"61dcf-OvkMcFzvdM+X0QUs9kM4x6ysOO0"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 400847,
    "path": "../public/assets/index-C49WMQYZ.js"
  },
  "/assets/index-DY06ghlS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dbbf-N9Y5V2MNn9YqhmGDu7h9icat3DQ"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 56255,
    "path": "../public/assets/index-DY06ghlS.js"
  },
  "/assets/levels-C4CS2imE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-cFa3tUW8l3XymM2yrni8VBDieL8"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 6869,
    "path": "../public/assets/levels-C4CS2imE.js"
  },
  "/assets/lock-d-2rlrVR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-ph+f4mRHgF2vXHmg/3Y5iEkplpA"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 202,
    "path": "../public/assets/lock-d-2rlrVR.js"
  },
  "/assets/log-in-BVmNK3UI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-ecNqi0DO8v0qpYKcMPIolO4p0jY"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 232,
    "path": "../public/assets/log-in-BVmNK3UI.js"
  },
  "/assets/map-pin-DOOeyrab.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c1-8Jdtprw1eAqDgsdNreTD0LLZ0pI"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 449,
    "path": "../public/assets/map-pin-DOOeyrab.js"
  },
  "/assets/market-Cd4AsVwj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67c9-j/52kmNawLI/S1NpG/wGhL1ENmU"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 26569,
    "path": "../public/assets/market-Cd4AsVwj.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-18T15:45:02.419Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/operational-params-store-DKAYZd5m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"63c-E0d95RnXtAYBxCVgbMYpR4cxFlM"',
    "mtime": "2026-08-18T15:45:02.419Z",
    "size": 1596,
    "path": "../public/assets/operational-params-store-DKAYZd5m.js"
  },
  "/assets/percent-hQR7Yrq0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"33e-c07aBzH0CuoEN3oEapqTxUX755Q"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 830,
    "path": "../public/assets/percent-hQR7Yrq0.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-18T15:45:02.411Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-18T15:45:02.419Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-18T15:45:07.465Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-18T15:45:07.466Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-18T15:45:02.420Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-18T15:45:02.411Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-18T15:45:02.411Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/profile-DgXm1zf_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13413-jgbUayR9G0irHXJ0ObBxXgTXBY4"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 78867,
    "path": "../public/assets/profile-DgXm1zf_.js"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-18T15:45:02.388Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/save-DhqvoAu1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-9D2ySoGy+aMOHBP6xrRrbEfv/3Q"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 410,
    "path": "../public/assets/save-DhqvoAu1.js"
  },
  "/assets/shield-check-_QeQlP6j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-CI7Zl9LHqoUOFX8/xr1Q6uQf6oo"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 316,
    "path": "../public/assets/shield-check-_QeQlP6j.js"
  },
  "/assets/share-2-DLdpFhmw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-lA+ON7v21eYSiwItvGSLEL4c7ps"',
    "mtime": "2026-08-18T15:45:02.413Z",
    "size": 353,
    "path": "../public/assets/share-2-DLdpFhmw.js"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/user-KI3oy2FG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"382-oWp8n2QRvbfrTstYFIqjQ4z3ZLQ"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 898,
    "path": "../public/assets/user-KI3oy2FG.js"
  },
  "/assets/users-DV1hR9pD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-+oZQampsSKtnvxzMRHezBPpeXgY"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 307,
    "path": "../public/assets/users-DV1hR9pD.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/wallet-eqZWKMEH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-JoFVybwCIqnyQS2b7ZrGLUeY56Y"',
    "mtime": "2026-08-18T15:45:02.419Z",
    "size": 5150,
    "path": "../public/assets/wallet-eqZWKMEH.js"
  },
  "/assets/zap-CYau4i-f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5c3-RW1ZrnbFKvRL+rt1iGFk7a/9Mgc"',
    "mtime": "2026-08-18T15:45:02.418Z",
    "size": 1475,
    "path": "../public/assets/zap-CYau4i-f.js"
  },
  "/assets/styles-DJ5bugAV.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"1e8fc-dWVIBp1en4eJgR3uyoHZn1DazQ4"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 125180,
    "path": "../public/assets/styles-DJ5bugAV.css"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-18T15:45:02.412Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-18T15:45:07.471Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-18T15:45:02.421Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
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
