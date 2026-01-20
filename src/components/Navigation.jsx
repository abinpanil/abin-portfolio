import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInDown } from '../utils/animations';
import './Navigation.css';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Add 'scrolled' class when user scrolls past 50px
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className={`navigation ${isScrolled ? 'scrolled' : ''}`}
            {...fadeInDown}
            transition={{ delay: 0.2, duration: 0.6 }}
        >
            <div className="nav-container">
                <motion.div
                    className="nav-logo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <button onClick={() => scrollToSection('hero')}>Abin P Anil</button>
                </motion.div>

                <ul className="nav-links">
                    <li>
                        <button onClick={() => scrollToSection('about')}>About</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('work')}>Work</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('skills')}>Skills</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')}>Contact</button>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navigation;

