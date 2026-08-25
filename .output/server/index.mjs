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
    "mtime": "2026-08-25T15:55:16.869Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T15:55:16.869Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-BNHfiiWw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c57-Omv53HWDHIIAB78ZmjnQKvrBA1Q"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 3159,
    "path": "../public/assets/InstitutionalWebHeader-BNHfiiWw.js"
  },
  "/assets/activities-BNxE5gnR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-uQSmUiUQj/On3pyWzrDiUekB/5s"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 1196,
    "path": "../public/assets/activities-BNxE5gnR.js"
  },
  "/assets/ProductDetailSheet-CWBa1Jmt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-7VryMw03rczqRwuHnYZRoIWG3FA"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CWBa1Jmt.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T15:55:10.990Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T15:55:10.990Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-C1Mj1hTw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-rt4E3MYXzm+BUO79HEhwvztDES0"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 315,
    "path": "../public/assets/apple-C1Mj1hTw.js"
  },
  "/assets/arrow-up-right-BAGYBHm8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-DNhUn/QZlPBMYVF3ZGPw85jZpZs"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BAGYBHm8.js"
  },
  "/assets/associado-BcBRJYS0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73e9-Ui3trpjzLEecAyQsk3T1iPEy8oo"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 29673,
    "path": "../public/assets/associado-BcBRJYS0.js"
  },
  "/assets/building-2-CyDA-Wa1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-uxz1vxasvCqU7cq33F8E7feZLtY"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 384,
    "path": "../public/assets/building-2-CyDA-Wa1.js"
  },
  "/assets/auth-DyjGuDrv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b75e-JR9kH14IOfwqNGVPYxLSGkwO34s"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 46942,
    "path": "../public/assets/auth-DyjGuDrv.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/calendar-DlM_c5e8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-me9eWG4lUQzG1x9hMlbP50qc0Bg"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 258,
    "path": "../public/assets/calendar-DlM_c5e8.js"
  },
  "/assets/circle-check-CttQtCfp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-FeO3Lg4kNuCHDEZjULiDEs4XWVo"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 174,
    "path": "../public/assets/circle-check-CttQtCfp.js"
  },
  "/assets/circle-x-D8qdMe3k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-zcItQ8nck7hG1tZgreZgD8ApDsw"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 405,
    "path": "../public/assets/circle-x-D8qdMe3k.js"
  },
  "/assets/contato-7Os-rSlI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f84-AV1DUcDq3k92qitkFMCmOMAvar0"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 8068,
    "path": "../public/assets/contato-7Os-rSlI.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-DQ0f8VYg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-hANkSpFaCRSwfdGCcSGwSJehU1I"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 208,
    "path": "../public/assets/credit-card-DQ0f8VYg.js"
  },
  "/assets/download-BKglFUHs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2071-RXh+sWDl21+svTlOyBv+NcPg9q0"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 8305,
    "path": "../public/assets/download-BKglFUHs.js"
  },
  "/assets/dumbbell-DzcALb6F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-6rx9NOf+7fMznPaqfxYfZdTrtY4"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 561,
    "path": "../public/assets/dumbbell-DzcALb6F.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/eye-BSG7Clrs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-VuM579AYwx6km8+oY7h2zMQoFF4"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 252,
    "path": "../public/assets/eye-BSG7Clrs.js"
  },
  "/assets/admin-DeNLOD_F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f87-YmAMLoJku+Ircy0nM9p7UUflubY"',
    "mtime": "2026-08-25T15:55:10.996Z",
    "size": 540551,
    "path": "../public/assets/admin-DeNLOD_F.js"
  },
  "/assets/faq-CEl2q90t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fe9-7pZOSwjWXgoP+2y2YmMMa1Tqj2E"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 8169,
    "path": "../public/assets/faq-CEl2q90t.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T15:55:10.977Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T15:55:10.990Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-uT28tCr7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-M7GVtgSfZWDFt+SPI8MZMdkJl9M"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 350,
    "path": "../public/assets/gift-uT28tCr7.js"
  },
  "/assets/home-CdXSu4hT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b1a-gwSJltZIWKPXaDMO94I6USrkYVc"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 11034,
    "path": "../public/assets/home-CdXSu4hT.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-DWXDgu-Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e4e1-Ii6qxqQ8+QwUN3/HlYgq5lzqXro"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 58593,
    "path": "../public/assets/index-DWXDgu-Y.js"
  },
  "/assets/index-DJvkkBYv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bcc9-HjMJ/zphH5Apu0YYeizNrFLb/oM"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 441545,
    "path": "../public/assets/index-DJvkkBYv.js"
  },
  "/assets/levels-DquPLaHj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-Hlj6c0CBZNy1+mQUedT5dxvJlS0"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 6869,
    "path": "../public/assets/levels-DquPLaHj.js"
  },
  "/assets/link-2-ByD8PNYn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-dajrccoNwnxgUfdL724tbt1/dmk"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 243,
    "path": "../public/assets/link-2-ByD8PNYn.js"
  },
  "/assets/lock-BBR6dj5U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-dNvMBRnzWuEXJIvXjx33rbU5sH4"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 202,
    "path": "../public/assets/lock-BBR6dj5U.js"
  },
  "/assets/log-in-BRYU0OAq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-EZgYiVPIkVrhCYSvSolNSSGfWXQ"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 232,
    "path": "../public/assets/log-in-BRYU0OAq.js"
  },
  "/assets/mail-3ASGP4CX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-yiOgyQyZjW5lNYxnqIsezO4ZJEQ"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 214,
    "path": "../public/assets/mail-3ASGP4CX.js"
  },
  "/assets/map-pin-I86KjR_M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-y9oQhuGBHBSnCFJWbjCSFb9N5vA"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 255,
    "path": "../public/assets/map-pin-I86KjR_M.js"
  },
  "/assets/market-DzaAkmHw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-rWJwX9iQuYNbjPFu/w9Bgm/H2SE"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 26473,
    "path": "../public/assets/market-DzaAkmHw.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BOmPFzl-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"760e-QHdBOnjD8Zaajlp0LlPjzr/bcKo"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 30222,
    "path": "../public/assets/parceiros-BOmPFzl-.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T15:55:16.873Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T15:55:16.878Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/percent-DE7ZD1bc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-oLtW2154HPI2FyXNq1JZufi1mPg"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 646,
    "path": "../public/assets/percent-DE7ZD1bc.js"
  },
  "/assets/phone-FGXOGAAU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-iC+xMhajTz21aXGAx3Iu7g+MYsc"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 323,
    "path": "../public/assets/phone-FGXOGAAU.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T15:55:10.990Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T15:55:10.990Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-Dt0y2u1q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-p/OxvTCep+ynv3GNcoLAfuhm/Pc"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 31108,
    "path": "../public/assets/profile-Dt0y2u1q.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T15:55:10.990Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T15:55:16.879Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T15:55:10.997Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T15:55:10.990Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/save-DW3qom2U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-b/F+oyyHcUEtPlFQLedHOtyv9hw"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 410,
    "path": "../public/assets/save-DW3qom2U.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T15:55:10.990Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/search-B4YKq5NB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-GwwYIiTPjUNEFWHZImAOsdNLsHU"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 170,
    "path": "../public/assets/search-B4YKq5NB.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T15:55:10.997Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/shield-check-BV3-oLPr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-cRPrpzb6usqrlsChKfeHEX9U4Qc"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 316,
    "path": "../public/assets/shield-check-BV3-oLPr.js"
  },
  "/assets/styles-VM69xh3f.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"25082-qp3bGNdbs/glsw/7tQT40L7mQMc"',
    "mtime": "2026-08-25T15:55:10.991Z",
    "size": 151682,
    "path": "../public/assets/styles-VM69xh3f.css"
  },
  "/assets/truck--sf1GDu2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-p/B9MSI6tBnZA5OjC1vR7Ezv75c"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 1109,
    "path": "../public/assets/truck--sf1GDu2.js"
  },
  "/assets/user-plus-DQ51guEB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-pOBUG70wz5PjXtPO52hDcaDE7t8"',
    "mtime": "2026-08-25T15:55:10.992Z",
    "size": 311,
    "path": "../public/assets/user-plus-DQ51guEB.js"
  },
  "/assets/users-X6iV4uWJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-nf1CO/5cpfRkl9usjk2vultCy/w"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 307,
    "path": "../public/assets/users-X6iV4uWJ.js"
  },
  "/assets/wallet-DyM1SFOq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16d4-lfcPPlP4dRzU1mkW6AHgfiUHOZU"',
    "mtime": "2026-08-25T15:55:10.993Z",
    "size": 5844,
    "path": "../public/assets/wallet-DyM1SFOq.js"
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
