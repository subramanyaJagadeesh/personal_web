import React from 'react';


const data = [
  {
    name:"HTML5, CSS, JavaScript (ES5, ES6), TypeScript, Java, Python, Ruby, C++, GraphQL, Scala, Go.",
    category: "Languages",
  },
  {
    name:"React, SASS, Next.js, Angular, Vue.js, Redux, Node.js, Express.js, Jest, JUnit, React-testing, Spring Boot, Flask, RESTful APIs, Django, Kafka, D3.",
    category: "Frameworks",
  },
  {
    name:"SQL (MySQL, Postgres, MSSQL, Oracle), NoSQL (MongoDB, Firebase).",
    category: "Database",
  },
  {
    name:"Docker, Kubernetes, AWS, Heroku, Jenkins.",
    category: "DevOps",
  },
  {
    name:"Git CLI, Sentry, Grafana, Instana, Webpack, Linux, Unix.",
    category:"Others",
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
                <h2>
                  {skill.category}
                </h2>
                <h3>
                  {skill.name}
                </h3>
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