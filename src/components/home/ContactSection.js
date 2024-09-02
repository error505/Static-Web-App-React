// src/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
              {/* Heading */}
       <div className="heading-container">
        <h2 className='text-light'>Contact me</h2>
          <p>Get in Touch<span className="heading-separator-line"></span></p>
        </div>
        {/* Heading end */}
      <div className="get-in-touch-grid">
        <div className="get-in-touch-item address">
          <i className=""></i>
          <p>Frankfurt am Main, Germany, Hessen</p>
          <label>Address</label>
        </div>
        <div className="get-in-touch-item phone">
          <i className=""></i>
          <p>+49173</p>
          <label>Call Us</label>
        </div>
        <div className="get-in-touch-item email">
          <i className=""></i>
          <p>email@email.com</p>
          <label>Email Me</label>
        </div>
      </div>
      <div className="contact-form">
        <form action="#" method="POST">
          <input type="text" name="name" placeholder="Your Name *" required />
          <input type="email" name="email" placeholder="Your Email *" required />
          <input type="text" name="subject" placeholder="Your Subject.." />
          <textarea name="message" placeholder="Your message..."></textarea>
          <p className="text-center mt-4 mb-0">
                <button id="submit-btn" className="btn btn-primary rounded-pill d-inline-flex" type="submit">
                  Send Message
                </button>
              </p>
        </form>
      </div>

    </section>
  );
};

export default ContactSection;
