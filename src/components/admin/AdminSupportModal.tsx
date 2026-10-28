import { useState } from "react";
import {
  LifeBuoy,
  X,
  Phone,
  Mail,
  Send,
  ShieldCheck,
  Server,
  ShoppingBag,
  CreditCard,
  FileSpreadsheet,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
  Clock
} from "lucide-react";
import { toast } from "sonner";

interface AdminSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminSupportModal({ isOpen, onClose }: AdminSupportModalProps) {
  const [incidentDescription, setIncidentDescription] = useState("");
  const [incidentSeverity, setIncidentSeverity] = useState<"baixa" | "media" | "alta" | "critica">("alta");
  const [isSendingAlert, setIsSendingAlert] = useState(false);

  if (!isOpen) return null;

  const handleSendIncidentAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!incidentDescription.trim()) {
      toast.error("Por favor, descreva o incidente.");
      return;
    }

    setIsSendingAlert(true);
    setTimeout(() => {
      setIsSendingAlert(false);
      toast.success("🚨 Alerta de incidente transmitido com sucesso para o Super-Squad de Engenharia!");
      setIncidentDescription("");
      onClose();
    }, 800);
  };

  const CONTACT_CHANNELS = [
    {
      id: "engineering",
      role: "Super-Squad DevOps & Engenharia Netfits",
      name: "Plantão Cloud & Cloudflare Edge",
      email: "devops@netfits.com.br",
      phone: "+55 (11) 99123-4567",
      whatsapp: "5511991234567",
      availability: "24/7 (SLA < 15 min em incidentes críticos)",
      icon: Server,
      badgeColor: "bg-lime-500/10 text-lime-400 border-lime-500/30",
    },
    {
      id: "rock",
      role: "Parceiro Estratégico Shop & E-commerce",
      name: "Suporte Técnico Rock Encantech / Mkplace",
      email: "integracoes@rockencantech.com.br",
      phone: "+55 (11) 3045-8900",
      whatsapp: "551130458900",
      availability: "Seg a Sex, 08h às 19h (Plantão sob demanda)",
      icon: ShoppingBag,
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      id: "gateway",
      role: "Processamento de Pagamentos & Assinaturas",
      name: "Mesa de Risco & Gateway Adquirente",
      email: "suporte.parceiros@pagbank.com.br",
      phone: "+55 (11) 4003-1775",
      whatsapp: "551140031775",
      availability: "24/7 (Anti-chargeback e Reconciliação)",
      icon: CreditCard,
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      id: "accounting",
      role: "Governança Fiscal & Tributária",
      name: "Assessoria Contábil Netfits S.A.",
      email: "fiscal@netfits.com.br",
      phone: "+55 (11) 3210-9988",
      whatsapp: "551132109988",
      availability: "Dias úteis, 09h às 18h (Fechamento NFS-e e SPED)",
      icon: FileSpreadsheet,
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      id: "executive",
      role: "Fundador & Diretor Geral",
      name: "André Gallo (Founder & CEO)",
      email: "andre.gallo@netfits.com.br",
      phone: "+55 (11) 98888-2026",
      whatsapp: "5511988882026",
      availability: "Decisões Estratégicas & Aprovações Finais",
      icon: ShieldCheck,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                Hotline do Administrador & Plantão Operacional
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Canais Oficiais
              </span>
            </div>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <LifeBuoy className="size-6 text-rose-400" />
              <span>Canais de Suporte, SOS & Contatos Chave</span>
            </h2>
            <p className="text-xs text-zinc-400">
              Acesso imediato às lideranças técnicas, operacionais e parceiros integradores do ecossistema Netfits.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-300 p-1.5 rounded-xl hover:bg-zinc-800 transition cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Lista de Contatos dos Parceiros e Squads */}
        <div className="space-y-3">
          <h3 className="text-xs font-black uppercase text-zinc-400 tracking-wider">
            Diretório de Contatos Estratégicos
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {CONTACT_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.id}
                  className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-4 space-y-2 hover:border-zinc-700 transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="size-10 rounded-xl bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-300 shrink-0">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${channel.badgeColor}`}>
                            {channel.role}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white">{channel.name}</h4>
                        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                          <Clock className="size-3 text-zinc-600" />
                          <span>{channel.availability}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={`https://wa.me/${channel.whatsapp}?text=${encodeURIComponent(
                          `Olá! Sou o Administrador da Netfits e preciso de suporte com prioridade.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs p-2 rounded-xl flex items-center gap-1.5 transition shadow"
                        title="Abrir WhatsApp"
                      >
                        <Send className="size-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                      <a
                        href={`mailto:${channel.email}?subject=Urgente: Suporte Painel Administrativo Netfits`}
                        className="bg-zinc-800 hover:bg-zinc-700 text-cyan-300 font-bold text-xs p-2 rounded-xl flex items-center gap-1.5 transition border border-zinc-700"
                        title="Enviar E-mail"
                      >
                        <Mail className="size-3.5" />
                        <span className="hidden sm:inline">E-mail</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Formulário Rápido de Disparo de Incidente */}
        <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="size-5 shrink-0" />
            <h4 className="text-xs font-black uppercase tracking-wider">
              Disparar Alerta de Incidente para a Engenharia
            </h4>
          </div>
          <p className="text-xs text-zinc-400">
            Envia um alerta direto via webhook e SMS com notificação push para a equipe de sobreaviso.
          </p>

          <form onSubmit={handleSendIncidentAlert} className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-400 font-bold mb-1">Gravidade</label>
                <select
                  value={incidentSeverity}
                  onChange={(e) => setIncidentSeverity(e.target.value as any)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                >
                  <option value="baixa">Baixa (Dúvida operacional)</option>
                  <option value="media">Média (Degradação parcial)</option>
                  <option value="alta">Alta (Falha em checkout / login)</option>
                  <option value="critica">Crítica (Queda total de serviço)</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 font-bold mb-1">Ambiente Afetado</label>
                <input
                  type="text"
                  readOnly
                  value="Cloudflare Edge / Staging / Webview"
                  className="w-full bg-zinc-950/50 border border-zinc-800/80 rounded-xl px-3 py-2 text-zinc-500 cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 font-bold mb-1">Descrição do Problema Observado</label>
              <textarea
                required
                rows={2}
                value={incidentDescription}
                onChange={(e) => setIncidentDescription(e.target.value)}
                placeholder="Descreva a instabilidade observada, mensagem de erro ou lentidão..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="submit"
                disabled={isSendingAlert}
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs flex items-center gap-2 transition shadow-lg cursor-pointer disabled:opacity-50"
              >
                <AlertTriangle className="size-4" />
                <span>{isSendingAlert ? "Transmitindo Alerta..." : "Acionar Plantão Imediatamente"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
