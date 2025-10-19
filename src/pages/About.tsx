import { motion } from 'framer-motion';

// Components
import SectionTransition from '../components/ui/SectionTransition';

const About = () => {
	const experiences = [
		{
			company: "Sun-net Inc",
			role: "Software Engineer",
			period: "June 2025 - Present",
			description: "At Sun-Net, a company specializing in software solutions for the utlitiy industry, I contributed to enhancing their product called Intelligent Tools of Operation and Analytics. I optimized query resolution times by 90% by integrating an Agentic AI chat bot UI written in React and SCSS. Additionally, I implemented REST APIs with Java Spring for core services and Python Fast API for RAG and agent based chat to streamline data access." ,
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

	const skills = [
		{
			category: 'Frontend',
			skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS', 'Redux', 'Context API', 'Hooks']
		},
		{
			category: 'Backend',
			skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Python', 'FastAPI', 'Flask', 'Django', 'GraphQL', 'REST APIs']
		},
		{
			category: 'DevOps & Cloud',
			skills: ['AWS', 'Heroku', 'Vercel', 'Firebase', 'Docker', 'Kubernetes', 'Jenkins', 'Git']
		},
		{
			category: 'Testing',
			skills: ['JUnit', 'Jest', 'Enzyme', 'React Testing Library', 'Mocha']
		},
		{
			category: 'Other',
			skills: ['Agile', 'Scrum', 'Jira', 'Figma', 'Sentry', 'Instana', 'Grafana', 'Gradle', 'Maven', 'Postman', 'Webpack', 'ChatGPT', 'Cursor']
		}
	]

	return (
		<SectionTransition>
			{/* Hero Section */}
			<section className="pt-32 pb-16 md:pt-40 md:pb-20">
				<div className="container-custom">
					<div className="flex flex-col lg:flex-row items-center gap-12">
						<motion.div 
							className="w-full lg:w-1/2"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
							<p className="text-dark-600 dark:text-dark-300 text-lg mb-6 leading-relaxed">
								With a rich background in both front-end and back-end technologies, I have rapidly contributed to and enhanced multiple high-scale projects. My expertise spans developing resilient APIs to optimizing user interfaces for enhanced performance. I excel in environments that challenge my abilities and allow for growth through cutting-edge technologies.
							</p>
							<p className="text-dark-600 dark:text-dark-300 text-lg mb-8 leading-relaxed">
								I believe in continuous learning and staying up-to-date with the latest technologies and best practices. 
								My goal is to build software that not only meets functional requirements but also provides an exceptional user experience.
							</p>
						</motion.div>
						
						<motion.div 
							className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<img 
								src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
								alt="Profile" 
								className="w-full h-auto object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="section bg-dark-50 dark:bg-dark-800">
				<div className="container-custom">
					<h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
					
					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<motion.div 
								key={index}
								className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-md"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="flex flex-wrap justify-between items-start mb-4">
									<div>
										<h3 className="text-xl font-semibold">{exp.role}</h3>
										<p className="text-primary-600 dark:text-primary-400">{exp.company}</p>
									</div>
									<span className="text-dark-500 dark:text-dark-400 text-sm bg-dark-100 dark:bg-dark-700 px-3 py-1 rounded-full">
										{exp.period}
									</span>
								</div>
								<p className="text-dark-600 dark:text-dark-300 mb-4">
									{exp.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{exp.technologies.map((tech, i) => (
										<span 
											key={i}
											className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 text-xs rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Education Section */}
			<section className="section">
				<div className="container-custom">
					<h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
					
					<div className="space-y-8 max-w-3xl mx-auto">
						{education.map((edu, index) => (
							<motion.div 
								key={index}
								className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-md"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div className="flex flex-wrap justify-between items-start mb-4">
									<div>
										<h3 className="text-xl font-semibold">{edu.degree}</h3>
										<p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
									</div>
									<span className="text-dark-500 dark:text-dark-400 text-sm bg-dark-100 dark:bg-dark-700 px-3 py-1 rounded-full">
										{edu.year}
									</span>
								</div>
								<p className="text-dark-600 dark:text-dark-300">
									{edu.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="section bg-dark-50 dark:bg-dark-800">
				<div className="container-custom">
					<h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Skill Category 1 */}
						{skills.map((skill, index) => (
							<motion.div 
								key={index}
								className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-md"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">{skill.category}</h3>
								<ul className="space-y-2">
									{skill.skills.map((skill, index) => (
										<li key={index} className="flex items-center">
											<span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></span>
											<span>{skill}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</SectionTransition>
	);
};

export default About;