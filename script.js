const { useState, useEffect, useRef } = React;

// Replace this URL with your actual Google Form link
const GOOGLE_FORM_URL = "https://forms.gle/your-google-form-url";

// Replace this URL with your actual YouTube video link
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=your-event-video-url";

const Navbar = ({ setView, currentView }) => {
  const handleNavClick = (e, sectionId) => {
    if (currentView !== 'home') {
      e.preventDefault();
      setView('home');
      // Small delay to allow DOM to render before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
  <nav className="navbar">
    <div className="logo" onClick={() => setView('home')} style={{ cursor: 'pointer' }}>Skill<span>Sangh</span></div>
    <div className="nav-links">
      <a href="#home" onClick={() => setView('home')}>Home</a>
      <a href="#notices" onClick={(e) => handleNavClick(e, 'notices')}>Notices</a>
      <a href="#events" onClick={(e) => handleNavClick(e, 'events')}>Events</a>
      <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Why Us?</a>
      <a href="#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a>
      <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      <a href="#memories" onClick={(e) => handleNavClick(e, 'memories')} className="nav-memories" style={{color: '#60a5fa'}}>Memories</a>
      <button 
        className="btn-primary" 
        onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
      >
        Register Now
      </button>
    </div>
  </nav>
  );
};

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1 className="animate-pop-in">Unlock Your Potential <br/> with SkillSangh</h1>
      <p className="animate-fade-in">Join the hub where innovation meets collaboration. We organize the most impactful tech events and hackathons for the next generation.</p>
      <div className="hero-btns animate-slide-up">
        <button 
          className="btn-main" 
          onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
        >
          Event Tickets
        </button>
        <button 
          className="btn-outline" 
          onClick={() => window.open(YOUTUBE_VIDEO_URL, '_blank')}
        >
          Watch the Event Video
        </button>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    { title: "Expert Led", desc: "Learn from industry veterans with years of experience." },
    { title: "Flexible Learning", desc: "Access content anytime, anywhere at your own pace." },
    { title: "Community Driven", desc: "Connect with thousands of learners and mentors globally." }
  ];

  return (
    <section className="features" id="about">
      <h2>Why Choose Us?</h2>
      <div className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card animate-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Events = () => {
  const styles = `
    @keyframes pulse-live {
      0% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(255, 0, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
    }
    @keyframes pulse-upcoming {
      0% { box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(255, 165, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 165, 0, 0); }
    }
    @keyframes pulse-registration {
      0% { box-shadow: 0 0 0 0 rgba(0, 128, 0, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(0, 128, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(0, 128, 0, 0); }
    }
    .event-badge {
      padding: 0.3em 0.8em;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 700;
      color: #fff;
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }
    @keyframes animatedBackground {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .events-animated {
      background: linear-gradient(-45deg, #0f172a, #1e293b, #334155, #1e1b4b);
      background-size: 400% 400%;
      animation: animatedBackground 15s ease infinite;
      padding: 6rem 2rem;
      text-align: center;
    }
    .event-card-vibrant {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      color: #ffffff !important;
      transition: transform 0.3s ease;
    }
    .event-card-vibrant h3 { color: #60a5fa !important; margin-bottom: 0.75rem; }
    .event-card-vibrant p { color: #e2e8f0 !important; line-height: 1.6; position: relative; }

    .event-badge.live {
      background-color: #ff0000; /* Red */
      animation: pulse-live 2s infinite;
    }
    .event-badge.upcoming {
      background-color: #ffa500; /* Orange */
      animation: pulse-upcoming 2s infinite;
    }
    .event-badge.registration {
      background-color: #008000; /* Green */
      animation: pulse-registration 2s infinite;
    }
    .event-card-vibrant:hover .event-badge {
      animation: none; /* Pause animation on hover */
    }
  `;

  return (
    <section className="events events-animated" id="events">
      <style>{styles}</style>
    <h2>Upcoming Events</h2>
    <div className="event-grid">
      <div className="event-card animate-card event-card-vibrant">
        <div className="event-badge live">Live</div>
        <h3>Architectural Excellence Hackathon</h3>
        <p>Architect and build resilient, scalable microservices in this high-intensity 48-hour engineering challenge.</p>
      </div>
      <div className="event-card animate-card event-card-vibrant">
        <div className="event-badge upcoming">Upcoming</div>
        <h3>Advanced System Design Workshop</h3>
        <p>Deep dive into consistency models, database sharding, and high-availability patterns for enterprise-grade applications.</p>
      </div>
      <div className="event-card animate-card event-card-vibrant">
        <div className="event-badge registration">Registration Open</div>
        <h3>Cloud-Native Engineering Seminar</h3>
        <p>Join industry veterans for a comprehensive discussion on the evolution of Kubernetes, serverless, and observability.</p>
      </div>
    </div>
  </section>
  );
};

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/notices');
        const data = await response.json();
        setNotices(data);
      } catch (err) {
        console.error("Failed to fetch notices, using fallback data.");
        // Fallback data if server is not running
        setNotices([
          { id: 1, title: 'Initialize Community_v1', content: 'Standard welcome protocols initiated. Welcome to the SkillSangh cluster.', date: '2024-04-22', priority: 'low', category: 'System' },
          { id: 2, title: 'Hotfix Deployment #442', content: 'Critical patches applied to the memory leak in the dashboard renderer.', date: '2024-04-24', priority: 'high', category: 'Maintenance' },
          { id: 3, title: 'Quantum Computing Seminar', content: 'Register for the guest lecture on Qubits and Quantum Gates next week.', date: '2024-04-26', priority: 'low', category: 'Education' },
          { id: 4, title: 'Database Migration Notice', content: 'Scheduled migration to the new high-availability cluster this weekend.', date: '2024-04-30', priority: 'high', category: 'Maintenance' },
          { id: 5, title: 'Open Source Contribution', content: 'SkillSangh core libraries are now open for public PRs. Check our GitHub.', date: '2024-05-01', priority: 'low', category: 'General' },
          { id: 6, title: 'Security Audit Success', content: 'Our annual security audit is complete with zero critical vulnerabilities found.', date: '2024-05-03', priority: 'low', category: 'Security' }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  const styles = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes zoomIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    .notice-section {
      padding: 6rem 2rem;
      background: linear-gradient(180deg, rgba(2, 6, 23, 0.7) 0%, rgba(2, 6, 23, 0.9) 100%);
      backdrop-filter: blur(20px) saturate(180%);
      background-image: 
        radial-gradient(at 0% 0%, hsla(161,100%,45%,0.05) 0, transparent 50%), 
        radial-gradient(at 100% 100%, hsla(199,100%,45%,0.05) 0, transparent 50%),
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2394a3b8' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='1' cy='1' r='0.5'/%3E%3C/g%3E%3C/svg%3E");
      background: linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), 
                  url('https://images.unsplash.com/photo-1518433278981-d58b73ad9224?q=80&w=1944&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      backdrop-filter: blur(5px) saturate(180%);
      scroll-margin-top: 80px;
      position: relative;
      overflow: hidden;
      min-height: 80vh;
    }
    .ticker-wrap {
      width: 100%;
      background: rgba(74, 222, 128, 0.1);
      border-y: 1px solid rgba(74, 222, 128, 0.2);
      padding: 10px 0;
      overflow: hidden;
      margin-bottom: 4rem;
      position: relative;
    }
    .ticker-move {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    .notice-grid {
      max-width: 1100px;
      margin: 3rem auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      position: relative;
      z-index: 2;
    }
    .terminal-card {
      background: rgba(30, 41, 59, 0.4);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .terminal-card:hover {
      transform: translateY(-8px);
      background: rgba(30, 41, 59, 0.6);
      border-color: rgba(74, 222, 128, 0.3);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    }
    .terminal-header {
      background: rgba(15, 23, 42, 0.8);
      padding: 8px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.7rem;
      color: #94a3b8;
      font-family: 'JetBrains Mono', monospace;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .terminal-body {
      padding: 1.5rem;
      text-align: left;
    }
    .category-tag {
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #60a5fa;
      margin-bottom: 0.5rem;
      display: block;
      font-family: 'JetBrains Mono', monospace;
    }
    .notice-title {
      color: #f8fafc;
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    .notice-content {
      color: #cbd5e1;
      line-height: 1.6;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
    .notice-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .future-notices-title {
      max-width: 900px;
      margin: 4rem auto 1.5rem;
      text-align: left;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: #64748b;
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid rgba(74, 222, 128, 0.1);
      padding-bottom: 0.5rem;
    }
    .future-grid {
      max-width: 900px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1rem;
    }
    .future-card {
      background: rgba(15, 23, 42, 0.4);
      border: 1px solid rgba(148, 163, 184, 0.05);
      border-radius: 10px;
      padding: 1.25rem;
      text-align: left;
      transition: all 0.3s ease;
    }
    .future-card:hover {
      border-color: rgba(74, 222, 128, 0.2);
      transform: translateY(-3px);
      background: rgba(15, 23, 42, 0.6);
    }
    .future-card h4 {
      color: #94a3b8;
      font-size: 0.85rem;
      margin: 0 0 0.5rem 0;
      font-family: 'JetBrains Mono', monospace;
    }
    .ticker-item {
      color: #4ade80;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      padding: 0 40px;
      white-space: nowrap;
    }
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: #4ade80;
      background: rgba(74, 222, 128, 0.1);
      padding: 4px 12px;
      border-radius: 20px;
      border: 1px solid rgba(74, 222, 128, 0.2);
      margin-bottom: 1rem;
    }
    .scanline-effect {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, transparent, rgba(74, 222, 128, 0.02) 50%, transparent);
      animation: scanline 8s linear infinite;
      pointer-events: none;
      z-index: 1;
    }
    .future-tag {
      font-size: 0.6rem;
      color: #4ade80;
      background: rgba(74, 222, 128, 0.05);
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid rgba(74, 222, 128, 0.1);
    }
    .priority-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .high { background: #f43f5e; box-shadow: 0 0 8px #f43f5e; }
    .low { background: #38bdf8; }
    .status-pulse { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; animation: blink 1.5s infinite; }

    .notice-modal {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(2, 6, 23, 0.95);
      backdrop-filter: blur(15px);
      z-index: 3000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.3s ease-out;
    }
    .notice-modal-content {
      background: #0f172a;
      border: 1px solid rgba(74, 222, 128, 0.3);
      border-radius: 12px;
      max-width: 700px;
      width: 100%;
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 60px rgba(74, 222, 128, 0.15);
      font-family: 'JetBrains Mono', monospace;
      animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .notice-modal-body {
      padding: 3rem;
      color: #cbd5e1;
      text-align: left;
    }
    .notice-modal-title {
      color: #4ade80;
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid rgba(74, 222, 128, 0.1);
      padding-bottom: 1rem;
      font-weight: 700;
    }
    .notice-modal-text {
      line-height: 1.8;
      font-size: 1.15rem;
    }
    .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: none;
      color: #94a3b8;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      cursor: pointer;
      z-index: 10;
      font-size: 1.2rem;
    }
    .modal-close:hover { color: #fff; background: rgba(255,255,255,0.1); }

    @media (max-width: 768px) {
      .notice-section { padding: 4rem 1.5rem; }
      .notice-grid { gap: 1.5rem; margin: 2rem auto; }
      .future-notices-title { margin: 2.5rem auto 1rem; }
      .notice-title { font-size: 1.1rem; }
      .ticker-wrap { margin-bottom: 2.5rem; }
    }

    @media (max-width: 480px) {
      .notice-section { padding: 3rem 1rem; }
      .notice-grid { 
        grid-template-columns: 1fr; 
        gap: 1.25rem;
      }
      .terminal-body { padding: 1.2rem; }
      .notice-title { font-size: 1rem; margin-bottom: 0.75rem; }
      .notice-content { font-size: 0.85rem; margin-bottom: 1rem; }
      .ticker-item { padding: 0 20px; font-size: 0.75rem; }
      .category-tag { font-size: 0.6rem; }
      .status-badge { font-size: 0.65rem; padding: 3px 10px; }
    }
  `;

  return (
    <section className="notice-section" id="notices">
      <style>{styles}</style>
      <div className="scanline-effect"></div>
      
      <div className="ticker-wrap">
        <div className="ticker-move">
          {notices.concat(notices).map((notice, idx) => (
            <span key={`${notice.id || idx}-${idx}`} className="ticker-item">
              • {notice.title.toUpperCase()}: {notice.content.substring(0, 50)}...
            </span>
          ))}
        </div>
      </div>

      <div className="status-badge">
        <div className="status-pulse"></div>
        <span>SYSTEM_LOGS: ACTIVE</span>
      </div>

      <div className="notice-grid">
        {loading ? (
          <p style={{ color: '#4ade80' }}>Loading system logs...</p>
        ) : (
          notices.map(notice => (
            <div key={notice.id} className="terminal-card" onClick={() => setSelectedNotice(notice)} style={{ cursor: 'pointer' }}>
              <div className="terminal-header">
                <span>REF: SS-{notice.id.toString().padStart(3, '0')}</span>
                <span>{notice.date}</span>
              </div>
              <div className="terminal-body">
                <span className="category-tag">{notice.category || 'General'}</span>
                <div className="notice-title">{notice.title}</div>
                <p className="notice-content">{notice.content}</p>
                <div className="notice-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
                    <div className={`priority-dot ${notice.priority || 'low'}`}></div>
                    <span>{notice.priority ? notice.priority.toUpperCase() : 'NORMAL'} PRIORITY</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {!loading && notices.length === 0 && (
          <p style={{ color: '#64748b' }}>No active notices found in buffer.</p>
        )}
      </div>

      {selectedNotice && (
        <div className="notice-modal" onClick={() => setSelectedNotice(null)}>
          <div className="notice-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedNotice(null)}>&times;</button>
            <div className="terminal-header" style={{ background: 'rgba(74, 222, 128, 0.05)' }}>
              <span>READING_LOG: SS-{selectedNotice.id.toString().padStart(3, '0')}</span>
              <span>{selectedNotice.date}</span>
            </div>
            <div className="notice-modal-body">
              <span className="category-tag">{selectedNotice.category || 'General'}</span>
              <h2 className="notice-modal-title">{selectedNotice.title}</h2>
              <p className="notice-modal-text">{selectedNotice.content}</p>
              <div className="notice-footer" style={{ marginTop: '2rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#4ade80' }}>[ END_OF_LOG ]</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const MediaUploadSection = () => {
  const staticMemories = [
    { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', caption: 'Core_Architecture_Review.jpg', timestamp: '2024-03-15', size: '2.4MB' },
    { id: 2, type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', caption: 'Server_Migration_Timelapse.mp4', timestamp: '2024-03-20', size: '15.8MB' },
    { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', caption: 'Hackathon_Final_Demo.png', timestamp: '2024-03-22', size: '1.1MB' },
    { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80', caption: 'Cloud_Infrastructure_Setup.webp', timestamp: '2024-04-01', size: '3.7MB' }
  ];

  const styles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .memories-section {
      padding: 8rem 2rem;
      background: linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.85)), 
                  url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      backdrop-filter: blur(10px) saturate(150%);
      text-align: center;
      min-height: 400px;
      scroll-margin-top: 80px;
    }
    .memory-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .memory-card {
      background: rgba(30, 41, 59, 0.3);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.05);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      animation: fadeIn 0.8s ease forwards;
    }
    .memory-card:hover { 
      transform: translateY(-10px);
      background: rgba(30, 41, 59, 0.5);
      border-color: rgba(96, 165, 250, 0.4);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }
    .memory-media {
      width: 100%;
      height: 240px;
      object-fit: cover;
      background: #020617;
      transition: filter 0.3s ease;
    }
    .memory-card:hover .memory-media {
        filter: contrast(1.1);
    }
    .memory-info {
      padding: 1.5rem;
      text-align: left;
    }
    .memory-caption {
      color: #f8fafc;
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
    }
    .memory-date {
      color: #64748b;
      font-size: 0.7rem;
      font-family: 'JetBrains Mono', monospace;
    }
    .nav-memories {
      color: #60a5fa !important;
      font-weight: 600;
      border-bottom: 2px solid transparent;
    }
    @media (max-width: 768px) {
      .memories-section { padding: 4rem 1.5rem; }
      .memory-grid { gap: 1.5rem; }
    }
  `;

  return (
    <section className="memories-section" id="memories">
      <style>{styles}</style>
      <div className="status-badge" style={{ color: '#60a5fa', borderColor: 'rgba(96, 165, 250, 0.2)', background: 'rgba(96, 165, 250, 0.05)' }}>
        <div className="status-pulse" style={{ background: '#60a5fa' }}></div>
        <span>MEDIA_RESOURCES: READ_WRITE</span>
      </div>
      <h2 style={{ color: '#fff', marginTop: '1rem' }}>Event Memories</h2>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>Archive of historical engineering milestones and community highlights.</p>
      
      <div className="memory-grid">
        {staticMemories.map(item => (
          <div key={item.id} className="memory-card">
            <div className="terminal-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(15,23,42,0.8)' }}>
              <span>ASSET_ID: {item.id.toString().padStart(3, '0')}</span>
              <span>{item.size}</span>
            </div>
            {item.type === 'video' ? (
              <video src={item.url} className="memory-media" controls muted />
            ) : (
              <img src={item.url} alt={item.caption} className="memory-media" />
            )}
            <div className="memory-info">
              <p className="memory-caption" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#60a5fa' }}>{"> "} {item.caption}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span className="memory-date">CREATED_AT: {item.timestamp}</span>
                <span style={{ fontSize: '0.65rem', color: '#4ade80' }}>[ STATUS: SYNCED ]</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { name: "Sameer Shukla", role: "Founder & Organizer / Lead Developer", image: null },
    { name: "Anuj Singh", role: "Co-founder & Developer / Tech Lead", image: "anujsingh.jpeg" },
    { name: "Sanchay Chakraborty", role: "Creative Director & Designer", image: null }, 
    { name: "Avi Aryan", role: "Graphic Designer & Event Manager", image: "avi.jpeg" },
    { name: "Khushi Bharadwaj", role: "UI/UX Designer & Social Media Manager", image: null },
    { name: "Kashish Raj", role: "Frontend Developer & Event Coordinator", image: null },
    { name: "Riya Kumari", role: "Frontend Developer & Social Media Manager", image: null }
  ];

  const styles = `
    .team-modern {
      background: radial-gradient(circle at top, #1e293b 0%, #0f172a 100%);
      padding: 8rem 2rem;
    }
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2.5rem;
      max-width: 1200px;
      margin: 4rem auto 0;
    }
    .team-card-modern {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 3rem 2rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .team-card-modern:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: #6366f1;
      transform: translateY(-12px);
    }
    .avatar-modern {
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 1.5rem;
      transition: all 0.5s ease;
      position: relative;
      cursor: pointer;
      overflow: hidden;
    }
    .team-card-modern:hover .avatar-modern {
      border-radius: 50%;
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
    }
    .avatar-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(99, 102, 241, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease;
      font-size: 0.7rem;
      font-weight: 700;
      color: #fff;
      font-family: 'JetBrains Mono', monospace;
      border-radius: inherit;
      z-index: 2;
    }
    .team-card-modern:hover .avatar-overlay {
      opacity: 1;
    }
    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    .role-badge {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #a5b4fc;
      margin-top: 1rem;
      opacity: 0.8;
    }
    .profile-modal {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(2, 6, 23, 0.9);
      backdrop-filter: blur(12px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.3s ease-out;
    }
    .modal-content {
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 28px;
      max-width: 450px;
      width: 100%;
      position: relative;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    .modal-image-container {
      width: 100%;
      height: 400px;
      background: #1e293b;
      overflow: hidden;
    }
    .modal-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .modal-image-container:hover img {
      transform: scale(1.05);
    }
    .modal-details {
      padding: 2rem;
      text-align: left;
    }
    .modal-details h2 {
      color: #fff;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
    .modal-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      z-index: 10;
      transition: background 0.2s;
    }
    .modal-close:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    .placeholder-avatar-large {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5rem;
      font-weight: 800;
      color: rgba(255,255,255,0.05);
      background: linear-gradient(135deg, #1e293b, #0f172a);
    }
  `;

  return (
    <section className="team team-modern" id="team">
      <style>{styles}</style>
      <h2>Meet Our Team</h2>
      <p className="team-intro">The architects and engineers building the future of collaboration.</p>
      <div className="team-grid">
        {members.map((m, i) => (
          <div key={i} className="team-card animate-card team-card-modern">
            <div className="avatar-modern" onClick={() => setSelectedMember(m)}>
              <div className="avatar-overlay">VIEW PROFILE</div>
              {m.image ? (
                <img src={m.image} alt={m.name} className="avatar-img" />
              ) : (
                m.name.split(' ').map(n => n[0]).join('')
              )}
            </div>
            <h3>{m.name}</h3>
            <p className="role-badge">{m.role}</p>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="profile-modal" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>&times;</button>
            <div className="modal-image-container">
              {selectedMember.image ? (
                <img src={selectedMember.image} alt={selectedMember.name} />
              ) : (
                <div className="placeholder-avatar-large">
                  {selectedMember.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="modal-details">
              <span className="category-tag" style={{ color: '#6366f1', marginBottom: '0.5rem' }}>TEAM_MEMBER_PROFILE</span>
              <h2>{selectedMember.name}</h2>
              <p className="role-badge" style={{ marginTop: '0', opacity: '1', color: '#94a3b8' }}>{selectedMember.role}</p>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '1rem', lineHeight: '1.6' }}>
                Professional expertise in building scalable systems and contributing to the SkillSangh ecosystem. Use internal directory for detailed logs.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Contact = () => {
  const contacts = [
    { method: "LinkedIn", cmd: "network.connect()", icon: "🔗", link: "https://linkedin.com", protocol: "WSS", status: "STABLE", color: "#0077b5" },
    { method: "Instagram", cmd: "social.feed()", icon: "📸", link: "https://instagram.com", protocol: "HTTPS", status: "ACTIVE", color: "#e4405f" },
    { method: "Telegram", cmd: "community.join()", icon: "✈️", link: "https://t.me", protocol: "TCP", status: "FAST", color: "#0088cc" },
    { method: "Email", cmd: "contact.send()", icon: "✉️", link: "mailto:contact@skillsangh.com", protocol: "SMTP", status: "READY", color: "#6366f1" }
  ];

  const styles = `
    @keyframes pulse-soft {
      0% { opacity: 0.4; }
      50% { opacity: 1; }
      100% { opacity: 0.4; }
    }
    .contact-modern {
      background: #020617;
      padding: 8rem 2rem;
    }
    .contact-card-dev {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(30, 41, 59, 0.7);
      border-radius: 16px;
      padding: 2rem;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: block;
      text-align: left;
      backdrop-filter: blur(8px);
    }
    .contact-card-dev:hover {
      background: rgba(30, 41, 59, 0.4);
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    .dev-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    .platform-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .platform-name {
      color: #f8fafc;
      font-weight: 700;
      font-size: 1.25rem;
      letter-spacing: -0.025em;
    }
    .code-content {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      margin-bottom: 1.5rem;
    }
    .method-call {
      color: #38bdf8;
      font-size: 0.95rem;
    }
    .footer-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
    }
    .status-indicator {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #4ade80;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      background: #4ade80;
      border-radius: 50%;
      animation: pulse-soft 2s infinite;
    }
    .protocol-label { color: #64748b; }
  `;

  return (
    <section className="contact contact-modern" id="contact">
      <style>{styles}</style>
      <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Connect With Us</h2>
      <p className="contact-intro" style={{ color: '#94a3b8', marginBottom: '4rem' }}>
        Execute a connection request to join the SkillSangh ecosystem.
      </p>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <a 
            key={i} 
            href={c.link} 
            className="contact-card-dev animate-card" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ borderLeft: `4px solid ${c.color}` }}
          >
            <div className="dev-header">
              <div className="platform-title">
                <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
                <span className="platform-name">{c.method}</span>
              </div>
            </div>
            <div className="code-content">
              <div className="method-call">{c.cmd}</div>
            </div>
            <div className="footer-meta">
              <span className="protocol-label">PROTO: {c.protocol}</span>
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>{c.status}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} SkillSangh. All rights reserved.</p>
    <p style={{ marginTop: '0.5rem' }}>
      <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: '600' }}>
        Registration Form
      </a>
    </p>
  </footer>
);

const App = () => {
  const [view, setView] = useState('home'); // 'home' or 'memories'

  return (
    <div className="app-container">
      <Navbar setView={setView} currentView={view} />
      <main>
        {view === 'home' && (
          <React.Fragment>
            <Hero />
            <NoticeBoard />
            <Events />
            <MediaUploadSection />
            <Features />
            <Team />
            <Contact />
          </React.Fragment>
        )}
      </main>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);