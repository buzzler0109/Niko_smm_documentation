import { t, setLang, getLang } from './i18n.js';

// ============ ICONS (inline SVG) ============
const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m2 12 8.58 3.91a2 2 0 0 0 1.66 0L21 12"/><path d="m2 17 8.58 3.91a2 2 0 0 0 1.66 0L21 17"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
};

// ============ ROUTER ============
const routes = ['home','db-overview','brands','pipeline','content-plan','designer','logs','links','timings'];

function getRoute() {
  return window.location.hash.replace('#','') || 'home';
}

function navigate(route) {
  window.location.hash = route;
}

// ============ SIDEBAR ============
function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const route = getRoute();
  sidebar.innerHTML = `
    <div class="sidebar-header">
      <a class="sidebar-logo" href="#home">
        <div class="sidebar-logo-icon">⚡</div>
        <div class="sidebar-logo-text">
          <div class="sidebar-logo-title">${t('sidebarTitle')}</div>
          <div class="sidebar-logo-subtitle">${t('sidebarSubtitle')}</div>
        </div>
      </a>
    </div>
    <div class="lang-switcher">
      <button class="lang-btn ${getLang()==='ru'?'active':''}" data-lang="ru">RU</button>
      <button class="lang-btn ${getLang()==='ua'?'active':''}" data-lang="ua">UA</button>
      <button class="lang-btn ${getLang()==='en'?'active':''}" data-lang="en">EN</button>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-title">${t('navSectionMain')}</div>
      <a class="nav-item ${route==='home'?'active':''}" href="#home">
        <span class="nav-icon">${icons.home}</span>${t('navHome')}
      </a>
      <a class="nav-item ${route==='db-overview'?'active':''}" href="#db-overview">
        <span class="nav-icon">${icons.database}</span>${t('navDbOverview')}
      </a>
      <div class="nav-section-title">${t('navSectionTables')}</div>
      <a class="nav-item ${route==='brands'?'active':''}" href="#brands">
        <span class="nav-icon">${icons.tag}</span>${t('navBrands')}
      </a>
      <a class="nav-item ${route==='pipeline'?'active':''}" href="#pipeline">
        <span class="nav-icon">${icons.layers}</span>${t('navPipeline')}
      </a>
      <a class="nav-item ${route==='content-plan'?'active':''}" href="#content-plan">
        <span class="nav-icon">${icons.calendar}</span>${t('navContentPlan')}
      </a>
      <a class="nav-item ${route==='designer'?'active':''}" href="#designer">
        <span class="nav-icon">${icons.palette}</span>${t('navDesigner')}
      </a>
      <a class="nav-item ${route==='logs'?'active':''}" href="#logs">
        <span class="nav-icon">${icons.terminal}</span>${t('navLogs')}
      </a>
      <div class="nav-section-title">${t('navSectionExtra')}</div>
      <a class="nav-item ${route==='links'?'active':''}" href="#links">
        <span class="nav-icon">${icons.link}</span>${t('navLinks')}
      </a>
      <a class="nav-item ${route==='timings'?'active':''}" href="#timings">
        <span class="nav-icon">${icons.clock}</span>${t('navTimings')}
      </a>
    </nav>
  `;

  // Language switch
  sidebar.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      renderAll();
    });
  });

  // Close mobile sidebar on nav click
  sidebar.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      sidebar.classList.remove('open');
      document.getElementById('mobile-overlay').classList.remove('active');
    });
  });
}

// ============ MOBILE TOGGLE ============
function setupMobile() {
  let toggle = document.querySelector('.sidebar-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.className = 'sidebar-toggle';
    toggle.innerHTML = icons.menu;
    document.body.appendChild(toggle);
  }
  toggle.onclick = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    document.getElementById('mobile-overlay').classList.toggle('active');
  };
  document.getElementById('mobile-overlay').onclick = () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('mobile-overlay').classList.remove('active');
  };
}

// ============ PAGE RENDERERS ============

function renderHome() {
  return `
    <h1>${t('homeTitle')}</h1>
    <p class="page-subtitle">${t('homeSubtitle')}</p>

    <h2><span class="section-icon">💡</span> ${t('homeWhatIs')}</h2>
    <p>${t('homeWhatIsDesc')}</p>

    <h2><span class="section-icon">🏗️</span> ${t('homeArch')}</h2>
    <div class="arch-diagram">
      <div class="arch-node baserow">📊 Baserow</div>
      <span class="arch-arrow">→</span>
      <div class="arch-node webhook">🔗 Webhooks</div>
      <span class="arch-arrow">→</span>
      <div class="arch-node n8n">⚙️ n8n</div>
      <span class="arch-arrow">→</span>
      <div class="arch-node ai">🤖 Gemini AI</div>
      <span class="arch-arrow">→</span>
      <div class="arch-node social">📱 Social Media</div>
    </div>

    <h2><span class="section-icon">📚</span> ${t('homeCards')}</h2>
    <div class="card-grid">
      <a class="card-link" href="#brands"><div class="card"><div class="card-icon blue">🏢</div><div class="card-title">${t('homeCardBrandsTitle')}</div><div class="card-desc">${t('homeCardBrandsDesc')}</div></div></a>
      <a class="card-link" href="#pipeline"><div class="card"><div class="card-icon green">📝</div><div class="card-title">${t('homeCardPipelineTitle')}</div><div class="card-desc">${t('homeCardPipelineDesc')}</div></div></a>
      <a class="card-link" href="#content-plan"><div class="card"><div class="card-icon amber">📅</div><div class="card-title">${t('homeCardPlanTitle')}</div><div class="card-desc">${t('homeCardPlanDesc')}</div></div></a>
      <a class="card-link" href="#designer"><div class="card"><div class="card-icon violet">🎨</div><div class="card-title">${t('homeCardDesignerTitle')}</div><div class="card-desc">${t('homeCardDesignerDesc')}</div></div></a>
      <a class="card-link" href="#logs"><div class="card"><div class="card-icon rose">📋</div><div class="card-title">${t('homeCardLogsTitle')}</div><div class="card-desc">${t('homeCardLogsDesc')}</div></div></a>
      <a class="card-link" href="#timings"><div class="card"><div class="card-icon blue">⏱</div><div class="card-title">${t('homeCardTimingsTitle')}</div><div class="card-desc">${t('homeCardTimingsDesc')}</div></div></a>
    </div>

    <h2><span class="section-icon">⏱</span> ${t('homeTimingsTitle')}</h2>
    <div class="timing-grid">
      <div class="timing-card"><div class="timing-value">${t('timing1Value')}</div><div class="timing-label">${t('timing1Label').replace(/\n/g,'<br>')}</div></div>
      <div class="timing-card"><div class="timing-value">${t('timing2Value')}</div><div class="timing-label">${t('timing2Label').replace(/\n/g,'<br>')}</div></div>
      <div class="timing-card"><div class="timing-value">${t('timing3Value')}</div><div class="timing-label">${t('timing3Label').replace(/\n/g,'<br>')}</div></div>
      <div class="timing-card"><div class="timing-value">${t('timing4Value')}</div><div class="timing-label">${t('timing4Label').replace(/\n/g,'<br>')}</div></div>
    </div>
  `;
}

function renderDbOverview() {
  return `
    <h1>${t('dbTitle')}</h1>
    <p class="page-subtitle">${t('dbSubtitle')}</p>

    <div class="callout info"><span class="callout-icon">🔗</span><div><a class="link" href="https://baserow.io/public/grid/6mmBpPUCP5r8VS8F4gwuFZ1gedY8wgViup0n1uOBqEw" target="_blank" rel="noopener">${t('dbScreenshot')} — Baserow</a></div></div>

    <div class="table-wrapper">
      <table>
        <thead><tr><th>${t('dbTableName')}</th><th>${t('dbTablePurpose')}</th></tr></thead>
        <tbody>
          <tr><td><strong>Brands</strong></td><td>${t('dbBrandsDesc')}</td></tr>
          <tr><td><strong>Content Pipeline</strong></td><td>${t('dbPipelineDesc')}</td></tr>
          <tr><td><strong>4 Week Niche Content Plan</strong></td><td>${t('dbPlanDesc')}</td></tr>
          <tr><td><strong>Brands Designer Guideline</strong></td><td>${t('dbDesignerDesc')}</td></tr>
          <tr><td><strong>System_Logs</strong></td><td>${t('dbLogsDesc')}</td></tr>
        </tbody>
      </table>
    </div>

    <h2><span class="section-icon">🔗</span> ${t('dbRelations')}</h2>
    <div class="arch-diagram">
      <div class="arch-node baserow">Brands</div>
      <span class="arch-arrow">↔</span>
      <div class="arch-node n8n">Content Pipeline</div>
      <span class="arch-arrow">←</span>
      <div class="arch-node webhook">4 Week Plan</div>
    </div>
    <div class="arch-diagram" style="margin-top:12px">
      <div class="arch-node baserow">Brands</div>
      <span class="arch-arrow">↔</span>
      <div class="arch-node ai">Designer Guideline</div>
    </div>
  `;
}

function renderBrands() {
  return `
    <h1>${t('brandsTitle')}</h1>
    <p class="page-subtitle">${t('brandsSubtitle')}</p>

    <h2><span class="section-icon">📋</span> ${t('brandsFieldsTitle')}</h2>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>${t('fieldName')}</th><th>${t('fieldDesc')}</th></tr></thead>
        <tbody>
          <tr><td><strong>Name</strong></td><td>${getLang()==='en'?'Brand name':'Наименование бренда'}</td></tr>
          <tr><td><strong>Niche</strong></td><td>${getLang()==='en'?'Brand niche (Gaming, FinTech, AI, etc.)':'Ниша бренда (Gaming, FinTech, AI и др.)'}</td></tr>
          <tr><td><strong>Owner</strong></td><td>${getLang()==='en'?'Person responsible for the brand':'Ответственный за бренд'}</td></tr>
          <tr><td><strong>Brand summary</strong></td><td>${getLang()==='en'?'Brief brand description':'Краткое описание бренда'}</td></tr>
          <tr><td><strong>Website / Social URLs</strong></td><td>${getLang()==='en'?'Links to website, Instagram, Facebook, LinkedIn, etc.':'Ссылки на сайт, Instagram, Facebook, LinkedIn и др.'}</td></tr>
          <tr><td><strong>Raw Strategy</strong></td><td>${getLang()==='en'?'Brand SMM strategy':'Исходная SMM-стратегия бренда'}</td></tr>
          <tr><td><strong>Sample Image 1-5</strong></td><td>${getLang()==='en'?'Google Drive links to brand sample images':'Ссылки Google Drive на образцы изображений бренда'}</td></tr>
          <tr><td><strong>Headline / Subheadline Font</strong></td><td>${getLang()==='en'?'Brand fonts for text overlay':'Шрифты бренда для наложения текста'}</td></tr>
          <tr><td><strong>Headline / Subheadline Color</strong></td><td>${getLang()==='en'?'HEX colors for text overlay':'HEX-цвета для наложения текста'}</td></tr>
          <tr><td><strong>Topic Agent System Prompt</strong></td><td>${getLang()==='en'?'System prompt for AI topic generation':'Системный промпт для AI-генерации тем'}</td></tr>
        </tbody>
      </table>
    </div>

    <h2><span class="section-icon">🧬</span> ${t('brandsVisualDnaTitle')}</h2>
    <p>${t('brandsVisualDnaDesc')}</p>

    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('brandsStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep5')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep6')}</span></div></div>
    </div>

    <div class="callout info"><span class="callout-icon">🖼️</span><div>${t('brandsScreenshot')}</div></div>
  `;
}

function renderPipeline() {
  return `
    <h1>${t('pipelineTitle')}</h1>
    <p class="page-subtitle">${t('pipelineSubtitle')}</p>

    <div class="callout info"><span class="callout-icon">🔗</span><div><a class="link" href="https://baserow.io/public/grid/xifuSgwO0Dtlz9BMuZa94R7pY6VPyN8Cb9m2BaHoXos" target="_blank" rel="noopener">Content Pipeline — Baserow</a></div></div>

    <h2><span class="section-icon">👁️</span> ${t('pipelineOverview')}</h2>
    <p>${t('pipelineOverviewDesc')}</p>
    <h3>${t('pipelineViews')}</h3>
    <div class="card">
      <p>📊 <strong>Content Hub</strong> — ${t('pipelineViewHub')}</p>
      <p>📰 <strong>News</strong> — ${t('pipelineViewNews')}</p>
      <p>🗄️ <strong>Archive</strong> — ${t('pipelineViewArchive')}</p>
      <p>📅 <strong>Calendar</strong> — ${t('pipelineViewCalendar')}</p>
    </div>

    <div class="divider"></div>

    <h2><span class="section-icon">📅</span> ${t('planGenTitle')}</h2>
    <p>${t('planGenDesc')}</p>
    <div class="timing-grid" style="margin-bottom:20px">
      <div class="timing-card"><div class="timing-value">${t('timing1Value')}</div><div class="timing-label">${t('timeApprox')}</div></div>
    </div>
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('planGenStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep5')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep6')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep7')}</span></div></div>
    </div>

    <div class="divider"></div>

    <h2><span class="section-icon">🎯</span> ${t('funnelTitle')}</h2>
    <p>${t('funnelDesc')}</p>
    <div class="card">
      <p><span class="tag blue">SEE</span> ${t('funnelSEE')}</p>
      <p><span class="tag amber">THINK</span> ${t('funnelTHINK')}</p>
      <p><span class="tag green">DO</span> ${t('funnelDO')}</p>
      <p><span class="tag rose">CARE</span> ${t('funnelCARE')}</p>
    </div>

    <h2><span class="section-icon">📐</span> ${t('contentTypeTitle')}</h2>
    <p>${t('contentTypeDesc')}</p>
    <p>${t('contentTypes').split(', ').map(ct => `<span class="tag violet">${ct}</span>`).join(' ')}</p>

    <h2><span class="section-icon">📱</span> ${t('platformTitle')}</h2>
    <p>${t('platformDesc')}</p>
    <p>${t('platforms').split(', ').map(p => `<span class="tag blue">${p}</span>`).join(' ')}</p>

    <div class="divider"></div>

    <h2><span class="section-icon">📰</span> ${t('newsTitle')}</h2>
    <p>${t('newsDesc')}</p>
    <div class="card">
      <p>🕘 ${t('newsFeature1')}</p>
      <p>🔍 ${t('newsFeature2')}</p>
      <p>💡 ${t('newsFeature3')}</p>
      <p>🏷️ ${t('newsFeature4')}</p>
      <p>📌 ${t('newsFeature5')}</p>
    </div>
    <div class="callout success"><span class="callout-icon">⭐</span><div>${t('newsImportance')}</div></div>

    <div class="divider"></div>

    <h2><span class="section-icon">✍️</span> ${t('textGenTitle')}</h2>
    <p>${t('textGenDesc')}</p>
    <div class="timing-grid" style="margin-bottom:20px">
      <div class="timing-card"><div class="timing-value">${t('timing2Value')}</div><div class="timing-label">${t('timeApprox')}</div></div>
    </div>
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('textGenStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('textGenStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('textGenStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('textGenStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('textGenStep5')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('textGenStep6')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('textGenStep7')}</span></div></div>
    </div>

    <div class="divider"></div>

    <h2><span class="section-icon">🖼️</span> ${t('imgGenTitle')}</h2>
    <p>${t('imgGenDesc')}</p>
    <div class="timing-grid" style="margin-bottom:20px">
      <div class="timing-card"><div class="timing-value">${t('timing3Value')}</div><div class="timing-label">${t('timeApprox')}</div></div>
    </div>
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('imgGenStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('imgGenStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep5')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep6')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep7')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep8')}</span></div></div>
    </div>
    <div class="callout info"><span class="callout-icon">💡</span><div>${t('imgGenNote')}</div></div>

    <div class="divider"></div>

    <h2><span class="section-icon">🎨</span> ${t('textEditTitle')}</h2>
    <p>${t('textEditDesc')}</p>
    <div class="card">
      <p><strong>${t('textEditCapabilities')}</strong></p>
      <p>📏 ${t('textEditCap1')}</p>
      <p>✂️ ${t('textEditCap2')}</p>
      <p>↕️ ${t('textEditCap3')}</p>
      <p>🔤 ${t('textEditCap4')}</p>
      <p>↩️ ${t('textEditCap5')}</p>
    </div>
    <p>${t('textEditHow')}</p>

    <div class="divider"></div>

    <h2><span class="section-icon">✅</span> ${t('selectedTitle')}</h2>
    <p>${t('selectedDesc')}</p>

    <div class="divider"></div>

    <h2><span class="section-icon">🚀</span> ${t('publishTitle')}</h2>
    <p>${t('publishDesc')}</p>
    <div class="timing-grid" style="margin-bottom:20px">
      <div class="timing-card"><div class="timing-value">${t('timing4Value')}</div><div class="timing-label">${t('timeApprox')}</div></div>
    </div>
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('publishStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('publishStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('publishStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('publishStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('publishStep5')}</span></div></div>
    </div>
    <div class="callout danger"><span class="callout-icon">⚠️</span><div><strong>${t('publishWarning')}</strong></div></div>

    <div class="divider"></div>

    <h2><span class="section-icon">🗄️</span> ${t('archiveTitle')}</h2>
    <p>${t('archiveDesc')}</p>

    <div class="divider"></div>

    <h2><span class="section-icon">🎬</span> ${t('tangoTitle')}</h2>
    <p>${t('tangoDesc')}</p>
    <div class="iframe-wrapper">
      <iframe src="https://app.tango.us/app/embed/ad4d8f38-cd41-487a-ba04-7e0d54fc91dd" sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin" title="Content Pipeline Tutorial" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
    </div>
  `;
}

function renderContentPlan() {
  return `
    <h1>${t('contentPlanTitle')}</h1>
    <p class="page-subtitle">${t('contentPlanSubtitle')}</p>

    <h2><span class="section-icon">📋</span> ${t('brandsFieldsTitle')}</h2>
    <div class="card">
      <div class="field-list">
        <div class="field-item"><span class="field-name">Niche</span><span class="field-desc">${t('contentPlanFieldNiche')}</span></div>
        <div class="field-item"><span class="field-name">Action</span><span class="field-desc">${t('contentPlanFieldAction')}</span></div>
        <div class="field-item"><span class="field-name">Last generation</span><span class="field-desc">${t('contentPlanFieldLast')}</span></div>
        <div class="field-item"><span class="field-name">Status</span><span class="field-desc">${t('contentPlanFieldStatus')}</span></div>
      </div>
    </div>

    <h2><span class="section-icon">🚀</span> ${t('contentPlanHow')}</h2>
    <p>${t('contentPlanHowDesc')}</p>

    <div class="status-flow">
      <span class="status-badge" style="background:var(--accent-amber-dim);border-color:rgba(245,158,11,0.3);color:#fcd34d;">Action: —</span>
      <span class="status-arrow">→</span>
      <span class="status-badge" style="background:var(--accent-dim);border-color:rgba(16,185,129,0.3);color:var(--accent-light);">Action: Generate</span>
      <span class="status-arrow">→</span>
      <span class="status-badge" style="background:var(--accent-blue-dim);border-color:rgba(6,182,212,0.3);color:#67e8f9;">Status: done</span>
    </div>

    <div class="timing-grid" style="margin-top:24px">
      <div class="timing-card"><div class="timing-value">${t('timing1Value')}</div><div class="timing-label">${t('timeApprox')}</div></div>
    </div>
  `;
}

function renderDesigner() {
  return `
    <h1>${t('designerTitle')}</h1>
    <p class="page-subtitle">${t('designerSubtitle')}</p>

    <h2><span class="section-icon">📋</span> ${t('brandsFieldsTitle')}</h2>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>${t('fieldName')}</th><th>${t('fieldDesc')}</th></tr></thead>
        <tbody>
          <tr><td><strong>Name</strong></td><td>${getLang()==='en'?'Linked brand':'Связанный бренд'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Designer':'Дизайнер'}</strong></td><td>${getLang()==='en'?'Responsible designer':'Ответственный дизайнер'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Horizontal / Vertical Logo':'Горизонтальный / Вертикальный логотип'}</strong></td><td>${getLang()==='en'?'Logo versions':'Версии логотипа'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Monogram':'Знак/Монограмма'}</strong></td><td>${getLang()==='en'?'Brand monogram':'Монограмма бренда'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Color Versions':'Цветовые версии логотипа'}</strong></td><td>${getLang()==='en'?'Logos in different colors':'Логотипы в разных цветах'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Logo Usage Rules':'Правила использования логотипа'}</strong></td><td>${getLang()==='en'?'Safe zones and restrictions':'Охранная зона и ограничения'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Primary Color':'Основной цвет'}</strong></td><td>${getLang()==='en'?'Main brand color':'Основной фирменный цвет'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Additional Colors':'Дополнительные цвета'}</strong></td><td>${getLang()==='en'?'Secondary and accent colors':'Дополнительные и акцентные цвета'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Font Files':'Файлы шрифтов'}</strong></td><td>${getLang()==='en'?'Brand font files (.ttf/.otf)':'Файлы шрифтов бренда (.ttf/.otf)'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Font Hierarchy':'Иерархия шрифтов'}</strong></td><td>${getLang()==='en'?'Typography structure (H1, H2, Body)':'Структура типографики (H1, H2, Body)'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Generation Templates 1-5':'Шаблоны для генерации 1-5'}</strong></td><td>${getLang()==='en'?'Templates for image generation':'Шаблоны для генерации изображений'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Photo Style Moodboard':'Мудборд фотостиля'}</strong></td><td>${getLang()==='en'?'Photo style examples':'Примеры фотостиля'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Brand Character':'Характер бренда'}</strong></td><td>${getLang()==='en'?'Brief character description':'Краткое описание характера'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Strict Don\'ts':'Строгие запреты'}</strong></td><td>${getLang()==='en'?'What must not be used':'Что нельзя использовать'}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderLogs() {
  return `
    <h1>${t('logsTitle')}</h1>
    <p class="page-subtitle">${t('logsSubtitle')}</p>

    <h2><span class="section-icon">📋</span> ${t('brandsFieldsTitle')}</h2>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>${t('fieldName')}</th><th>${t('fieldDesc')}</th></tr></thead>
        <tbody>
          <tr><td><strong>Date/time</strong></td><td>${getLang()==='en'?'Event timestamp':'Время события'}</td></tr>
          <tr><td><strong>Workflow_Name</strong></td><td>${getLang()==='en'?'Name of the automation/workflow':'Название автоматизации'}</td></tr>
          <tr><td><strong>Node_Name</strong></td><td>${getLang()==='en'?'Node where the event occurred':'Узел, где произошло событие'}</td></tr>
          <tr><td><strong>Error_Message</strong></td><td>${getLang()==='en'?'Error text (if any)':'Текст ошибки (если есть)'}</td></tr>
          <tr><td><strong>Payload</strong></td><td>${getLang()==='en'?'Data passed to the node':'Данные, переданные в узел'}</td></tr>
          <tr><td><strong>Execution_url</strong></td><td>${getLang()==='en'?'Link to detailed execution log':'Ссылка на подробный лог выполнения'}</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout info"><span class="callout-icon">🔗</span><div><a class="link" href="https://baserow.io/public/grid/-iI8DGArwy4NaZe57clvFnddDDWAPp1gFNXC_bjFMjY" target="_blank" rel="noopener">${t('logsScreenshot')} — Baserow</a></div></div>
  `;
}

function renderLinks() {
  const linksData = [
    { name: 'Brands', url: 'https://baserow.io/public/grid/6mmBpPUCP5r8VS8F4gwuFZ1gedY8wgViup0n1uOBqEw' },
    { name: "Designer's Form", url: 'https://baserow.io/form/AJftH67N-XmL-TTJC4TcBxuRYTLOrxOzbgEBhxAgGdE' },
    { name: '4 Week Content Plan', url: 'https://baserow.io/public/grid/9gYvmBj5fIZLPMsi-f2SEFZH-zyYM_va2VSuWcU25oo' },
    { name: 'System Logs', url: 'https://baserow.io/public/grid/-iI8DGArwy4NaZe57clvFnddDDWAPp1gFNXC_bjFMjY' },
    { name: 'Content Pipeline — Content Hub', url: 'https://baserow.io/public/grid/xifuSgwO0Dtlz9BMuZa94R7pY6VPyN8Cb9m2BaHoXos' },
    { name: 'Content Pipeline — News', url: 'https://baserow.io/public/grid/51N8QEcfXSbwYb37E71VJm9Xdj1X71bYF7SjrLrnOsQ' },
    { name: 'Content Pipeline — Archive', url: 'https://baserow.io/public/grid/OJzJ6JV66TVuFXcbMcuPTsx9NCiioU9AbzAwVPp5IiE' },
    { name: 'Content Pipeline — Calendar', url: 'https://baserow.io/public/calendar/5iCuXG2b5W8NEaX5uE1EzkghjR5mD9343xCN_cqb93E' },
  ];

  return `
    <h1>${t('linksTitle')}</h1>
    <p class="page-subtitle">${t('linksSubtitle')}</p>
    <div class="card-grid">
      ${linksData.map(l => `
        <a class="card-link" href="${l.url}" target="_blank" rel="noopener">
          <div class="card">
            <div class="card-icon blue">🔗</div>
            <div class="card-title">${l.name}</div>
            <div class="card-desc">baserow.io</div>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

function renderTimings() {
  return `
    <h1>${t('timingsTitle')}</h1>
    <p class="page-subtitle">${t('timingsSubtitle')}</p>

    <div class="timing-grid">
      <div class="timing-card"><div class="timing-value">${t('timing1Value')}</div><div class="timing-label">${t('timing1Label').replace(/\n/g,'<br>')}</div></div>
      <div class="timing-card"><div class="timing-value">${t('timing2Value')}</div><div class="timing-label">${t('timing2Label').replace(/\n/g,'<br>')}</div></div>
      <div class="timing-card"><div class="timing-value">${t('timing3Value')}</div><div class="timing-label">${t('timing3Label').replace(/\n/g,'<br>')}</div></div>
      <div class="timing-card"><div class="timing-value">${t('timing4Value')}</div><div class="timing-label">${t('timing4Label').replace(/\n/g,'<br>')}</div></div>
    </div>

    <h2><span class="section-icon">📋</span> ${getLang()==='en'?'Detailed Breakdown':'Подробная таблица'}</h2>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>${getLang()==='en'?'Automation':'Автоматизация'}</th><th>${getLang()==='en'?'Trigger':'Триггер'}</th><th>${t('timeApprox')}</th></tr></thead>
        <tbody>
          <tr><td><strong>${getLang()==='en'?'Content Plan Generation':'Генерация контент-плана'}</strong></td><td>Action → Generate</td><td>~10 ${getLang()==='en'?'min':'мин'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Text Generation':'Генерация текста'}</strong></td><td>Status → Approved</td><td>20-30 ${getLang()==='en'?'sec':'сек'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Image Generation':'Генерация изображений'}</strong></td><td>Image Status → Generate</td><td>~4 ${getLang()==='en'?'min':'мин'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Auto-posting':'Автопостинг'}</strong></td><td>Status=Draft + Schedule=Waiting</td><td>15-30 ${getLang()==='en'?'sec':'сек'}</td></tr>
          <tr><td><strong>Visual DNA ${getLang()==='en'?'Analysis':'Анализ'}</strong></td><td>${getLang()==='en'?'Sample Image added':'Добавление Sample Image'}</td><td>~1 ${getLang()==='en'?'min':'мин'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Text Editing':'Редактирование текста'}</strong></td><td>Text Edit Agent</td><td>10-30 ${getLang()==='en'?'sec':'сек'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'News Agent':'Новостной агент'}</strong></td><td>${getLang()==='en'?'Mon & Thu 09:00':'Пн и Чт 09:00'}</td><td>~5-10 ${getLang()==='en'?'min':'мин'}</td></tr>
          <tr><td><strong>${getLang()==='en'?'Archiving':'Архивация'}</strong></td><td>${getLang()==='en'?'Monday 12:00':'Понедельник 12:00'}</td><td>~30 ${getLang()==='en'?'sec':'сек'}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

// ============ RENDER ENGINE ============
const pageRenderers = {
  'home': renderHome,
  'db-overview': renderDbOverview,
  'brands': renderBrands,
  'pipeline': renderPipeline,
  'content-plan': renderContentPlan,
  'designer': renderDesigner,
  'logs': renderLogs,
  'links': renderLinks,
  'timings': renderTimings,
};

function renderPage() {
  const route = getRoute();
  const renderer = pageRenderers[route] || renderHome;
  const content = document.getElementById('page-content');
  content.innerHTML = renderer();
  window.scrollTo(0, 0);
}

function renderAll() {
  renderSidebar();
  renderPage();
}

// ============ INIT ============
window.addEventListener('hashchange', renderAll);
window.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setupMobile();
});
