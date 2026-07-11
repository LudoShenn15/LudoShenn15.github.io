import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-content">
        <motion.p 
          className="hero-label"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Creative Technologist · Lomé, Togo
        </motion.p>
        
        <motion.h1 
          className="hero-name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Komi Ludovic<br />
          <span>AGBO.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Je construis des produits à l'intersection du code, du design et de l'intelligence artificielle, pour l'Afrique, et au-delà.
        </motion.p>

        <motion.div
          className="hero-links"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="#projets" className="btn btn-accent">Voir les projets</a>
          <a href="https://github.com/LudoShenn15" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
          <a href="#contact" className="btn">Me contacter</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
