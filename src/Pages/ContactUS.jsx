import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactUS.css'
import CTACards from '../components/CTAcards';
import MapsImg from '../assets/images/MapsImg.svg'

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardGroupRef = useRef(null);
  const skipWaitCardRef = useRef(null);

  useEffect(() => {
    // 1. Initial Page Load Animation (Second screenshot text)
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );

    // 2. Scroll Trigger Animation for Third Screenshot Cards
    gsap.fromTo(
      cardGroupRef.current.querySelectorAll('.glass-card'),
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardGroupRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1, // Smooth animation on scroll
        },
      }
    );

    // 3. Scroll Trigger Animation for 4th Screenshot (Skip the Wait Card)
    gsap.fromTo(
      skipWaitCardRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skipWaitCardRef.current,
          start: 'top 85%',
          end: 'top 40%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="page-container">
      {/* Hero Section */}
     

      {/* Grid Cards Section (3rd Screenshot) */}
      <section ref={cardGroupRef} className="grid-section">
        {/* Left Side: Message Form Card */}
        <div className="glass-card form-card">
          <h2>Send a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>FULL NAME</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="john@company.com" />
              </div>
            </div>
            <div className="form-group">
              <label>SERVICE INTERESTED IN</label>
              <select defaultValue="Cinematography & Production">
                <option>Cinematography & Production</option>
                <option>Cyber Storytelling</option>
                <option>Performance Data Analytics</option>
              </select>
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea placeholder="Tell us about your project goals..."></textarea>
            </div>
            <button type="submit" className="action-btn">Send Mission Brief</button>
          </form>
        </div>

        {/* Right Side: Info & Map Stack */}
        <div className="info-stack">
          <div className="glass-card contact-info-card">
            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <h3>Regional Headquarters</h3>
                <p>VC Plaza, 1st floor, opp SBI bank <br />kukatpally, Hyderabad 500072<br />India</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">📞</div>
              <div>
                <h3>Direct Lines</h3>
                <p>+91 7661813635</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">✉️</div>
              <div>
                <h3>Email Inquiries</h3>
                <p>contact@afadagency.studio</p>
              </div>
            </div>
          </div>

          {/* Dummy Map Container */}
          <div className="map-card">
            <div className="map-placeholder">
              <div className="map-pins">
                <span className="pin"></span>
                <span className="pin"></span>
              </div>
<a 
href="https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=VC+Plaza,+1st+Floor,+Opp+SBI+Bank,+Kukatpally,+Hyderabad,+Telangana"        target="_blank" 
        rel="noopener noreferrer" 
        className="map-link"
      >
        VIEW ON GOOGLE MAPS
      </a>            </div>
          </div>
        </div>
      </section>

      {/* Skip The Wait Section (4th Screenshot Custom Card) */}
   

      <CTACards 
        title="Want To Skip"
        spanText="The Wait?"
        description="Book a direct 1-on-1 strategy call with our Creative Director to discuss your brand's trajectory."
        btnText="Book Free Strategy Call"
        description2='Available: Mon-Fri'
        
      />
    </div>
  );
};

export default ContactPage;



