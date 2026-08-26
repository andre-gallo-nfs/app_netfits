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
    "mtime": "2026-08-26T20:26:14.653Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-26T20:26:14.653Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/activities--HSE7UAF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-QY5XqGccSCo9k3hnyNK2XMTYCnI"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 1196,
    "path": "../public/assets/activities--HSE7UAF.js"
  },
  "/assets/InstitutionalWebHeader-DkSIexoy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-o+xiF65M3Khksu43lu6VYyc7fcA"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-DkSIexoy.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/ProductDetailSheet-BuBqa-hn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-kbXcql0FvjJf3eiGsM5d/heM9bk"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-BuBqa-hn.js"
  },
  "/assets/apple-CejEMfda.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-bcY0qnpad0wyFODMKiANc2Respc"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 315,
    "path": "../public/assets/apple-CejEMfda.js"
  },
  "/assets/arrow-up-right-Dcmy9KTl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-NkRE/ghguM8aB2r4vJPfZboujTg"',
    "mtime": "2026-08-26T20:26:09.814Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Dcmy9KTl.js"
  },
  "/assets/associado-buCXeza6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73c8-XTx3XAz5+eADikLIJD7KUlLBA3E"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 29640,
    "path": "../public/assets/associado-buCXeza6.js"
  },
  "/assets/calendar-DnB8gQzy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-JAI+SvRlaHiSANjBzVwp9qiUyR8"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 258,
    "path": "../public/assets/calendar-DnB8gQzy.js"
  },
  "/assets/circle-check-3i1M01Ed.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-fz2onwALBM8ZnCfTOlr6HyfCS34"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 174,
    "path": "../public/assets/circle-check-3i1M01Ed.js"
  },
  "/assets/circle-x-Dgd57MS8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-e1lDWKtbg85glYZW8B4UTWQzlII"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 405,
    "path": "../public/assets/circle-x-Dgd57MS8.js"
  },
  "/assets/auth-BDJkGW0_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b7d8-WMxYPNKkwEu+DuKEUulHpEbbSWE"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 47064,
    "path": "../public/assets/auth-BDJkGW0_.js"
  },
  "/assets/contato-BSsVUc99.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f58-8/VKE3lBgLMj8PkJnv/IbcV+OdQ"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 8024,
    "path": "../public/assets/contato-BSsVUc99.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-26T20:26:09.810Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-DZq7KWL-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-/txfXSSIssRMF7n5kg4+4Jc/VZc"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 208,
    "path": "../public/assets/credit-card-DZq7KWL-.js"
  },
  "/assets/download-40cYC3k-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-wr1rNmrQLNpo6hweBKn4HD35YFE"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 8261,
    "path": "../public/assets/download-40cYC3k-.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/dumbbell-HWNGj84P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-kNPJ29tnStcghi5UFOkg8CBdM0U"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 561,
    "path": "../public/assets/dumbbell-HWNGj84P.js"
  },
  "/assets/eye-IV3WWFnA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-iDCk1teOVVywVT9nNWGOXFGuhGY"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 252,
    "path": "../public/assets/eye-IV3WWFnA.js"
  },
  "/assets/faq-BetvmNl2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-7JWKe4xdYcVdJV7Uf8+BoB2+nyI"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 8136,
    "path": "../public/assets/faq-BetvmNl2.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-26T20:26:09.810Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-D94xp-kL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"87059-47fpSQkLlbpilUxQSEc2pUxgkNs"',
    "mtime": "2026-08-26T20:26:09.816Z",
    "size": 553049,
    "path": "../public/assets/admin-D94xp-kL.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-26T20:26:09.810Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-26T20:26:09.810Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-uaj0yC61.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-6P3ZnsavJVUIjzbWDQ6WmeM8gRc"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 350,
    "path": "../public/assets/gift-uaj0yC61.js"
  },
  "/assets/home-CYEu0EfJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ad3-mSp4Q9BiwW8L46ycM7SplPqHqVU"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 10963,
    "path": "../public/assets/home-CYEu0EfJ.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-C2hL6rQs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-gXm8g0539u24bXVJbeLNigaU6/g"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 61206,
    "path": "../public/assets/index-C2hL6rQs.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/index-COggrKtz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c575-kiziva9faouiv+GNqNgUPqL6+zM"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 443765,
    "path": "../public/assets/index-COggrKtz.js"
  },
  "/assets/levels-EeJ_7Hv4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-zOZllp+EB64IlP0FqEHhwYi+mzg"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 6869,
    "path": "../public/assets/levels-EeJ_7Hv4.js"
  },
  "/assets/link-2-CriIwQ4e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-kEZIlAPwwGPvtBjbWHQ4obHQVHw"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 243,
    "path": "../public/assets/link-2-CriIwQ4e.js"
  },
  "/assets/log-in-COkQ2rFI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-4O6NsD+Omgmp746TcARN4MC4J0g"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 232,
    "path": "../public/assets/log-in-COkQ2rFI.js"
  },
  "/assets/lock-Cl_gIsaB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-wcCNNfHooOuuXF2vrZzMdClRxxA"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 202,
    "path": "../public/assets/lock-Cl_gIsaB.js"
  },
  "/assets/mail-DAdGBmfm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-RLvEnjSEbaBBT4PfYUO2/x8GClE"',
    "mtime": "2026-08-26T20:26:09.814Z",
    "size": 214,
    "path": "../public/assets/mail-DAdGBmfm.js"
  },
  "/assets/map-pin-G8mxpiFT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-1U2alZG+MSdtYWcIPGS2cxCqhcU"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 255,
    "path": "../public/assets/map-pin-G8mxpiFT.js"
  },
  "/assets/market-DKMONEeG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-gO6t+Q34HS5OD35CkQt/U+0XUvI"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 26473,
    "path": "../public/assets/market-DKMONEeG.js"
  },
  "/assets/parceiros-4sb2Njrb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-XZBnr4vrZ5Cj5wzoWX8pgw3Uyec"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 29316,
    "path": "../public/assets/parceiros-4sb2Njrb.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-26T20:26:09.814Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/percent-Cb2FpqDs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-P3bdpvby16ufhrX/oThnF1Qg0G4"',
    "mtime": "2026-08-26T20:26:09.812Z",
    "size": 646,
    "path": "../public/assets/percent-Cb2FpqDs.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T20:26:14.660Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-26T20:26:14.665Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-D3Bom9bL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-ZUIRn/e3qubi40/3TQjVc5yG1ec"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 323,
    "path": "../public/assets/phone-D3Bom9bL.js"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-26T20:26:09.810Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-26T20:26:09.814Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-DHZJJZmh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-7X8bfLeOTjx+JoHtZ2QdEEUx4rI"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 31108,
    "path": "../public/assets/profile-DHZJJZmh.js"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-26T20:26:09.810Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-26T20:26:09.810Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T20:26:09.818Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-26T20:26:09.810Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-26T20:26:14.667Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-DA2pYGLz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-W75vTajCpEPqbnY+FlVIgNSPS+M"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 410,
    "path": "../public/assets/save-DA2pYGLz.js"
  },
  "/assets/search-6zMGhgsH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-EcSczqtgImM3Z53Hyis5u2NFwwk"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 170,
    "path": "../public/assets/search-6zMGhgsH.js"
  },
  "/assets/shield-check-DODqqYpX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-cwEfMkv3Vx8L9rPgyEVJvrzOvTA"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 316,
    "path": "../public/assets/shield-check-DODqqYpX.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-26T20:26:09.818Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/styles-BLmDDExP.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"26aa5-rMjNrXj9LB7jAC6CgXLBDUqobVQ"',
    "mtime": "2026-08-26T20:26:09.811Z",
    "size": 158373,
    "path": "../public/assets/styles-BLmDDExP.css"
  },
  "/assets/truck-aA_G3CVe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-KKJEnbg3NMmqPBg+Iv3ok4tBOgg"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 1109,
    "path": "../public/assets/truck-aA_G3CVe.js"
  },
  "/assets/user-plus-Xbu3vCKv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-OGpd4f48r1h/sK+WQrA3qPB23KU"',
    "mtime": "2026-08-26T20:26:09.813Z",
    "size": 311,
    "path": "../public/assets/user-plus-Xbu3vCKv.js"
  },
  "/assets/users-Bpqp3Sn2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-ljL1bhrvu2fwT7c2xqFYhAELZFM"',
    "mtime": "2026-08-26T20:26:09.814Z",
    "size": 307,
    "path": "../public/assets/users-Bpqp3Sn2.js"
  },
  "/assets/wallet-CWRdzAyR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-oEIraE9QXl0fK58GC6UrXn1lgeg"',
    "mtime": "2026-08-26T20:26:09.814Z",
    "size": 4687,
    "path": "../public/assets/wallet-CWRdzAyR.js"
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
