import { motion } from 'framer-motion';
import { scrollReveal } from '../utils/animations';
import './Work.css';

// Resume-based project cards - factual content only
const projects = [
    {
        id: 1,
        subtitle: 'Secure Backend Systems',
        description: 'Backend services built to handle sensitive application data with security, encryption, and controlled access.',
        tech: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'AWS'],
    },
    {
        id: 2,
        subtitle: 'Monitoring & Automation Dashboards',
        description: 'Frontend dashboards developed for system monitoring, automation workflows, and operational visibility.',
        tech: ['React', 'Redux', 'MUI', 'Grafana', 'Prometheus'],
    },
    {
        id: 3,
        subtitle: 'SaaS Admin Applications',
        description: 'Web-based admin panels supporting user management, role-based access control, and analytics views.',
        tech: ['React', 'Zustand', 'MUI', 'REST APIs'],
    },
];

// Staggered scroll reveal for cards
const cardReveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.33, 1, 0.68, 1],
        },
    },
    viewport: { once: true, margin: "-80px" },
};

const Work = () => {
    return (
        <section id="work" className="work">
            <div className="work-container">
                <motion.div className="work-header" {...scrollReveal}>
                    <div className="section-label">
                        <span>Experience</span>
                    </div>
                    <h2 className="work-title">Featured Projects</h2>
                </motion.div>

                <div className="work-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            {...cardReveal}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: [0.33, 1, 0.68, 1],
                            }}
                        >
                            <h3 className="project-subtitle">{project.subtitle}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
