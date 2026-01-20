import { motion } from 'framer-motion';
import { scrollReveal } from '../utils/animations';
import './Contact.css';

const contactMethods = [
    {
        id: 1,
        label: 'Send an Email',
        value: 'abinpanil9@gmail.com',
        href: 'mailto:abinpanil9@gmail.com',
    },
    {
        id: 2,
        label: 'Connect on LinkedIn',
        value: 'linkedin.com/in/abin-p-anil',
        href: 'https://www.linkedin.com/in/abin-p-anil/',
    },
    {
        id: 3,
        label: 'View on GitHub',
        value: 'github.com/abinpanil',
        href: 'https://github.com/abinpanil',
    },
];

// Staggered card reveal animation
const cardReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
        },
    },
    viewport: { once: true, margin: "-60px" },
};

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <motion.div className="contact-content" {...scrollReveal}>
                    {/* Large title with mixed weights */}
                    <h2 className="contact-title">
                        <span className="title-light">Let's</span>{' '}
                        <span className="title-bold">Connect</span>
                    </h2>

                    {/* Engaging subtitle */}
                    <p className="contact-subtitle">
                        Open to new opportunities and collaborations
                    </p>

                    {/* Contact cards */}
                    <div className="contact-cards">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.id}
                                href={method.href}
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="contact-card"
                                {...cardReveal}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.33, 1, 0.68, 1],
                                }}
                                whileHover={{
                                    y: -4,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <span className="card-label">{method.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <footer className="footer">
                    <div className="footer-left">
                        <p>Last updated, January 2026</p>
                    </div>
                    <div className="footer-right">

                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
