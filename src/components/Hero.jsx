import { motion } from 'framer-motion';
import './Hero.css';

// Sequential fade-in animations with upward movement
const fadeInUpSequence = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                {/* Name - fades in first */}
                <motion.h1
                    className="hero-name"
                    {...fadeInUpSequence}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                >
                    Abin P Anil
                </motion.h1>

                {/* Role - appears with small delay */}
                <motion.div
                    className="hero-role"
                    {...fadeInUpSequence}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                    <span>Senior Full-Stack Engineer</span>
                </motion.div>

                {/* Tagline - fades in last */}
                <motion.p
                    className="hero-tagline"
                    {...fadeInUpSequence}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    Building scalable, secure, production-ready
                    <br />
                    web applications
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="hero-ctas"
                    {...fadeInUpSequence}
                    transition={{ duration: 0.8, delay: 1.1, ease: [0.33, 1, 0.68, 1] }}
                >
                    <button
                        className="cta-primary"
                        onClick={() => scrollToSection('work')}
                    >
                        View Work
                    </button>
                    <button
                        className="cta-secondary"
                        onClick={() => scrollToSection('contact')}
                    >
                        Get In Touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
