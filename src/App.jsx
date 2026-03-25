import './index.css'

const EXPERIENCES = [
  {
    company: "PREVENTEO",
    role: "Lead Front-End Developer",
    period: "2020 → Present",
    desc: "Pilotage de la modernisation front-end d'une plateforme SaaS QHSE. Migration progressive d'une base de code legacy jQuery vers Vue 3 avec une architecture modulaire et maintenable. Référent technique front-end pour l'équipe.",
    tags: ["Vue 3", "JavaScript", "jQuery", "PHP", "Symfony", "MySQL", "SCSS", "GitLab", "Xcode"]
  },
  {
    company: "Projet Freelance — Lean Management",
    role: "AI-Powered Full Stack Developer",
    period: "2024 → 2025",
    desc: "Développement en 1 mois d'une solution de lean management complète, vibe-codée avec l'IA. Adoptée par une multinationale et déployée sur plusieurs sites dans le monde. Du concept au déploiement en totale autonomie grâce à une approche IA-first.",
    tags: ["AI", "Vibe Coding", "Lean Management", "React", "Supabase", "Cursor", "TypeScript"]
  },
  {
    company: "Université de Nice Sophia-Antipolis",
    role: "Chargé de Cours",
    period: "2019 → 2021",
    desc: "Enseigné pendant 2 ans en Master MIAGE et Licence Informatique. Modules : Conception orientée objet avancée, Programmation client web riche, Développement web, Développement mobile hybride.",
    tags: ["JavaScript", "Vue.js", "Node.js", "Sequelize", "HTML5", "CSS3", "Pédagogie"]
  },
  {
    company: "Freelance — Projet Aperooo",
    role: "Full Stack Developer",
    period: "2018 → 2020",
    desc: "Conception et développement from scratch d'une application mobile hybride communautaire. Architecture, UX et développement full stack en totale autonomie.",
    tags: ["React", "Node.js", "Firebase", "Heroku", "SCSS", "Bitbucket"]
  },
  {
    company: "Sopra Steria · Orange",
    role: "Développeur Front-End",
    period: "2015 → 2018",
    desc: "Développement de portails web pour Orange dans le cadre de projets stratégiques (MAGIC, STAR, SPAAD) : portail de gestion de recommandations et animation de TV office.",
    tags: ["JavaScript", "jQuery", "PHP", "Zend2", "MySQL", "HTML5", "CSS3"]
  }
]

const SKILLS = [
  {
    title: "Front-End",
    icon: "⚡",
    items: [
      { name: "JavaScript", level: 95 },
      { name: "Vue.js", level: 95 },
      { name: "React.js", level: 80 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "SCSS", level: 90 }
    ]
  },
  {
    title: "Back-End",
    icon: "🛠",
    items: [
      { name: "Node.js", level: 75 },
      { name: "PHP / Symfony", level: 70 },
      { name: "Supabase", level: 80 },
      { name: "MySQL", level: 70 },
      { name: "Firebase", level: 65 }
    ]
  },
  {
    title: "IA & Outils",
    icon: "🤖",
    items: [
      { name: "Cursor / Vibe Coding", level: 90 },
      { name: "Git / GitLab", level: 90 },
      { name: "Vite / Webpack", level: 80 },
      { name: "PHPStorm / VSCode", level: 90 },
      { name: "Agile / Scrum", level: 80 }
    ]
  }
]

const EDUCATION = [
  {
    school: "Université Nice Sophia-Antipolis",
    degree: "Master MIAGE",
    desc: "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
    year: "2012 – 2014"
  },
  {
    school: "IUT Nice",
    degree: "DUT Informatique",
    desc: "Option Génie Logiciel",
    year: "2010 – 2012"
  }
]

const LANGUAGES = [
  { flag: "🇫🇷", name: "Français", level: "Langue maternelle" },
  { flag: "🇬🇧", name: "Anglais", level: "Professionnel (C1)" },
  { flag: "🇪🇸", name: "Espagnol", level: "Notions (A2)" }
]

export default function App() {
  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">CPB</a>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#education">Formation</a></li>
        </ul>
      </nav>

      <main>
        <section className="hero" id="hero" style={{maxWidth:'100%'}}>
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="hero-content">
            <div className="hero-badge">
              <span />
              Disponible pour missions / collaboration
            </div>
            <h1>Christian<br /><span>Pagh-Birk.</span></h1>
            <p className="hero-subtitle">Lead Front-End Developer</p>
            <p className="hero-desc">
              10+ ans d'expérience en développement web et mobile hybride, spécialisé JavaScript.
              Passionné par la modernisation d'architectures legacy, la qualité de code, et l'utilisation de l'IA pour créer des produits concrets à fort impact.
            </p>
            <div className="hero-meta">
              <span>📍 La Colle-sur-Loup, France</span>
              <span>💼 PREVENTEO · Lead Developer</span>
            </div>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/christian-pagh-birk" target="_blank" rel="noreferrer" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/chrisspb" target="_blank" rel="noreferrer" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.christianpaghbirk.com" target="_blank" rel="noreferrer" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                Website
              </a>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section id="about">
          <div className="section-label">À propos</div>
          <h2 className="section-title">Qui suis-je ?</h2>
          <p className="about-text">
            Développeur front-end depuis plus de 10 ans, j'ai évolué d'intégrateur web à Lead Developer,
            pilotant des migrations techniques complexes et des choix d'architecture au sein d'équipes produit.
            Convaincu que l'IA redéfinit notre façon de créer, j'ai vibe-codé en 1 mois une solution de lean management
            adoptée par une multinationale sur plusieurs sites dans le monde — une démonstration concrète de ce qu'un développeur peut accomplir avec les bons outils.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <h3>🏗 Architecture & Modernisation</h3>
              <p>Migration de systèmes legacy vers des architectures modernes Vue 3. Définition des standards de code, revues, et montée en compétence d'équipe.</p>
            </div>
            <div className="about-card">
              <h3>🤖 IA & Vibe Coding</h3>
              <p>Utilisation avancée de l'IA (Cursor, LLMs) pour concevoir et livrer des produits complets à vitesse inédite. Solution lean management mondiale développée en 1 mois.</p>
            </div>
            <div className="about-card">
              <h3>📱 Développement Mobile Hybride</h3>
              <p>Conception et développement d'apps mobiles hybrides de bout en bout — de l'idée au déploiement, en autonomie totale.</p>
            </div>
            <div className="about-card">
              <h3>⚡ Performance & Qualité</h3>
              <p>Sensible à l'expérience développeur et utilisateur : code lisible, maintenable, testé, et performant dès la conception.</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section id="experience">
          <div className="section-label">Parcours</div>
          <h2 className="section-title">Expériences</h2>
          <div className="timeline">
            {EXPERIENCES.map((exp, i) => (
              <div className="timeline-item" key={i}>
                <div>
                  <p className="timeline-company">{exp.company}</p>
                  <div className="timeline-header">
                    <p className="timeline-role">{exp.role}</p>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                </div>
                <p className="timeline-desc">{exp.desc}</p>
                <div className="tags">
                  {exp.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        <section id="skills">
          <div className="section-label">Compétences</div>
          <h2 className="section-title">Stack technique</h2>
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-title">{group.icon} {group.title}</div>
                {group.items.map(skill => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-wrap">
                      <div className="skill-bar" style={{width: `${skill.level}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        <section id="education">
          <div className="section-label">Formation</div>
          <h2 className="section-title">Parcours académique</h2>
          <div className="edu-grid" style={{marginBottom:'3rem'}}>
            {EDUCATION.map((edu) => (
              <div className="edu-card" key={edu.degree}>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-degree">{edu.degree}</p>
                <p style={{fontSize:'0.82rem', color:'var(--text-muted)', margin:'0.25rem 0 0.5rem'}}>{edu.desc}</p>
                <p className="edu-year">{edu.year}</p>
              </div>
            ))}
          </div>

          <div className="section-label">Langues</div>
          <h2 className="section-title" style={{marginBottom:'1.5rem'}}>Langues parlées</h2>
          <div className="lang-grid">
            {LANGUAGES.map(lang => (
              <div className="lang-card" key={lang.name}>
                <span className="lang-flag">{lang.flag}</span>
                <div>
                  <p className="lang-name">{lang.name}</p>
                  <p className="lang-level">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>
          Conçu & développé par{' '}
          <a href="https://www.christianpaghbirk.com" target="_blank" rel="noreferrer">Christian Pagh-Birk</a>
          {' '}· React · Vite · 2025
        </p>
      </footer>
    </>
  )
}
