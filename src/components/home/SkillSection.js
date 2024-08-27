// src/components/SkillSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillSection = () => {
  return (
    <section className="skill-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill">
          <div className="skill-icon">
            <FontAwesomeIcon icon={['fab', 'react']} />
          </div>
          <div className="skill-description">
            <h3>React</h3>
            <p>Frontend development using React</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon">
            <FontAwesomeIcon icon="code" />
          </div>
          <div className="skill-description">
            <h3>JavaScript</h3>
            <p>Experience with modern JavaScript (ES6+)</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon">
            <FontAwesomeIcon icon={['fab', 'node-js']} />
          </div>
          <div className="skill-description">
            <h3>Node.js</h3>
            <p>Backend development with Node.js</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon">
            <FontAwesomeIcon icon="database" />
          </div>
          <div className="skill-description">
            <h3>Databases</h3>
            <p>Experience with SQL and NoSQL databases</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon">
            <FontAwesomeIcon icon={['fab', 'docker']} />
          </div>
          <div className="skill-description">
            <h3>Docker</h3>
            <p>Containerization using Docker</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon">
            <FontAwesomeIcon icon={['fab', 'aws']} />
          </div>
          <div className="skill-description">
            <h3>AWS</h3>
            <p>Cloud services with AWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
