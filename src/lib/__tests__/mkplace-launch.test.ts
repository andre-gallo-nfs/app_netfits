import { describe, it, expect, vi, beforeEach } from "vitest";
import { launchMkplaceShop, getMkplaceStoreUrl } from "../integrations/mkplace-client";
import { nativeBridge } from "../native-bridge";

describe("Mkplace Client & Shop Launcher (Claudia Noce Feedback Fix)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("1. getMkplaceStoreUrl deve retornar URL da loja com token SSO", async () => {
    // Mock global fetch para /api/marketplace/mkplace/token
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
});
