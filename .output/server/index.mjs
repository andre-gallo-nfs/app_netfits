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
    "mtime": "2026-08-25T16:24:05.100Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/assets/InstitutionalWebHeader-DZXb-6ew.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-5ZSEJhPTxgVFfDSeDHsfeJgfaR4"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-DZXb-6ew.js"
  },
  "/assets/ProductDetailSheet-CuyqM6u4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-eXKPKi78iz8zVxVp/6H3pTI/vlo"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CuyqM6u4.js"
  },
  "/assets/activities-DhAY3f3G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-a7008zqvxavFiPC87nTqtp06afc"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 1196,
    "path": "../public/assets/activities-DhAY3f3G.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-BB0BdcXu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-SihHA52ED4kokoXi8Wiqf68IWrc"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 315,
    "path": "../public/assets/apple-BB0BdcXu.js"
  },
  "/assets/arrow-up-right-BVLLfHpQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-Uehe1Y/EweIgS5auvFmEECfmwNo"',
    "mtime": "2026-08-25T16:24:00.929Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BVLLfHpQ.js"
  },
  "/assets/associado-NfbtTl8o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73e9-k95jEs8AixdU3v64VqQF7GFpD84"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 29673,
    "path": "../public/assets/associado-NfbtTl8o.js"
  },
  "/assets/auth-6OIyOovV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b75e-MgMBpMwsotYXiNq+Ep+4+rnyr+g"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 46942,
    "path": "../public/assets/auth-6OIyOovV.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/building-2-BLzWrymp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-KagQMdl363h85rQCXJgSqnVtccM"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 384,
    "path": "../public/assets/building-2-BLzWrymp.js"
  },
  "/assets/calendar-Dqx0VRTp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-hguLNbXRaQ8CYBfoBI7vDcxwnMw"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 258,
    "path": "../public/assets/calendar-Dqx0VRTp.js"
  },
  "/assets/circle-check-HvhpdZSD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-iOZ6APpvfYvwYMIbT0crncNiSHM"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 174,
    "path": "../public/assets/circle-check-HvhpdZSD.js"
  },
  "/assets/circle-x-BMqRqTBt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-DEwFIwO8cRwdvgVioGff3LI/eP8"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 405,
    "path": "../public/assets/circle-x-BMqRqTBt.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-7Sf22ey0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-tyQEtWieMdBcRFa+LgAAramXibY"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 8068,
    "path": "../public/assets/contato-7Sf22ey0.js"
  },
  "/assets/credit-card-D2wawEJs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-jHuNgNI8o1UI2DjX/wrQb/k/Wxk"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 208,
    "path": "../public/assets/credit-card-D2wawEJs.js"
  },
  "/assets/download-CI6DNw--.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-fjADcIEty4whsntG2aiV8yfe/X4"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 8305,
    "path": "../public/assets/download-CI6DNw--.js"
  },
  "/assets/dumbbell-CZ4kQKle.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-IACiNB80YHlY33r7hwNwKZxOBRA"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CZ4kQKle.js"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T16:24:05.101Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/eye-CH7NwvwR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-cKXJ9S9NI9u0E2VprTUPa6dZAgk"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 252,
    "path": "../public/assets/eye-CH7NwvwR.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-DHn4Ovol.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f87-t1/9NIU+0V3ma7Qn2ch1pJDTsnI"',
    "mtime": "2026-08-25T16:24:00.930Z",
    "size": 540551,
    "path": "../public/assets/admin-DHn4Ovol.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T16:24:00.911Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T16:24:00.922Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T16:24:00.922Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/faq-B3yj0SY0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-sp0hYOzTQ8Nx0BmVvRSao6ODhQQ"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 8169,
    "path": "../public/assets/faq-B3yj0SY0.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-CjL5EwGR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-rl117oK0hCcQRaTrfoHUQ5ZnSwk"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 350,
    "path": "../public/assets/gift-CjL5EwGR.js"
  },
  "/assets/home-8WCexGsZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b1a-yRxxea2vE9KG6lEm1NlKjdxOAUQ"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 11034,
    "path": "../public/assets/home-8WCexGsZ.js"
  },
  "/assets/index-CFRuRX1j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dd72-Rqrb+X7QMXGiGTD1bvdciC7s3mg"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 56690,
    "path": "../public/assets/index-CFRuRX1j.js"
  },
  "/assets/levels-CnHYyNI6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-XXM+IESfqapDZhibWCaxyNe4rAM"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 6869,
    "path": "../public/assets/levels-CnHYyNI6.js"
  },
  "/assets/link-2-BF9kq48n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-9ncZPQz8i65X13qzpGMFZofUPNI"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 243,
    "path": "../public/assets/link-2-BF9kq48n.js"
  },
  "/assets/lock-QwL4x1Ek.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-Znj4jaCrD+XhP0n9ub2BHChIuu0"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 202,
    "path": "../public/assets/lock-QwL4x1Ek.js"
  },
  "/assets/log-in-CZH6DSex.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-uztDkmwAbAfpHea0+caWxokCeN0"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 232,
    "path": "../public/assets/log-in-CZH6DSex.js"
  },
  "/assets/mail-CIH8bF74.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-3+cnI+HVOTSnoanjO38sHpz7SjI"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 214,
    "path": "../public/assets/mail-CIH8bF74.js"
  },
  "/assets/index-CoVzY-Ru.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bcc9-+qqc+JzqwasBrTjWgp9NbUWFpHU"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 441545,
    "path": "../public/assets/index-CoVzY-Ru.js"
  },
  "/assets/map-pin-B6dz50Y_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-R47TwXNtf1Zy5ZDhGZq04Nxxscg"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 255,
    "path": "../public/assets/map-pin-B6dz50Y_.js"
  },
  "/assets/market-CObkA92R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-gsP6HDQEM6hYzikifgxSVaQLcBo"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 26473,
    "path": "../public/assets/market-CObkA92R.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T16:24:00.929Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DFwp771c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72a5-u5ELN+zcPw9rZFidtsCe55ByG/c"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 29349,
    "path": "../public/assets/parceiros-DFwp771c.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:24:00.929Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:24:05.108Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T16:24:05.111Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-N77ox9GW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-CELIOoLS3RjXG5iaXXD7pvDeKrw"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 646,
    "path": "../public/assets/percent-N77ox9GW.js"
  },
  "/assets/phone-D7Z4N4sY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-LjFi68X1Oqte8n1UV5YOqswKDiQ"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 323,
    "path": "../public/assets/phone-D7Z4N4sY.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T16:24:00.923Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T16:24:00.923Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-Cc6k7swT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-wEtZ7YEluzRbCztGF1gJEKFojxE"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 31108,
    "path": "../public/assets/profile-Cc6k7swT.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T16:24:00.923Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T16:24:00.926Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T16:24:00.923Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:24:00.934Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:24:05.112Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T16:24:00.925Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-BxpJPqUm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-bTL3/eV8G81ndhmDIoZkkNRrX44"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 410,
    "path": "../public/assets/save-BxpJPqUm.js"
  },
  "/assets/search-B5cAEjap.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-3a9zL63uzX3rOWd5PFOgkk4/K04"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 170,
    "path": "../public/assets/search-B5cAEjap.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T16:24:00.933Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/shield-check-BL76b0Pf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-wBpXS5IPZZ/kKaYjn+/bSiwgkQg"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 316,
    "path": "../public/assets/shield-check-BL76b0Pf.js"
  },
  "/assets/truck-BnRHEjjq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-4c7/GGDBKs718zmZh7G3n+rtMFY"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 1109,
    "path": "../public/assets/truck-BnRHEjjq.js"
  },
  "/assets/user-plus-wy6Z0xMP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-0JE/jHOxuDN0HA8IHOb32yhwbk8"',
    "mtime": "2026-08-25T16:24:00.928Z",
    "size": 311,
    "path": "../public/assets/user-plus-wy6Z0xMP.js"
  },
  "/assets/styles-C1aCTfva.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24ee2-Rng1ax4RocokEZb1FLzYTFMFubs"',
    "mtime": "2026-08-25T16:24:00.927Z",
    "size": 151266,
    "path": "../public/assets/styles-C1aCTfva.css"
  },
  "/assets/users-0ytcXfWZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-1w6157ydCfDsTKyj9ZM11KrFfwE"',
    "mtime": "2026-08-25T16:24:00.929Z",
    "size": 307,
    "path": "../public/assets/users-0ytcXfWZ.js"
  },
  "/assets/wallet-M3oOeE-J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-ajJy0ZVIWlmj8Ns77UGlEjQ30qs"',
    "mtime": "2026-08-25T16:24:00.929Z",
    "size": 5844,
    "path": "../public/assets/wallet-M3oOeE-J.js"
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
