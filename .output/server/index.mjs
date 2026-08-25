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
    "mtime": "2026-08-25T17:15:09.080Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T17:15:09.080Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/ProductDetailSheet-BHgAXBZl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-AaGxxZX2UEZSqPSd3uS4Tv/EATY"',
    "mtime": "2026-08-25T17:15:04.623Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-BHgAXBZl.js"
  },
  "/assets/activities-C80NYc_A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-mwKymPdWd+PkBxi4nosOsire9Ho"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 1196,
    "path": "../public/assets/activities-C80NYc_A.js"
  },
  "/assets/InstitutionalWebHeader-BkB6XfUX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-s/qsuGn+qVaFvN+xW7Pob127Q7w"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-BkB6XfUX.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-DHKokxDE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-ubGHB6kHqxPYnI+4jmdZJXz3oEY"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 315,
    "path": "../public/assets/apple-DHKokxDE.js"
  },
  "/assets/arrow-up-right-CU3AKU3L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-x6L5V8hMs+ZEvKZX93EeFNxctcM"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CU3AKU3L.js"
  },
  "/assets/associado-ChdTrnvL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73c8-XzpN+l+P/9RfER3IP1Pbh4b1YzY"',
    "mtime": "2026-08-25T17:15:04.614Z",
    "size": 29640,
    "path": "../public/assets/associado-ChdTrnvL.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/auth-CzW6Gpi8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b75e-lJWmHJ9whtrEy0aelo0mnE1UCVo"',
    "mtime": "2026-08-25T17:15:04.614Z",
    "size": 46942,
    "path": "../public/assets/auth-CzW6Gpi8.js"
  },
  "/assets/calendar-CFk1xF3W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-F0j1/cXU3OiyfvfXFPgqsDatRVs"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 258,
    "path": "../public/assets/calendar-CFk1xF3W.js"
  },
  "/assets/circle-check-BUY2ln3J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-4m7JOT/w+w79dKO+VGnFE5Fin38"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 174,
    "path": "../public/assets/circle-check-BUY2ln3J.js"
  },
  "/assets/circle-x-CJAqRxKT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-0pqqWmZHCGV9olTSI81QHtcKCMg"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 405,
    "path": "../public/assets/circle-x-CJAqRxKT.js"
  },
  "/assets/credit-card-DhN0-edK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-tWiipjVv8ASUBlAiOs5inWk1lCI"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 208,
    "path": "../public/assets/credit-card-DhN0-edK.js"
  },
  "/assets/contato-CO8zcHqg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f63-lnlbrSsrPECMuHeZbduZdyfopQ0"',
    "mtime": "2026-08-25T17:15:04.615Z",
    "size": 8035,
    "path": "../public/assets/contato-CO8zcHqg.js"
  },
  "/assets/download-BtWy9Mxx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2050-X4AvJxgseiHvHrHzSC+aFssLvMs"',
    "mtime": "2026-08-25T17:15:04.615Z",
    "size": 8272,
    "path": "../public/assets/download-BtWy9Mxx.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T17:15:04.610Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-CwDA7vyI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-3QJu0r3+qV0WcF0Wb2XtNfZ0hz4"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CwDA7vyI.js"
  },
  "/assets/eye-C6XJOJvJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-8vYhGkt0ENUjQEcP6icJryf4xEM"',
    "mtime": "2026-08-25T17:15:04.614Z",
    "size": 252,
    "path": "../public/assets/eye-C6XJOJvJ.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/faq-BWR5Rkl5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-zZu7gaik09v6SkAnhZB1Ig4rZ4w"',
    "mtime": "2026-08-25T17:15:04.615Z",
    "size": 8136,
    "path": "../public/assets/faq-BWR5Rkl5.js"
  },
  "/assets/admin-DVYFk7kC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83f66-wQWL5GfaP4YvUHBYuPC/fM/whD4"',
    "mtime": "2026-08-25T17:15:04.626Z",
    "size": 540518,
    "path": "../public/assets/admin-DVYFk7kC.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T17:15:04.610Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T17:15:04.610Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gift-CyhRxszs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-DL+exqMgbVPNXpnqw9Mvaw0e4vs"',
    "mtime": "2026-08-25T17:15:04.615Z",
    "size": 350,
    "path": "../public/assets/gift-CyhRxszs.js"
  },
  "/assets/home-BejPpyLn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2af4-MaERaw7GZQkvQGDcwSM/Hnu4zd8"',
    "mtime": "2026-08-25T17:15:04.622Z",
    "size": 10996,
    "path": "../public/assets/home-BejPpyLn.js"
  },
  "/assets/index-DDARJEil.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dab2-2rYN8O97hkpqvydjOL3APDv8S38"',
    "mtime": "2026-08-25T17:15:04.614Z",
    "size": 55986,
    "path": "../public/assets/index-DDARJEil.js"
  },
  "/assets/levels-DYDUE1k-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-0IaGz4Ei+BXFSFb4I4VBgdB+2Qw"',
    "mtime": "2026-08-25T17:15:04.622Z",
    "size": 6869,
    "path": "../public/assets/levels-DYDUE1k-.js"
  },
  "/assets/index-B-dndlmv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6bc91-Htb8GuakcQfRfa5/7egNjNSaL5s"',
    "mtime": "2026-08-25T17:15:04.614Z",
    "size": 441489,
    "path": "../public/assets/index-B-dndlmv.js"
  },
  "/assets/lock-BohnnLYM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-bisTj1Z92rzHF2B7yvfQSidxd6c"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 202,
    "path": "../public/assets/lock-BohnnLYM.js"
  },
  "/assets/link-2-b3NH4D2f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-kB/QI3DfFuUk6rVCwT5Z7A/2ASM"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 243,
    "path": "../public/assets/link-2-b3NH4D2f.js"
  },
  "/assets/log-in-BpMgeVS1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-LQ0fxlMkX1IL+NORQ68RqQOXC0s"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 232,
    "path": "../public/assets/log-in-BpMgeVS1.js"
  },
  "/assets/mail-DjfHUf4E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-lhfwmyw3D/UahZqq63oBDlRSG2U"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 214,
    "path": "../public/assets/mail-DjfHUf4E.js"
  },
  "/assets/map-pin-DUloN-Pk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-3Q2Nip5AjTvbmELe1VcERLQHkkk"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 255,
    "path": "../public/assets/map-pin-DUloN-Pk.js"
  },
  "/assets/market-l14t3dJd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-vWog1gAz8QpRka9uL0TP+DKi6oo"',
    "mtime": "2026-08-25T17:15:04.622Z",
    "size": 26473,
    "path": "../public/assets/market-l14t3dJd.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BZMr5pm3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-Gp71U+7Ac7J+jUJap9XaDoWiGwY"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 29316,
    "path": "../public/assets/parceiros-BZMr5pm3.js"
  },
  "/assets/percent-Bidr14eL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-3tka4Fh0ZxqN8QAKo+p0aCZzV+E"',
    "mtime": "2026-08-25T17:15:04.614Z",
    "size": 646,
    "path": "../public/assets/percent-Bidr14eL.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T17:15:09.087Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T17:15:09.094Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-B87AYAj0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-puRt5YPww6eYnVkpoYks2zr41F4"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 323,
    "path": "../public/assets/phone-B87AYAj0.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T17:15:04.612Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T17:15:04.610Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T17:15:04.612Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T17:15:04.614Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T17:15:04.610Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/profile-BdytewlW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-PTZtIvyK3hyb6OLpiImZs5kLZQ4"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 31108,
    "path": "../public/assets/profile-BdytewlW.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T17:15:04.613Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T17:15:09.097Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T17:15:04.627Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/save--Zov8z7s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-qxn8K+RnzmL/LFHrsDiis8zZvDY"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 410,
    "path": "../public/assets/save--Zov8z7s.js"
  },
  "/assets/search-Bxw8DJdf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-wO/U7eVzX1wOdD5o40vvp+hs3PM"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 170,
    "path": "../public/assets/search-Bxw8DJdf.js"
  },
  "/assets/shield-check-Daf7L6gv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-NwjEX3nsYTKvn5QD1k8pAb1GbGY"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 316,
    "path": "../public/assets/shield-check-Daf7L6gv.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T17:15:04.611Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T17:15:04.626Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/styles-Dg_0i3xw.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"24dd9-DDaO34l1kO+2PdHCxAbTjTDVIzg"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 151001,
    "path": "../public/assets/styles-Dg_0i3xw.css"
  },
  "/assets/truck-BSPjFKIU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-Qw6TD/IDx+HP4EYsrpB1RRWAVrI"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 1109,
    "path": "../public/assets/truck-BSPjFKIU.js"
  },
  "/assets/user-plus-DQ41Ey0W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-bH1rDuzLcLcjzA0GV+hX5z3e+2Q"',
    "mtime": "2026-08-25T17:15:04.624Z",
    "size": 311,
    "path": "../public/assets/user-plus-DQ41Ey0W.js"
  },
  "/assets/users-Bhnqfixk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-+PICirxOBN1lXB/wCcSHf9EseJ8"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 307,
    "path": "../public/assets/users-Bhnqfixk.js"
  },
  "/assets/wallet-Ca7GCGRj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-VKBJwcEyQPvDUh5eWx/h+rTliZc"',
    "mtime": "2026-08-25T17:15:04.625Z",
    "size": 4687,
    "path": "../public/assets/wallet-Ca7GCGRj.js"
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
