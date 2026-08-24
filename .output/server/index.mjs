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
    "mtime": "2026-08-24T20:23:13.472Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-24T20:23:13.472Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-BxSO9dSi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-pBJt1/Y36lF3dZDstjyTmw38ino"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-BxSO9dSi.js"
  },
  "/assets/ProductDetailSheet-D-23YgBv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"48a2-7MHskffZOB5X3siWNuft0hGcj/k"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 18594,
    "path": "../public/assets/ProductDetailSheet-D-23YgBv.js"
  },
  "/assets/activities-B9jkydku.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-DH0axOxiG3n6YdCYNhGdoWhVk78"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 1196,
    "path": "../public/assets/activities-B9jkydku.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-24T20:23:08.448Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-24T20:23:08.475Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apple-Dthugx-r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-bK+rwOxijQR1qjm5PlQTifM3m1Q"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 315,
    "path": "../public/assets/apple-Dthugx-r.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-24T20:23:08.448Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/arrow-up-right-Dc8467F9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-tb60FMmFrp1XyWdpHd74iwWLYOI"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Dc8467F9.js"
  },
  "/assets/associado-CPgN_Eej.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7461-HddgqPVHLLLTsMQQuj3IkuUfVaw"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 29793,
    "path": "../public/assets/associado-CPgN_Eej.js"
  },
  "/assets/auth-DZGgxU-F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a182-FBdFsJ0wRSAa1IKrRjltYydX0J8"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 41346,
    "path": "../public/assets/auth-DZGgxU-F.js"
  },
  "/assets/building-2-DbtZt0jJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-dOeeZNjvqczPrw3tvW0fzPfnaXw"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 384,
    "path": "../public/assets/building-2-DbtZt0jJ.js"
  },
  "/assets/check-CsZQLrlW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-m3PQ3SnUWZgrEDKVhNnrqk/CMy4"',
    "mtime": "2026-08-24T20:23:08.593Z",
    "size": 120,
    "path": "../public/assets/check-CsZQLrlW.js"
  },
  "/assets/circle-x-D1IZM7J6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-MHJ8ac/Y4fVQS6zN+/Vn+32CKEc"',
    "mtime": "2026-08-24T20:23:08.593Z",
    "size": 405,
    "path": "../public/assets/circle-x-D1IZM7J6.js"
  },
  "/assets/circle-check-BLSPrBlU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-qILZcZTuOmvMvcKiRTSvTb3Jp08"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 174,
    "path": "../public/assets/circle-check-BLSPrBlU.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/contato-BYCWInCj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-tEfeyJXNa0KB20nWxyj2hSxfHtQ"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 8068,
    "path": "../public/assets/contato-BYCWInCj.js"
  },
  "/assets/download-CL_DBEm2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-0cOf+5/oDTF6rxhX+GmwjLqIVjY"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 8305,
    "path": "../public/assets/download-CL_DBEm2.js"
  },
  "/assets/dumbbell-Bok8YQTW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-zEH6zs8iMpHdqWXLZuw0TZ1Fe44"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 561,
    "path": "../public/assets/dumbbell-Bok8YQTW.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-24T20:23:08.475Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/eye-CIXzP4st.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-WIvt3OejuVj2lVcRN37XaX0JiFw"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 252,
    "path": "../public/assets/eye-CIXzP4st.js"
  },
  "/assets/credit-card-De_YTv18.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-9PKQzzm//lMSSqEdJmWJz4faros"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 208,
    "path": "../public/assets/credit-card-De_YTv18.js"
  },
  "/assets/admin-C-eSy_gf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f1f-5qevRxHFLx6LqdrYEa0/u5aw8kI"',
    "mtime": "2026-08-24T20:23:08.600Z",
    "size": 540447,
    "path": "../public/assets/admin-C-eSy_gf.js"
  },
  "/assets/faq-eejY2oVC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-vHPV9cWa8TFzQWr4l0VY6RnmRIs"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 8169,
    "path": "../public/assets/faq-eejY2oVC.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-24T20:23:08.447Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-24T20:23:08.447Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gift-C406hIJa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-5WdPghsYcxrcbJy5eEck3Oe+Fd8"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 350,
    "path": "../public/assets/gift-C406hIJa.js"
  },
  "/assets/heart-C9XKbN7-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-LwRrh4l0zTqVA8BbpoZ0WxONBPc"',
    "mtime": "2026-08-24T20:23:08.598Z",
    "size": 259,
    "path": "../public/assets/heart-C9XKbN7-.js"
  },
  "/assets/home-Dk-AL1sG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b39-V01A3Xq296T2CxcRkZtOYeMsonE"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 11065,
    "path": "../public/assets/home-Dk-AL1sG.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-24T20:23:08.475Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/index-tSyTS9JJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4f8-cNkMOsPmZbtGBx/cSb80b0l2gSM"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 58616,
    "path": "../public/assets/index-tSyTS9JJ.js"
  },
  "/assets/levels-D791rFG9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-QSpfBMlkES7L/pRNv4ZHcA5Eo1E"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 6869,
    "path": "../public/assets/levels-D791rFG9.js"
  },
  "/assets/link-2-62818S9x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-NJQpZf5rl77UE0GaRZt8+RFMZ+k"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 243,
    "path": "../public/assets/link-2-62818S9x.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-24T20:23:08.479Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/lock-Bdj13dTB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-8VhAYhgHmFHv5xUQRJ9MUSOlzJg"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 202,
    "path": "../public/assets/lock-Bdj13dTB.js"
  },
  "/assets/log-in-Dov788_V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-IvJ/5uA8IuQkLguHfiDx+0oc6Ds"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 232,
    "path": "../public/assets/log-in-Dov788_V.js"
  },
  "/assets/mail-b2LhSwo3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-ls0iGVAWTxGnVLuWKspTFk6n4pI"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 214,
    "path": "../public/assets/mail-b2LhSwo3.js"
  },
  "/assets/map-pin-twQVJDFR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-aQCz464ee4L6PqOe0fNQprzH+k0"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 255,
    "path": "../public/assets/map-pin-twQVJDFR.js"
  },
  "/assets/market-F3j51fcY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67bd-a7ZeGTgL1A9aGSFjCu05pK0hhYo"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 26557,
    "path": "../public/assets/market-F3j51fcY.js"
  },
  "/assets/index-BblgOfNS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68d79-8fKStrvSC69pcNJZcS93dJFjT3s"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 429433,
    "path": "../public/assets/index-BblgOfNS.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:23:08.593Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-24T20:23:13.481Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-24T20:23:13.484Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/operational-params-store-Uq5lxV5F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74b-XX8XHTBO7WmnM5jrYqdyLOoGzCo"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 1867,
    "path": "../public/assets/operational-params-store-Uq5lxV5F.js"
  },
  "/assets/parceiros-Cw6k9ACP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"645c-HQ98HDgXWFugd0zsjRP1dYxcS78"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 25692,
    "path": "../public/assets/parceiros-Cw6k9ACP.js"
  },
  "/assets/percent-lyQQ5KUu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-xaY/N/SCP58OyBByqvTi3FA0k+Q"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 646,
    "path": "../public/assets/percent-lyQQ5KUu.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-24T20:23:08.448Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-24T20:23:08.475Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-24T20:23:08.475Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-24T20:23:08.447Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-24T20:23:08.447Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/profile-BfRL70jx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7376-06PgUZsnIRt1FGe7smpm9Ieggg8"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 29558,
    "path": "../public/assets/profile-BfRL70jx.js"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-24T20:23:08.479Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-24T20:23:08.480Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-24T20:23:08.475Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:23:13.487Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-24T20:23:08.605Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-24T20:23:08.447Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-24T20:23:08.475Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/save-Cc9ASKg2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-knAn+2Q05xRat+gk6CUoDrgoFYc"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 410,
    "path": "../public/assets/save-Cc9ASKg2.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-24T20:23:08.475Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-24T20:23:08.604Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-C0vnG1sn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-GCefi0dVgeuIRyw9ikIJfiF+qxk"',
    "mtime": "2026-08-24T20:23:08.586Z",
    "size": 170,
    "path": "../public/assets/search-C0vnG1sn.js"
  },
  "/assets/share-2-DOO33hCQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-mo5k8eAZkhlmjPOR+U2YuGlb8fU"',
    "mtime": "2026-08-24T20:23:08.481Z",
    "size": 353,
    "path": "../public/assets/share-2-DOO33hCQ.js"
  },
  "/assets/shield-check-yEqIgi7J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-TFgxBF9PRksWyORY84Kk3rPBWoc"',
    "mtime": "2026-08-24T20:23:08.587Z",
    "size": 316,
    "path": "../public/assets/shield-check-yEqIgi7J.js"
  },
  "/assets/truck-BDMgPvoP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-gN7YYuWw6wwIfwmzW1uZWO34JZs"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 1109,
    "path": "../public/assets/truck-BDMgPvoP.js"
  },
  "/assets/user-plus-BrCuEJcj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"249-y32UwjBAZcvgjq+yXK4rvm/BwDk"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 585,
    "path": "../public/assets/user-plus-BrCuEJcj.js"
  },
  "/assets/users-DleouTws.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-oGbGjDBwpIPIuqnKqu5WUS7xYHs"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 307,
    "path": "../public/assets/users-DleouTws.js"
  },
  "/assets/wallet-Buwd25wb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1708-iN8xKH+hR2rsBzRL1HGjYWjXVvk"',
    "mtime": "2026-08-24T20:23:08.590Z",
    "size": 5896,
    "path": "../public/assets/wallet-Buwd25wb.js"
  },
  "/assets/zap-DyIxGqj5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-yE49RUKw363BOPkoxt/gQOXwRAM"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 263,
    "path": "../public/assets/zap-DyIxGqj5.js"
  },
  "/assets/styles-COYd2nln.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"241c3-xxpNkS7dW4Fyd9VZrLVTxPc39nA"',
    "mtime": "2026-08-24T20:23:08.585Z",
    "size": 147907,
    "path": "../public/assets/styles-COYd2nln.css"
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
