import { motion } from 'framer-motion'
import './Contact.css'

const contactLinks = [
  { label: 'GitHub', value: 'LudoShenn15', href: 'https://github.com/LudoShenn15', external: true },
  { label: 'Instagram', value: '@komi_ludo', href: 'https://www.instagram.com/komi_ludo/', external: true },
  { label: 'LinkedIn', value: 'Komi Ludovic Agbo', href: 'https://www.linkedin.com/in/komi-ludovic-agbo/', external: true },
  { label: 'Email', value: 'Sherfieldstr@gmail.com', href: 'mailto:Sherfieldstr@gmail.com', external: false },
]

function Contact() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-num">04</span>
        <h2 className="section-title">Contact</h2>
      </motion.div>

      <div className="contact-inner">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="contact-big">
            Construisons<br />
            quelque<br />
            chose <em>.</em>
          </h3>
          <button
            className="btn btn-accent contact-cta"
            onClick={scrollToTop}
            aria-label="Retour en haut de page"
          >
            ↑ Retour en haut
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-links-list">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="contact-link-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10, color: 'var(--ink)' }}
              >
                <span className="clink-label">{link.label}</span>
                <span className="clink-value">{link.value}</span>
                <span className="clink-arrow">↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
