// src/components/PortfolioSection.js
import React, { useState, useEffect } from 'react';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const menuButtons = document.querySelectorAll('.portfolio-menu button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    menuButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.textContent.trim().toLowerCase();

        // Toggle active class
        menuButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter items based on id
        portfolioItems.forEach((item) => {
          item.style.display =
            item.id === category || category === 'all' ? 'block' : 'none';
        });
      });
    });

    return () => {
      menuButtons.forEach((btn) => {
        btn.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      {/* Heading */}
          <div className="heading-container">
          <h2 className='text-light'>Portfolio</h2>
          <p>My Work<span className="heading-separator-line"></span></p>
        </div>
      {/* Heading end */}
      <div className="portfolio-menu">
        <button
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => handleCategoryClick('all')}
        >
          All
        </button>
        <button
          className={activeCategory === 'cloud' ? 'active' : ''}
          onClick={() => handleCategoryClick('cloud')}
        >
          Cloud
        </button>
        <button
          className={activeCategory === 'development' ? 'active' : ''}
          onClick={() => handleCategoryClick('development')}
        >
          Software Development
        </button>
        <button
          className={activeCategory === 'ai' ? 'active' : ''}
          onClick={() => handleCategoryClick('ai')}
        >
          AI
        </button>
        <button
          className={activeCategory === 'devops' ? 'active' : ''}
          onClick={() => handleCategoryClick('devops')}
        >
          DevOps
        </button>
      </div>
      <div className="portfolio-grid">
        <div
          className={`portfolio-item ${activeCategory === 'development' || activeCategory === 'all' ? '' : 'hidden'}`}
        >
          <img src="./static/images/nestle.png" alt="Description" />
          <div className="overlay">
            <h3>AI</h3>
            <h4>Azure OpenAI</h4>
          </div>
        </div>
        <div
          className={`portfolio-item ${activeCategory === 'development' || activeCategory === 'all' ? '' : 'hidden'}`}
        >
          <img src="./static/images/cocacola.jpg" alt="Description" />
          <div className="overlay">
            <h3>AI</h3>
            <h4>Azure OpenAI</h4>
          </div>
        </div>
        <div
          className={`portfolio-item ${activeCategory === 'development' || activeCategory === 'all' ? '' : 'hidden'}`}
        >
          <img src="https://via.placeholder.com/400x250" alt="Description" />
          <div className="overlay">
            <h3>3D Graphics</h3>
            <h4>Templates</h4>
          </div>
        </div>
        <div
          className={`portfolio-item ${activeCategory === 'development' || activeCategory === 'all' ? '' : 'hidden'}`}
        >
          <img src="https://via.placeholder.com/400x250" alt="Description" />
          <div className="overlay">
            <h3>3D Graphics</h3>
            <h4>Templates</h4>
          </div>
        </div>
        <div
          className={`portfolio-item ${activeCategory === 'design' || activeCategory === 'all' ? '' : 'hidden'}`}
        >
          <img src="https://via.placeholder.com/400x250" alt="Description" />
          <div className="overlay">
            <h3>3D Graphics</h3>
            <h4>Templates</h4>
          </div>
        </div>
        <div
          className={`portfolio-item ${activeCategory === 'design' || activeCategory === 'all' ? '' : 'hidden'}`}
        >
          <img src="https://via.placeholder.com/400x250" alt="Description" />
          <div className="overlay">
            <h3>3D Graphics</h3>
            <h4>Templates</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
