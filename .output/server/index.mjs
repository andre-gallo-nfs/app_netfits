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
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T17:16:51.774Z",
    "size": 47794,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a636-ogHQ/SWKkPdSbnRP4tz8snVaxzc"',
    "mtime": "2026-09-02T17:16:51.774Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"299f-Dh3ONDb8C2LTSeWlH7QsxWqyOtE"',
    "mtime": "2026-09-02T17:16:51.775Z",
    "size": 10655,
    "path": "../public/favicon.ico"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-09-02T17:16:51.774Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a036-HM/Uv9ZICucTCxRAOik+F5RR47o"',
    "mtime": "2026-09-02T17:16:51.767Z",
    "size": 41014,
    "path": "../public/docs/Netfits_Arquitetura_Squad_QA_Autonomo_IA.docx"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-09-02T17:16:51.774Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"a6e0-5jIBHRL3NZHAwrx3Qyujo1WwIFs"',
    "mtime": "2026-09-02T17:16:51.759Z",
    "size": 42720,
    "path": "../public/docs/Netfits_Diretrizes_Contratuais_Programa_Associados_10pct.docx"
  },
  "/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"c285-u1RduyEWs4MGR7wnqSBEInnAYEg"',
    "mtime": "2026-09-02T17:16:51.771Z",
    "size": 49797,
    "path": "../public/docs/Netfits_Dossie_Geral_do_Projeto_e_Linha_do_Tempo_Evolutiva.docx"
  },
  "/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-v+Kr3ny9RQpmmnNIdgvZkVlPsSE"',
    "mtime": "2026-09-02T17:16:51.759Z",
    "size": 47794,
    "path": "../public/docs/Netfits_Regulamento_Termos_e_LGPD_Revisao_Stix_Livelo.docx"
  },
  "/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"9c5f-gNxleJiqA79WVl0jUdIcLC0pOdk"',
    "mtime": "2026-09-02T17:16:51.765Z",
    "size": 40031,
    "path": "../public/docs/estudo_impacto_finops_squad_multiagentico_netfits.docx"
  },
  "/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx": {
    "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "etag": '"bab2-8DknPd1Dv3u12crHqRu0uvoOp/s"',
    "mtime": "2026-09-02T17:16:51.765Z",
    "size": 47794,
    "path": "../public/docs/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).docx"
  },
  "/assets/InstitutionalWebHeader-CUfJC6zh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d11-Oe4EM/ruHWzgP2Htpho1d59uvCw"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 3345,
    "path": "../public/assets/InstitutionalWebHeader-CUfJC6zh.js"
  },
  "/assets/ProductDetailSheet-CrXa72YM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-ajqE/JETslLcKbOLJCeSnpQcBPY"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-CrXa72YM.js"
  },
  "/assets/activities-BaiFBLWI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-RsMHVQwfwq2O59jsUySuX/sk2zc"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 1196,
    "path": "../public/assets/activities-BaiFBLWI.js"
  },
  "/docs/real x orçado.xlsx": {
    "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "etag": '"a2aa-ivFUdSBYs6biyn+XrviAfll732o"',
    "mtime": "2026-09-02T17:16:51.767Z",
    "size": 41642,
    "path": "../public/docs/real x orçado.xlsx"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/apple-7RIj7eF8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-kd3P49l8l1mNQjruIvKTQGImHPs"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 315,
    "path": "../public/assets/apple-7RIj7eF8.js"
  },
  "/assets/arrow-up-right-Dhw8jfiR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-Qw/p93ZW8eB5/u2Ta4G0HUtk4KI"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-Dhw8jfiR.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx": {
    "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "etag": '"fa79a-E+s133zKNx7Ae1OJ0c085GO0N5E"',
    "mtime": "2026-09-02T17:16:51.767Z",
    "size": 1025946,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pptx"
  },
  "/assets/admin-kYIyqZ2w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a9815-J1zFp9sHSW7rBmgs7MUUDX4tGjc"',
    "mtime": "2026-09-02T17:16:46.146Z",
    "size": 694293,
    "path": "../public/assets/admin-kYIyqZ2w.js"
  },
  "/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf": {
    "type": "application/pdf",
    "etag": '"148310-/x4gqS1qv3Cu3SAVvzev/pB3mI8"',
    "mtime": "2026-09-02T17:16:51.767Z",
    "size": 1344272,
    "path": "../public/docs/Netfits_Slide_Arquitetura_Multiagentica_IA.pdf"
  },
  "/assets/associado-DgvnRqXu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-SMVXiUtLvkry6KjQ2TsxhhsspM8"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 29722,
    "path": "../public/assets/associado-DgvnRqXu.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-09-02T17:16:46.142Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/auth-XKIXFA34.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b4ab-PKk1XM1UUgdc/cXDGZ860yVAKx4"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 46251,
    "path": "../public/assets/auth-XKIXFA34.js"
  },
  "/assets/calendar-DuC4ogkw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-ZTucr7nH7LvuZ0ed3Y0zw113tzE"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 258,
    "path": "../public/assets/calendar-DuC4ogkw.js"
  },
  "/assets/circle-check-VXoPwg4F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-OyyX4/sa7+1E9R4XJ1PETbnSat4"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 174,
    "path": "../public/assets/circle-check-VXoPwg4F.js"
  },
  "/assets/circle-x-on6d5gMH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-t57JSuFxYosoykvtbpapFfivNic"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 405,
    "path": "../public/assets/circle-x-on6d5gMH.js"
  },
  "/assets/contato-D5BUMPRI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"214f-LOo/hI4Jzx7d+PNz3ZAutFwZZm4"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 8527,
    "path": "../public/assets/contato-D5BUMPRI.js"
  },
  "/assets/credit-card-tsNsJYE3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-Krv3j3QuOXtsQsKLV6GoxYkzz+o"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 208,
    "path": "../public/assets/credit-card-tsNsJYE3.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/dumbbell-C0T32wQZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-VcByF1LKAAgkx+oUiNj9UPXz2bQ"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 561,
    "path": "../public/assets/dumbbell-C0T32wQZ.js"
  },
  "/assets/download-9fvmuW4S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"202a-UKO4AKs5LYyLsqsGlPywQMXCDM8"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 8234,
    "path": "../public/assets/download-9fvmuW4S.js"
  },
  "/assets/eye-CFkNz784.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-BlWagt+UoA2VmufPvvPXZrDqiYA"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 252,
    "path": "../public/assets/eye-CFkNz784.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/faq-BE5uifYa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7895-h9J97TmrJ1Pw8IYTuhe3snC+4No"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 30869,
    "path": "../public/assets/faq-BE5uifYa.js"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-09-02T17:16:46.139Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-09-02T17:16:46.138Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/file-text-VDycbV-S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-EaUZerKC7cKmcyMbpHG5x+gR3ww"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 386,
    "path": "../public/assets/file-text-VDycbV-S.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-09-02T17:16:46.139Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-Blz9B3Pp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-/yG4cmBSaMYIp6k9OJh3S2CvOt8"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 350,
    "path": "../public/assets/gift-Blz9B3Pp.js"
  },
  "/assets/home-DKO5iuU-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a92-NIdzsqjDQuBXf/AtrdbkXE3kV4c"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 10898,
    "path": "../public/assets/home-DKO5iuU-.js"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T17:16:51.786Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-09-02T17:16:51.789Z",
    "size": 3293188,
    "path": "../public/Regulamento Oficial, Termos e Condições de uso e Consentimento para o uso de dados (LGPD).pdf"
  },
  "/assets/index-DmIwGogt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-7sFOXX73guSBTC5qUmoX4oyjf84"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 61206,
    "path": "../public/assets/index-DmIwGogt.js"
  },
  "/assets/index-B3kANhAf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"70b4d-p5uuCL/I0mz6cI4WWdnNv8IonEI"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 461645,
    "path": "../public/assets/index-B3kANhAf.js"
  },
  "/assets/levels-AOn312o9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-38Yr/hwxFtW6terVXLZwgMLrzrc"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 6869,
    "path": "../public/assets/levels-AOn312o9.js"
  },
  "/assets/link-2-NqradGR2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-vheiUCOJUa5fLttGSeEuafTiN4I"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 243,
    "path": "../public/assets/link-2-NqradGR2.js"
  },
  "/assets/lock-CYcx_LO1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-Mh/ooXbR1tpSfzluQnRa8ilysSA"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 202,
    "path": "../public/assets/lock-CYcx_LO1.js"
  },
  "/assets/log-in-yG6fKRAV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-V4shwLu+MsmuYqc3lidu0Cqak+I"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 232,
    "path": "../public/assets/log-in-yG6fKRAV.js"
  },
  "/assets/mail-AGdR_wmF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-MALXFf/WFxaBLH0lGrlmQZ+kOi4"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 214,
    "path": "../public/assets/mail-AGdR_wmF.js"
  },
  "/assets/map-pin-BhSlbvgY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-GDTD/LIC+Ks3lOJKK5lklOU8bIM"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 255,
    "path": "../public/assets/map-pin-BhSlbvgY.js"
  },
  "/assets/market-DOZef3zk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-E1exHChktR5Jj8+QxwRqAcuS0ms"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 26473,
    "path": "../public/assets/market-DOZef3zk.js"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/percent-BfbnQgnO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-J7jfKeo0Ndhwd4uA72/q2Gldnok"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 646,
    "path": "../public/assets/percent-BfbnQgnO.js"
  },
  "/assets/parceiros-CcxKKOz_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9379-syenJgz44Lwups6pTiRYhWDdT6M"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 37753,
    "path": "../public/assets/parceiros-CcxKKOz_.js"
  },
  "/assets/phone-CFncvvWE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-hCEaiQnYYkPGgYwABjKtT+YqnQM"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 323,
    "path": "../public/assets/phone-CFncvvWE.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T17:16:46.146Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-09-02T17:16:46.142Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-09-02T17:16:51.784Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-09-02T17:16:51.783Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-09-02T17:16:46.139Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-09-02T17:16:46.141Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-09-02T17:16:46.142Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-09-02T17:16:46.142Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-09-02T17:16:46.142Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-09-02T17:16:46.142Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-09-02T17:16:46.139Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-09-02T17:16:46.139Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-09-02T17:16:46.141Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-09-02T17:16:46.141Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-2AnGmKMb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7893-jKoZ4s8NUXQ7J9Bz07K9/0hFUW8"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 30867,
    "path": "../public/assets/profile-2AnGmKMb.js"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-09-02T17:16:46.139Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-09-02T17:16:46.139Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T17:16:51.797Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-09-02T17:16:46.140Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-09-02T17:16:46.179Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/search-De5q0Eus.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-RYJQcsyy1CZR99qkNsNtc3FHV1Y"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 170,
    "path": "../public/assets/search-De5q0Eus.js"
  },
  "/assets/styles-B8Ovx9ID.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28af5-dmwLlYyk2M9/13A2qsHzND6veSg"',
    "mtime": "2026-09-02T17:16:46.143Z",
    "size": 166645,
    "path": "../public/assets/styles-B8Ovx9ID.css"
  },
  "/assets/shield-check-Ckfa6mH4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-uOSdHg1g/aBzoq+zVXaqleuVKlo"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 316,
    "path": "../public/assets/shield-check-Ckfa6mH4.js"
  },
  "/assets/trash-2-DEf56Uoo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b2-1uqrbgqwMOB5aCIteWbw6J8YIIk"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 690,
    "path": "../public/assets/trash-2-DEf56Uoo.js"
  },
  "/assets/truck-Dd9es8xf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-MSvRQ0hzt68Ys9wrGrmQt3TxC3U"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 1109,
    "path": "../public/assets/truck-Dd9es8xf.js"
  },
  "/assets/user-plus-CA6B3XDJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-VCjkAKeVg59srGJJ82VG4eapHNI"',
    "mtime": "2026-09-02T17:16:46.144Z",
    "size": 311,
    "path": "../public/assets/user-plus-CA6B3XDJ.js"
  },
  "/assets/users-CHTuDAuW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-rSqMzSXnIc5irAv+McRPdpUekWo"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 307,
    "path": "../public/assets/users-CHTuDAuW.js"
  },
  "/assets/wallet-eGKqVHwk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-v2jqPzEqI+GbEPrAPE5Px2PRk6c"',
    "mtime": "2026-09-02T17:16:46.145Z",
    "size": 4687,
    "path": "../public/assets/wallet-eGKqVHwk.js"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-09-02T17:16:46.178Z",
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
