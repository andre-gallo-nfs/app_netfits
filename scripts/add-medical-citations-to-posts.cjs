const fs = require('fs');
const path = require('path');

const filePath = path.join('C:\\Users\\aacga\\Projetos\\app_netfits\\src\\lib\\scheduled-posts-data.json');
const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const postCitationsMap = {
  "post-cal-dia-04-exercicio-coracao": [
    {
      title: "American Heart Association (AHA) Physical Activity Guidelines for Adults",
      source: "Circulation. 2018;138(25):e740-e744. DOI: 10.1161/CIR.0000000000000625.",
      url: "https://pubmed.ncbi.nlm.nih.gov/30586762/",
      pmid: "30586762"
    },
    {
      title: "Diretriz de Avaliação e Reabilitação Cardiovascular e Metabólica",
      source: "Sociedade Brasileira de Cardiologia (SBC). Arquivos Brasileiros de Cardiologia.",
      url: "https://www.portal.cardiol.br/"
    }
  ],
  "post-cal-dia-08-sindrome-reds": [
    {
      title: "2023 International Olympic Committee (IOC) Consensus Statement on Relative Energy Deficiency in Sport (REDs)",
      source: "Mountjoy M, et al. British Journal of Sports Medicine. 2023;57(17):1073-1097.",
      url: "https://pubmed.ncbi.nlm.nih.gov/37752003/",
      pmid: "37752003"
    },
    {
      title: "ACSM Position Stand: The Female and Male Athlete Triad & Low Energy Availability",
      source: "Medicine & Science in Sports & Exercise. 2021;53(7):1511-1524.",
      url: "https://pubmed.ncbi.nlm.nih.gov/33983226/",
      pmid: "33983226"
    }
  ],
  "post-cal-dia-12-tendinopatias": [
    {
      title: "Is Tendon Pathology a Continuum? A Pathology Model to Explain Load-Induced Tendinopathy",
      source: "Cook JL, Purdam CR. British Journal of Sports Medicine. 2009;43(6):409-416.",
      url: "https://pubmed.ncbi.nlm.nih.gov/18812414/",
      pmid: "18812414"
    },
    {
      title: "Isometric Exercise Induces Analgesia and Reduces Inhibition in Tendinopathy",
      source: "Rio E, et al. British Journal of Sports Medicine. 2015;49(19):1277-1283.",
      url: "https://pubmed.ncbi.nlm.nih.gov/25979840/",
      pmid: "25979840"
    }
  ],
  "post-cal-dia-14-hidratacao-eletrolitos": [
    {
      title: "Consensus Statement of the 3rd International Exercise-Associated Hyponatremia (EAH) Conference",
      source: "Hew-Butler T, et al. British Journal of Sports Medicine. 2015;49(22):1432-1446.",
      url: "https://pubmed.ncbi.nlm.nih.gov/26130704/",
      pmid: "26130704"
    },
    {
      title: "American College of Sports Medicine (ACSM) Position Stand: Exercise and Fluid Replacement",
      source: "Sawka MN, et al. Medicine & Science in Sports & Exercise. 2007;39(2):377-390.",
      url: "https://pubmed.ncbi.nlm.nih.gov/17277604/",
      pmid: "17277604"
    }
  ],
  "post-cal-dia-16-overtraining": [
    {
      title: "Prevention, Diagnosis, and Treatment of the Overtraining Syndrome: Joint Consensus Statement of ECSS and ACSM",
      source: "Meeusen R, et al. Medicine & Science in Sports & Exercise. 2013;45(1):186-205.",
      url: "https://pubmed.ncbi.nlm.nih.gov/23247672/",
      pmid: "23247672"
    },
    {
      title: "Biomarcadores de Sobrecarga e Recuperação Fisiológica no Esporte",
      source: "Sociedade Brasileira de Medicina do Exercício e do Esporte (SBMEE).",
      url: "https://www.medicinadoesporte.org.br/"
    }
  ]
};

let modifiedCount = 0;
for (const post of posts) {
  if (postCitationsMap[post.id]) {
    post.citations = postCitationsMap[post.id];
    modifiedCount++;
  }
}

fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
console.log(`Citações médicas adicionadas a ${modifiedCount} posts em ${filePath}`);
