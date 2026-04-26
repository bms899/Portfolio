import { useState } from 'react'
import './App.css'

function App() {
const [activeSkill, setActiveSkill] = useState<string | null>(null)
const [menuOpen, setMenuOpen] = useState(false)

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

const developers = [
  {
    name: 'Eduardo',
    role: 'Desenvolvedor Fullstack',
    desc: 'Desenvolvedor de software com mais de 5 anos de experiência em sistemas corporativos, atuando no desenvolvimento e evolução de aplicações web, com foco em integrações e arquitetura de regras de negócio escaláveis. Atualmente, trabalho em um sistema de crédito consignado, realizando integrações bancárias via CNAB e EDI, lidando com regras de crédito e processamento de informações financeiras em um ambiente de alta criticidade e confiabilidade. Anteriormente, atuei em um ERP corporativo, contribuindo para a manutenção, evolução e integração entre sistemas, garantindo consistência e integridade de dados em cenários com regras de negócio complexas. Tenho experiência com PHP, Vue.js, MySQL, Git e Docker, e venho expandindo meu repertório técnico com tecnologias como React, NestJS e PostgreSQL.',
    github: 'https://github.com/edu-domingos',
    linkedin: 'https://www.linkedin.com/in/eduardo-domingos-829633355/',
    tools: ['PHP', 'Vue.js', 'MySQL', 'Git', 'Docker', 'React', 'NestJS', 'PostgreSQL']
  },
  {
    name: 'Bruno',
    role: 'Desenvolvedor Fullstack',
    desc: 'Formado em Análise e Desenvolvimento de Sistemas, com experiência em suporte técnico N2 e manutenção de sistemas. Em transição para a área de desenvolvimento Fullstack, atualmente me especializando e desenvolvendo projetos práticos. Tenho foco em aprendizado contínuo e na criação de soluções eficientes e escaláveis.',
    github: 'https://github.com/bms899',
    linkedin: 'https://www.linkedin.com/in/bruno-muniz-b39a3626a/',
    tools: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'MySQL', 'NoSQL', 'CSS', 'Git', 'Docker']
  }
]

const skills = [
    { name: 'TypeScript', icon: 'typescript.svg', desc: 'Tipagem estática para código robusto e manutenível.', level: 90 },
    { name: 'JavaScript', icon: 'javascript.svg', desc: 'Linguagem essencial para frontend e backend.', level: 85 },
    { name: 'React.js', icon: 'react.svg', desc: 'Biblioteca para interfaces modernas e componentes reutilizáveis.', level: 95 },
    { name: 'Nest.js', icon: 'nestjs.svg', desc: 'Framework Node.js enterprise com módulos e decorators.', level: 80 },
    { name: 'GIT', icon: 'git.svg', desc: 'Controle de versão distribuído para equipes.', level: 90 },
    { name: 'GitHub', icon: 'github.svg', desc: 'Plataforma para repositórios e CI/CD.', level: 90 },
    { name: 'Docker', icon: 'docker.svg', desc: 'Containerização para deployments consistentes.', level: 85 },
    { name: 'Postgressql', icon: 'postgresql.svg', desc: 'SGBD relacional avançado com suporte JSON.', level: 80 },
    { name: 'Nginx', icon: 'nginx.svg', desc: 'Servidor web e reverse proxy de alta performance.', level: 75 },
    { name: 'MySQL', icon: 'mysql.svg', desc: 'Banco relacional clássico para dados estruturados.', level: 80 },
    { name: 'Mongodb', icon: 'mongodb.svg', desc: 'MongoDB para dados flexíveis e escaláveis.', level: 75 },
    { name: 'HTML', icon: 'html5.svg', desc: 'Estrutura semântica moderna para web.', level: 95 },
    { name: 'CSS', icon: 'css3.svg', desc: 'Estilos responsivos, animations e layouts avançados.', level: 90 }
  ]

  const projects = [
    {
      name: 'Nexus-Freight',
      logo: '/icons/nexus.jpeg',
      desc: 'Fullstack frete management com NestJS backend, React frontend, Docker, Postgres.',
      link: 'https://github.com/bruno/projetogiga'
    },
    {
      name: 'Portfolio',
      desc: 'Este site - React + Vite + TypeScript clean design.',
      link: '#'
    }
  ]

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">B<span>&</span>E</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bruno e Eduardo</h1>
            <h2>Desenvolvedorres Web</h2>
            <p>Desenvolvimento fullstack. Especializado em React, NestJS, Docker e tecnologias modernas. Buscando primeira oportunidade para contribuir em equipe ágil!</p>
            <div className="hero-buttons">
              <a href="https://github.com/bms899" className="btn btn-primary" target="_blank">Ver GitHub</a>
              <a href="#contact" className="btn btn-secondary">Contato</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="about" id="about">
        <div className="container">
          <h2>Sobre Nós</h2>
          <p className="about-intro">Conheça os desenvolvedores por trás dos projetos</p>
          <div className="about-grid">
            {developers.map((dev, index) => (
              <div key={index} className="about-card">
                <div className="about-header">
                  <div className="about-avatar">
                    <span>{dev.name.charAt(0)}</span>
                  </div>
                  <div className="about-info">
                    <h3>{dev.name}</h3>
                    <p className="about-role">{dev.role}</p>
                  </div>
                </div>
                <p className="about-desc">{dev.desc}</p>
                <div className="about-tools">
                  <span className="tools-label">Ferramentas:</span>
                  <div className="tools-list">
                    {dev.tools.map((tool, i) => (
                      <span key={i} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
                <div className="about-links">
                  <a href={dev.github} target="_blank" rel="noopener noreferrer" className="about-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="about-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills" id="skills">
        <div className="container">
          <h2>Minhas Competências</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <img src={`/icons/${skill.icon}`} alt={skill.name} className="skill-icon" />
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                </div>
                <p className={`skill-desc ${activeSkill === skill.name ? 'show' : ''}`}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <div className="container">
          <h2>Projetos</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {project.logo && <img src={project.logo} alt={project.name} className="project-logo" />}
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
              <a href="https://github.com/bms899/projetogiga" className="btn btn-primary" target="_blank">Ver Projeto</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Entre em Contato</h2>
          <div className="contact-links">
           
           
            <a href="https://wa.me/5511999999999" target="_blank">WhatsApp</a>
          </div>
          <p>Prontinho para discutir oportunidades ou colaborações!</p>
        </div>
      </section>
    </div>
  )
}

export default App
