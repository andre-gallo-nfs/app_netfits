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
    "mtime": "2026-08-25T16:51:33.117Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T16:51:33.117Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-CUVdsFvb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-vQYYLUZzyDWyZXKk22ec7yovUZg"',
    "mtime": "2026-08-25T16:51:28.770Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-CUVdsFvb.js"
  },
  "/assets/ProductDetailSheet-DwDqWJw4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-4Vr5SLUHawfNi/XLrj3DPA2hDKs"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-DwDqWJw4.js"
  },
  "/assets/activities-Cmtblbbo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-nfnvbof3/UGL5IoWEQRy+Nhws8w"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 1196,
    "path": "../public/assets/activities-Cmtblbbo.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T16:51:28.765Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-CdD3Vh0U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-se9EuuM76wr2Bf5zqSPPAE+N6dQ"',
    "mtime": "2026-08-25T16:51:28.770Z",
    "size": 315,
    "path": "../public/assets/apple-CdD3Vh0U.js"
  },
  "/assets/arrow-up-right-ClnAWd2y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-UQ42+2AAIi8KSyg5mR9bv49PqQg"',
    "mtime": "2026-08-25T16:51:28.773Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-ClnAWd2y.js"
  },
  "/assets/associado-BgowaEm0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73c8-L5sR8wJVWg3CcMq682KkQ2I+4TA"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 29640,
    "path": "../public/assets/associado-BgowaEm0.js"
  },
  "/assets/auth-B6OjAIMv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b75e-Qoks5Db8Y3+QR5noBcqIxrjn9ms"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 46942,
    "path": "../public/assets/auth-B6OjAIMv.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/calendar-CXgOwciN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-SzdGF6c4Tm2a3K/hp+9D7M8bvXs"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 258,
    "path": "../public/assets/calendar-CXgOwciN.js"
  },
  "/assets/circle-check-ByBdQVsR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-XSgizQs2SUxquyjPU75mTnoTCRc"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 174,
    "path": "../public/assets/circle-check-ByBdQVsR.js"
  },
  "/assets/circle-x-oZ8jhX7A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-ClrOaL+VJJXWrJnEggdzwFUUcwI"',
    "mtime": "2026-08-25T16:51:28.771Z",
    "size": 405,
    "path": "../public/assets/circle-x-oZ8jhX7A.js"
  },
  "/assets/contato-B30QnPFq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f63-ULq49geXiQFibkaU23aqZJJ/Ap8"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 8035,
    "path": "../public/assets/contato-B30QnPFq.js"
  },
  "/assets/credit-card-qyKUaR7E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-4ZbcFCnna5riGkROdi1e+a95obQ"',
    "mtime": "2026-08-25T16:51:28.773Z",
    "size": 208,
    "path": "../public/assets/credit-card-qyKUaR7E.js"
  },
  "/assets/download-BP_gPPPs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2050-T30gYioQipX+Y3aQOl+aXejKUKI"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 8272,
    "path": "../public/assets/download-BP_gPPPs.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T16:51:28.763Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-av_hyLtO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-E6/b07lx9ciKmAn13HOU4ktgon4"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 561,
    "path": "../public/assets/dumbbell-av_hyLtO.js"
  },
  "/assets/eye-ADt9Fpic.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-dHnSCRjGAaQRZAdzwLPH+WKsM1M"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 252,
    "path": "../public/assets/eye-ADt9Fpic.js"
  },
  "/assets/faq-9XKd4Gf0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-UIOUBZGsUH8o5nLnMDR4KfZ3J+k"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 8136,
    "path": "../public/assets/faq-9XKd4Gf0.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-BRgTIGGS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f66-yaU8QWunSzFa6jG9YSPxNEOW3U4"',
    "mtime": "2026-08-25T16:51:28.776Z",
    "size": 540518,
    "path": "../public/assets/admin-BRgTIGGS.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T16:51:28.763Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T16:51:28.766Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-CGOHL_6H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-QVvqi5XWr+RjNieImvSQL6VmVRU"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 350,
    "path": "../public/assets/gift-CGOHL_6H.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T16:51:28.767Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/home-FsHqNidV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2af4-TVgiqFdqq+Mpf9EfNCca5eYCQvU"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 10996,
    "path": "../public/assets/home-FsHqNidV.js"
  },
  "/assets/index-CnVUHy2a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d775-+Yp7LMFaAR73HpIs3/csRpsCAGw"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 55157,
    "path": "../public/assets/index-CnVUHy2a.js"
  },
  "/assets/index-DeZTczQF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bc91-AXCutxYoY7fIs85pa+bslQrmBtQ"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 441489,
    "path": "../public/assets/index-DeZTczQF.js"
  },
  "/assets/levels-QQX0hL6J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-DWsHeIAjTyYp7CCbYctXrflT+0E"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 6869,
    "path": "../public/assets/levels-QQX0hL6J.js"
  },
  "/assets/link-2-nUJkFe2D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-PuLFnXQR1uAvJoFKc19BexsPlXM"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 243,
    "path": "../public/assets/link-2-nUJkFe2D.js"
  },
  "/assets/lock-V5pnMorj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-/O9JnFgLRh2P0+u1ygQEA1VSJi4"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 202,
    "path": "../public/assets/lock-V5pnMorj.js"
  },
  "/assets/log-in-CUNY8hcZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-tfx28s7qqcrDF0N69a/Q11yeeYw"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 232,
    "path": "../public/assets/log-in-CUNY8hcZ.js"
  },
  "/assets/mail-UTU__hDU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-eiJKcecEYMCB/Yiz0jbaOAek+M4"',
    "mtime": "2026-08-25T16:51:28.773Z",
    "size": 214,
    "path": "../public/assets/mail-UTU__hDU.js"
  },
  "/assets/map-pin-D5l2U7ac.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-4uX5Ye98j5IUmQwLskS8FmxlI+k"',
    "mtime": "2026-08-25T16:51:28.773Z",
    "size": 255,
    "path": "../public/assets/map-pin-D5l2U7ac.js"
  },
  "/assets/market-J6yz0Wdl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-GJCRx7cUacWL5+zkHUsKnm1cKi4"',
    "mtime": "2026-08-25T16:51:28.770Z",
    "size": 26473,
    "path": "../public/assets/market-J6yz0Wdl.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T16:51:28.773Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DZvaWdeF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-NJDUXFHyeBM9KQaXb2dlXsFdhfw"',
    "mtime": "2026-08-25T16:51:28.770Z",
    "size": 29316,
    "path": "../public/assets/parceiros-DZvaWdeF.js"
  },
  "/assets/percent-BpY9cGLW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-BbITEDuAR5la1W79wiaK1xmk6Nw"',
    "mtime": "2026-08-25T16:51:28.769Z",
    "size": 646,
    "path": "../public/assets/percent-BpY9cGLW.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:51:33.119Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T16:51:28.763Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T16:51:33.121Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-Bn62JrTz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-mzW4hZlh+GRX+4BaAxHnFmJOCUc"',
    "mtime": "2026-08-25T16:51:28.773Z",
    "size": 323,
    "path": "../public/assets/phone-Bn62JrTz.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T16:51:28.766Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T16:51:28.766Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T16:51:28.766Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-Bf_1ygGS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-PcgWRknpJK3r0XEPcLQKDK4U55o"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 31108,
    "path": "../public/assets/profile-Bf_1ygGS.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T16:51:28.765Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T16:51:28.766Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T16:51:28.764Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:51:33.126Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T16:51:28.806Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/save-D5F2TGg0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-zGVHtAGV7JDzHeyW3jkx2h2zu/o"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 410,
    "path": "../public/assets/save-D5F2TGg0.js"
  },
  "/assets/search-CUFiOQ5a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-K9da7+jLEj2UXQOGsepJl5K6riY"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 170,
    "path": "../public/assets/search-CUFiOQ5a.js"
  },
  "/assets/shield-check-B3LMZbqg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-WN3YDS8JXSCawbgAGeigSMrV/PI"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 316,
    "path": "../public/assets/shield-check-B3LMZbqg.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T16:51:28.780Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/styles-Dg_0i3xw.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24dd9-DDaO34l1kO+2PdHCxAbTjTDVIzg"',
    "mtime": "2026-08-25T16:51:28.768Z",
    "size": 151001,
    "path": "../public/assets/styles-Dg_0i3xw.css"
  },
  "/assets/truck-CSiG5sQr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-JcWvxXhZqxpiaBKj8zqKnjjFmGs"',
    "mtime": "2026-08-25T16:51:28.770Z",
    "size": 1109,
    "path": "../public/assets/truck-CSiG5sQr.js"
  },
  "/assets/user-plus-nviq7VnU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-z9mtqt1ypKhWmUHekA7SO8DRcT8"',
    "mtime": "2026-08-25T16:51:28.772Z",
    "size": 311,
    "path": "../public/assets/user-plus-nviq7VnU.js"
  },
  "/assets/users-CZHj8xtU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-3nC5fPIz85MHb8Cbz8KwoVWsDqg"',
    "mtime": "2026-08-25T16:51:28.773Z",
    "size": 307,
    "path": "../public/assets/users-CZHj8xtU.js"
  },
  "/assets/wallet-C1rTsgQf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-6uUQPin7AAIFb9jk5wN+T4opqvY"',
    "mtime": "2026-08-25T16:51:28.773Z",
    "size": 4687,
    "path": "../public/assets/wallet-C1rTsgQf.js"
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
