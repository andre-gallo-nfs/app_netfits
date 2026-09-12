import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { n as nativeBridge, I as InstitutionalHomePage } from "./router-Bmlk0ggh.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";


import "../_libs/seroval.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/unenv.mjs";



import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




function RootIndexRoute() {
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (nativeBridge.isNativePlatform()) {
      navigate({
        to: "/feed",
        replace: true
      });
    }
  }, [navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InstitutionalHomePage, {});
}
export {
  RootIndexRoute as component
};
