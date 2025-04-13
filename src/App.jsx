import { useState } from 'react'
import profileImage from './assets/01.jpg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        {/* Profil fixe à gauche */}
        <div className="fixed-profile">
          <div className="profile-card">
            <div className="profile-image-container">
              <img src={profileImage} alt="Harilala RAKOTOMARO" className="profile-image" />
              <div className="profile-background"></div>
            </div>
            <h2>Harilala RAKOTOMARO</h2>
            <p>Développeur Web basé à Madagascar</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="quote">
              <p>"La simplicité est la sophistication suprême."</p>
            </div>
          </div>
        </div>

        {/* Contenu défilant à droite */}
        <div className="scrollable-content">
          <section id="accueil" className="content-section">
            <div className="hero-content">
              <p className="hello-text">Bonjour !</p>
              <h1 className="hero-title">Je suis Harilala RAKOTOMARO, un développeur web passionné par la création d'expériences numériques innovantes.</h1>
              <div className="availability">
                <span className="availability-dot"></span>
                <span>Disponible pour des missions freelance</span>
              </div>
              <a href="#" className="download-cv">Télécharger CV</a>
            </div>
          </section>

          <section id="apropos" className="content-section">
            <h2 className="section-title">À Propos</h2>
            <div className="about-content">
              <div className="about-text">
                <p>Passionné par le développement web depuis plusieurs années, je crée des solutions numériques qui allient esthétique et fonctionnalité. Mon approche est centrée sur l'utilisateur, avec un souci constant de la qualité et de la performance.</p>
              </div>
              <div className="skills-container">
                <h3>Technologies Maîtrisées</h3>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h4>Frontend</h4>
                    <ul>
                      <li>React.js</li>
                      <li>JavaScript (ES6+)</li>
                      <li>HTML5 & CSS3</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Backend</h4>
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                      <li>API REST</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Outils</h4>
                    <ul>
                      <li>Git & GitHub</li>
                      <li>VS Code</li>
                      <li>Figma</li>
                      <li>Terminal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="content-section">
            <h2 className="section-title">Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <i className="fas fa-code"></i>
                <h3>Développement Web</h3>
                <p>Création de sites web et d'applications web modernes et responsives.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-mobile-alt"></i>
                <h3>Applications Mobile</h3>
                <p>Développement d'applications mobiles cross-platform avec React Native.</p>
              </div>
              <div className="service-card">
                <i className="fas fa-server"></i>
                <h3>Backend & API</h3>
                <p>Création d'APIs robustes et évolutives pour vos applications.</p>
              </div>
            </div>
          </section>

          <section id="travaux" className="content-section">
            <h2 className="section-title">Projets Réalisés</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <img src="project1.jpg" alt="Projet 1" />
                </div>
                <div className="project-info">
                  <h3>Nom du Projet 1</h3>
                  <p>Description détaillée du projet et des technologies utilisées.</p>
                  <div className="project-links">
                    <a href="#" className="project-link">Voir le Site</a>
                    <a href="#" className="project-link">Code Source</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="content-section">
            <h2 className="section-title">Contact</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Travaillons Ensemble</h3>
                <p>Je suis toujours ouvert aux nouvelles opportunités et collaborations.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:votre@email.com">votre@email.com</a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <a href="tel:+261123456789">+261 12 34 56 789</a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Madagascar</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
