import StaggeredMenu from './components/StaggeredMenu'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Design from './components/Design'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Plasma from './components/Plasma'

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
      {/* ── Plasma background — fixed, couvre tout le viewport ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Plasma
          color="#FFD000"   /* hsl(49,100%,50%) — acid yellow du site */
          speed={0.4}
          direction="forward"
          scale={1.4}
          opacity={0.18}
          mouseInteractive={true}
        />
      </div>

      {/* ── Contenu ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
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
    </div>
  )
}

export default App
