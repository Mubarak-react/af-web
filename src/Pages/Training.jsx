import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Hook function package path logic import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Training.css'; // Importing our plain CSS configurations architecture layer directly inside scope.
import Footer from '../footer/Footer.jsx'
import CTACards from '../components/CTAcards.jsx';
import ProfessionalCameraTraining from '../assets/images/Professional Camera Training.svg'
import FeaturedCoursesCards from '../components/FeaturedCoursesCards.jsx';
// Register ScrollTrigger plugin pipeline definitions
gsap.registerPlugin(ScrollTrigger);


const Training = () => {
  const trainingPageContextRef = useRef(null);
const navigate = useNavigate(); // 2. Hook trigger function initialize wrapper map instance


  useEffect(() => {
    // Context boundaries isolate components configuration targets completely seamlessly
    const componentGSAPCtx = gsap.context(() => {
      
      // 1. Initial Loading Animation sequence mappings for Hero Sections nodes
      gsap.from('.hero-load-node', {
        y: 45,
        opacity: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out',
      });

      // 2. Continuous Loop Scroll Action handler processing functions setup maps structure
      // Triggered EVERY single time you view or scroll past targets!
      const animatedSectionWrappers = document.querySelectorAll('.scroll-animate-section');
      
      animatedSectionWrappers.forEach((sectionBlockInstance) => {
        const subLevelAnimateTargets = sectionBlockInstance.querySelectorAll('.scroll-reveal-child');
        
        gsap.from(subLevelAnimateTargets, {
          scrollTrigger: {
            trigger: sectionBlockInstance,
            start: 'top 85%', // Trigger points computation references
            end: 'bottom 15%',
            // Loops transitions flawlessly every up/down scrolling loop tracking instances sequence
            toggleActions: 'play reverse play reverse', 
          },
          y: 35,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out'
        });
      });

    }, trainingPageContextRef);

    return () => componentGSAPCtx.revert(); // Standard clean dynamic memory disposal cycles references loop mapping parameters execution runtime
  }, []);

  return (
    <div ref={trainingPageContextRef} className="training-root-container">
      
      {/* STATIC/STICKY BACKGROUND CANVAS ELEMENTS REFERENCE IMPLEMENTED WITHOUT EXTENSION FRAMEWORKS DEPENDENCIES */}
      <div className="training-sticky-bg" />

      {/* CORE FOREGROUND STRUCTURAL LAYOUT CANVAS ELEMENT */}
      <div className="training-content-canvas">
        
        {/* SECTION 1: HERO CONTAINER AREA */}
        <section className="training-page-section">
          <div className="split-hero-layout">
            
            {/* Left Content Column Layout elements block matching structures references template */}
            <div>
              <span className="media-badge hero-load-node">EXPERT-LED MEDIA TRAINING</span>
              <h1 className="hero-header-title hero-load-node">
                Professional <span className="neon-gradient-text">CINE</span> <br />
                Training Programs
              </h1>
              <p className="hero-paragraph-desc hero-load-node">
                Master industry-standard tools and techniques with our practical hands-on training courses led by experts. Elevate your creative vision to professional production standards.
              </p>
              <div className="btn-row-flex hero-load-node">
                <button className="action-gradient-btn">Explore Courses &rarr;</button>
                <button className="secondary-outline-btn">Download Syllabus</button>
              </div>
            </div>

            {/* Right Media Display Frame Element layout target nodes container mapping rules */}
            <div className="hero-load-node" style={{ width: '100%' }}>
              <div className="cinematic-preview-frame">
                <img src={ProfessionalCameraTraining} alt="Cinematographer operating premium cinema camera rig asset mockup layout structure" />
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

        {/* SECTION 2: CINECOMBO TRAINING PROGRAMS TRACKS ROW GRID LAYOUT */}
        <section className="training-page-section scroll-animate-section" style={{ flexDirection: 'column' }}>
          <div className="program-row-title-block">
            <div style={{ maxWidth: '640px' }}>
              <h2 className="scroll-reveal-child" style={{ fontSize: '38px', fontWeight: '800', marginBottom: '12px' }}>
                CineCombo Training <span className="neon-gradient-text">Program</span>
              </h2>
              <p className="scroll-reveal-child" style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '15px', lineHeight: 1.5 }}>
                Our flagship premium bundle designed to turn enthusiasts into industry-ready production professionals through intensive practical immersion.
              </p>
            </div>
            <button className="scroll-reveal-child action-gradient-btn" style={{ borderRadius: '30px', padding: '10px 20px', fontSize: '12px' }}>
              PREMIUM BUNDLE
            </button>
          </div>

          {/* Cards Flex Grid Wrapper components mapping targets block */}
          <div className="quad-cards-grid">
            {[
              { icon: '🔨', title: 'Hands-On Practical Training', desc: 'Direct access to industry-standard equipment including ARRI, RED, and Blackmagic systems.' },
              { icon: '💼', title: 'Real Client Projects', desc: 'Work on actual commercial sets and music video productions under expert supervision.' },
              { icon: '👥', title: 'Industry Mentorship', desc: 'One-on-one sessions with award-winning cinematographers and senior editors.' },
              { icon: '🗂️', title: 'Portfolio Development', desc: 'Leave with a professional showreel that showcases your technical skills to employers.' }
            ].map((cardInfo, index) => (
              <div key={index} className="transparent-glass-card scroll-reveal-child">
                <span style={{ fontSize: '24px', display: 'block' }}>{cardInfo.icon}</span>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '4px' }}>{cardInfo.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '13px', lineHeight: 1.5, fontWeight: 300 }}>{cardInfo.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FEATURED SPECIFIC SKILLS SEGMENTS GRID PATTERNS MODULES SECTIONS */}
        <section className="training-page-section" style={{ flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px auto' }}>
            <h2 className="scroll-reveal-child" style={{ fontSize: '40px', fontWeight: '800', marginBottom: '12px' }}>
              Featured <span className="neon-gradient-text">Courses</span>
            </h2>
            <p className="scroll-reveal-child" style={{ color: '#a1a1aa', fontWeight: 300 }}>
              Specific skill tracks designed for specialized roles in the media industry.
            </p>
          </div>

          <div className="featured-modules-grid">
            {[
              { img: 'image_ad9e03.jpg', title: 'Cinematography Training', desc: 'Industry-focused course teaching camera operations, cinematic lighting, and framing.', path:'/Cinimatography' },
              { img: 'image_ad9e03.jpg', title: 'Photography Training', desc: 'Professional course covering camera handling, composition, and commercial photography.', path:'/Photography' },
              { img: 'image_ad9e03.jpg', title: 'Video Editing Training', desc: 'Advanced course covering post-production, color grading, and motion graphics.', path:'/VideoEditing' },
              { img: 'image_ad9e03.jpg', title: 'Gimbal & Drone Training', desc: 'Focused on aerial cinematography and advanced camera stabilization techniques.', path:'/GimbalDrone' }
            ].map((moduleInfo, index) => (
              <div key={index} className="transparent-glass-card module-thumbnail-card scroll-reveal-child">
                <div className="module-img-container">
                  <img src={moduleInfo.img} alt={moduleInfo.title} />
                </div>
                <div className="module-text-padding">
                  <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{moduleInfo.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '12px', lineHeight: 1.5, fontWeight: 300 }}>{moduleInfo.desc}</p>
                  <button className="module-action-link" onClick={() => navigate(moduleInfo.path)}>View Module &rsaquo;</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <FeaturedCoursesCards/>

        {/* SECTION 4: CALL TO ACTION REGISTRATION PANEL VIEW CONTAINER LAYOUT */}
        <section className="training-page-section scroll-animate-section cta-banner-wrapper">
          <div className="transparent-glass-card cta-glass-panel scroll-reveal-child">
            <h2>Ready to Start Your Career in <span className="neon-gradient-text">Media?</span></h2>
            <p className='training-cta-description'>Enroll today and get hands-on experience with the same tools used by the world's leading production houses.</p>
            <div className="center-btn-row">
              <button className="action-gradient-btn">Apply Now</button>
              <button className="secondary-outline-btn">Talk to a Mentor</button>
            </div>
          </div>
        </section>

      
      </div>
      
    </div>
  );
};

export default Training;