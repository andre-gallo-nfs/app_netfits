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
    "mtime": "2026-09-01T19:19:14.398Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-01T19:19:14.398Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-01T19:19:14.398Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-01T19:19:14.399Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-01T19:19:14.388Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/assets/InstitutionalWebHeader-C_ELNgNA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-oLuR7+7STEtrfj9nnJVCecnAOKw"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-C_ELNgNA.js"
  },
  "/assets/ProductDetailSheet-prKca35J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-vjOI0waDZxlEzLEQxAm3dNRUUyY"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-prKca35J.js"
  },
  "/assets/activities-BydloOBY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-brvIvmlV55EKXakwE5x8Ia9ZT/U"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 1196,
    "path": "../public/assets/activities-BydloOBY.js"
  },
  "/assets/apple-FBKAevFp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-OSMdLXmIaUTf453tlqT1TDMQess"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 315,
    "path": "../public/assets/apple-FBKAevFp.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/arrow-up-right-D3hzHR6M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-pUUIwYsbUWFCH+9IsTOJV2kg/J4"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-D3hzHR6M.js"
  },
  "/assets/associado-CKGXju5O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-+fuCk+PA+KKvc3ZwgtPSpmL2+u8"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 29722,
    "path": "../public/assets/associado-CKGXju5O.js"
  },
  "/assets/auth-hI5AHpaL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-L41+GZJfkxv7E5b6wV34Evvcemg"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 45736,
    "path": "../public/assets/auth-hI5AHpaL.js"
  },
  "/assets/calendar-Dcswr-CH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-hXQbHQhF9Ez/q0Pdv00AQ6aezyA"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 258,
    "path": "../public/assets/calendar-Dcswr-CH.js"
  },
  "/assets/circle-check-BtMhH3pC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Izyn0P6Qga2j3wsrk3nWg9P4js8"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 174,
    "path": "../public/assets/circle-check-BtMhH3pC.js"
  },
  "/assets/circle-x-BtsLyA1A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-PT+8YafQr0sBfhuiEqaCclsiIAM"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 405,
    "path": "../public/assets/circle-x-BtsLyA1A.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/contato-sv55D3IJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2165-78M6Z5ttbimu5SbM2Yimu83kgYg"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 8549,
    "path": "../public/assets/contato-sv55D3IJ.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-01T19:19:07.528Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-01T19:19:14.394Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-TU5ZP87w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a3cc7-37/PGjyN1MA8jXGIAU1Vqcvl+M8"',
    "mtime": "2026-09-01T19:19:07.536Z",
    "size": 670919,
    "path": "../public/assets/admin-TU5ZP87w.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-01T19:19:14.396Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/credit-card-CxHPzRmI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-6P4jH4nd72x/EDvFP60f4WokNyc"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 208,
    "path": "../public/assets/credit-card-CxHPzRmI.js"
  },
  "/assets/download-CCvTJEhD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-LdceZi5rcGGgBaHMv/tc7CnzyuA"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 8261,
    "path": "../public/assets/download-CCvTJEhD.js"
  },
  "/assets/dumbbell-CoD5JLAW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-AHlWb2bSzurKnLyPkb0Cf+HMriA"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CoD5JLAW.js"
  },
  "/assets/eye-tT0wutU4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-qvLFayKm8k6wcuEnAqoCojj4TtA"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 252,
    "path": "../public/assets/eye-tT0wutU4.js"
  },
  "/assets/faq-BvX11lxw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7d87-bR8vdn94rP/Q/JrdD2irKf+wIG4"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 32135,
    "path": "../public/assets/faq-BvX11lxw.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-01T19:19:07.529Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/file-text-BntJJ_Ft.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3d4-V9Z0VpHk4LAMcCGLjr7OFg83YXM"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 980,
    "path": "../public/assets/file-text-BntJJ_Ft.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gift-Cl-PlIUN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-WV0OSvA7cIk97O+YUqjNXDQHRVg"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 350,
    "path": "../public/assets/gift-Cl-PlIUN.js"
  },
  "/assets/home-CZus2GnL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-e4Xr7skg/4/6MokfypddXbitM4I"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 11044,
    "path": "../public/assets/home-CZus2GnL.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-01T19:19:07.528Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/levels-BCLAkfkl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-Xld8ARNDTNbgfJpBhYsCRIAd1oI"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 6869,
    "path": "../public/assets/levels-BCLAkfkl.js"
  },
  "/assets/index-RzwrD4IE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-Wi4zx+HMICWqdn90cqCec/HIpsg"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 61206,
    "path": "../public/assets/index-RzwrD4IE.js"
  },
  "/assets/link-2-CISe0PNY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-8CjHWMVlJQydbx5Qvf49uG2nzTs"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 243,
    "path": "../public/assets/link-2-CISe0PNY.js"
  },
  "/assets/lock-ClSktwlv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-zCJRIVVcB6bR8k1xUaTcz85ARQ4"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 202,
    "path": "../public/assets/lock-ClSktwlv.js"
  },
  "/assets/log-in-B7gG7pfx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-VERpNkpXnsmxZJwpmN6E1V/RIbo"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 232,
    "path": "../public/assets/log-in-B7gG7pfx.js"
  },
  "/assets/index-BNUCShrp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"707e3-lfbTlnBeG0YnIIcZmvPBNX6xcuQ"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 460771,
    "path": "../public/assets/index-BNUCShrp.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-01T19:19:07.529Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/mail-CpThTqIs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-PN/F+LGmkup3qoBsz51FRoiCnDk"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 214,
    "path": "../public/assets/mail-CpThTqIs.js"
  },
  "/assets/map-pin-5ksba-cN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-eZP2T5v6vinlUehP2VKCXDM/y4E"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 255,
    "path": "../public/assets/map-pin-5ksba-cN.js"
  },
  "/assets/market-aOEmLp1y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-uSLNf4DW73AlbeSFa13UJOBPB0Y"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 26473,
    "path": "../public/assets/market-aOEmLp1y.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-01T19:19:14.414Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-CDPpDkcq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9394-l+tasOykfQ4tSAdA2dfwpdSzSKA"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 37780,
    "path": "../public/assets/parceiros-CDPpDkcq.js"
  },
  "/assets/percent-ZtevDS9B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-dHQHHiKyrc27zqVNLdRXdG6ryZg"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 646,
    "path": "../public/assets/percent-ZtevDS9B.js"
  },
  "/assets/phone-DA7n5GmO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-Zz5xg2/N/gXo2C8O8Ad34lpOxQk"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 323,
    "path": "../public/assets/phone-DA7n5GmO.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-01T19:19:07.529Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-01T19:19:07.529Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-01T19:19:07.529Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-01T19:19:14.411Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-01T19:19:14.422Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/profile-D-ZE1Rtq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-l5QrEYIKMWx/BV+sg4NKc1wbL/4"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 30867,
    "path": "../public/assets/profile-D-ZE1Rtq.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-01T19:19:07.536Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-01T19:19:07.537Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-01T19:19:07.530Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/search-Ckz50B7P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-/YRvDmHQl/n3rbCARxIB2GbDJTQ"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 170,
    "path": "../public/assets/search-Ckz50B7P.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-01T19:19:07.529Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/shield-check-Do6SQ7G6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-xUwkFpzFT+YwLkWB2pcOLv1NSRQ"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 316,
    "path": "../public/assets/shield-check-Do6SQ7G6.js"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-01T19:19:07.529Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/trash-2-CkxuFCoo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-heMq5DfyZOhGIYqQHYzELIhzF+U"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 690,
    "path": "../public/assets/trash-2-CkxuFCoo.js"
  },
  "/assets/styles-BmQq4-Rs.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28828-idufH0gQMoxoBD1LosJsiro17XI"',
    "mtime": "2026-09-01T19:19:07.531Z",
    "size": 165928,
    "path": "../public/assets/styles-BmQq4-Rs.css"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-01T19:19:14.422Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/truck-CmTGnhz3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-/z1l6fKgLEYj38Lqbv+x3I4ocmY"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 1109,
    "path": "../public/assets/truck-CmTGnhz3.js"
  },
  "/assets/user-plus-C4FME0uV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-vieP/r5DNFQKq4ZSOj+5oF+y0wI"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 311,
    "path": "../public/assets/user-plus-C4FME0uV.js"
  },
  "/assets/users-swIJfRx2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-GME82G9GJqSYLid5oLSc3p33HGY"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 307,
    "path": "../public/assets/users-swIJfRx2.js"
  },
  "/assets/wallet-BtqTlDYR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-fwUUhkLetOofqR42OobuEGloUD0"',
    "mtime": "2026-09-01T19:19:07.532Z",
    "size": 4687,
    "path": "../public/assets/wallet-BtqTlDYR.js"
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
