import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

// Global page load transition
const pageLoadTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

function App() {
  return (
    <motion.div
      className="app"
      {...pageLoadTransition}
    >
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </motion.div>
  );
}

export default App;
