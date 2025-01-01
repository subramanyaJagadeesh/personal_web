import React from 'react';
import { Pulse } from './Pulse'; // Assuming Pulse is a component used for animated effects

const projects = [
  {
    title: "Crime Visualization with GPT",
    description: "Engineered a RAG system using FAISS which uses LA’s crime data as its source and further leverages OpenAI Apis to get results in the form of text or json for charting so that users can visualize the results for their crime queries.",
    year: "2024",
    link: "https://github.com/prithvipratahkal/Crime-Chronicles-Explore-Query-and-Visualize-LA-s-Crime-Data"
  },
  {
    title: "TaxGPT",
    description: "Developed a tax assistant application using Ollama, where I designed a FastAPI backend to handle communication with the AI model. Additionally, built a user interface using Vanilla JS, HTML, CSS3, and Bootstrap, providing a smooth, user-friendly experience. To maintain conversational continuity, Integrated a context storage system in an in-memory SQLite database, allowing users to return to previous interactions and pick up the conversation seamlessly. This project demonstrated my ability to create cohesive full-stack applications with memory management and context-aware AI integrations.",
    year: "2024",
    link: "https://github.com/subramanyaJagadeesh/taxGPT"
  },
  {
    title: "Distributed Task Scheduler",
    description: "Led the design and development of a scheduling algorithm in C++ for a distributed task scheduler in a class-wide project. Provided foundational architecture to peers, guiding the system's build and ensuring effective task distribution across network nodes. Collaborated with classmates on integrating the scheduler, iterating on design feedback to achieve efficient load balancing and scalability. Successfully implemented the scheduler, demonstrating reliable performance across distributed nodes, contributing to the overall success of the system.",
    year: "2024",
    link: "https://github.com/275-challenge-project-2024/scheduler-algorithm"
  },
  {
    title: "Paxos with Neurelo",
    description: "In a personal project, Implemented the Multi-Decree Paxos protocol using Python, integrating Neurelo's Data Access APIs to facilitate message storage and retrieval from a remote PostgreSQL instance. The challenge was in understanding the nuances of the Paxos protocol and adapting it for efficient communication with a remote database, which acted as a message queue. This experience honed my problem-solving skills as I navigated complex distributed systems and ensured robust message handling across nodes using the PostgreSQL queue.",
    year: "2024",
    link: "https://github.com/subramanyaJagadeesh/paxos-with-neurelo"
  },
  {
    title: "Theatre Management",
    description: "Led the architecture and deployment of a theatre management system, working with three group members. Further, deployed the Flask server on an AWS EC2 instance, attaching an ELB for load balancing, and hosted the React frontend on S3. Took charge of developing the frontend application while mentoring a teammate in React.js. Additionally, Contributed to the backend by designing and implementing several key APIs. This project demonstrated my leadership, technical skills, and ability to collaborate in a team environment.",
    year: "2023",
    link: "https://github.com/subramanyaJagadeesh/teamproject-nullpointer"
  },
  {
    title: "Consistent hashing",
    description: "Led the design and architecture of a distributed consistent hashing system with a ring structure, ensuring fault-tolerance and efficient rebalancing of nodes in the network. In addition to the architecture, developed the gateway responsible for managing communication between all the nodes. Also implemented the gRPC communication protocol, allowing for seamless interaction and data transfer between the distributed components. This project highlighted my ability to design fault-tolerant systems and leverage distributed computing principles to achieve scalable and resilient architectures.",
    year: "2023",
    link: "https://github.com/subramanyaJagadeesh/consistent_hashing_cmpe_273"
  }
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <div className="info">
            <div className="header">
                <h3>
                Projects.
                </h3>
            </div>
          {projects.map((project, index) => (
            <div key={index} className="list primary">
              <div className="item">
                <div className="item-bullet">
                  <Pulse />
                  <div className="line" />
                </div>
                <div className="item-info">
                  <h2>{project.title}</h2>
                  <h3>{project.year} (more on {<a href={project.link}>here</a>})</h3>
                  <li>{project.description}</li>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hor" />
    </div>
  );
};

export default Projects;
