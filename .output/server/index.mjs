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
    "mtime": "2026-09-02T17:24:30.675Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T17:24:30.676Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-02T17:24:30.723Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-02T17:24:30.727Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-02T17:24:30.732Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-02T17:24:30.490Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-02T17:24:30.490Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"c285-u1RduyEWs4MGR7wnqSBEInnAYEg"',
    "mtime": "2026-09-02T17:24:30.492Z",
    "size": 49797,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-02T17:24:30.491Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T17:24:30.497Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/assets/InstitutionalWebHeader-DlMk1cN6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d11-p3aae9xTTEg7ihiHLS2EUrDdR4g"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 3345,
    "path": "../public/assets/InstitutionalWebHeader-DlMk1cN6.js"
  },
  "/assets/ProductDetailSheet-DZhHRQV0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-HPGdszhSEXd7dK0qvwne5sNurVQ"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-DZhHRQV0.js"
  },
  "/assets/activities-BeH91-jL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-IMxirv9eP7oc4vp8py2yXWO6QIc"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 1196,
    "path": "../public/assets/activities-BeH91-jL.js"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-02T17:24:30.497Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"a2aa-ivFUdSBYs6biyn+XrviAfll732o"',
    "mtime": "2026-09-02T17:24:30.506Z",
    "size": 41642,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/arrow-up-right-BS2_Yo-W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-hSJAIHDHErB1wFCDxFPLoPS3eJI"',
    "mtime": "2026-09-02T17:24:23.906Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BS2_Yo-W.js"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apple-D64GvVIQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-ZtiRuF0GGuMMKKvYMA0xBDmvdyE"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 315,
    "path": "../public/assets/apple-D64GvVIQ.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-02T17:24:30.645Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-B6Rfm9ZZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8e6f-QqlwXR2vNl+dE9gKp+XblRn4KJc"',
    "mtime": "2026-09-02T17:24:23.909Z",
    "size": 691823,
    "path": "../public/assets/admin-B6Rfm9ZZ.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-02T17:24:30.656Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/associado-D0mqp3Ey.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-1yqcYzUf6jn8ga07In8BsE1mcTk"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 29722,
    "path": "../public/assets/associado-D0mqp3Ey.js"
  },
  "/assets/auth-CKXCRWn5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b4ab-iPXHjCr+ulOyod/NOf2Fkm2EFy4"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 46251,
    "path": "../public/assets/auth-CKXCRWn5.js"
  },
  "/assets/calendar-FxcuegsF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-iIT7wwx5JERC6/Z761mCTTR6QVg"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 258,
    "path": "../public/assets/calendar-FxcuegsF.js"
  },
  "/assets/circle-check-DxMYRoOD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-pNPt4PQBZtX3szezS6ssrCQ7BGM"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 174,
    "path": "../public/assets/circle-check-DxMYRoOD.js"
  },
  "/assets/circle-x-D7TUKbri.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-wZhPDBAmr4B01b2gh/L7dntd/X8"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 405,
    "path": "../public/assets/circle-x-D7TUKbri.js"
  },
  "/assets/contato-CHzmHdwI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"214f-oasVuo5pXCghZCo5W7WLdC8BwRA"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 8527,
    "path": "../public/assets/contato-CHzmHdwI.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/credit-card-BZtOBeT5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-ut/WZOCFZ19CrbNwzvn+6dHXpbI"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 208,
    "path": "../public/assets/credit-card-BZtOBeT5.js"
  },
  "/assets/download-Dz4sN1eC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"202a-dY/l4+h1kOj9SfoTSCmdsapweys"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 8234,
    "path": "../public/assets/download-Dz4sN1eC.js"
  },
  "/assets/dumbbell-BIPFwlvB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-h8kyavD6GbpJ6fYCzAtmPm9PN/g"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BIPFwlvB.js"
  },
  "/assets/eye-a22KN6fO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-D0+RXDZCvk7eBP/Z36elI03frzI"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 252,
    "path": "../public/assets/eye-a22KN6fO.js"
  },
  "/assets/faq-BiEImMUx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7895-pbNY7eR3XuGozaIEwZ1H3Ebk/T4"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 30869,
    "path": "../public/assets/faq-BiEImMUx.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/file-text-C13uGEwU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-wsJZtWl3mS7EuYYnei8InepUbIM"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 386,
    "path": "../public/assets/file-text-C13uGEwU.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-DgN1157i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-COTwRb5aJ0H2gt8CScXjdKTV7aE"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 350,
    "path": "../public/assets/gift-DgN1157i.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T17:24:30.729Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T17:24:30.772Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/assets/home-2Th7tCZp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a92-W6ZwTiw8ySOHb2anglU05xjkcWE"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 10898,
    "path": "../public/assets/home-2Th7tCZp.js"
  },
  "/assets/index-BmMkiKjh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-LQ+CWRbhsjh48F9DO05Ofws0VYE"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 61206,
    "path": "../public/assets/index-BmMkiKjh.js"
  },
  "/assets/levels-DgzZ8vKh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-SqzvAhtc6sHqVf3PBuT1H9nG9IM"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 6869,
    "path": "../public/assets/levels-DgzZ8vKh.js"
  },
  "/assets/link-2-DOdWkpWR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-xFsODQY4uAk1FJJ2REFJj8JSgFA"',
    "mtime": "2026-09-02T17:24:23.906Z",
    "size": 243,
    "path": "../public/assets/link-2-DOdWkpWR.js"
  },
  "/assets/index-DqilyY3P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"70b4d-jd0OjSMEBzJK63fK7Kv+yElLXRA"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 461645,
    "path": "../public/assets/index-DqilyY3P.js"
  },
  "/assets/lock-BaoGv1Qn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-xSm51kPFXgRHB92f91fHic0VjfE"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 202,
    "path": "../public/assets/lock-BaoGv1Qn.js"
  },
  "/assets/log-in-cbcCtTZD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-rhST9z0ywZD0G7KmeRy/xLLf8Y0"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 232,
    "path": "../public/assets/log-in-cbcCtTZD.js"
  },
  "/assets/mail-C5aA89YU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-QWkXSr0jnSzmBk/tgI/o5kssur0"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 214,
    "path": "../public/assets/mail-C5aA89YU.js"
  },
  "/assets/map-pin-D-p4c0hx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-l0zGNAnmjcvVbfj3GBqpHxfIKTs"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 255,
    "path": "../public/assets/map-pin-D-p4c0hx.js"
  },
  "/assets/market-CHTrgOH3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-yWxZLhBDCIQVIANzlJovnRl00Ls"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 26473,
    "path": "../public/assets/market-CHTrgOH3.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BKRq56GT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9379-8D5P4Ooezw96vliM74v8SaQXfcQ"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 37753,
    "path": "../public/assets/parceiros-BKRq56GT.js"
  },
  "/assets/percent-DOCyjw1h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-uaWHWkY5skkBkwPbP00kODwIx+8"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 646,
    "path": "../public/assets/percent-DOCyjw1h.js"
  },
  "/assets/phone-aubCtKcY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-vyEHt7QnOlv1VV/rrlccoANU0yc"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 323,
    "path": "../public/assets/phone-aubCtKcY.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-02T17:24:30.791Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T17:24:30.771Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-ug_eTZG9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-ZiZwQ79hj2ECM1+DQHuWO5zIZDk"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 30867,
    "path": "../public/assets/profile-ug_eTZG9.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T17:24:30.794Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/search-BtJiobqn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-sbQlzxyT4P8UY7oMaHDZkpCEibw"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 170,
    "path": "../public/assets/search-BtJiobqn.js"
  },
  "/assets/shield-check-DlkMy-DF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-EBahC/KdxJCTWLJ7cTIJWbEF4ZI"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 316,
    "path": "../public/assets/shield-check-DlkMy-DF.js"
  },
  "/assets/styles-CirCXK9o.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28966-HtbleMDguVGBfUAxhmxBe4hCUN8"',
    "mtime": "2026-09-02T17:24:23.903Z",
    "size": 166246,
    "path": "../public/assets/styles-CirCXK9o.css"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-02T17:24:23.902Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T17:24:23.912Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/trash-2-c0jUAEv6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-naR6E2HPEj51A4joJvowV79EH1c"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 690,
    "path": "../public/assets/trash-2-c0jUAEv6.js"
  },
  "/assets/truck-BPm4QmP9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-5nDmo4f2ZvwXmPel8tAxeqcEXmg"',
    "mtime": "2026-09-02T17:24:23.904Z",
    "size": 1109,
    "path": "../public/assets/truck-BPm4QmP9.js"
  },
  "/assets/user-plus-DL2BTp9H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-QVTVVMpuHnQUDkygP4m4UgBJYrY"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 311,
    "path": "../public/assets/user-plus-DL2BTp9H.js"
  },
  "/assets/users-CiX-9A9L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-j+28FhnCRf6gFOLGbubmEB+ASn8"',
    "mtime": "2026-09-02T17:24:23.905Z",
    "size": 307,
    "path": "../public/assets/users-CiX-9A9L.js"
  },
  "/assets/wallet-CyqGbTsw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-lwhD9zZWIqn+Crg9SfhEgYJ1708"',
    "mtime": "2026-09-02T17:24:23.906Z",
    "size": 4687,
    "path": "../public/assets/wallet-CyqGbTsw.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-02T17:24:23.911Z",
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
