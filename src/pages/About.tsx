import { motion } from 'framer-motion';

// Components
import SectionTransition from '../components/ui/SectionTransition';
import SkillsWordCloud from '../components/ui/SkillsWordCloud';

/** Source list for skills (flattened into a unique word list for the 3D cloud). */
const SKILL_CATEGORIES = [
	{
		category: 'Frontend',
		skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS', 'Redux', 'Context API', 'Hooks'],
	},
	{
		category: 'Backend',
		skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Python', 'FastAPI', 'Flask', 'Django', 'GraphQL', 'REST APIs'],
	},
	{
		category: 'DevOps & Cloud',
		skills: ['AWS', 'Heroku', 'Vercel', 'Firebase', 'Docker', 'Kubernetes', 'Jenkins', 'Git'],
	},
	{
		category: 'Testing',
		skills: ['JUnit', 'Jest', 'Enzyme', 'React Testing Library', 'Mocha'],
	},
	{
		category: 'Other',
		skills: ['Agile', 'Scrum', 'Jira', 'Figma', 'Sentry', 'Instana', 'Grafana', 'Gradle', 'Maven', 'Postman', 'Webpack', 'ChatGPT', 'Cursor'],
	},
] as const;

const About = () => {
	const experiences = [
		{
			company: "Sun-net Inc",
			role: "Software Engineer",
			period: "June 2025 - Present",
			description: "Built agent-based reporting and metadata intelligence tools that convert natural-language prompts into rich reports and schema definitions, reducing report development effort by 90%, generation time by 40%, and metadata effort by 60%. Developed Java Spring and Python FastAPI services for core workflows and agentic RAG retrieval, enabling sub-200ms responses. Architected a real-time SSE notification service for 10,000+ utility users and led production monitoring, incident response, and RCA to improve reliability.",
			technologies: ['HTML', 'SCSS', 'Javascript', 'Java', 'React', 'Python', 'FastAPI', 'SQL']
		},
		{
			company: 'Sun-net Inc',
			role: 'Full-Stack Software Engineer Intern',
			period: 'May 2024 - May 2025',
			description: "By developing key UI features using Javascript and React, I enabled clients to customize their interfaces based on specific requirements, improving user experience. I designed SQL scripts for database customizations, reducing deployment times and supporting client-specific configurations." ,
			technologies: ['HTML', 'SCSS', 'Javascript', 'Java', 'React', 'Python', 'FastAPI', 'SQL']
		},
		{
			company: 'Upgrad',
			role: 'Senior Software Engineer',
			period: 'Oct 2021 - Jul 2023',
			description: 'UpGrad, a leading online higher education platform, allowed me to make a significant impact on the learner experience. In this role, I optimized the Learner Management System’s UI, implementing techniques like memoization, lazy loading, and code-splitting, which cut load times by 50% for 6,000 daily active users. I led the migration of the Learner Progress Service to Spring Boot microservices, resulting in an 80% reduction in latency for real-time course tracking. By optimizing the Notifications Service database, I enhanced query efficiency by 90%, ensuring timely alerts. I also implemented a unit testing strategy across the codebase, achieving over 90% coverage and improving deployment quality. By Implementing CI/CD pipelines using Jenkins, Docker and Kubernetes I reduced the deployment cycles to about 90% providing for faster and issue free builds. Mentoring team members was a rewarding aspect of this role, where I encouraged best practices and contributed to the team’s overall productivity.',
			technologies: ['HTML', 'SCSS', 'React', 'Typescript', 'Java', 'Spring Boot', 'Docker', 'Kubernetes', 'Jenkins', 'MySQL']
		},
		{
			company: 'Khoros',
			role: 'Software Engineer',
			period: 'Nov 2020 - Sep 2021',
			description: 'At Khoros, a global customer engagement company, I worked on critical features of their customer interaction platforms. I developed GraphQL APIs in Scala for Vault, an access governance tool, facilitating one-click access management across social media accounts, which enhanced security and user control. I also helped modernize the Content Center by migrating it to TypeScript React from CoffeeScript and Backbone.js, which improved load times by 80% for 2,000 daily users.',
			technologies: ['React', 'Typescript', 'Scala', 'GraphQL', 'Docker', 'Kubernetes', 'Jenkins', 'PostgreSQL']
		},
		{
			company: 'Royal Brothers',
			role: 'Full-Stack Developer',
			period: 'Jun 2019 - Jul 2020',
			description: 'Working at Royal Brothers, India’s premier motorcycle rental service, I developed and deployed key updates for their React Native app, which supported 4,000 daily active users. This role required a hands-on approach to full-stack development, ensuring a seamless user experience for customers utilizing the platform for short- and long-term bike rentals across multiple Indian cities.',
			technologies: ['React Native', 'Javascript', 'Ruby', 'MongoDB']
		},
		{
			company: 'Cartel Group',
			role: 'Co-Founder',
			period: 'Aug 2018 - May 2019',
			description: 'Founded a creative agency catering to variety of needs a business requires, from ideation to building the final product. Here, I quickly learned frameworks like Nuxt.js and Express to develop, test, and publish two main products for the company. The first was a Content Management System (CMS) enabling CRUD operations, which served as the content source for the second product—a digital sports media website. I deployed both applications, with the frontend on Digital Ocean and backend functionalities using Firebase functions.',
			technologies: ['Vue.js', 'Node.js', 'Nuxt.js', 'Express', 'Firebase', 'Digital Ocean', 'MongoDB']
		},
	];

	const education = [
		{
			degree: 'Master of Science in Software Engineering (GPA: 3.9)',
			institution: 'San Jose State University',
			year: '2025',
			description: 'Enterprise Distributed Systems, Enterprise Application Development, Cloud Technologies, Web UI Development'
		},
		{
			degree: 'Bachelor of Engineering in Computer and Information Science (GPA: 3.6)',
			institution: 'Visvesvaraya Technological University',
			year: '2019',
			description: 'Data Structures, Algorithms, Object Oriented Programming, Operating Systems, Database Management Systems, Software Engineering, Machine Learning and Software Architecture and Design Principles.'
		}
	];

	return (
		<SectionTransition>
			{/* Hero Section */}
			<section className="pt-32 pb-16 md:pt-40 md:pb-20">
				<div className="container-custom relative z-10">
					<motion.div
						className="section-content text-center lg:text-left"
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
						<p className="text-dark-600 dark:text-dark-300 text-lg mb-6 leading-relaxed">
							Software engineer with experience building intelligent, user-focused products that simplify complex workflows and improve operational efficiency. I’ve worked across product development, system design, and delivery for high-impact applications, with a focus on reliability, scalability, and clear user experience. I enjoy turning ambiguous problems into practical solutions that teams can trust in production.
						</p>
						<p className="text-dark-600 dark:text-dark-300 text-lg mb-8 leading-relaxed">
							I believe in continuous learning and staying up-to-date with the latest technologies and best practices.
							My goal is to build software that not only meets functional requirements but also provides an exceptional user experience.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="section">
				<div className="container-custom">
					<h2 className="section-heading">Work Experience</h2>

					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<motion.div 
								key={index}
								className="project-card group"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								whileHover={{ y: -2 }}
								transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
							>
								<div className="project-card-body">
									<div className="flex flex-wrap items-start justify-between gap-4">
										<div>
											<h3 className="project-card-title">{exp.role}</h3>
											<p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
												{exp.company}
											</p>
										</div>
										<span className="project-card-meta">{exp.period}</span>
									</div>
									<p className="project-card-desc">
										{exp.description}
									</p>
									<div className="mt-4 flex flex-wrap gap-1.5">
										{exp.technologies.map((tech, i) => (
											<span key={i} className="project-tag">
												{tech}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Education Section */}
			<section className="section">
				<div className="container-custom">
					<h2 className="section-heading">Education</h2>
					
					<div className="space-y-8">
						{education.map((edu, index) => (
							<motion.div 
								key={index}
								className="project-card"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="project-card-body">
									<div className="flex flex-wrap justify-between items-start gap-4">
										<div>
											<h3 className="project-card-title">{edu.degree}</h3>
											<p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">{edu.institution}</p>
										</div>
										<span className="project-card-meta">
											{edu.year}
										</span>
									</div>
									<p className="project-card-desc">
										{edu.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Skills — 3D word cloud */}
			<section className="section">
				<div className="container-custom">
					<h2 className="section-heading">Technical Skills</h2>
					<SkillsWordCloud categories={SKILL_CATEGORIES} />
				</div>
			</section>
		</SectionTransition>
	);
};

export default About;
