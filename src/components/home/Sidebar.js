// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as ScrollLink } from 'react-scroll';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Sidebar = ({ isSidebarClosed, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isSidebarClosed ? 'sidebar-closed' : ''}`}>
      <img src="./static/images/top-secret.png" alt="Igor Iric" className="profile-image" />
      <h2 className="sidebar-title">error 505</h2>
      <p className="subtitle">Hi, my name is Igor Iric and I'm an Azure Solutions Architect Expert & Senior Software engineer.</p>
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="https://www.linkedin.com/in/igor-iric"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        <a href="https://github.com/error505"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href="https://amzn.eu/d/dKxnIuh" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'amazon']} /></a>
      </div>
      <nav className="navigation">
        <ul>
        <li><a href="/" className="home-button"><FontAwesomeIcon icon="home" /><span> Home</span></a></li>
          <li>
            <ScrollLink
              to="what-i-do"
              smooth={true}
              duration={500}
              className="about-button"
            >
              <FontAwesomeIcon icon="user" />
              <span> About Me</span>
            </ScrollLink>
          </li>
          {/* <li>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              className="portfolio-button"
            >
              <FontAwesomeIcon icon="briefcase" />
              <span> Portfolio</span>
            </ScrollLink>
          </li> */}
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="service-button"
            >
              <FontAwesomeIcon icon="dollar-sign" />
              <span> Services & Pricing</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="blog"
              smooth={true}
              duration={500}
              className="blog-button"
            >
              <FontAwesomeIcon icon="blog" />
              <span> Blog</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="contact-button"
            >
              <FontAwesomeIcon icon="envelope" />
              <span> Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </nav>
      {/* <button className="close-sidebar" onClick={toggleSidebar}><FontAwesomeIcon icon="x" /></button>
      <button className="open-sidebar" onClick={toggleSidebar}><FontAwesomeIcon icon="bars" /></button> */}
    </aside>
  );
};

export default Sidebar;
