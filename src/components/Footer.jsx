import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="footer-copy">© 2026 Ludo Komi — Lomé, Togo</span>
      <span className="footer-motto">Let's Make It Burn.</span>
    </motion.footer>
  )
}

export default Footer
