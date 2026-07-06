import { motion } from 'framer-motion'
import './Nav.css'

function Nav() {
  const navItems = [
    { name: 'Projets', href: '#projets' },
    { name: 'Design', href: '#design' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="nav-logo">LK</span>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            <a href={item.href}>{item.name}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Nav
