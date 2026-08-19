/* ══════════════════════════════════════
   Yuri Gomes — Portfolio Script
   ══════════════════════════════════════ */

const GITHUB_USER = 'yur1g0m35';
const LINKEDIN_URL = 'https://www.linkedin.com/in/yurisiqueiragomes/';
const TYPING_TEXTS = [
  'AI & Automation Developer',
  'Data Engineer',
  'Python Developer',
  'Power BI Specialist',
];

const EXPERIENCES = [
  {
    role: 'Analista de Projetos',
    company: 'Every Cybersecurity, GRC and Privacy Solutions',
    period: 'Ago 2026 - Presente',
    location: 'Rio de Janeiro, RJ',
    bullets: [
      'Engenharia de Dados: pipelines com Python, SQL, PostgreSQL, SQLAlchemy e FastAPI',
      'Modelagem e Governança: PostgreSQL, Alembic e Pydantic',
      'Análise e BI: dashboards com Power BI, Google Sheets e React',
      'Integração e Automação: APIs REST, Redis, Azure Entra ID e OpenAI',
      'Web Scraping: extração automatizada com Python, Requests e BeautifulSoup',
      'IA Aplicada: agentes com OpenAI GPT, Function Calling e memória contextual',
    ],
  },
  {
    role: 'Assistente Administrativo I',
    company: 'Estácio',
    period: 'Out 2025 - Fev 2026',
    location: 'Rio de Janeiro, RJ',
    bullets: [
      'Liderança do time de TI, organização e acompanhamento de demandas',
      'Monitoramento de chamados locais e suporte ao aluno',
      'Monitoramento de redes e infraestrutura local',
    ],
  },
  {
    role: 'Auxiliar Administrativo',
    company: 'Estácio',
    period: 'Nov 2024 - Out 2025',
    location: 'Rio de Janeiro, RJ',
    bullets: [
      'Automação com n8n, integração entre plataformas',
      'Salesforce para atendimento e gestão de leads',
      'Automação com Google Sheets e Google Apps Script',
      'Gestão de redes sociais e Instagram',
    ],
  },
  {
    role: 'Auxiliar de Escritório',
    company: 'IBRAP - Instituto Brasileiro de Podologia',
    period: 'Set 2023 - Nov 2024',
    location: 'Rio de Janeiro, RJ',
    bullets: [
      'Automação de processos com Google Sheets e Google Apps Script',
      'Dashboards no Power BI para KPIs de vendas e financeiros',
      'Análise de dados financeiros e fluxo de caixa',
      'Gestão de dados de e-commerce na TrayCommerce',
      'Desenvolvimento e manutenção de sites em WordPress',
    ],
  },
];

const LANG_COLORS = {
  TypeScript: '#3178c6', JavaScript: '#f1e05a', Python: '#3572A5',
  HTML: '#e34c26', CSS: '#563d7c', Java: '#b07219', Go: '#00ADD8',
  Rust: '#dea584', 'C++': '#f34b7d', C: '#555555', Shell: '#89e051',
  PHP: '#4F5D95', Ruby: '#701516', Swift: '#F05138', Kotlin: '#A97BFF',
};

/* ── Icons ── */
function icon(name) {
  const icons = {
    github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    map: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    briefcase: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
    arrow: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>`,
  };
  return icons[name] || '';
}

/* ── Helpers ── */
function getLangColor(lang) { return LANG_COLORS[lang] || '#8b8b8b'; }

function escapeHtml(text) {
  const d = document.createElement('div');
  d.textContent = text;
  return d.innerHTML;
}

function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return document.querySelectorAll(sel); }

/* ── Typing Effect ── */
function setupTyping() {
  const el = qs('.hero-tagline');
  if (!el) return;
  let textIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = TYPING_TEXTS[textIdx];
    if (!deleting) {
      el.innerHTML = current.substring(0, charIdx + 1) + '<span class="typing-cursor">|</span>';
      charIdx++;
      if (charIdx === current.length) {
        setTimeout(() => { deleting = true; tick(); }, 2000);
        return;
      }
      setTimeout(tick, 70);
    } else {
      el.innerHTML = current.substring(0, charIdx) + '<span class="typing-cursor">|</span>';
      charIdx--;
      if (charIdx < 0) {
        deleting = false;
        textIdx = (textIdx + 1) % TYPING_TEXTS.length;
        charIdx = 0;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 40);
    }
  }
  setTimeout(tick, 1000);
}

/* ── Navbar ── */
function setupNavbar() {
  const navbar = qs('#navbar');
  const toggle = qs('#nav-toggle');
  const links = qs('#nav-links');
  const navItems = qsa('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  navItems.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  const sections = qsa('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(l => l.classList.remove('active'));
        const id = entry.target.id;
        const active = qs(`.nav-link[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Profile ── */
async function fetchProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
    if (!res.ok) throw new Error('Not found');
    renderProfile(await res.json());
  } catch (e) {
    console.error('Profile error:', e);
    renderFallbackProfile();
  }
}

function renderFallbackProfile() {
  qs('#avatar').src = 'https://avatars.githubusercontent.com/u/157255680?v=4';
  qs('#bio').textContent = 'Profissional de Tecnologia com atuação em Inteligência Artificial, Engenharia de Dados e Automação de Processos.';
}

function renderProfile(user) {
  qs('#avatar').src = user.avatar_url;
  qs('#avatar').alt = `Foto de ${user.name || user.login}`;

  qs('#bio').textContent = user.bio ||
    'Profissional de Tecnologia com atuação em Inteligência Artificial, Engenharia de Dados, Automação de Processos e Análise de Dados. Experiência no desenvolvimento de soluções orientadas a dados, transformando informações brutas em insights estratégicos.';

  const loc = qs('#location');
  if (user.location) loc.textContent = user.location;

  // Hero socials
  const heroSoc = qs('#socials');
  heroSoc.innerHTML = `
    <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon('linkedin')}</a>
    <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icon('github')}</a>
    <a href="mailto:${user.email || 'contato@yurigomes.dev'}" aria-label="Email">${icon('mail')}</a>
  `;

  // Footer socials
  const footSoc = qs('#footer-socials');
  footSoc.innerHTML = `
    <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon('linkedin')}</a>
    <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icon('github')}</a>
  `;

  // Contact channels
  const channels = qs('#contact-channels');
  channels.innerHTML = `
    <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" class="contact-channel">
      ${icon('linkedin')}<span>LinkedIn</span>
    </a>
    <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="contact-channel">
      ${icon('github')}<span>GitHub</span>
    </a>
    <a href="mailto:${user.email || 'contato@yurigomes.dev'}" class="contact-channel">
      ${icon('mail')}<span>${user.email || 'contato@yurigomes.dev'}</span>
    </a>
  `;
}

/* ── Repos ── */
async function fetchRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error('Not found');
    renderRepos(await res.json());
  } catch (e) {
    console.error('Repos error:', e);
    qs('#projects-grid').innerHTML = `
      <div class="project-card"><h3>Erro ao carregar projetos</h3>
      <p class="project-desc">Tente novamente mais tarde.</p></div>`;
  }
}

function renderRepos(repos) {
  const grid = qs('#projects-grid');
  if (!repos.length) {
    grid.innerHTML = '<div class="project-card"><h3>Nenhum projeto encontrado</h3></div>';
    return;
  }
  grid.innerHTML = repos.map(r => `
    <div class="project-card fade-in">
      <h3>${escapeHtml(r.name)}</h3>
      ${r.language
        ? `<span class="project-lang"><span class="lang-dot" style="background:${getLangColor(r.language)}"></span>${r.language}</span>`
        : `<span class="project-lang" style="color:var(--text-dim)">Sem linguagem</span>`}
      ${r.description ? `<p class="project-desc">${escapeHtml(r.description)}</p>` : ''}
    </div>`).join('');
  observeAll();
}

/* ── Timeline ── */
function renderTimeline() {
  const tl = qs('#timeline');
  tl.innerHTML = EXPERIENCES.map(e => `
    <div class="timeline-item fade-in">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <span class="timeline-role">${e.role}</span>
          <span class="timeline-period">${e.period}</span>
        </div>
        <div class="timeline-company">${e.company}</div>
        <div class="timeline-location">${e.location}</div>
        <ul class="timeline-bullets">
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>`).join('');
  observeAll();
}

/* ── Skill Bars ── */
function animateSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width + '%';
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  qsa('.skill-fill').forEach(bar => observer.observe(bar));
}

/* ── Stats Counter ── */
function animateStats() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current;
        }, 40);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  qsa('.stat-number').forEach(el => observer.observe(el));
}

/* ── Scroll Animations ── */
function observeAll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  qsa('.fade-in').forEach(el => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}

function setupScrollAnimations() {
  const targets = qsa('.section-label, .section-title, .skill-category, .timeline-item, .project-card, .stat-card, .contact-info, .contact-form');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in', 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  targets.forEach(el => observer.observe(el));
}

/* ── Form ── */
function setupForm() {
  const form = qs('#contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    const text = btn.querySelector('.btn-text');
    text.textContent = 'Enviado!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      text.textContent = 'Enviar Mensagem';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupTyping();
  fetchProfile();
  fetchRepos();
  renderTimeline();
  setupScrollAnimations();
  animateSkillBars();
  animateStats();
  setupForm();
});
