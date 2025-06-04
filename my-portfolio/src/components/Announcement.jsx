import React, { useState, useEffect } from 'react';


const Announcement = ({ onClose }) => {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  
  const handleNext = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShow(false);
      if (onClose) onClose();
    }, 500);
  };
  
  useEffect(() => {
    // Optional: Auto-hide after a certain period
    const timer = setTimeout(() => {
      // Uncomment to enable auto-hide
      // handleNext();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  
  return (
    <div className={`announcement-overlay ${animateOut ? 'fade-out' : 'fade-in'}`}>
      <div className="announcement-box">
        <div className="announcement-header">
          <div className="announcement-badge"></div>
          <h2>✨ Welcome to my Portfolio!</h2>
          <button className="close-button" onClick={handleNext} aria-label="Close">×</button>
        </div>
        
        <div className="announcement-content">
          <div className="announcement-section">
            <h3>🚀 My App is Live! </h3>
            <p>
              My dating app <strong>SETTLE</strong> just launched on <strong>iOS App Store</strong>!
              Join the community of people who are done with dating games.
            </p>
            
            <div className="app-info">
              <div className="app-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Early Users</span>
              </div>
              <div className="app-stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">App Rating</span>
              </div>
              <div className="app-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Matches Made</span>
              </div>
            </div>
          </div>
          
          <div className="announcement-section">
            <h3>👋 Be an Early Tester</h3>
            <p>
              Want to try it before everyone else? I'm looking for feedback from people like you!
            </p>
            <a href="mailto:mrmadeus1@gmail.com" className="email-link">
             mrmadeus1@gmail.com
            </a>
          </div>
          
          <div className="announcement-section last">
            <h3>💼 Portfolio Update</h3>
            <p>
              This portfolio is due for an update, but I've been focused on building the future of dating. 
              Thank you for stopping by - new projects and updates coming soon!
            </p>
          </div>
        </div>
        
        <div className="announcement-footer">
          <button className="announcement-button primary" onClick={handleNext}>
            Got it!
          </button>
          <a href="#portfolio" className="announcement-button secondary" onClick={handleNext}>
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Announcement;