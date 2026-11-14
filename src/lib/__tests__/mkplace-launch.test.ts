import { describe, it, expect, vi, beforeEach } from "vitest";
import { launchMkplaceShop, getMkplaceStoreUrl } from "../integrations/mkplace-client";
import { nativeBridge } from "../native-bridge";

describe("Mkplace Client & Shop Launcher (Claudia Noce Feedback Fix)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("1. getMkplaceStoreUrl deve retornar URL da loja com token SSO", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        token: "mock-sso-token-123",
        webviewUrl: "https://loja.netfits.com.br",
      }),
    } as any);

    const url = await getMkplaceStoreUrl("usr_claudia");
    expect(url).toContain("https://loja.netfits.com.br");
    expect(url).toContain("token=mock-sso-token-123");
  });

  it("2. launchMkplaceShop deve acionar nativeBridge.openExternalUrl com fallback em caso de popup bloqueado", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        token: "mock-sso-token-123",
        webviewUrl: "https://loja.netfits.com.br",
      }),
    } as any);

    const openExternalSpy = vi.spyOn(nativeBridge, "openExternalUrl").mockResolvedValue();

    await launchMkplaceShop({ userId: "usr_claudia", silent: true });

    expect(openExternalSpy).toHaveBeenCalledTimes(1);
    const calledUrl = openExternalSpy.mock.calls[0][0];
    expect(calledUrl).toContain("https://loja.netfits.com.br");
    expect(calledUrl).toContain("token=mock-sso-token-123");
  });

  it("3. launchMkplaceShop deve suportar targetQueryOrPath de produtos específicos", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        token: "mock-sso-token-123",
        webviewUrl: "https://loja.netfits.com.br",
      }),
    } as any);

    const openExternalSpy = vi.spyOn(nativeBridge, "openExternalUrl").mockResolvedValue();

    await launchMkplaceShop({
      userId: "usr_claudia",
      targetQueryOrPath: "bone-aba-curva-mizuno-run-sky",
      silent: true,
    });

    expect(openExternalSpy).toHaveBeenCalledTimes(1);
    const calledUrl = openExternalSpy.mock.calls[0][0];
    expect(calledUrl).toContain("bone-aba-curva-mizuno-run-sky");
    expect(calledUrl).toContain("token=mock-sso-token-123");
  });

  it("4. launchMkplaceShop deve suportar targetQueryOrPath='pedidos' para acesso direto a pedidos", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        token: "mock-sso-token-123",
        webviewUrl: "https://loja.netfits.com.br",
      }),
    } as any);

    const openExternalSpy = vi.spyOn(nativeBridge, "openExternalUrl").mockResolvedValue();

    await launchMkplaceShop({
      userId: "usr_claudia",
      targetQueryOrPath: "pedidos",
      silent: true,
    });

    expect(openExternalSpy).toHaveBeenCalledTimes(1);
    const calledUrl = openExternalSpy.mock.calls[0][0];
    expect(calledUrl).toContain("https://loja.netfits.com.br/pedidos");
    expect(calledUrl).toContain("token=mock-sso-token-123");
  });

  it("5. nativeBridge.openExternalUrl deve proteger contra aprisionamento em Standalone PWA", async () => {
    let clickedHref = "";
    let clickedTarget = "";

    const mockAnchor = {
      set href(v: string) { clickedHref = v; },
      get href() { return clickedHref; },
      set target(v: string) { clickedTarget = v; },
      get target() { return clickedTarget; },
      rel: "",
      click: vi.fn(),
    };

    const mockDocument = {
      createElement: vi.fn().mockReturnValue(mockAnchor),
      body: {
        appendChild: vi.fn(),
        removeChild: vi.fn(),
      },
    };

    const mockWindow = {
      navigator: { standalone: true },
      matchMedia: vi.fn().mockReturnValue({ matches: true }),
      document: mockDocument,
    };

    (globalThis as any).window = mockWindow;
    (globalThis as any).document = mockDocument;

    await nativeBridge.openExternalUrl("https://loja.netfits.com.br/pedidos");

    expect(mockDocument.createElement).toHaveBeenCalledWith("a");
    expect(mockDocument.body.appendChild).toHaveBeenCalledWith(mockAnchor);
    expect(mockAnchor.click).toHaveBeenCalled();
    expect(clickedTarget).toBe("_blank");
    expect(clickedHref).toContain("https://loja.netfits.com.br/pedidos");
    expect(mockDocument.body.removeChild).toHaveBeenCalledWith(mockAnchor);

    delete (globalThis as any).window;
    delete (globalThis as any).document;
  });
});
