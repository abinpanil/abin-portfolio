import { motion } from 'framer-motion';
import './Hero.css';

const lineReveal = {
  initial: { opacity: 0.85, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.45,
    ease: [0.33, 1, 0.68, 1],
  },
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        {/* Intro — light animation, not LCP */}
        <motion.p
          className="intro-text"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Hi, I'm <strong>Abin P Anil</strong>, Full-Stack Developer.
        </motion.p>

        {/* LCP-safe H1 */}
        <h1 className="hero-main-title">
          <motion.span {...lineReveal} className="title-bold">
            Building scalable,
          </motion.span>{' '}
          <motion.span {...lineReveal} transition={{ delay: 0.05 }} className="title-bold">
            secure,
          </motion.span>{' '}
          <motion.span {...lineReveal} transition={{ delay: 0.1 }} className="title-light">
            production-ready
          </motion.span>{' '}
          <motion.span {...lineReveal} transition={{ delay: 0.15 }} className="title-light">
            web applications.
          </motion.span>
        </h1>

      </div>
    </section>
  );
};

export default Hero;
