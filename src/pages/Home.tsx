import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import profile from '../images/dp.jpg';
import whispercodeImg from '../images/whispercode.png';
import swiftselectImg from '../images/swiftselect.png';

// Components
import SectionTransition from '../components/ui/SectionTransition';

const projects = [
  {
    title: 'WhisperCode',
    description: 'A voice-powered VS Code extension that converts speech to code, leveraging Typescript, Whisper for transcription and OpenAI for code generation. Supports multiple programming languages and enhances hands-free coding productivity.',
    technologies: ['Typescript', 'OpenAI APIs'],
    image: whispercodeImg,
  },
  {
    title: 'SwiftSelect',
    description: 'An AI powered recruitment platform that helps companies find the best candidates for their open positions based on sentence textual matching and analysis.',
    technologies: ['Next.js', 'Typescript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: swiftselectImg,
  },
];

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 52,
    rotateX: -30,
    scaleY: 0.86,
    transformOrigin: 'bottom center',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scaleY: 1,
    transformOrigin: 'bottom center',
  },
};

// Fire as soon as the block starts entering view; positive bottom margin extends the
// intersection root so the animation begins before the user reaches the section edge.
const revealViewport = {
  once: true,
  amount: 'some' as const,
  margin: '0px 0px 32% 0px',
} as const;

// Featured block: start animating even earlier so nothing feels “empty” under About.
const revealViewportFeatured = {
  once: true,
  amount: 'some' as const,
  margin: '0px 0px 45% 0px',
} as const;

const revealTransition = {
  duration: 0.42,
  ease: [0.2, 0.95, 0.25, 1] as const,
};

const Home = () => {
  return (
    <SectionTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 md:pt-0">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="section-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="inline-block text-primary-600 dark:text-primary-400 font-medium mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hello, I'm
              </motion.span>
              
              <motion.h1 
                className="font-bold text-4xl sm:text-5xl md:text-6xl text-dark-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Subramanya Jagadeesh
              </motion.h1>
              
              <motion.h2 
                className="text-lg sm:text-xl text-dark-600 dark:text-dark-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Full-Stack Software Engineer with a knack for efficiency and scalability.
              </motion.h2>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/about" className="btn-primary group">
                  <span>View My Work</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-dark-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-dark-600 dark:text-dark-300 text-sm mb-2">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="text-primary-600 dark:text-primary-400" size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section — slightly less bottom padding before Featured */}
      <section className="section pb-10 sm:pb-12 md:pb-14">
        <motion.div
          className="container-custom"
          style={{ perspective: 1200 }}
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={revealTransition}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I am a full-stack software engineer focused on building reliable products with clean UI and high performance.
                My background spans frontend architecture, backend APIs, and AI-enabled workflows, with a strong emphasis on usability.
              </p>
            </div>
            <div className="project-card">
              <div className="project-card-body">
                <h3 className="project-card-title">Career Highlights</h3>
                <ul className="mt-3 space-y-2 text-sm text-dark-700 dark:text-dark-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2 mt-1.5"></span>
                    6+ years across product engineering and full-stack development.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2 mt-1.5"></span>
                    Strong experience in React, Java/Spring, Python/FastAPI, and cloud workflows.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2 mt-1.5"></span>
                    Built and optimized systems for scalability, performance, and developer productivity.
                  </li>
                </ul>
                <Link to="/about" className="btn-secondary mt-5 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section — tighter top gap + earlier reveal after About */}
      <section className="pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-12">
        <motion.div
          className="container-custom"
          style={{ perspective: 1200 }}
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewportFeatured}
          transition={revealTransition}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-dark-600 dark:text-dark-300 section-content">
              A selection of my recent work. These projects showcase my skills and approach to solving problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            
                {projects.map((project) => (
                    <motion.div 
                    className="project-card group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    key={project.title}
                  >
                        <div className="project-card-media">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="project-card-body">
                            <div className="flex items-start justify-between gap-4">
                            <h3 className="project-card-title">{project.title}</h3>
                            <div className="project-card-actions" role="group" aria-label="Project links">
                                <a href="#" className="project-card-action" aria-label="GitHub">
                                <Github size={18} strokeWidth={1.75} />
                                </a>
                                <a href="#" className="project-card-action" aria-label="External link">
                                <ExternalLink size={18} strokeWidth={1.75} />
                                </a>
                            </div>
                            </div>
                            <p className="project-card-desc line-clamp-4">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {project.technologies.map((technology) => (
                                    <span key={technology} className="project-tag">{technology}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/projects" className="btn-secondary inline-flex items-center">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <motion.div
          className="container-custom"
          style={{ perspective: 1200 }}
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={revealTransition}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <p className="text-dark-600 dark:text-dark-300 section-content">
              I specialize in a range of technologies and methodologies to deliver high-quality software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill 1 */}
            <motion.div 
              className="project-card hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-card-body">
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" /><path d="m13 11 2 2 4-4" /></svg>
                </div>
                <h3 className="project-card-title">Full Stack Development</h3>
                <p className="project-card-desc">
                  Building responsive web applications with modern frameworks and libraries. Creating seamless user experiences across devices.
                </p>
              </div>
            </motion.div>

            {/* Skill 2 */}
            <motion.div 
              className="project-card hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-card-body">
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <h3 className="project-card-title">DevOps & Cloud</h3>
                <p className="project-card-desc">
                  Implementing CI/CD pipelines and infrastructure as code. Deploying and managing applications in the cloud.
                </p>
              </div>
            </motion.div>

            {/* Skill 3 */}
            <motion.div 
              className="project-card hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-card-body">
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                </div>
                <h3 className="project-card-title">AI enabled applications</h3>
                <p className="project-card-desc">
                  Developing applications that are powered by AI to solve real-world problems.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <motion.div
          className="container-custom"
          style={{ perspective: 1200 }}
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={revealTransition}
        >
          <div className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-dark-600 dark:text-dark-300 section-content mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </SectionTransition>
  );
};

export default Home;