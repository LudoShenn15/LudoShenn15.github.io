import { motion } from 'framer-motion'
import Lanyard from './Lanyard'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <Lanyard 
        position={[0, -2, 20]} 
        gravity={[0, -40, 0]} 
        frontImage="/ludo-komi-back.svg"
        backImage="/ludo.jpg"
        imageFit="contain"
        lanyardImage={null}
      />
      
      <div className="hero-content">
        <motion.p 
          className="hero-label"
          initial={{ opacity: 75, y: 30 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Creative Technologist · Lomé, Togo
        </motion.p>
        
        <motion.h1 
          className="hero-name"
          initial={{ opacity: 75, y: 50 }}
          animate={{ opacity: 100, y: 0 }}
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
      </div>
    </section>
  )
}

export default Hero
