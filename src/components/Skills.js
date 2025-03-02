import React from 'react';


const data = [
  {
    name:"HTML, CSS3, SCSS, JavaScript/TypeScript (React/Vue), Redux, Tailwind CSS, Next.js, React native, D3.",
    category: "Frontend",
  },
  {
    name:"Python (Flask/Django/Fast), Java (Spring Boot), GraphQL, Scala, RESTful APIs, C++, Go, gRPC, Kafka",
    category: "Backend",
  },
  {
    name:"AWS, Azure, GCP, Heroku, Vercel.",
    category: "Cloud",
  },
  {
    name:"SQL (MySQL, Postgres, MSSQL, Oracle), NoSQL (MongoDB, Firebase).",
    category: "Databases",
  },
  {
    name:"CI/CD Jenkins, Docker, Kubernetes.",
    category: "DevOps",
  },
  {
    name:"Git, Jira, Figma, Sentry, Instana, Grafana, Gradle, Maven, OpenAI sdk, Postman, Webpack, NPM",
    category:"Tools",
  },
  {
    name:"JUnit, Jest, Enzyme, React Testing Library, Mocha",
    category:"Testing",
  },
  {
    name:"MVCC, Design Patterns, Microservices, Async Programming, Distributed Systems",
    category:"System Design",
  },
]


const Skills = () => {
  
  return(
    <div className="skills" id="skills">
      <div className="header">
        <h3>
          Skills.
        </h3>
      </div>
      <div className="container">
        {
          data.map(skill=>
            <div key={skill.name} className="skill-listing">
              <div className='skill'>
                <h3>
                  {skill.category}
                </h3>
                <h4>
                  {skill.name}
                </h4>
              </div>
            </div>
          )
        }
      </div>
      <div className="hor" />
    </div>
  )
}

export default Skills;