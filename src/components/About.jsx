import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

// Component for scroll-linked paragraph reveal
const ScrollRevealParagraph = ({ text }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.25"]
    });

    // Split text into words for granular control
    const words = text.split(" ");

    return (
        <p ref={containerRef} className="about-intro">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);

                return (
                    <Word key={i} children={word} range={[start, end]} progress={scrollYProgress} />
                );
            })}
        </p>
    );
};

const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (
        <span style={{ display: 'inline-block', marginRight: '0.25em' }}>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

// Calm, editorial animation - fade in with focus effect
const timelineItemReveal = {
    initial: { opacity: 0.2, filter: 'blur(1px)' },
    whileInView: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
    viewport: { margin: "-20% 0px -20% 0px" }, // Highlight when in the middle 60% of screen
};

const About = () => {
    const introText = "I'm a senior full-stack developer with hands-on experience building and maintaining production web applications. My work focuses on backend reliability, secure APIs, and clean, scalable frontend architectures.";

    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.div className="about-header" {...scrollReveal}>
                    <div className="section-label">
                        <span>About</span>
                    </div>

                    <ScrollRevealParagraph text={introText} />

                    <h2 className="about-title">Areas of Expertise</h2>
                </motion.div>

                <div className="timeline">
                    {experiences.map((experience) => (
                        <motion.div
                            key={experience.id}
                            className="timeline-item"
                            {...timelineItemReveal}
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
