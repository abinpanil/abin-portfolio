import { motion } from 'framer-motion';
import { scrollReveal } from '../utils/animations';
import './Skills.css';

// Tech stack - core technologies
const technologies = [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'React',
    'PostgreSQL',
    'Redis',
    'Docker',
    'AWS',
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <motion.div className="skills-header" {...scrollReveal}>
                    <div className="section-label">
                        <span>Expertise</span>
                    </div>
                    <h2 className="skills-title">Tech Stack</h2>
                </motion.div>

                <div className="skills-list">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="skill-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                                ease: [0.33, 1, 0.68, 1],
                            }}
                        >
                            <span className="skill-name">{tech}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
