const runner = "/assets/feed-runner-CCML8scl.jpg";
const cyclist = "/assets/feed-cyclist-eSoC9Il9.jpg";
const clinicFibios = "/assets/clinic-fibios-rZItzhet.jpg";
const mountainVideo = "/assets/feed-voturuna-DP-oQCwr.jpg";
const liquidz = "/assets/product-liquidz-Cj2dR76l.jpg";
const shoes = "/assets/product-shoes-CUzDX92n.jpg";
const ring = "/assets/product-ring-Bwo5Qd-4.jpg";
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
const activities = [
  { id: "a1", icon: "🏃", title: "Corrida — 12,4 km", date: "Hoje, 06:12", reward: "+10 nfs" },
  { id: "a2", icon: "😴", title: "Sono 7h42 registrado", date: "Hoje, 07:00", reward: "+10 nfs" },
  { id: "a3", icon: "🥗", title: "Check-in nutricional", date: "Ontem, 20:30", reward: "+15 nfs" },
  { id: "a4", icon: "🚴", title: "Bike — 38,1 km", date: "Ontem, 17:50", reward: "+10 nfs" },
  { id: "a5", icon: "🩺", title: "Consulta Dra. Isabella Formigari", date: "12 mai", reward: "+500 nfs" }
];
export {
  activities as a,
  feedItems as f
};
