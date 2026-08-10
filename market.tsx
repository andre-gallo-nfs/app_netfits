import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { marketCategories, marketProducts } from "@/lib/feed-data";
import { ProductDetailSheet, type DetailProduct } from "@/components/ProductDetailSheet";


export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "shop" },
      {
        name: "description",
        content: "Produtos, consultas e serviços. Compre e ganhe netfits de volta.",
      },
      { property: "og:title", content: "shop" },
    ],
  }),
  component: MarketPage,
});

type ProductMeta = {
  description: string;
  seller: string;
  sellerInitials: string;
  sellerType: string;
  rating: number;
  reviews: string;
  sold: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  shippingEta: string;
};

const PRODUCT_META: Record<string, ProductMeta> = {
  m01: {
    description:
      "Hidratação isotônica em pó com extrato real de jaboticaba brasileira, eletrólitos balanceados (sódio, potássio, magnésio) e vitaminas do complexo B. Sem conservantes, sem corantes artificiais — pensado para treinos longos e dias quentes.",
    seller: "Liquidz",
    sellerInitials: "LZ",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "1.284",
    sold: "2,3 mil vendidos",
    highlights: [
      "Caixa com 14 sticks de 5g",
      "Sabor jaboticaba — fórmula exclusiva",
      "Sem açúcar, vegano e sem glúten",
    ],
    specs: [
      { label: "Peso", value: "70g (14 sticks)" },
      { label: "Sabor", value: "Jaboticaba" },
      { label: "Validade", value: "18 meses" },
      { label: "Origem", value: "Brasil" },
    ],
    shippingEta: "Chega em 3–5 dias úteis · SP capital",
  },
  m02: {
    description:
      "Tênis de corrida com placa de carbono e amortecimento FF BLAST PLUS de última geração. Upper em engineered mesh ultraleve e drop 8mm — ideal para treinos rápidos, tiros e provas de 10k a maratona.",
    seller: "Netshoes",
    sellerInitials: "NS",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "942",
    sold: "5,1 mil vendidos",
    highlights: [
      "Placa de carbono full-length",
      "Drop 8mm · peso 215g (tam 42)",
      "Indicado para pisada neutra",
    ],
    specs: [
      { label: "Categoria", value: "Performance / racing" },
      { label: "Drop", value: "8mm" },
      { label: "Peso", value: "215g (42 BR)" },
      { label: "Garantia", value: "90 dias fabricante" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · Netshoes envios",
  },
  m03: {
    description:
      "Anel inteligente com 7 sensores que monitoram sono, recovery, FC, SpO₂ e temperatura corporal 24/7. Bateria de 7 dias, à prova d'água até 100m e sincronia nativa com o app netfits.",
    seller: "Core Wear",
    sellerInitials: "CW",
    sellerType: "Marca parceira · Envio direto",
    rating: 4.7,
    reviews: "618",
    sold: "1,1 mil vendidos",
    highlights: [
      "Bateria de até 7 dias",
      "Resistente a água (10 ATM)",
      "Integração nativa com netfits",
    ],
    specs: [
      { label: "Tamanhos", value: "6 a 13 US" },
      { label: "Material", value: "Titânio grau 5" },
      { label: "Sensores", value: "FC, SpO₂, temp, accel" },
      { label: "Garantia", value: "12 meses" },
    ],
    shippingEta: "Chega em 5–8 dias úteis · envio nacional",
  },
  m04: {
    description:
      "Pack com 12 géis energéticos de maltodextrina + frutose na proporção 2:1, com 25g de carbo por sachê. Textura fluida, fácil digestão — não pesa no estômago em provas longas.",
    seller: "Probiótica",
    sellerInitials: "PB",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "412",
    sold: "3,4 mil vendidos",
    highlights: [
      "12 unidades · 25g de carbo cada",
      "Sem cafeína · 3 sabores sortidos",
      "Embalagem easy-open",
    ],
    specs: [
      { label: "Sabores", value: "Limão, frutas vermelhas, maracujá" },
      { label: "Carbo/unidade", value: "25g" },
      { label: "Cafeína", value: "Não contém" },
      { label: "Validade", value: "24 meses" },
    ],
    shippingEta: "Chega em 3–5 dias úteis · envio nacional",
  },
  m05: {
    description:
      "Inscrição oficial para a La Mision Brasil — Serra Fina. Trail de ultra distância em uma das travessias mais técnicas da Mantiqueira, com kit completo, alimentação em PA e medalha finisher.",
    seller: "La Mision Brasil",
    sellerInitials: "LM",
    sellerType: "Organização oficial · Inscrição direta",
    rating: 4.9,
    reviews: "287",
    sold: "640 inscrições",
    highlights: [
      "Kit oficial + medalha finisher",
      "PA com alimentação e isotônico",
      "Briefing técnico e seguro incluso",
    ],
    specs: [
      { label: "Data", value: "18 out 2026" },
      { label: "Distâncias", value: "21k · 42k · 80k" },
      { label: "Local", value: "Serra Fina · MG/SP" },
      { label: "Kit", value: "Camiseta, sacochila, número" },
    ],
    shippingEta: "Confirmação por e-mail em até 24h",
  },
  m06: {
    description:
      "Vaga garantida na TCS Maratona de Nova York 2026 via lote internacional Travel Run. Inclui inscrição oficial, acompanhamento pré-prova e suporte em português durante a viagem.",
    seller: "Travel Run",
    sellerInitials: "TR",
    sellerType: "Operadora oficial · Vaga garantida NYRR",
    rating: 5.0,
    reviews: "152",
    sold: "98 vagas vendidas",
    highlights: [
      "Vaga oficial NYRR garantida",
      "Suporte em português antes e durante",
      "Welcome dinner em NYC",
    ],
    specs: [
      { label: "Data", value: "01 nov 2026" },
      { label: "Distância", value: "42,195 km" },
      { label: "Local", value: "Nova York · EUA" },
      { label: "Inclui", value: "Inscrição + suporte local" },
    ],
    shippingEta: "Confirmação NYRR em até 7 dias",
  },
  m07: {
    description:
      "Inscrição oficial UTMB Paraty com largada e chegada no Centro Histórico. Percurso técnico pela Serra do Mar com vistas para a baía — uma das paradas mais cênicas do circuito UTMB World Series.",
    seller: "UTMB Brasil",
    sellerInitials: "UB",
    sellerType: "Organização oficial · UTMB World Series",
    rating: 4.9,
    reviews: "203",
    sold: "510 inscrições",
    highlights: [
      "Pontos UTMB Index oficiais",
      "Kit UTMB + medalha finisher",
      "Hidratação completa no percurso",
    ],
    specs: [
      { label: "Data", value: "07 jun 2026" },
      { label: "Distâncias", value: "20k · 50k · 100k · 160k" },
      { label: "Local", value: "Paraty · RJ" },
      { label: "Pontos UTMB", value: "1 a 4 stones" },
    ],
    shippingEta: "Confirmação por e-mail em até 24h",
  },
  m08: {
    description:
      "Vaga garantida na BMW Berlin Marathon 2026, palco de records mundiais. Pacote inclui inscrição oficial via SCC Events, retirada do kit e suporte em português.",
    seller: "Travel Run",
    sellerInitials: "TR",
    sellerType: "Operadora oficial · Vaga garantida SCC",
    rating: 5.0,
    reviews: "187",
    sold: "124 vagas vendidas",
    highlights: [
      "Vaga oficial SCC Events",
      "Percurso plano · ideal PB",
      "Suporte em português em Berlim",
    ],
    specs: [
      { label: "Data", value: "27 set 2026" },
      { label: "Distância", value: "42,195 km" },
      { label: "Local", value: "Berlim · Alemanha" },
      { label: "Inclui", value: "Inscrição + suporte local" },
    ],
    shippingEta: "Confirmação SCC em até 10 dias",
  },
  m09: {
    description:
      "Camiseta de corrida em tecido tech dry de alta performance — repele suor, seca em minutos e tem proteção UV 50+. Costura plana anti-atrito e corte anatômico para longas distâncias.",
    seller: "Dafiti Sports",
    sellerInitials: "DF",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.7,
    reviews: "1.092",
    sold: "8,7 mil vendidos",
    highlights: [
      "Tecido tech dry · UV 50+",
      "Costura plana anti-atrito",
      "Corte anatômico unissex",
    ],
    specs: [
      { label: "Tamanhos", value: "PP a GG" },
      { label: "Composição", value: "92% poliéster · 8% elastano" },
      { label: "Peso", value: "120g" },
      { label: "Lavagem", value: "Máquina · ciclo delicado" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · Dafiti envios",
  },
  m10: {
    description:
      "Short de corrida Track & Field 5\" com slip interno de compressão, bolso traseiro com zíper e dois bolsos laterais para gel. Tecido ultraleve TF Dry com tecnologia de secagem rápida.",
    seller: "Track & Field",
    sellerInitials: "TF",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "734",
    sold: "4,2 mil vendidos",
    highlights: [
      "Tecnologia TF Dry exclusiva",
      "Slip interno de compressão",
      "3 bolsos · 1 com zíper traseiro",
    ],
    specs: [
      { label: "Comprimento", value: "5 polegadas" },
      { label: "Tamanhos", value: "PP a GG" },
      { label: "Composição", value: "88% poliéster · 12% elastano" },
      { label: "Peso", value: "95g" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · Track & Field envios",
  },
  m11: {
    description:
      "Meias de compressão graduada (20–25 mmHg) que melhoram retorno venoso, reduzem fadiga e aceleram a recuperação. Tecido respirável com zonas anatômicas L/R.",
    seller: "Netshoes",
    sellerInitials: "NS",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "521",
    sold: "3,1 mil vendidos",
    highlights: [
      "Compressão graduada 20–25 mmHg",
      "Zonas anatômicas L/R",
      "Indicada para longões e recovery",
    ],
    specs: [
      { label: "Tamanhos", value: "P, M, G, GG" },
      { label: "Composição", value: "Poliamida + elastano" },
      { label: "Compressão", value: "20–25 mmHg" },
      { label: "Uso", value: "Treino e pós-treino" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · Netshoes envios",
  },
  m12: {
    description:
      "Colete de hidratação 5L com 2 soft flasks de 500ml inclusas, bolsos elásticos para géis, fechamento magnético no peito e tecido tipo mesh ultrarrespirável. Estabilidade total em trail e ultras.",
    seller: "Salomon",
    sellerInitials: "SL",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "318",
    sold: "1,4 mil vendidos",
    highlights: [
      "Capacidade total 5L + 2x 500ml",
      "Fechamento magnético no peito",
      "Bolsos elásticos para géis e celular",
    ],
    specs: [
      { label: "Capacidade", value: "5 litros + 2 flasks 500ml" },
      { label: "Tamanhos", value: "XS/S · M/L · XL" },
      { label: "Peso", value: "240g (sem flasks)" },
      { label: "Indicação", value: "Trail / ultra" },
    ],
    shippingEta: "Chega em 4–6 dias úteis · envio nacional",
  },
  m13: {
    description:
      "Bicicleta speed com quadro full carbon T800, grupo Shimano 105 Di2 12v, rodas tubeless de perfil aero 50mm. Geometria endurance/race — ideal para gran fondo, treinos longos e provas de estrada.",
    seller: "Sense Bike",
    sellerInitials: "SB",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "184",
    sold: "320 vendidos",
    highlights: [
      "Quadro full carbon T800 · 7,8kg",
      "Shimano 105 Di2 eletrônico 12v",
      "Rodas tubeless aero 50mm",
    ],
    specs: [
      { label: "Quadro", value: "Carbono T800" },
      { label: "Grupo", value: "Shimano 105 Di2 12v" },
      { label: "Rodas", value: "Aero 50mm tubeless" },
      { label: "Tamanhos", value: "49 · 52 · 54 · 56" },
    ],
    shippingEta: "Chega em 7–10 dias úteis · montagem inclusa",
  },
  m14: {
    description:
      "Capacete aerodinâmico com 18 entradas de ventilação, casco in-mold e sistema de ajuste micrométrico. Certificação CE EN1078 e MIPS para máxima proteção em alta velocidade.",
    seller: "Bell Helmets",
    sellerInitials: "BH",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "412",
    sold: "1,8 mil vendidos",
    highlights: [
      "Tecnologia MIPS de proteção",
      "18 entradas de ventilação",
      "Peso 240g · ajuste micrométrico",
    ],
    specs: [
      { label: "Tamanhos", value: "S · M · L" },
      { label: "Peso", value: "240g (tam M)" },
      { label: "Certificação", value: "CE EN1078 + MIPS" },
      { label: "Garantia", value: "24 meses" },
    ],
    shippingEta: "Chega em 3–5 dias úteis · envio nacional",
  },
  m15: {
    description:
      "Kit de natação com sunga/maiô em tecido PBT cloro-resistente, touca de silicone hipoalergênica e óculos antiembaçante com proteção UV. Pensado para piscina e águas abertas.",
    seller: "Arena Brasil",
    sellerInitials: "AR",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.7,
    reviews: "298",
    sold: "2,1 mil vendidos",
    highlights: [
      "Tecido PBT cloro-resistente",
      "Óculos antiembaçante + UV",
      "Touca silicone hipoalergênica",
    ],
    specs: [
      { label: "Composição", value: "53% PBT · 47% poliéster" },
      { label: "Tamanhos", value: "PP a GG" },
      { label: "Inclui", value: "Roupa + touca + óculos" },
      { label: "Uso", value: "Piscina e águas abertas" },
    ],
    shippingEta: "Chega em 3–5 dias úteis · envio nacional",
  },
  m16: {
    description:
      "Óculos esportivo para ciclismo com lente fotocromática que se adapta da luz forte ao crepúsculo. Armação TR90 ultraleve, hastes ajustáveis e proteção UV400.",
    seller: "Oakley",
    sellerInitials: "OK",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "612",
    sold: "1,3 mil vendidos",
    highlights: [
      "Lente fotocromática Prizm Road",
      "Proteção UV400 · antirreflexo",
      "Armação TR90 · 28g",
    ],
    specs: [
      { label: "Lente", value: "Fotocromática Prizm" },
      { label: "Armação", value: "TR90 ultraleve" },
      { label: "Peso", value: "28g" },
      { label: "Inclui", value: "Estojo rígido + case mole" },
    ],
    shippingEta: "Chega em 3–5 dias úteis · envio nacional",
  },
  m17: {
    description:
      "Whey protein isolado com 27g de proteína por dose, baixo teor de carboidrato e gordura. Sabor chocolate belga com adoçantes naturais. Ideal para recuperação pós-treino.",
    seller: "Growth Supplements",
    sellerInitials: "GS",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "3.421",
    sold: "12,8 mil vendidos",
    highlights: [
      "27g de proteína por dose",
      "Baixo carbo · baixa gordura",
      "Sabor chocolate belga",
    ],
    specs: [
      { label: "Peso", value: "900g (30 doses)" },
      { label: "Proteína/dose", value: "27g" },
      { label: "Sabor", value: "Chocolate belga" },
      { label: "Validade", value: "24 meses" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · envio nacional",
  },
  m18: {
    description:
      "Carboidrato de absorção lenta (palatinose / isomaltulose) que mantém energia estável por horas sem picos de insulina. Ideal para treinos longos, provas e endurance.",
    seller: "Dux Nutrition",
    sellerInitials: "DX",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "846",
    sold: "4,2 mil vendidos",
    highlights: [
      "Energia estável por horas",
      "Baixo índice glicêmico",
      "Sem sabor · misturável",
    ],
    specs: [
      { label: "Peso", value: "400g (13 doses)" },
      { label: "Carbo/dose", value: "30g palatinose" },
      { label: "Índice glicêmico", value: "Baixo (32)" },
      { label: "Validade", value: "24 meses" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · envio nacional",
  },
  m19: {
    description:
      "Creatina monohidratada Creapure®, padrão ouro da suplementação. Aumenta força, potência e recuperação muscular. 3g por dose, sem sabor.",
    seller: "Integralmédica",
    sellerInitials: "IM",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "5.182",
    sold: "21,3 mil vendidos",
    highlights: [
      "Creapure® padrão alemão",
      "3g por dose · 100 doses",
      "Sem sabor · solubilidade total",
    ],
    specs: [
      { label: "Peso", value: "300g (100 doses)" },
      { label: "Tipo", value: "Monohidratada Creapure®" },
      { label: "Dose", value: "3g/dia" },
      { label: "Validade", value: "36 meses" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · envio nacional",
  },
  m20: {
    description:
      "Apple Watch Series 10 com tela Always-On Retina LTPO3, chip S10 e sensores de oxigênio no sangue, ECG e temperatura. Caixa em alumínio 46mm, GPS, resistência à água 50m e bateria de até 18h. Sincronia nativa com o app netfits.",
    seller: "Magazine Luiza",
    sellerInitials: "ML",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "8.412",
    sold: "32,1 mil vendidos",
    highlights: [
      "Tela Always-On Retina · chip S10",
      "ECG, SpO₂ e temperatura corporal",
      "GPS + bateria de até 18h",
    ],
    specs: [
      { label: "Caixa", value: "Alumínio 46mm" },
      { label: "Conectividade", value: "GPS + Bluetooth 5.3" },
      { label: "Bateria", value: "Até 18h (36h low power)" },
      { label: "Resistência", value: "50m (IP6X)" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · Magalu Entregas",
  },
  m21: {
    description:
      "Fone de ouvido esportivo JBL Soundgear Sense por indução óssea (open-ear). Não veda o canal auditivo, permitindo ouvir o som ambiente — ideal para corrida, trail e bike outdoor com segurança. Bluetooth 5.3, IP54, até 24h de bateria com case de carga.",
    seller: "JBL Brasil",
    sellerInitials: "JB",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "2.184",
    sold: "9,7 mil vendidos",
    highlights: [
      "Open-ear · você ouve o ambiente",
      "Bluetooth 5.3 · IP54 resistente ao suor",
      "Até 24h com case · carga rápida",
    ],
    specs: [
      { label: "Tipo", value: "Indução / open-ear" },
      { label: "Bateria", value: "6h + 18h (case)" },
      { label: "Conexão", value: "Bluetooth 5.3 multipoint" },
      { label: "Resistência", value: "IP54 (suor e chuva)" },
    ],
    shippingEta: "Chega em 2–4 dias úteis · JBL envios",
  },
};

const DEFAULT_META: ProductMeta = {
  description:
    "Produto selecionado pela curadoria netfits. Compre agora e ganhe cashback em nfs direto na sua carteira.",
  seller: "shop",
  sellerInitials: "NF",
  sellerType: "Curadoria oficial",
  rating: 4.8,
  reviews: "—",
  sold: "—",
  highlights: [],
  specs: [],
  shippingEta: "Chega em 3–5 dias úteis",
};

function productMeta(id: string): ProductMeta {
  return PRODUCT_META[id] ?? DEFAULT_META;
}


const AFFILIATE_PARTNERS: { id: string; name: string; url: string; tag: string }[] = [
  { id: "nike", name: "Nike", url: "https://www.nike.com.br", tag: "Run & Train" },
  { id: "adidas", name: "adidas", url: "https://www.adidas.com.br", tag: "Running" },
  { id: "asics", name: "ASICS", url: "https://www.asics.com.br", tag: "Performance" },
  { id: "newbalance", name: "New Balance", url: "https://www.newbalance.com.br", tag: "Run" },
  { id: "salomon", name: "Salomon", url: "https://www.salomon.com/pt-br", tag: "Trail" },
  { id: "hoka", name: "HOKA", url: "https://www.hoka.com", tag: "Max cushion" },
  { id: "oakley", name: "Oakley", url: "https://www.oakley.com/pt-br", tag: "Eyewear" },
  { id: "garmin", name: "Garmin", url: "https://www.garmin.com.br", tag: "Wearables" },
  { id: "netshoes", name: "Netshoes", url: "https://www.netshoes.com.br", tag: "Multimarcas" },
  { id: "tf", name: "Track&Field", url: "https://www.tf.com.br", tag: "Lifestyle" },
  { id: "centauro", name: "Centauro", url: "https://www.centauro.com.br", tag: "Multimarcas" },
  { id: "decathlon", name: "Decathlon", url: "https://www.decathlon.com.br", tag: "Multiesporte" },
];

function MarketPage() {
  const [selected, setSelected] = useState<DetailProduct | null>(null);
  const [activeCat, setActiveCat] = useState<string>("all");

  const { dailyDeal, weeklyDeals } = useMemo(() => {
    const arr = [...marketProducts];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const daily = arr.find((p) => (p as { doubleNfs?: boolean }).doubleNfs) ?? arr[0];
    const weekly = arr.filter((p) => p.id !== daily.id);
    return { dailyDeal: daily, weeklyDeals: weekly };
  }, []);

  const openProduct = (p: typeof marketProducts[number], tag: string, badge?: string) => {
    const meta = productMeta(p.id);
    setSelected({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.image,
      cashback: p.cashback,
      badge,
      tag,
      description: meta.description,
      seller: meta.seller,
      sellerInitials: meta.sellerInitials,
      sellerType: meta.sellerType,
      rating: meta.rating,
      reviews: meta.reviews,
      sold: meta.sold,
      highlights: meta.highlights,
      specs: meta.specs,
      shippingEta: meta.shippingEta,
    });
  };

  return (
    <div className="pb-4">
      {/* Header */}
      <section className="px-4 pt-6 pb-3">
        <h1 className="text-2xl font-semibold tracking-tight">shop</h1>
        <p className="text-sm text-muted-foreground">
          1 nfs por real gasto. Use no próximo produto ou consulta.
        </p>
      </section>

      {/* Search */}
      <section className="px-4 pb-3">
        <div className="bg-muted rounded-full px-4 py-3 flex items-center gap-2 ring-1 ring-black/5">
          <Search className="size-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Buscar produtos, marcas, profissionais…
          </span>
        </div>
      </section>

      {/* Categories — horizontal scrollable carousel */}
      <section className="pb-5">
        <div className="relative">
          {/* left fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background to-transparent z-10" />
          {/* right fade — hints more content */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />
          <div
            className="flex gap-1.5 overflow-x-scroll overflow-y-hidden px-4 pb-1 no-scrollbar scroll-smooth [-webkit-overflow-scrolling:touch] [touch-action:pan-x] [overscroll-behavior-x:contain]"
            onWheel={(e) => {
              if (e.deltaY !== 0 && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.currentTarget.scrollLeft += e.deltaY;
              }
            }}
          >
            <button
              onClick={() => setActiveCat("all")}
              className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium ring-1 transition ${
                activeCat === "all"
                  ? "bg-foreground text-background ring-foreground"
                  : "bg-card text-foreground/70 ring-black/10 hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {marketCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium ring-1 transition ${
                  activeCat === c.id
                    ? "bg-foreground text-background ring-foreground"
                    : "bg-card text-foreground/70 ring-black/10 hover:text-foreground"
                }`}
              >
                {c.name}
              </button>
            ))}
            <div className="shrink-0 w-4" aria-hidden />
          </div>
        </div>
      </section>

      {/* Oferta do dia */}
      <section className="px-4 pb-8">
        <div className="flex justify-between items-end mb-3">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand">
              Oferta do dia
            </h2>
            <p className="text-[11px] text-muted-foreground mt-0.5">Acaba à meia-noite</p>
          </div>
          <span className="text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded">
            nfs em dobro
          </span>
        </div>
        <button
          onClick={() => openProduct(dailyDeal, "Oferta do dia", "nfs em dobro")}
          className="w-full bg-card rounded-2xl overflow-hidden ring-2 ring-brand/40 text-left active:scale-[0.99] transition-transform"
        >
          <div className="relative">
            <img
              src={dailyDeal.image}
              alt={dailyDeal.title}
              className="w-full aspect-[16/10] object-cover bg-zinc-100"
            />
          </div>
          <div className="p-4">
            <p className="text-base font-semibold">{dailyDeal.title}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold">{dailyDeal.price}</span>
              <span className="text-xs font-bold text-brand-foreground bg-brand px-2 py-1 rounded">
                {dailyDeal.cashback}
              </span>
            </div>
          </div>
        </button>
      </section>

      {/* Ofertas da semana */}
      <section className="px-4 pb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Ofertas da semana
          </h2>
          <span className="text-xs font-semibold text-brand">Ver tudo</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {weeklyDeals.map((p) => {
            const isDouble = (p as { doubleNfs?: boolean }).doubleNfs === true;
            return (
              <button
                key={p.id}
                onClick={() =>
                  openProduct(p, "Oferta da semana", isDouble ? "nfs em dobro" : undefined)
                }
                className="bg-card rounded-2xl overflow-hidden ring-1 ring-black/5 text-left active:scale-[0.98] transition-transform"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-square object-cover bg-zinc-100"
                  />
                  {isDouble && (
                    <span className="absolute top-2 left-2 text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded">
                      nfs em dobro
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold truncate">{p.title}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs font-semibold">{p.price}</span>
                    <span className="text-[10px] font-bold text-brand-foreground bg-brand px-1.5 py-0.5 rounded">
                      {p.cashback}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Parceiros afiliados */}
      <section className="px-4 pb-4">
        <div className="flex justify-between items-end mb-1">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Parceiros afiliados
          </h2>
        </div>
        <div className="bg-brand/10 border border-brand/20 rounded-xl px-3 py-2.5 mb-3 flex items-start gap-2">
          <span className="text-brand text-base leading-none mt-0.5">&#9432;</span>
          <p className="text-[11px] text-foreground leading-relaxed">
            Você só acumula netfits se acessar a loja do parceiro através dos links abaixo. Compras feitas direto no site sem passar por aqui não geram nfs.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {AFFILIATE_PARTNERS.map((b) => (
            <a
              key={b.id}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-card rounded-xl ring-1 ring-black/5 px-2 py-3 flex flex-col items-center justify-center text-center active:scale-[0.97] transition-transform"
            >
              <span className="text-sm font-bold tracking-tight">{b.name}</span>
              <span className="text-[10px] text-muted-foreground mt-0.5">{b.tag}</span>
            </a>
          ))}
        </div>
      </section>

      {selected && (
        <ProductDetailSheet product={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
