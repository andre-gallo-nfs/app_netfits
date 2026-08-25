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
    "mtime": "2026-08-25T18:10:38.861Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T18:10:38.862Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-BIbqu0RM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-8GZ84nD4jRzLpn39IvgFgrb4Kxg"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-BIbqu0RM.js"
  },
  "/assets/ProductDetailSheet-D16635Em.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-AgLGyMLuid0v4fOULJ4Xm8j7Ge4"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-D16635Em.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T18:10:33.633Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/activities-BkzGEBsS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-cAi6N3q+lefpyB5he1h0R5/TuTA"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 1196,
    "path": "../public/assets/activities-BkzGEBsS.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T18:10:33.633Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-BrWeSL9m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-1F+ZhedTKIZSvvLM9Pyp8IN6iEA"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 315,
    "path": "../public/assets/apple-BrWeSL9m.js"
  },
  "/assets/associado-DCqHPNXq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73c8-cT/b5WNmSMibwcXB1I0STpKYsnc"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 29640,
    "path": "../public/assets/associado-DCqHPNXq.js"
  },
  "/assets/arrow-up-right-Ct625iiy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-R6Io1uzdGBBEWFV7ICgzz4w+bDY"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Ct625iiy.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T18:10:33.635Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/auth-CulEEexD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b75e-O89trqHQa1bhdIfUVdEfvOie4UU"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 46942,
    "path": "../public/assets/auth-CulEEexD.js"
  },
  "/assets/calendar-DKN-6I1H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-aJLd17HaOmDSwgraSXOPzNI+DP0"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 258,
    "path": "../public/assets/calendar-DKN-6I1H.js"
  },
  "/assets/circle-check-cF4Z-bL_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-T9Sg0edYmJv4O8e2A3S07kuoieU"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 174,
    "path": "../public/assets/circle-check-cF4Z-bL_.js"
  },
  "/assets/circle-x-CWVeFoFn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-pjU374y5qY7qLsp9eDTGvF1CYP8"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 405,
    "path": "../public/assets/circle-x-CWVeFoFn.js"
  },
  "/assets/credit-card-OnvUYmzz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-1ewTQNUAtmoFy0Jwt2DWNM2ZD4o"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 208,
    "path": "../public/assets/credit-card-OnvUYmzz.js"
  },
  "/assets/contato-B4k0VKBc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f63-NRp5Z1Iia9RLETALiBrVD11q6YM"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 8035,
    "path": "../public/assets/contato-B4k0VKBc.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/download-CX4Q4HUL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2050-UbTjQREfEhsZFhakmn/ntlwPZ20"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 8272,
    "path": "../public/assets/download-CX4Q4HUL.js"
  },
  "/assets/eye-UrHXlBSi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-UI/XjArG4jXhSx/AsHp2bl09pMU"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 252,
    "path": "../public/assets/eye-UrHXlBSi.js"
  },
  "/assets/dumbbell-xqcZSP50.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-vJexs9pQK6BZiB3Dta9GzOv3VE8"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 561,
    "path": "../public/assets/dumbbell-xqcZSP50.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T18:10:33.634Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/faq-Cn63ouX4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-X4NmOZM903tYA7ND33ipNH+9AmE"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 8136,
    "path": "../public/assets/faq-Cn63ouX4.js"
  },
  "/assets/admin-CXKl6DJb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f66-qs3pCN8sLfoDcW0R8h9ou78zZJQ"',
    "mtime": "2026-08-25T18:10:33.646Z",
    "size": 540518,
    "path": "../public/assets/admin-CXKl6DJb.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T18:10:33.633Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/home-qUfggKQn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2af4-tT4z9mSyjT64HSgmrVXrGcqAhZg"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 10996,
    "path": "../public/assets/home-qUfggKQn.js"
  },
  "/assets/gift-DnVMBK3L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-T7Tq9Fvksm/jpLu20kjdxDU/yNE"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 350,
    "path": "../public/assets/gift-DnVMBK3L.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/levels-BSKoq6UX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-TKJKl6BarN1r0QxLsX4Duy2Jph4"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 6869,
    "path": "../public/assets/levels-BSKoq6UX.js"
  },
  "/assets/link-2-BAG5FkEH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-F0Enmq8SYzGkQ4ceSpXP9T2zSq4"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 243,
    "path": "../public/assets/link-2-BAG5FkEH.js"
  },
  "/assets/index-DTvYpGTC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dc84-fQkD7d1R13slXsWWm60826MI3OI"',
    "mtime": "2026-08-25T18:10:33.643Z",
    "size": 56452,
    "path": "../public/assets/index-DTvYpGTC.js"
  },
  "/assets/lock-DYQe9MTc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-AclrYxq+eF6z8gson7oTJXDyroA"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 202,
    "path": "../public/assets/lock-DYQe9MTc.js"
  },
  "/assets/log-in-Bt8uuioO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-ExZoPtqeRZnqfjrVUe/W0WMWFVY"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 232,
    "path": "../public/assets/log-in-Bt8uuioO.js"
  },
  "/assets/mail-C-QVJYts.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-mgWZ80mWd47QFr7/ZZp5T6q8Xko"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 214,
    "path": "../public/assets/mail-C-QVJYts.js"
  },
  "/assets/map-pin-BisA0GL8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-EuymkpKTTRrMfTcp7IgUFzEEkT4"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 255,
    "path": "../public/assets/map-pin-BisA0GL8.js"
  },
  "/assets/market-kYBaY2uJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-aIXtG0wTgSTt6ave4OeiYeXMKuU"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 26473,
    "path": "../public/assets/market-kYBaY2uJ.js"
  },
  "/assets/index-DOKB3ElN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c3a5-zWYe45T4dvZr/QVcdQ4xZ0SfQKc"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 443301,
    "path": "../public/assets/index-DOKB3ElN.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-RJ7vMsDr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-IoiUhEH2dVNT52VcERZ4atVljiE"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 29316,
    "path": "../public/assets/parceiros-RJ7vMsDr.js"
  },
  "/assets/percent-DOWEltUC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-VF4L8lXhDznfNZnAlqlNtjhjbVI"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 646,
    "path": "../public/assets/percent-DOWEltUC.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T18:10:38.866Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T18:10:38.875Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T18:10:33.633Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/phone-Beq98nCh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-XZqDyL03v1cnD4WsgaMwpThXuTw"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 323,
    "path": "../public/assets/phone-Beq98nCh.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T18:10:33.635Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T18:10:33.634Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T18:10:33.633Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T18:10:33.634Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T18:10:33.634Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T18:10:33.634Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T18:10:33.634Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T18:10:33.634Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/profile-UCT6gHri.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-nFq9TnBiIYOyqqXF07uYZHntUAU"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 31108,
    "path": "../public/assets/profile-UCT6gHri.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T18:10:33.635Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T18:10:33.632Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T18:10:33.633Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T18:10:33.647Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T18:10:38.880Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/search-ClD66PU0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-y/DHIIAu2s2WeGh6dUrBUugnPqY"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 170,
    "path": "../public/assets/search-ClD66PU0.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T18:10:33.633Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-CsfAMMPF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-Z43do9NrI3pwKqSeyEsfQXz7Dv8"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 410,
    "path": "../public/assets/save-CsfAMMPF.js"
  },
  "/assets/shield-check-X1yt8sQE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-U2WQNK5JUhGaRBl71s2X9R8E6bU"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 316,
    "path": "../public/assets/shield-check-X1yt8sQE.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T18:10:33.647Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/truck-B_j92NE6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-vS3fvVA5XLd9EPuY+LPwjlPgWSw"',
    "mtime": "2026-08-25T18:10:33.644Z",
    "size": 1109,
    "path": "../public/assets/truck-B_j92NE6.js"
  },
  "/assets/user-plus-C6abhr4t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-dvlPJI46fdxcyAEYqOGhU7rKhTs"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 311,
    "path": "../public/assets/user-plus-C6abhr4t.js"
  },
  "/assets/styles-Dg_0i3xw.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24dd9-DDaO34l1kO+2PdHCxAbTjTDVIzg"',
    "mtime": "2026-08-25T18:10:33.643Z",
    "size": 151001,
    "path": "../public/assets/styles-Dg_0i3xw.css"
  },
  "/assets/users-Dk9VNZU6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-/XQJdjPEbQex6P6p/mCnXypSnQo"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 307,
    "path": "../public/assets/users-Dk9VNZU6.js"
  },
  "/assets/wallet-D7vgKtxB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-jd37q8NWrQXzB9e4UiZIXEW54I8"',
    "mtime": "2026-08-25T18:10:33.645Z",
    "size": 4687,
    "path": "../public/assets/wallet-D7vgKtxB.js"
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
