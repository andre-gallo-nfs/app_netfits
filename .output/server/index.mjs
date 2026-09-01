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
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a636-ogHQ/SWKkPdSbnRP4tz8snVaxzc"',
    "mtime": "2026-09-01T19:11:17.011Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-01T19:11:17.010Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-01T19:11:17.010Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-01T19:11:17.011Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-01T19:11:16.991Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/assets/InstitutionalWebHeader-CKRIvoRZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-okIDXE4GzHBohI0AHfQM3/OtS94"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-CKRIvoRZ.js"
  },
  "/assets/ProductDetailSheet-DCKeNqr1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-SOpBqrYcimMFgxFC5GS7DrxuUIs"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-DCKeNqr1.js"
  },
  "/assets/activities-yqO_8Z-t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-l33/SX8q/35CNOJDO44Afc+NOpU"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 1196,
    "path": "../public/assets/activities-yqO_8Z-t.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-Dkd3pHaA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-uwnF86/8NDqPcPndWDTnVJIQUCQ"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 315,
    "path": "../public/assets/apple-Dkd3pHaA.js"
  },
  "/assets/arrow-up-right-BDEP9r8L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-gan4a/pxnqZmmNW8oqw6uBgdTIg"',
    "mtime": "2026-09-01T19:11:09.739Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BDEP9r8L.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-01T19:11:09.735Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/associado-yjfcytXK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-SY6ewmiDwdZgsqs4ET44TFHFKSc"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 29722,
    "path": "../public/assets/associado-yjfcytXK.js"
  },
  "/assets/calendar-pGQJQWwp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-SZ0ciTpiD9Xrfa1JsSTcRY46bgo"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 258,
    "path": "../public/assets/calendar-pGQJQWwp.js"
  },
  "/assets/circle-check-OklbIj-R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-/QF53DqHOITgcOXAmJw/i4CJ1bM"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 174,
    "path": "../public/assets/circle-check-OklbIj-R.js"
  },
  "/assets/auth-CYLoPVp-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-q8NG7rMbZKERARIbqqGnF3b+v+U"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 45736,
    "path": "../public/assets/auth-CYLoPVp-.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-01T19:11:09.735Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/contato-DY2-Zxjy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2165-Y/9l9Eq056h4KUN3zALQIAlCUSg"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 8549,
    "path": "../public/assets/contato-DY2-Zxjy.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-01T19:11:09.733Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/circle-x-CQoJbp3P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-FBffIvd+CDOMj1I2r6x5GTWQgc4"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 405,
    "path": "../public/assets/circle-x-CQoJbp3P.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-01T19:11:17.003Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-B9xyoAvm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a3cc7-p298IaDZLABnwYQl4pRioXnGR24"',
    "mtime": "2026-09-01T19:11:09.742Z",
    "size": 670919,
    "path": "../public/assets/admin-B9xyoAvm.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-01T19:11:17.006Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/credit-card-CepLOgXb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-HpTSxy3ZKrOSTOhD9NMMmznCl1o"',
    "mtime": "2026-09-01T19:11:09.739Z",
    "size": 208,
    "path": "../public/assets/credit-card-CepLOgXb.js"
  },
  "/assets/download-Cipu8ibQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-LZtvQFPYLXnFlBDCIU46S/AgtVE"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 8261,
    "path": "../public/assets/download-Cipu8ibQ.js"
  },
  "/assets/dumbbell-Orn6m8O1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-od7Z3mZtsQBn5ZdALgivJ+VorSc"',
    "mtime": "2026-09-01T19:11:09.739Z",
    "size": 561,
    "path": "../public/assets/dumbbell-Orn6m8O1.js"
  },
  "/assets/eye-DFveqNTU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-psJcU9YOZ0TWQDq/DdCqSC81TiU"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 252,
    "path": "../public/assets/eye-DFveqNTU.js"
  },
  "/assets/faq-COvmkssE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7d87-RqW69PEJzOx5CQhJBDgQTl6ooJ0"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 32135,
    "path": "../public/assets/faq-COvmkssE.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/file-text-IlmAMJ6i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3d4-dtaVowopPfwsT7j/cA+IWt8hIUM"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 980,
    "path": "../public/assets/file-text-IlmAMJ6i.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-01T19:11:09.735Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gift-DTpOi0N7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-zyJr5I/CsH3NY69IGCx10qnHKRg"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 350,
    "path": "../public/assets/gift-DTpOi0N7.js"
  },
  "/assets/home-DbmuWbDw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-Xu3vtqqg6HM7Fq1sox39LVaWU+k"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 11044,
    "path": "../public/assets/home-DbmuWbDw.js"
  },
  "/assets/index-DOTR8R5O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-Q6fKJQtR5VqfiQGIvQX732sGKIc"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 61206,
    "path": "../public/assets/index-DOTR8R5O.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-01T19:11:09.735Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/levels-D3VCgz_b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-4aQnhmoKyJGyDCsCHTeGGcGYz/0"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 6869,
    "path": "../public/assets/levels-D3VCgz_b.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-01T19:11:09.733Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/link-2-B7EqKo-d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-R7nMGQB0J2v72HMClqAqoBJ5ST4"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 243,
    "path": "../public/assets/link-2-B7EqKo-d.js"
  },
  "/assets/index-FSJSqGxZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"704c7-uG0qUUrktXXTUe5ANmdWuPSzL2k"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 459975,
    "path": "../public/assets/index-FSJSqGxZ.js"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-01T19:11:09.735Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/log-in-CjhiF7L1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-6Y9aUOFGmyC7easNFfirUBVksU8"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 232,
    "path": "../public/assets/log-in-CjhiF7L1.js"
  },
  "/assets/lock-0V943k2Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-KxBco6xy3q6l3to/QdlXIz4c+wc"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 202,
    "path": "../public/assets/lock-0V943k2Z.js"
  },
  "/assets/mail-D0WJDLoS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-iUy9A3eJ6bCBTY+SYfLgT/NmOqQ"',
    "mtime": "2026-09-01T19:11:09.740Z",
    "size": 214,
    "path": "../public/assets/mail-D0WJDLoS.js"
  },
  "/assets/map-pin-CTBSmzQY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-7pWSOzhNADWHksmCO5IkilVuYSs"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 255,
    "path": "../public/assets/map-pin-CTBSmzQY.js"
  },
  "/assets/market-DvU88rz6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-UB0NyDm84X636+7BjAvA6AMuVgk"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 26473,
    "path": "../public/assets/market-DvU88rz6.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-01T19:11:17.057Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-01T19:11:09.740Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-Ca3X3DC0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9394-82Ya+bwGtc3WrK81L1OStgXvTv8"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 37780,
    "path": "../public/assets/parceiros-Ca3X3DC0.js"
  },
  "/assets/percent-Dr6vg1Ar.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-GSQnOQXPN3jzkr/0SDEqptyqaBo"',
    "mtime": "2026-09-01T19:11:09.737Z",
    "size": 646,
    "path": "../public/assets/percent-Dr6vg1Ar.js"
  },
  "/assets/phone-BbXlFm-F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-N4YK86GCQZhiILmXffS7sB48cfM"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 323,
    "path": "../public/assets/phone-BbXlFm-F.js"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-01T19:11:09.733Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-01T19:11:09.733Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-01T19:11:09.733Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-01T19:11:17.062Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-01T19:11:17.056Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-BPYHvP7j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-azBexB4vPkXrNIY67UGlh+Okqgo"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 30867,
    "path": "../public/assets/profile-BPYHvP7j.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-01T19:11:09.743Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/search-CX_BeRRl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-8j7HMx4R2wtl3JPuCEy9JRaj0Pw"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 170,
    "path": "../public/assets/search-CX_BeRRl.js"
  },
  "/assets/shield-check-DDR1C-hq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-LAMItiXgdw+P6xQrXxp3ook3JnM"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 316,
    "path": "../public/assets/shield-check-DDR1C-hq.js"
  },
  "/assets/styles-BmQq4-Rs.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28828-idufH0gQMoxoBD1LosJsiro17XI"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 165928,
    "path": "../public/assets/styles-BmQq4-Rs.css"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-01T19:11:09.744Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/trash-2-DWqcsELY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-c0bygPZC8gk65Uk+lAHZ/IXnoXI"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 690,
    "path": "../public/assets/trash-2-DWqcsELY.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-01T19:11:17.069Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/truck-sZjOzQ5N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-vAR9CP6UfRWDdopvtian7RoK7bM"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 1109,
    "path": "../public/assets/truck-sZjOzQ5N.js"
  },
  "/assets/user-plus-Cd-33qVz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-hqhrg+s0GZOlLo7AD3SXcC+ryAk"',
    "mtime": "2026-09-01T19:11:09.738Z",
    "size": 311,
    "path": "../public/assets/user-plus-Cd-33qVz.js"
  },
  "/assets/users-LS3JuiWG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-mxN8CxKAEMLMOr0Sc3wNguogdEM"',
    "mtime": "2026-09-01T19:11:09.739Z",
    "size": 307,
    "path": "../public/assets/users-LS3JuiWG.js"
  },
  "/assets/wallet-CeVdiIcn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-eLopbDO5jFsIS2qftHC8O88JThM"',
    "mtime": "2026-09-01T19:11:09.739Z",
    "size": 4687,
    "path": "../public/assets/wallet-CeVdiIcn.js"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-01T19:11:09.736Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-01T19:11:09.734Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-01T19:11:09.734Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
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
