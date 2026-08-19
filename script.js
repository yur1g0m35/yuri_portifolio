const GITHUB_USER = 'yur1g0m35';
const LINKEDIN_URL = 'https://www.linkedin.com/in/yurisiqueiragomes/';

const LANG_COLORS = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
};

function getLangColor(lang) {
  return LANG_COLORS[lang] || '#8b8b8b';
}

const EXPERIENCES = [
  {
    role: 'Analista de Projetos',
    company: 'Every Cybersecurity, GRC and Privacy Solutions',
    period: 'Ago 2026 - Presente',
    location: 'Rio de Janeiro, RJ',
    bullets: [
      'Engenharia de Dados: pipelines com Python, SQL, PostgreSQL, SQLAlchemy e FastAPI',
      'Modelagem e Governança de Dados: PostgreSQL, Alembic e Pydantic',
      'Análise de Dados e BI: dashboards com Power BI, Google Sheets e React',
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

function createSVGIcon(name) {
  const icons = {
    github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  };
  return icons[name] || '';
}

async function fetchProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
    if (!res.ok) throw new Error('Profile not found');
    const data = await res.json();
    renderProfile(data);
  } catch (err) {
    console.error('Erro ao buscar perfil:', err);
  }
}

function renderProfile(user) {
  const avatar = document.getElementById('avatar');
  avatar.src = user.avatar_url;
  avatar.alt = user.name || user.login;

  const bio = document.getElementById('bio');
  bio.textContent = user.bio || `Desenvolvedor apaixonado por tecnologia. Trabalho com as melhores ferramentas do mercado para criar soluções que fazem a diferença.`;

  if (user.location) {
    document.getElementById('location').textContent = user.location;
  } else {
    document.getElementById('location-detail').style.display = 'none';
  }

  if (user.company) {
    document.getElementById('company').textContent = user.company;
  } else {
    document.getElementById('company-detail').style.display = 'none';
  }

  const socialsContainer = document.getElementById('socials');

  const linkedinLink = document.createElement('a');
  linkedinLink.href = LINKEDIN_URL;
  linkedinLink.target = '_blank';
  linkedinLink.rel = 'noopener noreferrer';
  linkedinLink.innerHTML = createSVGIcon('linkedin');
  linkedinLink.setAttribute('aria-label', 'LinkedIn');
  socialsContainer.appendChild(linkedinLink);

  const githubLink = document.createElement('a');
  githubLink.href = user.html_url;
  githubLink.target = '_blank';
  githubLink.rel = 'noopener noreferrer';
  githubLink.innerHTML = createSVGIcon('github');
  githubLink.setAttribute('aria-label', 'GitHub');
  socialsContainer.appendChild(githubLink);

  if (user.blog) {
    const blogLink = document.createElement('a');
    blogLink.href = user.blog.startsWith('http') ? user.blog : `https://${user.blog}`;
    blogLink.target = '_blank';
    blogLink.rel = 'noopener noreferrer';
    blogLink.innerHTML = createSVGIcon('email');
    blogLink.setAttribute('aria-label', 'Website');
    socialsContainer.appendChild(blogLink);
  }

  const footerSocials = document.getElementById('footer-socials');

  const linkedinFooter = document.createElement('a');
  linkedinFooter.href = LINKEDIN_URL;
  linkedinFooter.target = '_blank';
  linkedinFooter.rel = 'noopener noreferrer';
  linkedinFooter.innerHTML = createSVGIcon('linkedin');
  linkedinFooter.setAttribute('aria-label', 'LinkedIn');
  footerSocials.appendChild(linkedinFooter);

  const ghFooter = document.createElement('a');
  ghFooter.href = user.html_url;
  ghFooter.target = '_blank';
  ghFooter.rel = 'noopener noreferrer';
  ghFooter.innerHTML = createSVGIcon('github');
  ghFooter.setAttribute('aria-label', 'GitHub');
  footerSocials.appendChild(ghFooter);
}

async function fetchRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error('Repos not found');
    const data = await res.json();
    renderRepos(data);
  } catch (err) {
    console.error('Erro ao buscar repositórios:', err);
    document.getElementById('projects-grid').innerHTML = `
      <div class="project-card">
        <h3>Erro ao carregar projetos</h3>
        <p class="project-desc">Tente novamente mais tarde.</p>
      </div>`;
  }
}

function renderRepos(repos) {
  const grid = document.getElementById('projects-grid');

  if (!repos.length) {
    grid.innerHTML = `
      <div class="project-card">
        <h3>Nenhum projeto encontrado</h3>
      </div>`;
    return;
  }

  grid.innerHTML = repos
    .map(
      (repo) => `
    <div class="project-card fade-in">
      <h3>${escapeHtml(repo.name)}</h3>
      ${
        repo.language
          ? `<span class="project-lang">
              <span class="lang-dot" style="background:${getLangColor(repo.language)}"></span>
              ${repo.language}
            </span>`
          : `<span class="project-lang" style="color:var(--text-secondary)">Sem linguagem definida</span>`
      }
      ${repo.description ? `<p class="project-desc">${escapeHtml(repo.description)}</p>` : ''}
    </div>`
    )
    .join('');

  observeFadeIns();
}

function renderExperiences() {
  const timeline = document.getElementById('experience-timeline');

  timeline.innerHTML = EXPERIENCES.map(
    (exp) => `
    <div class="exp-card fade-in">
      <div class="exp-header">
        <span class="exp-role">${exp.role}</span>
        <span class="exp-period">${exp.period}</span>
      </div>
      <div class="exp-company">${exp.company}</div>
      <div class="exp-location">${exp.location}</div>
      <ul class="exp-bullets">
        ${exp.bullets.map((b) => `<li>${b}</li>`).join('')}
      </ul>
    </div>`
  ).join('');

  observeFadeIns();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function observeFadeIns() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}

function setupScrollAnimations() {
  const sections = document.querySelectorAll('.section-title, .skill-category, .exp-card, .project-card, .contact-content');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in', 'visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

function setupForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Mensagem enviada!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = 'Enviar Mensagem';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchProfile();
  fetchRepos();
  renderExperiences();
  setupScrollAnimations();
  setupForm();
});
