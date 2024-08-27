// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as ScrollLink } from 'react-scroll';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <header className="mobile-header">
      <a href="/" className="home-button open-sidebar1">
        <FontAwesomeIcon icon="home" /><span></span>
      </a>
      <ScrollLink
        to="what-i-do"
        smooth={true}
        duration={500}
        className="about-button open-sidebar1"
      >
        <FontAwesomeIcon icon="user" />
        <span></span>
      </ScrollLink>
      {/* <ScrollLink
        to="portfolio"
        smooth={true}
        duration={500}
        className="portfolio-button open-sidebar1"
      >
        <FontAwesomeIcon icon="briefcase" />
        <span></span>
      </ScrollLink> */}
      <ScrollLink
        to="services"
        smooth={true}
        duration={500}
        className="services-button open-sidebar1"
      >
        <FontAwesomeIcon icon="dollar-sign" />
        <span></span>
      </ScrollLink>
      <ScrollLink
        to="blog"
        smooth={true}
        duration={500}
        className="blog-button open-sidebar1"
      >
        <FontAwesomeIcon icon="blog" />
        <span></span>
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className="contact-button open-sidebar1"
      >
        <FontAwesomeIcon icon="envelope" />
        <span></span>
      </ScrollLink>
    </header>
  );
};

export default Header;
