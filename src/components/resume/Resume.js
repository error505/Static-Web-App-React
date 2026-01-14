// src/components/Resume.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className="resume">
      {/* Header Section */}
      <div className="resume-header">
        <h1>Paul Middleton</h1>
        <p>Enterprise Cloud Solutions Architect</p>
      </div>

      {/* Contact Information */}
      <div className="resume-contact">
        <p><FontAwesomeIcon icon={faEnvelope} /> Paul</p>
        <p><FontAwesomeIcon icon={faPhone} /> +49173</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Newcastle Upon Tyne, UK</p>
        <p><FontAwesomeIcon icon={faGlobe} /> <a href="https://error505.github.io/error505/" target="_blank" rel="noopener noreferrer">error505.github.io</a></p>
        <p><FontAwesomeIcon icon={['fab', 'linkedin']} /> <a href="https://www.linkedin.com/in/igor-iric/" target="_blank" rel="noopener noreferrer">linkedin.com/in/igor-iric</a></p>
        <p><FontAwesomeIcon icon={['fab', 'github']} /> <a href="https://github.com/error505" target="_blank" rel="noopener noreferrer">github.com/error505</a></p>
      </div>

      {/* Bio Section */}
      <div className="resume-content">
        <h2>About Me</h2>
        <p>
          A highly accomplished leader, architect and manager with strong consultancy, technical and functional knowledge of core enterprise systems and architectures in multiple areas, manufacturing, automotive,
          pharmaceutical, and public sector industries. Proven track record of evaluating, implementing and governing hardware, software, public, private and hybrid cloud solutions. Creative professional with extensive
          enterprise architecture across multiple lines of business.
          As a  Solutions Architect Expert and Cybersecurity Architect Expert, I excel in crafting and deploying cutting-edge solutions in cloud and AI technologies.
        </p>
        <p>
          My expertise lies in architecting and developing applications using Azure OpenAI and Azure Cognitive Services, with a keen focus on integrating
          state-of-the-art Artificial Intelligence (particularly ChatGPT) into data and document management systems. I have contributed to the technological
          advancement of numerous global companies, building highly isolated, efficient, and secure environments, each uniquely tailored to meet specific client needs.
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="resume-content">
        <h2>Work Experience</h2>
         <div className="resume-job">
          <h3>Chief Architect</h3>
          <h4>Digital Strategy - Pensions | January 2025 – Present</h4>
          <ul>
            <li>Development and delivery of a comprehensive new Architecture function, translating digital IT strategy,</li>
            <li>uplift capability, and mitigate risk by establishing robust governance processes and solid foundational </li>
            <li>architecture practices and frameworks within the organisation.</li>
            <li>Consulted stakeholders and created innovative Proof of Concepts (PoC).</li>
            <li>Automated the cloud environment using CI/CD pipelines and Infrastructure as Code (IaC).</li>
            <li>Defined and implemented security strategies for cloud environments.</li>
            <li>Migrated on-premises workloads to cloud environments and modernized legacy solutions to Cloud-native technologies.</li>
          </ul>
        </div>
        <div className="resume-job">
          <h3>Senior Solutions Architect</h3>
          <h4>Consulting As A Service | January 2024 – January 2025</h4>
          <ul>
            <li>Architected and developed eco-systems using Azure cloud services.</li>
            <li>Led significant projects including core offering digital trandformation, and more.</li>
            <li>I also introduced and ran a technical governance process, consisting of a controlled technical design authority (TDA) </li>
            <li>for both the program and for use in the wide organization. I used this process to provide continuous technical.</li>
            <li>governance for all design decisions and build activity in the program. </li>
          </ul>
        </div>
       
        <div className="resume-job">
          <h3>Enterprise Architect</h3>
          <h4>Digital transformation | May 2023 – January 2024</h4>
          <ul>
            <li>At Consulting As A Service Ltd, my focus has been on leading the Cloud Solution Architecture practice, where our </li>
            <li>Lteam thrives on crafting transformative cloud-based solutions. We have successfully spearheaded expansion and</li>
            <li>migration projects, leveraging my expertise in cloud strategy and cybersecurity from my tenure working for major</li>
            <li>consultancy firms.</li>
          </ul>
        </div>
        {/* Add more job experiences as needed */}
      </div>

      {/* Projects Section */}
      <div className="resume-content">
        <h2>Projects</h2>
        <div className="resume-project">
          <h3>Microservices Migration Project</h3>
          <h4>March 2024 – Present</h4>
          <p>Led the migration of microservices from public VNET Azure Kubernetes Service (AKS) clusters to new private VNET clusters, enhancing security and performance.</p>
        </div>
        <div className="resume-project">
          <h3>Safe GPT Project for Coca-Cola Europacific Partners</h3>
          <h4>February 2023 – February 2024</h4>
          <p>Developed and implemented a comprehensive proposal and architecture on Microsoft Azure, focusing on secure document interactions and AI integration.</p>
        </div>
        <div className="resume-project">
          <h3>Digitalization of Manufacturing Processes for FRoSTA Company</h3>
          <h4>April 2021 – February 2023</h4>
          <p>Led the digital transformation of FRoSTA's manufacturing processes, from idea to market, utilizing microservices architecture and Azure services.</p>
        </div>
        {/* Add more projects as needed */}
      </div>

      {/* Skills Section */}
      <div className="resume-content">
        <h2>Skills</h2>
        <ul>
          <li>Azure, Azure DevOps, Terraform, Docker</li>
          <li>Terraform, Bicep, .NET, Python</li>
          <li>Architecture, Microservices, AI, Cybersecurity, GPT-4</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      {/* Education Section */}
      <div className="resume-content">
        <h2>Education</h2>
        <div className="resume-education">
          <h3>ILM</h3>
          <h4>IML L3 Certificate in Leadership and Management. | 2025</h4>
          <p>Information Technology</p>
        </div>
        <div className="resume-education">
          <h3>Coursera</h3>
          <h4>Google AI Essentials | 2025</h4>
          <p>Information Technology</p>
        </div>
        <div className="resume-education">
          <h3>Coursera</h3>
          <h4>•	Google - Strategies for Cloud Security Risk Management | 2025</h4>
          <p>Information Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;