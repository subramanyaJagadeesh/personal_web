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
const Home = () => {
  return (
    <SectionTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="inline-block text-primary-600 dark:text-primary-400 font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hello, I'm
              </motion.span>
              
              <motion.h1 
                className="font-bold text-5xl sm:text-6xl md:text-7xl text-dark-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Subramanya Jagadeesh
              </motion.h1>
              
              <motion.h2 
                className="text-xl sm:text-2xl text-dark-600 dark:text-dark-300 mb-8 leading-relaxed"
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
                <Link to="/projects" className="btn-primary group">
                  <span>View My Work</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-dark-800"
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
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

      {/* Featured Projects Section */}
      <section className="section bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              A selection of my recent work. These projects showcase my skills and approach to solving problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            
                {projects.map((project) => (
                    <motion.div 
                    className="bg-white dark:bg-dark-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    key={project.title}
                  >
                        <div className="h-64 bg-dark-200 dark:bg-dark-700 relative overflow-hidden">
                            <img 
                                src={project.image} 
                                alt="Project thumbnail" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <div className="flex space-x-2">
                                <a href="#" className="text-dark-600 hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400 transition-colors">
                                <Github size={20} />
                                </a>
                                <a href="#" className="text-dark-600 hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400 transition-colors">
                                <ExternalLink size={20} />
                                </a>
                            </div>
                            </div>
                            <p className="text-dark-600 dark:text-dark-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 text-xs rounded-full">{technology}</span>
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
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              I specialize in a range of technologies and methodologies to deliver high-quality software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill 1 */}
            <motion.div 
              className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-md hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" /><path d="m13 11 2 2 4-4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
              <p className="text-dark-600 dark:text-dark-300">
                Building responsive web applications with modern frameworks and libraries. Creating seamless user experiences across devices.
              </p>
            </motion.div>

            {/* Skill 2 */}
            <motion.div 
              className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-md hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">DevOps & Cloud</h3>
              <p className="text-dark-600 dark:text-dark-300">
                Implementing CI/CD pipelines and infrastructure as code. Deploying and managing applications in the cloud.
              </p>
            </motion.div>

            {/* Skill 3 */}
            <motion.div 
              className="bg-white dark:bg-dark-900 p-6 rounded-lg shadow-md hover-lift"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI enabled applications</h3>
              <p className="text-dark-600 dark:text-dark-300">
                Developing applications that are powered by AI to solve real-world problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 dark:bg-primary-900">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </SectionTransition>
  );
};

export default Home;