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
    "mtime": "2026-09-01T20:55:25.643Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-01T20:55:25.647Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-01T20:55:25.648Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-01T20:55:25.647Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-01T20:55:25.648Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-01T20:55:25.636Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-01T20:55:25.636Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/assets/InstitutionalWebHeader-DGy_h-s4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-vV231dRvDEWg75dBBzzG+K/457s"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-DGy_h-s4.js"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-01T20:55:25.637Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/assets/ProductDetailSheet-EJfdCBm0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-QPy5S1Y5pQ5jhai+XwDXX7MYj7g"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-EJfdCBm0.js"
  },
  "/assets/activities-D64EfEr5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-TO0QZ1z1tEIEv6C7GmAYR1VTdC4"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 1196,
    "path": "../public/assets/activities-D64EfEr5.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-01T20:55:17.987Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apple-Cu5CoTtE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-KCWmEQJfk7bOhpQ+N25CpcK4I2c"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 315,
    "path": "../public/assets/apple-Cu5CoTtE.js"
  },
  "/assets/arrow-up-right-C0QDOxcq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-OksnhQSewIB0GYOQHHAFtguzKco"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-C0QDOxcq.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-01T20:55:17.987Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/associado-B4qwdGHz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-2gR/gaJMR44LPNb+ytHPSJzRmvA"',
    "mtime": "2026-09-01T20:55:17.991Z",
    "size": 29722,
    "path": "../public/assets/associado-B4qwdGHz.js"
  },
  "/assets/calendar-C9NBzBUD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-e2IeISFWQuGLQcus7lUMwAVrJGQ"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 258,
    "path": "../public/assets/calendar-C9NBzBUD.js"
  },
  "/assets/auth-BzRhiZo8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b4ab-uFszipecTC7YLWTuFepSZCGpiiM"',
    "mtime": "2026-09-01T20:55:17.991Z",
    "size": 46251,
    "path": "../public/assets/auth-BzRhiZo8.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-01T20:55:17.987Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-01T20:55:25.645Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-JIoX6Kd0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a3f0e-IcowudJUP8mgg8I33xq67lSEefM"',
    "mtime": "2026-09-01T20:55:17.995Z",
    "size": 671502,
    "path": "../public/assets/admin-JIoX6Kd0.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-01T20:55:25.646Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/circle-check-PIqrFaIs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-y9RbVl3RIUXReNlmEzggqbQlUQg"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 174,
    "path": "../public/assets/circle-check-PIqrFaIs.js"
  },
  "/assets/circle-x-DAaFwMXw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-FcKiRHnMozd83EuHYi9JhcZVIhE"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 405,
    "path": "../public/assets/circle-x-DAaFwMXw.js"
  },
  "/assets/contato-G9LpUut1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2165-JKFAznOHHlNTjwRzx47jMe59aQQ"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 8549,
    "path": "../public/assets/contato-G9LpUut1.js"
  },
  "/assets/credit-card-CP_lD8-r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-UXluPJNC2+yiCp/7NS9eYPNoBO8"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 208,
    "path": "../public/assets/credit-card-CP_lD8-r.js"
  },
  "/assets/download-D1MAM6vQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-EIW8Oj+xHNXe4P0DSJpWVu4oeq4"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 8261,
    "path": "../public/assets/download-D1MAM6vQ.js"
  },
  "/assets/dumbbell-C2SRTGed.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-9eViULhQCdogYQsy858XREsDzfk"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C2SRTGed.js"
  },
  "/assets/eye-CRWWH0j6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-GsjS2Il21FF6uEE+nWB4ayFnOwg"',
    "mtime": "2026-09-01T20:55:17.991Z",
    "size": 252,
    "path": "../public/assets/eye-CRWWH0j6.js"
  },
  "/assets/faq-ClQLokXN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78b0-fKhoKYBXRlZRTh0ZpCxqQsc2UWg"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 30896,
    "path": "../public/assets/faq-ClQLokXN.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-01T20:55:17.986Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-01T20:55:17.989Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-01T20:55:17.986Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-01T20:55:17.986Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-01T20:55:17.986Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/file-text-DQNyvg0q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-Ux/EnxUOJXlObQPdAiVpDAtcAnc"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 386,
    "path": "../public/assets/file-text-DQNyvg0q.js"
  },
  "/assets/gift-DvIvD4sO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-GqVdkN6p9MfSvD/xbjGfMUtWw5Y"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 350,
    "path": "../public/assets/gift-DvIvD4sO.js"
  },
  "/assets/home-Cz-WSEQD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-SScyMsJxyzt8jPr1GfkitY2A640"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 11044,
    "path": "../public/assets/home-Cz-WSEQD.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-01T20:55:17.987Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-Cvwn-aVJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-Lr5d3K5MhGjk3iAeOrjJ2t1ZE4g"',
    "mtime": "2026-09-01T20:55:17.990Z",
    "size": 61206,
    "path": "../public/assets/index-Cvwn-aVJ.js"
  },
  "/assets/index-Ds6nHbYN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"707e3-aWnZ1yg5Tr9YuQtjLlKimgOJJZQ"',
    "mtime": "2026-09-01T20:55:17.990Z",
    "size": 460771,
    "path": "../public/assets/index-Ds6nHbYN.js"
  },
  "/assets/levels-DYM23v0O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-EKabO6Q+tBOZPZkLFp1Kfn8tZKw"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 6869,
    "path": "../public/assets/levels-DYM23v0O.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-01T20:55:25.665Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-01T20:55:25.670Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/assets/link-2-D9Sj3Sk4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-Ws9Fg0VmQyJl3zBZoD8IsO3hxaw"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 243,
    "path": "../public/assets/link-2-D9Sj3Sk4.js"
  },
  "/assets/lock-uufvaNYl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-U2pdP+9oKgHKxhezK2rWCAQLIvs"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 202,
    "path": "../public/assets/lock-uufvaNYl.js"
  },
  "/assets/log-in-EuGoaa0F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-Z3ufclxHFze4VBQhph2Jux5PVFI"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 232,
    "path": "../public/assets/log-in-EuGoaa0F.js"
  },
  "/assets/mail-C3iLZpPU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-L01k1hAOb2RvhXuUcBELK0LXnWk"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 214,
    "path": "../public/assets/mail-C3iLZpPU.js"
  },
  "/assets/map-pin-B4Cg2Hsi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-M15XcBvBrks5Q/DvYgKQe2wice8"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 255,
    "path": "../public/assets/map-pin-B4Cg2Hsi.js"
  },
  "/assets/market-D2WGKDzf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-vc1NbreKFuTtHAJ3u2QX3hW77po"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 26473,
    "path": "../public/assets/market-D2WGKDzf.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DP3jj7X7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9394-GfRiS2EPvTFB3f7xy7F8NvKE1gI"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 37780,
    "path": "../public/assets/parceiros-DP3jj7X7.js"
  },
  "/assets/percent-BFxE7UOh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-0M/98FP6R2oivkowb4XX8kJC7gM"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 646,
    "path": "../public/assets/percent-BFxE7UOh.js"
  },
  "/assets/phone-DKSKYEnf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-YYGl7+Eq4A5GXLLIcGj+COL1jr8"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 323,
    "path": "../public/assets/phone-DKSKYEnf.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-01T20:55:17.987Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-01T20:55:25.663Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-01T20:55:17.989Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-01T20:55:25.659Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-01T20:55:17.987Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-01T20:55:17.986Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/profile-DpbZyEBH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-u0fxMHi87pSvBq+gQJL1xwXnDZk"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 30867,
    "path": "../public/assets/profile-DpbZyEBH.js"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-01T20:55:17.988Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-01T20:55:17.987Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-01T20:55:18.000Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-01T20:55:17.987Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-01T20:55:17.986Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-01T20:55:17.986Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-01T20:55:25.680Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/search-Cbpbz6xF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-6rIKNkFhcjVEQGDUAFARDwMQ/0w"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 170,
    "path": "../public/assets/search-Cbpbz6xF.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-01T20:55:17.996Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/shield-check-DGwjiQwM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-we/qE+DLBMnZ6A9pC4Py18L7SAE"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 316,
    "path": "../public/assets/shield-check-DGwjiQwM.js"
  },
  "/assets/styles-BmQq4-Rs.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28828-idufH0gQMoxoBD1LosJsiro17XI"',
    "mtime": "2026-09-01T20:55:17.989Z",
    "size": 165928,
    "path": "../public/assets/styles-BmQq4-Rs.css"
  },
  "/assets/trash-2-Ci7mv6rN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-xoznnLoDrUNBFdZI3YUkkDSFPb0"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 690,
    "path": "../public/assets/trash-2-Ci7mv6rN.js"
  },
  "/assets/truck-DF0RiEUn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-c4RU7X11CUrJgr7lX3muJqIIl4I"',
    "mtime": "2026-09-01T20:55:17.992Z",
    "size": 1109,
    "path": "../public/assets/truck-DF0RiEUn.js"
  },
  "/assets/user-plus-DCu7xI4p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-GmtaydmD8kO0vjBYzQW1lsKnTvs"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 311,
    "path": "../public/assets/user-plus-DCu7xI4p.js"
  },
  "/assets/users-M3E17UGQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-IaVNM2VrP8irn023f9mb6plJpl0"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 307,
    "path": "../public/assets/users-M3E17UGQ.js"
  },
  "/assets/wallet-COB40VHW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-PQKv9VPHOOarKLkLwa/h0LjeEDE"',
    "mtime": "2026-09-01T20:55:17.993Z",
    "size": 4687,
    "path": "../public/assets/wallet-COB40VHW.js"
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
