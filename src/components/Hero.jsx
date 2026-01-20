import { motion } from 'framer-motion';
import './Hero.css';

// Sequential fade-in animations
const fadeInUpSequence = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                {/* Top intro section */}
                <motion.div
                    className="hero-intro"
                    {...fadeInUpSequence}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                >
                    <p className="intro-text">
                        Hi, I'm <strong>Abin P Anil</strong>, Full-Stack Developer.
                    </p>
                </motion.div>

                {/* Large tagline with mixed font weights */}
                <motion.div
                    className="hero-title-section"
                    {...fadeInUpSequence}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                    <h1 className="hero-main-title">
                        <span className="title-bold">Building scalable,</span>{' '}
                        <span className="title-bold">secure,</span>{' '}
                        <span className="title-light">production-ready</span>{' '}
                        <span className="title-light">web applications.</span>
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
