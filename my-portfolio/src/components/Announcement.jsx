import React, { useEffect, useRef, useState } from 'react';

const defaultStats = [
  { value: '10k+', label: 'Memories Pinned' },
  { value: '4.9', label: 'Community Rating' },
  { value: '120+', label: 'Cities Active' },
];

export default function GeoPinsAnnouncement({
  onClose,
  open = true,
  autoHideMs = null, // e.g. 4000 (ms) or null to disable
  primaryCta = { label: 'Start Your Legacy', href: '#get-started' },
  secondaryCta = { label: 'View Portfolio', href: '#HeroSection' },
  stats = defaultStats,
}) {
  const [show, setShow] = useState(open);
  const [animateOut, setAnimateOut] = useState(false);
  const boxRef = useRef(null);

  // sync external open prop
  useEffect(() => {
    setShow(open);
    setAnimateOut(false);
  }, [open]);

  const close = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShow(false);
      onClose && onClose();
    }, 500); // match CSS anim duration
  };

  // ESC to close + click outside to close
  useEffect(() => {
    if (!show) return;

    const onKey = (e) => e.key === 'Escape' && close();
    const onClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) close();
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [show]);

  // optional auto-hide
  useEffect(() => {
    if (!show || !autoHideMs) return;
    const t = setTimeout(close, autoHideMs);
    return () => clearTimeout(t);
  }, [show, autoHideMs]);

  if (!show) return null;

  return (
    <div
      className={`announcement-overlay ${animateOut ? 'fade-out' : 'fade-in'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="geopins-annc-title"
      aria-describedby="geopins-annc-desc"
    >
      <div className="announcement-box" ref={boxRef}>
        {/* Header */}
        <div className="announcement-header">
          <div className="announcement-badge" aria-hidden="true">
            {/* simple pin mark 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
            </svg>
            */}
          </div>
          <h2 id="geopins-annc-title">🧭 Welcome to GeoPins</h2>
          <button className="close-button" onClick={close} aria-label="Close">×</button>
        </div>

        {/* Content */}
        <div className="announcement-content" id="geopins-annc-desc">
          <div className="announcement-section">
            <h3>📍 A Map That Remembers Your Life</h3>
            <p>
              GeoPins is where memories become landmarks. Pin the places that shaped you
              and build a timeline that outlives the scroll.
            </p>

            <div className="app-info">
              {stats.map((s, i) => (
                <div className="app-stat" key={i}>
                  <span className="stat-number">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="announcement-section">
            <h3>🙌 Be an Early Creator</h3>
            <p>
              Try the app, pin your first memory, and tell us what feels magical — and what doesn’t.
            </p>
            <a href="mailto:mrmadeus1@gmail.com" className="email-link">mrmadeus1@gmail.com</a>
          </div>

          <div className="announcement-section last">
            <h3>🛠️ Portfolio Note</h3>
            <p>
              I’m actively building GeoPins, so this portfolio’s getting a refresh soon.
              Thanks for stopping by — new demos on the way!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="announcement-footer">
          {primaryCta?.href ? (
            <a className="announcement-button primary" href={primaryCta.href} onClick={primaryCta.onClick || undefined}>
              {primaryCta.label}
            </a>
          ) : (
            <button className="announcement-button primary" onClick={primaryCta?.onClick || close}>
              {primaryCta?.label || 'Got it'}
            </button>
          )}

          {secondaryCta?.href ? (
            <a className="announcement-button secondary" href={secondaryCta.href} onClick={secondaryCta.onClick || undefined}>
              {secondaryCta.label}
            </a>
          ) : secondaryCta ? (
            <button className="announcement-button secondary" onClick={secondaryCta.onClick || close}>
              {secondaryCta.label}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
