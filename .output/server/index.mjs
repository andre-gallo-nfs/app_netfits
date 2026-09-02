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
    "mtime": "2026-09-02T15:51:42.376Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T15:51:42.378Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-02T15:51:42.375Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-02T15:51:42.377Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-02T15:51:42.377Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-02T15:51:42.362Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bff3-JgXDt98zxF6EfzkW/cOwl2KZJNc"',
    "mtime": "2026-09-02T15:51:42.364Z",
    "size": 49139,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-02T15:51:42.363Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-02T15:51:42.363Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-ziL6CCx+9JcvcfKrqRKXEW9RjIY"',
    "mtime": "2026-09-02T15:51:42.368Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T15:51:42.368Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/assets/ProductDetailSheet-P4NvDdh-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-JamV5EDfbyburceiDdkKDXbKch4"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-P4NvDdh-.js"
  },
  "/assets/InstitutionalWebHeader-CYHWkoai.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-6U3e12zQpRfdTJO6YmCcrbnVJk4"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-CYHWkoai.js"
  },
  "/assets/activities-CwIEf2Yn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-aKxVrM0vBH97ULP23g9WoihojlU"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 1196,
    "path": "../public/assets/activities-CwIEf2Yn.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-BPmAOFRa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-K5T+XvZJuQNrkm3c1lWPzk/NbaQ"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 315,
    "path": "../public/assets/apple-BPmAOFRa.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/arrow-up-right-GvsayDyI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-5Xp0PbH7wa4fcjjEHoCbGHraCrE"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-GvsayDyI.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-02T15:51:42.374Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-CGXLekYC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a927f-ksnQswmYoM4ra1LTKl3amxno3O8"',
    "mtime": "2026-09-02T15:51:35.438Z",
    "size": 692863,
    "path": "../public/assets/admin-CGXLekYC.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-02T15:51:42.376Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/associado-DdbksK5u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-9QRbrgQJ6ml9kwAVWbIR103JNnU"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 29722,
    "path": "../public/assets/associado-DdbksK5u.js"
  },
  "/assets/calendar-BGRaa9ac.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-BtJfG6dm8l0nRPziOj1BRlQtIwA"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 258,
    "path": "../public/assets/calendar-BGRaa9ac.js"
  },
  "/assets/circle-check-BlG8BwRX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-1JmsRDtK0axojEFDm4SocNjgjqQ"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 174,
    "path": "../public/assets/circle-check-BlG8BwRX.js"
  },
  "/assets/auth-8z9ca1H0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b4ab-/qoUDUnRTZ8x6TOf9laD1feSrWI"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 46251,
    "path": "../public/assets/auth-8z9ca1H0.js"
  },
  "/assets/circle-x-Csu93S9p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-tKznuMoHX/eIvd9UEtrzt11pj9g"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 405,
    "path": "../public/assets/circle-x-Csu93S9p.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/contato-DdsOl_Ch.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2165-P4AeAuEoaBimxYPHmF+Jt+cye7U"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 8549,
    "path": "../public/assets/contato-DdsOl_Ch.js"
  },
  "/assets/credit-card-CqTe6QWu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-CDoiyLdbw2UjR9lm1B+aboVHbBc"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 208,
    "path": "../public/assets/credit-card-CqTe6QWu.js"
  },
  "/assets/download-Bn_FHxX-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-VkrkB7f/bc0uK+TJNCzbkQvqfTw"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 8261,
    "path": "../public/assets/download-Bn_FHxX-.js"
  },
  "/assets/dumbbell-BZ6CNdXR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-Rur8Gx7uAcUM047NBnihxNxr8NY"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BZ6CNdXR.js"
  },
  "/assets/eye-DlVb8XGV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-BmTlbwv6bp9UkCfJt6cSm83XTqQ"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 252,
    "path": "../public/assets/eye-DlVb8XGV.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/faq-B8Y0tNpX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78b0-UP08p1p1HE9MrIuouqrGG5uM9Ao"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 30896,
    "path": "../public/assets/faq-B8Y0tNpX.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-Bn1Na4tE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-tGIec8D+LSMrwJPBhnfYY1kipbI"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 386,
    "path": "../public/assets/file-text-Bn1Na4tE.js"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-Bq3txoMh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-+ET5Dc8FC7dHL3nv9hj3g3VDEgI"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 350,
    "path": "../public/assets/gift-Bq3txoMh.js"
  },
  "/assets/home-BQaJthzz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-WITEmEHD1e+j7Vq2MJ9mRDWx09s"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 11044,
    "path": "../public/assets/home-BQaJthzz.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T15:51:42.396Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/index-B-nhGVsC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-cPUYnnyKz0Inu+96AepOPlbAGPY"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 61206,
    "path": "../public/assets/index-B-nhGVsC.js"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T15:51:42.398Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/assets/index-D9tGbdJf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"707e3-dxoBYWokFekn5HIL81h4AX9OJwU"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 460771,
    "path": "../public/assets/index-D9tGbdJf.js"
  },
  "/assets/levels-FYuRsVBC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-/uhdhpSzkkFbyV29d2r7W024xsM"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 6869,
    "path": "../public/assets/levels-FYuRsVBC.js"
  },
  "/assets/link-2-BqyUvz3j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-bpBCZLvleG4xdEjKXLjMsAx8AXk"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 243,
    "path": "../public/assets/link-2-BqyUvz3j.js"
  },
  "/assets/lock-CihSJFkc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-sibncFe5fpAaYWehIBSrE9ty9RA"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 202,
    "path": "../public/assets/lock-CihSJFkc.js"
  },
  "/assets/log-in-oJzm1KqE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-cdJsoUn2DJuEn1X0/i7DjAWaldM"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 232,
    "path": "../public/assets/log-in-oJzm1KqE.js"
  },
  "/assets/mail-CwXvil8O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-ep9IhbgoIRUmvTs9v6ynmHIEhZU"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 214,
    "path": "../public/assets/mail-CwXvil8O.js"
  },
  "/assets/map-pin-CXn5Gwm1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-EcdL25YMZIXKK9sYXvXc3bHGAaM"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 255,
    "path": "../public/assets/map-pin-CXn5Gwm1.js"
  },
  "/assets/market-D_C36FOk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-2PIzio2PgxwSsVGWtzFVDWa1Wpo"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 26473,
    "path": "../public/assets/market-D_C36FOk.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/percent-BAwCVJMU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-mKalE4KOs3RpyOHkmKraNCyvwkg"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 646,
    "path": "../public/assets/percent-BAwCVJMU.js"
  },
  "/assets/phone-DWSL8LBu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-/BLUUhLTlV/QfKxHRavZMm9WMWc"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 323,
    "path": "../public/assets/phone-DWSL8LBu.js"
  },
  "/assets/parceiros-BPgUdavd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9394-VKep3fZob7LosC6cp0OUw6RfrKw"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 37780,
    "path": "../public/assets/parceiros-BPgUdavd.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-02T15:51:42.395Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T15:51:42.382Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/profile-CUyDEnrf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-zc9q5fJFl/5fi4bQqbh4ONbaliE"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 30867,
    "path": "../public/assets/profile-CUyDEnrf.js"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/search-BucbOtPn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-tflLvUFYARW/yH4GUglkOOA3vmM"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 170,
    "path": "../public/assets/search-BucbOtPn.js"
  },
  "/assets/styles-DivdwZhM.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28a7a-tQSwQRjVJKaLfiDDed1rRIGcO6Q"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 166522,
    "path": "../public/assets/styles-DivdwZhM.css"
  },
  "/assets/shield-check-Bvr6oE7E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-mCTXjbKDeOXVbgm3x59B65d01jA"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 316,
    "path": "../public/assets/shield-check-Bvr6oE7E.js"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-02T15:51:35.435Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T15:51:42.412Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T15:51:35.441Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/trash-2-BEw9J6Bh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-UmMHY2H7ZjHnTsx0RCnrAGX4miM"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 690,
    "path": "../public/assets/trash-2-BEw9J6Bh.js"
  },
  "/assets/truck-BsRTGXeW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-/zZq2/loeYNb++MNI21QVRVxUZA"',
    "mtime": "2026-09-02T15:51:35.436Z",
    "size": 1109,
    "path": "../public/assets/truck-BsRTGXeW.js"
  },
  "/assets/user-plus-CZBUZCFq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-qAnFZ1aNdizmZI24KUAF0hFBqKI"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 311,
    "path": "../public/assets/user-plus-CZBUZCFq.js"
  },
  "/assets/users-CaPK0aps.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-TvfH5g0nM9QTfJxHSFxIm5GePKI"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 307,
    "path": "../public/assets/users-CaPK0aps.js"
  },
  "/assets/wallet-D0vqCgFY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-rXa6E4w8AJ/9LZsN2drBhKMvb6o"',
    "mtime": "2026-09-02T15:51:35.437Z",
    "size": 4687,
    "path": "../public/assets/wallet-D0vqCgFY.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-02T15:51:35.439Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
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
