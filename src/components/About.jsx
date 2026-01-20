import { motion } from 'framer-motion';
import { scrollReveal } from '../utils/animations';
import './About.css';

// Resume-based experience timeline - factual content only
const experiences = [
    {
        id: 1,
        heading: 'Backend & API Development',
        description: 'Designed and maintained backend services using Node.js, NestJS, and Express, focusing on clean code, performance, and secure REST API design.',
    },
    {
        id: 2,
        heading: 'Frontend Application Development',
        description: 'Built and supported React-based web applications, including dashboards and admin panels, using Redux Toolkit, Zustand, and modern UI libraries.',
    },
    {
        id: 3,
        heading: 'Cloud Deployment & DevOps',
        description: 'Deployed and managed applications on AWS using Docker, NGINX, and CI/CD pipelines to support reliable production environments.',
    },
    {
        id: 4,
        heading: 'Security & Access Control',
        description: 'Implemented authentication, authorization, and role-based access control systems to manage users, roles, and permissions.',
    },
    {
        id: 5,
        heading: 'Testing & Code Quality',
        description: 'Used automated testing and code quality tools to ensure application stability and maintainability in production systems.',
    },
];

// Calm, editorial animation - fade in with slight slide from left
const timelineItemReveal = {
    initial: { opacity: 0, x: -30 },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
        },
    },
    viewport: { once: true, margin: "-60px" },
};

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.div className="about-header" {...scrollReveal}>
                    <div className="section-label">
                        <span>Experience</span>
                    </div>
                    <h2 className="about-title">Areas of Expertise</h2>
                </motion.div>

                <div className="timeline">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            className="timeline-item"
                            {...timelineItemReveal}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                                ease: [0.33, 1, 0.68, 1],
                            }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3 className="timeline-heading">{experience.heading}</h3>
                                <p className="timeline-description">{experience.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
