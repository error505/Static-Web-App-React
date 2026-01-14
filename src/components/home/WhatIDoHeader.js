// src/components/WhatIDoHeader.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const WhatIDoHeader = () => {
  const navigate = useNavigate();

  const goToResume = () => {
    navigate('/resume');
  };
  return (
    <section className="what-i-do-header" id="about">
      <div className="cta">
        <h1>Paul Middleton</h1>
        <p>
          I have more than 25 years' experience in developing and building eco-systems for clients
          all over the world. As an experienced Azure Solutions Architect Expert, I am responsible for making key decisions that relate to architecture, development, and continuous improvement of the product development cycle. I have a proven track record of leading and managing teams of highly skilled and motivated developers, and providing training and workshops to enhance their skills.
        </p>
        <div className="cta-buttons">
          <button className="icon-button">
            <FontAwesomeIcon icon="eye" /> View Portfolio
          </button>
          <button className="icon-button" onClick={goToResume}>
            <FontAwesomeIcon icon="file-alt" /> View Resume
          </button>
        </div>
      </div>
      <img
        src="./static/images/baner.png"
        alt=""
        className="main-image"
      />
    </section>
  );
};

export default WhatIDoHeader;
