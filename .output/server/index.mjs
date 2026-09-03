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
    "mtime": "2026-09-03T23:27:18.937Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-03T23:27:18.939Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-03T23:27:18.941Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-03T23:27:18.940Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-03T23:27:18.956Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-03T23:27:18.890Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-03T23:27:18.896Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"c472-6lRqgrJrc+gQ27tIKFGebwvQoMc"',
    "mtime": "2026-09-03T23:27:18.896Z",
    "size": 50290,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-03T23:27:18.896Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a9a5-uH4bqxnKSUQgogTqioUrhsZYQIM"',
    "mtime": "2026-09-03T23:27:18.900Z",
    "size": 43429,
    "path": "../public/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-03T23:27:18.900Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-03T23:27:18.905Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/assets/InstitutionalWebHeader-D3429fyu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c84-iCmYjtLGpabUlTz0dMIp4+3Zgtc"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 3204,
    "path": "../public/assets/InstitutionalWebHeader-D3429fyu.js"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"dcb8-IVL5UCt+u3m22AYHmlnvajcTwuE"',
    "mtime": "2026-09-03T23:27:18.905Z",
    "size": 56504,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/assets/ProductDetailSheet-IExd8ly9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-e0aplZJUjMuViS5p3Zu2fzDRf1U"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-IExd8ly9.js"
  },
  "/assets/activities-BdZfpczR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-lOGMjHpKqS7jFxcdhaGeIkxW08I"',
    "mtime": "2026-09-03T23:27:13.257Z",
    "size": 1196,
    "path": "../public/assets/activities-BdZfpczR.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-03T23:27:13.253Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-D_oIvpF6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-H33HPeZATPrJPZFbHzjG1nlKvA4"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 315,
    "path": "../public/assets/apple-D_oIvpF6.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/admin-C60CtETc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"acb1a-07plj3ZztAQMmDyMCzGSeiEQ3tk"',
    "mtime": "2026-09-03T23:27:13.260Z",
    "size": 707354,
    "path": "../public/assets/admin-C60CtETc.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-03T23:27:18.902Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-03T23:27:18.902Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/arrow-up-right-CmwrkrAC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-j57DY8YkYGzBW1iLscCMyRqlwpo"',
    "mtime": "2026-09-03T23:27:13.259Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-CmwrkrAC.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-03T23:27:13.255Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/associado-DN85Ms7U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"743e-oP39GYpxwDn4pQJNR7TExYeBz2k"',
    "mtime": "2026-09-03T23:27:13.257Z",
    "size": 29758,
    "path": "../public/assets/associado-DN85Ms7U.js"
  },
  "/assets/auth-lC29kR0s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a431-pYgIxIJCtZFZ2Wy8nL3wGK3Pq3k"',
    "mtime": "2026-09-03T23:27:13.257Z",
    "size": 42033,
    "path": "../public/assets/auth-lC29kR0s.js"
  },
  "/assets/calendar-9HQ3tX7R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-Ic/BVseTz8Tb5v/arkPCESRmp60"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 258,
    "path": "../public/assets/calendar-9HQ3tX7R.js"
  },
  "/assets/circle-x-DkImIdtE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-2zUBMStIy++O8uEdf0VL00hnQrY"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 405,
    "path": "../public/assets/circle-x-DkImIdtE.js"
  },
  "/assets/circle-check-C61WtX6h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-Lqo25BRLwtLj8bCvVYHOtm1PQ+o"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 174,
    "path": "../public/assets/circle-check-C61WtX6h.js"
  },
  "/assets/contato-BeQlg1_U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2322-5shX0LkZHVyXR2RaTZ4QfpvBW3U"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 8994,
    "path": "../public/assets/contato-BeQlg1_U.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-03T23:27:13.253Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-DgCeOLYs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-vWJE71k23d2Lj1idMlz0QbWIWHU"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 208,
    "path": "../public/assets/credit-card-DgCeOLYs.js"
  },
  "/assets/download-QBc_7VHd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2049-IPNVEufPYINQYWOTzhwDnWkRLrE"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 8265,
    "path": "../public/assets/download-QBc_7VHd.js"
  },
  "/assets/download-llYxf2ul.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-Ae2vR7lGH3sq7Rhk/m/jJOliOK0"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 233,
    "path": "../public/assets/download-llYxf2ul.js"
  },
  "/assets/dumbbell-Bw7coFza.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-g9he4/4D3eYdRY0B5L5p/XoyX+o"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 561,
    "path": "../public/assets/dumbbell-Bw7coFza.js"
  },
  "/assets/eye-Crlmt3PP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-WMWi53PVqP8wYAxAMCBOBhc04cc"',
    "mtime": "2026-09-03T23:27:13.257Z",
    "size": 252,
    "path": "../public/assets/eye-Crlmt3PP.js"
  },
  "/assets/faq-8oe8VUSO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"794c-1RpGZpZzBNTlmsbjOYYErAMdPi0"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 31052,
    "path": "../public/assets/faq-8oe8VUSO.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-03T23:27:13.255Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-03T23:27:13.253Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-03T23:27:13.253Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/file-text-DoWz9NvC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-3/e8W3AUd8poX7cybaQ8CqeBzKg"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 386,
    "path": "../public/assets/file-text-DoWz9NvC.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-03T23:27:18.949Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-03T23:27:18.956Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/gift-B1OibZww.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-660JeE9wnzW95a7viVQo/9hgiCg"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 350,
    "path": "../public/assets/gift-B1OibZww.js"
  },
  "/assets/home-B7kr8Rd0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ab1-edoK9wBKjR7Aot0qgGtQ2gbkVJ0"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 10929,
    "path": "../public/assets/home-B7kr8Rd0.js"
  },
  "/assets/index-B0IKTKMX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef0d-UIS0vO5MgLlOwGnsG7lxjiLCN2s"',
    "mtime": "2026-09-03T23:27:13.257Z",
    "size": 61197,
    "path": "../public/assets/index-B0IKTKMX.js"
  },
  "/assets/index-BOXSPlKY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"71dff-RBQOlf+1rVf//NUckTDn7uKsb0s"',
    "mtime": "2026-09-03T23:27:13.256Z",
    "size": 466431,
    "path": "../public/assets/index-BOXSPlKY.js"
  },
  "/assets/key-round-B6wEhtV1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15f-i2qweybn/LN00fcOuv4F/DygvL0"',
    "mtime": "2026-09-03T23:27:13.257Z",
    "size": 351,
    "path": "../public/assets/key-round-B6wEhtV1.js"
  },
  "/assets/levels-UfKiPpBg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-+ICm9imP/oeExUJ5gMoe9M5HGDA"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 6869,
    "path": "../public/assets/levels-UfKiPpBg.js"
  },
  "/assets/link-2-kBA3rUb1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-igz8NO9e/JCE3iavSZO/yKDCXW0"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 243,
    "path": "../public/assets/link-2-kBA3rUb1.js"
  },
  "/assets/lock-DkWzdR7C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-R0U0+32UqNkjubd4aksFA1ggty0"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 202,
    "path": "../public/assets/lock-DkWzdR7C.js"
  },
  "/assets/log-in-CeJ1xRQu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-SKeEAAy7quHHor2X+7trofr2FUM"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 232,
    "path": "../public/assets/log-in-CeJ1xRQu.js"
  },
  "/assets/mail-CW3v2d20.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-4A1lu0x9gZb7I9NEU2VUVq7P0A8"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 214,
    "path": "../public/assets/mail-CW3v2d20.js"
  },
  "/assets/map-pin-CGXp4iN4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-WATcpL9Nw1IMRj3qX4w+k/v8Swg"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 255,
    "path": "../public/assets/map-pin-CGXp4iN4.js"
  },
  "/assets/market-M6oTYTxr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-AKF/PheveJp7ApQOIpQD+GWIwrk"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 26473,
    "path": "../public/assets/market-M6oTYTxr.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-03T23:27:13.259Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-e28ksYrK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9398-Y2lQrdhQVe0c+C1RMBmNQkMimZY"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 37784,
    "path": "../public/assets/parceiros-e28ksYrK.js"
  },
  "/assets/percent-DyZv7Gjl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-GYmps9uqiJRd4ithCVZWNXFUM+U"',
    "mtime": "2026-09-03T23:27:13.257Z",
    "size": 646,
    "path": "../public/assets/percent-DyZv7Gjl.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-03T23:27:18.963Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-03T23:27:13.259Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-03T23:27:18.964Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-C8314A7R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-5TxbKBek+pkbKoA1Qad+pgUuSRY"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 323,
    "path": "../public/assets/phone-C8314A7R.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-03T23:27:13.255Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-03T23:27:13.253Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-03T23:27:13.255Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-03T23:27:13.253Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-DrZdB1Fx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-/Wo5Pc+SmzrL860XMLncDbL0VfQ"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 30867,
    "path": "../public/assets/profile-DrZdB1Fx.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-03T23:27:13.261Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-03T23:27:13.253Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-03T23:27:13.254Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-03T23:27:18.967Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/search-CO5nOdq8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-jSVrDSWINJud7XcYy2ixVHt1AlE"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 170,
    "path": "../public/assets/search-CO5nOdq8.js"
  },
  "/assets/shield-check-BmvNjtvY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-asdS4m9px7NB4lTMwcY+vXxmjec"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 316,
    "path": "../public/assets/shield-check-BmvNjtvY.js"
  },
  "/assets/styles-Cce0mIlv.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"296b8-EwvQaSyO8/V6ZDYII9cHscSSEeQ"',
    "mtime": "2026-09-03T23:27:13.255Z",
    "size": 169656,
    "path": "../public/assets/styles-Cce0mIlv.css"
  },
  "/assets/trash-2-DwxU1CW3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-YOb8oPIOrrD0oBxKTaOIsyW8fXk"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 690,
    "path": "../public/assets/trash-2-DwxU1CW3.js"
  },
  "/assets/truck-DFshJVA3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-ctV5btXwCsANZApLkcBHKncQaYk"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 1109,
    "path": "../public/assets/truck-DFshJVA3.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-03T23:27:13.261Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/user-plus-BlJPhmoI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-NpdjR4b+BEch/nghgaF6O14dbHU"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 311,
    "path": "../public/assets/user-plus-BlJPhmoI.js"
  },
  "/assets/users-T-613W9Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-i3B9GgB1miwTWDulsV2RAW6ddaI"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 307,
    "path": "../public/assets/users-T-613W9Z.js"
  },
  "/assets/wallet-DbZPTh1b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-p3/aoh0ejf/EqSAdZ8xiYRMHuEw"',
    "mtime": "2026-09-03T23:27:13.258Z",
    "size": 4687,
    "path": "../public/assets/wallet-DbZPTh1b.js"
  },
  "/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml": {
    "type": "application/xml",
    "etag": '"7ca-kATGz8x1SLGk8QlzS7UgeqgXmxQ"',
    "mtime": "2026-09-03T23:27:18.903Z",
    "size": 1994,
    "path": "../public/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml"
  },
  "/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml": {
    "type": "application/xml",
    "etag": '"9e4-VESQYPBYMiS7nY1cg79RtZ2yIT8"',
    "mtime": "2026-09-03T23:27:18.890Z",
    "size": 2532,
    "path": "../public/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml": {
    "type": "application/xml",
    "etag": '"a07-ECis3dxpyVRrYxvG3YBcJ8yH1LA"',
    "mtime": "2026-09-03T23:27:18.904Z",
    "size": 2567,
    "path": "../public/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml": {
    "type": "application/xml",
    "etag": '"a0f-ZEWWYe5lZOszlQlgopFp4HfdxTU"',
    "mtime": "2026-09-03T23:27:18.903Z",
    "size": 2575,
    "path": "../public/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml"
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
