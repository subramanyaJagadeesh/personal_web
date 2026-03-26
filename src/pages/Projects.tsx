import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
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
  const projects = useMemo<Project[]>(
    () => [
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
    ],
    []
  );

  return (
    <SectionTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom relative z-10">
          <motion.div 
            className="section-content text-center"
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
      <section className="section">
        <div className="container-custom">
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                  <motion.div
                    key={project.title}
                    className="project-card group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
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
                          <a
                            href={project.github}
                            className="project-card-action"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code on GitHub"
                          >
                            <Github size={18} strokeWidth={1.75} />
                          </a>
                        </div>
                      </div>
                      <p className="project-card-desc line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((tag, index) => (
                          <span key={index} className="project-tag">
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