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

// Staggered fade animation for chips
const chipReveal = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
        },
    },
    viewport: { once: true, margin: "-60px" },
};

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <motion.div className="skills-header" {...scrollReveal}>
                    <div className="section-label">
                        <span>Skills</span>
                    </div>
                    <h2 className="skills-title">Tech Stack</h2>
                </motion.div>

                <div className="tech-chips">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="tech-chip"
                            {...chipReveal}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                                ease: [0.33, 1, 0.68, 1],
                            }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
