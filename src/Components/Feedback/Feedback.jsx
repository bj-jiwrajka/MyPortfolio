import React, { useState } from 'react';
import "./Feedback.css";

function Feedback() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => {
    setIsShown(false);
    window.location.href = '/';
  }

  return (
    <div className={`thank-you ${isShown ? 'show' : ''}`}>
      <div className="thank-you-message">
        <h2>Thanks you for your feedback!</h2>
        <p>I appreciate your comments and will use them to improve my website.</p>
        <button onClick={handleClick}>Return to Homepage</button>
      </div>
    </div>
  );
}

export default Feedback;
