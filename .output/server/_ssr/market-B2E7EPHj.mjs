import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as marketProducts, b as marketCategories } from "./feed-data-CXusMQi4.mjs";
import { P as ProductDetailSheet, g as generatePartnerAffiliateUrl } from "./ProductDetailSheet-CsBD1ac4.mjs";
import "../_libs/sonner.mjs";
import { ak as Search, X } from "../_libs/lucide-react.mjs";

import "./router-CIllG4M_.mjs";
import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const PRODUCT_META = {
  m01: {
    description: "Hidratação isotônica em pó com extrato real de jaboticaba brasileira, eletrólitos balanceados (sódio, potássio, magnésio) e vitaminas do complexo B. Sem conservantes, sem corantes artificiais — pensado para treinos longos e dias quentes.",
    seller: "Liquidz",
    sellerInitials: "LZ",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "1.284",
    sold: "2,3 mil vendidos",
    highlights: ["Caixa com 14 sticks de 5g", "Sabor jaboticaba — fórmula exclusiva", "Sem açúcar, vegano e sem glúten"],
    specs: [{
      label: "Peso",
      value: "70g (14 sticks)"
    }, {
      label: "Sabor",
      value: "Jaboticaba"
    }, {
      label: "Validade",
      value: "18 meses"
    }, {
      label: "Origem",
      value: "Brasil"
    }],
    shippingEta: "Chega em 3–5 dias úteis · SP capital"
  },
  m02: {
    description: "Tênis de corrida com placa de carbono e amortecimento FF BLAST PLUS de última geração. Upper em engineered mesh ultraleve e drop 8mm — ideal para treinos rápidos, tiros e provas de 10k a maratona.",
    seller: "Netshoes",
    sellerInitials: "NS",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "942",
    sold: "5,1 mil vendidos",
    highlights: ["Placa de carbono full-length", "Drop 8mm · peso 215g (tam 42)", "Indicado para pisada neutra"],
    specs: [{
      label: "Categoria",
      value: "Performance / racing"
    }, {
      label: "Drop",
      value: "8mm"
    }, {
      label: "Peso",
      value: "215g (42 BR)"
    }, {
      label: "Garantia",
      value: "90 dias fabricante"
    }],
    shippingEta: "Chega em 2–4 dias úteis · Netshoes envios"
  },
  m03: {
    description: "Anel inteligente com 7 sensores que monitoram sono, recovery, FC, SpO₂ e temperatura corporal 24/7. Bateria de 7 dias, à prova d'água até 100m e sincronia nativa com o app netfits.",
    seller: "Core Wear",
    sellerInitials: "CW",
    sellerType: "Marca parceira · Envio direto",
    rating: 4.7,
    reviews: "618",
    sold: "1,1 mil vendidos",
    highlights: ["Bateria de até 7 dias", "Resistente a água (10 ATM)", "Integração nativa com netfits"],
    specs: [{
      label: "Tamanhos",
      value: "6 a 13 US"
    }, {
      label: "Material",
      value: "Titânio grau 5"
    }, {
      label: "Sensores",
      value: "FC, SpO₂, temp, accel"
    }, {
      label: "Garantia",
      value: "12 meses"
    }],
    shippingEta: "Chega em 5–8 dias úteis · envio nacional"
  },
  m04: {
    description: "Pack com 12 géis energéticos de maltodextrina + frutose na proporção 2:1, com 25g de carbo por sachê. Textura fluida, fácil digestão — não pesa no estômago em provas longas.",
    seller: "Probiótica",
    sellerInitials: "PB",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "412",
    sold: "3,4 mil vendidos",
    highlights: ["12 unidades · 25g de carbo cada", "Sem cafeína · 3 sabores sortidos", "Embalagem easy-open"],
    specs: [{
      label: "Sabores",
      value: "Limão, frutas vermelhas, maracujá"
    }, {
      label: "Carbo/unidade",
      value: "25g"
    }, {
      label: "Cafeína",
      value: "Não contém"
    }, {
      label: "Validade",
      value: "24 meses"
    }],
    shippingEta: "Chega em 3–5 dias úteis · envio nacional"
  },
  m05: {
    description: "Inscrição oficial para a La Mision Brasil — Serra Fina. Trail de ultra distância em uma das travessias mais técnicas da Mantiqueira, com kit completo, alimentação em PA e medalha finisher.",
    seller: "La Mision Brasil",
    sellerInitials: "LM",
    sellerType: "Organização oficial · Inscrição direta",
    rating: 4.9,
    reviews: "287",
    sold: "640 inscrições",
    highlights: ["Kit oficial + medalha finisher", "PA com alimentação e isotônico", "Briefing técnico e seguro incluso"],
    specs: [{
      label: "Data",
      value: "18 out 2026"
    }, {
      label: "Distâncias",
      value: "21k · 42k · 80k"
    }, {
      label: "Local",
      value: "Serra Fina · MG/SP"
    }, {
      label: "Kit",
      value: "Camiseta, sacochila, número"
    }],
    shippingEta: "Confirmação por e-mail em até 24h"
  },
  m06: {
    description: "Vaga garantida na TCS Maratona de Nova York 2026 via lote internacional Travel Run. Inclui inscrição oficial, acompanhamento pré-prova e suporte em português durante a viagem.",
    seller: "Travel Run",
    sellerInitials: "TR",
    sellerType: "Operadora oficial · Vaga garantida NYRR",
    rating: 5,
    reviews: "152",
    sold: "98 vagas vendidas",
    highlights: ["Vaga oficial NYRR garantida", "Suporte em português antes e durante", "Welcome dinner em NYC"],
    specs: [{
      label: "Data",
      value: "01 nov 2026"
    }, {
      label: "Distância",
      value: "42,195 km"
    }, {
      label: "Local",
      value: "Nova York · EUA"
    }, {
      label: "Inclui",
      value: "Inscrição + suporte local"
    }],
    shippingEta: "Confirmação NYRR em até 7 dias"
  },
  m07: {
    description: "Inscrição oficial UTMB Paraty com largada e chegada no Centro Histórico. Percurso técnico pela Serra do Mar com vistas para a baía — uma das paradas mais cênicas do circuito UTMB World Series.",
    seller: "UTMB Brasil",
    sellerInitials: "UB",
    sellerType: "Organização oficial · UTMB World Series",
    rating: 4.9,
    reviews: "203",
    sold: "510 inscrições",
    highlights: ["Pontos UTMB Index oficiais", "Kit UTMB + medalha finisher", "Hidratação completa no percurso"],
    specs: [{
      label: "Data",
      value: "07 jun 2026"
    }, {
      label: "Distâncias",
      value: "20k · 50k · 100k · 160k"
    }, {
      label: "Local",
      value: "Paraty · RJ"
    }, {
      label: "Pontos UTMB",
      value: "1 a 4 stones"
    }],
    shippingEta: "Confirmação por e-mail em até 24h"
  },
  m08: {
    description: "Vaga garantida na BMW Berlin Marathon 2026, palco de records mundiais. Pacote inclui inscrição oficial via SCC Events, retirada do kit e suporte em português.",
    seller: "Travel Run",
    sellerInitials: "TR",
    sellerType: "Operadora oficial · Vaga garantida SCC",
    rating: 5,
    reviews: "187",
    sold: "124 vagas vendidas",
    highlights: ["Vaga oficial SCC Events", "Percurso plano · ideal PB", "Suporte em português em Berlim"],
    specs: [{
      label: "Data",
      value: "27 set 2026"
    }, {
      label: "Distância",
      value: "42,195 km"
    }, {
      label: "Local",
      value: "Berlim · Alemanha"
    }, {
      label: "Inclui",
      value: "Inscrição + suporte local"
    }],
    shippingEta: "Confirmação SCC em até 10 dias"
  },
  m09: {
    description: "Camiseta de corrida em tecido tech dry de alta performance — repele suor, seca em minutos e tem proteção UV 50+. Costura plana anti-atrito e corte anatômico para longas distâncias.",
    seller: "Dafiti Sports",
    sellerInitials: "DF",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.7,
    reviews: "1.092",
    sold: "8,7 mil vendidos",
    highlights: ["Tecido tech dry · UV 50+", "Costura plana anti-atrito", "Corte anatômico unissex"],
    specs: [{
      label: "Tamanhos",
      value: "PP a GG"
    }, {
      label: "Composição",
      value: "92% poliéster · 8% elastano"
    }, {
      label: "Peso",
      value: "120g"
    }, {
      label: "Lavagem",
      value: "Máquina · ciclo delicado"
    }],
    shippingEta: "Chega em 2–4 dias úteis · Dafiti envios"
  },
  m10: {
    description: 'Short de corrida Track & Field 5" com slip interno de compressão, bolso traseiro com zíper e dois bolsos laterais para gel. Tecido ultraleve TF Dry com tecnologia de secagem rápida.',
    seller: "Track & Field",
    sellerInitials: "TF",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "734",
    sold: "4,2 mil vendidos",
    highlights: ["Tecnologia TF Dry exclusiva", "Slip interno de compressão", "3 bolsos · 1 com zíper traseiro"],
    specs: [{
      label: "Comprimento",
      value: "5 polegadas"
    }, {
      label: "Tamanhos",
      value: "PP a GG"
    }, {
      label: "Composição",
      value: "88% poliéster · 12% elastano"
    }, {
      label: "Peso",
      value: "95g"
    }],
    shippingEta: "Chega em 2–4 dias úteis · Track & Field envios"
  },
  m11: {
    description: "Meias de compressão graduada (20–25 mmHg) que melhoram retorno venoso, reduzem fadiga e aceleram a recuperação. Tecido respirável com zonas anatômicas L/R.",
    seller: "Netshoes",
    sellerInitials: "NS",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "521",
    sold: "3,1 mil vendidos",
    highlights: ["Compressão graduada 20–25 mmHg", "Zonas anatômicas L/R", "Indicada para longões e recovery"],
    specs: [{
      label: "Tamanhos",
      value: "P, M, G, GG"
    }, {
      label: "Composição",
      value: "Poliamida + elastano"
    }, {
      label: "Compressão",
      value: "20–25 mmHg"
    }, {
      label: "Uso",
      value: "Treino e pós-treino"
    }],
    shippingEta: "Chega em 2–4 dias úteis · Netshoes envios"
  },
  m12: {
    description: "Colete de hidratação 5L com 2 soft flasks de 500ml inclusas, bolsos elásticos para géis, fechamento magnético no peito e tecido tipo mesh ultrarrespirável. Estabilidade total em trail e ultras.",
    seller: "Salomon",
    sellerInitials: "SL",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "318",
    sold: "1,4 mil vendidos",
    highlights: ["Capacidade total 5L + 2x 500ml", "Fechamento magnético no peito", "Bolsos elásticos para géis e celular"],
    specs: [{
      label: "Capacidade",
      value: "5 litros + 2 flasks 500ml"
    }, {
      label: "Tamanhos",
      value: "XS/S · M/L · XL"
    }, {
      label: "Peso",
      value: "240g (sem flasks)"
    }, {
      label: "Indicação",
      value: "Trail / ultra"
    }],
    shippingEta: "Chega em 4–6 dias úteis · envio nacional"
  },
  m13: {
    description: "Bicicleta speed com quadro full carbon T800, grupo Shimano 105 Di2 12v, rodas tubeless de perfil aero 50mm. Geometria endurance/race — ideal para gran fondo, treinos longos e provas de estrada.",
    seller: "Sense Bike",
    sellerInitials: "SB",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "184",
    sold: "320 vendidos",
    highlights: ["Quadro full carbon T800 · 7,8kg", "Shimano 105 Di2 eletrônico 12v", "Rodas tubeless aero 50mm"],
    specs: [{
      label: "Quadro",
      value: "Carbono T800"
    }, {
      label: "Grupo",
      value: "Shimano 105 Di2 12v"
    }, {
      label: "Rodas",
      value: "Aero 50mm tubeless"
    }, {
      label: "Tamanhos",
      value: "49 · 52 · 54 · 56"
    }],
    shippingEta: "Chega em 7–10 dias úteis · montagem inclusa"
  },
  m14: {
    description: "Capacete aerodinâmico com 18 entradas de ventilação, casco in-mold e sistema de ajuste micrométrico. Certificação CE EN1078 e MIPS para máxima proteção em alta velocidade.",
    seller: "Bell Helmets",
    sellerInitials: "BH",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "412",
    sold: "1,8 mil vendidos",
    highlights: ["Tecnologia MIPS de proteção", "18 entradas de ventilação", "Peso 240g · ajuste micrométrico"],
    specs: [{
      label: "Tamanhos",
      value: "S · M · L"
    }, {
      label: "Peso",
      value: "240g (tam M)"
    }, {
      label: "Certificação",
      value: "CE EN1078 + MIPS"
    }, {
      label: "Garantia",
      value: "24 meses"
    }],
    shippingEta: "Chega em 3–5 dias úteis · envio nacional"
  },
  m15: {
    description: "Kit de natação com sunga/maiô em tecido PBT cloro-resistente, touca de silicone hipoalergênica e óculos antiembaçante com proteção UV. Pensado para piscina e águas abertas.",
    seller: "Arena Brasil",
    sellerInitials: "AR",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.7,
    reviews: "298",
    sold: "2,1 mil vendidos",
    highlights: ["Tecido PBT cloro-resistente", "Óculos antiembaçante + UV", "Touca silicone hipoalergênica"],
    specs: [{
      label: "Composição",
      value: "53% PBT · 47% poliéster"
    }, {
      label: "Tamanhos",
      value: "PP a GG"
    }, {
      label: "Inclui",
      value: "Roupa + touca + óculos"
    }, {
      label: "Uso",
      value: "Piscina e águas abertas"
    }],
    shippingEta: "Chega em 3–5 dias úteis · envio nacional"
  },
  m16: {
    description: "Óculos esportivo para ciclismo com lente fotocromática que se adapta da luz forte ao crepúsculo. Armação TR90 ultraleve, hastes ajustáveis e proteção UV400.",
    seller: "Oakley",
    sellerInitials: "OK",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "612",
    sold: "1,3 mil vendidos",
    highlights: ["Lente fotocromática Prizm Road", "Proteção UV400 · antirreflexo", "Armação TR90 · 28g"],
    specs: [{
      label: "Lente",
      value: "Fotocromática Prizm"
    }, {
      label: "Armação",
      value: "TR90 ultraleve"
    }, {
      label: "Peso",
      value: "28g"
    }, {
      label: "Inclui",
      value: "Estojo rígido + case mole"
    }],
    shippingEta: "Chega em 3–5 dias úteis · envio nacional"
  },
  m17: {
    description: "Whey protein isolado com 27g de proteína por dose, baixo teor de carboidrato e gordura. Sabor chocolate belga com adoçantes naturais. Ideal para recuperação pós-treino.",
    seller: "Growth Supplements",
    sellerInitials: "GS",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "3.421",
    sold: "12,8 mil vendidos",
    highlights: ["27g de proteína por dose", "Baixo carbo · baixa gordura", "Sabor chocolate belga"],
    specs: [{
      label: "Peso",
      value: "900g (30 doses)"
    }, {
      label: "Proteína/dose",
      value: "27g"
    }, {
      label: "Sabor",
      value: "Chocolate belga"
    }, {
      label: "Validade",
      value: "24 meses"
    }],
    shippingEta: "Chega em 2–4 dias úteis · envio nacional"
  },
  m18: {
    description: "Carboidrato de absorção lenta (palatinose / isomaltulose) que mantém energia estável por horas sem picos de insulina. Ideal para treinos longos, provas e endurance.",
    seller: "Dux Nutrition",
    sellerInitials: "DX",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "846",
    sold: "4,2 mil vendidos",
    highlights: ["Energia estável por horas", "Baixo índice glicêmico", "Sem sabor · misturável"],
    specs: [{
      label: "Peso",
      value: "400g (13 doses)"
    }, {
      label: "Carbo/dose",
      value: "30g palatinose"
    }, {
      label: "Índice glicêmico",
      value: "Baixo (32)"
    }, {
      label: "Validade",
      value: "24 meses"
    }],
    shippingEta: "Chega em 2–4 dias úteis · envio nacional"
  },
  m19: {
    description: "Creatina monohidratada Creapure®, padrão ouro da suplementação. Aumenta força, potência e recuperação muscular. 3g por dose, sem sabor.",
    seller: "Integralmédica",
    sellerInitials: "IM",
    sellerType: "Marca oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "5.182",
    sold: "21,3 mil vendidos",
    highlights: ["Creapure® padrão alemão", "3g por dose · 100 doses", "Sem sabor · solubilidade total"],
    specs: [{
      label: "Peso",
      value: "300g (100 doses)"
    }, {
      label: "Tipo",
      value: "Monohidratada Creapure®"
    }, {
      label: "Dose",
      value: "3g/dia"
    }, {
      label: "Validade",
      value: "36 meses"
    }],
    shippingEta: "Chega em 2–4 dias úteis · envio nacional"
  },
  m20: {
    description: "Apple Watch Series 10 com tela Always-On Retina LTPO3, chip S10 e sensores de oxigênio no sangue, ECG e temperatura. Caixa em alumínio 46mm, GPS, resistência à água 50m e bateria de até 18h. Sincronia nativa com o app netfits.",
    seller: "Magazine Luiza",
    sellerInitials: "ML",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.9,
    reviews: "8.412",
    sold: "32,1 mil vendidos",
    highlights: ["Tela Always-On Retina · chip S10", "ECG, SpO₂ e temperatura corporal", "GPS + bateria de até 18h"],
    specs: [{
      label: "Caixa",
      value: "Alumínio 46mm"
    }, {
      label: "Conectividade",
      value: "GPS + Bluetooth 5.3"
    }, {
      label: "Bateria",
      value: "Até 18h (36h low power)"
    }, {
      label: "Resistência",
      value: "50m (IP6X)"
    }],
    shippingEta: "Chega em 2–4 dias úteis · Magalu Entregas"
  },
  m21: {
    description: "Fone de ouvido esportivo JBL Soundgear Sense por indução óssea (open-ear). Não veda o canal auditivo, permitindo ouvir o som ambiente — ideal para corrida, trail e bike outdoor com segurança. Bluetooth 5.3, IP54, até 24h de bateria com case de carga.",
    seller: "JBL Brasil",
    sellerInitials: "JB",
    sellerType: "Loja oficial · Parceiro netfits",
    rating: 4.8,
    reviews: "2.184",
    sold: "9,7 mil vendidos",
    highlights: ["Open-ear · você ouve o ambiente", "Bluetooth 5.3 · IP54 resistente ao suor", "Até 24h com case · carga rápida"],
    specs: [{
      label: "Tipo",
      value: "Indução / open-ear"
    }, {
      label: "Bateria",
      value: "6h + 18h (case)"
    }, {
      label: "Conexão",
      value: "Bluetooth 5.3 multipoint"
    }, {
      label: "Resistência",
      value: "IP54 (suor e chuva)"
    }],
    shippingEta: "Chega em 2–4 dias úteis · JBL envios"
  }
};
const DEFAULT_META = {
  description: "Produto selecionado pela curadoria netfits. Compre agora e ganhe cashback em nfs direto na sua carteira.",
  seller: "shop",
  sellerInitials: "NF",
  sellerType: "Curadoria oficial",
  rating: 4.8,
  reviews: "—",
  sold: "—",
  highlights: [],
  specs: [],
  shippingEta: "Chega em 3–5 dias úteis"
};
function productMeta(id) {
  return PRODUCT_META[id] ?? DEFAULT_META;
}
const AFFILIATE_PARTNERS = [{
  id: "nike",
  name: "Nike",
  url: "https://www.nike.com.br",
  tag: "Run & Train"
}, {
  id: "adidas",
  name: "adidas",
  url: "https://www.adidas.com.br",
  tag: "Running"
}, {
  id: "asics",
  name: "ASICS",
  url: "https://www.asics.com.br",
  tag: "Performance"
}, {
  id: "newbalance",
  name: "New Balance",
  url: "https://www.newbalance.com.br",
  tag: "Run"
}, {
  id: "salomon",
  name: "Salomon",
  url: "https://www.salomon.com/pt-br",
  tag: "Trail"
}, {
  id: "hoka",
  name: "HOKA",
  url: "https://www.hoka.com",
  tag: "Max cushion"
}, {
  id: "oakley",
  name: "Oakley",
  url: "https://www.oakley.com/pt-br",
  tag: "Eyewear"
}, {
  id: "garmin",
  name: "Garmin",
  url: "https://www.garmin.com.br",
  tag: "Wearables"
}, {
  id: "netshoes",
  name: "Netshoes",
  url: "https://www.netshoes.com.br",
  tag: "Multimarcas"
}, {
  id: "tf",
  name: "Track&Field",
  url: "https://www.tf.com.br",
  tag: "Lifestyle"
}, {
  id: "centauro",
  name: "Centauro",
  url: "https://www.centauro.com.br",
  tag: "Multimarcas"
}, {
  id: "decathlon",
  name: "Decathlon",
  url: "https://www.decathlon.com.br",
  tag: "Multiesporte"
}];
const PRODUCT_CATEGORY_MAP = {
  m01: "sup",
  m02: "apparel",
  m03: "tech",
  m04: "sup",
  m05: "trips",
  m06: "trips",
  m07: "trips",
  m08: "trips",
  m09: "apparel",
  m10: "apparel",
  m11: "apparel",
  m12: "gear",
  m13: "gear",
  m14: "gear",
  m15: "gear",
  m16: "gear",
  m17: "sup",
  m18: "sup",
  m19: "sup",
  m20: "tech",
  m21: "tech"
};
function MarketPage() {
  const [selected, setSelected] = reactExports.useState(null);
  const [activeCat, setActiveCat] = reactExports.useState("all");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const categoriesRef = reactExports.useRef(null);
  const isDragging = reactExports.useRef(false);
  const hasMoved = reactExports.useRef(false);
  const startX = reactExports.useRef(0);
  const scrollLeft = reactExports.useRef(0);
  const handleMouseDown = (e) => {
    if (!categoriesRef.current) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - categoriesRef.current.offsetLeft;
    scrollLeft.current = categoriesRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current || !categoriesRef.current) return;
    const x = e.pageX - categoriesRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasMoved.current = true;
    }
    categoriesRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const selectCategory = (id) => {
    if (hasMoved.current) return;
    setActiveCat(id);
  };
  const filteredProducts = reactExports.useMemo(() => {
    return marketProducts.filter((p) => {
      const catMatch = activeCat === "all" || PRODUCT_CATEGORY_MAP[p.id] === activeCat;
      if (!catMatch) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const meta = productMeta(p.id);
      const titleMatch = p.title.toLowerCase().includes(q);
      const sellerMatch = meta.seller.toLowerCase().includes(q);
      const descMatch = meta.description.toLowerCase().includes(q);
      const priceMatch = p.price.toLowerCase().includes(q);
      const highlightsMatch = meta.highlights.some((h) => h.toLowerCase().includes(q));
      return titleMatch || sellerMatch || descMatch || priceMatch || highlightsMatch;
    });
  }, [activeCat, searchQuery]);
  const {
    dailyDeal,
    weeklyDeals
  } = reactExports.useMemo(() => {
    const arr = [...marketProducts];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const daily = arr.find((p) => p.doubleNfs) ?? arr[0];
    const weekly = arr.filter((p) => p.id !== daily.id);
    return {
      dailyDeal: daily,
      weeklyDeals: weekly
    };
  }, []);
  const openProduct = (p, tag, badge) => {
    const meta = productMeta(p.id);
    const sellerIdMap = {
      Netshoes: "netshoes",
      Liquidz: "centauro",
      "Core Wear": "garmin",
      Probiótica: "decathlon",
      "La Mision Brasil": "nike"
    };
    const sellerId = sellerIdMap[meta.seller] || "centauro";
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
      sellerId,
      rating: meta.rating,
      reviews: meta.reviews,
      sold: meta.sold,
      highlights: meta.highlights,
      specs: meta.specs,
      shippingEta: meta.shippingEta,
      affiliateUrl: generatePartnerAffiliateUrl(sellerId, p.title, p.price)
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pt-6 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "Marketplace Afiliado Curado" }),
        "· Acumule Netfits por compras em lojas parceiras"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-full px-4 py-2.5 flex items-center gap-2.5 ring-1 ring-zinc-200 shadow-sm focus-within:ring-2 focus-within:ring-purple-600 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4 text-zinc-400 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Buscar por produto, marca (Nike, Asics), suplemento...", className: "w-full bg-transparent text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none" }),
      searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearchQuery(""), className: "size-5 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-500 shrink-0 transition", "aria-label": "Limpar busca", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: categoriesRef, onMouseDown: handleMouseDown, onMouseLeave: handleMouseLeave, onMouseUp: handleMouseUp, onMouseMove: handleMouseMove, className: "flex gap-1.5 overflow-x-auto overflow-y-hidden px-4 py-1.5 no-scrollbar select-none cursor-grab active:cursor-grabbing touch-pan-x overscroll-x-contain", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => selectCategory("all"), className: `shrink-0 px-3 py-1 rounded-full text-xs font-semibold ring-1 transition-all shadow-sm ${activeCat === "all" ? "bg-purple-600 text-white ring-purple-600" : "bg-white text-zinc-700 ring-zinc-200 hover:bg-zinc-100"}`, children: "Todos" }),
        marketCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => selectCategory(c.id), className: `shrink-0 px-3 py-1 rounded-full text-xs font-semibold ring-1 transition-all shadow-sm ${activeCat === c.id ? "bg-purple-600 text-white ring-purple-600" : "bg-white text-zinc-700 ring-zinc-200 hover:bg-zinc-100"}`, children: c.name }, c.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-4", "aria-hidden": true })
      ] })
    ] }) }),
    (searchQuery || activeCat !== "all") && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-zinc-700", children: [
        filteredProducts.length === 0 ? "Nenhum produto encontrado" : `${filteredProducts.length} produto(s) encontrado(s)`,
        searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-purple-700", children: [
          ' para "',
          searchQuery,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setSearchQuery("");
        setActiveCat("all");
      }, className: "text-[11px] font-bold text-purple-600 hover:underline", children: "Limpar filtros" })
    ] }),
    searchQuery || activeCat !== "all" ? /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pb-8", children: filteredProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-50 border border-zinc-200 rounded-2xl p-8 text-center my-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-purple-100 text-purple-600 grid place-items-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-zinc-900", children: "Nenhum produto encontrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-500 mt-1 max-w-xs mx-auto leading-relaxed", children: [
        "Tente pesquisar por termos como ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-purple-700", children: "NovaBlast, Creatina, Liquidz, Garmin, Apple, Short ou Nutrição" }),
        "."
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: filteredProducts.map((p) => {
      const isDouble = p.doubleNfs === true;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openProduct(p, "Resultado de Busca", isDouble ? "nfs em dobro" : void 0), className: "bg-card rounded-2xl overflow-hidden ring-1 ring-black/5 text-left active:scale-[0.98] transition-transform shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, loading: "lazy", className: "w-full aspect-square object-cover bg-zinc-100" }),
          isDouble && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded shadow", children: "nfs em dobro" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold truncate", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: p.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-white bg-purple-600 px-1.5 py-0.5 rounded", children: p.cashback })
          ] })
        ] })
      ] }, p.id);
    }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-brand", children: "Oferta do dia" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: "Acaba à meia-noite" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded", children: "nfs em dobro" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openProduct(dailyDeal, "Oferta do dia", "nfs em dobro"), className: "w-full bg-card rounded-2xl overflow-hidden ring-2 ring-brand/40 text-left active:scale-[0.99] transition-transform", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dailyDeal.image, alt: dailyDeal.title, className: "w-full aspect-[16/10] object-cover bg-zinc-100" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold", children: dailyDeal.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold", children: dailyDeal.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-brand-foreground bg-brand px-2 py-1 rounded", children: dailyDeal.cashback })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Ofertas da semana" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-brand", children: "Ver tudo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: weeklyDeals.map((p) => {
          const isDouble = p.doubleNfs === true;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openProduct(p, "Oferta da semana", isDouble ? "nfs em dobro" : void 0), className: "bg-card rounded-2xl overflow-hidden ring-1 ring-black/5 text-left active:scale-[0.98] transition-transform", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, loading: "lazy", className: "w-full aspect-square object-cover bg-zinc-100" }),
              isDouble && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 text-[10px] font-bold tracking-widest text-white bg-lime-500 px-2 py-0.5 rounded", children: "nfs em dobro" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold truncate", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: p.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-brand-foreground bg-brand px-1.5 py-0.5 rounded", children: p.cashback })
              ] })
            ] })
          ] }, p.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-end mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Parceiros afiliados" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand/10 border border-brand/20 rounded-xl px-3 py-2.5 mb-3 flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand text-base leading-none mt-0.5", children: "ⓘ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-foreground leading-relaxed", children: "Você só acumula netfits se acessar a loja do parceiro através dos links abaixo. Compras feitas direto no site sem passar por aqui não geram nfs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: AFFILIATE_PARTNERS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: b.url, target: "_blank", rel: "noopener noreferrer sponsored", className: "bg-card rounded-xl ring-1 ring-black/5 px-2 py-3 flex flex-col items-center justify-center text-center active:scale-[0.97] transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold tracking-tight", children: b.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground mt-0.5", children: b.tag })
      ] }, b.id)) })
    ] }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetailSheet, { product: selected, onClose: () => setSelected(null) })
  ] });
}
export {
  MarketPage as component
};
