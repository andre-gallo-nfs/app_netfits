/**
 * Accounting & Fiscal XML Generator — Netfits Tecnologia Ltda.
 * Gerador de Arquivos XML Fiscais (NFS-e Padrão ABRASF v2.04) e Contábeis (Ledger de Pontos nfs & Fechamento Consolidado)
 */

export interface NFSeItemData {
  rpsNumber: number;
  issueDate: string;
  takerName: string;
  takerCnpjCpf: string;
  takerEmail: string;
  serviceDescription: string;
  serviceCodeCnae: string; // Ex: 6319-4/00 ou 6311-9/00 (Intermediação de negócios)
  itemValueBrl: number;
  issRatePct: number; // Ex: 2.0% ou 5.0%
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
 * 1. Gera XML NFS-e ABRASF v2.04 para Comissão / Take-Rate de 8,0% do Marketplace Shop
 */
export function generateNFSeTakeRateXML(data: NFSeItemData): string {
  const issValue = ((data.itemValueBrl * data.issRatePct) / 100).toFixed(2);
  const formattedValue = data.itemValueBrl.toFixed(2);

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
          <Cnpj>00000000000000</Cnpj>
          <InscricaoMunicipal>12345678</InscricaoMunicipal>
        </IdentificacaoPrestador>
        <RazaoSocial>Netfits Tecnologia Ltda.</RazaoSocial>
        <NomeFantasia>Netfits</NomeFantasia>
        <Endereco>
          <Endereco>Av. Brigadeiro Faria Lima</Endereco>
          <Numero>3477</Numero>
          <Bairro>Itaim Bibi</Bairro>
          <CodigoMunicipio>3550308</CodigoMunicipio>
          <Uf>SP</Uf>
          <Cep>04538133</Cep>
        </Endereco>
        <Contato>
          <Telefone>11998765432</Telefone>
          <Email>contabilidade@netfits.com.br</Email>
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
        <CodigoCnae>${data.serviceCodeCnae.replace(/\D/g, "")}</CodigoCnae>
        <Discriminacao>${data.serviceDescription}</Discriminacao>
        <CodigoMunicipio>3550308</CodigoMunicipio>
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
    <Company>Netfits Tecnologia Ltda.</Company>
    <CNPJ>00.000.000/0001-00</CNPJ>
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
    <AccountingClassification>Passivo Circulante - Recompensas e Pontos a Resgatar</AccountingClassification>
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
 * 3. Gera XML de Fechamento Consolidado Mensal para Importação em Sistemas Contábeis (Domínio / Contmatic / Alterdata / Totvs)
 */
export function generateMonthlyAccountingClosureXML(period: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<FechamentoContabilNetfits xmlns="http://schema.netfits.com.br/contabilidade/v1">
  <Empresa>
    <RazaoSocial>Netfits Tecnologia Ltda.</RazaoSocial>
    <CNPJ>00.000.000/0001-00</CNPJ>
    <Periodo>${period}</Periodo>
  </Empresa>
  <DREConsolidada>
    <ReceitaMarketplaceTakeRateBRL>1800000.00</ReceitaMarketplaceTakeRateBRL>
    <ReceitaNetfitsClubBRL>597000.00</ReceitaNetfitsClubBRL>
    <ReceitaServicosEventosBRL>270000.00</ReceitaServicosEventosBRL>
    <ReceitaMidiaFeedBRL>202500.00</ReceitaMidiaFeedBRL>
    <ReceitaBrutaTotalBRL>2869500.00</ReceitaReceitaBrutaTotalBRL>
    <DeducoesGatewayBRL>495000.00</DeducoesGatewayBRL>
    <ProvisaoSolvenciaPontosBRL>450000.00</ProvisaoSolvenciaPontosBRL>
    <MargemBrutaAjustadaBRL>1902825.00</MargemBrutaAjustadaBRL>
    <DespesasOperacionaisBRL>728000.00</DespesasOperacionaisBRL>
    <EbitdaMensalBRL>1174825.00</EbitdaMensalBRL>
  </DREConsolidada>
</FechamentoContabilNetfits>`;
}
