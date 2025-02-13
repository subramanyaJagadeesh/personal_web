import React from 'react';
import { Pulse } from './Pulse';

const list = [
  {
    position: "primary",
    duration: "May 2024 - Present",
    company: "Sun-net Inc",
    role: "Full-Stack Software Engineer Intern",
    tasks: [ "At Sun-Net, a company specializing in software solutions for the power industry, I contributed to enhancing their Intelligent Tools platform. By developing key UI features using TypeScript and React, I enabled clients to customize their interfaces based on specific requirements, improving user experience. Additionally, I implemented GraphQL APIs with Java Spring to streamline data access and designed SQL scripts for database customizations, reducing deployment times and supporting client-specific configurations." ]
  },
  {
    position: "secondary",
    duration: "Oct 2021 - Jul 2023",
    company: "UpGrad",
    role: "Senior Software Engineer",
    tasks: [ "UpGrad, a leading online higher education platform, allowed me to make a significant impact on the learner experience. In this role, I optimized the Learner Management System’s UI, implementing techniques like memoization, lazy loading, and code-splitting, which cut load times by 50% for 6,000 daily active users. I led the migration of the Learner Progress Service to Spring Boot microservices, resulting in an 80% reduction in latency for real-time course tracking. By optimizing the Notifications Service database, I enhanced query efficiency by 90%, ensuring timely alerts. I also implemented a unit testing strategy across the codebase, achieving over 90% coverage and improving deployment quality. Mentoring team members was a rewarding aspect of this role, where I encouraged best practices and contributed to the team’s overall productivity." ]
  },
  {
    position: "secondary",
    duration: "Nov 2020 - Sep 2021",
    company: "Khoros",
    role: "Software Engineer",
    tasks: [
      "At Khoros, a global customer engagement company, I worked on critical features of their customer interaction platforms. I developed GraphQL APIs in Scala for Vault, an access governance tool, facilitating one-click access management across social media accounts, which enhanced security and user control. I also helped modernize the Content Center by migrating it to TypeScript React from CoffeeScript and Backbone.js, which improved load times by 80% for 2,000 daily users."
    ]
  },
  {
    position: "secondary",
    duration: "Jun 2019 - Jul 2020",
    company: "Royal Brothers",
    role: "Full-Stack Developer",
    tasks: [
      "Working at Royal Brothers, India’s premier motorcycle rental service, I developed and deployed key updates for their React Native app, which supported 4,000 daily active users. This role required a hands-on approach to full-stack development, ensuring a seamless user experience for customers utilizing the platform for short- and long-term bike rentals across multiple Indian cities.",
    ]
  },
  {
    position: "secondary",
    duration: "Jun 2018 - Dec 2019",
    company: "Woke Cartel",
    role: "Co-Founder",
    tasks: [
      "Founded a creative agency catering to variety of needs a business requires, from ideation to building the final product. Here, I quickly learned frameworks like Nuxt.js and Express to develop, test, and publish two main products for the company. The first was a Content Management System (CMS) enabling CRUD operations, which served as the content source for the second product—a digital sports media website. I deployed both applications, with the frontend on Digital Ocean and backend functionalities using Firebase functions."    ]
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
