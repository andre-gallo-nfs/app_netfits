import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("HTTP Cache-Control & Deployment Freshness Gatekeeper (LL-014 / iOS WKWebView)", () => {
  const rootDir = process.cwd();

  it("1. src/server.ts DEVE conter injeção obrigatória de no-cache para todas as rotas HTML/SSR", () => {
    const serverPath = path.resolve(rootDir, "src", "server.ts");
    const serverCode = fs.readFileSync(serverPath, "utf-8");

    expect(serverCode).toContain('contentType.includes("text/html")');
    expect(serverCode).toContain('"Cache-Control"');
    expect(serverCode).toContain("no-cache, no-store, must-revalidate");
    expect(serverCode).toContain('"Pragma", "no-cache"');
    expect(serverCode).toContain('"Expires", "0"');
  });

  it("2. SecurityLockOverlay.tsx DEVE exibir a versão mínima v1.7 (identificador visual de release)", () => {
    const overlayPath = path.resolve(rootDir, "src", "components", "SecurityLockOverlay.tsx");
    const overlayCode = fs.readFileSync(overlayPath, "utf-8");

    expect(overlayCode).toContain("Netfits Guard v1.7");
    expect(overlayCode).not.toContain("Netfits Guard v1.6");
  });

  it("3. app-lock-store.ts DEVE conter atraso de segurança (setTimeout) na liberação do modal nativo", () => {
    const storePath = path.resolve(rootDir, "src", "lib", "app-lock-store.ts");
    const storeCode = fs.readFileSync(storePath, "utf-8");

    expect(storeCode).toContain("isAuthenticatingBiometrics");
    expect(storeCode).toContain("lastUnlockTimestamp");
    expect(storeCode).toMatch(/setTimeout\(\s*\(\)\s*=>\s*\{\s*this\.isAuthenticatingBiometrics\s*=\s*false/);
  });

  it("4. auth-store.ts e shared-sandbox-store.ts DEVEM conter os usuários canônicos pré-registrados", () => {
    const authPath = path.resolve(rootDir, "src", "lib", "auth-store.ts");
    const authCode = fs.readFileSync(authPath, "utf-8");
    const sbPath = path.resolve(rootDir, "src", "lib", "shared-sandbox-store.ts");
    const sbCode = fs.readFileSync(sbPath, "utf-8");

    // Mariana Fernanda Pizone
    expect(authCode).toContain("user-1793802322018");
    expect(authCode).toContain("maripizone@gmail.com");
    expect(sbCode).toContain("user-1793802322018");
    expect(sbCode).toContain("maripizone@gmail.com");

    // Médicos Fibios (Dr. Franco e Dra. Isabella)
    expect(authCode).toContain("user-1794018495670"); // Dra Isabella
    expect(authCode).toContain("usr_franco_merici_gmail"); // Dr Franco
    expect(sbCode).toContain("usr_franco_merici_gmail");
  });
});
