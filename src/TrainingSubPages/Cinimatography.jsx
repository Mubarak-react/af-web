import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cinimatography.css'; // Pure plain CSS mapping inclusion
import FeaturedCoursesCards from '../components/FeaturedCoursesCards';
import CinematographyEquipment from '../assets/images/Cinematography Equipment.svg'
import FieldProduction from '../assets/images/Field Production.svg'
import ColorGrading from '../assets/images/Color Grading.svg'
import StudioSetup from '../assets/images/Studio Setup.svg'
import CurriculumButton from '../components/CurriculumButton'
import Footer from '../footer/Footer';
import CinimatographyCurriculum from '../assets/images/CINEMATOGRAPHY BROCHER AF STUDIOS 1.tif 1.svg'
import CTACards from '../components/CTAcards'
import CameraOperations from '../assets/images/Camera Operations.svg'
gsap.registerPlugin(ScrollTrigger);

const Cinimatography = () => {
  const trainingWrapperNodeRef = useRef(null);

  useEffect(() => {
    // Context container scope optimization variables initialization pipeline
    const structuralGSAPContext = gsap.context(() => {
      
      // 1. Initial Hero Element Fade In sequences
      gsap.from('.hero-reveal-node', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // 2. Loop Trigger Configurations: Scroll up/down chesinapudalla continuous replay events logic execution
      const layoutSectionBlocks = document.querySelectorAll('.scroll-replay-section');
      
      layoutSectionBlocks.forEach((individualSection) => {
        const nestedRevealTargets = individualSection.querySelectorAll('.scroll-reveal-node');
        
        gsap.from(nestedRevealTargets, {
          scrollTrigger: {
            trigger: individualSection,
            start: 'top 82%',
            end: 'bottom 18%',
            // Scroll down and back up triggers action playback sequence precisely every single time
            toggleActions: 'play reverse play reverse', 
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
        });
      });

    }, trainingWrapperNodeRef);

    return () => structuralGSAPContext.revert(); // Clear execution threads instantly safely
  }, []);

  return (
    <div ref={trainingWrapperNodeRef} className="training-layout-scope">
      
      {/* ORIGINAL SHARED GRADIENT BACKDROP BLUR ENGINE */}
      <div className="training-sticky-bg" />

      {/* CORE FOREGROUND LAYER SPACE CONTENT */}
      <div className="training-page-canvas">
        
        {/* SECTION 1: HERO LAYOUT */}
        <section className="training-viewport-section">
          <div className="hero-grid-split">
            
            <div>
              <span className="badge-label hero-reveal-node">MASTERCLASS SERIES 2026</span>
              <h1 className="hero-main-h1 hero-reveal-node">
                The Art of <br />
                <span className="text-neon-gradient">Visual Narrative</span>
              </h1>
              <p className="hero-sub-p hero-reveal-node">
                Master the mechanics of high-end cinema. From ARRI sensor physics to the psychological impact of lighting, we bridge the gap between technical expertise and artistic vision.
              </p>
              <div className="flex-btn-wrap hero-reveal-node">
                {/* <button className="btn-primary-gradient">Secure Enrollment</button>
                <button className="btn-secondary-outline">View Curriculum</button> */}
                <CurriculumButton 
                                                  imageUrl={CinimatographyCurriculum} 
                                                  buttonText="View Curriculum"
                                                />
              </div>
            </div>

            <div className="hero-reveal-node" style={{ width: '100%' }}>
              <div className="cinematic-img-frame">
                <img src={CinematographyEquipment} alt="Premium cinema camera ecosystem profile shot asset layout structure representation" />
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 2: MASTER EVERY FRAME LAYOUT DESIGN */}
        <section className="training-viewport-section scroll-replay-section" style={{ flexDirection: 'column' }}>
          <div className="section-headline-block">
            <h2 className="scroll-reveal-node">Master Every <span className="text-neon-gradient">Frame</span></h2>
            <p className="scroll-reveal-node" style={{ color: '#a1a1aa', fontWeight: 300, fontSize: '15px' }}>
              Our curriculum is built on the pillars of professional production, focusing on the intersection of hardware mastery and storytelling.
            </p>
          </div>

          <div className="master-frame-grid">
            <div className="training-glass-card grid-span-7 scroll-reveal-node" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Camera Operations</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: 300, lineHeight: 1.5 }}>
                  Learn the physics of light on sensors, shutter angles, and focal length psychology. Hands-on training with ARRI, RED, and Sony ecosystems.
                </p>
              </div>
              <div className="embedded-preview-media">
                <img src={CameraOperations} alt="Director setting camera values configuration matrix mapping metrics" />
              </div>
            </div>

            <div className="training-glass-card grid-span-5 scroll-reveal-node">
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Cinematic Lighting</h3>
              <p style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: 300, lineHeight: 1.5 }}>
                Mastering the 3-point setup is only the beginning. Control shadows to evoke raw cinematic emotion.
              </p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: '#18181b', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', color: '#a78bfa', border: '1px solid rgba(255,255,255,0.05)' }}>High-Key</span>
                <span style={{ background: '#18181b', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', color: '#a78bfa', border: '1px solid rgba(255,255,255,0.05)' }}>Film Noir</span>
                <span style={{ background: '#18181b', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', color: '#a78bfa', border: '1px solid rgba(255,255,255,0.05)' }}>Motivated Light</span>
              </div>
            </div>

            <div className="training-glass-card grid-span-4 scroll-reveal-node">
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Production Workflow</h3>
              <p style={{ color: '#a1a1aa', fontSize: '13px', fontWeight: 300, lineHeight: 1.5 }}>
                The digital intermediate process. From DIT station on set to final color grade sequences inside DaVinci Resolve suites interface maps.
              </p>
            </div>

            <div className="training-glass-card grid-span-8 scroll-reveal-node">
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Industry Mentorship</h3>
              <p style={{ color: '#a1a1aa', fontSize: '13px', fontWeight: 300, lineHeight: 1.5, marginBottom: '16px' }}>
                Learn directly from Experienced commercial video specialists cinematographers who have shaped modern visual culture. Each student receives 1-on-1 portfolio reviews and career path mapping.
              </p>
              <a href="#mentors" style={{ color: '#C084FC', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Meet the Mentors &rarr;</a>
            </div>
          </div>
        </section>

        {/* SECTION 3: INDUSTRY-GRADE HANDS-ON GEAR ROW STRUCTURES */}
        <section className="training-viewport-section scroll-replay-section">
          <div className="gear-split-layout">
            
            <div className="gear-media-stack scroll-reveal-node">
              <div className="square-media-box"><img src={StudioSetup} alt="Production crew workflow asset blueprint" /></div>
              <div className="square-media-box"><img src={FieldProduction} alt="Color correction panel visual setup" /></div>
              <div className="wide-media-box"><img src={ColorGrading} alt="Cinematographer tracking active production scene context parameters mapping data" /></div>
            </div>

            <div>
              <span className="badge-label scroll-reveal-node">UNCOMPROMISING INFRASTRUCTURE</span>
              <h2 className="scroll-reveal-node" style={{ fontSize: '38px', fontWeight: '800' }}>Industry-Grade <br />Hands-On Gear.</h2>
              <p className="scroll-reveal-node" style={{ color: '#a1a1aa', marginTop: '16px', fontWeight: 300, lineHeight: 1.6 }}>
                We don't just teach theory. Our facility is equipped with the latest production hardware used on major Hollywood features and premium commercials.
              </p>

              <div className="gear-list-group">
                {[
                  { title: 'ARRI Alexa Mini LF Ecosystem', details: 'Direct experience with the industry\'s gold standard sensor and LPL mount cinema lenses ecosystem.' },
                  { title: 'Aputure & Litepanel Array', details: 'Full DMX-controlled lighting grid setups configured dynamically for complex scene atmosphere design fields mapping rules.' },
                  { title: 'Blackmagic DaVinci Suite', details: 'Complete color-managed studio workflow tracks tracking variables from raw log acquisition to final mastered delivery outputs pipelines.' }
                ].map((gearItem, itemIdx) => (
                  <div key={itemIdx} className="gear-list-item scroll-reveal-node">
                    <div className="gear-icon-circle">✓</div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{gearItem.title}</h4>
                      <p style={{ color: '#a1a1aa', fontSize: '13px', fontWeight: 300, lineHeight: 1.4 }}>{gearItem.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION DESIGN WRAPPER BLOCK */}
        

         <CTACards 
        title="Your Future In Cinema"
        spanText="Start Today"
        description="Limited seats available for the upcoming cohort. Join the next generation of visual storytellers and master the craft of cinematic excellence."
        btnText="Download Brochure"
     
      />
 
        <FeaturedCoursesCards/>
        <Footer/>
      </div>
       
        
      
    </div>
  );
};

export default Cinimatography;