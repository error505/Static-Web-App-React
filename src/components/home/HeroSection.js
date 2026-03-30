// src/components/HeroSection.js
import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="home" className="hero-wrap">
      <div className="hero-mask opacity-8 bg-dark"></div>
      <div className="hero-bg parallax" style={{ backgroundImage: "url('./static/images/DT.jpg')" }}></div>
      <div className="hero-content section d-flex min-vh-100">
        <div className="container my-auto">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
              <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                <Typed
                  strings={[
                    "I'm Paul Middleton",
                    "I'm a Digital Enterprise Architect.",
                    "I'm a Senior Platform Engineer.",
                    "I'm a Cybersecurity consultant.",
                    "I'm a Technology Enthusiast.",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={1500}
                  loop
                />
              </h2>
              <p className="text-light mb-4">Newcastle Upon Tyne, Northumberland.</p>
              <Link to="contact" smooth className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2">
                Hire Me
              </Link>
            </div>
          </div>
        </div>
        <Link to="what-i-do" smooth className="scroll-down-arrow text-white">
          <span className="animated">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </Link>
      </div>
     
    </section>
  );
};

export default HeroSection;
