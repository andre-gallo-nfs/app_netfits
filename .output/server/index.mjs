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
    "mtime": "2026-09-04T13:31:45.272Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-04T13:31:45.272Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-04T13:31:45.272Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-04T13:31:45.273Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-04T13:31:45.273Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-04T13:31:45.254Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-04T13:31:45.255Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"c472-6lRqgrJrc+gQ27tIKFGebwvQoMc"',
    "mtime": "2026-09-04T13:31:45.256Z",
    "size": 50290,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-04T13:31:45.256Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a9a5-uH4bqxnKSUQgogTqioUrhsZYQIM"',
    "mtime": "2026-09-04T13:31:45.258Z",
    "size": 43429,
    "path": "../public/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-04T13:31:45.266Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"dcb8-IVL5UCt+u3m22AYHmlnvajcTwuE"',
    "mtime": "2026-09-04T13:31:45.258Z",
    "size": 56504,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-04T13:31:45.269Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/assets/InstitutionalWebHeader-BPmWwdyq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c84-TgXlCB7QU33VhxWvOOnUhsm19+8"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 3204,
    "path": "../public/assets/InstitutionalWebHeader-BPmWwdyq.js"
  },
  "/assets/ProductDetailSheet-B5OuJgYt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-EK1MBCQu7zcgqlgbX4mNOe2ckDQ"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-B5OuJgYt.js"
  },
  "/assets/activities-Bj_BLDG5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-qiAJ/RwgBMhU4VQylucMJQw9ua0"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 1196,
    "path": "../public/assets/activities-Bj_BLDG5.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apple-1XJK9wUr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-UG5n4XnvLkWWDxFj/kXeZxPEB/E"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 315,
    "path": "../public/assets/apple-1XJK9wUr.js"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-04T13:31:45.268Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-CmdWXTyg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"acbc6-+/tV8QH7BnoyLcx9PCsSz+cjPcw"',
    "mtime": "2026-09-04T13:31:36.142Z",
    "size": 707526,
    "path": "../public/assets/admin-CmdWXTyg.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-04T13:31:45.267Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/arrow-up-right-ix5oNOHv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-83mwzEQwqxoFyPEBBGZxKKyLoZQ"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-ix5oNOHv.js"
  },
  "/assets/associado-DqYe1qZs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"743e-fs7U6cVz4cUg0qq+IWnC/1ZVT6A"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 29758,
    "path": "../public/assets/associado-DqYe1qZs.js"
  },
  "/assets/calendar-Gsv-7taS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-UpX9Y79UQQdlj1n3+fFxu/oaB5M"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 258,
    "path": "../public/assets/calendar-Gsv-7taS.js"
  },
  "/assets/auth-DqqiAiXM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a431-i5P3FhXqlly4mTcmG5DSq7SxeE4"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 42033,
    "path": "../public/assets/auth-DqqiAiXM.js"
  },
  "/assets/circle-check-CFjD61H-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-+BbxDcFZI+BnxlrRJQpto5ujQ2s"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 174,
    "path": "../public/assets/circle-check-CFjD61H-.js"
  },
  "/assets/circle-x-BQ1YXiKo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-cFLqDZW+JYk6v0KLwSryodEQ1Zs"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 405,
    "path": "../public/assets/circle-x-BQ1YXiKo.js"
  },
  "/assets/contato-DFz_uFPI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2322-RReA8y3hcnq9pAJQtPw1P8k5GKs"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 8994,
    "path": "../public/assets/contato-DFz_uFPI.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-04T13:31:36.128Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/credit-card-CydsKe3G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-CeNxPUoS/M7/3UrFjkDvuNZ5mDo"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 208,
    "path": "../public/assets/credit-card-CydsKe3G.js"
  },
  "/assets/download-DLBdlkvU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2049-mHnzFlFGr+LCvyD5DKcPduk2wa0"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 8265,
    "path": "../public/assets/download-DLBdlkvU.js"
  },
  "/assets/download-qzOJ-Lxl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e9-ogIul1/UebHIOIPV62YO0jNs3Zg"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 233,
    "path": "../public/assets/download-qzOJ-Lxl.js"
  },
  "/assets/dumbbell-C8WEanuG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-TXn5ZQrJfqNoSuVzGfYbWoCfLQQ"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C8WEanuG.js"
  },
  "/assets/eye-B5pZfUHb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-i7Vg9NJHnLwc8b8x/wyclVhWzIU"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 252,
    "path": "../public/assets/eye-B5pZfUHb.js"
  },
  "/assets/faq-DzJCPVhm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7973-xvANfgi3ifBujpvJBT14ZsgCdXk"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 31091,
    "path": "../public/assets/faq-DzJCPVhm.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-04T13:31:36.128Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-04T13:31:36.129Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-04T13:31:36.128Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/file-text-CHQNFZjy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-5ykHUwPp2y+dbes97l4aDGJXdyA"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 386,
    "path": "../public/assets/file-text-CHQNFZjy.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-04T13:31:45.291Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-04T13:31:45.288Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/assets/gift-WyyrJzzZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-4iipDxYEjFO+70CkxWq9RcK2YZc"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 350,
    "path": "../public/assets/gift-WyyrJzzZ.js"
  },
  "/assets/home-CitLUP7j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ab1-eiV5MJr1qcT9hlehxjB8HI1Duu8"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 10929,
    "path": "../public/assets/home-CitLUP7j.js"
  },
  "/assets/index-CmznVF62.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"71dfd-LgE6rzlx9pM/oJehGcVVE+RzRoI"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 466429,
    "path": "../public/assets/index-CmznVF62.js"
  },
  "/assets/index-De5urVtC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef22-Wg0xNRmiYYKOOKb2s2BEKiZV6SU"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 61218,
    "path": "../public/assets/index-De5urVtC.js"
  },
  "/assets/key-round-DXRBSw2m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15f-RjIPiZ32gPZ/Wh+s9LjCDIbcq94"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 351,
    "path": "../public/assets/key-round-DXRBSw2m.js"
  },
  "/assets/levels-BlGk8NfY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-4YFjTr93KJ+jWwfBDioBbQIEJqw"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 6869,
    "path": "../public/assets/levels-BlGk8NfY.js"
  },
  "/assets/link-2-COPfcftj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-YCDE9phq0q2VG3mLDFQZ+kg9IyY"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 243,
    "path": "../public/assets/link-2-COPfcftj.js"
  },
  "/assets/lock-DnMwGtyt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-yMRyO99yWIZLJZRxgnuRBvQYTdw"',
    "mtime": "2026-09-04T13:31:36.139Z",
    "size": 202,
    "path": "../public/assets/lock-DnMwGtyt.js"
  },
  "/assets/log-in-zPkmcJwP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-9g34fv093X64L3GHeQccGQCck+k"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 232,
    "path": "../public/assets/log-in-zPkmcJwP.js"
  },
  "/assets/mail-RcXvVpsp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-9mhatfZWa4srgAhTHq6aub3KFsg"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 214,
    "path": "../public/assets/mail-RcXvVpsp.js"
  },
  "/assets/map-pin-EPLICPQp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-idgxsphqVupcGOz193FpLUgXd4k"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 255,
    "path": "../public/assets/map-pin-EPLICPQp.js"
  },
  "/assets/market-C4j20MeI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-FdleyKFyUNDcvIFh5dRwT4osw/A"',
    "mtime": "2026-09-04T13:31:36.137Z",
    "size": 26473,
    "path": "../public/assets/market-C4j20MeI.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-wDiqp1xs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9398-1oVhP4lFbBqgmfQAZWRqr2+svXI"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 37784,
    "path": "../public/assets/parceiros-wDiqp1xs.js"
  },
  "/assets/percent-OnpNsSNQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-HNAL7SKvvOgBGMQ4qVv4unUHkt8"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 646,
    "path": "../public/assets/percent-OnpNsSNQ.js"
  },
  "/assets/phone-6XwV86wj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-wQOQ1Z7JL3cjQntTBTInarSrPWY"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 323,
    "path": "../public/assets/phone-6XwV86wj.js"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-04T13:31:45.314Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-04T13:31:45.366Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-04T13:31:36.128Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-04T13:31:36.129Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-BMB-E7CF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"794c-O+VGtdTe4FllOU8onPVZ2FwmGeo"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 31052,
    "path": "../public/assets/profile-BMB-E7CF.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-04T13:31:36.129Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-04T13:31:45.368Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-04T13:31:36.144Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-04T13:31:36.135Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/search-DA393exb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-nen+7jStEEaP+yliKMU+mucEUdA"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 170,
    "path": "../public/assets/search-DA393exb.js"
  },
  "/assets/shield-check-Bv6RpWp9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-BQPVvmvImNqPbeEgYrgpA4UmECM"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 316,
    "path": "../public/assets/shield-check-Bv6RpWp9.js"
  },
  "/assets/styles-Cce0mIlv.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"296b8-EwvQaSyO8/V6ZDYII9cHscSSEeQ"',
    "mtime": "2026-09-04T13:31:36.136Z",
    "size": 169656,
    "path": "../public/assets/styles-Cce0mIlv.css"
  },
  "/assets/trash-2-Bi0jX8xC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-8KaGOWUf7euJnSiglZO40DoZMmw"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 690,
    "path": "../public/assets/trash-2-Bi0jX8xC.js"
  },
  "/assets/truck-COeHAFeH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-j9zI5jGtG3O3b0RfU30gTXl+gOI"',
    "mtime": "2026-09-04T13:31:36.140Z",
    "size": 1109,
    "path": "../public/assets/truck-COeHAFeH.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-04T13:31:36.143Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/user-plus-B_lEjJOR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-ka+bPfNDyTN5Mn6CiiaaRVvrhlc"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 311,
    "path": "../public/assets/user-plus-B_lEjJOR.js"
  },
  "/assets/users-B9in4xLT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-pVZn1m1FHDLkerEhtEmNIIPueQU"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 307,
    "path": "../public/assets/users-B9in4xLT.js"
  },
  "/assets/wallet-DV8F-EKk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-WV2xqGqBpNnII7ENnSe11X2xHfs"',
    "mtime": "2026-09-04T13:31:36.141Z",
    "size": 4687,
    "path": "../public/assets/wallet-DV8F-EKk.js"
  },
  "/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml": {
    "type": "application/xml",
    "etag": '"7ca-kATGz8x1SLGk8QlzS7UgeqgXmxQ"',
    "mtime": "2026-09-04T13:31:45.263Z",
    "size": 1994,
    "path": "../public/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml"
  },
  "/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml": {
    "type": "application/xml",
    "etag": '"9e4-VESQYPBYMiS7nY1cg79RtZ2yIT8"',
    "mtime": "2026-09-04T13:31:45.250Z",
    "size": 2532,
    "path": "../public/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml": {
    "type": "application/xml",
    "etag": '"a0f-ZEWWYe5lZOszlQlgopFp4HfdxTU"',
    "mtime": "2026-09-04T13:31:45.263Z",
    "size": 2575,
    "path": "../public/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml": {
    "type": "application/xml",
    "etag": '"a07-ECis3dxpyVRrYxvG3YBcJ8yH1LA"',
    "mtime": "2026-09-04T13:31:45.259Z",
    "size": 2567,
    "path": "../public/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml"
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
