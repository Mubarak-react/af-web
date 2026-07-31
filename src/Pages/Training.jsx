import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Training.css'; 
import Footer from '../footer/Footer.jsx';
import CTACards from '../components/CTAcards.jsx';
import ProfessionalCameraTraining from '../assets/images/Professional Camera Training.svg';
import FeaturedCoursesCards from '../components/FeaturedCoursesCards.jsx';

gsap.registerPlugin(ScrollTrigger);

const Training = () => {
  const trainingPageContextRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Context scope for React cleanups
    const componentGSAPCtx = gsap.context(() => {

      // 1. Hero 3D Entrance Sequence
      gsap.from('.hero-load-node', {
        y: 60,
        z: -120,
        rotationX: 20,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Hero Image 3D Frame Animation
      gsap.from('.cinematic-preview-frame', {
        scale: 0.85,
        rotationY: -15,
        rotationX: 10,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
      });

      // 2. Sections 3D Scroll Reveal Animation Loop
      const animatedSectionWrappers = document.querySelectorAll('.scroll-animate-section');
      
      animatedSectionWrappers.forEach((sectionBlockInstance) => {
        const subLevelAnimateTargets = sectionBlockInstance.querySelectorAll('.scroll-reveal-child');
        
        if (subLevelAnimateTargets.length > 0) {
          gsap.from(subLevelAnimateTargets, {
            scrollTrigger: {
              trigger: sectionBlockInstance,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
            y: 70,
            z: -100,
            rotationX: -25,
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
          });
        }
      });

    }, trainingPageContextRef);

    // Refresh triggers after image/component layouts load fully
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      componentGSAPCtx.revert();
    }; 
  }, []);

  return (
    <div ref={trainingPageContextRef} className="training-root-container">
      
      {/* STATIC BACKGROUND CANVAS */}
      <div className="training-sticky-bg" />

      {/* CORE FOREGROUND STRUCTURAL CANVAS */}
      <div className="training-content-canvas">
        
        {/* SECTION 1: HERO CONTAINER AREA */}
        <section className="training-page-section">
          <div className="split-hero-layout perspective-container">
            
            {/* Left Content Column */}
            <div>
              <span className="media-badge hero-load-node">EXPERT-LED MEDIA TRAINING</span>
              <h1 className="hero-header-title hero-load-node">
                Professional <span className="neon-gradient-text">Media</span> <br />
                Training Programs
              </h1>
              <p className="hero-paragraph-desc hero-load-node">
                Master industry-standard tools and techniques with our practical hands-on training courses led by experts. Elevate your creative vision to professional production standards.
              </p>
              <div className="btn-row-flex hero-load-node">
                <button className="action-gradient-btn">View Curriculum</button>
              </div>
            </div>

            {/* Right Media Display Frame Element */}
            <div className="hero-load-node perspective-container" style={{ width: '100%' }}>
              <div className="cinematic-preview-frame 3d-target">
                <img src={ProfessionalCameraTraining} alt="Cinematographer operating premium cinema camera rig" />
                <div className="floating-count-badge">
                  <span style={{ fontSize: '20px' }}>🎓</span>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '800', lineHeight: 1.1 }}>500+</h4>
                    <p style={{ fontSize: '9px', textTransform: 'uppercase', color: '#a1a1aa', letterSpacing: '0.1em', marginTop: '2px' }}>Certified Students</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: CINECOMBO TRAINING PROGRAMS */}
        <section className="training-page-section scroll-animate-section" style={{ flexDirection: 'column' }}>
          <div className="program-row-title-block perspective-container">
            <div style={{ maxWidth: '720px' }}>
              <h2 className="scroll-reveal-child 3d-target" style={{ fontSize: '38px', fontWeight: '800', marginBottom: '12px' }}>
                CineCombo Training <span className="neon-gradient-text">Program</span>
              </h2>
              <p className="scroll-reveal-child 3d-target" style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '15px', lineHeight: 1.5 }}>
                Our flagship premium bundle designed to turn enthusiasts into industry-ready production professionals through intensive practical immersion.
              </p>
            </div>
          </div>

          {/* Cards Grid Wrapper with 3D perspective enabled */}
          <div className="quad-cards-grid perspective-container">
            {[
              { icon: '🔨', title: 'Hands-On Practical Training', desc: 'Direct access to industry-standard equipment including ARRI, RED, and Blackmagic systems.' },
              { icon: '💼', title: 'Industry certification', desc: 'Walk away with an industry-recognized certificate that transforms your passion into a fully qualified professional career.' },
              { icon: '👥', title: 'Placement Assistance', desc: 'To start your journey , Gain a direct line to media agencies and production houses actively recruiting trained creators.' },
              { icon: '🗂️', title: 'Portfolio Development', desc: 'Leave with a professional showreel that showcases your technical skills to employers.' }
            ].map((cardInfo, index) => (
              <div key={index} className="transparent-glass-card scroll-reveal-child 3d-target">
                <span style={{ fontSize: '24px', display: 'block' }}>{cardInfo.icon}</span>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '4px' }}>{cardInfo.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '13px', lineHeight: 1.5, fontWeight: 300 }}>{cardInfo.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FEATURED COURSES */}
        <FeaturedCoursesCards />

        {/* SECTION 4: CALL TO ACTION */}
        <CTACards 
          title="Ready to Start Your Career in"
          spanText="Media?"
          description="Enroll today and get hands-on experience with the same tools used by the world's leading production houses."
          btnText="Apply Now"
          btnText2="Talk To A Mentor"
        />

        <Footer />
      </div>
      
    </div>
  );
};

export default Training;