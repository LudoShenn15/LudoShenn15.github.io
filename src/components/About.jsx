import { motion } from 'framer-motion'
import './About.css'

const stackItems = [
  { category: 'Frontend', items: 'React · TypeScript · Three.js · Tailwind · PWA' },
  { category: 'Backend', items: 'Supabase · PostgreSQL · Deno Edge Functions' },
  { category: 'AI / NLP', items: 'Claude API · FastText · transformers.js · DeepSeek API' },
  { category: 'Design', items: 'Figma · Illustrator · Photoshop' },
  { category: 'Languages', items: 'JavaScript · TypeScript · Python · PHP · Dart' },
  { category: 'Deploy', items: 'Vercel · GitHub Pages · Docker' },
]

function About() {
  return (
    <section id="about" className="about-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-num">03</span>
        <h2 className="section-title">À propos</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-text">
            Développeur <full-satck>full-stack</full-satck>, graphiste freelance et illustrateur — je façonne des produits à l'intersection du <strong>code, du design et de l'IA</strong>.<br /><br />
            Je construis avec une vision ancrée dans la réalité africaine. Connectivité limitée, jeunesse créative, marché sous-servi. Ce sont des contraintes qui inspirent des solutions concrètes et des interfaces qui <strong>fonctionnent vraiment</strong>.<br /><br />
            En dehors des écrans — je dessine, je peins, je joue au basketball, je lis des mangas. Je travaille sur un projet poétique appelé <strong>Dark</strong>.
          <blockquote className="about-quote">
            "Let's Make It Burn."
          </blockquote>
        </motion.div>

        <motion.div 
          className="stack-list"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={item.category}
              className="stack-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <span className="stack-category">{item.category}</span>
              <span className="stack-items">{item.items}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
