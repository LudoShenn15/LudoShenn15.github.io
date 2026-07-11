import { motion } from 'framer-motion'
import './Design.css'

const designCards = [
  {
    label: 'Branding',
    name: 'Miséricordia',
    visual: 'M',
    className: 'dc-1',
    accent: '#7c3aed'
  },
  {
    label: 'Identité',
    name: 'Génoa',
    visual: 'G',
    className: 'dc-2',
    accent: '#16a34a'
  },
  {
    label: 'UI/UX',
    name: 'Dokey App',
    visual: 'D',
    className: 'dc-3',
    accent: '#dc2626'
  },
  {
    label: 'UI Design',
    name: 'Reality Quest',
    visual: 'RQ',
    className: 'dc-4',
    accent: '#2563eb'
  },
  {
    label: 'Illustration',
    name: 'Dark Series',
    visual: '★',
    className: 'dc-5',
    accent: 'hsl(49, 100%, 50%)'
  },
  {
    label: 'Branding',
    name: 'Clic & Crée',
    visual: 'CC',
    className: 'dc-6',
    accent: '#db2777'
  },
]

function Design() {
  return (
    <section id="design" className="design-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-num">02</span>
        <h2 className="section-title">Design</h2>
      </motion.div>

      <motion.p 
        className="design-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Designer graphique et illustrateur en freelance — branding, identité visuelle, illustration numérique. Le code et le design ne sont pas deux disciplines séparées.
      </motion.p>

      <div className="design-grid">
        {designCards.map((card, index) => (
          <motion.div
            key={card.name}
            className={`design-card ${card.className}`}
            style={{ '--card-accent': card.accent }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="design-card-bg"></div>
            <div className="design-card-visual" aria-hidden="true">{card.visual}</div>
            <div className="design-card-content">
              <p className="design-card-label">{card.label}</p>
              <p className="design-card-name">{card.name}</p>
              <span className="design-card-accent-bar" aria-hidden="true"></span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Design
