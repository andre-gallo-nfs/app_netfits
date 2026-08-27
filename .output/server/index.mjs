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
    "mtime": "2026-08-27T17:16:02.926Z",
    "size": 42550,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.docx"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"24a-egiUneD/xPOAdxt+OE09OOHGoKc"',
    "mtime": "2026-08-27T17:16:02.921Z",
    "size": 586,
    "path": "../public/manifest.json"
  },
  "/sw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e8-Cdfa2l6p9QgvZ1KdvIOAdPp444U"',
    "mtime": "2026-08-27T17:16:02.921Z",
    "size": 1768,
    "path": "../public/sw.js"
  },
  "/assets/InstitutionalWebHeader-BNPffqAO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d79-vawzWwk0KXsqLjVCnQ3lGKturxU"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 3449,
    "path": "../public/assets/InstitutionalWebHeader-BNPffqAO.js"
  },
  "/assets/ProductDetailSheet-Bws76Grx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4841-Nu0Knq3wXF7/Y4nkbbn/XDPz6qI"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 18497,
    "path": "../public/assets/ProductDetailSheet-Bws76Grx.js"
  },
  "/assets/activities-CIScMiES.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ac-yoLK+T4oBacOWyBj/rnFKYbBYck"',
    "mtime": "2026-08-27T17:15:56.991Z",
    "size": 1196,
    "path": "../public/assets/activities-CIScMiES.js"
  },
  "/assets/apparel-shorts-BogQtink.jpg": {
    "type": "image/jpeg",
    "etag": '"90b9-q/vdlzv7/WFO1GgumaEAQVoW0hA"',
    "mtime": "2026-08-27T17:15:56.987Z",
    "size": 37049,
    "path": "../public/assets/apparel-shorts-BogQtink.jpg"
  },
  "/assets/apparel-socks-BVqyprxp.jpg": {
    "type": "image/jpeg",
    "etag": '"cbcb-XcAHWHp4T0XLVekMR2rI0TEA1mk"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 52171,
    "path": "../public/assets/apparel-socks-BVqyprxp.jpg"
  },
  "/assets/apparel-tee-Q_guZjsU.jpg": {
    "type": "image/jpeg",
    "etag": '"8c93-9IMGCWapgglLKVZ6+JcH9AntZZE"',
    "mtime": "2026-08-27T17:15:56.987Z",
    "size": 35987,
    "path": "../public/assets/apparel-tee-Q_guZjsU.jpg"
  },
  "/assets/arrow-up-right-BguL-Skd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-0mMkXvxMlpt7ybWhJnwDwi3yRlU"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-BguL-Skd.js"
  },
  "/assets/apple-zB0pB0jP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13b-A8J2DwBTpCkUe29eWx395s7sfQI"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 315,
    "path": "../public/assets/apple-zB0pB0jP.js"
  },
  "/assets/associado-C_JI0l7N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"741a-TNP4U13RY2ta5/He7DmYu/z0SP8"',
    "mtime": "2026-08-27T17:15:56.991Z",
    "size": 29722,
    "path": "../public/assets/associado-C_JI0l7N.js"
  },
  "/assets/auth-Cg3j9IPv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a8-4S4hqw91SplLjC4mBDiREIEPLrs"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 45736,
    "path": "../public/assets/auth-Cg3j9IPv.js"
  },
  "/assets/asics-novablast-qmC10-ut.jpg": {
    "type": "image/jpeg",
    "etag": '"241db-/E9M/WLD0YISZq0l7tM2bsKHgoE"',
    "mtime": "2026-08-27T17:15:56.991Z",
    "size": 147931,
    "path": "../public/assets/asics-novablast-qmC10-ut.jpg"
  },
  "/assets/calendar-C5fqwrkY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"102-FUbZMjmSUKEYj6U/XCJ3lxtIXHM"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 258,
    "path": "../public/assets/calendar-C5fqwrkY.js"
  },
  "/assets/circle-check-NmDm6Edi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae-RjP5qYxk/NdCY4c+u/SEBzYTyfs"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 174,
    "path": "../public/assets/circle-check-NmDm6Edi.js"
  },
  "/assets/circle-x-NtSpyEUl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"195-WIyDLYmvGPr0R4H6A/r7UeMTtSA"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 405,
    "path": "../public/assets/circle-x-NtSpyEUl.js"
  },
  "/assets/contato-B-t28pwv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2165-YR28urQAV559yoEzlmctRjir29g"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 8549,
    "path": "../public/assets/contato-B-t28pwv.js"
  },
  "/assets/clinic-fibios-rZItzhet.jpg": {
    "type": "image/jpeg",
    "etag": '"15504-Nx447g+ouRXnYD5XFcTDKRuIuiQ"',
    "mtime": "2026-08-27T17:15:56.987Z",
    "size": 87300,
    "path": "../public/assets/clinic-fibios-rZItzhet.jpg"
  },
  "/assets/credit-card-Ov24faHk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-dVl2nVxzUMnABQISK8Ai+fcVKMY"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 208,
    "path": "../public/assets/credit-card-Ov24faHk.js"
  },
  "/assets/download-Sq_-_GbA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2045-C11ySNtG0ShEe3B1yjG4kJ5f4Ec"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 8261,
    "path": "../public/assets/download-Sq_-_GbA.js"
  },
  "/assets/dumbbell-BkOB2eGL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"231-hM6/RsKbvD2WTjaRVLAudnMi9yw"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 561,
    "path": "../public/assets/dumbbell-BkOB2eGL.js"
  },
  "/assets/dra-isabella-MfvObR2M.jpeg": {
    "type": "image/jpeg",
    "etag": '"353e6-iGiW+I+P4vlSkGWTqTCqXFyYI/M"',
    "mtime": "2026-08-27T17:15:56.991Z",
    "size": 218086,
    "path": "../public/assets/dra-isabella-MfvObR2M.jpeg"
  },
  "/assets/admin-eLLMXJAD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9c618-mhVVHdUfj9eNrUUh/Qkqzyq8WM4"',
    "mtime": "2026-08-27T17:15:56.997Z",
    "size": 640536,
    "path": "../public/assets/admin-eLLMXJAD.js"
  },
  "/assets/eye-CoqYIWma.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-qefhSmDqZQpS7TTqTDWHGotwW0I"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 252,
    "path": "../public/assets/eye-CoqYIWma.js"
  },
  "/assets/faq-DgAw9K1b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"75d0-yRFjHvRRQFzf12JQtXzIxLpH0u4"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 30160,
    "path": "../public/assets/faq-DgAw9K1b.js"
  },
  "/assets/feed-cyclist-eSoC9Il9.jpg": {
    "type": "image/jpeg",
    "etag": '"33772-OWVLa1BqLqHLmd/pgs1NUce/Ons"',
    "mtime": "2026-08-27T17:15:56.987Z",
    "size": 210802,
    "path": "../public/assets/feed-cyclist-eSoC9Il9.jpg"
  },
  "/assets/feed-data-BWeZJ53D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d6-lPJ1GO2enidaKaj6QQrqslfkdIA"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 5590,
    "path": "../public/assets/feed-data-BWeZJ53D.js"
  },
  "/assets/feed-runner-CCML8scl.jpg": {
    "type": "image/jpeg",
    "etag": '"1109a-rn72N4h19reVexOqwyboC1r8/nA"',
    "mtime": "2026-08-27T17:15:56.986Z",
    "size": 69786,
    "path": "../public/assets/feed-runner-CCML8scl.jpg"
  },
  "/assets/feed-voturuna-DP-oQCwr.jpg": {
    "type": "image/jpeg",
    "etag": '"25cd4-dJbHDt1kEVlOgJJrwK2AjyOTMBY"',
    "mtime": "2026-08-27T17:15:56.986Z",
    "size": 154836,
    "path": "../public/assets/feed-voturuna-DP-oQCwr.jpg"
  },
  "/assets/file-text-DkR0SvXl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"182-0ViAeN0QSywhfp1jmk8t+GmBXR4"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 386,
    "path": "../public/assets/file-text-DkR0SvXl.js"
  },
  "/assets/gear-vest-CAbiKTT5.jpg": {
    "type": "image/jpeg",
    "etag": '"6b42-08WJvC4ZZnplB5JcNfARPPSPLQE"',
    "mtime": "2026-08-27T17:15:56.987Z",
    "size": 27458,
    "path": "../public/assets/gear-vest-CAbiKTT5.jpg"
  },
  "/assets/gear-watch-CfsmAVPR.jpg": {
    "type": "image/jpeg",
    "etag": '"da95-/jpnlYfN6f8Ag0W3DzC4GtEibVk"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 55957,
    "path": "../public/assets/gear-watch-CfsmAVPR.jpg"
  },
  "/assets/gift-Bn8bvDRh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-7jPx19SXbnE/ijzouEvZCaY7H68"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 350,
    "path": "../public/assets/gift-Bn8bvDRh.js"
  },
  "/assets/home-DSra_IVo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b24-hNW5qaQsq4YJYt4HJPdmBEjia7A"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 11044,
    "path": "../public/assets/home-DSra_IVo.js"
  },
  "/assets/index-xFim0W84.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ef16-177+4ksnp5iUlrozkK0QHhz3rdA"',
    "mtime": "2026-08-27T17:15:56.991Z",
    "size": 61206,
    "path": "../public/assets/index-xFim0W84.js"
  },
  "/assets/levels--azWMoyB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad5-+tZ4z8XxcGV1Zdov2NJwbL8RA3U"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 6869,
    "path": "../public/assets/levels--azWMoyB.js"
  },
  "/assets/link-2-BWJlwxP-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f3-B5SiYovctvkM1iMClz8WwrYw6BA"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 243,
    "path": "../public/assets/link-2-BWJlwxP-.js"
  },
  "/assets/lock-SAEg9Id2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ca-G2Z0Yq5q3JW3Vp3SgVHIn2nz480"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 202,
    "path": "../public/assets/lock-SAEg9Id2.js"
  },
  "/assets/log-in-dAxHrxOE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-bwEs81vDq46ODIBt85wMiARalYs"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 232,
    "path": "../public/assets/log-in-dAxHrxOE.js"
  },
  "/assets/mail-CaiOa9bM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d6-k0ir8Oak9h6QE2VNkvJRaPr8Wj0"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 214,
    "path": "../public/assets/mail-CaiOa9bM.js"
  },
  "/assets/map-pin-C7tFAlBA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-2QJ1ymDSGEHAxJ16ohTmlWqYInU"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 255,
    "path": "../public/assets/map-pin-C7tFAlBA.js"
  },
  "/assets/market-N6YZ1Oe3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6769-Yl8jAewWk04wyVcxNEinfA6+TUE"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 26473,
    "path": "../public/assets/market-N6YZ1Oe3.js"
  },
  "/assets/index-C4SyHwfB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6ed34-vz4MPvxzsd0auW8KE7FH9X8a2CM"',
    "mtime": "2026-08-27T17:15:56.991Z",
    "size": 453940,
    "path": "../public/assets/index-C4SyHwfB.js"
  },
  "/assets/netfits-logo-dark-D0RtFoJs.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark-D0RtFoJs.png"
  },
  "/assets/netfits-logo-dark.png": {
    "type": "image/png",
    "etag": '"a1d87-Pa/NTaYwuhsMbd3eBDIY5B1hG4Q"',
    "mtime": "2026-08-27T17:16:02.931Z",
    "size": 662919,
    "path": "../public/assets/netfits-logo-dark.png"
  },
  "/assets/netfits-logo-green.png": {
    "type": "image/png",
    "etag": '"f672d-UONhTe6r0xtWFe3iNqHdlJJNIa0"',
    "mtime": "2026-08-27T17:16:02.934Z",
    "size": 1009453,
    "path": "../public/assets/netfits-logo-green.png"
  },
  "/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf": {
    "type": "application/pdf",
    "etag": '"324004-AvW98vM8MuoLzdYCE1XIIkioOaA"',
    "mtime": "2026-08-27T17:16:02.936Z",
    "size": 3293188,
    "path": "../public/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
  },
  "/assets/netfits-mark-BXGZywsy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c-RfWDEN0MdMO3UVvuUMQZ36i63L0"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 60,
    "path": "../public/assets/netfits-mark-BXGZywsy.js"
  },
  "/assets/parceiros-BvNjl1to.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"748b-BCg+DWGQh8JrRcDIbyychgSb0o4"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 29835,
    "path": "../public/assets/parceiros-BvNjl1to.js"
  },
  "/assets/percent-BqE5Fx3F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"286-LIRSAeUNCFyLnB25xHFT3v+2qrs"',
    "mtime": "2026-08-27T17:15:56.993Z",
    "size": 646,
    "path": "../public/assets/percent-BqE5Fx3F.js"
  },
  "/assets/phone-DgHiezR-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143-PdvTVySaZpdKeaYH+Q/tEDdAgQE"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 323,
    "path": "../public/assets/phone-DgHiezR-.js"
  },
  "/assets/product-applewatch-LmhKu1MM.jpg": {
    "type": "image/jpeg",
    "etag": '"5a22-akHEXDf+Sxm6od7reGXhhcS1L10"',
    "mtime": "2026-08-27T17:15:56.991Z",
    "size": 23074,
    "path": "../public/assets/product-applewatch-LmhKu1MM.jpg"
  },
  "/assets/product-bike-BESuKQ8H.jpg": {
    "type": "image/jpeg",
    "etag": '"f867-sgWHkoXMWAJnSqPqLvB0PLm9iho"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 63591,
    "path": "../public/assets/product-bike-BESuKQ8H.jpg"
  },
  "/assets/product-creatine-B5HXc3oE.jpg": {
    "type": "image/jpeg",
    "etag": '"9a29-CHM2CHZEIbHGg24DekOXCmJOoE0"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 39465,
    "path": "../public/assets/product-creatine-B5HXc3oE.jpg"
  },
  "/assets/product-electrolyte-DrWdY3I0.jpg": {
    "type": "image/jpeg",
    "etag": '"2d21-c5M/syVVwfw2VgYtGDV0sc1tom8"',
    "mtime": "2026-08-27T17:15:56.987Z",
    "size": 11553,
    "path": "../public/assets/product-electrolyte-DrWdY3I0.jpg"
  },
  "/assets/product-glasses-BLSG7VXv.jpg": {
    "type": "image/jpeg",
    "etag": '"5c54-NJ9IpkGCWDQ5VB0/sc+RPY/gkt0"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 23636,
    "path": "../public/assets/product-glasses-BLSG7VXv.jpg"
  },
  "/assets/product-gel-DMuC9e-t.jpg": {
    "type": "image/jpeg",
    "etag": '"f7e5-nJU2x2w1YTau5UOFYn9jkkI/+lA"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 63461,
    "path": "../public/assets/product-gel-DMuC9e-t.jpg"
  },
  "/assets/product-jbl-bone-BkrYMGlK.jpg": {
    "type": "image/jpeg",
    "etag": '"138fc-y2oxA54SUOPglpSTrP+mjvzyTcI"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 80124,
    "path": "../public/assets/product-jbl-bone-BkrYMGlK.jpg"
  },
  "/assets/product-palatinose-DwQY1yxt.jpg": {
    "type": "image/jpeg",
    "etag": '"6df4-mCT7KDbtMC1/DTpVGicOuS/H+W4"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 28148,
    "path": "../public/assets/product-palatinose-DwQY1yxt.jpg"
  },
  "/assets/product-ring-Bwo5Qd-4.jpg": {
    "type": "image/jpeg",
    "etag": '"3991-kkkKh9T5AZEV4Ob5FwcEClPVrq4"',
    "mtime": "2026-08-27T17:15:56.986Z",
    "size": 14737,
    "path": "../public/assets/product-ring-Bwo5Qd-4.jpg"
  },
  "/assets/product-helmet-BeQCwc7p.jpg": {
    "type": "image/jpeg",
    "etag": '"a296-z+6kJ4IHR88id+lTSwXCr6gPr4Q"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 41622,
    "path": "../public/assets/product-helmet-BeQCwc7p.jpg"
  },
  "/assets/product-shoes-CUzDX92n.jpg": {
    "type": "image/jpeg",
    "etag": '"4beb-G3Lt2zvPENVX/zXBYYgcynWwRUY"',
    "mtime": "2026-08-27T17:15:56.986Z",
    "size": 19435,
    "path": "../public/assets/product-shoes-CUzDX92n.jpg"
  },
  "/assets/product-swim-TYX_7gsi.jpg": {
    "type": "image/jpeg",
    "etag": '"6067-U8y86yrhZyAl8uJls7pidbnBPoM"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 24679,
    "path": "../public/assets/product-swim-TYX_7gsi.jpg"
  },
  "/assets/product-whey-Wor1ExrG.jpg": {
    "type": "image/jpeg",
    "etag": '"cd09-BLHUMOW1s4s3lsEpMpqXB0k3pZ8"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 52489,
    "path": "../public/assets/product-whey-Wor1ExrG.jpg"
  },
  "/assets/profile-Bm0vJOOc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79a1-ZhZysLqwpaq01L7QA50L6KzaQsI"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 31137,
    "path": "../public/assets/profile-Bm0vJOOc.js"
  },
  "/assets/netfits-logo-ewIUGvXh.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-27T17:15:56.999Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-ewIUGvXh.png"
  },
  "/assets/race-berlin-CD4pj62D.jpg": {
    "type": "image/jpeg",
    "etag": '"37803-FkCDnP21FBGWwsdZzwZPl1USkG0"',
    "mtime": "2026-08-27T17:15:56.988Z",
    "size": 227331,
    "path": "../public/assets/race-berlin-CD4pj62D.jpg"
  },
  "/assets/race-nyc-DsHtzJD5.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcd6-Wo/9XKSM5An//XWIeJdycDDrgnA"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 244950,
    "path": "../public/assets/race-nyc-DsHtzJD5.jpg"
  },
  "/assets/race-paraty-BwDctZiL.jpg": {
    "type": "image/jpeg",
    "etag": '"1c4fd-UUbONCMqzb7z1JxTAy4o8Jrt/DI"',
    "mtime": "2026-08-27T17:15:56.990Z",
    "size": 115965,
    "path": "../public/assets/race-paraty-BwDctZiL.jpg"
  },
  "/assets/product-liquidz-Cj2dR76l.jpg": {
    "type": "image/jpeg",
    "etag": '"132f12-ERBl05JU9DchQK/6nDlrq15HXok"',
    "mtime": "2026-08-27T17:15:56.998Z",
    "size": 1257234,
    "path": "../public/assets/product-liquidz-Cj2dR76l.jpg"
  },
  "/assets/race-serra-fina-BvXw670x.jpg": {
    "type": "image/jpeg",
    "etag": '"16e62-0CH8omkX/CVS7e2ISPdnHhq3R3o"',
    "mtime": "2026-08-27T17:15:56.987Z",
    "size": 93794,
    "path": "../public/assets/race-serra-fina-BvXw670x.jpg"
  },
  "/assets/save-Dg_2_n7s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19a-3dThGnLPAF2gPTRrKjOCKVQPitM"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 410,
    "path": "../public/assets/save-Dg_2_n7s.js"
  },
  "/assets/search-ewBKvnEH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-tYfhZaOXIZPQAJYyE28rgdhIigg"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 170,
    "path": "../public/assets/search-ewBKvnEH.js"
  },
  "/assets/shield-check-N1gL3jQQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-dctvXqUH3DAzmkTJQInGkasNIpA"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 316,
    "path": "../public/assets/shield-check-N1gL3jQQ.js"
  },
  "/assets/styles-BYDZyvby.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"28e5b-3z/SBLswFZivx8FEeuKagJFrNrg"',
    "mtime": "2026-08-27T17:15:56.991Z",
    "size": 167515,
    "path": "../public/assets/styles-BYDZyvby.css"
  },
  "/assets/truck-BY323QDH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"455-mKhD/2Rb/0Zeac6aTq4NxSrR70E"',
    "mtime": "2026-08-27T17:15:56.994Z",
    "size": 1109,
    "path": "../public/assets/truck-BY323QDH.js"
  },
  "/assets/netfits-logo-transparent.png": {
    "type": "image/png",
    "etag": '"209382-Cif9l3P/VaiUdPQRwq97gpHWdUM"',
    "mtime": "2026-08-27T17:16:02.936Z",
    "size": 2134914,
    "path": "../public/assets/netfits-logo-transparent.png"
  },
  "/assets/user-plus-DvC2oU6x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"137-D2zJmL9rOMa1lczylKOjGMD7Ieg"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 311,
    "path": "../public/assets/user-plus-DvC2oU6x.js"
  },
  "/assets/wallet-BLOZzKsH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"124f-mfBHqb9NWK0nMN81xNVzaVmSAxw"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 4687,
    "path": "../public/assets/wallet-BLOZzKsH.js"
  },
  "/assets/users-B53w73KV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-UIqLMdyzpKvggQiqQ0JS5b964U4"',
    "mtime": "2026-08-27T17:15:56.995Z",
    "size": 307,
    "path": "../public/assets/users-B53w73KV.js"
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
