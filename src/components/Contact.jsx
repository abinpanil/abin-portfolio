import { motion } from 'framer-motion';
import { scrollReveal } from '../utils/animations';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <motion.div className="contact-content" {...scrollReveal}>
                    <div className="section-label">
                        <span>Contact</span>
                    </div>

                    <h2 className="contact-title">Get In Touch</h2>

                    <p className="contact-description">
                        Looking to build, fix, or scale a web application?
                    </p>

                    <div className="contact-links">
                        <a href="mailto:abinpanil9@gmail.com" className="contact-link">
                            <span className="link-label">Email</span>
                            <span className="link-value">abinpanil9@gmail.com</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 16L16 4M16 4H6M16 4V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        <a href="https://github.com/abinpanil" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span className="link-label">GitHub</span>
                            <span className="link-value">github.com/abinpanil</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 16L16 4M16 4H6M16 4V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/abin-p-anil/" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span className="link-label">LinkedIn</span>
                            <span className="link-value">linkedin.com/in/abin-p-anil</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 16L16 4M16 4H6M16 4V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </motion.div>

                <footer className="footer">
                    <p>&copy; 2026 Abin P Anil. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
