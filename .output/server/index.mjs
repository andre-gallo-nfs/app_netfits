globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { c as FastResponse } from "./_libs/srvx.mjs";




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
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-09T20:24:22.587Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"261-2Ak9PKVftQWTe4pekgWalkUNc8c"',
    "mtime": "2026-09-09T20:24:22.587Z",
    "size": 609,
    "path": "../public/manifest.json"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a636-ogHQ/SWKkPdSbnRP4tz8snVaxzc"',
    "mtime": "2026-09-09T20:24:22.519Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-09T20:24:22.537Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"724-hMxjTFXpGO5IqL3bcwtGMiyuyyQ"',
    "mtime": "2026-09-09T20:24:22.587Z",
    "size": 1828,
    "path": "../public/sw.js"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-09T20:24:22.584Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-09T20:24:22.570Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-09T20:24:22.570Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"c472-6lRqgrJrc+gQ27tIKFGebwvQoMc"',
    "mtime": "2026-09-09T20:24:22.571Z",
    "size": 50290,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-09T20:24:22.571Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"9cd9-EW2y6xe2klu4sW46XouFFprpQec"',
    "mtime": "2026-09-10T16:15:00.788Z",
    "size": 40153,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a9a5-uH4bqxnKSUQgogTqioUrhsZYQIM"',
    "mtime": "2026-09-09T20:24:22.583Z",
    "size": 43429,
    "path": "../public/docs/Plano_Mestre_de_Prontidao_e_Lancamento_Oficial_Netfits.docx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-09T20:24:22.583Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/assets/activities-MoHtk2l2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"487-Q7Y1Srk4C7a/ocaJK6+kzWDTe98"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 1159,
    "path": "../public/assets/activities-MoHtk2l2.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-DsHhk7l_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-E3pYDL9hQFgYHxGIrWuysjyvb2c"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 315,
    "path": "../public/assets/apple-DsHhk7l_.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-09T20:24:22.582Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-B3aNNJmv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b694c-fJFDQcodLe6kTUw9Uao3FQg+rwo"',
    "mtime": "2026-09-10T23:51:42.616Z",
    "size": 747852,
    "path": "../public/assets/admin-B3aNNJmv.js"
  },
  "/assets/andre-gallo-ironman-DJy-Hx_L.jpg": {
    "type": "image/jpeg",
    "etag": '"82485-qx+0RixWLPWIFdzyi1rIuZjuo24"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 533637,
    "path": "../public/assets/andre-gallo-ironman-DJy-Hx_L.jpg"
  },
  "/assets/andre-gallo-ironman.jpg": {
    "type": "image/jpeg",
    "etag": '"82485-qx+0RixWLPWIFdzyi1rIuZjuo24"',
    "mtime": "2025-10-29T14:45:41.000Z",
    "size": 533637,
    "path": "../public/assets/andre-gallo-ironman.jpg"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"14836b-3Xap9Mope82IqovbTAynE9YNh9M"',
    "mtime": "2026-09-09T20:24:22.579Z",
    "size": 1344363,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/arrow-up-right-BrFVs1i4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-5mWPUeOiC7TnSWew7uG5R/BSeaE"',
    "mtime": "2026-09-10T23:51:42.615Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BrFVs1i4.js"
  },
  "/assets/associado-C96ituo4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7345-HFvgVGHmoBuXM/fi+a6i07MjmQw"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 29509,
    "path": "../public/assets/associado-C96ituo4.js"
  },
  "/assets/auth-rXw1XCvK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a839-5Z8jQaZe3NYwqkhvytLY1lOG6iA"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 43065,
    "path": "../public/assets/auth-rXw1XCvK.js"
  },
  "/assets/circle-alert-DUKU0fMV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fb-eUGkBYmLL86W0s44sTVFG4nKC/c"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 251,
    "path": "../public/assets/circle-alert-DUKU0fMV.js"
  },
  "/assets/calendar-D1Edu0yX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-JyZ0KutsG7+jbHYc4cmnyIp7pww"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 258,
    "path": "../public/assets/calendar-D1Edu0yX.js"
  },
  "/assets/circle-check-tKeFJAdn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-X1wXueWAOOfkQlozl1n4pXvnkl4"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 174,
    "path": "../public/assets/circle-check-tKeFJAdn.js"
  },
  "/assets/circle-x-CrLLlp0m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cb-jK0Sa+P//tNBBvryLwl1lg4D6hk"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 203,
    "path": "../public/assets/circle-x-CrLLlp0m.js"
  },
  "/assets/contato-BrCvV7Rc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2272-M1aKau+psltG9g9fkxGbu48tAIg"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 8818,
    "path": "../public/assets/contato-BrCvV7Rc.js"
  },
  "/assets/download-Fmkxh1vx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fc7-KFchJihxty/cqZbEu5XTQxj8m6k"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 8135,
    "path": "../public/assets/download-Fmkxh1vx.js"
  },
  "/assets/dumbbell-DeCtoZN0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-sNbOC6EDL7A9ty87jIqnAsdu+O8"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 561,
    "path": "../public/assets/dumbbell-DeCtoZN0.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-10T23:51:42.611Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/faq-acj2FTJ1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78c0-EVqwb5pCrWbHK5NO0ovEQ0J6xjk"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 30912,
    "path": "../public/assets/faq-acj2FTJ1.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-10T23:51:42.611Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-10T23:51:42.611Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-BOAojOJi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-nBJc3un5tQp64VEGtk0BOQqT1So"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 386,
    "path": "../public/assets/file-text-BOAojOJi.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-10T23:51:42.611Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/index-DE9UybRb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-Msz7Ny1g56v+60bnthHRwpRv3h8"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 208,
    "path": "../public/assets/index-DE9UybRb.js"
  },
  "/assets/key-round-DwaFkjSd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15f-M4p3lSCqIj667PodegwlRkQCZeg"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 351,
    "path": "../public/assets/key-round-DwaFkjSd.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"3240da-rm7UsTRBbD00UfgI9b9ryXDII8o"',
    "mtime": "2026-09-09T20:24:22.536Z",
    "size": 3293402,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/index-BMkYsLxd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"942df-lD7J4Ruiq/zYJ65UL6rsrhRdoq8"',
    "mtime": "2026-09-10T23:51:42.616Z",
    "size": 606943,
    "path": "../public/assets/index-BMkYsLxd.js"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"3240da-rm7UsTRBbD00UfgI9b9ryXDII8o"',
    "mtime": "2026-09-09T20:24:22.556Z",
    "size": 3293402,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/assets/log-in-BsX5uPkK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-4NSy5eKRMrmoWoFaIDhPNL+xJ9g"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 232,
    "path": "../public/assets/log-in-BsX5uPkK.js"
  },
  "/assets/levels-BeUhADbn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a8f-TpKllcdi9aaq6XRu1CJx3yw5NNg"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 6799,
    "path": "../public/assets/levels-BeUhADbn.js"
  },
  "/assets/market-Jrzh2goS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"130f-sNKs9ozaUte6v6qFs6WBAt4BGkM"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 4879,
    "path": "../public/assets/market-Jrzh2goS.js"
  },
  "/assets/percent-BnXJlmqw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-gZZjXDTGQkqMojgMS0C0AM1yOxM"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 646,
    "path": "../public/assets/percent-BnXJlmqw.js"
  },
  "/assets/phone-BqWFGO_H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-+LdmQqcSvjTPZbnpOcen7rp7rDY"',
    "mtime": "2026-09-10T23:51:42.615Z",
    "size": 323,
    "path": "../public/assets/phone-BqWFGO_H.js"
  },
  "/assets/parceiros-7CttQ8ou.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9028-0Wm8sPcZj3M961lM5sswM9/m8V8"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 36904,
    "path": "../public/assets/parceiros-7CttQ8ou.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-10T23:51:42.611Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-10T23:51:42.615Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-09T20:24:22.559Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-09T20:24:22.562Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-10T23:51:42.611Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-BqUkDCsO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78b1-A3kY+82kn+taw/bKbidOOp4BUVE"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 30897,
    "path": "../public/assets/profile-BqUkDCsO.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-10T23:51:42.618Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/refresh-cw-GB6lGu5a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"142-spnJChPh5yJD8B+oMym7QGsqEr4"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 322,
    "path": "../public/assets/refresh-cw-GB6lGu5a.js"
  },
  "/assets/search-BA_xnyVf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-aCmTEHXVbYxQKG7igj8PkKQsTdw"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 170,
    "path": "../public/assets/search-BA_xnyVf.js"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/server-DNEUridL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ea-VZTUEGXewUyuPwQ+olSoapj72Cc"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 490,
    "path": "../public/assets/server-DNEUridL.js"
  },
  "/assets/user-plus-DkZIREQj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-w63mr2VhiTJK0D9V6LbqLfDL+m0"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 311,
    "path": "../public/assets/user-plus-DkZIREQj.js"
  },
  "/assets/trash-2-B-8QELmS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-PT/RqCN0mBGjU65VO3UwCWTvQUs"',
    "mtime": "2026-09-10T23:51:42.614Z",
    "size": 690,
    "path": "../public/assets/trash-2-B-8QELmS.js"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-10T23:51:42.612Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml": {
    "type": "application/xml",
    "etag": '"a07-B0xD0+tlgk2n/arppif5YGBZYM8"',
    "mtime": "2026-09-09T20:24:22.585Z",
    "size": 2567,
    "path": "../public/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml"
  },
  "/assets/wallet-BX9prm-s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1229-5KlOl4k83+gAnhyjxPzadKq9BY4"',
    "mtime": "2026-09-10T23:51:42.615Z",
    "size": 4649,
    "path": "../public/assets/wallet-BX9prm-s.js"
  },
  "/assets/styles-4zUotIWb.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2ac0f-frFlrKgYXgdapTQWqPRxcWkX5bI"',
    "mtime": "2026-09-10T23:51:42.613Z",
    "size": 175119,
    "path": "../public/assets/styles-4zUotIWb.css"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-10T23:51:42.618Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-09T20:24:22.568Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml": {
    "type": "application/xml",
    "etag": '"a49-jvXONalJoHF4N75sny3ReeCdoCk"',
    "mtime": "2026-09-09T20:24:22.586Z",
    "size": 2633,
    "path": "../public/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml"
  },
  "/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml": {
    "type": "application/xml",
    "etag": '"7ec-rs/eInp/zPaADmHsU0gBKMIIo6M"',
    "mtime": "2026-09-09T20:24:22.586Z",
    "size": 2028,
    "path": "../public/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml"
  },
  "/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml": {
    "type": "application/xml",
    "etag": '"a51-CVMG/j7KCvVkB9hkdb5lsxdak5Q"',
    "mtime": "2026-09-09T20:24:22.586Z",
    "size": 2641,
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
const _lazy_zAACr3 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_zAACr3 };
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
