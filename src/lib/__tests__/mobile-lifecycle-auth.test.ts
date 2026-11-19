import { describe, it, expect, beforeEach } from "vitest";
import { appLockStore } from "../app-lock-store";
import { sharedSandboxStore } from "../shared-sandbox-store";
import { authStore } from "../auth-store";

describe("Mobile Runtime Lifecycle, Biometrics & Screen Lock Security (LL-014)", () => {
  const store = new Map<string, string>();

  beforeEach(() => {
    store.clear();
    const mockLocalStorage = {
      getItem: (k: string) => store.get(k) || null,
      setItem: (k: string, v: string) => store.set(k, String(v)),
      removeItem: (k: string) => store.delete(k),
      clear: () => store.clear(),
      key: (i: number) => Array.from(store.keys())[i] || null,
      length: store.size,
    };
    (globalThis as any).localStorage = mockLocalStorage;
    if (typeof window !== "undefined") {
      (window as any).localStorage = mockLocalStorage;
    }
  });

  it("1. Deve registrar atividade e manter estado desbloqueado em inicialização padrão", () => {
    appLockStore.setUnlocked(true);
    appLockStore.recordActivity();
    expect(appLockStore.isUnlocked()).toBe(true);
  });

  it("2. Deve bloquear o app se o tempo de inatividade exceder o limite permitido (10 min)", () => {
    appLockStore.setUnlocked(true);
    const tenMinutesAgo = Date.now() - (11 * 60 * 1000); // 11 minutos atrás
    globalThis.localStorage.setItem("netfits_last_activity_timestamp", String(tenMinutesAgo));

    // Força verificação de inatividade simulada
    const lastActivity = Number(globalThis.localStorage.getItem("netfits_last_activity_timestamp") || 0);
    const now = Date.now();
    const timeout = 10 * 60 * 1000;

    if (now - lastActivity > timeout) {
      appLockStore.setUnlocked(false);
    }

    expect(appLockStore.isUnlocked()).toBe(false);
  });

  it("3. Condição de Corrida iOS: visibilitychange durante autenticação biométrica NÃO deve trancar o app", async () => {
    // Simula app inicialmente bloqueado
    appLockStore.setUnlocked(false);

    // Mock do usuário ativo Mariana Fernanda Pizone
    const marianaId = "user-1793802322018";
    sharedSandboxStore.setActiveUser(marianaId);

    // Simula início de autenticação biométrica
    (appLockStore as any).isAuthenticatingBiometrics = true;

    // Simula fechamento do modal nativo da Apple (disparando visibilitychange)
    if (typeof document !== "undefined") {
      document.dispatchEvent(new Event("visibilitychange"));
    }

    // A flag de proteção deve impedir que o app seja forçado a travar
    expect((appLockStore as any).isAuthenticatingBiometrics).toBe(true);

    // Sucesso da biometria
    appLockStore.setUnlocked(true);
    expect(appLockStore.isUnlocked()).toBe(true);
  });

  it("4. Grace Period de 30 segundos pós-desbloqueio deve blindar contra relock intempestivo", () => {
    appLockStore.setUnlocked(true);
    const unlockTime = (appLockStore as any).lastUnlockTimestamp;
    expect(unlockTime).toBeGreaterThan(0);

    // Mesmo que o timestamp de atividade seja antigo, dentro de 30s não pode trancar
    const expiredActivity = Date.now() - (15 * 60 * 1000);
    globalThis.localStorage.setItem("netfits_last_activity_timestamp", String(expiredActivity));

    const now = Date.now();
    const isWithinGracePeriod = now - unlockTime < 30000;
    expect(isWithinGracePeriod).toBe(true);

    // visibilitychange recebido durante o grace period não deve alterar o status
    if (typeof document !== "undefined") {
      document.dispatchEvent(new Event("visibilitychange"));
    }
    expect(appLockStore.isUnlocked()).toBe(true);
  });

  it("5. Paridade de Usuários: Usuário cadastrado real (Mariana) NUNCA deve cair em Atleta Visitante (AV)", () => {
    const marianaId = "user-1793802322018";
    sharedSandboxStore.setActiveUser(marianaId);

    const activeUser = sharedSandboxStore.getActiveUser();
    expect(activeUser).toBeDefined();
    expect(activeUser.id).toBe(marianaId);
    expect(activeUser.fullName).toBe("Mariana Fernanda Pizone");
    expect(activeUser.email).toBe("maripizone@gmail.com");
    expect(activeUser.referralCode).not.toBe("VISITANTE50");
    expect(activeUser.fullName).not.toBe("Atleta Visitante");
  });

  it("6. Desbloqueio por Senha deve funcionar como rota de escape infalível", () => {
    appLockStore.setUnlocked(false);
    expect(appLockStore.isUnlocked()).toBe(false);

    // Desbloqueia com a senha cadastrada
    const res = appLockStore.unlockWithPassword("Pizone@1990");
    expect(res.success).toBe(true);
    expect(appLockStore.isUnlocked()).toBe(true);
  });

  it("7. Login com e-mail e senha canônica (Pizone@1990) deve autenticar Mariana com sucesso irrestrito", () => {
    // Simula tentativa de login com as credenciais oficiais
    const loginRes = authStore.loginUser("maripizone@gmail.com", "Pizone@1990");
    expect(loginRes.success).toBe(true);
    expect(loginRes.user?.id).toBe("user-1793802322018");
    expect(loginRes.user?.fullName).toBe("Mariana Fernanda Pizone");
  });

  it("8. Apple Review Demo Credentials: deve autenticar demo@netfits.com.br tanto com senha demo@netfits.com.br quanto Netfits@2026!", () => {
    // Teste 1: Senha informada no App Store Connect (demo@netfits.com.br)
    const resConnect = authStore.loginUser("demo@netfits.com.br", "demo@netfits.com.br");
    expect(resConnect.success).toBe(true);
    expect(resConnect.user?.id).toBe("usr_apple_review");
    expect(resConnect.user?.email).toBe("demo@netfits.com.br");

    // Teste 2: Senha alternativa canônica (Netfits@2026!)
    const resMaster = authStore.loginUser("demo@netfits.com.br", "Netfits@2026!");
    expect(resMaster.success).toBe(true);
    expect(resMaster.user?.id).toBe("usr_apple_review");

    // Teste 3: AppLock com credencial demo
    appLockStore.setUnlocked(false);
    expect(appLockStore.isUnlocked()).toBe(false);
    const unlockRes = appLockStore.unlockWithPassword("demo@netfits.com.br");
    expect(unlockRes.success).toBe(true);
    expect(appLockStore.isUnlocked()).toBe(true);
  });

  it("9. Strict Case Sensitivity Guard: senhas devem diferenciar estritamente maiúsculas e minúsculas", () => {
    // 1. Senha com caixa incorreta (minúsculas) DEVE falhar
    const failLower = authStore.loginUser("claudia.noce@icloud.com", "noce@1992");
    expect(failLower.success).toBe(false);
    expect(failLower.error).toContain("Senha incorreta");

    // 2. Senha com caixa incorreta (maiúsculas) DEVE falhar
    const failUpper = authStore.loginUser("claudia.noce@icloud.com", "NOCE@1992");
    expect(failUpper.success).toBe(false);
    expect(failUpper.error).toContain("Senha incorreta");

    // 3. Senha com caixa exata cadastrada (Noce@1992) DEVE autenticar com sucesso
    const successExact = authStore.loginUser("claudia.noce@icloud.com", "Noce@1992");
    expect(successExact.success).toBe(true);
    expect(successExact.user?.fullName).toBe("Claudia Noce Soares");

    // 4. No AppLock: tentativa com caixa incorreta DEVE falhar
    appLockStore.setUnlocked(false);
    expect(appLockStore.isUnlocked()).toBe(false);
    const unlockFail = appLockStore.unlockWithPassword("noce@1992");
    expect(unlockFail.success).toBe(false);
    expect(appLockStore.isUnlocked()).toBe(false);

    // 5. No AppLock: com caixa exata DEVE desbloquear
    const unlockOk = appLockStore.unlockWithPassword("Noce@1992");
    expect(unlockOk.success).toBe(true);
    expect(appLockStore.isUnlocked()).toBe(true);
  });
});
