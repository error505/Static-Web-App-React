// src/components/Resume.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className="resume">
      {/* Header Section */}
      <div className="resume-header">
        <h1>Igor Iric</h1>
        <p>Senior Azure Cloud Solutions Architect</p>
      </div>

      {/* Contact Information */}
      <div className="resume-contact">
        <p><FontAwesomeIcon icon={faEnvelope} /> iric</p>
        <p><FontAwesomeIcon icon={faPhone} /> +49173</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Frankfurt am Main, Germany</p>
        <p><FontAwesomeIcon icon={faGlobe} /> <a href="https://error505.github.io/error505/" target="_blank" rel="noopener noreferrer">error505.github.io</a></p>
        <p><FontAwesomeIcon icon={['fab', 'linkedin']} /> <a href="https://www.linkedin.com/in/igor-iric/" target="_blank" rel="noopener noreferrer">linkedin.com/in/igor-iric</a></p>
        <p><FontAwesomeIcon icon={['fab', 'github']} /> <a href="https://github.com/error505" target="_blank" rel="noopener noreferrer">github.com/error505</a></p>
      </div>

      {/* Bio Section */}
      <div className="resume-content">
        <h2>About Me</h2>
        <p>
          I am an experienced software engineer with over 15 years in the field, now at the forefront of cloud computing and artificial intelligence innovation.
          As a Certified Azure Solutions Architect Expert and Azure Cybersecurity Architect Expert, I excel in crafting and deploying cutting-edge solutions
          in cloud and AI technologies.
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
          <h3>Senio Cloud Solutions Architect / Senior Software Engineer</h3>
          <h4>Plain Concepts | June 2024 – Present</h4>
          <ul>
            <li>Architected and developed applications using Azure cloud services.</li>
            <li>Led significant projects including Safe GPT Project for Nestle Finance and Innovation, FRiDA App for FRoSTA Company, and more.</li>
            <li>Integrated advanced AI models like GPT-3.5 and GPT-4 in various projects.</li>
            <li>Managed and optimized microservices architecture and cloud-native solutions.</li>
          </ul>
        </div>
        <div className="resume-job">
          <h3>Senior Azure Cloud Solutions Architect</h3>
          <h4>Nordcloud, an IBM Company | February 2024 – June 2024</h4>
          <ul>
            <li>Technical Azure Cloud Consultant, responsible for design and implementation of cloud infrastructure.</li>
            <li>Consulted stakeholders and created innovative Proof of Concepts (PoC).</li>
            <li>Automated the cloud environment using CI/CD pipelines and Infrastructure as Code (IaC).</li>
            <li>Defined and implemented security strategies for cloud environments.</li>
            <li>Migrated on-premises workloads to cloud environments and modernized legacy solutions to Cloud-native technologies.</li>
          </ul>
        </div>
        <div className="resume-job">
          <h3>Cloud Solutions Architect / Senior Software Engineer</h3>
          <h4>Plain Concepts | September 2020 – February 2024</h4>
          <ul>
            <li>Architected and developed applications using Azure cloud services.</li>
            <li>Led significant projects including Safe GPT Project for Nestle Finance and Innovation, FRiDA App for FRoSTA Company, and more.</li>
            <li>Integrated advanced AI models like GPT-3.5 and GPT-4 in various projects.</li>
            <li>Managed and optimized microservices architecture and cloud-native solutions.</li>
          </ul>
        </div>
        {/* Add more job experiences as needed */}
      </div>

      {/* Projects Section */}
      <div className="resume-content">
        <h2>Projects</h2>
        <div className="resume-project">
          <h3>Microservices Migration Project for BMW</h3>
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
          <li>C#, .NET, React, TypeScript, Python</li>
          <li>Microservices, AI, GPT-3.5, GPT-4</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      {/* Education Section */}
      <div className="resume-content">
        <h2>Education</h2>
        <div className="resume-education">
          <h3>Pan-European University „Apeiron“</h3>
          <h4>Bachelor of Information Technologies - B.IT | 2011 – 2014</h4>
          <p>Information Technology</p>
        </div>
        <div className="resume-education">
          <h3>Pan-European University „Apeiron“</h3>
          <h4>Specialist of Computer Science B.Sc.IT – Spec. CS | 2014 – 2015</h4>
          <p>Information Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;