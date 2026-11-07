const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDirOneDrive = 'C:\\Users\\aacga\\OneDrive\\netfits\\06_Design_Identidade_e_Midia\\AppStore_Screenshots_Oficiais';
const outputDirLocal = 'C:\\Users\\aacga\\Projetos\\app_netfits\\appstore_screenshots';

// Dimensions for iPhone Dynamic Island (tela média):
// 1179 x 2556 px (iPhone 14 Pro, 15, 15 Pro)
// 1206 x 2622 px (iPhone 16 Pro)
const W = 1179;
const H = 2556;

const baseCss = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: ${W}px;
    height: ${H}px;
    background: radial-gradient(circle at 50% 10%, #35106E 0%, #17072E 40%, #0A0314 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  
  .brand-header {
    width: 100%;
    padding: 90px 60px 30px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 10;
  }
  
  .brand-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(107, 42, 217, 0.25);
    border: 1.5px solid rgba(200, 241, 53, 0.35);
    padding: 12px 28px;
    border-radius: 999px;
    margin-bottom: 24px;
  }
  
  .brand-badge span {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #C8F135;
    text-transform: uppercase;
  }
  
  .bipartite-bar {
    width: 150px;
    height: 7px;
    display: flex;
    border-radius: 999px;
    overflow: hidden;
    margin-bottom: 24px;
  }
  .bipartite-bar .purple { flex: 1; background: #6B2AD9; }
  .bipartite-bar .lime { flex: 1; background: #C8F135; }
  
  .headline {
    font-size: 66px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -1.5px;
    margin-bottom: 18px;
    background: linear-gradient(180deg, #FFFFFF 0%, #E2D9F3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subheadline {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.35;
    color: #B3A5D4;
    max-width: 950px;
  }

  .phone-frame {
    width: 980px;
    height: 1800px;
    background: #000000;
    border: 12px solid #2A2438;
    border-radius: 80px 80px 0 0;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8), 0 0 80px rgba(107, 42, 217, 0.35);
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .dynamic-island {
    width: 290px;
    height: 60px;
    background: #000000;
    border-radius: 40px;
    align-self: center;
    margin-top: 20px;
    z-index: 50;
    position: absolute;
  }
  
  .phone-content {
    width: 100%;
    height: 100%;
    background: #0E071A;
    padding-top: 95px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

const screens = [
  {
    filename: '01_feed_longevidade',
    badge: 'Curadoria Médica Fibios',
    headline: 'A vida em movimento vale mais',
    subheadline: 'Medicina do estilo de vida, sono regenerador, nutrição e quizzes diários de fixação.',
    contentHtml: `
      <div style="padding: 24px 35px; display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="display:flex; align-items:center; gap: 14px;">
          <div style="width: 44px; height: 44px; background: #5D7600; border-radius: 10px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:22px; color:#C8F135;">N</div>
          <span style="font-size: 30px; font-weight: 800;">Netfits Feed</span>
        </div>
        <div style="background: rgba(200, 241, 53, 0.15); border: 1.5px solid #C8F135; padding: 8px 20px; border-radius: 999px; color: #C8F135; font-size: 20px; font-weight: 700;">
          +5 nfs / Quiz
        </div>
      </div>
      
      <div style="margin: 30px 35px; background: #180D2B; border: 2px solid rgba(107, 42, 217, 0.4); border-radius: 32px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
        <div style="padding: 26px; display:flex; align-items:center; gap: 16px;">
          <div style="width: 70px; height: 70px; border-radius: 50%; background: #6B2AD9; display:flex; align-items:center; justify-content:center; font-size: 32px; font-weight:700; border: 3px solid #C8F135;">
            IF
          </div>
          <div>
            <div style="font-size: 28px; font-weight: 800;">Dra. Isabella Formigari</div>
            <div style="font-size: 19px; color: #B3A5D4; font-weight: 500;">Médica (CRM-SP 282951) sócia fundadora da Fibios</div>
          </div>
        </div>
        
        <div style="height: 320px; background: linear-gradient(135deg, #35106E, #1F0742); position:relative; display:flex; align-items:flex-end; padding: 26px;">
          <div style="position:absolute; top:20px; left:20px; background: #C8F135; color:#0A0314; font-weight:900; font-size:18px; padding:6px 16px; border-radius:10px; text-transform:uppercase;">
            Longevidade Ativa
          </div>
          <div style="font-size: 34px; font-weight:900; line-height:1.2; text-shadow: 0 4px 15px rgba(0,0,0,0.8);">
            Zona 2 de Treino: O Segredo Biológico da Autofagia e Mitocôndrias Saudáveis
          </div>
        </div>
        
        <div style="margin: 24px; background: #23133D; border: 2px solid #6B2AD9; border-radius: 24px; padding: 24px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 16px;">
            <span style="font-size: 19px; font-weight:800; color:#C8F135; text-transform:uppercase;">Quiz de Fixação Médica</span>
            <span style="background:#6B2AD9; color:#fff; font-size:18px; font-weight:700; padding:5px 15px; border-radius:999px;">Ganhe 5 nfs</span>
          </div>
          <div style="font-size: 24px; font-weight:700; margin-bottom: 20px;">Qual a principal adaptação mitocondrial dos treinos na Zona 2?</div>
          
          <div style="background: rgba(200, 241, 53, 0.2); border: 2px solid #C8F135; border-radius: 18px; padding: 18px 24px; display:flex; align-items:center; justify-content:space-between;">
            <span style="font-size: 22px; font-weight:700; color:#FFFFFF;">Aumento da densidade mitocondrial e uso de lipídios</span>
            <span style="width: 32px; height: 32px; background:#C8F135; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#000; font-weight:900; font-size:20px;">✓</span>
          </div>
        </div>
      </div>
    `
  },
  {
    filename: '02_movimento_wearables',
    badge: 'Sweat-and-Earn via Terra API',
    headline: 'Seu movimento vale recompensas reais',
    subheadline: 'Integração transparente com Apple Watch, Garmin, Strava e sensores de telemetria.',
    contentHtml: `
      <div style="padding: 24px 35px; display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="display:flex; align-items:center; gap: 14px;">
          <div style="width: 44px; height: 44px; background: #5D7600; border-radius: 10px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:22px; color:#C8F135;">N</div>
          <span style="font-size: 30px; font-weight: 800;">Atividades Validadas</span>
        </div>
        <div style="background: rgba(107, 42, 217, 0.4); border: 1.5px solid #6B2AD9; padding: 8px 20px; border-radius: 999px; color: #fff; font-size: 19px; font-weight: 700;">
          Terra API Conectada
        </div>
      </div>
      
      <div style="margin: 30px 35px; display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div style="background: #180D2B; border: 2px solid rgba(107, 42, 217, 0.4); border-radius: 28px; padding: 28px;">
          <div style="font-size: 20px; color: #B3A5D4; font-weight:600; margin-bottom: 10px;">Distância Semanal</div>
          <div style="font-size: 46px; font-weight:900; color: #FFFFFF;">42.8 <span style="font-size: 24px; color: #C8F135;">km</span></div>
          <div style="font-size: 18px; color: #C8F135; font-weight:700; margin-top: 8px;">+18% vs semana anterior</div>
        </div>
        <div style="background: #180D2B; border: 2px solid rgba(107, 42, 217, 0.4); border-radius: 28px; padding: 28px;">
          <div style="font-size: 20px; color: #B3A5D4; font-weight:600; margin-bottom: 10px;">Pontos de Treino</div>
          <div style="font-size: 46px; font-weight:900; color: #C8F135;">+175 <span style="font-size: 24px; color: #B3A5D4;">nfs</span></div>
          <div style="font-size: 18px; color: #B3A5D4; font-weight:600; margin-top: 8px;">7 treinos validados</div>
        </div>
      </div>
      
      <div style="margin: 10px 35px; background: #180D2B; border: 2px solid rgba(200, 241, 53, 0.3); border-radius: 32px; padding: 30px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
          <div style="display:flex; align-items:center; gap: 14px;">
            <div style="width: 52px; height: 52px; border-radius: 14px; background: #35106E; display:flex; align-items:center; justify-content:center; font-size:28px;">🏃</div>
            <div>
              <div style="font-size: 28px; font-weight:800;">Corrida Matinal · Zona 2</div>
              <div style="font-size: 19px; color: #B3A5D4;">Hoje às 06:45 · Apple Watch Ultra</div>
            </div>
          </div>
          <div style="background: #C8F135; color: #0A0314; font-size: 20px; font-weight:900; padding: 6px 20px; border-radius: 999px;">
            +25 nfs
          </div>
        </div>
        
        <div style="display:flex; justify-content:space-around; background: #23133D; border-radius: 20px; padding: 20px; text-align:center;">
          <div>
            <div style="font-size: 18px; color: #B3A5D4;">Duração</div>
            <div style="font-size: 30px; font-weight:800; margin-top:4px;">54:12</div>
          </div>
          <div style="width: 2px; background: rgba(255,255,255,0.1);"></div>
          <div>
            <div style="font-size: 18px; color: #B3A5D4;">Ritmo Médio</div>
            <div style="font-size: 30px; font-weight:800; margin-top:4px;">5:15 /km</div>
          </div>
          <div style="width: 2px; background: rgba(255,255,255,0.1);"></div>
          <div>
            <div style="font-size: 18px; color: #B3A5D4;">FC Média</div>
            <div style="font-size: 30px; font-weight:800; color: #C8F135; margin-top:4px;">142 bpm</div>
          </div>
        </div>
      </div>
    `
  },
  {
    filename: '03_carteira_pontos',
    badge: 'Active Loyalty & Gamificação',
    headline: 'Pontos com lastro e extrato transparente',
    subheadline: 'Seus nfs acumulados nunca perdem o valor e são recompensas diretas à sua disciplina.',
    contentHtml: `
      <div style="padding: 24px 35px; display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="display:flex; align-items:center; gap: 14px;">
          <div style="width: 44px; height: 44px; background: #5D7600; border-radius: 10px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:22px; color:#C8F135;">N</div>
          <span style="font-size: 30px; font-weight: 800;">Carteira Netfits</span>
        </div>
        <div style="background: rgba(200, 241, 53, 0.15); border: 1.5px solid #C8F135; padding: 8px 20px; border-radius: 999px; color: #C8F135; font-size: 19px; font-weight: 700;">
          Nível Elite
        </div>
      </div>
      
      <div style="margin: 30px 35px; background: linear-gradient(135deg, #6B2AD9 0%, #35106E 100%); border: 2px solid rgba(200, 241, 53, 0.4); border-radius: 32px; padding: 36px; box-shadow: 0 25px 60px rgba(107, 42, 217, 0.4);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 14px;">
          <span style="font-size: 20px; color: #E2D9F3; font-weight: 600; text-transform:uppercase;">Saldo Disponível</span>
          <span style="background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius:999px; font-size:18px; font-weight:700;">FEFO 24 meses</span>
        </div>
        <div style="font-size: 74px; font-weight: 900; color: #FFFFFF; line-height: 1;">
          1.450 <span style="font-size: 34px; color: #C8F135; font-weight:800;">nfs</span>
        </div>
        <div style="font-size: 20px; color: #E2D9F3; margin-top: 16px; font-weight: 500;">
          ≈ R$ 14,50 em resgates imediatos no Shopping
        </div>
      </div>
      
      <div style="margin: 10px 35px;">
        <div style="font-size: 22px; font-weight:800; margin-bottom: 16px; color: #B3A5D4; text-transform:uppercase;">Extrato Recente</div>
        
        <div style="background: #180D2B; border-radius: 22px; padding: 20px 24px; display:flex; justify-content:space-between; align-items:center; margin-bottom: 14px; border: 1px solid rgba(255,255,255,0.06);">
          <div style="display:flex; align-items:center; gap: 16px;">
            <div style="width: 48px; height: 48px; background: rgba(200, 241, 53, 0.15); border-radius: 12px; display:flex; align-items:center; justify-content:center; font-size:22px; color:#C8F135;">✓</div>
            <div>
              <div style="font-size: 24px; font-weight:700;">Quiz Medicina do Sono</div>
              <div style="font-size: 18px; color:#B3A5D4;">Dr. Franco Merici · Ontem</div>
            </div>
          </div>
          <div style="font-size: 26px; font-weight:900; color:#C8F135;">+5 nfs</div>
        </div>
        
        <div style="background: #180D2B; border-radius: 22px; padding: 20px 24px; display:flex; justify-content:space-between; align-items:center; margin-bottom: 14px; border: 1px solid rgba(255,255,255,0.06);">
          <div style="display:flex; align-items:center; gap: 16px;">
            <div style="width: 48px; height: 48px; background: rgba(107, 42, 217, 0.3); border-radius: 12px; display:flex; align-items:center; justify-content:center; font-size:22px; color:#fff;">🏃</div>
            <div>
              <div style="font-size: 24px; font-weight:700;">Treino Longão 15km</div>
              <div style="font-size: 18px; color:#B3A5D4;">Garmin Connect · 02 Nov</div>
            </div>
          </div>
          <div style="font-size: 26px; font-weight:900; color:#C8F135;">+25 nfs</div>
        </div>
      </div>
    `
  },
  {
    filename: '04_shopping_performance',
    badge: 'Shopping Exclusivo Netfits',
    headline: 'Troque pontos por produtos de alta performance',
    subheadline: 'Vestuário técnico, suplementação de precisão e vouchers de serviços de saúde.',
    contentHtml: `
      <div style="padding: 24px 35px; display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="display:flex; align-items:center; gap: 14px;">
          <div style="width: 44px; height: 44px; background: #5D7600; border-radius: 10px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:22px; color:#C8F135;">N</div>
          <span style="font-size: 30px; font-weight: 800;">Shopping Netfits</span>
        </div>
        <div style="background: rgba(200, 241, 53, 0.15); border: 1.5px solid #C8F135; padding: 8px 20px; border-radius: 999px; color: #C8F135; font-size: 19px; font-weight: 700;">
          4 nfs / R$ 1,00
        </div>
      </div>
      
      <div style="margin: 30px 35px; display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div style="background: #180D2B; border: 2px solid rgba(107, 42, 217, 0.4); border-radius: 28px; overflow:hidden;">
          <div style="height: 200px; background: #23133D; display:flex; align-items:center; justify-content:center; font-size:70px;">👟</div>
          <div style="padding: 20px;">
            <div style="font-size: 22px; font-weight:800; margin-bottom: 6px;">Tênis Carbon Plated</div>
            <div style="font-size: 17px; color:#B3A5D4; margin-bottom: 14px;">Alta resposta e amortecimento</div>
            <div style="display:flex; justify-content:space-between; align-items:baseline;">
              <span style="font-size: 26px; font-weight:900; color:#C8F135;">899 nfs</span>
              <span style="font-size: 17px; color:#A799C7; text-decoration:line-through;">R$ 899</span>
            </div>
          </div>
        </div>
        
        <div style="background: #180D2B; border: 2px solid rgba(107, 42, 217, 0.4); border-radius: 28px; overflow:hidden;">
          <div style="height: 200px; background: #23133D; display:flex; align-items:center; justify-content:center; font-size:70px;">⚡</div>
          <div style="padding: 20px;">
            <div style="font-size: 22px; font-weight:800; margin-bottom: 6px;">Palatinose Pura 1kg</div>
            <div style="font-size: 17px; color:#B3A5D4; margin-bottom: 14px;">Liberação gradual de energia</div>
            <div style="display:flex; justify-content:space-between; align-items:baseline;">
              <span style="font-size: 26px; font-weight:900; color:#C8F135;">140 nfs</span>
              <span style="font-size: 17px; color:#A799C7; text-decoration:line-through;">R$ 140</span>
            </div>
          </div>
        </div>
      </div>
      
      <div style="margin: 10px 35px; background: linear-gradient(90deg, #35106E, #6B2AD9); border-radius: 24px; padding: 24px; display:flex; justify-content:space-between; align-items:center; border: 2px solid #C8F135;">
        <div>
          <div style="font-size: 24px; font-weight:800; color:#FFFFFF;">Clube Netfits VIP</div>
          <div style="font-size: 18px; color:#C8F135; margin-top:4px;">Ganhe 20% mais pontos no Shop</div>
        </div>
        <div style="background:#C8F135; color:#0A0314; font-weight:900; font-size:19px; padding:10px 24px; border-radius:999px;">
          Assinar
        </div>
      </div>
    `
  }
];

screens.forEach((screen, index) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>${screen.badge}</title>
      <style>${baseCss}</style>
    </head>
    <body>
      <div class="brand-header">
        <div class="brand-badge">
          <span>${screen.badge}</span>
        </div>
        <div class="bipartite-bar">
          <div class="purple"></div>
          <div class="lime"></div>
        </div>
        <h1 class="headline">${screen.headline}</h1>
        <p class="subheadline">${screen.subheadline}</p>
      </div>
      
      <div class="phone-frame">
        <div class="dynamic-island"></div>
        <div class="phone-content">
          ${screen.contentHtml}
        </div>
      </div>
    </body>
    </html>
  `;

  const tempHtmlPath = path.resolve(`temp_di_screen_${index}.html`);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  // Format 1: 1179 x 2556 px (iPhone Dynamic Island tela média standard)
  const out1179OneDrive = path.join(outputDirOneDrive, `${screen.filename}_dynamic_island_media_1179x2556.png`);
  const cmd1179 = `"${chromePath}" --headless --disable-gpu --screenshot="${out1179OneDrive}" --window-size=1179,2556 --hide-scrollbars "file:///${tempHtmlPath.replace(/\\\\/g, '/')}"`;
  console.log(`Generating Dynamic Island Media ${index + 1}/4 (1179x2556)...`);
  execSync(cmd1179);

  // Format 2: 1206 x 2622 px (iPhone 16 Pro Dynamic Island tela média)
  const out1206OneDrive = path.join(outputDirOneDrive, `${screen.filename}_dynamic_island_media_1206x2622.png`);
  const cmd1206 = `"${chromePath}" --headless --disable-gpu --screenshot="${out1206OneDrive}" --window-size=1206,2622 --hide-scrollbars "file:///${tempHtmlPath.replace(/\\\\/g, '/')}"`;
  execSync(cmd1206);

  fs.unlinkSync(tempHtmlPath);
});

console.log('✅ All Dynamic Island (tela média) screenshots generated successfully in 1179x2556 and 1206x2622!');
