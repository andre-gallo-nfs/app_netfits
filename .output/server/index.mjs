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
    "mtime": "2026-08-25T16:50:13.048Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T16:50:13.048Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-CzfHUOdt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-iHKSK2sh+FLsf/43gb4Ucv6mEgU"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-CzfHUOdt.js"
  },
  "/assets/ProductDetailSheet-Dz4l9AEw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-CHMTka4GOhKJB4Up/VK7aB2GjCI"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-Dz4l9AEw.js"
  },
  "/assets/activities-B4N6nNyN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-75TmZnr5iEUIaL8PoDPbLkfm5+U"',
    "mtime": "2026-08-25T16:50:08.233Z",
    "size": 1196,
    "path": "../public/assets/activities-B4N6nNyN.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T16:50:08.231Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-DvYvnOlJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-oDRchDIInNL989xvrE07QhztmeM"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 315,
    "path": "../public/assets/apple-DvYvnOlJ.js"
  },
  "/assets/arrow-up-right-CMcOMNKH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-yOkotVAdDq3JNzSOd82kI9E7zKk"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CMcOMNKH.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/associado-DJPZFuBd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73c8-ojBTao6clvjoiiklFaHvOVTSiDE"',
    "mtime": "2026-08-25T16:50:08.233Z",
    "size": 29640,
    "path": "../public/assets/associado-DJPZFuBd.js"
  },
  "/assets/auth-BJCwdRY1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b75e-YerD4MiCmkiDJFwL5r3eOdgp0oc"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 46942,
    "path": "../public/assets/auth-BJCwdRY1.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T16:50:08.233Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/calendar-i7MJYpSg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-SqZRM3CKWFJyoM+d6JFT1EdN2NA"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 258,
    "path": "../public/assets/calendar-i7MJYpSg.js"
  },
  "/assets/circle-x-pjd5GDAn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-3Bt2Aa+h0/S/rLu9iXGzMyd8/hQ"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 405,
    "path": "../public/assets/circle-x-pjd5GDAn.js"
  },
  "/assets/circle-check-w5bawhVJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-UIqPMCi9/vK3yoLQssTIb5by3iw"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 174,
    "path": "../public/assets/circle-check-w5bawhVJ.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-Cb8PU8eI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f63-O9Dum1HdnUvjkH9we1v/MRKTAcE"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 8035,
    "path": "../public/assets/contato-Cb8PU8eI.js"
  },
  "/assets/credit-card-BYeEsULT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-zuynUZtQ73E8TJFa01HlHy1wWZc"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 208,
    "path": "../public/assets/credit-card-BYeEsULT.js"
  },
  "/assets/download-DuNwDZU6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2050-iU2aQCmoBIT84gnEo4pCfgS3gpg"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 8272,
    "path": "../public/assets/download-DuNwDZU6.js"
  },
  "/assets/dumbbell-C7eRwb0I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-duSu+tbUqCzluVEXcbDuowpzpno"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C7eRwb0I.js"
  },
  "/assets/eye-BDqJ0zSk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-k+zVkywjwCL3Chf9hwoVZGD1V0M"',
    "mtime": "2026-08-25T16:50:08.233Z",
    "size": 252,
    "path": "../public/assets/eye-BDqJ0zSk.js"
  },
  "/assets/faq-BpHuAidZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-ZtPEuXWEdFx2rAiYmTR9J2L2q20"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 8136,
    "path": "../public/assets/faq-BpHuAidZ.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T16:50:08.232Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-CBzyDPvE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f66-9zSN4dRGMLjK6vD+hqaE/nCFt1A"',
    "mtime": "2026-08-25T16:50:08.236Z",
    "size": 540518,
    "path": "../public/assets/admin-CBzyDPvE.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T16:50:08.229Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T16:50:08.229Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gift-BbU7wEmc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-UpbBnt6Ihtye1o/l0lwsf8xPdsk"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 350,
    "path": "../public/assets/gift-BbU7wEmc.js"
  },
  "/assets/home-CZy3nr9U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2af4-IpWJ1SS3/fcln+tgbh8BuPDUzQw"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 10996,
    "path": "../public/assets/home-CZy3nr9U.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-BL-i79yA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d775-BAO4MZGXlTJF12mM1zlMFGm4MhM"',
    "mtime": "2026-08-25T16:50:08.233Z",
    "size": 55157,
    "path": "../public/assets/index-BL-i79yA.js"
  },
  "/assets/index-Xy3Z-VVJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bc91-exX3lDlJy4KZFzm0FCN5RJGl9+Y"',
    "mtime": "2026-08-25T16:50:08.233Z",
    "size": 441489,
    "path": "../public/assets/index-Xy3Z-VVJ.js"
  },
  "/assets/link-2-Du4fywp3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-43+DILXQztBDam4NAadMVr7pr1k"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 243,
    "path": "../public/assets/link-2-Du4fywp3.js"
  },
  "/assets/lock-D4uOfB97.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-HlIPs+lqCLZkdayHC+ptjqfandI"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 202,
    "path": "../public/assets/lock-D4uOfB97.js"
  },
  "/assets/log-in-C4tu8bB-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-gZwEWwEDAefa5wjYkvFzbR4du4Y"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 232,
    "path": "../public/assets/log-in-C4tu8bB-.js"
  },
  "/assets/mail-Dv8bYZr6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-HHWTgh0E7nnlwP8VaYzxezhT4dA"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 214,
    "path": "../public/assets/mail-Dv8bYZr6.js"
  },
  "/assets/map-pin-CQthIP4A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-Ut918lqbHYPw/JcwKbr1mnhIdAE"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 255,
    "path": "../public/assets/map-pin-CQthIP4A.js"
  },
  "/assets/market-CmEo181U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-2F52/sCjaUqIkQjV53riwse/fjY"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 26473,
    "path": "../public/assets/market-CmEo181U.js"
  },
  "/assets/levels-7mtoMjWN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-c/FNMNiNt3g7lwvCvil6zV8Vrpo"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 6869,
    "path": "../public/assets/levels-7mtoMjWN.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-D4HAM7Cf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-IBrqU/7pQq0ichVaOOwAMZXbssg"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 29316,
    "path": "../public/assets/parceiros-D4HAM7Cf.js"
  },
  "/assets/percent-DnFUPEe0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-nvKFrYnid4aRZ9mPwg/sUJLffRc"',
    "mtime": "2026-08-25T16:50:08.233Z",
    "size": 646,
    "path": "../public/assets/percent-DnFUPEe0.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:50:08.231Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:50:13.053Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T16:50:13.051Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-BjV1iaKr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-36u/t8/LLibFU3Mj78MNkOI1Uec"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 323,
    "path": "../public/assets/phone-BjV1iaKr.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T16:50:08.232Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T16:50:08.232Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T16:50:08.229Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T16:50:08.231Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T16:50:08.231Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T16:50:08.232Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T16:50:08.232Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T16:50:08.229Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T16:50:08.229Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T16:50:08.232Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T16:50:08.232Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-C4-CAEaO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-VJuTVqp1aBsOatiNhHFR8fxm6hQ"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 31108,
    "path": "../public/assets/profile-C4-CAEaO.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:50:08.239Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:50:13.056Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T16:50:08.230Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-CC-a0txv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-OWuPDfaqaVb8mMrr31wMwT8/40M"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 410,
    "path": "../public/assets/save-CC-a0txv.js"
  },
  "/assets/search-0EAsmD_W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-2MJuGiovSWBzqnUVIWLKcDx19Q4"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 170,
    "path": "../public/assets/search-0EAsmD_W.js"
  },
  "/assets/shield-check-BIJQg8u4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-7AuXwI0VDeP3DQLHA8Osc2dXpQc"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 316,
    "path": "../public/assets/shield-check-BIJQg8u4.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T16:50:08.238Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/truck-C5cZt0H6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-z2i7fM7dgQq4aBRS8DhD6XaZ86Y"',
    "mtime": "2026-08-25T16:50:08.234Z",
    "size": 1109,
    "path": "../public/assets/truck-C5cZt0H6.js"
  },
  "/assets/styles-Dg_0i3xw.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24dd9-DDaO34l1kO+2PdHCxAbTjTDVIzg"',
    "mtime": "2026-08-25T16:50:08.233Z",
    "size": 151001,
    "path": "../public/assets/styles-Dg_0i3xw.css"
  },
  "/assets/user-plus-Cv7Aay6S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-5UyRvvnm2a+YRCc6LCcYNHOwvx8"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 311,
    "path": "../public/assets/user-plus-Cv7Aay6S.js"
  },
  "/assets/users-Cg4diUC1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-o8Xkx8qhQae7ncOdZH5ImJYNcHc"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 307,
    "path": "../public/assets/users-Cg4diUC1.js"
  },
  "/assets/wallet-UPdzpXCF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12bb-rObo7fSP+EYbdFe37quu3LU7IUM"',
    "mtime": "2026-08-25T16:50:08.235Z",
    "size": 4795,
    "path": "../public/assets/wallet-UPdzpXCF.js"
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
