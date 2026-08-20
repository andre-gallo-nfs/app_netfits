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
    "mtime": "2026-08-20T21:05:55.504Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"526-6zVsZr6XdQArNr/SYsmqBheO7+0"',
    "mtime": "2026-08-20T21:05:55.504Z",
    "size": 1318,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-DS7Lkbk8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4912-hsNRofM4/0h4kRnKMa4OW0DIDgA"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 18706,
    "path": "../public/assets/ProductDetailSheet-DS7Lkbk8.js"
  },
  "/assets/activities-Bwjd6oVH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-NfSbQmbLK/yY49pazCs6Ttwf4cI"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 1159,
    "path": "../public/assets/activities-Bwjd6oVH.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-bSoGNPb0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-BqmKSPV25xGgTWC3Oq+PHdLrFrw"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 315,
    "path": "../public/assets/apple-bSoGNPb0.js"
  },
  "/assets/arrow-up-right-BbmscTtD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-Uef3kKRGwzs0WlO2/7kyFCnBayA"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BbmscTtD.js"
  },
  "/assets/associado-CVMbmE3R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"63f0-2tUllSW5/eQs47AlGc+hvAYGK8M"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 25584,
    "path": "../public/assets/associado-CVMbmE3R.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/auth-DsM4g-8A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9693-mxzkSWXSDNpyIjyp87yEyOX0re0"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 38547,
    "path": "../public/assets/auth-DsM4g-8A.js"
  },
  "/assets/building-2-DklvOWq5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-M61WyftKDv3qFK5WsP2t6XmBt4E"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 384,
    "path": "../public/assets/building-2-DklvOWq5.js"
  },
  "/assets/chevron-down-DoY8v7lR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"81-IBrLEZlxUxw/dL3GSSzku4ETflc"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 129,
    "path": "../public/assets/chevron-down-DoY8v7lR.js"
  },
  "/assets/check-BE1I1svF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-2jjIFah/RmEpOq737wgHnS+AjJ0"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 120,
    "path": "../public/assets/check-BE1I1svF.js"
  },
  "/assets/circle-check-BXV8mbBQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-ps0KmhqSK9E077OYy3WCpH0xkbw"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 174,
    "path": "../public/assets/circle-check-BXV8mbBQ.js"
  },
  "/assets/circle-question-mark-Cs-_Oqpa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f4-3NdG97ZUBbw4S71rGJrZ//PhgCQ"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 244,
    "path": "../public/assets/circle-question-mark-Cs-_Oqpa.js"
  },
  "/assets/circle-x-B3zBHhbd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-o1FbCsDQIGR2OHvxYvIgxMm5KDU"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 405,
    "path": "../public/assets/circle-x-B3zBHhbd.js"
  },
  "/assets/contato-Cdktr5uZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2374-KA1EYmOa84fQBjjmekPCTtb1xe8"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 9076,
    "path": "../public/assets/contato-Cdktr5uZ.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-20T21:05:51.571Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/copy-DaOHKXAp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-IgcJPvHU4j5SupopAlxMnTzbNp0"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 232,
    "path": "../public/assets/copy-DaOHKXAp.js"
  },
  "/assets/credit-card-CDg1vt_D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-GMC2DXQqocapA5D82dZu4CWgQqk"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 208,
    "path": "../public/assets/credit-card-CDg1vt_D.js"
  },
  "/assets/download-BCHCjsBg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"24d4-4AtWtBI5WkrJx7VvrGJrratkiW0"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 9428,
    "path": "../public/assets/download-BCHCjsBg.js"
  },
  "/assets/download-nMlCS1Hh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-6yhr/QgUq1WgyyWsKrRTXMtZo7U"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 233,
    "path": "../public/assets/download-nMlCS1Hh.js"
  },
  "/assets/admin-D5famllX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"80679-KGKgTNSxaAKn/ZaJF+KOdVMdF48"',
    "mtime": "2026-08-20T21:05:51.577Z",
    "size": 525945,
    "path": "../public/assets/admin-D5famllX.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-20T21:05:51.569Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/dumbbell-D5wzW2LF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-x3/kHRw6raQRzmw+UQQns3NY56Q"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 561,
    "path": "../public/assets/dumbbell-D5wzW2LF.js"
  },
  "/assets/eye-CqHkIOR2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-QaaK+DGR7lSKYyxt4O7TLQQAUX8"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 252,
    "path": "../public/assets/eye-CqHkIOR2.js"
  },
  "/assets/faq-XpCvH2l7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"24ea-LUXwBDmpndLbOeN/2tGJfQg9pW0"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 9450,
    "path": "../public/assets/faq-XpCvH2l7.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-20T21:05:51.569Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-BmqeHCnr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-76JbR3U58etdlMPr8UUWsfBpXvM"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 350,
    "path": "../public/assets/gift-BmqeHCnr.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/heart-CTACdW7B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-v+9LdiiUHUplT/VE9hBjJjTNg34"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 259,
    "path": "../public/assets/heart-CTACdW7B.js"
  },
  "/assets/home-BXfR8G97.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"34bc-rs6Xv2tiwqOW69IFrjDyJIbIQek"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 13500,
    "path": "../public/assets/home-BXfR8G97.js"
  },
  "/assets/index-BZ8-P-1o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dfaf-+YTSzTqUzyveJfdm/r9ddC1a6ks"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 57263,
    "path": "../public/assets/index-BZ8-P-1o.js"
  },
  "/assets/levels-DGEBUNVz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-wfqbf5NHI5yzy4MmTa0wXjd2CqY"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 6869,
    "path": "../public/assets/levels-DGEBUNVz.js"
  },
  "/assets/link-2-DREUgaMe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-gogKBmEwlwQAS82tJ6AvCYD7uL0"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 243,
    "path": "../public/assets/link-2-DREUgaMe.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/lock-ewf_FP6G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-MvW56N5msZFIxtxlCfyPBOkdJv0"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 202,
    "path": "../public/assets/lock-ewf_FP6G.js"
  },
  "/assets/log-in-DnZNfZzk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-s5+H/fuvsSn9j8OB1mxzEXex6nU"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 232,
    "path": "../public/assets/log-in-DnZNfZzk.js"
  },
  "/assets/mail-DKLpinn4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-seB2IBacMmkl5ZKU57gLlymnyMg"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 214,
    "path": "../public/assets/mail-DKLpinn4.js"
  },
  "/assets/map-pin-Dye8oOYO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-tazndtd/gib7FauAl+wMEqAzr3g"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 255,
    "path": "../public/assets/map-pin-Dye8oOYO.js"
  },
  "/assets/index-ktZZmCvu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"62af0-JVwplcEkxCDuLmudgylvMNOHLp8"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 404208,
    "path": "../public/assets/index-ktZZmCvu.js"
  },
  "/assets/market-KeqVbDWa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6796-Ry6kRM4NJFmwEjiU5TM361wrjtQ"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 26518,
    "path": "../public/assets/market-KeqVbDWa.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-20T21:05:55.509Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-20T21:05:55.512Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/operational-params-store-CdNKMSBd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68b-jGEEBOHHla7JhU614Pcl7wqQHVk"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 1675,
    "path": "../public/assets/operational-params-store-CdNKMSBd.js"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/percent-DanhYhxt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-iaS8nQXjhTNyPAKDlVXiOXiM4CI"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 646,
    "path": "../public/assets/percent-DanhYhxt.js"
  },
  "/assets/parceiros-CloD5NGg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5ec0-QJhFpHhAcwlLfaMjcNRMwuLOsJM"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 24256,
    "path": "../public/assets/parceiros-CloD5NGg.js"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-20T21:05:51.571Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-20T21:05:51.571Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-avatar-BoojUtAr.jpg": {
    "type": "image/jpeg",
    "etag": '"5d71-BZlBQdaIjJXxjzJv9I6Xh6y20aY"',
    "mtime": "2026-08-20T21:05:51.564Z",
    "size": 23921,
    "path": "../public/assets/profile-avatar-BoojUtAr.jpg"
  },
  "/assets/profile-CCIZQLu4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13285-IZjCWJvworBT+X5Ww7K2t2fiorI"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 78469,
    "path": "../public/assets/profile-CCIZQLu4.js"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-20T21:05:51.579Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-20T21:05:51.579Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-20T21:05:51.572Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-JkMRnQES.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-RkPOZHn9/sH6VpySHPrC44XnHd0"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 410,
    "path": "../public/assets/save-JkMRnQES.js"
  },
  "/assets/search-C9SJVtuT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-uuETDh/53+vD3dpavQWIIoDOm3w"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 170,
    "path": "../public/assets/search-C9SJVtuT.js"
  },
  "/assets/share-2-D9YPStz7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"161-UWoJg1F/S0tlJf/aL/EO64Or034"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 353,
    "path": "../public/assets/share-2-D9YPStz7.js"
  },
  "/assets/shield-check-BqqxnVsQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-5eSUIW61h+ZQ9iNeMn6cP/lI2k4"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 316,
    "path": "../public/assets/shield-check-BqqxnVsQ.js"
  },
  "/assets/styles-BaIvwiSR.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"22a27-vavj5jiW97avLPMctxRD2BDhJU4"',
    "mtime": "2026-08-20T21:05:51.573Z",
    "size": 141863,
    "path": "../public/assets/styles-BaIvwiSR.css"
  },
  "/assets/truck-DTt2mg6E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ed-e0Gf0jfNYt8x2Bz/tHXfDMlKaYA"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 1261,
    "path": "../public/assets/truck-DTt2mg6E.js"
  },
  "/assets/user-BEmEZB7T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2dd-KcSvjwx9o7emz5zGgkFCdSAqgaw"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 733,
    "path": "../public/assets/user-BEmEZB7T.js"
  },
  "/assets/users-BX-TYjZc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-5ogwEeVxGf4nEhUgQHlIrMqYNNM"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 307,
    "path": "../public/assets/users-BX-TYjZc.js"
  },
  "/assets/zap-fwuWRgUd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-jGlTwJWlQ26NB3Wm7cYu1HQo1LM"',
    "mtime": "2026-08-20T21:05:51.574Z",
    "size": 263,
    "path": "../public/assets/zap-fwuWRgUd.js"
  },
  "/assets/wallet-B6wKUIHR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141e-utN5Bo0t4gBS1UPEbA1GJqStIRw"',
    "mtime": "2026-08-20T21:05:51.575Z",
    "size": 5150,
    "path": "../public/assets/wallet-B6wKUIHR.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-20T21:05:55.521Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
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
