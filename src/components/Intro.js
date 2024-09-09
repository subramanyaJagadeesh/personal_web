import React from 'react';
import profile from '../images/dp.JPG';

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="gradient"/>
      <div className="intro-top">
        <div className="left">
          <img src={profile} alt="Subramanya Jagadeesh" />
        </div>
        <div className="right">
          <h2>
            Hi, I'm <span id="name">Subramanya Jagadeesh</span><span id="period">.</span>
          </h2>
          <h3>
            Full-Stack Software Engineer with a knack for efficiency and scalability.
          </h3>
          <div className="box" />
          <h4>
            With a rich background in both front-end and back-end technologies, I have rapidly contributed to and enhanced multiple high-scale projects. My expertise spans developing resilient APIs to optimizing user interfaces for enhanced performance. I excel in environments that challenge my abilities and allow for growth through cutting-edge technologies.
          </h4>
          <a href="https://www.linkedin.com/in/subramanyajagadeesh" target="_blank" rel="noopener noreferrer" className="linkedin-button">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro;
