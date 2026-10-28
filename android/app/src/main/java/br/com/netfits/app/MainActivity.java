package br.com.netfits.app;

import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;
import org.json.JSONObject;

/**
 * MainActivity Netfits
 * Configurada com suporte à ponte de renovação de sessão Rock Encantech (WebBridge)
 * Conforme Seção 4.3 do Manual de Integração Rock (27/10/2026).
 */
public class MainActivity extends BridgeActivity {

    private static final String LOJA_ORIGIN = "https://loja.netfits.com.br";

    public static class NetfitsBridgeInterface {
        private final WebView webView;

        public NetfitsBridgeInterface(WebView webView) {
            this.webView = webView;
        }

        @JavascriptInterface
        public void postMessage(String jsonStr) {
            if (webView == null || jsonStr == null) return;
            try {
                JSONObject obj = new JSONObject(jsonStr);
                String event = obj.optString("event");
                String id = obj.optString("id");

                if ("rock_token".equals(event) && id != null) {
                    // Notifica a aplicação web do Capacitor para buscar token assinado
                    webView.post(() -> {
                        String js = String.format(
                            "window.dispatchEvent(new CustomEvent('netfits:native-rock-token-request', { detail: { id: '%s' } }));",
                            id
                        );
                        webView.evaluateJavascript(js, null);
                    });
                }
            } catch (Exception ignored) {}
        }
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Registra o canal JavaScript "NetfitsBridge" na WebView principal do Capacitor
        try {
            WebView webView = getBridge().getWebView();
            if (webView != null) {
                webView.addJavascriptInterface(new NetfitsBridgeInterface(webView), "NetfitsBridge");
            }
        } catch (Exception ignored) {}
    }
}
