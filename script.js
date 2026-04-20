const { useState } = React;

// Replace this URL with your actual Google Form link
const GOOGLE_FORM_URL = "https://forms.gle/your-google-form-url";

// Replace this URL with your actual YouTube video link
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=your-event-video-url";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Skill<span>Sangh</span></div>
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#events">Events</a>
      <a href="#about">Why Us?</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
      <button 
        className="btn-primary" 
        onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
      >
        Register Now
      </button>
    </div>
  </nav>
);

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
  const notices = [
    { id: 1, tag: "[CRITICAL]", msg: "System maintenance scheduled for 02:00 UTC. Potential latency expected.", type: "alert" },
    { id: 2, tag: "[DEPLOY]", msg: "v2.4.0 Live: Interactive Learning Modules now available in production.", type: "info" },
    { id: 3, tag: "[FEATURE]", msg: "New Workshop: Advanced System Design. Registration throughput at 85%.", type: "event" },
    { id: 4, tag: "[UPTIME]", msg: "All systems operational. Global CDN edge nodes reporting 100% health.", type: "info" }
  ];

  const timestamp = new Date().toISOString().split('T')[0];

  const styles = `
    .notice-board-section {
      background: #020617;
      padding: 1.5rem 0;
      border-bottom: 1px solid #1e293b;
    }
    .terminal-container {
      max-width: 1200px;
      margin: 0 auto;
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .terminal-header {
      background: #1e293b;
      padding: 8px 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .t-dot { width: 10px; height: 10px; border-radius: 50%; }
    .t-red { background: #ff5f56; }
    .t-yellow { background: #ffbd2e; }
    .t-green { background: #27c93f; }
    .t-title { 
      margin-left: 10px; 
      font-family: 'JetBrains Mono', monospace; 
      font-size: 0.7rem; 
      color: #94a3b8; 
      text-transform: uppercase;
    }
    .marquee-wrapper {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      padding: 10px 0;
      background: #0f172a;
    }
    .marquee-content {
      display: inline-block;
      animation: marquee-scroll 60s linear infinite;
    }
    .marquee-item {
      display: inline-flex;
      align-items: center;
      padding: 0 3rem;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.85rem;
    }
    .log-ts { color: #64748b; margin-right: 10px; }
    .log-tag { font-weight: bold; margin-right: 10px; }
    .type-alert { color: #f43f5e; }
    .type-info { color: #38bdf8; }
    .type-event { color: #a855f7; }
    .log-msg { color: #e2e8f0; }

    @keyframes marquee-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
  `;

  return (
    <section className="notice-board-section">
      <style>{styles}</style>
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="t-dot t-red"></div>
          <div className="t-dot t-yellow"></div>
          <div className="t-dot t-green"></div>
          <span className="t-title">notice board --live</span>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...notices, ...notices].map((notice, idx) => (
              <div key={`${notice.id}-${idx}`} className="marquee-item">
                <span className="log-ts">[{timestamp}]</span>
                <span className={`log-tag type-${notice.type}`}>{notice.tag}</span>
                <span className="log-msg">{notice.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Sameer Shukla", role: "Founder & Organizer / Lead Developer", image: null },
    { name: "Anuj Singh", role: "Co-founder & Developer / Tech Lead", image: null },
    { name: "Sanchay Chakraborty", role: "Creative Director & Designer", image: null },
    { name: "Avi Aryan", role: "Graphic Designer & Event Manager", image: null },
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
    }
    .team-card-modern:hover .avatar-modern {
      border-radius: 50%;
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
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
  `;

  return (
    <section className="team team-modern" id="team">
      <style>{styles}</style>
      <h2>Meet Our Team</h2>
      <p className="team-intro">The architects and engineers building the future of collaboration.</p>
      <div className="team-grid">
        {members.map((m, i) => (
          <div key={i} className="team-card animate-card team-card-modern">
            <div className="avatar-modern">
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
    <div className="footer-content-wrapper">
      {/* Promotional Banner */}
      <div className="footer-promo-banner">
        <h3>Ready to Level Up Your Skills?</h3>
        <p>Don't miss out on our exclusive workshops and networking opportunities. Join the SkillSangh community today!</p>
      </div>

      {/* Advertisement Slot */}
      <div className="footer-ad-slot">
        {/* This area is reserved for future advertisement integrations. */}
        <p>Advertisement Slot: Reach out to us for promotional opportunities.</p>
      </div>

      {/* Links and Copyright Information */}
      <div className="footer-links-and-info">
        <p>&copy; {new Date().getFullYear()} SkillSangh. All rights reserved.</p>
         <p className="footer-link-item">
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="footer-registration-link">
            Registration Form
          </a>
        </p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <NoticeBoard />
        <Hero />
        <Events />
        <Features />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// Render the application using React 18 createRoot
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);