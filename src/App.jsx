import { motion } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './App.css';

// Lazy load below-the-fold content
const About = lazy(() => import('./components/About'));
const Work = lazy(() => import('./components/Work'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

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
        <Suspense fallback={null}>
          <About />
          <Work />
          <Skills />
          <Contact />
        </Suspense>
      </main>
    </motion.div>
  );
}

export default App;
