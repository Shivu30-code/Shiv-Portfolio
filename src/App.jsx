import { useEffect, useState,useRef  } from 'react';
import { personal, navLinks, stats, skills, projects, experience, certificates } from './data/portfolioData';
import profile from './assets/shiv.jpg';
import emailjs from "@emailjs/browser";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const fullText = 'MERN Stack Developer | AI Enthusiast | Founder Mindset';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTyped(fullText.slice(0, index));
      index += 1; 
      if (index > fullText.length) index = 0;
    }, 80);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
    }, { threshold: 0.15 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="cursor-glow" />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero typed={typed} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">&lt;ShivamPal /&gt;</a>
      <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navLinks.map((link) => (
          <a key={link} onClick={() => setMenuOpen(false)} href={`#${link}`}>{link}</a>
        ))}
      </div>
      <a href="#contact" className="nav-hire">Hire Me</a>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
    </nav>
  );
}

function Hero({ typed }) {
  return (
    <section id="hero" className="hero">
      <div className="grid-bg" />
      <div className="hero-inner">
        <div className="hero-copy reveal visible">
          <div className="hero-badge"><span />Available for Work</div>
          <h1 className="hero-name"><span>Shivam</span><strong>Pal</strong></h1>
          <p className="hero-role">{typed}<i /></p>
          <p className="hero-desc">{personal.tagLine}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View My Work</a>
            <a className="btn ghost" href="#contact">Let's Talk</a>
          </div>
          <div className="hero-socials">
            <a href={personal.github}>GitHub</a>
            <a href={personal.linkedin}>LinkedIn</a>
            <a href={`mailto:${personal.email}`}>Email</a>
            <a
              href="/shivamResume-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="photo-wrapper reveal visible">
          <div className="orbit one"><span /></div>
          <div className="orbit two"><span /></div>
          <div className="photo-frame">
            <img
              src={profile}
              alt="Shivam Pal"
              className="profile-img"
            
            />
          </div>
          <div className="floating-tag tag-one">⚛️ React Developer</div>
          <div className="floating-tag tag-two">🚀 MERN-Stack Developer</div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ label, title, highlight }) {
  return (
    <div className="section-head reveal">
      <p>{label}</p>
      <h2>{title} <span>{highlight}</span></h2>
      <div className="divider" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <SectionHeader label="About" title="Who I" highlight="Am" />
      <div className="about-grid">
        <div className="about-text reveal">
          <p>I am a Computer Science Engineering student and full stack developer focused on building modern, responsive and business-ready web applications.</p>
          <p>My strongest work includes Star Venture, a real business platform, and AskMilo, a full-stack AI prompt library with admin, billing and subscription features.</p>
          <p>I enjoy creating premium UI, clean user flows, backend APIs and practical software that solves real problems.</p>
        </div>
        <div className="stats-grid reveal">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <SectionHeader label="Skills" title="Technology" highlight="Stack" />
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card reveal" key={skill.category}>
            <h3>{skill.icon} {skill.category}</h3>
            <div className="tag-row">
              {skill.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <SectionHeader label="Projects" title="Featured" highlight="Work" />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.name}>
            <div className="project-top">
              <div className="project-icon">{project.icon}</div>
              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <p className="project-type">{project.type}</p>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div className="impact">{project.impact}</div>
            <div className="stack-row">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <SectionHeader label="Experience" title="My" highlight="Journey" />
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item reveal" key={item.role}>
            <span className="dot" />
            <div className="exp-card">
              <div className="exp-top"><h3>{item.role}</h3><span>{item.period}</span></div>
              <h4>{item.company}</h4>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <SectionHeader label="Certificates" title="Learning &" highlight="Achievements" />
      <div className="cert-grid">
        {certificates.map((cert) => (
          <div className="cert-card reveal" key={cert.name}>
            <div>{cert.icon}</div>
            <div><h3>{cert.name}</h3><p>{cert.issuer}</p><span>{cert.year}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uta7ojc",
        "template_nlbwz88",
        form.current,
        "EOLMay_D3E56F0Ohm"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <SectionHeader label="Contact" title="Let's Build" highlight="Together" />

      <div className="contact-grid">
        <div className="contact-info reveal">
          <h3>Have a project, job opportunity or collaboration?</h3>
          <p>
            Send me a message for websites, AI tools, portfolio design and
            business platforms.
          </p>

          <a href={`mailto:${personal.email}`}>✉️ {personal.email}</a>
          <a href={`tel:${personal.phone}`}>📞 {personal.phone}</a>
          <a href="#">📍 {personal.location}</a>
        </div>

        <form ref={form} className="contact-form reveal" onSubmit={sendEmail}>
          <label>
            Name
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell me about your project"
              required
            ></textarea>
          </label>

          <button className="btn primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer>© 2026 <span>Shivam Pal</span>.</footer>;
}

export default App;
