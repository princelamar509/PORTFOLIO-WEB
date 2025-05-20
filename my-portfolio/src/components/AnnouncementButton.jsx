import React, { useState, useEffect } from 'react';


const NavAnnouncementButton = ({ onClick, hasNewAnnouncement = true }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Pulse animation effect for the button to draw attention
  useEffect(() => {
    if (hasNewAnnouncement) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [hasNewAnnouncement]);
  
  return (
    <button 
      onClick={onClick} 
      className={`nav-announcement-btn ${isAnimating ? 'pulse' : ''} ${!hasNewAnnouncement ? 'no-notification' : ''}`}
      aria-label="View announcements"
      title="View latest announcements"
    >
      <span className="nav-announcement-btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.24 3.957l-8.422 14.06A1.989 1.989 0 0 0 3.518 21h16.964a1.989 1.989 0 0 0 1.7-3.025l-8.423-14.06a1.989 1.989 0 0 0-3.519.042z"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
      </span>
      {hasNewAnnouncement && <span className="visually-hidden"></span>}
    </button>
  );
};


export default NavAnnouncementButton;