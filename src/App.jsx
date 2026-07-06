import { motion } from 'framer-motion'
import StaggeredMenu from './components/StaggeredMenu'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Design from './components/Design'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const menuItems = [
  { label: 'Projets', ariaLabel: 'Voir les projets', link: '#projets' },
  { label: 'Design', ariaLabel: 'Voir le design', link: '#design' },
  { label: 'À propos', ariaLabel: 'À propos de moi', link: '#about' },
  { label: 'Contact', ariaLabel: 'Me contacter', link: '#contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/LudoShenn15' },
  { label: 'Instagram', link: 'https://www.instagram.com/komi_ludo/' },
  { label: 'Email', link: 'mailto:Sherfieldstr@gmail.com' }
];

function App() {
  return (
    <div className="app">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#F0EDE8"
        openMenuButtonColor="#F0EDE8"
        changeMenuColorOnOpen={true}
        colors={['#1E1D1B', '#2A2926']}
        accentColor="hsl(49, 100%, 50%)"
      />
      <Hero />
      <Projects />
      <Design />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
