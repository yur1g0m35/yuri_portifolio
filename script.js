/* ══════════════════════════════════════════
   Yuri Gomes — Portfolio v3
   ══════════════════════════════════════════ */

const GITHUB_USER = 'yur1g0m35';
const LINKEDIN_URL = 'https://www.linkedin.com/in/yurisiqueiragomes/';

const EXPERIENCES = [
  {
    role: 'Analista de Projetos',
    company: 'Every Cybersecurity, GRC and Privacy Solutions',
    period: '2026 — Atual',
    bullets: [
      'Engenharia de dados: pipelines com Python, SQL, PostgreSQL e FastAPI',
      'Governança de dados: modelagem relacional com Alembic e Pydantic',
      'Automação: integrações com APIs REST, Redis, Azure e OpenAI',
      'IA aplicada: agentes com GPT, Function Calling e memória contextual',
    ],
  },
  {
    role: 'Assistente Administrativo I · Liderança de TI',
    company: 'Estácio',
    period: '2024 — 2026',
    bullets: [
      'Liderança do time de TI, organização e acompanhamento de demandas',
      'Automação com n8n, Google Sheets e Google Apps Script',
      'Salesforce para atendimento e gestão de leads',
      'Gestão de redes sociais e presença digital',
    ],
  },
];

const LANG_COLORS = {
  TypeScript: '#3178c6', JavaScript: '#f1e05a', Python: '#3572A5',
  HTML: '#e34c26', CSS: '#563d7c', Go: '#00ADD8', Rust: '#dea584',
  Shell: '#89e051', PHP: '#4F5D95', Ruby: '#701516',
};

/* ── Helpers ── */
function $(s) { return document.querySelector(s); }
function $$(s) { return document.querySelectorAll(s); }
function esc(t) { const d = document.createElement('div'); d.textContent = t; return d.innerHTML; }
function langColor(l) { return LANG_COLORS[l] || '#6e6e80'; }

function svgIcon(name) {
  const m = {
    github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  };
  return m[name] || '';
}

/* ── Navbar ── */
function initNavbar() {
  const nav = $('#navbar');
  const toggle = $('#nav-toggle');
  const links = $('#nav-links');
  const items = $$('.nav-link');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  items.forEach(l => l.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  }));

  const secs = $$('section[id]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        items.forEach(l => l.classList.remove('active'));
        const a = $(`.nav-link[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  secs.forEach(s => obs.observe(s));
}

/* ── Reveal on Scroll ── */
function initReveal() {
  const els = $$('.eyebrow, .section-heading, .about-text, .about-meta, .expertise-item, .process-step, .exp-row, .project-item, .contact-left, .contact-form, .hero-content, .hero-visual');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal', 'visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => {
    el.classList.add('reveal');
    obs.observe(el);
  });
}

/* ── Profile ── */
async function loadProfile() {
  try {
    const r = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
    if (!r.ok) throw new Error();
    const u = await r.json();
    renderProfile(u);
  } catch {
    const img = $('#avatar');
    img.src = 'https://avatars.githubusercontent.com/u/157255680?v=4';
    img.alt = 'Yuri Gomes';
  }
}

function renderProfile(u) {
  const img = $('#avatar');
  img.src = u.avatar_url;
  img.alt = u.name || 'Yuri Gomes';

  const socs = [
    { href: LINKEDIN_URL, icon: 'linkedin', label: 'LinkedIn' },
    { href: u.html_url, icon: 'github', label: 'GitHub' },
    { href: `mailto:${u.email || 'contato@yurigomes.dev'}`, icon: 'mail', label: u.email || 'Email' },
  ];

  const contactLinks = $('#contact-links');
  const footerLinks = $('#footer-links');

  socs.forEach(s => {
    const isEmail = s.icon === 'mail';
    const cl = document.createElement('a');
    cl.href = s.href;
    if (!isEmail) { cl.target = '_blank'; cl.rel = 'noopener noreferrer'; }
    cl.className = 'contact-link';
    cl.innerHTML = `${svgIcon(s.icon)}<span>${s.label}</span>`;
    contactLinks.appendChild(cl);

    const fl = document.createElement('a');
    fl.href = s.href;
    if (!isEmail) { fl.target = '_blank'; fl.rel = 'noopener noreferrer'; }
    fl.textContent = s.label;
    footerLinks.appendChild(fl);
  });
}

/* ── Experience ── */
function renderExperience() {
  const el = $('#exp-list');
  el.innerHTML = EXPERIENCES.map(e => `
    <div class="exp-row reveal">
      <span class="exp-period">${e.period}</span>
      <div class="exp-body">
        <h3 class="exp-role">${e.role}</h3>
        <p class="exp-company">${e.company}</p>
        <ul class="exp-bullets">
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>`).join('');
}

/* ── Projects ── */
async function loadRepos() {
  try {
    const r = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
    if (!r.ok) throw new Error();
    renderRepos(await r.json());
  } catch {
    $('#projects-list').innerHTML = `
      <div class="project-item">
        <span class="project-num">—</span>
        <div class="project-body">
          <h3 class="project-name">Erro ao carregar</h3>
          <p class="project-desc">Tente novamente mais tarde.</p>
        </div>
      </div>`;
  }
}

function renderRepos(repos) {
  const el = $('#projects-list');
  if (!repos.length) {
    em.innerHTML = '<div class="project-item"><span class="project-num">—</span><div class="project-body"><h3 class="project-name">Nenhum projeto</h3></div></div>';
    return;
  }
  el.innerHTML = repos.map((r, i) => {
    const num = String(i + 1).padStart(2, '0');
    const tags = r.language
      ? `<span class="project-tag" style="background:${langColor(r.language)}22;color:${langColor(r.language)}">${r.language}</span>`
      : '';
    return `
    <div class="project-item reveal">
      <span class="project-num">${num}</span>
      <div class="project-body">
        <h3 class="project-name">${esc(r.name)}</h3>
        ${r.description ? `<p class="project-desc">${esc(r.description)}</p>` : ''}
        <div class="project-tech">${tags}</div>
      </div>
    </div>`;
  }).join('');
}

/* ── Form ── */
function initForm() {
  const f = $('#contact-form');
  f.addEventListener('submit', e => {
    e.preventDefault();
    const btn = f.querySelector('.btn-label');
    btn.textContent = 'Enviado ✓';
    f.querySelector('.btn-primary').style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = 'Enviar';
      f.querySelector('.btn-primary').style.background = '';
      f.reset();
    }, 3000);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReveal();
  loadProfile();
  renderExperience();
  loadRepos();
  initForm();
});
