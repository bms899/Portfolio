import { useState } from 'react'
import './App.css'

function App() {
const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const skills = [
    { name: 'TypeScript', icon: 'typescript.svg', desc: 'Tipagem estática para código robusto e manutenível.', level: 90 },
    { name: 'JavaScript', icon: 'javascript.svg', desc: 'Linguagem essencial para frontend e backend.', level: 85 },
    { name: 'React.js', icon: 'react.svg', desc: 'Biblioteca para interfaces modernas e componentes reutilizáveis.', level: 95 },
    { name: 'Nest.js', icon: 'nestjs.svg', desc: 'Framework Node.js enterprise com módulos e decorators.', level: 80 },
    { name: 'GIT', icon: 'git.svg', desc: 'Controle de versão distribuído para equipes.', level: 90 },
    { name: 'GitHub', icon: 'github.svg', desc: 'Plataforma para repositórios e CI/CD.', level: 90 },
    { name: 'Docker', icon: 'docker.svg', desc: 'Containerização para deployments consistentes.', level: 85 },
    { name: 'Postgres', icon: 'postgresql.svg', desc: 'SGBD relacional avançado com suporte JSON.', level: 80 },
    { name: 'Nginx', icon: 'nginx.svg', desc: 'Servidor web e reverse proxy de alta performance.', level: 75 },
    { name: 'MySQL', icon: 'mysql.svg', desc: 'Banco relacional clássico para dados estruturados.', level: 80 },
    { name: 'NoSQL', icon: 'mongodb.svg', desc: 'MongoDB para dados flexíveis e escaláveis.', level: 75 },
    { name: 'HTML', icon: 'html5.svg', desc: 'Estrutura semântica moderna para web.', level: 95 },
    { name: 'CSS', icon: 'css.png', desc: 'Estilos responsivos, animations e layouts avançados.', level: 90 }
  ]

  const projects = [
    {
      name: 'Freightboard',
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
            <a href="https://github.com/bms899" target="_blank">GitHub:Bruno</a>
             <a href="https://www.linkedin.com/in/bruno-muniz-b39a3626a/" target="_blank">LinkedIn:Bruno</a>
             <a href="https://github.com/edu-domingos" target="_blank">GitHub:Eduardo</a>
            <a href="https://www.linkedin.com/in/eduardo-domingos-829633355/" target="_blank">LinkedIn:Eduardo</a>
           
            <a href="https://wa.me/5511999999999" target="_blank">WhatsApp</a>
          </div>
          <p>Prontinho para discutir oportunidades ou colaborações!</p>
        </div>
      </section>
    </div>
  )
}

export default App
