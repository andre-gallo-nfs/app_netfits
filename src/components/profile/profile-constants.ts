export const PRESET_AVATARS = [
  { id: "runner", label: "Corrida / Marathon", url: "https://images.unsplash.com/photo-1483721074892-4a85dd908069?w=200&auto=format&fit=crop&q=80" },
  { id: "gym", label: "Musculação / Gym", url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=200&auto=format&fit=crop&q=80" },
  { id: "swim", label: "Natação / Swimmer", url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=200&auto=format&fit=crop&q=80" },
  { id: "personal", label: "Personal Trainer", url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=200&auto=format&fit=crop&q=80" },
  { id: "crossfit", label: "Treino Funcional", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&auto=format&fit=crop&q=80" },
  { id: "yoga", label: "Yoga & Wellness", url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&auto=format&fit=crop&q=80" },
];

export const RUNNING_SPORTS = [
  "Corrida de rua",
  "Trail running",
  "Maratona",
  "Triathlon",
  "Ciclismo",
  "Natação",
  "Caminhada",
  "Treino funcional",
  "Musculação",
  "Yoga",
];

export const HEALTH_PLANS = [
  "Sem plano",
  "Amil",
  "Bradesco Saúde",
  "SulAmérica",
  "Unimed",
  "Hapvida / NotreDame",
  "Porto Seguro Saúde",
  "Allianz Saúde",
  "Care Plus",
  "Omint",
  "Outro",
];

export const GYMS = [
  "Não frequento",
  "Smart Fit",
  "Bio Ritmo",
  "Bodytech",
  "Companhia Athletica",
  "Selfit",
  "Just Fit",
  "Pratique",
  "Academia local / Independente",
];

export const WEARABLES = [
  "Não uso",
  "Apple Watch",
  "Garmin Forerunner",
  "Garmin Fenix",
  "Samsung Galaxy Watch",
  "Fitbit",
  "Polar",
  "Coros",
  "Suunto",
  "Amazfit",
  "Xiaomi Mi Band",
  "Outro",
];

export const formatBirthDateForDisplay = (val?: string) => {
  if (!val) return "";
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(val)) return val;
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
    const [y, m, d] = val.split("-");
    return `${d}/${m}/${y}`;
  }
  return val;
};

export const formatBirthDateMask = (val: string) => {
  let v = val.replace(/\D/g, "");
  if (v.length > 8) v = v.slice(0, 8);
  if (v.length > 4) {
    return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  }
  if (v.length > 2) {
    return `${v.slice(0, 2)}/${v.slice(2)}`;
  }
  return v;
};

export const formatPhoneMask = (val: string) => {
  let v = val.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length > 6) {
    return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  }
  if (v.length > 2) {
    return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  }
  return v;
};

export const formatCpfMask = (val: string) => {
  let v = val.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length > 9) {
    return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9)}`;
  }
  if (v.length > 6) {
    return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`;
  }
  if (v.length > 3) {
    return `${v.slice(0, 3)}.${v.slice(3)}`;
  }
  return v;
};

export const formatCepMask = (val: string) => {
  let v = val.replace(/\D/g, "");
  if (v.length > 8) v = v.slice(0, 8);
  if (v.length > 5) {
    return `${v.slice(0, 5)}-${v.slice(5)}`;
  }
  return v;
};
