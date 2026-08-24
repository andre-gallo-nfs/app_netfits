const runner = "/assets/feed-runner-CCML8scl.jpg";
const cyclist = "/assets/feed-cyclist-eSoC9Il9.jpg";
const clinicFibios = "/assets/clinic-fibios-rZItzhet.jpg";
const mountainVideo = "/assets/feed-voturuna-DP-oQCwr.jpg";
const liquidz = "/assets/product-liquidz-Cj2dR76l.jpg";
const shoes = "/assets/product-shoes-CUzDX92n.jpg";
const ring = "/assets/product-ring-Bwo5Qd-4.jpg";
const raceSerraFina = "/assets/race-serra-fina-BvXw670x.jpg";
const raceParaty = "/assets/race-paraty-BwDctZiL.jpg";
const raceBerlin = "/assets/race-berlin-CD4pj62D.jpg";
const raceNyc = "/assets/race-nyc-DsHtzJD5.jpg";
const apparelTee = "/assets/apparel-tee-Q_guZjsU.jpg";
const apparelShorts = "/assets/apparel-shorts-BogQtink.jpg";
const apparelSocks = "/assets/apparel-socks-BVqyprxp.jpg";
const gearVest = "/assets/gear-vest-CAbiKTT5.jpg";
const productGel = "/assets/product-gel-DMuC9e-t.jpg";
const productBike = "/assets/product-bike-BESuKQ8H.jpg";
const productHelmet = "/assets/product-helmet-BeQCwc7p.jpg";
const productSwim = "/assets/product-swim-TYX_7gsi.jpg";
const productGlasses = "/assets/product-glasses-BLSG7VXv.jpg";
const productWhey = "/assets/product-whey-Wor1ExrG.jpg";
const productPalatinose = "/assets/product-palatinose-DwQY1yxt.jpg";
const productCreatine = "/assets/product-creatine-B5HXc3oE.jpg";
const productAppleWatch = "/assets/product-applewatch-LmhKu1MM.jpg";
const productJblBone = "/assets/product-jbl-bone-BkrYMGlK.jpg";
const feedItems = [
  {
    type: "story",
    id: "s1",
    author: "Kite Larsen",
    authorInitials: "KL",
    timeAgo: "2h",
    image: runner,
    title: "Ritual matinal no Rio: por que eu nunca pulo o nascer do sol.",
    excerpt: "Não é sobre o pace. É sobre aparecer antes que a cidade acorde — e construir consistência que dura décadas."
  },
  {
    type: "video",
    id: "v1",
    author: "Trail Lab",
    authorInitials: "TL",
    timeAgo: "3h",
    poster: mountainVideo,
    duration: "6:42",
    title: "Subida em montanha: 5 técnicas que mudam o seu pace.",
    excerpt: "Power-hiking, cadência curta, uso de bastões e respiração ritmada. Filme com Kite Larsen no Voturuna Life Park (SP)."
  },
  {
    type: "product",
    id: "p1",
    image: liquidz,
    tag: "Em alta no marketplace",
    title: "Liquidz de Jaboticaba",
    description: "Energia natural da jaboticaba brasileira com eletrólitos e vitaminas do complexo B.",
    price: "R$ 99,55",
    cashback: "+199 nfs",
    badge: "nfs em dobro"
  },
  {
    type: "spot",
    id: "sp1",
    image: clinicFibios,
    title: "Fibios Medicina e Saúde",
    location: "Pinheiros, São Paulo",
    tier: "Clínica parceira"
  },
  {
    type: "expert",
    id: "e1",
    name: "Dra. Isabella Formigari",
    role: "Medicina e Saúde — Fibios",
    excerpt: "Avaliação clínica integrada, longevidade e protocolos de recovery para atletas amadores e profissionais.",
    price: "R$ 500,00",
    cashback: "+500 nfs"
  },
  {
    type: "story",
    id: "s2",
    author: "Rafael Mendes",
    authorInitials: "RM",
    timeAgo: "5h",
    image: cyclist,
    title: "200km de bike por semana sem destruir os joelhos.",
    excerpt: "Volume sem inteligência é receita pra lesão. Compartilho meu plano de zonas de FC e como integro com o Garmin."
  },
  {
    type: "product",
    id: "p2",
    image: shoes,
    tag: "Drop da semana",
    title: "NovaBlast 4 Kinetic",
    description: "Tênis de corrida com placa de carbono e cashback estendido.",
    price: "R$ 1.290,00",
    cashback: "+1.290 nfs"
  },
  {
    type: "product",
    id: "p3",
    image: ring,
    tag: "Wearable parceiro",
    title: "Netfits Core Ring",
    description: "Anel de tracking com sincronia nativa de sono e atividade.",
    price: "R$ 1.890,00",
    cashback: "+1.890 nfs"
  }
];
const marketCategories = [
  { id: "sup", name: "Suplementos", count: 124 },
  { id: "gear", name: "Equipamentos", count: 86 },
  { id: "med", name: "Consultas médicas", count: 42 },
  { id: "nut", name: "Nutricionistas", count: 31 },
  { id: "ass", name: "Assessorias", count: 18 },
  { id: "lab", name: "Exames", count: 27 },
  { id: "trips", name: "Viagens", count: 22 },
  { id: "apparel", name: "Vestuário", count: 68 },
  { id: "tech", name: "Tecnologia", count: 35 },
  { id: "wellness", name: "Bem-estar", count: 29 }
];
const marketProducts = [
  { id: "m01", image: liquidz, title: "Liquidz de Jaboticaba", price: "R$ 99,55", cashback: "+199 nfs" },
  { id: "m02", image: shoes, title: "NovaBlast 4", price: "R$ 1.290", cashback: "+1.290 nfs" },
  { id: "m03", image: ring, title: "Core Ring", price: "R$ 1.890", cashback: "+1.890 nfs" },
  { id: "m04", image: productGel, title: "Energy Gel Pack x12", price: "R$ 168", cashback: "+168 nfs" },
  { id: "m05", image: raceSerraFina, title: "La Mision Brasil — Serra Fina", price: "R$ 980", cashback: "+980 nfs" },
  { id: "m06", image: raceNyc, title: "Maratona de Nova York 2026", price: "US$ 295", cashback: "+1.500 nfs" },
  { id: "m07", image: raceParaty, title: "UTMB Paraty — Centro Histórico", price: "R$ 720", cashback: "+720 nfs" },
  { id: "m08", image: raceBerlin, title: "Maratona de Berlim 2026", price: "€ 198", cashback: "+1.100 nfs" },
  { id: "m09", image: apparelTee, title: "Camiseta Tech Dry FT", price: "R$ 219", cashback: "+219 nfs" },
  { id: "m10", image: apparelShorts, title: 'Short Stride 5"', price: "R$ 259", cashback: "+259 nfs" },
  { id: "m11", image: apparelSocks, title: "Meias Compress Run", price: "R$ 89", cashback: "+89 nfs" },
  { id: "m12", image: gearVest, title: "Colete Hidratação 5L", price: "R$ 690", cashback: "+690 nfs" },
  { id: "m13", image: productBike, title: "Speed Carbon Aero R10", price: "R$ 18.900", cashback: "+18.900 nfs" },
  { id: "m14", image: productHelmet, title: "Capacete Aero Vent Pro", price: "R$ 899", cashback: "+899 nfs" },
  { id: "m15", image: productSwim, title: "Kit Natação Pro Swim", price: "R$ 349", cashback: "+349 nfs" },
  { id: "m16", image: productGlasses, title: "Óculos Bike Photochromic", price: "R$ 549", cashback: "+549 nfs" },
  { id: "m17", image: productWhey, title: "Whey Isolate 900g — Chocolate", price: "R$ 249", cashback: "+249 nfs" },
  { id: "m18", image: productPalatinose, title: "Palatinose Endurance 400g", price: "R$ 139", cashback: "+139 nfs" },
  { id: "m19", image: productCreatine, title: "Creatina Monohidratada 300g", price: "R$ 179", cashback: "+179 nfs" },
  { id: "m20", image: productAppleWatch, title: "Apple Watch Series 10 GPS 46mm", price: "R$ 4.299", cashback: "+4.299 nfs" },
  { id: "m21", image: productJblBone, title: "JBL Soundgear Sense — fone por indução", price: "R$ 1.199", cashback: "+2.398 nfs", doubleNfs: true }
];
const activities = [
  { id: "a1", icon: "🏃", title: "Corrida — 12,4 km", date: "Hoje, 06:12", reward: "+10 nfs" },
  { id: "a2", icon: "😴", title: "Sono 7h42 registrado", date: "Hoje, 07:00", reward: "+10 nfs" },
  { id: "a3", icon: "🥗", title: "Check-in nutricional", date: "Ontem, 20:30", reward: "+15 nfs" },
  { id: "a4", icon: "🚴", title: "Bike — 38,1 km", date: "Ontem, 17:50", reward: "+10 nfs" },
  { id: "a5", icon: "🩺", title: "Consulta Dra. Isabella Formigari", date: "12 mai", reward: "+500 nfs" }
];
export {
  activities as a,
  marketCategories as b,
  feedItems as f,
  marketProducts as m
};
