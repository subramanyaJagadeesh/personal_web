import React from 'react';
import { Pulse } from './Pulse';
import Skills from './Skills';

const list = [
  {
    position: "primary",
    duration: "May 2024 - Present",
    company: "Sun-net Inc",
    role: "Full-Stack Software Engineer Intern",
    tasks: [
      "Rapidly onboarded and contributed to product development within the first week.",
      "Developed and deployed GraphQL APIs with Java SpringBoot, enhancing product functionality.",
      "Implemented frontend features using HTML5 and CSS3 for multiple clients.",
      "Actively involved in product development and optimization, focusing on both front-end and back-end solutions."
    ]
  },
  {
    position: "secondary",
    duration: "Oct 2021 - Jul 2023",
    company: "UpGrad",
    role: "Senior Software Engineer",
    tasks: [
      "Led the migration of a service from a monolithic architecture to a Java Spring Boot microservice, reducing API response times from 1.5s to under 200ms.",
      "Optimized SQL queries and reduced execution times significantly, improving system performance.",
      "Enhanced the organization's web application (React) through refactoring, optimizing computations, memoizing data, and implementing code-splitting and lazy loading techniques, resulting in a significant reduction of 30% (2s) in load times.",
      "Led the unit testing efforts for the frontend (react-testing) and backend (JUnit) applications thereby covering 90% of the codebase, further enhancing the robustness of the application."
    ]
  },
  {
    position: "secondary",
    duration: "Nov 2020 - Sep 2021",
    company: "Khoros",
    role: "Software Engineer",
    tasks: [
      "Learned Scala and developed a suite of efficient APIs with Finatra, GraphQL and PostgreSQL within 2 weeks, further deployed them on containers using Docker orchestrated via Kubernetes.",
      "Worked with a team of 2 to translate legacy JS features into fast, robust and responsive Typescript React"
    ]
  },
  {
    position: "secondary",
    duration: "Jun 2019 - Jul 2020",
    company: "Royal Brothers",
    role: "Full-Stack Developer",
    tasks: [
      "Learned new frameworks like React and Rails in a mere couple weeks.",
      "Worked on the whole stack of the company's web app (React (UI), Rails(APIs), Postgres).",
      "Developed and tested robust and performance-oriented features for the web app.",
      "Also had the opportunity to build the company's mobile apps, built on React-Native.",
      "In the beginning, solely contributed to the development, testing, and publishing of the said mobile apps.",
      "Had a thorough understanding of the company's products in less than 2 months."
    ]
  },
  {
    position: "secondary",
    duration: "Jun 2018 - Dec 2019",
    company: "Woke Cartel",
    role: "Co-Founder",
    tasks: [
      "Learned frameworks like Vue and Express in a short amount of time.",
      "Developed, tested and published 2 main products for the company.",
      "1. A Content Management System (CMS) to provide CRUD operations on data that it provides.",
      "2. A digital sports media website, which receives its content from the CMS.",
      "Deployed the 2 applications on Digital Ocean, with the help of nginx and pm2."
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience-container">
        <div className="info">
          <div className="header">
            <h3>
              Experience.
            </h3>
          </div>
          {
            list.map(elem =>
              <div key={elem.position} className={"list "}>
                <div className='item'>
                  <div className="item-bullet">
                    <Pulse />
                    <div className="line" />
                  </div>
                  <div className="item-info">
                    <h2>
                      {elem.company}
                    </h2>
                    <h3>
                      {elem.duration}
                    </h3>

                    <h3>
                      {elem.role}
                    </h3>
                    {
                      elem.tasks.map(task =>
                        <li key={task}>
                          {task}
                        </li>
                      )
                    }
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="hor" />
    </div>
  )
}

export default Experience;
