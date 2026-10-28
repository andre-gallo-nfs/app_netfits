/**
 * Netfits — Rock Encantech Native Bridge Script
 * 
 * Implementação exata conforme Seção 4.1 do Manual de Integração Rock (27/10/2026):
 * Cria window.WebBridge na loja e orquestra a comunicação bidirecional de renovação
 * de token JWT RS256 via sendToNative("rock_token", {}).
 */

export const ROCK_BRIDGE_JS = `(function () {
  var LOJA = "https://loja.netfits.com.br";
  if (window.WebBridge) return;
  var pendentes = {};
  var seq = 0;

  window.__webBridgeReply = function (id, resultado, erro) {
    var pedido = pendentes[id];
    if (!pedido) return;
    delete pendentes[id];
    if (erro) pedido.reject(new Error(erro));
    else pedido.resolve(resultado || {});
  };

  window.WebBridge = {
    sendToNative: function (event, payload) {
      return new Promise(function (resolve, reject) {
        var id = ++seq + "-" + Date.now();
        pendentes[id] = { resolve: resolve, reject: reject };
        enviarAoApp(JSON.stringify({ id: id, event: event, payload: payload || {} }));
      });
    },
  };

  function enviarAoApp(mensagem) {
    try {
      // 1. Canal Web / Iframe via window.parent (quando embutido no Netfits Web/PWA)
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(mensagem, "*");
      }
      // 2. Canal React Native (se aplicável)
      if (window.ReactNativeWebView && typeof window.ReactNativeWebView.postMessage === "function") {
        window.ReactNativeWebView.postMessage(mensagem);
      }
      // 3. Canal Android Nativo / Flutter
      if (window.NetfitsBridge && typeof window.NetfitsBridge.postMessage === "function") {
        window.NetfitsBridge.postMessage(mensagem);
      }
      // 4. Canal iOS Nativo
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.netfits) {
        window.webkit.messageHandlers.netfits.postMessage(mensagem);
      }
    } catch (e) {
      console.warn("[RockBridge] Erro ao enviar mensagem ao app Netfits:", e);
    }
  }

  // Ouve resposta da janela pai (Netfits Web) para resolver a Promise
  window.addEventListener("message", function(e) {
    if (e.data && e.data.type === "NETFITS_BRIDGE_REPLY" && e.data.id) {
      window.__webBridgeReply(e.data.id, e.data.resultado, e.data.erro);
    }
  });
})();
true;`;
