import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    index: '001',
    title: 'Reality Quest',
    tags: ['React', 'Supabase', 'Claude API', 'PWA'],
    description: 'RPG gamifié sur notre vie réelle pour une meilleure productivité dans nos objectifs quotidiens, XP, rangs, badges, chasse au trésor en temps réel etc.',
    link: 'https://github.com/LudoShenn15',
    linkText: 'GitHub'
  },
  {
    index: '002',
    title: 'Dokey',
    tags: ['React PWA', 'Supabase', 'Claude API', 'Health'],
    description: 'Santé préventive gamifiée pour les jeunes Africains. Mascotte IA, 5 questions matinales, streaks et badges Duolingo-style. Ciblant Togo → UEMOA → diaspora.',
    link: 'https://dokey-mobile.vercel.app/',
    linkText: 'Live'
  },
  {
    index: '003',
    title: 'Tu Chauffes',
    tags: ['React', 'FastText', 'NLP', 'Vercel'],
    description: 'Jeu de devinettes sémantiques — distance vectorielle entre mots via FastText. Plus ton mot est proche, plus tu "chauffes". Déployé sur Vercel.',
    link: 'https://tu-chauffes.vercel.app/',
    linkText: 'Live'
  },
  {
    index: '004',
    title: 'Bluffes-moi',
    tags: ['React', 'Game', 'Vercel'],
    description: 'Jeu psychologique deux joueurs. Bluff, stratégie, pression mentale. Interface minimaliste, tension maximale.',
    link: 'http://bluffes-moi.vercel.app/',
    linkText: 'Live'
  },
  /*{
    index: '005',
    title: 'Sunshine06',
    tags: ['React', 'Three.js', '3D', 'Vercel'],
    description: 'Site anniversaire interactif en 3D. Scènes Three.js, animations, atmosphère. Offert à une amie — construit avec soin.',
    link: 'https://sunshine06.netlify.app/',
    linkText: 'Live'
  },*/
]

function Projects() {
  return (
    <section id="projets" className="projects-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-num">01</span>
        <h2 className="section-title">Projets</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.index}
            className="project-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ background: '#0E0E0C' }}
          >
            <div className="project-left">
              <span className="project-index">{project.index}</span>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-right">
              <p className="project-desc">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.linkText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
