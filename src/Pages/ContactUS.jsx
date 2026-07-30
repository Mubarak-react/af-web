import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactUS.css'
import CTACards from '../components/CTAcards';
import MapsImg from '../assets/images/MapsImg.svg'
import Footer from '../footer/Footer';
import AfStudiosMapImg from '../assets/images/AfStudiosMapImg.svg'


const ContactPage = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  // Entrance Animations
  useGSAP(() => {
    gsap.from('.contactus-hero-title', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.contactus-hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.contactus-glass-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.4,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  // 3D Tilt Effect Handlers
  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  };

  return (
    <div className="contactus-wrapper" ref={containerRef}>
      {/* Background Glowing Lights */}
      <div className="contactus-glow contactus-glow-left"></div>
      <div className="contactus-glow contactus-glow-right"></div>

      <div className="contactus-content-container">
        {/* Section 1: Hero Header */}
        <header className="contactus-hero-header">
          <h1 className="contactus-hero-title">
            Let's Build the <span className="contactus-highlight-text">Future Together</span>
          </h1>
          <p className="contactus-hero-subtitle">
            Ready to scale your brand with cyber-cinematic storytelling and performance-driven data? Our team in Hyderabad is ready to deploy.
          </p>
        </header>

        {/* Section 2: Glassmorphism Contact Grid */}
        <div className="contactus-cards-grid">
          {/* Card 1: Location Map */}
          <div
            className="contactus-glass-card"
            ref={card1Ref}
            onMouseMove={(e) => handleMouseMove(e, card1Ref)}
            onMouseLeave={() => handleMouseLeave(card1Ref)}
          >
            <h2 className="contactus-card-heading">Our location</h2>
            <div className="contactus-map-box">
              <div className="contactus-map-placeholder">
                <img src={AfStudiosMapImg}/>
              </div>
              <a 
href="https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=VC+Plaza,+1st+Floor,+Opp+SBI+Bank,+Kukatpally,+Hyderabad,+Telangana"        target="_blank" 
        rel="noopener noreferrer" 
        className="contactus-map-btn"
      >
                VIEW ON GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* Card 2: Contact Details */}
          <div
            className="contactus-glass-card"
            ref={card2Ref}
            onMouseMove={(e) => handleMouseMove(e, card2Ref)}
            onMouseLeave={() => handleMouseLeave(card2Ref)}
          >
            <div className="contactus-info-list">
              {/* Regional HQ */}
              <div className="contactus-info-item">
                <div className="contactus-icon-badge">
                  <MapPin size={20} color="#7c3aed" />
                </div>
                <div>
                  <h3 className="contactus-info-title">Regional Headquarters</h3>
                  <p className="contactus-info-desc">
                    1st Floor, VC Plaza, Opp SBI Bank, Vivek Nagar<br />
                    Kukatpally, Hyderabad, 500072.
                  </p>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="contactus-info-item">
                <div className="contactus-icon-badge">
                  <Phone size={20} color="#6366f1" />
                </div>
                <div>
                  <h3 className="contactus-info-title">Direct Lines</h3>
                  <p className="contactus-info-desc">+91 7661813635</p>
                  <p className="contactus-info-desc">+91 7396526974</p>
                </div>
              </div>

              {/* Email Inquiries */}
              <div className="contactus-info-item">
                <div className="contactus-icon-badge">
                  <Mail size={20} color="#3b82f6" />
                </div>
                <div>
                  <h3 className="contactus-info-title">Email Inquiries</h3>
                  <p className="contactus-info-desc">contact@afadgency.com</p>
                  <p className="contactus-info-desc">hrteam@afadgency.com</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="contactus-info-item">
                <div className="contactus-icon-badge">
                  <Clock size={20} color="#06b6d4" />
                </div>
                <div>
                  <h3 className="contactus-info-title">Office Hours</h3>
                  <p className="contactus-info-desc">Monday to Friday: 9 AM - 6 PM</p>
                  <p className="contactus-info-desc">Saturday: 10 AM - 4 PM</p>
                </div>
              </div>

            </div>
            
          </div>
        </div>
        
                    <CTACards 
        title="Want To Skip"
        spanText="The Wait?"
        description="Book a direct 1-on-1 strategy call with our Creative Director to discuss your brand's trajectory."
        btnText="Book Free Strategy Call"
        description2='Available: Mon-Fri'
        
      />

      <Footer/>
      </div>

    </div>
  );
};

export default ContactPage;