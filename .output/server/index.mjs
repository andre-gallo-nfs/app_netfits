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
    "mtime": "2026-09-04T22:04:04.460Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-04T22:04:04.459Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-04T22:04:04.461Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-04T22:04:04.460Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-04T22:04:04.462Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-04T22:04:04.448Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"c472-6lRqgrJrc+gQ27tIKFGebwvQoMc"',
    "mtime": "2026-09-04T22:04:04.448Z",
    "size": 50290,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-04T22:04:04.448Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-04T22:04:04.448Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a9a5-uH4bqxnKSUQgogTqioUrhsZYQIM"',
    "mtime": "2026-09-04T22:04:04.453Z",
    "size": 43429,
    "path": "../public/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-04T22:04:04.451Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"dcb8-IVL5UCt+u3m22AYHmlnvajcTwuE"',
    "mtime": "2026-09-04T22:04:04.451Z",
    "size": 56504,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/assets/InstitutionalWebHeader-BVZbQi6K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c84-OoIBSCJM8s0NHuv7SQl+kvsHTXI"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 3204,
    "path": "../public/assets/InstitutionalWebHeader-BVZbQi6K.js"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-04T22:04:04.452Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/assets/activities-6-mw6el8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-2bjdCef5nUZ9eYjbrlGzXqeg38E"',
    "mtime": "2026-09-04T22:03:57.233Z",
    "size": 1196,
    "path": "../public/assets/activities-6-mw6el8.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-04T22:03:57.228Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-04T22:03:57.227Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-04T22:03:57.228Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apple-BivyvmjY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-O4EhHSG0vyxM+fi5vbkoMN9kaMQ"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 315,
    "path": "../public/assets/apple-BivyvmjY.js"
  },
  "/assets/arrow-up-right-_LXt9E61.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-FNPN8kT57cHNslMqrtDK19JqaDc"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-_LXt9E61.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-04T22:04:04.454Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-hA4vhdyv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2857-uF1sfUpnF1x+CFtbd6CPBIXQ3tU"',
    "mtime": "2026-09-04T22:03:57.246Z",
    "size": 731223,
    "path": "../public/assets/admin-hA4vhdyv.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-04T22:04:04.455Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/associado-535XKmlu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"743e-YldL5/kL6NW8ZhbePK6gLTf9bGY"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 29758,
    "path": "../public/assets/associado-535XKmlu.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-04T22:03:57.233Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/auth-A9zzQd9g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a3f1-3JmelFTxMZ6TVwKs9Za3jtF9tx8"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 41969,
    "path": "../public/assets/auth-A9zzQd9g.js"
  },
  "/assets/calendar-DiKf_ctE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-gOyBm/88xtQH1MMQtxZQa9lJv9k"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 258,
    "path": "../public/assets/calendar-DiKf_ctE.js"
  },
  "/assets/circle-alert-Co9OSiPu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fb-jFvYpHntC6YNoHDvmS4r9Wi7jBw"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 251,
    "path": "../public/assets/circle-alert-Co9OSiPu.js"
  },
  "/assets/circle-check-Q1s35MZS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-NkWlY13F9JUyGFpNq/UvgRRGzpk"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 174,
    "path": "../public/assets/circle-check-Q1s35MZS.js"
  },
  "/assets/circle-x-CXs_qNRf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cb-eUCEsnNggJHKWRtoHTrjMK+AVR0"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 203,
    "path": "../public/assets/circle-x-CXs_qNRf.js"
  },
  "/assets/contato-khJ4N2iQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2322-uBbmb5+X32gXB3pXZ0rbQN4/xHU"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 8994,
    "path": "../public/assets/contato-khJ4N2iQ.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-04T22:03:57.227Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-DpPp_zVB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-SvUcNaHEcSvWU5p206tXQ5PJleM"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 208,
    "path": "../public/assets/credit-card-DpPp_zVB.js"
  },
  "/assets/download-BPS98taY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2049-3TJYX5qIw7Ao1cwkWc9DqGX7tgo"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 8265,
    "path": "../public/assets/download-BPS98taY.js"
  },
  "/assets/download-C7fee5e_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-OmsRV4sy5UpMHrEpsoA03Wl922o"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 233,
    "path": "../public/assets/download-C7fee5e_.js"
  },
  "/assets/dumbbell-CMbESTQJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-6AzyVReuVrb8iDCZHwEnawX8cZA"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 561,
    "path": "../public/assets/dumbbell-CMbESTQJ.js"
  },
  "/assets/eye-ChqTW9j4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-M3YrW547kl+zT0yEeMqkjk5qVWk"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 252,
    "path": "../public/assets/eye-ChqTW9j4.js"
  },
  "/assets/faq-CHiRBLPP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7973-E9csPGo2GhrSFu1UC08BwAMtF+I"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 31091,
    "path": "../public/assets/faq-CHiRBLPP.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-04T22:03:57.232Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-data-3zX_OdbA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a2d-/CUITuSYXRU9lF8qj/c2Kls3t08"',
    "mtime": "2026-09-04T22:03:57.233Z",
    "size": 2605,
    "path": "../public/assets/feed-data-3zX_OdbA.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-04T22:03:57.224Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-04T22:03:57.224Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-04T22:03:57.224Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/file-text-BsIRXy_W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-ij7+UxUsKzP7PvhDFioa8PQojRM"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 386,
    "path": "../public/assets/file-text-BsIRXy_W.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-04T22:03:57.228Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-04T22:04:04.471Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-04T22:03:57.231Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-04T22:04:04.474Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/assets/gift-XXcjW2wg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-hyAJNdp39/TNmkaNEMJhZv/Bdxo"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 350,
    "path": "../public/assets/gift-XXcjW2wg.js"
  },
  "/assets/home-BairvtFe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ab1-DryjaUECa8OrVhi6j85Q8gdj53w"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 10929,
    "path": "../public/assets/home-BairvtFe.js"
  },
  "/assets/index-5CTouNMo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"135d7-FaBG6zTC7uUPNflJIwxRydREPwU"',
    "mtime": "2026-09-04T22:03:57.233Z",
    "size": 79319,
    "path": "../public/assets/index-5CTouNMo.js"
  },
  "/assets/key-round-iHfFoWbA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15f-Q+delPv3oq/E91LIucScqL02yJw"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 351,
    "path": "../public/assets/key-round-iHfFoWbA.js"
  },
  "/assets/levels-C3DlqF5K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-NAwdI7StM2C8eNmxEV9pFdZzTxw"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 6869,
    "path": "../public/assets/levels-C3DlqF5K.js"
  },
  "/assets/link-2-CY_XrFAR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-xZxzFOWImFEkwyEIpuUr9EXtlck"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 243,
    "path": "../public/assets/link-2-CY_XrFAR.js"
  },
  "/assets/lock-y0cIV7-C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-hYHZlGZ8T1Evw30zL/JMykxUE90"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 202,
    "path": "../public/assets/lock-y0cIV7-C.js"
  },
  "/assets/log-in-CHW8ZChc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-fDi4Fxghl23ihYLLVt4OCCCte8w"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 232,
    "path": "../public/assets/log-in-CHW8ZChc.js"
  },
  "/assets/mail-DZv6hq4m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-uEGgqF5/Cxl1fNrDniPHSgDPns8"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 214,
    "path": "../public/assets/mail-DZv6hq4m.js"
  },
  "/assets/map-pin-Bv2VWS31.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-wWt1eTYoaFjW07O3PmTMp6IUq5U"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 255,
    "path": "../public/assets/map-pin-Bv2VWS31.js"
  },
  "/assets/market-y3ADGzsX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1331-v7qlIM6Dy9UwQugPNENXpiUDLz0"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 4913,
    "path": "../public/assets/market-y3ADGzsX.js"
  },
  "/assets/index-CcDe-9bx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"71ea1-rs2GJtf5PmLMAYlrbEI24GB2+6E"',
    "mtime": "2026-09-04T22:03:57.233Z",
    "size": 466593,
    "path": "../public/assets/index-CcDe-9bx.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-DLGkvNGE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"92cc-iqcJj1U0Jca7mg67IhrCOAQ9DV0"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 37580,
    "path": "../public/assets/parceiros-DLGkvNGE.js"
  },
  "/assets/percent-82L3pHLF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-kIflKsk8KZCYIHiJvSwR4ew77WY"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 646,
    "path": "../public/assets/percent-82L3pHLF.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-04T22:04:04.471Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-04T22:04:04.487Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/phone-DP0FdQdw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-/6IwvLa+H6StwSfK8zMcj9E+uJY"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 323,
    "path": "../public/assets/phone-DP0FdQdw.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-04T22:03:57.232Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-04T22:03:57.232Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-04T22:03:57.232Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-04T22:03:57.232Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-04T22:03:57.231Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-04T22:03:57.231Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-04T22:03:57.231Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-04T22:03:57.232Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-04T22:03:57.231Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-04T22:03:57.224Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-04T22:03:57.224Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-04T22:03:57.231Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-04T22:03:57.231Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-BXW8soQ8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"794c-dNcsLj0NOkmmu4oEQtCYNZu5Ra0"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 31052,
    "path": "../public/assets/profile-BXW8soQ8.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-04T22:03:57.225Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-04T22:03:57.249Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-04T22:03:57.227Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-04T22:03:57.231Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-04T22:04:04.477Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-04T22:03:57.224Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/search-CHXfrTPM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-LNOBj3EznN6+//ivbnayKgqwXME"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 170,
    "path": "../public/assets/search-CHXfrTPM.js"
  },
  "/assets/refresh-cw-DckOjYU_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"142-+sVfkNs2cybxUPPoTexrN/BESrA"',
    "mtime": "2026-09-04T22:03:57.234Z",
    "size": 322,
    "path": "../public/assets/refresh-cw-DckOjYU_.js"
  },
  "/assets/server-DYsBV9UG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-egQ76U7mf4g2xAcEA3KxCNss9mw"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 339,
    "path": "../public/assets/server-DYsBV9UG.js"
  },
  "/assets/shield-check-CFEu_e0B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-f0CIqtOAHXrj0KsbXBBuhgpHEaQ"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 316,
    "path": "../public/assets/shield-check-CFEu_e0B.js"
  },
  "/assets/styles-BlUsJVIU.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"29971-cP48B1tl5hqYVHo6Oc3GZBXYZyc"',
    "mtime": "2026-09-04T22:03:57.233Z",
    "size": 170353,
    "path": "../public/assets/styles-BlUsJVIU.css"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-04T22:03:57.247Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/trash-2-CTTcNVEB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-AT5tNySsQu+liz3m3KEq1b3Tpo0"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 690,
    "path": "../public/assets/trash-2-CTTcNVEB.js"
  },
  "/assets/truck-CiQCsp0c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4e3-OwL7EygCaqQdw/cPkKyp2NkSIh4"',
    "mtime": "2026-09-04T22:03:57.233Z",
    "size": 1251,
    "path": "../public/assets/truck-CiQCsp0c.js"
  },
  "/assets/user-plus-DDJGl-1A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-Osz8dzUxbGfRI6w3Qlg7WDbgXtA"',
    "mtime": "2026-09-04T22:03:57.243Z",
    "size": 311,
    "path": "../public/assets/user-plus-DDJGl-1A.js"
  },
  "/assets/users-BFdQl_Ps.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-yAhOPNLqLGlK5H2gKTJkEWJmRmE"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 307,
    "path": "../public/assets/users-BFdQl_Ps.js"
  },
  "/assets/wallet-9UkM_w1v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-kI5ATWHWQou5WsknKYFN4Fqold4"',
    "mtime": "2026-09-04T22:03:57.244Z",
    "size": 4687,
    "path": "../public/assets/wallet-9UkM_w1v.js"
  },
  "/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml": {
    "type": "application/xml",
    "etag": '"9e4-VESQYPBYMiS7nY1cg79RtZ2yIT8"',
    "mtime": "2026-09-04T22:04:04.446Z",
    "size": 2532,
    "path": "../public/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml"
  },
  "/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml": {
    "type": "application/xml",
    "etag": '"7ca-kATGz8x1SLGk8QlzS7UgeqgXmxQ"',
    "mtime": "2026-09-04T22:04:04.453Z",
    "size": 1994,
    "path": "../public/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml": {
    "type": "application/xml",
    "etag": '"a07-ECis3dxpyVRrYxvG3YBcJ8yH1LA"',
    "mtime": "2026-09-04T22:04:04.454Z",
    "size": 2567,
    "path": "../public/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml": {
    "type": "application/xml",
    "etag": '"a0f-ZEWWYe5lZOszlQlgopFp4HfdxTU"',
    "mtime": "2026-09-04T22:04:04.453Z",
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
