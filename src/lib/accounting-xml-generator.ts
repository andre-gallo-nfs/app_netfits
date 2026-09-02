/**
 * Accounting & Fiscal XML Generator — Netfits Ltda.
 * Gerador de Arquivos XML Fiscais (NFS-e Padrão ABRASF v2.04) e Contábeis (Ledger de Pontos nfs, Fechamento Consolidado & SPED ECD/ECF)
 * Dados Oficiais da Empresa:
 * Razão Social: Netfits Ltda.
 * CNPJ: 68.930.455/0001-40
 * Endereço: Alameda das Embaúbas, 365, Quadra 06 Lote 19 sala 01, Alphaville, Santana de Parnaíba-SP, CEP: 06.542-195
 * Código IBGE Município: 3547304 (Santana de Parnaíba - SP)
 * CNAE Principal: 82.99-7-99 (Outras atividades de serviços prestados principalmente às empresas não especificadas anteriormente)
 * CNAEs Secundários: 62.02-3-00, 62.03-1-00, 63.11-9-00, 63.19-4-00, 73.19-0-02, 73.20-3-00, 74.90-1-04
 */

export const NETFITS_OFFICIAL_COMPANY_DATA = {
  razaoSocial: "Netfits Ltda.",
  nomeFantasia: "Netfits",
  cnpj: "68.930.455/0001-40",
  cnpjRaw: "68930455000140",
  inscricaoMunicipal: "1089452",
  logradouro: "Alameda das Embaúbas",
  numero: "365",
  complemento: "Quadra 06 Lote 19 sala 01",
  bairro: "Alphaville",
  municipio: "Santana de Parnaíba",
  uf: "SP",
  cep: "06542195",
  cepFormatted: "06.542-195",
  codigoMunicipioIbge: "3547304",
  telefone: "11998765432",
  emailFiscal: "contabilidade@netfits.com.br",
  emailDpo: "dpo@netfits.com.br",
  cnaes: [
    { code: "82.99-7-99", raw: "8299799", isPrimary: true, description: "Outras atividades de serviços prestados principalmente às empresas não especificadas anteriormente (Gestão de Programas de Fidelidade & Intermediação)" },
    { code: "62.02-3-00", raw: "6202300", isPrimary: false, description: "Desenvolvimento e licenciamento de programas de computador customizáveis" },
    { code: "62.03-1-00", raw: "6203100", isPrimary: false, description: "Desenvolvimento e licenciamento de programas de computador não-customizáveis" },
    { code: "63.11-9-00", raw: "6311900", isPrimary: false, description: "Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet" },
    { code: "63.19-4-00", raw: "6319400", isPrimary: false, description: "Portais, provedores de conteúdo e outros serviços de informação na internet" },
    { code: "73.19-0-02", raw: "7319002", isPrimary: false, description: "Promoção de vendas (Retail Media e campanhas esportivas)" },
    { code: "73.20-3-00", raw: "7320300", isPrimary: false, description: "Pesquisas de mercado e de opinião pública (BI e Insights)" },
    { code: "74.90-1-04", raw: "7490104", isPrimary: false, description: "Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários" },
  ]
};

export interface NFSeItemData {
  rpsNumber: number;
  issueDate: string;
  takerName: string;
  takerCnpjCpf: string;
  takerEmail: string;
  serviceDescription: string;
  serviceCodeCnae?: string; // Ex: 8299799, 7490104 ou 7319002
  itemValueBrl: number;
  issRatePct: number; // Ex: 2.0% em Santana de Parnaíba
}

export interface PointsLedgerAccountingData {
  periodMonth: string; // Ex: "2026-08"
  pointsIssuedTotal: number;
  solvencyReserveBrl: number; // R$ 0,01 por ponto nfs
  pointsRedeemedTotal: number;
  pointsExpiredFefoTotal: number;
  ledgerEntriesCount: number;
}

/**
 * 1. Gera XML NFS-e Padrão ABRASF v2.04 (Santana de Parnaíba - SP) para Take-Rate de Marketplace & Serviços
 */
export function generateNFSeTakeRateXML(data: NFSeItemData): string {
  const issValue = ((data.itemValueBrl * data.issRatePct) / 100).toFixed(2);
  const formattedValue = data.itemValueBrl.toFixed(2);
  const cnaeCode = data.serviceCodeCnae ? data.serviceCodeCnae.replace(/\D/g, "") : NETFITS_OFFICIAL_COMPANY_DATA.cnpjRaw;

  return `<?xml version="1.0" encoding="UTF-8"?>
<CompNfse xmlns="http://www.abrasf.org.br/nfse/v204">
  <Nfse version="2.04">
    <InfNfse id="NFS_${data.rpsNumber}">
      <Numero>${data.rpsNumber}</Numero>
      <CodigoVerificacao>NFS-${data.rpsNumber}-2026-NFS</CodigoVerificacao>
      <DataEmissao>${data.issueDate}T10:00:00</DataEmissao>
      <ValoresNfse>
        <ValorServicos>${formattedValue}</ValorServicos>
        <ValorDeducoes>0.00</ValorDeducoes>
        <ValorPis>0.00</ValorPis>
        <ValorCofins>0.00</ValorCofins>
        <ValorInss>0.00</ValorInss>
        <ValorIr>0.00</ValorIr>
        <ValorCsll>0.00</ValorCsll>
        <OutrasRetencoes>0.00</OutrasRetencoes>
        <ValorIss>${issValue}</ValorIss>
        <Aliquota>${data.issRatePct.toFixed(2)}</Aliquota>
        <DescontoIncondicionado>0.00</DescontoIncondicionado>
        <ValorLiquidoNfse>${formattedValue}</ValorLiquidoNfse>
      </ValoresNfse>
      <PrestadorServico>
        <IdentificacaoPrestador>
          <Cnpj>${NETFITS_OFFICIAL_COMPANY_DATA.cnpjRaw}</Cnpj>
          <InscricaoMunicipal>${NETFITS_OFFICIAL_COMPANY_DATA.inscricaoMunicipal}</InscricaoMunicipal>
        </IdentificacaoPrestador>
        <RazaoSocial>${NETFITS_OFFICIAL_COMPANY_DATA.razaoSocial}</RazaoSocial>
        <NomeFantasia>${NETFITS_OFFICIAL_COMPANY_DATA.nomeFantasia}</NomeFantasia>
        <Endereco>
          <Endereco>${NETFITS_OFFICIAL_COMPANY_DATA.logradouro}</Endereco>
          <Numero>${NETFITS_OFFICIAL_COMPANY_DATA.numero}</Numero>
          <Complemento>${NETFITS_OFFICIAL_COMPANY_DATA.complemento}</Complemento>
          <Bairro>${NETFITS_OFFICIAL_COMPANY_DATA.bairro}</Bairro>
          <CodigoMunicipio>${NETFITS_OFFICIAL_COMPANY_DATA.codigoMunicipioIbge}</CodigoMunicipio>
          <Uf>${NETFITS_OFFICIAL_COMPANY_DATA.uf}</Uf>
          <Cep>${NETFITS_OFFICIAL_COMPANY_DATA.cep}</Cep>
        </Endereco>
        <Contato>
          <Telefone>${NETFITS_OFFICIAL_COMPANY_DATA.telefone}</Telefone>
          <Email>${NETFITS_OFFICIAL_COMPANY_DATA.emailFiscal}</Email>
        </Contato>
      </PrestadorServico>
      <TomadorServico>
        <IdentificacaoTomador>
          <CpfCnpj>
            <Cnpj>${data.takerCnpjCpf.replace(/\D/g, "")}</Cnpj>
          </CpfCnpj>
        </IdentificacaoTomador>
        <RazaoSocial>${data.takerName}</RazaoSocial>
        <Contato>
          <Email>${data.takerEmail}</Email>
        </Contato>
      </TomadorServico>
      <Servico>
        <Valores>
          <ValorServicos>${formattedValue}</ValorServicos>
          <IssRetido>2</IssRetido>
          <ValorIss>${issValue}</ValorIss>
        </Valores>
        <ItemListaServico>10.05</ItemListaServico>
        <CodigoCnae>${cnaeCode}</CodigoCnae>
        <Discriminacao>${data.serviceDescription} | Prestado sob CNAE ${NETFITS_OFFICIAL_COMPANY_DATA.cnaes[0].code} em Santana de Parnaíba - SP</Discriminacao>
        <CodigoMunicipio>${NETFITS_OFFICIAL_COMPANY_DATA.codigoMunicipioIbge}</CodigoMunicipio>
      </Servico>
    </InfNfse>
  </Nfse>
</CompNfse>`;
}

/**
 * 2. Gera XML de Conciliação Contábil do Ledger de Pontos nfs & Solvência Atuarial
 */
export function generatePointsLedgerXML(data: PointsLedgerAccountingData): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<NetfitsLedgerAuditReport xmlns="http://schema.netfits.com.br/ledger/v1">
  <Header>
    <Company>${NETFITS_OFFICIAL_COMPANY_DATA.razaoSocial}</Company>
    <CNPJ>${NETFITS_OFFICIAL_COMPANY_DATA.cnpj}</CNPJ>
    <InscricaoMunicipal>${NETFITS_OFFICIAL_COMPANY_DATA.inscricaoMunicipal}</InscricaoMunicipal>
    <Address>${NETFITS_OFFICIAL_COMPANY_DATA.logradouro}, ${NETFITS_OFFICIAL_COMPANY_DATA.numero} ${NETFITS_OFFICIAL_COMPANY_DATA.complemento}, ${NETFITS_OFFICIAL_COMPANY_DATA.bairro}, ${NETFITS_OFFICIAL_COMPANY_DATA.municipio}-${NETFITS_OFFICIAL_COMPANY_DATA.uf}, CEP ${NETFITS_OFFICIAL_COMPANY_DATA.cepFormatted}</Address>
    <PrimaryCNAE>${NETFITS_OFFICIAL_COMPANY_DATA.cnaes[0].code} - ${NETFITS_OFFICIAL_COMPANY_DATA.cnaes[0].description}</PrimaryCNAE>
    <PeriodMonth>${data.periodMonth}</PeriodMonth>
    <GeneratedAt>${new Date().toISOString()}</GeneratedAt>
    <SolvencyRule>100% Backed by Cash Provision (R$ 0,01 per nfs point)</SolvencyRule>
  </Header>
  <Summary>
    <TotalPointsIssued>${data.pointsIssuedTotal}</TotalPointsIssued>
    <SolvencyReserveProvisionBRL>${data.solvencyReserveBrl.toFixed(2)}</SolvencyReserveProvisionBRL>
    <TotalPointsRedeemed>${data.pointsRedeemedTotal}</TotalPointsRedeemed>
    <TotalPointsExpiredFEFO>${data.pointsExpiredFefoTotal}</TotalPointsExpiredFEFO>
    <TotalLedgerTransactions>${data.ledgerEntriesCount}</TotalLedgerTransactions>
    <AccountingClassification>Passivo Circulante - Recompensas e Pontos a Resgatar (CPC 47 / IFRS 15)</AccountingClassification>
  </Summary>
  <AccountingEntries>
    <Entry id="ENT_1">
      <AccountDebit>3.1.01.05 - Despesas com Programa de Fidelidade nfs</AccountDebit>
      <AccountCredit>2.1.04.08 - Provisão para Solvência Atuarial de Pontos nfs</AccountCredit>
      <AmountBRL>${data.solvencyReserveBrl.toFixed(2)}</AmountBRL>
      <Description>Emissão mensal de pontos nfs com provisão de solvência 100% em caixa</Description>
    </Entry>
  </AccountingEntries>
</NetfitsLedgerAuditReport>`;
}

/**
 * 3. Gera XML de Fechamento Consolidado Mensal para Importação em Sistemas Contábeis (Domínio / Contmatic / Alterdata / Totvs / SPED ECD)
 */
export function generateMonthlyAccountingClosureXML(period: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<FechamentoContabilNetfits xmlns="http://schema.netfits.com.br/contabilidade/v1">
  <Empresa>
    <RazaoSocial>${NETFITS_OFFICIAL_COMPANY_DATA.razaoSocial}</RazaoSocial>
    <CNPJ>${NETFITS_OFFICIAL_COMPANY_DATA.cnpj}</CNPJ>
    <InscricaoMunicipal>${NETFITS_OFFICIAL_COMPANY_DATA.inscricaoMunicipal}</InscricaoMunicipal>
    <Sede>${NETFITS_OFFICIAL_COMPANY_DATA.logradouro}, ${NETFITS_OFFICIAL_COMPANY_DATA.numero} ${NETFITS_OFFICIAL_COMPANY_DATA.complemento}, ${NETFITS_OFFICIAL_COMPANY_DATA.bairro}, ${NETFITS_OFFICIAL_COMPANY_DATA.municipio}-${NETFITS_OFFICIAL_COMPANY_DATA.uf}, CEP ${NETFITS_OFFICIAL_COMPANY_DATA.cepFormatted}</Sede>
    <CNAEPrincipal>${NETFITS_OFFICIAL_COMPANY_DATA.cnaes[0].code}</CNAEPrincipal>
    <Periodo>${period}</Periodo>
  </Empresa>
  <MatrizCNAEsJUCESP>
    ${NETFITS_OFFICIAL_COMPANY_DATA.cnaes.map((c) => `<CNAE code="${c.code}" principal="${c.isPrimary}">${c.description}</CNAE>`).join("\n    ")}
  </MatrizCNAEsJUCESP>
  <DREConsolidada>
    <ReceitaMarketplaceTakeRateBRL>1800000.00</ReceitaMarketplaceTakeRateBRL>
    <ReceitaNetfitsClubBRL>597000.00</ReceitaNetfitsClubBRL>
    <ReceitaServicosEventosBRL>270000.00</ReceitaServicosEventosBRL>
    <ReceitaMidiaFeedBRL>202500.00</ReceitaMidiaFeedBRL>
    <ReceitaBrutaTotalBRL>2869500.00</ReceitaBrutaTotalBRL>
    <DeducoesGatewayBRL>495000.00</DeducoesGatewayBRL>
    <ProvisaoSolvenciaPontosBRL>450000.00</ProvisaoSolvenciaPontosBRL>
    <MargemBrutaAjustadaBRL>1902825.00</MargemBrutaAjustadaBRL>
    <DespesasOperacionaisBRL>728000.00</DespesasOperacionaisBRL>
    <EbitdaMensalBRL>1174825.00</EbitdaMensalBRL>
  </DREConsolidada>
</FechamentoContabilNetfits>`;
}
