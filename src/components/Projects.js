import React from 'react';
import { Pulse } from './Pulse'; // Assuming Pulse is a component used for animated effects

const projects = [
  {
    title: "Distributed Task Scheduler",
    description: "Built the scheduling algorithm in C++ for a task scheduler that allocates work across distributed nodes on a network.",
    year: "2024",
    link: "https://github.com/275-challenge-project-2024/scheduler-algorithm"
  },
  {
    title: "Paxos with Neurelo",
    description: "Implemented Multi-Decree Paxos protocol in Python leveraging Neurelo’s Data Access APIs to store and retrieve messages in a remote Postgres Instance.",
    year: "2024",
    link: "https://github.com/subramanyaJagadeesh/paxos-with-neurelo"
  },
  {
    title: "Theatre Management",
    description: "Built a theatre management system with 3 group members. Solely deployed the entire application to AWS; Flask Server on EC2 (ELB attached) and React app on S3.",
    year: "2023",
    link: "https://github.com/subramanyaJagadeesh/teamproject-nullpointer"
  },
  {
    title: "Consistent hashing",
    description: "Designed a distributed consistent hashing system with ring structure rebalancing to provide fault-tolerance",
    year: "2023",
    link: "https://github.com/subramanyaJagadeesh/consistent_hashing_cmpe_273"
  },
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
