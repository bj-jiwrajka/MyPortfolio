import React, { useState } from 'react';
import './Contact.css';
import ContactLottie from '../../Lotties/footerLottie';
import Feedback from '../Feedback/Feedback';

const Contact = ({darkmode}) => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowFeedback(true);
  };

  return (
    <div className="contact" id="Contact">
      <div className={`${darkmode ? 'about-line' : ''}`}>
      </div>
      <div className="cleft">
       Get in <span>Touch</span>
      </div>
      <div className="container">
        <form onSubmit={handleFormSubmit} action='https://getform.io/f/e0274019-a68a-46d6-a876-dc800c3934b7' method='POST'>
          <div className="form-group capitalise-name">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" required  placeholder='Name:'/>
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" required placeholder='Email: ' />
          </div>
          <div className="form-group">
            <label htmlFor="message" ></label>
            <textarea id="message" rows={6} cols={30} name="message" required placeholder='Enter Your Message'></textarea>
          </div>
          <button type="submit" className='button'>Send</button>
        </form>

        {showFeedback ? (
          <Feedback />
        ) : (
          <div>
          </div>
        )}
        <ContactLottie />

      </div>
    </div>
  );
};

export default Contact;
