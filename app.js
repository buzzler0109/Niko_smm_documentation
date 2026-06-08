import { t, setLang, getLang } from './i18n.js';

// ---- ICONS (SVG replacements for emojis) ----
const icons = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  db: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>`,
  brands: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
  pipeline: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  plan: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  designer: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
  logs: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  links: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  timings: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  linkExternal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  image: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
};

const navigation = [
  { id: 'home', icon: icons.home, labelKey: 'navHome', section: 'navSectionMain' },
  { id: 'db-overview', icon: icons.db, labelKey: 'navDbOverview', section: 'navSectionMain' },
  { id: 'brands', icon: icons.brands, labelKey: 'navBrands', section: 'navSectionTables' },
  { id: 'pipeline', icon: icons.pipeline, labelKey: 'navPipeline', section: 'navSectionTables' },
  { id: 'content-plan', icon: icons.plan, labelKey: 'navContentPlan', section: 'navSectionTables' },
  { id: 'designer', icon: icons.designer, labelKey: 'navDesigner', section: 'navSectionTables' },
  { id: 'logs', icon: icons.logs, labelKey: 'navLogs', section: 'navSectionTables' },
  { id: 'links', icon: icons.links, labelKey: 'navLinks', section: 'navSectionExtra' },
  { id: 'timings', icon: icons.timings, labelKey: 'navTimings', section: 'navSectionExtra' },
];

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  
  let html = `
    <div class="sidebar-header">
      <a href="#" class="sidebar-logo" onclick="navigate('home')">
        <div class="sidebar-logo-icon">${icons.pipeline}</div>
        <div class="sidebar-logo-text">
          <span class="sidebar-logo-title">${t('sidebarTitle')}</span>
          <span class="sidebar-logo-subtitle">${t('sidebarSubtitle')}</span>
        </div>
      </a>
    </div>
    <div class="lang-switcher">
      <button class="lang-btn ${getLang() === 'ru' ? 'active' : ''}" onclick="changeLang('ru')">RU</button>
      <button class="lang-btn ${getLang() === 'ua' ? 'active' : ''}" onclick="changeLang('ua')">UA</button>
      <button class="lang-btn ${getLang() === 'en' ? 'active' : ''}" onclick="changeLang('en')">EN</button>
    </div>
    <nav class="sidebar-nav">
  `;

  let currentSection = '';
  navigation.forEach(item => {
    if (item.section !== currentSection) {
      html += `<div class="nav-section-title">${t(item.section)}</div>`;
      currentSection = item.section;
    }
    html += `
      <a href="#${item.id}" class="nav-item" data-route="${item.id}">
        <span class="nav-icon">${item.icon}</span>
        ${t(item.labelKey)}
      </a>
    `;
  });

  html += `</nav>`;
  sidebar.innerHTML = html;
  
  if (!document.getElementById('mobile-toggle')) {
    const btn = document.createElement('button');
    btn.id = 'mobile-toggle';
    btn.className = 'sidebar-toggle';
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    btn.onclick = toggleSidebar;
    document.body.appendChild(btn);
  }
}

function updateActiveNav(routeId) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.route === routeId);
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

window.changeLang = (lang) => {
  setLang(lang);
  renderSidebar();
  handleRoute();
};

document.getElementById('mobile-overlay').addEventListener('click', toggleSidebar);

// ---- PAGE RENDERING ----

function renderHome() {
  return `
    <h1>${t('homeTitle')}</h1>
    <p class="page-subtitle">${t('homeSubtitle')}</p>

    <h2>${t('homeWhatIs')}</h2>
    <p>${t('homeWhatIsDesc')}</p>

    <h2>${t('homeArch')}</h2>
    <div class="arch-diagram">
      <div class="arch-node">Baserow</div>
      <div class="arch-arrow">→</div>
      <div class="arch-node">Webhooks</div>
      <div class="arch-arrow">→</div>
      <div class="arch-node">n8n</div>
      <div class="arch-arrow">→</div>
      <div class="arch-node">Gemini AI</div>
      <div class="arch-arrow">→</div>
      <div class="arch-node">Social Media</div>
    </div>

    <h2>${t('homeCards')}</h2>
    <div class="card-grid">
      <a href="#brands" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.brands}</div>
          <div class="card-title">${t('homeCardBrandsTitle')}</div>
          <div class="card-desc">${t('homeCardBrandsDesc')}</div>
        </div>
      </a>
      <a href="#pipeline" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.pipeline}</div>
          <div class="card-title">${t('homeCardPipelineTitle')}</div>
          <div class="card-desc">${t('homeCardPipelineDesc')}</div>
        </div>
      </a>
      <a href="#content-plan" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.plan}</div>
          <div class="card-title">${t('homeCardPlanTitle')}</div>
          <div class="card-desc">${t('homeCardPlanDesc')}</div>
        </div>
      </a>
      <a href="#designer" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.designer}</div>
          <div class="card-title">${t('homeCardDesignerTitle')}</div>
          <div class="card-desc">${t('homeCardDesignerDesc')}</div>
        </div>
      </a>
      <a href="#logs" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.logs}</div>
          <div class="card-title">${t('homeCardLogsTitle')}</div>
          <div class="card-desc">${t('homeCardLogsDesc')}</div>
        </div>
      </a>
      <a href="#timings" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.timings}</div>
          <div class="card-title">${t('homeCardTimingsTitle')}</div>
          <div class="card-desc">${t('homeCardTimingsDesc')}</div>
        </div>
      </a>
    </div>
  `;
}

function renderDbOverview() {
  return `
    <h1>${t('dbTitle')}</h1>
    <p class="page-subtitle">${t('dbSubtitle')}</p>

    <div class="screenshot"><img src="/data/database_tables.png" alt="Database Tables" loading="lazy"></div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>${t('dbTableName')}</th>
            <th>${t('dbTablePurpose')}</th>
            <th>${t('dbTableRecords')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Brands</strong></td>
            <td>${t('dbBrandsDesc')}</td>
            <td>—</td>
          </tr>
          <tr>
            <td><strong>Content Pipeline</strong></td>
            <td>${t('dbPipelineDesc')}</td>
            <td>→ Brands</td>
          </tr>
          <tr>
            <td><strong>4 Week Niche Content Plan</strong></td>
            <td>${t('dbPlanDesc')}</td>
            <td>—</td>
          </tr>
          <tr>
            <td><strong>Brand's Designer Guideline</strong></td>
            <td>${t('dbDesignerDesc')}</td>
            <td>→ Brands</td>
          </tr>
          <tr>
            <td><strong>System_Logs</strong></td>
            <td>${t('dbLogsDesc')}</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderBrands() {
  return `
    <h1>${t('brandsTitle')}</h1>
    <p class="page-subtitle">${t('brandsSubtitle')}</p>

    <div class="screenshot"><img src="/data/Brands.png" alt="Brands Table" loading="lazy"></div>

    <div class="callout info"><span class="callout-icon">${icons.linkExternal}</span><div><a class="link" href="https://baserow.io/public/grid/6mmBpPUCP5r8VS8F4gwuFZ1gedY8wgViup0n1uOBqEw" target="_blank" rel="noopener">Brands Table — Baserow</a></div></div>

    <h2>${t('brandsFieldsTitle')}</h2>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>${t('fieldName')}</th><th>${t('fieldDesc')}</th></tr></thead>
        <tbody>
          <tr><td><strong>Name</strong></td><td>Название бренда</td></tr>
          <tr><td><strong>Niche</strong></td><td>Индустрия / ниша</td></tr>
          <tr><td><strong>Brand summary</strong></td><td>Краткое описание деятельности</td></tr>
          <tr><td><strong>Website, Instagram...</strong></td><td>Ссылки на ресурсы бренда</td></tr>
          <tr><td><strong>Target Audience</strong></td><td>Описание целевой аудитории</td></tr>
          <tr><td><strong>Tone of voice</strong></td><td>Стиль общения (например, Friendly, Professional)</td></tr>
          <tr><td><strong>Content Pillars</strong></td><td>Основные рубрики контента</td></tr>
          <tr><td><strong>Value proposition</strong></td><td>Уникальное торговое предложение</td></tr>
        </tbody>
      </table>
    </div>

    <h2>${t('brandsVisualDnaTitle')}</h2>
    <p>${t('brandsVisualDnaDesc')}</p>
    
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('brandsStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep5')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('brandsStep6')}</span></div></div>
    </div>
  `;
}

function renderPipeline() {
  return `
    <h1>${t('pipelineTitle')}</h1>
    <p class="page-subtitle">${t('pipelineSubtitle')}</p>

    <h2>${t('pipelineOverview')}</h2>
    <p>${t('pipelineOverviewDesc')}</p>

    <div class="callout info"><span class="callout-icon">${icons.linkExternal}</span><div><a class="link" href="https://baserow.io/public/grid/xifuSgwO0Dtlz9BMuZa94R7pY6VPyN8Cb9m2BaHoXos" target="_blank" rel="noopener">Content Pipeline — Baserow</a></div></div>

    <div class="view-grid">
      <div class="view-card">
        <img src="/data/Content_pipeline_content_hub.png" alt="Content Hub" loading="lazy">
        <div class="view-card-body">
          <div class="view-card-title">${t('pipelineViewHubTitle')}</div>
          <div class="view-card-desc">${t('pipelineViewHub')}</div>
        </div>
      </div>
      <div class="view-card">
        <img src="/data/Content_pipeline_news.png" alt="News" loading="lazy">
        <div class="view-card-body">
          <div class="view-card-title">${t('pipelineViewNewsTitle')}</div>
          <div class="view-card-desc">${t('pipelineViewNews')}</div>
        </div>
      </div>
      <div class="view-card">
        <img src="/data/Content_pipeline_archive.png" alt="Archive" loading="lazy">
        <div class="view-card-body">
          <div class="view-card-title">${t('pipelineViewArchiveTitle')}</div>
          <div class="view-card-desc">${t('pipelineViewArchive')}</div>
        </div>
      </div>
      <div class="view-card">
        <img src="/data/Content_pipeline_calendar.png" alt="Calendar" loading="lazy">
        <div class="view-card-body">
          <div class="view-card-title">${t('pipelineViewCalendarTitle')}</div>
          <div class="view-card-desc">${t('pipelineViewCalendar')}</div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <h2>${t('pipelineFullWorkflow')}</h2>
    <p>${t('pipelineFullWorkflowDesc')}</p>

    <h3>${t('newsTitle')}</h3>
    <p>${t('newsDesc')}</p>
    <ul>
      <li>${t('newsFeature1')}</li>
      <li>${t('newsFeature2')}</li>
      <li>${t('newsFeature3')}</li>
      <li>${t('newsFeature4')}</li>
      <li>${t('newsFeature5')}</li>
    </ul>
    <div class="callout success"><span class="callout-icon">${icons.info}</span><div>${t('newsImportance')}</div></div>

    <h3>${t('textGenTitle')}</h3>
    <p>${t('textGenDesc')}</p>
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('textGenStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('textGenStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('textGenStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('textGenStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('textGenStep5')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('textGenStep6')}</span></div></div>
    </div>

    <h3>${t('imgGenTitle')}</h3>
    <p>${t('imgGenDesc')}</p>
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('imgGenStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('imgGenStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep5')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep6')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep7')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('imgGenStep8')}</span></div></div>
    </div>

    <h3>${t('publishTitle')}</h3>
    <p>${t('publishDesc')}</p>
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('publishStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('publishStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('publishStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('publishStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('publishStep5')}</span></div></div>
    </div>
    <div class="callout warning"><span class="callout-icon">${icons.info}</span><div>${t('publishWarning')}</div></div>

    <h2>${t('tangoTitle')}</h2>
    <p>${t('tangoDesc')}</p>
    <div class="iframe-wrapper">
      <iframe src="https://app.tango.us/app/embed/ad4d8f38-cd41-487a-ba04-7e0d54fc91dd?defaultListView=false&hideAuthorAndDetails=false&makeViewOnly=true&skipBranding=false&skipCover=false" style="min-height:640px" sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin" security="restricted" title="Publish Content in Baserow Hub" width="100%" height="100%" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen"></iframe>
    </div>
  `;
}

function renderContentPlan() {
  return `
    <h1>${t('contentPlanTitle')}</h1>
    <p class="page-subtitle">${t('contentPlanSubtitle')}</p>

    <div class="screenshot"><img src="/data/4_week_niche_content_plan.png" alt="Content Plan" loading="lazy"></div>

    <div class="callout info"><span class="callout-icon">${icons.linkExternal}</span><div><a class="link" href="https://baserow.io/public/grid/GjD32eR27iJk0B22uWbS0Qd47c4333b2T0n7u2b1XwI" target="_blank" rel="noopener">4 Week Niche Content Plan — Baserow</a></div></div>

    <h2>${t('contentPlanHow')}</h2>
    <p>${t('contentPlanHowDesc')}</p>

    <div class="table-wrapper">
      <table>
        <thead><tr><th>${t('fieldName')}</th><th>${t('fieldDesc')}</th></tr></thead>
        <tbody>
          <tr><td><strong>Niche</strong></td><td>${t('contentPlanFieldNiche')}</td></tr>
          <tr><td><strong>Action</strong></td><td>${t('contentPlanFieldAction')}</td></tr>
          <tr><td><strong>Last generation</strong></td><td>${t('contentPlanFieldLast')}</td></tr>
          <tr><td><strong>Status</strong></td><td>${t('contentPlanFieldStatus')}</td></tr>
        </tbody>
      </table>
    </div>

    <h2>${t('planGenTitle')}</h2>
    <div class="steps">
      <div class="step"><div class="step-header"><span class="step-badge manual">${t('manual')}</span><span class="step-title">${t('planGenStep1')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep2')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep3')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep4')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep5')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep6')}</span></div></div>
      <div class="step"><div class="step-header"><span class="step-badge auto">${t('auto')}</span><span class="step-title">${t('planGenStep7')}</span></div></div>
    </div>
  `;
}

function renderDesigner() {
  return `
    <h1>${t('designerTitle')}</h1>
    <p class="page-subtitle">${t('designerSubtitle')}</p>

    <div class="callout info"><span class="callout-icon">${icons.linkExternal}</span><div><a class="link" href="https://baserow.io/public/grid/TBPB22q4J40gI8aLh7T1N7E24H52XqY4Q2A3b900K8E" target="_blank" rel="noopener">Brand's Designer Guideline — Baserow</a></div></div>

    <div class="table-wrapper">
      <table>
        <thead><tr><th>${t('fieldName')}</th><th>${t('fieldDesc')}</th></tr></thead>
        <tbody>
          <tr><td><strong>Brand</strong></td><td>Привязка к бренду</td></tr>
          <tr><td><strong>Logo Dark / Light / File</strong></td><td>Логотипы бренда</td></tr>
          <tr><td><strong>Color Primary / Secondary...</strong></td><td>Фирменные цвета (HEX)</td></tr>
          <tr><td><strong>Typography H1 / Body</strong></td><td>Шрифты и их использование</td></tr>
          <tr><td><strong>Social Media Templates</strong></td><td>Шаблоны постов (Figma/Canva)</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderLogs() {
  return `
    <h1>${t('logsTitle')}</h1>
    <p class="page-subtitle">${t('logsSubtitle')}</p>

    <div class="callout info"><span class="callout-icon">${icons.linkExternal}</span><div><a class="link" href="https://baserow.io/public/grid/-iI8DGArwy4NaZe57clvFnddDDWAPp1gFNXC_bjFMjY" target="_blank" rel="noopener">${t('logsScreenshot')} — Baserow</a></div></div>

    <div class="table-wrapper">
      <table>
        <thead><tr><th>${t('fieldName')}</th><th>${t('fieldDesc')}</th></tr></thead>
        <tbody>
          <tr><td><strong>Timestamp</strong></td><td>Время события</td></tr>
          <tr><td><strong>Event</strong></td><td>Название события (например, Text Generation Error)</td></tr>
          <tr><td><strong>Status</strong></td><td>Успех / Ошибка</td></tr>
          <tr><td><strong>Error Details</strong></td><td>Полный текст ошибки из n8n</td></tr>
          <tr><td><strong>Related Brand</strong></td><td>Ссылка на бренд</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderLinks() {
  return `
    <h1>${t('linksTitle')}</h1>
    <p class="page-subtitle">${t('linksSubtitle')}</p>

    <div class="card-grid">
      <a href="https://baserow.io/public/grid/6mmBpPUCP5r8VS8F4gwuFZ1gedY8wgViup0n1uOBqEw" target="_blank" rel="noopener" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.brands}</div>
          <div class="card-title">Brands Table</div>
        </div>
      </a>
      <a href="https://baserow.io/public/grid/xifuSgwO0Dtlz9BMuZa94R7pY6VPyN8Cb9m2BaHoXos" target="_blank" rel="noopener" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.pipeline}</div>
          <div class="card-title">Content Pipeline (Hub)</div>
        </div>
      </a>
      <a href="https://baserow.io/public/grid/GjD32eR27iJk0B22uWbS0Qd47c4333b2T0n7u2b1XwI" target="_blank" rel="noopener" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.plan}</div>
          <div class="card-title">4 Week Content Plan</div>
        </div>
      </a>
      <a href="https://baserow.io/public/grid/TBPB22q4J40gI8aLh7T1N7E24H52XqY4Q2A3b900K8E" target="_blank" rel="noopener" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.designer}</div>
          <div class="card-title">Designer Guideline</div>
        </div>
      </a>
      <a href="https://baserow.io/public/grid/-iI8DGArwy4NaZe57clvFnddDDWAPp1gFNXC_bjFMjY" target="_blank" rel="noopener" class="card-link">
        <div class="card">
          <div class="card-icon">${icons.logs}</div>
          <div class="card-title">System Logs</div>
        </div>
      </a>
    </div>
  `;
}

function renderTimings() {
  return `
    <h1>${t('timingsTitle')}</h1>
    <p class="page-subtitle">${t('timingsSubtitle')}</p>

    <div class="timing-grid">
      <div class="timing-card">
        <div class="timing-value">${t('timing1Value')}</div>
        <div class="timing-label">${t('timing1Label')}</div>
      </div>
      <div class="timing-card">
        <div class="timing-value">${t('timing2Value')}</div>
        <div class="timing-label">${t('timing2Label')}</div>
      </div>
      <div class="timing-card">
        <div class="timing-value">${t('timing3Value')}</div>
        <div class="timing-label">${t('timing3Label')}</div>
      </div>
      <div class="timing-card">
        <div class="timing-value">${t('timing4Value')}</div>
        <div class="timing-label">${t('timing4Label')}</div>
      </div>
    </div>

    <h2>Детализация автоматизаций</h2>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Процесс</th><th>Триггер</th><th>${t('timeApprox')}</th></tr></thead>
        <tbody>
          <tr><td>Visual DNA Generation</td><td>Обновление Sample Images</td><td>~30 сек</td></tr>
          <tr><td>4 Week Content Plan</td><td>Action = Generate</td><td>~10 мин на всю нишу</td></tr>
          <tr><td>AI News Agent</td><td>Cron (Пн, Чт 09:00)</td><td>~5 мин на нишу</td></tr>
          <tr><td>Text Generation</td><td>Status = Approved</td><td>20-30 сек</td></tr>
          <tr><td>Image Generation</td><td>Image Status = Generate</td><td>~4 мин (зависит от очереди)</td></tr>
          <tr><td>Text Edit Agent</td><td>Новое сообщение в Agent</td><td>~15 сек</td></tr>
          <tr><td>Auto-publishing</td><td>Schedule = Waiting</td><td>15-30 сек</td></tr>
          <tr><td>Archive Script</td><td>Cron (Пн 12:00)</td><td>Мгновенно</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

// ---- ROUTING ----

const routes = {
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

function handleRoute() {
  let hash = window.location.hash.slice(1) || 'home';
  if (!routes[hash]) hash = 'home';
  
  document.getElementById('page-content').innerHTML = routes[hash]();
  updateActiveNav(hash);
  window.scrollTo(0, 0);

  // Close sidebar on mobile after navigation
  const sidebar = document.getElementById('sidebar');
  if (sidebar && sidebar.classList.contains('open')) toggleSidebar();
}

// ---- INIT ----

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
});
