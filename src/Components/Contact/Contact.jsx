import React, { useState } from 'react';
import './Contact.css';
import Feedback from '../Feedback/Feedback';

const Contact = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowFeedback(true);
  };

  return (
    <div className="contact" id="Contact">
      <br />
      <br />
      <div className="cleft">
        <span>You can reach</span>
        <span>me at...</span>
      </div>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit">Send</button>
        </form>

        {showFeedback ? (
          <Feedback />
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
