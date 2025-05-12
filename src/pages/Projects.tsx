import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';

// Components
import SectionTransition from '../components/ui/SectionTransition';

// Import images
import whispercodeImg from '../images/whispercode.png';
import swiftselectImg from '../images/swiftselect.png';
import taxgptImg from '../images/taxgpt.png';
import schedulerImg from '../images/scheduler.png';
import consistentImg from '../images/consistent.png';

// Define project type
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
}

const Projects = () => {
  
  // Sample projects data
  const projects: Project[] = [
    {
			title: 'WhisperCode',
			description: 'A voice-powered VS Code extension that converts speech to code using Typescript, Whisper for transcription and OpenAI for code generation. Enhances productivity through hands-free coding across multiple programming languages.',
			technologies: ['Typescript', 'OpenAI APIs'],
			image: whispercodeImg,
			github: 'https://github.com/subramanyaJagadeesh/whispercode',
    },
    {
			title: 'SwiftSelect',
			description: 'An AI-powered recruitment platform that helps companies find the best candidates through advanced textual matching and analysis. Streamlines the hiring process with intelligent candidate screening.',
			technologies: ['Next.js', 'Typescript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],  
			github: 'https://github.com/subramanyaJagadeesh/swiftselect',
			image: swiftselectImg,
    },
		{
			title: "TaxGPT",
			description: "A tax assistant application built with Ollama and FastAPI, featuring a user-friendly interface. Implements context-aware conversations with SQLite storage for seamless interaction continuity.",
			github: "https://github.com/subramanyaJagadeesh/taxGPT",
			image: taxgptImg,
			technologies: ['FastAPI', 'SQLite', 'Vanilla JS', 'HTML', 'CSS3', 'Bootstrap'],
		},
		{
			title: "Distributed Task Scheduler",
			description: "Led the development of a C++ scheduling algorithm for distributed task management. Implemented efficient load balancing and node communication, ensuring reliable performance across distributed systems.",
			github: "https://github.com/275-challenge-project-2024/scheduler-algorithm",
			image: schedulerImg,
			technologies: ['C++', 'Distributed Computing', 'Load Balancing', 'Network Programming'],
		},
		{
			title: "Consistent hashing",
			description: "Designed and implemented a distributed consistent hashing system with ring structure for fault tolerance. Developed a gateway for node communication and implemented gRPC protocol for efficient data transfer.",
			github: "https://github.com/subramanyaJagadeesh/consistent_hashing_cmpe_273",
			image: consistentImg,
			technologies: ['Python', 'Distributed Computing', 'Network Programming'],
		}
  ];

  return (
    <SectionTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-dark-600 dark:text-dark-300 text-lg mb-8">
              A collection of my work across various domains including web development, 
              mobile applications, machine learning, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          {/* Category Filter */}

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map(project => (
                <motion.div
                  key={project.title}
                  className="bg-white dark:bg-dark-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="h-48 bg-dark-200 dark:bg-dark-700 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex space-x-2">
                        <a 
                          href={project.github}
                          className="text-dark-600 hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code on GitHub"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </SectionTransition>
  );
};

export default Projects;