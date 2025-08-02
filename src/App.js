import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Download, Star, Monitor, Database, Code, Brain, Cloud, Palette, Award, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import {Linkedin, Github } from 'lucide-react';


import './App.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsSidebarOpen(false);
  };

  const services = [
    {
      icon: <Monitor className="card-icon" />,
      title: "Web Development",
      description: "Modern, responsive websites using React.js, HTML, CSS, and JavaScript"
    },
    {
      icon: <Brain className="card-icon" />,
      title: "AI/ML Solutions",
      description: "Intelligent systems for healthcare, automation, and data analysis"
    },
    {
      icon: <Database className="card-icon" />,
      title: "Database Design",
      description: "Efficient database solutions using MySQL and MongoDB"
    },
    {
      icon: <Cloud className="card-icon" />,
      title: "Cloud Solutions",
      description: "Scalable cloud-based applications and chatbot systems"
    },
    {
      icon: <Code className="card-icon" />,
      title: "Algorithm Design",
      description: "Custom algorithms for data processing and optimization"
    },
    {
      icon: <Palette className="card-icon" />,
      title: "UI/UX Design",
      description: "User-friendly interfaces with modern design principles"
    }
  ];

  const projects = [
    { title: "AI Ventilator Control System", category: "Healthcare AI", status: "Smart India Hackathon 2023" },
    { title: "Cloud-Based AI Chatbot", category: "Cloud Computing", status: "Completed" },
    { title: "AI Mental Therapist Bot", category: "Healthcare AI", status: "Inventors Challenge 2024" },
    { title: "Data Redundancy Algorithm", category: "Data Science", status: "IISF Project 2024" },
    { title: "E-Learning Platform", category: "EdTech", status: "SIH & MSME 2025" },
    { title: "Smart Placement System", category: "Automation", status: "Published" }
  ];

  const certifications = [
    {
      title: "Python 101 for Data Science",
      provider: "Cognitive Class, IBM Developer Skills Network"
    },
    {
      title: "CS401: Operating Systems",
      provider: "Saylor Academy"
    },
    {
      title: "Cybersecurity Incident Response Planning & Management",
      provider: "Alison, CPD Accredited"
    },
    {
      title: "Machine Learning Certification",
      provider: "Professional Certification"
    },
    {
      title: "Midjourney for Beginners: Embark on Your Artistic Journey",
      provider: "Creative AI Certification"
    },
    {
      title: "Social Media Graphics Design and Video Editing",
      provider: "Canva"
    },
    {
      title: "Mastering Social Media Marketing: Brand Building & Growth",
      provider: "Digital Marketing Certification"
    },
    {
      title: "Internshala Student Partner (ISP)",
      provider: "Cohort 2024"
    },
    {
      title: "MongoDB Certification",
      provider: "ICT Academy"
    }
  ];

 const skills = [
  "C",
  "Python", 
  "HTML",
  "CSS",
  "ReactJS",
  "ExpressJS",
  "NodeJS",
  "MongoDB"
];
  return (
    <div className="portfolio-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-avatar">

  <img src="/diva.jpg" alt="A. Divakar" className="avatar-img" />
</div>


          <h1 className="profile-name">A. Divakar</h1>
          <p className="profile-title">Computer Science Student</p>
          
          {/* Rating */}
          <div className="profile-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star" />
              ))}
            </div>
            <span className="cgpa-text">8.7 CGPA</span>
          </div>

          <button 
              onClick={() => scrollToSection('contact')}
              className="hero-cta"
            >
              HIRE ME
            </button>
        </div>

        {/* Contact Info */}
        <div className="contact-section">
          <div className="contact-item">
            <Phone className="contact-icon" />
            <span className="contact-text">+91 9342739379</span>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" />
            <span className="contact-text">divakar.cs22@builderscollege.edu.in</span>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" />
            <span className="contact-text">Kangeyam, Tamil Nadu</span>
          </div>
        </div>

        {/* Languages */}
        <div className="skills-section">
          <h3 className="skills-title">Languages</h3>
          <div className="skill-item">
            <div className="skill-header">
              <span className="skill-name">Tamil</span>
              <span className="skill-percentage"></span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '100%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-header">
              <span className="skill-name">English</span>
              <span className="skill-percentage"></span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3 className="skills-title">Skills</h3>
          {skills.map((skill, index) => (
  <div key={index} className="skill-item">
    <div className="skill-header">
      <CheckCircle className="check-icon" />
      <span className="skill-name">{skill}</span>
    </div>
  </div>
))}
        </div>

        {/* Extra Skills */}
        <div className="extra-skills">
          <h3 className="skills-title">Extra Skills</h3>
          <div className="extra-skill-item">
            <CheckCircle className="check-icon" />
            <span className="extra-skill-text">Leadership</span>
          </div>
          <div className="extra-skill-item">
            <CheckCircle className="check-icon" />
            <span className="extra-skill-text">Team Management</span>
          </div>
          <div className="extra-skill-item">
            <CheckCircle className="check-icon" />
            <span className="extra-skill-text">Public Speaking</span>
          </div>
          <div className="extra-skill-item">
            <CheckCircle className="check-icon" />
            <span className="extra-skill-text">Problem Solving</span>
          </div>
          
          <a 
  href="/Divakar.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="download-cv-button"
>
 <a 
  href="/Divakar.pdf" 
  download="Divakar_Resume" 
  className="download-cv-button"
>
  <button className="download-cv-button">
    <Download className="download-icon" />
    DOWNLOAD CV
  </button>
</a>

</a>

        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation */}
        <nav className="navigation">
          <div className="nav-links">
            {['Home', 'About', 'Certifications', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <div>
              <h1 className="hero-title">I'm A. Divakar</h1>
              <h2 className="hero-subtitle">
                <span className="highlight">Computer Science</span> Student
              </h2>
              <p className="hero-description">
                Passionate about AI, full-stack development, and cloud technologies. 
                Building innovative solutions for healthcare, education, and automation.
              </p>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Leadership Roles</div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="hero-cta"
            >
              HIRE ME
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section white">
          <div className="about-content">
            <div className="about-grid">
              <div className="about-text">
                <h2>About Me</h2>
                <p>
                  I'm a dedicated Computer Science Engineering student at Kangeyam Institute of Technology 
                  with a passion for creating innovative solutions. My expertise spans across artificial 
                  intelligence, web development, and cloud technologies.
                </p>
                <p>
                  I've participated in multiple hackathons, published research papers, and led various 
                  technical initiatives. My goal is to leverage technology to solve real-world problems 
                  and make a positive impact on society.
                </p>
                
                <div className="about-details">
                  <div className="detail-item">
                    <h4>Education</h4>
                    <p>B.E Computer Science</p>
                    <p className="highlight">CGPA: 8.7</p>
                  </div>
                  <div className="detail-item">
                    <h4>Focus Areas</h4>
                    <p>Web Dev, AI/ML</p>
                    <p>Cloud Computing</p>
                  </div>
                </div>
              </div>
              
              <div className="about-sidebar">
                <div className="quick-facts">
                  <h3>Quick Facts</h3>
                  <div className="fact-item">
                    <Calendar className="fact-icon" />
                    <span className="fact-text">Born: August 6, 2003</span>
                  </div>
                  <div className="fact-item">
                    <MapPin className="fact-icon" />
                    <span className="fact-text">Location: Tamil Nadu, India</span>
                  </div>
                  <div className="fact-item">
                    <Award className="fact-icon" />
                    <span className="fact-text">Hackathon Winner</span>
                  </div>
                  <div className="fact-item">
                    <Users className="fact-icon" />
                    <span className="fact-text">College Ambassador</span>
                  </div>
                </div>
                
                <div className="hobbies">
                  <h4>Hobbies</h4>
                  <div className="hobby-tags">
                    <span className="hobby-tag">Poetry</span>
                    <span className="hobby-tag">Music</span>
                    <span className="hobby-tag">Singing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section gray">
          <div className="section-header">
            <h2 className="section-title">Certifications</h2>
            <p className="section-description">
              Professional certifications and courses completed to enhance my technical expertise
              across various domains including AI/ML, cybersecurity, and digital marketing.
            </p>
          </div>

          <div className="grid grid-3">
            {certifications.map((cert, index) => (
              <div key={index} className="card">
                <div className="card-icon-wrapper">
                  <Award className="card-icon" />
                </div>
                <h3 className="card-title">{cert.title}</h3>
                <p className="card-description">{cert.provider}</p>
               
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section white">
          <div className="section-header">
            <h2 className="section-title">My Services</h2>
            <p className="section-description">
              I offer comprehensive technology solutions from AI development to web applications, 
              focusing on innovation and practical implementation.
            </p>
          </div>

          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <div>
                  <button className="card-link">
                    Learn More <ArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section gray">
          <div className="section-header">
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-description">
              Showcasing innovative solutions in AI, healthcare, education, and automation 
              developed through hackathons and academic projects.
            </p>
          </div>

          <div className="grid grid-3">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="project-card">
                  <div className="project-icon-wrapper">
                    <Code className="project-icon" />
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <div className="project-status">
                    <CheckCircle className="project-status-icon" />
                    {project.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <button className="hero-cta">View All Projects</button>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section gradient">
          <div style={{maxWidth: '64rem', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '3rem'}}>
              Achievements & Recognition
            </h2>
            
            <div className="achievement-stats">
              <div className="achievement-item">
                <div className="achievement-number">5+</div>
                <div className="achievement-label">Hackathons</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">1</div>
                <div className="achievement-label">Research Paper</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">8+</div>
                <div className="achievement-label">Presentations</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">9</div>
                <div className="achievement-label">Certifications</div>
              </div>
            </div>

            <div className="achievement-highlight">
              <h3>Latest Publication</h3>
             <p>
  <a href="https://www.ijert.org/smart-and-automated-college-placement-system" target="_blank" rel="noopener noreferrer">
    "Smart and Automated College Placement System"
  </a> - International Journal of Engineering Research & Technology (IJERT), June 2025
</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
 

<section id="contact" className="section white">
  <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
    <h2 className="section-title">Let's Work Together</h2>
    <p className="section-description" style={{ marginBottom: '3rem' }}>
      I'm always excited to collaborate on innovative projects and discuss new opportunities.
      Let's connect and create something amazing together!
    </p>

    <div className="contact-grid">
      <div className="contact-card">
        <div className="contact-icon-wrapper">
          <Phone className="contact-icon-large" />
        </div>
        <h3>Phone</h3>
        <p>+91 9342739379</p>
      </div>

      <div className="contact-card">
        <div className="contact-icon-wrapper">
          <Mail className="contact-icon-large" />
        </div>
        <h3>Email</h3>
        <p>
  <a href="mailto:divakar.cs22@builderscollege.edu.in">
    divakar.cs22@builderscollege.edu.in
  </a>
</p>

      </div>

      <div className="contact-card">
        <div className="contact-icon-wrapper">
          <Linkedin className="contact-icon-large" />
        </div>
        <h3>LinkedIn</h3>
        <p>
          <a href="https://www.linkedin.com/in/divakar-a-958852266/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/divakar-cs
          </a>
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-icon-wrapper">
          <Github className="contact-icon-large" />
        </div>
        <h3>GitHub</h3>
        <p>
          <a href="https://github.com/DivakarVishnu" target="_blank" rel="noopener noreferrer">
            github.com/divakar-cs
          </a>
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-icon-wrapper">
          <MapPin className="contact-icon-large" />
        </div>
        <h3>Location</h3>
        <p>
  <a 
    href="https://www.google.com/maps/place/Kangeyam,+Tamil+Nadu" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Kangeyam, Tamil Nadu
  </a>
</p>

      </div>
    </div>

    <div className="contact-buttons">
      <button className="contact-button primary">Get In Touch</button>
     <a
  href="/Divakar.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button secondary"
>
  View CV
</a>

    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 A. Divakar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;