import { FileText, Download } from "lucide-react";

export function AdminXmlAccountingTab() {
  return (
    <div className="space-y-6">
      {/* Card de Dados Cadastrais Oficiais & Matriz de CNAEs JUCESP */}
      <div className="bg-zinc-900/90 border border-purple-500/40 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-0.5 rounded-full border border-lime-400/20">
                Cadastro Fiscal &amp; Societário Oficial
              </span>
              <span className="text-[10px] font-mono font-bold text-zinc-400">JUCESP / Receita Federal</span>
            </div>
            <h3 className="text-xl font-black text-white mt-1">
              Netfits Ltda. <span className="text-xs font-mono text-purple-300 font-bold ml-2">CNPJ: 68.930.455/0001-40</span>
            </h3>
            <p className="text-xs text-zinc-300 mt-0.5">
              Alameda das Embaúbas, 365, Quadra 06 Lote 19 sala 01, Alphaville, Santana de Parnaíba-SP, CEP: 06.542-195 • Cód. IBGE: <span className="font-mono text-lime-400">3547304</span>
            </p>
          </div>

          <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800 text-right self-start lg:self-auto">
            <span className="text-[10px] text-zinc-500 block uppercase font-bold">CNAE Principal Registrado:</span>
            <span className="text-sm font-black font-mono text-lime-400">82.99-7-99</span>
            <span className="text-[10px] text-zinc-400 block font-medium">Gestão de Fidelidade &amp; Intermediação</span>
          </div>
        </div>

        {/* Matriz de CNAEs Cadastrados */}
        <div className="space-y-2">
          <span className="text-[11px] font-extrabold text-zinc-400 uppercase tracking-wider block">
            Matriz de Códigos CNAE Oficiais (JUCESP):
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
            <div className="bg-zinc-950 p-3 rounded-xl border border-lime-500/30 space-y-1">
              <span className="text-xs font-black font-mono text-lime-400 flex items-center gap-1">
                <span>⭐ 82.99-7-99</span>
                <span className="text-[9px] bg-lime-400/20 px-1.5 py-0.2 rounded font-sans">Principal</span>
              </span>
              <p className="text-[11px] text-zinc-300 leading-snug">Outras atividades de serviços prestados principalmente às empresas (Fidelidade &amp; Take-Rate).</p>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-xs font-black font-mono text-purple-300">62.02-3-00 &amp; 62.03-1-00</span>
              <p className="text-[11px] text-zinc-400 leading-snug">Desenvolvimento e licenciamento de softwares customizáveis e não-customizáveis (SaaS).</p>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-xs font-black font-mono text-purple-300">63.11-9-00 &amp; 63.19-4-00</span>
              <p className="text-[11px] text-zinc-400 leading-snug">Tratamento de dados, hospedagem na internet, portais e serviços de informação.</p>
            </div>

            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-xs font-black font-mono text-purple-300">73.19-0-02, 73.20-3 &amp; 74.90</span>
              <p className="text-[11px] text-zinc-400 leading-snug">Retail Media, promoção de vendas, pesquisas de mercado (BI) e intermediação de negócios.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-950/60 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-3xl p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20">
              Integração Fiscal &amp; Contábil Oficial
            </span>
            <h4 className="text-xl font-extrabold text-white mt-1 flex items-center gap-2">
              <FileText className="size-6 text-purple-400" />
              Exportação de Arquivos XML para o Escritório de Contabilidade
            </h4>
            <p className="text-xs text-zinc-300">
              Pacotes de arquivos XML padronizados parametrizados com o CNPJ 68.930.455/0001-40 e CNAE 82.99-7-99 em Santana de Parnaíba - SP.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-purple-500/40 transition">
            <div className="space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">NFS-e ABRASF v2.04</span>
              <h5 className="text-sm font-bold text-white pt-1">Take-Rate Marketplace (6%)</h5>
              <p className="text-xs text-zinc-400">XML de Nota Fiscal de Serviços de intermediação de vendas do Netfits Shop junto à Rock Encantech (CNAE 82.99-7-99).</p>
            </div>
            <a
              href="/docs/xml_contabilidade/xml_nfse_take_rate_marketplace.xml"
              download="xml_nfse_take_rate_marketplace.xml"
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
            >
              <Download className="size-4" />
              Baixar XML Take-Rate (6%)
            </a>
          </div>

          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-lime-500/40 transition">
            <div className="space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded">NFS-e ABRASF v2.04</span>
              <h5 className="text-sm font-bold text-white pt-1">Serviços / Eventos Parceiros</h5>
              <p className="text-xs text-zinc-400">XML de taxa de intermediação por evento credenciado (CNAE 74.90-1-04).</p>
            </div>
            <a
              href="/docs/xml_contabilidade/xml_nfse_servicos_eventos.xml"
              download="xml_nfse_servicos_eventos.xml"
              className="w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
            >
              <Download className="size-4" />
              Baixar XML Serviços
            </a>
          </div>

          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-cyan-500/40 transition">
            <div className="space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Ledger Audit XML</span>
              <h5 className="text-sm font-bold text-white pt-1">Solvência Atuarial nfs</h5>
              <p className="text-xs text-zinc-400">Extrato auditável do passivo de pontos (reserva R$ 0,01/ponto e expiração FEFO - CPC 47).</p>
            </div>
            <a
              href="/docs/xml_contabilidade/xml_ledger_pontos_solvencia.xml"
              download="xml_ledger_pontos_solvencia.xml"
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
            >
              <Download className="size-4" />
              Baixar XML Ledger
            </a>
          </div>

          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-amber-500/40 transition">
            <div className="space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Fechamento SPED ECD</span>
              <h5 className="text-sm font-bold text-white pt-1">Fechamento Mensal Consolidado</h5>
              <p className="text-xs text-zinc-400">Integração com Domínio, Contmatic, Alterdata, Totvs e SPED ECD/ECF com matriz CNAE.</p>
            </div>
            <a
              href="/docs/xml_contabilidade/xml_fechamento_mensal_contabil.xml"
              download="xml_fechamento_mensal_contabil.xml"
              className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
            >
              <Download className="size-4" />
              Baixar Fechamento XML
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
