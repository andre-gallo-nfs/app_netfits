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
    "mtime": "2026-08-26T20:40:26.540Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-26T20:40:26.540Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-M4wv2tYH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-7ET/arHQu2Crm/01RPPPyJfkwqs"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-M4wv2tYH.js"
  },
  "/assets/ProductDetailSheet-bZp0OVZq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-1U2FHtE4k4078Mg40y1EVY86Nco"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-bZp0OVZq.js"
  },
  "/assets/activities-lv2M_A34.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-7RRgLueJRPoXOfs9hXpioU1SUsM"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 1196,
    "path": "../public/assets/activities-lv2M_A34.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/arrow-up-right-HkcWf5FY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-VwHwaNPb6RMo9MOSYp8yJw9iYFM"',
    "mtime": "2026-08-26T20:40:21.719Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-HkcWf5FY.js"
  },
  "/assets/apple-LeJsn7BW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-ZPUuOlEdXSMkYke5qKH3ODRurhs"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 315,
    "path": "../public/assets/apple-LeJsn7BW.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/associado-DA4cHWTq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-dtaAQZOW33nHJv3t+lYuK3p1uB4"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 29722,
    "path": "../public/assets/associado-DA4cHWTq.js"
  },
  "/assets/calendar-DL5Wv_JL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-smBFouJR1OUghCa6fTYiO77k3t0"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 258,
    "path": "../public/assets/calendar-DL5Wv_JL.js"
  },
  "/assets/auth-BkRZ_yvq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b7d8-7hWOR1jXXg0VvMbipf9hfBgvLJ8"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 47064,
    "path": "../public/assets/auth-BkRZ_yvq.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-26T20:40:21.716Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/circle-check-Cd8aGx4I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Ghu1zR4zou+fJHrGHIXCETo6Ipo"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 174,
    "path": "../public/assets/circle-check-Cd8aGx4I.js"
  },
  "/assets/circle-x-zGJ0QYo0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-RR+HtvVg5MkNdhZ03h6owySKkJA"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 405,
    "path": "../public/assets/circle-x-zGJ0QYo0.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-26T20:40:21.713Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-DuLE12LQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f58-o5qB8xqEOOio5YGOR+q6XmmPl2Y"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 8024,
    "path": "../public/assets/contato-DuLE12LQ.js"
  },
  "/assets/download-DbVUfgkf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-HLSDGmK5YySQfWGp8gLqWPfvuaE"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 8261,
    "path": "../public/assets/download-DbVUfgkf.js"
  },
  "/assets/dumbbell--xN-GJpg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-jvGxbhQqPzaD+GCwnRDK1c/eoI8"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 561,
    "path": "../public/assets/dumbbell--xN-GJpg.js"
  },
  "/assets/eye-Cj40Qmdw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-bU7DaQq2nCK2DR1Kerd+CDyZpbM"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 252,
    "path": "../public/assets/eye-Cj40Qmdw.js"
  },
  "/assets/faq-DyENXTGZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-GdX6oVvOEP4Hkm2yknsbyFJ/Lzc"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 8136,
    "path": "../public/assets/faq-DyENXTGZ.js"
  },
  "/assets/credit-card-DSDaqpJY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-MLxBRkkgMWJWYrdxVbPvKFYB92o"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 208,
    "path": "../public/assets/credit-card-DSDaqpJY.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-26T20:40:21.716Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-DXq9Ofyl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"870ac-jNd+vkjIuNoJKhL3XLellBUNJn0"',
    "mtime": "2026-08-26T20:40:21.721Z",
    "size": 553132,
    "path": "../public/assets/admin-DXq9Ofyl.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-26T20:40:21.713Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-26T20:40:21.713Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-BXbrikxK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-/CTRDK2tb6ZZr95zO4c1Er34Uoo"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 350,
    "path": "../public/assets/gift-BXbrikxK.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/home-CrO4VFjg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-+/15hYD3eNgrwZ6IugOj34p2pU8"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 11044,
    "path": "../public/assets/home-CrO4VFjg.js"
  },
  "/assets/index-CwEuVwmE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-Z05DXO+LyGvFfWhGv0SadXRuuTU"',
    "mtime": "2026-08-26T20:40:21.716Z",
    "size": 61206,
    "path": "../public/assets/index-CwEuVwmE.js"
  },
  "/assets/levels-kXnkvSxB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-hn3HQ+5ni9NpITnqQLyWToLdEZ8"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 6869,
    "path": "../public/assets/levels-kXnkvSxB.js"
  },
  "/assets/link-2-DAc2P0aM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-urE4ZZzJLQsWd+XiQvTPSCY6zzc"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 243,
    "path": "../public/assets/link-2-DAc2P0aM.js"
  },
  "/assets/lock-DJRFsPK6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-9iqi6IlGhZvAAMnRZfKaLaPKDRQ"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 202,
    "path": "../public/assets/lock-DJRFsPK6.js"
  },
  "/assets/mail-DxVt7g-k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-hbbt9yR7kQdl1siApDNS9JGBTRI"',
    "mtime": "2026-08-26T20:40:21.719Z",
    "size": 214,
    "path": "../public/assets/mail-DxVt7g-k.js"
  },
  "/assets/log-in-CrS3fIxp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-o+AI32XEL62vQh6bAjD9Wegi+bs"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 232,
    "path": "../public/assets/log-in-CrS3fIxp.js"
  },
  "/assets/map-pin-hmRwrcsS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-zijA51V3O1UBt6Poui/JlaKlvKI"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 255,
    "path": "../public/assets/map-pin-hmRwrcsS.js"
  },
  "/assets/market-Vu1e9lga.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-jkygVpYCULTbwF4c+k9ws0ATNC8"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 26473,
    "path": "../public/assets/market-Vu1e9lga.js"
  },
  "/assets/index-DTRZf2Py.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c573-a5p2+3S07TL1NGOKwgvyZjT1WEk"',
    "mtime": "2026-08-26T20:40:21.716Z",
    "size": 443763,
    "path": "../public/assets/index-DTRZf2Py.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-26T20:40:21.719Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DlFIM8LX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-nG4mfrpUNdvP7MusSxa2urazvt4"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 29316,
    "path": "../public/assets/parceiros-DlFIM8LX.js"
  },
  "/assets/percent-DjtzoIyf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-ThehBYnR5OXIEk6Sv//ZuDreZV0"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 646,
    "path": "../public/assets/percent-DjtzoIyf.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T20:40:21.715Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T20:40:26.548Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-26T20:40:26.548Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-ByVy-2AX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-GE2ZcP85NL8fwNB0r1YwNBMJhuI"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 323,
    "path": "../public/assets/phone-ByVy-2AX.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-26T20:40:21.715Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-26T20:40:21.715Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-26T20:40:21.713Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-26T20:40:21.715Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-26T20:40:21.715Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-26T20:40:21.715Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-26T20:40:21.713Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-26T20:40:21.713Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-26T20:40:21.715Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-fFbhNc-c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-KXZaNdzeS6NWAPvi5bWTySgwRts"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 31108,
    "path": "../public/assets/profile-fFbhNc-c.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-26T20:40:21.714Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T20:40:21.723Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T20:40:26.551Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-26T20:40:21.713Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-j4nm3G9N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-wgshsjAQ4XkxSKjKXuQtUpB15vg"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 410,
    "path": "../public/assets/save-j4nm3G9N.js"
  },
  "/assets/search-xri_q-KI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-Cvs4uJ4B9a3C4A+77YHH5USTBYk"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 170,
    "path": "../public/assets/search-xri_q-KI.js"
  },
  "/assets/shield-check-D9hWiJ61.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-52IJA/nCY/aACglcTZrkHqfURO0"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 316,
    "path": "../public/assets/shield-check-D9hWiJ61.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-26T20:40:21.723Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/styles-DVCqZXdz.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"26c5a-OvPABco3SEszTXkEO2R/ty+b6DU"',
    "mtime": "2026-08-26T20:40:21.716Z",
    "size": 158810,
    "path": "../public/assets/styles-DVCqZXdz.css"
  },
  "/assets/truck-Bijdy9Jz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-bRY5vjjVlhncHz9VMnFopdKze3I"',
    "mtime": "2026-08-26T20:40:21.717Z",
    "size": 1109,
    "path": "../public/assets/truck-Bijdy9Jz.js"
  },
  "/assets/user-plus-Bj8ORdb5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-I/LlosOEnuFFMx6eHt5EuFdlOFs"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 311,
    "path": "../public/assets/user-plus-Bj8ORdb5.js"
  },
  "/assets/users-BKMQAKev.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-ROSnu0GRUL3CiREb4rS+Cy8/tOQ"',
    "mtime": "2026-08-26T20:40:21.718Z",
    "size": 307,
    "path": "../public/assets/users-BKMQAKev.js"
  },
  "/assets/wallet-p4THpXKW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-R7Dkb87XNTiNV7qsQFLxjEd0ZBI"',
    "mtime": "2026-08-26T20:40:21.719Z",
    "size": 4687,
    "path": "../public/assets/wallet-p4THpXKW.js"
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
