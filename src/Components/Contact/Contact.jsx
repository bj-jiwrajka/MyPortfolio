import React from 'react';
import './Contact.css';

const Contact = ({ darkmode }) => {
  return (
    <div className={`contact ${darkmode ? 'darkmode' : ''}`} id="Contact">
      <div className={`${darkmode ? 'about-line' : ''}`}>
      </div>
      <div className="cleft">
        Get in <span>Touch</span>
      </div>
      <div className="container">
        <form className="contact-form">
          <div className="form-group capitalise-name">
            <label htmlFor="name" className="form-label ">
              Enter Your Name
            </label>
            <input type="text" id="name" className="contact-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Enter Your Email
            </label>
            <input type="email" id="email" className="contact-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Enter Your Message
            </label>
            <textarea id="message" className="contact-message"></textarea>
          </div>
          <button type="submit" className="button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
