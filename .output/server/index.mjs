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
    "mtime": "2026-08-25T18:38:24.557Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-25T18:38:24.557Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-BWzbigHa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-yGT+gQyC8Evz1ZRa/S0f3E9NS9c"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-BWzbigHa.js"
  },
  "/assets/ProductDetailSheet-BM-eAqAt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-Tm40YT5iOqyJE/m8iVmeBuRuwSw"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-BM-eAqAt.js"
  },
  "/assets/activities-CgIrWwxj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-Vou68EA6nHjy8qCSM0MyPfdMmO0"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 1196,
    "path": "../public/assets/activities-CgIrWwxj.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-B_eEkavQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-Rj9jsOIUKFO86Mt3wj3p0UI5SQc"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 315,
    "path": "../public/assets/apple-B_eEkavQ.js"
  },
  "/assets/arrow-up-right-Cxem_spz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-0CXUvTIsGi7ChyAL1sqCCbsqeII"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Cxem_spz.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-25T18:38:19.579Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-CrS4Qlod.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73c8-AZogmyW+XFURQ/Li5jpQHXqi6DE"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 29640,
    "path": "../public/assets/associado-CrS4Qlod.js"
  },
  "/assets/calendar-CqGY_bMd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-wDJUCvuKuTzDahPrqRv8ioScPPk"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 258,
    "path": "../public/assets/calendar-CqGY_bMd.js"
  },
  "/assets/auth-Bfjzd_K0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b748-mKrdnBUUitz4orbO0FpfUWABkDI"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 46920,
    "path": "../public/assets/auth-Bfjzd_K0.js"
  },
  "/assets/circle-check-MpraI6Pm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-q9j5IA2h4QQTLEFT1SSrgjXbdD4"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 174,
    "path": "../public/assets/circle-check-MpraI6Pm.js"
  },
  "/assets/circle-x-CbWgLijp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-NsoyoYl72ETds4DNsXwWLNM6pCQ"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 405,
    "path": "../public/assets/circle-x-CbWgLijp.js"
  },
  "/assets/contato-CVm5Vife.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f63-Swd3TA+YE7LJ3KoeSPPkE0nHTrg"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 8035,
    "path": "../public/assets/contato-CVm5Vife.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-s9GHk6it.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-ANbmaAyRvaKWxI5WpTg+umDsf8w"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 208,
    "path": "../public/assets/credit-card-s9GHk6it.js"
  },
  "/assets/download-DBDiHEuf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2050-1IJOm1FN/2hDNoC0Ria0o0d5x+4"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 8272,
    "path": "../public/assets/download-DBDiHEuf.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/dumbbell-C-b8gXAu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-ZaxsRUpXMkNjDEC3mqvB/zV0enc"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C-b8gXAu.js"
  },
  "/assets/eye-BxmiMv1B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-BAaheHt5Wmx/vfe5ahPTg0DiTJ8"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 252,
    "path": "../public/assets/eye-BxmiMv1B.js"
  },
  "/assets/faq-DlEibRKX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc8-/gwc+TS6GupChJ98jpeWPWxFpo4"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 8136,
    "path": "../public/assets/faq-DlEibRKX.js"
  },
  "/assets/admin-BZBBy2m7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"86c04-7jpne9ymNhwq27lyUVNeI2iEOv0"',
    "mtime": "2026-08-25T18:38:19.584Z",
    "size": 551940,
    "path": "../public/assets/admin-BZBBy2m7.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-CkaIxfoE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-3d3cWO/0y2w/dyUTTKCtoLn9VjY"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 350,
    "path": "../public/assets/gift-CkaIxfoE.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/home-CADz-fjM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2af4-WNuQV1rWWPhQ4QlRYCmk/JoM4kk"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 10996,
    "path": "../public/assets/home-CADz-fjM.js"
  },
  "/assets/index-B8y3OKqn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dc84-riHXgHySjqpWp3NGN1lrGIJlIZ8"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 56452,
    "path": "../public/assets/index-B8y3OKqn.js"
  },
  "/assets/levels-B_JjXvRE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-EutzA0OacTY2a05rvDEAzfXZ0eE"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 6869,
    "path": "../public/assets/levels-B_JjXvRE.js"
  },
  "/assets/link-2-inpL_PN2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-U7kYSSt8MBDUui31t9C2wNEhakk"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 243,
    "path": "../public/assets/link-2-inpL_PN2.js"
  },
  "/assets/lock-BIkfeBjh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-4nGd7813XYrukAEo7juTOhn1j7M"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 202,
    "path": "../public/assets/lock-BIkfeBjh.js"
  },
  "/assets/log-in-ClCfqhsd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-IJxlZ9wdDL7tvG29UvE2PfuMaN0"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 232,
    "path": "../public/assets/log-in-ClCfqhsd.js"
  },
  "/assets/mail-BQZL8mWx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-qJb/UocBO6sa1hOV431BHaMtB+Y"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 214,
    "path": "../public/assets/mail-BQZL8mWx.js"
  },
  "/assets/map-pin-7ELzBz_e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-PaupOmP9cCcC3U+OdE5sMGQ6GSA"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 255,
    "path": "../public/assets/map-pin-7ELzBz_e.js"
  },
  "/assets/index-yYOlGBmO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c3a5-IQDRoY1fD6Odg/blkVmc//iWQvU"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 443301,
    "path": "../public/assets/index-yYOlGBmO.js"
  },
  "/assets/market-C8awxc7f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-ZIletlkrUNgohzA1VOYYQCslhmg"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 26473,
    "path": "../public/assets/market-C8awxc7f.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-Td7HPJeU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7284-SRp7EHddQg99nIwMleb0bi6TwtM"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 29316,
    "path": "../public/assets/parceiros-Td7HPJeU.js"
  },
  "/assets/percent-DaBRx8UZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-mYj7CCa7yT3Ju1kIEAMKXDZe02U"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 646,
    "path": "../public/assets/percent-DaBRx8UZ.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T18:38:19.578Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-25T18:38:24.569Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-25T18:38:24.570Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-Ctke7NEJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-XNDALzwi6G2E/t7JHKscvsNjh40"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 323,
    "path": "../public/assets/phone-Ctke7NEJ.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-25T18:38:19.579Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-refc9Coq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7984-bdJC2HLkNeUBwZ+lV+6k+tBRoZ4"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 31108,
    "path": "../public/assets/profile-refc9Coq.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-25T18:38:19.573Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T18:38:19.584Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-25T18:38:24.574Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-25T18:38:19.572Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save--rMNTp4p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-y+3MyoPppA8jodcA2NV/5j4g87g"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 410,
    "path": "../public/assets/save--rMNTp4p.js"
  },
  "/assets/search-PzWVkhPl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-GssjaZATy6iyFLFJW018NdAqN1s"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 170,
    "path": "../public/assets/search-PzWVkhPl.js"
  },
  "/assets/shield-check-DHj3J4jh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-ZxrxomWbkvHEB8OC31CysqjY8Bs"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 316,
    "path": "../public/assets/shield-check-DHj3J4jh.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-25T18:38:19.584Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/styles-Bc6_mYhw.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2654e-MtYQkzsWxkA4SRzJIcN7AROnVvM"',
    "mtime": "2026-08-25T18:38:19.580Z",
    "size": 157006,
    "path": "../public/assets/styles-Bc6_mYhw.css"
  },
  "/assets/truck-Ctn58T8_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-b+YkEcyVNQwd3tDfIsg2witava0"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 1109,
    "path": "../public/assets/truck-Ctn58T8_.js"
  },
  "/assets/user-plus-D1v6Dc63.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-AuXF/GG/Xd9EJDSRMzXXabZJFyM"',
    "mtime": "2026-08-25T18:38:19.581Z",
    "size": 311,
    "path": "../public/assets/user-plus-D1v6Dc63.js"
  },
  "/assets/users-BK_e8w6d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-r2k5QqO6FldFEAbsmqGREuSyro0"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 307,
    "path": "../public/assets/users-BK_e8w6d.js"
  },
  "/assets/wallet-CRRKVsLp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-X8Ulv48FI4l2jJT0GEriqETF92g"',
    "mtime": "2026-08-25T18:38:19.582Z",
    "size": 4687,
    "path": "../public/assets/wallet-CRRKVsLp.js"
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
