// src/components/PricingSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PricingSection = () => {
  return (
    <section className="pricing-section" id="service">
      <div className="pricing-card">
        <div className="service-icon">
          <FontAwesomeIcon icon={['fab', 'microsoft']} />
        </div>
        <h2>Azure</h2>
        <ul>
          <li><FontAwesomeIcon icon="check" /> IaC</li>
          <li><FontAwesomeIcon icon="check" /> Azure DevOps</li>
          <li><FontAwesomeIcon icon="check" /> App Modernisation</li>
          <li><FontAwesomeIcon icon="check" /> Custom Software Development</li>
        </ul>
        <p className="price">$120</p>
        <p className="users">per hour</p>
        <button className="signup-button">Book</button>
      </div>
      <div className="pricing-card">
        <div className="service-icon">
          <FontAwesomeIcon icon={['fab', 'aws']} />
        </div>
        <h2>AWS</h2>
        <ul>
          <li><FontAwesomeIcon icon="check" /> IaC</li>
          <li><FontAwesomeIcon icon="check" /> AWS CodeBuild</li>
          <li><FontAwesomeIcon icon="check" /> App Modernisation</li>
          <li><FontAwesomeIcon icon="check" /> Custom Software Development</li>
        </ul>
        <p className="price">$120</p>
        <p className="users">per hour</p>
        <button className="signup-button">Book</button>
      </div>
      <div className="pricing-card">
        <div className="service-icon">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </div>
        <h2>DevOps</h2>
        <ul>
          <li><FontAwesomeIcon icon="check" /> GitHub Actions</li>
          <li><FontAwesomeIcon icon="check" /> Azure DevOps</li>
          <li><FontAwesomeIcon icon="check" /> AWS DevOps</li>
          <li><FontAwesomeIcon icon="check" /> Terraform</li>
        </ul>
        <p className="price">$120</p>
        <p className="users">per hour</p>
        <button className="signup-button">Book</button>
      </div>
      <div className="pricing-card">
        <div className="service-icon">
          <FontAwesomeIcon icon="code" />
        </div>
        <h2>Development</h2>
        <ul>
          <li><FontAwesomeIcon icon="check" /> C# .net</li>
          <li><FontAwesomeIcon icon="check" /> React</li>
          <li><FontAwesomeIcon icon="check" /> Angular</li>
          <li><FontAwesomeIcon icon="check" /> Nextjs</li>
        </ul>
        <p className="price">$120</p>
        <p className="users">per hour</p>
        <button className="signup-button">Book</button>
      </div>
    </section>
  );
};

export default PricingSection;
